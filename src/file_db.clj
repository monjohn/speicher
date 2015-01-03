(ns file-db)
(import 'java.io.File)

(def path "./resources/data/")


(def data 
   [["Tag" "day" 1 :daily]
     ["Woche" "week" 2 :daily ]
     ["Monat" "month" 3 :daily ]
     ["Jahr" "year" 2 :daily ]])



(def db (atom data))

(def save-agent (agent nil))

(defn save-data [data kw]
  (let [file-name (name kw)
        tmp (str path file-name ".tmp")
        file (str path file-name ".edn")]
    (send-off save-agent
              (fn [_]
                (spit tmp (prn-str data))
                (.renameTo (File. tmp ) (File. file))))))

;; (save-data data :daily)

(defn load-data [x]
  (let [file-name (name x)]
      (read-string (slurp 
                    (str path file-name ".edn")))))

(defn append-to-list [kw entry]
  (-> (load-data kw)
       (conj entry)
       (save-data kw)))


(let [file (java.io.File. "temp.tmp")]
  (println (.exists file))
  (println (.canWrite file))
  (println (.getPath file))
)


