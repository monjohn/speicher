// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31300__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31300 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31301__i = 0, G__31301__a = new Array(arguments.length -  0);
while (G__31301__i < G__31301__a.length) {G__31301__a[G__31301__i] = arguments[G__31301__i + 0]; ++G__31301__i;}
  args = new cljs.core.IndexedSeq(G__31301__a,0);
} 
return G__31300__delegate.call(this,args);};
G__31300.cljs$lang$maxFixedArity = 0;
G__31300.cljs$lang$applyTo = (function (arglist__31302){
var args = cljs.core.seq(arglist__31302);
return G__31300__delegate(args);
});
G__31300.cljs$core$IFn$_invoke$arity$variadic = G__31300__delegate;
return G__31300;
})()
;
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__31303){
var map__31305 = p__31303;
var map__31305__$1 = ((cljs.core.seq_QMARK_.call(null,map__31305))?cljs.core.apply.call(null,cljs.core.hash_map,map__31305):map__31305);
var class$ = cljs.core.get.call(null,map__31305__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__31305__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__7504__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__7492__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__7492__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__7492__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__10282__auto___31434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___31434,ch){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___31434,ch){
return (function (state_31408){
var state_val_31409 = (state_31408[(1)]);
if((state_val_31409 === (7))){
var inst_31404 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31410_31435 = state_31408__$1;
(statearr_31410_31435[(2)] = inst_31404);

(statearr_31410_31435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (1))){
var state_31408__$1 = state_31408;
var statearr_31411_31436 = state_31408__$1;
(statearr_31411_31436[(2)] = null);

(statearr_31411_31436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (4))){
var inst_31372 = (state_31408[(7)]);
var inst_31372__$1 = (state_31408[(2)]);
var state_31408__$1 = (function (){var statearr_31412 = state_31408;
(statearr_31412[(7)] = inst_31372__$1);

return statearr_31412;
})();
if(cljs.core.truth_(inst_31372__$1)){
var statearr_31413_31437 = state_31408__$1;
(statearr_31413_31437[(1)] = (5));

} else {
var statearr_31414_31438 = state_31408__$1;
(statearr_31414_31438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (13))){
var state_31408__$1 = state_31408;
var statearr_31415_31439 = state_31408__$1;
(statearr_31415_31439[(2)] = null);

(statearr_31415_31439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (6))){
var state_31408__$1 = state_31408;
var statearr_31416_31440 = state_31408__$1;
(statearr_31416_31440[(2)] = null);

(statearr_31416_31440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (3))){
var inst_31406 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31408__$1,inst_31406);
} else {
if((state_val_31409 === (12))){
var inst_31379 = (state_31408[(8)]);
var inst_31392 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31379);
var inst_31393 = cljs.core.first.call(null,inst_31392);
var inst_31394 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31393);
var inst_31395 = console.warn("Figwheel: Not loading code with warnings - ",inst_31394);
var state_31408__$1 = state_31408;
var statearr_31417_31441 = state_31408__$1;
(statearr_31417_31441[(2)] = inst_31395);

(statearr_31417_31441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (2))){
var state_31408__$1 = state_31408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31408__$1,(4),ch);
} else {
if((state_val_31409 === (11))){
var inst_31388 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31418_31442 = state_31408__$1;
(statearr_31418_31442[(2)] = inst_31388);

(statearr_31418_31442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (9))){
var inst_31378 = (state_31408[(9)]);
var inst_31390 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31378,opts);
var state_31408__$1 = state_31408;
if(inst_31390){
var statearr_31419_31443 = state_31408__$1;
(statearr_31419_31443[(1)] = (12));

} else {
var statearr_31420_31444 = state_31408__$1;
(statearr_31420_31444[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (5))){
var inst_31372 = (state_31408[(7)]);
var inst_31378 = (state_31408[(9)]);
var inst_31374 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31375 = (new cljs.core.PersistentArrayMap(null,2,inst_31374,null));
var inst_31376 = (new cljs.core.PersistentHashSet(null,inst_31375,null));
var inst_31377 = figwheel.client.focus_msgs.call(null,inst_31376,inst_31372);
var inst_31378__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31377);
var inst_31379 = cljs.core.first.call(null,inst_31377);
var inst_31380 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31378__$1,opts);
var state_31408__$1 = (function (){var statearr_31421 = state_31408;
(statearr_31421[(9)] = inst_31378__$1);

(statearr_31421[(8)] = inst_31379);

return statearr_31421;
})();
if(cljs.core.truth_(inst_31380)){
var statearr_31422_31445 = state_31408__$1;
(statearr_31422_31445[(1)] = (8));

} else {
var statearr_31423_31446 = state_31408__$1;
(statearr_31423_31446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (14))){
var inst_31398 = (state_31408[(2)]);
var state_31408__$1 = state_31408;
var statearr_31424_31447 = state_31408__$1;
(statearr_31424_31447[(2)] = inst_31398);

(statearr_31424_31447[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (10))){
var inst_31400 = (state_31408[(2)]);
var state_31408__$1 = (function (){var statearr_31425 = state_31408;
(statearr_31425[(10)] = inst_31400);

return statearr_31425;
})();
var statearr_31426_31448 = state_31408__$1;
(statearr_31426_31448[(2)] = null);

(statearr_31426_31448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31409 === (8))){
var inst_31379 = (state_31408[(8)]);
var inst_31382 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31383 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31379);
var inst_31384 = cljs.core.async.timeout.call(null,(1000));
var inst_31385 = [inst_31383,inst_31384];
var inst_31386 = (new cljs.core.PersistentVector(null,2,(5),inst_31382,inst_31385,null));
var state_31408__$1 = state_31408;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31408__$1,(11),inst_31386);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto___31434,ch))
;
return ((function (switch__10226__auto__,c__10282__auto___31434,ch){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_31430 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31430[(0)] = state_machine__10227__auto__);

(statearr_31430[(1)] = (1));

return statearr_31430;
});
var state_machine__10227__auto____1 = (function (state_31408){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_31408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e31431){if((e31431 instanceof Object)){
var ex__10230__auto__ = e31431;
var statearr_31432_31449 = state_31408;
(statearr_31432_31449[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31450 = state_31408;
state_31408 = G__31450;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_31408){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_31408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___31434,ch))
})();
var state__10284__auto__ = (function (){var statearr_31433 = f__10283__auto__.call(null);
(statearr_31433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___31434);

return statearr_31433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___31434,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__31451_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31451_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_31456 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31457 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31456,_STAR_print_newline_STAR_31457){
return (function() { 
var G__31458__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31458 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31459__i = 0, G__31459__a = new Array(arguments.length -  0);
while (G__31459__i < G__31459__a.length) {G__31459__a[G__31459__i] = arguments[G__31459__i + 0]; ++G__31459__i;}
  args = new cljs.core.IndexedSeq(G__31459__a,0);
} 
return G__31458__delegate.call(this,args);};
G__31458.cljs$lang$maxFixedArity = 0;
G__31458.cljs$lang$applyTo = (function (arglist__31460){
var args = cljs.core.seq(arglist__31460);
return G__31458__delegate(args);
});
G__31458.cljs$core$IFn$_invoke$arity$variadic = G__31458__delegate;
return G__31458;
})()
;})(_STAR_print_fn_STAR_31456,_STAR_print_newline_STAR_31457))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31457;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31456;
}}catch (e31455){if((e31455 instanceof Error)){
var e = e31455;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e31455;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
* The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
*/
figwheel.client.ensure_cljs_user = (function ensure_cljs_user(){
if(cljs.core.truth_(cljs)){
} else {
cljs = {};
}

if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function repl_plugin(p__31461){
var map__31466 = p__31461;
var map__31466__$1 = ((cljs.core.seq_QMARK_.call(null,map__31466))?cljs.core.apply.call(null,cljs.core.hash_map,map__31466):map__31466);
var opts = map__31466__$1;
var build_id = cljs.core.get.call(null,map__31466__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31466,map__31466__$1,opts,build_id){
return (function (p__31467){
var vec__31468 = p__31467;
var map__31469 = cljs.core.nth.call(null,vec__31468,(0),null);
var map__31469__$1 = ((cljs.core.seq_QMARK_.call(null,map__31469))?cljs.core.apply.call(null,cljs.core.hash_map,map__31469):map__31469);
var msg = map__31469__$1;
var msg_name = cljs.core.get.call(null,map__31469__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31468,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__31468,map__31469,map__31469__$1,msg,msg_name,_,map__31466,map__31466__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31468,map__31469,map__31469__$1,msg,msg_name,_,map__31466,map__31466__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31466,map__31466__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__31473){
var vec__31474 = p__31473;
var map__31475 = cljs.core.nth.call(null,vec__31474,(0),null);
var map__31475__$1 = ((cljs.core.seq_QMARK_.call(null,map__31475))?cljs.core.apply.call(null,cljs.core.hash_map,map__31475):map__31475);
var msg = map__31475__$1;
var msg_name = cljs.core.get.call(null,map__31475__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31474,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__31476){
var map__31484 = p__31476;
var map__31484__$1 = ((cljs.core.seq_QMARK_.call(null,map__31484))?cljs.core.apply.call(null,cljs.core.hash_map,map__31484):map__31484);
var on_compile_fail = cljs.core.get.call(null,map__31484__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__31484__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__31484,map__31484__$1,on_compile_fail,on_compile_warning){
return (function (p__31485){
var vec__31486 = p__31485;
var map__31487 = cljs.core.nth.call(null,vec__31486,(0),null);
var map__31487__$1 = ((cljs.core.seq_QMARK_.call(null,map__31487))?cljs.core.apply.call(null,cljs.core.hash_map,map__31487):map__31487);
var msg = map__31487__$1;
var msg_name = cljs.core.get.call(null,map__31487__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31486,(1));
var pred__31488 = cljs.core._EQ_;
var expr__31489 = msg_name;
if(cljs.core.truth_(pred__31488.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31489))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31488.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31489))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31484,map__31484__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__10282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__,msg_hist,msg_names,msg){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto__,msg_hist,msg_names,msg){
return (function (state_31666){
var state_val_31667 = (state_31666[(1)]);
if((state_val_31667 === (7))){
var inst_31615 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31666__$1 = state_31666;
if(inst_31615){
var statearr_31668_31705 = state_31666__$1;
(statearr_31668_31705[(1)] = (11));

} else {
var statearr_31669_31706 = state_31666__$1;
(statearr_31669_31706[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (20))){
var inst_31656 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31670_31707 = state_31666__$1;
(statearr_31670_31707[(2)] = inst_31656);

(statearr_31670_31707[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (27))){
var inst_31647 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31666__$1 = state_31666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31666__$1,(30),inst_31647);
} else {
if((state_val_31667 === (1))){
var inst_31598 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31666__$1 = state_31666;
if(cljs.core.truth_(inst_31598)){
var statearr_31671_31708 = state_31666__$1;
(statearr_31671_31708[(1)] = (2));

} else {
var statearr_31672_31709 = state_31666__$1;
(statearr_31672_31709[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (24))){
var inst_31645 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31666__$1 = state_31666;
if(inst_31645){
var statearr_31673_31710 = state_31666__$1;
(statearr_31673_31710[(1)] = (27));

} else {
var statearr_31674_31711 = state_31666__$1;
(statearr_31674_31711[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (4))){
var inst_31664 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31666__$1,inst_31664);
} else {
if((state_val_31667 === (15))){
var inst_31625 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31626 = figwheel.client.heads_up.append_message.call(null,inst_31625);
var state_31666__$1 = state_31666;
var statearr_31675_31712 = state_31666__$1;
(statearr_31675_31712[(2)] = inst_31626);

(statearr_31675_31712[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (21))){
var inst_31632 = (state_31666[(2)]);
var inst_31633 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31634 = figwheel.client.heads_up.display_warning.call(null,inst_31633);
var state_31666__$1 = (function (){var statearr_31676 = state_31666;
(statearr_31676[(7)] = inst_31632);

return statearr_31676;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31666__$1,(22),inst_31634);
} else {
if((state_val_31667 === (13))){
var inst_31660 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31677_31713 = state_31666__$1;
(statearr_31677_31713[(2)] = inst_31660);

(statearr_31677_31713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (22))){
var inst_31636 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31678_31714 = state_31666__$1;
(statearr_31678_31714[(2)] = inst_31636);

(statearr_31678_31714[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (29))){
var inst_31652 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31679_31715 = state_31666__$1;
(statearr_31679_31715[(2)] = inst_31652);

(statearr_31679_31715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (6))){
var inst_31606 = figwheel.client.heads_up.clear.call(null);
var state_31666__$1 = state_31666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31666__$1,(9),inst_31606);
} else {
if((state_val_31667 === (28))){
var state_31666__$1 = state_31666;
var statearr_31680_31716 = state_31666__$1;
(statearr_31680_31716[(2)] = null);

(statearr_31680_31716[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (25))){
var inst_31654 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31681_31717 = state_31666__$1;
(statearr_31681_31717[(2)] = inst_31654);

(statearr_31681_31717[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (17))){
var inst_31658 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31682_31718 = state_31666__$1;
(statearr_31682_31718[(2)] = inst_31658);

(statearr_31682_31718[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (3))){
var inst_31604 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31666__$1 = state_31666;
if(inst_31604){
var statearr_31683_31719 = state_31666__$1;
(statearr_31683_31719[(1)] = (6));

} else {
var statearr_31684_31720 = state_31666__$1;
(statearr_31684_31720[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (12))){
var inst_31623 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31666__$1 = state_31666;
if(inst_31623){
var statearr_31685_31721 = state_31666__$1;
(statearr_31685_31721[(1)] = (15));

} else {
var statearr_31686_31722 = state_31666__$1;
(statearr_31686_31722[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (2))){
var inst_31600 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31666__$1 = state_31666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31666__$1,(5),inst_31600);
} else {
if((state_val_31667 === (23))){
var inst_31640 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31641 = figwheel.client.heads_up.display_warning.call(null,inst_31640);
var state_31666__$1 = state_31666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31666__$1,(26),inst_31641);
} else {
if((state_val_31667 === (19))){
var inst_31638 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31666__$1 = state_31666;
if(inst_31638){
var statearr_31687_31723 = state_31666__$1;
(statearr_31687_31723[(1)] = (23));

} else {
var statearr_31688_31724 = state_31666__$1;
(statearr_31688_31724[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (11))){
var inst_31617 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31618 = figwheel.client.format_messages.call(null,inst_31617);
var inst_31619 = figwheel.client.heads_up.display_error.call(null,inst_31618);
var state_31666__$1 = state_31666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31666__$1,(14),inst_31619);
} else {
if((state_val_31667 === (9))){
var inst_31608 = (state_31666[(2)]);
var inst_31609 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31610 = figwheel.client.format_messages.call(null,inst_31609);
var inst_31611 = figwheel.client.heads_up.display_error.call(null,inst_31610);
var state_31666__$1 = (function (){var statearr_31689 = state_31666;
(statearr_31689[(8)] = inst_31608);

return statearr_31689;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31666__$1,(10),inst_31611);
} else {
if((state_val_31667 === (5))){
var inst_31602 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31690_31725 = state_31666__$1;
(statearr_31690_31725[(2)] = inst_31602);

(statearr_31690_31725[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (14))){
var inst_31621 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31691_31726 = state_31666__$1;
(statearr_31691_31726[(2)] = inst_31621);

(statearr_31691_31726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (26))){
var inst_31643 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31692_31727 = state_31666__$1;
(statearr_31692_31727[(2)] = inst_31643);

(statearr_31692_31727[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (16))){
var inst_31628 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31666__$1 = state_31666;
if(inst_31628){
var statearr_31693_31728 = state_31666__$1;
(statearr_31693_31728[(1)] = (18));

} else {
var statearr_31694_31729 = state_31666__$1;
(statearr_31694_31729[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (30))){
var inst_31649 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31695_31730 = state_31666__$1;
(statearr_31695_31730[(2)] = inst_31649);

(statearr_31695_31730[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (10))){
var inst_31613 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31696_31731 = state_31666__$1;
(statearr_31696_31731[(2)] = inst_31613);

(statearr_31696_31731[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31667 === (18))){
var inst_31630 = figwheel.client.heads_up.clear.call(null);
var state_31666__$1 = state_31666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31666__$1,(21),inst_31630);
} else {
if((state_val_31667 === (8))){
var inst_31662 = (state_31666[(2)]);
var state_31666__$1 = state_31666;
var statearr_31697_31732 = state_31666__$1;
(statearr_31697_31732[(2)] = inst_31662);

(statearr_31697_31732[(1)] = (4));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__10226__auto__,c__10282__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_31701 = [null,null,null,null,null,null,null,null,null];
(statearr_31701[(0)] = state_machine__10227__auto__);

(statearr_31701[(1)] = (1));

return statearr_31701;
});
var state_machine__10227__auto____1 = (function (state_31666){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_31666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e31702){if((e31702 instanceof Object)){
var ex__10230__auto__ = e31702;
var statearr_31703_31733 = state_31666;
(statearr_31703_31733[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31734 = state_31666;
state_31666 = G__31734;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_31666){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_31666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto__,msg_hist,msg_names,msg))
})();
var state__10284__auto__ = (function (){var statearr_31704 = f__10283__auto__.call(null);
(statearr_31704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);

return statearr_31704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__,msg_hist,msg_names,msg))
);

return c__10282__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__10282__auto___31797 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___31797,ch){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___31797,ch){
return (function (state_31780){
var state_val_31781 = (state_31780[(1)]);
if((state_val_31781 === (8))){
var inst_31772 = (state_31780[(2)]);
var state_31780__$1 = (function (){var statearr_31782 = state_31780;
(statearr_31782[(7)] = inst_31772);

return statearr_31782;
})();
var statearr_31783_31798 = state_31780__$1;
(statearr_31783_31798[(2)] = null);

(statearr_31783_31798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (7))){
var inst_31776 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
var statearr_31784_31799 = state_31780__$1;
(statearr_31784_31799[(2)] = inst_31776);

(statearr_31784_31799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (6))){
var state_31780__$1 = state_31780;
var statearr_31785_31800 = state_31780__$1;
(statearr_31785_31800[(2)] = null);

(statearr_31785_31800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (5))){
var inst_31768 = (state_31780[(8)]);
var inst_31770 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31768);
var state_31780__$1 = state_31780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31780__$1,(8),inst_31770);
} else {
if((state_val_31781 === (4))){
var inst_31768 = (state_31780[(8)]);
var inst_31768__$1 = (state_31780[(2)]);
var state_31780__$1 = (function (){var statearr_31786 = state_31780;
(statearr_31786[(8)] = inst_31768__$1);

return statearr_31786;
})();
if(cljs.core.truth_(inst_31768__$1)){
var statearr_31787_31801 = state_31780__$1;
(statearr_31787_31801[(1)] = (5));

} else {
var statearr_31788_31802 = state_31780__$1;
(statearr_31788_31802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31781 === (3))){
var inst_31778 = (state_31780[(2)]);
var state_31780__$1 = state_31780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31780__$1,inst_31778);
} else {
if((state_val_31781 === (2))){
var state_31780__$1 = state_31780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31780__$1,(4),ch);
} else {
if((state_val_31781 === (1))){
var state_31780__$1 = state_31780;
var statearr_31789_31803 = state_31780__$1;
(statearr_31789_31803[(2)] = null);

(statearr_31789_31803[(1)] = (2));


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
}
});})(c__10282__auto___31797,ch))
;
return ((function (switch__10226__auto__,c__10282__auto___31797,ch){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_31793 = [null,null,null,null,null,null,null,null,null];
(statearr_31793[(0)] = state_machine__10227__auto__);

(statearr_31793[(1)] = (1));

return statearr_31793;
});
var state_machine__10227__auto____1 = (function (state_31780){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_31780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e31794){if((e31794 instanceof Object)){
var ex__10230__auto__ = e31794;
var statearr_31795_31804 = state_31780;
(statearr_31795_31804[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31805 = state_31780;
state_31780 = G__31805;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_31780){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_31780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___31797,ch))
})();
var state__10284__auto__ = (function (){var statearr_31796 = f__10283__auto__.call(null);
(statearr_31796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___31797);

return statearr_31796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___31797,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__10282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto__){
return (function (state_31826){
var state_val_31827 = (state_31826[(1)]);
if((state_val_31827 === (2))){
var inst_31823 = (state_31826[(2)]);
var inst_31824 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31826__$1 = (function (){var statearr_31828 = state_31826;
(statearr_31828[(7)] = inst_31823);

return statearr_31828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31826__$1,inst_31824);
} else {
if((state_val_31827 === (1))){
var inst_31821 = cljs.core.async.timeout.call(null,(3000));
var state_31826__$1 = state_31826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31826__$1,(2),inst_31821);
} else {
return null;
}
}
});})(c__10282__auto__))
;
return ((function (switch__10226__auto__,c__10282__auto__){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_31832 = [null,null,null,null,null,null,null,null];
(statearr_31832[(0)] = state_machine__10227__auto__);

(statearr_31832[(1)] = (1));

return statearr_31832;
});
var state_machine__10227__auto____1 = (function (state_31826){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_31826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e31833){if((e31833 instanceof Object)){
var ex__10230__auto__ = e31833;
var statearr_31834_31836 = state_31826;
(statearr_31834_31836[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31837 = state_31826;
state_31826 = G__31837;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_31826){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_31826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto__))
})();
var state__10284__auto__ = (function (){var statearr_31835 = f__10283__auto__.call(null);
(statearr_31835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);

return statearr_31835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__))
);

return c__10282__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__7492__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__7492__auto__)){
return ("CustomEvent" in window);
} else {
return and__7492__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31841 = {"detail":url};
return obj31841;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31842){
var map__31848 = p__31842;
var map__31848__$1 = ((cljs.core.seq_QMARK_.call(null,map__31848))?cljs.core.apply.call(null,cljs.core.hash_map,map__31848):map__31848);
var ed = map__31848__$1;
var exception_data = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__31848__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31849_31853 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31850_31854 = null;
var count__31851_31855 = (0);
var i__31852_31856 = (0);
while(true){
if((i__31852_31856 < count__31851_31855)){
var msg_31857 = cljs.core._nth.call(null,chunk__31850_31854,i__31852_31856);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31857);

var G__31858 = seq__31849_31853;
var G__31859 = chunk__31850_31854;
var G__31860 = count__31851_31855;
var G__31861 = (i__31852_31856 + (1));
seq__31849_31853 = G__31858;
chunk__31850_31854 = G__31859;
count__31851_31855 = G__31860;
i__31852_31856 = G__31861;
continue;
} else {
var temp__4126__auto___31862 = cljs.core.seq.call(null,seq__31849_31853);
if(temp__4126__auto___31862){
var seq__31849_31863__$1 = temp__4126__auto___31862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31849_31863__$1)){
var c__8291__auto___31864 = cljs.core.chunk_first.call(null,seq__31849_31863__$1);
var G__31865 = cljs.core.chunk_rest.call(null,seq__31849_31863__$1);
var G__31866 = c__8291__auto___31864;
var G__31867 = cljs.core.count.call(null,c__8291__auto___31864);
var G__31868 = (0);
seq__31849_31853 = G__31865;
chunk__31850_31854 = G__31866;
count__31851_31855 = G__31867;
i__31852_31856 = G__31868;
continue;
} else {
var msg_31869 = cljs.core.first.call(null,seq__31849_31863__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31869);

var G__31870 = cljs.core.next.call(null,seq__31849_31863__$1);
var G__31871 = null;
var G__31872 = (0);
var G__31873 = (0);
seq__31849_31853 = G__31870;
chunk__31850_31854 = G__31871;
count__31851_31855 = G__31872;
i__31852_31856 = G__31873;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__31874){
var map__31876 = p__31874;
var map__31876__$1 = ((cljs.core.seq_QMARK_.call(null,map__31876))?cljs.core.apply.call(null,cljs.core.hash_map,map__31876):map__31876);
var w = map__31876__$1;
var message = cljs.core.get.call(null,map__31876__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
if(cljs.core.truth_((function (){var and__7492__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__7492__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__7492__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$1;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__31883 = cljs.core.seq.call(null,plugins);
var chunk__31884 = null;
var count__31885 = (0);
var i__31886 = (0);
while(true){
if((i__31886 < count__31885)){
var vec__31887 = cljs.core._nth.call(null,chunk__31884,i__31886);
var k = cljs.core.nth.call(null,vec__31887,(0),null);
var plugin = cljs.core.nth.call(null,vec__31887,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31889 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31883,chunk__31884,count__31885,i__31886,pl_31889,vec__31887,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31889.call(null,msg_hist);
});})(seq__31883,chunk__31884,count__31885,i__31886,pl_31889,vec__31887,k,plugin))
);
} else {
}

var G__31890 = seq__31883;
var G__31891 = chunk__31884;
var G__31892 = count__31885;
var G__31893 = (i__31886 + (1));
seq__31883 = G__31890;
chunk__31884 = G__31891;
count__31885 = G__31892;
i__31886 = G__31893;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31883);
if(temp__4126__auto__){
var seq__31883__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31883__$1)){
var c__8291__auto__ = cljs.core.chunk_first.call(null,seq__31883__$1);
var G__31894 = cljs.core.chunk_rest.call(null,seq__31883__$1);
var G__31895 = c__8291__auto__;
var G__31896 = cljs.core.count.call(null,c__8291__auto__);
var G__31897 = (0);
seq__31883 = G__31894;
chunk__31884 = G__31895;
count__31885 = G__31896;
i__31886 = G__31897;
continue;
} else {
var vec__31888 = cljs.core.first.call(null,seq__31883__$1);
var k = cljs.core.nth.call(null,vec__31888,(0),null);
var plugin = cljs.core.nth.call(null,vec__31888,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31898 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31883,chunk__31884,count__31885,i__31886,pl_31898,vec__31888,k,plugin,seq__31883__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31898.call(null,msg_hist);
});})(seq__31883,chunk__31884,count__31885,i__31886,pl_31898,vec__31888,k,plugin,seq__31883__$1,temp__4126__auto__))
);
} else {
}

var G__31899 = cljs.core.next.call(null,seq__31883__$1);
var G__31900 = null;
var G__31901 = (0);
var G__31902 = (0);
seq__31883 = G__31899;
chunk__31884 = G__31900;
count__31885 = G__31901;
i__31886 = G__31902;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__31903){
var map__31905 = p__31903;
var map__31905__$1 = ((cljs.core.seq_QMARK_.call(null,map__31905))?cljs.core.apply.call(null,cljs.core.hash_map,map__31905):map__31905);
var opts = map__31905__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31903 = null;
if (arguments.length > 0) {
var G__31906__i = 0, G__31906__a = new Array(arguments.length -  0);
while (G__31906__i < G__31906__a.length) {G__31906__a[G__31906__i] = arguments[G__31906__i + 0]; ++G__31906__i;}
  p__31903 = new cljs.core.IndexedSeq(G__31906__a,0);
} 
return watch_and_reload__delegate.call(this,p__31903);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31907){
var p__31903 = cljs.core.seq(arglist__31907);
return watch_and_reload__delegate(p__31903);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;
