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
client.get_some = (function get_some(x){
var c__6183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6183__auto__){
return (function (){
var f__6184__auto__ = (function (){var switch__6127__auto__ = ((function (c__6183__auto__){
return (function (state_35240){
var state_val_35241 = (state_35240[(1)]);
if((state_val_35241 === (2))){
var inst_35233 = (state_35240[(2)]);
var inst_35234 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_35233);
var inst_35235 = cljs.core.prn.call(null,inst_35234);
var inst_35236 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35233);
var inst_35237 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",55217519),inst_35236);
var inst_35238 = cljs.core.prn.call(null,inst_35237);
var state_35240__$1 = (function (){var statearr_35242 = state_35240;
(statearr_35242[(7)] = inst_35235);

return statearr_35242;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35240__$1,inst_35238);
} else {
if((state_val_35241 === (1))){
var inst_35228 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_35229 = [false];
var inst_35230 = cljs.core.PersistentHashMap.fromArrays(inst_35228,inst_35229);
var inst_35231 = cljs_http.client.get.call(null,"https://api.github.com/users",inst_35230);
var state_35240__$1 = state_35240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35240__$1,(2),inst_35231);
} else {
return null;
}
}
});})(c__6183__auto__))
;
return ((function (switch__6127__auto__,c__6183__auto__){
return (function() {
var state_machine__6128__auto__ = null;
var state_machine__6128__auto____0 = (function (){
var statearr_35246 = [null,null,null,null,null,null,null,null];
(statearr_35246[(0)] = state_machine__6128__auto__);

(statearr_35246[(1)] = (1));

return statearr_35246;
});
var state_machine__6128__auto____1 = (function (state_35240){
while(true){
var ret_value__6129__auto__ = (function (){try{while(true){
var result__6130__auto__ = switch__6127__auto__.call(null,state_35240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6130__auto__;
}
break;
}
}catch (e35247){if((e35247 instanceof Object)){
var ex__6131__auto__ = e35247;
var statearr_35248_35250 = state_35240;
(statearr_35248_35250[(5)] = ex__6131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35247;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35251 = state_35240;
state_35240 = G__35251;
continue;
} else {
return ret_value__6129__auto__;
}
break;
}
});
state_machine__6128__auto__ = function(state_35240){
switch(arguments.length){
case 0:
return state_machine__6128__auto____0.call(this);
case 1:
return state_machine__6128__auto____1.call(this,state_35240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6128__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6128__auto____0;
state_machine__6128__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6128__auto____1;
return state_machine__6128__auto__;
})()
;})(switch__6127__auto__,c__6183__auto__))
})();
var state__6185__auto__ = (function (){var statearr_35249 = f__6184__auto__.call(null);
(statearr_35249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6183__auto__);

return statearr_35249;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6185__auto__);
});})(c__6183__auto__))
);

return c__6183__auto__;
});
client.get_list = (function get_list(app,kw){
var c__6183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6183__auto__){
return (function (){
var f__6184__auto__ = (function (){var switch__6127__auto__ = ((function (c__6183__auto__){
return (function (state_35299){
var state_val_35300 = (state_35299[(1)]);
if((state_val_35300 === (3))){
var inst_35297 = (state_35299[(2)]);
var state_35299__$1 = (function (){var statearr_35301 = state_35299;
(statearr_35301[(7)] = inst_35297);

return statearr_35301;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35299__$1,app);
} else {
if((state_val_35300 === (2))){
var inst_35282 = (state_35299[(8)]);
var inst_35295 = (state_35299[(2)]);
var state_35299__$1 = state_35299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35299__$1,(3),inst_35282,inst_35295);
} else {
if((state_val_35300 === (1))){
var inst_35281 = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(app);
var inst_35282 = new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(inst_35281);
var inst_35283 = [cljs.core.str("/"),cljs.core.str(kw)].join('');
var inst_35284 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_35285 = [new cljs.core.Keyword(null,"list","list",765357683)];
var inst_35286 = [kw];
var inst_35287 = cljs.core.PersistentHashMap.fromArrays(inst_35285,inst_35286);
var inst_35288 = [inst_35287];
var inst_35289 = cljs.core.PersistentHashMap.fromArrays(inst_35284,inst_35288);
var inst_35290 = ["accept"];
var inst_35291 = ["application/edn"];
var inst_35292 = cljs.core.PersistentHashMap.fromArrays(inst_35290,inst_35291);
var inst_35293 = cljs_http.client.get.call(null,inst_35283,inst_35289,new cljs.core.Keyword(null,"headers","headers",-835030129),inst_35292);
var state_35299__$1 = (function (){var statearr_35302 = state_35299;
(statearr_35302[(8)] = inst_35282);

return statearr_35302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35299__$1,(2),inst_35293);
} else {
return null;
}
}
}
});})(c__6183__auto__))
;
return ((function (switch__6127__auto__,c__6183__auto__){
return (function() {
var state_machine__6128__auto__ = null;
var state_machine__6128__auto____0 = (function (){
var statearr_35306 = [null,null,null,null,null,null,null,null,null];
(statearr_35306[(0)] = state_machine__6128__auto__);

(statearr_35306[(1)] = (1));

return statearr_35306;
});
var state_machine__6128__auto____1 = (function (state_35299){
while(true){
var ret_value__6129__auto__ = (function (){try{while(true){
var result__6130__auto__ = switch__6127__auto__.call(null,state_35299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6130__auto__;
}
break;
}
}catch (e35307){if((e35307 instanceof Object)){
var ex__6131__auto__ = e35307;
var statearr_35308_35310 = state_35299;
(statearr_35308_35310[(5)] = ex__6131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35307;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35311 = state_35299;
state_35299 = G__35311;
continue;
} else {
return ret_value__6129__auto__;
}
break;
}
});
state_machine__6128__auto__ = function(state_35299){
switch(arguments.length){
case 0:
return state_machine__6128__auto____0.call(this);
case 1:
return state_machine__6128__auto____1.call(this,state_35299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6128__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6128__auto____0;
state_machine__6128__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6128__auto____1;
return state_machine__6128__auto__;
})()
;})(switch__6127__auto__,c__6183__auto__))
})();
var state__6185__auto__ = (function (){var statearr_35309 = f__6184__auto__.call(null);
(statearr_35309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6183__auto__);

return statearr_35309;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6185__auto__);
});})(c__6183__auto__))
);

return c__6183__auto__;
});
/**
* Set up Google Closure history management
*/
client.init_history = (function init_history(app){
var h = (new goog.History());
h.setEnabled(true);

return goog.events.listen(h,goog.History.EventType.NAVIGATE,((function (h){
return (function (evt){
var ch = new cljs.core.Keyword(null,"nav","nav",719540477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(app));
var token = evt.token;
h.setToken(token);

var c__6183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6183__auto__,ch,token,h){
return (function (){
var f__6184__auto__ = (function (){var switch__6127__auto__ = ((function (c__6183__auto__,ch,token,h){
return (function (state_35327){
var state_val_35328 = (state_35327[(1)]);
if((state_val_35328 === (2))){
var inst_35325 = (state_35327[(2)]);
var state_35327__$1 = state_35327;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35327__$1,inst_35325);
} else {
if((state_val_35328 === (1))){
var state_35327__$1 = state_35327;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35327__$1,(2),ch,token);
} else {
return null;
}
}
});})(c__6183__auto__,ch,token,h))
;
return ((function (switch__6127__auto__,c__6183__auto__,ch,token,h){
return (function() {
var state_machine__6128__auto__ = null;
var state_machine__6128__auto____0 = (function (){
var statearr_35332 = [null,null,null,null,null,null,null];
(statearr_35332[(0)] = state_machine__6128__auto__);

(statearr_35332[(1)] = (1));

return statearr_35332;
});
var state_machine__6128__auto____1 = (function (state_35327){
while(true){
var ret_value__6129__auto__ = (function (){try{while(true){
var result__6130__auto__ = switch__6127__auto__.call(null,state_35327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6130__auto__;
}
break;
}
}catch (e35333){if((e35333 instanceof Object)){
var ex__6131__auto__ = e35333;
var statearr_35334_35336 = state_35327;
(statearr_35334_35336[(5)] = ex__6131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35337 = state_35327;
state_35327 = G__35337;
continue;
} else {
return ret_value__6129__auto__;
}
break;
}
});
state_machine__6128__auto__ = function(state_35327){
switch(arguments.length){
case 0:
return state_machine__6128__auto____0.call(this);
case 1:
return state_machine__6128__auto____1.call(this,state_35327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6128__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6128__auto____0;
state_machine__6128__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6128__auto____1;
return state_machine__6128__auto__;
})()
;})(switch__6127__auto__,c__6183__auto__,ch,token,h))
})();
var state__6185__auto__ = (function (){var statearr_35335 = f__6184__auto__.call(null);
(statearr_35335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6183__auto__);

return statearr_35335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6185__auto__);
});})(c__6183__auto__,ch,token,h))
);

return c__6183__auto__;
});})(h))
);
});
client.handle_response = (function handle_response(app,p__35338){
var map__35340 = p__35338;
var map__35340__$1 = ((cljs.core.seq_QMARK_.call(null,map__35340))?cljs.core.apply.call(null,cljs.core.hash_map,map__35340):map__35340);
var resp = map__35340__$1;
var body = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.call(null,map__35340__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.call(null,app,new cljs.core.Keyword(null,"list","list",765357683),cljs.reader.read_string.call(null,body));
});
/**
* Return a map containing the initial application
*/
client.load_app = (function load_app(){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"channels","channels",1132759174),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"answer","answer",-742633163),cljs.core.async.chan.call(null)], null),new cljs.core.Keyword(null,"consumers","consumers",270616753),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"nav","nav",719540477),cljs.core.println,new cljs.core.Keyword(null,"response","response",-1068424192),client.handle_response,new cljs.core.Keyword(null,"answer","answer",-742633163),client.get_some], null)], null);
});
/**
* For every entry in a map of channel identifiers to consumers,
* initiate a channel listener which will update the application state
* using the appropriate function whenever a value is recieved, as
* well as triggering a render.
*/
client.init_updates = (function init_updates(app){
var seq__35415 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"consumers","consumers",270616753).cljs$core$IFn$_invoke$arity$1(app));
var chunk__35416 = null;
var count__35417 = (0);
var i__35418 = (0);
while(true){
if((i__35418 < count__35417)){
var vec__35419 = cljs.core._nth.call(null,chunk__35416,i__35418);
var ch = cljs.core.nth.call(null,vec__35419,(0),null);
var update_fn = cljs.core.nth.call(null,vec__35419,(1),null);
var c__6183__auto___35489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__35415,chunk__35416,count__35417,i__35418,c__6183__auto___35489,vec__35419,ch,update_fn){
return (function (){
var f__6184__auto__ = (function (){var switch__6127__auto__ = ((function (seq__35415,chunk__35416,count__35417,i__35418,c__6183__auto___35489,vec__35419,ch,update_fn){
return (function (state_35438){
var state_val_35439 = (state_35438[(1)]);
if((state_val_35439 === (7))){
var inst_35425 = (state_35438[(2)]);
var inst_35426 = [cljs.core.str("on channel ["),cljs.core.str(ch),cljs.core.str("], recieved value ["),cljs.core.str(inst_35425),cljs.core.str("]")].join('');
var inst_35427 = console.log(inst_35426);
var inst_35428 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app);
var inst_35429 = cljs.core.swap_BANG_.call(null,inst_35428,update_fn,inst_35425);
var inst_35430 = render.request_render.call(null,app);
var state_35438__$1 = (function (){var statearr_35440 = state_35438;
(statearr_35440[(7)] = inst_35427);

(statearr_35440[(8)] = inst_35430);

(statearr_35440[(9)] = inst_35429);

return statearr_35440;
})();
var statearr_35441_35490 = state_35438__$1;
(statearr_35441_35490[(2)] = null);

(statearr_35441_35490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (6))){
var inst_35434 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
var statearr_35442_35491 = state_35438__$1;
(statearr_35442_35491[(2)] = inst_35434);

(statearr_35442_35491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (5))){
var state_35438__$1 = state_35438;
var statearr_35443_35492 = state_35438__$1;
(statearr_35443_35492[(2)] = null);

(statearr_35443_35492[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (4))){
var inst_35422 = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(app);
var inst_35423 = cljs.core.get.call(null,inst_35422,ch);
var state_35438__$1 = state_35438;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35438__$1,(7),inst_35423);
} else {
if((state_val_35439 === (3))){
var inst_35436 = (state_35438[(2)]);
var state_35438__$1 = state_35438;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35438__$1,inst_35436);
} else {
if((state_val_35439 === (2))){
var state_35438__$1 = state_35438;
var statearr_35444_35493 = state_35438__$1;
(statearr_35444_35493[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35439 === (1))){
var state_35438__$1 = state_35438;
var statearr_35446_35494 = state_35438__$1;
(statearr_35446_35494[(2)] = null);

(statearr_35446_35494[(1)] = (2));


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
});})(seq__35415,chunk__35416,count__35417,i__35418,c__6183__auto___35489,vec__35419,ch,update_fn))
;
return ((function (seq__35415,chunk__35416,count__35417,i__35418,switch__6127__auto__,c__6183__auto___35489,vec__35419,ch,update_fn){
return (function() {
var state_machine__6128__auto__ = null;
var state_machine__6128__auto____0 = (function (){
var statearr_35450 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35450[(0)] = state_machine__6128__auto__);

(statearr_35450[(1)] = (1));

return statearr_35450;
});
var state_machine__6128__auto____1 = (function (state_35438){
while(true){
var ret_value__6129__auto__ = (function (){try{while(true){
var result__6130__auto__ = switch__6127__auto__.call(null,state_35438);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6130__auto__;
}
break;
}
}catch (e35451){if((e35451 instanceof Object)){
var ex__6131__auto__ = e35451;
var statearr_35452_35495 = state_35438;
(statearr_35452_35495[(5)] = ex__6131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35438);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35451;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35496 = state_35438;
state_35438 = G__35496;
continue;
} else {
return ret_value__6129__auto__;
}
break;
}
});
state_machine__6128__auto__ = function(state_35438){
switch(arguments.length){
case 0:
return state_machine__6128__auto____0.call(this);
case 1:
return state_machine__6128__auto____1.call(this,state_35438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6128__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6128__auto____0;
state_machine__6128__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6128__auto____1;
return state_machine__6128__auto__;
})()
;})(seq__35415,chunk__35416,count__35417,i__35418,switch__6127__auto__,c__6183__auto___35489,vec__35419,ch,update_fn))
})();
var state__6185__auto__ = (function (){var statearr_35453 = f__6184__auto__.call(null);
(statearr_35453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6183__auto___35489);

return statearr_35453;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6185__auto__);
});})(seq__35415,chunk__35416,count__35417,i__35418,c__6183__auto___35489,vec__35419,ch,update_fn))
);


var G__35497 = seq__35415;
var G__35498 = chunk__35416;
var G__35499 = count__35417;
var G__35500 = (i__35418 + (1));
seq__35415 = G__35497;
chunk__35416 = G__35498;
count__35417 = G__35499;
i__35418 = G__35500;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35415);
if(temp__4126__auto__){
var seq__35415__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35415__$1)){
var c__4541__auto__ = cljs.core.chunk_first.call(null,seq__35415__$1);
var G__35501 = cljs.core.chunk_rest.call(null,seq__35415__$1);
var G__35502 = c__4541__auto__;
var G__35503 = cljs.core.count.call(null,c__4541__auto__);
var G__35504 = (0);
seq__35415 = G__35501;
chunk__35416 = G__35502;
count__35417 = G__35503;
i__35418 = G__35504;
continue;
} else {
var vec__35454 = cljs.core.first.call(null,seq__35415__$1);
var ch = cljs.core.nth.call(null,vec__35454,(0),null);
var update_fn = cljs.core.nth.call(null,vec__35454,(1),null);
var c__6183__auto___35505 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (seq__35415,chunk__35416,count__35417,i__35418,c__6183__auto___35505,vec__35454,ch,update_fn,seq__35415__$1,temp__4126__auto__){
return (function (){
var f__6184__auto__ = (function (){var switch__6127__auto__ = ((function (seq__35415,chunk__35416,count__35417,i__35418,c__6183__auto___35505,vec__35454,ch,update_fn,seq__35415__$1,temp__4126__auto__){
return (function (state_35473){
var state_val_35474 = (state_35473[(1)]);
if((state_val_35474 === (7))){
var inst_35460 = (state_35473[(2)]);
var inst_35461 = [cljs.core.str("on channel ["),cljs.core.str(ch),cljs.core.str("], recieved value ["),cljs.core.str(inst_35460),cljs.core.str("]")].join('');
var inst_35462 = console.log(inst_35461);
var inst_35463 = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app);
var inst_35464 = cljs.core.swap_BANG_.call(null,inst_35463,update_fn,inst_35460);
var inst_35465 = render.request_render.call(null,app);
var state_35473__$1 = (function (){var statearr_35475 = state_35473;
(statearr_35475[(7)] = inst_35464);

(statearr_35475[(8)] = inst_35465);

(statearr_35475[(9)] = inst_35462);

return statearr_35475;
})();
var statearr_35476_35506 = state_35473__$1;
(statearr_35476_35506[(2)] = null);

(statearr_35476_35506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (6))){
var inst_35469 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
var statearr_35477_35507 = state_35473__$1;
(statearr_35477_35507[(2)] = inst_35469);

(statearr_35477_35507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (5))){
var state_35473__$1 = state_35473;
var statearr_35478_35508 = state_35473__$1;
(statearr_35478_35508[(2)] = null);

(statearr_35478_35508[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (4))){
var inst_35457 = new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(app);
var inst_35458 = cljs.core.get.call(null,inst_35457,ch);
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35473__$1,(7),inst_35458);
} else {
if((state_val_35474 === (3))){
var inst_35471 = (state_35473[(2)]);
var state_35473__$1 = state_35473;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35473__$1,inst_35471);
} else {
if((state_val_35474 === (2))){
var state_35473__$1 = state_35473;
var statearr_35479_35509 = state_35473__$1;
(statearr_35479_35509[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35474 === (1))){
var state_35473__$1 = state_35473;
var statearr_35481_35510 = state_35473__$1;
(statearr_35481_35510[(2)] = null);

(statearr_35481_35510[(1)] = (2));


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
});})(seq__35415,chunk__35416,count__35417,i__35418,c__6183__auto___35505,vec__35454,ch,update_fn,seq__35415__$1,temp__4126__auto__))
;
return ((function (seq__35415,chunk__35416,count__35417,i__35418,switch__6127__auto__,c__6183__auto___35505,vec__35454,ch,update_fn,seq__35415__$1,temp__4126__auto__){
return (function() {
var state_machine__6128__auto__ = null;
var state_machine__6128__auto____0 = (function (){
var statearr_35485 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35485[(0)] = state_machine__6128__auto__);

(statearr_35485[(1)] = (1));

return statearr_35485;
});
var state_machine__6128__auto____1 = (function (state_35473){
while(true){
var ret_value__6129__auto__ = (function (){try{while(true){
var result__6130__auto__ = switch__6127__auto__.call(null,state_35473);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6130__auto__;
}
break;
}
}catch (e35486){if((e35486 instanceof Object)){
var ex__6131__auto__ = e35486;
var statearr_35487_35511 = state_35473;
(statearr_35487_35511[(5)] = ex__6131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35486;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35512 = state_35473;
state_35473 = G__35512;
continue;
} else {
return ret_value__6129__auto__;
}
break;
}
});
state_machine__6128__auto__ = function(state_35473){
switch(arguments.length){
case 0:
return state_machine__6128__auto____0.call(this);
case 1:
return state_machine__6128__auto____1.call(this,state_35473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6128__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6128__auto____0;
state_machine__6128__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6128__auto____1;
return state_machine__6128__auto__;
})()
;})(seq__35415,chunk__35416,count__35417,i__35418,switch__6127__auto__,c__6183__auto___35505,vec__35454,ch,update_fn,seq__35415__$1,temp__4126__auto__))
})();
var state__6185__auto__ = (function (){var statearr_35488 = f__6184__auto__.call(null);
(statearr_35488[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6183__auto___35505);

return statearr_35488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6185__auto__);
});})(seq__35415,chunk__35416,count__35417,i__35418,c__6183__auto___35505,vec__35454,ch,update_fn,seq__35415__$1,temp__4126__auto__))
);


var G__35513 = cljs.core.next.call(null,seq__35415__$1);
var G__35514 = null;
var G__35515 = (0);
var G__35516 = (0);
seq__35415 = G__35513;
chunk__35416 = G__35514;
count__35417 = G__35515;
i__35418 = G__35516;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
* Application entry point
*/
client.main = (function main(){
var app = client.load_app.call(null);
client.init_history.call(null,app);

client.init_updates.call(null,app);

render.request_render.call(null,app);

return client.get_list.call(null,app,new cljs.core.Keyword(null,"daily","daily",-697831483));
});
goog.exportSymbol('client.main', client.main);

//# sourceMappingURL=client.js.map