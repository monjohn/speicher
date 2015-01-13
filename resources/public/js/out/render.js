// Compiled by ClojureScript 0.0-2674 {}
if(!goog.isProvided_('render')) {
goog.provide('render');
}
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('quiescent.dom');
goog.require('quiescent');
goog.require('cljs.core.async');
/**
* The components for the words
*/
render.Word = quiescent.component.call(null,(function (state,input_chan){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.p.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"german"], null),"German Word"),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"clear-completed",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var c__5977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto__){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto__){
return (function (state_11053){
var state_val_11054 = (state_11053[(1)]);
if((state_val_11054 === (2))){
var inst_11051 = (state_11053[(2)]);
var state_11053__$1 = state_11053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11053__$1,inst_11051);
} else {
if((state_val_11054 === (1))){
var inst_11047 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11048 = [new cljs.core.Keyword(null,"right","right",-452581833),null];
var inst_11049 = (new cljs.core.PersistentVector(null,2,(5),inst_11047,inst_11048,null));
var state_11053__$1 = state_11053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11053__$1,(2),input_chan,inst_11049);
} else {
return null;
}
}
});})(c__5977__auto__))
;
return ((function (switch__5962__auto__,c__5977__auto__){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_11058 = [null,null,null,null,null,null,null];
(statearr_11058[(0)] = state_machine__5963__auto__);

(statearr_11058[(1)] = (1));

return statearr_11058;
});
var state_machine__5963__auto____1 = (function (state_11053){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_11053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e11059){if((e11059 instanceof Object)){
var ex__5966__auto__ = e11059;
var statearr_11060_11062 = state_11053;
(statearr_11060_11062[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11063 = state_11053;
state_11053 = G__11063;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_11053){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_11053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto__))
})();
var state__5979__auto__ = (function (){var statearr_11061 = f__5978__auto__.call(null);
(statearr_11061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto__);

return statearr_11061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto__))
);

return c__5977__auto__;
})], null),"Recognized it"));
}));
/**
* 
*/
render.Wordrow = quiescent.component.call(null,(function (row,input_chan){
return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.first.call(null,row)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.second.call(null,row)));
}));
/**
* A list of words rendered in table
*/
render.WordTable = quiescent.component.call(null,(function (state,input_chan){
return cljs.core.apply.call(null,quiescent.dom.table,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__11064_SHARP_){
return render.Wordrow.call(null,p1__11064_SHARP_,input_chan);
}),new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(state)));
}));
/**
* Displays the list of definitions, with option to choose
*/
render.DisplaySearch = quiescent.component.call(null,(function (state,input_chan){
cljs.core.println.call(null,state);

return cljs.core.apply.call(null,quiescent.dom.ul,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__11065_SHARP_){
return quiescent.dom.li.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__11065_SHARP_);
}),new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865).cljs$core$IFn$_invoke$arity$1(state)));
}));
render.handle_search_submit = (function handle_search_submit(input_chan,e){
var term_11096 = document.getElementById("term").value;
cljs.core.println.call(null,cljs.core.count.call(null,term_11096));

var c__5977__auto___11097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___11097,term_11096){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___11097,term_11096){
return (function (state_11087){
var state_val_11088 = (state_11087[(1)]);
if((state_val_11088 === (2))){
var inst_11085 = (state_11087[(2)]);
var state_11087__$1 = state_11087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11087__$1,inst_11085);
} else {
if((state_val_11088 === (1))){
var inst_11081 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11082 = [new cljs.core.Keyword(null,"search-term","search-term",356193544),term_11096];
var inst_11083 = (new cljs.core.PersistentVector(null,2,(5),inst_11081,inst_11082,null));
var state_11087__$1 = state_11087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11087__$1,(2),input_chan,inst_11083);
} else {
return null;
}
}
});})(c__5977__auto___11097,term_11096))
;
return ((function (switch__5962__auto__,c__5977__auto___11097,term_11096){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_11092 = [null,null,null,null,null,null,null];
(statearr_11092[(0)] = state_machine__5963__auto__);

(statearr_11092[(1)] = (1));

return statearr_11092;
});
var state_machine__5963__auto____1 = (function (state_11087){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_11087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e11093){if((e11093 instanceof Object)){
var ex__5966__auto__ = e11093;
var statearr_11094_11098 = state_11087;
(statearr_11094_11098[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11099 = state_11087;
state_11087 = G__11099;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_11087){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_11087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___11097,term_11096))
})();
var state__5979__auto__ = (function (){var statearr_11095 = f__5978__auto__.call(null);
(statearr_11095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___11097);

return statearr_11095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___11097,term_11096))
);


return false;
});
/**
* 
*/
render.Search = quiescent.component.call(null,(function (p__11100){
var map__11101 = p__11100;
var map__11101__$1 = ((cljs.core.seq_QMARK_.call(null,map__11101))?cljs.core.apply.call(null,cljs.core.hash_map,map__11101):map__11101);
var input_chan = cljs.core.get.call(null,map__11101__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));

var handle_fn = cljs.core.partial.call(null,render.handle_search_submit,input_chan);
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.form.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),"#"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"search",new cljs.core.Keyword(null,"id","id",-1388402092),"term",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter new word"], null)),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_fn], null),"Submit")));
}));
/**
* The root of the application
*/
render.Page = quiescent.component.call(null,(function (state,input_chan){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var pred__11102 = cljs.core._EQ_;
var expr__11103 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__11102.call(null,new cljs.core.Keyword(null,"search-page","search-page",-705609891),expr__11103))){
return render.Search.call(null,state);
} else {
if(cljs.core.truth_(pred__11102.call(null,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865),expr__11103))){
return render.DisplaySearch.call(null,state);
} else {
return render.WordTable.call(null,state,input_chan);
}
}
})());
}));
var render_pending_QMARK__11105 = cljs.core.atom.call(null,false);
/**
* Render the given application state tree.
*/
render.request_render = ((function (render_pending_QMARK__11105){
return (function request_render(state){
if(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK__11105,false,true)){
return window.requestAnimationFrame(((function (render_pending_QMARK__11105){
return (function (){
quiescent.render.call(null,render.Page.call(null,state,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state)),document.getElementById("speicher"));

return cljs.core.reset_BANG_.call(null,render_pending_QMARK__11105,false);
});})(render_pending_QMARK__11105))
);
} else {
return null;
}
});})(render_pending_QMARK__11105))
;

//# sourceMappingURL=render.js.map