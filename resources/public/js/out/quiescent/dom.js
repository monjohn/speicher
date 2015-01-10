// Compiled by ClojureScript 0.0-2674 {}
if(!goog.isProvided_('quiescent.dom')) {
goog.provide('quiescent.dom');
}
goog.require('cljs.core');
goog.require('quiescent');
/**
* @param {...*} var_args
*/
quiescent.dom.a = (function() { 
var a__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19564_20512 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19565_20513 = null;
var count__19566_20514 = (0);
var i__19567_20515 = (0);
while(true){
if((i__19567_20515 < count__19566_20514)){
var arg__6250__auto___20516 = cljs.core._nth.call(null,chunk__19565_20513,i__19567_20515);
a__6249__auto__.push(arg__6250__auto___20516);

var G__20517 = seq__19564_20512;
var G__20518 = chunk__19565_20513;
var G__20519 = count__19566_20514;
var G__20520 = (i__19567_20515 + (1));
seq__19564_20512 = G__20517;
chunk__19565_20513 = G__20518;
count__19566_20514 = G__20519;
i__19567_20515 = G__20520;
continue;
} else {
var temp__4126__auto___20521 = cljs.core.seq.call(null,seq__19564_20512);
if(temp__4126__auto___20521){
var seq__19564_20522__$1 = temp__4126__auto___20521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19564_20522__$1)){
var c__4541__auto___20523 = cljs.core.chunk_first.call(null,seq__19564_20522__$1);
var G__20524 = cljs.core.chunk_rest.call(null,seq__19564_20522__$1);
var G__20525 = c__4541__auto___20523;
var G__20526 = cljs.core.count.call(null,c__4541__auto___20523);
var G__20527 = (0);
seq__19564_20512 = G__20524;
chunk__19565_20513 = G__20525;
count__19566_20514 = G__20526;
i__19567_20515 = G__20527;
continue;
} else {
var arg__6250__auto___20528 = cljs.core.first.call(null,seq__19564_20522__$1);
a__6249__auto__.push(arg__6250__auto___20528);

var G__20529 = cljs.core.next.call(null,seq__19564_20522__$1);
var G__20530 = null;
var G__20531 = (0);
var G__20532 = (0);
seq__19564_20512 = G__20529;
chunk__19565_20513 = G__20530;
count__19566_20514 = G__20531;
i__19567_20515 = G__20532;
continue;
}
} else {
}
}
break;
}

return React.DOM.a.apply(null,a__6249__auto__);
};
var a = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20533__i = 0, G__20533__a = new Array(arguments.length -  0);
while (G__20533__i < G__20533__a.length) {G__20533__a[G__20533__i] = arguments[G__20533__i + 0]; ++G__20533__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20533__a,0);
} 
return a__delegate.call(this,args__6248__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__20534){
var args__6248__auto__ = cljs.core.seq(arglist__20534);
return a__delegate(args__6248__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19572_20535 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19573_20536 = null;
var count__19574_20537 = (0);
var i__19575_20538 = (0);
while(true){
if((i__19575_20538 < count__19574_20537)){
var arg__6250__auto___20539 = cljs.core._nth.call(null,chunk__19573_20536,i__19575_20538);
a__6249__auto__.push(arg__6250__auto___20539);

var G__20540 = seq__19572_20535;
var G__20541 = chunk__19573_20536;
var G__20542 = count__19574_20537;
var G__20543 = (i__19575_20538 + (1));
seq__19572_20535 = G__20540;
chunk__19573_20536 = G__20541;
count__19574_20537 = G__20542;
i__19575_20538 = G__20543;
continue;
} else {
var temp__4126__auto___20544 = cljs.core.seq.call(null,seq__19572_20535);
if(temp__4126__auto___20544){
var seq__19572_20545__$1 = temp__4126__auto___20544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19572_20545__$1)){
var c__4541__auto___20546 = cljs.core.chunk_first.call(null,seq__19572_20545__$1);
var G__20547 = cljs.core.chunk_rest.call(null,seq__19572_20545__$1);
var G__20548 = c__4541__auto___20546;
var G__20549 = cljs.core.count.call(null,c__4541__auto___20546);
var G__20550 = (0);
seq__19572_20535 = G__20547;
chunk__19573_20536 = G__20548;
count__19574_20537 = G__20549;
i__19575_20538 = G__20550;
continue;
} else {
var arg__6250__auto___20551 = cljs.core.first.call(null,seq__19572_20545__$1);
a__6249__auto__.push(arg__6250__auto___20551);

var G__20552 = cljs.core.next.call(null,seq__19572_20545__$1);
var G__20553 = null;
var G__20554 = (0);
var G__20555 = (0);
seq__19572_20535 = G__20552;
chunk__19573_20536 = G__20553;
count__19574_20537 = G__20554;
i__19575_20538 = G__20555;
continue;
}
} else {
}
}
break;
}

return React.DOM.abbr.apply(null,a__6249__auto__);
};
var abbr = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20556__i = 0, G__20556__a = new Array(arguments.length -  0);
while (G__20556__i < G__20556__a.length) {G__20556__a[G__20556__i] = arguments[G__20556__i + 0]; ++G__20556__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20556__a,0);
} 
return abbr__delegate.call(this,args__6248__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__20557){
var args__6248__auto__ = cljs.core.seq(arglist__20557);
return abbr__delegate(args__6248__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19580_20558 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19581_20559 = null;
var count__19582_20560 = (0);
var i__19583_20561 = (0);
while(true){
if((i__19583_20561 < count__19582_20560)){
var arg__6250__auto___20562 = cljs.core._nth.call(null,chunk__19581_20559,i__19583_20561);
a__6249__auto__.push(arg__6250__auto___20562);

var G__20563 = seq__19580_20558;
var G__20564 = chunk__19581_20559;
var G__20565 = count__19582_20560;
var G__20566 = (i__19583_20561 + (1));
seq__19580_20558 = G__20563;
chunk__19581_20559 = G__20564;
count__19582_20560 = G__20565;
i__19583_20561 = G__20566;
continue;
} else {
var temp__4126__auto___20567 = cljs.core.seq.call(null,seq__19580_20558);
if(temp__4126__auto___20567){
var seq__19580_20568__$1 = temp__4126__auto___20567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19580_20568__$1)){
var c__4541__auto___20569 = cljs.core.chunk_first.call(null,seq__19580_20568__$1);
var G__20570 = cljs.core.chunk_rest.call(null,seq__19580_20568__$1);
var G__20571 = c__4541__auto___20569;
var G__20572 = cljs.core.count.call(null,c__4541__auto___20569);
var G__20573 = (0);
seq__19580_20558 = G__20570;
chunk__19581_20559 = G__20571;
count__19582_20560 = G__20572;
i__19583_20561 = G__20573;
continue;
} else {
var arg__6250__auto___20574 = cljs.core.first.call(null,seq__19580_20568__$1);
a__6249__auto__.push(arg__6250__auto___20574);

var G__20575 = cljs.core.next.call(null,seq__19580_20568__$1);
var G__20576 = null;
var G__20577 = (0);
var G__20578 = (0);
seq__19580_20558 = G__20575;
chunk__19581_20559 = G__20576;
count__19582_20560 = G__20577;
i__19583_20561 = G__20578;
continue;
}
} else {
}
}
break;
}

return React.DOM.address.apply(null,a__6249__auto__);
};
var address = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20579__i = 0, G__20579__a = new Array(arguments.length -  0);
while (G__20579__i < G__20579__a.length) {G__20579__a[G__20579__i] = arguments[G__20579__i + 0]; ++G__20579__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20579__a,0);
} 
return address__delegate.call(this,args__6248__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__20580){
var args__6248__auto__ = cljs.core.seq(arglist__20580);
return address__delegate(args__6248__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19588_20581 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19589_20582 = null;
var count__19590_20583 = (0);
var i__19591_20584 = (0);
while(true){
if((i__19591_20584 < count__19590_20583)){
var arg__6250__auto___20585 = cljs.core._nth.call(null,chunk__19589_20582,i__19591_20584);
a__6249__auto__.push(arg__6250__auto___20585);

var G__20586 = seq__19588_20581;
var G__20587 = chunk__19589_20582;
var G__20588 = count__19590_20583;
var G__20589 = (i__19591_20584 + (1));
seq__19588_20581 = G__20586;
chunk__19589_20582 = G__20587;
count__19590_20583 = G__20588;
i__19591_20584 = G__20589;
continue;
} else {
var temp__4126__auto___20590 = cljs.core.seq.call(null,seq__19588_20581);
if(temp__4126__auto___20590){
var seq__19588_20591__$1 = temp__4126__auto___20590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19588_20591__$1)){
var c__4541__auto___20592 = cljs.core.chunk_first.call(null,seq__19588_20591__$1);
var G__20593 = cljs.core.chunk_rest.call(null,seq__19588_20591__$1);
var G__20594 = c__4541__auto___20592;
var G__20595 = cljs.core.count.call(null,c__4541__auto___20592);
var G__20596 = (0);
seq__19588_20581 = G__20593;
chunk__19589_20582 = G__20594;
count__19590_20583 = G__20595;
i__19591_20584 = G__20596;
continue;
} else {
var arg__6250__auto___20597 = cljs.core.first.call(null,seq__19588_20591__$1);
a__6249__auto__.push(arg__6250__auto___20597);

var G__20598 = cljs.core.next.call(null,seq__19588_20591__$1);
var G__20599 = null;
var G__20600 = (0);
var G__20601 = (0);
seq__19588_20581 = G__20598;
chunk__19589_20582 = G__20599;
count__19590_20583 = G__20600;
i__19591_20584 = G__20601;
continue;
}
} else {
}
}
break;
}

return React.DOM.area.apply(null,a__6249__auto__);
};
var area = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20602__i = 0, G__20602__a = new Array(arguments.length -  0);
while (G__20602__i < G__20602__a.length) {G__20602__a[G__20602__i] = arguments[G__20602__i + 0]; ++G__20602__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20602__a,0);
} 
return area__delegate.call(this,args__6248__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__20603){
var args__6248__auto__ = cljs.core.seq(arglist__20603);
return area__delegate(args__6248__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19596_20604 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19597_20605 = null;
var count__19598_20606 = (0);
var i__19599_20607 = (0);
while(true){
if((i__19599_20607 < count__19598_20606)){
var arg__6250__auto___20608 = cljs.core._nth.call(null,chunk__19597_20605,i__19599_20607);
a__6249__auto__.push(arg__6250__auto___20608);

var G__20609 = seq__19596_20604;
var G__20610 = chunk__19597_20605;
var G__20611 = count__19598_20606;
var G__20612 = (i__19599_20607 + (1));
seq__19596_20604 = G__20609;
chunk__19597_20605 = G__20610;
count__19598_20606 = G__20611;
i__19599_20607 = G__20612;
continue;
} else {
var temp__4126__auto___20613 = cljs.core.seq.call(null,seq__19596_20604);
if(temp__4126__auto___20613){
var seq__19596_20614__$1 = temp__4126__auto___20613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19596_20614__$1)){
var c__4541__auto___20615 = cljs.core.chunk_first.call(null,seq__19596_20614__$1);
var G__20616 = cljs.core.chunk_rest.call(null,seq__19596_20614__$1);
var G__20617 = c__4541__auto___20615;
var G__20618 = cljs.core.count.call(null,c__4541__auto___20615);
var G__20619 = (0);
seq__19596_20604 = G__20616;
chunk__19597_20605 = G__20617;
count__19598_20606 = G__20618;
i__19599_20607 = G__20619;
continue;
} else {
var arg__6250__auto___20620 = cljs.core.first.call(null,seq__19596_20614__$1);
a__6249__auto__.push(arg__6250__auto___20620);

var G__20621 = cljs.core.next.call(null,seq__19596_20614__$1);
var G__20622 = null;
var G__20623 = (0);
var G__20624 = (0);
seq__19596_20604 = G__20621;
chunk__19597_20605 = G__20622;
count__19598_20606 = G__20623;
i__19599_20607 = G__20624;
continue;
}
} else {
}
}
break;
}

return React.DOM.article.apply(null,a__6249__auto__);
};
var article = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20625__i = 0, G__20625__a = new Array(arguments.length -  0);
while (G__20625__i < G__20625__a.length) {G__20625__a[G__20625__i] = arguments[G__20625__i + 0]; ++G__20625__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20625__a,0);
} 
return article__delegate.call(this,args__6248__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__20626){
var args__6248__auto__ = cljs.core.seq(arglist__20626);
return article__delegate(args__6248__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19604_20627 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19605_20628 = null;
var count__19606_20629 = (0);
var i__19607_20630 = (0);
while(true){
if((i__19607_20630 < count__19606_20629)){
var arg__6250__auto___20631 = cljs.core._nth.call(null,chunk__19605_20628,i__19607_20630);
a__6249__auto__.push(arg__6250__auto___20631);

var G__20632 = seq__19604_20627;
var G__20633 = chunk__19605_20628;
var G__20634 = count__19606_20629;
var G__20635 = (i__19607_20630 + (1));
seq__19604_20627 = G__20632;
chunk__19605_20628 = G__20633;
count__19606_20629 = G__20634;
i__19607_20630 = G__20635;
continue;
} else {
var temp__4126__auto___20636 = cljs.core.seq.call(null,seq__19604_20627);
if(temp__4126__auto___20636){
var seq__19604_20637__$1 = temp__4126__auto___20636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19604_20637__$1)){
var c__4541__auto___20638 = cljs.core.chunk_first.call(null,seq__19604_20637__$1);
var G__20639 = cljs.core.chunk_rest.call(null,seq__19604_20637__$1);
var G__20640 = c__4541__auto___20638;
var G__20641 = cljs.core.count.call(null,c__4541__auto___20638);
var G__20642 = (0);
seq__19604_20627 = G__20639;
chunk__19605_20628 = G__20640;
count__19606_20629 = G__20641;
i__19607_20630 = G__20642;
continue;
} else {
var arg__6250__auto___20643 = cljs.core.first.call(null,seq__19604_20637__$1);
a__6249__auto__.push(arg__6250__auto___20643);

var G__20644 = cljs.core.next.call(null,seq__19604_20637__$1);
var G__20645 = null;
var G__20646 = (0);
var G__20647 = (0);
seq__19604_20627 = G__20644;
chunk__19605_20628 = G__20645;
count__19606_20629 = G__20646;
i__19607_20630 = G__20647;
continue;
}
} else {
}
}
break;
}

return React.DOM.aside.apply(null,a__6249__auto__);
};
var aside = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20648__i = 0, G__20648__a = new Array(arguments.length -  0);
while (G__20648__i < G__20648__a.length) {G__20648__a[G__20648__i] = arguments[G__20648__i + 0]; ++G__20648__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20648__a,0);
} 
return aside__delegate.call(this,args__6248__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__20649){
var args__6248__auto__ = cljs.core.seq(arglist__20649);
return aside__delegate(args__6248__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19612_20650 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19613_20651 = null;
var count__19614_20652 = (0);
var i__19615_20653 = (0);
while(true){
if((i__19615_20653 < count__19614_20652)){
var arg__6250__auto___20654 = cljs.core._nth.call(null,chunk__19613_20651,i__19615_20653);
a__6249__auto__.push(arg__6250__auto___20654);

var G__20655 = seq__19612_20650;
var G__20656 = chunk__19613_20651;
var G__20657 = count__19614_20652;
var G__20658 = (i__19615_20653 + (1));
seq__19612_20650 = G__20655;
chunk__19613_20651 = G__20656;
count__19614_20652 = G__20657;
i__19615_20653 = G__20658;
continue;
} else {
var temp__4126__auto___20659 = cljs.core.seq.call(null,seq__19612_20650);
if(temp__4126__auto___20659){
var seq__19612_20660__$1 = temp__4126__auto___20659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19612_20660__$1)){
var c__4541__auto___20661 = cljs.core.chunk_first.call(null,seq__19612_20660__$1);
var G__20662 = cljs.core.chunk_rest.call(null,seq__19612_20660__$1);
var G__20663 = c__4541__auto___20661;
var G__20664 = cljs.core.count.call(null,c__4541__auto___20661);
var G__20665 = (0);
seq__19612_20650 = G__20662;
chunk__19613_20651 = G__20663;
count__19614_20652 = G__20664;
i__19615_20653 = G__20665;
continue;
} else {
var arg__6250__auto___20666 = cljs.core.first.call(null,seq__19612_20660__$1);
a__6249__auto__.push(arg__6250__auto___20666);

var G__20667 = cljs.core.next.call(null,seq__19612_20660__$1);
var G__20668 = null;
var G__20669 = (0);
var G__20670 = (0);
seq__19612_20650 = G__20667;
chunk__19613_20651 = G__20668;
count__19614_20652 = G__20669;
i__19615_20653 = G__20670;
continue;
}
} else {
}
}
break;
}

return React.DOM.audio.apply(null,a__6249__auto__);
};
var audio = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20671__i = 0, G__20671__a = new Array(arguments.length -  0);
while (G__20671__i < G__20671__a.length) {G__20671__a[G__20671__i] = arguments[G__20671__i + 0]; ++G__20671__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20671__a,0);
} 
return audio__delegate.call(this,args__6248__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__20672){
var args__6248__auto__ = cljs.core.seq(arglist__20672);
return audio__delegate(args__6248__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19620_20673 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19621_20674 = null;
var count__19622_20675 = (0);
var i__19623_20676 = (0);
while(true){
if((i__19623_20676 < count__19622_20675)){
var arg__6250__auto___20677 = cljs.core._nth.call(null,chunk__19621_20674,i__19623_20676);
a__6249__auto__.push(arg__6250__auto___20677);

var G__20678 = seq__19620_20673;
var G__20679 = chunk__19621_20674;
var G__20680 = count__19622_20675;
var G__20681 = (i__19623_20676 + (1));
seq__19620_20673 = G__20678;
chunk__19621_20674 = G__20679;
count__19622_20675 = G__20680;
i__19623_20676 = G__20681;
continue;
} else {
var temp__4126__auto___20682 = cljs.core.seq.call(null,seq__19620_20673);
if(temp__4126__auto___20682){
var seq__19620_20683__$1 = temp__4126__auto___20682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19620_20683__$1)){
var c__4541__auto___20684 = cljs.core.chunk_first.call(null,seq__19620_20683__$1);
var G__20685 = cljs.core.chunk_rest.call(null,seq__19620_20683__$1);
var G__20686 = c__4541__auto___20684;
var G__20687 = cljs.core.count.call(null,c__4541__auto___20684);
var G__20688 = (0);
seq__19620_20673 = G__20685;
chunk__19621_20674 = G__20686;
count__19622_20675 = G__20687;
i__19623_20676 = G__20688;
continue;
} else {
var arg__6250__auto___20689 = cljs.core.first.call(null,seq__19620_20683__$1);
a__6249__auto__.push(arg__6250__auto___20689);

var G__20690 = cljs.core.next.call(null,seq__19620_20683__$1);
var G__20691 = null;
var G__20692 = (0);
var G__20693 = (0);
seq__19620_20673 = G__20690;
chunk__19621_20674 = G__20691;
count__19622_20675 = G__20692;
i__19623_20676 = G__20693;
continue;
}
} else {
}
}
break;
}

return React.DOM.b.apply(null,a__6249__auto__);
};
var b = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20694__i = 0, G__20694__a = new Array(arguments.length -  0);
while (G__20694__i < G__20694__a.length) {G__20694__a[G__20694__i] = arguments[G__20694__i + 0]; ++G__20694__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20694__a,0);
} 
return b__delegate.call(this,args__6248__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__20695){
var args__6248__auto__ = cljs.core.seq(arglist__20695);
return b__delegate(args__6248__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19628_20696 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19629_20697 = null;
var count__19630_20698 = (0);
var i__19631_20699 = (0);
while(true){
if((i__19631_20699 < count__19630_20698)){
var arg__6250__auto___20700 = cljs.core._nth.call(null,chunk__19629_20697,i__19631_20699);
a__6249__auto__.push(arg__6250__auto___20700);

var G__20701 = seq__19628_20696;
var G__20702 = chunk__19629_20697;
var G__20703 = count__19630_20698;
var G__20704 = (i__19631_20699 + (1));
seq__19628_20696 = G__20701;
chunk__19629_20697 = G__20702;
count__19630_20698 = G__20703;
i__19631_20699 = G__20704;
continue;
} else {
var temp__4126__auto___20705 = cljs.core.seq.call(null,seq__19628_20696);
if(temp__4126__auto___20705){
var seq__19628_20706__$1 = temp__4126__auto___20705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19628_20706__$1)){
var c__4541__auto___20707 = cljs.core.chunk_first.call(null,seq__19628_20706__$1);
var G__20708 = cljs.core.chunk_rest.call(null,seq__19628_20706__$1);
var G__20709 = c__4541__auto___20707;
var G__20710 = cljs.core.count.call(null,c__4541__auto___20707);
var G__20711 = (0);
seq__19628_20696 = G__20708;
chunk__19629_20697 = G__20709;
count__19630_20698 = G__20710;
i__19631_20699 = G__20711;
continue;
} else {
var arg__6250__auto___20712 = cljs.core.first.call(null,seq__19628_20706__$1);
a__6249__auto__.push(arg__6250__auto___20712);

var G__20713 = cljs.core.next.call(null,seq__19628_20706__$1);
var G__20714 = null;
var G__20715 = (0);
var G__20716 = (0);
seq__19628_20696 = G__20713;
chunk__19629_20697 = G__20714;
count__19630_20698 = G__20715;
i__19631_20699 = G__20716;
continue;
}
} else {
}
}
break;
}

return React.DOM.base.apply(null,a__6249__auto__);
};
var base = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20717__i = 0, G__20717__a = new Array(arguments.length -  0);
while (G__20717__i < G__20717__a.length) {G__20717__a[G__20717__i] = arguments[G__20717__i + 0]; ++G__20717__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20717__a,0);
} 
return base__delegate.call(this,args__6248__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__20718){
var args__6248__auto__ = cljs.core.seq(arglist__20718);
return base__delegate(args__6248__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19636_20719 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19637_20720 = null;
var count__19638_20721 = (0);
var i__19639_20722 = (0);
while(true){
if((i__19639_20722 < count__19638_20721)){
var arg__6250__auto___20723 = cljs.core._nth.call(null,chunk__19637_20720,i__19639_20722);
a__6249__auto__.push(arg__6250__auto___20723);

var G__20724 = seq__19636_20719;
var G__20725 = chunk__19637_20720;
var G__20726 = count__19638_20721;
var G__20727 = (i__19639_20722 + (1));
seq__19636_20719 = G__20724;
chunk__19637_20720 = G__20725;
count__19638_20721 = G__20726;
i__19639_20722 = G__20727;
continue;
} else {
var temp__4126__auto___20728 = cljs.core.seq.call(null,seq__19636_20719);
if(temp__4126__auto___20728){
var seq__19636_20729__$1 = temp__4126__auto___20728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19636_20729__$1)){
var c__4541__auto___20730 = cljs.core.chunk_first.call(null,seq__19636_20729__$1);
var G__20731 = cljs.core.chunk_rest.call(null,seq__19636_20729__$1);
var G__20732 = c__4541__auto___20730;
var G__20733 = cljs.core.count.call(null,c__4541__auto___20730);
var G__20734 = (0);
seq__19636_20719 = G__20731;
chunk__19637_20720 = G__20732;
count__19638_20721 = G__20733;
i__19639_20722 = G__20734;
continue;
} else {
var arg__6250__auto___20735 = cljs.core.first.call(null,seq__19636_20729__$1);
a__6249__auto__.push(arg__6250__auto___20735);

var G__20736 = cljs.core.next.call(null,seq__19636_20729__$1);
var G__20737 = null;
var G__20738 = (0);
var G__20739 = (0);
seq__19636_20719 = G__20736;
chunk__19637_20720 = G__20737;
count__19638_20721 = G__20738;
i__19639_20722 = G__20739;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdi.apply(null,a__6249__auto__);
};
var bdi = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20740__i = 0, G__20740__a = new Array(arguments.length -  0);
while (G__20740__i < G__20740__a.length) {G__20740__a[G__20740__i] = arguments[G__20740__i + 0]; ++G__20740__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20740__a,0);
} 
return bdi__delegate.call(this,args__6248__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__20741){
var args__6248__auto__ = cljs.core.seq(arglist__20741);
return bdi__delegate(args__6248__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19644_20742 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19645_20743 = null;
var count__19646_20744 = (0);
var i__19647_20745 = (0);
while(true){
if((i__19647_20745 < count__19646_20744)){
var arg__6250__auto___20746 = cljs.core._nth.call(null,chunk__19645_20743,i__19647_20745);
a__6249__auto__.push(arg__6250__auto___20746);

var G__20747 = seq__19644_20742;
var G__20748 = chunk__19645_20743;
var G__20749 = count__19646_20744;
var G__20750 = (i__19647_20745 + (1));
seq__19644_20742 = G__20747;
chunk__19645_20743 = G__20748;
count__19646_20744 = G__20749;
i__19647_20745 = G__20750;
continue;
} else {
var temp__4126__auto___20751 = cljs.core.seq.call(null,seq__19644_20742);
if(temp__4126__auto___20751){
var seq__19644_20752__$1 = temp__4126__auto___20751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19644_20752__$1)){
var c__4541__auto___20753 = cljs.core.chunk_first.call(null,seq__19644_20752__$1);
var G__20754 = cljs.core.chunk_rest.call(null,seq__19644_20752__$1);
var G__20755 = c__4541__auto___20753;
var G__20756 = cljs.core.count.call(null,c__4541__auto___20753);
var G__20757 = (0);
seq__19644_20742 = G__20754;
chunk__19645_20743 = G__20755;
count__19646_20744 = G__20756;
i__19647_20745 = G__20757;
continue;
} else {
var arg__6250__auto___20758 = cljs.core.first.call(null,seq__19644_20752__$1);
a__6249__auto__.push(arg__6250__auto___20758);

var G__20759 = cljs.core.next.call(null,seq__19644_20752__$1);
var G__20760 = null;
var G__20761 = (0);
var G__20762 = (0);
seq__19644_20742 = G__20759;
chunk__19645_20743 = G__20760;
count__19646_20744 = G__20761;
i__19647_20745 = G__20762;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdo.apply(null,a__6249__auto__);
};
var bdo = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20763__i = 0, G__20763__a = new Array(arguments.length -  0);
while (G__20763__i < G__20763__a.length) {G__20763__a[G__20763__i] = arguments[G__20763__i + 0]; ++G__20763__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20763__a,0);
} 
return bdo__delegate.call(this,args__6248__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__20764){
var args__6248__auto__ = cljs.core.seq(arglist__20764);
return bdo__delegate(args__6248__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19652_20765 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19653_20766 = null;
var count__19654_20767 = (0);
var i__19655_20768 = (0);
while(true){
if((i__19655_20768 < count__19654_20767)){
var arg__6250__auto___20769 = cljs.core._nth.call(null,chunk__19653_20766,i__19655_20768);
a__6249__auto__.push(arg__6250__auto___20769);

var G__20770 = seq__19652_20765;
var G__20771 = chunk__19653_20766;
var G__20772 = count__19654_20767;
var G__20773 = (i__19655_20768 + (1));
seq__19652_20765 = G__20770;
chunk__19653_20766 = G__20771;
count__19654_20767 = G__20772;
i__19655_20768 = G__20773;
continue;
} else {
var temp__4126__auto___20774 = cljs.core.seq.call(null,seq__19652_20765);
if(temp__4126__auto___20774){
var seq__19652_20775__$1 = temp__4126__auto___20774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19652_20775__$1)){
var c__4541__auto___20776 = cljs.core.chunk_first.call(null,seq__19652_20775__$1);
var G__20777 = cljs.core.chunk_rest.call(null,seq__19652_20775__$1);
var G__20778 = c__4541__auto___20776;
var G__20779 = cljs.core.count.call(null,c__4541__auto___20776);
var G__20780 = (0);
seq__19652_20765 = G__20777;
chunk__19653_20766 = G__20778;
count__19654_20767 = G__20779;
i__19655_20768 = G__20780;
continue;
} else {
var arg__6250__auto___20781 = cljs.core.first.call(null,seq__19652_20775__$1);
a__6249__auto__.push(arg__6250__auto___20781);

var G__20782 = cljs.core.next.call(null,seq__19652_20775__$1);
var G__20783 = null;
var G__20784 = (0);
var G__20785 = (0);
seq__19652_20765 = G__20782;
chunk__19653_20766 = G__20783;
count__19654_20767 = G__20784;
i__19655_20768 = G__20785;
continue;
}
} else {
}
}
break;
}

return React.DOM.big.apply(null,a__6249__auto__);
};
var big = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20786__i = 0, G__20786__a = new Array(arguments.length -  0);
while (G__20786__i < G__20786__a.length) {G__20786__a[G__20786__i] = arguments[G__20786__i + 0]; ++G__20786__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20786__a,0);
} 
return big__delegate.call(this,args__6248__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__20787){
var args__6248__auto__ = cljs.core.seq(arglist__20787);
return big__delegate(args__6248__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19660_20788 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19661_20789 = null;
var count__19662_20790 = (0);
var i__19663_20791 = (0);
while(true){
if((i__19663_20791 < count__19662_20790)){
var arg__6250__auto___20792 = cljs.core._nth.call(null,chunk__19661_20789,i__19663_20791);
a__6249__auto__.push(arg__6250__auto___20792);

var G__20793 = seq__19660_20788;
var G__20794 = chunk__19661_20789;
var G__20795 = count__19662_20790;
var G__20796 = (i__19663_20791 + (1));
seq__19660_20788 = G__20793;
chunk__19661_20789 = G__20794;
count__19662_20790 = G__20795;
i__19663_20791 = G__20796;
continue;
} else {
var temp__4126__auto___20797 = cljs.core.seq.call(null,seq__19660_20788);
if(temp__4126__auto___20797){
var seq__19660_20798__$1 = temp__4126__auto___20797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19660_20798__$1)){
var c__4541__auto___20799 = cljs.core.chunk_first.call(null,seq__19660_20798__$1);
var G__20800 = cljs.core.chunk_rest.call(null,seq__19660_20798__$1);
var G__20801 = c__4541__auto___20799;
var G__20802 = cljs.core.count.call(null,c__4541__auto___20799);
var G__20803 = (0);
seq__19660_20788 = G__20800;
chunk__19661_20789 = G__20801;
count__19662_20790 = G__20802;
i__19663_20791 = G__20803;
continue;
} else {
var arg__6250__auto___20804 = cljs.core.first.call(null,seq__19660_20798__$1);
a__6249__auto__.push(arg__6250__auto___20804);

var G__20805 = cljs.core.next.call(null,seq__19660_20798__$1);
var G__20806 = null;
var G__20807 = (0);
var G__20808 = (0);
seq__19660_20788 = G__20805;
chunk__19661_20789 = G__20806;
count__19662_20790 = G__20807;
i__19663_20791 = G__20808;
continue;
}
} else {
}
}
break;
}

return React.DOM.blockquote.apply(null,a__6249__auto__);
};
var blockquote = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20809__i = 0, G__20809__a = new Array(arguments.length -  0);
while (G__20809__i < G__20809__a.length) {G__20809__a[G__20809__i] = arguments[G__20809__i + 0]; ++G__20809__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20809__a,0);
} 
return blockquote__delegate.call(this,args__6248__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__20810){
var args__6248__auto__ = cljs.core.seq(arglist__20810);
return blockquote__delegate(args__6248__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19668_20811 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19669_20812 = null;
var count__19670_20813 = (0);
var i__19671_20814 = (0);
while(true){
if((i__19671_20814 < count__19670_20813)){
var arg__6250__auto___20815 = cljs.core._nth.call(null,chunk__19669_20812,i__19671_20814);
a__6249__auto__.push(arg__6250__auto___20815);

var G__20816 = seq__19668_20811;
var G__20817 = chunk__19669_20812;
var G__20818 = count__19670_20813;
var G__20819 = (i__19671_20814 + (1));
seq__19668_20811 = G__20816;
chunk__19669_20812 = G__20817;
count__19670_20813 = G__20818;
i__19671_20814 = G__20819;
continue;
} else {
var temp__4126__auto___20820 = cljs.core.seq.call(null,seq__19668_20811);
if(temp__4126__auto___20820){
var seq__19668_20821__$1 = temp__4126__auto___20820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19668_20821__$1)){
var c__4541__auto___20822 = cljs.core.chunk_first.call(null,seq__19668_20821__$1);
var G__20823 = cljs.core.chunk_rest.call(null,seq__19668_20821__$1);
var G__20824 = c__4541__auto___20822;
var G__20825 = cljs.core.count.call(null,c__4541__auto___20822);
var G__20826 = (0);
seq__19668_20811 = G__20823;
chunk__19669_20812 = G__20824;
count__19670_20813 = G__20825;
i__19671_20814 = G__20826;
continue;
} else {
var arg__6250__auto___20827 = cljs.core.first.call(null,seq__19668_20821__$1);
a__6249__auto__.push(arg__6250__auto___20827);

var G__20828 = cljs.core.next.call(null,seq__19668_20821__$1);
var G__20829 = null;
var G__20830 = (0);
var G__20831 = (0);
seq__19668_20811 = G__20828;
chunk__19669_20812 = G__20829;
count__19670_20813 = G__20830;
i__19671_20814 = G__20831;
continue;
}
} else {
}
}
break;
}

return React.DOM.body.apply(null,a__6249__auto__);
};
var body = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20832__i = 0, G__20832__a = new Array(arguments.length -  0);
while (G__20832__i < G__20832__a.length) {G__20832__a[G__20832__i] = arguments[G__20832__i + 0]; ++G__20832__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20832__a,0);
} 
return body__delegate.call(this,args__6248__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__20833){
var args__6248__auto__ = cljs.core.seq(arglist__20833);
return body__delegate(args__6248__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19676_20834 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19677_20835 = null;
var count__19678_20836 = (0);
var i__19679_20837 = (0);
while(true){
if((i__19679_20837 < count__19678_20836)){
var arg__6250__auto___20838 = cljs.core._nth.call(null,chunk__19677_20835,i__19679_20837);
a__6249__auto__.push(arg__6250__auto___20838);

var G__20839 = seq__19676_20834;
var G__20840 = chunk__19677_20835;
var G__20841 = count__19678_20836;
var G__20842 = (i__19679_20837 + (1));
seq__19676_20834 = G__20839;
chunk__19677_20835 = G__20840;
count__19678_20836 = G__20841;
i__19679_20837 = G__20842;
continue;
} else {
var temp__4126__auto___20843 = cljs.core.seq.call(null,seq__19676_20834);
if(temp__4126__auto___20843){
var seq__19676_20844__$1 = temp__4126__auto___20843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19676_20844__$1)){
var c__4541__auto___20845 = cljs.core.chunk_first.call(null,seq__19676_20844__$1);
var G__20846 = cljs.core.chunk_rest.call(null,seq__19676_20844__$1);
var G__20847 = c__4541__auto___20845;
var G__20848 = cljs.core.count.call(null,c__4541__auto___20845);
var G__20849 = (0);
seq__19676_20834 = G__20846;
chunk__19677_20835 = G__20847;
count__19678_20836 = G__20848;
i__19679_20837 = G__20849;
continue;
} else {
var arg__6250__auto___20850 = cljs.core.first.call(null,seq__19676_20844__$1);
a__6249__auto__.push(arg__6250__auto___20850);

var G__20851 = cljs.core.next.call(null,seq__19676_20844__$1);
var G__20852 = null;
var G__20853 = (0);
var G__20854 = (0);
seq__19676_20834 = G__20851;
chunk__19677_20835 = G__20852;
count__19678_20836 = G__20853;
i__19679_20837 = G__20854;
continue;
}
} else {
}
}
break;
}

return React.DOM.br.apply(null,a__6249__auto__);
};
var br = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20855__i = 0, G__20855__a = new Array(arguments.length -  0);
while (G__20855__i < G__20855__a.length) {G__20855__a[G__20855__i] = arguments[G__20855__i + 0]; ++G__20855__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20855__a,0);
} 
return br__delegate.call(this,args__6248__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__20856){
var args__6248__auto__ = cljs.core.seq(arglist__20856);
return br__delegate(args__6248__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19684_20857 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19685_20858 = null;
var count__19686_20859 = (0);
var i__19687_20860 = (0);
while(true){
if((i__19687_20860 < count__19686_20859)){
var arg__6250__auto___20861 = cljs.core._nth.call(null,chunk__19685_20858,i__19687_20860);
a__6249__auto__.push(arg__6250__auto___20861);

var G__20862 = seq__19684_20857;
var G__20863 = chunk__19685_20858;
var G__20864 = count__19686_20859;
var G__20865 = (i__19687_20860 + (1));
seq__19684_20857 = G__20862;
chunk__19685_20858 = G__20863;
count__19686_20859 = G__20864;
i__19687_20860 = G__20865;
continue;
} else {
var temp__4126__auto___20866 = cljs.core.seq.call(null,seq__19684_20857);
if(temp__4126__auto___20866){
var seq__19684_20867__$1 = temp__4126__auto___20866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19684_20867__$1)){
var c__4541__auto___20868 = cljs.core.chunk_first.call(null,seq__19684_20867__$1);
var G__20869 = cljs.core.chunk_rest.call(null,seq__19684_20867__$1);
var G__20870 = c__4541__auto___20868;
var G__20871 = cljs.core.count.call(null,c__4541__auto___20868);
var G__20872 = (0);
seq__19684_20857 = G__20869;
chunk__19685_20858 = G__20870;
count__19686_20859 = G__20871;
i__19687_20860 = G__20872;
continue;
} else {
var arg__6250__auto___20873 = cljs.core.first.call(null,seq__19684_20867__$1);
a__6249__auto__.push(arg__6250__auto___20873);

var G__20874 = cljs.core.next.call(null,seq__19684_20867__$1);
var G__20875 = null;
var G__20876 = (0);
var G__20877 = (0);
seq__19684_20857 = G__20874;
chunk__19685_20858 = G__20875;
count__19686_20859 = G__20876;
i__19687_20860 = G__20877;
continue;
}
} else {
}
}
break;
}

return React.DOM.button.apply(null,a__6249__auto__);
};
var button = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20878__i = 0, G__20878__a = new Array(arguments.length -  0);
while (G__20878__i < G__20878__a.length) {G__20878__a[G__20878__i] = arguments[G__20878__i + 0]; ++G__20878__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20878__a,0);
} 
return button__delegate.call(this,args__6248__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__20879){
var args__6248__auto__ = cljs.core.seq(arglist__20879);
return button__delegate(args__6248__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19692_20880 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19693_20881 = null;
var count__19694_20882 = (0);
var i__19695_20883 = (0);
while(true){
if((i__19695_20883 < count__19694_20882)){
var arg__6250__auto___20884 = cljs.core._nth.call(null,chunk__19693_20881,i__19695_20883);
a__6249__auto__.push(arg__6250__auto___20884);

var G__20885 = seq__19692_20880;
var G__20886 = chunk__19693_20881;
var G__20887 = count__19694_20882;
var G__20888 = (i__19695_20883 + (1));
seq__19692_20880 = G__20885;
chunk__19693_20881 = G__20886;
count__19694_20882 = G__20887;
i__19695_20883 = G__20888;
continue;
} else {
var temp__4126__auto___20889 = cljs.core.seq.call(null,seq__19692_20880);
if(temp__4126__auto___20889){
var seq__19692_20890__$1 = temp__4126__auto___20889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19692_20890__$1)){
var c__4541__auto___20891 = cljs.core.chunk_first.call(null,seq__19692_20890__$1);
var G__20892 = cljs.core.chunk_rest.call(null,seq__19692_20890__$1);
var G__20893 = c__4541__auto___20891;
var G__20894 = cljs.core.count.call(null,c__4541__auto___20891);
var G__20895 = (0);
seq__19692_20880 = G__20892;
chunk__19693_20881 = G__20893;
count__19694_20882 = G__20894;
i__19695_20883 = G__20895;
continue;
} else {
var arg__6250__auto___20896 = cljs.core.first.call(null,seq__19692_20890__$1);
a__6249__auto__.push(arg__6250__auto___20896);

var G__20897 = cljs.core.next.call(null,seq__19692_20890__$1);
var G__20898 = null;
var G__20899 = (0);
var G__20900 = (0);
seq__19692_20880 = G__20897;
chunk__19693_20881 = G__20898;
count__19694_20882 = G__20899;
i__19695_20883 = G__20900;
continue;
}
} else {
}
}
break;
}

return React.DOM.canvas.apply(null,a__6249__auto__);
};
var canvas = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20901__i = 0, G__20901__a = new Array(arguments.length -  0);
while (G__20901__i < G__20901__a.length) {G__20901__a[G__20901__i] = arguments[G__20901__i + 0]; ++G__20901__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20901__a,0);
} 
return canvas__delegate.call(this,args__6248__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__20902){
var args__6248__auto__ = cljs.core.seq(arglist__20902);
return canvas__delegate(args__6248__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19700_20903 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19701_20904 = null;
var count__19702_20905 = (0);
var i__19703_20906 = (0);
while(true){
if((i__19703_20906 < count__19702_20905)){
var arg__6250__auto___20907 = cljs.core._nth.call(null,chunk__19701_20904,i__19703_20906);
a__6249__auto__.push(arg__6250__auto___20907);

var G__20908 = seq__19700_20903;
var G__20909 = chunk__19701_20904;
var G__20910 = count__19702_20905;
var G__20911 = (i__19703_20906 + (1));
seq__19700_20903 = G__20908;
chunk__19701_20904 = G__20909;
count__19702_20905 = G__20910;
i__19703_20906 = G__20911;
continue;
} else {
var temp__4126__auto___20912 = cljs.core.seq.call(null,seq__19700_20903);
if(temp__4126__auto___20912){
var seq__19700_20913__$1 = temp__4126__auto___20912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19700_20913__$1)){
var c__4541__auto___20914 = cljs.core.chunk_first.call(null,seq__19700_20913__$1);
var G__20915 = cljs.core.chunk_rest.call(null,seq__19700_20913__$1);
var G__20916 = c__4541__auto___20914;
var G__20917 = cljs.core.count.call(null,c__4541__auto___20914);
var G__20918 = (0);
seq__19700_20903 = G__20915;
chunk__19701_20904 = G__20916;
count__19702_20905 = G__20917;
i__19703_20906 = G__20918;
continue;
} else {
var arg__6250__auto___20919 = cljs.core.first.call(null,seq__19700_20913__$1);
a__6249__auto__.push(arg__6250__auto___20919);

var G__20920 = cljs.core.next.call(null,seq__19700_20913__$1);
var G__20921 = null;
var G__20922 = (0);
var G__20923 = (0);
seq__19700_20903 = G__20920;
chunk__19701_20904 = G__20921;
count__19702_20905 = G__20922;
i__19703_20906 = G__20923;
continue;
}
} else {
}
}
break;
}

return React.DOM.caption.apply(null,a__6249__auto__);
};
var caption = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20924__i = 0, G__20924__a = new Array(arguments.length -  0);
while (G__20924__i < G__20924__a.length) {G__20924__a[G__20924__i] = arguments[G__20924__i + 0]; ++G__20924__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20924__a,0);
} 
return caption__delegate.call(this,args__6248__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__20925){
var args__6248__auto__ = cljs.core.seq(arglist__20925);
return caption__delegate(args__6248__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19708_20926 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19709_20927 = null;
var count__19710_20928 = (0);
var i__19711_20929 = (0);
while(true){
if((i__19711_20929 < count__19710_20928)){
var arg__6250__auto___20930 = cljs.core._nth.call(null,chunk__19709_20927,i__19711_20929);
a__6249__auto__.push(arg__6250__auto___20930);

var G__20931 = seq__19708_20926;
var G__20932 = chunk__19709_20927;
var G__20933 = count__19710_20928;
var G__20934 = (i__19711_20929 + (1));
seq__19708_20926 = G__20931;
chunk__19709_20927 = G__20932;
count__19710_20928 = G__20933;
i__19711_20929 = G__20934;
continue;
} else {
var temp__4126__auto___20935 = cljs.core.seq.call(null,seq__19708_20926);
if(temp__4126__auto___20935){
var seq__19708_20936__$1 = temp__4126__auto___20935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19708_20936__$1)){
var c__4541__auto___20937 = cljs.core.chunk_first.call(null,seq__19708_20936__$1);
var G__20938 = cljs.core.chunk_rest.call(null,seq__19708_20936__$1);
var G__20939 = c__4541__auto___20937;
var G__20940 = cljs.core.count.call(null,c__4541__auto___20937);
var G__20941 = (0);
seq__19708_20926 = G__20938;
chunk__19709_20927 = G__20939;
count__19710_20928 = G__20940;
i__19711_20929 = G__20941;
continue;
} else {
var arg__6250__auto___20942 = cljs.core.first.call(null,seq__19708_20936__$1);
a__6249__auto__.push(arg__6250__auto___20942);

var G__20943 = cljs.core.next.call(null,seq__19708_20936__$1);
var G__20944 = null;
var G__20945 = (0);
var G__20946 = (0);
seq__19708_20926 = G__20943;
chunk__19709_20927 = G__20944;
count__19710_20928 = G__20945;
i__19711_20929 = G__20946;
continue;
}
} else {
}
}
break;
}

return React.DOM.cite.apply(null,a__6249__auto__);
};
var cite = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20947__i = 0, G__20947__a = new Array(arguments.length -  0);
while (G__20947__i < G__20947__a.length) {G__20947__a[G__20947__i] = arguments[G__20947__i + 0]; ++G__20947__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20947__a,0);
} 
return cite__delegate.call(this,args__6248__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__20948){
var args__6248__auto__ = cljs.core.seq(arglist__20948);
return cite__delegate(args__6248__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19716_20949 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19717_20950 = null;
var count__19718_20951 = (0);
var i__19719_20952 = (0);
while(true){
if((i__19719_20952 < count__19718_20951)){
var arg__6250__auto___20953 = cljs.core._nth.call(null,chunk__19717_20950,i__19719_20952);
a__6249__auto__.push(arg__6250__auto___20953);

var G__20954 = seq__19716_20949;
var G__20955 = chunk__19717_20950;
var G__20956 = count__19718_20951;
var G__20957 = (i__19719_20952 + (1));
seq__19716_20949 = G__20954;
chunk__19717_20950 = G__20955;
count__19718_20951 = G__20956;
i__19719_20952 = G__20957;
continue;
} else {
var temp__4126__auto___20958 = cljs.core.seq.call(null,seq__19716_20949);
if(temp__4126__auto___20958){
var seq__19716_20959__$1 = temp__4126__auto___20958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19716_20959__$1)){
var c__4541__auto___20960 = cljs.core.chunk_first.call(null,seq__19716_20959__$1);
var G__20961 = cljs.core.chunk_rest.call(null,seq__19716_20959__$1);
var G__20962 = c__4541__auto___20960;
var G__20963 = cljs.core.count.call(null,c__4541__auto___20960);
var G__20964 = (0);
seq__19716_20949 = G__20961;
chunk__19717_20950 = G__20962;
count__19718_20951 = G__20963;
i__19719_20952 = G__20964;
continue;
} else {
var arg__6250__auto___20965 = cljs.core.first.call(null,seq__19716_20959__$1);
a__6249__auto__.push(arg__6250__auto___20965);

var G__20966 = cljs.core.next.call(null,seq__19716_20959__$1);
var G__20967 = null;
var G__20968 = (0);
var G__20969 = (0);
seq__19716_20949 = G__20966;
chunk__19717_20950 = G__20967;
count__19718_20951 = G__20968;
i__19719_20952 = G__20969;
continue;
}
} else {
}
}
break;
}

return React.DOM.code.apply(null,a__6249__auto__);
};
var code = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20970__i = 0, G__20970__a = new Array(arguments.length -  0);
while (G__20970__i < G__20970__a.length) {G__20970__a[G__20970__i] = arguments[G__20970__i + 0]; ++G__20970__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20970__a,0);
} 
return code__delegate.call(this,args__6248__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__20971){
var args__6248__auto__ = cljs.core.seq(arglist__20971);
return code__delegate(args__6248__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19724_20972 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19725_20973 = null;
var count__19726_20974 = (0);
var i__19727_20975 = (0);
while(true){
if((i__19727_20975 < count__19726_20974)){
var arg__6250__auto___20976 = cljs.core._nth.call(null,chunk__19725_20973,i__19727_20975);
a__6249__auto__.push(arg__6250__auto___20976);

var G__20977 = seq__19724_20972;
var G__20978 = chunk__19725_20973;
var G__20979 = count__19726_20974;
var G__20980 = (i__19727_20975 + (1));
seq__19724_20972 = G__20977;
chunk__19725_20973 = G__20978;
count__19726_20974 = G__20979;
i__19727_20975 = G__20980;
continue;
} else {
var temp__4126__auto___20981 = cljs.core.seq.call(null,seq__19724_20972);
if(temp__4126__auto___20981){
var seq__19724_20982__$1 = temp__4126__auto___20981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19724_20982__$1)){
var c__4541__auto___20983 = cljs.core.chunk_first.call(null,seq__19724_20982__$1);
var G__20984 = cljs.core.chunk_rest.call(null,seq__19724_20982__$1);
var G__20985 = c__4541__auto___20983;
var G__20986 = cljs.core.count.call(null,c__4541__auto___20983);
var G__20987 = (0);
seq__19724_20972 = G__20984;
chunk__19725_20973 = G__20985;
count__19726_20974 = G__20986;
i__19727_20975 = G__20987;
continue;
} else {
var arg__6250__auto___20988 = cljs.core.first.call(null,seq__19724_20982__$1);
a__6249__auto__.push(arg__6250__auto___20988);

var G__20989 = cljs.core.next.call(null,seq__19724_20982__$1);
var G__20990 = null;
var G__20991 = (0);
var G__20992 = (0);
seq__19724_20972 = G__20989;
chunk__19725_20973 = G__20990;
count__19726_20974 = G__20991;
i__19727_20975 = G__20992;
continue;
}
} else {
}
}
break;
}

return React.DOM.col.apply(null,a__6249__auto__);
};
var col = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__20993__i = 0, G__20993__a = new Array(arguments.length -  0);
while (G__20993__i < G__20993__a.length) {G__20993__a[G__20993__i] = arguments[G__20993__i + 0]; ++G__20993__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__20993__a,0);
} 
return col__delegate.call(this,args__6248__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__20994){
var args__6248__auto__ = cljs.core.seq(arglist__20994);
return col__delegate(args__6248__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19732_20995 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19733_20996 = null;
var count__19734_20997 = (0);
var i__19735_20998 = (0);
while(true){
if((i__19735_20998 < count__19734_20997)){
var arg__6250__auto___20999 = cljs.core._nth.call(null,chunk__19733_20996,i__19735_20998);
a__6249__auto__.push(arg__6250__auto___20999);

var G__21000 = seq__19732_20995;
var G__21001 = chunk__19733_20996;
var G__21002 = count__19734_20997;
var G__21003 = (i__19735_20998 + (1));
seq__19732_20995 = G__21000;
chunk__19733_20996 = G__21001;
count__19734_20997 = G__21002;
i__19735_20998 = G__21003;
continue;
} else {
var temp__4126__auto___21004 = cljs.core.seq.call(null,seq__19732_20995);
if(temp__4126__auto___21004){
var seq__19732_21005__$1 = temp__4126__auto___21004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19732_21005__$1)){
var c__4541__auto___21006 = cljs.core.chunk_first.call(null,seq__19732_21005__$1);
var G__21007 = cljs.core.chunk_rest.call(null,seq__19732_21005__$1);
var G__21008 = c__4541__auto___21006;
var G__21009 = cljs.core.count.call(null,c__4541__auto___21006);
var G__21010 = (0);
seq__19732_20995 = G__21007;
chunk__19733_20996 = G__21008;
count__19734_20997 = G__21009;
i__19735_20998 = G__21010;
continue;
} else {
var arg__6250__auto___21011 = cljs.core.first.call(null,seq__19732_21005__$1);
a__6249__auto__.push(arg__6250__auto___21011);

var G__21012 = cljs.core.next.call(null,seq__19732_21005__$1);
var G__21013 = null;
var G__21014 = (0);
var G__21015 = (0);
seq__19732_20995 = G__21012;
chunk__19733_20996 = G__21013;
count__19734_20997 = G__21014;
i__19735_20998 = G__21015;
continue;
}
} else {
}
}
break;
}

return React.DOM.colgroup.apply(null,a__6249__auto__);
};
var colgroup = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21016__i = 0, G__21016__a = new Array(arguments.length -  0);
while (G__21016__i < G__21016__a.length) {G__21016__a[G__21016__i] = arguments[G__21016__i + 0]; ++G__21016__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21016__a,0);
} 
return colgroup__delegate.call(this,args__6248__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__21017){
var args__6248__auto__ = cljs.core.seq(arglist__21017);
return colgroup__delegate(args__6248__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19740_21018 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19741_21019 = null;
var count__19742_21020 = (0);
var i__19743_21021 = (0);
while(true){
if((i__19743_21021 < count__19742_21020)){
var arg__6250__auto___21022 = cljs.core._nth.call(null,chunk__19741_21019,i__19743_21021);
a__6249__auto__.push(arg__6250__auto___21022);

var G__21023 = seq__19740_21018;
var G__21024 = chunk__19741_21019;
var G__21025 = count__19742_21020;
var G__21026 = (i__19743_21021 + (1));
seq__19740_21018 = G__21023;
chunk__19741_21019 = G__21024;
count__19742_21020 = G__21025;
i__19743_21021 = G__21026;
continue;
} else {
var temp__4126__auto___21027 = cljs.core.seq.call(null,seq__19740_21018);
if(temp__4126__auto___21027){
var seq__19740_21028__$1 = temp__4126__auto___21027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19740_21028__$1)){
var c__4541__auto___21029 = cljs.core.chunk_first.call(null,seq__19740_21028__$1);
var G__21030 = cljs.core.chunk_rest.call(null,seq__19740_21028__$1);
var G__21031 = c__4541__auto___21029;
var G__21032 = cljs.core.count.call(null,c__4541__auto___21029);
var G__21033 = (0);
seq__19740_21018 = G__21030;
chunk__19741_21019 = G__21031;
count__19742_21020 = G__21032;
i__19743_21021 = G__21033;
continue;
} else {
var arg__6250__auto___21034 = cljs.core.first.call(null,seq__19740_21028__$1);
a__6249__auto__.push(arg__6250__auto___21034);

var G__21035 = cljs.core.next.call(null,seq__19740_21028__$1);
var G__21036 = null;
var G__21037 = (0);
var G__21038 = (0);
seq__19740_21018 = G__21035;
chunk__19741_21019 = G__21036;
count__19742_21020 = G__21037;
i__19743_21021 = G__21038;
continue;
}
} else {
}
}
break;
}

return React.DOM.data.apply(null,a__6249__auto__);
};
var data = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21039__i = 0, G__21039__a = new Array(arguments.length -  0);
while (G__21039__i < G__21039__a.length) {G__21039__a[G__21039__i] = arguments[G__21039__i + 0]; ++G__21039__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21039__a,0);
} 
return data__delegate.call(this,args__6248__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__21040){
var args__6248__auto__ = cljs.core.seq(arglist__21040);
return data__delegate(args__6248__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19748_21041 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19749_21042 = null;
var count__19750_21043 = (0);
var i__19751_21044 = (0);
while(true){
if((i__19751_21044 < count__19750_21043)){
var arg__6250__auto___21045 = cljs.core._nth.call(null,chunk__19749_21042,i__19751_21044);
a__6249__auto__.push(arg__6250__auto___21045);

var G__21046 = seq__19748_21041;
var G__21047 = chunk__19749_21042;
var G__21048 = count__19750_21043;
var G__21049 = (i__19751_21044 + (1));
seq__19748_21041 = G__21046;
chunk__19749_21042 = G__21047;
count__19750_21043 = G__21048;
i__19751_21044 = G__21049;
continue;
} else {
var temp__4126__auto___21050 = cljs.core.seq.call(null,seq__19748_21041);
if(temp__4126__auto___21050){
var seq__19748_21051__$1 = temp__4126__auto___21050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19748_21051__$1)){
var c__4541__auto___21052 = cljs.core.chunk_first.call(null,seq__19748_21051__$1);
var G__21053 = cljs.core.chunk_rest.call(null,seq__19748_21051__$1);
var G__21054 = c__4541__auto___21052;
var G__21055 = cljs.core.count.call(null,c__4541__auto___21052);
var G__21056 = (0);
seq__19748_21041 = G__21053;
chunk__19749_21042 = G__21054;
count__19750_21043 = G__21055;
i__19751_21044 = G__21056;
continue;
} else {
var arg__6250__auto___21057 = cljs.core.first.call(null,seq__19748_21051__$1);
a__6249__auto__.push(arg__6250__auto___21057);

var G__21058 = cljs.core.next.call(null,seq__19748_21051__$1);
var G__21059 = null;
var G__21060 = (0);
var G__21061 = (0);
seq__19748_21041 = G__21058;
chunk__19749_21042 = G__21059;
count__19750_21043 = G__21060;
i__19751_21044 = G__21061;
continue;
}
} else {
}
}
break;
}

return React.DOM.datalist.apply(null,a__6249__auto__);
};
var datalist = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21062__i = 0, G__21062__a = new Array(arguments.length -  0);
while (G__21062__i < G__21062__a.length) {G__21062__a[G__21062__i] = arguments[G__21062__i + 0]; ++G__21062__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21062__a,0);
} 
return datalist__delegate.call(this,args__6248__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__21063){
var args__6248__auto__ = cljs.core.seq(arglist__21063);
return datalist__delegate(args__6248__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19756_21064 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19757_21065 = null;
var count__19758_21066 = (0);
var i__19759_21067 = (0);
while(true){
if((i__19759_21067 < count__19758_21066)){
var arg__6250__auto___21068 = cljs.core._nth.call(null,chunk__19757_21065,i__19759_21067);
a__6249__auto__.push(arg__6250__auto___21068);

var G__21069 = seq__19756_21064;
var G__21070 = chunk__19757_21065;
var G__21071 = count__19758_21066;
var G__21072 = (i__19759_21067 + (1));
seq__19756_21064 = G__21069;
chunk__19757_21065 = G__21070;
count__19758_21066 = G__21071;
i__19759_21067 = G__21072;
continue;
} else {
var temp__4126__auto___21073 = cljs.core.seq.call(null,seq__19756_21064);
if(temp__4126__auto___21073){
var seq__19756_21074__$1 = temp__4126__auto___21073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19756_21074__$1)){
var c__4541__auto___21075 = cljs.core.chunk_first.call(null,seq__19756_21074__$1);
var G__21076 = cljs.core.chunk_rest.call(null,seq__19756_21074__$1);
var G__21077 = c__4541__auto___21075;
var G__21078 = cljs.core.count.call(null,c__4541__auto___21075);
var G__21079 = (0);
seq__19756_21064 = G__21076;
chunk__19757_21065 = G__21077;
count__19758_21066 = G__21078;
i__19759_21067 = G__21079;
continue;
} else {
var arg__6250__auto___21080 = cljs.core.first.call(null,seq__19756_21074__$1);
a__6249__auto__.push(arg__6250__auto___21080);

var G__21081 = cljs.core.next.call(null,seq__19756_21074__$1);
var G__21082 = null;
var G__21083 = (0);
var G__21084 = (0);
seq__19756_21064 = G__21081;
chunk__19757_21065 = G__21082;
count__19758_21066 = G__21083;
i__19759_21067 = G__21084;
continue;
}
} else {
}
}
break;
}

return React.DOM.dd.apply(null,a__6249__auto__);
};
var dd = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21085__i = 0, G__21085__a = new Array(arguments.length -  0);
while (G__21085__i < G__21085__a.length) {G__21085__a[G__21085__i] = arguments[G__21085__i + 0]; ++G__21085__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21085__a,0);
} 
return dd__delegate.call(this,args__6248__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__21086){
var args__6248__auto__ = cljs.core.seq(arglist__21086);
return dd__delegate(args__6248__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19764_21087 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19765_21088 = null;
var count__19766_21089 = (0);
var i__19767_21090 = (0);
while(true){
if((i__19767_21090 < count__19766_21089)){
var arg__6250__auto___21091 = cljs.core._nth.call(null,chunk__19765_21088,i__19767_21090);
a__6249__auto__.push(arg__6250__auto___21091);

var G__21092 = seq__19764_21087;
var G__21093 = chunk__19765_21088;
var G__21094 = count__19766_21089;
var G__21095 = (i__19767_21090 + (1));
seq__19764_21087 = G__21092;
chunk__19765_21088 = G__21093;
count__19766_21089 = G__21094;
i__19767_21090 = G__21095;
continue;
} else {
var temp__4126__auto___21096 = cljs.core.seq.call(null,seq__19764_21087);
if(temp__4126__auto___21096){
var seq__19764_21097__$1 = temp__4126__auto___21096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19764_21097__$1)){
var c__4541__auto___21098 = cljs.core.chunk_first.call(null,seq__19764_21097__$1);
var G__21099 = cljs.core.chunk_rest.call(null,seq__19764_21097__$1);
var G__21100 = c__4541__auto___21098;
var G__21101 = cljs.core.count.call(null,c__4541__auto___21098);
var G__21102 = (0);
seq__19764_21087 = G__21099;
chunk__19765_21088 = G__21100;
count__19766_21089 = G__21101;
i__19767_21090 = G__21102;
continue;
} else {
var arg__6250__auto___21103 = cljs.core.first.call(null,seq__19764_21097__$1);
a__6249__auto__.push(arg__6250__auto___21103);

var G__21104 = cljs.core.next.call(null,seq__19764_21097__$1);
var G__21105 = null;
var G__21106 = (0);
var G__21107 = (0);
seq__19764_21087 = G__21104;
chunk__19765_21088 = G__21105;
count__19766_21089 = G__21106;
i__19767_21090 = G__21107;
continue;
}
} else {
}
}
break;
}

return React.DOM.del.apply(null,a__6249__auto__);
};
var del = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21108__i = 0, G__21108__a = new Array(arguments.length -  0);
while (G__21108__i < G__21108__a.length) {G__21108__a[G__21108__i] = arguments[G__21108__i + 0]; ++G__21108__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21108__a,0);
} 
return del__delegate.call(this,args__6248__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__21109){
var args__6248__auto__ = cljs.core.seq(arglist__21109);
return del__delegate(args__6248__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19772_21110 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19773_21111 = null;
var count__19774_21112 = (0);
var i__19775_21113 = (0);
while(true){
if((i__19775_21113 < count__19774_21112)){
var arg__6250__auto___21114 = cljs.core._nth.call(null,chunk__19773_21111,i__19775_21113);
a__6249__auto__.push(arg__6250__auto___21114);

var G__21115 = seq__19772_21110;
var G__21116 = chunk__19773_21111;
var G__21117 = count__19774_21112;
var G__21118 = (i__19775_21113 + (1));
seq__19772_21110 = G__21115;
chunk__19773_21111 = G__21116;
count__19774_21112 = G__21117;
i__19775_21113 = G__21118;
continue;
} else {
var temp__4126__auto___21119 = cljs.core.seq.call(null,seq__19772_21110);
if(temp__4126__auto___21119){
var seq__19772_21120__$1 = temp__4126__auto___21119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19772_21120__$1)){
var c__4541__auto___21121 = cljs.core.chunk_first.call(null,seq__19772_21120__$1);
var G__21122 = cljs.core.chunk_rest.call(null,seq__19772_21120__$1);
var G__21123 = c__4541__auto___21121;
var G__21124 = cljs.core.count.call(null,c__4541__auto___21121);
var G__21125 = (0);
seq__19772_21110 = G__21122;
chunk__19773_21111 = G__21123;
count__19774_21112 = G__21124;
i__19775_21113 = G__21125;
continue;
} else {
var arg__6250__auto___21126 = cljs.core.first.call(null,seq__19772_21120__$1);
a__6249__auto__.push(arg__6250__auto___21126);

var G__21127 = cljs.core.next.call(null,seq__19772_21120__$1);
var G__21128 = null;
var G__21129 = (0);
var G__21130 = (0);
seq__19772_21110 = G__21127;
chunk__19773_21111 = G__21128;
count__19774_21112 = G__21129;
i__19775_21113 = G__21130;
continue;
}
} else {
}
}
break;
}

return React.DOM.details.apply(null,a__6249__auto__);
};
var details = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21131__i = 0, G__21131__a = new Array(arguments.length -  0);
while (G__21131__i < G__21131__a.length) {G__21131__a[G__21131__i] = arguments[G__21131__i + 0]; ++G__21131__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21131__a,0);
} 
return details__delegate.call(this,args__6248__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__21132){
var args__6248__auto__ = cljs.core.seq(arglist__21132);
return details__delegate(args__6248__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19780_21133 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19781_21134 = null;
var count__19782_21135 = (0);
var i__19783_21136 = (0);
while(true){
if((i__19783_21136 < count__19782_21135)){
var arg__6250__auto___21137 = cljs.core._nth.call(null,chunk__19781_21134,i__19783_21136);
a__6249__auto__.push(arg__6250__auto___21137);

var G__21138 = seq__19780_21133;
var G__21139 = chunk__19781_21134;
var G__21140 = count__19782_21135;
var G__21141 = (i__19783_21136 + (1));
seq__19780_21133 = G__21138;
chunk__19781_21134 = G__21139;
count__19782_21135 = G__21140;
i__19783_21136 = G__21141;
continue;
} else {
var temp__4126__auto___21142 = cljs.core.seq.call(null,seq__19780_21133);
if(temp__4126__auto___21142){
var seq__19780_21143__$1 = temp__4126__auto___21142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19780_21143__$1)){
var c__4541__auto___21144 = cljs.core.chunk_first.call(null,seq__19780_21143__$1);
var G__21145 = cljs.core.chunk_rest.call(null,seq__19780_21143__$1);
var G__21146 = c__4541__auto___21144;
var G__21147 = cljs.core.count.call(null,c__4541__auto___21144);
var G__21148 = (0);
seq__19780_21133 = G__21145;
chunk__19781_21134 = G__21146;
count__19782_21135 = G__21147;
i__19783_21136 = G__21148;
continue;
} else {
var arg__6250__auto___21149 = cljs.core.first.call(null,seq__19780_21143__$1);
a__6249__auto__.push(arg__6250__auto___21149);

var G__21150 = cljs.core.next.call(null,seq__19780_21143__$1);
var G__21151 = null;
var G__21152 = (0);
var G__21153 = (0);
seq__19780_21133 = G__21150;
chunk__19781_21134 = G__21151;
count__19782_21135 = G__21152;
i__19783_21136 = G__21153;
continue;
}
} else {
}
}
break;
}

return React.DOM.dfn.apply(null,a__6249__auto__);
};
var dfn = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21154__i = 0, G__21154__a = new Array(arguments.length -  0);
while (G__21154__i < G__21154__a.length) {G__21154__a[G__21154__i] = arguments[G__21154__i + 0]; ++G__21154__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21154__a,0);
} 
return dfn__delegate.call(this,args__6248__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__21155){
var args__6248__auto__ = cljs.core.seq(arglist__21155);
return dfn__delegate(args__6248__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19788_21156 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19789_21157 = null;
var count__19790_21158 = (0);
var i__19791_21159 = (0);
while(true){
if((i__19791_21159 < count__19790_21158)){
var arg__6250__auto___21160 = cljs.core._nth.call(null,chunk__19789_21157,i__19791_21159);
a__6249__auto__.push(arg__6250__auto___21160);

var G__21161 = seq__19788_21156;
var G__21162 = chunk__19789_21157;
var G__21163 = count__19790_21158;
var G__21164 = (i__19791_21159 + (1));
seq__19788_21156 = G__21161;
chunk__19789_21157 = G__21162;
count__19790_21158 = G__21163;
i__19791_21159 = G__21164;
continue;
} else {
var temp__4126__auto___21165 = cljs.core.seq.call(null,seq__19788_21156);
if(temp__4126__auto___21165){
var seq__19788_21166__$1 = temp__4126__auto___21165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19788_21166__$1)){
var c__4541__auto___21167 = cljs.core.chunk_first.call(null,seq__19788_21166__$1);
var G__21168 = cljs.core.chunk_rest.call(null,seq__19788_21166__$1);
var G__21169 = c__4541__auto___21167;
var G__21170 = cljs.core.count.call(null,c__4541__auto___21167);
var G__21171 = (0);
seq__19788_21156 = G__21168;
chunk__19789_21157 = G__21169;
count__19790_21158 = G__21170;
i__19791_21159 = G__21171;
continue;
} else {
var arg__6250__auto___21172 = cljs.core.first.call(null,seq__19788_21166__$1);
a__6249__auto__.push(arg__6250__auto___21172);

var G__21173 = cljs.core.next.call(null,seq__19788_21166__$1);
var G__21174 = null;
var G__21175 = (0);
var G__21176 = (0);
seq__19788_21156 = G__21173;
chunk__19789_21157 = G__21174;
count__19790_21158 = G__21175;
i__19791_21159 = G__21176;
continue;
}
} else {
}
}
break;
}

return React.DOM.div.apply(null,a__6249__auto__);
};
var div = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21177__i = 0, G__21177__a = new Array(arguments.length -  0);
while (G__21177__i < G__21177__a.length) {G__21177__a[G__21177__i] = arguments[G__21177__i + 0]; ++G__21177__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21177__a,0);
} 
return div__delegate.call(this,args__6248__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__21178){
var args__6248__auto__ = cljs.core.seq(arglist__21178);
return div__delegate(args__6248__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19796_21179 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19797_21180 = null;
var count__19798_21181 = (0);
var i__19799_21182 = (0);
while(true){
if((i__19799_21182 < count__19798_21181)){
var arg__6250__auto___21183 = cljs.core._nth.call(null,chunk__19797_21180,i__19799_21182);
a__6249__auto__.push(arg__6250__auto___21183);

var G__21184 = seq__19796_21179;
var G__21185 = chunk__19797_21180;
var G__21186 = count__19798_21181;
var G__21187 = (i__19799_21182 + (1));
seq__19796_21179 = G__21184;
chunk__19797_21180 = G__21185;
count__19798_21181 = G__21186;
i__19799_21182 = G__21187;
continue;
} else {
var temp__4126__auto___21188 = cljs.core.seq.call(null,seq__19796_21179);
if(temp__4126__auto___21188){
var seq__19796_21189__$1 = temp__4126__auto___21188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19796_21189__$1)){
var c__4541__auto___21190 = cljs.core.chunk_first.call(null,seq__19796_21189__$1);
var G__21191 = cljs.core.chunk_rest.call(null,seq__19796_21189__$1);
var G__21192 = c__4541__auto___21190;
var G__21193 = cljs.core.count.call(null,c__4541__auto___21190);
var G__21194 = (0);
seq__19796_21179 = G__21191;
chunk__19797_21180 = G__21192;
count__19798_21181 = G__21193;
i__19799_21182 = G__21194;
continue;
} else {
var arg__6250__auto___21195 = cljs.core.first.call(null,seq__19796_21189__$1);
a__6249__auto__.push(arg__6250__auto___21195);

var G__21196 = cljs.core.next.call(null,seq__19796_21189__$1);
var G__21197 = null;
var G__21198 = (0);
var G__21199 = (0);
seq__19796_21179 = G__21196;
chunk__19797_21180 = G__21197;
count__19798_21181 = G__21198;
i__19799_21182 = G__21199;
continue;
}
} else {
}
}
break;
}

return React.DOM.dl.apply(null,a__6249__auto__);
};
var dl = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21200__i = 0, G__21200__a = new Array(arguments.length -  0);
while (G__21200__i < G__21200__a.length) {G__21200__a[G__21200__i] = arguments[G__21200__i + 0]; ++G__21200__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21200__a,0);
} 
return dl__delegate.call(this,args__6248__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__21201){
var args__6248__auto__ = cljs.core.seq(arglist__21201);
return dl__delegate(args__6248__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19804_21202 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19805_21203 = null;
var count__19806_21204 = (0);
var i__19807_21205 = (0);
while(true){
if((i__19807_21205 < count__19806_21204)){
var arg__6250__auto___21206 = cljs.core._nth.call(null,chunk__19805_21203,i__19807_21205);
a__6249__auto__.push(arg__6250__auto___21206);

var G__21207 = seq__19804_21202;
var G__21208 = chunk__19805_21203;
var G__21209 = count__19806_21204;
var G__21210 = (i__19807_21205 + (1));
seq__19804_21202 = G__21207;
chunk__19805_21203 = G__21208;
count__19806_21204 = G__21209;
i__19807_21205 = G__21210;
continue;
} else {
var temp__4126__auto___21211 = cljs.core.seq.call(null,seq__19804_21202);
if(temp__4126__auto___21211){
var seq__19804_21212__$1 = temp__4126__auto___21211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19804_21212__$1)){
var c__4541__auto___21213 = cljs.core.chunk_first.call(null,seq__19804_21212__$1);
var G__21214 = cljs.core.chunk_rest.call(null,seq__19804_21212__$1);
var G__21215 = c__4541__auto___21213;
var G__21216 = cljs.core.count.call(null,c__4541__auto___21213);
var G__21217 = (0);
seq__19804_21202 = G__21214;
chunk__19805_21203 = G__21215;
count__19806_21204 = G__21216;
i__19807_21205 = G__21217;
continue;
} else {
var arg__6250__auto___21218 = cljs.core.first.call(null,seq__19804_21212__$1);
a__6249__auto__.push(arg__6250__auto___21218);

var G__21219 = cljs.core.next.call(null,seq__19804_21212__$1);
var G__21220 = null;
var G__21221 = (0);
var G__21222 = (0);
seq__19804_21202 = G__21219;
chunk__19805_21203 = G__21220;
count__19806_21204 = G__21221;
i__19807_21205 = G__21222;
continue;
}
} else {
}
}
break;
}

return React.DOM.dt.apply(null,a__6249__auto__);
};
var dt = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21223__i = 0, G__21223__a = new Array(arguments.length -  0);
while (G__21223__i < G__21223__a.length) {G__21223__a[G__21223__i] = arguments[G__21223__i + 0]; ++G__21223__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21223__a,0);
} 
return dt__delegate.call(this,args__6248__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__21224){
var args__6248__auto__ = cljs.core.seq(arglist__21224);
return dt__delegate(args__6248__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19812_21225 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19813_21226 = null;
var count__19814_21227 = (0);
var i__19815_21228 = (0);
while(true){
if((i__19815_21228 < count__19814_21227)){
var arg__6250__auto___21229 = cljs.core._nth.call(null,chunk__19813_21226,i__19815_21228);
a__6249__auto__.push(arg__6250__auto___21229);

var G__21230 = seq__19812_21225;
var G__21231 = chunk__19813_21226;
var G__21232 = count__19814_21227;
var G__21233 = (i__19815_21228 + (1));
seq__19812_21225 = G__21230;
chunk__19813_21226 = G__21231;
count__19814_21227 = G__21232;
i__19815_21228 = G__21233;
continue;
} else {
var temp__4126__auto___21234 = cljs.core.seq.call(null,seq__19812_21225);
if(temp__4126__auto___21234){
var seq__19812_21235__$1 = temp__4126__auto___21234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19812_21235__$1)){
var c__4541__auto___21236 = cljs.core.chunk_first.call(null,seq__19812_21235__$1);
var G__21237 = cljs.core.chunk_rest.call(null,seq__19812_21235__$1);
var G__21238 = c__4541__auto___21236;
var G__21239 = cljs.core.count.call(null,c__4541__auto___21236);
var G__21240 = (0);
seq__19812_21225 = G__21237;
chunk__19813_21226 = G__21238;
count__19814_21227 = G__21239;
i__19815_21228 = G__21240;
continue;
} else {
var arg__6250__auto___21241 = cljs.core.first.call(null,seq__19812_21235__$1);
a__6249__auto__.push(arg__6250__auto___21241);

var G__21242 = cljs.core.next.call(null,seq__19812_21235__$1);
var G__21243 = null;
var G__21244 = (0);
var G__21245 = (0);
seq__19812_21225 = G__21242;
chunk__19813_21226 = G__21243;
count__19814_21227 = G__21244;
i__19815_21228 = G__21245;
continue;
}
} else {
}
}
break;
}

return React.DOM.em.apply(null,a__6249__auto__);
};
var em = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21246__i = 0, G__21246__a = new Array(arguments.length -  0);
while (G__21246__i < G__21246__a.length) {G__21246__a[G__21246__i] = arguments[G__21246__i + 0]; ++G__21246__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21246__a,0);
} 
return em__delegate.call(this,args__6248__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__21247){
var args__6248__auto__ = cljs.core.seq(arglist__21247);
return em__delegate(args__6248__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19828_21248 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19829_21249 = null;
var count__19830_21250 = (0);
var i__19831_21251 = (0);
while(true){
if((i__19831_21251 < count__19830_21250)){
var arg__6250__auto___21252 = cljs.core._nth.call(null,chunk__19829_21249,i__19831_21251);
a__6249__auto__.push(arg__6250__auto___21252);

var G__21253 = seq__19828_21248;
var G__21254 = chunk__19829_21249;
var G__21255 = count__19830_21250;
var G__21256 = (i__19831_21251 + (1));
seq__19828_21248 = G__21253;
chunk__19829_21249 = G__21254;
count__19830_21250 = G__21255;
i__19831_21251 = G__21256;
continue;
} else {
var temp__4126__auto___21257 = cljs.core.seq.call(null,seq__19828_21248);
if(temp__4126__auto___21257){
var seq__19828_21258__$1 = temp__4126__auto___21257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19828_21258__$1)){
var c__4541__auto___21259 = cljs.core.chunk_first.call(null,seq__19828_21258__$1);
var G__21260 = cljs.core.chunk_rest.call(null,seq__19828_21258__$1);
var G__21261 = c__4541__auto___21259;
var G__21262 = cljs.core.count.call(null,c__4541__auto___21259);
var G__21263 = (0);
seq__19828_21248 = G__21260;
chunk__19829_21249 = G__21261;
count__19830_21250 = G__21262;
i__19831_21251 = G__21263;
continue;
} else {
var arg__6250__auto___21264 = cljs.core.first.call(null,seq__19828_21258__$1);
a__6249__auto__.push(arg__6250__auto___21264);

var G__21265 = cljs.core.next.call(null,seq__19828_21258__$1);
var G__21266 = null;
var G__21267 = (0);
var G__21268 = (0);
seq__19828_21248 = G__21265;
chunk__19829_21249 = G__21266;
count__19830_21250 = G__21267;
i__19831_21251 = G__21268;
continue;
}
} else {
}
}
break;
}

return React.DOM.embed.apply(null,a__6249__auto__);
};
var embed = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21269__i = 0, G__21269__a = new Array(arguments.length -  0);
while (G__21269__i < G__21269__a.length) {G__21269__a[G__21269__i] = arguments[G__21269__i + 0]; ++G__21269__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21269__a,0);
} 
return embed__delegate.call(this,args__6248__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__21270){
var args__6248__auto__ = cljs.core.seq(arglist__21270);
return embed__delegate(args__6248__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19836_21271 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19837_21272 = null;
var count__19838_21273 = (0);
var i__19839_21274 = (0);
while(true){
if((i__19839_21274 < count__19838_21273)){
var arg__6250__auto___21275 = cljs.core._nth.call(null,chunk__19837_21272,i__19839_21274);
a__6249__auto__.push(arg__6250__auto___21275);

var G__21276 = seq__19836_21271;
var G__21277 = chunk__19837_21272;
var G__21278 = count__19838_21273;
var G__21279 = (i__19839_21274 + (1));
seq__19836_21271 = G__21276;
chunk__19837_21272 = G__21277;
count__19838_21273 = G__21278;
i__19839_21274 = G__21279;
continue;
} else {
var temp__4126__auto___21280 = cljs.core.seq.call(null,seq__19836_21271);
if(temp__4126__auto___21280){
var seq__19836_21281__$1 = temp__4126__auto___21280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19836_21281__$1)){
var c__4541__auto___21282 = cljs.core.chunk_first.call(null,seq__19836_21281__$1);
var G__21283 = cljs.core.chunk_rest.call(null,seq__19836_21281__$1);
var G__21284 = c__4541__auto___21282;
var G__21285 = cljs.core.count.call(null,c__4541__auto___21282);
var G__21286 = (0);
seq__19836_21271 = G__21283;
chunk__19837_21272 = G__21284;
count__19838_21273 = G__21285;
i__19839_21274 = G__21286;
continue;
} else {
var arg__6250__auto___21287 = cljs.core.first.call(null,seq__19836_21281__$1);
a__6249__auto__.push(arg__6250__auto___21287);

var G__21288 = cljs.core.next.call(null,seq__19836_21281__$1);
var G__21289 = null;
var G__21290 = (0);
var G__21291 = (0);
seq__19836_21271 = G__21288;
chunk__19837_21272 = G__21289;
count__19838_21273 = G__21290;
i__19839_21274 = G__21291;
continue;
}
} else {
}
}
break;
}

return React.DOM.fieldset.apply(null,a__6249__auto__);
};
var fieldset = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21292__i = 0, G__21292__a = new Array(arguments.length -  0);
while (G__21292__i < G__21292__a.length) {G__21292__a[G__21292__i] = arguments[G__21292__i + 0]; ++G__21292__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21292__a,0);
} 
return fieldset__delegate.call(this,args__6248__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__21293){
var args__6248__auto__ = cljs.core.seq(arglist__21293);
return fieldset__delegate(args__6248__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19844_21294 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19845_21295 = null;
var count__19846_21296 = (0);
var i__19847_21297 = (0);
while(true){
if((i__19847_21297 < count__19846_21296)){
var arg__6250__auto___21298 = cljs.core._nth.call(null,chunk__19845_21295,i__19847_21297);
a__6249__auto__.push(arg__6250__auto___21298);

var G__21299 = seq__19844_21294;
var G__21300 = chunk__19845_21295;
var G__21301 = count__19846_21296;
var G__21302 = (i__19847_21297 + (1));
seq__19844_21294 = G__21299;
chunk__19845_21295 = G__21300;
count__19846_21296 = G__21301;
i__19847_21297 = G__21302;
continue;
} else {
var temp__4126__auto___21303 = cljs.core.seq.call(null,seq__19844_21294);
if(temp__4126__auto___21303){
var seq__19844_21304__$1 = temp__4126__auto___21303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19844_21304__$1)){
var c__4541__auto___21305 = cljs.core.chunk_first.call(null,seq__19844_21304__$1);
var G__21306 = cljs.core.chunk_rest.call(null,seq__19844_21304__$1);
var G__21307 = c__4541__auto___21305;
var G__21308 = cljs.core.count.call(null,c__4541__auto___21305);
var G__21309 = (0);
seq__19844_21294 = G__21306;
chunk__19845_21295 = G__21307;
count__19846_21296 = G__21308;
i__19847_21297 = G__21309;
continue;
} else {
var arg__6250__auto___21310 = cljs.core.first.call(null,seq__19844_21304__$1);
a__6249__auto__.push(arg__6250__auto___21310);

var G__21311 = cljs.core.next.call(null,seq__19844_21304__$1);
var G__21312 = null;
var G__21313 = (0);
var G__21314 = (0);
seq__19844_21294 = G__21311;
chunk__19845_21295 = G__21312;
count__19846_21296 = G__21313;
i__19847_21297 = G__21314;
continue;
}
} else {
}
}
break;
}

return React.DOM.figcaption.apply(null,a__6249__auto__);
};
var figcaption = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21315__i = 0, G__21315__a = new Array(arguments.length -  0);
while (G__21315__i < G__21315__a.length) {G__21315__a[G__21315__i] = arguments[G__21315__i + 0]; ++G__21315__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21315__a,0);
} 
return figcaption__delegate.call(this,args__6248__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__21316){
var args__6248__auto__ = cljs.core.seq(arglist__21316);
return figcaption__delegate(args__6248__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19852_21317 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19853_21318 = null;
var count__19854_21319 = (0);
var i__19855_21320 = (0);
while(true){
if((i__19855_21320 < count__19854_21319)){
var arg__6250__auto___21321 = cljs.core._nth.call(null,chunk__19853_21318,i__19855_21320);
a__6249__auto__.push(arg__6250__auto___21321);

var G__21322 = seq__19852_21317;
var G__21323 = chunk__19853_21318;
var G__21324 = count__19854_21319;
var G__21325 = (i__19855_21320 + (1));
seq__19852_21317 = G__21322;
chunk__19853_21318 = G__21323;
count__19854_21319 = G__21324;
i__19855_21320 = G__21325;
continue;
} else {
var temp__4126__auto___21326 = cljs.core.seq.call(null,seq__19852_21317);
if(temp__4126__auto___21326){
var seq__19852_21327__$1 = temp__4126__auto___21326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19852_21327__$1)){
var c__4541__auto___21328 = cljs.core.chunk_first.call(null,seq__19852_21327__$1);
var G__21329 = cljs.core.chunk_rest.call(null,seq__19852_21327__$1);
var G__21330 = c__4541__auto___21328;
var G__21331 = cljs.core.count.call(null,c__4541__auto___21328);
var G__21332 = (0);
seq__19852_21317 = G__21329;
chunk__19853_21318 = G__21330;
count__19854_21319 = G__21331;
i__19855_21320 = G__21332;
continue;
} else {
var arg__6250__auto___21333 = cljs.core.first.call(null,seq__19852_21327__$1);
a__6249__auto__.push(arg__6250__auto___21333);

var G__21334 = cljs.core.next.call(null,seq__19852_21327__$1);
var G__21335 = null;
var G__21336 = (0);
var G__21337 = (0);
seq__19852_21317 = G__21334;
chunk__19853_21318 = G__21335;
count__19854_21319 = G__21336;
i__19855_21320 = G__21337;
continue;
}
} else {
}
}
break;
}

return React.DOM.figure.apply(null,a__6249__auto__);
};
var figure = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21338__i = 0, G__21338__a = new Array(arguments.length -  0);
while (G__21338__i < G__21338__a.length) {G__21338__a[G__21338__i] = arguments[G__21338__i + 0]; ++G__21338__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21338__a,0);
} 
return figure__delegate.call(this,args__6248__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__21339){
var args__6248__auto__ = cljs.core.seq(arglist__21339);
return figure__delegate(args__6248__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19860_21340 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19861_21341 = null;
var count__19862_21342 = (0);
var i__19863_21343 = (0);
while(true){
if((i__19863_21343 < count__19862_21342)){
var arg__6250__auto___21344 = cljs.core._nth.call(null,chunk__19861_21341,i__19863_21343);
a__6249__auto__.push(arg__6250__auto___21344);

var G__21345 = seq__19860_21340;
var G__21346 = chunk__19861_21341;
var G__21347 = count__19862_21342;
var G__21348 = (i__19863_21343 + (1));
seq__19860_21340 = G__21345;
chunk__19861_21341 = G__21346;
count__19862_21342 = G__21347;
i__19863_21343 = G__21348;
continue;
} else {
var temp__4126__auto___21349 = cljs.core.seq.call(null,seq__19860_21340);
if(temp__4126__auto___21349){
var seq__19860_21350__$1 = temp__4126__auto___21349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19860_21350__$1)){
var c__4541__auto___21351 = cljs.core.chunk_first.call(null,seq__19860_21350__$1);
var G__21352 = cljs.core.chunk_rest.call(null,seq__19860_21350__$1);
var G__21353 = c__4541__auto___21351;
var G__21354 = cljs.core.count.call(null,c__4541__auto___21351);
var G__21355 = (0);
seq__19860_21340 = G__21352;
chunk__19861_21341 = G__21353;
count__19862_21342 = G__21354;
i__19863_21343 = G__21355;
continue;
} else {
var arg__6250__auto___21356 = cljs.core.first.call(null,seq__19860_21350__$1);
a__6249__auto__.push(arg__6250__auto___21356);

var G__21357 = cljs.core.next.call(null,seq__19860_21350__$1);
var G__21358 = null;
var G__21359 = (0);
var G__21360 = (0);
seq__19860_21340 = G__21357;
chunk__19861_21341 = G__21358;
count__19862_21342 = G__21359;
i__19863_21343 = G__21360;
continue;
}
} else {
}
}
break;
}

return React.DOM.footer.apply(null,a__6249__auto__);
};
var footer = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21361__i = 0, G__21361__a = new Array(arguments.length -  0);
while (G__21361__i < G__21361__a.length) {G__21361__a[G__21361__i] = arguments[G__21361__i + 0]; ++G__21361__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21361__a,0);
} 
return footer__delegate.call(this,args__6248__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__21362){
var args__6248__auto__ = cljs.core.seq(arglist__21362);
return footer__delegate(args__6248__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19868_21363 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19869_21364 = null;
var count__19870_21365 = (0);
var i__19871_21366 = (0);
while(true){
if((i__19871_21366 < count__19870_21365)){
var arg__6250__auto___21367 = cljs.core._nth.call(null,chunk__19869_21364,i__19871_21366);
a__6249__auto__.push(arg__6250__auto___21367);

var G__21368 = seq__19868_21363;
var G__21369 = chunk__19869_21364;
var G__21370 = count__19870_21365;
var G__21371 = (i__19871_21366 + (1));
seq__19868_21363 = G__21368;
chunk__19869_21364 = G__21369;
count__19870_21365 = G__21370;
i__19871_21366 = G__21371;
continue;
} else {
var temp__4126__auto___21372 = cljs.core.seq.call(null,seq__19868_21363);
if(temp__4126__auto___21372){
var seq__19868_21373__$1 = temp__4126__auto___21372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19868_21373__$1)){
var c__4541__auto___21374 = cljs.core.chunk_first.call(null,seq__19868_21373__$1);
var G__21375 = cljs.core.chunk_rest.call(null,seq__19868_21373__$1);
var G__21376 = c__4541__auto___21374;
var G__21377 = cljs.core.count.call(null,c__4541__auto___21374);
var G__21378 = (0);
seq__19868_21363 = G__21375;
chunk__19869_21364 = G__21376;
count__19870_21365 = G__21377;
i__19871_21366 = G__21378;
continue;
} else {
var arg__6250__auto___21379 = cljs.core.first.call(null,seq__19868_21373__$1);
a__6249__auto__.push(arg__6250__auto___21379);

var G__21380 = cljs.core.next.call(null,seq__19868_21373__$1);
var G__21381 = null;
var G__21382 = (0);
var G__21383 = (0);
seq__19868_21363 = G__21380;
chunk__19869_21364 = G__21381;
count__19870_21365 = G__21382;
i__19871_21366 = G__21383;
continue;
}
} else {
}
}
break;
}

return React.DOM.form.apply(null,a__6249__auto__);
};
var form = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21384__i = 0, G__21384__a = new Array(arguments.length -  0);
while (G__21384__i < G__21384__a.length) {G__21384__a[G__21384__i] = arguments[G__21384__i + 0]; ++G__21384__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21384__a,0);
} 
return form__delegate.call(this,args__6248__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__21385){
var args__6248__auto__ = cljs.core.seq(arglist__21385);
return form__delegate(args__6248__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19876_21386 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19877_21387 = null;
var count__19878_21388 = (0);
var i__19879_21389 = (0);
while(true){
if((i__19879_21389 < count__19878_21388)){
var arg__6250__auto___21390 = cljs.core._nth.call(null,chunk__19877_21387,i__19879_21389);
a__6249__auto__.push(arg__6250__auto___21390);

var G__21391 = seq__19876_21386;
var G__21392 = chunk__19877_21387;
var G__21393 = count__19878_21388;
var G__21394 = (i__19879_21389 + (1));
seq__19876_21386 = G__21391;
chunk__19877_21387 = G__21392;
count__19878_21388 = G__21393;
i__19879_21389 = G__21394;
continue;
} else {
var temp__4126__auto___21395 = cljs.core.seq.call(null,seq__19876_21386);
if(temp__4126__auto___21395){
var seq__19876_21396__$1 = temp__4126__auto___21395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19876_21396__$1)){
var c__4541__auto___21397 = cljs.core.chunk_first.call(null,seq__19876_21396__$1);
var G__21398 = cljs.core.chunk_rest.call(null,seq__19876_21396__$1);
var G__21399 = c__4541__auto___21397;
var G__21400 = cljs.core.count.call(null,c__4541__auto___21397);
var G__21401 = (0);
seq__19876_21386 = G__21398;
chunk__19877_21387 = G__21399;
count__19878_21388 = G__21400;
i__19879_21389 = G__21401;
continue;
} else {
var arg__6250__auto___21402 = cljs.core.first.call(null,seq__19876_21396__$1);
a__6249__auto__.push(arg__6250__auto___21402);

var G__21403 = cljs.core.next.call(null,seq__19876_21396__$1);
var G__21404 = null;
var G__21405 = (0);
var G__21406 = (0);
seq__19876_21386 = G__21403;
chunk__19877_21387 = G__21404;
count__19878_21388 = G__21405;
i__19879_21389 = G__21406;
continue;
}
} else {
}
}
break;
}

return React.DOM.h1.apply(null,a__6249__auto__);
};
var h1 = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21407__i = 0, G__21407__a = new Array(arguments.length -  0);
while (G__21407__i < G__21407__a.length) {G__21407__a[G__21407__i] = arguments[G__21407__i + 0]; ++G__21407__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21407__a,0);
} 
return h1__delegate.call(this,args__6248__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__21408){
var args__6248__auto__ = cljs.core.seq(arglist__21408);
return h1__delegate(args__6248__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19884_21409 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19885_21410 = null;
var count__19886_21411 = (0);
var i__19887_21412 = (0);
while(true){
if((i__19887_21412 < count__19886_21411)){
var arg__6250__auto___21413 = cljs.core._nth.call(null,chunk__19885_21410,i__19887_21412);
a__6249__auto__.push(arg__6250__auto___21413);

var G__21414 = seq__19884_21409;
var G__21415 = chunk__19885_21410;
var G__21416 = count__19886_21411;
var G__21417 = (i__19887_21412 + (1));
seq__19884_21409 = G__21414;
chunk__19885_21410 = G__21415;
count__19886_21411 = G__21416;
i__19887_21412 = G__21417;
continue;
} else {
var temp__4126__auto___21418 = cljs.core.seq.call(null,seq__19884_21409);
if(temp__4126__auto___21418){
var seq__19884_21419__$1 = temp__4126__auto___21418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19884_21419__$1)){
var c__4541__auto___21420 = cljs.core.chunk_first.call(null,seq__19884_21419__$1);
var G__21421 = cljs.core.chunk_rest.call(null,seq__19884_21419__$1);
var G__21422 = c__4541__auto___21420;
var G__21423 = cljs.core.count.call(null,c__4541__auto___21420);
var G__21424 = (0);
seq__19884_21409 = G__21421;
chunk__19885_21410 = G__21422;
count__19886_21411 = G__21423;
i__19887_21412 = G__21424;
continue;
} else {
var arg__6250__auto___21425 = cljs.core.first.call(null,seq__19884_21419__$1);
a__6249__auto__.push(arg__6250__auto___21425);

var G__21426 = cljs.core.next.call(null,seq__19884_21419__$1);
var G__21427 = null;
var G__21428 = (0);
var G__21429 = (0);
seq__19884_21409 = G__21426;
chunk__19885_21410 = G__21427;
count__19886_21411 = G__21428;
i__19887_21412 = G__21429;
continue;
}
} else {
}
}
break;
}

return React.DOM.h2.apply(null,a__6249__auto__);
};
var h2 = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21430__i = 0, G__21430__a = new Array(arguments.length -  0);
while (G__21430__i < G__21430__a.length) {G__21430__a[G__21430__i] = arguments[G__21430__i + 0]; ++G__21430__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21430__a,0);
} 
return h2__delegate.call(this,args__6248__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__21431){
var args__6248__auto__ = cljs.core.seq(arglist__21431);
return h2__delegate(args__6248__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19892_21432 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19893_21433 = null;
var count__19894_21434 = (0);
var i__19895_21435 = (0);
while(true){
if((i__19895_21435 < count__19894_21434)){
var arg__6250__auto___21436 = cljs.core._nth.call(null,chunk__19893_21433,i__19895_21435);
a__6249__auto__.push(arg__6250__auto___21436);

var G__21437 = seq__19892_21432;
var G__21438 = chunk__19893_21433;
var G__21439 = count__19894_21434;
var G__21440 = (i__19895_21435 + (1));
seq__19892_21432 = G__21437;
chunk__19893_21433 = G__21438;
count__19894_21434 = G__21439;
i__19895_21435 = G__21440;
continue;
} else {
var temp__4126__auto___21441 = cljs.core.seq.call(null,seq__19892_21432);
if(temp__4126__auto___21441){
var seq__19892_21442__$1 = temp__4126__auto___21441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19892_21442__$1)){
var c__4541__auto___21443 = cljs.core.chunk_first.call(null,seq__19892_21442__$1);
var G__21444 = cljs.core.chunk_rest.call(null,seq__19892_21442__$1);
var G__21445 = c__4541__auto___21443;
var G__21446 = cljs.core.count.call(null,c__4541__auto___21443);
var G__21447 = (0);
seq__19892_21432 = G__21444;
chunk__19893_21433 = G__21445;
count__19894_21434 = G__21446;
i__19895_21435 = G__21447;
continue;
} else {
var arg__6250__auto___21448 = cljs.core.first.call(null,seq__19892_21442__$1);
a__6249__auto__.push(arg__6250__auto___21448);

var G__21449 = cljs.core.next.call(null,seq__19892_21442__$1);
var G__21450 = null;
var G__21451 = (0);
var G__21452 = (0);
seq__19892_21432 = G__21449;
chunk__19893_21433 = G__21450;
count__19894_21434 = G__21451;
i__19895_21435 = G__21452;
continue;
}
} else {
}
}
break;
}

return React.DOM.h3.apply(null,a__6249__auto__);
};
var h3 = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21453__i = 0, G__21453__a = new Array(arguments.length -  0);
while (G__21453__i < G__21453__a.length) {G__21453__a[G__21453__i] = arguments[G__21453__i + 0]; ++G__21453__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21453__a,0);
} 
return h3__delegate.call(this,args__6248__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__21454){
var args__6248__auto__ = cljs.core.seq(arglist__21454);
return h3__delegate(args__6248__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19900_21455 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19901_21456 = null;
var count__19902_21457 = (0);
var i__19903_21458 = (0);
while(true){
if((i__19903_21458 < count__19902_21457)){
var arg__6250__auto___21459 = cljs.core._nth.call(null,chunk__19901_21456,i__19903_21458);
a__6249__auto__.push(arg__6250__auto___21459);

var G__21460 = seq__19900_21455;
var G__21461 = chunk__19901_21456;
var G__21462 = count__19902_21457;
var G__21463 = (i__19903_21458 + (1));
seq__19900_21455 = G__21460;
chunk__19901_21456 = G__21461;
count__19902_21457 = G__21462;
i__19903_21458 = G__21463;
continue;
} else {
var temp__4126__auto___21464 = cljs.core.seq.call(null,seq__19900_21455);
if(temp__4126__auto___21464){
var seq__19900_21465__$1 = temp__4126__auto___21464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19900_21465__$1)){
var c__4541__auto___21466 = cljs.core.chunk_first.call(null,seq__19900_21465__$1);
var G__21467 = cljs.core.chunk_rest.call(null,seq__19900_21465__$1);
var G__21468 = c__4541__auto___21466;
var G__21469 = cljs.core.count.call(null,c__4541__auto___21466);
var G__21470 = (0);
seq__19900_21455 = G__21467;
chunk__19901_21456 = G__21468;
count__19902_21457 = G__21469;
i__19903_21458 = G__21470;
continue;
} else {
var arg__6250__auto___21471 = cljs.core.first.call(null,seq__19900_21465__$1);
a__6249__auto__.push(arg__6250__auto___21471);

var G__21472 = cljs.core.next.call(null,seq__19900_21465__$1);
var G__21473 = null;
var G__21474 = (0);
var G__21475 = (0);
seq__19900_21455 = G__21472;
chunk__19901_21456 = G__21473;
count__19902_21457 = G__21474;
i__19903_21458 = G__21475;
continue;
}
} else {
}
}
break;
}

return React.DOM.h4.apply(null,a__6249__auto__);
};
var h4 = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21476__i = 0, G__21476__a = new Array(arguments.length -  0);
while (G__21476__i < G__21476__a.length) {G__21476__a[G__21476__i] = arguments[G__21476__i + 0]; ++G__21476__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21476__a,0);
} 
return h4__delegate.call(this,args__6248__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__21477){
var args__6248__auto__ = cljs.core.seq(arglist__21477);
return h4__delegate(args__6248__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19908_21478 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19909_21479 = null;
var count__19910_21480 = (0);
var i__19911_21481 = (0);
while(true){
if((i__19911_21481 < count__19910_21480)){
var arg__6250__auto___21482 = cljs.core._nth.call(null,chunk__19909_21479,i__19911_21481);
a__6249__auto__.push(arg__6250__auto___21482);

var G__21483 = seq__19908_21478;
var G__21484 = chunk__19909_21479;
var G__21485 = count__19910_21480;
var G__21486 = (i__19911_21481 + (1));
seq__19908_21478 = G__21483;
chunk__19909_21479 = G__21484;
count__19910_21480 = G__21485;
i__19911_21481 = G__21486;
continue;
} else {
var temp__4126__auto___21487 = cljs.core.seq.call(null,seq__19908_21478);
if(temp__4126__auto___21487){
var seq__19908_21488__$1 = temp__4126__auto___21487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19908_21488__$1)){
var c__4541__auto___21489 = cljs.core.chunk_first.call(null,seq__19908_21488__$1);
var G__21490 = cljs.core.chunk_rest.call(null,seq__19908_21488__$1);
var G__21491 = c__4541__auto___21489;
var G__21492 = cljs.core.count.call(null,c__4541__auto___21489);
var G__21493 = (0);
seq__19908_21478 = G__21490;
chunk__19909_21479 = G__21491;
count__19910_21480 = G__21492;
i__19911_21481 = G__21493;
continue;
} else {
var arg__6250__auto___21494 = cljs.core.first.call(null,seq__19908_21488__$1);
a__6249__auto__.push(arg__6250__auto___21494);

var G__21495 = cljs.core.next.call(null,seq__19908_21488__$1);
var G__21496 = null;
var G__21497 = (0);
var G__21498 = (0);
seq__19908_21478 = G__21495;
chunk__19909_21479 = G__21496;
count__19910_21480 = G__21497;
i__19911_21481 = G__21498;
continue;
}
} else {
}
}
break;
}

return React.DOM.h5.apply(null,a__6249__auto__);
};
var h5 = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21499__i = 0, G__21499__a = new Array(arguments.length -  0);
while (G__21499__i < G__21499__a.length) {G__21499__a[G__21499__i] = arguments[G__21499__i + 0]; ++G__21499__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21499__a,0);
} 
return h5__delegate.call(this,args__6248__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__21500){
var args__6248__auto__ = cljs.core.seq(arglist__21500);
return h5__delegate(args__6248__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19916_21501 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19917_21502 = null;
var count__19918_21503 = (0);
var i__19919_21504 = (0);
while(true){
if((i__19919_21504 < count__19918_21503)){
var arg__6250__auto___21505 = cljs.core._nth.call(null,chunk__19917_21502,i__19919_21504);
a__6249__auto__.push(arg__6250__auto___21505);

var G__21506 = seq__19916_21501;
var G__21507 = chunk__19917_21502;
var G__21508 = count__19918_21503;
var G__21509 = (i__19919_21504 + (1));
seq__19916_21501 = G__21506;
chunk__19917_21502 = G__21507;
count__19918_21503 = G__21508;
i__19919_21504 = G__21509;
continue;
} else {
var temp__4126__auto___21510 = cljs.core.seq.call(null,seq__19916_21501);
if(temp__4126__auto___21510){
var seq__19916_21511__$1 = temp__4126__auto___21510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19916_21511__$1)){
var c__4541__auto___21512 = cljs.core.chunk_first.call(null,seq__19916_21511__$1);
var G__21513 = cljs.core.chunk_rest.call(null,seq__19916_21511__$1);
var G__21514 = c__4541__auto___21512;
var G__21515 = cljs.core.count.call(null,c__4541__auto___21512);
var G__21516 = (0);
seq__19916_21501 = G__21513;
chunk__19917_21502 = G__21514;
count__19918_21503 = G__21515;
i__19919_21504 = G__21516;
continue;
} else {
var arg__6250__auto___21517 = cljs.core.first.call(null,seq__19916_21511__$1);
a__6249__auto__.push(arg__6250__auto___21517);

var G__21518 = cljs.core.next.call(null,seq__19916_21511__$1);
var G__21519 = null;
var G__21520 = (0);
var G__21521 = (0);
seq__19916_21501 = G__21518;
chunk__19917_21502 = G__21519;
count__19918_21503 = G__21520;
i__19919_21504 = G__21521;
continue;
}
} else {
}
}
break;
}

return React.DOM.h6.apply(null,a__6249__auto__);
};
var h6 = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21522__i = 0, G__21522__a = new Array(arguments.length -  0);
while (G__21522__i < G__21522__a.length) {G__21522__a[G__21522__i] = arguments[G__21522__i + 0]; ++G__21522__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21522__a,0);
} 
return h6__delegate.call(this,args__6248__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__21523){
var args__6248__auto__ = cljs.core.seq(arglist__21523);
return h6__delegate(args__6248__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19924_21524 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19925_21525 = null;
var count__19926_21526 = (0);
var i__19927_21527 = (0);
while(true){
if((i__19927_21527 < count__19926_21526)){
var arg__6250__auto___21528 = cljs.core._nth.call(null,chunk__19925_21525,i__19927_21527);
a__6249__auto__.push(arg__6250__auto___21528);

var G__21529 = seq__19924_21524;
var G__21530 = chunk__19925_21525;
var G__21531 = count__19926_21526;
var G__21532 = (i__19927_21527 + (1));
seq__19924_21524 = G__21529;
chunk__19925_21525 = G__21530;
count__19926_21526 = G__21531;
i__19927_21527 = G__21532;
continue;
} else {
var temp__4126__auto___21533 = cljs.core.seq.call(null,seq__19924_21524);
if(temp__4126__auto___21533){
var seq__19924_21534__$1 = temp__4126__auto___21533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19924_21534__$1)){
var c__4541__auto___21535 = cljs.core.chunk_first.call(null,seq__19924_21534__$1);
var G__21536 = cljs.core.chunk_rest.call(null,seq__19924_21534__$1);
var G__21537 = c__4541__auto___21535;
var G__21538 = cljs.core.count.call(null,c__4541__auto___21535);
var G__21539 = (0);
seq__19924_21524 = G__21536;
chunk__19925_21525 = G__21537;
count__19926_21526 = G__21538;
i__19927_21527 = G__21539;
continue;
} else {
var arg__6250__auto___21540 = cljs.core.first.call(null,seq__19924_21534__$1);
a__6249__auto__.push(arg__6250__auto___21540);

var G__21541 = cljs.core.next.call(null,seq__19924_21534__$1);
var G__21542 = null;
var G__21543 = (0);
var G__21544 = (0);
seq__19924_21524 = G__21541;
chunk__19925_21525 = G__21542;
count__19926_21526 = G__21543;
i__19927_21527 = G__21544;
continue;
}
} else {
}
}
break;
}

return React.DOM.head.apply(null,a__6249__auto__);
};
var head = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21545__i = 0, G__21545__a = new Array(arguments.length -  0);
while (G__21545__i < G__21545__a.length) {G__21545__a[G__21545__i] = arguments[G__21545__i + 0]; ++G__21545__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21545__a,0);
} 
return head__delegate.call(this,args__6248__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__21546){
var args__6248__auto__ = cljs.core.seq(arglist__21546);
return head__delegate(args__6248__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19932_21547 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19933_21548 = null;
var count__19934_21549 = (0);
var i__19935_21550 = (0);
while(true){
if((i__19935_21550 < count__19934_21549)){
var arg__6250__auto___21551 = cljs.core._nth.call(null,chunk__19933_21548,i__19935_21550);
a__6249__auto__.push(arg__6250__auto___21551);

var G__21552 = seq__19932_21547;
var G__21553 = chunk__19933_21548;
var G__21554 = count__19934_21549;
var G__21555 = (i__19935_21550 + (1));
seq__19932_21547 = G__21552;
chunk__19933_21548 = G__21553;
count__19934_21549 = G__21554;
i__19935_21550 = G__21555;
continue;
} else {
var temp__4126__auto___21556 = cljs.core.seq.call(null,seq__19932_21547);
if(temp__4126__auto___21556){
var seq__19932_21557__$1 = temp__4126__auto___21556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19932_21557__$1)){
var c__4541__auto___21558 = cljs.core.chunk_first.call(null,seq__19932_21557__$1);
var G__21559 = cljs.core.chunk_rest.call(null,seq__19932_21557__$1);
var G__21560 = c__4541__auto___21558;
var G__21561 = cljs.core.count.call(null,c__4541__auto___21558);
var G__21562 = (0);
seq__19932_21547 = G__21559;
chunk__19933_21548 = G__21560;
count__19934_21549 = G__21561;
i__19935_21550 = G__21562;
continue;
} else {
var arg__6250__auto___21563 = cljs.core.first.call(null,seq__19932_21557__$1);
a__6249__auto__.push(arg__6250__auto___21563);

var G__21564 = cljs.core.next.call(null,seq__19932_21557__$1);
var G__21565 = null;
var G__21566 = (0);
var G__21567 = (0);
seq__19932_21547 = G__21564;
chunk__19933_21548 = G__21565;
count__19934_21549 = G__21566;
i__19935_21550 = G__21567;
continue;
}
} else {
}
}
break;
}

return React.DOM.header.apply(null,a__6249__auto__);
};
var header = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21568__i = 0, G__21568__a = new Array(arguments.length -  0);
while (G__21568__i < G__21568__a.length) {G__21568__a[G__21568__i] = arguments[G__21568__i + 0]; ++G__21568__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21568__a,0);
} 
return header__delegate.call(this,args__6248__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__21569){
var args__6248__auto__ = cljs.core.seq(arglist__21569);
return header__delegate(args__6248__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19940_21570 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19941_21571 = null;
var count__19942_21572 = (0);
var i__19943_21573 = (0);
while(true){
if((i__19943_21573 < count__19942_21572)){
var arg__6250__auto___21574 = cljs.core._nth.call(null,chunk__19941_21571,i__19943_21573);
a__6249__auto__.push(arg__6250__auto___21574);

var G__21575 = seq__19940_21570;
var G__21576 = chunk__19941_21571;
var G__21577 = count__19942_21572;
var G__21578 = (i__19943_21573 + (1));
seq__19940_21570 = G__21575;
chunk__19941_21571 = G__21576;
count__19942_21572 = G__21577;
i__19943_21573 = G__21578;
continue;
} else {
var temp__4126__auto___21579 = cljs.core.seq.call(null,seq__19940_21570);
if(temp__4126__auto___21579){
var seq__19940_21580__$1 = temp__4126__auto___21579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19940_21580__$1)){
var c__4541__auto___21581 = cljs.core.chunk_first.call(null,seq__19940_21580__$1);
var G__21582 = cljs.core.chunk_rest.call(null,seq__19940_21580__$1);
var G__21583 = c__4541__auto___21581;
var G__21584 = cljs.core.count.call(null,c__4541__auto___21581);
var G__21585 = (0);
seq__19940_21570 = G__21582;
chunk__19941_21571 = G__21583;
count__19942_21572 = G__21584;
i__19943_21573 = G__21585;
continue;
} else {
var arg__6250__auto___21586 = cljs.core.first.call(null,seq__19940_21580__$1);
a__6249__auto__.push(arg__6250__auto___21586);

var G__21587 = cljs.core.next.call(null,seq__19940_21580__$1);
var G__21588 = null;
var G__21589 = (0);
var G__21590 = (0);
seq__19940_21570 = G__21587;
chunk__19941_21571 = G__21588;
count__19942_21572 = G__21589;
i__19943_21573 = G__21590;
continue;
}
} else {
}
}
break;
}

return React.DOM.hr.apply(null,a__6249__auto__);
};
var hr = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21591__i = 0, G__21591__a = new Array(arguments.length -  0);
while (G__21591__i < G__21591__a.length) {G__21591__a[G__21591__i] = arguments[G__21591__i + 0]; ++G__21591__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21591__a,0);
} 
return hr__delegate.call(this,args__6248__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__21592){
var args__6248__auto__ = cljs.core.seq(arglist__21592);
return hr__delegate(args__6248__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19948_21593 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19949_21594 = null;
var count__19950_21595 = (0);
var i__19951_21596 = (0);
while(true){
if((i__19951_21596 < count__19950_21595)){
var arg__6250__auto___21597 = cljs.core._nth.call(null,chunk__19949_21594,i__19951_21596);
a__6249__auto__.push(arg__6250__auto___21597);

var G__21598 = seq__19948_21593;
var G__21599 = chunk__19949_21594;
var G__21600 = count__19950_21595;
var G__21601 = (i__19951_21596 + (1));
seq__19948_21593 = G__21598;
chunk__19949_21594 = G__21599;
count__19950_21595 = G__21600;
i__19951_21596 = G__21601;
continue;
} else {
var temp__4126__auto___21602 = cljs.core.seq.call(null,seq__19948_21593);
if(temp__4126__auto___21602){
var seq__19948_21603__$1 = temp__4126__auto___21602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19948_21603__$1)){
var c__4541__auto___21604 = cljs.core.chunk_first.call(null,seq__19948_21603__$1);
var G__21605 = cljs.core.chunk_rest.call(null,seq__19948_21603__$1);
var G__21606 = c__4541__auto___21604;
var G__21607 = cljs.core.count.call(null,c__4541__auto___21604);
var G__21608 = (0);
seq__19948_21593 = G__21605;
chunk__19949_21594 = G__21606;
count__19950_21595 = G__21607;
i__19951_21596 = G__21608;
continue;
} else {
var arg__6250__auto___21609 = cljs.core.first.call(null,seq__19948_21603__$1);
a__6249__auto__.push(arg__6250__auto___21609);

var G__21610 = cljs.core.next.call(null,seq__19948_21603__$1);
var G__21611 = null;
var G__21612 = (0);
var G__21613 = (0);
seq__19948_21593 = G__21610;
chunk__19949_21594 = G__21611;
count__19950_21595 = G__21612;
i__19951_21596 = G__21613;
continue;
}
} else {
}
}
break;
}

return React.DOM.html.apply(null,a__6249__auto__);
};
var html = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21614__i = 0, G__21614__a = new Array(arguments.length -  0);
while (G__21614__i < G__21614__a.length) {G__21614__a[G__21614__i] = arguments[G__21614__i + 0]; ++G__21614__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21614__a,0);
} 
return html__delegate.call(this,args__6248__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__21615){
var args__6248__auto__ = cljs.core.seq(arglist__21615);
return html__delegate(args__6248__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19956_21616 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19957_21617 = null;
var count__19958_21618 = (0);
var i__19959_21619 = (0);
while(true){
if((i__19959_21619 < count__19958_21618)){
var arg__6250__auto___21620 = cljs.core._nth.call(null,chunk__19957_21617,i__19959_21619);
a__6249__auto__.push(arg__6250__auto___21620);

var G__21621 = seq__19956_21616;
var G__21622 = chunk__19957_21617;
var G__21623 = count__19958_21618;
var G__21624 = (i__19959_21619 + (1));
seq__19956_21616 = G__21621;
chunk__19957_21617 = G__21622;
count__19958_21618 = G__21623;
i__19959_21619 = G__21624;
continue;
} else {
var temp__4126__auto___21625 = cljs.core.seq.call(null,seq__19956_21616);
if(temp__4126__auto___21625){
var seq__19956_21626__$1 = temp__4126__auto___21625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19956_21626__$1)){
var c__4541__auto___21627 = cljs.core.chunk_first.call(null,seq__19956_21626__$1);
var G__21628 = cljs.core.chunk_rest.call(null,seq__19956_21626__$1);
var G__21629 = c__4541__auto___21627;
var G__21630 = cljs.core.count.call(null,c__4541__auto___21627);
var G__21631 = (0);
seq__19956_21616 = G__21628;
chunk__19957_21617 = G__21629;
count__19958_21618 = G__21630;
i__19959_21619 = G__21631;
continue;
} else {
var arg__6250__auto___21632 = cljs.core.first.call(null,seq__19956_21626__$1);
a__6249__auto__.push(arg__6250__auto___21632);

var G__21633 = cljs.core.next.call(null,seq__19956_21626__$1);
var G__21634 = null;
var G__21635 = (0);
var G__21636 = (0);
seq__19956_21616 = G__21633;
chunk__19957_21617 = G__21634;
count__19958_21618 = G__21635;
i__19959_21619 = G__21636;
continue;
}
} else {
}
}
break;
}

return React.DOM.i.apply(null,a__6249__auto__);
};
var i = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21637__i = 0, G__21637__a = new Array(arguments.length -  0);
while (G__21637__i < G__21637__a.length) {G__21637__a[G__21637__i] = arguments[G__21637__i + 0]; ++G__21637__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21637__a,0);
} 
return i__delegate.call(this,args__6248__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__21638){
var args__6248__auto__ = cljs.core.seq(arglist__21638);
return i__delegate(args__6248__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19964_21639 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19965_21640 = null;
var count__19966_21641 = (0);
var i__19967_21642 = (0);
while(true){
if((i__19967_21642 < count__19966_21641)){
var arg__6250__auto___21643 = cljs.core._nth.call(null,chunk__19965_21640,i__19967_21642);
a__6249__auto__.push(arg__6250__auto___21643);

var G__21644 = seq__19964_21639;
var G__21645 = chunk__19965_21640;
var G__21646 = count__19966_21641;
var G__21647 = (i__19967_21642 + (1));
seq__19964_21639 = G__21644;
chunk__19965_21640 = G__21645;
count__19966_21641 = G__21646;
i__19967_21642 = G__21647;
continue;
} else {
var temp__4126__auto___21648 = cljs.core.seq.call(null,seq__19964_21639);
if(temp__4126__auto___21648){
var seq__19964_21649__$1 = temp__4126__auto___21648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19964_21649__$1)){
var c__4541__auto___21650 = cljs.core.chunk_first.call(null,seq__19964_21649__$1);
var G__21651 = cljs.core.chunk_rest.call(null,seq__19964_21649__$1);
var G__21652 = c__4541__auto___21650;
var G__21653 = cljs.core.count.call(null,c__4541__auto___21650);
var G__21654 = (0);
seq__19964_21639 = G__21651;
chunk__19965_21640 = G__21652;
count__19966_21641 = G__21653;
i__19967_21642 = G__21654;
continue;
} else {
var arg__6250__auto___21655 = cljs.core.first.call(null,seq__19964_21649__$1);
a__6249__auto__.push(arg__6250__auto___21655);

var G__21656 = cljs.core.next.call(null,seq__19964_21649__$1);
var G__21657 = null;
var G__21658 = (0);
var G__21659 = (0);
seq__19964_21639 = G__21656;
chunk__19965_21640 = G__21657;
count__19966_21641 = G__21658;
i__19967_21642 = G__21659;
continue;
}
} else {
}
}
break;
}

return React.DOM.iframe.apply(null,a__6249__auto__);
};
var iframe = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21660__i = 0, G__21660__a = new Array(arguments.length -  0);
while (G__21660__i < G__21660__a.length) {G__21660__a[G__21660__i] = arguments[G__21660__i + 0]; ++G__21660__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21660__a,0);
} 
return iframe__delegate.call(this,args__6248__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__21661){
var args__6248__auto__ = cljs.core.seq(arglist__21661);
return iframe__delegate(args__6248__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19972_21662 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19973_21663 = null;
var count__19974_21664 = (0);
var i__19975_21665 = (0);
while(true){
if((i__19975_21665 < count__19974_21664)){
var arg__6250__auto___21666 = cljs.core._nth.call(null,chunk__19973_21663,i__19975_21665);
a__6249__auto__.push(arg__6250__auto___21666);

var G__21667 = seq__19972_21662;
var G__21668 = chunk__19973_21663;
var G__21669 = count__19974_21664;
var G__21670 = (i__19975_21665 + (1));
seq__19972_21662 = G__21667;
chunk__19973_21663 = G__21668;
count__19974_21664 = G__21669;
i__19975_21665 = G__21670;
continue;
} else {
var temp__4126__auto___21671 = cljs.core.seq.call(null,seq__19972_21662);
if(temp__4126__auto___21671){
var seq__19972_21672__$1 = temp__4126__auto___21671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19972_21672__$1)){
var c__4541__auto___21673 = cljs.core.chunk_first.call(null,seq__19972_21672__$1);
var G__21674 = cljs.core.chunk_rest.call(null,seq__19972_21672__$1);
var G__21675 = c__4541__auto___21673;
var G__21676 = cljs.core.count.call(null,c__4541__auto___21673);
var G__21677 = (0);
seq__19972_21662 = G__21674;
chunk__19973_21663 = G__21675;
count__19974_21664 = G__21676;
i__19975_21665 = G__21677;
continue;
} else {
var arg__6250__auto___21678 = cljs.core.first.call(null,seq__19972_21672__$1);
a__6249__auto__.push(arg__6250__auto___21678);

var G__21679 = cljs.core.next.call(null,seq__19972_21672__$1);
var G__21680 = null;
var G__21681 = (0);
var G__21682 = (0);
seq__19972_21662 = G__21679;
chunk__19973_21663 = G__21680;
count__19974_21664 = G__21681;
i__19975_21665 = G__21682;
continue;
}
} else {
}
}
break;
}

return React.DOM.img.apply(null,a__6249__auto__);
};
var img = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21683__i = 0, G__21683__a = new Array(arguments.length -  0);
while (G__21683__i < G__21683__a.length) {G__21683__a[G__21683__i] = arguments[G__21683__i + 0]; ++G__21683__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21683__a,0);
} 
return img__delegate.call(this,args__6248__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__21684){
var args__6248__auto__ = cljs.core.seq(arglist__21684);
return img__delegate(args__6248__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19980_21685 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19981_21686 = null;
var count__19982_21687 = (0);
var i__19983_21688 = (0);
while(true){
if((i__19983_21688 < count__19982_21687)){
var arg__6250__auto___21689 = cljs.core._nth.call(null,chunk__19981_21686,i__19983_21688);
a__6249__auto__.push(arg__6250__auto___21689);

var G__21690 = seq__19980_21685;
var G__21691 = chunk__19981_21686;
var G__21692 = count__19982_21687;
var G__21693 = (i__19983_21688 + (1));
seq__19980_21685 = G__21690;
chunk__19981_21686 = G__21691;
count__19982_21687 = G__21692;
i__19983_21688 = G__21693;
continue;
} else {
var temp__4126__auto___21694 = cljs.core.seq.call(null,seq__19980_21685);
if(temp__4126__auto___21694){
var seq__19980_21695__$1 = temp__4126__auto___21694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19980_21695__$1)){
var c__4541__auto___21696 = cljs.core.chunk_first.call(null,seq__19980_21695__$1);
var G__21697 = cljs.core.chunk_rest.call(null,seq__19980_21695__$1);
var G__21698 = c__4541__auto___21696;
var G__21699 = cljs.core.count.call(null,c__4541__auto___21696);
var G__21700 = (0);
seq__19980_21685 = G__21697;
chunk__19981_21686 = G__21698;
count__19982_21687 = G__21699;
i__19983_21688 = G__21700;
continue;
} else {
var arg__6250__auto___21701 = cljs.core.first.call(null,seq__19980_21695__$1);
a__6249__auto__.push(arg__6250__auto___21701);

var G__21702 = cljs.core.next.call(null,seq__19980_21695__$1);
var G__21703 = null;
var G__21704 = (0);
var G__21705 = (0);
seq__19980_21685 = G__21702;
chunk__19981_21686 = G__21703;
count__19982_21687 = G__21704;
i__19983_21688 = G__21705;
continue;
}
} else {
}
}
break;
}

return React.DOM.input.apply(null,a__6249__auto__);
};
var input = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21706__i = 0, G__21706__a = new Array(arguments.length -  0);
while (G__21706__i < G__21706__a.length) {G__21706__a[G__21706__i] = arguments[G__21706__i + 0]; ++G__21706__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21706__a,0);
} 
return input__delegate.call(this,args__6248__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__21707){
var args__6248__auto__ = cljs.core.seq(arglist__21707);
return input__delegate(args__6248__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19988_21708 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19989_21709 = null;
var count__19990_21710 = (0);
var i__19991_21711 = (0);
while(true){
if((i__19991_21711 < count__19990_21710)){
var arg__6250__auto___21712 = cljs.core._nth.call(null,chunk__19989_21709,i__19991_21711);
a__6249__auto__.push(arg__6250__auto___21712);

var G__21713 = seq__19988_21708;
var G__21714 = chunk__19989_21709;
var G__21715 = count__19990_21710;
var G__21716 = (i__19991_21711 + (1));
seq__19988_21708 = G__21713;
chunk__19989_21709 = G__21714;
count__19990_21710 = G__21715;
i__19991_21711 = G__21716;
continue;
} else {
var temp__4126__auto___21717 = cljs.core.seq.call(null,seq__19988_21708);
if(temp__4126__auto___21717){
var seq__19988_21718__$1 = temp__4126__auto___21717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19988_21718__$1)){
var c__4541__auto___21719 = cljs.core.chunk_first.call(null,seq__19988_21718__$1);
var G__21720 = cljs.core.chunk_rest.call(null,seq__19988_21718__$1);
var G__21721 = c__4541__auto___21719;
var G__21722 = cljs.core.count.call(null,c__4541__auto___21719);
var G__21723 = (0);
seq__19988_21708 = G__21720;
chunk__19989_21709 = G__21721;
count__19990_21710 = G__21722;
i__19991_21711 = G__21723;
continue;
} else {
var arg__6250__auto___21724 = cljs.core.first.call(null,seq__19988_21718__$1);
a__6249__auto__.push(arg__6250__auto___21724);

var G__21725 = cljs.core.next.call(null,seq__19988_21718__$1);
var G__21726 = null;
var G__21727 = (0);
var G__21728 = (0);
seq__19988_21708 = G__21725;
chunk__19989_21709 = G__21726;
count__19990_21710 = G__21727;
i__19991_21711 = G__21728;
continue;
}
} else {
}
}
break;
}

return React.DOM.ins.apply(null,a__6249__auto__);
};
var ins = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21729__i = 0, G__21729__a = new Array(arguments.length -  0);
while (G__21729__i < G__21729__a.length) {G__21729__a[G__21729__i] = arguments[G__21729__i + 0]; ++G__21729__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21729__a,0);
} 
return ins__delegate.call(this,args__6248__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__21730){
var args__6248__auto__ = cljs.core.seq(arglist__21730);
return ins__delegate(args__6248__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19996_21731 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19997_21732 = null;
var count__19998_21733 = (0);
var i__19999_21734 = (0);
while(true){
if((i__19999_21734 < count__19998_21733)){
var arg__6250__auto___21735 = cljs.core._nth.call(null,chunk__19997_21732,i__19999_21734);
a__6249__auto__.push(arg__6250__auto___21735);

var G__21736 = seq__19996_21731;
var G__21737 = chunk__19997_21732;
var G__21738 = count__19998_21733;
var G__21739 = (i__19999_21734 + (1));
seq__19996_21731 = G__21736;
chunk__19997_21732 = G__21737;
count__19998_21733 = G__21738;
i__19999_21734 = G__21739;
continue;
} else {
var temp__4126__auto___21740 = cljs.core.seq.call(null,seq__19996_21731);
if(temp__4126__auto___21740){
var seq__19996_21741__$1 = temp__4126__auto___21740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19996_21741__$1)){
var c__4541__auto___21742 = cljs.core.chunk_first.call(null,seq__19996_21741__$1);
var G__21743 = cljs.core.chunk_rest.call(null,seq__19996_21741__$1);
var G__21744 = c__4541__auto___21742;
var G__21745 = cljs.core.count.call(null,c__4541__auto___21742);
var G__21746 = (0);
seq__19996_21731 = G__21743;
chunk__19997_21732 = G__21744;
count__19998_21733 = G__21745;
i__19999_21734 = G__21746;
continue;
} else {
var arg__6250__auto___21747 = cljs.core.first.call(null,seq__19996_21741__$1);
a__6249__auto__.push(arg__6250__auto___21747);

var G__21748 = cljs.core.next.call(null,seq__19996_21741__$1);
var G__21749 = null;
var G__21750 = (0);
var G__21751 = (0);
seq__19996_21731 = G__21748;
chunk__19997_21732 = G__21749;
count__19998_21733 = G__21750;
i__19999_21734 = G__21751;
continue;
}
} else {
}
}
break;
}

return React.DOM.kbd.apply(null,a__6249__auto__);
};
var kbd = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21752__i = 0, G__21752__a = new Array(arguments.length -  0);
while (G__21752__i < G__21752__a.length) {G__21752__a[G__21752__i] = arguments[G__21752__i + 0]; ++G__21752__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21752__a,0);
} 
return kbd__delegate.call(this,args__6248__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__21753){
var args__6248__auto__ = cljs.core.seq(arglist__21753);
return kbd__delegate(args__6248__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20004_21754 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20005_21755 = null;
var count__20006_21756 = (0);
var i__20007_21757 = (0);
while(true){
if((i__20007_21757 < count__20006_21756)){
var arg__6250__auto___21758 = cljs.core._nth.call(null,chunk__20005_21755,i__20007_21757);
a__6249__auto__.push(arg__6250__auto___21758);

var G__21759 = seq__20004_21754;
var G__21760 = chunk__20005_21755;
var G__21761 = count__20006_21756;
var G__21762 = (i__20007_21757 + (1));
seq__20004_21754 = G__21759;
chunk__20005_21755 = G__21760;
count__20006_21756 = G__21761;
i__20007_21757 = G__21762;
continue;
} else {
var temp__4126__auto___21763 = cljs.core.seq.call(null,seq__20004_21754);
if(temp__4126__auto___21763){
var seq__20004_21764__$1 = temp__4126__auto___21763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20004_21764__$1)){
var c__4541__auto___21765 = cljs.core.chunk_first.call(null,seq__20004_21764__$1);
var G__21766 = cljs.core.chunk_rest.call(null,seq__20004_21764__$1);
var G__21767 = c__4541__auto___21765;
var G__21768 = cljs.core.count.call(null,c__4541__auto___21765);
var G__21769 = (0);
seq__20004_21754 = G__21766;
chunk__20005_21755 = G__21767;
count__20006_21756 = G__21768;
i__20007_21757 = G__21769;
continue;
} else {
var arg__6250__auto___21770 = cljs.core.first.call(null,seq__20004_21764__$1);
a__6249__auto__.push(arg__6250__auto___21770);

var G__21771 = cljs.core.next.call(null,seq__20004_21764__$1);
var G__21772 = null;
var G__21773 = (0);
var G__21774 = (0);
seq__20004_21754 = G__21771;
chunk__20005_21755 = G__21772;
count__20006_21756 = G__21773;
i__20007_21757 = G__21774;
continue;
}
} else {
}
}
break;
}

return React.DOM.keygen.apply(null,a__6249__auto__);
};
var keygen = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21775__i = 0, G__21775__a = new Array(arguments.length -  0);
while (G__21775__i < G__21775__a.length) {G__21775__a[G__21775__i] = arguments[G__21775__i + 0]; ++G__21775__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21775__a,0);
} 
return keygen__delegate.call(this,args__6248__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__21776){
var args__6248__auto__ = cljs.core.seq(arglist__21776);
return keygen__delegate(args__6248__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20012_21777 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20013_21778 = null;
var count__20014_21779 = (0);
var i__20015_21780 = (0);
while(true){
if((i__20015_21780 < count__20014_21779)){
var arg__6250__auto___21781 = cljs.core._nth.call(null,chunk__20013_21778,i__20015_21780);
a__6249__auto__.push(arg__6250__auto___21781);

var G__21782 = seq__20012_21777;
var G__21783 = chunk__20013_21778;
var G__21784 = count__20014_21779;
var G__21785 = (i__20015_21780 + (1));
seq__20012_21777 = G__21782;
chunk__20013_21778 = G__21783;
count__20014_21779 = G__21784;
i__20015_21780 = G__21785;
continue;
} else {
var temp__4126__auto___21786 = cljs.core.seq.call(null,seq__20012_21777);
if(temp__4126__auto___21786){
var seq__20012_21787__$1 = temp__4126__auto___21786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20012_21787__$1)){
var c__4541__auto___21788 = cljs.core.chunk_first.call(null,seq__20012_21787__$1);
var G__21789 = cljs.core.chunk_rest.call(null,seq__20012_21787__$1);
var G__21790 = c__4541__auto___21788;
var G__21791 = cljs.core.count.call(null,c__4541__auto___21788);
var G__21792 = (0);
seq__20012_21777 = G__21789;
chunk__20013_21778 = G__21790;
count__20014_21779 = G__21791;
i__20015_21780 = G__21792;
continue;
} else {
var arg__6250__auto___21793 = cljs.core.first.call(null,seq__20012_21787__$1);
a__6249__auto__.push(arg__6250__auto___21793);

var G__21794 = cljs.core.next.call(null,seq__20012_21787__$1);
var G__21795 = null;
var G__21796 = (0);
var G__21797 = (0);
seq__20012_21777 = G__21794;
chunk__20013_21778 = G__21795;
count__20014_21779 = G__21796;
i__20015_21780 = G__21797;
continue;
}
} else {
}
}
break;
}

return React.DOM.label.apply(null,a__6249__auto__);
};
var label = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21798__i = 0, G__21798__a = new Array(arguments.length -  0);
while (G__21798__i < G__21798__a.length) {G__21798__a[G__21798__i] = arguments[G__21798__i + 0]; ++G__21798__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21798__a,0);
} 
return label__delegate.call(this,args__6248__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__21799){
var args__6248__auto__ = cljs.core.seq(arglist__21799);
return label__delegate(args__6248__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20020_21800 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20021_21801 = null;
var count__20022_21802 = (0);
var i__20023_21803 = (0);
while(true){
if((i__20023_21803 < count__20022_21802)){
var arg__6250__auto___21804 = cljs.core._nth.call(null,chunk__20021_21801,i__20023_21803);
a__6249__auto__.push(arg__6250__auto___21804);

var G__21805 = seq__20020_21800;
var G__21806 = chunk__20021_21801;
var G__21807 = count__20022_21802;
var G__21808 = (i__20023_21803 + (1));
seq__20020_21800 = G__21805;
chunk__20021_21801 = G__21806;
count__20022_21802 = G__21807;
i__20023_21803 = G__21808;
continue;
} else {
var temp__4126__auto___21809 = cljs.core.seq.call(null,seq__20020_21800);
if(temp__4126__auto___21809){
var seq__20020_21810__$1 = temp__4126__auto___21809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20020_21810__$1)){
var c__4541__auto___21811 = cljs.core.chunk_first.call(null,seq__20020_21810__$1);
var G__21812 = cljs.core.chunk_rest.call(null,seq__20020_21810__$1);
var G__21813 = c__4541__auto___21811;
var G__21814 = cljs.core.count.call(null,c__4541__auto___21811);
var G__21815 = (0);
seq__20020_21800 = G__21812;
chunk__20021_21801 = G__21813;
count__20022_21802 = G__21814;
i__20023_21803 = G__21815;
continue;
} else {
var arg__6250__auto___21816 = cljs.core.first.call(null,seq__20020_21810__$1);
a__6249__auto__.push(arg__6250__auto___21816);

var G__21817 = cljs.core.next.call(null,seq__20020_21810__$1);
var G__21818 = null;
var G__21819 = (0);
var G__21820 = (0);
seq__20020_21800 = G__21817;
chunk__20021_21801 = G__21818;
count__20022_21802 = G__21819;
i__20023_21803 = G__21820;
continue;
}
} else {
}
}
break;
}

return React.DOM.legend.apply(null,a__6249__auto__);
};
var legend = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21821__i = 0, G__21821__a = new Array(arguments.length -  0);
while (G__21821__i < G__21821__a.length) {G__21821__a[G__21821__i] = arguments[G__21821__i + 0]; ++G__21821__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21821__a,0);
} 
return legend__delegate.call(this,args__6248__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__21822){
var args__6248__auto__ = cljs.core.seq(arglist__21822);
return legend__delegate(args__6248__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20028_21823 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20029_21824 = null;
var count__20030_21825 = (0);
var i__20031_21826 = (0);
while(true){
if((i__20031_21826 < count__20030_21825)){
var arg__6250__auto___21827 = cljs.core._nth.call(null,chunk__20029_21824,i__20031_21826);
a__6249__auto__.push(arg__6250__auto___21827);

var G__21828 = seq__20028_21823;
var G__21829 = chunk__20029_21824;
var G__21830 = count__20030_21825;
var G__21831 = (i__20031_21826 + (1));
seq__20028_21823 = G__21828;
chunk__20029_21824 = G__21829;
count__20030_21825 = G__21830;
i__20031_21826 = G__21831;
continue;
} else {
var temp__4126__auto___21832 = cljs.core.seq.call(null,seq__20028_21823);
if(temp__4126__auto___21832){
var seq__20028_21833__$1 = temp__4126__auto___21832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20028_21833__$1)){
var c__4541__auto___21834 = cljs.core.chunk_first.call(null,seq__20028_21833__$1);
var G__21835 = cljs.core.chunk_rest.call(null,seq__20028_21833__$1);
var G__21836 = c__4541__auto___21834;
var G__21837 = cljs.core.count.call(null,c__4541__auto___21834);
var G__21838 = (0);
seq__20028_21823 = G__21835;
chunk__20029_21824 = G__21836;
count__20030_21825 = G__21837;
i__20031_21826 = G__21838;
continue;
} else {
var arg__6250__auto___21839 = cljs.core.first.call(null,seq__20028_21833__$1);
a__6249__auto__.push(arg__6250__auto___21839);

var G__21840 = cljs.core.next.call(null,seq__20028_21833__$1);
var G__21841 = null;
var G__21842 = (0);
var G__21843 = (0);
seq__20028_21823 = G__21840;
chunk__20029_21824 = G__21841;
count__20030_21825 = G__21842;
i__20031_21826 = G__21843;
continue;
}
} else {
}
}
break;
}

return React.DOM.li.apply(null,a__6249__auto__);
};
var li = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21844__i = 0, G__21844__a = new Array(arguments.length -  0);
while (G__21844__i < G__21844__a.length) {G__21844__a[G__21844__i] = arguments[G__21844__i + 0]; ++G__21844__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21844__a,0);
} 
return li__delegate.call(this,args__6248__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__21845){
var args__6248__auto__ = cljs.core.seq(arglist__21845);
return li__delegate(args__6248__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20036_21846 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20037_21847 = null;
var count__20038_21848 = (0);
var i__20039_21849 = (0);
while(true){
if((i__20039_21849 < count__20038_21848)){
var arg__6250__auto___21850 = cljs.core._nth.call(null,chunk__20037_21847,i__20039_21849);
a__6249__auto__.push(arg__6250__auto___21850);

var G__21851 = seq__20036_21846;
var G__21852 = chunk__20037_21847;
var G__21853 = count__20038_21848;
var G__21854 = (i__20039_21849 + (1));
seq__20036_21846 = G__21851;
chunk__20037_21847 = G__21852;
count__20038_21848 = G__21853;
i__20039_21849 = G__21854;
continue;
} else {
var temp__4126__auto___21855 = cljs.core.seq.call(null,seq__20036_21846);
if(temp__4126__auto___21855){
var seq__20036_21856__$1 = temp__4126__auto___21855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20036_21856__$1)){
var c__4541__auto___21857 = cljs.core.chunk_first.call(null,seq__20036_21856__$1);
var G__21858 = cljs.core.chunk_rest.call(null,seq__20036_21856__$1);
var G__21859 = c__4541__auto___21857;
var G__21860 = cljs.core.count.call(null,c__4541__auto___21857);
var G__21861 = (0);
seq__20036_21846 = G__21858;
chunk__20037_21847 = G__21859;
count__20038_21848 = G__21860;
i__20039_21849 = G__21861;
continue;
} else {
var arg__6250__auto___21862 = cljs.core.first.call(null,seq__20036_21856__$1);
a__6249__auto__.push(arg__6250__auto___21862);

var G__21863 = cljs.core.next.call(null,seq__20036_21856__$1);
var G__21864 = null;
var G__21865 = (0);
var G__21866 = (0);
seq__20036_21846 = G__21863;
chunk__20037_21847 = G__21864;
count__20038_21848 = G__21865;
i__20039_21849 = G__21866;
continue;
}
} else {
}
}
break;
}

return React.DOM.link.apply(null,a__6249__auto__);
};
var link = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21867__i = 0, G__21867__a = new Array(arguments.length -  0);
while (G__21867__i < G__21867__a.length) {G__21867__a[G__21867__i] = arguments[G__21867__i + 0]; ++G__21867__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21867__a,0);
} 
return link__delegate.call(this,args__6248__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__21868){
var args__6248__auto__ = cljs.core.seq(arglist__21868);
return link__delegate(args__6248__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20044_21869 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20045_21870 = null;
var count__20046_21871 = (0);
var i__20047_21872 = (0);
while(true){
if((i__20047_21872 < count__20046_21871)){
var arg__6250__auto___21873 = cljs.core._nth.call(null,chunk__20045_21870,i__20047_21872);
a__6249__auto__.push(arg__6250__auto___21873);

var G__21874 = seq__20044_21869;
var G__21875 = chunk__20045_21870;
var G__21876 = count__20046_21871;
var G__21877 = (i__20047_21872 + (1));
seq__20044_21869 = G__21874;
chunk__20045_21870 = G__21875;
count__20046_21871 = G__21876;
i__20047_21872 = G__21877;
continue;
} else {
var temp__4126__auto___21878 = cljs.core.seq.call(null,seq__20044_21869);
if(temp__4126__auto___21878){
var seq__20044_21879__$1 = temp__4126__auto___21878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20044_21879__$1)){
var c__4541__auto___21880 = cljs.core.chunk_first.call(null,seq__20044_21879__$1);
var G__21881 = cljs.core.chunk_rest.call(null,seq__20044_21879__$1);
var G__21882 = c__4541__auto___21880;
var G__21883 = cljs.core.count.call(null,c__4541__auto___21880);
var G__21884 = (0);
seq__20044_21869 = G__21881;
chunk__20045_21870 = G__21882;
count__20046_21871 = G__21883;
i__20047_21872 = G__21884;
continue;
} else {
var arg__6250__auto___21885 = cljs.core.first.call(null,seq__20044_21879__$1);
a__6249__auto__.push(arg__6250__auto___21885);

var G__21886 = cljs.core.next.call(null,seq__20044_21879__$1);
var G__21887 = null;
var G__21888 = (0);
var G__21889 = (0);
seq__20044_21869 = G__21886;
chunk__20045_21870 = G__21887;
count__20046_21871 = G__21888;
i__20047_21872 = G__21889;
continue;
}
} else {
}
}
break;
}

return React.DOM.main.apply(null,a__6249__auto__);
};
var main = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21890__i = 0, G__21890__a = new Array(arguments.length -  0);
while (G__21890__i < G__21890__a.length) {G__21890__a[G__21890__i] = arguments[G__21890__i + 0]; ++G__21890__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21890__a,0);
} 
return main__delegate.call(this,args__6248__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__21891){
var args__6248__auto__ = cljs.core.seq(arglist__21891);
return main__delegate(args__6248__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20052_21892 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20053_21893 = null;
var count__20054_21894 = (0);
var i__20055_21895 = (0);
while(true){
if((i__20055_21895 < count__20054_21894)){
var arg__6250__auto___21896 = cljs.core._nth.call(null,chunk__20053_21893,i__20055_21895);
a__6249__auto__.push(arg__6250__auto___21896);

var G__21897 = seq__20052_21892;
var G__21898 = chunk__20053_21893;
var G__21899 = count__20054_21894;
var G__21900 = (i__20055_21895 + (1));
seq__20052_21892 = G__21897;
chunk__20053_21893 = G__21898;
count__20054_21894 = G__21899;
i__20055_21895 = G__21900;
continue;
} else {
var temp__4126__auto___21901 = cljs.core.seq.call(null,seq__20052_21892);
if(temp__4126__auto___21901){
var seq__20052_21902__$1 = temp__4126__auto___21901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20052_21902__$1)){
var c__4541__auto___21903 = cljs.core.chunk_first.call(null,seq__20052_21902__$1);
var G__21904 = cljs.core.chunk_rest.call(null,seq__20052_21902__$1);
var G__21905 = c__4541__auto___21903;
var G__21906 = cljs.core.count.call(null,c__4541__auto___21903);
var G__21907 = (0);
seq__20052_21892 = G__21904;
chunk__20053_21893 = G__21905;
count__20054_21894 = G__21906;
i__20055_21895 = G__21907;
continue;
} else {
var arg__6250__auto___21908 = cljs.core.first.call(null,seq__20052_21902__$1);
a__6249__auto__.push(arg__6250__auto___21908);

var G__21909 = cljs.core.next.call(null,seq__20052_21902__$1);
var G__21910 = null;
var G__21911 = (0);
var G__21912 = (0);
seq__20052_21892 = G__21909;
chunk__20053_21893 = G__21910;
count__20054_21894 = G__21911;
i__20055_21895 = G__21912;
continue;
}
} else {
}
}
break;
}

return React.DOM.map.apply(null,a__6249__auto__);
};
var map = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21913__i = 0, G__21913__a = new Array(arguments.length -  0);
while (G__21913__i < G__21913__a.length) {G__21913__a[G__21913__i] = arguments[G__21913__i + 0]; ++G__21913__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21913__a,0);
} 
return map__delegate.call(this,args__6248__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__21914){
var args__6248__auto__ = cljs.core.seq(arglist__21914);
return map__delegate(args__6248__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20060_21915 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20061_21916 = null;
var count__20062_21917 = (0);
var i__20063_21918 = (0);
while(true){
if((i__20063_21918 < count__20062_21917)){
var arg__6250__auto___21919 = cljs.core._nth.call(null,chunk__20061_21916,i__20063_21918);
a__6249__auto__.push(arg__6250__auto___21919);

var G__21920 = seq__20060_21915;
var G__21921 = chunk__20061_21916;
var G__21922 = count__20062_21917;
var G__21923 = (i__20063_21918 + (1));
seq__20060_21915 = G__21920;
chunk__20061_21916 = G__21921;
count__20062_21917 = G__21922;
i__20063_21918 = G__21923;
continue;
} else {
var temp__4126__auto___21924 = cljs.core.seq.call(null,seq__20060_21915);
if(temp__4126__auto___21924){
var seq__20060_21925__$1 = temp__4126__auto___21924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20060_21925__$1)){
var c__4541__auto___21926 = cljs.core.chunk_first.call(null,seq__20060_21925__$1);
var G__21927 = cljs.core.chunk_rest.call(null,seq__20060_21925__$1);
var G__21928 = c__4541__auto___21926;
var G__21929 = cljs.core.count.call(null,c__4541__auto___21926);
var G__21930 = (0);
seq__20060_21915 = G__21927;
chunk__20061_21916 = G__21928;
count__20062_21917 = G__21929;
i__20063_21918 = G__21930;
continue;
} else {
var arg__6250__auto___21931 = cljs.core.first.call(null,seq__20060_21925__$1);
a__6249__auto__.push(arg__6250__auto___21931);

var G__21932 = cljs.core.next.call(null,seq__20060_21925__$1);
var G__21933 = null;
var G__21934 = (0);
var G__21935 = (0);
seq__20060_21915 = G__21932;
chunk__20061_21916 = G__21933;
count__20062_21917 = G__21934;
i__20063_21918 = G__21935;
continue;
}
} else {
}
}
break;
}

return React.DOM.mark.apply(null,a__6249__auto__);
};
var mark = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21936__i = 0, G__21936__a = new Array(arguments.length -  0);
while (G__21936__i < G__21936__a.length) {G__21936__a[G__21936__i] = arguments[G__21936__i + 0]; ++G__21936__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21936__a,0);
} 
return mark__delegate.call(this,args__6248__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__21937){
var args__6248__auto__ = cljs.core.seq(arglist__21937);
return mark__delegate(args__6248__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20068_21938 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20069_21939 = null;
var count__20070_21940 = (0);
var i__20071_21941 = (0);
while(true){
if((i__20071_21941 < count__20070_21940)){
var arg__6250__auto___21942 = cljs.core._nth.call(null,chunk__20069_21939,i__20071_21941);
a__6249__auto__.push(arg__6250__auto___21942);

var G__21943 = seq__20068_21938;
var G__21944 = chunk__20069_21939;
var G__21945 = count__20070_21940;
var G__21946 = (i__20071_21941 + (1));
seq__20068_21938 = G__21943;
chunk__20069_21939 = G__21944;
count__20070_21940 = G__21945;
i__20071_21941 = G__21946;
continue;
} else {
var temp__4126__auto___21947 = cljs.core.seq.call(null,seq__20068_21938);
if(temp__4126__auto___21947){
var seq__20068_21948__$1 = temp__4126__auto___21947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20068_21948__$1)){
var c__4541__auto___21949 = cljs.core.chunk_first.call(null,seq__20068_21948__$1);
var G__21950 = cljs.core.chunk_rest.call(null,seq__20068_21948__$1);
var G__21951 = c__4541__auto___21949;
var G__21952 = cljs.core.count.call(null,c__4541__auto___21949);
var G__21953 = (0);
seq__20068_21938 = G__21950;
chunk__20069_21939 = G__21951;
count__20070_21940 = G__21952;
i__20071_21941 = G__21953;
continue;
} else {
var arg__6250__auto___21954 = cljs.core.first.call(null,seq__20068_21948__$1);
a__6249__auto__.push(arg__6250__auto___21954);

var G__21955 = cljs.core.next.call(null,seq__20068_21948__$1);
var G__21956 = null;
var G__21957 = (0);
var G__21958 = (0);
seq__20068_21938 = G__21955;
chunk__20069_21939 = G__21956;
count__20070_21940 = G__21957;
i__20071_21941 = G__21958;
continue;
}
} else {
}
}
break;
}

return React.DOM.menu.apply(null,a__6249__auto__);
};
var menu = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21959__i = 0, G__21959__a = new Array(arguments.length -  0);
while (G__21959__i < G__21959__a.length) {G__21959__a[G__21959__i] = arguments[G__21959__i + 0]; ++G__21959__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21959__a,0);
} 
return menu__delegate.call(this,args__6248__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__21960){
var args__6248__auto__ = cljs.core.seq(arglist__21960);
return menu__delegate(args__6248__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20076_21961 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20077_21962 = null;
var count__20078_21963 = (0);
var i__20079_21964 = (0);
while(true){
if((i__20079_21964 < count__20078_21963)){
var arg__6250__auto___21965 = cljs.core._nth.call(null,chunk__20077_21962,i__20079_21964);
a__6249__auto__.push(arg__6250__auto___21965);

var G__21966 = seq__20076_21961;
var G__21967 = chunk__20077_21962;
var G__21968 = count__20078_21963;
var G__21969 = (i__20079_21964 + (1));
seq__20076_21961 = G__21966;
chunk__20077_21962 = G__21967;
count__20078_21963 = G__21968;
i__20079_21964 = G__21969;
continue;
} else {
var temp__4126__auto___21970 = cljs.core.seq.call(null,seq__20076_21961);
if(temp__4126__auto___21970){
var seq__20076_21971__$1 = temp__4126__auto___21970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20076_21971__$1)){
var c__4541__auto___21972 = cljs.core.chunk_first.call(null,seq__20076_21971__$1);
var G__21973 = cljs.core.chunk_rest.call(null,seq__20076_21971__$1);
var G__21974 = c__4541__auto___21972;
var G__21975 = cljs.core.count.call(null,c__4541__auto___21972);
var G__21976 = (0);
seq__20076_21961 = G__21973;
chunk__20077_21962 = G__21974;
count__20078_21963 = G__21975;
i__20079_21964 = G__21976;
continue;
} else {
var arg__6250__auto___21977 = cljs.core.first.call(null,seq__20076_21971__$1);
a__6249__auto__.push(arg__6250__auto___21977);

var G__21978 = cljs.core.next.call(null,seq__20076_21971__$1);
var G__21979 = null;
var G__21980 = (0);
var G__21981 = (0);
seq__20076_21961 = G__21978;
chunk__20077_21962 = G__21979;
count__20078_21963 = G__21980;
i__20079_21964 = G__21981;
continue;
}
} else {
}
}
break;
}

return React.DOM.menuitem.apply(null,a__6249__auto__);
};
var menuitem = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__21982__i = 0, G__21982__a = new Array(arguments.length -  0);
while (G__21982__i < G__21982__a.length) {G__21982__a[G__21982__i] = arguments[G__21982__i + 0]; ++G__21982__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__21982__a,0);
} 
return menuitem__delegate.call(this,args__6248__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__21983){
var args__6248__auto__ = cljs.core.seq(arglist__21983);
return menuitem__delegate(args__6248__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20084_21984 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20085_21985 = null;
var count__20086_21986 = (0);
var i__20087_21987 = (0);
while(true){
if((i__20087_21987 < count__20086_21986)){
var arg__6250__auto___21988 = cljs.core._nth.call(null,chunk__20085_21985,i__20087_21987);
a__6249__auto__.push(arg__6250__auto___21988);

var G__21989 = seq__20084_21984;
var G__21990 = chunk__20085_21985;
var G__21991 = count__20086_21986;
var G__21992 = (i__20087_21987 + (1));
seq__20084_21984 = G__21989;
chunk__20085_21985 = G__21990;
count__20086_21986 = G__21991;
i__20087_21987 = G__21992;
continue;
} else {
var temp__4126__auto___21993 = cljs.core.seq.call(null,seq__20084_21984);
if(temp__4126__auto___21993){
var seq__20084_21994__$1 = temp__4126__auto___21993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20084_21994__$1)){
var c__4541__auto___21995 = cljs.core.chunk_first.call(null,seq__20084_21994__$1);
var G__21996 = cljs.core.chunk_rest.call(null,seq__20084_21994__$1);
var G__21997 = c__4541__auto___21995;
var G__21998 = cljs.core.count.call(null,c__4541__auto___21995);
var G__21999 = (0);
seq__20084_21984 = G__21996;
chunk__20085_21985 = G__21997;
count__20086_21986 = G__21998;
i__20087_21987 = G__21999;
continue;
} else {
var arg__6250__auto___22000 = cljs.core.first.call(null,seq__20084_21994__$1);
a__6249__auto__.push(arg__6250__auto___22000);

var G__22001 = cljs.core.next.call(null,seq__20084_21994__$1);
var G__22002 = null;
var G__22003 = (0);
var G__22004 = (0);
seq__20084_21984 = G__22001;
chunk__20085_21985 = G__22002;
count__20086_21986 = G__22003;
i__20087_21987 = G__22004;
continue;
}
} else {
}
}
break;
}

return React.DOM.meta.apply(null,a__6249__auto__);
};
var meta = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22005__i = 0, G__22005__a = new Array(arguments.length -  0);
while (G__22005__i < G__22005__a.length) {G__22005__a[G__22005__i] = arguments[G__22005__i + 0]; ++G__22005__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22005__a,0);
} 
return meta__delegate.call(this,args__6248__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__22006){
var args__6248__auto__ = cljs.core.seq(arglist__22006);
return meta__delegate(args__6248__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20092_22007 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20093_22008 = null;
var count__20094_22009 = (0);
var i__20095_22010 = (0);
while(true){
if((i__20095_22010 < count__20094_22009)){
var arg__6250__auto___22011 = cljs.core._nth.call(null,chunk__20093_22008,i__20095_22010);
a__6249__auto__.push(arg__6250__auto___22011);

var G__22012 = seq__20092_22007;
var G__22013 = chunk__20093_22008;
var G__22014 = count__20094_22009;
var G__22015 = (i__20095_22010 + (1));
seq__20092_22007 = G__22012;
chunk__20093_22008 = G__22013;
count__20094_22009 = G__22014;
i__20095_22010 = G__22015;
continue;
} else {
var temp__4126__auto___22016 = cljs.core.seq.call(null,seq__20092_22007);
if(temp__4126__auto___22016){
var seq__20092_22017__$1 = temp__4126__auto___22016;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20092_22017__$1)){
var c__4541__auto___22018 = cljs.core.chunk_first.call(null,seq__20092_22017__$1);
var G__22019 = cljs.core.chunk_rest.call(null,seq__20092_22017__$1);
var G__22020 = c__4541__auto___22018;
var G__22021 = cljs.core.count.call(null,c__4541__auto___22018);
var G__22022 = (0);
seq__20092_22007 = G__22019;
chunk__20093_22008 = G__22020;
count__20094_22009 = G__22021;
i__20095_22010 = G__22022;
continue;
} else {
var arg__6250__auto___22023 = cljs.core.first.call(null,seq__20092_22017__$1);
a__6249__auto__.push(arg__6250__auto___22023);

var G__22024 = cljs.core.next.call(null,seq__20092_22017__$1);
var G__22025 = null;
var G__22026 = (0);
var G__22027 = (0);
seq__20092_22007 = G__22024;
chunk__20093_22008 = G__22025;
count__20094_22009 = G__22026;
i__20095_22010 = G__22027;
continue;
}
} else {
}
}
break;
}

return React.DOM.meter.apply(null,a__6249__auto__);
};
var meter = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22028__i = 0, G__22028__a = new Array(arguments.length -  0);
while (G__22028__i < G__22028__a.length) {G__22028__a[G__22028__i] = arguments[G__22028__i + 0]; ++G__22028__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22028__a,0);
} 
return meter__delegate.call(this,args__6248__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__22029){
var args__6248__auto__ = cljs.core.seq(arglist__22029);
return meter__delegate(args__6248__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20100_22030 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20101_22031 = null;
var count__20102_22032 = (0);
var i__20103_22033 = (0);
while(true){
if((i__20103_22033 < count__20102_22032)){
var arg__6250__auto___22034 = cljs.core._nth.call(null,chunk__20101_22031,i__20103_22033);
a__6249__auto__.push(arg__6250__auto___22034);

var G__22035 = seq__20100_22030;
var G__22036 = chunk__20101_22031;
var G__22037 = count__20102_22032;
var G__22038 = (i__20103_22033 + (1));
seq__20100_22030 = G__22035;
chunk__20101_22031 = G__22036;
count__20102_22032 = G__22037;
i__20103_22033 = G__22038;
continue;
} else {
var temp__4126__auto___22039 = cljs.core.seq.call(null,seq__20100_22030);
if(temp__4126__auto___22039){
var seq__20100_22040__$1 = temp__4126__auto___22039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20100_22040__$1)){
var c__4541__auto___22041 = cljs.core.chunk_first.call(null,seq__20100_22040__$1);
var G__22042 = cljs.core.chunk_rest.call(null,seq__20100_22040__$1);
var G__22043 = c__4541__auto___22041;
var G__22044 = cljs.core.count.call(null,c__4541__auto___22041);
var G__22045 = (0);
seq__20100_22030 = G__22042;
chunk__20101_22031 = G__22043;
count__20102_22032 = G__22044;
i__20103_22033 = G__22045;
continue;
} else {
var arg__6250__auto___22046 = cljs.core.first.call(null,seq__20100_22040__$1);
a__6249__auto__.push(arg__6250__auto___22046);

var G__22047 = cljs.core.next.call(null,seq__20100_22040__$1);
var G__22048 = null;
var G__22049 = (0);
var G__22050 = (0);
seq__20100_22030 = G__22047;
chunk__20101_22031 = G__22048;
count__20102_22032 = G__22049;
i__20103_22033 = G__22050;
continue;
}
} else {
}
}
break;
}

return React.DOM.nav.apply(null,a__6249__auto__);
};
var nav = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22051__i = 0, G__22051__a = new Array(arguments.length -  0);
while (G__22051__i < G__22051__a.length) {G__22051__a[G__22051__i] = arguments[G__22051__i + 0]; ++G__22051__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22051__a,0);
} 
return nav__delegate.call(this,args__6248__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__22052){
var args__6248__auto__ = cljs.core.seq(arglist__22052);
return nav__delegate(args__6248__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20108_22053 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20109_22054 = null;
var count__20110_22055 = (0);
var i__20111_22056 = (0);
while(true){
if((i__20111_22056 < count__20110_22055)){
var arg__6250__auto___22057 = cljs.core._nth.call(null,chunk__20109_22054,i__20111_22056);
a__6249__auto__.push(arg__6250__auto___22057);

var G__22058 = seq__20108_22053;
var G__22059 = chunk__20109_22054;
var G__22060 = count__20110_22055;
var G__22061 = (i__20111_22056 + (1));
seq__20108_22053 = G__22058;
chunk__20109_22054 = G__22059;
count__20110_22055 = G__22060;
i__20111_22056 = G__22061;
continue;
} else {
var temp__4126__auto___22062 = cljs.core.seq.call(null,seq__20108_22053);
if(temp__4126__auto___22062){
var seq__20108_22063__$1 = temp__4126__auto___22062;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20108_22063__$1)){
var c__4541__auto___22064 = cljs.core.chunk_first.call(null,seq__20108_22063__$1);
var G__22065 = cljs.core.chunk_rest.call(null,seq__20108_22063__$1);
var G__22066 = c__4541__auto___22064;
var G__22067 = cljs.core.count.call(null,c__4541__auto___22064);
var G__22068 = (0);
seq__20108_22053 = G__22065;
chunk__20109_22054 = G__22066;
count__20110_22055 = G__22067;
i__20111_22056 = G__22068;
continue;
} else {
var arg__6250__auto___22069 = cljs.core.first.call(null,seq__20108_22063__$1);
a__6249__auto__.push(arg__6250__auto___22069);

var G__22070 = cljs.core.next.call(null,seq__20108_22063__$1);
var G__22071 = null;
var G__22072 = (0);
var G__22073 = (0);
seq__20108_22053 = G__22070;
chunk__20109_22054 = G__22071;
count__20110_22055 = G__22072;
i__20111_22056 = G__22073;
continue;
}
} else {
}
}
break;
}

return React.DOM.noscript.apply(null,a__6249__auto__);
};
var noscript = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22074__i = 0, G__22074__a = new Array(arguments.length -  0);
while (G__22074__i < G__22074__a.length) {G__22074__a[G__22074__i] = arguments[G__22074__i + 0]; ++G__22074__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22074__a,0);
} 
return noscript__delegate.call(this,args__6248__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__22075){
var args__6248__auto__ = cljs.core.seq(arglist__22075);
return noscript__delegate(args__6248__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20116_22076 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20117_22077 = null;
var count__20118_22078 = (0);
var i__20119_22079 = (0);
while(true){
if((i__20119_22079 < count__20118_22078)){
var arg__6250__auto___22080 = cljs.core._nth.call(null,chunk__20117_22077,i__20119_22079);
a__6249__auto__.push(arg__6250__auto___22080);

var G__22081 = seq__20116_22076;
var G__22082 = chunk__20117_22077;
var G__22083 = count__20118_22078;
var G__22084 = (i__20119_22079 + (1));
seq__20116_22076 = G__22081;
chunk__20117_22077 = G__22082;
count__20118_22078 = G__22083;
i__20119_22079 = G__22084;
continue;
} else {
var temp__4126__auto___22085 = cljs.core.seq.call(null,seq__20116_22076);
if(temp__4126__auto___22085){
var seq__20116_22086__$1 = temp__4126__auto___22085;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20116_22086__$1)){
var c__4541__auto___22087 = cljs.core.chunk_first.call(null,seq__20116_22086__$1);
var G__22088 = cljs.core.chunk_rest.call(null,seq__20116_22086__$1);
var G__22089 = c__4541__auto___22087;
var G__22090 = cljs.core.count.call(null,c__4541__auto___22087);
var G__22091 = (0);
seq__20116_22076 = G__22088;
chunk__20117_22077 = G__22089;
count__20118_22078 = G__22090;
i__20119_22079 = G__22091;
continue;
} else {
var arg__6250__auto___22092 = cljs.core.first.call(null,seq__20116_22086__$1);
a__6249__auto__.push(arg__6250__auto___22092);

var G__22093 = cljs.core.next.call(null,seq__20116_22086__$1);
var G__22094 = null;
var G__22095 = (0);
var G__22096 = (0);
seq__20116_22076 = G__22093;
chunk__20117_22077 = G__22094;
count__20118_22078 = G__22095;
i__20119_22079 = G__22096;
continue;
}
} else {
}
}
break;
}

return React.DOM.object.apply(null,a__6249__auto__);
};
var object = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22097__i = 0, G__22097__a = new Array(arguments.length -  0);
while (G__22097__i < G__22097__a.length) {G__22097__a[G__22097__i] = arguments[G__22097__i + 0]; ++G__22097__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22097__a,0);
} 
return object__delegate.call(this,args__6248__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__22098){
var args__6248__auto__ = cljs.core.seq(arglist__22098);
return object__delegate(args__6248__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20124_22099 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20125_22100 = null;
var count__20126_22101 = (0);
var i__20127_22102 = (0);
while(true){
if((i__20127_22102 < count__20126_22101)){
var arg__6250__auto___22103 = cljs.core._nth.call(null,chunk__20125_22100,i__20127_22102);
a__6249__auto__.push(arg__6250__auto___22103);

var G__22104 = seq__20124_22099;
var G__22105 = chunk__20125_22100;
var G__22106 = count__20126_22101;
var G__22107 = (i__20127_22102 + (1));
seq__20124_22099 = G__22104;
chunk__20125_22100 = G__22105;
count__20126_22101 = G__22106;
i__20127_22102 = G__22107;
continue;
} else {
var temp__4126__auto___22108 = cljs.core.seq.call(null,seq__20124_22099);
if(temp__4126__auto___22108){
var seq__20124_22109__$1 = temp__4126__auto___22108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20124_22109__$1)){
var c__4541__auto___22110 = cljs.core.chunk_first.call(null,seq__20124_22109__$1);
var G__22111 = cljs.core.chunk_rest.call(null,seq__20124_22109__$1);
var G__22112 = c__4541__auto___22110;
var G__22113 = cljs.core.count.call(null,c__4541__auto___22110);
var G__22114 = (0);
seq__20124_22099 = G__22111;
chunk__20125_22100 = G__22112;
count__20126_22101 = G__22113;
i__20127_22102 = G__22114;
continue;
} else {
var arg__6250__auto___22115 = cljs.core.first.call(null,seq__20124_22109__$1);
a__6249__auto__.push(arg__6250__auto___22115);

var G__22116 = cljs.core.next.call(null,seq__20124_22109__$1);
var G__22117 = null;
var G__22118 = (0);
var G__22119 = (0);
seq__20124_22099 = G__22116;
chunk__20125_22100 = G__22117;
count__20126_22101 = G__22118;
i__20127_22102 = G__22119;
continue;
}
} else {
}
}
break;
}

return React.DOM.ol.apply(null,a__6249__auto__);
};
var ol = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22120__i = 0, G__22120__a = new Array(arguments.length -  0);
while (G__22120__i < G__22120__a.length) {G__22120__a[G__22120__i] = arguments[G__22120__i + 0]; ++G__22120__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22120__a,0);
} 
return ol__delegate.call(this,args__6248__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__22121){
var args__6248__auto__ = cljs.core.seq(arglist__22121);
return ol__delegate(args__6248__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20132_22122 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20133_22123 = null;
var count__20134_22124 = (0);
var i__20135_22125 = (0);
while(true){
if((i__20135_22125 < count__20134_22124)){
var arg__6250__auto___22126 = cljs.core._nth.call(null,chunk__20133_22123,i__20135_22125);
a__6249__auto__.push(arg__6250__auto___22126);

var G__22127 = seq__20132_22122;
var G__22128 = chunk__20133_22123;
var G__22129 = count__20134_22124;
var G__22130 = (i__20135_22125 + (1));
seq__20132_22122 = G__22127;
chunk__20133_22123 = G__22128;
count__20134_22124 = G__22129;
i__20135_22125 = G__22130;
continue;
} else {
var temp__4126__auto___22131 = cljs.core.seq.call(null,seq__20132_22122);
if(temp__4126__auto___22131){
var seq__20132_22132__$1 = temp__4126__auto___22131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20132_22132__$1)){
var c__4541__auto___22133 = cljs.core.chunk_first.call(null,seq__20132_22132__$1);
var G__22134 = cljs.core.chunk_rest.call(null,seq__20132_22132__$1);
var G__22135 = c__4541__auto___22133;
var G__22136 = cljs.core.count.call(null,c__4541__auto___22133);
var G__22137 = (0);
seq__20132_22122 = G__22134;
chunk__20133_22123 = G__22135;
count__20134_22124 = G__22136;
i__20135_22125 = G__22137;
continue;
} else {
var arg__6250__auto___22138 = cljs.core.first.call(null,seq__20132_22132__$1);
a__6249__auto__.push(arg__6250__auto___22138);

var G__22139 = cljs.core.next.call(null,seq__20132_22132__$1);
var G__22140 = null;
var G__22141 = (0);
var G__22142 = (0);
seq__20132_22122 = G__22139;
chunk__20133_22123 = G__22140;
count__20134_22124 = G__22141;
i__20135_22125 = G__22142;
continue;
}
} else {
}
}
break;
}

return React.DOM.optgroup.apply(null,a__6249__auto__);
};
var optgroup = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22143__i = 0, G__22143__a = new Array(arguments.length -  0);
while (G__22143__i < G__22143__a.length) {G__22143__a[G__22143__i] = arguments[G__22143__i + 0]; ++G__22143__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22143__a,0);
} 
return optgroup__delegate.call(this,args__6248__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__22144){
var args__6248__auto__ = cljs.core.seq(arglist__22144);
return optgroup__delegate(args__6248__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20140_22145 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20141_22146 = null;
var count__20142_22147 = (0);
var i__20143_22148 = (0);
while(true){
if((i__20143_22148 < count__20142_22147)){
var arg__6250__auto___22149 = cljs.core._nth.call(null,chunk__20141_22146,i__20143_22148);
a__6249__auto__.push(arg__6250__auto___22149);

var G__22150 = seq__20140_22145;
var G__22151 = chunk__20141_22146;
var G__22152 = count__20142_22147;
var G__22153 = (i__20143_22148 + (1));
seq__20140_22145 = G__22150;
chunk__20141_22146 = G__22151;
count__20142_22147 = G__22152;
i__20143_22148 = G__22153;
continue;
} else {
var temp__4126__auto___22154 = cljs.core.seq.call(null,seq__20140_22145);
if(temp__4126__auto___22154){
var seq__20140_22155__$1 = temp__4126__auto___22154;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20140_22155__$1)){
var c__4541__auto___22156 = cljs.core.chunk_first.call(null,seq__20140_22155__$1);
var G__22157 = cljs.core.chunk_rest.call(null,seq__20140_22155__$1);
var G__22158 = c__4541__auto___22156;
var G__22159 = cljs.core.count.call(null,c__4541__auto___22156);
var G__22160 = (0);
seq__20140_22145 = G__22157;
chunk__20141_22146 = G__22158;
count__20142_22147 = G__22159;
i__20143_22148 = G__22160;
continue;
} else {
var arg__6250__auto___22161 = cljs.core.first.call(null,seq__20140_22155__$1);
a__6249__auto__.push(arg__6250__auto___22161);

var G__22162 = cljs.core.next.call(null,seq__20140_22155__$1);
var G__22163 = null;
var G__22164 = (0);
var G__22165 = (0);
seq__20140_22145 = G__22162;
chunk__20141_22146 = G__22163;
count__20142_22147 = G__22164;
i__20143_22148 = G__22165;
continue;
}
} else {
}
}
break;
}

return React.DOM.option.apply(null,a__6249__auto__);
};
var option = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22166__i = 0, G__22166__a = new Array(arguments.length -  0);
while (G__22166__i < G__22166__a.length) {G__22166__a[G__22166__i] = arguments[G__22166__i + 0]; ++G__22166__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22166__a,0);
} 
return option__delegate.call(this,args__6248__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__22167){
var args__6248__auto__ = cljs.core.seq(arglist__22167);
return option__delegate(args__6248__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20148_22168 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20149_22169 = null;
var count__20150_22170 = (0);
var i__20151_22171 = (0);
while(true){
if((i__20151_22171 < count__20150_22170)){
var arg__6250__auto___22172 = cljs.core._nth.call(null,chunk__20149_22169,i__20151_22171);
a__6249__auto__.push(arg__6250__auto___22172);

var G__22173 = seq__20148_22168;
var G__22174 = chunk__20149_22169;
var G__22175 = count__20150_22170;
var G__22176 = (i__20151_22171 + (1));
seq__20148_22168 = G__22173;
chunk__20149_22169 = G__22174;
count__20150_22170 = G__22175;
i__20151_22171 = G__22176;
continue;
} else {
var temp__4126__auto___22177 = cljs.core.seq.call(null,seq__20148_22168);
if(temp__4126__auto___22177){
var seq__20148_22178__$1 = temp__4126__auto___22177;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20148_22178__$1)){
var c__4541__auto___22179 = cljs.core.chunk_first.call(null,seq__20148_22178__$1);
var G__22180 = cljs.core.chunk_rest.call(null,seq__20148_22178__$1);
var G__22181 = c__4541__auto___22179;
var G__22182 = cljs.core.count.call(null,c__4541__auto___22179);
var G__22183 = (0);
seq__20148_22168 = G__22180;
chunk__20149_22169 = G__22181;
count__20150_22170 = G__22182;
i__20151_22171 = G__22183;
continue;
} else {
var arg__6250__auto___22184 = cljs.core.first.call(null,seq__20148_22178__$1);
a__6249__auto__.push(arg__6250__auto___22184);

var G__22185 = cljs.core.next.call(null,seq__20148_22178__$1);
var G__22186 = null;
var G__22187 = (0);
var G__22188 = (0);
seq__20148_22168 = G__22185;
chunk__20149_22169 = G__22186;
count__20150_22170 = G__22187;
i__20151_22171 = G__22188;
continue;
}
} else {
}
}
break;
}

return React.DOM.output.apply(null,a__6249__auto__);
};
var output = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22189__i = 0, G__22189__a = new Array(arguments.length -  0);
while (G__22189__i < G__22189__a.length) {G__22189__a[G__22189__i] = arguments[G__22189__i + 0]; ++G__22189__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22189__a,0);
} 
return output__delegate.call(this,args__6248__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__22190){
var args__6248__auto__ = cljs.core.seq(arglist__22190);
return output__delegate(args__6248__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20156_22191 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20157_22192 = null;
var count__20158_22193 = (0);
var i__20159_22194 = (0);
while(true){
if((i__20159_22194 < count__20158_22193)){
var arg__6250__auto___22195 = cljs.core._nth.call(null,chunk__20157_22192,i__20159_22194);
a__6249__auto__.push(arg__6250__auto___22195);

var G__22196 = seq__20156_22191;
var G__22197 = chunk__20157_22192;
var G__22198 = count__20158_22193;
var G__22199 = (i__20159_22194 + (1));
seq__20156_22191 = G__22196;
chunk__20157_22192 = G__22197;
count__20158_22193 = G__22198;
i__20159_22194 = G__22199;
continue;
} else {
var temp__4126__auto___22200 = cljs.core.seq.call(null,seq__20156_22191);
if(temp__4126__auto___22200){
var seq__20156_22201__$1 = temp__4126__auto___22200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20156_22201__$1)){
var c__4541__auto___22202 = cljs.core.chunk_first.call(null,seq__20156_22201__$1);
var G__22203 = cljs.core.chunk_rest.call(null,seq__20156_22201__$1);
var G__22204 = c__4541__auto___22202;
var G__22205 = cljs.core.count.call(null,c__4541__auto___22202);
var G__22206 = (0);
seq__20156_22191 = G__22203;
chunk__20157_22192 = G__22204;
count__20158_22193 = G__22205;
i__20159_22194 = G__22206;
continue;
} else {
var arg__6250__auto___22207 = cljs.core.first.call(null,seq__20156_22201__$1);
a__6249__auto__.push(arg__6250__auto___22207);

var G__22208 = cljs.core.next.call(null,seq__20156_22201__$1);
var G__22209 = null;
var G__22210 = (0);
var G__22211 = (0);
seq__20156_22191 = G__22208;
chunk__20157_22192 = G__22209;
count__20158_22193 = G__22210;
i__20159_22194 = G__22211;
continue;
}
} else {
}
}
break;
}

return React.DOM.p.apply(null,a__6249__auto__);
};
var p = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22212__i = 0, G__22212__a = new Array(arguments.length -  0);
while (G__22212__i < G__22212__a.length) {G__22212__a[G__22212__i] = arguments[G__22212__i + 0]; ++G__22212__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22212__a,0);
} 
return p__delegate.call(this,args__6248__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__22213){
var args__6248__auto__ = cljs.core.seq(arglist__22213);
return p__delegate(args__6248__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20164_22214 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20165_22215 = null;
var count__20166_22216 = (0);
var i__20167_22217 = (0);
while(true){
if((i__20167_22217 < count__20166_22216)){
var arg__6250__auto___22218 = cljs.core._nth.call(null,chunk__20165_22215,i__20167_22217);
a__6249__auto__.push(arg__6250__auto___22218);

var G__22219 = seq__20164_22214;
var G__22220 = chunk__20165_22215;
var G__22221 = count__20166_22216;
var G__22222 = (i__20167_22217 + (1));
seq__20164_22214 = G__22219;
chunk__20165_22215 = G__22220;
count__20166_22216 = G__22221;
i__20167_22217 = G__22222;
continue;
} else {
var temp__4126__auto___22223 = cljs.core.seq.call(null,seq__20164_22214);
if(temp__4126__auto___22223){
var seq__20164_22224__$1 = temp__4126__auto___22223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20164_22224__$1)){
var c__4541__auto___22225 = cljs.core.chunk_first.call(null,seq__20164_22224__$1);
var G__22226 = cljs.core.chunk_rest.call(null,seq__20164_22224__$1);
var G__22227 = c__4541__auto___22225;
var G__22228 = cljs.core.count.call(null,c__4541__auto___22225);
var G__22229 = (0);
seq__20164_22214 = G__22226;
chunk__20165_22215 = G__22227;
count__20166_22216 = G__22228;
i__20167_22217 = G__22229;
continue;
} else {
var arg__6250__auto___22230 = cljs.core.first.call(null,seq__20164_22224__$1);
a__6249__auto__.push(arg__6250__auto___22230);

var G__22231 = cljs.core.next.call(null,seq__20164_22224__$1);
var G__22232 = null;
var G__22233 = (0);
var G__22234 = (0);
seq__20164_22214 = G__22231;
chunk__20165_22215 = G__22232;
count__20166_22216 = G__22233;
i__20167_22217 = G__22234;
continue;
}
} else {
}
}
break;
}

return React.DOM.param.apply(null,a__6249__auto__);
};
var param = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22235__i = 0, G__22235__a = new Array(arguments.length -  0);
while (G__22235__i < G__22235__a.length) {G__22235__a[G__22235__i] = arguments[G__22235__i + 0]; ++G__22235__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22235__a,0);
} 
return param__delegate.call(this,args__6248__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__22236){
var args__6248__auto__ = cljs.core.seq(arglist__22236);
return param__delegate(args__6248__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20172_22237 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20173_22238 = null;
var count__20174_22239 = (0);
var i__20175_22240 = (0);
while(true){
if((i__20175_22240 < count__20174_22239)){
var arg__6250__auto___22241 = cljs.core._nth.call(null,chunk__20173_22238,i__20175_22240);
a__6249__auto__.push(arg__6250__auto___22241);

var G__22242 = seq__20172_22237;
var G__22243 = chunk__20173_22238;
var G__22244 = count__20174_22239;
var G__22245 = (i__20175_22240 + (1));
seq__20172_22237 = G__22242;
chunk__20173_22238 = G__22243;
count__20174_22239 = G__22244;
i__20175_22240 = G__22245;
continue;
} else {
var temp__4126__auto___22246 = cljs.core.seq.call(null,seq__20172_22237);
if(temp__4126__auto___22246){
var seq__20172_22247__$1 = temp__4126__auto___22246;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20172_22247__$1)){
var c__4541__auto___22248 = cljs.core.chunk_first.call(null,seq__20172_22247__$1);
var G__22249 = cljs.core.chunk_rest.call(null,seq__20172_22247__$1);
var G__22250 = c__4541__auto___22248;
var G__22251 = cljs.core.count.call(null,c__4541__auto___22248);
var G__22252 = (0);
seq__20172_22237 = G__22249;
chunk__20173_22238 = G__22250;
count__20174_22239 = G__22251;
i__20175_22240 = G__22252;
continue;
} else {
var arg__6250__auto___22253 = cljs.core.first.call(null,seq__20172_22247__$1);
a__6249__auto__.push(arg__6250__auto___22253);

var G__22254 = cljs.core.next.call(null,seq__20172_22247__$1);
var G__22255 = null;
var G__22256 = (0);
var G__22257 = (0);
seq__20172_22237 = G__22254;
chunk__20173_22238 = G__22255;
count__20174_22239 = G__22256;
i__20175_22240 = G__22257;
continue;
}
} else {
}
}
break;
}

return React.DOM.pre.apply(null,a__6249__auto__);
};
var pre = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22258__i = 0, G__22258__a = new Array(arguments.length -  0);
while (G__22258__i < G__22258__a.length) {G__22258__a[G__22258__i] = arguments[G__22258__i + 0]; ++G__22258__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22258__a,0);
} 
return pre__delegate.call(this,args__6248__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__22259){
var args__6248__auto__ = cljs.core.seq(arglist__22259);
return pre__delegate(args__6248__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20180_22260 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20181_22261 = null;
var count__20182_22262 = (0);
var i__20183_22263 = (0);
while(true){
if((i__20183_22263 < count__20182_22262)){
var arg__6250__auto___22264 = cljs.core._nth.call(null,chunk__20181_22261,i__20183_22263);
a__6249__auto__.push(arg__6250__auto___22264);

var G__22265 = seq__20180_22260;
var G__22266 = chunk__20181_22261;
var G__22267 = count__20182_22262;
var G__22268 = (i__20183_22263 + (1));
seq__20180_22260 = G__22265;
chunk__20181_22261 = G__22266;
count__20182_22262 = G__22267;
i__20183_22263 = G__22268;
continue;
} else {
var temp__4126__auto___22269 = cljs.core.seq.call(null,seq__20180_22260);
if(temp__4126__auto___22269){
var seq__20180_22270__$1 = temp__4126__auto___22269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20180_22270__$1)){
var c__4541__auto___22271 = cljs.core.chunk_first.call(null,seq__20180_22270__$1);
var G__22272 = cljs.core.chunk_rest.call(null,seq__20180_22270__$1);
var G__22273 = c__4541__auto___22271;
var G__22274 = cljs.core.count.call(null,c__4541__auto___22271);
var G__22275 = (0);
seq__20180_22260 = G__22272;
chunk__20181_22261 = G__22273;
count__20182_22262 = G__22274;
i__20183_22263 = G__22275;
continue;
} else {
var arg__6250__auto___22276 = cljs.core.first.call(null,seq__20180_22270__$1);
a__6249__auto__.push(arg__6250__auto___22276);

var G__22277 = cljs.core.next.call(null,seq__20180_22270__$1);
var G__22278 = null;
var G__22279 = (0);
var G__22280 = (0);
seq__20180_22260 = G__22277;
chunk__20181_22261 = G__22278;
count__20182_22262 = G__22279;
i__20183_22263 = G__22280;
continue;
}
} else {
}
}
break;
}

return React.DOM.progress.apply(null,a__6249__auto__);
};
var progress = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22281__i = 0, G__22281__a = new Array(arguments.length -  0);
while (G__22281__i < G__22281__a.length) {G__22281__a[G__22281__i] = arguments[G__22281__i + 0]; ++G__22281__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22281__a,0);
} 
return progress__delegate.call(this,args__6248__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__22282){
var args__6248__auto__ = cljs.core.seq(arglist__22282);
return progress__delegate(args__6248__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20188_22283 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20189_22284 = null;
var count__20190_22285 = (0);
var i__20191_22286 = (0);
while(true){
if((i__20191_22286 < count__20190_22285)){
var arg__6250__auto___22287 = cljs.core._nth.call(null,chunk__20189_22284,i__20191_22286);
a__6249__auto__.push(arg__6250__auto___22287);

var G__22288 = seq__20188_22283;
var G__22289 = chunk__20189_22284;
var G__22290 = count__20190_22285;
var G__22291 = (i__20191_22286 + (1));
seq__20188_22283 = G__22288;
chunk__20189_22284 = G__22289;
count__20190_22285 = G__22290;
i__20191_22286 = G__22291;
continue;
} else {
var temp__4126__auto___22292 = cljs.core.seq.call(null,seq__20188_22283);
if(temp__4126__auto___22292){
var seq__20188_22293__$1 = temp__4126__auto___22292;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20188_22293__$1)){
var c__4541__auto___22294 = cljs.core.chunk_first.call(null,seq__20188_22293__$1);
var G__22295 = cljs.core.chunk_rest.call(null,seq__20188_22293__$1);
var G__22296 = c__4541__auto___22294;
var G__22297 = cljs.core.count.call(null,c__4541__auto___22294);
var G__22298 = (0);
seq__20188_22283 = G__22295;
chunk__20189_22284 = G__22296;
count__20190_22285 = G__22297;
i__20191_22286 = G__22298;
continue;
} else {
var arg__6250__auto___22299 = cljs.core.first.call(null,seq__20188_22293__$1);
a__6249__auto__.push(arg__6250__auto___22299);

var G__22300 = cljs.core.next.call(null,seq__20188_22293__$1);
var G__22301 = null;
var G__22302 = (0);
var G__22303 = (0);
seq__20188_22283 = G__22300;
chunk__20189_22284 = G__22301;
count__20190_22285 = G__22302;
i__20191_22286 = G__22303;
continue;
}
} else {
}
}
break;
}

return React.DOM.q.apply(null,a__6249__auto__);
};
var q = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22304__i = 0, G__22304__a = new Array(arguments.length -  0);
while (G__22304__i < G__22304__a.length) {G__22304__a[G__22304__i] = arguments[G__22304__i + 0]; ++G__22304__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22304__a,0);
} 
return q__delegate.call(this,args__6248__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__22305){
var args__6248__auto__ = cljs.core.seq(arglist__22305);
return q__delegate(args__6248__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20196_22306 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20197_22307 = null;
var count__20198_22308 = (0);
var i__20199_22309 = (0);
while(true){
if((i__20199_22309 < count__20198_22308)){
var arg__6250__auto___22310 = cljs.core._nth.call(null,chunk__20197_22307,i__20199_22309);
a__6249__auto__.push(arg__6250__auto___22310);

var G__22311 = seq__20196_22306;
var G__22312 = chunk__20197_22307;
var G__22313 = count__20198_22308;
var G__22314 = (i__20199_22309 + (1));
seq__20196_22306 = G__22311;
chunk__20197_22307 = G__22312;
count__20198_22308 = G__22313;
i__20199_22309 = G__22314;
continue;
} else {
var temp__4126__auto___22315 = cljs.core.seq.call(null,seq__20196_22306);
if(temp__4126__auto___22315){
var seq__20196_22316__$1 = temp__4126__auto___22315;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20196_22316__$1)){
var c__4541__auto___22317 = cljs.core.chunk_first.call(null,seq__20196_22316__$1);
var G__22318 = cljs.core.chunk_rest.call(null,seq__20196_22316__$1);
var G__22319 = c__4541__auto___22317;
var G__22320 = cljs.core.count.call(null,c__4541__auto___22317);
var G__22321 = (0);
seq__20196_22306 = G__22318;
chunk__20197_22307 = G__22319;
count__20198_22308 = G__22320;
i__20199_22309 = G__22321;
continue;
} else {
var arg__6250__auto___22322 = cljs.core.first.call(null,seq__20196_22316__$1);
a__6249__auto__.push(arg__6250__auto___22322);

var G__22323 = cljs.core.next.call(null,seq__20196_22316__$1);
var G__22324 = null;
var G__22325 = (0);
var G__22326 = (0);
seq__20196_22306 = G__22323;
chunk__20197_22307 = G__22324;
count__20198_22308 = G__22325;
i__20199_22309 = G__22326;
continue;
}
} else {
}
}
break;
}

return React.DOM.rp.apply(null,a__6249__auto__);
};
var rp = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22327__i = 0, G__22327__a = new Array(arguments.length -  0);
while (G__22327__i < G__22327__a.length) {G__22327__a[G__22327__i] = arguments[G__22327__i + 0]; ++G__22327__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22327__a,0);
} 
return rp__delegate.call(this,args__6248__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__22328){
var args__6248__auto__ = cljs.core.seq(arglist__22328);
return rp__delegate(args__6248__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20204_22329 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20205_22330 = null;
var count__20206_22331 = (0);
var i__20207_22332 = (0);
while(true){
if((i__20207_22332 < count__20206_22331)){
var arg__6250__auto___22333 = cljs.core._nth.call(null,chunk__20205_22330,i__20207_22332);
a__6249__auto__.push(arg__6250__auto___22333);

var G__22334 = seq__20204_22329;
var G__22335 = chunk__20205_22330;
var G__22336 = count__20206_22331;
var G__22337 = (i__20207_22332 + (1));
seq__20204_22329 = G__22334;
chunk__20205_22330 = G__22335;
count__20206_22331 = G__22336;
i__20207_22332 = G__22337;
continue;
} else {
var temp__4126__auto___22338 = cljs.core.seq.call(null,seq__20204_22329);
if(temp__4126__auto___22338){
var seq__20204_22339__$1 = temp__4126__auto___22338;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20204_22339__$1)){
var c__4541__auto___22340 = cljs.core.chunk_first.call(null,seq__20204_22339__$1);
var G__22341 = cljs.core.chunk_rest.call(null,seq__20204_22339__$1);
var G__22342 = c__4541__auto___22340;
var G__22343 = cljs.core.count.call(null,c__4541__auto___22340);
var G__22344 = (0);
seq__20204_22329 = G__22341;
chunk__20205_22330 = G__22342;
count__20206_22331 = G__22343;
i__20207_22332 = G__22344;
continue;
} else {
var arg__6250__auto___22345 = cljs.core.first.call(null,seq__20204_22339__$1);
a__6249__auto__.push(arg__6250__auto___22345);

var G__22346 = cljs.core.next.call(null,seq__20204_22339__$1);
var G__22347 = null;
var G__22348 = (0);
var G__22349 = (0);
seq__20204_22329 = G__22346;
chunk__20205_22330 = G__22347;
count__20206_22331 = G__22348;
i__20207_22332 = G__22349;
continue;
}
} else {
}
}
break;
}

return React.DOM.rt.apply(null,a__6249__auto__);
};
var rt = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22350__i = 0, G__22350__a = new Array(arguments.length -  0);
while (G__22350__i < G__22350__a.length) {G__22350__a[G__22350__i] = arguments[G__22350__i + 0]; ++G__22350__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22350__a,0);
} 
return rt__delegate.call(this,args__6248__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__22351){
var args__6248__auto__ = cljs.core.seq(arglist__22351);
return rt__delegate(args__6248__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20212_22352 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20213_22353 = null;
var count__20214_22354 = (0);
var i__20215_22355 = (0);
while(true){
if((i__20215_22355 < count__20214_22354)){
var arg__6250__auto___22356 = cljs.core._nth.call(null,chunk__20213_22353,i__20215_22355);
a__6249__auto__.push(arg__6250__auto___22356);

var G__22357 = seq__20212_22352;
var G__22358 = chunk__20213_22353;
var G__22359 = count__20214_22354;
var G__22360 = (i__20215_22355 + (1));
seq__20212_22352 = G__22357;
chunk__20213_22353 = G__22358;
count__20214_22354 = G__22359;
i__20215_22355 = G__22360;
continue;
} else {
var temp__4126__auto___22361 = cljs.core.seq.call(null,seq__20212_22352);
if(temp__4126__auto___22361){
var seq__20212_22362__$1 = temp__4126__auto___22361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20212_22362__$1)){
var c__4541__auto___22363 = cljs.core.chunk_first.call(null,seq__20212_22362__$1);
var G__22364 = cljs.core.chunk_rest.call(null,seq__20212_22362__$1);
var G__22365 = c__4541__auto___22363;
var G__22366 = cljs.core.count.call(null,c__4541__auto___22363);
var G__22367 = (0);
seq__20212_22352 = G__22364;
chunk__20213_22353 = G__22365;
count__20214_22354 = G__22366;
i__20215_22355 = G__22367;
continue;
} else {
var arg__6250__auto___22368 = cljs.core.first.call(null,seq__20212_22362__$1);
a__6249__auto__.push(arg__6250__auto___22368);

var G__22369 = cljs.core.next.call(null,seq__20212_22362__$1);
var G__22370 = null;
var G__22371 = (0);
var G__22372 = (0);
seq__20212_22352 = G__22369;
chunk__20213_22353 = G__22370;
count__20214_22354 = G__22371;
i__20215_22355 = G__22372;
continue;
}
} else {
}
}
break;
}

return React.DOM.ruby.apply(null,a__6249__auto__);
};
var ruby = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22373__i = 0, G__22373__a = new Array(arguments.length -  0);
while (G__22373__i < G__22373__a.length) {G__22373__a[G__22373__i] = arguments[G__22373__i + 0]; ++G__22373__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22373__a,0);
} 
return ruby__delegate.call(this,args__6248__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__22374){
var args__6248__auto__ = cljs.core.seq(arglist__22374);
return ruby__delegate(args__6248__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20220_22375 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20221_22376 = null;
var count__20222_22377 = (0);
var i__20223_22378 = (0);
while(true){
if((i__20223_22378 < count__20222_22377)){
var arg__6250__auto___22379 = cljs.core._nth.call(null,chunk__20221_22376,i__20223_22378);
a__6249__auto__.push(arg__6250__auto___22379);

var G__22380 = seq__20220_22375;
var G__22381 = chunk__20221_22376;
var G__22382 = count__20222_22377;
var G__22383 = (i__20223_22378 + (1));
seq__20220_22375 = G__22380;
chunk__20221_22376 = G__22381;
count__20222_22377 = G__22382;
i__20223_22378 = G__22383;
continue;
} else {
var temp__4126__auto___22384 = cljs.core.seq.call(null,seq__20220_22375);
if(temp__4126__auto___22384){
var seq__20220_22385__$1 = temp__4126__auto___22384;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20220_22385__$1)){
var c__4541__auto___22386 = cljs.core.chunk_first.call(null,seq__20220_22385__$1);
var G__22387 = cljs.core.chunk_rest.call(null,seq__20220_22385__$1);
var G__22388 = c__4541__auto___22386;
var G__22389 = cljs.core.count.call(null,c__4541__auto___22386);
var G__22390 = (0);
seq__20220_22375 = G__22387;
chunk__20221_22376 = G__22388;
count__20222_22377 = G__22389;
i__20223_22378 = G__22390;
continue;
} else {
var arg__6250__auto___22391 = cljs.core.first.call(null,seq__20220_22385__$1);
a__6249__auto__.push(arg__6250__auto___22391);

var G__22392 = cljs.core.next.call(null,seq__20220_22385__$1);
var G__22393 = null;
var G__22394 = (0);
var G__22395 = (0);
seq__20220_22375 = G__22392;
chunk__20221_22376 = G__22393;
count__20222_22377 = G__22394;
i__20223_22378 = G__22395;
continue;
}
} else {
}
}
break;
}

return React.DOM.s.apply(null,a__6249__auto__);
};
var s = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22396__i = 0, G__22396__a = new Array(arguments.length -  0);
while (G__22396__i < G__22396__a.length) {G__22396__a[G__22396__i] = arguments[G__22396__i + 0]; ++G__22396__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22396__a,0);
} 
return s__delegate.call(this,args__6248__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__22397){
var args__6248__auto__ = cljs.core.seq(arglist__22397);
return s__delegate(args__6248__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20228_22398 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20229_22399 = null;
var count__20230_22400 = (0);
var i__20231_22401 = (0);
while(true){
if((i__20231_22401 < count__20230_22400)){
var arg__6250__auto___22402 = cljs.core._nth.call(null,chunk__20229_22399,i__20231_22401);
a__6249__auto__.push(arg__6250__auto___22402);

var G__22403 = seq__20228_22398;
var G__22404 = chunk__20229_22399;
var G__22405 = count__20230_22400;
var G__22406 = (i__20231_22401 + (1));
seq__20228_22398 = G__22403;
chunk__20229_22399 = G__22404;
count__20230_22400 = G__22405;
i__20231_22401 = G__22406;
continue;
} else {
var temp__4126__auto___22407 = cljs.core.seq.call(null,seq__20228_22398);
if(temp__4126__auto___22407){
var seq__20228_22408__$1 = temp__4126__auto___22407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20228_22408__$1)){
var c__4541__auto___22409 = cljs.core.chunk_first.call(null,seq__20228_22408__$1);
var G__22410 = cljs.core.chunk_rest.call(null,seq__20228_22408__$1);
var G__22411 = c__4541__auto___22409;
var G__22412 = cljs.core.count.call(null,c__4541__auto___22409);
var G__22413 = (0);
seq__20228_22398 = G__22410;
chunk__20229_22399 = G__22411;
count__20230_22400 = G__22412;
i__20231_22401 = G__22413;
continue;
} else {
var arg__6250__auto___22414 = cljs.core.first.call(null,seq__20228_22408__$1);
a__6249__auto__.push(arg__6250__auto___22414);

var G__22415 = cljs.core.next.call(null,seq__20228_22408__$1);
var G__22416 = null;
var G__22417 = (0);
var G__22418 = (0);
seq__20228_22398 = G__22415;
chunk__20229_22399 = G__22416;
count__20230_22400 = G__22417;
i__20231_22401 = G__22418;
continue;
}
} else {
}
}
break;
}

return React.DOM.samp.apply(null,a__6249__auto__);
};
var samp = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22419__i = 0, G__22419__a = new Array(arguments.length -  0);
while (G__22419__i < G__22419__a.length) {G__22419__a[G__22419__i] = arguments[G__22419__i + 0]; ++G__22419__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22419__a,0);
} 
return samp__delegate.call(this,args__6248__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__22420){
var args__6248__auto__ = cljs.core.seq(arglist__22420);
return samp__delegate(args__6248__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20236_22421 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20237_22422 = null;
var count__20238_22423 = (0);
var i__20239_22424 = (0);
while(true){
if((i__20239_22424 < count__20238_22423)){
var arg__6250__auto___22425 = cljs.core._nth.call(null,chunk__20237_22422,i__20239_22424);
a__6249__auto__.push(arg__6250__auto___22425);

var G__22426 = seq__20236_22421;
var G__22427 = chunk__20237_22422;
var G__22428 = count__20238_22423;
var G__22429 = (i__20239_22424 + (1));
seq__20236_22421 = G__22426;
chunk__20237_22422 = G__22427;
count__20238_22423 = G__22428;
i__20239_22424 = G__22429;
continue;
} else {
var temp__4126__auto___22430 = cljs.core.seq.call(null,seq__20236_22421);
if(temp__4126__auto___22430){
var seq__20236_22431__$1 = temp__4126__auto___22430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20236_22431__$1)){
var c__4541__auto___22432 = cljs.core.chunk_first.call(null,seq__20236_22431__$1);
var G__22433 = cljs.core.chunk_rest.call(null,seq__20236_22431__$1);
var G__22434 = c__4541__auto___22432;
var G__22435 = cljs.core.count.call(null,c__4541__auto___22432);
var G__22436 = (0);
seq__20236_22421 = G__22433;
chunk__20237_22422 = G__22434;
count__20238_22423 = G__22435;
i__20239_22424 = G__22436;
continue;
} else {
var arg__6250__auto___22437 = cljs.core.first.call(null,seq__20236_22431__$1);
a__6249__auto__.push(arg__6250__auto___22437);

var G__22438 = cljs.core.next.call(null,seq__20236_22431__$1);
var G__22439 = null;
var G__22440 = (0);
var G__22441 = (0);
seq__20236_22421 = G__22438;
chunk__20237_22422 = G__22439;
count__20238_22423 = G__22440;
i__20239_22424 = G__22441;
continue;
}
} else {
}
}
break;
}

return React.DOM.script.apply(null,a__6249__auto__);
};
var script = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22442__i = 0, G__22442__a = new Array(arguments.length -  0);
while (G__22442__i < G__22442__a.length) {G__22442__a[G__22442__i] = arguments[G__22442__i + 0]; ++G__22442__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22442__a,0);
} 
return script__delegate.call(this,args__6248__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__22443){
var args__6248__auto__ = cljs.core.seq(arglist__22443);
return script__delegate(args__6248__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20244_22444 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20245_22445 = null;
var count__20246_22446 = (0);
var i__20247_22447 = (0);
while(true){
if((i__20247_22447 < count__20246_22446)){
var arg__6250__auto___22448 = cljs.core._nth.call(null,chunk__20245_22445,i__20247_22447);
a__6249__auto__.push(arg__6250__auto___22448);

var G__22449 = seq__20244_22444;
var G__22450 = chunk__20245_22445;
var G__22451 = count__20246_22446;
var G__22452 = (i__20247_22447 + (1));
seq__20244_22444 = G__22449;
chunk__20245_22445 = G__22450;
count__20246_22446 = G__22451;
i__20247_22447 = G__22452;
continue;
} else {
var temp__4126__auto___22453 = cljs.core.seq.call(null,seq__20244_22444);
if(temp__4126__auto___22453){
var seq__20244_22454__$1 = temp__4126__auto___22453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20244_22454__$1)){
var c__4541__auto___22455 = cljs.core.chunk_first.call(null,seq__20244_22454__$1);
var G__22456 = cljs.core.chunk_rest.call(null,seq__20244_22454__$1);
var G__22457 = c__4541__auto___22455;
var G__22458 = cljs.core.count.call(null,c__4541__auto___22455);
var G__22459 = (0);
seq__20244_22444 = G__22456;
chunk__20245_22445 = G__22457;
count__20246_22446 = G__22458;
i__20247_22447 = G__22459;
continue;
} else {
var arg__6250__auto___22460 = cljs.core.first.call(null,seq__20244_22454__$1);
a__6249__auto__.push(arg__6250__auto___22460);

var G__22461 = cljs.core.next.call(null,seq__20244_22454__$1);
var G__22462 = null;
var G__22463 = (0);
var G__22464 = (0);
seq__20244_22444 = G__22461;
chunk__20245_22445 = G__22462;
count__20246_22446 = G__22463;
i__20247_22447 = G__22464;
continue;
}
} else {
}
}
break;
}

return React.DOM.section.apply(null,a__6249__auto__);
};
var section = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22465__i = 0, G__22465__a = new Array(arguments.length -  0);
while (G__22465__i < G__22465__a.length) {G__22465__a[G__22465__i] = arguments[G__22465__i + 0]; ++G__22465__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22465__a,0);
} 
return section__delegate.call(this,args__6248__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__22466){
var args__6248__auto__ = cljs.core.seq(arglist__22466);
return section__delegate(args__6248__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20252_22467 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20253_22468 = null;
var count__20254_22469 = (0);
var i__20255_22470 = (0);
while(true){
if((i__20255_22470 < count__20254_22469)){
var arg__6250__auto___22471 = cljs.core._nth.call(null,chunk__20253_22468,i__20255_22470);
a__6249__auto__.push(arg__6250__auto___22471);

var G__22472 = seq__20252_22467;
var G__22473 = chunk__20253_22468;
var G__22474 = count__20254_22469;
var G__22475 = (i__20255_22470 + (1));
seq__20252_22467 = G__22472;
chunk__20253_22468 = G__22473;
count__20254_22469 = G__22474;
i__20255_22470 = G__22475;
continue;
} else {
var temp__4126__auto___22476 = cljs.core.seq.call(null,seq__20252_22467);
if(temp__4126__auto___22476){
var seq__20252_22477__$1 = temp__4126__auto___22476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20252_22477__$1)){
var c__4541__auto___22478 = cljs.core.chunk_first.call(null,seq__20252_22477__$1);
var G__22479 = cljs.core.chunk_rest.call(null,seq__20252_22477__$1);
var G__22480 = c__4541__auto___22478;
var G__22481 = cljs.core.count.call(null,c__4541__auto___22478);
var G__22482 = (0);
seq__20252_22467 = G__22479;
chunk__20253_22468 = G__22480;
count__20254_22469 = G__22481;
i__20255_22470 = G__22482;
continue;
} else {
var arg__6250__auto___22483 = cljs.core.first.call(null,seq__20252_22477__$1);
a__6249__auto__.push(arg__6250__auto___22483);

var G__22484 = cljs.core.next.call(null,seq__20252_22477__$1);
var G__22485 = null;
var G__22486 = (0);
var G__22487 = (0);
seq__20252_22467 = G__22484;
chunk__20253_22468 = G__22485;
count__20254_22469 = G__22486;
i__20255_22470 = G__22487;
continue;
}
} else {
}
}
break;
}

return React.DOM.select.apply(null,a__6249__auto__);
};
var select = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22488__i = 0, G__22488__a = new Array(arguments.length -  0);
while (G__22488__i < G__22488__a.length) {G__22488__a[G__22488__i] = arguments[G__22488__i + 0]; ++G__22488__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22488__a,0);
} 
return select__delegate.call(this,args__6248__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__22489){
var args__6248__auto__ = cljs.core.seq(arglist__22489);
return select__delegate(args__6248__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20260_22490 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20261_22491 = null;
var count__20262_22492 = (0);
var i__20263_22493 = (0);
while(true){
if((i__20263_22493 < count__20262_22492)){
var arg__6250__auto___22494 = cljs.core._nth.call(null,chunk__20261_22491,i__20263_22493);
a__6249__auto__.push(arg__6250__auto___22494);

var G__22495 = seq__20260_22490;
var G__22496 = chunk__20261_22491;
var G__22497 = count__20262_22492;
var G__22498 = (i__20263_22493 + (1));
seq__20260_22490 = G__22495;
chunk__20261_22491 = G__22496;
count__20262_22492 = G__22497;
i__20263_22493 = G__22498;
continue;
} else {
var temp__4126__auto___22499 = cljs.core.seq.call(null,seq__20260_22490);
if(temp__4126__auto___22499){
var seq__20260_22500__$1 = temp__4126__auto___22499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20260_22500__$1)){
var c__4541__auto___22501 = cljs.core.chunk_first.call(null,seq__20260_22500__$1);
var G__22502 = cljs.core.chunk_rest.call(null,seq__20260_22500__$1);
var G__22503 = c__4541__auto___22501;
var G__22504 = cljs.core.count.call(null,c__4541__auto___22501);
var G__22505 = (0);
seq__20260_22490 = G__22502;
chunk__20261_22491 = G__22503;
count__20262_22492 = G__22504;
i__20263_22493 = G__22505;
continue;
} else {
var arg__6250__auto___22506 = cljs.core.first.call(null,seq__20260_22500__$1);
a__6249__auto__.push(arg__6250__auto___22506);

var G__22507 = cljs.core.next.call(null,seq__20260_22500__$1);
var G__22508 = null;
var G__22509 = (0);
var G__22510 = (0);
seq__20260_22490 = G__22507;
chunk__20261_22491 = G__22508;
count__20262_22492 = G__22509;
i__20263_22493 = G__22510;
continue;
}
} else {
}
}
break;
}

return React.DOM.small.apply(null,a__6249__auto__);
};
var small = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22511__i = 0, G__22511__a = new Array(arguments.length -  0);
while (G__22511__i < G__22511__a.length) {G__22511__a[G__22511__i] = arguments[G__22511__i + 0]; ++G__22511__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22511__a,0);
} 
return small__delegate.call(this,args__6248__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__22512){
var args__6248__auto__ = cljs.core.seq(arglist__22512);
return small__delegate(args__6248__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20268_22513 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20269_22514 = null;
var count__20270_22515 = (0);
var i__20271_22516 = (0);
while(true){
if((i__20271_22516 < count__20270_22515)){
var arg__6250__auto___22517 = cljs.core._nth.call(null,chunk__20269_22514,i__20271_22516);
a__6249__auto__.push(arg__6250__auto___22517);

var G__22518 = seq__20268_22513;
var G__22519 = chunk__20269_22514;
var G__22520 = count__20270_22515;
var G__22521 = (i__20271_22516 + (1));
seq__20268_22513 = G__22518;
chunk__20269_22514 = G__22519;
count__20270_22515 = G__22520;
i__20271_22516 = G__22521;
continue;
} else {
var temp__4126__auto___22522 = cljs.core.seq.call(null,seq__20268_22513);
if(temp__4126__auto___22522){
var seq__20268_22523__$1 = temp__4126__auto___22522;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20268_22523__$1)){
var c__4541__auto___22524 = cljs.core.chunk_first.call(null,seq__20268_22523__$1);
var G__22525 = cljs.core.chunk_rest.call(null,seq__20268_22523__$1);
var G__22526 = c__4541__auto___22524;
var G__22527 = cljs.core.count.call(null,c__4541__auto___22524);
var G__22528 = (0);
seq__20268_22513 = G__22525;
chunk__20269_22514 = G__22526;
count__20270_22515 = G__22527;
i__20271_22516 = G__22528;
continue;
} else {
var arg__6250__auto___22529 = cljs.core.first.call(null,seq__20268_22523__$1);
a__6249__auto__.push(arg__6250__auto___22529);

var G__22530 = cljs.core.next.call(null,seq__20268_22523__$1);
var G__22531 = null;
var G__22532 = (0);
var G__22533 = (0);
seq__20268_22513 = G__22530;
chunk__20269_22514 = G__22531;
count__20270_22515 = G__22532;
i__20271_22516 = G__22533;
continue;
}
} else {
}
}
break;
}

return React.DOM.source.apply(null,a__6249__auto__);
};
var source = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22534__i = 0, G__22534__a = new Array(arguments.length -  0);
while (G__22534__i < G__22534__a.length) {G__22534__a[G__22534__i] = arguments[G__22534__i + 0]; ++G__22534__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22534__a,0);
} 
return source__delegate.call(this,args__6248__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__22535){
var args__6248__auto__ = cljs.core.seq(arglist__22535);
return source__delegate(args__6248__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20276_22536 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20277_22537 = null;
var count__20278_22538 = (0);
var i__20279_22539 = (0);
while(true){
if((i__20279_22539 < count__20278_22538)){
var arg__6250__auto___22540 = cljs.core._nth.call(null,chunk__20277_22537,i__20279_22539);
a__6249__auto__.push(arg__6250__auto___22540);

var G__22541 = seq__20276_22536;
var G__22542 = chunk__20277_22537;
var G__22543 = count__20278_22538;
var G__22544 = (i__20279_22539 + (1));
seq__20276_22536 = G__22541;
chunk__20277_22537 = G__22542;
count__20278_22538 = G__22543;
i__20279_22539 = G__22544;
continue;
} else {
var temp__4126__auto___22545 = cljs.core.seq.call(null,seq__20276_22536);
if(temp__4126__auto___22545){
var seq__20276_22546__$1 = temp__4126__auto___22545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20276_22546__$1)){
var c__4541__auto___22547 = cljs.core.chunk_first.call(null,seq__20276_22546__$1);
var G__22548 = cljs.core.chunk_rest.call(null,seq__20276_22546__$1);
var G__22549 = c__4541__auto___22547;
var G__22550 = cljs.core.count.call(null,c__4541__auto___22547);
var G__22551 = (0);
seq__20276_22536 = G__22548;
chunk__20277_22537 = G__22549;
count__20278_22538 = G__22550;
i__20279_22539 = G__22551;
continue;
} else {
var arg__6250__auto___22552 = cljs.core.first.call(null,seq__20276_22546__$1);
a__6249__auto__.push(arg__6250__auto___22552);

var G__22553 = cljs.core.next.call(null,seq__20276_22546__$1);
var G__22554 = null;
var G__22555 = (0);
var G__22556 = (0);
seq__20276_22536 = G__22553;
chunk__20277_22537 = G__22554;
count__20278_22538 = G__22555;
i__20279_22539 = G__22556;
continue;
}
} else {
}
}
break;
}

return React.DOM.span.apply(null,a__6249__auto__);
};
var span = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22557__i = 0, G__22557__a = new Array(arguments.length -  0);
while (G__22557__i < G__22557__a.length) {G__22557__a[G__22557__i] = arguments[G__22557__i + 0]; ++G__22557__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22557__a,0);
} 
return span__delegate.call(this,args__6248__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__22558){
var args__6248__auto__ = cljs.core.seq(arglist__22558);
return span__delegate(args__6248__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20284_22559 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20285_22560 = null;
var count__20286_22561 = (0);
var i__20287_22562 = (0);
while(true){
if((i__20287_22562 < count__20286_22561)){
var arg__6250__auto___22563 = cljs.core._nth.call(null,chunk__20285_22560,i__20287_22562);
a__6249__auto__.push(arg__6250__auto___22563);

var G__22564 = seq__20284_22559;
var G__22565 = chunk__20285_22560;
var G__22566 = count__20286_22561;
var G__22567 = (i__20287_22562 + (1));
seq__20284_22559 = G__22564;
chunk__20285_22560 = G__22565;
count__20286_22561 = G__22566;
i__20287_22562 = G__22567;
continue;
} else {
var temp__4126__auto___22568 = cljs.core.seq.call(null,seq__20284_22559);
if(temp__4126__auto___22568){
var seq__20284_22569__$1 = temp__4126__auto___22568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20284_22569__$1)){
var c__4541__auto___22570 = cljs.core.chunk_first.call(null,seq__20284_22569__$1);
var G__22571 = cljs.core.chunk_rest.call(null,seq__20284_22569__$1);
var G__22572 = c__4541__auto___22570;
var G__22573 = cljs.core.count.call(null,c__4541__auto___22570);
var G__22574 = (0);
seq__20284_22559 = G__22571;
chunk__20285_22560 = G__22572;
count__20286_22561 = G__22573;
i__20287_22562 = G__22574;
continue;
} else {
var arg__6250__auto___22575 = cljs.core.first.call(null,seq__20284_22569__$1);
a__6249__auto__.push(arg__6250__auto___22575);

var G__22576 = cljs.core.next.call(null,seq__20284_22569__$1);
var G__22577 = null;
var G__22578 = (0);
var G__22579 = (0);
seq__20284_22559 = G__22576;
chunk__20285_22560 = G__22577;
count__20286_22561 = G__22578;
i__20287_22562 = G__22579;
continue;
}
} else {
}
}
break;
}

return React.DOM.strong.apply(null,a__6249__auto__);
};
var strong = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22580__i = 0, G__22580__a = new Array(arguments.length -  0);
while (G__22580__i < G__22580__a.length) {G__22580__a[G__22580__i] = arguments[G__22580__i + 0]; ++G__22580__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22580__a,0);
} 
return strong__delegate.call(this,args__6248__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__22581){
var args__6248__auto__ = cljs.core.seq(arglist__22581);
return strong__delegate(args__6248__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20292_22582 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20293_22583 = null;
var count__20294_22584 = (0);
var i__20295_22585 = (0);
while(true){
if((i__20295_22585 < count__20294_22584)){
var arg__6250__auto___22586 = cljs.core._nth.call(null,chunk__20293_22583,i__20295_22585);
a__6249__auto__.push(arg__6250__auto___22586);

var G__22587 = seq__20292_22582;
var G__22588 = chunk__20293_22583;
var G__22589 = count__20294_22584;
var G__22590 = (i__20295_22585 + (1));
seq__20292_22582 = G__22587;
chunk__20293_22583 = G__22588;
count__20294_22584 = G__22589;
i__20295_22585 = G__22590;
continue;
} else {
var temp__4126__auto___22591 = cljs.core.seq.call(null,seq__20292_22582);
if(temp__4126__auto___22591){
var seq__20292_22592__$1 = temp__4126__auto___22591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20292_22592__$1)){
var c__4541__auto___22593 = cljs.core.chunk_first.call(null,seq__20292_22592__$1);
var G__22594 = cljs.core.chunk_rest.call(null,seq__20292_22592__$1);
var G__22595 = c__4541__auto___22593;
var G__22596 = cljs.core.count.call(null,c__4541__auto___22593);
var G__22597 = (0);
seq__20292_22582 = G__22594;
chunk__20293_22583 = G__22595;
count__20294_22584 = G__22596;
i__20295_22585 = G__22597;
continue;
} else {
var arg__6250__auto___22598 = cljs.core.first.call(null,seq__20292_22592__$1);
a__6249__auto__.push(arg__6250__auto___22598);

var G__22599 = cljs.core.next.call(null,seq__20292_22592__$1);
var G__22600 = null;
var G__22601 = (0);
var G__22602 = (0);
seq__20292_22582 = G__22599;
chunk__20293_22583 = G__22600;
count__20294_22584 = G__22601;
i__20295_22585 = G__22602;
continue;
}
} else {
}
}
break;
}

return React.DOM.style.apply(null,a__6249__auto__);
};
var style = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22603__i = 0, G__22603__a = new Array(arguments.length -  0);
while (G__22603__i < G__22603__a.length) {G__22603__a[G__22603__i] = arguments[G__22603__i + 0]; ++G__22603__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22603__a,0);
} 
return style__delegate.call(this,args__6248__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__22604){
var args__6248__auto__ = cljs.core.seq(arglist__22604);
return style__delegate(args__6248__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20300_22605 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20301_22606 = null;
var count__20302_22607 = (0);
var i__20303_22608 = (0);
while(true){
if((i__20303_22608 < count__20302_22607)){
var arg__6250__auto___22609 = cljs.core._nth.call(null,chunk__20301_22606,i__20303_22608);
a__6249__auto__.push(arg__6250__auto___22609);

var G__22610 = seq__20300_22605;
var G__22611 = chunk__20301_22606;
var G__22612 = count__20302_22607;
var G__22613 = (i__20303_22608 + (1));
seq__20300_22605 = G__22610;
chunk__20301_22606 = G__22611;
count__20302_22607 = G__22612;
i__20303_22608 = G__22613;
continue;
} else {
var temp__4126__auto___22614 = cljs.core.seq.call(null,seq__20300_22605);
if(temp__4126__auto___22614){
var seq__20300_22615__$1 = temp__4126__auto___22614;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20300_22615__$1)){
var c__4541__auto___22616 = cljs.core.chunk_first.call(null,seq__20300_22615__$1);
var G__22617 = cljs.core.chunk_rest.call(null,seq__20300_22615__$1);
var G__22618 = c__4541__auto___22616;
var G__22619 = cljs.core.count.call(null,c__4541__auto___22616);
var G__22620 = (0);
seq__20300_22605 = G__22617;
chunk__20301_22606 = G__22618;
count__20302_22607 = G__22619;
i__20303_22608 = G__22620;
continue;
} else {
var arg__6250__auto___22621 = cljs.core.first.call(null,seq__20300_22615__$1);
a__6249__auto__.push(arg__6250__auto___22621);

var G__22622 = cljs.core.next.call(null,seq__20300_22615__$1);
var G__22623 = null;
var G__22624 = (0);
var G__22625 = (0);
seq__20300_22605 = G__22622;
chunk__20301_22606 = G__22623;
count__20302_22607 = G__22624;
i__20303_22608 = G__22625;
continue;
}
} else {
}
}
break;
}

return React.DOM.sub.apply(null,a__6249__auto__);
};
var sub = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22626__i = 0, G__22626__a = new Array(arguments.length -  0);
while (G__22626__i < G__22626__a.length) {G__22626__a[G__22626__i] = arguments[G__22626__i + 0]; ++G__22626__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22626__a,0);
} 
return sub__delegate.call(this,args__6248__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__22627){
var args__6248__auto__ = cljs.core.seq(arglist__22627);
return sub__delegate(args__6248__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20308_22628 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20309_22629 = null;
var count__20310_22630 = (0);
var i__20311_22631 = (0);
while(true){
if((i__20311_22631 < count__20310_22630)){
var arg__6250__auto___22632 = cljs.core._nth.call(null,chunk__20309_22629,i__20311_22631);
a__6249__auto__.push(arg__6250__auto___22632);

var G__22633 = seq__20308_22628;
var G__22634 = chunk__20309_22629;
var G__22635 = count__20310_22630;
var G__22636 = (i__20311_22631 + (1));
seq__20308_22628 = G__22633;
chunk__20309_22629 = G__22634;
count__20310_22630 = G__22635;
i__20311_22631 = G__22636;
continue;
} else {
var temp__4126__auto___22637 = cljs.core.seq.call(null,seq__20308_22628);
if(temp__4126__auto___22637){
var seq__20308_22638__$1 = temp__4126__auto___22637;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20308_22638__$1)){
var c__4541__auto___22639 = cljs.core.chunk_first.call(null,seq__20308_22638__$1);
var G__22640 = cljs.core.chunk_rest.call(null,seq__20308_22638__$1);
var G__22641 = c__4541__auto___22639;
var G__22642 = cljs.core.count.call(null,c__4541__auto___22639);
var G__22643 = (0);
seq__20308_22628 = G__22640;
chunk__20309_22629 = G__22641;
count__20310_22630 = G__22642;
i__20311_22631 = G__22643;
continue;
} else {
var arg__6250__auto___22644 = cljs.core.first.call(null,seq__20308_22638__$1);
a__6249__auto__.push(arg__6250__auto___22644);

var G__22645 = cljs.core.next.call(null,seq__20308_22638__$1);
var G__22646 = null;
var G__22647 = (0);
var G__22648 = (0);
seq__20308_22628 = G__22645;
chunk__20309_22629 = G__22646;
count__20310_22630 = G__22647;
i__20311_22631 = G__22648;
continue;
}
} else {
}
}
break;
}

return React.DOM.summary.apply(null,a__6249__auto__);
};
var summary = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22649__i = 0, G__22649__a = new Array(arguments.length -  0);
while (G__22649__i < G__22649__a.length) {G__22649__a[G__22649__i] = arguments[G__22649__i + 0]; ++G__22649__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22649__a,0);
} 
return summary__delegate.call(this,args__6248__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__22650){
var args__6248__auto__ = cljs.core.seq(arglist__22650);
return summary__delegate(args__6248__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20316_22651 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20317_22652 = null;
var count__20318_22653 = (0);
var i__20319_22654 = (0);
while(true){
if((i__20319_22654 < count__20318_22653)){
var arg__6250__auto___22655 = cljs.core._nth.call(null,chunk__20317_22652,i__20319_22654);
a__6249__auto__.push(arg__6250__auto___22655);

var G__22656 = seq__20316_22651;
var G__22657 = chunk__20317_22652;
var G__22658 = count__20318_22653;
var G__22659 = (i__20319_22654 + (1));
seq__20316_22651 = G__22656;
chunk__20317_22652 = G__22657;
count__20318_22653 = G__22658;
i__20319_22654 = G__22659;
continue;
} else {
var temp__4126__auto___22660 = cljs.core.seq.call(null,seq__20316_22651);
if(temp__4126__auto___22660){
var seq__20316_22661__$1 = temp__4126__auto___22660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20316_22661__$1)){
var c__4541__auto___22662 = cljs.core.chunk_first.call(null,seq__20316_22661__$1);
var G__22663 = cljs.core.chunk_rest.call(null,seq__20316_22661__$1);
var G__22664 = c__4541__auto___22662;
var G__22665 = cljs.core.count.call(null,c__4541__auto___22662);
var G__22666 = (0);
seq__20316_22651 = G__22663;
chunk__20317_22652 = G__22664;
count__20318_22653 = G__22665;
i__20319_22654 = G__22666;
continue;
} else {
var arg__6250__auto___22667 = cljs.core.first.call(null,seq__20316_22661__$1);
a__6249__auto__.push(arg__6250__auto___22667);

var G__22668 = cljs.core.next.call(null,seq__20316_22661__$1);
var G__22669 = null;
var G__22670 = (0);
var G__22671 = (0);
seq__20316_22651 = G__22668;
chunk__20317_22652 = G__22669;
count__20318_22653 = G__22670;
i__20319_22654 = G__22671;
continue;
}
} else {
}
}
break;
}

return React.DOM.sup.apply(null,a__6249__auto__);
};
var sup = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22672__i = 0, G__22672__a = new Array(arguments.length -  0);
while (G__22672__i < G__22672__a.length) {G__22672__a[G__22672__i] = arguments[G__22672__i + 0]; ++G__22672__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22672__a,0);
} 
return sup__delegate.call(this,args__6248__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__22673){
var args__6248__auto__ = cljs.core.seq(arglist__22673);
return sup__delegate(args__6248__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20324_22674 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20325_22675 = null;
var count__20326_22676 = (0);
var i__20327_22677 = (0);
while(true){
if((i__20327_22677 < count__20326_22676)){
var arg__6250__auto___22678 = cljs.core._nth.call(null,chunk__20325_22675,i__20327_22677);
a__6249__auto__.push(arg__6250__auto___22678);

var G__22679 = seq__20324_22674;
var G__22680 = chunk__20325_22675;
var G__22681 = count__20326_22676;
var G__22682 = (i__20327_22677 + (1));
seq__20324_22674 = G__22679;
chunk__20325_22675 = G__22680;
count__20326_22676 = G__22681;
i__20327_22677 = G__22682;
continue;
} else {
var temp__4126__auto___22683 = cljs.core.seq.call(null,seq__20324_22674);
if(temp__4126__auto___22683){
var seq__20324_22684__$1 = temp__4126__auto___22683;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20324_22684__$1)){
var c__4541__auto___22685 = cljs.core.chunk_first.call(null,seq__20324_22684__$1);
var G__22686 = cljs.core.chunk_rest.call(null,seq__20324_22684__$1);
var G__22687 = c__4541__auto___22685;
var G__22688 = cljs.core.count.call(null,c__4541__auto___22685);
var G__22689 = (0);
seq__20324_22674 = G__22686;
chunk__20325_22675 = G__22687;
count__20326_22676 = G__22688;
i__20327_22677 = G__22689;
continue;
} else {
var arg__6250__auto___22690 = cljs.core.first.call(null,seq__20324_22684__$1);
a__6249__auto__.push(arg__6250__auto___22690);

var G__22691 = cljs.core.next.call(null,seq__20324_22684__$1);
var G__22692 = null;
var G__22693 = (0);
var G__22694 = (0);
seq__20324_22674 = G__22691;
chunk__20325_22675 = G__22692;
count__20326_22676 = G__22693;
i__20327_22677 = G__22694;
continue;
}
} else {
}
}
break;
}

return React.DOM.table.apply(null,a__6249__auto__);
};
var table = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22695__i = 0, G__22695__a = new Array(arguments.length -  0);
while (G__22695__i < G__22695__a.length) {G__22695__a[G__22695__i] = arguments[G__22695__i + 0]; ++G__22695__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22695__a,0);
} 
return table__delegate.call(this,args__6248__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__22696){
var args__6248__auto__ = cljs.core.seq(arglist__22696);
return table__delegate(args__6248__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20332_22697 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20333_22698 = null;
var count__20334_22699 = (0);
var i__20335_22700 = (0);
while(true){
if((i__20335_22700 < count__20334_22699)){
var arg__6250__auto___22701 = cljs.core._nth.call(null,chunk__20333_22698,i__20335_22700);
a__6249__auto__.push(arg__6250__auto___22701);

var G__22702 = seq__20332_22697;
var G__22703 = chunk__20333_22698;
var G__22704 = count__20334_22699;
var G__22705 = (i__20335_22700 + (1));
seq__20332_22697 = G__22702;
chunk__20333_22698 = G__22703;
count__20334_22699 = G__22704;
i__20335_22700 = G__22705;
continue;
} else {
var temp__4126__auto___22706 = cljs.core.seq.call(null,seq__20332_22697);
if(temp__4126__auto___22706){
var seq__20332_22707__$1 = temp__4126__auto___22706;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20332_22707__$1)){
var c__4541__auto___22708 = cljs.core.chunk_first.call(null,seq__20332_22707__$1);
var G__22709 = cljs.core.chunk_rest.call(null,seq__20332_22707__$1);
var G__22710 = c__4541__auto___22708;
var G__22711 = cljs.core.count.call(null,c__4541__auto___22708);
var G__22712 = (0);
seq__20332_22697 = G__22709;
chunk__20333_22698 = G__22710;
count__20334_22699 = G__22711;
i__20335_22700 = G__22712;
continue;
} else {
var arg__6250__auto___22713 = cljs.core.first.call(null,seq__20332_22707__$1);
a__6249__auto__.push(arg__6250__auto___22713);

var G__22714 = cljs.core.next.call(null,seq__20332_22707__$1);
var G__22715 = null;
var G__22716 = (0);
var G__22717 = (0);
seq__20332_22697 = G__22714;
chunk__20333_22698 = G__22715;
count__20334_22699 = G__22716;
i__20335_22700 = G__22717;
continue;
}
} else {
}
}
break;
}

return React.DOM.tbody.apply(null,a__6249__auto__);
};
var tbody = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22718__i = 0, G__22718__a = new Array(arguments.length -  0);
while (G__22718__i < G__22718__a.length) {G__22718__a[G__22718__i] = arguments[G__22718__i + 0]; ++G__22718__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22718__a,0);
} 
return tbody__delegate.call(this,args__6248__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__22719){
var args__6248__auto__ = cljs.core.seq(arglist__22719);
return tbody__delegate(args__6248__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20340_22720 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20341_22721 = null;
var count__20342_22722 = (0);
var i__20343_22723 = (0);
while(true){
if((i__20343_22723 < count__20342_22722)){
var arg__6250__auto___22724 = cljs.core._nth.call(null,chunk__20341_22721,i__20343_22723);
a__6249__auto__.push(arg__6250__auto___22724);

var G__22725 = seq__20340_22720;
var G__22726 = chunk__20341_22721;
var G__22727 = count__20342_22722;
var G__22728 = (i__20343_22723 + (1));
seq__20340_22720 = G__22725;
chunk__20341_22721 = G__22726;
count__20342_22722 = G__22727;
i__20343_22723 = G__22728;
continue;
} else {
var temp__4126__auto___22729 = cljs.core.seq.call(null,seq__20340_22720);
if(temp__4126__auto___22729){
var seq__20340_22730__$1 = temp__4126__auto___22729;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20340_22730__$1)){
var c__4541__auto___22731 = cljs.core.chunk_first.call(null,seq__20340_22730__$1);
var G__22732 = cljs.core.chunk_rest.call(null,seq__20340_22730__$1);
var G__22733 = c__4541__auto___22731;
var G__22734 = cljs.core.count.call(null,c__4541__auto___22731);
var G__22735 = (0);
seq__20340_22720 = G__22732;
chunk__20341_22721 = G__22733;
count__20342_22722 = G__22734;
i__20343_22723 = G__22735;
continue;
} else {
var arg__6250__auto___22736 = cljs.core.first.call(null,seq__20340_22730__$1);
a__6249__auto__.push(arg__6250__auto___22736);

var G__22737 = cljs.core.next.call(null,seq__20340_22730__$1);
var G__22738 = null;
var G__22739 = (0);
var G__22740 = (0);
seq__20340_22720 = G__22737;
chunk__20341_22721 = G__22738;
count__20342_22722 = G__22739;
i__20343_22723 = G__22740;
continue;
}
} else {
}
}
break;
}

return React.DOM.td.apply(null,a__6249__auto__);
};
var td = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22741__i = 0, G__22741__a = new Array(arguments.length -  0);
while (G__22741__i < G__22741__a.length) {G__22741__a[G__22741__i] = arguments[G__22741__i + 0]; ++G__22741__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22741__a,0);
} 
return td__delegate.call(this,args__6248__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__22742){
var args__6248__auto__ = cljs.core.seq(arglist__22742);
return td__delegate(args__6248__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20348_22743 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20349_22744 = null;
var count__20350_22745 = (0);
var i__20351_22746 = (0);
while(true){
if((i__20351_22746 < count__20350_22745)){
var arg__6250__auto___22747 = cljs.core._nth.call(null,chunk__20349_22744,i__20351_22746);
a__6249__auto__.push(arg__6250__auto___22747);

var G__22748 = seq__20348_22743;
var G__22749 = chunk__20349_22744;
var G__22750 = count__20350_22745;
var G__22751 = (i__20351_22746 + (1));
seq__20348_22743 = G__22748;
chunk__20349_22744 = G__22749;
count__20350_22745 = G__22750;
i__20351_22746 = G__22751;
continue;
} else {
var temp__4126__auto___22752 = cljs.core.seq.call(null,seq__20348_22743);
if(temp__4126__auto___22752){
var seq__20348_22753__$1 = temp__4126__auto___22752;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20348_22753__$1)){
var c__4541__auto___22754 = cljs.core.chunk_first.call(null,seq__20348_22753__$1);
var G__22755 = cljs.core.chunk_rest.call(null,seq__20348_22753__$1);
var G__22756 = c__4541__auto___22754;
var G__22757 = cljs.core.count.call(null,c__4541__auto___22754);
var G__22758 = (0);
seq__20348_22743 = G__22755;
chunk__20349_22744 = G__22756;
count__20350_22745 = G__22757;
i__20351_22746 = G__22758;
continue;
} else {
var arg__6250__auto___22759 = cljs.core.first.call(null,seq__20348_22753__$1);
a__6249__auto__.push(arg__6250__auto___22759);

var G__22760 = cljs.core.next.call(null,seq__20348_22753__$1);
var G__22761 = null;
var G__22762 = (0);
var G__22763 = (0);
seq__20348_22743 = G__22760;
chunk__20349_22744 = G__22761;
count__20350_22745 = G__22762;
i__20351_22746 = G__22763;
continue;
}
} else {
}
}
break;
}

return React.DOM.textarea.apply(null,a__6249__auto__);
};
var textarea = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22764__i = 0, G__22764__a = new Array(arguments.length -  0);
while (G__22764__i < G__22764__a.length) {G__22764__a[G__22764__i] = arguments[G__22764__i + 0]; ++G__22764__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22764__a,0);
} 
return textarea__delegate.call(this,args__6248__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__22765){
var args__6248__auto__ = cljs.core.seq(arglist__22765);
return textarea__delegate(args__6248__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20356_22766 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20357_22767 = null;
var count__20358_22768 = (0);
var i__20359_22769 = (0);
while(true){
if((i__20359_22769 < count__20358_22768)){
var arg__6250__auto___22770 = cljs.core._nth.call(null,chunk__20357_22767,i__20359_22769);
a__6249__auto__.push(arg__6250__auto___22770);

var G__22771 = seq__20356_22766;
var G__22772 = chunk__20357_22767;
var G__22773 = count__20358_22768;
var G__22774 = (i__20359_22769 + (1));
seq__20356_22766 = G__22771;
chunk__20357_22767 = G__22772;
count__20358_22768 = G__22773;
i__20359_22769 = G__22774;
continue;
} else {
var temp__4126__auto___22775 = cljs.core.seq.call(null,seq__20356_22766);
if(temp__4126__auto___22775){
var seq__20356_22776__$1 = temp__4126__auto___22775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20356_22776__$1)){
var c__4541__auto___22777 = cljs.core.chunk_first.call(null,seq__20356_22776__$1);
var G__22778 = cljs.core.chunk_rest.call(null,seq__20356_22776__$1);
var G__22779 = c__4541__auto___22777;
var G__22780 = cljs.core.count.call(null,c__4541__auto___22777);
var G__22781 = (0);
seq__20356_22766 = G__22778;
chunk__20357_22767 = G__22779;
count__20358_22768 = G__22780;
i__20359_22769 = G__22781;
continue;
} else {
var arg__6250__auto___22782 = cljs.core.first.call(null,seq__20356_22776__$1);
a__6249__auto__.push(arg__6250__auto___22782);

var G__22783 = cljs.core.next.call(null,seq__20356_22776__$1);
var G__22784 = null;
var G__22785 = (0);
var G__22786 = (0);
seq__20356_22766 = G__22783;
chunk__20357_22767 = G__22784;
count__20358_22768 = G__22785;
i__20359_22769 = G__22786;
continue;
}
} else {
}
}
break;
}

return React.DOM.tfoot.apply(null,a__6249__auto__);
};
var tfoot = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22787__i = 0, G__22787__a = new Array(arguments.length -  0);
while (G__22787__i < G__22787__a.length) {G__22787__a[G__22787__i] = arguments[G__22787__i + 0]; ++G__22787__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22787__a,0);
} 
return tfoot__delegate.call(this,args__6248__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__22788){
var args__6248__auto__ = cljs.core.seq(arglist__22788);
return tfoot__delegate(args__6248__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20364_22789 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20365_22790 = null;
var count__20366_22791 = (0);
var i__20367_22792 = (0);
while(true){
if((i__20367_22792 < count__20366_22791)){
var arg__6250__auto___22793 = cljs.core._nth.call(null,chunk__20365_22790,i__20367_22792);
a__6249__auto__.push(arg__6250__auto___22793);

var G__22794 = seq__20364_22789;
var G__22795 = chunk__20365_22790;
var G__22796 = count__20366_22791;
var G__22797 = (i__20367_22792 + (1));
seq__20364_22789 = G__22794;
chunk__20365_22790 = G__22795;
count__20366_22791 = G__22796;
i__20367_22792 = G__22797;
continue;
} else {
var temp__4126__auto___22798 = cljs.core.seq.call(null,seq__20364_22789);
if(temp__4126__auto___22798){
var seq__20364_22799__$1 = temp__4126__auto___22798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20364_22799__$1)){
var c__4541__auto___22800 = cljs.core.chunk_first.call(null,seq__20364_22799__$1);
var G__22801 = cljs.core.chunk_rest.call(null,seq__20364_22799__$1);
var G__22802 = c__4541__auto___22800;
var G__22803 = cljs.core.count.call(null,c__4541__auto___22800);
var G__22804 = (0);
seq__20364_22789 = G__22801;
chunk__20365_22790 = G__22802;
count__20366_22791 = G__22803;
i__20367_22792 = G__22804;
continue;
} else {
var arg__6250__auto___22805 = cljs.core.first.call(null,seq__20364_22799__$1);
a__6249__auto__.push(arg__6250__auto___22805);

var G__22806 = cljs.core.next.call(null,seq__20364_22799__$1);
var G__22807 = null;
var G__22808 = (0);
var G__22809 = (0);
seq__20364_22789 = G__22806;
chunk__20365_22790 = G__22807;
count__20366_22791 = G__22808;
i__20367_22792 = G__22809;
continue;
}
} else {
}
}
break;
}

return React.DOM.th.apply(null,a__6249__auto__);
};
var th = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22810__i = 0, G__22810__a = new Array(arguments.length -  0);
while (G__22810__i < G__22810__a.length) {G__22810__a[G__22810__i] = arguments[G__22810__i + 0]; ++G__22810__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22810__a,0);
} 
return th__delegate.call(this,args__6248__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__22811){
var args__6248__auto__ = cljs.core.seq(arglist__22811);
return th__delegate(args__6248__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20372_22812 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20373_22813 = null;
var count__20374_22814 = (0);
var i__20375_22815 = (0);
while(true){
if((i__20375_22815 < count__20374_22814)){
var arg__6250__auto___22816 = cljs.core._nth.call(null,chunk__20373_22813,i__20375_22815);
a__6249__auto__.push(arg__6250__auto___22816);

var G__22817 = seq__20372_22812;
var G__22818 = chunk__20373_22813;
var G__22819 = count__20374_22814;
var G__22820 = (i__20375_22815 + (1));
seq__20372_22812 = G__22817;
chunk__20373_22813 = G__22818;
count__20374_22814 = G__22819;
i__20375_22815 = G__22820;
continue;
} else {
var temp__4126__auto___22821 = cljs.core.seq.call(null,seq__20372_22812);
if(temp__4126__auto___22821){
var seq__20372_22822__$1 = temp__4126__auto___22821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20372_22822__$1)){
var c__4541__auto___22823 = cljs.core.chunk_first.call(null,seq__20372_22822__$1);
var G__22824 = cljs.core.chunk_rest.call(null,seq__20372_22822__$1);
var G__22825 = c__4541__auto___22823;
var G__22826 = cljs.core.count.call(null,c__4541__auto___22823);
var G__22827 = (0);
seq__20372_22812 = G__22824;
chunk__20373_22813 = G__22825;
count__20374_22814 = G__22826;
i__20375_22815 = G__22827;
continue;
} else {
var arg__6250__auto___22828 = cljs.core.first.call(null,seq__20372_22822__$1);
a__6249__auto__.push(arg__6250__auto___22828);

var G__22829 = cljs.core.next.call(null,seq__20372_22822__$1);
var G__22830 = null;
var G__22831 = (0);
var G__22832 = (0);
seq__20372_22812 = G__22829;
chunk__20373_22813 = G__22830;
count__20374_22814 = G__22831;
i__20375_22815 = G__22832;
continue;
}
} else {
}
}
break;
}

return React.DOM.thead.apply(null,a__6249__auto__);
};
var thead = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22833__i = 0, G__22833__a = new Array(arguments.length -  0);
while (G__22833__i < G__22833__a.length) {G__22833__a[G__22833__i] = arguments[G__22833__i + 0]; ++G__22833__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22833__a,0);
} 
return thead__delegate.call(this,args__6248__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__22834){
var args__6248__auto__ = cljs.core.seq(arglist__22834);
return thead__delegate(args__6248__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20380_22835 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20381_22836 = null;
var count__20382_22837 = (0);
var i__20383_22838 = (0);
while(true){
if((i__20383_22838 < count__20382_22837)){
var arg__6250__auto___22839 = cljs.core._nth.call(null,chunk__20381_22836,i__20383_22838);
a__6249__auto__.push(arg__6250__auto___22839);

var G__22840 = seq__20380_22835;
var G__22841 = chunk__20381_22836;
var G__22842 = count__20382_22837;
var G__22843 = (i__20383_22838 + (1));
seq__20380_22835 = G__22840;
chunk__20381_22836 = G__22841;
count__20382_22837 = G__22842;
i__20383_22838 = G__22843;
continue;
} else {
var temp__4126__auto___22844 = cljs.core.seq.call(null,seq__20380_22835);
if(temp__4126__auto___22844){
var seq__20380_22845__$1 = temp__4126__auto___22844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20380_22845__$1)){
var c__4541__auto___22846 = cljs.core.chunk_first.call(null,seq__20380_22845__$1);
var G__22847 = cljs.core.chunk_rest.call(null,seq__20380_22845__$1);
var G__22848 = c__4541__auto___22846;
var G__22849 = cljs.core.count.call(null,c__4541__auto___22846);
var G__22850 = (0);
seq__20380_22835 = G__22847;
chunk__20381_22836 = G__22848;
count__20382_22837 = G__22849;
i__20383_22838 = G__22850;
continue;
} else {
var arg__6250__auto___22851 = cljs.core.first.call(null,seq__20380_22845__$1);
a__6249__auto__.push(arg__6250__auto___22851);

var G__22852 = cljs.core.next.call(null,seq__20380_22845__$1);
var G__22853 = null;
var G__22854 = (0);
var G__22855 = (0);
seq__20380_22835 = G__22852;
chunk__20381_22836 = G__22853;
count__20382_22837 = G__22854;
i__20383_22838 = G__22855;
continue;
}
} else {
}
}
break;
}

return React.DOM.time.apply(null,a__6249__auto__);
};
var time = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22856__i = 0, G__22856__a = new Array(arguments.length -  0);
while (G__22856__i < G__22856__a.length) {G__22856__a[G__22856__i] = arguments[G__22856__i + 0]; ++G__22856__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22856__a,0);
} 
return time__delegate.call(this,args__6248__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__22857){
var args__6248__auto__ = cljs.core.seq(arglist__22857);
return time__delegate(args__6248__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20388_22858 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20389_22859 = null;
var count__20390_22860 = (0);
var i__20391_22861 = (0);
while(true){
if((i__20391_22861 < count__20390_22860)){
var arg__6250__auto___22862 = cljs.core._nth.call(null,chunk__20389_22859,i__20391_22861);
a__6249__auto__.push(arg__6250__auto___22862);

var G__22863 = seq__20388_22858;
var G__22864 = chunk__20389_22859;
var G__22865 = count__20390_22860;
var G__22866 = (i__20391_22861 + (1));
seq__20388_22858 = G__22863;
chunk__20389_22859 = G__22864;
count__20390_22860 = G__22865;
i__20391_22861 = G__22866;
continue;
} else {
var temp__4126__auto___22867 = cljs.core.seq.call(null,seq__20388_22858);
if(temp__4126__auto___22867){
var seq__20388_22868__$1 = temp__4126__auto___22867;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20388_22868__$1)){
var c__4541__auto___22869 = cljs.core.chunk_first.call(null,seq__20388_22868__$1);
var G__22870 = cljs.core.chunk_rest.call(null,seq__20388_22868__$1);
var G__22871 = c__4541__auto___22869;
var G__22872 = cljs.core.count.call(null,c__4541__auto___22869);
var G__22873 = (0);
seq__20388_22858 = G__22870;
chunk__20389_22859 = G__22871;
count__20390_22860 = G__22872;
i__20391_22861 = G__22873;
continue;
} else {
var arg__6250__auto___22874 = cljs.core.first.call(null,seq__20388_22868__$1);
a__6249__auto__.push(arg__6250__auto___22874);

var G__22875 = cljs.core.next.call(null,seq__20388_22868__$1);
var G__22876 = null;
var G__22877 = (0);
var G__22878 = (0);
seq__20388_22858 = G__22875;
chunk__20389_22859 = G__22876;
count__20390_22860 = G__22877;
i__20391_22861 = G__22878;
continue;
}
} else {
}
}
break;
}

return React.DOM.title.apply(null,a__6249__auto__);
};
var title = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22879__i = 0, G__22879__a = new Array(arguments.length -  0);
while (G__22879__i < G__22879__a.length) {G__22879__a[G__22879__i] = arguments[G__22879__i + 0]; ++G__22879__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22879__a,0);
} 
return title__delegate.call(this,args__6248__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__22880){
var args__6248__auto__ = cljs.core.seq(arglist__22880);
return title__delegate(args__6248__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20396_22881 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20397_22882 = null;
var count__20398_22883 = (0);
var i__20399_22884 = (0);
while(true){
if((i__20399_22884 < count__20398_22883)){
var arg__6250__auto___22885 = cljs.core._nth.call(null,chunk__20397_22882,i__20399_22884);
a__6249__auto__.push(arg__6250__auto___22885);

var G__22886 = seq__20396_22881;
var G__22887 = chunk__20397_22882;
var G__22888 = count__20398_22883;
var G__22889 = (i__20399_22884 + (1));
seq__20396_22881 = G__22886;
chunk__20397_22882 = G__22887;
count__20398_22883 = G__22888;
i__20399_22884 = G__22889;
continue;
} else {
var temp__4126__auto___22890 = cljs.core.seq.call(null,seq__20396_22881);
if(temp__4126__auto___22890){
var seq__20396_22891__$1 = temp__4126__auto___22890;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20396_22891__$1)){
var c__4541__auto___22892 = cljs.core.chunk_first.call(null,seq__20396_22891__$1);
var G__22893 = cljs.core.chunk_rest.call(null,seq__20396_22891__$1);
var G__22894 = c__4541__auto___22892;
var G__22895 = cljs.core.count.call(null,c__4541__auto___22892);
var G__22896 = (0);
seq__20396_22881 = G__22893;
chunk__20397_22882 = G__22894;
count__20398_22883 = G__22895;
i__20399_22884 = G__22896;
continue;
} else {
var arg__6250__auto___22897 = cljs.core.first.call(null,seq__20396_22891__$1);
a__6249__auto__.push(arg__6250__auto___22897);

var G__22898 = cljs.core.next.call(null,seq__20396_22891__$1);
var G__22899 = null;
var G__22900 = (0);
var G__22901 = (0);
seq__20396_22881 = G__22898;
chunk__20397_22882 = G__22899;
count__20398_22883 = G__22900;
i__20399_22884 = G__22901;
continue;
}
} else {
}
}
break;
}

return React.DOM.tr.apply(null,a__6249__auto__);
};
var tr = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22902__i = 0, G__22902__a = new Array(arguments.length -  0);
while (G__22902__i < G__22902__a.length) {G__22902__a[G__22902__i] = arguments[G__22902__i + 0]; ++G__22902__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22902__a,0);
} 
return tr__delegate.call(this,args__6248__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__22903){
var args__6248__auto__ = cljs.core.seq(arglist__22903);
return tr__delegate(args__6248__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20404_22904 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20405_22905 = null;
var count__20406_22906 = (0);
var i__20407_22907 = (0);
while(true){
if((i__20407_22907 < count__20406_22906)){
var arg__6250__auto___22908 = cljs.core._nth.call(null,chunk__20405_22905,i__20407_22907);
a__6249__auto__.push(arg__6250__auto___22908);

var G__22909 = seq__20404_22904;
var G__22910 = chunk__20405_22905;
var G__22911 = count__20406_22906;
var G__22912 = (i__20407_22907 + (1));
seq__20404_22904 = G__22909;
chunk__20405_22905 = G__22910;
count__20406_22906 = G__22911;
i__20407_22907 = G__22912;
continue;
} else {
var temp__4126__auto___22913 = cljs.core.seq.call(null,seq__20404_22904);
if(temp__4126__auto___22913){
var seq__20404_22914__$1 = temp__4126__auto___22913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20404_22914__$1)){
var c__4541__auto___22915 = cljs.core.chunk_first.call(null,seq__20404_22914__$1);
var G__22916 = cljs.core.chunk_rest.call(null,seq__20404_22914__$1);
var G__22917 = c__4541__auto___22915;
var G__22918 = cljs.core.count.call(null,c__4541__auto___22915);
var G__22919 = (0);
seq__20404_22904 = G__22916;
chunk__20405_22905 = G__22917;
count__20406_22906 = G__22918;
i__20407_22907 = G__22919;
continue;
} else {
var arg__6250__auto___22920 = cljs.core.first.call(null,seq__20404_22914__$1);
a__6249__auto__.push(arg__6250__auto___22920);

var G__22921 = cljs.core.next.call(null,seq__20404_22914__$1);
var G__22922 = null;
var G__22923 = (0);
var G__22924 = (0);
seq__20404_22904 = G__22921;
chunk__20405_22905 = G__22922;
count__20406_22906 = G__22923;
i__20407_22907 = G__22924;
continue;
}
} else {
}
}
break;
}

return React.DOM.track.apply(null,a__6249__auto__);
};
var track = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22925__i = 0, G__22925__a = new Array(arguments.length -  0);
while (G__22925__i < G__22925__a.length) {G__22925__a[G__22925__i] = arguments[G__22925__i + 0]; ++G__22925__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22925__a,0);
} 
return track__delegate.call(this,args__6248__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__22926){
var args__6248__auto__ = cljs.core.seq(arglist__22926);
return track__delegate(args__6248__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20412_22927 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20413_22928 = null;
var count__20414_22929 = (0);
var i__20415_22930 = (0);
while(true){
if((i__20415_22930 < count__20414_22929)){
var arg__6250__auto___22931 = cljs.core._nth.call(null,chunk__20413_22928,i__20415_22930);
a__6249__auto__.push(arg__6250__auto___22931);

var G__22932 = seq__20412_22927;
var G__22933 = chunk__20413_22928;
var G__22934 = count__20414_22929;
var G__22935 = (i__20415_22930 + (1));
seq__20412_22927 = G__22932;
chunk__20413_22928 = G__22933;
count__20414_22929 = G__22934;
i__20415_22930 = G__22935;
continue;
} else {
var temp__4126__auto___22936 = cljs.core.seq.call(null,seq__20412_22927);
if(temp__4126__auto___22936){
var seq__20412_22937__$1 = temp__4126__auto___22936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20412_22937__$1)){
var c__4541__auto___22938 = cljs.core.chunk_first.call(null,seq__20412_22937__$1);
var G__22939 = cljs.core.chunk_rest.call(null,seq__20412_22937__$1);
var G__22940 = c__4541__auto___22938;
var G__22941 = cljs.core.count.call(null,c__4541__auto___22938);
var G__22942 = (0);
seq__20412_22927 = G__22939;
chunk__20413_22928 = G__22940;
count__20414_22929 = G__22941;
i__20415_22930 = G__22942;
continue;
} else {
var arg__6250__auto___22943 = cljs.core.first.call(null,seq__20412_22937__$1);
a__6249__auto__.push(arg__6250__auto___22943);

var G__22944 = cljs.core.next.call(null,seq__20412_22937__$1);
var G__22945 = null;
var G__22946 = (0);
var G__22947 = (0);
seq__20412_22927 = G__22944;
chunk__20413_22928 = G__22945;
count__20414_22929 = G__22946;
i__20415_22930 = G__22947;
continue;
}
} else {
}
}
break;
}

return React.DOM.u.apply(null,a__6249__auto__);
};
var u = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22948__i = 0, G__22948__a = new Array(arguments.length -  0);
while (G__22948__i < G__22948__a.length) {G__22948__a[G__22948__i] = arguments[G__22948__i + 0]; ++G__22948__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22948__a,0);
} 
return u__delegate.call(this,args__6248__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__22949){
var args__6248__auto__ = cljs.core.seq(arglist__22949);
return u__delegate(args__6248__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20420_22950 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20421_22951 = null;
var count__20422_22952 = (0);
var i__20423_22953 = (0);
while(true){
if((i__20423_22953 < count__20422_22952)){
var arg__6250__auto___22954 = cljs.core._nth.call(null,chunk__20421_22951,i__20423_22953);
a__6249__auto__.push(arg__6250__auto___22954);

var G__22955 = seq__20420_22950;
var G__22956 = chunk__20421_22951;
var G__22957 = count__20422_22952;
var G__22958 = (i__20423_22953 + (1));
seq__20420_22950 = G__22955;
chunk__20421_22951 = G__22956;
count__20422_22952 = G__22957;
i__20423_22953 = G__22958;
continue;
} else {
var temp__4126__auto___22959 = cljs.core.seq.call(null,seq__20420_22950);
if(temp__4126__auto___22959){
var seq__20420_22960__$1 = temp__4126__auto___22959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20420_22960__$1)){
var c__4541__auto___22961 = cljs.core.chunk_first.call(null,seq__20420_22960__$1);
var G__22962 = cljs.core.chunk_rest.call(null,seq__20420_22960__$1);
var G__22963 = c__4541__auto___22961;
var G__22964 = cljs.core.count.call(null,c__4541__auto___22961);
var G__22965 = (0);
seq__20420_22950 = G__22962;
chunk__20421_22951 = G__22963;
count__20422_22952 = G__22964;
i__20423_22953 = G__22965;
continue;
} else {
var arg__6250__auto___22966 = cljs.core.first.call(null,seq__20420_22960__$1);
a__6249__auto__.push(arg__6250__auto___22966);

var G__22967 = cljs.core.next.call(null,seq__20420_22960__$1);
var G__22968 = null;
var G__22969 = (0);
var G__22970 = (0);
seq__20420_22950 = G__22967;
chunk__20421_22951 = G__22968;
count__20422_22952 = G__22969;
i__20423_22953 = G__22970;
continue;
}
} else {
}
}
break;
}

return React.DOM.ul.apply(null,a__6249__auto__);
};
var ul = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22971__i = 0, G__22971__a = new Array(arguments.length -  0);
while (G__22971__i < G__22971__a.length) {G__22971__a[G__22971__i] = arguments[G__22971__i + 0]; ++G__22971__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22971__a,0);
} 
return ul__delegate.call(this,args__6248__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__22972){
var args__6248__auto__ = cljs.core.seq(arglist__22972);
return ul__delegate(args__6248__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20428_22973 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20429_22974 = null;
var count__20430_22975 = (0);
var i__20431_22976 = (0);
while(true){
if((i__20431_22976 < count__20430_22975)){
var arg__6250__auto___22977 = cljs.core._nth.call(null,chunk__20429_22974,i__20431_22976);
a__6249__auto__.push(arg__6250__auto___22977);

var G__22978 = seq__20428_22973;
var G__22979 = chunk__20429_22974;
var G__22980 = count__20430_22975;
var G__22981 = (i__20431_22976 + (1));
seq__20428_22973 = G__22978;
chunk__20429_22974 = G__22979;
count__20430_22975 = G__22980;
i__20431_22976 = G__22981;
continue;
} else {
var temp__4126__auto___22982 = cljs.core.seq.call(null,seq__20428_22973);
if(temp__4126__auto___22982){
var seq__20428_22983__$1 = temp__4126__auto___22982;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20428_22983__$1)){
var c__4541__auto___22984 = cljs.core.chunk_first.call(null,seq__20428_22983__$1);
var G__22985 = cljs.core.chunk_rest.call(null,seq__20428_22983__$1);
var G__22986 = c__4541__auto___22984;
var G__22987 = cljs.core.count.call(null,c__4541__auto___22984);
var G__22988 = (0);
seq__20428_22973 = G__22985;
chunk__20429_22974 = G__22986;
count__20430_22975 = G__22987;
i__20431_22976 = G__22988;
continue;
} else {
var arg__6250__auto___22989 = cljs.core.first.call(null,seq__20428_22983__$1);
a__6249__auto__.push(arg__6250__auto___22989);

var G__22990 = cljs.core.next.call(null,seq__20428_22983__$1);
var G__22991 = null;
var G__22992 = (0);
var G__22993 = (0);
seq__20428_22973 = G__22990;
chunk__20429_22974 = G__22991;
count__20430_22975 = G__22992;
i__20431_22976 = G__22993;
continue;
}
} else {
}
}
break;
}

return React.DOM.var$.apply(null,a__6249__auto__);
};
var var$ = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__22994__i = 0, G__22994__a = new Array(arguments.length -  0);
while (G__22994__i < G__22994__a.length) {G__22994__a[G__22994__i] = arguments[G__22994__i + 0]; ++G__22994__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__22994__a,0);
} 
return var$__delegate.call(this,args__6248__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__22995){
var args__6248__auto__ = cljs.core.seq(arglist__22995);
return var$__delegate(args__6248__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20436_22996 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20437_22997 = null;
var count__20438_22998 = (0);
var i__20439_22999 = (0);
while(true){
if((i__20439_22999 < count__20438_22998)){
var arg__6250__auto___23000 = cljs.core._nth.call(null,chunk__20437_22997,i__20439_22999);
a__6249__auto__.push(arg__6250__auto___23000);

var G__23001 = seq__20436_22996;
var G__23002 = chunk__20437_22997;
var G__23003 = count__20438_22998;
var G__23004 = (i__20439_22999 + (1));
seq__20436_22996 = G__23001;
chunk__20437_22997 = G__23002;
count__20438_22998 = G__23003;
i__20439_22999 = G__23004;
continue;
} else {
var temp__4126__auto___23005 = cljs.core.seq.call(null,seq__20436_22996);
if(temp__4126__auto___23005){
var seq__20436_23006__$1 = temp__4126__auto___23005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20436_23006__$1)){
var c__4541__auto___23007 = cljs.core.chunk_first.call(null,seq__20436_23006__$1);
var G__23008 = cljs.core.chunk_rest.call(null,seq__20436_23006__$1);
var G__23009 = c__4541__auto___23007;
var G__23010 = cljs.core.count.call(null,c__4541__auto___23007);
var G__23011 = (0);
seq__20436_22996 = G__23008;
chunk__20437_22997 = G__23009;
count__20438_22998 = G__23010;
i__20439_22999 = G__23011;
continue;
} else {
var arg__6250__auto___23012 = cljs.core.first.call(null,seq__20436_23006__$1);
a__6249__auto__.push(arg__6250__auto___23012);

var G__23013 = cljs.core.next.call(null,seq__20436_23006__$1);
var G__23014 = null;
var G__23015 = (0);
var G__23016 = (0);
seq__20436_22996 = G__23013;
chunk__20437_22997 = G__23014;
count__20438_22998 = G__23015;
i__20439_22999 = G__23016;
continue;
}
} else {
}
}
break;
}

return React.DOM.video.apply(null,a__6249__auto__);
};
var video = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__23017__i = 0, G__23017__a = new Array(arguments.length -  0);
while (G__23017__i < G__23017__a.length) {G__23017__a[G__23017__i] = arguments[G__23017__i + 0]; ++G__23017__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__23017__a,0);
} 
return video__delegate.call(this,args__6248__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__23018){
var args__6248__auto__ = cljs.core.seq(arglist__23018);
return video__delegate(args__6248__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20444_23019 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20445_23020 = null;
var count__20446_23021 = (0);
var i__20447_23022 = (0);
while(true){
if((i__20447_23022 < count__20446_23021)){
var arg__6250__auto___23023 = cljs.core._nth.call(null,chunk__20445_23020,i__20447_23022);
a__6249__auto__.push(arg__6250__auto___23023);

var G__23024 = seq__20444_23019;
var G__23025 = chunk__20445_23020;
var G__23026 = count__20446_23021;
var G__23027 = (i__20447_23022 + (1));
seq__20444_23019 = G__23024;
chunk__20445_23020 = G__23025;
count__20446_23021 = G__23026;
i__20447_23022 = G__23027;
continue;
} else {
var temp__4126__auto___23028 = cljs.core.seq.call(null,seq__20444_23019);
if(temp__4126__auto___23028){
var seq__20444_23029__$1 = temp__4126__auto___23028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20444_23029__$1)){
var c__4541__auto___23030 = cljs.core.chunk_first.call(null,seq__20444_23029__$1);
var G__23031 = cljs.core.chunk_rest.call(null,seq__20444_23029__$1);
var G__23032 = c__4541__auto___23030;
var G__23033 = cljs.core.count.call(null,c__4541__auto___23030);
var G__23034 = (0);
seq__20444_23019 = G__23031;
chunk__20445_23020 = G__23032;
count__20446_23021 = G__23033;
i__20447_23022 = G__23034;
continue;
} else {
var arg__6250__auto___23035 = cljs.core.first.call(null,seq__20444_23029__$1);
a__6249__auto__.push(arg__6250__auto___23035);

var G__23036 = cljs.core.next.call(null,seq__20444_23029__$1);
var G__23037 = null;
var G__23038 = (0);
var G__23039 = (0);
seq__20444_23019 = G__23036;
chunk__20445_23020 = G__23037;
count__20446_23021 = G__23038;
i__20447_23022 = G__23039;
continue;
}
} else {
}
}
break;
}

return React.DOM.wbr.apply(null,a__6249__auto__);
};
var wbr = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__23040__i = 0, G__23040__a = new Array(arguments.length -  0);
while (G__23040__i < G__23040__a.length) {G__23040__a[G__23040__i] = arguments[G__23040__i + 0]; ++G__23040__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__23040__a,0);
} 
return wbr__delegate.call(this,args__6248__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__23041){
var args__6248__auto__ = cljs.core.seq(arglist__23041);
return wbr__delegate(args__6248__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20452_23042 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20453_23043 = null;
var count__20454_23044 = (0);
var i__20455_23045 = (0);
while(true){
if((i__20455_23045 < count__20454_23044)){
var arg__6250__auto___23046 = cljs.core._nth.call(null,chunk__20453_23043,i__20455_23045);
a__6249__auto__.push(arg__6250__auto___23046);

var G__23047 = seq__20452_23042;
var G__23048 = chunk__20453_23043;
var G__23049 = count__20454_23044;
var G__23050 = (i__20455_23045 + (1));
seq__20452_23042 = G__23047;
chunk__20453_23043 = G__23048;
count__20454_23044 = G__23049;
i__20455_23045 = G__23050;
continue;
} else {
var temp__4126__auto___23051 = cljs.core.seq.call(null,seq__20452_23042);
if(temp__4126__auto___23051){
var seq__20452_23052__$1 = temp__4126__auto___23051;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20452_23052__$1)){
var c__4541__auto___23053 = cljs.core.chunk_first.call(null,seq__20452_23052__$1);
var G__23054 = cljs.core.chunk_rest.call(null,seq__20452_23052__$1);
var G__23055 = c__4541__auto___23053;
var G__23056 = cljs.core.count.call(null,c__4541__auto___23053);
var G__23057 = (0);
seq__20452_23042 = G__23054;
chunk__20453_23043 = G__23055;
count__20454_23044 = G__23056;
i__20455_23045 = G__23057;
continue;
} else {
var arg__6250__auto___23058 = cljs.core.first.call(null,seq__20452_23052__$1);
a__6249__auto__.push(arg__6250__auto___23058);

var G__23059 = cljs.core.next.call(null,seq__20452_23052__$1);
var G__23060 = null;
var G__23061 = (0);
var G__23062 = (0);
seq__20452_23042 = G__23059;
chunk__20453_23043 = G__23060;
count__20454_23044 = G__23061;
i__20455_23045 = G__23062;
continue;
}
} else {
}
}
break;
}

return React.DOM.circle.apply(null,a__6249__auto__);
};
var circle = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__23063__i = 0, G__23063__a = new Array(arguments.length -  0);
while (G__23063__i < G__23063__a.length) {G__23063__a[G__23063__i] = arguments[G__23063__i + 0]; ++G__23063__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__23063__a,0);
} 
return circle__delegate.call(this,args__6248__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__23064){
var args__6248__auto__ = cljs.core.seq(arglist__23064);
return circle__delegate(args__6248__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20460_23065 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20461_23066 = null;
var count__20462_23067 = (0);
var i__20463_23068 = (0);
while(true){
if((i__20463_23068 < count__20462_23067)){
var arg__6250__auto___23069 = cljs.core._nth.call(null,chunk__20461_23066,i__20463_23068);
a__6249__auto__.push(arg__6250__auto___23069);

var G__23070 = seq__20460_23065;
var G__23071 = chunk__20461_23066;
var G__23072 = count__20462_23067;
var G__23073 = (i__20463_23068 + (1));
seq__20460_23065 = G__23070;
chunk__20461_23066 = G__23071;
count__20462_23067 = G__23072;
i__20463_23068 = G__23073;
continue;
} else {
var temp__4126__auto___23074 = cljs.core.seq.call(null,seq__20460_23065);
if(temp__4126__auto___23074){
var seq__20460_23075__$1 = temp__4126__auto___23074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20460_23075__$1)){
var c__4541__auto___23076 = cljs.core.chunk_first.call(null,seq__20460_23075__$1);
var G__23077 = cljs.core.chunk_rest.call(null,seq__20460_23075__$1);
var G__23078 = c__4541__auto___23076;
var G__23079 = cljs.core.count.call(null,c__4541__auto___23076);
var G__23080 = (0);
seq__20460_23065 = G__23077;
chunk__20461_23066 = G__23078;
count__20462_23067 = G__23079;
i__20463_23068 = G__23080;
continue;
} else {
var arg__6250__auto___23081 = cljs.core.first.call(null,seq__20460_23075__$1);
a__6249__auto__.push(arg__6250__auto___23081);

var G__23082 = cljs.core.next.call(null,seq__20460_23075__$1);
var G__23083 = null;
var G__23084 = (0);
var G__23085 = (0);
seq__20460_23065 = G__23082;
chunk__20461_23066 = G__23083;
count__20462_23067 = G__23084;
i__20463_23068 = G__23085;
continue;
}
} else {
}
}
break;
}

return React.DOM.g.apply(null,a__6249__auto__);
};
var g = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__23086__i = 0, G__23086__a = new Array(arguments.length -  0);
while (G__23086__i < G__23086__a.length) {G__23086__a[G__23086__i] = arguments[G__23086__i + 0]; ++G__23086__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__23086__a,0);
} 
return g__delegate.call(this,args__6248__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__23087){
var args__6248__auto__ = cljs.core.seq(arglist__23087);
return g__delegate(args__6248__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20468_23088 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20469_23089 = null;
var count__20470_23090 = (0);
var i__20471_23091 = (0);
while(true){
if((i__20471_23091 < count__20470_23090)){
var arg__6250__auto___23092 = cljs.core._nth.call(null,chunk__20469_23089,i__20471_23091);
a__6249__auto__.push(arg__6250__auto___23092);

var G__23093 = seq__20468_23088;
var G__23094 = chunk__20469_23089;
var G__23095 = count__20470_23090;
var G__23096 = (i__20471_23091 + (1));
seq__20468_23088 = G__23093;
chunk__20469_23089 = G__23094;
count__20470_23090 = G__23095;
i__20471_23091 = G__23096;
continue;
} else {
var temp__4126__auto___23097 = cljs.core.seq.call(null,seq__20468_23088);
if(temp__4126__auto___23097){
var seq__20468_23098__$1 = temp__4126__auto___23097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20468_23098__$1)){
var c__4541__auto___23099 = cljs.core.chunk_first.call(null,seq__20468_23098__$1);
var G__23100 = cljs.core.chunk_rest.call(null,seq__20468_23098__$1);
var G__23101 = c__4541__auto___23099;
var G__23102 = cljs.core.count.call(null,c__4541__auto___23099);
var G__23103 = (0);
seq__20468_23088 = G__23100;
chunk__20469_23089 = G__23101;
count__20470_23090 = G__23102;
i__20471_23091 = G__23103;
continue;
} else {
var arg__6250__auto___23104 = cljs.core.first.call(null,seq__20468_23098__$1);
a__6249__auto__.push(arg__6250__auto___23104);

var G__23105 = cljs.core.next.call(null,seq__20468_23098__$1);
var G__23106 = null;
var G__23107 = (0);
var G__23108 = (0);
seq__20468_23088 = G__23105;
chunk__20469_23089 = G__23106;
count__20470_23090 = G__23107;
i__20471_23091 = G__23108;
continue;
}
} else {
}
}
break;
}

return React.DOM.line.apply(null,a__6249__auto__);
};
var line = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__23109__i = 0, G__23109__a = new Array(arguments.length -  0);
while (G__23109__i < G__23109__a.length) {G__23109__a[G__23109__i] = arguments[G__23109__i + 0]; ++G__23109__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__23109__a,0);
} 
return line__delegate.call(this,args__6248__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__23110){
var args__6248__auto__ = cljs.core.seq(arglist__23110);
return line__delegate(args__6248__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20476_23111 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20477_23112 = null;
var count__20478_23113 = (0);
var i__20479_23114 = (0);
while(true){
if((i__20479_23114 < count__20478_23113)){
var arg__6250__auto___23115 = cljs.core._nth.call(null,chunk__20477_23112,i__20479_23114);
a__6249__auto__.push(arg__6250__auto___23115);

var G__23116 = seq__20476_23111;
var G__23117 = chunk__20477_23112;
var G__23118 = count__20478_23113;
var G__23119 = (i__20479_23114 + (1));
seq__20476_23111 = G__23116;
chunk__20477_23112 = G__23117;
count__20478_23113 = G__23118;
i__20479_23114 = G__23119;
continue;
} else {
var temp__4126__auto___23120 = cljs.core.seq.call(null,seq__20476_23111);
if(temp__4126__auto___23120){
var seq__20476_23121__$1 = temp__4126__auto___23120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20476_23121__$1)){
var c__4541__auto___23122 = cljs.core.chunk_first.call(null,seq__20476_23121__$1);
var G__23123 = cljs.core.chunk_rest.call(null,seq__20476_23121__$1);
var G__23124 = c__4541__auto___23122;
var G__23125 = cljs.core.count.call(null,c__4541__auto___23122);
var G__23126 = (0);
seq__20476_23111 = G__23123;
chunk__20477_23112 = G__23124;
count__20478_23113 = G__23125;
i__20479_23114 = G__23126;
continue;
} else {
var arg__6250__auto___23127 = cljs.core.first.call(null,seq__20476_23121__$1);
a__6249__auto__.push(arg__6250__auto___23127);

var G__23128 = cljs.core.next.call(null,seq__20476_23121__$1);
var G__23129 = null;
var G__23130 = (0);
var G__23131 = (0);
seq__20476_23111 = G__23128;
chunk__20477_23112 = G__23129;
count__20478_23113 = G__23130;
i__20479_23114 = G__23131;
continue;
}
} else {
}
}
break;
}

return React.DOM.path.apply(null,a__6249__auto__);
};
var path = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__23132__i = 0, G__23132__a = new Array(arguments.length -  0);
while (G__23132__i < G__23132__a.length) {G__23132__a[G__23132__i] = arguments[G__23132__i + 0]; ++G__23132__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__23132__a,0);
} 
return path__delegate.call(this,args__6248__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__23133){
var args__6248__auto__ = cljs.core.seq(arglist__23133);
return path__delegate(args__6248__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20484_23134 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20485_23135 = null;
var count__20486_23136 = (0);
var i__20487_23137 = (0);
while(true){
if((i__20487_23137 < count__20486_23136)){
var arg__6250__auto___23138 = cljs.core._nth.call(null,chunk__20485_23135,i__20487_23137);
a__6249__auto__.push(arg__6250__auto___23138);

var G__23139 = seq__20484_23134;
var G__23140 = chunk__20485_23135;
var G__23141 = count__20486_23136;
var G__23142 = (i__20487_23137 + (1));
seq__20484_23134 = G__23139;
chunk__20485_23135 = G__23140;
count__20486_23136 = G__23141;
i__20487_23137 = G__23142;
continue;
} else {
var temp__4126__auto___23143 = cljs.core.seq.call(null,seq__20484_23134);
if(temp__4126__auto___23143){
var seq__20484_23144__$1 = temp__4126__auto___23143;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20484_23144__$1)){
var c__4541__auto___23145 = cljs.core.chunk_first.call(null,seq__20484_23144__$1);
var G__23146 = cljs.core.chunk_rest.call(null,seq__20484_23144__$1);
var G__23147 = c__4541__auto___23145;
var G__23148 = cljs.core.count.call(null,c__4541__auto___23145);
var G__23149 = (0);
seq__20484_23134 = G__23146;
chunk__20485_23135 = G__23147;
count__20486_23136 = G__23148;
i__20487_23137 = G__23149;
continue;
} else {
var arg__6250__auto___23150 = cljs.core.first.call(null,seq__20484_23144__$1);
a__6249__auto__.push(arg__6250__auto___23150);

var G__23151 = cljs.core.next.call(null,seq__20484_23144__$1);
var G__23152 = null;
var G__23153 = (0);
var G__23154 = (0);
seq__20484_23134 = G__23151;
chunk__20485_23135 = G__23152;
count__20486_23136 = G__23153;
i__20487_23137 = G__23154;
continue;
}
} else {
}
}
break;
}

return React.DOM.polygon.apply(null,a__6249__auto__);
};
var polygon = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__23155__i = 0, G__23155__a = new Array(arguments.length -  0);
while (G__23155__i < G__23155__a.length) {G__23155__a[G__23155__i] = arguments[G__23155__i + 0]; ++G__23155__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__23155__a,0);
} 
return polygon__delegate.call(this,args__6248__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__23156){
var args__6248__auto__ = cljs.core.seq(arglist__23156);
return polygon__delegate(args__6248__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20492_23157 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20493_23158 = null;
var count__20494_23159 = (0);
var i__20495_23160 = (0);
while(true){
if((i__20495_23160 < count__20494_23159)){
var arg__6250__auto___23161 = cljs.core._nth.call(null,chunk__20493_23158,i__20495_23160);
a__6249__auto__.push(arg__6250__auto___23161);

var G__23162 = seq__20492_23157;
var G__23163 = chunk__20493_23158;
var G__23164 = count__20494_23159;
var G__23165 = (i__20495_23160 + (1));
seq__20492_23157 = G__23162;
chunk__20493_23158 = G__23163;
count__20494_23159 = G__23164;
i__20495_23160 = G__23165;
continue;
} else {
var temp__4126__auto___23166 = cljs.core.seq.call(null,seq__20492_23157);
if(temp__4126__auto___23166){
var seq__20492_23167__$1 = temp__4126__auto___23166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20492_23167__$1)){
var c__4541__auto___23168 = cljs.core.chunk_first.call(null,seq__20492_23167__$1);
var G__23169 = cljs.core.chunk_rest.call(null,seq__20492_23167__$1);
var G__23170 = c__4541__auto___23168;
var G__23171 = cljs.core.count.call(null,c__4541__auto___23168);
var G__23172 = (0);
seq__20492_23157 = G__23169;
chunk__20493_23158 = G__23170;
count__20494_23159 = G__23171;
i__20495_23160 = G__23172;
continue;
} else {
var arg__6250__auto___23173 = cljs.core.first.call(null,seq__20492_23167__$1);
a__6249__auto__.push(arg__6250__auto___23173);

var G__23174 = cljs.core.next.call(null,seq__20492_23167__$1);
var G__23175 = null;
var G__23176 = (0);
var G__23177 = (0);
seq__20492_23157 = G__23174;
chunk__20493_23158 = G__23175;
count__20494_23159 = G__23176;
i__20495_23160 = G__23177;
continue;
}
} else {
}
}
break;
}

return React.DOM.polyline.apply(null,a__6249__auto__);
};
var polyline = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__23178__i = 0, G__23178__a = new Array(arguments.length -  0);
while (G__23178__i < G__23178__a.length) {G__23178__a[G__23178__i] = arguments[G__23178__i + 0]; ++G__23178__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__23178__a,0);
} 
return polyline__delegate.call(this,args__6248__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__23179){
var args__6248__auto__ = cljs.core.seq(arglist__23179);
return polyline__delegate(args__6248__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20500_23180 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20501_23181 = null;
var count__20502_23182 = (0);
var i__20503_23183 = (0);
while(true){
if((i__20503_23183 < count__20502_23182)){
var arg__6250__auto___23184 = cljs.core._nth.call(null,chunk__20501_23181,i__20503_23183);
a__6249__auto__.push(arg__6250__auto___23184);

var G__23185 = seq__20500_23180;
var G__23186 = chunk__20501_23181;
var G__23187 = count__20502_23182;
var G__23188 = (i__20503_23183 + (1));
seq__20500_23180 = G__23185;
chunk__20501_23181 = G__23186;
count__20502_23182 = G__23187;
i__20503_23183 = G__23188;
continue;
} else {
var temp__4126__auto___23189 = cljs.core.seq.call(null,seq__20500_23180);
if(temp__4126__auto___23189){
var seq__20500_23190__$1 = temp__4126__auto___23189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20500_23190__$1)){
var c__4541__auto___23191 = cljs.core.chunk_first.call(null,seq__20500_23190__$1);
var G__23192 = cljs.core.chunk_rest.call(null,seq__20500_23190__$1);
var G__23193 = c__4541__auto___23191;
var G__23194 = cljs.core.count.call(null,c__4541__auto___23191);
var G__23195 = (0);
seq__20500_23180 = G__23192;
chunk__20501_23181 = G__23193;
count__20502_23182 = G__23194;
i__20503_23183 = G__23195;
continue;
} else {
var arg__6250__auto___23196 = cljs.core.first.call(null,seq__20500_23190__$1);
a__6249__auto__.push(arg__6250__auto___23196);

var G__23197 = cljs.core.next.call(null,seq__20500_23190__$1);
var G__23198 = null;
var G__23199 = (0);
var G__23200 = (0);
seq__20500_23180 = G__23197;
chunk__20501_23181 = G__23198;
count__20502_23182 = G__23199;
i__20503_23183 = G__23200;
continue;
}
} else {
}
}
break;
}

return React.DOM.rect.apply(null,a__6249__auto__);
};
var rect = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__23201__i = 0, G__23201__a = new Array(arguments.length -  0);
while (G__23201__i < G__23201__a.length) {G__23201__a[G__23201__i] = arguments[G__23201__i + 0]; ++G__23201__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__23201__a,0);
} 
return rect__delegate.call(this,args__6248__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__23202){
var args__6248__auto__ = cljs.core.seq(arglist__23202);
return rect__delegate(args__6248__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__20508_23203 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__20509_23204 = null;
var count__20510_23205 = (0);
var i__20511_23206 = (0);
while(true){
if((i__20511_23206 < count__20510_23205)){
var arg__6250__auto___23207 = cljs.core._nth.call(null,chunk__20509_23204,i__20511_23206);
a__6249__auto__.push(arg__6250__auto___23207);

var G__23208 = seq__20508_23203;
var G__23209 = chunk__20509_23204;
var G__23210 = count__20510_23205;
var G__23211 = (i__20511_23206 + (1));
seq__20508_23203 = G__23208;
chunk__20509_23204 = G__23209;
count__20510_23205 = G__23210;
i__20511_23206 = G__23211;
continue;
} else {
var temp__4126__auto___23212 = cljs.core.seq.call(null,seq__20508_23203);
if(temp__4126__auto___23212){
var seq__20508_23213__$1 = temp__4126__auto___23212;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20508_23213__$1)){
var c__4541__auto___23214 = cljs.core.chunk_first.call(null,seq__20508_23213__$1);
var G__23215 = cljs.core.chunk_rest.call(null,seq__20508_23213__$1);
var G__23216 = c__4541__auto___23214;
var G__23217 = cljs.core.count.call(null,c__4541__auto___23214);
var G__23218 = (0);
seq__20508_23203 = G__23215;
chunk__20509_23204 = G__23216;
count__20510_23205 = G__23217;
i__20511_23206 = G__23218;
continue;
} else {
var arg__6250__auto___23219 = cljs.core.first.call(null,seq__20508_23213__$1);
a__6249__auto__.push(arg__6250__auto___23219);

var G__23220 = cljs.core.next.call(null,seq__20508_23213__$1);
var G__23221 = null;
var G__23222 = (0);
var G__23223 = (0);
seq__20508_23203 = G__23220;
chunk__20509_23204 = G__23221;
count__20510_23205 = G__23222;
i__20511_23206 = G__23223;
continue;
}
} else {
}
}
break;
}

return React.DOM.svg.apply(null,a__6249__auto__);
};
var svg = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__23224__i = 0, G__23224__a = new Array(arguments.length -  0);
while (G__23224__i < G__23224__a.length) {G__23224__a[G__23224__i] = arguments[G__23224__i + 0]; ++G__23224__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__23224__a,0);
} 
return svg__delegate.call(this,args__6248__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__23225){
var args__6248__auto__ = cljs.core.seq(arglist__23225);
return svg__delegate(args__6248__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__6248__auto__){

var a__6249__auto__ = [];
a__6249__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__6248__auto__)));

var seq__19820_23226 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__6248__auto__));
var chunk__19821_23227 = null;
var count__19822_23228 = (0);
var i__19823_23229 = (0);
while(true){
if((i__19823_23229 < count__19822_23228)){
var arg__6250__auto___23230 = cljs.core._nth.call(null,chunk__19821_23227,i__19823_23229);
a__6249__auto__.push(arg__6250__auto___23230);

var G__23231 = seq__19820_23226;
var G__23232 = chunk__19821_23227;
var G__23233 = count__19822_23228;
var G__23234 = (i__19823_23229 + (1));
seq__19820_23226 = G__23231;
chunk__19821_23227 = G__23232;
count__19822_23228 = G__23233;
i__19823_23229 = G__23234;
continue;
} else {
var temp__4126__auto___23235 = cljs.core.seq.call(null,seq__19820_23226);
if(temp__4126__auto___23235){
var seq__19820_23236__$1 = temp__4126__auto___23235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19820_23236__$1)){
var c__4541__auto___23237 = cljs.core.chunk_first.call(null,seq__19820_23236__$1);
var G__23238 = cljs.core.chunk_rest.call(null,seq__19820_23236__$1);
var G__23239 = c__4541__auto___23237;
var G__23240 = cljs.core.count.call(null,c__4541__auto___23237);
var G__23241 = (0);
seq__19820_23226 = G__23238;
chunk__19821_23227 = G__23239;
count__19822_23228 = G__23240;
i__19823_23229 = G__23241;
continue;
} else {
var arg__6250__auto___23242 = cljs.core.first.call(null,seq__19820_23236__$1);
a__6249__auto__.push(arg__6250__auto___23242);

var G__23243 = cljs.core.next.call(null,seq__19820_23236__$1);
var G__23244 = null;
var G__23245 = (0);
var G__23246 = (0);
seq__19820_23226 = G__23243;
chunk__19821_23227 = G__23244;
count__19822_23228 = G__23245;
i__19823_23229 = G__23246;
continue;
}
} else {
}
}
break;
}

return React.DOM.text.apply(null,a__6249__auto__);
};
var text = function (var_args){
var args__6248__auto__ = null;
if (arguments.length > 0) {
var G__23247__i = 0, G__23247__a = new Array(arguments.length -  0);
while (G__23247__i < G__23247__a.length) {G__23247__a[G__23247__i] = arguments[G__23247__i + 0]; ++G__23247__i;}
  args__6248__auto__ = new cljs.core.IndexedSeq(G__23247__a,0);
} 
return text__delegate.call(this,args__6248__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__23248){
var args__6248__auto__ = cljs.core.seq(arglist__23248);
return text__delegate(args__6248__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;

quiescent.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"caption","caption",-855383902),new cljs.core.Keyword(null,"bdi","bdi",-1323025886),new cljs.core.Keyword(null,"rp","rp",2006698083),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"big","big",903550151),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"dfn","dfn",241908167),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"wbr","wbr",228661800),new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"ins","ins",-1021983570),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"datalist","datalist",-1235043474),new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"samp","samp",1506141136),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"rt","rt",623480692),new cljs.core.Keyword(null,"colgroup","colgroup",651118645),new cljs.core.Keyword(null,"meter","meter",-187641611),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"bdo","bdo",-2131148202),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"noscript","noscript",-704777289),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"menuitem","menuitem",1004047353),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"embed","embed",-1354913349),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"keygen","keygen",-571693253),new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.Keyword(null,"cite","cite",1909439996),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"ruby","ruby",2000737661),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"u","u",-1156634785)],[quiescent.dom.thead,quiescent.dom.path,quiescent.dom.del,quiescent.dom.fieldset,quiescent.dom.q,quiescent.dom.figure,quiescent.dom.aside,quiescent.dom.figcaption,quiescent.dom.video,quiescent.dom.address,quiescent.dom.caption,quiescent.dom.bdi,quiescent.dom.rp,quiescent.dom.hr,quiescent.dom.dd,quiescent.dom.meta,quiescent.dom.tbody,quiescent.dom.table,quiescent.dom.ul,quiescent.dom.pre,quiescent.dom.sup,quiescent.dom.script,quiescent.dom.big,quiescent.dom.button,quiescent.dom.dfn,quiescent.dom.sub,quiescent.dom.mark,quiescent.dom.wbr,quiescent.dom.strong,quiescent.dom.td,quiescent.dom.li,quiescent.dom.dt,quiescent.dom.section,quiescent.dom.th,quiescent.dom.time,quiescent.dom.optgroup,quiescent.dom.iframe,quiescent.dom.tr,quiescent.dom.circle,quiescent.dom.article,quiescent.dom.legend,quiescent.dom.em,quiescent.dom.kbd,quiescent.dom.abbr,quiescent.dom.source,quiescent.dom.output,quiescent.dom.ins,quiescent.dom.footer,quiescent.dom.header,quiescent.dom.datalist,quiescent.dom.tfoot,quiescent.dom.s,quiescent.dom.h5,quiescent.dom.canvas,quiescent.dom.param,quiescent.dom.title,quiescent.dom.small,quiescent.dom.style,quiescent.dom.textarea,quiescent.dom.div,quiescent.dom.option,quiescent.dom.summary,quiescent.dom.samp,quiescent.dom.h4,quiescent.dom.head,quiescent.dom.g,quiescent.dom.ol,quiescent.dom.details,quiescent.dom.line,quiescent.dom.var$,quiescent.dom.h6,quiescent.dom.link,quiescent.dom.col,quiescent.dom.label,quiescent.dom.rt,quiescent.dom.colgroup,quiescent.dom.meter,quiescent.dom.svg,quiescent.dom.code,quiescent.dom.bdo,quiescent.dom.b,quiescent.dom.noscript,quiescent.dom.h2,quiescent.dom.area,quiescent.dom.br,quiescent.dom.form,quiescent.dom.audio,quiescent.dom.input,quiescent.dom.menuitem,quiescent.dom.base,quiescent.dom.h1,quiescent.dom.progress,quiescent.dom.main,quiescent.dom.embed,quiescent.dom.h3,quiescent.dom.body,quiescent.dom.keygen,quiescent.dom.polyline,quiescent.dom.cite,quiescent.dom.rect,quiescent.dom.p,quiescent.dom.nav,quiescent.dom.ruby,quiescent.dom.map,quiescent.dom.object,quiescent.dom.i,quiescent.dom.menu,quiescent.dom.blockquote,quiescent.dom.img,quiescent.dom.a,quiescent.dom.dl,quiescent.dom.select,quiescent.dom.polygon,quiescent.dom.html,quiescent.dom.text,quiescent.dom.span,quiescent.dom.track,quiescent.dom.data,quiescent.dom.u]);

//# sourceMappingURL=dom.js.map