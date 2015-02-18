// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){
var seq__23799_23803 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__23800_23804 = null;
var count__23801_23805 = (0);
var i__23802_23806 = (0);
while(true){
if((i__23802_23806 < count__23801_23805)){
var k_23807 = cljs.core._nth.call(null,chunk__23800_23804,i__23802_23806);
var v_23808 = (b[k_23807]);
(a[k_23807] = v_23808);

var G__23809 = seq__23799_23803;
var G__23810 = chunk__23800_23804;
var G__23811 = count__23801_23805;
var G__23812 = (i__23802_23806 + (1));
seq__23799_23803 = G__23809;
chunk__23800_23804 = G__23810;
count__23801_23805 = G__23811;
i__23802_23806 = G__23812;
continue;
} else {
var temp__4126__auto___23813 = cljs.core.seq.call(null,seq__23799_23803);
if(temp__4126__auto___23813){
var seq__23799_23814__$1 = temp__4126__auto___23813;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23799_23814__$1)){
var c__8291__auto___23815 = cljs.core.chunk_first.call(null,seq__23799_23814__$1);
var G__23816 = cljs.core.chunk_rest.call(null,seq__23799_23814__$1);
var G__23817 = c__8291__auto___23815;
var G__23818 = cljs.core.count.call(null,c__8291__auto___23815);
var G__23819 = (0);
seq__23799_23803 = G__23816;
chunk__23800_23804 = G__23817;
count__23801_23805 = G__23818;
i__23802_23806 = G__23819;
continue;
} else {
var k_23820 = cljs.core.first.call(null,seq__23799_23814__$1);
var v_23821 = (b[k_23820]);
(a[k_23820] = v_23821);

var G__23822 = cljs.core.next.call(null,seq__23799_23814__$1);
var G__23823 = null;
var G__23824 = (0);
var G__23825 = (0);
seq__23799_23803 = G__23822;
chunk__23800_23804 = G__23823;
count__23801_23805 = G__23824;
i__23802_23806 = G__23825;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){
return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__23826 = (i + (2));
var G__23827 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__23826;
ret = G__23827;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23828_23832 = cljs.core.seq.call(null,v);
var chunk__23829_23833 = null;
var count__23830_23834 = (0);
var i__23831_23835 = (0);
while(true){
if((i__23831_23835 < count__23830_23834)){
var x_23836 = cljs.core._nth.call(null,chunk__23829_23833,i__23831_23835);
ret.push(x_23836);

var G__23837 = seq__23828_23832;
var G__23838 = chunk__23829_23833;
var G__23839 = count__23830_23834;
var G__23840 = (i__23831_23835 + (1));
seq__23828_23832 = G__23837;
chunk__23829_23833 = G__23838;
count__23830_23834 = G__23839;
i__23831_23835 = G__23840;
continue;
} else {
var temp__4126__auto___23841 = cljs.core.seq.call(null,seq__23828_23832);
if(temp__4126__auto___23841){
var seq__23828_23842__$1 = temp__4126__auto___23841;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23828_23842__$1)){
var c__8291__auto___23843 = cljs.core.chunk_first.call(null,seq__23828_23842__$1);
var G__23844 = cljs.core.chunk_rest.call(null,seq__23828_23842__$1);
var G__23845 = c__8291__auto___23843;
var G__23846 = cljs.core.count.call(null,c__8291__auto___23843);
var G__23847 = (0);
seq__23828_23832 = G__23844;
chunk__23829_23833 = G__23845;
count__23830_23834 = G__23846;
i__23831_23835 = G__23847;
continue;
} else {
var x_23848 = cljs.core.first.call(null,seq__23828_23842__$1);
ret.push(x_23848);

var G__23849 = cljs.core.next.call(null,seq__23828_23842__$1);
var G__23850 = null;
var G__23851 = (0);
var G__23852 = (0);
seq__23828_23832 = G__23849;
chunk__23829_23833 = G__23850;
count__23830_23834 = G__23851;
i__23831_23835 = G__23852;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23853_23857 = cljs.core.seq.call(null,v);
var chunk__23854_23858 = null;
var count__23855_23859 = (0);
var i__23856_23860 = (0);
while(true){
if((i__23856_23860 < count__23855_23859)){
var x_23861 = cljs.core._nth.call(null,chunk__23854_23858,i__23856_23860);
ret.push(x_23861);

var G__23862 = seq__23853_23857;
var G__23863 = chunk__23854_23858;
var G__23864 = count__23855_23859;
var G__23865 = (i__23856_23860 + (1));
seq__23853_23857 = G__23862;
chunk__23854_23858 = G__23863;
count__23855_23859 = G__23864;
i__23856_23860 = G__23865;
continue;
} else {
var temp__4126__auto___23866 = cljs.core.seq.call(null,seq__23853_23857);
if(temp__4126__auto___23866){
var seq__23853_23867__$1 = temp__4126__auto___23866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23853_23867__$1)){
var c__8291__auto___23868 = cljs.core.chunk_first.call(null,seq__23853_23867__$1);
var G__23869 = cljs.core.chunk_rest.call(null,seq__23853_23867__$1);
var G__23870 = c__8291__auto___23868;
var G__23871 = cljs.core.count.call(null,c__8291__auto___23868);
var G__23872 = (0);
seq__23853_23857 = G__23869;
chunk__23854_23858 = G__23870;
count__23855_23859 = G__23871;
i__23856_23860 = G__23872;
continue;
} else {
var x_23873 = cljs.core.first.call(null,seq__23853_23867__$1);
ret.push(x_23873);

var G__23874 = cljs.core.next.call(null,seq__23853_23867__$1);
var G__23875 = null;
var G__23876 = (0);
var G__23877 = (0);
seq__23853_23857 = G__23874;
chunk__23854_23858 = G__23875;
count__23855_23859 = G__23876;
i__23856_23860 = G__23877;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23878_23882 = cljs.core.seq.call(null,v);
var chunk__23879_23883 = null;
var count__23880_23884 = (0);
var i__23881_23885 = (0);
while(true){
if((i__23881_23885 < count__23880_23884)){
var x_23886 = cljs.core._nth.call(null,chunk__23879_23883,i__23881_23885);
ret.push(x_23886);

var G__23887 = seq__23878_23882;
var G__23888 = chunk__23879_23883;
var G__23889 = count__23880_23884;
var G__23890 = (i__23881_23885 + (1));
seq__23878_23882 = G__23887;
chunk__23879_23883 = G__23888;
count__23880_23884 = G__23889;
i__23881_23885 = G__23890;
continue;
} else {
var temp__4126__auto___23891 = cljs.core.seq.call(null,seq__23878_23882);
if(temp__4126__auto___23891){
var seq__23878_23892__$1 = temp__4126__auto___23891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23878_23892__$1)){
var c__8291__auto___23893 = cljs.core.chunk_first.call(null,seq__23878_23892__$1);
var G__23894 = cljs.core.chunk_rest.call(null,seq__23878_23892__$1);
var G__23895 = c__8291__auto___23893;
var G__23896 = cljs.core.count.call(null,c__8291__auto___23893);
var G__23897 = (0);
seq__23878_23882 = G__23894;
chunk__23879_23883 = G__23895;
count__23880_23884 = G__23896;
i__23881_23885 = G__23897;
continue;
} else {
var x_23898 = cljs.core.first.call(null,seq__23878_23892__$1);
ret.push(x_23898);

var G__23899 = cljs.core.next.call(null,seq__23878_23892__$1);
var G__23900 = null;
var G__23901 = (0);
var G__23902 = (0);
seq__23878_23882 = G__23899;
chunk__23879_23883 = G__23900;
count__23880_23884 = G__23901;
i__23881_23885 = G__23902;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a map of
* type constructors to handler instances.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){
return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x23912 = cljs.core.clone.call(null,handlers);
x23912.forEach = ((function (x23912,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__23913 = cljs.core.seq.call(null,coll);
var chunk__23914 = null;
var count__23915 = (0);
var i__23916 = (0);
while(true){
if((i__23916 < count__23915)){
var vec__23917 = cljs.core._nth.call(null,chunk__23914,i__23916);
var k = cljs.core.nth.call(null,vec__23917,(0),null);
var v = cljs.core.nth.call(null,vec__23917,(1),null);
f.call(null,v,k);

var G__23919 = seq__23913;
var G__23920 = chunk__23914;
var G__23921 = count__23915;
var G__23922 = (i__23916 + (1));
seq__23913 = G__23919;
chunk__23914 = G__23920;
count__23915 = G__23921;
i__23916 = G__23922;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__23913);
if(temp__4126__auto__){
var seq__23913__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23913__$1)){
var c__8291__auto__ = cljs.core.chunk_first.call(null,seq__23913__$1);
var G__23923 = cljs.core.chunk_rest.call(null,seq__23913__$1);
var G__23924 = c__8291__auto__;
var G__23925 = cljs.core.count.call(null,c__8291__auto__);
var G__23926 = (0);
seq__23913 = G__23923;
chunk__23914 = G__23924;
count__23915 = G__23925;
i__23916 = G__23926;
continue;
} else {
var vec__23918 = cljs.core.first.call(null,seq__23913__$1);
var k = cljs.core.nth.call(null,vec__23918,(0),null);
var v = cljs.core.nth.call(null,vec__23918,(1),null);
f.call(null,v,k);

var G__23927 = cljs.core.next.call(null,seq__23913__$1);
var G__23928 = null;
var G__23929 = (0);
var G__23930 = (0);
seq__23913 = G__23927;
chunk__23914 = G__23928;
count__23915 = G__23929;
i__23916 = G__23930;
continue;
}
} else {
return null;
}
}
break;
}
});})(x23912,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x23912;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__23911 = obj;
G__23911.push(kfn.call(null,k),vfn.call(null,v));

return G__23911;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){
return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){
return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){
return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t23934 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t23934 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta23935){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta23935 = meta23935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t23934.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t23934.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t23934.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t23934.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t23934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23936){
var self__ = this;
var _23936__$1 = this;
return self__.meta23935;
});

cognitect.transit.t23934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23936,meta23935__$1){
var self__ = this;
var _23936__$1 = this;
return (new cognitect.transit.t23934(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta23935__$1));
});

cognitect.transit.t23934.cljs$lang$type = true;

cognitect.transit.t23934.cljs$lang$ctorStr = "cognitect.transit/t23934";

cognitect.transit.t23934.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cognitect.transit/t23934");
});

cognitect.transit.__GT_t23934 = (function __GT_t23934(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23935){
return (new cognitect.transit.t23934(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta23935));
});

}

return (new cognitect.transit.t23934(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,cljs.core.PersistentArrayMap.EMPTY));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});
