(ns speicher.dev
    (:require
     [speicher.client :as cl] ;; <<<<--- require your main namespace
     [figwheel.client :as fw]))
;; do things you don't want to happen in production
;; (fw/start {
;;   :websocket-url   "ws://localhost:3449/figwheel-ws"
;;   :on-jsload (fn [] (print "reloaded"))
;; })


(cl/main)

