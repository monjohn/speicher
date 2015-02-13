// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.EventType');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
* Attempt to close the given channel and abort the pending HTTP request
* with which it is associated.
*/
cljs_http.core.abort_BANG_ = (function abort_BANG_(channel){
var temp__4126__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4126__auto__)){
var xhr = temp__4126__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

return xhr.abort();
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
* Execute the HTTP request corresponding to the given Ring request
* map and return a core.async channel.
*/
cljs_http.core.request = (function request(p__19304){
var map__19331 = p__19304;
var map__19331__$1 = ((cljs.core.seq_QMARK_.call(null,map__19331))?cljs.core.apply.call(null,cljs.core.hash_map,map__19331):map__19331);
var request__$1 = map__19331__$1;
var cancel = cljs.core.get.call(null,map__19331__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__19331__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var body = cljs.core.get.call(null,map__19331__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__19331__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var request_method = cljs.core.get.call(null,map__19331__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request__$1);
var method = cljs.core.name.call(null,(function (){var or__3772__auto__ = request_method;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var timeout = (function (){var or__3772__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return (0);
}
})();
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var xhr = (function (){var G__19332 = (new goog.net.XhrIo());
G__19332.setTimeoutInterval(timeout);

G__19332.setWithCredentials(send_credentials);

return G__19332;
})();
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__19331,map__19331__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponseText(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null)], null);
if(!(cljs_http.core.aborted_QMARK_.call(null,xhr))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__19331,map__19331__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__6550__auto___19357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___19357,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__19331,map__19331__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___19357,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__19331,map__19331__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_19343){
var state_val_19344 = (state_19343[(1)]);
if((state_val_19344 === (5))){
var inst_19341 = (state_19343[(2)]);
var state_19343__$1 = state_19343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19343__$1,inst_19341);
} else {
if((state_val_19344 === (4))){
var state_19343__$1 = state_19343;
var statearr_19345_19358 = state_19343__$1;
(statearr_19345_19358[(2)] = null);

(statearr_19345_19358[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (3))){
var inst_19338 = xhr.abort();
var state_19343__$1 = state_19343;
var statearr_19346_19359 = state_19343__$1;
(statearr_19346_19359[(2)] = inst_19338);

(statearr_19346_19359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (2))){
var inst_19334 = (state_19343[(2)]);
var inst_19335 = xhr.isComplete();
var inst_19336 = cljs.core.not.call(null,inst_19335);
var state_19343__$1 = (function (){var statearr_19347 = state_19343;
(statearr_19347[(7)] = inst_19334);

return statearr_19347;
})();
if(inst_19336){
var statearr_19348_19360 = state_19343__$1;
(statearr_19348_19360[(1)] = (3));

} else {
var statearr_19349_19361 = state_19343__$1;
(statearr_19349_19361[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19344 === (1))){
var state_19343__$1 = state_19343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19343__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__6550__auto___19357,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__19331,map__19331__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__6494__auto__,c__6550__auto___19357,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__19331,map__19331__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_19353 = [null,null,null,null,null,null,null,null];
(statearr_19353[(0)] = state_machine__6495__auto__);

(statearr_19353[(1)] = (1));

return statearr_19353;
});
var state_machine__6495__auto____1 = (function (state_19343){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_19343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e19354){if((e19354 instanceof Object)){
var ex__6498__auto__ = e19354;
var statearr_19355_19362 = state_19343;
(statearr_19355_19362[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19363 = state_19343;
state_19343 = G__19363;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_19343){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_19343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___19357,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__19331,map__19331__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__6552__auto__ = (function (){var statearr_19356 = f__6551__auto__.call(null);
(statearr_19356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___19357);

return statearr_19356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___19357,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__19331,map__19331__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});

//# sourceMappingURL=core.js.map?rel=1423280673824