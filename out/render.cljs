(ns render
  (:require [cljs.core.async :refer [>!]]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [clojure.walk :refer [keywordize-keys]]
             [clojure.string :refer [blank? capitalize split]])
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

;; ---------- Preparing Dictionary for Display

(def data '("lernen | lernend | gelernt | ich lerne | du lernst | er/sie lernt | ich/er/sie lernte | er/sie hat/hatte gelernt | deutsch lernen :: to learn {learned, learnt; learned, learnt} | learning | learned; learnt | I learn | you learn | he/she learns | I/he/she learned; I/he/she learnt | he/she has/had learned; he/she has/had learnt | to learn German" "lernen; sich aneignen; aufschnappen :: to pick up"))


(defn format-entries 
  "Takes list of entries, splits eng/ger in pairs,
  then splits the sublits and stiches them back together"
  [dict]
(println "format-entries: " dict)
  (map #(let [pair (split % #" :: ")]
          (interleave (split (first pair) #" \|")
                     (split (second pair) #" \|"))
          ) dict))

; "string"
; '(ger, eng)
; (def s2 (split (first s1) #" \|"))  
; (interleave ger eng)


(defn handle-search-submit [input-chan e]
;; TODO: add validation so that no word less than 3 letters get submitted
  (let [term (.-value (.getElementById js/document "term"))]
    (println (count term))
    (go (>! input-chan [:search-term  term])))
  false)

(q/defcomponent Search-table-row [g e]
  (d/tr {}
        (d/td {} g)
        (d/td {} e)))

(q/defcomponent Search [{:keys [input-chan dictionary]}]
  "Page to search for and add new word to list"
  (let [handle-fn (partial handle-search-submit input-chan)
        _ (println (format-entries dictionary))]
    (d/div {}
      (d/div {}
                  (d/input {:name "search" :id "term" :placeholder "enter new word"}))
      (d/button {:onClick handle-fn} "Submit" )
      (d/br)
      (when dictionary 
        (d/form {}
                (d/fieldset {}
                            (d/legend {} "Pick the definition which fits best"))
                (d/table {}
                         (d/tr {}
                               (d/td {} "German")
                               (d/td {} "English"))
                         (apply d/tbody {}
                                (map (fn [[g e]] d/tr {}
                                        ;(d/input {:type "radio" :name "entries" :value "hello"}) (d/span {} " ")
                                            (Search-table-row g e))
                                     (format-entries dictionary)))))
        (d/button {:onClick handle-fn} "Submit")))))



(q/defcomponent Page
  "The root of the application"
  [state input-chan]
  (d/div {}
         ;  (Header nil (:submit input-chan))
         (condp = (:mode state)
           :search-page (Search state)
           :dictionary (Search  state)
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
