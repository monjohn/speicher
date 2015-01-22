(ns client
  (:require [clojure.browser.repl :as repl]
            [cljs.reader :refer [read-string]]
            [goog.events :as e]
            [goog.History]
            [cljs.core.async :refer [>! <!  chan]]
            [cljs-http.client :as http]
            [render :as render])
  (:require-macros [cljs.core.async.macros :refer [go]]))

;; (repl/connect "http://localhost:9000/repl")

(defn init-history
  "Set up Google Closure history management"
  [ch]
  (let [h (goog.History.)]
    (.setEnabled h true)
    (e/listen h goog.History.EventType.NAVIGATE
              (fn [evt]
                (let [token (.-token evt)]
                  (.setToken h token)
                  (go (>! ch [:nav  token])))))))

(enable-console-print!)

;; Going through the list of words, right or wrong, 
;; adjusting state accordingling


(defn fetch-list [state kw]
  (go (let [ch (:input-chan state)
            response (<! (http/get (str "/list/" kw) {:edn-params {:list kw}}))]
        (>! ch [:response response]))))


(def level-limit {:daily 6
             :weekly 6
             :monthly 11
             :yearly 6})

(def next-level {:daily :weekly
                 :weekly :monthly
                 :monthly :yearly})


(defn finished-list [{:keys [answered next-list current-list input-chan] 
                      :as state}]
  (go (let [response (<! (http/post "/save" 
                                    {:edn-params {:current-list current-list
                                                  :answered answered 
                                                  :next-list next-list}}))]
         (>! input-chan [:saved-list response]))))

(defn level-complete? [level count]
  (= (get level-limit level)
     count))

(defn level-up [state [ger eng c d]]
  (let [next  (get next-level d)]
    (-> state
        (update-in [:words] rest)
        (update-in [:next-list] conj [ger eng 0 next]))))

(defn words->answered [state entry]
  (-> state
      (update-in [:words] rest)
      (update-in [:answered] conj entry)))

(defn got-wrong [{:keys [words] :as state}]
  (words->answered state (first words)))

(defn got-right [{:keys [words] :as state}]
  (let [[ger eng c list-kw] (first words)]
    (if (level-complete? list-kw c)
      (level-up state [ger eng c list-kw])
      (words->answered state [ger eng (inc  c) list-kw]))))

(defn finished? [state]
  (not (seq (:words state))))

(defn answer [state r-or-w]
  (let [updated (if (= r-or-w :right)
                  (got-right state)
                  (got-wrong state))]
    (if  (finished? updated)
      (do
        (finished-list updated)
        (assoc updated :mode :next))
      updated)))

(defn review-list [state list-kw]
  (fetch-list state list-kw)
  (assoc state :mode :review-list 
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
            response (<! (http/post "/add" {:form-params {:entry entry}} ))]
        (>! ch [:definition-added response]))))

(defn submit-selected [state entry-index]
  (go (let [entry (first (render/format-entry  
                          (get (vec (:dictionary state)) 
                               (read-string (:entry  entry-index)))))]
        (dissoc state :dictionary))))
      

(defn submit-entered [state entered]
  (add-new-word state entered)
  state)

(defn handle-response [state {:keys [status body]}]
  ( assoc state :words body ))

(defn show-definitions [state {:keys [body]}]
  (assoc state :dictionary body))

;; Initial set up

(defn init-updates
  "For every entry in a map of channel identifiers to consumers,
  initiate a channel listener which will update the application state
  using the appropriate function whenever a value is recieved, as
  well as triggering a render."
  [{:keys [state functions]}]
  (let [input-chan (:input-chan @state)]
    (go (while true
          (let [[msg-name msg-data] (<! input-chan )
                _ (.log js/console (str "on channel [" msg-name "], received value [" msg-data "]"))
                update-fn  (get functions msg-name)]

             (swap! state update-fn msg-data)
            (render/request-render @state))))))

(defn print-entry [state data]
  (println data)
  state)

(defn load-app
  "Return a map containing the initial application"
  []
  {:state (atom {:input-chan (chan)
                 :mode :review-list
                 :current-list :daily
                 };(or (store/load) (data/fresh))
                )
   :functions {:answer answer
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
               :nav print-entry}})

(defn ^:export main
  "Application entry point"
  []
  (let [app (load-app)
        state @(:state app)]
    ; (store/init-persistence app)
    (init-history (:input-chan state))
    (init-updates app)
    (render/request-render state )
    (go (>! (:input-chan state) [:review-list :daily]))
    ))
