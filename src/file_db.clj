(ns d2.server-db)
(import 'java.io.File)
(def db (atom {}))


(def save-agent (agent nil))

(defn save-data []
  (send-off save-agent
    (fn [_]
      (spit "somefile.tmp" (prn-str @db))
      (.renameTo (File. "somefile.tmp") (File. "../../resources/data/data.edn")))))


(defn load-data []
  (reset! db (read-string (slurp "../../resources/data/data.edn"))))
