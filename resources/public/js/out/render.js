// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('render')) {
goog.provide('render');
}
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('quiescent.dom');
goog.require('quiescent');
goog.require('cljs.reader');
goog.require('cljs.core.async');
render.data = cljs.core.list("lernen | lernend | gelernt | ich lerne | du lernst | er/sie lernt | ich/er/sie lernte | er/sie hat/hatte gelernt | deutsch lernen :: to learn {learned, learnt; learned, learnt} | learning | learned; learnt | I learn | you learn | he/she learns | I/he/she learned; I/he/she learnt | he/she has/had learned; he/she has/had learnt | to learn German","lernen; sich aneignen; aufschnappen :: to pick up");
render.toArray = (function toArray(js_col){
return cljs.core.js__GT_clj.call(null,cljs.core.clj__GT_js.call(null,cljs.core.PersistentVector.EMPTY).slice.call(js_col));
});
render.serialize_form = (function serialize_form(e){
return clojure.walk.keywordize_keys.call(null,cljs.core.reduce.call(null,(function (p1__26841_SHARP_,p2__26840_SHARP_){
var k = p2__26840_SHARP_.name;
var v = p2__26840_SHARP_.value;
return cljs.core.assoc.call(null,p1__26841_SHARP_,k,v);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__26839_SHARP_){
return p1__26839_SHARP_.checked;
}),render.toArray.call(null,e.target.elements))));
});
/**
* 
*/
render.Nav = quiescent.component.call(null,(function (state,title){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"navbar"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"navbar-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"left"], null),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"back link"], null),quiescent.dom.i.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon icon-back"], null)),quiescent.dom.span.call(null,null,"Back"))),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"center",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),"22px"], null)], null),title),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"right"], null),quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"contact.html",new cljs.core.Keyword(null,"className","className",-1983287057),"link icon-only"], null),quiescent.dom.i.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"icon icon-plus"], null),"+")))));
}));
/**
* The components for the words
*/
render.Word = quiescent.component.call(null,(function (state,input_chan){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.p.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"german"], null),"German Word"),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"clear-completed",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var c__5980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto__){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto__){
return (function (state_26848){
var state_val_26849 = (state_26848[(1)]);
if((state_val_26849 === (2))){
var inst_26846 = (state_26848[(2)]);
var state_26848__$1 = state_26848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26848__$1,inst_26846);
} else {
if((state_val_26849 === (1))){
var inst_26842 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26843 = [new cljs.core.Keyword(null,"right","right",-452581833),null];
var inst_26844 = (new cljs.core.PersistentVector(null,2,(5),inst_26842,inst_26843,null));
var state_26848__$1 = state_26848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26848__$1,(2),input_chan,inst_26844);
} else {
return null;
}
}
});})(c__5980__auto__))
;
return ((function (switch__5965__auto__,c__5980__auto__){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_26853 = [null,null,null,null,null,null,null];
(statearr_26853[(0)] = state_machine__5966__auto__);

(statearr_26853[(1)] = (1));

return statearr_26853;
});
var state_machine__5966__auto____1 = (function (state_26848){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_26848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e26854){if((e26854 instanceof Object)){
var ex__5969__auto__ = e26854;
var statearr_26855_26857 = state_26848;
(statearr_26855_26857[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26858 = state_26848;
state_26848 = G__26858;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_26848){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_26848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto__))
})();
var state__5982__auto__ = (function (){var statearr_26856 = f__5981__auto__.call(null);
(statearr_26856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto__);

return statearr_26856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto__))
);

return c__5980__auto__;
})], null),"Recognized it"));
}));
/**
* 
*/
render.Wordrow = quiescent.component.call(null,(function (row,input_chan){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.dt.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.first.call(null,row)),quiescent.dom.dd.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.second.call(null,row)));
}));
/**
* A list of words rendered in table
*/
render.WordTable = quiescent.component.call(null,(function (state,input_chan){
return quiescent.dom.div.call(null,null,render.Nav.call(null,state,"Review"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"page-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block"], null),cljs.core.apply.call(null,quiescent.dom.dl,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block-inner"], null),cljs.core.map.call(null,(function (p1__26859_SHARP_){
return render.Wordrow.call(null,p1__26859_SHARP_,input_chan);
}),new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state))))));
}));
render.handle_search_submit = (function handle_search_submit(input_chan,e){
var term_26910 = document.getElementById("term").value;
var c__5980__auto___26911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto___26911,term_26910){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto___26911,term_26910){
return (function (state_26897){
var state_val_26898 = (state_26897[(1)]);
if((state_val_26898 === (5))){
var inst_26892 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
var statearr_26899_26912 = state_26897__$1;
(statearr_26899_26912[(2)] = inst_26892);

(statearr_26899_26912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (4))){
var inst_26895 = (state_26897[(2)]);
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26897__$1,inst_26895);
} else {
if((state_val_26898 === (3))){
var state_26897__$1 = state_26897;
var statearr_26900_26913 = state_26897__$1;
(statearr_26900_26913[(2)] = null);

(statearr_26900_26913[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26898 === (2))){
var inst_26888 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26889 = [new cljs.core.Keyword(null,"search-term","search-term",356193544),term_26910];
var inst_26890 = (new cljs.core.PersistentVector(null,2,(5),inst_26888,inst_26889,null));
var state_26897__$1 = state_26897;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26897__$1,(5),input_chan,inst_26890);
} else {
if((state_val_26898 === (1))){
var inst_26885 = cljs.core.count.call(null,term_26910);
var inst_26886 = ((2) < inst_26885);
var state_26897__$1 = state_26897;
if(cljs.core.truth_(inst_26886)){
var statearr_26901_26914 = state_26897__$1;
(statearr_26901_26914[(1)] = (2));

} else {
var statearr_26902_26915 = state_26897__$1;
(statearr_26902_26915[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__5980__auto___26911,term_26910))
;
return ((function (switch__5965__auto__,c__5980__auto___26911,term_26910){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_26906 = [null,null,null,null,null,null,null];
(statearr_26906[(0)] = state_machine__5966__auto__);

(statearr_26906[(1)] = (1));

return statearr_26906;
});
var state_machine__5966__auto____1 = (function (state_26897){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_26897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e26907){if((e26907 instanceof Object)){
var ex__5969__auto__ = e26907;
var statearr_26908_26916 = state_26897;
(statearr_26908_26916[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26917 = state_26897;
state_26897 = G__26917;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_26897){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_26897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto___26911,term_26910))
})();
var state__5982__auto__ = (function (){var statearr_26909 = f__5981__auto__.call(null);
(statearr_26909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto___26911);

return statearr_26909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto___26911,term_26910))
);


return false;
});
render.handle_new_word_submit = (function handle_new_word_submit(input_chan,e){
var form = render.serialize_form.call(null,e);
var c__5980__auto___26948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto___26948,form){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto___26948,form){
return (function (state_26939){
var state_val_26940 = (state_26939[(1)]);
if((state_val_26940 === (2))){
var inst_26937 = (state_26939[(2)]);
var state_26939__$1 = state_26939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26939__$1,inst_26937);
} else {
if((state_val_26940 === (1))){
var inst_26933 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26934 = [new cljs.core.Keyword(null,"submit-selected","submit-selected",-548982554),form];
var inst_26935 = (new cljs.core.PersistentVector(null,2,(5),inst_26933,inst_26934,null));
var state_26939__$1 = state_26939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26939__$1,(2),input_chan,inst_26935);
} else {
return null;
}
}
});})(c__5980__auto___26948,form))
;
return ((function (switch__5965__auto__,c__5980__auto___26948,form){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_26944 = [null,null,null,null,null,null,null];
(statearr_26944[(0)] = state_machine__5966__auto__);

(statearr_26944[(1)] = (1));

return statearr_26944;
});
var state_machine__5966__auto____1 = (function (state_26939){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_26939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e26945){if((e26945 instanceof Object)){
var ex__5969__auto__ = e26945;
var statearr_26946_26949 = state_26939;
(statearr_26946_26949[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26950 = state_26939;
state_26939 = G__26950;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_26939){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_26939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto___26948,form))
})();
var state__5982__auto__ = (function (){var statearr_26947 = f__5981__auto__.call(null);
(statearr_26947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto___26948);

return statearr_26947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto___26948,form))
);


return false;
});
render.handle_enter_word_submit = (function handle_enter_word_submit(input_chan,_){
var ger_26987 = document.getElementById("ger").value;
var eng_26988 = document.getElementById("eng").value;
var c__5980__auto___26989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto___26989,ger_26987,eng_26988){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto___26989,ger_26987,eng_26988){
return (function (state_26978){
var state_val_26979 = (state_26978[(1)]);
if((state_val_26979 === (2))){
var inst_26976 = (state_26978[(2)]);
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26978__$1,inst_26976);
} else {
if((state_val_26979 === (1))){
var inst_26969 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26970 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26971 = [ger_26987,eng_26988];
var inst_26972 = (new cljs.core.PersistentVector(null,2,(5),inst_26970,inst_26971,null));
var inst_26973 = [new cljs.core.Keyword(null,"submit-entered","submit-entered",-1080659330),inst_26972];
var inst_26974 = (new cljs.core.PersistentVector(null,2,(5),inst_26969,inst_26973,null));
var state_26978__$1 = state_26978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26978__$1,(2),input_chan,inst_26974);
} else {
return null;
}
}
});})(c__5980__auto___26989,ger_26987,eng_26988))
;
return ((function (switch__5965__auto__,c__5980__auto___26989,ger_26987,eng_26988){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_26983 = [null,null,null,null,null,null,null];
(statearr_26983[(0)] = state_machine__5966__auto__);

(statearr_26983[(1)] = (1));

return statearr_26983;
});
var state_machine__5966__auto____1 = (function (state_26978){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_26978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e26984){if((e26984 instanceof Object)){
var ex__5969__auto__ = e26984;
var statearr_26985_26990 = state_26978;
(statearr_26985_26990[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26991 = state_26978;
state_26978 = G__26991;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_26978){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_26978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto___26989,ger_26987,eng_26988))
})();
var state__5982__auto__ = (function (){var statearr_26986 = f__5981__auto__.call(null);
(statearr_26986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto___26989);

return statearr_26986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto___26989,ger_26987,eng_26988))
);


return false;
});
/**
* Takes entries, splits eng/ger in pairs,
* then splits the sublits and stiches them back together
*/
render.format_entry = (function format_entry(entry){
var pair = clojure.string.split.call(null,entry,/ :: /);
return cljs.core.map.call(null,((function (pair){
return (function (g,e){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[g,e],null));
});})(pair))
,clojure.string.split.call(null,cljs.core.first.call(null,pair),/ \|/),clojure.string.split.call(null,cljs.core.second.call(null,pair),/ \|/));
});
render.format_entries = (function format_entries(dict){
return cljs.core.map.call(null,render.format_entry,dict);
});
render.toggle = (function toggle(){
var g = document.getElementById("german");
var e = document.getElementById("english");
if(cljs.core._EQ_.call(null,(g["style"]["display"]),"block")){
(g["style"]["display"] = "none");
} else {
(g["style"]["display"] = "block");
}

if(cljs.core._EQ_.call(null,(e["style"]["display"]),"block")){
return (e["style"]["display"] = "none");
} else {
return (e["style"]["display"] = "block");
}
});
/**
* 
*/
render.ReviewPage = quiescent.component.call(null,(function (state){
var word = cljs.core.first.call(null,new cljs.core.Keyword(null,"words","words",1924933001).cljs$core$IFn$_invoke$arity$1(state));
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"card"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"german",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["display","block"], null)], null),quiescent.dom.h2.call(null,null,cljs.core.first.call(null,word)),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),render.toggle], null),"Show")),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"english",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, ["display","none"], null)], null),quiescent.dom.p.call(null,null,cljs.core.second.call(null,word)),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (word){
return (function (){
var c__5980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto__,word){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto__,word){
return (function (state_27000){
var state_val_27001 = (state_27000[(1)]);
if((state_val_27001 === (2))){
var inst_26998 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27000__$1,inst_26998);
} else {
if((state_val_27001 === (1))){
var inst_26992 = render.toggle.call(null);
var inst_26993 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_26994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26995 = [new cljs.core.Keyword(null,"answer","answer",-742633163),new cljs.core.Keyword(null,"right","right",-452581833)];
var inst_26996 = (new cljs.core.PersistentVector(null,2,(5),inst_26994,inst_26995,null));
var state_27000__$1 = (function (){var statearr_27002 = state_27000;
(statearr_27002[(7)] = inst_26992);

return statearr_27002;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27000__$1,(2),inst_26993,inst_26996);
} else {
return null;
}
}
});})(c__5980__auto__,word))
;
return ((function (switch__5965__auto__,c__5980__auto__,word){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_27006 = [null,null,null,null,null,null,null,null];
(statearr_27006[(0)] = state_machine__5966__auto__);

(statearr_27006[(1)] = (1));

return statearr_27006;
});
var state_machine__5966__auto____1 = (function (state_27000){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_27000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e27007){if((e27007 instanceof Object)){
var ex__5969__auto__ = e27007;
var statearr_27008_27028 = state_27000;
(statearr_27008_27028[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27029 = state_27000;
state_27000 = G__27029;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_27000){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_27000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto__,word))
})();
var state__5982__auto__ = (function (){var statearr_27009 = f__5981__auto__.call(null);
(statearr_27009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto__);

return statearr_27009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto__,word))
);

return c__5980__auto__;
});})(word))
], null),"I remember"),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (word){
return (function (){
var c__5980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto__,word){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto__,word){
return (function (state_27018){
var state_val_27019 = (state_27018[(1)]);
if((state_val_27019 === (2))){
var inst_27016 = (state_27018[(2)]);
var state_27018__$1 = state_27018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27018__$1,inst_27016);
} else {
if((state_val_27019 === (1))){
var inst_27010 = render.toggle.call(null);
var inst_27011 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_27012 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27013 = [new cljs.core.Keyword(null,"answer","answer",-742633163),new cljs.core.Keyword(null,"wrong","wrong",-1945918192)];
var inst_27014 = (new cljs.core.PersistentVector(null,2,(5),inst_27012,inst_27013,null));
var state_27018__$1 = (function (){var statearr_27020 = state_27018;
(statearr_27020[(7)] = inst_27010);

return statearr_27020;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27018__$1,(2),inst_27011,inst_27014);
} else {
return null;
}
}
});})(c__5980__auto__,word))
;
return ((function (switch__5965__auto__,c__5980__auto__,word){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_27024 = [null,null,null,null,null,null,null,null];
(statearr_27024[(0)] = state_machine__5966__auto__);

(statearr_27024[(1)] = (1));

return statearr_27024;
});
var state_machine__5966__auto____1 = (function (state_27018){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_27018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e27025){if((e27025 instanceof Object)){
var ex__5969__auto__ = e27025;
var statearr_27026_27030 = state_27018;
(statearr_27026_27030[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27031 = state_27018;
state_27018 = G__27031;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_27018){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_27018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto__,word))
})();
var state__5982__auto__ = (function (){var statearr_27027 = f__5981__auto__.call(null);
(statearr_27027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto__);

return statearr_27027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto__,word))
);

return c__5980__auto__;
});})(word))
], null),"Wrong-o")));
}));
/**
* 
*/
render.SearchTableRow = quiescent.component.call(null,(function (id,top_QMARK_,g,e){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.span.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"check-column"], null),(cljs.core.truth_(top_QMARK_)?quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"entry",new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(id)].join('')], null)):null)),quiescent.dom.span.call(null,cljs.core.PersistentArrayMap.EMPTY,g),quiescent.dom.span.call(null,cljs.core.PersistentArrayMap.EMPTY,e));
}));
/**
* 
*/
render.SearchPage = quiescent.component.call(null,(function (p__27032){
var map__27033 = p__27032;
var map__27033__$1 = ((cljs.core.seq_QMARK_.call(null,map__27033))?cljs.core.apply.call(null,cljs.core.hash_map,map__27033):map__27033);
var dictionary = cljs.core.get.call(null,map__27033__$1,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
var input_chan = cljs.core.get.call(null,map__27033__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));

var handle_search = cljs.core.partial.call(null,render.handle_search_submit,input_chan);
var handle_new_word = cljs.core.partial.call(null,render.handle_new_word_submit,input_chan);
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.form.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),"search",new cljs.core.Keyword(null,"id","id",-1388402092),"term",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"enter new word"], null)),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),handle_search], null),"Submit"),quiescent.dom.br.call(null),(cljs.core.truth_(dictionary)?quiescent.dom.form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),"#",new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),handle_new_word], null),quiescent.dom.fieldset.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.legend.call(null,cljs.core.PersistentArrayMap.EMPTY,"Pick the definition which fits best"),quiescent.dom.p.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.span.call(null,cljs.core.PersistentArrayMap.EMPTY,"Pick One "),quiescent.dom.span.call(null,cljs.core.PersistentArrayMap.EMPTY,"German "),quiescent.dom.span.call(null,cljs.core.PersistentArrayMap.EMPTY,"English ")),cljs.core.apply.call(null,quiescent.dom.div,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,((function (handle_search,handle_new_word,map__27033,map__27033__$1,dictionary,input_chan){
return (function (i0,entry){
return cljs.core.apply.call(null,quiescent.dom.p,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,((function (handle_search,handle_new_word,map__27033,map__27033__$1,dictionary,input_chan){
return (function (i1,p__27034){
var vec__27035 = p__27034;
var g = cljs.core.nth.call(null,vec__27035,(0),null);
var e = cljs.core.nth.call(null,vec__27035,(1),null);
return render.SearchTableRow.call(null,i0,(i1 === (0)),g,e);
});})(handle_search,handle_new_word,map__27033,map__27033__$1,dictionary,input_chan))
,entry));
});})(handle_search,handle_new_word,map__27033,map__27033__$1,dictionary,input_chan))
,render.format_entries.call(null,dictionary))))):null),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Submit")));
}));
/**
* 
*/
render.EnterPage = quiescent.component.call(null,(function (state){

var handle_enter_word = cljs.core.partial.call(null,render.handle_enter_word_submit,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state));
return quiescent.dom.div.call(null,null,quiescent.dom.form.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),"#",new cljs.core.Keyword(null,"onSubmit","onSubmit",761425194),handle_enter_word], null),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"ger",new cljs.core.Keyword(null,"id","id",-1388402092),"ger",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"German Word"], null)),quiescent.dom.input.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"name","name",1843675177),"eng",new cljs.core.Keyword(null,"id","id",-1388402092),"eng",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"English Definition"], null)),quiescent.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Submit")));
}));
/**
* 
*/
render.NextPage = quiescent.component.call(null,(function (state){
return quiescent.dom.h3.call(null,null,"Choose another list");
}));
/**
* 
*/
render.Link = quiescent.component.call(null,(function (state){
return quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),"link",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var c__5980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto__){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto__){
return (function (state_27046){
var state_val_27047 = (state_27046[(1)]);
if((state_val_27047 === (2))){
var inst_27044 = (state_27046[(2)]);
var state_27046__$1 = (function (){var statearr_27048 = state_27046;
(statearr_27048[(7)] = inst_27044);

return statearr_27048;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27046__$1,false);
} else {
if((state_val_27047 === (1))){
var inst_27036 = new cljs.core.Keyword(null,"main-view","main-view",343997885).cljs$core$IFn$_invoke$arity$1(state);
var inst_27037 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_27038 = inst_27036.router;
var inst_27039 = inst_27038.loadPage("review.html");
var inst_27040 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27041 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_27042 = (new cljs.core.PersistentVector(null,2,(5),inst_27040,inst_27041,null));
var state_27046__$1 = (function (){var statearr_27049 = state_27046;
(statearr_27049[(8)] = inst_27039);

return statearr_27049;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27046__$1,(2),inst_27037,inst_27042);
} else {
return null;
}
}
});})(c__5980__auto__))
;
return ((function (switch__5965__auto__,c__5980__auto__){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_27053 = [null,null,null,null,null,null,null,null,null];
(statearr_27053[(0)] = state_machine__5966__auto__);

(statearr_27053[(1)] = (1));

return statearr_27053;
});
var state_machine__5966__auto____1 = (function (state_27046){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_27046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e27054){if((e27054 instanceof Object)){
var ex__5969__auto__ = e27054;
var statearr_27055_27057 = state_27046;
(statearr_27055_27057[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27054;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27058 = state_27046;
state_27046 = G__27058;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_27046){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_27046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto__))
})();
var state__5982__auto__ = (function (){var statearr_27056 = f__5981__auto__.call(null);
(statearr_27056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto__);

return statearr_27056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto__))
);

return c__5980__auto__;
})], null),"Show List ");
}));
/**
* 
*/
render.HomePage = quiescent.component.call(null,(function (state){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"content-block-title"], null),"What about simple navigation?"),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"list-block"], null),quiescent.dom.ul.call(null,null,quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link",new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
var c__5980__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5980__auto__){
return (function (){
var f__5981__auto__ = (function (){var switch__5965__auto__ = ((function (c__5980__auto__){
return (function (state_27069){
var state_val_27070 = (state_27069[(1)]);
if((state_val_27070 === (2))){
var inst_27067 = (state_27069[(2)]);
var state_27069__$1 = (function (){var statearr_27071 = state_27069;
(statearr_27071[(7)] = inst_27067);

return statearr_27071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27069__$1,false);
} else {
if((state_val_27070 === (1))){
var inst_27059 = new cljs.core.Keyword(null,"main-view","main-view",343997885).cljs$core$IFn$_invoke$arity$1(state);
var inst_27060 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_27061 = inst_27059.router;
var inst_27062 = inst_27061.loadPage("review.html");
var inst_27063 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27064 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_27065 = (new cljs.core.PersistentVector(null,2,(5),inst_27063,inst_27064,null));
var state_27069__$1 = (function (){var statearr_27072 = state_27069;
(statearr_27072[(8)] = inst_27062);

return statearr_27072;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27069__$1,(2),inst_27060,inst_27065);
} else {
return null;
}
}
});})(c__5980__auto__))
;
return ((function (switch__5965__auto__,c__5980__auto__){
return (function() {
var state_machine__5966__auto__ = null;
var state_machine__5966__auto____0 = (function (){
var statearr_27076 = [null,null,null,null,null,null,null,null,null];
(statearr_27076[(0)] = state_machine__5966__auto__);

(statearr_27076[(1)] = (1));

return statearr_27076;
});
var state_machine__5966__auto____1 = (function (state_27069){
while(true){
var ret_value__5967__auto__ = (function (){try{while(true){
var result__5968__auto__ = switch__5965__auto__.call(null,state_27069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5968__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5968__auto__;
}
break;
}
}catch (e27077){if((e27077 instanceof Object)){
var ex__5969__auto__ = e27077;
var statearr_27078_27080 = state_27069;
(statearr_27078_27080[(5)] = ex__5969__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27077;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5967__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27081 = state_27069;
state_27069 = G__27081;
continue;
} else {
return ret_value__5967__auto__;
}
break;
}
});
state_machine__5966__auto__ = function(state_27069){
switch(arguments.length){
case 0:
return state_machine__5966__auto____0.call(this);
case 1:
return state_machine__5966__auto____1.call(this,state_27069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5966__auto____0;
state_machine__5966__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5966__auto____1;
return state_machine__5966__auto__;
})()
;})(switch__5965__auto__,c__5980__auto__))
})();
var state__5982__auto__ = (function (){var statearr_27079 = f__5981__auto__.call(null);
(statearr_27079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5980__auto__);

return statearr_27079;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5982__auto__);
});})(c__5980__auto__))
);

return c__5980__auto__;
})], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Review"))))),quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Look up new word in Dictionary"))))),quiescent.dom.li.call(null,null,quiescent.dom.a.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"#",new cljs.core.Keyword(null,"className","className",-1983287057),"item-link"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-content"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-inner"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"item-title"], null),"Enter new word and definition"))))))));
}));
/**
* The root of the application
*/
render.Page = quiescent.component.call(null,(function (state,ch){
return quiescent.dom.div.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var pred__27082 = cljs.core._EQ_;
var expr__27083 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(pred__27082.call(null,new cljs.core.Keyword(null,"enter-page","enter-page",-519644705),expr__27083))){
return render.EnterPage.call(null,state);
} else {
if(cljs.core.truth_(pred__27082.call(null,new cljs.core.Keyword(null,"review-list","review-list",-2126749986),expr__27083))){
return render.ReviewPage.call(null,state);
} else {
if(cljs.core.truth_(pred__27082.call(null,new cljs.core.Keyword(null,"next","next",-117701485),expr__27083))){
return render.NextPage.call(null,state);
} else {
if(cljs.core.truth_(pred__27082.call(null,new cljs.core.Keyword(null,"search-page","search-page",-705609891),expr__27083))){
return render.SearchPage.call(null,state);
} else {
return render.WordTable.call(null,state,ch);
}
}
}
}
})());
}));
var render_pending_QMARK__27085 = cljs.core.atom.call(null,false);
/**
* Render the given application state tree.
*/
render.request_render = ((function (render_pending_QMARK__27085){
return (function request_render(state){
if(cljs.core.compare_and_set_BANG_.call(null,render_pending_QMARK__27085,false,true)){
return window.requestAnimationFrame(((function (render_pending_QMARK__27085){
return (function (){
var temp__4126__auto___27086 = document.getElementById("nav-options");
if(cljs.core.truth_(temp__4126__auto___27086)){
var el_27087 = temp__4126__auto___27086;
quiescent.render.call(null,render.HomePage.call(null,state),el_27087);
} else {
}

var temp__4126__auto___27088 = document.getElementById("review-page");
if(cljs.core.truth_(temp__4126__auto___27088)){
var el_27089 = temp__4126__auto___27088;
quiescent.render.call(null,render.Page.call(null,state,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state)),el_27089);
} else {
}

return cljs.core.reset_BANG_.call(null,render_pending_QMARK__27085,false);
});})(render_pending_QMARK__27085))
);
} else {
return null;
}
});})(render_pending_QMARK__27085))
;

//# sourceMappingURL=render.js.map