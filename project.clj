(defproject speicher "0.1.0-SNAPSHOT"
  :description "My own personal German Flashcard maker"
  :url "http://temperature-monjohn.rhcloud.com/"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.2.1"]
                 [ring/ring "1.3.0"]
                 [http-kit "2.1.16"]
                 [org.clojure/data.json "0.2.5"]
                 ;clientside dependencies
                 [org.clojure/clojurescript "0.0-2665"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [quiescent "0.1.4"]
                 [cljs-http "0.1.24"]]

  :target-path "target/%s"
  :main ^{:skip-aot true} server


  :node-dependencies [[source-map-support "0.2.8"]]

  :plugins [[lein-cljsbuild "1.0.4"] [lein-npm "0.4.0"]]

  :repositories
  {"sonatype-oss-public" "https://oss.sonatype.org/content/groups/public/"}

  :source-paths ["src" "target/classes"]

  :clean-targets ["out" "speicher.js" "speicher.min.js"]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "resources/public/js/speicher.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :cache-analysis true
                                   :source-map true}}
                       {:id "release"
                        :source-paths ["src"]
                        :compiler {
                                   :output-to "resources/public/js/speicher.min.js"
                                   :preamble ["react-0.10.0.min.js"]
                       :externs ["react-externs-0.10.0.js"]
                                   :pretty-print false
                                   :optimizations :advanced}}]})
