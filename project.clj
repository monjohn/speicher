(defproject temperature "0.1.0-SNAPSHOT"
  :description "a place to track temperature over time"
  :url "http://temperature-monjohn.rhcloud.com/"
    :plugins [;[lein-ring "0.7.5"]
              ]
    :dependencies [[org.clojure/clojure "1.6"]
                   [http-kit "2.1.16"]]
    :target-path "target/%s"
    :main ^:skip-aot webapp)
