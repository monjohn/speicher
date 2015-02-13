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
return clojure.walk.keywordize_keys.call(null,cljs.core.reduce.call(null,(function (p1__14253_SHARP_,p2__14252_SHARP_){
var k = p2__14252_SHARP_.name;
var v = p2__14252_SHARP_.value;
return cljs.core.assoc.call(null,p1__14253_SHARP_,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__14251_SHARP_){
return p1__14251_SHARP_.checked;
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
return quiescent.dom.div.call(null,null,speicher.render.Nav.call(null,"Review"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"accordion-list list-block"], null),cljs.core.apply.call(null,quiescent.dom.ul,null,cljs.core.map.call(null,(function (p1__14254_SHARP_){
return speicher.render.Wordrow.call(null,p1__14254_SHARP_,input_chan);
}),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state))))));
}));
speicher.render.handle_search_submit = (function handle_search_submit(input_chan,e){
var term_14305 = document.getElementById("term").value;
var c__9740__auto___14306 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto___14306,term_14305){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto___14306,term_14305){
return (function (state_14292){
var state_val_14293 = (state_14292[(1)]);
if((state_val_14293 === (5))){
var inst_14287 = (state_14292[(2)]);
var state_14292__$1 = state_14292;
var statearr_14294_14307 = state_14292__$1;
(statearr_14294_14307[(2)] = inst_14287);

(statearr_14294_14307[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (4))){
var inst_14290 = (state_14292[(2)]);
var state_14292__$1 = state_14292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14292__$1,inst_14290);
} else {
if((state_val_14293 === (3))){
var state_14292__$1 = state_14292;
var statearr_14295_14308 = state_14292__$1;
(statearr_14295_14308[(2)] = null);

(statearr_14295_14308[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14293 === (2))){
var inst_14283 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14284 = [new cljs.core.Keyword(null,"search-term","search-term",356193544),term_14305];
var inst_14285 = (new cljs.core.PersistentVector(null,2,(5),inst_14283,inst_14284,null));
var state_14292__$1 = state_14292;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14292__$1,(5),input_chan,inst_14285);
} else {
if((state_val_14293 === (1))){
var inst_14280 = cljs.core.count.call(null,term_14305);
var inst_14281 = ((2) < inst_14280);
var state_14292__$1 = state_14292;
if(cljs.core.truth_(inst_14281)){
var statearr_14296_14309 = state_14292__$1;
(statearr_14296_14309[(1)] = (2));

} else {
var statearr_14297_14310 = state_14292__$1;
(statearr_14297_14310[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__9740__auto___14306,term_14305))
;
return ((function (switch__9684__auto__,c__9740__auto___14306,term_14305){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14301 = [null,null,null,null,null,null,null];
(statearr_14301[(0)] = state_machine__9685__auto__);

(statearr_14301[(1)] = (1));

return statearr_14301;
});
var state_machine__9685__auto____1 = (function (state_14292){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14302){if((e14302 instanceof Object)){
var ex__9688__auto__ = e14302;
var statearr_14303_14311 = state_14292;
(statearr_14303_14311[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14312 = state_14292;
state_14292 = G__14312;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14292){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto___14306,term_14305))
})();
var state__9742__auto__ = (function (){var statearr_14304 = f__9741__auto__.call(null);
(statearr_14304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto___14306);

return statearr_14304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto___14306,term_14305))
);


return false;
});
speicher.render.handle_new_word_submit = (function handle_new_word_submit(input_chan,e){
var form = speicher.render.serialize_form.call(null,e);
var c__9740__auto___14343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto___14343,form){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto___14343,form){
return (function (state_14334){
var state_val_14335 = (state_14334[(1)]);
if((state_val_14335 === (2))){
var inst_14332 = (state_14334[(2)]);
var state_14334__$1 = state_14334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14334__$1,inst_14332);
} else {
if((state_val_14335 === (1))){
var inst_14328 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14329 = [new cljs.core.Keyword(null,"submit-selected","submit-selected",-548982554),form];
var inst_14330 = (new cljs.core.PersistentVector(null,2,(5),inst_14328,inst_14329,null));
var state_14334__$1 = state_14334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14334__$1,(2),input_chan,inst_14330);
} else {
return null;
}
}
});})(c__9740__auto___14343,form))
;
return ((function (switch__9684__auto__,c__9740__auto___14343,form){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14339 = [null,null,null,null,null,null,null];
(statearr_14339[(0)] = state_machine__9685__auto__);

(statearr_14339[(1)] = (1));

return statearr_14339;
});
var state_machine__9685__auto____1 = (function (state_14334){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14340){if((e14340 instanceof Object)){
var ex__9688__auto__ = e14340;
var statearr_14341_14344 = state_14334;
(statearr_14341_14344[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14345 = state_14334;
state_14334 = G__14345;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14334){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto___14343,form))
})();
var state__9742__auto__ = (function (){var statearr_14342 = f__9741__auto__.call(null);
(statearr_14342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto___14343);

return statearr_14342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto___14343,form))
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
var c__9740__auto___14382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto___14382,ger,eng,g,e__$1){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto___14382,ger,eng,g,e__$1){
return (function (state_14373){
var state_val_14374 = (state_14373[(1)]);
if((state_val_14374 === (2))){
var inst_14371 = (state_14373[(2)]);
var state_14373__$1 = state_14373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14373__$1,inst_14371);
} else {
if((state_val_14374 === (1))){
var inst_14364 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14365 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14366 = [g,e__$1];
var inst_14367 = (new cljs.core.PersistentVector(null,2,(5),inst_14365,inst_14366,null));
var inst_14368 = [new cljs.core.Keyword(null,"submit-entered","submit-entered",-1080659330),inst_14367];
var inst_14369 = (new cljs.core.PersistentVector(null,2,(5),inst_14364,inst_14368,null));
var state_14373__$1 = state_14373;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14373__$1,(2),input_chan,inst_14369);
} else {
return null;
}
}
});})(c__9740__auto___14382,ger,eng,g,e__$1))
;
return ((function (switch__9684__auto__,c__9740__auto___14382,ger,eng,g,e__$1){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14378 = [null,null,null,null,null,null,null];
(statearr_14378[(0)] = state_machine__9685__auto__);

(statearr_14378[(1)] = (1));

return statearr_14378;
});
var state_machine__9685__auto____1 = (function (state_14373){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14379){if((e14379 instanceof Object)){
var ex__9688__auto__ = e14379;
var statearr_14380_14383 = state_14373;
(statearr_14380_14383[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14384 = state_14373;
state_14373 = G__14384;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14373){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto___14382,ger,eng,g,e__$1))
})();
var state__9742__auto__ = (function (){var statearr_14381 = f__9741__auto__.call(null);
(statearr_14381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto___14382);

return statearr_14381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto___14382,ger,eng,g,e__$1))
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
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__){
return (function (state_14392){
var state_val_14393 = (state_14392[(1)]);
if((state_val_14393 === (2))){
var inst_14390 = (state_14392[(2)]);
var state_14392__$1 = state_14392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14392__$1,inst_14390);
} else {
if((state_val_14393 === (1))){
var inst_14385 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14386 = cljs.core.quot.call(null,idx,(2));
var inst_14387 = [new cljs.core.Keyword(null,"correct","correct",984806334),inst_14386];
var inst_14388 = (new cljs.core.PersistentVector(null,2,(5),inst_14385,inst_14387,null));
var state_14392__$1 = state_14392;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14392__$1,(2),ch,inst_14388);
} else {
return null;
}
}
});})(c__9740__auto__))
;
return ((function (switch__9684__auto__,c__9740__auto__){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14397 = [null,null,null,null,null,null,null];
(statearr_14397[(0)] = state_machine__9685__auto__);

(statearr_14397[(1)] = (1));

return statearr_14397;
});
var state_machine__9685__auto____1 = (function (state_14392){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14398){if((e14398 instanceof Object)){
var ex__9688__auto__ = e14398;
var statearr_14399_14401 = state_14392;
(statearr_14399_14401[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14402 = state_14392;
state_14392 = G__14402;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14392){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__))
})();
var state__9742__auto__ = (function (){var statearr_14400 = f__9741__auto__.call(null);
(statearr_14400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_14400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__))
);

return c__9740__auto__;
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
speicher.render.SearchPage = quiescent.component.call(null,(function (p__14403){
var map__14404 = p__14403;
var map__14404__$1 = ((cljs.core.seq_QMARK_.call(null,map__14404))?cljs.core.apply.call(null,cljs.core.hash_map,map__14404):map__14404);
var dictionary = cljs.core.get.call(null,map__14404__$1,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
var input_chan = cljs.core.get.call(null,map__14404__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));

var handle_search = cljs.core.partial.call(null,speicher.render.handle_search_submit,input_chan);
var handle_new_word = cljs.core.partial.call(null,speicher.render.handle_new_word_submit,input_chan);
return quiescent.dom.div.call(null,null,speicher.render.Nav.call(null,"Enter German Word"),quiescent.dom.form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"searchbar",new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),handle_search], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"searchbar-input"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"name","name",1843675177),"search",new cljs.core.Keyword(null,"id","id",-1388402092),"term",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search"], null)),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"searchbar-clear"], null))),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"className","className",-1983287057),"button button-round"], null),">")),(cljs.core.truth_(dictionary)?quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"accordion-item list-block"], null),cljs.core.apply.call(null,quiescent.dom.ul,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,((function (handle_search,handle_new_word,map__14404,map__14404__$1,dictionary,input_chan){
return (function (ind,entry){
cljs.core.println.call(null,entry);

return speicher.render.SearchTableRow.call(null,ind,null,cljs.core.ffirst.call(null,entry),cljs.core.second.call(null,cljs.core.first.call(null,entry)));
});})(handle_search,handle_new_word,map__14404,map__14404__$1,dictionary,input_chan))
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
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__){
return (function (state_14415){
var state_val_14416 = (state_14415[(1)]);
if((state_val_14416 === (2))){
var inst_14413 = (state_14415[(2)]);
var state_14415__$1 = (function (){var statearr_14417 = state_14415;
(statearr_14417[(7)] = inst_14413);

return statearr_14417;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14415__$1,false);
} else {
if((state_val_14416 === (1))){
var inst_14405 = new cljs.core.Keyword(null,"main-view","main-view",343997885).cljs$core$IFn$_invoke$arity$1(state);
var inst_14406 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_14407 = inst_14405.router;
var inst_14408 = inst_14407.loadPage("review.html");
var inst_14409 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14410 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_14411 = (new cljs.core.PersistentVector(null,2,(5),inst_14409,inst_14410,null));
var state_14415__$1 = (function (){var statearr_14418 = state_14415;
(statearr_14418[(8)] = inst_14408);

return statearr_14418;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14415__$1,(2),inst_14406,inst_14411);
} else {
return null;
}
}
});})(c__9740__auto__))
;
return ((function (switch__9684__auto__,c__9740__auto__){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14422 = [null,null,null,null,null,null,null,null,null];
(statearr_14422[(0)] = state_machine__9685__auto__);

(statearr_14422[(1)] = (1));

return statearr_14422;
});
var state_machine__9685__auto____1 = (function (state_14415){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14423){if((e14423 instanceof Object)){
var ex__9688__auto__ = e14423;
var statearr_14424_14426 = state_14415;
(statearr_14424_14426[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14427 = state_14415;
state_14415 = G__14427;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14415){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__))
})();
var state__9742__auto__ = (function (){var statearr_14425 = f__9741__auto__.call(null);
(statearr_14425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_14425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__))
);

return c__9740__auto__;
})], null),"Show List ");
}));
/**
* 
*/
speicher.render.Popup = quiescent.component.call(null,(function (p__14428){
var map__14429 = p__14428;
var map__14429__$1 = ((cljs.core.seq_QMARK_.call(null,map__14429))?cljs.core.apply.call(null,cljs.core.hash_map,map__14429):map__14429);
var ch = cljs.core.get.call(null,map__14429__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var handle_enter_word = cljs.core.partial.call(null,speicher.render.handle_enter_word_submit,ch);
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"popup popup-add"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block-title"], null),"Add Words"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-block"], null),quiescent.dom.form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),handle_enter_word,new cljs.core.Keyword(null,"name","name",1843675177),"new-word"], null),quiescent.dom.ul.call(null,null,quiescent.dom.li.call(null,null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-input"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"German Word",new cljs.core.Keyword(null,"name","name",1843675177),"ger",new cljs.core.Keyword(null,"id","id",-1388402092),"ger"], null)))))),quiescent.dom.li.call(null,null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-input"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"English Word",new cljs.core.Keyword(null,"name","name",1843675177),"eng",new cljs.core.Keyword(null,"id","id",-1388402092),"eng"], null))))))),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"row"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-50"], null),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"button button-big button-fill color-red close-popup"], null),"Cancel")),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-50"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Submit",new cljs.core.Keyword(null,"className","className",-1983287057),"close-popup button button-big button-fill color-green"], null)))))))));
}));
/**
* 
*/
speicher.render.HomePage = quiescent.component.call(null,(function (p__14430){
var map__14431 = p__14430;
var map__14431__$1 = ((cljs.core.seq_QMARK_.call(null,map__14431))?cljs.core.apply.call(null,cljs.core.hash_map,map__14431):map__14431);
var main_view = cljs.core.get.call(null,map__14431__$1,new cljs.core.Keyword(null,"main-view","main-view",343997885));
var input_chan = cljs.core.get.call(null,map__14431__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var load_page = ((function (map__14431,map__14431__$1,main_view,input_chan){
return (function load_page(file){
return main_view.router.loadPage(file);
});})(map__14431,map__14431__$1,main_view,input_chan))
;
return quiescent.dom.div.call(null,null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block-title"], null),"What would you like to do?"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-block"], null),quiescent.dom.ul.call(null,null,quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__14431,map__14431__$1,main_view,input_chan){
return (function (){
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__,map__14431,map__14431__$1,main_view,input_chan){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__,map__14431,map__14431__$1,main_view,input_chan){
return (function (state_14439){
var state_val_14440 = (state_14439[(1)]);
if((state_val_14440 === (2))){
var inst_14437 = (state_14439[(2)]);
var state_14439__$1 = state_14439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14439__$1,inst_14437);
} else {
if((state_val_14440 === (1))){
var inst_14432 = load_page.call(null,"review.html");
var inst_14433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14434 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_14435 = (new cljs.core.PersistentVector(null,2,(5),inst_14433,inst_14434,null));
var state_14439__$1 = (function (){var statearr_14441 = state_14439;
(statearr_14441[(7)] = inst_14432);

return statearr_14441;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14439__$1,(2),input_chan,inst_14435);
} else {
return null;
}
}
});})(c__9740__auto__,map__14431,map__14431__$1,main_view,input_chan))
;
return ((function (switch__9684__auto__,c__9740__auto__,map__14431,map__14431__$1,main_view,input_chan){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14445 = [null,null,null,null,null,null,null,null];
(statearr_14445[(0)] = state_machine__9685__auto__);

(statearr_14445[(1)] = (1));

return statearr_14445;
});
var state_machine__9685__auto____1 = (function (state_14439){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14446){if((e14446 instanceof Object)){
var ex__9688__auto__ = e14446;
var statearr_14447_14460 = state_14439;
(statearr_14447_14460[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14461 = state_14439;
state_14439 = G__14461;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14439){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__,map__14431,map__14431__$1,main_view,input_chan))
})();
var state__9742__auto__ = (function (){var statearr_14448 = f__9741__auto__.call(null);
(statearr_14448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_14448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__,map__14431,map__14431__$1,main_view,input_chan))
);

return c__9740__auto__;
});})(map__14431,map__14431__$1,main_view,input_chan))
], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Review"))))),quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__14431,map__14431__$1,main_view,input_chan){
return (function (){
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__,map__14431,map__14431__$1,main_view,input_chan){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__,map__14431,map__14431__$1,main_view,input_chan){
return (function (state_14451){
var state_val_14452 = (state_14451[(1)]);
if((state_val_14452 === (1))){
var inst_14449 = load_page.call(null,"search.html");
var state_14451__$1 = state_14451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14451__$1,inst_14449);
} else {
return null;
}
});})(c__9740__auto__,map__14431,map__14431__$1,main_view,input_chan))
;
return ((function (switch__9684__auto__,c__9740__auto__,map__14431,map__14431__$1,main_view,input_chan){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14456 = [null,null,null,null,null,null,null];
(statearr_14456[(0)] = state_machine__9685__auto__);

(statearr_14456[(1)] = (1));

return statearr_14456;
});
var state_machine__9685__auto____1 = (function (state_14451){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14457){if((e14457 instanceof Object)){
var ex__9688__auto__ = e14457;
var statearr_14458_14462 = state_14451;
(statearr_14458_14462[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14463 = state_14451;
state_14451 = G__14463;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14451){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__,map__14431,map__14431__$1,main_view,input_chan))
})();
var state__9742__auto__ = (function (){var statearr_14459 = f__9741__auto__.call(null);
(statearr_14459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_14459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__,map__14431,map__14431__$1,main_view,input_chan))
);

return c__9740__auto__;
});})(map__14431,map__14431__$1,main_view,input_chan))
], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Look up new word in Dictionary"))))),quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Enter new word and definition"))))))));
}));
/**
* The root of the application
*/
speicher.render.Page = quiescent.component.call(null,(function (state){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var pred__14464 = cljs.core._EQ_;
var expr__14465 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__14464.call(null,new cljs.core.Keyword(null,"review-list","review-list",-2126749986),expr__14465))){
return speicher.render.ReviewPage.call(null,state);
} else {
if(cljs.core.truth_(pred__14464.call(null,new cljs.core.Keyword(null,"next","next",-117701485),expr__14465))){
return speicher.render.NextPage.call(null,state);
} else {
if(cljs.core.truth_(pred__14464.call(null,new cljs.core.Keyword(null,"search-page","search-page",-705609891),expr__14465))){
return speicher.render.SearchPage.call(null,state);
} else {
return speicher.render.WordList.call(null,state,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state));
}
}
}
})());
}));
var render_pending_QMARK__14505 = cljs.core.atom.call(null,false);
/**
* Render the given application state tree.
*/
speicher.render.request_render = ((function (render_pending_QMARK__14505){
return (function request_render(state){
if(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK__14505,false,true)){
window.requestAnimationFrame(((function (render_pending_QMARK__14505){
return (function (){
var temp__4126__auto___14506 = document.getElementById("popup");
if(cljs.core.truth_(temp__4126__auto___14506)){
var el_14507 = temp__4126__auto___14506;
quiescent.render.call(null,speicher.render.Popup.call(null,state),el_14507);
} else {
}

var pred__14486 = cljs.core._EQ_;
var expr__14487 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__14486.call(null,new cljs.core.Keyword(null,"show-list","show-list",-483536849),expr__14487))){
return quiescent.render.call(null,speicher.render.WordList.call(null,state),document.getElementById("show-page"));
} else {
if(cljs.core.truth_(pred__14486.call(null,new cljs.core.Keyword(null,"review-list","review-list",-2126749986),expr__14487))){
quiescent.render.call(null,speicher.render.ReviewPage.call(null,state),document.getElementById("swiper"));

if(cljs.core.truth_((function (){var and__7437__auto__ = new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__7437__auto__)){
return new cljs.core.Keyword(null,"swiper-init?","swiper-init?",65165134).cljs$core$IFn$_invoke$arity$1(state) === false;
} else {
return and__7437__auto__;
}
})())){
var c__9740__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9740__auto__,pred__14486,expr__14487,render_pending_QMARK__14505){
return (function (){
var f__9741__auto__ = (function (){var switch__9684__auto__ = ((function (c__9740__auto__,pred__14486,expr__14487,render_pending_QMARK__14505){
return (function (state_14496){
var state_val_14497 = (state_14496[(1)]);
if((state_val_14497 === (2))){
var inst_14494 = (state_14496[(2)]);
var state_14496__$1 = state_14496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14496__$1,inst_14494);
} else {
if((state_val_14497 === (1))){
var inst_14489 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_14490 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14491 = [new cljs.core.Keyword(null,"init-swiper","init-swiper",998548847),null];
var inst_14492 = (new cljs.core.PersistentVector(null,2,(5),inst_14490,inst_14491,null));
var state_14496__$1 = state_14496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14496__$1,(2),inst_14489,inst_14492);
} else {
return null;
}
}
});})(c__9740__auto__,pred__14486,expr__14487,render_pending_QMARK__14505))
;
return ((function (switch__9684__auto__,c__9740__auto__,pred__14486,expr__14487,render_pending_QMARK__14505){
return (function() {
var state_machine__9685__auto__ = null;
var state_machine__9685__auto____0 = (function (){
var statearr_14501 = [null,null,null,null,null,null,null];
(statearr_14501[(0)] = state_machine__9685__auto__);

(statearr_14501[(1)] = (1));

return statearr_14501;
});
var state_machine__9685__auto____1 = (function (state_14496){
while(true){
var ret_value__9686__auto__ = (function (){try{while(true){
var result__9687__auto__ = switch__9684__auto__.call(null,state_14496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9687__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9687__auto__;
}
break;
}
}catch (e14502){if((e14502 instanceof Object)){
var ex__9688__auto__ = e14502;
var statearr_14503_14508 = state_14496;
(statearr_14503_14508[(5)] = ex__9688__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9686__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14509 = state_14496;
state_14496 = G__14509;
continue;
} else {
return ret_value__9686__auto__;
}
break;
}
});
state_machine__9685__auto__ = function(state_14496){
switch(arguments.length){
case 0:
return state_machine__9685__auto____0.call(this);
case 1:
return state_machine__9685__auto____1.call(this,state_14496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9685__auto____0;
state_machine__9685__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9685__auto____1;
return state_machine__9685__auto__;
})()
;})(switch__9684__auto__,c__9740__auto__,pred__14486,expr__14487,render_pending_QMARK__14505))
})();
var state__9742__auto__ = (function (){var statearr_14504 = f__9741__auto__.call(null);
(statearr_14504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9740__auto__);

return statearr_14504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9742__auto__);
});})(c__9740__auto__,pred__14486,expr__14487,render_pending_QMARK__14505))
);

return c__9740__auto__;
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__14486.call(null,new cljs.core.Keyword(null,"search-page","search-page",-705609891),expr__14487))){
return quiescent.render.call(null,speicher.render.SearchPage.call(null,state),document.getElementById("search-page"));
} else {
if(cljs.core.truth_(pred__14486.call(null,new cljs.core.Keyword(null,"next","next",-117701485),expr__14487))){
return speicher.render.NextPage.call(null,state);
} else {
if(cljs.core.truth_(pred__14486.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__14487))){
return speicher.render.WordList.call(null,state,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state),document.getElementById("nav-options"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__14487)].join('')));
}
}
}
}
}
});})(render_pending_QMARK__14505))
);

return cljs.core.reset_BANG_.call(null,render_pending_QMARK__14505,false);
} else {
return null;
}
});})(render_pending_QMARK__14505))
;

//# sourceMappingURL=render.js.map?rel=1423859527476