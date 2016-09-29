(ns speicher.client-test
  (:require [cljs.test :refer-macros (deftest testing is run-tests)])
  (:require [speicher.client :refer (level-complete?)]))

(enable-console-print!)
(println "TESTING")
(deftest level-complete?-test
  (testing "level-complete?"
    (testing "Edge cases\n"
      (testing "all upper bounds"
        (is (= true (level-complete? :daily 6)))
        (is (= true (level-complete? :weekly 6)))
        (is (= true (level-complete? :monthly 11)))
        (is (= true (level-complete? :yearly 6)))))
    (testing "not complete")
    (is (= false (level-complete? :daily 1)))
    (is (= false (level-complete? :weekly 1)))
    (is (= false (level-complete? :monthly 1)))))

(deftest level-up
  (testing "Leveling up"
    (is (= {:words [nil]
            :next-level [["Tag" "day" 0 :weekly]]} (level-up {:words ["a"] :next-list []} ["Tag" "day" 6 :daily])))))
