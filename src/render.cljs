(ns render
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


(q/defcomponent Word
  "The components for the words"
  [state input-chan]
  (d/div {} (d/p {:className "german"} "German Word")
         (d/button {:id "clear-completed"
                    :onClick #(go (>! input-chan [:right nil]))}
                   "Recognized it")))

(q/defcomponent Wordrow [row input-chan]
  (d/dl {}
        (d/dt {} (first row))
        (d/dd {} (second row))))


(q/defcomponent WordTable
  "A list of words rendered in table"
  [state input-chan]
;(println "WordTalbe: " state )
  (apply d/div {}
         (map #(Wordrow % input-chan) (:words state))))

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

(defn handle-enter-word-submit [input-chan _]
  (let [ger (.-value (.getElementById js/document "ger"))
        eng (.-value (.getElementById js/document "eng"))]
    (go (>! input-chan [:submit-entered [ger eng]])))
  false)

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

;; TODO: Check for empty list and save
(q/defcomponent ReviewPage [state]
;(println "ReviewPage: " (:words state))
  (let [word (first (:words state))]
    (d/div {:id "card"}
           (d/div {:id "german" :style {"display" "block"}}
                  (d/h2 nil (first word))
                  (d/button {:onClick toggle} "Show"))

           (d/div {:id "english" :style {"display" "none"}}
                  (d/p nil (second word))
                  (d/button {:onClick #(go (toggle)
                                         (>! (:input-chan state) [:answer :right]) )} "I remember")
                  (d/button {:onClick #(go (toggle)
                                           (>! (:input-chan state) [:answer :wrong]))} "Wrong-o"))
           )))


(q/defcomponent SearchTableRow [id top? g e]
  (d/div {}
        (d/span {:className "check-column"}
              (when top?  (d/input {:type "radio" :name "entry" :value (str id)})))
        (d/span {} g)
        (d/span {} e)))

(q/defcomponent SearchPage [{:keys [input-chan dictionary]}]
  "Page to search for and add new word to list"
  (let [handle-search (partial handle-search-submit input-chan)
        handle-new-word (partial handle-new-word-submit input-chan)]
    (d/div {}
           (d/form {} (d/input {:name "search" :id "term" :placeholder "enter new word"})
                   (d/button {:onClick handle-search} "Submit" )
                   (d/br)
                   (when dictionary
                     (d/form {:action "#" :onSubmit handle-new-word}
                             (d/fieldset {}
                                         (d/legend {} "Pick the definition which fits best")
                                         (d/p {}
                                              (d/span {} "Pick One ")
                                              (d/span {} "German ")
                                              (d/span {} "English "))
                                         (apply d/div {}
                                                (map-indexed (fn [i0 entry]
                                                               (apply d/p {}
                                                                      (map-indexed
                                                                       (fn [i1 [g e]]
                                                                         (SearchTableRow i0 (zero? i1) g e)) entry)))
                                                             (format-entries dictionary))))))
                   (d/button {:type "submit"} "Submit")))))


(q/defcomponent EnterPage [state]
  "Page to enter a German Word and its definition if it is already known"
  (let [handle-enter-word (partial handle-enter-word-submit (:input-chan state))]
    (d/div nil
           (d/form {:action "#"
                    :onSubmit handle-enter-word}
                   (d/input {:type "text"
                             :name "ger"
                             :id "ger"
                             :placeholder "German Word"})
                   (d/input {:type "text"
                             :name "eng"
                             :id "eng"
                             :placeholder "English Definition"})
                   (d/button {:type "submit"} "Submit")))))
(q/defcomponent NextPage [state]
  (d/h3 nil "Choose another list"))

(q/defcomponent Page
  "The root of the application"
  [state ch]
  (println state)
  (d/div {}
         (d/span {:onClick  #(go (>! ch [:show-list :daily]))} "Daily ")
         (d/span {:onClick  #(go (>! ch [:show-list :weekly]))} "Weekly ")
         (d/span {:onClick  #(go (>! ch [:show-list :monthly]))} "Monthly ")
         (d/span {:onClick  #(go (>! ch [:search-page nil]))} "Add Word using dictionary -")
         (d/span {:onClick  #(go (>! ch [:enter-page nil]))} " Enter New Word ")
         (d/h1 nil "Deutsch lernen")
         (condp = (:mode state)
           :enter-page (EnterPage state)
           :review-list (ReviewPage state)
           :next (NextPage state)
           :search-page (SearchPage state)
           (WordTable state ch))))

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
