// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function if_pos(v){
if(cljs.core.truth_((function (){var and__3760__auto__ = v;
if(cljs.core.truth_(and__3760__auto__)){
return (v > (0));
} else {
return and__3760__auto__;
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
return cljs.core.reduce.call(null,(function (p1__18986_SHARP_,p2__18985_SHARP_){
var vec__18988 = clojure.string.split.call(null,p2__18985_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__18988,(0),null);
var v = cljs.core.nth.call(null,vec__18988,(1),null);
return cljs.core.assoc.call(null,p1__18986_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__18989_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__18989_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__18990){
var vec__18992 = p__18990;
var k = cljs.core.nth.call(null,vec__18992,(0),null);
var v = cljs.core.nth.call(null,vec__18992,(1),null);
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
return (function (p1__18993_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__18993_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__3760__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__3760__auto__){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3760__auto__;
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
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/edn"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__18994_SHARP_){
return cljs_http.client.decode_body.call(null,p1__18994_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__18995){
var vec__18997 = p__18995;
var accept = cljs.core.nth.call(null,vec__18997,(0),null);
return ((function (vec__18997,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__3772__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var accept__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__18997,accept))
};
var wrap_accept = function (client,var_args){
var p__18995 = null;
if (arguments.length > 1) {
var G__18998__i = 0, G__18998__a = new Array(arguments.length -  1);
while (G__18998__i < G__18998__a.length) {G__18998__a[G__18998__i] = arguments[G__18998__i + 1]; ++G__18998__i;}
  p__18995 = new cljs.core.IndexedSeq(G__18998__a,0);
} 
return wrap_accept__delegate.call(this,client,p__18995);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__18999){
var client = cljs.core.first(arglist__18999);
var p__18995 = cljs.core.rest(arglist__18999);
return wrap_accept__delegate(client,p__18995);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__19000){
var vec__19002 = p__19000;
var content_type = cljs.core.nth.call(null,vec__19002,(0),null);
return ((function (vec__19002,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__3772__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var content_type__$1 = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__19002,content_type))
};
var wrap_content_type = function (client,var_args){
var p__19000 = null;
if (arguments.length > 1) {
var G__19003__i = 0, G__19003__a = new Array(arguments.length -  1);
while (G__19003__i < G__19003__a.length) {G__19003__a[G__19003__i] = arguments[G__19003__i + 1]; ++G__19003__i;}
  p__19000 = new cljs.core.IndexedSeq(G__19003__a,0);
} 
return wrap_content_type__delegate.call(this,client,p__19000);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__19004){
var client = cljs.core.first(arglist__19004);
var p__19000 = cljs.core.rest(arglist__19004);
return wrap_content_type__delegate(client,p__19000);
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
cljs_http.client.wrap_transit_params = (function wrap_transit_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
var map__19006 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__19006__$1 = ((cljs.core.seq_QMARK_.call(null,map__19006))?cljs.core.apply.call(null,cljs.core.hash_map,map__19006):map__19006);
var encoding_opts = cljs.core.get.call(null,map__19006__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var encoding = cljs.core.get.call(null,map__19006__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/transit+json"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/transit+json responses.
*/
cljs_http.client.wrap_transit_response = (function wrap_transit_response(client){
return (function (request){
var map__19010 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__19010__$1 = ((cljs.core.seq_QMARK_.call(null,map__19010))?cljs.core.apply.call(null,cljs.core.hash_map,map__19010):map__19010);
var decoding_opts = cljs.core.get.call(null,map__19010__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var decoding = cljs.core.get.call(null,map__19010__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var transit_decode = ((function (map__19010,map__19010__$1,decoding_opts,decoding){
return (function (p1__19007_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__19007_SHARP_,decoding,decoding_opts);
});})(map__19010,map__19010__$1,decoding_opts,decoding))
;
return cljs.core.async.map.call(null,((function (map__19010,map__19010__$1,decoding_opts,decoding,transit_decode){
return (function (p1__19008_SHARP_){
return cljs_http.client.decode_body.call(null,p1__19008_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__19010,map__19010__$1,decoding_opts,decoding,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var params = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/json"));
} else {
return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__19011_SHARP_){
return cljs_http.client.decode_body.call(null,p1__19011_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__19014){
var map__19015 = p__19014;
var map__19015__$1 = ((cljs.core.seq_QMARK_.call(null,map__19015))?cljs.core.apply.call(null,cljs.core.hash_map,map__19015):map__19015);
var req = map__19015__$1;
var query_params = cljs.core.get.call(null,map__19015__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__19018){
var map__19019 = p__19018;
var map__19019__$1 = ((cljs.core.seq_QMARK_.call(null,map__19019))?cljs.core.apply.call(null,cljs.core.hash_map,map__19019):map__19019);
var request = map__19019__$1;
var request_method = cljs.core.get.call(null,map__19019__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var form_params = cljs.core.get.call(null,map__19019__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
if(cljs.core.truth_((function (){var and__3760__auto__ = form_params;
if(cljs.core.truth_(and__3760__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3760__auto__;
}
})())){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"application/x-www-form-urlencoded"));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function generate_form_data(params){
var form_data = (new FormData());
var seq__19026_19032 = cljs.core.seq.call(null,params);
var chunk__19027_19033 = null;
var count__19028_19034 = (0);
var i__19029_19035 = (0);
while(true){
if((i__19029_19035 < count__19028_19034)){
var vec__19030_19036 = cljs.core._nth.call(null,chunk__19027_19033,i__19029_19035);
var k_19037 = cljs.core.nth.call(null,vec__19030_19036,(0),null);
var v_19038 = cljs.core.nth.call(null,vec__19030_19036,(1),null);
form_data.append(cljs.core.name.call(null,k_19037),v_19038);

var G__19039 = seq__19026_19032;
var G__19040 = chunk__19027_19033;
var G__19041 = count__19028_19034;
var G__19042 = (i__19029_19035 + (1));
seq__19026_19032 = G__19039;
chunk__19027_19033 = G__19040;
count__19028_19034 = G__19041;
i__19029_19035 = G__19042;
continue;
} else {
var temp__4126__auto___19043 = cljs.core.seq.call(null,seq__19026_19032);
if(temp__4126__auto___19043){
var seq__19026_19044__$1 = temp__4126__auto___19043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19026_19044__$1)){
var c__4559__auto___19045 = cljs.core.chunk_first.call(null,seq__19026_19044__$1);
var G__19046 = cljs.core.chunk_rest.call(null,seq__19026_19044__$1);
var G__19047 = c__4559__auto___19045;
var G__19048 = cljs.core.count.call(null,c__4559__auto___19045);
var G__19049 = (0);
seq__19026_19032 = G__19046;
chunk__19027_19033 = G__19047;
count__19028_19034 = G__19048;
i__19029_19035 = G__19049;
continue;
} else {
var vec__19031_19050 = cljs.core.first.call(null,seq__19026_19044__$1);
var k_19051 = cljs.core.nth.call(null,vec__19031_19050,(0),null);
var v_19052 = cljs.core.nth.call(null,vec__19031_19050,(1),null);
form_data.append(cljs.core.name.call(null,k_19051),v_19052);

var G__19053 = cljs.core.next.call(null,seq__19026_19044__$1);
var G__19054 = null;
var G__19055 = (0);
var G__19056 = (0);
seq__19026_19032 = G__19053;
chunk__19027_19033 = G__19054;
count__19028_19034 = G__19055;
i__19029_19035 = G__19056;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function wrap_multipart_params(client){
return (function (p__19059){
var map__19060 = p__19059;
var map__19060__$1 = ((cljs.core.seq_QMARK_.call(null,map__19060))?cljs.core.apply.call(null,cljs.core.hash_map,map__19060):map__19060);
var request = map__19060__$1;
var request_method = cljs.core.get.call(null,map__19060__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var multipart_params = cljs.core.get.call(null,map__19060__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
if(cljs.core.truth_((function (){var and__3760__auto__ = multipart_params;
if(cljs.core.truth_(and__3760__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3760__auto__;
}
})())){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),"multipart/form-data"));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function wrap_method(client){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var m = temp__4124__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){
return (function (p1__19061_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__19061_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__19065){
var map__19066 = p__19065;
var map__19066__$1 = ((cljs.core.seq_QMARK_.call(null,map__19066))?cljs.core.apply.call(null,cljs.core.hash_map,map__19066):map__19066);
var req = map__19066__$1;
var query_params = cljs.core.get.call(null,map__19066__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__19066,map__19066__$1,req,query_params){
return (function (p1__19062_SHARP_){
return cljs.core.merge.call(null,p1__19062_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__19066,map__19066__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__19067){
var vec__19069 = p__19067;
var credentials = cljs.core.nth.call(null,vec__19069,(0),null);
return ((function (vec__19069,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3772__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__19069,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__19067 = null;
if (arguments.length > 1) {
var G__19070__i = 0, G__19070__a = new Array(arguments.length -  1);
while (G__19070__i < G__19070__a.length) {G__19070__a[G__19070__i] = arguments[G__19070__i + 1]; ++G__19070__i;}
  p__19067 = new cljs.core.IndexedSeq(G__19070__a,0);
} 
return wrap_basic_auth__delegate.call(this,client,p__19067);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__19071){
var client = cljs.core.first(arglist__19071);
var p__19067 = cljs.core.rest(arglist__19071);
return wrap_basic_auth__delegate(client,p__19067);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){
return (function (req){
var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4124__auto__)){
var oauth_token = temp__4124__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
* Pipe the response-channel into the request-map's
* custom channel (e.g. to enable transducers)
*/
cljs_http.client.wrap_channel_from_request_map = (function wrap_channel_from_request_map(client){
return (function (request){
var temp__4124__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4124__auto__)){
var custom_channel = temp__4124__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
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
var delete$__delegate = function (url,p__19072){
var vec__19074 = p__19072;
var req = cljs.core.nth.call(null,vec__19074,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__19072 = null;
if (arguments.length > 1) {
var G__19075__i = 0, G__19075__a = new Array(arguments.length -  1);
while (G__19075__i < G__19075__a.length) {G__19075__a[G__19075__i] = arguments[G__19075__i + 1]; ++G__19075__i;}
  p__19072 = new cljs.core.IndexedSeq(G__19075__a,0);
} 
return delete$__delegate.call(this,url,p__19072);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__19076){
var url = cljs.core.first(arglist__19076);
var p__19072 = cljs.core.rest(arglist__19076);
return delete$__delegate(url,p__19072);
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
var get__delegate = function (url,p__19077){
var vec__19079 = p__19077;
var req = cljs.core.nth.call(null,vec__19079,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__19077 = null;
if (arguments.length > 1) {
var G__19080__i = 0, G__19080__a = new Array(arguments.length -  1);
while (G__19080__i < G__19080__a.length) {G__19080__a[G__19080__i] = arguments[G__19080__i + 1]; ++G__19080__i;}
  p__19077 = new cljs.core.IndexedSeq(G__19080__a,0);
} 
return get__delegate.call(this,url,p__19077);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__19081){
var url = cljs.core.first(arglist__19081);
var p__19077 = cljs.core.rest(arglist__19081);
return get__delegate(url,p__19077);
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
var head__delegate = function (url,p__19082){
var vec__19084 = p__19082;
var req = cljs.core.nth.call(null,vec__19084,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__19082 = null;
if (arguments.length > 1) {
var G__19085__i = 0, G__19085__a = new Array(arguments.length -  1);
while (G__19085__i < G__19085__a.length) {G__19085__a[G__19085__i] = arguments[G__19085__i + 1]; ++G__19085__i;}
  p__19082 = new cljs.core.IndexedSeq(G__19085__a,0);
} 
return head__delegate.call(this,url,p__19082);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__19086){
var url = cljs.core.first(arglist__19086);
var p__19082 = cljs.core.rest(arglist__19086);
return head__delegate(url,p__19082);
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
var move__delegate = function (url,p__19087){
var vec__19089 = p__19087;
var req = cljs.core.nth.call(null,vec__19089,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__19087 = null;
if (arguments.length > 1) {
var G__19090__i = 0, G__19090__a = new Array(arguments.length -  1);
while (G__19090__i < G__19090__a.length) {G__19090__a[G__19090__i] = arguments[G__19090__i + 1]; ++G__19090__i;}
  p__19087 = new cljs.core.IndexedSeq(G__19090__a,0);
} 
return move__delegate.call(this,url,p__19087);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__19091){
var url = cljs.core.first(arglist__19091);
var p__19087 = cljs.core.rest(arglist__19091);
return move__delegate(url,p__19087);
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
var options__delegate = function (url,p__19092){
var vec__19094 = p__19092;
var req = cljs.core.nth.call(null,vec__19094,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__19092 = null;
if (arguments.length > 1) {
var G__19095__i = 0, G__19095__a = new Array(arguments.length -  1);
while (G__19095__i < G__19095__a.length) {G__19095__a[G__19095__i] = arguments[G__19095__i + 1]; ++G__19095__i;}
  p__19092 = new cljs.core.IndexedSeq(G__19095__a,0);
} 
return options__delegate.call(this,url,p__19092);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__19096){
var url = cljs.core.first(arglist__19096);
var p__19092 = cljs.core.rest(arglist__19096);
return options__delegate(url,p__19092);
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
var patch__delegate = function (url,p__19097){
var vec__19099 = p__19097;
var req = cljs.core.nth.call(null,vec__19099,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__19097 = null;
if (arguments.length > 1) {
var G__19100__i = 0, G__19100__a = new Array(arguments.length -  1);
while (G__19100__i < G__19100__a.length) {G__19100__a[G__19100__i] = arguments[G__19100__i + 1]; ++G__19100__i;}
  p__19097 = new cljs.core.IndexedSeq(G__19100__a,0);
} 
return patch__delegate.call(this,url,p__19097);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__19101){
var url = cljs.core.first(arglist__19101);
var p__19097 = cljs.core.rest(arglist__19101);
return patch__delegate(url,p__19097);
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
var post__delegate = function (url,p__19102){
var vec__19104 = p__19102;
var req = cljs.core.nth.call(null,vec__19104,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__19102 = null;
if (arguments.length > 1) {
var G__19105__i = 0, G__19105__a = new Array(arguments.length -  1);
while (G__19105__i < G__19105__a.length) {G__19105__a[G__19105__i] = arguments[G__19105__i + 1]; ++G__19105__i;}
  p__19102 = new cljs.core.IndexedSeq(G__19105__a,0);
} 
return post__delegate.call(this,url,p__19102);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__19106){
var url = cljs.core.first(arglist__19106);
var p__19102 = cljs.core.rest(arglist__19106);
return post__delegate(url,p__19102);
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
var put__delegate = function (url,p__19107){
var vec__19109 = p__19107;
var req = cljs.core.nth.call(null,vec__19109,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__19107 = null;
if (arguments.length > 1) {
var G__19110__i = 0, G__19110__a = new Array(arguments.length -  1);
while (G__19110__i < G__19110__a.length) {G__19110__a[G__19110__i] = arguments[G__19110__i + 1]; ++G__19110__i;}
  p__19107 = new cljs.core.IndexedSeq(G__19110__a,0);
} 
return put__delegate.call(this,url,p__19107);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__19111){
var url = cljs.core.first(arglist__19111);
var p__19107 = cljs.core.rest(arglist__19111);
return put__delegate(url,p__19107);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

//# sourceMappingURL=client.js.map?rel=1423280673066