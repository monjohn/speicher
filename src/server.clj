(ns server
  (:use [clojure.java.io :only (reader)]
        [clojure.pprint :only [pprint]]
        [compojure.route :only [files not-found]]
        [compojure.handler :only [site]] ; form, query params decode; cookie; session, etc
        [compojure.core :only [defroutes GET POST DELETE ANY context]]
        [org.httpkit.server]
        [org.httpkit.client :only [get] :rename {get http-get}])
  (:require [ring.middleware.reload :as reload]
            [clojure.data.json :as json]
            [clojure.edn :as edn]
            [file-db :as db]))

(def current-list (atom []))

(def level-limit {:daily 6
             :weekly 6
             :monthly 11
             :yearly 6})

(def next-level {:daily :weekly
                 :weekly :monthly
                 :monthly :yearly})

(defn get-list [kw]
  (db/load-data kw))

(defn level-complete? [level count]
  (= (get level-limit level)
       count))

(defn level-up [[a b c d]]
  (let [next-level  (get next-level d)]
    (db/append-to-list next-level [a b 0 next-level])))

(defn is-correct [[a b c d]]
  (if (level-complete? d c)
    (level-up [a b c d])
    [a b (inc  c) d]))



(defn finished [kw data]
  (db/save-data data :daily)
  (println "You have completed the list. Ready for the next?"))

(defn test-list []
  (let [list (get-list :daily)]
    (->>
     (map (fn [entry t-f]
            (if-not t-f entry
                    (is-correct entry))) list (cycle [true false]))
     (filter (comp not nil?) )
     (finished :daily))))


(defn make-response [data & [status]]
  {:status  (or status 200)
   :headers {"Content-Type" "Application/edn"}
   :body   (pr-str data)})

(defn search-for [req]
  (let [word (-> req :params :word)
        _ (println "Searching for: " word)
        pattern (re-pattern (str "^" word))
        finds
        (with-open [rdr (reader "./resources/data/de-en.txt")]
          (doall (filter  #(re-seq pattern %) (line-seq rdr))))]
    (make-response finds)))

(defn add-word [req]
  (println req)

  (let [entry  (-> req :params :entry)
        _ (println "entry: " entry)
        ger (first entry)
        eng (second entry)]
  (db/append-to-list :daily [ger eng 0 :daily])
  (make-response "Saved" 201)))

(defn list-request [req]
   (-> req  :route-params  :list
       edn/read-string
       get-list
       make-response))


(defroutes all-routes
  (POST "/add" [] add-word)
  (GET "/list/:list" [list] list-request)
  (GET "/search/:word" [word] search-for)
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
