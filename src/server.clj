(ns server
  (:use [compojure.route :only [files not-found]]
        [compojure.handler :only [site]] ; form, query params decode; cookie; session, etc
        [compojure.core :only [defroutes GET POST DELETE ANY context]]
        [org.httpkit.server]
        [org.httpkit.client :only [get] :rename {get http-get}]
        )
  (:require [file-db :refer [load-data]]
            [ring.middleware.reload :as reload]
            [clojure.data.json :as json]
            [clojure.edn :as edn]
            ))


(def level-limit {:daily 6
             :weekly 6
             :monthly 11
             :yearly 6})

(def subsequent-level {:daily :weekly
                        :weekly :monthly
                        :monthly :yearly})

(defn level-complete? [level count]
  (= (get level-limit level)
       count))

(defn level-up [[a b c d]]
  (let [next-level  (get subsequent-level d)] 
    [a b 0 next-level]))

(defn is-correct [[a b c d]]
  (if (level-complete? d c) 
    (level-up [a b c d])
    [a b (inc  c) d]))

(defn is-false [x]
  x)








(defn clojurize-form [m]
  (apply merge
         (map (fn [[k v]]
                {(keyword k) (edn/read-string v)})
              m)))


(defn data-dump [req]
  {:status  200
   :headers {"Content-Type" "text/html"}
   :body   (load-data)})



(defroutes all-routes
  (GET "/add" [] data-dump)
  (GET "/" []
    (-> 
     (ring.util.response/file-response "/public/index.html" 
                                       {:root "resources"})
           (ring.util.response/content-type "text/html")))
  ;;   (context "/user/:id" []
  ;;            (GET / [] get-user-by-id)
  ;;            (POST / [] update-userinfo))
  (files "/" {:root "resources/public/"} )
  (not-found "<p>Page not found.</p>"))


(defn handler []
  (if (= :dev :dev)
    (reload/wrap-reload (site #'all-routes)) ;; only reload when dev
    (site all-routes)))

(defn -main [& args]
  (let [port (Integer/parseInt (get (System/getenv) "OPENSHIFT_CLOJURE_HTTP_PORT" "8080"))
        ip (get (System/getenv) "OPENSHIFT_CLOJURE_HTTP_IP" "0.0.0.0")]
    (println "App started")
    (run-server (handler) {:ip ip :port port})))
