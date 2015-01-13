// Compiled by ClojureScript 0.0-2674 {}
if(!goog.isProvided_('client')) {
goog.provide('client');
}
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('cljs_http.client');
goog.require('goog.History');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('render');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
client.get_list = (function get_list(state,kw){
var c__5977__auto___10898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___10898){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___10898){
return (function (state_10888){
var state_val_10889 = (state_10888[(1)]);
if((state_val_10889 === (3))){
var inst_10886 = (state_10888[(2)]);
var state_10888__$1 = state_10888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10888__$1,inst_10886);
} else {
if((state_val_10889 === (2))){
var inst_10868 = (state_10888[(7)]);
var inst_10881 = (state_10888[(2)]);
var inst_10882 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10883 = [new cljs.core.Keyword(null,"response","response",-1068424192),inst_10881];
var inst_10884 = (new cljs.core.PersistentVector(null,2,(5),inst_10882,inst_10883,null));
var state_10888__$1 = state_10888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10888__$1,(3),inst_10868,inst_10884);
} else {
if((state_val_10889 === (1))){
var inst_10868 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_10869 = [cljs.core.str("/"),cljs.core.str(kw)].join('');
var inst_10870 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_10871 = [new cljs.core.Keyword(null,"list","list",765357683)];
var inst_10872 = [kw];
var inst_10873 = cljs.core.PersistentHashMap.fromArrays(inst_10871,inst_10872);
var inst_10874 = [inst_10873];
var inst_10875 = cljs.core.PersistentHashMap.fromArrays(inst_10870,inst_10874);
var inst_10876 = ["accept"];
var inst_10877 = ["application/edn"];
var inst_10878 = cljs.core.PersistentHashMap.fromArrays(inst_10876,inst_10877);
var inst_10879 = cljs_http.client.get.call(null,inst_10869,inst_10875,new cljs.core.Keyword(null,"headers","headers",-835030129),inst_10878);
var state_10888__$1 = (function (){var statearr_10890 = state_10888;
(statearr_10890[(7)] = inst_10868);

return statearr_10890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10888__$1,(2),inst_10879);
} else {
return null;
}
}
}
});})(c__5977__auto___10898))
;
return ((function (switch__5962__auto__,c__5977__auto___10898){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_10894 = [null,null,null,null,null,null,null,null];
(statearr_10894[(0)] = state_machine__5963__auto__);

(statearr_10894[(1)] = (1));

return statearr_10894;
});
var state_machine__5963__auto____1 = (function (state_10888){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_10888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e10895){if((e10895 instanceof Object)){
var ex__5966__auto__ = e10895;
var statearr_10896_10899 = state_10888;
(statearr_10896_10899[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10900 = state_10888;
state_10888 = G__10900;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_10888){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_10888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___10898))
})();
var state__5979__auto__ = (function (){var statearr_10897 = f__5978__auto__.call(null);
(statearr_10897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___10898);

return statearr_10897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___10898))
);


return state;
});
client.lookup = (function lookup(state,word){
var c__5977__auto___10955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___10955){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___10955){
return (function (state_10945){
var state_val_10946 = (state_10945[(1)]);
if((state_val_10946 === (3))){
var inst_10943 = (state_10945[(2)]);
var state_10945__$1 = state_10945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10945__$1,inst_10943);
} else {
if((state_val_10946 === (2))){
var inst_10928 = (state_10945[(7)]);
var inst_10938 = (state_10945[(2)]);
var inst_10939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10940 = [new cljs.core.Keyword(null,"definitions","definitions",167529986),inst_10938];
var inst_10941 = (new cljs.core.PersistentVector(null,2,(5),inst_10939,inst_10940,null));
var state_10945__$1 = state_10945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10945__$1,(3),inst_10928,inst_10941);
} else {
if((state_val_10946 === (1))){
var inst_10928 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_10929 = [cljs.core.str("/search/"),cljs.core.str(word)].join('');
var inst_10930 = [new cljs.core.Keyword(null,"headers","headers",-835030129)];
var inst_10931 = ["accept"];
var inst_10932 = ["application/edn"];
var inst_10933 = cljs.core.PersistentHashMap.fromArrays(inst_10931,inst_10932);
var inst_10934 = [inst_10933];
var inst_10935 = cljs.core.PersistentHashMap.fromArrays(inst_10930,inst_10934);
var inst_10936 = cljs_http.client.get.call(null,inst_10929,inst_10935);
var state_10945__$1 = (function (){var statearr_10947 = state_10945;
(statearr_10947[(7)] = inst_10928);

return statearr_10947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10945__$1,(2),inst_10936);
} else {
return null;
}
}
}
});})(c__5977__auto___10955))
;
return ((function (switch__5962__auto__,c__5977__auto___10955){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_10951 = [null,null,null,null,null,null,null,null];
(statearr_10951[(0)] = state_machine__5963__auto__);

(statearr_10951[(1)] = (1));

return statearr_10951;
});
var state_machine__5963__auto____1 = (function (state_10945){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_10945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e10952){if((e10952 instanceof Object)){
var ex__5966__auto__ = e10952;
var statearr_10953_10956 = state_10945;
(statearr_10953_10956[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10957 = state_10945;
state_10945 = G__10957;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_10945){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_10945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___10955))
})();
var state__5979__auto__ = (function (){var statearr_10954 = f__5978__auto__.call(null);
(statearr_10954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___10955);

return statearr_10954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___10955))
);


return state;
});
client.handle_response = (function handle_response(state,p__10958){
var map__10960 = p__10958;
var map__10960__$1 = ((cljs.core.seq_QMARK_.call(null,map__10960))?cljs.core.apply.call(null,cljs.core.hash_map,map__10960):map__10960);
var resp = map__10960__$1;
var body = cljs.core.get.call(null,map__10960__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.call(null,map__10960__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"list","list",765357683),cljs.reader.read_string.call(null,body));
});
client.show_definitions = (function show_definitions(state,p__10961){
var map__10963 = p__10961;
var map__10963__$1 = ((cljs.core.seq_QMARK_.call(null,map__10963))?cljs.core.apply.call(null,cljs.core.hash_map,map__10963):map__10963);
var body = cljs.core.get.call(null,map__10963__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865),new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865),body);
});
/**
* For every entry in a map of channel identifiers to consumers,
* initiate a channel listener which will update the application state
* using the appropriate function whenever a value is recieved, as
* well as triggering a render.
*/
client.init_updates = (function init_updates(p__10964){
var map__11002 = p__10964;
var map__11002__$1 = ((cljs.core.seq_QMARK_.call(null,map__11002))?cljs.core.apply.call(null,cljs.core.hash_map,map__11002):map__11002);
var functions = cljs.core.get.call(null,map__11002__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var state = cljs.core.get.call(null,map__11002__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var input_chan = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var c__5977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto__,input_chan,map__11002,map__11002__$1,functions,state){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto__,input_chan,map__11002,map__11002__$1,functions,state){
return (function (state_11023){
var state_val_11024 = (state_11023[(1)]);
if((state_val_11024 === (7))){
var inst_11007 = (state_11023[(2)]);
var inst_11008 = cljs.core.nth.call(null,inst_11007,(0),null);
var inst_11009 = cljs.core.nth.call(null,inst_11007,(1),null);
var inst_11010 = [cljs.core.str("on channel ["),cljs.core.str(inst_11008),cljs.core.str("], received value ["),cljs.core.str(inst_11009),cljs.core.str("]")].join('');
var inst_11011 = console.log(inst_11010);
var inst_11012 = cljs.core.get.call(null,functions,inst_11008);
var inst_11013 = cljs.core.swap_BANG_.call(null,state,inst_11012,inst_11009);
var inst_11014 = cljs.core.deref.call(null,state);
var inst_11015 = render.request_render.call(null,inst_11014);
var state_11023__$1 = (function (){var statearr_11025 = state_11023;
(statearr_11025[(7)] = inst_11013);

(statearr_11025[(8)] = inst_11015);

(statearr_11025[(9)] = inst_11011);

return statearr_11025;
})();
var statearr_11026_11039 = state_11023__$1;
(statearr_11026_11039[(2)] = null);

(statearr_11026_11039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11024 === (6))){
var inst_11019 = (state_11023[(2)]);
var state_11023__$1 = state_11023;
var statearr_11027_11040 = state_11023__$1;
(statearr_11027_11040[(2)] = inst_11019);

(statearr_11027_11040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11024 === (5))){
var state_11023__$1 = state_11023;
var statearr_11028_11041 = state_11023__$1;
(statearr_11028_11041[(2)] = null);

(statearr_11028_11041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11024 === (4))){
var state_11023__$1 = state_11023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11023__$1,(7),input_chan);
} else {
if((state_val_11024 === (3))){
var inst_11021 = (state_11023[(2)]);
var state_11023__$1 = state_11023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11023__$1,inst_11021);
} else {
if((state_val_11024 === (2))){
var state_11023__$1 = state_11023;
var statearr_11029_11042 = state_11023__$1;
(statearr_11029_11042[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11024 === (1))){
var state_11023__$1 = state_11023;
var statearr_11031_11043 = state_11023__$1;
(statearr_11031_11043[(2)] = null);

(statearr_11031_11043[(1)] = (2));


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
});})(c__5977__auto__,input_chan,map__11002,map__11002__$1,functions,state))
;
return ((function (switch__5962__auto__,c__5977__auto__,input_chan,map__11002,map__11002__$1,functions,state){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_11035 = [null,null,null,null,null,null,null,null,null,null];
(statearr_11035[(0)] = state_machine__5963__auto__);

(statearr_11035[(1)] = (1));

return statearr_11035;
});
var state_machine__5963__auto____1 = (function (state_11023){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_11023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e11036){if((e11036 instanceof Object)){
var ex__5966__auto__ = e11036;
var statearr_11037_11044 = state_11023;
(statearr_11037_11044[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11045 = state_11023;
state_11023 = G__11045;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_11023){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_11023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto__,input_chan,map__11002,map__11002__$1,functions,state))
})();
var state__5979__auto__ = (function (){var statearr_11038 = f__5978__auto__.call(null);
(statearr_11038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto__);

return statearr_11038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto__,input_chan,map__11002,map__11002__$1,functions,state))
);

return c__5977__auto__;
});
client.print_entry = (function print_entry(state,data){
cljs.core.println.call(null,data);

return state;
});
/**
* Return a map containing the initial application
*/
client.load_app = (function load_app(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"search-page","search-page",-705609891)], null)),new cljs.core.Keyword(null,"functions","functions",184951466),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"nav","nav",719540477),client.print_entry,new cljs.core.Keyword(null,"definitions","definitions",167529986),client.show_definitions,new cljs.core.Keyword(null,"response","response",-1068424192),client.handle_response,new cljs.core.Keyword(null,"search-term","search-term",356193544),client.lookup,new cljs.core.Keyword(null,"answer","answer",-742633163),client.print_entry], null)], null);
});
/**
* Application entry point
*/
client.main = (function main(){
var app = client.load_app.call(null);
client.init_updates.call(null,app);

return client.get_list.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app)),new cljs.core.Keyword(null,"daily","daily",-697831483));
});
goog.exportSymbol('client.main', client.main);

//# sourceMappingURL=client.js.map