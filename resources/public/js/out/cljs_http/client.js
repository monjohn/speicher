// Compiled by ClojureScript 0.0-2850 {}
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
if(cljs.core.truth_((function (){var and__7492__auto__ = v;
if(cljs.core.truth_(and__7492__auto__)){
return (v > (0));
} else {
return and__7492__auto__;
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
return cljs.core.reduce.call(null,(function (p1__23654_SHARP_,p2__23653_SHARP_){
var vec__23656 = clojure.string.split.call(null,p2__23653_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__23656,(0),null);
var v = cljs.core.nth.call(null,vec__23656,(1),null);
return cljs.core.assoc.call(null,p1__23654_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__23657_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__23657_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__23658){
var vec__23660 = p__23658;
var k = cljs.core.nth.call(null,vec__23660,(0),null);
var v = cljs.core.nth.call(null,vec__23660,(1),null);
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
return (function (p1__23661_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__23661_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__7492__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__7492__auto__){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__7492__auto__;
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
return cljs.core.async.map.call(null,(function (p1__23662_SHARP_){
return cljs_http.client.decode_body.call(null,p1__23662_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__23663){
var vec__23665 = p__23663;
var accept = cljs.core.nth.call(null,vec__23665,(0),null);
return ((function (vec__23665,accept){
return (function (request){
var temp__4124__auto__ = (function (){var or__7504__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
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
;})(vec__23665,accept))
};
var wrap_accept = function (client,var_args){
var p__23663 = null;
if (arguments.length > 1) {
var G__23666__i = 0, G__23666__a = new Array(arguments.length -  1);
while (G__23666__i < G__23666__a.length) {G__23666__a[G__23666__i] = arguments[G__23666__i + 1]; ++G__23666__i;}
  p__23663 = new cljs.core.IndexedSeq(G__23666__a,0);
} 
return wrap_accept__delegate.call(this,client,p__23663);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__23667){
var client = cljs.core.first(arglist__23667);
var p__23663 = cljs.core.rest(arglist__23667);
return wrap_accept__delegate(client,p__23663);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__23668){
var vec__23670 = p__23668;
var content_type = cljs.core.nth.call(null,vec__23670,(0),null);
return ((function (vec__23670,content_type){
return (function (request){
var temp__4124__auto__ = (function (){var or__7504__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
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
;})(vec__23670,content_type))
};
var wrap_content_type = function (client,var_args){
var p__23668 = null;
if (arguments.length > 1) {
var G__23671__i = 0, G__23671__a = new Array(arguments.length -  1);
while (G__23671__i < G__23671__a.length) {G__23671__a[G__23671__i] = arguments[G__23671__i + 1]; ++G__23671__i;}
  p__23668 = new cljs.core.IndexedSeq(G__23671__a,0);
} 
return wrap_content_type__delegate.call(this,client,p__23668);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__23672){
var client = cljs.core.first(arglist__23672);
var p__23668 = cljs.core.rest(arglist__23672);
return wrap_content_type__delegate(client,p__23668);
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
var map__23674 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__23674__$1 = ((cljs.core.seq_QMARK_.call(null,map__23674))?cljs.core.apply.call(null,cljs.core.hash_map,map__23674):map__23674);
var encoding_opts = cljs.core.get.call(null,map__23674__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var encoding = cljs.core.get.call(null,map__23674__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
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
var map__23678 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__23678__$1 = ((cljs.core.seq_QMARK_.call(null,map__23678))?cljs.core.apply.call(null,cljs.core.hash_map,map__23678):map__23678);
var decoding_opts = cljs.core.get.call(null,map__23678__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var decoding = cljs.core.get.call(null,map__23678__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var transit_decode = ((function (map__23678,map__23678__$1,decoding_opts,decoding){
return (function (p1__23675_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__23675_SHARP_,decoding,decoding_opts);
});})(map__23678,map__23678__$1,decoding_opts,decoding))
;
return cljs.core.async.map.call(null,((function (map__23678,map__23678__$1,decoding_opts,decoding,transit_decode){
return (function (p1__23676_SHARP_){
return cljs_http.client.decode_body.call(null,p1__23676_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__23678,map__23678__$1,decoding_opts,decoding,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__23679_SHARP_){
return cljs_http.client.decode_body.call(null,p1__23679_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){
return (function (p__23682){
var map__23683 = p__23682;
var map__23683__$1 = ((cljs.core.seq_QMARK_.call(null,map__23683))?cljs.core.apply.call(null,cljs.core.hash_map,map__23683):map__23683);
var req = map__23683__$1;
var query_params = cljs.core.get.call(null,map__23683__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){
return (function (p__23686){
var map__23687 = p__23686;
var map__23687__$1 = ((cljs.core.seq_QMARK_.call(null,map__23687))?cljs.core.apply.call(null,cljs.core.hash_map,map__23687):map__23687);
var request = map__23687__$1;
var request_method = cljs.core.get.call(null,map__23687__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var form_params = cljs.core.get.call(null,map__23687__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
if(cljs.core.truth_((function (){var and__7492__auto__ = form_params;
if(cljs.core.truth_(and__7492__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__7492__auto__;
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
var seq__23694_23700 = cljs.core.seq.call(null,params);
var chunk__23695_23701 = null;
var count__23696_23702 = (0);
var i__23697_23703 = (0);
while(true){
if((i__23697_23703 < count__23696_23702)){
var vec__23698_23704 = cljs.core._nth.call(null,chunk__23695_23701,i__23697_23703);
var k_23705 = cljs.core.nth.call(null,vec__23698_23704,(0),null);
var v_23706 = cljs.core.nth.call(null,vec__23698_23704,(1),null);
form_data.append(cljs.core.name.call(null,k_23705),v_23706);

var G__23707 = seq__23694_23700;
var G__23708 = chunk__23695_23701;
var G__23709 = count__23696_23702;
var G__23710 = (i__23697_23703 + (1));
seq__23694_23700 = G__23707;
chunk__23695_23701 = G__23708;
count__23696_23702 = G__23709;
i__23697_23703 = G__23710;
continue;
} else {
var temp__4126__auto___23711 = cljs.core.seq.call(null,seq__23694_23700);
if(temp__4126__auto___23711){
var seq__23694_23712__$1 = temp__4126__auto___23711;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23694_23712__$1)){
var c__8291__auto___23713 = cljs.core.chunk_first.call(null,seq__23694_23712__$1);
var G__23714 = cljs.core.chunk_rest.call(null,seq__23694_23712__$1);
var G__23715 = c__8291__auto___23713;
var G__23716 = cljs.core.count.call(null,c__8291__auto___23713);
var G__23717 = (0);
seq__23694_23700 = G__23714;
chunk__23695_23701 = G__23715;
count__23696_23702 = G__23716;
i__23697_23703 = G__23717;
continue;
} else {
var vec__23699_23718 = cljs.core.first.call(null,seq__23694_23712__$1);
var k_23719 = cljs.core.nth.call(null,vec__23699_23718,(0),null);
var v_23720 = cljs.core.nth.call(null,vec__23699_23718,(1),null);
form_data.append(cljs.core.name.call(null,k_23719),v_23720);

var G__23721 = cljs.core.next.call(null,seq__23694_23712__$1);
var G__23722 = null;
var G__23723 = (0);
var G__23724 = (0);
seq__23694_23700 = G__23721;
chunk__23695_23701 = G__23722;
count__23696_23702 = G__23723;
i__23697_23703 = G__23724;
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
return (function (p__23727){
var map__23728 = p__23727;
var map__23728__$1 = ((cljs.core.seq_QMARK_.call(null,map__23728))?cljs.core.apply.call(null,cljs.core.hash_map,map__23728):map__23728);
var request = map__23728__$1;
var request_method = cljs.core.get.call(null,map__23728__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var multipart_params = cljs.core.get.call(null,map__23728__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
if(cljs.core.truth_((function (){var and__7492__auto__ = multipart_params;
if(cljs.core.truth_(and__7492__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__7492__auto__;
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
return (function (p1__23729_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__23729_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){
return (function (p__23733){
var map__23734 = p__23733;
var map__23734__$1 = ((cljs.core.seq_QMARK_.call(null,map__23734))?cljs.core.apply.call(null,cljs.core.hash_map,map__23734):map__23734);
var req = map__23734__$1;
var query_params = cljs.core.get.call(null,map__23734__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4124__auto__)){
var spec = temp__4124__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4124__auto__,map__23734,map__23734__$1,req,query_params){
return (function (p1__23730_SHARP_){
return cljs.core.merge.call(null,p1__23730_SHARP_,query_params);
});})(spec,temp__4124__auto__,map__23734,map__23734__$1,req,query_params))
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
var wrap_basic_auth__delegate = function (client,p__23735){
var vec__23737 = p__23735;
var credentials = cljs.core.nth.call(null,vec__23737,(0),null);
return ((function (vec__23737,credentials){
return (function (req){
var credentials__$1 = (function (){var or__7504__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
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
;})(vec__23737,credentials))
};
var wrap_basic_auth = function (client,var_args){
var p__23735 = null;
if (arguments.length > 1) {
var G__23738__i = 0, G__23738__a = new Array(arguments.length -  1);
while (G__23738__i < G__23738__a.length) {G__23738__a[G__23738__i] = arguments[G__23738__i + 1]; ++G__23738__i;}
  p__23735 = new cljs.core.IndexedSeq(G__23738__a,0);
} 
return wrap_basic_auth__delegate.call(this,client,p__23735);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__23739){
var client = cljs.core.first(arglist__23739);
var p__23735 = cljs.core.rest(arglist__23739);
return wrap_basic_auth__delegate(client,p__23735);
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
var delete$__delegate = function (url,p__23740){
var vec__23742 = p__23740;
var req = cljs.core.nth.call(null,vec__23742,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var delete$ = function (url,var_args){
var p__23740 = null;
if (arguments.length > 1) {
var G__23743__i = 0, G__23743__a = new Array(arguments.length -  1);
while (G__23743__i < G__23743__a.length) {G__23743__a[G__23743__i] = arguments[G__23743__i + 1]; ++G__23743__i;}
  p__23740 = new cljs.core.IndexedSeq(G__23743__a,0);
} 
return delete$__delegate.call(this,url,p__23740);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__23744){
var url = cljs.core.first(arglist__23744);
var p__23740 = cljs.core.rest(arglist__23744);
return delete$__delegate(url,p__23740);
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
var get__delegate = function (url,p__23745){
var vec__23747 = p__23745;
var req = cljs.core.nth.call(null,vec__23747,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var get = function (url,var_args){
var p__23745 = null;
if (arguments.length > 1) {
var G__23748__i = 0, G__23748__a = new Array(arguments.length -  1);
while (G__23748__i < G__23748__a.length) {G__23748__a[G__23748__i] = arguments[G__23748__i + 1]; ++G__23748__i;}
  p__23745 = new cljs.core.IndexedSeq(G__23748__a,0);
} 
return get__delegate.call(this,url,p__23745);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__23749){
var url = cljs.core.first(arglist__23749);
var p__23745 = cljs.core.rest(arglist__23749);
return get__delegate(url,p__23745);
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
var head__delegate = function (url,p__23750){
var vec__23752 = p__23750;
var req = cljs.core.nth.call(null,vec__23752,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var head = function (url,var_args){
var p__23750 = null;
if (arguments.length > 1) {
var G__23753__i = 0, G__23753__a = new Array(arguments.length -  1);
while (G__23753__i < G__23753__a.length) {G__23753__a[G__23753__i] = arguments[G__23753__i + 1]; ++G__23753__i;}
  p__23750 = new cljs.core.IndexedSeq(G__23753__a,0);
} 
return head__delegate.call(this,url,p__23750);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__23754){
var url = cljs.core.first(arglist__23754);
var p__23750 = cljs.core.rest(arglist__23754);
return head__delegate(url,p__23750);
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
var move__delegate = function (url,p__23755){
var vec__23757 = p__23755;
var req = cljs.core.nth.call(null,vec__23757,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var move = function (url,var_args){
var p__23755 = null;
if (arguments.length > 1) {
var G__23758__i = 0, G__23758__a = new Array(arguments.length -  1);
while (G__23758__i < G__23758__a.length) {G__23758__a[G__23758__i] = arguments[G__23758__i + 1]; ++G__23758__i;}
  p__23755 = new cljs.core.IndexedSeq(G__23758__a,0);
} 
return move__delegate.call(this,url,p__23755);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__23759){
var url = cljs.core.first(arglist__23759);
var p__23755 = cljs.core.rest(arglist__23759);
return move__delegate(url,p__23755);
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
var options__delegate = function (url,p__23760){
var vec__23762 = p__23760;
var req = cljs.core.nth.call(null,vec__23762,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var options = function (url,var_args){
var p__23760 = null;
if (arguments.length > 1) {
var G__23763__i = 0, G__23763__a = new Array(arguments.length -  1);
while (G__23763__i < G__23763__a.length) {G__23763__a[G__23763__i] = arguments[G__23763__i + 1]; ++G__23763__i;}
  p__23760 = new cljs.core.IndexedSeq(G__23763__a,0);
} 
return options__delegate.call(this,url,p__23760);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__23764){
var url = cljs.core.first(arglist__23764);
var p__23760 = cljs.core.rest(arglist__23764);
return options__delegate(url,p__23760);
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
var patch__delegate = function (url,p__23765){
var vec__23767 = p__23765;
var req = cljs.core.nth.call(null,vec__23767,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var patch = function (url,var_args){
var p__23765 = null;
if (arguments.length > 1) {
var G__23768__i = 0, G__23768__a = new Array(arguments.length -  1);
while (G__23768__i < G__23768__a.length) {G__23768__a[G__23768__i] = arguments[G__23768__i + 1]; ++G__23768__i;}
  p__23765 = new cljs.core.IndexedSeq(G__23768__a,0);
} 
return patch__delegate.call(this,url,p__23765);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__23769){
var url = cljs.core.first(arglist__23769);
var p__23765 = cljs.core.rest(arglist__23769);
return patch__delegate(url,p__23765);
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
var post__delegate = function (url,p__23770){
var vec__23772 = p__23770;
var req = cljs.core.nth.call(null,vec__23772,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var post = function (url,var_args){
var p__23770 = null;
if (arguments.length > 1) {
var G__23773__i = 0, G__23773__a = new Array(arguments.length -  1);
while (G__23773__i < G__23773__a.length) {G__23773__a[G__23773__i] = arguments[G__23773__i + 1]; ++G__23773__i;}
  p__23770 = new cljs.core.IndexedSeq(G__23773__a,0);
} 
return post__delegate.call(this,url,p__23770);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__23774){
var url = cljs.core.first(arglist__23774);
var p__23770 = cljs.core.rest(arglist__23774);
return post__delegate(url,p__23770);
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
var put__delegate = function (url,p__23775){
var vec__23777 = p__23775;
var req = cljs.core.nth.call(null,vec__23777,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
};
var put = function (url,var_args){
var p__23775 = null;
if (arguments.length > 1) {
var G__23778__i = 0, G__23778__a = new Array(arguments.length -  1);
while (G__23778__i < G__23778__a.length) {G__23778__a[G__23778__i] = arguments[G__23778__i + 1]; ++G__23778__i;}
  p__23775 = new cljs.core.IndexedSeq(G__23778__a,0);
} 
return put__delegate.call(this,url,p__23775);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__23779){
var url = cljs.core.first(arglist__23779);
var p__23775 = cljs.core.rest(arglist__23779);
return put__delegate(url,p__23775);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;
