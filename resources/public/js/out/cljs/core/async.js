// Compiled by ClojureScript 0.0-2727 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t19369 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19369 = (function (f,fn_handler,meta19370){
this.f = f;
this.fn_handler = fn_handler;
this.meta19370 = meta19370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19369.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t19369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t19369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19371){
var self__ = this;
var _19371__$1 = this;
return self__.meta19370;
});

cljs.core.async.t19369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19371,meta19370__$1){
var self__ = this;
var _19371__$1 = this;
return (new cljs.core.async.t19369(self__.f,self__.fn_handler,meta19370__$1));
});

cljs.core.async.t19369.cljs$lang$type = true;

cljs.core.async.t19369.cljs$lang$ctorStr = "cljs.core.async/t19369";

cljs.core.async.t19369.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t19369");
});

cljs.core.async.__GT_t19369 = (function __GT_t19369(f__$1,fn_handler__$1,meta19370){
return (new cljs.core.async.t19369(f__$1,fn_handler__$1,meta19370));
});

}

return (new cljs.core.async.t19369(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__19373 = buff;
if(G__19373){
var bit__4453__auto__ = null;
if(cljs.core.truth_((function (){var or__3772__auto__ = bit__4453__auto__;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return G__19373.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__19373.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19373);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__19373);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19374 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19374);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19374,ret){
return (function (){
return fn1.call(null,val_19374);
});})(val_19374,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4659__auto___19375 = n;
var x_19376 = (0);
while(true){
if((x_19376 < n__4659__auto___19375)){
(a[x_19376] = (0));

var G__19377 = (x_19376 + (1));
x_19376 = G__19377;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19378 = (i + (1));
i = G__19378;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t19382 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19382 = (function (flag,alt_flag,meta19383){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta19383 = meta19383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19382.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t19382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t19382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19384){
var self__ = this;
var _19384__$1 = this;
return self__.meta19383;
});})(flag))
;

cljs.core.async.t19382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19384,meta19383__$1){
var self__ = this;
var _19384__$1 = this;
return (new cljs.core.async.t19382(self__.flag,self__.alt_flag,meta19383__$1));
});})(flag))
;

cljs.core.async.t19382.cljs$lang$type = true;

cljs.core.async.t19382.cljs$lang$ctorStr = "cljs.core.async/t19382";

cljs.core.async.t19382.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t19382");
});})(flag))
;

cljs.core.async.__GT_t19382 = ((function (flag){
return (function __GT_t19382(flag__$1,alt_flag__$1,meta19383){
return (new cljs.core.async.t19382(flag__$1,alt_flag__$1,meta19383));
});})(flag))
;

}

return (new cljs.core.async.t19382(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t19388 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t19388 = (function (cb,flag,alt_handler,meta19389){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta19389 = meta19389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19388.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t19388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t19388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t19388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19390){
var self__ = this;
var _19390__$1 = this;
return self__.meta19389;
});

cljs.core.async.t19388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19390,meta19389__$1){
var self__ = this;
var _19390__$1 = this;
return (new cljs.core.async.t19388(self__.cb,self__.flag,self__.alt_handler,meta19389__$1));
});

cljs.core.async.t19388.cljs$lang$type = true;

cljs.core.async.t19388.cljs$lang$ctorStr = "cljs.core.async/t19388";

cljs.core.async.t19388.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t19388");
});

cljs.core.async.__GT_t19388 = (function __GT_t19388(cb__$1,flag__$1,alt_handler__$1,meta19389){
return (new cljs.core.async.t19388(cb__$1,flag__$1,alt_handler__$1,meta19389));
});

}

return (new cljs.core.async.t19388(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19391_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19391_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19392_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19392_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3772__auto__ = wport;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19393 = (i + (1));
i = G__19393;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3772__auto__ = ret;
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3760__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3760__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3760__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__19394){
var map__19396 = p__19394;
var map__19396__$1 = ((cljs.core.seq_QMARK_.call(null,map__19396))?cljs.core.apply.call(null,cljs.core.hash_map,map__19396):map__19396);
var opts = map__19396__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__19394 = null;
if (arguments.length > 1) {
var G__19397__i = 0, G__19397__a = new Array(arguments.length -  1);
while (G__19397__i < G__19397__a.length) {G__19397__a[G__19397__i] = arguments[G__19397__i + 1]; ++G__19397__i;}
  p__19394 = new cljs.core.IndexedSeq(G__19397__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__19394);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__19398){
var ports = cljs.core.first(arglist__19398);
var p__19394 = cljs.core.rest(arglist__19398);
return alts_BANG___delegate(ports,p__19394);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__6550__auto___19493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___19493){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___19493){
return (function (state_19469){
var state_val_19470 = (state_19469[(1)]);
if((state_val_19470 === (7))){
var inst_19465 = (state_19469[(2)]);
var state_19469__$1 = state_19469;
var statearr_19471_19494 = state_19469__$1;
(statearr_19471_19494[(2)] = inst_19465);

(statearr_19471_19494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19470 === (1))){
var state_19469__$1 = state_19469;
var statearr_19472_19495 = state_19469__$1;
(statearr_19472_19495[(2)] = null);

(statearr_19472_19495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19470 === (4))){
var inst_19448 = (state_19469[(7)]);
var inst_19448__$1 = (state_19469[(2)]);
var inst_19449 = (inst_19448__$1 == null);
var state_19469__$1 = (function (){var statearr_19473 = state_19469;
(statearr_19473[(7)] = inst_19448__$1);

return statearr_19473;
})();
if(cljs.core.truth_(inst_19449)){
var statearr_19474_19496 = state_19469__$1;
(statearr_19474_19496[(1)] = (5));

} else {
var statearr_19475_19497 = state_19469__$1;
(statearr_19475_19497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19470 === (13))){
var state_19469__$1 = state_19469;
var statearr_19476_19498 = state_19469__$1;
(statearr_19476_19498[(2)] = null);

(statearr_19476_19498[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19470 === (6))){
var inst_19448 = (state_19469[(7)]);
var state_19469__$1 = state_19469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19469__$1,(11),to,inst_19448);
} else {
if((state_val_19470 === (3))){
var inst_19467 = (state_19469[(2)]);
var state_19469__$1 = state_19469;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19469__$1,inst_19467);
} else {
if((state_val_19470 === (12))){
var state_19469__$1 = state_19469;
var statearr_19477_19499 = state_19469__$1;
(statearr_19477_19499[(2)] = null);

(statearr_19477_19499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19470 === (2))){
var state_19469__$1 = state_19469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19469__$1,(4),from);
} else {
if((state_val_19470 === (11))){
var inst_19458 = (state_19469[(2)]);
var state_19469__$1 = state_19469;
if(cljs.core.truth_(inst_19458)){
var statearr_19478_19500 = state_19469__$1;
(statearr_19478_19500[(1)] = (12));

} else {
var statearr_19479_19501 = state_19469__$1;
(statearr_19479_19501[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19470 === (9))){
var state_19469__$1 = state_19469;
var statearr_19480_19502 = state_19469__$1;
(statearr_19480_19502[(2)] = null);

(statearr_19480_19502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19470 === (5))){
var state_19469__$1 = state_19469;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19481_19503 = state_19469__$1;
(statearr_19481_19503[(1)] = (8));

} else {
var statearr_19482_19504 = state_19469__$1;
(statearr_19482_19504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19470 === (14))){
var inst_19463 = (state_19469[(2)]);
var state_19469__$1 = state_19469;
var statearr_19483_19505 = state_19469__$1;
(statearr_19483_19505[(2)] = inst_19463);

(statearr_19483_19505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19470 === (10))){
var inst_19455 = (state_19469[(2)]);
var state_19469__$1 = state_19469;
var statearr_19484_19506 = state_19469__$1;
(statearr_19484_19506[(2)] = inst_19455);

(statearr_19484_19506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19470 === (8))){
var inst_19452 = cljs.core.async.close_BANG_.call(null,to);
var state_19469__$1 = state_19469;
var statearr_19485_19507 = state_19469__$1;
(statearr_19485_19507[(2)] = inst_19452);

(statearr_19485_19507[(1)] = (10));


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
});})(c__6550__auto___19493))
;
return ((function (switch__6494__auto__,c__6550__auto___19493){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_19489 = [null,null,null,null,null,null,null,null];
(statearr_19489[(0)] = state_machine__6495__auto__);

(statearr_19489[(1)] = (1));

return statearr_19489;
});
var state_machine__6495__auto____1 = (function (state_19469){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_19469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e19490){if((e19490 instanceof Object)){
var ex__6498__auto__ = e19490;
var statearr_19491_19508 = state_19469;
(statearr_19491_19508[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19509 = state_19469;
state_19469 = G__19509;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_19469){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_19469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___19493))
})();
var state__6552__auto__ = (function (){var statearr_19492 = f__6551__auto__.call(null);
(statearr_19492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___19493);

return statearr_19492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___19493))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19693){
var vec__19694 = p__19693;
var v = cljs.core.nth.call(null,vec__19694,(0),null);
var p = cljs.core.nth.call(null,vec__19694,(1),null);
var job = vec__19694;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__6550__auto___19876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___19876,res,vec__19694,v,p,job,jobs,results){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___19876,res,vec__19694,v,p,job,jobs,results){
return (function (state_19699){
var state_val_19700 = (state_19699[(1)]);
if((state_val_19700 === (2))){
var inst_19696 = (state_19699[(2)]);
var inst_19697 = cljs.core.async.close_BANG_.call(null,res);
var state_19699__$1 = (function (){var statearr_19701 = state_19699;
(statearr_19701[(7)] = inst_19696);

return statearr_19701;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19699__$1,inst_19697);
} else {
if((state_val_19700 === (1))){
var state_19699__$1 = state_19699;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19699__$1,(2),res,v);
} else {
return null;
}
}
});})(c__6550__auto___19876,res,vec__19694,v,p,job,jobs,results))
;
return ((function (switch__6494__auto__,c__6550__auto___19876,res,vec__19694,v,p,job,jobs,results){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_19705 = [null,null,null,null,null,null,null,null];
(statearr_19705[(0)] = state_machine__6495__auto__);

(statearr_19705[(1)] = (1));

return statearr_19705;
});
var state_machine__6495__auto____1 = (function (state_19699){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_19699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e19706){if((e19706 instanceof Object)){
var ex__6498__auto__ = e19706;
var statearr_19707_19877 = state_19699;
(statearr_19707_19877[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19878 = state_19699;
state_19699 = G__19878;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_19699){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_19699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___19876,res,vec__19694,v,p,job,jobs,results))
})();
var state__6552__auto__ = (function (){var statearr_19708 = f__6551__auto__.call(null);
(statearr_19708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___19876);

return statearr_19708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___19876,res,vec__19694,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19709){
var vec__19710 = p__19709;
var v = cljs.core.nth.call(null,vec__19710,(0),null);
var p = cljs.core.nth.call(null,vec__19710,(1),null);
var job = vec__19710;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4659__auto___19879 = n;
var __19880 = (0);
while(true){
if((__19880 < n__4659__auto___19879)){
var G__19711_19881 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19711_19881) {
case "async":
var c__6550__auto___19883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19880,c__6550__auto___19883,G__19711_19881,n__4659__auto___19879,jobs,results,process,async){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (__19880,c__6550__auto___19883,G__19711_19881,n__4659__auto___19879,jobs,results,process,async){
return (function (state_19724){
var state_val_19725 = (state_19724[(1)]);
if((state_val_19725 === (7))){
var inst_19720 = (state_19724[(2)]);
var state_19724__$1 = state_19724;
var statearr_19726_19884 = state_19724__$1;
(statearr_19726_19884[(2)] = inst_19720);

(statearr_19726_19884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19725 === (6))){
var state_19724__$1 = state_19724;
var statearr_19727_19885 = state_19724__$1;
(statearr_19727_19885[(2)] = null);

(statearr_19727_19885[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19725 === (5))){
var state_19724__$1 = state_19724;
var statearr_19728_19886 = state_19724__$1;
(statearr_19728_19886[(2)] = null);

(statearr_19728_19886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19725 === (4))){
var inst_19714 = (state_19724[(2)]);
var inst_19715 = async.call(null,inst_19714);
var state_19724__$1 = state_19724;
if(cljs.core.truth_(inst_19715)){
var statearr_19729_19887 = state_19724__$1;
(statearr_19729_19887[(1)] = (5));

} else {
var statearr_19730_19888 = state_19724__$1;
(statearr_19730_19888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19725 === (3))){
var inst_19722 = (state_19724[(2)]);
var state_19724__$1 = state_19724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19724__$1,inst_19722);
} else {
if((state_val_19725 === (2))){
var state_19724__$1 = state_19724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19724__$1,(4),jobs);
} else {
if((state_val_19725 === (1))){
var state_19724__$1 = state_19724;
var statearr_19731_19889 = state_19724__$1;
(statearr_19731_19889[(2)] = null);

(statearr_19731_19889[(1)] = (2));


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
});})(__19880,c__6550__auto___19883,G__19711_19881,n__4659__auto___19879,jobs,results,process,async))
;
return ((function (__19880,switch__6494__auto__,c__6550__auto___19883,G__19711_19881,n__4659__auto___19879,jobs,results,process,async){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_19735 = [null,null,null,null,null,null,null];
(statearr_19735[(0)] = state_machine__6495__auto__);

(statearr_19735[(1)] = (1));

return statearr_19735;
});
var state_machine__6495__auto____1 = (function (state_19724){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_19724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e19736){if((e19736 instanceof Object)){
var ex__6498__auto__ = e19736;
var statearr_19737_19890 = state_19724;
(statearr_19737_19890[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19891 = state_19724;
state_19724 = G__19891;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_19724){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_19724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(__19880,switch__6494__auto__,c__6550__auto___19883,G__19711_19881,n__4659__auto___19879,jobs,results,process,async))
})();
var state__6552__auto__ = (function (){var statearr_19738 = f__6551__auto__.call(null);
(statearr_19738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___19883);

return statearr_19738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(__19880,c__6550__auto___19883,G__19711_19881,n__4659__auto___19879,jobs,results,process,async))
);


break;
case "compute":
var c__6550__auto___19892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__19880,c__6550__auto___19892,G__19711_19881,n__4659__auto___19879,jobs,results,process,async){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (__19880,c__6550__auto___19892,G__19711_19881,n__4659__auto___19879,jobs,results,process,async){
return (function (state_19751){
var state_val_19752 = (state_19751[(1)]);
if((state_val_19752 === (7))){
var inst_19747 = (state_19751[(2)]);
var state_19751__$1 = state_19751;
var statearr_19753_19893 = state_19751__$1;
(statearr_19753_19893[(2)] = inst_19747);

(statearr_19753_19893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (6))){
var state_19751__$1 = state_19751;
var statearr_19754_19894 = state_19751__$1;
(statearr_19754_19894[(2)] = null);

(statearr_19754_19894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (5))){
var state_19751__$1 = state_19751;
var statearr_19755_19895 = state_19751__$1;
(statearr_19755_19895[(2)] = null);

(statearr_19755_19895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (4))){
var inst_19741 = (state_19751[(2)]);
var inst_19742 = process.call(null,inst_19741);
var state_19751__$1 = state_19751;
if(cljs.core.truth_(inst_19742)){
var statearr_19756_19896 = state_19751__$1;
(statearr_19756_19896[(1)] = (5));

} else {
var statearr_19757_19897 = state_19751__$1;
(statearr_19757_19897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19752 === (3))){
var inst_19749 = (state_19751[(2)]);
var state_19751__$1 = state_19751;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19751__$1,inst_19749);
} else {
if((state_val_19752 === (2))){
var state_19751__$1 = state_19751;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19751__$1,(4),jobs);
} else {
if((state_val_19752 === (1))){
var state_19751__$1 = state_19751;
var statearr_19758_19898 = state_19751__$1;
(statearr_19758_19898[(2)] = null);

(statearr_19758_19898[(1)] = (2));


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
});})(__19880,c__6550__auto___19892,G__19711_19881,n__4659__auto___19879,jobs,results,process,async))
;
return ((function (__19880,switch__6494__auto__,c__6550__auto___19892,G__19711_19881,n__4659__auto___19879,jobs,results,process,async){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_19762 = [null,null,null,null,null,null,null];
(statearr_19762[(0)] = state_machine__6495__auto__);

(statearr_19762[(1)] = (1));

return statearr_19762;
});
var state_machine__6495__auto____1 = (function (state_19751){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_19751);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e19763){if((e19763 instanceof Object)){
var ex__6498__auto__ = e19763;
var statearr_19764_19899 = state_19751;
(statearr_19764_19899[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19900 = state_19751;
state_19751 = G__19900;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_19751){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_19751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(__19880,switch__6494__auto__,c__6550__auto___19892,G__19711_19881,n__4659__auto___19879,jobs,results,process,async))
})();
var state__6552__auto__ = (function (){var statearr_19765 = f__6551__auto__.call(null);
(statearr_19765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___19892);

return statearr_19765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(__19880,c__6550__auto___19892,G__19711_19881,n__4659__auto___19879,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__19901 = (__19880 + (1));
__19880 = G__19901;
continue;
} else {
}
break;
}

var c__6550__auto___19902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___19902,jobs,results,process,async){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___19902,jobs,results,process,async){
return (function (state_19787){
var state_val_19788 = (state_19787[(1)]);
if((state_val_19788 === (9))){
var inst_19780 = (state_19787[(2)]);
var state_19787__$1 = (function (){var statearr_19789 = state_19787;
(statearr_19789[(7)] = inst_19780);

return statearr_19789;
})();
var statearr_19790_19903 = state_19787__$1;
(statearr_19790_19903[(2)] = null);

(statearr_19790_19903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (8))){
var inst_19773 = (state_19787[(8)]);
var inst_19778 = (state_19787[(2)]);
var state_19787__$1 = (function (){var statearr_19791 = state_19787;
(statearr_19791[(9)] = inst_19778);

return statearr_19791;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19787__$1,(9),results,inst_19773);
} else {
if((state_val_19788 === (7))){
var inst_19783 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
var statearr_19792_19904 = state_19787__$1;
(statearr_19792_19904[(2)] = inst_19783);

(statearr_19792_19904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (6))){
var inst_19768 = (state_19787[(10)]);
var inst_19773 = (state_19787[(8)]);
var inst_19773__$1 = cljs.core.async.chan.call(null,(1));
var inst_19774 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19775 = [inst_19768,inst_19773__$1];
var inst_19776 = (new cljs.core.PersistentVector(null,2,(5),inst_19774,inst_19775,null));
var state_19787__$1 = (function (){var statearr_19793 = state_19787;
(statearr_19793[(8)] = inst_19773__$1);

return statearr_19793;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19787__$1,(8),jobs,inst_19776);
} else {
if((state_val_19788 === (5))){
var inst_19771 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19787__$1 = state_19787;
var statearr_19794_19905 = state_19787__$1;
(statearr_19794_19905[(2)] = inst_19771);

(statearr_19794_19905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (4))){
var inst_19768 = (state_19787[(10)]);
var inst_19768__$1 = (state_19787[(2)]);
var inst_19769 = (inst_19768__$1 == null);
var state_19787__$1 = (function (){var statearr_19795 = state_19787;
(statearr_19795[(10)] = inst_19768__$1);

return statearr_19795;
})();
if(cljs.core.truth_(inst_19769)){
var statearr_19796_19906 = state_19787__$1;
(statearr_19796_19906[(1)] = (5));

} else {
var statearr_19797_19907 = state_19787__$1;
(statearr_19797_19907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19788 === (3))){
var inst_19785 = (state_19787[(2)]);
var state_19787__$1 = state_19787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19787__$1,inst_19785);
} else {
if((state_val_19788 === (2))){
var state_19787__$1 = state_19787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19787__$1,(4),from);
} else {
if((state_val_19788 === (1))){
var state_19787__$1 = state_19787;
var statearr_19798_19908 = state_19787__$1;
(statearr_19798_19908[(2)] = null);

(statearr_19798_19908[(1)] = (2));


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
});})(c__6550__auto___19902,jobs,results,process,async))
;
return ((function (switch__6494__auto__,c__6550__auto___19902,jobs,results,process,async){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_19802 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19802[(0)] = state_machine__6495__auto__);

(statearr_19802[(1)] = (1));

return statearr_19802;
});
var state_machine__6495__auto____1 = (function (state_19787){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_19787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e19803){if((e19803 instanceof Object)){
var ex__6498__auto__ = e19803;
var statearr_19804_19909 = state_19787;
(statearr_19804_19909[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19910 = state_19787;
state_19787 = G__19910;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_19787){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_19787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___19902,jobs,results,process,async))
})();
var state__6552__auto__ = (function (){var statearr_19805 = f__6551__auto__.call(null);
(statearr_19805[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___19902);

return statearr_19805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___19902,jobs,results,process,async))
);


var c__6550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto__,jobs,results,process,async){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto__,jobs,results,process,async){
return (function (state_19843){
var state_val_19844 = (state_19843[(1)]);
if((state_val_19844 === (7))){
var inst_19839 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19845_19911 = state_19843__$1;
(statearr_19845_19911[(2)] = inst_19839);

(statearr_19845_19911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (20))){
var state_19843__$1 = state_19843;
var statearr_19846_19912 = state_19843__$1;
(statearr_19846_19912[(2)] = null);

(statearr_19846_19912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (1))){
var state_19843__$1 = state_19843;
var statearr_19847_19913 = state_19843__$1;
(statearr_19847_19913[(2)] = null);

(statearr_19847_19913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (4))){
var inst_19808 = (state_19843[(7)]);
var inst_19808__$1 = (state_19843[(2)]);
var inst_19809 = (inst_19808__$1 == null);
var state_19843__$1 = (function (){var statearr_19848 = state_19843;
(statearr_19848[(7)] = inst_19808__$1);

return statearr_19848;
})();
if(cljs.core.truth_(inst_19809)){
var statearr_19849_19914 = state_19843__$1;
(statearr_19849_19914[(1)] = (5));

} else {
var statearr_19850_19915 = state_19843__$1;
(statearr_19850_19915[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (15))){
var inst_19821 = (state_19843[(8)]);
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19843__$1,(18),to,inst_19821);
} else {
if((state_val_19844 === (21))){
var inst_19834 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19851_19916 = state_19843__$1;
(statearr_19851_19916[(2)] = inst_19834);

(statearr_19851_19916[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (13))){
var inst_19836 = (state_19843[(2)]);
var state_19843__$1 = (function (){var statearr_19852 = state_19843;
(statearr_19852[(9)] = inst_19836);

return statearr_19852;
})();
var statearr_19853_19917 = state_19843__$1;
(statearr_19853_19917[(2)] = null);

(statearr_19853_19917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (6))){
var inst_19808 = (state_19843[(7)]);
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19843__$1,(11),inst_19808);
} else {
if((state_val_19844 === (17))){
var inst_19829 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
if(cljs.core.truth_(inst_19829)){
var statearr_19854_19918 = state_19843__$1;
(statearr_19854_19918[(1)] = (19));

} else {
var statearr_19855_19919 = state_19843__$1;
(statearr_19855_19919[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (3))){
var inst_19841 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19843__$1,inst_19841);
} else {
if((state_val_19844 === (12))){
var inst_19818 = (state_19843[(10)]);
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19843__$1,(14),inst_19818);
} else {
if((state_val_19844 === (2))){
var state_19843__$1 = state_19843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19843__$1,(4),results);
} else {
if((state_val_19844 === (19))){
var state_19843__$1 = state_19843;
var statearr_19856_19920 = state_19843__$1;
(statearr_19856_19920[(2)] = null);

(statearr_19856_19920[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (11))){
var inst_19818 = (state_19843[(2)]);
var state_19843__$1 = (function (){var statearr_19857 = state_19843;
(statearr_19857[(10)] = inst_19818);

return statearr_19857;
})();
var statearr_19858_19921 = state_19843__$1;
(statearr_19858_19921[(2)] = null);

(statearr_19858_19921[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (9))){
var state_19843__$1 = state_19843;
var statearr_19859_19922 = state_19843__$1;
(statearr_19859_19922[(2)] = null);

(statearr_19859_19922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (5))){
var state_19843__$1 = state_19843;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19860_19923 = state_19843__$1;
(statearr_19860_19923[(1)] = (8));

} else {
var statearr_19861_19924 = state_19843__$1;
(statearr_19861_19924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (14))){
var inst_19821 = (state_19843[(8)]);
var inst_19823 = (state_19843[(11)]);
var inst_19821__$1 = (state_19843[(2)]);
var inst_19822 = (inst_19821__$1 == null);
var inst_19823__$1 = cljs.core.not.call(null,inst_19822);
var state_19843__$1 = (function (){var statearr_19862 = state_19843;
(statearr_19862[(8)] = inst_19821__$1);

(statearr_19862[(11)] = inst_19823__$1);

return statearr_19862;
})();
if(inst_19823__$1){
var statearr_19863_19925 = state_19843__$1;
(statearr_19863_19925[(1)] = (15));

} else {
var statearr_19864_19926 = state_19843__$1;
(statearr_19864_19926[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (16))){
var inst_19823 = (state_19843[(11)]);
var state_19843__$1 = state_19843;
var statearr_19865_19927 = state_19843__$1;
(statearr_19865_19927[(2)] = inst_19823);

(statearr_19865_19927[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (10))){
var inst_19815 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19866_19928 = state_19843__$1;
(statearr_19866_19928[(2)] = inst_19815);

(statearr_19866_19928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (18))){
var inst_19826 = (state_19843[(2)]);
var state_19843__$1 = state_19843;
var statearr_19867_19929 = state_19843__$1;
(statearr_19867_19929[(2)] = inst_19826);

(statearr_19867_19929[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19844 === (8))){
var inst_19812 = cljs.core.async.close_BANG_.call(null,to);
var state_19843__$1 = state_19843;
var statearr_19868_19930 = state_19843__$1;
(statearr_19868_19930[(2)] = inst_19812);

(statearr_19868_19930[(1)] = (10));


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
});})(c__6550__auto__,jobs,results,process,async))
;
return ((function (switch__6494__auto__,c__6550__auto__,jobs,results,process,async){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_19872 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19872[(0)] = state_machine__6495__auto__);

(statearr_19872[(1)] = (1));

return statearr_19872;
});
var state_machine__6495__auto____1 = (function (state_19843){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_19843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e19873){if((e19873 instanceof Object)){
var ex__6498__auto__ = e19873;
var statearr_19874_19931 = state_19843;
(statearr_19874_19931[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19932 = state_19843;
state_19843 = G__19932;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_19843){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_19843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto__,jobs,results,process,async))
})();
var state__6552__auto__ = (function (){var statearr_19875 = f__6551__auto__.call(null);
(statearr_19875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto__);

return statearr_19875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto__,jobs,results,process,async))
);

return c__6550__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__6550__auto___20033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___20033,tc,fc){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___20033,tc,fc){
return (function (state_20008){
var state_val_20009 = (state_20008[(1)]);
if((state_val_20009 === (7))){
var inst_20004 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
var statearr_20010_20034 = state_20008__$1;
(statearr_20010_20034[(2)] = inst_20004);

(statearr_20010_20034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (1))){
var state_20008__$1 = state_20008;
var statearr_20011_20035 = state_20008__$1;
(statearr_20011_20035[(2)] = null);

(statearr_20011_20035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (4))){
var inst_19985 = (state_20008[(7)]);
var inst_19985__$1 = (state_20008[(2)]);
var inst_19986 = (inst_19985__$1 == null);
var state_20008__$1 = (function (){var statearr_20012 = state_20008;
(statearr_20012[(7)] = inst_19985__$1);

return statearr_20012;
})();
if(cljs.core.truth_(inst_19986)){
var statearr_20013_20036 = state_20008__$1;
(statearr_20013_20036[(1)] = (5));

} else {
var statearr_20014_20037 = state_20008__$1;
(statearr_20014_20037[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (13))){
var state_20008__$1 = state_20008;
var statearr_20015_20038 = state_20008__$1;
(statearr_20015_20038[(2)] = null);

(statearr_20015_20038[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (6))){
var inst_19985 = (state_20008[(7)]);
var inst_19991 = p.call(null,inst_19985);
var state_20008__$1 = state_20008;
if(cljs.core.truth_(inst_19991)){
var statearr_20016_20039 = state_20008__$1;
(statearr_20016_20039[(1)] = (9));

} else {
var statearr_20017_20040 = state_20008__$1;
(statearr_20017_20040[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (3))){
var inst_20006 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20008__$1,inst_20006);
} else {
if((state_val_20009 === (12))){
var state_20008__$1 = state_20008;
var statearr_20018_20041 = state_20008__$1;
(statearr_20018_20041[(2)] = null);

(statearr_20018_20041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (2))){
var state_20008__$1 = state_20008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20008__$1,(4),ch);
} else {
if((state_val_20009 === (11))){
var inst_19985 = (state_20008[(7)]);
var inst_19995 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20008__$1,(8),inst_19995,inst_19985);
} else {
if((state_val_20009 === (9))){
var state_20008__$1 = state_20008;
var statearr_20019_20042 = state_20008__$1;
(statearr_20019_20042[(2)] = tc);

(statearr_20019_20042[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (5))){
var inst_19988 = cljs.core.async.close_BANG_.call(null,tc);
var inst_19989 = cljs.core.async.close_BANG_.call(null,fc);
var state_20008__$1 = (function (){var statearr_20020 = state_20008;
(statearr_20020[(8)] = inst_19988);

return statearr_20020;
})();
var statearr_20021_20043 = state_20008__$1;
(statearr_20021_20043[(2)] = inst_19989);

(statearr_20021_20043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (14))){
var inst_20002 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
var statearr_20022_20044 = state_20008__$1;
(statearr_20022_20044[(2)] = inst_20002);

(statearr_20022_20044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (10))){
var state_20008__$1 = state_20008;
var statearr_20023_20045 = state_20008__$1;
(statearr_20023_20045[(2)] = fc);

(statearr_20023_20045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20009 === (8))){
var inst_19997 = (state_20008[(2)]);
var state_20008__$1 = state_20008;
if(cljs.core.truth_(inst_19997)){
var statearr_20024_20046 = state_20008__$1;
(statearr_20024_20046[(1)] = (12));

} else {
var statearr_20025_20047 = state_20008__$1;
(statearr_20025_20047[(1)] = (13));

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
});})(c__6550__auto___20033,tc,fc))
;
return ((function (switch__6494__auto__,c__6550__auto___20033,tc,fc){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_20029 = [null,null,null,null,null,null,null,null,null];
(statearr_20029[(0)] = state_machine__6495__auto__);

(statearr_20029[(1)] = (1));

return statearr_20029;
});
var state_machine__6495__auto____1 = (function (state_20008){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_20008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e20030){if((e20030 instanceof Object)){
var ex__6498__auto__ = e20030;
var statearr_20031_20048 = state_20008;
(statearr_20031_20048[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20030;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20049 = state_20008;
state_20008 = G__20049;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_20008){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_20008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___20033,tc,fc))
})();
var state__6552__auto__ = (function (){var statearr_20032 = f__6551__auto__.call(null);
(statearr_20032[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___20033);

return statearr_20032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___20033,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__6550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto__){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto__){
return (function (state_20096){
var state_val_20097 = (state_20096[(1)]);
if((state_val_20097 === (7))){
var inst_20092 = (state_20096[(2)]);
var state_20096__$1 = state_20096;
var statearr_20098_20114 = state_20096__$1;
(statearr_20098_20114[(2)] = inst_20092);

(statearr_20098_20114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (6))){
var inst_20085 = (state_20096[(7)]);
var inst_20082 = (state_20096[(8)]);
var inst_20089 = f.call(null,inst_20082,inst_20085);
var inst_20082__$1 = inst_20089;
var state_20096__$1 = (function (){var statearr_20099 = state_20096;
(statearr_20099[(8)] = inst_20082__$1);

return statearr_20099;
})();
var statearr_20100_20115 = state_20096__$1;
(statearr_20100_20115[(2)] = null);

(statearr_20100_20115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (5))){
var inst_20082 = (state_20096[(8)]);
var state_20096__$1 = state_20096;
var statearr_20101_20116 = state_20096__$1;
(statearr_20101_20116[(2)] = inst_20082);

(statearr_20101_20116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (4))){
var inst_20085 = (state_20096[(7)]);
var inst_20085__$1 = (state_20096[(2)]);
var inst_20086 = (inst_20085__$1 == null);
var state_20096__$1 = (function (){var statearr_20102 = state_20096;
(statearr_20102[(7)] = inst_20085__$1);

return statearr_20102;
})();
if(cljs.core.truth_(inst_20086)){
var statearr_20103_20117 = state_20096__$1;
(statearr_20103_20117[(1)] = (5));

} else {
var statearr_20104_20118 = state_20096__$1;
(statearr_20104_20118[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20097 === (3))){
var inst_20094 = (state_20096[(2)]);
var state_20096__$1 = state_20096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20096__$1,inst_20094);
} else {
if((state_val_20097 === (2))){
var state_20096__$1 = state_20096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20096__$1,(4),ch);
} else {
if((state_val_20097 === (1))){
var inst_20082 = init;
var state_20096__$1 = (function (){var statearr_20105 = state_20096;
(statearr_20105[(8)] = inst_20082);

return statearr_20105;
})();
var statearr_20106_20119 = state_20096__$1;
(statearr_20106_20119[(2)] = null);

(statearr_20106_20119[(1)] = (2));


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
});})(c__6550__auto__))
;
return ((function (switch__6494__auto__,c__6550__auto__){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_20110 = [null,null,null,null,null,null,null,null,null];
(statearr_20110[(0)] = state_machine__6495__auto__);

(statearr_20110[(1)] = (1));

return statearr_20110;
});
var state_machine__6495__auto____1 = (function (state_20096){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_20096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e20111){if((e20111 instanceof Object)){
var ex__6498__auto__ = e20111;
var statearr_20112_20120 = state_20096;
(statearr_20112_20120[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20121 = state_20096;
state_20096 = G__20121;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_20096){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_20096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto__))
})();
var state__6552__auto__ = (function (){var statearr_20113 = f__6551__auto__.call(null);
(statearr_20113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto__);

return statearr_20113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto__))
);

return c__6550__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__6550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto__){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto__){
return (function (state_20195){
var state_val_20196 = (state_20195[(1)]);
if((state_val_20196 === (7))){
var inst_20177 = (state_20195[(2)]);
var state_20195__$1 = state_20195;
var statearr_20197_20220 = state_20195__$1;
(statearr_20197_20220[(2)] = inst_20177);

(statearr_20197_20220[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (1))){
var inst_20171 = cljs.core.seq.call(null,coll);
var inst_20172 = inst_20171;
var state_20195__$1 = (function (){var statearr_20198 = state_20195;
(statearr_20198[(7)] = inst_20172);

return statearr_20198;
})();
var statearr_20199_20221 = state_20195__$1;
(statearr_20199_20221[(2)] = null);

(statearr_20199_20221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (4))){
var inst_20172 = (state_20195[(7)]);
var inst_20175 = cljs.core.first.call(null,inst_20172);
var state_20195__$1 = state_20195;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20195__$1,(7),ch,inst_20175);
} else {
if((state_val_20196 === (13))){
var inst_20189 = (state_20195[(2)]);
var state_20195__$1 = state_20195;
var statearr_20200_20222 = state_20195__$1;
(statearr_20200_20222[(2)] = inst_20189);

(statearr_20200_20222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (6))){
var inst_20180 = (state_20195[(2)]);
var state_20195__$1 = state_20195;
if(cljs.core.truth_(inst_20180)){
var statearr_20201_20223 = state_20195__$1;
(statearr_20201_20223[(1)] = (8));

} else {
var statearr_20202_20224 = state_20195__$1;
(statearr_20202_20224[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (3))){
var inst_20193 = (state_20195[(2)]);
var state_20195__$1 = state_20195;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20195__$1,inst_20193);
} else {
if((state_val_20196 === (12))){
var state_20195__$1 = state_20195;
var statearr_20203_20225 = state_20195__$1;
(statearr_20203_20225[(2)] = null);

(statearr_20203_20225[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (2))){
var inst_20172 = (state_20195[(7)]);
var state_20195__$1 = state_20195;
if(cljs.core.truth_(inst_20172)){
var statearr_20204_20226 = state_20195__$1;
(statearr_20204_20226[(1)] = (4));

} else {
var statearr_20205_20227 = state_20195__$1;
(statearr_20205_20227[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (11))){
var inst_20186 = cljs.core.async.close_BANG_.call(null,ch);
var state_20195__$1 = state_20195;
var statearr_20206_20228 = state_20195__$1;
(statearr_20206_20228[(2)] = inst_20186);

(statearr_20206_20228[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (9))){
var state_20195__$1 = state_20195;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20207_20229 = state_20195__$1;
(statearr_20207_20229[(1)] = (11));

} else {
var statearr_20208_20230 = state_20195__$1;
(statearr_20208_20230[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (5))){
var inst_20172 = (state_20195[(7)]);
var state_20195__$1 = state_20195;
var statearr_20209_20231 = state_20195__$1;
(statearr_20209_20231[(2)] = inst_20172);

(statearr_20209_20231[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (10))){
var inst_20191 = (state_20195[(2)]);
var state_20195__$1 = state_20195;
var statearr_20210_20232 = state_20195__$1;
(statearr_20210_20232[(2)] = inst_20191);

(statearr_20210_20232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20196 === (8))){
var inst_20172 = (state_20195[(7)]);
var inst_20182 = cljs.core.next.call(null,inst_20172);
var inst_20172__$1 = inst_20182;
var state_20195__$1 = (function (){var statearr_20211 = state_20195;
(statearr_20211[(7)] = inst_20172__$1);

return statearr_20211;
})();
var statearr_20212_20233 = state_20195__$1;
(statearr_20212_20233[(2)] = null);

(statearr_20212_20233[(1)] = (2));


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
});})(c__6550__auto__))
;
return ((function (switch__6494__auto__,c__6550__auto__){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_20216 = [null,null,null,null,null,null,null,null];
(statearr_20216[(0)] = state_machine__6495__auto__);

(statearr_20216[(1)] = (1));

return statearr_20216;
});
var state_machine__6495__auto____1 = (function (state_20195){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_20195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e20217){if((e20217 instanceof Object)){
var ex__6498__auto__ = e20217;
var statearr_20218_20234 = state_20195;
(statearr_20218_20234[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20235 = state_20195;
state_20195 = G__20235;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_20195){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_20195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto__))
})();
var state__6552__auto__ = (function (){var statearr_20219 = f__6551__auto__.call(null);
(statearr_20219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto__);

return statearr_20219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto__))
);

return c__6550__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj20237 = {};
return obj20237;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3760__auto__ = _;
if(and__3760__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4416__auto__ = (((_ == null))?null:_);
return (function (){var or__3772__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj20239 = {};
return obj20239;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t20461 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20461 = (function (cs,ch,mult,meta20462){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta20462 = meta20462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20461.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t20461.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t20461.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t20461.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t20461.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20461.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t20461.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20463){
var self__ = this;
var _20463__$1 = this;
return self__.meta20462;
});})(cs))
;

cljs.core.async.t20461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20463,meta20462__$1){
var self__ = this;
var _20463__$1 = this;
return (new cljs.core.async.t20461(self__.cs,self__.ch,self__.mult,meta20462__$1));
});})(cs))
;

cljs.core.async.t20461.cljs$lang$type = true;

cljs.core.async.t20461.cljs$lang$ctorStr = "cljs.core.async/t20461";

cljs.core.async.t20461.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t20461");
});})(cs))
;

cljs.core.async.__GT_t20461 = ((function (cs){
return (function __GT_t20461(cs__$1,ch__$1,mult__$1,meta20462){
return (new cljs.core.async.t20461(cs__$1,ch__$1,mult__$1,meta20462));
});})(cs))
;

}

return (new cljs.core.async.t20461(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__6550__auto___20682 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___20682,cs,m,dchan,dctr,done){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___20682,cs,m,dchan,dctr,done){
return (function (state_20594){
var state_val_20595 = (state_20594[(1)]);
if((state_val_20595 === (7))){
var inst_20590 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20596_20683 = state_20594__$1;
(statearr_20596_20683[(2)] = inst_20590);

(statearr_20596_20683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (20))){
var inst_20495 = (state_20594[(7)]);
var inst_20505 = cljs.core.first.call(null,inst_20495);
var inst_20506 = cljs.core.nth.call(null,inst_20505,(0),null);
var inst_20507 = cljs.core.nth.call(null,inst_20505,(1),null);
var state_20594__$1 = (function (){var statearr_20597 = state_20594;
(statearr_20597[(8)] = inst_20506);

return statearr_20597;
})();
if(cljs.core.truth_(inst_20507)){
var statearr_20598_20684 = state_20594__$1;
(statearr_20598_20684[(1)] = (22));

} else {
var statearr_20599_20685 = state_20594__$1;
(statearr_20599_20685[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (27))){
var inst_20542 = (state_20594[(9)]);
var inst_20537 = (state_20594[(10)]);
var inst_20466 = (state_20594[(11)]);
var inst_20535 = (state_20594[(12)]);
var inst_20542__$1 = cljs.core._nth.call(null,inst_20535,inst_20537);
var inst_20543 = cljs.core.async.put_BANG_.call(null,inst_20542__$1,inst_20466,done);
var state_20594__$1 = (function (){var statearr_20600 = state_20594;
(statearr_20600[(9)] = inst_20542__$1);

return statearr_20600;
})();
if(cljs.core.truth_(inst_20543)){
var statearr_20601_20686 = state_20594__$1;
(statearr_20601_20686[(1)] = (30));

} else {
var statearr_20602_20687 = state_20594__$1;
(statearr_20602_20687[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (1))){
var state_20594__$1 = state_20594;
var statearr_20603_20688 = state_20594__$1;
(statearr_20603_20688[(2)] = null);

(statearr_20603_20688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (24))){
var inst_20495 = (state_20594[(7)]);
var inst_20512 = (state_20594[(2)]);
var inst_20513 = cljs.core.next.call(null,inst_20495);
var inst_20475 = inst_20513;
var inst_20476 = null;
var inst_20477 = (0);
var inst_20478 = (0);
var state_20594__$1 = (function (){var statearr_20604 = state_20594;
(statearr_20604[(13)] = inst_20478);

(statearr_20604[(14)] = inst_20476);

(statearr_20604[(15)] = inst_20512);

(statearr_20604[(16)] = inst_20477);

(statearr_20604[(17)] = inst_20475);

return statearr_20604;
})();
var statearr_20605_20689 = state_20594__$1;
(statearr_20605_20689[(2)] = null);

(statearr_20605_20689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (39))){
var state_20594__$1 = state_20594;
var statearr_20609_20690 = state_20594__$1;
(statearr_20609_20690[(2)] = null);

(statearr_20609_20690[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (4))){
var inst_20466 = (state_20594[(11)]);
var inst_20466__$1 = (state_20594[(2)]);
var inst_20467 = (inst_20466__$1 == null);
var state_20594__$1 = (function (){var statearr_20610 = state_20594;
(statearr_20610[(11)] = inst_20466__$1);

return statearr_20610;
})();
if(cljs.core.truth_(inst_20467)){
var statearr_20611_20691 = state_20594__$1;
(statearr_20611_20691[(1)] = (5));

} else {
var statearr_20612_20692 = state_20594__$1;
(statearr_20612_20692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (15))){
var inst_20478 = (state_20594[(13)]);
var inst_20476 = (state_20594[(14)]);
var inst_20477 = (state_20594[(16)]);
var inst_20475 = (state_20594[(17)]);
var inst_20491 = (state_20594[(2)]);
var inst_20492 = (inst_20478 + (1));
var tmp20606 = inst_20476;
var tmp20607 = inst_20477;
var tmp20608 = inst_20475;
var inst_20475__$1 = tmp20608;
var inst_20476__$1 = tmp20606;
var inst_20477__$1 = tmp20607;
var inst_20478__$1 = inst_20492;
var state_20594__$1 = (function (){var statearr_20613 = state_20594;
(statearr_20613[(13)] = inst_20478__$1);

(statearr_20613[(18)] = inst_20491);

(statearr_20613[(14)] = inst_20476__$1);

(statearr_20613[(16)] = inst_20477__$1);

(statearr_20613[(17)] = inst_20475__$1);

return statearr_20613;
})();
var statearr_20614_20693 = state_20594__$1;
(statearr_20614_20693[(2)] = null);

(statearr_20614_20693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (21))){
var inst_20516 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20618_20694 = state_20594__$1;
(statearr_20618_20694[(2)] = inst_20516);

(statearr_20618_20694[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (31))){
var inst_20542 = (state_20594[(9)]);
var inst_20546 = done.call(null,null);
var inst_20547 = cljs.core.async.untap_STAR_.call(null,m,inst_20542);
var state_20594__$1 = (function (){var statearr_20619 = state_20594;
(statearr_20619[(19)] = inst_20546);

return statearr_20619;
})();
var statearr_20620_20695 = state_20594__$1;
(statearr_20620_20695[(2)] = inst_20547);

(statearr_20620_20695[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (32))){
var inst_20536 = (state_20594[(20)]);
var inst_20534 = (state_20594[(21)]);
var inst_20537 = (state_20594[(10)]);
var inst_20535 = (state_20594[(12)]);
var inst_20549 = (state_20594[(2)]);
var inst_20550 = (inst_20537 + (1));
var tmp20615 = inst_20536;
var tmp20616 = inst_20534;
var tmp20617 = inst_20535;
var inst_20534__$1 = tmp20616;
var inst_20535__$1 = tmp20617;
var inst_20536__$1 = tmp20615;
var inst_20537__$1 = inst_20550;
var state_20594__$1 = (function (){var statearr_20621 = state_20594;
(statearr_20621[(20)] = inst_20536__$1);

(statearr_20621[(21)] = inst_20534__$1);

(statearr_20621[(10)] = inst_20537__$1);

(statearr_20621[(12)] = inst_20535__$1);

(statearr_20621[(22)] = inst_20549);

return statearr_20621;
})();
var statearr_20622_20696 = state_20594__$1;
(statearr_20622_20696[(2)] = null);

(statearr_20622_20696[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (40))){
var inst_20562 = (state_20594[(23)]);
var inst_20566 = done.call(null,null);
var inst_20567 = cljs.core.async.untap_STAR_.call(null,m,inst_20562);
var state_20594__$1 = (function (){var statearr_20623 = state_20594;
(statearr_20623[(24)] = inst_20566);

return statearr_20623;
})();
var statearr_20624_20697 = state_20594__$1;
(statearr_20624_20697[(2)] = inst_20567);

(statearr_20624_20697[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (33))){
var inst_20553 = (state_20594[(25)]);
var inst_20555 = cljs.core.chunked_seq_QMARK_.call(null,inst_20553);
var state_20594__$1 = state_20594;
if(inst_20555){
var statearr_20625_20698 = state_20594__$1;
(statearr_20625_20698[(1)] = (36));

} else {
var statearr_20626_20699 = state_20594__$1;
(statearr_20626_20699[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (13))){
var inst_20485 = (state_20594[(26)]);
var inst_20488 = cljs.core.async.close_BANG_.call(null,inst_20485);
var state_20594__$1 = state_20594;
var statearr_20627_20700 = state_20594__$1;
(statearr_20627_20700[(2)] = inst_20488);

(statearr_20627_20700[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (22))){
var inst_20506 = (state_20594[(8)]);
var inst_20509 = cljs.core.async.close_BANG_.call(null,inst_20506);
var state_20594__$1 = state_20594;
var statearr_20628_20701 = state_20594__$1;
(statearr_20628_20701[(2)] = inst_20509);

(statearr_20628_20701[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (36))){
var inst_20553 = (state_20594[(25)]);
var inst_20557 = cljs.core.chunk_first.call(null,inst_20553);
var inst_20558 = cljs.core.chunk_rest.call(null,inst_20553);
var inst_20559 = cljs.core.count.call(null,inst_20557);
var inst_20534 = inst_20558;
var inst_20535 = inst_20557;
var inst_20536 = inst_20559;
var inst_20537 = (0);
var state_20594__$1 = (function (){var statearr_20629 = state_20594;
(statearr_20629[(20)] = inst_20536);

(statearr_20629[(21)] = inst_20534);

(statearr_20629[(10)] = inst_20537);

(statearr_20629[(12)] = inst_20535);

return statearr_20629;
})();
var statearr_20630_20702 = state_20594__$1;
(statearr_20630_20702[(2)] = null);

(statearr_20630_20702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (41))){
var inst_20553 = (state_20594[(25)]);
var inst_20569 = (state_20594[(2)]);
var inst_20570 = cljs.core.next.call(null,inst_20553);
var inst_20534 = inst_20570;
var inst_20535 = null;
var inst_20536 = (0);
var inst_20537 = (0);
var state_20594__$1 = (function (){var statearr_20631 = state_20594;
(statearr_20631[(20)] = inst_20536);

(statearr_20631[(21)] = inst_20534);

(statearr_20631[(27)] = inst_20569);

(statearr_20631[(10)] = inst_20537);

(statearr_20631[(12)] = inst_20535);

return statearr_20631;
})();
var statearr_20632_20703 = state_20594__$1;
(statearr_20632_20703[(2)] = null);

(statearr_20632_20703[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (43))){
var state_20594__$1 = state_20594;
var statearr_20633_20704 = state_20594__$1;
(statearr_20633_20704[(2)] = null);

(statearr_20633_20704[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (29))){
var inst_20578 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20634_20705 = state_20594__$1;
(statearr_20634_20705[(2)] = inst_20578);

(statearr_20634_20705[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (44))){
var inst_20587 = (state_20594[(2)]);
var state_20594__$1 = (function (){var statearr_20635 = state_20594;
(statearr_20635[(28)] = inst_20587);

return statearr_20635;
})();
var statearr_20636_20706 = state_20594__$1;
(statearr_20636_20706[(2)] = null);

(statearr_20636_20706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (6))){
var inst_20526 = (state_20594[(29)]);
var inst_20525 = cljs.core.deref.call(null,cs);
var inst_20526__$1 = cljs.core.keys.call(null,inst_20525);
var inst_20527 = cljs.core.count.call(null,inst_20526__$1);
var inst_20528 = cljs.core.reset_BANG_.call(null,dctr,inst_20527);
var inst_20533 = cljs.core.seq.call(null,inst_20526__$1);
var inst_20534 = inst_20533;
var inst_20535 = null;
var inst_20536 = (0);
var inst_20537 = (0);
var state_20594__$1 = (function (){var statearr_20637 = state_20594;
(statearr_20637[(20)] = inst_20536);

(statearr_20637[(21)] = inst_20534);

(statearr_20637[(30)] = inst_20528);

(statearr_20637[(29)] = inst_20526__$1);

(statearr_20637[(10)] = inst_20537);

(statearr_20637[(12)] = inst_20535);

return statearr_20637;
})();
var statearr_20638_20707 = state_20594__$1;
(statearr_20638_20707[(2)] = null);

(statearr_20638_20707[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (28))){
var inst_20534 = (state_20594[(21)]);
var inst_20553 = (state_20594[(25)]);
var inst_20553__$1 = cljs.core.seq.call(null,inst_20534);
var state_20594__$1 = (function (){var statearr_20639 = state_20594;
(statearr_20639[(25)] = inst_20553__$1);

return statearr_20639;
})();
if(inst_20553__$1){
var statearr_20640_20708 = state_20594__$1;
(statearr_20640_20708[(1)] = (33));

} else {
var statearr_20641_20709 = state_20594__$1;
(statearr_20641_20709[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (25))){
var inst_20536 = (state_20594[(20)]);
var inst_20537 = (state_20594[(10)]);
var inst_20539 = (inst_20537 < inst_20536);
var inst_20540 = inst_20539;
var state_20594__$1 = state_20594;
if(cljs.core.truth_(inst_20540)){
var statearr_20642_20710 = state_20594__$1;
(statearr_20642_20710[(1)] = (27));

} else {
var statearr_20643_20711 = state_20594__$1;
(statearr_20643_20711[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (34))){
var state_20594__$1 = state_20594;
var statearr_20644_20712 = state_20594__$1;
(statearr_20644_20712[(2)] = null);

(statearr_20644_20712[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (17))){
var state_20594__$1 = state_20594;
var statearr_20645_20713 = state_20594__$1;
(statearr_20645_20713[(2)] = null);

(statearr_20645_20713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (3))){
var inst_20592 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20594__$1,inst_20592);
} else {
if((state_val_20595 === (12))){
var inst_20521 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20646_20714 = state_20594__$1;
(statearr_20646_20714[(2)] = inst_20521);

(statearr_20646_20714[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (2))){
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20594__$1,(4),ch);
} else {
if((state_val_20595 === (23))){
var state_20594__$1 = state_20594;
var statearr_20647_20715 = state_20594__$1;
(statearr_20647_20715[(2)] = null);

(statearr_20647_20715[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (35))){
var inst_20576 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20648_20716 = state_20594__$1;
(statearr_20648_20716[(2)] = inst_20576);

(statearr_20648_20716[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (19))){
var inst_20495 = (state_20594[(7)]);
var inst_20499 = cljs.core.chunk_first.call(null,inst_20495);
var inst_20500 = cljs.core.chunk_rest.call(null,inst_20495);
var inst_20501 = cljs.core.count.call(null,inst_20499);
var inst_20475 = inst_20500;
var inst_20476 = inst_20499;
var inst_20477 = inst_20501;
var inst_20478 = (0);
var state_20594__$1 = (function (){var statearr_20649 = state_20594;
(statearr_20649[(13)] = inst_20478);

(statearr_20649[(14)] = inst_20476);

(statearr_20649[(16)] = inst_20477);

(statearr_20649[(17)] = inst_20475);

return statearr_20649;
})();
var statearr_20650_20717 = state_20594__$1;
(statearr_20650_20717[(2)] = null);

(statearr_20650_20717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (11))){
var inst_20495 = (state_20594[(7)]);
var inst_20475 = (state_20594[(17)]);
var inst_20495__$1 = cljs.core.seq.call(null,inst_20475);
var state_20594__$1 = (function (){var statearr_20651 = state_20594;
(statearr_20651[(7)] = inst_20495__$1);

return statearr_20651;
})();
if(inst_20495__$1){
var statearr_20652_20718 = state_20594__$1;
(statearr_20652_20718[(1)] = (16));

} else {
var statearr_20653_20719 = state_20594__$1;
(statearr_20653_20719[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (9))){
var inst_20523 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20654_20720 = state_20594__$1;
(statearr_20654_20720[(2)] = inst_20523);

(statearr_20654_20720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (5))){
var inst_20473 = cljs.core.deref.call(null,cs);
var inst_20474 = cljs.core.seq.call(null,inst_20473);
var inst_20475 = inst_20474;
var inst_20476 = null;
var inst_20477 = (0);
var inst_20478 = (0);
var state_20594__$1 = (function (){var statearr_20655 = state_20594;
(statearr_20655[(13)] = inst_20478);

(statearr_20655[(14)] = inst_20476);

(statearr_20655[(16)] = inst_20477);

(statearr_20655[(17)] = inst_20475);

return statearr_20655;
})();
var statearr_20656_20721 = state_20594__$1;
(statearr_20656_20721[(2)] = null);

(statearr_20656_20721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (14))){
var state_20594__$1 = state_20594;
var statearr_20657_20722 = state_20594__$1;
(statearr_20657_20722[(2)] = null);

(statearr_20657_20722[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (45))){
var inst_20584 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20658_20723 = state_20594__$1;
(statearr_20658_20723[(2)] = inst_20584);

(statearr_20658_20723[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (26))){
var inst_20526 = (state_20594[(29)]);
var inst_20580 = (state_20594[(2)]);
var inst_20581 = cljs.core.seq.call(null,inst_20526);
var state_20594__$1 = (function (){var statearr_20659 = state_20594;
(statearr_20659[(31)] = inst_20580);

return statearr_20659;
})();
if(inst_20581){
var statearr_20660_20724 = state_20594__$1;
(statearr_20660_20724[(1)] = (42));

} else {
var statearr_20661_20725 = state_20594__$1;
(statearr_20661_20725[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (16))){
var inst_20495 = (state_20594[(7)]);
var inst_20497 = cljs.core.chunked_seq_QMARK_.call(null,inst_20495);
var state_20594__$1 = state_20594;
if(inst_20497){
var statearr_20662_20726 = state_20594__$1;
(statearr_20662_20726[(1)] = (19));

} else {
var statearr_20663_20727 = state_20594__$1;
(statearr_20663_20727[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (38))){
var inst_20573 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20664_20728 = state_20594__$1;
(statearr_20664_20728[(2)] = inst_20573);

(statearr_20664_20728[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (30))){
var state_20594__$1 = state_20594;
var statearr_20665_20729 = state_20594__$1;
(statearr_20665_20729[(2)] = null);

(statearr_20665_20729[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (10))){
var inst_20478 = (state_20594[(13)]);
var inst_20476 = (state_20594[(14)]);
var inst_20484 = cljs.core._nth.call(null,inst_20476,inst_20478);
var inst_20485 = cljs.core.nth.call(null,inst_20484,(0),null);
var inst_20486 = cljs.core.nth.call(null,inst_20484,(1),null);
var state_20594__$1 = (function (){var statearr_20666 = state_20594;
(statearr_20666[(26)] = inst_20485);

return statearr_20666;
})();
if(cljs.core.truth_(inst_20486)){
var statearr_20667_20730 = state_20594__$1;
(statearr_20667_20730[(1)] = (13));

} else {
var statearr_20668_20731 = state_20594__$1;
(statearr_20668_20731[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (18))){
var inst_20519 = (state_20594[(2)]);
var state_20594__$1 = state_20594;
var statearr_20669_20732 = state_20594__$1;
(statearr_20669_20732[(2)] = inst_20519);

(statearr_20669_20732[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (42))){
var state_20594__$1 = state_20594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20594__$1,(45),dchan);
} else {
if((state_val_20595 === (37))){
var inst_20553 = (state_20594[(25)]);
var inst_20562 = (state_20594[(23)]);
var inst_20466 = (state_20594[(11)]);
var inst_20562__$1 = cljs.core.first.call(null,inst_20553);
var inst_20563 = cljs.core.async.put_BANG_.call(null,inst_20562__$1,inst_20466,done);
var state_20594__$1 = (function (){var statearr_20670 = state_20594;
(statearr_20670[(23)] = inst_20562__$1);

return statearr_20670;
})();
if(cljs.core.truth_(inst_20563)){
var statearr_20671_20733 = state_20594__$1;
(statearr_20671_20733[(1)] = (39));

} else {
var statearr_20672_20734 = state_20594__$1;
(statearr_20672_20734[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20595 === (8))){
var inst_20478 = (state_20594[(13)]);
var inst_20477 = (state_20594[(16)]);
var inst_20480 = (inst_20478 < inst_20477);
var inst_20481 = inst_20480;
var state_20594__$1 = state_20594;
if(cljs.core.truth_(inst_20481)){
var statearr_20673_20735 = state_20594__$1;
(statearr_20673_20735[(1)] = (10));

} else {
var statearr_20674_20736 = state_20594__$1;
(statearr_20674_20736[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__6550__auto___20682,cs,m,dchan,dctr,done))
;
return ((function (switch__6494__auto__,c__6550__auto___20682,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_20678 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20678[(0)] = state_machine__6495__auto__);

(statearr_20678[(1)] = (1));

return statearr_20678;
});
var state_machine__6495__auto____1 = (function (state_20594){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_20594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e20679){if((e20679 instanceof Object)){
var ex__6498__auto__ = e20679;
var statearr_20680_20737 = state_20594;
(statearr_20680_20737[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20738 = state_20594;
state_20594 = G__20738;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_20594){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_20594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___20682,cs,m,dchan,dctr,done))
})();
var state__6552__auto__ = (function (){var statearr_20681 = f__6551__auto__.call(null);
(statearr_20681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___20682);

return statearr_20681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___20682,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj20740 = {};
return obj20740;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3760__auto__ = m;
if(and__3760__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4416__auto__ = (((m == null))?null:m);
return (function (){var or__3772__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__20741){
var map__20746 = p__20741;
var map__20746__$1 = ((cljs.core.seq_QMARK_.call(null,map__20746))?cljs.core.apply.call(null,cljs.core.hash_map,map__20746):map__20746);
var opts = map__20746__$1;
var statearr_20747_20750 = state;
(statearr_20747_20750[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__20746,map__20746__$1,opts){
return (function (val){
var statearr_20748_20751 = state;
(statearr_20748_20751[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20746,map__20746__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_20749_20752 = state;
(statearr_20749_20752[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__20741 = null;
if (arguments.length > 3) {
var G__20753__i = 0, G__20753__a = new Array(arguments.length -  3);
while (G__20753__i < G__20753__a.length) {G__20753__a[G__20753__i] = arguments[G__20753__i + 3]; ++G__20753__i;}
  p__20741 = new cljs.core.IndexedSeq(G__20753__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__20741);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__20754){
var state = cljs.core.first(arglist__20754);
arglist__20754 = cljs.core.next(arglist__20754);
var cont_block = cljs.core.first(arglist__20754);
arglist__20754 = cljs.core.next(arglist__20754);
var ports = cljs.core.first(arglist__20754);
var p__20741 = cljs.core.rest(arglist__20754);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__20741);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t20874 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20874 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20875){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20875 = meta20875;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20874.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t20874.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20874.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20874.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20874.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20874.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20874.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t20874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20876){
var self__ = this;
var _20876__$1 = this;
return self__.meta20875;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20876,meta20875__$1){
var self__ = this;
var _20876__$1 = this;
return (new cljs.core.async.t20874(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20875__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t20874.cljs$lang$type = true;

cljs.core.async.t20874.cljs$lang$ctorStr = "cljs.core.async/t20874";

cljs.core.async.t20874.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t20874");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t20874 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20874(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20875){
return (new cljs.core.async.t20874(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20875));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t20874(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6550__auto___20993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___20993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___20993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_20946){
var state_val_20947 = (state_20946[(1)]);
if((state_val_20947 === (7))){
var inst_20890 = (state_20946[(7)]);
var inst_20895 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20890);
var state_20946__$1 = state_20946;
var statearr_20948_20994 = state_20946__$1;
(statearr_20948_20994[(2)] = inst_20895);

(statearr_20948_20994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (20))){
var inst_20905 = (state_20946[(8)]);
var state_20946__$1 = state_20946;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20946__$1,(23),out,inst_20905);
} else {
if((state_val_20947 === (1))){
var inst_20880 = (state_20946[(9)]);
var inst_20880__$1 = calc_state.call(null);
var inst_20881 = cljs.core.seq_QMARK_.call(null,inst_20880__$1);
var state_20946__$1 = (function (){var statearr_20949 = state_20946;
(statearr_20949[(9)] = inst_20880__$1);

return statearr_20949;
})();
if(inst_20881){
var statearr_20950_20995 = state_20946__$1;
(statearr_20950_20995[(1)] = (2));

} else {
var statearr_20951_20996 = state_20946__$1;
(statearr_20951_20996[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (24))){
var inst_20898 = (state_20946[(10)]);
var inst_20890 = inst_20898;
var state_20946__$1 = (function (){var statearr_20952 = state_20946;
(statearr_20952[(7)] = inst_20890);

return statearr_20952;
})();
var statearr_20953_20997 = state_20946__$1;
(statearr_20953_20997[(2)] = null);

(statearr_20953_20997[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (4))){
var inst_20880 = (state_20946[(9)]);
var inst_20886 = (state_20946[(2)]);
var inst_20887 = cljs.core.get.call(null,inst_20886,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20888 = cljs.core.get.call(null,inst_20886,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20889 = cljs.core.get.call(null,inst_20886,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_20890 = inst_20880;
var state_20946__$1 = (function (){var statearr_20954 = state_20946;
(statearr_20954[(11)] = inst_20887);

(statearr_20954[(12)] = inst_20889);

(statearr_20954[(7)] = inst_20890);

(statearr_20954[(13)] = inst_20888);

return statearr_20954;
})();
var statearr_20955_20998 = state_20946__$1;
(statearr_20955_20998[(2)] = null);

(statearr_20955_20998[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (15))){
var state_20946__$1 = state_20946;
var statearr_20956_20999 = state_20946__$1;
(statearr_20956_20999[(2)] = null);

(statearr_20956_20999[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (21))){
var inst_20898 = (state_20946[(10)]);
var inst_20890 = inst_20898;
var state_20946__$1 = (function (){var statearr_20957 = state_20946;
(statearr_20957[(7)] = inst_20890);

return statearr_20957;
})();
var statearr_20958_21000 = state_20946__$1;
(statearr_20958_21000[(2)] = null);

(statearr_20958_21000[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (13))){
var inst_20942 = (state_20946[(2)]);
var state_20946__$1 = state_20946;
var statearr_20959_21001 = state_20946__$1;
(statearr_20959_21001[(2)] = inst_20942);

(statearr_20959_21001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (22))){
var inst_20940 = (state_20946[(2)]);
var state_20946__$1 = state_20946;
var statearr_20960_21002 = state_20946__$1;
(statearr_20960_21002[(2)] = inst_20940);

(statearr_20960_21002[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (6))){
var inst_20944 = (state_20946[(2)]);
var state_20946__$1 = state_20946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20946__$1,inst_20944);
} else {
if((state_val_20947 === (25))){
var state_20946__$1 = state_20946;
var statearr_20961_21003 = state_20946__$1;
(statearr_20961_21003[(2)] = null);

(statearr_20961_21003[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (17))){
var inst_20920 = (state_20946[(14)]);
var state_20946__$1 = state_20946;
var statearr_20962_21004 = state_20946__$1;
(statearr_20962_21004[(2)] = inst_20920);

(statearr_20962_21004[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (3))){
var inst_20880 = (state_20946[(9)]);
var state_20946__$1 = state_20946;
var statearr_20963_21005 = state_20946__$1;
(statearr_20963_21005[(2)] = inst_20880);

(statearr_20963_21005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (12))){
var inst_20920 = (state_20946[(14)]);
var inst_20906 = (state_20946[(15)]);
var inst_20901 = (state_20946[(16)]);
var inst_20920__$1 = inst_20901.call(null,inst_20906);
var state_20946__$1 = (function (){var statearr_20964 = state_20946;
(statearr_20964[(14)] = inst_20920__$1);

return statearr_20964;
})();
if(cljs.core.truth_(inst_20920__$1)){
var statearr_20965_21006 = state_20946__$1;
(statearr_20965_21006[(1)] = (17));

} else {
var statearr_20966_21007 = state_20946__$1;
(statearr_20966_21007[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (2))){
var inst_20880 = (state_20946[(9)]);
var inst_20883 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20880);
var state_20946__$1 = state_20946;
var statearr_20967_21008 = state_20946__$1;
(statearr_20967_21008[(2)] = inst_20883);

(statearr_20967_21008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (23))){
var inst_20931 = (state_20946[(2)]);
var state_20946__$1 = state_20946;
if(cljs.core.truth_(inst_20931)){
var statearr_20968_21009 = state_20946__$1;
(statearr_20968_21009[(1)] = (24));

} else {
var statearr_20969_21010 = state_20946__$1;
(statearr_20969_21010[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (19))){
var inst_20928 = (state_20946[(2)]);
var state_20946__$1 = state_20946;
if(cljs.core.truth_(inst_20928)){
var statearr_20970_21011 = state_20946__$1;
(statearr_20970_21011[(1)] = (20));

} else {
var statearr_20971_21012 = state_20946__$1;
(statearr_20971_21012[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (11))){
var inst_20905 = (state_20946[(8)]);
var inst_20911 = (inst_20905 == null);
var state_20946__$1 = state_20946;
if(cljs.core.truth_(inst_20911)){
var statearr_20972_21013 = state_20946__$1;
(statearr_20972_21013[(1)] = (14));

} else {
var statearr_20973_21014 = state_20946__$1;
(statearr_20973_21014[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (9))){
var inst_20898 = (state_20946[(10)]);
var inst_20898__$1 = (state_20946[(2)]);
var inst_20899 = cljs.core.get.call(null,inst_20898__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_20900 = cljs.core.get.call(null,inst_20898__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_20901 = cljs.core.get.call(null,inst_20898__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_20946__$1 = (function (){var statearr_20974 = state_20946;
(statearr_20974[(17)] = inst_20900);

(statearr_20974[(16)] = inst_20901);

(statearr_20974[(10)] = inst_20898__$1);

return statearr_20974;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_20946__$1,(10),inst_20899);
} else {
if((state_val_20947 === (5))){
var inst_20890 = (state_20946[(7)]);
var inst_20893 = cljs.core.seq_QMARK_.call(null,inst_20890);
var state_20946__$1 = state_20946;
if(inst_20893){
var statearr_20975_21015 = state_20946__$1;
(statearr_20975_21015[(1)] = (7));

} else {
var statearr_20976_21016 = state_20946__$1;
(statearr_20976_21016[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (14))){
var inst_20906 = (state_20946[(15)]);
var inst_20913 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20906);
var state_20946__$1 = state_20946;
var statearr_20977_21017 = state_20946__$1;
(statearr_20977_21017[(2)] = inst_20913);

(statearr_20977_21017[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (26))){
var inst_20936 = (state_20946[(2)]);
var state_20946__$1 = state_20946;
var statearr_20978_21018 = state_20946__$1;
(statearr_20978_21018[(2)] = inst_20936);

(statearr_20978_21018[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (16))){
var inst_20916 = (state_20946[(2)]);
var inst_20917 = calc_state.call(null);
var inst_20890 = inst_20917;
var state_20946__$1 = (function (){var statearr_20979 = state_20946;
(statearr_20979[(7)] = inst_20890);

(statearr_20979[(18)] = inst_20916);

return statearr_20979;
})();
var statearr_20980_21019 = state_20946__$1;
(statearr_20980_21019[(2)] = null);

(statearr_20980_21019[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (10))){
var inst_20905 = (state_20946[(8)]);
var inst_20906 = (state_20946[(15)]);
var inst_20904 = (state_20946[(2)]);
var inst_20905__$1 = cljs.core.nth.call(null,inst_20904,(0),null);
var inst_20906__$1 = cljs.core.nth.call(null,inst_20904,(1),null);
var inst_20907 = (inst_20905__$1 == null);
var inst_20908 = cljs.core._EQ_.call(null,inst_20906__$1,change);
var inst_20909 = (inst_20907) || (inst_20908);
var state_20946__$1 = (function (){var statearr_20981 = state_20946;
(statearr_20981[(8)] = inst_20905__$1);

(statearr_20981[(15)] = inst_20906__$1);

return statearr_20981;
})();
if(cljs.core.truth_(inst_20909)){
var statearr_20982_21020 = state_20946__$1;
(statearr_20982_21020[(1)] = (11));

} else {
var statearr_20983_21021 = state_20946__$1;
(statearr_20983_21021[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (18))){
var inst_20900 = (state_20946[(17)]);
var inst_20906 = (state_20946[(15)]);
var inst_20901 = (state_20946[(16)]);
var inst_20923 = cljs.core.empty_QMARK_.call(null,inst_20901);
var inst_20924 = inst_20900.call(null,inst_20906);
var inst_20925 = cljs.core.not.call(null,inst_20924);
var inst_20926 = (inst_20923) && (inst_20925);
var state_20946__$1 = state_20946;
var statearr_20984_21022 = state_20946__$1;
(statearr_20984_21022[(2)] = inst_20926);

(statearr_20984_21022[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20947 === (8))){
var inst_20890 = (state_20946[(7)]);
var state_20946__$1 = state_20946;
var statearr_20985_21023 = state_20946__$1;
(statearr_20985_21023[(2)] = inst_20890);

(statearr_20985_21023[(1)] = (9));


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
});})(c__6550__auto___20993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6494__auto__,c__6550__auto___20993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_20989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20989[(0)] = state_machine__6495__auto__);

(statearr_20989[(1)] = (1));

return statearr_20989;
});
var state_machine__6495__auto____1 = (function (state_20946){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_20946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e20990){if((e20990 instanceof Object)){
var ex__6498__auto__ = e20990;
var statearr_20991_21024 = state_20946;
(statearr_20991_21024[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21025 = state_20946;
state_20946 = G__21025;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_20946){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_20946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___20993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__6552__auto__ = (function (){var statearr_20992 = f__6551__auto__.call(null);
(statearr_20992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___20993);

return statearr_20992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___20993,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj21027 = {};
return obj21027;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3760__auto__ = p;
if(and__3760__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3760__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4416__auto__ = (((p == null))?null:p);
return (function (){var or__3772__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3760__auto__ = p;
if(and__3760__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3760__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4416__auto__ = (((p == null))?null:p);
return (function (){var or__3772__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3760__auto__ = p;
if(and__3760__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3760__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4416__auto__ = (((p == null))?null:p);
return (function (){var or__3772__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3760__auto__ = p;
if(and__3760__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3760__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4416__auto__ = (((p == null))?null:p);
return (function (){var or__3772__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4416__auto__)]);
if(or__3772__auto__){
return or__3772__auto__;
} else {
var or__3772__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3772__auto____$1){
return or__3772__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3772__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3772__auto__)){
return or__3772__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3772__auto__,mults){
return (function (p1__21028_SHARP_){
if(cljs.core.truth_(p1__21028_SHARP_.call(null,topic))){
return p1__21028_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21028_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3772__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t21151 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21151 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta21152){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta21152 = meta21152;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21151.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t21151.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t21151.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t21151.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t21151.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t21151.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21151.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t21151.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21153){
var self__ = this;
var _21153__$1 = this;
return self__.meta21152;
});})(mults,ensure_mult))
;

cljs.core.async.t21151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21153,meta21152__$1){
var self__ = this;
var _21153__$1 = this;
return (new cljs.core.async.t21151(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta21152__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t21151.cljs$lang$type = true;

cljs.core.async.t21151.cljs$lang$ctorStr = "cljs.core.async/t21151";

cljs.core.async.t21151.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t21151");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t21151 = ((function (mults,ensure_mult){
return (function __GT_t21151(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21152){
return (new cljs.core.async.t21151(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta21152));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t21151(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__6550__auto___21273 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___21273,mults,ensure_mult,p){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___21273,mults,ensure_mult,p){
return (function (state_21225){
var state_val_21226 = (state_21225[(1)]);
if((state_val_21226 === (7))){
var inst_21221 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21227_21274 = state_21225__$1;
(statearr_21227_21274[(2)] = inst_21221);

(statearr_21227_21274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (20))){
var state_21225__$1 = state_21225;
var statearr_21228_21275 = state_21225__$1;
(statearr_21228_21275[(2)] = null);

(statearr_21228_21275[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (1))){
var state_21225__$1 = state_21225;
var statearr_21229_21276 = state_21225__$1;
(statearr_21229_21276[(2)] = null);

(statearr_21229_21276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (24))){
var inst_21204 = (state_21225[(7)]);
var inst_21213 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21204);
var state_21225__$1 = state_21225;
var statearr_21230_21277 = state_21225__$1;
(statearr_21230_21277[(2)] = inst_21213);

(statearr_21230_21277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (4))){
var inst_21156 = (state_21225[(8)]);
var inst_21156__$1 = (state_21225[(2)]);
var inst_21157 = (inst_21156__$1 == null);
var state_21225__$1 = (function (){var statearr_21231 = state_21225;
(statearr_21231[(8)] = inst_21156__$1);

return statearr_21231;
})();
if(cljs.core.truth_(inst_21157)){
var statearr_21232_21278 = state_21225__$1;
(statearr_21232_21278[(1)] = (5));

} else {
var statearr_21233_21279 = state_21225__$1;
(statearr_21233_21279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (15))){
var inst_21198 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21234_21280 = state_21225__$1;
(statearr_21234_21280[(2)] = inst_21198);

(statearr_21234_21280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (21))){
var inst_21218 = (state_21225[(2)]);
var state_21225__$1 = (function (){var statearr_21235 = state_21225;
(statearr_21235[(9)] = inst_21218);

return statearr_21235;
})();
var statearr_21236_21281 = state_21225__$1;
(statearr_21236_21281[(2)] = null);

(statearr_21236_21281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (13))){
var inst_21180 = (state_21225[(10)]);
var inst_21182 = cljs.core.chunked_seq_QMARK_.call(null,inst_21180);
var state_21225__$1 = state_21225;
if(inst_21182){
var statearr_21237_21282 = state_21225__$1;
(statearr_21237_21282[(1)] = (16));

} else {
var statearr_21238_21283 = state_21225__$1;
(statearr_21238_21283[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (22))){
var inst_21210 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
if(cljs.core.truth_(inst_21210)){
var statearr_21239_21284 = state_21225__$1;
(statearr_21239_21284[(1)] = (23));

} else {
var statearr_21240_21285 = state_21225__$1;
(statearr_21240_21285[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (6))){
var inst_21156 = (state_21225[(8)]);
var inst_21206 = (state_21225[(11)]);
var inst_21204 = (state_21225[(7)]);
var inst_21204__$1 = topic_fn.call(null,inst_21156);
var inst_21205 = cljs.core.deref.call(null,mults);
var inst_21206__$1 = cljs.core.get.call(null,inst_21205,inst_21204__$1);
var state_21225__$1 = (function (){var statearr_21241 = state_21225;
(statearr_21241[(11)] = inst_21206__$1);

(statearr_21241[(7)] = inst_21204__$1);

return statearr_21241;
})();
if(cljs.core.truth_(inst_21206__$1)){
var statearr_21242_21286 = state_21225__$1;
(statearr_21242_21286[(1)] = (19));

} else {
var statearr_21243_21287 = state_21225__$1;
(statearr_21243_21287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (25))){
var inst_21215 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21244_21288 = state_21225__$1;
(statearr_21244_21288[(2)] = inst_21215);

(statearr_21244_21288[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (17))){
var inst_21180 = (state_21225[(10)]);
var inst_21189 = cljs.core.first.call(null,inst_21180);
var inst_21190 = cljs.core.async.muxch_STAR_.call(null,inst_21189);
var inst_21191 = cljs.core.async.close_BANG_.call(null,inst_21190);
var inst_21192 = cljs.core.next.call(null,inst_21180);
var inst_21166 = inst_21192;
var inst_21167 = null;
var inst_21168 = (0);
var inst_21169 = (0);
var state_21225__$1 = (function (){var statearr_21245 = state_21225;
(statearr_21245[(12)] = inst_21167);

(statearr_21245[(13)] = inst_21166);

(statearr_21245[(14)] = inst_21191);

(statearr_21245[(15)] = inst_21168);

(statearr_21245[(16)] = inst_21169);

return statearr_21245;
})();
var statearr_21246_21289 = state_21225__$1;
(statearr_21246_21289[(2)] = null);

(statearr_21246_21289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (3))){
var inst_21223 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21225__$1,inst_21223);
} else {
if((state_val_21226 === (12))){
var inst_21200 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21247_21290 = state_21225__$1;
(statearr_21247_21290[(2)] = inst_21200);

(statearr_21247_21290[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (2))){
var state_21225__$1 = state_21225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21225__$1,(4),ch);
} else {
if((state_val_21226 === (23))){
var state_21225__$1 = state_21225;
var statearr_21248_21291 = state_21225__$1;
(statearr_21248_21291[(2)] = null);

(statearr_21248_21291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (19))){
var inst_21156 = (state_21225[(8)]);
var inst_21206 = (state_21225[(11)]);
var inst_21208 = cljs.core.async.muxch_STAR_.call(null,inst_21206);
var state_21225__$1 = state_21225;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21225__$1,(22),inst_21208,inst_21156);
} else {
if((state_val_21226 === (11))){
var inst_21166 = (state_21225[(13)]);
var inst_21180 = (state_21225[(10)]);
var inst_21180__$1 = cljs.core.seq.call(null,inst_21166);
var state_21225__$1 = (function (){var statearr_21249 = state_21225;
(statearr_21249[(10)] = inst_21180__$1);

return statearr_21249;
})();
if(inst_21180__$1){
var statearr_21250_21292 = state_21225__$1;
(statearr_21250_21292[(1)] = (13));

} else {
var statearr_21251_21293 = state_21225__$1;
(statearr_21251_21293[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (9))){
var inst_21202 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21252_21294 = state_21225__$1;
(statearr_21252_21294[(2)] = inst_21202);

(statearr_21252_21294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (5))){
var inst_21163 = cljs.core.deref.call(null,mults);
var inst_21164 = cljs.core.vals.call(null,inst_21163);
var inst_21165 = cljs.core.seq.call(null,inst_21164);
var inst_21166 = inst_21165;
var inst_21167 = null;
var inst_21168 = (0);
var inst_21169 = (0);
var state_21225__$1 = (function (){var statearr_21253 = state_21225;
(statearr_21253[(12)] = inst_21167);

(statearr_21253[(13)] = inst_21166);

(statearr_21253[(15)] = inst_21168);

(statearr_21253[(16)] = inst_21169);

return statearr_21253;
})();
var statearr_21254_21295 = state_21225__$1;
(statearr_21254_21295[(2)] = null);

(statearr_21254_21295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (14))){
var state_21225__$1 = state_21225;
var statearr_21258_21296 = state_21225__$1;
(statearr_21258_21296[(2)] = null);

(statearr_21258_21296[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (16))){
var inst_21180 = (state_21225[(10)]);
var inst_21184 = cljs.core.chunk_first.call(null,inst_21180);
var inst_21185 = cljs.core.chunk_rest.call(null,inst_21180);
var inst_21186 = cljs.core.count.call(null,inst_21184);
var inst_21166 = inst_21185;
var inst_21167 = inst_21184;
var inst_21168 = inst_21186;
var inst_21169 = (0);
var state_21225__$1 = (function (){var statearr_21259 = state_21225;
(statearr_21259[(12)] = inst_21167);

(statearr_21259[(13)] = inst_21166);

(statearr_21259[(15)] = inst_21168);

(statearr_21259[(16)] = inst_21169);

return statearr_21259;
})();
var statearr_21260_21297 = state_21225__$1;
(statearr_21260_21297[(2)] = null);

(statearr_21260_21297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (10))){
var inst_21167 = (state_21225[(12)]);
var inst_21166 = (state_21225[(13)]);
var inst_21168 = (state_21225[(15)]);
var inst_21169 = (state_21225[(16)]);
var inst_21174 = cljs.core._nth.call(null,inst_21167,inst_21169);
var inst_21175 = cljs.core.async.muxch_STAR_.call(null,inst_21174);
var inst_21176 = cljs.core.async.close_BANG_.call(null,inst_21175);
var inst_21177 = (inst_21169 + (1));
var tmp21255 = inst_21167;
var tmp21256 = inst_21166;
var tmp21257 = inst_21168;
var inst_21166__$1 = tmp21256;
var inst_21167__$1 = tmp21255;
var inst_21168__$1 = tmp21257;
var inst_21169__$1 = inst_21177;
var state_21225__$1 = (function (){var statearr_21261 = state_21225;
(statearr_21261[(17)] = inst_21176);

(statearr_21261[(12)] = inst_21167__$1);

(statearr_21261[(13)] = inst_21166__$1);

(statearr_21261[(15)] = inst_21168__$1);

(statearr_21261[(16)] = inst_21169__$1);

return statearr_21261;
})();
var statearr_21262_21298 = state_21225__$1;
(statearr_21262_21298[(2)] = null);

(statearr_21262_21298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (18))){
var inst_21195 = (state_21225[(2)]);
var state_21225__$1 = state_21225;
var statearr_21263_21299 = state_21225__$1;
(statearr_21263_21299[(2)] = inst_21195);

(statearr_21263_21299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21226 === (8))){
var inst_21168 = (state_21225[(15)]);
var inst_21169 = (state_21225[(16)]);
var inst_21171 = (inst_21169 < inst_21168);
var inst_21172 = inst_21171;
var state_21225__$1 = state_21225;
if(cljs.core.truth_(inst_21172)){
var statearr_21264_21300 = state_21225__$1;
(statearr_21264_21300[(1)] = (10));

} else {
var statearr_21265_21301 = state_21225__$1;
(statearr_21265_21301[(1)] = (11));

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
});})(c__6550__auto___21273,mults,ensure_mult,p))
;
return ((function (switch__6494__auto__,c__6550__auto___21273,mults,ensure_mult,p){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_21269 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21269[(0)] = state_machine__6495__auto__);

(statearr_21269[(1)] = (1));

return statearr_21269;
});
var state_machine__6495__auto____1 = (function (state_21225){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_21225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e21270){if((e21270 instanceof Object)){
var ex__6498__auto__ = e21270;
var statearr_21271_21302 = state_21225;
(statearr_21271_21302[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21303 = state_21225;
state_21225 = G__21303;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_21225){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_21225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___21273,mults,ensure_mult,p))
})();
var state__6552__auto__ = (function (){var statearr_21272 = f__6551__auto__.call(null);
(statearr_21272[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___21273);

return statearr_21272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___21273,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__6550__auto___21440 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___21440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___21440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21410){
var state_val_21411 = (state_21410[(1)]);
if((state_val_21411 === (7))){
var state_21410__$1 = state_21410;
var statearr_21412_21441 = state_21410__$1;
(statearr_21412_21441[(2)] = null);

(statearr_21412_21441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (1))){
var state_21410__$1 = state_21410;
var statearr_21413_21442 = state_21410__$1;
(statearr_21413_21442[(2)] = null);

(statearr_21413_21442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (4))){
var inst_21374 = (state_21410[(7)]);
var inst_21376 = (inst_21374 < cnt);
var state_21410__$1 = state_21410;
if(cljs.core.truth_(inst_21376)){
var statearr_21414_21443 = state_21410__$1;
(statearr_21414_21443[(1)] = (6));

} else {
var statearr_21415_21444 = state_21410__$1;
(statearr_21415_21444[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (15))){
var inst_21406 = (state_21410[(2)]);
var state_21410__$1 = state_21410;
var statearr_21416_21445 = state_21410__$1;
(statearr_21416_21445[(2)] = inst_21406);

(statearr_21416_21445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (13))){
var inst_21399 = cljs.core.async.close_BANG_.call(null,out);
var state_21410__$1 = state_21410;
var statearr_21417_21446 = state_21410__$1;
(statearr_21417_21446[(2)] = inst_21399);

(statearr_21417_21446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (6))){
var state_21410__$1 = state_21410;
var statearr_21418_21447 = state_21410__$1;
(statearr_21418_21447[(2)] = null);

(statearr_21418_21447[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (3))){
var inst_21408 = (state_21410[(2)]);
var state_21410__$1 = state_21410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21410__$1,inst_21408);
} else {
if((state_val_21411 === (12))){
var inst_21396 = (state_21410[(8)]);
var inst_21396__$1 = (state_21410[(2)]);
var inst_21397 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21396__$1);
var state_21410__$1 = (function (){var statearr_21419 = state_21410;
(statearr_21419[(8)] = inst_21396__$1);

return statearr_21419;
})();
if(cljs.core.truth_(inst_21397)){
var statearr_21420_21448 = state_21410__$1;
(statearr_21420_21448[(1)] = (13));

} else {
var statearr_21421_21449 = state_21410__$1;
(statearr_21421_21449[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (2))){
var inst_21373 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21374 = (0);
var state_21410__$1 = (function (){var statearr_21422 = state_21410;
(statearr_21422[(9)] = inst_21373);

(statearr_21422[(7)] = inst_21374);

return statearr_21422;
})();
var statearr_21423_21450 = state_21410__$1;
(statearr_21423_21450[(2)] = null);

(statearr_21423_21450[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (11))){
var inst_21374 = (state_21410[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21410,(10),Object,null,(9));
var inst_21383 = chs__$1.call(null,inst_21374);
var inst_21384 = done.call(null,inst_21374);
var inst_21385 = cljs.core.async.take_BANG_.call(null,inst_21383,inst_21384);
var state_21410__$1 = state_21410;
var statearr_21424_21451 = state_21410__$1;
(statearr_21424_21451[(2)] = inst_21385);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21410__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (9))){
var inst_21374 = (state_21410[(7)]);
var inst_21387 = (state_21410[(2)]);
var inst_21388 = (inst_21374 + (1));
var inst_21374__$1 = inst_21388;
var state_21410__$1 = (function (){var statearr_21425 = state_21410;
(statearr_21425[(7)] = inst_21374__$1);

(statearr_21425[(10)] = inst_21387);

return statearr_21425;
})();
var statearr_21426_21452 = state_21410__$1;
(statearr_21426_21452[(2)] = null);

(statearr_21426_21452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (5))){
var inst_21394 = (state_21410[(2)]);
var state_21410__$1 = (function (){var statearr_21427 = state_21410;
(statearr_21427[(11)] = inst_21394);

return statearr_21427;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21410__$1,(12),dchan);
} else {
if((state_val_21411 === (14))){
var inst_21396 = (state_21410[(8)]);
var inst_21401 = cljs.core.apply.call(null,f,inst_21396);
var state_21410__$1 = state_21410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21410__$1,(16),out,inst_21401);
} else {
if((state_val_21411 === (16))){
var inst_21403 = (state_21410[(2)]);
var state_21410__$1 = (function (){var statearr_21428 = state_21410;
(statearr_21428[(12)] = inst_21403);

return statearr_21428;
})();
var statearr_21429_21453 = state_21410__$1;
(statearr_21429_21453[(2)] = null);

(statearr_21429_21453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (10))){
var inst_21378 = (state_21410[(2)]);
var inst_21379 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21410__$1 = (function (){var statearr_21430 = state_21410;
(statearr_21430[(13)] = inst_21378);

return statearr_21430;
})();
var statearr_21431_21454 = state_21410__$1;
(statearr_21431_21454[(2)] = inst_21379);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21410__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21411 === (8))){
var inst_21392 = (state_21410[(2)]);
var state_21410__$1 = state_21410;
var statearr_21432_21455 = state_21410__$1;
(statearr_21432_21455[(2)] = inst_21392);

(statearr_21432_21455[(1)] = (5));


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
});})(c__6550__auto___21440,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6494__auto__,c__6550__auto___21440,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_21436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21436[(0)] = state_machine__6495__auto__);

(statearr_21436[(1)] = (1));

return statearr_21436;
});
var state_machine__6495__auto____1 = (function (state_21410){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_21410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e21437){if((e21437 instanceof Object)){
var ex__6498__auto__ = e21437;
var statearr_21438_21456 = state_21410;
(statearr_21438_21456[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21457 = state_21410;
state_21410 = G__21457;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_21410){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_21410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___21440,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__6552__auto__ = (function (){var statearr_21439 = f__6551__auto__.call(null);
(statearr_21439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___21440);

return statearr_21439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___21440,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6550__auto___21565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___21565,out){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___21565,out){
return (function (state_21541){
var state_val_21542 = (state_21541[(1)]);
if((state_val_21542 === (7))){
var inst_21520 = (state_21541[(7)]);
var inst_21521 = (state_21541[(8)]);
var inst_21520__$1 = (state_21541[(2)]);
var inst_21521__$1 = cljs.core.nth.call(null,inst_21520__$1,(0),null);
var inst_21522 = cljs.core.nth.call(null,inst_21520__$1,(1),null);
var inst_21523 = (inst_21521__$1 == null);
var state_21541__$1 = (function (){var statearr_21543 = state_21541;
(statearr_21543[(7)] = inst_21520__$1);

(statearr_21543[(8)] = inst_21521__$1);

(statearr_21543[(9)] = inst_21522);

return statearr_21543;
})();
if(cljs.core.truth_(inst_21523)){
var statearr_21544_21566 = state_21541__$1;
(statearr_21544_21566[(1)] = (8));

} else {
var statearr_21545_21567 = state_21541__$1;
(statearr_21545_21567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (1))){
var inst_21512 = cljs.core.vec.call(null,chs);
var inst_21513 = inst_21512;
var state_21541__$1 = (function (){var statearr_21546 = state_21541;
(statearr_21546[(10)] = inst_21513);

return statearr_21546;
})();
var statearr_21547_21568 = state_21541__$1;
(statearr_21547_21568[(2)] = null);

(statearr_21547_21568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (4))){
var inst_21513 = (state_21541[(10)]);
var state_21541__$1 = state_21541;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21541__$1,(7),inst_21513);
} else {
if((state_val_21542 === (6))){
var inst_21537 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
var statearr_21548_21569 = state_21541__$1;
(statearr_21548_21569[(2)] = inst_21537);

(statearr_21548_21569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (3))){
var inst_21539 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21541__$1,inst_21539);
} else {
if((state_val_21542 === (2))){
var inst_21513 = (state_21541[(10)]);
var inst_21515 = cljs.core.count.call(null,inst_21513);
var inst_21516 = (inst_21515 > (0));
var state_21541__$1 = state_21541;
if(cljs.core.truth_(inst_21516)){
var statearr_21550_21570 = state_21541__$1;
(statearr_21550_21570[(1)] = (4));

} else {
var statearr_21551_21571 = state_21541__$1;
(statearr_21551_21571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (11))){
var inst_21513 = (state_21541[(10)]);
var inst_21530 = (state_21541[(2)]);
var tmp21549 = inst_21513;
var inst_21513__$1 = tmp21549;
var state_21541__$1 = (function (){var statearr_21552 = state_21541;
(statearr_21552[(11)] = inst_21530);

(statearr_21552[(10)] = inst_21513__$1);

return statearr_21552;
})();
var statearr_21553_21572 = state_21541__$1;
(statearr_21553_21572[(2)] = null);

(statearr_21553_21572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (9))){
var inst_21521 = (state_21541[(8)]);
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21541__$1,(11),out,inst_21521);
} else {
if((state_val_21542 === (5))){
var inst_21535 = cljs.core.async.close_BANG_.call(null,out);
var state_21541__$1 = state_21541;
var statearr_21554_21573 = state_21541__$1;
(statearr_21554_21573[(2)] = inst_21535);

(statearr_21554_21573[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (10))){
var inst_21533 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
var statearr_21555_21574 = state_21541__$1;
(statearr_21555_21574[(2)] = inst_21533);

(statearr_21555_21574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (8))){
var inst_21520 = (state_21541[(7)]);
var inst_21521 = (state_21541[(8)]);
var inst_21522 = (state_21541[(9)]);
var inst_21513 = (state_21541[(10)]);
var inst_21525 = (function (){var c = inst_21522;
var v = inst_21521;
var vec__21518 = inst_21520;
var cs = inst_21513;
return ((function (c,v,vec__21518,cs,inst_21520,inst_21521,inst_21522,inst_21513,state_val_21542,c__6550__auto___21565,out){
return (function (p1__21458_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21458_SHARP_);
});
;})(c,v,vec__21518,cs,inst_21520,inst_21521,inst_21522,inst_21513,state_val_21542,c__6550__auto___21565,out))
})();
var inst_21526 = cljs.core.filterv.call(null,inst_21525,inst_21513);
var inst_21513__$1 = inst_21526;
var state_21541__$1 = (function (){var statearr_21556 = state_21541;
(statearr_21556[(10)] = inst_21513__$1);

return statearr_21556;
})();
var statearr_21557_21575 = state_21541__$1;
(statearr_21557_21575[(2)] = null);

(statearr_21557_21575[(1)] = (2));


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
});})(c__6550__auto___21565,out))
;
return ((function (switch__6494__auto__,c__6550__auto___21565,out){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_21561 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21561[(0)] = state_machine__6495__auto__);

(statearr_21561[(1)] = (1));

return statearr_21561;
});
var state_machine__6495__auto____1 = (function (state_21541){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_21541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e21562){if((e21562 instanceof Object)){
var ex__6498__auto__ = e21562;
var statearr_21563_21576 = state_21541;
(statearr_21563_21576[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21577 = state_21541;
state_21541 = G__21577;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_21541){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_21541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___21565,out))
})();
var state__6552__auto__ = (function (){var statearr_21564 = f__6551__auto__.call(null);
(statearr_21564[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___21565);

return statearr_21564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___21565,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6550__auto___21670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___21670,out){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___21670,out){
return (function (state_21647){
var state_val_21648 = (state_21647[(1)]);
if((state_val_21648 === (7))){
var inst_21629 = (state_21647[(7)]);
var inst_21629__$1 = (state_21647[(2)]);
var inst_21630 = (inst_21629__$1 == null);
var inst_21631 = cljs.core.not.call(null,inst_21630);
var state_21647__$1 = (function (){var statearr_21649 = state_21647;
(statearr_21649[(7)] = inst_21629__$1);

return statearr_21649;
})();
if(inst_21631){
var statearr_21650_21671 = state_21647__$1;
(statearr_21650_21671[(1)] = (8));

} else {
var statearr_21651_21672 = state_21647__$1;
(statearr_21651_21672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (1))){
var inst_21624 = (0);
var state_21647__$1 = (function (){var statearr_21652 = state_21647;
(statearr_21652[(8)] = inst_21624);

return statearr_21652;
})();
var statearr_21653_21673 = state_21647__$1;
(statearr_21653_21673[(2)] = null);

(statearr_21653_21673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (4))){
var state_21647__$1 = state_21647;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21647__$1,(7),ch);
} else {
if((state_val_21648 === (6))){
var inst_21642 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
var statearr_21654_21674 = state_21647__$1;
(statearr_21654_21674[(2)] = inst_21642);

(statearr_21654_21674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (3))){
var inst_21644 = (state_21647[(2)]);
var inst_21645 = cljs.core.async.close_BANG_.call(null,out);
var state_21647__$1 = (function (){var statearr_21655 = state_21647;
(statearr_21655[(9)] = inst_21644);

return statearr_21655;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21647__$1,inst_21645);
} else {
if((state_val_21648 === (2))){
var inst_21624 = (state_21647[(8)]);
var inst_21626 = (inst_21624 < n);
var state_21647__$1 = state_21647;
if(cljs.core.truth_(inst_21626)){
var statearr_21656_21675 = state_21647__$1;
(statearr_21656_21675[(1)] = (4));

} else {
var statearr_21657_21676 = state_21647__$1;
(statearr_21657_21676[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (11))){
var inst_21624 = (state_21647[(8)]);
var inst_21634 = (state_21647[(2)]);
var inst_21635 = (inst_21624 + (1));
var inst_21624__$1 = inst_21635;
var state_21647__$1 = (function (){var statearr_21658 = state_21647;
(statearr_21658[(10)] = inst_21634);

(statearr_21658[(8)] = inst_21624__$1);

return statearr_21658;
})();
var statearr_21659_21677 = state_21647__$1;
(statearr_21659_21677[(2)] = null);

(statearr_21659_21677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (9))){
var state_21647__$1 = state_21647;
var statearr_21660_21678 = state_21647__$1;
(statearr_21660_21678[(2)] = null);

(statearr_21660_21678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (5))){
var state_21647__$1 = state_21647;
var statearr_21661_21679 = state_21647__$1;
(statearr_21661_21679[(2)] = null);

(statearr_21661_21679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (10))){
var inst_21639 = (state_21647[(2)]);
var state_21647__$1 = state_21647;
var statearr_21662_21680 = state_21647__$1;
(statearr_21662_21680[(2)] = inst_21639);

(statearr_21662_21680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21648 === (8))){
var inst_21629 = (state_21647[(7)]);
var state_21647__$1 = state_21647;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21647__$1,(11),out,inst_21629);
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
});})(c__6550__auto___21670,out))
;
return ((function (switch__6494__auto__,c__6550__auto___21670,out){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_21666 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21666[(0)] = state_machine__6495__auto__);

(statearr_21666[(1)] = (1));

return statearr_21666;
});
var state_machine__6495__auto____1 = (function (state_21647){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_21647);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e21667){if((e21667 instanceof Object)){
var ex__6498__auto__ = e21667;
var statearr_21668_21681 = state_21647;
(statearr_21668_21681[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21647);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21682 = state_21647;
state_21647 = G__21682;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_21647){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_21647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___21670,out))
})();
var state__6552__auto__ = (function (){var statearr_21669 = f__6551__auto__.call(null);
(statearr_21669[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___21670);

return statearr_21669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___21670,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t21690 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21690 = (function (ch,f,map_LT_,meta21691){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta21691 = meta21691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21690.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21690.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t21690.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21690.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t21693 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21693 = (function (fn1,_,meta21691,map_LT_,f,ch,meta21694){
this.fn1 = fn1;
this._ = _;
this.meta21691 = meta21691;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21694 = meta21694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21693.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t21693.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t21693.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21683_SHARP_){
return f1.call(null,(((p1__21683_SHARP_ == null))?null:self__.f.call(null,p1__21683_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t21693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21695){
var self__ = this;
var _21695__$1 = this;
return self__.meta21694;
});})(___$1))
;

cljs.core.async.t21693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21695,meta21694__$1){
var self__ = this;
var _21695__$1 = this;
return (new cljs.core.async.t21693(self__.fn1,self__._,self__.meta21691,self__.map_LT_,self__.f,self__.ch,meta21694__$1));
});})(___$1))
;

cljs.core.async.t21693.cljs$lang$type = true;

cljs.core.async.t21693.cljs$lang$ctorStr = "cljs.core.async/t21693";

cljs.core.async.t21693.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t21693");
});})(___$1))
;

cljs.core.async.__GT_t21693 = ((function (___$1){
return (function __GT_t21693(fn1__$1,___$2,meta21691__$1,map_LT___$1,f__$1,ch__$1,meta21694){
return (new cljs.core.async.t21693(fn1__$1,___$2,meta21691__$1,map_LT___$1,f__$1,ch__$1,meta21694));
});})(___$1))
;

}

return (new cljs.core.async.t21693(fn1,___$1,self__.meta21691,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3760__auto__ = ret;
if(cljs.core.truth_(and__3760__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3760__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t21690.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21690.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21690.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21692){
var self__ = this;
var _21692__$1 = this;
return self__.meta21691;
});

cljs.core.async.t21690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21692,meta21691__$1){
var self__ = this;
var _21692__$1 = this;
return (new cljs.core.async.t21690(self__.ch,self__.f,self__.map_LT_,meta21691__$1));
});

cljs.core.async.t21690.cljs$lang$type = true;

cljs.core.async.t21690.cljs$lang$ctorStr = "cljs.core.async/t21690";

cljs.core.async.t21690.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t21690");
});

cljs.core.async.__GT_t21690 = (function __GT_t21690(ch__$1,f__$1,map_LT___$1,meta21691){
return (new cljs.core.async.t21690(ch__$1,f__$1,map_LT___$1,meta21691));
});

}

return (new cljs.core.async.t21690(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t21699 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21699 = (function (ch,f,map_GT_,meta21700){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta21700 = meta21700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21699.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21699.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t21699.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21699.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21699.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21699.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21701){
var self__ = this;
var _21701__$1 = this;
return self__.meta21700;
});

cljs.core.async.t21699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21701,meta21700__$1){
var self__ = this;
var _21701__$1 = this;
return (new cljs.core.async.t21699(self__.ch,self__.f,self__.map_GT_,meta21700__$1));
});

cljs.core.async.t21699.cljs$lang$type = true;

cljs.core.async.t21699.cljs$lang$ctorStr = "cljs.core.async/t21699";

cljs.core.async.t21699.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t21699");
});

cljs.core.async.__GT_t21699 = (function __GT_t21699(ch__$1,f__$1,map_GT___$1,meta21700){
return (new cljs.core.async.t21699(ch__$1,f__$1,map_GT___$1,meta21700));
});

}

return (new cljs.core.async.t21699(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t21705 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21705 = (function (ch,p,filter_GT_,meta21706){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta21706 = meta21706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21705.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t21705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t21705.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t21705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t21705.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t21705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t21705.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t21705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21707){
var self__ = this;
var _21707__$1 = this;
return self__.meta21706;
});

cljs.core.async.t21705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21707,meta21706__$1){
var self__ = this;
var _21707__$1 = this;
return (new cljs.core.async.t21705(self__.ch,self__.p,self__.filter_GT_,meta21706__$1));
});

cljs.core.async.t21705.cljs$lang$type = true;

cljs.core.async.t21705.cljs$lang$ctorStr = "cljs.core.async/t21705";

cljs.core.async.t21705.cljs$lang$ctorPrWriter = (function (this__4359__auto__,writer__4360__auto__,opt__4361__auto__){
return cljs.core._write.call(null,writer__4360__auto__,"cljs.core.async/t21705");
});

cljs.core.async.__GT_t21705 = (function __GT_t21705(ch__$1,p__$1,filter_GT___$1,meta21706){
return (new cljs.core.async.t21705(ch__$1,p__$1,filter_GT___$1,meta21706));
});

}

return (new cljs.core.async.t21705(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6550__auto___21790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___21790,out){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___21790,out){
return (function (state_21769){
var state_val_21770 = (state_21769[(1)]);
if((state_val_21770 === (7))){
var inst_21765 = (state_21769[(2)]);
var state_21769__$1 = state_21769;
var statearr_21771_21791 = state_21769__$1;
(statearr_21771_21791[(2)] = inst_21765);

(statearr_21771_21791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (1))){
var state_21769__$1 = state_21769;
var statearr_21772_21792 = state_21769__$1;
(statearr_21772_21792[(2)] = null);

(statearr_21772_21792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (4))){
var inst_21751 = (state_21769[(7)]);
var inst_21751__$1 = (state_21769[(2)]);
var inst_21752 = (inst_21751__$1 == null);
var state_21769__$1 = (function (){var statearr_21773 = state_21769;
(statearr_21773[(7)] = inst_21751__$1);

return statearr_21773;
})();
if(cljs.core.truth_(inst_21752)){
var statearr_21774_21793 = state_21769__$1;
(statearr_21774_21793[(1)] = (5));

} else {
var statearr_21775_21794 = state_21769__$1;
(statearr_21775_21794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (6))){
var inst_21751 = (state_21769[(7)]);
var inst_21756 = p.call(null,inst_21751);
var state_21769__$1 = state_21769;
if(cljs.core.truth_(inst_21756)){
var statearr_21776_21795 = state_21769__$1;
(statearr_21776_21795[(1)] = (8));

} else {
var statearr_21777_21796 = state_21769__$1;
(statearr_21777_21796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (3))){
var inst_21767 = (state_21769[(2)]);
var state_21769__$1 = state_21769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21769__$1,inst_21767);
} else {
if((state_val_21770 === (2))){
var state_21769__$1 = state_21769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21769__$1,(4),ch);
} else {
if((state_val_21770 === (11))){
var inst_21759 = (state_21769[(2)]);
var state_21769__$1 = state_21769;
var statearr_21778_21797 = state_21769__$1;
(statearr_21778_21797[(2)] = inst_21759);

(statearr_21778_21797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (9))){
var state_21769__$1 = state_21769;
var statearr_21779_21798 = state_21769__$1;
(statearr_21779_21798[(2)] = null);

(statearr_21779_21798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (5))){
var inst_21754 = cljs.core.async.close_BANG_.call(null,out);
var state_21769__$1 = state_21769;
var statearr_21780_21799 = state_21769__$1;
(statearr_21780_21799[(2)] = inst_21754);

(statearr_21780_21799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (10))){
var inst_21762 = (state_21769[(2)]);
var state_21769__$1 = (function (){var statearr_21781 = state_21769;
(statearr_21781[(8)] = inst_21762);

return statearr_21781;
})();
var statearr_21782_21800 = state_21769__$1;
(statearr_21782_21800[(2)] = null);

(statearr_21782_21800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (8))){
var inst_21751 = (state_21769[(7)]);
var state_21769__$1 = state_21769;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21769__$1,(11),out,inst_21751);
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
});})(c__6550__auto___21790,out))
;
return ((function (switch__6494__auto__,c__6550__auto___21790,out){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_21786 = [null,null,null,null,null,null,null,null,null];
(statearr_21786[(0)] = state_machine__6495__auto__);

(statearr_21786[(1)] = (1));

return statearr_21786;
});
var state_machine__6495__auto____1 = (function (state_21769){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_21769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e21787){if((e21787 instanceof Object)){
var ex__6498__auto__ = e21787;
var statearr_21788_21801 = state_21769;
(statearr_21788_21801[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21802 = state_21769;
state_21769 = G__21802;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_21769){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_21769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___21790,out))
})();
var state__6552__auto__ = (function (){var statearr_21789 = f__6551__auto__.call(null);
(statearr_21789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___21790);

return statearr_21789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___21790,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__6550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto__){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto__){
return (function (state_21968){
var state_val_21969 = (state_21968[(1)]);
if((state_val_21969 === (7))){
var inst_21964 = (state_21968[(2)]);
var state_21968__$1 = state_21968;
var statearr_21970_22011 = state_21968__$1;
(statearr_21970_22011[(2)] = inst_21964);

(statearr_21970_22011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (20))){
var inst_21934 = (state_21968[(7)]);
var inst_21945 = (state_21968[(2)]);
var inst_21946 = cljs.core.next.call(null,inst_21934);
var inst_21920 = inst_21946;
var inst_21921 = null;
var inst_21922 = (0);
var inst_21923 = (0);
var state_21968__$1 = (function (){var statearr_21971 = state_21968;
(statearr_21971[(8)] = inst_21920);

(statearr_21971[(9)] = inst_21945);

(statearr_21971[(10)] = inst_21923);

(statearr_21971[(11)] = inst_21921);

(statearr_21971[(12)] = inst_21922);

return statearr_21971;
})();
var statearr_21972_22012 = state_21968__$1;
(statearr_21972_22012[(2)] = null);

(statearr_21972_22012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (1))){
var state_21968__$1 = state_21968;
var statearr_21973_22013 = state_21968__$1;
(statearr_21973_22013[(2)] = null);

(statearr_21973_22013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (4))){
var inst_21909 = (state_21968[(13)]);
var inst_21909__$1 = (state_21968[(2)]);
var inst_21910 = (inst_21909__$1 == null);
var state_21968__$1 = (function (){var statearr_21974 = state_21968;
(statearr_21974[(13)] = inst_21909__$1);

return statearr_21974;
})();
if(cljs.core.truth_(inst_21910)){
var statearr_21975_22014 = state_21968__$1;
(statearr_21975_22014[(1)] = (5));

} else {
var statearr_21976_22015 = state_21968__$1;
(statearr_21976_22015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (15))){
var state_21968__$1 = state_21968;
var statearr_21980_22016 = state_21968__$1;
(statearr_21980_22016[(2)] = null);

(statearr_21980_22016[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (21))){
var state_21968__$1 = state_21968;
var statearr_21981_22017 = state_21968__$1;
(statearr_21981_22017[(2)] = null);

(statearr_21981_22017[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (13))){
var inst_21920 = (state_21968[(8)]);
var inst_21923 = (state_21968[(10)]);
var inst_21921 = (state_21968[(11)]);
var inst_21922 = (state_21968[(12)]);
var inst_21930 = (state_21968[(2)]);
var inst_21931 = (inst_21923 + (1));
var tmp21977 = inst_21920;
var tmp21978 = inst_21921;
var tmp21979 = inst_21922;
var inst_21920__$1 = tmp21977;
var inst_21921__$1 = tmp21978;
var inst_21922__$1 = tmp21979;
var inst_21923__$1 = inst_21931;
var state_21968__$1 = (function (){var statearr_21982 = state_21968;
(statearr_21982[(8)] = inst_21920__$1);

(statearr_21982[(10)] = inst_21923__$1);

(statearr_21982[(11)] = inst_21921__$1);

(statearr_21982[(14)] = inst_21930);

(statearr_21982[(12)] = inst_21922__$1);

return statearr_21982;
})();
var statearr_21983_22018 = state_21968__$1;
(statearr_21983_22018[(2)] = null);

(statearr_21983_22018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (22))){
var state_21968__$1 = state_21968;
var statearr_21984_22019 = state_21968__$1;
(statearr_21984_22019[(2)] = null);

(statearr_21984_22019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (6))){
var inst_21909 = (state_21968[(13)]);
var inst_21918 = f.call(null,inst_21909);
var inst_21919 = cljs.core.seq.call(null,inst_21918);
var inst_21920 = inst_21919;
var inst_21921 = null;
var inst_21922 = (0);
var inst_21923 = (0);
var state_21968__$1 = (function (){var statearr_21985 = state_21968;
(statearr_21985[(8)] = inst_21920);

(statearr_21985[(10)] = inst_21923);

(statearr_21985[(11)] = inst_21921);

(statearr_21985[(12)] = inst_21922);

return statearr_21985;
})();
var statearr_21986_22020 = state_21968__$1;
(statearr_21986_22020[(2)] = null);

(statearr_21986_22020[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (17))){
var inst_21934 = (state_21968[(7)]);
var inst_21938 = cljs.core.chunk_first.call(null,inst_21934);
var inst_21939 = cljs.core.chunk_rest.call(null,inst_21934);
var inst_21940 = cljs.core.count.call(null,inst_21938);
var inst_21920 = inst_21939;
var inst_21921 = inst_21938;
var inst_21922 = inst_21940;
var inst_21923 = (0);
var state_21968__$1 = (function (){var statearr_21987 = state_21968;
(statearr_21987[(8)] = inst_21920);

(statearr_21987[(10)] = inst_21923);

(statearr_21987[(11)] = inst_21921);

(statearr_21987[(12)] = inst_21922);

return statearr_21987;
})();
var statearr_21988_22021 = state_21968__$1;
(statearr_21988_22021[(2)] = null);

(statearr_21988_22021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (3))){
var inst_21966 = (state_21968[(2)]);
var state_21968__$1 = state_21968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21968__$1,inst_21966);
} else {
if((state_val_21969 === (12))){
var inst_21954 = (state_21968[(2)]);
var state_21968__$1 = state_21968;
var statearr_21989_22022 = state_21968__$1;
(statearr_21989_22022[(2)] = inst_21954);

(statearr_21989_22022[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (2))){
var state_21968__$1 = state_21968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21968__$1,(4),in$);
} else {
if((state_val_21969 === (23))){
var inst_21962 = (state_21968[(2)]);
var state_21968__$1 = state_21968;
var statearr_21990_22023 = state_21968__$1;
(statearr_21990_22023[(2)] = inst_21962);

(statearr_21990_22023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (19))){
var inst_21949 = (state_21968[(2)]);
var state_21968__$1 = state_21968;
var statearr_21991_22024 = state_21968__$1;
(statearr_21991_22024[(2)] = inst_21949);

(statearr_21991_22024[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (11))){
var inst_21934 = (state_21968[(7)]);
var inst_21920 = (state_21968[(8)]);
var inst_21934__$1 = cljs.core.seq.call(null,inst_21920);
var state_21968__$1 = (function (){var statearr_21992 = state_21968;
(statearr_21992[(7)] = inst_21934__$1);

return statearr_21992;
})();
if(inst_21934__$1){
var statearr_21993_22025 = state_21968__$1;
(statearr_21993_22025[(1)] = (14));

} else {
var statearr_21994_22026 = state_21968__$1;
(statearr_21994_22026[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (9))){
var inst_21956 = (state_21968[(2)]);
var inst_21957 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21968__$1 = (function (){var statearr_21995 = state_21968;
(statearr_21995[(15)] = inst_21956);

return statearr_21995;
})();
if(cljs.core.truth_(inst_21957)){
var statearr_21996_22027 = state_21968__$1;
(statearr_21996_22027[(1)] = (21));

} else {
var statearr_21997_22028 = state_21968__$1;
(statearr_21997_22028[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (5))){
var inst_21912 = cljs.core.async.close_BANG_.call(null,out);
var state_21968__$1 = state_21968;
var statearr_21998_22029 = state_21968__$1;
(statearr_21998_22029[(2)] = inst_21912);

(statearr_21998_22029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (14))){
var inst_21934 = (state_21968[(7)]);
var inst_21936 = cljs.core.chunked_seq_QMARK_.call(null,inst_21934);
var state_21968__$1 = state_21968;
if(inst_21936){
var statearr_21999_22030 = state_21968__$1;
(statearr_21999_22030[(1)] = (17));

} else {
var statearr_22000_22031 = state_21968__$1;
(statearr_22000_22031[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (16))){
var inst_21952 = (state_21968[(2)]);
var state_21968__$1 = state_21968;
var statearr_22001_22032 = state_21968__$1;
(statearr_22001_22032[(2)] = inst_21952);

(statearr_22001_22032[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21969 === (10))){
var inst_21923 = (state_21968[(10)]);
var inst_21921 = (state_21968[(11)]);
var inst_21928 = cljs.core._nth.call(null,inst_21921,inst_21923);
var state_21968__$1 = state_21968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21968__$1,(13),out,inst_21928);
} else {
if((state_val_21969 === (18))){
var inst_21934 = (state_21968[(7)]);
var inst_21943 = cljs.core.first.call(null,inst_21934);
var state_21968__$1 = state_21968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21968__$1,(20),out,inst_21943);
} else {
if((state_val_21969 === (8))){
var inst_21923 = (state_21968[(10)]);
var inst_21922 = (state_21968[(12)]);
var inst_21925 = (inst_21923 < inst_21922);
var inst_21926 = inst_21925;
var state_21968__$1 = state_21968;
if(cljs.core.truth_(inst_21926)){
var statearr_22002_22033 = state_21968__$1;
(statearr_22002_22033[(1)] = (10));

} else {
var statearr_22003_22034 = state_21968__$1;
(statearr_22003_22034[(1)] = (11));

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
});})(c__6550__auto__))
;
return ((function (switch__6494__auto__,c__6550__auto__){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_22007 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22007[(0)] = state_machine__6495__auto__);

(statearr_22007[(1)] = (1));

return statearr_22007;
});
var state_machine__6495__auto____1 = (function (state_21968){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_21968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e22008){if((e22008 instanceof Object)){
var ex__6498__auto__ = e22008;
var statearr_22009_22035 = state_21968;
(statearr_22009_22035[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22008;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22036 = state_21968;
state_21968 = G__22036;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_21968){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_21968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto__))
})();
var state__6552__auto__ = (function (){var statearr_22010 = f__6551__auto__.call(null);
(statearr_22010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto__);

return statearr_22010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto__))
);

return c__6550__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6550__auto___22133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___22133,out){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___22133,out){
return (function (state_22108){
var state_val_22109 = (state_22108[(1)]);
if((state_val_22109 === (7))){
var inst_22103 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
var statearr_22110_22134 = state_22108__$1;
(statearr_22110_22134[(2)] = inst_22103);

(statearr_22110_22134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (1))){
var inst_22085 = null;
var state_22108__$1 = (function (){var statearr_22111 = state_22108;
(statearr_22111[(7)] = inst_22085);

return statearr_22111;
})();
var statearr_22112_22135 = state_22108__$1;
(statearr_22112_22135[(2)] = null);

(statearr_22112_22135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (4))){
var inst_22088 = (state_22108[(8)]);
var inst_22088__$1 = (state_22108[(2)]);
var inst_22089 = (inst_22088__$1 == null);
var inst_22090 = cljs.core.not.call(null,inst_22089);
var state_22108__$1 = (function (){var statearr_22113 = state_22108;
(statearr_22113[(8)] = inst_22088__$1);

return statearr_22113;
})();
if(inst_22090){
var statearr_22114_22136 = state_22108__$1;
(statearr_22114_22136[(1)] = (5));

} else {
var statearr_22115_22137 = state_22108__$1;
(statearr_22115_22137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (6))){
var state_22108__$1 = state_22108;
var statearr_22116_22138 = state_22108__$1;
(statearr_22116_22138[(2)] = null);

(statearr_22116_22138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (3))){
var inst_22105 = (state_22108[(2)]);
var inst_22106 = cljs.core.async.close_BANG_.call(null,out);
var state_22108__$1 = (function (){var statearr_22117 = state_22108;
(statearr_22117[(9)] = inst_22105);

return statearr_22117;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22108__$1,inst_22106);
} else {
if((state_val_22109 === (2))){
var state_22108__$1 = state_22108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22108__$1,(4),ch);
} else {
if((state_val_22109 === (11))){
var inst_22088 = (state_22108[(8)]);
var inst_22097 = (state_22108[(2)]);
var inst_22085 = inst_22088;
var state_22108__$1 = (function (){var statearr_22118 = state_22108;
(statearr_22118[(10)] = inst_22097);

(statearr_22118[(7)] = inst_22085);

return statearr_22118;
})();
var statearr_22119_22139 = state_22108__$1;
(statearr_22119_22139[(2)] = null);

(statearr_22119_22139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (9))){
var inst_22088 = (state_22108[(8)]);
var state_22108__$1 = state_22108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22108__$1,(11),out,inst_22088);
} else {
if((state_val_22109 === (5))){
var inst_22085 = (state_22108[(7)]);
var inst_22088 = (state_22108[(8)]);
var inst_22092 = cljs.core._EQ_.call(null,inst_22088,inst_22085);
var state_22108__$1 = state_22108;
if(inst_22092){
var statearr_22121_22140 = state_22108__$1;
(statearr_22121_22140[(1)] = (8));

} else {
var statearr_22122_22141 = state_22108__$1;
(statearr_22122_22141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (10))){
var inst_22100 = (state_22108[(2)]);
var state_22108__$1 = state_22108;
var statearr_22123_22142 = state_22108__$1;
(statearr_22123_22142[(2)] = inst_22100);

(statearr_22123_22142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22109 === (8))){
var inst_22085 = (state_22108[(7)]);
var tmp22120 = inst_22085;
var inst_22085__$1 = tmp22120;
var state_22108__$1 = (function (){var statearr_22124 = state_22108;
(statearr_22124[(7)] = inst_22085__$1);

return statearr_22124;
})();
var statearr_22125_22143 = state_22108__$1;
(statearr_22125_22143[(2)] = null);

(statearr_22125_22143[(1)] = (2));


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
});})(c__6550__auto___22133,out))
;
return ((function (switch__6494__auto__,c__6550__auto___22133,out){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_22129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22129[(0)] = state_machine__6495__auto__);

(statearr_22129[(1)] = (1));

return statearr_22129;
});
var state_machine__6495__auto____1 = (function (state_22108){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_22108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e22130){if((e22130 instanceof Object)){
var ex__6498__auto__ = e22130;
var statearr_22131_22144 = state_22108;
(statearr_22131_22144[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22145 = state_22108;
state_22108 = G__22145;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_22108){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_22108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___22133,out))
})();
var state__6552__auto__ = (function (){var statearr_22132 = f__6551__auto__.call(null);
(statearr_22132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___22133);

return statearr_22132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___22133,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6550__auto___22280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___22280,out){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___22280,out){
return (function (state_22250){
var state_val_22251 = (state_22250[(1)]);
if((state_val_22251 === (7))){
var inst_22246 = (state_22250[(2)]);
var state_22250__$1 = state_22250;
var statearr_22252_22281 = state_22250__$1;
(statearr_22252_22281[(2)] = inst_22246);

(statearr_22252_22281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22251 === (1))){
var inst_22213 = (new Array(n));
var inst_22214 = inst_22213;
var inst_22215 = (0);
var state_22250__$1 = (function (){var statearr_22253 = state_22250;
(statearr_22253[(7)] = inst_22214);

(statearr_22253[(8)] = inst_22215);

return statearr_22253;
})();
var statearr_22254_22282 = state_22250__$1;
(statearr_22254_22282[(2)] = null);

(statearr_22254_22282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22251 === (4))){
var inst_22218 = (state_22250[(9)]);
var inst_22218__$1 = (state_22250[(2)]);
var inst_22219 = (inst_22218__$1 == null);
var inst_22220 = cljs.core.not.call(null,inst_22219);
var state_22250__$1 = (function (){var statearr_22255 = state_22250;
(statearr_22255[(9)] = inst_22218__$1);

return statearr_22255;
})();
if(inst_22220){
var statearr_22256_22283 = state_22250__$1;
(statearr_22256_22283[(1)] = (5));

} else {
var statearr_22257_22284 = state_22250__$1;
(statearr_22257_22284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22251 === (15))){
var inst_22240 = (state_22250[(2)]);
var state_22250__$1 = state_22250;
var statearr_22258_22285 = state_22250__$1;
(statearr_22258_22285[(2)] = inst_22240);

(statearr_22258_22285[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22251 === (13))){
var state_22250__$1 = state_22250;
var statearr_22259_22286 = state_22250__$1;
(statearr_22259_22286[(2)] = null);

(statearr_22259_22286[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22251 === (6))){
var inst_22215 = (state_22250[(8)]);
var inst_22236 = (inst_22215 > (0));
var state_22250__$1 = state_22250;
if(cljs.core.truth_(inst_22236)){
var statearr_22260_22287 = state_22250__$1;
(statearr_22260_22287[(1)] = (12));

} else {
var statearr_22261_22288 = state_22250__$1;
(statearr_22261_22288[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22251 === (3))){
var inst_22248 = (state_22250[(2)]);
var state_22250__$1 = state_22250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22250__$1,inst_22248);
} else {
if((state_val_22251 === (12))){
var inst_22214 = (state_22250[(7)]);
var inst_22238 = cljs.core.vec.call(null,inst_22214);
var state_22250__$1 = state_22250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22250__$1,(15),out,inst_22238);
} else {
if((state_val_22251 === (2))){
var state_22250__$1 = state_22250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22250__$1,(4),ch);
} else {
if((state_val_22251 === (11))){
var inst_22230 = (state_22250[(2)]);
var inst_22231 = (new Array(n));
var inst_22214 = inst_22231;
var inst_22215 = (0);
var state_22250__$1 = (function (){var statearr_22262 = state_22250;
(statearr_22262[(10)] = inst_22230);

(statearr_22262[(7)] = inst_22214);

(statearr_22262[(8)] = inst_22215);

return statearr_22262;
})();
var statearr_22263_22289 = state_22250__$1;
(statearr_22263_22289[(2)] = null);

(statearr_22263_22289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22251 === (9))){
var inst_22214 = (state_22250[(7)]);
var inst_22228 = cljs.core.vec.call(null,inst_22214);
var state_22250__$1 = state_22250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22250__$1,(11),out,inst_22228);
} else {
if((state_val_22251 === (5))){
var inst_22214 = (state_22250[(7)]);
var inst_22215 = (state_22250[(8)]);
var inst_22223 = (state_22250[(11)]);
var inst_22218 = (state_22250[(9)]);
var inst_22222 = (inst_22214[inst_22215] = inst_22218);
var inst_22223__$1 = (inst_22215 + (1));
var inst_22224 = (inst_22223__$1 < n);
var state_22250__$1 = (function (){var statearr_22264 = state_22250;
(statearr_22264[(11)] = inst_22223__$1);

(statearr_22264[(12)] = inst_22222);

return statearr_22264;
})();
if(cljs.core.truth_(inst_22224)){
var statearr_22265_22290 = state_22250__$1;
(statearr_22265_22290[(1)] = (8));

} else {
var statearr_22266_22291 = state_22250__$1;
(statearr_22266_22291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22251 === (14))){
var inst_22243 = (state_22250[(2)]);
var inst_22244 = cljs.core.async.close_BANG_.call(null,out);
var state_22250__$1 = (function (){var statearr_22268 = state_22250;
(statearr_22268[(13)] = inst_22243);

return statearr_22268;
})();
var statearr_22269_22292 = state_22250__$1;
(statearr_22269_22292[(2)] = inst_22244);

(statearr_22269_22292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22251 === (10))){
var inst_22234 = (state_22250[(2)]);
var state_22250__$1 = state_22250;
var statearr_22270_22293 = state_22250__$1;
(statearr_22270_22293[(2)] = inst_22234);

(statearr_22270_22293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22251 === (8))){
var inst_22214 = (state_22250[(7)]);
var inst_22223 = (state_22250[(11)]);
var tmp22267 = inst_22214;
var inst_22214__$1 = tmp22267;
var inst_22215 = inst_22223;
var state_22250__$1 = (function (){var statearr_22271 = state_22250;
(statearr_22271[(7)] = inst_22214__$1);

(statearr_22271[(8)] = inst_22215);

return statearr_22271;
})();
var statearr_22272_22294 = state_22250__$1;
(statearr_22272_22294[(2)] = null);

(statearr_22272_22294[(1)] = (2));


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
});})(c__6550__auto___22280,out))
;
return ((function (switch__6494__auto__,c__6550__auto___22280,out){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_22276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22276[(0)] = state_machine__6495__auto__);

(statearr_22276[(1)] = (1));

return statearr_22276;
});
var state_machine__6495__auto____1 = (function (state_22250){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_22250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e22277){if((e22277 instanceof Object)){
var ex__6498__auto__ = e22277;
var statearr_22278_22295 = state_22250;
(statearr_22278_22295[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22296 = state_22250;
state_22250 = G__22296;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_22250){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_22250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___22280,out))
})();
var state__6552__auto__ = (function (){var statearr_22279 = f__6551__auto__.call(null);
(statearr_22279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___22280);

return statearr_22279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___22280,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__6550__auto___22439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto___22439,out){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto___22439,out){
return (function (state_22409){
var state_val_22410 = (state_22409[(1)]);
if((state_val_22410 === (7))){
var inst_22405 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22411_22440 = state_22409__$1;
(statearr_22411_22440[(2)] = inst_22405);

(statearr_22411_22440[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (1))){
var inst_22368 = [];
var inst_22369 = inst_22368;
var inst_22370 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22409__$1 = (function (){var statearr_22412 = state_22409;
(statearr_22412[(7)] = inst_22369);

(statearr_22412[(8)] = inst_22370);

return statearr_22412;
})();
var statearr_22413_22441 = state_22409__$1;
(statearr_22413_22441[(2)] = null);

(statearr_22413_22441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (4))){
var inst_22373 = (state_22409[(9)]);
var inst_22373__$1 = (state_22409[(2)]);
var inst_22374 = (inst_22373__$1 == null);
var inst_22375 = cljs.core.not.call(null,inst_22374);
var state_22409__$1 = (function (){var statearr_22414 = state_22409;
(statearr_22414[(9)] = inst_22373__$1);

return statearr_22414;
})();
if(inst_22375){
var statearr_22415_22442 = state_22409__$1;
(statearr_22415_22442[(1)] = (5));

} else {
var statearr_22416_22443 = state_22409__$1;
(statearr_22416_22443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (15))){
var inst_22399 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22417_22444 = state_22409__$1;
(statearr_22417_22444[(2)] = inst_22399);

(statearr_22417_22444[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (13))){
var state_22409__$1 = state_22409;
var statearr_22418_22445 = state_22409__$1;
(statearr_22418_22445[(2)] = null);

(statearr_22418_22445[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (6))){
var inst_22369 = (state_22409[(7)]);
var inst_22394 = inst_22369.length;
var inst_22395 = (inst_22394 > (0));
var state_22409__$1 = state_22409;
if(cljs.core.truth_(inst_22395)){
var statearr_22419_22446 = state_22409__$1;
(statearr_22419_22446[(1)] = (12));

} else {
var statearr_22420_22447 = state_22409__$1;
(statearr_22420_22447[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (3))){
var inst_22407 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22409__$1,inst_22407);
} else {
if((state_val_22410 === (12))){
var inst_22369 = (state_22409[(7)]);
var inst_22397 = cljs.core.vec.call(null,inst_22369);
var state_22409__$1 = state_22409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22409__$1,(15),out,inst_22397);
} else {
if((state_val_22410 === (2))){
var state_22409__$1 = state_22409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22409__$1,(4),ch);
} else {
if((state_val_22410 === (11))){
var inst_22377 = (state_22409[(10)]);
var inst_22373 = (state_22409[(9)]);
var inst_22387 = (state_22409[(2)]);
var inst_22388 = [];
var inst_22389 = inst_22388.push(inst_22373);
var inst_22369 = inst_22388;
var inst_22370 = inst_22377;
var state_22409__$1 = (function (){var statearr_22421 = state_22409;
(statearr_22421[(11)] = inst_22389);

(statearr_22421[(12)] = inst_22387);

(statearr_22421[(7)] = inst_22369);

(statearr_22421[(8)] = inst_22370);

return statearr_22421;
})();
var statearr_22422_22448 = state_22409__$1;
(statearr_22422_22448[(2)] = null);

(statearr_22422_22448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (9))){
var inst_22369 = (state_22409[(7)]);
var inst_22385 = cljs.core.vec.call(null,inst_22369);
var state_22409__$1 = state_22409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22409__$1,(11),out,inst_22385);
} else {
if((state_val_22410 === (5))){
var inst_22377 = (state_22409[(10)]);
var inst_22373 = (state_22409[(9)]);
var inst_22370 = (state_22409[(8)]);
var inst_22377__$1 = f.call(null,inst_22373);
var inst_22378 = cljs.core._EQ_.call(null,inst_22377__$1,inst_22370);
var inst_22379 = cljs.core.keyword_identical_QMARK_.call(null,inst_22370,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22380 = (inst_22378) || (inst_22379);
var state_22409__$1 = (function (){var statearr_22423 = state_22409;
(statearr_22423[(10)] = inst_22377__$1);

return statearr_22423;
})();
if(cljs.core.truth_(inst_22380)){
var statearr_22424_22449 = state_22409__$1;
(statearr_22424_22449[(1)] = (8));

} else {
var statearr_22425_22450 = state_22409__$1;
(statearr_22425_22450[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (14))){
var inst_22402 = (state_22409[(2)]);
var inst_22403 = cljs.core.async.close_BANG_.call(null,out);
var state_22409__$1 = (function (){var statearr_22427 = state_22409;
(statearr_22427[(13)] = inst_22402);

return statearr_22427;
})();
var statearr_22428_22451 = state_22409__$1;
(statearr_22428_22451[(2)] = inst_22403);

(statearr_22428_22451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (10))){
var inst_22392 = (state_22409[(2)]);
var state_22409__$1 = state_22409;
var statearr_22429_22452 = state_22409__$1;
(statearr_22429_22452[(2)] = inst_22392);

(statearr_22429_22452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22410 === (8))){
var inst_22377 = (state_22409[(10)]);
var inst_22373 = (state_22409[(9)]);
var inst_22369 = (state_22409[(7)]);
var inst_22382 = inst_22369.push(inst_22373);
var tmp22426 = inst_22369;
var inst_22369__$1 = tmp22426;
var inst_22370 = inst_22377;
var state_22409__$1 = (function (){var statearr_22430 = state_22409;
(statearr_22430[(14)] = inst_22382);

(statearr_22430[(7)] = inst_22369__$1);

(statearr_22430[(8)] = inst_22370);

return statearr_22430;
})();
var statearr_22431_22453 = state_22409__$1;
(statearr_22431_22453[(2)] = null);

(statearr_22431_22453[(1)] = (2));


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
});})(c__6550__auto___22439,out))
;
return ((function (switch__6494__auto__,c__6550__auto___22439,out){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_22435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22435[(0)] = state_machine__6495__auto__);

(statearr_22435[(1)] = (1));

return statearr_22435;
});
var state_machine__6495__auto____1 = (function (state_22409){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_22409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e22436){if((e22436 instanceof Object)){
var ex__6498__auto__ = e22436;
var statearr_22437_22454 = state_22409;
(statearr_22437_22454[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22455 = state_22409;
state_22409 = G__22455;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_22409){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_22409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto___22439,out))
})();
var state__6552__auto__ = (function (){var statearr_22438 = f__6551__auto__.call(null);
(statearr_22438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto___22439);

return statearr_22438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto___22439,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map?rel=1423280676598