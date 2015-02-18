// Compiled by ClojureScript 0.0-2850 {}
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
var seq__17471_17475 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17472_17476 = null;
var count__17473_17477 = (0);
var i__17474_17478 = (0);
while(true){
if((i__17474_17478 < count__17473_17477)){
var f_17479 = cljs.core._nth.call(null,chunk__17472_17476,i__17474_17478);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_17479);

var G__17480 = seq__17471_17475;
var G__17481 = chunk__17472_17476;
var G__17482 = count__17473_17477;
var G__17483 = (i__17474_17478 + (1));
seq__17471_17475 = G__17480;
chunk__17472_17476 = G__17481;
count__17473_17477 = G__17482;
i__17474_17478 = G__17483;
continue;
} else {
var temp__4126__auto___17484 = cljs.core.seq.call(null,seq__17471_17475);
if(temp__4126__auto___17484){
var seq__17471_17485__$1 = temp__4126__auto___17484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17471_17485__$1)){
var c__8291__auto___17486 = cljs.core.chunk_first.call(null,seq__17471_17485__$1);
var G__17487 = cljs.core.chunk_rest.call(null,seq__17471_17485__$1);
var G__17488 = c__8291__auto___17486;
var G__17489 = cljs.core.count.call(null,c__8291__auto___17486);
var G__17490 = (0);
seq__17471_17475 = G__17487;
chunk__17472_17476 = G__17488;
count__17473_17477 = G__17489;
i__17474_17478 = G__17490;
continue;
} else {
var f_17491 = cljs.core.first.call(null,seq__17471_17485__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_17491);

var G__17492 = cljs.core.next.call(null,seq__17471_17485__$1);
var G__17493 = null;
var G__17494 = (0);
var G__17495 = (0);
seq__17471_17475 = G__17492;
chunk__17472_17476 = G__17493;
count__17473_17477 = G__17494;
i__17474_17478 = G__17495;
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
