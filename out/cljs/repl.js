// Compiled by ClojureScript 0.0-2674 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11264_11268 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11265_11269 = null;
var count__11266_11270 = (0);
var i__11267_11271 = (0);
while(true){
if((i__11267_11271 < count__11266_11270)){
var f_11272 = cljs.core._nth.call(null,chunk__11265_11269,i__11267_11271);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_11272);

var G__11273 = seq__11264_11268;
var G__11274 = chunk__11265_11269;
var G__11275 = count__11266_11270;
var G__11276 = (i__11267_11271 + (1));
seq__11264_11268 = G__11273;
chunk__11265_11269 = G__11274;
count__11266_11270 = G__11275;
i__11267_11271 = G__11276;
continue;
} else {
var temp__4126__auto___11277 = cljs.core.seq.call(null,seq__11264_11268);
if(temp__4126__auto___11277){
var seq__11264_11278__$1 = temp__4126__auto___11277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11264_11278__$1)){
var c__4519__auto___11279 = cljs.core.chunk_first.call(null,seq__11264_11278__$1);
var G__11280 = cljs.core.chunk_rest.call(null,seq__11264_11278__$1);
var G__11281 = c__4519__auto___11279;
var G__11282 = cljs.core.count.call(null,c__4519__auto___11279);
var G__11283 = (0);
seq__11264_11268 = G__11280;
chunk__11265_11269 = G__11281;
count__11266_11270 = G__11282;
i__11267_11271 = G__11283;
continue;
} else {
var f_11284 = cljs.core.first.call(null,seq__11264_11278__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_11284);

var G__11285 = cljs.core.next.call(null,seq__11264_11278__$1);
var G__11286 = null;
var G__11287 = (0);
var G__11288 = (0);
seq__11264_11268 = G__11285;
chunk__11265_11269 = G__11286;
count__11266_11270 = G__11287;
i__11267_11271 = G__11288;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map