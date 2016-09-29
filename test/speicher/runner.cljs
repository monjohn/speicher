(ns speicher.runner
    (:require [doo.runner :refer-macros [doo-tests]]
              [your-project.core-test]))

(doo-tests 'speicher.client-test)
