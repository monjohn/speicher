// Compiled by ClojureScript 0.0-2727 {}
goog.provide('quiescent.dom');
goog.require('cljs.core');
goog.require('quiescent');
/**
* @param {...*} var_args
*/
quiescent.dom.a = (function() { 
var a__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24299_25247 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24300_25248 = null;
var count__24301_25249 = (0);
var i__24302_25250 = (0);
while(true){
if((i__24302_25250 < count__24301_25249)){
var arg__9339__auto___25251 = cljs.core._nth.call(null,chunk__24300_25248,i__24302_25250);
a__9338__auto__.push(arg__9339__auto___25251);

var G__25252 = seq__24299_25247;
var G__25253 = chunk__24300_25248;
var G__25254 = count__24301_25249;
var G__25255 = (i__24302_25250 + (1));
seq__24299_25247 = G__25252;
chunk__24300_25248 = G__25253;
count__24301_25249 = G__25254;
i__24302_25250 = G__25255;
continue;
} else {
var temp__4126__auto___25256 = cljs.core.seq.call(null,seq__24299_25247);
if(temp__4126__auto___25256){
var seq__24299_25257__$1 = temp__4126__auto___25256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24299_25257__$1)){
var c__4559__auto___25258 = cljs.core.chunk_first.call(null,seq__24299_25257__$1);
var G__25259 = cljs.core.chunk_rest.call(null,seq__24299_25257__$1);
var G__25260 = c__4559__auto___25258;
var G__25261 = cljs.core.count.call(null,c__4559__auto___25258);
var G__25262 = (0);
seq__24299_25247 = G__25259;
chunk__24300_25248 = G__25260;
count__24301_25249 = G__25261;
i__24302_25250 = G__25262;
continue;
} else {
var arg__9339__auto___25263 = cljs.core.first.call(null,seq__24299_25257__$1);
a__9338__auto__.push(arg__9339__auto___25263);

var G__25264 = cljs.core.next.call(null,seq__24299_25257__$1);
var G__25265 = null;
var G__25266 = (0);
var G__25267 = (0);
seq__24299_25247 = G__25264;
chunk__24300_25248 = G__25265;
count__24301_25249 = G__25266;
i__24302_25250 = G__25267;
continue;
}
} else {
}
}
break;
}

return React.DOM.a.apply(null,a__9338__auto__);
};
var a = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25268__i = 0, G__25268__a = new Array(arguments.length -  0);
while (G__25268__i < G__25268__a.length) {G__25268__a[G__25268__i] = arguments[G__25268__i + 0]; ++G__25268__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25268__a,0);
} 
return a__delegate.call(this,args__9337__auto__);};
a.cljs$lang$maxFixedArity = 0;
a.cljs$lang$applyTo = (function (arglist__25269){
var args__9337__auto__ = cljs.core.seq(arglist__25269);
return a__delegate(args__9337__auto__);
});
a.cljs$core$IFn$_invoke$arity$variadic = a__delegate;
return a;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.abbr = (function() { 
var abbr__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24307_25270 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24308_25271 = null;
var count__24309_25272 = (0);
var i__24310_25273 = (0);
while(true){
if((i__24310_25273 < count__24309_25272)){
var arg__9339__auto___25274 = cljs.core._nth.call(null,chunk__24308_25271,i__24310_25273);
a__9338__auto__.push(arg__9339__auto___25274);

var G__25275 = seq__24307_25270;
var G__25276 = chunk__24308_25271;
var G__25277 = count__24309_25272;
var G__25278 = (i__24310_25273 + (1));
seq__24307_25270 = G__25275;
chunk__24308_25271 = G__25276;
count__24309_25272 = G__25277;
i__24310_25273 = G__25278;
continue;
} else {
var temp__4126__auto___25279 = cljs.core.seq.call(null,seq__24307_25270);
if(temp__4126__auto___25279){
var seq__24307_25280__$1 = temp__4126__auto___25279;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24307_25280__$1)){
var c__4559__auto___25281 = cljs.core.chunk_first.call(null,seq__24307_25280__$1);
var G__25282 = cljs.core.chunk_rest.call(null,seq__24307_25280__$1);
var G__25283 = c__4559__auto___25281;
var G__25284 = cljs.core.count.call(null,c__4559__auto___25281);
var G__25285 = (0);
seq__24307_25270 = G__25282;
chunk__24308_25271 = G__25283;
count__24309_25272 = G__25284;
i__24310_25273 = G__25285;
continue;
} else {
var arg__9339__auto___25286 = cljs.core.first.call(null,seq__24307_25280__$1);
a__9338__auto__.push(arg__9339__auto___25286);

var G__25287 = cljs.core.next.call(null,seq__24307_25280__$1);
var G__25288 = null;
var G__25289 = (0);
var G__25290 = (0);
seq__24307_25270 = G__25287;
chunk__24308_25271 = G__25288;
count__24309_25272 = G__25289;
i__24310_25273 = G__25290;
continue;
}
} else {
}
}
break;
}

return React.DOM.abbr.apply(null,a__9338__auto__);
};
var abbr = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25291__i = 0, G__25291__a = new Array(arguments.length -  0);
while (G__25291__i < G__25291__a.length) {G__25291__a[G__25291__i] = arguments[G__25291__i + 0]; ++G__25291__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25291__a,0);
} 
return abbr__delegate.call(this,args__9337__auto__);};
abbr.cljs$lang$maxFixedArity = 0;
abbr.cljs$lang$applyTo = (function (arglist__25292){
var args__9337__auto__ = cljs.core.seq(arglist__25292);
return abbr__delegate(args__9337__auto__);
});
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__delegate;
return abbr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.address = (function() { 
var address__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24315_25293 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24316_25294 = null;
var count__24317_25295 = (0);
var i__24318_25296 = (0);
while(true){
if((i__24318_25296 < count__24317_25295)){
var arg__9339__auto___25297 = cljs.core._nth.call(null,chunk__24316_25294,i__24318_25296);
a__9338__auto__.push(arg__9339__auto___25297);

var G__25298 = seq__24315_25293;
var G__25299 = chunk__24316_25294;
var G__25300 = count__24317_25295;
var G__25301 = (i__24318_25296 + (1));
seq__24315_25293 = G__25298;
chunk__24316_25294 = G__25299;
count__24317_25295 = G__25300;
i__24318_25296 = G__25301;
continue;
} else {
var temp__4126__auto___25302 = cljs.core.seq.call(null,seq__24315_25293);
if(temp__4126__auto___25302){
var seq__24315_25303__$1 = temp__4126__auto___25302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24315_25303__$1)){
var c__4559__auto___25304 = cljs.core.chunk_first.call(null,seq__24315_25303__$1);
var G__25305 = cljs.core.chunk_rest.call(null,seq__24315_25303__$1);
var G__25306 = c__4559__auto___25304;
var G__25307 = cljs.core.count.call(null,c__4559__auto___25304);
var G__25308 = (0);
seq__24315_25293 = G__25305;
chunk__24316_25294 = G__25306;
count__24317_25295 = G__25307;
i__24318_25296 = G__25308;
continue;
} else {
var arg__9339__auto___25309 = cljs.core.first.call(null,seq__24315_25303__$1);
a__9338__auto__.push(arg__9339__auto___25309);

var G__25310 = cljs.core.next.call(null,seq__24315_25303__$1);
var G__25311 = null;
var G__25312 = (0);
var G__25313 = (0);
seq__24315_25293 = G__25310;
chunk__24316_25294 = G__25311;
count__24317_25295 = G__25312;
i__24318_25296 = G__25313;
continue;
}
} else {
}
}
break;
}

return React.DOM.address.apply(null,a__9338__auto__);
};
var address = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25314__i = 0, G__25314__a = new Array(arguments.length -  0);
while (G__25314__i < G__25314__a.length) {G__25314__a[G__25314__i] = arguments[G__25314__i + 0]; ++G__25314__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25314__a,0);
} 
return address__delegate.call(this,args__9337__auto__);};
address.cljs$lang$maxFixedArity = 0;
address.cljs$lang$applyTo = (function (arglist__25315){
var args__9337__auto__ = cljs.core.seq(arglist__25315);
return address__delegate(args__9337__auto__);
});
address.cljs$core$IFn$_invoke$arity$variadic = address__delegate;
return address;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.area = (function() { 
var area__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24323_25316 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24324_25317 = null;
var count__24325_25318 = (0);
var i__24326_25319 = (0);
while(true){
if((i__24326_25319 < count__24325_25318)){
var arg__9339__auto___25320 = cljs.core._nth.call(null,chunk__24324_25317,i__24326_25319);
a__9338__auto__.push(arg__9339__auto___25320);

var G__25321 = seq__24323_25316;
var G__25322 = chunk__24324_25317;
var G__25323 = count__24325_25318;
var G__25324 = (i__24326_25319 + (1));
seq__24323_25316 = G__25321;
chunk__24324_25317 = G__25322;
count__24325_25318 = G__25323;
i__24326_25319 = G__25324;
continue;
} else {
var temp__4126__auto___25325 = cljs.core.seq.call(null,seq__24323_25316);
if(temp__4126__auto___25325){
var seq__24323_25326__$1 = temp__4126__auto___25325;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24323_25326__$1)){
var c__4559__auto___25327 = cljs.core.chunk_first.call(null,seq__24323_25326__$1);
var G__25328 = cljs.core.chunk_rest.call(null,seq__24323_25326__$1);
var G__25329 = c__4559__auto___25327;
var G__25330 = cljs.core.count.call(null,c__4559__auto___25327);
var G__25331 = (0);
seq__24323_25316 = G__25328;
chunk__24324_25317 = G__25329;
count__24325_25318 = G__25330;
i__24326_25319 = G__25331;
continue;
} else {
var arg__9339__auto___25332 = cljs.core.first.call(null,seq__24323_25326__$1);
a__9338__auto__.push(arg__9339__auto___25332);

var G__25333 = cljs.core.next.call(null,seq__24323_25326__$1);
var G__25334 = null;
var G__25335 = (0);
var G__25336 = (0);
seq__24323_25316 = G__25333;
chunk__24324_25317 = G__25334;
count__24325_25318 = G__25335;
i__24326_25319 = G__25336;
continue;
}
} else {
}
}
break;
}

return React.DOM.area.apply(null,a__9338__auto__);
};
var area = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25337__i = 0, G__25337__a = new Array(arguments.length -  0);
while (G__25337__i < G__25337__a.length) {G__25337__a[G__25337__i] = arguments[G__25337__i + 0]; ++G__25337__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25337__a,0);
} 
return area__delegate.call(this,args__9337__auto__);};
area.cljs$lang$maxFixedArity = 0;
area.cljs$lang$applyTo = (function (arglist__25338){
var args__9337__auto__ = cljs.core.seq(arglist__25338);
return area__delegate(args__9337__auto__);
});
area.cljs$core$IFn$_invoke$arity$variadic = area__delegate;
return area;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.article = (function() { 
var article__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24331_25339 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24332_25340 = null;
var count__24333_25341 = (0);
var i__24334_25342 = (0);
while(true){
if((i__24334_25342 < count__24333_25341)){
var arg__9339__auto___25343 = cljs.core._nth.call(null,chunk__24332_25340,i__24334_25342);
a__9338__auto__.push(arg__9339__auto___25343);

var G__25344 = seq__24331_25339;
var G__25345 = chunk__24332_25340;
var G__25346 = count__24333_25341;
var G__25347 = (i__24334_25342 + (1));
seq__24331_25339 = G__25344;
chunk__24332_25340 = G__25345;
count__24333_25341 = G__25346;
i__24334_25342 = G__25347;
continue;
} else {
var temp__4126__auto___25348 = cljs.core.seq.call(null,seq__24331_25339);
if(temp__4126__auto___25348){
var seq__24331_25349__$1 = temp__4126__auto___25348;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24331_25349__$1)){
var c__4559__auto___25350 = cljs.core.chunk_first.call(null,seq__24331_25349__$1);
var G__25351 = cljs.core.chunk_rest.call(null,seq__24331_25349__$1);
var G__25352 = c__4559__auto___25350;
var G__25353 = cljs.core.count.call(null,c__4559__auto___25350);
var G__25354 = (0);
seq__24331_25339 = G__25351;
chunk__24332_25340 = G__25352;
count__24333_25341 = G__25353;
i__24334_25342 = G__25354;
continue;
} else {
var arg__9339__auto___25355 = cljs.core.first.call(null,seq__24331_25349__$1);
a__9338__auto__.push(arg__9339__auto___25355);

var G__25356 = cljs.core.next.call(null,seq__24331_25349__$1);
var G__25357 = null;
var G__25358 = (0);
var G__25359 = (0);
seq__24331_25339 = G__25356;
chunk__24332_25340 = G__25357;
count__24333_25341 = G__25358;
i__24334_25342 = G__25359;
continue;
}
} else {
}
}
break;
}

return React.DOM.article.apply(null,a__9338__auto__);
};
var article = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25360__i = 0, G__25360__a = new Array(arguments.length -  0);
while (G__25360__i < G__25360__a.length) {G__25360__a[G__25360__i] = arguments[G__25360__i + 0]; ++G__25360__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25360__a,0);
} 
return article__delegate.call(this,args__9337__auto__);};
article.cljs$lang$maxFixedArity = 0;
article.cljs$lang$applyTo = (function (arglist__25361){
var args__9337__auto__ = cljs.core.seq(arglist__25361);
return article__delegate(args__9337__auto__);
});
article.cljs$core$IFn$_invoke$arity$variadic = article__delegate;
return article;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.aside = (function() { 
var aside__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24339_25362 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24340_25363 = null;
var count__24341_25364 = (0);
var i__24342_25365 = (0);
while(true){
if((i__24342_25365 < count__24341_25364)){
var arg__9339__auto___25366 = cljs.core._nth.call(null,chunk__24340_25363,i__24342_25365);
a__9338__auto__.push(arg__9339__auto___25366);

var G__25367 = seq__24339_25362;
var G__25368 = chunk__24340_25363;
var G__25369 = count__24341_25364;
var G__25370 = (i__24342_25365 + (1));
seq__24339_25362 = G__25367;
chunk__24340_25363 = G__25368;
count__24341_25364 = G__25369;
i__24342_25365 = G__25370;
continue;
} else {
var temp__4126__auto___25371 = cljs.core.seq.call(null,seq__24339_25362);
if(temp__4126__auto___25371){
var seq__24339_25372__$1 = temp__4126__auto___25371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24339_25372__$1)){
var c__4559__auto___25373 = cljs.core.chunk_first.call(null,seq__24339_25372__$1);
var G__25374 = cljs.core.chunk_rest.call(null,seq__24339_25372__$1);
var G__25375 = c__4559__auto___25373;
var G__25376 = cljs.core.count.call(null,c__4559__auto___25373);
var G__25377 = (0);
seq__24339_25362 = G__25374;
chunk__24340_25363 = G__25375;
count__24341_25364 = G__25376;
i__24342_25365 = G__25377;
continue;
} else {
var arg__9339__auto___25378 = cljs.core.first.call(null,seq__24339_25372__$1);
a__9338__auto__.push(arg__9339__auto___25378);

var G__25379 = cljs.core.next.call(null,seq__24339_25372__$1);
var G__25380 = null;
var G__25381 = (0);
var G__25382 = (0);
seq__24339_25362 = G__25379;
chunk__24340_25363 = G__25380;
count__24341_25364 = G__25381;
i__24342_25365 = G__25382;
continue;
}
} else {
}
}
break;
}

return React.DOM.aside.apply(null,a__9338__auto__);
};
var aside = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25383__i = 0, G__25383__a = new Array(arguments.length -  0);
while (G__25383__i < G__25383__a.length) {G__25383__a[G__25383__i] = arguments[G__25383__i + 0]; ++G__25383__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25383__a,0);
} 
return aside__delegate.call(this,args__9337__auto__);};
aside.cljs$lang$maxFixedArity = 0;
aside.cljs$lang$applyTo = (function (arglist__25384){
var args__9337__auto__ = cljs.core.seq(arglist__25384);
return aside__delegate(args__9337__auto__);
});
aside.cljs$core$IFn$_invoke$arity$variadic = aside__delegate;
return aside;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.audio = (function() { 
var audio__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24347_25385 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24348_25386 = null;
var count__24349_25387 = (0);
var i__24350_25388 = (0);
while(true){
if((i__24350_25388 < count__24349_25387)){
var arg__9339__auto___25389 = cljs.core._nth.call(null,chunk__24348_25386,i__24350_25388);
a__9338__auto__.push(arg__9339__auto___25389);

var G__25390 = seq__24347_25385;
var G__25391 = chunk__24348_25386;
var G__25392 = count__24349_25387;
var G__25393 = (i__24350_25388 + (1));
seq__24347_25385 = G__25390;
chunk__24348_25386 = G__25391;
count__24349_25387 = G__25392;
i__24350_25388 = G__25393;
continue;
} else {
var temp__4126__auto___25394 = cljs.core.seq.call(null,seq__24347_25385);
if(temp__4126__auto___25394){
var seq__24347_25395__$1 = temp__4126__auto___25394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24347_25395__$1)){
var c__4559__auto___25396 = cljs.core.chunk_first.call(null,seq__24347_25395__$1);
var G__25397 = cljs.core.chunk_rest.call(null,seq__24347_25395__$1);
var G__25398 = c__4559__auto___25396;
var G__25399 = cljs.core.count.call(null,c__4559__auto___25396);
var G__25400 = (0);
seq__24347_25385 = G__25397;
chunk__24348_25386 = G__25398;
count__24349_25387 = G__25399;
i__24350_25388 = G__25400;
continue;
} else {
var arg__9339__auto___25401 = cljs.core.first.call(null,seq__24347_25395__$1);
a__9338__auto__.push(arg__9339__auto___25401);

var G__25402 = cljs.core.next.call(null,seq__24347_25395__$1);
var G__25403 = null;
var G__25404 = (0);
var G__25405 = (0);
seq__24347_25385 = G__25402;
chunk__24348_25386 = G__25403;
count__24349_25387 = G__25404;
i__24350_25388 = G__25405;
continue;
}
} else {
}
}
break;
}

return React.DOM.audio.apply(null,a__9338__auto__);
};
var audio = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25406__i = 0, G__25406__a = new Array(arguments.length -  0);
while (G__25406__i < G__25406__a.length) {G__25406__a[G__25406__i] = arguments[G__25406__i + 0]; ++G__25406__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25406__a,0);
} 
return audio__delegate.call(this,args__9337__auto__);};
audio.cljs$lang$maxFixedArity = 0;
audio.cljs$lang$applyTo = (function (arglist__25407){
var args__9337__auto__ = cljs.core.seq(arglist__25407);
return audio__delegate(args__9337__auto__);
});
audio.cljs$core$IFn$_invoke$arity$variadic = audio__delegate;
return audio;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.b = (function() { 
var b__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24355_25408 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24356_25409 = null;
var count__24357_25410 = (0);
var i__24358_25411 = (0);
while(true){
if((i__24358_25411 < count__24357_25410)){
var arg__9339__auto___25412 = cljs.core._nth.call(null,chunk__24356_25409,i__24358_25411);
a__9338__auto__.push(arg__9339__auto___25412);

var G__25413 = seq__24355_25408;
var G__25414 = chunk__24356_25409;
var G__25415 = count__24357_25410;
var G__25416 = (i__24358_25411 + (1));
seq__24355_25408 = G__25413;
chunk__24356_25409 = G__25414;
count__24357_25410 = G__25415;
i__24358_25411 = G__25416;
continue;
} else {
var temp__4126__auto___25417 = cljs.core.seq.call(null,seq__24355_25408);
if(temp__4126__auto___25417){
var seq__24355_25418__$1 = temp__4126__auto___25417;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24355_25418__$1)){
var c__4559__auto___25419 = cljs.core.chunk_first.call(null,seq__24355_25418__$1);
var G__25420 = cljs.core.chunk_rest.call(null,seq__24355_25418__$1);
var G__25421 = c__4559__auto___25419;
var G__25422 = cljs.core.count.call(null,c__4559__auto___25419);
var G__25423 = (0);
seq__24355_25408 = G__25420;
chunk__24356_25409 = G__25421;
count__24357_25410 = G__25422;
i__24358_25411 = G__25423;
continue;
} else {
var arg__9339__auto___25424 = cljs.core.first.call(null,seq__24355_25418__$1);
a__9338__auto__.push(arg__9339__auto___25424);

var G__25425 = cljs.core.next.call(null,seq__24355_25418__$1);
var G__25426 = null;
var G__25427 = (0);
var G__25428 = (0);
seq__24355_25408 = G__25425;
chunk__24356_25409 = G__25426;
count__24357_25410 = G__25427;
i__24358_25411 = G__25428;
continue;
}
} else {
}
}
break;
}

return React.DOM.b.apply(null,a__9338__auto__);
};
var b = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25429__i = 0, G__25429__a = new Array(arguments.length -  0);
while (G__25429__i < G__25429__a.length) {G__25429__a[G__25429__i] = arguments[G__25429__i + 0]; ++G__25429__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25429__a,0);
} 
return b__delegate.call(this,args__9337__auto__);};
b.cljs$lang$maxFixedArity = 0;
b.cljs$lang$applyTo = (function (arglist__25430){
var args__9337__auto__ = cljs.core.seq(arglist__25430);
return b__delegate(args__9337__auto__);
});
b.cljs$core$IFn$_invoke$arity$variadic = b__delegate;
return b;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.base = (function() { 
var base__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24363_25431 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24364_25432 = null;
var count__24365_25433 = (0);
var i__24366_25434 = (0);
while(true){
if((i__24366_25434 < count__24365_25433)){
var arg__9339__auto___25435 = cljs.core._nth.call(null,chunk__24364_25432,i__24366_25434);
a__9338__auto__.push(arg__9339__auto___25435);

var G__25436 = seq__24363_25431;
var G__25437 = chunk__24364_25432;
var G__25438 = count__24365_25433;
var G__25439 = (i__24366_25434 + (1));
seq__24363_25431 = G__25436;
chunk__24364_25432 = G__25437;
count__24365_25433 = G__25438;
i__24366_25434 = G__25439;
continue;
} else {
var temp__4126__auto___25440 = cljs.core.seq.call(null,seq__24363_25431);
if(temp__4126__auto___25440){
var seq__24363_25441__$1 = temp__4126__auto___25440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24363_25441__$1)){
var c__4559__auto___25442 = cljs.core.chunk_first.call(null,seq__24363_25441__$1);
var G__25443 = cljs.core.chunk_rest.call(null,seq__24363_25441__$1);
var G__25444 = c__4559__auto___25442;
var G__25445 = cljs.core.count.call(null,c__4559__auto___25442);
var G__25446 = (0);
seq__24363_25431 = G__25443;
chunk__24364_25432 = G__25444;
count__24365_25433 = G__25445;
i__24366_25434 = G__25446;
continue;
} else {
var arg__9339__auto___25447 = cljs.core.first.call(null,seq__24363_25441__$1);
a__9338__auto__.push(arg__9339__auto___25447);

var G__25448 = cljs.core.next.call(null,seq__24363_25441__$1);
var G__25449 = null;
var G__25450 = (0);
var G__25451 = (0);
seq__24363_25431 = G__25448;
chunk__24364_25432 = G__25449;
count__24365_25433 = G__25450;
i__24366_25434 = G__25451;
continue;
}
} else {
}
}
break;
}

return React.DOM.base.apply(null,a__9338__auto__);
};
var base = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25452__i = 0, G__25452__a = new Array(arguments.length -  0);
while (G__25452__i < G__25452__a.length) {G__25452__a[G__25452__i] = arguments[G__25452__i + 0]; ++G__25452__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25452__a,0);
} 
return base__delegate.call(this,args__9337__auto__);};
base.cljs$lang$maxFixedArity = 0;
base.cljs$lang$applyTo = (function (arglist__25453){
var args__9337__auto__ = cljs.core.seq(arglist__25453);
return base__delegate(args__9337__auto__);
});
base.cljs$core$IFn$_invoke$arity$variadic = base__delegate;
return base;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.bdi = (function() { 
var bdi__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24371_25454 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24372_25455 = null;
var count__24373_25456 = (0);
var i__24374_25457 = (0);
while(true){
if((i__24374_25457 < count__24373_25456)){
var arg__9339__auto___25458 = cljs.core._nth.call(null,chunk__24372_25455,i__24374_25457);
a__9338__auto__.push(arg__9339__auto___25458);

var G__25459 = seq__24371_25454;
var G__25460 = chunk__24372_25455;
var G__25461 = count__24373_25456;
var G__25462 = (i__24374_25457 + (1));
seq__24371_25454 = G__25459;
chunk__24372_25455 = G__25460;
count__24373_25456 = G__25461;
i__24374_25457 = G__25462;
continue;
} else {
var temp__4126__auto___25463 = cljs.core.seq.call(null,seq__24371_25454);
if(temp__4126__auto___25463){
var seq__24371_25464__$1 = temp__4126__auto___25463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24371_25464__$1)){
var c__4559__auto___25465 = cljs.core.chunk_first.call(null,seq__24371_25464__$1);
var G__25466 = cljs.core.chunk_rest.call(null,seq__24371_25464__$1);
var G__25467 = c__4559__auto___25465;
var G__25468 = cljs.core.count.call(null,c__4559__auto___25465);
var G__25469 = (0);
seq__24371_25454 = G__25466;
chunk__24372_25455 = G__25467;
count__24373_25456 = G__25468;
i__24374_25457 = G__25469;
continue;
} else {
var arg__9339__auto___25470 = cljs.core.first.call(null,seq__24371_25464__$1);
a__9338__auto__.push(arg__9339__auto___25470);

var G__25471 = cljs.core.next.call(null,seq__24371_25464__$1);
var G__25472 = null;
var G__25473 = (0);
var G__25474 = (0);
seq__24371_25454 = G__25471;
chunk__24372_25455 = G__25472;
count__24373_25456 = G__25473;
i__24374_25457 = G__25474;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdi.apply(null,a__9338__auto__);
};
var bdi = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25475__i = 0, G__25475__a = new Array(arguments.length -  0);
while (G__25475__i < G__25475__a.length) {G__25475__a[G__25475__i] = arguments[G__25475__i + 0]; ++G__25475__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25475__a,0);
} 
return bdi__delegate.call(this,args__9337__auto__);};
bdi.cljs$lang$maxFixedArity = 0;
bdi.cljs$lang$applyTo = (function (arglist__25476){
var args__9337__auto__ = cljs.core.seq(arglist__25476);
return bdi__delegate(args__9337__auto__);
});
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__delegate;
return bdi;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.bdo = (function() { 
var bdo__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24379_25477 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24380_25478 = null;
var count__24381_25479 = (0);
var i__24382_25480 = (0);
while(true){
if((i__24382_25480 < count__24381_25479)){
var arg__9339__auto___25481 = cljs.core._nth.call(null,chunk__24380_25478,i__24382_25480);
a__9338__auto__.push(arg__9339__auto___25481);

var G__25482 = seq__24379_25477;
var G__25483 = chunk__24380_25478;
var G__25484 = count__24381_25479;
var G__25485 = (i__24382_25480 + (1));
seq__24379_25477 = G__25482;
chunk__24380_25478 = G__25483;
count__24381_25479 = G__25484;
i__24382_25480 = G__25485;
continue;
} else {
var temp__4126__auto___25486 = cljs.core.seq.call(null,seq__24379_25477);
if(temp__4126__auto___25486){
var seq__24379_25487__$1 = temp__4126__auto___25486;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24379_25487__$1)){
var c__4559__auto___25488 = cljs.core.chunk_first.call(null,seq__24379_25487__$1);
var G__25489 = cljs.core.chunk_rest.call(null,seq__24379_25487__$1);
var G__25490 = c__4559__auto___25488;
var G__25491 = cljs.core.count.call(null,c__4559__auto___25488);
var G__25492 = (0);
seq__24379_25477 = G__25489;
chunk__24380_25478 = G__25490;
count__24381_25479 = G__25491;
i__24382_25480 = G__25492;
continue;
} else {
var arg__9339__auto___25493 = cljs.core.first.call(null,seq__24379_25487__$1);
a__9338__auto__.push(arg__9339__auto___25493);

var G__25494 = cljs.core.next.call(null,seq__24379_25487__$1);
var G__25495 = null;
var G__25496 = (0);
var G__25497 = (0);
seq__24379_25477 = G__25494;
chunk__24380_25478 = G__25495;
count__24381_25479 = G__25496;
i__24382_25480 = G__25497;
continue;
}
} else {
}
}
break;
}

return React.DOM.bdo.apply(null,a__9338__auto__);
};
var bdo = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25498__i = 0, G__25498__a = new Array(arguments.length -  0);
while (G__25498__i < G__25498__a.length) {G__25498__a[G__25498__i] = arguments[G__25498__i + 0]; ++G__25498__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25498__a,0);
} 
return bdo__delegate.call(this,args__9337__auto__);};
bdo.cljs$lang$maxFixedArity = 0;
bdo.cljs$lang$applyTo = (function (arglist__25499){
var args__9337__auto__ = cljs.core.seq(arglist__25499);
return bdo__delegate(args__9337__auto__);
});
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__delegate;
return bdo;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.big = (function() { 
var big__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24387_25500 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24388_25501 = null;
var count__24389_25502 = (0);
var i__24390_25503 = (0);
while(true){
if((i__24390_25503 < count__24389_25502)){
var arg__9339__auto___25504 = cljs.core._nth.call(null,chunk__24388_25501,i__24390_25503);
a__9338__auto__.push(arg__9339__auto___25504);

var G__25505 = seq__24387_25500;
var G__25506 = chunk__24388_25501;
var G__25507 = count__24389_25502;
var G__25508 = (i__24390_25503 + (1));
seq__24387_25500 = G__25505;
chunk__24388_25501 = G__25506;
count__24389_25502 = G__25507;
i__24390_25503 = G__25508;
continue;
} else {
var temp__4126__auto___25509 = cljs.core.seq.call(null,seq__24387_25500);
if(temp__4126__auto___25509){
var seq__24387_25510__$1 = temp__4126__auto___25509;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24387_25510__$1)){
var c__4559__auto___25511 = cljs.core.chunk_first.call(null,seq__24387_25510__$1);
var G__25512 = cljs.core.chunk_rest.call(null,seq__24387_25510__$1);
var G__25513 = c__4559__auto___25511;
var G__25514 = cljs.core.count.call(null,c__4559__auto___25511);
var G__25515 = (0);
seq__24387_25500 = G__25512;
chunk__24388_25501 = G__25513;
count__24389_25502 = G__25514;
i__24390_25503 = G__25515;
continue;
} else {
var arg__9339__auto___25516 = cljs.core.first.call(null,seq__24387_25510__$1);
a__9338__auto__.push(arg__9339__auto___25516);

var G__25517 = cljs.core.next.call(null,seq__24387_25510__$1);
var G__25518 = null;
var G__25519 = (0);
var G__25520 = (0);
seq__24387_25500 = G__25517;
chunk__24388_25501 = G__25518;
count__24389_25502 = G__25519;
i__24390_25503 = G__25520;
continue;
}
} else {
}
}
break;
}

return React.DOM.big.apply(null,a__9338__auto__);
};
var big = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25521__i = 0, G__25521__a = new Array(arguments.length -  0);
while (G__25521__i < G__25521__a.length) {G__25521__a[G__25521__i] = arguments[G__25521__i + 0]; ++G__25521__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25521__a,0);
} 
return big__delegate.call(this,args__9337__auto__);};
big.cljs$lang$maxFixedArity = 0;
big.cljs$lang$applyTo = (function (arglist__25522){
var args__9337__auto__ = cljs.core.seq(arglist__25522);
return big__delegate(args__9337__auto__);
});
big.cljs$core$IFn$_invoke$arity$variadic = big__delegate;
return big;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.blockquote = (function() { 
var blockquote__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24395_25523 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24396_25524 = null;
var count__24397_25525 = (0);
var i__24398_25526 = (0);
while(true){
if((i__24398_25526 < count__24397_25525)){
var arg__9339__auto___25527 = cljs.core._nth.call(null,chunk__24396_25524,i__24398_25526);
a__9338__auto__.push(arg__9339__auto___25527);

var G__25528 = seq__24395_25523;
var G__25529 = chunk__24396_25524;
var G__25530 = count__24397_25525;
var G__25531 = (i__24398_25526 + (1));
seq__24395_25523 = G__25528;
chunk__24396_25524 = G__25529;
count__24397_25525 = G__25530;
i__24398_25526 = G__25531;
continue;
} else {
var temp__4126__auto___25532 = cljs.core.seq.call(null,seq__24395_25523);
if(temp__4126__auto___25532){
var seq__24395_25533__$1 = temp__4126__auto___25532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24395_25533__$1)){
var c__4559__auto___25534 = cljs.core.chunk_first.call(null,seq__24395_25533__$1);
var G__25535 = cljs.core.chunk_rest.call(null,seq__24395_25533__$1);
var G__25536 = c__4559__auto___25534;
var G__25537 = cljs.core.count.call(null,c__4559__auto___25534);
var G__25538 = (0);
seq__24395_25523 = G__25535;
chunk__24396_25524 = G__25536;
count__24397_25525 = G__25537;
i__24398_25526 = G__25538;
continue;
} else {
var arg__9339__auto___25539 = cljs.core.first.call(null,seq__24395_25533__$1);
a__9338__auto__.push(arg__9339__auto___25539);

var G__25540 = cljs.core.next.call(null,seq__24395_25533__$1);
var G__25541 = null;
var G__25542 = (0);
var G__25543 = (0);
seq__24395_25523 = G__25540;
chunk__24396_25524 = G__25541;
count__24397_25525 = G__25542;
i__24398_25526 = G__25543;
continue;
}
} else {
}
}
break;
}

return React.DOM.blockquote.apply(null,a__9338__auto__);
};
var blockquote = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25544__i = 0, G__25544__a = new Array(arguments.length -  0);
while (G__25544__i < G__25544__a.length) {G__25544__a[G__25544__i] = arguments[G__25544__i + 0]; ++G__25544__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25544__a,0);
} 
return blockquote__delegate.call(this,args__9337__auto__);};
blockquote.cljs$lang$maxFixedArity = 0;
blockquote.cljs$lang$applyTo = (function (arglist__25545){
var args__9337__auto__ = cljs.core.seq(arglist__25545);
return blockquote__delegate(args__9337__auto__);
});
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__delegate;
return blockquote;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.body = (function() { 
var body__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24403_25546 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24404_25547 = null;
var count__24405_25548 = (0);
var i__24406_25549 = (0);
while(true){
if((i__24406_25549 < count__24405_25548)){
var arg__9339__auto___25550 = cljs.core._nth.call(null,chunk__24404_25547,i__24406_25549);
a__9338__auto__.push(arg__9339__auto___25550);

var G__25551 = seq__24403_25546;
var G__25552 = chunk__24404_25547;
var G__25553 = count__24405_25548;
var G__25554 = (i__24406_25549 + (1));
seq__24403_25546 = G__25551;
chunk__24404_25547 = G__25552;
count__24405_25548 = G__25553;
i__24406_25549 = G__25554;
continue;
} else {
var temp__4126__auto___25555 = cljs.core.seq.call(null,seq__24403_25546);
if(temp__4126__auto___25555){
var seq__24403_25556__$1 = temp__4126__auto___25555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24403_25556__$1)){
var c__4559__auto___25557 = cljs.core.chunk_first.call(null,seq__24403_25556__$1);
var G__25558 = cljs.core.chunk_rest.call(null,seq__24403_25556__$1);
var G__25559 = c__4559__auto___25557;
var G__25560 = cljs.core.count.call(null,c__4559__auto___25557);
var G__25561 = (0);
seq__24403_25546 = G__25558;
chunk__24404_25547 = G__25559;
count__24405_25548 = G__25560;
i__24406_25549 = G__25561;
continue;
} else {
var arg__9339__auto___25562 = cljs.core.first.call(null,seq__24403_25556__$1);
a__9338__auto__.push(arg__9339__auto___25562);

var G__25563 = cljs.core.next.call(null,seq__24403_25556__$1);
var G__25564 = null;
var G__25565 = (0);
var G__25566 = (0);
seq__24403_25546 = G__25563;
chunk__24404_25547 = G__25564;
count__24405_25548 = G__25565;
i__24406_25549 = G__25566;
continue;
}
} else {
}
}
break;
}

return React.DOM.body.apply(null,a__9338__auto__);
};
var body = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25567__i = 0, G__25567__a = new Array(arguments.length -  0);
while (G__25567__i < G__25567__a.length) {G__25567__a[G__25567__i] = arguments[G__25567__i + 0]; ++G__25567__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25567__a,0);
} 
return body__delegate.call(this,args__9337__auto__);};
body.cljs$lang$maxFixedArity = 0;
body.cljs$lang$applyTo = (function (arglist__25568){
var args__9337__auto__ = cljs.core.seq(arglist__25568);
return body__delegate(args__9337__auto__);
});
body.cljs$core$IFn$_invoke$arity$variadic = body__delegate;
return body;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.br = (function() { 
var br__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24411_25569 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24412_25570 = null;
var count__24413_25571 = (0);
var i__24414_25572 = (0);
while(true){
if((i__24414_25572 < count__24413_25571)){
var arg__9339__auto___25573 = cljs.core._nth.call(null,chunk__24412_25570,i__24414_25572);
a__9338__auto__.push(arg__9339__auto___25573);

var G__25574 = seq__24411_25569;
var G__25575 = chunk__24412_25570;
var G__25576 = count__24413_25571;
var G__25577 = (i__24414_25572 + (1));
seq__24411_25569 = G__25574;
chunk__24412_25570 = G__25575;
count__24413_25571 = G__25576;
i__24414_25572 = G__25577;
continue;
} else {
var temp__4126__auto___25578 = cljs.core.seq.call(null,seq__24411_25569);
if(temp__4126__auto___25578){
var seq__24411_25579__$1 = temp__4126__auto___25578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24411_25579__$1)){
var c__4559__auto___25580 = cljs.core.chunk_first.call(null,seq__24411_25579__$1);
var G__25581 = cljs.core.chunk_rest.call(null,seq__24411_25579__$1);
var G__25582 = c__4559__auto___25580;
var G__25583 = cljs.core.count.call(null,c__4559__auto___25580);
var G__25584 = (0);
seq__24411_25569 = G__25581;
chunk__24412_25570 = G__25582;
count__24413_25571 = G__25583;
i__24414_25572 = G__25584;
continue;
} else {
var arg__9339__auto___25585 = cljs.core.first.call(null,seq__24411_25579__$1);
a__9338__auto__.push(arg__9339__auto___25585);

var G__25586 = cljs.core.next.call(null,seq__24411_25579__$1);
var G__25587 = null;
var G__25588 = (0);
var G__25589 = (0);
seq__24411_25569 = G__25586;
chunk__24412_25570 = G__25587;
count__24413_25571 = G__25588;
i__24414_25572 = G__25589;
continue;
}
} else {
}
}
break;
}

return React.DOM.br.apply(null,a__9338__auto__);
};
var br = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25590__i = 0, G__25590__a = new Array(arguments.length -  0);
while (G__25590__i < G__25590__a.length) {G__25590__a[G__25590__i] = arguments[G__25590__i + 0]; ++G__25590__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25590__a,0);
} 
return br__delegate.call(this,args__9337__auto__);};
br.cljs$lang$maxFixedArity = 0;
br.cljs$lang$applyTo = (function (arglist__25591){
var args__9337__auto__ = cljs.core.seq(arglist__25591);
return br__delegate(args__9337__auto__);
});
br.cljs$core$IFn$_invoke$arity$variadic = br__delegate;
return br;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.button = (function() { 
var button__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24419_25592 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24420_25593 = null;
var count__24421_25594 = (0);
var i__24422_25595 = (0);
while(true){
if((i__24422_25595 < count__24421_25594)){
var arg__9339__auto___25596 = cljs.core._nth.call(null,chunk__24420_25593,i__24422_25595);
a__9338__auto__.push(arg__9339__auto___25596);

var G__25597 = seq__24419_25592;
var G__25598 = chunk__24420_25593;
var G__25599 = count__24421_25594;
var G__25600 = (i__24422_25595 + (1));
seq__24419_25592 = G__25597;
chunk__24420_25593 = G__25598;
count__24421_25594 = G__25599;
i__24422_25595 = G__25600;
continue;
} else {
var temp__4126__auto___25601 = cljs.core.seq.call(null,seq__24419_25592);
if(temp__4126__auto___25601){
var seq__24419_25602__$1 = temp__4126__auto___25601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24419_25602__$1)){
var c__4559__auto___25603 = cljs.core.chunk_first.call(null,seq__24419_25602__$1);
var G__25604 = cljs.core.chunk_rest.call(null,seq__24419_25602__$1);
var G__25605 = c__4559__auto___25603;
var G__25606 = cljs.core.count.call(null,c__4559__auto___25603);
var G__25607 = (0);
seq__24419_25592 = G__25604;
chunk__24420_25593 = G__25605;
count__24421_25594 = G__25606;
i__24422_25595 = G__25607;
continue;
} else {
var arg__9339__auto___25608 = cljs.core.first.call(null,seq__24419_25602__$1);
a__9338__auto__.push(arg__9339__auto___25608);

var G__25609 = cljs.core.next.call(null,seq__24419_25602__$1);
var G__25610 = null;
var G__25611 = (0);
var G__25612 = (0);
seq__24419_25592 = G__25609;
chunk__24420_25593 = G__25610;
count__24421_25594 = G__25611;
i__24422_25595 = G__25612;
continue;
}
} else {
}
}
break;
}

return React.DOM.button.apply(null,a__9338__auto__);
};
var button = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25613__i = 0, G__25613__a = new Array(arguments.length -  0);
while (G__25613__i < G__25613__a.length) {G__25613__a[G__25613__i] = arguments[G__25613__i + 0]; ++G__25613__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25613__a,0);
} 
return button__delegate.call(this,args__9337__auto__);};
button.cljs$lang$maxFixedArity = 0;
button.cljs$lang$applyTo = (function (arglist__25614){
var args__9337__auto__ = cljs.core.seq(arglist__25614);
return button__delegate(args__9337__auto__);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.canvas = (function() { 
var canvas__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24427_25615 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24428_25616 = null;
var count__24429_25617 = (0);
var i__24430_25618 = (0);
while(true){
if((i__24430_25618 < count__24429_25617)){
var arg__9339__auto___25619 = cljs.core._nth.call(null,chunk__24428_25616,i__24430_25618);
a__9338__auto__.push(arg__9339__auto___25619);

var G__25620 = seq__24427_25615;
var G__25621 = chunk__24428_25616;
var G__25622 = count__24429_25617;
var G__25623 = (i__24430_25618 + (1));
seq__24427_25615 = G__25620;
chunk__24428_25616 = G__25621;
count__24429_25617 = G__25622;
i__24430_25618 = G__25623;
continue;
} else {
var temp__4126__auto___25624 = cljs.core.seq.call(null,seq__24427_25615);
if(temp__4126__auto___25624){
var seq__24427_25625__$1 = temp__4126__auto___25624;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24427_25625__$1)){
var c__4559__auto___25626 = cljs.core.chunk_first.call(null,seq__24427_25625__$1);
var G__25627 = cljs.core.chunk_rest.call(null,seq__24427_25625__$1);
var G__25628 = c__4559__auto___25626;
var G__25629 = cljs.core.count.call(null,c__4559__auto___25626);
var G__25630 = (0);
seq__24427_25615 = G__25627;
chunk__24428_25616 = G__25628;
count__24429_25617 = G__25629;
i__24430_25618 = G__25630;
continue;
} else {
var arg__9339__auto___25631 = cljs.core.first.call(null,seq__24427_25625__$1);
a__9338__auto__.push(arg__9339__auto___25631);

var G__25632 = cljs.core.next.call(null,seq__24427_25625__$1);
var G__25633 = null;
var G__25634 = (0);
var G__25635 = (0);
seq__24427_25615 = G__25632;
chunk__24428_25616 = G__25633;
count__24429_25617 = G__25634;
i__24430_25618 = G__25635;
continue;
}
} else {
}
}
break;
}

return React.DOM.canvas.apply(null,a__9338__auto__);
};
var canvas = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25636__i = 0, G__25636__a = new Array(arguments.length -  0);
while (G__25636__i < G__25636__a.length) {G__25636__a[G__25636__i] = arguments[G__25636__i + 0]; ++G__25636__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25636__a,0);
} 
return canvas__delegate.call(this,args__9337__auto__);};
canvas.cljs$lang$maxFixedArity = 0;
canvas.cljs$lang$applyTo = (function (arglist__25637){
var args__9337__auto__ = cljs.core.seq(arglist__25637);
return canvas__delegate(args__9337__auto__);
});
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__delegate;
return canvas;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.caption = (function() { 
var caption__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24435_25638 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24436_25639 = null;
var count__24437_25640 = (0);
var i__24438_25641 = (0);
while(true){
if((i__24438_25641 < count__24437_25640)){
var arg__9339__auto___25642 = cljs.core._nth.call(null,chunk__24436_25639,i__24438_25641);
a__9338__auto__.push(arg__9339__auto___25642);

var G__25643 = seq__24435_25638;
var G__25644 = chunk__24436_25639;
var G__25645 = count__24437_25640;
var G__25646 = (i__24438_25641 + (1));
seq__24435_25638 = G__25643;
chunk__24436_25639 = G__25644;
count__24437_25640 = G__25645;
i__24438_25641 = G__25646;
continue;
} else {
var temp__4126__auto___25647 = cljs.core.seq.call(null,seq__24435_25638);
if(temp__4126__auto___25647){
var seq__24435_25648__$1 = temp__4126__auto___25647;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24435_25648__$1)){
var c__4559__auto___25649 = cljs.core.chunk_first.call(null,seq__24435_25648__$1);
var G__25650 = cljs.core.chunk_rest.call(null,seq__24435_25648__$1);
var G__25651 = c__4559__auto___25649;
var G__25652 = cljs.core.count.call(null,c__4559__auto___25649);
var G__25653 = (0);
seq__24435_25638 = G__25650;
chunk__24436_25639 = G__25651;
count__24437_25640 = G__25652;
i__24438_25641 = G__25653;
continue;
} else {
var arg__9339__auto___25654 = cljs.core.first.call(null,seq__24435_25648__$1);
a__9338__auto__.push(arg__9339__auto___25654);

var G__25655 = cljs.core.next.call(null,seq__24435_25648__$1);
var G__25656 = null;
var G__25657 = (0);
var G__25658 = (0);
seq__24435_25638 = G__25655;
chunk__24436_25639 = G__25656;
count__24437_25640 = G__25657;
i__24438_25641 = G__25658;
continue;
}
} else {
}
}
break;
}

return React.DOM.caption.apply(null,a__9338__auto__);
};
var caption = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25659__i = 0, G__25659__a = new Array(arguments.length -  0);
while (G__25659__i < G__25659__a.length) {G__25659__a[G__25659__i] = arguments[G__25659__i + 0]; ++G__25659__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25659__a,0);
} 
return caption__delegate.call(this,args__9337__auto__);};
caption.cljs$lang$maxFixedArity = 0;
caption.cljs$lang$applyTo = (function (arglist__25660){
var args__9337__auto__ = cljs.core.seq(arglist__25660);
return caption__delegate(args__9337__auto__);
});
caption.cljs$core$IFn$_invoke$arity$variadic = caption__delegate;
return caption;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.cite = (function() { 
var cite__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24443_25661 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24444_25662 = null;
var count__24445_25663 = (0);
var i__24446_25664 = (0);
while(true){
if((i__24446_25664 < count__24445_25663)){
var arg__9339__auto___25665 = cljs.core._nth.call(null,chunk__24444_25662,i__24446_25664);
a__9338__auto__.push(arg__9339__auto___25665);

var G__25666 = seq__24443_25661;
var G__25667 = chunk__24444_25662;
var G__25668 = count__24445_25663;
var G__25669 = (i__24446_25664 + (1));
seq__24443_25661 = G__25666;
chunk__24444_25662 = G__25667;
count__24445_25663 = G__25668;
i__24446_25664 = G__25669;
continue;
} else {
var temp__4126__auto___25670 = cljs.core.seq.call(null,seq__24443_25661);
if(temp__4126__auto___25670){
var seq__24443_25671__$1 = temp__4126__auto___25670;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24443_25671__$1)){
var c__4559__auto___25672 = cljs.core.chunk_first.call(null,seq__24443_25671__$1);
var G__25673 = cljs.core.chunk_rest.call(null,seq__24443_25671__$1);
var G__25674 = c__4559__auto___25672;
var G__25675 = cljs.core.count.call(null,c__4559__auto___25672);
var G__25676 = (0);
seq__24443_25661 = G__25673;
chunk__24444_25662 = G__25674;
count__24445_25663 = G__25675;
i__24446_25664 = G__25676;
continue;
} else {
var arg__9339__auto___25677 = cljs.core.first.call(null,seq__24443_25671__$1);
a__9338__auto__.push(arg__9339__auto___25677);

var G__25678 = cljs.core.next.call(null,seq__24443_25671__$1);
var G__25679 = null;
var G__25680 = (0);
var G__25681 = (0);
seq__24443_25661 = G__25678;
chunk__24444_25662 = G__25679;
count__24445_25663 = G__25680;
i__24446_25664 = G__25681;
continue;
}
} else {
}
}
break;
}

return React.DOM.cite.apply(null,a__9338__auto__);
};
var cite = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25682__i = 0, G__25682__a = new Array(arguments.length -  0);
while (G__25682__i < G__25682__a.length) {G__25682__a[G__25682__i] = arguments[G__25682__i + 0]; ++G__25682__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25682__a,0);
} 
return cite__delegate.call(this,args__9337__auto__);};
cite.cljs$lang$maxFixedArity = 0;
cite.cljs$lang$applyTo = (function (arglist__25683){
var args__9337__auto__ = cljs.core.seq(arglist__25683);
return cite__delegate(args__9337__auto__);
});
cite.cljs$core$IFn$_invoke$arity$variadic = cite__delegate;
return cite;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.code = (function() { 
var code__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24451_25684 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24452_25685 = null;
var count__24453_25686 = (0);
var i__24454_25687 = (0);
while(true){
if((i__24454_25687 < count__24453_25686)){
var arg__9339__auto___25688 = cljs.core._nth.call(null,chunk__24452_25685,i__24454_25687);
a__9338__auto__.push(arg__9339__auto___25688);

var G__25689 = seq__24451_25684;
var G__25690 = chunk__24452_25685;
var G__25691 = count__24453_25686;
var G__25692 = (i__24454_25687 + (1));
seq__24451_25684 = G__25689;
chunk__24452_25685 = G__25690;
count__24453_25686 = G__25691;
i__24454_25687 = G__25692;
continue;
} else {
var temp__4126__auto___25693 = cljs.core.seq.call(null,seq__24451_25684);
if(temp__4126__auto___25693){
var seq__24451_25694__$1 = temp__4126__auto___25693;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24451_25694__$1)){
var c__4559__auto___25695 = cljs.core.chunk_first.call(null,seq__24451_25694__$1);
var G__25696 = cljs.core.chunk_rest.call(null,seq__24451_25694__$1);
var G__25697 = c__4559__auto___25695;
var G__25698 = cljs.core.count.call(null,c__4559__auto___25695);
var G__25699 = (0);
seq__24451_25684 = G__25696;
chunk__24452_25685 = G__25697;
count__24453_25686 = G__25698;
i__24454_25687 = G__25699;
continue;
} else {
var arg__9339__auto___25700 = cljs.core.first.call(null,seq__24451_25694__$1);
a__9338__auto__.push(arg__9339__auto___25700);

var G__25701 = cljs.core.next.call(null,seq__24451_25694__$1);
var G__25702 = null;
var G__25703 = (0);
var G__25704 = (0);
seq__24451_25684 = G__25701;
chunk__24452_25685 = G__25702;
count__24453_25686 = G__25703;
i__24454_25687 = G__25704;
continue;
}
} else {
}
}
break;
}

return React.DOM.code.apply(null,a__9338__auto__);
};
var code = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25705__i = 0, G__25705__a = new Array(arguments.length -  0);
while (G__25705__i < G__25705__a.length) {G__25705__a[G__25705__i] = arguments[G__25705__i + 0]; ++G__25705__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25705__a,0);
} 
return code__delegate.call(this,args__9337__auto__);};
code.cljs$lang$maxFixedArity = 0;
code.cljs$lang$applyTo = (function (arglist__25706){
var args__9337__auto__ = cljs.core.seq(arglist__25706);
return code__delegate(args__9337__auto__);
});
code.cljs$core$IFn$_invoke$arity$variadic = code__delegate;
return code;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.col = (function() { 
var col__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24459_25707 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24460_25708 = null;
var count__24461_25709 = (0);
var i__24462_25710 = (0);
while(true){
if((i__24462_25710 < count__24461_25709)){
var arg__9339__auto___25711 = cljs.core._nth.call(null,chunk__24460_25708,i__24462_25710);
a__9338__auto__.push(arg__9339__auto___25711);

var G__25712 = seq__24459_25707;
var G__25713 = chunk__24460_25708;
var G__25714 = count__24461_25709;
var G__25715 = (i__24462_25710 + (1));
seq__24459_25707 = G__25712;
chunk__24460_25708 = G__25713;
count__24461_25709 = G__25714;
i__24462_25710 = G__25715;
continue;
} else {
var temp__4126__auto___25716 = cljs.core.seq.call(null,seq__24459_25707);
if(temp__4126__auto___25716){
var seq__24459_25717__$1 = temp__4126__auto___25716;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24459_25717__$1)){
var c__4559__auto___25718 = cljs.core.chunk_first.call(null,seq__24459_25717__$1);
var G__25719 = cljs.core.chunk_rest.call(null,seq__24459_25717__$1);
var G__25720 = c__4559__auto___25718;
var G__25721 = cljs.core.count.call(null,c__4559__auto___25718);
var G__25722 = (0);
seq__24459_25707 = G__25719;
chunk__24460_25708 = G__25720;
count__24461_25709 = G__25721;
i__24462_25710 = G__25722;
continue;
} else {
var arg__9339__auto___25723 = cljs.core.first.call(null,seq__24459_25717__$1);
a__9338__auto__.push(arg__9339__auto___25723);

var G__25724 = cljs.core.next.call(null,seq__24459_25717__$1);
var G__25725 = null;
var G__25726 = (0);
var G__25727 = (0);
seq__24459_25707 = G__25724;
chunk__24460_25708 = G__25725;
count__24461_25709 = G__25726;
i__24462_25710 = G__25727;
continue;
}
} else {
}
}
break;
}

return React.DOM.col.apply(null,a__9338__auto__);
};
var col = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25728__i = 0, G__25728__a = new Array(arguments.length -  0);
while (G__25728__i < G__25728__a.length) {G__25728__a[G__25728__i] = arguments[G__25728__i + 0]; ++G__25728__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25728__a,0);
} 
return col__delegate.call(this,args__9337__auto__);};
col.cljs$lang$maxFixedArity = 0;
col.cljs$lang$applyTo = (function (arglist__25729){
var args__9337__auto__ = cljs.core.seq(arglist__25729);
return col__delegate(args__9337__auto__);
});
col.cljs$core$IFn$_invoke$arity$variadic = col__delegate;
return col;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.colgroup = (function() { 
var colgroup__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24467_25730 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24468_25731 = null;
var count__24469_25732 = (0);
var i__24470_25733 = (0);
while(true){
if((i__24470_25733 < count__24469_25732)){
var arg__9339__auto___25734 = cljs.core._nth.call(null,chunk__24468_25731,i__24470_25733);
a__9338__auto__.push(arg__9339__auto___25734);

var G__25735 = seq__24467_25730;
var G__25736 = chunk__24468_25731;
var G__25737 = count__24469_25732;
var G__25738 = (i__24470_25733 + (1));
seq__24467_25730 = G__25735;
chunk__24468_25731 = G__25736;
count__24469_25732 = G__25737;
i__24470_25733 = G__25738;
continue;
} else {
var temp__4126__auto___25739 = cljs.core.seq.call(null,seq__24467_25730);
if(temp__4126__auto___25739){
var seq__24467_25740__$1 = temp__4126__auto___25739;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24467_25740__$1)){
var c__4559__auto___25741 = cljs.core.chunk_first.call(null,seq__24467_25740__$1);
var G__25742 = cljs.core.chunk_rest.call(null,seq__24467_25740__$1);
var G__25743 = c__4559__auto___25741;
var G__25744 = cljs.core.count.call(null,c__4559__auto___25741);
var G__25745 = (0);
seq__24467_25730 = G__25742;
chunk__24468_25731 = G__25743;
count__24469_25732 = G__25744;
i__24470_25733 = G__25745;
continue;
} else {
var arg__9339__auto___25746 = cljs.core.first.call(null,seq__24467_25740__$1);
a__9338__auto__.push(arg__9339__auto___25746);

var G__25747 = cljs.core.next.call(null,seq__24467_25740__$1);
var G__25748 = null;
var G__25749 = (0);
var G__25750 = (0);
seq__24467_25730 = G__25747;
chunk__24468_25731 = G__25748;
count__24469_25732 = G__25749;
i__24470_25733 = G__25750;
continue;
}
} else {
}
}
break;
}

return React.DOM.colgroup.apply(null,a__9338__auto__);
};
var colgroup = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25751__i = 0, G__25751__a = new Array(arguments.length -  0);
while (G__25751__i < G__25751__a.length) {G__25751__a[G__25751__i] = arguments[G__25751__i + 0]; ++G__25751__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25751__a,0);
} 
return colgroup__delegate.call(this,args__9337__auto__);};
colgroup.cljs$lang$maxFixedArity = 0;
colgroup.cljs$lang$applyTo = (function (arglist__25752){
var args__9337__auto__ = cljs.core.seq(arglist__25752);
return colgroup__delegate(args__9337__auto__);
});
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__delegate;
return colgroup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.data = (function() { 
var data__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24475_25753 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24476_25754 = null;
var count__24477_25755 = (0);
var i__24478_25756 = (0);
while(true){
if((i__24478_25756 < count__24477_25755)){
var arg__9339__auto___25757 = cljs.core._nth.call(null,chunk__24476_25754,i__24478_25756);
a__9338__auto__.push(arg__9339__auto___25757);

var G__25758 = seq__24475_25753;
var G__25759 = chunk__24476_25754;
var G__25760 = count__24477_25755;
var G__25761 = (i__24478_25756 + (1));
seq__24475_25753 = G__25758;
chunk__24476_25754 = G__25759;
count__24477_25755 = G__25760;
i__24478_25756 = G__25761;
continue;
} else {
var temp__4126__auto___25762 = cljs.core.seq.call(null,seq__24475_25753);
if(temp__4126__auto___25762){
var seq__24475_25763__$1 = temp__4126__auto___25762;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24475_25763__$1)){
var c__4559__auto___25764 = cljs.core.chunk_first.call(null,seq__24475_25763__$1);
var G__25765 = cljs.core.chunk_rest.call(null,seq__24475_25763__$1);
var G__25766 = c__4559__auto___25764;
var G__25767 = cljs.core.count.call(null,c__4559__auto___25764);
var G__25768 = (0);
seq__24475_25753 = G__25765;
chunk__24476_25754 = G__25766;
count__24477_25755 = G__25767;
i__24478_25756 = G__25768;
continue;
} else {
var arg__9339__auto___25769 = cljs.core.first.call(null,seq__24475_25763__$1);
a__9338__auto__.push(arg__9339__auto___25769);

var G__25770 = cljs.core.next.call(null,seq__24475_25763__$1);
var G__25771 = null;
var G__25772 = (0);
var G__25773 = (0);
seq__24475_25753 = G__25770;
chunk__24476_25754 = G__25771;
count__24477_25755 = G__25772;
i__24478_25756 = G__25773;
continue;
}
} else {
}
}
break;
}

return React.DOM.data.apply(null,a__9338__auto__);
};
var data = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25774__i = 0, G__25774__a = new Array(arguments.length -  0);
while (G__25774__i < G__25774__a.length) {G__25774__a[G__25774__i] = arguments[G__25774__i + 0]; ++G__25774__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25774__a,0);
} 
return data__delegate.call(this,args__9337__auto__);};
data.cljs$lang$maxFixedArity = 0;
data.cljs$lang$applyTo = (function (arglist__25775){
var args__9337__auto__ = cljs.core.seq(arglist__25775);
return data__delegate(args__9337__auto__);
});
data.cljs$core$IFn$_invoke$arity$variadic = data__delegate;
return data;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.datalist = (function() { 
var datalist__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24483_25776 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24484_25777 = null;
var count__24485_25778 = (0);
var i__24486_25779 = (0);
while(true){
if((i__24486_25779 < count__24485_25778)){
var arg__9339__auto___25780 = cljs.core._nth.call(null,chunk__24484_25777,i__24486_25779);
a__9338__auto__.push(arg__9339__auto___25780);

var G__25781 = seq__24483_25776;
var G__25782 = chunk__24484_25777;
var G__25783 = count__24485_25778;
var G__25784 = (i__24486_25779 + (1));
seq__24483_25776 = G__25781;
chunk__24484_25777 = G__25782;
count__24485_25778 = G__25783;
i__24486_25779 = G__25784;
continue;
} else {
var temp__4126__auto___25785 = cljs.core.seq.call(null,seq__24483_25776);
if(temp__4126__auto___25785){
var seq__24483_25786__$1 = temp__4126__auto___25785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24483_25786__$1)){
var c__4559__auto___25787 = cljs.core.chunk_first.call(null,seq__24483_25786__$1);
var G__25788 = cljs.core.chunk_rest.call(null,seq__24483_25786__$1);
var G__25789 = c__4559__auto___25787;
var G__25790 = cljs.core.count.call(null,c__4559__auto___25787);
var G__25791 = (0);
seq__24483_25776 = G__25788;
chunk__24484_25777 = G__25789;
count__24485_25778 = G__25790;
i__24486_25779 = G__25791;
continue;
} else {
var arg__9339__auto___25792 = cljs.core.first.call(null,seq__24483_25786__$1);
a__9338__auto__.push(arg__9339__auto___25792);

var G__25793 = cljs.core.next.call(null,seq__24483_25786__$1);
var G__25794 = null;
var G__25795 = (0);
var G__25796 = (0);
seq__24483_25776 = G__25793;
chunk__24484_25777 = G__25794;
count__24485_25778 = G__25795;
i__24486_25779 = G__25796;
continue;
}
} else {
}
}
break;
}

return React.DOM.datalist.apply(null,a__9338__auto__);
};
var datalist = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25797__i = 0, G__25797__a = new Array(arguments.length -  0);
while (G__25797__i < G__25797__a.length) {G__25797__a[G__25797__i] = arguments[G__25797__i + 0]; ++G__25797__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25797__a,0);
} 
return datalist__delegate.call(this,args__9337__auto__);};
datalist.cljs$lang$maxFixedArity = 0;
datalist.cljs$lang$applyTo = (function (arglist__25798){
var args__9337__auto__ = cljs.core.seq(arglist__25798);
return datalist__delegate(args__9337__auto__);
});
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__delegate;
return datalist;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dd = (function() { 
var dd__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24491_25799 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24492_25800 = null;
var count__24493_25801 = (0);
var i__24494_25802 = (0);
while(true){
if((i__24494_25802 < count__24493_25801)){
var arg__9339__auto___25803 = cljs.core._nth.call(null,chunk__24492_25800,i__24494_25802);
a__9338__auto__.push(arg__9339__auto___25803);

var G__25804 = seq__24491_25799;
var G__25805 = chunk__24492_25800;
var G__25806 = count__24493_25801;
var G__25807 = (i__24494_25802 + (1));
seq__24491_25799 = G__25804;
chunk__24492_25800 = G__25805;
count__24493_25801 = G__25806;
i__24494_25802 = G__25807;
continue;
} else {
var temp__4126__auto___25808 = cljs.core.seq.call(null,seq__24491_25799);
if(temp__4126__auto___25808){
var seq__24491_25809__$1 = temp__4126__auto___25808;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24491_25809__$1)){
var c__4559__auto___25810 = cljs.core.chunk_first.call(null,seq__24491_25809__$1);
var G__25811 = cljs.core.chunk_rest.call(null,seq__24491_25809__$1);
var G__25812 = c__4559__auto___25810;
var G__25813 = cljs.core.count.call(null,c__4559__auto___25810);
var G__25814 = (0);
seq__24491_25799 = G__25811;
chunk__24492_25800 = G__25812;
count__24493_25801 = G__25813;
i__24494_25802 = G__25814;
continue;
} else {
var arg__9339__auto___25815 = cljs.core.first.call(null,seq__24491_25809__$1);
a__9338__auto__.push(arg__9339__auto___25815);

var G__25816 = cljs.core.next.call(null,seq__24491_25809__$1);
var G__25817 = null;
var G__25818 = (0);
var G__25819 = (0);
seq__24491_25799 = G__25816;
chunk__24492_25800 = G__25817;
count__24493_25801 = G__25818;
i__24494_25802 = G__25819;
continue;
}
} else {
}
}
break;
}

return React.DOM.dd.apply(null,a__9338__auto__);
};
var dd = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25820__i = 0, G__25820__a = new Array(arguments.length -  0);
while (G__25820__i < G__25820__a.length) {G__25820__a[G__25820__i] = arguments[G__25820__i + 0]; ++G__25820__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25820__a,0);
} 
return dd__delegate.call(this,args__9337__auto__);};
dd.cljs$lang$maxFixedArity = 0;
dd.cljs$lang$applyTo = (function (arglist__25821){
var args__9337__auto__ = cljs.core.seq(arglist__25821);
return dd__delegate(args__9337__auto__);
});
dd.cljs$core$IFn$_invoke$arity$variadic = dd__delegate;
return dd;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.del = (function() { 
var del__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24499_25822 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24500_25823 = null;
var count__24501_25824 = (0);
var i__24502_25825 = (0);
while(true){
if((i__24502_25825 < count__24501_25824)){
var arg__9339__auto___25826 = cljs.core._nth.call(null,chunk__24500_25823,i__24502_25825);
a__9338__auto__.push(arg__9339__auto___25826);

var G__25827 = seq__24499_25822;
var G__25828 = chunk__24500_25823;
var G__25829 = count__24501_25824;
var G__25830 = (i__24502_25825 + (1));
seq__24499_25822 = G__25827;
chunk__24500_25823 = G__25828;
count__24501_25824 = G__25829;
i__24502_25825 = G__25830;
continue;
} else {
var temp__4126__auto___25831 = cljs.core.seq.call(null,seq__24499_25822);
if(temp__4126__auto___25831){
var seq__24499_25832__$1 = temp__4126__auto___25831;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24499_25832__$1)){
var c__4559__auto___25833 = cljs.core.chunk_first.call(null,seq__24499_25832__$1);
var G__25834 = cljs.core.chunk_rest.call(null,seq__24499_25832__$1);
var G__25835 = c__4559__auto___25833;
var G__25836 = cljs.core.count.call(null,c__4559__auto___25833);
var G__25837 = (0);
seq__24499_25822 = G__25834;
chunk__24500_25823 = G__25835;
count__24501_25824 = G__25836;
i__24502_25825 = G__25837;
continue;
} else {
var arg__9339__auto___25838 = cljs.core.first.call(null,seq__24499_25832__$1);
a__9338__auto__.push(arg__9339__auto___25838);

var G__25839 = cljs.core.next.call(null,seq__24499_25832__$1);
var G__25840 = null;
var G__25841 = (0);
var G__25842 = (0);
seq__24499_25822 = G__25839;
chunk__24500_25823 = G__25840;
count__24501_25824 = G__25841;
i__24502_25825 = G__25842;
continue;
}
} else {
}
}
break;
}

return React.DOM.del.apply(null,a__9338__auto__);
};
var del = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25843__i = 0, G__25843__a = new Array(arguments.length -  0);
while (G__25843__i < G__25843__a.length) {G__25843__a[G__25843__i] = arguments[G__25843__i + 0]; ++G__25843__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25843__a,0);
} 
return del__delegate.call(this,args__9337__auto__);};
del.cljs$lang$maxFixedArity = 0;
del.cljs$lang$applyTo = (function (arglist__25844){
var args__9337__auto__ = cljs.core.seq(arglist__25844);
return del__delegate(args__9337__auto__);
});
del.cljs$core$IFn$_invoke$arity$variadic = del__delegate;
return del;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.details = (function() { 
var details__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24507_25845 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24508_25846 = null;
var count__24509_25847 = (0);
var i__24510_25848 = (0);
while(true){
if((i__24510_25848 < count__24509_25847)){
var arg__9339__auto___25849 = cljs.core._nth.call(null,chunk__24508_25846,i__24510_25848);
a__9338__auto__.push(arg__9339__auto___25849);

var G__25850 = seq__24507_25845;
var G__25851 = chunk__24508_25846;
var G__25852 = count__24509_25847;
var G__25853 = (i__24510_25848 + (1));
seq__24507_25845 = G__25850;
chunk__24508_25846 = G__25851;
count__24509_25847 = G__25852;
i__24510_25848 = G__25853;
continue;
} else {
var temp__4126__auto___25854 = cljs.core.seq.call(null,seq__24507_25845);
if(temp__4126__auto___25854){
var seq__24507_25855__$1 = temp__4126__auto___25854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24507_25855__$1)){
var c__4559__auto___25856 = cljs.core.chunk_first.call(null,seq__24507_25855__$1);
var G__25857 = cljs.core.chunk_rest.call(null,seq__24507_25855__$1);
var G__25858 = c__4559__auto___25856;
var G__25859 = cljs.core.count.call(null,c__4559__auto___25856);
var G__25860 = (0);
seq__24507_25845 = G__25857;
chunk__24508_25846 = G__25858;
count__24509_25847 = G__25859;
i__24510_25848 = G__25860;
continue;
} else {
var arg__9339__auto___25861 = cljs.core.first.call(null,seq__24507_25855__$1);
a__9338__auto__.push(arg__9339__auto___25861);

var G__25862 = cljs.core.next.call(null,seq__24507_25855__$1);
var G__25863 = null;
var G__25864 = (0);
var G__25865 = (0);
seq__24507_25845 = G__25862;
chunk__24508_25846 = G__25863;
count__24509_25847 = G__25864;
i__24510_25848 = G__25865;
continue;
}
} else {
}
}
break;
}

return React.DOM.details.apply(null,a__9338__auto__);
};
var details = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25866__i = 0, G__25866__a = new Array(arguments.length -  0);
while (G__25866__i < G__25866__a.length) {G__25866__a[G__25866__i] = arguments[G__25866__i + 0]; ++G__25866__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25866__a,0);
} 
return details__delegate.call(this,args__9337__auto__);};
details.cljs$lang$maxFixedArity = 0;
details.cljs$lang$applyTo = (function (arglist__25867){
var args__9337__auto__ = cljs.core.seq(arglist__25867);
return details__delegate(args__9337__auto__);
});
details.cljs$core$IFn$_invoke$arity$variadic = details__delegate;
return details;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dfn = (function() { 
var dfn__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24515_25868 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24516_25869 = null;
var count__24517_25870 = (0);
var i__24518_25871 = (0);
while(true){
if((i__24518_25871 < count__24517_25870)){
var arg__9339__auto___25872 = cljs.core._nth.call(null,chunk__24516_25869,i__24518_25871);
a__9338__auto__.push(arg__9339__auto___25872);

var G__25873 = seq__24515_25868;
var G__25874 = chunk__24516_25869;
var G__25875 = count__24517_25870;
var G__25876 = (i__24518_25871 + (1));
seq__24515_25868 = G__25873;
chunk__24516_25869 = G__25874;
count__24517_25870 = G__25875;
i__24518_25871 = G__25876;
continue;
} else {
var temp__4126__auto___25877 = cljs.core.seq.call(null,seq__24515_25868);
if(temp__4126__auto___25877){
var seq__24515_25878__$1 = temp__4126__auto___25877;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24515_25878__$1)){
var c__4559__auto___25879 = cljs.core.chunk_first.call(null,seq__24515_25878__$1);
var G__25880 = cljs.core.chunk_rest.call(null,seq__24515_25878__$1);
var G__25881 = c__4559__auto___25879;
var G__25882 = cljs.core.count.call(null,c__4559__auto___25879);
var G__25883 = (0);
seq__24515_25868 = G__25880;
chunk__24516_25869 = G__25881;
count__24517_25870 = G__25882;
i__24518_25871 = G__25883;
continue;
} else {
var arg__9339__auto___25884 = cljs.core.first.call(null,seq__24515_25878__$1);
a__9338__auto__.push(arg__9339__auto___25884);

var G__25885 = cljs.core.next.call(null,seq__24515_25878__$1);
var G__25886 = null;
var G__25887 = (0);
var G__25888 = (0);
seq__24515_25868 = G__25885;
chunk__24516_25869 = G__25886;
count__24517_25870 = G__25887;
i__24518_25871 = G__25888;
continue;
}
} else {
}
}
break;
}

return React.DOM.dfn.apply(null,a__9338__auto__);
};
var dfn = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25889__i = 0, G__25889__a = new Array(arguments.length -  0);
while (G__25889__i < G__25889__a.length) {G__25889__a[G__25889__i] = arguments[G__25889__i + 0]; ++G__25889__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25889__a,0);
} 
return dfn__delegate.call(this,args__9337__auto__);};
dfn.cljs$lang$maxFixedArity = 0;
dfn.cljs$lang$applyTo = (function (arglist__25890){
var args__9337__auto__ = cljs.core.seq(arglist__25890);
return dfn__delegate(args__9337__auto__);
});
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__delegate;
return dfn;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.div = (function() { 
var div__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24523_25891 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24524_25892 = null;
var count__24525_25893 = (0);
var i__24526_25894 = (0);
while(true){
if((i__24526_25894 < count__24525_25893)){
var arg__9339__auto___25895 = cljs.core._nth.call(null,chunk__24524_25892,i__24526_25894);
a__9338__auto__.push(arg__9339__auto___25895);

var G__25896 = seq__24523_25891;
var G__25897 = chunk__24524_25892;
var G__25898 = count__24525_25893;
var G__25899 = (i__24526_25894 + (1));
seq__24523_25891 = G__25896;
chunk__24524_25892 = G__25897;
count__24525_25893 = G__25898;
i__24526_25894 = G__25899;
continue;
} else {
var temp__4126__auto___25900 = cljs.core.seq.call(null,seq__24523_25891);
if(temp__4126__auto___25900){
var seq__24523_25901__$1 = temp__4126__auto___25900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24523_25901__$1)){
var c__4559__auto___25902 = cljs.core.chunk_first.call(null,seq__24523_25901__$1);
var G__25903 = cljs.core.chunk_rest.call(null,seq__24523_25901__$1);
var G__25904 = c__4559__auto___25902;
var G__25905 = cljs.core.count.call(null,c__4559__auto___25902);
var G__25906 = (0);
seq__24523_25891 = G__25903;
chunk__24524_25892 = G__25904;
count__24525_25893 = G__25905;
i__24526_25894 = G__25906;
continue;
} else {
var arg__9339__auto___25907 = cljs.core.first.call(null,seq__24523_25901__$1);
a__9338__auto__.push(arg__9339__auto___25907);

var G__25908 = cljs.core.next.call(null,seq__24523_25901__$1);
var G__25909 = null;
var G__25910 = (0);
var G__25911 = (0);
seq__24523_25891 = G__25908;
chunk__24524_25892 = G__25909;
count__24525_25893 = G__25910;
i__24526_25894 = G__25911;
continue;
}
} else {
}
}
break;
}

return React.DOM.div.apply(null,a__9338__auto__);
};
var div = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25912__i = 0, G__25912__a = new Array(arguments.length -  0);
while (G__25912__i < G__25912__a.length) {G__25912__a[G__25912__i] = arguments[G__25912__i + 0]; ++G__25912__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25912__a,0);
} 
return div__delegate.call(this,args__9337__auto__);};
div.cljs$lang$maxFixedArity = 0;
div.cljs$lang$applyTo = (function (arglist__25913){
var args__9337__auto__ = cljs.core.seq(arglist__25913);
return div__delegate(args__9337__auto__);
});
div.cljs$core$IFn$_invoke$arity$variadic = div__delegate;
return div;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dl = (function() { 
var dl__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24531_25914 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24532_25915 = null;
var count__24533_25916 = (0);
var i__24534_25917 = (0);
while(true){
if((i__24534_25917 < count__24533_25916)){
var arg__9339__auto___25918 = cljs.core._nth.call(null,chunk__24532_25915,i__24534_25917);
a__9338__auto__.push(arg__9339__auto___25918);

var G__25919 = seq__24531_25914;
var G__25920 = chunk__24532_25915;
var G__25921 = count__24533_25916;
var G__25922 = (i__24534_25917 + (1));
seq__24531_25914 = G__25919;
chunk__24532_25915 = G__25920;
count__24533_25916 = G__25921;
i__24534_25917 = G__25922;
continue;
} else {
var temp__4126__auto___25923 = cljs.core.seq.call(null,seq__24531_25914);
if(temp__4126__auto___25923){
var seq__24531_25924__$1 = temp__4126__auto___25923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24531_25924__$1)){
var c__4559__auto___25925 = cljs.core.chunk_first.call(null,seq__24531_25924__$1);
var G__25926 = cljs.core.chunk_rest.call(null,seq__24531_25924__$1);
var G__25927 = c__4559__auto___25925;
var G__25928 = cljs.core.count.call(null,c__4559__auto___25925);
var G__25929 = (0);
seq__24531_25914 = G__25926;
chunk__24532_25915 = G__25927;
count__24533_25916 = G__25928;
i__24534_25917 = G__25929;
continue;
} else {
var arg__9339__auto___25930 = cljs.core.first.call(null,seq__24531_25924__$1);
a__9338__auto__.push(arg__9339__auto___25930);

var G__25931 = cljs.core.next.call(null,seq__24531_25924__$1);
var G__25932 = null;
var G__25933 = (0);
var G__25934 = (0);
seq__24531_25914 = G__25931;
chunk__24532_25915 = G__25932;
count__24533_25916 = G__25933;
i__24534_25917 = G__25934;
continue;
}
} else {
}
}
break;
}

return React.DOM.dl.apply(null,a__9338__auto__);
};
var dl = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25935__i = 0, G__25935__a = new Array(arguments.length -  0);
while (G__25935__i < G__25935__a.length) {G__25935__a[G__25935__i] = arguments[G__25935__i + 0]; ++G__25935__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25935__a,0);
} 
return dl__delegate.call(this,args__9337__auto__);};
dl.cljs$lang$maxFixedArity = 0;
dl.cljs$lang$applyTo = (function (arglist__25936){
var args__9337__auto__ = cljs.core.seq(arglist__25936);
return dl__delegate(args__9337__auto__);
});
dl.cljs$core$IFn$_invoke$arity$variadic = dl__delegate;
return dl;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.dt = (function() { 
var dt__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24539_25937 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24540_25938 = null;
var count__24541_25939 = (0);
var i__24542_25940 = (0);
while(true){
if((i__24542_25940 < count__24541_25939)){
var arg__9339__auto___25941 = cljs.core._nth.call(null,chunk__24540_25938,i__24542_25940);
a__9338__auto__.push(arg__9339__auto___25941);

var G__25942 = seq__24539_25937;
var G__25943 = chunk__24540_25938;
var G__25944 = count__24541_25939;
var G__25945 = (i__24542_25940 + (1));
seq__24539_25937 = G__25942;
chunk__24540_25938 = G__25943;
count__24541_25939 = G__25944;
i__24542_25940 = G__25945;
continue;
} else {
var temp__4126__auto___25946 = cljs.core.seq.call(null,seq__24539_25937);
if(temp__4126__auto___25946){
var seq__24539_25947__$1 = temp__4126__auto___25946;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24539_25947__$1)){
var c__4559__auto___25948 = cljs.core.chunk_first.call(null,seq__24539_25947__$1);
var G__25949 = cljs.core.chunk_rest.call(null,seq__24539_25947__$1);
var G__25950 = c__4559__auto___25948;
var G__25951 = cljs.core.count.call(null,c__4559__auto___25948);
var G__25952 = (0);
seq__24539_25937 = G__25949;
chunk__24540_25938 = G__25950;
count__24541_25939 = G__25951;
i__24542_25940 = G__25952;
continue;
} else {
var arg__9339__auto___25953 = cljs.core.first.call(null,seq__24539_25947__$1);
a__9338__auto__.push(arg__9339__auto___25953);

var G__25954 = cljs.core.next.call(null,seq__24539_25947__$1);
var G__25955 = null;
var G__25956 = (0);
var G__25957 = (0);
seq__24539_25937 = G__25954;
chunk__24540_25938 = G__25955;
count__24541_25939 = G__25956;
i__24542_25940 = G__25957;
continue;
}
} else {
}
}
break;
}

return React.DOM.dt.apply(null,a__9338__auto__);
};
var dt = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25958__i = 0, G__25958__a = new Array(arguments.length -  0);
while (G__25958__i < G__25958__a.length) {G__25958__a[G__25958__i] = arguments[G__25958__i + 0]; ++G__25958__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25958__a,0);
} 
return dt__delegate.call(this,args__9337__auto__);};
dt.cljs$lang$maxFixedArity = 0;
dt.cljs$lang$applyTo = (function (arglist__25959){
var args__9337__auto__ = cljs.core.seq(arglist__25959);
return dt__delegate(args__9337__auto__);
});
dt.cljs$core$IFn$_invoke$arity$variadic = dt__delegate;
return dt;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.em = (function() { 
var em__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24547_25960 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24548_25961 = null;
var count__24549_25962 = (0);
var i__24550_25963 = (0);
while(true){
if((i__24550_25963 < count__24549_25962)){
var arg__9339__auto___25964 = cljs.core._nth.call(null,chunk__24548_25961,i__24550_25963);
a__9338__auto__.push(arg__9339__auto___25964);

var G__25965 = seq__24547_25960;
var G__25966 = chunk__24548_25961;
var G__25967 = count__24549_25962;
var G__25968 = (i__24550_25963 + (1));
seq__24547_25960 = G__25965;
chunk__24548_25961 = G__25966;
count__24549_25962 = G__25967;
i__24550_25963 = G__25968;
continue;
} else {
var temp__4126__auto___25969 = cljs.core.seq.call(null,seq__24547_25960);
if(temp__4126__auto___25969){
var seq__24547_25970__$1 = temp__4126__auto___25969;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24547_25970__$1)){
var c__4559__auto___25971 = cljs.core.chunk_first.call(null,seq__24547_25970__$1);
var G__25972 = cljs.core.chunk_rest.call(null,seq__24547_25970__$1);
var G__25973 = c__4559__auto___25971;
var G__25974 = cljs.core.count.call(null,c__4559__auto___25971);
var G__25975 = (0);
seq__24547_25960 = G__25972;
chunk__24548_25961 = G__25973;
count__24549_25962 = G__25974;
i__24550_25963 = G__25975;
continue;
} else {
var arg__9339__auto___25976 = cljs.core.first.call(null,seq__24547_25970__$1);
a__9338__auto__.push(arg__9339__auto___25976);

var G__25977 = cljs.core.next.call(null,seq__24547_25970__$1);
var G__25978 = null;
var G__25979 = (0);
var G__25980 = (0);
seq__24547_25960 = G__25977;
chunk__24548_25961 = G__25978;
count__24549_25962 = G__25979;
i__24550_25963 = G__25980;
continue;
}
} else {
}
}
break;
}

return React.DOM.em.apply(null,a__9338__auto__);
};
var em = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__25981__i = 0, G__25981__a = new Array(arguments.length -  0);
while (G__25981__i < G__25981__a.length) {G__25981__a[G__25981__i] = arguments[G__25981__i + 0]; ++G__25981__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__25981__a,0);
} 
return em__delegate.call(this,args__9337__auto__);};
em.cljs$lang$maxFixedArity = 0;
em.cljs$lang$applyTo = (function (arglist__25982){
var args__9337__auto__ = cljs.core.seq(arglist__25982);
return em__delegate(args__9337__auto__);
});
em.cljs$core$IFn$_invoke$arity$variadic = em__delegate;
return em;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.embed = (function() { 
var embed__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24563_25983 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24564_25984 = null;
var count__24565_25985 = (0);
var i__24566_25986 = (0);
while(true){
if((i__24566_25986 < count__24565_25985)){
var arg__9339__auto___25987 = cljs.core._nth.call(null,chunk__24564_25984,i__24566_25986);
a__9338__auto__.push(arg__9339__auto___25987);

var G__25988 = seq__24563_25983;
var G__25989 = chunk__24564_25984;
var G__25990 = count__24565_25985;
var G__25991 = (i__24566_25986 + (1));
seq__24563_25983 = G__25988;
chunk__24564_25984 = G__25989;
count__24565_25985 = G__25990;
i__24566_25986 = G__25991;
continue;
} else {
var temp__4126__auto___25992 = cljs.core.seq.call(null,seq__24563_25983);
if(temp__4126__auto___25992){
var seq__24563_25993__$1 = temp__4126__auto___25992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24563_25993__$1)){
var c__4559__auto___25994 = cljs.core.chunk_first.call(null,seq__24563_25993__$1);
var G__25995 = cljs.core.chunk_rest.call(null,seq__24563_25993__$1);
var G__25996 = c__4559__auto___25994;
var G__25997 = cljs.core.count.call(null,c__4559__auto___25994);
var G__25998 = (0);
seq__24563_25983 = G__25995;
chunk__24564_25984 = G__25996;
count__24565_25985 = G__25997;
i__24566_25986 = G__25998;
continue;
} else {
var arg__9339__auto___25999 = cljs.core.first.call(null,seq__24563_25993__$1);
a__9338__auto__.push(arg__9339__auto___25999);

var G__26000 = cljs.core.next.call(null,seq__24563_25993__$1);
var G__26001 = null;
var G__26002 = (0);
var G__26003 = (0);
seq__24563_25983 = G__26000;
chunk__24564_25984 = G__26001;
count__24565_25985 = G__26002;
i__24566_25986 = G__26003;
continue;
}
} else {
}
}
break;
}

return React.DOM.embed.apply(null,a__9338__auto__);
};
var embed = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26004__i = 0, G__26004__a = new Array(arguments.length -  0);
while (G__26004__i < G__26004__a.length) {G__26004__a[G__26004__i] = arguments[G__26004__i + 0]; ++G__26004__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26004__a,0);
} 
return embed__delegate.call(this,args__9337__auto__);};
embed.cljs$lang$maxFixedArity = 0;
embed.cljs$lang$applyTo = (function (arglist__26005){
var args__9337__auto__ = cljs.core.seq(arglist__26005);
return embed__delegate(args__9337__auto__);
});
embed.cljs$core$IFn$_invoke$arity$variadic = embed__delegate;
return embed;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.fieldset = (function() { 
var fieldset__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24571_26006 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24572_26007 = null;
var count__24573_26008 = (0);
var i__24574_26009 = (0);
while(true){
if((i__24574_26009 < count__24573_26008)){
var arg__9339__auto___26010 = cljs.core._nth.call(null,chunk__24572_26007,i__24574_26009);
a__9338__auto__.push(arg__9339__auto___26010);

var G__26011 = seq__24571_26006;
var G__26012 = chunk__24572_26007;
var G__26013 = count__24573_26008;
var G__26014 = (i__24574_26009 + (1));
seq__24571_26006 = G__26011;
chunk__24572_26007 = G__26012;
count__24573_26008 = G__26013;
i__24574_26009 = G__26014;
continue;
} else {
var temp__4126__auto___26015 = cljs.core.seq.call(null,seq__24571_26006);
if(temp__4126__auto___26015){
var seq__24571_26016__$1 = temp__4126__auto___26015;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24571_26016__$1)){
var c__4559__auto___26017 = cljs.core.chunk_first.call(null,seq__24571_26016__$1);
var G__26018 = cljs.core.chunk_rest.call(null,seq__24571_26016__$1);
var G__26019 = c__4559__auto___26017;
var G__26020 = cljs.core.count.call(null,c__4559__auto___26017);
var G__26021 = (0);
seq__24571_26006 = G__26018;
chunk__24572_26007 = G__26019;
count__24573_26008 = G__26020;
i__24574_26009 = G__26021;
continue;
} else {
var arg__9339__auto___26022 = cljs.core.first.call(null,seq__24571_26016__$1);
a__9338__auto__.push(arg__9339__auto___26022);

var G__26023 = cljs.core.next.call(null,seq__24571_26016__$1);
var G__26024 = null;
var G__26025 = (0);
var G__26026 = (0);
seq__24571_26006 = G__26023;
chunk__24572_26007 = G__26024;
count__24573_26008 = G__26025;
i__24574_26009 = G__26026;
continue;
}
} else {
}
}
break;
}

return React.DOM.fieldset.apply(null,a__9338__auto__);
};
var fieldset = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26027__i = 0, G__26027__a = new Array(arguments.length -  0);
while (G__26027__i < G__26027__a.length) {G__26027__a[G__26027__i] = arguments[G__26027__i + 0]; ++G__26027__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26027__a,0);
} 
return fieldset__delegate.call(this,args__9337__auto__);};
fieldset.cljs$lang$maxFixedArity = 0;
fieldset.cljs$lang$applyTo = (function (arglist__26028){
var args__9337__auto__ = cljs.core.seq(arglist__26028);
return fieldset__delegate(args__9337__auto__);
});
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__delegate;
return fieldset;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.figcaption = (function() { 
var figcaption__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24579_26029 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24580_26030 = null;
var count__24581_26031 = (0);
var i__24582_26032 = (0);
while(true){
if((i__24582_26032 < count__24581_26031)){
var arg__9339__auto___26033 = cljs.core._nth.call(null,chunk__24580_26030,i__24582_26032);
a__9338__auto__.push(arg__9339__auto___26033);

var G__26034 = seq__24579_26029;
var G__26035 = chunk__24580_26030;
var G__26036 = count__24581_26031;
var G__26037 = (i__24582_26032 + (1));
seq__24579_26029 = G__26034;
chunk__24580_26030 = G__26035;
count__24581_26031 = G__26036;
i__24582_26032 = G__26037;
continue;
} else {
var temp__4126__auto___26038 = cljs.core.seq.call(null,seq__24579_26029);
if(temp__4126__auto___26038){
var seq__24579_26039__$1 = temp__4126__auto___26038;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24579_26039__$1)){
var c__4559__auto___26040 = cljs.core.chunk_first.call(null,seq__24579_26039__$1);
var G__26041 = cljs.core.chunk_rest.call(null,seq__24579_26039__$1);
var G__26042 = c__4559__auto___26040;
var G__26043 = cljs.core.count.call(null,c__4559__auto___26040);
var G__26044 = (0);
seq__24579_26029 = G__26041;
chunk__24580_26030 = G__26042;
count__24581_26031 = G__26043;
i__24582_26032 = G__26044;
continue;
} else {
var arg__9339__auto___26045 = cljs.core.first.call(null,seq__24579_26039__$1);
a__9338__auto__.push(arg__9339__auto___26045);

var G__26046 = cljs.core.next.call(null,seq__24579_26039__$1);
var G__26047 = null;
var G__26048 = (0);
var G__26049 = (0);
seq__24579_26029 = G__26046;
chunk__24580_26030 = G__26047;
count__24581_26031 = G__26048;
i__24582_26032 = G__26049;
continue;
}
} else {
}
}
break;
}

return React.DOM.figcaption.apply(null,a__9338__auto__);
};
var figcaption = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26050__i = 0, G__26050__a = new Array(arguments.length -  0);
while (G__26050__i < G__26050__a.length) {G__26050__a[G__26050__i] = arguments[G__26050__i + 0]; ++G__26050__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26050__a,0);
} 
return figcaption__delegate.call(this,args__9337__auto__);};
figcaption.cljs$lang$maxFixedArity = 0;
figcaption.cljs$lang$applyTo = (function (arglist__26051){
var args__9337__auto__ = cljs.core.seq(arglist__26051);
return figcaption__delegate(args__9337__auto__);
});
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__delegate;
return figcaption;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.figure = (function() { 
var figure__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24587_26052 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24588_26053 = null;
var count__24589_26054 = (0);
var i__24590_26055 = (0);
while(true){
if((i__24590_26055 < count__24589_26054)){
var arg__9339__auto___26056 = cljs.core._nth.call(null,chunk__24588_26053,i__24590_26055);
a__9338__auto__.push(arg__9339__auto___26056);

var G__26057 = seq__24587_26052;
var G__26058 = chunk__24588_26053;
var G__26059 = count__24589_26054;
var G__26060 = (i__24590_26055 + (1));
seq__24587_26052 = G__26057;
chunk__24588_26053 = G__26058;
count__24589_26054 = G__26059;
i__24590_26055 = G__26060;
continue;
} else {
var temp__4126__auto___26061 = cljs.core.seq.call(null,seq__24587_26052);
if(temp__4126__auto___26061){
var seq__24587_26062__$1 = temp__4126__auto___26061;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24587_26062__$1)){
var c__4559__auto___26063 = cljs.core.chunk_first.call(null,seq__24587_26062__$1);
var G__26064 = cljs.core.chunk_rest.call(null,seq__24587_26062__$1);
var G__26065 = c__4559__auto___26063;
var G__26066 = cljs.core.count.call(null,c__4559__auto___26063);
var G__26067 = (0);
seq__24587_26052 = G__26064;
chunk__24588_26053 = G__26065;
count__24589_26054 = G__26066;
i__24590_26055 = G__26067;
continue;
} else {
var arg__9339__auto___26068 = cljs.core.first.call(null,seq__24587_26062__$1);
a__9338__auto__.push(arg__9339__auto___26068);

var G__26069 = cljs.core.next.call(null,seq__24587_26062__$1);
var G__26070 = null;
var G__26071 = (0);
var G__26072 = (0);
seq__24587_26052 = G__26069;
chunk__24588_26053 = G__26070;
count__24589_26054 = G__26071;
i__24590_26055 = G__26072;
continue;
}
} else {
}
}
break;
}

return React.DOM.figure.apply(null,a__9338__auto__);
};
var figure = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26073__i = 0, G__26073__a = new Array(arguments.length -  0);
while (G__26073__i < G__26073__a.length) {G__26073__a[G__26073__i] = arguments[G__26073__i + 0]; ++G__26073__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26073__a,0);
} 
return figure__delegate.call(this,args__9337__auto__);};
figure.cljs$lang$maxFixedArity = 0;
figure.cljs$lang$applyTo = (function (arglist__26074){
var args__9337__auto__ = cljs.core.seq(arglist__26074);
return figure__delegate(args__9337__auto__);
});
figure.cljs$core$IFn$_invoke$arity$variadic = figure__delegate;
return figure;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.footer = (function() { 
var footer__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24595_26075 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24596_26076 = null;
var count__24597_26077 = (0);
var i__24598_26078 = (0);
while(true){
if((i__24598_26078 < count__24597_26077)){
var arg__9339__auto___26079 = cljs.core._nth.call(null,chunk__24596_26076,i__24598_26078);
a__9338__auto__.push(arg__9339__auto___26079);

var G__26080 = seq__24595_26075;
var G__26081 = chunk__24596_26076;
var G__26082 = count__24597_26077;
var G__26083 = (i__24598_26078 + (1));
seq__24595_26075 = G__26080;
chunk__24596_26076 = G__26081;
count__24597_26077 = G__26082;
i__24598_26078 = G__26083;
continue;
} else {
var temp__4126__auto___26084 = cljs.core.seq.call(null,seq__24595_26075);
if(temp__4126__auto___26084){
var seq__24595_26085__$1 = temp__4126__auto___26084;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24595_26085__$1)){
var c__4559__auto___26086 = cljs.core.chunk_first.call(null,seq__24595_26085__$1);
var G__26087 = cljs.core.chunk_rest.call(null,seq__24595_26085__$1);
var G__26088 = c__4559__auto___26086;
var G__26089 = cljs.core.count.call(null,c__4559__auto___26086);
var G__26090 = (0);
seq__24595_26075 = G__26087;
chunk__24596_26076 = G__26088;
count__24597_26077 = G__26089;
i__24598_26078 = G__26090;
continue;
} else {
var arg__9339__auto___26091 = cljs.core.first.call(null,seq__24595_26085__$1);
a__9338__auto__.push(arg__9339__auto___26091);

var G__26092 = cljs.core.next.call(null,seq__24595_26085__$1);
var G__26093 = null;
var G__26094 = (0);
var G__26095 = (0);
seq__24595_26075 = G__26092;
chunk__24596_26076 = G__26093;
count__24597_26077 = G__26094;
i__24598_26078 = G__26095;
continue;
}
} else {
}
}
break;
}

return React.DOM.footer.apply(null,a__9338__auto__);
};
var footer = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26096__i = 0, G__26096__a = new Array(arguments.length -  0);
while (G__26096__i < G__26096__a.length) {G__26096__a[G__26096__i] = arguments[G__26096__i + 0]; ++G__26096__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26096__a,0);
} 
return footer__delegate.call(this,args__9337__auto__);};
footer.cljs$lang$maxFixedArity = 0;
footer.cljs$lang$applyTo = (function (arglist__26097){
var args__9337__auto__ = cljs.core.seq(arglist__26097);
return footer__delegate(args__9337__auto__);
});
footer.cljs$core$IFn$_invoke$arity$variadic = footer__delegate;
return footer;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.form = (function() { 
var form__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24603_26098 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24604_26099 = null;
var count__24605_26100 = (0);
var i__24606_26101 = (0);
while(true){
if((i__24606_26101 < count__24605_26100)){
var arg__9339__auto___26102 = cljs.core._nth.call(null,chunk__24604_26099,i__24606_26101);
a__9338__auto__.push(arg__9339__auto___26102);

var G__26103 = seq__24603_26098;
var G__26104 = chunk__24604_26099;
var G__26105 = count__24605_26100;
var G__26106 = (i__24606_26101 + (1));
seq__24603_26098 = G__26103;
chunk__24604_26099 = G__26104;
count__24605_26100 = G__26105;
i__24606_26101 = G__26106;
continue;
} else {
var temp__4126__auto___26107 = cljs.core.seq.call(null,seq__24603_26098);
if(temp__4126__auto___26107){
var seq__24603_26108__$1 = temp__4126__auto___26107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24603_26108__$1)){
var c__4559__auto___26109 = cljs.core.chunk_first.call(null,seq__24603_26108__$1);
var G__26110 = cljs.core.chunk_rest.call(null,seq__24603_26108__$1);
var G__26111 = c__4559__auto___26109;
var G__26112 = cljs.core.count.call(null,c__4559__auto___26109);
var G__26113 = (0);
seq__24603_26098 = G__26110;
chunk__24604_26099 = G__26111;
count__24605_26100 = G__26112;
i__24606_26101 = G__26113;
continue;
} else {
var arg__9339__auto___26114 = cljs.core.first.call(null,seq__24603_26108__$1);
a__9338__auto__.push(arg__9339__auto___26114);

var G__26115 = cljs.core.next.call(null,seq__24603_26108__$1);
var G__26116 = null;
var G__26117 = (0);
var G__26118 = (0);
seq__24603_26098 = G__26115;
chunk__24604_26099 = G__26116;
count__24605_26100 = G__26117;
i__24606_26101 = G__26118;
continue;
}
} else {
}
}
break;
}

return React.DOM.form.apply(null,a__9338__auto__);
};
var form = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26119__i = 0, G__26119__a = new Array(arguments.length -  0);
while (G__26119__i < G__26119__a.length) {G__26119__a[G__26119__i] = arguments[G__26119__i + 0]; ++G__26119__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26119__a,0);
} 
return form__delegate.call(this,args__9337__auto__);};
form.cljs$lang$maxFixedArity = 0;
form.cljs$lang$applyTo = (function (arglist__26120){
var args__9337__auto__ = cljs.core.seq(arglist__26120);
return form__delegate(args__9337__auto__);
});
form.cljs$core$IFn$_invoke$arity$variadic = form__delegate;
return form;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h1 = (function() { 
var h1__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24611_26121 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24612_26122 = null;
var count__24613_26123 = (0);
var i__24614_26124 = (0);
while(true){
if((i__24614_26124 < count__24613_26123)){
var arg__9339__auto___26125 = cljs.core._nth.call(null,chunk__24612_26122,i__24614_26124);
a__9338__auto__.push(arg__9339__auto___26125);

var G__26126 = seq__24611_26121;
var G__26127 = chunk__24612_26122;
var G__26128 = count__24613_26123;
var G__26129 = (i__24614_26124 + (1));
seq__24611_26121 = G__26126;
chunk__24612_26122 = G__26127;
count__24613_26123 = G__26128;
i__24614_26124 = G__26129;
continue;
} else {
var temp__4126__auto___26130 = cljs.core.seq.call(null,seq__24611_26121);
if(temp__4126__auto___26130){
var seq__24611_26131__$1 = temp__4126__auto___26130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24611_26131__$1)){
var c__4559__auto___26132 = cljs.core.chunk_first.call(null,seq__24611_26131__$1);
var G__26133 = cljs.core.chunk_rest.call(null,seq__24611_26131__$1);
var G__26134 = c__4559__auto___26132;
var G__26135 = cljs.core.count.call(null,c__4559__auto___26132);
var G__26136 = (0);
seq__24611_26121 = G__26133;
chunk__24612_26122 = G__26134;
count__24613_26123 = G__26135;
i__24614_26124 = G__26136;
continue;
} else {
var arg__9339__auto___26137 = cljs.core.first.call(null,seq__24611_26131__$1);
a__9338__auto__.push(arg__9339__auto___26137);

var G__26138 = cljs.core.next.call(null,seq__24611_26131__$1);
var G__26139 = null;
var G__26140 = (0);
var G__26141 = (0);
seq__24611_26121 = G__26138;
chunk__24612_26122 = G__26139;
count__24613_26123 = G__26140;
i__24614_26124 = G__26141;
continue;
}
} else {
}
}
break;
}

return React.DOM.h1.apply(null,a__9338__auto__);
};
var h1 = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26142__i = 0, G__26142__a = new Array(arguments.length -  0);
while (G__26142__i < G__26142__a.length) {G__26142__a[G__26142__i] = arguments[G__26142__i + 0]; ++G__26142__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26142__a,0);
} 
return h1__delegate.call(this,args__9337__auto__);};
h1.cljs$lang$maxFixedArity = 0;
h1.cljs$lang$applyTo = (function (arglist__26143){
var args__9337__auto__ = cljs.core.seq(arglist__26143);
return h1__delegate(args__9337__auto__);
});
h1.cljs$core$IFn$_invoke$arity$variadic = h1__delegate;
return h1;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h2 = (function() { 
var h2__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24619_26144 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24620_26145 = null;
var count__24621_26146 = (0);
var i__24622_26147 = (0);
while(true){
if((i__24622_26147 < count__24621_26146)){
var arg__9339__auto___26148 = cljs.core._nth.call(null,chunk__24620_26145,i__24622_26147);
a__9338__auto__.push(arg__9339__auto___26148);

var G__26149 = seq__24619_26144;
var G__26150 = chunk__24620_26145;
var G__26151 = count__24621_26146;
var G__26152 = (i__24622_26147 + (1));
seq__24619_26144 = G__26149;
chunk__24620_26145 = G__26150;
count__24621_26146 = G__26151;
i__24622_26147 = G__26152;
continue;
} else {
var temp__4126__auto___26153 = cljs.core.seq.call(null,seq__24619_26144);
if(temp__4126__auto___26153){
var seq__24619_26154__$1 = temp__4126__auto___26153;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24619_26154__$1)){
var c__4559__auto___26155 = cljs.core.chunk_first.call(null,seq__24619_26154__$1);
var G__26156 = cljs.core.chunk_rest.call(null,seq__24619_26154__$1);
var G__26157 = c__4559__auto___26155;
var G__26158 = cljs.core.count.call(null,c__4559__auto___26155);
var G__26159 = (0);
seq__24619_26144 = G__26156;
chunk__24620_26145 = G__26157;
count__24621_26146 = G__26158;
i__24622_26147 = G__26159;
continue;
} else {
var arg__9339__auto___26160 = cljs.core.first.call(null,seq__24619_26154__$1);
a__9338__auto__.push(arg__9339__auto___26160);

var G__26161 = cljs.core.next.call(null,seq__24619_26154__$1);
var G__26162 = null;
var G__26163 = (0);
var G__26164 = (0);
seq__24619_26144 = G__26161;
chunk__24620_26145 = G__26162;
count__24621_26146 = G__26163;
i__24622_26147 = G__26164;
continue;
}
} else {
}
}
break;
}

return React.DOM.h2.apply(null,a__9338__auto__);
};
var h2 = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26165__i = 0, G__26165__a = new Array(arguments.length -  0);
while (G__26165__i < G__26165__a.length) {G__26165__a[G__26165__i] = arguments[G__26165__i + 0]; ++G__26165__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26165__a,0);
} 
return h2__delegate.call(this,args__9337__auto__);};
h2.cljs$lang$maxFixedArity = 0;
h2.cljs$lang$applyTo = (function (arglist__26166){
var args__9337__auto__ = cljs.core.seq(arglist__26166);
return h2__delegate(args__9337__auto__);
});
h2.cljs$core$IFn$_invoke$arity$variadic = h2__delegate;
return h2;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h3 = (function() { 
var h3__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24627_26167 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24628_26168 = null;
var count__24629_26169 = (0);
var i__24630_26170 = (0);
while(true){
if((i__24630_26170 < count__24629_26169)){
var arg__9339__auto___26171 = cljs.core._nth.call(null,chunk__24628_26168,i__24630_26170);
a__9338__auto__.push(arg__9339__auto___26171);

var G__26172 = seq__24627_26167;
var G__26173 = chunk__24628_26168;
var G__26174 = count__24629_26169;
var G__26175 = (i__24630_26170 + (1));
seq__24627_26167 = G__26172;
chunk__24628_26168 = G__26173;
count__24629_26169 = G__26174;
i__24630_26170 = G__26175;
continue;
} else {
var temp__4126__auto___26176 = cljs.core.seq.call(null,seq__24627_26167);
if(temp__4126__auto___26176){
var seq__24627_26177__$1 = temp__4126__auto___26176;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24627_26177__$1)){
var c__4559__auto___26178 = cljs.core.chunk_first.call(null,seq__24627_26177__$1);
var G__26179 = cljs.core.chunk_rest.call(null,seq__24627_26177__$1);
var G__26180 = c__4559__auto___26178;
var G__26181 = cljs.core.count.call(null,c__4559__auto___26178);
var G__26182 = (0);
seq__24627_26167 = G__26179;
chunk__24628_26168 = G__26180;
count__24629_26169 = G__26181;
i__24630_26170 = G__26182;
continue;
} else {
var arg__9339__auto___26183 = cljs.core.first.call(null,seq__24627_26177__$1);
a__9338__auto__.push(arg__9339__auto___26183);

var G__26184 = cljs.core.next.call(null,seq__24627_26177__$1);
var G__26185 = null;
var G__26186 = (0);
var G__26187 = (0);
seq__24627_26167 = G__26184;
chunk__24628_26168 = G__26185;
count__24629_26169 = G__26186;
i__24630_26170 = G__26187;
continue;
}
} else {
}
}
break;
}

return React.DOM.h3.apply(null,a__9338__auto__);
};
var h3 = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26188__i = 0, G__26188__a = new Array(arguments.length -  0);
while (G__26188__i < G__26188__a.length) {G__26188__a[G__26188__i] = arguments[G__26188__i + 0]; ++G__26188__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26188__a,0);
} 
return h3__delegate.call(this,args__9337__auto__);};
h3.cljs$lang$maxFixedArity = 0;
h3.cljs$lang$applyTo = (function (arglist__26189){
var args__9337__auto__ = cljs.core.seq(arglist__26189);
return h3__delegate(args__9337__auto__);
});
h3.cljs$core$IFn$_invoke$arity$variadic = h3__delegate;
return h3;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h4 = (function() { 
var h4__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24635_26190 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24636_26191 = null;
var count__24637_26192 = (0);
var i__24638_26193 = (0);
while(true){
if((i__24638_26193 < count__24637_26192)){
var arg__9339__auto___26194 = cljs.core._nth.call(null,chunk__24636_26191,i__24638_26193);
a__9338__auto__.push(arg__9339__auto___26194);

var G__26195 = seq__24635_26190;
var G__26196 = chunk__24636_26191;
var G__26197 = count__24637_26192;
var G__26198 = (i__24638_26193 + (1));
seq__24635_26190 = G__26195;
chunk__24636_26191 = G__26196;
count__24637_26192 = G__26197;
i__24638_26193 = G__26198;
continue;
} else {
var temp__4126__auto___26199 = cljs.core.seq.call(null,seq__24635_26190);
if(temp__4126__auto___26199){
var seq__24635_26200__$1 = temp__4126__auto___26199;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24635_26200__$1)){
var c__4559__auto___26201 = cljs.core.chunk_first.call(null,seq__24635_26200__$1);
var G__26202 = cljs.core.chunk_rest.call(null,seq__24635_26200__$1);
var G__26203 = c__4559__auto___26201;
var G__26204 = cljs.core.count.call(null,c__4559__auto___26201);
var G__26205 = (0);
seq__24635_26190 = G__26202;
chunk__24636_26191 = G__26203;
count__24637_26192 = G__26204;
i__24638_26193 = G__26205;
continue;
} else {
var arg__9339__auto___26206 = cljs.core.first.call(null,seq__24635_26200__$1);
a__9338__auto__.push(arg__9339__auto___26206);

var G__26207 = cljs.core.next.call(null,seq__24635_26200__$1);
var G__26208 = null;
var G__26209 = (0);
var G__26210 = (0);
seq__24635_26190 = G__26207;
chunk__24636_26191 = G__26208;
count__24637_26192 = G__26209;
i__24638_26193 = G__26210;
continue;
}
} else {
}
}
break;
}

return React.DOM.h4.apply(null,a__9338__auto__);
};
var h4 = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26211__i = 0, G__26211__a = new Array(arguments.length -  0);
while (G__26211__i < G__26211__a.length) {G__26211__a[G__26211__i] = arguments[G__26211__i + 0]; ++G__26211__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26211__a,0);
} 
return h4__delegate.call(this,args__9337__auto__);};
h4.cljs$lang$maxFixedArity = 0;
h4.cljs$lang$applyTo = (function (arglist__26212){
var args__9337__auto__ = cljs.core.seq(arglist__26212);
return h4__delegate(args__9337__auto__);
});
h4.cljs$core$IFn$_invoke$arity$variadic = h4__delegate;
return h4;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h5 = (function() { 
var h5__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24643_26213 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24644_26214 = null;
var count__24645_26215 = (0);
var i__24646_26216 = (0);
while(true){
if((i__24646_26216 < count__24645_26215)){
var arg__9339__auto___26217 = cljs.core._nth.call(null,chunk__24644_26214,i__24646_26216);
a__9338__auto__.push(arg__9339__auto___26217);

var G__26218 = seq__24643_26213;
var G__26219 = chunk__24644_26214;
var G__26220 = count__24645_26215;
var G__26221 = (i__24646_26216 + (1));
seq__24643_26213 = G__26218;
chunk__24644_26214 = G__26219;
count__24645_26215 = G__26220;
i__24646_26216 = G__26221;
continue;
} else {
var temp__4126__auto___26222 = cljs.core.seq.call(null,seq__24643_26213);
if(temp__4126__auto___26222){
var seq__24643_26223__$1 = temp__4126__auto___26222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24643_26223__$1)){
var c__4559__auto___26224 = cljs.core.chunk_first.call(null,seq__24643_26223__$1);
var G__26225 = cljs.core.chunk_rest.call(null,seq__24643_26223__$1);
var G__26226 = c__4559__auto___26224;
var G__26227 = cljs.core.count.call(null,c__4559__auto___26224);
var G__26228 = (0);
seq__24643_26213 = G__26225;
chunk__24644_26214 = G__26226;
count__24645_26215 = G__26227;
i__24646_26216 = G__26228;
continue;
} else {
var arg__9339__auto___26229 = cljs.core.first.call(null,seq__24643_26223__$1);
a__9338__auto__.push(arg__9339__auto___26229);

var G__26230 = cljs.core.next.call(null,seq__24643_26223__$1);
var G__26231 = null;
var G__26232 = (0);
var G__26233 = (0);
seq__24643_26213 = G__26230;
chunk__24644_26214 = G__26231;
count__24645_26215 = G__26232;
i__24646_26216 = G__26233;
continue;
}
} else {
}
}
break;
}

return React.DOM.h5.apply(null,a__9338__auto__);
};
var h5 = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26234__i = 0, G__26234__a = new Array(arguments.length -  0);
while (G__26234__i < G__26234__a.length) {G__26234__a[G__26234__i] = arguments[G__26234__i + 0]; ++G__26234__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26234__a,0);
} 
return h5__delegate.call(this,args__9337__auto__);};
h5.cljs$lang$maxFixedArity = 0;
h5.cljs$lang$applyTo = (function (arglist__26235){
var args__9337__auto__ = cljs.core.seq(arglist__26235);
return h5__delegate(args__9337__auto__);
});
h5.cljs$core$IFn$_invoke$arity$variadic = h5__delegate;
return h5;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.h6 = (function() { 
var h6__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24651_26236 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24652_26237 = null;
var count__24653_26238 = (0);
var i__24654_26239 = (0);
while(true){
if((i__24654_26239 < count__24653_26238)){
var arg__9339__auto___26240 = cljs.core._nth.call(null,chunk__24652_26237,i__24654_26239);
a__9338__auto__.push(arg__9339__auto___26240);

var G__26241 = seq__24651_26236;
var G__26242 = chunk__24652_26237;
var G__26243 = count__24653_26238;
var G__26244 = (i__24654_26239 + (1));
seq__24651_26236 = G__26241;
chunk__24652_26237 = G__26242;
count__24653_26238 = G__26243;
i__24654_26239 = G__26244;
continue;
} else {
var temp__4126__auto___26245 = cljs.core.seq.call(null,seq__24651_26236);
if(temp__4126__auto___26245){
var seq__24651_26246__$1 = temp__4126__auto___26245;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24651_26246__$1)){
var c__4559__auto___26247 = cljs.core.chunk_first.call(null,seq__24651_26246__$1);
var G__26248 = cljs.core.chunk_rest.call(null,seq__24651_26246__$1);
var G__26249 = c__4559__auto___26247;
var G__26250 = cljs.core.count.call(null,c__4559__auto___26247);
var G__26251 = (0);
seq__24651_26236 = G__26248;
chunk__24652_26237 = G__26249;
count__24653_26238 = G__26250;
i__24654_26239 = G__26251;
continue;
} else {
var arg__9339__auto___26252 = cljs.core.first.call(null,seq__24651_26246__$1);
a__9338__auto__.push(arg__9339__auto___26252);

var G__26253 = cljs.core.next.call(null,seq__24651_26246__$1);
var G__26254 = null;
var G__26255 = (0);
var G__26256 = (0);
seq__24651_26236 = G__26253;
chunk__24652_26237 = G__26254;
count__24653_26238 = G__26255;
i__24654_26239 = G__26256;
continue;
}
} else {
}
}
break;
}

return React.DOM.h6.apply(null,a__9338__auto__);
};
var h6 = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26257__i = 0, G__26257__a = new Array(arguments.length -  0);
while (G__26257__i < G__26257__a.length) {G__26257__a[G__26257__i] = arguments[G__26257__i + 0]; ++G__26257__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26257__a,0);
} 
return h6__delegate.call(this,args__9337__auto__);};
h6.cljs$lang$maxFixedArity = 0;
h6.cljs$lang$applyTo = (function (arglist__26258){
var args__9337__auto__ = cljs.core.seq(arglist__26258);
return h6__delegate(args__9337__auto__);
});
h6.cljs$core$IFn$_invoke$arity$variadic = h6__delegate;
return h6;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.head = (function() { 
var head__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24659_26259 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24660_26260 = null;
var count__24661_26261 = (0);
var i__24662_26262 = (0);
while(true){
if((i__24662_26262 < count__24661_26261)){
var arg__9339__auto___26263 = cljs.core._nth.call(null,chunk__24660_26260,i__24662_26262);
a__9338__auto__.push(arg__9339__auto___26263);

var G__26264 = seq__24659_26259;
var G__26265 = chunk__24660_26260;
var G__26266 = count__24661_26261;
var G__26267 = (i__24662_26262 + (1));
seq__24659_26259 = G__26264;
chunk__24660_26260 = G__26265;
count__24661_26261 = G__26266;
i__24662_26262 = G__26267;
continue;
} else {
var temp__4126__auto___26268 = cljs.core.seq.call(null,seq__24659_26259);
if(temp__4126__auto___26268){
var seq__24659_26269__$1 = temp__4126__auto___26268;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24659_26269__$1)){
var c__4559__auto___26270 = cljs.core.chunk_first.call(null,seq__24659_26269__$1);
var G__26271 = cljs.core.chunk_rest.call(null,seq__24659_26269__$1);
var G__26272 = c__4559__auto___26270;
var G__26273 = cljs.core.count.call(null,c__4559__auto___26270);
var G__26274 = (0);
seq__24659_26259 = G__26271;
chunk__24660_26260 = G__26272;
count__24661_26261 = G__26273;
i__24662_26262 = G__26274;
continue;
} else {
var arg__9339__auto___26275 = cljs.core.first.call(null,seq__24659_26269__$1);
a__9338__auto__.push(arg__9339__auto___26275);

var G__26276 = cljs.core.next.call(null,seq__24659_26269__$1);
var G__26277 = null;
var G__26278 = (0);
var G__26279 = (0);
seq__24659_26259 = G__26276;
chunk__24660_26260 = G__26277;
count__24661_26261 = G__26278;
i__24662_26262 = G__26279;
continue;
}
} else {
}
}
break;
}

return React.DOM.head.apply(null,a__9338__auto__);
};
var head = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26280__i = 0, G__26280__a = new Array(arguments.length -  0);
while (G__26280__i < G__26280__a.length) {G__26280__a[G__26280__i] = arguments[G__26280__i + 0]; ++G__26280__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26280__a,0);
} 
return head__delegate.call(this,args__9337__auto__);};
head.cljs$lang$maxFixedArity = 0;
head.cljs$lang$applyTo = (function (arglist__26281){
var args__9337__auto__ = cljs.core.seq(arglist__26281);
return head__delegate(args__9337__auto__);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.header = (function() { 
var header__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24667_26282 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24668_26283 = null;
var count__24669_26284 = (0);
var i__24670_26285 = (0);
while(true){
if((i__24670_26285 < count__24669_26284)){
var arg__9339__auto___26286 = cljs.core._nth.call(null,chunk__24668_26283,i__24670_26285);
a__9338__auto__.push(arg__9339__auto___26286);

var G__26287 = seq__24667_26282;
var G__26288 = chunk__24668_26283;
var G__26289 = count__24669_26284;
var G__26290 = (i__24670_26285 + (1));
seq__24667_26282 = G__26287;
chunk__24668_26283 = G__26288;
count__24669_26284 = G__26289;
i__24670_26285 = G__26290;
continue;
} else {
var temp__4126__auto___26291 = cljs.core.seq.call(null,seq__24667_26282);
if(temp__4126__auto___26291){
var seq__24667_26292__$1 = temp__4126__auto___26291;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24667_26292__$1)){
var c__4559__auto___26293 = cljs.core.chunk_first.call(null,seq__24667_26292__$1);
var G__26294 = cljs.core.chunk_rest.call(null,seq__24667_26292__$1);
var G__26295 = c__4559__auto___26293;
var G__26296 = cljs.core.count.call(null,c__4559__auto___26293);
var G__26297 = (0);
seq__24667_26282 = G__26294;
chunk__24668_26283 = G__26295;
count__24669_26284 = G__26296;
i__24670_26285 = G__26297;
continue;
} else {
var arg__9339__auto___26298 = cljs.core.first.call(null,seq__24667_26292__$1);
a__9338__auto__.push(arg__9339__auto___26298);

var G__26299 = cljs.core.next.call(null,seq__24667_26292__$1);
var G__26300 = null;
var G__26301 = (0);
var G__26302 = (0);
seq__24667_26282 = G__26299;
chunk__24668_26283 = G__26300;
count__24669_26284 = G__26301;
i__24670_26285 = G__26302;
continue;
}
} else {
}
}
break;
}

return React.DOM.header.apply(null,a__9338__auto__);
};
var header = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26303__i = 0, G__26303__a = new Array(arguments.length -  0);
while (G__26303__i < G__26303__a.length) {G__26303__a[G__26303__i] = arguments[G__26303__i + 0]; ++G__26303__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26303__a,0);
} 
return header__delegate.call(this,args__9337__auto__);};
header.cljs$lang$maxFixedArity = 0;
header.cljs$lang$applyTo = (function (arglist__26304){
var args__9337__auto__ = cljs.core.seq(arglist__26304);
return header__delegate(args__9337__auto__);
});
header.cljs$core$IFn$_invoke$arity$variadic = header__delegate;
return header;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.hr = (function() { 
var hr__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24675_26305 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24676_26306 = null;
var count__24677_26307 = (0);
var i__24678_26308 = (0);
while(true){
if((i__24678_26308 < count__24677_26307)){
var arg__9339__auto___26309 = cljs.core._nth.call(null,chunk__24676_26306,i__24678_26308);
a__9338__auto__.push(arg__9339__auto___26309);

var G__26310 = seq__24675_26305;
var G__26311 = chunk__24676_26306;
var G__26312 = count__24677_26307;
var G__26313 = (i__24678_26308 + (1));
seq__24675_26305 = G__26310;
chunk__24676_26306 = G__26311;
count__24677_26307 = G__26312;
i__24678_26308 = G__26313;
continue;
} else {
var temp__4126__auto___26314 = cljs.core.seq.call(null,seq__24675_26305);
if(temp__4126__auto___26314){
var seq__24675_26315__$1 = temp__4126__auto___26314;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24675_26315__$1)){
var c__4559__auto___26316 = cljs.core.chunk_first.call(null,seq__24675_26315__$1);
var G__26317 = cljs.core.chunk_rest.call(null,seq__24675_26315__$1);
var G__26318 = c__4559__auto___26316;
var G__26319 = cljs.core.count.call(null,c__4559__auto___26316);
var G__26320 = (0);
seq__24675_26305 = G__26317;
chunk__24676_26306 = G__26318;
count__24677_26307 = G__26319;
i__24678_26308 = G__26320;
continue;
} else {
var arg__9339__auto___26321 = cljs.core.first.call(null,seq__24675_26315__$1);
a__9338__auto__.push(arg__9339__auto___26321);

var G__26322 = cljs.core.next.call(null,seq__24675_26315__$1);
var G__26323 = null;
var G__26324 = (0);
var G__26325 = (0);
seq__24675_26305 = G__26322;
chunk__24676_26306 = G__26323;
count__24677_26307 = G__26324;
i__24678_26308 = G__26325;
continue;
}
} else {
}
}
break;
}

return React.DOM.hr.apply(null,a__9338__auto__);
};
var hr = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26326__i = 0, G__26326__a = new Array(arguments.length -  0);
while (G__26326__i < G__26326__a.length) {G__26326__a[G__26326__i] = arguments[G__26326__i + 0]; ++G__26326__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26326__a,0);
} 
return hr__delegate.call(this,args__9337__auto__);};
hr.cljs$lang$maxFixedArity = 0;
hr.cljs$lang$applyTo = (function (arglist__26327){
var args__9337__auto__ = cljs.core.seq(arglist__26327);
return hr__delegate(args__9337__auto__);
});
hr.cljs$core$IFn$_invoke$arity$variadic = hr__delegate;
return hr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.html = (function() { 
var html__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24683_26328 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24684_26329 = null;
var count__24685_26330 = (0);
var i__24686_26331 = (0);
while(true){
if((i__24686_26331 < count__24685_26330)){
var arg__9339__auto___26332 = cljs.core._nth.call(null,chunk__24684_26329,i__24686_26331);
a__9338__auto__.push(arg__9339__auto___26332);

var G__26333 = seq__24683_26328;
var G__26334 = chunk__24684_26329;
var G__26335 = count__24685_26330;
var G__26336 = (i__24686_26331 + (1));
seq__24683_26328 = G__26333;
chunk__24684_26329 = G__26334;
count__24685_26330 = G__26335;
i__24686_26331 = G__26336;
continue;
} else {
var temp__4126__auto___26337 = cljs.core.seq.call(null,seq__24683_26328);
if(temp__4126__auto___26337){
var seq__24683_26338__$1 = temp__4126__auto___26337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24683_26338__$1)){
var c__4559__auto___26339 = cljs.core.chunk_first.call(null,seq__24683_26338__$1);
var G__26340 = cljs.core.chunk_rest.call(null,seq__24683_26338__$1);
var G__26341 = c__4559__auto___26339;
var G__26342 = cljs.core.count.call(null,c__4559__auto___26339);
var G__26343 = (0);
seq__24683_26328 = G__26340;
chunk__24684_26329 = G__26341;
count__24685_26330 = G__26342;
i__24686_26331 = G__26343;
continue;
} else {
var arg__9339__auto___26344 = cljs.core.first.call(null,seq__24683_26338__$1);
a__9338__auto__.push(arg__9339__auto___26344);

var G__26345 = cljs.core.next.call(null,seq__24683_26338__$1);
var G__26346 = null;
var G__26347 = (0);
var G__26348 = (0);
seq__24683_26328 = G__26345;
chunk__24684_26329 = G__26346;
count__24685_26330 = G__26347;
i__24686_26331 = G__26348;
continue;
}
} else {
}
}
break;
}

return React.DOM.html.apply(null,a__9338__auto__);
};
var html = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26349__i = 0, G__26349__a = new Array(arguments.length -  0);
while (G__26349__i < G__26349__a.length) {G__26349__a[G__26349__i] = arguments[G__26349__i + 0]; ++G__26349__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26349__a,0);
} 
return html__delegate.call(this,args__9337__auto__);};
html.cljs$lang$maxFixedArity = 0;
html.cljs$lang$applyTo = (function (arglist__26350){
var args__9337__auto__ = cljs.core.seq(arglist__26350);
return html__delegate(args__9337__auto__);
});
html.cljs$core$IFn$_invoke$arity$variadic = html__delegate;
return html;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.i = (function() { 
var i__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24691_26351 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24692_26352 = null;
var count__24693_26353 = (0);
var i__24694_26354 = (0);
while(true){
if((i__24694_26354 < count__24693_26353)){
var arg__9339__auto___26355 = cljs.core._nth.call(null,chunk__24692_26352,i__24694_26354);
a__9338__auto__.push(arg__9339__auto___26355);

var G__26356 = seq__24691_26351;
var G__26357 = chunk__24692_26352;
var G__26358 = count__24693_26353;
var G__26359 = (i__24694_26354 + (1));
seq__24691_26351 = G__26356;
chunk__24692_26352 = G__26357;
count__24693_26353 = G__26358;
i__24694_26354 = G__26359;
continue;
} else {
var temp__4126__auto___26360 = cljs.core.seq.call(null,seq__24691_26351);
if(temp__4126__auto___26360){
var seq__24691_26361__$1 = temp__4126__auto___26360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24691_26361__$1)){
var c__4559__auto___26362 = cljs.core.chunk_first.call(null,seq__24691_26361__$1);
var G__26363 = cljs.core.chunk_rest.call(null,seq__24691_26361__$1);
var G__26364 = c__4559__auto___26362;
var G__26365 = cljs.core.count.call(null,c__4559__auto___26362);
var G__26366 = (0);
seq__24691_26351 = G__26363;
chunk__24692_26352 = G__26364;
count__24693_26353 = G__26365;
i__24694_26354 = G__26366;
continue;
} else {
var arg__9339__auto___26367 = cljs.core.first.call(null,seq__24691_26361__$1);
a__9338__auto__.push(arg__9339__auto___26367);

var G__26368 = cljs.core.next.call(null,seq__24691_26361__$1);
var G__26369 = null;
var G__26370 = (0);
var G__26371 = (0);
seq__24691_26351 = G__26368;
chunk__24692_26352 = G__26369;
count__24693_26353 = G__26370;
i__24694_26354 = G__26371;
continue;
}
} else {
}
}
break;
}

return React.DOM.i.apply(null,a__9338__auto__);
};
var i = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26372__i = 0, G__26372__a = new Array(arguments.length -  0);
while (G__26372__i < G__26372__a.length) {G__26372__a[G__26372__i] = arguments[G__26372__i + 0]; ++G__26372__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26372__a,0);
} 
return i__delegate.call(this,args__9337__auto__);};
i.cljs$lang$maxFixedArity = 0;
i.cljs$lang$applyTo = (function (arglist__26373){
var args__9337__auto__ = cljs.core.seq(arglist__26373);
return i__delegate(args__9337__auto__);
});
i.cljs$core$IFn$_invoke$arity$variadic = i__delegate;
return i;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.iframe = (function() { 
var iframe__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24699_26374 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24700_26375 = null;
var count__24701_26376 = (0);
var i__24702_26377 = (0);
while(true){
if((i__24702_26377 < count__24701_26376)){
var arg__9339__auto___26378 = cljs.core._nth.call(null,chunk__24700_26375,i__24702_26377);
a__9338__auto__.push(arg__9339__auto___26378);

var G__26379 = seq__24699_26374;
var G__26380 = chunk__24700_26375;
var G__26381 = count__24701_26376;
var G__26382 = (i__24702_26377 + (1));
seq__24699_26374 = G__26379;
chunk__24700_26375 = G__26380;
count__24701_26376 = G__26381;
i__24702_26377 = G__26382;
continue;
} else {
var temp__4126__auto___26383 = cljs.core.seq.call(null,seq__24699_26374);
if(temp__4126__auto___26383){
var seq__24699_26384__$1 = temp__4126__auto___26383;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24699_26384__$1)){
var c__4559__auto___26385 = cljs.core.chunk_first.call(null,seq__24699_26384__$1);
var G__26386 = cljs.core.chunk_rest.call(null,seq__24699_26384__$1);
var G__26387 = c__4559__auto___26385;
var G__26388 = cljs.core.count.call(null,c__4559__auto___26385);
var G__26389 = (0);
seq__24699_26374 = G__26386;
chunk__24700_26375 = G__26387;
count__24701_26376 = G__26388;
i__24702_26377 = G__26389;
continue;
} else {
var arg__9339__auto___26390 = cljs.core.first.call(null,seq__24699_26384__$1);
a__9338__auto__.push(arg__9339__auto___26390);

var G__26391 = cljs.core.next.call(null,seq__24699_26384__$1);
var G__26392 = null;
var G__26393 = (0);
var G__26394 = (0);
seq__24699_26374 = G__26391;
chunk__24700_26375 = G__26392;
count__24701_26376 = G__26393;
i__24702_26377 = G__26394;
continue;
}
} else {
}
}
break;
}

return React.DOM.iframe.apply(null,a__9338__auto__);
};
var iframe = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26395__i = 0, G__26395__a = new Array(arguments.length -  0);
while (G__26395__i < G__26395__a.length) {G__26395__a[G__26395__i] = arguments[G__26395__i + 0]; ++G__26395__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26395__a,0);
} 
return iframe__delegate.call(this,args__9337__auto__);};
iframe.cljs$lang$maxFixedArity = 0;
iframe.cljs$lang$applyTo = (function (arglist__26396){
var args__9337__auto__ = cljs.core.seq(arglist__26396);
return iframe__delegate(args__9337__auto__);
});
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__delegate;
return iframe;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.img = (function() { 
var img__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24707_26397 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24708_26398 = null;
var count__24709_26399 = (0);
var i__24710_26400 = (0);
while(true){
if((i__24710_26400 < count__24709_26399)){
var arg__9339__auto___26401 = cljs.core._nth.call(null,chunk__24708_26398,i__24710_26400);
a__9338__auto__.push(arg__9339__auto___26401);

var G__26402 = seq__24707_26397;
var G__26403 = chunk__24708_26398;
var G__26404 = count__24709_26399;
var G__26405 = (i__24710_26400 + (1));
seq__24707_26397 = G__26402;
chunk__24708_26398 = G__26403;
count__24709_26399 = G__26404;
i__24710_26400 = G__26405;
continue;
} else {
var temp__4126__auto___26406 = cljs.core.seq.call(null,seq__24707_26397);
if(temp__4126__auto___26406){
var seq__24707_26407__$1 = temp__4126__auto___26406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24707_26407__$1)){
var c__4559__auto___26408 = cljs.core.chunk_first.call(null,seq__24707_26407__$1);
var G__26409 = cljs.core.chunk_rest.call(null,seq__24707_26407__$1);
var G__26410 = c__4559__auto___26408;
var G__26411 = cljs.core.count.call(null,c__4559__auto___26408);
var G__26412 = (0);
seq__24707_26397 = G__26409;
chunk__24708_26398 = G__26410;
count__24709_26399 = G__26411;
i__24710_26400 = G__26412;
continue;
} else {
var arg__9339__auto___26413 = cljs.core.first.call(null,seq__24707_26407__$1);
a__9338__auto__.push(arg__9339__auto___26413);

var G__26414 = cljs.core.next.call(null,seq__24707_26407__$1);
var G__26415 = null;
var G__26416 = (0);
var G__26417 = (0);
seq__24707_26397 = G__26414;
chunk__24708_26398 = G__26415;
count__24709_26399 = G__26416;
i__24710_26400 = G__26417;
continue;
}
} else {
}
}
break;
}

return React.DOM.img.apply(null,a__9338__auto__);
};
var img = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26418__i = 0, G__26418__a = new Array(arguments.length -  0);
while (G__26418__i < G__26418__a.length) {G__26418__a[G__26418__i] = arguments[G__26418__i + 0]; ++G__26418__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26418__a,0);
} 
return img__delegate.call(this,args__9337__auto__);};
img.cljs$lang$maxFixedArity = 0;
img.cljs$lang$applyTo = (function (arglist__26419){
var args__9337__auto__ = cljs.core.seq(arglist__26419);
return img__delegate(args__9337__auto__);
});
img.cljs$core$IFn$_invoke$arity$variadic = img__delegate;
return img;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.input = (function() { 
var input__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24715_26420 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24716_26421 = null;
var count__24717_26422 = (0);
var i__24718_26423 = (0);
while(true){
if((i__24718_26423 < count__24717_26422)){
var arg__9339__auto___26424 = cljs.core._nth.call(null,chunk__24716_26421,i__24718_26423);
a__9338__auto__.push(arg__9339__auto___26424);

var G__26425 = seq__24715_26420;
var G__26426 = chunk__24716_26421;
var G__26427 = count__24717_26422;
var G__26428 = (i__24718_26423 + (1));
seq__24715_26420 = G__26425;
chunk__24716_26421 = G__26426;
count__24717_26422 = G__26427;
i__24718_26423 = G__26428;
continue;
} else {
var temp__4126__auto___26429 = cljs.core.seq.call(null,seq__24715_26420);
if(temp__4126__auto___26429){
var seq__24715_26430__$1 = temp__4126__auto___26429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24715_26430__$1)){
var c__4559__auto___26431 = cljs.core.chunk_first.call(null,seq__24715_26430__$1);
var G__26432 = cljs.core.chunk_rest.call(null,seq__24715_26430__$1);
var G__26433 = c__4559__auto___26431;
var G__26434 = cljs.core.count.call(null,c__4559__auto___26431);
var G__26435 = (0);
seq__24715_26420 = G__26432;
chunk__24716_26421 = G__26433;
count__24717_26422 = G__26434;
i__24718_26423 = G__26435;
continue;
} else {
var arg__9339__auto___26436 = cljs.core.first.call(null,seq__24715_26430__$1);
a__9338__auto__.push(arg__9339__auto___26436);

var G__26437 = cljs.core.next.call(null,seq__24715_26430__$1);
var G__26438 = null;
var G__26439 = (0);
var G__26440 = (0);
seq__24715_26420 = G__26437;
chunk__24716_26421 = G__26438;
count__24717_26422 = G__26439;
i__24718_26423 = G__26440;
continue;
}
} else {
}
}
break;
}

return React.DOM.input.apply(null,a__9338__auto__);
};
var input = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26441__i = 0, G__26441__a = new Array(arguments.length -  0);
while (G__26441__i < G__26441__a.length) {G__26441__a[G__26441__i] = arguments[G__26441__i + 0]; ++G__26441__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26441__a,0);
} 
return input__delegate.call(this,args__9337__auto__);};
input.cljs$lang$maxFixedArity = 0;
input.cljs$lang$applyTo = (function (arglist__26442){
var args__9337__auto__ = cljs.core.seq(arglist__26442);
return input__delegate(args__9337__auto__);
});
input.cljs$core$IFn$_invoke$arity$variadic = input__delegate;
return input;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ins = (function() { 
var ins__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24723_26443 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24724_26444 = null;
var count__24725_26445 = (0);
var i__24726_26446 = (0);
while(true){
if((i__24726_26446 < count__24725_26445)){
var arg__9339__auto___26447 = cljs.core._nth.call(null,chunk__24724_26444,i__24726_26446);
a__9338__auto__.push(arg__9339__auto___26447);

var G__26448 = seq__24723_26443;
var G__26449 = chunk__24724_26444;
var G__26450 = count__24725_26445;
var G__26451 = (i__24726_26446 + (1));
seq__24723_26443 = G__26448;
chunk__24724_26444 = G__26449;
count__24725_26445 = G__26450;
i__24726_26446 = G__26451;
continue;
} else {
var temp__4126__auto___26452 = cljs.core.seq.call(null,seq__24723_26443);
if(temp__4126__auto___26452){
var seq__24723_26453__$1 = temp__4126__auto___26452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24723_26453__$1)){
var c__4559__auto___26454 = cljs.core.chunk_first.call(null,seq__24723_26453__$1);
var G__26455 = cljs.core.chunk_rest.call(null,seq__24723_26453__$1);
var G__26456 = c__4559__auto___26454;
var G__26457 = cljs.core.count.call(null,c__4559__auto___26454);
var G__26458 = (0);
seq__24723_26443 = G__26455;
chunk__24724_26444 = G__26456;
count__24725_26445 = G__26457;
i__24726_26446 = G__26458;
continue;
} else {
var arg__9339__auto___26459 = cljs.core.first.call(null,seq__24723_26453__$1);
a__9338__auto__.push(arg__9339__auto___26459);

var G__26460 = cljs.core.next.call(null,seq__24723_26453__$1);
var G__26461 = null;
var G__26462 = (0);
var G__26463 = (0);
seq__24723_26443 = G__26460;
chunk__24724_26444 = G__26461;
count__24725_26445 = G__26462;
i__24726_26446 = G__26463;
continue;
}
} else {
}
}
break;
}

return React.DOM.ins.apply(null,a__9338__auto__);
};
var ins = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26464__i = 0, G__26464__a = new Array(arguments.length -  0);
while (G__26464__i < G__26464__a.length) {G__26464__a[G__26464__i] = arguments[G__26464__i + 0]; ++G__26464__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26464__a,0);
} 
return ins__delegate.call(this,args__9337__auto__);};
ins.cljs$lang$maxFixedArity = 0;
ins.cljs$lang$applyTo = (function (arglist__26465){
var args__9337__auto__ = cljs.core.seq(arglist__26465);
return ins__delegate(args__9337__auto__);
});
ins.cljs$core$IFn$_invoke$arity$variadic = ins__delegate;
return ins;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.kbd = (function() { 
var kbd__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24731_26466 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24732_26467 = null;
var count__24733_26468 = (0);
var i__24734_26469 = (0);
while(true){
if((i__24734_26469 < count__24733_26468)){
var arg__9339__auto___26470 = cljs.core._nth.call(null,chunk__24732_26467,i__24734_26469);
a__9338__auto__.push(arg__9339__auto___26470);

var G__26471 = seq__24731_26466;
var G__26472 = chunk__24732_26467;
var G__26473 = count__24733_26468;
var G__26474 = (i__24734_26469 + (1));
seq__24731_26466 = G__26471;
chunk__24732_26467 = G__26472;
count__24733_26468 = G__26473;
i__24734_26469 = G__26474;
continue;
} else {
var temp__4126__auto___26475 = cljs.core.seq.call(null,seq__24731_26466);
if(temp__4126__auto___26475){
var seq__24731_26476__$1 = temp__4126__auto___26475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24731_26476__$1)){
var c__4559__auto___26477 = cljs.core.chunk_first.call(null,seq__24731_26476__$1);
var G__26478 = cljs.core.chunk_rest.call(null,seq__24731_26476__$1);
var G__26479 = c__4559__auto___26477;
var G__26480 = cljs.core.count.call(null,c__4559__auto___26477);
var G__26481 = (0);
seq__24731_26466 = G__26478;
chunk__24732_26467 = G__26479;
count__24733_26468 = G__26480;
i__24734_26469 = G__26481;
continue;
} else {
var arg__9339__auto___26482 = cljs.core.first.call(null,seq__24731_26476__$1);
a__9338__auto__.push(arg__9339__auto___26482);

var G__26483 = cljs.core.next.call(null,seq__24731_26476__$1);
var G__26484 = null;
var G__26485 = (0);
var G__26486 = (0);
seq__24731_26466 = G__26483;
chunk__24732_26467 = G__26484;
count__24733_26468 = G__26485;
i__24734_26469 = G__26486;
continue;
}
} else {
}
}
break;
}

return React.DOM.kbd.apply(null,a__9338__auto__);
};
var kbd = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26487__i = 0, G__26487__a = new Array(arguments.length -  0);
while (G__26487__i < G__26487__a.length) {G__26487__a[G__26487__i] = arguments[G__26487__i + 0]; ++G__26487__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26487__a,0);
} 
return kbd__delegate.call(this,args__9337__auto__);};
kbd.cljs$lang$maxFixedArity = 0;
kbd.cljs$lang$applyTo = (function (arglist__26488){
var args__9337__auto__ = cljs.core.seq(arglist__26488);
return kbd__delegate(args__9337__auto__);
});
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__delegate;
return kbd;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.keygen = (function() { 
var keygen__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24739_26489 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24740_26490 = null;
var count__24741_26491 = (0);
var i__24742_26492 = (0);
while(true){
if((i__24742_26492 < count__24741_26491)){
var arg__9339__auto___26493 = cljs.core._nth.call(null,chunk__24740_26490,i__24742_26492);
a__9338__auto__.push(arg__9339__auto___26493);

var G__26494 = seq__24739_26489;
var G__26495 = chunk__24740_26490;
var G__26496 = count__24741_26491;
var G__26497 = (i__24742_26492 + (1));
seq__24739_26489 = G__26494;
chunk__24740_26490 = G__26495;
count__24741_26491 = G__26496;
i__24742_26492 = G__26497;
continue;
} else {
var temp__4126__auto___26498 = cljs.core.seq.call(null,seq__24739_26489);
if(temp__4126__auto___26498){
var seq__24739_26499__$1 = temp__4126__auto___26498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24739_26499__$1)){
var c__4559__auto___26500 = cljs.core.chunk_first.call(null,seq__24739_26499__$1);
var G__26501 = cljs.core.chunk_rest.call(null,seq__24739_26499__$1);
var G__26502 = c__4559__auto___26500;
var G__26503 = cljs.core.count.call(null,c__4559__auto___26500);
var G__26504 = (0);
seq__24739_26489 = G__26501;
chunk__24740_26490 = G__26502;
count__24741_26491 = G__26503;
i__24742_26492 = G__26504;
continue;
} else {
var arg__9339__auto___26505 = cljs.core.first.call(null,seq__24739_26499__$1);
a__9338__auto__.push(arg__9339__auto___26505);

var G__26506 = cljs.core.next.call(null,seq__24739_26499__$1);
var G__26507 = null;
var G__26508 = (0);
var G__26509 = (0);
seq__24739_26489 = G__26506;
chunk__24740_26490 = G__26507;
count__24741_26491 = G__26508;
i__24742_26492 = G__26509;
continue;
}
} else {
}
}
break;
}

return React.DOM.keygen.apply(null,a__9338__auto__);
};
var keygen = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26510__i = 0, G__26510__a = new Array(arguments.length -  0);
while (G__26510__i < G__26510__a.length) {G__26510__a[G__26510__i] = arguments[G__26510__i + 0]; ++G__26510__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26510__a,0);
} 
return keygen__delegate.call(this,args__9337__auto__);};
keygen.cljs$lang$maxFixedArity = 0;
keygen.cljs$lang$applyTo = (function (arglist__26511){
var args__9337__auto__ = cljs.core.seq(arglist__26511);
return keygen__delegate(args__9337__auto__);
});
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__delegate;
return keygen;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.label = (function() { 
var label__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24747_26512 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24748_26513 = null;
var count__24749_26514 = (0);
var i__24750_26515 = (0);
while(true){
if((i__24750_26515 < count__24749_26514)){
var arg__9339__auto___26516 = cljs.core._nth.call(null,chunk__24748_26513,i__24750_26515);
a__9338__auto__.push(arg__9339__auto___26516);

var G__26517 = seq__24747_26512;
var G__26518 = chunk__24748_26513;
var G__26519 = count__24749_26514;
var G__26520 = (i__24750_26515 + (1));
seq__24747_26512 = G__26517;
chunk__24748_26513 = G__26518;
count__24749_26514 = G__26519;
i__24750_26515 = G__26520;
continue;
} else {
var temp__4126__auto___26521 = cljs.core.seq.call(null,seq__24747_26512);
if(temp__4126__auto___26521){
var seq__24747_26522__$1 = temp__4126__auto___26521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24747_26522__$1)){
var c__4559__auto___26523 = cljs.core.chunk_first.call(null,seq__24747_26522__$1);
var G__26524 = cljs.core.chunk_rest.call(null,seq__24747_26522__$1);
var G__26525 = c__4559__auto___26523;
var G__26526 = cljs.core.count.call(null,c__4559__auto___26523);
var G__26527 = (0);
seq__24747_26512 = G__26524;
chunk__24748_26513 = G__26525;
count__24749_26514 = G__26526;
i__24750_26515 = G__26527;
continue;
} else {
var arg__9339__auto___26528 = cljs.core.first.call(null,seq__24747_26522__$1);
a__9338__auto__.push(arg__9339__auto___26528);

var G__26529 = cljs.core.next.call(null,seq__24747_26522__$1);
var G__26530 = null;
var G__26531 = (0);
var G__26532 = (0);
seq__24747_26512 = G__26529;
chunk__24748_26513 = G__26530;
count__24749_26514 = G__26531;
i__24750_26515 = G__26532;
continue;
}
} else {
}
}
break;
}

return React.DOM.label.apply(null,a__9338__auto__);
};
var label = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26533__i = 0, G__26533__a = new Array(arguments.length -  0);
while (G__26533__i < G__26533__a.length) {G__26533__a[G__26533__i] = arguments[G__26533__i + 0]; ++G__26533__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26533__a,0);
} 
return label__delegate.call(this,args__9337__auto__);};
label.cljs$lang$maxFixedArity = 0;
label.cljs$lang$applyTo = (function (arglist__26534){
var args__9337__auto__ = cljs.core.seq(arglist__26534);
return label__delegate(args__9337__auto__);
});
label.cljs$core$IFn$_invoke$arity$variadic = label__delegate;
return label;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.legend = (function() { 
var legend__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24755_26535 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24756_26536 = null;
var count__24757_26537 = (0);
var i__24758_26538 = (0);
while(true){
if((i__24758_26538 < count__24757_26537)){
var arg__9339__auto___26539 = cljs.core._nth.call(null,chunk__24756_26536,i__24758_26538);
a__9338__auto__.push(arg__9339__auto___26539);

var G__26540 = seq__24755_26535;
var G__26541 = chunk__24756_26536;
var G__26542 = count__24757_26537;
var G__26543 = (i__24758_26538 + (1));
seq__24755_26535 = G__26540;
chunk__24756_26536 = G__26541;
count__24757_26537 = G__26542;
i__24758_26538 = G__26543;
continue;
} else {
var temp__4126__auto___26544 = cljs.core.seq.call(null,seq__24755_26535);
if(temp__4126__auto___26544){
var seq__24755_26545__$1 = temp__4126__auto___26544;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24755_26545__$1)){
var c__4559__auto___26546 = cljs.core.chunk_first.call(null,seq__24755_26545__$1);
var G__26547 = cljs.core.chunk_rest.call(null,seq__24755_26545__$1);
var G__26548 = c__4559__auto___26546;
var G__26549 = cljs.core.count.call(null,c__4559__auto___26546);
var G__26550 = (0);
seq__24755_26535 = G__26547;
chunk__24756_26536 = G__26548;
count__24757_26537 = G__26549;
i__24758_26538 = G__26550;
continue;
} else {
var arg__9339__auto___26551 = cljs.core.first.call(null,seq__24755_26545__$1);
a__9338__auto__.push(arg__9339__auto___26551);

var G__26552 = cljs.core.next.call(null,seq__24755_26545__$1);
var G__26553 = null;
var G__26554 = (0);
var G__26555 = (0);
seq__24755_26535 = G__26552;
chunk__24756_26536 = G__26553;
count__24757_26537 = G__26554;
i__24758_26538 = G__26555;
continue;
}
} else {
}
}
break;
}

return React.DOM.legend.apply(null,a__9338__auto__);
};
var legend = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26556__i = 0, G__26556__a = new Array(arguments.length -  0);
while (G__26556__i < G__26556__a.length) {G__26556__a[G__26556__i] = arguments[G__26556__i + 0]; ++G__26556__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26556__a,0);
} 
return legend__delegate.call(this,args__9337__auto__);};
legend.cljs$lang$maxFixedArity = 0;
legend.cljs$lang$applyTo = (function (arglist__26557){
var args__9337__auto__ = cljs.core.seq(arglist__26557);
return legend__delegate(args__9337__auto__);
});
legend.cljs$core$IFn$_invoke$arity$variadic = legend__delegate;
return legend;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.li = (function() { 
var li__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24763_26558 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24764_26559 = null;
var count__24765_26560 = (0);
var i__24766_26561 = (0);
while(true){
if((i__24766_26561 < count__24765_26560)){
var arg__9339__auto___26562 = cljs.core._nth.call(null,chunk__24764_26559,i__24766_26561);
a__9338__auto__.push(arg__9339__auto___26562);

var G__26563 = seq__24763_26558;
var G__26564 = chunk__24764_26559;
var G__26565 = count__24765_26560;
var G__26566 = (i__24766_26561 + (1));
seq__24763_26558 = G__26563;
chunk__24764_26559 = G__26564;
count__24765_26560 = G__26565;
i__24766_26561 = G__26566;
continue;
} else {
var temp__4126__auto___26567 = cljs.core.seq.call(null,seq__24763_26558);
if(temp__4126__auto___26567){
var seq__24763_26568__$1 = temp__4126__auto___26567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24763_26568__$1)){
var c__4559__auto___26569 = cljs.core.chunk_first.call(null,seq__24763_26568__$1);
var G__26570 = cljs.core.chunk_rest.call(null,seq__24763_26568__$1);
var G__26571 = c__4559__auto___26569;
var G__26572 = cljs.core.count.call(null,c__4559__auto___26569);
var G__26573 = (0);
seq__24763_26558 = G__26570;
chunk__24764_26559 = G__26571;
count__24765_26560 = G__26572;
i__24766_26561 = G__26573;
continue;
} else {
var arg__9339__auto___26574 = cljs.core.first.call(null,seq__24763_26568__$1);
a__9338__auto__.push(arg__9339__auto___26574);

var G__26575 = cljs.core.next.call(null,seq__24763_26568__$1);
var G__26576 = null;
var G__26577 = (0);
var G__26578 = (0);
seq__24763_26558 = G__26575;
chunk__24764_26559 = G__26576;
count__24765_26560 = G__26577;
i__24766_26561 = G__26578;
continue;
}
} else {
}
}
break;
}

return React.DOM.li.apply(null,a__9338__auto__);
};
var li = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26579__i = 0, G__26579__a = new Array(arguments.length -  0);
while (G__26579__i < G__26579__a.length) {G__26579__a[G__26579__i] = arguments[G__26579__i + 0]; ++G__26579__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26579__a,0);
} 
return li__delegate.call(this,args__9337__auto__);};
li.cljs$lang$maxFixedArity = 0;
li.cljs$lang$applyTo = (function (arglist__26580){
var args__9337__auto__ = cljs.core.seq(arglist__26580);
return li__delegate(args__9337__auto__);
});
li.cljs$core$IFn$_invoke$arity$variadic = li__delegate;
return li;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.link = (function() { 
var link__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24771_26581 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24772_26582 = null;
var count__24773_26583 = (0);
var i__24774_26584 = (0);
while(true){
if((i__24774_26584 < count__24773_26583)){
var arg__9339__auto___26585 = cljs.core._nth.call(null,chunk__24772_26582,i__24774_26584);
a__9338__auto__.push(arg__9339__auto___26585);

var G__26586 = seq__24771_26581;
var G__26587 = chunk__24772_26582;
var G__26588 = count__24773_26583;
var G__26589 = (i__24774_26584 + (1));
seq__24771_26581 = G__26586;
chunk__24772_26582 = G__26587;
count__24773_26583 = G__26588;
i__24774_26584 = G__26589;
continue;
} else {
var temp__4126__auto___26590 = cljs.core.seq.call(null,seq__24771_26581);
if(temp__4126__auto___26590){
var seq__24771_26591__$1 = temp__4126__auto___26590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24771_26591__$1)){
var c__4559__auto___26592 = cljs.core.chunk_first.call(null,seq__24771_26591__$1);
var G__26593 = cljs.core.chunk_rest.call(null,seq__24771_26591__$1);
var G__26594 = c__4559__auto___26592;
var G__26595 = cljs.core.count.call(null,c__4559__auto___26592);
var G__26596 = (0);
seq__24771_26581 = G__26593;
chunk__24772_26582 = G__26594;
count__24773_26583 = G__26595;
i__24774_26584 = G__26596;
continue;
} else {
var arg__9339__auto___26597 = cljs.core.first.call(null,seq__24771_26591__$1);
a__9338__auto__.push(arg__9339__auto___26597);

var G__26598 = cljs.core.next.call(null,seq__24771_26591__$1);
var G__26599 = null;
var G__26600 = (0);
var G__26601 = (0);
seq__24771_26581 = G__26598;
chunk__24772_26582 = G__26599;
count__24773_26583 = G__26600;
i__24774_26584 = G__26601;
continue;
}
} else {
}
}
break;
}

return React.DOM.link.apply(null,a__9338__auto__);
};
var link = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26602__i = 0, G__26602__a = new Array(arguments.length -  0);
while (G__26602__i < G__26602__a.length) {G__26602__a[G__26602__i] = arguments[G__26602__i + 0]; ++G__26602__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26602__a,0);
} 
return link__delegate.call(this,args__9337__auto__);};
link.cljs$lang$maxFixedArity = 0;
link.cljs$lang$applyTo = (function (arglist__26603){
var args__9337__auto__ = cljs.core.seq(arglist__26603);
return link__delegate(args__9337__auto__);
});
link.cljs$core$IFn$_invoke$arity$variadic = link__delegate;
return link;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.main = (function() { 
var main__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24779_26604 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24780_26605 = null;
var count__24781_26606 = (0);
var i__24782_26607 = (0);
while(true){
if((i__24782_26607 < count__24781_26606)){
var arg__9339__auto___26608 = cljs.core._nth.call(null,chunk__24780_26605,i__24782_26607);
a__9338__auto__.push(arg__9339__auto___26608);

var G__26609 = seq__24779_26604;
var G__26610 = chunk__24780_26605;
var G__26611 = count__24781_26606;
var G__26612 = (i__24782_26607 + (1));
seq__24779_26604 = G__26609;
chunk__24780_26605 = G__26610;
count__24781_26606 = G__26611;
i__24782_26607 = G__26612;
continue;
} else {
var temp__4126__auto___26613 = cljs.core.seq.call(null,seq__24779_26604);
if(temp__4126__auto___26613){
var seq__24779_26614__$1 = temp__4126__auto___26613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24779_26614__$1)){
var c__4559__auto___26615 = cljs.core.chunk_first.call(null,seq__24779_26614__$1);
var G__26616 = cljs.core.chunk_rest.call(null,seq__24779_26614__$1);
var G__26617 = c__4559__auto___26615;
var G__26618 = cljs.core.count.call(null,c__4559__auto___26615);
var G__26619 = (0);
seq__24779_26604 = G__26616;
chunk__24780_26605 = G__26617;
count__24781_26606 = G__26618;
i__24782_26607 = G__26619;
continue;
} else {
var arg__9339__auto___26620 = cljs.core.first.call(null,seq__24779_26614__$1);
a__9338__auto__.push(arg__9339__auto___26620);

var G__26621 = cljs.core.next.call(null,seq__24779_26614__$1);
var G__26622 = null;
var G__26623 = (0);
var G__26624 = (0);
seq__24779_26604 = G__26621;
chunk__24780_26605 = G__26622;
count__24781_26606 = G__26623;
i__24782_26607 = G__26624;
continue;
}
} else {
}
}
break;
}

return React.DOM.main.apply(null,a__9338__auto__);
};
var main = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26625__i = 0, G__26625__a = new Array(arguments.length -  0);
while (G__26625__i < G__26625__a.length) {G__26625__a[G__26625__i] = arguments[G__26625__i + 0]; ++G__26625__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26625__a,0);
} 
return main__delegate.call(this,args__9337__auto__);};
main.cljs$lang$maxFixedArity = 0;
main.cljs$lang$applyTo = (function (arglist__26626){
var args__9337__auto__ = cljs.core.seq(arglist__26626);
return main__delegate(args__9337__auto__);
});
main.cljs$core$IFn$_invoke$arity$variadic = main__delegate;
return main;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.map = (function() { 
var map__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24787_26627 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24788_26628 = null;
var count__24789_26629 = (0);
var i__24790_26630 = (0);
while(true){
if((i__24790_26630 < count__24789_26629)){
var arg__9339__auto___26631 = cljs.core._nth.call(null,chunk__24788_26628,i__24790_26630);
a__9338__auto__.push(arg__9339__auto___26631);

var G__26632 = seq__24787_26627;
var G__26633 = chunk__24788_26628;
var G__26634 = count__24789_26629;
var G__26635 = (i__24790_26630 + (1));
seq__24787_26627 = G__26632;
chunk__24788_26628 = G__26633;
count__24789_26629 = G__26634;
i__24790_26630 = G__26635;
continue;
} else {
var temp__4126__auto___26636 = cljs.core.seq.call(null,seq__24787_26627);
if(temp__4126__auto___26636){
var seq__24787_26637__$1 = temp__4126__auto___26636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24787_26637__$1)){
var c__4559__auto___26638 = cljs.core.chunk_first.call(null,seq__24787_26637__$1);
var G__26639 = cljs.core.chunk_rest.call(null,seq__24787_26637__$1);
var G__26640 = c__4559__auto___26638;
var G__26641 = cljs.core.count.call(null,c__4559__auto___26638);
var G__26642 = (0);
seq__24787_26627 = G__26639;
chunk__24788_26628 = G__26640;
count__24789_26629 = G__26641;
i__24790_26630 = G__26642;
continue;
} else {
var arg__9339__auto___26643 = cljs.core.first.call(null,seq__24787_26637__$1);
a__9338__auto__.push(arg__9339__auto___26643);

var G__26644 = cljs.core.next.call(null,seq__24787_26637__$1);
var G__26645 = null;
var G__26646 = (0);
var G__26647 = (0);
seq__24787_26627 = G__26644;
chunk__24788_26628 = G__26645;
count__24789_26629 = G__26646;
i__24790_26630 = G__26647;
continue;
}
} else {
}
}
break;
}

return React.DOM.map.apply(null,a__9338__auto__);
};
var map = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26648__i = 0, G__26648__a = new Array(arguments.length -  0);
while (G__26648__i < G__26648__a.length) {G__26648__a[G__26648__i] = arguments[G__26648__i + 0]; ++G__26648__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26648__a,0);
} 
return map__delegate.call(this,args__9337__auto__);};
map.cljs$lang$maxFixedArity = 0;
map.cljs$lang$applyTo = (function (arglist__26649){
var args__9337__auto__ = cljs.core.seq(arglist__26649);
return map__delegate(args__9337__auto__);
});
map.cljs$core$IFn$_invoke$arity$variadic = map__delegate;
return map;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.mark = (function() { 
var mark__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24795_26650 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24796_26651 = null;
var count__24797_26652 = (0);
var i__24798_26653 = (0);
while(true){
if((i__24798_26653 < count__24797_26652)){
var arg__9339__auto___26654 = cljs.core._nth.call(null,chunk__24796_26651,i__24798_26653);
a__9338__auto__.push(arg__9339__auto___26654);

var G__26655 = seq__24795_26650;
var G__26656 = chunk__24796_26651;
var G__26657 = count__24797_26652;
var G__26658 = (i__24798_26653 + (1));
seq__24795_26650 = G__26655;
chunk__24796_26651 = G__26656;
count__24797_26652 = G__26657;
i__24798_26653 = G__26658;
continue;
} else {
var temp__4126__auto___26659 = cljs.core.seq.call(null,seq__24795_26650);
if(temp__4126__auto___26659){
var seq__24795_26660__$1 = temp__4126__auto___26659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24795_26660__$1)){
var c__4559__auto___26661 = cljs.core.chunk_first.call(null,seq__24795_26660__$1);
var G__26662 = cljs.core.chunk_rest.call(null,seq__24795_26660__$1);
var G__26663 = c__4559__auto___26661;
var G__26664 = cljs.core.count.call(null,c__4559__auto___26661);
var G__26665 = (0);
seq__24795_26650 = G__26662;
chunk__24796_26651 = G__26663;
count__24797_26652 = G__26664;
i__24798_26653 = G__26665;
continue;
} else {
var arg__9339__auto___26666 = cljs.core.first.call(null,seq__24795_26660__$1);
a__9338__auto__.push(arg__9339__auto___26666);

var G__26667 = cljs.core.next.call(null,seq__24795_26660__$1);
var G__26668 = null;
var G__26669 = (0);
var G__26670 = (0);
seq__24795_26650 = G__26667;
chunk__24796_26651 = G__26668;
count__24797_26652 = G__26669;
i__24798_26653 = G__26670;
continue;
}
} else {
}
}
break;
}

return React.DOM.mark.apply(null,a__9338__auto__);
};
var mark = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26671__i = 0, G__26671__a = new Array(arguments.length -  0);
while (G__26671__i < G__26671__a.length) {G__26671__a[G__26671__i] = arguments[G__26671__i + 0]; ++G__26671__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26671__a,0);
} 
return mark__delegate.call(this,args__9337__auto__);};
mark.cljs$lang$maxFixedArity = 0;
mark.cljs$lang$applyTo = (function (arglist__26672){
var args__9337__auto__ = cljs.core.seq(arglist__26672);
return mark__delegate(args__9337__auto__);
});
mark.cljs$core$IFn$_invoke$arity$variadic = mark__delegate;
return mark;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.menu = (function() { 
var menu__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24803_26673 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24804_26674 = null;
var count__24805_26675 = (0);
var i__24806_26676 = (0);
while(true){
if((i__24806_26676 < count__24805_26675)){
var arg__9339__auto___26677 = cljs.core._nth.call(null,chunk__24804_26674,i__24806_26676);
a__9338__auto__.push(arg__9339__auto___26677);

var G__26678 = seq__24803_26673;
var G__26679 = chunk__24804_26674;
var G__26680 = count__24805_26675;
var G__26681 = (i__24806_26676 + (1));
seq__24803_26673 = G__26678;
chunk__24804_26674 = G__26679;
count__24805_26675 = G__26680;
i__24806_26676 = G__26681;
continue;
} else {
var temp__4126__auto___26682 = cljs.core.seq.call(null,seq__24803_26673);
if(temp__4126__auto___26682){
var seq__24803_26683__$1 = temp__4126__auto___26682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24803_26683__$1)){
var c__4559__auto___26684 = cljs.core.chunk_first.call(null,seq__24803_26683__$1);
var G__26685 = cljs.core.chunk_rest.call(null,seq__24803_26683__$1);
var G__26686 = c__4559__auto___26684;
var G__26687 = cljs.core.count.call(null,c__4559__auto___26684);
var G__26688 = (0);
seq__24803_26673 = G__26685;
chunk__24804_26674 = G__26686;
count__24805_26675 = G__26687;
i__24806_26676 = G__26688;
continue;
} else {
var arg__9339__auto___26689 = cljs.core.first.call(null,seq__24803_26683__$1);
a__9338__auto__.push(arg__9339__auto___26689);

var G__26690 = cljs.core.next.call(null,seq__24803_26683__$1);
var G__26691 = null;
var G__26692 = (0);
var G__26693 = (0);
seq__24803_26673 = G__26690;
chunk__24804_26674 = G__26691;
count__24805_26675 = G__26692;
i__24806_26676 = G__26693;
continue;
}
} else {
}
}
break;
}

return React.DOM.menu.apply(null,a__9338__auto__);
};
var menu = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26694__i = 0, G__26694__a = new Array(arguments.length -  0);
while (G__26694__i < G__26694__a.length) {G__26694__a[G__26694__i] = arguments[G__26694__i + 0]; ++G__26694__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26694__a,0);
} 
return menu__delegate.call(this,args__9337__auto__);};
menu.cljs$lang$maxFixedArity = 0;
menu.cljs$lang$applyTo = (function (arglist__26695){
var args__9337__auto__ = cljs.core.seq(arglist__26695);
return menu__delegate(args__9337__auto__);
});
menu.cljs$core$IFn$_invoke$arity$variadic = menu__delegate;
return menu;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.menuitem = (function() { 
var menuitem__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24811_26696 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24812_26697 = null;
var count__24813_26698 = (0);
var i__24814_26699 = (0);
while(true){
if((i__24814_26699 < count__24813_26698)){
var arg__9339__auto___26700 = cljs.core._nth.call(null,chunk__24812_26697,i__24814_26699);
a__9338__auto__.push(arg__9339__auto___26700);

var G__26701 = seq__24811_26696;
var G__26702 = chunk__24812_26697;
var G__26703 = count__24813_26698;
var G__26704 = (i__24814_26699 + (1));
seq__24811_26696 = G__26701;
chunk__24812_26697 = G__26702;
count__24813_26698 = G__26703;
i__24814_26699 = G__26704;
continue;
} else {
var temp__4126__auto___26705 = cljs.core.seq.call(null,seq__24811_26696);
if(temp__4126__auto___26705){
var seq__24811_26706__$1 = temp__4126__auto___26705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24811_26706__$1)){
var c__4559__auto___26707 = cljs.core.chunk_first.call(null,seq__24811_26706__$1);
var G__26708 = cljs.core.chunk_rest.call(null,seq__24811_26706__$1);
var G__26709 = c__4559__auto___26707;
var G__26710 = cljs.core.count.call(null,c__4559__auto___26707);
var G__26711 = (0);
seq__24811_26696 = G__26708;
chunk__24812_26697 = G__26709;
count__24813_26698 = G__26710;
i__24814_26699 = G__26711;
continue;
} else {
var arg__9339__auto___26712 = cljs.core.first.call(null,seq__24811_26706__$1);
a__9338__auto__.push(arg__9339__auto___26712);

var G__26713 = cljs.core.next.call(null,seq__24811_26706__$1);
var G__26714 = null;
var G__26715 = (0);
var G__26716 = (0);
seq__24811_26696 = G__26713;
chunk__24812_26697 = G__26714;
count__24813_26698 = G__26715;
i__24814_26699 = G__26716;
continue;
}
} else {
}
}
break;
}

return React.DOM.menuitem.apply(null,a__9338__auto__);
};
var menuitem = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26717__i = 0, G__26717__a = new Array(arguments.length -  0);
while (G__26717__i < G__26717__a.length) {G__26717__a[G__26717__i] = arguments[G__26717__i + 0]; ++G__26717__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26717__a,0);
} 
return menuitem__delegate.call(this,args__9337__auto__);};
menuitem.cljs$lang$maxFixedArity = 0;
menuitem.cljs$lang$applyTo = (function (arglist__26718){
var args__9337__auto__ = cljs.core.seq(arglist__26718);
return menuitem__delegate(args__9337__auto__);
});
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__delegate;
return menuitem;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.meta = (function() { 
var meta__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24819_26719 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24820_26720 = null;
var count__24821_26721 = (0);
var i__24822_26722 = (0);
while(true){
if((i__24822_26722 < count__24821_26721)){
var arg__9339__auto___26723 = cljs.core._nth.call(null,chunk__24820_26720,i__24822_26722);
a__9338__auto__.push(arg__9339__auto___26723);

var G__26724 = seq__24819_26719;
var G__26725 = chunk__24820_26720;
var G__26726 = count__24821_26721;
var G__26727 = (i__24822_26722 + (1));
seq__24819_26719 = G__26724;
chunk__24820_26720 = G__26725;
count__24821_26721 = G__26726;
i__24822_26722 = G__26727;
continue;
} else {
var temp__4126__auto___26728 = cljs.core.seq.call(null,seq__24819_26719);
if(temp__4126__auto___26728){
var seq__24819_26729__$1 = temp__4126__auto___26728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24819_26729__$1)){
var c__4559__auto___26730 = cljs.core.chunk_first.call(null,seq__24819_26729__$1);
var G__26731 = cljs.core.chunk_rest.call(null,seq__24819_26729__$1);
var G__26732 = c__4559__auto___26730;
var G__26733 = cljs.core.count.call(null,c__4559__auto___26730);
var G__26734 = (0);
seq__24819_26719 = G__26731;
chunk__24820_26720 = G__26732;
count__24821_26721 = G__26733;
i__24822_26722 = G__26734;
continue;
} else {
var arg__9339__auto___26735 = cljs.core.first.call(null,seq__24819_26729__$1);
a__9338__auto__.push(arg__9339__auto___26735);

var G__26736 = cljs.core.next.call(null,seq__24819_26729__$1);
var G__26737 = null;
var G__26738 = (0);
var G__26739 = (0);
seq__24819_26719 = G__26736;
chunk__24820_26720 = G__26737;
count__24821_26721 = G__26738;
i__24822_26722 = G__26739;
continue;
}
} else {
}
}
break;
}

return React.DOM.meta.apply(null,a__9338__auto__);
};
var meta = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26740__i = 0, G__26740__a = new Array(arguments.length -  0);
while (G__26740__i < G__26740__a.length) {G__26740__a[G__26740__i] = arguments[G__26740__i + 0]; ++G__26740__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26740__a,0);
} 
return meta__delegate.call(this,args__9337__auto__);};
meta.cljs$lang$maxFixedArity = 0;
meta.cljs$lang$applyTo = (function (arglist__26741){
var args__9337__auto__ = cljs.core.seq(arglist__26741);
return meta__delegate(args__9337__auto__);
});
meta.cljs$core$IFn$_invoke$arity$variadic = meta__delegate;
return meta;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.meter = (function() { 
var meter__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24827_26742 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24828_26743 = null;
var count__24829_26744 = (0);
var i__24830_26745 = (0);
while(true){
if((i__24830_26745 < count__24829_26744)){
var arg__9339__auto___26746 = cljs.core._nth.call(null,chunk__24828_26743,i__24830_26745);
a__9338__auto__.push(arg__9339__auto___26746);

var G__26747 = seq__24827_26742;
var G__26748 = chunk__24828_26743;
var G__26749 = count__24829_26744;
var G__26750 = (i__24830_26745 + (1));
seq__24827_26742 = G__26747;
chunk__24828_26743 = G__26748;
count__24829_26744 = G__26749;
i__24830_26745 = G__26750;
continue;
} else {
var temp__4126__auto___26751 = cljs.core.seq.call(null,seq__24827_26742);
if(temp__4126__auto___26751){
var seq__24827_26752__$1 = temp__4126__auto___26751;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24827_26752__$1)){
var c__4559__auto___26753 = cljs.core.chunk_first.call(null,seq__24827_26752__$1);
var G__26754 = cljs.core.chunk_rest.call(null,seq__24827_26752__$1);
var G__26755 = c__4559__auto___26753;
var G__26756 = cljs.core.count.call(null,c__4559__auto___26753);
var G__26757 = (0);
seq__24827_26742 = G__26754;
chunk__24828_26743 = G__26755;
count__24829_26744 = G__26756;
i__24830_26745 = G__26757;
continue;
} else {
var arg__9339__auto___26758 = cljs.core.first.call(null,seq__24827_26752__$1);
a__9338__auto__.push(arg__9339__auto___26758);

var G__26759 = cljs.core.next.call(null,seq__24827_26752__$1);
var G__26760 = null;
var G__26761 = (0);
var G__26762 = (0);
seq__24827_26742 = G__26759;
chunk__24828_26743 = G__26760;
count__24829_26744 = G__26761;
i__24830_26745 = G__26762;
continue;
}
} else {
}
}
break;
}

return React.DOM.meter.apply(null,a__9338__auto__);
};
var meter = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26763__i = 0, G__26763__a = new Array(arguments.length -  0);
while (G__26763__i < G__26763__a.length) {G__26763__a[G__26763__i] = arguments[G__26763__i + 0]; ++G__26763__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26763__a,0);
} 
return meter__delegate.call(this,args__9337__auto__);};
meter.cljs$lang$maxFixedArity = 0;
meter.cljs$lang$applyTo = (function (arglist__26764){
var args__9337__auto__ = cljs.core.seq(arglist__26764);
return meter__delegate(args__9337__auto__);
});
meter.cljs$core$IFn$_invoke$arity$variadic = meter__delegate;
return meter;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.nav = (function() { 
var nav__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24835_26765 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24836_26766 = null;
var count__24837_26767 = (0);
var i__24838_26768 = (0);
while(true){
if((i__24838_26768 < count__24837_26767)){
var arg__9339__auto___26769 = cljs.core._nth.call(null,chunk__24836_26766,i__24838_26768);
a__9338__auto__.push(arg__9339__auto___26769);

var G__26770 = seq__24835_26765;
var G__26771 = chunk__24836_26766;
var G__26772 = count__24837_26767;
var G__26773 = (i__24838_26768 + (1));
seq__24835_26765 = G__26770;
chunk__24836_26766 = G__26771;
count__24837_26767 = G__26772;
i__24838_26768 = G__26773;
continue;
} else {
var temp__4126__auto___26774 = cljs.core.seq.call(null,seq__24835_26765);
if(temp__4126__auto___26774){
var seq__24835_26775__$1 = temp__4126__auto___26774;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24835_26775__$1)){
var c__4559__auto___26776 = cljs.core.chunk_first.call(null,seq__24835_26775__$1);
var G__26777 = cljs.core.chunk_rest.call(null,seq__24835_26775__$1);
var G__26778 = c__4559__auto___26776;
var G__26779 = cljs.core.count.call(null,c__4559__auto___26776);
var G__26780 = (0);
seq__24835_26765 = G__26777;
chunk__24836_26766 = G__26778;
count__24837_26767 = G__26779;
i__24838_26768 = G__26780;
continue;
} else {
var arg__9339__auto___26781 = cljs.core.first.call(null,seq__24835_26775__$1);
a__9338__auto__.push(arg__9339__auto___26781);

var G__26782 = cljs.core.next.call(null,seq__24835_26775__$1);
var G__26783 = null;
var G__26784 = (0);
var G__26785 = (0);
seq__24835_26765 = G__26782;
chunk__24836_26766 = G__26783;
count__24837_26767 = G__26784;
i__24838_26768 = G__26785;
continue;
}
} else {
}
}
break;
}

return React.DOM.nav.apply(null,a__9338__auto__);
};
var nav = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26786__i = 0, G__26786__a = new Array(arguments.length -  0);
while (G__26786__i < G__26786__a.length) {G__26786__a[G__26786__i] = arguments[G__26786__i + 0]; ++G__26786__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26786__a,0);
} 
return nav__delegate.call(this,args__9337__auto__);};
nav.cljs$lang$maxFixedArity = 0;
nav.cljs$lang$applyTo = (function (arglist__26787){
var args__9337__auto__ = cljs.core.seq(arglist__26787);
return nav__delegate(args__9337__auto__);
});
nav.cljs$core$IFn$_invoke$arity$variadic = nav__delegate;
return nav;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.noscript = (function() { 
var noscript__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24843_26788 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24844_26789 = null;
var count__24845_26790 = (0);
var i__24846_26791 = (0);
while(true){
if((i__24846_26791 < count__24845_26790)){
var arg__9339__auto___26792 = cljs.core._nth.call(null,chunk__24844_26789,i__24846_26791);
a__9338__auto__.push(arg__9339__auto___26792);

var G__26793 = seq__24843_26788;
var G__26794 = chunk__24844_26789;
var G__26795 = count__24845_26790;
var G__26796 = (i__24846_26791 + (1));
seq__24843_26788 = G__26793;
chunk__24844_26789 = G__26794;
count__24845_26790 = G__26795;
i__24846_26791 = G__26796;
continue;
} else {
var temp__4126__auto___26797 = cljs.core.seq.call(null,seq__24843_26788);
if(temp__4126__auto___26797){
var seq__24843_26798__$1 = temp__4126__auto___26797;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24843_26798__$1)){
var c__4559__auto___26799 = cljs.core.chunk_first.call(null,seq__24843_26798__$1);
var G__26800 = cljs.core.chunk_rest.call(null,seq__24843_26798__$1);
var G__26801 = c__4559__auto___26799;
var G__26802 = cljs.core.count.call(null,c__4559__auto___26799);
var G__26803 = (0);
seq__24843_26788 = G__26800;
chunk__24844_26789 = G__26801;
count__24845_26790 = G__26802;
i__24846_26791 = G__26803;
continue;
} else {
var arg__9339__auto___26804 = cljs.core.first.call(null,seq__24843_26798__$1);
a__9338__auto__.push(arg__9339__auto___26804);

var G__26805 = cljs.core.next.call(null,seq__24843_26798__$1);
var G__26806 = null;
var G__26807 = (0);
var G__26808 = (0);
seq__24843_26788 = G__26805;
chunk__24844_26789 = G__26806;
count__24845_26790 = G__26807;
i__24846_26791 = G__26808;
continue;
}
} else {
}
}
break;
}

return React.DOM.noscript.apply(null,a__9338__auto__);
};
var noscript = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26809__i = 0, G__26809__a = new Array(arguments.length -  0);
while (G__26809__i < G__26809__a.length) {G__26809__a[G__26809__i] = arguments[G__26809__i + 0]; ++G__26809__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26809__a,0);
} 
return noscript__delegate.call(this,args__9337__auto__);};
noscript.cljs$lang$maxFixedArity = 0;
noscript.cljs$lang$applyTo = (function (arglist__26810){
var args__9337__auto__ = cljs.core.seq(arglist__26810);
return noscript__delegate(args__9337__auto__);
});
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__delegate;
return noscript;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.object = (function() { 
var object__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24851_26811 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24852_26812 = null;
var count__24853_26813 = (0);
var i__24854_26814 = (0);
while(true){
if((i__24854_26814 < count__24853_26813)){
var arg__9339__auto___26815 = cljs.core._nth.call(null,chunk__24852_26812,i__24854_26814);
a__9338__auto__.push(arg__9339__auto___26815);

var G__26816 = seq__24851_26811;
var G__26817 = chunk__24852_26812;
var G__26818 = count__24853_26813;
var G__26819 = (i__24854_26814 + (1));
seq__24851_26811 = G__26816;
chunk__24852_26812 = G__26817;
count__24853_26813 = G__26818;
i__24854_26814 = G__26819;
continue;
} else {
var temp__4126__auto___26820 = cljs.core.seq.call(null,seq__24851_26811);
if(temp__4126__auto___26820){
var seq__24851_26821__$1 = temp__4126__auto___26820;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24851_26821__$1)){
var c__4559__auto___26822 = cljs.core.chunk_first.call(null,seq__24851_26821__$1);
var G__26823 = cljs.core.chunk_rest.call(null,seq__24851_26821__$1);
var G__26824 = c__4559__auto___26822;
var G__26825 = cljs.core.count.call(null,c__4559__auto___26822);
var G__26826 = (0);
seq__24851_26811 = G__26823;
chunk__24852_26812 = G__26824;
count__24853_26813 = G__26825;
i__24854_26814 = G__26826;
continue;
} else {
var arg__9339__auto___26827 = cljs.core.first.call(null,seq__24851_26821__$1);
a__9338__auto__.push(arg__9339__auto___26827);

var G__26828 = cljs.core.next.call(null,seq__24851_26821__$1);
var G__26829 = null;
var G__26830 = (0);
var G__26831 = (0);
seq__24851_26811 = G__26828;
chunk__24852_26812 = G__26829;
count__24853_26813 = G__26830;
i__24854_26814 = G__26831;
continue;
}
} else {
}
}
break;
}

return React.DOM.object.apply(null,a__9338__auto__);
};
var object = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26832__i = 0, G__26832__a = new Array(arguments.length -  0);
while (G__26832__i < G__26832__a.length) {G__26832__a[G__26832__i] = arguments[G__26832__i + 0]; ++G__26832__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26832__a,0);
} 
return object__delegate.call(this,args__9337__auto__);};
object.cljs$lang$maxFixedArity = 0;
object.cljs$lang$applyTo = (function (arglist__26833){
var args__9337__auto__ = cljs.core.seq(arglist__26833);
return object__delegate(args__9337__auto__);
});
object.cljs$core$IFn$_invoke$arity$variadic = object__delegate;
return object;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ol = (function() { 
var ol__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24859_26834 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24860_26835 = null;
var count__24861_26836 = (0);
var i__24862_26837 = (0);
while(true){
if((i__24862_26837 < count__24861_26836)){
var arg__9339__auto___26838 = cljs.core._nth.call(null,chunk__24860_26835,i__24862_26837);
a__9338__auto__.push(arg__9339__auto___26838);

var G__26839 = seq__24859_26834;
var G__26840 = chunk__24860_26835;
var G__26841 = count__24861_26836;
var G__26842 = (i__24862_26837 + (1));
seq__24859_26834 = G__26839;
chunk__24860_26835 = G__26840;
count__24861_26836 = G__26841;
i__24862_26837 = G__26842;
continue;
} else {
var temp__4126__auto___26843 = cljs.core.seq.call(null,seq__24859_26834);
if(temp__4126__auto___26843){
var seq__24859_26844__$1 = temp__4126__auto___26843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24859_26844__$1)){
var c__4559__auto___26845 = cljs.core.chunk_first.call(null,seq__24859_26844__$1);
var G__26846 = cljs.core.chunk_rest.call(null,seq__24859_26844__$1);
var G__26847 = c__4559__auto___26845;
var G__26848 = cljs.core.count.call(null,c__4559__auto___26845);
var G__26849 = (0);
seq__24859_26834 = G__26846;
chunk__24860_26835 = G__26847;
count__24861_26836 = G__26848;
i__24862_26837 = G__26849;
continue;
} else {
var arg__9339__auto___26850 = cljs.core.first.call(null,seq__24859_26844__$1);
a__9338__auto__.push(arg__9339__auto___26850);

var G__26851 = cljs.core.next.call(null,seq__24859_26844__$1);
var G__26852 = null;
var G__26853 = (0);
var G__26854 = (0);
seq__24859_26834 = G__26851;
chunk__24860_26835 = G__26852;
count__24861_26836 = G__26853;
i__24862_26837 = G__26854;
continue;
}
} else {
}
}
break;
}

return React.DOM.ol.apply(null,a__9338__auto__);
};
var ol = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26855__i = 0, G__26855__a = new Array(arguments.length -  0);
while (G__26855__i < G__26855__a.length) {G__26855__a[G__26855__i] = arguments[G__26855__i + 0]; ++G__26855__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26855__a,0);
} 
return ol__delegate.call(this,args__9337__auto__);};
ol.cljs$lang$maxFixedArity = 0;
ol.cljs$lang$applyTo = (function (arglist__26856){
var args__9337__auto__ = cljs.core.seq(arglist__26856);
return ol__delegate(args__9337__auto__);
});
ol.cljs$core$IFn$_invoke$arity$variadic = ol__delegate;
return ol;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.optgroup = (function() { 
var optgroup__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24867_26857 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24868_26858 = null;
var count__24869_26859 = (0);
var i__24870_26860 = (0);
while(true){
if((i__24870_26860 < count__24869_26859)){
var arg__9339__auto___26861 = cljs.core._nth.call(null,chunk__24868_26858,i__24870_26860);
a__9338__auto__.push(arg__9339__auto___26861);

var G__26862 = seq__24867_26857;
var G__26863 = chunk__24868_26858;
var G__26864 = count__24869_26859;
var G__26865 = (i__24870_26860 + (1));
seq__24867_26857 = G__26862;
chunk__24868_26858 = G__26863;
count__24869_26859 = G__26864;
i__24870_26860 = G__26865;
continue;
} else {
var temp__4126__auto___26866 = cljs.core.seq.call(null,seq__24867_26857);
if(temp__4126__auto___26866){
var seq__24867_26867__$1 = temp__4126__auto___26866;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24867_26867__$1)){
var c__4559__auto___26868 = cljs.core.chunk_first.call(null,seq__24867_26867__$1);
var G__26869 = cljs.core.chunk_rest.call(null,seq__24867_26867__$1);
var G__26870 = c__4559__auto___26868;
var G__26871 = cljs.core.count.call(null,c__4559__auto___26868);
var G__26872 = (0);
seq__24867_26857 = G__26869;
chunk__24868_26858 = G__26870;
count__24869_26859 = G__26871;
i__24870_26860 = G__26872;
continue;
} else {
var arg__9339__auto___26873 = cljs.core.first.call(null,seq__24867_26867__$1);
a__9338__auto__.push(arg__9339__auto___26873);

var G__26874 = cljs.core.next.call(null,seq__24867_26867__$1);
var G__26875 = null;
var G__26876 = (0);
var G__26877 = (0);
seq__24867_26857 = G__26874;
chunk__24868_26858 = G__26875;
count__24869_26859 = G__26876;
i__24870_26860 = G__26877;
continue;
}
} else {
}
}
break;
}

return React.DOM.optgroup.apply(null,a__9338__auto__);
};
var optgroup = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26878__i = 0, G__26878__a = new Array(arguments.length -  0);
while (G__26878__i < G__26878__a.length) {G__26878__a[G__26878__i] = arguments[G__26878__i + 0]; ++G__26878__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26878__a,0);
} 
return optgroup__delegate.call(this,args__9337__auto__);};
optgroup.cljs$lang$maxFixedArity = 0;
optgroup.cljs$lang$applyTo = (function (arglist__26879){
var args__9337__auto__ = cljs.core.seq(arglist__26879);
return optgroup__delegate(args__9337__auto__);
});
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__delegate;
return optgroup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.option = (function() { 
var option__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24875_26880 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24876_26881 = null;
var count__24877_26882 = (0);
var i__24878_26883 = (0);
while(true){
if((i__24878_26883 < count__24877_26882)){
var arg__9339__auto___26884 = cljs.core._nth.call(null,chunk__24876_26881,i__24878_26883);
a__9338__auto__.push(arg__9339__auto___26884);

var G__26885 = seq__24875_26880;
var G__26886 = chunk__24876_26881;
var G__26887 = count__24877_26882;
var G__26888 = (i__24878_26883 + (1));
seq__24875_26880 = G__26885;
chunk__24876_26881 = G__26886;
count__24877_26882 = G__26887;
i__24878_26883 = G__26888;
continue;
} else {
var temp__4126__auto___26889 = cljs.core.seq.call(null,seq__24875_26880);
if(temp__4126__auto___26889){
var seq__24875_26890__$1 = temp__4126__auto___26889;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24875_26890__$1)){
var c__4559__auto___26891 = cljs.core.chunk_first.call(null,seq__24875_26890__$1);
var G__26892 = cljs.core.chunk_rest.call(null,seq__24875_26890__$1);
var G__26893 = c__4559__auto___26891;
var G__26894 = cljs.core.count.call(null,c__4559__auto___26891);
var G__26895 = (0);
seq__24875_26880 = G__26892;
chunk__24876_26881 = G__26893;
count__24877_26882 = G__26894;
i__24878_26883 = G__26895;
continue;
} else {
var arg__9339__auto___26896 = cljs.core.first.call(null,seq__24875_26890__$1);
a__9338__auto__.push(arg__9339__auto___26896);

var G__26897 = cljs.core.next.call(null,seq__24875_26890__$1);
var G__26898 = null;
var G__26899 = (0);
var G__26900 = (0);
seq__24875_26880 = G__26897;
chunk__24876_26881 = G__26898;
count__24877_26882 = G__26899;
i__24878_26883 = G__26900;
continue;
}
} else {
}
}
break;
}

return React.DOM.option.apply(null,a__9338__auto__);
};
var option = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26901__i = 0, G__26901__a = new Array(arguments.length -  0);
while (G__26901__i < G__26901__a.length) {G__26901__a[G__26901__i] = arguments[G__26901__i + 0]; ++G__26901__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26901__a,0);
} 
return option__delegate.call(this,args__9337__auto__);};
option.cljs$lang$maxFixedArity = 0;
option.cljs$lang$applyTo = (function (arglist__26902){
var args__9337__auto__ = cljs.core.seq(arglist__26902);
return option__delegate(args__9337__auto__);
});
option.cljs$core$IFn$_invoke$arity$variadic = option__delegate;
return option;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.output = (function() { 
var output__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24883_26903 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24884_26904 = null;
var count__24885_26905 = (0);
var i__24886_26906 = (0);
while(true){
if((i__24886_26906 < count__24885_26905)){
var arg__9339__auto___26907 = cljs.core._nth.call(null,chunk__24884_26904,i__24886_26906);
a__9338__auto__.push(arg__9339__auto___26907);

var G__26908 = seq__24883_26903;
var G__26909 = chunk__24884_26904;
var G__26910 = count__24885_26905;
var G__26911 = (i__24886_26906 + (1));
seq__24883_26903 = G__26908;
chunk__24884_26904 = G__26909;
count__24885_26905 = G__26910;
i__24886_26906 = G__26911;
continue;
} else {
var temp__4126__auto___26912 = cljs.core.seq.call(null,seq__24883_26903);
if(temp__4126__auto___26912){
var seq__24883_26913__$1 = temp__4126__auto___26912;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24883_26913__$1)){
var c__4559__auto___26914 = cljs.core.chunk_first.call(null,seq__24883_26913__$1);
var G__26915 = cljs.core.chunk_rest.call(null,seq__24883_26913__$1);
var G__26916 = c__4559__auto___26914;
var G__26917 = cljs.core.count.call(null,c__4559__auto___26914);
var G__26918 = (0);
seq__24883_26903 = G__26915;
chunk__24884_26904 = G__26916;
count__24885_26905 = G__26917;
i__24886_26906 = G__26918;
continue;
} else {
var arg__9339__auto___26919 = cljs.core.first.call(null,seq__24883_26913__$1);
a__9338__auto__.push(arg__9339__auto___26919);

var G__26920 = cljs.core.next.call(null,seq__24883_26913__$1);
var G__26921 = null;
var G__26922 = (0);
var G__26923 = (0);
seq__24883_26903 = G__26920;
chunk__24884_26904 = G__26921;
count__24885_26905 = G__26922;
i__24886_26906 = G__26923;
continue;
}
} else {
}
}
break;
}

return React.DOM.output.apply(null,a__9338__auto__);
};
var output = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26924__i = 0, G__26924__a = new Array(arguments.length -  0);
while (G__26924__i < G__26924__a.length) {G__26924__a[G__26924__i] = arguments[G__26924__i + 0]; ++G__26924__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26924__a,0);
} 
return output__delegate.call(this,args__9337__auto__);};
output.cljs$lang$maxFixedArity = 0;
output.cljs$lang$applyTo = (function (arglist__26925){
var args__9337__auto__ = cljs.core.seq(arglist__26925);
return output__delegate(args__9337__auto__);
});
output.cljs$core$IFn$_invoke$arity$variadic = output__delegate;
return output;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.p = (function() { 
var p__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24891_26926 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24892_26927 = null;
var count__24893_26928 = (0);
var i__24894_26929 = (0);
while(true){
if((i__24894_26929 < count__24893_26928)){
var arg__9339__auto___26930 = cljs.core._nth.call(null,chunk__24892_26927,i__24894_26929);
a__9338__auto__.push(arg__9339__auto___26930);

var G__26931 = seq__24891_26926;
var G__26932 = chunk__24892_26927;
var G__26933 = count__24893_26928;
var G__26934 = (i__24894_26929 + (1));
seq__24891_26926 = G__26931;
chunk__24892_26927 = G__26932;
count__24893_26928 = G__26933;
i__24894_26929 = G__26934;
continue;
} else {
var temp__4126__auto___26935 = cljs.core.seq.call(null,seq__24891_26926);
if(temp__4126__auto___26935){
var seq__24891_26936__$1 = temp__4126__auto___26935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24891_26936__$1)){
var c__4559__auto___26937 = cljs.core.chunk_first.call(null,seq__24891_26936__$1);
var G__26938 = cljs.core.chunk_rest.call(null,seq__24891_26936__$1);
var G__26939 = c__4559__auto___26937;
var G__26940 = cljs.core.count.call(null,c__4559__auto___26937);
var G__26941 = (0);
seq__24891_26926 = G__26938;
chunk__24892_26927 = G__26939;
count__24893_26928 = G__26940;
i__24894_26929 = G__26941;
continue;
} else {
var arg__9339__auto___26942 = cljs.core.first.call(null,seq__24891_26936__$1);
a__9338__auto__.push(arg__9339__auto___26942);

var G__26943 = cljs.core.next.call(null,seq__24891_26936__$1);
var G__26944 = null;
var G__26945 = (0);
var G__26946 = (0);
seq__24891_26926 = G__26943;
chunk__24892_26927 = G__26944;
count__24893_26928 = G__26945;
i__24894_26929 = G__26946;
continue;
}
} else {
}
}
break;
}

return React.DOM.p.apply(null,a__9338__auto__);
};
var p = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26947__i = 0, G__26947__a = new Array(arguments.length -  0);
while (G__26947__i < G__26947__a.length) {G__26947__a[G__26947__i] = arguments[G__26947__i + 0]; ++G__26947__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26947__a,0);
} 
return p__delegate.call(this,args__9337__auto__);};
p.cljs$lang$maxFixedArity = 0;
p.cljs$lang$applyTo = (function (arglist__26948){
var args__9337__auto__ = cljs.core.seq(arglist__26948);
return p__delegate(args__9337__auto__);
});
p.cljs$core$IFn$_invoke$arity$variadic = p__delegate;
return p;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.param = (function() { 
var param__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24899_26949 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24900_26950 = null;
var count__24901_26951 = (0);
var i__24902_26952 = (0);
while(true){
if((i__24902_26952 < count__24901_26951)){
var arg__9339__auto___26953 = cljs.core._nth.call(null,chunk__24900_26950,i__24902_26952);
a__9338__auto__.push(arg__9339__auto___26953);

var G__26954 = seq__24899_26949;
var G__26955 = chunk__24900_26950;
var G__26956 = count__24901_26951;
var G__26957 = (i__24902_26952 + (1));
seq__24899_26949 = G__26954;
chunk__24900_26950 = G__26955;
count__24901_26951 = G__26956;
i__24902_26952 = G__26957;
continue;
} else {
var temp__4126__auto___26958 = cljs.core.seq.call(null,seq__24899_26949);
if(temp__4126__auto___26958){
var seq__24899_26959__$1 = temp__4126__auto___26958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24899_26959__$1)){
var c__4559__auto___26960 = cljs.core.chunk_first.call(null,seq__24899_26959__$1);
var G__26961 = cljs.core.chunk_rest.call(null,seq__24899_26959__$1);
var G__26962 = c__4559__auto___26960;
var G__26963 = cljs.core.count.call(null,c__4559__auto___26960);
var G__26964 = (0);
seq__24899_26949 = G__26961;
chunk__24900_26950 = G__26962;
count__24901_26951 = G__26963;
i__24902_26952 = G__26964;
continue;
} else {
var arg__9339__auto___26965 = cljs.core.first.call(null,seq__24899_26959__$1);
a__9338__auto__.push(arg__9339__auto___26965);

var G__26966 = cljs.core.next.call(null,seq__24899_26959__$1);
var G__26967 = null;
var G__26968 = (0);
var G__26969 = (0);
seq__24899_26949 = G__26966;
chunk__24900_26950 = G__26967;
count__24901_26951 = G__26968;
i__24902_26952 = G__26969;
continue;
}
} else {
}
}
break;
}

return React.DOM.param.apply(null,a__9338__auto__);
};
var param = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26970__i = 0, G__26970__a = new Array(arguments.length -  0);
while (G__26970__i < G__26970__a.length) {G__26970__a[G__26970__i] = arguments[G__26970__i + 0]; ++G__26970__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26970__a,0);
} 
return param__delegate.call(this,args__9337__auto__);};
param.cljs$lang$maxFixedArity = 0;
param.cljs$lang$applyTo = (function (arglist__26971){
var args__9337__auto__ = cljs.core.seq(arglist__26971);
return param__delegate(args__9337__auto__);
});
param.cljs$core$IFn$_invoke$arity$variadic = param__delegate;
return param;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.pre = (function() { 
var pre__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24907_26972 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24908_26973 = null;
var count__24909_26974 = (0);
var i__24910_26975 = (0);
while(true){
if((i__24910_26975 < count__24909_26974)){
var arg__9339__auto___26976 = cljs.core._nth.call(null,chunk__24908_26973,i__24910_26975);
a__9338__auto__.push(arg__9339__auto___26976);

var G__26977 = seq__24907_26972;
var G__26978 = chunk__24908_26973;
var G__26979 = count__24909_26974;
var G__26980 = (i__24910_26975 + (1));
seq__24907_26972 = G__26977;
chunk__24908_26973 = G__26978;
count__24909_26974 = G__26979;
i__24910_26975 = G__26980;
continue;
} else {
var temp__4126__auto___26981 = cljs.core.seq.call(null,seq__24907_26972);
if(temp__4126__auto___26981){
var seq__24907_26982__$1 = temp__4126__auto___26981;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24907_26982__$1)){
var c__4559__auto___26983 = cljs.core.chunk_first.call(null,seq__24907_26982__$1);
var G__26984 = cljs.core.chunk_rest.call(null,seq__24907_26982__$1);
var G__26985 = c__4559__auto___26983;
var G__26986 = cljs.core.count.call(null,c__4559__auto___26983);
var G__26987 = (0);
seq__24907_26972 = G__26984;
chunk__24908_26973 = G__26985;
count__24909_26974 = G__26986;
i__24910_26975 = G__26987;
continue;
} else {
var arg__9339__auto___26988 = cljs.core.first.call(null,seq__24907_26982__$1);
a__9338__auto__.push(arg__9339__auto___26988);

var G__26989 = cljs.core.next.call(null,seq__24907_26982__$1);
var G__26990 = null;
var G__26991 = (0);
var G__26992 = (0);
seq__24907_26972 = G__26989;
chunk__24908_26973 = G__26990;
count__24909_26974 = G__26991;
i__24910_26975 = G__26992;
continue;
}
} else {
}
}
break;
}

return React.DOM.pre.apply(null,a__9338__auto__);
};
var pre = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__26993__i = 0, G__26993__a = new Array(arguments.length -  0);
while (G__26993__i < G__26993__a.length) {G__26993__a[G__26993__i] = arguments[G__26993__i + 0]; ++G__26993__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__26993__a,0);
} 
return pre__delegate.call(this,args__9337__auto__);};
pre.cljs$lang$maxFixedArity = 0;
pre.cljs$lang$applyTo = (function (arglist__26994){
var args__9337__auto__ = cljs.core.seq(arglist__26994);
return pre__delegate(args__9337__auto__);
});
pre.cljs$core$IFn$_invoke$arity$variadic = pre__delegate;
return pre;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.progress = (function() { 
var progress__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24915_26995 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24916_26996 = null;
var count__24917_26997 = (0);
var i__24918_26998 = (0);
while(true){
if((i__24918_26998 < count__24917_26997)){
var arg__9339__auto___26999 = cljs.core._nth.call(null,chunk__24916_26996,i__24918_26998);
a__9338__auto__.push(arg__9339__auto___26999);

var G__27000 = seq__24915_26995;
var G__27001 = chunk__24916_26996;
var G__27002 = count__24917_26997;
var G__27003 = (i__24918_26998 + (1));
seq__24915_26995 = G__27000;
chunk__24916_26996 = G__27001;
count__24917_26997 = G__27002;
i__24918_26998 = G__27003;
continue;
} else {
var temp__4126__auto___27004 = cljs.core.seq.call(null,seq__24915_26995);
if(temp__4126__auto___27004){
var seq__24915_27005__$1 = temp__4126__auto___27004;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24915_27005__$1)){
var c__4559__auto___27006 = cljs.core.chunk_first.call(null,seq__24915_27005__$1);
var G__27007 = cljs.core.chunk_rest.call(null,seq__24915_27005__$1);
var G__27008 = c__4559__auto___27006;
var G__27009 = cljs.core.count.call(null,c__4559__auto___27006);
var G__27010 = (0);
seq__24915_26995 = G__27007;
chunk__24916_26996 = G__27008;
count__24917_26997 = G__27009;
i__24918_26998 = G__27010;
continue;
} else {
var arg__9339__auto___27011 = cljs.core.first.call(null,seq__24915_27005__$1);
a__9338__auto__.push(arg__9339__auto___27011);

var G__27012 = cljs.core.next.call(null,seq__24915_27005__$1);
var G__27013 = null;
var G__27014 = (0);
var G__27015 = (0);
seq__24915_26995 = G__27012;
chunk__24916_26996 = G__27013;
count__24917_26997 = G__27014;
i__24918_26998 = G__27015;
continue;
}
} else {
}
}
break;
}

return React.DOM.progress.apply(null,a__9338__auto__);
};
var progress = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27016__i = 0, G__27016__a = new Array(arguments.length -  0);
while (G__27016__i < G__27016__a.length) {G__27016__a[G__27016__i] = arguments[G__27016__i + 0]; ++G__27016__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27016__a,0);
} 
return progress__delegate.call(this,args__9337__auto__);};
progress.cljs$lang$maxFixedArity = 0;
progress.cljs$lang$applyTo = (function (arglist__27017){
var args__9337__auto__ = cljs.core.seq(arglist__27017);
return progress__delegate(args__9337__auto__);
});
progress.cljs$core$IFn$_invoke$arity$variadic = progress__delegate;
return progress;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.q = (function() { 
var q__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24923_27018 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24924_27019 = null;
var count__24925_27020 = (0);
var i__24926_27021 = (0);
while(true){
if((i__24926_27021 < count__24925_27020)){
var arg__9339__auto___27022 = cljs.core._nth.call(null,chunk__24924_27019,i__24926_27021);
a__9338__auto__.push(arg__9339__auto___27022);

var G__27023 = seq__24923_27018;
var G__27024 = chunk__24924_27019;
var G__27025 = count__24925_27020;
var G__27026 = (i__24926_27021 + (1));
seq__24923_27018 = G__27023;
chunk__24924_27019 = G__27024;
count__24925_27020 = G__27025;
i__24926_27021 = G__27026;
continue;
} else {
var temp__4126__auto___27027 = cljs.core.seq.call(null,seq__24923_27018);
if(temp__4126__auto___27027){
var seq__24923_27028__$1 = temp__4126__auto___27027;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24923_27028__$1)){
var c__4559__auto___27029 = cljs.core.chunk_first.call(null,seq__24923_27028__$1);
var G__27030 = cljs.core.chunk_rest.call(null,seq__24923_27028__$1);
var G__27031 = c__4559__auto___27029;
var G__27032 = cljs.core.count.call(null,c__4559__auto___27029);
var G__27033 = (0);
seq__24923_27018 = G__27030;
chunk__24924_27019 = G__27031;
count__24925_27020 = G__27032;
i__24926_27021 = G__27033;
continue;
} else {
var arg__9339__auto___27034 = cljs.core.first.call(null,seq__24923_27028__$1);
a__9338__auto__.push(arg__9339__auto___27034);

var G__27035 = cljs.core.next.call(null,seq__24923_27028__$1);
var G__27036 = null;
var G__27037 = (0);
var G__27038 = (0);
seq__24923_27018 = G__27035;
chunk__24924_27019 = G__27036;
count__24925_27020 = G__27037;
i__24926_27021 = G__27038;
continue;
}
} else {
}
}
break;
}

return React.DOM.q.apply(null,a__9338__auto__);
};
var q = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27039__i = 0, G__27039__a = new Array(arguments.length -  0);
while (G__27039__i < G__27039__a.length) {G__27039__a[G__27039__i] = arguments[G__27039__i + 0]; ++G__27039__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27039__a,0);
} 
return q__delegate.call(this,args__9337__auto__);};
q.cljs$lang$maxFixedArity = 0;
q.cljs$lang$applyTo = (function (arglist__27040){
var args__9337__auto__ = cljs.core.seq(arglist__27040);
return q__delegate(args__9337__auto__);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rp = (function() { 
var rp__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24931_27041 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24932_27042 = null;
var count__24933_27043 = (0);
var i__24934_27044 = (0);
while(true){
if((i__24934_27044 < count__24933_27043)){
var arg__9339__auto___27045 = cljs.core._nth.call(null,chunk__24932_27042,i__24934_27044);
a__9338__auto__.push(arg__9339__auto___27045);

var G__27046 = seq__24931_27041;
var G__27047 = chunk__24932_27042;
var G__27048 = count__24933_27043;
var G__27049 = (i__24934_27044 + (1));
seq__24931_27041 = G__27046;
chunk__24932_27042 = G__27047;
count__24933_27043 = G__27048;
i__24934_27044 = G__27049;
continue;
} else {
var temp__4126__auto___27050 = cljs.core.seq.call(null,seq__24931_27041);
if(temp__4126__auto___27050){
var seq__24931_27051__$1 = temp__4126__auto___27050;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24931_27051__$1)){
var c__4559__auto___27052 = cljs.core.chunk_first.call(null,seq__24931_27051__$1);
var G__27053 = cljs.core.chunk_rest.call(null,seq__24931_27051__$1);
var G__27054 = c__4559__auto___27052;
var G__27055 = cljs.core.count.call(null,c__4559__auto___27052);
var G__27056 = (0);
seq__24931_27041 = G__27053;
chunk__24932_27042 = G__27054;
count__24933_27043 = G__27055;
i__24934_27044 = G__27056;
continue;
} else {
var arg__9339__auto___27057 = cljs.core.first.call(null,seq__24931_27051__$1);
a__9338__auto__.push(arg__9339__auto___27057);

var G__27058 = cljs.core.next.call(null,seq__24931_27051__$1);
var G__27059 = null;
var G__27060 = (0);
var G__27061 = (0);
seq__24931_27041 = G__27058;
chunk__24932_27042 = G__27059;
count__24933_27043 = G__27060;
i__24934_27044 = G__27061;
continue;
}
} else {
}
}
break;
}

return React.DOM.rp.apply(null,a__9338__auto__);
};
var rp = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27062__i = 0, G__27062__a = new Array(arguments.length -  0);
while (G__27062__i < G__27062__a.length) {G__27062__a[G__27062__i] = arguments[G__27062__i + 0]; ++G__27062__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27062__a,0);
} 
return rp__delegate.call(this,args__9337__auto__);};
rp.cljs$lang$maxFixedArity = 0;
rp.cljs$lang$applyTo = (function (arglist__27063){
var args__9337__auto__ = cljs.core.seq(arglist__27063);
return rp__delegate(args__9337__auto__);
});
rp.cljs$core$IFn$_invoke$arity$variadic = rp__delegate;
return rp;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rt = (function() { 
var rt__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24939_27064 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24940_27065 = null;
var count__24941_27066 = (0);
var i__24942_27067 = (0);
while(true){
if((i__24942_27067 < count__24941_27066)){
var arg__9339__auto___27068 = cljs.core._nth.call(null,chunk__24940_27065,i__24942_27067);
a__9338__auto__.push(arg__9339__auto___27068);

var G__27069 = seq__24939_27064;
var G__27070 = chunk__24940_27065;
var G__27071 = count__24941_27066;
var G__27072 = (i__24942_27067 + (1));
seq__24939_27064 = G__27069;
chunk__24940_27065 = G__27070;
count__24941_27066 = G__27071;
i__24942_27067 = G__27072;
continue;
} else {
var temp__4126__auto___27073 = cljs.core.seq.call(null,seq__24939_27064);
if(temp__4126__auto___27073){
var seq__24939_27074__$1 = temp__4126__auto___27073;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24939_27074__$1)){
var c__4559__auto___27075 = cljs.core.chunk_first.call(null,seq__24939_27074__$1);
var G__27076 = cljs.core.chunk_rest.call(null,seq__24939_27074__$1);
var G__27077 = c__4559__auto___27075;
var G__27078 = cljs.core.count.call(null,c__4559__auto___27075);
var G__27079 = (0);
seq__24939_27064 = G__27076;
chunk__24940_27065 = G__27077;
count__24941_27066 = G__27078;
i__24942_27067 = G__27079;
continue;
} else {
var arg__9339__auto___27080 = cljs.core.first.call(null,seq__24939_27074__$1);
a__9338__auto__.push(arg__9339__auto___27080);

var G__27081 = cljs.core.next.call(null,seq__24939_27074__$1);
var G__27082 = null;
var G__27083 = (0);
var G__27084 = (0);
seq__24939_27064 = G__27081;
chunk__24940_27065 = G__27082;
count__24941_27066 = G__27083;
i__24942_27067 = G__27084;
continue;
}
} else {
}
}
break;
}

return React.DOM.rt.apply(null,a__9338__auto__);
};
var rt = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27085__i = 0, G__27085__a = new Array(arguments.length -  0);
while (G__27085__i < G__27085__a.length) {G__27085__a[G__27085__i] = arguments[G__27085__i + 0]; ++G__27085__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27085__a,0);
} 
return rt__delegate.call(this,args__9337__auto__);};
rt.cljs$lang$maxFixedArity = 0;
rt.cljs$lang$applyTo = (function (arglist__27086){
var args__9337__auto__ = cljs.core.seq(arglist__27086);
return rt__delegate(args__9337__auto__);
});
rt.cljs$core$IFn$_invoke$arity$variadic = rt__delegate;
return rt;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ruby = (function() { 
var ruby__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24947_27087 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24948_27088 = null;
var count__24949_27089 = (0);
var i__24950_27090 = (0);
while(true){
if((i__24950_27090 < count__24949_27089)){
var arg__9339__auto___27091 = cljs.core._nth.call(null,chunk__24948_27088,i__24950_27090);
a__9338__auto__.push(arg__9339__auto___27091);

var G__27092 = seq__24947_27087;
var G__27093 = chunk__24948_27088;
var G__27094 = count__24949_27089;
var G__27095 = (i__24950_27090 + (1));
seq__24947_27087 = G__27092;
chunk__24948_27088 = G__27093;
count__24949_27089 = G__27094;
i__24950_27090 = G__27095;
continue;
} else {
var temp__4126__auto___27096 = cljs.core.seq.call(null,seq__24947_27087);
if(temp__4126__auto___27096){
var seq__24947_27097__$1 = temp__4126__auto___27096;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24947_27097__$1)){
var c__4559__auto___27098 = cljs.core.chunk_first.call(null,seq__24947_27097__$1);
var G__27099 = cljs.core.chunk_rest.call(null,seq__24947_27097__$1);
var G__27100 = c__4559__auto___27098;
var G__27101 = cljs.core.count.call(null,c__4559__auto___27098);
var G__27102 = (0);
seq__24947_27087 = G__27099;
chunk__24948_27088 = G__27100;
count__24949_27089 = G__27101;
i__24950_27090 = G__27102;
continue;
} else {
var arg__9339__auto___27103 = cljs.core.first.call(null,seq__24947_27097__$1);
a__9338__auto__.push(arg__9339__auto___27103);

var G__27104 = cljs.core.next.call(null,seq__24947_27097__$1);
var G__27105 = null;
var G__27106 = (0);
var G__27107 = (0);
seq__24947_27087 = G__27104;
chunk__24948_27088 = G__27105;
count__24949_27089 = G__27106;
i__24950_27090 = G__27107;
continue;
}
} else {
}
}
break;
}

return React.DOM.ruby.apply(null,a__9338__auto__);
};
var ruby = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27108__i = 0, G__27108__a = new Array(arguments.length -  0);
while (G__27108__i < G__27108__a.length) {G__27108__a[G__27108__i] = arguments[G__27108__i + 0]; ++G__27108__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27108__a,0);
} 
return ruby__delegate.call(this,args__9337__auto__);};
ruby.cljs$lang$maxFixedArity = 0;
ruby.cljs$lang$applyTo = (function (arglist__27109){
var args__9337__auto__ = cljs.core.seq(arglist__27109);
return ruby__delegate(args__9337__auto__);
});
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__delegate;
return ruby;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.s = (function() { 
var s__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24955_27110 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24956_27111 = null;
var count__24957_27112 = (0);
var i__24958_27113 = (0);
while(true){
if((i__24958_27113 < count__24957_27112)){
var arg__9339__auto___27114 = cljs.core._nth.call(null,chunk__24956_27111,i__24958_27113);
a__9338__auto__.push(arg__9339__auto___27114);

var G__27115 = seq__24955_27110;
var G__27116 = chunk__24956_27111;
var G__27117 = count__24957_27112;
var G__27118 = (i__24958_27113 + (1));
seq__24955_27110 = G__27115;
chunk__24956_27111 = G__27116;
count__24957_27112 = G__27117;
i__24958_27113 = G__27118;
continue;
} else {
var temp__4126__auto___27119 = cljs.core.seq.call(null,seq__24955_27110);
if(temp__4126__auto___27119){
var seq__24955_27120__$1 = temp__4126__auto___27119;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24955_27120__$1)){
var c__4559__auto___27121 = cljs.core.chunk_first.call(null,seq__24955_27120__$1);
var G__27122 = cljs.core.chunk_rest.call(null,seq__24955_27120__$1);
var G__27123 = c__4559__auto___27121;
var G__27124 = cljs.core.count.call(null,c__4559__auto___27121);
var G__27125 = (0);
seq__24955_27110 = G__27122;
chunk__24956_27111 = G__27123;
count__24957_27112 = G__27124;
i__24958_27113 = G__27125;
continue;
} else {
var arg__9339__auto___27126 = cljs.core.first.call(null,seq__24955_27120__$1);
a__9338__auto__.push(arg__9339__auto___27126);

var G__27127 = cljs.core.next.call(null,seq__24955_27120__$1);
var G__27128 = null;
var G__27129 = (0);
var G__27130 = (0);
seq__24955_27110 = G__27127;
chunk__24956_27111 = G__27128;
count__24957_27112 = G__27129;
i__24958_27113 = G__27130;
continue;
}
} else {
}
}
break;
}

return React.DOM.s.apply(null,a__9338__auto__);
};
var s = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27131__i = 0, G__27131__a = new Array(arguments.length -  0);
while (G__27131__i < G__27131__a.length) {G__27131__a[G__27131__i] = arguments[G__27131__i + 0]; ++G__27131__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27131__a,0);
} 
return s__delegate.call(this,args__9337__auto__);};
s.cljs$lang$maxFixedArity = 0;
s.cljs$lang$applyTo = (function (arglist__27132){
var args__9337__auto__ = cljs.core.seq(arglist__27132);
return s__delegate(args__9337__auto__);
});
s.cljs$core$IFn$_invoke$arity$variadic = s__delegate;
return s;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.samp = (function() { 
var samp__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24963_27133 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24964_27134 = null;
var count__24965_27135 = (0);
var i__24966_27136 = (0);
while(true){
if((i__24966_27136 < count__24965_27135)){
var arg__9339__auto___27137 = cljs.core._nth.call(null,chunk__24964_27134,i__24966_27136);
a__9338__auto__.push(arg__9339__auto___27137);

var G__27138 = seq__24963_27133;
var G__27139 = chunk__24964_27134;
var G__27140 = count__24965_27135;
var G__27141 = (i__24966_27136 + (1));
seq__24963_27133 = G__27138;
chunk__24964_27134 = G__27139;
count__24965_27135 = G__27140;
i__24966_27136 = G__27141;
continue;
} else {
var temp__4126__auto___27142 = cljs.core.seq.call(null,seq__24963_27133);
if(temp__4126__auto___27142){
var seq__24963_27143__$1 = temp__4126__auto___27142;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24963_27143__$1)){
var c__4559__auto___27144 = cljs.core.chunk_first.call(null,seq__24963_27143__$1);
var G__27145 = cljs.core.chunk_rest.call(null,seq__24963_27143__$1);
var G__27146 = c__4559__auto___27144;
var G__27147 = cljs.core.count.call(null,c__4559__auto___27144);
var G__27148 = (0);
seq__24963_27133 = G__27145;
chunk__24964_27134 = G__27146;
count__24965_27135 = G__27147;
i__24966_27136 = G__27148;
continue;
} else {
var arg__9339__auto___27149 = cljs.core.first.call(null,seq__24963_27143__$1);
a__9338__auto__.push(arg__9339__auto___27149);

var G__27150 = cljs.core.next.call(null,seq__24963_27143__$1);
var G__27151 = null;
var G__27152 = (0);
var G__27153 = (0);
seq__24963_27133 = G__27150;
chunk__24964_27134 = G__27151;
count__24965_27135 = G__27152;
i__24966_27136 = G__27153;
continue;
}
} else {
}
}
break;
}

return React.DOM.samp.apply(null,a__9338__auto__);
};
var samp = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27154__i = 0, G__27154__a = new Array(arguments.length -  0);
while (G__27154__i < G__27154__a.length) {G__27154__a[G__27154__i] = arguments[G__27154__i + 0]; ++G__27154__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27154__a,0);
} 
return samp__delegate.call(this,args__9337__auto__);};
samp.cljs$lang$maxFixedArity = 0;
samp.cljs$lang$applyTo = (function (arglist__27155){
var args__9337__auto__ = cljs.core.seq(arglist__27155);
return samp__delegate(args__9337__auto__);
});
samp.cljs$core$IFn$_invoke$arity$variadic = samp__delegate;
return samp;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.script = (function() { 
var script__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24971_27156 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24972_27157 = null;
var count__24973_27158 = (0);
var i__24974_27159 = (0);
while(true){
if((i__24974_27159 < count__24973_27158)){
var arg__9339__auto___27160 = cljs.core._nth.call(null,chunk__24972_27157,i__24974_27159);
a__9338__auto__.push(arg__9339__auto___27160);

var G__27161 = seq__24971_27156;
var G__27162 = chunk__24972_27157;
var G__27163 = count__24973_27158;
var G__27164 = (i__24974_27159 + (1));
seq__24971_27156 = G__27161;
chunk__24972_27157 = G__27162;
count__24973_27158 = G__27163;
i__24974_27159 = G__27164;
continue;
} else {
var temp__4126__auto___27165 = cljs.core.seq.call(null,seq__24971_27156);
if(temp__4126__auto___27165){
var seq__24971_27166__$1 = temp__4126__auto___27165;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24971_27166__$1)){
var c__4559__auto___27167 = cljs.core.chunk_first.call(null,seq__24971_27166__$1);
var G__27168 = cljs.core.chunk_rest.call(null,seq__24971_27166__$1);
var G__27169 = c__4559__auto___27167;
var G__27170 = cljs.core.count.call(null,c__4559__auto___27167);
var G__27171 = (0);
seq__24971_27156 = G__27168;
chunk__24972_27157 = G__27169;
count__24973_27158 = G__27170;
i__24974_27159 = G__27171;
continue;
} else {
var arg__9339__auto___27172 = cljs.core.first.call(null,seq__24971_27166__$1);
a__9338__auto__.push(arg__9339__auto___27172);

var G__27173 = cljs.core.next.call(null,seq__24971_27166__$1);
var G__27174 = null;
var G__27175 = (0);
var G__27176 = (0);
seq__24971_27156 = G__27173;
chunk__24972_27157 = G__27174;
count__24973_27158 = G__27175;
i__24974_27159 = G__27176;
continue;
}
} else {
}
}
break;
}

return React.DOM.script.apply(null,a__9338__auto__);
};
var script = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27177__i = 0, G__27177__a = new Array(arguments.length -  0);
while (G__27177__i < G__27177__a.length) {G__27177__a[G__27177__i] = arguments[G__27177__i + 0]; ++G__27177__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27177__a,0);
} 
return script__delegate.call(this,args__9337__auto__);};
script.cljs$lang$maxFixedArity = 0;
script.cljs$lang$applyTo = (function (arglist__27178){
var args__9337__auto__ = cljs.core.seq(arglist__27178);
return script__delegate(args__9337__auto__);
});
script.cljs$core$IFn$_invoke$arity$variadic = script__delegate;
return script;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.section = (function() { 
var section__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24979_27179 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24980_27180 = null;
var count__24981_27181 = (0);
var i__24982_27182 = (0);
while(true){
if((i__24982_27182 < count__24981_27181)){
var arg__9339__auto___27183 = cljs.core._nth.call(null,chunk__24980_27180,i__24982_27182);
a__9338__auto__.push(arg__9339__auto___27183);

var G__27184 = seq__24979_27179;
var G__27185 = chunk__24980_27180;
var G__27186 = count__24981_27181;
var G__27187 = (i__24982_27182 + (1));
seq__24979_27179 = G__27184;
chunk__24980_27180 = G__27185;
count__24981_27181 = G__27186;
i__24982_27182 = G__27187;
continue;
} else {
var temp__4126__auto___27188 = cljs.core.seq.call(null,seq__24979_27179);
if(temp__4126__auto___27188){
var seq__24979_27189__$1 = temp__4126__auto___27188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24979_27189__$1)){
var c__4559__auto___27190 = cljs.core.chunk_first.call(null,seq__24979_27189__$1);
var G__27191 = cljs.core.chunk_rest.call(null,seq__24979_27189__$1);
var G__27192 = c__4559__auto___27190;
var G__27193 = cljs.core.count.call(null,c__4559__auto___27190);
var G__27194 = (0);
seq__24979_27179 = G__27191;
chunk__24980_27180 = G__27192;
count__24981_27181 = G__27193;
i__24982_27182 = G__27194;
continue;
} else {
var arg__9339__auto___27195 = cljs.core.first.call(null,seq__24979_27189__$1);
a__9338__auto__.push(arg__9339__auto___27195);

var G__27196 = cljs.core.next.call(null,seq__24979_27189__$1);
var G__27197 = null;
var G__27198 = (0);
var G__27199 = (0);
seq__24979_27179 = G__27196;
chunk__24980_27180 = G__27197;
count__24981_27181 = G__27198;
i__24982_27182 = G__27199;
continue;
}
} else {
}
}
break;
}

return React.DOM.section.apply(null,a__9338__auto__);
};
var section = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27200__i = 0, G__27200__a = new Array(arguments.length -  0);
while (G__27200__i < G__27200__a.length) {G__27200__a[G__27200__i] = arguments[G__27200__i + 0]; ++G__27200__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27200__a,0);
} 
return section__delegate.call(this,args__9337__auto__);};
section.cljs$lang$maxFixedArity = 0;
section.cljs$lang$applyTo = (function (arglist__27201){
var args__9337__auto__ = cljs.core.seq(arglist__27201);
return section__delegate(args__9337__auto__);
});
section.cljs$core$IFn$_invoke$arity$variadic = section__delegate;
return section;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.select = (function() { 
var select__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24987_27202 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24988_27203 = null;
var count__24989_27204 = (0);
var i__24990_27205 = (0);
while(true){
if((i__24990_27205 < count__24989_27204)){
var arg__9339__auto___27206 = cljs.core._nth.call(null,chunk__24988_27203,i__24990_27205);
a__9338__auto__.push(arg__9339__auto___27206);

var G__27207 = seq__24987_27202;
var G__27208 = chunk__24988_27203;
var G__27209 = count__24989_27204;
var G__27210 = (i__24990_27205 + (1));
seq__24987_27202 = G__27207;
chunk__24988_27203 = G__27208;
count__24989_27204 = G__27209;
i__24990_27205 = G__27210;
continue;
} else {
var temp__4126__auto___27211 = cljs.core.seq.call(null,seq__24987_27202);
if(temp__4126__auto___27211){
var seq__24987_27212__$1 = temp__4126__auto___27211;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24987_27212__$1)){
var c__4559__auto___27213 = cljs.core.chunk_first.call(null,seq__24987_27212__$1);
var G__27214 = cljs.core.chunk_rest.call(null,seq__24987_27212__$1);
var G__27215 = c__4559__auto___27213;
var G__27216 = cljs.core.count.call(null,c__4559__auto___27213);
var G__27217 = (0);
seq__24987_27202 = G__27214;
chunk__24988_27203 = G__27215;
count__24989_27204 = G__27216;
i__24990_27205 = G__27217;
continue;
} else {
var arg__9339__auto___27218 = cljs.core.first.call(null,seq__24987_27212__$1);
a__9338__auto__.push(arg__9339__auto___27218);

var G__27219 = cljs.core.next.call(null,seq__24987_27212__$1);
var G__27220 = null;
var G__27221 = (0);
var G__27222 = (0);
seq__24987_27202 = G__27219;
chunk__24988_27203 = G__27220;
count__24989_27204 = G__27221;
i__24990_27205 = G__27222;
continue;
}
} else {
}
}
break;
}

return React.DOM.select.apply(null,a__9338__auto__);
};
var select = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27223__i = 0, G__27223__a = new Array(arguments.length -  0);
while (G__27223__i < G__27223__a.length) {G__27223__a[G__27223__i] = arguments[G__27223__i + 0]; ++G__27223__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27223__a,0);
} 
return select__delegate.call(this,args__9337__auto__);};
select.cljs$lang$maxFixedArity = 0;
select.cljs$lang$applyTo = (function (arglist__27224){
var args__9337__auto__ = cljs.core.seq(arglist__27224);
return select__delegate(args__9337__auto__);
});
select.cljs$core$IFn$_invoke$arity$variadic = select__delegate;
return select;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.small = (function() { 
var small__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24995_27225 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24996_27226 = null;
var count__24997_27227 = (0);
var i__24998_27228 = (0);
while(true){
if((i__24998_27228 < count__24997_27227)){
var arg__9339__auto___27229 = cljs.core._nth.call(null,chunk__24996_27226,i__24998_27228);
a__9338__auto__.push(arg__9339__auto___27229);

var G__27230 = seq__24995_27225;
var G__27231 = chunk__24996_27226;
var G__27232 = count__24997_27227;
var G__27233 = (i__24998_27228 + (1));
seq__24995_27225 = G__27230;
chunk__24996_27226 = G__27231;
count__24997_27227 = G__27232;
i__24998_27228 = G__27233;
continue;
} else {
var temp__4126__auto___27234 = cljs.core.seq.call(null,seq__24995_27225);
if(temp__4126__auto___27234){
var seq__24995_27235__$1 = temp__4126__auto___27234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24995_27235__$1)){
var c__4559__auto___27236 = cljs.core.chunk_first.call(null,seq__24995_27235__$1);
var G__27237 = cljs.core.chunk_rest.call(null,seq__24995_27235__$1);
var G__27238 = c__4559__auto___27236;
var G__27239 = cljs.core.count.call(null,c__4559__auto___27236);
var G__27240 = (0);
seq__24995_27225 = G__27237;
chunk__24996_27226 = G__27238;
count__24997_27227 = G__27239;
i__24998_27228 = G__27240;
continue;
} else {
var arg__9339__auto___27241 = cljs.core.first.call(null,seq__24995_27235__$1);
a__9338__auto__.push(arg__9339__auto___27241);

var G__27242 = cljs.core.next.call(null,seq__24995_27235__$1);
var G__27243 = null;
var G__27244 = (0);
var G__27245 = (0);
seq__24995_27225 = G__27242;
chunk__24996_27226 = G__27243;
count__24997_27227 = G__27244;
i__24998_27228 = G__27245;
continue;
}
} else {
}
}
break;
}

return React.DOM.small.apply(null,a__9338__auto__);
};
var small = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27246__i = 0, G__27246__a = new Array(arguments.length -  0);
while (G__27246__i < G__27246__a.length) {G__27246__a[G__27246__i] = arguments[G__27246__i + 0]; ++G__27246__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27246__a,0);
} 
return small__delegate.call(this,args__9337__auto__);};
small.cljs$lang$maxFixedArity = 0;
small.cljs$lang$applyTo = (function (arglist__27247){
var args__9337__auto__ = cljs.core.seq(arglist__27247);
return small__delegate(args__9337__auto__);
});
small.cljs$core$IFn$_invoke$arity$variadic = small__delegate;
return small;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.source = (function() { 
var source__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25003_27248 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25004_27249 = null;
var count__25005_27250 = (0);
var i__25006_27251 = (0);
while(true){
if((i__25006_27251 < count__25005_27250)){
var arg__9339__auto___27252 = cljs.core._nth.call(null,chunk__25004_27249,i__25006_27251);
a__9338__auto__.push(arg__9339__auto___27252);

var G__27253 = seq__25003_27248;
var G__27254 = chunk__25004_27249;
var G__27255 = count__25005_27250;
var G__27256 = (i__25006_27251 + (1));
seq__25003_27248 = G__27253;
chunk__25004_27249 = G__27254;
count__25005_27250 = G__27255;
i__25006_27251 = G__27256;
continue;
} else {
var temp__4126__auto___27257 = cljs.core.seq.call(null,seq__25003_27248);
if(temp__4126__auto___27257){
var seq__25003_27258__$1 = temp__4126__auto___27257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25003_27258__$1)){
var c__4559__auto___27259 = cljs.core.chunk_first.call(null,seq__25003_27258__$1);
var G__27260 = cljs.core.chunk_rest.call(null,seq__25003_27258__$1);
var G__27261 = c__4559__auto___27259;
var G__27262 = cljs.core.count.call(null,c__4559__auto___27259);
var G__27263 = (0);
seq__25003_27248 = G__27260;
chunk__25004_27249 = G__27261;
count__25005_27250 = G__27262;
i__25006_27251 = G__27263;
continue;
} else {
var arg__9339__auto___27264 = cljs.core.first.call(null,seq__25003_27258__$1);
a__9338__auto__.push(arg__9339__auto___27264);

var G__27265 = cljs.core.next.call(null,seq__25003_27258__$1);
var G__27266 = null;
var G__27267 = (0);
var G__27268 = (0);
seq__25003_27248 = G__27265;
chunk__25004_27249 = G__27266;
count__25005_27250 = G__27267;
i__25006_27251 = G__27268;
continue;
}
} else {
}
}
break;
}

return React.DOM.source.apply(null,a__9338__auto__);
};
var source = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27269__i = 0, G__27269__a = new Array(arguments.length -  0);
while (G__27269__i < G__27269__a.length) {G__27269__a[G__27269__i] = arguments[G__27269__i + 0]; ++G__27269__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27269__a,0);
} 
return source__delegate.call(this,args__9337__auto__);};
source.cljs$lang$maxFixedArity = 0;
source.cljs$lang$applyTo = (function (arglist__27270){
var args__9337__auto__ = cljs.core.seq(arglist__27270);
return source__delegate(args__9337__auto__);
});
source.cljs$core$IFn$_invoke$arity$variadic = source__delegate;
return source;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.span = (function() { 
var span__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25011_27271 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25012_27272 = null;
var count__25013_27273 = (0);
var i__25014_27274 = (0);
while(true){
if((i__25014_27274 < count__25013_27273)){
var arg__9339__auto___27275 = cljs.core._nth.call(null,chunk__25012_27272,i__25014_27274);
a__9338__auto__.push(arg__9339__auto___27275);

var G__27276 = seq__25011_27271;
var G__27277 = chunk__25012_27272;
var G__27278 = count__25013_27273;
var G__27279 = (i__25014_27274 + (1));
seq__25011_27271 = G__27276;
chunk__25012_27272 = G__27277;
count__25013_27273 = G__27278;
i__25014_27274 = G__27279;
continue;
} else {
var temp__4126__auto___27280 = cljs.core.seq.call(null,seq__25011_27271);
if(temp__4126__auto___27280){
var seq__25011_27281__$1 = temp__4126__auto___27280;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25011_27281__$1)){
var c__4559__auto___27282 = cljs.core.chunk_first.call(null,seq__25011_27281__$1);
var G__27283 = cljs.core.chunk_rest.call(null,seq__25011_27281__$1);
var G__27284 = c__4559__auto___27282;
var G__27285 = cljs.core.count.call(null,c__4559__auto___27282);
var G__27286 = (0);
seq__25011_27271 = G__27283;
chunk__25012_27272 = G__27284;
count__25013_27273 = G__27285;
i__25014_27274 = G__27286;
continue;
} else {
var arg__9339__auto___27287 = cljs.core.first.call(null,seq__25011_27281__$1);
a__9338__auto__.push(arg__9339__auto___27287);

var G__27288 = cljs.core.next.call(null,seq__25011_27281__$1);
var G__27289 = null;
var G__27290 = (0);
var G__27291 = (0);
seq__25011_27271 = G__27288;
chunk__25012_27272 = G__27289;
count__25013_27273 = G__27290;
i__25014_27274 = G__27291;
continue;
}
} else {
}
}
break;
}

return React.DOM.span.apply(null,a__9338__auto__);
};
var span = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27292__i = 0, G__27292__a = new Array(arguments.length -  0);
while (G__27292__i < G__27292__a.length) {G__27292__a[G__27292__i] = arguments[G__27292__i + 0]; ++G__27292__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27292__a,0);
} 
return span__delegate.call(this,args__9337__auto__);};
span.cljs$lang$maxFixedArity = 0;
span.cljs$lang$applyTo = (function (arglist__27293){
var args__9337__auto__ = cljs.core.seq(arglist__27293);
return span__delegate(args__9337__auto__);
});
span.cljs$core$IFn$_invoke$arity$variadic = span__delegate;
return span;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.strong = (function() { 
var strong__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25019_27294 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25020_27295 = null;
var count__25021_27296 = (0);
var i__25022_27297 = (0);
while(true){
if((i__25022_27297 < count__25021_27296)){
var arg__9339__auto___27298 = cljs.core._nth.call(null,chunk__25020_27295,i__25022_27297);
a__9338__auto__.push(arg__9339__auto___27298);

var G__27299 = seq__25019_27294;
var G__27300 = chunk__25020_27295;
var G__27301 = count__25021_27296;
var G__27302 = (i__25022_27297 + (1));
seq__25019_27294 = G__27299;
chunk__25020_27295 = G__27300;
count__25021_27296 = G__27301;
i__25022_27297 = G__27302;
continue;
} else {
var temp__4126__auto___27303 = cljs.core.seq.call(null,seq__25019_27294);
if(temp__4126__auto___27303){
var seq__25019_27304__$1 = temp__4126__auto___27303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25019_27304__$1)){
var c__4559__auto___27305 = cljs.core.chunk_first.call(null,seq__25019_27304__$1);
var G__27306 = cljs.core.chunk_rest.call(null,seq__25019_27304__$1);
var G__27307 = c__4559__auto___27305;
var G__27308 = cljs.core.count.call(null,c__4559__auto___27305);
var G__27309 = (0);
seq__25019_27294 = G__27306;
chunk__25020_27295 = G__27307;
count__25021_27296 = G__27308;
i__25022_27297 = G__27309;
continue;
} else {
var arg__9339__auto___27310 = cljs.core.first.call(null,seq__25019_27304__$1);
a__9338__auto__.push(arg__9339__auto___27310);

var G__27311 = cljs.core.next.call(null,seq__25019_27304__$1);
var G__27312 = null;
var G__27313 = (0);
var G__27314 = (0);
seq__25019_27294 = G__27311;
chunk__25020_27295 = G__27312;
count__25021_27296 = G__27313;
i__25022_27297 = G__27314;
continue;
}
} else {
}
}
break;
}

return React.DOM.strong.apply(null,a__9338__auto__);
};
var strong = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27315__i = 0, G__27315__a = new Array(arguments.length -  0);
while (G__27315__i < G__27315__a.length) {G__27315__a[G__27315__i] = arguments[G__27315__i + 0]; ++G__27315__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27315__a,0);
} 
return strong__delegate.call(this,args__9337__auto__);};
strong.cljs$lang$maxFixedArity = 0;
strong.cljs$lang$applyTo = (function (arglist__27316){
var args__9337__auto__ = cljs.core.seq(arglist__27316);
return strong__delegate(args__9337__auto__);
});
strong.cljs$core$IFn$_invoke$arity$variadic = strong__delegate;
return strong;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.style = (function() { 
var style__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25027_27317 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25028_27318 = null;
var count__25029_27319 = (0);
var i__25030_27320 = (0);
while(true){
if((i__25030_27320 < count__25029_27319)){
var arg__9339__auto___27321 = cljs.core._nth.call(null,chunk__25028_27318,i__25030_27320);
a__9338__auto__.push(arg__9339__auto___27321);

var G__27322 = seq__25027_27317;
var G__27323 = chunk__25028_27318;
var G__27324 = count__25029_27319;
var G__27325 = (i__25030_27320 + (1));
seq__25027_27317 = G__27322;
chunk__25028_27318 = G__27323;
count__25029_27319 = G__27324;
i__25030_27320 = G__27325;
continue;
} else {
var temp__4126__auto___27326 = cljs.core.seq.call(null,seq__25027_27317);
if(temp__4126__auto___27326){
var seq__25027_27327__$1 = temp__4126__auto___27326;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25027_27327__$1)){
var c__4559__auto___27328 = cljs.core.chunk_first.call(null,seq__25027_27327__$1);
var G__27329 = cljs.core.chunk_rest.call(null,seq__25027_27327__$1);
var G__27330 = c__4559__auto___27328;
var G__27331 = cljs.core.count.call(null,c__4559__auto___27328);
var G__27332 = (0);
seq__25027_27317 = G__27329;
chunk__25028_27318 = G__27330;
count__25029_27319 = G__27331;
i__25030_27320 = G__27332;
continue;
} else {
var arg__9339__auto___27333 = cljs.core.first.call(null,seq__25027_27327__$1);
a__9338__auto__.push(arg__9339__auto___27333);

var G__27334 = cljs.core.next.call(null,seq__25027_27327__$1);
var G__27335 = null;
var G__27336 = (0);
var G__27337 = (0);
seq__25027_27317 = G__27334;
chunk__25028_27318 = G__27335;
count__25029_27319 = G__27336;
i__25030_27320 = G__27337;
continue;
}
} else {
}
}
break;
}

return React.DOM.style.apply(null,a__9338__auto__);
};
var style = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27338__i = 0, G__27338__a = new Array(arguments.length -  0);
while (G__27338__i < G__27338__a.length) {G__27338__a[G__27338__i] = arguments[G__27338__i + 0]; ++G__27338__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27338__a,0);
} 
return style__delegate.call(this,args__9337__auto__);};
style.cljs$lang$maxFixedArity = 0;
style.cljs$lang$applyTo = (function (arglist__27339){
var args__9337__auto__ = cljs.core.seq(arglist__27339);
return style__delegate(args__9337__auto__);
});
style.cljs$core$IFn$_invoke$arity$variadic = style__delegate;
return style;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.sub = (function() { 
var sub__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25035_27340 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25036_27341 = null;
var count__25037_27342 = (0);
var i__25038_27343 = (0);
while(true){
if((i__25038_27343 < count__25037_27342)){
var arg__9339__auto___27344 = cljs.core._nth.call(null,chunk__25036_27341,i__25038_27343);
a__9338__auto__.push(arg__9339__auto___27344);

var G__27345 = seq__25035_27340;
var G__27346 = chunk__25036_27341;
var G__27347 = count__25037_27342;
var G__27348 = (i__25038_27343 + (1));
seq__25035_27340 = G__27345;
chunk__25036_27341 = G__27346;
count__25037_27342 = G__27347;
i__25038_27343 = G__27348;
continue;
} else {
var temp__4126__auto___27349 = cljs.core.seq.call(null,seq__25035_27340);
if(temp__4126__auto___27349){
var seq__25035_27350__$1 = temp__4126__auto___27349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25035_27350__$1)){
var c__4559__auto___27351 = cljs.core.chunk_first.call(null,seq__25035_27350__$1);
var G__27352 = cljs.core.chunk_rest.call(null,seq__25035_27350__$1);
var G__27353 = c__4559__auto___27351;
var G__27354 = cljs.core.count.call(null,c__4559__auto___27351);
var G__27355 = (0);
seq__25035_27340 = G__27352;
chunk__25036_27341 = G__27353;
count__25037_27342 = G__27354;
i__25038_27343 = G__27355;
continue;
} else {
var arg__9339__auto___27356 = cljs.core.first.call(null,seq__25035_27350__$1);
a__9338__auto__.push(arg__9339__auto___27356);

var G__27357 = cljs.core.next.call(null,seq__25035_27350__$1);
var G__27358 = null;
var G__27359 = (0);
var G__27360 = (0);
seq__25035_27340 = G__27357;
chunk__25036_27341 = G__27358;
count__25037_27342 = G__27359;
i__25038_27343 = G__27360;
continue;
}
} else {
}
}
break;
}

return React.DOM.sub.apply(null,a__9338__auto__);
};
var sub = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27361__i = 0, G__27361__a = new Array(arguments.length -  0);
while (G__27361__i < G__27361__a.length) {G__27361__a[G__27361__i] = arguments[G__27361__i + 0]; ++G__27361__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27361__a,0);
} 
return sub__delegate.call(this,args__9337__auto__);};
sub.cljs$lang$maxFixedArity = 0;
sub.cljs$lang$applyTo = (function (arglist__27362){
var args__9337__auto__ = cljs.core.seq(arglist__27362);
return sub__delegate(args__9337__auto__);
});
sub.cljs$core$IFn$_invoke$arity$variadic = sub__delegate;
return sub;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.summary = (function() { 
var summary__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25043_27363 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25044_27364 = null;
var count__25045_27365 = (0);
var i__25046_27366 = (0);
while(true){
if((i__25046_27366 < count__25045_27365)){
var arg__9339__auto___27367 = cljs.core._nth.call(null,chunk__25044_27364,i__25046_27366);
a__9338__auto__.push(arg__9339__auto___27367);

var G__27368 = seq__25043_27363;
var G__27369 = chunk__25044_27364;
var G__27370 = count__25045_27365;
var G__27371 = (i__25046_27366 + (1));
seq__25043_27363 = G__27368;
chunk__25044_27364 = G__27369;
count__25045_27365 = G__27370;
i__25046_27366 = G__27371;
continue;
} else {
var temp__4126__auto___27372 = cljs.core.seq.call(null,seq__25043_27363);
if(temp__4126__auto___27372){
var seq__25043_27373__$1 = temp__4126__auto___27372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25043_27373__$1)){
var c__4559__auto___27374 = cljs.core.chunk_first.call(null,seq__25043_27373__$1);
var G__27375 = cljs.core.chunk_rest.call(null,seq__25043_27373__$1);
var G__27376 = c__4559__auto___27374;
var G__27377 = cljs.core.count.call(null,c__4559__auto___27374);
var G__27378 = (0);
seq__25043_27363 = G__27375;
chunk__25044_27364 = G__27376;
count__25045_27365 = G__27377;
i__25046_27366 = G__27378;
continue;
} else {
var arg__9339__auto___27379 = cljs.core.first.call(null,seq__25043_27373__$1);
a__9338__auto__.push(arg__9339__auto___27379);

var G__27380 = cljs.core.next.call(null,seq__25043_27373__$1);
var G__27381 = null;
var G__27382 = (0);
var G__27383 = (0);
seq__25043_27363 = G__27380;
chunk__25044_27364 = G__27381;
count__25045_27365 = G__27382;
i__25046_27366 = G__27383;
continue;
}
} else {
}
}
break;
}

return React.DOM.summary.apply(null,a__9338__auto__);
};
var summary = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27384__i = 0, G__27384__a = new Array(arguments.length -  0);
while (G__27384__i < G__27384__a.length) {G__27384__a[G__27384__i] = arguments[G__27384__i + 0]; ++G__27384__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27384__a,0);
} 
return summary__delegate.call(this,args__9337__auto__);};
summary.cljs$lang$maxFixedArity = 0;
summary.cljs$lang$applyTo = (function (arglist__27385){
var args__9337__auto__ = cljs.core.seq(arglist__27385);
return summary__delegate(args__9337__auto__);
});
summary.cljs$core$IFn$_invoke$arity$variadic = summary__delegate;
return summary;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.sup = (function() { 
var sup__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25051_27386 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25052_27387 = null;
var count__25053_27388 = (0);
var i__25054_27389 = (0);
while(true){
if((i__25054_27389 < count__25053_27388)){
var arg__9339__auto___27390 = cljs.core._nth.call(null,chunk__25052_27387,i__25054_27389);
a__9338__auto__.push(arg__9339__auto___27390);

var G__27391 = seq__25051_27386;
var G__27392 = chunk__25052_27387;
var G__27393 = count__25053_27388;
var G__27394 = (i__25054_27389 + (1));
seq__25051_27386 = G__27391;
chunk__25052_27387 = G__27392;
count__25053_27388 = G__27393;
i__25054_27389 = G__27394;
continue;
} else {
var temp__4126__auto___27395 = cljs.core.seq.call(null,seq__25051_27386);
if(temp__4126__auto___27395){
var seq__25051_27396__$1 = temp__4126__auto___27395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25051_27396__$1)){
var c__4559__auto___27397 = cljs.core.chunk_first.call(null,seq__25051_27396__$1);
var G__27398 = cljs.core.chunk_rest.call(null,seq__25051_27396__$1);
var G__27399 = c__4559__auto___27397;
var G__27400 = cljs.core.count.call(null,c__4559__auto___27397);
var G__27401 = (0);
seq__25051_27386 = G__27398;
chunk__25052_27387 = G__27399;
count__25053_27388 = G__27400;
i__25054_27389 = G__27401;
continue;
} else {
var arg__9339__auto___27402 = cljs.core.first.call(null,seq__25051_27396__$1);
a__9338__auto__.push(arg__9339__auto___27402);

var G__27403 = cljs.core.next.call(null,seq__25051_27396__$1);
var G__27404 = null;
var G__27405 = (0);
var G__27406 = (0);
seq__25051_27386 = G__27403;
chunk__25052_27387 = G__27404;
count__25053_27388 = G__27405;
i__25054_27389 = G__27406;
continue;
}
} else {
}
}
break;
}

return React.DOM.sup.apply(null,a__9338__auto__);
};
var sup = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27407__i = 0, G__27407__a = new Array(arguments.length -  0);
while (G__27407__i < G__27407__a.length) {G__27407__a[G__27407__i] = arguments[G__27407__i + 0]; ++G__27407__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27407__a,0);
} 
return sup__delegate.call(this,args__9337__auto__);};
sup.cljs$lang$maxFixedArity = 0;
sup.cljs$lang$applyTo = (function (arglist__27408){
var args__9337__auto__ = cljs.core.seq(arglist__27408);
return sup__delegate(args__9337__auto__);
});
sup.cljs$core$IFn$_invoke$arity$variadic = sup__delegate;
return sup;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.table = (function() { 
var table__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25059_27409 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25060_27410 = null;
var count__25061_27411 = (0);
var i__25062_27412 = (0);
while(true){
if((i__25062_27412 < count__25061_27411)){
var arg__9339__auto___27413 = cljs.core._nth.call(null,chunk__25060_27410,i__25062_27412);
a__9338__auto__.push(arg__9339__auto___27413);

var G__27414 = seq__25059_27409;
var G__27415 = chunk__25060_27410;
var G__27416 = count__25061_27411;
var G__27417 = (i__25062_27412 + (1));
seq__25059_27409 = G__27414;
chunk__25060_27410 = G__27415;
count__25061_27411 = G__27416;
i__25062_27412 = G__27417;
continue;
} else {
var temp__4126__auto___27418 = cljs.core.seq.call(null,seq__25059_27409);
if(temp__4126__auto___27418){
var seq__25059_27419__$1 = temp__4126__auto___27418;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25059_27419__$1)){
var c__4559__auto___27420 = cljs.core.chunk_first.call(null,seq__25059_27419__$1);
var G__27421 = cljs.core.chunk_rest.call(null,seq__25059_27419__$1);
var G__27422 = c__4559__auto___27420;
var G__27423 = cljs.core.count.call(null,c__4559__auto___27420);
var G__27424 = (0);
seq__25059_27409 = G__27421;
chunk__25060_27410 = G__27422;
count__25061_27411 = G__27423;
i__25062_27412 = G__27424;
continue;
} else {
var arg__9339__auto___27425 = cljs.core.first.call(null,seq__25059_27419__$1);
a__9338__auto__.push(arg__9339__auto___27425);

var G__27426 = cljs.core.next.call(null,seq__25059_27419__$1);
var G__27427 = null;
var G__27428 = (0);
var G__27429 = (0);
seq__25059_27409 = G__27426;
chunk__25060_27410 = G__27427;
count__25061_27411 = G__27428;
i__25062_27412 = G__27429;
continue;
}
} else {
}
}
break;
}

return React.DOM.table.apply(null,a__9338__auto__);
};
var table = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27430__i = 0, G__27430__a = new Array(arguments.length -  0);
while (G__27430__i < G__27430__a.length) {G__27430__a[G__27430__i] = arguments[G__27430__i + 0]; ++G__27430__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27430__a,0);
} 
return table__delegate.call(this,args__9337__auto__);};
table.cljs$lang$maxFixedArity = 0;
table.cljs$lang$applyTo = (function (arglist__27431){
var args__9337__auto__ = cljs.core.seq(arglist__27431);
return table__delegate(args__9337__auto__);
});
table.cljs$core$IFn$_invoke$arity$variadic = table__delegate;
return table;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tbody = (function() { 
var tbody__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25067_27432 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25068_27433 = null;
var count__25069_27434 = (0);
var i__25070_27435 = (0);
while(true){
if((i__25070_27435 < count__25069_27434)){
var arg__9339__auto___27436 = cljs.core._nth.call(null,chunk__25068_27433,i__25070_27435);
a__9338__auto__.push(arg__9339__auto___27436);

var G__27437 = seq__25067_27432;
var G__27438 = chunk__25068_27433;
var G__27439 = count__25069_27434;
var G__27440 = (i__25070_27435 + (1));
seq__25067_27432 = G__27437;
chunk__25068_27433 = G__27438;
count__25069_27434 = G__27439;
i__25070_27435 = G__27440;
continue;
} else {
var temp__4126__auto___27441 = cljs.core.seq.call(null,seq__25067_27432);
if(temp__4126__auto___27441){
var seq__25067_27442__$1 = temp__4126__auto___27441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25067_27442__$1)){
var c__4559__auto___27443 = cljs.core.chunk_first.call(null,seq__25067_27442__$1);
var G__27444 = cljs.core.chunk_rest.call(null,seq__25067_27442__$1);
var G__27445 = c__4559__auto___27443;
var G__27446 = cljs.core.count.call(null,c__4559__auto___27443);
var G__27447 = (0);
seq__25067_27432 = G__27444;
chunk__25068_27433 = G__27445;
count__25069_27434 = G__27446;
i__25070_27435 = G__27447;
continue;
} else {
var arg__9339__auto___27448 = cljs.core.first.call(null,seq__25067_27442__$1);
a__9338__auto__.push(arg__9339__auto___27448);

var G__27449 = cljs.core.next.call(null,seq__25067_27442__$1);
var G__27450 = null;
var G__27451 = (0);
var G__27452 = (0);
seq__25067_27432 = G__27449;
chunk__25068_27433 = G__27450;
count__25069_27434 = G__27451;
i__25070_27435 = G__27452;
continue;
}
} else {
}
}
break;
}

return React.DOM.tbody.apply(null,a__9338__auto__);
};
var tbody = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27453__i = 0, G__27453__a = new Array(arguments.length -  0);
while (G__27453__i < G__27453__a.length) {G__27453__a[G__27453__i] = arguments[G__27453__i + 0]; ++G__27453__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27453__a,0);
} 
return tbody__delegate.call(this,args__9337__auto__);};
tbody.cljs$lang$maxFixedArity = 0;
tbody.cljs$lang$applyTo = (function (arglist__27454){
var args__9337__auto__ = cljs.core.seq(arglist__27454);
return tbody__delegate(args__9337__auto__);
});
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__delegate;
return tbody;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.td = (function() { 
var td__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25075_27455 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25076_27456 = null;
var count__25077_27457 = (0);
var i__25078_27458 = (0);
while(true){
if((i__25078_27458 < count__25077_27457)){
var arg__9339__auto___27459 = cljs.core._nth.call(null,chunk__25076_27456,i__25078_27458);
a__9338__auto__.push(arg__9339__auto___27459);

var G__27460 = seq__25075_27455;
var G__27461 = chunk__25076_27456;
var G__27462 = count__25077_27457;
var G__27463 = (i__25078_27458 + (1));
seq__25075_27455 = G__27460;
chunk__25076_27456 = G__27461;
count__25077_27457 = G__27462;
i__25078_27458 = G__27463;
continue;
} else {
var temp__4126__auto___27464 = cljs.core.seq.call(null,seq__25075_27455);
if(temp__4126__auto___27464){
var seq__25075_27465__$1 = temp__4126__auto___27464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25075_27465__$1)){
var c__4559__auto___27466 = cljs.core.chunk_first.call(null,seq__25075_27465__$1);
var G__27467 = cljs.core.chunk_rest.call(null,seq__25075_27465__$1);
var G__27468 = c__4559__auto___27466;
var G__27469 = cljs.core.count.call(null,c__4559__auto___27466);
var G__27470 = (0);
seq__25075_27455 = G__27467;
chunk__25076_27456 = G__27468;
count__25077_27457 = G__27469;
i__25078_27458 = G__27470;
continue;
} else {
var arg__9339__auto___27471 = cljs.core.first.call(null,seq__25075_27465__$1);
a__9338__auto__.push(arg__9339__auto___27471);

var G__27472 = cljs.core.next.call(null,seq__25075_27465__$1);
var G__27473 = null;
var G__27474 = (0);
var G__27475 = (0);
seq__25075_27455 = G__27472;
chunk__25076_27456 = G__27473;
count__25077_27457 = G__27474;
i__25078_27458 = G__27475;
continue;
}
} else {
}
}
break;
}

return React.DOM.td.apply(null,a__9338__auto__);
};
var td = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27476__i = 0, G__27476__a = new Array(arguments.length -  0);
while (G__27476__i < G__27476__a.length) {G__27476__a[G__27476__i] = arguments[G__27476__i + 0]; ++G__27476__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27476__a,0);
} 
return td__delegate.call(this,args__9337__auto__);};
td.cljs$lang$maxFixedArity = 0;
td.cljs$lang$applyTo = (function (arglist__27477){
var args__9337__auto__ = cljs.core.seq(arglist__27477);
return td__delegate(args__9337__auto__);
});
td.cljs$core$IFn$_invoke$arity$variadic = td__delegate;
return td;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.textarea = (function() { 
var textarea__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25083_27478 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25084_27479 = null;
var count__25085_27480 = (0);
var i__25086_27481 = (0);
while(true){
if((i__25086_27481 < count__25085_27480)){
var arg__9339__auto___27482 = cljs.core._nth.call(null,chunk__25084_27479,i__25086_27481);
a__9338__auto__.push(arg__9339__auto___27482);

var G__27483 = seq__25083_27478;
var G__27484 = chunk__25084_27479;
var G__27485 = count__25085_27480;
var G__27486 = (i__25086_27481 + (1));
seq__25083_27478 = G__27483;
chunk__25084_27479 = G__27484;
count__25085_27480 = G__27485;
i__25086_27481 = G__27486;
continue;
} else {
var temp__4126__auto___27487 = cljs.core.seq.call(null,seq__25083_27478);
if(temp__4126__auto___27487){
var seq__25083_27488__$1 = temp__4126__auto___27487;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25083_27488__$1)){
var c__4559__auto___27489 = cljs.core.chunk_first.call(null,seq__25083_27488__$1);
var G__27490 = cljs.core.chunk_rest.call(null,seq__25083_27488__$1);
var G__27491 = c__4559__auto___27489;
var G__27492 = cljs.core.count.call(null,c__4559__auto___27489);
var G__27493 = (0);
seq__25083_27478 = G__27490;
chunk__25084_27479 = G__27491;
count__25085_27480 = G__27492;
i__25086_27481 = G__27493;
continue;
} else {
var arg__9339__auto___27494 = cljs.core.first.call(null,seq__25083_27488__$1);
a__9338__auto__.push(arg__9339__auto___27494);

var G__27495 = cljs.core.next.call(null,seq__25083_27488__$1);
var G__27496 = null;
var G__27497 = (0);
var G__27498 = (0);
seq__25083_27478 = G__27495;
chunk__25084_27479 = G__27496;
count__25085_27480 = G__27497;
i__25086_27481 = G__27498;
continue;
}
} else {
}
}
break;
}

return React.DOM.textarea.apply(null,a__9338__auto__);
};
var textarea = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27499__i = 0, G__27499__a = new Array(arguments.length -  0);
while (G__27499__i < G__27499__a.length) {G__27499__a[G__27499__i] = arguments[G__27499__i + 0]; ++G__27499__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27499__a,0);
} 
return textarea__delegate.call(this,args__9337__auto__);};
textarea.cljs$lang$maxFixedArity = 0;
textarea.cljs$lang$applyTo = (function (arglist__27500){
var args__9337__auto__ = cljs.core.seq(arglist__27500);
return textarea__delegate(args__9337__auto__);
});
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__delegate;
return textarea;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tfoot = (function() { 
var tfoot__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25091_27501 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25092_27502 = null;
var count__25093_27503 = (0);
var i__25094_27504 = (0);
while(true){
if((i__25094_27504 < count__25093_27503)){
var arg__9339__auto___27505 = cljs.core._nth.call(null,chunk__25092_27502,i__25094_27504);
a__9338__auto__.push(arg__9339__auto___27505);

var G__27506 = seq__25091_27501;
var G__27507 = chunk__25092_27502;
var G__27508 = count__25093_27503;
var G__27509 = (i__25094_27504 + (1));
seq__25091_27501 = G__27506;
chunk__25092_27502 = G__27507;
count__25093_27503 = G__27508;
i__25094_27504 = G__27509;
continue;
} else {
var temp__4126__auto___27510 = cljs.core.seq.call(null,seq__25091_27501);
if(temp__4126__auto___27510){
var seq__25091_27511__$1 = temp__4126__auto___27510;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25091_27511__$1)){
var c__4559__auto___27512 = cljs.core.chunk_first.call(null,seq__25091_27511__$1);
var G__27513 = cljs.core.chunk_rest.call(null,seq__25091_27511__$1);
var G__27514 = c__4559__auto___27512;
var G__27515 = cljs.core.count.call(null,c__4559__auto___27512);
var G__27516 = (0);
seq__25091_27501 = G__27513;
chunk__25092_27502 = G__27514;
count__25093_27503 = G__27515;
i__25094_27504 = G__27516;
continue;
} else {
var arg__9339__auto___27517 = cljs.core.first.call(null,seq__25091_27511__$1);
a__9338__auto__.push(arg__9339__auto___27517);

var G__27518 = cljs.core.next.call(null,seq__25091_27511__$1);
var G__27519 = null;
var G__27520 = (0);
var G__27521 = (0);
seq__25091_27501 = G__27518;
chunk__25092_27502 = G__27519;
count__25093_27503 = G__27520;
i__25094_27504 = G__27521;
continue;
}
} else {
}
}
break;
}

return React.DOM.tfoot.apply(null,a__9338__auto__);
};
var tfoot = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27522__i = 0, G__27522__a = new Array(arguments.length -  0);
while (G__27522__i < G__27522__a.length) {G__27522__a[G__27522__i] = arguments[G__27522__i + 0]; ++G__27522__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27522__a,0);
} 
return tfoot__delegate.call(this,args__9337__auto__);};
tfoot.cljs$lang$maxFixedArity = 0;
tfoot.cljs$lang$applyTo = (function (arglist__27523){
var args__9337__auto__ = cljs.core.seq(arglist__27523);
return tfoot__delegate(args__9337__auto__);
});
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__delegate;
return tfoot;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.th = (function() { 
var th__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25099_27524 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25100_27525 = null;
var count__25101_27526 = (0);
var i__25102_27527 = (0);
while(true){
if((i__25102_27527 < count__25101_27526)){
var arg__9339__auto___27528 = cljs.core._nth.call(null,chunk__25100_27525,i__25102_27527);
a__9338__auto__.push(arg__9339__auto___27528);

var G__27529 = seq__25099_27524;
var G__27530 = chunk__25100_27525;
var G__27531 = count__25101_27526;
var G__27532 = (i__25102_27527 + (1));
seq__25099_27524 = G__27529;
chunk__25100_27525 = G__27530;
count__25101_27526 = G__27531;
i__25102_27527 = G__27532;
continue;
} else {
var temp__4126__auto___27533 = cljs.core.seq.call(null,seq__25099_27524);
if(temp__4126__auto___27533){
var seq__25099_27534__$1 = temp__4126__auto___27533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25099_27534__$1)){
var c__4559__auto___27535 = cljs.core.chunk_first.call(null,seq__25099_27534__$1);
var G__27536 = cljs.core.chunk_rest.call(null,seq__25099_27534__$1);
var G__27537 = c__4559__auto___27535;
var G__27538 = cljs.core.count.call(null,c__4559__auto___27535);
var G__27539 = (0);
seq__25099_27524 = G__27536;
chunk__25100_27525 = G__27537;
count__25101_27526 = G__27538;
i__25102_27527 = G__27539;
continue;
} else {
var arg__9339__auto___27540 = cljs.core.first.call(null,seq__25099_27534__$1);
a__9338__auto__.push(arg__9339__auto___27540);

var G__27541 = cljs.core.next.call(null,seq__25099_27534__$1);
var G__27542 = null;
var G__27543 = (0);
var G__27544 = (0);
seq__25099_27524 = G__27541;
chunk__25100_27525 = G__27542;
count__25101_27526 = G__27543;
i__25102_27527 = G__27544;
continue;
}
} else {
}
}
break;
}

return React.DOM.th.apply(null,a__9338__auto__);
};
var th = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27545__i = 0, G__27545__a = new Array(arguments.length -  0);
while (G__27545__i < G__27545__a.length) {G__27545__a[G__27545__i] = arguments[G__27545__i + 0]; ++G__27545__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27545__a,0);
} 
return th__delegate.call(this,args__9337__auto__);};
th.cljs$lang$maxFixedArity = 0;
th.cljs$lang$applyTo = (function (arglist__27546){
var args__9337__auto__ = cljs.core.seq(arglist__27546);
return th__delegate(args__9337__auto__);
});
th.cljs$core$IFn$_invoke$arity$variadic = th__delegate;
return th;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.thead = (function() { 
var thead__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25107_27547 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25108_27548 = null;
var count__25109_27549 = (0);
var i__25110_27550 = (0);
while(true){
if((i__25110_27550 < count__25109_27549)){
var arg__9339__auto___27551 = cljs.core._nth.call(null,chunk__25108_27548,i__25110_27550);
a__9338__auto__.push(arg__9339__auto___27551);

var G__27552 = seq__25107_27547;
var G__27553 = chunk__25108_27548;
var G__27554 = count__25109_27549;
var G__27555 = (i__25110_27550 + (1));
seq__25107_27547 = G__27552;
chunk__25108_27548 = G__27553;
count__25109_27549 = G__27554;
i__25110_27550 = G__27555;
continue;
} else {
var temp__4126__auto___27556 = cljs.core.seq.call(null,seq__25107_27547);
if(temp__4126__auto___27556){
var seq__25107_27557__$1 = temp__4126__auto___27556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25107_27557__$1)){
var c__4559__auto___27558 = cljs.core.chunk_first.call(null,seq__25107_27557__$1);
var G__27559 = cljs.core.chunk_rest.call(null,seq__25107_27557__$1);
var G__27560 = c__4559__auto___27558;
var G__27561 = cljs.core.count.call(null,c__4559__auto___27558);
var G__27562 = (0);
seq__25107_27547 = G__27559;
chunk__25108_27548 = G__27560;
count__25109_27549 = G__27561;
i__25110_27550 = G__27562;
continue;
} else {
var arg__9339__auto___27563 = cljs.core.first.call(null,seq__25107_27557__$1);
a__9338__auto__.push(arg__9339__auto___27563);

var G__27564 = cljs.core.next.call(null,seq__25107_27557__$1);
var G__27565 = null;
var G__27566 = (0);
var G__27567 = (0);
seq__25107_27547 = G__27564;
chunk__25108_27548 = G__27565;
count__25109_27549 = G__27566;
i__25110_27550 = G__27567;
continue;
}
} else {
}
}
break;
}

return React.DOM.thead.apply(null,a__9338__auto__);
};
var thead = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27568__i = 0, G__27568__a = new Array(arguments.length -  0);
while (G__27568__i < G__27568__a.length) {G__27568__a[G__27568__i] = arguments[G__27568__i + 0]; ++G__27568__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27568__a,0);
} 
return thead__delegate.call(this,args__9337__auto__);};
thead.cljs$lang$maxFixedArity = 0;
thead.cljs$lang$applyTo = (function (arglist__27569){
var args__9337__auto__ = cljs.core.seq(arglist__27569);
return thead__delegate(args__9337__auto__);
});
thead.cljs$core$IFn$_invoke$arity$variadic = thead__delegate;
return thead;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.time = (function() { 
var time__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25115_27570 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25116_27571 = null;
var count__25117_27572 = (0);
var i__25118_27573 = (0);
while(true){
if((i__25118_27573 < count__25117_27572)){
var arg__9339__auto___27574 = cljs.core._nth.call(null,chunk__25116_27571,i__25118_27573);
a__9338__auto__.push(arg__9339__auto___27574);

var G__27575 = seq__25115_27570;
var G__27576 = chunk__25116_27571;
var G__27577 = count__25117_27572;
var G__27578 = (i__25118_27573 + (1));
seq__25115_27570 = G__27575;
chunk__25116_27571 = G__27576;
count__25117_27572 = G__27577;
i__25118_27573 = G__27578;
continue;
} else {
var temp__4126__auto___27579 = cljs.core.seq.call(null,seq__25115_27570);
if(temp__4126__auto___27579){
var seq__25115_27580__$1 = temp__4126__auto___27579;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25115_27580__$1)){
var c__4559__auto___27581 = cljs.core.chunk_first.call(null,seq__25115_27580__$1);
var G__27582 = cljs.core.chunk_rest.call(null,seq__25115_27580__$1);
var G__27583 = c__4559__auto___27581;
var G__27584 = cljs.core.count.call(null,c__4559__auto___27581);
var G__27585 = (0);
seq__25115_27570 = G__27582;
chunk__25116_27571 = G__27583;
count__25117_27572 = G__27584;
i__25118_27573 = G__27585;
continue;
} else {
var arg__9339__auto___27586 = cljs.core.first.call(null,seq__25115_27580__$1);
a__9338__auto__.push(arg__9339__auto___27586);

var G__27587 = cljs.core.next.call(null,seq__25115_27580__$1);
var G__27588 = null;
var G__27589 = (0);
var G__27590 = (0);
seq__25115_27570 = G__27587;
chunk__25116_27571 = G__27588;
count__25117_27572 = G__27589;
i__25118_27573 = G__27590;
continue;
}
} else {
}
}
break;
}

return React.DOM.time.apply(null,a__9338__auto__);
};
var time = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27591__i = 0, G__27591__a = new Array(arguments.length -  0);
while (G__27591__i < G__27591__a.length) {G__27591__a[G__27591__i] = arguments[G__27591__i + 0]; ++G__27591__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27591__a,0);
} 
return time__delegate.call(this,args__9337__auto__);};
time.cljs$lang$maxFixedArity = 0;
time.cljs$lang$applyTo = (function (arglist__27592){
var args__9337__auto__ = cljs.core.seq(arglist__27592);
return time__delegate(args__9337__auto__);
});
time.cljs$core$IFn$_invoke$arity$variadic = time__delegate;
return time;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.title = (function() { 
var title__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25123_27593 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25124_27594 = null;
var count__25125_27595 = (0);
var i__25126_27596 = (0);
while(true){
if((i__25126_27596 < count__25125_27595)){
var arg__9339__auto___27597 = cljs.core._nth.call(null,chunk__25124_27594,i__25126_27596);
a__9338__auto__.push(arg__9339__auto___27597);

var G__27598 = seq__25123_27593;
var G__27599 = chunk__25124_27594;
var G__27600 = count__25125_27595;
var G__27601 = (i__25126_27596 + (1));
seq__25123_27593 = G__27598;
chunk__25124_27594 = G__27599;
count__25125_27595 = G__27600;
i__25126_27596 = G__27601;
continue;
} else {
var temp__4126__auto___27602 = cljs.core.seq.call(null,seq__25123_27593);
if(temp__4126__auto___27602){
var seq__25123_27603__$1 = temp__4126__auto___27602;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25123_27603__$1)){
var c__4559__auto___27604 = cljs.core.chunk_first.call(null,seq__25123_27603__$1);
var G__27605 = cljs.core.chunk_rest.call(null,seq__25123_27603__$1);
var G__27606 = c__4559__auto___27604;
var G__27607 = cljs.core.count.call(null,c__4559__auto___27604);
var G__27608 = (0);
seq__25123_27593 = G__27605;
chunk__25124_27594 = G__27606;
count__25125_27595 = G__27607;
i__25126_27596 = G__27608;
continue;
} else {
var arg__9339__auto___27609 = cljs.core.first.call(null,seq__25123_27603__$1);
a__9338__auto__.push(arg__9339__auto___27609);

var G__27610 = cljs.core.next.call(null,seq__25123_27603__$1);
var G__27611 = null;
var G__27612 = (0);
var G__27613 = (0);
seq__25123_27593 = G__27610;
chunk__25124_27594 = G__27611;
count__25125_27595 = G__27612;
i__25126_27596 = G__27613;
continue;
}
} else {
}
}
break;
}

return React.DOM.title.apply(null,a__9338__auto__);
};
var title = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27614__i = 0, G__27614__a = new Array(arguments.length -  0);
while (G__27614__i < G__27614__a.length) {G__27614__a[G__27614__i] = arguments[G__27614__i + 0]; ++G__27614__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27614__a,0);
} 
return title__delegate.call(this,args__9337__auto__);};
title.cljs$lang$maxFixedArity = 0;
title.cljs$lang$applyTo = (function (arglist__27615){
var args__9337__auto__ = cljs.core.seq(arglist__27615);
return title__delegate(args__9337__auto__);
});
title.cljs$core$IFn$_invoke$arity$variadic = title__delegate;
return title;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.tr = (function() { 
var tr__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25131_27616 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25132_27617 = null;
var count__25133_27618 = (0);
var i__25134_27619 = (0);
while(true){
if((i__25134_27619 < count__25133_27618)){
var arg__9339__auto___27620 = cljs.core._nth.call(null,chunk__25132_27617,i__25134_27619);
a__9338__auto__.push(arg__9339__auto___27620);

var G__27621 = seq__25131_27616;
var G__27622 = chunk__25132_27617;
var G__27623 = count__25133_27618;
var G__27624 = (i__25134_27619 + (1));
seq__25131_27616 = G__27621;
chunk__25132_27617 = G__27622;
count__25133_27618 = G__27623;
i__25134_27619 = G__27624;
continue;
} else {
var temp__4126__auto___27625 = cljs.core.seq.call(null,seq__25131_27616);
if(temp__4126__auto___27625){
var seq__25131_27626__$1 = temp__4126__auto___27625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25131_27626__$1)){
var c__4559__auto___27627 = cljs.core.chunk_first.call(null,seq__25131_27626__$1);
var G__27628 = cljs.core.chunk_rest.call(null,seq__25131_27626__$1);
var G__27629 = c__4559__auto___27627;
var G__27630 = cljs.core.count.call(null,c__4559__auto___27627);
var G__27631 = (0);
seq__25131_27616 = G__27628;
chunk__25132_27617 = G__27629;
count__25133_27618 = G__27630;
i__25134_27619 = G__27631;
continue;
} else {
var arg__9339__auto___27632 = cljs.core.first.call(null,seq__25131_27626__$1);
a__9338__auto__.push(arg__9339__auto___27632);

var G__27633 = cljs.core.next.call(null,seq__25131_27626__$1);
var G__27634 = null;
var G__27635 = (0);
var G__27636 = (0);
seq__25131_27616 = G__27633;
chunk__25132_27617 = G__27634;
count__25133_27618 = G__27635;
i__25134_27619 = G__27636;
continue;
}
} else {
}
}
break;
}

return React.DOM.tr.apply(null,a__9338__auto__);
};
var tr = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27637__i = 0, G__27637__a = new Array(arguments.length -  0);
while (G__27637__i < G__27637__a.length) {G__27637__a[G__27637__i] = arguments[G__27637__i + 0]; ++G__27637__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27637__a,0);
} 
return tr__delegate.call(this,args__9337__auto__);};
tr.cljs$lang$maxFixedArity = 0;
tr.cljs$lang$applyTo = (function (arglist__27638){
var args__9337__auto__ = cljs.core.seq(arglist__27638);
return tr__delegate(args__9337__auto__);
});
tr.cljs$core$IFn$_invoke$arity$variadic = tr__delegate;
return tr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.track = (function() { 
var track__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25139_27639 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25140_27640 = null;
var count__25141_27641 = (0);
var i__25142_27642 = (0);
while(true){
if((i__25142_27642 < count__25141_27641)){
var arg__9339__auto___27643 = cljs.core._nth.call(null,chunk__25140_27640,i__25142_27642);
a__9338__auto__.push(arg__9339__auto___27643);

var G__27644 = seq__25139_27639;
var G__27645 = chunk__25140_27640;
var G__27646 = count__25141_27641;
var G__27647 = (i__25142_27642 + (1));
seq__25139_27639 = G__27644;
chunk__25140_27640 = G__27645;
count__25141_27641 = G__27646;
i__25142_27642 = G__27647;
continue;
} else {
var temp__4126__auto___27648 = cljs.core.seq.call(null,seq__25139_27639);
if(temp__4126__auto___27648){
var seq__25139_27649__$1 = temp__4126__auto___27648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25139_27649__$1)){
var c__4559__auto___27650 = cljs.core.chunk_first.call(null,seq__25139_27649__$1);
var G__27651 = cljs.core.chunk_rest.call(null,seq__25139_27649__$1);
var G__27652 = c__4559__auto___27650;
var G__27653 = cljs.core.count.call(null,c__4559__auto___27650);
var G__27654 = (0);
seq__25139_27639 = G__27651;
chunk__25140_27640 = G__27652;
count__25141_27641 = G__27653;
i__25142_27642 = G__27654;
continue;
} else {
var arg__9339__auto___27655 = cljs.core.first.call(null,seq__25139_27649__$1);
a__9338__auto__.push(arg__9339__auto___27655);

var G__27656 = cljs.core.next.call(null,seq__25139_27649__$1);
var G__27657 = null;
var G__27658 = (0);
var G__27659 = (0);
seq__25139_27639 = G__27656;
chunk__25140_27640 = G__27657;
count__25141_27641 = G__27658;
i__25142_27642 = G__27659;
continue;
}
} else {
}
}
break;
}

return React.DOM.track.apply(null,a__9338__auto__);
};
var track = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27660__i = 0, G__27660__a = new Array(arguments.length -  0);
while (G__27660__i < G__27660__a.length) {G__27660__a[G__27660__i] = arguments[G__27660__i + 0]; ++G__27660__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27660__a,0);
} 
return track__delegate.call(this,args__9337__auto__);};
track.cljs$lang$maxFixedArity = 0;
track.cljs$lang$applyTo = (function (arglist__27661){
var args__9337__auto__ = cljs.core.seq(arglist__27661);
return track__delegate(args__9337__auto__);
});
track.cljs$core$IFn$_invoke$arity$variadic = track__delegate;
return track;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.u = (function() { 
var u__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25147_27662 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25148_27663 = null;
var count__25149_27664 = (0);
var i__25150_27665 = (0);
while(true){
if((i__25150_27665 < count__25149_27664)){
var arg__9339__auto___27666 = cljs.core._nth.call(null,chunk__25148_27663,i__25150_27665);
a__9338__auto__.push(arg__9339__auto___27666);

var G__27667 = seq__25147_27662;
var G__27668 = chunk__25148_27663;
var G__27669 = count__25149_27664;
var G__27670 = (i__25150_27665 + (1));
seq__25147_27662 = G__27667;
chunk__25148_27663 = G__27668;
count__25149_27664 = G__27669;
i__25150_27665 = G__27670;
continue;
} else {
var temp__4126__auto___27671 = cljs.core.seq.call(null,seq__25147_27662);
if(temp__4126__auto___27671){
var seq__25147_27672__$1 = temp__4126__auto___27671;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25147_27672__$1)){
var c__4559__auto___27673 = cljs.core.chunk_first.call(null,seq__25147_27672__$1);
var G__27674 = cljs.core.chunk_rest.call(null,seq__25147_27672__$1);
var G__27675 = c__4559__auto___27673;
var G__27676 = cljs.core.count.call(null,c__4559__auto___27673);
var G__27677 = (0);
seq__25147_27662 = G__27674;
chunk__25148_27663 = G__27675;
count__25149_27664 = G__27676;
i__25150_27665 = G__27677;
continue;
} else {
var arg__9339__auto___27678 = cljs.core.first.call(null,seq__25147_27672__$1);
a__9338__auto__.push(arg__9339__auto___27678);

var G__27679 = cljs.core.next.call(null,seq__25147_27672__$1);
var G__27680 = null;
var G__27681 = (0);
var G__27682 = (0);
seq__25147_27662 = G__27679;
chunk__25148_27663 = G__27680;
count__25149_27664 = G__27681;
i__25150_27665 = G__27682;
continue;
}
} else {
}
}
break;
}

return React.DOM.u.apply(null,a__9338__auto__);
};
var u = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27683__i = 0, G__27683__a = new Array(arguments.length -  0);
while (G__27683__i < G__27683__a.length) {G__27683__a[G__27683__i] = arguments[G__27683__i + 0]; ++G__27683__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27683__a,0);
} 
return u__delegate.call(this,args__9337__auto__);};
u.cljs$lang$maxFixedArity = 0;
u.cljs$lang$applyTo = (function (arglist__27684){
var args__9337__auto__ = cljs.core.seq(arglist__27684);
return u__delegate(args__9337__auto__);
});
u.cljs$core$IFn$_invoke$arity$variadic = u__delegate;
return u;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.ul = (function() { 
var ul__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25155_27685 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25156_27686 = null;
var count__25157_27687 = (0);
var i__25158_27688 = (0);
while(true){
if((i__25158_27688 < count__25157_27687)){
var arg__9339__auto___27689 = cljs.core._nth.call(null,chunk__25156_27686,i__25158_27688);
a__9338__auto__.push(arg__9339__auto___27689);

var G__27690 = seq__25155_27685;
var G__27691 = chunk__25156_27686;
var G__27692 = count__25157_27687;
var G__27693 = (i__25158_27688 + (1));
seq__25155_27685 = G__27690;
chunk__25156_27686 = G__27691;
count__25157_27687 = G__27692;
i__25158_27688 = G__27693;
continue;
} else {
var temp__4126__auto___27694 = cljs.core.seq.call(null,seq__25155_27685);
if(temp__4126__auto___27694){
var seq__25155_27695__$1 = temp__4126__auto___27694;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25155_27695__$1)){
var c__4559__auto___27696 = cljs.core.chunk_first.call(null,seq__25155_27695__$1);
var G__27697 = cljs.core.chunk_rest.call(null,seq__25155_27695__$1);
var G__27698 = c__4559__auto___27696;
var G__27699 = cljs.core.count.call(null,c__4559__auto___27696);
var G__27700 = (0);
seq__25155_27685 = G__27697;
chunk__25156_27686 = G__27698;
count__25157_27687 = G__27699;
i__25158_27688 = G__27700;
continue;
} else {
var arg__9339__auto___27701 = cljs.core.first.call(null,seq__25155_27695__$1);
a__9338__auto__.push(arg__9339__auto___27701);

var G__27702 = cljs.core.next.call(null,seq__25155_27695__$1);
var G__27703 = null;
var G__27704 = (0);
var G__27705 = (0);
seq__25155_27685 = G__27702;
chunk__25156_27686 = G__27703;
count__25157_27687 = G__27704;
i__25158_27688 = G__27705;
continue;
}
} else {
}
}
break;
}

return React.DOM.ul.apply(null,a__9338__auto__);
};
var ul = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27706__i = 0, G__27706__a = new Array(arguments.length -  0);
while (G__27706__i < G__27706__a.length) {G__27706__a[G__27706__i] = arguments[G__27706__i + 0]; ++G__27706__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27706__a,0);
} 
return ul__delegate.call(this,args__9337__auto__);};
ul.cljs$lang$maxFixedArity = 0;
ul.cljs$lang$applyTo = (function (arglist__27707){
var args__9337__auto__ = cljs.core.seq(arglist__27707);
return ul__delegate(args__9337__auto__);
});
ul.cljs$core$IFn$_invoke$arity$variadic = ul__delegate;
return ul;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.var$ = (function() { 
var var$__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25163_27708 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25164_27709 = null;
var count__25165_27710 = (0);
var i__25166_27711 = (0);
while(true){
if((i__25166_27711 < count__25165_27710)){
var arg__9339__auto___27712 = cljs.core._nth.call(null,chunk__25164_27709,i__25166_27711);
a__9338__auto__.push(arg__9339__auto___27712);

var G__27713 = seq__25163_27708;
var G__27714 = chunk__25164_27709;
var G__27715 = count__25165_27710;
var G__27716 = (i__25166_27711 + (1));
seq__25163_27708 = G__27713;
chunk__25164_27709 = G__27714;
count__25165_27710 = G__27715;
i__25166_27711 = G__27716;
continue;
} else {
var temp__4126__auto___27717 = cljs.core.seq.call(null,seq__25163_27708);
if(temp__4126__auto___27717){
var seq__25163_27718__$1 = temp__4126__auto___27717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25163_27718__$1)){
var c__4559__auto___27719 = cljs.core.chunk_first.call(null,seq__25163_27718__$1);
var G__27720 = cljs.core.chunk_rest.call(null,seq__25163_27718__$1);
var G__27721 = c__4559__auto___27719;
var G__27722 = cljs.core.count.call(null,c__4559__auto___27719);
var G__27723 = (0);
seq__25163_27708 = G__27720;
chunk__25164_27709 = G__27721;
count__25165_27710 = G__27722;
i__25166_27711 = G__27723;
continue;
} else {
var arg__9339__auto___27724 = cljs.core.first.call(null,seq__25163_27718__$1);
a__9338__auto__.push(arg__9339__auto___27724);

var G__27725 = cljs.core.next.call(null,seq__25163_27718__$1);
var G__27726 = null;
var G__27727 = (0);
var G__27728 = (0);
seq__25163_27708 = G__27725;
chunk__25164_27709 = G__27726;
count__25165_27710 = G__27727;
i__25166_27711 = G__27728;
continue;
}
} else {
}
}
break;
}

return React.DOM.var$.apply(null,a__9338__auto__);
};
var var$ = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27729__i = 0, G__27729__a = new Array(arguments.length -  0);
while (G__27729__i < G__27729__a.length) {G__27729__a[G__27729__i] = arguments[G__27729__i + 0]; ++G__27729__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27729__a,0);
} 
return var$__delegate.call(this,args__9337__auto__);};
var$.cljs$lang$maxFixedArity = 0;
var$.cljs$lang$applyTo = (function (arglist__27730){
var args__9337__auto__ = cljs.core.seq(arglist__27730);
return var$__delegate(args__9337__auto__);
});
var$.cljs$core$IFn$_invoke$arity$variadic = var$__delegate;
return var$;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.video = (function() { 
var video__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25171_27731 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25172_27732 = null;
var count__25173_27733 = (0);
var i__25174_27734 = (0);
while(true){
if((i__25174_27734 < count__25173_27733)){
var arg__9339__auto___27735 = cljs.core._nth.call(null,chunk__25172_27732,i__25174_27734);
a__9338__auto__.push(arg__9339__auto___27735);

var G__27736 = seq__25171_27731;
var G__27737 = chunk__25172_27732;
var G__27738 = count__25173_27733;
var G__27739 = (i__25174_27734 + (1));
seq__25171_27731 = G__27736;
chunk__25172_27732 = G__27737;
count__25173_27733 = G__27738;
i__25174_27734 = G__27739;
continue;
} else {
var temp__4126__auto___27740 = cljs.core.seq.call(null,seq__25171_27731);
if(temp__4126__auto___27740){
var seq__25171_27741__$1 = temp__4126__auto___27740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25171_27741__$1)){
var c__4559__auto___27742 = cljs.core.chunk_first.call(null,seq__25171_27741__$1);
var G__27743 = cljs.core.chunk_rest.call(null,seq__25171_27741__$1);
var G__27744 = c__4559__auto___27742;
var G__27745 = cljs.core.count.call(null,c__4559__auto___27742);
var G__27746 = (0);
seq__25171_27731 = G__27743;
chunk__25172_27732 = G__27744;
count__25173_27733 = G__27745;
i__25174_27734 = G__27746;
continue;
} else {
var arg__9339__auto___27747 = cljs.core.first.call(null,seq__25171_27741__$1);
a__9338__auto__.push(arg__9339__auto___27747);

var G__27748 = cljs.core.next.call(null,seq__25171_27741__$1);
var G__27749 = null;
var G__27750 = (0);
var G__27751 = (0);
seq__25171_27731 = G__27748;
chunk__25172_27732 = G__27749;
count__25173_27733 = G__27750;
i__25174_27734 = G__27751;
continue;
}
} else {
}
}
break;
}

return React.DOM.video.apply(null,a__9338__auto__);
};
var video = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27752__i = 0, G__27752__a = new Array(arguments.length -  0);
while (G__27752__i < G__27752__a.length) {G__27752__a[G__27752__i] = arguments[G__27752__i + 0]; ++G__27752__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27752__a,0);
} 
return video__delegate.call(this,args__9337__auto__);};
video.cljs$lang$maxFixedArity = 0;
video.cljs$lang$applyTo = (function (arglist__27753){
var args__9337__auto__ = cljs.core.seq(arglist__27753);
return video__delegate(args__9337__auto__);
});
video.cljs$core$IFn$_invoke$arity$variadic = video__delegate;
return video;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.wbr = (function() { 
var wbr__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25179_27754 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25180_27755 = null;
var count__25181_27756 = (0);
var i__25182_27757 = (0);
while(true){
if((i__25182_27757 < count__25181_27756)){
var arg__9339__auto___27758 = cljs.core._nth.call(null,chunk__25180_27755,i__25182_27757);
a__9338__auto__.push(arg__9339__auto___27758);

var G__27759 = seq__25179_27754;
var G__27760 = chunk__25180_27755;
var G__27761 = count__25181_27756;
var G__27762 = (i__25182_27757 + (1));
seq__25179_27754 = G__27759;
chunk__25180_27755 = G__27760;
count__25181_27756 = G__27761;
i__25182_27757 = G__27762;
continue;
} else {
var temp__4126__auto___27763 = cljs.core.seq.call(null,seq__25179_27754);
if(temp__4126__auto___27763){
var seq__25179_27764__$1 = temp__4126__auto___27763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25179_27764__$1)){
var c__4559__auto___27765 = cljs.core.chunk_first.call(null,seq__25179_27764__$1);
var G__27766 = cljs.core.chunk_rest.call(null,seq__25179_27764__$1);
var G__27767 = c__4559__auto___27765;
var G__27768 = cljs.core.count.call(null,c__4559__auto___27765);
var G__27769 = (0);
seq__25179_27754 = G__27766;
chunk__25180_27755 = G__27767;
count__25181_27756 = G__27768;
i__25182_27757 = G__27769;
continue;
} else {
var arg__9339__auto___27770 = cljs.core.first.call(null,seq__25179_27764__$1);
a__9338__auto__.push(arg__9339__auto___27770);

var G__27771 = cljs.core.next.call(null,seq__25179_27764__$1);
var G__27772 = null;
var G__27773 = (0);
var G__27774 = (0);
seq__25179_27754 = G__27771;
chunk__25180_27755 = G__27772;
count__25181_27756 = G__27773;
i__25182_27757 = G__27774;
continue;
}
} else {
}
}
break;
}

return React.DOM.wbr.apply(null,a__9338__auto__);
};
var wbr = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27775__i = 0, G__27775__a = new Array(arguments.length -  0);
while (G__27775__i < G__27775__a.length) {G__27775__a[G__27775__i] = arguments[G__27775__i + 0]; ++G__27775__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27775__a,0);
} 
return wbr__delegate.call(this,args__9337__auto__);};
wbr.cljs$lang$maxFixedArity = 0;
wbr.cljs$lang$applyTo = (function (arglist__27776){
var args__9337__auto__ = cljs.core.seq(arglist__27776);
return wbr__delegate(args__9337__auto__);
});
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__delegate;
return wbr;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.circle = (function() { 
var circle__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25187_27777 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25188_27778 = null;
var count__25189_27779 = (0);
var i__25190_27780 = (0);
while(true){
if((i__25190_27780 < count__25189_27779)){
var arg__9339__auto___27781 = cljs.core._nth.call(null,chunk__25188_27778,i__25190_27780);
a__9338__auto__.push(arg__9339__auto___27781);

var G__27782 = seq__25187_27777;
var G__27783 = chunk__25188_27778;
var G__27784 = count__25189_27779;
var G__27785 = (i__25190_27780 + (1));
seq__25187_27777 = G__27782;
chunk__25188_27778 = G__27783;
count__25189_27779 = G__27784;
i__25190_27780 = G__27785;
continue;
} else {
var temp__4126__auto___27786 = cljs.core.seq.call(null,seq__25187_27777);
if(temp__4126__auto___27786){
var seq__25187_27787__$1 = temp__4126__auto___27786;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25187_27787__$1)){
var c__4559__auto___27788 = cljs.core.chunk_first.call(null,seq__25187_27787__$1);
var G__27789 = cljs.core.chunk_rest.call(null,seq__25187_27787__$1);
var G__27790 = c__4559__auto___27788;
var G__27791 = cljs.core.count.call(null,c__4559__auto___27788);
var G__27792 = (0);
seq__25187_27777 = G__27789;
chunk__25188_27778 = G__27790;
count__25189_27779 = G__27791;
i__25190_27780 = G__27792;
continue;
} else {
var arg__9339__auto___27793 = cljs.core.first.call(null,seq__25187_27787__$1);
a__9338__auto__.push(arg__9339__auto___27793);

var G__27794 = cljs.core.next.call(null,seq__25187_27787__$1);
var G__27795 = null;
var G__27796 = (0);
var G__27797 = (0);
seq__25187_27777 = G__27794;
chunk__25188_27778 = G__27795;
count__25189_27779 = G__27796;
i__25190_27780 = G__27797;
continue;
}
} else {
}
}
break;
}

return React.DOM.circle.apply(null,a__9338__auto__);
};
var circle = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27798__i = 0, G__27798__a = new Array(arguments.length -  0);
while (G__27798__i < G__27798__a.length) {G__27798__a[G__27798__i] = arguments[G__27798__i + 0]; ++G__27798__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27798__a,0);
} 
return circle__delegate.call(this,args__9337__auto__);};
circle.cljs$lang$maxFixedArity = 0;
circle.cljs$lang$applyTo = (function (arglist__27799){
var args__9337__auto__ = cljs.core.seq(arglist__27799);
return circle__delegate(args__9337__auto__);
});
circle.cljs$core$IFn$_invoke$arity$variadic = circle__delegate;
return circle;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.g = (function() { 
var g__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25195_27800 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25196_27801 = null;
var count__25197_27802 = (0);
var i__25198_27803 = (0);
while(true){
if((i__25198_27803 < count__25197_27802)){
var arg__9339__auto___27804 = cljs.core._nth.call(null,chunk__25196_27801,i__25198_27803);
a__9338__auto__.push(arg__9339__auto___27804);

var G__27805 = seq__25195_27800;
var G__27806 = chunk__25196_27801;
var G__27807 = count__25197_27802;
var G__27808 = (i__25198_27803 + (1));
seq__25195_27800 = G__27805;
chunk__25196_27801 = G__27806;
count__25197_27802 = G__27807;
i__25198_27803 = G__27808;
continue;
} else {
var temp__4126__auto___27809 = cljs.core.seq.call(null,seq__25195_27800);
if(temp__4126__auto___27809){
var seq__25195_27810__$1 = temp__4126__auto___27809;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25195_27810__$1)){
var c__4559__auto___27811 = cljs.core.chunk_first.call(null,seq__25195_27810__$1);
var G__27812 = cljs.core.chunk_rest.call(null,seq__25195_27810__$1);
var G__27813 = c__4559__auto___27811;
var G__27814 = cljs.core.count.call(null,c__4559__auto___27811);
var G__27815 = (0);
seq__25195_27800 = G__27812;
chunk__25196_27801 = G__27813;
count__25197_27802 = G__27814;
i__25198_27803 = G__27815;
continue;
} else {
var arg__9339__auto___27816 = cljs.core.first.call(null,seq__25195_27810__$1);
a__9338__auto__.push(arg__9339__auto___27816);

var G__27817 = cljs.core.next.call(null,seq__25195_27810__$1);
var G__27818 = null;
var G__27819 = (0);
var G__27820 = (0);
seq__25195_27800 = G__27817;
chunk__25196_27801 = G__27818;
count__25197_27802 = G__27819;
i__25198_27803 = G__27820;
continue;
}
} else {
}
}
break;
}

return React.DOM.g.apply(null,a__9338__auto__);
};
var g = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27821__i = 0, G__27821__a = new Array(arguments.length -  0);
while (G__27821__i < G__27821__a.length) {G__27821__a[G__27821__i] = arguments[G__27821__i + 0]; ++G__27821__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27821__a,0);
} 
return g__delegate.call(this,args__9337__auto__);};
g.cljs$lang$maxFixedArity = 0;
g.cljs$lang$applyTo = (function (arglist__27822){
var args__9337__auto__ = cljs.core.seq(arglist__27822);
return g__delegate(args__9337__auto__);
});
g.cljs$core$IFn$_invoke$arity$variadic = g__delegate;
return g;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.line = (function() { 
var line__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25203_27823 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25204_27824 = null;
var count__25205_27825 = (0);
var i__25206_27826 = (0);
while(true){
if((i__25206_27826 < count__25205_27825)){
var arg__9339__auto___27827 = cljs.core._nth.call(null,chunk__25204_27824,i__25206_27826);
a__9338__auto__.push(arg__9339__auto___27827);

var G__27828 = seq__25203_27823;
var G__27829 = chunk__25204_27824;
var G__27830 = count__25205_27825;
var G__27831 = (i__25206_27826 + (1));
seq__25203_27823 = G__27828;
chunk__25204_27824 = G__27829;
count__25205_27825 = G__27830;
i__25206_27826 = G__27831;
continue;
} else {
var temp__4126__auto___27832 = cljs.core.seq.call(null,seq__25203_27823);
if(temp__4126__auto___27832){
var seq__25203_27833__$1 = temp__4126__auto___27832;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25203_27833__$1)){
var c__4559__auto___27834 = cljs.core.chunk_first.call(null,seq__25203_27833__$1);
var G__27835 = cljs.core.chunk_rest.call(null,seq__25203_27833__$1);
var G__27836 = c__4559__auto___27834;
var G__27837 = cljs.core.count.call(null,c__4559__auto___27834);
var G__27838 = (0);
seq__25203_27823 = G__27835;
chunk__25204_27824 = G__27836;
count__25205_27825 = G__27837;
i__25206_27826 = G__27838;
continue;
} else {
var arg__9339__auto___27839 = cljs.core.first.call(null,seq__25203_27833__$1);
a__9338__auto__.push(arg__9339__auto___27839);

var G__27840 = cljs.core.next.call(null,seq__25203_27833__$1);
var G__27841 = null;
var G__27842 = (0);
var G__27843 = (0);
seq__25203_27823 = G__27840;
chunk__25204_27824 = G__27841;
count__25205_27825 = G__27842;
i__25206_27826 = G__27843;
continue;
}
} else {
}
}
break;
}

return React.DOM.line.apply(null,a__9338__auto__);
};
var line = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27844__i = 0, G__27844__a = new Array(arguments.length -  0);
while (G__27844__i < G__27844__a.length) {G__27844__a[G__27844__i] = arguments[G__27844__i + 0]; ++G__27844__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27844__a,0);
} 
return line__delegate.call(this,args__9337__auto__);};
line.cljs$lang$maxFixedArity = 0;
line.cljs$lang$applyTo = (function (arglist__27845){
var args__9337__auto__ = cljs.core.seq(arglist__27845);
return line__delegate(args__9337__auto__);
});
line.cljs$core$IFn$_invoke$arity$variadic = line__delegate;
return line;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.path = (function() { 
var path__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25211_27846 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25212_27847 = null;
var count__25213_27848 = (0);
var i__25214_27849 = (0);
while(true){
if((i__25214_27849 < count__25213_27848)){
var arg__9339__auto___27850 = cljs.core._nth.call(null,chunk__25212_27847,i__25214_27849);
a__9338__auto__.push(arg__9339__auto___27850);

var G__27851 = seq__25211_27846;
var G__27852 = chunk__25212_27847;
var G__27853 = count__25213_27848;
var G__27854 = (i__25214_27849 + (1));
seq__25211_27846 = G__27851;
chunk__25212_27847 = G__27852;
count__25213_27848 = G__27853;
i__25214_27849 = G__27854;
continue;
} else {
var temp__4126__auto___27855 = cljs.core.seq.call(null,seq__25211_27846);
if(temp__4126__auto___27855){
var seq__25211_27856__$1 = temp__4126__auto___27855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25211_27856__$1)){
var c__4559__auto___27857 = cljs.core.chunk_first.call(null,seq__25211_27856__$1);
var G__27858 = cljs.core.chunk_rest.call(null,seq__25211_27856__$1);
var G__27859 = c__4559__auto___27857;
var G__27860 = cljs.core.count.call(null,c__4559__auto___27857);
var G__27861 = (0);
seq__25211_27846 = G__27858;
chunk__25212_27847 = G__27859;
count__25213_27848 = G__27860;
i__25214_27849 = G__27861;
continue;
} else {
var arg__9339__auto___27862 = cljs.core.first.call(null,seq__25211_27856__$1);
a__9338__auto__.push(arg__9339__auto___27862);

var G__27863 = cljs.core.next.call(null,seq__25211_27856__$1);
var G__27864 = null;
var G__27865 = (0);
var G__27866 = (0);
seq__25211_27846 = G__27863;
chunk__25212_27847 = G__27864;
count__25213_27848 = G__27865;
i__25214_27849 = G__27866;
continue;
}
} else {
}
}
break;
}

return React.DOM.path.apply(null,a__9338__auto__);
};
var path = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27867__i = 0, G__27867__a = new Array(arguments.length -  0);
while (G__27867__i < G__27867__a.length) {G__27867__a[G__27867__i] = arguments[G__27867__i + 0]; ++G__27867__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27867__a,0);
} 
return path__delegate.call(this,args__9337__auto__);};
path.cljs$lang$maxFixedArity = 0;
path.cljs$lang$applyTo = (function (arglist__27868){
var args__9337__auto__ = cljs.core.seq(arglist__27868);
return path__delegate(args__9337__auto__);
});
path.cljs$core$IFn$_invoke$arity$variadic = path__delegate;
return path;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.polygon = (function() { 
var polygon__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25219_27869 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25220_27870 = null;
var count__25221_27871 = (0);
var i__25222_27872 = (0);
while(true){
if((i__25222_27872 < count__25221_27871)){
var arg__9339__auto___27873 = cljs.core._nth.call(null,chunk__25220_27870,i__25222_27872);
a__9338__auto__.push(arg__9339__auto___27873);

var G__27874 = seq__25219_27869;
var G__27875 = chunk__25220_27870;
var G__27876 = count__25221_27871;
var G__27877 = (i__25222_27872 + (1));
seq__25219_27869 = G__27874;
chunk__25220_27870 = G__27875;
count__25221_27871 = G__27876;
i__25222_27872 = G__27877;
continue;
} else {
var temp__4126__auto___27878 = cljs.core.seq.call(null,seq__25219_27869);
if(temp__4126__auto___27878){
var seq__25219_27879__$1 = temp__4126__auto___27878;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25219_27879__$1)){
var c__4559__auto___27880 = cljs.core.chunk_first.call(null,seq__25219_27879__$1);
var G__27881 = cljs.core.chunk_rest.call(null,seq__25219_27879__$1);
var G__27882 = c__4559__auto___27880;
var G__27883 = cljs.core.count.call(null,c__4559__auto___27880);
var G__27884 = (0);
seq__25219_27869 = G__27881;
chunk__25220_27870 = G__27882;
count__25221_27871 = G__27883;
i__25222_27872 = G__27884;
continue;
} else {
var arg__9339__auto___27885 = cljs.core.first.call(null,seq__25219_27879__$1);
a__9338__auto__.push(arg__9339__auto___27885);

var G__27886 = cljs.core.next.call(null,seq__25219_27879__$1);
var G__27887 = null;
var G__27888 = (0);
var G__27889 = (0);
seq__25219_27869 = G__27886;
chunk__25220_27870 = G__27887;
count__25221_27871 = G__27888;
i__25222_27872 = G__27889;
continue;
}
} else {
}
}
break;
}

return React.DOM.polygon.apply(null,a__9338__auto__);
};
var polygon = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27890__i = 0, G__27890__a = new Array(arguments.length -  0);
while (G__27890__i < G__27890__a.length) {G__27890__a[G__27890__i] = arguments[G__27890__i + 0]; ++G__27890__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27890__a,0);
} 
return polygon__delegate.call(this,args__9337__auto__);};
polygon.cljs$lang$maxFixedArity = 0;
polygon.cljs$lang$applyTo = (function (arglist__27891){
var args__9337__auto__ = cljs.core.seq(arglist__27891);
return polygon__delegate(args__9337__auto__);
});
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__delegate;
return polygon;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.polyline = (function() { 
var polyline__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25227_27892 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25228_27893 = null;
var count__25229_27894 = (0);
var i__25230_27895 = (0);
while(true){
if((i__25230_27895 < count__25229_27894)){
var arg__9339__auto___27896 = cljs.core._nth.call(null,chunk__25228_27893,i__25230_27895);
a__9338__auto__.push(arg__9339__auto___27896);

var G__27897 = seq__25227_27892;
var G__27898 = chunk__25228_27893;
var G__27899 = count__25229_27894;
var G__27900 = (i__25230_27895 + (1));
seq__25227_27892 = G__27897;
chunk__25228_27893 = G__27898;
count__25229_27894 = G__27899;
i__25230_27895 = G__27900;
continue;
} else {
var temp__4126__auto___27901 = cljs.core.seq.call(null,seq__25227_27892);
if(temp__4126__auto___27901){
var seq__25227_27902__$1 = temp__4126__auto___27901;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25227_27902__$1)){
var c__4559__auto___27903 = cljs.core.chunk_first.call(null,seq__25227_27902__$1);
var G__27904 = cljs.core.chunk_rest.call(null,seq__25227_27902__$1);
var G__27905 = c__4559__auto___27903;
var G__27906 = cljs.core.count.call(null,c__4559__auto___27903);
var G__27907 = (0);
seq__25227_27892 = G__27904;
chunk__25228_27893 = G__27905;
count__25229_27894 = G__27906;
i__25230_27895 = G__27907;
continue;
} else {
var arg__9339__auto___27908 = cljs.core.first.call(null,seq__25227_27902__$1);
a__9338__auto__.push(arg__9339__auto___27908);

var G__27909 = cljs.core.next.call(null,seq__25227_27902__$1);
var G__27910 = null;
var G__27911 = (0);
var G__27912 = (0);
seq__25227_27892 = G__27909;
chunk__25228_27893 = G__27910;
count__25229_27894 = G__27911;
i__25230_27895 = G__27912;
continue;
}
} else {
}
}
break;
}

return React.DOM.polyline.apply(null,a__9338__auto__);
};
var polyline = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27913__i = 0, G__27913__a = new Array(arguments.length -  0);
while (G__27913__i < G__27913__a.length) {G__27913__a[G__27913__i] = arguments[G__27913__i + 0]; ++G__27913__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27913__a,0);
} 
return polyline__delegate.call(this,args__9337__auto__);};
polyline.cljs$lang$maxFixedArity = 0;
polyline.cljs$lang$applyTo = (function (arglist__27914){
var args__9337__auto__ = cljs.core.seq(arglist__27914);
return polyline__delegate(args__9337__auto__);
});
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__delegate;
return polyline;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.rect = (function() { 
var rect__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25235_27915 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25236_27916 = null;
var count__25237_27917 = (0);
var i__25238_27918 = (0);
while(true){
if((i__25238_27918 < count__25237_27917)){
var arg__9339__auto___27919 = cljs.core._nth.call(null,chunk__25236_27916,i__25238_27918);
a__9338__auto__.push(arg__9339__auto___27919);

var G__27920 = seq__25235_27915;
var G__27921 = chunk__25236_27916;
var G__27922 = count__25237_27917;
var G__27923 = (i__25238_27918 + (1));
seq__25235_27915 = G__27920;
chunk__25236_27916 = G__27921;
count__25237_27917 = G__27922;
i__25238_27918 = G__27923;
continue;
} else {
var temp__4126__auto___27924 = cljs.core.seq.call(null,seq__25235_27915);
if(temp__4126__auto___27924){
var seq__25235_27925__$1 = temp__4126__auto___27924;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25235_27925__$1)){
var c__4559__auto___27926 = cljs.core.chunk_first.call(null,seq__25235_27925__$1);
var G__27927 = cljs.core.chunk_rest.call(null,seq__25235_27925__$1);
var G__27928 = c__4559__auto___27926;
var G__27929 = cljs.core.count.call(null,c__4559__auto___27926);
var G__27930 = (0);
seq__25235_27915 = G__27927;
chunk__25236_27916 = G__27928;
count__25237_27917 = G__27929;
i__25238_27918 = G__27930;
continue;
} else {
var arg__9339__auto___27931 = cljs.core.first.call(null,seq__25235_27925__$1);
a__9338__auto__.push(arg__9339__auto___27931);

var G__27932 = cljs.core.next.call(null,seq__25235_27925__$1);
var G__27933 = null;
var G__27934 = (0);
var G__27935 = (0);
seq__25235_27915 = G__27932;
chunk__25236_27916 = G__27933;
count__25237_27917 = G__27934;
i__25238_27918 = G__27935;
continue;
}
} else {
}
}
break;
}

return React.DOM.rect.apply(null,a__9338__auto__);
};
var rect = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27936__i = 0, G__27936__a = new Array(arguments.length -  0);
while (G__27936__i < G__27936__a.length) {G__27936__a[G__27936__i] = arguments[G__27936__i + 0]; ++G__27936__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27936__a,0);
} 
return rect__delegate.call(this,args__9337__auto__);};
rect.cljs$lang$maxFixedArity = 0;
rect.cljs$lang$applyTo = (function (arglist__27937){
var args__9337__auto__ = cljs.core.seq(arglist__27937);
return rect__delegate(args__9337__auto__);
});
rect.cljs$core$IFn$_invoke$arity$variadic = rect__delegate;
return rect;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.svg = (function() { 
var svg__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__25243_27938 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__25244_27939 = null;
var count__25245_27940 = (0);
var i__25246_27941 = (0);
while(true){
if((i__25246_27941 < count__25245_27940)){
var arg__9339__auto___27942 = cljs.core._nth.call(null,chunk__25244_27939,i__25246_27941);
a__9338__auto__.push(arg__9339__auto___27942);

var G__27943 = seq__25243_27938;
var G__27944 = chunk__25244_27939;
var G__27945 = count__25245_27940;
var G__27946 = (i__25246_27941 + (1));
seq__25243_27938 = G__27943;
chunk__25244_27939 = G__27944;
count__25245_27940 = G__27945;
i__25246_27941 = G__27946;
continue;
} else {
var temp__4126__auto___27947 = cljs.core.seq.call(null,seq__25243_27938);
if(temp__4126__auto___27947){
var seq__25243_27948__$1 = temp__4126__auto___27947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25243_27948__$1)){
var c__4559__auto___27949 = cljs.core.chunk_first.call(null,seq__25243_27948__$1);
var G__27950 = cljs.core.chunk_rest.call(null,seq__25243_27948__$1);
var G__27951 = c__4559__auto___27949;
var G__27952 = cljs.core.count.call(null,c__4559__auto___27949);
var G__27953 = (0);
seq__25243_27938 = G__27950;
chunk__25244_27939 = G__27951;
count__25245_27940 = G__27952;
i__25246_27941 = G__27953;
continue;
} else {
var arg__9339__auto___27954 = cljs.core.first.call(null,seq__25243_27948__$1);
a__9338__auto__.push(arg__9339__auto___27954);

var G__27955 = cljs.core.next.call(null,seq__25243_27948__$1);
var G__27956 = null;
var G__27957 = (0);
var G__27958 = (0);
seq__25243_27938 = G__27955;
chunk__25244_27939 = G__27956;
count__25245_27940 = G__27957;
i__25246_27941 = G__27958;
continue;
}
} else {
}
}
break;
}

return React.DOM.svg.apply(null,a__9338__auto__);
};
var svg = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27959__i = 0, G__27959__a = new Array(arguments.length -  0);
while (G__27959__i < G__27959__a.length) {G__27959__a[G__27959__i] = arguments[G__27959__i + 0]; ++G__27959__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27959__a,0);
} 
return svg__delegate.call(this,args__9337__auto__);};
svg.cljs$lang$maxFixedArity = 0;
svg.cljs$lang$applyTo = (function (arglist__27960){
var args__9337__auto__ = cljs.core.seq(arglist__27960);
return svg__delegate(args__9337__auto__);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;

/**
* @param {...*} var_args
*/
quiescent.dom.text = (function() { 
var text__delegate = function (args__9337__auto__){

var a__9338__auto__ = [];
a__9338__auto__.push(quiescent.js_props.call(null,cljs.core.first.call(null,args__9337__auto__)));

var seq__24555_27961 = cljs.core.seq.call(null,cljs.core.rest.call(null,args__9337__auto__));
var chunk__24556_27962 = null;
var count__24557_27963 = (0);
var i__24558_27964 = (0);
while(true){
if((i__24558_27964 < count__24557_27963)){
var arg__9339__auto___27965 = cljs.core._nth.call(null,chunk__24556_27962,i__24558_27964);
a__9338__auto__.push(arg__9339__auto___27965);

var G__27966 = seq__24555_27961;
var G__27967 = chunk__24556_27962;
var G__27968 = count__24557_27963;
var G__27969 = (i__24558_27964 + (1));
seq__24555_27961 = G__27966;
chunk__24556_27962 = G__27967;
count__24557_27963 = G__27968;
i__24558_27964 = G__27969;
continue;
} else {
var temp__4126__auto___27970 = cljs.core.seq.call(null,seq__24555_27961);
if(temp__4126__auto___27970){
var seq__24555_27971__$1 = temp__4126__auto___27970;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24555_27971__$1)){
var c__4559__auto___27972 = cljs.core.chunk_first.call(null,seq__24555_27971__$1);
var G__27973 = cljs.core.chunk_rest.call(null,seq__24555_27971__$1);
var G__27974 = c__4559__auto___27972;
var G__27975 = cljs.core.count.call(null,c__4559__auto___27972);
var G__27976 = (0);
seq__24555_27961 = G__27973;
chunk__24556_27962 = G__27974;
count__24557_27963 = G__27975;
i__24558_27964 = G__27976;
continue;
} else {
var arg__9339__auto___27977 = cljs.core.first.call(null,seq__24555_27971__$1);
a__9338__auto__.push(arg__9339__auto___27977);

var G__27978 = cljs.core.next.call(null,seq__24555_27971__$1);
var G__27979 = null;
var G__27980 = (0);
var G__27981 = (0);
seq__24555_27961 = G__27978;
chunk__24556_27962 = G__27979;
count__24557_27963 = G__27980;
i__24558_27964 = G__27981;
continue;
}
} else {
}
}
break;
}

return React.DOM.text.apply(null,a__9338__auto__);
};
var text = function (var_args){
var args__9337__auto__ = null;
if (arguments.length > 0) {
var G__27982__i = 0, G__27982__a = new Array(arguments.length -  0);
while (G__27982__i < G__27982__a.length) {G__27982__a[G__27982__i] = arguments[G__27982__i + 0]; ++G__27982__i;}
  args__9337__auto__ = new cljs.core.IndexedSeq(G__27982__a,0);
} 
return text__delegate.call(this,args__9337__auto__);};
text.cljs$lang$maxFixedArity = 0;
text.cljs$lang$applyTo = (function (arglist__27983){
var args__9337__auto__ = cljs.core.seq(arglist__27983);
return text__delegate(args__9337__auto__);
});
text.cljs$core$IFn$_invoke$arity$variadic = text__delegate;
return text;
})()
;

quiescent.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"caption","caption",-855383902),new cljs.core.Keyword(null,"bdi","bdi",-1323025886),new cljs.core.Keyword(null,"rp","rp",2006698083),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"big","big",903550151),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"dfn","dfn",241908167),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"wbr","wbr",228661800),new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"ins","ins",-1021983570),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"datalist","datalist",-1235043474),new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"samp","samp",1506141136),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"rt","rt",623480692),new cljs.core.Keyword(null,"colgroup","colgroup",651118645),new cljs.core.Keyword(null,"meter","meter",-187641611),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"bdo","bdo",-2131148202),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"noscript","noscript",-704777289),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"menuitem","menuitem",1004047353),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"embed","embed",-1354913349),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"keygen","keygen",-571693253),new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.Keyword(null,"cite","cite",1909439996),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"ruby","ruby",2000737661),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"u","u",-1156634785)],[quiescent.dom.thead,quiescent.dom.path,quiescent.dom.del,quiescent.dom.fieldset,quiescent.dom.q,quiescent.dom.figure,quiescent.dom.aside,quiescent.dom.figcaption,quiescent.dom.video,quiescent.dom.address,quiescent.dom.caption,quiescent.dom.bdi,quiescent.dom.rp,quiescent.dom.hr,quiescent.dom.dd,quiescent.dom.meta,quiescent.dom.tbody,quiescent.dom.table,quiescent.dom.ul,quiescent.dom.pre,quiescent.dom.sup,quiescent.dom.script,quiescent.dom.big,quiescent.dom.button,quiescent.dom.dfn,quiescent.dom.sub,quiescent.dom.mark,quiescent.dom.wbr,quiescent.dom.strong,quiescent.dom.td,quiescent.dom.li,quiescent.dom.dt,quiescent.dom.section,quiescent.dom.th,quiescent.dom.time,quiescent.dom.optgroup,quiescent.dom.iframe,quiescent.dom.tr,quiescent.dom.circle,quiescent.dom.article,quiescent.dom.legend,quiescent.dom.em,quiescent.dom.kbd,quiescent.dom.abbr,quiescent.dom.source,quiescent.dom.output,quiescent.dom.ins,quiescent.dom.footer,quiescent.dom.header,quiescent.dom.datalist,quiescent.dom.tfoot,quiescent.dom.s,quiescent.dom.h5,quiescent.dom.canvas,quiescent.dom.param,quiescent.dom.title,quiescent.dom.small,quiescent.dom.style,quiescent.dom.textarea,quiescent.dom.div,quiescent.dom.option,quiescent.dom.summary,quiescent.dom.samp,quiescent.dom.h4,quiescent.dom.head,quiescent.dom.g,quiescent.dom.ol,quiescent.dom.details,quiescent.dom.line,quiescent.dom.var$,quiescent.dom.h6,quiescent.dom.link,quiescent.dom.col,quiescent.dom.label,quiescent.dom.rt,quiescent.dom.colgroup,quiescent.dom.meter,quiescent.dom.svg,quiescent.dom.code,quiescent.dom.bdo,quiescent.dom.b,quiescent.dom.noscript,quiescent.dom.h2,quiescent.dom.area,quiescent.dom.br,quiescent.dom.form,quiescent.dom.audio,quiescent.dom.input,quiescent.dom.menuitem,quiescent.dom.base,quiescent.dom.h1,quiescent.dom.progress,quiescent.dom.main,quiescent.dom.embed,quiescent.dom.h3,quiescent.dom.body,quiescent.dom.keygen,quiescent.dom.polyline,quiescent.dom.cite,quiescent.dom.rect,quiescent.dom.p,quiescent.dom.nav,quiescent.dom.ruby,quiescent.dom.map,quiescent.dom.object,quiescent.dom.i,quiescent.dom.menu,quiescent.dom.blockquote,quiescent.dom.img,quiescent.dom.a,quiescent.dom.dl,quiescent.dom.select,quiescent.dom.polygon,quiescent.dom.html,quiescent.dom.text,quiescent.dom.span,quiescent.dom.track,quiescent.dom.data,quiescent.dom.u]);

//# sourceMappingURL=dom.js.map?rel=1423280682162