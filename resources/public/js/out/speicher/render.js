// Compiled by ClojureScript 0.0-2850 {}
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
return clojure.walk.keywordize_keys.call(null,cljs.core.reduce.call(null,(function (p1__6142_SHARP_,p2__6141_SHARP_){
var k = p2__6141_SHARP_.name;
var v = p2__6141_SHARP_.value;
return cljs.core.assoc.call(null,p1__6142_SHARP_,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__6140_SHARP_){
return p1__6140_SHARP_.checked;
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
return quiescent.dom.div.call(null,null,speicher.render.Nav.call(null,"Review"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"accordion-list list-block"], null),cljs.core.apply.call(null,quiescent.dom.ul,null,cljs.core.map.call(null,(function (p1__6143_SHARP_){
return speicher.render.Wordrow.call(null,p1__6143_SHARP_,input_chan);
}),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state))))));
}));
speicher.render.handle_search_submit = (function handle_search_submit(input_chan,e){
var term_6194 = document.getElementById("term").value;
var c__6061__auto___6195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto___6195,term_6194){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto___6195,term_6194){
return (function (state_6181){
var state_val_6182 = (state_6181[(1)]);
if((state_val_6182 === (5))){
var inst_6176 = (state_6181[(2)]);
var state_6181__$1 = state_6181;
var statearr_6183_6196 = state_6181__$1;
(statearr_6183_6196[(2)] = inst_6176);

(statearr_6183_6196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6182 === (4))){
var inst_6179 = (state_6181[(2)]);
var state_6181__$1 = state_6181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6181__$1,inst_6179);
} else {
if((state_val_6182 === (3))){
var state_6181__$1 = state_6181;
var statearr_6184_6197 = state_6181__$1;
(statearr_6184_6197[(2)] = null);

(statearr_6184_6197[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6182 === (2))){
var inst_6172 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6173 = [new cljs.core.Keyword(null,"search-term","search-term",356193544),term_6194];
var inst_6174 = (new cljs.core.PersistentVector(null,2,(5),inst_6172,inst_6173,null));
var state_6181__$1 = state_6181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6181__$1,(5),input_chan,inst_6174);
} else {
if((state_val_6182 === (1))){
var inst_6169 = cljs.core.count.call(null,term_6194);
var inst_6170 = ((2) < inst_6169);
var state_6181__$1 = state_6181;
if(cljs.core.truth_(inst_6170)){
var statearr_6185_6198 = state_6181__$1;
(statearr_6185_6198[(1)] = (2));

} else {
var statearr_6186_6199 = state_6181__$1;
(statearr_6186_6199[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__6061__auto___6195,term_6194))
;
return ((function (switch__6046__auto__,c__6061__auto___6195,term_6194){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6190 = [null,null,null,null,null,null,null];
(statearr_6190[(0)] = state_machine__6047__auto__);

(statearr_6190[(1)] = (1));

return statearr_6190;
});
var state_machine__6047__auto____1 = (function (state_6181){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6191){if((e6191 instanceof Object)){
var ex__6050__auto__ = e6191;
var statearr_6192_6200 = state_6181;
(statearr_6192_6200[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6191;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6201 = state_6181;
state_6181 = G__6201;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6181){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto___6195,term_6194))
})();
var state__6063__auto__ = (function (){var statearr_6193 = f__6062__auto__.call(null);
(statearr_6193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto___6195);

return statearr_6193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto___6195,term_6194))
);


return false;
});
speicher.render.handle_new_word_submit = (function handle_new_word_submit(input_chan,e){
var form = speicher.render.serialize_form.call(null,e);
var c__6061__auto___6232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto___6232,form){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto___6232,form){
return (function (state_6223){
var state_val_6224 = (state_6223[(1)]);
if((state_val_6224 === (2))){
var inst_6221 = (state_6223[(2)]);
var state_6223__$1 = state_6223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6223__$1,inst_6221);
} else {
if((state_val_6224 === (1))){
var inst_6217 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6218 = [new cljs.core.Keyword(null,"submit-selected","submit-selected",-548982554),form];
var inst_6219 = (new cljs.core.PersistentVector(null,2,(5),inst_6217,inst_6218,null));
var state_6223__$1 = state_6223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6223__$1,(2),input_chan,inst_6219);
} else {
return null;
}
}
});})(c__6061__auto___6232,form))
;
return ((function (switch__6046__auto__,c__6061__auto___6232,form){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6228 = [null,null,null,null,null,null,null];
(statearr_6228[(0)] = state_machine__6047__auto__);

(statearr_6228[(1)] = (1));

return statearr_6228;
});
var state_machine__6047__auto____1 = (function (state_6223){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6229){if((e6229 instanceof Object)){
var ex__6050__auto__ = e6229;
var statearr_6230_6233 = state_6223;
(statearr_6230_6233[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6234 = state_6223;
state_6223 = G__6234;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6223){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto___6232,form))
})();
var state__6063__auto__ = (function (){var statearr_6231 = f__6062__auto__.call(null);
(statearr_6231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto___6232);

return statearr_6231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto___6232,form))
);


return false;
});
speicher.render.handle_enter_word_submit = (function handle_enter_word_submit(input_chan,e){
var ger = document.getElementById("ger");
var eng = document.getElementById("eng");
var g = ger.value;
var e__$1 = eng.value;
if(cljs.core.truth_((function (){var or__3829__auto__ = clojure.string.blank_QMARK_.call(null,g);
if(cljs.core.truth_(or__3829__auto__)){
return or__3829__auto__;
} else {
return clojure.string.blank_QMARK_.call(null,e__$1);
}
})())){
} else {
var c__6061__auto___6271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto___6271,ger,eng,g,e__$1){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto___6271,ger,eng,g,e__$1){
return (function (state_6262){
var state_val_6263 = (state_6262[(1)]);
if((state_val_6263 === (2))){
var inst_6260 = (state_6262[(2)]);
var state_6262__$1 = state_6262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6262__$1,inst_6260);
} else {
if((state_val_6263 === (1))){
var inst_6253 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6254 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6255 = [g,e__$1];
var inst_6256 = (new cljs.core.PersistentVector(null,2,(5),inst_6254,inst_6255,null));
var inst_6257 = [new cljs.core.Keyword(null,"submit-entered","submit-entered",-1080659330),inst_6256];
var inst_6258 = (new cljs.core.PersistentVector(null,2,(5),inst_6253,inst_6257,null));
var state_6262__$1 = state_6262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6262__$1,(2),input_chan,inst_6258);
} else {
return null;
}
}
});})(c__6061__auto___6271,ger,eng,g,e__$1))
;
return ((function (switch__6046__auto__,c__6061__auto___6271,ger,eng,g,e__$1){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6267 = [null,null,null,null,null,null,null];
(statearr_6267[(0)] = state_machine__6047__auto__);

(statearr_6267[(1)] = (1));

return statearr_6267;
});
var state_machine__6047__auto____1 = (function (state_6262){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6268){if((e6268 instanceof Object)){
var ex__6050__auto__ = e6268;
var statearr_6269_6272 = state_6262;
(statearr_6269_6272[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6273 = state_6262;
state_6262 = G__6273;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6262){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto___6271,ger,eng,g,e__$1))
})();
var state__6063__auto__ = (function (){var statearr_6270 = f__6062__auto__.call(null);
(statearr_6270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto___6271);

return statearr_6270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto___6271,ger,eng,g,e__$1))
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
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__){
return (function (state_6281){
var state_val_6282 = (state_6281[(1)]);
if((state_val_6282 === (2))){
var inst_6279 = (state_6281[(2)]);
var state_6281__$1 = state_6281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6281__$1,inst_6279);
} else {
if((state_val_6282 === (1))){
var inst_6274 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6275 = cljs.core.quot.call(null,idx,(2));
var inst_6276 = [new cljs.core.Keyword(null,"correct","correct",984806334),inst_6275];
var inst_6277 = (new cljs.core.PersistentVector(null,2,(5),inst_6274,inst_6276,null));
var state_6281__$1 = state_6281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6281__$1,(2),ch,inst_6277);
} else {
return null;
}
}
});})(c__6061__auto__))
;
return ((function (switch__6046__auto__,c__6061__auto__){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6286 = [null,null,null,null,null,null,null];
(statearr_6286[(0)] = state_machine__6047__auto__);

(statearr_6286[(1)] = (1));

return statearr_6286;
});
var state_machine__6047__auto____1 = (function (state_6281){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6287){if((e6287 instanceof Object)){
var ex__6050__auto__ = e6287;
var statearr_6288_6290 = state_6281;
(statearr_6288_6290[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6291 = state_6281;
state_6281 = G__6291;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6281){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__))
})();
var state__6063__auto__ = (function (){var statearr_6289 = f__6062__auto__.call(null);
(statearr_6289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_6289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__))
);

return c__6061__auto__;
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
speicher.render.SearchPage = quiescent.component.call(null,(function (p__6292){
var map__6293 = p__6292;
var map__6293__$1 = ((cljs.core.seq_QMARK_.call(null,map__6293))?cljs.core.apply.call(null,cljs.core.hash_map,map__6293):map__6293);
var dictionary = cljs.core.get.call(null,map__6293__$1,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
var input_chan = cljs.core.get.call(null,map__6293__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));

var handle_search = cljs.core.partial.call(null,speicher.render.handle_search_submit,input_chan);
var handle_new_word = cljs.core.partial.call(null,speicher.render.handle_new_word_submit,input_chan);
return quiescent.dom.div.call(null,null,speicher.render.Nav.call(null,"Enter German Word"),quiescent.dom.form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"searchbar",new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),handle_search], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"searchbar-input"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"search",new cljs.core.Keyword(null,"name","name",1843675177),"search",new cljs.core.Keyword(null,"id","id",-1388402092),"term",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Search"], null)),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"searchbar-clear"], null))),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"className","className",-1983287057),"button button-round"], null),">")),(cljs.core.truth_(dictionary)?quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"accordion-item list-block"], null),cljs.core.apply.call(null,quiescent.dom.ul,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,((function (handle_search,handle_new_word,map__6293,map__6293__$1,dictionary,input_chan){
return (function (ind,entry){
cljs.core.println.call(null,"Search Page",entry);

return speicher.render.SearchTableRow.call(null,ind,null,cljs.core.ffirst.call(null,entry),cljs.core.second.call(null,cljs.core.first.call(null,entry)));
});})(handle_search,handle_new_word,map__6293,map__6293__$1,dictionary,input_chan))
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
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__){
return (function (state_6304){
var state_val_6305 = (state_6304[(1)]);
if((state_val_6305 === (2))){
var inst_6302 = (state_6304[(2)]);
var state_6304__$1 = (function (){var statearr_6306 = state_6304;
(statearr_6306[(7)] = inst_6302);

return statearr_6306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6304__$1,false);
} else {
if((state_val_6305 === (1))){
var inst_6294 = new cljs.core.Keyword(null,"main-view","main-view",343997885).cljs$core$IFn$_invoke$arity$1(state);
var inst_6295 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_6296 = inst_6294.router;
var inst_6297 = inst_6296.loadPage("review.html");
var inst_6298 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6299 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_6300 = (new cljs.core.PersistentVector(null,2,(5),inst_6298,inst_6299,null));
var state_6304__$1 = (function (){var statearr_6307 = state_6304;
(statearr_6307[(8)] = inst_6297);

return statearr_6307;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6304__$1,(2),inst_6295,inst_6300);
} else {
return null;
}
}
});})(c__6061__auto__))
;
return ((function (switch__6046__auto__,c__6061__auto__){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6311 = [null,null,null,null,null,null,null,null,null];
(statearr_6311[(0)] = state_machine__6047__auto__);

(statearr_6311[(1)] = (1));

return statearr_6311;
});
var state_machine__6047__auto____1 = (function (state_6304){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6312){if((e6312 instanceof Object)){
var ex__6050__auto__ = e6312;
var statearr_6313_6315 = state_6304;
(statearr_6313_6315[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6316 = state_6304;
state_6304 = G__6316;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6304){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__))
})();
var state__6063__auto__ = (function (){var statearr_6314 = f__6062__auto__.call(null);
(statearr_6314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_6314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__))
);

return c__6061__auto__;
})], null),"Show List ");
}));
/**
* 
*/
speicher.render.Popup = quiescent.component.call(null,(function (p__6317){
var map__6318 = p__6317;
var map__6318__$1 = ((cljs.core.seq_QMARK_.call(null,map__6318))?cljs.core.apply.call(null,cljs.core.hash_map,map__6318):map__6318);
var ch = cljs.core.get.call(null,map__6318__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var handle_enter_word = cljs.core.partial.call(null,speicher.render.handle_enter_word_submit,ch);
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"popup popup-add"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block-title"], null),"Add Words"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-block"], null),quiescent.dom.form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),handle_enter_word,new cljs.core.Keyword(null,"name","name",1843675177),"new-word"], null),quiescent.dom.ul.call(null,null,quiescent.dom.li.call(null,null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-input"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"German Word",new cljs.core.Keyword(null,"name","name",1843675177),"ger",new cljs.core.Keyword(null,"id","id",-1388402092),"ger"], null)))))),quiescent.dom.li.call(null,null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-input"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"English Word",new cljs.core.Keyword(null,"name","name",1843675177),"eng",new cljs.core.Keyword(null,"id","id",-1388402092),"eng"], null))))))),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"row"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-50"], null),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"button button-big button-fill color-red close-popup"], null),"Cancel")),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"col-50"], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),"Submit",new cljs.core.Keyword(null,"className","className",-1983287057),"close-popup button button-big button-fill color-green"], null)))))))));
}));
/**
* 
*/
speicher.render.HomePage = quiescent.component.call(null,(function (p__6319){
var map__6320 = p__6319;
var map__6320__$1 = ((cljs.core.seq_QMARK_.call(null,map__6320))?cljs.core.apply.call(null,cljs.core.hash_map,map__6320):map__6320);
var main_view = cljs.core.get.call(null,map__6320__$1,new cljs.core.Keyword(null,"main-view","main-view",343997885));
var input_chan = cljs.core.get.call(null,map__6320__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var load_page = ((function (map__6320,map__6320__$1,main_view,input_chan){
return (function load_page(file){
return main_view.router.loadPage(file);
});})(map__6320,map__6320__$1,main_view,input_chan))
;
return quiescent.dom.div.call(null,null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block-title"], null),"What would you like to do?"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-block"], null),quiescent.dom.ul.call(null,null,quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__6320,map__6320__$1,main_view,input_chan){
return (function (){
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan){
return (function (state_6328){
var state_val_6329 = (state_6328[(1)]);
if((state_val_6329 === (2))){
var inst_6326 = (state_6328[(2)]);
var state_6328__$1 = state_6328;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6328__$1,inst_6326);
} else {
if((state_val_6329 === (1))){
var inst_6321 = load_page.call(null,"review.html");
var inst_6322 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6323 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_6324 = (new cljs.core.PersistentVector(null,2,(5),inst_6322,inst_6323,null));
var state_6328__$1 = (function (){var statearr_6330 = state_6328;
(statearr_6330[(7)] = inst_6321);

return statearr_6330;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6328__$1,(2),input_chan,inst_6324);
} else {
return null;
}
}
});})(c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan))
;
return ((function (switch__6046__auto__,c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6334 = [null,null,null,null,null,null,null,null];
(statearr_6334[(0)] = state_machine__6047__auto__);

(statearr_6334[(1)] = (1));

return statearr_6334;
});
var state_machine__6047__auto____1 = (function (state_6328){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6328);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6335){if((e6335 instanceof Object)){
var ex__6050__auto__ = e6335;
var statearr_6336_6366 = state_6328;
(statearr_6336_6366[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6367 = state_6328;
state_6328 = G__6367;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6328){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan))
})();
var state__6063__auto__ = (function (){var statearr_6337 = f__6062__auto__.call(null);
(statearr_6337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_6337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan))
);

return c__6061__auto__;
});})(map__6320,map__6320__$1,main_view,input_chan))
], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Review Daily List"))))),quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__6320,map__6320__$1,main_view,input_chan){
return (function (){
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan){
return (function (state_6345){
var state_val_6346 = (state_6345[(1)]);
if((state_val_6346 === (2))){
var inst_6343 = (state_6345[(2)]);
var state_6345__$1 = state_6345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6345__$1,inst_6343);
} else {
if((state_val_6346 === (1))){
var inst_6338 = load_page.call(null,"review.html");
var inst_6339 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6340 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"weekly","weekly",319200344)];
var inst_6341 = (new cljs.core.PersistentVector(null,2,(5),inst_6339,inst_6340,null));
var state_6345__$1 = (function (){var statearr_6347 = state_6345;
(statearr_6347[(7)] = inst_6338);

return statearr_6347;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6345__$1,(2),input_chan,inst_6341);
} else {
return null;
}
}
});})(c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan))
;
return ((function (switch__6046__auto__,c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6351 = [null,null,null,null,null,null,null,null];
(statearr_6351[(0)] = state_machine__6047__auto__);

(statearr_6351[(1)] = (1));

return statearr_6351;
});
var state_machine__6047__auto____1 = (function (state_6345){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6352){if((e6352 instanceof Object)){
var ex__6050__auto__ = e6352;
var statearr_6353_6368 = state_6345;
(statearr_6353_6368[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6369 = state_6345;
state_6345 = G__6369;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6345){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan))
})();
var state__6063__auto__ = (function (){var statearr_6354 = f__6062__auto__.call(null);
(statearr_6354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_6354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan))
);

return c__6061__auto__;
});})(map__6320,map__6320__$1,main_view,input_chan))
], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Review Weekly List"))))),quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__6320,map__6320__$1,main_view,input_chan){
return (function (){
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan){
return (function (state_6357){
var state_val_6358 = (state_6357[(1)]);
if((state_val_6358 === (1))){
var inst_6355 = load_page.call(null,"search.html");
var state_6357__$1 = state_6357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6357__$1,inst_6355);
} else {
return null;
}
});})(c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan))
;
return ((function (switch__6046__auto__,c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6362 = [null,null,null,null,null,null,null];
(statearr_6362[(0)] = state_machine__6047__auto__);

(statearr_6362[(1)] = (1));

return statearr_6362;
});
var state_machine__6047__auto____1 = (function (state_6357){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6363){if((e6363 instanceof Object)){
var ex__6050__auto__ = e6363;
var statearr_6364_6370 = state_6357;
(statearr_6364_6370[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6371 = state_6357;
state_6357 = G__6371;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6357){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan))
})();
var state__6063__auto__ = (function (){var statearr_6365 = f__6062__auto__.call(null);
(statearr_6365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_6365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__,map__6320,map__6320__$1,main_view,input_chan))
);

return c__6061__auto__;
});})(map__6320,map__6320__$1,main_view,input_chan))
], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Look up new word in Dictionary"))))),quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Enter new word and definition"))))))));
}));
/**
* The root of the application
*/
speicher.render.Page = quiescent.component.call(null,(function (state){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var pred__6372 = cljs.core._EQ_;
var expr__6373 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__6372.call(null,new cljs.core.Keyword(null,"review-list","review-list",-2126749986),expr__6373))){
return speicher.render.ReviewPage.call(null,state);
} else {
if(cljs.core.truth_(pred__6372.call(null,new cljs.core.Keyword(null,"next","next",-117701485),expr__6373))){
return speicher.render.NextPage.call(null,state);
} else {
if(cljs.core.truth_(pred__6372.call(null,new cljs.core.Keyword(null,"search-page","search-page",-705609891),expr__6373))){
return speicher.render.SearchPage.call(null,state);
} else {
return speicher.render.WordList.call(null,state,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state));
}
}
}
})());
}));
var render_pending_QMARK__6413 = cljs.core.atom.call(null,false);
/**
* Render the given application state tree.
*/
speicher.render.request_render = ((function (render_pending_QMARK__6413){
return (function request_render(state){
if(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK__6413,false,true)){
window.requestAnimationFrame(((function (render_pending_QMARK__6413){
return (function (){
var temp__4126__auto___6414 = document.getElementById("popup");
if(cljs.core.truth_(temp__4126__auto___6414)){
var el_6415 = temp__4126__auto___6414;
quiescent.render.call(null,speicher.render.Popup.call(null,state),el_6415);
} else {
}

var pred__6394 = cljs.core._EQ_;
var expr__6395 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__6394.call(null,new cljs.core.Keyword(null,"show-list","show-list",-483536849),expr__6395))){
return quiescent.render.call(null,speicher.render.WordList.call(null,state),document.getElementById("show-page"));
} else {
if(cljs.core.truth_(pred__6394.call(null,new cljs.core.Keyword(null,"review-list","review-list",-2126749986),expr__6395))){
quiescent.render.call(null,speicher.render.ReviewPage.call(null,state),document.getElementById("swiper"));

if(cljs.core.truth_((function (){var and__3817__auto__ = new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(and__3817__auto__)){
return new cljs.core.Keyword(null,"swiper-init?","swiper-init?",65165134).cljs$core$IFn$_invoke$arity$1(state) === false;
} else {
return and__3817__auto__;
}
})())){
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__,pred__6394,expr__6395,render_pending_QMARK__6413){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__,pred__6394,expr__6395,render_pending_QMARK__6413){
return (function (state_6404){
var state_val_6405 = (state_6404[(1)]);
if((state_val_6405 === (2))){
var inst_6402 = (state_6404[(2)]);
var state_6404__$1 = state_6404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6404__$1,inst_6402);
} else {
if((state_val_6405 === (1))){
var inst_6397 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_6398 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6399 = [new cljs.core.Keyword(null,"init-swiper","init-swiper",998548847),null];
var inst_6400 = (new cljs.core.PersistentVector(null,2,(5),inst_6398,inst_6399,null));
var state_6404__$1 = state_6404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6404__$1,(2),inst_6397,inst_6400);
} else {
return null;
}
}
});})(c__6061__auto__,pred__6394,expr__6395,render_pending_QMARK__6413))
;
return ((function (switch__6046__auto__,c__6061__auto__,pred__6394,expr__6395,render_pending_QMARK__6413){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6409 = [null,null,null,null,null,null,null];
(statearr_6409[(0)] = state_machine__6047__auto__);

(statearr_6409[(1)] = (1));

return statearr_6409;
});
var state_machine__6047__auto____1 = (function (state_6404){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6410){if((e6410 instanceof Object)){
var ex__6050__auto__ = e6410;
var statearr_6411_6416 = state_6404;
(statearr_6411_6416[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6417 = state_6404;
state_6404 = G__6417;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6404){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__,pred__6394,expr__6395,render_pending_QMARK__6413))
})();
var state__6063__auto__ = (function (){var statearr_6412 = f__6062__auto__.call(null);
(statearr_6412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_6412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__,pred__6394,expr__6395,render_pending_QMARK__6413))
);

return c__6061__auto__;
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__6394.call(null,new cljs.core.Keyword(null,"search-page","search-page",-705609891),expr__6395))){
return quiescent.render.call(null,speicher.render.SearchPage.call(null,state),document.getElementById("search-page"));
} else {
if(cljs.core.truth_(pred__6394.call(null,new cljs.core.Keyword(null,"next","next",-117701485),expr__6395))){
return speicher.render.NextPage.call(null,state);
} else {
if(cljs.core.truth_(pred__6394.call(null,new cljs.core.Keyword(null,"start","start",-355208981),expr__6395))){
return speicher.render.WordList.call(null,state,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state),document.getElementById("nav-options"));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__6395)].join('')));
}
}
}
}
}
});})(render_pending_QMARK__6413))
);

return cljs.core.reset_BANG_.call(null,render_pending_QMARK__6413,false);
} else {
return null;
}
});})(render_pending_QMARK__6413))
;
