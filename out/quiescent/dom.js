// Compiled by ClojureScript 0.0-2674 {}
goog.provide('quiescent.dom');
goog.require('cljs.core');
goog.require('quiescent');
/**
* @param {...*} var_args
*/
quiescent.dom.a = (function() { 
var a__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16554_17502 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16555_17503 = null;
var count__16556_17504 = (0);
var i__16557_17505 = (0);
while(true){
if((i__16557_17505 < count__16556_17504)){
var arg__15359__auto___17506 = cljs.core._nth.call(null,chunk__16555_17503,i__16557_17505);
a__15358__auto__.push(arg__15359__auto___17506);

var G__17507 = seq__16554_17502;
var G__17508 = chunk__16555_17503;
var G__17509 = count__16556_17504;
var G__17510 = (i__16557_17505 + (1));
seq__16554_17502 = G__17507;
chunk__16555_17503 = G__17508;
count__16556_17504 = G__17509;
i__16557_17505 = G__17510;
continue;
} else {
var temp__4126__auto___17511 = cljs.core.seq.call(null,seq__16554_17502);
if(temp__4126__auto___17511){
var seq__16554_17512__$1 = temp__4126__auto___17511;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16554_17512__$1)){
var c__4519__auto___17513 = cljs.core.chunk_first.call(null,seq__16554_17512__$1);
var G__17514 = cljs.core.chunk_rest.call(null,seq__16554_17512__$1);
var G__17515 = c__4519__auto___17513;
var G__17516 = cljs.core.count.call(null,c__4519__auto___17513);
var G__17517 = (0);
seq__16554_17502 = G__17514;
chunk__16555_17503 = G__17515;
count__16556_17504 = G__17516;
i__16557_17505 = G__17517;
continue;
} else {
var arg__15359__auto___17518 = cljs.core.first.call(null,seq__16554_17512__$1);
a__15358__auto__.push(arg__15359__auto___17518);

var G__17519 = cljs.core.next.call(null,seq__16554_17512__$1);
var G__17520 = null;
var G__17521 = (0);
var G__17522 = (0);
seq__16554_17502 = G__17519;
chunk__16555_17503 = G__17520;
count__16556_17504 = G__17521;
i__16557_17505 = G__17522;
continue;
}
} else {
}
}
break;
}

return React.DOM.a.apply(null,a__15358__auto__);
};
var a = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17523__i = 0, G__17523__a = new Array(arguments.length -  0);
while (G__17523__i < G__17523__a.length) {G__17523__a[G__17523__i] = arguments[G__17523__i + 0]; ++G__17523__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17523__a,0);
} 
return a__delegate.call(this,args__15357__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__17524){
var args__15357__auto__ = cljs.core.seq(arglist__17524);
return a__delegate(args__15357__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16562_17525 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16563_17526 = null;
var count__16564_17527 = (0);
var i__16565_17528 = (0);
while(true){
if((i__16565_17528 < count__16564_17527)){
var arg__15359__auto___17529 = cljs.core._nth.call(null,chunk__16563_17526,i__16565_17528);
a__15358__auto__.push(arg__15359__auto___17529);

var G__17530 = seq__16562_17525;
var G__17531 = chunk__16563_17526;
var G__17532 = count__16564_17527;
var G__17533 = (i__16565_17528 + (1));
seq__16562_17525 = G__17530;
chunk__16563_17526 = G__17531;
count__16564_17527 = G__17532;
i__16565_17528 = G__17533;
continue;
} else {
var temp__4126__auto___17534 = cljs.core.seq.call(null,seq__16562_17525);
if(temp__4126__auto___17534){
var seq__16562_17535__$1 = temp__4126__auto___17534;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16562_17535__$1)){
var c__4519__auto___17536 = cljs.core.chunk_first.call(null,seq__16562_17535__$1);
var G__17537 = cljs.core.chunk_rest.call(null,seq__16562_17535__$1);
var G__17538 = c__4519__auto___17536;
var G__17539 = cljs.core.count.call(null,c__4519__auto___17536);
var G__17540 = (0);
seq__16562_17525 = G__17537;
chunk__16563_17526 = G__17538;
count__16564_17527 = G__17539;
i__16565_17528 = G__17540;
continue;
} else {
var arg__15359__auto___17541 = cljs.core.first.call(null,seq__16562_17535__$1);
a__15358__auto__.push(arg__15359__auto___17541);

var G__17542 = cljs.core.next.call(null,seq__16562_17535__$1);
var G__17543 = null;
var G__17544 = (0);
var G__17545 = (0);
seq__16562_17525 = G__17542;
chunk__16563_17526 = G__17543;
count__16564_17527 = G__17544;
i__16565_17528 = G__17545;
continue;
}
} else {
}
}
break;
}

return React.DOM.abbr.apply(null,a__15358__auto__);
};
var abbr = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17546__i = 0, G__17546__a = new Array(arguments.length -  0);
while (G__17546__i < G__17546__a.length) {G__17546__a[G__17546__i] = arguments[G__17546__i + 0]; ++G__17546__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17546__a,0);
} 
return abbr__delegate.call(this,args__15357__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__17547){
var args__15357__auto__ = cljs.core.seq(arglist__17547);
return abbr__delegate(args__15357__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16570_17548 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16571_17549 = null;
var count__16572_17550 = (0);
var i__16573_17551 = (0);
while(true){
if((i__16573_17551 < count__16572_17550)){
var arg__15359__auto___17552 = cljs.core._nth.call(null,chunk__16571_17549,i__16573_17551);
a__15358__auto__.push(arg__15359__auto___17552);

var G__17553 = seq__16570_17548;
var G__17554 = chunk__16571_17549;
var G__17555 = count__16572_17550;
var G__17556 = (i__16573_17551 + (1));
seq__16570_17548 = G__17553;
chunk__16571_17549 = G__17554;
count__16572_17550 = G__17555;
i__16573_17551 = G__17556;
continue;
} else {
var temp__4126__auto___17557 = cljs.core.seq.call(null,seq__16570_17548);
if(temp__4126__auto___17557){
var seq__16570_17558__$1 = temp__4126__auto___17557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16570_17558__$1)){
var c__4519__auto___17559 = cljs.core.chunk_first.call(null,seq__16570_17558__$1);
var G__17560 = cljs.core.chunk_rest.call(null,seq__16570_17558__$1);
var G__17561 = c__4519__auto___17559;
var G__17562 = cljs.core.count.call(null,c__4519__auto___17559);
var G__17563 = (0);
seq__16570_17548 = G__17560;
chunk__16571_17549 = G__17561;
count__16572_17550 = G__17562;
i__16573_17551 = G__17563;
continue;
} else {
var arg__15359__auto___17564 = cljs.core.first.call(null,seq__16570_17558__$1);
a__15358__auto__.push(arg__15359__auto___17564);

var G__17565 = cljs.core.next.call(null,seq__16570_17558__$1);
var G__17566 = null;
var G__17567 = (0);
var G__17568 = (0);
seq__16570_17548 = G__17565;
chunk__16571_17549 = G__17566;
count__16572_17550 = G__17567;
i__16573_17551 = G__17568;
continue;
}
} else {
}
}
break;
}

return React.DOM.address.apply(null,a__15358__auto__);
};
var address = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17569__i = 0, G__17569__a = new Array(arguments.length -  0);
while (G__17569__i < G__17569__a.length) {G__17569__a[G__17569__i] = arguments[G__17569__i + 0]; ++G__17569__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17569__a,0);
} 
return address__delegate.call(this,args__15357__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__17570){
var args__15357__auto__ = cljs.core.seq(arglist__17570);
return address__delegate(args__15357__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16578_17571 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16579_17572 = null;
var count__16580_17573 = (0);
var i__16581_17574 = (0);
while(true){
if((i__16581_17574 < count__16580_17573)){
var arg__15359__auto___17575 = cljs.core._nth.call(null,chunk__16579_17572,i__16581_17574);
a__15358__auto__.push(arg__15359__auto___17575);

var G__17576 = seq__16578_17571;
var G__17577 = chunk__16579_17572;
var G__17578 = count__16580_17573;
var G__17579 = (i__16581_17574 + (1));
seq__16578_17571 = G__17576;
chunk__16579_17572 = G__17577;
count__16580_17573 = G__17578;
i__16581_17574 = G__17579;
continue;
} else {
var temp__4126__auto___17580 = cljs.core.seq.call(null,seq__16578_17571);
if(temp__4126__auto___17580){
var seq__16578_17581__$1 = temp__4126__auto___17580;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16578_17581__$1)){
var c__4519__auto___17582 = cljs.core.chunk_first.call(null,seq__16578_17581__$1);
var G__17583 = cljs.core.chunk_rest.call(null,seq__16578_17581__$1);
var G__17584 = c__4519__auto___17582;
var G__17585 = cljs.core.count.call(null,c__4519__auto___17582);
var G__17586 = (0);
seq__16578_17571 = G__17583;
chunk__16579_17572 = G__17584;
count__16580_17573 = G__17585;
i__16581_17574 = G__17586;
continue;
} else {
var arg__15359__auto___17587 = cljs.core.first.call(null,seq__16578_17581__$1);
a__15358__auto__.push(arg__15359__auto___17587);

var G__17588 = cljs.core.next.call(null,seq__16578_17581__$1);
var G__17589 = null;
var G__17590 = (0);
var G__17591 = (0);
seq__16578_17571 = G__17588;
chunk__16579_17572 = G__17589;
count__16580_17573 = G__17590;
i__16581_17574 = G__17591;
continue;
}
} else {
}
}
break;
}

return React.DOM.area.apply(null,a__15358__auto__);
};
var area = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17592__i = 0, G__17592__a = new Array(arguments.length -  0);
while (G__17592__i < G__17592__a.length) {G__17592__a[G__17592__i] = arguments[G__17592__i + 0]; ++G__17592__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17592__a,0);
} 
return area__delegate.call(this,args__15357__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__17593){
var args__15357__auto__ = cljs.core.seq(arglist__17593);
return area__delegate(args__15357__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16586_17594 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16587_17595 = null;
var count__16588_17596 = (0);
var i__16589_17597 = (0);
while(true){
if((i__16589_17597 < count__16588_17596)){
var arg__15359__auto___17598 = cljs.core._nth.call(null,chunk__16587_17595,i__16589_17597);
a__15358__auto__.push(arg__15359__auto___17598);

var G__17599 = seq__16586_17594;
var G__17600 = chunk__16587_17595;
var G__17601 = count__16588_17596;
var G__17602 = (i__16589_17597 + (1));
seq__16586_17594 = G__17599;
chunk__16587_17595 = G__17600;
count__16588_17596 = G__17601;
i__16589_17597 = G__17602;
continue;
} else {
var temp__4126__auto___17603 = cljs.core.seq.call(null,seq__16586_17594);
if(temp__4126__auto___17603){
var seq__16586_17604__$1 = temp__4126__auto___17603;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16586_17604__$1)){
var c__4519__auto___17605 = cljs.core.chunk_first.call(null,seq__16586_17604__$1);
var G__17606 = cljs.core.chunk_rest.call(null,seq__16586_17604__$1);
var G__17607 = c__4519__auto___17605;
var G__17608 = cljs.core.count.call(null,c__4519__auto___17605);
var G__17609 = (0);
seq__16586_17594 = G__17606;
chunk__16587_17595 = G__17607;
count__16588_17596 = G__17608;
i__16589_17597 = G__17609;
continue;
} else {
var arg__15359__auto___17610 = cljs.core.first.call(null,seq__16586_17604__$1);
a__15358__auto__.push(arg__15359__auto___17610);

var G__17611 = cljs.core.next.call(null,seq__16586_17604__$1);
var G__17612 = null;
var G__17613 = (0);
var G__17614 = (0);
seq__16586_17594 = G__17611;
chunk__16587_17595 = G__17612;
count__16588_17596 = G__17613;
i__16589_17597 = G__17614;
continue;
}
} else {
}
}
break;
}

return React.DOM.article.apply(null,a__15358__auto__);
};
var article = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17615__i = 0, G__17615__a = new Array(arguments.length -  0);
while (G__17615__i < G__17615__a.length) {G__17615__a[G__17615__i] = arguments[G__17615__i + 0]; ++G__17615__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17615__a,0);
} 
return article__delegate.call(this,args__15357__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__17616){
var args__15357__auto__ = cljs.core.seq(arglist__17616);
return article__delegate(args__15357__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16594_17617 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16595_17618 = null;
var count__16596_17619 = (0);
var i__16597_17620 = (0);
while(true){
if((i__16597_17620 < count__16596_17619)){
var arg__15359__auto___17621 = cljs.core._nth.call(null,chunk__16595_17618,i__16597_17620);
a__15358__auto__.push(arg__15359__auto___17621);

var G__17622 = seq__16594_17617;
var G__17623 = chunk__16595_17618;
var G__17624 = count__16596_17619;
var G__17625 = (i__16597_17620 + (1));
seq__16594_17617 = G__17622;
chunk__16595_17618 = G__17623;
count__16596_17619 = G__17624;
i__16597_17620 = G__17625;
continue;
} else {
var temp__4126__auto___17626 = cljs.core.seq.call(null,seq__16594_17617);
if(temp__4126__auto___17626){
var seq__16594_17627__$1 = temp__4126__auto___17626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16594_17627__$1)){
var c__4519__auto___17628 = cljs.core.chunk_first.call(null,seq__16594_17627__$1);
var G__17629 = cljs.core.chunk_rest.call(null,seq__16594_17627__$1);
var G__17630 = c__4519__auto___17628;
var G__17631 = cljs.core.count.call(null,c__4519__auto___17628);
var G__17632 = (0);
seq__16594_17617 = G__17629;
chunk__16595_17618 = G__17630;
count__16596_17619 = G__17631;
i__16597_17620 = G__17632;
continue;
} else {
var arg__15359__auto___17633 = cljs.core.first.call(null,seq__16594_17627__$1);
a__15358__auto__.push(arg__15359__auto___17633);

var G__17634 = cljs.core.next.call(null,seq__16594_17627__$1);
var G__17635 = null;
var G__17636 = (0);
var G__17637 = (0);
seq__16594_17617 = G__17634;
chunk__16595_17618 = G__17635;
count__16596_17619 = G__17636;
i__16597_17620 = G__17637;
continue;
}
} else {
}
}
break;
}

return React.DOM.aside.apply(null,a__15358__auto__);
};
var aside = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17638__i = 0, G__17638__a = new Array(arguments.length -  0);
while (G__17638__i < G__17638__a.length) {G__17638__a[G__17638__i] = arguments[G__17638__i + 0]; ++G__17638__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17638__a,0);
} 
return aside__delegate.call(this,args__15357__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__17639){
var args__15357__auto__ = cljs.core.seq(arglist__17639);
return aside__delegate(args__15357__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16602_17640 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16603_17641 = null;
var count__16604_17642 = (0);
var i__16605_17643 = (0);
while(true){
if((i__16605_17643 < count__16604_17642)){
var arg__15359__auto___17644 = cljs.core._nth.call(null,chunk__16603_17641,i__16605_17643);
a__15358__auto__.push(arg__15359__auto___17644);

var G__17645 = seq__16602_17640;
var G__17646 = chunk__16603_17641;
var G__17647 = count__16604_17642;
var G__17648 = (i__16605_17643 + (1));
seq__16602_17640 = G__17645;
chunk__16603_17641 = G__17646;
count__16604_17642 = G__17647;
i__16605_17643 = G__17648;
continue;
} else {
var temp__4126__auto___17649 = cljs.core.seq.call(null,seq__16602_17640);
if(temp__4126__auto___17649){
var seq__16602_17650__$1 = temp__4126__auto___17649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16602_17650__$1)){
var c__4519__auto___17651 = cljs.core.chunk_first.call(null,seq__16602_17650__$1);
var G__17652 = cljs.core.chunk_rest.call(null,seq__16602_17650__$1);
var G__17653 = c__4519__auto___17651;
var G__17654 = cljs.core.count.call(null,c__4519__auto___17651);
var G__17655 = (0);
seq__16602_17640 = G__17652;
chunk__16603_17641 = G__17653;
count__16604_17642 = G__17654;
i__16605_17643 = G__17655;
continue;
} else {
var arg__15359__auto___17656 = cljs.core.first.call(null,seq__16602_17650__$1);
a__15358__auto__.push(arg__15359__auto___17656);

var G__17657 = cljs.core.next.call(null,seq__16602_17650__$1);
var G__17658 = null;
var G__17659 = (0);
var G__17660 = (0);
seq__16602_17640 = G__17657;
chunk__16603_17641 = G__17658;
count__16604_17642 = G__17659;
i__16605_17643 = G__17660;
continue;
}
} else {
}
}
break;
}

return React.DOM.audio.apply(null,a__15358__auto__);
};
var audio = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17661__i = 0, G__17661__a = new Array(arguments.length -  0);
while (G__17661__i < G__17661__a.length) {G__17661__a[G__17661__i] = arguments[G__17661__i + 0]; ++G__17661__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17661__a,0);
} 
return audio__delegate.call(this,args__15357__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__17662){
var args__15357__auto__ = cljs.core.seq(arglist__17662);
return audio__delegate(args__15357__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16610_17663 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16611_17664 = null;
var count__16612_17665 = (0);
var i__16613_17666 = (0);
while(true){
if((i__16613_17666 < count__16612_17665)){
var arg__15359__auto___17667 = cljs.core._nth.call(null,chunk__16611_17664,i__16613_17666);
a__15358__auto__.push(arg__15359__auto___17667);

var G__17668 = seq__16610_17663;
var G__17669 = chunk__16611_17664;
var G__17670 = count__16612_17665;
var G__17671 = (i__16613_17666 + (1));
seq__16610_17663 = G__17668;
chunk__16611_17664 = G__17669;
count__16612_17665 = G__17670;
i__16613_17666 = G__17671;
continue;
} else {
var temp__4126__auto___17672 = cljs.core.seq.call(null,seq__16610_17663);
if(temp__4126__auto___17672){
var seq__16610_17673__$1 = temp__4126__auto___17672;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16610_17673__$1)){
var c__4519__auto___17674 = cljs.core.chunk_first.call(null,seq__16610_17673__$1);
var G__17675 = cljs.core.chunk_rest.call(null,seq__16610_17673__$1);
var G__17676 = c__4519__auto___17674;
var G__17677 = cljs.core.count.call(null,c__4519__auto___17674);
var G__17678 = (0);
seq__16610_17663 = G__17675;
chunk__16611_17664 = G__17676;
count__16612_17665 = G__17677;
i__16613_17666 = G__17678;
continue;
} else {
var arg__15359__auto___17679 = cljs.core.first.call(null,seq__16610_17673__$1);
a__15358__auto__.push(arg__15359__auto___17679);

var G__17680 = cljs.core.next.call(null,seq__16610_17673__$1);
var G__17681 = null;
var G__17682 = (0);
var G__17683 = (0);
seq__16610_17663 = G__17680;
chunk__16611_17664 = G__17681;
count__16612_17665 = G__17682;
i__16613_17666 = G__17683;
continue;
}
} else {
}
}
break;
}

return React.DOM.b.apply(null,a__15358__auto__);
};
var b = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17684__i = 0, G__17684__a = new Array(arguments.length -  0);
while (G__17684__i < G__17684__a.length) {G__17684__a[G__17684__i] = arguments[G__17684__i + 0]; ++G__17684__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17684__a,0);
} 
return b__delegate.call(this,args__15357__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__17685){
var args__15357__auto__ = cljs.core.seq(arglist__17685);
return b__delegate(args__15357__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16618_17686 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16619_17687 = null;
var count__16620_17688 = (0);
var i__16621_17689 = (0);
while(true){
if((i__16621_17689 < count__16620_17688)){
var arg__15359__auto___17690 = cljs.core._nth.call(null,chunk__16619_17687,i__16621_17689);
a__15358__auto__.push(arg__15359__auto___17690);

var G__17691 = seq__16618_17686;
var G__17692 = chunk__16619_17687;
var G__17693 = count__16620_17688;
var G__17694 = (i__16621_17689 + (1));
seq__16618_17686 = G__17691;
chunk__16619_17687 = G__17692;
count__16620_17688 = G__17693;
i__16621_17689 = G__17694;
continue;
} else {
var temp__4126__auto___17695 = cljs.core.seq.call(null,seq__16618_17686);
if(temp__4126__auto___17695){
var seq__16618_17696__$1 = temp__4126__auto___17695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16618_17696__$1)){
var c__4519__auto___17697 = cljs.core.chunk_first.call(null,seq__16618_17696__$1);
var G__17698 = cljs.core.chunk_rest.call(null,seq__16618_17696__$1);
var G__17699 = c__4519__auto___17697;
var G__17700 = cljs.core.count.call(null,c__4519__auto___17697);
var G__17701 = (0);
seq__16618_17686 = G__17698;
chunk__16619_17687 = G__17699;
count__16620_17688 = G__17700;
i__16621_17689 = G__17701;
continue;
} else {
var arg__15359__auto___17702 = cljs.core.first.call(null,seq__16618_17696__$1);
a__15358__auto__.push(arg__15359__auto___17702);

var G__17703 = cljs.core.next.call(null,seq__16618_17696__$1);
var G__17704 = null;
var G__17705 = (0);
var G__17706 = (0);
seq__16618_17686 = G__17703;
chunk__16619_17687 = G__17704;
count__16620_17688 = G__17705;
i__16621_17689 = G__17706;
continue;
}
} else {
}
}
break;
}

return React.DOM.base.apply(null,a__15358__auto__);
};
var base = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17707__i = 0, G__17707__a = new Array(arguments.length -  0);
while (G__17707__i < G__17707__a.length) {G__17707__a[G__17707__i] = arguments[G__17707__i + 0]; ++G__17707__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17707__a,0);
} 
return base__delegate.call(this,args__15357__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__17708){
var args__15357__auto__ = cljs.core.seq(arglist__17708);
return base__delegate(args__15357__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16626_17709 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16627_17710 = null;
var count__16628_17711 = (0);
var i__16629_17712 = (0);
while(true){
if((i__16629_17712 < count__16628_17711)){
var arg__15359__auto___17713 = cljs.core._nth.call(null,chunk__16627_17710,i__16629_17712);
a__15358__auto__.push(arg__15359__auto___17713);

var G__17714 = seq__16626_17709;
var G__17715 = chunk__16627_17710;
var G__17716 = count__16628_17711;
var G__17717 = (i__16629_17712 + (1));
seq__16626_17709 = G__17714;
chunk__16627_17710 = G__17715;
count__16628_17711 = G__17716;
i__16629_17712 = G__17717;
continue;
} else {
var temp__4126__auto___17718 = cljs.core.seq.call(null,seq__16626_17709);
if(temp__4126__auto___17718){
var seq__16626_17719__$1 = temp__4126__auto___17718;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16626_17719__$1)){
var c__4519__auto___17720 = cljs.core.chunk_first.call(null,seq__16626_17719__$1);
var G__17721 = cljs.core.chunk_rest.call(null,seq__16626_17719__$1);
var G__17722 = c__4519__auto___17720;
var G__17723 = cljs.core.count.call(null,c__4519__auto___17720);
var G__17724 = (0);
seq__16626_17709 = G__17721;
chunk__16627_17710 = G__17722;
count__16628_17711 = G__17723;
i__16629_17712 = G__17724;
continue;
} else {
var arg__15359__auto___17725 = cljs.core.first.call(null,seq__16626_17719__$1);
a__15358__auto__.push(arg__15359__auto___17725);

var G__17726 = cljs.core.next.call(null,seq__16626_17719__$1);
var G__17727 = null;
var G__17728 = (0);
var G__17729 = (0);
seq__16626_17709 = G__17726;
chunk__16627_17710 = G__17727;
count__16628_17711 = G__17728;
i__16629_17712 = G__17729;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdi.apply(null,a__15358__auto__);
};
var bdi = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17730__i = 0, G__17730__a = new Array(arguments.length -  0);
while (G__17730__i < G__17730__a.length) {G__17730__a[G__17730__i] = arguments[G__17730__i + 0]; ++G__17730__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17730__a,0);
} 
return bdi__delegate.call(this,args__15357__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__17731){
var args__15357__auto__ = cljs.core.seq(arglist__17731);
return bdi__delegate(args__15357__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16634_17732 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16635_17733 = null;
var count__16636_17734 = (0);
var i__16637_17735 = (0);
while(true){
if((i__16637_17735 < count__16636_17734)){
var arg__15359__auto___17736 = cljs.core._nth.call(null,chunk__16635_17733,i__16637_17735);
a__15358__auto__.push(arg__15359__auto___17736);

var G__17737 = seq__16634_17732;
var G__17738 = chunk__16635_17733;
var G__17739 = count__16636_17734;
var G__17740 = (i__16637_17735 + (1));
seq__16634_17732 = G__17737;
chunk__16635_17733 = G__17738;
count__16636_17734 = G__17739;
i__16637_17735 = G__17740;
continue;
} else {
var temp__4126__auto___17741 = cljs.core.seq.call(null,seq__16634_17732);
if(temp__4126__auto___17741){
var seq__16634_17742__$1 = temp__4126__auto___17741;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16634_17742__$1)){
var c__4519__auto___17743 = cljs.core.chunk_first.call(null,seq__16634_17742__$1);
var G__17744 = cljs.core.chunk_rest.call(null,seq__16634_17742__$1);
var G__17745 = c__4519__auto___17743;
var G__17746 = cljs.core.count.call(null,c__4519__auto___17743);
var G__17747 = (0);
seq__16634_17732 = G__17744;
chunk__16635_17733 = G__17745;
count__16636_17734 = G__17746;
i__16637_17735 = G__17747;
continue;
} else {
var arg__15359__auto___17748 = cljs.core.first.call(null,seq__16634_17742__$1);
a__15358__auto__.push(arg__15359__auto___17748);

var G__17749 = cljs.core.next.call(null,seq__16634_17742__$1);
var G__17750 = null;
var G__17751 = (0);
var G__17752 = (0);
seq__16634_17732 = G__17749;
chunk__16635_17733 = G__17750;
count__16636_17734 = G__17751;
i__16637_17735 = G__17752;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdo.apply(null,a__15358__auto__);
};
var bdo = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17753__i = 0, G__17753__a = new Array(arguments.length -  0);
while (G__17753__i < G__17753__a.length) {G__17753__a[G__17753__i] = arguments[G__17753__i + 0]; ++G__17753__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17753__a,0);
} 
return bdo__delegate.call(this,args__15357__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__17754){
var args__15357__auto__ = cljs.core.seq(arglist__17754);
return bdo__delegate(args__15357__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16642_17755 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16643_17756 = null;
var count__16644_17757 = (0);
var i__16645_17758 = (0);
while(true){
if((i__16645_17758 < count__16644_17757)){
var arg__15359__auto___17759 = cljs.core._nth.call(null,chunk__16643_17756,i__16645_17758);
a__15358__auto__.push(arg__15359__auto___17759);

var G__17760 = seq__16642_17755;
var G__17761 = chunk__16643_17756;
var G__17762 = count__16644_17757;
var G__17763 = (i__16645_17758 + (1));
seq__16642_17755 = G__17760;
chunk__16643_17756 = G__17761;
count__16644_17757 = G__17762;
i__16645_17758 = G__17763;
continue;
} else {
var temp__4126__auto___17764 = cljs.core.seq.call(null,seq__16642_17755);
if(temp__4126__auto___17764){
var seq__16642_17765__$1 = temp__4126__auto___17764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16642_17765__$1)){
var c__4519__auto___17766 = cljs.core.chunk_first.call(null,seq__16642_17765__$1);
var G__17767 = cljs.core.chunk_rest.call(null,seq__16642_17765__$1);
var G__17768 = c__4519__auto___17766;
var G__17769 = cljs.core.count.call(null,c__4519__auto___17766);
var G__17770 = (0);
seq__16642_17755 = G__17767;
chunk__16643_17756 = G__17768;
count__16644_17757 = G__17769;
i__16645_17758 = G__17770;
continue;
} else {
var arg__15359__auto___17771 = cljs.core.first.call(null,seq__16642_17765__$1);
a__15358__auto__.push(arg__15359__auto___17771);

var G__17772 = cljs.core.next.call(null,seq__16642_17765__$1);
var G__17773 = null;
var G__17774 = (0);
var G__17775 = (0);
seq__16642_17755 = G__17772;
chunk__16643_17756 = G__17773;
count__16644_17757 = G__17774;
i__16645_17758 = G__17775;
continue;
}
} else {
}
}
break;
}

return React.DOM.big.apply(null,a__15358__auto__);
};
var big = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17776__i = 0, G__17776__a = new Array(arguments.length -  0);
while (G__17776__i < G__17776__a.length) {G__17776__a[G__17776__i] = arguments[G__17776__i + 0]; ++G__17776__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17776__a,0);
} 
return big__delegate.call(this,args__15357__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__17777){
var args__15357__auto__ = cljs.core.seq(arglist__17777);
return big__delegate(args__15357__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16650_17778 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16651_17779 = null;
var count__16652_17780 = (0);
var i__16653_17781 = (0);
while(true){
if((i__16653_17781 < count__16652_17780)){
var arg__15359__auto___17782 = cljs.core._nth.call(null,chunk__16651_17779,i__16653_17781);
a__15358__auto__.push(arg__15359__auto___17782);

var G__17783 = seq__16650_17778;
var G__17784 = chunk__16651_17779;
var G__17785 = count__16652_17780;
var G__17786 = (i__16653_17781 + (1));
seq__16650_17778 = G__17783;
chunk__16651_17779 = G__17784;
count__16652_17780 = G__17785;
i__16653_17781 = G__17786;
continue;
} else {
var temp__4126__auto___17787 = cljs.core.seq.call(null,seq__16650_17778);
if(temp__4126__auto___17787){
var seq__16650_17788__$1 = temp__4126__auto___17787;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16650_17788__$1)){
var c__4519__auto___17789 = cljs.core.chunk_first.call(null,seq__16650_17788__$1);
var G__17790 = cljs.core.chunk_rest.call(null,seq__16650_17788__$1);
var G__17791 = c__4519__auto___17789;
var G__17792 = cljs.core.count.call(null,c__4519__auto___17789);
var G__17793 = (0);
seq__16650_17778 = G__17790;
chunk__16651_17779 = G__17791;
count__16652_17780 = G__17792;
i__16653_17781 = G__17793;
continue;
} else {
var arg__15359__auto___17794 = cljs.core.first.call(null,seq__16650_17788__$1);
a__15358__auto__.push(arg__15359__auto___17794);

var G__17795 = cljs.core.next.call(null,seq__16650_17788__$1);
var G__17796 = null;
var G__17797 = (0);
var G__17798 = (0);
seq__16650_17778 = G__17795;
chunk__16651_17779 = G__17796;
count__16652_17780 = G__17797;
i__16653_17781 = G__17798;
continue;
}
} else {
}
}
break;
}

return React.DOM.blockquote.apply(null,a__15358__auto__);
};
var blockquote = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17799__i = 0, G__17799__a = new Array(arguments.length -  0);
while (G__17799__i < G__17799__a.length) {G__17799__a[G__17799__i] = arguments[G__17799__i + 0]; ++G__17799__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17799__a,0);
} 
return blockquote__delegate.call(this,args__15357__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__17800){
var args__15357__auto__ = cljs.core.seq(arglist__17800);
return blockquote__delegate(args__15357__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16658_17801 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16659_17802 = null;
var count__16660_17803 = (0);
var i__16661_17804 = (0);
while(true){
if((i__16661_17804 < count__16660_17803)){
var arg__15359__auto___17805 = cljs.core._nth.call(null,chunk__16659_17802,i__16661_17804);
a__15358__auto__.push(arg__15359__auto___17805);

var G__17806 = seq__16658_17801;
var G__17807 = chunk__16659_17802;
var G__17808 = count__16660_17803;
var G__17809 = (i__16661_17804 + (1));
seq__16658_17801 = G__17806;
chunk__16659_17802 = G__17807;
count__16660_17803 = G__17808;
i__16661_17804 = G__17809;
continue;
} else {
var temp__4126__auto___17810 = cljs.core.seq.call(null,seq__16658_17801);
if(temp__4126__auto___17810){
var seq__16658_17811__$1 = temp__4126__auto___17810;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16658_17811__$1)){
var c__4519__auto___17812 = cljs.core.chunk_first.call(null,seq__16658_17811__$1);
var G__17813 = cljs.core.chunk_rest.call(null,seq__16658_17811__$1);
var G__17814 = c__4519__auto___17812;
var G__17815 = cljs.core.count.call(null,c__4519__auto___17812);
var G__17816 = (0);
seq__16658_17801 = G__17813;
chunk__16659_17802 = G__17814;
count__16660_17803 = G__17815;
i__16661_17804 = G__17816;
continue;
} else {
var arg__15359__auto___17817 = cljs.core.first.call(null,seq__16658_17811__$1);
a__15358__auto__.push(arg__15359__auto___17817);

var G__17818 = cljs.core.next.call(null,seq__16658_17811__$1);
var G__17819 = null;
var G__17820 = (0);
var G__17821 = (0);
seq__16658_17801 = G__17818;
chunk__16659_17802 = G__17819;
count__16660_17803 = G__17820;
i__16661_17804 = G__17821;
continue;
}
} else {
}
}
break;
}

return React.DOM.body.apply(null,a__15358__auto__);
};
var body = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17822__i = 0, G__17822__a = new Array(arguments.length -  0);
while (G__17822__i < G__17822__a.length) {G__17822__a[G__17822__i] = arguments[G__17822__i + 0]; ++G__17822__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17822__a,0);
} 
return body__delegate.call(this,args__15357__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__17823){
var args__15357__auto__ = cljs.core.seq(arglist__17823);
return body__delegate(args__15357__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16666_17824 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16667_17825 = null;
var count__16668_17826 = (0);
var i__16669_17827 = (0);
while(true){
if((i__16669_17827 < count__16668_17826)){
var arg__15359__auto___17828 = cljs.core._nth.call(null,chunk__16667_17825,i__16669_17827);
a__15358__auto__.push(arg__15359__auto___17828);

var G__17829 = seq__16666_17824;
var G__17830 = chunk__16667_17825;
var G__17831 = count__16668_17826;
var G__17832 = (i__16669_17827 + (1));
seq__16666_17824 = G__17829;
chunk__16667_17825 = G__17830;
count__16668_17826 = G__17831;
i__16669_17827 = G__17832;
continue;
} else {
var temp__4126__auto___17833 = cljs.core.seq.call(null,seq__16666_17824);
if(temp__4126__auto___17833){
var seq__16666_17834__$1 = temp__4126__auto___17833;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16666_17834__$1)){
var c__4519__auto___17835 = cljs.core.chunk_first.call(null,seq__16666_17834__$1);
var G__17836 = cljs.core.chunk_rest.call(null,seq__16666_17834__$1);
var G__17837 = c__4519__auto___17835;
var G__17838 = cljs.core.count.call(null,c__4519__auto___17835);
var G__17839 = (0);
seq__16666_17824 = G__17836;
chunk__16667_17825 = G__17837;
count__16668_17826 = G__17838;
i__16669_17827 = G__17839;
continue;
} else {
var arg__15359__auto___17840 = cljs.core.first.call(null,seq__16666_17834__$1);
a__15358__auto__.push(arg__15359__auto___17840);

var G__17841 = cljs.core.next.call(null,seq__16666_17834__$1);
var G__17842 = null;
var G__17843 = (0);
var G__17844 = (0);
seq__16666_17824 = G__17841;
chunk__16667_17825 = G__17842;
count__16668_17826 = G__17843;
i__16669_17827 = G__17844;
continue;
}
} else {
}
}
break;
}

return React.DOM.br.apply(null,a__15358__auto__);
};
var br = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17845__i = 0, G__17845__a = new Array(arguments.length -  0);
while (G__17845__i < G__17845__a.length) {G__17845__a[G__17845__i] = arguments[G__17845__i + 0]; ++G__17845__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17845__a,0);
} 
return br__delegate.call(this,args__15357__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__17846){
var args__15357__auto__ = cljs.core.seq(arglist__17846);
return br__delegate(args__15357__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16674_17847 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16675_17848 = null;
var count__16676_17849 = (0);
var i__16677_17850 = (0);
while(true){
if((i__16677_17850 < count__16676_17849)){
var arg__15359__auto___17851 = cljs.core._nth.call(null,chunk__16675_17848,i__16677_17850);
a__15358__auto__.push(arg__15359__auto___17851);

var G__17852 = seq__16674_17847;
var G__17853 = chunk__16675_17848;
var G__17854 = count__16676_17849;
var G__17855 = (i__16677_17850 + (1));
seq__16674_17847 = G__17852;
chunk__16675_17848 = G__17853;
count__16676_17849 = G__17854;
i__16677_17850 = G__17855;
continue;
} else {
var temp__4126__auto___17856 = cljs.core.seq.call(null,seq__16674_17847);
if(temp__4126__auto___17856){
var seq__16674_17857__$1 = temp__4126__auto___17856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16674_17857__$1)){
var c__4519__auto___17858 = cljs.core.chunk_first.call(null,seq__16674_17857__$1);
var G__17859 = cljs.core.chunk_rest.call(null,seq__16674_17857__$1);
var G__17860 = c__4519__auto___17858;
var G__17861 = cljs.core.count.call(null,c__4519__auto___17858);
var G__17862 = (0);
seq__16674_17847 = G__17859;
chunk__16675_17848 = G__17860;
count__16676_17849 = G__17861;
i__16677_17850 = G__17862;
continue;
} else {
var arg__15359__auto___17863 = cljs.core.first.call(null,seq__16674_17857__$1);
a__15358__auto__.push(arg__15359__auto___17863);

var G__17864 = cljs.core.next.call(null,seq__16674_17857__$1);
var G__17865 = null;
var G__17866 = (0);
var G__17867 = (0);
seq__16674_17847 = G__17864;
chunk__16675_17848 = G__17865;
count__16676_17849 = G__17866;
i__16677_17850 = G__17867;
continue;
}
} else {
}
}
break;
}

return React.DOM.button.apply(null,a__15358__auto__);
};
var button = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17868__i = 0, G__17868__a = new Array(arguments.length -  0);
while (G__17868__i < G__17868__a.length) {G__17868__a[G__17868__i] = arguments[G__17868__i + 0]; ++G__17868__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17868__a,0);
} 
return button__delegate.call(this,args__15357__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__17869){
var args__15357__auto__ = cljs.core.seq(arglist__17869);
return button__delegate(args__15357__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16682_17870 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16683_17871 = null;
var count__16684_17872 = (0);
var i__16685_17873 = (0);
while(true){
if((i__16685_17873 < count__16684_17872)){
var arg__15359__auto___17874 = cljs.core._nth.call(null,chunk__16683_17871,i__16685_17873);
a__15358__auto__.push(arg__15359__auto___17874);

var G__17875 = seq__16682_17870;
var G__17876 = chunk__16683_17871;
var G__17877 = count__16684_17872;
var G__17878 = (i__16685_17873 + (1));
seq__16682_17870 = G__17875;
chunk__16683_17871 = G__17876;
count__16684_17872 = G__17877;
i__16685_17873 = G__17878;
continue;
} else {
var temp__4126__auto___17879 = cljs.core.seq.call(null,seq__16682_17870);
if(temp__4126__auto___17879){
var seq__16682_17880__$1 = temp__4126__auto___17879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16682_17880__$1)){
var c__4519__auto___17881 = cljs.core.chunk_first.call(null,seq__16682_17880__$1);
var G__17882 = cljs.core.chunk_rest.call(null,seq__16682_17880__$1);
var G__17883 = c__4519__auto___17881;
var G__17884 = cljs.core.count.call(null,c__4519__auto___17881);
var G__17885 = (0);
seq__16682_17870 = G__17882;
chunk__16683_17871 = G__17883;
count__16684_17872 = G__17884;
i__16685_17873 = G__17885;
continue;
} else {
var arg__15359__auto___17886 = cljs.core.first.call(null,seq__16682_17880__$1);
a__15358__auto__.push(arg__15359__auto___17886);

var G__17887 = cljs.core.next.call(null,seq__16682_17880__$1);
var G__17888 = null;
var G__17889 = (0);
var G__17890 = (0);
seq__16682_17870 = G__17887;
chunk__16683_17871 = G__17888;
count__16684_17872 = G__17889;
i__16685_17873 = G__17890;
continue;
}
} else {
}
}
break;
}

return React.DOM.canvas.apply(null,a__15358__auto__);
};
var canvas = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17891__i = 0, G__17891__a = new Array(arguments.length -  0);
while (G__17891__i < G__17891__a.length) {G__17891__a[G__17891__i] = arguments[G__17891__i + 0]; ++G__17891__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17891__a,0);
} 
return canvas__delegate.call(this,args__15357__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__17892){
var args__15357__auto__ = cljs.core.seq(arglist__17892);
return canvas__delegate(args__15357__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16690_17893 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16691_17894 = null;
var count__16692_17895 = (0);
var i__16693_17896 = (0);
while(true){
if((i__16693_17896 < count__16692_17895)){
var arg__15359__auto___17897 = cljs.core._nth.call(null,chunk__16691_17894,i__16693_17896);
a__15358__auto__.push(arg__15359__auto___17897);

var G__17898 = seq__16690_17893;
var G__17899 = chunk__16691_17894;
var G__17900 = count__16692_17895;
var G__17901 = (i__16693_17896 + (1));
seq__16690_17893 = G__17898;
chunk__16691_17894 = G__17899;
count__16692_17895 = G__17900;
i__16693_17896 = G__17901;
continue;
} else {
var temp__4126__auto___17902 = cljs.core.seq.call(null,seq__16690_17893);
if(temp__4126__auto___17902){
var seq__16690_17903__$1 = temp__4126__auto___17902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16690_17903__$1)){
var c__4519__auto___17904 = cljs.core.chunk_first.call(null,seq__16690_17903__$1);
var G__17905 = cljs.core.chunk_rest.call(null,seq__16690_17903__$1);
var G__17906 = c__4519__auto___17904;
var G__17907 = cljs.core.count.call(null,c__4519__auto___17904);
var G__17908 = (0);
seq__16690_17893 = G__17905;
chunk__16691_17894 = G__17906;
count__16692_17895 = G__17907;
i__16693_17896 = G__17908;
continue;
} else {
var arg__15359__auto___17909 = cljs.core.first.call(null,seq__16690_17903__$1);
a__15358__auto__.push(arg__15359__auto___17909);

var G__17910 = cljs.core.next.call(null,seq__16690_17903__$1);
var G__17911 = null;
var G__17912 = (0);
var G__17913 = (0);
seq__16690_17893 = G__17910;
chunk__16691_17894 = G__17911;
count__16692_17895 = G__17912;
i__16693_17896 = G__17913;
continue;
}
} else {
}
}
break;
}

return React.DOM.caption.apply(null,a__15358__auto__);
};
var caption = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17914__i = 0, G__17914__a = new Array(arguments.length -  0);
while (G__17914__i < G__17914__a.length) {G__17914__a[G__17914__i] = arguments[G__17914__i + 0]; ++G__17914__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17914__a,0);
} 
return caption__delegate.call(this,args__15357__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__17915){
var args__15357__auto__ = cljs.core.seq(arglist__17915);
return caption__delegate(args__15357__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16698_17916 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16699_17917 = null;
var count__16700_17918 = (0);
var i__16701_17919 = (0);
while(true){
if((i__16701_17919 < count__16700_17918)){
var arg__15359__auto___17920 = cljs.core._nth.call(null,chunk__16699_17917,i__16701_17919);
a__15358__auto__.push(arg__15359__auto___17920);

var G__17921 = seq__16698_17916;
var G__17922 = chunk__16699_17917;
var G__17923 = count__16700_17918;
var G__17924 = (i__16701_17919 + (1));
seq__16698_17916 = G__17921;
chunk__16699_17917 = G__17922;
count__16700_17918 = G__17923;
i__16701_17919 = G__17924;
continue;
} else {
var temp__4126__auto___17925 = cljs.core.seq.call(null,seq__16698_17916);
if(temp__4126__auto___17925){
var seq__16698_17926__$1 = temp__4126__auto___17925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16698_17926__$1)){
var c__4519__auto___17927 = cljs.core.chunk_first.call(null,seq__16698_17926__$1);
var G__17928 = cljs.core.chunk_rest.call(null,seq__16698_17926__$1);
var G__17929 = c__4519__auto___17927;
var G__17930 = cljs.core.count.call(null,c__4519__auto___17927);
var G__17931 = (0);
seq__16698_17916 = G__17928;
chunk__16699_17917 = G__17929;
count__16700_17918 = G__17930;
i__16701_17919 = G__17931;
continue;
} else {
var arg__15359__auto___17932 = cljs.core.first.call(null,seq__16698_17926__$1);
a__15358__auto__.push(arg__15359__auto___17932);

var G__17933 = cljs.core.next.call(null,seq__16698_17926__$1);
var G__17934 = null;
var G__17935 = (0);
var G__17936 = (0);
seq__16698_17916 = G__17933;
chunk__16699_17917 = G__17934;
count__16700_17918 = G__17935;
i__16701_17919 = G__17936;
continue;
}
} else {
}
}
break;
}

return React.DOM.cite.apply(null,a__15358__auto__);
};
var cite = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17937__i = 0, G__17937__a = new Array(arguments.length -  0);
while (G__17937__i < G__17937__a.length) {G__17937__a[G__17937__i] = arguments[G__17937__i + 0]; ++G__17937__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17937__a,0);
} 
return cite__delegate.call(this,args__15357__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__17938){
var args__15357__auto__ = cljs.core.seq(arglist__17938);
return cite__delegate(args__15357__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16706_17939 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16707_17940 = null;
var count__16708_17941 = (0);
var i__16709_17942 = (0);
while(true){
if((i__16709_17942 < count__16708_17941)){
var arg__15359__auto___17943 = cljs.core._nth.call(null,chunk__16707_17940,i__16709_17942);
a__15358__auto__.push(arg__15359__auto___17943);

var G__17944 = seq__16706_17939;
var G__17945 = chunk__16707_17940;
var G__17946 = count__16708_17941;
var G__17947 = (i__16709_17942 + (1));
seq__16706_17939 = G__17944;
chunk__16707_17940 = G__17945;
count__16708_17941 = G__17946;
i__16709_17942 = G__17947;
continue;
} else {
var temp__4126__auto___17948 = cljs.core.seq.call(null,seq__16706_17939);
if(temp__4126__auto___17948){
var seq__16706_17949__$1 = temp__4126__auto___17948;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16706_17949__$1)){
var c__4519__auto___17950 = cljs.core.chunk_first.call(null,seq__16706_17949__$1);
var G__17951 = cljs.core.chunk_rest.call(null,seq__16706_17949__$1);
var G__17952 = c__4519__auto___17950;
var G__17953 = cljs.core.count.call(null,c__4519__auto___17950);
var G__17954 = (0);
seq__16706_17939 = G__17951;
chunk__16707_17940 = G__17952;
count__16708_17941 = G__17953;
i__16709_17942 = G__17954;
continue;
} else {
var arg__15359__auto___17955 = cljs.core.first.call(null,seq__16706_17949__$1);
a__15358__auto__.push(arg__15359__auto___17955);

var G__17956 = cljs.core.next.call(null,seq__16706_17949__$1);
var G__17957 = null;
var G__17958 = (0);
var G__17959 = (0);
seq__16706_17939 = G__17956;
chunk__16707_17940 = G__17957;
count__16708_17941 = G__17958;
i__16709_17942 = G__17959;
continue;
}
} else {
}
}
break;
}

return React.DOM.code.apply(null,a__15358__auto__);
};
var code = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17960__i = 0, G__17960__a = new Array(arguments.length -  0);
while (G__17960__i < G__17960__a.length) {G__17960__a[G__17960__i] = arguments[G__17960__i + 0]; ++G__17960__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17960__a,0);
} 
return code__delegate.call(this,args__15357__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__17961){
var args__15357__auto__ = cljs.core.seq(arglist__17961);
return code__delegate(args__15357__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16714_17962 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16715_17963 = null;
var count__16716_17964 = (0);
var i__16717_17965 = (0);
while(true){
if((i__16717_17965 < count__16716_17964)){
var arg__15359__auto___17966 = cljs.core._nth.call(null,chunk__16715_17963,i__16717_17965);
a__15358__auto__.push(arg__15359__auto___17966);

var G__17967 = seq__16714_17962;
var G__17968 = chunk__16715_17963;
var G__17969 = count__16716_17964;
var G__17970 = (i__16717_17965 + (1));
seq__16714_17962 = G__17967;
chunk__16715_17963 = G__17968;
count__16716_17964 = G__17969;
i__16717_17965 = G__17970;
continue;
} else {
var temp__4126__auto___17971 = cljs.core.seq.call(null,seq__16714_17962);
if(temp__4126__auto___17971){
var seq__16714_17972__$1 = temp__4126__auto___17971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16714_17972__$1)){
var c__4519__auto___17973 = cljs.core.chunk_first.call(null,seq__16714_17972__$1);
var G__17974 = cljs.core.chunk_rest.call(null,seq__16714_17972__$1);
var G__17975 = c__4519__auto___17973;
var G__17976 = cljs.core.count.call(null,c__4519__auto___17973);
var G__17977 = (0);
seq__16714_17962 = G__17974;
chunk__16715_17963 = G__17975;
count__16716_17964 = G__17976;
i__16717_17965 = G__17977;
continue;
} else {
var arg__15359__auto___17978 = cljs.core.first.call(null,seq__16714_17972__$1);
a__15358__auto__.push(arg__15359__auto___17978);

var G__17979 = cljs.core.next.call(null,seq__16714_17972__$1);
var G__17980 = null;
var G__17981 = (0);
var G__17982 = (0);
seq__16714_17962 = G__17979;
chunk__16715_17963 = G__17980;
count__16716_17964 = G__17981;
i__16717_17965 = G__17982;
continue;
}
} else {
}
}
break;
}

return React.DOM.col.apply(null,a__15358__auto__);
};
var col = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__17983__i = 0, G__17983__a = new Array(arguments.length -  0);
while (G__17983__i < G__17983__a.length) {G__17983__a[G__17983__i] = arguments[G__17983__i + 0]; ++G__17983__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__17983__a,0);
} 
return col__delegate.call(this,args__15357__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__17984){
var args__15357__auto__ = cljs.core.seq(arglist__17984);
return col__delegate(args__15357__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16722_17985 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16723_17986 = null;
var count__16724_17987 = (0);
var i__16725_17988 = (0);
while(true){
if((i__16725_17988 < count__16724_17987)){
var arg__15359__auto___17989 = cljs.core._nth.call(null,chunk__16723_17986,i__16725_17988);
a__15358__auto__.push(arg__15359__auto___17989);

var G__17990 = seq__16722_17985;
var G__17991 = chunk__16723_17986;
var G__17992 = count__16724_17987;
var G__17993 = (i__16725_17988 + (1));
seq__16722_17985 = G__17990;
chunk__16723_17986 = G__17991;
count__16724_17987 = G__17992;
i__16725_17988 = G__17993;
continue;
} else {
var temp__4126__auto___17994 = cljs.core.seq.call(null,seq__16722_17985);
if(temp__4126__auto___17994){
var seq__16722_17995__$1 = temp__4126__auto___17994;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16722_17995__$1)){
var c__4519__auto___17996 = cljs.core.chunk_first.call(null,seq__16722_17995__$1);
var G__17997 = cljs.core.chunk_rest.call(null,seq__16722_17995__$1);
var G__17998 = c__4519__auto___17996;
var G__17999 = cljs.core.count.call(null,c__4519__auto___17996);
var G__18000 = (0);
seq__16722_17985 = G__17997;
chunk__16723_17986 = G__17998;
count__16724_17987 = G__17999;
i__16725_17988 = G__18000;
continue;
} else {
var arg__15359__auto___18001 = cljs.core.first.call(null,seq__16722_17995__$1);
a__15358__auto__.push(arg__15359__auto___18001);

var G__18002 = cljs.core.next.call(null,seq__16722_17995__$1);
var G__18003 = null;
var G__18004 = (0);
var G__18005 = (0);
seq__16722_17985 = G__18002;
chunk__16723_17986 = G__18003;
count__16724_17987 = G__18004;
i__16725_17988 = G__18005;
continue;
}
} else {
}
}
break;
}

return React.DOM.colgroup.apply(null,a__15358__auto__);
};
var colgroup = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18006__i = 0, G__18006__a = new Array(arguments.length -  0);
while (G__18006__i < G__18006__a.length) {G__18006__a[G__18006__i] = arguments[G__18006__i + 0]; ++G__18006__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18006__a,0);
} 
return colgroup__delegate.call(this,args__15357__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__18007){
var args__15357__auto__ = cljs.core.seq(arglist__18007);
return colgroup__delegate(args__15357__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16730_18008 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16731_18009 = null;
var count__16732_18010 = (0);
var i__16733_18011 = (0);
while(true){
if((i__16733_18011 < count__16732_18010)){
var arg__15359__auto___18012 = cljs.core._nth.call(null,chunk__16731_18009,i__16733_18011);
a__15358__auto__.push(arg__15359__auto___18012);

var G__18013 = seq__16730_18008;
var G__18014 = chunk__16731_18009;
var G__18015 = count__16732_18010;
var G__18016 = (i__16733_18011 + (1));
seq__16730_18008 = G__18013;
chunk__16731_18009 = G__18014;
count__16732_18010 = G__18015;
i__16733_18011 = G__18016;
continue;
} else {
var temp__4126__auto___18017 = cljs.core.seq.call(null,seq__16730_18008);
if(temp__4126__auto___18017){
var seq__16730_18018__$1 = temp__4126__auto___18017;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16730_18018__$1)){
var c__4519__auto___18019 = cljs.core.chunk_first.call(null,seq__16730_18018__$1);
var G__18020 = cljs.core.chunk_rest.call(null,seq__16730_18018__$1);
var G__18021 = c__4519__auto___18019;
var G__18022 = cljs.core.count.call(null,c__4519__auto___18019);
var G__18023 = (0);
seq__16730_18008 = G__18020;
chunk__16731_18009 = G__18021;
count__16732_18010 = G__18022;
i__16733_18011 = G__18023;
continue;
} else {
var arg__15359__auto___18024 = cljs.core.first.call(null,seq__16730_18018__$1);
a__15358__auto__.push(arg__15359__auto___18024);

var G__18025 = cljs.core.next.call(null,seq__16730_18018__$1);
var G__18026 = null;
var G__18027 = (0);
var G__18028 = (0);
seq__16730_18008 = G__18025;
chunk__16731_18009 = G__18026;
count__16732_18010 = G__18027;
i__16733_18011 = G__18028;
continue;
}
} else {
}
}
break;
}

return React.DOM.data.apply(null,a__15358__auto__);
};
var data = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18029__i = 0, G__18029__a = new Array(arguments.length -  0);
while (G__18029__i < G__18029__a.length) {G__18029__a[G__18029__i] = arguments[G__18029__i + 0]; ++G__18029__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18029__a,0);
} 
return data__delegate.call(this,args__15357__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__18030){
var args__15357__auto__ = cljs.core.seq(arglist__18030);
return data__delegate(args__15357__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16738_18031 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16739_18032 = null;
var count__16740_18033 = (0);
var i__16741_18034 = (0);
while(true){
if((i__16741_18034 < count__16740_18033)){
var arg__15359__auto___18035 = cljs.core._nth.call(null,chunk__16739_18032,i__16741_18034);
a__15358__auto__.push(arg__15359__auto___18035);

var G__18036 = seq__16738_18031;
var G__18037 = chunk__16739_18032;
var G__18038 = count__16740_18033;
var G__18039 = (i__16741_18034 + (1));
seq__16738_18031 = G__18036;
chunk__16739_18032 = G__18037;
count__16740_18033 = G__18038;
i__16741_18034 = G__18039;
continue;
} else {
var temp__4126__auto___18040 = cljs.core.seq.call(null,seq__16738_18031);
if(temp__4126__auto___18040){
var seq__16738_18041__$1 = temp__4126__auto___18040;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16738_18041__$1)){
var c__4519__auto___18042 = cljs.core.chunk_first.call(null,seq__16738_18041__$1);
var G__18043 = cljs.core.chunk_rest.call(null,seq__16738_18041__$1);
var G__18044 = c__4519__auto___18042;
var G__18045 = cljs.core.count.call(null,c__4519__auto___18042);
var G__18046 = (0);
seq__16738_18031 = G__18043;
chunk__16739_18032 = G__18044;
count__16740_18033 = G__18045;
i__16741_18034 = G__18046;
continue;
} else {
var arg__15359__auto___18047 = cljs.core.first.call(null,seq__16738_18041__$1);
a__15358__auto__.push(arg__15359__auto___18047);

var G__18048 = cljs.core.next.call(null,seq__16738_18041__$1);
var G__18049 = null;
var G__18050 = (0);
var G__18051 = (0);
seq__16738_18031 = G__18048;
chunk__16739_18032 = G__18049;
count__16740_18033 = G__18050;
i__16741_18034 = G__18051;
continue;
}
} else {
}
}
break;
}

return React.DOM.datalist.apply(null,a__15358__auto__);
};
var datalist = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18052__i = 0, G__18052__a = new Array(arguments.length -  0);
while (G__18052__i < G__18052__a.length) {G__18052__a[G__18052__i] = arguments[G__18052__i + 0]; ++G__18052__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18052__a,0);
} 
return datalist__delegate.call(this,args__15357__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__18053){
var args__15357__auto__ = cljs.core.seq(arglist__18053);
return datalist__delegate(args__15357__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16746_18054 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16747_18055 = null;
var count__16748_18056 = (0);
var i__16749_18057 = (0);
while(true){
if((i__16749_18057 < count__16748_18056)){
var arg__15359__auto___18058 = cljs.core._nth.call(null,chunk__16747_18055,i__16749_18057);
a__15358__auto__.push(arg__15359__auto___18058);

var G__18059 = seq__16746_18054;
var G__18060 = chunk__16747_18055;
var G__18061 = count__16748_18056;
var G__18062 = (i__16749_18057 + (1));
seq__16746_18054 = G__18059;
chunk__16747_18055 = G__18060;
count__16748_18056 = G__18061;
i__16749_18057 = G__18062;
continue;
} else {
var temp__4126__auto___18063 = cljs.core.seq.call(null,seq__16746_18054);
if(temp__4126__auto___18063){
var seq__16746_18064__$1 = temp__4126__auto___18063;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16746_18064__$1)){
var c__4519__auto___18065 = cljs.core.chunk_first.call(null,seq__16746_18064__$1);
var G__18066 = cljs.core.chunk_rest.call(null,seq__16746_18064__$1);
var G__18067 = c__4519__auto___18065;
var G__18068 = cljs.core.count.call(null,c__4519__auto___18065);
var G__18069 = (0);
seq__16746_18054 = G__18066;
chunk__16747_18055 = G__18067;
count__16748_18056 = G__18068;
i__16749_18057 = G__18069;
continue;
} else {
var arg__15359__auto___18070 = cljs.core.first.call(null,seq__16746_18064__$1);
a__15358__auto__.push(arg__15359__auto___18070);

var G__18071 = cljs.core.next.call(null,seq__16746_18064__$1);
var G__18072 = null;
var G__18073 = (0);
var G__18074 = (0);
seq__16746_18054 = G__18071;
chunk__16747_18055 = G__18072;
count__16748_18056 = G__18073;
i__16749_18057 = G__18074;
continue;
}
} else {
}
}
break;
}

return React.DOM.dd.apply(null,a__15358__auto__);
};
var dd = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18075__i = 0, G__18075__a = new Array(arguments.length -  0);
while (G__18075__i < G__18075__a.length) {G__18075__a[G__18075__i] = arguments[G__18075__i + 0]; ++G__18075__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18075__a,0);
} 
return dd__delegate.call(this,args__15357__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__18076){
var args__15357__auto__ = cljs.core.seq(arglist__18076);
return dd__delegate(args__15357__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16754_18077 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16755_18078 = null;
var count__16756_18079 = (0);
var i__16757_18080 = (0);
while(true){
if((i__16757_18080 < count__16756_18079)){
var arg__15359__auto___18081 = cljs.core._nth.call(null,chunk__16755_18078,i__16757_18080);
a__15358__auto__.push(arg__15359__auto___18081);

var G__18082 = seq__16754_18077;
var G__18083 = chunk__16755_18078;
var G__18084 = count__16756_18079;
var G__18085 = (i__16757_18080 + (1));
seq__16754_18077 = G__18082;
chunk__16755_18078 = G__18083;
count__16756_18079 = G__18084;
i__16757_18080 = G__18085;
continue;
} else {
var temp__4126__auto___18086 = cljs.core.seq.call(null,seq__16754_18077);
if(temp__4126__auto___18086){
var seq__16754_18087__$1 = temp__4126__auto___18086;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16754_18087__$1)){
var c__4519__auto___18088 = cljs.core.chunk_first.call(null,seq__16754_18087__$1);
var G__18089 = cljs.core.chunk_rest.call(null,seq__16754_18087__$1);
var G__18090 = c__4519__auto___18088;
var G__18091 = cljs.core.count.call(null,c__4519__auto___18088);
var G__18092 = (0);
seq__16754_18077 = G__18089;
chunk__16755_18078 = G__18090;
count__16756_18079 = G__18091;
i__16757_18080 = G__18092;
continue;
} else {
var arg__15359__auto___18093 = cljs.core.first.call(null,seq__16754_18087__$1);
a__15358__auto__.push(arg__15359__auto___18093);

var G__18094 = cljs.core.next.call(null,seq__16754_18087__$1);
var G__18095 = null;
var G__18096 = (0);
var G__18097 = (0);
seq__16754_18077 = G__18094;
chunk__16755_18078 = G__18095;
count__16756_18079 = G__18096;
i__16757_18080 = G__18097;
continue;
}
} else {
}
}
break;
}

return React.DOM.del.apply(null,a__15358__auto__);
};
var del = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18098__i = 0, G__18098__a = new Array(arguments.length -  0);
while (G__18098__i < G__18098__a.length) {G__18098__a[G__18098__i] = arguments[G__18098__i + 0]; ++G__18098__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18098__a,0);
} 
return del__delegate.call(this,args__15357__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__18099){
var args__15357__auto__ = cljs.core.seq(arglist__18099);
return del__delegate(args__15357__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16762_18100 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16763_18101 = null;
var count__16764_18102 = (0);
var i__16765_18103 = (0);
while(true){
if((i__16765_18103 < count__16764_18102)){
var arg__15359__auto___18104 = cljs.core._nth.call(null,chunk__16763_18101,i__16765_18103);
a__15358__auto__.push(arg__15359__auto___18104);

var G__18105 = seq__16762_18100;
var G__18106 = chunk__16763_18101;
var G__18107 = count__16764_18102;
var G__18108 = (i__16765_18103 + (1));
seq__16762_18100 = G__18105;
chunk__16763_18101 = G__18106;
count__16764_18102 = G__18107;
i__16765_18103 = G__18108;
continue;
} else {
var temp__4126__auto___18109 = cljs.core.seq.call(null,seq__16762_18100);
if(temp__4126__auto___18109){
var seq__16762_18110__$1 = temp__4126__auto___18109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16762_18110__$1)){
var c__4519__auto___18111 = cljs.core.chunk_first.call(null,seq__16762_18110__$1);
var G__18112 = cljs.core.chunk_rest.call(null,seq__16762_18110__$1);
var G__18113 = c__4519__auto___18111;
var G__18114 = cljs.core.count.call(null,c__4519__auto___18111);
var G__18115 = (0);
seq__16762_18100 = G__18112;
chunk__16763_18101 = G__18113;
count__16764_18102 = G__18114;
i__16765_18103 = G__18115;
continue;
} else {
var arg__15359__auto___18116 = cljs.core.first.call(null,seq__16762_18110__$1);
a__15358__auto__.push(arg__15359__auto___18116);

var G__18117 = cljs.core.next.call(null,seq__16762_18110__$1);
var G__18118 = null;
var G__18119 = (0);
var G__18120 = (0);
seq__16762_18100 = G__18117;
chunk__16763_18101 = G__18118;
count__16764_18102 = G__18119;
i__16765_18103 = G__18120;
continue;
}
} else {
}
}
break;
}

return React.DOM.details.apply(null,a__15358__auto__);
};
var details = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18121__i = 0, G__18121__a = new Array(arguments.length -  0);
while (G__18121__i < G__18121__a.length) {G__18121__a[G__18121__i] = arguments[G__18121__i + 0]; ++G__18121__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18121__a,0);
} 
return details__delegate.call(this,args__15357__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__18122){
var args__15357__auto__ = cljs.core.seq(arglist__18122);
return details__delegate(args__15357__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16770_18123 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16771_18124 = null;
var count__16772_18125 = (0);
var i__16773_18126 = (0);
while(true){
if((i__16773_18126 < count__16772_18125)){
var arg__15359__auto___18127 = cljs.core._nth.call(null,chunk__16771_18124,i__16773_18126);
a__15358__auto__.push(arg__15359__auto___18127);

var G__18128 = seq__16770_18123;
var G__18129 = chunk__16771_18124;
var G__18130 = count__16772_18125;
var G__18131 = (i__16773_18126 + (1));
seq__16770_18123 = G__18128;
chunk__16771_18124 = G__18129;
count__16772_18125 = G__18130;
i__16773_18126 = G__18131;
continue;
} else {
var temp__4126__auto___18132 = cljs.core.seq.call(null,seq__16770_18123);
if(temp__4126__auto___18132){
var seq__16770_18133__$1 = temp__4126__auto___18132;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16770_18133__$1)){
var c__4519__auto___18134 = cljs.core.chunk_first.call(null,seq__16770_18133__$1);
var G__18135 = cljs.core.chunk_rest.call(null,seq__16770_18133__$1);
var G__18136 = c__4519__auto___18134;
var G__18137 = cljs.core.count.call(null,c__4519__auto___18134);
var G__18138 = (0);
seq__16770_18123 = G__18135;
chunk__16771_18124 = G__18136;
count__16772_18125 = G__18137;
i__16773_18126 = G__18138;
continue;
} else {
var arg__15359__auto___18139 = cljs.core.first.call(null,seq__16770_18133__$1);
a__15358__auto__.push(arg__15359__auto___18139);

var G__18140 = cljs.core.next.call(null,seq__16770_18133__$1);
var G__18141 = null;
var G__18142 = (0);
var G__18143 = (0);
seq__16770_18123 = G__18140;
chunk__16771_18124 = G__18141;
count__16772_18125 = G__18142;
i__16773_18126 = G__18143;
continue;
}
} else {
}
}
break;
}

return React.DOM.dfn.apply(null,a__15358__auto__);
};
var dfn = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18144__i = 0, G__18144__a = new Array(arguments.length -  0);
while (G__18144__i < G__18144__a.length) {G__18144__a[G__18144__i] = arguments[G__18144__i + 0]; ++G__18144__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18144__a,0);
} 
return dfn__delegate.call(this,args__15357__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__18145){
var args__15357__auto__ = cljs.core.seq(arglist__18145);
return dfn__delegate(args__15357__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16778_18146 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16779_18147 = null;
var count__16780_18148 = (0);
var i__16781_18149 = (0);
while(true){
if((i__16781_18149 < count__16780_18148)){
var arg__15359__auto___18150 = cljs.core._nth.call(null,chunk__16779_18147,i__16781_18149);
a__15358__auto__.push(arg__15359__auto___18150);

var G__18151 = seq__16778_18146;
var G__18152 = chunk__16779_18147;
var G__18153 = count__16780_18148;
var G__18154 = (i__16781_18149 + (1));
seq__16778_18146 = G__18151;
chunk__16779_18147 = G__18152;
count__16780_18148 = G__18153;
i__16781_18149 = G__18154;
continue;
} else {
var temp__4126__auto___18155 = cljs.core.seq.call(null,seq__16778_18146);
if(temp__4126__auto___18155){
var seq__16778_18156__$1 = temp__4126__auto___18155;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16778_18156__$1)){
var c__4519__auto___18157 = cljs.core.chunk_first.call(null,seq__16778_18156__$1);
var G__18158 = cljs.core.chunk_rest.call(null,seq__16778_18156__$1);
var G__18159 = c__4519__auto___18157;
var G__18160 = cljs.core.count.call(null,c__4519__auto___18157);
var G__18161 = (0);
seq__16778_18146 = G__18158;
chunk__16779_18147 = G__18159;
count__16780_18148 = G__18160;
i__16781_18149 = G__18161;
continue;
} else {
var arg__15359__auto___18162 = cljs.core.first.call(null,seq__16778_18156__$1);
a__15358__auto__.push(arg__15359__auto___18162);

var G__18163 = cljs.core.next.call(null,seq__16778_18156__$1);
var G__18164 = null;
var G__18165 = (0);
var G__18166 = (0);
seq__16778_18146 = G__18163;
chunk__16779_18147 = G__18164;
count__16780_18148 = G__18165;
i__16781_18149 = G__18166;
continue;
}
} else {
}
}
break;
}

return React.DOM.div.apply(null,a__15358__auto__);
};
var div = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18167__i = 0, G__18167__a = new Array(arguments.length -  0);
while (G__18167__i < G__18167__a.length) {G__18167__a[G__18167__i] = arguments[G__18167__i + 0]; ++G__18167__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18167__a,0);
} 
return div__delegate.call(this,args__15357__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__18168){
var args__15357__auto__ = cljs.core.seq(arglist__18168);
return div__delegate(args__15357__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16786_18169 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16787_18170 = null;
var count__16788_18171 = (0);
var i__16789_18172 = (0);
while(true){
if((i__16789_18172 < count__16788_18171)){
var arg__15359__auto___18173 = cljs.core._nth.call(null,chunk__16787_18170,i__16789_18172);
a__15358__auto__.push(arg__15359__auto___18173);

var G__18174 = seq__16786_18169;
var G__18175 = chunk__16787_18170;
var G__18176 = count__16788_18171;
var G__18177 = (i__16789_18172 + (1));
seq__16786_18169 = G__18174;
chunk__16787_18170 = G__18175;
count__16788_18171 = G__18176;
i__16789_18172 = G__18177;
continue;
} else {
var temp__4126__auto___18178 = cljs.core.seq.call(null,seq__16786_18169);
if(temp__4126__auto___18178){
var seq__16786_18179__$1 = temp__4126__auto___18178;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16786_18179__$1)){
var c__4519__auto___18180 = cljs.core.chunk_first.call(null,seq__16786_18179__$1);
var G__18181 = cljs.core.chunk_rest.call(null,seq__16786_18179__$1);
var G__18182 = c__4519__auto___18180;
var G__18183 = cljs.core.count.call(null,c__4519__auto___18180);
var G__18184 = (0);
seq__16786_18169 = G__18181;
chunk__16787_18170 = G__18182;
count__16788_18171 = G__18183;
i__16789_18172 = G__18184;
continue;
} else {
var arg__15359__auto___18185 = cljs.core.first.call(null,seq__16786_18179__$1);
a__15358__auto__.push(arg__15359__auto___18185);

var G__18186 = cljs.core.next.call(null,seq__16786_18179__$1);
var G__18187 = null;
var G__18188 = (0);
var G__18189 = (0);
seq__16786_18169 = G__18186;
chunk__16787_18170 = G__18187;
count__16788_18171 = G__18188;
i__16789_18172 = G__18189;
continue;
}
} else {
}
}
break;
}

return React.DOM.dl.apply(null,a__15358__auto__);
};
var dl = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18190__i = 0, G__18190__a = new Array(arguments.length -  0);
while (G__18190__i < G__18190__a.length) {G__18190__a[G__18190__i] = arguments[G__18190__i + 0]; ++G__18190__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18190__a,0);
} 
return dl__delegate.call(this,args__15357__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__18191){
var args__15357__auto__ = cljs.core.seq(arglist__18191);
return dl__delegate(args__15357__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16794_18192 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16795_18193 = null;
var count__16796_18194 = (0);
var i__16797_18195 = (0);
while(true){
if((i__16797_18195 < count__16796_18194)){
var arg__15359__auto___18196 = cljs.core._nth.call(null,chunk__16795_18193,i__16797_18195);
a__15358__auto__.push(arg__15359__auto___18196);

var G__18197 = seq__16794_18192;
var G__18198 = chunk__16795_18193;
var G__18199 = count__16796_18194;
var G__18200 = (i__16797_18195 + (1));
seq__16794_18192 = G__18197;
chunk__16795_18193 = G__18198;
count__16796_18194 = G__18199;
i__16797_18195 = G__18200;
continue;
} else {
var temp__4126__auto___18201 = cljs.core.seq.call(null,seq__16794_18192);
if(temp__4126__auto___18201){
var seq__16794_18202__$1 = temp__4126__auto___18201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16794_18202__$1)){
var c__4519__auto___18203 = cljs.core.chunk_first.call(null,seq__16794_18202__$1);
var G__18204 = cljs.core.chunk_rest.call(null,seq__16794_18202__$1);
var G__18205 = c__4519__auto___18203;
var G__18206 = cljs.core.count.call(null,c__4519__auto___18203);
var G__18207 = (0);
seq__16794_18192 = G__18204;
chunk__16795_18193 = G__18205;
count__16796_18194 = G__18206;
i__16797_18195 = G__18207;
continue;
} else {
var arg__15359__auto___18208 = cljs.core.first.call(null,seq__16794_18202__$1);
a__15358__auto__.push(arg__15359__auto___18208);

var G__18209 = cljs.core.next.call(null,seq__16794_18202__$1);
var G__18210 = null;
var G__18211 = (0);
var G__18212 = (0);
seq__16794_18192 = G__18209;
chunk__16795_18193 = G__18210;
count__16796_18194 = G__18211;
i__16797_18195 = G__18212;
continue;
}
} else {
}
}
break;
}

return React.DOM.dt.apply(null,a__15358__auto__);
};
var dt = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18213__i = 0, G__18213__a = new Array(arguments.length -  0);
while (G__18213__i < G__18213__a.length) {G__18213__a[G__18213__i] = arguments[G__18213__i + 0]; ++G__18213__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18213__a,0);
} 
return dt__delegate.call(this,args__15357__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__18214){
var args__15357__auto__ = cljs.core.seq(arglist__18214);
return dt__delegate(args__15357__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16802_18215 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16803_18216 = null;
var count__16804_18217 = (0);
var i__16805_18218 = (0);
while(true){
if((i__16805_18218 < count__16804_18217)){
var arg__15359__auto___18219 = cljs.core._nth.call(null,chunk__16803_18216,i__16805_18218);
a__15358__auto__.push(arg__15359__auto___18219);

var G__18220 = seq__16802_18215;
var G__18221 = chunk__16803_18216;
var G__18222 = count__16804_18217;
var G__18223 = (i__16805_18218 + (1));
seq__16802_18215 = G__18220;
chunk__16803_18216 = G__18221;
count__16804_18217 = G__18222;
i__16805_18218 = G__18223;
continue;
} else {
var temp__4126__auto___18224 = cljs.core.seq.call(null,seq__16802_18215);
if(temp__4126__auto___18224){
var seq__16802_18225__$1 = temp__4126__auto___18224;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16802_18225__$1)){
var c__4519__auto___18226 = cljs.core.chunk_first.call(null,seq__16802_18225__$1);
var G__18227 = cljs.core.chunk_rest.call(null,seq__16802_18225__$1);
var G__18228 = c__4519__auto___18226;
var G__18229 = cljs.core.count.call(null,c__4519__auto___18226);
var G__18230 = (0);
seq__16802_18215 = G__18227;
chunk__16803_18216 = G__18228;
count__16804_18217 = G__18229;
i__16805_18218 = G__18230;
continue;
} else {
var arg__15359__auto___18231 = cljs.core.first.call(null,seq__16802_18225__$1);
a__15358__auto__.push(arg__15359__auto___18231);

var G__18232 = cljs.core.next.call(null,seq__16802_18225__$1);
var G__18233 = null;
var G__18234 = (0);
var G__18235 = (0);
seq__16802_18215 = G__18232;
chunk__16803_18216 = G__18233;
count__16804_18217 = G__18234;
i__16805_18218 = G__18235;
continue;
}
} else {
}
}
break;
}

return React.DOM.em.apply(null,a__15358__auto__);
};
var em = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18236__i = 0, G__18236__a = new Array(arguments.length -  0);
while (G__18236__i < G__18236__a.length) {G__18236__a[G__18236__i] = arguments[G__18236__i + 0]; ++G__18236__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18236__a,0);
} 
return em__delegate.call(this,args__15357__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__18237){
var args__15357__auto__ = cljs.core.seq(arglist__18237);
return em__delegate(args__15357__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16818_18238 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16819_18239 = null;
var count__16820_18240 = (0);
var i__16821_18241 = (0);
while(true){
if((i__16821_18241 < count__16820_18240)){
var arg__15359__auto___18242 = cljs.core._nth.call(null,chunk__16819_18239,i__16821_18241);
a__15358__auto__.push(arg__15359__auto___18242);

var G__18243 = seq__16818_18238;
var G__18244 = chunk__16819_18239;
var G__18245 = count__16820_18240;
var G__18246 = (i__16821_18241 + (1));
seq__16818_18238 = G__18243;
chunk__16819_18239 = G__18244;
count__16820_18240 = G__18245;
i__16821_18241 = G__18246;
continue;
} else {
var temp__4126__auto___18247 = cljs.core.seq.call(null,seq__16818_18238);
if(temp__4126__auto___18247){
var seq__16818_18248__$1 = temp__4126__auto___18247;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16818_18248__$1)){
var c__4519__auto___18249 = cljs.core.chunk_first.call(null,seq__16818_18248__$1);
var G__18250 = cljs.core.chunk_rest.call(null,seq__16818_18248__$1);
var G__18251 = c__4519__auto___18249;
var G__18252 = cljs.core.count.call(null,c__4519__auto___18249);
var G__18253 = (0);
seq__16818_18238 = G__18250;
chunk__16819_18239 = G__18251;
count__16820_18240 = G__18252;
i__16821_18241 = G__18253;
continue;
} else {
var arg__15359__auto___18254 = cljs.core.first.call(null,seq__16818_18248__$1);
a__15358__auto__.push(arg__15359__auto___18254);

var G__18255 = cljs.core.next.call(null,seq__16818_18248__$1);
var G__18256 = null;
var G__18257 = (0);
var G__18258 = (0);
seq__16818_18238 = G__18255;
chunk__16819_18239 = G__18256;
count__16820_18240 = G__18257;
i__16821_18241 = G__18258;
continue;
}
} else {
}
}
break;
}

return React.DOM.embed.apply(null,a__15358__auto__);
};
var embed = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18259__i = 0, G__18259__a = new Array(arguments.length -  0);
while (G__18259__i < G__18259__a.length) {G__18259__a[G__18259__i] = arguments[G__18259__i + 0]; ++G__18259__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18259__a,0);
} 
return embed__delegate.call(this,args__15357__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__18260){
var args__15357__auto__ = cljs.core.seq(arglist__18260);
return embed__delegate(args__15357__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16826_18261 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16827_18262 = null;
var count__16828_18263 = (0);
var i__16829_18264 = (0);
while(true){
if((i__16829_18264 < count__16828_18263)){
var arg__15359__auto___18265 = cljs.core._nth.call(null,chunk__16827_18262,i__16829_18264);
a__15358__auto__.push(arg__15359__auto___18265);

var G__18266 = seq__16826_18261;
var G__18267 = chunk__16827_18262;
var G__18268 = count__16828_18263;
var G__18269 = (i__16829_18264 + (1));
seq__16826_18261 = G__18266;
chunk__16827_18262 = G__18267;
count__16828_18263 = G__18268;
i__16829_18264 = G__18269;
continue;
} else {
var temp__4126__auto___18270 = cljs.core.seq.call(null,seq__16826_18261);
if(temp__4126__auto___18270){
var seq__16826_18271__$1 = temp__4126__auto___18270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16826_18271__$1)){
var c__4519__auto___18272 = cljs.core.chunk_first.call(null,seq__16826_18271__$1);
var G__18273 = cljs.core.chunk_rest.call(null,seq__16826_18271__$1);
var G__18274 = c__4519__auto___18272;
var G__18275 = cljs.core.count.call(null,c__4519__auto___18272);
var G__18276 = (0);
seq__16826_18261 = G__18273;
chunk__16827_18262 = G__18274;
count__16828_18263 = G__18275;
i__16829_18264 = G__18276;
continue;
} else {
var arg__15359__auto___18277 = cljs.core.first.call(null,seq__16826_18271__$1);
a__15358__auto__.push(arg__15359__auto___18277);

var G__18278 = cljs.core.next.call(null,seq__16826_18271__$1);
var G__18279 = null;
var G__18280 = (0);
var G__18281 = (0);
seq__16826_18261 = G__18278;
chunk__16827_18262 = G__18279;
count__16828_18263 = G__18280;
i__16829_18264 = G__18281;
continue;
}
} else {
}
}
break;
}

return React.DOM.fieldset.apply(null,a__15358__auto__);
};
var fieldset = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18282__i = 0, G__18282__a = new Array(arguments.length -  0);
while (G__18282__i < G__18282__a.length) {G__18282__a[G__18282__i] = arguments[G__18282__i + 0]; ++G__18282__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18282__a,0);
} 
return fieldset__delegate.call(this,args__15357__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__18283){
var args__15357__auto__ = cljs.core.seq(arglist__18283);
return fieldset__delegate(args__15357__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16834_18284 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16835_18285 = null;
var count__16836_18286 = (0);
var i__16837_18287 = (0);
while(true){
if((i__16837_18287 < count__16836_18286)){
var arg__15359__auto___18288 = cljs.core._nth.call(null,chunk__16835_18285,i__16837_18287);
a__15358__auto__.push(arg__15359__auto___18288);

var G__18289 = seq__16834_18284;
var G__18290 = chunk__16835_18285;
var G__18291 = count__16836_18286;
var G__18292 = (i__16837_18287 + (1));
seq__16834_18284 = G__18289;
chunk__16835_18285 = G__18290;
count__16836_18286 = G__18291;
i__16837_18287 = G__18292;
continue;
} else {
var temp__4126__auto___18293 = cljs.core.seq.call(null,seq__16834_18284);
if(temp__4126__auto___18293){
var seq__16834_18294__$1 = temp__4126__auto___18293;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16834_18294__$1)){
var c__4519__auto___18295 = cljs.core.chunk_first.call(null,seq__16834_18294__$1);
var G__18296 = cljs.core.chunk_rest.call(null,seq__16834_18294__$1);
var G__18297 = c__4519__auto___18295;
var G__18298 = cljs.core.count.call(null,c__4519__auto___18295);
var G__18299 = (0);
seq__16834_18284 = G__18296;
chunk__16835_18285 = G__18297;
count__16836_18286 = G__18298;
i__16837_18287 = G__18299;
continue;
} else {
var arg__15359__auto___18300 = cljs.core.first.call(null,seq__16834_18294__$1);
a__15358__auto__.push(arg__15359__auto___18300);

var G__18301 = cljs.core.next.call(null,seq__16834_18294__$1);
var G__18302 = null;
var G__18303 = (0);
var G__18304 = (0);
seq__16834_18284 = G__18301;
chunk__16835_18285 = G__18302;
count__16836_18286 = G__18303;
i__16837_18287 = G__18304;
continue;
}
} else {
}
}
break;
}

return React.DOM.figcaption.apply(null,a__15358__auto__);
};
var figcaption = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18305__i = 0, G__18305__a = new Array(arguments.length -  0);
while (G__18305__i < G__18305__a.length) {G__18305__a[G__18305__i] = arguments[G__18305__i + 0]; ++G__18305__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18305__a,0);
} 
return figcaption__delegate.call(this,args__15357__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__18306){
var args__15357__auto__ = cljs.core.seq(arglist__18306);
return figcaption__delegate(args__15357__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16842_18307 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16843_18308 = null;
var count__16844_18309 = (0);
var i__16845_18310 = (0);
while(true){
if((i__16845_18310 < count__16844_18309)){
var arg__15359__auto___18311 = cljs.core._nth.call(null,chunk__16843_18308,i__16845_18310);
a__15358__auto__.push(arg__15359__auto___18311);

var G__18312 = seq__16842_18307;
var G__18313 = chunk__16843_18308;
var G__18314 = count__16844_18309;
var G__18315 = (i__16845_18310 + (1));
seq__16842_18307 = G__18312;
chunk__16843_18308 = G__18313;
count__16844_18309 = G__18314;
i__16845_18310 = G__18315;
continue;
} else {
var temp__4126__auto___18316 = cljs.core.seq.call(null,seq__16842_18307);
if(temp__4126__auto___18316){
var seq__16842_18317__$1 = temp__4126__auto___18316;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16842_18317__$1)){
var c__4519__auto___18318 = cljs.core.chunk_first.call(null,seq__16842_18317__$1);
var G__18319 = cljs.core.chunk_rest.call(null,seq__16842_18317__$1);
var G__18320 = c__4519__auto___18318;
var G__18321 = cljs.core.count.call(null,c__4519__auto___18318);
var G__18322 = (0);
seq__16842_18307 = G__18319;
chunk__16843_18308 = G__18320;
count__16844_18309 = G__18321;
i__16845_18310 = G__18322;
continue;
} else {
var arg__15359__auto___18323 = cljs.core.first.call(null,seq__16842_18317__$1);
a__15358__auto__.push(arg__15359__auto___18323);

var G__18324 = cljs.core.next.call(null,seq__16842_18317__$1);
var G__18325 = null;
var G__18326 = (0);
var G__18327 = (0);
seq__16842_18307 = G__18324;
chunk__16843_18308 = G__18325;
count__16844_18309 = G__18326;
i__16845_18310 = G__18327;
continue;
}
} else {
}
}
break;
}

return React.DOM.figure.apply(null,a__15358__auto__);
};
var figure = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18328__i = 0, G__18328__a = new Array(arguments.length -  0);
while (G__18328__i < G__18328__a.length) {G__18328__a[G__18328__i] = arguments[G__18328__i + 0]; ++G__18328__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18328__a,0);
} 
return figure__delegate.call(this,args__15357__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__18329){
var args__15357__auto__ = cljs.core.seq(arglist__18329);
return figure__delegate(args__15357__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16850_18330 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16851_18331 = null;
var count__16852_18332 = (0);
var i__16853_18333 = (0);
while(true){
if((i__16853_18333 < count__16852_18332)){
var arg__15359__auto___18334 = cljs.core._nth.call(null,chunk__16851_18331,i__16853_18333);
a__15358__auto__.push(arg__15359__auto___18334);

var G__18335 = seq__16850_18330;
var G__18336 = chunk__16851_18331;
var G__18337 = count__16852_18332;
var G__18338 = (i__16853_18333 + (1));
seq__16850_18330 = G__18335;
chunk__16851_18331 = G__18336;
count__16852_18332 = G__18337;
i__16853_18333 = G__18338;
continue;
} else {
var temp__4126__auto___18339 = cljs.core.seq.call(null,seq__16850_18330);
if(temp__4126__auto___18339){
var seq__16850_18340__$1 = temp__4126__auto___18339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16850_18340__$1)){
var c__4519__auto___18341 = cljs.core.chunk_first.call(null,seq__16850_18340__$1);
var G__18342 = cljs.core.chunk_rest.call(null,seq__16850_18340__$1);
var G__18343 = c__4519__auto___18341;
var G__18344 = cljs.core.count.call(null,c__4519__auto___18341);
var G__18345 = (0);
seq__16850_18330 = G__18342;
chunk__16851_18331 = G__18343;
count__16852_18332 = G__18344;
i__16853_18333 = G__18345;
continue;
} else {
var arg__15359__auto___18346 = cljs.core.first.call(null,seq__16850_18340__$1);
a__15358__auto__.push(arg__15359__auto___18346);

var G__18347 = cljs.core.next.call(null,seq__16850_18340__$1);
var G__18348 = null;
var G__18349 = (0);
var G__18350 = (0);
seq__16850_18330 = G__18347;
chunk__16851_18331 = G__18348;
count__16852_18332 = G__18349;
i__16853_18333 = G__18350;
continue;
}
} else {
}
}
break;
}

return React.DOM.footer.apply(null,a__15358__auto__);
};
var footer = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18351__i = 0, G__18351__a = new Array(arguments.length -  0);
while (G__18351__i < G__18351__a.length) {G__18351__a[G__18351__i] = arguments[G__18351__i + 0]; ++G__18351__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18351__a,0);
} 
return footer__delegate.call(this,args__15357__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__18352){
var args__15357__auto__ = cljs.core.seq(arglist__18352);
return footer__delegate(args__15357__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16858_18353 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16859_18354 = null;
var count__16860_18355 = (0);
var i__16861_18356 = (0);
while(true){
if((i__16861_18356 < count__16860_18355)){
var arg__15359__auto___18357 = cljs.core._nth.call(null,chunk__16859_18354,i__16861_18356);
a__15358__auto__.push(arg__15359__auto___18357);

var G__18358 = seq__16858_18353;
var G__18359 = chunk__16859_18354;
var G__18360 = count__16860_18355;
var G__18361 = (i__16861_18356 + (1));
seq__16858_18353 = G__18358;
chunk__16859_18354 = G__18359;
count__16860_18355 = G__18360;
i__16861_18356 = G__18361;
continue;
} else {
var temp__4126__auto___18362 = cljs.core.seq.call(null,seq__16858_18353);
if(temp__4126__auto___18362){
var seq__16858_18363__$1 = temp__4126__auto___18362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16858_18363__$1)){
var c__4519__auto___18364 = cljs.core.chunk_first.call(null,seq__16858_18363__$1);
var G__18365 = cljs.core.chunk_rest.call(null,seq__16858_18363__$1);
var G__18366 = c__4519__auto___18364;
var G__18367 = cljs.core.count.call(null,c__4519__auto___18364);
var G__18368 = (0);
seq__16858_18353 = G__18365;
chunk__16859_18354 = G__18366;
count__16860_18355 = G__18367;
i__16861_18356 = G__18368;
continue;
} else {
var arg__15359__auto___18369 = cljs.core.first.call(null,seq__16858_18363__$1);
a__15358__auto__.push(arg__15359__auto___18369);

var G__18370 = cljs.core.next.call(null,seq__16858_18363__$1);
var G__18371 = null;
var G__18372 = (0);
var G__18373 = (0);
seq__16858_18353 = G__18370;
chunk__16859_18354 = G__18371;
count__16860_18355 = G__18372;
i__16861_18356 = G__18373;
continue;
}
} else {
}
}
break;
}

return React.DOM.form.apply(null,a__15358__auto__);
};
var form = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18374__i = 0, G__18374__a = new Array(arguments.length -  0);
while (G__18374__i < G__18374__a.length) {G__18374__a[G__18374__i] = arguments[G__18374__i + 0]; ++G__18374__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18374__a,0);
} 
return form__delegate.call(this,args__15357__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__18375){
var args__15357__auto__ = cljs.core.seq(arglist__18375);
return form__delegate(args__15357__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16866_18376 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16867_18377 = null;
var count__16868_18378 = (0);
var i__16869_18379 = (0);
while(true){
if((i__16869_18379 < count__16868_18378)){
var arg__15359__auto___18380 = cljs.core._nth.call(null,chunk__16867_18377,i__16869_18379);
a__15358__auto__.push(arg__15359__auto___18380);

var G__18381 = seq__16866_18376;
var G__18382 = chunk__16867_18377;
var G__18383 = count__16868_18378;
var G__18384 = (i__16869_18379 + (1));
seq__16866_18376 = G__18381;
chunk__16867_18377 = G__18382;
count__16868_18378 = G__18383;
i__16869_18379 = G__18384;
continue;
} else {
var temp__4126__auto___18385 = cljs.core.seq.call(null,seq__16866_18376);
if(temp__4126__auto___18385){
var seq__16866_18386__$1 = temp__4126__auto___18385;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16866_18386__$1)){
var c__4519__auto___18387 = cljs.core.chunk_first.call(null,seq__16866_18386__$1);
var G__18388 = cljs.core.chunk_rest.call(null,seq__16866_18386__$1);
var G__18389 = c__4519__auto___18387;
var G__18390 = cljs.core.count.call(null,c__4519__auto___18387);
var G__18391 = (0);
seq__16866_18376 = G__18388;
chunk__16867_18377 = G__18389;
count__16868_18378 = G__18390;
i__16869_18379 = G__18391;
continue;
} else {
var arg__15359__auto___18392 = cljs.core.first.call(null,seq__16866_18386__$1);
a__15358__auto__.push(arg__15359__auto___18392);

var G__18393 = cljs.core.next.call(null,seq__16866_18386__$1);
var G__18394 = null;
var G__18395 = (0);
var G__18396 = (0);
seq__16866_18376 = G__18393;
chunk__16867_18377 = G__18394;
count__16868_18378 = G__18395;
i__16869_18379 = G__18396;
continue;
}
} else {
}
}
break;
}

return React.DOM.h1.apply(null,a__15358__auto__);
};
var h1 = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18397__i = 0, G__18397__a = new Array(arguments.length -  0);
while (G__18397__i < G__18397__a.length) {G__18397__a[G__18397__i] = arguments[G__18397__i + 0]; ++G__18397__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18397__a,0);
} 
return h1__delegate.call(this,args__15357__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__18398){
var args__15357__auto__ = cljs.core.seq(arglist__18398);
return h1__delegate(args__15357__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16874_18399 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16875_18400 = null;
var count__16876_18401 = (0);
var i__16877_18402 = (0);
while(true){
if((i__16877_18402 < count__16876_18401)){
var arg__15359__auto___18403 = cljs.core._nth.call(null,chunk__16875_18400,i__16877_18402);
a__15358__auto__.push(arg__15359__auto___18403);

var G__18404 = seq__16874_18399;
var G__18405 = chunk__16875_18400;
var G__18406 = count__16876_18401;
var G__18407 = (i__16877_18402 + (1));
seq__16874_18399 = G__18404;
chunk__16875_18400 = G__18405;
count__16876_18401 = G__18406;
i__16877_18402 = G__18407;
continue;
} else {
var temp__4126__auto___18408 = cljs.core.seq.call(null,seq__16874_18399);
if(temp__4126__auto___18408){
var seq__16874_18409__$1 = temp__4126__auto___18408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16874_18409__$1)){
var c__4519__auto___18410 = cljs.core.chunk_first.call(null,seq__16874_18409__$1);
var G__18411 = cljs.core.chunk_rest.call(null,seq__16874_18409__$1);
var G__18412 = c__4519__auto___18410;
var G__18413 = cljs.core.count.call(null,c__4519__auto___18410);
var G__18414 = (0);
seq__16874_18399 = G__18411;
chunk__16875_18400 = G__18412;
count__16876_18401 = G__18413;
i__16877_18402 = G__18414;
continue;
} else {
var arg__15359__auto___18415 = cljs.core.first.call(null,seq__16874_18409__$1);
a__15358__auto__.push(arg__15359__auto___18415);

var G__18416 = cljs.core.next.call(null,seq__16874_18409__$1);
var G__18417 = null;
var G__18418 = (0);
var G__18419 = (0);
seq__16874_18399 = G__18416;
chunk__16875_18400 = G__18417;
count__16876_18401 = G__18418;
i__16877_18402 = G__18419;
continue;
}
} else {
}
}
break;
}

return React.DOM.h2.apply(null,a__15358__auto__);
};
var h2 = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18420__i = 0, G__18420__a = new Array(arguments.length -  0);
while (G__18420__i < G__18420__a.length) {G__18420__a[G__18420__i] = arguments[G__18420__i + 0]; ++G__18420__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18420__a,0);
} 
return h2__delegate.call(this,args__15357__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__18421){
var args__15357__auto__ = cljs.core.seq(arglist__18421);
return h2__delegate(args__15357__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16882_18422 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16883_18423 = null;
var count__16884_18424 = (0);
var i__16885_18425 = (0);
while(true){
if((i__16885_18425 < count__16884_18424)){
var arg__15359__auto___18426 = cljs.core._nth.call(null,chunk__16883_18423,i__16885_18425);
a__15358__auto__.push(arg__15359__auto___18426);

var G__18427 = seq__16882_18422;
var G__18428 = chunk__16883_18423;
var G__18429 = count__16884_18424;
var G__18430 = (i__16885_18425 + (1));
seq__16882_18422 = G__18427;
chunk__16883_18423 = G__18428;
count__16884_18424 = G__18429;
i__16885_18425 = G__18430;
continue;
} else {
var temp__4126__auto___18431 = cljs.core.seq.call(null,seq__16882_18422);
if(temp__4126__auto___18431){
var seq__16882_18432__$1 = temp__4126__auto___18431;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16882_18432__$1)){
var c__4519__auto___18433 = cljs.core.chunk_first.call(null,seq__16882_18432__$1);
var G__18434 = cljs.core.chunk_rest.call(null,seq__16882_18432__$1);
var G__18435 = c__4519__auto___18433;
var G__18436 = cljs.core.count.call(null,c__4519__auto___18433);
var G__18437 = (0);
seq__16882_18422 = G__18434;
chunk__16883_18423 = G__18435;
count__16884_18424 = G__18436;
i__16885_18425 = G__18437;
continue;
} else {
var arg__15359__auto___18438 = cljs.core.first.call(null,seq__16882_18432__$1);
a__15358__auto__.push(arg__15359__auto___18438);

var G__18439 = cljs.core.next.call(null,seq__16882_18432__$1);
var G__18440 = null;
var G__18441 = (0);
var G__18442 = (0);
seq__16882_18422 = G__18439;
chunk__16883_18423 = G__18440;
count__16884_18424 = G__18441;
i__16885_18425 = G__18442;
continue;
}
} else {
}
}
break;
}

return React.DOM.h3.apply(null,a__15358__auto__);
};
var h3 = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18443__i = 0, G__18443__a = new Array(arguments.length -  0);
while (G__18443__i < G__18443__a.length) {G__18443__a[G__18443__i] = arguments[G__18443__i + 0]; ++G__18443__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18443__a,0);
} 
return h3__delegate.call(this,args__15357__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__18444){
var args__15357__auto__ = cljs.core.seq(arglist__18444);
return h3__delegate(args__15357__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16890_18445 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16891_18446 = null;
var count__16892_18447 = (0);
var i__16893_18448 = (0);
while(true){
if((i__16893_18448 < count__16892_18447)){
var arg__15359__auto___18449 = cljs.core._nth.call(null,chunk__16891_18446,i__16893_18448);
a__15358__auto__.push(arg__15359__auto___18449);

var G__18450 = seq__16890_18445;
var G__18451 = chunk__16891_18446;
var G__18452 = count__16892_18447;
var G__18453 = (i__16893_18448 + (1));
seq__16890_18445 = G__18450;
chunk__16891_18446 = G__18451;
count__16892_18447 = G__18452;
i__16893_18448 = G__18453;
continue;
} else {
var temp__4126__auto___18454 = cljs.core.seq.call(null,seq__16890_18445);
if(temp__4126__auto___18454){
var seq__16890_18455__$1 = temp__4126__auto___18454;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16890_18455__$1)){
var c__4519__auto___18456 = cljs.core.chunk_first.call(null,seq__16890_18455__$1);
var G__18457 = cljs.core.chunk_rest.call(null,seq__16890_18455__$1);
var G__18458 = c__4519__auto___18456;
var G__18459 = cljs.core.count.call(null,c__4519__auto___18456);
var G__18460 = (0);
seq__16890_18445 = G__18457;
chunk__16891_18446 = G__18458;
count__16892_18447 = G__18459;
i__16893_18448 = G__18460;
continue;
} else {
var arg__15359__auto___18461 = cljs.core.first.call(null,seq__16890_18455__$1);
a__15358__auto__.push(arg__15359__auto___18461);

var G__18462 = cljs.core.next.call(null,seq__16890_18455__$1);
var G__18463 = null;
var G__18464 = (0);
var G__18465 = (0);
seq__16890_18445 = G__18462;
chunk__16891_18446 = G__18463;
count__16892_18447 = G__18464;
i__16893_18448 = G__18465;
continue;
}
} else {
}
}
break;
}

return React.DOM.h4.apply(null,a__15358__auto__);
};
var h4 = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18466__i = 0, G__18466__a = new Array(arguments.length -  0);
while (G__18466__i < G__18466__a.length) {G__18466__a[G__18466__i] = arguments[G__18466__i + 0]; ++G__18466__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18466__a,0);
} 
return h4__delegate.call(this,args__15357__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__18467){
var args__15357__auto__ = cljs.core.seq(arglist__18467);
return h4__delegate(args__15357__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16898_18468 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16899_18469 = null;
var count__16900_18470 = (0);
var i__16901_18471 = (0);
while(true){
if((i__16901_18471 < count__16900_18470)){
var arg__15359__auto___18472 = cljs.core._nth.call(null,chunk__16899_18469,i__16901_18471);
a__15358__auto__.push(arg__15359__auto___18472);

var G__18473 = seq__16898_18468;
var G__18474 = chunk__16899_18469;
var G__18475 = count__16900_18470;
var G__18476 = (i__16901_18471 + (1));
seq__16898_18468 = G__18473;
chunk__16899_18469 = G__18474;
count__16900_18470 = G__18475;
i__16901_18471 = G__18476;
continue;
} else {
var temp__4126__auto___18477 = cljs.core.seq.call(null,seq__16898_18468);
if(temp__4126__auto___18477){
var seq__16898_18478__$1 = temp__4126__auto___18477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16898_18478__$1)){
var c__4519__auto___18479 = cljs.core.chunk_first.call(null,seq__16898_18478__$1);
var G__18480 = cljs.core.chunk_rest.call(null,seq__16898_18478__$1);
var G__18481 = c__4519__auto___18479;
var G__18482 = cljs.core.count.call(null,c__4519__auto___18479);
var G__18483 = (0);
seq__16898_18468 = G__18480;
chunk__16899_18469 = G__18481;
count__16900_18470 = G__18482;
i__16901_18471 = G__18483;
continue;
} else {
var arg__15359__auto___18484 = cljs.core.first.call(null,seq__16898_18478__$1);
a__15358__auto__.push(arg__15359__auto___18484);

var G__18485 = cljs.core.next.call(null,seq__16898_18478__$1);
var G__18486 = null;
var G__18487 = (0);
var G__18488 = (0);
seq__16898_18468 = G__18485;
chunk__16899_18469 = G__18486;
count__16900_18470 = G__18487;
i__16901_18471 = G__18488;
continue;
}
} else {
}
}
break;
}

return React.DOM.h5.apply(null,a__15358__auto__);
};
var h5 = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18489__i = 0, G__18489__a = new Array(arguments.length -  0);
while (G__18489__i < G__18489__a.length) {G__18489__a[G__18489__i] = arguments[G__18489__i + 0]; ++G__18489__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18489__a,0);
} 
return h5__delegate.call(this,args__15357__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__18490){
var args__15357__auto__ = cljs.core.seq(arglist__18490);
return h5__delegate(args__15357__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16906_18491 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16907_18492 = null;
var count__16908_18493 = (0);
var i__16909_18494 = (0);
while(true){
if((i__16909_18494 < count__16908_18493)){
var arg__15359__auto___18495 = cljs.core._nth.call(null,chunk__16907_18492,i__16909_18494);
a__15358__auto__.push(arg__15359__auto___18495);

var G__18496 = seq__16906_18491;
var G__18497 = chunk__16907_18492;
var G__18498 = count__16908_18493;
var G__18499 = (i__16909_18494 + (1));
seq__16906_18491 = G__18496;
chunk__16907_18492 = G__18497;
count__16908_18493 = G__18498;
i__16909_18494 = G__18499;
continue;
} else {
var temp__4126__auto___18500 = cljs.core.seq.call(null,seq__16906_18491);
if(temp__4126__auto___18500){
var seq__16906_18501__$1 = temp__4126__auto___18500;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16906_18501__$1)){
var c__4519__auto___18502 = cljs.core.chunk_first.call(null,seq__16906_18501__$1);
var G__18503 = cljs.core.chunk_rest.call(null,seq__16906_18501__$1);
var G__18504 = c__4519__auto___18502;
var G__18505 = cljs.core.count.call(null,c__4519__auto___18502);
var G__18506 = (0);
seq__16906_18491 = G__18503;
chunk__16907_18492 = G__18504;
count__16908_18493 = G__18505;
i__16909_18494 = G__18506;
continue;
} else {
var arg__15359__auto___18507 = cljs.core.first.call(null,seq__16906_18501__$1);
a__15358__auto__.push(arg__15359__auto___18507);

var G__18508 = cljs.core.next.call(null,seq__16906_18501__$1);
var G__18509 = null;
var G__18510 = (0);
var G__18511 = (0);
seq__16906_18491 = G__18508;
chunk__16907_18492 = G__18509;
count__16908_18493 = G__18510;
i__16909_18494 = G__18511;
continue;
}
} else {
}
}
break;
}

return React.DOM.h6.apply(null,a__15358__auto__);
};
var h6 = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18512__i = 0, G__18512__a = new Array(arguments.length -  0);
while (G__18512__i < G__18512__a.length) {G__18512__a[G__18512__i] = arguments[G__18512__i + 0]; ++G__18512__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18512__a,0);
} 
return h6__delegate.call(this,args__15357__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__18513){
var args__15357__auto__ = cljs.core.seq(arglist__18513);
return h6__delegate(args__15357__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16914_18514 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16915_18515 = null;
var count__16916_18516 = (0);
var i__16917_18517 = (0);
while(true){
if((i__16917_18517 < count__16916_18516)){
var arg__15359__auto___18518 = cljs.core._nth.call(null,chunk__16915_18515,i__16917_18517);
a__15358__auto__.push(arg__15359__auto___18518);

var G__18519 = seq__16914_18514;
var G__18520 = chunk__16915_18515;
var G__18521 = count__16916_18516;
var G__18522 = (i__16917_18517 + (1));
seq__16914_18514 = G__18519;
chunk__16915_18515 = G__18520;
count__16916_18516 = G__18521;
i__16917_18517 = G__18522;
continue;
} else {
var temp__4126__auto___18523 = cljs.core.seq.call(null,seq__16914_18514);
if(temp__4126__auto___18523){
var seq__16914_18524__$1 = temp__4126__auto___18523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16914_18524__$1)){
var c__4519__auto___18525 = cljs.core.chunk_first.call(null,seq__16914_18524__$1);
var G__18526 = cljs.core.chunk_rest.call(null,seq__16914_18524__$1);
var G__18527 = c__4519__auto___18525;
var G__18528 = cljs.core.count.call(null,c__4519__auto___18525);
var G__18529 = (0);
seq__16914_18514 = G__18526;
chunk__16915_18515 = G__18527;
count__16916_18516 = G__18528;
i__16917_18517 = G__18529;
continue;
} else {
var arg__15359__auto___18530 = cljs.core.first.call(null,seq__16914_18524__$1);
a__15358__auto__.push(arg__15359__auto___18530);

var G__18531 = cljs.core.next.call(null,seq__16914_18524__$1);
var G__18532 = null;
var G__18533 = (0);
var G__18534 = (0);
seq__16914_18514 = G__18531;
chunk__16915_18515 = G__18532;
count__16916_18516 = G__18533;
i__16917_18517 = G__18534;
continue;
}
} else {
}
}
break;
}

return React.DOM.head.apply(null,a__15358__auto__);
};
var head = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18535__i = 0, G__18535__a = new Array(arguments.length -  0);
while (G__18535__i < G__18535__a.length) {G__18535__a[G__18535__i] = arguments[G__18535__i + 0]; ++G__18535__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18535__a,0);
} 
return head__delegate.call(this,args__15357__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__18536){
var args__15357__auto__ = cljs.core.seq(arglist__18536);
return head__delegate(args__15357__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16922_18537 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16923_18538 = null;
var count__16924_18539 = (0);
var i__16925_18540 = (0);
while(true){
if((i__16925_18540 < count__16924_18539)){
var arg__15359__auto___18541 = cljs.core._nth.call(null,chunk__16923_18538,i__16925_18540);
a__15358__auto__.push(arg__15359__auto___18541);

var G__18542 = seq__16922_18537;
var G__18543 = chunk__16923_18538;
var G__18544 = count__16924_18539;
var G__18545 = (i__16925_18540 + (1));
seq__16922_18537 = G__18542;
chunk__16923_18538 = G__18543;
count__16924_18539 = G__18544;
i__16925_18540 = G__18545;
continue;
} else {
var temp__4126__auto___18546 = cljs.core.seq.call(null,seq__16922_18537);
if(temp__4126__auto___18546){
var seq__16922_18547__$1 = temp__4126__auto___18546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16922_18547__$1)){
var c__4519__auto___18548 = cljs.core.chunk_first.call(null,seq__16922_18547__$1);
var G__18549 = cljs.core.chunk_rest.call(null,seq__16922_18547__$1);
var G__18550 = c__4519__auto___18548;
var G__18551 = cljs.core.count.call(null,c__4519__auto___18548);
var G__18552 = (0);
seq__16922_18537 = G__18549;
chunk__16923_18538 = G__18550;
count__16924_18539 = G__18551;
i__16925_18540 = G__18552;
continue;
} else {
var arg__15359__auto___18553 = cljs.core.first.call(null,seq__16922_18547__$1);
a__15358__auto__.push(arg__15359__auto___18553);

var G__18554 = cljs.core.next.call(null,seq__16922_18547__$1);
var G__18555 = null;
var G__18556 = (0);
var G__18557 = (0);
seq__16922_18537 = G__18554;
chunk__16923_18538 = G__18555;
count__16924_18539 = G__18556;
i__16925_18540 = G__18557;
continue;
}
} else {
}
}
break;
}

return React.DOM.header.apply(null,a__15358__auto__);
};
var header = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18558__i = 0, G__18558__a = new Array(arguments.length -  0);
while (G__18558__i < G__18558__a.length) {G__18558__a[G__18558__i] = arguments[G__18558__i + 0]; ++G__18558__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18558__a,0);
} 
return header__delegate.call(this,args__15357__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__18559){
var args__15357__auto__ = cljs.core.seq(arglist__18559);
return header__delegate(args__15357__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16930_18560 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16931_18561 = null;
var count__16932_18562 = (0);
var i__16933_18563 = (0);
while(true){
if((i__16933_18563 < count__16932_18562)){
var arg__15359__auto___18564 = cljs.core._nth.call(null,chunk__16931_18561,i__16933_18563);
a__15358__auto__.push(arg__15359__auto___18564);

var G__18565 = seq__16930_18560;
var G__18566 = chunk__16931_18561;
var G__18567 = count__16932_18562;
var G__18568 = (i__16933_18563 + (1));
seq__16930_18560 = G__18565;
chunk__16931_18561 = G__18566;
count__16932_18562 = G__18567;
i__16933_18563 = G__18568;
continue;
} else {
var temp__4126__auto___18569 = cljs.core.seq.call(null,seq__16930_18560);
if(temp__4126__auto___18569){
var seq__16930_18570__$1 = temp__4126__auto___18569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16930_18570__$1)){
var c__4519__auto___18571 = cljs.core.chunk_first.call(null,seq__16930_18570__$1);
var G__18572 = cljs.core.chunk_rest.call(null,seq__16930_18570__$1);
var G__18573 = c__4519__auto___18571;
var G__18574 = cljs.core.count.call(null,c__4519__auto___18571);
var G__18575 = (0);
seq__16930_18560 = G__18572;
chunk__16931_18561 = G__18573;
count__16932_18562 = G__18574;
i__16933_18563 = G__18575;
continue;
} else {
var arg__15359__auto___18576 = cljs.core.first.call(null,seq__16930_18570__$1);
a__15358__auto__.push(arg__15359__auto___18576);

var G__18577 = cljs.core.next.call(null,seq__16930_18570__$1);
var G__18578 = null;
var G__18579 = (0);
var G__18580 = (0);
seq__16930_18560 = G__18577;
chunk__16931_18561 = G__18578;
count__16932_18562 = G__18579;
i__16933_18563 = G__18580;
continue;
}
} else {
}
}
break;
}

return React.DOM.hr.apply(null,a__15358__auto__);
};
var hr = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18581__i = 0, G__18581__a = new Array(arguments.length -  0);
while (G__18581__i < G__18581__a.length) {G__18581__a[G__18581__i] = arguments[G__18581__i + 0]; ++G__18581__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18581__a,0);
} 
return hr__delegate.call(this,args__15357__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__18582){
var args__15357__auto__ = cljs.core.seq(arglist__18582);
return hr__delegate(args__15357__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16938_18583 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16939_18584 = null;
var count__16940_18585 = (0);
var i__16941_18586 = (0);
while(true){
if((i__16941_18586 < count__16940_18585)){
var arg__15359__auto___18587 = cljs.core._nth.call(null,chunk__16939_18584,i__16941_18586);
a__15358__auto__.push(arg__15359__auto___18587);

var G__18588 = seq__16938_18583;
var G__18589 = chunk__16939_18584;
var G__18590 = count__16940_18585;
var G__18591 = (i__16941_18586 + (1));
seq__16938_18583 = G__18588;
chunk__16939_18584 = G__18589;
count__16940_18585 = G__18590;
i__16941_18586 = G__18591;
continue;
} else {
var temp__4126__auto___18592 = cljs.core.seq.call(null,seq__16938_18583);
if(temp__4126__auto___18592){
var seq__16938_18593__$1 = temp__4126__auto___18592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16938_18593__$1)){
var c__4519__auto___18594 = cljs.core.chunk_first.call(null,seq__16938_18593__$1);
var G__18595 = cljs.core.chunk_rest.call(null,seq__16938_18593__$1);
var G__18596 = c__4519__auto___18594;
var G__18597 = cljs.core.count.call(null,c__4519__auto___18594);
var G__18598 = (0);
seq__16938_18583 = G__18595;
chunk__16939_18584 = G__18596;
count__16940_18585 = G__18597;
i__16941_18586 = G__18598;
continue;
} else {
var arg__15359__auto___18599 = cljs.core.first.call(null,seq__16938_18593__$1);
a__15358__auto__.push(arg__15359__auto___18599);

var G__18600 = cljs.core.next.call(null,seq__16938_18593__$1);
var G__18601 = null;
var G__18602 = (0);
var G__18603 = (0);
seq__16938_18583 = G__18600;
chunk__16939_18584 = G__18601;
count__16940_18585 = G__18602;
i__16941_18586 = G__18603;
continue;
}
} else {
}
}
break;
}

return React.DOM.html.apply(null,a__15358__auto__);
};
var html = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18604__i = 0, G__18604__a = new Array(arguments.length -  0);
while (G__18604__i < G__18604__a.length) {G__18604__a[G__18604__i] = arguments[G__18604__i + 0]; ++G__18604__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18604__a,0);
} 
return html__delegate.call(this,args__15357__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__18605){
var args__15357__auto__ = cljs.core.seq(arglist__18605);
return html__delegate(args__15357__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16946_18606 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16947_18607 = null;
var count__16948_18608 = (0);
var i__16949_18609 = (0);
while(true){
if((i__16949_18609 < count__16948_18608)){
var arg__15359__auto___18610 = cljs.core._nth.call(null,chunk__16947_18607,i__16949_18609);
a__15358__auto__.push(arg__15359__auto___18610);

var G__18611 = seq__16946_18606;
var G__18612 = chunk__16947_18607;
var G__18613 = count__16948_18608;
var G__18614 = (i__16949_18609 + (1));
seq__16946_18606 = G__18611;
chunk__16947_18607 = G__18612;
count__16948_18608 = G__18613;
i__16949_18609 = G__18614;
continue;
} else {
var temp__4126__auto___18615 = cljs.core.seq.call(null,seq__16946_18606);
if(temp__4126__auto___18615){
var seq__16946_18616__$1 = temp__4126__auto___18615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16946_18616__$1)){
var c__4519__auto___18617 = cljs.core.chunk_first.call(null,seq__16946_18616__$1);
var G__18618 = cljs.core.chunk_rest.call(null,seq__16946_18616__$1);
var G__18619 = c__4519__auto___18617;
var G__18620 = cljs.core.count.call(null,c__4519__auto___18617);
var G__18621 = (0);
seq__16946_18606 = G__18618;
chunk__16947_18607 = G__18619;
count__16948_18608 = G__18620;
i__16949_18609 = G__18621;
continue;
} else {
var arg__15359__auto___18622 = cljs.core.first.call(null,seq__16946_18616__$1);
a__15358__auto__.push(arg__15359__auto___18622);

var G__18623 = cljs.core.next.call(null,seq__16946_18616__$1);
var G__18624 = null;
var G__18625 = (0);
var G__18626 = (0);
seq__16946_18606 = G__18623;
chunk__16947_18607 = G__18624;
count__16948_18608 = G__18625;
i__16949_18609 = G__18626;
continue;
}
} else {
}
}
break;
}

return React.DOM.i.apply(null,a__15358__auto__);
};
var i = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18627__i = 0, G__18627__a = new Array(arguments.length -  0);
while (G__18627__i < G__18627__a.length) {G__18627__a[G__18627__i] = arguments[G__18627__i + 0]; ++G__18627__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18627__a,0);
} 
return i__delegate.call(this,args__15357__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__18628){
var args__15357__auto__ = cljs.core.seq(arglist__18628);
return i__delegate(args__15357__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16954_18629 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16955_18630 = null;
var count__16956_18631 = (0);
var i__16957_18632 = (0);
while(true){
if((i__16957_18632 < count__16956_18631)){
var arg__15359__auto___18633 = cljs.core._nth.call(null,chunk__16955_18630,i__16957_18632);
a__15358__auto__.push(arg__15359__auto___18633);

var G__18634 = seq__16954_18629;
var G__18635 = chunk__16955_18630;
var G__18636 = count__16956_18631;
var G__18637 = (i__16957_18632 + (1));
seq__16954_18629 = G__18634;
chunk__16955_18630 = G__18635;
count__16956_18631 = G__18636;
i__16957_18632 = G__18637;
continue;
} else {
var temp__4126__auto___18638 = cljs.core.seq.call(null,seq__16954_18629);
if(temp__4126__auto___18638){
var seq__16954_18639__$1 = temp__4126__auto___18638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16954_18639__$1)){
var c__4519__auto___18640 = cljs.core.chunk_first.call(null,seq__16954_18639__$1);
var G__18641 = cljs.core.chunk_rest.call(null,seq__16954_18639__$1);
var G__18642 = c__4519__auto___18640;
var G__18643 = cljs.core.count.call(null,c__4519__auto___18640);
var G__18644 = (0);
seq__16954_18629 = G__18641;
chunk__16955_18630 = G__18642;
count__16956_18631 = G__18643;
i__16957_18632 = G__18644;
continue;
} else {
var arg__15359__auto___18645 = cljs.core.first.call(null,seq__16954_18639__$1);
a__15358__auto__.push(arg__15359__auto___18645);

var G__18646 = cljs.core.next.call(null,seq__16954_18639__$1);
var G__18647 = null;
var G__18648 = (0);
var G__18649 = (0);
seq__16954_18629 = G__18646;
chunk__16955_18630 = G__18647;
count__16956_18631 = G__18648;
i__16957_18632 = G__18649;
continue;
}
} else {
}
}
break;
}

return React.DOM.iframe.apply(null,a__15358__auto__);
};
var iframe = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18650__i = 0, G__18650__a = new Array(arguments.length -  0);
while (G__18650__i < G__18650__a.length) {G__18650__a[G__18650__i] = arguments[G__18650__i + 0]; ++G__18650__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18650__a,0);
} 
return iframe__delegate.call(this,args__15357__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__18651){
var args__15357__auto__ = cljs.core.seq(arglist__18651);
return iframe__delegate(args__15357__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16962_18652 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16963_18653 = null;
var count__16964_18654 = (0);
var i__16965_18655 = (0);
while(true){
if((i__16965_18655 < count__16964_18654)){
var arg__15359__auto___18656 = cljs.core._nth.call(null,chunk__16963_18653,i__16965_18655);
a__15358__auto__.push(arg__15359__auto___18656);

var G__18657 = seq__16962_18652;
var G__18658 = chunk__16963_18653;
var G__18659 = count__16964_18654;
var G__18660 = (i__16965_18655 + (1));
seq__16962_18652 = G__18657;
chunk__16963_18653 = G__18658;
count__16964_18654 = G__18659;
i__16965_18655 = G__18660;
continue;
} else {
var temp__4126__auto___18661 = cljs.core.seq.call(null,seq__16962_18652);
if(temp__4126__auto___18661){
var seq__16962_18662__$1 = temp__4126__auto___18661;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16962_18662__$1)){
var c__4519__auto___18663 = cljs.core.chunk_first.call(null,seq__16962_18662__$1);
var G__18664 = cljs.core.chunk_rest.call(null,seq__16962_18662__$1);
var G__18665 = c__4519__auto___18663;
var G__18666 = cljs.core.count.call(null,c__4519__auto___18663);
var G__18667 = (0);
seq__16962_18652 = G__18664;
chunk__16963_18653 = G__18665;
count__16964_18654 = G__18666;
i__16965_18655 = G__18667;
continue;
} else {
var arg__15359__auto___18668 = cljs.core.first.call(null,seq__16962_18662__$1);
a__15358__auto__.push(arg__15359__auto___18668);

var G__18669 = cljs.core.next.call(null,seq__16962_18662__$1);
var G__18670 = null;
var G__18671 = (0);
var G__18672 = (0);
seq__16962_18652 = G__18669;
chunk__16963_18653 = G__18670;
count__16964_18654 = G__18671;
i__16965_18655 = G__18672;
continue;
}
} else {
}
}
break;
}

return React.DOM.img.apply(null,a__15358__auto__);
};
var img = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18673__i = 0, G__18673__a = new Array(arguments.length -  0);
while (G__18673__i < G__18673__a.length) {G__18673__a[G__18673__i] = arguments[G__18673__i + 0]; ++G__18673__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18673__a,0);
} 
return img__delegate.call(this,args__15357__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__18674){
var args__15357__auto__ = cljs.core.seq(arglist__18674);
return img__delegate(args__15357__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16970_18675 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16971_18676 = null;
var count__16972_18677 = (0);
var i__16973_18678 = (0);
while(true){
if((i__16973_18678 < count__16972_18677)){
var arg__15359__auto___18679 = cljs.core._nth.call(null,chunk__16971_18676,i__16973_18678);
a__15358__auto__.push(arg__15359__auto___18679);

var G__18680 = seq__16970_18675;
var G__18681 = chunk__16971_18676;
var G__18682 = count__16972_18677;
var G__18683 = (i__16973_18678 + (1));
seq__16970_18675 = G__18680;
chunk__16971_18676 = G__18681;
count__16972_18677 = G__18682;
i__16973_18678 = G__18683;
continue;
} else {
var temp__4126__auto___18684 = cljs.core.seq.call(null,seq__16970_18675);
if(temp__4126__auto___18684){
var seq__16970_18685__$1 = temp__4126__auto___18684;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16970_18685__$1)){
var c__4519__auto___18686 = cljs.core.chunk_first.call(null,seq__16970_18685__$1);
var G__18687 = cljs.core.chunk_rest.call(null,seq__16970_18685__$1);
var G__18688 = c__4519__auto___18686;
var G__18689 = cljs.core.count.call(null,c__4519__auto___18686);
var G__18690 = (0);
seq__16970_18675 = G__18687;
chunk__16971_18676 = G__18688;
count__16972_18677 = G__18689;
i__16973_18678 = G__18690;
continue;
} else {
var arg__15359__auto___18691 = cljs.core.first.call(null,seq__16970_18685__$1);
a__15358__auto__.push(arg__15359__auto___18691);

var G__18692 = cljs.core.next.call(null,seq__16970_18685__$1);
var G__18693 = null;
var G__18694 = (0);
var G__18695 = (0);
seq__16970_18675 = G__18692;
chunk__16971_18676 = G__18693;
count__16972_18677 = G__18694;
i__16973_18678 = G__18695;
continue;
}
} else {
}
}
break;
}

return React.DOM.input.apply(null,a__15358__auto__);
};
var input = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18696__i = 0, G__18696__a = new Array(arguments.length -  0);
while (G__18696__i < G__18696__a.length) {G__18696__a[G__18696__i] = arguments[G__18696__i + 0]; ++G__18696__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18696__a,0);
} 
return input__delegate.call(this,args__15357__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__18697){
var args__15357__auto__ = cljs.core.seq(arglist__18697);
return input__delegate(args__15357__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16978_18698 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16979_18699 = null;
var count__16980_18700 = (0);
var i__16981_18701 = (0);
while(true){
if((i__16981_18701 < count__16980_18700)){
var arg__15359__auto___18702 = cljs.core._nth.call(null,chunk__16979_18699,i__16981_18701);
a__15358__auto__.push(arg__15359__auto___18702);

var G__18703 = seq__16978_18698;
var G__18704 = chunk__16979_18699;
var G__18705 = count__16980_18700;
var G__18706 = (i__16981_18701 + (1));
seq__16978_18698 = G__18703;
chunk__16979_18699 = G__18704;
count__16980_18700 = G__18705;
i__16981_18701 = G__18706;
continue;
} else {
var temp__4126__auto___18707 = cljs.core.seq.call(null,seq__16978_18698);
if(temp__4126__auto___18707){
var seq__16978_18708__$1 = temp__4126__auto___18707;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16978_18708__$1)){
var c__4519__auto___18709 = cljs.core.chunk_first.call(null,seq__16978_18708__$1);
var G__18710 = cljs.core.chunk_rest.call(null,seq__16978_18708__$1);
var G__18711 = c__4519__auto___18709;
var G__18712 = cljs.core.count.call(null,c__4519__auto___18709);
var G__18713 = (0);
seq__16978_18698 = G__18710;
chunk__16979_18699 = G__18711;
count__16980_18700 = G__18712;
i__16981_18701 = G__18713;
continue;
} else {
var arg__15359__auto___18714 = cljs.core.first.call(null,seq__16978_18708__$1);
a__15358__auto__.push(arg__15359__auto___18714);

var G__18715 = cljs.core.next.call(null,seq__16978_18708__$1);
var G__18716 = null;
var G__18717 = (0);
var G__18718 = (0);
seq__16978_18698 = G__18715;
chunk__16979_18699 = G__18716;
count__16980_18700 = G__18717;
i__16981_18701 = G__18718;
continue;
}
} else {
}
}
break;
}

return React.DOM.ins.apply(null,a__15358__auto__);
};
var ins = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18719__i = 0, G__18719__a = new Array(arguments.length -  0);
while (G__18719__i < G__18719__a.length) {G__18719__a[G__18719__i] = arguments[G__18719__i + 0]; ++G__18719__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18719__a,0);
} 
return ins__delegate.call(this,args__15357__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__18720){
var args__15357__auto__ = cljs.core.seq(arglist__18720);
return ins__delegate(args__15357__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16986_18721 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16987_18722 = null;
var count__16988_18723 = (0);
var i__16989_18724 = (0);
while(true){
if((i__16989_18724 < count__16988_18723)){
var arg__15359__auto___18725 = cljs.core._nth.call(null,chunk__16987_18722,i__16989_18724);
a__15358__auto__.push(arg__15359__auto___18725);

var G__18726 = seq__16986_18721;
var G__18727 = chunk__16987_18722;
var G__18728 = count__16988_18723;
var G__18729 = (i__16989_18724 + (1));
seq__16986_18721 = G__18726;
chunk__16987_18722 = G__18727;
count__16988_18723 = G__18728;
i__16989_18724 = G__18729;
continue;
} else {
var temp__4126__auto___18730 = cljs.core.seq.call(null,seq__16986_18721);
if(temp__4126__auto___18730){
var seq__16986_18731__$1 = temp__4126__auto___18730;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16986_18731__$1)){
var c__4519__auto___18732 = cljs.core.chunk_first.call(null,seq__16986_18731__$1);
var G__18733 = cljs.core.chunk_rest.call(null,seq__16986_18731__$1);
var G__18734 = c__4519__auto___18732;
var G__18735 = cljs.core.count.call(null,c__4519__auto___18732);
var G__18736 = (0);
seq__16986_18721 = G__18733;
chunk__16987_18722 = G__18734;
count__16988_18723 = G__18735;
i__16989_18724 = G__18736;
continue;
} else {
var arg__15359__auto___18737 = cljs.core.first.call(null,seq__16986_18731__$1);
a__15358__auto__.push(arg__15359__auto___18737);

var G__18738 = cljs.core.next.call(null,seq__16986_18731__$1);
var G__18739 = null;
var G__18740 = (0);
var G__18741 = (0);
seq__16986_18721 = G__18738;
chunk__16987_18722 = G__18739;
count__16988_18723 = G__18740;
i__16989_18724 = G__18741;
continue;
}
} else {
}
}
break;
}

return React.DOM.kbd.apply(null,a__15358__auto__);
};
var kbd = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18742__i = 0, G__18742__a = new Array(arguments.length -  0);
while (G__18742__i < G__18742__a.length) {G__18742__a[G__18742__i] = arguments[G__18742__i + 0]; ++G__18742__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18742__a,0);
} 
return kbd__delegate.call(this,args__15357__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__18743){
var args__15357__auto__ = cljs.core.seq(arglist__18743);
return kbd__delegate(args__15357__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16994_18744 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16995_18745 = null;
var count__16996_18746 = (0);
var i__16997_18747 = (0);
while(true){
if((i__16997_18747 < count__16996_18746)){
var arg__15359__auto___18748 = cljs.core._nth.call(null,chunk__16995_18745,i__16997_18747);
a__15358__auto__.push(arg__15359__auto___18748);

var G__18749 = seq__16994_18744;
var G__18750 = chunk__16995_18745;
var G__18751 = count__16996_18746;
var G__18752 = (i__16997_18747 + (1));
seq__16994_18744 = G__18749;
chunk__16995_18745 = G__18750;
count__16996_18746 = G__18751;
i__16997_18747 = G__18752;
continue;
} else {
var temp__4126__auto___18753 = cljs.core.seq.call(null,seq__16994_18744);
if(temp__4126__auto___18753){
var seq__16994_18754__$1 = temp__4126__auto___18753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16994_18754__$1)){
var c__4519__auto___18755 = cljs.core.chunk_first.call(null,seq__16994_18754__$1);
var G__18756 = cljs.core.chunk_rest.call(null,seq__16994_18754__$1);
var G__18757 = c__4519__auto___18755;
var G__18758 = cljs.core.count.call(null,c__4519__auto___18755);
var G__18759 = (0);
seq__16994_18744 = G__18756;
chunk__16995_18745 = G__18757;
count__16996_18746 = G__18758;
i__16997_18747 = G__18759;
continue;
} else {
var arg__15359__auto___18760 = cljs.core.first.call(null,seq__16994_18754__$1);
a__15358__auto__.push(arg__15359__auto___18760);

var G__18761 = cljs.core.next.call(null,seq__16994_18754__$1);
var G__18762 = null;
var G__18763 = (0);
var G__18764 = (0);
seq__16994_18744 = G__18761;
chunk__16995_18745 = G__18762;
count__16996_18746 = G__18763;
i__16997_18747 = G__18764;
continue;
}
} else {
}
}
break;
}

return React.DOM.keygen.apply(null,a__15358__auto__);
};
var keygen = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18765__i = 0, G__18765__a = new Array(arguments.length -  0);
while (G__18765__i < G__18765__a.length) {G__18765__a[G__18765__i] = arguments[G__18765__i + 0]; ++G__18765__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18765__a,0);
} 
return keygen__delegate.call(this,args__15357__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__18766){
var args__15357__auto__ = cljs.core.seq(arglist__18766);
return keygen__delegate(args__15357__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17002_18767 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17003_18768 = null;
var count__17004_18769 = (0);
var i__17005_18770 = (0);
while(true){
if((i__17005_18770 < count__17004_18769)){
var arg__15359__auto___18771 = cljs.core._nth.call(null,chunk__17003_18768,i__17005_18770);
a__15358__auto__.push(arg__15359__auto___18771);

var G__18772 = seq__17002_18767;
var G__18773 = chunk__17003_18768;
var G__18774 = count__17004_18769;
var G__18775 = (i__17005_18770 + (1));
seq__17002_18767 = G__18772;
chunk__17003_18768 = G__18773;
count__17004_18769 = G__18774;
i__17005_18770 = G__18775;
continue;
} else {
var temp__4126__auto___18776 = cljs.core.seq.call(null,seq__17002_18767);
if(temp__4126__auto___18776){
var seq__17002_18777__$1 = temp__4126__auto___18776;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17002_18777__$1)){
var c__4519__auto___18778 = cljs.core.chunk_first.call(null,seq__17002_18777__$1);
var G__18779 = cljs.core.chunk_rest.call(null,seq__17002_18777__$1);
var G__18780 = c__4519__auto___18778;
var G__18781 = cljs.core.count.call(null,c__4519__auto___18778);
var G__18782 = (0);
seq__17002_18767 = G__18779;
chunk__17003_18768 = G__18780;
count__17004_18769 = G__18781;
i__17005_18770 = G__18782;
continue;
} else {
var arg__15359__auto___18783 = cljs.core.first.call(null,seq__17002_18777__$1);
a__15358__auto__.push(arg__15359__auto___18783);

var G__18784 = cljs.core.next.call(null,seq__17002_18777__$1);
var G__18785 = null;
var G__18786 = (0);
var G__18787 = (0);
seq__17002_18767 = G__18784;
chunk__17003_18768 = G__18785;
count__17004_18769 = G__18786;
i__17005_18770 = G__18787;
continue;
}
} else {
}
}
break;
}

return React.DOM.label.apply(null,a__15358__auto__);
};
var label = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18788__i = 0, G__18788__a = new Array(arguments.length -  0);
while (G__18788__i < G__18788__a.length) {G__18788__a[G__18788__i] = arguments[G__18788__i + 0]; ++G__18788__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18788__a,0);
} 
return label__delegate.call(this,args__15357__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__18789){
var args__15357__auto__ = cljs.core.seq(arglist__18789);
return label__delegate(args__15357__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17010_18790 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17011_18791 = null;
var count__17012_18792 = (0);
var i__17013_18793 = (0);
while(true){
if((i__17013_18793 < count__17012_18792)){
var arg__15359__auto___18794 = cljs.core._nth.call(null,chunk__17011_18791,i__17013_18793);
a__15358__auto__.push(arg__15359__auto___18794);

var G__18795 = seq__17010_18790;
var G__18796 = chunk__17011_18791;
var G__18797 = count__17012_18792;
var G__18798 = (i__17013_18793 + (1));
seq__17010_18790 = G__18795;
chunk__17011_18791 = G__18796;
count__17012_18792 = G__18797;
i__17013_18793 = G__18798;
continue;
} else {
var temp__4126__auto___18799 = cljs.core.seq.call(null,seq__17010_18790);
if(temp__4126__auto___18799){
var seq__17010_18800__$1 = temp__4126__auto___18799;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17010_18800__$1)){
var c__4519__auto___18801 = cljs.core.chunk_first.call(null,seq__17010_18800__$1);
var G__18802 = cljs.core.chunk_rest.call(null,seq__17010_18800__$1);
var G__18803 = c__4519__auto___18801;
var G__18804 = cljs.core.count.call(null,c__4519__auto___18801);
var G__18805 = (0);
seq__17010_18790 = G__18802;
chunk__17011_18791 = G__18803;
count__17012_18792 = G__18804;
i__17013_18793 = G__18805;
continue;
} else {
var arg__15359__auto___18806 = cljs.core.first.call(null,seq__17010_18800__$1);
a__15358__auto__.push(arg__15359__auto___18806);

var G__18807 = cljs.core.next.call(null,seq__17010_18800__$1);
var G__18808 = null;
var G__18809 = (0);
var G__18810 = (0);
seq__17010_18790 = G__18807;
chunk__17011_18791 = G__18808;
count__17012_18792 = G__18809;
i__17013_18793 = G__18810;
continue;
}
} else {
}
}
break;
}

return React.DOM.legend.apply(null,a__15358__auto__);
};
var legend = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18811__i = 0, G__18811__a = new Array(arguments.length -  0);
while (G__18811__i < G__18811__a.length) {G__18811__a[G__18811__i] = arguments[G__18811__i + 0]; ++G__18811__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18811__a,0);
} 
return legend__delegate.call(this,args__15357__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__18812){
var args__15357__auto__ = cljs.core.seq(arglist__18812);
return legend__delegate(args__15357__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17018_18813 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17019_18814 = null;
var count__17020_18815 = (0);
var i__17021_18816 = (0);
while(true){
if((i__17021_18816 < count__17020_18815)){
var arg__15359__auto___18817 = cljs.core._nth.call(null,chunk__17019_18814,i__17021_18816);
a__15358__auto__.push(arg__15359__auto___18817);

var G__18818 = seq__17018_18813;
var G__18819 = chunk__17019_18814;
var G__18820 = count__17020_18815;
var G__18821 = (i__17021_18816 + (1));
seq__17018_18813 = G__18818;
chunk__17019_18814 = G__18819;
count__17020_18815 = G__18820;
i__17021_18816 = G__18821;
continue;
} else {
var temp__4126__auto___18822 = cljs.core.seq.call(null,seq__17018_18813);
if(temp__4126__auto___18822){
var seq__17018_18823__$1 = temp__4126__auto___18822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17018_18823__$1)){
var c__4519__auto___18824 = cljs.core.chunk_first.call(null,seq__17018_18823__$1);
var G__18825 = cljs.core.chunk_rest.call(null,seq__17018_18823__$1);
var G__18826 = c__4519__auto___18824;
var G__18827 = cljs.core.count.call(null,c__4519__auto___18824);
var G__18828 = (0);
seq__17018_18813 = G__18825;
chunk__17019_18814 = G__18826;
count__17020_18815 = G__18827;
i__17021_18816 = G__18828;
continue;
} else {
var arg__15359__auto___18829 = cljs.core.first.call(null,seq__17018_18823__$1);
a__15358__auto__.push(arg__15359__auto___18829);

var G__18830 = cljs.core.next.call(null,seq__17018_18823__$1);
var G__18831 = null;
var G__18832 = (0);
var G__18833 = (0);
seq__17018_18813 = G__18830;
chunk__17019_18814 = G__18831;
count__17020_18815 = G__18832;
i__17021_18816 = G__18833;
continue;
}
} else {
}
}
break;
}

return React.DOM.li.apply(null,a__15358__auto__);
};
var li = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18834__i = 0, G__18834__a = new Array(arguments.length -  0);
while (G__18834__i < G__18834__a.length) {G__18834__a[G__18834__i] = arguments[G__18834__i + 0]; ++G__18834__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18834__a,0);
} 
return li__delegate.call(this,args__15357__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__18835){
var args__15357__auto__ = cljs.core.seq(arglist__18835);
return li__delegate(args__15357__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17026_18836 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17027_18837 = null;
var count__17028_18838 = (0);
var i__17029_18839 = (0);
while(true){
if((i__17029_18839 < count__17028_18838)){
var arg__15359__auto___18840 = cljs.core._nth.call(null,chunk__17027_18837,i__17029_18839);
a__15358__auto__.push(arg__15359__auto___18840);

var G__18841 = seq__17026_18836;
var G__18842 = chunk__17027_18837;
var G__18843 = count__17028_18838;
var G__18844 = (i__17029_18839 + (1));
seq__17026_18836 = G__18841;
chunk__17027_18837 = G__18842;
count__17028_18838 = G__18843;
i__17029_18839 = G__18844;
continue;
} else {
var temp__4126__auto___18845 = cljs.core.seq.call(null,seq__17026_18836);
if(temp__4126__auto___18845){
var seq__17026_18846__$1 = temp__4126__auto___18845;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17026_18846__$1)){
var c__4519__auto___18847 = cljs.core.chunk_first.call(null,seq__17026_18846__$1);
var G__18848 = cljs.core.chunk_rest.call(null,seq__17026_18846__$1);
var G__18849 = c__4519__auto___18847;
var G__18850 = cljs.core.count.call(null,c__4519__auto___18847);
var G__18851 = (0);
seq__17026_18836 = G__18848;
chunk__17027_18837 = G__18849;
count__17028_18838 = G__18850;
i__17029_18839 = G__18851;
continue;
} else {
var arg__15359__auto___18852 = cljs.core.first.call(null,seq__17026_18846__$1);
a__15358__auto__.push(arg__15359__auto___18852);

var G__18853 = cljs.core.next.call(null,seq__17026_18846__$1);
var G__18854 = null;
var G__18855 = (0);
var G__18856 = (0);
seq__17026_18836 = G__18853;
chunk__17027_18837 = G__18854;
count__17028_18838 = G__18855;
i__17029_18839 = G__18856;
continue;
}
} else {
}
}
break;
}

return React.DOM.link.apply(null,a__15358__auto__);
};
var link = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18857__i = 0, G__18857__a = new Array(arguments.length -  0);
while (G__18857__i < G__18857__a.length) {G__18857__a[G__18857__i] = arguments[G__18857__i + 0]; ++G__18857__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18857__a,0);
} 
return link__delegate.call(this,args__15357__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__18858){
var args__15357__auto__ = cljs.core.seq(arglist__18858);
return link__delegate(args__15357__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17034_18859 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17035_18860 = null;
var count__17036_18861 = (0);
var i__17037_18862 = (0);
while(true){
if((i__17037_18862 < count__17036_18861)){
var arg__15359__auto___18863 = cljs.core._nth.call(null,chunk__17035_18860,i__17037_18862);
a__15358__auto__.push(arg__15359__auto___18863);

var G__18864 = seq__17034_18859;
var G__18865 = chunk__17035_18860;
var G__18866 = count__17036_18861;
var G__18867 = (i__17037_18862 + (1));
seq__17034_18859 = G__18864;
chunk__17035_18860 = G__18865;
count__17036_18861 = G__18866;
i__17037_18862 = G__18867;
continue;
} else {
var temp__4126__auto___18868 = cljs.core.seq.call(null,seq__17034_18859);
if(temp__4126__auto___18868){
var seq__17034_18869__$1 = temp__4126__auto___18868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17034_18869__$1)){
var c__4519__auto___18870 = cljs.core.chunk_first.call(null,seq__17034_18869__$1);
var G__18871 = cljs.core.chunk_rest.call(null,seq__17034_18869__$1);
var G__18872 = c__4519__auto___18870;
var G__18873 = cljs.core.count.call(null,c__4519__auto___18870);
var G__18874 = (0);
seq__17034_18859 = G__18871;
chunk__17035_18860 = G__18872;
count__17036_18861 = G__18873;
i__17037_18862 = G__18874;
continue;
} else {
var arg__15359__auto___18875 = cljs.core.first.call(null,seq__17034_18869__$1);
a__15358__auto__.push(arg__15359__auto___18875);

var G__18876 = cljs.core.next.call(null,seq__17034_18869__$1);
var G__18877 = null;
var G__18878 = (0);
var G__18879 = (0);
seq__17034_18859 = G__18876;
chunk__17035_18860 = G__18877;
count__17036_18861 = G__18878;
i__17037_18862 = G__18879;
continue;
}
} else {
}
}
break;
}

return React.DOM.main.apply(null,a__15358__auto__);
};
var main = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18880__i = 0, G__18880__a = new Array(arguments.length -  0);
while (G__18880__i < G__18880__a.length) {G__18880__a[G__18880__i] = arguments[G__18880__i + 0]; ++G__18880__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18880__a,0);
} 
return main__delegate.call(this,args__15357__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__18881){
var args__15357__auto__ = cljs.core.seq(arglist__18881);
return main__delegate(args__15357__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17042_18882 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17043_18883 = null;
var count__17044_18884 = (0);
var i__17045_18885 = (0);
while(true){
if((i__17045_18885 < count__17044_18884)){
var arg__15359__auto___18886 = cljs.core._nth.call(null,chunk__17043_18883,i__17045_18885);
a__15358__auto__.push(arg__15359__auto___18886);

var G__18887 = seq__17042_18882;
var G__18888 = chunk__17043_18883;
var G__18889 = count__17044_18884;
var G__18890 = (i__17045_18885 + (1));
seq__17042_18882 = G__18887;
chunk__17043_18883 = G__18888;
count__17044_18884 = G__18889;
i__17045_18885 = G__18890;
continue;
} else {
var temp__4126__auto___18891 = cljs.core.seq.call(null,seq__17042_18882);
if(temp__4126__auto___18891){
var seq__17042_18892__$1 = temp__4126__auto___18891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17042_18892__$1)){
var c__4519__auto___18893 = cljs.core.chunk_first.call(null,seq__17042_18892__$1);
var G__18894 = cljs.core.chunk_rest.call(null,seq__17042_18892__$1);
var G__18895 = c__4519__auto___18893;
var G__18896 = cljs.core.count.call(null,c__4519__auto___18893);
var G__18897 = (0);
seq__17042_18882 = G__18894;
chunk__17043_18883 = G__18895;
count__17044_18884 = G__18896;
i__17045_18885 = G__18897;
continue;
} else {
var arg__15359__auto___18898 = cljs.core.first.call(null,seq__17042_18892__$1);
a__15358__auto__.push(arg__15359__auto___18898);

var G__18899 = cljs.core.next.call(null,seq__17042_18892__$1);
var G__18900 = null;
var G__18901 = (0);
var G__18902 = (0);
seq__17042_18882 = G__18899;
chunk__17043_18883 = G__18900;
count__17044_18884 = G__18901;
i__17045_18885 = G__18902;
continue;
}
} else {
}
}
break;
}

return React.DOM.map.apply(null,a__15358__auto__);
};
var map = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18903__i = 0, G__18903__a = new Array(arguments.length -  0);
while (G__18903__i < G__18903__a.length) {G__18903__a[G__18903__i] = arguments[G__18903__i + 0]; ++G__18903__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18903__a,0);
} 
return map__delegate.call(this,args__15357__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__18904){
var args__15357__auto__ = cljs.core.seq(arglist__18904);
return map__delegate(args__15357__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17050_18905 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17051_18906 = null;
var count__17052_18907 = (0);
var i__17053_18908 = (0);
while(true){
if((i__17053_18908 < count__17052_18907)){
var arg__15359__auto___18909 = cljs.core._nth.call(null,chunk__17051_18906,i__17053_18908);
a__15358__auto__.push(arg__15359__auto___18909);

var G__18910 = seq__17050_18905;
var G__18911 = chunk__17051_18906;
var G__18912 = count__17052_18907;
var G__18913 = (i__17053_18908 + (1));
seq__17050_18905 = G__18910;
chunk__17051_18906 = G__18911;
count__17052_18907 = G__18912;
i__17053_18908 = G__18913;
continue;
} else {
var temp__4126__auto___18914 = cljs.core.seq.call(null,seq__17050_18905);
if(temp__4126__auto___18914){
var seq__17050_18915__$1 = temp__4126__auto___18914;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17050_18915__$1)){
var c__4519__auto___18916 = cljs.core.chunk_first.call(null,seq__17050_18915__$1);
var G__18917 = cljs.core.chunk_rest.call(null,seq__17050_18915__$1);
var G__18918 = c__4519__auto___18916;
var G__18919 = cljs.core.count.call(null,c__4519__auto___18916);
var G__18920 = (0);
seq__17050_18905 = G__18917;
chunk__17051_18906 = G__18918;
count__17052_18907 = G__18919;
i__17053_18908 = G__18920;
continue;
} else {
var arg__15359__auto___18921 = cljs.core.first.call(null,seq__17050_18915__$1);
a__15358__auto__.push(arg__15359__auto___18921);

var G__18922 = cljs.core.next.call(null,seq__17050_18915__$1);
var G__18923 = null;
var G__18924 = (0);
var G__18925 = (0);
seq__17050_18905 = G__18922;
chunk__17051_18906 = G__18923;
count__17052_18907 = G__18924;
i__17053_18908 = G__18925;
continue;
}
} else {
}
}
break;
}

return React.DOM.mark.apply(null,a__15358__auto__);
};
var mark = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18926__i = 0, G__18926__a = new Array(arguments.length -  0);
while (G__18926__i < G__18926__a.length) {G__18926__a[G__18926__i] = arguments[G__18926__i + 0]; ++G__18926__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18926__a,0);
} 
return mark__delegate.call(this,args__15357__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__18927){
var args__15357__auto__ = cljs.core.seq(arglist__18927);
return mark__delegate(args__15357__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17058_18928 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17059_18929 = null;
var count__17060_18930 = (0);
var i__17061_18931 = (0);
while(true){
if((i__17061_18931 < count__17060_18930)){
var arg__15359__auto___18932 = cljs.core._nth.call(null,chunk__17059_18929,i__17061_18931);
a__15358__auto__.push(arg__15359__auto___18932);

var G__18933 = seq__17058_18928;
var G__18934 = chunk__17059_18929;
var G__18935 = count__17060_18930;
var G__18936 = (i__17061_18931 + (1));
seq__17058_18928 = G__18933;
chunk__17059_18929 = G__18934;
count__17060_18930 = G__18935;
i__17061_18931 = G__18936;
continue;
} else {
var temp__4126__auto___18937 = cljs.core.seq.call(null,seq__17058_18928);
if(temp__4126__auto___18937){
var seq__17058_18938__$1 = temp__4126__auto___18937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17058_18938__$1)){
var c__4519__auto___18939 = cljs.core.chunk_first.call(null,seq__17058_18938__$1);
var G__18940 = cljs.core.chunk_rest.call(null,seq__17058_18938__$1);
var G__18941 = c__4519__auto___18939;
var G__18942 = cljs.core.count.call(null,c__4519__auto___18939);
var G__18943 = (0);
seq__17058_18928 = G__18940;
chunk__17059_18929 = G__18941;
count__17060_18930 = G__18942;
i__17061_18931 = G__18943;
continue;
} else {
var arg__15359__auto___18944 = cljs.core.first.call(null,seq__17058_18938__$1);
a__15358__auto__.push(arg__15359__auto___18944);

var G__18945 = cljs.core.next.call(null,seq__17058_18938__$1);
var G__18946 = null;
var G__18947 = (0);
var G__18948 = (0);
seq__17058_18928 = G__18945;
chunk__17059_18929 = G__18946;
count__17060_18930 = G__18947;
i__17061_18931 = G__18948;
continue;
}
} else {
}
}
break;
}

return React.DOM.menu.apply(null,a__15358__auto__);
};
var menu = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18949__i = 0, G__18949__a = new Array(arguments.length -  0);
while (G__18949__i < G__18949__a.length) {G__18949__a[G__18949__i] = arguments[G__18949__i + 0]; ++G__18949__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18949__a,0);
} 
return menu__delegate.call(this,args__15357__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__18950){
var args__15357__auto__ = cljs.core.seq(arglist__18950);
return menu__delegate(args__15357__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17066_18951 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17067_18952 = null;
var count__17068_18953 = (0);
var i__17069_18954 = (0);
while(true){
if((i__17069_18954 < count__17068_18953)){
var arg__15359__auto___18955 = cljs.core._nth.call(null,chunk__17067_18952,i__17069_18954);
a__15358__auto__.push(arg__15359__auto___18955);

var G__18956 = seq__17066_18951;
var G__18957 = chunk__17067_18952;
var G__18958 = count__17068_18953;
var G__18959 = (i__17069_18954 + (1));
seq__17066_18951 = G__18956;
chunk__17067_18952 = G__18957;
count__17068_18953 = G__18958;
i__17069_18954 = G__18959;
continue;
} else {
var temp__4126__auto___18960 = cljs.core.seq.call(null,seq__17066_18951);
if(temp__4126__auto___18960){
var seq__17066_18961__$1 = temp__4126__auto___18960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17066_18961__$1)){
var c__4519__auto___18962 = cljs.core.chunk_first.call(null,seq__17066_18961__$1);
var G__18963 = cljs.core.chunk_rest.call(null,seq__17066_18961__$1);
var G__18964 = c__4519__auto___18962;
var G__18965 = cljs.core.count.call(null,c__4519__auto___18962);
var G__18966 = (0);
seq__17066_18951 = G__18963;
chunk__17067_18952 = G__18964;
count__17068_18953 = G__18965;
i__17069_18954 = G__18966;
continue;
} else {
var arg__15359__auto___18967 = cljs.core.first.call(null,seq__17066_18961__$1);
a__15358__auto__.push(arg__15359__auto___18967);

var G__18968 = cljs.core.next.call(null,seq__17066_18961__$1);
var G__18969 = null;
var G__18970 = (0);
var G__18971 = (0);
seq__17066_18951 = G__18968;
chunk__17067_18952 = G__18969;
count__17068_18953 = G__18970;
i__17069_18954 = G__18971;
continue;
}
} else {
}
}
break;
}

return React.DOM.menuitem.apply(null,a__15358__auto__);
};
var menuitem = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18972__i = 0, G__18972__a = new Array(arguments.length -  0);
while (G__18972__i < G__18972__a.length) {G__18972__a[G__18972__i] = arguments[G__18972__i + 0]; ++G__18972__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18972__a,0);
} 
return menuitem__delegate.call(this,args__15357__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__18973){
var args__15357__auto__ = cljs.core.seq(arglist__18973);
return menuitem__delegate(args__15357__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17074_18974 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17075_18975 = null;
var count__17076_18976 = (0);
var i__17077_18977 = (0);
while(true){
if((i__17077_18977 < count__17076_18976)){
var arg__15359__auto___18978 = cljs.core._nth.call(null,chunk__17075_18975,i__17077_18977);
a__15358__auto__.push(arg__15359__auto___18978);

var G__18979 = seq__17074_18974;
var G__18980 = chunk__17075_18975;
var G__18981 = count__17076_18976;
var G__18982 = (i__17077_18977 + (1));
seq__17074_18974 = G__18979;
chunk__17075_18975 = G__18980;
count__17076_18976 = G__18981;
i__17077_18977 = G__18982;
continue;
} else {
var temp__4126__auto___18983 = cljs.core.seq.call(null,seq__17074_18974);
if(temp__4126__auto___18983){
var seq__17074_18984__$1 = temp__4126__auto___18983;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17074_18984__$1)){
var c__4519__auto___18985 = cljs.core.chunk_first.call(null,seq__17074_18984__$1);
var G__18986 = cljs.core.chunk_rest.call(null,seq__17074_18984__$1);
var G__18987 = c__4519__auto___18985;
var G__18988 = cljs.core.count.call(null,c__4519__auto___18985);
var G__18989 = (0);
seq__17074_18974 = G__18986;
chunk__17075_18975 = G__18987;
count__17076_18976 = G__18988;
i__17077_18977 = G__18989;
continue;
} else {
var arg__15359__auto___18990 = cljs.core.first.call(null,seq__17074_18984__$1);
a__15358__auto__.push(arg__15359__auto___18990);

var G__18991 = cljs.core.next.call(null,seq__17074_18984__$1);
var G__18992 = null;
var G__18993 = (0);
var G__18994 = (0);
seq__17074_18974 = G__18991;
chunk__17075_18975 = G__18992;
count__17076_18976 = G__18993;
i__17077_18977 = G__18994;
continue;
}
} else {
}
}
break;
}

return React.DOM.meta.apply(null,a__15358__auto__);
};
var meta = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__18995__i = 0, G__18995__a = new Array(arguments.length -  0);
while (G__18995__i < G__18995__a.length) {G__18995__a[G__18995__i] = arguments[G__18995__i + 0]; ++G__18995__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__18995__a,0);
} 
return meta__delegate.call(this,args__15357__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__18996){
var args__15357__auto__ = cljs.core.seq(arglist__18996);
return meta__delegate(args__15357__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17082_18997 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17083_18998 = null;
var count__17084_18999 = (0);
var i__17085_19000 = (0);
while(true){
if((i__17085_19000 < count__17084_18999)){
var arg__15359__auto___19001 = cljs.core._nth.call(null,chunk__17083_18998,i__17085_19000);
a__15358__auto__.push(arg__15359__auto___19001);

var G__19002 = seq__17082_18997;
var G__19003 = chunk__17083_18998;
var G__19004 = count__17084_18999;
var G__19005 = (i__17085_19000 + (1));
seq__17082_18997 = G__19002;
chunk__17083_18998 = G__19003;
count__17084_18999 = G__19004;
i__17085_19000 = G__19005;
continue;
} else {
var temp__4126__auto___19006 = cljs.core.seq.call(null,seq__17082_18997);
if(temp__4126__auto___19006){
var seq__17082_19007__$1 = temp__4126__auto___19006;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17082_19007__$1)){
var c__4519__auto___19008 = cljs.core.chunk_first.call(null,seq__17082_19007__$1);
var G__19009 = cljs.core.chunk_rest.call(null,seq__17082_19007__$1);
var G__19010 = c__4519__auto___19008;
var G__19011 = cljs.core.count.call(null,c__4519__auto___19008);
var G__19012 = (0);
seq__17082_18997 = G__19009;
chunk__17083_18998 = G__19010;
count__17084_18999 = G__19011;
i__17085_19000 = G__19012;
continue;
} else {
var arg__15359__auto___19013 = cljs.core.first.call(null,seq__17082_19007__$1);
a__15358__auto__.push(arg__15359__auto___19013);

var G__19014 = cljs.core.next.call(null,seq__17082_19007__$1);
var G__19015 = null;
var G__19016 = (0);
var G__19017 = (0);
seq__17082_18997 = G__19014;
chunk__17083_18998 = G__19015;
count__17084_18999 = G__19016;
i__17085_19000 = G__19017;
continue;
}
} else {
}
}
break;
}

return React.DOM.meter.apply(null,a__15358__auto__);
};
var meter = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19018__i = 0, G__19018__a = new Array(arguments.length -  0);
while (G__19018__i < G__19018__a.length) {G__19018__a[G__19018__i] = arguments[G__19018__i + 0]; ++G__19018__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19018__a,0);
} 
return meter__delegate.call(this,args__15357__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__19019){
var args__15357__auto__ = cljs.core.seq(arglist__19019);
return meter__delegate(args__15357__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17090_19020 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17091_19021 = null;
var count__17092_19022 = (0);
var i__17093_19023 = (0);
while(true){
if((i__17093_19023 < count__17092_19022)){
var arg__15359__auto___19024 = cljs.core._nth.call(null,chunk__17091_19021,i__17093_19023);
a__15358__auto__.push(arg__15359__auto___19024);

var G__19025 = seq__17090_19020;
var G__19026 = chunk__17091_19021;
var G__19027 = count__17092_19022;
var G__19028 = (i__17093_19023 + (1));
seq__17090_19020 = G__19025;
chunk__17091_19021 = G__19026;
count__17092_19022 = G__19027;
i__17093_19023 = G__19028;
continue;
} else {
var temp__4126__auto___19029 = cljs.core.seq.call(null,seq__17090_19020);
if(temp__4126__auto___19029){
var seq__17090_19030__$1 = temp__4126__auto___19029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17090_19030__$1)){
var c__4519__auto___19031 = cljs.core.chunk_first.call(null,seq__17090_19030__$1);
var G__19032 = cljs.core.chunk_rest.call(null,seq__17090_19030__$1);
var G__19033 = c__4519__auto___19031;
var G__19034 = cljs.core.count.call(null,c__4519__auto___19031);
var G__19035 = (0);
seq__17090_19020 = G__19032;
chunk__17091_19021 = G__19033;
count__17092_19022 = G__19034;
i__17093_19023 = G__19035;
continue;
} else {
var arg__15359__auto___19036 = cljs.core.first.call(null,seq__17090_19030__$1);
a__15358__auto__.push(arg__15359__auto___19036);

var G__19037 = cljs.core.next.call(null,seq__17090_19030__$1);
var G__19038 = null;
var G__19039 = (0);
var G__19040 = (0);
seq__17090_19020 = G__19037;
chunk__17091_19021 = G__19038;
count__17092_19022 = G__19039;
i__17093_19023 = G__19040;
continue;
}
} else {
}
}
break;
}

return React.DOM.nav.apply(null,a__15358__auto__);
};
var nav = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19041__i = 0, G__19041__a = new Array(arguments.length -  0);
while (G__19041__i < G__19041__a.length) {G__19041__a[G__19041__i] = arguments[G__19041__i + 0]; ++G__19041__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19041__a,0);
} 
return nav__delegate.call(this,args__15357__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__19042){
var args__15357__auto__ = cljs.core.seq(arglist__19042);
return nav__delegate(args__15357__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17098_19043 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17099_19044 = null;
var count__17100_19045 = (0);
var i__17101_19046 = (0);
while(true){
if((i__17101_19046 < count__17100_19045)){
var arg__15359__auto___19047 = cljs.core._nth.call(null,chunk__17099_19044,i__17101_19046);
a__15358__auto__.push(arg__15359__auto___19047);

var G__19048 = seq__17098_19043;
var G__19049 = chunk__17099_19044;
var G__19050 = count__17100_19045;
var G__19051 = (i__17101_19046 + (1));
seq__17098_19043 = G__19048;
chunk__17099_19044 = G__19049;
count__17100_19045 = G__19050;
i__17101_19046 = G__19051;
continue;
} else {
var temp__4126__auto___19052 = cljs.core.seq.call(null,seq__17098_19043);
if(temp__4126__auto___19052){
var seq__17098_19053__$1 = temp__4126__auto___19052;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17098_19053__$1)){
var c__4519__auto___19054 = cljs.core.chunk_first.call(null,seq__17098_19053__$1);
var G__19055 = cljs.core.chunk_rest.call(null,seq__17098_19053__$1);
var G__19056 = c__4519__auto___19054;
var G__19057 = cljs.core.count.call(null,c__4519__auto___19054);
var G__19058 = (0);
seq__17098_19043 = G__19055;
chunk__17099_19044 = G__19056;
count__17100_19045 = G__19057;
i__17101_19046 = G__19058;
continue;
} else {
var arg__15359__auto___19059 = cljs.core.first.call(null,seq__17098_19053__$1);
a__15358__auto__.push(arg__15359__auto___19059);

var G__19060 = cljs.core.next.call(null,seq__17098_19053__$1);
var G__19061 = null;
var G__19062 = (0);
var G__19063 = (0);
seq__17098_19043 = G__19060;
chunk__17099_19044 = G__19061;
count__17100_19045 = G__19062;
i__17101_19046 = G__19063;
continue;
}
} else {
}
}
break;
}

return React.DOM.noscript.apply(null,a__15358__auto__);
};
var noscript = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19064__i = 0, G__19064__a = new Array(arguments.length -  0);
while (G__19064__i < G__19064__a.length) {G__19064__a[G__19064__i] = arguments[G__19064__i + 0]; ++G__19064__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19064__a,0);
} 
return noscript__delegate.call(this,args__15357__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__19065){
var args__15357__auto__ = cljs.core.seq(arglist__19065);
return noscript__delegate(args__15357__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17106_19066 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17107_19067 = null;
var count__17108_19068 = (0);
var i__17109_19069 = (0);
while(true){
if((i__17109_19069 < count__17108_19068)){
var arg__15359__auto___19070 = cljs.core._nth.call(null,chunk__17107_19067,i__17109_19069);
a__15358__auto__.push(arg__15359__auto___19070);

var G__19071 = seq__17106_19066;
var G__19072 = chunk__17107_19067;
var G__19073 = count__17108_19068;
var G__19074 = (i__17109_19069 + (1));
seq__17106_19066 = G__19071;
chunk__17107_19067 = G__19072;
count__17108_19068 = G__19073;
i__17109_19069 = G__19074;
continue;
} else {
var temp__4126__auto___19075 = cljs.core.seq.call(null,seq__17106_19066);
if(temp__4126__auto___19075){
var seq__17106_19076__$1 = temp__4126__auto___19075;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17106_19076__$1)){
var c__4519__auto___19077 = cljs.core.chunk_first.call(null,seq__17106_19076__$1);
var G__19078 = cljs.core.chunk_rest.call(null,seq__17106_19076__$1);
var G__19079 = c__4519__auto___19077;
var G__19080 = cljs.core.count.call(null,c__4519__auto___19077);
var G__19081 = (0);
seq__17106_19066 = G__19078;
chunk__17107_19067 = G__19079;
count__17108_19068 = G__19080;
i__17109_19069 = G__19081;
continue;
} else {
var arg__15359__auto___19082 = cljs.core.first.call(null,seq__17106_19076__$1);
a__15358__auto__.push(arg__15359__auto___19082);

var G__19083 = cljs.core.next.call(null,seq__17106_19076__$1);
var G__19084 = null;
var G__19085 = (0);
var G__19086 = (0);
seq__17106_19066 = G__19083;
chunk__17107_19067 = G__19084;
count__17108_19068 = G__19085;
i__17109_19069 = G__19086;
continue;
}
} else {
}
}
break;
}

return React.DOM.object.apply(null,a__15358__auto__);
};
var object = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19087__i = 0, G__19087__a = new Array(arguments.length -  0);
while (G__19087__i < G__19087__a.length) {G__19087__a[G__19087__i] = arguments[G__19087__i + 0]; ++G__19087__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19087__a,0);
} 
return object__delegate.call(this,args__15357__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__19088){
var args__15357__auto__ = cljs.core.seq(arglist__19088);
return object__delegate(args__15357__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17114_19089 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17115_19090 = null;
var count__17116_19091 = (0);
var i__17117_19092 = (0);
while(true){
if((i__17117_19092 < count__17116_19091)){
var arg__15359__auto___19093 = cljs.core._nth.call(null,chunk__17115_19090,i__17117_19092);
a__15358__auto__.push(arg__15359__auto___19093);

var G__19094 = seq__17114_19089;
var G__19095 = chunk__17115_19090;
var G__19096 = count__17116_19091;
var G__19097 = (i__17117_19092 + (1));
seq__17114_19089 = G__19094;
chunk__17115_19090 = G__19095;
count__17116_19091 = G__19096;
i__17117_19092 = G__19097;
continue;
} else {
var temp__4126__auto___19098 = cljs.core.seq.call(null,seq__17114_19089);
if(temp__4126__auto___19098){
var seq__17114_19099__$1 = temp__4126__auto___19098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17114_19099__$1)){
var c__4519__auto___19100 = cljs.core.chunk_first.call(null,seq__17114_19099__$1);
var G__19101 = cljs.core.chunk_rest.call(null,seq__17114_19099__$1);
var G__19102 = c__4519__auto___19100;
var G__19103 = cljs.core.count.call(null,c__4519__auto___19100);
var G__19104 = (0);
seq__17114_19089 = G__19101;
chunk__17115_19090 = G__19102;
count__17116_19091 = G__19103;
i__17117_19092 = G__19104;
continue;
} else {
var arg__15359__auto___19105 = cljs.core.first.call(null,seq__17114_19099__$1);
a__15358__auto__.push(arg__15359__auto___19105);

var G__19106 = cljs.core.next.call(null,seq__17114_19099__$1);
var G__19107 = null;
var G__19108 = (0);
var G__19109 = (0);
seq__17114_19089 = G__19106;
chunk__17115_19090 = G__19107;
count__17116_19091 = G__19108;
i__17117_19092 = G__19109;
continue;
}
} else {
}
}
break;
}

return React.DOM.ol.apply(null,a__15358__auto__);
};
var ol = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19110__i = 0, G__19110__a = new Array(arguments.length -  0);
while (G__19110__i < G__19110__a.length) {G__19110__a[G__19110__i] = arguments[G__19110__i + 0]; ++G__19110__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19110__a,0);
} 
return ol__delegate.call(this,args__15357__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__19111){
var args__15357__auto__ = cljs.core.seq(arglist__19111);
return ol__delegate(args__15357__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17122_19112 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17123_19113 = null;
var count__17124_19114 = (0);
var i__17125_19115 = (0);
while(true){
if((i__17125_19115 < count__17124_19114)){
var arg__15359__auto___19116 = cljs.core._nth.call(null,chunk__17123_19113,i__17125_19115);
a__15358__auto__.push(arg__15359__auto___19116);

var G__19117 = seq__17122_19112;
var G__19118 = chunk__17123_19113;
var G__19119 = count__17124_19114;
var G__19120 = (i__17125_19115 + (1));
seq__17122_19112 = G__19117;
chunk__17123_19113 = G__19118;
count__17124_19114 = G__19119;
i__17125_19115 = G__19120;
continue;
} else {
var temp__4126__auto___19121 = cljs.core.seq.call(null,seq__17122_19112);
if(temp__4126__auto___19121){
var seq__17122_19122__$1 = temp__4126__auto___19121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17122_19122__$1)){
var c__4519__auto___19123 = cljs.core.chunk_first.call(null,seq__17122_19122__$1);
var G__19124 = cljs.core.chunk_rest.call(null,seq__17122_19122__$1);
var G__19125 = c__4519__auto___19123;
var G__19126 = cljs.core.count.call(null,c__4519__auto___19123);
var G__19127 = (0);
seq__17122_19112 = G__19124;
chunk__17123_19113 = G__19125;
count__17124_19114 = G__19126;
i__17125_19115 = G__19127;
continue;
} else {
var arg__15359__auto___19128 = cljs.core.first.call(null,seq__17122_19122__$1);
a__15358__auto__.push(arg__15359__auto___19128);

var G__19129 = cljs.core.next.call(null,seq__17122_19122__$1);
var G__19130 = null;
var G__19131 = (0);
var G__19132 = (0);
seq__17122_19112 = G__19129;
chunk__17123_19113 = G__19130;
count__17124_19114 = G__19131;
i__17125_19115 = G__19132;
continue;
}
} else {
}
}
break;
}

return React.DOM.optgroup.apply(null,a__15358__auto__);
};
var optgroup = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19133__i = 0, G__19133__a = new Array(arguments.length -  0);
while (G__19133__i < G__19133__a.length) {G__19133__a[G__19133__i] = arguments[G__19133__i + 0]; ++G__19133__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19133__a,0);
} 
return optgroup__delegate.call(this,args__15357__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__19134){
var args__15357__auto__ = cljs.core.seq(arglist__19134);
return optgroup__delegate(args__15357__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17130_19135 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17131_19136 = null;
var count__17132_19137 = (0);
var i__17133_19138 = (0);
while(true){
if((i__17133_19138 < count__17132_19137)){
var arg__15359__auto___19139 = cljs.core._nth.call(null,chunk__17131_19136,i__17133_19138);
a__15358__auto__.push(arg__15359__auto___19139);

var G__19140 = seq__17130_19135;
var G__19141 = chunk__17131_19136;
var G__19142 = count__17132_19137;
var G__19143 = (i__17133_19138 + (1));
seq__17130_19135 = G__19140;
chunk__17131_19136 = G__19141;
count__17132_19137 = G__19142;
i__17133_19138 = G__19143;
continue;
} else {
var temp__4126__auto___19144 = cljs.core.seq.call(null,seq__17130_19135);
if(temp__4126__auto___19144){
var seq__17130_19145__$1 = temp__4126__auto___19144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17130_19145__$1)){
var c__4519__auto___19146 = cljs.core.chunk_first.call(null,seq__17130_19145__$1);
var G__19147 = cljs.core.chunk_rest.call(null,seq__17130_19145__$1);
var G__19148 = c__4519__auto___19146;
var G__19149 = cljs.core.count.call(null,c__4519__auto___19146);
var G__19150 = (0);
seq__17130_19135 = G__19147;
chunk__17131_19136 = G__19148;
count__17132_19137 = G__19149;
i__17133_19138 = G__19150;
continue;
} else {
var arg__15359__auto___19151 = cljs.core.first.call(null,seq__17130_19145__$1);
a__15358__auto__.push(arg__15359__auto___19151);

var G__19152 = cljs.core.next.call(null,seq__17130_19145__$1);
var G__19153 = null;
var G__19154 = (0);
var G__19155 = (0);
seq__17130_19135 = G__19152;
chunk__17131_19136 = G__19153;
count__17132_19137 = G__19154;
i__17133_19138 = G__19155;
continue;
}
} else {
}
}
break;
}

return React.DOM.option.apply(null,a__15358__auto__);
};
var option = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19156__i = 0, G__19156__a = new Array(arguments.length -  0);
while (G__19156__i < G__19156__a.length) {G__19156__a[G__19156__i] = arguments[G__19156__i + 0]; ++G__19156__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19156__a,0);
} 
return option__delegate.call(this,args__15357__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__19157){
var args__15357__auto__ = cljs.core.seq(arglist__19157);
return option__delegate(args__15357__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17138_19158 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17139_19159 = null;
var count__17140_19160 = (0);
var i__17141_19161 = (0);
while(true){
if((i__17141_19161 < count__17140_19160)){
var arg__15359__auto___19162 = cljs.core._nth.call(null,chunk__17139_19159,i__17141_19161);
a__15358__auto__.push(arg__15359__auto___19162);

var G__19163 = seq__17138_19158;
var G__19164 = chunk__17139_19159;
var G__19165 = count__17140_19160;
var G__19166 = (i__17141_19161 + (1));
seq__17138_19158 = G__19163;
chunk__17139_19159 = G__19164;
count__17140_19160 = G__19165;
i__17141_19161 = G__19166;
continue;
} else {
var temp__4126__auto___19167 = cljs.core.seq.call(null,seq__17138_19158);
if(temp__4126__auto___19167){
var seq__17138_19168__$1 = temp__4126__auto___19167;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17138_19168__$1)){
var c__4519__auto___19169 = cljs.core.chunk_first.call(null,seq__17138_19168__$1);
var G__19170 = cljs.core.chunk_rest.call(null,seq__17138_19168__$1);
var G__19171 = c__4519__auto___19169;
var G__19172 = cljs.core.count.call(null,c__4519__auto___19169);
var G__19173 = (0);
seq__17138_19158 = G__19170;
chunk__17139_19159 = G__19171;
count__17140_19160 = G__19172;
i__17141_19161 = G__19173;
continue;
} else {
var arg__15359__auto___19174 = cljs.core.first.call(null,seq__17138_19168__$1);
a__15358__auto__.push(arg__15359__auto___19174);

var G__19175 = cljs.core.next.call(null,seq__17138_19168__$1);
var G__19176 = null;
var G__19177 = (0);
var G__19178 = (0);
seq__17138_19158 = G__19175;
chunk__17139_19159 = G__19176;
count__17140_19160 = G__19177;
i__17141_19161 = G__19178;
continue;
}
} else {
}
}
break;
}

return React.DOM.output.apply(null,a__15358__auto__);
};
var output = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19179__i = 0, G__19179__a = new Array(arguments.length -  0);
while (G__19179__i < G__19179__a.length) {G__19179__a[G__19179__i] = arguments[G__19179__i + 0]; ++G__19179__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19179__a,0);
} 
return output__delegate.call(this,args__15357__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__19180){
var args__15357__auto__ = cljs.core.seq(arglist__19180);
return output__delegate(args__15357__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17146_19181 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17147_19182 = null;
var count__17148_19183 = (0);
var i__17149_19184 = (0);
while(true){
if((i__17149_19184 < count__17148_19183)){
var arg__15359__auto___19185 = cljs.core._nth.call(null,chunk__17147_19182,i__17149_19184);
a__15358__auto__.push(arg__15359__auto___19185);

var G__19186 = seq__17146_19181;
var G__19187 = chunk__17147_19182;
var G__19188 = count__17148_19183;
var G__19189 = (i__17149_19184 + (1));
seq__17146_19181 = G__19186;
chunk__17147_19182 = G__19187;
count__17148_19183 = G__19188;
i__17149_19184 = G__19189;
continue;
} else {
var temp__4126__auto___19190 = cljs.core.seq.call(null,seq__17146_19181);
if(temp__4126__auto___19190){
var seq__17146_19191__$1 = temp__4126__auto___19190;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17146_19191__$1)){
var c__4519__auto___19192 = cljs.core.chunk_first.call(null,seq__17146_19191__$1);
var G__19193 = cljs.core.chunk_rest.call(null,seq__17146_19191__$1);
var G__19194 = c__4519__auto___19192;
var G__19195 = cljs.core.count.call(null,c__4519__auto___19192);
var G__19196 = (0);
seq__17146_19181 = G__19193;
chunk__17147_19182 = G__19194;
count__17148_19183 = G__19195;
i__17149_19184 = G__19196;
continue;
} else {
var arg__15359__auto___19197 = cljs.core.first.call(null,seq__17146_19191__$1);
a__15358__auto__.push(arg__15359__auto___19197);

var G__19198 = cljs.core.next.call(null,seq__17146_19191__$1);
var G__19199 = null;
var G__19200 = (0);
var G__19201 = (0);
seq__17146_19181 = G__19198;
chunk__17147_19182 = G__19199;
count__17148_19183 = G__19200;
i__17149_19184 = G__19201;
continue;
}
} else {
}
}
break;
}

return React.DOM.p.apply(null,a__15358__auto__);
};
var p = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19202__i = 0, G__19202__a = new Array(arguments.length -  0);
while (G__19202__i < G__19202__a.length) {G__19202__a[G__19202__i] = arguments[G__19202__i + 0]; ++G__19202__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19202__a,0);
} 
return p__delegate.call(this,args__15357__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__19203){
var args__15357__auto__ = cljs.core.seq(arglist__19203);
return p__delegate(args__15357__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17154_19204 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17155_19205 = null;
var count__17156_19206 = (0);
var i__17157_19207 = (0);
while(true){
if((i__17157_19207 < count__17156_19206)){
var arg__15359__auto___19208 = cljs.core._nth.call(null,chunk__17155_19205,i__17157_19207);
a__15358__auto__.push(arg__15359__auto___19208);

var G__19209 = seq__17154_19204;
var G__19210 = chunk__17155_19205;
var G__19211 = count__17156_19206;
var G__19212 = (i__17157_19207 + (1));
seq__17154_19204 = G__19209;
chunk__17155_19205 = G__19210;
count__17156_19206 = G__19211;
i__17157_19207 = G__19212;
continue;
} else {
var temp__4126__auto___19213 = cljs.core.seq.call(null,seq__17154_19204);
if(temp__4126__auto___19213){
var seq__17154_19214__$1 = temp__4126__auto___19213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17154_19214__$1)){
var c__4519__auto___19215 = cljs.core.chunk_first.call(null,seq__17154_19214__$1);
var G__19216 = cljs.core.chunk_rest.call(null,seq__17154_19214__$1);
var G__19217 = c__4519__auto___19215;
var G__19218 = cljs.core.count.call(null,c__4519__auto___19215);
var G__19219 = (0);
seq__17154_19204 = G__19216;
chunk__17155_19205 = G__19217;
count__17156_19206 = G__19218;
i__17157_19207 = G__19219;
continue;
} else {
var arg__15359__auto___19220 = cljs.core.first.call(null,seq__17154_19214__$1);
a__15358__auto__.push(arg__15359__auto___19220);

var G__19221 = cljs.core.next.call(null,seq__17154_19214__$1);
var G__19222 = null;
var G__19223 = (0);
var G__19224 = (0);
seq__17154_19204 = G__19221;
chunk__17155_19205 = G__19222;
count__17156_19206 = G__19223;
i__17157_19207 = G__19224;
continue;
}
} else {
}
}
break;
}

return React.DOM.param.apply(null,a__15358__auto__);
};
var param = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19225__i = 0, G__19225__a = new Array(arguments.length -  0);
while (G__19225__i < G__19225__a.length) {G__19225__a[G__19225__i] = arguments[G__19225__i + 0]; ++G__19225__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19225__a,0);
} 
return param__delegate.call(this,args__15357__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__19226){
var args__15357__auto__ = cljs.core.seq(arglist__19226);
return param__delegate(args__15357__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17162_19227 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17163_19228 = null;
var count__17164_19229 = (0);
var i__17165_19230 = (0);
while(true){
if((i__17165_19230 < count__17164_19229)){
var arg__15359__auto___19231 = cljs.core._nth.call(null,chunk__17163_19228,i__17165_19230);
a__15358__auto__.push(arg__15359__auto___19231);

var G__19232 = seq__17162_19227;
var G__19233 = chunk__17163_19228;
var G__19234 = count__17164_19229;
var G__19235 = (i__17165_19230 + (1));
seq__17162_19227 = G__19232;
chunk__17163_19228 = G__19233;
count__17164_19229 = G__19234;
i__17165_19230 = G__19235;
continue;
} else {
var temp__4126__auto___19236 = cljs.core.seq.call(null,seq__17162_19227);
if(temp__4126__auto___19236){
var seq__17162_19237__$1 = temp__4126__auto___19236;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17162_19237__$1)){
var c__4519__auto___19238 = cljs.core.chunk_first.call(null,seq__17162_19237__$1);
var G__19239 = cljs.core.chunk_rest.call(null,seq__17162_19237__$1);
var G__19240 = c__4519__auto___19238;
var G__19241 = cljs.core.count.call(null,c__4519__auto___19238);
var G__19242 = (0);
seq__17162_19227 = G__19239;
chunk__17163_19228 = G__19240;
count__17164_19229 = G__19241;
i__17165_19230 = G__19242;
continue;
} else {
var arg__15359__auto___19243 = cljs.core.first.call(null,seq__17162_19237__$1);
a__15358__auto__.push(arg__15359__auto___19243);

var G__19244 = cljs.core.next.call(null,seq__17162_19237__$1);
var G__19245 = null;
var G__19246 = (0);
var G__19247 = (0);
seq__17162_19227 = G__19244;
chunk__17163_19228 = G__19245;
count__17164_19229 = G__19246;
i__17165_19230 = G__19247;
continue;
}
} else {
}
}
break;
}

return React.DOM.pre.apply(null,a__15358__auto__);
};
var pre = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19248__i = 0, G__19248__a = new Array(arguments.length -  0);
while (G__19248__i < G__19248__a.length) {G__19248__a[G__19248__i] = arguments[G__19248__i + 0]; ++G__19248__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19248__a,0);
} 
return pre__delegate.call(this,args__15357__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__19249){
var args__15357__auto__ = cljs.core.seq(arglist__19249);
return pre__delegate(args__15357__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17170_19250 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17171_19251 = null;
var count__17172_19252 = (0);
var i__17173_19253 = (0);
while(true){
if((i__17173_19253 < count__17172_19252)){
var arg__15359__auto___19254 = cljs.core._nth.call(null,chunk__17171_19251,i__17173_19253);
a__15358__auto__.push(arg__15359__auto___19254);

var G__19255 = seq__17170_19250;
var G__19256 = chunk__17171_19251;
var G__19257 = count__17172_19252;
var G__19258 = (i__17173_19253 + (1));
seq__17170_19250 = G__19255;
chunk__17171_19251 = G__19256;
count__17172_19252 = G__19257;
i__17173_19253 = G__19258;
continue;
} else {
var temp__4126__auto___19259 = cljs.core.seq.call(null,seq__17170_19250);
if(temp__4126__auto___19259){
var seq__17170_19260__$1 = temp__4126__auto___19259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17170_19260__$1)){
var c__4519__auto___19261 = cljs.core.chunk_first.call(null,seq__17170_19260__$1);
var G__19262 = cljs.core.chunk_rest.call(null,seq__17170_19260__$1);
var G__19263 = c__4519__auto___19261;
var G__19264 = cljs.core.count.call(null,c__4519__auto___19261);
var G__19265 = (0);
seq__17170_19250 = G__19262;
chunk__17171_19251 = G__19263;
count__17172_19252 = G__19264;
i__17173_19253 = G__19265;
continue;
} else {
var arg__15359__auto___19266 = cljs.core.first.call(null,seq__17170_19260__$1);
a__15358__auto__.push(arg__15359__auto___19266);

var G__19267 = cljs.core.next.call(null,seq__17170_19260__$1);
var G__19268 = null;
var G__19269 = (0);
var G__19270 = (0);
seq__17170_19250 = G__19267;
chunk__17171_19251 = G__19268;
count__17172_19252 = G__19269;
i__17173_19253 = G__19270;
continue;
}
} else {
}
}
break;
}

return React.DOM.progress.apply(null,a__15358__auto__);
};
var progress = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19271__i = 0, G__19271__a = new Array(arguments.length -  0);
while (G__19271__i < G__19271__a.length) {G__19271__a[G__19271__i] = arguments[G__19271__i + 0]; ++G__19271__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19271__a,0);
} 
return progress__delegate.call(this,args__15357__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__19272){
var args__15357__auto__ = cljs.core.seq(arglist__19272);
return progress__delegate(args__15357__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17178_19273 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17179_19274 = null;
var count__17180_19275 = (0);
var i__17181_19276 = (0);
while(true){
if((i__17181_19276 < count__17180_19275)){
var arg__15359__auto___19277 = cljs.core._nth.call(null,chunk__17179_19274,i__17181_19276);
a__15358__auto__.push(arg__15359__auto___19277);

var G__19278 = seq__17178_19273;
var G__19279 = chunk__17179_19274;
var G__19280 = count__17180_19275;
var G__19281 = (i__17181_19276 + (1));
seq__17178_19273 = G__19278;
chunk__17179_19274 = G__19279;
count__17180_19275 = G__19280;
i__17181_19276 = G__19281;
continue;
} else {
var temp__4126__auto___19282 = cljs.core.seq.call(null,seq__17178_19273);
if(temp__4126__auto___19282){
var seq__17178_19283__$1 = temp__4126__auto___19282;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17178_19283__$1)){
var c__4519__auto___19284 = cljs.core.chunk_first.call(null,seq__17178_19283__$1);
var G__19285 = cljs.core.chunk_rest.call(null,seq__17178_19283__$1);
var G__19286 = c__4519__auto___19284;
var G__19287 = cljs.core.count.call(null,c__4519__auto___19284);
var G__19288 = (0);
seq__17178_19273 = G__19285;
chunk__17179_19274 = G__19286;
count__17180_19275 = G__19287;
i__17181_19276 = G__19288;
continue;
} else {
var arg__15359__auto___19289 = cljs.core.first.call(null,seq__17178_19283__$1);
a__15358__auto__.push(arg__15359__auto___19289);

var G__19290 = cljs.core.next.call(null,seq__17178_19283__$1);
var G__19291 = null;
var G__19292 = (0);
var G__19293 = (0);
seq__17178_19273 = G__19290;
chunk__17179_19274 = G__19291;
count__17180_19275 = G__19292;
i__17181_19276 = G__19293;
continue;
}
} else {
}
}
break;
}

return React.DOM.q.apply(null,a__15358__auto__);
};
var q = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19294__i = 0, G__19294__a = new Array(arguments.length -  0);
while (G__19294__i < G__19294__a.length) {G__19294__a[G__19294__i] = arguments[G__19294__i + 0]; ++G__19294__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19294__a,0);
} 
return q__delegate.call(this,args__15357__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__19295){
var args__15357__auto__ = cljs.core.seq(arglist__19295);
return q__delegate(args__15357__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17186_19296 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17187_19297 = null;
var count__17188_19298 = (0);
var i__17189_19299 = (0);
while(true){
if((i__17189_19299 < count__17188_19298)){
var arg__15359__auto___19300 = cljs.core._nth.call(null,chunk__17187_19297,i__17189_19299);
a__15358__auto__.push(arg__15359__auto___19300);

var G__19301 = seq__17186_19296;
var G__19302 = chunk__17187_19297;
var G__19303 = count__17188_19298;
var G__19304 = (i__17189_19299 + (1));
seq__17186_19296 = G__19301;
chunk__17187_19297 = G__19302;
count__17188_19298 = G__19303;
i__17189_19299 = G__19304;
continue;
} else {
var temp__4126__auto___19305 = cljs.core.seq.call(null,seq__17186_19296);
if(temp__4126__auto___19305){
var seq__17186_19306__$1 = temp__4126__auto___19305;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17186_19306__$1)){
var c__4519__auto___19307 = cljs.core.chunk_first.call(null,seq__17186_19306__$1);
var G__19308 = cljs.core.chunk_rest.call(null,seq__17186_19306__$1);
var G__19309 = c__4519__auto___19307;
var G__19310 = cljs.core.count.call(null,c__4519__auto___19307);
var G__19311 = (0);
seq__17186_19296 = G__19308;
chunk__17187_19297 = G__19309;
count__17188_19298 = G__19310;
i__17189_19299 = G__19311;
continue;
} else {
var arg__15359__auto___19312 = cljs.core.first.call(null,seq__17186_19306__$1);
a__15358__auto__.push(arg__15359__auto___19312);

var G__19313 = cljs.core.next.call(null,seq__17186_19306__$1);
var G__19314 = null;
var G__19315 = (0);
var G__19316 = (0);
seq__17186_19296 = G__19313;
chunk__17187_19297 = G__19314;
count__17188_19298 = G__19315;
i__17189_19299 = G__19316;
continue;
}
} else {
}
}
break;
}

return React.DOM.rp.apply(null,a__15358__auto__);
};
var rp = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19317__i = 0, G__19317__a = new Array(arguments.length -  0);
while (G__19317__i < G__19317__a.length) {G__19317__a[G__19317__i] = arguments[G__19317__i + 0]; ++G__19317__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19317__a,0);
} 
return rp__delegate.call(this,args__15357__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__19318){
var args__15357__auto__ = cljs.core.seq(arglist__19318);
return rp__delegate(args__15357__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17194_19319 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17195_19320 = null;
var count__17196_19321 = (0);
var i__17197_19322 = (0);
while(true){
if((i__17197_19322 < count__17196_19321)){
var arg__15359__auto___19323 = cljs.core._nth.call(null,chunk__17195_19320,i__17197_19322);
a__15358__auto__.push(arg__15359__auto___19323);

var G__19324 = seq__17194_19319;
var G__19325 = chunk__17195_19320;
var G__19326 = count__17196_19321;
var G__19327 = (i__17197_19322 + (1));
seq__17194_19319 = G__19324;
chunk__17195_19320 = G__19325;
count__17196_19321 = G__19326;
i__17197_19322 = G__19327;
continue;
} else {
var temp__4126__auto___19328 = cljs.core.seq.call(null,seq__17194_19319);
if(temp__4126__auto___19328){
var seq__17194_19329__$1 = temp__4126__auto___19328;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17194_19329__$1)){
var c__4519__auto___19330 = cljs.core.chunk_first.call(null,seq__17194_19329__$1);
var G__19331 = cljs.core.chunk_rest.call(null,seq__17194_19329__$1);
var G__19332 = c__4519__auto___19330;
var G__19333 = cljs.core.count.call(null,c__4519__auto___19330);
var G__19334 = (0);
seq__17194_19319 = G__19331;
chunk__17195_19320 = G__19332;
count__17196_19321 = G__19333;
i__17197_19322 = G__19334;
continue;
} else {
var arg__15359__auto___19335 = cljs.core.first.call(null,seq__17194_19329__$1);
a__15358__auto__.push(arg__15359__auto___19335);

var G__19336 = cljs.core.next.call(null,seq__17194_19329__$1);
var G__19337 = null;
var G__19338 = (0);
var G__19339 = (0);
seq__17194_19319 = G__19336;
chunk__17195_19320 = G__19337;
count__17196_19321 = G__19338;
i__17197_19322 = G__19339;
continue;
}
} else {
}
}
break;
}

return React.DOM.rt.apply(null,a__15358__auto__);
};
var rt = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19340__i = 0, G__19340__a = new Array(arguments.length -  0);
while (G__19340__i < G__19340__a.length) {G__19340__a[G__19340__i] = arguments[G__19340__i + 0]; ++G__19340__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19340__a,0);
} 
return rt__delegate.call(this,args__15357__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__19341){
var args__15357__auto__ = cljs.core.seq(arglist__19341);
return rt__delegate(args__15357__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17202_19342 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17203_19343 = null;
var count__17204_19344 = (0);
var i__17205_19345 = (0);
while(true){
if((i__17205_19345 < count__17204_19344)){
var arg__15359__auto___19346 = cljs.core._nth.call(null,chunk__17203_19343,i__17205_19345);
a__15358__auto__.push(arg__15359__auto___19346);

var G__19347 = seq__17202_19342;
var G__19348 = chunk__17203_19343;
var G__19349 = count__17204_19344;
var G__19350 = (i__17205_19345 + (1));
seq__17202_19342 = G__19347;
chunk__17203_19343 = G__19348;
count__17204_19344 = G__19349;
i__17205_19345 = G__19350;
continue;
} else {
var temp__4126__auto___19351 = cljs.core.seq.call(null,seq__17202_19342);
if(temp__4126__auto___19351){
var seq__17202_19352__$1 = temp__4126__auto___19351;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17202_19352__$1)){
var c__4519__auto___19353 = cljs.core.chunk_first.call(null,seq__17202_19352__$1);
var G__19354 = cljs.core.chunk_rest.call(null,seq__17202_19352__$1);
var G__19355 = c__4519__auto___19353;
var G__19356 = cljs.core.count.call(null,c__4519__auto___19353);
var G__19357 = (0);
seq__17202_19342 = G__19354;
chunk__17203_19343 = G__19355;
count__17204_19344 = G__19356;
i__17205_19345 = G__19357;
continue;
} else {
var arg__15359__auto___19358 = cljs.core.first.call(null,seq__17202_19352__$1);
a__15358__auto__.push(arg__15359__auto___19358);

var G__19359 = cljs.core.next.call(null,seq__17202_19352__$1);
var G__19360 = null;
var G__19361 = (0);
var G__19362 = (0);
seq__17202_19342 = G__19359;
chunk__17203_19343 = G__19360;
count__17204_19344 = G__19361;
i__17205_19345 = G__19362;
continue;
}
} else {
}
}
break;
}

return React.DOM.ruby.apply(null,a__15358__auto__);
};
var ruby = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19363__i = 0, G__19363__a = new Array(arguments.length -  0);
while (G__19363__i < G__19363__a.length) {G__19363__a[G__19363__i] = arguments[G__19363__i + 0]; ++G__19363__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19363__a,0);
} 
return ruby__delegate.call(this,args__15357__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__19364){
var args__15357__auto__ = cljs.core.seq(arglist__19364);
return ruby__delegate(args__15357__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17210_19365 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17211_19366 = null;
var count__17212_19367 = (0);
var i__17213_19368 = (0);
while(true){
if((i__17213_19368 < count__17212_19367)){
var arg__15359__auto___19369 = cljs.core._nth.call(null,chunk__17211_19366,i__17213_19368);
a__15358__auto__.push(arg__15359__auto___19369);

var G__19370 = seq__17210_19365;
var G__19371 = chunk__17211_19366;
var G__19372 = count__17212_19367;
var G__19373 = (i__17213_19368 + (1));
seq__17210_19365 = G__19370;
chunk__17211_19366 = G__19371;
count__17212_19367 = G__19372;
i__17213_19368 = G__19373;
continue;
} else {
var temp__4126__auto___19374 = cljs.core.seq.call(null,seq__17210_19365);
if(temp__4126__auto___19374){
var seq__17210_19375__$1 = temp__4126__auto___19374;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17210_19375__$1)){
var c__4519__auto___19376 = cljs.core.chunk_first.call(null,seq__17210_19375__$1);
var G__19377 = cljs.core.chunk_rest.call(null,seq__17210_19375__$1);
var G__19378 = c__4519__auto___19376;
var G__19379 = cljs.core.count.call(null,c__4519__auto___19376);
var G__19380 = (0);
seq__17210_19365 = G__19377;
chunk__17211_19366 = G__19378;
count__17212_19367 = G__19379;
i__17213_19368 = G__19380;
continue;
} else {
var arg__15359__auto___19381 = cljs.core.first.call(null,seq__17210_19375__$1);
a__15358__auto__.push(arg__15359__auto___19381);

var G__19382 = cljs.core.next.call(null,seq__17210_19375__$1);
var G__19383 = null;
var G__19384 = (0);
var G__19385 = (0);
seq__17210_19365 = G__19382;
chunk__17211_19366 = G__19383;
count__17212_19367 = G__19384;
i__17213_19368 = G__19385;
continue;
}
} else {
}
}
break;
}

return React.DOM.s.apply(null,a__15358__auto__);
};
var s = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19386__i = 0, G__19386__a = new Array(arguments.length -  0);
while (G__19386__i < G__19386__a.length) {G__19386__a[G__19386__i] = arguments[G__19386__i + 0]; ++G__19386__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19386__a,0);
} 
return s__delegate.call(this,args__15357__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__19387){
var args__15357__auto__ = cljs.core.seq(arglist__19387);
return s__delegate(args__15357__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17218_19388 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17219_19389 = null;
var count__17220_19390 = (0);
var i__17221_19391 = (0);
while(true){
if((i__17221_19391 < count__17220_19390)){
var arg__15359__auto___19392 = cljs.core._nth.call(null,chunk__17219_19389,i__17221_19391);
a__15358__auto__.push(arg__15359__auto___19392);

var G__19393 = seq__17218_19388;
var G__19394 = chunk__17219_19389;
var G__19395 = count__17220_19390;
var G__19396 = (i__17221_19391 + (1));
seq__17218_19388 = G__19393;
chunk__17219_19389 = G__19394;
count__17220_19390 = G__19395;
i__17221_19391 = G__19396;
continue;
} else {
var temp__4126__auto___19397 = cljs.core.seq.call(null,seq__17218_19388);
if(temp__4126__auto___19397){
var seq__17218_19398__$1 = temp__4126__auto___19397;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17218_19398__$1)){
var c__4519__auto___19399 = cljs.core.chunk_first.call(null,seq__17218_19398__$1);
var G__19400 = cljs.core.chunk_rest.call(null,seq__17218_19398__$1);
var G__19401 = c__4519__auto___19399;
var G__19402 = cljs.core.count.call(null,c__4519__auto___19399);
var G__19403 = (0);
seq__17218_19388 = G__19400;
chunk__17219_19389 = G__19401;
count__17220_19390 = G__19402;
i__17221_19391 = G__19403;
continue;
} else {
var arg__15359__auto___19404 = cljs.core.first.call(null,seq__17218_19398__$1);
a__15358__auto__.push(arg__15359__auto___19404);

var G__19405 = cljs.core.next.call(null,seq__17218_19398__$1);
var G__19406 = null;
var G__19407 = (0);
var G__19408 = (0);
seq__17218_19388 = G__19405;
chunk__17219_19389 = G__19406;
count__17220_19390 = G__19407;
i__17221_19391 = G__19408;
continue;
}
} else {
}
}
break;
}

return React.DOM.samp.apply(null,a__15358__auto__);
};
var samp = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19409__i = 0, G__19409__a = new Array(arguments.length -  0);
while (G__19409__i < G__19409__a.length) {G__19409__a[G__19409__i] = arguments[G__19409__i + 0]; ++G__19409__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19409__a,0);
} 
return samp__delegate.call(this,args__15357__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__19410){
var args__15357__auto__ = cljs.core.seq(arglist__19410);
return samp__delegate(args__15357__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17226_19411 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17227_19412 = null;
var count__17228_19413 = (0);
var i__17229_19414 = (0);
while(true){
if((i__17229_19414 < count__17228_19413)){
var arg__15359__auto___19415 = cljs.core._nth.call(null,chunk__17227_19412,i__17229_19414);
a__15358__auto__.push(arg__15359__auto___19415);

var G__19416 = seq__17226_19411;
var G__19417 = chunk__17227_19412;
var G__19418 = count__17228_19413;
var G__19419 = (i__17229_19414 + (1));
seq__17226_19411 = G__19416;
chunk__17227_19412 = G__19417;
count__17228_19413 = G__19418;
i__17229_19414 = G__19419;
continue;
} else {
var temp__4126__auto___19420 = cljs.core.seq.call(null,seq__17226_19411);
if(temp__4126__auto___19420){
var seq__17226_19421__$1 = temp__4126__auto___19420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17226_19421__$1)){
var c__4519__auto___19422 = cljs.core.chunk_first.call(null,seq__17226_19421__$1);
var G__19423 = cljs.core.chunk_rest.call(null,seq__17226_19421__$1);
var G__19424 = c__4519__auto___19422;
var G__19425 = cljs.core.count.call(null,c__4519__auto___19422);
var G__19426 = (0);
seq__17226_19411 = G__19423;
chunk__17227_19412 = G__19424;
count__17228_19413 = G__19425;
i__17229_19414 = G__19426;
continue;
} else {
var arg__15359__auto___19427 = cljs.core.first.call(null,seq__17226_19421__$1);
a__15358__auto__.push(arg__15359__auto___19427);

var G__19428 = cljs.core.next.call(null,seq__17226_19421__$1);
var G__19429 = null;
var G__19430 = (0);
var G__19431 = (0);
seq__17226_19411 = G__19428;
chunk__17227_19412 = G__19429;
count__17228_19413 = G__19430;
i__17229_19414 = G__19431;
continue;
}
} else {
}
}
break;
}

return React.DOM.script.apply(null,a__15358__auto__);
};
var script = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19432__i = 0, G__19432__a = new Array(arguments.length -  0);
while (G__19432__i < G__19432__a.length) {G__19432__a[G__19432__i] = arguments[G__19432__i + 0]; ++G__19432__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19432__a,0);
} 
return script__delegate.call(this,args__15357__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__19433){
var args__15357__auto__ = cljs.core.seq(arglist__19433);
return script__delegate(args__15357__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17234_19434 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17235_19435 = null;
var count__17236_19436 = (0);
var i__17237_19437 = (0);
while(true){
if((i__17237_19437 < count__17236_19436)){
var arg__15359__auto___19438 = cljs.core._nth.call(null,chunk__17235_19435,i__17237_19437);
a__15358__auto__.push(arg__15359__auto___19438);

var G__19439 = seq__17234_19434;
var G__19440 = chunk__17235_19435;
var G__19441 = count__17236_19436;
var G__19442 = (i__17237_19437 + (1));
seq__17234_19434 = G__19439;
chunk__17235_19435 = G__19440;
count__17236_19436 = G__19441;
i__17237_19437 = G__19442;
continue;
} else {
var temp__4126__auto___19443 = cljs.core.seq.call(null,seq__17234_19434);
if(temp__4126__auto___19443){
var seq__17234_19444__$1 = temp__4126__auto___19443;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17234_19444__$1)){
var c__4519__auto___19445 = cljs.core.chunk_first.call(null,seq__17234_19444__$1);
var G__19446 = cljs.core.chunk_rest.call(null,seq__17234_19444__$1);
var G__19447 = c__4519__auto___19445;
var G__19448 = cljs.core.count.call(null,c__4519__auto___19445);
var G__19449 = (0);
seq__17234_19434 = G__19446;
chunk__17235_19435 = G__19447;
count__17236_19436 = G__19448;
i__17237_19437 = G__19449;
continue;
} else {
var arg__15359__auto___19450 = cljs.core.first.call(null,seq__17234_19444__$1);
a__15358__auto__.push(arg__15359__auto___19450);

var G__19451 = cljs.core.next.call(null,seq__17234_19444__$1);
var G__19452 = null;
var G__19453 = (0);
var G__19454 = (0);
seq__17234_19434 = G__19451;
chunk__17235_19435 = G__19452;
count__17236_19436 = G__19453;
i__17237_19437 = G__19454;
continue;
}
} else {
}
}
break;
}

return React.DOM.section.apply(null,a__15358__auto__);
};
var section = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19455__i = 0, G__19455__a = new Array(arguments.length -  0);
while (G__19455__i < G__19455__a.length) {G__19455__a[G__19455__i] = arguments[G__19455__i + 0]; ++G__19455__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19455__a,0);
} 
return section__delegate.call(this,args__15357__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__19456){
var args__15357__auto__ = cljs.core.seq(arglist__19456);
return section__delegate(args__15357__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17242_19457 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17243_19458 = null;
var count__17244_19459 = (0);
var i__17245_19460 = (0);
while(true){
if((i__17245_19460 < count__17244_19459)){
var arg__15359__auto___19461 = cljs.core._nth.call(null,chunk__17243_19458,i__17245_19460);
a__15358__auto__.push(arg__15359__auto___19461);

var G__19462 = seq__17242_19457;
var G__19463 = chunk__17243_19458;
var G__19464 = count__17244_19459;
var G__19465 = (i__17245_19460 + (1));
seq__17242_19457 = G__19462;
chunk__17243_19458 = G__19463;
count__17244_19459 = G__19464;
i__17245_19460 = G__19465;
continue;
} else {
var temp__4126__auto___19466 = cljs.core.seq.call(null,seq__17242_19457);
if(temp__4126__auto___19466){
var seq__17242_19467__$1 = temp__4126__auto___19466;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17242_19467__$1)){
var c__4519__auto___19468 = cljs.core.chunk_first.call(null,seq__17242_19467__$1);
var G__19469 = cljs.core.chunk_rest.call(null,seq__17242_19467__$1);
var G__19470 = c__4519__auto___19468;
var G__19471 = cljs.core.count.call(null,c__4519__auto___19468);
var G__19472 = (0);
seq__17242_19457 = G__19469;
chunk__17243_19458 = G__19470;
count__17244_19459 = G__19471;
i__17245_19460 = G__19472;
continue;
} else {
var arg__15359__auto___19473 = cljs.core.first.call(null,seq__17242_19467__$1);
a__15358__auto__.push(arg__15359__auto___19473);

var G__19474 = cljs.core.next.call(null,seq__17242_19467__$1);
var G__19475 = null;
var G__19476 = (0);
var G__19477 = (0);
seq__17242_19457 = G__19474;
chunk__17243_19458 = G__19475;
count__17244_19459 = G__19476;
i__17245_19460 = G__19477;
continue;
}
} else {
}
}
break;
}

return React.DOM.select.apply(null,a__15358__auto__);
};
var select = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19478__i = 0, G__19478__a = new Array(arguments.length -  0);
while (G__19478__i < G__19478__a.length) {G__19478__a[G__19478__i] = arguments[G__19478__i + 0]; ++G__19478__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19478__a,0);
} 
return select__delegate.call(this,args__15357__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__19479){
var args__15357__auto__ = cljs.core.seq(arglist__19479);
return select__delegate(args__15357__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17250_19480 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17251_19481 = null;
var count__17252_19482 = (0);
var i__17253_19483 = (0);
while(true){
if((i__17253_19483 < count__17252_19482)){
var arg__15359__auto___19484 = cljs.core._nth.call(null,chunk__17251_19481,i__17253_19483);
a__15358__auto__.push(arg__15359__auto___19484);

var G__19485 = seq__17250_19480;
var G__19486 = chunk__17251_19481;
var G__19487 = count__17252_19482;
var G__19488 = (i__17253_19483 + (1));
seq__17250_19480 = G__19485;
chunk__17251_19481 = G__19486;
count__17252_19482 = G__19487;
i__17253_19483 = G__19488;
continue;
} else {
var temp__4126__auto___19489 = cljs.core.seq.call(null,seq__17250_19480);
if(temp__4126__auto___19489){
var seq__17250_19490__$1 = temp__4126__auto___19489;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17250_19490__$1)){
var c__4519__auto___19491 = cljs.core.chunk_first.call(null,seq__17250_19490__$1);
var G__19492 = cljs.core.chunk_rest.call(null,seq__17250_19490__$1);
var G__19493 = c__4519__auto___19491;
var G__19494 = cljs.core.count.call(null,c__4519__auto___19491);
var G__19495 = (0);
seq__17250_19480 = G__19492;
chunk__17251_19481 = G__19493;
count__17252_19482 = G__19494;
i__17253_19483 = G__19495;
continue;
} else {
var arg__15359__auto___19496 = cljs.core.first.call(null,seq__17250_19490__$1);
a__15358__auto__.push(arg__15359__auto___19496);

var G__19497 = cljs.core.next.call(null,seq__17250_19490__$1);
var G__19498 = null;
var G__19499 = (0);
var G__19500 = (0);
seq__17250_19480 = G__19497;
chunk__17251_19481 = G__19498;
count__17252_19482 = G__19499;
i__17253_19483 = G__19500;
continue;
}
} else {
}
}
break;
}

return React.DOM.small.apply(null,a__15358__auto__);
};
var small = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19501__i = 0, G__19501__a = new Array(arguments.length -  0);
while (G__19501__i < G__19501__a.length) {G__19501__a[G__19501__i] = arguments[G__19501__i + 0]; ++G__19501__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19501__a,0);
} 
return small__delegate.call(this,args__15357__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__19502){
var args__15357__auto__ = cljs.core.seq(arglist__19502);
return small__delegate(args__15357__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17258_19503 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17259_19504 = null;
var count__17260_19505 = (0);
var i__17261_19506 = (0);
while(true){
if((i__17261_19506 < count__17260_19505)){
var arg__15359__auto___19507 = cljs.core._nth.call(null,chunk__17259_19504,i__17261_19506);
a__15358__auto__.push(arg__15359__auto___19507);

var G__19508 = seq__17258_19503;
var G__19509 = chunk__17259_19504;
var G__19510 = count__17260_19505;
var G__19511 = (i__17261_19506 + (1));
seq__17258_19503 = G__19508;
chunk__17259_19504 = G__19509;
count__17260_19505 = G__19510;
i__17261_19506 = G__19511;
continue;
} else {
var temp__4126__auto___19512 = cljs.core.seq.call(null,seq__17258_19503);
if(temp__4126__auto___19512){
var seq__17258_19513__$1 = temp__4126__auto___19512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17258_19513__$1)){
var c__4519__auto___19514 = cljs.core.chunk_first.call(null,seq__17258_19513__$1);
var G__19515 = cljs.core.chunk_rest.call(null,seq__17258_19513__$1);
var G__19516 = c__4519__auto___19514;
var G__19517 = cljs.core.count.call(null,c__4519__auto___19514);
var G__19518 = (0);
seq__17258_19503 = G__19515;
chunk__17259_19504 = G__19516;
count__17260_19505 = G__19517;
i__17261_19506 = G__19518;
continue;
} else {
var arg__15359__auto___19519 = cljs.core.first.call(null,seq__17258_19513__$1);
a__15358__auto__.push(arg__15359__auto___19519);

var G__19520 = cljs.core.next.call(null,seq__17258_19513__$1);
var G__19521 = null;
var G__19522 = (0);
var G__19523 = (0);
seq__17258_19503 = G__19520;
chunk__17259_19504 = G__19521;
count__17260_19505 = G__19522;
i__17261_19506 = G__19523;
continue;
}
} else {
}
}
break;
}

return React.DOM.source.apply(null,a__15358__auto__);
};
var source = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19524__i = 0, G__19524__a = new Array(arguments.length -  0);
while (G__19524__i < G__19524__a.length) {G__19524__a[G__19524__i] = arguments[G__19524__i + 0]; ++G__19524__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19524__a,0);
} 
return source__delegate.call(this,args__15357__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__19525){
var args__15357__auto__ = cljs.core.seq(arglist__19525);
return source__delegate(args__15357__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17266_19526 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17267_19527 = null;
var count__17268_19528 = (0);
var i__17269_19529 = (0);
while(true){
if((i__17269_19529 < count__17268_19528)){
var arg__15359__auto___19530 = cljs.core._nth.call(null,chunk__17267_19527,i__17269_19529);
a__15358__auto__.push(arg__15359__auto___19530);

var G__19531 = seq__17266_19526;
var G__19532 = chunk__17267_19527;
var G__19533 = count__17268_19528;
var G__19534 = (i__17269_19529 + (1));
seq__17266_19526 = G__19531;
chunk__17267_19527 = G__19532;
count__17268_19528 = G__19533;
i__17269_19529 = G__19534;
continue;
} else {
var temp__4126__auto___19535 = cljs.core.seq.call(null,seq__17266_19526);
if(temp__4126__auto___19535){
var seq__17266_19536__$1 = temp__4126__auto___19535;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17266_19536__$1)){
var c__4519__auto___19537 = cljs.core.chunk_first.call(null,seq__17266_19536__$1);
var G__19538 = cljs.core.chunk_rest.call(null,seq__17266_19536__$1);
var G__19539 = c__4519__auto___19537;
var G__19540 = cljs.core.count.call(null,c__4519__auto___19537);
var G__19541 = (0);
seq__17266_19526 = G__19538;
chunk__17267_19527 = G__19539;
count__17268_19528 = G__19540;
i__17269_19529 = G__19541;
continue;
} else {
var arg__15359__auto___19542 = cljs.core.first.call(null,seq__17266_19536__$1);
a__15358__auto__.push(arg__15359__auto___19542);

var G__19543 = cljs.core.next.call(null,seq__17266_19536__$1);
var G__19544 = null;
var G__19545 = (0);
var G__19546 = (0);
seq__17266_19526 = G__19543;
chunk__17267_19527 = G__19544;
count__17268_19528 = G__19545;
i__17269_19529 = G__19546;
continue;
}
} else {
}
}
break;
}

return React.DOM.span.apply(null,a__15358__auto__);
};
var span = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19547__i = 0, G__19547__a = new Array(arguments.length -  0);
while (G__19547__i < G__19547__a.length) {G__19547__a[G__19547__i] = arguments[G__19547__i + 0]; ++G__19547__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19547__a,0);
} 
return span__delegate.call(this,args__15357__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__19548){
var args__15357__auto__ = cljs.core.seq(arglist__19548);
return span__delegate(args__15357__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17274_19549 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17275_19550 = null;
var count__17276_19551 = (0);
var i__17277_19552 = (0);
while(true){
if((i__17277_19552 < count__17276_19551)){
var arg__15359__auto___19553 = cljs.core._nth.call(null,chunk__17275_19550,i__17277_19552);
a__15358__auto__.push(arg__15359__auto___19553);

var G__19554 = seq__17274_19549;
var G__19555 = chunk__17275_19550;
var G__19556 = count__17276_19551;
var G__19557 = (i__17277_19552 + (1));
seq__17274_19549 = G__19554;
chunk__17275_19550 = G__19555;
count__17276_19551 = G__19556;
i__17277_19552 = G__19557;
continue;
} else {
var temp__4126__auto___19558 = cljs.core.seq.call(null,seq__17274_19549);
if(temp__4126__auto___19558){
var seq__17274_19559__$1 = temp__4126__auto___19558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17274_19559__$1)){
var c__4519__auto___19560 = cljs.core.chunk_first.call(null,seq__17274_19559__$1);
var G__19561 = cljs.core.chunk_rest.call(null,seq__17274_19559__$1);
var G__19562 = c__4519__auto___19560;
var G__19563 = cljs.core.count.call(null,c__4519__auto___19560);
var G__19564 = (0);
seq__17274_19549 = G__19561;
chunk__17275_19550 = G__19562;
count__17276_19551 = G__19563;
i__17277_19552 = G__19564;
continue;
} else {
var arg__15359__auto___19565 = cljs.core.first.call(null,seq__17274_19559__$1);
a__15358__auto__.push(arg__15359__auto___19565);

var G__19566 = cljs.core.next.call(null,seq__17274_19559__$1);
var G__19567 = null;
var G__19568 = (0);
var G__19569 = (0);
seq__17274_19549 = G__19566;
chunk__17275_19550 = G__19567;
count__17276_19551 = G__19568;
i__17277_19552 = G__19569;
continue;
}
} else {
}
}
break;
}

return React.DOM.strong.apply(null,a__15358__auto__);
};
var strong = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19570__i = 0, G__19570__a = new Array(arguments.length -  0);
while (G__19570__i < G__19570__a.length) {G__19570__a[G__19570__i] = arguments[G__19570__i + 0]; ++G__19570__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19570__a,0);
} 
return strong__delegate.call(this,args__15357__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__19571){
var args__15357__auto__ = cljs.core.seq(arglist__19571);
return strong__delegate(args__15357__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17282_19572 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17283_19573 = null;
var count__17284_19574 = (0);
var i__17285_19575 = (0);
while(true){
if((i__17285_19575 < count__17284_19574)){
var arg__15359__auto___19576 = cljs.core._nth.call(null,chunk__17283_19573,i__17285_19575);
a__15358__auto__.push(arg__15359__auto___19576);

var G__19577 = seq__17282_19572;
var G__19578 = chunk__17283_19573;
var G__19579 = count__17284_19574;
var G__19580 = (i__17285_19575 + (1));
seq__17282_19572 = G__19577;
chunk__17283_19573 = G__19578;
count__17284_19574 = G__19579;
i__17285_19575 = G__19580;
continue;
} else {
var temp__4126__auto___19581 = cljs.core.seq.call(null,seq__17282_19572);
if(temp__4126__auto___19581){
var seq__17282_19582__$1 = temp__4126__auto___19581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17282_19582__$1)){
var c__4519__auto___19583 = cljs.core.chunk_first.call(null,seq__17282_19582__$1);
var G__19584 = cljs.core.chunk_rest.call(null,seq__17282_19582__$1);
var G__19585 = c__4519__auto___19583;
var G__19586 = cljs.core.count.call(null,c__4519__auto___19583);
var G__19587 = (0);
seq__17282_19572 = G__19584;
chunk__17283_19573 = G__19585;
count__17284_19574 = G__19586;
i__17285_19575 = G__19587;
continue;
} else {
var arg__15359__auto___19588 = cljs.core.first.call(null,seq__17282_19582__$1);
a__15358__auto__.push(arg__15359__auto___19588);

var G__19589 = cljs.core.next.call(null,seq__17282_19582__$1);
var G__19590 = null;
var G__19591 = (0);
var G__19592 = (0);
seq__17282_19572 = G__19589;
chunk__17283_19573 = G__19590;
count__17284_19574 = G__19591;
i__17285_19575 = G__19592;
continue;
}
} else {
}
}
break;
}

return React.DOM.style.apply(null,a__15358__auto__);
};
var style = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19593__i = 0, G__19593__a = new Array(arguments.length -  0);
while (G__19593__i < G__19593__a.length) {G__19593__a[G__19593__i] = arguments[G__19593__i + 0]; ++G__19593__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19593__a,0);
} 
return style__delegate.call(this,args__15357__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__19594){
var args__15357__auto__ = cljs.core.seq(arglist__19594);
return style__delegate(args__15357__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17290_19595 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17291_19596 = null;
var count__17292_19597 = (0);
var i__17293_19598 = (0);
while(true){
if((i__17293_19598 < count__17292_19597)){
var arg__15359__auto___19599 = cljs.core._nth.call(null,chunk__17291_19596,i__17293_19598);
a__15358__auto__.push(arg__15359__auto___19599);

var G__19600 = seq__17290_19595;
var G__19601 = chunk__17291_19596;
var G__19602 = count__17292_19597;
var G__19603 = (i__17293_19598 + (1));
seq__17290_19595 = G__19600;
chunk__17291_19596 = G__19601;
count__17292_19597 = G__19602;
i__17293_19598 = G__19603;
continue;
} else {
var temp__4126__auto___19604 = cljs.core.seq.call(null,seq__17290_19595);
if(temp__4126__auto___19604){
var seq__17290_19605__$1 = temp__4126__auto___19604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17290_19605__$1)){
var c__4519__auto___19606 = cljs.core.chunk_first.call(null,seq__17290_19605__$1);
var G__19607 = cljs.core.chunk_rest.call(null,seq__17290_19605__$1);
var G__19608 = c__4519__auto___19606;
var G__19609 = cljs.core.count.call(null,c__4519__auto___19606);
var G__19610 = (0);
seq__17290_19595 = G__19607;
chunk__17291_19596 = G__19608;
count__17292_19597 = G__19609;
i__17293_19598 = G__19610;
continue;
} else {
var arg__15359__auto___19611 = cljs.core.first.call(null,seq__17290_19605__$1);
a__15358__auto__.push(arg__15359__auto___19611);

var G__19612 = cljs.core.next.call(null,seq__17290_19605__$1);
var G__19613 = null;
var G__19614 = (0);
var G__19615 = (0);
seq__17290_19595 = G__19612;
chunk__17291_19596 = G__19613;
count__17292_19597 = G__19614;
i__17293_19598 = G__19615;
continue;
}
} else {
}
}
break;
}

return React.DOM.sub.apply(null,a__15358__auto__);
};
var sub = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19616__i = 0, G__19616__a = new Array(arguments.length -  0);
while (G__19616__i < G__19616__a.length) {G__19616__a[G__19616__i] = arguments[G__19616__i + 0]; ++G__19616__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19616__a,0);
} 
return sub__delegate.call(this,args__15357__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__19617){
var args__15357__auto__ = cljs.core.seq(arglist__19617);
return sub__delegate(args__15357__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17298_19618 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17299_19619 = null;
var count__17300_19620 = (0);
var i__17301_19621 = (0);
while(true){
if((i__17301_19621 < count__17300_19620)){
var arg__15359__auto___19622 = cljs.core._nth.call(null,chunk__17299_19619,i__17301_19621);
a__15358__auto__.push(arg__15359__auto___19622);

var G__19623 = seq__17298_19618;
var G__19624 = chunk__17299_19619;
var G__19625 = count__17300_19620;
var G__19626 = (i__17301_19621 + (1));
seq__17298_19618 = G__19623;
chunk__17299_19619 = G__19624;
count__17300_19620 = G__19625;
i__17301_19621 = G__19626;
continue;
} else {
var temp__4126__auto___19627 = cljs.core.seq.call(null,seq__17298_19618);
if(temp__4126__auto___19627){
var seq__17298_19628__$1 = temp__4126__auto___19627;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17298_19628__$1)){
var c__4519__auto___19629 = cljs.core.chunk_first.call(null,seq__17298_19628__$1);
var G__19630 = cljs.core.chunk_rest.call(null,seq__17298_19628__$1);
var G__19631 = c__4519__auto___19629;
var G__19632 = cljs.core.count.call(null,c__4519__auto___19629);
var G__19633 = (0);
seq__17298_19618 = G__19630;
chunk__17299_19619 = G__19631;
count__17300_19620 = G__19632;
i__17301_19621 = G__19633;
continue;
} else {
var arg__15359__auto___19634 = cljs.core.first.call(null,seq__17298_19628__$1);
a__15358__auto__.push(arg__15359__auto___19634);

var G__19635 = cljs.core.next.call(null,seq__17298_19628__$1);
var G__19636 = null;
var G__19637 = (0);
var G__19638 = (0);
seq__17298_19618 = G__19635;
chunk__17299_19619 = G__19636;
count__17300_19620 = G__19637;
i__17301_19621 = G__19638;
continue;
}
} else {
}
}
break;
}

return React.DOM.summary.apply(null,a__15358__auto__);
};
var summary = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19639__i = 0, G__19639__a = new Array(arguments.length -  0);
while (G__19639__i < G__19639__a.length) {G__19639__a[G__19639__i] = arguments[G__19639__i + 0]; ++G__19639__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19639__a,0);
} 
return summary__delegate.call(this,args__15357__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__19640){
var args__15357__auto__ = cljs.core.seq(arglist__19640);
return summary__delegate(args__15357__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17306_19641 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17307_19642 = null;
var count__17308_19643 = (0);
var i__17309_19644 = (0);
while(true){
if((i__17309_19644 < count__17308_19643)){
var arg__15359__auto___19645 = cljs.core._nth.call(null,chunk__17307_19642,i__17309_19644);
a__15358__auto__.push(arg__15359__auto___19645);

var G__19646 = seq__17306_19641;
var G__19647 = chunk__17307_19642;
var G__19648 = count__17308_19643;
var G__19649 = (i__17309_19644 + (1));
seq__17306_19641 = G__19646;
chunk__17307_19642 = G__19647;
count__17308_19643 = G__19648;
i__17309_19644 = G__19649;
continue;
} else {
var temp__4126__auto___19650 = cljs.core.seq.call(null,seq__17306_19641);
if(temp__4126__auto___19650){
var seq__17306_19651__$1 = temp__4126__auto___19650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17306_19651__$1)){
var c__4519__auto___19652 = cljs.core.chunk_first.call(null,seq__17306_19651__$1);
var G__19653 = cljs.core.chunk_rest.call(null,seq__17306_19651__$1);
var G__19654 = c__4519__auto___19652;
var G__19655 = cljs.core.count.call(null,c__4519__auto___19652);
var G__19656 = (0);
seq__17306_19641 = G__19653;
chunk__17307_19642 = G__19654;
count__17308_19643 = G__19655;
i__17309_19644 = G__19656;
continue;
} else {
var arg__15359__auto___19657 = cljs.core.first.call(null,seq__17306_19651__$1);
a__15358__auto__.push(arg__15359__auto___19657);

var G__19658 = cljs.core.next.call(null,seq__17306_19651__$1);
var G__19659 = null;
var G__19660 = (0);
var G__19661 = (0);
seq__17306_19641 = G__19658;
chunk__17307_19642 = G__19659;
count__17308_19643 = G__19660;
i__17309_19644 = G__19661;
continue;
}
} else {
}
}
break;
}

return React.DOM.sup.apply(null,a__15358__auto__);
};
var sup = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19662__i = 0, G__19662__a = new Array(arguments.length -  0);
while (G__19662__i < G__19662__a.length) {G__19662__a[G__19662__i] = arguments[G__19662__i + 0]; ++G__19662__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19662__a,0);
} 
return sup__delegate.call(this,args__15357__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__19663){
var args__15357__auto__ = cljs.core.seq(arglist__19663);
return sup__delegate(args__15357__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17314_19664 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17315_19665 = null;
var count__17316_19666 = (0);
var i__17317_19667 = (0);
while(true){
if((i__17317_19667 < count__17316_19666)){
var arg__15359__auto___19668 = cljs.core._nth.call(null,chunk__17315_19665,i__17317_19667);
a__15358__auto__.push(arg__15359__auto___19668);

var G__19669 = seq__17314_19664;
var G__19670 = chunk__17315_19665;
var G__19671 = count__17316_19666;
var G__19672 = (i__17317_19667 + (1));
seq__17314_19664 = G__19669;
chunk__17315_19665 = G__19670;
count__17316_19666 = G__19671;
i__17317_19667 = G__19672;
continue;
} else {
var temp__4126__auto___19673 = cljs.core.seq.call(null,seq__17314_19664);
if(temp__4126__auto___19673){
var seq__17314_19674__$1 = temp__4126__auto___19673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17314_19674__$1)){
var c__4519__auto___19675 = cljs.core.chunk_first.call(null,seq__17314_19674__$1);
var G__19676 = cljs.core.chunk_rest.call(null,seq__17314_19674__$1);
var G__19677 = c__4519__auto___19675;
var G__19678 = cljs.core.count.call(null,c__4519__auto___19675);
var G__19679 = (0);
seq__17314_19664 = G__19676;
chunk__17315_19665 = G__19677;
count__17316_19666 = G__19678;
i__17317_19667 = G__19679;
continue;
} else {
var arg__15359__auto___19680 = cljs.core.first.call(null,seq__17314_19674__$1);
a__15358__auto__.push(arg__15359__auto___19680);

var G__19681 = cljs.core.next.call(null,seq__17314_19674__$1);
var G__19682 = null;
var G__19683 = (0);
var G__19684 = (0);
seq__17314_19664 = G__19681;
chunk__17315_19665 = G__19682;
count__17316_19666 = G__19683;
i__17317_19667 = G__19684;
continue;
}
} else {
}
}
break;
}

return React.DOM.table.apply(null,a__15358__auto__);
};
var table = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19685__i = 0, G__19685__a = new Array(arguments.length -  0);
while (G__19685__i < G__19685__a.length) {G__19685__a[G__19685__i] = arguments[G__19685__i + 0]; ++G__19685__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19685__a,0);
} 
return table__delegate.call(this,args__15357__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__19686){
var args__15357__auto__ = cljs.core.seq(arglist__19686);
return table__delegate(args__15357__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17322_19687 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17323_19688 = null;
var count__17324_19689 = (0);
var i__17325_19690 = (0);
while(true){
if((i__17325_19690 < count__17324_19689)){
var arg__15359__auto___19691 = cljs.core._nth.call(null,chunk__17323_19688,i__17325_19690);
a__15358__auto__.push(arg__15359__auto___19691);

var G__19692 = seq__17322_19687;
var G__19693 = chunk__17323_19688;
var G__19694 = count__17324_19689;
var G__19695 = (i__17325_19690 + (1));
seq__17322_19687 = G__19692;
chunk__17323_19688 = G__19693;
count__17324_19689 = G__19694;
i__17325_19690 = G__19695;
continue;
} else {
var temp__4126__auto___19696 = cljs.core.seq.call(null,seq__17322_19687);
if(temp__4126__auto___19696){
var seq__17322_19697__$1 = temp__4126__auto___19696;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17322_19697__$1)){
var c__4519__auto___19698 = cljs.core.chunk_first.call(null,seq__17322_19697__$1);
var G__19699 = cljs.core.chunk_rest.call(null,seq__17322_19697__$1);
var G__19700 = c__4519__auto___19698;
var G__19701 = cljs.core.count.call(null,c__4519__auto___19698);
var G__19702 = (0);
seq__17322_19687 = G__19699;
chunk__17323_19688 = G__19700;
count__17324_19689 = G__19701;
i__17325_19690 = G__19702;
continue;
} else {
var arg__15359__auto___19703 = cljs.core.first.call(null,seq__17322_19697__$1);
a__15358__auto__.push(arg__15359__auto___19703);

var G__19704 = cljs.core.next.call(null,seq__17322_19697__$1);
var G__19705 = null;
var G__19706 = (0);
var G__19707 = (0);
seq__17322_19687 = G__19704;
chunk__17323_19688 = G__19705;
count__17324_19689 = G__19706;
i__17325_19690 = G__19707;
continue;
}
} else {
}
}
break;
}

return React.DOM.tbody.apply(null,a__15358__auto__);
};
var tbody = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19708__i = 0, G__19708__a = new Array(arguments.length -  0);
while (G__19708__i < G__19708__a.length) {G__19708__a[G__19708__i] = arguments[G__19708__i + 0]; ++G__19708__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19708__a,0);
} 
return tbody__delegate.call(this,args__15357__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__19709){
var args__15357__auto__ = cljs.core.seq(arglist__19709);
return tbody__delegate(args__15357__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17330_19710 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17331_19711 = null;
var count__17332_19712 = (0);
var i__17333_19713 = (0);
while(true){
if((i__17333_19713 < count__17332_19712)){
var arg__15359__auto___19714 = cljs.core._nth.call(null,chunk__17331_19711,i__17333_19713);
a__15358__auto__.push(arg__15359__auto___19714);

var G__19715 = seq__17330_19710;
var G__19716 = chunk__17331_19711;
var G__19717 = count__17332_19712;
var G__19718 = (i__17333_19713 + (1));
seq__17330_19710 = G__19715;
chunk__17331_19711 = G__19716;
count__17332_19712 = G__19717;
i__17333_19713 = G__19718;
continue;
} else {
var temp__4126__auto___19719 = cljs.core.seq.call(null,seq__17330_19710);
if(temp__4126__auto___19719){
var seq__17330_19720__$1 = temp__4126__auto___19719;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17330_19720__$1)){
var c__4519__auto___19721 = cljs.core.chunk_first.call(null,seq__17330_19720__$1);
var G__19722 = cljs.core.chunk_rest.call(null,seq__17330_19720__$1);
var G__19723 = c__4519__auto___19721;
var G__19724 = cljs.core.count.call(null,c__4519__auto___19721);
var G__19725 = (0);
seq__17330_19710 = G__19722;
chunk__17331_19711 = G__19723;
count__17332_19712 = G__19724;
i__17333_19713 = G__19725;
continue;
} else {
var arg__15359__auto___19726 = cljs.core.first.call(null,seq__17330_19720__$1);
a__15358__auto__.push(arg__15359__auto___19726);

var G__19727 = cljs.core.next.call(null,seq__17330_19720__$1);
var G__19728 = null;
var G__19729 = (0);
var G__19730 = (0);
seq__17330_19710 = G__19727;
chunk__17331_19711 = G__19728;
count__17332_19712 = G__19729;
i__17333_19713 = G__19730;
continue;
}
} else {
}
}
break;
}

return React.DOM.td.apply(null,a__15358__auto__);
};
var td = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19731__i = 0, G__19731__a = new Array(arguments.length -  0);
while (G__19731__i < G__19731__a.length) {G__19731__a[G__19731__i] = arguments[G__19731__i + 0]; ++G__19731__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19731__a,0);
} 
return td__delegate.call(this,args__15357__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__19732){
var args__15357__auto__ = cljs.core.seq(arglist__19732);
return td__delegate(args__15357__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17338_19733 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17339_19734 = null;
var count__17340_19735 = (0);
var i__17341_19736 = (0);
while(true){
if((i__17341_19736 < count__17340_19735)){
var arg__15359__auto___19737 = cljs.core._nth.call(null,chunk__17339_19734,i__17341_19736);
a__15358__auto__.push(arg__15359__auto___19737);

var G__19738 = seq__17338_19733;
var G__19739 = chunk__17339_19734;
var G__19740 = count__17340_19735;
var G__19741 = (i__17341_19736 + (1));
seq__17338_19733 = G__19738;
chunk__17339_19734 = G__19739;
count__17340_19735 = G__19740;
i__17341_19736 = G__19741;
continue;
} else {
var temp__4126__auto___19742 = cljs.core.seq.call(null,seq__17338_19733);
if(temp__4126__auto___19742){
var seq__17338_19743__$1 = temp__4126__auto___19742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17338_19743__$1)){
var c__4519__auto___19744 = cljs.core.chunk_first.call(null,seq__17338_19743__$1);
var G__19745 = cljs.core.chunk_rest.call(null,seq__17338_19743__$1);
var G__19746 = c__4519__auto___19744;
var G__19747 = cljs.core.count.call(null,c__4519__auto___19744);
var G__19748 = (0);
seq__17338_19733 = G__19745;
chunk__17339_19734 = G__19746;
count__17340_19735 = G__19747;
i__17341_19736 = G__19748;
continue;
} else {
var arg__15359__auto___19749 = cljs.core.first.call(null,seq__17338_19743__$1);
a__15358__auto__.push(arg__15359__auto___19749);

var G__19750 = cljs.core.next.call(null,seq__17338_19743__$1);
var G__19751 = null;
var G__19752 = (0);
var G__19753 = (0);
seq__17338_19733 = G__19750;
chunk__17339_19734 = G__19751;
count__17340_19735 = G__19752;
i__17341_19736 = G__19753;
continue;
}
} else {
}
}
break;
}

return React.DOM.textarea.apply(null,a__15358__auto__);
};
var textarea = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19754__i = 0, G__19754__a = new Array(arguments.length -  0);
while (G__19754__i < G__19754__a.length) {G__19754__a[G__19754__i] = arguments[G__19754__i + 0]; ++G__19754__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19754__a,0);
} 
return textarea__delegate.call(this,args__15357__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__19755){
var args__15357__auto__ = cljs.core.seq(arglist__19755);
return textarea__delegate(args__15357__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17346_19756 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17347_19757 = null;
var count__17348_19758 = (0);
var i__17349_19759 = (0);
while(true){
if((i__17349_19759 < count__17348_19758)){
var arg__15359__auto___19760 = cljs.core._nth.call(null,chunk__17347_19757,i__17349_19759);
a__15358__auto__.push(arg__15359__auto___19760);

var G__19761 = seq__17346_19756;
var G__19762 = chunk__17347_19757;
var G__19763 = count__17348_19758;
var G__19764 = (i__17349_19759 + (1));
seq__17346_19756 = G__19761;
chunk__17347_19757 = G__19762;
count__17348_19758 = G__19763;
i__17349_19759 = G__19764;
continue;
} else {
var temp__4126__auto___19765 = cljs.core.seq.call(null,seq__17346_19756);
if(temp__4126__auto___19765){
var seq__17346_19766__$1 = temp__4126__auto___19765;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17346_19766__$1)){
var c__4519__auto___19767 = cljs.core.chunk_first.call(null,seq__17346_19766__$1);
var G__19768 = cljs.core.chunk_rest.call(null,seq__17346_19766__$1);
var G__19769 = c__4519__auto___19767;
var G__19770 = cljs.core.count.call(null,c__4519__auto___19767);
var G__19771 = (0);
seq__17346_19756 = G__19768;
chunk__17347_19757 = G__19769;
count__17348_19758 = G__19770;
i__17349_19759 = G__19771;
continue;
} else {
var arg__15359__auto___19772 = cljs.core.first.call(null,seq__17346_19766__$1);
a__15358__auto__.push(arg__15359__auto___19772);

var G__19773 = cljs.core.next.call(null,seq__17346_19766__$1);
var G__19774 = null;
var G__19775 = (0);
var G__19776 = (0);
seq__17346_19756 = G__19773;
chunk__17347_19757 = G__19774;
count__17348_19758 = G__19775;
i__17349_19759 = G__19776;
continue;
}
} else {
}
}
break;
}

return React.DOM.tfoot.apply(null,a__15358__auto__);
};
var tfoot = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19777__i = 0, G__19777__a = new Array(arguments.length -  0);
while (G__19777__i < G__19777__a.length) {G__19777__a[G__19777__i] = arguments[G__19777__i + 0]; ++G__19777__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19777__a,0);
} 
return tfoot__delegate.call(this,args__15357__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__19778){
var args__15357__auto__ = cljs.core.seq(arglist__19778);
return tfoot__delegate(args__15357__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17354_19779 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17355_19780 = null;
var count__17356_19781 = (0);
var i__17357_19782 = (0);
while(true){
if((i__17357_19782 < count__17356_19781)){
var arg__15359__auto___19783 = cljs.core._nth.call(null,chunk__17355_19780,i__17357_19782);
a__15358__auto__.push(arg__15359__auto___19783);

var G__19784 = seq__17354_19779;
var G__19785 = chunk__17355_19780;
var G__19786 = count__17356_19781;
var G__19787 = (i__17357_19782 + (1));
seq__17354_19779 = G__19784;
chunk__17355_19780 = G__19785;
count__17356_19781 = G__19786;
i__17357_19782 = G__19787;
continue;
} else {
var temp__4126__auto___19788 = cljs.core.seq.call(null,seq__17354_19779);
if(temp__4126__auto___19788){
var seq__17354_19789__$1 = temp__4126__auto___19788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17354_19789__$1)){
var c__4519__auto___19790 = cljs.core.chunk_first.call(null,seq__17354_19789__$1);
var G__19791 = cljs.core.chunk_rest.call(null,seq__17354_19789__$1);
var G__19792 = c__4519__auto___19790;
var G__19793 = cljs.core.count.call(null,c__4519__auto___19790);
var G__19794 = (0);
seq__17354_19779 = G__19791;
chunk__17355_19780 = G__19792;
count__17356_19781 = G__19793;
i__17357_19782 = G__19794;
continue;
} else {
var arg__15359__auto___19795 = cljs.core.first.call(null,seq__17354_19789__$1);
a__15358__auto__.push(arg__15359__auto___19795);

var G__19796 = cljs.core.next.call(null,seq__17354_19789__$1);
var G__19797 = null;
var G__19798 = (0);
var G__19799 = (0);
seq__17354_19779 = G__19796;
chunk__17355_19780 = G__19797;
count__17356_19781 = G__19798;
i__17357_19782 = G__19799;
continue;
}
} else {
}
}
break;
}

return React.DOM.th.apply(null,a__15358__auto__);
};
var th = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19800__i = 0, G__19800__a = new Array(arguments.length -  0);
while (G__19800__i < G__19800__a.length) {G__19800__a[G__19800__i] = arguments[G__19800__i + 0]; ++G__19800__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19800__a,0);
} 
return th__delegate.call(this,args__15357__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__19801){
var args__15357__auto__ = cljs.core.seq(arglist__19801);
return th__delegate(args__15357__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17362_19802 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17363_19803 = null;
var count__17364_19804 = (0);
var i__17365_19805 = (0);
while(true){
if((i__17365_19805 < count__17364_19804)){
var arg__15359__auto___19806 = cljs.core._nth.call(null,chunk__17363_19803,i__17365_19805);
a__15358__auto__.push(arg__15359__auto___19806);

var G__19807 = seq__17362_19802;
var G__19808 = chunk__17363_19803;
var G__19809 = count__17364_19804;
var G__19810 = (i__17365_19805 + (1));
seq__17362_19802 = G__19807;
chunk__17363_19803 = G__19808;
count__17364_19804 = G__19809;
i__17365_19805 = G__19810;
continue;
} else {
var temp__4126__auto___19811 = cljs.core.seq.call(null,seq__17362_19802);
if(temp__4126__auto___19811){
var seq__17362_19812__$1 = temp__4126__auto___19811;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17362_19812__$1)){
var c__4519__auto___19813 = cljs.core.chunk_first.call(null,seq__17362_19812__$1);
var G__19814 = cljs.core.chunk_rest.call(null,seq__17362_19812__$1);
var G__19815 = c__4519__auto___19813;
var G__19816 = cljs.core.count.call(null,c__4519__auto___19813);
var G__19817 = (0);
seq__17362_19802 = G__19814;
chunk__17363_19803 = G__19815;
count__17364_19804 = G__19816;
i__17365_19805 = G__19817;
continue;
} else {
var arg__15359__auto___19818 = cljs.core.first.call(null,seq__17362_19812__$1);
a__15358__auto__.push(arg__15359__auto___19818);

var G__19819 = cljs.core.next.call(null,seq__17362_19812__$1);
var G__19820 = null;
var G__19821 = (0);
var G__19822 = (0);
seq__17362_19802 = G__19819;
chunk__17363_19803 = G__19820;
count__17364_19804 = G__19821;
i__17365_19805 = G__19822;
continue;
}
} else {
}
}
break;
}

return React.DOM.thead.apply(null,a__15358__auto__);
};
var thead = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19823__i = 0, G__19823__a = new Array(arguments.length -  0);
while (G__19823__i < G__19823__a.length) {G__19823__a[G__19823__i] = arguments[G__19823__i + 0]; ++G__19823__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19823__a,0);
} 
return thead__delegate.call(this,args__15357__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__19824){
var args__15357__auto__ = cljs.core.seq(arglist__19824);
return thead__delegate(args__15357__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17370_19825 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17371_19826 = null;
var count__17372_19827 = (0);
var i__17373_19828 = (0);
while(true){
if((i__17373_19828 < count__17372_19827)){
var arg__15359__auto___19829 = cljs.core._nth.call(null,chunk__17371_19826,i__17373_19828);
a__15358__auto__.push(arg__15359__auto___19829);

var G__19830 = seq__17370_19825;
var G__19831 = chunk__17371_19826;
var G__19832 = count__17372_19827;
var G__19833 = (i__17373_19828 + (1));
seq__17370_19825 = G__19830;
chunk__17371_19826 = G__19831;
count__17372_19827 = G__19832;
i__17373_19828 = G__19833;
continue;
} else {
var temp__4126__auto___19834 = cljs.core.seq.call(null,seq__17370_19825);
if(temp__4126__auto___19834){
var seq__17370_19835__$1 = temp__4126__auto___19834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17370_19835__$1)){
var c__4519__auto___19836 = cljs.core.chunk_first.call(null,seq__17370_19835__$1);
var G__19837 = cljs.core.chunk_rest.call(null,seq__17370_19835__$1);
var G__19838 = c__4519__auto___19836;
var G__19839 = cljs.core.count.call(null,c__4519__auto___19836);
var G__19840 = (0);
seq__17370_19825 = G__19837;
chunk__17371_19826 = G__19838;
count__17372_19827 = G__19839;
i__17373_19828 = G__19840;
continue;
} else {
var arg__15359__auto___19841 = cljs.core.first.call(null,seq__17370_19835__$1);
a__15358__auto__.push(arg__15359__auto___19841);

var G__19842 = cljs.core.next.call(null,seq__17370_19835__$1);
var G__19843 = null;
var G__19844 = (0);
var G__19845 = (0);
seq__17370_19825 = G__19842;
chunk__17371_19826 = G__19843;
count__17372_19827 = G__19844;
i__17373_19828 = G__19845;
continue;
}
} else {
}
}
break;
}

return React.DOM.time.apply(null,a__15358__auto__);
};
var time = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19846__i = 0, G__19846__a = new Array(arguments.length -  0);
while (G__19846__i < G__19846__a.length) {G__19846__a[G__19846__i] = arguments[G__19846__i + 0]; ++G__19846__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19846__a,0);
} 
return time__delegate.call(this,args__15357__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__19847){
var args__15357__auto__ = cljs.core.seq(arglist__19847);
return time__delegate(args__15357__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17378_19848 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17379_19849 = null;
var count__17380_19850 = (0);
var i__17381_19851 = (0);
while(true){
if((i__17381_19851 < count__17380_19850)){
var arg__15359__auto___19852 = cljs.core._nth.call(null,chunk__17379_19849,i__17381_19851);
a__15358__auto__.push(arg__15359__auto___19852);

var G__19853 = seq__17378_19848;
var G__19854 = chunk__17379_19849;
var G__19855 = count__17380_19850;
var G__19856 = (i__17381_19851 + (1));
seq__17378_19848 = G__19853;
chunk__17379_19849 = G__19854;
count__17380_19850 = G__19855;
i__17381_19851 = G__19856;
continue;
} else {
var temp__4126__auto___19857 = cljs.core.seq.call(null,seq__17378_19848);
if(temp__4126__auto___19857){
var seq__17378_19858__$1 = temp__4126__auto___19857;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17378_19858__$1)){
var c__4519__auto___19859 = cljs.core.chunk_first.call(null,seq__17378_19858__$1);
var G__19860 = cljs.core.chunk_rest.call(null,seq__17378_19858__$1);
var G__19861 = c__4519__auto___19859;
var G__19862 = cljs.core.count.call(null,c__4519__auto___19859);
var G__19863 = (0);
seq__17378_19848 = G__19860;
chunk__17379_19849 = G__19861;
count__17380_19850 = G__19862;
i__17381_19851 = G__19863;
continue;
} else {
var arg__15359__auto___19864 = cljs.core.first.call(null,seq__17378_19858__$1);
a__15358__auto__.push(arg__15359__auto___19864);

var G__19865 = cljs.core.next.call(null,seq__17378_19858__$1);
var G__19866 = null;
var G__19867 = (0);
var G__19868 = (0);
seq__17378_19848 = G__19865;
chunk__17379_19849 = G__19866;
count__17380_19850 = G__19867;
i__17381_19851 = G__19868;
continue;
}
} else {
}
}
break;
}

return React.DOM.title.apply(null,a__15358__auto__);
};
var title = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19869__i = 0, G__19869__a = new Array(arguments.length -  0);
while (G__19869__i < G__19869__a.length) {G__19869__a[G__19869__i] = arguments[G__19869__i + 0]; ++G__19869__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19869__a,0);
} 
return title__delegate.call(this,args__15357__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__19870){
var args__15357__auto__ = cljs.core.seq(arglist__19870);
return title__delegate(args__15357__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17386_19871 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17387_19872 = null;
var count__17388_19873 = (0);
var i__17389_19874 = (0);
while(true){
if((i__17389_19874 < count__17388_19873)){
var arg__15359__auto___19875 = cljs.core._nth.call(null,chunk__17387_19872,i__17389_19874);
a__15358__auto__.push(arg__15359__auto___19875);

var G__19876 = seq__17386_19871;
var G__19877 = chunk__17387_19872;
var G__19878 = count__17388_19873;
var G__19879 = (i__17389_19874 + (1));
seq__17386_19871 = G__19876;
chunk__17387_19872 = G__19877;
count__17388_19873 = G__19878;
i__17389_19874 = G__19879;
continue;
} else {
var temp__4126__auto___19880 = cljs.core.seq.call(null,seq__17386_19871);
if(temp__4126__auto___19880){
var seq__17386_19881__$1 = temp__4126__auto___19880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17386_19881__$1)){
var c__4519__auto___19882 = cljs.core.chunk_first.call(null,seq__17386_19881__$1);
var G__19883 = cljs.core.chunk_rest.call(null,seq__17386_19881__$1);
var G__19884 = c__4519__auto___19882;
var G__19885 = cljs.core.count.call(null,c__4519__auto___19882);
var G__19886 = (0);
seq__17386_19871 = G__19883;
chunk__17387_19872 = G__19884;
count__17388_19873 = G__19885;
i__17389_19874 = G__19886;
continue;
} else {
var arg__15359__auto___19887 = cljs.core.first.call(null,seq__17386_19881__$1);
a__15358__auto__.push(arg__15359__auto___19887);

var G__19888 = cljs.core.next.call(null,seq__17386_19881__$1);
var G__19889 = null;
var G__19890 = (0);
var G__19891 = (0);
seq__17386_19871 = G__19888;
chunk__17387_19872 = G__19889;
count__17388_19873 = G__19890;
i__17389_19874 = G__19891;
continue;
}
} else {
}
}
break;
}

return React.DOM.tr.apply(null,a__15358__auto__);
};
var tr = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19892__i = 0, G__19892__a = new Array(arguments.length -  0);
while (G__19892__i < G__19892__a.length) {G__19892__a[G__19892__i] = arguments[G__19892__i + 0]; ++G__19892__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19892__a,0);
} 
return tr__delegate.call(this,args__15357__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__19893){
var args__15357__auto__ = cljs.core.seq(arglist__19893);
return tr__delegate(args__15357__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17394_19894 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17395_19895 = null;
var count__17396_19896 = (0);
var i__17397_19897 = (0);
while(true){
if((i__17397_19897 < count__17396_19896)){
var arg__15359__auto___19898 = cljs.core._nth.call(null,chunk__17395_19895,i__17397_19897);
a__15358__auto__.push(arg__15359__auto___19898);

var G__19899 = seq__17394_19894;
var G__19900 = chunk__17395_19895;
var G__19901 = count__17396_19896;
var G__19902 = (i__17397_19897 + (1));
seq__17394_19894 = G__19899;
chunk__17395_19895 = G__19900;
count__17396_19896 = G__19901;
i__17397_19897 = G__19902;
continue;
} else {
var temp__4126__auto___19903 = cljs.core.seq.call(null,seq__17394_19894);
if(temp__4126__auto___19903){
var seq__17394_19904__$1 = temp__4126__auto___19903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17394_19904__$1)){
var c__4519__auto___19905 = cljs.core.chunk_first.call(null,seq__17394_19904__$1);
var G__19906 = cljs.core.chunk_rest.call(null,seq__17394_19904__$1);
var G__19907 = c__4519__auto___19905;
var G__19908 = cljs.core.count.call(null,c__4519__auto___19905);
var G__19909 = (0);
seq__17394_19894 = G__19906;
chunk__17395_19895 = G__19907;
count__17396_19896 = G__19908;
i__17397_19897 = G__19909;
continue;
} else {
var arg__15359__auto___19910 = cljs.core.first.call(null,seq__17394_19904__$1);
a__15358__auto__.push(arg__15359__auto___19910);

var G__19911 = cljs.core.next.call(null,seq__17394_19904__$1);
var G__19912 = null;
var G__19913 = (0);
var G__19914 = (0);
seq__17394_19894 = G__19911;
chunk__17395_19895 = G__19912;
count__17396_19896 = G__19913;
i__17397_19897 = G__19914;
continue;
}
} else {
}
}
break;
}

return React.DOM.track.apply(null,a__15358__auto__);
};
var track = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19915__i = 0, G__19915__a = new Array(arguments.length -  0);
while (G__19915__i < G__19915__a.length) {G__19915__a[G__19915__i] = arguments[G__19915__i + 0]; ++G__19915__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19915__a,0);
} 
return track__delegate.call(this,args__15357__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__19916){
var args__15357__auto__ = cljs.core.seq(arglist__19916);
return track__delegate(args__15357__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17402_19917 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17403_19918 = null;
var count__17404_19919 = (0);
var i__17405_19920 = (0);
while(true){
if((i__17405_19920 < count__17404_19919)){
var arg__15359__auto___19921 = cljs.core._nth.call(null,chunk__17403_19918,i__17405_19920);
a__15358__auto__.push(arg__15359__auto___19921);

var G__19922 = seq__17402_19917;
var G__19923 = chunk__17403_19918;
var G__19924 = count__17404_19919;
var G__19925 = (i__17405_19920 + (1));
seq__17402_19917 = G__19922;
chunk__17403_19918 = G__19923;
count__17404_19919 = G__19924;
i__17405_19920 = G__19925;
continue;
} else {
var temp__4126__auto___19926 = cljs.core.seq.call(null,seq__17402_19917);
if(temp__4126__auto___19926){
var seq__17402_19927__$1 = temp__4126__auto___19926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17402_19927__$1)){
var c__4519__auto___19928 = cljs.core.chunk_first.call(null,seq__17402_19927__$1);
var G__19929 = cljs.core.chunk_rest.call(null,seq__17402_19927__$1);
var G__19930 = c__4519__auto___19928;
var G__19931 = cljs.core.count.call(null,c__4519__auto___19928);
var G__19932 = (0);
seq__17402_19917 = G__19929;
chunk__17403_19918 = G__19930;
count__17404_19919 = G__19931;
i__17405_19920 = G__19932;
continue;
} else {
var arg__15359__auto___19933 = cljs.core.first.call(null,seq__17402_19927__$1);
a__15358__auto__.push(arg__15359__auto___19933);

var G__19934 = cljs.core.next.call(null,seq__17402_19927__$1);
var G__19935 = null;
var G__19936 = (0);
var G__19937 = (0);
seq__17402_19917 = G__19934;
chunk__17403_19918 = G__19935;
count__17404_19919 = G__19936;
i__17405_19920 = G__19937;
continue;
}
} else {
}
}
break;
}

return React.DOM.u.apply(null,a__15358__auto__);
};
var u = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19938__i = 0, G__19938__a = new Array(arguments.length -  0);
while (G__19938__i < G__19938__a.length) {G__19938__a[G__19938__i] = arguments[G__19938__i + 0]; ++G__19938__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19938__a,0);
} 
return u__delegate.call(this,args__15357__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__19939){
var args__15357__auto__ = cljs.core.seq(arglist__19939);
return u__delegate(args__15357__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17410_19940 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17411_19941 = null;
var count__17412_19942 = (0);
var i__17413_19943 = (0);
while(true){
if((i__17413_19943 < count__17412_19942)){
var arg__15359__auto___19944 = cljs.core._nth.call(null,chunk__17411_19941,i__17413_19943);
a__15358__auto__.push(arg__15359__auto___19944);

var G__19945 = seq__17410_19940;
var G__19946 = chunk__17411_19941;
var G__19947 = count__17412_19942;
var G__19948 = (i__17413_19943 + (1));
seq__17410_19940 = G__19945;
chunk__17411_19941 = G__19946;
count__17412_19942 = G__19947;
i__17413_19943 = G__19948;
continue;
} else {
var temp__4126__auto___19949 = cljs.core.seq.call(null,seq__17410_19940);
if(temp__4126__auto___19949){
var seq__17410_19950__$1 = temp__4126__auto___19949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17410_19950__$1)){
var c__4519__auto___19951 = cljs.core.chunk_first.call(null,seq__17410_19950__$1);
var G__19952 = cljs.core.chunk_rest.call(null,seq__17410_19950__$1);
var G__19953 = c__4519__auto___19951;
var G__19954 = cljs.core.count.call(null,c__4519__auto___19951);
var G__19955 = (0);
seq__17410_19940 = G__19952;
chunk__17411_19941 = G__19953;
count__17412_19942 = G__19954;
i__17413_19943 = G__19955;
continue;
} else {
var arg__15359__auto___19956 = cljs.core.first.call(null,seq__17410_19950__$1);
a__15358__auto__.push(arg__15359__auto___19956);

var G__19957 = cljs.core.next.call(null,seq__17410_19950__$1);
var G__19958 = null;
var G__19959 = (0);
var G__19960 = (0);
seq__17410_19940 = G__19957;
chunk__17411_19941 = G__19958;
count__17412_19942 = G__19959;
i__17413_19943 = G__19960;
continue;
}
} else {
}
}
break;
}

return React.DOM.ul.apply(null,a__15358__auto__);
};
var ul = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19961__i = 0, G__19961__a = new Array(arguments.length -  0);
while (G__19961__i < G__19961__a.length) {G__19961__a[G__19961__i] = arguments[G__19961__i + 0]; ++G__19961__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19961__a,0);
} 
return ul__delegate.call(this,args__15357__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__19962){
var args__15357__auto__ = cljs.core.seq(arglist__19962);
return ul__delegate(args__15357__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17418_19963 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17419_19964 = null;
var count__17420_19965 = (0);
var i__17421_19966 = (0);
while(true){
if((i__17421_19966 < count__17420_19965)){
var arg__15359__auto___19967 = cljs.core._nth.call(null,chunk__17419_19964,i__17421_19966);
a__15358__auto__.push(arg__15359__auto___19967);

var G__19968 = seq__17418_19963;
var G__19969 = chunk__17419_19964;
var G__19970 = count__17420_19965;
var G__19971 = (i__17421_19966 + (1));
seq__17418_19963 = G__19968;
chunk__17419_19964 = G__19969;
count__17420_19965 = G__19970;
i__17421_19966 = G__19971;
continue;
} else {
var temp__4126__auto___19972 = cljs.core.seq.call(null,seq__17418_19963);
if(temp__4126__auto___19972){
var seq__17418_19973__$1 = temp__4126__auto___19972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17418_19973__$1)){
var c__4519__auto___19974 = cljs.core.chunk_first.call(null,seq__17418_19973__$1);
var G__19975 = cljs.core.chunk_rest.call(null,seq__17418_19973__$1);
var G__19976 = c__4519__auto___19974;
var G__19977 = cljs.core.count.call(null,c__4519__auto___19974);
var G__19978 = (0);
seq__17418_19963 = G__19975;
chunk__17419_19964 = G__19976;
count__17420_19965 = G__19977;
i__17421_19966 = G__19978;
continue;
} else {
var arg__15359__auto___19979 = cljs.core.first.call(null,seq__17418_19973__$1);
a__15358__auto__.push(arg__15359__auto___19979);

var G__19980 = cljs.core.next.call(null,seq__17418_19973__$1);
var G__19981 = null;
var G__19982 = (0);
var G__19983 = (0);
seq__17418_19963 = G__19980;
chunk__17419_19964 = G__19981;
count__17420_19965 = G__19982;
i__17421_19966 = G__19983;
continue;
}
} else {
}
}
break;
}

return React.DOM.var$.apply(null,a__15358__auto__);
};
var var$ = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__19984__i = 0, G__19984__a = new Array(arguments.length -  0);
while (G__19984__i < G__19984__a.length) {G__19984__a[G__19984__i] = arguments[G__19984__i + 0]; ++G__19984__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__19984__a,0);
} 
return var$__delegate.call(this,args__15357__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__19985){
var args__15357__auto__ = cljs.core.seq(arglist__19985);
return var$__delegate(args__15357__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17426_19986 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17427_19987 = null;
var count__17428_19988 = (0);
var i__17429_19989 = (0);
while(true){
if((i__17429_19989 < count__17428_19988)){
var arg__15359__auto___19990 = cljs.core._nth.call(null,chunk__17427_19987,i__17429_19989);
a__15358__auto__.push(arg__15359__auto___19990);

var G__19991 = seq__17426_19986;
var G__19992 = chunk__17427_19987;
var G__19993 = count__17428_19988;
var G__19994 = (i__17429_19989 + (1));
seq__17426_19986 = G__19991;
chunk__17427_19987 = G__19992;
count__17428_19988 = G__19993;
i__17429_19989 = G__19994;
continue;
} else {
var temp__4126__auto___19995 = cljs.core.seq.call(null,seq__17426_19986);
if(temp__4126__auto___19995){
var seq__17426_19996__$1 = temp__4126__auto___19995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17426_19996__$1)){
var c__4519__auto___19997 = cljs.core.chunk_first.call(null,seq__17426_19996__$1);
var G__19998 = cljs.core.chunk_rest.call(null,seq__17426_19996__$1);
var G__19999 = c__4519__auto___19997;
var G__20000 = cljs.core.count.call(null,c__4519__auto___19997);
var G__20001 = (0);
seq__17426_19986 = G__19998;
chunk__17427_19987 = G__19999;
count__17428_19988 = G__20000;
i__17429_19989 = G__20001;
continue;
} else {
var arg__15359__auto___20002 = cljs.core.first.call(null,seq__17426_19996__$1);
a__15358__auto__.push(arg__15359__auto___20002);

var G__20003 = cljs.core.next.call(null,seq__17426_19996__$1);
var G__20004 = null;
var G__20005 = (0);
var G__20006 = (0);
seq__17426_19986 = G__20003;
chunk__17427_19987 = G__20004;
count__17428_19988 = G__20005;
i__17429_19989 = G__20006;
continue;
}
} else {
}
}
break;
}

return React.DOM.video.apply(null,a__15358__auto__);
};
var video = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__20007__i = 0, G__20007__a = new Array(arguments.length -  0);
while (G__20007__i < G__20007__a.length) {G__20007__a[G__20007__i] = arguments[G__20007__i + 0]; ++G__20007__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__20007__a,0);
} 
return video__delegate.call(this,args__15357__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__20008){
var args__15357__auto__ = cljs.core.seq(arglist__20008);
return video__delegate(args__15357__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17434_20009 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17435_20010 = null;
var count__17436_20011 = (0);
var i__17437_20012 = (0);
while(true){
if((i__17437_20012 < count__17436_20011)){
var arg__15359__auto___20013 = cljs.core._nth.call(null,chunk__17435_20010,i__17437_20012);
a__15358__auto__.push(arg__15359__auto___20013);

var G__20014 = seq__17434_20009;
var G__20015 = chunk__17435_20010;
var G__20016 = count__17436_20011;
var G__20017 = (i__17437_20012 + (1));
seq__17434_20009 = G__20014;
chunk__17435_20010 = G__20015;
count__17436_20011 = G__20016;
i__17437_20012 = G__20017;
continue;
} else {
var temp__4126__auto___20018 = cljs.core.seq.call(null,seq__17434_20009);
if(temp__4126__auto___20018){
var seq__17434_20019__$1 = temp__4126__auto___20018;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17434_20019__$1)){
var c__4519__auto___20020 = cljs.core.chunk_first.call(null,seq__17434_20019__$1);
var G__20021 = cljs.core.chunk_rest.call(null,seq__17434_20019__$1);
var G__20022 = c__4519__auto___20020;
var G__20023 = cljs.core.count.call(null,c__4519__auto___20020);
var G__20024 = (0);
seq__17434_20009 = G__20021;
chunk__17435_20010 = G__20022;
count__17436_20011 = G__20023;
i__17437_20012 = G__20024;
continue;
} else {
var arg__15359__auto___20025 = cljs.core.first.call(null,seq__17434_20019__$1);
a__15358__auto__.push(arg__15359__auto___20025);

var G__20026 = cljs.core.next.call(null,seq__17434_20019__$1);
var G__20027 = null;
var G__20028 = (0);
var G__20029 = (0);
seq__17434_20009 = G__20026;
chunk__17435_20010 = G__20027;
count__17436_20011 = G__20028;
i__17437_20012 = G__20029;
continue;
}
} else {
}
}
break;
}

return React.DOM.wbr.apply(null,a__15358__auto__);
};
var wbr = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__20030__i = 0, G__20030__a = new Array(arguments.length -  0);
while (G__20030__i < G__20030__a.length) {G__20030__a[G__20030__i] = arguments[G__20030__i + 0]; ++G__20030__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__20030__a,0);
} 
return wbr__delegate.call(this,args__15357__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__20031){
var args__15357__auto__ = cljs.core.seq(arglist__20031);
return wbr__delegate(args__15357__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17442_20032 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17443_20033 = null;
var count__17444_20034 = (0);
var i__17445_20035 = (0);
while(true){
if((i__17445_20035 < count__17444_20034)){
var arg__15359__auto___20036 = cljs.core._nth.call(null,chunk__17443_20033,i__17445_20035);
a__15358__auto__.push(arg__15359__auto___20036);

var G__20037 = seq__17442_20032;
var G__20038 = chunk__17443_20033;
var G__20039 = count__17444_20034;
var G__20040 = (i__17445_20035 + (1));
seq__17442_20032 = G__20037;
chunk__17443_20033 = G__20038;
count__17444_20034 = G__20039;
i__17445_20035 = G__20040;
continue;
} else {
var temp__4126__auto___20041 = cljs.core.seq.call(null,seq__17442_20032);
if(temp__4126__auto___20041){
var seq__17442_20042__$1 = temp__4126__auto___20041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17442_20042__$1)){
var c__4519__auto___20043 = cljs.core.chunk_first.call(null,seq__17442_20042__$1);
var G__20044 = cljs.core.chunk_rest.call(null,seq__17442_20042__$1);
var G__20045 = c__4519__auto___20043;
var G__20046 = cljs.core.count.call(null,c__4519__auto___20043);
var G__20047 = (0);
seq__17442_20032 = G__20044;
chunk__17443_20033 = G__20045;
count__17444_20034 = G__20046;
i__17445_20035 = G__20047;
continue;
} else {
var arg__15359__auto___20048 = cljs.core.first.call(null,seq__17442_20042__$1);
a__15358__auto__.push(arg__15359__auto___20048);

var G__20049 = cljs.core.next.call(null,seq__17442_20042__$1);
var G__20050 = null;
var G__20051 = (0);
var G__20052 = (0);
seq__17442_20032 = G__20049;
chunk__17443_20033 = G__20050;
count__17444_20034 = G__20051;
i__17445_20035 = G__20052;
continue;
}
} else {
}
}
break;
}

return React.DOM.circle.apply(null,a__15358__auto__);
};
var circle = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__20053__i = 0, G__20053__a = new Array(arguments.length -  0);
while (G__20053__i < G__20053__a.length) {G__20053__a[G__20053__i] = arguments[G__20053__i + 0]; ++G__20053__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__20053__a,0);
} 
return circle__delegate.call(this,args__15357__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__20054){
var args__15357__auto__ = cljs.core.seq(arglist__20054);
return circle__delegate(args__15357__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17450_20055 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17451_20056 = null;
var count__17452_20057 = (0);
var i__17453_20058 = (0);
while(true){
if((i__17453_20058 < count__17452_20057)){
var arg__15359__auto___20059 = cljs.core._nth.call(null,chunk__17451_20056,i__17453_20058);
a__15358__auto__.push(arg__15359__auto___20059);

var G__20060 = seq__17450_20055;
var G__20061 = chunk__17451_20056;
var G__20062 = count__17452_20057;
var G__20063 = (i__17453_20058 + (1));
seq__17450_20055 = G__20060;
chunk__17451_20056 = G__20061;
count__17452_20057 = G__20062;
i__17453_20058 = G__20063;
continue;
} else {
var temp__4126__auto___20064 = cljs.core.seq.call(null,seq__17450_20055);
if(temp__4126__auto___20064){
var seq__17450_20065__$1 = temp__4126__auto___20064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17450_20065__$1)){
var c__4519__auto___20066 = cljs.core.chunk_first.call(null,seq__17450_20065__$1);
var G__20067 = cljs.core.chunk_rest.call(null,seq__17450_20065__$1);
var G__20068 = c__4519__auto___20066;
var G__20069 = cljs.core.count.call(null,c__4519__auto___20066);
var G__20070 = (0);
seq__17450_20055 = G__20067;
chunk__17451_20056 = G__20068;
count__17452_20057 = G__20069;
i__17453_20058 = G__20070;
continue;
} else {
var arg__15359__auto___20071 = cljs.core.first.call(null,seq__17450_20065__$1);
a__15358__auto__.push(arg__15359__auto___20071);

var G__20072 = cljs.core.next.call(null,seq__17450_20065__$1);
var G__20073 = null;
var G__20074 = (0);
var G__20075 = (0);
seq__17450_20055 = G__20072;
chunk__17451_20056 = G__20073;
count__17452_20057 = G__20074;
i__17453_20058 = G__20075;
continue;
}
} else {
}
}
break;
}

return React.DOM.g.apply(null,a__15358__auto__);
};
var g = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__20076__i = 0, G__20076__a = new Array(arguments.length -  0);
while (G__20076__i < G__20076__a.length) {G__20076__a[G__20076__i] = arguments[G__20076__i + 0]; ++G__20076__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__20076__a,0);
} 
return g__delegate.call(this,args__15357__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__20077){
var args__15357__auto__ = cljs.core.seq(arglist__20077);
return g__delegate(args__15357__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17458_20078 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17459_20079 = null;
var count__17460_20080 = (0);
var i__17461_20081 = (0);
while(true){
if((i__17461_20081 < count__17460_20080)){
var arg__15359__auto___20082 = cljs.core._nth.call(null,chunk__17459_20079,i__17461_20081);
a__15358__auto__.push(arg__15359__auto___20082);

var G__20083 = seq__17458_20078;
var G__20084 = chunk__17459_20079;
var G__20085 = count__17460_20080;
var G__20086 = (i__17461_20081 + (1));
seq__17458_20078 = G__20083;
chunk__17459_20079 = G__20084;
count__17460_20080 = G__20085;
i__17461_20081 = G__20086;
continue;
} else {
var temp__4126__auto___20087 = cljs.core.seq.call(null,seq__17458_20078);
if(temp__4126__auto___20087){
var seq__17458_20088__$1 = temp__4126__auto___20087;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17458_20088__$1)){
var c__4519__auto___20089 = cljs.core.chunk_first.call(null,seq__17458_20088__$1);
var G__20090 = cljs.core.chunk_rest.call(null,seq__17458_20088__$1);
var G__20091 = c__4519__auto___20089;
var G__20092 = cljs.core.count.call(null,c__4519__auto___20089);
var G__20093 = (0);
seq__17458_20078 = G__20090;
chunk__17459_20079 = G__20091;
count__17460_20080 = G__20092;
i__17461_20081 = G__20093;
continue;
} else {
var arg__15359__auto___20094 = cljs.core.first.call(null,seq__17458_20088__$1);
a__15358__auto__.push(arg__15359__auto___20094);

var G__20095 = cljs.core.next.call(null,seq__17458_20088__$1);
var G__20096 = null;
var G__20097 = (0);
var G__20098 = (0);
seq__17458_20078 = G__20095;
chunk__17459_20079 = G__20096;
count__17460_20080 = G__20097;
i__17461_20081 = G__20098;
continue;
}
} else {
}
}
break;
}

return React.DOM.line.apply(null,a__15358__auto__);
};
var line = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__20099__i = 0, G__20099__a = new Array(arguments.length -  0);
while (G__20099__i < G__20099__a.length) {G__20099__a[G__20099__i] = arguments[G__20099__i + 0]; ++G__20099__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__20099__a,0);
} 
return line__delegate.call(this,args__15357__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__20100){
var args__15357__auto__ = cljs.core.seq(arglist__20100);
return line__delegate(args__15357__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17466_20101 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17467_20102 = null;
var count__17468_20103 = (0);
var i__17469_20104 = (0);
while(true){
if((i__17469_20104 < count__17468_20103)){
var arg__15359__auto___20105 = cljs.core._nth.call(null,chunk__17467_20102,i__17469_20104);
a__15358__auto__.push(arg__15359__auto___20105);

var G__20106 = seq__17466_20101;
var G__20107 = chunk__17467_20102;
var G__20108 = count__17468_20103;
var G__20109 = (i__17469_20104 + (1));
seq__17466_20101 = G__20106;
chunk__17467_20102 = G__20107;
count__17468_20103 = G__20108;
i__17469_20104 = G__20109;
continue;
} else {
var temp__4126__auto___20110 = cljs.core.seq.call(null,seq__17466_20101);
if(temp__4126__auto___20110){
var seq__17466_20111__$1 = temp__4126__auto___20110;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17466_20111__$1)){
var c__4519__auto___20112 = cljs.core.chunk_first.call(null,seq__17466_20111__$1);
var G__20113 = cljs.core.chunk_rest.call(null,seq__17466_20111__$1);
var G__20114 = c__4519__auto___20112;
var G__20115 = cljs.core.count.call(null,c__4519__auto___20112);
var G__20116 = (0);
seq__17466_20101 = G__20113;
chunk__17467_20102 = G__20114;
count__17468_20103 = G__20115;
i__17469_20104 = G__20116;
continue;
} else {
var arg__15359__auto___20117 = cljs.core.first.call(null,seq__17466_20111__$1);
a__15358__auto__.push(arg__15359__auto___20117);

var G__20118 = cljs.core.next.call(null,seq__17466_20111__$1);
var G__20119 = null;
var G__20120 = (0);
var G__20121 = (0);
seq__17466_20101 = G__20118;
chunk__17467_20102 = G__20119;
count__17468_20103 = G__20120;
i__17469_20104 = G__20121;
continue;
}
} else {
}
}
break;
}

return React.DOM.path.apply(null,a__15358__auto__);
};
var path = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__20122__i = 0, G__20122__a = new Array(arguments.length -  0);
while (G__20122__i < G__20122__a.length) {G__20122__a[G__20122__i] = arguments[G__20122__i + 0]; ++G__20122__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__20122__a,0);
} 
return path__delegate.call(this,args__15357__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__20123){
var args__15357__auto__ = cljs.core.seq(arglist__20123);
return path__delegate(args__15357__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17474_20124 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17475_20125 = null;
var count__17476_20126 = (0);
var i__17477_20127 = (0);
while(true){
if((i__17477_20127 < count__17476_20126)){
var arg__15359__auto___20128 = cljs.core._nth.call(null,chunk__17475_20125,i__17477_20127);
a__15358__auto__.push(arg__15359__auto___20128);

var G__20129 = seq__17474_20124;
var G__20130 = chunk__17475_20125;
var G__20131 = count__17476_20126;
var G__20132 = (i__17477_20127 + (1));
seq__17474_20124 = G__20129;
chunk__17475_20125 = G__20130;
count__17476_20126 = G__20131;
i__17477_20127 = G__20132;
continue;
} else {
var temp__4126__auto___20133 = cljs.core.seq.call(null,seq__17474_20124);
if(temp__4126__auto___20133){
var seq__17474_20134__$1 = temp__4126__auto___20133;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17474_20134__$1)){
var c__4519__auto___20135 = cljs.core.chunk_first.call(null,seq__17474_20134__$1);
var G__20136 = cljs.core.chunk_rest.call(null,seq__17474_20134__$1);
var G__20137 = c__4519__auto___20135;
var G__20138 = cljs.core.count.call(null,c__4519__auto___20135);
var G__20139 = (0);
seq__17474_20124 = G__20136;
chunk__17475_20125 = G__20137;
count__17476_20126 = G__20138;
i__17477_20127 = G__20139;
continue;
} else {
var arg__15359__auto___20140 = cljs.core.first.call(null,seq__17474_20134__$1);
a__15358__auto__.push(arg__15359__auto___20140);

var G__20141 = cljs.core.next.call(null,seq__17474_20134__$1);
var G__20142 = null;
var G__20143 = (0);
var G__20144 = (0);
seq__17474_20124 = G__20141;
chunk__17475_20125 = G__20142;
count__17476_20126 = G__20143;
i__17477_20127 = G__20144;
continue;
}
} else {
}
}
break;
}

return React.DOM.polygon.apply(null,a__15358__auto__);
};
var polygon = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__20145__i = 0, G__20145__a = new Array(arguments.length -  0);
while (G__20145__i < G__20145__a.length) {G__20145__a[G__20145__i] = arguments[G__20145__i + 0]; ++G__20145__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__20145__a,0);
} 
return polygon__delegate.call(this,args__15357__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__20146){
var args__15357__auto__ = cljs.core.seq(arglist__20146);
return polygon__delegate(args__15357__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17482_20147 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17483_20148 = null;
var count__17484_20149 = (0);
var i__17485_20150 = (0);
while(true){
if((i__17485_20150 < count__17484_20149)){
var arg__15359__auto___20151 = cljs.core._nth.call(null,chunk__17483_20148,i__17485_20150);
a__15358__auto__.push(arg__15359__auto___20151);

var G__20152 = seq__17482_20147;
var G__20153 = chunk__17483_20148;
var G__20154 = count__17484_20149;
var G__20155 = (i__17485_20150 + (1));
seq__17482_20147 = G__20152;
chunk__17483_20148 = G__20153;
count__17484_20149 = G__20154;
i__17485_20150 = G__20155;
continue;
} else {
var temp__4126__auto___20156 = cljs.core.seq.call(null,seq__17482_20147);
if(temp__4126__auto___20156){
var seq__17482_20157__$1 = temp__4126__auto___20156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17482_20157__$1)){
var c__4519__auto___20158 = cljs.core.chunk_first.call(null,seq__17482_20157__$1);
var G__20159 = cljs.core.chunk_rest.call(null,seq__17482_20157__$1);
var G__20160 = c__4519__auto___20158;
var G__20161 = cljs.core.count.call(null,c__4519__auto___20158);
var G__20162 = (0);
seq__17482_20147 = G__20159;
chunk__17483_20148 = G__20160;
count__17484_20149 = G__20161;
i__17485_20150 = G__20162;
continue;
} else {
var arg__15359__auto___20163 = cljs.core.first.call(null,seq__17482_20157__$1);
a__15358__auto__.push(arg__15359__auto___20163);

var G__20164 = cljs.core.next.call(null,seq__17482_20157__$1);
var G__20165 = null;
var G__20166 = (0);
var G__20167 = (0);
seq__17482_20147 = G__20164;
chunk__17483_20148 = G__20165;
count__17484_20149 = G__20166;
i__17485_20150 = G__20167;
continue;
}
} else {
}
}
break;
}

return React.DOM.polyline.apply(null,a__15358__auto__);
};
var polyline = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__20168__i = 0, G__20168__a = new Array(arguments.length -  0);
while (G__20168__i < G__20168__a.length) {G__20168__a[G__20168__i] = arguments[G__20168__i + 0]; ++G__20168__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__20168__a,0);
} 
return polyline__delegate.call(this,args__15357__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__20169){
var args__15357__auto__ = cljs.core.seq(arglist__20169);
return polyline__delegate(args__15357__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17490_20170 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17491_20171 = null;
var count__17492_20172 = (0);
var i__17493_20173 = (0);
while(true){
if((i__17493_20173 < count__17492_20172)){
var arg__15359__auto___20174 = cljs.core._nth.call(null,chunk__17491_20171,i__17493_20173);
a__15358__auto__.push(arg__15359__auto___20174);

var G__20175 = seq__17490_20170;
var G__20176 = chunk__17491_20171;
var G__20177 = count__17492_20172;
var G__20178 = (i__17493_20173 + (1));
seq__17490_20170 = G__20175;
chunk__17491_20171 = G__20176;
count__17492_20172 = G__20177;
i__17493_20173 = G__20178;
continue;
} else {
var temp__4126__auto___20179 = cljs.core.seq.call(null,seq__17490_20170);
if(temp__4126__auto___20179){
var seq__17490_20180__$1 = temp__4126__auto___20179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17490_20180__$1)){
var c__4519__auto___20181 = cljs.core.chunk_first.call(null,seq__17490_20180__$1);
var G__20182 = cljs.core.chunk_rest.call(null,seq__17490_20180__$1);
var G__20183 = c__4519__auto___20181;
var G__20184 = cljs.core.count.call(null,c__4519__auto___20181);
var G__20185 = (0);
seq__17490_20170 = G__20182;
chunk__17491_20171 = G__20183;
count__17492_20172 = G__20184;
i__17493_20173 = G__20185;
continue;
} else {
var arg__15359__auto___20186 = cljs.core.first.call(null,seq__17490_20180__$1);
a__15358__auto__.push(arg__15359__auto___20186);

var G__20187 = cljs.core.next.call(null,seq__17490_20180__$1);
var G__20188 = null;
var G__20189 = (0);
var G__20190 = (0);
seq__17490_20170 = G__20187;
chunk__17491_20171 = G__20188;
count__17492_20172 = G__20189;
i__17493_20173 = G__20190;
continue;
}
} else {
}
}
break;
}

return React.DOM.rect.apply(null,a__15358__auto__);
};
var rect = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__20191__i = 0, G__20191__a = new Array(arguments.length -  0);
while (G__20191__i < G__20191__a.length) {G__20191__a[G__20191__i] = arguments[G__20191__i + 0]; ++G__20191__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__20191__a,0);
} 
return rect__delegate.call(this,args__15357__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__20192){
var args__15357__auto__ = cljs.core.seq(arglist__20192);
return rect__delegate(args__15357__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__17498_20193 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__17499_20194 = null;
var count__17500_20195 = (0);
var i__17501_20196 = (0);
while(true){
if((i__17501_20196 < count__17500_20195)){
var arg__15359__auto___20197 = cljs.core._nth.call(null,chunk__17499_20194,i__17501_20196);
a__15358__auto__.push(arg__15359__auto___20197);

var G__20198 = seq__17498_20193;
var G__20199 = chunk__17499_20194;
var G__20200 = count__17500_20195;
var G__20201 = (i__17501_20196 + (1));
seq__17498_20193 = G__20198;
chunk__17499_20194 = G__20199;
count__17500_20195 = G__20200;
i__17501_20196 = G__20201;
continue;
} else {
var temp__4126__auto___20202 = cljs.core.seq.call(null,seq__17498_20193);
if(temp__4126__auto___20202){
var seq__17498_20203__$1 = temp__4126__auto___20202;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17498_20203__$1)){
var c__4519__auto___20204 = cljs.core.chunk_first.call(null,seq__17498_20203__$1);
var G__20205 = cljs.core.chunk_rest.call(null,seq__17498_20203__$1);
var G__20206 = c__4519__auto___20204;
var G__20207 = cljs.core.count.call(null,c__4519__auto___20204);
var G__20208 = (0);
seq__17498_20193 = G__20205;
chunk__17499_20194 = G__20206;
count__17500_20195 = G__20207;
i__17501_20196 = G__20208;
continue;
} else {
var arg__15359__auto___20209 = cljs.core.first.call(null,seq__17498_20203__$1);
a__15358__auto__.push(arg__15359__auto___20209);

var G__20210 = cljs.core.next.call(null,seq__17498_20203__$1);
var G__20211 = null;
var G__20212 = (0);
var G__20213 = (0);
seq__17498_20193 = G__20210;
chunk__17499_20194 = G__20211;
count__17500_20195 = G__20212;
i__17501_20196 = G__20213;
continue;
}
} else {
}
}
break;
}

return React.DOM.svg.apply(null,a__15358__auto__);
};
var svg = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__20214__i = 0, G__20214__a = new Array(arguments.length -  0);
while (G__20214__i < G__20214__a.length) {G__20214__a[G__20214__i] = arguments[G__20214__i + 0]; ++G__20214__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__20214__a,0);
} 
return svg__delegate.call(this,args__15357__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__20215){
var args__15357__auto__ = cljs.core.seq(arglist__20215);
return svg__delegate(args__15357__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__15357__auto__){

var a__15358__auto__ = [];
a__15358__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__15357__auto__)));

var seq__16810_20216 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__15357__auto__));
var chunk__16811_20217 = null;
var count__16812_20218 = (0);
var i__16813_20219 = (0);
while(true){
if((i__16813_20219 < count__16812_20218)){
var arg__15359__auto___20220 = cljs.core._nth.call(null,chunk__16811_20217,i__16813_20219);
a__15358__auto__.push(arg__15359__auto___20220);

var G__20221 = seq__16810_20216;
var G__20222 = chunk__16811_20217;
var G__20223 = count__16812_20218;
var G__20224 = (i__16813_20219 + (1));
seq__16810_20216 = G__20221;
chunk__16811_20217 = G__20222;
count__16812_20218 = G__20223;
i__16813_20219 = G__20224;
continue;
} else {
var temp__4126__auto___20225 = cljs.core.seq.call(null,seq__16810_20216);
if(temp__4126__auto___20225){
var seq__16810_20226__$1 = temp__4126__auto___20225;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16810_20226__$1)){
var c__4519__auto___20227 = cljs.core.chunk_first.call(null,seq__16810_20226__$1);
var G__20228 = cljs.core.chunk_rest.call(null,seq__16810_20226__$1);
var G__20229 = c__4519__auto___20227;
var G__20230 = cljs.core.count.call(null,c__4519__auto___20227);
var G__20231 = (0);
seq__16810_20216 = G__20228;
chunk__16811_20217 = G__20229;
count__16812_20218 = G__20230;
i__16813_20219 = G__20231;
continue;
} else {
var arg__15359__auto___20232 = cljs.core.first.call(null,seq__16810_20226__$1);
a__15358__auto__.push(arg__15359__auto___20232);

var G__20233 = cljs.core.next.call(null,seq__16810_20226__$1);
var G__20234 = null;
var G__20235 = (0);
var G__20236 = (0);
seq__16810_20216 = G__20233;
chunk__16811_20217 = G__20234;
count__16812_20218 = G__20235;
i__16813_20219 = G__20236;
continue;
}
} else {
}
}
break;
}

return React.DOM.text.apply(null,a__15358__auto__);
};
var text = function (var_args){
var args__15357__auto__ = null;
if (arguments.length > 0) {
var G__20237__i = 0, G__20237__a = new Array(arguments.length -  0);
while (G__20237__i < G__20237__a.length) {G__20237__a[G__20237__i] = arguments[G__20237__i + 0]; ++G__20237__i;}
  args__15357__auto__ = new cljs.core.IndexedSeq(G__20237__a,0);
} 
return text__delegate.call(this,args__15357__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__20238){
var args__15357__auto__ = cljs.core.seq(arglist__20238);
return text__delegate(args__15357__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;

quiescent.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"caption","caption",-855383902),new cljs.core.Keyword(null,"bdi","bdi",-1323025886),new cljs.core.Keyword(null,"rp","rp",2006698083),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"big","big",903550151),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"dfn","dfn",241908167),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"wbr","wbr",228661800),new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"ins","ins",-1021983570),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"datalist","datalist",-1235043474),new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"samp","samp",1506141136),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"rt","rt",623480692),new cljs.core.Keyword(null,"colgroup","colgroup",651118645),new cljs.core.Keyword(null,"meter","meter",-187641611),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"bdo","bdo",-2131148202),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"noscript","noscript",-704777289),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"menuitem","menuitem",1004047353),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"embed","embed",-1354913349),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"keygen","keygen",-571693253),new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.Keyword(null,"cite","cite",1909439996),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"ruby","ruby",2000737661),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"u","u",-1156634785)],[quiescent.dom.thead,quiescent.dom.path,quiescent.dom.del,quiescent.dom.fieldset,quiescent.dom.q,quiescent.dom.figure,quiescent.dom.aside,quiescent.dom.figcaption,quiescent.dom.video,quiescent.dom.address,quiescent.dom.caption,quiescent.dom.bdi,quiescent.dom.rp,quiescent.dom.hr,quiescent.dom.dd,quiescent.dom.meta,quiescent.dom.tbody,quiescent.dom.table,quiescent.dom.ul,quiescent.dom.pre,quiescent.dom.sup,quiescent.dom.script,quiescent.dom.big,quiescent.dom.button,quiescent.dom.dfn,quiescent.dom.sub,quiescent.dom.mark,quiescent.dom.wbr,quiescent.dom.strong,quiescent.dom.td,quiescent.dom.li,quiescent.dom.dt,quiescent.dom.section,quiescent.dom.th,quiescent.dom.time,quiescent.dom.optgroup,quiescent.dom.iframe,quiescent.dom.tr,quiescent.dom.circle,quiescent.dom.article,quiescent.dom.legend,quiescent.dom.em,quiescent.dom.kbd,quiescent.dom.abbr,quiescent.dom.source,quiescent.dom.output,quiescent.dom.ins,quiescent.dom.footer,quiescent.dom.header,quiescent.dom.datalist,quiescent.dom.tfoot,quiescent.dom.s,quiescent.dom.h5,quiescent.dom.canvas,quiescent.dom.param,quiescent.dom.title,quiescent.dom.small,quiescent.dom.style,quiescent.dom.textarea,quiescent.dom.div,quiescent.dom.option,quiescent.dom.summary,quiescent.dom.samp,quiescent.dom.h4,quiescent.dom.head,quiescent.dom.g,quiescent.dom.ol,quiescent.dom.details,quiescent.dom.line,quiescent.dom.var$,quiescent.dom.h6,quiescent.dom.link,quiescent.dom.col,quiescent.dom.label,quiescent.dom.rt,quiescent.dom.colgroup,quiescent.dom.meter,quiescent.dom.svg,quiescent.dom.code,quiescent.dom.bdo,quiescent.dom.b,quiescent.dom.noscript,quiescent.dom.h2,quiescent.dom.area,quiescent.dom.br,quiescent.dom.form,quiescent.dom.audio,quiescent.dom.input,quiescent.dom.menuitem,quiescent.dom.base,quiescent.dom.h1,quiescent.dom.progress,quiescent.dom.main,quiescent.dom.embed,quiescent.dom.h3,quiescent.dom.body,quiescent.dom.keygen,quiescent.dom.polyline,quiescent.dom.cite,quiescent.dom.rect,quiescent.dom.p,quiescent.dom.nav,quiescent.dom.ruby,quiescent.dom.map,quiescent.dom.object,quiescent.dom.i,quiescent.dom.menu,quiescent.dom.blockquote,quiescent.dom.img,quiescent.dom.a,quiescent.dom.dl,quiescent.dom.select,quiescent.dom.polygon,quiescent.dom.html,quiescent.dom.text,quiescent.dom.span,quiescent.dom.track,quiescent.dom.data,quiescent.dom.u]);

//# sourceMappingURL=dom.js.map