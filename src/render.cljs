(ns render
  (:require [cljs.core.async :refer [>!]]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [clojure.walk :refer [keywordize-keys]]
             [clojure.string :refer [blank? capitalize split]]

            )
  (:require-macros [cljs.core.async.macros :refer [go]]))


;; (defn clojurize-form [m]
;;   (apply merge
;;          (map (fn [[k v]]
;;                 {(keyword k) (edn/read-string v)})
;;               m)))


(q/defcomponent Word
  "The components for the words"
  [state input-chan]
  (d/div {} (d/p {:className "german"} "German Word")
         (d/button {:id "clear-completed"
                    :onClick #(go (>! input-chan [:right nil]))}
                   "Recognized it")))

(q/defcomponent Wordrow [row input-chan]
  (d/tr {}
        (d/td {} (first row))
        (d/td {} (second row))))


(q/defcomponent WordTable
  "A list of words rendered in table"
  [state input-chan]
  (apply d/table {}
         (map #(Wordrow % input-chan) (:list state))))

(q/defcomponent DisplaySearch
  "Displays the list of definitions, with option to choose"
  [state input-chan]
  (println state)
  (apply d/ul {}
         (map #(d/li {} %) (-> state :dictionary)))
  )


(defn handle-search-submit [input-chan e]
;; TODO: add validation so that no word less than 3 letters get submitted
  (let [term (.-value (.getElementById js/document "term"))]
    (println (count term))
    (go (>! input-chan [:search-term  term])))
  false)

(q/defcomponent Search [{:keys [input-chan]}]
  "Page to search for and add new word to list"
  (let [handle-fn (partial handle-search-submit input-chan)]
  (d/div {}
         (d/form {:action "#"}
                 (d/input {:name "search" :id "term" :placeholder "enter new word"})
                 (d/button {:onClick handle-fn} "Submit" )))))



(q/defcomponent Page
  "The root of the application"
  [state input-chan]
  (d/div {}
         ;  (Header nil (:submit input-chan))
         (condp = (:mode state)
           :search-page (Search state)
           :dictionary (DisplaySearch  state)
           (WordTable state input-chan))))

;; Here we use an atom to tell us if we already have a render queued
;; up; if so, requesting another render is a no-op
(let [render-pending? (atom false)]
  (defn request-render
    "Render the given application state tree."
    [state]
    (when (compare-and-set! render-pending? false true)
      (.requestAnimationFrame js/window
                              (fn []
                                (q/render (Page state (:input-chan state))
                                          (.getElementById js/document "speicher"))
                                (reset! render-pending? false))))))
