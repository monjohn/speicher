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

(enable-console-print!)

(defn get-some [x]
  (go (let [response (<! (http/get "https://api.github.com/users" {:with-credentials? false}))]
        (prn (:status response))
        (prn (map :login (:body response))))))


(defn get-list [app kw]
  (go
  (let [ch (-> app :channels :response)
        response (<! (http/get (str "/" kw) {:edn-params {:list kw}}
                                  :headers {"accept" "application/edn"}))]
    (>! ch response))
  app))

(defn init-history
  "Set up Google Closure history management"
  [app]
  (let [h (goog.History.)]
    (.setEnabled h true)
    (e/listen h goog.History.EventType.NAVIGATE
              (fn [evt]
                (let [ch (-> app :channels :nav)
                      token (.-token evt)]
                  (.setToken h token)
                  (go (>! ch token)))))))

(defn handle-response [app {:keys [status body] :as resp}]
  (->> body read-string (assoc app :list )))

(defn load-app
  "Return a map containing the initial application"
  []
  {:state (atom {};(or (store/load) (data/fresh))
                )
   :channels {:nav (chan)
              :response (chan)
              :answer (chan)}
   :consumers {:nav println
               :response handle-response
               :answer get-some}})

(defn init-updates
  "For every entry in a map of channel identifiers to consumers,
  initiate a channel listener which will update the application state
  using the appropriate function whenever a value is recieved, as
  well as triggering a render."
  [app]
  (doseq [[ch update-fn] (:consumers app)]
    (go (while true
          (let [val (<! (get (:channels app) ch))
                _ (.log js/console (str "on channel [" ch "], recieved value [" val "]"))
                new-state (swap! (:state app) update-fn val)]
            (render/request-render app))))))

(defn ^:export main
  "Application entry point"
  []
  (let [app (load-app)]
    ; (store/init-persistence app)
    (init-history app)
    (init-updates app)
    (render/request-render app)
    (get-list app :daily)))

