(defproject speicher "0.1.0-SNAPSHOT"
  :description "My own personal German Flashcard maker"
  :url "http://speicher-monjohn.rhcloud.com/"

  :dependencies [
                 [org.clojure/clojure "1.8.0"]
                 [compojure "1.5.1"]
                 [ring/ring "1.5.0"]
                 [fogus/ring-edn "0.3.0"]
                 [http-kit "2.2.0"]
                 [org.clojure/data.json "0.2.6"]
                 [environ "1.1.0"]
                 ;clientside dependencies
                 [org.clojure/clojurescript "1.9.229"]
                 [org.clojure/core.async "0.2.391"]
                 [quiescent "0.3.2"]
                 [cljs-http "0.1.41"]
                 [figwheel "0.5.8"]
                 [cljsjs/react "15.3.1-0"]
                 [com.cemerick/clojurescript.test "0.3.3"]]

  :target-path "target/%s"
  :main ^{:skip-aot true} speicher.server
  :node-dependencies [[source-map-support "0.2.8"]]
  :profiles {:dev { :plugins [ [lein-cljsbuild "1.0.4"]
                               [lein-npm "0.4.0"]
                               [lein-figwheel "0.2.3-SNAPSHOT"]
                               [com.cemerick/clojurescript.test "0.3.3"]]
                    :env {:production false}}
              :production {:env {:production true}}}
  :plugins [[lein-environ "1.1.0"]
            [lein-ancient "0.6.10"]]
  :uberjar-name "speicher.jar"

  :repositories {"sonatype-oss-public" "https://oss.sonatype.org/content/groups/public/"}

  :source-paths ["src"  "target/classes"]
  :clean-targets  ^{:protect false} ["out" "resources/public/js/speicher.js"
                                     "resources/public/js/speicher.min.js"]
  :cljsbuild {:builds [{:id "dev"
                        :source-paths ["src" "test"]
                        :compiler {:output-to "resources/public/js/speicher.js"
                                   :output-dir "resources/public/js/out"
                                   :main speicher.dev
                                   :optimizations :simple
                                   :asset-path "/js/out"
                                   :cache-analysis true
                                 ;  :source-map true
                                   :source-map-timestamp true
                                   :pretty-print true}}
                       {:id "release"
                        :source-paths ["src"]
                        :compiler {:output-to "resources/public/js/speicher.min.js"
                                   :externs  ["externs.js"]
                                   :pretty-print true
                                   :optimizations :advanced}}]})
