(ns speicher-test.client-test
  (:require-macros [cemerick.cljs.test :as m :refer (deftest testing are is)])
  (:require [cemerick.cljs.test :as t]
            [speicher.client :refer (level-complete?)]
            ))



(deftest level-complete?-test
  (testing "I don't do a lot\n"
    (testing "Edge cases\n"
      (testing "level-complete"
        (is (= true (level-complete? :daily 6)))))))

(deftest simple-addition
  (testing "simple-addition"
  (is (= 17 (+ 11 6)))))
