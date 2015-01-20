(ns client
  (:require [clojure.browser.repl :as repl]
            [cljs.reader :refer [read-string]]
            [goog.events :as e]
            [goog.History]
            [cljs.core.async :refer [>! <! chan]]
            [cljs-http.client :as http]
            [render :as render]
            )
  (:require-macros [cljs.core.async.macros :refer [go]]))

;; (repl/connect "http://localhost:9000/repl")

;; (defn init-history
;;   "Set up Google Closure history management"
;;   [app]
;;   (let [h (goog.History.)]
;;     (.setEnabled h true)
;;     (e/listen h goog.History.EventType.NAVIGATE
;;               (fn [evt]
;;                 (let [ch (-> app :state :input-chan)
;;                       token (.-token evt)]
;;                   (.setToken h token)
;;                   (go (>! ch token)))))))

(enable-console-print!)

;; (defn test-http [state word]
;;   (go (let [ch (:input-chan state)
;;             response (<! (http/post "/add" {:for-params {:entry word}}))]
;; (println response)))
;; )

(defn show-list [state kw]
  (go (let [ch (:input-chan state)
        response (<! (http/get (str "/list/" kw) {:edn-params {:list kw}}))]
    (>! ch [:response response]))) 
  (assoc  state :mode :show-list))

(defn show-search [state _]
  (assoc state :mode :search-page))

(defn show-enter [state _]
  (assoc state :mode :enter-page))

(defn lookup [state word]
  (go (let [ch (:input-chan state)
        response (<! (http/get (str "/search/" word)))]
    (>! ch [:definitions response])))
  state)

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
  ( assoc state :list body ))

(defn show-definitions [state {:keys [body]}]
  (assoc state :dictionary body))


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
                 :mode :show-list; :search-page
                 };(or (store/load) (data/fresh))
                )
   :functions {:nav print-entry
               :enter-page show-enter
               :definitions show-definitions
               :definition-added print-entry
               :response handle-response
               :search-term lookup
               :show-list show-list
               :search-page show-search
               :submit-entered  submit-entered
               :submit-selected  submit-selected
               :answer print-entry}})

(defn ^:export main
  "Application entry point"
  []
  (let [app (load-app)]
    ; (store/init-persistence app)
  ;  (init-history app)
    (init-updates app)
  ;  (render/request-render app)
    (show-list @(:state app) :daily)
    ))

