(ns ^:figwheel-always speicher.client
  (:require [clojure.browser.repl :as repl]
            [cljs.reader :refer [read-string]]
            [goog.events :as e]
         ;   [figwheel.client :as fw]
            [goog.History]
            [cljs.core.async :refer [>! <!  chan]]
            [cljs-http.client :as http]
            [speicher.render :as render])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

;; Going through the list of words, right or wrong,
;; adjusting state accordingling

(defn fetch-list [state kw]
  (go (let [ch (:input-chan state)
            response (<! (http/get (str "http://temperature-monjohn.rhcloud.com/list/" kw) ;{:edn-params {:list kw}}
                                   ))]
        (>! ch [:response response]))))

;; (defn fetch-list
;;   "For client-side development purposes only"
;;   [state kw]
;;   (let [data
;;     [["Anlässlich" "on the occasion of" 0 :daily] ["Jahr" "year" 0 :daily] ["erwägen" "consider" 0 :daily]]
;;   ]
;;         (go (>! (:input-chan state) [:response {:body data}]))))



(def level-limit {:daily 6
             :weekly 6
             :monthly 11
             :yearly 6})

(def next-level {:daily :weekly
                 :weekly :monthly
                 :monthly :yearly})


(defn save-lists! [{:keys [words next-list current-list input-chan]
                      :as state}]
  (go (let [response (<! (http/post "/save"
                                    {:edn-params {:current-list current-list
                                                  :answered words
                                                  :next-list next-list}}))]
         (>! input-chan [:saved-list response]))))



;; (defn words->answered [state entry]
;;   (-> state
;;       (update-in [:words] rest)
;;       (update-in [:answered] conj entry)))

;; (defn got-wrong [{:keys [words] :as state}]
;;   (words->answered state (first words)))

;; (defn got-right [{:keys [words] :as state}]
;;   (let [[ger eng c list-kw] (first words)]
;;     (if (level-complete? list-kw c)
;;       (level-up state [ger eng c list-kw])
;;       (words->answered state [ger eng (inc  c) list-kw]))))

(defn finished [state]
  (.destroy (:swiper state))
  (save-lists! state)
  (-> state
      (dissoc  :words :current-list :next-list :swiper)
      (assoc  :mode :start)))

;; (defn answer [state r-or-w]
;;   (let [updated (if (= r-or-w :right)
;;                   (got-right state)
;;                   (got-wrong state))]
;;     (if  (finished? updated)
;;       (do
;;         (finished-list updated)
;;         (assoc updated :mode :next))
;;       (do (.slideNext (:swiper state))
;;       updated))))


(defn level-complete? [level count]
  (= (get level-limit level)
     count))

(defn level-up [state [ger eng c d]]
  (let [next-l  (get next-level d)]
    (-> state
        (assoc-in [:words 0] nil)
        (update-in [:next-list] conj [ger eng 0 next-l]))))

(defn correct [state idx]
 (let [[ger eng c list-kw] (get-in state [:words idx])]
   (.slideNext (:swiper state))
    (if (level-complete? list-kw c)
      (level-up state [ger eng c list-kw])
      (assoc-in state [:words idx] [ger eng (inc  c) list-kw]) )))


(defn init-swiper [state _]
  (let [swiper (.swiper (:f7 state) ".swiper-container"
                        #js {:nextButton ".swiper-next-button"
                             :prevButton ".swiper-prev-button"})
        html "<div class='swiper-slide'><span>All Done? <br><a href=\"next.html\" class=\"button\"} >Save</a>
        </span></div>" ]
    (.append (js/Dom7 ".swiper-wrapper") html)
    (.update swiper)
    (assoc state :swiper-init? true :swiper swiper )))


(defn review-list [state list-kw]
  (fetch-list state list-kw)
  (assoc state :mode :review-list
    :swiper-init? false
         :current-list list-kw
         :answered []
         :next-list []))

;; Navigation and Communication with Server

(defn show-list [state kw]
  (do (fetch-list state kw)
   (assoc  state :mode :show-list)))

(defn show-search [state _]
  (assoc state :mode :search-page))

(defn show-enter [state _]
  (assoc state :mode :enter-page))

(defn lookup [state word]
  (go (let [ch (:input-chan state)
        response (<! (http/get (str "/search/" word)))]
    (>! ch [:definitions response])))
  (dissoc state :dictionary))

(defn add-new-word [state entry]
  (go (let [ch (:input-chan state)
            response (<! (http/post "/add" {:form-params {:entry entry}} ))]
        (>! ch [:definition-added response]))))

(defn submit-selected [state entry-index]
  (go (let [entry (first (render/format-entry
                          (get (vec (:dictionary state))
                               (read-string (:entry  entry-index)))))]
        (add-new-word state entry)
        (dissoc state :dictionary))))


(defn submit-entered [state entered]
  (add-new-word state entered)
  state)

(defn handle-response [state {:keys [status body]}]
 ; (println "handle response: " (assoc state :words body))
  ( assoc state :words body ))

(defn show-definitions [state {:keys [body]}]
  (assoc state :dictionary body))


;;; ----------- Initialization ----------

(defn init-updates
  "For every entry in a map of channel identifiers to consumers,
  initiate a channel listener which will update the application state
  using the appropriate function whenever a value is recieved, as
  well as triggering a render."
  [{:keys [state functions]}]
  (let [input-chan (:input-chan @state)]
    (go (while true
          (let [[msg-name msg-data] (<! input-chan )
                _ (.log js/console (str "on channel [" msg-name "], received value [" msg-data "]"))
                update-fn  (get functions msg-name)]

             (swap! state update-fn msg-data)
            (render/request-render @state))))))

(defn print-entry [state data]
  (println data)
  state)



(defn load-app
  "Return a map containing the initial application"
  []
  (let [ch (chan)
        f7 (js/Framework7.
            #js {:onPageInit (fn [app, page]
                               (case (.-name page)
                                 "index" (println "home page loaded")
                                 "review" (go (>! ch [:review-list :weekly]))
                                 "next" (go (>! ch [:review-done nil]))
                                 "show" (go (>! ch [:show-list :daily]))
                                 "search" (go (>! ch [:search-page nil]))
                                 (println "Nothing found ")))
                                })
        main (.addView f7 ".view-main")

        ]
  {:state (atom {:input-chan ch
                 :mode :start
                 :current-list :daily
                 :f7 f7
                 :main-view main
                 ;:swiper swiper
                 };(or (store/load) (data/fresh))
                )
   :functions {;:answer answer
               :correct correct
               :enter-page show-enter
               :definitions show-definitions
               :definition-added print-entry
               :init-swiper init-swiper
               :response handle-response
               :review-list review-list
               :saved-list print-entry
               :search-term lookup
               :show-list show-list
               :search-page show-search
               :submit-entered  submit-entered
               :submit-selected  submit-selected
               :review-done finished}}))

(defn ^:export main
  "Application entry point"
  []
  (let [app (load-app)
        state @(:state app)]
    ; (store/init-persistence app)
    (init-updates app)
    (render/request-render state)
  ;  (go (>! (:input-chan state) [:show-list :daily]))
    ))
