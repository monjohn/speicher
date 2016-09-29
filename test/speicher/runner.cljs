(ns speicher.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [speicher.client-test]))

(doo-tests 'speicher.client-test)
