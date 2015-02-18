// Compiled by ClojureScript 0.0-2850 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__32169_SHARP_,p2__32170_SHARP_){
var and__7492__auto__ = p1__32169_SHARP_;
if(cljs.core.truth_(and__7492__auto__)){
return p2__32170_SHARP_;
} else {
return and__7492__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__7504__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__7504__auto__){
return or__7504__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__32172_SHARP_,p2__32171_SHARP_){
return [cljs.core.str(p2__32171_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__7504__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__7504__auto__){
return or__7504__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__7504__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__8401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8404__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8405__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8405__auto__,method_table__8401__auto__,prefer_table__8402__auto__,method_cache__8403__auto__,cached_hierarchy__8404__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__32173){
var map__32174 = p__32173;
var map__32174__$1 = ((cljs.core.seq_QMARK_.call(null,map__32174))?cljs.core.apply.call(null,cljs.core.hash_map,map__32174):map__32174);
var file = cljs.core.get.call(null,map__32174__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__32175){
var map__32176 = p__32175;
var map__32176__$1 = ((cljs.core.seq_QMARK_.call(null,map__32176))?cljs.core.apply.call(null,cljs.core.hash_map,map__32176):map__32176);
var namespace = cljs.core.get.call(null,map__32176__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__8401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8404__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8405__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8405__auto__,method_table__8401__auto__,prefer_table__8402__auto__,method_cache__8403__auto__,cached_hierarchy__8404__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e32177){if((e32177 instanceof Error)){
var e = e32177;
return false;
} else {
throw e32177;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var reload_file_STAR_ = null;
var reload_file_STAR___1 = (function (request_url){
return reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return reload_file_STAR___1.call(this,request_url);
case 2:
return reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = reload_file_STAR___1;
reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = reload_file_STAR___2;
return reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function reload_file(p__32178,callback){
var map__32180 = p__32178;
var map__32180__$1 = ((cljs.core.seq_QMARK_.call(null,map__32180))?cljs.core.apply.call(null,cljs.core.hash_map,map__32180):map__32180);
var file_msg = map__32180__$1;
var request_url = cljs.core.get.call(null,map__32180__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32180,map__32180__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32180,map__32180__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__32181){
var map__32183 = p__32181;
var map__32183__$1 = ((cljs.core.seq_QMARK_.call(null,map__32183))?cljs.core.apply.call(null,cljs.core.hash_map,map__32183):map__32183);
var file_msg = map__32183__$1;
var meta_data = cljs.core.get.call(null,map__32183__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__32183__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__7504__auto__ = meta_data;
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__7492__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__7492__auto__){
var or__7504__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__7504__auto____$1)){
return or__7504__auto____$1;
} else {
var and__7492__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__7492__auto____$1){
var or__7504__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__7504__auto____$2){
return or__7504__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__7492__auto____$1;
}
}
}
} else {
return and__7492__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__32184,callback){
var map__32186 = p__32184;
var map__32186__$1 = ((cljs.core.seq_QMARK_.call(null,map__32186))?cljs.core.apply.call(null,cljs.core.hash_map,map__32186):map__32186);
var file_msg = map__32186__$1;
var namespace = cljs.core.get.call(null,map__32186__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__32186__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__10282__auto___32273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___32273,out){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___32273,out){
return (function (state_32255){
var state_val_32256 = (state_32255[(1)]);
if((state_val_32256 === (7))){
var inst_32239 = (state_32255[(7)]);
var inst_32245 = (state_32255[(2)]);
var inst_32246 = cljs.core.async.put_BANG_.call(null,out,inst_32245);
var inst_32235 = inst_32239;
var state_32255__$1 = (function (){var statearr_32257 = state_32255;
(statearr_32257[(8)] = inst_32246);

(statearr_32257[(9)] = inst_32235);

return statearr_32257;
})();
var statearr_32258_32274 = state_32255__$1;
(statearr_32258_32274[(2)] = null);

(statearr_32258_32274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (6))){
var inst_32251 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
var statearr_32259_32275 = state_32255__$1;
(statearr_32259_32275[(2)] = inst_32251);

(statearr_32259_32275[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (5))){
var inst_32249 = cljs.core.async.close_BANG_.call(null,out);
var state_32255__$1 = state_32255;
var statearr_32260_32276 = state_32255__$1;
(statearr_32260_32276[(2)] = inst_32249);

(statearr_32260_32276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (4))){
var inst_32238 = (state_32255[(10)]);
var inst_32243 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32238);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32255__$1,(7),inst_32243);
} else {
if((state_val_32256 === (3))){
var inst_32253 = (state_32255[(2)]);
var state_32255__$1 = state_32255;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32255__$1,inst_32253);
} else {
if((state_val_32256 === (2))){
var inst_32238 = (state_32255[(10)]);
var inst_32235 = (state_32255[(9)]);
var inst_32238__$1 = cljs.core.nth.call(null,inst_32235,(0),null);
var inst_32239 = cljs.core.nthnext.call(null,inst_32235,(1));
var inst_32240 = (inst_32238__$1 == null);
var inst_32241 = cljs.core.not.call(null,inst_32240);
var state_32255__$1 = (function (){var statearr_32261 = state_32255;
(statearr_32261[(10)] = inst_32238__$1);

(statearr_32261[(7)] = inst_32239);

return statearr_32261;
})();
if(inst_32241){
var statearr_32262_32277 = state_32255__$1;
(statearr_32262_32277[(1)] = (4));

} else {
var statearr_32263_32278 = state_32255__$1;
(statearr_32263_32278[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32256 === (1))){
var inst_32233 = cljs.core.nth.call(null,files,(0),null);
var inst_32234 = cljs.core.nthnext.call(null,files,(1));
var inst_32235 = files;
var state_32255__$1 = (function (){var statearr_32264 = state_32255;
(statearr_32264[(11)] = inst_32234);

(statearr_32264[(12)] = inst_32233);

(statearr_32264[(9)] = inst_32235);

return statearr_32264;
})();
var statearr_32265_32279 = state_32255__$1;
(statearr_32265_32279[(2)] = null);

(statearr_32265_32279[(1)] = (2));


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
});})(c__10282__auto___32273,out))
;
return ((function (switch__10226__auto__,c__10282__auto___32273,out){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_32269 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32269[(0)] = state_machine__10227__auto__);

(statearr_32269[(1)] = (1));

return statearr_32269;
});
var state_machine__10227__auto____1 = (function (state_32255){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_32255);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e32270){if((e32270 instanceof Object)){
var ex__10230__auto__ = e32270;
var statearr_32271_32280 = state_32255;
(statearr_32271_32280[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32255);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32281 = state_32255;
state_32255 = G__32281;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_32255){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_32255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___32273,out))
})();
var state__10284__auto__ = (function (){var statearr_32272 = f__10283__auto__.call(null);
(statearr_32272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___32273);

return statearr_32272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___32273,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__32282,p__32283){
var map__32286 = p__32282;
var map__32286__$1 = ((cljs.core.seq_QMARK_.call(null,map__32286))?cljs.core.apply.call(null,cljs.core.hash_map,map__32286):map__32286);
var opts = map__32286__$1;
var url_rewriter = cljs.core.get.call(null,map__32286__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__32287 = p__32283;
var map__32287__$1 = ((cljs.core.seq_QMARK_.call(null,map__32287))?cljs.core.apply.call(null,cljs.core.hash_map,map__32287):map__32287);
var file_msg = map__32287__$1;
var file = cljs.core.get.call(null,map__32287__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__32288){
var map__32291 = p__32288;
var map__32291__$1 = ((cljs.core.seq_QMARK_.call(null,map__32291))?cljs.core.apply.call(null,cljs.core.hash_map,map__32291):map__32291);
var file = cljs.core.get.call(null,map__32291__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__32291__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__7492__auto__ = eval_body__$1;
if(cljs.core.truth_(and__7492__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__7492__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e32292){var e = e32292;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__32297,p__32298){
var map__32499 = p__32297;
var map__32499__$1 = ((cljs.core.seq_QMARK_.call(null,map__32499))?cljs.core.apply.call(null,cljs.core.hash_map,map__32499):map__32499);
var opts = map__32499__$1;
var load_unchanged_files = cljs.core.get.call(null,map__32499__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__32499__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__32499__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__32500 = p__32298;
var map__32500__$1 = ((cljs.core.seq_QMARK_.call(null,map__32500))?cljs.core.apply.call(null,cljs.core.hash_map,map__32500):map__32500);
var msg = map__32500__$1;
var files = cljs.core.get.call(null,map__32500__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__10282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files){
return (function (state_32624){
var state_val_32625 = (state_32624[(1)]);
if((state_val_32625 === (7))){
var inst_32514 = (state_32624[(7)]);
var inst_32512 = (state_32624[(8)]);
var inst_32513 = (state_32624[(9)]);
var inst_32511 = (state_32624[(10)]);
var inst_32519 = cljs.core._nth.call(null,inst_32512,inst_32514);
var inst_32520 = figwheel.client.file_reloading.eval_body.call(null,inst_32519);
var inst_32521 = (inst_32514 + (1));
var tmp32626 = inst_32512;
var tmp32627 = inst_32513;
var tmp32628 = inst_32511;
var inst_32511__$1 = tmp32628;
var inst_32512__$1 = tmp32626;
var inst_32513__$1 = tmp32627;
var inst_32514__$1 = inst_32521;
var state_32624__$1 = (function (){var statearr_32629 = state_32624;
(statearr_32629[(7)] = inst_32514__$1);

(statearr_32629[(8)] = inst_32512__$1);

(statearr_32629[(11)] = inst_32520);

(statearr_32629[(9)] = inst_32513__$1);

(statearr_32629[(10)] = inst_32511__$1);

return statearr_32629;
})();
var statearr_32630_32699 = state_32624__$1;
(statearr_32630_32699[(2)] = null);

(statearr_32630_32699[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (20))){
var inst_32563 = (state_32624[(12)]);
var inst_32557 = (state_32624[(13)]);
var inst_32556 = (state_32624[(14)]);
var inst_32560 = (state_32624[(15)]);
var inst_32561 = (state_32624[(16)]);
var inst_32566 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32568 = (function (){var files_not_loaded = inst_32563;
var res = inst_32561;
var res_SINGLEQUOTE_ = inst_32560;
var files_SINGLEQUOTE_ = inst_32557;
var all_files = inst_32556;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32563,inst_32557,inst_32556,inst_32560,inst_32561,inst_32566,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files){
return (function (p__32567){
var map__32631 = p__32567;
var map__32631__$1 = ((cljs.core.seq_QMARK_.call(null,map__32631))?cljs.core.apply.call(null,cljs.core.hash_map,map__32631):map__32631);
var file = cljs.core.get.call(null,map__32631__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__32631__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32563,inst_32557,inst_32556,inst_32560,inst_32561,inst_32566,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files))
})();
var inst_32569 = cljs.core.map.call(null,inst_32568,inst_32561);
var inst_32570 = cljs.core.pr_str.call(null,inst_32569);
var inst_32571 = figwheel.client.utils.log.call(null,inst_32570);
var inst_32572 = (function (){var files_not_loaded = inst_32563;
var res = inst_32561;
var res_SINGLEQUOTE_ = inst_32560;
var files_SINGLEQUOTE_ = inst_32557;
var all_files = inst_32556;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32563,inst_32557,inst_32556,inst_32560,inst_32561,inst_32566,inst_32568,inst_32569,inst_32570,inst_32571,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32563,inst_32557,inst_32556,inst_32560,inst_32561,inst_32566,inst_32568,inst_32569,inst_32570,inst_32571,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files))
})();
var inst_32573 = setTimeout(inst_32572,(10));
var state_32624__$1 = (function (){var statearr_32632 = state_32624;
(statearr_32632[(17)] = inst_32571);

(statearr_32632[(18)] = inst_32566);

return statearr_32632;
})();
var statearr_32633_32700 = state_32624__$1;
(statearr_32633_32700[(2)] = inst_32573);

(statearr_32633_32700[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (27))){
var inst_32583 = (state_32624[(19)]);
var state_32624__$1 = state_32624;
var statearr_32634_32701 = state_32624__$1;
(statearr_32634_32701[(2)] = inst_32583);

(statearr_32634_32701[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (1))){
var inst_32503 = (state_32624[(20)]);
var inst_32501 = before_jsload.call(null,files);
var inst_32502 = (function (){return ((function (inst_32503,inst_32501,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files){
return (function (p1__32293_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32293_SHARP_);
});
;})(inst_32503,inst_32501,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files))
})();
var inst_32503__$1 = cljs.core.filter.call(null,inst_32502,files);
var inst_32504 = cljs.core.not_empty.call(null,inst_32503__$1);
var state_32624__$1 = (function (){var statearr_32635 = state_32624;
(statearr_32635[(20)] = inst_32503__$1);

(statearr_32635[(21)] = inst_32501);

return statearr_32635;
})();
if(cljs.core.truth_(inst_32504)){
var statearr_32636_32702 = state_32624__$1;
(statearr_32636_32702[(1)] = (2));

} else {
var statearr_32637_32703 = state_32624__$1;
(statearr_32637_32703[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (24))){
var state_32624__$1 = state_32624;
var statearr_32638_32704 = state_32624__$1;
(statearr_32638_32704[(2)] = null);

(statearr_32638_32704[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (4))){
var inst_32548 = (state_32624[(2)]);
var inst_32549 = (function (){return ((function (inst_32548,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files){
return (function (p1__32294_SHARP_){
var and__7492__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32294_SHARP_);
if(cljs.core.truth_(and__7492__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32294_SHARP_));
} else {
return and__7492__auto__;
}
});
;})(inst_32548,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files))
})();
var inst_32550 = cljs.core.filter.call(null,inst_32549,files);
var state_32624__$1 = (function (){var statearr_32639 = state_32624;
(statearr_32639[(22)] = inst_32550);

(statearr_32639[(23)] = inst_32548);

return statearr_32639;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_32640_32705 = state_32624__$1;
(statearr_32640_32705[(1)] = (16));

} else {
var statearr_32641_32706 = state_32624__$1;
(statearr_32641_32706[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (15))){
var inst_32538 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32642_32707 = state_32624__$1;
(statearr_32642_32707[(2)] = inst_32538);

(statearr_32642_32707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (21))){
var state_32624__$1 = state_32624;
var statearr_32643_32708 = state_32624__$1;
(statearr_32643_32708[(2)] = null);

(statearr_32643_32708[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (31))){
var inst_32591 = (state_32624[(24)]);
var inst_32601 = (state_32624[(2)]);
var inst_32602 = cljs.core.not_empty.call(null,inst_32591);
var state_32624__$1 = (function (){var statearr_32644 = state_32624;
(statearr_32644[(25)] = inst_32601);

return statearr_32644;
})();
if(cljs.core.truth_(inst_32602)){
var statearr_32645_32709 = state_32624__$1;
(statearr_32645_32709[(1)] = (32));

} else {
var statearr_32646_32710 = state_32624__$1;
(statearr_32646_32710[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (32))){
var inst_32591 = (state_32624[(24)]);
var inst_32604 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32591);
var inst_32605 = cljs.core.pr_str.call(null,inst_32604);
var inst_32606 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_32605)].join('');
var inst_32607 = figwheel.client.utils.log.call(null,inst_32606);
var state_32624__$1 = state_32624;
var statearr_32647_32711 = state_32624__$1;
(statearr_32647_32711[(2)] = inst_32607);

(statearr_32647_32711[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (33))){
var state_32624__$1 = state_32624;
var statearr_32648_32712 = state_32624__$1;
(statearr_32648_32712[(2)] = null);

(statearr_32648_32712[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (13))){
var inst_32524 = (state_32624[(26)]);
var inst_32528 = cljs.core.chunk_first.call(null,inst_32524);
var inst_32529 = cljs.core.chunk_rest.call(null,inst_32524);
var inst_32530 = cljs.core.count.call(null,inst_32528);
var inst_32511 = inst_32529;
var inst_32512 = inst_32528;
var inst_32513 = inst_32530;
var inst_32514 = (0);
var state_32624__$1 = (function (){var statearr_32649 = state_32624;
(statearr_32649[(7)] = inst_32514);

(statearr_32649[(8)] = inst_32512);

(statearr_32649[(9)] = inst_32513);

(statearr_32649[(10)] = inst_32511);

return statearr_32649;
})();
var statearr_32650_32713 = state_32624__$1;
(statearr_32650_32713[(2)] = null);

(statearr_32650_32713[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (22))){
var inst_32563 = (state_32624[(12)]);
var inst_32576 = (state_32624[(2)]);
var inst_32577 = cljs.core.not_empty.call(null,inst_32563);
var state_32624__$1 = (function (){var statearr_32651 = state_32624;
(statearr_32651[(27)] = inst_32576);

return statearr_32651;
})();
if(cljs.core.truth_(inst_32577)){
var statearr_32652_32714 = state_32624__$1;
(statearr_32652_32714[(1)] = (23));

} else {
var statearr_32653_32715 = state_32624__$1;
(statearr_32653_32715[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (36))){
var state_32624__$1 = state_32624;
var statearr_32654_32716 = state_32624__$1;
(statearr_32654_32716[(2)] = null);

(statearr_32654_32716[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (29))){
var inst_32592 = (state_32624[(28)]);
var inst_32595 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32592);
var inst_32596 = cljs.core.pr_str.call(null,inst_32595);
var inst_32597 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32596)].join('');
var inst_32598 = figwheel.client.utils.log.call(null,inst_32597);
var state_32624__$1 = state_32624;
var statearr_32655_32717 = state_32624__$1;
(statearr_32655_32717[(2)] = inst_32598);

(statearr_32655_32717[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (6))){
var inst_32545 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32656_32718 = state_32624__$1;
(statearr_32656_32718[(2)] = inst_32545);

(statearr_32656_32718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (28))){
var inst_32592 = (state_32624[(28)]);
var inst_32589 = (state_32624[(2)]);
var inst_32590 = cljs.core.get.call(null,inst_32589,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32591 = cljs.core.get.call(null,inst_32589,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_32592__$1 = cljs.core.get.call(null,inst_32589,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32593 = cljs.core.not_empty.call(null,inst_32592__$1);
var state_32624__$1 = (function (){var statearr_32657 = state_32624;
(statearr_32657[(28)] = inst_32592__$1);

(statearr_32657[(24)] = inst_32591);

(statearr_32657[(29)] = inst_32590);

return statearr_32657;
})();
if(cljs.core.truth_(inst_32593)){
var statearr_32658_32719 = state_32624__$1;
(statearr_32658_32719[(1)] = (29));

} else {
var statearr_32659_32720 = state_32624__$1;
(statearr_32659_32720[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (25))){
var inst_32622 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32624__$1,inst_32622);
} else {
if((state_val_32625 === (34))){
var inst_32590 = (state_32624[(29)]);
var inst_32610 = (state_32624[(2)]);
var inst_32611 = cljs.core.not_empty.call(null,inst_32590);
var state_32624__$1 = (function (){var statearr_32660 = state_32624;
(statearr_32660[(30)] = inst_32610);

return statearr_32660;
})();
if(cljs.core.truth_(inst_32611)){
var statearr_32661_32721 = state_32624__$1;
(statearr_32661_32721[(1)] = (35));

} else {
var statearr_32662_32722 = state_32624__$1;
(statearr_32662_32722[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (17))){
var inst_32550 = (state_32624[(22)]);
var state_32624__$1 = state_32624;
var statearr_32663_32723 = state_32624__$1;
(statearr_32663_32723[(2)] = inst_32550);

(statearr_32663_32723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (3))){
var state_32624__$1 = state_32624;
var statearr_32664_32724 = state_32624__$1;
(statearr_32664_32724[(2)] = null);

(statearr_32664_32724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (12))){
var inst_32541 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32665_32725 = state_32624__$1;
(statearr_32665_32725[(2)] = inst_32541);

(statearr_32665_32725[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (2))){
var inst_32503 = (state_32624[(20)]);
var inst_32510 = cljs.core.seq.call(null,inst_32503);
var inst_32511 = inst_32510;
var inst_32512 = null;
var inst_32513 = (0);
var inst_32514 = (0);
var state_32624__$1 = (function (){var statearr_32666 = state_32624;
(statearr_32666[(7)] = inst_32514);

(statearr_32666[(8)] = inst_32512);

(statearr_32666[(9)] = inst_32513);

(statearr_32666[(10)] = inst_32511);

return statearr_32666;
})();
var statearr_32667_32726 = state_32624__$1;
(statearr_32667_32726[(2)] = null);

(statearr_32667_32726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (23))){
var inst_32563 = (state_32624[(12)]);
var inst_32557 = (state_32624[(13)]);
var inst_32556 = (state_32624[(14)]);
var inst_32583 = (state_32624[(19)]);
var inst_32560 = (state_32624[(15)]);
var inst_32561 = (state_32624[(16)]);
var inst_32579 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32582 = (function (){var files_not_loaded = inst_32563;
var res = inst_32561;
var res_SINGLEQUOTE_ = inst_32560;
var files_SINGLEQUOTE_ = inst_32557;
var all_files = inst_32556;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32563,inst_32557,inst_32556,inst_32583,inst_32560,inst_32561,inst_32579,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files){
return (function (p__32581){
var map__32668 = p__32581;
var map__32668__$1 = ((cljs.core.seq_QMARK_.call(null,map__32668))?cljs.core.apply.call(null,cljs.core.hash_map,map__32668):map__32668);
var meta_data = cljs.core.get.call(null,map__32668__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32563,inst_32557,inst_32556,inst_32583,inst_32560,inst_32561,inst_32579,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files))
})();
var inst_32583__$1 = cljs.core.group_by.call(null,inst_32582,inst_32563);
var inst_32584 = cljs.core.seq_QMARK_.call(null,inst_32583__$1);
var state_32624__$1 = (function (){var statearr_32669 = state_32624;
(statearr_32669[(31)] = inst_32579);

(statearr_32669[(19)] = inst_32583__$1);

return statearr_32669;
})();
if(inst_32584){
var statearr_32670_32727 = state_32624__$1;
(statearr_32670_32727[(1)] = (26));

} else {
var statearr_32671_32728 = state_32624__$1;
(statearr_32671_32728[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (35))){
var inst_32590 = (state_32624[(29)]);
var inst_32613 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32590);
var inst_32614 = cljs.core.pr_str.call(null,inst_32613);
var inst_32615 = [cljs.core.str("not required: "),cljs.core.str(inst_32614)].join('');
var inst_32616 = figwheel.client.utils.log.call(null,inst_32615);
var state_32624__$1 = state_32624;
var statearr_32672_32729 = state_32624__$1;
(statearr_32672_32729[(2)] = inst_32616);

(statearr_32672_32729[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (19))){
var inst_32557 = (state_32624[(13)]);
var inst_32556 = (state_32624[(14)]);
var inst_32560 = (state_32624[(15)]);
var inst_32561 = (state_32624[(16)]);
var inst_32560__$1 = (state_32624[(2)]);
var inst_32561__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32560__$1);
var inst_32562 = (function (){var res = inst_32561__$1;
var res_SINGLEQUOTE_ = inst_32560__$1;
var files_SINGLEQUOTE_ = inst_32557;
var all_files = inst_32556;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32557,inst_32556,inst_32560,inst_32561,inst_32560__$1,inst_32561__$1,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files){
return (function (p1__32296_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32296_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_32557,inst_32556,inst_32560,inst_32561,inst_32560__$1,inst_32561__$1,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files))
})();
var inst_32563 = cljs.core.filter.call(null,inst_32562,inst_32560__$1);
var inst_32564 = cljs.core.not_empty.call(null,inst_32561__$1);
var state_32624__$1 = (function (){var statearr_32673 = state_32624;
(statearr_32673[(12)] = inst_32563);

(statearr_32673[(15)] = inst_32560__$1);

(statearr_32673[(16)] = inst_32561__$1);

return statearr_32673;
})();
if(cljs.core.truth_(inst_32564)){
var statearr_32674_32730 = state_32624__$1;
(statearr_32674_32730[(1)] = (20));

} else {
var statearr_32675_32731 = state_32624__$1;
(statearr_32675_32731[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (11))){
var state_32624__$1 = state_32624;
var statearr_32676_32732 = state_32624__$1;
(statearr_32676_32732[(2)] = null);

(statearr_32676_32732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (9))){
var inst_32543 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32677_32733 = state_32624__$1;
(statearr_32677_32733[(2)] = inst_32543);

(statearr_32677_32733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (5))){
var inst_32514 = (state_32624[(7)]);
var inst_32513 = (state_32624[(9)]);
var inst_32516 = (inst_32514 < inst_32513);
var inst_32517 = inst_32516;
var state_32624__$1 = state_32624;
if(cljs.core.truth_(inst_32517)){
var statearr_32678_32734 = state_32624__$1;
(statearr_32678_32734[(1)] = (7));

} else {
var statearr_32679_32735 = state_32624__$1;
(statearr_32679_32735[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (14))){
var inst_32524 = (state_32624[(26)]);
var inst_32533 = cljs.core.first.call(null,inst_32524);
var inst_32534 = figwheel.client.file_reloading.eval_body.call(null,inst_32533);
var inst_32535 = cljs.core.next.call(null,inst_32524);
var inst_32511 = inst_32535;
var inst_32512 = null;
var inst_32513 = (0);
var inst_32514 = (0);
var state_32624__$1 = (function (){var statearr_32680 = state_32624;
(statearr_32680[(32)] = inst_32534);

(statearr_32680[(7)] = inst_32514);

(statearr_32680[(8)] = inst_32512);

(statearr_32680[(9)] = inst_32513);

(statearr_32680[(10)] = inst_32511);

return statearr_32680;
})();
var statearr_32681_32736 = state_32624__$1;
(statearr_32681_32736[(2)] = null);

(statearr_32681_32736[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (26))){
var inst_32583 = (state_32624[(19)]);
var inst_32586 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32583);
var state_32624__$1 = state_32624;
var statearr_32682_32737 = state_32624__$1;
(statearr_32682_32737[(2)] = inst_32586);

(statearr_32682_32737[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (16))){
var inst_32550 = (state_32624[(22)]);
var inst_32552 = (function (){var all_files = inst_32550;
return ((function (all_files,inst_32550,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files){
return (function (p1__32295_SHARP_){
return cljs.core.update_in.call(null,p1__32295_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_32550,state_val_32625,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files))
})();
var inst_32553 = cljs.core.map.call(null,inst_32552,inst_32550);
var state_32624__$1 = state_32624;
var statearr_32683_32738 = state_32624__$1;
(statearr_32683_32738[(2)] = inst_32553);

(statearr_32683_32738[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (30))){
var state_32624__$1 = state_32624;
var statearr_32684_32739 = state_32624__$1;
(statearr_32684_32739[(2)] = null);

(statearr_32684_32739[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (10))){
var inst_32524 = (state_32624[(26)]);
var inst_32526 = cljs.core.chunked_seq_QMARK_.call(null,inst_32524);
var state_32624__$1 = state_32624;
if(inst_32526){
var statearr_32685_32740 = state_32624__$1;
(statearr_32685_32740[(1)] = (13));

} else {
var statearr_32686_32741 = state_32624__$1;
(statearr_32686_32741[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (18))){
var inst_32557 = (state_32624[(13)]);
var inst_32556 = (state_32624[(14)]);
var inst_32556__$1 = (state_32624[(2)]);
var inst_32557__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_32556__$1);
var inst_32558 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32557__$1);
var state_32624__$1 = (function (){var statearr_32687 = state_32624;
(statearr_32687[(13)] = inst_32557__$1);

(statearr_32687[(14)] = inst_32556__$1);

return statearr_32687;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32624__$1,(19),inst_32558);
} else {
if((state_val_32625 === (37))){
var inst_32619 = (state_32624[(2)]);
var state_32624__$1 = state_32624;
var statearr_32688_32742 = state_32624__$1;
(statearr_32688_32742[(2)] = inst_32619);

(statearr_32688_32742[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32625 === (8))){
var inst_32524 = (state_32624[(26)]);
var inst_32511 = (state_32624[(10)]);
var inst_32524__$1 = cljs.core.seq.call(null,inst_32511);
var state_32624__$1 = (function (){var statearr_32689 = state_32624;
(statearr_32689[(26)] = inst_32524__$1);

return statearr_32689;
})();
if(inst_32524__$1){
var statearr_32690_32743 = state_32624__$1;
(statearr_32690_32743[(1)] = (10));

} else {
var statearr_32691_32744 = state_32624__$1;
(statearr_32691_32744[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files))
;
return ((function (switch__10226__auto__,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_32695 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32695[(0)] = state_machine__10227__auto__);

(statearr_32695[(1)] = (1));

return statearr_32695;
});
var state_machine__10227__auto____1 = (function (state_32624){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_32624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e32696){if((e32696 instanceof Object)){
var ex__10230__auto__ = e32696;
var statearr_32697_32745 = state_32624;
(statearr_32697_32745[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32746 = state_32624;
state_32624 = G__32746;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_32624){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_32624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files))
})();
var state__10284__auto__ = (function (){var statearr_32698 = f__10283__auto__.call(null);
(statearr_32698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);

return statearr_32698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__,map__32499,map__32499__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__32500,map__32500__$1,msg,files))
);

return c__10282__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__32749,link){
var map__32751 = p__32749;
var map__32751__$1 = ((cljs.core.seq_QMARK_.call(null,map__32751))?cljs.core.apply.call(null,cljs.core.hash_map,map__32751):map__32751);
var file = cljs.core.get.call(null,map__32751__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__32751,map__32751__$1,file){
return (function (p1__32747_SHARP_,p2__32748_SHARP_){
if(cljs.core._EQ_.call(null,p1__32747_SHARP_,p2__32748_SHARP_)){
return p1__32747_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__32751,map__32751__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32755){
var map__32756 = p__32755;
var map__32756__$1 = ((cljs.core.seq_QMARK_.call(null,map__32756))?cljs.core.apply.call(null,cljs.core.hash_map,map__32756):map__32756);
var current_url_length = cljs.core.get.call(null,map__32756__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__32756__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32752_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32752_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__32757){
var map__32759 = p__32757;
var map__32759__$1 = ((cljs.core.seq_QMARK_.call(null,map__32759))?cljs.core.apply.call(null,cljs.core.hash_map,map__32759):map__32759);
var f_data = map__32759__$1;
var request_url = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__32759__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__7504__auto__ = request_url;
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__32760,files_msg){
var map__32782 = p__32760;
var map__32782__$1 = ((cljs.core.seq_QMARK_.call(null,map__32782))?cljs.core.apply.call(null,cljs.core.hash_map,map__32782):map__32782);
var opts = map__32782__$1;
var on_cssload = cljs.core.get.call(null,map__32782__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32783_32803 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32784_32804 = null;
var count__32785_32805 = (0);
var i__32786_32806 = (0);
while(true){
if((i__32786_32806 < count__32785_32805)){
var f_32807 = cljs.core._nth.call(null,chunk__32784_32804,i__32786_32806);
figwheel.client.file_reloading.reload_css_file.call(null,f_32807);

var G__32808 = seq__32783_32803;
var G__32809 = chunk__32784_32804;
var G__32810 = count__32785_32805;
var G__32811 = (i__32786_32806 + (1));
seq__32783_32803 = G__32808;
chunk__32784_32804 = G__32809;
count__32785_32805 = G__32810;
i__32786_32806 = G__32811;
continue;
} else {
var temp__4126__auto___32812 = cljs.core.seq.call(null,seq__32783_32803);
if(temp__4126__auto___32812){
var seq__32783_32813__$1 = temp__4126__auto___32812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32783_32813__$1)){
var c__8291__auto___32814 = cljs.core.chunk_first.call(null,seq__32783_32813__$1);
var G__32815 = cljs.core.chunk_rest.call(null,seq__32783_32813__$1);
var G__32816 = c__8291__auto___32814;
var G__32817 = cljs.core.count.call(null,c__8291__auto___32814);
var G__32818 = (0);
seq__32783_32803 = G__32815;
chunk__32784_32804 = G__32816;
count__32785_32805 = G__32817;
i__32786_32806 = G__32818;
continue;
} else {
var f_32819 = cljs.core.first.call(null,seq__32783_32813__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32819);

var G__32820 = cljs.core.next.call(null,seq__32783_32813__$1);
var G__32821 = null;
var G__32822 = (0);
var G__32823 = (0);
seq__32783_32803 = G__32820;
chunk__32784_32804 = G__32821;
count__32785_32805 = G__32822;
i__32786_32806 = G__32823;
continue;
}
} else {
}
}
break;
}

var c__10282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__,map__32782,map__32782__$1,opts,on_cssload){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto__,map__32782,map__32782__$1,opts,on_cssload){
return (function (state_32793){
var state_val_32794 = (state_32793[(1)]);
if((state_val_32794 === (2))){
var inst_32789 = (state_32793[(2)]);
var inst_32790 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_32791 = on_cssload.call(null,inst_32790);
var state_32793__$1 = (function (){var statearr_32795 = state_32793;
(statearr_32795[(7)] = inst_32789);

return statearr_32795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32793__$1,inst_32791);
} else {
if((state_val_32794 === (1))){
var inst_32787 = cljs.core.async.timeout.call(null,(100));
var state_32793__$1 = state_32793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32793__$1,(2),inst_32787);
} else {
return null;
}
}
});})(c__10282__auto__,map__32782,map__32782__$1,opts,on_cssload))
;
return ((function (switch__10226__auto__,c__10282__auto__,map__32782,map__32782__$1,opts,on_cssload){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_32799 = [null,null,null,null,null,null,null,null];
(statearr_32799[(0)] = state_machine__10227__auto__);

(statearr_32799[(1)] = (1));

return statearr_32799;
});
var state_machine__10227__auto____1 = (function (state_32793){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_32793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e32800){if((e32800 instanceof Object)){
var ex__10230__auto__ = e32800;
var statearr_32801_32824 = state_32793;
(statearr_32801_32824[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32825 = state_32793;
state_32793 = G__32825;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_32793){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_32793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto__,map__32782,map__32782__$1,opts,on_cssload))
})();
var state__10284__auto__ = (function (){var statearr_32802 = f__10283__auto__.call(null);
(statearr_32802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);

return statearr_32802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__,map__32782,map__32782__$1,opts,on_cssload))
);

return c__10282__auto__;
} else {
return null;
}
});
