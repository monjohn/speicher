(ns file-db)
(import 'java.io.File)

(defn file-name [suffix] 
  (str "./resources/data/data." suffix ))


(def data 
{:daily  [ ["Tag" "day" 1]]
 :weekly [["Woche" "week" 2]]
:monthly [["Monat" "month" 3]]
:yearly [["Jahr" "year" 2]]})

(def db (atom data))

(def save-agent (agent nil))

(defn save-data []
  (let [tmp (file-name "tmp")
        file (file-name "edn")]
    (send-off save-agent
              (fn [_]
                (spit tmp (prn-str @db))
                (.renameTo (File. tmp ) (File. file))))))

(defn load-data []
  (reset! db (read-string (slurp (file-name "edn")))))

(let [file (java.io.File. "temp.tmp")]
  (println (.exists file))
  (println (.canWrite file))
  (println (.getPath file))
)


