// Compiled by ClojureScript 0.0-2674 {}
goog.provide('render');
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
var c__12570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto__){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto__){
return (function (state_23533){
var state_val_23534 = (state_23533[(1)]);
if((state_val_23534 === (2))){
var inst_23531 = (state_23533[(2)]);
var state_23533__$1 = state_23533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23533__$1,inst_23531);
} else {
if((state_val_23534 === (1))){
var inst_23527 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23528 = [new cljs.core.Keyword(null,"right","right",-452581833),null];
var inst_23529 = (new cljs.core.PersistentVector(null,2,(5),inst_23527,inst_23528,null));
var state_23533__$1 = state_23533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23533__$1,(2),input_chan,inst_23529);
} else {
return null;
}
}
});})(c__12570__auto__))
;
return ((function (switch__12514__auto__,c__12570__auto__){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_23538 = [null,null,null,null,null,null,null];
(statearr_23538[(0)] = state_machine__12515__auto__);

(statearr_23538[(1)] = (1));

return statearr_23538;
});
var state_machine__12515__auto____1 = (function (state_23533){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_23533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e23539){if((e23539 instanceof Object)){
var ex__12518__auto__ = e23539;
var statearr_23540_23542 = state_23533;
(statearr_23540_23542[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23543 = state_23533;
state_23533 = G__23543;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_23533){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_23533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto__))
})();
var state__12572__auto__ = (function (){var statearr_23541 = f__12571__auto__.call(null);
(statearr_23541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto__);

return statearr_23541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto__))
);

return c__12570__auto__;
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
return cljs.core.apply.call(null,quiescent.dom.table,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__23544_SHARP_){
return render.Wordrow.call(null,p1__23544_SHARP_,input_chan);
}),new cljs.core.Keyword(null,"list","list",765357683).cljs$core$IFn$_invoke$arity$1(state)));
}));
render.data = cljs.core.list("lernen | lernend | gelernt | ich lerne | du lernst | er/sie lernt | ich/er/sie lernte | er/sie hat/hatte gelernt | deutsch lernen :: to learn {learned, learnt; learned, learnt} | learning | learned; learnt | I learn | you learn | he/she learns | I/he/she learned; I/he/she learnt | he/she has/had learned; he/she has/had learnt | to learn German","lernen; sich aneignen; aufschnappen :: to pick up");
/**
* Takes list of entries, splits eng/ger in pairs,
* then splits the sublits and stiches them back together
*/
render.format_entries = (function format_entries(dict){
cljs.core.println.call(null,"format-entries: ",dict);

return cljs.core.map.call(null,(function (p1__23545_SHARP_){
var pair = clojure.string.split.call(null,p1__23545_SHARP_,/ :: /);
return cljs.core.interleave.call(null,clojure.string.split.call(null,cljs.core.first.call(null,pair),/ \|/),clojure.string.split.call(null,cljs.core.second.call(null,pair),/ \|/));
}),dict);
});
render.handle_search_submit = (function handle_search_submit(input_chan,e){
var term_23576 = document.getElementById("term").value;
cljs.core.println.call(null,cljs.core.count.call(null,term_23576));

var c__12570__auto___23577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___23577,term_23576){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___23577,term_23576){
return (function (state_23567){
var state_val_23568 = (state_23567[(1)]);
if((state_val_23568 === (2))){
var inst_23565 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23567__$1,inst_23565);
} else {
if((state_val_23568 === (1))){
var inst_23561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23562 = [new cljs.core.Keyword(null,"search-term","search-term",356193544),term_23576];
var inst_23563 = (new cljs.core.PersistentVector(null,2,(5),inst_23561,inst_23562,null));
var state_23567__$1 = state_23567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23567__$1,(2),input_chan,inst_23563);
} else {
return null;
}
}
});})(c__12570__auto___23577,term_23576))
;
return ((function (switch__12514__auto__,c__12570__auto___23577,term_23576){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_23572 = [null,null,null,null,null,null,null];
(statearr_23572[(0)] = state_machine__12515__auto__);

(statearr_23572[(1)] = (1));

return statearr_23572;
});
var state_machine__12515__auto____1 = (function (state_23567){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_23567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e23573){if((e23573 instanceof Object)){
var ex__12518__auto__ = e23573;
var statearr_23574_23578 = state_23567;
(statearr_23574_23578[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23579 = state_23567;
state_23567 = G__23579;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_23567){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_23567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___23577,term_23576))
})();
var state__12572__auto__ = (function (){var statearr_23575 = f__12571__auto__.call(null);
(statearr_23575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___23577);

return statearr_23575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___23577,term_23576))
);


return false;
});
/**
* 
*/
render.Search_table_row = quiescent.component.call(null,(function (g,e){
return quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,g),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,e));
}));
/**
* 
*/
render.Search = quiescent.component.call(null,(function (p__23580){
var map__23581 = p__23580;
var map__23581__$1 = ((cljs.core.seq_QMARK_.call(null,map__23581))?cljs.core.apply.call(null,cljs.core.hash_map,map__23581):map__23581);
var dictionary = cljs.core.get.call(null,map__23581__$1,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
var input_chan = cljs.core.get.call(null,map__23581__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));

var handle_fn = cljs.core.partial.call(null,render.handle_search_submit,input_chan);
var _ = cljs.core.println.call(null,render.format_entries.call(null,dictionary));
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"search",new cljs.core.Keyword(null,"id","id",-1388402092),"term",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter new word"], null))),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_fn], null),"Submit"),quiescent.dom.br.call(null),(cljs.core.truth_(dictionary)?(function (){
quiescent.dom.form.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.fieldset.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.legend.call(null,cljs.core.PersistentArrayMap.EMPTY,"Pick the definition which fits best")),quiescent.dom.table.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.tr.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,"German"),quiescent.dom.td.call(null,cljs.core.PersistentArrayMap.EMPTY,"English")),cljs.core.apply.call(null,quiescent.dom.tbody,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (handle_fn,_,map__23581,map__23581__$1,dictionary,input_chan){
return (function (p__23582){
var vec__23583 = p__23582;
var g = cljs.core.nth.call(null,vec__23583,(0),null);
var e = cljs.core.nth.call(null,vec__23583,(1),null);

cljs.core.PersistentArrayMap.EMPTY;

return render.Search_table_row.call(null,g,e);
});})(handle_fn,_,map__23581,map__23581__$1,dictionary,input_chan))
,render.format_entries.call(null,dictionary)))));

return quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_fn], null),"Submit");
})()
:null));
}));
/**
* The root of the application
*/
render.Page = quiescent.component.call(null,(function (state,input_chan){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var pred__23584 = cljs.core._EQ_;
var expr__23585 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__23584.call(null,new cljs.core.Keyword(null,"search-page","search-page",-705609891),expr__23585))){
return render.Search.call(null,state);
} else {
if(cljs.core.truth_(pred__23584.call(null,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865),expr__23585))){
return render.Search.call(null,state);
} else {
return render.WordTable.call(null,state,input_chan);
}
}
})());
}));
var render_pending_QMARK__23587 = cljs.core.atom.call(null,false);
/**
* Render the given application state tree.
*/
render.request_render = ((function (render_pending_QMARK__23587){
return (function request_render(state){
if(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK__23587,false,true)){
return window.requestAnimationFrame(((function (render_pending_QMARK__23587){
return (function (){
quiescent.render.call(null,render.Page.call(null,state,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state)),document.getElementById("speicher"));

return cljs.core.reset_BANG_.call(null,render_pending_QMARK__23587,false);
});})(render_pending_QMARK__23587))
);
} else {
return null;
}
});})(render_pending_QMARK__23587))
;

//# sourceMappingURL=render.js.map