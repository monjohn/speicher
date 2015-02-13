// Compiled by ClojureScript 0.0-2727 {}
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
return cljs.core.reduce.call(null,(function (p1__23481_SHARP_,p2__23482_SHARP_){
var and__3760__auto__ = p1__23481_SHARP_;
if(cljs.core.truth_(and__3760__auto__)){
return p2__23482_SHARP_;
} else {
return and__3760__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function namespace_file_map_QMARK_(m){
var or__3772__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__3772__auto__){
return or__3772__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__23484_SHARP_,p2__23483_SHARP_){
return [cljs.core.str(p2__23483_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__3772__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__3772__auto__){
return or__3772__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__3772__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__4669__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4670__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4671__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4673__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4673__auto__,method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__23485){
var map__23486 = p__23485;
var map__23486__$1 = ((cljs.core.seq_QMARK_.call(null,map__23486))?cljs.core.apply.call(null,cljs.core.hash_map,map__23486):map__23486);
var file = cljs.core.get.call(null,map__23486__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__23487){
var map__23488 = p__23487;
var map__23488__$1 = ((cljs.core.seq_QMARK_.call(null,map__23488))?cljs.core.apply.call(null,cljs.core.hash_map,map__23488):map__23488);
var namespace = cljs.core.get.call(null,map__23488__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__4669__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4670__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4671__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4673__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4673__auto__,method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e23489){if((e23489 instanceof Error)){
var e = e23489;
return false;
} else {
throw e23489;

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
figwheel.client.file_reloading.reload_file = (function reload_file(p__23490,callback){
var map__23492 = p__23490;
var map__23492__$1 = ((cljs.core.seq_QMARK_.call(null,map__23492))?cljs.core.apply.call(null,cljs.core.hash_map,map__23492):map__23492);
var file_msg = map__23492__$1;
var request_url = cljs.core.get.call(null,map__23492__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23492,map__23492__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23492,map__23492__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function reload_file_QMARK_(p__23493){
var map__23495 = p__23493;
var map__23495__$1 = ((cljs.core.seq_QMARK_.call(null,map__23495))?cljs.core.apply.call(null,cljs.core.hash_map,map__23495):map__23495);
var file_msg = map__23495__$1;
var meta_data = cljs.core.get.call(null,map__23495__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__23495__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__3772__auto__ = meta_data;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__3760__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__3760__auto__){
var or__3772__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__3772__auto____$1)){
return or__3772__auto____$1;
} else {
var and__3760__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__3760__auto____$1){
var or__3772__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__3772__auto____$2){
return or__3772__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__3760__auto____$1;
}
}
}
} else {
return and__3760__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__23496,callback){
var map__23498 = p__23496;
var map__23498__$1 = ((cljs.core.seq_QMARK_.call(null,map__23498))?cljs.core.apply.call(null,cljs.core.hash_map,map__23498):map__23498);
var file_msg = map__23498__$1;
var namespace = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__23498__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

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
var c__6550__auto___23585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___23585,out){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___23585,out){
return (function (state_23567){
var state_val_23568 = (state_23567[(1)]);
if((state_val_23568 === (7))){
var inst_23551 = (state_23567[(7)]);
var inst_23557 = (state_23567[(2)]);
var inst_23558 = cljs.core.async.put_BANG_.call(null,out,inst_23557);
var inst_23547 = inst_23551;
var state_23567__$1 = (function (){var statearr_23569 = state_23567;
(statearr_23569[(8)] = inst_23547);

(statearr_23569[(9)] = inst_23558);

return statearr_23569;
})();
var statearr_23570_23586 = state_23567__$1;
(statearr_23570_23586[(2)] = null);

(statearr_23570_23586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (6))){
var inst_23563 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
var statearr_23571_23587 = state_23567__$1;
(statearr_23571_23587[(2)] = inst_23563);

(statearr_23571_23587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (5))){
var inst_23561 = cljs.core.async.close_BANG_.call(null,out);
var state_23567__$1 = state_23567;
var statearr_23572_23588 = state_23567__$1;
(statearr_23572_23588[(2)] = inst_23561);

(statearr_23572_23588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (4))){
var inst_23550 = (state_23567[(10)]);
var inst_23555 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23550);
var state_23567__$1 = state_23567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23567__$1,(7),inst_23555);
} else {
if((state_val_23568 === (3))){
var inst_23565 = (state_23567[(2)]);
var state_23567__$1 = state_23567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23567__$1,inst_23565);
} else {
if((state_val_23568 === (2))){
var inst_23547 = (state_23567[(8)]);
var inst_23550 = (state_23567[(10)]);
var inst_23550__$1 = cljs.core.nth.call(null,inst_23547,(0),null);
var inst_23551 = cljs.core.nthnext.call(null,inst_23547,(1));
var inst_23552 = (inst_23550__$1 == null);
var inst_23553 = cljs.core.not.call(null,inst_23552);
var state_23567__$1 = (function (){var statearr_23573 = state_23567;
(statearr_23573[(7)] = inst_23551);

(statearr_23573[(10)] = inst_23550__$1);

return statearr_23573;
})();
if(inst_23553){
var statearr_23574_23589 = state_23567__$1;
(statearr_23574_23589[(1)] = (4));

} else {
var statearr_23575_23590 = state_23567__$1;
(statearr_23575_23590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23568 === (1))){
var inst_23545 = cljs.core.nth.call(null,files,(0),null);
var inst_23546 = cljs.core.nthnext.call(null,files,(1));
var inst_23547 = files;
var state_23567__$1 = (function (){var statearr_23576 = state_23567;
(statearr_23576[(8)] = inst_23547);

(statearr_23576[(11)] = inst_23545);

(statearr_23576[(12)] = inst_23546);

return statearr_23576;
})();
var statearr_23577_23591 = state_23567__$1;
(statearr_23577_23591[(2)] = null);

(statearr_23577_23591[(1)] = (2));


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
});})(c__6550__auto___23585,out))
;
return ((function (switch__6494__auto__,c__6550__auto___23585,out){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_23581 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23581[(0)] = state_machine__6495__auto__);

(statearr_23581[(1)] = (1));

return statearr_23581;
});
var state_machine__6495__auto____1 = (function (state_23567){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_23567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e23582){if((e23582 instanceof Object)){
var ex__6498__auto__ = e23582;
var statearr_23583_23592 = state_23567;
(statearr_23583_23592[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23593 = state_23567;
state_23567 = G__23593;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_23567){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_23567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___23585,out))
})();
var state__6552__auto__ = (function (){var statearr_23584 = f__6551__auto__.call(null);
(statearr_23584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___23585);

return statearr_23584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___23585,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__23594,p__23595){
var map__23598 = p__23594;
var map__23598__$1 = ((cljs.core.seq_QMARK_.call(null,map__23598))?cljs.core.apply.call(null,cljs.core.hash_map,map__23598):map__23598);
var opts = map__23598__$1;
var url_rewriter = cljs.core.get.call(null,map__23598__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__23599 = p__23595;
var map__23599__$1 = ((cljs.core.seq_QMARK_.call(null,map__23599))?cljs.core.apply.call(null,cljs.core.hash_map,map__23599):map__23599);
var file_msg = map__23599__$1;
var file = cljs.core.get.call(null,map__23599__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function eval_body(p__23600){
var map__23603 = p__23600;
var map__23603__$1 = ((cljs.core.seq_QMARK_.call(null,map__23603))?cljs.core.apply.call(null,cljs.core.hash_map,map__23603):map__23603);
var file = cljs.core.get.call(null,map__23603__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__23603__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__3760__auto__ = eval_body__$1;
if(cljs.core.truth_(and__3760__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__3760__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e23604){var e = e23604;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__23609,p__23610){
var map__23811 = p__23609;
var map__23811__$1 = ((cljs.core.seq_QMARK_.call(null,map__23811))?cljs.core.apply.call(null,cljs.core.hash_map,map__23811):map__23811);
var opts = map__23811__$1;
var load_unchanged_files = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__23811__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__23812 = p__23610;
var map__23812__$1 = ((cljs.core.seq_QMARK_.call(null,map__23812))?cljs.core.apply.call(null,cljs.core.hash_map,map__23812):map__23812);
var msg = map__23812__$1;
var files = cljs.core.get.call(null,map__23812__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__6550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files){
return (function (state_23936){
var state_val_23937 = (state_23936[(1)]);
if((state_val_23937 === (7))){
var inst_23824 = (state_23936[(7)]);
var inst_23825 = (state_23936[(8)]);
var inst_23826 = (state_23936[(9)]);
var inst_23823 = (state_23936[(10)]);
var inst_23831 = cljs.core._nth.call(null,inst_23824,inst_23826);
var inst_23832 = figwheel.client.file_reloading.eval_body.call(null,inst_23831);
var inst_23833 = (inst_23826 + (1));
var tmp23938 = inst_23824;
var tmp23939 = inst_23825;
var tmp23940 = inst_23823;
var inst_23823__$1 = tmp23940;
var inst_23824__$1 = tmp23938;
var inst_23825__$1 = tmp23939;
var inst_23826__$1 = inst_23833;
var state_23936__$1 = (function (){var statearr_23941 = state_23936;
(statearr_23941[(11)] = inst_23832);

(statearr_23941[(7)] = inst_23824__$1);

(statearr_23941[(8)] = inst_23825__$1);

(statearr_23941[(9)] = inst_23826__$1);

(statearr_23941[(10)] = inst_23823__$1);

return statearr_23941;
})();
var statearr_23942_24011 = state_23936__$1;
(statearr_23942_24011[(2)] = null);

(statearr_23942_24011[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (20))){
var inst_23873 = (state_23936[(12)]);
var inst_23868 = (state_23936[(13)]);
var inst_23869 = (state_23936[(14)]);
var inst_23875 = (state_23936[(15)]);
var inst_23872 = (state_23936[(16)]);
var inst_23878 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23880 = (function (){var files_not_loaded = inst_23875;
var res = inst_23873;
var res_SINGLEQUOTE_ = inst_23872;
var files_SINGLEQUOTE_ = inst_23869;
var all_files = inst_23868;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23873,inst_23868,inst_23869,inst_23875,inst_23872,inst_23878,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files){
return (function (p__23879){
var map__23943 = p__23879;
var map__23943__$1 = ((cljs.core.seq_QMARK_.call(null,map__23943))?cljs.core.apply.call(null,cljs.core.hash_map,map__23943):map__23943);
var file = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__23943__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23873,inst_23868,inst_23869,inst_23875,inst_23872,inst_23878,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files))
})();
var inst_23881 = cljs.core.map.call(null,inst_23880,inst_23873);
var inst_23882 = cljs.core.pr_str.call(null,inst_23881);
var inst_23883 = figwheel.client.utils.log.call(null,inst_23882);
var inst_23884 = (function (){var files_not_loaded = inst_23875;
var res = inst_23873;
var res_SINGLEQUOTE_ = inst_23872;
var files_SINGLEQUOTE_ = inst_23869;
var all_files = inst_23868;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23873,inst_23868,inst_23869,inst_23875,inst_23872,inst_23878,inst_23880,inst_23881,inst_23882,inst_23883,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23873,inst_23868,inst_23869,inst_23875,inst_23872,inst_23878,inst_23880,inst_23881,inst_23882,inst_23883,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files))
})();
var inst_23885 = setTimeout(inst_23884,(10));
var state_23936__$1 = (function (){var statearr_23944 = state_23936;
(statearr_23944[(17)] = inst_23878);

(statearr_23944[(18)] = inst_23883);

return statearr_23944;
})();
var statearr_23945_24012 = state_23936__$1;
(statearr_23945_24012[(2)] = inst_23885);

(statearr_23945_24012[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (27))){
var inst_23895 = (state_23936[(19)]);
var state_23936__$1 = state_23936;
var statearr_23946_24013 = state_23936__$1;
(statearr_23946_24013[(2)] = inst_23895);

(statearr_23946_24013[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (1))){
var inst_23815 = (state_23936[(20)]);
var inst_23813 = before_jsload.call(null,files);
var inst_23814 = (function (){return ((function (inst_23815,inst_23813,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files){
return (function (p1__23605_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23605_SHARP_);
});
;})(inst_23815,inst_23813,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files))
})();
var inst_23815__$1 = cljs.core.filter.call(null,inst_23814,files);
var inst_23816 = cljs.core.not_empty.call(null,inst_23815__$1);
var state_23936__$1 = (function (){var statearr_23947 = state_23936;
(statearr_23947[(21)] = inst_23813);

(statearr_23947[(20)] = inst_23815__$1);

return statearr_23947;
})();
if(cljs.core.truth_(inst_23816)){
var statearr_23948_24014 = state_23936__$1;
(statearr_23948_24014[(1)] = (2));

} else {
var statearr_23949_24015 = state_23936__$1;
(statearr_23949_24015[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (24))){
var state_23936__$1 = state_23936;
var statearr_23950_24016 = state_23936__$1;
(statearr_23950_24016[(2)] = null);

(statearr_23950_24016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (4))){
var inst_23860 = (state_23936[(2)]);
var inst_23861 = (function (){return ((function (inst_23860,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files){
return (function (p1__23606_SHARP_){
var and__3760__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23606_SHARP_);
if(cljs.core.truth_(and__3760__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23606_SHARP_));
} else {
return and__3760__auto__;
}
});
;})(inst_23860,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files))
})();
var inst_23862 = cljs.core.filter.call(null,inst_23861,files);
var state_23936__$1 = (function (){var statearr_23951 = state_23936;
(statearr_23951[(22)] = inst_23862);

(statearr_23951[(23)] = inst_23860);

return statearr_23951;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_23952_24017 = state_23936__$1;
(statearr_23952_24017[(1)] = (16));

} else {
var statearr_23953_24018 = state_23936__$1;
(statearr_23953_24018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (15))){
var inst_23850 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23954_24019 = state_23936__$1;
(statearr_23954_24019[(2)] = inst_23850);

(statearr_23954_24019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (21))){
var state_23936__$1 = state_23936;
var statearr_23955_24020 = state_23936__$1;
(statearr_23955_24020[(2)] = null);

(statearr_23955_24020[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (31))){
var inst_23903 = (state_23936[(24)]);
var inst_23913 = (state_23936[(2)]);
var inst_23914 = cljs.core.not_empty.call(null,inst_23903);
var state_23936__$1 = (function (){var statearr_23956 = state_23936;
(statearr_23956[(25)] = inst_23913);

return statearr_23956;
})();
if(cljs.core.truth_(inst_23914)){
var statearr_23957_24021 = state_23936__$1;
(statearr_23957_24021[(1)] = (32));

} else {
var statearr_23958_24022 = state_23936__$1;
(statearr_23958_24022[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (32))){
var inst_23903 = (state_23936[(24)]);
var inst_23916 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23903);
var inst_23917 = cljs.core.pr_str.call(null,inst_23916);
var inst_23918 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_23917)].join('');
var inst_23919 = figwheel.client.utils.log.call(null,inst_23918);
var state_23936__$1 = state_23936;
var statearr_23959_24023 = state_23936__$1;
(statearr_23959_24023[(2)] = inst_23919);

(statearr_23959_24023[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (33))){
var state_23936__$1 = state_23936;
var statearr_23960_24024 = state_23936__$1;
(statearr_23960_24024[(2)] = null);

(statearr_23960_24024[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (13))){
var inst_23836 = (state_23936[(26)]);
var inst_23840 = cljs.core.chunk_first.call(null,inst_23836);
var inst_23841 = cljs.core.chunk_rest.call(null,inst_23836);
var inst_23842 = cljs.core.count.call(null,inst_23840);
var inst_23823 = inst_23841;
var inst_23824 = inst_23840;
var inst_23825 = inst_23842;
var inst_23826 = (0);
var state_23936__$1 = (function (){var statearr_23961 = state_23936;
(statearr_23961[(7)] = inst_23824);

(statearr_23961[(8)] = inst_23825);

(statearr_23961[(9)] = inst_23826);

(statearr_23961[(10)] = inst_23823);

return statearr_23961;
})();
var statearr_23962_24025 = state_23936__$1;
(statearr_23962_24025[(2)] = null);

(statearr_23962_24025[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (22))){
var inst_23875 = (state_23936[(15)]);
var inst_23888 = (state_23936[(2)]);
var inst_23889 = cljs.core.not_empty.call(null,inst_23875);
var state_23936__$1 = (function (){var statearr_23963 = state_23936;
(statearr_23963[(27)] = inst_23888);

return statearr_23963;
})();
if(cljs.core.truth_(inst_23889)){
var statearr_23964_24026 = state_23936__$1;
(statearr_23964_24026[(1)] = (23));

} else {
var statearr_23965_24027 = state_23936__$1;
(statearr_23965_24027[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (36))){
var state_23936__$1 = state_23936;
var statearr_23966_24028 = state_23936__$1;
(statearr_23966_24028[(2)] = null);

(statearr_23966_24028[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (29))){
var inst_23904 = (state_23936[(28)]);
var inst_23907 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23904);
var inst_23908 = cljs.core.pr_str.call(null,inst_23907);
var inst_23909 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23908)].join('');
var inst_23910 = figwheel.client.utils.log.call(null,inst_23909);
var state_23936__$1 = state_23936;
var statearr_23967_24029 = state_23936__$1;
(statearr_23967_24029[(2)] = inst_23910);

(statearr_23967_24029[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (6))){
var inst_23857 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23968_24030 = state_23936__$1;
(statearr_23968_24030[(2)] = inst_23857);

(statearr_23968_24030[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (28))){
var inst_23904 = (state_23936[(28)]);
var inst_23901 = (state_23936[(2)]);
var inst_23902 = cljs.core.get.call(null,inst_23901,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23903 = cljs.core.get.call(null,inst_23901,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_23904__$1 = cljs.core.get.call(null,inst_23901,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23905 = cljs.core.not_empty.call(null,inst_23904__$1);
var state_23936__$1 = (function (){var statearr_23969 = state_23936;
(statearr_23969[(28)] = inst_23904__$1);

(statearr_23969[(24)] = inst_23903);

(statearr_23969[(29)] = inst_23902);

return statearr_23969;
})();
if(cljs.core.truth_(inst_23905)){
var statearr_23970_24031 = state_23936__$1;
(statearr_23970_24031[(1)] = (29));

} else {
var statearr_23971_24032 = state_23936__$1;
(statearr_23971_24032[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (25))){
var inst_23934 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23936__$1,inst_23934);
} else {
if((state_val_23937 === (34))){
var inst_23902 = (state_23936[(29)]);
var inst_23922 = (state_23936[(2)]);
var inst_23923 = cljs.core.not_empty.call(null,inst_23902);
var state_23936__$1 = (function (){var statearr_23972 = state_23936;
(statearr_23972[(30)] = inst_23922);

return statearr_23972;
})();
if(cljs.core.truth_(inst_23923)){
var statearr_23973_24033 = state_23936__$1;
(statearr_23973_24033[(1)] = (35));

} else {
var statearr_23974_24034 = state_23936__$1;
(statearr_23974_24034[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (17))){
var inst_23862 = (state_23936[(22)]);
var state_23936__$1 = state_23936;
var statearr_23975_24035 = state_23936__$1;
(statearr_23975_24035[(2)] = inst_23862);

(statearr_23975_24035[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (3))){
var state_23936__$1 = state_23936;
var statearr_23976_24036 = state_23936__$1;
(statearr_23976_24036[(2)] = null);

(statearr_23976_24036[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (12))){
var inst_23853 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23977_24037 = state_23936__$1;
(statearr_23977_24037[(2)] = inst_23853);

(statearr_23977_24037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (2))){
var inst_23815 = (state_23936[(20)]);
var inst_23822 = cljs.core.seq.call(null,inst_23815);
var inst_23823 = inst_23822;
var inst_23824 = null;
var inst_23825 = (0);
var inst_23826 = (0);
var state_23936__$1 = (function (){var statearr_23978 = state_23936;
(statearr_23978[(7)] = inst_23824);

(statearr_23978[(8)] = inst_23825);

(statearr_23978[(9)] = inst_23826);

(statearr_23978[(10)] = inst_23823);

return statearr_23978;
})();
var statearr_23979_24038 = state_23936__$1;
(statearr_23979_24038[(2)] = null);

(statearr_23979_24038[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (23))){
var inst_23873 = (state_23936[(12)]);
var inst_23868 = (state_23936[(13)]);
var inst_23869 = (state_23936[(14)]);
var inst_23875 = (state_23936[(15)]);
var inst_23872 = (state_23936[(16)]);
var inst_23895 = (state_23936[(19)]);
var inst_23891 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23894 = (function (){var files_not_loaded = inst_23875;
var res = inst_23873;
var res_SINGLEQUOTE_ = inst_23872;
var files_SINGLEQUOTE_ = inst_23869;
var all_files = inst_23868;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23873,inst_23868,inst_23869,inst_23875,inst_23872,inst_23895,inst_23891,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files){
return (function (p__23893){
var map__23980 = p__23893;
var map__23980__$1 = ((cljs.core.seq_QMARK_.call(null,map__23980))?cljs.core.apply.call(null,cljs.core.hash_map,map__23980):map__23980);
var meta_data = cljs.core.get.call(null,map__23980__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23873,inst_23868,inst_23869,inst_23875,inst_23872,inst_23895,inst_23891,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files))
})();
var inst_23895__$1 = cljs.core.group_by.call(null,inst_23894,inst_23875);
var inst_23896 = cljs.core.seq_QMARK_.call(null,inst_23895__$1);
var state_23936__$1 = (function (){var statearr_23981 = state_23936;
(statearr_23981[(31)] = inst_23891);

(statearr_23981[(19)] = inst_23895__$1);

return statearr_23981;
})();
if(inst_23896){
var statearr_23982_24039 = state_23936__$1;
(statearr_23982_24039[(1)] = (26));

} else {
var statearr_23983_24040 = state_23936__$1;
(statearr_23983_24040[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (35))){
var inst_23902 = (state_23936[(29)]);
var inst_23925 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23902);
var inst_23926 = cljs.core.pr_str.call(null,inst_23925);
var inst_23927 = [cljs.core.str("not required: "),cljs.core.str(inst_23926)].join('');
var inst_23928 = figwheel.client.utils.log.call(null,inst_23927);
var state_23936__$1 = state_23936;
var statearr_23984_24041 = state_23936__$1;
(statearr_23984_24041[(2)] = inst_23928);

(statearr_23984_24041[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (19))){
var inst_23873 = (state_23936[(12)]);
var inst_23868 = (state_23936[(13)]);
var inst_23869 = (state_23936[(14)]);
var inst_23872 = (state_23936[(16)]);
var inst_23872__$1 = (state_23936[(2)]);
var inst_23873__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23872__$1);
var inst_23874 = (function (){var res = inst_23873__$1;
var res_SINGLEQUOTE_ = inst_23872__$1;
var files_SINGLEQUOTE_ = inst_23869;
var all_files = inst_23868;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23873,inst_23868,inst_23869,inst_23872,inst_23872__$1,inst_23873__$1,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files){
return (function (p1__23608_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23608_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_23873,inst_23868,inst_23869,inst_23872,inst_23872__$1,inst_23873__$1,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files))
})();
var inst_23875 = cljs.core.filter.call(null,inst_23874,inst_23872__$1);
var inst_23876 = cljs.core.not_empty.call(null,inst_23873__$1);
var state_23936__$1 = (function (){var statearr_23985 = state_23936;
(statearr_23985[(12)] = inst_23873__$1);

(statearr_23985[(15)] = inst_23875);

(statearr_23985[(16)] = inst_23872__$1);

return statearr_23985;
})();
if(cljs.core.truth_(inst_23876)){
var statearr_23986_24042 = state_23936__$1;
(statearr_23986_24042[(1)] = (20));

} else {
var statearr_23987_24043 = state_23936__$1;
(statearr_23987_24043[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (11))){
var state_23936__$1 = state_23936;
var statearr_23988_24044 = state_23936__$1;
(statearr_23988_24044[(2)] = null);

(statearr_23988_24044[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (9))){
var inst_23855 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_23989_24045 = state_23936__$1;
(statearr_23989_24045[(2)] = inst_23855);

(statearr_23989_24045[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (5))){
var inst_23825 = (state_23936[(8)]);
var inst_23826 = (state_23936[(9)]);
var inst_23828 = (inst_23826 < inst_23825);
var inst_23829 = inst_23828;
var state_23936__$1 = state_23936;
if(cljs.core.truth_(inst_23829)){
var statearr_23990_24046 = state_23936__$1;
(statearr_23990_24046[(1)] = (7));

} else {
var statearr_23991_24047 = state_23936__$1;
(statearr_23991_24047[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (14))){
var inst_23836 = (state_23936[(26)]);
var inst_23845 = cljs.core.first.call(null,inst_23836);
var inst_23846 = figwheel.client.file_reloading.eval_body.call(null,inst_23845);
var inst_23847 = cljs.core.next.call(null,inst_23836);
var inst_23823 = inst_23847;
var inst_23824 = null;
var inst_23825 = (0);
var inst_23826 = (0);
var state_23936__$1 = (function (){var statearr_23992 = state_23936;
(statearr_23992[(7)] = inst_23824);

(statearr_23992[(8)] = inst_23825);

(statearr_23992[(9)] = inst_23826);

(statearr_23992[(32)] = inst_23846);

(statearr_23992[(10)] = inst_23823);

return statearr_23992;
})();
var statearr_23993_24048 = state_23936__$1;
(statearr_23993_24048[(2)] = null);

(statearr_23993_24048[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (26))){
var inst_23895 = (state_23936[(19)]);
var inst_23898 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23895);
var state_23936__$1 = state_23936;
var statearr_23994_24049 = state_23936__$1;
(statearr_23994_24049[(2)] = inst_23898);

(statearr_23994_24049[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (16))){
var inst_23862 = (state_23936[(22)]);
var inst_23864 = (function (){var all_files = inst_23862;
return ((function (all_files,inst_23862,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files){
return (function (p1__23607_SHARP_){
return cljs.core.update_in.call(null,p1__23607_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_23862,state_val_23937,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files))
})();
var inst_23865 = cljs.core.map.call(null,inst_23864,inst_23862);
var state_23936__$1 = state_23936;
var statearr_23995_24050 = state_23936__$1;
(statearr_23995_24050[(2)] = inst_23865);

(statearr_23995_24050[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (30))){
var state_23936__$1 = state_23936;
var statearr_23996_24051 = state_23936__$1;
(statearr_23996_24051[(2)] = null);

(statearr_23996_24051[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (10))){
var inst_23836 = (state_23936[(26)]);
var inst_23838 = cljs.core.chunked_seq_QMARK_.call(null,inst_23836);
var state_23936__$1 = state_23936;
if(inst_23838){
var statearr_23997_24052 = state_23936__$1;
(statearr_23997_24052[(1)] = (13));

} else {
var statearr_23998_24053 = state_23936__$1;
(statearr_23998_24053[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (18))){
var inst_23868 = (state_23936[(13)]);
var inst_23869 = (state_23936[(14)]);
var inst_23868__$1 = (state_23936[(2)]);
var inst_23869__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_23868__$1);
var inst_23870 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23869__$1);
var state_23936__$1 = (function (){var statearr_23999 = state_23936;
(statearr_23999[(13)] = inst_23868__$1);

(statearr_23999[(14)] = inst_23869__$1);

return statearr_23999;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23936__$1,(19),inst_23870);
} else {
if((state_val_23937 === (37))){
var inst_23931 = (state_23936[(2)]);
var state_23936__$1 = state_23936;
var statearr_24000_24054 = state_23936__$1;
(statearr_24000_24054[(2)] = inst_23931);

(statearr_24000_24054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23937 === (8))){
var inst_23836 = (state_23936[(26)]);
var inst_23823 = (state_23936[(10)]);
var inst_23836__$1 = cljs.core.seq.call(null,inst_23823);
var state_23936__$1 = (function (){var statearr_24001 = state_23936;
(statearr_24001[(26)] = inst_23836__$1);

return statearr_24001;
})();
if(inst_23836__$1){
var statearr_24002_24055 = state_23936__$1;
(statearr_24002_24055[(1)] = (10));

} else {
var statearr_24003_24056 = state_23936__$1;
(statearr_24003_24056[(1)] = (11));

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
});})(c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files))
;
return ((function (switch__6494__auto__,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_24007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24007[(0)] = state_machine__6495__auto__);

(statearr_24007[(1)] = (1));

return statearr_24007;
});
var state_machine__6495__auto____1 = (function (state_23936){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_23936);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e24008){if((e24008 instanceof Object)){
var ex__6498__auto__ = e24008;
var statearr_24009_24057 = state_23936;
(statearr_24009_24057[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24058 = state_23936;
state_23936 = G__24058;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_23936){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_23936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files))
})();
var state__6552__auto__ = (function (){var statearr_24010 = f__6551__auto__.call(null);
(statearr_24010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto__);

return statearr_24010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto__,map__23811,map__23811__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__23812,map__23812__$1,msg,files))
);

return c__6550__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__24061,link){
var map__24063 = p__24061;
var map__24063__$1 = ((cljs.core.seq_QMARK_.call(null,map__24063))?cljs.core.apply.call(null,cljs.core.hash_map,map__24063):map__24063);
var file = cljs.core.get.call(null,map__24063__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__24063,map__24063__$1,file){
return (function (p1__24059_SHARP_,p2__24060_SHARP_){
if(cljs.core._EQ_.call(null,p1__24059_SHARP_,p2__24060_SHARP_)){
return p1__24059_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__24063,map__24063__$1,file))
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
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24067){
var map__24068 = p__24067;
var map__24068__$1 = ((cljs.core.seq_QMARK_.call(null,map__24068))?cljs.core.apply.call(null,cljs.core.hash_map,map__24068):map__24068);
var current_url_length = cljs.core.get.call(null,map__24068__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__24068__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24064_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24064_SHARP_);
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
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__24069){
var map__24071 = p__24069;
var map__24071__$1 = ((cljs.core.seq_QMARK_.call(null,map__24071))?cljs.core.apply.call(null,cljs.core.hash_map,map__24071):map__24071);
var f_data = map__24071__$1;
var request_url = cljs.core.get.call(null,map__24071__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__24071__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__3772__auto__ = request_url;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__24072,files_msg){
var map__24094 = p__24072;
var map__24094__$1 = ((cljs.core.seq_QMARK_.call(null,map__24094))?cljs.core.apply.call(null,cljs.core.hash_map,map__24094):map__24094);
var opts = map__24094__$1;
var on_cssload = cljs.core.get.call(null,map__24094__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24095_24115 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24096_24116 = null;
var count__24097_24117 = (0);
var i__24098_24118 = (0);
while(true){
if((i__24098_24118 < count__24097_24117)){
var f_24119 = cljs.core._nth.call(null,chunk__24096_24116,i__24098_24118);
figwheel.client.file_reloading.reload_css_file.call(null,f_24119);

var G__24120 = seq__24095_24115;
var G__24121 = chunk__24096_24116;
var G__24122 = count__24097_24117;
var G__24123 = (i__24098_24118 + (1));
seq__24095_24115 = G__24120;
chunk__24096_24116 = G__24121;
count__24097_24117 = G__24122;
i__24098_24118 = G__24123;
continue;
} else {
var temp__4126__auto___24124 = cljs.core.seq.call(null,seq__24095_24115);
if(temp__4126__auto___24124){
var seq__24095_24125__$1 = temp__4126__auto___24124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24095_24125__$1)){
var c__4559__auto___24126 = cljs.core.chunk_first.call(null,seq__24095_24125__$1);
var G__24127 = cljs.core.chunk_rest.call(null,seq__24095_24125__$1);
var G__24128 = c__4559__auto___24126;
var G__24129 = cljs.core.count.call(null,c__4559__auto___24126);
var G__24130 = (0);
seq__24095_24115 = G__24127;
chunk__24096_24116 = G__24128;
count__24097_24117 = G__24129;
i__24098_24118 = G__24130;
continue;
} else {
var f_24131 = cljs.core.first.call(null,seq__24095_24125__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24131);

var G__24132 = cljs.core.next.call(null,seq__24095_24125__$1);
var G__24133 = null;
var G__24134 = (0);
var G__24135 = (0);
seq__24095_24115 = G__24132;
chunk__24096_24116 = G__24133;
count__24097_24117 = G__24134;
i__24098_24118 = G__24135;
continue;
}
} else {
}
}
break;
}

var c__6550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto__,map__24094,map__24094__$1,opts,on_cssload){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto__,map__24094,map__24094__$1,opts,on_cssload){
return (function (state_24105){
var state_val_24106 = (state_24105[(1)]);
if((state_val_24106 === (2))){
var inst_24101 = (state_24105[(2)]);
var inst_24102 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_24103 = on_cssload.call(null,inst_24102);
var state_24105__$1 = (function (){var statearr_24107 = state_24105;
(statearr_24107[(7)] = inst_24101);

return statearr_24107;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24105__$1,inst_24103);
} else {
if((state_val_24106 === (1))){
var inst_24099 = cljs.core.async.timeout.call(null,(100));
var state_24105__$1 = state_24105;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24105__$1,(2),inst_24099);
} else {
return null;
}
}
});})(c__6550__auto__,map__24094,map__24094__$1,opts,on_cssload))
;
return ((function (switch__6494__auto__,c__6550__auto__,map__24094,map__24094__$1,opts,on_cssload){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_24111 = [null,null,null,null,null,null,null,null];
(statearr_24111[(0)] = state_machine__6495__auto__);

(statearr_24111[(1)] = (1));

return statearr_24111;
});
var state_machine__6495__auto____1 = (function (state_24105){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_24105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e24112){if((e24112 instanceof Object)){
var ex__6498__auto__ = e24112;
var statearr_24113_24136 = state_24105;
(statearr_24113_24136[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24137 = state_24105;
state_24105 = G__24137;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_24105){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_24105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto__,map__24094,map__24094__$1,opts,on_cssload))
})();
var state__6552__auto__ = (function (){var statearr_24114 = f__6551__auto__.call(null);
(statearr_24114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto__);

return statearr_24114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto__,map__24094,map__24094__$1,opts,on_cssload))
);

return c__6550__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1423280679287