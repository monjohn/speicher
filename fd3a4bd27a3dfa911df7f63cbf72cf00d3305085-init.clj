nil (do (set! *warn-on-reflection* nil) (require (quote cljsbuild.compiler) (quote cljsbuild.crossover) (quote cljsbuild.util)) (try (do (do (clojure.core/letfn [(copy-crossovers__3498__auto__ [] (cljsbuild.crossover/copy-crossovers "/Users/monte/Developer/speicher/target/base+system+user+dev/cljsbuild-crossover" (quote [])))] (copy-crossovers__3498__auto__) (clojure.core/when true (cljsbuild.util/once-every-bg 1000 "copying crossovers" copy-crossovers__3498__auto__)) (clojure.core/let [crossover-macro-paths__3499__auto__ (cljsbuild.crossover/crossover-macro-paths (quote [])) builds__3500__auto__ (clojure.core/for [opts__3501__auto__ (quote ({:parsed-notify-command {:shell ()}, :id "dev", :source-paths ["src"], :jar false, :notify-command nil, :incremental true, :assert true, :compiler {:source-map true, :cache-analysis true, :output-dir "out", :output-to "resources/public/speicher.js", :optimizations :none, :warnings true, :externs ["closure-js/externs"], :libs ["closure-js/libs"], :pretty-print true}}))] [opts__3501__auto__ (cljs.env/default-compiler-env (:compiler opts__3501__auto__))])] (clojure.core/loop [dependency-mtimes__3502__auto__ (clojure.core/repeat (clojure.core/count builds__3500__auto__) {})] (clojure.core/let [builds-mtimes__3503__auto__ (clojure.core/map clojure.core/vector builds__3500__auto__ dependency-mtimes__3502__auto__) new-dependency-mtimes__3504__auto__ (clojure.core/doall (clojure.core/for [[[build__3505__auto__ compiler-env__3506__auto__] mtimes__3507__auto__] builds-mtimes__3503__auto__] (clojure.core/binding [cljs.env/*compiler* compiler-env__3506__auto__] (cljsbuild.compiler/run-compiler (:source-paths build__3505__auto__) "/Users/monte/Developer/speicher/target/base+system+user+dev/cljsbuild-crossover" crossover-macro-paths__3499__auto__ (:compiler build__3505__auto__) (:parsed-notify-command build__3505__auto__) (:incremental build__3505__auto__) (:assert build__3505__auto__) mtimes__3507__auto__ true))))] (clojure.core/when true (java.lang.Thread/sleep 100) (recur new-dependency-mtimes__3504__auto__))))))) (java.lang.System/exit 0)) (catch cljsbuild.test.TestsFailedException e__3494__auto__ (java.lang.System/exit 1)) (catch java.lang.Exception e__3494__auto__ (do (.printStackTrace e__3494__auto__) (java.lang.System/exit 1)))))