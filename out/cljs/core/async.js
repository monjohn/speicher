// Compiled by ClojureScript 0.0-2674 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t20243 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20243 = (function (f,fn_handler,meta20244){
this.f = f;
this.fn_handler = fn_handler;
this.meta20244 = meta20244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20243.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t20243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t20243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20245){
var self__ = this;
var _20245__$1 = this;
return self__.meta20244;
});

cljs.core.async.t20243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20245,meta20244__$1){
var self__ = this;
var _20245__$1 = this;
return (new cljs.core.async.t20243(self__.f,self__.fn_handler,meta20244__$1));
});

cljs.core.async.t20243.cljs$lang$type = true;

cljs.core.async.t20243.cljs$lang$ctorStr = "cljs.core.async/t20243";

cljs.core.async.t20243.cljs$lang$ctorPrWriter = (function (this__4319__auto__,writer__4320__auto__,opt__4321__auto__){
return cljs.core._write.call(null,writer__4320__auto__,"cljs.core.async/t20243");
});

cljs.core.async.__GT_t20243 = (function __GT_t20243(f__$1,fn_handler__$1,meta20244){
return (new cljs.core.async.t20243(f__$1,fn_handler__$1,meta20244));
});

}

return (new cljs.core.async.t20243(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/out/cljs/core/async.cljs"], null)));
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
var G__20247 = buff;
if(G__20247){
var bit__4413__auto__ = null;
if(cljs.core.truth_((function (){var or__3732__auto__ = bit__4413__auto__;
if(cljs.core.truth_(or__3732__auto__)){
return or__3732__auto__;
} else {
return G__20247.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__20247.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20247);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__20247);
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
var val_20248 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20248);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20248,ret){
return (function (){
return fn1.call(null,val_20248);
});})(val_20248,ret))
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
var n__4619__auto___20249 = n;
var x_20250 = (0);
while(true){
if((x_20250 < n__4619__auto___20249)){
(a[x_20250] = (0));

var G__20251 = (x_20250 + (1));
x_20250 = G__20251;
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

var G__20252 = (i + (1));
i = G__20252;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t20256 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20256 = (function (flag,alt_flag,meta20257){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta20257 = meta20257;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20256.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20256.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t20256.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t20256.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20258){
var self__ = this;
var _20258__$1 = this;
return self__.meta20257;
});})(flag))
;

cljs.core.async.t20256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20258,meta20257__$1){
var self__ = this;
var _20258__$1 = this;
return (new cljs.core.async.t20256(self__.flag,self__.alt_flag,meta20257__$1));
});})(flag))
;

cljs.core.async.t20256.cljs$lang$type = true;

cljs.core.async.t20256.cljs$lang$ctorStr = "cljs.core.async/t20256";

cljs.core.async.t20256.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4319__auto__,writer__4320__auto__,opt__4321__auto__){
return cljs.core._write.call(null,writer__4320__auto__,"cljs.core.async/t20256");
});})(flag))
;

cljs.core.async.__GT_t20256 = ((function (flag){
return (function __GT_t20256(flag__$1,alt_flag__$1,meta20257){
return (new cljs.core.async.t20256(flag__$1,alt_flag__$1,meta20257));
});})(flag))
;

}

return (new cljs.core.async.t20256(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t20262 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t20262 = (function (cb,flag,alt_handler,meta20263){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta20263 = meta20263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20262.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t20262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t20262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t20262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20264){
var self__ = this;
var _20264__$1 = this;
return self__.meta20263;
});

cljs.core.async.t20262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20264,meta20263__$1){
var self__ = this;
var _20264__$1 = this;
return (new cljs.core.async.t20262(self__.cb,self__.flag,self__.alt_handler,meta20263__$1));
});

cljs.core.async.t20262.cljs$lang$type = true;

cljs.core.async.t20262.cljs$lang$ctorStr = "cljs.core.async/t20262";

cljs.core.async.t20262.cljs$lang$ctorPrWriter = (function (this__4319__auto__,writer__4320__auto__,opt__4321__auto__){
return cljs.core._write.call(null,writer__4320__auto__,"cljs.core.async/t20262");
});

cljs.core.async.__GT_t20262 = (function __GT_t20262(cb__$1,flag__$1,alt_handler__$1,meta20263){
return (new cljs.core.async.t20262(cb__$1,flag__$1,alt_handler__$1,meta20263));
});

}

return (new cljs.core.async.t20262(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/out/cljs/core/async.cljs"], null)));
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
return (function (p1__20265_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20265_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20266_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20266_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3732__auto__ = wport;
if(cljs.core.truth_(or__3732__auto__)){
return or__3732__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20267 = (i + (1));
i = G__20267;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3732__auto__ = ret;
if(cljs.core.truth_(or__3732__auto__)){
return or__3732__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3720__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3720__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3720__auto__;
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
var alts_BANG___delegate = function (ports,p__20268){
var map__20270 = p__20268;
var map__20270__$1 = ((cljs.core.seq_QMARK_.call(null,map__20270))?cljs.core.apply.call(null,cljs.core.hash_map,map__20270):map__20270);
var opts = map__20270__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__20268 = null;
if (arguments.length > 1) {
var G__20271__i = 0, G__20271__a = new Array(arguments.length -  1);
while (G__20271__i < G__20271__a.length) {G__20271__a[G__20271__i] = arguments[G__20271__i + 1]; ++G__20271__i;}
  p__20268 = new cljs.core.IndexedSeq(G__20271__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__20268);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__20272){
var ports = cljs.core.first(arglist__20272);
var p__20268 = cljs.core.rest(arglist__20272);
return alts_BANG___delegate(ports,p__20268);
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
var c__12570__auto___20367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___20367){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___20367){
return (function (state_20343){
var state_val_20344 = (state_20343[(1)]);
if((state_val_20344 === (7))){
var inst_20339 = (state_20343[(2)]);
var state_20343__$1 = state_20343;
var statearr_20345_20368 = state_20343__$1;
(statearr_20345_20368[(2)] = inst_20339);

(statearr_20345_20368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (1))){
var state_20343__$1 = state_20343;
var statearr_20346_20369 = state_20343__$1;
(statearr_20346_20369[(2)] = null);

(statearr_20346_20369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (4))){
var inst_20322 = (state_20343[(7)]);
var inst_20322__$1 = (state_20343[(2)]);
var inst_20323 = (inst_20322__$1 == null);
var state_20343__$1 = (function (){var statearr_20347 = state_20343;
(statearr_20347[(7)] = inst_20322__$1);

return statearr_20347;
})();
if(cljs.core.truth_(inst_20323)){
var statearr_20348_20370 = state_20343__$1;
(statearr_20348_20370[(1)] = (5));

} else {
var statearr_20349_20371 = state_20343__$1;
(statearr_20349_20371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (13))){
var state_20343__$1 = state_20343;
var statearr_20350_20372 = state_20343__$1;
(statearr_20350_20372[(2)] = null);

(statearr_20350_20372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (6))){
var inst_20322 = (state_20343[(7)]);
var state_20343__$1 = state_20343;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20343__$1,(11),to,inst_20322);
} else {
if((state_val_20344 === (3))){
var inst_20341 = (state_20343[(2)]);
var state_20343__$1 = state_20343;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20343__$1,inst_20341);
} else {
if((state_val_20344 === (12))){
var state_20343__$1 = state_20343;
var statearr_20351_20373 = state_20343__$1;
(statearr_20351_20373[(2)] = null);

(statearr_20351_20373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (2))){
var state_20343__$1 = state_20343;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20343__$1,(4),from);
} else {
if((state_val_20344 === (11))){
var inst_20332 = (state_20343[(2)]);
var state_20343__$1 = state_20343;
if(cljs.core.truth_(inst_20332)){
var statearr_20352_20374 = state_20343__$1;
(statearr_20352_20374[(1)] = (12));

} else {
var statearr_20353_20375 = state_20343__$1;
(statearr_20353_20375[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (9))){
var state_20343__$1 = state_20343;
var statearr_20354_20376 = state_20343__$1;
(statearr_20354_20376[(2)] = null);

(statearr_20354_20376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (5))){
var state_20343__$1 = state_20343;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20355_20377 = state_20343__$1;
(statearr_20355_20377[(1)] = (8));

} else {
var statearr_20356_20378 = state_20343__$1;
(statearr_20356_20378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (14))){
var inst_20337 = (state_20343[(2)]);
var state_20343__$1 = state_20343;
var statearr_20357_20379 = state_20343__$1;
(statearr_20357_20379[(2)] = inst_20337);

(statearr_20357_20379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (10))){
var inst_20329 = (state_20343[(2)]);
var state_20343__$1 = state_20343;
var statearr_20358_20380 = state_20343__$1;
(statearr_20358_20380[(2)] = inst_20329);

(statearr_20358_20380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20344 === (8))){
var inst_20326 = cljs.core.async.close_BANG_.call(null,to);
var state_20343__$1 = state_20343;
var statearr_20359_20381 = state_20343__$1;
(statearr_20359_20381[(2)] = inst_20326);

(statearr_20359_20381[(1)] = (10));


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
});})(c__12570__auto___20367))
;
return ((function (switch__12514__auto__,c__12570__auto___20367){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_20363 = [null,null,null,null,null,null,null,null];
(statearr_20363[(0)] = state_machine__12515__auto__);

(statearr_20363[(1)] = (1));

return statearr_20363;
});
var state_machine__12515__auto____1 = (function (state_20343){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_20343);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e20364){if((e20364 instanceof Object)){
var ex__12518__auto__ = e20364;
var statearr_20365_20382 = state_20343;
(statearr_20365_20382[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20343);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20383 = state_20343;
state_20343 = G__20383;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_20343){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_20343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___20367))
})();
var state__12572__auto__ = (function (){var statearr_20366 = f__12571__auto__.call(null);
(statearr_20366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___20367);

return statearr_20366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___20367))
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
return (function (p__20567){
var vec__20568 = p__20567;
var v = cljs.core.nth.call(null,vec__20568,(0),null);
var p = cljs.core.nth.call(null,vec__20568,(1),null);
var job = vec__20568;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12570__auto___20750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___20750,res,vec__20568,v,p,job,jobs,results){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___20750,res,vec__20568,v,p,job,jobs,results){
return (function (state_20573){
var state_val_20574 = (state_20573[(1)]);
if((state_val_20574 === (2))){
var inst_20570 = (state_20573[(2)]);
var inst_20571 = cljs.core.async.close_BANG_.call(null,res);
var state_20573__$1 = (function (){var statearr_20575 = state_20573;
(statearr_20575[(7)] = inst_20570);

return statearr_20575;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20573__$1,inst_20571);
} else {
if((state_val_20574 === (1))){
var state_20573__$1 = state_20573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20573__$1,(2),res,v);
} else {
return null;
}
}
});})(c__12570__auto___20750,res,vec__20568,v,p,job,jobs,results))
;
return ((function (switch__12514__auto__,c__12570__auto___20750,res,vec__20568,v,p,job,jobs,results){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_20579 = [null,null,null,null,null,null,null,null];
(statearr_20579[(0)] = state_machine__12515__auto__);

(statearr_20579[(1)] = (1));

return statearr_20579;
});
var state_machine__12515__auto____1 = (function (state_20573){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_20573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e20580){if((e20580 instanceof Object)){
var ex__12518__auto__ = e20580;
var statearr_20581_20751 = state_20573;
(statearr_20581_20751[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20752 = state_20573;
state_20573 = G__20752;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_20573){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_20573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___20750,res,vec__20568,v,p,job,jobs,results))
})();
var state__12572__auto__ = (function (){var statearr_20582 = f__12571__auto__.call(null);
(statearr_20582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___20750);

return statearr_20582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___20750,res,vec__20568,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20583){
var vec__20584 = p__20583;
var v = cljs.core.nth.call(null,vec__20584,(0),null);
var p = cljs.core.nth.call(null,vec__20584,(1),null);
var job = vec__20584;
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
var n__4619__auto___20753 = n;
var __20754 = (0);
while(true){
if((__20754 < n__4619__auto___20753)){
var G__20585_20755 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20585_20755) {
case "async":
var c__12570__auto___20757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20754,c__12570__auto___20757,G__20585_20755,n__4619__auto___20753,jobs,results,process,async){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (__20754,c__12570__auto___20757,G__20585_20755,n__4619__auto___20753,jobs,results,process,async){
return (function (state_20598){
var state_val_20599 = (state_20598[(1)]);
if((state_val_20599 === (7))){
var inst_20594 = (state_20598[(2)]);
var state_20598__$1 = state_20598;
var statearr_20600_20758 = state_20598__$1;
(statearr_20600_20758[(2)] = inst_20594);

(statearr_20600_20758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20599 === (6))){
var state_20598__$1 = state_20598;
var statearr_20601_20759 = state_20598__$1;
(statearr_20601_20759[(2)] = null);

(statearr_20601_20759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20599 === (5))){
var state_20598__$1 = state_20598;
var statearr_20602_20760 = state_20598__$1;
(statearr_20602_20760[(2)] = null);

(statearr_20602_20760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20599 === (4))){
var inst_20588 = (state_20598[(2)]);
var inst_20589 = async.call(null,inst_20588);
var state_20598__$1 = state_20598;
if(cljs.core.truth_(inst_20589)){
var statearr_20603_20761 = state_20598__$1;
(statearr_20603_20761[(1)] = (5));

} else {
var statearr_20604_20762 = state_20598__$1;
(statearr_20604_20762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20599 === (3))){
var inst_20596 = (state_20598[(2)]);
var state_20598__$1 = state_20598;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20598__$1,inst_20596);
} else {
if((state_val_20599 === (2))){
var state_20598__$1 = state_20598;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20598__$1,(4),jobs);
} else {
if((state_val_20599 === (1))){
var state_20598__$1 = state_20598;
var statearr_20605_20763 = state_20598__$1;
(statearr_20605_20763[(2)] = null);

(statearr_20605_20763[(1)] = (2));


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
});})(__20754,c__12570__auto___20757,G__20585_20755,n__4619__auto___20753,jobs,results,process,async))
;
return ((function (__20754,switch__12514__auto__,c__12570__auto___20757,G__20585_20755,n__4619__auto___20753,jobs,results,process,async){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_20609 = [null,null,null,null,null,null,null];
(statearr_20609[(0)] = state_machine__12515__auto__);

(statearr_20609[(1)] = (1));

return statearr_20609;
});
var state_machine__12515__auto____1 = (function (state_20598){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_20598);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e20610){if((e20610 instanceof Object)){
var ex__12518__auto__ = e20610;
var statearr_20611_20764 = state_20598;
(statearr_20611_20764[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20598);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20765 = state_20598;
state_20598 = G__20765;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_20598){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_20598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(__20754,switch__12514__auto__,c__12570__auto___20757,G__20585_20755,n__4619__auto___20753,jobs,results,process,async))
})();
var state__12572__auto__ = (function (){var statearr_20612 = f__12571__auto__.call(null);
(statearr_20612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___20757);

return statearr_20612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(__20754,c__12570__auto___20757,G__20585_20755,n__4619__auto___20753,jobs,results,process,async))
);


break;
case "compute":
var c__12570__auto___20766 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20754,c__12570__auto___20766,G__20585_20755,n__4619__auto___20753,jobs,results,process,async){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (__20754,c__12570__auto___20766,G__20585_20755,n__4619__auto___20753,jobs,results,process,async){
return (function (state_20625){
var state_val_20626 = (state_20625[(1)]);
if((state_val_20626 === (7))){
var inst_20621 = (state_20625[(2)]);
var state_20625__$1 = state_20625;
var statearr_20627_20767 = state_20625__$1;
(statearr_20627_20767[(2)] = inst_20621);

(statearr_20627_20767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (6))){
var state_20625__$1 = state_20625;
var statearr_20628_20768 = state_20625__$1;
(statearr_20628_20768[(2)] = null);

(statearr_20628_20768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (5))){
var state_20625__$1 = state_20625;
var statearr_20629_20769 = state_20625__$1;
(statearr_20629_20769[(2)] = null);

(statearr_20629_20769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (4))){
var inst_20615 = (state_20625[(2)]);
var inst_20616 = process.call(null,inst_20615);
var state_20625__$1 = state_20625;
if(cljs.core.truth_(inst_20616)){
var statearr_20630_20770 = state_20625__$1;
(statearr_20630_20770[(1)] = (5));

} else {
var statearr_20631_20771 = state_20625__$1;
(statearr_20631_20771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20626 === (3))){
var inst_20623 = (state_20625[(2)]);
var state_20625__$1 = state_20625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20625__$1,inst_20623);
} else {
if((state_val_20626 === (2))){
var state_20625__$1 = state_20625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20625__$1,(4),jobs);
} else {
if((state_val_20626 === (1))){
var state_20625__$1 = state_20625;
var statearr_20632_20772 = state_20625__$1;
(statearr_20632_20772[(2)] = null);

(statearr_20632_20772[(1)] = (2));


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
});})(__20754,c__12570__auto___20766,G__20585_20755,n__4619__auto___20753,jobs,results,process,async))
;
return ((function (__20754,switch__12514__auto__,c__12570__auto___20766,G__20585_20755,n__4619__auto___20753,jobs,results,process,async){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_20636 = [null,null,null,null,null,null,null];
(statearr_20636[(0)] = state_machine__12515__auto__);

(statearr_20636[(1)] = (1));

return statearr_20636;
});
var state_machine__12515__auto____1 = (function (state_20625){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_20625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e20637){if((e20637 instanceof Object)){
var ex__12518__auto__ = e20637;
var statearr_20638_20773 = state_20625;
(statearr_20638_20773[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20774 = state_20625;
state_20625 = G__20774;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_20625){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_20625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(__20754,switch__12514__auto__,c__12570__auto___20766,G__20585_20755,n__4619__auto___20753,jobs,results,process,async))
})();
var state__12572__auto__ = (function (){var statearr_20639 = f__12571__auto__.call(null);
(statearr_20639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___20766);

return statearr_20639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(__20754,c__12570__auto___20766,G__20585_20755,n__4619__auto___20753,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20775 = (__20754 + (1));
__20754 = G__20775;
continue;
} else {
}
break;
}

var c__12570__auto___20776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___20776,jobs,results,process,async){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___20776,jobs,results,process,async){
return (function (state_20661){
var state_val_20662 = (state_20661[(1)]);
if((state_val_20662 === (9))){
var inst_20654 = (state_20661[(2)]);
var state_20661__$1 = (function (){var statearr_20663 = state_20661;
(statearr_20663[(7)] = inst_20654);

return statearr_20663;
})();
var statearr_20664_20777 = state_20661__$1;
(statearr_20664_20777[(2)] = null);

(statearr_20664_20777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (8))){
var inst_20647 = (state_20661[(8)]);
var inst_20652 = (state_20661[(2)]);
var state_20661__$1 = (function (){var statearr_20665 = state_20661;
(statearr_20665[(9)] = inst_20652);

return statearr_20665;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20661__$1,(9),results,inst_20647);
} else {
if((state_val_20662 === (7))){
var inst_20657 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
var statearr_20666_20778 = state_20661__$1;
(statearr_20666_20778[(2)] = inst_20657);

(statearr_20666_20778[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (6))){
var inst_20647 = (state_20661[(8)]);
var inst_20642 = (state_20661[(10)]);
var inst_20647__$1 = cljs.core.async.chan.call(null,(1));
var inst_20648 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20649 = [inst_20642,inst_20647__$1];
var inst_20650 = (new cljs.core.PersistentVector(null,2,(5),inst_20648,inst_20649,null));
var state_20661__$1 = (function (){var statearr_20667 = state_20661;
(statearr_20667[(8)] = inst_20647__$1);

return statearr_20667;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20661__$1,(8),jobs,inst_20650);
} else {
if((state_val_20662 === (5))){
var inst_20645 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20661__$1 = state_20661;
var statearr_20668_20779 = state_20661__$1;
(statearr_20668_20779[(2)] = inst_20645);

(statearr_20668_20779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (4))){
var inst_20642 = (state_20661[(10)]);
var inst_20642__$1 = (state_20661[(2)]);
var inst_20643 = (inst_20642__$1 == null);
var state_20661__$1 = (function (){var statearr_20669 = state_20661;
(statearr_20669[(10)] = inst_20642__$1);

return statearr_20669;
})();
if(cljs.core.truth_(inst_20643)){
var statearr_20670_20780 = state_20661__$1;
(statearr_20670_20780[(1)] = (5));

} else {
var statearr_20671_20781 = state_20661__$1;
(statearr_20671_20781[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20662 === (3))){
var inst_20659 = (state_20661[(2)]);
var state_20661__$1 = state_20661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20661__$1,inst_20659);
} else {
if((state_val_20662 === (2))){
var state_20661__$1 = state_20661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20661__$1,(4),from);
} else {
if((state_val_20662 === (1))){
var state_20661__$1 = state_20661;
var statearr_20672_20782 = state_20661__$1;
(statearr_20672_20782[(2)] = null);

(statearr_20672_20782[(1)] = (2));


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
});})(c__12570__auto___20776,jobs,results,process,async))
;
return ((function (switch__12514__auto__,c__12570__auto___20776,jobs,results,process,async){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_20676 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20676[(0)] = state_machine__12515__auto__);

(statearr_20676[(1)] = (1));

return statearr_20676;
});
var state_machine__12515__auto____1 = (function (state_20661){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_20661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e20677){if((e20677 instanceof Object)){
var ex__12518__auto__ = e20677;
var statearr_20678_20783 = state_20661;
(statearr_20678_20783[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20784 = state_20661;
state_20661 = G__20784;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_20661){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_20661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___20776,jobs,results,process,async))
})();
var state__12572__auto__ = (function (){var statearr_20679 = f__12571__auto__.call(null);
(statearr_20679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___20776);

return statearr_20679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___20776,jobs,results,process,async))
);


var c__12570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto__,jobs,results,process,async){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto__,jobs,results,process,async){
return (function (state_20717){
var state_val_20718 = (state_20717[(1)]);
if((state_val_20718 === (7))){
var inst_20713 = (state_20717[(2)]);
var state_20717__$1 = state_20717;
var statearr_20719_20785 = state_20717__$1;
(statearr_20719_20785[(2)] = inst_20713);

(statearr_20719_20785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (20))){
var state_20717__$1 = state_20717;
var statearr_20720_20786 = state_20717__$1;
(statearr_20720_20786[(2)] = null);

(statearr_20720_20786[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (1))){
var state_20717__$1 = state_20717;
var statearr_20721_20787 = state_20717__$1;
(statearr_20721_20787[(2)] = null);

(statearr_20721_20787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (4))){
var inst_20682 = (state_20717[(7)]);
var inst_20682__$1 = (state_20717[(2)]);
var inst_20683 = (inst_20682__$1 == null);
var state_20717__$1 = (function (){var statearr_20722 = state_20717;
(statearr_20722[(7)] = inst_20682__$1);

return statearr_20722;
})();
if(cljs.core.truth_(inst_20683)){
var statearr_20723_20788 = state_20717__$1;
(statearr_20723_20788[(1)] = (5));

} else {
var statearr_20724_20789 = state_20717__$1;
(statearr_20724_20789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (15))){
var inst_20695 = (state_20717[(8)]);
var state_20717__$1 = state_20717;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20717__$1,(18),to,inst_20695);
} else {
if((state_val_20718 === (21))){
var inst_20708 = (state_20717[(2)]);
var state_20717__$1 = state_20717;
var statearr_20725_20790 = state_20717__$1;
(statearr_20725_20790[(2)] = inst_20708);

(statearr_20725_20790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (13))){
var inst_20710 = (state_20717[(2)]);
var state_20717__$1 = (function (){var statearr_20726 = state_20717;
(statearr_20726[(9)] = inst_20710);

return statearr_20726;
})();
var statearr_20727_20791 = state_20717__$1;
(statearr_20727_20791[(2)] = null);

(statearr_20727_20791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (6))){
var inst_20682 = (state_20717[(7)]);
var state_20717__$1 = state_20717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20717__$1,(11),inst_20682);
} else {
if((state_val_20718 === (17))){
var inst_20703 = (state_20717[(2)]);
var state_20717__$1 = state_20717;
if(cljs.core.truth_(inst_20703)){
var statearr_20728_20792 = state_20717__$1;
(statearr_20728_20792[(1)] = (19));

} else {
var statearr_20729_20793 = state_20717__$1;
(statearr_20729_20793[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (3))){
var inst_20715 = (state_20717[(2)]);
var state_20717__$1 = state_20717;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20717__$1,inst_20715);
} else {
if((state_val_20718 === (12))){
var inst_20692 = (state_20717[(10)]);
var state_20717__$1 = state_20717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20717__$1,(14),inst_20692);
} else {
if((state_val_20718 === (2))){
var state_20717__$1 = state_20717;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20717__$1,(4),results);
} else {
if((state_val_20718 === (19))){
var state_20717__$1 = state_20717;
var statearr_20730_20794 = state_20717__$1;
(statearr_20730_20794[(2)] = null);

(statearr_20730_20794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (11))){
var inst_20692 = (state_20717[(2)]);
var state_20717__$1 = (function (){var statearr_20731 = state_20717;
(statearr_20731[(10)] = inst_20692);

return statearr_20731;
})();
var statearr_20732_20795 = state_20717__$1;
(statearr_20732_20795[(2)] = null);

(statearr_20732_20795[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (9))){
var state_20717__$1 = state_20717;
var statearr_20733_20796 = state_20717__$1;
(statearr_20733_20796[(2)] = null);

(statearr_20733_20796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (5))){
var state_20717__$1 = state_20717;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20734_20797 = state_20717__$1;
(statearr_20734_20797[(1)] = (8));

} else {
var statearr_20735_20798 = state_20717__$1;
(statearr_20735_20798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (14))){
var inst_20697 = (state_20717[(11)]);
var inst_20695 = (state_20717[(8)]);
var inst_20695__$1 = (state_20717[(2)]);
var inst_20696 = (inst_20695__$1 == null);
var inst_20697__$1 = cljs.core.not.call(null,inst_20696);
var state_20717__$1 = (function (){var statearr_20736 = state_20717;
(statearr_20736[(11)] = inst_20697__$1);

(statearr_20736[(8)] = inst_20695__$1);

return statearr_20736;
})();
if(inst_20697__$1){
var statearr_20737_20799 = state_20717__$1;
(statearr_20737_20799[(1)] = (15));

} else {
var statearr_20738_20800 = state_20717__$1;
(statearr_20738_20800[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (16))){
var inst_20697 = (state_20717[(11)]);
var state_20717__$1 = state_20717;
var statearr_20739_20801 = state_20717__$1;
(statearr_20739_20801[(2)] = inst_20697);

(statearr_20739_20801[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (10))){
var inst_20689 = (state_20717[(2)]);
var state_20717__$1 = state_20717;
var statearr_20740_20802 = state_20717__$1;
(statearr_20740_20802[(2)] = inst_20689);

(statearr_20740_20802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (18))){
var inst_20700 = (state_20717[(2)]);
var state_20717__$1 = state_20717;
var statearr_20741_20803 = state_20717__$1;
(statearr_20741_20803[(2)] = inst_20700);

(statearr_20741_20803[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20718 === (8))){
var inst_20686 = cljs.core.async.close_BANG_.call(null,to);
var state_20717__$1 = state_20717;
var statearr_20742_20804 = state_20717__$1;
(statearr_20742_20804[(2)] = inst_20686);

(statearr_20742_20804[(1)] = (10));


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
});})(c__12570__auto__,jobs,results,process,async))
;
return ((function (switch__12514__auto__,c__12570__auto__,jobs,results,process,async){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_20746 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20746[(0)] = state_machine__12515__auto__);

(statearr_20746[(1)] = (1));

return statearr_20746;
});
var state_machine__12515__auto____1 = (function (state_20717){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_20717);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e20747){if((e20747 instanceof Object)){
var ex__12518__auto__ = e20747;
var statearr_20748_20805 = state_20717;
(statearr_20748_20805[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20747;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20806 = state_20717;
state_20717 = G__20806;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_20717){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_20717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto__,jobs,results,process,async))
})();
var state__12572__auto__ = (function (){var statearr_20749 = f__12571__auto__.call(null);
(statearr_20749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto__);

return statearr_20749;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto__,jobs,results,process,async))
);

return c__12570__auto__;
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
var c__12570__auto___20907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___20907,tc,fc){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___20907,tc,fc){
return (function (state_20882){
var state_val_20883 = (state_20882[(1)]);
if((state_val_20883 === (7))){
var inst_20878 = (state_20882[(2)]);
var state_20882__$1 = state_20882;
var statearr_20884_20908 = state_20882__$1;
(statearr_20884_20908[(2)] = inst_20878);

(statearr_20884_20908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20883 === (1))){
var state_20882__$1 = state_20882;
var statearr_20885_20909 = state_20882__$1;
(statearr_20885_20909[(2)] = null);

(statearr_20885_20909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20883 === (4))){
var inst_20859 = (state_20882[(7)]);
var inst_20859__$1 = (state_20882[(2)]);
var inst_20860 = (inst_20859__$1 == null);
var state_20882__$1 = (function (){var statearr_20886 = state_20882;
(statearr_20886[(7)] = inst_20859__$1);

return statearr_20886;
})();
if(cljs.core.truth_(inst_20860)){
var statearr_20887_20910 = state_20882__$1;
(statearr_20887_20910[(1)] = (5));

} else {
var statearr_20888_20911 = state_20882__$1;
(statearr_20888_20911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20883 === (13))){
var state_20882__$1 = state_20882;
var statearr_20889_20912 = state_20882__$1;
(statearr_20889_20912[(2)] = null);

(statearr_20889_20912[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20883 === (6))){
var inst_20859 = (state_20882[(7)]);
var inst_20865 = p.call(null,inst_20859);
var state_20882__$1 = state_20882;
if(cljs.core.truth_(inst_20865)){
var statearr_20890_20913 = state_20882__$1;
(statearr_20890_20913[(1)] = (9));

} else {
var statearr_20891_20914 = state_20882__$1;
(statearr_20891_20914[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20883 === (3))){
var inst_20880 = (state_20882[(2)]);
var state_20882__$1 = state_20882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20882__$1,inst_20880);
} else {
if((state_val_20883 === (12))){
var state_20882__$1 = state_20882;
var statearr_20892_20915 = state_20882__$1;
(statearr_20892_20915[(2)] = null);

(statearr_20892_20915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20883 === (2))){
var state_20882__$1 = state_20882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20882__$1,(4),ch);
} else {
if((state_val_20883 === (11))){
var inst_20859 = (state_20882[(7)]);
var inst_20869 = (state_20882[(2)]);
var state_20882__$1 = state_20882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20882__$1,(8),inst_20869,inst_20859);
} else {
if((state_val_20883 === (9))){
var state_20882__$1 = state_20882;
var statearr_20893_20916 = state_20882__$1;
(statearr_20893_20916[(2)] = tc);

(statearr_20893_20916[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20883 === (5))){
var inst_20862 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20863 = cljs.core.async.close_BANG_.call(null,fc);
var state_20882__$1 = (function (){var statearr_20894 = state_20882;
(statearr_20894[(8)] = inst_20862);

return statearr_20894;
})();
var statearr_20895_20917 = state_20882__$1;
(statearr_20895_20917[(2)] = inst_20863);

(statearr_20895_20917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20883 === (14))){
var inst_20876 = (state_20882[(2)]);
var state_20882__$1 = state_20882;
var statearr_20896_20918 = state_20882__$1;
(statearr_20896_20918[(2)] = inst_20876);

(statearr_20896_20918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20883 === (10))){
var state_20882__$1 = state_20882;
var statearr_20897_20919 = state_20882__$1;
(statearr_20897_20919[(2)] = fc);

(statearr_20897_20919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20883 === (8))){
var inst_20871 = (state_20882[(2)]);
var state_20882__$1 = state_20882;
if(cljs.core.truth_(inst_20871)){
var statearr_20898_20920 = state_20882__$1;
(statearr_20898_20920[(1)] = (12));

} else {
var statearr_20899_20921 = state_20882__$1;
(statearr_20899_20921[(1)] = (13));

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
});})(c__12570__auto___20907,tc,fc))
;
return ((function (switch__12514__auto__,c__12570__auto___20907,tc,fc){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_20903 = [null,null,null,null,null,null,null,null,null];
(statearr_20903[(0)] = state_machine__12515__auto__);

(statearr_20903[(1)] = (1));

return statearr_20903;
});
var state_machine__12515__auto____1 = (function (state_20882){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_20882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e20904){if((e20904 instanceof Object)){
var ex__12518__auto__ = e20904;
var statearr_20905_20922 = state_20882;
(statearr_20905_20922[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20904;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20923 = state_20882;
state_20882 = G__20923;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_20882){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_20882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___20907,tc,fc))
})();
var state__12572__auto__ = (function (){var statearr_20906 = f__12571__auto__.call(null);
(statearr_20906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___20907);

return statearr_20906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___20907,tc,fc))
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
var c__12570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto__){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto__){
return (function (state_20970){
var state_val_20971 = (state_20970[(1)]);
if((state_val_20971 === (7))){
var inst_20966 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
var statearr_20972_20988 = state_20970__$1;
(statearr_20972_20988[(2)] = inst_20966);

(statearr_20972_20988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (6))){
var inst_20956 = (state_20970[(7)]);
var inst_20959 = (state_20970[(8)]);
var inst_20963 = f.call(null,inst_20956,inst_20959);
var inst_20956__$1 = inst_20963;
var state_20970__$1 = (function (){var statearr_20973 = state_20970;
(statearr_20973[(7)] = inst_20956__$1);

return statearr_20973;
})();
var statearr_20974_20989 = state_20970__$1;
(statearr_20974_20989[(2)] = null);

(statearr_20974_20989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (5))){
var inst_20956 = (state_20970[(7)]);
var state_20970__$1 = state_20970;
var statearr_20975_20990 = state_20970__$1;
(statearr_20975_20990[(2)] = inst_20956);

(statearr_20975_20990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (4))){
var inst_20959 = (state_20970[(8)]);
var inst_20959__$1 = (state_20970[(2)]);
var inst_20960 = (inst_20959__$1 == null);
var state_20970__$1 = (function (){var statearr_20976 = state_20970;
(statearr_20976[(8)] = inst_20959__$1);

return statearr_20976;
})();
if(cljs.core.truth_(inst_20960)){
var statearr_20977_20991 = state_20970__$1;
(statearr_20977_20991[(1)] = (5));

} else {
var statearr_20978_20992 = state_20970__$1;
(statearr_20978_20992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20971 === (3))){
var inst_20968 = (state_20970[(2)]);
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20970__$1,inst_20968);
} else {
if((state_val_20971 === (2))){
var state_20970__$1 = state_20970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20970__$1,(4),ch);
} else {
if((state_val_20971 === (1))){
var inst_20956 = init;
var state_20970__$1 = (function (){var statearr_20979 = state_20970;
(statearr_20979[(7)] = inst_20956);

return statearr_20979;
})();
var statearr_20980_20993 = state_20970__$1;
(statearr_20980_20993[(2)] = null);

(statearr_20980_20993[(1)] = (2));


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
});})(c__12570__auto__))
;
return ((function (switch__12514__auto__,c__12570__auto__){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_20984 = [null,null,null,null,null,null,null,null,null];
(statearr_20984[(0)] = state_machine__12515__auto__);

(statearr_20984[(1)] = (1));

return statearr_20984;
});
var state_machine__12515__auto____1 = (function (state_20970){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_20970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e20985){if((e20985 instanceof Object)){
var ex__12518__auto__ = e20985;
var statearr_20986_20994 = state_20970;
(statearr_20986_20994[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20995 = state_20970;
state_20970 = G__20995;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_20970){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_20970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto__))
})();
var state__12572__auto__ = (function (){var statearr_20987 = f__12571__auto__.call(null);
(statearr_20987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto__);

return statearr_20987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto__))
);

return c__12570__auto__;
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
var c__12570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto__){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto__){
return (function (state_21069){
var state_val_21070 = (state_21069[(1)]);
if((state_val_21070 === (7))){
var inst_21051 = (state_21069[(2)]);
var state_21069__$1 = state_21069;
var statearr_21071_21094 = state_21069__$1;
(statearr_21071_21094[(2)] = inst_21051);

(statearr_21071_21094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21070 === (1))){
var inst_21045 = cljs.core.seq.call(null,coll);
var inst_21046 = inst_21045;
var state_21069__$1 = (function (){var statearr_21072 = state_21069;
(statearr_21072[(7)] = inst_21046);

return statearr_21072;
})();
var statearr_21073_21095 = state_21069__$1;
(statearr_21073_21095[(2)] = null);

(statearr_21073_21095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21070 === (4))){
var inst_21046 = (state_21069[(7)]);
var inst_21049 = cljs.core.first.call(null,inst_21046);
var state_21069__$1 = state_21069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21069__$1,(7),ch,inst_21049);
} else {
if((state_val_21070 === (13))){
var inst_21063 = (state_21069[(2)]);
var state_21069__$1 = state_21069;
var statearr_21074_21096 = state_21069__$1;
(statearr_21074_21096[(2)] = inst_21063);

(statearr_21074_21096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21070 === (6))){
var inst_21054 = (state_21069[(2)]);
var state_21069__$1 = state_21069;
if(cljs.core.truth_(inst_21054)){
var statearr_21075_21097 = state_21069__$1;
(statearr_21075_21097[(1)] = (8));

} else {
var statearr_21076_21098 = state_21069__$1;
(statearr_21076_21098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21070 === (3))){
var inst_21067 = (state_21069[(2)]);
var state_21069__$1 = state_21069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21069__$1,inst_21067);
} else {
if((state_val_21070 === (12))){
var state_21069__$1 = state_21069;
var statearr_21077_21099 = state_21069__$1;
(statearr_21077_21099[(2)] = null);

(statearr_21077_21099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21070 === (2))){
var inst_21046 = (state_21069[(7)]);
var state_21069__$1 = state_21069;
if(cljs.core.truth_(inst_21046)){
var statearr_21078_21100 = state_21069__$1;
(statearr_21078_21100[(1)] = (4));

} else {
var statearr_21079_21101 = state_21069__$1;
(statearr_21079_21101[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21070 === (11))){
var inst_21060 = cljs.core.async.close_BANG_.call(null,ch);
var state_21069__$1 = state_21069;
var statearr_21080_21102 = state_21069__$1;
(statearr_21080_21102[(2)] = inst_21060);

(statearr_21080_21102[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21070 === (9))){
var state_21069__$1 = state_21069;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21081_21103 = state_21069__$1;
(statearr_21081_21103[(1)] = (11));

} else {
var statearr_21082_21104 = state_21069__$1;
(statearr_21082_21104[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21070 === (5))){
var inst_21046 = (state_21069[(7)]);
var state_21069__$1 = state_21069;
var statearr_21083_21105 = state_21069__$1;
(statearr_21083_21105[(2)] = inst_21046);

(statearr_21083_21105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21070 === (10))){
var inst_21065 = (state_21069[(2)]);
var state_21069__$1 = state_21069;
var statearr_21084_21106 = state_21069__$1;
(statearr_21084_21106[(2)] = inst_21065);

(statearr_21084_21106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21070 === (8))){
var inst_21046 = (state_21069[(7)]);
var inst_21056 = cljs.core.next.call(null,inst_21046);
var inst_21046__$1 = inst_21056;
var state_21069__$1 = (function (){var statearr_21085 = state_21069;
(statearr_21085[(7)] = inst_21046__$1);

return statearr_21085;
})();
var statearr_21086_21107 = state_21069__$1;
(statearr_21086_21107[(2)] = null);

(statearr_21086_21107[(1)] = (2));


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
});})(c__12570__auto__))
;
return ((function (switch__12514__auto__,c__12570__auto__){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_21090 = [null,null,null,null,null,null,null,null];
(statearr_21090[(0)] = state_machine__12515__auto__);

(statearr_21090[(1)] = (1));

return statearr_21090;
});
var state_machine__12515__auto____1 = (function (state_21069){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_21069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e21091){if((e21091 instanceof Object)){
var ex__12518__auto__ = e21091;
var statearr_21092_21108 = state_21069;
(statearr_21092_21108[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21109 = state_21069;
state_21069 = G__21109;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_21069){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_21069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto__))
})();
var state__12572__auto__ = (function (){var statearr_21093 = f__12571__auto__.call(null);
(statearr_21093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto__);

return statearr_21093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto__))
);

return c__12570__auto__;
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

cljs.core.async.Mux = (function (){var obj21111 = {};
return obj21111;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3720__auto__ = _;
if(and__3720__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3720__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4376__auto__ = (((_ == null))?null:_);
return (function (){var or__3732__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj21113 = {};
return obj21113;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3720__auto__ = m;
if(and__3720__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3720__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4376__auto__ = (((m == null))?null:m);
return (function (){var or__3732__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3720__auto__ = m;
if(and__3720__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3720__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4376__auto__ = (((m == null))?null:m);
return (function (){var or__3732__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3720__auto__ = m;
if(and__3720__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3720__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4376__auto__ = (((m == null))?null:m);
return (function (){var or__3732__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
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
if(typeof cljs.core.async.t21335 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21335 = (function (cs,ch,mult,meta21336){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta21336 = meta21336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21335.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t21335.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t21335.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t21335.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t21335.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21335.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t21335.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21337){
var self__ = this;
var _21337__$1 = this;
return self__.meta21336;
});})(cs))
;

cljs.core.async.t21335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21337,meta21336__$1){
var self__ = this;
var _21337__$1 = this;
return (new cljs.core.async.t21335(self__.cs,self__.ch,self__.mult,meta21336__$1));
});})(cs))
;

cljs.core.async.t21335.cljs$lang$type = true;

cljs.core.async.t21335.cljs$lang$ctorStr = "cljs.core.async/t21335";

cljs.core.async.t21335.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4319__auto__,writer__4320__auto__,opt__4321__auto__){
return cljs.core._write.call(null,writer__4320__auto__,"cljs.core.async/t21335");
});})(cs))
;

cljs.core.async.__GT_t21335 = ((function (cs){
return (function __GT_t21335(cs__$1,ch__$1,mult__$1,meta21336){
return (new cljs.core.async.t21335(cs__$1,ch__$1,mult__$1,meta21336));
});})(cs))
;

}

return (new cljs.core.async.t21335(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/out/cljs/core/async.cljs"], null)));
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
var c__12570__auto___21556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___21556,cs,m,dchan,dctr,done){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___21556,cs,m,dchan,dctr,done){
return (function (state_21468){
var state_val_21469 = (state_21468[(1)]);
if((state_val_21469 === (7))){
var inst_21464 = (state_21468[(2)]);
var state_21468__$1 = state_21468;
var statearr_21470_21557 = state_21468__$1;
(statearr_21470_21557[(2)] = inst_21464);

(statearr_21470_21557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (20))){
var inst_21369 = (state_21468[(7)]);
var inst_21379 = cljs.core.first.call(null,inst_21369);
var inst_21380 = cljs.core.nth.call(null,inst_21379,(0),null);
var inst_21381 = cljs.core.nth.call(null,inst_21379,(1),null);
var state_21468__$1 = (function (){var statearr_21471 = state_21468;
(statearr_21471[(8)] = inst_21380);

return statearr_21471;
})();
if(cljs.core.truth_(inst_21381)){
var statearr_21472_21558 = state_21468__$1;
(statearr_21472_21558[(1)] = (22));

} else {
var statearr_21473_21559 = state_21468__$1;
(statearr_21473_21559[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (27))){
var inst_21411 = (state_21468[(9)]);
var inst_21409 = (state_21468[(10)]);
var inst_21340 = (state_21468[(11)]);
var inst_21416 = (state_21468[(12)]);
var inst_21416__$1 = cljs.core._nth.call(null,inst_21409,inst_21411);
var inst_21417 = cljs.core.async.put_BANG_.call(null,inst_21416__$1,inst_21340,done);
var state_21468__$1 = (function (){var statearr_21474 = state_21468;
(statearr_21474[(12)] = inst_21416__$1);

return statearr_21474;
})();
if(cljs.core.truth_(inst_21417)){
var statearr_21475_21560 = state_21468__$1;
(statearr_21475_21560[(1)] = (30));

} else {
var statearr_21476_21561 = state_21468__$1;
(statearr_21476_21561[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (1))){
var state_21468__$1 = state_21468;
var statearr_21477_21562 = state_21468__$1;
(statearr_21477_21562[(2)] = null);

(statearr_21477_21562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (24))){
var inst_21369 = (state_21468[(7)]);
var inst_21386 = (state_21468[(2)]);
var inst_21387 = cljs.core.next.call(null,inst_21369);
var inst_21349 = inst_21387;
var inst_21350 = null;
var inst_21351 = (0);
var inst_21352 = (0);
var state_21468__$1 = (function (){var statearr_21478 = state_21468;
(statearr_21478[(13)] = inst_21349);

(statearr_21478[(14)] = inst_21351);

(statearr_21478[(15)] = inst_21386);

(statearr_21478[(16)] = inst_21352);

(statearr_21478[(17)] = inst_21350);

return statearr_21478;
})();
var statearr_21479_21563 = state_21468__$1;
(statearr_21479_21563[(2)] = null);

(statearr_21479_21563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (39))){
var state_21468__$1 = state_21468;
var statearr_21483_21564 = state_21468__$1;
(statearr_21483_21564[(2)] = null);

(statearr_21483_21564[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (4))){
var inst_21340 = (state_21468[(11)]);
var inst_21340__$1 = (state_21468[(2)]);
var inst_21341 = (inst_21340__$1 == null);
var state_21468__$1 = (function (){var statearr_21484 = state_21468;
(statearr_21484[(11)] = inst_21340__$1);

return statearr_21484;
})();
if(cljs.core.truth_(inst_21341)){
var statearr_21485_21565 = state_21468__$1;
(statearr_21485_21565[(1)] = (5));

} else {
var statearr_21486_21566 = state_21468__$1;
(statearr_21486_21566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (15))){
var inst_21349 = (state_21468[(13)]);
var inst_21351 = (state_21468[(14)]);
var inst_21352 = (state_21468[(16)]);
var inst_21350 = (state_21468[(17)]);
var inst_21365 = (state_21468[(2)]);
var inst_21366 = (inst_21352 + (1));
var tmp21480 = inst_21349;
var tmp21481 = inst_21351;
var tmp21482 = inst_21350;
var inst_21349__$1 = tmp21480;
var inst_21350__$1 = tmp21482;
var inst_21351__$1 = tmp21481;
var inst_21352__$1 = inst_21366;
var state_21468__$1 = (function (){var statearr_21487 = state_21468;
(statearr_21487[(13)] = inst_21349__$1);

(statearr_21487[(14)] = inst_21351__$1);

(statearr_21487[(16)] = inst_21352__$1);

(statearr_21487[(17)] = inst_21350__$1);

(statearr_21487[(18)] = inst_21365);

return statearr_21487;
})();
var statearr_21488_21567 = state_21468__$1;
(statearr_21488_21567[(2)] = null);

(statearr_21488_21567[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (21))){
var inst_21390 = (state_21468[(2)]);
var state_21468__$1 = state_21468;
var statearr_21492_21568 = state_21468__$1;
(statearr_21492_21568[(2)] = inst_21390);

(statearr_21492_21568[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (31))){
var inst_21416 = (state_21468[(12)]);
var inst_21420 = done.call(null,null);
var inst_21421 = cljs.core.async.untap_STAR_.call(null,m,inst_21416);
var state_21468__$1 = (function (){var statearr_21493 = state_21468;
(statearr_21493[(19)] = inst_21420);

return statearr_21493;
})();
var statearr_21494_21569 = state_21468__$1;
(statearr_21494_21569[(2)] = inst_21421);

(statearr_21494_21569[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (32))){
var inst_21411 = (state_21468[(9)]);
var inst_21410 = (state_21468[(20)]);
var inst_21409 = (state_21468[(10)]);
var inst_21408 = (state_21468[(21)]);
var inst_21423 = (state_21468[(2)]);
var inst_21424 = (inst_21411 + (1));
var tmp21489 = inst_21410;
var tmp21490 = inst_21409;
var tmp21491 = inst_21408;
var inst_21408__$1 = tmp21491;
var inst_21409__$1 = tmp21490;
var inst_21410__$1 = tmp21489;
var inst_21411__$1 = inst_21424;
var state_21468__$1 = (function (){var statearr_21495 = state_21468;
(statearr_21495[(22)] = inst_21423);

(statearr_21495[(9)] = inst_21411__$1);

(statearr_21495[(20)] = inst_21410__$1);

(statearr_21495[(10)] = inst_21409__$1);

(statearr_21495[(21)] = inst_21408__$1);

return statearr_21495;
})();
var statearr_21496_21570 = state_21468__$1;
(statearr_21496_21570[(2)] = null);

(statearr_21496_21570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (40))){
var inst_21436 = (state_21468[(23)]);
var inst_21440 = done.call(null,null);
var inst_21441 = cljs.core.async.untap_STAR_.call(null,m,inst_21436);
var state_21468__$1 = (function (){var statearr_21497 = state_21468;
(statearr_21497[(24)] = inst_21440);

return statearr_21497;
})();
var statearr_21498_21571 = state_21468__$1;
(statearr_21498_21571[(2)] = inst_21441);

(statearr_21498_21571[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (33))){
var inst_21427 = (state_21468[(25)]);
var inst_21429 = cljs.core.chunked_seq_QMARK_.call(null,inst_21427);
var state_21468__$1 = state_21468;
if(inst_21429){
var statearr_21499_21572 = state_21468__$1;
(statearr_21499_21572[(1)] = (36));

} else {
var statearr_21500_21573 = state_21468__$1;
(statearr_21500_21573[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (13))){
var inst_21359 = (state_21468[(26)]);
var inst_21362 = cljs.core.async.close_BANG_.call(null,inst_21359);
var state_21468__$1 = state_21468;
var statearr_21501_21574 = state_21468__$1;
(statearr_21501_21574[(2)] = inst_21362);

(statearr_21501_21574[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (22))){
var inst_21380 = (state_21468[(8)]);
var inst_21383 = cljs.core.async.close_BANG_.call(null,inst_21380);
var state_21468__$1 = state_21468;
var statearr_21502_21575 = state_21468__$1;
(statearr_21502_21575[(2)] = inst_21383);

(statearr_21502_21575[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (36))){
var inst_21427 = (state_21468[(25)]);
var inst_21431 = cljs.core.chunk_first.call(null,inst_21427);
var inst_21432 = cljs.core.chunk_rest.call(null,inst_21427);
var inst_21433 = cljs.core.count.call(null,inst_21431);
var inst_21408 = inst_21432;
var inst_21409 = inst_21431;
var inst_21410 = inst_21433;
var inst_21411 = (0);
var state_21468__$1 = (function (){var statearr_21503 = state_21468;
(statearr_21503[(9)] = inst_21411);

(statearr_21503[(20)] = inst_21410);

(statearr_21503[(10)] = inst_21409);

(statearr_21503[(21)] = inst_21408);

return statearr_21503;
})();
var statearr_21504_21576 = state_21468__$1;
(statearr_21504_21576[(2)] = null);

(statearr_21504_21576[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (41))){
var inst_21427 = (state_21468[(25)]);
var inst_21443 = (state_21468[(2)]);
var inst_21444 = cljs.core.next.call(null,inst_21427);
var inst_21408 = inst_21444;
var inst_21409 = null;
var inst_21410 = (0);
var inst_21411 = (0);
var state_21468__$1 = (function (){var statearr_21505 = state_21468;
(statearr_21505[(9)] = inst_21411);

(statearr_21505[(27)] = inst_21443);

(statearr_21505[(20)] = inst_21410);

(statearr_21505[(10)] = inst_21409);

(statearr_21505[(21)] = inst_21408);

return statearr_21505;
})();
var statearr_21506_21577 = state_21468__$1;
(statearr_21506_21577[(2)] = null);

(statearr_21506_21577[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (43))){
var state_21468__$1 = state_21468;
var statearr_21507_21578 = state_21468__$1;
(statearr_21507_21578[(2)] = null);

(statearr_21507_21578[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (29))){
var inst_21452 = (state_21468[(2)]);
var state_21468__$1 = state_21468;
var statearr_21508_21579 = state_21468__$1;
(statearr_21508_21579[(2)] = inst_21452);

(statearr_21508_21579[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (44))){
var inst_21461 = (state_21468[(2)]);
var state_21468__$1 = (function (){var statearr_21509 = state_21468;
(statearr_21509[(28)] = inst_21461);

return statearr_21509;
})();
var statearr_21510_21580 = state_21468__$1;
(statearr_21510_21580[(2)] = null);

(statearr_21510_21580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (6))){
var inst_21400 = (state_21468[(29)]);
var inst_21399 = cljs.core.deref.call(null,cs);
var inst_21400__$1 = cljs.core.keys.call(null,inst_21399);
var inst_21401 = cljs.core.count.call(null,inst_21400__$1);
var inst_21402 = cljs.core.reset_BANG_.call(null,dctr,inst_21401);
var inst_21407 = cljs.core.seq.call(null,inst_21400__$1);
var inst_21408 = inst_21407;
var inst_21409 = null;
var inst_21410 = (0);
var inst_21411 = (0);
var state_21468__$1 = (function (){var statearr_21511 = state_21468;
(statearr_21511[(29)] = inst_21400__$1);

(statearr_21511[(9)] = inst_21411);

(statearr_21511[(30)] = inst_21402);

(statearr_21511[(20)] = inst_21410);

(statearr_21511[(10)] = inst_21409);

(statearr_21511[(21)] = inst_21408);

return statearr_21511;
})();
var statearr_21512_21581 = state_21468__$1;
(statearr_21512_21581[(2)] = null);

(statearr_21512_21581[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (28))){
var inst_21408 = (state_21468[(21)]);
var inst_21427 = (state_21468[(25)]);
var inst_21427__$1 = cljs.core.seq.call(null,inst_21408);
var state_21468__$1 = (function (){var statearr_21513 = state_21468;
(statearr_21513[(25)] = inst_21427__$1);

return statearr_21513;
})();
if(inst_21427__$1){
var statearr_21514_21582 = state_21468__$1;
(statearr_21514_21582[(1)] = (33));

} else {
var statearr_21515_21583 = state_21468__$1;
(statearr_21515_21583[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (25))){
var inst_21411 = (state_21468[(9)]);
var inst_21410 = (state_21468[(20)]);
var inst_21413 = (inst_21411 < inst_21410);
var inst_21414 = inst_21413;
var state_21468__$1 = state_21468;
if(cljs.core.truth_(inst_21414)){
var statearr_21516_21584 = state_21468__$1;
(statearr_21516_21584[(1)] = (27));

} else {
var statearr_21517_21585 = state_21468__$1;
(statearr_21517_21585[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (34))){
var state_21468__$1 = state_21468;
var statearr_21518_21586 = state_21468__$1;
(statearr_21518_21586[(2)] = null);

(statearr_21518_21586[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (17))){
var state_21468__$1 = state_21468;
var statearr_21519_21587 = state_21468__$1;
(statearr_21519_21587[(2)] = null);

(statearr_21519_21587[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (3))){
var inst_21466 = (state_21468[(2)]);
var state_21468__$1 = state_21468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21468__$1,inst_21466);
} else {
if((state_val_21469 === (12))){
var inst_21395 = (state_21468[(2)]);
var state_21468__$1 = state_21468;
var statearr_21520_21588 = state_21468__$1;
(statearr_21520_21588[(2)] = inst_21395);

(statearr_21520_21588[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (2))){
var state_21468__$1 = state_21468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21468__$1,(4),ch);
} else {
if((state_val_21469 === (23))){
var state_21468__$1 = state_21468;
var statearr_21521_21589 = state_21468__$1;
(statearr_21521_21589[(2)] = null);

(statearr_21521_21589[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (35))){
var inst_21450 = (state_21468[(2)]);
var state_21468__$1 = state_21468;
var statearr_21522_21590 = state_21468__$1;
(statearr_21522_21590[(2)] = inst_21450);

(statearr_21522_21590[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (19))){
var inst_21369 = (state_21468[(7)]);
var inst_21373 = cljs.core.chunk_first.call(null,inst_21369);
var inst_21374 = cljs.core.chunk_rest.call(null,inst_21369);
var inst_21375 = cljs.core.count.call(null,inst_21373);
var inst_21349 = inst_21374;
var inst_21350 = inst_21373;
var inst_21351 = inst_21375;
var inst_21352 = (0);
var state_21468__$1 = (function (){var statearr_21523 = state_21468;
(statearr_21523[(13)] = inst_21349);

(statearr_21523[(14)] = inst_21351);

(statearr_21523[(16)] = inst_21352);

(statearr_21523[(17)] = inst_21350);

return statearr_21523;
})();
var statearr_21524_21591 = state_21468__$1;
(statearr_21524_21591[(2)] = null);

(statearr_21524_21591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (11))){
var inst_21349 = (state_21468[(13)]);
var inst_21369 = (state_21468[(7)]);
var inst_21369__$1 = cljs.core.seq.call(null,inst_21349);
var state_21468__$1 = (function (){var statearr_21525 = state_21468;
(statearr_21525[(7)] = inst_21369__$1);

return statearr_21525;
})();
if(inst_21369__$1){
var statearr_21526_21592 = state_21468__$1;
(statearr_21526_21592[(1)] = (16));

} else {
var statearr_21527_21593 = state_21468__$1;
(statearr_21527_21593[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (9))){
var inst_21397 = (state_21468[(2)]);
var state_21468__$1 = state_21468;
var statearr_21528_21594 = state_21468__$1;
(statearr_21528_21594[(2)] = inst_21397);

(statearr_21528_21594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (5))){
var inst_21347 = cljs.core.deref.call(null,cs);
var inst_21348 = cljs.core.seq.call(null,inst_21347);
var inst_21349 = inst_21348;
var inst_21350 = null;
var inst_21351 = (0);
var inst_21352 = (0);
var state_21468__$1 = (function (){var statearr_21529 = state_21468;
(statearr_21529[(13)] = inst_21349);

(statearr_21529[(14)] = inst_21351);

(statearr_21529[(16)] = inst_21352);

(statearr_21529[(17)] = inst_21350);

return statearr_21529;
})();
var statearr_21530_21595 = state_21468__$1;
(statearr_21530_21595[(2)] = null);

(statearr_21530_21595[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (14))){
var state_21468__$1 = state_21468;
var statearr_21531_21596 = state_21468__$1;
(statearr_21531_21596[(2)] = null);

(statearr_21531_21596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (45))){
var inst_21458 = (state_21468[(2)]);
var state_21468__$1 = state_21468;
var statearr_21532_21597 = state_21468__$1;
(statearr_21532_21597[(2)] = inst_21458);

(statearr_21532_21597[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (26))){
var inst_21400 = (state_21468[(29)]);
var inst_21454 = (state_21468[(2)]);
var inst_21455 = cljs.core.seq.call(null,inst_21400);
var state_21468__$1 = (function (){var statearr_21533 = state_21468;
(statearr_21533[(31)] = inst_21454);

return statearr_21533;
})();
if(inst_21455){
var statearr_21534_21598 = state_21468__$1;
(statearr_21534_21598[(1)] = (42));

} else {
var statearr_21535_21599 = state_21468__$1;
(statearr_21535_21599[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (16))){
var inst_21369 = (state_21468[(7)]);
var inst_21371 = cljs.core.chunked_seq_QMARK_.call(null,inst_21369);
var state_21468__$1 = state_21468;
if(inst_21371){
var statearr_21536_21600 = state_21468__$1;
(statearr_21536_21600[(1)] = (19));

} else {
var statearr_21537_21601 = state_21468__$1;
(statearr_21537_21601[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (38))){
var inst_21447 = (state_21468[(2)]);
var state_21468__$1 = state_21468;
var statearr_21538_21602 = state_21468__$1;
(statearr_21538_21602[(2)] = inst_21447);

(statearr_21538_21602[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (30))){
var state_21468__$1 = state_21468;
var statearr_21539_21603 = state_21468__$1;
(statearr_21539_21603[(2)] = null);

(statearr_21539_21603[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (10))){
var inst_21352 = (state_21468[(16)]);
var inst_21350 = (state_21468[(17)]);
var inst_21358 = cljs.core._nth.call(null,inst_21350,inst_21352);
var inst_21359 = cljs.core.nth.call(null,inst_21358,(0),null);
var inst_21360 = cljs.core.nth.call(null,inst_21358,(1),null);
var state_21468__$1 = (function (){var statearr_21540 = state_21468;
(statearr_21540[(26)] = inst_21359);

return statearr_21540;
})();
if(cljs.core.truth_(inst_21360)){
var statearr_21541_21604 = state_21468__$1;
(statearr_21541_21604[(1)] = (13));

} else {
var statearr_21542_21605 = state_21468__$1;
(statearr_21542_21605[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (18))){
var inst_21393 = (state_21468[(2)]);
var state_21468__$1 = state_21468;
var statearr_21543_21606 = state_21468__$1;
(statearr_21543_21606[(2)] = inst_21393);

(statearr_21543_21606[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (42))){
var state_21468__$1 = state_21468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21468__$1,(45),dchan);
} else {
if((state_val_21469 === (37))){
var inst_21436 = (state_21468[(23)]);
var inst_21340 = (state_21468[(11)]);
var inst_21427 = (state_21468[(25)]);
var inst_21436__$1 = cljs.core.first.call(null,inst_21427);
var inst_21437 = cljs.core.async.put_BANG_.call(null,inst_21436__$1,inst_21340,done);
var state_21468__$1 = (function (){var statearr_21544 = state_21468;
(statearr_21544[(23)] = inst_21436__$1);

return statearr_21544;
})();
if(cljs.core.truth_(inst_21437)){
var statearr_21545_21607 = state_21468__$1;
(statearr_21545_21607[(1)] = (39));

} else {
var statearr_21546_21608 = state_21468__$1;
(statearr_21546_21608[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21469 === (8))){
var inst_21351 = (state_21468[(14)]);
var inst_21352 = (state_21468[(16)]);
var inst_21354 = (inst_21352 < inst_21351);
var inst_21355 = inst_21354;
var state_21468__$1 = state_21468;
if(cljs.core.truth_(inst_21355)){
var statearr_21547_21609 = state_21468__$1;
(statearr_21547_21609[(1)] = (10));

} else {
var statearr_21548_21610 = state_21468__$1;
(statearr_21548_21610[(1)] = (11));

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
});})(c__12570__auto___21556,cs,m,dchan,dctr,done))
;
return ((function (switch__12514__auto__,c__12570__auto___21556,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_21552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21552[(0)] = state_machine__12515__auto__);

(statearr_21552[(1)] = (1));

return statearr_21552;
});
var state_machine__12515__auto____1 = (function (state_21468){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_21468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e21553){if((e21553 instanceof Object)){
var ex__12518__auto__ = e21553;
var statearr_21554_21611 = state_21468;
(statearr_21554_21611[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21612 = state_21468;
state_21468 = G__21612;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_21468){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_21468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___21556,cs,m,dchan,dctr,done))
})();
var state__12572__auto__ = (function (){var statearr_21555 = f__12571__auto__.call(null);
(statearr_21555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___21556);

return statearr_21555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___21556,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj21614 = {};
return obj21614;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3720__auto__ = m;
if(and__3720__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3720__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4376__auto__ = (((m == null))?null:m);
return (function (){var or__3732__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3720__auto__ = m;
if(and__3720__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3720__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4376__auto__ = (((m == null))?null:m);
return (function (){var or__3732__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3720__auto__ = m;
if(and__3720__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3720__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4376__auto__ = (((m == null))?null:m);
return (function (){var or__3732__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3720__auto__ = m;
if(and__3720__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3720__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4376__auto__ = (((m == null))?null:m);
return (function (){var or__3732__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3720__auto__ = m;
if(and__3720__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3720__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4376__auto__ = (((m == null))?null:m);
return (function (){var or__3732__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__21615){
var map__21620 = p__21615;
var map__21620__$1 = ((cljs.core.seq_QMARK_.call(null,map__21620))?cljs.core.apply.call(null,cljs.core.hash_map,map__21620):map__21620);
var opts = map__21620__$1;
var statearr_21621_21624 = state;
(statearr_21621_21624[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__21620,map__21620__$1,opts){
return (function (val){
var statearr_21622_21625 = state;
(statearr_21622_21625[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21620,map__21620__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_21623_21626 = state;
(statearr_21623_21626[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__21615 = null;
if (arguments.length > 3) {
var G__21627__i = 0, G__21627__a = new Array(arguments.length -  3);
while (G__21627__i < G__21627__a.length) {G__21627__a[G__21627__i] = arguments[G__21627__i + 3]; ++G__21627__i;}
  p__21615 = new cljs.core.IndexedSeq(G__21627__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__21615);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__21628){
var state = cljs.core.first(arglist__21628);
arglist__21628 = cljs.core.next(arglist__21628);
var cont_block = cljs.core.first(arglist__21628);
arglist__21628 = cljs.core.next(arglist__21628);
var ports = cljs.core.first(arglist__21628);
var p__21615 = cljs.core.rest(arglist__21628);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__21615);
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
if(typeof cljs.core.async.t21748 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t21748 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21749){
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
this.meta21749 = meta21749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t21748.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t21748.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21748.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21748.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21748.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21748.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t21748.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t21748.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21748.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21750){
var self__ = this;
var _21750__$1 = this;
return self__.meta21749;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21750,meta21749__$1){
var self__ = this;
var _21750__$1 = this;
return (new cljs.core.async.t21748(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21749__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t21748.cljs$lang$type = true;

cljs.core.async.t21748.cljs$lang$ctorStr = "cljs.core.async/t21748";

cljs.core.async.t21748.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4319__auto__,writer__4320__auto__,opt__4321__auto__){
return cljs.core._write.call(null,writer__4320__auto__,"cljs.core.async/t21748");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t21748 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t21748(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21749){
return (new cljs.core.async.t21748(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21749));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t21748(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/out/cljs/core/async.cljs"], null)));
})()
;
var c__12570__auto___21867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___21867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___21867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21820){
var state_val_21821 = (state_21820[(1)]);
if((state_val_21821 === (7))){
var inst_21764 = (state_21820[(7)]);
var inst_21769 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21764);
var state_21820__$1 = state_21820;
var statearr_21822_21868 = state_21820__$1;
(statearr_21822_21868[(2)] = inst_21769);

(statearr_21822_21868[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (20))){
var inst_21779 = (state_21820[(8)]);
var state_21820__$1 = state_21820;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21820__$1,(23),out,inst_21779);
} else {
if((state_val_21821 === (1))){
var inst_21754 = (state_21820[(9)]);
var inst_21754__$1 = calc_state.call(null);
var inst_21755 = cljs.core.seq_QMARK_.call(null,inst_21754__$1);
var state_21820__$1 = (function (){var statearr_21823 = state_21820;
(statearr_21823[(9)] = inst_21754__$1);

return statearr_21823;
})();
if(inst_21755){
var statearr_21824_21869 = state_21820__$1;
(statearr_21824_21869[(1)] = (2));

} else {
var statearr_21825_21870 = state_21820__$1;
(statearr_21825_21870[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (24))){
var inst_21772 = (state_21820[(10)]);
var inst_21764 = inst_21772;
var state_21820__$1 = (function (){var statearr_21826 = state_21820;
(statearr_21826[(7)] = inst_21764);

return statearr_21826;
})();
var statearr_21827_21871 = state_21820__$1;
(statearr_21827_21871[(2)] = null);

(statearr_21827_21871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (4))){
var inst_21754 = (state_21820[(9)]);
var inst_21760 = (state_21820[(2)]);
var inst_21761 = cljs.core.get.call(null,inst_21760,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21762 = cljs.core.get.call(null,inst_21760,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21763 = cljs.core.get.call(null,inst_21760,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21764 = inst_21754;
var state_21820__$1 = (function (){var statearr_21828 = state_21820;
(statearr_21828[(11)] = inst_21761);

(statearr_21828[(12)] = inst_21762);

(statearr_21828[(7)] = inst_21764);

(statearr_21828[(13)] = inst_21763);

return statearr_21828;
})();
var statearr_21829_21872 = state_21820__$1;
(statearr_21829_21872[(2)] = null);

(statearr_21829_21872[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (15))){
var state_21820__$1 = state_21820;
var statearr_21830_21873 = state_21820__$1;
(statearr_21830_21873[(2)] = null);

(statearr_21830_21873[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (21))){
var inst_21772 = (state_21820[(10)]);
var inst_21764 = inst_21772;
var state_21820__$1 = (function (){var statearr_21831 = state_21820;
(statearr_21831[(7)] = inst_21764);

return statearr_21831;
})();
var statearr_21832_21874 = state_21820__$1;
(statearr_21832_21874[(2)] = null);

(statearr_21832_21874[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (13))){
var inst_21816 = (state_21820[(2)]);
var state_21820__$1 = state_21820;
var statearr_21833_21875 = state_21820__$1;
(statearr_21833_21875[(2)] = inst_21816);

(statearr_21833_21875[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (22))){
var inst_21814 = (state_21820[(2)]);
var state_21820__$1 = state_21820;
var statearr_21834_21876 = state_21820__$1;
(statearr_21834_21876[(2)] = inst_21814);

(statearr_21834_21876[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (6))){
var inst_21818 = (state_21820[(2)]);
var state_21820__$1 = state_21820;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21820__$1,inst_21818);
} else {
if((state_val_21821 === (25))){
var state_21820__$1 = state_21820;
var statearr_21835_21877 = state_21820__$1;
(statearr_21835_21877[(2)] = null);

(statearr_21835_21877[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (17))){
var inst_21794 = (state_21820[(14)]);
var state_21820__$1 = state_21820;
var statearr_21836_21878 = state_21820__$1;
(statearr_21836_21878[(2)] = inst_21794);

(statearr_21836_21878[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (3))){
var inst_21754 = (state_21820[(9)]);
var state_21820__$1 = state_21820;
var statearr_21837_21879 = state_21820__$1;
(statearr_21837_21879[(2)] = inst_21754);

(statearr_21837_21879[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (12))){
var inst_21780 = (state_21820[(15)]);
var inst_21794 = (state_21820[(14)]);
var inst_21775 = (state_21820[(16)]);
var inst_21794__$1 = inst_21775.call(null,inst_21780);
var state_21820__$1 = (function (){var statearr_21838 = state_21820;
(statearr_21838[(14)] = inst_21794__$1);

return statearr_21838;
})();
if(cljs.core.truth_(inst_21794__$1)){
var statearr_21839_21880 = state_21820__$1;
(statearr_21839_21880[(1)] = (17));

} else {
var statearr_21840_21881 = state_21820__$1;
(statearr_21840_21881[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (2))){
var inst_21754 = (state_21820[(9)]);
var inst_21757 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21754);
var state_21820__$1 = state_21820;
var statearr_21841_21882 = state_21820__$1;
(statearr_21841_21882[(2)] = inst_21757);

(statearr_21841_21882[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (23))){
var inst_21805 = (state_21820[(2)]);
var state_21820__$1 = state_21820;
if(cljs.core.truth_(inst_21805)){
var statearr_21842_21883 = state_21820__$1;
(statearr_21842_21883[(1)] = (24));

} else {
var statearr_21843_21884 = state_21820__$1;
(statearr_21843_21884[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (19))){
var inst_21802 = (state_21820[(2)]);
var state_21820__$1 = state_21820;
if(cljs.core.truth_(inst_21802)){
var statearr_21844_21885 = state_21820__$1;
(statearr_21844_21885[(1)] = (20));

} else {
var statearr_21845_21886 = state_21820__$1;
(statearr_21845_21886[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (11))){
var inst_21779 = (state_21820[(8)]);
var inst_21785 = (inst_21779 == null);
var state_21820__$1 = state_21820;
if(cljs.core.truth_(inst_21785)){
var statearr_21846_21887 = state_21820__$1;
(statearr_21846_21887[(1)] = (14));

} else {
var statearr_21847_21888 = state_21820__$1;
(statearr_21847_21888[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (9))){
var inst_21772 = (state_21820[(10)]);
var inst_21772__$1 = (state_21820[(2)]);
var inst_21773 = cljs.core.get.call(null,inst_21772__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21774 = cljs.core.get.call(null,inst_21772__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21775 = cljs.core.get.call(null,inst_21772__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_21820__$1 = (function (){var statearr_21848 = state_21820;
(statearr_21848[(16)] = inst_21775);

(statearr_21848[(10)] = inst_21772__$1);

(statearr_21848[(17)] = inst_21774);

return statearr_21848;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21820__$1,(10),inst_21773);
} else {
if((state_val_21821 === (5))){
var inst_21764 = (state_21820[(7)]);
var inst_21767 = cljs.core.seq_QMARK_.call(null,inst_21764);
var state_21820__$1 = state_21820;
if(inst_21767){
var statearr_21849_21889 = state_21820__$1;
(statearr_21849_21889[(1)] = (7));

} else {
var statearr_21850_21890 = state_21820__$1;
(statearr_21850_21890[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (14))){
var inst_21780 = (state_21820[(15)]);
var inst_21787 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21780);
var state_21820__$1 = state_21820;
var statearr_21851_21891 = state_21820__$1;
(statearr_21851_21891[(2)] = inst_21787);

(statearr_21851_21891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (26))){
var inst_21810 = (state_21820[(2)]);
var state_21820__$1 = state_21820;
var statearr_21852_21892 = state_21820__$1;
(statearr_21852_21892[(2)] = inst_21810);

(statearr_21852_21892[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (16))){
var inst_21790 = (state_21820[(2)]);
var inst_21791 = calc_state.call(null);
var inst_21764 = inst_21791;
var state_21820__$1 = (function (){var statearr_21853 = state_21820;
(statearr_21853[(7)] = inst_21764);

(statearr_21853[(18)] = inst_21790);

return statearr_21853;
})();
var statearr_21854_21893 = state_21820__$1;
(statearr_21854_21893[(2)] = null);

(statearr_21854_21893[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (10))){
var inst_21780 = (state_21820[(15)]);
var inst_21779 = (state_21820[(8)]);
var inst_21778 = (state_21820[(2)]);
var inst_21779__$1 = cljs.core.nth.call(null,inst_21778,(0),null);
var inst_21780__$1 = cljs.core.nth.call(null,inst_21778,(1),null);
var inst_21781 = (inst_21779__$1 == null);
var inst_21782 = cljs.core._EQ_.call(null,inst_21780__$1,change);
var inst_21783 = (inst_21781) || (inst_21782);
var state_21820__$1 = (function (){var statearr_21855 = state_21820;
(statearr_21855[(15)] = inst_21780__$1);

(statearr_21855[(8)] = inst_21779__$1);

return statearr_21855;
})();
if(cljs.core.truth_(inst_21783)){
var statearr_21856_21894 = state_21820__$1;
(statearr_21856_21894[(1)] = (11));

} else {
var statearr_21857_21895 = state_21820__$1;
(statearr_21857_21895[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (18))){
var inst_21780 = (state_21820[(15)]);
var inst_21775 = (state_21820[(16)]);
var inst_21774 = (state_21820[(17)]);
var inst_21797 = cljs.core.empty_QMARK_.call(null,inst_21775);
var inst_21798 = inst_21774.call(null,inst_21780);
var inst_21799 = cljs.core.not.call(null,inst_21798);
var inst_21800 = (inst_21797) && (inst_21799);
var state_21820__$1 = state_21820;
var statearr_21858_21896 = state_21820__$1;
(statearr_21858_21896[(2)] = inst_21800);

(statearr_21858_21896[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21821 === (8))){
var inst_21764 = (state_21820[(7)]);
var state_21820__$1 = state_21820;
var statearr_21859_21897 = state_21820__$1;
(statearr_21859_21897[(2)] = inst_21764);

(statearr_21859_21897[(1)] = (9));


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
});})(c__12570__auto___21867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12514__auto__,c__12570__auto___21867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_21863 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21863[(0)] = state_machine__12515__auto__);

(statearr_21863[(1)] = (1));

return statearr_21863;
});
var state_machine__12515__auto____1 = (function (state_21820){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_21820);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e21864){if((e21864 instanceof Object)){
var ex__12518__auto__ = e21864;
var statearr_21865_21898 = state_21820;
(statearr_21865_21898[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21820);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21899 = state_21820;
state_21820 = G__21899;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_21820){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_21820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___21867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12572__auto__ = (function (){var statearr_21866 = f__12571__auto__.call(null);
(statearr_21866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___21867);

return statearr_21866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___21867,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj21901 = {};
return obj21901;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3720__auto__ = p;
if(and__3720__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3720__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4376__auto__ = (((p == null))?null:p);
return (function (){var or__3732__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3720__auto__ = p;
if(and__3720__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3720__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4376__auto__ = (((p == null))?null:p);
return (function (){var or__3732__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
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
if((function (){var and__3720__auto__ = p;
if(and__3720__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3720__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4376__auto__ = (((p == null))?null:p);
return (function (){var or__3732__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3720__auto__ = p;
if(and__3720__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3720__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4376__auto__ = (((p == null))?null:p);
return (function (){var or__3732__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4376__auto__)]);
if(or__3732__auto__){
return or__3732__auto__;
} else {
var or__3732__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3732__auto____$1){
return or__3732__auto____$1;
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
var or__3732__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3732__auto__)){
return or__3732__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3732__auto__,mults){
return (function (p1__21902_SHARP_){
if(cljs.core.truth_(p1__21902_SHARP_.call(null,topic))){
return p1__21902_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21902_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3732__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t22025 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22025 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta22026){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta22026 = meta22026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22025.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t22025.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t22025.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t22025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t22025.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t22025.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t22025.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t22025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22027){
var self__ = this;
var _22027__$1 = this;
return self__.meta22026;
});})(mults,ensure_mult))
;

cljs.core.async.t22025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22027,meta22026__$1){
var self__ = this;
var _22027__$1 = this;
return (new cljs.core.async.t22025(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta22026__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t22025.cljs$lang$type = true;

cljs.core.async.t22025.cljs$lang$ctorStr = "cljs.core.async/t22025";

cljs.core.async.t22025.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4319__auto__,writer__4320__auto__,opt__4321__auto__){
return cljs.core._write.call(null,writer__4320__auto__,"cljs.core.async/t22025");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t22025 = ((function (mults,ensure_mult){
return (function __GT_t22025(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22026){
return (new cljs.core.async.t22025(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta22026));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t22025(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/out/cljs/core/async.cljs"], null)));
})()
;
var c__12570__auto___22147 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___22147,mults,ensure_mult,p){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___22147,mults,ensure_mult,p){
return (function (state_22099){
var state_val_22100 = (state_22099[(1)]);
if((state_val_22100 === (7))){
var inst_22095 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22101_22148 = state_22099__$1;
(statearr_22101_22148[(2)] = inst_22095);

(statearr_22101_22148[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (20))){
var state_22099__$1 = state_22099;
var statearr_22102_22149 = state_22099__$1;
(statearr_22102_22149[(2)] = null);

(statearr_22102_22149[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (1))){
var state_22099__$1 = state_22099;
var statearr_22103_22150 = state_22099__$1;
(statearr_22103_22150[(2)] = null);

(statearr_22103_22150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (24))){
var inst_22078 = (state_22099[(7)]);
var inst_22087 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22078);
var state_22099__$1 = state_22099;
var statearr_22104_22151 = state_22099__$1;
(statearr_22104_22151[(2)] = inst_22087);

(statearr_22104_22151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (4))){
var inst_22030 = (state_22099[(8)]);
var inst_22030__$1 = (state_22099[(2)]);
var inst_22031 = (inst_22030__$1 == null);
var state_22099__$1 = (function (){var statearr_22105 = state_22099;
(statearr_22105[(8)] = inst_22030__$1);

return statearr_22105;
})();
if(cljs.core.truth_(inst_22031)){
var statearr_22106_22152 = state_22099__$1;
(statearr_22106_22152[(1)] = (5));

} else {
var statearr_22107_22153 = state_22099__$1;
(statearr_22107_22153[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (15))){
var inst_22072 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22108_22154 = state_22099__$1;
(statearr_22108_22154[(2)] = inst_22072);

(statearr_22108_22154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (21))){
var inst_22092 = (state_22099[(2)]);
var state_22099__$1 = (function (){var statearr_22109 = state_22099;
(statearr_22109[(9)] = inst_22092);

return statearr_22109;
})();
var statearr_22110_22155 = state_22099__$1;
(statearr_22110_22155[(2)] = null);

(statearr_22110_22155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (13))){
var inst_22054 = (state_22099[(10)]);
var inst_22056 = cljs.core.chunked_seq_QMARK_.call(null,inst_22054);
var state_22099__$1 = state_22099;
if(inst_22056){
var statearr_22111_22156 = state_22099__$1;
(statearr_22111_22156[(1)] = (16));

} else {
var statearr_22112_22157 = state_22099__$1;
(statearr_22112_22157[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (22))){
var inst_22084 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22084)){
var statearr_22113_22158 = state_22099__$1;
(statearr_22113_22158[(1)] = (23));

} else {
var statearr_22114_22159 = state_22099__$1;
(statearr_22114_22159[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (6))){
var inst_22080 = (state_22099[(11)]);
var inst_22078 = (state_22099[(7)]);
var inst_22030 = (state_22099[(8)]);
var inst_22078__$1 = topic_fn.call(null,inst_22030);
var inst_22079 = cljs.core.deref.call(null,mults);
var inst_22080__$1 = cljs.core.get.call(null,inst_22079,inst_22078__$1);
var state_22099__$1 = (function (){var statearr_22115 = state_22099;
(statearr_22115[(11)] = inst_22080__$1);

(statearr_22115[(7)] = inst_22078__$1);

return statearr_22115;
})();
if(cljs.core.truth_(inst_22080__$1)){
var statearr_22116_22160 = state_22099__$1;
(statearr_22116_22160[(1)] = (19));

} else {
var statearr_22117_22161 = state_22099__$1;
(statearr_22117_22161[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (25))){
var inst_22089 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22118_22162 = state_22099__$1;
(statearr_22118_22162[(2)] = inst_22089);

(statearr_22118_22162[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (17))){
var inst_22054 = (state_22099[(10)]);
var inst_22063 = cljs.core.first.call(null,inst_22054);
var inst_22064 = cljs.core.async.muxch_STAR_.call(null,inst_22063);
var inst_22065 = cljs.core.async.close_BANG_.call(null,inst_22064);
var inst_22066 = cljs.core.next.call(null,inst_22054);
var inst_22040 = inst_22066;
var inst_22041 = null;
var inst_22042 = (0);
var inst_22043 = (0);
var state_22099__$1 = (function (){var statearr_22119 = state_22099;
(statearr_22119[(12)] = inst_22041);

(statearr_22119[(13)] = inst_22065);

(statearr_22119[(14)] = inst_22040);

(statearr_22119[(15)] = inst_22042);

(statearr_22119[(16)] = inst_22043);

return statearr_22119;
})();
var statearr_22120_22163 = state_22099__$1;
(statearr_22120_22163[(2)] = null);

(statearr_22120_22163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (3))){
var inst_22097 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22099__$1,inst_22097);
} else {
if((state_val_22100 === (12))){
var inst_22074 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22121_22164 = state_22099__$1;
(statearr_22121_22164[(2)] = inst_22074);

(statearr_22121_22164[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (2))){
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22099__$1,(4),ch);
} else {
if((state_val_22100 === (23))){
var state_22099__$1 = state_22099;
var statearr_22122_22165 = state_22099__$1;
(statearr_22122_22165[(2)] = null);

(statearr_22122_22165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (19))){
var inst_22080 = (state_22099[(11)]);
var inst_22030 = (state_22099[(8)]);
var inst_22082 = cljs.core.async.muxch_STAR_.call(null,inst_22080);
var state_22099__$1 = state_22099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22099__$1,(22),inst_22082,inst_22030);
} else {
if((state_val_22100 === (11))){
var inst_22040 = (state_22099[(14)]);
var inst_22054 = (state_22099[(10)]);
var inst_22054__$1 = cljs.core.seq.call(null,inst_22040);
var state_22099__$1 = (function (){var statearr_22123 = state_22099;
(statearr_22123[(10)] = inst_22054__$1);

return statearr_22123;
})();
if(inst_22054__$1){
var statearr_22124_22166 = state_22099__$1;
(statearr_22124_22166[(1)] = (13));

} else {
var statearr_22125_22167 = state_22099__$1;
(statearr_22125_22167[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (9))){
var inst_22076 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22126_22168 = state_22099__$1;
(statearr_22126_22168[(2)] = inst_22076);

(statearr_22126_22168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (5))){
var inst_22037 = cljs.core.deref.call(null,mults);
var inst_22038 = cljs.core.vals.call(null,inst_22037);
var inst_22039 = cljs.core.seq.call(null,inst_22038);
var inst_22040 = inst_22039;
var inst_22041 = null;
var inst_22042 = (0);
var inst_22043 = (0);
var state_22099__$1 = (function (){var statearr_22127 = state_22099;
(statearr_22127[(12)] = inst_22041);

(statearr_22127[(14)] = inst_22040);

(statearr_22127[(15)] = inst_22042);

(statearr_22127[(16)] = inst_22043);

return statearr_22127;
})();
var statearr_22128_22169 = state_22099__$1;
(statearr_22128_22169[(2)] = null);

(statearr_22128_22169[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (14))){
var state_22099__$1 = state_22099;
var statearr_22132_22170 = state_22099__$1;
(statearr_22132_22170[(2)] = null);

(statearr_22132_22170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (16))){
var inst_22054 = (state_22099[(10)]);
var inst_22058 = cljs.core.chunk_first.call(null,inst_22054);
var inst_22059 = cljs.core.chunk_rest.call(null,inst_22054);
var inst_22060 = cljs.core.count.call(null,inst_22058);
var inst_22040 = inst_22059;
var inst_22041 = inst_22058;
var inst_22042 = inst_22060;
var inst_22043 = (0);
var state_22099__$1 = (function (){var statearr_22133 = state_22099;
(statearr_22133[(12)] = inst_22041);

(statearr_22133[(14)] = inst_22040);

(statearr_22133[(15)] = inst_22042);

(statearr_22133[(16)] = inst_22043);

return statearr_22133;
})();
var statearr_22134_22171 = state_22099__$1;
(statearr_22134_22171[(2)] = null);

(statearr_22134_22171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (10))){
var inst_22041 = (state_22099[(12)]);
var inst_22040 = (state_22099[(14)]);
var inst_22042 = (state_22099[(15)]);
var inst_22043 = (state_22099[(16)]);
var inst_22048 = cljs.core._nth.call(null,inst_22041,inst_22043);
var inst_22049 = cljs.core.async.muxch_STAR_.call(null,inst_22048);
var inst_22050 = cljs.core.async.close_BANG_.call(null,inst_22049);
var inst_22051 = (inst_22043 + (1));
var tmp22129 = inst_22041;
var tmp22130 = inst_22040;
var tmp22131 = inst_22042;
var inst_22040__$1 = tmp22130;
var inst_22041__$1 = tmp22129;
var inst_22042__$1 = tmp22131;
var inst_22043__$1 = inst_22051;
var state_22099__$1 = (function (){var statearr_22135 = state_22099;
(statearr_22135[(12)] = inst_22041__$1);

(statearr_22135[(14)] = inst_22040__$1);

(statearr_22135[(17)] = inst_22050);

(statearr_22135[(15)] = inst_22042__$1);

(statearr_22135[(16)] = inst_22043__$1);

return statearr_22135;
})();
var statearr_22136_22172 = state_22099__$1;
(statearr_22136_22172[(2)] = null);

(statearr_22136_22172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (18))){
var inst_22069 = (state_22099[(2)]);
var state_22099__$1 = state_22099;
var statearr_22137_22173 = state_22099__$1;
(statearr_22137_22173[(2)] = inst_22069);

(statearr_22137_22173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22100 === (8))){
var inst_22042 = (state_22099[(15)]);
var inst_22043 = (state_22099[(16)]);
var inst_22045 = (inst_22043 < inst_22042);
var inst_22046 = inst_22045;
var state_22099__$1 = state_22099;
if(cljs.core.truth_(inst_22046)){
var statearr_22138_22174 = state_22099__$1;
(statearr_22138_22174[(1)] = (10));

} else {
var statearr_22139_22175 = state_22099__$1;
(statearr_22139_22175[(1)] = (11));

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
});})(c__12570__auto___22147,mults,ensure_mult,p))
;
return ((function (switch__12514__auto__,c__12570__auto___22147,mults,ensure_mult,p){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_22143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22143[(0)] = state_machine__12515__auto__);

(statearr_22143[(1)] = (1));

return statearr_22143;
});
var state_machine__12515__auto____1 = (function (state_22099){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_22099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e22144){if((e22144 instanceof Object)){
var ex__12518__auto__ = e22144;
var statearr_22145_22176 = state_22099;
(statearr_22145_22176[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22177 = state_22099;
state_22099 = G__22177;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_22099){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_22099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___22147,mults,ensure_mult,p))
})();
var state__12572__auto__ = (function (){var statearr_22146 = f__12571__auto__.call(null);
(statearr_22146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___22147);

return statearr_22146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___22147,mults,ensure_mult,p))
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
var c__12570__auto___22314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___22314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___22314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22284){
var state_val_22285 = (state_22284[(1)]);
if((state_val_22285 === (7))){
var state_22284__$1 = state_22284;
var statearr_22286_22315 = state_22284__$1;
(statearr_22286_22315[(2)] = null);

(statearr_22286_22315[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (1))){
var state_22284__$1 = state_22284;
var statearr_22287_22316 = state_22284__$1;
(statearr_22287_22316[(2)] = null);

(statearr_22287_22316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (4))){
var inst_22248 = (state_22284[(7)]);
var inst_22250 = (inst_22248 < cnt);
var state_22284__$1 = state_22284;
if(cljs.core.truth_(inst_22250)){
var statearr_22288_22317 = state_22284__$1;
(statearr_22288_22317[(1)] = (6));

} else {
var statearr_22289_22318 = state_22284__$1;
(statearr_22289_22318[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (15))){
var inst_22280 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
var statearr_22290_22319 = state_22284__$1;
(statearr_22290_22319[(2)] = inst_22280);

(statearr_22290_22319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (13))){
var inst_22273 = cljs.core.async.close_BANG_.call(null,out);
var state_22284__$1 = state_22284;
var statearr_22291_22320 = state_22284__$1;
(statearr_22291_22320[(2)] = inst_22273);

(statearr_22291_22320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (6))){
var state_22284__$1 = state_22284;
var statearr_22292_22321 = state_22284__$1;
(statearr_22292_22321[(2)] = null);

(statearr_22292_22321[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (3))){
var inst_22282 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22284__$1,inst_22282);
} else {
if((state_val_22285 === (12))){
var inst_22270 = (state_22284[(8)]);
var inst_22270__$1 = (state_22284[(2)]);
var inst_22271 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22270__$1);
var state_22284__$1 = (function (){var statearr_22293 = state_22284;
(statearr_22293[(8)] = inst_22270__$1);

return statearr_22293;
})();
if(cljs.core.truth_(inst_22271)){
var statearr_22294_22322 = state_22284__$1;
(statearr_22294_22322[(1)] = (13));

} else {
var statearr_22295_22323 = state_22284__$1;
(statearr_22295_22323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (2))){
var inst_22247 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22248 = (0);
var state_22284__$1 = (function (){var statearr_22296 = state_22284;
(statearr_22296[(9)] = inst_22247);

(statearr_22296[(7)] = inst_22248);

return statearr_22296;
})();
var statearr_22297_22324 = state_22284__$1;
(statearr_22297_22324[(2)] = null);

(statearr_22297_22324[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (11))){
var inst_22248 = (state_22284[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22284,(10),Object,null,(9));
var inst_22257 = chs__$1.call(null,inst_22248);
var inst_22258 = done.call(null,inst_22248);
var inst_22259 = cljs.core.async.take_BANG_.call(null,inst_22257,inst_22258);
var state_22284__$1 = state_22284;
var statearr_22298_22325 = state_22284__$1;
(statearr_22298_22325[(2)] = inst_22259);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22284__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (9))){
var inst_22248 = (state_22284[(7)]);
var inst_22261 = (state_22284[(2)]);
var inst_22262 = (inst_22248 + (1));
var inst_22248__$1 = inst_22262;
var state_22284__$1 = (function (){var statearr_22299 = state_22284;
(statearr_22299[(10)] = inst_22261);

(statearr_22299[(7)] = inst_22248__$1);

return statearr_22299;
})();
var statearr_22300_22326 = state_22284__$1;
(statearr_22300_22326[(2)] = null);

(statearr_22300_22326[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (5))){
var inst_22268 = (state_22284[(2)]);
var state_22284__$1 = (function (){var statearr_22301 = state_22284;
(statearr_22301[(11)] = inst_22268);

return statearr_22301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22284__$1,(12),dchan);
} else {
if((state_val_22285 === (14))){
var inst_22270 = (state_22284[(8)]);
var inst_22275 = cljs.core.apply.call(null,f,inst_22270);
var state_22284__$1 = state_22284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22284__$1,(16),out,inst_22275);
} else {
if((state_val_22285 === (16))){
var inst_22277 = (state_22284[(2)]);
var state_22284__$1 = (function (){var statearr_22302 = state_22284;
(statearr_22302[(12)] = inst_22277);

return statearr_22302;
})();
var statearr_22303_22327 = state_22284__$1;
(statearr_22303_22327[(2)] = null);

(statearr_22303_22327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (10))){
var inst_22252 = (state_22284[(2)]);
var inst_22253 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22284__$1 = (function (){var statearr_22304 = state_22284;
(statearr_22304[(13)] = inst_22252);

return statearr_22304;
})();
var statearr_22305_22328 = state_22284__$1;
(statearr_22305_22328[(2)] = inst_22253);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22284__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22285 === (8))){
var inst_22266 = (state_22284[(2)]);
var state_22284__$1 = state_22284;
var statearr_22306_22329 = state_22284__$1;
(statearr_22306_22329[(2)] = inst_22266);

(statearr_22306_22329[(1)] = (5));


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
});})(c__12570__auto___22314,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12514__auto__,c__12570__auto___22314,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_22310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22310[(0)] = state_machine__12515__auto__);

(statearr_22310[(1)] = (1));

return statearr_22310;
});
var state_machine__12515__auto____1 = (function (state_22284){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_22284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e22311){if((e22311 instanceof Object)){
var ex__12518__auto__ = e22311;
var statearr_22312_22330 = state_22284;
(statearr_22312_22330[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22331 = state_22284;
state_22284 = G__22331;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_22284){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_22284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___22314,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12572__auto__ = (function (){var statearr_22313 = f__12571__auto__.call(null);
(statearr_22313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___22314);

return statearr_22313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___22314,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__12570__auto___22439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___22439,out){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___22439,out){
return (function (state_22415){
var state_val_22416 = (state_22415[(1)]);
if((state_val_22416 === (7))){
var inst_22394 = (state_22415[(7)]);
var inst_22395 = (state_22415[(8)]);
var inst_22394__$1 = (state_22415[(2)]);
var inst_22395__$1 = cljs.core.nth.call(null,inst_22394__$1,(0),null);
var inst_22396 = cljs.core.nth.call(null,inst_22394__$1,(1),null);
var inst_22397 = (inst_22395__$1 == null);
var state_22415__$1 = (function (){var statearr_22417 = state_22415;
(statearr_22417[(7)] = inst_22394__$1);

(statearr_22417[(9)] = inst_22396);

(statearr_22417[(8)] = inst_22395__$1);

return statearr_22417;
})();
if(cljs.core.truth_(inst_22397)){
var statearr_22418_22440 = state_22415__$1;
(statearr_22418_22440[(1)] = (8));

} else {
var statearr_22419_22441 = state_22415__$1;
(statearr_22419_22441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22416 === (1))){
var inst_22386 = cljs.core.vec.call(null,chs);
var inst_22387 = inst_22386;
var state_22415__$1 = (function (){var statearr_22420 = state_22415;
(statearr_22420[(10)] = inst_22387);

return statearr_22420;
})();
var statearr_22421_22442 = state_22415__$1;
(statearr_22421_22442[(2)] = null);

(statearr_22421_22442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22416 === (4))){
var inst_22387 = (state_22415[(10)]);
var state_22415__$1 = state_22415;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22415__$1,(7),inst_22387);
} else {
if((state_val_22416 === (6))){
var inst_22411 = (state_22415[(2)]);
var state_22415__$1 = state_22415;
var statearr_22422_22443 = state_22415__$1;
(statearr_22422_22443[(2)] = inst_22411);

(statearr_22422_22443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22416 === (3))){
var inst_22413 = (state_22415[(2)]);
var state_22415__$1 = state_22415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22415__$1,inst_22413);
} else {
if((state_val_22416 === (2))){
var inst_22387 = (state_22415[(10)]);
var inst_22389 = cljs.core.count.call(null,inst_22387);
var inst_22390 = (inst_22389 > (0));
var state_22415__$1 = state_22415;
if(cljs.core.truth_(inst_22390)){
var statearr_22424_22444 = state_22415__$1;
(statearr_22424_22444[(1)] = (4));

} else {
var statearr_22425_22445 = state_22415__$1;
(statearr_22425_22445[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22416 === (11))){
var inst_22387 = (state_22415[(10)]);
var inst_22404 = (state_22415[(2)]);
var tmp22423 = inst_22387;
var inst_22387__$1 = tmp22423;
var state_22415__$1 = (function (){var statearr_22426 = state_22415;
(statearr_22426[(10)] = inst_22387__$1);

(statearr_22426[(11)] = inst_22404);

return statearr_22426;
})();
var statearr_22427_22446 = state_22415__$1;
(statearr_22427_22446[(2)] = null);

(statearr_22427_22446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22416 === (9))){
var inst_22395 = (state_22415[(8)]);
var state_22415__$1 = state_22415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22415__$1,(11),out,inst_22395);
} else {
if((state_val_22416 === (5))){
var inst_22409 = cljs.core.async.close_BANG_.call(null,out);
var state_22415__$1 = state_22415;
var statearr_22428_22447 = state_22415__$1;
(statearr_22428_22447[(2)] = inst_22409);

(statearr_22428_22447[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22416 === (10))){
var inst_22407 = (state_22415[(2)]);
var state_22415__$1 = state_22415;
var statearr_22429_22448 = state_22415__$1;
(statearr_22429_22448[(2)] = inst_22407);

(statearr_22429_22448[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22416 === (8))){
var inst_22394 = (state_22415[(7)]);
var inst_22396 = (state_22415[(9)]);
var inst_22387 = (state_22415[(10)]);
var inst_22395 = (state_22415[(8)]);
var inst_22399 = (function (){var c = inst_22396;
var v = inst_22395;
var vec__22392 = inst_22394;
var cs = inst_22387;
return ((function (c,v,vec__22392,cs,inst_22394,inst_22396,inst_22387,inst_22395,state_val_22416,c__12570__auto___22439,out){
return (function (p1__22332_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22332_SHARP_);
});
;})(c,v,vec__22392,cs,inst_22394,inst_22396,inst_22387,inst_22395,state_val_22416,c__12570__auto___22439,out))
})();
var inst_22400 = cljs.core.filterv.call(null,inst_22399,inst_22387);
var inst_22387__$1 = inst_22400;
var state_22415__$1 = (function (){var statearr_22430 = state_22415;
(statearr_22430[(10)] = inst_22387__$1);

return statearr_22430;
})();
var statearr_22431_22449 = state_22415__$1;
(statearr_22431_22449[(2)] = null);

(statearr_22431_22449[(1)] = (2));


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
});})(c__12570__auto___22439,out))
;
return ((function (switch__12514__auto__,c__12570__auto___22439,out){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_22435 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22435[(0)] = state_machine__12515__auto__);

(statearr_22435[(1)] = (1));

return statearr_22435;
});
var state_machine__12515__auto____1 = (function (state_22415){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_22415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e22436){if((e22436 instanceof Object)){
var ex__12518__auto__ = e22436;
var statearr_22437_22450 = state_22415;
(statearr_22437_22450[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22451 = state_22415;
state_22415 = G__22451;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_22415){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_22415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___22439,out))
})();
var state__12572__auto__ = (function (){var statearr_22438 = f__12571__auto__.call(null);
(statearr_22438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___22439);

return statearr_22438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___22439,out))
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
var c__12570__auto___22544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___22544,out){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___22544,out){
return (function (state_22521){
var state_val_22522 = (state_22521[(1)]);
if((state_val_22522 === (7))){
var inst_22503 = (state_22521[(7)]);
var inst_22503__$1 = (state_22521[(2)]);
var inst_22504 = (inst_22503__$1 == null);
var inst_22505 = cljs.core.not.call(null,inst_22504);
var state_22521__$1 = (function (){var statearr_22523 = state_22521;
(statearr_22523[(7)] = inst_22503__$1);

return statearr_22523;
})();
if(inst_22505){
var statearr_22524_22545 = state_22521__$1;
(statearr_22524_22545[(1)] = (8));

} else {
var statearr_22525_22546 = state_22521__$1;
(statearr_22525_22546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (1))){
var inst_22498 = (0);
var state_22521__$1 = (function (){var statearr_22526 = state_22521;
(statearr_22526[(8)] = inst_22498);

return statearr_22526;
})();
var statearr_22527_22547 = state_22521__$1;
(statearr_22527_22547[(2)] = null);

(statearr_22527_22547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (4))){
var state_22521__$1 = state_22521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22521__$1,(7),ch);
} else {
if((state_val_22522 === (6))){
var inst_22516 = (state_22521[(2)]);
var state_22521__$1 = state_22521;
var statearr_22528_22548 = state_22521__$1;
(statearr_22528_22548[(2)] = inst_22516);

(statearr_22528_22548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (3))){
var inst_22518 = (state_22521[(2)]);
var inst_22519 = cljs.core.async.close_BANG_.call(null,out);
var state_22521__$1 = (function (){var statearr_22529 = state_22521;
(statearr_22529[(9)] = inst_22518);

return statearr_22529;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22521__$1,inst_22519);
} else {
if((state_val_22522 === (2))){
var inst_22498 = (state_22521[(8)]);
var inst_22500 = (inst_22498 < n);
var state_22521__$1 = state_22521;
if(cljs.core.truth_(inst_22500)){
var statearr_22530_22549 = state_22521__$1;
(statearr_22530_22549[(1)] = (4));

} else {
var statearr_22531_22550 = state_22521__$1;
(statearr_22531_22550[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (11))){
var inst_22498 = (state_22521[(8)]);
var inst_22508 = (state_22521[(2)]);
var inst_22509 = (inst_22498 + (1));
var inst_22498__$1 = inst_22509;
var state_22521__$1 = (function (){var statearr_22532 = state_22521;
(statearr_22532[(8)] = inst_22498__$1);

(statearr_22532[(10)] = inst_22508);

return statearr_22532;
})();
var statearr_22533_22551 = state_22521__$1;
(statearr_22533_22551[(2)] = null);

(statearr_22533_22551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (9))){
var state_22521__$1 = state_22521;
var statearr_22534_22552 = state_22521__$1;
(statearr_22534_22552[(2)] = null);

(statearr_22534_22552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (5))){
var state_22521__$1 = state_22521;
var statearr_22535_22553 = state_22521__$1;
(statearr_22535_22553[(2)] = null);

(statearr_22535_22553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (10))){
var inst_22513 = (state_22521[(2)]);
var state_22521__$1 = state_22521;
var statearr_22536_22554 = state_22521__$1;
(statearr_22536_22554[(2)] = inst_22513);

(statearr_22536_22554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22522 === (8))){
var inst_22503 = (state_22521[(7)]);
var state_22521__$1 = state_22521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22521__$1,(11),out,inst_22503);
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
});})(c__12570__auto___22544,out))
;
return ((function (switch__12514__auto__,c__12570__auto___22544,out){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_22540 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22540[(0)] = state_machine__12515__auto__);

(statearr_22540[(1)] = (1));

return statearr_22540;
});
var state_machine__12515__auto____1 = (function (state_22521){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_22521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e22541){if((e22541 instanceof Object)){
var ex__12518__auto__ = e22541;
var statearr_22542_22555 = state_22521;
(statearr_22542_22555[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22556 = state_22521;
state_22521 = G__22556;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_22521){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_22521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___22544,out))
})();
var state__12572__auto__ = (function (){var statearr_22543 = f__12571__auto__.call(null);
(statearr_22543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___22544);

return statearr_22543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___22544,out))
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
if(typeof cljs.core.async.t22564 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22564 = (function (ch,f,map_LT_,meta22565){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta22565 = meta22565;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t22567 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22567 = (function (fn1,_,meta22565,map_LT_,f,ch,meta22568){
this.fn1 = fn1;
this._ = _;
this.meta22565 = meta22565;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22568 = meta22568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22567.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22567.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t22567.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22557_SHARP_){
return f1.call(null,(((p1__22557_SHARP_ == null))?null:self__.f.call(null,p1__22557_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t22567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22569){
var self__ = this;
var _22569__$1 = this;
return self__.meta22568;
});})(___$1))
;

cljs.core.async.t22567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22569,meta22568__$1){
var self__ = this;
var _22569__$1 = this;
return (new cljs.core.async.t22567(self__.fn1,self__._,self__.meta22565,self__.map_LT_,self__.f,self__.ch,meta22568__$1));
});})(___$1))
;

cljs.core.async.t22567.cljs$lang$type = true;

cljs.core.async.t22567.cljs$lang$ctorStr = "cljs.core.async/t22567";

cljs.core.async.t22567.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4319__auto__,writer__4320__auto__,opt__4321__auto__){
return cljs.core._write.call(null,writer__4320__auto__,"cljs.core.async/t22567");
});})(___$1))
;

cljs.core.async.__GT_t22567 = ((function (___$1){
return (function __GT_t22567(fn1__$1,___$2,meta22565__$1,map_LT___$1,f__$1,ch__$1,meta22568){
return (new cljs.core.async.t22567(fn1__$1,___$2,meta22565__$1,map_LT___$1,f__$1,ch__$1,meta22568));
});})(___$1))
;

}

return (new cljs.core.async.t22567(fn1,___$1,self__.meta22565,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__3720__auto__ = ret;
if(cljs.core.truth_(and__3720__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3720__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22564.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22566){
var self__ = this;
var _22566__$1 = this;
return self__.meta22565;
});

cljs.core.async.t22564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22566,meta22565__$1){
var self__ = this;
var _22566__$1 = this;
return (new cljs.core.async.t22564(self__.ch,self__.f,self__.map_LT_,meta22565__$1));
});

cljs.core.async.t22564.cljs$lang$type = true;

cljs.core.async.t22564.cljs$lang$ctorStr = "cljs.core.async/t22564";

cljs.core.async.t22564.cljs$lang$ctorPrWriter = (function (this__4319__auto__,writer__4320__auto__,opt__4321__auto__){
return cljs.core._write.call(null,writer__4320__auto__,"cljs.core.async/t22564");
});

cljs.core.async.__GT_t22564 = (function __GT_t22564(ch__$1,f__$1,map_LT___$1,meta22565){
return (new cljs.core.async.t22564(ch__$1,f__$1,map_LT___$1,meta22565));
});

}

return (new cljs.core.async.t22564(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t22573 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22573 = (function (ch,f,map_GT_,meta22574){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta22574 = meta22574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22573.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22573.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t22573.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22573.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22573.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22573.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22575){
var self__ = this;
var _22575__$1 = this;
return self__.meta22574;
});

cljs.core.async.t22573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22575,meta22574__$1){
var self__ = this;
var _22575__$1 = this;
return (new cljs.core.async.t22573(self__.ch,self__.f,self__.map_GT_,meta22574__$1));
});

cljs.core.async.t22573.cljs$lang$type = true;

cljs.core.async.t22573.cljs$lang$ctorStr = "cljs.core.async/t22573";

cljs.core.async.t22573.cljs$lang$ctorPrWriter = (function (this__4319__auto__,writer__4320__auto__,opt__4321__auto__){
return cljs.core._write.call(null,writer__4320__auto__,"cljs.core.async/t22573");
});

cljs.core.async.__GT_t22573 = (function __GT_t22573(ch__$1,f__$1,map_GT___$1,meta22574){
return (new cljs.core.async.t22573(ch__$1,f__$1,map_GT___$1,meta22574));
});

}

return (new cljs.core.async.t22573(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t22579 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22579 = (function (ch,p,filter_GT_,meta22580){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta22580 = meta22580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t22579.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t22579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t22579.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t22579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t22579.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t22579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t22579.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t22579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22581){
var self__ = this;
var _22581__$1 = this;
return self__.meta22580;
});

cljs.core.async.t22579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22581,meta22580__$1){
var self__ = this;
var _22581__$1 = this;
return (new cljs.core.async.t22579(self__.ch,self__.p,self__.filter_GT_,meta22580__$1));
});

cljs.core.async.t22579.cljs$lang$type = true;

cljs.core.async.t22579.cljs$lang$ctorStr = "cljs.core.async/t22579";

cljs.core.async.t22579.cljs$lang$ctorPrWriter = (function (this__4319__auto__,writer__4320__auto__,opt__4321__auto__){
return cljs.core._write.call(null,writer__4320__auto__,"cljs.core.async/t22579");
});

cljs.core.async.__GT_t22579 = (function __GT_t22579(ch__$1,p__$1,filter_GT___$1,meta22580){
return (new cljs.core.async.t22579(ch__$1,p__$1,filter_GT___$1,meta22580));
});

}

return (new cljs.core.async.t22579(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/monte/Developer/speicher/out/cljs/core/async.cljs"], null)));
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
var c__12570__auto___22664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___22664,out){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___22664,out){
return (function (state_22643){
var state_val_22644 = (state_22643[(1)]);
if((state_val_22644 === (7))){
var inst_22639 = (state_22643[(2)]);
var state_22643__$1 = state_22643;
var statearr_22645_22665 = state_22643__$1;
(statearr_22645_22665[(2)] = inst_22639);

(statearr_22645_22665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22644 === (1))){
var state_22643__$1 = state_22643;
var statearr_22646_22666 = state_22643__$1;
(statearr_22646_22666[(2)] = null);

(statearr_22646_22666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22644 === (4))){
var inst_22625 = (state_22643[(7)]);
var inst_22625__$1 = (state_22643[(2)]);
var inst_22626 = (inst_22625__$1 == null);
var state_22643__$1 = (function (){var statearr_22647 = state_22643;
(statearr_22647[(7)] = inst_22625__$1);

return statearr_22647;
})();
if(cljs.core.truth_(inst_22626)){
var statearr_22648_22667 = state_22643__$1;
(statearr_22648_22667[(1)] = (5));

} else {
var statearr_22649_22668 = state_22643__$1;
(statearr_22649_22668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22644 === (6))){
var inst_22625 = (state_22643[(7)]);
var inst_22630 = p.call(null,inst_22625);
var state_22643__$1 = state_22643;
if(cljs.core.truth_(inst_22630)){
var statearr_22650_22669 = state_22643__$1;
(statearr_22650_22669[(1)] = (8));

} else {
var statearr_22651_22670 = state_22643__$1;
(statearr_22651_22670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22644 === (3))){
var inst_22641 = (state_22643[(2)]);
var state_22643__$1 = state_22643;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22643__$1,inst_22641);
} else {
if((state_val_22644 === (2))){
var state_22643__$1 = state_22643;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22643__$1,(4),ch);
} else {
if((state_val_22644 === (11))){
var inst_22633 = (state_22643[(2)]);
var state_22643__$1 = state_22643;
var statearr_22652_22671 = state_22643__$1;
(statearr_22652_22671[(2)] = inst_22633);

(statearr_22652_22671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22644 === (9))){
var state_22643__$1 = state_22643;
var statearr_22653_22672 = state_22643__$1;
(statearr_22653_22672[(2)] = null);

(statearr_22653_22672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22644 === (5))){
var inst_22628 = cljs.core.async.close_BANG_.call(null,out);
var state_22643__$1 = state_22643;
var statearr_22654_22673 = state_22643__$1;
(statearr_22654_22673[(2)] = inst_22628);

(statearr_22654_22673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22644 === (10))){
var inst_22636 = (state_22643[(2)]);
var state_22643__$1 = (function (){var statearr_22655 = state_22643;
(statearr_22655[(8)] = inst_22636);

return statearr_22655;
})();
var statearr_22656_22674 = state_22643__$1;
(statearr_22656_22674[(2)] = null);

(statearr_22656_22674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22644 === (8))){
var inst_22625 = (state_22643[(7)]);
var state_22643__$1 = state_22643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22643__$1,(11),out,inst_22625);
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
});})(c__12570__auto___22664,out))
;
return ((function (switch__12514__auto__,c__12570__auto___22664,out){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_22660 = [null,null,null,null,null,null,null,null,null];
(statearr_22660[(0)] = state_machine__12515__auto__);

(statearr_22660[(1)] = (1));

return statearr_22660;
});
var state_machine__12515__auto____1 = (function (state_22643){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_22643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e22661){if((e22661 instanceof Object)){
var ex__12518__auto__ = e22661;
var statearr_22662_22675 = state_22643;
(statearr_22662_22675[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22661;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22676 = state_22643;
state_22643 = G__22676;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_22643){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_22643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___22664,out))
})();
var state__12572__auto__ = (function (){var statearr_22663 = f__12571__auto__.call(null);
(statearr_22663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___22664);

return statearr_22663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___22664,out))
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
var c__12570__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto__){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto__){
return (function (state_22842){
var state_val_22843 = (state_22842[(1)]);
if((state_val_22843 === (7))){
var inst_22838 = (state_22842[(2)]);
var state_22842__$1 = state_22842;
var statearr_22844_22885 = state_22842__$1;
(statearr_22844_22885[(2)] = inst_22838);

(statearr_22844_22885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (20))){
var inst_22808 = (state_22842[(7)]);
var inst_22819 = (state_22842[(2)]);
var inst_22820 = cljs.core.next.call(null,inst_22808);
var inst_22794 = inst_22820;
var inst_22795 = null;
var inst_22796 = (0);
var inst_22797 = (0);
var state_22842__$1 = (function (){var statearr_22845 = state_22842;
(statearr_22845[(8)] = inst_22795);

(statearr_22845[(9)] = inst_22819);

(statearr_22845[(10)] = inst_22797);

(statearr_22845[(11)] = inst_22794);

(statearr_22845[(12)] = inst_22796);

return statearr_22845;
})();
var statearr_22846_22886 = state_22842__$1;
(statearr_22846_22886[(2)] = null);

(statearr_22846_22886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (1))){
var state_22842__$1 = state_22842;
var statearr_22847_22887 = state_22842__$1;
(statearr_22847_22887[(2)] = null);

(statearr_22847_22887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (4))){
var inst_22783 = (state_22842[(13)]);
var inst_22783__$1 = (state_22842[(2)]);
var inst_22784 = (inst_22783__$1 == null);
var state_22842__$1 = (function (){var statearr_22848 = state_22842;
(statearr_22848[(13)] = inst_22783__$1);

return statearr_22848;
})();
if(cljs.core.truth_(inst_22784)){
var statearr_22849_22888 = state_22842__$1;
(statearr_22849_22888[(1)] = (5));

} else {
var statearr_22850_22889 = state_22842__$1;
(statearr_22850_22889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (15))){
var state_22842__$1 = state_22842;
var statearr_22854_22890 = state_22842__$1;
(statearr_22854_22890[(2)] = null);

(statearr_22854_22890[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (21))){
var state_22842__$1 = state_22842;
var statearr_22855_22891 = state_22842__$1;
(statearr_22855_22891[(2)] = null);

(statearr_22855_22891[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (13))){
var inst_22795 = (state_22842[(8)]);
var inst_22797 = (state_22842[(10)]);
var inst_22794 = (state_22842[(11)]);
var inst_22796 = (state_22842[(12)]);
var inst_22804 = (state_22842[(2)]);
var inst_22805 = (inst_22797 + (1));
var tmp22851 = inst_22795;
var tmp22852 = inst_22794;
var tmp22853 = inst_22796;
var inst_22794__$1 = tmp22852;
var inst_22795__$1 = tmp22851;
var inst_22796__$1 = tmp22853;
var inst_22797__$1 = inst_22805;
var state_22842__$1 = (function (){var statearr_22856 = state_22842;
(statearr_22856[(14)] = inst_22804);

(statearr_22856[(8)] = inst_22795__$1);

(statearr_22856[(10)] = inst_22797__$1);

(statearr_22856[(11)] = inst_22794__$1);

(statearr_22856[(12)] = inst_22796__$1);

return statearr_22856;
})();
var statearr_22857_22892 = state_22842__$1;
(statearr_22857_22892[(2)] = null);

(statearr_22857_22892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (22))){
var state_22842__$1 = state_22842;
var statearr_22858_22893 = state_22842__$1;
(statearr_22858_22893[(2)] = null);

(statearr_22858_22893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (6))){
var inst_22783 = (state_22842[(13)]);
var inst_22792 = f.call(null,inst_22783);
var inst_22793 = cljs.core.seq.call(null,inst_22792);
var inst_22794 = inst_22793;
var inst_22795 = null;
var inst_22796 = (0);
var inst_22797 = (0);
var state_22842__$1 = (function (){var statearr_22859 = state_22842;
(statearr_22859[(8)] = inst_22795);

(statearr_22859[(10)] = inst_22797);

(statearr_22859[(11)] = inst_22794);

(statearr_22859[(12)] = inst_22796);

return statearr_22859;
})();
var statearr_22860_22894 = state_22842__$1;
(statearr_22860_22894[(2)] = null);

(statearr_22860_22894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (17))){
var inst_22808 = (state_22842[(7)]);
var inst_22812 = cljs.core.chunk_first.call(null,inst_22808);
var inst_22813 = cljs.core.chunk_rest.call(null,inst_22808);
var inst_22814 = cljs.core.count.call(null,inst_22812);
var inst_22794 = inst_22813;
var inst_22795 = inst_22812;
var inst_22796 = inst_22814;
var inst_22797 = (0);
var state_22842__$1 = (function (){var statearr_22861 = state_22842;
(statearr_22861[(8)] = inst_22795);

(statearr_22861[(10)] = inst_22797);

(statearr_22861[(11)] = inst_22794);

(statearr_22861[(12)] = inst_22796);

return statearr_22861;
})();
var statearr_22862_22895 = state_22842__$1;
(statearr_22862_22895[(2)] = null);

(statearr_22862_22895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (3))){
var inst_22840 = (state_22842[(2)]);
var state_22842__$1 = state_22842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22842__$1,inst_22840);
} else {
if((state_val_22843 === (12))){
var inst_22828 = (state_22842[(2)]);
var state_22842__$1 = state_22842;
var statearr_22863_22896 = state_22842__$1;
(statearr_22863_22896[(2)] = inst_22828);

(statearr_22863_22896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (2))){
var state_22842__$1 = state_22842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22842__$1,(4),in$);
} else {
if((state_val_22843 === (23))){
var inst_22836 = (state_22842[(2)]);
var state_22842__$1 = state_22842;
var statearr_22864_22897 = state_22842__$1;
(statearr_22864_22897[(2)] = inst_22836);

(statearr_22864_22897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (19))){
var inst_22823 = (state_22842[(2)]);
var state_22842__$1 = state_22842;
var statearr_22865_22898 = state_22842__$1;
(statearr_22865_22898[(2)] = inst_22823);

(statearr_22865_22898[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (11))){
var inst_22808 = (state_22842[(7)]);
var inst_22794 = (state_22842[(11)]);
var inst_22808__$1 = cljs.core.seq.call(null,inst_22794);
var state_22842__$1 = (function (){var statearr_22866 = state_22842;
(statearr_22866[(7)] = inst_22808__$1);

return statearr_22866;
})();
if(inst_22808__$1){
var statearr_22867_22899 = state_22842__$1;
(statearr_22867_22899[(1)] = (14));

} else {
var statearr_22868_22900 = state_22842__$1;
(statearr_22868_22900[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (9))){
var inst_22830 = (state_22842[(2)]);
var inst_22831 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22842__$1 = (function (){var statearr_22869 = state_22842;
(statearr_22869[(15)] = inst_22830);

return statearr_22869;
})();
if(cljs.core.truth_(inst_22831)){
var statearr_22870_22901 = state_22842__$1;
(statearr_22870_22901[(1)] = (21));

} else {
var statearr_22871_22902 = state_22842__$1;
(statearr_22871_22902[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (5))){
var inst_22786 = cljs.core.async.close_BANG_.call(null,out);
var state_22842__$1 = state_22842;
var statearr_22872_22903 = state_22842__$1;
(statearr_22872_22903[(2)] = inst_22786);

(statearr_22872_22903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (14))){
var inst_22808 = (state_22842[(7)]);
var inst_22810 = cljs.core.chunked_seq_QMARK_.call(null,inst_22808);
var state_22842__$1 = state_22842;
if(inst_22810){
var statearr_22873_22904 = state_22842__$1;
(statearr_22873_22904[(1)] = (17));

} else {
var statearr_22874_22905 = state_22842__$1;
(statearr_22874_22905[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (16))){
var inst_22826 = (state_22842[(2)]);
var state_22842__$1 = state_22842;
var statearr_22875_22906 = state_22842__$1;
(statearr_22875_22906[(2)] = inst_22826);

(statearr_22875_22906[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22843 === (10))){
var inst_22795 = (state_22842[(8)]);
var inst_22797 = (state_22842[(10)]);
var inst_22802 = cljs.core._nth.call(null,inst_22795,inst_22797);
var state_22842__$1 = state_22842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22842__$1,(13),out,inst_22802);
} else {
if((state_val_22843 === (18))){
var inst_22808 = (state_22842[(7)]);
var inst_22817 = cljs.core.first.call(null,inst_22808);
var state_22842__$1 = state_22842;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22842__$1,(20),out,inst_22817);
} else {
if((state_val_22843 === (8))){
var inst_22797 = (state_22842[(10)]);
var inst_22796 = (state_22842[(12)]);
var inst_22799 = (inst_22797 < inst_22796);
var inst_22800 = inst_22799;
var state_22842__$1 = state_22842;
if(cljs.core.truth_(inst_22800)){
var statearr_22876_22907 = state_22842__$1;
(statearr_22876_22907[(1)] = (10));

} else {
var statearr_22877_22908 = state_22842__$1;
(statearr_22877_22908[(1)] = (11));

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
});})(c__12570__auto__))
;
return ((function (switch__12514__auto__,c__12570__auto__){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_22881 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22881[(0)] = state_machine__12515__auto__);

(statearr_22881[(1)] = (1));

return statearr_22881;
});
var state_machine__12515__auto____1 = (function (state_22842){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_22842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e22882){if((e22882 instanceof Object)){
var ex__12518__auto__ = e22882;
var statearr_22883_22909 = state_22842;
(statearr_22883_22909[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22882;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22910 = state_22842;
state_22842 = G__22910;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_22842){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_22842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto__))
})();
var state__12572__auto__ = (function (){var statearr_22884 = f__12571__auto__.call(null);
(statearr_22884[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto__);

return statearr_22884;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto__))
);

return c__12570__auto__;
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
var c__12570__auto___23007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___23007,out){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___23007,out){
return (function (state_22982){
var state_val_22983 = (state_22982[(1)]);
if((state_val_22983 === (7))){
var inst_22977 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
var statearr_22984_23008 = state_22982__$1;
(statearr_22984_23008[(2)] = inst_22977);

(statearr_22984_23008[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (1))){
var inst_22959 = null;
var state_22982__$1 = (function (){var statearr_22985 = state_22982;
(statearr_22985[(7)] = inst_22959);

return statearr_22985;
})();
var statearr_22986_23009 = state_22982__$1;
(statearr_22986_23009[(2)] = null);

(statearr_22986_23009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (4))){
var inst_22962 = (state_22982[(8)]);
var inst_22962__$1 = (state_22982[(2)]);
var inst_22963 = (inst_22962__$1 == null);
var inst_22964 = cljs.core.not.call(null,inst_22963);
var state_22982__$1 = (function (){var statearr_22987 = state_22982;
(statearr_22987[(8)] = inst_22962__$1);

return statearr_22987;
})();
if(inst_22964){
var statearr_22988_23010 = state_22982__$1;
(statearr_22988_23010[(1)] = (5));

} else {
var statearr_22989_23011 = state_22982__$1;
(statearr_22989_23011[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (6))){
var state_22982__$1 = state_22982;
var statearr_22990_23012 = state_22982__$1;
(statearr_22990_23012[(2)] = null);

(statearr_22990_23012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (3))){
var inst_22979 = (state_22982[(2)]);
var inst_22980 = cljs.core.async.close_BANG_.call(null,out);
var state_22982__$1 = (function (){var statearr_22991 = state_22982;
(statearr_22991[(9)] = inst_22979);

return statearr_22991;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22982__$1,inst_22980);
} else {
if((state_val_22983 === (2))){
var state_22982__$1 = state_22982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22982__$1,(4),ch);
} else {
if((state_val_22983 === (11))){
var inst_22962 = (state_22982[(8)]);
var inst_22971 = (state_22982[(2)]);
var inst_22959 = inst_22962;
var state_22982__$1 = (function (){var statearr_22992 = state_22982;
(statearr_22992[(10)] = inst_22971);

(statearr_22992[(7)] = inst_22959);

return statearr_22992;
})();
var statearr_22993_23013 = state_22982__$1;
(statearr_22993_23013[(2)] = null);

(statearr_22993_23013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (9))){
var inst_22962 = (state_22982[(8)]);
var state_22982__$1 = state_22982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22982__$1,(11),out,inst_22962);
} else {
if((state_val_22983 === (5))){
var inst_22959 = (state_22982[(7)]);
var inst_22962 = (state_22982[(8)]);
var inst_22966 = cljs.core._EQ_.call(null,inst_22962,inst_22959);
var state_22982__$1 = state_22982;
if(inst_22966){
var statearr_22995_23014 = state_22982__$1;
(statearr_22995_23014[(1)] = (8));

} else {
var statearr_22996_23015 = state_22982__$1;
(statearr_22996_23015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (10))){
var inst_22974 = (state_22982[(2)]);
var state_22982__$1 = state_22982;
var statearr_22997_23016 = state_22982__$1;
(statearr_22997_23016[(2)] = inst_22974);

(statearr_22997_23016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22983 === (8))){
var inst_22959 = (state_22982[(7)]);
var tmp22994 = inst_22959;
var inst_22959__$1 = tmp22994;
var state_22982__$1 = (function (){var statearr_22998 = state_22982;
(statearr_22998[(7)] = inst_22959__$1);

return statearr_22998;
})();
var statearr_22999_23017 = state_22982__$1;
(statearr_22999_23017[(2)] = null);

(statearr_22999_23017[(1)] = (2));


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
});})(c__12570__auto___23007,out))
;
return ((function (switch__12514__auto__,c__12570__auto___23007,out){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_23003 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23003[(0)] = state_machine__12515__auto__);

(statearr_23003[(1)] = (1));

return statearr_23003;
});
var state_machine__12515__auto____1 = (function (state_22982){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_22982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e23004){if((e23004 instanceof Object)){
var ex__12518__auto__ = e23004;
var statearr_23005_23018 = state_22982;
(statearr_23005_23018[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23019 = state_22982;
state_22982 = G__23019;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_22982){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_22982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___23007,out))
})();
var state__12572__auto__ = (function (){var statearr_23006 = f__12571__auto__.call(null);
(statearr_23006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___23007);

return statearr_23006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___23007,out))
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
var c__12570__auto___23154 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___23154,out){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___23154,out){
return (function (state_23124){
var state_val_23125 = (state_23124[(1)]);
if((state_val_23125 === (7))){
var inst_23120 = (state_23124[(2)]);
var state_23124__$1 = state_23124;
var statearr_23126_23155 = state_23124__$1;
(statearr_23126_23155[(2)] = inst_23120);

(statearr_23126_23155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23125 === (1))){
var inst_23087 = (new Array(n));
var inst_23088 = inst_23087;
var inst_23089 = (0);
var state_23124__$1 = (function (){var statearr_23127 = state_23124;
(statearr_23127[(7)] = inst_23089);

(statearr_23127[(8)] = inst_23088);

return statearr_23127;
})();
var statearr_23128_23156 = state_23124__$1;
(statearr_23128_23156[(2)] = null);

(statearr_23128_23156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23125 === (4))){
var inst_23092 = (state_23124[(9)]);
var inst_23092__$1 = (state_23124[(2)]);
var inst_23093 = (inst_23092__$1 == null);
var inst_23094 = cljs.core.not.call(null,inst_23093);
var state_23124__$1 = (function (){var statearr_23129 = state_23124;
(statearr_23129[(9)] = inst_23092__$1);

return statearr_23129;
})();
if(inst_23094){
var statearr_23130_23157 = state_23124__$1;
(statearr_23130_23157[(1)] = (5));

} else {
var statearr_23131_23158 = state_23124__$1;
(statearr_23131_23158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23125 === (15))){
var inst_23114 = (state_23124[(2)]);
var state_23124__$1 = state_23124;
var statearr_23132_23159 = state_23124__$1;
(statearr_23132_23159[(2)] = inst_23114);

(statearr_23132_23159[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23125 === (13))){
var state_23124__$1 = state_23124;
var statearr_23133_23160 = state_23124__$1;
(statearr_23133_23160[(2)] = null);

(statearr_23133_23160[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23125 === (6))){
var inst_23089 = (state_23124[(7)]);
var inst_23110 = (inst_23089 > (0));
var state_23124__$1 = state_23124;
if(cljs.core.truth_(inst_23110)){
var statearr_23134_23161 = state_23124__$1;
(statearr_23134_23161[(1)] = (12));

} else {
var statearr_23135_23162 = state_23124__$1;
(statearr_23135_23162[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23125 === (3))){
var inst_23122 = (state_23124[(2)]);
var state_23124__$1 = state_23124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23124__$1,inst_23122);
} else {
if((state_val_23125 === (12))){
var inst_23088 = (state_23124[(8)]);
var inst_23112 = cljs.core.vec.call(null,inst_23088);
var state_23124__$1 = state_23124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23124__$1,(15),out,inst_23112);
} else {
if((state_val_23125 === (2))){
var state_23124__$1 = state_23124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23124__$1,(4),ch);
} else {
if((state_val_23125 === (11))){
var inst_23104 = (state_23124[(2)]);
var inst_23105 = (new Array(n));
var inst_23088 = inst_23105;
var inst_23089 = (0);
var state_23124__$1 = (function (){var statearr_23136 = state_23124;
(statearr_23136[(7)] = inst_23089);

(statearr_23136[(10)] = inst_23104);

(statearr_23136[(8)] = inst_23088);

return statearr_23136;
})();
var statearr_23137_23163 = state_23124__$1;
(statearr_23137_23163[(2)] = null);

(statearr_23137_23163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23125 === (9))){
var inst_23088 = (state_23124[(8)]);
var inst_23102 = cljs.core.vec.call(null,inst_23088);
var state_23124__$1 = state_23124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23124__$1,(11),out,inst_23102);
} else {
if((state_val_23125 === (5))){
var inst_23089 = (state_23124[(7)]);
var inst_23097 = (state_23124[(11)]);
var inst_23092 = (state_23124[(9)]);
var inst_23088 = (state_23124[(8)]);
var inst_23096 = (inst_23088[inst_23089] = inst_23092);
var inst_23097__$1 = (inst_23089 + (1));
var inst_23098 = (inst_23097__$1 < n);
var state_23124__$1 = (function (){var statearr_23138 = state_23124;
(statearr_23138[(12)] = inst_23096);

(statearr_23138[(11)] = inst_23097__$1);

return statearr_23138;
})();
if(cljs.core.truth_(inst_23098)){
var statearr_23139_23164 = state_23124__$1;
(statearr_23139_23164[(1)] = (8));

} else {
var statearr_23140_23165 = state_23124__$1;
(statearr_23140_23165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23125 === (14))){
var inst_23117 = (state_23124[(2)]);
var inst_23118 = cljs.core.async.close_BANG_.call(null,out);
var state_23124__$1 = (function (){var statearr_23142 = state_23124;
(statearr_23142[(13)] = inst_23117);

return statearr_23142;
})();
var statearr_23143_23166 = state_23124__$1;
(statearr_23143_23166[(2)] = inst_23118);

(statearr_23143_23166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23125 === (10))){
var inst_23108 = (state_23124[(2)]);
var state_23124__$1 = state_23124;
var statearr_23144_23167 = state_23124__$1;
(statearr_23144_23167[(2)] = inst_23108);

(statearr_23144_23167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23125 === (8))){
var inst_23097 = (state_23124[(11)]);
var inst_23088 = (state_23124[(8)]);
var tmp23141 = inst_23088;
var inst_23088__$1 = tmp23141;
var inst_23089 = inst_23097;
var state_23124__$1 = (function (){var statearr_23145 = state_23124;
(statearr_23145[(7)] = inst_23089);

(statearr_23145[(8)] = inst_23088__$1);

return statearr_23145;
})();
var statearr_23146_23168 = state_23124__$1;
(statearr_23146_23168[(2)] = null);

(statearr_23146_23168[(1)] = (2));


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
});})(c__12570__auto___23154,out))
;
return ((function (switch__12514__auto__,c__12570__auto___23154,out){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_23150 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23150[(0)] = state_machine__12515__auto__);

(statearr_23150[(1)] = (1));

return statearr_23150;
});
var state_machine__12515__auto____1 = (function (state_23124){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_23124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e23151){if((e23151 instanceof Object)){
var ex__12518__auto__ = e23151;
var statearr_23152_23169 = state_23124;
(statearr_23152_23169[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23170 = state_23124;
state_23124 = G__23170;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_23124){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_23124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___23154,out))
})();
var state__12572__auto__ = (function (){var statearr_23153 = f__12571__auto__.call(null);
(statearr_23153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___23154);

return statearr_23153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___23154,out))
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
var c__12570__auto___23313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12570__auto___23313,out){
return (function (){
var f__12571__auto__ = (function (){var switch__12514__auto__ = ((function (c__12570__auto___23313,out){
return (function (state_23283){
var state_val_23284 = (state_23283[(1)]);
if((state_val_23284 === (7))){
var inst_23279 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23285_23314 = state_23283__$1;
(statearr_23285_23314[(2)] = inst_23279);

(statearr_23285_23314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (1))){
var inst_23242 = [];
var inst_23243 = inst_23242;
var inst_23244 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23283__$1 = (function (){var statearr_23286 = state_23283;
(statearr_23286[(7)] = inst_23244);

(statearr_23286[(8)] = inst_23243);

return statearr_23286;
})();
var statearr_23287_23315 = state_23283__$1;
(statearr_23287_23315[(2)] = null);

(statearr_23287_23315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (4))){
var inst_23247 = (state_23283[(9)]);
var inst_23247__$1 = (state_23283[(2)]);
var inst_23248 = (inst_23247__$1 == null);
var inst_23249 = cljs.core.not.call(null,inst_23248);
var state_23283__$1 = (function (){var statearr_23288 = state_23283;
(statearr_23288[(9)] = inst_23247__$1);

return statearr_23288;
})();
if(inst_23249){
var statearr_23289_23316 = state_23283__$1;
(statearr_23289_23316[(1)] = (5));

} else {
var statearr_23290_23317 = state_23283__$1;
(statearr_23290_23317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (15))){
var inst_23273 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23291_23318 = state_23283__$1;
(statearr_23291_23318[(2)] = inst_23273);

(statearr_23291_23318[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (13))){
var state_23283__$1 = state_23283;
var statearr_23292_23319 = state_23283__$1;
(statearr_23292_23319[(2)] = null);

(statearr_23292_23319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (6))){
var inst_23243 = (state_23283[(8)]);
var inst_23268 = inst_23243.length;
var inst_23269 = (inst_23268 > (0));
var state_23283__$1 = state_23283;
if(cljs.core.truth_(inst_23269)){
var statearr_23293_23320 = state_23283__$1;
(statearr_23293_23320[(1)] = (12));

} else {
var statearr_23294_23321 = state_23283__$1;
(statearr_23294_23321[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (3))){
var inst_23281 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23283__$1,inst_23281);
} else {
if((state_val_23284 === (12))){
var inst_23243 = (state_23283[(8)]);
var inst_23271 = cljs.core.vec.call(null,inst_23243);
var state_23283__$1 = state_23283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23283__$1,(15),out,inst_23271);
} else {
if((state_val_23284 === (2))){
var state_23283__$1 = state_23283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23283__$1,(4),ch);
} else {
if((state_val_23284 === (11))){
var inst_23247 = (state_23283[(9)]);
var inst_23251 = (state_23283[(10)]);
var inst_23261 = (state_23283[(2)]);
var inst_23262 = [];
var inst_23263 = inst_23262.push(inst_23247);
var inst_23243 = inst_23262;
var inst_23244 = inst_23251;
var state_23283__$1 = (function (){var statearr_23295 = state_23283;
(statearr_23295[(11)] = inst_23263);

(statearr_23295[(7)] = inst_23244);

(statearr_23295[(8)] = inst_23243);

(statearr_23295[(12)] = inst_23261);

return statearr_23295;
})();
var statearr_23296_23322 = state_23283__$1;
(statearr_23296_23322[(2)] = null);

(statearr_23296_23322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (9))){
var inst_23243 = (state_23283[(8)]);
var inst_23259 = cljs.core.vec.call(null,inst_23243);
var state_23283__$1 = state_23283;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23283__$1,(11),out,inst_23259);
} else {
if((state_val_23284 === (5))){
var inst_23247 = (state_23283[(9)]);
var inst_23244 = (state_23283[(7)]);
var inst_23251 = (state_23283[(10)]);
var inst_23251__$1 = f.call(null,inst_23247);
var inst_23252 = cljs.core._EQ_.call(null,inst_23251__$1,inst_23244);
var inst_23253 = cljs.core.keyword_identical_QMARK_.call(null,inst_23244,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23254 = (inst_23252) || (inst_23253);
var state_23283__$1 = (function (){var statearr_23297 = state_23283;
(statearr_23297[(10)] = inst_23251__$1);

return statearr_23297;
})();
if(cljs.core.truth_(inst_23254)){
var statearr_23298_23323 = state_23283__$1;
(statearr_23298_23323[(1)] = (8));

} else {
var statearr_23299_23324 = state_23283__$1;
(statearr_23299_23324[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (14))){
var inst_23276 = (state_23283[(2)]);
var inst_23277 = cljs.core.async.close_BANG_.call(null,out);
var state_23283__$1 = (function (){var statearr_23301 = state_23283;
(statearr_23301[(13)] = inst_23276);

return statearr_23301;
})();
var statearr_23302_23325 = state_23283__$1;
(statearr_23302_23325[(2)] = inst_23277);

(statearr_23302_23325[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (10))){
var inst_23266 = (state_23283[(2)]);
var state_23283__$1 = state_23283;
var statearr_23303_23326 = state_23283__$1;
(statearr_23303_23326[(2)] = inst_23266);

(statearr_23303_23326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23284 === (8))){
var inst_23247 = (state_23283[(9)]);
var inst_23243 = (state_23283[(8)]);
var inst_23251 = (state_23283[(10)]);
var inst_23256 = inst_23243.push(inst_23247);
var tmp23300 = inst_23243;
var inst_23243__$1 = tmp23300;
var inst_23244 = inst_23251;
var state_23283__$1 = (function (){var statearr_23304 = state_23283;
(statearr_23304[(7)] = inst_23244);

(statearr_23304[(14)] = inst_23256);

(statearr_23304[(8)] = inst_23243__$1);

return statearr_23304;
})();
var statearr_23305_23327 = state_23283__$1;
(statearr_23305_23327[(2)] = null);

(statearr_23305_23327[(1)] = (2));


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
});})(c__12570__auto___23313,out))
;
return ((function (switch__12514__auto__,c__12570__auto___23313,out){
return (function() {
var state_machine__12515__auto__ = null;
var state_machine__12515__auto____0 = (function (){
var statearr_23309 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23309[(0)] = state_machine__12515__auto__);

(statearr_23309[(1)] = (1));

return statearr_23309;
});
var state_machine__12515__auto____1 = (function (state_23283){
while(true){
var ret_value__12516__auto__ = (function (){try{while(true){
var result__12517__auto__ = switch__12514__auto__.call(null,state_23283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12517__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12517__auto__;
}
break;
}
}catch (e23310){if((e23310 instanceof Object)){
var ex__12518__auto__ = e23310;
var statearr_23311_23328 = state_23283;
(statearr_23311_23328[(5)] = ex__12518__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12516__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23329 = state_23283;
state_23283 = G__23329;
continue;
} else {
return ret_value__12516__auto__;
}
break;
}
});
state_machine__12515__auto__ = function(state_23283){
switch(arguments.length){
case 0:
return state_machine__12515__auto____0.call(this);
case 1:
return state_machine__12515__auto____1.call(this,state_23283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12515__auto____0;
state_machine__12515__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12515__auto____1;
return state_machine__12515__auto__;
})()
;})(switch__12514__auto__,c__12570__auto___23313,out))
})();
var state__12572__auto__ = (function (){var statearr_23312 = f__12571__auto__.call(null);
(statearr_23312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12570__auto___23313);

return statearr_23312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12572__auto__);
});})(c__12570__auto___23313,out))
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