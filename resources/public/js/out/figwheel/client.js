// Compiled by ClojureScript 0.0-2727 {}
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
var G__22581__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22582__i = 0, G__22582__a = new Array(arguments.length -  0);
while (G__22582__i < G__22582__a.length) {G__22582__a[G__22582__i] = arguments[G__22582__i + 0]; ++G__22582__i;}
  args = new cljs.core.IndexedSeq(G__22582__a,0);
} 
return G__22581__delegate.call(this,args);};
G__22581.cljs$lang$maxFixedArity = 0;
G__22581.cljs$lang$applyTo = (function (arglist__22583){
var args = cljs.core.seq(arglist__22583);
return G__22581__delegate(args);
});
G__22581.cljs$core$IFn$_invoke$arity$variadic = G__22581__delegate;
return G__22581;
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
figwheel.client.error_msg_format = (function error_msg_format(p__22584){
var map__22586 = p__22584;
var map__22586__$1 = ((cljs.core.seq_QMARK_.call(null,map__22586))?cljs.core.apply.call(null,cljs.core.hash_map,map__22586):map__22586);
var class$ = cljs.core.get.call(null,map__22586__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__22586__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__3772__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__3760__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3760__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3760__auto__;
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
var c__6550__auto___22715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___22715,ch){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___22715,ch){
return (function (state_22689){
var state_val_22690 = (state_22689[(1)]);
if((state_val_22690 === (7))){
var inst_22685 = (state_22689[(2)]);
var state_22689__$1 = state_22689;
var statearr_22691_22716 = state_22689__$1;
(statearr_22691_22716[(2)] = inst_22685);

(statearr_22691_22716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22690 === (1))){
var state_22689__$1 = state_22689;
var statearr_22692_22717 = state_22689__$1;
(statearr_22692_22717[(2)] = null);

(statearr_22692_22717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22690 === (4))){
var inst_22653 = (state_22689[(7)]);
var inst_22653__$1 = (state_22689[(2)]);
var state_22689__$1 = (function (){var statearr_22693 = state_22689;
(statearr_22693[(7)] = inst_22653__$1);

return statearr_22693;
})();
if(cljs.core.truth_(inst_22653__$1)){
var statearr_22694_22718 = state_22689__$1;
(statearr_22694_22718[(1)] = (5));

} else {
var statearr_22695_22719 = state_22689__$1;
(statearr_22695_22719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22690 === (13))){
var state_22689__$1 = state_22689;
var statearr_22696_22720 = state_22689__$1;
(statearr_22696_22720[(2)] = null);

(statearr_22696_22720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22690 === (6))){
var state_22689__$1 = state_22689;
var statearr_22697_22721 = state_22689__$1;
(statearr_22697_22721[(2)] = null);

(statearr_22697_22721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22690 === (3))){
var inst_22687 = (state_22689[(2)]);
var state_22689__$1 = state_22689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22689__$1,inst_22687);
} else {
if((state_val_22690 === (12))){
var inst_22660 = (state_22689[(8)]);
var inst_22673 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_22660);
var inst_22674 = cljs.core.first.call(null,inst_22673);
var inst_22675 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_22674);
var inst_22676 = console.warn("Figwheel: Not loading code with warnings - ",inst_22675);
var state_22689__$1 = state_22689;
var statearr_22698_22722 = state_22689__$1;
(statearr_22698_22722[(2)] = inst_22676);

(statearr_22698_22722[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22690 === (2))){
var state_22689__$1 = state_22689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22689__$1,(4),ch);
} else {
if((state_val_22690 === (11))){
var inst_22669 = (state_22689[(2)]);
var state_22689__$1 = state_22689;
var statearr_22699_22723 = state_22689__$1;
(statearr_22699_22723[(2)] = inst_22669);

(statearr_22699_22723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22690 === (9))){
var inst_22659 = (state_22689[(9)]);
var inst_22671 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_22659,opts);
var state_22689__$1 = state_22689;
if(inst_22671){
var statearr_22700_22724 = state_22689__$1;
(statearr_22700_22724[(1)] = (12));

} else {
var statearr_22701_22725 = state_22689__$1;
(statearr_22701_22725[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22690 === (5))){
var inst_22659 = (state_22689[(9)]);
var inst_22653 = (state_22689[(7)]);
var inst_22655 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_22656 = (new cljs.core.PersistentArrayMap(null,2,inst_22655,null));
var inst_22657 = (new cljs.core.PersistentHashSet(null,inst_22656,null));
var inst_22658 = figwheel.client.focus_msgs.call(null,inst_22657,inst_22653);
var inst_22659__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_22658);
var inst_22660 = cljs.core.first.call(null,inst_22658);
var inst_22661 = figwheel.client.reload_file_state_QMARK_.call(null,inst_22659__$1,opts);
var state_22689__$1 = (function (){var statearr_22702 = state_22689;
(statearr_22702[(9)] = inst_22659__$1);

(statearr_22702[(8)] = inst_22660);

return statearr_22702;
})();
if(cljs.core.truth_(inst_22661)){
var statearr_22703_22726 = state_22689__$1;
(statearr_22703_22726[(1)] = (8));

} else {
var statearr_22704_22727 = state_22689__$1;
(statearr_22704_22727[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22690 === (14))){
var inst_22679 = (state_22689[(2)]);
var state_22689__$1 = state_22689;
var statearr_22705_22728 = state_22689__$1;
(statearr_22705_22728[(2)] = inst_22679);

(statearr_22705_22728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22690 === (10))){
var inst_22681 = (state_22689[(2)]);
var state_22689__$1 = (function (){var statearr_22706 = state_22689;
(statearr_22706[(10)] = inst_22681);

return statearr_22706;
})();
var statearr_22707_22729 = state_22689__$1;
(statearr_22707_22729[(2)] = null);

(statearr_22707_22729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22690 === (8))){
var inst_22660 = (state_22689[(8)]);
var inst_22663 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22664 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_22660);
var inst_22665 = cljs.core.async.timeout.call(null,(1000));
var inst_22666 = [inst_22664,inst_22665];
var inst_22667 = (new cljs.core.PersistentVector(null,2,(5),inst_22663,inst_22666,null));
var state_22689__$1 = state_22689;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22689__$1,(11),inst_22667);
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
});})(c__6550__auto___22715,ch))
;
return ((function (switch__6494__auto__,c__6550__auto___22715,ch){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_22711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22711[(0)] = state_machine__6495__auto__);

(statearr_22711[(1)] = (1));

return statearr_22711;
});
var state_machine__6495__auto____1 = (function (state_22689){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_22689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e22712){if((e22712 instanceof Object)){
var ex__6498__auto__ = e22712;
var statearr_22713_22730 = state_22689;
(statearr_22713_22730[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22731 = state_22689;
state_22689 = G__22731;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_22689){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_22689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___22715,ch))
})();
var state__6552__auto__ = (function (){var statearr_22714 = f__6551__auto__.call(null);
(statearr_22714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___22715);

return statearr_22714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___22715,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function truncate_stack_trace(stack_str){
return clojure.string.join.call(null,"\n",cljs.core.take_while.call(null,(function (p1__22732_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__22732_SHARP_));
}),clojure.string.split_lines.call(null,stack_str)));
});
figwheel.client.eval_javascript_STAR__STAR_ = (function eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_22737 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_22738 = cljs.core._STAR_print_newline_STAR_;
try{cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_22737,_STAR_print_newline_STAR_22738){
return (function() { 
var G__22739__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__22739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22740__i = 0, G__22740__a = new Array(arguments.length -  0);
while (G__22740__i < G__22740__a.length) {G__22740__a[G__22740__i] = arguments[G__22740__i + 0]; ++G__22740__i;}
  args = new cljs.core.IndexedSeq(G__22740__a,0);
} 
return G__22739__delegate.call(this,args);};
G__22739.cljs$lang$maxFixedArity = 0;
G__22739.cljs$lang$applyTo = (function (arglist__22741){
var args = cljs.core.seq(arglist__22741);
return G__22739__delegate(args);
});
G__22739.cljs$core$IFn$_invoke$arity$variadic = G__22739__delegate;
return G__22739;
})()
;})(_STAR_print_fn_STAR_22737,_STAR_print_newline_STAR_22738))
;

cljs.core._STAR_print_newline_STAR_ = false;

return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_22738;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_22737;
}}catch (e22736){if((e22736 instanceof Error)){
var e = e22736;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),(cljs.core.truth_(e.hasOwnProperty("stack"))?figwheel.client.truncate_stack_trace.call(null,e.stack):"No stacktrace available.")], null));
} else {
var e = e22736;
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
figwheel.client.repl_plugin = (function repl_plugin(p__22742){
var map__22747 = p__22742;
var map__22747__$1 = ((cljs.core.seq_QMARK_.call(null,map__22747))?cljs.core.apply.call(null,cljs.core.hash_map,map__22747):map__22747);
var opts = map__22747__$1;
var build_id = cljs.core.get.call(null,map__22747__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__22747,map__22747__$1,opts,build_id){
return (function (p__22748){
var vec__22749 = p__22748;
var map__22750 = cljs.core.nth.call(null,vec__22749,(0),null);
var map__22750__$1 = ((cljs.core.seq_QMARK_.call(null,map__22750))?cljs.core.apply.call(null,cljs.core.hash_map,map__22750):map__22750);
var msg = map__22750__$1;
var msg_name = cljs.core.get.call(null,map__22750__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22749,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__22749,map__22750,map__22750__$1,msg,msg_name,_,map__22747,map__22747__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__22749,map__22750,map__22750__$1,msg,msg_name,_,map__22747,map__22747__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__22747,map__22747__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__22754){
var vec__22755 = p__22754;
var map__22756 = cljs.core.nth.call(null,vec__22755,(0),null);
var map__22756__$1 = ((cljs.core.seq_QMARK_.call(null,map__22756))?cljs.core.apply.call(null,cljs.core.hash_map,map__22756):map__22756);
var msg = map__22756__$1;
var msg_name = cljs.core.get.call(null,map__22756__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22755,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__22757){
var map__22765 = p__22757;
var map__22765__$1 = ((cljs.core.seq_QMARK_.call(null,map__22765))?cljs.core.apply.call(null,cljs.core.hash_map,map__22765):map__22765);
var on_compile_fail = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__22765__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__22765,map__22765__$1,on_compile_fail,on_compile_warning){
return (function (p__22766){
var vec__22767 = p__22766;
var map__22768 = cljs.core.nth.call(null,vec__22767,(0),null);
var map__22768__$1 = ((cljs.core.seq_QMARK_.call(null,map__22768))?cljs.core.apply.call(null,cljs.core.hash_map,map__22768):map__22768);
var msg = map__22768__$1;
var msg_name = cljs.core.get.call(null,map__22768__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__22767,(1));
var pred__22769 = cljs.core._EQ_;
var expr__22770 = msg_name;
if(cljs.core.truth_(pred__22769.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__22770))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__22769.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__22770))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__22765,map__22765__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__6550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto__,msg_hist,msg_names,msg){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto__,msg_hist,msg_names,msg){
return (function (state_22947){
var state_val_22948 = (state_22947[(1)]);
if((state_val_22948 === (7))){
var inst_22896 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_22947__$1 = state_22947;
if(inst_22896){
var statearr_22949_22986 = state_22947__$1;
(statearr_22949_22986[(1)] = (11));

} else {
var statearr_22950_22987 = state_22947__$1;
(statearr_22950_22987[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (20))){
var inst_22937 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
var statearr_22951_22988 = state_22947__$1;
(statearr_22951_22988[(2)] = inst_22937);

(statearr_22951_22988[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (27))){
var inst_22928 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22947__$1 = state_22947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22947__$1,(30),inst_22928);
} else {
if((state_val_22948 === (1))){
var inst_22879 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_22947__$1 = state_22947;
if(cljs.core.truth_(inst_22879)){
var statearr_22952_22989 = state_22947__$1;
(statearr_22952_22989[(1)] = (2));

} else {
var statearr_22953_22990 = state_22947__$1;
(statearr_22953_22990[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (24))){
var inst_22926 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_22947__$1 = state_22947;
if(inst_22926){
var statearr_22954_22991 = state_22947__$1;
(statearr_22954_22991[(1)] = (27));

} else {
var statearr_22955_22992 = state_22947__$1;
(statearr_22955_22992[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (4))){
var inst_22945 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22947__$1,inst_22945);
} else {
if((state_val_22948 === (15))){
var inst_22906 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22907 = figwheel.client.heads_up.append_message.call(null,inst_22906);
var state_22947__$1 = state_22947;
var statearr_22956_22993 = state_22947__$1;
(statearr_22956_22993[(2)] = inst_22907);

(statearr_22956_22993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (21))){
var inst_22913 = (state_22947[(2)]);
var inst_22914 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22915 = figwheel.client.heads_up.display_warning.call(null,inst_22914);
var state_22947__$1 = (function (){var statearr_22957 = state_22947;
(statearr_22957[(7)] = inst_22913);

return statearr_22957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22947__$1,(22),inst_22915);
} else {
if((state_val_22948 === (13))){
var inst_22941 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
var statearr_22958_22994 = state_22947__$1;
(statearr_22958_22994[(2)] = inst_22941);

(statearr_22958_22994[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (22))){
var inst_22917 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
var statearr_22959_22995 = state_22947__$1;
(statearr_22959_22995[(2)] = inst_22917);

(statearr_22959_22995[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (29))){
var inst_22933 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
var statearr_22960_22996 = state_22947__$1;
(statearr_22960_22996[(2)] = inst_22933);

(statearr_22960_22996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (6))){
var inst_22887 = figwheel.client.heads_up.clear.call(null);
var state_22947__$1 = state_22947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22947__$1,(9),inst_22887);
} else {
if((state_val_22948 === (28))){
var state_22947__$1 = state_22947;
var statearr_22961_22997 = state_22947__$1;
(statearr_22961_22997[(2)] = null);

(statearr_22961_22997[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (25))){
var inst_22935 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
var statearr_22962_22998 = state_22947__$1;
(statearr_22962_22998[(2)] = inst_22935);

(statearr_22962_22998[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (17))){
var inst_22939 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
var statearr_22963_22999 = state_22947__$1;
(statearr_22963_22999[(2)] = inst_22939);

(statearr_22963_22999[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (3))){
var inst_22885 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_22947__$1 = state_22947;
if(inst_22885){
var statearr_22964_23000 = state_22947__$1;
(statearr_22964_23000[(1)] = (6));

} else {
var statearr_22965_23001 = state_22947__$1;
(statearr_22965_23001[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (12))){
var inst_22904 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_22947__$1 = state_22947;
if(inst_22904){
var statearr_22966_23002 = state_22947__$1;
(statearr_22966_23002[(1)] = (15));

} else {
var statearr_22967_23003 = state_22947__$1;
(statearr_22967_23003[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (2))){
var inst_22881 = figwheel.client.heads_up.flash_loaded.call(null);
var state_22947__$1 = state_22947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22947__$1,(5),inst_22881);
} else {
if((state_val_22948 === (23))){
var inst_22921 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22922 = figwheel.client.heads_up.display_warning.call(null,inst_22921);
var state_22947__$1 = state_22947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22947__$1,(26),inst_22922);
} else {
if((state_val_22948 === (19))){
var inst_22919 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_22947__$1 = state_22947;
if(inst_22919){
var statearr_22968_23004 = state_22947__$1;
(statearr_22968_23004[(1)] = (23));

} else {
var statearr_22969_23005 = state_22947__$1;
(statearr_22969_23005[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (11))){
var inst_22898 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22899 = figwheel.client.format_messages.call(null,inst_22898);
var inst_22900 = figwheel.client.heads_up.display_error.call(null,inst_22899);
var state_22947__$1 = state_22947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22947__$1,(14),inst_22900);
} else {
if((state_val_22948 === (9))){
var inst_22889 = (state_22947[(2)]);
var inst_22890 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_22891 = figwheel.client.format_messages.call(null,inst_22890);
var inst_22892 = figwheel.client.heads_up.display_error.call(null,inst_22891);
var state_22947__$1 = (function (){var statearr_22970 = state_22947;
(statearr_22970[(8)] = inst_22889);

return statearr_22970;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22947__$1,(10),inst_22892);
} else {
if((state_val_22948 === (5))){
var inst_22883 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
var statearr_22971_23006 = state_22947__$1;
(statearr_22971_23006[(2)] = inst_22883);

(statearr_22971_23006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (14))){
var inst_22902 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
var statearr_22972_23007 = state_22947__$1;
(statearr_22972_23007[(2)] = inst_22902);

(statearr_22972_23007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (26))){
var inst_22924 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
var statearr_22973_23008 = state_22947__$1;
(statearr_22973_23008[(2)] = inst_22924);

(statearr_22973_23008[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (16))){
var inst_22909 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_22947__$1 = state_22947;
if(inst_22909){
var statearr_22974_23009 = state_22947__$1;
(statearr_22974_23009[(1)] = (18));

} else {
var statearr_22975_23010 = state_22947__$1;
(statearr_22975_23010[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (30))){
var inst_22930 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
var statearr_22976_23011 = state_22947__$1;
(statearr_22976_23011[(2)] = inst_22930);

(statearr_22976_23011[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (10))){
var inst_22894 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
var statearr_22977_23012 = state_22947__$1;
(statearr_22977_23012[(2)] = inst_22894);

(statearr_22977_23012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22948 === (18))){
var inst_22911 = figwheel.client.heads_up.clear.call(null);
var state_22947__$1 = state_22947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22947__$1,(21),inst_22911);
} else {
if((state_val_22948 === (8))){
var inst_22943 = (state_22947[(2)]);
var state_22947__$1 = state_22947;
var statearr_22978_23013 = state_22947__$1;
(statearr_22978_23013[(2)] = inst_22943);

(statearr_22978_23013[(1)] = (4));


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
});})(c__6550__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__6494__auto__,c__6550__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_22982 = [null,null,null,null,null,null,null,null,null];
(statearr_22982[(0)] = state_machine__6495__auto__);

(statearr_22982[(1)] = (1));

return statearr_22982;
});
var state_machine__6495__auto____1 = (function (state_22947){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_22947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e22983){if((e22983 instanceof Object)){
var ex__6498__auto__ = e22983;
var statearr_22984_23014 = state_22947;
(statearr_22984_23014[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23015 = state_22947;
state_22947 = G__23015;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_22947){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_22947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto__,msg_hist,msg_names,msg))
})();
var state__6552__auto__ = (function (){var statearr_22985 = f__6551__auto__.call(null);
(statearr_22985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto__);

return statearr_22985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto__,msg_hist,msg_names,msg))
);

return c__6550__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__6550__auto___23078 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___23078,ch){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___23078,ch){
return (function (state_23061){
var state_val_23062 = (state_23061[(1)]);
if((state_val_23062 === (8))){
var inst_23053 = (state_23061[(2)]);
var state_23061__$1 = (function (){var statearr_23063 = state_23061;
(statearr_23063[(7)] = inst_23053);

return statearr_23063;
})();
var statearr_23064_23079 = state_23061__$1;
(statearr_23064_23079[(2)] = null);

(statearr_23064_23079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (7))){
var inst_23057 = (state_23061[(2)]);
var state_23061__$1 = state_23061;
var statearr_23065_23080 = state_23061__$1;
(statearr_23065_23080[(2)] = inst_23057);

(statearr_23065_23080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (6))){
var state_23061__$1 = state_23061;
var statearr_23066_23081 = state_23061__$1;
(statearr_23066_23081[(2)] = null);

(statearr_23066_23081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (5))){
var inst_23049 = (state_23061[(8)]);
var inst_23051 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_23049);
var state_23061__$1 = state_23061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23061__$1,(8),inst_23051);
} else {
if((state_val_23062 === (4))){
var inst_23049 = (state_23061[(8)]);
var inst_23049__$1 = (state_23061[(2)]);
var state_23061__$1 = (function (){var statearr_23067 = state_23061;
(statearr_23067[(8)] = inst_23049__$1);

return statearr_23067;
})();
if(cljs.core.truth_(inst_23049__$1)){
var statearr_23068_23082 = state_23061__$1;
(statearr_23068_23082[(1)] = (5));

} else {
var statearr_23069_23083 = state_23061__$1;
(statearr_23069_23083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23062 === (3))){
var inst_23059 = (state_23061[(2)]);
var state_23061__$1 = state_23061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23061__$1,inst_23059);
} else {
if((state_val_23062 === (2))){
var state_23061__$1 = state_23061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23061__$1,(4),ch);
} else {
if((state_val_23062 === (1))){
var state_23061__$1 = state_23061;
var statearr_23070_23084 = state_23061__$1;
(statearr_23070_23084[(2)] = null);

(statearr_23070_23084[(1)] = (2));


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
});})(c__6550__auto___23078,ch))
;
return ((function (switch__6494__auto__,c__6550__auto___23078,ch){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_23074 = [null,null,null,null,null,null,null,null,null];
(statearr_23074[(0)] = state_machine__6495__auto__);

(statearr_23074[(1)] = (1));

return statearr_23074;
});
var state_machine__6495__auto____1 = (function (state_23061){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_23061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e23075){if((e23075 instanceof Object)){
var ex__6498__auto__ = e23075;
var statearr_23076_23085 = state_23061;
(statearr_23076_23085[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23086 = state_23061;
state_23061 = G__23086;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_23061){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_23061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___23078,ch))
})();
var state__6552__auto__ = (function (){var statearr_23077 = f__6551__auto__.call(null);
(statearr_23077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___23078);

return statearr_23077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___23078,ch))
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
var c__6550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto__){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto__){
return (function (state_23107){
var state_val_23108 = (state_23107[(1)]);
if((state_val_23108 === (2))){
var inst_23104 = (state_23107[(2)]);
var inst_23105 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_23107__$1 = (function (){var statearr_23109 = state_23107;
(statearr_23109[(7)] = inst_23104);

return statearr_23109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23107__$1,inst_23105);
} else {
if((state_val_23108 === (1))){
var inst_23102 = cljs.core.async.timeout.call(null,(3000));
var state_23107__$1 = state_23107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23107__$1,(2),inst_23102);
} else {
return null;
}
}
});})(c__6550__auto__))
;
return ((function (switch__6494__auto__,c__6550__auto__){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_23113 = [null,null,null,null,null,null,null,null];
(statearr_23113[(0)] = state_machine__6495__auto__);

(statearr_23113[(1)] = (1));

return statearr_23113;
});
var state_machine__6495__auto____1 = (function (state_23107){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_23107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e23114){if((e23114 instanceof Object)){
var ex__6498__auto__ = e23114;
var statearr_23115_23117 = state_23107;
(statearr_23115_23117[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23118 = state_23107;
state_23107 = G__23118;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_23107){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_23107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto__))
})();
var state__6552__auto__ = (function (){var statearr_23116 = f__6551__auto__.call(null);
(statearr_23116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto__);

return statearr_23116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto__))
);

return c__6550__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_((function (){var and__3760__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__3760__auto__)){
return ("CustomEvent" in window);
} else {
return and__3760__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj23122 = {"detail":url};
return obj23122;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__23123){
var map__23129 = p__23123;
var map__23129__$1 = ((cljs.core.seq_QMARK_.call(null,map__23129))?cljs.core.apply.call(null,cljs.core.hash_map,map__23129):map__23129);
var ed = map__23129__$1;
var exception_data = cljs.core.get.call(null,map__23129__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__23129__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__23130_23134 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__23131_23135 = null;
var count__23132_23136 = (0);
var i__23133_23137 = (0);
while(true){
if((i__23133_23137 < count__23132_23136)){
var msg_23138 = cljs.core._nth.call(null,chunk__23131_23135,i__23133_23137);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23138);

var G__23139 = seq__23130_23134;
var G__23140 = chunk__23131_23135;
var G__23141 = count__23132_23136;
var G__23142 = (i__23133_23137 + (1));
seq__23130_23134 = G__23139;
chunk__23131_23135 = G__23140;
count__23132_23136 = G__23141;
i__23133_23137 = G__23142;
continue;
} else {
var temp__4126__auto___23143 = cljs.core.seq.call(null,seq__23130_23134);
if(temp__4126__auto___23143){
var seq__23130_23144__$1 = temp__4126__auto___23143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23130_23144__$1)){
var c__4559__auto___23145 = cljs.core.chunk_first.call(null,seq__23130_23144__$1);
var G__23146 = cljs.core.chunk_rest.call(null,seq__23130_23144__$1);
var G__23147 = c__4559__auto___23145;
var G__23148 = cljs.core.count.call(null,c__4559__auto___23145);
var G__23149 = (0);
seq__23130_23134 = G__23146;
chunk__23131_23135 = G__23147;
count__23132_23136 = G__23148;
i__23133_23137 = G__23149;
continue;
} else {
var msg_23150 = cljs.core.first.call(null,seq__23130_23144__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_23150);

var G__23151 = cljs.core.next.call(null,seq__23130_23144__$1);
var G__23152 = null;
var G__23153 = (0);
var G__23154 = (0);
seq__23130_23134 = G__23151;
chunk__23131_23135 = G__23152;
count__23132_23136 = G__23153;
i__23133_23137 = G__23154;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__23155){
var map__23157 = p__23155;
var map__23157__$1 = ((cljs.core.seq_QMARK_.call(null,map__23157))?cljs.core.apply.call(null,cljs.core.hash_map,map__23157):map__23157);
var w = map__23157__$1;
var message = cljs.core.get.call(null,map__23157__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__3760__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3760__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3760__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$1,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$1;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__23164 = cljs.core.seq.call(null,plugins);
var chunk__23165 = null;
var count__23166 = (0);
var i__23167 = (0);
while(true){
if((i__23167 < count__23166)){
var vec__23168 = cljs.core._nth.call(null,chunk__23165,i__23167);
var k = cljs.core.nth.call(null,vec__23168,(0),null);
var plugin = cljs.core.nth.call(null,vec__23168,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23170 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23164,chunk__23165,count__23166,i__23167,pl_23170,vec__23168,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_23170.call(null,msg_hist);
});})(seq__23164,chunk__23165,count__23166,i__23167,pl_23170,vec__23168,k,plugin))
);
} else {
}

var G__23171 = seq__23164;
var G__23172 = chunk__23165;
var G__23173 = count__23166;
var G__23174 = (i__23167 + (1));
seq__23164 = G__23171;
chunk__23165 = G__23172;
count__23166 = G__23173;
i__23167 = G__23174;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__23164);
if(temp__4126__auto__){
var seq__23164__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23164__$1)){
var c__4559__auto__ = cljs.core.chunk_first.call(null,seq__23164__$1);
var G__23175 = cljs.core.chunk_rest.call(null,seq__23164__$1);
var G__23176 = c__4559__auto__;
var G__23177 = cljs.core.count.call(null,c__4559__auto__);
var G__23178 = (0);
seq__23164 = G__23175;
chunk__23165 = G__23176;
count__23166 = G__23177;
i__23167 = G__23178;
continue;
} else {
var vec__23169 = cljs.core.first.call(null,seq__23164__$1);
var k = cljs.core.nth.call(null,vec__23169,(0),null);
var plugin = cljs.core.nth.call(null,vec__23169,(1),null);
if(cljs.core.truth_(plugin)){
var pl_23179 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__23164,chunk__23165,count__23166,i__23167,pl_23179,vec__23169,k,plugin,seq__23164__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_23179.call(null,msg_hist);
});})(seq__23164,chunk__23165,count__23166,i__23167,pl_23179,vec__23169,k,plugin,seq__23164__$1,temp__4126__auto__))
);
} else {
}

var G__23180 = cljs.core.next.call(null,seq__23164__$1);
var G__23181 = null;
var G__23182 = (0);
var G__23183 = (0);
seq__23164 = G__23180;
chunk__23165 = G__23181;
count__23166 = G__23182;
i__23167 = G__23183;
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
var watch_and_reload__delegate = function (p__23184){
var map__23186 = p__23184;
var map__23186__$1 = ((cljs.core.seq_QMARK_.call(null,map__23186))?cljs.core.apply.call(null,cljs.core.hash_map,map__23186):map__23186);
var opts = map__23186__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__23184 = null;
if (arguments.length > 0) {
var G__23187__i = 0, G__23187__a = new Array(arguments.length -  0);
while (G__23187__i < G__23187__a.length) {G__23187__a[G__23187__i] = arguments[G__23187__i + 0]; ++G__23187__i;}
  p__23184 = new cljs.core.IndexedSeq(G__23187__a,0);
} 
return watch_and_reload__delegate.call(this,p__23184);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__23188){
var p__23184 = cljs.core.seq(arglist__23188);
return watch_and_reload__delegate(p__23184);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map?rel=1423280678097