(ns speicher.server
  (:use [clojure.java.io :only (reader)]
        [clojure.pprint :only [pprint]]
        [compojure.route :only [files not-found]]
        [compojure.handler :only [site]] ; form, query params decode; cookie; session, etc
        [compojure.core :only [defroutes GET POST DELETE ANY context]]
        [ring.middleware.edn]
        [org.httpkit.server]
        [org.httpkit.client :only [get] :rename {get http-get}])
  (:require [ring.middleware.reload :as reload]

            [clojure.data.json :as json]
            [clojure.edn :as edn]
            [speicher.file-db :as db]))

(def current-list (atom []))

(defn edn-response [data & [status]]
  {:status  (or status 200)
   :headers {"Content-Type" "Application/edn"}
   :body   (pr-str data)})

(defn json-response [data & [status]]
  {:status  (or status 200)
   :headers {"Content-Type" "Application/json"}
   :body   (pr-str data)})

(def next-level {:daily :weekly
                 :weekly :monthly
                 :monthly :yearly})

(defn get-list [kw]
  (db/load-data kw))


;; (defn test-list []
;;   (let [words (get-list :daily)]
;;     (->>
;;      (map (fn [entry t-f]
;;             (if-not t-f entry
;;                     (is-correct entry))) words (cycle [true false]))
;;      (filter (comp not nil?) )
;;      (finished :daily))))

; curl -X POST -H "Content-Type: application/edn" http://localhost:8080/save/:daily -d "{:data [{:db-name scratch} ["ger" "eng" 0 :daily]]}"
; curl
(defn save-list
  "Checks data is a map, save current list, if sequential, save current list,
  then append the entries in the next-level list"
  [{:keys [edn-params route-params]}]
;  (println edn-params)
  (let [kw (:current-list edn-params)
        next-list (:next-list edn-params)]
    (db/save-to-list kw (:answered edn-params))
    (when (seq next-list)
      (db/append-to-list (get next-level kw) next-list))
    (edn-response "Saved" 201)))


(defn format-entry
  "Takes entries, splits eng/ger in pairs,
  then splits the sublits and stiches them back together"
  [entry]
  (let [pair (split entry #" :: ")]
    (json/write-str
    (map (fn [g e] (vector g e)) (split (first pair) #" \|")
         (split (second pair) #" \|")))))

(defn format-entries [dict]
  (map format-entry dict))

(defn search-json [req]
  (let [word (-> req :params :word)
        _ (println "Searching for: " word)
        pattern (re-pattern (str "^" word))
        finds (with-open
                [rdr (reader "./resources/data/de-en.txt")]
          (doall (filter  #(re-seq pattern %) (line-seq rdr))))]
    (-> finds
        format-entries
        edn-response)))

(defn search-for [req]
  (let [word (-> req :params :word)
        _ (println "Searching for: " word)
        pattern (re-pattern (str "^" word))
        finds (with-open
                [rdr (reader "./resources/data/de-en.txt")]
          (doall (filter  #(re-seq pattern %) (line-seq rdr))))]
    (edn-response finds)))


(defn add-new-word [req]
  (let [entry  (-> req :params :entry)
        ger (first entry)
        eng (second entry)]
  (db/append-to-list :daily [ger eng 0 :daily])
  (edn-response "Saved" 201)))


(defn list-request [req]
  (println req)
   (-> req  :route-params  :list
       edn/read-string
       get-list
       edn-response))


(defroutes all-routes
  (POST "/add" [] add-new-word)
  (POST "/save" [list] save-list)
  (GET "/list/:list" [list] list-request)
  (GET "/search/:word" [word] search-for)
  (GET "/json/:word" [word] search-json)
  (GET "/" []
       (-> (ring.util.response/file-response "/public/index.html"
                                             {:root "resources"})
           (ring.util.response/content-type "text/html")))
  (files "/" {:root "resources/public/"} )
  (not-found "<p>Page not found.</p>"))


(defn handler []
  (if (= :dev :dev)
    (->  (site #'all-routes)
         reload/wrap-reload
         wrap-edn-params) ;; only reload when dev
    (site all-routes)))

(defn -main [& args]
  (let [port (Integer/parseInt (get (System/getenv) "OPENSHIFT_CLOJURE_HTTP_PORT" "8080"))
        ip (get (System/getenv) "OPENSHIFT_CLOJURE_HTTP_IP" "0.0.0.0")]
    (println "App started on " ip port)
    (run-server (handler) {:ip ip :port port})))
