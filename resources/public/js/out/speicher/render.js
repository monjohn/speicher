// Compiled by ClojureScript 0.0-2727 {}
goog.provide('speicher.render');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('quiescent.dom');
goog.require('quiescent');
goog.require('cljs.reader');
goog.require('cljs.core.async');
speicher.render.data = cljs.core.list("lernen | lernend | gelernt | ich lerne | du lernst | er/sie lernt | ich/er/sie lernte | er/sie hat/hatte gelernt | deutsch lernen :: to learn {learned, learnt; learned, learnt} | learning | learned; learnt | I learn | you learn | he/she learns | I/he/she learned; I/he/she learnt | he/she has/had learned; he/she has/had learnt | to learn German","lernen; sich aneignen; aufschnappen :: to pick up");
speicher.render.toArray = (function toArray(js_col){
return cljs.core.js__GT_clj.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentVector.EMPTY).slice.call(js_col));
});
speicher.render.serialize_form = (function serialize_form(e){
return clojure.walk.keywordize_keys.call(null,cljs.core.reduce.call(null,(function (p1__10348_SHARP_,p2__10347_SHARP_){
var k = p2__10347_SHARP_.name;
var v = p2__10347_SHARP_.value;
return cljs.core.assoc.call(null,p1__10348_SHARP_,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__10346_SHARP_){
return p1__10346_SHARP_.checked;
}),speicher.render.toArray.call(null,e.target.elements))));
});
/**
* 
*/
speicher.render.Nav = quiescent.component.call(null,(function (title){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"navbar"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"left"], null),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"back link"], null),quiescent.dom.i.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon icon-back"], null)),quiescent.dom.span.call(null,null,"Back"))),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),"22px"], null)], null),title),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"right"], null))));
}));
/**
* 
*/
speicher.render.Wordrow = quiescent.component.call(null,(function (row,input_chan){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"accordion-item"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"accordion-item-toggle"], null),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-content item-link"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),cljs.core.first.call(null,row))))),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"accordion-item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block"], null),cljs.core.second.call(null,row))));
}));
/**
* A list of words rendered in table
*/
speicher.render.WordList = quiescent.component.call(null,(function (state,input_chan){
return quiescent.dom.div.call(null,null,speicher.render.Nav.call(null,"Review"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"accordion-list list-block"], null),cljs.core.apply.call(null,quiescent.dom.ul,null,cljs.core.map.call(null,(function (p1__10349_SHARP_){
return speicher.render.Wordrow.call(null,p1__10349_SHARP_,input_chan);
}),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state))))));
}));
speicher.render.handle_search_submit = (function handle_search_submit(input_chan,e){
var term_10400 = document.getElementById("term").value;
var c__9681__auto___10401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto___10401,term_10400){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto___10401,term_10400){
return (function (state_10387){
var state_val_10388 = (state_10387[(1)]);
if((state_val_10388 === (5))){
var inst_10382 = (state_10387[(2)]);
var state_10387__$1 = state_10387;
var statearr_10389_10402 = state_10387__$1;
(statearr_10389_10402[(2)] = inst_10382);

(statearr_10389_10402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10388 === (4))){
var inst_10385 = (state_10387[(2)]);
var state_10387__$1 = state_10387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10387__$1,inst_10385);
} else {
if((state_val_10388 === (3))){
var state_10387__$1 = state_10387;
var statearr_10390_10403 = state_10387__$1;
(statearr_10390_10403[(2)] = null);

(statearr_10390_10403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10388 === (2))){
var inst_10378 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10379 = [new cljs.core.Keyword(null,"search-term","search-term",356193544),term_10400];
var inst_10380 = (new cljs.core.PersistentVector(null,2,(5),inst_10378,inst_10379,null));
var state_10387__$1 = state_10387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10387__$1,(5),input_chan,inst_10380);
} else {
if((state_val_10388 === (1))){
var inst_10375 = cljs.core.count.call(null,term_10400);
var inst_10376 = ((2) < inst_10375);
var state_10387__$1 = state_10387;
if(cljs.core.truth_(inst_10376)){
var statearr_10391_10404 = state_10387__$1;
(statearr_10391_10404[(1)] = (2));

} else {
var statearr_10392_10405 = state_10387__$1;
(statearr_10392_10405[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__9681__auto___10401,term_10400))
;
return ((function (switch__9666__auto__,c__9681__auto___10401,term_10400){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10396 = [null,null,null,null,null,null,null];
(statearr_10396[(0)] = state_machine__9667__auto__);

(statearr_10396[(1)] = (1));

return statearr_10396;
});
var state_machine__9667__auto____1 = (function (state_10387){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10397){if((e10397 instanceof Object)){
var ex__9670__auto__ = e10397;
var statearr_10398_10406 = state_10387;
(statearr_10398_10406[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10407 = state_10387;
state_10387 = G__10407;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10387){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto___10401,term_10400))
})();
var state__9683__auto__ = (function (){var statearr_10399 = f__9682__auto__.call(null);
(statearr_10399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto___10401);

return statearr_10399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto___10401,term_10400))
);


return false;
});
speicher.render.handle_new_word_submit = (function handle_new_word_submit(input_chan,e){
var form = speicher.render.serialize_form.call(null,e);
var c__9681__auto___10438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto___10438,form){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto___10438,form){
return (function (state_10429){
var state_val_10430 = (state_10429[(1)]);
if((state_val_10430 === (2))){
var inst_10427 = (state_10429[(2)]);
var state_10429__$1 = state_10429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10429__$1,inst_10427);
} else {
if((state_val_10430 === (1))){
var inst_10423 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10424 = [new cljs.core.Keyword(null,"submit-selected","submit-selected",-548982554),form];
var inst_10425 = (new cljs.core.PersistentVector(null,2,(5),inst_10423,inst_10424,null));
var state_10429__$1 = state_10429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10429__$1,(2),input_chan,inst_10425);
} else {
return null;
}
}
});})(c__9681__auto___10438,form))
;
return ((function (switch__9666__auto__,c__9681__auto___10438,form){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10434 = [null,null,null,null,null,null,null];
(statearr_10434[(0)] = state_machine__9667__auto__);

(statearr_10434[(1)] = (1));

return statearr_10434;
});
var state_machine__9667__auto____1 = (function (state_10429){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10435){if((e10435 instanceof Object)){
var ex__9670__auto__ = e10435;
var statearr_10436_10439 = state_10429;
(statearr_10436_10439[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10435;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10440 = state_10429;
state_10429 = G__10440;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10429){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto___10438,form))
})();
var state__9683__auto__ = (function (){var statearr_10437 = f__9682__auto__.call(null);
(statearr_10437[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto___10438);

return statearr_10437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto___10438,form))
);


return false;
});
speicher.render.handle_enter_word_submit = (function handle_enter_word_submit(input_chan,e){
var ger = document.getElementById("ger");
var eng = document.getElementById("eng");
var g = ger.value;
var e__$1 = eng.value;
if(cljs.core.truth_((function (){var or__7449__auto__ = clojure.string.blank_QMARK_.call(null,g);
if(cljs.core.truth_(or__7449__auto__)){
return or__7449__auto__;
} else {
return clojure.string.blank_QMARK_.call(null,e__$1);
}
})())){
} else {
var c__9681__auto___10477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto___10477,ger,eng,g,e__$1){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto___10477,ger,eng,g,e__$1){
return (function (state_10468){
var state_val_10469 = (state_10468[(1)]);
if((state_val_10469 === (2))){
var inst_10466 = (state_10468[(2)]);
var state_10468__$1 = state_10468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10468__$1,inst_10466);
} else {
if((state_val_10469 === (1))){
var inst_10459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10460 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10461 = [g,e__$1];
var inst_10462 = (new cljs.core.PersistentVector(null,2,(5),inst_10460,inst_10461,null));
var inst_10463 = [new cljs.core.Keyword(null,"submit-entered","submit-entered",-1080659330),inst_10462];
var inst_10464 = (new cljs.core.PersistentVector(null,2,(5),inst_10459,inst_10463,null));
var state_10468__$1 = state_10468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10468__$1,(2),input_chan,inst_10464);
} else {
return null;
}
}
});})(c__9681__auto___10477,ger,eng,g,e__$1))
;
return ((function (switch__9666__auto__,c__9681__auto___10477,ger,eng,g,e__$1){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10473 = [null,null,null,null,null,null,null];
(statearr_10473[(0)] = state_machine__9667__auto__);

(statearr_10473[(1)] = (1));

return statearr_10473;
});
var state_machine__9667__auto____1 = (function (state_10468){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10474){if((e10474 instanceof Object)){
var ex__9670__auto__ = e10474;
var statearr_10475_10478 = state_10468;
(statearr_10475_10478[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10479 = state_10468;
state_10468 = G__10479;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10468){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto___10477,ger,eng,g,e__$1))
})();
var state__9683__auto__ = (function (){var statearr_10476 = f__9682__auto__.call(null);
(statearr_10476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto___10477);

return statearr_10476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto___10477,ger,eng,g,e__$1))
);


ger.value = "";

eng.value = "";
}

return false;
});
/**
* Takes entries, splits eng/ger in pairs,
* then splits the sublits and stiches them back together
*/
speicher.render.format_entry = (function format_entry(entry){
var pair = clojure.string.split.call(null,entry,/ :: /);
return cljs.core.map.call(null,((function (pair){
return (function (g,e){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[g,e],null));
});})(pair))
,clojure.string.split.call(null,cljs.core.first.call(null,pair),/ \|/),clojure.string.split.call(null,cljs.core.second.call(null,pair),/ \|/));
});
speicher.render.format_entries = (function format_entries(dict){
return cljs.core.map.call(null,speicher.render.format_entry,dict);
});
speicher.render.init_slider = (function init_slider(state){
var app = new cljs.core.Keyword(null,"f7","f7",356150168).cljs$core$IFn$_invoke$arity$1(state);
return app.swiper(".swiper-container",{"prevButton": ".swiper-prev-button", "nextButton": ".swiper-next-button"});
});
/**
* The components for the words
*/
speicher.render.Slides = quiescent.component.call(null,(function (ch,idx,word){
if(cljs.core.even_QMARK_.call(null,idx)){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"swiper-slide"], null),quiescent.dom.span.call(null,null,word));
} else {
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"swiper-slide"], null),quiescent.dom.span.call(null,null,word),quiescent.dom.br.call(null,null),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"button button-big  color-green",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__){
return (function (state_10487){
var state_val_10488 = (state_10487[(1)]);
if((state_val_10488 === (2))){
var inst_10485 = (state_10487[(2)]);
var state_10487__$1 = state_10487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10487__$1,inst_10485);
} else {
if((state_val_10488 === (1))){
var inst_10480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10481 = cljs.core.quot.call(null,idx,(2));
var inst_10482 = [new cljs.core.Keyword(null,"correct","correct",984806334),inst_10481];
var inst_10483 = (new cljs.core.PersistentVector(null,2,(5),inst_10480,inst_10482,null));
var state_10487__$1 = state_10487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10487__$1,(2),ch,inst_10483);
} else {
return null;
}
}
});})(c__9681__auto__))
;
return ((function (switch__9666__auto__,c__9681__auto__){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10492 = [null,null,null,null,null,null,null];
(statearr_10492[(0)] = state_machine__9667__auto__);

(statearr_10492[(1)] = (1));

return statearr_10492;
});
var state_machine__9667__auto____1 = (function (state_10487){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10493){if((e10493 instanceof Object)){
var ex__9670__auto__ = e10493;
var statearr_10494_10496 = state_10487;
(statearr_10494_10496[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10497 = state_10487;
state_10487 = G__10497;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10487){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__))
})();
var state__9683__auto__ = (function (){var statearr_10495 = f__9682__auto__.call(null);
(statearr_10495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__))
);

return c__9681__auto__;
})], null),"I remember"));
}
}));
/**
* 
*/
speicher.render.ReviewPage = quiescent.component.call(null,(function (state){
return cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"swiper-wrapper"], null),cljs.core.map_indexed.call(null,(function (idx,word){
return speicher.render.Slides.call(null,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state),idx,word);
}),cljs.core.flatten.call(null,cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,x),cljs.core.second.call(null,x)], null);
}),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state)))));
}));
/**
* 
*/
speicher.render.SearchTableRow = quiescent.component.call(null,(function (id,top_QMARK_,g,e){
return quiescent.dom.li.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"accordion-item"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),g),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-after"], null),e))));
}));
/**
* 
*/
speicher.render.SearchPage = quiescent.component.call(null,(function (p__10498){
var map__10499 = p__10498;
var map__10499__$1 = ((cljs.core.seq_QMARK_.call(null,map__10499))?cljs.core.apply.call(null,cljs.core.hash_map,map__10499):map__10499);
var dictionary = cljs.core.get.call(null,map__10499__$1,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
var input_chan = cljs.core.get.call(null,map__10499__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));

var handle_search = cljs.core.partial.call(null,speicher.render.handle_search_submit,input_chan);
var handle_new_word = cljs.core.partial.call(null,speicher.render.handle_new_word_submit,input_chan);
return quiescent.dom.div.call(null,null,speicher.render.Nav.call(null,"Enter German Word"),quiescent.dom.form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"searchbar",new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),handle_search], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"searchbar-input"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"name","name",1843675177),"search",new cljs.core.Keyword(null,"id","id",-1388402092),"term",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search"], null)),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"searchbar-clear"], null))),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"className","className",-1983287057),"button button-round"], null),">")),(cljs.core.truth_(dictionary)?quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"accordion-item list-block"], null),cljs.core.apply.call(null,quiescent.dom.ul,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,((function (handle_search,handle_new_word,map__10499,map__10499__$1,dictionary,input_chan){
return (function (ind,entry){
cljs.core.println.call(null,entry);

return speicher.render.SearchTableRow.call(null,ind,null,cljs.core.ffirst.call(null,entry),cljs.core.second.call(null,cljs.core.first.call(null,entry)));
});})(handle_search,handle_new_word,map__10499,map__10499__$1,dictionary,input_chan))
,speicher.render.format_entries.call(null,dictionary))))):null));
}));
/**
* 
*/
speicher.render.NextPage = quiescent.component.call(null,(function (state){
return quiescent.dom.h3.call(null,null,"Choose another list");
}));
/**
* 
*/
speicher.render.Link = quiescent.component.call(null,(function (state){
return quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"link",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__){
return (function (state_10510){
var state_val_10511 = (state_10510[(1)]);
if((state_val_10511 === (2))){
var inst_10508 = (state_10510[(2)]);
var state_10510__$1 = (function (){var statearr_10512 = state_10510;
(statearr_10512[(7)] = inst_10508);

return statearr_10512;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10510__$1,false);
} else {
if((state_val_10511 === (1))){
var inst_10500 = new cljs.core.Keyword(null,"main-view","main-view",343997885).cljs$core$IFn$_invoke$arity$1(state);
var inst_10501 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_10502 = inst_10500.router;
var inst_10503 = inst_10502.loadPage("review.html");
var inst_10504 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10505 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_10506 = (new cljs.core.PersistentVector(null,2,(5),inst_10504,inst_10505,null));
var state_10510__$1 = (function (){var statearr_10513 = state_10510;
(statearr_10513[(8)] = inst_10503);

return statearr_10513;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10510__$1,(2),inst_10501,inst_10506);
} else {
return null;
}
}
});})(c__9681__auto__))
;
return ((function (switch__9666__auto__,c__9681__auto__){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10517 = [null,null,null,null,null,null,null,null,null];
(statearr_10517[(0)] = state_machine__9667__auto__);

(statearr_10517[(1)] = (1));

return statearr_10517;
});
var state_machine__9667__auto____1 = (function (state_10510){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10518){if((e10518 instanceof Object)){
var ex__9670__auto__ = e10518;
var statearr_10519_10521 = state_10510;
(statearr_10519_10521[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10522 = state_10510;
state_10510 = G__10522;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10510){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__))
})();
var state__9683__auto__ = (function (){var statearr_10520 = f__9682__auto__.call(null);
(statearr_10520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__))
);

return c__9681__auto__;
})], null),"Show List ");
}));
/**
* 
*/
speicher.render.Popup = quiescent.component.call(null,(function (p__10523){
var map__10524 = p__10523;
var map__10524__$1 = ((cljs.core.seq_QMARK_.call(null,map__10524))?cljs.core.apply.call(null,cljs.core.hash_map,map__10524):map__10524);
var ch = cljs.core.get.call(null,map__10524__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var handle_enter_word = cljs.core.partial.call(null,speicher.render.handle_enter_word_submit,ch);
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"popup popup-add"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block-title"], null),"Add Words"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-block"], null),quiescent.dom.form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),handle_enter_word,new cljs.core.Keyword(null,"name","name",1843675177),"new-word"], null),quiescent.dom.ul.call(null,null,quiescent.dom.li.call(null,null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-input"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"German Word",new cljs.core.Keyword(null,"name","name",1843675177),"ger",new cljs.core.Keyword(null,"id","id",-1388402092),"ger"], null)))))),quiescent.dom.li.call(null,null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-input"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"English Word",new cljs.core.Keyword(null,"name","name",1843675177),"eng",new cljs.core.Keyword(null,"id","id",-1388402092),"eng"], null))))))),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"row"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-50"], null),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"button button-big button-fill color-red close-popup"], null),"Cancel")),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-50"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Submit",new cljs.core.Keyword(null,"className","className",-1983287057),"close-popup button button-big button-fill color-green"], null)))))))));
}));
/**
* 
*/
speicher.render.HomePage = quiescent.component.call(null,(function (p__10525){
var map__10526 = p__10525;
var map__10526__$1 = ((cljs.core.seq_QMARK_.call(null,map__10526))?cljs.core.apply.call(null,cljs.core.hash_map,map__10526):map__10526);
var main_view = cljs.core.get.call(null,map__10526__$1,new cljs.core.Keyword(null,"main-view","main-view",343997885));
var input_chan = cljs.core.get.call(null,map__10526__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var load_page = ((function (map__10526,map__10526__$1,main_view,input_chan){
return (function load_page(file){
return main_view.router.loadPage(file);
});})(map__10526,map__10526__$1,main_view,input_chan))
;
return quiescent.dom.div.call(null,null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block-title"], null),"What would you like to do?"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-block"], null),quiescent.dom.ul.call(null,null,quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__10526,map__10526__$1,main_view,input_chan){
return (function (){
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__,map__10526,map__10526__$1,main_view,input_chan){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__,map__10526,map__10526__$1,main_view,input_chan){
return (function (state_10534){
var state_val_10535 = (state_10534[(1)]);
if((state_val_10535 === (2))){
var inst_10532 = (state_10534[(2)]);
var state_10534__$1 = state_10534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10534__$1,inst_10532);
} else {
if((state_val_10535 === (1))){
var inst_10527 = load_page.call(null,"review.html");
var inst_10528 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10529 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_10530 = (new cljs.core.PersistentVector(null,2,(5),inst_10528,inst_10529,null));
var state_10534__$1 = (function (){var statearr_10536 = state_10534;
(statearr_10536[(7)] = inst_10527);

return statearr_10536;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10534__$1,(2),input_chan,inst_10530);
} else {
return null;
}
}
});})(c__9681__auto__,map__10526,map__10526__$1,main_view,input_chan))
;
return ((function (switch__9666__auto__,c__9681__auto__,map__10526,map__10526__$1,main_view,input_chan){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10540 = [null,null,null,null,null,null,null,null];
(statearr_10540[(0)] = state_machine__9667__auto__);

(statearr_10540[(1)] = (1));

return statearr_10540;
});
var state_machine__9667__auto____1 = (function (state_10534){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10541){if((e10541 instanceof Object)){
var ex__9670__auto__ = e10541;
var statearr_10542_10555 = state_10534;
(statearr_10542_10555[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10556 = state_10534;
state_10534 = G__10556;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10534){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__,map__10526,map__10526__$1,main_view,input_chan))
})();
var state__9683__auto__ = (function (){var statearr_10543 = f__9682__auto__.call(null);
(statearr_10543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__,map__10526,map__10526__$1,main_view,input_chan))
);

return c__9681__auto__;
});})(map__10526,map__10526__$1,main_view,input_chan))
], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Review"))))),quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__10526,map__10526__$1,main_view,input_chan){
return (function (){
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__,map__10526,map__10526__$1,main_view,input_chan){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__,map__10526,map__10526__$1,main_view,input_chan){
return (function (state_10546){
var state_val_10547 = (state_10546[(1)]);
if((state_val_10547 === (1))){
var inst_10544 = load_page.call(null,"search.html");
var state_10546__$1 = state_10546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10546__$1,inst_10544);
} else {
return null;
}
});})(c__9681__auto__,map__10526,map__10526__$1,main_view,input_chan))
;
return ((function (switch__9666__auto__,c__9681__auto__,map__10526,map__10526__$1,main_view,input_chan){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10551 = [null,null,null,null,null,null,null];
(statearr_10551[(0)] = state_machine__9667__auto__);

(statearr_10551[(1)] = (1));

return statearr_10551;
});
var state_machine__9667__auto____1 = (function (state_10546){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10552){if((e10552 instanceof Object)){
var ex__9670__auto__ = e10552;
var statearr_10553_10557 = state_10546;
(statearr_10553_10557[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10558 = state_10546;
state_10546 = G__10558;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10546){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__,map__10526,map__10526__$1,main_view,input_chan))
})();
var state__9683__auto__ = (function (){var statearr_10554 = f__9682__auto__.call(null);
(statearr_10554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__,map__10526,map__10526__$1,main_view,input_chan))
);

return c__9681__auto__;
});})(map__10526,map__10526__$1,main_view,input_chan))
], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Look up new word in Dictionary"))))),quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Enter new word and definition"))))))));
}));
/**
* The root of the application
*/
speicher.render.Page = quiescent.component.call(null,(function (state){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var pred__10559 = cljs.core._EQ_;
var expr__10560 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__10559.call(null,new cljs.core.Keyword(null,"review-list","review-list",-2126749986),expr__10560))){
return speicher.render.ReviewPage.call(null,state);
} else {
if(cljs.core.truth_(pred__10559.call(null,new cljs.core.Keyword(null,"next","next",-117701485),expr__10560))){
return speicher.render.NextPage.call(null,state);
} else {
if(cljs.core.truth_(pred__10559.call(null,new cljs.core.Keyword(null,"search-page","search-page",-705609891),expr__10560))){
return speicher.render.SearchPage.call(null,state);
} else {
return speicher.render.WordList.call(null,state,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state));
}
}
}
})());
}));
var render_pending_QMARK__10600 = cljs.core.atom.call(null,false);
/**
* Render the given application state tree.
*/
speicher.render.request_render = ((function (render_pending_QMARK__10600){
return (function request_render(state){
if(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK__10600,false,true)){
window.requestAnimationFrame(((function (render_pending_QMARK__10600){
return (function (){
var temp__4126__auto___10601 = document.getElementById("popup");
if(cljs.core.truth_(temp__4126__auto___10601)){
var el_10602 = temp__4126__auto___10601;
quiescent.render.call(null,speicher.render.Popup.call(null,state),el_10602);
} else {
}

var pred__10581 = cljs.core._EQ_;
var expr__10582 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__10581.call(null,new cljs.core.Keyword(null,"show-list","show-list",-483536849),expr__10582))){
return quiescent.render.call(null,speicher.render.WordList.call(null,state),document.getElementById("show-page"));
} else {
if(cljs.core.truth_(pred__10581.call(null,new cljs.core.Keyword(null,"review-list","review-list",-2126749986),expr__10582))){
quiescent.render.call(null,speicher.render.ReviewPage.call(null,state),document.getElementById("swiper"));

if(cljs.core.truth_((function (){var and__7437__auto__ = new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__7437__auto__)){
return new cljs.core.Keyword(null,"swiper-init?","swiper-init?",65165134).cljs$core$IFn$_invoke$arity$1(state) === false;
} else {
return and__7437__auto__;
}
})())){
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__,pred__10581,expr__10582,render_pending_QMARK__10600){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__,pred__10581,expr__10582,render_pending_QMARK__10600){
return (function (state_10591){
var state_val_10592 = (state_10591[(1)]);
if((state_val_10592 === (2))){
var inst_10589 = (state_10591[(2)]);
var state_10591__$1 = state_10591;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10591__$1,inst_10589);
} else {
if((state_val_10592 === (1))){
var inst_10584 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_10585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10586 = [new cljs.core.Keyword(null,"init-swiper","init-swiper",998548847),null];
var inst_10587 = (new cljs.core.PersistentVector(null,2,(5),inst_10585,inst_10586,null));
var state_10591__$1 = state_10591;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10591__$1,(2),inst_10584,inst_10587);
} else {
return null;
}
}
});})(c__9681__auto__,pred__10581,expr__10582,render_pending_QMARK__10600))
;
return ((function (switch__9666__auto__,c__9681__auto__,pred__10581,expr__10582,render_pending_QMARK__10600){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10596 = [null,null,null,null,null,null,null];
(statearr_10596[(0)] = state_machine__9667__auto__);

(statearr_10596[(1)] = (1));

return statearr_10596;
});
var state_machine__9667__auto____1 = (function (state_10591){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10591);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10597){if((e10597 instanceof Object)){
var ex__9670__auto__ = e10597;
var statearr_10598_10603 = state_10591;
(statearr_10598_10603[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10591);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10604 = state_10591;
state_10591 = G__10604;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10591){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__,pred__10581,expr__10582,render_pending_QMARK__10600))
})();
var state__9683__auto__ = (function (){var statearr_10599 = f__9682__auto__.call(null);
(statearr_10599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__,pred__10581,expr__10582,render_pending_QMARK__10600))
);

return c__9681__auto__;
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__10581.call(null,new cljs.core.Keyword(null,"search-page","search-page",-705609891),expr__10582))){
return quiescent.render.call(null,speicher.render.SearchPage.call(null,state),document.getElementById("search-page"));
} else {
if(cljs.core.truth_(pred__10581.call(null,new cljs.core.Keyword(null,"next","next",-117701485),expr__10582))){
return speicher.render.NextPage.call(null,state);
} else {
if(cljs.core.truth_(pred__10581.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__10582))){
return speicher.render.WordList.call(null,state,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state),document.getElementById("nav-options"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10582)].join('')));
}
}
}
}
}
});})(render_pending_QMARK__10600))
);

return cljs.core.reset_BANG_.call(null,render_pending_QMARK__10600,false);
} else {
return null;
}
});})(render_pending_QMARK__10600))
;

//# sourceMappingURL=render.js.map?rel=1423866347267