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


(defn get-list [state kw]
  (go (let [ch (:input-chan state)
        response (<! (http/get (str "/" kw) {:edn-params {:list kw}}
                                  :headers {"accept" "application/edn"}))]
    (>! ch [:response response]))) 
  state)

(defn lookup [state word]
  (go (let [ch (:input-chan state)
        response (<! (http/get (str "/search/" word)
                                 {:headers {"accept" "application/edn"}}
                                ))]
    (>! ch [:definitions response])))
  state)


(defn handle-response [state {:keys [status body] :as resp}]
  (->> body read-string (assoc state :list )))

(defn show-definitions [state {:keys [body]}]
  (assoc state
         :dictionary body))

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
                 :mode :search-page
                 };(or (store/load) (data/fresh))
                )
   :functions {:nav print-entry
               :definitions show-definitions
               :response handle-response
               :search-term lookup
               :answer print-entry}})

(defn ^:export main
  "Application entry point"
  []
  (let [app (load-app)]
    ; (store/init-persistence app)
  ;  (init-history app)
    (init-updates app)
  ;  (render/request-render app)
    (get-list @(:state app) :daily)))

