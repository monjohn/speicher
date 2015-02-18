// Compiled by ClojureScript 0.0-2850 {}
goog.provide('quiescent.dom');
goog.require('cljs.core');
goog.require('quiescent');
/**
* @param {...*} var_args
*/
quiescent.dom.a = (function() { 
var a__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27526_28474 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27527_28475 = null;
var count__27528_28476 = (0);
var i__27529_28477 = (0);
while(true){
if((i__27529_28477 < count__27528_28476)){
var arg__13071__auto___28478 = cljs.core._nth.call(null,chunk__27527_28475,i__27529_28477);
a__13070__auto__.push(arg__13071__auto___28478);

var G__28479 = seq__27526_28474;
var G__28480 = chunk__27527_28475;
var G__28481 = count__27528_28476;
var G__28482 = (i__27529_28477 + (1));
seq__27526_28474 = G__28479;
chunk__27527_28475 = G__28480;
count__27528_28476 = G__28481;
i__27529_28477 = G__28482;
continue;
} else {
var temp__4126__auto___28483 = cljs.core.seq.call(null,seq__27526_28474);
if(temp__4126__auto___28483){
var seq__27526_28484__$1 = temp__4126__auto___28483;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27526_28484__$1)){
var c__8291__auto___28485 = cljs.core.chunk_first.call(null,seq__27526_28484__$1);
var G__28486 = cljs.core.chunk_rest.call(null,seq__27526_28484__$1);
var G__28487 = c__8291__auto___28485;
var G__28488 = cljs.core.count.call(null,c__8291__auto___28485);
var G__28489 = (0);
seq__27526_28474 = G__28486;
chunk__27527_28475 = G__28487;
count__27528_28476 = G__28488;
i__27529_28477 = G__28489;
continue;
} else {
var arg__13071__auto___28490 = cljs.core.first.call(null,seq__27526_28484__$1);
a__13070__auto__.push(arg__13071__auto___28490);

var G__28491 = cljs.core.next.call(null,seq__27526_28484__$1);
var G__28492 = null;
var G__28493 = (0);
var G__28494 = (0);
seq__27526_28474 = G__28491;
chunk__27527_28475 = G__28492;
count__27528_28476 = G__28493;
i__27529_28477 = G__28494;
continue;
}
} else {
}
}
break;
}

return React.DOM.a.apply(null,a__13070__auto__);
};
var a = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28495__i = 0, G__28495__a = new Array(arguments.length -  0);
while (G__28495__i < G__28495__a.length) {G__28495__a[G__28495__i] = arguments[G__28495__i + 0]; ++G__28495__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28495__a,0);
} 
return a__delegate.call(this,args__13069__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__28496){
var args__13069__auto__ = cljs.core.seq(arglist__28496);
return a__delegate(args__13069__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27534_28497 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27535_28498 = null;
var count__27536_28499 = (0);
var i__27537_28500 = (0);
while(true){
if((i__27537_28500 < count__27536_28499)){
var arg__13071__auto___28501 = cljs.core._nth.call(null,chunk__27535_28498,i__27537_28500);
a__13070__auto__.push(arg__13071__auto___28501);

var G__28502 = seq__27534_28497;
var G__28503 = chunk__27535_28498;
var G__28504 = count__27536_28499;
var G__28505 = (i__27537_28500 + (1));
seq__27534_28497 = G__28502;
chunk__27535_28498 = G__28503;
count__27536_28499 = G__28504;
i__27537_28500 = G__28505;
continue;
} else {
var temp__4126__auto___28506 = cljs.core.seq.call(null,seq__27534_28497);
if(temp__4126__auto___28506){
var seq__27534_28507__$1 = temp__4126__auto___28506;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27534_28507__$1)){
var c__8291__auto___28508 = cljs.core.chunk_first.call(null,seq__27534_28507__$1);
var G__28509 = cljs.core.chunk_rest.call(null,seq__27534_28507__$1);
var G__28510 = c__8291__auto___28508;
var G__28511 = cljs.core.count.call(null,c__8291__auto___28508);
var G__28512 = (0);
seq__27534_28497 = G__28509;
chunk__27535_28498 = G__28510;
count__27536_28499 = G__28511;
i__27537_28500 = G__28512;
continue;
} else {
var arg__13071__auto___28513 = cljs.core.first.call(null,seq__27534_28507__$1);
a__13070__auto__.push(arg__13071__auto___28513);

var G__28514 = cljs.core.next.call(null,seq__27534_28507__$1);
var G__28515 = null;
var G__28516 = (0);
var G__28517 = (0);
seq__27534_28497 = G__28514;
chunk__27535_28498 = G__28515;
count__27536_28499 = G__28516;
i__27537_28500 = G__28517;
continue;
}
} else {
}
}
break;
}

return React.DOM.abbr.apply(null,a__13070__auto__);
};
var abbr = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28518__i = 0, G__28518__a = new Array(arguments.length -  0);
while (G__28518__i < G__28518__a.length) {G__28518__a[G__28518__i] = arguments[G__28518__i + 0]; ++G__28518__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28518__a,0);
} 
return abbr__delegate.call(this,args__13069__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__28519){
var args__13069__auto__ = cljs.core.seq(arglist__28519);
return abbr__delegate(args__13069__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27542_28520 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27543_28521 = null;
var count__27544_28522 = (0);
var i__27545_28523 = (0);
while(true){
if((i__27545_28523 < count__27544_28522)){
var arg__13071__auto___28524 = cljs.core._nth.call(null,chunk__27543_28521,i__27545_28523);
a__13070__auto__.push(arg__13071__auto___28524);

var G__28525 = seq__27542_28520;
var G__28526 = chunk__27543_28521;
var G__28527 = count__27544_28522;
var G__28528 = (i__27545_28523 + (1));
seq__27542_28520 = G__28525;
chunk__27543_28521 = G__28526;
count__27544_28522 = G__28527;
i__27545_28523 = G__28528;
continue;
} else {
var temp__4126__auto___28529 = cljs.core.seq.call(null,seq__27542_28520);
if(temp__4126__auto___28529){
var seq__27542_28530__$1 = temp__4126__auto___28529;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27542_28530__$1)){
var c__8291__auto___28531 = cljs.core.chunk_first.call(null,seq__27542_28530__$1);
var G__28532 = cljs.core.chunk_rest.call(null,seq__27542_28530__$1);
var G__28533 = c__8291__auto___28531;
var G__28534 = cljs.core.count.call(null,c__8291__auto___28531);
var G__28535 = (0);
seq__27542_28520 = G__28532;
chunk__27543_28521 = G__28533;
count__27544_28522 = G__28534;
i__27545_28523 = G__28535;
continue;
} else {
var arg__13071__auto___28536 = cljs.core.first.call(null,seq__27542_28530__$1);
a__13070__auto__.push(arg__13071__auto___28536);

var G__28537 = cljs.core.next.call(null,seq__27542_28530__$1);
var G__28538 = null;
var G__28539 = (0);
var G__28540 = (0);
seq__27542_28520 = G__28537;
chunk__27543_28521 = G__28538;
count__27544_28522 = G__28539;
i__27545_28523 = G__28540;
continue;
}
} else {
}
}
break;
}

return React.DOM.address.apply(null,a__13070__auto__);
};
var address = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28541__i = 0, G__28541__a = new Array(arguments.length -  0);
while (G__28541__i < G__28541__a.length) {G__28541__a[G__28541__i] = arguments[G__28541__i + 0]; ++G__28541__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28541__a,0);
} 
return address__delegate.call(this,args__13069__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__28542){
var args__13069__auto__ = cljs.core.seq(arglist__28542);
return address__delegate(args__13069__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27550_28543 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27551_28544 = null;
var count__27552_28545 = (0);
var i__27553_28546 = (0);
while(true){
if((i__27553_28546 < count__27552_28545)){
var arg__13071__auto___28547 = cljs.core._nth.call(null,chunk__27551_28544,i__27553_28546);
a__13070__auto__.push(arg__13071__auto___28547);

var G__28548 = seq__27550_28543;
var G__28549 = chunk__27551_28544;
var G__28550 = count__27552_28545;
var G__28551 = (i__27553_28546 + (1));
seq__27550_28543 = G__28548;
chunk__27551_28544 = G__28549;
count__27552_28545 = G__28550;
i__27553_28546 = G__28551;
continue;
} else {
var temp__4126__auto___28552 = cljs.core.seq.call(null,seq__27550_28543);
if(temp__4126__auto___28552){
var seq__27550_28553__$1 = temp__4126__auto___28552;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27550_28553__$1)){
var c__8291__auto___28554 = cljs.core.chunk_first.call(null,seq__27550_28553__$1);
var G__28555 = cljs.core.chunk_rest.call(null,seq__27550_28553__$1);
var G__28556 = c__8291__auto___28554;
var G__28557 = cljs.core.count.call(null,c__8291__auto___28554);
var G__28558 = (0);
seq__27550_28543 = G__28555;
chunk__27551_28544 = G__28556;
count__27552_28545 = G__28557;
i__27553_28546 = G__28558;
continue;
} else {
var arg__13071__auto___28559 = cljs.core.first.call(null,seq__27550_28553__$1);
a__13070__auto__.push(arg__13071__auto___28559);

var G__28560 = cljs.core.next.call(null,seq__27550_28553__$1);
var G__28561 = null;
var G__28562 = (0);
var G__28563 = (0);
seq__27550_28543 = G__28560;
chunk__27551_28544 = G__28561;
count__27552_28545 = G__28562;
i__27553_28546 = G__28563;
continue;
}
} else {
}
}
break;
}

return React.DOM.area.apply(null,a__13070__auto__);
};
var area = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28564__i = 0, G__28564__a = new Array(arguments.length -  0);
while (G__28564__i < G__28564__a.length) {G__28564__a[G__28564__i] = arguments[G__28564__i + 0]; ++G__28564__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28564__a,0);
} 
return area__delegate.call(this,args__13069__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__28565){
var args__13069__auto__ = cljs.core.seq(arglist__28565);
return area__delegate(args__13069__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27558_28566 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27559_28567 = null;
var count__27560_28568 = (0);
var i__27561_28569 = (0);
while(true){
if((i__27561_28569 < count__27560_28568)){
var arg__13071__auto___28570 = cljs.core._nth.call(null,chunk__27559_28567,i__27561_28569);
a__13070__auto__.push(arg__13071__auto___28570);

var G__28571 = seq__27558_28566;
var G__28572 = chunk__27559_28567;
var G__28573 = count__27560_28568;
var G__28574 = (i__27561_28569 + (1));
seq__27558_28566 = G__28571;
chunk__27559_28567 = G__28572;
count__27560_28568 = G__28573;
i__27561_28569 = G__28574;
continue;
} else {
var temp__4126__auto___28575 = cljs.core.seq.call(null,seq__27558_28566);
if(temp__4126__auto___28575){
var seq__27558_28576__$1 = temp__4126__auto___28575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27558_28576__$1)){
var c__8291__auto___28577 = cljs.core.chunk_first.call(null,seq__27558_28576__$1);
var G__28578 = cljs.core.chunk_rest.call(null,seq__27558_28576__$1);
var G__28579 = c__8291__auto___28577;
var G__28580 = cljs.core.count.call(null,c__8291__auto___28577);
var G__28581 = (0);
seq__27558_28566 = G__28578;
chunk__27559_28567 = G__28579;
count__27560_28568 = G__28580;
i__27561_28569 = G__28581;
continue;
} else {
var arg__13071__auto___28582 = cljs.core.first.call(null,seq__27558_28576__$1);
a__13070__auto__.push(arg__13071__auto___28582);

var G__28583 = cljs.core.next.call(null,seq__27558_28576__$1);
var G__28584 = null;
var G__28585 = (0);
var G__28586 = (0);
seq__27558_28566 = G__28583;
chunk__27559_28567 = G__28584;
count__27560_28568 = G__28585;
i__27561_28569 = G__28586;
continue;
}
} else {
}
}
break;
}

return React.DOM.article.apply(null,a__13070__auto__);
};
var article = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28587__i = 0, G__28587__a = new Array(arguments.length -  0);
while (G__28587__i < G__28587__a.length) {G__28587__a[G__28587__i] = arguments[G__28587__i + 0]; ++G__28587__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28587__a,0);
} 
return article__delegate.call(this,args__13069__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__28588){
var args__13069__auto__ = cljs.core.seq(arglist__28588);
return article__delegate(args__13069__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27566_28589 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27567_28590 = null;
var count__27568_28591 = (0);
var i__27569_28592 = (0);
while(true){
if((i__27569_28592 < count__27568_28591)){
var arg__13071__auto___28593 = cljs.core._nth.call(null,chunk__27567_28590,i__27569_28592);
a__13070__auto__.push(arg__13071__auto___28593);

var G__28594 = seq__27566_28589;
var G__28595 = chunk__27567_28590;
var G__28596 = count__27568_28591;
var G__28597 = (i__27569_28592 + (1));
seq__27566_28589 = G__28594;
chunk__27567_28590 = G__28595;
count__27568_28591 = G__28596;
i__27569_28592 = G__28597;
continue;
} else {
var temp__4126__auto___28598 = cljs.core.seq.call(null,seq__27566_28589);
if(temp__4126__auto___28598){
var seq__27566_28599__$1 = temp__4126__auto___28598;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27566_28599__$1)){
var c__8291__auto___28600 = cljs.core.chunk_first.call(null,seq__27566_28599__$1);
var G__28601 = cljs.core.chunk_rest.call(null,seq__27566_28599__$1);
var G__28602 = c__8291__auto___28600;
var G__28603 = cljs.core.count.call(null,c__8291__auto___28600);
var G__28604 = (0);
seq__27566_28589 = G__28601;
chunk__27567_28590 = G__28602;
count__27568_28591 = G__28603;
i__27569_28592 = G__28604;
continue;
} else {
var arg__13071__auto___28605 = cljs.core.first.call(null,seq__27566_28599__$1);
a__13070__auto__.push(arg__13071__auto___28605);

var G__28606 = cljs.core.next.call(null,seq__27566_28599__$1);
var G__28607 = null;
var G__28608 = (0);
var G__28609 = (0);
seq__27566_28589 = G__28606;
chunk__27567_28590 = G__28607;
count__27568_28591 = G__28608;
i__27569_28592 = G__28609;
continue;
}
} else {
}
}
break;
}

return React.DOM.aside.apply(null,a__13070__auto__);
};
var aside = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28610__i = 0, G__28610__a = new Array(arguments.length -  0);
while (G__28610__i < G__28610__a.length) {G__28610__a[G__28610__i] = arguments[G__28610__i + 0]; ++G__28610__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28610__a,0);
} 
return aside__delegate.call(this,args__13069__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__28611){
var args__13069__auto__ = cljs.core.seq(arglist__28611);
return aside__delegate(args__13069__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27574_28612 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27575_28613 = null;
var count__27576_28614 = (0);
var i__27577_28615 = (0);
while(true){
if((i__27577_28615 < count__27576_28614)){
var arg__13071__auto___28616 = cljs.core._nth.call(null,chunk__27575_28613,i__27577_28615);
a__13070__auto__.push(arg__13071__auto___28616);

var G__28617 = seq__27574_28612;
var G__28618 = chunk__27575_28613;
var G__28619 = count__27576_28614;
var G__28620 = (i__27577_28615 + (1));
seq__27574_28612 = G__28617;
chunk__27575_28613 = G__28618;
count__27576_28614 = G__28619;
i__27577_28615 = G__28620;
continue;
} else {
var temp__4126__auto___28621 = cljs.core.seq.call(null,seq__27574_28612);
if(temp__4126__auto___28621){
var seq__27574_28622__$1 = temp__4126__auto___28621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27574_28622__$1)){
var c__8291__auto___28623 = cljs.core.chunk_first.call(null,seq__27574_28622__$1);
var G__28624 = cljs.core.chunk_rest.call(null,seq__27574_28622__$1);
var G__28625 = c__8291__auto___28623;
var G__28626 = cljs.core.count.call(null,c__8291__auto___28623);
var G__28627 = (0);
seq__27574_28612 = G__28624;
chunk__27575_28613 = G__28625;
count__27576_28614 = G__28626;
i__27577_28615 = G__28627;
continue;
} else {
var arg__13071__auto___28628 = cljs.core.first.call(null,seq__27574_28622__$1);
a__13070__auto__.push(arg__13071__auto___28628);

var G__28629 = cljs.core.next.call(null,seq__27574_28622__$1);
var G__28630 = null;
var G__28631 = (0);
var G__28632 = (0);
seq__27574_28612 = G__28629;
chunk__27575_28613 = G__28630;
count__27576_28614 = G__28631;
i__27577_28615 = G__28632;
continue;
}
} else {
}
}
break;
}

return React.DOM.audio.apply(null,a__13070__auto__);
};
var audio = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28633__i = 0, G__28633__a = new Array(arguments.length -  0);
while (G__28633__i < G__28633__a.length) {G__28633__a[G__28633__i] = arguments[G__28633__i + 0]; ++G__28633__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28633__a,0);
} 
return audio__delegate.call(this,args__13069__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__28634){
var args__13069__auto__ = cljs.core.seq(arglist__28634);
return audio__delegate(args__13069__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27582_28635 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27583_28636 = null;
var count__27584_28637 = (0);
var i__27585_28638 = (0);
while(true){
if((i__27585_28638 < count__27584_28637)){
var arg__13071__auto___28639 = cljs.core._nth.call(null,chunk__27583_28636,i__27585_28638);
a__13070__auto__.push(arg__13071__auto___28639);

var G__28640 = seq__27582_28635;
var G__28641 = chunk__27583_28636;
var G__28642 = count__27584_28637;
var G__28643 = (i__27585_28638 + (1));
seq__27582_28635 = G__28640;
chunk__27583_28636 = G__28641;
count__27584_28637 = G__28642;
i__27585_28638 = G__28643;
continue;
} else {
var temp__4126__auto___28644 = cljs.core.seq.call(null,seq__27582_28635);
if(temp__4126__auto___28644){
var seq__27582_28645__$1 = temp__4126__auto___28644;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27582_28645__$1)){
var c__8291__auto___28646 = cljs.core.chunk_first.call(null,seq__27582_28645__$1);
var G__28647 = cljs.core.chunk_rest.call(null,seq__27582_28645__$1);
var G__28648 = c__8291__auto___28646;
var G__28649 = cljs.core.count.call(null,c__8291__auto___28646);
var G__28650 = (0);
seq__27582_28635 = G__28647;
chunk__27583_28636 = G__28648;
count__27584_28637 = G__28649;
i__27585_28638 = G__28650;
continue;
} else {
var arg__13071__auto___28651 = cljs.core.first.call(null,seq__27582_28645__$1);
a__13070__auto__.push(arg__13071__auto___28651);

var G__28652 = cljs.core.next.call(null,seq__27582_28645__$1);
var G__28653 = null;
var G__28654 = (0);
var G__28655 = (0);
seq__27582_28635 = G__28652;
chunk__27583_28636 = G__28653;
count__27584_28637 = G__28654;
i__27585_28638 = G__28655;
continue;
}
} else {
}
}
break;
}

return React.DOM.b.apply(null,a__13070__auto__);
};
var b = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28656__i = 0, G__28656__a = new Array(arguments.length -  0);
while (G__28656__i < G__28656__a.length) {G__28656__a[G__28656__i] = arguments[G__28656__i + 0]; ++G__28656__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28656__a,0);
} 
return b__delegate.call(this,args__13069__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__28657){
var args__13069__auto__ = cljs.core.seq(arglist__28657);
return b__delegate(args__13069__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27590_28658 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27591_28659 = null;
var count__27592_28660 = (0);
var i__27593_28661 = (0);
while(true){
if((i__27593_28661 < count__27592_28660)){
var arg__13071__auto___28662 = cljs.core._nth.call(null,chunk__27591_28659,i__27593_28661);
a__13070__auto__.push(arg__13071__auto___28662);

var G__28663 = seq__27590_28658;
var G__28664 = chunk__27591_28659;
var G__28665 = count__27592_28660;
var G__28666 = (i__27593_28661 + (1));
seq__27590_28658 = G__28663;
chunk__27591_28659 = G__28664;
count__27592_28660 = G__28665;
i__27593_28661 = G__28666;
continue;
} else {
var temp__4126__auto___28667 = cljs.core.seq.call(null,seq__27590_28658);
if(temp__4126__auto___28667){
var seq__27590_28668__$1 = temp__4126__auto___28667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27590_28668__$1)){
var c__8291__auto___28669 = cljs.core.chunk_first.call(null,seq__27590_28668__$1);
var G__28670 = cljs.core.chunk_rest.call(null,seq__27590_28668__$1);
var G__28671 = c__8291__auto___28669;
var G__28672 = cljs.core.count.call(null,c__8291__auto___28669);
var G__28673 = (0);
seq__27590_28658 = G__28670;
chunk__27591_28659 = G__28671;
count__27592_28660 = G__28672;
i__27593_28661 = G__28673;
continue;
} else {
var arg__13071__auto___28674 = cljs.core.first.call(null,seq__27590_28668__$1);
a__13070__auto__.push(arg__13071__auto___28674);

var G__28675 = cljs.core.next.call(null,seq__27590_28668__$1);
var G__28676 = null;
var G__28677 = (0);
var G__28678 = (0);
seq__27590_28658 = G__28675;
chunk__27591_28659 = G__28676;
count__27592_28660 = G__28677;
i__27593_28661 = G__28678;
continue;
}
} else {
}
}
break;
}

return React.DOM.base.apply(null,a__13070__auto__);
};
var base = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28679__i = 0, G__28679__a = new Array(arguments.length -  0);
while (G__28679__i < G__28679__a.length) {G__28679__a[G__28679__i] = arguments[G__28679__i + 0]; ++G__28679__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28679__a,0);
} 
return base__delegate.call(this,args__13069__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__28680){
var args__13069__auto__ = cljs.core.seq(arglist__28680);
return base__delegate(args__13069__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27598_28681 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27599_28682 = null;
var count__27600_28683 = (0);
var i__27601_28684 = (0);
while(true){
if((i__27601_28684 < count__27600_28683)){
var arg__13071__auto___28685 = cljs.core._nth.call(null,chunk__27599_28682,i__27601_28684);
a__13070__auto__.push(arg__13071__auto___28685);

var G__28686 = seq__27598_28681;
var G__28687 = chunk__27599_28682;
var G__28688 = count__27600_28683;
var G__28689 = (i__27601_28684 + (1));
seq__27598_28681 = G__28686;
chunk__27599_28682 = G__28687;
count__27600_28683 = G__28688;
i__27601_28684 = G__28689;
continue;
} else {
var temp__4126__auto___28690 = cljs.core.seq.call(null,seq__27598_28681);
if(temp__4126__auto___28690){
var seq__27598_28691__$1 = temp__4126__auto___28690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27598_28691__$1)){
var c__8291__auto___28692 = cljs.core.chunk_first.call(null,seq__27598_28691__$1);
var G__28693 = cljs.core.chunk_rest.call(null,seq__27598_28691__$1);
var G__28694 = c__8291__auto___28692;
var G__28695 = cljs.core.count.call(null,c__8291__auto___28692);
var G__28696 = (0);
seq__27598_28681 = G__28693;
chunk__27599_28682 = G__28694;
count__27600_28683 = G__28695;
i__27601_28684 = G__28696;
continue;
} else {
var arg__13071__auto___28697 = cljs.core.first.call(null,seq__27598_28691__$1);
a__13070__auto__.push(arg__13071__auto___28697);

var G__28698 = cljs.core.next.call(null,seq__27598_28691__$1);
var G__28699 = null;
var G__28700 = (0);
var G__28701 = (0);
seq__27598_28681 = G__28698;
chunk__27599_28682 = G__28699;
count__27600_28683 = G__28700;
i__27601_28684 = G__28701;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdi.apply(null,a__13070__auto__);
};
var bdi = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28702__i = 0, G__28702__a = new Array(arguments.length -  0);
while (G__28702__i < G__28702__a.length) {G__28702__a[G__28702__i] = arguments[G__28702__i + 0]; ++G__28702__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28702__a,0);
} 
return bdi__delegate.call(this,args__13069__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__28703){
var args__13069__auto__ = cljs.core.seq(arglist__28703);
return bdi__delegate(args__13069__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27606_28704 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27607_28705 = null;
var count__27608_28706 = (0);
var i__27609_28707 = (0);
while(true){
if((i__27609_28707 < count__27608_28706)){
var arg__13071__auto___28708 = cljs.core._nth.call(null,chunk__27607_28705,i__27609_28707);
a__13070__auto__.push(arg__13071__auto___28708);

var G__28709 = seq__27606_28704;
var G__28710 = chunk__27607_28705;
var G__28711 = count__27608_28706;
var G__28712 = (i__27609_28707 + (1));
seq__27606_28704 = G__28709;
chunk__27607_28705 = G__28710;
count__27608_28706 = G__28711;
i__27609_28707 = G__28712;
continue;
} else {
var temp__4126__auto___28713 = cljs.core.seq.call(null,seq__27606_28704);
if(temp__4126__auto___28713){
var seq__27606_28714__$1 = temp__4126__auto___28713;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27606_28714__$1)){
var c__8291__auto___28715 = cljs.core.chunk_first.call(null,seq__27606_28714__$1);
var G__28716 = cljs.core.chunk_rest.call(null,seq__27606_28714__$1);
var G__28717 = c__8291__auto___28715;
var G__28718 = cljs.core.count.call(null,c__8291__auto___28715);
var G__28719 = (0);
seq__27606_28704 = G__28716;
chunk__27607_28705 = G__28717;
count__27608_28706 = G__28718;
i__27609_28707 = G__28719;
continue;
} else {
var arg__13071__auto___28720 = cljs.core.first.call(null,seq__27606_28714__$1);
a__13070__auto__.push(arg__13071__auto___28720);

var G__28721 = cljs.core.next.call(null,seq__27606_28714__$1);
var G__28722 = null;
var G__28723 = (0);
var G__28724 = (0);
seq__27606_28704 = G__28721;
chunk__27607_28705 = G__28722;
count__27608_28706 = G__28723;
i__27609_28707 = G__28724;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdo.apply(null,a__13070__auto__);
};
var bdo = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28725__i = 0, G__28725__a = new Array(arguments.length -  0);
while (G__28725__i < G__28725__a.length) {G__28725__a[G__28725__i] = arguments[G__28725__i + 0]; ++G__28725__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28725__a,0);
} 
return bdo__delegate.call(this,args__13069__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__28726){
var args__13069__auto__ = cljs.core.seq(arglist__28726);
return bdo__delegate(args__13069__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27614_28727 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27615_28728 = null;
var count__27616_28729 = (0);
var i__27617_28730 = (0);
while(true){
if((i__27617_28730 < count__27616_28729)){
var arg__13071__auto___28731 = cljs.core._nth.call(null,chunk__27615_28728,i__27617_28730);
a__13070__auto__.push(arg__13071__auto___28731);

var G__28732 = seq__27614_28727;
var G__28733 = chunk__27615_28728;
var G__28734 = count__27616_28729;
var G__28735 = (i__27617_28730 + (1));
seq__27614_28727 = G__28732;
chunk__27615_28728 = G__28733;
count__27616_28729 = G__28734;
i__27617_28730 = G__28735;
continue;
} else {
var temp__4126__auto___28736 = cljs.core.seq.call(null,seq__27614_28727);
if(temp__4126__auto___28736){
var seq__27614_28737__$1 = temp__4126__auto___28736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27614_28737__$1)){
var c__8291__auto___28738 = cljs.core.chunk_first.call(null,seq__27614_28737__$1);
var G__28739 = cljs.core.chunk_rest.call(null,seq__27614_28737__$1);
var G__28740 = c__8291__auto___28738;
var G__28741 = cljs.core.count.call(null,c__8291__auto___28738);
var G__28742 = (0);
seq__27614_28727 = G__28739;
chunk__27615_28728 = G__28740;
count__27616_28729 = G__28741;
i__27617_28730 = G__28742;
continue;
} else {
var arg__13071__auto___28743 = cljs.core.first.call(null,seq__27614_28737__$1);
a__13070__auto__.push(arg__13071__auto___28743);

var G__28744 = cljs.core.next.call(null,seq__27614_28737__$1);
var G__28745 = null;
var G__28746 = (0);
var G__28747 = (0);
seq__27614_28727 = G__28744;
chunk__27615_28728 = G__28745;
count__27616_28729 = G__28746;
i__27617_28730 = G__28747;
continue;
}
} else {
}
}
break;
}

return React.DOM.big.apply(null,a__13070__auto__);
};
var big = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28748__i = 0, G__28748__a = new Array(arguments.length -  0);
while (G__28748__i < G__28748__a.length) {G__28748__a[G__28748__i] = arguments[G__28748__i + 0]; ++G__28748__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28748__a,0);
} 
return big__delegate.call(this,args__13069__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__28749){
var args__13069__auto__ = cljs.core.seq(arglist__28749);
return big__delegate(args__13069__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27622_28750 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27623_28751 = null;
var count__27624_28752 = (0);
var i__27625_28753 = (0);
while(true){
if((i__27625_28753 < count__27624_28752)){
var arg__13071__auto___28754 = cljs.core._nth.call(null,chunk__27623_28751,i__27625_28753);
a__13070__auto__.push(arg__13071__auto___28754);

var G__28755 = seq__27622_28750;
var G__28756 = chunk__27623_28751;
var G__28757 = count__27624_28752;
var G__28758 = (i__27625_28753 + (1));
seq__27622_28750 = G__28755;
chunk__27623_28751 = G__28756;
count__27624_28752 = G__28757;
i__27625_28753 = G__28758;
continue;
} else {
var temp__4126__auto___28759 = cljs.core.seq.call(null,seq__27622_28750);
if(temp__4126__auto___28759){
var seq__27622_28760__$1 = temp__4126__auto___28759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27622_28760__$1)){
var c__8291__auto___28761 = cljs.core.chunk_first.call(null,seq__27622_28760__$1);
var G__28762 = cljs.core.chunk_rest.call(null,seq__27622_28760__$1);
var G__28763 = c__8291__auto___28761;
var G__28764 = cljs.core.count.call(null,c__8291__auto___28761);
var G__28765 = (0);
seq__27622_28750 = G__28762;
chunk__27623_28751 = G__28763;
count__27624_28752 = G__28764;
i__27625_28753 = G__28765;
continue;
} else {
var arg__13071__auto___28766 = cljs.core.first.call(null,seq__27622_28760__$1);
a__13070__auto__.push(arg__13071__auto___28766);

var G__28767 = cljs.core.next.call(null,seq__27622_28760__$1);
var G__28768 = null;
var G__28769 = (0);
var G__28770 = (0);
seq__27622_28750 = G__28767;
chunk__27623_28751 = G__28768;
count__27624_28752 = G__28769;
i__27625_28753 = G__28770;
continue;
}
} else {
}
}
break;
}

return React.DOM.blockquote.apply(null,a__13070__auto__);
};
var blockquote = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28771__i = 0, G__28771__a = new Array(arguments.length -  0);
while (G__28771__i < G__28771__a.length) {G__28771__a[G__28771__i] = arguments[G__28771__i + 0]; ++G__28771__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28771__a,0);
} 
return blockquote__delegate.call(this,args__13069__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__28772){
var args__13069__auto__ = cljs.core.seq(arglist__28772);
return blockquote__delegate(args__13069__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27630_28773 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27631_28774 = null;
var count__27632_28775 = (0);
var i__27633_28776 = (0);
while(true){
if((i__27633_28776 < count__27632_28775)){
var arg__13071__auto___28777 = cljs.core._nth.call(null,chunk__27631_28774,i__27633_28776);
a__13070__auto__.push(arg__13071__auto___28777);

var G__28778 = seq__27630_28773;
var G__28779 = chunk__27631_28774;
var G__28780 = count__27632_28775;
var G__28781 = (i__27633_28776 + (1));
seq__27630_28773 = G__28778;
chunk__27631_28774 = G__28779;
count__27632_28775 = G__28780;
i__27633_28776 = G__28781;
continue;
} else {
var temp__4126__auto___28782 = cljs.core.seq.call(null,seq__27630_28773);
if(temp__4126__auto___28782){
var seq__27630_28783__$1 = temp__4126__auto___28782;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27630_28783__$1)){
var c__8291__auto___28784 = cljs.core.chunk_first.call(null,seq__27630_28783__$1);
var G__28785 = cljs.core.chunk_rest.call(null,seq__27630_28783__$1);
var G__28786 = c__8291__auto___28784;
var G__28787 = cljs.core.count.call(null,c__8291__auto___28784);
var G__28788 = (0);
seq__27630_28773 = G__28785;
chunk__27631_28774 = G__28786;
count__27632_28775 = G__28787;
i__27633_28776 = G__28788;
continue;
} else {
var arg__13071__auto___28789 = cljs.core.first.call(null,seq__27630_28783__$1);
a__13070__auto__.push(arg__13071__auto___28789);

var G__28790 = cljs.core.next.call(null,seq__27630_28783__$1);
var G__28791 = null;
var G__28792 = (0);
var G__28793 = (0);
seq__27630_28773 = G__28790;
chunk__27631_28774 = G__28791;
count__27632_28775 = G__28792;
i__27633_28776 = G__28793;
continue;
}
} else {
}
}
break;
}

return React.DOM.body.apply(null,a__13070__auto__);
};
var body = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28794__i = 0, G__28794__a = new Array(arguments.length -  0);
while (G__28794__i < G__28794__a.length) {G__28794__a[G__28794__i] = arguments[G__28794__i + 0]; ++G__28794__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28794__a,0);
} 
return body__delegate.call(this,args__13069__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__28795){
var args__13069__auto__ = cljs.core.seq(arglist__28795);
return body__delegate(args__13069__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27638_28796 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27639_28797 = null;
var count__27640_28798 = (0);
var i__27641_28799 = (0);
while(true){
if((i__27641_28799 < count__27640_28798)){
var arg__13071__auto___28800 = cljs.core._nth.call(null,chunk__27639_28797,i__27641_28799);
a__13070__auto__.push(arg__13071__auto___28800);

var G__28801 = seq__27638_28796;
var G__28802 = chunk__27639_28797;
var G__28803 = count__27640_28798;
var G__28804 = (i__27641_28799 + (1));
seq__27638_28796 = G__28801;
chunk__27639_28797 = G__28802;
count__27640_28798 = G__28803;
i__27641_28799 = G__28804;
continue;
} else {
var temp__4126__auto___28805 = cljs.core.seq.call(null,seq__27638_28796);
if(temp__4126__auto___28805){
var seq__27638_28806__$1 = temp__4126__auto___28805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27638_28806__$1)){
var c__8291__auto___28807 = cljs.core.chunk_first.call(null,seq__27638_28806__$1);
var G__28808 = cljs.core.chunk_rest.call(null,seq__27638_28806__$1);
var G__28809 = c__8291__auto___28807;
var G__28810 = cljs.core.count.call(null,c__8291__auto___28807);
var G__28811 = (0);
seq__27638_28796 = G__28808;
chunk__27639_28797 = G__28809;
count__27640_28798 = G__28810;
i__27641_28799 = G__28811;
continue;
} else {
var arg__13071__auto___28812 = cljs.core.first.call(null,seq__27638_28806__$1);
a__13070__auto__.push(arg__13071__auto___28812);

var G__28813 = cljs.core.next.call(null,seq__27638_28806__$1);
var G__28814 = null;
var G__28815 = (0);
var G__28816 = (0);
seq__27638_28796 = G__28813;
chunk__27639_28797 = G__28814;
count__27640_28798 = G__28815;
i__27641_28799 = G__28816;
continue;
}
} else {
}
}
break;
}

return React.DOM.br.apply(null,a__13070__auto__);
};
var br = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28817__i = 0, G__28817__a = new Array(arguments.length -  0);
while (G__28817__i < G__28817__a.length) {G__28817__a[G__28817__i] = arguments[G__28817__i + 0]; ++G__28817__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28817__a,0);
} 
return br__delegate.call(this,args__13069__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__28818){
var args__13069__auto__ = cljs.core.seq(arglist__28818);
return br__delegate(args__13069__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27646_28819 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27647_28820 = null;
var count__27648_28821 = (0);
var i__27649_28822 = (0);
while(true){
if((i__27649_28822 < count__27648_28821)){
var arg__13071__auto___28823 = cljs.core._nth.call(null,chunk__27647_28820,i__27649_28822);
a__13070__auto__.push(arg__13071__auto___28823);

var G__28824 = seq__27646_28819;
var G__28825 = chunk__27647_28820;
var G__28826 = count__27648_28821;
var G__28827 = (i__27649_28822 + (1));
seq__27646_28819 = G__28824;
chunk__27647_28820 = G__28825;
count__27648_28821 = G__28826;
i__27649_28822 = G__28827;
continue;
} else {
var temp__4126__auto___28828 = cljs.core.seq.call(null,seq__27646_28819);
if(temp__4126__auto___28828){
var seq__27646_28829__$1 = temp__4126__auto___28828;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27646_28829__$1)){
var c__8291__auto___28830 = cljs.core.chunk_first.call(null,seq__27646_28829__$1);
var G__28831 = cljs.core.chunk_rest.call(null,seq__27646_28829__$1);
var G__28832 = c__8291__auto___28830;
var G__28833 = cljs.core.count.call(null,c__8291__auto___28830);
var G__28834 = (0);
seq__27646_28819 = G__28831;
chunk__27647_28820 = G__28832;
count__27648_28821 = G__28833;
i__27649_28822 = G__28834;
continue;
} else {
var arg__13071__auto___28835 = cljs.core.first.call(null,seq__27646_28829__$1);
a__13070__auto__.push(arg__13071__auto___28835);

var G__28836 = cljs.core.next.call(null,seq__27646_28829__$1);
var G__28837 = null;
var G__28838 = (0);
var G__28839 = (0);
seq__27646_28819 = G__28836;
chunk__27647_28820 = G__28837;
count__27648_28821 = G__28838;
i__27649_28822 = G__28839;
continue;
}
} else {
}
}
break;
}

return React.DOM.button.apply(null,a__13070__auto__);
};
var button = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28840__i = 0, G__28840__a = new Array(arguments.length -  0);
while (G__28840__i < G__28840__a.length) {G__28840__a[G__28840__i] = arguments[G__28840__i + 0]; ++G__28840__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28840__a,0);
} 
return button__delegate.call(this,args__13069__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__28841){
var args__13069__auto__ = cljs.core.seq(arglist__28841);
return button__delegate(args__13069__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27654_28842 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27655_28843 = null;
var count__27656_28844 = (0);
var i__27657_28845 = (0);
while(true){
if((i__27657_28845 < count__27656_28844)){
var arg__13071__auto___28846 = cljs.core._nth.call(null,chunk__27655_28843,i__27657_28845);
a__13070__auto__.push(arg__13071__auto___28846);

var G__28847 = seq__27654_28842;
var G__28848 = chunk__27655_28843;
var G__28849 = count__27656_28844;
var G__28850 = (i__27657_28845 + (1));
seq__27654_28842 = G__28847;
chunk__27655_28843 = G__28848;
count__27656_28844 = G__28849;
i__27657_28845 = G__28850;
continue;
} else {
var temp__4126__auto___28851 = cljs.core.seq.call(null,seq__27654_28842);
if(temp__4126__auto___28851){
var seq__27654_28852__$1 = temp__4126__auto___28851;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27654_28852__$1)){
var c__8291__auto___28853 = cljs.core.chunk_first.call(null,seq__27654_28852__$1);
var G__28854 = cljs.core.chunk_rest.call(null,seq__27654_28852__$1);
var G__28855 = c__8291__auto___28853;
var G__28856 = cljs.core.count.call(null,c__8291__auto___28853);
var G__28857 = (0);
seq__27654_28842 = G__28854;
chunk__27655_28843 = G__28855;
count__27656_28844 = G__28856;
i__27657_28845 = G__28857;
continue;
} else {
var arg__13071__auto___28858 = cljs.core.first.call(null,seq__27654_28852__$1);
a__13070__auto__.push(arg__13071__auto___28858);

var G__28859 = cljs.core.next.call(null,seq__27654_28852__$1);
var G__28860 = null;
var G__28861 = (0);
var G__28862 = (0);
seq__27654_28842 = G__28859;
chunk__27655_28843 = G__28860;
count__27656_28844 = G__28861;
i__27657_28845 = G__28862;
continue;
}
} else {
}
}
break;
}

return React.DOM.canvas.apply(null,a__13070__auto__);
};
var canvas = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28863__i = 0, G__28863__a = new Array(arguments.length -  0);
while (G__28863__i < G__28863__a.length) {G__28863__a[G__28863__i] = arguments[G__28863__i + 0]; ++G__28863__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28863__a,0);
} 
return canvas__delegate.call(this,args__13069__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__28864){
var args__13069__auto__ = cljs.core.seq(arglist__28864);
return canvas__delegate(args__13069__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27662_28865 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27663_28866 = null;
var count__27664_28867 = (0);
var i__27665_28868 = (0);
while(true){
if((i__27665_28868 < count__27664_28867)){
var arg__13071__auto___28869 = cljs.core._nth.call(null,chunk__27663_28866,i__27665_28868);
a__13070__auto__.push(arg__13071__auto___28869);

var G__28870 = seq__27662_28865;
var G__28871 = chunk__27663_28866;
var G__28872 = count__27664_28867;
var G__28873 = (i__27665_28868 + (1));
seq__27662_28865 = G__28870;
chunk__27663_28866 = G__28871;
count__27664_28867 = G__28872;
i__27665_28868 = G__28873;
continue;
} else {
var temp__4126__auto___28874 = cljs.core.seq.call(null,seq__27662_28865);
if(temp__4126__auto___28874){
var seq__27662_28875__$1 = temp__4126__auto___28874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27662_28875__$1)){
var c__8291__auto___28876 = cljs.core.chunk_first.call(null,seq__27662_28875__$1);
var G__28877 = cljs.core.chunk_rest.call(null,seq__27662_28875__$1);
var G__28878 = c__8291__auto___28876;
var G__28879 = cljs.core.count.call(null,c__8291__auto___28876);
var G__28880 = (0);
seq__27662_28865 = G__28877;
chunk__27663_28866 = G__28878;
count__27664_28867 = G__28879;
i__27665_28868 = G__28880;
continue;
} else {
var arg__13071__auto___28881 = cljs.core.first.call(null,seq__27662_28875__$1);
a__13070__auto__.push(arg__13071__auto___28881);

var G__28882 = cljs.core.next.call(null,seq__27662_28875__$1);
var G__28883 = null;
var G__28884 = (0);
var G__28885 = (0);
seq__27662_28865 = G__28882;
chunk__27663_28866 = G__28883;
count__27664_28867 = G__28884;
i__27665_28868 = G__28885;
continue;
}
} else {
}
}
break;
}

return React.DOM.caption.apply(null,a__13070__auto__);
};
var caption = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28886__i = 0, G__28886__a = new Array(arguments.length -  0);
while (G__28886__i < G__28886__a.length) {G__28886__a[G__28886__i] = arguments[G__28886__i + 0]; ++G__28886__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28886__a,0);
} 
return caption__delegate.call(this,args__13069__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__28887){
var args__13069__auto__ = cljs.core.seq(arglist__28887);
return caption__delegate(args__13069__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27670_28888 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27671_28889 = null;
var count__27672_28890 = (0);
var i__27673_28891 = (0);
while(true){
if((i__27673_28891 < count__27672_28890)){
var arg__13071__auto___28892 = cljs.core._nth.call(null,chunk__27671_28889,i__27673_28891);
a__13070__auto__.push(arg__13071__auto___28892);

var G__28893 = seq__27670_28888;
var G__28894 = chunk__27671_28889;
var G__28895 = count__27672_28890;
var G__28896 = (i__27673_28891 + (1));
seq__27670_28888 = G__28893;
chunk__27671_28889 = G__28894;
count__27672_28890 = G__28895;
i__27673_28891 = G__28896;
continue;
} else {
var temp__4126__auto___28897 = cljs.core.seq.call(null,seq__27670_28888);
if(temp__4126__auto___28897){
var seq__27670_28898__$1 = temp__4126__auto___28897;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27670_28898__$1)){
var c__8291__auto___28899 = cljs.core.chunk_first.call(null,seq__27670_28898__$1);
var G__28900 = cljs.core.chunk_rest.call(null,seq__27670_28898__$1);
var G__28901 = c__8291__auto___28899;
var G__28902 = cljs.core.count.call(null,c__8291__auto___28899);
var G__28903 = (0);
seq__27670_28888 = G__28900;
chunk__27671_28889 = G__28901;
count__27672_28890 = G__28902;
i__27673_28891 = G__28903;
continue;
} else {
var arg__13071__auto___28904 = cljs.core.first.call(null,seq__27670_28898__$1);
a__13070__auto__.push(arg__13071__auto___28904);

var G__28905 = cljs.core.next.call(null,seq__27670_28898__$1);
var G__28906 = null;
var G__28907 = (0);
var G__28908 = (0);
seq__27670_28888 = G__28905;
chunk__27671_28889 = G__28906;
count__27672_28890 = G__28907;
i__27673_28891 = G__28908;
continue;
}
} else {
}
}
break;
}

return React.DOM.cite.apply(null,a__13070__auto__);
};
var cite = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28909__i = 0, G__28909__a = new Array(arguments.length -  0);
while (G__28909__i < G__28909__a.length) {G__28909__a[G__28909__i] = arguments[G__28909__i + 0]; ++G__28909__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28909__a,0);
} 
return cite__delegate.call(this,args__13069__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__28910){
var args__13069__auto__ = cljs.core.seq(arglist__28910);
return cite__delegate(args__13069__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27678_28911 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27679_28912 = null;
var count__27680_28913 = (0);
var i__27681_28914 = (0);
while(true){
if((i__27681_28914 < count__27680_28913)){
var arg__13071__auto___28915 = cljs.core._nth.call(null,chunk__27679_28912,i__27681_28914);
a__13070__auto__.push(arg__13071__auto___28915);

var G__28916 = seq__27678_28911;
var G__28917 = chunk__27679_28912;
var G__28918 = count__27680_28913;
var G__28919 = (i__27681_28914 + (1));
seq__27678_28911 = G__28916;
chunk__27679_28912 = G__28917;
count__27680_28913 = G__28918;
i__27681_28914 = G__28919;
continue;
} else {
var temp__4126__auto___28920 = cljs.core.seq.call(null,seq__27678_28911);
if(temp__4126__auto___28920){
var seq__27678_28921__$1 = temp__4126__auto___28920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27678_28921__$1)){
var c__8291__auto___28922 = cljs.core.chunk_first.call(null,seq__27678_28921__$1);
var G__28923 = cljs.core.chunk_rest.call(null,seq__27678_28921__$1);
var G__28924 = c__8291__auto___28922;
var G__28925 = cljs.core.count.call(null,c__8291__auto___28922);
var G__28926 = (0);
seq__27678_28911 = G__28923;
chunk__27679_28912 = G__28924;
count__27680_28913 = G__28925;
i__27681_28914 = G__28926;
continue;
} else {
var arg__13071__auto___28927 = cljs.core.first.call(null,seq__27678_28921__$1);
a__13070__auto__.push(arg__13071__auto___28927);

var G__28928 = cljs.core.next.call(null,seq__27678_28921__$1);
var G__28929 = null;
var G__28930 = (0);
var G__28931 = (0);
seq__27678_28911 = G__28928;
chunk__27679_28912 = G__28929;
count__27680_28913 = G__28930;
i__27681_28914 = G__28931;
continue;
}
} else {
}
}
break;
}

return React.DOM.code.apply(null,a__13070__auto__);
};
var code = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28932__i = 0, G__28932__a = new Array(arguments.length -  0);
while (G__28932__i < G__28932__a.length) {G__28932__a[G__28932__i] = arguments[G__28932__i + 0]; ++G__28932__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28932__a,0);
} 
return code__delegate.call(this,args__13069__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__28933){
var args__13069__auto__ = cljs.core.seq(arglist__28933);
return code__delegate(args__13069__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27686_28934 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27687_28935 = null;
var count__27688_28936 = (0);
var i__27689_28937 = (0);
while(true){
if((i__27689_28937 < count__27688_28936)){
var arg__13071__auto___28938 = cljs.core._nth.call(null,chunk__27687_28935,i__27689_28937);
a__13070__auto__.push(arg__13071__auto___28938);

var G__28939 = seq__27686_28934;
var G__28940 = chunk__27687_28935;
var G__28941 = count__27688_28936;
var G__28942 = (i__27689_28937 + (1));
seq__27686_28934 = G__28939;
chunk__27687_28935 = G__28940;
count__27688_28936 = G__28941;
i__27689_28937 = G__28942;
continue;
} else {
var temp__4126__auto___28943 = cljs.core.seq.call(null,seq__27686_28934);
if(temp__4126__auto___28943){
var seq__27686_28944__$1 = temp__4126__auto___28943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27686_28944__$1)){
var c__8291__auto___28945 = cljs.core.chunk_first.call(null,seq__27686_28944__$1);
var G__28946 = cljs.core.chunk_rest.call(null,seq__27686_28944__$1);
var G__28947 = c__8291__auto___28945;
var G__28948 = cljs.core.count.call(null,c__8291__auto___28945);
var G__28949 = (0);
seq__27686_28934 = G__28946;
chunk__27687_28935 = G__28947;
count__27688_28936 = G__28948;
i__27689_28937 = G__28949;
continue;
} else {
var arg__13071__auto___28950 = cljs.core.first.call(null,seq__27686_28944__$1);
a__13070__auto__.push(arg__13071__auto___28950);

var G__28951 = cljs.core.next.call(null,seq__27686_28944__$1);
var G__28952 = null;
var G__28953 = (0);
var G__28954 = (0);
seq__27686_28934 = G__28951;
chunk__27687_28935 = G__28952;
count__27688_28936 = G__28953;
i__27689_28937 = G__28954;
continue;
}
} else {
}
}
break;
}

return React.DOM.col.apply(null,a__13070__auto__);
};
var col = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28955__i = 0, G__28955__a = new Array(arguments.length -  0);
while (G__28955__i < G__28955__a.length) {G__28955__a[G__28955__i] = arguments[G__28955__i + 0]; ++G__28955__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28955__a,0);
} 
return col__delegate.call(this,args__13069__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__28956){
var args__13069__auto__ = cljs.core.seq(arglist__28956);
return col__delegate(args__13069__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27694_28957 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27695_28958 = null;
var count__27696_28959 = (0);
var i__27697_28960 = (0);
while(true){
if((i__27697_28960 < count__27696_28959)){
var arg__13071__auto___28961 = cljs.core._nth.call(null,chunk__27695_28958,i__27697_28960);
a__13070__auto__.push(arg__13071__auto___28961);

var G__28962 = seq__27694_28957;
var G__28963 = chunk__27695_28958;
var G__28964 = count__27696_28959;
var G__28965 = (i__27697_28960 + (1));
seq__27694_28957 = G__28962;
chunk__27695_28958 = G__28963;
count__27696_28959 = G__28964;
i__27697_28960 = G__28965;
continue;
} else {
var temp__4126__auto___28966 = cljs.core.seq.call(null,seq__27694_28957);
if(temp__4126__auto___28966){
var seq__27694_28967__$1 = temp__4126__auto___28966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27694_28967__$1)){
var c__8291__auto___28968 = cljs.core.chunk_first.call(null,seq__27694_28967__$1);
var G__28969 = cljs.core.chunk_rest.call(null,seq__27694_28967__$1);
var G__28970 = c__8291__auto___28968;
var G__28971 = cljs.core.count.call(null,c__8291__auto___28968);
var G__28972 = (0);
seq__27694_28957 = G__28969;
chunk__27695_28958 = G__28970;
count__27696_28959 = G__28971;
i__27697_28960 = G__28972;
continue;
} else {
var arg__13071__auto___28973 = cljs.core.first.call(null,seq__27694_28967__$1);
a__13070__auto__.push(arg__13071__auto___28973);

var G__28974 = cljs.core.next.call(null,seq__27694_28967__$1);
var G__28975 = null;
var G__28976 = (0);
var G__28977 = (0);
seq__27694_28957 = G__28974;
chunk__27695_28958 = G__28975;
count__27696_28959 = G__28976;
i__27697_28960 = G__28977;
continue;
}
} else {
}
}
break;
}

return React.DOM.colgroup.apply(null,a__13070__auto__);
};
var colgroup = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__28978__i = 0, G__28978__a = new Array(arguments.length -  0);
while (G__28978__i < G__28978__a.length) {G__28978__a[G__28978__i] = arguments[G__28978__i + 0]; ++G__28978__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__28978__a,0);
} 
return colgroup__delegate.call(this,args__13069__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__28979){
var args__13069__auto__ = cljs.core.seq(arglist__28979);
return colgroup__delegate(args__13069__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27702_28980 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27703_28981 = null;
var count__27704_28982 = (0);
var i__27705_28983 = (0);
while(true){
if((i__27705_28983 < count__27704_28982)){
var arg__13071__auto___28984 = cljs.core._nth.call(null,chunk__27703_28981,i__27705_28983);
a__13070__auto__.push(arg__13071__auto___28984);

var G__28985 = seq__27702_28980;
var G__28986 = chunk__27703_28981;
var G__28987 = count__27704_28982;
var G__28988 = (i__27705_28983 + (1));
seq__27702_28980 = G__28985;
chunk__27703_28981 = G__28986;
count__27704_28982 = G__28987;
i__27705_28983 = G__28988;
continue;
} else {
var temp__4126__auto___28989 = cljs.core.seq.call(null,seq__27702_28980);
if(temp__4126__auto___28989){
var seq__27702_28990__$1 = temp__4126__auto___28989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27702_28990__$1)){
var c__8291__auto___28991 = cljs.core.chunk_first.call(null,seq__27702_28990__$1);
var G__28992 = cljs.core.chunk_rest.call(null,seq__27702_28990__$1);
var G__28993 = c__8291__auto___28991;
var G__28994 = cljs.core.count.call(null,c__8291__auto___28991);
var G__28995 = (0);
seq__27702_28980 = G__28992;
chunk__27703_28981 = G__28993;
count__27704_28982 = G__28994;
i__27705_28983 = G__28995;
continue;
} else {
var arg__13071__auto___28996 = cljs.core.first.call(null,seq__27702_28990__$1);
a__13070__auto__.push(arg__13071__auto___28996);

var G__28997 = cljs.core.next.call(null,seq__27702_28990__$1);
var G__28998 = null;
var G__28999 = (0);
var G__29000 = (0);
seq__27702_28980 = G__28997;
chunk__27703_28981 = G__28998;
count__27704_28982 = G__28999;
i__27705_28983 = G__29000;
continue;
}
} else {
}
}
break;
}

return React.DOM.data.apply(null,a__13070__auto__);
};
var data = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29001__i = 0, G__29001__a = new Array(arguments.length -  0);
while (G__29001__i < G__29001__a.length) {G__29001__a[G__29001__i] = arguments[G__29001__i + 0]; ++G__29001__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29001__a,0);
} 
return data__delegate.call(this,args__13069__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__29002){
var args__13069__auto__ = cljs.core.seq(arglist__29002);
return data__delegate(args__13069__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27710_29003 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27711_29004 = null;
var count__27712_29005 = (0);
var i__27713_29006 = (0);
while(true){
if((i__27713_29006 < count__27712_29005)){
var arg__13071__auto___29007 = cljs.core._nth.call(null,chunk__27711_29004,i__27713_29006);
a__13070__auto__.push(arg__13071__auto___29007);

var G__29008 = seq__27710_29003;
var G__29009 = chunk__27711_29004;
var G__29010 = count__27712_29005;
var G__29011 = (i__27713_29006 + (1));
seq__27710_29003 = G__29008;
chunk__27711_29004 = G__29009;
count__27712_29005 = G__29010;
i__27713_29006 = G__29011;
continue;
} else {
var temp__4126__auto___29012 = cljs.core.seq.call(null,seq__27710_29003);
if(temp__4126__auto___29012){
var seq__27710_29013__$1 = temp__4126__auto___29012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27710_29013__$1)){
var c__8291__auto___29014 = cljs.core.chunk_first.call(null,seq__27710_29013__$1);
var G__29015 = cljs.core.chunk_rest.call(null,seq__27710_29013__$1);
var G__29016 = c__8291__auto___29014;
var G__29017 = cljs.core.count.call(null,c__8291__auto___29014);
var G__29018 = (0);
seq__27710_29003 = G__29015;
chunk__27711_29004 = G__29016;
count__27712_29005 = G__29017;
i__27713_29006 = G__29018;
continue;
} else {
var arg__13071__auto___29019 = cljs.core.first.call(null,seq__27710_29013__$1);
a__13070__auto__.push(arg__13071__auto___29019);

var G__29020 = cljs.core.next.call(null,seq__27710_29013__$1);
var G__29021 = null;
var G__29022 = (0);
var G__29023 = (0);
seq__27710_29003 = G__29020;
chunk__27711_29004 = G__29021;
count__27712_29005 = G__29022;
i__27713_29006 = G__29023;
continue;
}
} else {
}
}
break;
}

return React.DOM.datalist.apply(null,a__13070__auto__);
};
var datalist = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29024__i = 0, G__29024__a = new Array(arguments.length -  0);
while (G__29024__i < G__29024__a.length) {G__29024__a[G__29024__i] = arguments[G__29024__i + 0]; ++G__29024__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29024__a,0);
} 
return datalist__delegate.call(this,args__13069__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__29025){
var args__13069__auto__ = cljs.core.seq(arglist__29025);
return datalist__delegate(args__13069__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27718_29026 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27719_29027 = null;
var count__27720_29028 = (0);
var i__27721_29029 = (0);
while(true){
if((i__27721_29029 < count__27720_29028)){
var arg__13071__auto___29030 = cljs.core._nth.call(null,chunk__27719_29027,i__27721_29029);
a__13070__auto__.push(arg__13071__auto___29030);

var G__29031 = seq__27718_29026;
var G__29032 = chunk__27719_29027;
var G__29033 = count__27720_29028;
var G__29034 = (i__27721_29029 + (1));
seq__27718_29026 = G__29031;
chunk__27719_29027 = G__29032;
count__27720_29028 = G__29033;
i__27721_29029 = G__29034;
continue;
} else {
var temp__4126__auto___29035 = cljs.core.seq.call(null,seq__27718_29026);
if(temp__4126__auto___29035){
var seq__27718_29036__$1 = temp__4126__auto___29035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27718_29036__$1)){
var c__8291__auto___29037 = cljs.core.chunk_first.call(null,seq__27718_29036__$1);
var G__29038 = cljs.core.chunk_rest.call(null,seq__27718_29036__$1);
var G__29039 = c__8291__auto___29037;
var G__29040 = cljs.core.count.call(null,c__8291__auto___29037);
var G__29041 = (0);
seq__27718_29026 = G__29038;
chunk__27719_29027 = G__29039;
count__27720_29028 = G__29040;
i__27721_29029 = G__29041;
continue;
} else {
var arg__13071__auto___29042 = cljs.core.first.call(null,seq__27718_29036__$1);
a__13070__auto__.push(arg__13071__auto___29042);

var G__29043 = cljs.core.next.call(null,seq__27718_29036__$1);
var G__29044 = null;
var G__29045 = (0);
var G__29046 = (0);
seq__27718_29026 = G__29043;
chunk__27719_29027 = G__29044;
count__27720_29028 = G__29045;
i__27721_29029 = G__29046;
continue;
}
} else {
}
}
break;
}

return React.DOM.dd.apply(null,a__13070__auto__);
};
var dd = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29047__i = 0, G__29047__a = new Array(arguments.length -  0);
while (G__29047__i < G__29047__a.length) {G__29047__a[G__29047__i] = arguments[G__29047__i + 0]; ++G__29047__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29047__a,0);
} 
return dd__delegate.call(this,args__13069__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__29048){
var args__13069__auto__ = cljs.core.seq(arglist__29048);
return dd__delegate(args__13069__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27726_29049 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27727_29050 = null;
var count__27728_29051 = (0);
var i__27729_29052 = (0);
while(true){
if((i__27729_29052 < count__27728_29051)){
var arg__13071__auto___29053 = cljs.core._nth.call(null,chunk__27727_29050,i__27729_29052);
a__13070__auto__.push(arg__13071__auto___29053);

var G__29054 = seq__27726_29049;
var G__29055 = chunk__27727_29050;
var G__29056 = count__27728_29051;
var G__29057 = (i__27729_29052 + (1));
seq__27726_29049 = G__29054;
chunk__27727_29050 = G__29055;
count__27728_29051 = G__29056;
i__27729_29052 = G__29057;
continue;
} else {
var temp__4126__auto___29058 = cljs.core.seq.call(null,seq__27726_29049);
if(temp__4126__auto___29058){
var seq__27726_29059__$1 = temp__4126__auto___29058;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27726_29059__$1)){
var c__8291__auto___29060 = cljs.core.chunk_first.call(null,seq__27726_29059__$1);
var G__29061 = cljs.core.chunk_rest.call(null,seq__27726_29059__$1);
var G__29062 = c__8291__auto___29060;
var G__29063 = cljs.core.count.call(null,c__8291__auto___29060);
var G__29064 = (0);
seq__27726_29049 = G__29061;
chunk__27727_29050 = G__29062;
count__27728_29051 = G__29063;
i__27729_29052 = G__29064;
continue;
} else {
var arg__13071__auto___29065 = cljs.core.first.call(null,seq__27726_29059__$1);
a__13070__auto__.push(arg__13071__auto___29065);

var G__29066 = cljs.core.next.call(null,seq__27726_29059__$1);
var G__29067 = null;
var G__29068 = (0);
var G__29069 = (0);
seq__27726_29049 = G__29066;
chunk__27727_29050 = G__29067;
count__27728_29051 = G__29068;
i__27729_29052 = G__29069;
continue;
}
} else {
}
}
break;
}

return React.DOM.del.apply(null,a__13070__auto__);
};
var del = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29070__i = 0, G__29070__a = new Array(arguments.length -  0);
while (G__29070__i < G__29070__a.length) {G__29070__a[G__29070__i] = arguments[G__29070__i + 0]; ++G__29070__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29070__a,0);
} 
return del__delegate.call(this,args__13069__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__29071){
var args__13069__auto__ = cljs.core.seq(arglist__29071);
return del__delegate(args__13069__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27734_29072 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27735_29073 = null;
var count__27736_29074 = (0);
var i__27737_29075 = (0);
while(true){
if((i__27737_29075 < count__27736_29074)){
var arg__13071__auto___29076 = cljs.core._nth.call(null,chunk__27735_29073,i__27737_29075);
a__13070__auto__.push(arg__13071__auto___29076);

var G__29077 = seq__27734_29072;
var G__29078 = chunk__27735_29073;
var G__29079 = count__27736_29074;
var G__29080 = (i__27737_29075 + (1));
seq__27734_29072 = G__29077;
chunk__27735_29073 = G__29078;
count__27736_29074 = G__29079;
i__27737_29075 = G__29080;
continue;
} else {
var temp__4126__auto___29081 = cljs.core.seq.call(null,seq__27734_29072);
if(temp__4126__auto___29081){
var seq__27734_29082__$1 = temp__4126__auto___29081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27734_29082__$1)){
var c__8291__auto___29083 = cljs.core.chunk_first.call(null,seq__27734_29082__$1);
var G__29084 = cljs.core.chunk_rest.call(null,seq__27734_29082__$1);
var G__29085 = c__8291__auto___29083;
var G__29086 = cljs.core.count.call(null,c__8291__auto___29083);
var G__29087 = (0);
seq__27734_29072 = G__29084;
chunk__27735_29073 = G__29085;
count__27736_29074 = G__29086;
i__27737_29075 = G__29087;
continue;
} else {
var arg__13071__auto___29088 = cljs.core.first.call(null,seq__27734_29082__$1);
a__13070__auto__.push(arg__13071__auto___29088);

var G__29089 = cljs.core.next.call(null,seq__27734_29082__$1);
var G__29090 = null;
var G__29091 = (0);
var G__29092 = (0);
seq__27734_29072 = G__29089;
chunk__27735_29073 = G__29090;
count__27736_29074 = G__29091;
i__27737_29075 = G__29092;
continue;
}
} else {
}
}
break;
}

return React.DOM.details.apply(null,a__13070__auto__);
};
var details = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29093__i = 0, G__29093__a = new Array(arguments.length -  0);
while (G__29093__i < G__29093__a.length) {G__29093__a[G__29093__i] = arguments[G__29093__i + 0]; ++G__29093__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29093__a,0);
} 
return details__delegate.call(this,args__13069__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__29094){
var args__13069__auto__ = cljs.core.seq(arglist__29094);
return details__delegate(args__13069__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27742_29095 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27743_29096 = null;
var count__27744_29097 = (0);
var i__27745_29098 = (0);
while(true){
if((i__27745_29098 < count__27744_29097)){
var arg__13071__auto___29099 = cljs.core._nth.call(null,chunk__27743_29096,i__27745_29098);
a__13070__auto__.push(arg__13071__auto___29099);

var G__29100 = seq__27742_29095;
var G__29101 = chunk__27743_29096;
var G__29102 = count__27744_29097;
var G__29103 = (i__27745_29098 + (1));
seq__27742_29095 = G__29100;
chunk__27743_29096 = G__29101;
count__27744_29097 = G__29102;
i__27745_29098 = G__29103;
continue;
} else {
var temp__4126__auto___29104 = cljs.core.seq.call(null,seq__27742_29095);
if(temp__4126__auto___29104){
var seq__27742_29105__$1 = temp__4126__auto___29104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27742_29105__$1)){
var c__8291__auto___29106 = cljs.core.chunk_first.call(null,seq__27742_29105__$1);
var G__29107 = cljs.core.chunk_rest.call(null,seq__27742_29105__$1);
var G__29108 = c__8291__auto___29106;
var G__29109 = cljs.core.count.call(null,c__8291__auto___29106);
var G__29110 = (0);
seq__27742_29095 = G__29107;
chunk__27743_29096 = G__29108;
count__27744_29097 = G__29109;
i__27745_29098 = G__29110;
continue;
} else {
var arg__13071__auto___29111 = cljs.core.first.call(null,seq__27742_29105__$1);
a__13070__auto__.push(arg__13071__auto___29111);

var G__29112 = cljs.core.next.call(null,seq__27742_29105__$1);
var G__29113 = null;
var G__29114 = (0);
var G__29115 = (0);
seq__27742_29095 = G__29112;
chunk__27743_29096 = G__29113;
count__27744_29097 = G__29114;
i__27745_29098 = G__29115;
continue;
}
} else {
}
}
break;
}

return React.DOM.dfn.apply(null,a__13070__auto__);
};
var dfn = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29116__i = 0, G__29116__a = new Array(arguments.length -  0);
while (G__29116__i < G__29116__a.length) {G__29116__a[G__29116__i] = arguments[G__29116__i + 0]; ++G__29116__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29116__a,0);
} 
return dfn__delegate.call(this,args__13069__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__29117){
var args__13069__auto__ = cljs.core.seq(arglist__29117);
return dfn__delegate(args__13069__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27750_29118 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27751_29119 = null;
var count__27752_29120 = (0);
var i__27753_29121 = (0);
while(true){
if((i__27753_29121 < count__27752_29120)){
var arg__13071__auto___29122 = cljs.core._nth.call(null,chunk__27751_29119,i__27753_29121);
a__13070__auto__.push(arg__13071__auto___29122);

var G__29123 = seq__27750_29118;
var G__29124 = chunk__27751_29119;
var G__29125 = count__27752_29120;
var G__29126 = (i__27753_29121 + (1));
seq__27750_29118 = G__29123;
chunk__27751_29119 = G__29124;
count__27752_29120 = G__29125;
i__27753_29121 = G__29126;
continue;
} else {
var temp__4126__auto___29127 = cljs.core.seq.call(null,seq__27750_29118);
if(temp__4126__auto___29127){
var seq__27750_29128__$1 = temp__4126__auto___29127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27750_29128__$1)){
var c__8291__auto___29129 = cljs.core.chunk_first.call(null,seq__27750_29128__$1);
var G__29130 = cljs.core.chunk_rest.call(null,seq__27750_29128__$1);
var G__29131 = c__8291__auto___29129;
var G__29132 = cljs.core.count.call(null,c__8291__auto___29129);
var G__29133 = (0);
seq__27750_29118 = G__29130;
chunk__27751_29119 = G__29131;
count__27752_29120 = G__29132;
i__27753_29121 = G__29133;
continue;
} else {
var arg__13071__auto___29134 = cljs.core.first.call(null,seq__27750_29128__$1);
a__13070__auto__.push(arg__13071__auto___29134);

var G__29135 = cljs.core.next.call(null,seq__27750_29128__$1);
var G__29136 = null;
var G__29137 = (0);
var G__29138 = (0);
seq__27750_29118 = G__29135;
chunk__27751_29119 = G__29136;
count__27752_29120 = G__29137;
i__27753_29121 = G__29138;
continue;
}
} else {
}
}
break;
}

return React.DOM.div.apply(null,a__13070__auto__);
};
var div = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29139__i = 0, G__29139__a = new Array(arguments.length -  0);
while (G__29139__i < G__29139__a.length) {G__29139__a[G__29139__i] = arguments[G__29139__i + 0]; ++G__29139__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29139__a,0);
} 
return div__delegate.call(this,args__13069__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__29140){
var args__13069__auto__ = cljs.core.seq(arglist__29140);
return div__delegate(args__13069__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27758_29141 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27759_29142 = null;
var count__27760_29143 = (0);
var i__27761_29144 = (0);
while(true){
if((i__27761_29144 < count__27760_29143)){
var arg__13071__auto___29145 = cljs.core._nth.call(null,chunk__27759_29142,i__27761_29144);
a__13070__auto__.push(arg__13071__auto___29145);

var G__29146 = seq__27758_29141;
var G__29147 = chunk__27759_29142;
var G__29148 = count__27760_29143;
var G__29149 = (i__27761_29144 + (1));
seq__27758_29141 = G__29146;
chunk__27759_29142 = G__29147;
count__27760_29143 = G__29148;
i__27761_29144 = G__29149;
continue;
} else {
var temp__4126__auto___29150 = cljs.core.seq.call(null,seq__27758_29141);
if(temp__4126__auto___29150){
var seq__27758_29151__$1 = temp__4126__auto___29150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27758_29151__$1)){
var c__8291__auto___29152 = cljs.core.chunk_first.call(null,seq__27758_29151__$1);
var G__29153 = cljs.core.chunk_rest.call(null,seq__27758_29151__$1);
var G__29154 = c__8291__auto___29152;
var G__29155 = cljs.core.count.call(null,c__8291__auto___29152);
var G__29156 = (0);
seq__27758_29141 = G__29153;
chunk__27759_29142 = G__29154;
count__27760_29143 = G__29155;
i__27761_29144 = G__29156;
continue;
} else {
var arg__13071__auto___29157 = cljs.core.first.call(null,seq__27758_29151__$1);
a__13070__auto__.push(arg__13071__auto___29157);

var G__29158 = cljs.core.next.call(null,seq__27758_29151__$1);
var G__29159 = null;
var G__29160 = (0);
var G__29161 = (0);
seq__27758_29141 = G__29158;
chunk__27759_29142 = G__29159;
count__27760_29143 = G__29160;
i__27761_29144 = G__29161;
continue;
}
} else {
}
}
break;
}

return React.DOM.dl.apply(null,a__13070__auto__);
};
var dl = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29162__i = 0, G__29162__a = new Array(arguments.length -  0);
while (G__29162__i < G__29162__a.length) {G__29162__a[G__29162__i] = arguments[G__29162__i + 0]; ++G__29162__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29162__a,0);
} 
return dl__delegate.call(this,args__13069__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__29163){
var args__13069__auto__ = cljs.core.seq(arglist__29163);
return dl__delegate(args__13069__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27766_29164 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27767_29165 = null;
var count__27768_29166 = (0);
var i__27769_29167 = (0);
while(true){
if((i__27769_29167 < count__27768_29166)){
var arg__13071__auto___29168 = cljs.core._nth.call(null,chunk__27767_29165,i__27769_29167);
a__13070__auto__.push(arg__13071__auto___29168);

var G__29169 = seq__27766_29164;
var G__29170 = chunk__27767_29165;
var G__29171 = count__27768_29166;
var G__29172 = (i__27769_29167 + (1));
seq__27766_29164 = G__29169;
chunk__27767_29165 = G__29170;
count__27768_29166 = G__29171;
i__27769_29167 = G__29172;
continue;
} else {
var temp__4126__auto___29173 = cljs.core.seq.call(null,seq__27766_29164);
if(temp__4126__auto___29173){
var seq__27766_29174__$1 = temp__4126__auto___29173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27766_29174__$1)){
var c__8291__auto___29175 = cljs.core.chunk_first.call(null,seq__27766_29174__$1);
var G__29176 = cljs.core.chunk_rest.call(null,seq__27766_29174__$1);
var G__29177 = c__8291__auto___29175;
var G__29178 = cljs.core.count.call(null,c__8291__auto___29175);
var G__29179 = (0);
seq__27766_29164 = G__29176;
chunk__27767_29165 = G__29177;
count__27768_29166 = G__29178;
i__27769_29167 = G__29179;
continue;
} else {
var arg__13071__auto___29180 = cljs.core.first.call(null,seq__27766_29174__$1);
a__13070__auto__.push(arg__13071__auto___29180);

var G__29181 = cljs.core.next.call(null,seq__27766_29174__$1);
var G__29182 = null;
var G__29183 = (0);
var G__29184 = (0);
seq__27766_29164 = G__29181;
chunk__27767_29165 = G__29182;
count__27768_29166 = G__29183;
i__27769_29167 = G__29184;
continue;
}
} else {
}
}
break;
}

return React.DOM.dt.apply(null,a__13070__auto__);
};
var dt = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29185__i = 0, G__29185__a = new Array(arguments.length -  0);
while (G__29185__i < G__29185__a.length) {G__29185__a[G__29185__i] = arguments[G__29185__i + 0]; ++G__29185__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29185__a,0);
} 
return dt__delegate.call(this,args__13069__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__29186){
var args__13069__auto__ = cljs.core.seq(arglist__29186);
return dt__delegate(args__13069__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27774_29187 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27775_29188 = null;
var count__27776_29189 = (0);
var i__27777_29190 = (0);
while(true){
if((i__27777_29190 < count__27776_29189)){
var arg__13071__auto___29191 = cljs.core._nth.call(null,chunk__27775_29188,i__27777_29190);
a__13070__auto__.push(arg__13071__auto___29191);

var G__29192 = seq__27774_29187;
var G__29193 = chunk__27775_29188;
var G__29194 = count__27776_29189;
var G__29195 = (i__27777_29190 + (1));
seq__27774_29187 = G__29192;
chunk__27775_29188 = G__29193;
count__27776_29189 = G__29194;
i__27777_29190 = G__29195;
continue;
} else {
var temp__4126__auto___29196 = cljs.core.seq.call(null,seq__27774_29187);
if(temp__4126__auto___29196){
var seq__27774_29197__$1 = temp__4126__auto___29196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27774_29197__$1)){
var c__8291__auto___29198 = cljs.core.chunk_first.call(null,seq__27774_29197__$1);
var G__29199 = cljs.core.chunk_rest.call(null,seq__27774_29197__$1);
var G__29200 = c__8291__auto___29198;
var G__29201 = cljs.core.count.call(null,c__8291__auto___29198);
var G__29202 = (0);
seq__27774_29187 = G__29199;
chunk__27775_29188 = G__29200;
count__27776_29189 = G__29201;
i__27777_29190 = G__29202;
continue;
} else {
var arg__13071__auto___29203 = cljs.core.first.call(null,seq__27774_29197__$1);
a__13070__auto__.push(arg__13071__auto___29203);

var G__29204 = cljs.core.next.call(null,seq__27774_29197__$1);
var G__29205 = null;
var G__29206 = (0);
var G__29207 = (0);
seq__27774_29187 = G__29204;
chunk__27775_29188 = G__29205;
count__27776_29189 = G__29206;
i__27777_29190 = G__29207;
continue;
}
} else {
}
}
break;
}

return React.DOM.em.apply(null,a__13070__auto__);
};
var em = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29208__i = 0, G__29208__a = new Array(arguments.length -  0);
while (G__29208__i < G__29208__a.length) {G__29208__a[G__29208__i] = arguments[G__29208__i + 0]; ++G__29208__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29208__a,0);
} 
return em__delegate.call(this,args__13069__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__29209){
var args__13069__auto__ = cljs.core.seq(arglist__29209);
return em__delegate(args__13069__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27790_29210 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27791_29211 = null;
var count__27792_29212 = (0);
var i__27793_29213 = (0);
while(true){
if((i__27793_29213 < count__27792_29212)){
var arg__13071__auto___29214 = cljs.core._nth.call(null,chunk__27791_29211,i__27793_29213);
a__13070__auto__.push(arg__13071__auto___29214);

var G__29215 = seq__27790_29210;
var G__29216 = chunk__27791_29211;
var G__29217 = count__27792_29212;
var G__29218 = (i__27793_29213 + (1));
seq__27790_29210 = G__29215;
chunk__27791_29211 = G__29216;
count__27792_29212 = G__29217;
i__27793_29213 = G__29218;
continue;
} else {
var temp__4126__auto___29219 = cljs.core.seq.call(null,seq__27790_29210);
if(temp__4126__auto___29219){
var seq__27790_29220__$1 = temp__4126__auto___29219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27790_29220__$1)){
var c__8291__auto___29221 = cljs.core.chunk_first.call(null,seq__27790_29220__$1);
var G__29222 = cljs.core.chunk_rest.call(null,seq__27790_29220__$1);
var G__29223 = c__8291__auto___29221;
var G__29224 = cljs.core.count.call(null,c__8291__auto___29221);
var G__29225 = (0);
seq__27790_29210 = G__29222;
chunk__27791_29211 = G__29223;
count__27792_29212 = G__29224;
i__27793_29213 = G__29225;
continue;
} else {
var arg__13071__auto___29226 = cljs.core.first.call(null,seq__27790_29220__$1);
a__13070__auto__.push(arg__13071__auto___29226);

var G__29227 = cljs.core.next.call(null,seq__27790_29220__$1);
var G__29228 = null;
var G__29229 = (0);
var G__29230 = (0);
seq__27790_29210 = G__29227;
chunk__27791_29211 = G__29228;
count__27792_29212 = G__29229;
i__27793_29213 = G__29230;
continue;
}
} else {
}
}
break;
}

return React.DOM.embed.apply(null,a__13070__auto__);
};
var embed = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29231__i = 0, G__29231__a = new Array(arguments.length -  0);
while (G__29231__i < G__29231__a.length) {G__29231__a[G__29231__i] = arguments[G__29231__i + 0]; ++G__29231__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29231__a,0);
} 
return embed__delegate.call(this,args__13069__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__29232){
var args__13069__auto__ = cljs.core.seq(arglist__29232);
return embed__delegate(args__13069__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27798_29233 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27799_29234 = null;
var count__27800_29235 = (0);
var i__27801_29236 = (0);
while(true){
if((i__27801_29236 < count__27800_29235)){
var arg__13071__auto___29237 = cljs.core._nth.call(null,chunk__27799_29234,i__27801_29236);
a__13070__auto__.push(arg__13071__auto___29237);

var G__29238 = seq__27798_29233;
var G__29239 = chunk__27799_29234;
var G__29240 = count__27800_29235;
var G__29241 = (i__27801_29236 + (1));
seq__27798_29233 = G__29238;
chunk__27799_29234 = G__29239;
count__27800_29235 = G__29240;
i__27801_29236 = G__29241;
continue;
} else {
var temp__4126__auto___29242 = cljs.core.seq.call(null,seq__27798_29233);
if(temp__4126__auto___29242){
var seq__27798_29243__$1 = temp__4126__auto___29242;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27798_29243__$1)){
var c__8291__auto___29244 = cljs.core.chunk_first.call(null,seq__27798_29243__$1);
var G__29245 = cljs.core.chunk_rest.call(null,seq__27798_29243__$1);
var G__29246 = c__8291__auto___29244;
var G__29247 = cljs.core.count.call(null,c__8291__auto___29244);
var G__29248 = (0);
seq__27798_29233 = G__29245;
chunk__27799_29234 = G__29246;
count__27800_29235 = G__29247;
i__27801_29236 = G__29248;
continue;
} else {
var arg__13071__auto___29249 = cljs.core.first.call(null,seq__27798_29243__$1);
a__13070__auto__.push(arg__13071__auto___29249);

var G__29250 = cljs.core.next.call(null,seq__27798_29243__$1);
var G__29251 = null;
var G__29252 = (0);
var G__29253 = (0);
seq__27798_29233 = G__29250;
chunk__27799_29234 = G__29251;
count__27800_29235 = G__29252;
i__27801_29236 = G__29253;
continue;
}
} else {
}
}
break;
}

return React.DOM.fieldset.apply(null,a__13070__auto__);
};
var fieldset = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29254__i = 0, G__29254__a = new Array(arguments.length -  0);
while (G__29254__i < G__29254__a.length) {G__29254__a[G__29254__i] = arguments[G__29254__i + 0]; ++G__29254__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29254__a,0);
} 
return fieldset__delegate.call(this,args__13069__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__29255){
var args__13069__auto__ = cljs.core.seq(arglist__29255);
return fieldset__delegate(args__13069__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27806_29256 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27807_29257 = null;
var count__27808_29258 = (0);
var i__27809_29259 = (0);
while(true){
if((i__27809_29259 < count__27808_29258)){
var arg__13071__auto___29260 = cljs.core._nth.call(null,chunk__27807_29257,i__27809_29259);
a__13070__auto__.push(arg__13071__auto___29260);

var G__29261 = seq__27806_29256;
var G__29262 = chunk__27807_29257;
var G__29263 = count__27808_29258;
var G__29264 = (i__27809_29259 + (1));
seq__27806_29256 = G__29261;
chunk__27807_29257 = G__29262;
count__27808_29258 = G__29263;
i__27809_29259 = G__29264;
continue;
} else {
var temp__4126__auto___29265 = cljs.core.seq.call(null,seq__27806_29256);
if(temp__4126__auto___29265){
var seq__27806_29266__$1 = temp__4126__auto___29265;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27806_29266__$1)){
var c__8291__auto___29267 = cljs.core.chunk_first.call(null,seq__27806_29266__$1);
var G__29268 = cljs.core.chunk_rest.call(null,seq__27806_29266__$1);
var G__29269 = c__8291__auto___29267;
var G__29270 = cljs.core.count.call(null,c__8291__auto___29267);
var G__29271 = (0);
seq__27806_29256 = G__29268;
chunk__27807_29257 = G__29269;
count__27808_29258 = G__29270;
i__27809_29259 = G__29271;
continue;
} else {
var arg__13071__auto___29272 = cljs.core.first.call(null,seq__27806_29266__$1);
a__13070__auto__.push(arg__13071__auto___29272);

var G__29273 = cljs.core.next.call(null,seq__27806_29266__$1);
var G__29274 = null;
var G__29275 = (0);
var G__29276 = (0);
seq__27806_29256 = G__29273;
chunk__27807_29257 = G__29274;
count__27808_29258 = G__29275;
i__27809_29259 = G__29276;
continue;
}
} else {
}
}
break;
}

return React.DOM.figcaption.apply(null,a__13070__auto__);
};
var figcaption = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29277__i = 0, G__29277__a = new Array(arguments.length -  0);
while (G__29277__i < G__29277__a.length) {G__29277__a[G__29277__i] = arguments[G__29277__i + 0]; ++G__29277__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29277__a,0);
} 
return figcaption__delegate.call(this,args__13069__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__29278){
var args__13069__auto__ = cljs.core.seq(arglist__29278);
return figcaption__delegate(args__13069__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27814_29279 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27815_29280 = null;
var count__27816_29281 = (0);
var i__27817_29282 = (0);
while(true){
if((i__27817_29282 < count__27816_29281)){
var arg__13071__auto___29283 = cljs.core._nth.call(null,chunk__27815_29280,i__27817_29282);
a__13070__auto__.push(arg__13071__auto___29283);

var G__29284 = seq__27814_29279;
var G__29285 = chunk__27815_29280;
var G__29286 = count__27816_29281;
var G__29287 = (i__27817_29282 + (1));
seq__27814_29279 = G__29284;
chunk__27815_29280 = G__29285;
count__27816_29281 = G__29286;
i__27817_29282 = G__29287;
continue;
} else {
var temp__4126__auto___29288 = cljs.core.seq.call(null,seq__27814_29279);
if(temp__4126__auto___29288){
var seq__27814_29289__$1 = temp__4126__auto___29288;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27814_29289__$1)){
var c__8291__auto___29290 = cljs.core.chunk_first.call(null,seq__27814_29289__$1);
var G__29291 = cljs.core.chunk_rest.call(null,seq__27814_29289__$1);
var G__29292 = c__8291__auto___29290;
var G__29293 = cljs.core.count.call(null,c__8291__auto___29290);
var G__29294 = (0);
seq__27814_29279 = G__29291;
chunk__27815_29280 = G__29292;
count__27816_29281 = G__29293;
i__27817_29282 = G__29294;
continue;
} else {
var arg__13071__auto___29295 = cljs.core.first.call(null,seq__27814_29289__$1);
a__13070__auto__.push(arg__13071__auto___29295);

var G__29296 = cljs.core.next.call(null,seq__27814_29289__$1);
var G__29297 = null;
var G__29298 = (0);
var G__29299 = (0);
seq__27814_29279 = G__29296;
chunk__27815_29280 = G__29297;
count__27816_29281 = G__29298;
i__27817_29282 = G__29299;
continue;
}
} else {
}
}
break;
}

return React.DOM.figure.apply(null,a__13070__auto__);
};
var figure = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29300__i = 0, G__29300__a = new Array(arguments.length -  0);
while (G__29300__i < G__29300__a.length) {G__29300__a[G__29300__i] = arguments[G__29300__i + 0]; ++G__29300__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29300__a,0);
} 
return figure__delegate.call(this,args__13069__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__29301){
var args__13069__auto__ = cljs.core.seq(arglist__29301);
return figure__delegate(args__13069__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27822_29302 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27823_29303 = null;
var count__27824_29304 = (0);
var i__27825_29305 = (0);
while(true){
if((i__27825_29305 < count__27824_29304)){
var arg__13071__auto___29306 = cljs.core._nth.call(null,chunk__27823_29303,i__27825_29305);
a__13070__auto__.push(arg__13071__auto___29306);

var G__29307 = seq__27822_29302;
var G__29308 = chunk__27823_29303;
var G__29309 = count__27824_29304;
var G__29310 = (i__27825_29305 + (1));
seq__27822_29302 = G__29307;
chunk__27823_29303 = G__29308;
count__27824_29304 = G__29309;
i__27825_29305 = G__29310;
continue;
} else {
var temp__4126__auto___29311 = cljs.core.seq.call(null,seq__27822_29302);
if(temp__4126__auto___29311){
var seq__27822_29312__$1 = temp__4126__auto___29311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27822_29312__$1)){
var c__8291__auto___29313 = cljs.core.chunk_first.call(null,seq__27822_29312__$1);
var G__29314 = cljs.core.chunk_rest.call(null,seq__27822_29312__$1);
var G__29315 = c__8291__auto___29313;
var G__29316 = cljs.core.count.call(null,c__8291__auto___29313);
var G__29317 = (0);
seq__27822_29302 = G__29314;
chunk__27823_29303 = G__29315;
count__27824_29304 = G__29316;
i__27825_29305 = G__29317;
continue;
} else {
var arg__13071__auto___29318 = cljs.core.first.call(null,seq__27822_29312__$1);
a__13070__auto__.push(arg__13071__auto___29318);

var G__29319 = cljs.core.next.call(null,seq__27822_29312__$1);
var G__29320 = null;
var G__29321 = (0);
var G__29322 = (0);
seq__27822_29302 = G__29319;
chunk__27823_29303 = G__29320;
count__27824_29304 = G__29321;
i__27825_29305 = G__29322;
continue;
}
} else {
}
}
break;
}

return React.DOM.footer.apply(null,a__13070__auto__);
};
var footer = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29323__i = 0, G__29323__a = new Array(arguments.length -  0);
while (G__29323__i < G__29323__a.length) {G__29323__a[G__29323__i] = arguments[G__29323__i + 0]; ++G__29323__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29323__a,0);
} 
return footer__delegate.call(this,args__13069__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__29324){
var args__13069__auto__ = cljs.core.seq(arglist__29324);
return footer__delegate(args__13069__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27830_29325 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27831_29326 = null;
var count__27832_29327 = (0);
var i__27833_29328 = (0);
while(true){
if((i__27833_29328 < count__27832_29327)){
var arg__13071__auto___29329 = cljs.core._nth.call(null,chunk__27831_29326,i__27833_29328);
a__13070__auto__.push(arg__13071__auto___29329);

var G__29330 = seq__27830_29325;
var G__29331 = chunk__27831_29326;
var G__29332 = count__27832_29327;
var G__29333 = (i__27833_29328 + (1));
seq__27830_29325 = G__29330;
chunk__27831_29326 = G__29331;
count__27832_29327 = G__29332;
i__27833_29328 = G__29333;
continue;
} else {
var temp__4126__auto___29334 = cljs.core.seq.call(null,seq__27830_29325);
if(temp__4126__auto___29334){
var seq__27830_29335__$1 = temp__4126__auto___29334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27830_29335__$1)){
var c__8291__auto___29336 = cljs.core.chunk_first.call(null,seq__27830_29335__$1);
var G__29337 = cljs.core.chunk_rest.call(null,seq__27830_29335__$1);
var G__29338 = c__8291__auto___29336;
var G__29339 = cljs.core.count.call(null,c__8291__auto___29336);
var G__29340 = (0);
seq__27830_29325 = G__29337;
chunk__27831_29326 = G__29338;
count__27832_29327 = G__29339;
i__27833_29328 = G__29340;
continue;
} else {
var arg__13071__auto___29341 = cljs.core.first.call(null,seq__27830_29335__$1);
a__13070__auto__.push(arg__13071__auto___29341);

var G__29342 = cljs.core.next.call(null,seq__27830_29335__$1);
var G__29343 = null;
var G__29344 = (0);
var G__29345 = (0);
seq__27830_29325 = G__29342;
chunk__27831_29326 = G__29343;
count__27832_29327 = G__29344;
i__27833_29328 = G__29345;
continue;
}
} else {
}
}
break;
}

return React.DOM.form.apply(null,a__13070__auto__);
};
var form = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29346__i = 0, G__29346__a = new Array(arguments.length -  0);
while (G__29346__i < G__29346__a.length) {G__29346__a[G__29346__i] = arguments[G__29346__i + 0]; ++G__29346__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29346__a,0);
} 
return form__delegate.call(this,args__13069__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__29347){
var args__13069__auto__ = cljs.core.seq(arglist__29347);
return form__delegate(args__13069__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27838_29348 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27839_29349 = null;
var count__27840_29350 = (0);
var i__27841_29351 = (0);
while(true){
if((i__27841_29351 < count__27840_29350)){
var arg__13071__auto___29352 = cljs.core._nth.call(null,chunk__27839_29349,i__27841_29351);
a__13070__auto__.push(arg__13071__auto___29352);

var G__29353 = seq__27838_29348;
var G__29354 = chunk__27839_29349;
var G__29355 = count__27840_29350;
var G__29356 = (i__27841_29351 + (1));
seq__27838_29348 = G__29353;
chunk__27839_29349 = G__29354;
count__27840_29350 = G__29355;
i__27841_29351 = G__29356;
continue;
} else {
var temp__4126__auto___29357 = cljs.core.seq.call(null,seq__27838_29348);
if(temp__4126__auto___29357){
var seq__27838_29358__$1 = temp__4126__auto___29357;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27838_29358__$1)){
var c__8291__auto___29359 = cljs.core.chunk_first.call(null,seq__27838_29358__$1);
var G__29360 = cljs.core.chunk_rest.call(null,seq__27838_29358__$1);
var G__29361 = c__8291__auto___29359;
var G__29362 = cljs.core.count.call(null,c__8291__auto___29359);
var G__29363 = (0);
seq__27838_29348 = G__29360;
chunk__27839_29349 = G__29361;
count__27840_29350 = G__29362;
i__27841_29351 = G__29363;
continue;
} else {
var arg__13071__auto___29364 = cljs.core.first.call(null,seq__27838_29358__$1);
a__13070__auto__.push(arg__13071__auto___29364);

var G__29365 = cljs.core.next.call(null,seq__27838_29358__$1);
var G__29366 = null;
var G__29367 = (0);
var G__29368 = (0);
seq__27838_29348 = G__29365;
chunk__27839_29349 = G__29366;
count__27840_29350 = G__29367;
i__27841_29351 = G__29368;
continue;
}
} else {
}
}
break;
}

return React.DOM.h1.apply(null,a__13070__auto__);
};
var h1 = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29369__i = 0, G__29369__a = new Array(arguments.length -  0);
while (G__29369__i < G__29369__a.length) {G__29369__a[G__29369__i] = arguments[G__29369__i + 0]; ++G__29369__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29369__a,0);
} 
return h1__delegate.call(this,args__13069__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__29370){
var args__13069__auto__ = cljs.core.seq(arglist__29370);
return h1__delegate(args__13069__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27846_29371 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27847_29372 = null;
var count__27848_29373 = (0);
var i__27849_29374 = (0);
while(true){
if((i__27849_29374 < count__27848_29373)){
var arg__13071__auto___29375 = cljs.core._nth.call(null,chunk__27847_29372,i__27849_29374);
a__13070__auto__.push(arg__13071__auto___29375);

var G__29376 = seq__27846_29371;
var G__29377 = chunk__27847_29372;
var G__29378 = count__27848_29373;
var G__29379 = (i__27849_29374 + (1));
seq__27846_29371 = G__29376;
chunk__27847_29372 = G__29377;
count__27848_29373 = G__29378;
i__27849_29374 = G__29379;
continue;
} else {
var temp__4126__auto___29380 = cljs.core.seq.call(null,seq__27846_29371);
if(temp__4126__auto___29380){
var seq__27846_29381__$1 = temp__4126__auto___29380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27846_29381__$1)){
var c__8291__auto___29382 = cljs.core.chunk_first.call(null,seq__27846_29381__$1);
var G__29383 = cljs.core.chunk_rest.call(null,seq__27846_29381__$1);
var G__29384 = c__8291__auto___29382;
var G__29385 = cljs.core.count.call(null,c__8291__auto___29382);
var G__29386 = (0);
seq__27846_29371 = G__29383;
chunk__27847_29372 = G__29384;
count__27848_29373 = G__29385;
i__27849_29374 = G__29386;
continue;
} else {
var arg__13071__auto___29387 = cljs.core.first.call(null,seq__27846_29381__$1);
a__13070__auto__.push(arg__13071__auto___29387);

var G__29388 = cljs.core.next.call(null,seq__27846_29381__$1);
var G__29389 = null;
var G__29390 = (0);
var G__29391 = (0);
seq__27846_29371 = G__29388;
chunk__27847_29372 = G__29389;
count__27848_29373 = G__29390;
i__27849_29374 = G__29391;
continue;
}
} else {
}
}
break;
}

return React.DOM.h2.apply(null,a__13070__auto__);
};
var h2 = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29392__i = 0, G__29392__a = new Array(arguments.length -  0);
while (G__29392__i < G__29392__a.length) {G__29392__a[G__29392__i] = arguments[G__29392__i + 0]; ++G__29392__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29392__a,0);
} 
return h2__delegate.call(this,args__13069__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__29393){
var args__13069__auto__ = cljs.core.seq(arglist__29393);
return h2__delegate(args__13069__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27854_29394 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27855_29395 = null;
var count__27856_29396 = (0);
var i__27857_29397 = (0);
while(true){
if((i__27857_29397 < count__27856_29396)){
var arg__13071__auto___29398 = cljs.core._nth.call(null,chunk__27855_29395,i__27857_29397);
a__13070__auto__.push(arg__13071__auto___29398);

var G__29399 = seq__27854_29394;
var G__29400 = chunk__27855_29395;
var G__29401 = count__27856_29396;
var G__29402 = (i__27857_29397 + (1));
seq__27854_29394 = G__29399;
chunk__27855_29395 = G__29400;
count__27856_29396 = G__29401;
i__27857_29397 = G__29402;
continue;
} else {
var temp__4126__auto___29403 = cljs.core.seq.call(null,seq__27854_29394);
if(temp__4126__auto___29403){
var seq__27854_29404__$1 = temp__4126__auto___29403;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27854_29404__$1)){
var c__8291__auto___29405 = cljs.core.chunk_first.call(null,seq__27854_29404__$1);
var G__29406 = cljs.core.chunk_rest.call(null,seq__27854_29404__$1);
var G__29407 = c__8291__auto___29405;
var G__29408 = cljs.core.count.call(null,c__8291__auto___29405);
var G__29409 = (0);
seq__27854_29394 = G__29406;
chunk__27855_29395 = G__29407;
count__27856_29396 = G__29408;
i__27857_29397 = G__29409;
continue;
} else {
var arg__13071__auto___29410 = cljs.core.first.call(null,seq__27854_29404__$1);
a__13070__auto__.push(arg__13071__auto___29410);

var G__29411 = cljs.core.next.call(null,seq__27854_29404__$1);
var G__29412 = null;
var G__29413 = (0);
var G__29414 = (0);
seq__27854_29394 = G__29411;
chunk__27855_29395 = G__29412;
count__27856_29396 = G__29413;
i__27857_29397 = G__29414;
continue;
}
} else {
}
}
break;
}

return React.DOM.h3.apply(null,a__13070__auto__);
};
var h3 = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29415__i = 0, G__29415__a = new Array(arguments.length -  0);
while (G__29415__i < G__29415__a.length) {G__29415__a[G__29415__i] = arguments[G__29415__i + 0]; ++G__29415__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29415__a,0);
} 
return h3__delegate.call(this,args__13069__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__29416){
var args__13069__auto__ = cljs.core.seq(arglist__29416);
return h3__delegate(args__13069__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27862_29417 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27863_29418 = null;
var count__27864_29419 = (0);
var i__27865_29420 = (0);
while(true){
if((i__27865_29420 < count__27864_29419)){
var arg__13071__auto___29421 = cljs.core._nth.call(null,chunk__27863_29418,i__27865_29420);
a__13070__auto__.push(arg__13071__auto___29421);

var G__29422 = seq__27862_29417;
var G__29423 = chunk__27863_29418;
var G__29424 = count__27864_29419;
var G__29425 = (i__27865_29420 + (1));
seq__27862_29417 = G__29422;
chunk__27863_29418 = G__29423;
count__27864_29419 = G__29424;
i__27865_29420 = G__29425;
continue;
} else {
var temp__4126__auto___29426 = cljs.core.seq.call(null,seq__27862_29417);
if(temp__4126__auto___29426){
var seq__27862_29427__$1 = temp__4126__auto___29426;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27862_29427__$1)){
var c__8291__auto___29428 = cljs.core.chunk_first.call(null,seq__27862_29427__$1);
var G__29429 = cljs.core.chunk_rest.call(null,seq__27862_29427__$1);
var G__29430 = c__8291__auto___29428;
var G__29431 = cljs.core.count.call(null,c__8291__auto___29428);
var G__29432 = (0);
seq__27862_29417 = G__29429;
chunk__27863_29418 = G__29430;
count__27864_29419 = G__29431;
i__27865_29420 = G__29432;
continue;
} else {
var arg__13071__auto___29433 = cljs.core.first.call(null,seq__27862_29427__$1);
a__13070__auto__.push(arg__13071__auto___29433);

var G__29434 = cljs.core.next.call(null,seq__27862_29427__$1);
var G__29435 = null;
var G__29436 = (0);
var G__29437 = (0);
seq__27862_29417 = G__29434;
chunk__27863_29418 = G__29435;
count__27864_29419 = G__29436;
i__27865_29420 = G__29437;
continue;
}
} else {
}
}
break;
}

return React.DOM.h4.apply(null,a__13070__auto__);
};
var h4 = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29438__i = 0, G__29438__a = new Array(arguments.length -  0);
while (G__29438__i < G__29438__a.length) {G__29438__a[G__29438__i] = arguments[G__29438__i + 0]; ++G__29438__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29438__a,0);
} 
return h4__delegate.call(this,args__13069__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__29439){
var args__13069__auto__ = cljs.core.seq(arglist__29439);
return h4__delegate(args__13069__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27870_29440 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27871_29441 = null;
var count__27872_29442 = (0);
var i__27873_29443 = (0);
while(true){
if((i__27873_29443 < count__27872_29442)){
var arg__13071__auto___29444 = cljs.core._nth.call(null,chunk__27871_29441,i__27873_29443);
a__13070__auto__.push(arg__13071__auto___29444);

var G__29445 = seq__27870_29440;
var G__29446 = chunk__27871_29441;
var G__29447 = count__27872_29442;
var G__29448 = (i__27873_29443 + (1));
seq__27870_29440 = G__29445;
chunk__27871_29441 = G__29446;
count__27872_29442 = G__29447;
i__27873_29443 = G__29448;
continue;
} else {
var temp__4126__auto___29449 = cljs.core.seq.call(null,seq__27870_29440);
if(temp__4126__auto___29449){
var seq__27870_29450__$1 = temp__4126__auto___29449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27870_29450__$1)){
var c__8291__auto___29451 = cljs.core.chunk_first.call(null,seq__27870_29450__$1);
var G__29452 = cljs.core.chunk_rest.call(null,seq__27870_29450__$1);
var G__29453 = c__8291__auto___29451;
var G__29454 = cljs.core.count.call(null,c__8291__auto___29451);
var G__29455 = (0);
seq__27870_29440 = G__29452;
chunk__27871_29441 = G__29453;
count__27872_29442 = G__29454;
i__27873_29443 = G__29455;
continue;
} else {
var arg__13071__auto___29456 = cljs.core.first.call(null,seq__27870_29450__$1);
a__13070__auto__.push(arg__13071__auto___29456);

var G__29457 = cljs.core.next.call(null,seq__27870_29450__$1);
var G__29458 = null;
var G__29459 = (0);
var G__29460 = (0);
seq__27870_29440 = G__29457;
chunk__27871_29441 = G__29458;
count__27872_29442 = G__29459;
i__27873_29443 = G__29460;
continue;
}
} else {
}
}
break;
}

return React.DOM.h5.apply(null,a__13070__auto__);
};
var h5 = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29461__i = 0, G__29461__a = new Array(arguments.length -  0);
while (G__29461__i < G__29461__a.length) {G__29461__a[G__29461__i] = arguments[G__29461__i + 0]; ++G__29461__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29461__a,0);
} 
return h5__delegate.call(this,args__13069__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__29462){
var args__13069__auto__ = cljs.core.seq(arglist__29462);
return h5__delegate(args__13069__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27878_29463 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27879_29464 = null;
var count__27880_29465 = (0);
var i__27881_29466 = (0);
while(true){
if((i__27881_29466 < count__27880_29465)){
var arg__13071__auto___29467 = cljs.core._nth.call(null,chunk__27879_29464,i__27881_29466);
a__13070__auto__.push(arg__13071__auto___29467);

var G__29468 = seq__27878_29463;
var G__29469 = chunk__27879_29464;
var G__29470 = count__27880_29465;
var G__29471 = (i__27881_29466 + (1));
seq__27878_29463 = G__29468;
chunk__27879_29464 = G__29469;
count__27880_29465 = G__29470;
i__27881_29466 = G__29471;
continue;
} else {
var temp__4126__auto___29472 = cljs.core.seq.call(null,seq__27878_29463);
if(temp__4126__auto___29472){
var seq__27878_29473__$1 = temp__4126__auto___29472;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27878_29473__$1)){
var c__8291__auto___29474 = cljs.core.chunk_first.call(null,seq__27878_29473__$1);
var G__29475 = cljs.core.chunk_rest.call(null,seq__27878_29473__$1);
var G__29476 = c__8291__auto___29474;
var G__29477 = cljs.core.count.call(null,c__8291__auto___29474);
var G__29478 = (0);
seq__27878_29463 = G__29475;
chunk__27879_29464 = G__29476;
count__27880_29465 = G__29477;
i__27881_29466 = G__29478;
continue;
} else {
var arg__13071__auto___29479 = cljs.core.first.call(null,seq__27878_29473__$1);
a__13070__auto__.push(arg__13071__auto___29479);

var G__29480 = cljs.core.next.call(null,seq__27878_29473__$1);
var G__29481 = null;
var G__29482 = (0);
var G__29483 = (0);
seq__27878_29463 = G__29480;
chunk__27879_29464 = G__29481;
count__27880_29465 = G__29482;
i__27881_29466 = G__29483;
continue;
}
} else {
}
}
break;
}

return React.DOM.h6.apply(null,a__13070__auto__);
};
var h6 = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29484__i = 0, G__29484__a = new Array(arguments.length -  0);
while (G__29484__i < G__29484__a.length) {G__29484__a[G__29484__i] = arguments[G__29484__i + 0]; ++G__29484__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29484__a,0);
} 
return h6__delegate.call(this,args__13069__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__29485){
var args__13069__auto__ = cljs.core.seq(arglist__29485);
return h6__delegate(args__13069__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27886_29486 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27887_29487 = null;
var count__27888_29488 = (0);
var i__27889_29489 = (0);
while(true){
if((i__27889_29489 < count__27888_29488)){
var arg__13071__auto___29490 = cljs.core._nth.call(null,chunk__27887_29487,i__27889_29489);
a__13070__auto__.push(arg__13071__auto___29490);

var G__29491 = seq__27886_29486;
var G__29492 = chunk__27887_29487;
var G__29493 = count__27888_29488;
var G__29494 = (i__27889_29489 + (1));
seq__27886_29486 = G__29491;
chunk__27887_29487 = G__29492;
count__27888_29488 = G__29493;
i__27889_29489 = G__29494;
continue;
} else {
var temp__4126__auto___29495 = cljs.core.seq.call(null,seq__27886_29486);
if(temp__4126__auto___29495){
var seq__27886_29496__$1 = temp__4126__auto___29495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27886_29496__$1)){
var c__8291__auto___29497 = cljs.core.chunk_first.call(null,seq__27886_29496__$1);
var G__29498 = cljs.core.chunk_rest.call(null,seq__27886_29496__$1);
var G__29499 = c__8291__auto___29497;
var G__29500 = cljs.core.count.call(null,c__8291__auto___29497);
var G__29501 = (0);
seq__27886_29486 = G__29498;
chunk__27887_29487 = G__29499;
count__27888_29488 = G__29500;
i__27889_29489 = G__29501;
continue;
} else {
var arg__13071__auto___29502 = cljs.core.first.call(null,seq__27886_29496__$1);
a__13070__auto__.push(arg__13071__auto___29502);

var G__29503 = cljs.core.next.call(null,seq__27886_29496__$1);
var G__29504 = null;
var G__29505 = (0);
var G__29506 = (0);
seq__27886_29486 = G__29503;
chunk__27887_29487 = G__29504;
count__27888_29488 = G__29505;
i__27889_29489 = G__29506;
continue;
}
} else {
}
}
break;
}

return React.DOM.head.apply(null,a__13070__auto__);
};
var head = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29507__i = 0, G__29507__a = new Array(arguments.length -  0);
while (G__29507__i < G__29507__a.length) {G__29507__a[G__29507__i] = arguments[G__29507__i + 0]; ++G__29507__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29507__a,0);
} 
return head__delegate.call(this,args__13069__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__29508){
var args__13069__auto__ = cljs.core.seq(arglist__29508);
return head__delegate(args__13069__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27894_29509 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27895_29510 = null;
var count__27896_29511 = (0);
var i__27897_29512 = (0);
while(true){
if((i__27897_29512 < count__27896_29511)){
var arg__13071__auto___29513 = cljs.core._nth.call(null,chunk__27895_29510,i__27897_29512);
a__13070__auto__.push(arg__13071__auto___29513);

var G__29514 = seq__27894_29509;
var G__29515 = chunk__27895_29510;
var G__29516 = count__27896_29511;
var G__29517 = (i__27897_29512 + (1));
seq__27894_29509 = G__29514;
chunk__27895_29510 = G__29515;
count__27896_29511 = G__29516;
i__27897_29512 = G__29517;
continue;
} else {
var temp__4126__auto___29518 = cljs.core.seq.call(null,seq__27894_29509);
if(temp__4126__auto___29518){
var seq__27894_29519__$1 = temp__4126__auto___29518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27894_29519__$1)){
var c__8291__auto___29520 = cljs.core.chunk_first.call(null,seq__27894_29519__$1);
var G__29521 = cljs.core.chunk_rest.call(null,seq__27894_29519__$1);
var G__29522 = c__8291__auto___29520;
var G__29523 = cljs.core.count.call(null,c__8291__auto___29520);
var G__29524 = (0);
seq__27894_29509 = G__29521;
chunk__27895_29510 = G__29522;
count__27896_29511 = G__29523;
i__27897_29512 = G__29524;
continue;
} else {
var arg__13071__auto___29525 = cljs.core.first.call(null,seq__27894_29519__$1);
a__13070__auto__.push(arg__13071__auto___29525);

var G__29526 = cljs.core.next.call(null,seq__27894_29519__$1);
var G__29527 = null;
var G__29528 = (0);
var G__29529 = (0);
seq__27894_29509 = G__29526;
chunk__27895_29510 = G__29527;
count__27896_29511 = G__29528;
i__27897_29512 = G__29529;
continue;
}
} else {
}
}
break;
}

return React.DOM.header.apply(null,a__13070__auto__);
};
var header = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29530__i = 0, G__29530__a = new Array(arguments.length -  0);
while (G__29530__i < G__29530__a.length) {G__29530__a[G__29530__i] = arguments[G__29530__i + 0]; ++G__29530__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29530__a,0);
} 
return header__delegate.call(this,args__13069__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__29531){
var args__13069__auto__ = cljs.core.seq(arglist__29531);
return header__delegate(args__13069__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27902_29532 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27903_29533 = null;
var count__27904_29534 = (0);
var i__27905_29535 = (0);
while(true){
if((i__27905_29535 < count__27904_29534)){
var arg__13071__auto___29536 = cljs.core._nth.call(null,chunk__27903_29533,i__27905_29535);
a__13070__auto__.push(arg__13071__auto___29536);

var G__29537 = seq__27902_29532;
var G__29538 = chunk__27903_29533;
var G__29539 = count__27904_29534;
var G__29540 = (i__27905_29535 + (1));
seq__27902_29532 = G__29537;
chunk__27903_29533 = G__29538;
count__27904_29534 = G__29539;
i__27905_29535 = G__29540;
continue;
} else {
var temp__4126__auto___29541 = cljs.core.seq.call(null,seq__27902_29532);
if(temp__4126__auto___29541){
var seq__27902_29542__$1 = temp__4126__auto___29541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27902_29542__$1)){
var c__8291__auto___29543 = cljs.core.chunk_first.call(null,seq__27902_29542__$1);
var G__29544 = cljs.core.chunk_rest.call(null,seq__27902_29542__$1);
var G__29545 = c__8291__auto___29543;
var G__29546 = cljs.core.count.call(null,c__8291__auto___29543);
var G__29547 = (0);
seq__27902_29532 = G__29544;
chunk__27903_29533 = G__29545;
count__27904_29534 = G__29546;
i__27905_29535 = G__29547;
continue;
} else {
var arg__13071__auto___29548 = cljs.core.first.call(null,seq__27902_29542__$1);
a__13070__auto__.push(arg__13071__auto___29548);

var G__29549 = cljs.core.next.call(null,seq__27902_29542__$1);
var G__29550 = null;
var G__29551 = (0);
var G__29552 = (0);
seq__27902_29532 = G__29549;
chunk__27903_29533 = G__29550;
count__27904_29534 = G__29551;
i__27905_29535 = G__29552;
continue;
}
} else {
}
}
break;
}

return React.DOM.hr.apply(null,a__13070__auto__);
};
var hr = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29553__i = 0, G__29553__a = new Array(arguments.length -  0);
while (G__29553__i < G__29553__a.length) {G__29553__a[G__29553__i] = arguments[G__29553__i + 0]; ++G__29553__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29553__a,0);
} 
return hr__delegate.call(this,args__13069__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__29554){
var args__13069__auto__ = cljs.core.seq(arglist__29554);
return hr__delegate(args__13069__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27910_29555 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27911_29556 = null;
var count__27912_29557 = (0);
var i__27913_29558 = (0);
while(true){
if((i__27913_29558 < count__27912_29557)){
var arg__13071__auto___29559 = cljs.core._nth.call(null,chunk__27911_29556,i__27913_29558);
a__13070__auto__.push(arg__13071__auto___29559);

var G__29560 = seq__27910_29555;
var G__29561 = chunk__27911_29556;
var G__29562 = count__27912_29557;
var G__29563 = (i__27913_29558 + (1));
seq__27910_29555 = G__29560;
chunk__27911_29556 = G__29561;
count__27912_29557 = G__29562;
i__27913_29558 = G__29563;
continue;
} else {
var temp__4126__auto___29564 = cljs.core.seq.call(null,seq__27910_29555);
if(temp__4126__auto___29564){
var seq__27910_29565__$1 = temp__4126__auto___29564;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27910_29565__$1)){
var c__8291__auto___29566 = cljs.core.chunk_first.call(null,seq__27910_29565__$1);
var G__29567 = cljs.core.chunk_rest.call(null,seq__27910_29565__$1);
var G__29568 = c__8291__auto___29566;
var G__29569 = cljs.core.count.call(null,c__8291__auto___29566);
var G__29570 = (0);
seq__27910_29555 = G__29567;
chunk__27911_29556 = G__29568;
count__27912_29557 = G__29569;
i__27913_29558 = G__29570;
continue;
} else {
var arg__13071__auto___29571 = cljs.core.first.call(null,seq__27910_29565__$1);
a__13070__auto__.push(arg__13071__auto___29571);

var G__29572 = cljs.core.next.call(null,seq__27910_29565__$1);
var G__29573 = null;
var G__29574 = (0);
var G__29575 = (0);
seq__27910_29555 = G__29572;
chunk__27911_29556 = G__29573;
count__27912_29557 = G__29574;
i__27913_29558 = G__29575;
continue;
}
} else {
}
}
break;
}

return React.DOM.html.apply(null,a__13070__auto__);
};
var html = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29576__i = 0, G__29576__a = new Array(arguments.length -  0);
while (G__29576__i < G__29576__a.length) {G__29576__a[G__29576__i] = arguments[G__29576__i + 0]; ++G__29576__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29576__a,0);
} 
return html__delegate.call(this,args__13069__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__29577){
var args__13069__auto__ = cljs.core.seq(arglist__29577);
return html__delegate(args__13069__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27918_29578 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27919_29579 = null;
var count__27920_29580 = (0);
var i__27921_29581 = (0);
while(true){
if((i__27921_29581 < count__27920_29580)){
var arg__13071__auto___29582 = cljs.core._nth.call(null,chunk__27919_29579,i__27921_29581);
a__13070__auto__.push(arg__13071__auto___29582);

var G__29583 = seq__27918_29578;
var G__29584 = chunk__27919_29579;
var G__29585 = count__27920_29580;
var G__29586 = (i__27921_29581 + (1));
seq__27918_29578 = G__29583;
chunk__27919_29579 = G__29584;
count__27920_29580 = G__29585;
i__27921_29581 = G__29586;
continue;
} else {
var temp__4126__auto___29587 = cljs.core.seq.call(null,seq__27918_29578);
if(temp__4126__auto___29587){
var seq__27918_29588__$1 = temp__4126__auto___29587;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27918_29588__$1)){
var c__8291__auto___29589 = cljs.core.chunk_first.call(null,seq__27918_29588__$1);
var G__29590 = cljs.core.chunk_rest.call(null,seq__27918_29588__$1);
var G__29591 = c__8291__auto___29589;
var G__29592 = cljs.core.count.call(null,c__8291__auto___29589);
var G__29593 = (0);
seq__27918_29578 = G__29590;
chunk__27919_29579 = G__29591;
count__27920_29580 = G__29592;
i__27921_29581 = G__29593;
continue;
} else {
var arg__13071__auto___29594 = cljs.core.first.call(null,seq__27918_29588__$1);
a__13070__auto__.push(arg__13071__auto___29594);

var G__29595 = cljs.core.next.call(null,seq__27918_29588__$1);
var G__29596 = null;
var G__29597 = (0);
var G__29598 = (0);
seq__27918_29578 = G__29595;
chunk__27919_29579 = G__29596;
count__27920_29580 = G__29597;
i__27921_29581 = G__29598;
continue;
}
} else {
}
}
break;
}

return React.DOM.i.apply(null,a__13070__auto__);
};
var i = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29599__i = 0, G__29599__a = new Array(arguments.length -  0);
while (G__29599__i < G__29599__a.length) {G__29599__a[G__29599__i] = arguments[G__29599__i + 0]; ++G__29599__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29599__a,0);
} 
return i__delegate.call(this,args__13069__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__29600){
var args__13069__auto__ = cljs.core.seq(arglist__29600);
return i__delegate(args__13069__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27926_29601 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27927_29602 = null;
var count__27928_29603 = (0);
var i__27929_29604 = (0);
while(true){
if((i__27929_29604 < count__27928_29603)){
var arg__13071__auto___29605 = cljs.core._nth.call(null,chunk__27927_29602,i__27929_29604);
a__13070__auto__.push(arg__13071__auto___29605);

var G__29606 = seq__27926_29601;
var G__29607 = chunk__27927_29602;
var G__29608 = count__27928_29603;
var G__29609 = (i__27929_29604 + (1));
seq__27926_29601 = G__29606;
chunk__27927_29602 = G__29607;
count__27928_29603 = G__29608;
i__27929_29604 = G__29609;
continue;
} else {
var temp__4126__auto___29610 = cljs.core.seq.call(null,seq__27926_29601);
if(temp__4126__auto___29610){
var seq__27926_29611__$1 = temp__4126__auto___29610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27926_29611__$1)){
var c__8291__auto___29612 = cljs.core.chunk_first.call(null,seq__27926_29611__$1);
var G__29613 = cljs.core.chunk_rest.call(null,seq__27926_29611__$1);
var G__29614 = c__8291__auto___29612;
var G__29615 = cljs.core.count.call(null,c__8291__auto___29612);
var G__29616 = (0);
seq__27926_29601 = G__29613;
chunk__27927_29602 = G__29614;
count__27928_29603 = G__29615;
i__27929_29604 = G__29616;
continue;
} else {
var arg__13071__auto___29617 = cljs.core.first.call(null,seq__27926_29611__$1);
a__13070__auto__.push(arg__13071__auto___29617);

var G__29618 = cljs.core.next.call(null,seq__27926_29611__$1);
var G__29619 = null;
var G__29620 = (0);
var G__29621 = (0);
seq__27926_29601 = G__29618;
chunk__27927_29602 = G__29619;
count__27928_29603 = G__29620;
i__27929_29604 = G__29621;
continue;
}
} else {
}
}
break;
}

return React.DOM.iframe.apply(null,a__13070__auto__);
};
var iframe = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29622__i = 0, G__29622__a = new Array(arguments.length -  0);
while (G__29622__i < G__29622__a.length) {G__29622__a[G__29622__i] = arguments[G__29622__i + 0]; ++G__29622__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29622__a,0);
} 
return iframe__delegate.call(this,args__13069__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__29623){
var args__13069__auto__ = cljs.core.seq(arglist__29623);
return iframe__delegate(args__13069__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27934_29624 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27935_29625 = null;
var count__27936_29626 = (0);
var i__27937_29627 = (0);
while(true){
if((i__27937_29627 < count__27936_29626)){
var arg__13071__auto___29628 = cljs.core._nth.call(null,chunk__27935_29625,i__27937_29627);
a__13070__auto__.push(arg__13071__auto___29628);

var G__29629 = seq__27934_29624;
var G__29630 = chunk__27935_29625;
var G__29631 = count__27936_29626;
var G__29632 = (i__27937_29627 + (1));
seq__27934_29624 = G__29629;
chunk__27935_29625 = G__29630;
count__27936_29626 = G__29631;
i__27937_29627 = G__29632;
continue;
} else {
var temp__4126__auto___29633 = cljs.core.seq.call(null,seq__27934_29624);
if(temp__4126__auto___29633){
var seq__27934_29634__$1 = temp__4126__auto___29633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27934_29634__$1)){
var c__8291__auto___29635 = cljs.core.chunk_first.call(null,seq__27934_29634__$1);
var G__29636 = cljs.core.chunk_rest.call(null,seq__27934_29634__$1);
var G__29637 = c__8291__auto___29635;
var G__29638 = cljs.core.count.call(null,c__8291__auto___29635);
var G__29639 = (0);
seq__27934_29624 = G__29636;
chunk__27935_29625 = G__29637;
count__27936_29626 = G__29638;
i__27937_29627 = G__29639;
continue;
} else {
var arg__13071__auto___29640 = cljs.core.first.call(null,seq__27934_29634__$1);
a__13070__auto__.push(arg__13071__auto___29640);

var G__29641 = cljs.core.next.call(null,seq__27934_29634__$1);
var G__29642 = null;
var G__29643 = (0);
var G__29644 = (0);
seq__27934_29624 = G__29641;
chunk__27935_29625 = G__29642;
count__27936_29626 = G__29643;
i__27937_29627 = G__29644;
continue;
}
} else {
}
}
break;
}

return React.DOM.img.apply(null,a__13070__auto__);
};
var img = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29645__i = 0, G__29645__a = new Array(arguments.length -  0);
while (G__29645__i < G__29645__a.length) {G__29645__a[G__29645__i] = arguments[G__29645__i + 0]; ++G__29645__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29645__a,0);
} 
return img__delegate.call(this,args__13069__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__29646){
var args__13069__auto__ = cljs.core.seq(arglist__29646);
return img__delegate(args__13069__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27942_29647 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27943_29648 = null;
var count__27944_29649 = (0);
var i__27945_29650 = (0);
while(true){
if((i__27945_29650 < count__27944_29649)){
var arg__13071__auto___29651 = cljs.core._nth.call(null,chunk__27943_29648,i__27945_29650);
a__13070__auto__.push(arg__13071__auto___29651);

var G__29652 = seq__27942_29647;
var G__29653 = chunk__27943_29648;
var G__29654 = count__27944_29649;
var G__29655 = (i__27945_29650 + (1));
seq__27942_29647 = G__29652;
chunk__27943_29648 = G__29653;
count__27944_29649 = G__29654;
i__27945_29650 = G__29655;
continue;
} else {
var temp__4126__auto___29656 = cljs.core.seq.call(null,seq__27942_29647);
if(temp__4126__auto___29656){
var seq__27942_29657__$1 = temp__4126__auto___29656;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27942_29657__$1)){
var c__8291__auto___29658 = cljs.core.chunk_first.call(null,seq__27942_29657__$1);
var G__29659 = cljs.core.chunk_rest.call(null,seq__27942_29657__$1);
var G__29660 = c__8291__auto___29658;
var G__29661 = cljs.core.count.call(null,c__8291__auto___29658);
var G__29662 = (0);
seq__27942_29647 = G__29659;
chunk__27943_29648 = G__29660;
count__27944_29649 = G__29661;
i__27945_29650 = G__29662;
continue;
} else {
var arg__13071__auto___29663 = cljs.core.first.call(null,seq__27942_29657__$1);
a__13070__auto__.push(arg__13071__auto___29663);

var G__29664 = cljs.core.next.call(null,seq__27942_29657__$1);
var G__29665 = null;
var G__29666 = (0);
var G__29667 = (0);
seq__27942_29647 = G__29664;
chunk__27943_29648 = G__29665;
count__27944_29649 = G__29666;
i__27945_29650 = G__29667;
continue;
}
} else {
}
}
break;
}

return React.DOM.input.apply(null,a__13070__auto__);
};
var input = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29668__i = 0, G__29668__a = new Array(arguments.length -  0);
while (G__29668__i < G__29668__a.length) {G__29668__a[G__29668__i] = arguments[G__29668__i + 0]; ++G__29668__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29668__a,0);
} 
return input__delegate.call(this,args__13069__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__29669){
var args__13069__auto__ = cljs.core.seq(arglist__29669);
return input__delegate(args__13069__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27950_29670 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27951_29671 = null;
var count__27952_29672 = (0);
var i__27953_29673 = (0);
while(true){
if((i__27953_29673 < count__27952_29672)){
var arg__13071__auto___29674 = cljs.core._nth.call(null,chunk__27951_29671,i__27953_29673);
a__13070__auto__.push(arg__13071__auto___29674);

var G__29675 = seq__27950_29670;
var G__29676 = chunk__27951_29671;
var G__29677 = count__27952_29672;
var G__29678 = (i__27953_29673 + (1));
seq__27950_29670 = G__29675;
chunk__27951_29671 = G__29676;
count__27952_29672 = G__29677;
i__27953_29673 = G__29678;
continue;
} else {
var temp__4126__auto___29679 = cljs.core.seq.call(null,seq__27950_29670);
if(temp__4126__auto___29679){
var seq__27950_29680__$1 = temp__4126__auto___29679;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27950_29680__$1)){
var c__8291__auto___29681 = cljs.core.chunk_first.call(null,seq__27950_29680__$1);
var G__29682 = cljs.core.chunk_rest.call(null,seq__27950_29680__$1);
var G__29683 = c__8291__auto___29681;
var G__29684 = cljs.core.count.call(null,c__8291__auto___29681);
var G__29685 = (0);
seq__27950_29670 = G__29682;
chunk__27951_29671 = G__29683;
count__27952_29672 = G__29684;
i__27953_29673 = G__29685;
continue;
} else {
var arg__13071__auto___29686 = cljs.core.first.call(null,seq__27950_29680__$1);
a__13070__auto__.push(arg__13071__auto___29686);

var G__29687 = cljs.core.next.call(null,seq__27950_29680__$1);
var G__29688 = null;
var G__29689 = (0);
var G__29690 = (0);
seq__27950_29670 = G__29687;
chunk__27951_29671 = G__29688;
count__27952_29672 = G__29689;
i__27953_29673 = G__29690;
continue;
}
} else {
}
}
break;
}

return React.DOM.ins.apply(null,a__13070__auto__);
};
var ins = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29691__i = 0, G__29691__a = new Array(arguments.length -  0);
while (G__29691__i < G__29691__a.length) {G__29691__a[G__29691__i] = arguments[G__29691__i + 0]; ++G__29691__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29691__a,0);
} 
return ins__delegate.call(this,args__13069__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__29692){
var args__13069__auto__ = cljs.core.seq(arglist__29692);
return ins__delegate(args__13069__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27958_29693 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27959_29694 = null;
var count__27960_29695 = (0);
var i__27961_29696 = (0);
while(true){
if((i__27961_29696 < count__27960_29695)){
var arg__13071__auto___29697 = cljs.core._nth.call(null,chunk__27959_29694,i__27961_29696);
a__13070__auto__.push(arg__13071__auto___29697);

var G__29698 = seq__27958_29693;
var G__29699 = chunk__27959_29694;
var G__29700 = count__27960_29695;
var G__29701 = (i__27961_29696 + (1));
seq__27958_29693 = G__29698;
chunk__27959_29694 = G__29699;
count__27960_29695 = G__29700;
i__27961_29696 = G__29701;
continue;
} else {
var temp__4126__auto___29702 = cljs.core.seq.call(null,seq__27958_29693);
if(temp__4126__auto___29702){
var seq__27958_29703__$1 = temp__4126__auto___29702;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27958_29703__$1)){
var c__8291__auto___29704 = cljs.core.chunk_first.call(null,seq__27958_29703__$1);
var G__29705 = cljs.core.chunk_rest.call(null,seq__27958_29703__$1);
var G__29706 = c__8291__auto___29704;
var G__29707 = cljs.core.count.call(null,c__8291__auto___29704);
var G__29708 = (0);
seq__27958_29693 = G__29705;
chunk__27959_29694 = G__29706;
count__27960_29695 = G__29707;
i__27961_29696 = G__29708;
continue;
} else {
var arg__13071__auto___29709 = cljs.core.first.call(null,seq__27958_29703__$1);
a__13070__auto__.push(arg__13071__auto___29709);

var G__29710 = cljs.core.next.call(null,seq__27958_29703__$1);
var G__29711 = null;
var G__29712 = (0);
var G__29713 = (0);
seq__27958_29693 = G__29710;
chunk__27959_29694 = G__29711;
count__27960_29695 = G__29712;
i__27961_29696 = G__29713;
continue;
}
} else {
}
}
break;
}

return React.DOM.kbd.apply(null,a__13070__auto__);
};
var kbd = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29714__i = 0, G__29714__a = new Array(arguments.length -  0);
while (G__29714__i < G__29714__a.length) {G__29714__a[G__29714__i] = arguments[G__29714__i + 0]; ++G__29714__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29714__a,0);
} 
return kbd__delegate.call(this,args__13069__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__29715){
var args__13069__auto__ = cljs.core.seq(arglist__29715);
return kbd__delegate(args__13069__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27966_29716 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27967_29717 = null;
var count__27968_29718 = (0);
var i__27969_29719 = (0);
while(true){
if((i__27969_29719 < count__27968_29718)){
var arg__13071__auto___29720 = cljs.core._nth.call(null,chunk__27967_29717,i__27969_29719);
a__13070__auto__.push(arg__13071__auto___29720);

var G__29721 = seq__27966_29716;
var G__29722 = chunk__27967_29717;
var G__29723 = count__27968_29718;
var G__29724 = (i__27969_29719 + (1));
seq__27966_29716 = G__29721;
chunk__27967_29717 = G__29722;
count__27968_29718 = G__29723;
i__27969_29719 = G__29724;
continue;
} else {
var temp__4126__auto___29725 = cljs.core.seq.call(null,seq__27966_29716);
if(temp__4126__auto___29725){
var seq__27966_29726__$1 = temp__4126__auto___29725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27966_29726__$1)){
var c__8291__auto___29727 = cljs.core.chunk_first.call(null,seq__27966_29726__$1);
var G__29728 = cljs.core.chunk_rest.call(null,seq__27966_29726__$1);
var G__29729 = c__8291__auto___29727;
var G__29730 = cljs.core.count.call(null,c__8291__auto___29727);
var G__29731 = (0);
seq__27966_29716 = G__29728;
chunk__27967_29717 = G__29729;
count__27968_29718 = G__29730;
i__27969_29719 = G__29731;
continue;
} else {
var arg__13071__auto___29732 = cljs.core.first.call(null,seq__27966_29726__$1);
a__13070__auto__.push(arg__13071__auto___29732);

var G__29733 = cljs.core.next.call(null,seq__27966_29726__$1);
var G__29734 = null;
var G__29735 = (0);
var G__29736 = (0);
seq__27966_29716 = G__29733;
chunk__27967_29717 = G__29734;
count__27968_29718 = G__29735;
i__27969_29719 = G__29736;
continue;
}
} else {
}
}
break;
}

return React.DOM.keygen.apply(null,a__13070__auto__);
};
var keygen = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29737__i = 0, G__29737__a = new Array(arguments.length -  0);
while (G__29737__i < G__29737__a.length) {G__29737__a[G__29737__i] = arguments[G__29737__i + 0]; ++G__29737__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29737__a,0);
} 
return keygen__delegate.call(this,args__13069__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__29738){
var args__13069__auto__ = cljs.core.seq(arglist__29738);
return keygen__delegate(args__13069__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27974_29739 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27975_29740 = null;
var count__27976_29741 = (0);
var i__27977_29742 = (0);
while(true){
if((i__27977_29742 < count__27976_29741)){
var arg__13071__auto___29743 = cljs.core._nth.call(null,chunk__27975_29740,i__27977_29742);
a__13070__auto__.push(arg__13071__auto___29743);

var G__29744 = seq__27974_29739;
var G__29745 = chunk__27975_29740;
var G__29746 = count__27976_29741;
var G__29747 = (i__27977_29742 + (1));
seq__27974_29739 = G__29744;
chunk__27975_29740 = G__29745;
count__27976_29741 = G__29746;
i__27977_29742 = G__29747;
continue;
} else {
var temp__4126__auto___29748 = cljs.core.seq.call(null,seq__27974_29739);
if(temp__4126__auto___29748){
var seq__27974_29749__$1 = temp__4126__auto___29748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27974_29749__$1)){
var c__8291__auto___29750 = cljs.core.chunk_first.call(null,seq__27974_29749__$1);
var G__29751 = cljs.core.chunk_rest.call(null,seq__27974_29749__$1);
var G__29752 = c__8291__auto___29750;
var G__29753 = cljs.core.count.call(null,c__8291__auto___29750);
var G__29754 = (0);
seq__27974_29739 = G__29751;
chunk__27975_29740 = G__29752;
count__27976_29741 = G__29753;
i__27977_29742 = G__29754;
continue;
} else {
var arg__13071__auto___29755 = cljs.core.first.call(null,seq__27974_29749__$1);
a__13070__auto__.push(arg__13071__auto___29755);

var G__29756 = cljs.core.next.call(null,seq__27974_29749__$1);
var G__29757 = null;
var G__29758 = (0);
var G__29759 = (0);
seq__27974_29739 = G__29756;
chunk__27975_29740 = G__29757;
count__27976_29741 = G__29758;
i__27977_29742 = G__29759;
continue;
}
} else {
}
}
break;
}

return React.DOM.label.apply(null,a__13070__auto__);
};
var label = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29760__i = 0, G__29760__a = new Array(arguments.length -  0);
while (G__29760__i < G__29760__a.length) {G__29760__a[G__29760__i] = arguments[G__29760__i + 0]; ++G__29760__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29760__a,0);
} 
return label__delegate.call(this,args__13069__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__29761){
var args__13069__auto__ = cljs.core.seq(arglist__29761);
return label__delegate(args__13069__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27982_29762 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27983_29763 = null;
var count__27984_29764 = (0);
var i__27985_29765 = (0);
while(true){
if((i__27985_29765 < count__27984_29764)){
var arg__13071__auto___29766 = cljs.core._nth.call(null,chunk__27983_29763,i__27985_29765);
a__13070__auto__.push(arg__13071__auto___29766);

var G__29767 = seq__27982_29762;
var G__29768 = chunk__27983_29763;
var G__29769 = count__27984_29764;
var G__29770 = (i__27985_29765 + (1));
seq__27982_29762 = G__29767;
chunk__27983_29763 = G__29768;
count__27984_29764 = G__29769;
i__27985_29765 = G__29770;
continue;
} else {
var temp__4126__auto___29771 = cljs.core.seq.call(null,seq__27982_29762);
if(temp__4126__auto___29771){
var seq__27982_29772__$1 = temp__4126__auto___29771;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27982_29772__$1)){
var c__8291__auto___29773 = cljs.core.chunk_first.call(null,seq__27982_29772__$1);
var G__29774 = cljs.core.chunk_rest.call(null,seq__27982_29772__$1);
var G__29775 = c__8291__auto___29773;
var G__29776 = cljs.core.count.call(null,c__8291__auto___29773);
var G__29777 = (0);
seq__27982_29762 = G__29774;
chunk__27983_29763 = G__29775;
count__27984_29764 = G__29776;
i__27985_29765 = G__29777;
continue;
} else {
var arg__13071__auto___29778 = cljs.core.first.call(null,seq__27982_29772__$1);
a__13070__auto__.push(arg__13071__auto___29778);

var G__29779 = cljs.core.next.call(null,seq__27982_29772__$1);
var G__29780 = null;
var G__29781 = (0);
var G__29782 = (0);
seq__27982_29762 = G__29779;
chunk__27983_29763 = G__29780;
count__27984_29764 = G__29781;
i__27985_29765 = G__29782;
continue;
}
} else {
}
}
break;
}

return React.DOM.legend.apply(null,a__13070__auto__);
};
var legend = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29783__i = 0, G__29783__a = new Array(arguments.length -  0);
while (G__29783__i < G__29783__a.length) {G__29783__a[G__29783__i] = arguments[G__29783__i + 0]; ++G__29783__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29783__a,0);
} 
return legend__delegate.call(this,args__13069__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__29784){
var args__13069__auto__ = cljs.core.seq(arglist__29784);
return legend__delegate(args__13069__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27990_29785 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27991_29786 = null;
var count__27992_29787 = (0);
var i__27993_29788 = (0);
while(true){
if((i__27993_29788 < count__27992_29787)){
var arg__13071__auto___29789 = cljs.core._nth.call(null,chunk__27991_29786,i__27993_29788);
a__13070__auto__.push(arg__13071__auto___29789);

var G__29790 = seq__27990_29785;
var G__29791 = chunk__27991_29786;
var G__29792 = count__27992_29787;
var G__29793 = (i__27993_29788 + (1));
seq__27990_29785 = G__29790;
chunk__27991_29786 = G__29791;
count__27992_29787 = G__29792;
i__27993_29788 = G__29793;
continue;
} else {
var temp__4126__auto___29794 = cljs.core.seq.call(null,seq__27990_29785);
if(temp__4126__auto___29794){
var seq__27990_29795__$1 = temp__4126__auto___29794;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27990_29795__$1)){
var c__8291__auto___29796 = cljs.core.chunk_first.call(null,seq__27990_29795__$1);
var G__29797 = cljs.core.chunk_rest.call(null,seq__27990_29795__$1);
var G__29798 = c__8291__auto___29796;
var G__29799 = cljs.core.count.call(null,c__8291__auto___29796);
var G__29800 = (0);
seq__27990_29785 = G__29797;
chunk__27991_29786 = G__29798;
count__27992_29787 = G__29799;
i__27993_29788 = G__29800;
continue;
} else {
var arg__13071__auto___29801 = cljs.core.first.call(null,seq__27990_29795__$1);
a__13070__auto__.push(arg__13071__auto___29801);

var G__29802 = cljs.core.next.call(null,seq__27990_29795__$1);
var G__29803 = null;
var G__29804 = (0);
var G__29805 = (0);
seq__27990_29785 = G__29802;
chunk__27991_29786 = G__29803;
count__27992_29787 = G__29804;
i__27993_29788 = G__29805;
continue;
}
} else {
}
}
break;
}

return React.DOM.li.apply(null,a__13070__auto__);
};
var li = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29806__i = 0, G__29806__a = new Array(arguments.length -  0);
while (G__29806__i < G__29806__a.length) {G__29806__a[G__29806__i] = arguments[G__29806__i + 0]; ++G__29806__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29806__a,0);
} 
return li__delegate.call(this,args__13069__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__29807){
var args__13069__auto__ = cljs.core.seq(arglist__29807);
return li__delegate(args__13069__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27998_29808 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27999_29809 = null;
var count__28000_29810 = (0);
var i__28001_29811 = (0);
while(true){
if((i__28001_29811 < count__28000_29810)){
var arg__13071__auto___29812 = cljs.core._nth.call(null,chunk__27999_29809,i__28001_29811);
a__13070__auto__.push(arg__13071__auto___29812);

var G__29813 = seq__27998_29808;
var G__29814 = chunk__27999_29809;
var G__29815 = count__28000_29810;
var G__29816 = (i__28001_29811 + (1));
seq__27998_29808 = G__29813;
chunk__27999_29809 = G__29814;
count__28000_29810 = G__29815;
i__28001_29811 = G__29816;
continue;
} else {
var temp__4126__auto___29817 = cljs.core.seq.call(null,seq__27998_29808);
if(temp__4126__auto___29817){
var seq__27998_29818__$1 = temp__4126__auto___29817;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27998_29818__$1)){
var c__8291__auto___29819 = cljs.core.chunk_first.call(null,seq__27998_29818__$1);
var G__29820 = cljs.core.chunk_rest.call(null,seq__27998_29818__$1);
var G__29821 = c__8291__auto___29819;
var G__29822 = cljs.core.count.call(null,c__8291__auto___29819);
var G__29823 = (0);
seq__27998_29808 = G__29820;
chunk__27999_29809 = G__29821;
count__28000_29810 = G__29822;
i__28001_29811 = G__29823;
continue;
} else {
var arg__13071__auto___29824 = cljs.core.first.call(null,seq__27998_29818__$1);
a__13070__auto__.push(arg__13071__auto___29824);

var G__29825 = cljs.core.next.call(null,seq__27998_29818__$1);
var G__29826 = null;
var G__29827 = (0);
var G__29828 = (0);
seq__27998_29808 = G__29825;
chunk__27999_29809 = G__29826;
count__28000_29810 = G__29827;
i__28001_29811 = G__29828;
continue;
}
} else {
}
}
break;
}

return React.DOM.link.apply(null,a__13070__auto__);
};
var link = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29829__i = 0, G__29829__a = new Array(arguments.length -  0);
while (G__29829__i < G__29829__a.length) {G__29829__a[G__29829__i] = arguments[G__29829__i + 0]; ++G__29829__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29829__a,0);
} 
return link__delegate.call(this,args__13069__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__29830){
var args__13069__auto__ = cljs.core.seq(arglist__29830);
return link__delegate(args__13069__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28006_29831 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28007_29832 = null;
var count__28008_29833 = (0);
var i__28009_29834 = (0);
while(true){
if((i__28009_29834 < count__28008_29833)){
var arg__13071__auto___29835 = cljs.core._nth.call(null,chunk__28007_29832,i__28009_29834);
a__13070__auto__.push(arg__13071__auto___29835);

var G__29836 = seq__28006_29831;
var G__29837 = chunk__28007_29832;
var G__29838 = count__28008_29833;
var G__29839 = (i__28009_29834 + (1));
seq__28006_29831 = G__29836;
chunk__28007_29832 = G__29837;
count__28008_29833 = G__29838;
i__28009_29834 = G__29839;
continue;
} else {
var temp__4126__auto___29840 = cljs.core.seq.call(null,seq__28006_29831);
if(temp__4126__auto___29840){
var seq__28006_29841__$1 = temp__4126__auto___29840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28006_29841__$1)){
var c__8291__auto___29842 = cljs.core.chunk_first.call(null,seq__28006_29841__$1);
var G__29843 = cljs.core.chunk_rest.call(null,seq__28006_29841__$1);
var G__29844 = c__8291__auto___29842;
var G__29845 = cljs.core.count.call(null,c__8291__auto___29842);
var G__29846 = (0);
seq__28006_29831 = G__29843;
chunk__28007_29832 = G__29844;
count__28008_29833 = G__29845;
i__28009_29834 = G__29846;
continue;
} else {
var arg__13071__auto___29847 = cljs.core.first.call(null,seq__28006_29841__$1);
a__13070__auto__.push(arg__13071__auto___29847);

var G__29848 = cljs.core.next.call(null,seq__28006_29841__$1);
var G__29849 = null;
var G__29850 = (0);
var G__29851 = (0);
seq__28006_29831 = G__29848;
chunk__28007_29832 = G__29849;
count__28008_29833 = G__29850;
i__28009_29834 = G__29851;
continue;
}
} else {
}
}
break;
}

return React.DOM.main.apply(null,a__13070__auto__);
};
var main = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29852__i = 0, G__29852__a = new Array(arguments.length -  0);
while (G__29852__i < G__29852__a.length) {G__29852__a[G__29852__i] = arguments[G__29852__i + 0]; ++G__29852__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29852__a,0);
} 
return main__delegate.call(this,args__13069__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__29853){
var args__13069__auto__ = cljs.core.seq(arglist__29853);
return main__delegate(args__13069__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28014_29854 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28015_29855 = null;
var count__28016_29856 = (0);
var i__28017_29857 = (0);
while(true){
if((i__28017_29857 < count__28016_29856)){
var arg__13071__auto___29858 = cljs.core._nth.call(null,chunk__28015_29855,i__28017_29857);
a__13070__auto__.push(arg__13071__auto___29858);

var G__29859 = seq__28014_29854;
var G__29860 = chunk__28015_29855;
var G__29861 = count__28016_29856;
var G__29862 = (i__28017_29857 + (1));
seq__28014_29854 = G__29859;
chunk__28015_29855 = G__29860;
count__28016_29856 = G__29861;
i__28017_29857 = G__29862;
continue;
} else {
var temp__4126__auto___29863 = cljs.core.seq.call(null,seq__28014_29854);
if(temp__4126__auto___29863){
var seq__28014_29864__$1 = temp__4126__auto___29863;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28014_29864__$1)){
var c__8291__auto___29865 = cljs.core.chunk_first.call(null,seq__28014_29864__$1);
var G__29866 = cljs.core.chunk_rest.call(null,seq__28014_29864__$1);
var G__29867 = c__8291__auto___29865;
var G__29868 = cljs.core.count.call(null,c__8291__auto___29865);
var G__29869 = (0);
seq__28014_29854 = G__29866;
chunk__28015_29855 = G__29867;
count__28016_29856 = G__29868;
i__28017_29857 = G__29869;
continue;
} else {
var arg__13071__auto___29870 = cljs.core.first.call(null,seq__28014_29864__$1);
a__13070__auto__.push(arg__13071__auto___29870);

var G__29871 = cljs.core.next.call(null,seq__28014_29864__$1);
var G__29872 = null;
var G__29873 = (0);
var G__29874 = (0);
seq__28014_29854 = G__29871;
chunk__28015_29855 = G__29872;
count__28016_29856 = G__29873;
i__28017_29857 = G__29874;
continue;
}
} else {
}
}
break;
}

return React.DOM.map.apply(null,a__13070__auto__);
};
var map = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29875__i = 0, G__29875__a = new Array(arguments.length -  0);
while (G__29875__i < G__29875__a.length) {G__29875__a[G__29875__i] = arguments[G__29875__i + 0]; ++G__29875__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29875__a,0);
} 
return map__delegate.call(this,args__13069__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__29876){
var args__13069__auto__ = cljs.core.seq(arglist__29876);
return map__delegate(args__13069__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28022_29877 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28023_29878 = null;
var count__28024_29879 = (0);
var i__28025_29880 = (0);
while(true){
if((i__28025_29880 < count__28024_29879)){
var arg__13071__auto___29881 = cljs.core._nth.call(null,chunk__28023_29878,i__28025_29880);
a__13070__auto__.push(arg__13071__auto___29881);

var G__29882 = seq__28022_29877;
var G__29883 = chunk__28023_29878;
var G__29884 = count__28024_29879;
var G__29885 = (i__28025_29880 + (1));
seq__28022_29877 = G__29882;
chunk__28023_29878 = G__29883;
count__28024_29879 = G__29884;
i__28025_29880 = G__29885;
continue;
} else {
var temp__4126__auto___29886 = cljs.core.seq.call(null,seq__28022_29877);
if(temp__4126__auto___29886){
var seq__28022_29887__$1 = temp__4126__auto___29886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28022_29887__$1)){
var c__8291__auto___29888 = cljs.core.chunk_first.call(null,seq__28022_29887__$1);
var G__29889 = cljs.core.chunk_rest.call(null,seq__28022_29887__$1);
var G__29890 = c__8291__auto___29888;
var G__29891 = cljs.core.count.call(null,c__8291__auto___29888);
var G__29892 = (0);
seq__28022_29877 = G__29889;
chunk__28023_29878 = G__29890;
count__28024_29879 = G__29891;
i__28025_29880 = G__29892;
continue;
} else {
var arg__13071__auto___29893 = cljs.core.first.call(null,seq__28022_29887__$1);
a__13070__auto__.push(arg__13071__auto___29893);

var G__29894 = cljs.core.next.call(null,seq__28022_29887__$1);
var G__29895 = null;
var G__29896 = (0);
var G__29897 = (0);
seq__28022_29877 = G__29894;
chunk__28023_29878 = G__29895;
count__28024_29879 = G__29896;
i__28025_29880 = G__29897;
continue;
}
} else {
}
}
break;
}

return React.DOM.mark.apply(null,a__13070__auto__);
};
var mark = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29898__i = 0, G__29898__a = new Array(arguments.length -  0);
while (G__29898__i < G__29898__a.length) {G__29898__a[G__29898__i] = arguments[G__29898__i + 0]; ++G__29898__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29898__a,0);
} 
return mark__delegate.call(this,args__13069__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__29899){
var args__13069__auto__ = cljs.core.seq(arglist__29899);
return mark__delegate(args__13069__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28030_29900 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28031_29901 = null;
var count__28032_29902 = (0);
var i__28033_29903 = (0);
while(true){
if((i__28033_29903 < count__28032_29902)){
var arg__13071__auto___29904 = cljs.core._nth.call(null,chunk__28031_29901,i__28033_29903);
a__13070__auto__.push(arg__13071__auto___29904);

var G__29905 = seq__28030_29900;
var G__29906 = chunk__28031_29901;
var G__29907 = count__28032_29902;
var G__29908 = (i__28033_29903 + (1));
seq__28030_29900 = G__29905;
chunk__28031_29901 = G__29906;
count__28032_29902 = G__29907;
i__28033_29903 = G__29908;
continue;
} else {
var temp__4126__auto___29909 = cljs.core.seq.call(null,seq__28030_29900);
if(temp__4126__auto___29909){
var seq__28030_29910__$1 = temp__4126__auto___29909;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28030_29910__$1)){
var c__8291__auto___29911 = cljs.core.chunk_first.call(null,seq__28030_29910__$1);
var G__29912 = cljs.core.chunk_rest.call(null,seq__28030_29910__$1);
var G__29913 = c__8291__auto___29911;
var G__29914 = cljs.core.count.call(null,c__8291__auto___29911);
var G__29915 = (0);
seq__28030_29900 = G__29912;
chunk__28031_29901 = G__29913;
count__28032_29902 = G__29914;
i__28033_29903 = G__29915;
continue;
} else {
var arg__13071__auto___29916 = cljs.core.first.call(null,seq__28030_29910__$1);
a__13070__auto__.push(arg__13071__auto___29916);

var G__29917 = cljs.core.next.call(null,seq__28030_29910__$1);
var G__29918 = null;
var G__29919 = (0);
var G__29920 = (0);
seq__28030_29900 = G__29917;
chunk__28031_29901 = G__29918;
count__28032_29902 = G__29919;
i__28033_29903 = G__29920;
continue;
}
} else {
}
}
break;
}

return React.DOM.menu.apply(null,a__13070__auto__);
};
var menu = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29921__i = 0, G__29921__a = new Array(arguments.length -  0);
while (G__29921__i < G__29921__a.length) {G__29921__a[G__29921__i] = arguments[G__29921__i + 0]; ++G__29921__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29921__a,0);
} 
return menu__delegate.call(this,args__13069__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__29922){
var args__13069__auto__ = cljs.core.seq(arglist__29922);
return menu__delegate(args__13069__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28038_29923 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28039_29924 = null;
var count__28040_29925 = (0);
var i__28041_29926 = (0);
while(true){
if((i__28041_29926 < count__28040_29925)){
var arg__13071__auto___29927 = cljs.core._nth.call(null,chunk__28039_29924,i__28041_29926);
a__13070__auto__.push(arg__13071__auto___29927);

var G__29928 = seq__28038_29923;
var G__29929 = chunk__28039_29924;
var G__29930 = count__28040_29925;
var G__29931 = (i__28041_29926 + (1));
seq__28038_29923 = G__29928;
chunk__28039_29924 = G__29929;
count__28040_29925 = G__29930;
i__28041_29926 = G__29931;
continue;
} else {
var temp__4126__auto___29932 = cljs.core.seq.call(null,seq__28038_29923);
if(temp__4126__auto___29932){
var seq__28038_29933__$1 = temp__4126__auto___29932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28038_29933__$1)){
var c__8291__auto___29934 = cljs.core.chunk_first.call(null,seq__28038_29933__$1);
var G__29935 = cljs.core.chunk_rest.call(null,seq__28038_29933__$1);
var G__29936 = c__8291__auto___29934;
var G__29937 = cljs.core.count.call(null,c__8291__auto___29934);
var G__29938 = (0);
seq__28038_29923 = G__29935;
chunk__28039_29924 = G__29936;
count__28040_29925 = G__29937;
i__28041_29926 = G__29938;
continue;
} else {
var arg__13071__auto___29939 = cljs.core.first.call(null,seq__28038_29933__$1);
a__13070__auto__.push(arg__13071__auto___29939);

var G__29940 = cljs.core.next.call(null,seq__28038_29933__$1);
var G__29941 = null;
var G__29942 = (0);
var G__29943 = (0);
seq__28038_29923 = G__29940;
chunk__28039_29924 = G__29941;
count__28040_29925 = G__29942;
i__28041_29926 = G__29943;
continue;
}
} else {
}
}
break;
}

return React.DOM.menuitem.apply(null,a__13070__auto__);
};
var menuitem = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29944__i = 0, G__29944__a = new Array(arguments.length -  0);
while (G__29944__i < G__29944__a.length) {G__29944__a[G__29944__i] = arguments[G__29944__i + 0]; ++G__29944__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29944__a,0);
} 
return menuitem__delegate.call(this,args__13069__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__29945){
var args__13069__auto__ = cljs.core.seq(arglist__29945);
return menuitem__delegate(args__13069__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28046_29946 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28047_29947 = null;
var count__28048_29948 = (0);
var i__28049_29949 = (0);
while(true){
if((i__28049_29949 < count__28048_29948)){
var arg__13071__auto___29950 = cljs.core._nth.call(null,chunk__28047_29947,i__28049_29949);
a__13070__auto__.push(arg__13071__auto___29950);

var G__29951 = seq__28046_29946;
var G__29952 = chunk__28047_29947;
var G__29953 = count__28048_29948;
var G__29954 = (i__28049_29949 + (1));
seq__28046_29946 = G__29951;
chunk__28047_29947 = G__29952;
count__28048_29948 = G__29953;
i__28049_29949 = G__29954;
continue;
} else {
var temp__4126__auto___29955 = cljs.core.seq.call(null,seq__28046_29946);
if(temp__4126__auto___29955){
var seq__28046_29956__$1 = temp__4126__auto___29955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28046_29956__$1)){
var c__8291__auto___29957 = cljs.core.chunk_first.call(null,seq__28046_29956__$1);
var G__29958 = cljs.core.chunk_rest.call(null,seq__28046_29956__$1);
var G__29959 = c__8291__auto___29957;
var G__29960 = cljs.core.count.call(null,c__8291__auto___29957);
var G__29961 = (0);
seq__28046_29946 = G__29958;
chunk__28047_29947 = G__29959;
count__28048_29948 = G__29960;
i__28049_29949 = G__29961;
continue;
} else {
var arg__13071__auto___29962 = cljs.core.first.call(null,seq__28046_29956__$1);
a__13070__auto__.push(arg__13071__auto___29962);

var G__29963 = cljs.core.next.call(null,seq__28046_29956__$1);
var G__29964 = null;
var G__29965 = (0);
var G__29966 = (0);
seq__28046_29946 = G__29963;
chunk__28047_29947 = G__29964;
count__28048_29948 = G__29965;
i__28049_29949 = G__29966;
continue;
}
} else {
}
}
break;
}

return React.DOM.meta.apply(null,a__13070__auto__);
};
var meta = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29967__i = 0, G__29967__a = new Array(arguments.length -  0);
while (G__29967__i < G__29967__a.length) {G__29967__a[G__29967__i] = arguments[G__29967__i + 0]; ++G__29967__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29967__a,0);
} 
return meta__delegate.call(this,args__13069__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__29968){
var args__13069__auto__ = cljs.core.seq(arglist__29968);
return meta__delegate(args__13069__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28054_29969 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28055_29970 = null;
var count__28056_29971 = (0);
var i__28057_29972 = (0);
while(true){
if((i__28057_29972 < count__28056_29971)){
var arg__13071__auto___29973 = cljs.core._nth.call(null,chunk__28055_29970,i__28057_29972);
a__13070__auto__.push(arg__13071__auto___29973);

var G__29974 = seq__28054_29969;
var G__29975 = chunk__28055_29970;
var G__29976 = count__28056_29971;
var G__29977 = (i__28057_29972 + (1));
seq__28054_29969 = G__29974;
chunk__28055_29970 = G__29975;
count__28056_29971 = G__29976;
i__28057_29972 = G__29977;
continue;
} else {
var temp__4126__auto___29978 = cljs.core.seq.call(null,seq__28054_29969);
if(temp__4126__auto___29978){
var seq__28054_29979__$1 = temp__4126__auto___29978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28054_29979__$1)){
var c__8291__auto___29980 = cljs.core.chunk_first.call(null,seq__28054_29979__$1);
var G__29981 = cljs.core.chunk_rest.call(null,seq__28054_29979__$1);
var G__29982 = c__8291__auto___29980;
var G__29983 = cljs.core.count.call(null,c__8291__auto___29980);
var G__29984 = (0);
seq__28054_29969 = G__29981;
chunk__28055_29970 = G__29982;
count__28056_29971 = G__29983;
i__28057_29972 = G__29984;
continue;
} else {
var arg__13071__auto___29985 = cljs.core.first.call(null,seq__28054_29979__$1);
a__13070__auto__.push(arg__13071__auto___29985);

var G__29986 = cljs.core.next.call(null,seq__28054_29979__$1);
var G__29987 = null;
var G__29988 = (0);
var G__29989 = (0);
seq__28054_29969 = G__29986;
chunk__28055_29970 = G__29987;
count__28056_29971 = G__29988;
i__28057_29972 = G__29989;
continue;
}
} else {
}
}
break;
}

return React.DOM.meter.apply(null,a__13070__auto__);
};
var meter = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__29990__i = 0, G__29990__a = new Array(arguments.length -  0);
while (G__29990__i < G__29990__a.length) {G__29990__a[G__29990__i] = arguments[G__29990__i + 0]; ++G__29990__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__29990__a,0);
} 
return meter__delegate.call(this,args__13069__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__29991){
var args__13069__auto__ = cljs.core.seq(arglist__29991);
return meter__delegate(args__13069__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28062_29992 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28063_29993 = null;
var count__28064_29994 = (0);
var i__28065_29995 = (0);
while(true){
if((i__28065_29995 < count__28064_29994)){
var arg__13071__auto___29996 = cljs.core._nth.call(null,chunk__28063_29993,i__28065_29995);
a__13070__auto__.push(arg__13071__auto___29996);

var G__29997 = seq__28062_29992;
var G__29998 = chunk__28063_29993;
var G__29999 = count__28064_29994;
var G__30000 = (i__28065_29995 + (1));
seq__28062_29992 = G__29997;
chunk__28063_29993 = G__29998;
count__28064_29994 = G__29999;
i__28065_29995 = G__30000;
continue;
} else {
var temp__4126__auto___30001 = cljs.core.seq.call(null,seq__28062_29992);
if(temp__4126__auto___30001){
var seq__28062_30002__$1 = temp__4126__auto___30001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28062_30002__$1)){
var c__8291__auto___30003 = cljs.core.chunk_first.call(null,seq__28062_30002__$1);
var G__30004 = cljs.core.chunk_rest.call(null,seq__28062_30002__$1);
var G__30005 = c__8291__auto___30003;
var G__30006 = cljs.core.count.call(null,c__8291__auto___30003);
var G__30007 = (0);
seq__28062_29992 = G__30004;
chunk__28063_29993 = G__30005;
count__28064_29994 = G__30006;
i__28065_29995 = G__30007;
continue;
} else {
var arg__13071__auto___30008 = cljs.core.first.call(null,seq__28062_30002__$1);
a__13070__auto__.push(arg__13071__auto___30008);

var G__30009 = cljs.core.next.call(null,seq__28062_30002__$1);
var G__30010 = null;
var G__30011 = (0);
var G__30012 = (0);
seq__28062_29992 = G__30009;
chunk__28063_29993 = G__30010;
count__28064_29994 = G__30011;
i__28065_29995 = G__30012;
continue;
}
} else {
}
}
break;
}

return React.DOM.nav.apply(null,a__13070__auto__);
};
var nav = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30013__i = 0, G__30013__a = new Array(arguments.length -  0);
while (G__30013__i < G__30013__a.length) {G__30013__a[G__30013__i] = arguments[G__30013__i + 0]; ++G__30013__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30013__a,0);
} 
return nav__delegate.call(this,args__13069__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__30014){
var args__13069__auto__ = cljs.core.seq(arglist__30014);
return nav__delegate(args__13069__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28070_30015 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28071_30016 = null;
var count__28072_30017 = (0);
var i__28073_30018 = (0);
while(true){
if((i__28073_30018 < count__28072_30017)){
var arg__13071__auto___30019 = cljs.core._nth.call(null,chunk__28071_30016,i__28073_30018);
a__13070__auto__.push(arg__13071__auto___30019);

var G__30020 = seq__28070_30015;
var G__30021 = chunk__28071_30016;
var G__30022 = count__28072_30017;
var G__30023 = (i__28073_30018 + (1));
seq__28070_30015 = G__30020;
chunk__28071_30016 = G__30021;
count__28072_30017 = G__30022;
i__28073_30018 = G__30023;
continue;
} else {
var temp__4126__auto___30024 = cljs.core.seq.call(null,seq__28070_30015);
if(temp__4126__auto___30024){
var seq__28070_30025__$1 = temp__4126__auto___30024;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28070_30025__$1)){
var c__8291__auto___30026 = cljs.core.chunk_first.call(null,seq__28070_30025__$1);
var G__30027 = cljs.core.chunk_rest.call(null,seq__28070_30025__$1);
var G__30028 = c__8291__auto___30026;
var G__30029 = cljs.core.count.call(null,c__8291__auto___30026);
var G__30030 = (0);
seq__28070_30015 = G__30027;
chunk__28071_30016 = G__30028;
count__28072_30017 = G__30029;
i__28073_30018 = G__30030;
continue;
} else {
var arg__13071__auto___30031 = cljs.core.first.call(null,seq__28070_30025__$1);
a__13070__auto__.push(arg__13071__auto___30031);

var G__30032 = cljs.core.next.call(null,seq__28070_30025__$1);
var G__30033 = null;
var G__30034 = (0);
var G__30035 = (0);
seq__28070_30015 = G__30032;
chunk__28071_30016 = G__30033;
count__28072_30017 = G__30034;
i__28073_30018 = G__30035;
continue;
}
} else {
}
}
break;
}

return React.DOM.noscript.apply(null,a__13070__auto__);
};
var noscript = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30036__i = 0, G__30036__a = new Array(arguments.length -  0);
while (G__30036__i < G__30036__a.length) {G__30036__a[G__30036__i] = arguments[G__30036__i + 0]; ++G__30036__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30036__a,0);
} 
return noscript__delegate.call(this,args__13069__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__30037){
var args__13069__auto__ = cljs.core.seq(arglist__30037);
return noscript__delegate(args__13069__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28078_30038 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28079_30039 = null;
var count__28080_30040 = (0);
var i__28081_30041 = (0);
while(true){
if((i__28081_30041 < count__28080_30040)){
var arg__13071__auto___30042 = cljs.core._nth.call(null,chunk__28079_30039,i__28081_30041);
a__13070__auto__.push(arg__13071__auto___30042);

var G__30043 = seq__28078_30038;
var G__30044 = chunk__28079_30039;
var G__30045 = count__28080_30040;
var G__30046 = (i__28081_30041 + (1));
seq__28078_30038 = G__30043;
chunk__28079_30039 = G__30044;
count__28080_30040 = G__30045;
i__28081_30041 = G__30046;
continue;
} else {
var temp__4126__auto___30047 = cljs.core.seq.call(null,seq__28078_30038);
if(temp__4126__auto___30047){
var seq__28078_30048__$1 = temp__4126__auto___30047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28078_30048__$1)){
var c__8291__auto___30049 = cljs.core.chunk_first.call(null,seq__28078_30048__$1);
var G__30050 = cljs.core.chunk_rest.call(null,seq__28078_30048__$1);
var G__30051 = c__8291__auto___30049;
var G__30052 = cljs.core.count.call(null,c__8291__auto___30049);
var G__30053 = (0);
seq__28078_30038 = G__30050;
chunk__28079_30039 = G__30051;
count__28080_30040 = G__30052;
i__28081_30041 = G__30053;
continue;
} else {
var arg__13071__auto___30054 = cljs.core.first.call(null,seq__28078_30048__$1);
a__13070__auto__.push(arg__13071__auto___30054);

var G__30055 = cljs.core.next.call(null,seq__28078_30048__$1);
var G__30056 = null;
var G__30057 = (0);
var G__30058 = (0);
seq__28078_30038 = G__30055;
chunk__28079_30039 = G__30056;
count__28080_30040 = G__30057;
i__28081_30041 = G__30058;
continue;
}
} else {
}
}
break;
}

return React.DOM.object.apply(null,a__13070__auto__);
};
var object = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30059__i = 0, G__30059__a = new Array(arguments.length -  0);
while (G__30059__i < G__30059__a.length) {G__30059__a[G__30059__i] = arguments[G__30059__i + 0]; ++G__30059__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30059__a,0);
} 
return object__delegate.call(this,args__13069__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__30060){
var args__13069__auto__ = cljs.core.seq(arglist__30060);
return object__delegate(args__13069__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28086_30061 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28087_30062 = null;
var count__28088_30063 = (0);
var i__28089_30064 = (0);
while(true){
if((i__28089_30064 < count__28088_30063)){
var arg__13071__auto___30065 = cljs.core._nth.call(null,chunk__28087_30062,i__28089_30064);
a__13070__auto__.push(arg__13071__auto___30065);

var G__30066 = seq__28086_30061;
var G__30067 = chunk__28087_30062;
var G__30068 = count__28088_30063;
var G__30069 = (i__28089_30064 + (1));
seq__28086_30061 = G__30066;
chunk__28087_30062 = G__30067;
count__28088_30063 = G__30068;
i__28089_30064 = G__30069;
continue;
} else {
var temp__4126__auto___30070 = cljs.core.seq.call(null,seq__28086_30061);
if(temp__4126__auto___30070){
var seq__28086_30071__$1 = temp__4126__auto___30070;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28086_30071__$1)){
var c__8291__auto___30072 = cljs.core.chunk_first.call(null,seq__28086_30071__$1);
var G__30073 = cljs.core.chunk_rest.call(null,seq__28086_30071__$1);
var G__30074 = c__8291__auto___30072;
var G__30075 = cljs.core.count.call(null,c__8291__auto___30072);
var G__30076 = (0);
seq__28086_30061 = G__30073;
chunk__28087_30062 = G__30074;
count__28088_30063 = G__30075;
i__28089_30064 = G__30076;
continue;
} else {
var arg__13071__auto___30077 = cljs.core.first.call(null,seq__28086_30071__$1);
a__13070__auto__.push(arg__13071__auto___30077);

var G__30078 = cljs.core.next.call(null,seq__28086_30071__$1);
var G__30079 = null;
var G__30080 = (0);
var G__30081 = (0);
seq__28086_30061 = G__30078;
chunk__28087_30062 = G__30079;
count__28088_30063 = G__30080;
i__28089_30064 = G__30081;
continue;
}
} else {
}
}
break;
}

return React.DOM.ol.apply(null,a__13070__auto__);
};
var ol = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30082__i = 0, G__30082__a = new Array(arguments.length -  0);
while (G__30082__i < G__30082__a.length) {G__30082__a[G__30082__i] = arguments[G__30082__i + 0]; ++G__30082__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30082__a,0);
} 
return ol__delegate.call(this,args__13069__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__30083){
var args__13069__auto__ = cljs.core.seq(arglist__30083);
return ol__delegate(args__13069__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28094_30084 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28095_30085 = null;
var count__28096_30086 = (0);
var i__28097_30087 = (0);
while(true){
if((i__28097_30087 < count__28096_30086)){
var arg__13071__auto___30088 = cljs.core._nth.call(null,chunk__28095_30085,i__28097_30087);
a__13070__auto__.push(arg__13071__auto___30088);

var G__30089 = seq__28094_30084;
var G__30090 = chunk__28095_30085;
var G__30091 = count__28096_30086;
var G__30092 = (i__28097_30087 + (1));
seq__28094_30084 = G__30089;
chunk__28095_30085 = G__30090;
count__28096_30086 = G__30091;
i__28097_30087 = G__30092;
continue;
} else {
var temp__4126__auto___30093 = cljs.core.seq.call(null,seq__28094_30084);
if(temp__4126__auto___30093){
var seq__28094_30094__$1 = temp__4126__auto___30093;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28094_30094__$1)){
var c__8291__auto___30095 = cljs.core.chunk_first.call(null,seq__28094_30094__$1);
var G__30096 = cljs.core.chunk_rest.call(null,seq__28094_30094__$1);
var G__30097 = c__8291__auto___30095;
var G__30098 = cljs.core.count.call(null,c__8291__auto___30095);
var G__30099 = (0);
seq__28094_30084 = G__30096;
chunk__28095_30085 = G__30097;
count__28096_30086 = G__30098;
i__28097_30087 = G__30099;
continue;
} else {
var arg__13071__auto___30100 = cljs.core.first.call(null,seq__28094_30094__$1);
a__13070__auto__.push(arg__13071__auto___30100);

var G__30101 = cljs.core.next.call(null,seq__28094_30094__$1);
var G__30102 = null;
var G__30103 = (0);
var G__30104 = (0);
seq__28094_30084 = G__30101;
chunk__28095_30085 = G__30102;
count__28096_30086 = G__30103;
i__28097_30087 = G__30104;
continue;
}
} else {
}
}
break;
}

return React.DOM.optgroup.apply(null,a__13070__auto__);
};
var optgroup = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30105__i = 0, G__30105__a = new Array(arguments.length -  0);
while (G__30105__i < G__30105__a.length) {G__30105__a[G__30105__i] = arguments[G__30105__i + 0]; ++G__30105__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30105__a,0);
} 
return optgroup__delegate.call(this,args__13069__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__30106){
var args__13069__auto__ = cljs.core.seq(arglist__30106);
return optgroup__delegate(args__13069__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28102_30107 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28103_30108 = null;
var count__28104_30109 = (0);
var i__28105_30110 = (0);
while(true){
if((i__28105_30110 < count__28104_30109)){
var arg__13071__auto___30111 = cljs.core._nth.call(null,chunk__28103_30108,i__28105_30110);
a__13070__auto__.push(arg__13071__auto___30111);

var G__30112 = seq__28102_30107;
var G__30113 = chunk__28103_30108;
var G__30114 = count__28104_30109;
var G__30115 = (i__28105_30110 + (1));
seq__28102_30107 = G__30112;
chunk__28103_30108 = G__30113;
count__28104_30109 = G__30114;
i__28105_30110 = G__30115;
continue;
} else {
var temp__4126__auto___30116 = cljs.core.seq.call(null,seq__28102_30107);
if(temp__4126__auto___30116){
var seq__28102_30117__$1 = temp__4126__auto___30116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28102_30117__$1)){
var c__8291__auto___30118 = cljs.core.chunk_first.call(null,seq__28102_30117__$1);
var G__30119 = cljs.core.chunk_rest.call(null,seq__28102_30117__$1);
var G__30120 = c__8291__auto___30118;
var G__30121 = cljs.core.count.call(null,c__8291__auto___30118);
var G__30122 = (0);
seq__28102_30107 = G__30119;
chunk__28103_30108 = G__30120;
count__28104_30109 = G__30121;
i__28105_30110 = G__30122;
continue;
} else {
var arg__13071__auto___30123 = cljs.core.first.call(null,seq__28102_30117__$1);
a__13070__auto__.push(arg__13071__auto___30123);

var G__30124 = cljs.core.next.call(null,seq__28102_30117__$1);
var G__30125 = null;
var G__30126 = (0);
var G__30127 = (0);
seq__28102_30107 = G__30124;
chunk__28103_30108 = G__30125;
count__28104_30109 = G__30126;
i__28105_30110 = G__30127;
continue;
}
} else {
}
}
break;
}

return React.DOM.option.apply(null,a__13070__auto__);
};
var option = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30128__i = 0, G__30128__a = new Array(arguments.length -  0);
while (G__30128__i < G__30128__a.length) {G__30128__a[G__30128__i] = arguments[G__30128__i + 0]; ++G__30128__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30128__a,0);
} 
return option__delegate.call(this,args__13069__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__30129){
var args__13069__auto__ = cljs.core.seq(arglist__30129);
return option__delegate(args__13069__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28110_30130 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28111_30131 = null;
var count__28112_30132 = (0);
var i__28113_30133 = (0);
while(true){
if((i__28113_30133 < count__28112_30132)){
var arg__13071__auto___30134 = cljs.core._nth.call(null,chunk__28111_30131,i__28113_30133);
a__13070__auto__.push(arg__13071__auto___30134);

var G__30135 = seq__28110_30130;
var G__30136 = chunk__28111_30131;
var G__30137 = count__28112_30132;
var G__30138 = (i__28113_30133 + (1));
seq__28110_30130 = G__30135;
chunk__28111_30131 = G__30136;
count__28112_30132 = G__30137;
i__28113_30133 = G__30138;
continue;
} else {
var temp__4126__auto___30139 = cljs.core.seq.call(null,seq__28110_30130);
if(temp__4126__auto___30139){
var seq__28110_30140__$1 = temp__4126__auto___30139;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28110_30140__$1)){
var c__8291__auto___30141 = cljs.core.chunk_first.call(null,seq__28110_30140__$1);
var G__30142 = cljs.core.chunk_rest.call(null,seq__28110_30140__$1);
var G__30143 = c__8291__auto___30141;
var G__30144 = cljs.core.count.call(null,c__8291__auto___30141);
var G__30145 = (0);
seq__28110_30130 = G__30142;
chunk__28111_30131 = G__30143;
count__28112_30132 = G__30144;
i__28113_30133 = G__30145;
continue;
} else {
var arg__13071__auto___30146 = cljs.core.first.call(null,seq__28110_30140__$1);
a__13070__auto__.push(arg__13071__auto___30146);

var G__30147 = cljs.core.next.call(null,seq__28110_30140__$1);
var G__30148 = null;
var G__30149 = (0);
var G__30150 = (0);
seq__28110_30130 = G__30147;
chunk__28111_30131 = G__30148;
count__28112_30132 = G__30149;
i__28113_30133 = G__30150;
continue;
}
} else {
}
}
break;
}

return React.DOM.output.apply(null,a__13070__auto__);
};
var output = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30151__i = 0, G__30151__a = new Array(arguments.length -  0);
while (G__30151__i < G__30151__a.length) {G__30151__a[G__30151__i] = arguments[G__30151__i + 0]; ++G__30151__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30151__a,0);
} 
return output__delegate.call(this,args__13069__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__30152){
var args__13069__auto__ = cljs.core.seq(arglist__30152);
return output__delegate(args__13069__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28118_30153 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28119_30154 = null;
var count__28120_30155 = (0);
var i__28121_30156 = (0);
while(true){
if((i__28121_30156 < count__28120_30155)){
var arg__13071__auto___30157 = cljs.core._nth.call(null,chunk__28119_30154,i__28121_30156);
a__13070__auto__.push(arg__13071__auto___30157);

var G__30158 = seq__28118_30153;
var G__30159 = chunk__28119_30154;
var G__30160 = count__28120_30155;
var G__30161 = (i__28121_30156 + (1));
seq__28118_30153 = G__30158;
chunk__28119_30154 = G__30159;
count__28120_30155 = G__30160;
i__28121_30156 = G__30161;
continue;
} else {
var temp__4126__auto___30162 = cljs.core.seq.call(null,seq__28118_30153);
if(temp__4126__auto___30162){
var seq__28118_30163__$1 = temp__4126__auto___30162;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28118_30163__$1)){
var c__8291__auto___30164 = cljs.core.chunk_first.call(null,seq__28118_30163__$1);
var G__30165 = cljs.core.chunk_rest.call(null,seq__28118_30163__$1);
var G__30166 = c__8291__auto___30164;
var G__30167 = cljs.core.count.call(null,c__8291__auto___30164);
var G__30168 = (0);
seq__28118_30153 = G__30165;
chunk__28119_30154 = G__30166;
count__28120_30155 = G__30167;
i__28121_30156 = G__30168;
continue;
} else {
var arg__13071__auto___30169 = cljs.core.first.call(null,seq__28118_30163__$1);
a__13070__auto__.push(arg__13071__auto___30169);

var G__30170 = cljs.core.next.call(null,seq__28118_30163__$1);
var G__30171 = null;
var G__30172 = (0);
var G__30173 = (0);
seq__28118_30153 = G__30170;
chunk__28119_30154 = G__30171;
count__28120_30155 = G__30172;
i__28121_30156 = G__30173;
continue;
}
} else {
}
}
break;
}

return React.DOM.p.apply(null,a__13070__auto__);
};
var p = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30174__i = 0, G__30174__a = new Array(arguments.length -  0);
while (G__30174__i < G__30174__a.length) {G__30174__a[G__30174__i] = arguments[G__30174__i + 0]; ++G__30174__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30174__a,0);
} 
return p__delegate.call(this,args__13069__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__30175){
var args__13069__auto__ = cljs.core.seq(arglist__30175);
return p__delegate(args__13069__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28126_30176 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28127_30177 = null;
var count__28128_30178 = (0);
var i__28129_30179 = (0);
while(true){
if((i__28129_30179 < count__28128_30178)){
var arg__13071__auto___30180 = cljs.core._nth.call(null,chunk__28127_30177,i__28129_30179);
a__13070__auto__.push(arg__13071__auto___30180);

var G__30181 = seq__28126_30176;
var G__30182 = chunk__28127_30177;
var G__30183 = count__28128_30178;
var G__30184 = (i__28129_30179 + (1));
seq__28126_30176 = G__30181;
chunk__28127_30177 = G__30182;
count__28128_30178 = G__30183;
i__28129_30179 = G__30184;
continue;
} else {
var temp__4126__auto___30185 = cljs.core.seq.call(null,seq__28126_30176);
if(temp__4126__auto___30185){
var seq__28126_30186__$1 = temp__4126__auto___30185;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28126_30186__$1)){
var c__8291__auto___30187 = cljs.core.chunk_first.call(null,seq__28126_30186__$1);
var G__30188 = cljs.core.chunk_rest.call(null,seq__28126_30186__$1);
var G__30189 = c__8291__auto___30187;
var G__30190 = cljs.core.count.call(null,c__8291__auto___30187);
var G__30191 = (0);
seq__28126_30176 = G__30188;
chunk__28127_30177 = G__30189;
count__28128_30178 = G__30190;
i__28129_30179 = G__30191;
continue;
} else {
var arg__13071__auto___30192 = cljs.core.first.call(null,seq__28126_30186__$1);
a__13070__auto__.push(arg__13071__auto___30192);

var G__30193 = cljs.core.next.call(null,seq__28126_30186__$1);
var G__30194 = null;
var G__30195 = (0);
var G__30196 = (0);
seq__28126_30176 = G__30193;
chunk__28127_30177 = G__30194;
count__28128_30178 = G__30195;
i__28129_30179 = G__30196;
continue;
}
} else {
}
}
break;
}

return React.DOM.param.apply(null,a__13070__auto__);
};
var param = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30197__i = 0, G__30197__a = new Array(arguments.length -  0);
while (G__30197__i < G__30197__a.length) {G__30197__a[G__30197__i] = arguments[G__30197__i + 0]; ++G__30197__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30197__a,0);
} 
return param__delegate.call(this,args__13069__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__30198){
var args__13069__auto__ = cljs.core.seq(arglist__30198);
return param__delegate(args__13069__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28134_30199 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28135_30200 = null;
var count__28136_30201 = (0);
var i__28137_30202 = (0);
while(true){
if((i__28137_30202 < count__28136_30201)){
var arg__13071__auto___30203 = cljs.core._nth.call(null,chunk__28135_30200,i__28137_30202);
a__13070__auto__.push(arg__13071__auto___30203);

var G__30204 = seq__28134_30199;
var G__30205 = chunk__28135_30200;
var G__30206 = count__28136_30201;
var G__30207 = (i__28137_30202 + (1));
seq__28134_30199 = G__30204;
chunk__28135_30200 = G__30205;
count__28136_30201 = G__30206;
i__28137_30202 = G__30207;
continue;
} else {
var temp__4126__auto___30208 = cljs.core.seq.call(null,seq__28134_30199);
if(temp__4126__auto___30208){
var seq__28134_30209__$1 = temp__4126__auto___30208;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28134_30209__$1)){
var c__8291__auto___30210 = cljs.core.chunk_first.call(null,seq__28134_30209__$1);
var G__30211 = cljs.core.chunk_rest.call(null,seq__28134_30209__$1);
var G__30212 = c__8291__auto___30210;
var G__30213 = cljs.core.count.call(null,c__8291__auto___30210);
var G__30214 = (0);
seq__28134_30199 = G__30211;
chunk__28135_30200 = G__30212;
count__28136_30201 = G__30213;
i__28137_30202 = G__30214;
continue;
} else {
var arg__13071__auto___30215 = cljs.core.first.call(null,seq__28134_30209__$1);
a__13070__auto__.push(arg__13071__auto___30215);

var G__30216 = cljs.core.next.call(null,seq__28134_30209__$1);
var G__30217 = null;
var G__30218 = (0);
var G__30219 = (0);
seq__28134_30199 = G__30216;
chunk__28135_30200 = G__30217;
count__28136_30201 = G__30218;
i__28137_30202 = G__30219;
continue;
}
} else {
}
}
break;
}

return React.DOM.pre.apply(null,a__13070__auto__);
};
var pre = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30220__i = 0, G__30220__a = new Array(arguments.length -  0);
while (G__30220__i < G__30220__a.length) {G__30220__a[G__30220__i] = arguments[G__30220__i + 0]; ++G__30220__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30220__a,0);
} 
return pre__delegate.call(this,args__13069__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__30221){
var args__13069__auto__ = cljs.core.seq(arglist__30221);
return pre__delegate(args__13069__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28142_30222 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28143_30223 = null;
var count__28144_30224 = (0);
var i__28145_30225 = (0);
while(true){
if((i__28145_30225 < count__28144_30224)){
var arg__13071__auto___30226 = cljs.core._nth.call(null,chunk__28143_30223,i__28145_30225);
a__13070__auto__.push(arg__13071__auto___30226);

var G__30227 = seq__28142_30222;
var G__30228 = chunk__28143_30223;
var G__30229 = count__28144_30224;
var G__30230 = (i__28145_30225 + (1));
seq__28142_30222 = G__30227;
chunk__28143_30223 = G__30228;
count__28144_30224 = G__30229;
i__28145_30225 = G__30230;
continue;
} else {
var temp__4126__auto___30231 = cljs.core.seq.call(null,seq__28142_30222);
if(temp__4126__auto___30231){
var seq__28142_30232__$1 = temp__4126__auto___30231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28142_30232__$1)){
var c__8291__auto___30233 = cljs.core.chunk_first.call(null,seq__28142_30232__$1);
var G__30234 = cljs.core.chunk_rest.call(null,seq__28142_30232__$1);
var G__30235 = c__8291__auto___30233;
var G__30236 = cljs.core.count.call(null,c__8291__auto___30233);
var G__30237 = (0);
seq__28142_30222 = G__30234;
chunk__28143_30223 = G__30235;
count__28144_30224 = G__30236;
i__28145_30225 = G__30237;
continue;
} else {
var arg__13071__auto___30238 = cljs.core.first.call(null,seq__28142_30232__$1);
a__13070__auto__.push(arg__13071__auto___30238);

var G__30239 = cljs.core.next.call(null,seq__28142_30232__$1);
var G__30240 = null;
var G__30241 = (0);
var G__30242 = (0);
seq__28142_30222 = G__30239;
chunk__28143_30223 = G__30240;
count__28144_30224 = G__30241;
i__28145_30225 = G__30242;
continue;
}
} else {
}
}
break;
}

return React.DOM.progress.apply(null,a__13070__auto__);
};
var progress = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30243__i = 0, G__30243__a = new Array(arguments.length -  0);
while (G__30243__i < G__30243__a.length) {G__30243__a[G__30243__i] = arguments[G__30243__i + 0]; ++G__30243__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30243__a,0);
} 
return progress__delegate.call(this,args__13069__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__30244){
var args__13069__auto__ = cljs.core.seq(arglist__30244);
return progress__delegate(args__13069__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28150_30245 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28151_30246 = null;
var count__28152_30247 = (0);
var i__28153_30248 = (0);
while(true){
if((i__28153_30248 < count__28152_30247)){
var arg__13071__auto___30249 = cljs.core._nth.call(null,chunk__28151_30246,i__28153_30248);
a__13070__auto__.push(arg__13071__auto___30249);

var G__30250 = seq__28150_30245;
var G__30251 = chunk__28151_30246;
var G__30252 = count__28152_30247;
var G__30253 = (i__28153_30248 + (1));
seq__28150_30245 = G__30250;
chunk__28151_30246 = G__30251;
count__28152_30247 = G__30252;
i__28153_30248 = G__30253;
continue;
} else {
var temp__4126__auto___30254 = cljs.core.seq.call(null,seq__28150_30245);
if(temp__4126__auto___30254){
var seq__28150_30255__$1 = temp__4126__auto___30254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28150_30255__$1)){
var c__8291__auto___30256 = cljs.core.chunk_first.call(null,seq__28150_30255__$1);
var G__30257 = cljs.core.chunk_rest.call(null,seq__28150_30255__$1);
var G__30258 = c__8291__auto___30256;
var G__30259 = cljs.core.count.call(null,c__8291__auto___30256);
var G__30260 = (0);
seq__28150_30245 = G__30257;
chunk__28151_30246 = G__30258;
count__28152_30247 = G__30259;
i__28153_30248 = G__30260;
continue;
} else {
var arg__13071__auto___30261 = cljs.core.first.call(null,seq__28150_30255__$1);
a__13070__auto__.push(arg__13071__auto___30261);

var G__30262 = cljs.core.next.call(null,seq__28150_30255__$1);
var G__30263 = null;
var G__30264 = (0);
var G__30265 = (0);
seq__28150_30245 = G__30262;
chunk__28151_30246 = G__30263;
count__28152_30247 = G__30264;
i__28153_30248 = G__30265;
continue;
}
} else {
}
}
break;
}

return React.DOM.q.apply(null,a__13070__auto__);
};
var q = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30266__i = 0, G__30266__a = new Array(arguments.length -  0);
while (G__30266__i < G__30266__a.length) {G__30266__a[G__30266__i] = arguments[G__30266__i + 0]; ++G__30266__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30266__a,0);
} 
return q__delegate.call(this,args__13069__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__30267){
var args__13069__auto__ = cljs.core.seq(arglist__30267);
return q__delegate(args__13069__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28158_30268 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28159_30269 = null;
var count__28160_30270 = (0);
var i__28161_30271 = (0);
while(true){
if((i__28161_30271 < count__28160_30270)){
var arg__13071__auto___30272 = cljs.core._nth.call(null,chunk__28159_30269,i__28161_30271);
a__13070__auto__.push(arg__13071__auto___30272);

var G__30273 = seq__28158_30268;
var G__30274 = chunk__28159_30269;
var G__30275 = count__28160_30270;
var G__30276 = (i__28161_30271 + (1));
seq__28158_30268 = G__30273;
chunk__28159_30269 = G__30274;
count__28160_30270 = G__30275;
i__28161_30271 = G__30276;
continue;
} else {
var temp__4126__auto___30277 = cljs.core.seq.call(null,seq__28158_30268);
if(temp__4126__auto___30277){
var seq__28158_30278__$1 = temp__4126__auto___30277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28158_30278__$1)){
var c__8291__auto___30279 = cljs.core.chunk_first.call(null,seq__28158_30278__$1);
var G__30280 = cljs.core.chunk_rest.call(null,seq__28158_30278__$1);
var G__30281 = c__8291__auto___30279;
var G__30282 = cljs.core.count.call(null,c__8291__auto___30279);
var G__30283 = (0);
seq__28158_30268 = G__30280;
chunk__28159_30269 = G__30281;
count__28160_30270 = G__30282;
i__28161_30271 = G__30283;
continue;
} else {
var arg__13071__auto___30284 = cljs.core.first.call(null,seq__28158_30278__$1);
a__13070__auto__.push(arg__13071__auto___30284);

var G__30285 = cljs.core.next.call(null,seq__28158_30278__$1);
var G__30286 = null;
var G__30287 = (0);
var G__30288 = (0);
seq__28158_30268 = G__30285;
chunk__28159_30269 = G__30286;
count__28160_30270 = G__30287;
i__28161_30271 = G__30288;
continue;
}
} else {
}
}
break;
}

return React.DOM.rp.apply(null,a__13070__auto__);
};
var rp = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30289__i = 0, G__30289__a = new Array(arguments.length -  0);
while (G__30289__i < G__30289__a.length) {G__30289__a[G__30289__i] = arguments[G__30289__i + 0]; ++G__30289__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30289__a,0);
} 
return rp__delegate.call(this,args__13069__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__30290){
var args__13069__auto__ = cljs.core.seq(arglist__30290);
return rp__delegate(args__13069__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28166_30291 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28167_30292 = null;
var count__28168_30293 = (0);
var i__28169_30294 = (0);
while(true){
if((i__28169_30294 < count__28168_30293)){
var arg__13071__auto___30295 = cljs.core._nth.call(null,chunk__28167_30292,i__28169_30294);
a__13070__auto__.push(arg__13071__auto___30295);

var G__30296 = seq__28166_30291;
var G__30297 = chunk__28167_30292;
var G__30298 = count__28168_30293;
var G__30299 = (i__28169_30294 + (1));
seq__28166_30291 = G__30296;
chunk__28167_30292 = G__30297;
count__28168_30293 = G__30298;
i__28169_30294 = G__30299;
continue;
} else {
var temp__4126__auto___30300 = cljs.core.seq.call(null,seq__28166_30291);
if(temp__4126__auto___30300){
var seq__28166_30301__$1 = temp__4126__auto___30300;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28166_30301__$1)){
var c__8291__auto___30302 = cljs.core.chunk_first.call(null,seq__28166_30301__$1);
var G__30303 = cljs.core.chunk_rest.call(null,seq__28166_30301__$1);
var G__30304 = c__8291__auto___30302;
var G__30305 = cljs.core.count.call(null,c__8291__auto___30302);
var G__30306 = (0);
seq__28166_30291 = G__30303;
chunk__28167_30292 = G__30304;
count__28168_30293 = G__30305;
i__28169_30294 = G__30306;
continue;
} else {
var arg__13071__auto___30307 = cljs.core.first.call(null,seq__28166_30301__$1);
a__13070__auto__.push(arg__13071__auto___30307);

var G__30308 = cljs.core.next.call(null,seq__28166_30301__$1);
var G__30309 = null;
var G__30310 = (0);
var G__30311 = (0);
seq__28166_30291 = G__30308;
chunk__28167_30292 = G__30309;
count__28168_30293 = G__30310;
i__28169_30294 = G__30311;
continue;
}
} else {
}
}
break;
}

return React.DOM.rt.apply(null,a__13070__auto__);
};
var rt = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30312__i = 0, G__30312__a = new Array(arguments.length -  0);
while (G__30312__i < G__30312__a.length) {G__30312__a[G__30312__i] = arguments[G__30312__i + 0]; ++G__30312__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30312__a,0);
} 
return rt__delegate.call(this,args__13069__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__30313){
var args__13069__auto__ = cljs.core.seq(arglist__30313);
return rt__delegate(args__13069__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28174_30314 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28175_30315 = null;
var count__28176_30316 = (0);
var i__28177_30317 = (0);
while(true){
if((i__28177_30317 < count__28176_30316)){
var arg__13071__auto___30318 = cljs.core._nth.call(null,chunk__28175_30315,i__28177_30317);
a__13070__auto__.push(arg__13071__auto___30318);

var G__30319 = seq__28174_30314;
var G__30320 = chunk__28175_30315;
var G__30321 = count__28176_30316;
var G__30322 = (i__28177_30317 + (1));
seq__28174_30314 = G__30319;
chunk__28175_30315 = G__30320;
count__28176_30316 = G__30321;
i__28177_30317 = G__30322;
continue;
} else {
var temp__4126__auto___30323 = cljs.core.seq.call(null,seq__28174_30314);
if(temp__4126__auto___30323){
var seq__28174_30324__$1 = temp__4126__auto___30323;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28174_30324__$1)){
var c__8291__auto___30325 = cljs.core.chunk_first.call(null,seq__28174_30324__$1);
var G__30326 = cljs.core.chunk_rest.call(null,seq__28174_30324__$1);
var G__30327 = c__8291__auto___30325;
var G__30328 = cljs.core.count.call(null,c__8291__auto___30325);
var G__30329 = (0);
seq__28174_30314 = G__30326;
chunk__28175_30315 = G__30327;
count__28176_30316 = G__30328;
i__28177_30317 = G__30329;
continue;
} else {
var arg__13071__auto___30330 = cljs.core.first.call(null,seq__28174_30324__$1);
a__13070__auto__.push(arg__13071__auto___30330);

var G__30331 = cljs.core.next.call(null,seq__28174_30324__$1);
var G__30332 = null;
var G__30333 = (0);
var G__30334 = (0);
seq__28174_30314 = G__30331;
chunk__28175_30315 = G__30332;
count__28176_30316 = G__30333;
i__28177_30317 = G__30334;
continue;
}
} else {
}
}
break;
}

return React.DOM.ruby.apply(null,a__13070__auto__);
};
var ruby = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30335__i = 0, G__30335__a = new Array(arguments.length -  0);
while (G__30335__i < G__30335__a.length) {G__30335__a[G__30335__i] = arguments[G__30335__i + 0]; ++G__30335__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30335__a,0);
} 
return ruby__delegate.call(this,args__13069__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__30336){
var args__13069__auto__ = cljs.core.seq(arglist__30336);
return ruby__delegate(args__13069__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28182_30337 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28183_30338 = null;
var count__28184_30339 = (0);
var i__28185_30340 = (0);
while(true){
if((i__28185_30340 < count__28184_30339)){
var arg__13071__auto___30341 = cljs.core._nth.call(null,chunk__28183_30338,i__28185_30340);
a__13070__auto__.push(arg__13071__auto___30341);

var G__30342 = seq__28182_30337;
var G__30343 = chunk__28183_30338;
var G__30344 = count__28184_30339;
var G__30345 = (i__28185_30340 + (1));
seq__28182_30337 = G__30342;
chunk__28183_30338 = G__30343;
count__28184_30339 = G__30344;
i__28185_30340 = G__30345;
continue;
} else {
var temp__4126__auto___30346 = cljs.core.seq.call(null,seq__28182_30337);
if(temp__4126__auto___30346){
var seq__28182_30347__$1 = temp__4126__auto___30346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28182_30347__$1)){
var c__8291__auto___30348 = cljs.core.chunk_first.call(null,seq__28182_30347__$1);
var G__30349 = cljs.core.chunk_rest.call(null,seq__28182_30347__$1);
var G__30350 = c__8291__auto___30348;
var G__30351 = cljs.core.count.call(null,c__8291__auto___30348);
var G__30352 = (0);
seq__28182_30337 = G__30349;
chunk__28183_30338 = G__30350;
count__28184_30339 = G__30351;
i__28185_30340 = G__30352;
continue;
} else {
var arg__13071__auto___30353 = cljs.core.first.call(null,seq__28182_30347__$1);
a__13070__auto__.push(arg__13071__auto___30353);

var G__30354 = cljs.core.next.call(null,seq__28182_30347__$1);
var G__30355 = null;
var G__30356 = (0);
var G__30357 = (0);
seq__28182_30337 = G__30354;
chunk__28183_30338 = G__30355;
count__28184_30339 = G__30356;
i__28185_30340 = G__30357;
continue;
}
} else {
}
}
break;
}

return React.DOM.s.apply(null,a__13070__auto__);
};
var s = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30358__i = 0, G__30358__a = new Array(arguments.length -  0);
while (G__30358__i < G__30358__a.length) {G__30358__a[G__30358__i] = arguments[G__30358__i + 0]; ++G__30358__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30358__a,0);
} 
return s__delegate.call(this,args__13069__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__30359){
var args__13069__auto__ = cljs.core.seq(arglist__30359);
return s__delegate(args__13069__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28190_30360 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28191_30361 = null;
var count__28192_30362 = (0);
var i__28193_30363 = (0);
while(true){
if((i__28193_30363 < count__28192_30362)){
var arg__13071__auto___30364 = cljs.core._nth.call(null,chunk__28191_30361,i__28193_30363);
a__13070__auto__.push(arg__13071__auto___30364);

var G__30365 = seq__28190_30360;
var G__30366 = chunk__28191_30361;
var G__30367 = count__28192_30362;
var G__30368 = (i__28193_30363 + (1));
seq__28190_30360 = G__30365;
chunk__28191_30361 = G__30366;
count__28192_30362 = G__30367;
i__28193_30363 = G__30368;
continue;
} else {
var temp__4126__auto___30369 = cljs.core.seq.call(null,seq__28190_30360);
if(temp__4126__auto___30369){
var seq__28190_30370__$1 = temp__4126__auto___30369;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28190_30370__$1)){
var c__8291__auto___30371 = cljs.core.chunk_first.call(null,seq__28190_30370__$1);
var G__30372 = cljs.core.chunk_rest.call(null,seq__28190_30370__$1);
var G__30373 = c__8291__auto___30371;
var G__30374 = cljs.core.count.call(null,c__8291__auto___30371);
var G__30375 = (0);
seq__28190_30360 = G__30372;
chunk__28191_30361 = G__30373;
count__28192_30362 = G__30374;
i__28193_30363 = G__30375;
continue;
} else {
var arg__13071__auto___30376 = cljs.core.first.call(null,seq__28190_30370__$1);
a__13070__auto__.push(arg__13071__auto___30376);

var G__30377 = cljs.core.next.call(null,seq__28190_30370__$1);
var G__30378 = null;
var G__30379 = (0);
var G__30380 = (0);
seq__28190_30360 = G__30377;
chunk__28191_30361 = G__30378;
count__28192_30362 = G__30379;
i__28193_30363 = G__30380;
continue;
}
} else {
}
}
break;
}

return React.DOM.samp.apply(null,a__13070__auto__);
};
var samp = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30381__i = 0, G__30381__a = new Array(arguments.length -  0);
while (G__30381__i < G__30381__a.length) {G__30381__a[G__30381__i] = arguments[G__30381__i + 0]; ++G__30381__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30381__a,0);
} 
return samp__delegate.call(this,args__13069__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__30382){
var args__13069__auto__ = cljs.core.seq(arglist__30382);
return samp__delegate(args__13069__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28198_30383 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28199_30384 = null;
var count__28200_30385 = (0);
var i__28201_30386 = (0);
while(true){
if((i__28201_30386 < count__28200_30385)){
var arg__13071__auto___30387 = cljs.core._nth.call(null,chunk__28199_30384,i__28201_30386);
a__13070__auto__.push(arg__13071__auto___30387);

var G__30388 = seq__28198_30383;
var G__30389 = chunk__28199_30384;
var G__30390 = count__28200_30385;
var G__30391 = (i__28201_30386 + (1));
seq__28198_30383 = G__30388;
chunk__28199_30384 = G__30389;
count__28200_30385 = G__30390;
i__28201_30386 = G__30391;
continue;
} else {
var temp__4126__auto___30392 = cljs.core.seq.call(null,seq__28198_30383);
if(temp__4126__auto___30392){
var seq__28198_30393__$1 = temp__4126__auto___30392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28198_30393__$1)){
var c__8291__auto___30394 = cljs.core.chunk_first.call(null,seq__28198_30393__$1);
var G__30395 = cljs.core.chunk_rest.call(null,seq__28198_30393__$1);
var G__30396 = c__8291__auto___30394;
var G__30397 = cljs.core.count.call(null,c__8291__auto___30394);
var G__30398 = (0);
seq__28198_30383 = G__30395;
chunk__28199_30384 = G__30396;
count__28200_30385 = G__30397;
i__28201_30386 = G__30398;
continue;
} else {
var arg__13071__auto___30399 = cljs.core.first.call(null,seq__28198_30393__$1);
a__13070__auto__.push(arg__13071__auto___30399);

var G__30400 = cljs.core.next.call(null,seq__28198_30393__$1);
var G__30401 = null;
var G__30402 = (0);
var G__30403 = (0);
seq__28198_30383 = G__30400;
chunk__28199_30384 = G__30401;
count__28200_30385 = G__30402;
i__28201_30386 = G__30403;
continue;
}
} else {
}
}
break;
}

return React.DOM.script.apply(null,a__13070__auto__);
};
var script = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30404__i = 0, G__30404__a = new Array(arguments.length -  0);
while (G__30404__i < G__30404__a.length) {G__30404__a[G__30404__i] = arguments[G__30404__i + 0]; ++G__30404__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30404__a,0);
} 
return script__delegate.call(this,args__13069__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__30405){
var args__13069__auto__ = cljs.core.seq(arglist__30405);
return script__delegate(args__13069__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28206_30406 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28207_30407 = null;
var count__28208_30408 = (0);
var i__28209_30409 = (0);
while(true){
if((i__28209_30409 < count__28208_30408)){
var arg__13071__auto___30410 = cljs.core._nth.call(null,chunk__28207_30407,i__28209_30409);
a__13070__auto__.push(arg__13071__auto___30410);

var G__30411 = seq__28206_30406;
var G__30412 = chunk__28207_30407;
var G__30413 = count__28208_30408;
var G__30414 = (i__28209_30409 + (1));
seq__28206_30406 = G__30411;
chunk__28207_30407 = G__30412;
count__28208_30408 = G__30413;
i__28209_30409 = G__30414;
continue;
} else {
var temp__4126__auto___30415 = cljs.core.seq.call(null,seq__28206_30406);
if(temp__4126__auto___30415){
var seq__28206_30416__$1 = temp__4126__auto___30415;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28206_30416__$1)){
var c__8291__auto___30417 = cljs.core.chunk_first.call(null,seq__28206_30416__$1);
var G__30418 = cljs.core.chunk_rest.call(null,seq__28206_30416__$1);
var G__30419 = c__8291__auto___30417;
var G__30420 = cljs.core.count.call(null,c__8291__auto___30417);
var G__30421 = (0);
seq__28206_30406 = G__30418;
chunk__28207_30407 = G__30419;
count__28208_30408 = G__30420;
i__28209_30409 = G__30421;
continue;
} else {
var arg__13071__auto___30422 = cljs.core.first.call(null,seq__28206_30416__$1);
a__13070__auto__.push(arg__13071__auto___30422);

var G__30423 = cljs.core.next.call(null,seq__28206_30416__$1);
var G__30424 = null;
var G__30425 = (0);
var G__30426 = (0);
seq__28206_30406 = G__30423;
chunk__28207_30407 = G__30424;
count__28208_30408 = G__30425;
i__28209_30409 = G__30426;
continue;
}
} else {
}
}
break;
}

return React.DOM.section.apply(null,a__13070__auto__);
};
var section = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30427__i = 0, G__30427__a = new Array(arguments.length -  0);
while (G__30427__i < G__30427__a.length) {G__30427__a[G__30427__i] = arguments[G__30427__i + 0]; ++G__30427__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30427__a,0);
} 
return section__delegate.call(this,args__13069__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__30428){
var args__13069__auto__ = cljs.core.seq(arglist__30428);
return section__delegate(args__13069__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28214_30429 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28215_30430 = null;
var count__28216_30431 = (0);
var i__28217_30432 = (0);
while(true){
if((i__28217_30432 < count__28216_30431)){
var arg__13071__auto___30433 = cljs.core._nth.call(null,chunk__28215_30430,i__28217_30432);
a__13070__auto__.push(arg__13071__auto___30433);

var G__30434 = seq__28214_30429;
var G__30435 = chunk__28215_30430;
var G__30436 = count__28216_30431;
var G__30437 = (i__28217_30432 + (1));
seq__28214_30429 = G__30434;
chunk__28215_30430 = G__30435;
count__28216_30431 = G__30436;
i__28217_30432 = G__30437;
continue;
} else {
var temp__4126__auto___30438 = cljs.core.seq.call(null,seq__28214_30429);
if(temp__4126__auto___30438){
var seq__28214_30439__$1 = temp__4126__auto___30438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28214_30439__$1)){
var c__8291__auto___30440 = cljs.core.chunk_first.call(null,seq__28214_30439__$1);
var G__30441 = cljs.core.chunk_rest.call(null,seq__28214_30439__$1);
var G__30442 = c__8291__auto___30440;
var G__30443 = cljs.core.count.call(null,c__8291__auto___30440);
var G__30444 = (0);
seq__28214_30429 = G__30441;
chunk__28215_30430 = G__30442;
count__28216_30431 = G__30443;
i__28217_30432 = G__30444;
continue;
} else {
var arg__13071__auto___30445 = cljs.core.first.call(null,seq__28214_30439__$1);
a__13070__auto__.push(arg__13071__auto___30445);

var G__30446 = cljs.core.next.call(null,seq__28214_30439__$1);
var G__30447 = null;
var G__30448 = (0);
var G__30449 = (0);
seq__28214_30429 = G__30446;
chunk__28215_30430 = G__30447;
count__28216_30431 = G__30448;
i__28217_30432 = G__30449;
continue;
}
} else {
}
}
break;
}

return React.DOM.select.apply(null,a__13070__auto__);
};
var select = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30450__i = 0, G__30450__a = new Array(arguments.length -  0);
while (G__30450__i < G__30450__a.length) {G__30450__a[G__30450__i] = arguments[G__30450__i + 0]; ++G__30450__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30450__a,0);
} 
return select__delegate.call(this,args__13069__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__30451){
var args__13069__auto__ = cljs.core.seq(arglist__30451);
return select__delegate(args__13069__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28222_30452 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28223_30453 = null;
var count__28224_30454 = (0);
var i__28225_30455 = (0);
while(true){
if((i__28225_30455 < count__28224_30454)){
var arg__13071__auto___30456 = cljs.core._nth.call(null,chunk__28223_30453,i__28225_30455);
a__13070__auto__.push(arg__13071__auto___30456);

var G__30457 = seq__28222_30452;
var G__30458 = chunk__28223_30453;
var G__30459 = count__28224_30454;
var G__30460 = (i__28225_30455 + (1));
seq__28222_30452 = G__30457;
chunk__28223_30453 = G__30458;
count__28224_30454 = G__30459;
i__28225_30455 = G__30460;
continue;
} else {
var temp__4126__auto___30461 = cljs.core.seq.call(null,seq__28222_30452);
if(temp__4126__auto___30461){
var seq__28222_30462__$1 = temp__4126__auto___30461;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28222_30462__$1)){
var c__8291__auto___30463 = cljs.core.chunk_first.call(null,seq__28222_30462__$1);
var G__30464 = cljs.core.chunk_rest.call(null,seq__28222_30462__$1);
var G__30465 = c__8291__auto___30463;
var G__30466 = cljs.core.count.call(null,c__8291__auto___30463);
var G__30467 = (0);
seq__28222_30452 = G__30464;
chunk__28223_30453 = G__30465;
count__28224_30454 = G__30466;
i__28225_30455 = G__30467;
continue;
} else {
var arg__13071__auto___30468 = cljs.core.first.call(null,seq__28222_30462__$1);
a__13070__auto__.push(arg__13071__auto___30468);

var G__30469 = cljs.core.next.call(null,seq__28222_30462__$1);
var G__30470 = null;
var G__30471 = (0);
var G__30472 = (0);
seq__28222_30452 = G__30469;
chunk__28223_30453 = G__30470;
count__28224_30454 = G__30471;
i__28225_30455 = G__30472;
continue;
}
} else {
}
}
break;
}

return React.DOM.small.apply(null,a__13070__auto__);
};
var small = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30473__i = 0, G__30473__a = new Array(arguments.length -  0);
while (G__30473__i < G__30473__a.length) {G__30473__a[G__30473__i] = arguments[G__30473__i + 0]; ++G__30473__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30473__a,0);
} 
return small__delegate.call(this,args__13069__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__30474){
var args__13069__auto__ = cljs.core.seq(arglist__30474);
return small__delegate(args__13069__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28230_30475 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28231_30476 = null;
var count__28232_30477 = (0);
var i__28233_30478 = (0);
while(true){
if((i__28233_30478 < count__28232_30477)){
var arg__13071__auto___30479 = cljs.core._nth.call(null,chunk__28231_30476,i__28233_30478);
a__13070__auto__.push(arg__13071__auto___30479);

var G__30480 = seq__28230_30475;
var G__30481 = chunk__28231_30476;
var G__30482 = count__28232_30477;
var G__30483 = (i__28233_30478 + (1));
seq__28230_30475 = G__30480;
chunk__28231_30476 = G__30481;
count__28232_30477 = G__30482;
i__28233_30478 = G__30483;
continue;
} else {
var temp__4126__auto___30484 = cljs.core.seq.call(null,seq__28230_30475);
if(temp__4126__auto___30484){
var seq__28230_30485__$1 = temp__4126__auto___30484;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28230_30485__$1)){
var c__8291__auto___30486 = cljs.core.chunk_first.call(null,seq__28230_30485__$1);
var G__30487 = cljs.core.chunk_rest.call(null,seq__28230_30485__$1);
var G__30488 = c__8291__auto___30486;
var G__30489 = cljs.core.count.call(null,c__8291__auto___30486);
var G__30490 = (0);
seq__28230_30475 = G__30487;
chunk__28231_30476 = G__30488;
count__28232_30477 = G__30489;
i__28233_30478 = G__30490;
continue;
} else {
var arg__13071__auto___30491 = cljs.core.first.call(null,seq__28230_30485__$1);
a__13070__auto__.push(arg__13071__auto___30491);

var G__30492 = cljs.core.next.call(null,seq__28230_30485__$1);
var G__30493 = null;
var G__30494 = (0);
var G__30495 = (0);
seq__28230_30475 = G__30492;
chunk__28231_30476 = G__30493;
count__28232_30477 = G__30494;
i__28233_30478 = G__30495;
continue;
}
} else {
}
}
break;
}

return React.DOM.source.apply(null,a__13070__auto__);
};
var source = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30496__i = 0, G__30496__a = new Array(arguments.length -  0);
while (G__30496__i < G__30496__a.length) {G__30496__a[G__30496__i] = arguments[G__30496__i + 0]; ++G__30496__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30496__a,0);
} 
return source__delegate.call(this,args__13069__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__30497){
var args__13069__auto__ = cljs.core.seq(arglist__30497);
return source__delegate(args__13069__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28238_30498 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28239_30499 = null;
var count__28240_30500 = (0);
var i__28241_30501 = (0);
while(true){
if((i__28241_30501 < count__28240_30500)){
var arg__13071__auto___30502 = cljs.core._nth.call(null,chunk__28239_30499,i__28241_30501);
a__13070__auto__.push(arg__13071__auto___30502);

var G__30503 = seq__28238_30498;
var G__30504 = chunk__28239_30499;
var G__30505 = count__28240_30500;
var G__30506 = (i__28241_30501 + (1));
seq__28238_30498 = G__30503;
chunk__28239_30499 = G__30504;
count__28240_30500 = G__30505;
i__28241_30501 = G__30506;
continue;
} else {
var temp__4126__auto___30507 = cljs.core.seq.call(null,seq__28238_30498);
if(temp__4126__auto___30507){
var seq__28238_30508__$1 = temp__4126__auto___30507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28238_30508__$1)){
var c__8291__auto___30509 = cljs.core.chunk_first.call(null,seq__28238_30508__$1);
var G__30510 = cljs.core.chunk_rest.call(null,seq__28238_30508__$1);
var G__30511 = c__8291__auto___30509;
var G__30512 = cljs.core.count.call(null,c__8291__auto___30509);
var G__30513 = (0);
seq__28238_30498 = G__30510;
chunk__28239_30499 = G__30511;
count__28240_30500 = G__30512;
i__28241_30501 = G__30513;
continue;
} else {
var arg__13071__auto___30514 = cljs.core.first.call(null,seq__28238_30508__$1);
a__13070__auto__.push(arg__13071__auto___30514);

var G__30515 = cljs.core.next.call(null,seq__28238_30508__$1);
var G__30516 = null;
var G__30517 = (0);
var G__30518 = (0);
seq__28238_30498 = G__30515;
chunk__28239_30499 = G__30516;
count__28240_30500 = G__30517;
i__28241_30501 = G__30518;
continue;
}
} else {
}
}
break;
}

return React.DOM.span.apply(null,a__13070__auto__);
};
var span = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30519__i = 0, G__30519__a = new Array(arguments.length -  0);
while (G__30519__i < G__30519__a.length) {G__30519__a[G__30519__i] = arguments[G__30519__i + 0]; ++G__30519__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30519__a,0);
} 
return span__delegate.call(this,args__13069__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__30520){
var args__13069__auto__ = cljs.core.seq(arglist__30520);
return span__delegate(args__13069__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28246_30521 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28247_30522 = null;
var count__28248_30523 = (0);
var i__28249_30524 = (0);
while(true){
if((i__28249_30524 < count__28248_30523)){
var arg__13071__auto___30525 = cljs.core._nth.call(null,chunk__28247_30522,i__28249_30524);
a__13070__auto__.push(arg__13071__auto___30525);

var G__30526 = seq__28246_30521;
var G__30527 = chunk__28247_30522;
var G__30528 = count__28248_30523;
var G__30529 = (i__28249_30524 + (1));
seq__28246_30521 = G__30526;
chunk__28247_30522 = G__30527;
count__28248_30523 = G__30528;
i__28249_30524 = G__30529;
continue;
} else {
var temp__4126__auto___30530 = cljs.core.seq.call(null,seq__28246_30521);
if(temp__4126__auto___30530){
var seq__28246_30531__$1 = temp__4126__auto___30530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28246_30531__$1)){
var c__8291__auto___30532 = cljs.core.chunk_first.call(null,seq__28246_30531__$1);
var G__30533 = cljs.core.chunk_rest.call(null,seq__28246_30531__$1);
var G__30534 = c__8291__auto___30532;
var G__30535 = cljs.core.count.call(null,c__8291__auto___30532);
var G__30536 = (0);
seq__28246_30521 = G__30533;
chunk__28247_30522 = G__30534;
count__28248_30523 = G__30535;
i__28249_30524 = G__30536;
continue;
} else {
var arg__13071__auto___30537 = cljs.core.first.call(null,seq__28246_30531__$1);
a__13070__auto__.push(arg__13071__auto___30537);

var G__30538 = cljs.core.next.call(null,seq__28246_30531__$1);
var G__30539 = null;
var G__30540 = (0);
var G__30541 = (0);
seq__28246_30521 = G__30538;
chunk__28247_30522 = G__30539;
count__28248_30523 = G__30540;
i__28249_30524 = G__30541;
continue;
}
} else {
}
}
break;
}

return React.DOM.strong.apply(null,a__13070__auto__);
};
var strong = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30542__i = 0, G__30542__a = new Array(arguments.length -  0);
while (G__30542__i < G__30542__a.length) {G__30542__a[G__30542__i] = arguments[G__30542__i + 0]; ++G__30542__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30542__a,0);
} 
return strong__delegate.call(this,args__13069__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__30543){
var args__13069__auto__ = cljs.core.seq(arglist__30543);
return strong__delegate(args__13069__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28254_30544 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28255_30545 = null;
var count__28256_30546 = (0);
var i__28257_30547 = (0);
while(true){
if((i__28257_30547 < count__28256_30546)){
var arg__13071__auto___30548 = cljs.core._nth.call(null,chunk__28255_30545,i__28257_30547);
a__13070__auto__.push(arg__13071__auto___30548);

var G__30549 = seq__28254_30544;
var G__30550 = chunk__28255_30545;
var G__30551 = count__28256_30546;
var G__30552 = (i__28257_30547 + (1));
seq__28254_30544 = G__30549;
chunk__28255_30545 = G__30550;
count__28256_30546 = G__30551;
i__28257_30547 = G__30552;
continue;
} else {
var temp__4126__auto___30553 = cljs.core.seq.call(null,seq__28254_30544);
if(temp__4126__auto___30553){
var seq__28254_30554__$1 = temp__4126__auto___30553;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28254_30554__$1)){
var c__8291__auto___30555 = cljs.core.chunk_first.call(null,seq__28254_30554__$1);
var G__30556 = cljs.core.chunk_rest.call(null,seq__28254_30554__$1);
var G__30557 = c__8291__auto___30555;
var G__30558 = cljs.core.count.call(null,c__8291__auto___30555);
var G__30559 = (0);
seq__28254_30544 = G__30556;
chunk__28255_30545 = G__30557;
count__28256_30546 = G__30558;
i__28257_30547 = G__30559;
continue;
} else {
var arg__13071__auto___30560 = cljs.core.first.call(null,seq__28254_30554__$1);
a__13070__auto__.push(arg__13071__auto___30560);

var G__30561 = cljs.core.next.call(null,seq__28254_30554__$1);
var G__30562 = null;
var G__30563 = (0);
var G__30564 = (0);
seq__28254_30544 = G__30561;
chunk__28255_30545 = G__30562;
count__28256_30546 = G__30563;
i__28257_30547 = G__30564;
continue;
}
} else {
}
}
break;
}

return React.DOM.style.apply(null,a__13070__auto__);
};
var style = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30565__i = 0, G__30565__a = new Array(arguments.length -  0);
while (G__30565__i < G__30565__a.length) {G__30565__a[G__30565__i] = arguments[G__30565__i + 0]; ++G__30565__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30565__a,0);
} 
return style__delegate.call(this,args__13069__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__30566){
var args__13069__auto__ = cljs.core.seq(arglist__30566);
return style__delegate(args__13069__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28262_30567 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28263_30568 = null;
var count__28264_30569 = (0);
var i__28265_30570 = (0);
while(true){
if((i__28265_30570 < count__28264_30569)){
var arg__13071__auto___30571 = cljs.core._nth.call(null,chunk__28263_30568,i__28265_30570);
a__13070__auto__.push(arg__13071__auto___30571);

var G__30572 = seq__28262_30567;
var G__30573 = chunk__28263_30568;
var G__30574 = count__28264_30569;
var G__30575 = (i__28265_30570 + (1));
seq__28262_30567 = G__30572;
chunk__28263_30568 = G__30573;
count__28264_30569 = G__30574;
i__28265_30570 = G__30575;
continue;
} else {
var temp__4126__auto___30576 = cljs.core.seq.call(null,seq__28262_30567);
if(temp__4126__auto___30576){
var seq__28262_30577__$1 = temp__4126__auto___30576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28262_30577__$1)){
var c__8291__auto___30578 = cljs.core.chunk_first.call(null,seq__28262_30577__$1);
var G__30579 = cljs.core.chunk_rest.call(null,seq__28262_30577__$1);
var G__30580 = c__8291__auto___30578;
var G__30581 = cljs.core.count.call(null,c__8291__auto___30578);
var G__30582 = (0);
seq__28262_30567 = G__30579;
chunk__28263_30568 = G__30580;
count__28264_30569 = G__30581;
i__28265_30570 = G__30582;
continue;
} else {
var arg__13071__auto___30583 = cljs.core.first.call(null,seq__28262_30577__$1);
a__13070__auto__.push(arg__13071__auto___30583);

var G__30584 = cljs.core.next.call(null,seq__28262_30577__$1);
var G__30585 = null;
var G__30586 = (0);
var G__30587 = (0);
seq__28262_30567 = G__30584;
chunk__28263_30568 = G__30585;
count__28264_30569 = G__30586;
i__28265_30570 = G__30587;
continue;
}
} else {
}
}
break;
}

return React.DOM.sub.apply(null,a__13070__auto__);
};
var sub = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30588__i = 0, G__30588__a = new Array(arguments.length -  0);
while (G__30588__i < G__30588__a.length) {G__30588__a[G__30588__i] = arguments[G__30588__i + 0]; ++G__30588__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30588__a,0);
} 
return sub__delegate.call(this,args__13069__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__30589){
var args__13069__auto__ = cljs.core.seq(arglist__30589);
return sub__delegate(args__13069__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28270_30590 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28271_30591 = null;
var count__28272_30592 = (0);
var i__28273_30593 = (0);
while(true){
if((i__28273_30593 < count__28272_30592)){
var arg__13071__auto___30594 = cljs.core._nth.call(null,chunk__28271_30591,i__28273_30593);
a__13070__auto__.push(arg__13071__auto___30594);

var G__30595 = seq__28270_30590;
var G__30596 = chunk__28271_30591;
var G__30597 = count__28272_30592;
var G__30598 = (i__28273_30593 + (1));
seq__28270_30590 = G__30595;
chunk__28271_30591 = G__30596;
count__28272_30592 = G__30597;
i__28273_30593 = G__30598;
continue;
} else {
var temp__4126__auto___30599 = cljs.core.seq.call(null,seq__28270_30590);
if(temp__4126__auto___30599){
var seq__28270_30600__$1 = temp__4126__auto___30599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28270_30600__$1)){
var c__8291__auto___30601 = cljs.core.chunk_first.call(null,seq__28270_30600__$1);
var G__30602 = cljs.core.chunk_rest.call(null,seq__28270_30600__$1);
var G__30603 = c__8291__auto___30601;
var G__30604 = cljs.core.count.call(null,c__8291__auto___30601);
var G__30605 = (0);
seq__28270_30590 = G__30602;
chunk__28271_30591 = G__30603;
count__28272_30592 = G__30604;
i__28273_30593 = G__30605;
continue;
} else {
var arg__13071__auto___30606 = cljs.core.first.call(null,seq__28270_30600__$1);
a__13070__auto__.push(arg__13071__auto___30606);

var G__30607 = cljs.core.next.call(null,seq__28270_30600__$1);
var G__30608 = null;
var G__30609 = (0);
var G__30610 = (0);
seq__28270_30590 = G__30607;
chunk__28271_30591 = G__30608;
count__28272_30592 = G__30609;
i__28273_30593 = G__30610;
continue;
}
} else {
}
}
break;
}

return React.DOM.summary.apply(null,a__13070__auto__);
};
var summary = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30611__i = 0, G__30611__a = new Array(arguments.length -  0);
while (G__30611__i < G__30611__a.length) {G__30611__a[G__30611__i] = arguments[G__30611__i + 0]; ++G__30611__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30611__a,0);
} 
return summary__delegate.call(this,args__13069__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__30612){
var args__13069__auto__ = cljs.core.seq(arglist__30612);
return summary__delegate(args__13069__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28278_30613 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28279_30614 = null;
var count__28280_30615 = (0);
var i__28281_30616 = (0);
while(true){
if((i__28281_30616 < count__28280_30615)){
var arg__13071__auto___30617 = cljs.core._nth.call(null,chunk__28279_30614,i__28281_30616);
a__13070__auto__.push(arg__13071__auto___30617);

var G__30618 = seq__28278_30613;
var G__30619 = chunk__28279_30614;
var G__30620 = count__28280_30615;
var G__30621 = (i__28281_30616 + (1));
seq__28278_30613 = G__30618;
chunk__28279_30614 = G__30619;
count__28280_30615 = G__30620;
i__28281_30616 = G__30621;
continue;
} else {
var temp__4126__auto___30622 = cljs.core.seq.call(null,seq__28278_30613);
if(temp__4126__auto___30622){
var seq__28278_30623__$1 = temp__4126__auto___30622;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28278_30623__$1)){
var c__8291__auto___30624 = cljs.core.chunk_first.call(null,seq__28278_30623__$1);
var G__30625 = cljs.core.chunk_rest.call(null,seq__28278_30623__$1);
var G__30626 = c__8291__auto___30624;
var G__30627 = cljs.core.count.call(null,c__8291__auto___30624);
var G__30628 = (0);
seq__28278_30613 = G__30625;
chunk__28279_30614 = G__30626;
count__28280_30615 = G__30627;
i__28281_30616 = G__30628;
continue;
} else {
var arg__13071__auto___30629 = cljs.core.first.call(null,seq__28278_30623__$1);
a__13070__auto__.push(arg__13071__auto___30629);

var G__30630 = cljs.core.next.call(null,seq__28278_30623__$1);
var G__30631 = null;
var G__30632 = (0);
var G__30633 = (0);
seq__28278_30613 = G__30630;
chunk__28279_30614 = G__30631;
count__28280_30615 = G__30632;
i__28281_30616 = G__30633;
continue;
}
} else {
}
}
break;
}

return React.DOM.sup.apply(null,a__13070__auto__);
};
var sup = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30634__i = 0, G__30634__a = new Array(arguments.length -  0);
while (G__30634__i < G__30634__a.length) {G__30634__a[G__30634__i] = arguments[G__30634__i + 0]; ++G__30634__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30634__a,0);
} 
return sup__delegate.call(this,args__13069__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__30635){
var args__13069__auto__ = cljs.core.seq(arglist__30635);
return sup__delegate(args__13069__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28286_30636 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28287_30637 = null;
var count__28288_30638 = (0);
var i__28289_30639 = (0);
while(true){
if((i__28289_30639 < count__28288_30638)){
var arg__13071__auto___30640 = cljs.core._nth.call(null,chunk__28287_30637,i__28289_30639);
a__13070__auto__.push(arg__13071__auto___30640);

var G__30641 = seq__28286_30636;
var G__30642 = chunk__28287_30637;
var G__30643 = count__28288_30638;
var G__30644 = (i__28289_30639 + (1));
seq__28286_30636 = G__30641;
chunk__28287_30637 = G__30642;
count__28288_30638 = G__30643;
i__28289_30639 = G__30644;
continue;
} else {
var temp__4126__auto___30645 = cljs.core.seq.call(null,seq__28286_30636);
if(temp__4126__auto___30645){
var seq__28286_30646__$1 = temp__4126__auto___30645;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28286_30646__$1)){
var c__8291__auto___30647 = cljs.core.chunk_first.call(null,seq__28286_30646__$1);
var G__30648 = cljs.core.chunk_rest.call(null,seq__28286_30646__$1);
var G__30649 = c__8291__auto___30647;
var G__30650 = cljs.core.count.call(null,c__8291__auto___30647);
var G__30651 = (0);
seq__28286_30636 = G__30648;
chunk__28287_30637 = G__30649;
count__28288_30638 = G__30650;
i__28289_30639 = G__30651;
continue;
} else {
var arg__13071__auto___30652 = cljs.core.first.call(null,seq__28286_30646__$1);
a__13070__auto__.push(arg__13071__auto___30652);

var G__30653 = cljs.core.next.call(null,seq__28286_30646__$1);
var G__30654 = null;
var G__30655 = (0);
var G__30656 = (0);
seq__28286_30636 = G__30653;
chunk__28287_30637 = G__30654;
count__28288_30638 = G__30655;
i__28289_30639 = G__30656;
continue;
}
} else {
}
}
break;
}

return React.DOM.table.apply(null,a__13070__auto__);
};
var table = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30657__i = 0, G__30657__a = new Array(arguments.length -  0);
while (G__30657__i < G__30657__a.length) {G__30657__a[G__30657__i] = arguments[G__30657__i + 0]; ++G__30657__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30657__a,0);
} 
return table__delegate.call(this,args__13069__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__30658){
var args__13069__auto__ = cljs.core.seq(arglist__30658);
return table__delegate(args__13069__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28294_30659 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28295_30660 = null;
var count__28296_30661 = (0);
var i__28297_30662 = (0);
while(true){
if((i__28297_30662 < count__28296_30661)){
var arg__13071__auto___30663 = cljs.core._nth.call(null,chunk__28295_30660,i__28297_30662);
a__13070__auto__.push(arg__13071__auto___30663);

var G__30664 = seq__28294_30659;
var G__30665 = chunk__28295_30660;
var G__30666 = count__28296_30661;
var G__30667 = (i__28297_30662 + (1));
seq__28294_30659 = G__30664;
chunk__28295_30660 = G__30665;
count__28296_30661 = G__30666;
i__28297_30662 = G__30667;
continue;
} else {
var temp__4126__auto___30668 = cljs.core.seq.call(null,seq__28294_30659);
if(temp__4126__auto___30668){
var seq__28294_30669__$1 = temp__4126__auto___30668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28294_30669__$1)){
var c__8291__auto___30670 = cljs.core.chunk_first.call(null,seq__28294_30669__$1);
var G__30671 = cljs.core.chunk_rest.call(null,seq__28294_30669__$1);
var G__30672 = c__8291__auto___30670;
var G__30673 = cljs.core.count.call(null,c__8291__auto___30670);
var G__30674 = (0);
seq__28294_30659 = G__30671;
chunk__28295_30660 = G__30672;
count__28296_30661 = G__30673;
i__28297_30662 = G__30674;
continue;
} else {
var arg__13071__auto___30675 = cljs.core.first.call(null,seq__28294_30669__$1);
a__13070__auto__.push(arg__13071__auto___30675);

var G__30676 = cljs.core.next.call(null,seq__28294_30669__$1);
var G__30677 = null;
var G__30678 = (0);
var G__30679 = (0);
seq__28294_30659 = G__30676;
chunk__28295_30660 = G__30677;
count__28296_30661 = G__30678;
i__28297_30662 = G__30679;
continue;
}
} else {
}
}
break;
}

return React.DOM.tbody.apply(null,a__13070__auto__);
};
var tbody = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30680__i = 0, G__30680__a = new Array(arguments.length -  0);
while (G__30680__i < G__30680__a.length) {G__30680__a[G__30680__i] = arguments[G__30680__i + 0]; ++G__30680__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30680__a,0);
} 
return tbody__delegate.call(this,args__13069__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__30681){
var args__13069__auto__ = cljs.core.seq(arglist__30681);
return tbody__delegate(args__13069__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28302_30682 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28303_30683 = null;
var count__28304_30684 = (0);
var i__28305_30685 = (0);
while(true){
if((i__28305_30685 < count__28304_30684)){
var arg__13071__auto___30686 = cljs.core._nth.call(null,chunk__28303_30683,i__28305_30685);
a__13070__auto__.push(arg__13071__auto___30686);

var G__30687 = seq__28302_30682;
var G__30688 = chunk__28303_30683;
var G__30689 = count__28304_30684;
var G__30690 = (i__28305_30685 + (1));
seq__28302_30682 = G__30687;
chunk__28303_30683 = G__30688;
count__28304_30684 = G__30689;
i__28305_30685 = G__30690;
continue;
} else {
var temp__4126__auto___30691 = cljs.core.seq.call(null,seq__28302_30682);
if(temp__4126__auto___30691){
var seq__28302_30692__$1 = temp__4126__auto___30691;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28302_30692__$1)){
var c__8291__auto___30693 = cljs.core.chunk_first.call(null,seq__28302_30692__$1);
var G__30694 = cljs.core.chunk_rest.call(null,seq__28302_30692__$1);
var G__30695 = c__8291__auto___30693;
var G__30696 = cljs.core.count.call(null,c__8291__auto___30693);
var G__30697 = (0);
seq__28302_30682 = G__30694;
chunk__28303_30683 = G__30695;
count__28304_30684 = G__30696;
i__28305_30685 = G__30697;
continue;
} else {
var arg__13071__auto___30698 = cljs.core.first.call(null,seq__28302_30692__$1);
a__13070__auto__.push(arg__13071__auto___30698);

var G__30699 = cljs.core.next.call(null,seq__28302_30692__$1);
var G__30700 = null;
var G__30701 = (0);
var G__30702 = (0);
seq__28302_30682 = G__30699;
chunk__28303_30683 = G__30700;
count__28304_30684 = G__30701;
i__28305_30685 = G__30702;
continue;
}
} else {
}
}
break;
}

return React.DOM.td.apply(null,a__13070__auto__);
};
var td = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30703__i = 0, G__30703__a = new Array(arguments.length -  0);
while (G__30703__i < G__30703__a.length) {G__30703__a[G__30703__i] = arguments[G__30703__i + 0]; ++G__30703__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30703__a,0);
} 
return td__delegate.call(this,args__13069__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__30704){
var args__13069__auto__ = cljs.core.seq(arglist__30704);
return td__delegate(args__13069__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28310_30705 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28311_30706 = null;
var count__28312_30707 = (0);
var i__28313_30708 = (0);
while(true){
if((i__28313_30708 < count__28312_30707)){
var arg__13071__auto___30709 = cljs.core._nth.call(null,chunk__28311_30706,i__28313_30708);
a__13070__auto__.push(arg__13071__auto___30709);

var G__30710 = seq__28310_30705;
var G__30711 = chunk__28311_30706;
var G__30712 = count__28312_30707;
var G__30713 = (i__28313_30708 + (1));
seq__28310_30705 = G__30710;
chunk__28311_30706 = G__30711;
count__28312_30707 = G__30712;
i__28313_30708 = G__30713;
continue;
} else {
var temp__4126__auto___30714 = cljs.core.seq.call(null,seq__28310_30705);
if(temp__4126__auto___30714){
var seq__28310_30715__$1 = temp__4126__auto___30714;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28310_30715__$1)){
var c__8291__auto___30716 = cljs.core.chunk_first.call(null,seq__28310_30715__$1);
var G__30717 = cljs.core.chunk_rest.call(null,seq__28310_30715__$1);
var G__30718 = c__8291__auto___30716;
var G__30719 = cljs.core.count.call(null,c__8291__auto___30716);
var G__30720 = (0);
seq__28310_30705 = G__30717;
chunk__28311_30706 = G__30718;
count__28312_30707 = G__30719;
i__28313_30708 = G__30720;
continue;
} else {
var arg__13071__auto___30721 = cljs.core.first.call(null,seq__28310_30715__$1);
a__13070__auto__.push(arg__13071__auto___30721);

var G__30722 = cljs.core.next.call(null,seq__28310_30715__$1);
var G__30723 = null;
var G__30724 = (0);
var G__30725 = (0);
seq__28310_30705 = G__30722;
chunk__28311_30706 = G__30723;
count__28312_30707 = G__30724;
i__28313_30708 = G__30725;
continue;
}
} else {
}
}
break;
}

return React.DOM.textarea.apply(null,a__13070__auto__);
};
var textarea = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30726__i = 0, G__30726__a = new Array(arguments.length -  0);
while (G__30726__i < G__30726__a.length) {G__30726__a[G__30726__i] = arguments[G__30726__i + 0]; ++G__30726__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30726__a,0);
} 
return textarea__delegate.call(this,args__13069__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__30727){
var args__13069__auto__ = cljs.core.seq(arglist__30727);
return textarea__delegate(args__13069__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28318_30728 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28319_30729 = null;
var count__28320_30730 = (0);
var i__28321_30731 = (0);
while(true){
if((i__28321_30731 < count__28320_30730)){
var arg__13071__auto___30732 = cljs.core._nth.call(null,chunk__28319_30729,i__28321_30731);
a__13070__auto__.push(arg__13071__auto___30732);

var G__30733 = seq__28318_30728;
var G__30734 = chunk__28319_30729;
var G__30735 = count__28320_30730;
var G__30736 = (i__28321_30731 + (1));
seq__28318_30728 = G__30733;
chunk__28319_30729 = G__30734;
count__28320_30730 = G__30735;
i__28321_30731 = G__30736;
continue;
} else {
var temp__4126__auto___30737 = cljs.core.seq.call(null,seq__28318_30728);
if(temp__4126__auto___30737){
var seq__28318_30738__$1 = temp__4126__auto___30737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28318_30738__$1)){
var c__8291__auto___30739 = cljs.core.chunk_first.call(null,seq__28318_30738__$1);
var G__30740 = cljs.core.chunk_rest.call(null,seq__28318_30738__$1);
var G__30741 = c__8291__auto___30739;
var G__30742 = cljs.core.count.call(null,c__8291__auto___30739);
var G__30743 = (0);
seq__28318_30728 = G__30740;
chunk__28319_30729 = G__30741;
count__28320_30730 = G__30742;
i__28321_30731 = G__30743;
continue;
} else {
var arg__13071__auto___30744 = cljs.core.first.call(null,seq__28318_30738__$1);
a__13070__auto__.push(arg__13071__auto___30744);

var G__30745 = cljs.core.next.call(null,seq__28318_30738__$1);
var G__30746 = null;
var G__30747 = (0);
var G__30748 = (0);
seq__28318_30728 = G__30745;
chunk__28319_30729 = G__30746;
count__28320_30730 = G__30747;
i__28321_30731 = G__30748;
continue;
}
} else {
}
}
break;
}

return React.DOM.tfoot.apply(null,a__13070__auto__);
};
var tfoot = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30749__i = 0, G__30749__a = new Array(arguments.length -  0);
while (G__30749__i < G__30749__a.length) {G__30749__a[G__30749__i] = arguments[G__30749__i + 0]; ++G__30749__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30749__a,0);
} 
return tfoot__delegate.call(this,args__13069__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__30750){
var args__13069__auto__ = cljs.core.seq(arglist__30750);
return tfoot__delegate(args__13069__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28326_30751 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28327_30752 = null;
var count__28328_30753 = (0);
var i__28329_30754 = (0);
while(true){
if((i__28329_30754 < count__28328_30753)){
var arg__13071__auto___30755 = cljs.core._nth.call(null,chunk__28327_30752,i__28329_30754);
a__13070__auto__.push(arg__13071__auto___30755);

var G__30756 = seq__28326_30751;
var G__30757 = chunk__28327_30752;
var G__30758 = count__28328_30753;
var G__30759 = (i__28329_30754 + (1));
seq__28326_30751 = G__30756;
chunk__28327_30752 = G__30757;
count__28328_30753 = G__30758;
i__28329_30754 = G__30759;
continue;
} else {
var temp__4126__auto___30760 = cljs.core.seq.call(null,seq__28326_30751);
if(temp__4126__auto___30760){
var seq__28326_30761__$1 = temp__4126__auto___30760;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28326_30761__$1)){
var c__8291__auto___30762 = cljs.core.chunk_first.call(null,seq__28326_30761__$1);
var G__30763 = cljs.core.chunk_rest.call(null,seq__28326_30761__$1);
var G__30764 = c__8291__auto___30762;
var G__30765 = cljs.core.count.call(null,c__8291__auto___30762);
var G__30766 = (0);
seq__28326_30751 = G__30763;
chunk__28327_30752 = G__30764;
count__28328_30753 = G__30765;
i__28329_30754 = G__30766;
continue;
} else {
var arg__13071__auto___30767 = cljs.core.first.call(null,seq__28326_30761__$1);
a__13070__auto__.push(arg__13071__auto___30767);

var G__30768 = cljs.core.next.call(null,seq__28326_30761__$1);
var G__30769 = null;
var G__30770 = (0);
var G__30771 = (0);
seq__28326_30751 = G__30768;
chunk__28327_30752 = G__30769;
count__28328_30753 = G__30770;
i__28329_30754 = G__30771;
continue;
}
} else {
}
}
break;
}

return React.DOM.th.apply(null,a__13070__auto__);
};
var th = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30772__i = 0, G__30772__a = new Array(arguments.length -  0);
while (G__30772__i < G__30772__a.length) {G__30772__a[G__30772__i] = arguments[G__30772__i + 0]; ++G__30772__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30772__a,0);
} 
return th__delegate.call(this,args__13069__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__30773){
var args__13069__auto__ = cljs.core.seq(arglist__30773);
return th__delegate(args__13069__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28334_30774 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28335_30775 = null;
var count__28336_30776 = (0);
var i__28337_30777 = (0);
while(true){
if((i__28337_30777 < count__28336_30776)){
var arg__13071__auto___30778 = cljs.core._nth.call(null,chunk__28335_30775,i__28337_30777);
a__13070__auto__.push(arg__13071__auto___30778);

var G__30779 = seq__28334_30774;
var G__30780 = chunk__28335_30775;
var G__30781 = count__28336_30776;
var G__30782 = (i__28337_30777 + (1));
seq__28334_30774 = G__30779;
chunk__28335_30775 = G__30780;
count__28336_30776 = G__30781;
i__28337_30777 = G__30782;
continue;
} else {
var temp__4126__auto___30783 = cljs.core.seq.call(null,seq__28334_30774);
if(temp__4126__auto___30783){
var seq__28334_30784__$1 = temp__4126__auto___30783;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28334_30784__$1)){
var c__8291__auto___30785 = cljs.core.chunk_first.call(null,seq__28334_30784__$1);
var G__30786 = cljs.core.chunk_rest.call(null,seq__28334_30784__$1);
var G__30787 = c__8291__auto___30785;
var G__30788 = cljs.core.count.call(null,c__8291__auto___30785);
var G__30789 = (0);
seq__28334_30774 = G__30786;
chunk__28335_30775 = G__30787;
count__28336_30776 = G__30788;
i__28337_30777 = G__30789;
continue;
} else {
var arg__13071__auto___30790 = cljs.core.first.call(null,seq__28334_30784__$1);
a__13070__auto__.push(arg__13071__auto___30790);

var G__30791 = cljs.core.next.call(null,seq__28334_30784__$1);
var G__30792 = null;
var G__30793 = (0);
var G__30794 = (0);
seq__28334_30774 = G__30791;
chunk__28335_30775 = G__30792;
count__28336_30776 = G__30793;
i__28337_30777 = G__30794;
continue;
}
} else {
}
}
break;
}

return React.DOM.thead.apply(null,a__13070__auto__);
};
var thead = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30795__i = 0, G__30795__a = new Array(arguments.length -  0);
while (G__30795__i < G__30795__a.length) {G__30795__a[G__30795__i] = arguments[G__30795__i + 0]; ++G__30795__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30795__a,0);
} 
return thead__delegate.call(this,args__13069__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__30796){
var args__13069__auto__ = cljs.core.seq(arglist__30796);
return thead__delegate(args__13069__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28342_30797 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28343_30798 = null;
var count__28344_30799 = (0);
var i__28345_30800 = (0);
while(true){
if((i__28345_30800 < count__28344_30799)){
var arg__13071__auto___30801 = cljs.core._nth.call(null,chunk__28343_30798,i__28345_30800);
a__13070__auto__.push(arg__13071__auto___30801);

var G__30802 = seq__28342_30797;
var G__30803 = chunk__28343_30798;
var G__30804 = count__28344_30799;
var G__30805 = (i__28345_30800 + (1));
seq__28342_30797 = G__30802;
chunk__28343_30798 = G__30803;
count__28344_30799 = G__30804;
i__28345_30800 = G__30805;
continue;
} else {
var temp__4126__auto___30806 = cljs.core.seq.call(null,seq__28342_30797);
if(temp__4126__auto___30806){
var seq__28342_30807__$1 = temp__4126__auto___30806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28342_30807__$1)){
var c__8291__auto___30808 = cljs.core.chunk_first.call(null,seq__28342_30807__$1);
var G__30809 = cljs.core.chunk_rest.call(null,seq__28342_30807__$1);
var G__30810 = c__8291__auto___30808;
var G__30811 = cljs.core.count.call(null,c__8291__auto___30808);
var G__30812 = (0);
seq__28342_30797 = G__30809;
chunk__28343_30798 = G__30810;
count__28344_30799 = G__30811;
i__28345_30800 = G__30812;
continue;
} else {
var arg__13071__auto___30813 = cljs.core.first.call(null,seq__28342_30807__$1);
a__13070__auto__.push(arg__13071__auto___30813);

var G__30814 = cljs.core.next.call(null,seq__28342_30807__$1);
var G__30815 = null;
var G__30816 = (0);
var G__30817 = (0);
seq__28342_30797 = G__30814;
chunk__28343_30798 = G__30815;
count__28344_30799 = G__30816;
i__28345_30800 = G__30817;
continue;
}
} else {
}
}
break;
}

return React.DOM.time.apply(null,a__13070__auto__);
};
var time = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30818__i = 0, G__30818__a = new Array(arguments.length -  0);
while (G__30818__i < G__30818__a.length) {G__30818__a[G__30818__i] = arguments[G__30818__i + 0]; ++G__30818__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30818__a,0);
} 
return time__delegate.call(this,args__13069__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__30819){
var args__13069__auto__ = cljs.core.seq(arglist__30819);
return time__delegate(args__13069__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28350_30820 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28351_30821 = null;
var count__28352_30822 = (0);
var i__28353_30823 = (0);
while(true){
if((i__28353_30823 < count__28352_30822)){
var arg__13071__auto___30824 = cljs.core._nth.call(null,chunk__28351_30821,i__28353_30823);
a__13070__auto__.push(arg__13071__auto___30824);

var G__30825 = seq__28350_30820;
var G__30826 = chunk__28351_30821;
var G__30827 = count__28352_30822;
var G__30828 = (i__28353_30823 + (1));
seq__28350_30820 = G__30825;
chunk__28351_30821 = G__30826;
count__28352_30822 = G__30827;
i__28353_30823 = G__30828;
continue;
} else {
var temp__4126__auto___30829 = cljs.core.seq.call(null,seq__28350_30820);
if(temp__4126__auto___30829){
var seq__28350_30830__$1 = temp__4126__auto___30829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28350_30830__$1)){
var c__8291__auto___30831 = cljs.core.chunk_first.call(null,seq__28350_30830__$1);
var G__30832 = cljs.core.chunk_rest.call(null,seq__28350_30830__$1);
var G__30833 = c__8291__auto___30831;
var G__30834 = cljs.core.count.call(null,c__8291__auto___30831);
var G__30835 = (0);
seq__28350_30820 = G__30832;
chunk__28351_30821 = G__30833;
count__28352_30822 = G__30834;
i__28353_30823 = G__30835;
continue;
} else {
var arg__13071__auto___30836 = cljs.core.first.call(null,seq__28350_30830__$1);
a__13070__auto__.push(arg__13071__auto___30836);

var G__30837 = cljs.core.next.call(null,seq__28350_30830__$1);
var G__30838 = null;
var G__30839 = (0);
var G__30840 = (0);
seq__28350_30820 = G__30837;
chunk__28351_30821 = G__30838;
count__28352_30822 = G__30839;
i__28353_30823 = G__30840;
continue;
}
} else {
}
}
break;
}

return React.DOM.title.apply(null,a__13070__auto__);
};
var title = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30841__i = 0, G__30841__a = new Array(arguments.length -  0);
while (G__30841__i < G__30841__a.length) {G__30841__a[G__30841__i] = arguments[G__30841__i + 0]; ++G__30841__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30841__a,0);
} 
return title__delegate.call(this,args__13069__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__30842){
var args__13069__auto__ = cljs.core.seq(arglist__30842);
return title__delegate(args__13069__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28358_30843 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28359_30844 = null;
var count__28360_30845 = (0);
var i__28361_30846 = (0);
while(true){
if((i__28361_30846 < count__28360_30845)){
var arg__13071__auto___30847 = cljs.core._nth.call(null,chunk__28359_30844,i__28361_30846);
a__13070__auto__.push(arg__13071__auto___30847);

var G__30848 = seq__28358_30843;
var G__30849 = chunk__28359_30844;
var G__30850 = count__28360_30845;
var G__30851 = (i__28361_30846 + (1));
seq__28358_30843 = G__30848;
chunk__28359_30844 = G__30849;
count__28360_30845 = G__30850;
i__28361_30846 = G__30851;
continue;
} else {
var temp__4126__auto___30852 = cljs.core.seq.call(null,seq__28358_30843);
if(temp__4126__auto___30852){
var seq__28358_30853__$1 = temp__4126__auto___30852;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28358_30853__$1)){
var c__8291__auto___30854 = cljs.core.chunk_first.call(null,seq__28358_30853__$1);
var G__30855 = cljs.core.chunk_rest.call(null,seq__28358_30853__$1);
var G__30856 = c__8291__auto___30854;
var G__30857 = cljs.core.count.call(null,c__8291__auto___30854);
var G__30858 = (0);
seq__28358_30843 = G__30855;
chunk__28359_30844 = G__30856;
count__28360_30845 = G__30857;
i__28361_30846 = G__30858;
continue;
} else {
var arg__13071__auto___30859 = cljs.core.first.call(null,seq__28358_30853__$1);
a__13070__auto__.push(arg__13071__auto___30859);

var G__30860 = cljs.core.next.call(null,seq__28358_30853__$1);
var G__30861 = null;
var G__30862 = (0);
var G__30863 = (0);
seq__28358_30843 = G__30860;
chunk__28359_30844 = G__30861;
count__28360_30845 = G__30862;
i__28361_30846 = G__30863;
continue;
}
} else {
}
}
break;
}

return React.DOM.tr.apply(null,a__13070__auto__);
};
var tr = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30864__i = 0, G__30864__a = new Array(arguments.length -  0);
while (G__30864__i < G__30864__a.length) {G__30864__a[G__30864__i] = arguments[G__30864__i + 0]; ++G__30864__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30864__a,0);
} 
return tr__delegate.call(this,args__13069__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__30865){
var args__13069__auto__ = cljs.core.seq(arglist__30865);
return tr__delegate(args__13069__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28366_30866 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28367_30867 = null;
var count__28368_30868 = (0);
var i__28369_30869 = (0);
while(true){
if((i__28369_30869 < count__28368_30868)){
var arg__13071__auto___30870 = cljs.core._nth.call(null,chunk__28367_30867,i__28369_30869);
a__13070__auto__.push(arg__13071__auto___30870);

var G__30871 = seq__28366_30866;
var G__30872 = chunk__28367_30867;
var G__30873 = count__28368_30868;
var G__30874 = (i__28369_30869 + (1));
seq__28366_30866 = G__30871;
chunk__28367_30867 = G__30872;
count__28368_30868 = G__30873;
i__28369_30869 = G__30874;
continue;
} else {
var temp__4126__auto___30875 = cljs.core.seq.call(null,seq__28366_30866);
if(temp__4126__auto___30875){
var seq__28366_30876__$1 = temp__4126__auto___30875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28366_30876__$1)){
var c__8291__auto___30877 = cljs.core.chunk_first.call(null,seq__28366_30876__$1);
var G__30878 = cljs.core.chunk_rest.call(null,seq__28366_30876__$1);
var G__30879 = c__8291__auto___30877;
var G__30880 = cljs.core.count.call(null,c__8291__auto___30877);
var G__30881 = (0);
seq__28366_30866 = G__30878;
chunk__28367_30867 = G__30879;
count__28368_30868 = G__30880;
i__28369_30869 = G__30881;
continue;
} else {
var arg__13071__auto___30882 = cljs.core.first.call(null,seq__28366_30876__$1);
a__13070__auto__.push(arg__13071__auto___30882);

var G__30883 = cljs.core.next.call(null,seq__28366_30876__$1);
var G__30884 = null;
var G__30885 = (0);
var G__30886 = (0);
seq__28366_30866 = G__30883;
chunk__28367_30867 = G__30884;
count__28368_30868 = G__30885;
i__28369_30869 = G__30886;
continue;
}
} else {
}
}
break;
}

return React.DOM.track.apply(null,a__13070__auto__);
};
var track = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30887__i = 0, G__30887__a = new Array(arguments.length -  0);
while (G__30887__i < G__30887__a.length) {G__30887__a[G__30887__i] = arguments[G__30887__i + 0]; ++G__30887__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30887__a,0);
} 
return track__delegate.call(this,args__13069__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__30888){
var args__13069__auto__ = cljs.core.seq(arglist__30888);
return track__delegate(args__13069__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28374_30889 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28375_30890 = null;
var count__28376_30891 = (0);
var i__28377_30892 = (0);
while(true){
if((i__28377_30892 < count__28376_30891)){
var arg__13071__auto___30893 = cljs.core._nth.call(null,chunk__28375_30890,i__28377_30892);
a__13070__auto__.push(arg__13071__auto___30893);

var G__30894 = seq__28374_30889;
var G__30895 = chunk__28375_30890;
var G__30896 = count__28376_30891;
var G__30897 = (i__28377_30892 + (1));
seq__28374_30889 = G__30894;
chunk__28375_30890 = G__30895;
count__28376_30891 = G__30896;
i__28377_30892 = G__30897;
continue;
} else {
var temp__4126__auto___30898 = cljs.core.seq.call(null,seq__28374_30889);
if(temp__4126__auto___30898){
var seq__28374_30899__$1 = temp__4126__auto___30898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28374_30899__$1)){
var c__8291__auto___30900 = cljs.core.chunk_first.call(null,seq__28374_30899__$1);
var G__30901 = cljs.core.chunk_rest.call(null,seq__28374_30899__$1);
var G__30902 = c__8291__auto___30900;
var G__30903 = cljs.core.count.call(null,c__8291__auto___30900);
var G__30904 = (0);
seq__28374_30889 = G__30901;
chunk__28375_30890 = G__30902;
count__28376_30891 = G__30903;
i__28377_30892 = G__30904;
continue;
} else {
var arg__13071__auto___30905 = cljs.core.first.call(null,seq__28374_30899__$1);
a__13070__auto__.push(arg__13071__auto___30905);

var G__30906 = cljs.core.next.call(null,seq__28374_30899__$1);
var G__30907 = null;
var G__30908 = (0);
var G__30909 = (0);
seq__28374_30889 = G__30906;
chunk__28375_30890 = G__30907;
count__28376_30891 = G__30908;
i__28377_30892 = G__30909;
continue;
}
} else {
}
}
break;
}

return React.DOM.u.apply(null,a__13070__auto__);
};
var u = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30910__i = 0, G__30910__a = new Array(arguments.length -  0);
while (G__30910__i < G__30910__a.length) {G__30910__a[G__30910__i] = arguments[G__30910__i + 0]; ++G__30910__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30910__a,0);
} 
return u__delegate.call(this,args__13069__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__30911){
var args__13069__auto__ = cljs.core.seq(arglist__30911);
return u__delegate(args__13069__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28382_30912 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28383_30913 = null;
var count__28384_30914 = (0);
var i__28385_30915 = (0);
while(true){
if((i__28385_30915 < count__28384_30914)){
var arg__13071__auto___30916 = cljs.core._nth.call(null,chunk__28383_30913,i__28385_30915);
a__13070__auto__.push(arg__13071__auto___30916);

var G__30917 = seq__28382_30912;
var G__30918 = chunk__28383_30913;
var G__30919 = count__28384_30914;
var G__30920 = (i__28385_30915 + (1));
seq__28382_30912 = G__30917;
chunk__28383_30913 = G__30918;
count__28384_30914 = G__30919;
i__28385_30915 = G__30920;
continue;
} else {
var temp__4126__auto___30921 = cljs.core.seq.call(null,seq__28382_30912);
if(temp__4126__auto___30921){
var seq__28382_30922__$1 = temp__4126__auto___30921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28382_30922__$1)){
var c__8291__auto___30923 = cljs.core.chunk_first.call(null,seq__28382_30922__$1);
var G__30924 = cljs.core.chunk_rest.call(null,seq__28382_30922__$1);
var G__30925 = c__8291__auto___30923;
var G__30926 = cljs.core.count.call(null,c__8291__auto___30923);
var G__30927 = (0);
seq__28382_30912 = G__30924;
chunk__28383_30913 = G__30925;
count__28384_30914 = G__30926;
i__28385_30915 = G__30927;
continue;
} else {
var arg__13071__auto___30928 = cljs.core.first.call(null,seq__28382_30922__$1);
a__13070__auto__.push(arg__13071__auto___30928);

var G__30929 = cljs.core.next.call(null,seq__28382_30922__$1);
var G__30930 = null;
var G__30931 = (0);
var G__30932 = (0);
seq__28382_30912 = G__30929;
chunk__28383_30913 = G__30930;
count__28384_30914 = G__30931;
i__28385_30915 = G__30932;
continue;
}
} else {
}
}
break;
}

return React.DOM.ul.apply(null,a__13070__auto__);
};
var ul = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30933__i = 0, G__30933__a = new Array(arguments.length -  0);
while (G__30933__i < G__30933__a.length) {G__30933__a[G__30933__i] = arguments[G__30933__i + 0]; ++G__30933__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30933__a,0);
} 
return ul__delegate.call(this,args__13069__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__30934){
var args__13069__auto__ = cljs.core.seq(arglist__30934);
return ul__delegate(args__13069__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28390_30935 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28391_30936 = null;
var count__28392_30937 = (0);
var i__28393_30938 = (0);
while(true){
if((i__28393_30938 < count__28392_30937)){
var arg__13071__auto___30939 = cljs.core._nth.call(null,chunk__28391_30936,i__28393_30938);
a__13070__auto__.push(arg__13071__auto___30939);

var G__30940 = seq__28390_30935;
var G__30941 = chunk__28391_30936;
var G__30942 = count__28392_30937;
var G__30943 = (i__28393_30938 + (1));
seq__28390_30935 = G__30940;
chunk__28391_30936 = G__30941;
count__28392_30937 = G__30942;
i__28393_30938 = G__30943;
continue;
} else {
var temp__4126__auto___30944 = cljs.core.seq.call(null,seq__28390_30935);
if(temp__4126__auto___30944){
var seq__28390_30945__$1 = temp__4126__auto___30944;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28390_30945__$1)){
var c__8291__auto___30946 = cljs.core.chunk_first.call(null,seq__28390_30945__$1);
var G__30947 = cljs.core.chunk_rest.call(null,seq__28390_30945__$1);
var G__30948 = c__8291__auto___30946;
var G__30949 = cljs.core.count.call(null,c__8291__auto___30946);
var G__30950 = (0);
seq__28390_30935 = G__30947;
chunk__28391_30936 = G__30948;
count__28392_30937 = G__30949;
i__28393_30938 = G__30950;
continue;
} else {
var arg__13071__auto___30951 = cljs.core.first.call(null,seq__28390_30945__$1);
a__13070__auto__.push(arg__13071__auto___30951);

var G__30952 = cljs.core.next.call(null,seq__28390_30945__$1);
var G__30953 = null;
var G__30954 = (0);
var G__30955 = (0);
seq__28390_30935 = G__30952;
chunk__28391_30936 = G__30953;
count__28392_30937 = G__30954;
i__28393_30938 = G__30955;
continue;
}
} else {
}
}
break;
}

return React.DOM.var$.apply(null,a__13070__auto__);
};
var var$ = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30956__i = 0, G__30956__a = new Array(arguments.length -  0);
while (G__30956__i < G__30956__a.length) {G__30956__a[G__30956__i] = arguments[G__30956__i + 0]; ++G__30956__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30956__a,0);
} 
return var$__delegate.call(this,args__13069__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__30957){
var args__13069__auto__ = cljs.core.seq(arglist__30957);
return var$__delegate(args__13069__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28398_30958 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28399_30959 = null;
var count__28400_30960 = (0);
var i__28401_30961 = (0);
while(true){
if((i__28401_30961 < count__28400_30960)){
var arg__13071__auto___30962 = cljs.core._nth.call(null,chunk__28399_30959,i__28401_30961);
a__13070__auto__.push(arg__13071__auto___30962);

var G__30963 = seq__28398_30958;
var G__30964 = chunk__28399_30959;
var G__30965 = count__28400_30960;
var G__30966 = (i__28401_30961 + (1));
seq__28398_30958 = G__30963;
chunk__28399_30959 = G__30964;
count__28400_30960 = G__30965;
i__28401_30961 = G__30966;
continue;
} else {
var temp__4126__auto___30967 = cljs.core.seq.call(null,seq__28398_30958);
if(temp__4126__auto___30967){
var seq__28398_30968__$1 = temp__4126__auto___30967;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28398_30968__$1)){
var c__8291__auto___30969 = cljs.core.chunk_first.call(null,seq__28398_30968__$1);
var G__30970 = cljs.core.chunk_rest.call(null,seq__28398_30968__$1);
var G__30971 = c__8291__auto___30969;
var G__30972 = cljs.core.count.call(null,c__8291__auto___30969);
var G__30973 = (0);
seq__28398_30958 = G__30970;
chunk__28399_30959 = G__30971;
count__28400_30960 = G__30972;
i__28401_30961 = G__30973;
continue;
} else {
var arg__13071__auto___30974 = cljs.core.first.call(null,seq__28398_30968__$1);
a__13070__auto__.push(arg__13071__auto___30974);

var G__30975 = cljs.core.next.call(null,seq__28398_30968__$1);
var G__30976 = null;
var G__30977 = (0);
var G__30978 = (0);
seq__28398_30958 = G__30975;
chunk__28399_30959 = G__30976;
count__28400_30960 = G__30977;
i__28401_30961 = G__30978;
continue;
}
} else {
}
}
break;
}

return React.DOM.video.apply(null,a__13070__auto__);
};
var video = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__30979__i = 0, G__30979__a = new Array(arguments.length -  0);
while (G__30979__i < G__30979__a.length) {G__30979__a[G__30979__i] = arguments[G__30979__i + 0]; ++G__30979__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__30979__a,0);
} 
return video__delegate.call(this,args__13069__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__30980){
var args__13069__auto__ = cljs.core.seq(arglist__30980);
return video__delegate(args__13069__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28406_30981 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28407_30982 = null;
var count__28408_30983 = (0);
var i__28409_30984 = (0);
while(true){
if((i__28409_30984 < count__28408_30983)){
var arg__13071__auto___30985 = cljs.core._nth.call(null,chunk__28407_30982,i__28409_30984);
a__13070__auto__.push(arg__13071__auto___30985);

var G__30986 = seq__28406_30981;
var G__30987 = chunk__28407_30982;
var G__30988 = count__28408_30983;
var G__30989 = (i__28409_30984 + (1));
seq__28406_30981 = G__30986;
chunk__28407_30982 = G__30987;
count__28408_30983 = G__30988;
i__28409_30984 = G__30989;
continue;
} else {
var temp__4126__auto___30990 = cljs.core.seq.call(null,seq__28406_30981);
if(temp__4126__auto___30990){
var seq__28406_30991__$1 = temp__4126__auto___30990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28406_30991__$1)){
var c__8291__auto___30992 = cljs.core.chunk_first.call(null,seq__28406_30991__$1);
var G__30993 = cljs.core.chunk_rest.call(null,seq__28406_30991__$1);
var G__30994 = c__8291__auto___30992;
var G__30995 = cljs.core.count.call(null,c__8291__auto___30992);
var G__30996 = (0);
seq__28406_30981 = G__30993;
chunk__28407_30982 = G__30994;
count__28408_30983 = G__30995;
i__28409_30984 = G__30996;
continue;
} else {
var arg__13071__auto___30997 = cljs.core.first.call(null,seq__28406_30991__$1);
a__13070__auto__.push(arg__13071__auto___30997);

var G__30998 = cljs.core.next.call(null,seq__28406_30991__$1);
var G__30999 = null;
var G__31000 = (0);
var G__31001 = (0);
seq__28406_30981 = G__30998;
chunk__28407_30982 = G__30999;
count__28408_30983 = G__31000;
i__28409_30984 = G__31001;
continue;
}
} else {
}
}
break;
}

return React.DOM.wbr.apply(null,a__13070__auto__);
};
var wbr = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__31002__i = 0, G__31002__a = new Array(arguments.length -  0);
while (G__31002__i < G__31002__a.length) {G__31002__a[G__31002__i] = arguments[G__31002__i + 0]; ++G__31002__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__31002__a,0);
} 
return wbr__delegate.call(this,args__13069__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__31003){
var args__13069__auto__ = cljs.core.seq(arglist__31003);
return wbr__delegate(args__13069__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28414_31004 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28415_31005 = null;
var count__28416_31006 = (0);
var i__28417_31007 = (0);
while(true){
if((i__28417_31007 < count__28416_31006)){
var arg__13071__auto___31008 = cljs.core._nth.call(null,chunk__28415_31005,i__28417_31007);
a__13070__auto__.push(arg__13071__auto___31008);

var G__31009 = seq__28414_31004;
var G__31010 = chunk__28415_31005;
var G__31011 = count__28416_31006;
var G__31012 = (i__28417_31007 + (1));
seq__28414_31004 = G__31009;
chunk__28415_31005 = G__31010;
count__28416_31006 = G__31011;
i__28417_31007 = G__31012;
continue;
} else {
var temp__4126__auto___31013 = cljs.core.seq.call(null,seq__28414_31004);
if(temp__4126__auto___31013){
var seq__28414_31014__$1 = temp__4126__auto___31013;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28414_31014__$1)){
var c__8291__auto___31015 = cljs.core.chunk_first.call(null,seq__28414_31014__$1);
var G__31016 = cljs.core.chunk_rest.call(null,seq__28414_31014__$1);
var G__31017 = c__8291__auto___31015;
var G__31018 = cljs.core.count.call(null,c__8291__auto___31015);
var G__31019 = (0);
seq__28414_31004 = G__31016;
chunk__28415_31005 = G__31017;
count__28416_31006 = G__31018;
i__28417_31007 = G__31019;
continue;
} else {
var arg__13071__auto___31020 = cljs.core.first.call(null,seq__28414_31014__$1);
a__13070__auto__.push(arg__13071__auto___31020);

var G__31021 = cljs.core.next.call(null,seq__28414_31014__$1);
var G__31022 = null;
var G__31023 = (0);
var G__31024 = (0);
seq__28414_31004 = G__31021;
chunk__28415_31005 = G__31022;
count__28416_31006 = G__31023;
i__28417_31007 = G__31024;
continue;
}
} else {
}
}
break;
}

return React.DOM.circle.apply(null,a__13070__auto__);
};
var circle = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__31025__i = 0, G__31025__a = new Array(arguments.length -  0);
while (G__31025__i < G__31025__a.length) {G__31025__a[G__31025__i] = arguments[G__31025__i + 0]; ++G__31025__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__31025__a,0);
} 
return circle__delegate.call(this,args__13069__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__31026){
var args__13069__auto__ = cljs.core.seq(arglist__31026);
return circle__delegate(args__13069__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28422_31027 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28423_31028 = null;
var count__28424_31029 = (0);
var i__28425_31030 = (0);
while(true){
if((i__28425_31030 < count__28424_31029)){
var arg__13071__auto___31031 = cljs.core._nth.call(null,chunk__28423_31028,i__28425_31030);
a__13070__auto__.push(arg__13071__auto___31031);

var G__31032 = seq__28422_31027;
var G__31033 = chunk__28423_31028;
var G__31034 = count__28424_31029;
var G__31035 = (i__28425_31030 + (1));
seq__28422_31027 = G__31032;
chunk__28423_31028 = G__31033;
count__28424_31029 = G__31034;
i__28425_31030 = G__31035;
continue;
} else {
var temp__4126__auto___31036 = cljs.core.seq.call(null,seq__28422_31027);
if(temp__4126__auto___31036){
var seq__28422_31037__$1 = temp__4126__auto___31036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28422_31037__$1)){
var c__8291__auto___31038 = cljs.core.chunk_first.call(null,seq__28422_31037__$1);
var G__31039 = cljs.core.chunk_rest.call(null,seq__28422_31037__$1);
var G__31040 = c__8291__auto___31038;
var G__31041 = cljs.core.count.call(null,c__8291__auto___31038);
var G__31042 = (0);
seq__28422_31027 = G__31039;
chunk__28423_31028 = G__31040;
count__28424_31029 = G__31041;
i__28425_31030 = G__31042;
continue;
} else {
var arg__13071__auto___31043 = cljs.core.first.call(null,seq__28422_31037__$1);
a__13070__auto__.push(arg__13071__auto___31043);

var G__31044 = cljs.core.next.call(null,seq__28422_31037__$1);
var G__31045 = null;
var G__31046 = (0);
var G__31047 = (0);
seq__28422_31027 = G__31044;
chunk__28423_31028 = G__31045;
count__28424_31029 = G__31046;
i__28425_31030 = G__31047;
continue;
}
} else {
}
}
break;
}

return React.DOM.g.apply(null,a__13070__auto__);
};
var g = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__31048__i = 0, G__31048__a = new Array(arguments.length -  0);
while (G__31048__i < G__31048__a.length) {G__31048__a[G__31048__i] = arguments[G__31048__i + 0]; ++G__31048__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__31048__a,0);
} 
return g__delegate.call(this,args__13069__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__31049){
var args__13069__auto__ = cljs.core.seq(arglist__31049);
return g__delegate(args__13069__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28430_31050 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28431_31051 = null;
var count__28432_31052 = (0);
var i__28433_31053 = (0);
while(true){
if((i__28433_31053 < count__28432_31052)){
var arg__13071__auto___31054 = cljs.core._nth.call(null,chunk__28431_31051,i__28433_31053);
a__13070__auto__.push(arg__13071__auto___31054);

var G__31055 = seq__28430_31050;
var G__31056 = chunk__28431_31051;
var G__31057 = count__28432_31052;
var G__31058 = (i__28433_31053 + (1));
seq__28430_31050 = G__31055;
chunk__28431_31051 = G__31056;
count__28432_31052 = G__31057;
i__28433_31053 = G__31058;
continue;
} else {
var temp__4126__auto___31059 = cljs.core.seq.call(null,seq__28430_31050);
if(temp__4126__auto___31059){
var seq__28430_31060__$1 = temp__4126__auto___31059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28430_31060__$1)){
var c__8291__auto___31061 = cljs.core.chunk_first.call(null,seq__28430_31060__$1);
var G__31062 = cljs.core.chunk_rest.call(null,seq__28430_31060__$1);
var G__31063 = c__8291__auto___31061;
var G__31064 = cljs.core.count.call(null,c__8291__auto___31061);
var G__31065 = (0);
seq__28430_31050 = G__31062;
chunk__28431_31051 = G__31063;
count__28432_31052 = G__31064;
i__28433_31053 = G__31065;
continue;
} else {
var arg__13071__auto___31066 = cljs.core.first.call(null,seq__28430_31060__$1);
a__13070__auto__.push(arg__13071__auto___31066);

var G__31067 = cljs.core.next.call(null,seq__28430_31060__$1);
var G__31068 = null;
var G__31069 = (0);
var G__31070 = (0);
seq__28430_31050 = G__31067;
chunk__28431_31051 = G__31068;
count__28432_31052 = G__31069;
i__28433_31053 = G__31070;
continue;
}
} else {
}
}
break;
}

return React.DOM.line.apply(null,a__13070__auto__);
};
var line = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__31071__i = 0, G__31071__a = new Array(arguments.length -  0);
while (G__31071__i < G__31071__a.length) {G__31071__a[G__31071__i] = arguments[G__31071__i + 0]; ++G__31071__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__31071__a,0);
} 
return line__delegate.call(this,args__13069__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__31072){
var args__13069__auto__ = cljs.core.seq(arglist__31072);
return line__delegate(args__13069__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28438_31073 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28439_31074 = null;
var count__28440_31075 = (0);
var i__28441_31076 = (0);
while(true){
if((i__28441_31076 < count__28440_31075)){
var arg__13071__auto___31077 = cljs.core._nth.call(null,chunk__28439_31074,i__28441_31076);
a__13070__auto__.push(arg__13071__auto___31077);

var G__31078 = seq__28438_31073;
var G__31079 = chunk__28439_31074;
var G__31080 = count__28440_31075;
var G__31081 = (i__28441_31076 + (1));
seq__28438_31073 = G__31078;
chunk__28439_31074 = G__31079;
count__28440_31075 = G__31080;
i__28441_31076 = G__31081;
continue;
} else {
var temp__4126__auto___31082 = cljs.core.seq.call(null,seq__28438_31073);
if(temp__4126__auto___31082){
var seq__28438_31083__$1 = temp__4126__auto___31082;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28438_31083__$1)){
var c__8291__auto___31084 = cljs.core.chunk_first.call(null,seq__28438_31083__$1);
var G__31085 = cljs.core.chunk_rest.call(null,seq__28438_31083__$1);
var G__31086 = c__8291__auto___31084;
var G__31087 = cljs.core.count.call(null,c__8291__auto___31084);
var G__31088 = (0);
seq__28438_31073 = G__31085;
chunk__28439_31074 = G__31086;
count__28440_31075 = G__31087;
i__28441_31076 = G__31088;
continue;
} else {
var arg__13071__auto___31089 = cljs.core.first.call(null,seq__28438_31083__$1);
a__13070__auto__.push(arg__13071__auto___31089);

var G__31090 = cljs.core.next.call(null,seq__28438_31083__$1);
var G__31091 = null;
var G__31092 = (0);
var G__31093 = (0);
seq__28438_31073 = G__31090;
chunk__28439_31074 = G__31091;
count__28440_31075 = G__31092;
i__28441_31076 = G__31093;
continue;
}
} else {
}
}
break;
}

return React.DOM.path.apply(null,a__13070__auto__);
};
var path = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__31094__i = 0, G__31094__a = new Array(arguments.length -  0);
while (G__31094__i < G__31094__a.length) {G__31094__a[G__31094__i] = arguments[G__31094__i + 0]; ++G__31094__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__31094__a,0);
} 
return path__delegate.call(this,args__13069__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__31095){
var args__13069__auto__ = cljs.core.seq(arglist__31095);
return path__delegate(args__13069__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28446_31096 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28447_31097 = null;
var count__28448_31098 = (0);
var i__28449_31099 = (0);
while(true){
if((i__28449_31099 < count__28448_31098)){
var arg__13071__auto___31100 = cljs.core._nth.call(null,chunk__28447_31097,i__28449_31099);
a__13070__auto__.push(arg__13071__auto___31100);

var G__31101 = seq__28446_31096;
var G__31102 = chunk__28447_31097;
var G__31103 = count__28448_31098;
var G__31104 = (i__28449_31099 + (1));
seq__28446_31096 = G__31101;
chunk__28447_31097 = G__31102;
count__28448_31098 = G__31103;
i__28449_31099 = G__31104;
continue;
} else {
var temp__4126__auto___31105 = cljs.core.seq.call(null,seq__28446_31096);
if(temp__4126__auto___31105){
var seq__28446_31106__$1 = temp__4126__auto___31105;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28446_31106__$1)){
var c__8291__auto___31107 = cljs.core.chunk_first.call(null,seq__28446_31106__$1);
var G__31108 = cljs.core.chunk_rest.call(null,seq__28446_31106__$1);
var G__31109 = c__8291__auto___31107;
var G__31110 = cljs.core.count.call(null,c__8291__auto___31107);
var G__31111 = (0);
seq__28446_31096 = G__31108;
chunk__28447_31097 = G__31109;
count__28448_31098 = G__31110;
i__28449_31099 = G__31111;
continue;
} else {
var arg__13071__auto___31112 = cljs.core.first.call(null,seq__28446_31106__$1);
a__13070__auto__.push(arg__13071__auto___31112);

var G__31113 = cljs.core.next.call(null,seq__28446_31106__$1);
var G__31114 = null;
var G__31115 = (0);
var G__31116 = (0);
seq__28446_31096 = G__31113;
chunk__28447_31097 = G__31114;
count__28448_31098 = G__31115;
i__28449_31099 = G__31116;
continue;
}
} else {
}
}
break;
}

return React.DOM.polygon.apply(null,a__13070__auto__);
};
var polygon = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__31117__i = 0, G__31117__a = new Array(arguments.length -  0);
while (G__31117__i < G__31117__a.length) {G__31117__a[G__31117__i] = arguments[G__31117__i + 0]; ++G__31117__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__31117__a,0);
} 
return polygon__delegate.call(this,args__13069__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__31118){
var args__13069__auto__ = cljs.core.seq(arglist__31118);
return polygon__delegate(args__13069__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28454_31119 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28455_31120 = null;
var count__28456_31121 = (0);
var i__28457_31122 = (0);
while(true){
if((i__28457_31122 < count__28456_31121)){
var arg__13071__auto___31123 = cljs.core._nth.call(null,chunk__28455_31120,i__28457_31122);
a__13070__auto__.push(arg__13071__auto___31123);

var G__31124 = seq__28454_31119;
var G__31125 = chunk__28455_31120;
var G__31126 = count__28456_31121;
var G__31127 = (i__28457_31122 + (1));
seq__28454_31119 = G__31124;
chunk__28455_31120 = G__31125;
count__28456_31121 = G__31126;
i__28457_31122 = G__31127;
continue;
} else {
var temp__4126__auto___31128 = cljs.core.seq.call(null,seq__28454_31119);
if(temp__4126__auto___31128){
var seq__28454_31129__$1 = temp__4126__auto___31128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28454_31129__$1)){
var c__8291__auto___31130 = cljs.core.chunk_first.call(null,seq__28454_31129__$1);
var G__31131 = cljs.core.chunk_rest.call(null,seq__28454_31129__$1);
var G__31132 = c__8291__auto___31130;
var G__31133 = cljs.core.count.call(null,c__8291__auto___31130);
var G__31134 = (0);
seq__28454_31119 = G__31131;
chunk__28455_31120 = G__31132;
count__28456_31121 = G__31133;
i__28457_31122 = G__31134;
continue;
} else {
var arg__13071__auto___31135 = cljs.core.first.call(null,seq__28454_31129__$1);
a__13070__auto__.push(arg__13071__auto___31135);

var G__31136 = cljs.core.next.call(null,seq__28454_31129__$1);
var G__31137 = null;
var G__31138 = (0);
var G__31139 = (0);
seq__28454_31119 = G__31136;
chunk__28455_31120 = G__31137;
count__28456_31121 = G__31138;
i__28457_31122 = G__31139;
continue;
}
} else {
}
}
break;
}

return React.DOM.polyline.apply(null,a__13070__auto__);
};
var polyline = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__31140__i = 0, G__31140__a = new Array(arguments.length -  0);
while (G__31140__i < G__31140__a.length) {G__31140__a[G__31140__i] = arguments[G__31140__i + 0]; ++G__31140__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__31140__a,0);
} 
return polyline__delegate.call(this,args__13069__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__31141){
var args__13069__auto__ = cljs.core.seq(arglist__31141);
return polyline__delegate(args__13069__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28462_31142 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28463_31143 = null;
var count__28464_31144 = (0);
var i__28465_31145 = (0);
while(true){
if((i__28465_31145 < count__28464_31144)){
var arg__13071__auto___31146 = cljs.core._nth.call(null,chunk__28463_31143,i__28465_31145);
a__13070__auto__.push(arg__13071__auto___31146);

var G__31147 = seq__28462_31142;
var G__31148 = chunk__28463_31143;
var G__31149 = count__28464_31144;
var G__31150 = (i__28465_31145 + (1));
seq__28462_31142 = G__31147;
chunk__28463_31143 = G__31148;
count__28464_31144 = G__31149;
i__28465_31145 = G__31150;
continue;
} else {
var temp__4126__auto___31151 = cljs.core.seq.call(null,seq__28462_31142);
if(temp__4126__auto___31151){
var seq__28462_31152__$1 = temp__4126__auto___31151;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28462_31152__$1)){
var c__8291__auto___31153 = cljs.core.chunk_first.call(null,seq__28462_31152__$1);
var G__31154 = cljs.core.chunk_rest.call(null,seq__28462_31152__$1);
var G__31155 = c__8291__auto___31153;
var G__31156 = cljs.core.count.call(null,c__8291__auto___31153);
var G__31157 = (0);
seq__28462_31142 = G__31154;
chunk__28463_31143 = G__31155;
count__28464_31144 = G__31156;
i__28465_31145 = G__31157;
continue;
} else {
var arg__13071__auto___31158 = cljs.core.first.call(null,seq__28462_31152__$1);
a__13070__auto__.push(arg__13071__auto___31158);

var G__31159 = cljs.core.next.call(null,seq__28462_31152__$1);
var G__31160 = null;
var G__31161 = (0);
var G__31162 = (0);
seq__28462_31142 = G__31159;
chunk__28463_31143 = G__31160;
count__28464_31144 = G__31161;
i__28465_31145 = G__31162;
continue;
}
} else {
}
}
break;
}

return React.DOM.rect.apply(null,a__13070__auto__);
};
var rect = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__31163__i = 0, G__31163__a = new Array(arguments.length -  0);
while (G__31163__i < G__31163__a.length) {G__31163__a[G__31163__i] = arguments[G__31163__i + 0]; ++G__31163__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__31163__a,0);
} 
return rect__delegate.call(this,args__13069__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__31164){
var args__13069__auto__ = cljs.core.seq(arglist__31164);
return rect__delegate(args__13069__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__28470_31165 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__28471_31166 = null;
var count__28472_31167 = (0);
var i__28473_31168 = (0);
while(true){
if((i__28473_31168 < count__28472_31167)){
var arg__13071__auto___31169 = cljs.core._nth.call(null,chunk__28471_31166,i__28473_31168);
a__13070__auto__.push(arg__13071__auto___31169);

var G__31170 = seq__28470_31165;
var G__31171 = chunk__28471_31166;
var G__31172 = count__28472_31167;
var G__31173 = (i__28473_31168 + (1));
seq__28470_31165 = G__31170;
chunk__28471_31166 = G__31171;
count__28472_31167 = G__31172;
i__28473_31168 = G__31173;
continue;
} else {
var temp__4126__auto___31174 = cljs.core.seq.call(null,seq__28470_31165);
if(temp__4126__auto___31174){
var seq__28470_31175__$1 = temp__4126__auto___31174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28470_31175__$1)){
var c__8291__auto___31176 = cljs.core.chunk_first.call(null,seq__28470_31175__$1);
var G__31177 = cljs.core.chunk_rest.call(null,seq__28470_31175__$1);
var G__31178 = c__8291__auto___31176;
var G__31179 = cljs.core.count.call(null,c__8291__auto___31176);
var G__31180 = (0);
seq__28470_31165 = G__31177;
chunk__28471_31166 = G__31178;
count__28472_31167 = G__31179;
i__28473_31168 = G__31180;
continue;
} else {
var arg__13071__auto___31181 = cljs.core.first.call(null,seq__28470_31175__$1);
a__13070__auto__.push(arg__13071__auto___31181);

var G__31182 = cljs.core.next.call(null,seq__28470_31175__$1);
var G__31183 = null;
var G__31184 = (0);
var G__31185 = (0);
seq__28470_31165 = G__31182;
chunk__28471_31166 = G__31183;
count__28472_31167 = G__31184;
i__28473_31168 = G__31185;
continue;
}
} else {
}
}
break;
}

return React.DOM.svg.apply(null,a__13070__auto__);
};
var svg = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__31186__i = 0, G__31186__a = new Array(arguments.length -  0);
while (G__31186__i < G__31186__a.length) {G__31186__a[G__31186__i] = arguments[G__31186__i + 0]; ++G__31186__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__31186__a,0);
} 
return svg__delegate.call(this,args__13069__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__31187){
var args__13069__auto__ = cljs.core.seq(arglist__31187);
return svg__delegate(args__13069__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__13069__auto__){

var a__13070__auto__ = [];
a__13070__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__13069__auto__)));

var seq__27782_31188 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__13069__auto__));
var chunk__27783_31189 = null;
var count__27784_31190 = (0);
var i__27785_31191 = (0);
while(true){
if((i__27785_31191 < count__27784_31190)){
var arg__13071__auto___31192 = cljs.core._nth.call(null,chunk__27783_31189,i__27785_31191);
a__13070__auto__.push(arg__13071__auto___31192);

var G__31193 = seq__27782_31188;
var G__31194 = chunk__27783_31189;
var G__31195 = count__27784_31190;
var G__31196 = (i__27785_31191 + (1));
seq__27782_31188 = G__31193;
chunk__27783_31189 = G__31194;
count__27784_31190 = G__31195;
i__27785_31191 = G__31196;
continue;
} else {
var temp__4126__auto___31197 = cljs.core.seq.call(null,seq__27782_31188);
if(temp__4126__auto___31197){
var seq__27782_31198__$1 = temp__4126__auto___31197;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27782_31198__$1)){
var c__8291__auto___31199 = cljs.core.chunk_first.call(null,seq__27782_31198__$1);
var G__31200 = cljs.core.chunk_rest.call(null,seq__27782_31198__$1);
var G__31201 = c__8291__auto___31199;
var G__31202 = cljs.core.count.call(null,c__8291__auto___31199);
var G__31203 = (0);
seq__27782_31188 = G__31200;
chunk__27783_31189 = G__31201;
count__27784_31190 = G__31202;
i__27785_31191 = G__31203;
continue;
} else {
var arg__13071__auto___31204 = cljs.core.first.call(null,seq__27782_31198__$1);
a__13070__auto__.push(arg__13071__auto___31204);

var G__31205 = cljs.core.next.call(null,seq__27782_31198__$1);
var G__31206 = null;
var G__31207 = (0);
var G__31208 = (0);
seq__27782_31188 = G__31205;
chunk__27783_31189 = G__31206;
count__27784_31190 = G__31207;
i__27785_31191 = G__31208;
continue;
}
} else {
}
}
break;
}

return React.DOM.text.apply(null,a__13070__auto__);
};
var text = function (var_args){
var args__13069__auto__ = null;
if (arguments.length > 0) {
var G__31209__i = 0, G__31209__a = new Array(arguments.length -  0);
while (G__31209__i < G__31209__a.length) {G__31209__a[G__31209__i] = arguments[G__31209__i + 0]; ++G__31209__i;}
  args__13069__auto__ = new cljs.core.IndexedSeq(G__31209__a,0);
} 
return text__delegate.call(this,args__13069__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__31210){
var args__13069__auto__ = cljs.core.seq(arglist__31210);
return text__delegate(args__13069__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;

quiescent.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"caption","caption",-855383902),new cljs.core.Keyword(null,"bdi","bdi",-1323025886),new cljs.core.Keyword(null,"rp","rp",2006698083),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"big","big",903550151),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"dfn","dfn",241908167),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"wbr","wbr",228661800),new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"ins","ins",-1021983570),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"datalist","datalist",-1235043474),new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"samp","samp",1506141136),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"rt","rt",623480692),new cljs.core.Keyword(null,"colgroup","colgroup",651118645),new cljs.core.Keyword(null,"meter","meter",-187641611),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"bdo","bdo",-2131148202),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"noscript","noscript",-704777289),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"menuitem","menuitem",1004047353),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"embed","embed",-1354913349),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"keygen","keygen",-571693253),new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.Keyword(null,"cite","cite",1909439996),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"ruby","ruby",2000737661),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"u","u",-1156634785)],[quiescent.dom.thead,quiescent.dom.path,quiescent.dom.del,quiescent.dom.fieldset,quiescent.dom.q,quiescent.dom.figure,quiescent.dom.aside,quiescent.dom.figcaption,quiescent.dom.video,quiescent.dom.address,quiescent.dom.caption,quiescent.dom.bdi,quiescent.dom.rp,quiescent.dom.hr,quiescent.dom.dd,quiescent.dom.meta,quiescent.dom.tbody,quiescent.dom.table,quiescent.dom.ul,quiescent.dom.pre,quiescent.dom.sup,quiescent.dom.script,quiescent.dom.big,quiescent.dom.button,quiescent.dom.dfn,quiescent.dom.sub,quiescent.dom.mark,quiescent.dom.wbr,quiescent.dom.strong,quiescent.dom.td,quiescent.dom.li,quiescent.dom.dt,quiescent.dom.section,quiescent.dom.th,quiescent.dom.time,quiescent.dom.optgroup,quiescent.dom.iframe,quiescent.dom.tr,quiescent.dom.circle,quiescent.dom.article,quiescent.dom.legend,quiescent.dom.em,quiescent.dom.kbd,quiescent.dom.abbr,quiescent.dom.source,quiescent.dom.output,quiescent.dom.ins,quiescent.dom.footer,quiescent.dom.header,quiescent.dom.datalist,quiescent.dom.tfoot,quiescent.dom.s,quiescent.dom.h5,quiescent.dom.canvas,quiescent.dom.param,quiescent.dom.title,quiescent.dom.small,quiescent.dom.style,quiescent.dom.textarea,quiescent.dom.div,quiescent.dom.option,quiescent.dom.summary,quiescent.dom.samp,quiescent.dom.h4,quiescent.dom.head,quiescent.dom.g,quiescent.dom.ol,quiescent.dom.details,quiescent.dom.line,quiescent.dom.var$,quiescent.dom.h6,quiescent.dom.link,quiescent.dom.col,quiescent.dom.label,quiescent.dom.rt,quiescent.dom.colgroup,quiescent.dom.meter,quiescent.dom.svg,quiescent.dom.code,quiescent.dom.bdo,quiescent.dom.b,quiescent.dom.noscript,quiescent.dom.h2,quiescent.dom.area,quiescent.dom.br,quiescent.dom.form,quiescent.dom.audio,quiescent.dom.input,quiescent.dom.menuitem,quiescent.dom.base,quiescent.dom.h1,quiescent.dom.progress,quiescent.dom.main,quiescent.dom.embed,quiescent.dom.h3,quiescent.dom.body,quiescent.dom.keygen,quiescent.dom.polyline,quiescent.dom.cite,quiescent.dom.rect,quiescent.dom.p,quiescent.dom.nav,quiescent.dom.ruby,quiescent.dom.map,quiescent.dom.object,quiescent.dom.i,quiescent.dom.menu,quiescent.dom.blockquote,quiescent.dom.img,quiescent.dom.a,quiescent.dom.dl,quiescent.dom.select,quiescent.dom.polygon,quiescent.dom.html,quiescent.dom.text,quiescent.dom.span,quiescent.dom.track,quiescent.dom.data,quiescent.dom.u]);
