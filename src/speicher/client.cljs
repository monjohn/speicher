(ns ^:figwheel-always speicher.client
  (:require [cljs.reader :refer [read-string]]
            [cljs.core.async :refer [>! <!  chan]]
            [cljs-http.client :as http]
            [speicher.render :as render])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

;; Going through the list of words, right or wrong,
;; adjusting state accordingling

(defn fetch-list [state kw]
  (go (let [ch (:input-chan state)
            response (<! (http/get (str "/list/" kw)))]
        (>! ch [:response response]))))

(def level-limit {:daily 6
                  :weekly 6
                  :monthly 11
                  :yearly 6})

(def next-level {:daily :weekly
                 :weekly :monthly
                 :monthly :yearly})


(defn save-lists! [{:keys [words next-list current-list input-chan]
                      :as state}]
  (go (let [response (<! (http/post "/save"
                                    {:edn-params {:current-list current-list
                                                  :answered words
                                                  :next-list next-list}}))]
         (>! input-chan [:saved-list response]))))



(defn finished [state]
  (.destroy (:swiper state))
  (save-lists! state)
  (-> state
      (dissoc  :words :next-list :swiper)
      (assoc  :mode :next)))


(defn level-complete? [level count]
  (= (get level-limit level)
     count))

(defn level-up [state [ger eng c d]]
  (let [next-l  (get next-level d)]
    (-> state
        (assoc-in [:words 0] nil)
        (update-in [:next-list] conj [ger eng 0 next-l]))))

(defn correct [state idx]
 (let [[ger eng c list-kw] (get-in state [:words idx])]
   (.slideNext (:swiper state))
   (if (level-complete? list-kw c)
     (level-up state [ger eng c list-kw])
     (assoc-in state [:words idx] [ger eng (inc  c) list-kw]))))



(defn review-list [state list-kw]
  (fetch-list state list-kw)
  (assoc state :mode :review-list
    :swiper-init? false
         :current-list list-kw
         :answered []
         :next-list []))

;; Navigation and Communication with Server

(defn show-list [state kw]
  (do (fetch-list state kw)
   (assoc  state :mode :show-list)))

(defn show-search [state _]
  (assoc state :mode :search-page))

(defn show-enter [state _]
  (assoc state :mode :enter-page))

(defn lookup [state word]
  (go (let [ch (:input-chan state)
            response (<! (http/get (str "/search/" word)))]
       (>! ch [:definitions response])))
  (dissoc state :dictionary))

(defn add-new-word [state entry]
  (go (let [ch (:input-chan state)
            response (<! (http/post "/add" {:form-params {:entry entry}}))]
        (>! ch [:definition-added response]))))

(defn submit-selected [state entry-index]
  (go (let [entry (first (render/format-entry
                          (get (vec (:dictionary state))
                               (read-string (:entry  entry-index)))))]
        (add-new-word state entry)
        (dissoc state :dictionary))))


(defn submit-entered [state entered]
  (add-new-word state entered)
  state)

(defn handle-response [state {:keys [status body]}]
 ; (println "handle response: " (assoc state :words body))
  ( assoc state :words body))

(defn show-definitions [state {:keys [body]}]
  (assoc state :dictionary body))


(defn print-entry [state data]
  (println "print entry" data)
  state)
;;; ----------- Initialization ----------

(defn init-updates
  "For every entry in a map of channel identifiers to consumers,
  initiate a channel listener which will update the application state
  using the appropriate function whenever a value is recieved, as
  well as triggering a render."
  [{:keys [state functions]}]
  (let [input-chan (:input-chan @state)]
    (go (while true
          (let [[msg-name msg-data] (<! input-chan)
                _ (.log js/console (str "on channel [" msg-name "], received value [" msg-data "]"))
                update-fn  (get functions msg-name)]

             (swap! state update-fn msg-data)
            (render/request-render @state))))))

(defn load-app []
  (let [ch (chan)]
   {:state (atom {:input-chan ch
                  :mode :start
                  :current-list :daily})

    :functions {:correct correct
                :enter-page show-enter
                :definitions show-definitions
                :definition-added print-entry
                :response handle-response
                :review-list review-list
                :saved-list print-entry
                :search-term lookup
                :show-list show-list
                :search-page show-search
                :submit-entered  submit-entered
                :submit-selected  submit-selected
                :review-done finished
                :nav print-entry}}))

(defn ^:export main
  "Application entry point"
  []
  (let [app (load-app)
        state @(:state app)]
    ; (store/init-persistence app)
    (init-updates app)
    (render/request-render state)))
   ; (go (>! (:input-chan state) [:nav "Test"]))
