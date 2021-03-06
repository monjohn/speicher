(ns speicher.render
  (:require [cljs.core.async :refer [>!]]
            [cljs.reader :refer [read-string]]
            ; [cljsjs.react]
            [quiescent.core :as q :include-macros true]
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

(defn humanize [key-word]
  (-> key-word name capitalize (clojure.string/replace #"-|_" " ")))

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

;; TODO: Check for empty list and save
; (q/defcomponent ReviewPage [state]
;
;                 (apply d/div {:className "swiper-wrapper"}
;
;                        (map-indexed (fn [idx word] (Slides (:input-chan state) idx word))
;                                     (flatten (map (fn [x] [(first x) (second x)]) (:words state))))))
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
           (d/div "Enter German Word")
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



(q/defcomponent Link [state]
  (d/a {:className "link"
        :onClick  #(go
                    (let [mv (:main-view state)
                          ch (:input-chan state)]
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

(q/defcomponent Row
  :keyfn first
  [[ger eng score level]]
  (d/tr nil
    (d/td nil ger)
    (d/td nil eng)))

(q/defcomponent Table [state]
  (let [current-list (:current-list state)
        words (get-in state [:lists current-list :words])]
    (d/table {:className "table"}
      (d/thead nil
        (d/tr nil
          (d/th nil "German")
          (d/th nil "English")))
      (d/tbody nil
        (map #(Row %) words)))))

(q/defcomponent Main [state]
  (d/section nil
    (d/h1 {:className "title"} (str (capitalize (name (:current-list state) )) " List"))
    (Table state)))

(q/defcomponent Nav [state chans]
  (d/nav {:className "nav"}
    (d/div {:className "nav-left"}
      (d/a {:className "nav-item is-brand" :href "#"} "SPEICHER"))
    (d/div {:className "nav-center"})))

(defn send-message [state message]
  (fn []
    (go (>! (:input-chan state) message))))

(q/defcomponent Menu [state chans]
  (let [active-class (fn [key-word] (if (= (:nav state) key-word) "is-active" ""))
        link (fn [key-word]
                (d/li {:key (name key-word)}
                  (d/a {:onClick (send-message state [:show-list key-word])
                        :className (active-class key-word)}
                    (humanize key-word))))]
    (d/aside {:className "menu"}
      (d/div {:className "container"}
        (d/p {:className "menu-label"}
          (d/a {:onClick (send-message state [:review :daily])
                :className (active-class :review)}
            "Review"))
        (d/p {:className "menu-label"} "View")
        (d/ul {:className "menu-list"}
          (map link [:daily :weekly :monthly]))
        (d/p {:className "menu-label"} "Add New Words")
        (d/ul {:className "menu-list"}
          (map link [:search :enter-definition]))))))



(q/defcomponent Page [state chans]
  (d/div nil
    (d/section {:className "hero is-primary"}
      (d/div {:className "hero-body"}
        (d/div {:className "container"}
          (d/h1 {:className "title"}
            "Speicher")
          (d/h2 {:className "subtitle"}
            "Learn Your German"))))
    (d/div {:className "columns"}
      (d/div {:className "column is-one-quarter"}
        (Menu state chans))
      (d/div {:className "column"}
        (Main state chans)))))

;; Here we use an atom to tell us if we already have a render queued
;; up; if so, requesting another render is a no-op
(let [render-pending? (atom false)]
  (defn request-render
    "Render the given application state tree."
    [state]
    (when (compare-and-set! render-pending? false true)
      (.requestAnimationFrame js/window
          (fn []
            (q/render (Page state  (:input-chan state))
                      (.getElementById js/document "speicher"))))
      (reset! render-pending? false))))
