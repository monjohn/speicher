// Compiled by ClojureScript 0.0-2674 {}
if(!goog.isProvided_('cognitect.transit')) {
goog.provide('cognitect.transit');
}
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
var seq__10572_10576 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__10573_10577 = null;
var count__10574_10578 = (0);
var i__10575_10579 = (0);
while(true){
if((i__10575_10579 < count__10574_10578)){
var k_10580 = cljs.core._nth.call(null,chunk__10573_10577,i__10575_10579);
var v_10581 = (b[k_10580]);
(a[k_10580] = v_10581);

var G__10582 = seq__10572_10576;
var G__10583 = chunk__10573_10577;
var G__10584 = count__10574_10578;
var G__10585 = (i__10575_10579 + (1));
seq__10572_10576 = G__10582;
chunk__10573_10577 = G__10583;
count__10574_10578 = G__10584;
i__10575_10579 = G__10585;
continue;
} else {
var temp__4126__auto___10586 = cljs.core.seq.call(null,seq__10572_10576);
if(temp__4126__auto___10586){
var seq__10572_10587__$1 = temp__4126__auto___10586;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10572_10587__$1)){
var c__4541__auto___10588 = cljs.core.chunk_first.call(null,seq__10572_10587__$1);
var G__10589 = cljs.core.chunk_rest.call(null,seq__10572_10587__$1);
var G__10590 = c__4541__auto___10588;
var G__10591 = cljs.core.count.call(null,c__4541__auto___10588);
var G__10592 = (0);
seq__10572_10576 = G__10589;
chunk__10573_10577 = G__10590;
count__10574_10578 = G__10591;
i__10575_10579 = G__10592;
continue;
} else {
var k_10593 = cljs.core.first.call(null,seq__10572_10587__$1);
var v_10594 = (b[k_10593]);
(a[k_10593] = v_10594);

var G__10595 = cljs.core.next.call(null,seq__10572_10587__$1);
var G__10596 = null;
var G__10597 = (0);
var G__10598 = (0);
seq__10572_10576 = G__10595;
chunk__10573_10577 = G__10596;
count__10574_10578 = G__10597;
i__10575_10579 = G__10598;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cognitect.transit/VectorBuilder");
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
var G__10599 = (i + (2));
var G__10600 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__10599;
ret = G__10600;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cognitect.transit/SymbolHandler");
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
var seq__10601_10605 = cljs.core.seq.call(null,v);
var chunk__10602_10606 = null;
var count__10603_10607 = (0);
var i__10604_10608 = (0);
while(true){
if((i__10604_10608 < count__10603_10607)){
var x_10609 = cljs.core._nth.call(null,chunk__10602_10606,i__10604_10608);
ret.push(x_10609);

var G__10610 = seq__10601_10605;
var G__10611 = chunk__10602_10606;
var G__10612 = count__10603_10607;
var G__10613 = (i__10604_10608 + (1));
seq__10601_10605 = G__10610;
chunk__10602_10606 = G__10611;
count__10603_10607 = G__10612;
i__10604_10608 = G__10613;
continue;
} else {
var temp__4126__auto___10614 = cljs.core.seq.call(null,seq__10601_10605);
if(temp__4126__auto___10614){
var seq__10601_10615__$1 = temp__4126__auto___10614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10601_10615__$1)){
var c__4541__auto___10616 = cljs.core.chunk_first.call(null,seq__10601_10615__$1);
var G__10617 = cljs.core.chunk_rest.call(null,seq__10601_10615__$1);
var G__10618 = c__4541__auto___10616;
var G__10619 = cljs.core.count.call(null,c__4541__auto___10616);
var G__10620 = (0);
seq__10601_10605 = G__10617;
chunk__10602_10606 = G__10618;
count__10603_10607 = G__10619;
i__10604_10608 = G__10620;
continue;
} else {
var x_10621 = cljs.core.first.call(null,seq__10601_10615__$1);
ret.push(x_10621);

var G__10622 = cljs.core.next.call(null,seq__10601_10615__$1);
var G__10623 = null;
var G__10624 = (0);
var G__10625 = (0);
seq__10601_10605 = G__10622;
chunk__10602_10606 = G__10623;
count__10603_10607 = G__10624;
i__10604_10608 = G__10625;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cognitect.transit/MapHandler");
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
var seq__10626_10630 = cljs.core.seq.call(null,v);
var chunk__10627_10631 = null;
var count__10628_10632 = (0);
var i__10629_10633 = (0);
while(true){
if((i__10629_10633 < count__10628_10632)){
var x_10634 = cljs.core._nth.call(null,chunk__10627_10631,i__10629_10633);
ret.push(x_10634);

var G__10635 = seq__10626_10630;
var G__10636 = chunk__10627_10631;
var G__10637 = count__10628_10632;
var G__10638 = (i__10629_10633 + (1));
seq__10626_10630 = G__10635;
chunk__10627_10631 = G__10636;
count__10628_10632 = G__10637;
i__10629_10633 = G__10638;
continue;
} else {
var temp__4126__auto___10639 = cljs.core.seq.call(null,seq__10626_10630);
if(temp__4126__auto___10639){
var seq__10626_10640__$1 = temp__4126__auto___10639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10626_10640__$1)){
var c__4541__auto___10641 = cljs.core.chunk_first.call(null,seq__10626_10640__$1);
var G__10642 = cljs.core.chunk_rest.call(null,seq__10626_10640__$1);
var G__10643 = c__4541__auto___10641;
var G__10644 = cljs.core.count.call(null,c__4541__auto___10641);
var G__10645 = (0);
seq__10626_10630 = G__10642;
chunk__10627_10631 = G__10643;
count__10628_10632 = G__10644;
i__10629_10633 = G__10645;
continue;
} else {
var x_10646 = cljs.core.first.call(null,seq__10626_10640__$1);
ret.push(x_10646);

var G__10647 = cljs.core.next.call(null,seq__10626_10640__$1);
var G__10648 = null;
var G__10649 = (0);
var G__10650 = (0);
seq__10626_10630 = G__10647;
chunk__10627_10631 = G__10648;
count__10628_10632 = G__10649;
i__10629_10633 = G__10650;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cognitect.transit/SetHandler");
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
var seq__10651_10655 = cljs.core.seq.call(null,v);
var chunk__10652_10656 = null;
var count__10653_10657 = (0);
var i__10654_10658 = (0);
while(true){
if((i__10654_10658 < count__10653_10657)){
var x_10659 = cljs.core._nth.call(null,chunk__10652_10656,i__10654_10658);
ret.push(x_10659);

var G__10660 = seq__10651_10655;
var G__10661 = chunk__10652_10656;
var G__10662 = count__10653_10657;
var G__10663 = (i__10654_10658 + (1));
seq__10651_10655 = G__10660;
chunk__10652_10656 = G__10661;
count__10653_10657 = G__10662;
i__10654_10658 = G__10663;
continue;
} else {
var temp__4126__auto___10664 = cljs.core.seq.call(null,seq__10651_10655);
if(temp__4126__auto___10664){
var seq__10651_10665__$1 = temp__4126__auto___10664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10651_10665__$1)){
var c__4541__auto___10666 = cljs.core.chunk_first.call(null,seq__10651_10665__$1);
var G__10667 = cljs.core.chunk_rest.call(null,seq__10651_10665__$1);
var G__10668 = c__4541__auto___10666;
var G__10669 = cljs.core.count.call(null,c__4541__auto___10666);
var G__10670 = (0);
seq__10651_10655 = G__10667;
chunk__10652_10656 = G__10668;
count__10653_10657 = G__10669;
i__10654_10658 = G__10670;
continue;
} else {
var x_10671 = cljs.core.first.call(null,seq__10651_10665__$1);
ret.push(x_10671);

var G__10672 = cljs.core.next.call(null,seq__10651_10665__$1);
var G__10673 = null;
var G__10674 = (0);
var G__10675 = (0);
seq__10651_10655 = G__10672;
chunk__10652_10656 = G__10673;
count__10653_10657 = G__10674;
i__10654_10658 = G__10675;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cognitect.transit/UUIDHandler");
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
, "handlers": (function (){var x10685 = cljs.core.clone.call(null,handlers);
x10685.forEach = ((function (x10685,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__10686 = cljs.core.seq.call(null,coll);
var chunk__10687 = null;
var count__10688 = (0);
var i__10689 = (0);
while(true){
if((i__10689 < count__10688)){
var vec__10690 = cljs.core._nth.call(null,chunk__10687,i__10689);
var k = cljs.core.nth.call(null,vec__10690,(0),null);
var v = cljs.core.nth.call(null,vec__10690,(1),null);
f.call(null,v,k);

var G__10692 = seq__10686;
var G__10693 = chunk__10687;
var G__10694 = count__10688;
var G__10695 = (i__10689 + (1));
seq__10686 = G__10692;
chunk__10687 = G__10693;
count__10688 = G__10694;
i__10689 = G__10695;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__10686);
if(temp__4126__auto__){
var seq__10686__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10686__$1)){
var c__4541__auto__ = cljs.core.chunk_first.call(null,seq__10686__$1);
var G__10696 = cljs.core.chunk_rest.call(null,seq__10686__$1);
var G__10697 = c__4541__auto__;
var G__10698 = cljs.core.count.call(null,c__4541__auto__);
var G__10699 = (0);
seq__10686 = G__10696;
chunk__10687 = G__10697;
count__10688 = G__10698;
i__10689 = G__10699;
continue;
} else {
var vec__10691 = cljs.core.first.call(null,seq__10686__$1);
var k = cljs.core.nth.call(null,vec__10691,(0),null);
var v = cljs.core.nth.call(null,vec__10691,(1),null);
f.call(null,v,k);

var G__10700 = cljs.core.next.call(null,seq__10686__$1);
var G__10701 = null;
var G__10702 = (0);
var G__10703 = (0);
seq__10686 = G__10700;
chunk__10687 = G__10701;
count__10688 = G__10702;
i__10689 = G__10703;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10685,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x10685;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__10684 = obj;
G__10684.push(kfn.call(null,k),vfn.call(null,v));

return G__10684;
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
if(typeof cognitect.transit.t10707 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t10707 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta10708){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta10708 = meta10708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t10707.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t10707.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t10707.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t10707.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t10707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10709){
var self__ = this;
var _10709__$1 = this;
return self__.meta10708;
});

cognitect.transit.t10707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10709,meta10708__$1){
var self__ = this;
var _10709__$1 = this;
return (new cognitect.transit.t10707(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta10708__$1));
});

cognitect.transit.t10707.cljs$lang$type = true;

cognitect.transit.t10707.cljs$lang$ctorStr = "cognitect.transit/t10707";

cognitect.transit.t10707.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cognitect.transit/t10707");
});

cognitect.transit.__GT_t10707 = (function __GT_t10707(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta10708){
return (new cognitect.transit.t10707(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta10708));
});

}

return (new cognitect.transit.t10707(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),79,new cljs.core.Keyword(null,"end-line","end-line",1837326455),259,new cljs.core.Keyword(null,"column","column",2078222095),6,new cljs.core.Keyword(null,"line","line",212345235),254,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cognitect/transit.cljs"], null)));
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

//# sourceMappingURL=transit.js.map