(defproject speicher "0.1.0-SNAPSHOT"
  :description "My own personal German Flashcard maker"
  :url "http://speicher-monjohn.rhcloud.com/"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.2.1"]
                 [ring/ring "1.3.0"]
                 [fogus/ring-edn "0.2.0"]
                 [http-kit "2.1.16"]
                 [org.clojure/data.json "0.2.5"]
                 ;clientside dependencies
                 [org.clojure/clojurescript "0.0-2850"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [quiescent "0.1.4"]
                 [cljs-http "0.1.24"]
                 [figwheel "0.2.3-SNAPSHOT"]
                 [cljsjs/react "0.12.2-5"]]

  :target-path "target/%s"
  :main ^{:skip-aot true} speicher.server
  :node-dependencies [[source-map-support "0.2.8"]]
  :profiles {:dev { :plugins [ [lein-cljsbuild "1.0.4"]
                             [lein-npm "0.4.0"]
                             [lein-figwheel "0.2.3-SNAPSHOT"] ]}}

  :repositories
  {"sonatype-oss-public" "https://oss.sonatype.org/content/groups/public/"}

  :source-paths ["src"  "target/classes"]

  :clean-targets  ^{:protect false} ["out" "resources/public/js/speicher.js" "resources/public/js/speicher.min.js"]

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src" "dev_src" ]
                        :compiler {
                                   :output-to "resources/public/js/speicher.js"
                                   :output-dir "resources/public/js/out"
                                   :main speicher.dev
                                   :optimizations :none
                                   :asset-path "/js/out"
                                   :cache-analysis true
                                   :source-map true
                                   :source-map-timestamp true
                                   :pretty-print true}}
                       {:id "release"
                        :source-paths ["src"]
                        :compiler {;:main speicher.client
                                   :output-to "resources/public/js/speicher.min.js"
                                   :externs  ["Framework7.js"]
                                   :pretty-print true
                                   :optimizations :advanced}}]})
