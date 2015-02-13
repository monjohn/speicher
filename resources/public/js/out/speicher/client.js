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
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__){
return (function (state_13819){
var state_val_13820 = (state_13819[(1)]);
if((state_val_13820 === (3))){
var inst_13817 = (state_13819[(2)]);
var state_13819__$1 = state_13819;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13819__$1,inst_13817);
} else {
if((state_val_13820 === (2))){
var inst_13808 = (state_13819[(7)]);
var inst_13812 = (state_13819[(2)]);
var inst_13813 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13814 = [new cljs.core.Keyword(null,"response","response",-1068424192),inst_13812];
var inst_13815 = (new cljs.core.PersistentVector(null,2,(5),inst_13813,inst_13814,null));
var state_13819__$1 = state_13819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13819__$1,(3),inst_13808,inst_13815);
} else {
if((state_val_13820 === (1))){
var inst_13808 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_13809 = [cljs.core.str("/list/"),cljs.core.str(kw)].join('');
var inst_13810 = cljs_http.client.get.call(null,inst_13809);
var state_13819__$1 = (function (){var statearr_13821 = state_13819;
(statearr_13821[(7)] = inst_13808);

return statearr_13821;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13819__$1,(2),inst_13810);
} else {
return null;
}
}
}
});})(c__9740__auto__))
;
return ((function (switch__9684__auto__,c__9740__auto__){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_13825 = [null,null,null,null,null,null,null,null];
(statearr_13825[(0)] = state_machine__9685__auto__);

(statearr_13825[(1)] = (1));

return statearr_13825;
});
var state_machine__9685__auto____1 = (function (state_13819){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_13819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e13826){if((e13826 instanceof Object)){
var ex__9688__auto__ = e13826;
var statearr_13827_13829 = state_13819;
(statearr_13827_13829[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13830 = state_13819;
state_13819 = G__13830;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_13819){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_13819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__))
})();
var state__9742__auto__ = (function (){var statearr_13828 = f__9741__auto__.call(null);
(statearr_13828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_13828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__))
);

return c__9740__auto__;
});
speicher.client.level_limit = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"daily","daily",-697831483),(6),new cljs.core.Keyword(null,"weekly","weekly",319200344),(6),new cljs.core.Keyword(null,"monthly","monthly",1596693261),(11),new cljs.core.Keyword(null,"yearly","yearly",1010642817),(6)], null);
speicher.client.next_level = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"yearly","yearly",1010642817)], null);
speicher.client.save_lists_BANG_ = (function save_lists_BANG_(p__13831){
var map__13857 = p__13831;
var map__13857__$1 = ((cljs.core.seq_QMARK_.call(null,map__13857))?cljs.core.apply.call(null,cljs.core.hash_map,map__13857):map__13857);
var state = map__13857__$1;
var input_chan = cljs.core.get.call(null,map__13857__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var current_list = cljs.core.get.call(null,map__13857__$1,new cljs.core.Keyword(null,"current-list","current-list",1594473864));
var next_list = cljs.core.get.call(null,map__13857__$1,new cljs.core.Keyword(null,"next-list","next-list",138818716));
var words = cljs.core.get.call(null,map__13857__$1,new cljs.core.Keyword(null,"words","words",1924933001));
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__,map__13857,map__13857__$1,state,input_chan,current_list,next_list,words){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__,map__13857,map__13857__$1,state,input_chan,current_list,next_list,words){
return (function (state_13873){
var state_val_13874 = (state_13873[(1)]);
if((state_val_13874 === (3))){
var inst_13871 = (state_13873[(2)]);
var state_13873__$1 = state_13873;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13873__$1,inst_13871);
} else {
if((state_val_13874 === (2))){
var inst_13866 = (state_13873[(2)]);
var inst_13867 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13868 = [new cljs.core.Keyword(null,"saved-list","saved-list",1333944303),inst_13866];
var inst_13869 = (new cljs.core.PersistentVector(null,2,(5),inst_13867,inst_13868,null));
var state_13873__$1 = state_13873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13873__$1,(3),input_chan,inst_13869);
} else {
if((state_val_13874 === (1))){
var inst_13858 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_13859 = [new cljs.core.Keyword(null,"current-list","current-list",1594473864),new cljs.core.Keyword(null,"answered","answered",-1524147020),new cljs.core.Keyword(null,"next-list","next-list",138818716)];
var inst_13860 = [current_list,words,next_list];
var inst_13861 = cljs.core.PersistentHashMap.fromArrays(inst_13859,inst_13860);
var inst_13862 = [inst_13861];
var inst_13863 = cljs.core.PersistentHashMap.fromArrays(inst_13858,inst_13862);
var inst_13864 = cljs_http.client.post.call(null,"/save",inst_13863);
var state_13873__$1 = state_13873;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13873__$1,(2),inst_13864);
} else {
return null;
}
}
}
});})(c__9740__auto__,map__13857,map__13857__$1,state,input_chan,current_list,next_list,words))
;
return ((function (switch__9684__auto__,c__9740__auto__,map__13857,map__13857__$1,state,input_chan,current_list,next_list,words){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_13878 = [null,null,null,null,null,null,null];
(statearr_13878[(0)] = state_machine__9685__auto__);

(statearr_13878[(1)] = (1));

return statearr_13878;
});
var state_machine__9685__auto____1 = (function (state_13873){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_13873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e13879){if((e13879 instanceof Object)){
var ex__9688__auto__ = e13879;
var statearr_13880_13882 = state_13873;
(statearr_13880_13882[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13883 = state_13873;
state_13873 = G__13883;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_13873){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_13873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__,map__13857,map__13857__$1,state,input_chan,current_list,next_list,words))
})();
var state__9742__auto__ = (function (){var statearr_13881 = f__9741__auto__.call(null);
(statearr_13881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_13881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__,map__13857,map__13857__$1,state,input_chan,current_list,next_list,words))
);

return c__9740__auto__;
});
speicher.client.finished = (function finished(state){
new cljs.core.Keyword(null,"swiper","swiper",-1506069648).cljs$core$IFn$_invoke$arity$1(state).destroy();

speicher.client.save_lists_BANG_.call(null,state);

return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"current-list","current-list",1594473864),new cljs.core.Keyword(null,"next-list","next-list",138818716),new cljs.core.Keyword(null,"swiper","swiper",-1506069648)),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"start","start",-355208981));
});
speicher.client.level_complete_QMARK_ = (function level_complete_QMARK_(level,count){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,speicher.client.level_limit,level),count);
});
speicher.client.level_up = (function level_up(state,p__13884){
var vec__13886 = p__13884;
var ger = cljs.core.nth.call(null,vec__13886,(0),null);
var eng = cljs.core.nth.call(null,vec__13886,(1),null);
var c = cljs.core.nth.call(null,vec__13886,(2),null);
var d = cljs.core.nth.call(null,vec__13886,(3),null);
var next_l = cljs.core.get.call(null,speicher.client.next_level,d);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),(0)], null),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-list","next-list",138818716)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ger,eng,(0),next_l], null));
});
speicher.client.correct = (function correct(state,idx){
var vec__13888 = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),idx], null));
var ger = cljs.core.nth.call(null,vec__13888,(0),null);
var eng = cljs.core.nth.call(null,vec__13888,(1),null);
var c = cljs.core.nth.call(null,vec__13888,(2),null);
var list_kw = cljs.core.nth.call(null,vec__13888,(3),null);
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
var c__9740__auto___13931 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto___13931){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto___13931){
return (function (state_13921){
var state_val_13922 = (state_13921[(1)]);
if((state_val_13922 === (3))){
var inst_13919 = (state_13921[(2)]);
var state_13921__$1 = state_13921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13921__$1,inst_13919);
} else {
if((state_val_13922 === (2))){
var inst_13910 = (state_13921[(7)]);
var inst_13914 = (state_13921[(2)]);
var inst_13915 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13916 = [new cljs.core.Keyword(null,"definitions","definitions",167529986),inst_13914];
var inst_13917 = (new cljs.core.PersistentVector(null,2,(5),inst_13915,inst_13916,null));
var state_13921__$1 = state_13921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13921__$1,(3),inst_13910,inst_13917);
} else {
if((state_val_13922 === (1))){
var inst_13910 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_13911 = [cljs.core.str("/search/"),cljs.core.str(word)].join('');
var inst_13912 = cljs_http.client.get.call(null,inst_13911);
var state_13921__$1 = (function (){var statearr_13923 = state_13921;
(statearr_13923[(7)] = inst_13910);

return statearr_13923;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13921__$1,(2),inst_13912);
} else {
return null;
}
}
}
});})(c__9740__auto___13931))
;
return ((function (switch__9684__auto__,c__9740__auto___13931){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_13927 = [null,null,null,null,null,null,null,null];
(statearr_13927[(0)] = state_machine__9685__auto__);

(statearr_13927[(1)] = (1));

return statearr_13927;
});
var state_machine__9685__auto____1 = (function (state_13921){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_13921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e13928){if((e13928 instanceof Object)){
var ex__9688__auto__ = e13928;
var statearr_13929_13932 = state_13921;
(statearr_13929_13932[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13933 = state_13921;
state_13921 = G__13933;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_13921){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_13921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto___13931))
})();
var state__9742__auto__ = (function (){var statearr_13930 = f__9741__auto__.call(null);
(statearr_13930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto___13931);

return statearr_13930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto___13931))
);


return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
});
speicher.client.add_new_word = (function add_new_word(state,entry){
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__){
return (function (state_13976){
var state_val_13977 = (state_13976[(1)]);
if((state_val_13977 === (3))){
var inst_13974 = (state_13976[(2)]);
var state_13976__$1 = state_13976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13976__$1,inst_13974);
} else {
if((state_val_13977 === (2))){
var inst_13960 = (state_13976[(7)]);
var inst_13969 = (state_13976[(2)]);
var inst_13970 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13971 = [new cljs.core.Keyword(null,"definition-added","definition-added",195281834),inst_13969];
var inst_13972 = (new cljs.core.PersistentVector(null,2,(5),inst_13970,inst_13971,null));
var state_13976__$1 = state_13976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13976__$1,(3),inst_13960,inst_13972);
} else {
if((state_val_13977 === (1))){
var inst_13960 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_13961 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_13962 = [new cljs.core.Keyword(null,"entry","entry",505168823)];
var inst_13963 = [entry];
var inst_13964 = cljs.core.PersistentHashMap.fromArrays(inst_13962,inst_13963);
var inst_13965 = [inst_13964];
var inst_13966 = cljs.core.PersistentHashMap.fromArrays(inst_13961,inst_13965);
var inst_13967 = cljs_http.client.post.call(null,"/add",inst_13966);
var state_13976__$1 = (function (){var statearr_13978 = state_13976;
(statearr_13978[(7)] = inst_13960);

return statearr_13978;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13976__$1,(2),inst_13967);
} else {
return null;
}
}
}
});})(c__9740__auto__))
;
return ((function (switch__9684__auto__,c__9740__auto__){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_13982 = [null,null,null,null,null,null,null,null];
(statearr_13982[(0)] = state_machine__9685__auto__);

(statearr_13982[(1)] = (1));

return statearr_13982;
});
var state_machine__9685__auto____1 = (function (state_13976){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_13976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e13983){if((e13983 instanceof Object)){
var ex__9688__auto__ = e13983;
var statearr_13984_13986 = state_13976;
(statearr_13984_13986[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13987 = state_13976;
state_13976 = G__13987;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_13976){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_13976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__))
})();
var state__9742__auto__ = (function (){var statearr_13985 = f__9741__auto__.call(null);
(statearr_13985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_13985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__))
);

return c__9740__auto__;
});
speicher.client.submit_selected = (function submit_selected(state,entry_index){
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__){
return (function (state_14018){
var state_val_14019 = (state_14018[(1)]);
if((state_val_14019 === (1))){
var inst_14008 = new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865).cljs$core$IFn$_invoke$arity$1(state);
var inst_14009 = cljs.core.vec.call(null,inst_14008);
var inst_14010 = new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(entry_index);
var inst_14011 = cljs.reader.read_string.call(null,inst_14010);
var inst_14012 = cljs.core.get.call(null,inst_14009,inst_14011);
var inst_14013 = speicher.render.format_entry.call(null,inst_14012);
var inst_14014 = cljs.core.first.call(null,inst_14013);
var inst_14015 = speicher.client.add_new_word.call(null,state,inst_14014);
var inst_14016 = cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
var state_14018__$1 = (function (){var statearr_14020 = state_14018;
(statearr_14020[(7)] = inst_14015);

return statearr_14020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14018__$1,inst_14016);
} else {
return null;
}
});})(c__9740__auto__))
;
return ((function (switch__9684__auto__,c__9740__auto__){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14024 = [null,null,null,null,null,null,null,null];
(statearr_14024[(0)] = state_machine__9685__auto__);

(statearr_14024[(1)] = (1));

return statearr_14024;
});
var state_machine__9685__auto____1 = (function (state_14018){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14025){if((e14025 instanceof Object)){
var ex__9688__auto__ = e14025;
var statearr_14026_14028 = state_14018;
(statearr_14026_14028[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14029 = state_14018;
state_14018 = G__14029;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14018){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__))
})();
var state__9742__auto__ = (function (){var statearr_14027 = f__9741__auto__.call(null);
(statearr_14027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_14027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__))
);

return c__9740__auto__;
});
speicher.client.submit_entered = (function submit_entered(state,entered){
speicher.client.add_new_word.call(null,state,entered);

return state;
});
speicher.client.handle_response = (function handle_response(state,p__14030){
var map__14032 = p__14030;
var map__14032__$1 = ((cljs.core.seq_QMARK_.call(null,map__14032))?cljs.core.apply.call(null,cljs.core.hash_map,map__14032):map__14032);
var body = cljs.core.get.call(null,map__14032__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.call(null,map__14032__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"words","words",1924933001),body);
});
speicher.client.show_definitions = (function show_definitions(state,p__14033){
var map__14035 = p__14033;
var map__14035__$1 = ((cljs.core.seq_QMARK_.call(null,map__14035))?cljs.core.apply.call(null,cljs.core.hash_map,map__14035):map__14035);
var body = cljs.core.get.call(null,map__14035__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865),body);
});
/**
* For every entry in a map of channel identifiers to consumers,
* initiate a channel listener which will update the application state
* using the appropriate function whenever a value is recieved, as
* well as triggering a render.
*/
speicher.client.init_updates = (function init_updates(p__14036){
var map__14074 = p__14036;
var map__14074__$1 = ((cljs.core.seq_QMARK_.call(null,map__14074))?cljs.core.apply.call(null,cljs.core.hash_map,map__14074):map__14074);
var functions = cljs.core.get.call(null,map__14074__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var state = cljs.core.get.call(null,map__14074__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var input_chan = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__,input_chan,map__14074,map__14074__$1,functions,state){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__,input_chan,map__14074,map__14074__$1,functions,state){
return (function (state_14095){
var state_val_14096 = (state_14095[(1)]);
if((state_val_14096 === (7))){
var inst_14079 = (state_14095[(2)]);
var inst_14080 = cljs.core.nth.call(null,inst_14079,(0),null);
var inst_14081 = cljs.core.nth.call(null,inst_14079,(1),null);
var inst_14082 = [cljs.core.str("on channel ["),cljs.core.str(inst_14080),cljs.core.str("], received value ["),cljs.core.str(inst_14081),cljs.core.str("]")].join('');
var inst_14083 = console.log(inst_14082);
var inst_14084 = cljs.core.get.call(null,functions,inst_14080);
var inst_14085 = cljs.core.swap_BANG_.call(null,state,inst_14084,inst_14081);
var inst_14086 = cljs.core.deref.call(null,state);
var inst_14087 = speicher.render.request_render.call(null,inst_14086);
var state_14095__$1 = (function (){var statearr_14097 = state_14095;
(statearr_14097[(7)] = inst_14085);

(statearr_14097[(8)] = inst_14083);

(statearr_14097[(9)] = inst_14087);

return statearr_14097;
})();
var statearr_14098_14111 = state_14095__$1;
(statearr_14098_14111[(2)] = null);

(statearr_14098_14111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14096 === (6))){
var inst_14091 = (state_14095[(2)]);
var state_14095__$1 = state_14095;
var statearr_14099_14112 = state_14095__$1;
(statearr_14099_14112[(2)] = inst_14091);

(statearr_14099_14112[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14096 === (5))){
var state_14095__$1 = state_14095;
var statearr_14100_14113 = state_14095__$1;
(statearr_14100_14113[(2)] = null);

(statearr_14100_14113[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14096 === (4))){
var state_14095__$1 = state_14095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14095__$1,(7),input_chan);
} else {
if((state_val_14096 === (3))){
var inst_14093 = (state_14095[(2)]);
var state_14095__$1 = state_14095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14095__$1,inst_14093);
} else {
if((state_val_14096 === (2))){
var state_14095__$1 = state_14095;
var statearr_14101_14114 = state_14095__$1;
(statearr_14101_14114[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14096 === (1))){
var state_14095__$1 = state_14095;
var statearr_14103_14115 = state_14095__$1;
(statearr_14103_14115[(2)] = null);

(statearr_14103_14115[(1)] = (2));


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
});})(c__9740__auto__,input_chan,map__14074,map__14074__$1,functions,state))
;
return ((function (switch__9684__auto__,c__9740__auto__,input_chan,map__14074,map__14074__$1,functions,state){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14107 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14107[(0)] = state_machine__9685__auto__);

(statearr_14107[(1)] = (1));

return statearr_14107;
});
var state_machine__9685__auto____1 = (function (state_14095){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14108){if((e14108 instanceof Object)){
var ex__9688__auto__ = e14108;
var statearr_14109_14116 = state_14095;
(statearr_14109_14116[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14108;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14117 = state_14095;
state_14095 = G__14117;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14095){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__,input_chan,map__14074,map__14074__$1,functions,state))
})();
var state__9742__auto__ = (function (){var statearr_14110 = f__9741__auto__.call(null);
(statearr_14110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_14110;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__,input_chan,map__14074,map__14074__$1,functions,state))
);

return c__9740__auto__;
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
var G__14179 = page.name;
switch (G__14179) {
case "index":
return cljs.core.println.call(null,"home page loaded");

break;
case "review":
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__,G__14179,ch){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__,G__14179,ch){
return (function (state_14186){
var state_val_14187 = (state_14186[(1)]);
if((state_val_14187 === (2))){
var inst_14184 = (state_14186[(2)]);
var state_14186__$1 = state_14186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14186__$1,inst_14184);
} else {
if((state_val_14187 === (1))){
var inst_14180 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14181 = [new cljs.core.Keyword(null,"review-list","review-list",-2126749986),new cljs.core.Keyword(null,"weekly","weekly",319200344)];
var inst_14182 = (new cljs.core.PersistentVector(null,2,(5),inst_14180,inst_14181,null));
var state_14186__$1 = state_14186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14186__$1,(2),ch,inst_14182);
} else {
return null;
}
}
});})(c__9740__auto__,G__14179,ch))
;
return ((function (switch__9684__auto__,c__9740__auto__,G__14179,ch){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14191 = [null,null,null,null,null,null,null];
(statearr_14191[(0)] = state_machine__9685__auto__);

(statearr_14191[(1)] = (1));

return statearr_14191;
});
var state_machine__9685__auto____1 = (function (state_14186){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14192){if((e14192 instanceof Object)){
var ex__9688__auto__ = e14192;
var statearr_14193_14241 = state_14186;
(statearr_14193_14241[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14242 = state_14186;
state_14186 = G__14242;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14186){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__,G__14179,ch))
})();
var state__9742__auto__ = (function (){var statearr_14194 = f__9741__auto__.call(null);
(statearr_14194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_14194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__,G__14179,ch))
);

return c__9740__auto__;

break;
case "next":
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__,G__14179,ch){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__,G__14179,ch){
return (function (state_14201){
var state_val_14202 = (state_14201[(1)]);
if((state_val_14202 === (2))){
var inst_14199 = (state_14201[(2)]);
var state_14201__$1 = state_14201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14201__$1,inst_14199);
} else {
if((state_val_14202 === (1))){
var inst_14195 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14196 = [new cljs.core.Keyword(null,"review-done","review-done",1000388706),null];
var inst_14197 = (new cljs.core.PersistentVector(null,2,(5),inst_14195,inst_14196,null));
var state_14201__$1 = state_14201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14201__$1,(2),ch,inst_14197);
} else {
return null;
}
}
});})(c__9740__auto__,G__14179,ch))
;
return ((function (switch__9684__auto__,c__9740__auto__,G__14179,ch){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14206 = [null,null,null,null,null,null,null];
(statearr_14206[(0)] = state_machine__9685__auto__);

(statearr_14206[(1)] = (1));

return statearr_14206;
});
var state_machine__9685__auto____1 = (function (state_14201){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14207){if((e14207 instanceof Object)){
var ex__9688__auto__ = e14207;
var statearr_14208_14243 = state_14201;
(statearr_14208_14243[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14244 = state_14201;
state_14201 = G__14244;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14201){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14201);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__,G__14179,ch))
})();
var state__9742__auto__ = (function (){var statearr_14209 = f__9741__auto__.call(null);
(statearr_14209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_14209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__,G__14179,ch))
);

return c__9740__auto__;

break;
case "show":
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__,G__14179,ch){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__,G__14179,ch){
return (function (state_14216){
var state_val_14217 = (state_14216[(1)]);
if((state_val_14217 === (2))){
var inst_14214 = (state_14216[(2)]);
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14216__$1,inst_14214);
} else {
if((state_val_14217 === (1))){
var inst_14210 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14211 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_14212 = (new cljs.core.PersistentVector(null,2,(5),inst_14210,inst_14211,null));
var state_14216__$1 = state_14216;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14216__$1,(2),ch,inst_14212);
} else {
return null;
}
}
});})(c__9740__auto__,G__14179,ch))
;
return ((function (switch__9684__auto__,c__9740__auto__,G__14179,ch){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14221 = [null,null,null,null,null,null,null];
(statearr_14221[(0)] = state_machine__9685__auto__);

(statearr_14221[(1)] = (1));

return statearr_14221;
});
var state_machine__9685__auto____1 = (function (state_14216){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14222){if((e14222 instanceof Object)){
var ex__9688__auto__ = e14222;
var statearr_14223_14245 = state_14216;
(statearr_14223_14245[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14246 = state_14216;
state_14216 = G__14246;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14216){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__,G__14179,ch))
})();
var state__9742__auto__ = (function (){var statearr_14224 = f__9741__auto__.call(null);
(statearr_14224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_14224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__,G__14179,ch))
);

return c__9740__auto__;

break;
case "search":
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__,G__14179,ch){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__,G__14179,ch){
return (function (state_14231){
var state_val_14232 = (state_14231[(1)]);
if((state_val_14232 === (2))){
var inst_14229 = (state_14231[(2)]);
var state_14231__$1 = state_14231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14231__$1,inst_14229);
} else {
if((state_val_14232 === (1))){
var inst_14225 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14226 = [new cljs.core.Keyword(null,"search-page","search-page",-705609891),null];
var inst_14227 = (new cljs.core.PersistentVector(null,2,(5),inst_14225,inst_14226,null));
var state_14231__$1 = state_14231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14231__$1,(2),ch,inst_14227);
} else {
return null;
}
}
});})(c__9740__auto__,G__14179,ch))
;
return ((function (switch__9684__auto__,c__9740__auto__,G__14179,ch){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14236 = [null,null,null,null,null,null,null];
(statearr_14236[(0)] = state_machine__9685__auto__);

(statearr_14236[(1)] = (1));

return statearr_14236;
});
var state_machine__9685__auto____1 = (function (state_14231){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14237){if((e14237 instanceof Object)){
var ex__9688__auto__ = e14237;
var statearr_14238_14247 = state_14231;
(statearr_14238_14247[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14248 = state_14231;
state_14231 = G__14248;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14231){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__,G__14179,ch))
})();
var state__9742__auto__ = (function (){var statearr_14239 = f__9741__auto__.call(null);
(statearr_14239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_14239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__,G__14179,ch))
);

return c__9740__auto__;

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

//# sourceMappingURL=client.js.map?rel=1423859527053