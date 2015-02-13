// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('client')) {
goog.provide('client');
}
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('figwheel.client');
goog.require('cljs_http.client');
goog.require('goog.History');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('render');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
client.fetch_list = (function fetch_list(state,kw){
var c__5980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto__){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto__){
return (function (state_23973){
var state_val_23974 = (state_23973[(1)]);
if((state_val_23974 === (3))){
var inst_23971 = (state_23973[(2)]);
var state_23973__$1 = state_23973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23973__$1,inst_23971);
} else {
if((state_val_23974 === (2))){
var inst_23956 = (state_23973[(7)]);
var inst_23966 = (state_23973[(2)]);
var inst_23967 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23968 = [new cljs.core.Keyword(null,"response","response",-1068424192),inst_23966];
var inst_23969 = (new cljs.core.PersistentVector(null,2,(5),inst_23967,inst_23968,null));
var state_23973__$1 = state_23973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23973__$1,(3),inst_23956,inst_23969);
} else {
if((state_val_23974 === (1))){
var inst_23956 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_23957 = [cljs.core.str("/list/"),cljs.core.str(kw)].join('');
var inst_23958 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_23959 = [new cljs.core.Keyword(null,"list","list",765357683)];
var inst_23960 = [kw];
var inst_23961 = cljs.core.PersistentHashMap.fromArrays(inst_23959,inst_23960);
var inst_23962 = [inst_23961];
var inst_23963 = cljs.core.PersistentHashMap.fromArrays(inst_23958,inst_23962);
var inst_23964 = cljs_http.client.get.call(null,inst_23957,inst_23963);
var state_23973__$1 = (function (){var statearr_23975 = state_23973;
(statearr_23975[(7)] = inst_23956);

return statearr_23975;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23973__$1,(2),inst_23964);
} else {
return null;
}
}
}
});})(c__5980__auto__))
;
return ((function (switch__5965__auto__,c__5980__auto__){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_23979 = [null,null,null,null,null,null,null,null];
(statearr_23979[(0)] = state_machine__5966__auto__);

(statearr_23979[(1)] = (1));

return statearr_23979;
});
var state_machine__5966__auto____1 = (function (state_23973){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_23973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e23980){if((e23980 instanceof Object)){
var ex__5969__auto__ = e23980;
var statearr_23981_23983 = state_23973;
(statearr_23981_23983[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23984 = state_23973;
state_23973 = G__23984;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_23973){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_23973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto__))
})();
var state__5982__auto__ = (function (){var statearr_23982 = f__5981__auto__.call(null);
(statearr_23982[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto__);

return statearr_23982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto__))
);

return c__5980__auto__;
});
client.level_limit = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"daily","daily",-697831483),(6),new cljs.core.Keyword(null,"weekly","weekly",319200344),(6),new cljs.core.Keyword(null,"monthly","monthly",1596693261),(11),new cljs.core.Keyword(null,"yearly","yearly",1010642817),(6)], null);
client.next_level = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"yearly","yearly",1010642817)], null);
client.finished_list = (function finished_list(p__23985){
var map__24011 = p__23985;
var map__24011__$1 = ((cljs.core.seq_QMARK_.call(null,map__24011))?cljs.core.apply.call(null,cljs.core.hash_map,map__24011):map__24011);
var state = map__24011__$1;
var input_chan = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var current_list = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"current-list","current-list",1594473864));
var next_list = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"next-list","next-list",138818716));
var answered = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"answered","answered",-1524147020));
var c__5980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto__,map__24011,map__24011__$1,state,input_chan,current_list,next_list,answered){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto__,map__24011,map__24011__$1,state,input_chan,current_list,next_list,answered){
return (function (state_24027){
var state_val_24028 = (state_24027[(1)]);
if((state_val_24028 === (3))){
var inst_24025 = (state_24027[(2)]);
var state_24027__$1 = state_24027;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24027__$1,inst_24025);
} else {
if((state_val_24028 === (2))){
var inst_24020 = (state_24027[(2)]);
var inst_24021 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24022 = [new cljs.core.Keyword(null,"saved-list","saved-list",1333944303),inst_24020];
var inst_24023 = (new cljs.core.PersistentVector(null,2,(5),inst_24021,inst_24022,null));
var state_24027__$1 = state_24027;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24027__$1,(3),input_chan,inst_24023);
} else {
if((state_val_24028 === (1))){
var inst_24012 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_24013 = [new cljs.core.Keyword(null,"current-list","current-list",1594473864),new cljs.core.Keyword(null,"answered","answered",-1524147020),new cljs.core.Keyword(null,"next-list","next-list",138818716)];
var inst_24014 = [current_list,answered,next_list];
var inst_24015 = cljs.core.PersistentHashMap.fromArrays(inst_24013,inst_24014);
var inst_24016 = [inst_24015];
var inst_24017 = cljs.core.PersistentHashMap.fromArrays(inst_24012,inst_24016);
var inst_24018 = cljs_http.client.post.call(null,"/save",inst_24017);
var state_24027__$1 = state_24027;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24027__$1,(2),inst_24018);
} else {
return null;
}
}
}
});})(c__5980__auto__,map__24011,map__24011__$1,state,input_chan,current_list,next_list,answered))
;
return ((function (switch__5965__auto__,c__5980__auto__,map__24011,map__24011__$1,state,input_chan,current_list,next_list,answered){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_24032 = [null,null,null,null,null,null,null];
(statearr_24032[(0)] = state_machine__5966__auto__);

(statearr_24032[(1)] = (1));

return statearr_24032;
});
var state_machine__5966__auto____1 = (function (state_24027){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_24027);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e24033){if((e24033 instanceof Object)){
var ex__5969__auto__ = e24033;
var statearr_24034_24036 = state_24027;
(statearr_24034_24036[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24037 = state_24027;
state_24027 = G__24037;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_24027){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_24027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto__,map__24011,map__24011__$1,state,input_chan,current_list,next_list,answered))
})();
var state__5982__auto__ = (function (){var statearr_24035 = f__5981__auto__.call(null);
(statearr_24035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto__);

return statearr_24035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto__,map__24011,map__24011__$1,state,input_chan,current_list,next_list,answered))
);

return c__5980__auto__;
});
client.level_complete_QMARK_ = (function level_complete_QMARK_(level,count){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,client.level_limit,level),count);
});
client.level_up = (function level_up(state,p__24038){
var vec__24040 = p__24038;
var ger = cljs.core.nth.call(null,vec__24040,(0),null);
var eng = cljs.core.nth.call(null,vec__24040,(1),null);
var c = cljs.core.nth.call(null,vec__24040,(2),null);
var d = cljs.core.nth.call(null,vec__24040,(3),null);
var next = cljs.core.get.call(null,client.next_level,d);
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001)], null),cljs.core.rest),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-list","next-list",138818716)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ger,eng,(0),next], null));
});
client.words__GT_answered = (function words__GT_answered(state,entry){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001)], null),cljs.core.rest),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answered","answered",-1524147020)], null),cljs.core.conj,entry);
});
client.got_wrong = (function got_wrong(p__24041){
var map__24043 = p__24041;
var map__24043__$1 = ((cljs.core.seq_QMARK_.call(null,map__24043))?cljs.core.apply.call(null,cljs.core.hash_map,map__24043):map__24043);
var state = map__24043__$1;
var words = cljs.core.get.call(null,map__24043__$1,new cljs.core.Keyword(null,"words","words",1924933001));
return client.words__GT_answered.call(null,state,cljs.core.first.call(null,words));
});
client.got_right = (function got_right(p__24044){
var map__24047 = p__24044;
var map__24047__$1 = ((cljs.core.seq_QMARK_.call(null,map__24047))?cljs.core.apply.call(null,cljs.core.hash_map,map__24047):map__24047);
var state = map__24047__$1;
var words = cljs.core.get.call(null,map__24047__$1,new cljs.core.Keyword(null,"words","words",1924933001));
var vec__24048 = cljs.core.first.call(null,words);
var ger = cljs.core.nth.call(null,vec__24048,(0),null);
var eng = cljs.core.nth.call(null,vec__24048,(1),null);
var c = cljs.core.nth.call(null,vec__24048,(2),null);
var list_kw = cljs.core.nth.call(null,vec__24048,(3),null);
if(client.level_complete_QMARK_.call(null,list_kw,c)){
return client.level_up.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ger,eng,c,list_kw], null));
} else {
return client.words__GT_answered.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ger,eng,(c + (1)),list_kw], null));
}
});
client.finished_QMARK_ = (function finished_QMARK_(state){
return cljs.core.not.call(null,cljs.core.seq.call(null,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state)));
});
client.answer = (function answer(state,r_or_w){
var updated = ((cljs.core._EQ_.call(null,r_or_w,new cljs.core.Keyword(null,"right","right",-452581833)))?client.got_right.call(null,state):client.got_wrong.call(null,state));
if(client.finished_QMARK_.call(null,updated)){
client.finished_list.call(null,updated);

return cljs.core.assoc.call(null,updated,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"next","next",-117701485));
} else {
return updated;
}
});
client.review_list = (function review_list(state,list_kw){
client.fetch_list.call(null,state,list_kw);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"review-list","review-list",-2126749986),new cljs.core.Keyword(null,"current-list","current-list",1594473864),list_kw,new cljs.core.Keyword(null,"answered","answered",-1524147020),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"next-list","next-list",138818716),cljs.core.PersistentVector.EMPTY);
});
client.show_list = (function show_list(state,kw){
client.fetch_list.call(null,state,kw);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"show-list","show-list",-483536849));
});
client.show_search = (function show_search(state,_){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"search-page","search-page",-705609891));
});
client.show_enter = (function show_enter(state,_){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"enter-page","enter-page",-519644705));
});
client.lookup = (function lookup(state,word){
var c__5980__auto___24091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto___24091){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto___24091){
return (function (state_24081){
var state_val_24082 = (state_24081[(1)]);
if((state_val_24082 === (3))){
var inst_24079 = (state_24081[(2)]);
var state_24081__$1 = state_24081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24081__$1,inst_24079);
} else {
if((state_val_24082 === (2))){
var inst_24070 = (state_24081[(7)]);
var inst_24074 = (state_24081[(2)]);
var inst_24075 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24076 = [new cljs.core.Keyword(null,"definitions","definitions",167529986),inst_24074];
var inst_24077 = (new cljs.core.PersistentVector(null,2,(5),inst_24075,inst_24076,null));
var state_24081__$1 = state_24081;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24081__$1,(3),inst_24070,inst_24077);
} else {
if((state_val_24082 === (1))){
var inst_24070 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_24071 = [cljs.core.str("/search/"),cljs.core.str(word)].join('');
var inst_24072 = cljs_http.client.get.call(null,inst_24071);
var state_24081__$1 = (function (){var statearr_24083 = state_24081;
(statearr_24083[(7)] = inst_24070);

return statearr_24083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24081__$1,(2),inst_24072);
} else {
return null;
}
}
}
});})(c__5980__auto___24091))
;
return ((function (switch__5965__auto__,c__5980__auto___24091){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_24087 = [null,null,null,null,null,null,null,null];
(statearr_24087[(0)] = state_machine__5966__auto__);

(statearr_24087[(1)] = (1));

return statearr_24087;
});
var state_machine__5966__auto____1 = (function (state_24081){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_24081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e24088){if((e24088 instanceof Object)){
var ex__5969__auto__ = e24088;
var statearr_24089_24092 = state_24081;
(statearr_24089_24092[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24093 = state_24081;
state_24081 = G__24093;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_24081){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_24081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto___24091))
})();
var state__5982__auto__ = (function (){var statearr_24090 = f__5981__auto__.call(null);
(statearr_24090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto___24091);

return statearr_24090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto___24091))
);


return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
});
client.add_new_word = (function add_new_word(state,entry){
var c__5980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto__){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto__){
return (function (state_24136){
var state_val_24137 = (state_24136[(1)]);
if((state_val_24137 === (3))){
var inst_24134 = (state_24136[(2)]);
var state_24136__$1 = state_24136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24136__$1,inst_24134);
} else {
if((state_val_24137 === (2))){
var inst_24120 = (state_24136[(7)]);
var inst_24129 = (state_24136[(2)]);
var inst_24130 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24131 = [new cljs.core.Keyword(null,"definition-added","definition-added",195281834),inst_24129];
var inst_24132 = (new cljs.core.PersistentVector(null,2,(5),inst_24130,inst_24131,null));
var state_24136__$1 = state_24136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24136__$1,(3),inst_24120,inst_24132);
} else {
if((state_val_24137 === (1))){
var inst_24120 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_24121 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_24122 = [new cljs.core.Keyword(null,"entry","entry",505168823)];
var inst_24123 = [entry];
var inst_24124 = cljs.core.PersistentHashMap.fromArrays(inst_24122,inst_24123);
var inst_24125 = [inst_24124];
var inst_24126 = cljs.core.PersistentHashMap.fromArrays(inst_24121,inst_24125);
var inst_24127 = cljs_http.client.post.call(null,"/add",inst_24126);
var state_24136__$1 = (function (){var statearr_24138 = state_24136;
(statearr_24138[(7)] = inst_24120);

return statearr_24138;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24136__$1,(2),inst_24127);
} else {
return null;
}
}
}
});})(c__5980__auto__))
;
return ((function (switch__5965__auto__,c__5980__auto__){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_24142 = [null,null,null,null,null,null,null,null];
(statearr_24142[(0)] = state_machine__5966__auto__);

(statearr_24142[(1)] = (1));

return statearr_24142;
});
var state_machine__5966__auto____1 = (function (state_24136){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_24136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e24143){if((e24143 instanceof Object)){
var ex__5969__auto__ = e24143;
var statearr_24144_24146 = state_24136;
(statearr_24144_24146[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24143;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24147 = state_24136;
state_24136 = G__24147;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_24136){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_24136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto__))
})();
var state__5982__auto__ = (function (){var statearr_24145 = f__5981__auto__.call(null);
(statearr_24145[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto__);

return statearr_24145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto__))
);

return c__5980__auto__;
});
client.submit_selected = (function submit_selected(state,entry_index){
var c__5980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto__){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto__){
return (function (state_24176){
var state_val_24177 = (state_24176[(1)]);
if((state_val_24177 === (1))){
var inst_24167 = new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865).cljs$core$IFn$_invoke$arity$1(state);
var inst_24168 = cljs.core.vec.call(null,inst_24167);
var inst_24169 = new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(entry_index);
var inst_24170 = cljs.reader.read_string.call(null,inst_24169);
var inst_24171 = cljs.core.get.call(null,inst_24168,inst_24170);
var inst_24172 = render.format_entry.call(null,inst_24171);
var inst_24173 = cljs.core.first.call(null,inst_24172);
var inst_24174 = cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
var state_24176__$1 = (function (){var statearr_24178 = state_24176;
(statearr_24178[(7)] = inst_24173);

return statearr_24178;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24176__$1,inst_24174);
} else {
return null;
}
});})(c__5980__auto__))
;
return ((function (switch__5965__auto__,c__5980__auto__){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_24182 = [null,null,null,null,null,null,null,null];
(statearr_24182[(0)] = state_machine__5966__auto__);

(statearr_24182[(1)] = (1));

return statearr_24182;
});
var state_machine__5966__auto____1 = (function (state_24176){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_24176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e24183){if((e24183 instanceof Object)){
var ex__5969__auto__ = e24183;
var statearr_24184_24186 = state_24176;
(statearr_24184_24186[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24187 = state_24176;
state_24176 = G__24187;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_24176){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_24176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto__))
})();
var state__5982__auto__ = (function (){var statearr_24185 = f__5981__auto__.call(null);
(statearr_24185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto__);

return statearr_24185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto__))
);

return c__5980__auto__;
});
client.submit_entered = (function submit_entered(state,entered){
client.add_new_word.call(null,state,entered);

return state;
});
client.handle_response = (function handle_response(state,p__24188){
var map__24190 = p__24188;
var map__24190__$1 = ((cljs.core.seq_QMARK_.call(null,map__24190))?cljs.core.apply.call(null,cljs.core.hash_map,map__24190):map__24190);
var body = cljs.core.get.call(null,map__24190__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.call(null,map__24190__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"words","words",1924933001),body);
});
client.show_definitions = (function show_definitions(state,p__24191){
var map__24193 = p__24191;
var map__24193__$1 = ((cljs.core.seq_QMARK_.call(null,map__24193))?cljs.core.apply.call(null,cljs.core.hash_map,map__24193):map__24193);
var body = cljs.core.get.call(null,map__24193__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865),body);
});
/**
* For every entry in a map of channel identifiers to consumers,
* initiate a channel listener which will update the application state
* using the appropriate function whenever a value is recieved, as
* well as triggering a render.
*/
client.init_updates = (function init_updates(p__24194){
var map__24232 = p__24194;
var map__24232__$1 = ((cljs.core.seq_QMARK_.call(null,map__24232))?cljs.core.apply.call(null,cljs.core.hash_map,map__24232):map__24232);
var functions = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var state = cljs.core.get.call(null,map__24232__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var input_chan = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var c__5980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto__,input_chan,map__24232,map__24232__$1,functions,state){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto__,input_chan,map__24232,map__24232__$1,functions,state){
return (function (state_24253){
var state_val_24254 = (state_24253[(1)]);
if((state_val_24254 === (7))){
var inst_24237 = (state_24253[(2)]);
var inst_24238 = cljs.core.nth.call(null,inst_24237,(0),null);
var inst_24239 = cljs.core.nth.call(null,inst_24237,(1),null);
var inst_24240 = [cljs.core.str("on channel ["),cljs.core.str(inst_24238),cljs.core.str("], received value ["),cljs.core.str(inst_24239),cljs.core.str("]")].join('');
var inst_24241 = console.log(inst_24240);
var inst_24242 = cljs.core.get.call(null,functions,inst_24238);
var inst_24243 = cljs.core.swap_BANG_.call(null,state,inst_24242,inst_24239);
var inst_24244 = cljs.core.deref.call(null,state);
var inst_24245 = render.request_render.call(null,inst_24244);
var state_24253__$1 = (function (){var statearr_24255 = state_24253;
(statearr_24255[(7)] = inst_24243);

(statearr_24255[(8)] = inst_24245);

(statearr_24255[(9)] = inst_24241);

return statearr_24255;
})();
var statearr_24256_24269 = state_24253__$1;
(statearr_24256_24269[(2)] = null);

(statearr_24256_24269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (6))){
var inst_24249 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
var statearr_24257_24270 = state_24253__$1;
(statearr_24257_24270[(2)] = inst_24249);

(statearr_24257_24270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (5))){
var state_24253__$1 = state_24253;
var statearr_24258_24271 = state_24253__$1;
(statearr_24258_24271[(2)] = null);

(statearr_24258_24271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (4))){
var state_24253__$1 = state_24253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24253__$1,(7),input_chan);
} else {
if((state_val_24254 === (3))){
var inst_24251 = (state_24253[(2)]);
var state_24253__$1 = state_24253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24253__$1,inst_24251);
} else {
if((state_val_24254 === (2))){
var state_24253__$1 = state_24253;
var statearr_24259_24272 = state_24253__$1;
(statearr_24259_24272[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24254 === (1))){
var state_24253__$1 = state_24253;
var statearr_24261_24273 = state_24253__$1;
(statearr_24261_24273[(2)] = null);

(statearr_24261_24273[(1)] = (2));


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
});})(c__5980__auto__,input_chan,map__24232,map__24232__$1,functions,state))
;
return ((function (switch__5965__auto__,c__5980__auto__,input_chan,map__24232,map__24232__$1,functions,state){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_24265 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24265[(0)] = state_machine__5966__auto__);

(statearr_24265[(1)] = (1));

return statearr_24265;
});
var state_machine__5966__auto____1 = (function (state_24253){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_24253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e24266){if((e24266 instanceof Object)){
var ex__5969__auto__ = e24266;
var statearr_24267_24274 = state_24253;
(statearr_24267_24274[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24266;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24275 = state_24253;
state_24253 = G__24275;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_24253){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_24253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto__,input_chan,map__24232,map__24232__$1,functions,state))
})();
var state__5982__auto__ = (function (){var statearr_24268 = f__5981__auto__.call(null);
(statearr_24268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto__);

return statearr_24268;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto__,input_chan,map__24232,map__24232__$1,functions,state))
);

return c__5980__auto__;
});
client.print_entry = (function print_entry(state,data){
cljs.core.println.call(null,data);

return state;
});
/**
* Return a map containing the initial application
*/
client.load_app = (function load_app(){
var f7 = (new Framework7());
var main = f7.addView(".view-main",{});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"review-list","review-list",-2126749986),new cljs.core.Keyword(null,"current-list","current-list",1594473864),new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"router","router",1091916230),client.router,new cljs.core.Keyword(null,"f7","f7",356150168),f7,new cljs.core.Keyword(null,"main-view","main-view",343997885),main], null)),new cljs.core.Keyword(null,"functions","functions",184951466),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"definitions","definitions",167529986),new cljs.core.Keyword(null,"submit-selected","submit-selected",-548982554),new cljs.core.Keyword(null,"search-term","search-term",356193544),new cljs.core.Keyword(null,"definition-added","definition-added",195281834),new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"saved-list","saved-list",1333944303),new cljs.core.Keyword(null,"answer","answer",-742633163),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"search-page","search-page",-705609891),new cljs.core.Keyword(null,"submit-entered","submit-entered",-1080659330),new cljs.core.Keyword(null,"review-list","review-list",-2126749986),new cljs.core.Keyword(null,"enter-page","enter-page",-519644705)],[client.handle_response,client.show_definitions,client.submit_selected,client.lookup,client.print_entry,client.show_list,client.print_entry,client.answer,client.print_entry,client.show_search,client.submit_entered,client.review_list,client.show_enter])], null);
});
/**
* Application entry point
*/
client.main = (function main(){
var app = client.load_app.call(null);
var state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app));
client.init_updates.call(null,app);

render.request_render.call(null,state);

var c__5980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto__,app,state){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto__,app,state){
return (function (state_24299){
var state_val_24300 = (state_24299[(1)]);
if((state_val_24300 === (2))){
var inst_24297 = (state_24299[(2)]);
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24299__$1,inst_24297);
} else {
if((state_val_24300 === (1))){
var inst_24292 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_24293 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24294 = [new cljs.core.Keyword(null,"review-list","review-list",-2126749986),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_24295 = (new cljs.core.PersistentVector(null,2,(5),inst_24293,inst_24294,null));
var state_24299__$1 = state_24299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24299__$1,(2),inst_24292,inst_24295);
} else {
return null;
}
}
});})(c__5980__auto__,app,state))
;
return ((function (switch__5965__auto__,c__5980__auto__,app,state){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_24304 = [null,null,null,null,null,null,null];
(statearr_24304[(0)] = state_machine__5966__auto__);

(statearr_24304[(1)] = (1));

return statearr_24304;
});
var state_machine__5966__auto____1 = (function (state_24299){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_24299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e24305){if((e24305 instanceof Object)){
var ex__5969__auto__ = e24305;
var statearr_24306_24308 = state_24299;
(statearr_24306_24308[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24309 = state_24299;
state_24299 = G__24309;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_24299){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_24299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto__,app,state))
})();
var state__5982__auto__ = (function (){var statearr_24307 = f__5981__auto__.call(null);
(statearr_24307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto__);

return statearr_24307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto__,app,state))
);

return c__5980__auto__;
});
goog.exportSymbol('client.main', client.main);

//# sourceMappingURL=client.js.map