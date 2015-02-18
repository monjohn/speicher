// Compiled by ClojureScript 0.0-2850 {}
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
cljs_http.core.request = (function request(p__23972){
var map__23999 = p__23972;
var map__23999__$1 = ((cljs.core.seq_QMARK_.call(null,map__23999))?cljs.core.apply.call(null,cljs.core.hash_map,map__23999):map__23999);
var request__$1 = map__23999__$1;
var cancel = cljs.core.get.call(null,map__23999__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__23999__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var body = cljs.core.get.call(null,map__23999__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__23999__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var request_method = cljs.core.get.call(null,map__23999__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request__$1);
var method = cljs.core.name.call(null,(function (){var or__7504__auto__ = request_method;
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var timeout = (function (){var or__7504__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request__$1);
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
} else {
return (0);
}
})();
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var xhr = (function (){var G__24000 = (new goog.net.XhrIo());
G__24000.setTimeoutInterval(timeout);

G__24000.setWithCredentials(send_credentials);

return G__24000;
})();
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23999,map__23999__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
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
});})(channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23999,map__23999__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__10282__auto___24025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___24025,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23999,map__23999__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___24025,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23999,map__23999__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function (state_24011){
var state_val_24012 = (state_24011[(1)]);
if((state_val_24012 === (5))){
var inst_24009 = (state_24011[(2)]);
var state_24011__$1 = state_24011;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24011__$1,inst_24009);
} else {
if((state_val_24012 === (4))){
var state_24011__$1 = state_24011;
var statearr_24013_24026 = state_24011__$1;
(statearr_24013_24026[(2)] = null);

(statearr_24013_24026[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24012 === (3))){
var inst_24006 = xhr.abort();
var state_24011__$1 = state_24011;
var statearr_24014_24027 = state_24011__$1;
(statearr_24014_24027[(2)] = inst_24006);

(statearr_24014_24027[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24012 === (2))){
var inst_24002 = (state_24011[(2)]);
var inst_24003 = xhr.isComplete();
var inst_24004 = cljs.core.not.call(null,inst_24003);
var state_24011__$1 = (function (){var statearr_24015 = state_24011;
(statearr_24015[(7)] = inst_24002);

return statearr_24015;
})();
if(inst_24004){
var statearr_24016_24028 = state_24011__$1;
(statearr_24016_24028[(1)] = (3));

} else {
var statearr_24017_24029 = state_24011__$1;
(statearr_24017_24029[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24012 === (1))){
var state_24011__$1 = state_24011;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24011__$1,(2),cancel);
} else {
return null;
}
}
}
}
}
});})(c__10282__auto___24025,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23999,map__23999__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
;
return ((function (switch__10226__auto__,c__10282__auto___24025,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23999,map__23999__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_24021 = [null,null,null,null,null,null,null,null];
(statearr_24021[(0)] = state_machine__10227__auto__);

(statearr_24021[(1)] = (1));

return statearr_24021;
});
var state_machine__10227__auto____1 = (function (state_24011){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_24011);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e24022){if((e24022 instanceof Object)){
var ex__10230__auto__ = e24022;
var statearr_24023_24030 = state_24011;
(statearr_24023_24030[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24011);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24031 = state_24011;
state_24011 = G__24031;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_24011){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_24011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___24025,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23999,map__23999__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
})();
var state__10284__auto__ = (function (){var statearr_24024 = f__10283__auto__.call(null);
(statearr_24024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___24025);

return statearr_24024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___24025,channel,request_url,method,timeout,headers__$1,send_credentials,xhr,map__23999,map__23999__$1,request__$1,cancel,with_credentials_QMARK_,body,headers,request_method))
);

} else {
}

return channel;
});
