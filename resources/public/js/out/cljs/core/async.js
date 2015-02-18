// Compiled by ClojureScript 0.0-2850 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t24037 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24037 = (function (f,fn_handler,meta24038){
this.f = f;
this.fn_handler = fn_handler;
this.meta24038 = meta24038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24037.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24039){
var self__ = this;
var _24039__$1 = this;
return self__.meta24038;
});

cljs.core.async.t24037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24039,meta24038__$1){
var self__ = this;
var _24039__$1 = this;
return (new cljs.core.async.t24037(self__.f,self__.fn_handler,meta24038__$1));
});

cljs.core.async.t24037.cljs$lang$type = true;

cljs.core.async.t24037.cljs$lang$ctorStr = "cljs.core.async/t24037";

cljs.core.async.t24037.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cljs.core.async/t24037");
});

cljs.core.async.__GT_t24037 = (function __GT_t24037(f__$1,fn_handler__$1,meta24038){
return (new cljs.core.async.t24037(f__$1,fn_handler__$1,meta24038));
});

}

return (new cljs.core.async.t24037(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
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
var G__24041 = buff;
if(G__24041){
var bit__8185__auto__ = null;
if(cljs.core.truth_((function (){var or__7504__auto__ = bit__8185__auto__;
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
} else {
return G__24041.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24041.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24041);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24041);
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
var val_24042 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24042);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24042,ret){
return (function (){
return fn1.call(null,val_24042);
});})(val_24042,ret))
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
var n__8391__auto___24043 = n;
var x_24044 = (0);
while(true){
if((x_24044 < n__8391__auto___24043)){
(a[x_24044] = (0));

var G__24045 = (x_24044 + (1));
x_24044 = G__24045;
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

var G__24046 = (i + (1));
i = G__24046;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24050 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24050 = (function (flag,alt_flag,meta24051){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24051 = meta24051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24050.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24050.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24050.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24052){
var self__ = this;
var _24052__$1 = this;
return self__.meta24051;
});})(flag))
;

cljs.core.async.t24050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24052,meta24051__$1){
var self__ = this;
var _24052__$1 = this;
return (new cljs.core.async.t24050(self__.flag,self__.alt_flag,meta24051__$1));
});})(flag))
;

cljs.core.async.t24050.cljs$lang$type = true;

cljs.core.async.t24050.cljs$lang$ctorStr = "cljs.core.async/t24050";

cljs.core.async.t24050.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cljs.core.async/t24050");
});})(flag))
;

cljs.core.async.__GT_t24050 = ((function (flag){
return (function __GT_t24050(flag__$1,alt_flag__$1,meta24051){
return (new cljs.core.async.t24050(flag__$1,alt_flag__$1,meta24051));
});})(flag))
;

}

return (new cljs.core.async.t24050(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t24056 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24056 = (function (cb,flag,alt_handler,meta24057){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24057 = meta24057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24056.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24058){
var self__ = this;
var _24058__$1 = this;
return self__.meta24057;
});

cljs.core.async.t24056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24058,meta24057__$1){
var self__ = this;
var _24058__$1 = this;
return (new cljs.core.async.t24056(self__.cb,self__.flag,self__.alt_handler,meta24057__$1));
});

cljs.core.async.t24056.cljs$lang$type = true;

cljs.core.async.t24056.cljs$lang$ctorStr = "cljs.core.async/t24056";

cljs.core.async.t24056.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cljs.core.async/t24056");
});

cljs.core.async.__GT_t24056 = (function __GT_t24056(cb__$1,flag__$1,alt_handler__$1,meta24057){
return (new cljs.core.async.t24056(cb__$1,flag__$1,alt_handler__$1,meta24057));
});

}

return (new cljs.core.async.t24056(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__24059_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24059_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24060_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24060_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7504__auto__ = wport;
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24061 = (i + (1));
i = G__24061;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7504__auto__ = ret;
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__7492__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__7492__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__7492__auto__;
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
var alts_BANG___delegate = function (ports,p__24062){
var map__24064 = p__24062;
var map__24064__$1 = ((cljs.core.seq_QMARK_.call(null,map__24064))?cljs.core.apply.call(null,cljs.core.hash_map,map__24064):map__24064);
var opts = map__24064__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24062 = null;
if (arguments.length > 1) {
var G__24065__i = 0, G__24065__a = new Array(arguments.length -  1);
while (G__24065__i < G__24065__a.length) {G__24065__a[G__24065__i] = arguments[G__24065__i + 1]; ++G__24065__i;}
  p__24062 = new cljs.core.IndexedSeq(G__24065__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__24062);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24066){
var ports = cljs.core.first(arglist__24066);
var p__24062 = cljs.core.rest(arglist__24066);
return alts_BANG___delegate(ports,p__24062);
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
var c__10282__auto___24161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___24161){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___24161){
return (function (state_24137){
var state_val_24138 = (state_24137[(1)]);
if((state_val_24138 === (7))){
var inst_24133 = (state_24137[(2)]);
var state_24137__$1 = state_24137;
var statearr_24139_24162 = state_24137__$1;
(statearr_24139_24162[(2)] = inst_24133);

(statearr_24139_24162[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (1))){
var state_24137__$1 = state_24137;
var statearr_24140_24163 = state_24137__$1;
(statearr_24140_24163[(2)] = null);

(statearr_24140_24163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (4))){
var inst_24116 = (state_24137[(7)]);
var inst_24116__$1 = (state_24137[(2)]);
var inst_24117 = (inst_24116__$1 == null);
var state_24137__$1 = (function (){var statearr_24141 = state_24137;
(statearr_24141[(7)] = inst_24116__$1);

return statearr_24141;
})();
if(cljs.core.truth_(inst_24117)){
var statearr_24142_24164 = state_24137__$1;
(statearr_24142_24164[(1)] = (5));

} else {
var statearr_24143_24165 = state_24137__$1;
(statearr_24143_24165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (13))){
var state_24137__$1 = state_24137;
var statearr_24144_24166 = state_24137__$1;
(statearr_24144_24166[(2)] = null);

(statearr_24144_24166[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (6))){
var inst_24116 = (state_24137[(7)]);
var state_24137__$1 = state_24137;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24137__$1,(11),to,inst_24116);
} else {
if((state_val_24138 === (3))){
var inst_24135 = (state_24137[(2)]);
var state_24137__$1 = state_24137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24137__$1,inst_24135);
} else {
if((state_val_24138 === (12))){
var state_24137__$1 = state_24137;
var statearr_24145_24167 = state_24137__$1;
(statearr_24145_24167[(2)] = null);

(statearr_24145_24167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (2))){
var state_24137__$1 = state_24137;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24137__$1,(4),from);
} else {
if((state_val_24138 === (11))){
var inst_24126 = (state_24137[(2)]);
var state_24137__$1 = state_24137;
if(cljs.core.truth_(inst_24126)){
var statearr_24146_24168 = state_24137__$1;
(statearr_24146_24168[(1)] = (12));

} else {
var statearr_24147_24169 = state_24137__$1;
(statearr_24147_24169[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (9))){
var state_24137__$1 = state_24137;
var statearr_24148_24170 = state_24137__$1;
(statearr_24148_24170[(2)] = null);

(statearr_24148_24170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (5))){
var state_24137__$1 = state_24137;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24149_24171 = state_24137__$1;
(statearr_24149_24171[(1)] = (8));

} else {
var statearr_24150_24172 = state_24137__$1;
(statearr_24150_24172[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (14))){
var inst_24131 = (state_24137[(2)]);
var state_24137__$1 = state_24137;
var statearr_24151_24173 = state_24137__$1;
(statearr_24151_24173[(2)] = inst_24131);

(statearr_24151_24173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (10))){
var inst_24123 = (state_24137[(2)]);
var state_24137__$1 = state_24137;
var statearr_24152_24174 = state_24137__$1;
(statearr_24152_24174[(2)] = inst_24123);

(statearr_24152_24174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24138 === (8))){
var inst_24120 = cljs.core.async.close_BANG_.call(null,to);
var state_24137__$1 = state_24137;
var statearr_24153_24175 = state_24137__$1;
(statearr_24153_24175[(2)] = inst_24120);

(statearr_24153_24175[(1)] = (10));


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
});})(c__10282__auto___24161))
;
return ((function (switch__10226__auto__,c__10282__auto___24161){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_24157 = [null,null,null,null,null,null,null,null];
(statearr_24157[(0)] = state_machine__10227__auto__);

(statearr_24157[(1)] = (1));

return statearr_24157;
});
var state_machine__10227__auto____1 = (function (state_24137){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_24137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e24158){if((e24158 instanceof Object)){
var ex__10230__auto__ = e24158;
var statearr_24159_24176 = state_24137;
(statearr_24159_24176[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24177 = state_24137;
state_24137 = G__24177;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_24137){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_24137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___24161))
})();
var state__10284__auto__ = (function (){var statearr_24160 = f__10283__auto__.call(null);
(statearr_24160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___24161);

return statearr_24160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___24161))
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
return (function (p__24361){
var vec__24362 = p__24361;
var v = cljs.core.nth.call(null,vec__24362,(0),null);
var p = cljs.core.nth.call(null,vec__24362,(1),null);
var job = vec__24362;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10282__auto___24544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___24544,res,vec__24362,v,p,job,jobs,results){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___24544,res,vec__24362,v,p,job,jobs,results){
return (function (state_24367){
var state_val_24368 = (state_24367[(1)]);
if((state_val_24368 === (2))){
var inst_24364 = (state_24367[(2)]);
var inst_24365 = cljs.core.async.close_BANG_.call(null,res);
var state_24367__$1 = (function (){var statearr_24369 = state_24367;
(statearr_24369[(7)] = inst_24364);

return statearr_24369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24367__$1,inst_24365);
} else {
if((state_val_24368 === (1))){
var state_24367__$1 = state_24367;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24367__$1,(2),res,v);
} else {
return null;
}
}
});})(c__10282__auto___24544,res,vec__24362,v,p,job,jobs,results))
;
return ((function (switch__10226__auto__,c__10282__auto___24544,res,vec__24362,v,p,job,jobs,results){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_24373 = [null,null,null,null,null,null,null,null];
(statearr_24373[(0)] = state_machine__10227__auto__);

(statearr_24373[(1)] = (1));

return statearr_24373;
});
var state_machine__10227__auto____1 = (function (state_24367){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_24367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e24374){if((e24374 instanceof Object)){
var ex__10230__auto__ = e24374;
var statearr_24375_24545 = state_24367;
(statearr_24375_24545[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24546 = state_24367;
state_24367 = G__24546;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_24367){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_24367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___24544,res,vec__24362,v,p,job,jobs,results))
})();
var state__10284__auto__ = (function (){var statearr_24376 = f__10283__auto__.call(null);
(statearr_24376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___24544);

return statearr_24376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___24544,res,vec__24362,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__24377){
var vec__24378 = p__24377;
var v = cljs.core.nth.call(null,vec__24378,(0),null);
var p = cljs.core.nth.call(null,vec__24378,(1),null);
var job = vec__24378;
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
var n__8391__auto___24547 = n;
var __24548 = (0);
while(true){
if((__24548 < n__8391__auto___24547)){
var G__24379_24549 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__24379_24549) {
case "async":
var c__10282__auto___24551 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24548,c__10282__auto___24551,G__24379_24549,n__8391__auto___24547,jobs,results,process,async){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (__24548,c__10282__auto___24551,G__24379_24549,n__8391__auto___24547,jobs,results,process,async){
return (function (state_24392){
var state_val_24393 = (state_24392[(1)]);
if((state_val_24393 === (7))){
var inst_24388 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
var statearr_24394_24552 = state_24392__$1;
(statearr_24394_24552[(2)] = inst_24388);

(statearr_24394_24552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (6))){
var state_24392__$1 = state_24392;
var statearr_24395_24553 = state_24392__$1;
(statearr_24395_24553[(2)] = null);

(statearr_24395_24553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (5))){
var state_24392__$1 = state_24392;
var statearr_24396_24554 = state_24392__$1;
(statearr_24396_24554[(2)] = null);

(statearr_24396_24554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (4))){
var inst_24382 = (state_24392[(2)]);
var inst_24383 = async.call(null,inst_24382);
var state_24392__$1 = state_24392;
if(cljs.core.truth_(inst_24383)){
var statearr_24397_24555 = state_24392__$1;
(statearr_24397_24555[(1)] = (5));

} else {
var statearr_24398_24556 = state_24392__$1;
(statearr_24398_24556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24393 === (3))){
var inst_24390 = (state_24392[(2)]);
var state_24392__$1 = state_24392;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24392__$1,inst_24390);
} else {
if((state_val_24393 === (2))){
var state_24392__$1 = state_24392;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24392__$1,(4),jobs);
} else {
if((state_val_24393 === (1))){
var state_24392__$1 = state_24392;
var statearr_24399_24557 = state_24392__$1;
(statearr_24399_24557[(2)] = null);

(statearr_24399_24557[(1)] = (2));


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
});})(__24548,c__10282__auto___24551,G__24379_24549,n__8391__auto___24547,jobs,results,process,async))
;
return ((function (__24548,switch__10226__auto__,c__10282__auto___24551,G__24379_24549,n__8391__auto___24547,jobs,results,process,async){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_24403 = [null,null,null,null,null,null,null];
(statearr_24403[(0)] = state_machine__10227__auto__);

(statearr_24403[(1)] = (1));

return statearr_24403;
});
var state_machine__10227__auto____1 = (function (state_24392){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_24392);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e24404){if((e24404 instanceof Object)){
var ex__10230__auto__ = e24404;
var statearr_24405_24558 = state_24392;
(statearr_24405_24558[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24392);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24559 = state_24392;
state_24392 = G__24559;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_24392){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_24392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(__24548,switch__10226__auto__,c__10282__auto___24551,G__24379_24549,n__8391__auto___24547,jobs,results,process,async))
})();
var state__10284__auto__ = (function (){var statearr_24406 = f__10283__auto__.call(null);
(statearr_24406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___24551);

return statearr_24406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(__24548,c__10282__auto___24551,G__24379_24549,n__8391__auto___24547,jobs,results,process,async))
);


break;
case "compute":
var c__10282__auto___24560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__24548,c__10282__auto___24560,G__24379_24549,n__8391__auto___24547,jobs,results,process,async){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (__24548,c__10282__auto___24560,G__24379_24549,n__8391__auto___24547,jobs,results,process,async){
return (function (state_24419){
var state_val_24420 = (state_24419[(1)]);
if((state_val_24420 === (7))){
var inst_24415 = (state_24419[(2)]);
var state_24419__$1 = state_24419;
var statearr_24421_24561 = state_24419__$1;
(statearr_24421_24561[(2)] = inst_24415);

(statearr_24421_24561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24420 === (6))){
var state_24419__$1 = state_24419;
var statearr_24422_24562 = state_24419__$1;
(statearr_24422_24562[(2)] = null);

(statearr_24422_24562[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24420 === (5))){
var state_24419__$1 = state_24419;
var statearr_24423_24563 = state_24419__$1;
(statearr_24423_24563[(2)] = null);

(statearr_24423_24563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24420 === (4))){
var inst_24409 = (state_24419[(2)]);
var inst_24410 = process.call(null,inst_24409);
var state_24419__$1 = state_24419;
if(cljs.core.truth_(inst_24410)){
var statearr_24424_24564 = state_24419__$1;
(statearr_24424_24564[(1)] = (5));

} else {
var statearr_24425_24565 = state_24419__$1;
(statearr_24425_24565[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24420 === (3))){
var inst_24417 = (state_24419[(2)]);
var state_24419__$1 = state_24419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24419__$1,inst_24417);
} else {
if((state_val_24420 === (2))){
var state_24419__$1 = state_24419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24419__$1,(4),jobs);
} else {
if((state_val_24420 === (1))){
var state_24419__$1 = state_24419;
var statearr_24426_24566 = state_24419__$1;
(statearr_24426_24566[(2)] = null);

(statearr_24426_24566[(1)] = (2));


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
});})(__24548,c__10282__auto___24560,G__24379_24549,n__8391__auto___24547,jobs,results,process,async))
;
return ((function (__24548,switch__10226__auto__,c__10282__auto___24560,G__24379_24549,n__8391__auto___24547,jobs,results,process,async){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_24430 = [null,null,null,null,null,null,null];
(statearr_24430[(0)] = state_machine__10227__auto__);

(statearr_24430[(1)] = (1));

return statearr_24430;
});
var state_machine__10227__auto____1 = (function (state_24419){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_24419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e24431){if((e24431 instanceof Object)){
var ex__10230__auto__ = e24431;
var statearr_24432_24567 = state_24419;
(statearr_24432_24567[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24568 = state_24419;
state_24419 = G__24568;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_24419){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_24419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(__24548,switch__10226__auto__,c__10282__auto___24560,G__24379_24549,n__8391__auto___24547,jobs,results,process,async))
})();
var state__10284__auto__ = (function (){var statearr_24433 = f__10283__auto__.call(null);
(statearr_24433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___24560);

return statearr_24433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(__24548,c__10282__auto___24560,G__24379_24549,n__8391__auto___24547,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__24569 = (__24548 + (1));
__24548 = G__24569;
continue;
} else {
}
break;
}

var c__10282__auto___24570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___24570,jobs,results,process,async){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___24570,jobs,results,process,async){
return (function (state_24455){
var state_val_24456 = (state_24455[(1)]);
if((state_val_24456 === (9))){
var inst_24448 = (state_24455[(2)]);
var state_24455__$1 = (function (){var statearr_24457 = state_24455;
(statearr_24457[(7)] = inst_24448);

return statearr_24457;
})();
var statearr_24458_24571 = state_24455__$1;
(statearr_24458_24571[(2)] = null);

(statearr_24458_24571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (8))){
var inst_24441 = (state_24455[(8)]);
var inst_24446 = (state_24455[(2)]);
var state_24455__$1 = (function (){var statearr_24459 = state_24455;
(statearr_24459[(9)] = inst_24446);

return statearr_24459;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24455__$1,(9),results,inst_24441);
} else {
if((state_val_24456 === (7))){
var inst_24451 = (state_24455[(2)]);
var state_24455__$1 = state_24455;
var statearr_24460_24572 = state_24455__$1;
(statearr_24460_24572[(2)] = inst_24451);

(statearr_24460_24572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (6))){
var inst_24441 = (state_24455[(8)]);
var inst_24436 = (state_24455[(10)]);
var inst_24441__$1 = cljs.core.async.chan.call(null,(1));
var inst_24442 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24443 = [inst_24436,inst_24441__$1];
var inst_24444 = (new cljs.core.PersistentVector(null,2,(5),inst_24442,inst_24443,null));
var state_24455__$1 = (function (){var statearr_24461 = state_24455;
(statearr_24461[(8)] = inst_24441__$1);

return statearr_24461;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24455__$1,(8),jobs,inst_24444);
} else {
if((state_val_24456 === (5))){
var inst_24439 = cljs.core.async.close_BANG_.call(null,jobs);
var state_24455__$1 = state_24455;
var statearr_24462_24573 = state_24455__$1;
(statearr_24462_24573[(2)] = inst_24439);

(statearr_24462_24573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (4))){
var inst_24436 = (state_24455[(10)]);
var inst_24436__$1 = (state_24455[(2)]);
var inst_24437 = (inst_24436__$1 == null);
var state_24455__$1 = (function (){var statearr_24463 = state_24455;
(statearr_24463[(10)] = inst_24436__$1);

return statearr_24463;
})();
if(cljs.core.truth_(inst_24437)){
var statearr_24464_24574 = state_24455__$1;
(statearr_24464_24574[(1)] = (5));

} else {
var statearr_24465_24575 = state_24455__$1;
(statearr_24465_24575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24456 === (3))){
var inst_24453 = (state_24455[(2)]);
var state_24455__$1 = state_24455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24455__$1,inst_24453);
} else {
if((state_val_24456 === (2))){
var state_24455__$1 = state_24455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24455__$1,(4),from);
} else {
if((state_val_24456 === (1))){
var state_24455__$1 = state_24455;
var statearr_24466_24576 = state_24455__$1;
(statearr_24466_24576[(2)] = null);

(statearr_24466_24576[(1)] = (2));


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
});})(c__10282__auto___24570,jobs,results,process,async))
;
return ((function (switch__10226__auto__,c__10282__auto___24570,jobs,results,process,async){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_24470 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24470[(0)] = state_machine__10227__auto__);

(statearr_24470[(1)] = (1));

return statearr_24470;
});
var state_machine__10227__auto____1 = (function (state_24455){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_24455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e24471){if((e24471 instanceof Object)){
var ex__10230__auto__ = e24471;
var statearr_24472_24577 = state_24455;
(statearr_24472_24577[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24578 = state_24455;
state_24455 = G__24578;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_24455){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_24455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___24570,jobs,results,process,async))
})();
var state__10284__auto__ = (function (){var statearr_24473 = f__10283__auto__.call(null);
(statearr_24473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___24570);

return statearr_24473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___24570,jobs,results,process,async))
);


var c__10282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__,jobs,results,process,async){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto__,jobs,results,process,async){
return (function (state_24511){
var state_val_24512 = (state_24511[(1)]);
if((state_val_24512 === (7))){
var inst_24507 = (state_24511[(2)]);
var state_24511__$1 = state_24511;
var statearr_24513_24579 = state_24511__$1;
(statearr_24513_24579[(2)] = inst_24507);

(statearr_24513_24579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (20))){
var state_24511__$1 = state_24511;
var statearr_24514_24580 = state_24511__$1;
(statearr_24514_24580[(2)] = null);

(statearr_24514_24580[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (1))){
var state_24511__$1 = state_24511;
var statearr_24515_24581 = state_24511__$1;
(statearr_24515_24581[(2)] = null);

(statearr_24515_24581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (4))){
var inst_24476 = (state_24511[(7)]);
var inst_24476__$1 = (state_24511[(2)]);
var inst_24477 = (inst_24476__$1 == null);
var state_24511__$1 = (function (){var statearr_24516 = state_24511;
(statearr_24516[(7)] = inst_24476__$1);

return statearr_24516;
})();
if(cljs.core.truth_(inst_24477)){
var statearr_24517_24582 = state_24511__$1;
(statearr_24517_24582[(1)] = (5));

} else {
var statearr_24518_24583 = state_24511__$1;
(statearr_24518_24583[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (15))){
var inst_24489 = (state_24511[(8)]);
var state_24511__$1 = state_24511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24511__$1,(18),to,inst_24489);
} else {
if((state_val_24512 === (21))){
var inst_24502 = (state_24511[(2)]);
var state_24511__$1 = state_24511;
var statearr_24519_24584 = state_24511__$1;
(statearr_24519_24584[(2)] = inst_24502);

(statearr_24519_24584[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (13))){
var inst_24504 = (state_24511[(2)]);
var state_24511__$1 = (function (){var statearr_24520 = state_24511;
(statearr_24520[(9)] = inst_24504);

return statearr_24520;
})();
var statearr_24521_24585 = state_24511__$1;
(statearr_24521_24585[(2)] = null);

(statearr_24521_24585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (6))){
var inst_24476 = (state_24511[(7)]);
var state_24511__$1 = state_24511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24511__$1,(11),inst_24476);
} else {
if((state_val_24512 === (17))){
var inst_24497 = (state_24511[(2)]);
var state_24511__$1 = state_24511;
if(cljs.core.truth_(inst_24497)){
var statearr_24522_24586 = state_24511__$1;
(statearr_24522_24586[(1)] = (19));

} else {
var statearr_24523_24587 = state_24511__$1;
(statearr_24523_24587[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (3))){
var inst_24509 = (state_24511[(2)]);
var state_24511__$1 = state_24511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24511__$1,inst_24509);
} else {
if((state_val_24512 === (12))){
var inst_24486 = (state_24511[(10)]);
var state_24511__$1 = state_24511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24511__$1,(14),inst_24486);
} else {
if((state_val_24512 === (2))){
var state_24511__$1 = state_24511;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24511__$1,(4),results);
} else {
if((state_val_24512 === (19))){
var state_24511__$1 = state_24511;
var statearr_24524_24588 = state_24511__$1;
(statearr_24524_24588[(2)] = null);

(statearr_24524_24588[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (11))){
var inst_24486 = (state_24511[(2)]);
var state_24511__$1 = (function (){var statearr_24525 = state_24511;
(statearr_24525[(10)] = inst_24486);

return statearr_24525;
})();
var statearr_24526_24589 = state_24511__$1;
(statearr_24526_24589[(2)] = null);

(statearr_24526_24589[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (9))){
var state_24511__$1 = state_24511;
var statearr_24527_24590 = state_24511__$1;
(statearr_24527_24590[(2)] = null);

(statearr_24527_24590[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (5))){
var state_24511__$1 = state_24511;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24528_24591 = state_24511__$1;
(statearr_24528_24591[(1)] = (8));

} else {
var statearr_24529_24592 = state_24511__$1;
(statearr_24529_24592[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (14))){
var inst_24491 = (state_24511[(11)]);
var inst_24489 = (state_24511[(8)]);
var inst_24489__$1 = (state_24511[(2)]);
var inst_24490 = (inst_24489__$1 == null);
var inst_24491__$1 = cljs.core.not.call(null,inst_24490);
var state_24511__$1 = (function (){var statearr_24530 = state_24511;
(statearr_24530[(11)] = inst_24491__$1);

(statearr_24530[(8)] = inst_24489__$1);

return statearr_24530;
})();
if(inst_24491__$1){
var statearr_24531_24593 = state_24511__$1;
(statearr_24531_24593[(1)] = (15));

} else {
var statearr_24532_24594 = state_24511__$1;
(statearr_24532_24594[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (16))){
var inst_24491 = (state_24511[(11)]);
var state_24511__$1 = state_24511;
var statearr_24533_24595 = state_24511__$1;
(statearr_24533_24595[(2)] = inst_24491);

(statearr_24533_24595[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (10))){
var inst_24483 = (state_24511[(2)]);
var state_24511__$1 = state_24511;
var statearr_24534_24596 = state_24511__$1;
(statearr_24534_24596[(2)] = inst_24483);

(statearr_24534_24596[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (18))){
var inst_24494 = (state_24511[(2)]);
var state_24511__$1 = state_24511;
var statearr_24535_24597 = state_24511__$1;
(statearr_24535_24597[(2)] = inst_24494);

(statearr_24535_24597[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24512 === (8))){
var inst_24480 = cljs.core.async.close_BANG_.call(null,to);
var state_24511__$1 = state_24511;
var statearr_24536_24598 = state_24511__$1;
(statearr_24536_24598[(2)] = inst_24480);

(statearr_24536_24598[(1)] = (10));


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
});})(c__10282__auto__,jobs,results,process,async))
;
return ((function (switch__10226__auto__,c__10282__auto__,jobs,results,process,async){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_24540 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24540[(0)] = state_machine__10227__auto__);

(statearr_24540[(1)] = (1));

return statearr_24540;
});
var state_machine__10227__auto____1 = (function (state_24511){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_24511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e24541){if((e24541 instanceof Object)){
var ex__10230__auto__ = e24541;
var statearr_24542_24599 = state_24511;
(statearr_24542_24599[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24600 = state_24511;
state_24511 = G__24600;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_24511){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_24511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto__,jobs,results,process,async))
})();
var state__10284__auto__ = (function (){var statearr_24543 = f__10283__auto__.call(null);
(statearr_24543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);

return statearr_24543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__,jobs,results,process,async))
);

return c__10282__auto__;
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
var c__10282__auto___24701 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___24701,tc,fc){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___24701,tc,fc){
return (function (state_24676){
var state_val_24677 = (state_24676[(1)]);
if((state_val_24677 === (7))){
var inst_24672 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
var statearr_24678_24702 = state_24676__$1;
(statearr_24678_24702[(2)] = inst_24672);

(statearr_24678_24702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (1))){
var state_24676__$1 = state_24676;
var statearr_24679_24703 = state_24676__$1;
(statearr_24679_24703[(2)] = null);

(statearr_24679_24703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (4))){
var inst_24653 = (state_24676[(7)]);
var inst_24653__$1 = (state_24676[(2)]);
var inst_24654 = (inst_24653__$1 == null);
var state_24676__$1 = (function (){var statearr_24680 = state_24676;
(statearr_24680[(7)] = inst_24653__$1);

return statearr_24680;
})();
if(cljs.core.truth_(inst_24654)){
var statearr_24681_24704 = state_24676__$1;
(statearr_24681_24704[(1)] = (5));

} else {
var statearr_24682_24705 = state_24676__$1;
(statearr_24682_24705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (13))){
var state_24676__$1 = state_24676;
var statearr_24683_24706 = state_24676__$1;
(statearr_24683_24706[(2)] = null);

(statearr_24683_24706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (6))){
var inst_24653 = (state_24676[(7)]);
var inst_24659 = p.call(null,inst_24653);
var state_24676__$1 = state_24676;
if(cljs.core.truth_(inst_24659)){
var statearr_24684_24707 = state_24676__$1;
(statearr_24684_24707[(1)] = (9));

} else {
var statearr_24685_24708 = state_24676__$1;
(statearr_24685_24708[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (3))){
var inst_24674 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24676__$1,inst_24674);
} else {
if((state_val_24677 === (12))){
var state_24676__$1 = state_24676;
var statearr_24686_24709 = state_24676__$1;
(statearr_24686_24709[(2)] = null);

(statearr_24686_24709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (2))){
var state_24676__$1 = state_24676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24676__$1,(4),ch);
} else {
if((state_val_24677 === (11))){
var inst_24653 = (state_24676[(7)]);
var inst_24663 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24676__$1,(8),inst_24663,inst_24653);
} else {
if((state_val_24677 === (9))){
var state_24676__$1 = state_24676;
var statearr_24687_24710 = state_24676__$1;
(statearr_24687_24710[(2)] = tc);

(statearr_24687_24710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (5))){
var inst_24656 = cljs.core.async.close_BANG_.call(null,tc);
var inst_24657 = cljs.core.async.close_BANG_.call(null,fc);
var state_24676__$1 = (function (){var statearr_24688 = state_24676;
(statearr_24688[(8)] = inst_24656);

return statearr_24688;
})();
var statearr_24689_24711 = state_24676__$1;
(statearr_24689_24711[(2)] = inst_24657);

(statearr_24689_24711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (14))){
var inst_24670 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
var statearr_24690_24712 = state_24676__$1;
(statearr_24690_24712[(2)] = inst_24670);

(statearr_24690_24712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (10))){
var state_24676__$1 = state_24676;
var statearr_24691_24713 = state_24676__$1;
(statearr_24691_24713[(2)] = fc);

(statearr_24691_24713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24677 === (8))){
var inst_24665 = (state_24676[(2)]);
var state_24676__$1 = state_24676;
if(cljs.core.truth_(inst_24665)){
var statearr_24692_24714 = state_24676__$1;
(statearr_24692_24714[(1)] = (12));

} else {
var statearr_24693_24715 = state_24676__$1;
(statearr_24693_24715[(1)] = (13));

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
});})(c__10282__auto___24701,tc,fc))
;
return ((function (switch__10226__auto__,c__10282__auto___24701,tc,fc){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_24697 = [null,null,null,null,null,null,null,null,null];
(statearr_24697[(0)] = state_machine__10227__auto__);

(statearr_24697[(1)] = (1));

return statearr_24697;
});
var state_machine__10227__auto____1 = (function (state_24676){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_24676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e24698){if((e24698 instanceof Object)){
var ex__10230__auto__ = e24698;
var statearr_24699_24716 = state_24676;
(statearr_24699_24716[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24717 = state_24676;
state_24676 = G__24717;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_24676){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_24676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___24701,tc,fc))
})();
var state__10284__auto__ = (function (){var statearr_24700 = f__10283__auto__.call(null);
(statearr_24700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___24701);

return statearr_24700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___24701,tc,fc))
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
var c__10282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto__){
return (function (state_24764){
var state_val_24765 = (state_24764[(1)]);
if((state_val_24765 === (7))){
var inst_24760 = (state_24764[(2)]);
var state_24764__$1 = state_24764;
var statearr_24766_24782 = state_24764__$1;
(statearr_24766_24782[(2)] = inst_24760);

(statearr_24766_24782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24765 === (6))){
var inst_24750 = (state_24764[(7)]);
var inst_24753 = (state_24764[(8)]);
var inst_24757 = f.call(null,inst_24750,inst_24753);
var inst_24750__$1 = inst_24757;
var state_24764__$1 = (function (){var statearr_24767 = state_24764;
(statearr_24767[(7)] = inst_24750__$1);

return statearr_24767;
})();
var statearr_24768_24783 = state_24764__$1;
(statearr_24768_24783[(2)] = null);

(statearr_24768_24783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24765 === (5))){
var inst_24750 = (state_24764[(7)]);
var state_24764__$1 = state_24764;
var statearr_24769_24784 = state_24764__$1;
(statearr_24769_24784[(2)] = inst_24750);

(statearr_24769_24784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24765 === (4))){
var inst_24753 = (state_24764[(8)]);
var inst_24753__$1 = (state_24764[(2)]);
var inst_24754 = (inst_24753__$1 == null);
var state_24764__$1 = (function (){var statearr_24770 = state_24764;
(statearr_24770[(8)] = inst_24753__$1);

return statearr_24770;
})();
if(cljs.core.truth_(inst_24754)){
var statearr_24771_24785 = state_24764__$1;
(statearr_24771_24785[(1)] = (5));

} else {
var statearr_24772_24786 = state_24764__$1;
(statearr_24772_24786[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24765 === (3))){
var inst_24762 = (state_24764[(2)]);
var state_24764__$1 = state_24764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24764__$1,inst_24762);
} else {
if((state_val_24765 === (2))){
var state_24764__$1 = state_24764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24764__$1,(4),ch);
} else {
if((state_val_24765 === (1))){
var inst_24750 = init;
var state_24764__$1 = (function (){var statearr_24773 = state_24764;
(statearr_24773[(7)] = inst_24750);

return statearr_24773;
})();
var statearr_24774_24787 = state_24764__$1;
(statearr_24774_24787[(2)] = null);

(statearr_24774_24787[(1)] = (2));


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
});})(c__10282__auto__))
;
return ((function (switch__10226__auto__,c__10282__auto__){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_24778 = [null,null,null,null,null,null,null,null,null];
(statearr_24778[(0)] = state_machine__10227__auto__);

(statearr_24778[(1)] = (1));

return statearr_24778;
});
var state_machine__10227__auto____1 = (function (state_24764){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_24764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e24779){if((e24779 instanceof Object)){
var ex__10230__auto__ = e24779;
var statearr_24780_24788 = state_24764;
(statearr_24780_24788[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24789 = state_24764;
state_24764 = G__24789;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_24764){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_24764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto__))
})();
var state__10284__auto__ = (function (){var statearr_24781 = f__10283__auto__.call(null);
(statearr_24781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);

return statearr_24781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__))
);

return c__10282__auto__;
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
var c__10282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto__){
return (function (state_24863){
var state_val_24864 = (state_24863[(1)]);
if((state_val_24864 === (7))){
var inst_24845 = (state_24863[(2)]);
var state_24863__$1 = state_24863;
var statearr_24865_24888 = state_24863__$1;
(statearr_24865_24888[(2)] = inst_24845);

(statearr_24865_24888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (1))){
var inst_24839 = cljs.core.seq.call(null,coll);
var inst_24840 = inst_24839;
var state_24863__$1 = (function (){var statearr_24866 = state_24863;
(statearr_24866[(7)] = inst_24840);

return statearr_24866;
})();
var statearr_24867_24889 = state_24863__$1;
(statearr_24867_24889[(2)] = null);

(statearr_24867_24889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (4))){
var inst_24840 = (state_24863[(7)]);
var inst_24843 = cljs.core.first.call(null,inst_24840);
var state_24863__$1 = state_24863;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24863__$1,(7),ch,inst_24843);
} else {
if((state_val_24864 === (13))){
var inst_24857 = (state_24863[(2)]);
var state_24863__$1 = state_24863;
var statearr_24868_24890 = state_24863__$1;
(statearr_24868_24890[(2)] = inst_24857);

(statearr_24868_24890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (6))){
var inst_24848 = (state_24863[(2)]);
var state_24863__$1 = state_24863;
if(cljs.core.truth_(inst_24848)){
var statearr_24869_24891 = state_24863__$1;
(statearr_24869_24891[(1)] = (8));

} else {
var statearr_24870_24892 = state_24863__$1;
(statearr_24870_24892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (3))){
var inst_24861 = (state_24863[(2)]);
var state_24863__$1 = state_24863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24863__$1,inst_24861);
} else {
if((state_val_24864 === (12))){
var state_24863__$1 = state_24863;
var statearr_24871_24893 = state_24863__$1;
(statearr_24871_24893[(2)] = null);

(statearr_24871_24893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (2))){
var inst_24840 = (state_24863[(7)]);
var state_24863__$1 = state_24863;
if(cljs.core.truth_(inst_24840)){
var statearr_24872_24894 = state_24863__$1;
(statearr_24872_24894[(1)] = (4));

} else {
var statearr_24873_24895 = state_24863__$1;
(statearr_24873_24895[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (11))){
var inst_24854 = cljs.core.async.close_BANG_.call(null,ch);
var state_24863__$1 = state_24863;
var statearr_24874_24896 = state_24863__$1;
(statearr_24874_24896[(2)] = inst_24854);

(statearr_24874_24896[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (9))){
var state_24863__$1 = state_24863;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24875_24897 = state_24863__$1;
(statearr_24875_24897[(1)] = (11));

} else {
var statearr_24876_24898 = state_24863__$1;
(statearr_24876_24898[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (5))){
var inst_24840 = (state_24863[(7)]);
var state_24863__$1 = state_24863;
var statearr_24877_24899 = state_24863__$1;
(statearr_24877_24899[(2)] = inst_24840);

(statearr_24877_24899[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (10))){
var inst_24859 = (state_24863[(2)]);
var state_24863__$1 = state_24863;
var statearr_24878_24900 = state_24863__$1;
(statearr_24878_24900[(2)] = inst_24859);

(statearr_24878_24900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24864 === (8))){
var inst_24840 = (state_24863[(7)]);
var inst_24850 = cljs.core.next.call(null,inst_24840);
var inst_24840__$1 = inst_24850;
var state_24863__$1 = (function (){var statearr_24879 = state_24863;
(statearr_24879[(7)] = inst_24840__$1);

return statearr_24879;
})();
var statearr_24880_24901 = state_24863__$1;
(statearr_24880_24901[(2)] = null);

(statearr_24880_24901[(1)] = (2));


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
});})(c__10282__auto__))
;
return ((function (switch__10226__auto__,c__10282__auto__){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_24884 = [null,null,null,null,null,null,null,null];
(statearr_24884[(0)] = state_machine__10227__auto__);

(statearr_24884[(1)] = (1));

return statearr_24884;
});
var state_machine__10227__auto____1 = (function (state_24863){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_24863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e24885){if((e24885 instanceof Object)){
var ex__10230__auto__ = e24885;
var statearr_24886_24902 = state_24863;
(statearr_24886_24902[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24903 = state_24863;
state_24863 = G__24903;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_24863){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_24863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto__))
})();
var state__10284__auto__ = (function (){var statearr_24887 = f__10283__auto__.call(null);
(statearr_24887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);

return statearr_24887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__))
);

return c__10282__auto__;
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

cljs.core.async.Mux = (function (){var obj24905 = {};
return obj24905;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__7492__auto__ = _;
if(and__7492__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__7492__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__8148__auto__ = (((_ == null))?null:_);
return (function (){var or__7504__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj24907 = {};
return obj24907;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__7492__auto__ = m;
if(and__7492__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__7492__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__8148__auto__ = (((m == null))?null:m);
return (function (){var or__7504__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__7492__auto__ = m;
if(and__7492__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__7492__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__8148__auto__ = (((m == null))?null:m);
return (function (){var or__7504__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__7492__auto__ = m;
if(and__7492__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__7492__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__8148__auto__ = (((m == null))?null:m);
return (function (){var or__7504__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
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
if(typeof cljs.core.async.t25129 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25129 = (function (cs,ch,mult,meta25130){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25130 = meta25130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25129.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25129.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25129.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25129.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25129.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25129.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25129.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25131){
var self__ = this;
var _25131__$1 = this;
return self__.meta25130;
});})(cs))
;

cljs.core.async.t25129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25131,meta25130__$1){
var self__ = this;
var _25131__$1 = this;
return (new cljs.core.async.t25129(self__.cs,self__.ch,self__.mult,meta25130__$1));
});})(cs))
;

cljs.core.async.t25129.cljs$lang$type = true;

cljs.core.async.t25129.cljs$lang$ctorStr = "cljs.core.async/t25129";

cljs.core.async.t25129.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cljs.core.async/t25129");
});})(cs))
;

cljs.core.async.__GT_t25129 = ((function (cs){
return (function __GT_t25129(cs__$1,ch__$1,mult__$1,meta25130){
return (new cljs.core.async.t25129(cs__$1,ch__$1,mult__$1,meta25130));
});})(cs))
;

}

return (new cljs.core.async.t25129(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10282__auto___25350 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___25350,cs,m,dchan,dctr,done){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___25350,cs,m,dchan,dctr,done){
return (function (state_25262){
var state_val_25263 = (state_25262[(1)]);
if((state_val_25263 === (7))){
var inst_25258 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25264_25351 = state_25262__$1;
(statearr_25264_25351[(2)] = inst_25258);

(statearr_25264_25351[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (20))){
var inst_25163 = (state_25262[(7)]);
var inst_25173 = cljs.core.first.call(null,inst_25163);
var inst_25174 = cljs.core.nth.call(null,inst_25173,(0),null);
var inst_25175 = cljs.core.nth.call(null,inst_25173,(1),null);
var state_25262__$1 = (function (){var statearr_25265 = state_25262;
(statearr_25265[(8)] = inst_25174);

return statearr_25265;
})();
if(cljs.core.truth_(inst_25175)){
var statearr_25266_25352 = state_25262__$1;
(statearr_25266_25352[(1)] = (22));

} else {
var statearr_25267_25353 = state_25262__$1;
(statearr_25267_25353[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (27))){
var inst_25210 = (state_25262[(9)]);
var inst_25203 = (state_25262[(10)]);
var inst_25134 = (state_25262[(11)]);
var inst_25205 = (state_25262[(12)]);
var inst_25210__$1 = cljs.core._nth.call(null,inst_25203,inst_25205);
var inst_25211 = cljs.core.async.put_BANG_.call(null,inst_25210__$1,inst_25134,done);
var state_25262__$1 = (function (){var statearr_25268 = state_25262;
(statearr_25268[(9)] = inst_25210__$1);

return statearr_25268;
})();
if(cljs.core.truth_(inst_25211)){
var statearr_25269_25354 = state_25262__$1;
(statearr_25269_25354[(1)] = (30));

} else {
var statearr_25270_25355 = state_25262__$1;
(statearr_25270_25355[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (1))){
var state_25262__$1 = state_25262;
var statearr_25271_25356 = state_25262__$1;
(statearr_25271_25356[(2)] = null);

(statearr_25271_25356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (24))){
var inst_25163 = (state_25262[(7)]);
var inst_25180 = (state_25262[(2)]);
var inst_25181 = cljs.core.next.call(null,inst_25163);
var inst_25143 = inst_25181;
var inst_25144 = null;
var inst_25145 = (0);
var inst_25146 = (0);
var state_25262__$1 = (function (){var statearr_25272 = state_25262;
(statearr_25272[(13)] = inst_25143);

(statearr_25272[(14)] = inst_25146);

(statearr_25272[(15)] = inst_25145);

(statearr_25272[(16)] = inst_25144);

(statearr_25272[(17)] = inst_25180);

return statearr_25272;
})();
var statearr_25273_25357 = state_25262__$1;
(statearr_25273_25357[(2)] = null);

(statearr_25273_25357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (39))){
var state_25262__$1 = state_25262;
var statearr_25277_25358 = state_25262__$1;
(statearr_25277_25358[(2)] = null);

(statearr_25277_25358[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (4))){
var inst_25134 = (state_25262[(11)]);
var inst_25134__$1 = (state_25262[(2)]);
var inst_25135 = (inst_25134__$1 == null);
var state_25262__$1 = (function (){var statearr_25278 = state_25262;
(statearr_25278[(11)] = inst_25134__$1);

return statearr_25278;
})();
if(cljs.core.truth_(inst_25135)){
var statearr_25279_25359 = state_25262__$1;
(statearr_25279_25359[(1)] = (5));

} else {
var statearr_25280_25360 = state_25262__$1;
(statearr_25280_25360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (15))){
var inst_25143 = (state_25262[(13)]);
var inst_25146 = (state_25262[(14)]);
var inst_25145 = (state_25262[(15)]);
var inst_25144 = (state_25262[(16)]);
var inst_25159 = (state_25262[(2)]);
var inst_25160 = (inst_25146 + (1));
var tmp25274 = inst_25143;
var tmp25275 = inst_25145;
var tmp25276 = inst_25144;
var inst_25143__$1 = tmp25274;
var inst_25144__$1 = tmp25276;
var inst_25145__$1 = tmp25275;
var inst_25146__$1 = inst_25160;
var state_25262__$1 = (function (){var statearr_25281 = state_25262;
(statearr_25281[(18)] = inst_25159);

(statearr_25281[(13)] = inst_25143__$1);

(statearr_25281[(14)] = inst_25146__$1);

(statearr_25281[(15)] = inst_25145__$1);

(statearr_25281[(16)] = inst_25144__$1);

return statearr_25281;
})();
var statearr_25282_25361 = state_25262__$1;
(statearr_25282_25361[(2)] = null);

(statearr_25282_25361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (21))){
var inst_25184 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25286_25362 = state_25262__$1;
(statearr_25286_25362[(2)] = inst_25184);

(statearr_25286_25362[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (31))){
var inst_25210 = (state_25262[(9)]);
var inst_25214 = done.call(null,null);
var inst_25215 = cljs.core.async.untap_STAR_.call(null,m,inst_25210);
var state_25262__$1 = (function (){var statearr_25287 = state_25262;
(statearr_25287[(19)] = inst_25214);

return statearr_25287;
})();
var statearr_25288_25363 = state_25262__$1;
(statearr_25288_25363[(2)] = inst_25215);

(statearr_25288_25363[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (32))){
var inst_25203 = (state_25262[(10)]);
var inst_25204 = (state_25262[(20)]);
var inst_25202 = (state_25262[(21)]);
var inst_25205 = (state_25262[(12)]);
var inst_25217 = (state_25262[(2)]);
var inst_25218 = (inst_25205 + (1));
var tmp25283 = inst_25203;
var tmp25284 = inst_25204;
var tmp25285 = inst_25202;
var inst_25202__$1 = tmp25285;
var inst_25203__$1 = tmp25283;
var inst_25204__$1 = tmp25284;
var inst_25205__$1 = inst_25218;
var state_25262__$1 = (function (){var statearr_25289 = state_25262;
(statearr_25289[(10)] = inst_25203__$1);

(statearr_25289[(20)] = inst_25204__$1);

(statearr_25289[(22)] = inst_25217);

(statearr_25289[(21)] = inst_25202__$1);

(statearr_25289[(12)] = inst_25205__$1);

return statearr_25289;
})();
var statearr_25290_25364 = state_25262__$1;
(statearr_25290_25364[(2)] = null);

(statearr_25290_25364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (40))){
var inst_25230 = (state_25262[(23)]);
var inst_25234 = done.call(null,null);
var inst_25235 = cljs.core.async.untap_STAR_.call(null,m,inst_25230);
var state_25262__$1 = (function (){var statearr_25291 = state_25262;
(statearr_25291[(24)] = inst_25234);

return statearr_25291;
})();
var statearr_25292_25365 = state_25262__$1;
(statearr_25292_25365[(2)] = inst_25235);

(statearr_25292_25365[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (33))){
var inst_25221 = (state_25262[(25)]);
var inst_25223 = cljs.core.chunked_seq_QMARK_.call(null,inst_25221);
var state_25262__$1 = state_25262;
if(inst_25223){
var statearr_25293_25366 = state_25262__$1;
(statearr_25293_25366[(1)] = (36));

} else {
var statearr_25294_25367 = state_25262__$1;
(statearr_25294_25367[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (13))){
var inst_25153 = (state_25262[(26)]);
var inst_25156 = cljs.core.async.close_BANG_.call(null,inst_25153);
var state_25262__$1 = state_25262;
var statearr_25295_25368 = state_25262__$1;
(statearr_25295_25368[(2)] = inst_25156);

(statearr_25295_25368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (22))){
var inst_25174 = (state_25262[(8)]);
var inst_25177 = cljs.core.async.close_BANG_.call(null,inst_25174);
var state_25262__$1 = state_25262;
var statearr_25296_25369 = state_25262__$1;
(statearr_25296_25369[(2)] = inst_25177);

(statearr_25296_25369[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (36))){
var inst_25221 = (state_25262[(25)]);
var inst_25225 = cljs.core.chunk_first.call(null,inst_25221);
var inst_25226 = cljs.core.chunk_rest.call(null,inst_25221);
var inst_25227 = cljs.core.count.call(null,inst_25225);
var inst_25202 = inst_25226;
var inst_25203 = inst_25225;
var inst_25204 = inst_25227;
var inst_25205 = (0);
var state_25262__$1 = (function (){var statearr_25297 = state_25262;
(statearr_25297[(10)] = inst_25203);

(statearr_25297[(20)] = inst_25204);

(statearr_25297[(21)] = inst_25202);

(statearr_25297[(12)] = inst_25205);

return statearr_25297;
})();
var statearr_25298_25370 = state_25262__$1;
(statearr_25298_25370[(2)] = null);

(statearr_25298_25370[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (41))){
var inst_25221 = (state_25262[(25)]);
var inst_25237 = (state_25262[(2)]);
var inst_25238 = cljs.core.next.call(null,inst_25221);
var inst_25202 = inst_25238;
var inst_25203 = null;
var inst_25204 = (0);
var inst_25205 = (0);
var state_25262__$1 = (function (){var statearr_25299 = state_25262;
(statearr_25299[(10)] = inst_25203);

(statearr_25299[(20)] = inst_25204);

(statearr_25299[(27)] = inst_25237);

(statearr_25299[(21)] = inst_25202);

(statearr_25299[(12)] = inst_25205);

return statearr_25299;
})();
var statearr_25300_25371 = state_25262__$1;
(statearr_25300_25371[(2)] = null);

(statearr_25300_25371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (43))){
var state_25262__$1 = state_25262;
var statearr_25301_25372 = state_25262__$1;
(statearr_25301_25372[(2)] = null);

(statearr_25301_25372[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (29))){
var inst_25246 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25302_25373 = state_25262__$1;
(statearr_25302_25373[(2)] = inst_25246);

(statearr_25302_25373[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (44))){
var inst_25255 = (state_25262[(2)]);
var state_25262__$1 = (function (){var statearr_25303 = state_25262;
(statearr_25303[(28)] = inst_25255);

return statearr_25303;
})();
var statearr_25304_25374 = state_25262__$1;
(statearr_25304_25374[(2)] = null);

(statearr_25304_25374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (6))){
var inst_25194 = (state_25262[(29)]);
var inst_25193 = cljs.core.deref.call(null,cs);
var inst_25194__$1 = cljs.core.keys.call(null,inst_25193);
var inst_25195 = cljs.core.count.call(null,inst_25194__$1);
var inst_25196 = cljs.core.reset_BANG_.call(null,dctr,inst_25195);
var inst_25201 = cljs.core.seq.call(null,inst_25194__$1);
var inst_25202 = inst_25201;
var inst_25203 = null;
var inst_25204 = (0);
var inst_25205 = (0);
var state_25262__$1 = (function (){var statearr_25305 = state_25262;
(statearr_25305[(10)] = inst_25203);

(statearr_25305[(30)] = inst_25196);

(statearr_25305[(20)] = inst_25204);

(statearr_25305[(29)] = inst_25194__$1);

(statearr_25305[(21)] = inst_25202);

(statearr_25305[(12)] = inst_25205);

return statearr_25305;
})();
var statearr_25306_25375 = state_25262__$1;
(statearr_25306_25375[(2)] = null);

(statearr_25306_25375[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (28))){
var inst_25221 = (state_25262[(25)]);
var inst_25202 = (state_25262[(21)]);
var inst_25221__$1 = cljs.core.seq.call(null,inst_25202);
var state_25262__$1 = (function (){var statearr_25307 = state_25262;
(statearr_25307[(25)] = inst_25221__$1);

return statearr_25307;
})();
if(inst_25221__$1){
var statearr_25308_25376 = state_25262__$1;
(statearr_25308_25376[(1)] = (33));

} else {
var statearr_25309_25377 = state_25262__$1;
(statearr_25309_25377[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (25))){
var inst_25204 = (state_25262[(20)]);
var inst_25205 = (state_25262[(12)]);
var inst_25207 = (inst_25205 < inst_25204);
var inst_25208 = inst_25207;
var state_25262__$1 = state_25262;
if(cljs.core.truth_(inst_25208)){
var statearr_25310_25378 = state_25262__$1;
(statearr_25310_25378[(1)] = (27));

} else {
var statearr_25311_25379 = state_25262__$1;
(statearr_25311_25379[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (34))){
var state_25262__$1 = state_25262;
var statearr_25312_25380 = state_25262__$1;
(statearr_25312_25380[(2)] = null);

(statearr_25312_25380[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (17))){
var state_25262__$1 = state_25262;
var statearr_25313_25381 = state_25262__$1;
(statearr_25313_25381[(2)] = null);

(statearr_25313_25381[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (3))){
var inst_25260 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25262__$1,inst_25260);
} else {
if((state_val_25263 === (12))){
var inst_25189 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25314_25382 = state_25262__$1;
(statearr_25314_25382[(2)] = inst_25189);

(statearr_25314_25382[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (2))){
var state_25262__$1 = state_25262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25262__$1,(4),ch);
} else {
if((state_val_25263 === (23))){
var state_25262__$1 = state_25262;
var statearr_25315_25383 = state_25262__$1;
(statearr_25315_25383[(2)] = null);

(statearr_25315_25383[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (35))){
var inst_25244 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25316_25384 = state_25262__$1;
(statearr_25316_25384[(2)] = inst_25244);

(statearr_25316_25384[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (19))){
var inst_25163 = (state_25262[(7)]);
var inst_25167 = cljs.core.chunk_first.call(null,inst_25163);
var inst_25168 = cljs.core.chunk_rest.call(null,inst_25163);
var inst_25169 = cljs.core.count.call(null,inst_25167);
var inst_25143 = inst_25168;
var inst_25144 = inst_25167;
var inst_25145 = inst_25169;
var inst_25146 = (0);
var state_25262__$1 = (function (){var statearr_25317 = state_25262;
(statearr_25317[(13)] = inst_25143);

(statearr_25317[(14)] = inst_25146);

(statearr_25317[(15)] = inst_25145);

(statearr_25317[(16)] = inst_25144);

return statearr_25317;
})();
var statearr_25318_25385 = state_25262__$1;
(statearr_25318_25385[(2)] = null);

(statearr_25318_25385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (11))){
var inst_25143 = (state_25262[(13)]);
var inst_25163 = (state_25262[(7)]);
var inst_25163__$1 = cljs.core.seq.call(null,inst_25143);
var state_25262__$1 = (function (){var statearr_25319 = state_25262;
(statearr_25319[(7)] = inst_25163__$1);

return statearr_25319;
})();
if(inst_25163__$1){
var statearr_25320_25386 = state_25262__$1;
(statearr_25320_25386[(1)] = (16));

} else {
var statearr_25321_25387 = state_25262__$1;
(statearr_25321_25387[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (9))){
var inst_25191 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25322_25388 = state_25262__$1;
(statearr_25322_25388[(2)] = inst_25191);

(statearr_25322_25388[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (5))){
var inst_25141 = cljs.core.deref.call(null,cs);
var inst_25142 = cljs.core.seq.call(null,inst_25141);
var inst_25143 = inst_25142;
var inst_25144 = null;
var inst_25145 = (0);
var inst_25146 = (0);
var state_25262__$1 = (function (){var statearr_25323 = state_25262;
(statearr_25323[(13)] = inst_25143);

(statearr_25323[(14)] = inst_25146);

(statearr_25323[(15)] = inst_25145);

(statearr_25323[(16)] = inst_25144);

return statearr_25323;
})();
var statearr_25324_25389 = state_25262__$1;
(statearr_25324_25389[(2)] = null);

(statearr_25324_25389[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (14))){
var state_25262__$1 = state_25262;
var statearr_25325_25390 = state_25262__$1;
(statearr_25325_25390[(2)] = null);

(statearr_25325_25390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (45))){
var inst_25252 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25326_25391 = state_25262__$1;
(statearr_25326_25391[(2)] = inst_25252);

(statearr_25326_25391[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (26))){
var inst_25194 = (state_25262[(29)]);
var inst_25248 = (state_25262[(2)]);
var inst_25249 = cljs.core.seq.call(null,inst_25194);
var state_25262__$1 = (function (){var statearr_25327 = state_25262;
(statearr_25327[(31)] = inst_25248);

return statearr_25327;
})();
if(inst_25249){
var statearr_25328_25392 = state_25262__$1;
(statearr_25328_25392[(1)] = (42));

} else {
var statearr_25329_25393 = state_25262__$1;
(statearr_25329_25393[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (16))){
var inst_25163 = (state_25262[(7)]);
var inst_25165 = cljs.core.chunked_seq_QMARK_.call(null,inst_25163);
var state_25262__$1 = state_25262;
if(inst_25165){
var statearr_25330_25394 = state_25262__$1;
(statearr_25330_25394[(1)] = (19));

} else {
var statearr_25331_25395 = state_25262__$1;
(statearr_25331_25395[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (38))){
var inst_25241 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25332_25396 = state_25262__$1;
(statearr_25332_25396[(2)] = inst_25241);

(statearr_25332_25396[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (30))){
var state_25262__$1 = state_25262;
var statearr_25333_25397 = state_25262__$1;
(statearr_25333_25397[(2)] = null);

(statearr_25333_25397[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (10))){
var inst_25146 = (state_25262[(14)]);
var inst_25144 = (state_25262[(16)]);
var inst_25152 = cljs.core._nth.call(null,inst_25144,inst_25146);
var inst_25153 = cljs.core.nth.call(null,inst_25152,(0),null);
var inst_25154 = cljs.core.nth.call(null,inst_25152,(1),null);
var state_25262__$1 = (function (){var statearr_25334 = state_25262;
(statearr_25334[(26)] = inst_25153);

return statearr_25334;
})();
if(cljs.core.truth_(inst_25154)){
var statearr_25335_25398 = state_25262__$1;
(statearr_25335_25398[(1)] = (13));

} else {
var statearr_25336_25399 = state_25262__$1;
(statearr_25336_25399[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (18))){
var inst_25187 = (state_25262[(2)]);
var state_25262__$1 = state_25262;
var statearr_25337_25400 = state_25262__$1;
(statearr_25337_25400[(2)] = inst_25187);

(statearr_25337_25400[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (42))){
var state_25262__$1 = state_25262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25262__$1,(45),dchan);
} else {
if((state_val_25263 === (37))){
var inst_25221 = (state_25262[(25)]);
var inst_25134 = (state_25262[(11)]);
var inst_25230 = (state_25262[(23)]);
var inst_25230__$1 = cljs.core.first.call(null,inst_25221);
var inst_25231 = cljs.core.async.put_BANG_.call(null,inst_25230__$1,inst_25134,done);
var state_25262__$1 = (function (){var statearr_25338 = state_25262;
(statearr_25338[(23)] = inst_25230__$1);

return statearr_25338;
})();
if(cljs.core.truth_(inst_25231)){
var statearr_25339_25401 = state_25262__$1;
(statearr_25339_25401[(1)] = (39));

} else {
var statearr_25340_25402 = state_25262__$1;
(statearr_25340_25402[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25263 === (8))){
var inst_25146 = (state_25262[(14)]);
var inst_25145 = (state_25262[(15)]);
var inst_25148 = (inst_25146 < inst_25145);
var inst_25149 = inst_25148;
var state_25262__$1 = state_25262;
if(cljs.core.truth_(inst_25149)){
var statearr_25341_25403 = state_25262__$1;
(statearr_25341_25403[(1)] = (10));

} else {
var statearr_25342_25404 = state_25262__$1;
(statearr_25342_25404[(1)] = (11));

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
});})(c__10282__auto___25350,cs,m,dchan,dctr,done))
;
return ((function (switch__10226__auto__,c__10282__auto___25350,cs,m,dchan,dctr,done){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_25346 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25346[(0)] = state_machine__10227__auto__);

(statearr_25346[(1)] = (1));

return statearr_25346;
});
var state_machine__10227__auto____1 = (function (state_25262){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_25262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e25347){if((e25347 instanceof Object)){
var ex__10230__auto__ = e25347;
var statearr_25348_25405 = state_25262;
(statearr_25348_25405[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25406 = state_25262;
state_25262 = G__25406;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_25262){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_25262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___25350,cs,m,dchan,dctr,done))
})();
var state__10284__auto__ = (function (){var statearr_25349 = f__10283__auto__.call(null);
(statearr_25349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___25350);

return statearr_25349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___25350,cs,m,dchan,dctr,done))
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

cljs.core.async.Mix = (function (){var obj25408 = {};
return obj25408;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__7492__auto__ = m;
if(and__7492__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__7492__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__8148__auto__ = (((m == null))?null:m);
return (function (){var or__7504__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__7492__auto__ = m;
if(and__7492__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__7492__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__8148__auto__ = (((m == null))?null:m);
return (function (){var or__7504__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__7492__auto__ = m;
if(and__7492__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__7492__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__8148__auto__ = (((m == null))?null:m);
return (function (){var or__7504__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__7492__auto__ = m;
if(and__7492__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__7492__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__8148__auto__ = (((m == null))?null:m);
return (function (){var or__7504__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__7492__auto__ = m;
if(and__7492__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__7492__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__8148__auto__ = (((m == null))?null:m);
return (function (){var or__7504__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
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
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__25409){
var map__25414 = p__25409;
var map__25414__$1 = ((cljs.core.seq_QMARK_.call(null,map__25414))?cljs.core.apply.call(null,cljs.core.hash_map,map__25414):map__25414);
var opts = map__25414__$1;
var statearr_25415_25418 = state;
(statearr_25415_25418[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__25414,map__25414__$1,opts){
return (function (val){
var statearr_25416_25419 = state;
(statearr_25416_25419[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__25414,map__25414__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_25417_25420 = state;
(statearr_25417_25420[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__25409 = null;
if (arguments.length > 3) {
var G__25421__i = 0, G__25421__a = new Array(arguments.length -  3);
while (G__25421__i < G__25421__a.length) {G__25421__a[G__25421__i] = arguments[G__25421__i + 3]; ++G__25421__i;}
  p__25409 = new cljs.core.IndexedSeq(G__25421__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__25409);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__25422){
var state = cljs.core.first(arglist__25422);
arglist__25422 = cljs.core.next(arglist__25422);
var cont_block = cljs.core.first(arglist__25422);
arglist__25422 = cljs.core.next(arglist__25422);
var ports = cljs.core.first(arglist__25422);
var p__25409 = cljs.core.rest(arglist__25422);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__25409);
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
if(typeof cljs.core.async.t25542 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25542 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta25543){
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
this.meta25543 = meta25543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25542.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t25542.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25542.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25542.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25542.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25542.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t25542.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25542.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25542.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25544){
var self__ = this;
var _25544__$1 = this;
return self__.meta25543;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25544,meta25543__$1){
var self__ = this;
var _25544__$1 = this;
return (new cljs.core.async.t25542(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta25543__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t25542.cljs$lang$type = true;

cljs.core.async.t25542.cljs$lang$ctorStr = "cljs.core.async/t25542";

cljs.core.async.t25542.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cljs.core.async/t25542");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t25542 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25542(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25543){
return (new cljs.core.async.t25542(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta25543));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t25542(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10282__auto___25661 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___25661,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___25661,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_25614){
var state_val_25615 = (state_25614[(1)]);
if((state_val_25615 === (7))){
var inst_25558 = (state_25614[(7)]);
var inst_25563 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25558);
var state_25614__$1 = state_25614;
var statearr_25616_25662 = state_25614__$1;
(statearr_25616_25662[(2)] = inst_25563);

(statearr_25616_25662[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (20))){
var inst_25573 = (state_25614[(8)]);
var state_25614__$1 = state_25614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25614__$1,(23),out,inst_25573);
} else {
if((state_val_25615 === (1))){
var inst_25548 = (state_25614[(9)]);
var inst_25548__$1 = calc_state.call(null);
var inst_25549 = cljs.core.seq_QMARK_.call(null,inst_25548__$1);
var state_25614__$1 = (function (){var statearr_25617 = state_25614;
(statearr_25617[(9)] = inst_25548__$1);

return statearr_25617;
})();
if(inst_25549){
var statearr_25618_25663 = state_25614__$1;
(statearr_25618_25663[(1)] = (2));

} else {
var statearr_25619_25664 = state_25614__$1;
(statearr_25619_25664[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (24))){
var inst_25566 = (state_25614[(10)]);
var inst_25558 = inst_25566;
var state_25614__$1 = (function (){var statearr_25620 = state_25614;
(statearr_25620[(7)] = inst_25558);

return statearr_25620;
})();
var statearr_25621_25665 = state_25614__$1;
(statearr_25621_25665[(2)] = null);

(statearr_25621_25665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (4))){
var inst_25548 = (state_25614[(9)]);
var inst_25554 = (state_25614[(2)]);
var inst_25555 = cljs.core.get.call(null,inst_25554,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25556 = cljs.core.get.call(null,inst_25554,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25557 = cljs.core.get.call(null,inst_25554,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_25558 = inst_25548;
var state_25614__$1 = (function (){var statearr_25622 = state_25614;
(statearr_25622[(11)] = inst_25555);

(statearr_25622[(7)] = inst_25558);

(statearr_25622[(12)] = inst_25557);

(statearr_25622[(13)] = inst_25556);

return statearr_25622;
})();
var statearr_25623_25666 = state_25614__$1;
(statearr_25623_25666[(2)] = null);

(statearr_25623_25666[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (15))){
var state_25614__$1 = state_25614;
var statearr_25624_25667 = state_25614__$1;
(statearr_25624_25667[(2)] = null);

(statearr_25624_25667[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (21))){
var inst_25566 = (state_25614[(10)]);
var inst_25558 = inst_25566;
var state_25614__$1 = (function (){var statearr_25625 = state_25614;
(statearr_25625[(7)] = inst_25558);

return statearr_25625;
})();
var statearr_25626_25668 = state_25614__$1;
(statearr_25626_25668[(2)] = null);

(statearr_25626_25668[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (13))){
var inst_25610 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
var statearr_25627_25669 = state_25614__$1;
(statearr_25627_25669[(2)] = inst_25610);

(statearr_25627_25669[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (22))){
var inst_25608 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
var statearr_25628_25670 = state_25614__$1;
(statearr_25628_25670[(2)] = inst_25608);

(statearr_25628_25670[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (6))){
var inst_25612 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25614__$1,inst_25612);
} else {
if((state_val_25615 === (25))){
var state_25614__$1 = state_25614;
var statearr_25629_25671 = state_25614__$1;
(statearr_25629_25671[(2)] = null);

(statearr_25629_25671[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (17))){
var inst_25588 = (state_25614[(14)]);
var state_25614__$1 = state_25614;
var statearr_25630_25672 = state_25614__$1;
(statearr_25630_25672[(2)] = inst_25588);

(statearr_25630_25672[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (3))){
var inst_25548 = (state_25614[(9)]);
var state_25614__$1 = state_25614;
var statearr_25631_25673 = state_25614__$1;
(statearr_25631_25673[(2)] = inst_25548);

(statearr_25631_25673[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (12))){
var inst_25569 = (state_25614[(15)]);
var inst_25574 = (state_25614[(16)]);
var inst_25588 = (state_25614[(14)]);
var inst_25588__$1 = inst_25569.call(null,inst_25574);
var state_25614__$1 = (function (){var statearr_25632 = state_25614;
(statearr_25632[(14)] = inst_25588__$1);

return statearr_25632;
})();
if(cljs.core.truth_(inst_25588__$1)){
var statearr_25633_25674 = state_25614__$1;
(statearr_25633_25674[(1)] = (17));

} else {
var statearr_25634_25675 = state_25614__$1;
(statearr_25634_25675[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (2))){
var inst_25548 = (state_25614[(9)]);
var inst_25551 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25548);
var state_25614__$1 = state_25614;
var statearr_25635_25676 = state_25614__$1;
(statearr_25635_25676[(2)] = inst_25551);

(statearr_25635_25676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (23))){
var inst_25599 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
if(cljs.core.truth_(inst_25599)){
var statearr_25636_25677 = state_25614__$1;
(statearr_25636_25677[(1)] = (24));

} else {
var statearr_25637_25678 = state_25614__$1;
(statearr_25637_25678[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (19))){
var inst_25596 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
if(cljs.core.truth_(inst_25596)){
var statearr_25638_25679 = state_25614__$1;
(statearr_25638_25679[(1)] = (20));

} else {
var statearr_25639_25680 = state_25614__$1;
(statearr_25639_25680[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (11))){
var inst_25573 = (state_25614[(8)]);
var inst_25579 = (inst_25573 == null);
var state_25614__$1 = state_25614;
if(cljs.core.truth_(inst_25579)){
var statearr_25640_25681 = state_25614__$1;
(statearr_25640_25681[(1)] = (14));

} else {
var statearr_25641_25682 = state_25614__$1;
(statearr_25641_25682[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (9))){
var inst_25566 = (state_25614[(10)]);
var inst_25566__$1 = (state_25614[(2)]);
var inst_25567 = cljs.core.get.call(null,inst_25566__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_25568 = cljs.core.get.call(null,inst_25566__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_25569 = cljs.core.get.call(null,inst_25566__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_25614__$1 = (function (){var statearr_25642 = state_25614;
(statearr_25642[(15)] = inst_25569);

(statearr_25642[(17)] = inst_25568);

(statearr_25642[(10)] = inst_25566__$1);

return statearr_25642;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_25614__$1,(10),inst_25567);
} else {
if((state_val_25615 === (5))){
var inst_25558 = (state_25614[(7)]);
var inst_25561 = cljs.core.seq_QMARK_.call(null,inst_25558);
var state_25614__$1 = state_25614;
if(inst_25561){
var statearr_25643_25683 = state_25614__$1;
(statearr_25643_25683[(1)] = (7));

} else {
var statearr_25644_25684 = state_25614__$1;
(statearr_25644_25684[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (14))){
var inst_25574 = (state_25614[(16)]);
var inst_25581 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25574);
var state_25614__$1 = state_25614;
var statearr_25645_25685 = state_25614__$1;
(statearr_25645_25685[(2)] = inst_25581);

(statearr_25645_25685[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (26))){
var inst_25604 = (state_25614[(2)]);
var state_25614__$1 = state_25614;
var statearr_25646_25686 = state_25614__$1;
(statearr_25646_25686[(2)] = inst_25604);

(statearr_25646_25686[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (16))){
var inst_25584 = (state_25614[(2)]);
var inst_25585 = calc_state.call(null);
var inst_25558 = inst_25585;
var state_25614__$1 = (function (){var statearr_25647 = state_25614;
(statearr_25647[(18)] = inst_25584);

(statearr_25647[(7)] = inst_25558);

return statearr_25647;
})();
var statearr_25648_25687 = state_25614__$1;
(statearr_25648_25687[(2)] = null);

(statearr_25648_25687[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (10))){
var inst_25573 = (state_25614[(8)]);
var inst_25574 = (state_25614[(16)]);
var inst_25572 = (state_25614[(2)]);
var inst_25573__$1 = cljs.core.nth.call(null,inst_25572,(0),null);
var inst_25574__$1 = cljs.core.nth.call(null,inst_25572,(1),null);
var inst_25575 = (inst_25573__$1 == null);
var inst_25576 = cljs.core._EQ_.call(null,inst_25574__$1,change);
var inst_25577 = (inst_25575) || (inst_25576);
var state_25614__$1 = (function (){var statearr_25649 = state_25614;
(statearr_25649[(8)] = inst_25573__$1);

(statearr_25649[(16)] = inst_25574__$1);

return statearr_25649;
})();
if(cljs.core.truth_(inst_25577)){
var statearr_25650_25688 = state_25614__$1;
(statearr_25650_25688[(1)] = (11));

} else {
var statearr_25651_25689 = state_25614__$1;
(statearr_25651_25689[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (18))){
var inst_25569 = (state_25614[(15)]);
var inst_25574 = (state_25614[(16)]);
var inst_25568 = (state_25614[(17)]);
var inst_25591 = cljs.core.empty_QMARK_.call(null,inst_25569);
var inst_25592 = inst_25568.call(null,inst_25574);
var inst_25593 = cljs.core.not.call(null,inst_25592);
var inst_25594 = (inst_25591) && (inst_25593);
var state_25614__$1 = state_25614;
var statearr_25652_25690 = state_25614__$1;
(statearr_25652_25690[(2)] = inst_25594);

(statearr_25652_25690[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25615 === (8))){
var inst_25558 = (state_25614[(7)]);
var state_25614__$1 = state_25614;
var statearr_25653_25691 = state_25614__$1;
(statearr_25653_25691[(2)] = inst_25558);

(statearr_25653_25691[(1)] = (9));


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
});})(c__10282__auto___25661,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10226__auto__,c__10282__auto___25661,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_25657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25657[(0)] = state_machine__10227__auto__);

(statearr_25657[(1)] = (1));

return statearr_25657;
});
var state_machine__10227__auto____1 = (function (state_25614){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_25614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e25658){if((e25658 instanceof Object)){
var ex__10230__auto__ = e25658;
var statearr_25659_25692 = state_25614;
(statearr_25659_25692[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25693 = state_25614;
state_25614 = G__25693;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_25614){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_25614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___25661,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10284__auto__ = (function (){var statearr_25660 = f__10283__auto__.call(null);
(statearr_25660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___25661);

return statearr_25660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___25661,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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

cljs.core.async.Pub = (function (){var obj25695 = {};
return obj25695;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__7492__auto__ = p;
if(and__7492__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__7492__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__8148__auto__ = (((p == null))?null:p);
return (function (){var or__7504__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__7492__auto__ = p;
if(and__7492__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__7492__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__8148__auto__ = (((p == null))?null:p);
return (function (){var or__7504__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
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
if((function (){var and__7492__auto__ = p;
if(and__7492__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__7492__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__8148__auto__ = (((p == null))?null:p);
return (function (){var or__7504__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__7492__auto__ = p;
if(and__7492__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__7492__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__8148__auto__ = (((p == null))?null:p);
return (function (){var or__7504__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__8148__auto__)]);
if(or__7504__auto__){
return or__7504__auto__;
} else {
var or__7504__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__7504__auto____$1){
return or__7504__auto____$1;
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
var or__7504__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__7504__auto__)){
return or__7504__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7504__auto__,mults){
return (function (p1__25696_SHARP_){
if(cljs.core.truth_(p1__25696_SHARP_.call(null,topic))){
return p1__25696_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25696_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7504__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t25819 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25819 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25820){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25820 = meta25820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25819.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t25819.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t25819.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t25819.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t25819.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t25819.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25819.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t25819.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25821){
var self__ = this;
var _25821__$1 = this;
return self__.meta25820;
});})(mults,ensure_mult))
;

cljs.core.async.t25819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25821,meta25820__$1){
var self__ = this;
var _25821__$1 = this;
return (new cljs.core.async.t25819(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25820__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t25819.cljs$lang$type = true;

cljs.core.async.t25819.cljs$lang$ctorStr = "cljs.core.async/t25819";

cljs.core.async.t25819.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cljs.core.async/t25819");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t25819 = ((function (mults,ensure_mult){
return (function __GT_t25819(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25820){
return (new cljs.core.async.t25819(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25820));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t25819(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10282__auto___25941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___25941,mults,ensure_mult,p){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___25941,mults,ensure_mult,p){
return (function (state_25893){
var state_val_25894 = (state_25893[(1)]);
if((state_val_25894 === (7))){
var inst_25889 = (state_25893[(2)]);
var state_25893__$1 = state_25893;
var statearr_25895_25942 = state_25893__$1;
(statearr_25895_25942[(2)] = inst_25889);

(statearr_25895_25942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (20))){
var state_25893__$1 = state_25893;
var statearr_25896_25943 = state_25893__$1;
(statearr_25896_25943[(2)] = null);

(statearr_25896_25943[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (1))){
var state_25893__$1 = state_25893;
var statearr_25897_25944 = state_25893__$1;
(statearr_25897_25944[(2)] = null);

(statearr_25897_25944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (24))){
var inst_25872 = (state_25893[(7)]);
var inst_25881 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25872);
var state_25893__$1 = state_25893;
var statearr_25898_25945 = state_25893__$1;
(statearr_25898_25945[(2)] = inst_25881);

(statearr_25898_25945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (4))){
var inst_25824 = (state_25893[(8)]);
var inst_25824__$1 = (state_25893[(2)]);
var inst_25825 = (inst_25824__$1 == null);
var state_25893__$1 = (function (){var statearr_25899 = state_25893;
(statearr_25899[(8)] = inst_25824__$1);

return statearr_25899;
})();
if(cljs.core.truth_(inst_25825)){
var statearr_25900_25946 = state_25893__$1;
(statearr_25900_25946[(1)] = (5));

} else {
var statearr_25901_25947 = state_25893__$1;
(statearr_25901_25947[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (15))){
var inst_25866 = (state_25893[(2)]);
var state_25893__$1 = state_25893;
var statearr_25902_25948 = state_25893__$1;
(statearr_25902_25948[(2)] = inst_25866);

(statearr_25902_25948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (21))){
var inst_25886 = (state_25893[(2)]);
var state_25893__$1 = (function (){var statearr_25903 = state_25893;
(statearr_25903[(9)] = inst_25886);

return statearr_25903;
})();
var statearr_25904_25949 = state_25893__$1;
(statearr_25904_25949[(2)] = null);

(statearr_25904_25949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (13))){
var inst_25848 = (state_25893[(10)]);
var inst_25850 = cljs.core.chunked_seq_QMARK_.call(null,inst_25848);
var state_25893__$1 = state_25893;
if(inst_25850){
var statearr_25905_25950 = state_25893__$1;
(statearr_25905_25950[(1)] = (16));

} else {
var statearr_25906_25951 = state_25893__$1;
(statearr_25906_25951[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (22))){
var inst_25878 = (state_25893[(2)]);
var state_25893__$1 = state_25893;
if(cljs.core.truth_(inst_25878)){
var statearr_25907_25952 = state_25893__$1;
(statearr_25907_25952[(1)] = (23));

} else {
var statearr_25908_25953 = state_25893__$1;
(statearr_25908_25953[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (6))){
var inst_25874 = (state_25893[(11)]);
var inst_25872 = (state_25893[(7)]);
var inst_25824 = (state_25893[(8)]);
var inst_25872__$1 = topic_fn.call(null,inst_25824);
var inst_25873 = cljs.core.deref.call(null,mults);
var inst_25874__$1 = cljs.core.get.call(null,inst_25873,inst_25872__$1);
var state_25893__$1 = (function (){var statearr_25909 = state_25893;
(statearr_25909[(11)] = inst_25874__$1);

(statearr_25909[(7)] = inst_25872__$1);

return statearr_25909;
})();
if(cljs.core.truth_(inst_25874__$1)){
var statearr_25910_25954 = state_25893__$1;
(statearr_25910_25954[(1)] = (19));

} else {
var statearr_25911_25955 = state_25893__$1;
(statearr_25911_25955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (25))){
var inst_25883 = (state_25893[(2)]);
var state_25893__$1 = state_25893;
var statearr_25912_25956 = state_25893__$1;
(statearr_25912_25956[(2)] = inst_25883);

(statearr_25912_25956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (17))){
var inst_25848 = (state_25893[(10)]);
var inst_25857 = cljs.core.first.call(null,inst_25848);
var inst_25858 = cljs.core.async.muxch_STAR_.call(null,inst_25857);
var inst_25859 = cljs.core.async.close_BANG_.call(null,inst_25858);
var inst_25860 = cljs.core.next.call(null,inst_25848);
var inst_25834 = inst_25860;
var inst_25835 = null;
var inst_25836 = (0);
var inst_25837 = (0);
var state_25893__$1 = (function (){var statearr_25913 = state_25893;
(statearr_25913[(12)] = inst_25859);

(statearr_25913[(13)] = inst_25836);

(statearr_25913[(14)] = inst_25835);

(statearr_25913[(15)] = inst_25834);

(statearr_25913[(16)] = inst_25837);

return statearr_25913;
})();
var statearr_25914_25957 = state_25893__$1;
(statearr_25914_25957[(2)] = null);

(statearr_25914_25957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (3))){
var inst_25891 = (state_25893[(2)]);
var state_25893__$1 = state_25893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25893__$1,inst_25891);
} else {
if((state_val_25894 === (12))){
var inst_25868 = (state_25893[(2)]);
var state_25893__$1 = state_25893;
var statearr_25915_25958 = state_25893__$1;
(statearr_25915_25958[(2)] = inst_25868);

(statearr_25915_25958[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (2))){
var state_25893__$1 = state_25893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25893__$1,(4),ch);
} else {
if((state_val_25894 === (23))){
var state_25893__$1 = state_25893;
var statearr_25916_25959 = state_25893__$1;
(statearr_25916_25959[(2)] = null);

(statearr_25916_25959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (19))){
var inst_25874 = (state_25893[(11)]);
var inst_25824 = (state_25893[(8)]);
var inst_25876 = cljs.core.async.muxch_STAR_.call(null,inst_25874);
var state_25893__$1 = state_25893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25893__$1,(22),inst_25876,inst_25824);
} else {
if((state_val_25894 === (11))){
var inst_25848 = (state_25893[(10)]);
var inst_25834 = (state_25893[(15)]);
var inst_25848__$1 = cljs.core.seq.call(null,inst_25834);
var state_25893__$1 = (function (){var statearr_25917 = state_25893;
(statearr_25917[(10)] = inst_25848__$1);

return statearr_25917;
})();
if(inst_25848__$1){
var statearr_25918_25960 = state_25893__$1;
(statearr_25918_25960[(1)] = (13));

} else {
var statearr_25919_25961 = state_25893__$1;
(statearr_25919_25961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (9))){
var inst_25870 = (state_25893[(2)]);
var state_25893__$1 = state_25893;
var statearr_25920_25962 = state_25893__$1;
(statearr_25920_25962[(2)] = inst_25870);

(statearr_25920_25962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (5))){
var inst_25831 = cljs.core.deref.call(null,mults);
var inst_25832 = cljs.core.vals.call(null,inst_25831);
var inst_25833 = cljs.core.seq.call(null,inst_25832);
var inst_25834 = inst_25833;
var inst_25835 = null;
var inst_25836 = (0);
var inst_25837 = (0);
var state_25893__$1 = (function (){var statearr_25921 = state_25893;
(statearr_25921[(13)] = inst_25836);

(statearr_25921[(14)] = inst_25835);

(statearr_25921[(15)] = inst_25834);

(statearr_25921[(16)] = inst_25837);

return statearr_25921;
})();
var statearr_25922_25963 = state_25893__$1;
(statearr_25922_25963[(2)] = null);

(statearr_25922_25963[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (14))){
var state_25893__$1 = state_25893;
var statearr_25926_25964 = state_25893__$1;
(statearr_25926_25964[(2)] = null);

(statearr_25926_25964[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (16))){
var inst_25848 = (state_25893[(10)]);
var inst_25852 = cljs.core.chunk_first.call(null,inst_25848);
var inst_25853 = cljs.core.chunk_rest.call(null,inst_25848);
var inst_25854 = cljs.core.count.call(null,inst_25852);
var inst_25834 = inst_25853;
var inst_25835 = inst_25852;
var inst_25836 = inst_25854;
var inst_25837 = (0);
var state_25893__$1 = (function (){var statearr_25927 = state_25893;
(statearr_25927[(13)] = inst_25836);

(statearr_25927[(14)] = inst_25835);

(statearr_25927[(15)] = inst_25834);

(statearr_25927[(16)] = inst_25837);

return statearr_25927;
})();
var statearr_25928_25965 = state_25893__$1;
(statearr_25928_25965[(2)] = null);

(statearr_25928_25965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (10))){
var inst_25836 = (state_25893[(13)]);
var inst_25835 = (state_25893[(14)]);
var inst_25834 = (state_25893[(15)]);
var inst_25837 = (state_25893[(16)]);
var inst_25842 = cljs.core._nth.call(null,inst_25835,inst_25837);
var inst_25843 = cljs.core.async.muxch_STAR_.call(null,inst_25842);
var inst_25844 = cljs.core.async.close_BANG_.call(null,inst_25843);
var inst_25845 = (inst_25837 + (1));
var tmp25923 = inst_25836;
var tmp25924 = inst_25835;
var tmp25925 = inst_25834;
var inst_25834__$1 = tmp25925;
var inst_25835__$1 = tmp25924;
var inst_25836__$1 = tmp25923;
var inst_25837__$1 = inst_25845;
var state_25893__$1 = (function (){var statearr_25929 = state_25893;
(statearr_25929[(13)] = inst_25836__$1);

(statearr_25929[(17)] = inst_25844);

(statearr_25929[(14)] = inst_25835__$1);

(statearr_25929[(15)] = inst_25834__$1);

(statearr_25929[(16)] = inst_25837__$1);

return statearr_25929;
})();
var statearr_25930_25966 = state_25893__$1;
(statearr_25930_25966[(2)] = null);

(statearr_25930_25966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (18))){
var inst_25863 = (state_25893[(2)]);
var state_25893__$1 = state_25893;
var statearr_25931_25967 = state_25893__$1;
(statearr_25931_25967[(2)] = inst_25863);

(statearr_25931_25967[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25894 === (8))){
var inst_25836 = (state_25893[(13)]);
var inst_25837 = (state_25893[(16)]);
var inst_25839 = (inst_25837 < inst_25836);
var inst_25840 = inst_25839;
var state_25893__$1 = state_25893;
if(cljs.core.truth_(inst_25840)){
var statearr_25932_25968 = state_25893__$1;
(statearr_25932_25968[(1)] = (10));

} else {
var statearr_25933_25969 = state_25893__$1;
(statearr_25933_25969[(1)] = (11));

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
});})(c__10282__auto___25941,mults,ensure_mult,p))
;
return ((function (switch__10226__auto__,c__10282__auto___25941,mults,ensure_mult,p){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_25937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25937[(0)] = state_machine__10227__auto__);

(statearr_25937[(1)] = (1));

return statearr_25937;
});
var state_machine__10227__auto____1 = (function (state_25893){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_25893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e25938){if((e25938 instanceof Object)){
var ex__10230__auto__ = e25938;
var statearr_25939_25970 = state_25893;
(statearr_25939_25970[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25971 = state_25893;
state_25893 = G__25971;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_25893){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_25893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___25941,mults,ensure_mult,p))
})();
var state__10284__auto__ = (function (){var statearr_25940 = f__10283__auto__.call(null);
(statearr_25940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___25941);

return statearr_25940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___25941,mults,ensure_mult,p))
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
var c__10282__auto___26108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___26108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___26108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26078){
var state_val_26079 = (state_26078[(1)]);
if((state_val_26079 === (7))){
var state_26078__$1 = state_26078;
var statearr_26080_26109 = state_26078__$1;
(statearr_26080_26109[(2)] = null);

(statearr_26080_26109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (1))){
var state_26078__$1 = state_26078;
var statearr_26081_26110 = state_26078__$1;
(statearr_26081_26110[(2)] = null);

(statearr_26081_26110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (4))){
var inst_26042 = (state_26078[(7)]);
var inst_26044 = (inst_26042 < cnt);
var state_26078__$1 = state_26078;
if(cljs.core.truth_(inst_26044)){
var statearr_26082_26111 = state_26078__$1;
(statearr_26082_26111[(1)] = (6));

} else {
var statearr_26083_26112 = state_26078__$1;
(statearr_26083_26112[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (15))){
var inst_26074 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26084_26113 = state_26078__$1;
(statearr_26084_26113[(2)] = inst_26074);

(statearr_26084_26113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (13))){
var inst_26067 = cljs.core.async.close_BANG_.call(null,out);
var state_26078__$1 = state_26078;
var statearr_26085_26114 = state_26078__$1;
(statearr_26085_26114[(2)] = inst_26067);

(statearr_26085_26114[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (6))){
var state_26078__$1 = state_26078;
var statearr_26086_26115 = state_26078__$1;
(statearr_26086_26115[(2)] = null);

(statearr_26086_26115[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (3))){
var inst_26076 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26078__$1,inst_26076);
} else {
if((state_val_26079 === (12))){
var inst_26064 = (state_26078[(8)]);
var inst_26064__$1 = (state_26078[(2)]);
var inst_26065 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26064__$1);
var state_26078__$1 = (function (){var statearr_26087 = state_26078;
(statearr_26087[(8)] = inst_26064__$1);

return statearr_26087;
})();
if(cljs.core.truth_(inst_26065)){
var statearr_26088_26116 = state_26078__$1;
(statearr_26088_26116[(1)] = (13));

} else {
var statearr_26089_26117 = state_26078__$1;
(statearr_26089_26117[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (2))){
var inst_26041 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26042 = (0);
var state_26078__$1 = (function (){var statearr_26090 = state_26078;
(statearr_26090[(9)] = inst_26041);

(statearr_26090[(7)] = inst_26042);

return statearr_26090;
})();
var statearr_26091_26118 = state_26078__$1;
(statearr_26091_26118[(2)] = null);

(statearr_26091_26118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (11))){
var inst_26042 = (state_26078[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26078,(10),Object,null,(9));
var inst_26051 = chs__$1.call(null,inst_26042);
var inst_26052 = done.call(null,inst_26042);
var inst_26053 = cljs.core.async.take_BANG_.call(null,inst_26051,inst_26052);
var state_26078__$1 = state_26078;
var statearr_26092_26119 = state_26078__$1;
(statearr_26092_26119[(2)] = inst_26053);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26078__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (9))){
var inst_26042 = (state_26078[(7)]);
var inst_26055 = (state_26078[(2)]);
var inst_26056 = (inst_26042 + (1));
var inst_26042__$1 = inst_26056;
var state_26078__$1 = (function (){var statearr_26093 = state_26078;
(statearr_26093[(7)] = inst_26042__$1);

(statearr_26093[(10)] = inst_26055);

return statearr_26093;
})();
var statearr_26094_26120 = state_26078__$1;
(statearr_26094_26120[(2)] = null);

(statearr_26094_26120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (5))){
var inst_26062 = (state_26078[(2)]);
var state_26078__$1 = (function (){var statearr_26095 = state_26078;
(statearr_26095[(11)] = inst_26062);

return statearr_26095;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26078__$1,(12),dchan);
} else {
if((state_val_26079 === (14))){
var inst_26064 = (state_26078[(8)]);
var inst_26069 = cljs.core.apply.call(null,f,inst_26064);
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26078__$1,(16),out,inst_26069);
} else {
if((state_val_26079 === (16))){
var inst_26071 = (state_26078[(2)]);
var state_26078__$1 = (function (){var statearr_26096 = state_26078;
(statearr_26096[(12)] = inst_26071);

return statearr_26096;
})();
var statearr_26097_26121 = state_26078__$1;
(statearr_26097_26121[(2)] = null);

(statearr_26097_26121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (10))){
var inst_26046 = (state_26078[(2)]);
var inst_26047 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26078__$1 = (function (){var statearr_26098 = state_26078;
(statearr_26098[(13)] = inst_26046);

return statearr_26098;
})();
var statearr_26099_26122 = state_26078__$1;
(statearr_26099_26122[(2)] = inst_26047);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26078__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (8))){
var inst_26060 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26100_26123 = state_26078__$1;
(statearr_26100_26123[(2)] = inst_26060);

(statearr_26100_26123[(1)] = (5));


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
});})(c__10282__auto___26108,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10226__auto__,c__10282__auto___26108,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_26104 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26104[(0)] = state_machine__10227__auto__);

(statearr_26104[(1)] = (1));

return statearr_26104;
});
var state_machine__10227__auto____1 = (function (state_26078){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_26078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e26105){if((e26105 instanceof Object)){
var ex__10230__auto__ = e26105;
var statearr_26106_26124 = state_26078;
(statearr_26106_26124[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26125 = state_26078;
state_26078 = G__26125;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_26078){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_26078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___26108,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10284__auto__ = (function (){var statearr_26107 = f__10283__auto__.call(null);
(statearr_26107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___26108);

return statearr_26107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___26108,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var c__10282__auto___26233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___26233,out){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___26233,out){
return (function (state_26209){
var state_val_26210 = (state_26209[(1)]);
if((state_val_26210 === (7))){
var inst_26189 = (state_26209[(7)]);
var inst_26188 = (state_26209[(8)]);
var inst_26188__$1 = (state_26209[(2)]);
var inst_26189__$1 = cljs.core.nth.call(null,inst_26188__$1,(0),null);
var inst_26190 = cljs.core.nth.call(null,inst_26188__$1,(1),null);
var inst_26191 = (inst_26189__$1 == null);
var state_26209__$1 = (function (){var statearr_26211 = state_26209;
(statearr_26211[(9)] = inst_26190);

(statearr_26211[(7)] = inst_26189__$1);

(statearr_26211[(8)] = inst_26188__$1);

return statearr_26211;
})();
if(cljs.core.truth_(inst_26191)){
var statearr_26212_26234 = state_26209__$1;
(statearr_26212_26234[(1)] = (8));

} else {
var statearr_26213_26235 = state_26209__$1;
(statearr_26213_26235[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (1))){
var inst_26180 = cljs.core.vec.call(null,chs);
var inst_26181 = inst_26180;
var state_26209__$1 = (function (){var statearr_26214 = state_26209;
(statearr_26214[(10)] = inst_26181);

return statearr_26214;
})();
var statearr_26215_26236 = state_26209__$1;
(statearr_26215_26236[(2)] = null);

(statearr_26215_26236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (4))){
var inst_26181 = (state_26209[(10)]);
var state_26209__$1 = state_26209;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26209__$1,(7),inst_26181);
} else {
if((state_val_26210 === (6))){
var inst_26205 = (state_26209[(2)]);
var state_26209__$1 = state_26209;
var statearr_26216_26237 = state_26209__$1;
(statearr_26216_26237[(2)] = inst_26205);

(statearr_26216_26237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (3))){
var inst_26207 = (state_26209[(2)]);
var state_26209__$1 = state_26209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26209__$1,inst_26207);
} else {
if((state_val_26210 === (2))){
var inst_26181 = (state_26209[(10)]);
var inst_26183 = cljs.core.count.call(null,inst_26181);
var inst_26184 = (inst_26183 > (0));
var state_26209__$1 = state_26209;
if(cljs.core.truth_(inst_26184)){
var statearr_26218_26238 = state_26209__$1;
(statearr_26218_26238[(1)] = (4));

} else {
var statearr_26219_26239 = state_26209__$1;
(statearr_26219_26239[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (11))){
var inst_26181 = (state_26209[(10)]);
var inst_26198 = (state_26209[(2)]);
var tmp26217 = inst_26181;
var inst_26181__$1 = tmp26217;
var state_26209__$1 = (function (){var statearr_26220 = state_26209;
(statearr_26220[(11)] = inst_26198);

(statearr_26220[(10)] = inst_26181__$1);

return statearr_26220;
})();
var statearr_26221_26240 = state_26209__$1;
(statearr_26221_26240[(2)] = null);

(statearr_26221_26240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (9))){
var inst_26189 = (state_26209[(7)]);
var state_26209__$1 = state_26209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26209__$1,(11),out,inst_26189);
} else {
if((state_val_26210 === (5))){
var inst_26203 = cljs.core.async.close_BANG_.call(null,out);
var state_26209__$1 = state_26209;
var statearr_26222_26241 = state_26209__$1;
(statearr_26222_26241[(2)] = inst_26203);

(statearr_26222_26241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (10))){
var inst_26201 = (state_26209[(2)]);
var state_26209__$1 = state_26209;
var statearr_26223_26242 = state_26209__$1;
(statearr_26223_26242[(2)] = inst_26201);

(statearr_26223_26242[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26210 === (8))){
var inst_26190 = (state_26209[(9)]);
var inst_26189 = (state_26209[(7)]);
var inst_26188 = (state_26209[(8)]);
var inst_26181 = (state_26209[(10)]);
var inst_26193 = (function (){var c = inst_26190;
var v = inst_26189;
var vec__26186 = inst_26188;
var cs = inst_26181;
return ((function (c,v,vec__26186,cs,inst_26190,inst_26189,inst_26188,inst_26181,state_val_26210,c__10282__auto___26233,out){
return (function (p1__26126_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26126_SHARP_);
});
;})(c,v,vec__26186,cs,inst_26190,inst_26189,inst_26188,inst_26181,state_val_26210,c__10282__auto___26233,out))
})();
var inst_26194 = cljs.core.filterv.call(null,inst_26193,inst_26181);
var inst_26181__$1 = inst_26194;
var state_26209__$1 = (function (){var statearr_26224 = state_26209;
(statearr_26224[(10)] = inst_26181__$1);

return statearr_26224;
})();
var statearr_26225_26243 = state_26209__$1;
(statearr_26225_26243[(2)] = null);

(statearr_26225_26243[(1)] = (2));


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
});})(c__10282__auto___26233,out))
;
return ((function (switch__10226__auto__,c__10282__auto___26233,out){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_26229 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26229[(0)] = state_machine__10227__auto__);

(statearr_26229[(1)] = (1));

return statearr_26229;
});
var state_machine__10227__auto____1 = (function (state_26209){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_26209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e26230){if((e26230 instanceof Object)){
var ex__10230__auto__ = e26230;
var statearr_26231_26244 = state_26209;
(statearr_26231_26244[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26245 = state_26209;
state_26209 = G__26245;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_26209){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_26209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___26233,out))
})();
var state__10284__auto__ = (function (){var statearr_26232 = f__10283__auto__.call(null);
(statearr_26232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___26233);

return statearr_26232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___26233,out))
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
var c__10282__auto___26338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___26338,out){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___26338,out){
return (function (state_26315){
var state_val_26316 = (state_26315[(1)]);
if((state_val_26316 === (7))){
var inst_26297 = (state_26315[(7)]);
var inst_26297__$1 = (state_26315[(2)]);
var inst_26298 = (inst_26297__$1 == null);
var inst_26299 = cljs.core.not.call(null,inst_26298);
var state_26315__$1 = (function (){var statearr_26317 = state_26315;
(statearr_26317[(7)] = inst_26297__$1);

return statearr_26317;
})();
if(inst_26299){
var statearr_26318_26339 = state_26315__$1;
(statearr_26318_26339[(1)] = (8));

} else {
var statearr_26319_26340 = state_26315__$1;
(statearr_26319_26340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (1))){
var inst_26292 = (0);
var state_26315__$1 = (function (){var statearr_26320 = state_26315;
(statearr_26320[(8)] = inst_26292);

return statearr_26320;
})();
var statearr_26321_26341 = state_26315__$1;
(statearr_26321_26341[(2)] = null);

(statearr_26321_26341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (4))){
var state_26315__$1 = state_26315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26315__$1,(7),ch);
} else {
if((state_val_26316 === (6))){
var inst_26310 = (state_26315[(2)]);
var state_26315__$1 = state_26315;
var statearr_26322_26342 = state_26315__$1;
(statearr_26322_26342[(2)] = inst_26310);

(statearr_26322_26342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (3))){
var inst_26312 = (state_26315[(2)]);
var inst_26313 = cljs.core.async.close_BANG_.call(null,out);
var state_26315__$1 = (function (){var statearr_26323 = state_26315;
(statearr_26323[(9)] = inst_26312);

return statearr_26323;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26315__$1,inst_26313);
} else {
if((state_val_26316 === (2))){
var inst_26292 = (state_26315[(8)]);
var inst_26294 = (inst_26292 < n);
var state_26315__$1 = state_26315;
if(cljs.core.truth_(inst_26294)){
var statearr_26324_26343 = state_26315__$1;
(statearr_26324_26343[(1)] = (4));

} else {
var statearr_26325_26344 = state_26315__$1;
(statearr_26325_26344[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (11))){
var inst_26292 = (state_26315[(8)]);
var inst_26302 = (state_26315[(2)]);
var inst_26303 = (inst_26292 + (1));
var inst_26292__$1 = inst_26303;
var state_26315__$1 = (function (){var statearr_26326 = state_26315;
(statearr_26326[(8)] = inst_26292__$1);

(statearr_26326[(10)] = inst_26302);

return statearr_26326;
})();
var statearr_26327_26345 = state_26315__$1;
(statearr_26327_26345[(2)] = null);

(statearr_26327_26345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (9))){
var state_26315__$1 = state_26315;
var statearr_26328_26346 = state_26315__$1;
(statearr_26328_26346[(2)] = null);

(statearr_26328_26346[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (5))){
var state_26315__$1 = state_26315;
var statearr_26329_26347 = state_26315__$1;
(statearr_26329_26347[(2)] = null);

(statearr_26329_26347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (10))){
var inst_26307 = (state_26315[(2)]);
var state_26315__$1 = state_26315;
var statearr_26330_26348 = state_26315__$1;
(statearr_26330_26348[(2)] = inst_26307);

(statearr_26330_26348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26316 === (8))){
var inst_26297 = (state_26315[(7)]);
var state_26315__$1 = state_26315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26315__$1,(11),out,inst_26297);
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
});})(c__10282__auto___26338,out))
;
return ((function (switch__10226__auto__,c__10282__auto___26338,out){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_26334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26334[(0)] = state_machine__10227__auto__);

(statearr_26334[(1)] = (1));

return statearr_26334;
});
var state_machine__10227__auto____1 = (function (state_26315){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_26315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e26335){if((e26335 instanceof Object)){
var ex__10230__auto__ = e26335;
var statearr_26336_26349 = state_26315;
(statearr_26336_26349[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26350 = state_26315;
state_26315 = G__26350;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_26315){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_26315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___26338,out))
})();
var state__10284__auto__ = (function (){var statearr_26337 = f__10283__auto__.call(null);
(statearr_26337[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___26338);

return statearr_26337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___26338,out))
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
if(typeof cljs.core.async.t26358 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26358 = (function (ch,f,map_LT_,meta26359){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26359 = meta26359;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26358.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26358.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t26358.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26358.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t26361 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26361 = (function (fn1,_,meta26359,map_LT_,f,ch,meta26362){
this.fn1 = fn1;
this._ = _;
this.meta26359 = meta26359;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta26362 = meta26362;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26361.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t26361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t26361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__26351_SHARP_){
return f1.call(null,(((p1__26351_SHARP_ == null))?null:self__.f.call(null,p1__26351_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t26361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_26363){
var self__ = this;
var _26363__$1 = this;
return self__.meta26362;
});})(___$1))
;

cljs.core.async.t26361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_26363,meta26362__$1){
var self__ = this;
var _26363__$1 = this;
return (new cljs.core.async.t26361(self__.fn1,self__._,self__.meta26359,self__.map_LT_,self__.f,self__.ch,meta26362__$1));
});})(___$1))
;

cljs.core.async.t26361.cljs$lang$type = true;

cljs.core.async.t26361.cljs$lang$ctorStr = "cljs.core.async/t26361";

cljs.core.async.t26361.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cljs.core.async/t26361");
});})(___$1))
;

cljs.core.async.__GT_t26361 = ((function (___$1){
return (function __GT_t26361(fn1__$1,___$2,meta26359__$1,map_LT___$1,f__$1,ch__$1,meta26362){
return (new cljs.core.async.t26361(fn1__$1,___$2,meta26359__$1,map_LT___$1,f__$1,ch__$1,meta26362));
});})(___$1))
;

}

return (new cljs.core.async.t26361(fn1,___$1,self__.meta26359,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7492__auto__ = ret;
if(cljs.core.truth_(and__7492__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__7492__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t26358.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26358.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26358.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26360){
var self__ = this;
var _26360__$1 = this;
return self__.meta26359;
});

cljs.core.async.t26358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26360,meta26359__$1){
var self__ = this;
var _26360__$1 = this;
return (new cljs.core.async.t26358(self__.ch,self__.f,self__.map_LT_,meta26359__$1));
});

cljs.core.async.t26358.cljs$lang$type = true;

cljs.core.async.t26358.cljs$lang$ctorStr = "cljs.core.async/t26358";

cljs.core.async.t26358.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cljs.core.async/t26358");
});

cljs.core.async.__GT_t26358 = (function __GT_t26358(ch__$1,f__$1,map_LT___$1,meta26359){
return (new cljs.core.async.t26358(ch__$1,f__$1,map_LT___$1,meta26359));
});

}

return (new cljs.core.async.t26358(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t26367 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26367 = (function (ch,f,map_GT_,meta26368){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26368 = meta26368;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26367.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26367.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t26367.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26367.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26367.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26367.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26369){
var self__ = this;
var _26369__$1 = this;
return self__.meta26368;
});

cljs.core.async.t26367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26369,meta26368__$1){
var self__ = this;
var _26369__$1 = this;
return (new cljs.core.async.t26367(self__.ch,self__.f,self__.map_GT_,meta26368__$1));
});

cljs.core.async.t26367.cljs$lang$type = true;

cljs.core.async.t26367.cljs$lang$ctorStr = "cljs.core.async/t26367";

cljs.core.async.t26367.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cljs.core.async/t26367");
});

cljs.core.async.__GT_t26367 = (function __GT_t26367(ch__$1,f__$1,map_GT___$1,meta26368){
return (new cljs.core.async.t26367(ch__$1,f__$1,map_GT___$1,meta26368));
});

}

return (new cljs.core.async.t26367(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t26373 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26373 = (function (ch,p,filter_GT_,meta26374){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26374 = meta26374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26373.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t26373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t26373.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t26373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t26373.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t26373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t26373.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t26373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26375){
var self__ = this;
var _26375__$1 = this;
return self__.meta26374;
});

cljs.core.async.t26373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26375,meta26374__$1){
var self__ = this;
var _26375__$1 = this;
return (new cljs.core.async.t26373(self__.ch,self__.p,self__.filter_GT_,meta26374__$1));
});

cljs.core.async.t26373.cljs$lang$type = true;

cljs.core.async.t26373.cljs$lang$ctorStr = "cljs.core.async/t26373";

cljs.core.async.t26373.cljs$lang$ctorPrWriter = (function (this__8091__auto__,writer__8092__auto__,opt__8093__auto__){
return cljs.core._write.call(null,writer__8092__auto__,"cljs.core.async/t26373");
});

cljs.core.async.__GT_t26373 = (function __GT_t26373(ch__$1,p__$1,filter_GT___$1,meta26374){
return (new cljs.core.async.t26373(ch__$1,p__$1,filter_GT___$1,meta26374));
});

}

return (new cljs.core.async.t26373(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
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
var c__10282__auto___26458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___26458,out){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___26458,out){
return (function (state_26437){
var state_val_26438 = (state_26437[(1)]);
if((state_val_26438 === (7))){
var inst_26433 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26439_26459 = state_26437__$1;
(statearr_26439_26459[(2)] = inst_26433);

(statearr_26439_26459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (1))){
var state_26437__$1 = state_26437;
var statearr_26440_26460 = state_26437__$1;
(statearr_26440_26460[(2)] = null);

(statearr_26440_26460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (4))){
var inst_26419 = (state_26437[(7)]);
var inst_26419__$1 = (state_26437[(2)]);
var inst_26420 = (inst_26419__$1 == null);
var state_26437__$1 = (function (){var statearr_26441 = state_26437;
(statearr_26441[(7)] = inst_26419__$1);

return statearr_26441;
})();
if(cljs.core.truth_(inst_26420)){
var statearr_26442_26461 = state_26437__$1;
(statearr_26442_26461[(1)] = (5));

} else {
var statearr_26443_26462 = state_26437__$1;
(statearr_26443_26462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (6))){
var inst_26419 = (state_26437[(7)]);
var inst_26424 = p.call(null,inst_26419);
var state_26437__$1 = state_26437;
if(cljs.core.truth_(inst_26424)){
var statearr_26444_26463 = state_26437__$1;
(statearr_26444_26463[(1)] = (8));

} else {
var statearr_26445_26464 = state_26437__$1;
(statearr_26445_26464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (3))){
var inst_26435 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26437__$1,inst_26435);
} else {
if((state_val_26438 === (2))){
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26437__$1,(4),ch);
} else {
if((state_val_26438 === (11))){
var inst_26427 = (state_26437[(2)]);
var state_26437__$1 = state_26437;
var statearr_26446_26465 = state_26437__$1;
(statearr_26446_26465[(2)] = inst_26427);

(statearr_26446_26465[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (9))){
var state_26437__$1 = state_26437;
var statearr_26447_26466 = state_26437__$1;
(statearr_26447_26466[(2)] = null);

(statearr_26447_26466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (5))){
var inst_26422 = cljs.core.async.close_BANG_.call(null,out);
var state_26437__$1 = state_26437;
var statearr_26448_26467 = state_26437__$1;
(statearr_26448_26467[(2)] = inst_26422);

(statearr_26448_26467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (10))){
var inst_26430 = (state_26437[(2)]);
var state_26437__$1 = (function (){var statearr_26449 = state_26437;
(statearr_26449[(8)] = inst_26430);

return statearr_26449;
})();
var statearr_26450_26468 = state_26437__$1;
(statearr_26450_26468[(2)] = null);

(statearr_26450_26468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26438 === (8))){
var inst_26419 = (state_26437[(7)]);
var state_26437__$1 = state_26437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26437__$1,(11),out,inst_26419);
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
});})(c__10282__auto___26458,out))
;
return ((function (switch__10226__auto__,c__10282__auto___26458,out){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_26454 = [null,null,null,null,null,null,null,null,null];
(statearr_26454[(0)] = state_machine__10227__auto__);

(statearr_26454[(1)] = (1));

return statearr_26454;
});
var state_machine__10227__auto____1 = (function (state_26437){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_26437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e26455){if((e26455 instanceof Object)){
var ex__10230__auto__ = e26455;
var statearr_26456_26469 = state_26437;
(statearr_26456_26469[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26470 = state_26437;
state_26437 = G__26470;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_26437){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_26437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___26458,out))
})();
var state__10284__auto__ = (function (){var statearr_26457 = f__10283__auto__.call(null);
(statearr_26457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___26458);

return statearr_26457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___26458,out))
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
var c__10282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto__){
return (function (state_26636){
var state_val_26637 = (state_26636[(1)]);
if((state_val_26637 === (7))){
var inst_26632 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26638_26679 = state_26636__$1;
(statearr_26638_26679[(2)] = inst_26632);

(statearr_26638_26679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (20))){
var inst_26602 = (state_26636[(7)]);
var inst_26613 = (state_26636[(2)]);
var inst_26614 = cljs.core.next.call(null,inst_26602);
var inst_26588 = inst_26614;
var inst_26589 = null;
var inst_26590 = (0);
var inst_26591 = (0);
var state_26636__$1 = (function (){var statearr_26639 = state_26636;
(statearr_26639[(8)] = inst_26589);

(statearr_26639[(9)] = inst_26588);

(statearr_26639[(10)] = inst_26590);

(statearr_26639[(11)] = inst_26613);

(statearr_26639[(12)] = inst_26591);

return statearr_26639;
})();
var statearr_26640_26680 = state_26636__$1;
(statearr_26640_26680[(2)] = null);

(statearr_26640_26680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (1))){
var state_26636__$1 = state_26636;
var statearr_26641_26681 = state_26636__$1;
(statearr_26641_26681[(2)] = null);

(statearr_26641_26681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (4))){
var inst_26577 = (state_26636[(13)]);
var inst_26577__$1 = (state_26636[(2)]);
var inst_26578 = (inst_26577__$1 == null);
var state_26636__$1 = (function (){var statearr_26642 = state_26636;
(statearr_26642[(13)] = inst_26577__$1);

return statearr_26642;
})();
if(cljs.core.truth_(inst_26578)){
var statearr_26643_26682 = state_26636__$1;
(statearr_26643_26682[(1)] = (5));

} else {
var statearr_26644_26683 = state_26636__$1;
(statearr_26644_26683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (15))){
var state_26636__$1 = state_26636;
var statearr_26648_26684 = state_26636__$1;
(statearr_26648_26684[(2)] = null);

(statearr_26648_26684[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (21))){
var state_26636__$1 = state_26636;
var statearr_26649_26685 = state_26636__$1;
(statearr_26649_26685[(2)] = null);

(statearr_26649_26685[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (13))){
var inst_26589 = (state_26636[(8)]);
var inst_26588 = (state_26636[(9)]);
var inst_26590 = (state_26636[(10)]);
var inst_26591 = (state_26636[(12)]);
var inst_26598 = (state_26636[(2)]);
var inst_26599 = (inst_26591 + (1));
var tmp26645 = inst_26589;
var tmp26646 = inst_26588;
var tmp26647 = inst_26590;
var inst_26588__$1 = tmp26646;
var inst_26589__$1 = tmp26645;
var inst_26590__$1 = tmp26647;
var inst_26591__$1 = inst_26599;
var state_26636__$1 = (function (){var statearr_26650 = state_26636;
(statearr_26650[(8)] = inst_26589__$1);

(statearr_26650[(9)] = inst_26588__$1);

(statearr_26650[(10)] = inst_26590__$1);

(statearr_26650[(14)] = inst_26598);

(statearr_26650[(12)] = inst_26591__$1);

return statearr_26650;
})();
var statearr_26651_26686 = state_26636__$1;
(statearr_26651_26686[(2)] = null);

(statearr_26651_26686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (22))){
var state_26636__$1 = state_26636;
var statearr_26652_26687 = state_26636__$1;
(statearr_26652_26687[(2)] = null);

(statearr_26652_26687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (6))){
var inst_26577 = (state_26636[(13)]);
var inst_26586 = f.call(null,inst_26577);
var inst_26587 = cljs.core.seq.call(null,inst_26586);
var inst_26588 = inst_26587;
var inst_26589 = null;
var inst_26590 = (0);
var inst_26591 = (0);
var state_26636__$1 = (function (){var statearr_26653 = state_26636;
(statearr_26653[(8)] = inst_26589);

(statearr_26653[(9)] = inst_26588);

(statearr_26653[(10)] = inst_26590);

(statearr_26653[(12)] = inst_26591);

return statearr_26653;
})();
var statearr_26654_26688 = state_26636__$1;
(statearr_26654_26688[(2)] = null);

(statearr_26654_26688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (17))){
var inst_26602 = (state_26636[(7)]);
var inst_26606 = cljs.core.chunk_first.call(null,inst_26602);
var inst_26607 = cljs.core.chunk_rest.call(null,inst_26602);
var inst_26608 = cljs.core.count.call(null,inst_26606);
var inst_26588 = inst_26607;
var inst_26589 = inst_26606;
var inst_26590 = inst_26608;
var inst_26591 = (0);
var state_26636__$1 = (function (){var statearr_26655 = state_26636;
(statearr_26655[(8)] = inst_26589);

(statearr_26655[(9)] = inst_26588);

(statearr_26655[(10)] = inst_26590);

(statearr_26655[(12)] = inst_26591);

return statearr_26655;
})();
var statearr_26656_26689 = state_26636__$1;
(statearr_26656_26689[(2)] = null);

(statearr_26656_26689[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (3))){
var inst_26634 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26636__$1,inst_26634);
} else {
if((state_val_26637 === (12))){
var inst_26622 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26657_26690 = state_26636__$1;
(statearr_26657_26690[(2)] = inst_26622);

(statearr_26657_26690[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (2))){
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26636__$1,(4),in$);
} else {
if((state_val_26637 === (23))){
var inst_26630 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26658_26691 = state_26636__$1;
(statearr_26658_26691[(2)] = inst_26630);

(statearr_26658_26691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (19))){
var inst_26617 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26659_26692 = state_26636__$1;
(statearr_26659_26692[(2)] = inst_26617);

(statearr_26659_26692[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (11))){
var inst_26588 = (state_26636[(9)]);
var inst_26602 = (state_26636[(7)]);
var inst_26602__$1 = cljs.core.seq.call(null,inst_26588);
var state_26636__$1 = (function (){var statearr_26660 = state_26636;
(statearr_26660[(7)] = inst_26602__$1);

return statearr_26660;
})();
if(inst_26602__$1){
var statearr_26661_26693 = state_26636__$1;
(statearr_26661_26693[(1)] = (14));

} else {
var statearr_26662_26694 = state_26636__$1;
(statearr_26662_26694[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (9))){
var inst_26624 = (state_26636[(2)]);
var inst_26625 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_26636__$1 = (function (){var statearr_26663 = state_26636;
(statearr_26663[(15)] = inst_26624);

return statearr_26663;
})();
if(cljs.core.truth_(inst_26625)){
var statearr_26664_26695 = state_26636__$1;
(statearr_26664_26695[(1)] = (21));

} else {
var statearr_26665_26696 = state_26636__$1;
(statearr_26665_26696[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (5))){
var inst_26580 = cljs.core.async.close_BANG_.call(null,out);
var state_26636__$1 = state_26636;
var statearr_26666_26697 = state_26636__$1;
(statearr_26666_26697[(2)] = inst_26580);

(statearr_26666_26697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (14))){
var inst_26602 = (state_26636[(7)]);
var inst_26604 = cljs.core.chunked_seq_QMARK_.call(null,inst_26602);
var state_26636__$1 = state_26636;
if(inst_26604){
var statearr_26667_26698 = state_26636__$1;
(statearr_26667_26698[(1)] = (17));

} else {
var statearr_26668_26699 = state_26636__$1;
(statearr_26668_26699[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (16))){
var inst_26620 = (state_26636[(2)]);
var state_26636__$1 = state_26636;
var statearr_26669_26700 = state_26636__$1;
(statearr_26669_26700[(2)] = inst_26620);

(statearr_26669_26700[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26637 === (10))){
var inst_26589 = (state_26636[(8)]);
var inst_26591 = (state_26636[(12)]);
var inst_26596 = cljs.core._nth.call(null,inst_26589,inst_26591);
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26636__$1,(13),out,inst_26596);
} else {
if((state_val_26637 === (18))){
var inst_26602 = (state_26636[(7)]);
var inst_26611 = cljs.core.first.call(null,inst_26602);
var state_26636__$1 = state_26636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26636__$1,(20),out,inst_26611);
} else {
if((state_val_26637 === (8))){
var inst_26590 = (state_26636[(10)]);
var inst_26591 = (state_26636[(12)]);
var inst_26593 = (inst_26591 < inst_26590);
var inst_26594 = inst_26593;
var state_26636__$1 = state_26636;
if(cljs.core.truth_(inst_26594)){
var statearr_26670_26701 = state_26636__$1;
(statearr_26670_26701[(1)] = (10));

} else {
var statearr_26671_26702 = state_26636__$1;
(statearr_26671_26702[(1)] = (11));

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
});})(c__10282__auto__))
;
return ((function (switch__10226__auto__,c__10282__auto__){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_26675 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26675[(0)] = state_machine__10227__auto__);

(statearr_26675[(1)] = (1));

return statearr_26675;
});
var state_machine__10227__auto____1 = (function (state_26636){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_26636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e26676){if((e26676 instanceof Object)){
var ex__10230__auto__ = e26676;
var statearr_26677_26703 = state_26636;
(statearr_26677_26703[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26704 = state_26636;
state_26636 = G__26704;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_26636){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_26636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto__))
})();
var state__10284__auto__ = (function (){var statearr_26678 = f__10283__auto__.call(null);
(statearr_26678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);

return statearr_26678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__))
);

return c__10282__auto__;
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
var c__10282__auto___26801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___26801,out){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___26801,out){
return (function (state_26776){
var state_val_26777 = (state_26776[(1)]);
if((state_val_26777 === (7))){
var inst_26771 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26778_26802 = state_26776__$1;
(statearr_26778_26802[(2)] = inst_26771);

(statearr_26778_26802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (1))){
var inst_26753 = null;
var state_26776__$1 = (function (){var statearr_26779 = state_26776;
(statearr_26779[(7)] = inst_26753);

return statearr_26779;
})();
var statearr_26780_26803 = state_26776__$1;
(statearr_26780_26803[(2)] = null);

(statearr_26780_26803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (4))){
var inst_26756 = (state_26776[(8)]);
var inst_26756__$1 = (state_26776[(2)]);
var inst_26757 = (inst_26756__$1 == null);
var inst_26758 = cljs.core.not.call(null,inst_26757);
var state_26776__$1 = (function (){var statearr_26781 = state_26776;
(statearr_26781[(8)] = inst_26756__$1);

return statearr_26781;
})();
if(inst_26758){
var statearr_26782_26804 = state_26776__$1;
(statearr_26782_26804[(1)] = (5));

} else {
var statearr_26783_26805 = state_26776__$1;
(statearr_26783_26805[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (6))){
var state_26776__$1 = state_26776;
var statearr_26784_26806 = state_26776__$1;
(statearr_26784_26806[(2)] = null);

(statearr_26784_26806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (3))){
var inst_26773 = (state_26776[(2)]);
var inst_26774 = cljs.core.async.close_BANG_.call(null,out);
var state_26776__$1 = (function (){var statearr_26785 = state_26776;
(statearr_26785[(9)] = inst_26773);

return statearr_26785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26776__$1,inst_26774);
} else {
if((state_val_26777 === (2))){
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26776__$1,(4),ch);
} else {
if((state_val_26777 === (11))){
var inst_26756 = (state_26776[(8)]);
var inst_26765 = (state_26776[(2)]);
var inst_26753 = inst_26756;
var state_26776__$1 = (function (){var statearr_26786 = state_26776;
(statearr_26786[(7)] = inst_26753);

(statearr_26786[(10)] = inst_26765);

return statearr_26786;
})();
var statearr_26787_26807 = state_26776__$1;
(statearr_26787_26807[(2)] = null);

(statearr_26787_26807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (9))){
var inst_26756 = (state_26776[(8)]);
var state_26776__$1 = state_26776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26776__$1,(11),out,inst_26756);
} else {
if((state_val_26777 === (5))){
var inst_26753 = (state_26776[(7)]);
var inst_26756 = (state_26776[(8)]);
var inst_26760 = cljs.core._EQ_.call(null,inst_26756,inst_26753);
var state_26776__$1 = state_26776;
if(inst_26760){
var statearr_26789_26808 = state_26776__$1;
(statearr_26789_26808[(1)] = (8));

} else {
var statearr_26790_26809 = state_26776__$1;
(statearr_26790_26809[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (10))){
var inst_26768 = (state_26776[(2)]);
var state_26776__$1 = state_26776;
var statearr_26791_26810 = state_26776__$1;
(statearr_26791_26810[(2)] = inst_26768);

(statearr_26791_26810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26777 === (8))){
var inst_26753 = (state_26776[(7)]);
var tmp26788 = inst_26753;
var inst_26753__$1 = tmp26788;
var state_26776__$1 = (function (){var statearr_26792 = state_26776;
(statearr_26792[(7)] = inst_26753__$1);

return statearr_26792;
})();
var statearr_26793_26811 = state_26776__$1;
(statearr_26793_26811[(2)] = null);

(statearr_26793_26811[(1)] = (2));


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
});})(c__10282__auto___26801,out))
;
return ((function (switch__10226__auto__,c__10282__auto___26801,out){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_26797 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26797[(0)] = state_machine__10227__auto__);

(statearr_26797[(1)] = (1));

return statearr_26797;
});
var state_machine__10227__auto____1 = (function (state_26776){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_26776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e26798){if((e26798 instanceof Object)){
var ex__10230__auto__ = e26798;
var statearr_26799_26812 = state_26776;
(statearr_26799_26812[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26813 = state_26776;
state_26776 = G__26813;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_26776){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_26776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___26801,out))
})();
var state__10284__auto__ = (function (){var statearr_26800 = f__10283__auto__.call(null);
(statearr_26800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___26801);

return statearr_26800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___26801,out))
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
var c__10282__auto___26948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___26948,out){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___26948,out){
return (function (state_26918){
var state_val_26919 = (state_26918[(1)]);
if((state_val_26919 === (7))){
var inst_26914 = (state_26918[(2)]);
var state_26918__$1 = state_26918;
var statearr_26920_26949 = state_26918__$1;
(statearr_26920_26949[(2)] = inst_26914);

(statearr_26920_26949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (1))){
var inst_26881 = (new Array(n));
var inst_26882 = inst_26881;
var inst_26883 = (0);
var state_26918__$1 = (function (){var statearr_26921 = state_26918;
(statearr_26921[(7)] = inst_26883);

(statearr_26921[(8)] = inst_26882);

return statearr_26921;
})();
var statearr_26922_26950 = state_26918__$1;
(statearr_26922_26950[(2)] = null);

(statearr_26922_26950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (4))){
var inst_26886 = (state_26918[(9)]);
var inst_26886__$1 = (state_26918[(2)]);
var inst_26887 = (inst_26886__$1 == null);
var inst_26888 = cljs.core.not.call(null,inst_26887);
var state_26918__$1 = (function (){var statearr_26923 = state_26918;
(statearr_26923[(9)] = inst_26886__$1);

return statearr_26923;
})();
if(inst_26888){
var statearr_26924_26951 = state_26918__$1;
(statearr_26924_26951[(1)] = (5));

} else {
var statearr_26925_26952 = state_26918__$1;
(statearr_26925_26952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (15))){
var inst_26908 = (state_26918[(2)]);
var state_26918__$1 = state_26918;
var statearr_26926_26953 = state_26918__$1;
(statearr_26926_26953[(2)] = inst_26908);

(statearr_26926_26953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (13))){
var state_26918__$1 = state_26918;
var statearr_26927_26954 = state_26918__$1;
(statearr_26927_26954[(2)] = null);

(statearr_26927_26954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (6))){
var inst_26883 = (state_26918[(7)]);
var inst_26904 = (inst_26883 > (0));
var state_26918__$1 = state_26918;
if(cljs.core.truth_(inst_26904)){
var statearr_26928_26955 = state_26918__$1;
(statearr_26928_26955[(1)] = (12));

} else {
var statearr_26929_26956 = state_26918__$1;
(statearr_26929_26956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (3))){
var inst_26916 = (state_26918[(2)]);
var state_26918__$1 = state_26918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26918__$1,inst_26916);
} else {
if((state_val_26919 === (12))){
var inst_26882 = (state_26918[(8)]);
var inst_26906 = cljs.core.vec.call(null,inst_26882);
var state_26918__$1 = state_26918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26918__$1,(15),out,inst_26906);
} else {
if((state_val_26919 === (2))){
var state_26918__$1 = state_26918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26918__$1,(4),ch);
} else {
if((state_val_26919 === (11))){
var inst_26898 = (state_26918[(2)]);
var inst_26899 = (new Array(n));
var inst_26882 = inst_26899;
var inst_26883 = (0);
var state_26918__$1 = (function (){var statearr_26930 = state_26918;
(statearr_26930[(7)] = inst_26883);

(statearr_26930[(10)] = inst_26898);

(statearr_26930[(8)] = inst_26882);

return statearr_26930;
})();
var statearr_26931_26957 = state_26918__$1;
(statearr_26931_26957[(2)] = null);

(statearr_26931_26957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (9))){
var inst_26882 = (state_26918[(8)]);
var inst_26896 = cljs.core.vec.call(null,inst_26882);
var state_26918__$1 = state_26918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26918__$1,(11),out,inst_26896);
} else {
if((state_val_26919 === (5))){
var inst_26883 = (state_26918[(7)]);
var inst_26886 = (state_26918[(9)]);
var inst_26891 = (state_26918[(11)]);
var inst_26882 = (state_26918[(8)]);
var inst_26890 = (inst_26882[inst_26883] = inst_26886);
var inst_26891__$1 = (inst_26883 + (1));
var inst_26892 = (inst_26891__$1 < n);
var state_26918__$1 = (function (){var statearr_26932 = state_26918;
(statearr_26932[(12)] = inst_26890);

(statearr_26932[(11)] = inst_26891__$1);

return statearr_26932;
})();
if(cljs.core.truth_(inst_26892)){
var statearr_26933_26958 = state_26918__$1;
(statearr_26933_26958[(1)] = (8));

} else {
var statearr_26934_26959 = state_26918__$1;
(statearr_26934_26959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (14))){
var inst_26911 = (state_26918[(2)]);
var inst_26912 = cljs.core.async.close_BANG_.call(null,out);
var state_26918__$1 = (function (){var statearr_26936 = state_26918;
(statearr_26936[(13)] = inst_26911);

return statearr_26936;
})();
var statearr_26937_26960 = state_26918__$1;
(statearr_26937_26960[(2)] = inst_26912);

(statearr_26937_26960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (10))){
var inst_26902 = (state_26918[(2)]);
var state_26918__$1 = state_26918;
var statearr_26938_26961 = state_26918__$1;
(statearr_26938_26961[(2)] = inst_26902);

(statearr_26938_26961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26919 === (8))){
var inst_26891 = (state_26918[(11)]);
var inst_26882 = (state_26918[(8)]);
var tmp26935 = inst_26882;
var inst_26882__$1 = tmp26935;
var inst_26883 = inst_26891;
var state_26918__$1 = (function (){var statearr_26939 = state_26918;
(statearr_26939[(7)] = inst_26883);

(statearr_26939[(8)] = inst_26882__$1);

return statearr_26939;
})();
var statearr_26940_26962 = state_26918__$1;
(statearr_26940_26962[(2)] = null);

(statearr_26940_26962[(1)] = (2));


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
});})(c__10282__auto___26948,out))
;
return ((function (switch__10226__auto__,c__10282__auto___26948,out){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_26944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26944[(0)] = state_machine__10227__auto__);

(statearr_26944[(1)] = (1));

return statearr_26944;
});
var state_machine__10227__auto____1 = (function (state_26918){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_26918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e26945){if((e26945 instanceof Object)){
var ex__10230__auto__ = e26945;
var statearr_26946_26963 = state_26918;
(statearr_26946_26963[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26964 = state_26918;
state_26918 = G__26964;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_26918){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_26918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___26948,out))
})();
var state__10284__auto__ = (function (){var statearr_26947 = f__10283__auto__.call(null);
(statearr_26947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___26948);

return statearr_26947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___26948,out))
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
var c__10282__auto___27107 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto___27107,out){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto___27107,out){
return (function (state_27077){
var state_val_27078 = (state_27077[(1)]);
if((state_val_27078 === (7))){
var inst_27073 = (state_27077[(2)]);
var state_27077__$1 = state_27077;
var statearr_27079_27108 = state_27077__$1;
(statearr_27079_27108[(2)] = inst_27073);

(statearr_27079_27108[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27078 === (1))){
var inst_27036 = [];
var inst_27037 = inst_27036;
var inst_27038 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27077__$1 = (function (){var statearr_27080 = state_27077;
(statearr_27080[(7)] = inst_27037);

(statearr_27080[(8)] = inst_27038);

return statearr_27080;
})();
var statearr_27081_27109 = state_27077__$1;
(statearr_27081_27109[(2)] = null);

(statearr_27081_27109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27078 === (4))){
var inst_27041 = (state_27077[(9)]);
var inst_27041__$1 = (state_27077[(2)]);
var inst_27042 = (inst_27041__$1 == null);
var inst_27043 = cljs.core.not.call(null,inst_27042);
var state_27077__$1 = (function (){var statearr_27082 = state_27077;
(statearr_27082[(9)] = inst_27041__$1);

return statearr_27082;
})();
if(inst_27043){
var statearr_27083_27110 = state_27077__$1;
(statearr_27083_27110[(1)] = (5));

} else {
var statearr_27084_27111 = state_27077__$1;
(statearr_27084_27111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27078 === (15))){
var inst_27067 = (state_27077[(2)]);
var state_27077__$1 = state_27077;
var statearr_27085_27112 = state_27077__$1;
(statearr_27085_27112[(2)] = inst_27067);

(statearr_27085_27112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27078 === (13))){
var state_27077__$1 = state_27077;
var statearr_27086_27113 = state_27077__$1;
(statearr_27086_27113[(2)] = null);

(statearr_27086_27113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27078 === (6))){
var inst_27037 = (state_27077[(7)]);
var inst_27062 = inst_27037.length;
var inst_27063 = (inst_27062 > (0));
var state_27077__$1 = state_27077;
if(cljs.core.truth_(inst_27063)){
var statearr_27087_27114 = state_27077__$1;
(statearr_27087_27114[(1)] = (12));

} else {
var statearr_27088_27115 = state_27077__$1;
(statearr_27088_27115[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27078 === (3))){
var inst_27075 = (state_27077[(2)]);
var state_27077__$1 = state_27077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27077__$1,inst_27075);
} else {
if((state_val_27078 === (12))){
var inst_27037 = (state_27077[(7)]);
var inst_27065 = cljs.core.vec.call(null,inst_27037);
var state_27077__$1 = state_27077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27077__$1,(15),out,inst_27065);
} else {
if((state_val_27078 === (2))){
var state_27077__$1 = state_27077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27077__$1,(4),ch);
} else {
if((state_val_27078 === (11))){
var inst_27045 = (state_27077[(10)]);
var inst_27041 = (state_27077[(9)]);
var inst_27055 = (state_27077[(2)]);
var inst_27056 = [];
var inst_27057 = inst_27056.push(inst_27041);
var inst_27037 = inst_27056;
var inst_27038 = inst_27045;
var state_27077__$1 = (function (){var statearr_27089 = state_27077;
(statearr_27089[(11)] = inst_27055);

(statearr_27089[(7)] = inst_27037);

(statearr_27089[(8)] = inst_27038);

(statearr_27089[(12)] = inst_27057);

return statearr_27089;
})();
var statearr_27090_27116 = state_27077__$1;
(statearr_27090_27116[(2)] = null);

(statearr_27090_27116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27078 === (9))){
var inst_27037 = (state_27077[(7)]);
var inst_27053 = cljs.core.vec.call(null,inst_27037);
var state_27077__$1 = state_27077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27077__$1,(11),out,inst_27053);
} else {
if((state_val_27078 === (5))){
var inst_27038 = (state_27077[(8)]);
var inst_27045 = (state_27077[(10)]);
var inst_27041 = (state_27077[(9)]);
var inst_27045__$1 = f.call(null,inst_27041);
var inst_27046 = cljs.core._EQ_.call(null,inst_27045__$1,inst_27038);
var inst_27047 = cljs.core.keyword_identical_QMARK_.call(null,inst_27038,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27048 = (inst_27046) || (inst_27047);
var state_27077__$1 = (function (){var statearr_27091 = state_27077;
(statearr_27091[(10)] = inst_27045__$1);

return statearr_27091;
})();
if(cljs.core.truth_(inst_27048)){
var statearr_27092_27117 = state_27077__$1;
(statearr_27092_27117[(1)] = (8));

} else {
var statearr_27093_27118 = state_27077__$1;
(statearr_27093_27118[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27078 === (14))){
var inst_27070 = (state_27077[(2)]);
var inst_27071 = cljs.core.async.close_BANG_.call(null,out);
var state_27077__$1 = (function (){var statearr_27095 = state_27077;
(statearr_27095[(13)] = inst_27070);

return statearr_27095;
})();
var statearr_27096_27119 = state_27077__$1;
(statearr_27096_27119[(2)] = inst_27071);

(statearr_27096_27119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27078 === (10))){
var inst_27060 = (state_27077[(2)]);
var state_27077__$1 = state_27077;
var statearr_27097_27120 = state_27077__$1;
(statearr_27097_27120[(2)] = inst_27060);

(statearr_27097_27120[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27078 === (8))){
var inst_27037 = (state_27077[(7)]);
var inst_27045 = (state_27077[(10)]);
var inst_27041 = (state_27077[(9)]);
var inst_27050 = inst_27037.push(inst_27041);
var tmp27094 = inst_27037;
var inst_27037__$1 = tmp27094;
var inst_27038 = inst_27045;
var state_27077__$1 = (function (){var statearr_27098 = state_27077;
(statearr_27098[(14)] = inst_27050);

(statearr_27098[(7)] = inst_27037__$1);

(statearr_27098[(8)] = inst_27038);

return statearr_27098;
})();
var statearr_27099_27121 = state_27077__$1;
(statearr_27099_27121[(2)] = null);

(statearr_27099_27121[(1)] = (2));


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
});})(c__10282__auto___27107,out))
;
return ((function (switch__10226__auto__,c__10282__auto___27107,out){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_27103 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27103[(0)] = state_machine__10227__auto__);

(statearr_27103[(1)] = (1));

return statearr_27103;
});
var state_machine__10227__auto____1 = (function (state_27077){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_27077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e27104){if((e27104 instanceof Object)){
var ex__10230__auto__ = e27104;
var statearr_27105_27122 = state_27077;
(statearr_27105_27122[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27123 = state_27077;
state_27077 = G__27123;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_27077){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_27077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto___27107,out))
})();
var state__10284__auto__ = (function (){var statearr_27106 = f__10283__auto__.call(null);
(statearr_27106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto___27107);

return statearr_27106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto___27107,out))
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
