(ns speicher.render
  (:require [cljs.core.async :refer [>!]]
            [cljs.reader :refer [read-string]]
            [cljsjs.react]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [clojure.walk :refer [keywordize-keys]]
            [clojure.string :refer [blank? capitalize split]])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(defn toArray [js-col]
  (-> (clj->js [])
      (.-slice)
      (.call js-col)
      (js->clj)))


(defn serialize-form [e]
  (->>
   (toArray (.-elements (.-target e)))
   (filter #(.-checked %))
   (reduce
    #(let [k (.-name %2)
           v (.-value %2)]
       (assoc %1 k v)) {})
   keywordize-keys))


(q/defcomponent Nav [title]
  (d/div {:className "navbar"}
         (d/div {:className "navbar-inner"}
                (d/div {:className "left"}
                       (d/a {:href "#" :className "back link"}
                            (d/i {:className "icon icon-back"})
                            (d/span nil "Back")))
                (d/div {:className "center" :style {:left "22px"}}
                       title)
                (d/div {:className "right"}))))


(q/defcomponent Wordrow [row input-chan]
  (d/div {:className "accordion-item"}
         (d/div {:className "accordion-item-toggle"}
                (d/a {:href "#" :className "item-content item-link"}
                     (d/div {:className "item-inner"}
                            (d/div {:className "item-title"} (first row)))))
         (d/div {:className "accordion-item-content"}
                (d/div {:className "content-block"} (second row)))))


(q/defcomponent WordList
  "A list of words rendered in table"
  [state input-chan]
  (d/div nil
         (Nav "Review")
         (d/div {:className "page-content"}
                (d/div {:className "accordion-list list-block"}
                       (apply d/ul nil
                              (map #(Wordrow % input-chan) (:words state)))))))

;; ---------- Preparing Dictionary for Display


(defn handle-search-submit [input-chan e]
  ;; TODO: send message when a word less than 3 letters get submitted
  (let [term (.-value (.getElementById js/document "term"))]
    (go
     (when (< 2 (count term)) (>! input-chan [:search-term  term]))))
  false)

(defn handle-new-word-submit [input-chan e]
  (let [form (serialize-form e)]
    (go (>! input-chan [:submit-selected form]))
    false))

;; TODO: Add error message
(defn handle-enter-word-submit [input-chan e]
  (let [ger (.getElementById js/document "ger")
        eng (.getElementById js/document "eng")
        g (.-value ger)
        e (.-value eng)]
    ;(println (.-value ger))
    (when-not (or (blank? g) (blank? e))
      (do
        (go (>! input-chan [:submit-entered [g e]]))
        (set! (.-value ger) "")
        (set! (.-value eng) "")))
    false))

(defn format-entry
  "Takes entries, splits eng/ger in pairs,
  then splits the sublits and stiches them back together"
  [entry]
  (let [pair (split entry #" :: ")]
    (map (fn [g e] (vector g e)) (split (first pair) #" \|")
         (split (second pair) #" \|"))))

(defn format-entries [dict]
  (map format-entry dict))


(defn init-slider [state]
  (let [app (:f7 state)]
    (.swiper app ".swiper-container" #js {:nextButton ".swiper-next-button"
                                          :prevButton ".swiper-prev-button"})))

(q/defcomponent Slides
  "The components for the words"
  [ch idx word]
  (if (even? idx)
    (d/div {:className "swiper-slide"} (d/span nil word))
    (d/div {:className "swiper-slide"}
           (d/span nil  word)
           (d/br nil)
           (d/button {:className "button button-big  color-green"
                      :onClick #(go
                                 (>! ch [:correct (quot idx 2)]) )} "I remember"))))

;; TODO: Check for empty list and save
(q/defcomponent ReviewPage [state]
 ; (d/div {:className "swiper-custom"}
      ;   (Nav "Daily")
  ;       (d/div {:className "slider-container"}
                (apply d/div {:className "swiper-wrapper"}

                       (map-indexed (fn [idx word] (Slides (:input-chan state) idx word))
                                    (flatten (map (fn [x] [(first x) (second x)]) (:words state))))))

;))


(q/defcomponent SearchTableRow [id top? g e]
  (d/li {:className "accordion-item"}
        (d/div {:className "item-content"}
               (d/div  {:className "item-inner"}
                       (d/div {:className "item-title"} g)
                       (d/div {:className "item-after"} e)))))

(q/defcomponent SearchPage [{:keys [input-chan dictionary]}]
  "Page to search for and add new word to list"
  (let [handle-search (partial handle-search-submit input-chan)
        handle-new-word (partial handle-new-word-submit input-chan)]
    (d/div nil
           (Nav "Enter German Word")
           (d/form {:className "searchbar"
                    :onSubmit handle-search}
                   (d/div {:className "searchbar-input"}
                          (d/input {:type "search" :name "search" :id "term" :placeholder "Search"})
                          (d/a {:href "#" :className "searchbar-clear"}))
                   (d/button {:type "submit" :className "button button-round"} ">"))
           (when dictionary
             (d/div {:className "page-content"}
                    (d/div {:className "accordion-item list-block"}
                           (apply d/ul {}
                                  (map-indexed (fn [ind entry]
                                                 (println "Search Page" entry)
                                                 (SearchTableRow ind nil (ffirst entry ) (second (first entry))))
                                               (format-entries dictionary)))))))))


(q/defcomponent NextPage [state]
  (d/div nil
         (d/div {:className "navbar"}
                (d/div {:className "navbar-inner"}
                       (d/div {:className "left"}
                              (d/a {:href "index.html" :className "link"}
                                   (d/i {:className "icon icon-home"})
                                   (d/span nil "Home")))
                       (d/div {:className "center" :style {:left "22px"}}
                              "Choose another list")
                       (d/div {:className "right"})))
         (d/a {:href "review.html?list=weekly"} "Weekly")))


(q/defcomponent Link [state]
  (d/a {:className "link"
        :onClick  #(go
                    (let [mv (:main-view state)
                          ch (:input-chan state)]
                      (.. mv -router (loadPage "review.html"))
                      (>! ch [:show-list :daily])) false )} "Show List "))


(q/defcomponent Popup [{ch :input-chan}]
    (let [handle-enter-word (partial handle-enter-word-submit ch)]
     (d/div {:className "popup popup-add"}
            (d/div {:className "content-block"}
                   (d/div {:className "content-block-title"} "Add Words")
                   (d/div {:className "list-block"}
                          (d/form {:onSubmit handle-enter-word :name "new-word"}
                           (d/ul nil
                                 (d/li nil
                                       (d/div {:className "item-content"}
                                              (d/div {:className "item-inner"}
                                                     (d/div {:className "item-input"}
                                                            (d/input {:type "text" :placeholder "German Word"
                                                                      :name "ger" :id "ger"})))))
                                 (d/li nil
                                       (d/div {:className "item-content"}
                                              (d/div {:className "item-inner"}
                                                     (d/div {:className "item-input"}
                                                            (d/input {:type "text" :placeholder "English Word"
                                                                      :name "eng" :id "eng"}))))))
                           (d/div {:className "content-block"}
                                  (d/div {:className "row"}
                                         (d/div {:className "col-50"}
                                                (d/a {:href "#" :className "button button-big button-fill color-red close-popup"}
                                                     "Cancel"))
                                         (d/div {:className "col-50"}
                                                (d/input {:type "submit" :value "Submit"
                                                          :className "close-popup button button-big button-fill color-green"}))))))))))

(q/defcomponent HomePage [{:keys [input-chan main-view]}]
  (letfn [(load-page [file] (.. main-view -router (loadPage file)))]
   (d/div nil
          (d/div {:className "content-block-title"} "What would you like to do?")
          (d/div {:className "list-block"}
                 (d/ul nil
                       (d/li nil (d/a {:href "#"  :className "item-link"
                                       :onClick  #(go (load-page "review.html")
                                                     (>! input-chan [:show-list :daily]))}
                                      (d/div {:className "item-content"}
                                             (d/div {:className "item-inner"}
                                                    (d/div {:className "item-title"} "Review Daily List")))))
                       (d/li nil (d/a {:href "#"  :className "item-link"
                                       :onClick  #(go (load-page "review.html")
                                                     (>! input-chan [:show-list :weekly]))}
                                      (d/div {:className "item-content"}
                                             (d/div {:className "item-inner"}
                                                    (d/div {:className "item-title"} "Review Weekly List")))))
                       (d/li nil (d/a {:href "#" :className "item-link"
                                       :onClick #(go (load-page "search.html"))}
                                                  ;  (>! input-chan [:search-page nil])

                                      (d/div {:className "item-content"}
                                             (d/div {:className "item-inner"}
                                                    (d/div {:className "item-title"} "Look up new word in Dictionary")))))
                       (d/li nil (d/a {:href "#" :className "item-link"}
                                      (d/div {:className "item-content"}
                                             (d/div {:className "item-inner"}
                                                    (d/div {:className "item-title"} "Enter new word and definition"))))))))))


;; (q/defcomponent page
;;   "the root of the application"
;;   [state]
;;   (d/div {}
;;          ;;          (d/span {:onclick  #(go (>! ch [:show-list :monthly]))} "monthly ")
;;          (condp = (:mode state)
;;            :review-list (reviewpage state)
;;            :next (nextpage state)
;;            :search-page (searchpage state)
;;            (wordlist state (:input-chan state)))))



;; Here we use an atom to tell us if we already have a render queued
;; up; if so, requesting another render is a no-op
(let [render-pending? (atom false)]
  (defn request-render
    "Render the given application state tree."
    [state]
    (when (compare-and-set! render-pending? false true)
      (.requestAnimationFrame js/window
          (fn []
            (when-let [el (.getElementById js/document "popup")]
             (q/render (Popup state) el))
            (condp = (:mode state)
              :show-list (q/render (WordList state) (.getElementById js/document "show-page"))
              :review-list (do
                             (q/render (ReviewPage state) (.getElementById js/document "swiper"))
                             (when (and (:words state)
                                        (false? (:swiper-init? state)))
                                   (go (>! (:input-chan state) [:init-swiper nil]))))
              :search-page (q/render (SearchPage state) (.getElementById js/document "search-page"))
              :next (q/render  (NextPage state)  (.getElementById js/document "next-page"))
              :start (WordList state (:input-chan state) (.getElementById js/document "nav-options")))))
      (reset! render-pending? false))))
