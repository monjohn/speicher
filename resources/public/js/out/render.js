// Compiled by ClojureScript 0.0-2674 {}
if(!goog.isProvided_('render')) {
goog.provide('render');
}
goog.require('cljs.core');
goog.require('quiescent.dom');
goog.require('quiescent');
goog.require('cljs.core.async');
/**
* The components for the words
*/
render.Word = quiescent.component.call(null,(function (app,channels){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.p.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"german"], null),"German Word"),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"clear-completed",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var c__6183__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6183__auto__){
return (function (){
var f__6184__auto__ = (function (){var switch__6127__auto__ = ((function (c__6183__auto__){
return (function (state_35522){
var state_val_35523 = (state_35522[(1)]);
if((state_val_35523 === (2))){
var inst_35520 = (state_35522[(2)]);
var state_35522__$1 = state_35522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35522__$1,inst_35520);
} else {
if((state_val_35523 === (1))){
var inst_35518 = new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(channels);
var state_35522__$1 = state_35522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35522__$1,(2),inst_35518,new cljs.core.Keyword(null,"right","right",-452581833));
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
var statearr_35527 = [null,null,null,null,null,null,null];
(statearr_35527[(0)] = state_machine__6128__auto__);

(statearr_35527[(1)] = (1));

return statearr_35527;
});
var state_machine__6128__auto____1 = (function (state_35522){
while(true){
var ret_value__6129__auto__ = (function (){try{while(true){
var result__6130__auto__ = switch__6127__auto__.call(null,state_35522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6130__auto__;
}
break;
}
}catch (e35528){if((e35528 instanceof Object)){
var ex__6131__auto__ = e35528;
var statearr_35529_35531 = state_35522;
(statearr_35529_35531[(5)] = ex__6131__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6129__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35532 = state_35522;
state_35522 = G__35532;
continue;
} else {
return ret_value__6129__auto__;
}
break;
}
});
state_machine__6128__auto__ = function(state_35522){
switch(arguments.length){
case 0:
return state_machine__6128__auto____0.call(this);
case 1:
return state_machine__6128__auto____1.call(this,state_35522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6128__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6128__auto____0;
state_machine__6128__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6128__auto____1;
return state_machine__6128__auto__;
})()
;})(switch__6127__auto__,c__6183__auto__))
})();
var state__6185__auto__ = (function (){var statearr_35530 = f__6184__auto__.call(null);
(statearr_35530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6183__auto__);

return statearr_35530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6185__auto__);
});})(c__6183__auto__))
);

return c__6183__auto__;
})], null),"Recognized it"));
}));
/**
* 
*/
render.Wordrow = quiescent.component.call(null,(function (row,channels){
return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.first.call(null,row)),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.second.call(null,row)));
}));
/**
* A list of words rendered in table
*/
render.WordTable = quiescent.component.call(null,(function (app,channels){
return cljs.core.apply.call(null,quiescent.dom.table,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__35533_SHARP_){
return render.Wordrow.call(null,p1__35533_SHARP_,channels);
}),new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(app)));
}));
/**
* The root of the application
*/
render.App = quiescent.component.call(null,(function (app,channels){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,render.WordTable.call(null,app,channels));
}));
var render_pending_QMARK__35534 = cljs.core.atom.call(null,false);
/**
* Render the given application state tree.
*/
render.request_render = ((function (render_pending_QMARK__35534){
return (function request_render(app){
if(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK__35534,false,true)){
return window.requestAnimationFrame(((function (render_pending_QMARK__35534){
return (function (){
quiescent.render.call(null,render.App.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app)),new cljs.core.Keyword(null,"channels","channels",1132759174).cljs$core$IFn$_invoke$arity$1(app)),document.getElementById("speicher"));

return cljs.core.reset_BANG_.call(null,render_pending_QMARK__35534,false);
});})(render_pending_QMARK__35534))
);
} else {
return null;
}
});})(render_pending_QMARK__35534))
;

//# sourceMappingURL=render.js.map