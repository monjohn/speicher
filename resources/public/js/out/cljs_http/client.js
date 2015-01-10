// Compiled by ClojureScript 0.0-2674 {}
if(!goog.isProvided_('cljs_http.client')) {
goog.provide('cljs_http.client');
}
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function if_pos(v){
if(cljs.core.truth_((function (){var and__3742__auto__ = v;
if(cljs.core.truth_(and__3742__auto__)){
return (v > (0));
} else {
return and__3742__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__10297_SHARP_,p2__10296_SHARP_){
var vec__10299 = clojure.string.split.call(null,p2__10296_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__10299,(0),null);
var v = cljs.core.nth.call(null,vec__10299,(1),null);
return cljs.core.assoc.call(null,p1__10297_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__10300_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__10300_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__10301){
var vec__10303 = p__10301;
var k = cljs.core.nth.call(null,vec__10303,(0),null);
var v = cljs.core.nth.call(null,vec__10303,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__10304_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__10304_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
* Escape special characters -- for content-type.
*/
cljs_http.client.escape_special = (function escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__3742__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__3742__auto__){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3742__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client__$1){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client__$1.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else {
return client__$1.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client__$1){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__10305_SHARP_){
return cljs_http.client.decode_body.call(null,p1__10305_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client__$1.call(null,request)], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client__$1,p__10306){
var vec__10308 = p__10306;
var accept = cljs.core.nth.call(null,vec__10308,(0),null);
return ((function (vec__10308,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3754__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3754__auto__)){
return or__3754__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
return client__$1.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client__$1.call(null,request);
}
});
;})(vec__10308,accept))
};
var wrap_accept = function (client__$1,var_args){
var p__10306 = null;
if (arguments.length > 1) {
var G__10309__i = 0, G__10309__a = new Array(arguments.length -  1);
while (G__10309__i < G__10309__a.length) {G__10309__a[G__10309__i] = arguments[G__10309__i + 1]; ++G__10309__i;}
  p__10306 = new cljs.core.IndexedSeq(G__10309__a,0);
} 
return wrap_accept__delegate.call(this,client__$1,p__10306);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__10310){
var client__$1 = cljs.core.first(arglist__10310);
var p__10306 = cljs.core.rest(arglist__10310);
return wrap_accept__delegate(client__$1,p__10306);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client__$1,p__10311){
var vec__10313 = p__10311;
var content_type = cljs.core.nth.call(null,vec__10313,(0),null);
return ((function (vec__10313,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3754__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3754__auto__)){
return or__3754__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
return client__$1.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client__$1.call(null,request);
}
});
;})(vec__10313,content_type))
};
var wrap_content_type = function (client__$1,var_args){
var p__10311 = null;
if (arguments.length > 1) {
var G__10314__i = 0, G__10314__a = new Array(arguments.length -  1);
while (G__10314__i < G__10314__a.length) {G__10314__a[G__10314__i] = arguments[G__10314__i + 1]; ++G__10314__i;}
  p__10311 = new cljs.core.IndexedSeq(G__10314__a,0);
} 
return wrap_content_type__delegate.call(this,client__$1,p__10311);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__10315){
var client__$1 = cljs.core.first(arglist__10315);
var p__10311 = cljs.core.rest(arglist__10315);
return wrap_content_type__delegate(client__$1,p__10311);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
* Encode :transit-params in the `request` :body and set the appropriate
* Content Type header.
* 
* A :transit-opts map can be optionally provided with the following keys:
* 
* :encoding                #{:json, :json-verbose}
* :decoding                #{:json, :json-verbose}
* :encoding/decoding-opts  appropriate map of options to be passed to
* transit writer/reader, respectively.
*/
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client__$1){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__10317 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__10317__$1 = ((cljs.core.seq_QMARK_.call(null,map__10317))?cljs.core.apply.call(null,cljs.core.hash_map,map__10317):map__10317);
var encoding_opts = cljs.core.get.call(null,map__10317__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var encoding = cljs.core.get.call(null,map__10317__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
return client__$1.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else {
return client__$1.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client__$1){
return (function (request){
var map__10321 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__10321__$1 = ((cljs.core.seq_QMARK_.call(null,map__10321))?cljs.core.apply.call(null,cljs.core.hash_map,map__10321):map__10321);
var decoding_opts = cljs.core.get.call(null,map__10321__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var decoding = cljs.core.get.call(null,map__10321__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var transit_decode = ((function (map__10321,map__10321__$1,decoding_opts,decoding){
return (function (p1__10318_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__10318_SHARP_,decoding,decoding_opts);
});})(map__10321,map__10321__$1,decoding_opts,decoding))
;
return cljs.core.async.map.call(null,((function (map__10321,map__10321__$1,decoding_opts,decoding,transit_decode){
return (function (p1__10319_SHARP_){
return cljs_http.client.decode_body.call(null,p1__10319_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__10321,map__10321__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client__$1.call(null,request)], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client__$1){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client__$1.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else {
return client__$1.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client__$1){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__10322_SHARP_){
return cljs_http.client.decode_body.call(null,p1__10322_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client__$1.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client__$1){
return (function (p__10325){
var map__10326 = p__10325;
var map__10326__$1 = ((cljs.core.seq_QMARK_.call(null,map__10326))?cljs.core.apply.call(null,cljs.core.hash_map,map__10326):map__10326);
var req = map__10326__$1;
var query_params = cljs.core.get.call(null,map__10326__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client__$1.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client__$1.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client__$1){
return (function (p__10329){
var map__10330 = p__10329;
var map__10330__$1 = ((cljs.core.seq_QMARK_.call(null,map__10330))?cljs.core.apply.call(null,cljs.core.hash_map,map__10330):map__10330);
var request = map__10330__$1;
var request_method = cljs.core.get.call(null,map__10330__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var form_params = cljs.core.get.call(null,map__10330__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
if(cljs.core.truth_((function (){var and__3742__auto__ = form_params;
if(cljs.core.truth_(and__3742__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3742__auto__;
}
})())){
return client__$1.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else {
return client__$1.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__10337_10343 = cljs.core.seq.call(null,params);
var chunk__10338_10344 = null;
var count__10339_10345 = (0);
var i__10340_10346 = (0);
while(true){
if((i__10340_10346 < count__10339_10345)){
var vec__10341_10347 = cljs.core._nth.call(null,chunk__10338_10344,i__10340_10346);
var k_10348 = cljs.core.nth.call(null,vec__10341_10347,(0),null);
var v_10349 = cljs.core.nth.call(null,vec__10341_10347,(1),null);
form_data.append(cljs.core.name.call(null,k_10348),v_10349);

var G__10350 = seq__10337_10343;
var G__10351 = chunk__10338_10344;
var G__10352 = count__10339_10345;
var G__10353 = (i__10340_10346 + (1));
seq__10337_10343 = G__10350;
chunk__10338_10344 = G__10351;
count__10339_10345 = G__10352;
i__10340_10346 = G__10353;
continue;
} else {
var temp__4126__auto___10354 = cljs.core.seq.call(null,seq__10337_10343);
if(temp__4126__auto___10354){
var seq__10337_10355__$1 = temp__4126__auto___10354;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10337_10355__$1)){
var c__4541__auto___10356 = cljs.core.chunk_first.call(null,seq__10337_10355__$1);
var G__10357 = cljs.core.chunk_rest.call(null,seq__10337_10355__$1);
var G__10358 = c__4541__auto___10356;
var G__10359 = cljs.core.count.call(null,c__4541__auto___10356);
var G__10360 = (0);
seq__10337_10343 = G__10357;
chunk__10338_10344 = G__10358;
count__10339_10345 = G__10359;
i__10340_10346 = G__10360;
continue;
} else {
var vec__10342_10361 = cljs.core.first.call(null,seq__10337_10355__$1);
var k_10362 = cljs.core.nth.call(null,vec__10342_10361,(0),null);
var v_10363 = cljs.core.nth.call(null,vec__10342_10361,(1),null);
form_data.append(cljs.core.name.call(null,k_10362),v_10363);

var G__10364 = cljs.core.next.call(null,seq__10337_10355__$1);
var G__10365 = null;
var G__10366 = (0);
var G__10367 = (0);
seq__10337_10343 = G__10364;
chunk__10338_10344 = G__10365;
count__10339_10345 = G__10366;
i__10340_10346 = G__10367;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function wrap_multipart_params(client__$1){
return (function (p__10370){
var map__10371 = p__10370;
var map__10371__$1 = ((cljs.core.seq_QMARK_.call(null,map__10371))?cljs.core.apply.call(null,cljs.core.hash_map,map__10371):map__10371);
var request = map__10371__$1;
var request_method = cljs.core.get.call(null,map__10371__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var multipart_params = cljs.core.get.call(null,map__10371__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
if(cljs.core.truth_((function (){var and__3742__auto__ = multipart_params;
if(cljs.core.truth_(and__3742__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3742__auto__;
}
})())){
return client__$1.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"multipart/form-data"));
} else {
return client__$1.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client__$1){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
return client__$1.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client__$1.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client__$1,server_name){
return (function (p1__10372_SHARP_){
return client__$1.call(null,cljs.core.assoc.call(null,p1__10372_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client__$1){
return (function (p__10376){
var map__10377 = p__10376;
var map__10377__$1 = ((cljs.core.seq_QMARK_.call(null,map__10377))?cljs.core.apply.call(null,cljs.core.hash_map,map__10377):map__10377);
var req = map__10377__$1;
var query_params = cljs.core.get.call(null,map__10377__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
return client__$1.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__10377,map__10377__$1,req,query_params){
return (function (p1__10373_SHARP_){
return cljs.core.merge.call(null,p1__10373_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__10377,map__10377__$1,req,query_params))
));
} else {
return client__$1.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client__$1,p__10378){
var vec__10380 = p__10378;
var credentials = cljs.core.nth.call(null,vec__10380,(0),null);
return ((function (vec__10380,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3754__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3754__auto__)){
return or__3754__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client__$1.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client__$1.call(null,req);
}
});
;})(vec__10380,credentials))
};
var wrap_basic_auth = function (client__$1,var_args){
var p__10378 = null;
if (arguments.length > 1) {
var G__10381__i = 0, G__10381__a = new Array(arguments.length -  1);
while (G__10381__i < G__10381__a.length) {G__10381__a[G__10381__i] = arguments[G__10381__i + 1]; ++G__10381__i;}
  p__10378 = new cljs.core.IndexedSeq(G__10381__a,0);
} 
return wrap_basic_auth__delegate.call(this,client__$1,p__10378);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__10382){
var client__$1 = cljs.core.first(arglist__10382);
var p__10378 = cljs.core.rest(arglist__10382);
return wrap_basic_auth__delegate(client__$1,p__10378);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client__$1){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
return client__$1.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client__$1.call(null,req);
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client__$1){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.call(null,client__$1.call(null,request),custom_channel);
} else {
return client__$1.call(null,request);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){
return cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request))))))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__10383){
var vec__10385 = p__10383;
var req = cljs.core.nth.call(null,vec__10385,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__10383 = null;
if (arguments.length > 1) {
var G__10386__i = 0, G__10386__a = new Array(arguments.length -  1);
while (G__10386__i < G__10386__a.length) {G__10386__a[G__10386__i] = arguments[G__10386__i + 1]; ++G__10386__i;}
  p__10383 = new cljs.core.IndexedSeq(G__10386__a,0);
} 
return delete$__delegate.call(this,url,p__10383);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__10387){
var url = cljs.core.first(arglist__10387);
var p__10383 = cljs.core.rest(arglist__10387);
return delete$__delegate(url,p__10383);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__10388){
var vec__10390 = p__10388;
var req = cljs.core.nth.call(null,vec__10390,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__10388 = null;
if (arguments.length > 1) {
var G__10391__i = 0, G__10391__a = new Array(arguments.length -  1);
while (G__10391__i < G__10391__a.length) {G__10391__a[G__10391__i] = arguments[G__10391__i + 1]; ++G__10391__i;}
  p__10388 = new cljs.core.IndexedSeq(G__10391__a,0);
} 
return get__delegate.call(this,url,p__10388);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__10392){
var url = cljs.core.first(arglist__10392);
var p__10388 = cljs.core.rest(arglist__10392);
return get__delegate(url,p__10388);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__10393){
var vec__10395 = p__10393;
var req = cljs.core.nth.call(null,vec__10395,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__10393 = null;
if (arguments.length > 1) {
var G__10396__i = 0, G__10396__a = new Array(arguments.length -  1);
while (G__10396__i < G__10396__a.length) {G__10396__a[G__10396__i] = arguments[G__10396__i + 1]; ++G__10396__i;}
  p__10393 = new cljs.core.IndexedSeq(G__10396__a,0);
} 
return head__delegate.call(this,url,p__10393);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__10397){
var url = cljs.core.first(arglist__10397);
var p__10393 = cljs.core.rest(arglist__10397);
return head__delegate(url,p__10393);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__10398){
var vec__10400 = p__10398;
var req = cljs.core.nth.call(null,vec__10400,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__10398 = null;
if (arguments.length > 1) {
var G__10401__i = 0, G__10401__a = new Array(arguments.length -  1);
while (G__10401__i < G__10401__a.length) {G__10401__a[G__10401__i] = arguments[G__10401__i + 1]; ++G__10401__i;}
  p__10398 = new cljs.core.IndexedSeq(G__10401__a,0);
} 
return move__delegate.call(this,url,p__10398);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__10402){
var url = cljs.core.first(arglist__10402);
var p__10398 = cljs.core.rest(arglist__10402);
return move__delegate(url,p__10398);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__10403){
var vec__10405 = p__10403;
var req = cljs.core.nth.call(null,vec__10405,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__10403 = null;
if (arguments.length > 1) {
var G__10406__i = 0, G__10406__a = new Array(arguments.length -  1);
while (G__10406__i < G__10406__a.length) {G__10406__a[G__10406__i] = arguments[G__10406__i + 1]; ++G__10406__i;}
  p__10403 = new cljs.core.IndexedSeq(G__10406__a,0);
} 
return options__delegate.call(this,url,p__10403);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__10407){
var url = cljs.core.first(arglist__10407);
var p__10403 = cljs.core.rest(arglist__10407);
return options__delegate(url,p__10403);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__10408){
var vec__10410 = p__10408;
var req = cljs.core.nth.call(null,vec__10410,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__10408 = null;
if (arguments.length > 1) {
var G__10411__i = 0, G__10411__a = new Array(arguments.length -  1);
while (G__10411__i < G__10411__a.length) {G__10411__a[G__10411__i] = arguments[G__10411__i + 1]; ++G__10411__i;}
  p__10408 = new cljs.core.IndexedSeq(G__10411__a,0);
} 
return patch__delegate.call(this,url,p__10408);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__10412){
var url = cljs.core.first(arglist__10412);
var p__10408 = cljs.core.rest(arglist__10412);
return patch__delegate(url,p__10408);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__10413){
var vec__10415 = p__10413;
var req = cljs.core.nth.call(null,vec__10415,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__10413 = null;
if (arguments.length > 1) {
var G__10416__i = 0, G__10416__a = new Array(arguments.length -  1);
while (G__10416__i < G__10416__a.length) {G__10416__a[G__10416__i] = arguments[G__10416__i + 1]; ++G__10416__i;}
  p__10413 = new cljs.core.IndexedSeq(G__10416__a,0);
} 
return post__delegate.call(this,url,p__10413);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__10417){
var url = cljs.core.first(arglist__10417);
var p__10413 = cljs.core.rest(arglist__10417);
return post__delegate(url,p__10413);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__10418){
var vec__10420 = p__10418;
var req = cljs.core.nth.call(null,vec__10420,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__10418 = null;
if (arguments.length > 1) {
var G__10421__i = 0, G__10421__a = new Array(arguments.length -  1);
while (G__10421__i < G__10421__a.length) {G__10421__a[G__10421__i] = arguments[G__10421__i + 1]; ++G__10421__i;}
  p__10418 = new cljs.core.IndexedSeq(G__10421__a,0);
} 
return put__delegate.call(this,url,p__10418);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__10422){
var url = cljs.core.first(arglist__10422);
var p__10418 = cljs.core.rest(arglist__10422);
return put__delegate(url,p__10418);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map