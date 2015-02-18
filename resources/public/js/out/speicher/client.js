// Compiled by ClojureScript 0.0-2850 {}
goog.provide('speicher.client');
goog.require('cljs.core');
goog.require('speicher.render');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
speicher.client.fetch_list = (function fetch_list(state,kw){
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__){
return (function (state_6614){
var state_val_6615 = (state_6614[(1)]);
if((state_val_6615 === (3))){
var inst_6612 = (state_6614[(2)]);
var state_6614__$1 = state_6614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6614__$1,inst_6612);
} else {
if((state_val_6615 === (2))){
var inst_6603 = (state_6614[(7)]);
var inst_6607 = (state_6614[(2)]);
var inst_6608 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6609 = [new cljs.core.Keyword(null,"response","response",-1068424192),inst_6607];
var inst_6610 = (new cljs.core.PersistentVector(null,2,(5),inst_6608,inst_6609,null));
var state_6614__$1 = state_6614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6614__$1,(3),inst_6603,inst_6610);
} else {
if((state_val_6615 === (1))){
var inst_6603 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_6604 = [cljs.core.str("/list/"),cljs.core.str(kw)].join('');
var inst_6605 = cljs_http.client.get.call(null,inst_6604);
var state_6614__$1 = (function (){var statearr_6616 = state_6614;
(statearr_6616[(7)] = inst_6603);

return statearr_6616;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6614__$1,(2),inst_6605);
} else {
return null;
}
}
}
});})(c__6061__auto__))
;
return ((function (switch__6046__auto__,c__6061__auto__){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6620 = [null,null,null,null,null,null,null,null];
(statearr_6620[(0)] = state_machine__6047__auto__);

(statearr_6620[(1)] = (1));

return statearr_6620;
});
var state_machine__6047__auto____1 = (function (state_6614){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6621){if((e6621 instanceof Object)){
var ex__6050__auto__ = e6621;
var statearr_6622_6624 = state_6614;
(statearr_6622_6624[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6625 = state_6614;
state_6614 = G__6625;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6614){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__))
})();
var state__6063__auto__ = (function (){var statearr_6623 = f__6062__auto__.call(null);
(statearr_6623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_6623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__))
);

return c__6061__auto__;
});
speicher.client.level_limit = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"daily","daily",-697831483),(6),new cljs.core.Keyword(null,"weekly","weekly",319200344),(6),new cljs.core.Keyword(null,"monthly","monthly",1596693261),(11),new cljs.core.Keyword(null,"yearly","yearly",1010642817),(6)], null);
speicher.client.next_level = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"weekly","weekly",319200344),new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"monthly","monthly",1596693261),new cljs.core.Keyword(null,"yearly","yearly",1010642817)], null);
speicher.client.save_lists_BANG_ = (function save_lists_BANG_(p__6626){
var map__6652 = p__6626;
var map__6652__$1 = ((cljs.core.seq_QMARK_.call(null,map__6652))?cljs.core.apply.call(null,cljs.core.hash_map,map__6652):map__6652);
var state = map__6652__$1;
var input_chan = cljs.core.get.call(null,map__6652__$1,new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360));
var current_list = cljs.core.get.call(null,map__6652__$1,new cljs.core.Keyword(null,"current-list","current-list",1594473864));
var next_list = cljs.core.get.call(null,map__6652__$1,new cljs.core.Keyword(null,"next-list","next-list",138818716));
var words = cljs.core.get.call(null,map__6652__$1,new cljs.core.Keyword(null,"words","words",1924933001));
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__,map__6652,map__6652__$1,state,input_chan,current_list,next_list,words){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__,map__6652,map__6652__$1,state,input_chan,current_list,next_list,words){
return (function (state_6668){
var state_val_6669 = (state_6668[(1)]);
if((state_val_6669 === (3))){
var inst_6666 = (state_6668[(2)]);
var state_6668__$1 = state_6668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6668__$1,inst_6666);
} else {
if((state_val_6669 === (2))){
var inst_6661 = (state_6668[(2)]);
var inst_6662 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6663 = [new cljs.core.Keyword(null,"saved-list","saved-list",1333944303),inst_6661];
var inst_6664 = (new cljs.core.PersistentVector(null,2,(5),inst_6662,inst_6663,null));
var state_6668__$1 = state_6668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6668__$1,(3),input_chan,inst_6664);
} else {
if((state_val_6669 === (1))){
var inst_6653 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_6654 = [new cljs.core.Keyword(null,"current-list","current-list",1594473864),new cljs.core.Keyword(null,"answered","answered",-1524147020),new cljs.core.Keyword(null,"next-list","next-list",138818716)];
var inst_6655 = [current_list,words,next_list];
var inst_6656 = cljs.core.PersistentHashMap.fromArrays(inst_6654,inst_6655);
var inst_6657 = [inst_6656];
var inst_6658 = cljs.core.PersistentHashMap.fromArrays(inst_6653,inst_6657);
var inst_6659 = cljs_http.client.post.call(null,"/save",inst_6658);
var state_6668__$1 = state_6668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6668__$1,(2),inst_6659);
} else {
return null;
}
}
}
});})(c__6061__auto__,map__6652,map__6652__$1,state,input_chan,current_list,next_list,words))
;
return ((function (switch__6046__auto__,c__6061__auto__,map__6652,map__6652__$1,state,input_chan,current_list,next_list,words){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6673 = [null,null,null,null,null,null,null];
(statearr_6673[(0)] = state_machine__6047__auto__);

(statearr_6673[(1)] = (1));

return statearr_6673;
});
var state_machine__6047__auto____1 = (function (state_6668){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6674){if((e6674 instanceof Object)){
var ex__6050__auto__ = e6674;
var statearr_6675_6677 = state_6668;
(statearr_6675_6677[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6678 = state_6668;
state_6668 = G__6678;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6668){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__,map__6652,map__6652__$1,state,input_chan,current_list,next_list,words))
})();
var state__6063__auto__ = (function (){var statearr_6676 = f__6062__auto__.call(null);
(statearr_6676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_6676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__,map__6652,map__6652__$1,state,input_chan,current_list,next_list,words))
);

return c__6061__auto__;
});
speicher.client.finished = (function finished(state){
new cljs.core.Keyword(null,"swiper","swiper",-1506069648).cljs$core$IFn$_invoke$arity$1(state).destroy();

speicher.client.save_lists_BANG_.call(null,state);

return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"words","words",1924933001),new cljs.core.Keyword(null,"current-list","current-list",1594473864),new cljs.core.Keyword(null,"next-list","next-list",138818716),new cljs.core.Keyword(null,"swiper","swiper",-1506069648)),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"start","start",-355208981));
});
speicher.client.level_complete_QMARK_ = (function level_complete_QMARK_(level,count){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,speicher.client.level_limit,level),count);
});
speicher.client.level_up = (function level_up(state,p__6679){
var vec__6681 = p__6679;
var ger = cljs.core.nth.call(null,vec__6681,(0),null);
var eng = cljs.core.nth.call(null,vec__6681,(1),null);
var c = cljs.core.nth.call(null,vec__6681,(2),null);
var d = cljs.core.nth.call(null,vec__6681,(3),null);
var next_l = cljs.core.get.call(null,speicher.client.next_level,d);
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),(0)], null),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"next-list","next-list",138818716)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ger,eng,(0),next_l], null));
});
speicher.client.correct = (function correct(state,idx){
var vec__6683 = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),idx], null));
var ger = cljs.core.nth.call(null,vec__6683,(0),null);
var eng = cljs.core.nth.call(null,vec__6683,(1),null);
var c = cljs.core.nth.call(null,vec__6683,(2),null);
var list_kw = cljs.core.nth.call(null,vec__6683,(3),null);
new cljs.core.Keyword(null,"swiper","swiper",-1506069648).cljs$core$IFn$_invoke$arity$1(state).slideNext();

if(speicher.client.level_complete_QMARK_.call(null,list_kw,c)){
return speicher.client.level_up.call(null,state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ger,eng,c,list_kw], null));
} else {
return cljs.core.assoc_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"words","words",1924933001),idx], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ger,eng,(c + (1)),list_kw], null));
}
});
speicher.client.init_swiper = (function init_swiper(state,_){
var swiper = new cljs.core.Keyword(null,"f7","f7",356150168).cljs$core$IFn$_invoke$arity$1(state).swiper(".swiper-container",{"prevButton": ".swiper-prev-button", "nextButton": ".swiper-next-button"});
var html = "<div class='swiper-slide'><span>All Done? <br><a href=\"next.html\" class=\"button\"} >Save</a>\n        </span></div>";
Dom7(".swiper-wrapper").append(html);

swiper.update();

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"swiper-init?","swiper-init?",65165134),true,new cljs.core.Keyword(null,"swiper","swiper",-1506069648),swiper);
});
speicher.client.review_list = (function review_list(state,list_kw){
speicher.client.fetch_list.call(null,state,list_kw);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"review-list","review-list",-2126749986),new cljs.core.Keyword(null,"swiper-init?","swiper-init?",65165134),false,new cljs.core.Keyword(null,"current-list","current-list",1594473864),list_kw,new cljs.core.Keyword(null,"answered","answered",-1524147020),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"next-list","next-list",138818716),cljs.core.PersistentVector.EMPTY);
});
speicher.client.show_list = (function show_list(state,kw){
speicher.client.fetch_list.call(null,state,kw);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"show-list","show-list",-483536849));
});
speicher.client.show_search = (function show_search(state,_){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"search-page","search-page",-705609891));
});
speicher.client.show_enter = (function show_enter(state,_){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"enter-page","enter-page",-519644705));
});
speicher.client.lookup = (function lookup(state,word){
var c__6061__auto___6726 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto___6726){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto___6726){
return (function (state_6716){
var state_val_6717 = (state_6716[(1)]);
if((state_val_6717 === (3))){
var inst_6714 = (state_6716[(2)]);
var state_6716__$1 = state_6716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6716__$1,inst_6714);
} else {
if((state_val_6717 === (2))){
var inst_6705 = (state_6716[(7)]);
var inst_6709 = (state_6716[(2)]);
var inst_6710 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6711 = [new cljs.core.Keyword(null,"definitions","definitions",167529986),inst_6709];
var inst_6712 = (new cljs.core.PersistentVector(null,2,(5),inst_6710,inst_6711,null));
var state_6716__$1 = state_6716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6716__$1,(3),inst_6705,inst_6712);
} else {
if((state_val_6717 === (1))){
var inst_6705 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_6706 = [cljs.core.str("/search/"),cljs.core.str(word)].join('');
var inst_6707 = cljs_http.client.get.call(null,inst_6706);
var state_6716__$1 = (function (){var statearr_6718 = state_6716;
(statearr_6718[(7)] = inst_6705);

return statearr_6718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6716__$1,(2),inst_6707);
} else {
return null;
}
}
}
});})(c__6061__auto___6726))
;
return ((function (switch__6046__auto__,c__6061__auto___6726){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6722 = [null,null,null,null,null,null,null,null];
(statearr_6722[(0)] = state_machine__6047__auto__);

(statearr_6722[(1)] = (1));

return statearr_6722;
});
var state_machine__6047__auto____1 = (function (state_6716){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6723){if((e6723 instanceof Object)){
var ex__6050__auto__ = e6723;
var statearr_6724_6727 = state_6716;
(statearr_6724_6727[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6728 = state_6716;
state_6716 = G__6728;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6716){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto___6726))
})();
var state__6063__auto__ = (function (){var statearr_6725 = f__6062__auto__.call(null);
(statearr_6725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto___6726);

return statearr_6725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto___6726))
);


return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
});
speicher.client.add_new_word = (function add_new_word(state,entry){
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__){
return (function (state_6771){
var state_val_6772 = (state_6771[(1)]);
if((state_val_6772 === (3))){
var inst_6769 = (state_6771[(2)]);
var state_6771__$1 = state_6771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6771__$1,inst_6769);
} else {
if((state_val_6772 === (2))){
var inst_6755 = (state_6771[(7)]);
var inst_6764 = (state_6771[(2)]);
var inst_6765 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_6766 = [new cljs.core.Keyword(null,"definition-added","definition-added",195281834),inst_6764];
var inst_6767 = (new cljs.core.PersistentVector(null,2,(5),inst_6765,inst_6766,null));
var state_6771__$1 = state_6771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_6771__$1,(3),inst_6755,inst_6767);
} else {
if((state_val_6772 === (1))){
var inst_6755 = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(state);
var inst_6756 = [new cljs.core.Keyword(null,"form-params","form-params",1884296467)];
var inst_6757 = [new cljs.core.Keyword(null,"entry","entry",505168823)];
var inst_6758 = [entry];
var inst_6759 = cljs.core.PersistentHashMap.fromArrays(inst_6757,inst_6758);
var inst_6760 = [inst_6759];
var inst_6761 = cljs.core.PersistentHashMap.fromArrays(inst_6756,inst_6760);
var inst_6762 = cljs_http.client.post.call(null,"/add",inst_6761);
var state_6771__$1 = (function (){var statearr_6773 = state_6771;
(statearr_6773[(7)] = inst_6755);

return statearr_6773;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6771__$1,(2),inst_6762);
} else {
return null;
}
}
}
});})(c__6061__auto__))
;
return ((function (switch__6046__auto__,c__6061__auto__){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6777 = [null,null,null,null,null,null,null,null];
(statearr_6777[(0)] = state_machine__6047__auto__);

(statearr_6777[(1)] = (1));

return statearr_6777;
});
var state_machine__6047__auto____1 = (function (state_6771){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6778){if((e6778 instanceof Object)){
var ex__6050__auto__ = e6778;
var statearr_6779_6781 = state_6771;
(statearr_6779_6781[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6778;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6782 = state_6771;
state_6771 = G__6782;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6771){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__))
})();
var state__6063__auto__ = (function (){var statearr_6780 = f__6062__auto__.call(null);
(statearr_6780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_6780;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__))
);

return c__6061__auto__;
});
speicher.client.submit_selected = (function submit_selected(state,entry_index){
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__){
return (function (state_6813){
var state_val_6814 = (state_6813[(1)]);
if((state_val_6814 === (1))){
var inst_6803 = new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865).cljs$core$IFn$_invoke$arity$1(state);
var inst_6804 = cljs.core.vec.call(null,inst_6803);
var inst_6805 = new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(entry_index);
var inst_6806 = cljs.reader.read_string.call(null,inst_6805);
var inst_6807 = cljs.core.get.call(null,inst_6804,inst_6806);
var inst_6808 = speicher.render.format_entry.call(null,inst_6807);
var inst_6809 = cljs.core.first.call(null,inst_6808);
var inst_6810 = speicher.client.add_new_word.call(null,state,inst_6809);
var inst_6811 = cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865));
var state_6813__$1 = (function (){var statearr_6815 = state_6813;
(statearr_6815[(7)] = inst_6810);

return statearr_6815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6813__$1,inst_6811);
} else {
return null;
}
});})(c__6061__auto__))
;
return ((function (switch__6046__auto__,c__6061__auto__){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6819 = [null,null,null,null,null,null,null,null];
(statearr_6819[(0)] = state_machine__6047__auto__);

(statearr_6819[(1)] = (1));

return statearr_6819;
});
var state_machine__6047__auto____1 = (function (state_6813){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6813);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6820){if((e6820 instanceof Object)){
var ex__6050__auto__ = e6820;
var statearr_6821_6823 = state_6813;
(statearr_6821_6823[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6813);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6820;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6824 = state_6813;
state_6813 = G__6824;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6813){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__))
})();
var state__6063__auto__ = (function (){var statearr_6822 = f__6062__auto__.call(null);
(statearr_6822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_6822;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__))
);

return c__6061__auto__;
});
speicher.client.submit_entered = (function submit_entered(state,entered){
speicher.client.add_new_word.call(null,state,entered);

return state;
});
speicher.client.handle_response = (function handle_response(state,p__6825){
var map__6827 = p__6825;
var map__6827__$1 = ((cljs.core.seq_QMARK_.call(null,map__6827))?cljs.core.apply.call(null,cljs.core.hash_map,map__6827):map__6827);
var body = cljs.core.get.call(null,map__6827__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var status = cljs.core.get.call(null,map__6827__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"words","words",1924933001),body);
});
speicher.client.show_definitions = (function show_definitions(state,p__6828){
var map__6830 = p__6828;
var map__6830__$1 = ((cljs.core.seq_QMARK_.call(null,map__6830))?cljs.core.apply.call(null,cljs.core.hash_map,map__6830):map__6830);
var body = cljs.core.get.call(null,map__6830__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"dictionary","dictionary",-2013643865),body);
});
/**
* For every entry in a map of channel identifiers to consumers,
* initiate a channel listener which will update the application state
* using the appropriate function whenever a value is recieved, as
* well as triggering a render.
*/
speicher.client.init_updates = (function init_updates(p__6831){
var map__6869 = p__6831;
var map__6869__$1 = ((cljs.core.seq_QMARK_.call(null,map__6869))?cljs.core.apply.call(null,cljs.core.hash_map,map__6869):map__6869);
var functions = cljs.core.get.call(null,map__6869__$1,new cljs.core.Keyword(null,"functions","functions",184951466));
var state = cljs.core.get.call(null,map__6869__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var input_chan = new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state));
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__,input_chan,map__6869,map__6869__$1,functions,state){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__,input_chan,map__6869,map__6869__$1,functions,state){
return (function (state_6890){
var state_val_6891 = (state_6890[(1)]);
if((state_val_6891 === (7))){
var inst_6874 = (state_6890[(2)]);
var inst_6875 = cljs.core.nth.call(null,inst_6874,(0),null);
var inst_6876 = cljs.core.nth.call(null,inst_6874,(1),null);
var inst_6877 = [cljs.core.str("on channel ["),cljs.core.str(inst_6875),cljs.core.str("], received value ["),cljs.core.str(inst_6876),cljs.core.str("]")].join('');
var inst_6878 = console.log(inst_6877);
var inst_6879 = cljs.core.get.call(null,functions,inst_6875);
var inst_6880 = cljs.core.swap_BANG_.call(null,state,inst_6879,inst_6876);
var inst_6881 = cljs.core.deref.call(null,state);
var inst_6882 = speicher.render.request_render.call(null,inst_6881);
var state_6890__$1 = (function (){var statearr_6892 = state_6890;
(statearr_6892[(7)] = inst_6882);

(statearr_6892[(8)] = inst_6880);

(statearr_6892[(9)] = inst_6878);

return statearr_6892;
})();
var statearr_6893_6906 = state_6890__$1;
(statearr_6893_6906[(2)] = null);

(statearr_6893_6906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6891 === (6))){
var inst_6886 = (state_6890[(2)]);
var state_6890__$1 = state_6890;
var statearr_6894_6907 = state_6890__$1;
(statearr_6894_6907[(2)] = inst_6886);

(statearr_6894_6907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6891 === (5))){
var state_6890__$1 = state_6890;
var statearr_6895_6908 = state_6890__$1;
(statearr_6895_6908[(2)] = null);

(statearr_6895_6908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6891 === (4))){
var state_6890__$1 = state_6890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_6890__$1,(7),input_chan);
} else {
if((state_val_6891 === (3))){
var inst_6888 = (state_6890[(2)]);
var state_6890__$1 = state_6890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_6890__$1,inst_6888);
} else {
if((state_val_6891 === (2))){
var state_6890__$1 = state_6890;
var statearr_6896_6909 = state_6890__$1;
(statearr_6896_6909[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_6891 === (1))){
var state_6890__$1 = state_6890;
var statearr_6898_6910 = state_6890__$1;
(statearr_6898_6910[(2)] = null);

(statearr_6898_6910[(1)] = (2));


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
});})(c__6061__auto__,input_chan,map__6869,map__6869__$1,functions,state))
;
return ((function (switch__6046__auto__,c__6061__auto__,input_chan,map__6869,map__6869__$1,functions,state){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_6902 = [null,null,null,null,null,null,null,null,null,null];
(statearr_6902[(0)] = state_machine__6047__auto__);

(statearr_6902[(1)] = (1));

return statearr_6902;
});
var state_machine__6047__auto____1 = (function (state_6890){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_6890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e6903){if((e6903 instanceof Object)){
var ex__6050__auto__ = e6903;
var statearr_6904_6911 = state_6890;
(statearr_6904_6911[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_6890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e6903;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__6912 = state_6890;
state_6890 = G__6912;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_6890){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_6890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__,input_chan,map__6869,map__6869__$1,functions,state))
})();
var state__6063__auto__ = (function (){var statearr_6905 = f__6062__auto__.call(null);
(statearr_6905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_6905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__,input_chan,map__6869,map__6869__$1,functions,state))
);

return c__6061__auto__;
});
speicher.client.print_entry = (function print_entry(state,data){
cljs.core.println.call(null,"print entry",data);

return state;
});
/**
* Return a map containing the initial application
*/
speicher.client.load_app = (function load_app(){
var ch = cljs.core.async.chan.call(null);
var f7 = (new Framework7({"onPageInit": ((function (ch){
return (function init_callback(app,page){
var G__7096 = page.name;
switch (G__7096) {
case "index":
return console.log("index page called");

break;
case "review":
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__,G__7096,ch){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__,G__7096,ch){
return (function (state_7103){
var state_val_7104 = (state_7103[(1)]);
if((state_val_7104 === (2))){
var inst_7101 = (state_7103[(2)]);
var state_7103__$1 = state_7103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7103__$1,inst_7101);
} else {
if((state_val_7104 === (1))){
var inst_7097 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7098 = [new cljs.core.Keyword(null,"review-list","review-list",-2126749986),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_7099 = (new cljs.core.PersistentVector(null,2,(5),inst_7097,inst_7098,null));
var state_7103__$1 = state_7103;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7103__$1,(2),ch,inst_7099);
} else {
return null;
}
}
});})(c__6061__auto__,G__7096,ch))
;
return ((function (switch__6046__auto__,c__6061__auto__,G__7096,ch){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_7108 = [null,null,null,null,null,null,null];
(statearr_7108[(0)] = state_machine__6047__auto__);

(statearr_7108[(1)] = (1));

return statearr_7108;
});
var state_machine__6047__auto____1 = (function (state_7103){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_7103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e7109){if((e7109 instanceof Object)){
var ex__6050__auto__ = e7109;
var statearr_7110_7158 = state_7103;
(statearr_7110_7158[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7109;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7159 = state_7103;
state_7103 = G__7159;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_7103){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_7103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__,G__7096,ch))
})();
var state__6063__auto__ = (function (){var statearr_7111 = f__6062__auto__.call(null);
(statearr_7111[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_7111;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__,G__7096,ch))
);

return c__6061__auto__;

break;
case "next":
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__,G__7096,ch){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__,G__7096,ch){
return (function (state_7118){
var state_val_7119 = (state_7118[(1)]);
if((state_val_7119 === (2))){
var inst_7116 = (state_7118[(2)]);
var state_7118__$1 = state_7118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7118__$1,inst_7116);
} else {
if((state_val_7119 === (1))){
var inst_7112 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7113 = [new cljs.core.Keyword(null,"review-done","review-done",1000388706),null];
var inst_7114 = (new cljs.core.PersistentVector(null,2,(5),inst_7112,inst_7113,null));
var state_7118__$1 = state_7118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7118__$1,(2),ch,inst_7114);
} else {
return null;
}
}
});})(c__6061__auto__,G__7096,ch))
;
return ((function (switch__6046__auto__,c__6061__auto__,G__7096,ch){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_7123 = [null,null,null,null,null,null,null];
(statearr_7123[(0)] = state_machine__6047__auto__);

(statearr_7123[(1)] = (1));

return statearr_7123;
});
var state_machine__6047__auto____1 = (function (state_7118){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_7118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e7124){if((e7124 instanceof Object)){
var ex__6050__auto__ = e7124;
var statearr_7125_7160 = state_7118;
(statearr_7125_7160[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7161 = state_7118;
state_7118 = G__7161;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_7118){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_7118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__,G__7096,ch))
})();
var state__6063__auto__ = (function (){var statearr_7126 = f__6062__auto__.call(null);
(statearr_7126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_7126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__,G__7096,ch))
);

return c__6061__auto__;

break;
case "show":
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__,G__7096,ch){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__,G__7096,ch){
return (function (state_7133){
var state_val_7134 = (state_7133[(1)]);
if((state_val_7134 === (2))){
var inst_7131 = (state_7133[(2)]);
var state_7133__$1 = state_7133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7133__$1,inst_7131);
} else {
if((state_val_7134 === (1))){
var inst_7127 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7128 = [new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"daily","daily",-697831483)];
var inst_7129 = (new cljs.core.PersistentVector(null,2,(5),inst_7127,inst_7128,null));
var state_7133__$1 = state_7133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7133__$1,(2),ch,inst_7129);
} else {
return null;
}
}
});})(c__6061__auto__,G__7096,ch))
;
return ((function (switch__6046__auto__,c__6061__auto__,G__7096,ch){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_7138 = [null,null,null,null,null,null,null];
(statearr_7138[(0)] = state_machine__6047__auto__);

(statearr_7138[(1)] = (1));

return statearr_7138;
});
var state_machine__6047__auto____1 = (function (state_7133){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_7133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e7139){if((e7139 instanceof Object)){
var ex__6050__auto__ = e7139;
var statearr_7140_7162 = state_7133;
(statearr_7140_7162[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7163 = state_7133;
state_7133 = G__7163;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_7133){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_7133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__,G__7096,ch))
})();
var state__6063__auto__ = (function (){var statearr_7141 = f__6062__auto__.call(null);
(statearr_7141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_7141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__,G__7096,ch))
);

return c__6061__auto__;

break;
case "search":
var c__6061__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6061__auto__,G__7096,ch){
return (function (){
var f__6062__auto__ = (function (){var switch__6046__auto__ = ((function (c__6061__auto__,G__7096,ch){
return (function (state_7148){
var state_val_7149 = (state_7148[(1)]);
if((state_val_7149 === (2))){
var inst_7146 = (state_7148[(2)]);
var state_7148__$1 = state_7148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7148__$1,inst_7146);
} else {
if((state_val_7149 === (1))){
var inst_7142 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7143 = [new cljs.core.Keyword(null,"search-page","search-page",-705609891),null];
var inst_7144 = (new cljs.core.PersistentVector(null,2,(5),inst_7142,inst_7143,null));
var state_7148__$1 = state_7148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7148__$1,(2),ch,inst_7144);
} else {
return null;
}
}
});})(c__6061__auto__,G__7096,ch))
;
return ((function (switch__6046__auto__,c__6061__auto__,G__7096,ch){
return (function() {
var state_machine__6047__auto__ = null;
var state_machine__6047__auto____0 = (function (){
var statearr_7153 = [null,null,null,null,null,null,null];
(statearr_7153[(0)] = state_machine__6047__auto__);

(statearr_7153[(1)] = (1));

return statearr_7153;
});
var state_machine__6047__auto____1 = (function (state_7148){
while(true){
var ret_value__6048__auto__ = (function (){try{while(true){
var result__6049__auto__ = switch__6046__auto__.call(null,state_7148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6049__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6049__auto__;
}
break;
}
}catch (e7154){if((e7154 instanceof Object)){
var ex__6050__auto__ = e7154;
var statearr_7155_7164 = state_7148;
(statearr_7155_7164[(5)] = ex__6050__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6048__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7165 = state_7148;
state_7148 = G__7165;
continue;
} else {
return ret_value__6048__auto__;
}
break;
}
});
state_machine__6047__auto__ = function(state_7148){
switch(arguments.length){
case 0:
return state_machine__6047__auto____0.call(this);
case 1:
return state_machine__6047__auto____1.call(this,state_7148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6047__auto____0;
state_machine__6047__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6047__auto____1;
return state_machine__6047__auto__;
})()
;})(switch__6046__auto__,c__6061__auto__,G__7096,ch))
})();
var state__6063__auto__ = (function (){var statearr_7156 = f__6062__auto__.call(null);
(statearr_7156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6061__auto__);

return statearr_7156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6063__auto__);
});})(c__6061__auto__,G__7096,ch))
);

return c__6061__auto__;

break;
default:
return cljs.core.println.call(null,"Nothing found ");

}
});})(ch))
}));
var main = f7.addView(".view-main");
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"input-chan","input-chan",-1487255360),ch,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"current-list","current-list",1594473864),new cljs.core.Keyword(null,"daily","daily",-697831483),new cljs.core.Keyword(null,"f7","f7",356150168),f7,new cljs.core.Keyword(null,"main-view","main-view",343997885),main], null)),new cljs.core.Keyword(null,"functions","functions",184951466),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"review-done","review-done",1000388706),new cljs.core.Keyword(null,"definitions","definitions",167529986),new cljs.core.Keyword(null,"submit-selected","submit-selected",-548982554),new cljs.core.Keyword(null,"search-term","search-term",356193544),new cljs.core.Keyword(null,"definition-added","definition-added",195281834),new cljs.core.Keyword(null,"show-list","show-list",-483536849),new cljs.core.Keyword(null,"init-swiper","init-swiper",998548847),new cljs.core.Keyword(null,"saved-list","saved-list",1333944303),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"search-page","search-page",-705609891),new cljs.core.Keyword(null,"submit-entered","submit-entered",-1080659330),new cljs.core.Keyword(null,"review-list","review-list",-2126749986),new cljs.core.Keyword(null,"correct","correct",984806334),new cljs.core.Keyword(null,"enter-page","enter-page",-519644705)],[speicher.client.handle_response,speicher.client.finished,speicher.client.show_definitions,speicher.client.submit_selected,speicher.client.lookup,speicher.client.print_entry,speicher.client.show_list,speicher.client.init_swiper,speicher.client.print_entry,speicher.client.print_entry,speicher.client.show_search,speicher.client.submit_entered,speicher.client.review_list,speicher.client.correct,speicher.client.show_enter])], null);
});
/**
* Application entry point
*/
speicher.client.main = (function main(){
var app = speicher.client.load_app.call(null);
var state = cljs.core.deref.call(null,new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(app));
speicher.client.init_updates.call(null,app);

return speicher.render.request_render.call(null,state);
});
goog.exportSymbol('speicher.client.main', speicher.client.main);
