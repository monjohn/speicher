(defproject flash "0.1.0-SNAPSHOT"
  :description "My own personal German Flashcard maker"
  :url "http://temperature-monjohn.rhcloud.com/"
    :plugins [;[lein-ring "0.7.5"]
              ]
    :dependencies [[org.clojure/clojure "1.6.0"]
                   [org.clojure/core.match "0.3.0-alpha4"]
                   [compojure "1.2.1"]
                   [ring/ring "1.3.0"]
                   [http-kit "2.1.16"]
                   [org.clojure/data.json "0.2.5"]]
    :target-path "target/%s"
    :main ^{:skip-aot true} server)
