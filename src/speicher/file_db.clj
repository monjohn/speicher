(ns speicher.file-db)
(import 'java.io.File)

(def path "./resources/data/")

(def data
   [["Tag" "day" 6 :daily]
     ["Woche" "week" 2 :daily ]
     ["Monat" "month" 3 :daily ]
     ["Jahr" "year" 2 :daily ]])


(def save-agent (agent nil))

(defn save-to-list [kw data]
  (let [file-name (name kw)
        tmp (str path file-name ".tmp")
        file (str path file-name ".edn")]
    (send-off save-agent
              (fn [_]
                (spit tmp (prn-str data))
                (.renameTo (File. tmp ) (File. file))))))

(defn load-data [kw]
  (let [file-name (name kw)]
      (read-string (slurp
                    (str path file-name ".edn")))))

(defn append-to-list [kw entry]
  (println "entry " entry)
   (->> (concat (load-data kw) entry)
       (save-to-list kw)))

;(save-data data :daily)


