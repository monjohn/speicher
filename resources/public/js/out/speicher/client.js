// Compiled by ClojureScript 0.0-2727 {}
goog.provide('speicher.client');
goog.require('cljs.core');
goog.require('speicher.render');
goog.require('clojure.browser.repl');
goog.require('cljs_http.client');
goog.require('goog.History');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
speicher.client.fetch_list = (function fetch_list(state,kw){
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__){
return (function (state_9773){
var state_val_9774 = (state_9773[(1)]);
if((state_val_9774 === (3))){
var inst_9771 = (state_9773[(2)]);
var state_9773__$1 = state_9773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9773__$1,inst_9771);
} else {
if((state_val_9774 === (2))){
var inst_9762 = (state_9773[(7)]);
var inst_9766 = (state_9773[(2)]);
var inst_9767 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9768 = [new cljs.core.Keyword(null,"response","response",-1068424192),inst_9766];
var inst_9769 = (new cljs.core.PersistentVector(null,2,(5),inst_9767,inst_9768,null));
var state_9773__$1 = state_9773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9773__$1,(3),inst_9762,inst_9769);
} else {
if((state_val_9774 === (1))){
var inst_9762 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_9763 = [cljs.core.str("http://temperature-monjohn.rhcloud.com/list/"),cljs.core.str(kw)].join('');
var inst_9764 = cljs_http.client.get.call(null,inst_9763);
var state_9773__$1 = (function (){var statearr_9775 = state_9773;
(statearr_9775[(7)] = inst_9762);

return statearr_9775;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9773__$1,(2),inst_9764);
} else {
return null;
}
}
}
});})(c__9681__auto__))
;
return ((function (switch__9666__auto__,c__9681__auto__){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_9779 = [null,null,null,null,null,null,null,null];
(statearr_9779[(0)] = state_machine__9667__auto__);

(statearr_9779[(1)] = (1));

return statearr_9779;
});
var state_machine__9667__auto____1 = (function (state_9773){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_9773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e9780){if((e9780 instanceof Object)){
var ex__9670__auto__ = e9780;
var statearr_9781_9783 = state_9773;
(statearr_9781_9783[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9784 = state_9773;
state_9773 = G__9784;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_9773){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_9773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__))
})();
var state__9683__auto__ = (function (){var statearr_9782 = f__9682__auto__.call(null);
(statearr_9782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_9782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__))
);

return c__9681__auto__;
});
speicher.client.level_limit = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"daily","daily",-697831483),(6),new cljs.core.Keyword(null,"weekly","weekly",319200344),(6),new cljs.core.Keyword(null,"monthly","monthly",1596693261),(11),new cljs.core.Keyword(null,"yearly","yearly",1010642817),(6)], null);
speicher.client.next_level = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"yearly","yearly",1010642817)], null);
speicher.client.save_lists_BANG_ = (function save_lists_BANG_(p__9785){
var map__9811 = p__9785;
var map__9811__$1 = ((cljs.core.seq_QMARK_.call(null,map__9811))?cljs.core.apply.call(null,cljs.core.hash_map,map__9811):map__9811);
var state = map__9811__$1;
var input_chan = cljs.core.get.call(null,map__9811__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var current_list = cljs.core.get.call(null,map__9811__$1,new cljs.core.Keyword(null,"current-list","current-list",1594473864));
var next_list = cljs.core.get.call(null,map__9811__$1,new cljs.core.Keyword(null,"next-list","next-list",138818716));
var words = cljs.core.get.call(null,map__9811__$1,new cljs.core.Keyword(null,"words","words",1924933001));
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__,map__9811,map__9811__$1,state,input_chan,current_list,next_list,words){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__,map__9811,map__9811__$1,state,input_chan,current_list,next_list,words){
return (function (state_9827){
var state_val_9828 = (state_9827[(1)]);
if((state_val_9828 === (3))){
var inst_9825 = (state_9827[(2)]);
var state_9827__$1 = state_9827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9827__$1,inst_9825);
} else {
if((state_val_9828 === (2))){
var inst_9820 = (state_9827[(2)]);
var inst_9821 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9822 = [new cljs.core.Keyword(null,"saved-list","saved-list",1333944303),inst_9820];
var inst_9823 = (new cljs.core.PersistentVector(null,2,(5),inst_9821,inst_9822,null));
var state_9827__$1 = state_9827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9827__$1,(3),input_chan,inst_9823);
} else {
if((state_val_9828 === (1))){
var inst_9812 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_9813 = [new cljs.core.Keyword(null,"current-list","current-list",1594473864),new cljs.core.Keyword(null,"answered","answered",-1524147020),new cljs.core.Keyword(null,"next-list","next-list",138818716)];
var inst_9814 = [current_list,words,next_list];
var inst_9815 = cljs.core.PersistentHashMap.fromArrays(inst_9813,inst_9814);
var inst_9816 = [inst_9815];
var inst_9817 = cljs.core.PersistentHashMap.fromArrays(inst_9812,inst_9816);
var inst_9818 = cljs_http.client.post.call(null,"/save",inst_9817);
var state_9827__$1 = state_9827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9827__$1,(2),inst_9818);
} else {
return null;
}
}
}
});})(c__9681__auto__,map__9811,map__9811__$1,state,input_chan,current_list,next_list,words))
;
return ((function (switch__9666__auto__,c__9681__auto__,map__9811,map__9811__$1,state,input_chan,current_list,next_list,words){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_9832 = [null,null,null,null,null,null,null];
(statearr_9832[(0)] = state_machine__9667__auto__);

(statearr_9832[(1)] = (1));

return statearr_9832;
});
var state_machine__9667__auto____1 = (function (state_9827){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_9827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e9833){if((e9833 instanceof Object)){
var ex__9670__auto__ = e9833;
var statearr_9834_9836 = state_9827;
(statearr_9834_9836[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9837 = state_9827;
state_9827 = G__9837;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_9827){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_9827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__,map__9811,map__9811__$1,state,input_chan,current_list,next_list,words))
})();
var state__9683__auto__ = (function (){var statearr_9835 = f__9682__auto__.call(null);
(statearr_9835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_9835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__,map__9811,map__9811__$1,state,input_chan,current_list,next_list,words))
);

return c__9681__auto__;
});
speicher.client.finished = (function finished(state){
new cljs.core.Keyword(null,"swiper","swiper",-1506069648).cljs$core$IFn$_invoke$arity$1(state).destroy();

speicher.client.save_lists_BANG_.call(null,state);

return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"current-list","current-list",1594473864),new cljs.core.Keyword(null,"next-list","next-list",138818716),new cljs.core.Keyword(null,"swiper","swiper",-1506069648)),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"start","start",-355208981));
});
speicher.client.level_complete_QMARK_ = (function level_complete_QMARK_(level,count){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,speicher.client.level_limit,level),count);
});
speicher.client.level_up = (function level_up(state,p__9838){
var vec__9840 = p__9838;
var ger = cljs.core.nth.call(null,vec__9840,(0),null);
var eng = cljs.core.nth.call(null,vec__9840,(1),null);
var c = cljs.core.nth.call(null,vec__9840,(2),null);
var d = cljs.core.nth.call(null,vec__9840,(3),null);
var next_l = cljs.core.get.call(null,speicher.client.next_level,d);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),(0)], null),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-list","next-list",138818716)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ger,eng,(0),next_l], null));
});
speicher.client.correct = (function correct(state,idx){
var vec__9842 = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),idx], null));
var ger = cljs.core.nth.call(null,vec__9842,(0),null);
var eng = cljs.core.nth.call(null,vec__9842,(1),null);
var c = cljs.core.nth.call(null,vec__9842,(2),null);
var list_kw = cljs.core.nth.call(null,vec__9842,(3),null);
new cljs.core.Keyword(null,"swiper","swiper",-1506069648).cljs$core$IFn$_invoke$arity$1(state).slideNext();

if(speicher.client.level_complete_QMARK_.call(null,list_kw,c)){
return speicher.client.level_up.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ger,eng,c,list_kw], null));
} else {
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),idx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ger,eng,(c + (1)),list_kw], null));
}
});
speicher.client.init_swiper = (function init_swiper(state,_){
var swiper = new cljs.core.Keyword(null,"f7","f7",356150168).cljs$core$IFn$_invoke$arity$1(state).swiper(".swiper-container",{"prevButton": ".swiper-prev-button", "nextButton": ".swiper-next-button"});
var html = "<div class='swiper-slide'><span>All Done? <br><a href=\"next.html\" class=\"button\"} >Save</a>\n        </span></div>";
Dom7(".swiper-wrapper").append(html);

swiper.update();

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"swiper-init?","swiper-init?",65165134),true,new cljs.core.Keyword(null,"swiper","swiper",-1506069648),swiper);
});
speicher.client.review_list = (function review_list(state,list_kw){
speicher.client.fetch_list.call(null,state,list_kw);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"review-list","review-list",-2126749986),new cljs.core.Keyword(null,"swiper-init?","swiper-init?",65165134),false,new cljs.core.Keyword(null,"current-list","current-list",1594473864),list_kw,new cljs.core.Keyword(null,"answered","answered",-1524147020),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"next-list","next-list",138818716),cljs.core.PersistentVector.EMPTY);
});
speicher.client.show_list = (function show_list(state,kw){
speicher.client.fetch_list.call(null,state,kw);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"show-list","show-list",-483536849));
});
speicher.client.show_search = (function show_search(state,_){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"search-page","search-page",-705609891));
});
speicher.client.show_enter = (function show_enter(state,_){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"enter-page","enter-page",-519644705));
});
speicher.client.lookup = (function lookup(state,word){
var c__9681__auto___9885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto___9885){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto___9885){
return (function (state_9875){
var state_val_9876 = (state_9875[(1)]);
if((state_val_9876 === (3))){
var inst_9873 = (state_9875[(2)]);
var state_9875__$1 = state_9875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9875__$1,inst_9873);
} else {
if((state_val_9876 === (2))){
var inst_9864 = (state_9875[(7)]);
var inst_9868 = (state_9875[(2)]);
var inst_9869 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9870 = [new cljs.core.Keyword(null,"definitions","definitions",167529986),inst_9868];
var inst_9871 = (new cljs.core.PersistentVector(null,2,(5),inst_9869,inst_9870,null));
var state_9875__$1 = state_9875;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9875__$1,(3),inst_9864,inst_9871);
} else {
if((state_val_9876 === (1))){
var inst_9864 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_9865 = [cljs.core.str("/search/"),cljs.core.str(word)].join('');
var inst_9866 = cljs_http.client.get.call(null,inst_9865);
var state_9875__$1 = (function (){var statearr_9877 = state_9875;
(statearr_9877[(7)] = inst_9864);

return statearr_9877;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9875__$1,(2),inst_9866);
} else {
return null;
}
}
}
});})(c__9681__auto___9885))
;
return ((function (switch__9666__auto__,c__9681__auto___9885){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_9881 = [null,null,null,null,null,null,null,null];
(statearr_9881[(0)] = state_machine__9667__auto__);

(statearr_9881[(1)] = (1));

return statearr_9881;
});
var state_machine__9667__auto____1 = (function (state_9875){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_9875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e9882){if((e9882 instanceof Object)){
var ex__9670__auto__ = e9882;
var statearr_9883_9886 = state_9875;
(statearr_9883_9886[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9887 = state_9875;
state_9875 = G__9887;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_9875){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_9875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto___9885))
})();
var state__9683__auto__ = (function (){var statearr_9884 = f__9682__auto__.call(null);
(statearr_9884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto___9885);

return statearr_9884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto___9885))
);


return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
});
speicher.client.add_new_word = (function add_new_word(state,entry){
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__){
return (function (state_9930){
var state_val_9931 = (state_9930[(1)]);
if((state_val_9931 === (3))){
var inst_9928 = (state_9930[(2)]);
var state_9930__$1 = state_9930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9930__$1,inst_9928);
} else {
if((state_val_9931 === (2))){
var inst_9914 = (state_9930[(7)]);
var inst_9923 = (state_9930[(2)]);
var inst_9924 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9925 = [new cljs.core.Keyword(null,"definition-added","definition-added",195281834),inst_9923];
var inst_9926 = (new cljs.core.PersistentVector(null,2,(5),inst_9924,inst_9925,null));
var state_9930__$1 = state_9930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9930__$1,(3),inst_9914,inst_9926);
} else {
if((state_val_9931 === (1))){
var inst_9914 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_9915 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_9916 = [new cljs.core.Keyword(null,"entry","entry",505168823)];
var inst_9917 = [entry];
var inst_9918 = cljs.core.PersistentHashMap.fromArrays(inst_9916,inst_9917);
var inst_9919 = [inst_9918];
var inst_9920 = cljs.core.PersistentHashMap.fromArrays(inst_9915,inst_9919);
var inst_9921 = cljs_http.client.post.call(null,"/add",inst_9920);
var state_9930__$1 = (function (){var statearr_9932 = state_9930;
(statearr_9932[(7)] = inst_9914);

return statearr_9932;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9930__$1,(2),inst_9921);
} else {
return null;
}
}
}
});})(c__9681__auto__))
;
return ((function (switch__9666__auto__,c__9681__auto__){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_9936 = [null,null,null,null,null,null,null,null];
(statearr_9936[(0)] = state_machine__9667__auto__);

(statearr_9936[(1)] = (1));

return statearr_9936;
});
var state_machine__9667__auto____1 = (function (state_9930){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_9930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e9937){if((e9937 instanceof Object)){
var ex__9670__auto__ = e9937;
var statearr_9938_9940 = state_9930;
(statearr_9938_9940[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9941 = state_9930;
state_9930 = G__9941;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_9930){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_9930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__))
})();
var state__9683__auto__ = (function (){var statearr_9939 = f__9682__auto__.call(null);
(statearr_9939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_9939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__))
);

return c__9681__auto__;
});
speicher.client.submit_selected = (function submit_selected(state,entry_index){
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__){
return (function (state_9972){
var state_val_9973 = (state_9972[(1)]);
if((state_val_9973 === (1))){
var inst_9962 = new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865).cljs$core$IFn$_invoke$arity$1(state);
var inst_9963 = cljs.core.vec.call(null,inst_9962);
var inst_9964 = new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(entry_index);
var inst_9965 = cljs.reader.read_string.call(null,inst_9964);
var inst_9966 = cljs.core.get.call(null,inst_9963,inst_9965);
var inst_9967 = speicher.render.format_entry.call(null,inst_9966);
var inst_9968 = cljs.core.first.call(null,inst_9967);
var inst_9969 = speicher.client.add_new_word.call(null,state,inst_9968);
var inst_9970 = cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
var state_9972__$1 = (function (){var statearr_9974 = state_9972;
(statearr_9974[(7)] = inst_9969);

return statearr_9974;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9972__$1,inst_9970);
} else {
return null;
}
});})(c__9681__auto__))
;
return ((function (switch__9666__auto__,c__9681__auto__){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_9978 = [null,null,null,null,null,null,null,null];
(statearr_9978[(0)] = state_machine__9667__auto__);

(statearr_9978[(1)] = (1));

return statearr_9978;
});
var state_machine__9667__auto____1 = (function (state_9972){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_9972);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e9979){if((e9979 instanceof Object)){
var ex__9670__auto__ = e9979;
var statearr_9980_9982 = state_9972;
(statearr_9980_9982[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9972);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9983 = state_9972;
state_9972 = G__9983;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_9972){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_9972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__))
})();
var state__9683__auto__ = (function (){var statearr_9981 = f__9682__auto__.call(null);
(statearr_9981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_9981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__))
);

return c__9681__auto__;
});
speicher.client.submit_entered = (function submit_entered(state,entered){
speicher.client.add_new_word.call(null,state,entered);

return state;
});
speicher.client.handle_response = (function handle_response(state,p__9984){
var map__9986 = p__9984;
var map__9986__$1 = ((cljs.core.seq_QMARK_.call(null,map__9986))?cljs.core.apply.call(null,cljs.core.hash_map,map__9986):map__9986);
var body = cljs.core.get.call(null,map__9986__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.call(null,map__9986__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"words","words",1924933001),body);
});
speicher.client.show_definitions = (function show_definitions(state,p__9987){
var map__9989 = p__9987;
var map__9989__$1 = ((cljs.core.seq_QMARK_.call(null,map__9989))?cljs.core.apply.call(null,cljs.core.hash_map,map__9989):map__9989);
var body = cljs.core.get.call(null,map__9989__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865),body);
});
/**
* For every entry in a map of channel identifiers to consumers,
* initiate a channel listener which will update the application state
* using the appropriate function whenever a value is recieved, as
* well as triggering a render.
*/
speicher.client.init_updates = (function init_updates(p__9990){
var map__10028 = p__9990;
var map__10028__$1 = ((cljs.core.seq_QMARK_.call(null,map__10028))?cljs.core.apply.call(null,cljs.core.hash_map,map__10028):map__10028);
var functions = cljs.core.get.call(null,map__10028__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var state = cljs.core.get.call(null,map__10028__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var input_chan = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__,input_chan,map__10028,map__10028__$1,functions,state){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__,input_chan,map__10028,map__10028__$1,functions,state){
return (function (state_10049){
var state_val_10050 = (state_10049[(1)]);
if((state_val_10050 === (7))){
var inst_10033 = (state_10049[(2)]);
var inst_10034 = cljs.core.nth.call(null,inst_10033,(0),null);
var inst_10035 = cljs.core.nth.call(null,inst_10033,(1),null);
var inst_10036 = [cljs.core.str("on channel ["),cljs.core.str(inst_10034),cljs.core.str("], received value ["),cljs.core.str(inst_10035),cljs.core.str("]")].join('');
var inst_10037 = console.log(inst_10036);
var inst_10038 = cljs.core.get.call(null,functions,inst_10034);
var inst_10039 = cljs.core.swap_BANG_.call(null,state,inst_10038,inst_10035);
var inst_10040 = cljs.core.deref.call(null,state);
var inst_10041 = speicher.render.request_render.call(null,inst_10040);
var state_10049__$1 = (function (){var statearr_10051 = state_10049;
(statearr_10051[(7)] = inst_10041);

(statearr_10051[(8)] = inst_10039);

(statearr_10051[(9)] = inst_10037);

return statearr_10051;
})();
var statearr_10052_10065 = state_10049__$1;
(statearr_10052_10065[(2)] = null);

(statearr_10052_10065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10050 === (6))){
var inst_10045 = (state_10049[(2)]);
var state_10049__$1 = state_10049;
var statearr_10053_10066 = state_10049__$1;
(statearr_10053_10066[(2)] = inst_10045);

(statearr_10053_10066[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10050 === (5))){
var state_10049__$1 = state_10049;
var statearr_10054_10067 = state_10049__$1;
(statearr_10054_10067[(2)] = null);

(statearr_10054_10067[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10050 === (4))){
var state_10049__$1 = state_10049;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10049__$1,(7),input_chan);
} else {
if((state_val_10050 === (3))){
var inst_10047 = (state_10049[(2)]);
var state_10049__$1 = state_10049;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10049__$1,inst_10047);
} else {
if((state_val_10050 === (2))){
var state_10049__$1 = state_10049;
var statearr_10055_10068 = state_10049__$1;
(statearr_10055_10068[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10050 === (1))){
var state_10049__$1 = state_10049;
var statearr_10057_10069 = state_10049__$1;
(statearr_10057_10069[(2)] = null);

(statearr_10057_10069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__9681__auto__,input_chan,map__10028,map__10028__$1,functions,state))
;
return ((function (switch__9666__auto__,c__9681__auto__,input_chan,map__10028,map__10028__$1,functions,state){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10061 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10061[(0)] = state_machine__9667__auto__);

(statearr_10061[(1)] = (1));

return statearr_10061;
});
var state_machine__9667__auto____1 = (function (state_10049){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10049);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10062){if((e10062 instanceof Object)){
var ex__9670__auto__ = e10062;
var statearr_10063_10070 = state_10049;
(statearr_10063_10070[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10049);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10062;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10071 = state_10049;
state_10049 = G__10071;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10049){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__,input_chan,map__10028,map__10028__$1,functions,state))
})();
var state__9683__auto__ = (function (){var statearr_10064 = f__9682__auto__.call(null);
(statearr_10064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__,input_chan,map__10028,map__10028__$1,functions,state))
);

return c__9681__auto__;
});
speicher.client.print_entry = (function print_entry(state,data){
cljs.core.println.call(null,data);

return state;
});
/**
* Return a map containing the initial application
*/
speicher.client.load_app = (function load_app(){
var ch = cljs.core.async.chan.call(null);
var f7 = (new Framework7({"onPageInit": ((function (ch){
return (function (app,page){
var G__10133 = page.name;
switch (G__10133) {
case "index":
return cljs.core.println.call(null,"home page loaded");

break;
case "review":
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__,G__10133,ch){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__,G__10133,ch){
return (function (state_10140){
var state_val_10141 = (state_10140[(1)]);
if((state_val_10141 === (2))){
var inst_10138 = (state_10140[(2)]);
var state_10140__$1 = state_10140;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10140__$1,inst_10138);
} else {
if((state_val_10141 === (1))){
var inst_10134 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10135 = [new cljs.core.Keyword(null,"review-list","review-list",-2126749986),new cljs.core.Keyword(null,"weekly","weekly",319200344)];
var inst_10136 = (new cljs.core.PersistentVector(null,2,(5),inst_10134,inst_10135,null));
var state_10140__$1 = state_10140;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10140__$1,(2),ch,inst_10136);
} else {
return null;
}
}
});})(c__9681__auto__,G__10133,ch))
;
return ((function (switch__9666__auto__,c__9681__auto__,G__10133,ch){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10145 = [null,null,null,null,null,null,null];
(statearr_10145[(0)] = state_machine__9667__auto__);

(statearr_10145[(1)] = (1));

return statearr_10145;
});
var state_machine__9667__auto____1 = (function (state_10140){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10140);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10146){if((e10146 instanceof Object)){
var ex__9670__auto__ = e10146;
var statearr_10147_10195 = state_10140;
(statearr_10147_10195[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10140);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10196 = state_10140;
state_10140 = G__10196;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10140){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__,G__10133,ch))
})();
var state__9683__auto__ = (function (){var statearr_10148 = f__9682__auto__.call(null);
(statearr_10148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__,G__10133,ch))
);

return c__9681__auto__;

break;
case "next":
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__,G__10133,ch){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__,G__10133,ch){
return (function (state_10155){
var state_val_10156 = (state_10155[(1)]);
if((state_val_10156 === (2))){
var inst_10153 = (state_10155[(2)]);
var state_10155__$1 = state_10155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10155__$1,inst_10153);
} else {
if((state_val_10156 === (1))){
var inst_10149 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10150 = [new cljs.core.Keyword(null,"review-done","review-done",1000388706),null];
var inst_10151 = (new cljs.core.PersistentVector(null,2,(5),inst_10149,inst_10150,null));
var state_10155__$1 = state_10155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10155__$1,(2),ch,inst_10151);
} else {
return null;
}
}
});})(c__9681__auto__,G__10133,ch))
;
return ((function (switch__9666__auto__,c__9681__auto__,G__10133,ch){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10160 = [null,null,null,null,null,null,null];
(statearr_10160[(0)] = state_machine__9667__auto__);

(statearr_10160[(1)] = (1));

return statearr_10160;
});
var state_machine__9667__auto____1 = (function (state_10155){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10161){if((e10161 instanceof Object)){
var ex__9670__auto__ = e10161;
var statearr_10162_10197 = state_10155;
(statearr_10162_10197[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10198 = state_10155;
state_10155 = G__10198;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10155){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__,G__10133,ch))
})();
var state__9683__auto__ = (function (){var statearr_10163 = f__9682__auto__.call(null);
(statearr_10163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__,G__10133,ch))
);

return c__9681__auto__;

break;
case "show":
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__,G__10133,ch){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__,G__10133,ch){
return (function (state_10170){
var state_val_10171 = (state_10170[(1)]);
if((state_val_10171 === (2))){
var inst_10168 = (state_10170[(2)]);
var state_10170__$1 = state_10170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10170__$1,inst_10168);
} else {
if((state_val_10171 === (1))){
var inst_10164 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10165 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_10166 = (new cljs.core.PersistentVector(null,2,(5),inst_10164,inst_10165,null));
var state_10170__$1 = state_10170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10170__$1,(2),ch,inst_10166);
} else {
return null;
}
}
});})(c__9681__auto__,G__10133,ch))
;
return ((function (switch__9666__auto__,c__9681__auto__,G__10133,ch){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10175 = [null,null,null,null,null,null,null];
(statearr_10175[(0)] = state_machine__9667__auto__);

(statearr_10175[(1)] = (1));

return statearr_10175;
});
var state_machine__9667__auto____1 = (function (state_10170){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10176){if((e10176 instanceof Object)){
var ex__9670__auto__ = e10176;
var statearr_10177_10199 = state_10170;
(statearr_10177_10199[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10200 = state_10170;
state_10170 = G__10200;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10170){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__,G__10133,ch))
})();
var state__9683__auto__ = (function (){var statearr_10178 = f__9682__auto__.call(null);
(statearr_10178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__,G__10133,ch))
);

return c__9681__auto__;

break;
case "search":
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__,G__10133,ch){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__,G__10133,ch){
return (function (state_10185){
var state_val_10186 = (state_10185[(1)]);
if((state_val_10186 === (2))){
var inst_10183 = (state_10185[(2)]);
var state_10185__$1 = state_10185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10185__$1,inst_10183);
} else {
if((state_val_10186 === (1))){
var inst_10179 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10180 = [new cljs.core.Keyword(null,"search-page","search-page",-705609891),null];
var inst_10181 = (new cljs.core.PersistentVector(null,2,(5),inst_10179,inst_10180,null));
var state_10185__$1 = state_10185;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10185__$1,(2),ch,inst_10181);
} else {
return null;
}
}
});})(c__9681__auto__,G__10133,ch))
;
return ((function (switch__9666__auto__,c__9681__auto__,G__10133,ch){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10190 = [null,null,null,null,null,null,null];
(statearr_10190[(0)] = state_machine__9667__auto__);

(statearr_10190[(1)] = (1));

return statearr_10190;
});
var state_machine__9667__auto____1 = (function (state_10185){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10191){if((e10191 instanceof Object)){
var ex__9670__auto__ = e10191;
var statearr_10192_10201 = state_10185;
(statearr_10192_10201[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10202 = state_10185;
state_10185 = G__10202;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10185){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__,G__10133,ch))
})();
var state__9683__auto__ = (function (){var statearr_10193 = f__9682__auto__.call(null);
(statearr_10193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__,G__10133,ch))
);

return c__9681__auto__;

break;
default:
return cljs.core.println.call(null,"Nothing found ");

}
});})(ch))
}));
var main = f7.addView(".view-main");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),ch,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"current-list","current-list",1594473864),new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"f7","f7",356150168),f7,new cljs.core.Keyword(null,"main-view","main-view",343997885),main], null)),new cljs.core.Keyword(null,"functions","functions",184951466),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"review-done","review-done",1000388706),new cljs.core.Keyword(null,"definitions","definitions",167529986),new cljs.core.Keyword(null,"submit-selected","submit-selected",-548982554),new cljs.core.Keyword(null,"search-term","search-term",356193544),new cljs.core.Keyword(null,"definition-added","definition-added",195281834),new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"init-swiper","init-swiper",998548847),new cljs.core.Keyword(null,"saved-list","saved-list",1333944303),new cljs.core.Keyword(null,"search-page","search-page",-705609891),new cljs.core.Keyword(null,"submit-entered","submit-entered",-1080659330),new cljs.core.Keyword(null,"review-list","review-list",-2126749986),new cljs.core.Keyword(null,"correct","correct",984806334),new cljs.core.Keyword(null,"enter-page","enter-page",-519644705)],[speicher.client.handle_response,speicher.client.finished,speicher.client.show_definitions,speicher.client.submit_selected,speicher.client.lookup,speicher.client.print_entry,speicher.client.show_list,speicher.client.init_swiper,speicher.client.print_entry,speicher.client.show_search,speicher.client.submit_entered,speicher.client.review_list,speicher.client.correct,speicher.client.show_enter])], null);
});
/**
* Application entry point
*/
speicher.client.main = (function main(){
var app = speicher.client.load_app.call(null);
var state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app));
speicher.client.init_updates.call(null,app);

return speicher.render.request_render.call(null,state);
});
goog.exportSymbol('speicher.client.main', speicher.client.main);

//# sourceMappingURL=client.js.map?rel=1423857059380