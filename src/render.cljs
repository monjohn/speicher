(ns render
  (:require [cljs.core.async :refer [>!]]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d])
  (:require-macros [cljs.core.async.macros :refer [go]]))


(q/defcomponent Word
  "The components for the words"
  [app channels]
  (d/div {} (d/p {:className "german"} "German Word")
         (d/button {:id "clear-completed"
                           :onClick #(go (>! (:answer channels)
                                                  :right))}
                          "Recognized it")))

 (q/defcomponent Wordrow [row channels]
   (d/tr {}
         (d/td {} (first row))
         (d/td {} (second row))))


 (q/defcomponent WordTable
   "A list of words rendered in table"
   [app channels]
   (apply d/table {}
      (map #(Wordrow % channels) (:list app))))


(q/defcomponent App
  "The root of the application"
  [app channels]
  (d/div {}
       ;  (Header nil (:submit channels))
    (WordTable app channels)))

;; Here we use an atom to tell us if we already have a render queued
;; up; if so, requesting another render is a no-op
(let [render-pending? (atom false)]
  (defn request-render
    "Render the given application state tree."
    [app]
    (when (compare-and-set! render-pending? false true)
      (.requestAnimationFrame js/window
                              (fn []
                                (q/render (App @(:state app) (:channels app))
                                          (.getElementById js/document "speicher"))
                                (reset! render-pending? false))))))
