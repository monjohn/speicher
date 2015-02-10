(ns speicher.render
  (:require [cljs.core.async :refer [>!]]
            [cljs.reader :refer [read-string]]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [clojure.walk :refer [keywordize-keys]]
            [clojure.string :refer [blank? capitalize split]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def data '("lernen | lernend | gelernt | ich lerne | du lernst | er/sie lernt | ich/er/sie lernte | er/sie hat/hatte gelernt | deutsch lernen :: to learn {learned, learnt; learned, learnt} | learning | learned; learnt | I learn | you learn | he/she learns | I/he/she learned; I/he/she learnt | he/she has/had learned; he/she has/had learnt | to learn German" "lernen; sich aneignen; aufschnappen :: to pick up"))

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
       (assoc %1 k v)) {} )
   keywordize-keys))


(q/defcomponent Nav [title]
  (d/div {:className "navbar"}
         (d/div {:className "navbar-inner"}
                (d/div {:className "left"}
                       (d/a {:href "#" :className "back link"}
                            (d/i {:className "icon icon-back"})
                            (d/span nil "Back")))
                (d/div {:className "center" :style {:left "22px"}
                        } title )
                (d/div {:className "right"}
                       ;(d/a {:href "contact.html" :className "link icon-only"} (d/i {:className "icon icon-plus"}"+"))
                       ))))

(q/defcomponent Word
  "The components for the words"
  [state input-chan]
  (d/div {} (d/p {:className "german"} "German Word")
         (d/button {:id "clear-completed"
                    :onClick #(go (>! input-chan [:right nil]))}
                   "Recognized it")))

(q/defcomponent Wordrow [row input-chan]
  (d/div {:className "accordion-item"}
         (d/div {:className "accordion-item-toggle"}
                (d/a {:href "#" :className "item-content item-link"}
                     (d/div {:className "item-inner"}
                            (d/div {:className "item-title"}(first row)))))
         (d/div {:className "accordion-item-content"}
                (d/div {:className "content-block"}(second row)))))


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
    (go (>! input-chan [:submit-selected form ]))
    false))


;; TODO: Add error message
(defn handle-enter-word-submit [input-chan e]
  (let [ger (.getElementById js/document "ger")
        eng (.getElementById js/document "eng")
        g (.-value ger)
        e (.-value eng) ]
    (println (.-value ger))
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

(defn toggle []
  (let [g (.getElementById js/document "german")
        e (.getElementById js/document "english")]
    (if (= (aget g "style" "display")  "block")
      (aset g "style" "display" "none" )
      (aset g "style" "display" "block"))
    (if (= (aget e "style" "display")  "block")
      (aset e "style" "display" "none" )
      (aset e "style" "display" "block"))))

(defn init-slider [state]
  (let [app (:f7 state)
        swiper  (.slider app ".swiper-container")]
    ))

;; TODO: Check for empty list and save
(q/defcomponent ReviewPage [state]
  (let [word (first (:words state))]
  ;  (init-slider state)
    (d/div nil
;;            (Nav(capitalize (name (:current-list state))))
;;            (d/div {:className "page-content"}
;;                   (d/div {:className "slider-custom"}
;;                          (d/div {:className "swiper-container swiper-init"}
;;                                 (d/div {:className "swiper-wrapper"}
;;                                        (d/div {:className "swiper-slide"}(d/span nil (first word)))
;;                                        (d/div {:className "swiper-slide"}(d/span nil (second word))
;;                                               ))
;;                                 (d/a {:href "#" :className "slider-prev-button"}(d/i {:className "icon icon-prev"}))
;;                                 (d/a {:href "#" :className "slider-next-button"}(d/i {:className "icon icon-next"}))
;;                                 )
                         )));))

;; TODO: Check for empty list and save
(q/defcomponent ReviewPage-old [state]
  (let [word (first (:words state))]
    (d/div nil
           (Nav(capitalize (name (:current-list state))))
           (d/div {:id "card" :className "page-content"}
                  (d/div {:id "german" :className "content-block" :style {"display" "block"}}
                         (d/h2 {:className "center"} (first word))
                         (d/button {:onClick toggle} "Show"))

                  (d/div {:id "english" :className "content-block" :style {"display" "none"}}
                         (d/h2 nil (second word))
                         (d/button {:onClick #(go (toggle)
                                                  (>! (:input-chan state) [:answer :right]) )} "I remember")
                         (d/button {:onClick #(go (toggle)
                                                  (>! (:input-chan state) [:answer :wrong]))} "Wrong-o"))
                  ))))


(q/defcomponent SearchTableRow [id top? g e]
  (do (println (type g) " - " e)
    (d/li {:className "accordion-item"}
  (d/div {:className "item-content"}
         (d/div  {:className "item-inner"}
               ;  (when top?  (d/input {:type "radio" :name "entry" :value (str id)})
                 (d/div {:className "item-title"} g)
                 (d/div {:className "item-after"} e))))))

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
                                  ;;                                                 (map-indexed (fn [i0 entry] (apply d/p {} (map-indexed (fn [i1 [g e]]
                                  ;;                                                                          (SearchTableRow i0 (zero? i1) g e)) entry)))
                                  (map-indexed (fn [ind entry]
                                                 (println entry)
                                                 (SearchTableRow ind nil (ffirst entry ) (second (first entry))))
                                               (format-entries dictionary)))))
             ))))


;; (q/defcomponent EnterPage [state]
;;   "Page to enter a German Word and its definition if it is already known"
;;   (let [handle-enter-word (partial handle-enter-word-submit (:input-chan state))]
;;     (d/div nil
;;            (d/form {:action "#"
;;                     :onSubmit handle-enter-word}
;;                    (d/input {:type "text"
;;                              :name "ger"
;;                              :id "ger"
;;                              :placeholder "German Word"})
;;                    (d/input {:type "text"
;;                              :name "eng"
;;                              :id "eng"
;;                              :placeholder "English Definition"})
;;                    (d/button {:type "submit"} "Submit")))))

(q/defcomponent NextPage [state]
  (d/h3 nil "Choose another list"))


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
                                                   (d/div {:className "item-title"} "Review")))))
                      (d/li nil (d/a {:href "#" :className "item-link"
                                      :onClick #(go (load-page "search.html")
                                                  ;  (>! input-chan [:search-page nil])
                                                    )}
                                     (d/div {:className "item-content"}
                                            (d/div {:className "item-inner"}
                                                   (d/div {:className "item-title"} "Look up new word in Dictionary")))))
                      (d/li nil (d/a {:href "#" :className "item-link"}
                                     (d/div {:className "item-content"}
                                            (d/div {:className "item-inner"}
                                                   (d/div {:className "item-title"} "Enter new word and definition")))))))

         )))


(q/defcomponent Page
  "The root of the application"
  [state]
  (d/div {}
         ;;          (d/span {:onClick  #(go (>! ch [:show-list :monthly]))} "Monthly ")
         ;;          (d/span {:onClick  #(go (>! ch [:search-page nil]))} "Add Word using dictionary -")
         ;;          (d/span {:onClick  #(go (>! ch [:enter-page nil]))} " Enter New Word ")
         (condp = (:mode state)
;           :enter-page (EnterPage state)
           :review-list (ReviewPage state)
           :next (NextPage state)
           :search-page (SearchPage state)
           (WordList state (:input-chan state)))))



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
              :review-list (q/render (ReviewPage state) (.getElementById js/document "review-page"))
              :search-page (q/render (SearchPage state) (.getElementById js/document "search-page"))
              :next (NextPage state)
              :start (WordList state (:input-chan state) (.getElementById js/document "nav-options")))
            )
                              )
      (reset! render-pending? false))))

