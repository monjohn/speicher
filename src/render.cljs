(ns render
  (:require [cljs.core.async :refer [>!]]
            [cljs.reader :refer [read-string]]
            [quiescent :as q :include-macros true]
            [quiescent.dom :as d]
            [clojure.walk :refer [keywordize-keys]]
             [clojure.string :refer [blank? capitalize split]]
)
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
       (assoc %1 k v)) {} )
   keywordize-keys))


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


(defn handle-search-submit [input-chan e]
;; TODO: add validation so that no word less than 3 letters get submitted
  (let [term (.-value (.getElementById js/document "term"))]
    (go (>! input-chan [:search-term  term])))
  false)

(defn handle-new-word-submit [input-chan e]
;; TODO: check if more than one word is checked
  (let [form (serialize-form e)]
      (go (>! input-chan [:add-new-word form ]))
    false))

(defn format-entry [entry]
(let [pair (split entry #" :: ")]
          (map (fn [g e] (vector g e)) (split (first pair) #" \|")
                     (split (second pair) #" \|"))))

(defn format-entries 
  "Takes list of entries, splits eng/ger in pairs,
  then splits the sublits and stiches them back together"
  [dict]
  (map format-entry dict))


(q/defcomponent Search-table-row [id top? g e]
  (d/tr {}
        (d/td {:className "check-column"}
              (when top?  (d/input {:type "radio" :name "entry" :value (str id)})))
        (d/td {} g)
        (d/td {} e)))


(q/defcomponent Search [{:keys [input-chan dictionary]}]
  "Page to search for and add new word to list"
  (let [handle-search (partial handle-search-submit input-chan)
        handle-new-word (partial handle-new-word-submit input-chan)]
    (d/div {}
           (d/form {} (d/input {:name "search" :id "term" :placeholder "enter new word"})
                  (d/button {:onClick handle-search} "Submit" ))
      (d/br)
      (when dictionary 
        (d/form {:action "#" :onSubmit handle-new-word}  
                
                (d/fieldset {}
                            (d/legend {} "Pick the definition which fits best"))
                (d/table {}
                         (d/tr {}
                               (d/th {} "Pick One")
                               (d/th {} "German")
                               (d/th {} "English"))
                         (apply d/div {}
                                (map-indexed (fn [i0 entry] 
                                               (apply d/tbody {} 
                                                      (map-indexed 
                                                       (fn [i1 [g e]] 
                                                         (Search-table-row i0 (= 0 i1) g e)) entry)))
                                             (format-entries dictionary))))
                (d/button {:type "submit"} "Submit"))))))



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
