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
return clojure.walk.keywordize_keys.call(null,cljs.core.reduce.call(null,(function (p1__10226_SHARP_,p2__10225_SHARP_){
var k = p2__10225_SHARP_.name;
var v = p2__10225_SHARP_.value;
return cljs.core.assoc.call(null,p1__10226_SHARP_,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__10224_SHARP_){
return p1__10224_SHARP_.checked;
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
return quiescent.dom.div.call(null,null,speicher.render.Nav.call(null,"Review"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"accordion-list list-block"], null),cljs.core.apply.call(null,quiescent.dom.ul,null,cljs.core.map.call(null,(function (p1__10227_SHARP_){
return speicher.render.Wordrow.call(null,p1__10227_SHARP_,input_chan);
}),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state))))));
}));
speicher.render.handle_search_submit = (function handle_search_submit(input_chan,e){
var term_10278 = document.getElementById("term").value;
var c__9681__auto___10279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto___10279,term_10278){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto___10279,term_10278){
return (function (state_10265){
var state_val_10266 = (state_10265[(1)]);
if((state_val_10266 === (5))){
var inst_10260 = (state_10265[(2)]);
var state_10265__$1 = state_10265;
var statearr_10267_10280 = state_10265__$1;
(statearr_10267_10280[(2)] = inst_10260);

(statearr_10267_10280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10266 === (4))){
var inst_10263 = (state_10265[(2)]);
var state_10265__$1 = state_10265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10265__$1,inst_10263);
} else {
if((state_val_10266 === (3))){
var state_10265__$1 = state_10265;
var statearr_10268_10281 = state_10265__$1;
(statearr_10268_10281[(2)] = null);

(statearr_10268_10281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10266 === (2))){
var inst_10256 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10257 = [new cljs.core.Keyword(null,"search-term","search-term",356193544),term_10278];
var inst_10258 = (new cljs.core.PersistentVector(null,2,(5),inst_10256,inst_10257,null));
var state_10265__$1 = state_10265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10265__$1,(5),input_chan,inst_10258);
} else {
if((state_val_10266 === (1))){
var inst_10253 = cljs.core.count.call(null,term_10278);
var inst_10254 = ((2) < inst_10253);
var state_10265__$1 = state_10265;
if(cljs.core.truth_(inst_10254)){
var statearr_10269_10282 = state_10265__$1;
(statearr_10269_10282[(1)] = (2));

} else {
var statearr_10270_10283 = state_10265__$1;
(statearr_10270_10283[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__9681__auto___10279,term_10278))
;
return ((function (switch__9666__auto__,c__9681__auto___10279,term_10278){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10274 = [null,null,null,null,null,null,null];
(statearr_10274[(0)] = state_machine__9667__auto__);

(statearr_10274[(1)] = (1));

return statearr_10274;
});
var state_machine__9667__auto____1 = (function (state_10265){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10275){if((e10275 instanceof Object)){
var ex__9670__auto__ = e10275;
var statearr_10276_10284 = state_10265;
(statearr_10276_10284[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10285 = state_10265;
state_10265 = G__10285;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10265){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto___10279,term_10278))
})();
var state__9683__auto__ = (function (){var statearr_10277 = f__9682__auto__.call(null);
(statearr_10277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto___10279);

return statearr_10277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto___10279,term_10278))
);


return false;
});
speicher.render.handle_new_word_submit = (function handle_new_word_submit(input_chan,e){
var form = speicher.render.serialize_form.call(null,e);
var c__9681__auto___10316 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto___10316,form){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto___10316,form){
return (function (state_10307){
var state_val_10308 = (state_10307[(1)]);
if((state_val_10308 === (2))){
var inst_10305 = (state_10307[(2)]);
var state_10307__$1 = state_10307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10307__$1,inst_10305);
} else {
if((state_val_10308 === (1))){
var inst_10301 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10302 = [new cljs.core.Keyword(null,"submit-selected","submit-selected",-548982554),form];
var inst_10303 = (new cljs.core.PersistentVector(null,2,(5),inst_10301,inst_10302,null));
var state_10307__$1 = state_10307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10307__$1,(2),input_chan,inst_10303);
} else {
return null;
}
}
});})(c__9681__auto___10316,form))
;
return ((function (switch__9666__auto__,c__9681__auto___10316,form){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10312 = [null,null,null,null,null,null,null];
(statearr_10312[(0)] = state_machine__9667__auto__);

(statearr_10312[(1)] = (1));

return statearr_10312;
});
var state_machine__9667__auto____1 = (function (state_10307){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10313){if((e10313 instanceof Object)){
var ex__9670__auto__ = e10313;
var statearr_10314_10317 = state_10307;
(statearr_10314_10317[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10313;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10318 = state_10307;
state_10307 = G__10318;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10307){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto___10316,form))
})();
var state__9683__auto__ = (function (){var statearr_10315 = f__9682__auto__.call(null);
(statearr_10315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto___10316);

return statearr_10315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto___10316,form))
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
var c__9681__auto___10355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto___10355,ger,eng,g,e__$1){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto___10355,ger,eng,g,e__$1){
return (function (state_10346){
var state_val_10347 = (state_10346[(1)]);
if((state_val_10347 === (2))){
var inst_10344 = (state_10346[(2)]);
var state_10346__$1 = state_10346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10346__$1,inst_10344);
} else {
if((state_val_10347 === (1))){
var inst_10337 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10338 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10339 = [g,e__$1];
var inst_10340 = (new cljs.core.PersistentVector(null,2,(5),inst_10338,inst_10339,null));
var inst_10341 = [new cljs.core.Keyword(null,"submit-entered","submit-entered",-1080659330),inst_10340];
var inst_10342 = (new cljs.core.PersistentVector(null,2,(5),inst_10337,inst_10341,null));
var state_10346__$1 = state_10346;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10346__$1,(2),input_chan,inst_10342);
} else {
return null;
}
}
});})(c__9681__auto___10355,ger,eng,g,e__$1))
;
return ((function (switch__9666__auto__,c__9681__auto___10355,ger,eng,g,e__$1){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10351 = [null,null,null,null,null,null,null];
(statearr_10351[(0)] = state_machine__9667__auto__);

(statearr_10351[(1)] = (1));

return statearr_10351;
});
var state_machine__9667__auto____1 = (function (state_10346){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10352){if((e10352 instanceof Object)){
var ex__9670__auto__ = e10352;
var statearr_10353_10356 = state_10346;
(statearr_10353_10356[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10357 = state_10346;
state_10346 = G__10357;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10346){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto___10355,ger,eng,g,e__$1))
})();
var state__9683__auto__ = (function (){var statearr_10354 = f__9682__auto__.call(null);
(statearr_10354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto___10355);

return statearr_10354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto___10355,ger,eng,g,e__$1))
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
return (function (state_10365){
var state_val_10366 = (state_10365[(1)]);
if((state_val_10366 === (2))){
var inst_10363 = (state_10365[(2)]);
var state_10365__$1 = state_10365;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10365__$1,inst_10363);
} else {
if((state_val_10366 === (1))){
var inst_10358 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10359 = cljs.core.quot.call(null,idx,(2));
var inst_10360 = [new cljs.core.Keyword(null,"correct","correct",984806334),inst_10359];
var inst_10361 = (new cljs.core.PersistentVector(null,2,(5),inst_10358,inst_10360,null));
var state_10365__$1 = state_10365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10365__$1,(2),ch,inst_10361);
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
var statearr_10370 = [null,null,null,null,null,null,null];
(statearr_10370[(0)] = state_machine__9667__auto__);

(statearr_10370[(1)] = (1));

return statearr_10370;
});
var state_machine__9667__auto____1 = (function (state_10365){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10371){if((e10371 instanceof Object)){
var ex__9670__auto__ = e10371;
var statearr_10372_10374 = state_10365;
(statearr_10372_10374[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10375 = state_10365;
state_10365 = G__10375;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10365){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__))
})();
var state__9683__auto__ = (function (){var statearr_10373 = f__9682__auto__.call(null);
(statearr_10373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10373;
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
cljs.core.println.call(null,cljs.core.type.call(null,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state)));

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
speicher.render.SearchPage = quiescent.component.call(null,(function (p__10376){
var map__10377 = p__10376;
var map__10377__$1 = ((cljs.core.seq_QMARK_.call(null,map__10377))?cljs.core.apply.call(null,cljs.core.hash_map,map__10377):map__10377);
var dictionary = cljs.core.get.call(null,map__10377__$1,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
var input_chan = cljs.core.get.call(null,map__10377__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));

var handle_search = cljs.core.partial.call(null,speicher.render.handle_search_submit,input_chan);
var handle_new_word = cljs.core.partial.call(null,speicher.render.handle_new_word_submit,input_chan);
return quiescent.dom.div.call(null,null,speicher.render.Nav.call(null,"Enter German Word"),quiescent.dom.form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"searchbar",new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),handle_search], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"searchbar-input"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"name","name",1843675177),"search",new cljs.core.Keyword(null,"id","id",-1388402092),"term",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search"], null)),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"searchbar-clear"], null))),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"className","className",-1983287057),"button button-round"], null),">")),(cljs.core.truth_(dictionary)?quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"accordion-item list-block"], null),cljs.core.apply.call(null,quiescent.dom.ul,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,((function (handle_search,handle_new_word,map__10377,map__10377__$1,dictionary,input_chan){
return (function (ind,entry){
cljs.core.println.call(null,entry);

return speicher.render.SearchTableRow.call(null,ind,null,cljs.core.ffirst.call(null,entry),cljs.core.second.call(null,cljs.core.first.call(null,entry)));
});})(handle_search,handle_new_word,map__10377,map__10377__$1,dictionary,input_chan))
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
return (function (state_10388){
var state_val_10389 = (state_10388[(1)]);
if((state_val_10389 === (2))){
var inst_10386 = (state_10388[(2)]);
var state_10388__$1 = (function (){var statearr_10390 = state_10388;
(statearr_10390[(7)] = inst_10386);

return statearr_10390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10388__$1,false);
} else {
if((state_val_10389 === (1))){
var inst_10378 = new cljs.core.Keyword(null,"main-view","main-view",343997885).cljs$core$IFn$_invoke$arity$1(state);
var inst_10379 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_10380 = inst_10378.router;
var inst_10381 = inst_10380.loadPage("review.html");
var inst_10382 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10383 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_10384 = (new cljs.core.PersistentVector(null,2,(5),inst_10382,inst_10383,null));
var state_10388__$1 = (function (){var statearr_10391 = state_10388;
(statearr_10391[(8)] = inst_10381);

return statearr_10391;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10388__$1,(2),inst_10379,inst_10384);
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
var statearr_10395 = [null,null,null,null,null,null,null,null,null];
(statearr_10395[(0)] = state_machine__9667__auto__);

(statearr_10395[(1)] = (1));

return statearr_10395;
});
var state_machine__9667__auto____1 = (function (state_10388){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10396){if((e10396 instanceof Object)){
var ex__9670__auto__ = e10396;
var statearr_10397_10399 = state_10388;
(statearr_10397_10399[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10400 = state_10388;
state_10388 = G__10400;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10388){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__))
})();
var state__9683__auto__ = (function (){var statearr_10398 = f__9682__auto__.call(null);
(statearr_10398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10398;
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
speicher.render.Popup = quiescent.component.call(null,(function (p__10401){
var map__10402 = p__10401;
var map__10402__$1 = ((cljs.core.seq_QMARK_.call(null,map__10402))?cljs.core.apply.call(null,cljs.core.hash_map,map__10402):map__10402);
var ch = cljs.core.get.call(null,map__10402__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var handle_enter_word = cljs.core.partial.call(null,speicher.render.handle_enter_word_submit,ch);
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"popup popup-add"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block-title"], null),"Add Words"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-block"], null),quiescent.dom.form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),handle_enter_word,new cljs.core.Keyword(null,"name","name",1843675177),"new-word"], null),quiescent.dom.ul.call(null,null,quiescent.dom.li.call(null,null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-input"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"German Word",new cljs.core.Keyword(null,"name","name",1843675177),"ger",new cljs.core.Keyword(null,"id","id",-1388402092),"ger"], null)))))),quiescent.dom.li.call(null,null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-input"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"English Word",new cljs.core.Keyword(null,"name","name",1843675177),"eng",new cljs.core.Keyword(null,"id","id",-1388402092),"eng"], null))))))),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"row"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-50"], null),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"button button-big button-fill color-red close-popup"], null),"Cancel")),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-50"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Submit",new cljs.core.Keyword(null,"className","className",-1983287057),"close-popup button button-big button-fill color-green"], null)))))))));
}));
/**
* 
*/
speicher.render.HomePage = quiescent.component.call(null,(function (p__10403){
var map__10404 = p__10403;
var map__10404__$1 = ((cljs.core.seq_QMARK_.call(null,map__10404))?cljs.core.apply.call(null,cljs.core.hash_map,map__10404):map__10404);
var main_view = cljs.core.get.call(null,map__10404__$1,new cljs.core.Keyword(null,"main-view","main-view",343997885));
var input_chan = cljs.core.get.call(null,map__10404__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var load_page = ((function (map__10404,map__10404__$1,main_view,input_chan){
return (function load_page(file){
return main_view.router.loadPage(file);
});})(map__10404,map__10404__$1,main_view,input_chan))
;
return quiescent.dom.div.call(null,null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block-title"], null),"What would you like to do?"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-block"], null),quiescent.dom.ul.call(null,null,quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__10404,map__10404__$1,main_view,input_chan){
return (function (){
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__,map__10404,map__10404__$1,main_view,input_chan){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__,map__10404,map__10404__$1,main_view,input_chan){
return (function (state_10412){
var state_val_10413 = (state_10412[(1)]);
if((state_val_10413 === (2))){
var inst_10410 = (state_10412[(2)]);
var state_10412__$1 = state_10412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10412__$1,inst_10410);
} else {
if((state_val_10413 === (1))){
var inst_10405 = load_page.call(null,"review.html");
var inst_10406 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10407 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_10408 = (new cljs.core.PersistentVector(null,2,(5),inst_10406,inst_10407,null));
var state_10412__$1 = (function (){var statearr_10414 = state_10412;
(statearr_10414[(7)] = inst_10405);

return statearr_10414;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10412__$1,(2),input_chan,inst_10408);
} else {
return null;
}
}
});})(c__9681__auto__,map__10404,map__10404__$1,main_view,input_chan))
;
return ((function (switch__9666__auto__,c__9681__auto__,map__10404,map__10404__$1,main_view,input_chan){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10418 = [null,null,null,null,null,null,null,null];
(statearr_10418[(0)] = state_machine__9667__auto__);

(statearr_10418[(1)] = (1));

return statearr_10418;
});
var state_machine__9667__auto____1 = (function (state_10412){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10419){if((e10419 instanceof Object)){
var ex__9670__auto__ = e10419;
var statearr_10420_10433 = state_10412;
(statearr_10420_10433[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10434 = state_10412;
state_10412 = G__10434;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10412){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__,map__10404,map__10404__$1,main_view,input_chan))
})();
var state__9683__auto__ = (function (){var statearr_10421 = f__9682__auto__.call(null);
(statearr_10421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__,map__10404,map__10404__$1,main_view,input_chan))
);

return c__9681__auto__;
});})(map__10404,map__10404__$1,main_view,input_chan))
], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Review"))))),quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__10404,map__10404__$1,main_view,input_chan){
return (function (){
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__,map__10404,map__10404__$1,main_view,input_chan){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__,map__10404,map__10404__$1,main_view,input_chan){
return (function (state_10424){
var state_val_10425 = (state_10424[(1)]);
if((state_val_10425 === (1))){
var inst_10422 = load_page.call(null,"search.html");
var state_10424__$1 = state_10424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10424__$1,inst_10422);
} else {
return null;
}
});})(c__9681__auto__,map__10404,map__10404__$1,main_view,input_chan))
;
return ((function (switch__9666__auto__,c__9681__auto__,map__10404,map__10404__$1,main_view,input_chan){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10429 = [null,null,null,null,null,null,null];
(statearr_10429[(0)] = state_machine__9667__auto__);

(statearr_10429[(1)] = (1));

return statearr_10429;
});
var state_machine__9667__auto____1 = (function (state_10424){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10430){if((e10430 instanceof Object)){
var ex__9670__auto__ = e10430;
var statearr_10431_10435 = state_10424;
(statearr_10431_10435[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10436 = state_10424;
state_10424 = G__10436;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10424){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__,map__10404,map__10404__$1,main_view,input_chan))
})();
var state__9683__auto__ = (function (){var statearr_10432 = f__9682__auto__.call(null);
(statearr_10432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__,map__10404,map__10404__$1,main_view,input_chan))
);

return c__9681__auto__;
});})(map__10404,map__10404__$1,main_view,input_chan))
], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Look up new word in Dictionary"))))),quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Enter new word and definition"))))))));
}));
/**
* The root of the application
*/
speicher.render.Page = quiescent.component.call(null,(function (state){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var pred__10437 = cljs.core._EQ_;
var expr__10438 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__10437.call(null,new cljs.core.Keyword(null,"review-list","review-list",-2126749986),expr__10438))){
return speicher.render.ReviewPage.call(null,state);
} else {
if(cljs.core.truth_(pred__10437.call(null,new cljs.core.Keyword(null,"next","next",-117701485),expr__10438))){
return speicher.render.NextPage.call(null,state);
} else {
if(cljs.core.truth_(pred__10437.call(null,new cljs.core.Keyword(null,"search-page","search-page",-705609891),expr__10438))){
return speicher.render.SearchPage.call(null,state);
} else {
return speicher.render.WordList.call(null,state,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state));
}
}
}
})());
}));
var render_pending_QMARK__10478 = cljs.core.atom.call(null,false);
/**
* Render the given application state tree.
*/
speicher.render.request_render = ((function (render_pending_QMARK__10478){
return (function request_render(state){
if(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK__10478,false,true)){
window.requestAnimationFrame(((function (render_pending_QMARK__10478){
return (function (){
var temp__4126__auto___10479 = document.getElementById("popup");
if(cljs.core.truth_(temp__4126__auto___10479)){
var el_10480 = temp__4126__auto___10479;
quiescent.render.call(null,speicher.render.Popup.call(null,state),el_10480);
} else {
}

var pred__10459 = cljs.core._EQ_;
var expr__10460 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__10459.call(null,new cljs.core.Keyword(null,"show-list","show-list",-483536849),expr__10460))){
return quiescent.render.call(null,speicher.render.WordList.call(null,state),document.getElementById("show-page"));
} else {
if(cljs.core.truth_(pred__10459.call(null,new cljs.core.Keyword(null,"review-list","review-list",-2126749986),expr__10460))){
quiescent.render.call(null,speicher.render.ReviewPage.call(null,state),document.getElementById("swiper"));

if(cljs.core.truth_((function (){var and__7437__auto__ = new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__7437__auto__)){
return new cljs.core.Keyword(null,"swiper-init?","swiper-init?",65165134).cljs$core$IFn$_invoke$arity$1(state) === false;
} else {
return and__7437__auto__;
}
})())){
var c__9681__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9681__auto__,pred__10459,expr__10460,render_pending_QMARK__10478){
return (function (){
var f__9682__auto__ = (function (){var switch__9666__auto__ = ((function (c__9681__auto__,pred__10459,expr__10460,render_pending_QMARK__10478){
return (function (state_10469){
var state_val_10470 = (state_10469[(1)]);
if((state_val_10470 === (2))){
var inst_10467 = (state_10469[(2)]);
var state_10469__$1 = state_10469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10469__$1,inst_10467);
} else {
if((state_val_10470 === (1))){
var inst_10462 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_10463 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10464 = [new cljs.core.Keyword(null,"init-swiper","init-swiper",998548847),null];
var inst_10465 = (new cljs.core.PersistentVector(null,2,(5),inst_10463,inst_10464,null));
var state_10469__$1 = state_10469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10469__$1,(2),inst_10462,inst_10465);
} else {
return null;
}
}
});})(c__9681__auto__,pred__10459,expr__10460,render_pending_QMARK__10478))
;
return ((function (switch__9666__auto__,c__9681__auto__,pred__10459,expr__10460,render_pending_QMARK__10478){
return (function() {
var state_machine__9667__auto__ = null;
var state_machine__9667__auto____0 = (function (){
var statearr_10474 = [null,null,null,null,null,null,null];
(statearr_10474[(0)] = state_machine__9667__auto__);

(statearr_10474[(1)] = (1));

return statearr_10474;
});
var state_machine__9667__auto____1 = (function (state_10469){
while(true){
var ret_value__9668__auto__ = (function (){try{while(true){
var result__9669__auto__ = switch__9666__auto__.call(null,state_10469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9669__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9669__auto__;
}
break;
}
}catch (e10475){if((e10475 instanceof Object)){
var ex__9670__auto__ = e10475;
var statearr_10476_10481 = state_10469;
(statearr_10476_10481[(5)] = ex__9670__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9668__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10482 = state_10469;
state_10469 = G__10482;
continue;
} else {
return ret_value__9668__auto__;
}
break;
}
});
state_machine__9667__auto__ = function(state_10469){
switch(arguments.length){
case 0:
return state_machine__9667__auto____0.call(this);
case 1:
return state_machine__9667__auto____1.call(this,state_10469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9667__auto____0;
state_machine__9667__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9667__auto____1;
return state_machine__9667__auto__;
})()
;})(switch__9666__auto__,c__9681__auto__,pred__10459,expr__10460,render_pending_QMARK__10478))
})();
var state__9683__auto__ = (function (){var statearr_10477 = f__9682__auto__.call(null);
(statearr_10477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9681__auto__);

return statearr_10477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9683__auto__);
});})(c__9681__auto__,pred__10459,expr__10460,render_pending_QMARK__10478))
);

return c__9681__auto__;
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__10459.call(null,new cljs.core.Keyword(null,"search-page","search-page",-705609891),expr__10460))){
return quiescent.render.call(null,speicher.render.SearchPage.call(null,state),document.getElementById("search-page"));
} else {
if(cljs.core.truth_(pred__10459.call(null,new cljs.core.Keyword(null,"next","next",-117701485),expr__10460))){
return speicher.render.NextPage.call(null,state);
} else {
if(cljs.core.truth_(pred__10459.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__10460))){
return speicher.render.WordList.call(null,state,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state),document.getElementById("nav-options"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10460)].join('')));
}
}
}
}
}
});})(render_pending_QMARK__10478))
);

return cljs.core.reset_BANG_.call(null,render_pending_QMARK__10478,false);
} else {
return null;
}
});})(render_pending_QMARK__10478))
;

//# sourceMappingURL=render.js.map?rel=1423857060093