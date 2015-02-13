// Compiled by ClojureScript 0.0-2727 {}
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
var seq__23442_23446 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23443_23447 = null;
var count__23444_23448 = (0);
var i__23445_23449 = (0);
while(true){
if((i__23445_23449 < count__23444_23448)){
var f_23450 = cljs.core._nth.call(null,chunk__23443_23447,i__23445_23449);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_23450);

var G__23451 = seq__23442_23446;
var G__23452 = chunk__23443_23447;
var G__23453 = count__23444_23448;
var G__23454 = (i__23445_23449 + (1));
seq__23442_23446 = G__23451;
chunk__23443_23447 = G__23452;
count__23444_23448 = G__23453;
i__23445_23449 = G__23454;
continue;
} else {
var temp__4126__auto___23455 = cljs.core.seq.call(null,seq__23442_23446);
if(temp__4126__auto___23455){
var seq__23442_23456__$1 = temp__4126__auto___23455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23442_23456__$1)){
var c__4559__auto___23457 = cljs.core.chunk_first.call(null,seq__23442_23456__$1);
var G__23458 = cljs.core.chunk_rest.call(null,seq__23442_23456__$1);
var G__23459 = c__4559__auto___23457;
var G__23460 = cljs.core.count.call(null,c__4559__auto___23457);
var G__23461 = (0);
seq__23442_23446 = G__23458;
chunk__23443_23447 = G__23459;
count__23444_23448 = G__23460;
i__23445_23449 = G__23461;
continue;
} else {
var f_23462 = cljs.core.first.call(null,seq__23442_23456__$1);
cljs.core.print.call(null,"  ");

cljs.core.prn.call(null,f_23462);

var G__23463 = cljs.core.next.call(null,seq__23442_23456__$1);
var G__23464 = null;
var G__23465 = (0);
var G__23466 = (0);
seq__23442_23446 = G__23463;
chunk__23443_23447 = G__23464;
count__23444_23448 = G__23465;
i__23445_23449 = G__23466;
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

//# sourceMappingURL=repl.js.map?rel=1423280678549