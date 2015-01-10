// Compiled by ClojureScript 0.0-2674 {}
if(!goog.isProvided_('cljs.core.async')) {
goog.provide('cljs.core.async');
}
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t16355 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16355 = (function (f,fn_handler,meta16356){
this.f = f;
this.fn_handler = fn_handler;
this.meta16356 = meta16356;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16355.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16355.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t16355.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t16355.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16357){
var self__ = this;
var _16357__$1 = this;
return self__.meta16356;
});

cljs.core.async.t16355.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16357,meta16356__$1){
var self__ = this;
var _16357__$1 = this;
return (new cljs.core.async.t16355(self__.f,self__.fn_handler,meta16356__$1));
});

cljs.core.async.t16355.cljs$lang$type = true;

cljs.core.async.t16355.cljs$lang$ctorStr = "cljs.core.async/t16355";

cljs.core.async.t16355.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cljs.core.async/t16355");
});

cljs.core.async.__GT_t16355 = (function __GT_t16355(f__$1,fn_handler__$1,meta16356){
return (new cljs.core.async.t16355(f__$1,fn_handler__$1,meta16356));
});

}

return (new cljs.core.async.t16355(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var G__16359 = buff;
if(G__16359){
var bit__4435__auto__ = null;
if(cljs.core.truth_((function (){var or__3754__auto__ = bit__4435__auto__;
if(cljs.core.truth_(or__3754__auto__)){
return or__3754__auto__;
} else {
return G__16359.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__16359.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16359);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16359);
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
var val_16360 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16360);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16360,ret){
return (function (){
return fn1.call(null,val_16360);
});})(val_16360,ret))
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
var n__4641__auto___16361 = n;
var x_16362 = (0);
while(true){
if((x_16362 < n__4641__auto___16361)){
(a[x_16362] = (0));

var G__16363 = (x_16362 + (1));
x_16362 = G__16363;
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

var G__16364 = (i + (1));
i = G__16364;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t16368 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16368 = (function (flag,alt_flag,meta16369){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16369 = meta16369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16368.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16368.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t16368.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t16368.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16370){
var self__ = this;
var _16370__$1 = this;
return self__.meta16369;
});})(flag))
;

cljs.core.async.t16368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16370,meta16369__$1){
var self__ = this;
var _16370__$1 = this;
return (new cljs.core.async.t16368(self__.flag,self__.alt_flag,meta16369__$1));
});})(flag))
;

cljs.core.async.t16368.cljs$lang$type = true;

cljs.core.async.t16368.cljs$lang$ctorStr = "cljs.core.async/t16368";

cljs.core.async.t16368.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cljs.core.async/t16368");
});})(flag))
;

cljs.core.async.__GT_t16368 = ((function (flag){
return (function __GT_t16368(flag__$1,alt_flag__$1,meta16369){
return (new cljs.core.async.t16368(flag__$1,alt_flag__$1,meta16369));
});})(flag))
;

}

return (new cljs.core.async.t16368(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t16374 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t16374 = (function (cb,flag,alt_handler,meta16375){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16375 = meta16375;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16374.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t16374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t16374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t16374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16376){
var self__ = this;
var _16376__$1 = this;
return self__.meta16375;
});

cljs.core.async.t16374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16376,meta16375__$1){
var self__ = this;
var _16376__$1 = this;
return (new cljs.core.async.t16374(self__.cb,self__.flag,self__.alt_handler,meta16375__$1));
});

cljs.core.async.t16374.cljs$lang$type = true;

cljs.core.async.t16374.cljs$lang$ctorStr = "cljs.core.async/t16374";

cljs.core.async.t16374.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cljs.core.async/t16374");
});

cljs.core.async.__GT_t16374 = (function __GT_t16374(cb__$1,flag__$1,alt_handler__$1,meta16375){
return (new cljs.core.async.t16374(cb__$1,flag__$1,alt_handler__$1,meta16375));
});

}

return (new cljs.core.async.t16374(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
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
return (function (p1__16377_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16377_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16378_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16378_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3754__auto__ = wport;
if(cljs.core.truth_(or__3754__auto__)){
return or__3754__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16379 = (i + (1));
i = G__16379;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3754__auto__ = ret;
if(cljs.core.truth_(or__3754__auto__)){
return or__3754__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3742__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3742__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3742__auto__;
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
var alts_BANG___delegate = function (ports,p__16380){
var map__16382 = p__16380;
var map__16382__$1 = ((cljs.core.seq_QMARK_.call(null,map__16382))?cljs.core.apply.call(null,cljs.core.hash_map,map__16382):map__16382);
var opts = map__16382__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__16380 = null;
if (arguments.length > 1) {
var G__16383__i = 0, G__16383__a = new Array(arguments.length -  1);
while (G__16383__i < G__16383__a.length) {G__16383__a[G__16383__i] = arguments[G__16383__i + 1]; ++G__16383__i;}
  p__16380 = new cljs.core.IndexedSeq(G__16383__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__16380);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16384){
var ports = cljs.core.first(arglist__16384);
var p__16380 = cljs.core.rest(arglist__16384);
return alts_BANG___delegate(ports,p__16380);
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
var c__5977__auto___16479 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___16479){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___16479){
return (function (state_16455){
var state_val_16456 = (state_16455[(1)]);
if((state_val_16456 === (7))){
var inst_16451 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
var statearr_16457_16480 = state_16455__$1;
(statearr_16457_16480[(2)] = inst_16451);

(statearr_16457_16480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (1))){
var state_16455__$1 = state_16455;
var statearr_16458_16481 = state_16455__$1;
(statearr_16458_16481[(2)] = null);

(statearr_16458_16481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (4))){
var inst_16434 = (state_16455[(7)]);
var inst_16434__$1 = (state_16455[(2)]);
var inst_16435 = (inst_16434__$1 == null);
var state_16455__$1 = (function (){var statearr_16459 = state_16455;
(statearr_16459[(7)] = inst_16434__$1);

return statearr_16459;
})();
if(cljs.core.truth_(inst_16435)){
var statearr_16460_16482 = state_16455__$1;
(statearr_16460_16482[(1)] = (5));

} else {
var statearr_16461_16483 = state_16455__$1;
(statearr_16461_16483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (13))){
var state_16455__$1 = state_16455;
var statearr_16462_16484 = state_16455__$1;
(statearr_16462_16484[(2)] = null);

(statearr_16462_16484[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (6))){
var inst_16434 = (state_16455[(7)]);
var state_16455__$1 = state_16455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16455__$1,(11),to,inst_16434);
} else {
if((state_val_16456 === (3))){
var inst_16453 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16455__$1,inst_16453);
} else {
if((state_val_16456 === (12))){
var state_16455__$1 = state_16455;
var statearr_16463_16485 = state_16455__$1;
(statearr_16463_16485[(2)] = null);

(statearr_16463_16485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (2))){
var state_16455__$1 = state_16455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16455__$1,(4),from);
} else {
if((state_val_16456 === (11))){
var inst_16444 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
if(cljs.core.truth_(inst_16444)){
var statearr_16464_16486 = state_16455__$1;
(statearr_16464_16486[(1)] = (12));

} else {
var statearr_16465_16487 = state_16455__$1;
(statearr_16465_16487[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (9))){
var state_16455__$1 = state_16455;
var statearr_16466_16488 = state_16455__$1;
(statearr_16466_16488[(2)] = null);

(statearr_16466_16488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (5))){
var state_16455__$1 = state_16455;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16467_16489 = state_16455__$1;
(statearr_16467_16489[(1)] = (8));

} else {
var statearr_16468_16490 = state_16455__$1;
(statearr_16468_16490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (14))){
var inst_16449 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
var statearr_16469_16491 = state_16455__$1;
(statearr_16469_16491[(2)] = inst_16449);

(statearr_16469_16491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (10))){
var inst_16441 = (state_16455[(2)]);
var state_16455__$1 = state_16455;
var statearr_16470_16492 = state_16455__$1;
(statearr_16470_16492[(2)] = inst_16441);

(statearr_16470_16492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16456 === (8))){
var inst_16438 = cljs.core.async.close_BANG_.call(null,to);
var state_16455__$1 = state_16455;
var statearr_16471_16493 = state_16455__$1;
(statearr_16471_16493[(2)] = inst_16438);

(statearr_16471_16493[(1)] = (10));


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
});})(c__5977__auto___16479))
;
return ((function (switch__5962__auto__,c__5977__auto___16479){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_16475 = [null,null,null,null,null,null,null,null];
(statearr_16475[(0)] = state_machine__5963__auto__);

(statearr_16475[(1)] = (1));

return statearr_16475;
});
var state_machine__5963__auto____1 = (function (state_16455){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_16455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e16476){if((e16476 instanceof Object)){
var ex__5966__auto__ = e16476;
var statearr_16477_16494 = state_16455;
(statearr_16477_16494[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16476;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16495 = state_16455;
state_16455 = G__16495;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_16455){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_16455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___16479))
})();
var state__5979__auto__ = (function (){var statearr_16478 = f__5978__auto__.call(null);
(statearr_16478[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___16479);

return statearr_16478;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___16479))
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
return (function (p__16679){
var vec__16680 = p__16679;
var v = cljs.core.nth.call(null,vec__16680,(0),null);
var p = cljs.core.nth.call(null,vec__16680,(1),null);
var job = vec__16680;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__5977__auto___16862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___16862,res,vec__16680,v,p,job,jobs,results){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___16862,res,vec__16680,v,p,job,jobs,results){
return (function (state_16685){
var state_val_16686 = (state_16685[(1)]);
if((state_val_16686 === (2))){
var inst_16682 = (state_16685[(2)]);
var inst_16683 = cljs.core.async.close_BANG_.call(null,res);
var state_16685__$1 = (function (){var statearr_16687 = state_16685;
(statearr_16687[(7)] = inst_16682);

return statearr_16687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16685__$1,inst_16683);
} else {
if((state_val_16686 === (1))){
var state_16685__$1 = state_16685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16685__$1,(2),res,v);
} else {
return null;
}
}
});})(c__5977__auto___16862,res,vec__16680,v,p,job,jobs,results))
;
return ((function (switch__5962__auto__,c__5977__auto___16862,res,vec__16680,v,p,job,jobs,results){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_16691 = [null,null,null,null,null,null,null,null];
(statearr_16691[(0)] = state_machine__5963__auto__);

(statearr_16691[(1)] = (1));

return statearr_16691;
});
var state_machine__5963__auto____1 = (function (state_16685){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_16685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e16692){if((e16692 instanceof Object)){
var ex__5966__auto__ = e16692;
var statearr_16693_16863 = state_16685;
(statearr_16693_16863[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16864 = state_16685;
state_16685 = G__16864;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_16685){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_16685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___16862,res,vec__16680,v,p,job,jobs,results))
})();
var state__5979__auto__ = (function (){var statearr_16694 = f__5978__auto__.call(null);
(statearr_16694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___16862);

return statearr_16694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___16862,res,vec__16680,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__16695){
var vec__16696 = p__16695;
var v = cljs.core.nth.call(null,vec__16696,(0),null);
var p = cljs.core.nth.call(null,vec__16696,(1),null);
var job = vec__16696;
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
var n__4641__auto___16865 = n;
var __16866 = (0);
while(true){
if((__16866 < n__4641__auto___16865)){
var G__16697_16867 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__16697_16867) {
case "async":
var c__5977__auto___16869 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16866,c__5977__auto___16869,G__16697_16867,n__4641__auto___16865,jobs,results,process,async){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (__16866,c__5977__auto___16869,G__16697_16867,n__4641__auto___16865,jobs,results,process,async){
return (function (state_16710){
var state_val_16711 = (state_16710[(1)]);
if((state_val_16711 === (7))){
var inst_16706 = (state_16710[(2)]);
var state_16710__$1 = state_16710;
var statearr_16712_16870 = state_16710__$1;
(statearr_16712_16870[(2)] = inst_16706);

(statearr_16712_16870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16711 === (6))){
var state_16710__$1 = state_16710;
var statearr_16713_16871 = state_16710__$1;
(statearr_16713_16871[(2)] = null);

(statearr_16713_16871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16711 === (5))){
var state_16710__$1 = state_16710;
var statearr_16714_16872 = state_16710__$1;
(statearr_16714_16872[(2)] = null);

(statearr_16714_16872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16711 === (4))){
var inst_16700 = (state_16710[(2)]);
var inst_16701 = async.call(null,inst_16700);
var state_16710__$1 = state_16710;
if(cljs.core.truth_(inst_16701)){
var statearr_16715_16873 = state_16710__$1;
(statearr_16715_16873[(1)] = (5));

} else {
var statearr_16716_16874 = state_16710__$1;
(statearr_16716_16874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16711 === (3))){
var inst_16708 = (state_16710[(2)]);
var state_16710__$1 = state_16710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16710__$1,inst_16708);
} else {
if((state_val_16711 === (2))){
var state_16710__$1 = state_16710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16710__$1,(4),jobs);
} else {
if((state_val_16711 === (1))){
var state_16710__$1 = state_16710;
var statearr_16717_16875 = state_16710__$1;
(statearr_16717_16875[(2)] = null);

(statearr_16717_16875[(1)] = (2));


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
});})(__16866,c__5977__auto___16869,G__16697_16867,n__4641__auto___16865,jobs,results,process,async))
;
return ((function (__16866,switch__5962__auto__,c__5977__auto___16869,G__16697_16867,n__4641__auto___16865,jobs,results,process,async){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_16721 = [null,null,null,null,null,null,null];
(statearr_16721[(0)] = state_machine__5963__auto__);

(statearr_16721[(1)] = (1));

return statearr_16721;
});
var state_machine__5963__auto____1 = (function (state_16710){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_16710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e16722){if((e16722 instanceof Object)){
var ex__5966__auto__ = e16722;
var statearr_16723_16876 = state_16710;
(statearr_16723_16876[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16877 = state_16710;
state_16710 = G__16877;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_16710){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_16710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(__16866,switch__5962__auto__,c__5977__auto___16869,G__16697_16867,n__4641__auto___16865,jobs,results,process,async))
})();
var state__5979__auto__ = (function (){var statearr_16724 = f__5978__auto__.call(null);
(statearr_16724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___16869);

return statearr_16724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(__16866,c__5977__auto___16869,G__16697_16867,n__4641__auto___16865,jobs,results,process,async))
);


break;
case "compute":
var c__5977__auto___16878 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__16866,c__5977__auto___16878,G__16697_16867,n__4641__auto___16865,jobs,results,process,async){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (__16866,c__5977__auto___16878,G__16697_16867,n__4641__auto___16865,jobs,results,process,async){
return (function (state_16737){
var state_val_16738 = (state_16737[(1)]);
if((state_val_16738 === (7))){
var inst_16733 = (state_16737[(2)]);
var state_16737__$1 = state_16737;
var statearr_16739_16879 = state_16737__$1;
(statearr_16739_16879[(2)] = inst_16733);

(statearr_16739_16879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16738 === (6))){
var state_16737__$1 = state_16737;
var statearr_16740_16880 = state_16737__$1;
(statearr_16740_16880[(2)] = null);

(statearr_16740_16880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16738 === (5))){
var state_16737__$1 = state_16737;
var statearr_16741_16881 = state_16737__$1;
(statearr_16741_16881[(2)] = null);

(statearr_16741_16881[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16738 === (4))){
var inst_16727 = (state_16737[(2)]);
var inst_16728 = process.call(null,inst_16727);
var state_16737__$1 = state_16737;
if(cljs.core.truth_(inst_16728)){
var statearr_16742_16882 = state_16737__$1;
(statearr_16742_16882[(1)] = (5));

} else {
var statearr_16743_16883 = state_16737__$1;
(statearr_16743_16883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16738 === (3))){
var inst_16735 = (state_16737[(2)]);
var state_16737__$1 = state_16737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16737__$1,inst_16735);
} else {
if((state_val_16738 === (2))){
var state_16737__$1 = state_16737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16737__$1,(4),jobs);
} else {
if((state_val_16738 === (1))){
var state_16737__$1 = state_16737;
var statearr_16744_16884 = state_16737__$1;
(statearr_16744_16884[(2)] = null);

(statearr_16744_16884[(1)] = (2));


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
});})(__16866,c__5977__auto___16878,G__16697_16867,n__4641__auto___16865,jobs,results,process,async))
;
return ((function (__16866,switch__5962__auto__,c__5977__auto___16878,G__16697_16867,n__4641__auto___16865,jobs,results,process,async){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_16748 = [null,null,null,null,null,null,null];
(statearr_16748[(0)] = state_machine__5963__auto__);

(statearr_16748[(1)] = (1));

return statearr_16748;
});
var state_machine__5963__auto____1 = (function (state_16737){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_16737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e16749){if((e16749 instanceof Object)){
var ex__5966__auto__ = e16749;
var statearr_16750_16885 = state_16737;
(statearr_16750_16885[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16886 = state_16737;
state_16737 = G__16886;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_16737){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_16737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(__16866,switch__5962__auto__,c__5977__auto___16878,G__16697_16867,n__4641__auto___16865,jobs,results,process,async))
})();
var state__5979__auto__ = (function (){var statearr_16751 = f__5978__auto__.call(null);
(statearr_16751[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___16878);

return statearr_16751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(__16866,c__5977__auto___16878,G__16697_16867,n__4641__auto___16865,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__16887 = (__16866 + (1));
__16866 = G__16887;
continue;
} else {
}
break;
}

var c__5977__auto___16888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___16888,jobs,results,process,async){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___16888,jobs,results,process,async){
return (function (state_16773){
var state_val_16774 = (state_16773[(1)]);
if((state_val_16774 === (9))){
var inst_16766 = (state_16773[(2)]);
var state_16773__$1 = (function (){var statearr_16775 = state_16773;
(statearr_16775[(7)] = inst_16766);

return statearr_16775;
})();
var statearr_16776_16889 = state_16773__$1;
(statearr_16776_16889[(2)] = null);

(statearr_16776_16889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (8))){
var inst_16759 = (state_16773[(8)]);
var inst_16764 = (state_16773[(2)]);
var state_16773__$1 = (function (){var statearr_16777 = state_16773;
(statearr_16777[(9)] = inst_16764);

return statearr_16777;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16773__$1,(9),results,inst_16759);
} else {
if((state_val_16774 === (7))){
var inst_16769 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
var statearr_16778_16890 = state_16773__$1;
(statearr_16778_16890[(2)] = inst_16769);

(statearr_16778_16890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (6))){
var inst_16759 = (state_16773[(8)]);
var inst_16754 = (state_16773[(10)]);
var inst_16759__$1 = cljs.core.async.chan.call(null,(1));
var inst_16760 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16761 = [inst_16754,inst_16759__$1];
var inst_16762 = (new cljs.core.PersistentVector(null,2,(5),inst_16760,inst_16761,null));
var state_16773__$1 = (function (){var statearr_16779 = state_16773;
(statearr_16779[(8)] = inst_16759__$1);

return statearr_16779;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16773__$1,(8),jobs,inst_16762);
} else {
if((state_val_16774 === (5))){
var inst_16757 = cljs.core.async.close_BANG_.call(null,jobs);
var state_16773__$1 = state_16773;
var statearr_16780_16891 = state_16773__$1;
(statearr_16780_16891[(2)] = inst_16757);

(statearr_16780_16891[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (4))){
var inst_16754 = (state_16773[(10)]);
var inst_16754__$1 = (state_16773[(2)]);
var inst_16755 = (inst_16754__$1 == null);
var state_16773__$1 = (function (){var statearr_16781 = state_16773;
(statearr_16781[(10)] = inst_16754__$1);

return statearr_16781;
})();
if(cljs.core.truth_(inst_16755)){
var statearr_16782_16892 = state_16773__$1;
(statearr_16782_16892[(1)] = (5));

} else {
var statearr_16783_16893 = state_16773__$1;
(statearr_16783_16893[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16774 === (3))){
var inst_16771 = (state_16773[(2)]);
var state_16773__$1 = state_16773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16773__$1,inst_16771);
} else {
if((state_val_16774 === (2))){
var state_16773__$1 = state_16773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16773__$1,(4),from);
} else {
if((state_val_16774 === (1))){
var state_16773__$1 = state_16773;
var statearr_16784_16894 = state_16773__$1;
(statearr_16784_16894[(2)] = null);

(statearr_16784_16894[(1)] = (2));


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
});})(c__5977__auto___16888,jobs,results,process,async))
;
return ((function (switch__5962__auto__,c__5977__auto___16888,jobs,results,process,async){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_16788 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16788[(0)] = state_machine__5963__auto__);

(statearr_16788[(1)] = (1));

return statearr_16788;
});
var state_machine__5963__auto____1 = (function (state_16773){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_16773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e16789){if((e16789 instanceof Object)){
var ex__5966__auto__ = e16789;
var statearr_16790_16895 = state_16773;
(statearr_16790_16895[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16896 = state_16773;
state_16773 = G__16896;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_16773){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_16773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___16888,jobs,results,process,async))
})();
var state__5979__auto__ = (function (){var statearr_16791 = f__5978__auto__.call(null);
(statearr_16791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___16888);

return statearr_16791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___16888,jobs,results,process,async))
);


var c__5977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto__,jobs,results,process,async){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto__,jobs,results,process,async){
return (function (state_16829){
var state_val_16830 = (state_16829[(1)]);
if((state_val_16830 === (7))){
var inst_16825 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16831_16897 = state_16829__$1;
(statearr_16831_16897[(2)] = inst_16825);

(statearr_16831_16897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (20))){
var state_16829__$1 = state_16829;
var statearr_16832_16898 = state_16829__$1;
(statearr_16832_16898[(2)] = null);

(statearr_16832_16898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (1))){
var state_16829__$1 = state_16829;
var statearr_16833_16899 = state_16829__$1;
(statearr_16833_16899[(2)] = null);

(statearr_16833_16899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (4))){
var inst_16794 = (state_16829[(7)]);
var inst_16794__$1 = (state_16829[(2)]);
var inst_16795 = (inst_16794__$1 == null);
var state_16829__$1 = (function (){var statearr_16834 = state_16829;
(statearr_16834[(7)] = inst_16794__$1);

return statearr_16834;
})();
if(cljs.core.truth_(inst_16795)){
var statearr_16835_16900 = state_16829__$1;
(statearr_16835_16900[(1)] = (5));

} else {
var statearr_16836_16901 = state_16829__$1;
(statearr_16836_16901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (15))){
var inst_16807 = (state_16829[(8)]);
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16829__$1,(18),to,inst_16807);
} else {
if((state_val_16830 === (21))){
var inst_16820 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16837_16902 = state_16829__$1;
(statearr_16837_16902[(2)] = inst_16820);

(statearr_16837_16902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (13))){
var inst_16822 = (state_16829[(2)]);
var state_16829__$1 = (function (){var statearr_16838 = state_16829;
(statearr_16838[(9)] = inst_16822);

return statearr_16838;
})();
var statearr_16839_16903 = state_16829__$1;
(statearr_16839_16903[(2)] = null);

(statearr_16839_16903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (6))){
var inst_16794 = (state_16829[(7)]);
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16829__$1,(11),inst_16794);
} else {
if((state_val_16830 === (17))){
var inst_16815 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
if(cljs.core.truth_(inst_16815)){
var statearr_16840_16904 = state_16829__$1;
(statearr_16840_16904[(1)] = (19));

} else {
var statearr_16841_16905 = state_16829__$1;
(statearr_16841_16905[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (3))){
var inst_16827 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16829__$1,inst_16827);
} else {
if((state_val_16830 === (12))){
var inst_16804 = (state_16829[(10)]);
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16829__$1,(14),inst_16804);
} else {
if((state_val_16830 === (2))){
var state_16829__$1 = state_16829;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16829__$1,(4),results);
} else {
if((state_val_16830 === (19))){
var state_16829__$1 = state_16829;
var statearr_16842_16906 = state_16829__$1;
(statearr_16842_16906[(2)] = null);

(statearr_16842_16906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (11))){
var inst_16804 = (state_16829[(2)]);
var state_16829__$1 = (function (){var statearr_16843 = state_16829;
(statearr_16843[(10)] = inst_16804);

return statearr_16843;
})();
var statearr_16844_16907 = state_16829__$1;
(statearr_16844_16907[(2)] = null);

(statearr_16844_16907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (9))){
var state_16829__$1 = state_16829;
var statearr_16845_16908 = state_16829__$1;
(statearr_16845_16908[(2)] = null);

(statearr_16845_16908[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (5))){
var state_16829__$1 = state_16829;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16846_16909 = state_16829__$1;
(statearr_16846_16909[(1)] = (8));

} else {
var statearr_16847_16910 = state_16829__$1;
(statearr_16847_16910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (14))){
var inst_16809 = (state_16829[(11)]);
var inst_16807 = (state_16829[(8)]);
var inst_16807__$1 = (state_16829[(2)]);
var inst_16808 = (inst_16807__$1 == null);
var inst_16809__$1 = cljs.core.not.call(null,inst_16808);
var state_16829__$1 = (function (){var statearr_16848 = state_16829;
(statearr_16848[(11)] = inst_16809__$1);

(statearr_16848[(8)] = inst_16807__$1);

return statearr_16848;
})();
if(inst_16809__$1){
var statearr_16849_16911 = state_16829__$1;
(statearr_16849_16911[(1)] = (15));

} else {
var statearr_16850_16912 = state_16829__$1;
(statearr_16850_16912[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (16))){
var inst_16809 = (state_16829[(11)]);
var state_16829__$1 = state_16829;
var statearr_16851_16913 = state_16829__$1;
(statearr_16851_16913[(2)] = inst_16809);

(statearr_16851_16913[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (10))){
var inst_16801 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16852_16914 = state_16829__$1;
(statearr_16852_16914[(2)] = inst_16801);

(statearr_16852_16914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (18))){
var inst_16812 = (state_16829[(2)]);
var state_16829__$1 = state_16829;
var statearr_16853_16915 = state_16829__$1;
(statearr_16853_16915[(2)] = inst_16812);

(statearr_16853_16915[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16830 === (8))){
var inst_16798 = cljs.core.async.close_BANG_.call(null,to);
var state_16829__$1 = state_16829;
var statearr_16854_16916 = state_16829__$1;
(statearr_16854_16916[(2)] = inst_16798);

(statearr_16854_16916[(1)] = (10));


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
});})(c__5977__auto__,jobs,results,process,async))
;
return ((function (switch__5962__auto__,c__5977__auto__,jobs,results,process,async){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_16858 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16858[(0)] = state_machine__5963__auto__);

(statearr_16858[(1)] = (1));

return statearr_16858;
});
var state_machine__5963__auto____1 = (function (state_16829){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_16829);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e16859){if((e16859 instanceof Object)){
var ex__5966__auto__ = e16859;
var statearr_16860_16917 = state_16829;
(statearr_16860_16917[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16829);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16918 = state_16829;
state_16829 = G__16918;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_16829){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_16829);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto__,jobs,results,process,async))
})();
var state__5979__auto__ = (function (){var statearr_16861 = f__5978__auto__.call(null);
(statearr_16861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto__);

return statearr_16861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto__,jobs,results,process,async))
);

return c__5977__auto__;
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
var c__5977__auto___17019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___17019,tc,fc){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___17019,tc,fc){
return (function (state_16994){
var state_val_16995 = (state_16994[(1)]);
if((state_val_16995 === (7))){
var inst_16990 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_16996_17020 = state_16994__$1;
(statearr_16996_17020[(2)] = inst_16990);

(statearr_16996_17020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (1))){
var state_16994__$1 = state_16994;
var statearr_16997_17021 = state_16994__$1;
(statearr_16997_17021[(2)] = null);

(statearr_16997_17021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (4))){
var inst_16971 = (state_16994[(7)]);
var inst_16971__$1 = (state_16994[(2)]);
var inst_16972 = (inst_16971__$1 == null);
var state_16994__$1 = (function (){var statearr_16998 = state_16994;
(statearr_16998[(7)] = inst_16971__$1);

return statearr_16998;
})();
if(cljs.core.truth_(inst_16972)){
var statearr_16999_17022 = state_16994__$1;
(statearr_16999_17022[(1)] = (5));

} else {
var statearr_17000_17023 = state_16994__$1;
(statearr_17000_17023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (13))){
var state_16994__$1 = state_16994;
var statearr_17001_17024 = state_16994__$1;
(statearr_17001_17024[(2)] = null);

(statearr_17001_17024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (6))){
var inst_16971 = (state_16994[(7)]);
var inst_16977 = p.call(null,inst_16971);
var state_16994__$1 = state_16994;
if(cljs.core.truth_(inst_16977)){
var statearr_17002_17025 = state_16994__$1;
(statearr_17002_17025[(1)] = (9));

} else {
var statearr_17003_17026 = state_16994__$1;
(statearr_17003_17026[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (3))){
var inst_16992 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16994__$1,inst_16992);
} else {
if((state_val_16995 === (12))){
var state_16994__$1 = state_16994;
var statearr_17004_17027 = state_16994__$1;
(statearr_17004_17027[(2)] = null);

(statearr_17004_17027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (2))){
var state_16994__$1 = state_16994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16994__$1,(4),ch);
} else {
if((state_val_16995 === (11))){
var inst_16971 = (state_16994[(7)]);
var inst_16981 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16994__$1,(8),inst_16981,inst_16971);
} else {
if((state_val_16995 === (9))){
var state_16994__$1 = state_16994;
var statearr_17005_17028 = state_16994__$1;
(statearr_17005_17028[(2)] = tc);

(statearr_17005_17028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (5))){
var inst_16974 = cljs.core.async.close_BANG_.call(null,tc);
var inst_16975 = cljs.core.async.close_BANG_.call(null,fc);
var state_16994__$1 = (function (){var statearr_17006 = state_16994;
(statearr_17006[(8)] = inst_16974);

return statearr_17006;
})();
var statearr_17007_17029 = state_16994__$1;
(statearr_17007_17029[(2)] = inst_16975);

(statearr_17007_17029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (14))){
var inst_16988 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
var statearr_17008_17030 = state_16994__$1;
(statearr_17008_17030[(2)] = inst_16988);

(statearr_17008_17030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (10))){
var state_16994__$1 = state_16994;
var statearr_17009_17031 = state_16994__$1;
(statearr_17009_17031[(2)] = fc);

(statearr_17009_17031[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16995 === (8))){
var inst_16983 = (state_16994[(2)]);
var state_16994__$1 = state_16994;
if(cljs.core.truth_(inst_16983)){
var statearr_17010_17032 = state_16994__$1;
(statearr_17010_17032[(1)] = (12));

} else {
var statearr_17011_17033 = state_16994__$1;
(statearr_17011_17033[(1)] = (13));

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
});})(c__5977__auto___17019,tc,fc))
;
return ((function (switch__5962__auto__,c__5977__auto___17019,tc,fc){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_17015 = [null,null,null,null,null,null,null,null,null];
(statearr_17015[(0)] = state_machine__5963__auto__);

(statearr_17015[(1)] = (1));

return statearr_17015;
});
var state_machine__5963__auto____1 = (function (state_16994){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_16994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e17016){if((e17016 instanceof Object)){
var ex__5966__auto__ = e17016;
var statearr_17017_17034 = state_16994;
(statearr_17017_17034[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17035 = state_16994;
state_16994 = G__17035;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_16994){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_16994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___17019,tc,fc))
})();
var state__5979__auto__ = (function (){var statearr_17018 = f__5978__auto__.call(null);
(statearr_17018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___17019);

return statearr_17018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___17019,tc,fc))
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
var c__5977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto__){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto__){
return (function (state_17082){
var state_val_17083 = (state_17082[(1)]);
if((state_val_17083 === (7))){
var inst_17078 = (state_17082[(2)]);
var state_17082__$1 = state_17082;
var statearr_17084_17100 = state_17082__$1;
(statearr_17084_17100[(2)] = inst_17078);

(statearr_17084_17100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (6))){
var inst_17068 = (state_17082[(7)]);
var inst_17071 = (state_17082[(8)]);
var inst_17075 = f.call(null,inst_17068,inst_17071);
var inst_17068__$1 = inst_17075;
var state_17082__$1 = (function (){var statearr_17085 = state_17082;
(statearr_17085[(7)] = inst_17068__$1);

return statearr_17085;
})();
var statearr_17086_17101 = state_17082__$1;
(statearr_17086_17101[(2)] = null);

(statearr_17086_17101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (5))){
var inst_17068 = (state_17082[(7)]);
var state_17082__$1 = state_17082;
var statearr_17087_17102 = state_17082__$1;
(statearr_17087_17102[(2)] = inst_17068);

(statearr_17087_17102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (4))){
var inst_17071 = (state_17082[(8)]);
var inst_17071__$1 = (state_17082[(2)]);
var inst_17072 = (inst_17071__$1 == null);
var state_17082__$1 = (function (){var statearr_17088 = state_17082;
(statearr_17088[(8)] = inst_17071__$1);

return statearr_17088;
})();
if(cljs.core.truth_(inst_17072)){
var statearr_17089_17103 = state_17082__$1;
(statearr_17089_17103[(1)] = (5));

} else {
var statearr_17090_17104 = state_17082__$1;
(statearr_17090_17104[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17083 === (3))){
var inst_17080 = (state_17082[(2)]);
var state_17082__$1 = state_17082;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17082__$1,inst_17080);
} else {
if((state_val_17083 === (2))){
var state_17082__$1 = state_17082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17082__$1,(4),ch);
} else {
if((state_val_17083 === (1))){
var inst_17068 = init;
var state_17082__$1 = (function (){var statearr_17091 = state_17082;
(statearr_17091[(7)] = inst_17068);

return statearr_17091;
})();
var statearr_17092_17105 = state_17082__$1;
(statearr_17092_17105[(2)] = null);

(statearr_17092_17105[(1)] = (2));


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
});})(c__5977__auto__))
;
return ((function (switch__5962__auto__,c__5977__auto__){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_17096 = [null,null,null,null,null,null,null,null,null];
(statearr_17096[(0)] = state_machine__5963__auto__);

(statearr_17096[(1)] = (1));

return statearr_17096;
});
var state_machine__5963__auto____1 = (function (state_17082){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_17082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e17097){if((e17097 instanceof Object)){
var ex__5966__auto__ = e17097;
var statearr_17098_17106 = state_17082;
(statearr_17098_17106[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17107 = state_17082;
state_17082 = G__17107;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_17082){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_17082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto__))
})();
var state__5979__auto__ = (function (){var statearr_17099 = f__5978__auto__.call(null);
(statearr_17099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto__);

return statearr_17099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto__))
);

return c__5977__auto__;
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
var c__5977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto__){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto__){
return (function (state_17181){
var state_val_17182 = (state_17181[(1)]);
if((state_val_17182 === (7))){
var inst_17163 = (state_17181[(2)]);
var state_17181__$1 = state_17181;
var statearr_17183_17206 = state_17181__$1;
(statearr_17183_17206[(2)] = inst_17163);

(statearr_17183_17206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (1))){
var inst_17157 = cljs.core.seq.call(null,coll);
var inst_17158 = inst_17157;
var state_17181__$1 = (function (){var statearr_17184 = state_17181;
(statearr_17184[(7)] = inst_17158);

return statearr_17184;
})();
var statearr_17185_17207 = state_17181__$1;
(statearr_17185_17207[(2)] = null);

(statearr_17185_17207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (4))){
var inst_17158 = (state_17181[(7)]);
var inst_17161 = cljs.core.first.call(null,inst_17158);
var state_17181__$1 = state_17181;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17181__$1,(7),ch,inst_17161);
} else {
if((state_val_17182 === (13))){
var inst_17175 = (state_17181[(2)]);
var state_17181__$1 = state_17181;
var statearr_17186_17208 = state_17181__$1;
(statearr_17186_17208[(2)] = inst_17175);

(statearr_17186_17208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (6))){
var inst_17166 = (state_17181[(2)]);
var state_17181__$1 = state_17181;
if(cljs.core.truth_(inst_17166)){
var statearr_17187_17209 = state_17181__$1;
(statearr_17187_17209[(1)] = (8));

} else {
var statearr_17188_17210 = state_17181__$1;
(statearr_17188_17210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (3))){
var inst_17179 = (state_17181[(2)]);
var state_17181__$1 = state_17181;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17181__$1,inst_17179);
} else {
if((state_val_17182 === (12))){
var state_17181__$1 = state_17181;
var statearr_17189_17211 = state_17181__$1;
(statearr_17189_17211[(2)] = null);

(statearr_17189_17211[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (2))){
var inst_17158 = (state_17181[(7)]);
var state_17181__$1 = state_17181;
if(cljs.core.truth_(inst_17158)){
var statearr_17190_17212 = state_17181__$1;
(statearr_17190_17212[(1)] = (4));

} else {
var statearr_17191_17213 = state_17181__$1;
(statearr_17191_17213[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (11))){
var inst_17172 = cljs.core.async.close_BANG_.call(null,ch);
var state_17181__$1 = state_17181;
var statearr_17192_17214 = state_17181__$1;
(statearr_17192_17214[(2)] = inst_17172);

(statearr_17192_17214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (9))){
var state_17181__$1 = state_17181;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17193_17215 = state_17181__$1;
(statearr_17193_17215[(1)] = (11));

} else {
var statearr_17194_17216 = state_17181__$1;
(statearr_17194_17216[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (5))){
var inst_17158 = (state_17181[(7)]);
var state_17181__$1 = state_17181;
var statearr_17195_17217 = state_17181__$1;
(statearr_17195_17217[(2)] = inst_17158);

(statearr_17195_17217[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (10))){
var inst_17177 = (state_17181[(2)]);
var state_17181__$1 = state_17181;
var statearr_17196_17218 = state_17181__$1;
(statearr_17196_17218[(2)] = inst_17177);

(statearr_17196_17218[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17182 === (8))){
var inst_17158 = (state_17181[(7)]);
var inst_17168 = cljs.core.next.call(null,inst_17158);
var inst_17158__$1 = inst_17168;
var state_17181__$1 = (function (){var statearr_17197 = state_17181;
(statearr_17197[(7)] = inst_17158__$1);

return statearr_17197;
})();
var statearr_17198_17219 = state_17181__$1;
(statearr_17198_17219[(2)] = null);

(statearr_17198_17219[(1)] = (2));


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
});})(c__5977__auto__))
;
return ((function (switch__5962__auto__,c__5977__auto__){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_17202 = [null,null,null,null,null,null,null,null];
(statearr_17202[(0)] = state_machine__5963__auto__);

(statearr_17202[(1)] = (1));

return statearr_17202;
});
var state_machine__5963__auto____1 = (function (state_17181){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_17181);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e17203){if((e17203 instanceof Object)){
var ex__5966__auto__ = e17203;
var statearr_17204_17220 = state_17181;
(statearr_17204_17220[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17181);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17203;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17221 = state_17181;
state_17181 = G__17221;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_17181){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_17181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto__))
})();
var state__5979__auto__ = (function (){var statearr_17205 = f__5978__auto__.call(null);
(statearr_17205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto__);

return statearr_17205;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto__))
);

return c__5977__auto__;
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

cljs.core.async.Mux = (function (){var obj17223 = {};
return obj17223;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3742__auto__ = _;
if(and__3742__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3742__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4398__auto__ = (((_ == null))?null:_);
return (function (){var or__3754__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj17225 = {};
return obj17225;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3742__auto__ = m;
if(and__3742__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3742__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4398__auto__ = (((m == null))?null:m);
return (function (){var or__3754__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3742__auto__ = m;
if(and__3742__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3742__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4398__auto__ = (((m == null))?null:m);
return (function (){var or__3754__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3742__auto__ = m;
if(and__3742__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3742__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4398__auto__ = (((m == null))?null:m);
return (function (){var or__3754__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
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
if(typeof cljs.core.async.t17447 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17447 = (function (cs,ch,mult,meta17448){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17448 = meta17448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17447.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t17447.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t17447.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t17447.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t17447.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17447.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t17447.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17449){
var self__ = this;
var _17449__$1 = this;
return self__.meta17448;
});})(cs))
;

cljs.core.async.t17447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17449,meta17448__$1){
var self__ = this;
var _17449__$1 = this;
return (new cljs.core.async.t17447(self__.cs,self__.ch,self__.mult,meta17448__$1));
});})(cs))
;

cljs.core.async.t17447.cljs$lang$type = true;

cljs.core.async.t17447.cljs$lang$ctorStr = "cljs.core.async/t17447";

cljs.core.async.t17447.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cljs.core.async/t17447");
});})(cs))
;

cljs.core.async.__GT_t17447 = ((function (cs){
return (function __GT_t17447(cs__$1,ch__$1,mult__$1,meta17448){
return (new cljs.core.async.t17447(cs__$1,ch__$1,mult__$1,meta17448));
});})(cs))
;

}

return (new cljs.core.async.t17447(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__5977__auto___17668 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___17668,cs,m,dchan,dctr,done){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___17668,cs,m,dchan,dctr,done){
return (function (state_17580){
var state_val_17581 = (state_17580[(1)]);
if((state_val_17581 === (7))){
var inst_17576 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17582_17669 = state_17580__$1;
(statearr_17582_17669[(2)] = inst_17576);

(statearr_17582_17669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (20))){
var inst_17481 = (state_17580[(7)]);
var inst_17491 = cljs.core.first.call(null,inst_17481);
var inst_17492 = cljs.core.nth.call(null,inst_17491,(0),null);
var inst_17493 = cljs.core.nth.call(null,inst_17491,(1),null);
var state_17580__$1 = (function (){var statearr_17583 = state_17580;
(statearr_17583[(8)] = inst_17492);

return statearr_17583;
})();
if(cljs.core.truth_(inst_17493)){
var statearr_17584_17670 = state_17580__$1;
(statearr_17584_17670[(1)] = (22));

} else {
var statearr_17585_17671 = state_17580__$1;
(statearr_17585_17671[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (27))){
var inst_17523 = (state_17580[(9)]);
var inst_17528 = (state_17580[(10)]);
var inst_17452 = (state_17580[(11)]);
var inst_17521 = (state_17580[(12)]);
var inst_17528__$1 = cljs.core._nth.call(null,inst_17521,inst_17523);
var inst_17529 = cljs.core.async.put_BANG_.call(null,inst_17528__$1,inst_17452,done);
var state_17580__$1 = (function (){var statearr_17586 = state_17580;
(statearr_17586[(10)] = inst_17528__$1);

return statearr_17586;
})();
if(cljs.core.truth_(inst_17529)){
var statearr_17587_17672 = state_17580__$1;
(statearr_17587_17672[(1)] = (30));

} else {
var statearr_17588_17673 = state_17580__$1;
(statearr_17588_17673[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (1))){
var state_17580__$1 = state_17580;
var statearr_17589_17674 = state_17580__$1;
(statearr_17589_17674[(2)] = null);

(statearr_17589_17674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (24))){
var inst_17481 = (state_17580[(7)]);
var inst_17498 = (state_17580[(2)]);
var inst_17499 = cljs.core.next.call(null,inst_17481);
var inst_17461 = inst_17499;
var inst_17462 = null;
var inst_17463 = (0);
var inst_17464 = (0);
var state_17580__$1 = (function (){var statearr_17590 = state_17580;
(statearr_17590[(13)] = inst_17463);

(statearr_17590[(14)] = inst_17461);

(statearr_17590[(15)] = inst_17498);

(statearr_17590[(16)] = inst_17462);

(statearr_17590[(17)] = inst_17464);

return statearr_17590;
})();
var statearr_17591_17675 = state_17580__$1;
(statearr_17591_17675[(2)] = null);

(statearr_17591_17675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (39))){
var state_17580__$1 = state_17580;
var statearr_17595_17676 = state_17580__$1;
(statearr_17595_17676[(2)] = null);

(statearr_17595_17676[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (4))){
var inst_17452 = (state_17580[(11)]);
var inst_17452__$1 = (state_17580[(2)]);
var inst_17453 = (inst_17452__$1 == null);
var state_17580__$1 = (function (){var statearr_17596 = state_17580;
(statearr_17596[(11)] = inst_17452__$1);

return statearr_17596;
})();
if(cljs.core.truth_(inst_17453)){
var statearr_17597_17677 = state_17580__$1;
(statearr_17597_17677[(1)] = (5));

} else {
var statearr_17598_17678 = state_17580__$1;
(statearr_17598_17678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (15))){
var inst_17463 = (state_17580[(13)]);
var inst_17461 = (state_17580[(14)]);
var inst_17462 = (state_17580[(16)]);
var inst_17464 = (state_17580[(17)]);
var inst_17477 = (state_17580[(2)]);
var inst_17478 = (inst_17464 + (1));
var tmp17592 = inst_17463;
var tmp17593 = inst_17461;
var tmp17594 = inst_17462;
var inst_17461__$1 = tmp17593;
var inst_17462__$1 = tmp17594;
var inst_17463__$1 = tmp17592;
var inst_17464__$1 = inst_17478;
var state_17580__$1 = (function (){var statearr_17599 = state_17580;
(statearr_17599[(13)] = inst_17463__$1);

(statearr_17599[(14)] = inst_17461__$1);

(statearr_17599[(16)] = inst_17462__$1);

(statearr_17599[(17)] = inst_17464__$1);

(statearr_17599[(18)] = inst_17477);

return statearr_17599;
})();
var statearr_17600_17679 = state_17580__$1;
(statearr_17600_17679[(2)] = null);

(statearr_17600_17679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (21))){
var inst_17502 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17604_17680 = state_17580__$1;
(statearr_17604_17680[(2)] = inst_17502);

(statearr_17604_17680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (31))){
var inst_17528 = (state_17580[(10)]);
var inst_17532 = done.call(null,null);
var inst_17533 = cljs.core.async.untap_STAR_.call(null,m,inst_17528);
var state_17580__$1 = (function (){var statearr_17605 = state_17580;
(statearr_17605[(19)] = inst_17532);

return statearr_17605;
})();
var statearr_17606_17681 = state_17580__$1;
(statearr_17606_17681[(2)] = inst_17533);

(statearr_17606_17681[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (32))){
var inst_17523 = (state_17580[(9)]);
var inst_17520 = (state_17580[(20)]);
var inst_17522 = (state_17580[(21)]);
var inst_17521 = (state_17580[(12)]);
var inst_17535 = (state_17580[(2)]);
var inst_17536 = (inst_17523 + (1));
var tmp17601 = inst_17520;
var tmp17602 = inst_17522;
var tmp17603 = inst_17521;
var inst_17520__$1 = tmp17601;
var inst_17521__$1 = tmp17603;
var inst_17522__$1 = tmp17602;
var inst_17523__$1 = inst_17536;
var state_17580__$1 = (function (){var statearr_17607 = state_17580;
(statearr_17607[(9)] = inst_17523__$1);

(statearr_17607[(20)] = inst_17520__$1);

(statearr_17607[(21)] = inst_17522__$1);

(statearr_17607[(12)] = inst_17521__$1);

(statearr_17607[(22)] = inst_17535);

return statearr_17607;
})();
var statearr_17608_17682 = state_17580__$1;
(statearr_17608_17682[(2)] = null);

(statearr_17608_17682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (40))){
var inst_17548 = (state_17580[(23)]);
var inst_17552 = done.call(null,null);
var inst_17553 = cljs.core.async.untap_STAR_.call(null,m,inst_17548);
var state_17580__$1 = (function (){var statearr_17609 = state_17580;
(statearr_17609[(24)] = inst_17552);

return statearr_17609;
})();
var statearr_17610_17683 = state_17580__$1;
(statearr_17610_17683[(2)] = inst_17553);

(statearr_17610_17683[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (33))){
var inst_17539 = (state_17580[(25)]);
var inst_17541 = cljs.core.chunked_seq_QMARK_.call(null,inst_17539);
var state_17580__$1 = state_17580;
if(inst_17541){
var statearr_17611_17684 = state_17580__$1;
(statearr_17611_17684[(1)] = (36));

} else {
var statearr_17612_17685 = state_17580__$1;
(statearr_17612_17685[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (13))){
var inst_17471 = (state_17580[(26)]);
var inst_17474 = cljs.core.async.close_BANG_.call(null,inst_17471);
var state_17580__$1 = state_17580;
var statearr_17613_17686 = state_17580__$1;
(statearr_17613_17686[(2)] = inst_17474);

(statearr_17613_17686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (22))){
var inst_17492 = (state_17580[(8)]);
var inst_17495 = cljs.core.async.close_BANG_.call(null,inst_17492);
var state_17580__$1 = state_17580;
var statearr_17614_17687 = state_17580__$1;
(statearr_17614_17687[(2)] = inst_17495);

(statearr_17614_17687[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (36))){
var inst_17539 = (state_17580[(25)]);
var inst_17543 = cljs.core.chunk_first.call(null,inst_17539);
var inst_17544 = cljs.core.chunk_rest.call(null,inst_17539);
var inst_17545 = cljs.core.count.call(null,inst_17543);
var inst_17520 = inst_17544;
var inst_17521 = inst_17543;
var inst_17522 = inst_17545;
var inst_17523 = (0);
var state_17580__$1 = (function (){var statearr_17615 = state_17580;
(statearr_17615[(9)] = inst_17523);

(statearr_17615[(20)] = inst_17520);

(statearr_17615[(21)] = inst_17522);

(statearr_17615[(12)] = inst_17521);

return statearr_17615;
})();
var statearr_17616_17688 = state_17580__$1;
(statearr_17616_17688[(2)] = null);

(statearr_17616_17688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (41))){
var inst_17539 = (state_17580[(25)]);
var inst_17555 = (state_17580[(2)]);
var inst_17556 = cljs.core.next.call(null,inst_17539);
var inst_17520 = inst_17556;
var inst_17521 = null;
var inst_17522 = (0);
var inst_17523 = (0);
var state_17580__$1 = (function (){var statearr_17617 = state_17580;
(statearr_17617[(9)] = inst_17523);

(statearr_17617[(20)] = inst_17520);

(statearr_17617[(27)] = inst_17555);

(statearr_17617[(21)] = inst_17522);

(statearr_17617[(12)] = inst_17521);

return statearr_17617;
})();
var statearr_17618_17689 = state_17580__$1;
(statearr_17618_17689[(2)] = null);

(statearr_17618_17689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (43))){
var state_17580__$1 = state_17580;
var statearr_17619_17690 = state_17580__$1;
(statearr_17619_17690[(2)] = null);

(statearr_17619_17690[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (29))){
var inst_17564 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17620_17691 = state_17580__$1;
(statearr_17620_17691[(2)] = inst_17564);

(statearr_17620_17691[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (44))){
var inst_17573 = (state_17580[(2)]);
var state_17580__$1 = (function (){var statearr_17621 = state_17580;
(statearr_17621[(28)] = inst_17573);

return statearr_17621;
})();
var statearr_17622_17692 = state_17580__$1;
(statearr_17622_17692[(2)] = null);

(statearr_17622_17692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (6))){
var inst_17512 = (state_17580[(29)]);
var inst_17511 = cljs.core.deref.call(null,cs);
var inst_17512__$1 = cljs.core.keys.call(null,inst_17511);
var inst_17513 = cljs.core.count.call(null,inst_17512__$1);
var inst_17514 = cljs.core.reset_BANG_.call(null,dctr,inst_17513);
var inst_17519 = cljs.core.seq.call(null,inst_17512__$1);
var inst_17520 = inst_17519;
var inst_17521 = null;
var inst_17522 = (0);
var inst_17523 = (0);
var state_17580__$1 = (function (){var statearr_17623 = state_17580;
(statearr_17623[(9)] = inst_17523);

(statearr_17623[(30)] = inst_17514);

(statearr_17623[(20)] = inst_17520);

(statearr_17623[(21)] = inst_17522);

(statearr_17623[(12)] = inst_17521);

(statearr_17623[(29)] = inst_17512__$1);

return statearr_17623;
})();
var statearr_17624_17693 = state_17580__$1;
(statearr_17624_17693[(2)] = null);

(statearr_17624_17693[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (28))){
var inst_17539 = (state_17580[(25)]);
var inst_17520 = (state_17580[(20)]);
var inst_17539__$1 = cljs.core.seq.call(null,inst_17520);
var state_17580__$1 = (function (){var statearr_17625 = state_17580;
(statearr_17625[(25)] = inst_17539__$1);

return statearr_17625;
})();
if(inst_17539__$1){
var statearr_17626_17694 = state_17580__$1;
(statearr_17626_17694[(1)] = (33));

} else {
var statearr_17627_17695 = state_17580__$1;
(statearr_17627_17695[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (25))){
var inst_17523 = (state_17580[(9)]);
var inst_17522 = (state_17580[(21)]);
var inst_17525 = (inst_17523 < inst_17522);
var inst_17526 = inst_17525;
var state_17580__$1 = state_17580;
if(cljs.core.truth_(inst_17526)){
var statearr_17628_17696 = state_17580__$1;
(statearr_17628_17696[(1)] = (27));

} else {
var statearr_17629_17697 = state_17580__$1;
(statearr_17629_17697[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (34))){
var state_17580__$1 = state_17580;
var statearr_17630_17698 = state_17580__$1;
(statearr_17630_17698[(2)] = null);

(statearr_17630_17698[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (17))){
var state_17580__$1 = state_17580;
var statearr_17631_17699 = state_17580__$1;
(statearr_17631_17699[(2)] = null);

(statearr_17631_17699[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (3))){
var inst_17578 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17580__$1,inst_17578);
} else {
if((state_val_17581 === (12))){
var inst_17507 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17632_17700 = state_17580__$1;
(statearr_17632_17700[(2)] = inst_17507);

(statearr_17632_17700[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (2))){
var state_17580__$1 = state_17580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17580__$1,(4),ch);
} else {
if((state_val_17581 === (23))){
var state_17580__$1 = state_17580;
var statearr_17633_17701 = state_17580__$1;
(statearr_17633_17701[(2)] = null);

(statearr_17633_17701[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (35))){
var inst_17562 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17634_17702 = state_17580__$1;
(statearr_17634_17702[(2)] = inst_17562);

(statearr_17634_17702[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (19))){
var inst_17481 = (state_17580[(7)]);
var inst_17485 = cljs.core.chunk_first.call(null,inst_17481);
var inst_17486 = cljs.core.chunk_rest.call(null,inst_17481);
var inst_17487 = cljs.core.count.call(null,inst_17485);
var inst_17461 = inst_17486;
var inst_17462 = inst_17485;
var inst_17463 = inst_17487;
var inst_17464 = (0);
var state_17580__$1 = (function (){var statearr_17635 = state_17580;
(statearr_17635[(13)] = inst_17463);

(statearr_17635[(14)] = inst_17461);

(statearr_17635[(16)] = inst_17462);

(statearr_17635[(17)] = inst_17464);

return statearr_17635;
})();
var statearr_17636_17703 = state_17580__$1;
(statearr_17636_17703[(2)] = null);

(statearr_17636_17703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (11))){
var inst_17481 = (state_17580[(7)]);
var inst_17461 = (state_17580[(14)]);
var inst_17481__$1 = cljs.core.seq.call(null,inst_17461);
var state_17580__$1 = (function (){var statearr_17637 = state_17580;
(statearr_17637[(7)] = inst_17481__$1);

return statearr_17637;
})();
if(inst_17481__$1){
var statearr_17638_17704 = state_17580__$1;
(statearr_17638_17704[(1)] = (16));

} else {
var statearr_17639_17705 = state_17580__$1;
(statearr_17639_17705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (9))){
var inst_17509 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17640_17706 = state_17580__$1;
(statearr_17640_17706[(2)] = inst_17509);

(statearr_17640_17706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (5))){
var inst_17459 = cljs.core.deref.call(null,cs);
var inst_17460 = cljs.core.seq.call(null,inst_17459);
var inst_17461 = inst_17460;
var inst_17462 = null;
var inst_17463 = (0);
var inst_17464 = (0);
var state_17580__$1 = (function (){var statearr_17641 = state_17580;
(statearr_17641[(13)] = inst_17463);

(statearr_17641[(14)] = inst_17461);

(statearr_17641[(16)] = inst_17462);

(statearr_17641[(17)] = inst_17464);

return statearr_17641;
})();
var statearr_17642_17707 = state_17580__$1;
(statearr_17642_17707[(2)] = null);

(statearr_17642_17707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (14))){
var state_17580__$1 = state_17580;
var statearr_17643_17708 = state_17580__$1;
(statearr_17643_17708[(2)] = null);

(statearr_17643_17708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (45))){
var inst_17570 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17644_17709 = state_17580__$1;
(statearr_17644_17709[(2)] = inst_17570);

(statearr_17644_17709[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (26))){
var inst_17512 = (state_17580[(29)]);
var inst_17566 = (state_17580[(2)]);
var inst_17567 = cljs.core.seq.call(null,inst_17512);
var state_17580__$1 = (function (){var statearr_17645 = state_17580;
(statearr_17645[(31)] = inst_17566);

return statearr_17645;
})();
if(inst_17567){
var statearr_17646_17710 = state_17580__$1;
(statearr_17646_17710[(1)] = (42));

} else {
var statearr_17647_17711 = state_17580__$1;
(statearr_17647_17711[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (16))){
var inst_17481 = (state_17580[(7)]);
var inst_17483 = cljs.core.chunked_seq_QMARK_.call(null,inst_17481);
var state_17580__$1 = state_17580;
if(inst_17483){
var statearr_17648_17712 = state_17580__$1;
(statearr_17648_17712[(1)] = (19));

} else {
var statearr_17649_17713 = state_17580__$1;
(statearr_17649_17713[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (38))){
var inst_17559 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17650_17714 = state_17580__$1;
(statearr_17650_17714[(2)] = inst_17559);

(statearr_17650_17714[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (30))){
var state_17580__$1 = state_17580;
var statearr_17651_17715 = state_17580__$1;
(statearr_17651_17715[(2)] = null);

(statearr_17651_17715[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (10))){
var inst_17462 = (state_17580[(16)]);
var inst_17464 = (state_17580[(17)]);
var inst_17470 = cljs.core._nth.call(null,inst_17462,inst_17464);
var inst_17471 = cljs.core.nth.call(null,inst_17470,(0),null);
var inst_17472 = cljs.core.nth.call(null,inst_17470,(1),null);
var state_17580__$1 = (function (){var statearr_17652 = state_17580;
(statearr_17652[(26)] = inst_17471);

return statearr_17652;
})();
if(cljs.core.truth_(inst_17472)){
var statearr_17653_17716 = state_17580__$1;
(statearr_17653_17716[(1)] = (13));

} else {
var statearr_17654_17717 = state_17580__$1;
(statearr_17654_17717[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (18))){
var inst_17505 = (state_17580[(2)]);
var state_17580__$1 = state_17580;
var statearr_17655_17718 = state_17580__$1;
(statearr_17655_17718[(2)] = inst_17505);

(statearr_17655_17718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (42))){
var state_17580__$1 = state_17580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17580__$1,(45),dchan);
} else {
if((state_val_17581 === (37))){
var inst_17539 = (state_17580[(25)]);
var inst_17452 = (state_17580[(11)]);
var inst_17548 = (state_17580[(23)]);
var inst_17548__$1 = cljs.core.first.call(null,inst_17539);
var inst_17549 = cljs.core.async.put_BANG_.call(null,inst_17548__$1,inst_17452,done);
var state_17580__$1 = (function (){var statearr_17656 = state_17580;
(statearr_17656[(23)] = inst_17548__$1);

return statearr_17656;
})();
if(cljs.core.truth_(inst_17549)){
var statearr_17657_17719 = state_17580__$1;
(statearr_17657_17719[(1)] = (39));

} else {
var statearr_17658_17720 = state_17580__$1;
(statearr_17658_17720[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17581 === (8))){
var inst_17463 = (state_17580[(13)]);
var inst_17464 = (state_17580[(17)]);
var inst_17466 = (inst_17464 < inst_17463);
var inst_17467 = inst_17466;
var state_17580__$1 = state_17580;
if(cljs.core.truth_(inst_17467)){
var statearr_17659_17721 = state_17580__$1;
(statearr_17659_17721[(1)] = (10));

} else {
var statearr_17660_17722 = state_17580__$1;
(statearr_17660_17722[(1)] = (11));

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
});})(c__5977__auto___17668,cs,m,dchan,dctr,done))
;
return ((function (switch__5962__auto__,c__5977__auto___17668,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_17664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17664[(0)] = state_machine__5963__auto__);

(statearr_17664[(1)] = (1));

return statearr_17664;
});
var state_machine__5963__auto____1 = (function (state_17580){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_17580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e17665){if((e17665 instanceof Object)){
var ex__5966__auto__ = e17665;
var statearr_17666_17723 = state_17580;
(statearr_17666_17723[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17724 = state_17580;
state_17580 = G__17724;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_17580){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_17580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___17668,cs,m,dchan,dctr,done))
})();
var state__5979__auto__ = (function (){var statearr_17667 = f__5978__auto__.call(null);
(statearr_17667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___17668);

return statearr_17667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___17668,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj17726 = {};
return obj17726;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3742__auto__ = m;
if(and__3742__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3742__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4398__auto__ = (((m == null))?null:m);
return (function (){var or__3754__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3742__auto__ = m;
if(and__3742__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3742__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4398__auto__ = (((m == null))?null:m);
return (function (){var or__3754__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3742__auto__ = m;
if(and__3742__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3742__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4398__auto__ = (((m == null))?null:m);
return (function (){var or__3754__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3742__auto__ = m;
if(and__3742__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3742__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4398__auto__ = (((m == null))?null:m);
return (function (){var or__3754__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3742__auto__ = m;
if(and__3742__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3742__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4398__auto__ = (((m == null))?null:m);
return (function (){var or__3754__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__17727){
var map__17732 = p__17727;
var map__17732__$1 = ((cljs.core.seq_QMARK_.call(null,map__17732))?cljs.core.apply.call(null,cljs.core.hash_map,map__17732):map__17732);
var opts = map__17732__$1;
var statearr_17733_17736 = state;
(statearr_17733_17736[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__17732,map__17732__$1,opts){
return (function (val){
var statearr_17734_17737 = state;
(statearr_17734_17737[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__17732,map__17732__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_17735_17738 = state;
(statearr_17735_17738[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__17727 = null;
if (arguments.length > 3) {
var G__17739__i = 0, G__17739__a = new Array(arguments.length -  3);
while (G__17739__i < G__17739__a.length) {G__17739__a[G__17739__i] = arguments[G__17739__i + 3]; ++G__17739__i;}
  p__17727 = new cljs.core.IndexedSeq(G__17739__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__17727);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__17740){
var state = cljs.core.first(arglist__17740);
arglist__17740 = cljs.core.next(arglist__17740);
var cont_block = cljs.core.first(arglist__17740);
arglist__17740 = cljs.core.next(arglist__17740);
var ports = cljs.core.first(arglist__17740);
var p__17727 = cljs.core.rest(arglist__17740);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__17727);
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
if(typeof cljs.core.async.t17860 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t17860 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17861){
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
this.meta17861 = meta17861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17860.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t17860.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17860.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17860.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17860.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17860.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t17860.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t17860.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17860.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17862){
var self__ = this;
var _17862__$1 = this;
return self__.meta17861;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17862,meta17861__$1){
var self__ = this;
var _17862__$1 = this;
return (new cljs.core.async.t17860(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17861__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t17860.cljs$lang$type = true;

cljs.core.async.t17860.cljs$lang$ctorStr = "cljs.core.async/t17860";

cljs.core.async.t17860.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cljs.core.async/t17860");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t17860 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17860(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17861){
return (new cljs.core.async.t17860(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17861));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t17860(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__5977__auto___17979 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___17979,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___17979,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17932){
var state_val_17933 = (state_17932[(1)]);
if((state_val_17933 === (7))){
var inst_17876 = (state_17932[(7)]);
var inst_17881 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17876);
var state_17932__$1 = state_17932;
var statearr_17934_17980 = state_17932__$1;
(statearr_17934_17980[(2)] = inst_17881);

(statearr_17934_17980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (20))){
var inst_17891 = (state_17932[(8)]);
var state_17932__$1 = state_17932;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17932__$1,(23),out,inst_17891);
} else {
if((state_val_17933 === (1))){
var inst_17866 = (state_17932[(9)]);
var inst_17866__$1 = calc_state.call(null);
var inst_17867 = cljs.core.seq_QMARK_.call(null,inst_17866__$1);
var state_17932__$1 = (function (){var statearr_17935 = state_17932;
(statearr_17935[(9)] = inst_17866__$1);

return statearr_17935;
})();
if(inst_17867){
var statearr_17936_17981 = state_17932__$1;
(statearr_17936_17981[(1)] = (2));

} else {
var statearr_17937_17982 = state_17932__$1;
(statearr_17937_17982[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (24))){
var inst_17884 = (state_17932[(10)]);
var inst_17876 = inst_17884;
var state_17932__$1 = (function (){var statearr_17938 = state_17932;
(statearr_17938[(7)] = inst_17876);

return statearr_17938;
})();
var statearr_17939_17983 = state_17932__$1;
(statearr_17939_17983[(2)] = null);

(statearr_17939_17983[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (4))){
var inst_17866 = (state_17932[(9)]);
var inst_17872 = (state_17932[(2)]);
var inst_17873 = cljs.core.get.call(null,inst_17872,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17874 = cljs.core.get.call(null,inst_17872,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17875 = cljs.core.get.call(null,inst_17872,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_17876 = inst_17866;
var state_17932__$1 = (function (){var statearr_17940 = state_17932;
(statearr_17940[(7)] = inst_17876);

(statearr_17940[(11)] = inst_17874);

(statearr_17940[(12)] = inst_17875);

(statearr_17940[(13)] = inst_17873);

return statearr_17940;
})();
var statearr_17941_17984 = state_17932__$1;
(statearr_17941_17984[(2)] = null);

(statearr_17941_17984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (15))){
var state_17932__$1 = state_17932;
var statearr_17942_17985 = state_17932__$1;
(statearr_17942_17985[(2)] = null);

(statearr_17942_17985[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (21))){
var inst_17884 = (state_17932[(10)]);
var inst_17876 = inst_17884;
var state_17932__$1 = (function (){var statearr_17943 = state_17932;
(statearr_17943[(7)] = inst_17876);

return statearr_17943;
})();
var statearr_17944_17986 = state_17932__$1;
(statearr_17944_17986[(2)] = null);

(statearr_17944_17986[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (13))){
var inst_17928 = (state_17932[(2)]);
var state_17932__$1 = state_17932;
var statearr_17945_17987 = state_17932__$1;
(statearr_17945_17987[(2)] = inst_17928);

(statearr_17945_17987[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (22))){
var inst_17926 = (state_17932[(2)]);
var state_17932__$1 = state_17932;
var statearr_17946_17988 = state_17932__$1;
(statearr_17946_17988[(2)] = inst_17926);

(statearr_17946_17988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (6))){
var inst_17930 = (state_17932[(2)]);
var state_17932__$1 = state_17932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17932__$1,inst_17930);
} else {
if((state_val_17933 === (25))){
var state_17932__$1 = state_17932;
var statearr_17947_17989 = state_17932__$1;
(statearr_17947_17989[(2)] = null);

(statearr_17947_17989[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (17))){
var inst_17906 = (state_17932[(14)]);
var state_17932__$1 = state_17932;
var statearr_17948_17990 = state_17932__$1;
(statearr_17948_17990[(2)] = inst_17906);

(statearr_17948_17990[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (3))){
var inst_17866 = (state_17932[(9)]);
var state_17932__$1 = state_17932;
var statearr_17949_17991 = state_17932__$1;
(statearr_17949_17991[(2)] = inst_17866);

(statearr_17949_17991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (12))){
var inst_17906 = (state_17932[(14)]);
var inst_17892 = (state_17932[(15)]);
var inst_17887 = (state_17932[(16)]);
var inst_17906__$1 = inst_17887.call(null,inst_17892);
var state_17932__$1 = (function (){var statearr_17950 = state_17932;
(statearr_17950[(14)] = inst_17906__$1);

return statearr_17950;
})();
if(cljs.core.truth_(inst_17906__$1)){
var statearr_17951_17992 = state_17932__$1;
(statearr_17951_17992[(1)] = (17));

} else {
var statearr_17952_17993 = state_17932__$1;
(statearr_17952_17993[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (2))){
var inst_17866 = (state_17932[(9)]);
var inst_17869 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17866);
var state_17932__$1 = state_17932;
var statearr_17953_17994 = state_17932__$1;
(statearr_17953_17994[(2)] = inst_17869);

(statearr_17953_17994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (23))){
var inst_17917 = (state_17932[(2)]);
var state_17932__$1 = state_17932;
if(cljs.core.truth_(inst_17917)){
var statearr_17954_17995 = state_17932__$1;
(statearr_17954_17995[(1)] = (24));

} else {
var statearr_17955_17996 = state_17932__$1;
(statearr_17955_17996[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (19))){
var inst_17914 = (state_17932[(2)]);
var state_17932__$1 = state_17932;
if(cljs.core.truth_(inst_17914)){
var statearr_17956_17997 = state_17932__$1;
(statearr_17956_17997[(1)] = (20));

} else {
var statearr_17957_17998 = state_17932__$1;
(statearr_17957_17998[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (11))){
var inst_17891 = (state_17932[(8)]);
var inst_17897 = (inst_17891 == null);
var state_17932__$1 = state_17932;
if(cljs.core.truth_(inst_17897)){
var statearr_17958_17999 = state_17932__$1;
(statearr_17958_17999[(1)] = (14));

} else {
var statearr_17959_18000 = state_17932__$1;
(statearr_17959_18000[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (9))){
var inst_17884 = (state_17932[(10)]);
var inst_17884__$1 = (state_17932[(2)]);
var inst_17885 = cljs.core.get.call(null,inst_17884__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_17886 = cljs.core.get.call(null,inst_17884__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_17887 = cljs.core.get.call(null,inst_17884__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_17932__$1 = (function (){var statearr_17960 = state_17932;
(statearr_17960[(17)] = inst_17886);

(statearr_17960[(10)] = inst_17884__$1);

(statearr_17960[(16)] = inst_17887);

return statearr_17960;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_17932__$1,(10),inst_17885);
} else {
if((state_val_17933 === (5))){
var inst_17876 = (state_17932[(7)]);
var inst_17879 = cljs.core.seq_QMARK_.call(null,inst_17876);
var state_17932__$1 = state_17932;
if(inst_17879){
var statearr_17961_18001 = state_17932__$1;
(statearr_17961_18001[(1)] = (7));

} else {
var statearr_17962_18002 = state_17932__$1;
(statearr_17962_18002[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (14))){
var inst_17892 = (state_17932[(15)]);
var inst_17899 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17892);
var state_17932__$1 = state_17932;
var statearr_17963_18003 = state_17932__$1;
(statearr_17963_18003[(2)] = inst_17899);

(statearr_17963_18003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (26))){
var inst_17922 = (state_17932[(2)]);
var state_17932__$1 = state_17932;
var statearr_17964_18004 = state_17932__$1;
(statearr_17964_18004[(2)] = inst_17922);

(statearr_17964_18004[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (16))){
var inst_17902 = (state_17932[(2)]);
var inst_17903 = calc_state.call(null);
var inst_17876 = inst_17903;
var state_17932__$1 = (function (){var statearr_17965 = state_17932;
(statearr_17965[(7)] = inst_17876);

(statearr_17965[(18)] = inst_17902);

return statearr_17965;
})();
var statearr_17966_18005 = state_17932__$1;
(statearr_17966_18005[(2)] = null);

(statearr_17966_18005[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (10))){
var inst_17891 = (state_17932[(8)]);
var inst_17892 = (state_17932[(15)]);
var inst_17890 = (state_17932[(2)]);
var inst_17891__$1 = cljs.core.nth.call(null,inst_17890,(0),null);
var inst_17892__$1 = cljs.core.nth.call(null,inst_17890,(1),null);
var inst_17893 = (inst_17891__$1 == null);
var inst_17894 = cljs.core._EQ_.call(null,inst_17892__$1,change);
var inst_17895 = (inst_17893) || (inst_17894);
var state_17932__$1 = (function (){var statearr_17967 = state_17932;
(statearr_17967[(8)] = inst_17891__$1);

(statearr_17967[(15)] = inst_17892__$1);

return statearr_17967;
})();
if(cljs.core.truth_(inst_17895)){
var statearr_17968_18006 = state_17932__$1;
(statearr_17968_18006[(1)] = (11));

} else {
var statearr_17969_18007 = state_17932__$1;
(statearr_17969_18007[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (18))){
var inst_17886 = (state_17932[(17)]);
var inst_17892 = (state_17932[(15)]);
var inst_17887 = (state_17932[(16)]);
var inst_17909 = cljs.core.empty_QMARK_.call(null,inst_17887);
var inst_17910 = inst_17886.call(null,inst_17892);
var inst_17911 = cljs.core.not.call(null,inst_17910);
var inst_17912 = (inst_17909) && (inst_17911);
var state_17932__$1 = state_17932;
var statearr_17970_18008 = state_17932__$1;
(statearr_17970_18008[(2)] = inst_17912);

(statearr_17970_18008[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17933 === (8))){
var inst_17876 = (state_17932[(7)]);
var state_17932__$1 = state_17932;
var statearr_17971_18009 = state_17932__$1;
(statearr_17971_18009[(2)] = inst_17876);

(statearr_17971_18009[(1)] = (9));


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
});})(c__5977__auto___17979,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__5962__auto__,c__5977__auto___17979,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_17975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17975[(0)] = state_machine__5963__auto__);

(statearr_17975[(1)] = (1));

return statearr_17975;
});
var state_machine__5963__auto____1 = (function (state_17932){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_17932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e17976){if((e17976 instanceof Object)){
var ex__5966__auto__ = e17976;
var statearr_17977_18010 = state_17932;
(statearr_17977_18010[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18011 = state_17932;
state_17932 = G__18011;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_17932){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_17932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___17979,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__5979__auto__ = (function (){var statearr_17978 = f__5978__auto__.call(null);
(statearr_17978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___17979);

return statearr_17978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___17979,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj18013 = {};
return obj18013;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3742__auto__ = p;
if(and__3742__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3742__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4398__auto__ = (((p == null))?null:p);
return (function (){var or__3754__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3742__auto__ = p;
if(and__3742__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3742__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4398__auto__ = (((p == null))?null:p);
return (function (){var or__3754__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
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
if((function (){var and__3742__auto__ = p;
if(and__3742__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3742__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4398__auto__ = (((p == null))?null:p);
return (function (){var or__3754__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3742__auto__ = p;
if(and__3742__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3742__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4398__auto__ = (((p == null))?null:p);
return (function (){var or__3754__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4398__auto__)]);
if(or__3754__auto__){
return or__3754__auto__;
} else {
var or__3754__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3754__auto____$1){
return or__3754__auto____$1;
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
var or__3754__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3754__auto__)){
return or__3754__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3754__auto__,mults){
return (function (p1__18014_SHARP_){
if(cljs.core.truth_(p1__18014_SHARP_.call(null,topic))){
return p1__18014_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18014_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3754__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t18137 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18137 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta18138){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta18138 = meta18138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18137.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t18137.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t18137.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t18137.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t18137.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t18137.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t18137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t18137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18139){
var self__ = this;
var _18139__$1 = this;
return self__.meta18138;
});})(mults,ensure_mult))
;

cljs.core.async.t18137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18139,meta18138__$1){
var self__ = this;
var _18139__$1 = this;
return (new cljs.core.async.t18137(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta18138__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t18137.cljs$lang$type = true;

cljs.core.async.t18137.cljs$lang$ctorStr = "cljs.core.async/t18137";

cljs.core.async.t18137.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cljs.core.async/t18137");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t18137 = ((function (mults,ensure_mult){
return (function __GT_t18137(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18138){
return (new cljs.core.async.t18137(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta18138));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t18137(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__5977__auto___18259 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___18259,mults,ensure_mult,p){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___18259,mults,ensure_mult,p){
return (function (state_18211){
var state_val_18212 = (state_18211[(1)]);
if((state_val_18212 === (7))){
var inst_18207 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
var statearr_18213_18260 = state_18211__$1;
(statearr_18213_18260[(2)] = inst_18207);

(statearr_18213_18260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (20))){
var state_18211__$1 = state_18211;
var statearr_18214_18261 = state_18211__$1;
(statearr_18214_18261[(2)] = null);

(statearr_18214_18261[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (1))){
var state_18211__$1 = state_18211;
var statearr_18215_18262 = state_18211__$1;
(statearr_18215_18262[(2)] = null);

(statearr_18215_18262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (24))){
var inst_18190 = (state_18211[(7)]);
var inst_18199 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18190);
var state_18211__$1 = state_18211;
var statearr_18216_18263 = state_18211__$1;
(statearr_18216_18263[(2)] = inst_18199);

(statearr_18216_18263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (4))){
var inst_18142 = (state_18211[(8)]);
var inst_18142__$1 = (state_18211[(2)]);
var inst_18143 = (inst_18142__$1 == null);
var state_18211__$1 = (function (){var statearr_18217 = state_18211;
(statearr_18217[(8)] = inst_18142__$1);

return statearr_18217;
})();
if(cljs.core.truth_(inst_18143)){
var statearr_18218_18264 = state_18211__$1;
(statearr_18218_18264[(1)] = (5));

} else {
var statearr_18219_18265 = state_18211__$1;
(statearr_18219_18265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (15))){
var inst_18184 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
var statearr_18220_18266 = state_18211__$1;
(statearr_18220_18266[(2)] = inst_18184);

(statearr_18220_18266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (21))){
var inst_18204 = (state_18211[(2)]);
var state_18211__$1 = (function (){var statearr_18221 = state_18211;
(statearr_18221[(9)] = inst_18204);

return statearr_18221;
})();
var statearr_18222_18267 = state_18211__$1;
(statearr_18222_18267[(2)] = null);

(statearr_18222_18267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (13))){
var inst_18166 = (state_18211[(10)]);
var inst_18168 = cljs.core.chunked_seq_QMARK_.call(null,inst_18166);
var state_18211__$1 = state_18211;
if(inst_18168){
var statearr_18223_18268 = state_18211__$1;
(statearr_18223_18268[(1)] = (16));

} else {
var statearr_18224_18269 = state_18211__$1;
(statearr_18224_18269[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (22))){
var inst_18196 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
if(cljs.core.truth_(inst_18196)){
var statearr_18225_18270 = state_18211__$1;
(statearr_18225_18270[(1)] = (23));

} else {
var statearr_18226_18271 = state_18211__$1;
(statearr_18226_18271[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (6))){
var inst_18142 = (state_18211[(8)]);
var inst_18192 = (state_18211[(11)]);
var inst_18190 = (state_18211[(7)]);
var inst_18190__$1 = topic_fn.call(null,inst_18142);
var inst_18191 = cljs.core.deref.call(null,mults);
var inst_18192__$1 = cljs.core.get.call(null,inst_18191,inst_18190__$1);
var state_18211__$1 = (function (){var statearr_18227 = state_18211;
(statearr_18227[(11)] = inst_18192__$1);

(statearr_18227[(7)] = inst_18190__$1);

return statearr_18227;
})();
if(cljs.core.truth_(inst_18192__$1)){
var statearr_18228_18272 = state_18211__$1;
(statearr_18228_18272[(1)] = (19));

} else {
var statearr_18229_18273 = state_18211__$1;
(statearr_18229_18273[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (25))){
var inst_18201 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
var statearr_18230_18274 = state_18211__$1;
(statearr_18230_18274[(2)] = inst_18201);

(statearr_18230_18274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (17))){
var inst_18166 = (state_18211[(10)]);
var inst_18175 = cljs.core.first.call(null,inst_18166);
var inst_18176 = cljs.core.async.muxch_STAR_.call(null,inst_18175);
var inst_18177 = cljs.core.async.close_BANG_.call(null,inst_18176);
var inst_18178 = cljs.core.next.call(null,inst_18166);
var inst_18152 = inst_18178;
var inst_18153 = null;
var inst_18154 = (0);
var inst_18155 = (0);
var state_18211__$1 = (function (){var statearr_18231 = state_18211;
(statearr_18231[(12)] = inst_18152);

(statearr_18231[(13)] = inst_18155);

(statearr_18231[(14)] = inst_18154);

(statearr_18231[(15)] = inst_18177);

(statearr_18231[(16)] = inst_18153);

return statearr_18231;
})();
var statearr_18232_18275 = state_18211__$1;
(statearr_18232_18275[(2)] = null);

(statearr_18232_18275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (3))){
var inst_18209 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18211__$1,inst_18209);
} else {
if((state_val_18212 === (12))){
var inst_18186 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
var statearr_18233_18276 = state_18211__$1;
(statearr_18233_18276[(2)] = inst_18186);

(statearr_18233_18276[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (2))){
var state_18211__$1 = state_18211;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18211__$1,(4),ch);
} else {
if((state_val_18212 === (23))){
var state_18211__$1 = state_18211;
var statearr_18234_18277 = state_18211__$1;
(statearr_18234_18277[(2)] = null);

(statearr_18234_18277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (19))){
var inst_18142 = (state_18211[(8)]);
var inst_18192 = (state_18211[(11)]);
var inst_18194 = cljs.core.async.muxch_STAR_.call(null,inst_18192);
var state_18211__$1 = state_18211;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18211__$1,(22),inst_18194,inst_18142);
} else {
if((state_val_18212 === (11))){
var inst_18152 = (state_18211[(12)]);
var inst_18166 = (state_18211[(10)]);
var inst_18166__$1 = cljs.core.seq.call(null,inst_18152);
var state_18211__$1 = (function (){var statearr_18235 = state_18211;
(statearr_18235[(10)] = inst_18166__$1);

return statearr_18235;
})();
if(inst_18166__$1){
var statearr_18236_18278 = state_18211__$1;
(statearr_18236_18278[(1)] = (13));

} else {
var statearr_18237_18279 = state_18211__$1;
(statearr_18237_18279[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (9))){
var inst_18188 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
var statearr_18238_18280 = state_18211__$1;
(statearr_18238_18280[(2)] = inst_18188);

(statearr_18238_18280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (5))){
var inst_18149 = cljs.core.deref.call(null,mults);
var inst_18150 = cljs.core.vals.call(null,inst_18149);
var inst_18151 = cljs.core.seq.call(null,inst_18150);
var inst_18152 = inst_18151;
var inst_18153 = null;
var inst_18154 = (0);
var inst_18155 = (0);
var state_18211__$1 = (function (){var statearr_18239 = state_18211;
(statearr_18239[(12)] = inst_18152);

(statearr_18239[(13)] = inst_18155);

(statearr_18239[(14)] = inst_18154);

(statearr_18239[(16)] = inst_18153);

return statearr_18239;
})();
var statearr_18240_18281 = state_18211__$1;
(statearr_18240_18281[(2)] = null);

(statearr_18240_18281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (14))){
var state_18211__$1 = state_18211;
var statearr_18244_18282 = state_18211__$1;
(statearr_18244_18282[(2)] = null);

(statearr_18244_18282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (16))){
var inst_18166 = (state_18211[(10)]);
var inst_18170 = cljs.core.chunk_first.call(null,inst_18166);
var inst_18171 = cljs.core.chunk_rest.call(null,inst_18166);
var inst_18172 = cljs.core.count.call(null,inst_18170);
var inst_18152 = inst_18171;
var inst_18153 = inst_18170;
var inst_18154 = inst_18172;
var inst_18155 = (0);
var state_18211__$1 = (function (){var statearr_18245 = state_18211;
(statearr_18245[(12)] = inst_18152);

(statearr_18245[(13)] = inst_18155);

(statearr_18245[(14)] = inst_18154);

(statearr_18245[(16)] = inst_18153);

return statearr_18245;
})();
var statearr_18246_18283 = state_18211__$1;
(statearr_18246_18283[(2)] = null);

(statearr_18246_18283[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (10))){
var inst_18152 = (state_18211[(12)]);
var inst_18155 = (state_18211[(13)]);
var inst_18154 = (state_18211[(14)]);
var inst_18153 = (state_18211[(16)]);
var inst_18160 = cljs.core._nth.call(null,inst_18153,inst_18155);
var inst_18161 = cljs.core.async.muxch_STAR_.call(null,inst_18160);
var inst_18162 = cljs.core.async.close_BANG_.call(null,inst_18161);
var inst_18163 = (inst_18155 + (1));
var tmp18241 = inst_18152;
var tmp18242 = inst_18154;
var tmp18243 = inst_18153;
var inst_18152__$1 = tmp18241;
var inst_18153__$1 = tmp18243;
var inst_18154__$1 = tmp18242;
var inst_18155__$1 = inst_18163;
var state_18211__$1 = (function (){var statearr_18247 = state_18211;
(statearr_18247[(12)] = inst_18152__$1);

(statearr_18247[(17)] = inst_18162);

(statearr_18247[(13)] = inst_18155__$1);

(statearr_18247[(14)] = inst_18154__$1);

(statearr_18247[(16)] = inst_18153__$1);

return statearr_18247;
})();
var statearr_18248_18284 = state_18211__$1;
(statearr_18248_18284[(2)] = null);

(statearr_18248_18284[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (18))){
var inst_18181 = (state_18211[(2)]);
var state_18211__$1 = state_18211;
var statearr_18249_18285 = state_18211__$1;
(statearr_18249_18285[(2)] = inst_18181);

(statearr_18249_18285[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18212 === (8))){
var inst_18155 = (state_18211[(13)]);
var inst_18154 = (state_18211[(14)]);
var inst_18157 = (inst_18155 < inst_18154);
var inst_18158 = inst_18157;
var state_18211__$1 = state_18211;
if(cljs.core.truth_(inst_18158)){
var statearr_18250_18286 = state_18211__$1;
(statearr_18250_18286[(1)] = (10));

} else {
var statearr_18251_18287 = state_18211__$1;
(statearr_18251_18287[(1)] = (11));

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
});})(c__5977__auto___18259,mults,ensure_mult,p))
;
return ((function (switch__5962__auto__,c__5977__auto___18259,mults,ensure_mult,p){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_18255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18255[(0)] = state_machine__5963__auto__);

(statearr_18255[(1)] = (1));

return statearr_18255;
});
var state_machine__5963__auto____1 = (function (state_18211){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_18211);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e18256){if((e18256 instanceof Object)){
var ex__5966__auto__ = e18256;
var statearr_18257_18288 = state_18211;
(statearr_18257_18288[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18289 = state_18211;
state_18211 = G__18289;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_18211){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_18211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___18259,mults,ensure_mult,p))
})();
var state__5979__auto__ = (function (){var statearr_18258 = f__5978__auto__.call(null);
(statearr_18258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___18259);

return statearr_18258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___18259,mults,ensure_mult,p))
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
var c__5977__auto___18426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___18426,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___18426,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18396){
var state_val_18397 = (state_18396[(1)]);
if((state_val_18397 === (7))){
var state_18396__$1 = state_18396;
var statearr_18398_18427 = state_18396__$1;
(statearr_18398_18427[(2)] = null);

(statearr_18398_18427[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (1))){
var state_18396__$1 = state_18396;
var statearr_18399_18428 = state_18396__$1;
(statearr_18399_18428[(2)] = null);

(statearr_18399_18428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (4))){
var inst_18360 = (state_18396[(7)]);
var inst_18362 = (inst_18360 < cnt);
var state_18396__$1 = state_18396;
if(cljs.core.truth_(inst_18362)){
var statearr_18400_18429 = state_18396__$1;
(statearr_18400_18429[(1)] = (6));

} else {
var statearr_18401_18430 = state_18396__$1;
(statearr_18401_18430[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (15))){
var inst_18392 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
var statearr_18402_18431 = state_18396__$1;
(statearr_18402_18431[(2)] = inst_18392);

(statearr_18402_18431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (13))){
var inst_18385 = cljs.core.async.close_BANG_.call(null,out);
var state_18396__$1 = state_18396;
var statearr_18403_18432 = state_18396__$1;
(statearr_18403_18432[(2)] = inst_18385);

(statearr_18403_18432[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (6))){
var state_18396__$1 = state_18396;
var statearr_18404_18433 = state_18396__$1;
(statearr_18404_18433[(2)] = null);

(statearr_18404_18433[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (3))){
var inst_18394 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18396__$1,inst_18394);
} else {
if((state_val_18397 === (12))){
var inst_18382 = (state_18396[(8)]);
var inst_18382__$1 = (state_18396[(2)]);
var inst_18383 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18382__$1);
var state_18396__$1 = (function (){var statearr_18405 = state_18396;
(statearr_18405[(8)] = inst_18382__$1);

return statearr_18405;
})();
if(cljs.core.truth_(inst_18383)){
var statearr_18406_18434 = state_18396__$1;
(statearr_18406_18434[(1)] = (13));

} else {
var statearr_18407_18435 = state_18396__$1;
(statearr_18407_18435[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (2))){
var inst_18359 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18360 = (0);
var state_18396__$1 = (function (){var statearr_18408 = state_18396;
(statearr_18408[(9)] = inst_18359);

(statearr_18408[(7)] = inst_18360);

return statearr_18408;
})();
var statearr_18409_18436 = state_18396__$1;
(statearr_18409_18436[(2)] = null);

(statearr_18409_18436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (11))){
var inst_18360 = (state_18396[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18396,(10),Object,null,(9));
var inst_18369 = chs__$1.call(null,inst_18360);
var inst_18370 = done.call(null,inst_18360);
var inst_18371 = cljs.core.async.take_BANG_.call(null,inst_18369,inst_18370);
var state_18396__$1 = state_18396;
var statearr_18410_18437 = state_18396__$1;
(statearr_18410_18437[(2)] = inst_18371);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18396__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (9))){
var inst_18360 = (state_18396[(7)]);
var inst_18373 = (state_18396[(2)]);
var inst_18374 = (inst_18360 + (1));
var inst_18360__$1 = inst_18374;
var state_18396__$1 = (function (){var statearr_18411 = state_18396;
(statearr_18411[(10)] = inst_18373);

(statearr_18411[(7)] = inst_18360__$1);

return statearr_18411;
})();
var statearr_18412_18438 = state_18396__$1;
(statearr_18412_18438[(2)] = null);

(statearr_18412_18438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (5))){
var inst_18380 = (state_18396[(2)]);
var state_18396__$1 = (function (){var statearr_18413 = state_18396;
(statearr_18413[(11)] = inst_18380);

return statearr_18413;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18396__$1,(12),dchan);
} else {
if((state_val_18397 === (14))){
var inst_18382 = (state_18396[(8)]);
var inst_18387 = cljs.core.apply.call(null,f,inst_18382);
var state_18396__$1 = state_18396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18396__$1,(16),out,inst_18387);
} else {
if((state_val_18397 === (16))){
var inst_18389 = (state_18396[(2)]);
var state_18396__$1 = (function (){var statearr_18414 = state_18396;
(statearr_18414[(12)] = inst_18389);

return statearr_18414;
})();
var statearr_18415_18439 = state_18396__$1;
(statearr_18415_18439[(2)] = null);

(statearr_18415_18439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (10))){
var inst_18364 = (state_18396[(2)]);
var inst_18365 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18396__$1 = (function (){var statearr_18416 = state_18396;
(statearr_18416[(13)] = inst_18364);

return statearr_18416;
})();
var statearr_18417_18440 = state_18396__$1;
(statearr_18417_18440[(2)] = inst_18365);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18396__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18397 === (8))){
var inst_18378 = (state_18396[(2)]);
var state_18396__$1 = state_18396;
var statearr_18418_18441 = state_18396__$1;
(statearr_18418_18441[(2)] = inst_18378);

(statearr_18418_18441[(1)] = (5));


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
});})(c__5977__auto___18426,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__5962__auto__,c__5977__auto___18426,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_18422 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18422[(0)] = state_machine__5963__auto__);

(statearr_18422[(1)] = (1));

return statearr_18422;
});
var state_machine__5963__auto____1 = (function (state_18396){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_18396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e18423){if((e18423 instanceof Object)){
var ex__5966__auto__ = e18423;
var statearr_18424_18442 = state_18396;
(statearr_18424_18442[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18443 = state_18396;
state_18396 = G__18443;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_18396){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_18396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___18426,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__5979__auto__ = (function (){var statearr_18425 = f__5978__auto__.call(null);
(statearr_18425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___18426);

return statearr_18425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___18426,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__5977__auto___18551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___18551,out){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___18551,out){
return (function (state_18527){
var state_val_18528 = (state_18527[(1)]);
if((state_val_18528 === (7))){
var inst_18506 = (state_18527[(7)]);
var inst_18507 = (state_18527[(8)]);
var inst_18506__$1 = (state_18527[(2)]);
var inst_18507__$1 = cljs.core.nth.call(null,inst_18506__$1,(0),null);
var inst_18508 = cljs.core.nth.call(null,inst_18506__$1,(1),null);
var inst_18509 = (inst_18507__$1 == null);
var state_18527__$1 = (function (){var statearr_18529 = state_18527;
(statearr_18529[(7)] = inst_18506__$1);

(statearr_18529[(8)] = inst_18507__$1);

(statearr_18529[(9)] = inst_18508);

return statearr_18529;
})();
if(cljs.core.truth_(inst_18509)){
var statearr_18530_18552 = state_18527__$1;
(statearr_18530_18552[(1)] = (8));

} else {
var statearr_18531_18553 = state_18527__$1;
(statearr_18531_18553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (1))){
var inst_18498 = cljs.core.vec.call(null,chs);
var inst_18499 = inst_18498;
var state_18527__$1 = (function (){var statearr_18532 = state_18527;
(statearr_18532[(10)] = inst_18499);

return statearr_18532;
})();
var statearr_18533_18554 = state_18527__$1;
(statearr_18533_18554[(2)] = null);

(statearr_18533_18554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (4))){
var inst_18499 = (state_18527[(10)]);
var state_18527__$1 = state_18527;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18527__$1,(7),inst_18499);
} else {
if((state_val_18528 === (6))){
var inst_18523 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
var statearr_18534_18555 = state_18527__$1;
(statearr_18534_18555[(2)] = inst_18523);

(statearr_18534_18555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (3))){
var inst_18525 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18527__$1,inst_18525);
} else {
if((state_val_18528 === (2))){
var inst_18499 = (state_18527[(10)]);
var inst_18501 = cljs.core.count.call(null,inst_18499);
var inst_18502 = (inst_18501 > (0));
var state_18527__$1 = state_18527;
if(cljs.core.truth_(inst_18502)){
var statearr_18536_18556 = state_18527__$1;
(statearr_18536_18556[(1)] = (4));

} else {
var statearr_18537_18557 = state_18527__$1;
(statearr_18537_18557[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (11))){
var inst_18499 = (state_18527[(10)]);
var inst_18516 = (state_18527[(2)]);
var tmp18535 = inst_18499;
var inst_18499__$1 = tmp18535;
var state_18527__$1 = (function (){var statearr_18538 = state_18527;
(statearr_18538[(11)] = inst_18516);

(statearr_18538[(10)] = inst_18499__$1);

return statearr_18538;
})();
var statearr_18539_18558 = state_18527__$1;
(statearr_18539_18558[(2)] = null);

(statearr_18539_18558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (9))){
var inst_18507 = (state_18527[(8)]);
var state_18527__$1 = state_18527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18527__$1,(11),out,inst_18507);
} else {
if((state_val_18528 === (5))){
var inst_18521 = cljs.core.async.close_BANG_.call(null,out);
var state_18527__$1 = state_18527;
var statearr_18540_18559 = state_18527__$1;
(statearr_18540_18559[(2)] = inst_18521);

(statearr_18540_18559[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (10))){
var inst_18519 = (state_18527[(2)]);
var state_18527__$1 = state_18527;
var statearr_18541_18560 = state_18527__$1;
(statearr_18541_18560[(2)] = inst_18519);

(statearr_18541_18560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18528 === (8))){
var inst_18506 = (state_18527[(7)]);
var inst_18499 = (state_18527[(10)]);
var inst_18507 = (state_18527[(8)]);
var inst_18508 = (state_18527[(9)]);
var inst_18511 = (function (){var c = inst_18508;
var v = inst_18507;
var vec__18504 = inst_18506;
var cs = inst_18499;
return ((function (c,v,vec__18504,cs,inst_18506,inst_18499,inst_18507,inst_18508,state_val_18528,c__5977__auto___18551,out){
return (function (p1__18444_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18444_SHARP_);
});
;})(c,v,vec__18504,cs,inst_18506,inst_18499,inst_18507,inst_18508,state_val_18528,c__5977__auto___18551,out))
})();
var inst_18512 = cljs.core.filterv.call(null,inst_18511,inst_18499);
var inst_18499__$1 = inst_18512;
var state_18527__$1 = (function (){var statearr_18542 = state_18527;
(statearr_18542[(10)] = inst_18499__$1);

return statearr_18542;
})();
var statearr_18543_18561 = state_18527__$1;
(statearr_18543_18561[(2)] = null);

(statearr_18543_18561[(1)] = (2));


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
});})(c__5977__auto___18551,out))
;
return ((function (switch__5962__auto__,c__5977__auto___18551,out){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_18547 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18547[(0)] = state_machine__5963__auto__);

(statearr_18547[(1)] = (1));

return statearr_18547;
});
var state_machine__5963__auto____1 = (function (state_18527){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_18527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e18548){if((e18548 instanceof Object)){
var ex__5966__auto__ = e18548;
var statearr_18549_18562 = state_18527;
(statearr_18549_18562[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18563 = state_18527;
state_18527 = G__18563;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_18527){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_18527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___18551,out))
})();
var state__5979__auto__ = (function (){var statearr_18550 = f__5978__auto__.call(null);
(statearr_18550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___18551);

return statearr_18550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___18551,out))
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
var c__5977__auto___18656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___18656,out){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___18656,out){
return (function (state_18633){
var state_val_18634 = (state_18633[(1)]);
if((state_val_18634 === (7))){
var inst_18615 = (state_18633[(7)]);
var inst_18615__$1 = (state_18633[(2)]);
var inst_18616 = (inst_18615__$1 == null);
var inst_18617 = cljs.core.not.call(null,inst_18616);
var state_18633__$1 = (function (){var statearr_18635 = state_18633;
(statearr_18635[(7)] = inst_18615__$1);

return statearr_18635;
})();
if(inst_18617){
var statearr_18636_18657 = state_18633__$1;
(statearr_18636_18657[(1)] = (8));

} else {
var statearr_18637_18658 = state_18633__$1;
(statearr_18637_18658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (1))){
var inst_18610 = (0);
var state_18633__$1 = (function (){var statearr_18638 = state_18633;
(statearr_18638[(8)] = inst_18610);

return statearr_18638;
})();
var statearr_18639_18659 = state_18633__$1;
(statearr_18639_18659[(2)] = null);

(statearr_18639_18659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (4))){
var state_18633__$1 = state_18633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18633__$1,(7),ch);
} else {
if((state_val_18634 === (6))){
var inst_18628 = (state_18633[(2)]);
var state_18633__$1 = state_18633;
var statearr_18640_18660 = state_18633__$1;
(statearr_18640_18660[(2)] = inst_18628);

(statearr_18640_18660[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (3))){
var inst_18630 = (state_18633[(2)]);
var inst_18631 = cljs.core.async.close_BANG_.call(null,out);
var state_18633__$1 = (function (){var statearr_18641 = state_18633;
(statearr_18641[(9)] = inst_18630);

return statearr_18641;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18633__$1,inst_18631);
} else {
if((state_val_18634 === (2))){
var inst_18610 = (state_18633[(8)]);
var inst_18612 = (inst_18610 < n);
var state_18633__$1 = state_18633;
if(cljs.core.truth_(inst_18612)){
var statearr_18642_18661 = state_18633__$1;
(statearr_18642_18661[(1)] = (4));

} else {
var statearr_18643_18662 = state_18633__$1;
(statearr_18643_18662[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (11))){
var inst_18610 = (state_18633[(8)]);
var inst_18620 = (state_18633[(2)]);
var inst_18621 = (inst_18610 + (1));
var inst_18610__$1 = inst_18621;
var state_18633__$1 = (function (){var statearr_18644 = state_18633;
(statearr_18644[(8)] = inst_18610__$1);

(statearr_18644[(10)] = inst_18620);

return statearr_18644;
})();
var statearr_18645_18663 = state_18633__$1;
(statearr_18645_18663[(2)] = null);

(statearr_18645_18663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (9))){
var state_18633__$1 = state_18633;
var statearr_18646_18664 = state_18633__$1;
(statearr_18646_18664[(2)] = null);

(statearr_18646_18664[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (5))){
var state_18633__$1 = state_18633;
var statearr_18647_18665 = state_18633__$1;
(statearr_18647_18665[(2)] = null);

(statearr_18647_18665[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (10))){
var inst_18625 = (state_18633[(2)]);
var state_18633__$1 = state_18633;
var statearr_18648_18666 = state_18633__$1;
(statearr_18648_18666[(2)] = inst_18625);

(statearr_18648_18666[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18634 === (8))){
var inst_18615 = (state_18633[(7)]);
var state_18633__$1 = state_18633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18633__$1,(11),out,inst_18615);
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
});})(c__5977__auto___18656,out))
;
return ((function (switch__5962__auto__,c__5977__auto___18656,out){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_18652 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18652[(0)] = state_machine__5963__auto__);

(statearr_18652[(1)] = (1));

return statearr_18652;
});
var state_machine__5963__auto____1 = (function (state_18633){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_18633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e18653){if((e18653 instanceof Object)){
var ex__5966__auto__ = e18653;
var statearr_18654_18667 = state_18633;
(statearr_18654_18667[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18668 = state_18633;
state_18633 = G__18668;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_18633){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_18633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___18656,out))
})();
var state__5979__auto__ = (function (){var statearr_18655 = f__5978__auto__.call(null);
(statearr_18655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___18656);

return statearr_18655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___18656,out))
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
if(typeof cljs.core.async.t18676 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18676 = (function (ch,f,map_LT_,meta18677){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18677 = meta18677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t18679 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18679 = (function (fn1,_,meta18677,map_LT_,f,ch,meta18680){
this.fn1 = fn1;
this._ = _;
this.meta18677 = meta18677;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta18680 = meta18680;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18679.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t18679.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t18679.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18669_SHARP_){
return f1.call(null,(((p1__18669_SHARP_ == null))?null:self__.f.call(null,p1__18669_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t18679.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18681){
var self__ = this;
var _18681__$1 = this;
return self__.meta18680;
});})(___$1))
;

cljs.core.async.t18679.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18681,meta18680__$1){
var self__ = this;
var _18681__$1 = this;
return (new cljs.core.async.t18679(self__.fn1,self__._,self__.meta18677,self__.map_LT_,self__.f,self__.ch,meta18680__$1));
});})(___$1))
;

cljs.core.async.t18679.cljs$lang$type = true;

cljs.core.async.t18679.cljs$lang$ctorStr = "cljs.core.async/t18679";

cljs.core.async.t18679.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cljs.core.async/t18679");
});})(___$1))
;

cljs.core.async.__GT_t18679 = ((function (___$1){
return (function __GT_t18679(fn1__$1,___$2,meta18677__$1,map_LT___$1,f__$1,ch__$1,meta18680){
return (new cljs.core.async.t18679(fn1__$1,___$2,meta18677__$1,map_LT___$1,f__$1,ch__$1,meta18680));
});})(___$1))
;

}

return (new cljs.core.async.t18679(fn1,___$1,self__.meta18677,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3742__auto__ = ret;
if(cljs.core.truth_(and__3742__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3742__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18676.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18678){
var self__ = this;
var _18678__$1 = this;
return self__.meta18677;
});

cljs.core.async.t18676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18678,meta18677__$1){
var self__ = this;
var _18678__$1 = this;
return (new cljs.core.async.t18676(self__.ch,self__.f,self__.map_LT_,meta18677__$1));
});

cljs.core.async.t18676.cljs$lang$type = true;

cljs.core.async.t18676.cljs$lang$ctorStr = "cljs.core.async/t18676";

cljs.core.async.t18676.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cljs.core.async/t18676");
});

cljs.core.async.__GT_t18676 = (function __GT_t18676(ch__$1,f__$1,map_LT___$1,meta18677){
return (new cljs.core.async.t18676(ch__$1,f__$1,map_LT___$1,meta18677));
});

}

return (new cljs.core.async.t18676(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t18685 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18685 = (function (ch,f,map_GT_,meta18686){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18686 = meta18686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18685.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18685.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t18685.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18685.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18685.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18685.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18687){
var self__ = this;
var _18687__$1 = this;
return self__.meta18686;
});

cljs.core.async.t18685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18687,meta18686__$1){
var self__ = this;
var _18687__$1 = this;
return (new cljs.core.async.t18685(self__.ch,self__.f,self__.map_GT_,meta18686__$1));
});

cljs.core.async.t18685.cljs$lang$type = true;

cljs.core.async.t18685.cljs$lang$ctorStr = "cljs.core.async/t18685";

cljs.core.async.t18685.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cljs.core.async/t18685");
});

cljs.core.async.__GT_t18685 = (function __GT_t18685(ch__$1,f__$1,map_GT___$1,meta18686){
return (new cljs.core.async.t18685(ch__$1,f__$1,map_GT___$1,meta18686));
});

}

return (new cljs.core.async.t18685(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t18691 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t18691 = (function (ch,p,filter_GT_,meta18692){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18692 = meta18692;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18691.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t18691.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t18691.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t18691.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t18691.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t18691.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t18691.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t18691.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18693){
var self__ = this;
var _18693__$1 = this;
return self__.meta18692;
});

cljs.core.async.t18691.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18693,meta18692__$1){
var self__ = this;
var _18693__$1 = this;
return (new cljs.core.async.t18691(self__.ch,self__.p,self__.filter_GT_,meta18692__$1));
});

cljs.core.async.t18691.cljs$lang$type = true;

cljs.core.async.t18691.cljs$lang$ctorStr = "cljs.core.async/t18691";

cljs.core.async.t18691.cljs$lang$ctorPrWriter = (function (this__4341__auto__,writer__4342__auto__,opt__4343__auto__){
return cljs.core._write.call(null,writer__4342__auto__,"cljs.core.async/t18691");
});

cljs.core.async.__GT_t18691 = (function __GT_t18691(ch__$1,p__$1,filter_GT___$1,meta18692){
return (new cljs.core.async.t18691(ch__$1,p__$1,filter_GT___$1,meta18692));
});

}

return (new cljs.core.async.t18691(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__5977__auto___18776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___18776,out){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___18776,out){
return (function (state_18755){
var state_val_18756 = (state_18755[(1)]);
if((state_val_18756 === (7))){
var inst_18751 = (state_18755[(2)]);
var state_18755__$1 = state_18755;
var statearr_18757_18777 = state_18755__$1;
(statearr_18757_18777[(2)] = inst_18751);

(statearr_18757_18777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18756 === (1))){
var state_18755__$1 = state_18755;
var statearr_18758_18778 = state_18755__$1;
(statearr_18758_18778[(2)] = null);

(statearr_18758_18778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18756 === (4))){
var inst_18737 = (state_18755[(7)]);
var inst_18737__$1 = (state_18755[(2)]);
var inst_18738 = (inst_18737__$1 == null);
var state_18755__$1 = (function (){var statearr_18759 = state_18755;
(statearr_18759[(7)] = inst_18737__$1);

return statearr_18759;
})();
if(cljs.core.truth_(inst_18738)){
var statearr_18760_18779 = state_18755__$1;
(statearr_18760_18779[(1)] = (5));

} else {
var statearr_18761_18780 = state_18755__$1;
(statearr_18761_18780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18756 === (6))){
var inst_18737 = (state_18755[(7)]);
var inst_18742 = p.call(null,inst_18737);
var state_18755__$1 = state_18755;
if(cljs.core.truth_(inst_18742)){
var statearr_18762_18781 = state_18755__$1;
(statearr_18762_18781[(1)] = (8));

} else {
var statearr_18763_18782 = state_18755__$1;
(statearr_18763_18782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18756 === (3))){
var inst_18753 = (state_18755[(2)]);
var state_18755__$1 = state_18755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18755__$1,inst_18753);
} else {
if((state_val_18756 === (2))){
var state_18755__$1 = state_18755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18755__$1,(4),ch);
} else {
if((state_val_18756 === (11))){
var inst_18745 = (state_18755[(2)]);
var state_18755__$1 = state_18755;
var statearr_18764_18783 = state_18755__$1;
(statearr_18764_18783[(2)] = inst_18745);

(statearr_18764_18783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18756 === (9))){
var state_18755__$1 = state_18755;
var statearr_18765_18784 = state_18755__$1;
(statearr_18765_18784[(2)] = null);

(statearr_18765_18784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18756 === (5))){
var inst_18740 = cljs.core.async.close_BANG_.call(null,out);
var state_18755__$1 = state_18755;
var statearr_18766_18785 = state_18755__$1;
(statearr_18766_18785[(2)] = inst_18740);

(statearr_18766_18785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18756 === (10))){
var inst_18748 = (state_18755[(2)]);
var state_18755__$1 = (function (){var statearr_18767 = state_18755;
(statearr_18767[(8)] = inst_18748);

return statearr_18767;
})();
var statearr_18768_18786 = state_18755__$1;
(statearr_18768_18786[(2)] = null);

(statearr_18768_18786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18756 === (8))){
var inst_18737 = (state_18755[(7)]);
var state_18755__$1 = state_18755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18755__$1,(11),out,inst_18737);
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
});})(c__5977__auto___18776,out))
;
return ((function (switch__5962__auto__,c__5977__auto___18776,out){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_18772 = [null,null,null,null,null,null,null,null,null];
(statearr_18772[(0)] = state_machine__5963__auto__);

(statearr_18772[(1)] = (1));

return statearr_18772;
});
var state_machine__5963__auto____1 = (function (state_18755){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_18755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e18773){if((e18773 instanceof Object)){
var ex__5966__auto__ = e18773;
var statearr_18774_18787 = state_18755;
(statearr_18774_18787[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18788 = state_18755;
state_18755 = G__18788;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_18755){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_18755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___18776,out))
})();
var state__5979__auto__ = (function (){var statearr_18775 = f__5978__auto__.call(null);
(statearr_18775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___18776);

return statearr_18775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___18776,out))
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
var c__5977__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto__){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto__){
return (function (state_18954){
var state_val_18955 = (state_18954[(1)]);
if((state_val_18955 === (7))){
var inst_18950 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
var statearr_18956_18997 = state_18954__$1;
(statearr_18956_18997[(2)] = inst_18950);

(statearr_18956_18997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (20))){
var inst_18920 = (state_18954[(7)]);
var inst_18931 = (state_18954[(2)]);
var inst_18932 = cljs.core.next.call(null,inst_18920);
var inst_18906 = inst_18932;
var inst_18907 = null;
var inst_18908 = (0);
var inst_18909 = (0);
var state_18954__$1 = (function (){var statearr_18957 = state_18954;
(statearr_18957[(8)] = inst_18906);

(statearr_18957[(9)] = inst_18909);

(statearr_18957[(10)] = inst_18907);

(statearr_18957[(11)] = inst_18931);

(statearr_18957[(12)] = inst_18908);

return statearr_18957;
})();
var statearr_18958_18998 = state_18954__$1;
(statearr_18958_18998[(2)] = null);

(statearr_18958_18998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (1))){
var state_18954__$1 = state_18954;
var statearr_18959_18999 = state_18954__$1;
(statearr_18959_18999[(2)] = null);

(statearr_18959_18999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (4))){
var inst_18895 = (state_18954[(13)]);
var inst_18895__$1 = (state_18954[(2)]);
var inst_18896 = (inst_18895__$1 == null);
var state_18954__$1 = (function (){var statearr_18960 = state_18954;
(statearr_18960[(13)] = inst_18895__$1);

return statearr_18960;
})();
if(cljs.core.truth_(inst_18896)){
var statearr_18961_19000 = state_18954__$1;
(statearr_18961_19000[(1)] = (5));

} else {
var statearr_18962_19001 = state_18954__$1;
(statearr_18962_19001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (15))){
var state_18954__$1 = state_18954;
var statearr_18966_19002 = state_18954__$1;
(statearr_18966_19002[(2)] = null);

(statearr_18966_19002[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (21))){
var state_18954__$1 = state_18954;
var statearr_18967_19003 = state_18954__$1;
(statearr_18967_19003[(2)] = null);

(statearr_18967_19003[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (13))){
var inst_18906 = (state_18954[(8)]);
var inst_18909 = (state_18954[(9)]);
var inst_18907 = (state_18954[(10)]);
var inst_18908 = (state_18954[(12)]);
var inst_18916 = (state_18954[(2)]);
var inst_18917 = (inst_18909 + (1));
var tmp18963 = inst_18906;
var tmp18964 = inst_18907;
var tmp18965 = inst_18908;
var inst_18906__$1 = tmp18963;
var inst_18907__$1 = tmp18964;
var inst_18908__$1 = tmp18965;
var inst_18909__$1 = inst_18917;
var state_18954__$1 = (function (){var statearr_18968 = state_18954;
(statearr_18968[(8)] = inst_18906__$1);

(statearr_18968[(9)] = inst_18909__$1);

(statearr_18968[(10)] = inst_18907__$1);

(statearr_18968[(14)] = inst_18916);

(statearr_18968[(12)] = inst_18908__$1);

return statearr_18968;
})();
var statearr_18969_19004 = state_18954__$1;
(statearr_18969_19004[(2)] = null);

(statearr_18969_19004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (22))){
var state_18954__$1 = state_18954;
var statearr_18970_19005 = state_18954__$1;
(statearr_18970_19005[(2)] = null);

(statearr_18970_19005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (6))){
var inst_18895 = (state_18954[(13)]);
var inst_18904 = f.call(null,inst_18895);
var inst_18905 = cljs.core.seq.call(null,inst_18904);
var inst_18906 = inst_18905;
var inst_18907 = null;
var inst_18908 = (0);
var inst_18909 = (0);
var state_18954__$1 = (function (){var statearr_18971 = state_18954;
(statearr_18971[(8)] = inst_18906);

(statearr_18971[(9)] = inst_18909);

(statearr_18971[(10)] = inst_18907);

(statearr_18971[(12)] = inst_18908);

return statearr_18971;
})();
var statearr_18972_19006 = state_18954__$1;
(statearr_18972_19006[(2)] = null);

(statearr_18972_19006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (17))){
var inst_18920 = (state_18954[(7)]);
var inst_18924 = cljs.core.chunk_first.call(null,inst_18920);
var inst_18925 = cljs.core.chunk_rest.call(null,inst_18920);
var inst_18926 = cljs.core.count.call(null,inst_18924);
var inst_18906 = inst_18925;
var inst_18907 = inst_18924;
var inst_18908 = inst_18926;
var inst_18909 = (0);
var state_18954__$1 = (function (){var statearr_18973 = state_18954;
(statearr_18973[(8)] = inst_18906);

(statearr_18973[(9)] = inst_18909);

(statearr_18973[(10)] = inst_18907);

(statearr_18973[(12)] = inst_18908);

return statearr_18973;
})();
var statearr_18974_19007 = state_18954__$1;
(statearr_18974_19007[(2)] = null);

(statearr_18974_19007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (3))){
var inst_18952 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18954__$1,inst_18952);
} else {
if((state_val_18955 === (12))){
var inst_18940 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
var statearr_18975_19008 = state_18954__$1;
(statearr_18975_19008[(2)] = inst_18940);

(statearr_18975_19008[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (2))){
var state_18954__$1 = state_18954;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18954__$1,(4),in$);
} else {
if((state_val_18955 === (23))){
var inst_18948 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
var statearr_18976_19009 = state_18954__$1;
(statearr_18976_19009[(2)] = inst_18948);

(statearr_18976_19009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (19))){
var inst_18935 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
var statearr_18977_19010 = state_18954__$1;
(statearr_18977_19010[(2)] = inst_18935);

(statearr_18977_19010[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (11))){
var inst_18906 = (state_18954[(8)]);
var inst_18920 = (state_18954[(7)]);
var inst_18920__$1 = cljs.core.seq.call(null,inst_18906);
var state_18954__$1 = (function (){var statearr_18978 = state_18954;
(statearr_18978[(7)] = inst_18920__$1);

return statearr_18978;
})();
if(inst_18920__$1){
var statearr_18979_19011 = state_18954__$1;
(statearr_18979_19011[(1)] = (14));

} else {
var statearr_18980_19012 = state_18954__$1;
(statearr_18980_19012[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (9))){
var inst_18942 = (state_18954[(2)]);
var inst_18943 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_18954__$1 = (function (){var statearr_18981 = state_18954;
(statearr_18981[(15)] = inst_18942);

return statearr_18981;
})();
if(cljs.core.truth_(inst_18943)){
var statearr_18982_19013 = state_18954__$1;
(statearr_18982_19013[(1)] = (21));

} else {
var statearr_18983_19014 = state_18954__$1;
(statearr_18983_19014[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (5))){
var inst_18898 = cljs.core.async.close_BANG_.call(null,out);
var state_18954__$1 = state_18954;
var statearr_18984_19015 = state_18954__$1;
(statearr_18984_19015[(2)] = inst_18898);

(statearr_18984_19015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (14))){
var inst_18920 = (state_18954[(7)]);
var inst_18922 = cljs.core.chunked_seq_QMARK_.call(null,inst_18920);
var state_18954__$1 = state_18954;
if(inst_18922){
var statearr_18985_19016 = state_18954__$1;
(statearr_18985_19016[(1)] = (17));

} else {
var statearr_18986_19017 = state_18954__$1;
(statearr_18986_19017[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (16))){
var inst_18938 = (state_18954[(2)]);
var state_18954__$1 = state_18954;
var statearr_18987_19018 = state_18954__$1;
(statearr_18987_19018[(2)] = inst_18938);

(statearr_18987_19018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18955 === (10))){
var inst_18909 = (state_18954[(9)]);
var inst_18907 = (state_18954[(10)]);
var inst_18914 = cljs.core._nth.call(null,inst_18907,inst_18909);
var state_18954__$1 = state_18954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18954__$1,(13),out,inst_18914);
} else {
if((state_val_18955 === (18))){
var inst_18920 = (state_18954[(7)]);
var inst_18929 = cljs.core.first.call(null,inst_18920);
var state_18954__$1 = state_18954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18954__$1,(20),out,inst_18929);
} else {
if((state_val_18955 === (8))){
var inst_18909 = (state_18954[(9)]);
var inst_18908 = (state_18954[(12)]);
var inst_18911 = (inst_18909 < inst_18908);
var inst_18912 = inst_18911;
var state_18954__$1 = state_18954;
if(cljs.core.truth_(inst_18912)){
var statearr_18988_19019 = state_18954__$1;
(statearr_18988_19019[(1)] = (10));

} else {
var statearr_18989_19020 = state_18954__$1;
(statearr_18989_19020[(1)] = (11));

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
});})(c__5977__auto__))
;
return ((function (switch__5962__auto__,c__5977__auto__){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_18993 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18993[(0)] = state_machine__5963__auto__);

(statearr_18993[(1)] = (1));

return statearr_18993;
});
var state_machine__5963__auto____1 = (function (state_18954){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_18954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e18994){if((e18994 instanceof Object)){
var ex__5966__auto__ = e18994;
var statearr_18995_19021 = state_18954;
(statearr_18995_19021[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19022 = state_18954;
state_18954 = G__19022;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_18954){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_18954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto__))
})();
var state__5979__auto__ = (function (){var statearr_18996 = f__5978__auto__.call(null);
(statearr_18996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto__);

return statearr_18996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto__))
);

return c__5977__auto__;
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
var c__5977__auto___19119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___19119,out){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___19119,out){
return (function (state_19094){
var state_val_19095 = (state_19094[(1)]);
if((state_val_19095 === (7))){
var inst_19089 = (state_19094[(2)]);
var state_19094__$1 = state_19094;
var statearr_19096_19120 = state_19094__$1;
(statearr_19096_19120[(2)] = inst_19089);

(statearr_19096_19120[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (1))){
var inst_19071 = null;
var state_19094__$1 = (function (){var statearr_19097 = state_19094;
(statearr_19097[(7)] = inst_19071);

return statearr_19097;
})();
var statearr_19098_19121 = state_19094__$1;
(statearr_19098_19121[(2)] = null);

(statearr_19098_19121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (4))){
var inst_19074 = (state_19094[(8)]);
var inst_19074__$1 = (state_19094[(2)]);
var inst_19075 = (inst_19074__$1 == null);
var inst_19076 = cljs.core.not.call(null,inst_19075);
var state_19094__$1 = (function (){var statearr_19099 = state_19094;
(statearr_19099[(8)] = inst_19074__$1);

return statearr_19099;
})();
if(inst_19076){
var statearr_19100_19122 = state_19094__$1;
(statearr_19100_19122[(1)] = (5));

} else {
var statearr_19101_19123 = state_19094__$1;
(statearr_19101_19123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (6))){
var state_19094__$1 = state_19094;
var statearr_19102_19124 = state_19094__$1;
(statearr_19102_19124[(2)] = null);

(statearr_19102_19124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (3))){
var inst_19091 = (state_19094[(2)]);
var inst_19092 = cljs.core.async.close_BANG_.call(null,out);
var state_19094__$1 = (function (){var statearr_19103 = state_19094;
(statearr_19103[(9)] = inst_19091);

return statearr_19103;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19094__$1,inst_19092);
} else {
if((state_val_19095 === (2))){
var state_19094__$1 = state_19094;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19094__$1,(4),ch);
} else {
if((state_val_19095 === (11))){
var inst_19074 = (state_19094[(8)]);
var inst_19083 = (state_19094[(2)]);
var inst_19071 = inst_19074;
var state_19094__$1 = (function (){var statearr_19104 = state_19094;
(statearr_19104[(7)] = inst_19071);

(statearr_19104[(10)] = inst_19083);

return statearr_19104;
})();
var statearr_19105_19125 = state_19094__$1;
(statearr_19105_19125[(2)] = null);

(statearr_19105_19125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (9))){
var inst_19074 = (state_19094[(8)]);
var state_19094__$1 = state_19094;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19094__$1,(11),out,inst_19074);
} else {
if((state_val_19095 === (5))){
var inst_19071 = (state_19094[(7)]);
var inst_19074 = (state_19094[(8)]);
var inst_19078 = cljs.core._EQ_.call(null,inst_19074,inst_19071);
var state_19094__$1 = state_19094;
if(inst_19078){
var statearr_19107_19126 = state_19094__$1;
(statearr_19107_19126[(1)] = (8));

} else {
var statearr_19108_19127 = state_19094__$1;
(statearr_19108_19127[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (10))){
var inst_19086 = (state_19094[(2)]);
var state_19094__$1 = state_19094;
var statearr_19109_19128 = state_19094__$1;
(statearr_19109_19128[(2)] = inst_19086);

(statearr_19109_19128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19095 === (8))){
var inst_19071 = (state_19094[(7)]);
var tmp19106 = inst_19071;
var inst_19071__$1 = tmp19106;
var state_19094__$1 = (function (){var statearr_19110 = state_19094;
(statearr_19110[(7)] = inst_19071__$1);

return statearr_19110;
})();
var statearr_19111_19129 = state_19094__$1;
(statearr_19111_19129[(2)] = null);

(statearr_19111_19129[(1)] = (2));


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
});})(c__5977__auto___19119,out))
;
return ((function (switch__5962__auto__,c__5977__auto___19119,out){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_19115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19115[(0)] = state_machine__5963__auto__);

(statearr_19115[(1)] = (1));

return statearr_19115;
});
var state_machine__5963__auto____1 = (function (state_19094){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_19094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e19116){if((e19116 instanceof Object)){
var ex__5966__auto__ = e19116;
var statearr_19117_19130 = state_19094;
(statearr_19117_19130[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19131 = state_19094;
state_19094 = G__19131;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_19094){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_19094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___19119,out))
})();
var state__5979__auto__ = (function (){var statearr_19118 = f__5978__auto__.call(null);
(statearr_19118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___19119);

return statearr_19118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___19119,out))
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
var c__5977__auto___19266 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___19266,out){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___19266,out){
return (function (state_19236){
var state_val_19237 = (state_19236[(1)]);
if((state_val_19237 === (7))){
var inst_19232 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19238_19267 = state_19236__$1;
(statearr_19238_19267[(2)] = inst_19232);

(statearr_19238_19267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (1))){
var inst_19199 = (new Array(n));
var inst_19200 = inst_19199;
var inst_19201 = (0);
var state_19236__$1 = (function (){var statearr_19239 = state_19236;
(statearr_19239[(7)] = inst_19201);

(statearr_19239[(8)] = inst_19200);

return statearr_19239;
})();
var statearr_19240_19268 = state_19236__$1;
(statearr_19240_19268[(2)] = null);

(statearr_19240_19268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (4))){
var inst_19204 = (state_19236[(9)]);
var inst_19204__$1 = (state_19236[(2)]);
var inst_19205 = (inst_19204__$1 == null);
var inst_19206 = cljs.core.not.call(null,inst_19205);
var state_19236__$1 = (function (){var statearr_19241 = state_19236;
(statearr_19241[(9)] = inst_19204__$1);

return statearr_19241;
})();
if(inst_19206){
var statearr_19242_19269 = state_19236__$1;
(statearr_19242_19269[(1)] = (5));

} else {
var statearr_19243_19270 = state_19236__$1;
(statearr_19243_19270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (15))){
var inst_19226 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19244_19271 = state_19236__$1;
(statearr_19244_19271[(2)] = inst_19226);

(statearr_19244_19271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (13))){
var state_19236__$1 = state_19236;
var statearr_19245_19272 = state_19236__$1;
(statearr_19245_19272[(2)] = null);

(statearr_19245_19272[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (6))){
var inst_19201 = (state_19236[(7)]);
var inst_19222 = (inst_19201 > (0));
var state_19236__$1 = state_19236;
if(cljs.core.truth_(inst_19222)){
var statearr_19246_19273 = state_19236__$1;
(statearr_19246_19273[(1)] = (12));

} else {
var statearr_19247_19274 = state_19236__$1;
(statearr_19247_19274[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (3))){
var inst_19234 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19236__$1,inst_19234);
} else {
if((state_val_19237 === (12))){
var inst_19200 = (state_19236[(8)]);
var inst_19224 = cljs.core.vec.call(null,inst_19200);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19236__$1,(15),out,inst_19224);
} else {
if((state_val_19237 === (2))){
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19236__$1,(4),ch);
} else {
if((state_val_19237 === (11))){
var inst_19216 = (state_19236[(2)]);
var inst_19217 = (new Array(n));
var inst_19200 = inst_19217;
var inst_19201 = (0);
var state_19236__$1 = (function (){var statearr_19248 = state_19236;
(statearr_19248[(7)] = inst_19201);

(statearr_19248[(10)] = inst_19216);

(statearr_19248[(8)] = inst_19200);

return statearr_19248;
})();
var statearr_19249_19275 = state_19236__$1;
(statearr_19249_19275[(2)] = null);

(statearr_19249_19275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (9))){
var inst_19200 = (state_19236[(8)]);
var inst_19214 = cljs.core.vec.call(null,inst_19200);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19236__$1,(11),out,inst_19214);
} else {
if((state_val_19237 === (5))){
var inst_19201 = (state_19236[(7)]);
var inst_19204 = (state_19236[(9)]);
var inst_19200 = (state_19236[(8)]);
var inst_19209 = (state_19236[(11)]);
var inst_19208 = (inst_19200[inst_19201] = inst_19204);
var inst_19209__$1 = (inst_19201 + (1));
var inst_19210 = (inst_19209__$1 < n);
var state_19236__$1 = (function (){var statearr_19250 = state_19236;
(statearr_19250[(11)] = inst_19209__$1);

(statearr_19250[(12)] = inst_19208);

return statearr_19250;
})();
if(cljs.core.truth_(inst_19210)){
var statearr_19251_19276 = state_19236__$1;
(statearr_19251_19276[(1)] = (8));

} else {
var statearr_19252_19277 = state_19236__$1;
(statearr_19252_19277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (14))){
var inst_19229 = (state_19236[(2)]);
var inst_19230 = cljs.core.async.close_BANG_.call(null,out);
var state_19236__$1 = (function (){var statearr_19254 = state_19236;
(statearr_19254[(13)] = inst_19229);

return statearr_19254;
})();
var statearr_19255_19278 = state_19236__$1;
(statearr_19255_19278[(2)] = inst_19230);

(statearr_19255_19278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (10))){
var inst_19220 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19256_19279 = state_19236__$1;
(statearr_19256_19279[(2)] = inst_19220);

(statearr_19256_19279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (8))){
var inst_19200 = (state_19236[(8)]);
var inst_19209 = (state_19236[(11)]);
var tmp19253 = inst_19200;
var inst_19200__$1 = tmp19253;
var inst_19201 = inst_19209;
var state_19236__$1 = (function (){var statearr_19257 = state_19236;
(statearr_19257[(7)] = inst_19201);

(statearr_19257[(8)] = inst_19200__$1);

return statearr_19257;
})();
var statearr_19258_19280 = state_19236__$1;
(statearr_19258_19280[(2)] = null);

(statearr_19258_19280[(1)] = (2));


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
});})(c__5977__auto___19266,out))
;
return ((function (switch__5962__auto__,c__5977__auto___19266,out){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_19262 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19262[(0)] = state_machine__5963__auto__);

(statearr_19262[(1)] = (1));

return statearr_19262;
});
var state_machine__5963__auto____1 = (function (state_19236){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_19236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e19263){if((e19263 instanceof Object)){
var ex__5966__auto__ = e19263;
var statearr_19264_19281 = state_19236;
(statearr_19264_19281[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19282 = state_19236;
state_19236 = G__19282;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_19236){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_19236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___19266,out))
})();
var state__5979__auto__ = (function (){var statearr_19265 = f__5978__auto__.call(null);
(statearr_19265[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___19266);

return statearr_19265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___19266,out))
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
var c__5977__auto___19425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__5977__auto___19425,out){
return (function (){
var f__5978__auto__ = (function (){var switch__5962__auto__ = ((function (c__5977__auto___19425,out){
return (function (state_19395){
var state_val_19396 = (state_19395[(1)]);
if((state_val_19396 === (7))){
var inst_19391 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
var statearr_19397_19426 = state_19395__$1;
(statearr_19397_19426[(2)] = inst_19391);

(statearr_19397_19426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (1))){
var inst_19354 = [];
var inst_19355 = inst_19354;
var inst_19356 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19395__$1 = (function (){var statearr_19398 = state_19395;
(statearr_19398[(7)] = inst_19355);

(statearr_19398[(8)] = inst_19356);

return statearr_19398;
})();
var statearr_19399_19427 = state_19395__$1;
(statearr_19399_19427[(2)] = null);

(statearr_19399_19427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (4))){
var inst_19359 = (state_19395[(9)]);
var inst_19359__$1 = (state_19395[(2)]);
var inst_19360 = (inst_19359__$1 == null);
var inst_19361 = cljs.core.not.call(null,inst_19360);
var state_19395__$1 = (function (){var statearr_19400 = state_19395;
(statearr_19400[(9)] = inst_19359__$1);

return statearr_19400;
})();
if(inst_19361){
var statearr_19401_19428 = state_19395__$1;
(statearr_19401_19428[(1)] = (5));

} else {
var statearr_19402_19429 = state_19395__$1;
(statearr_19402_19429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (15))){
var inst_19385 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
var statearr_19403_19430 = state_19395__$1;
(statearr_19403_19430[(2)] = inst_19385);

(statearr_19403_19430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (13))){
var state_19395__$1 = state_19395;
var statearr_19404_19431 = state_19395__$1;
(statearr_19404_19431[(2)] = null);

(statearr_19404_19431[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (6))){
var inst_19355 = (state_19395[(7)]);
var inst_19380 = inst_19355.length;
var inst_19381 = (inst_19380 > (0));
var state_19395__$1 = state_19395;
if(cljs.core.truth_(inst_19381)){
var statearr_19405_19432 = state_19395__$1;
(statearr_19405_19432[(1)] = (12));

} else {
var statearr_19406_19433 = state_19395__$1;
(statearr_19406_19433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (3))){
var inst_19393 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19395__$1,inst_19393);
} else {
if((state_val_19396 === (12))){
var inst_19355 = (state_19395[(7)]);
var inst_19383 = cljs.core.vec.call(null,inst_19355);
var state_19395__$1 = state_19395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19395__$1,(15),out,inst_19383);
} else {
if((state_val_19396 === (2))){
var state_19395__$1 = state_19395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19395__$1,(4),ch);
} else {
if((state_val_19396 === (11))){
var inst_19359 = (state_19395[(9)]);
var inst_19363 = (state_19395[(10)]);
var inst_19373 = (state_19395[(2)]);
var inst_19374 = [];
var inst_19375 = inst_19374.push(inst_19359);
var inst_19355 = inst_19374;
var inst_19356 = inst_19363;
var state_19395__$1 = (function (){var statearr_19407 = state_19395;
(statearr_19407[(7)] = inst_19355);

(statearr_19407[(11)] = inst_19373);

(statearr_19407[(12)] = inst_19375);

(statearr_19407[(8)] = inst_19356);

return statearr_19407;
})();
var statearr_19408_19434 = state_19395__$1;
(statearr_19408_19434[(2)] = null);

(statearr_19408_19434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (9))){
var inst_19355 = (state_19395[(7)]);
var inst_19371 = cljs.core.vec.call(null,inst_19355);
var state_19395__$1 = state_19395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19395__$1,(11),out,inst_19371);
} else {
if((state_val_19396 === (5))){
var inst_19359 = (state_19395[(9)]);
var inst_19356 = (state_19395[(8)]);
var inst_19363 = (state_19395[(10)]);
var inst_19363__$1 = f.call(null,inst_19359);
var inst_19364 = cljs.core._EQ_.call(null,inst_19363__$1,inst_19356);
var inst_19365 = cljs.core.keyword_identical_QMARK_.call(null,inst_19356,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19366 = (inst_19364) || (inst_19365);
var state_19395__$1 = (function (){var statearr_19409 = state_19395;
(statearr_19409[(10)] = inst_19363__$1);

return statearr_19409;
})();
if(cljs.core.truth_(inst_19366)){
var statearr_19410_19435 = state_19395__$1;
(statearr_19410_19435[(1)] = (8));

} else {
var statearr_19411_19436 = state_19395__$1;
(statearr_19411_19436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (14))){
var inst_19388 = (state_19395[(2)]);
var inst_19389 = cljs.core.async.close_BANG_.call(null,out);
var state_19395__$1 = (function (){var statearr_19413 = state_19395;
(statearr_19413[(13)] = inst_19388);

return statearr_19413;
})();
var statearr_19414_19437 = state_19395__$1;
(statearr_19414_19437[(2)] = inst_19389);

(statearr_19414_19437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (10))){
var inst_19378 = (state_19395[(2)]);
var state_19395__$1 = state_19395;
var statearr_19415_19438 = state_19395__$1;
(statearr_19415_19438[(2)] = inst_19378);

(statearr_19415_19438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19396 === (8))){
var inst_19355 = (state_19395[(7)]);
var inst_19359 = (state_19395[(9)]);
var inst_19363 = (state_19395[(10)]);
var inst_19368 = inst_19355.push(inst_19359);
var tmp19412 = inst_19355;
var inst_19355__$1 = tmp19412;
var inst_19356 = inst_19363;
var state_19395__$1 = (function (){var statearr_19416 = state_19395;
(statearr_19416[(7)] = inst_19355__$1);

(statearr_19416[(8)] = inst_19356);

(statearr_19416[(14)] = inst_19368);

return statearr_19416;
})();
var statearr_19417_19439 = state_19395__$1;
(statearr_19417_19439[(2)] = null);

(statearr_19417_19439[(1)] = (2));


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
});})(c__5977__auto___19425,out))
;
return ((function (switch__5962__auto__,c__5977__auto___19425,out){
return (function() {
var state_machine__5963__auto__ = null;
var state_machine__5963__auto____0 = (function (){
var statearr_19421 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19421[(0)] = state_machine__5963__auto__);

(statearr_19421[(1)] = (1));

return statearr_19421;
});
var state_machine__5963__auto____1 = (function (state_19395){
while(true){
var ret_value__5964__auto__ = (function (){try{while(true){
var result__5965__auto__ = switch__5962__auto__.call(null,state_19395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__5965__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__5965__auto__;
}
break;
}
}catch (e19422){if((e19422 instanceof Object)){
var ex__5966__auto__ = e19422;
var statearr_19423_19440 = state_19395;
(statearr_19423_19440[(5)] = ex__5966__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5964__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19441 = state_19395;
state_19395 = G__19441;
continue;
} else {
return ret_value__5964__auto__;
}
break;
}
});
state_machine__5963__auto__ = function(state_19395){
switch(arguments.length){
case 0:
return state_machine__5963__auto____0.call(this);
case 1:
return state_machine__5963__auto____1.call(this,state_19395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5963__auto____0;
state_machine__5963__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5963__auto____1;
return state_machine__5963__auto__;
})()
;})(switch__5962__auto__,c__5977__auto___19425,out))
})();
var state__5979__auto__ = (function (){var statearr_19424 = f__5978__auto__.call(null);
(statearr_19424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5977__auto___19425);

return statearr_19424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5979__auto__);
});})(c__5977__auto___19425,out))
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

//# sourceMappingURL=async.js.map