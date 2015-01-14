// Compiled by ClojureScript 0.0-2674 {}
goog.provide('quiescent');
goog.require('cljs.core');
/**
* Utility function. Takes an object which is (possibly) a
* ClojureScript map. If the value is a ClojureScript map, convert it
* to a JavaScript properties object. Otherwise, return the argument
* unchanged.
*/
quiescent.js_props = (function js_props(obj){
if(cljs.core.map_QMARK_.call(null,obj)){
var o = (function (){var obj16475 = {};
return obj16475;
})();
var seq__16476_16482 = cljs.core.seq.call(null,obj);
var chunk__16477_16483 = null;
var count__16478_16484 = (0);
var i__16479_16485 = (0);
while(true){
if((i__16479_16485 < count__16478_16484)){
var vec__16480_16486 = cljs.core._nth.call(null,chunk__16477_16483,i__16479_16485);
var k_16487 = cljs.core.nth.call(null,vec__16480_16486,(0),null);
var v_16488 = cljs.core.nth.call(null,vec__16480_16486,(1),null);
(o[cljs.core.name.call(null,k_16487)] = js_props.call(null,v_16488));

var G__16489 = seq__16476_16482;
var G__16490 = chunk__16477_16483;
var G__16491 = count__16478_16484;
var G__16492 = (i__16479_16485 + (1));
seq__16476_16482 = G__16489;
chunk__16477_16483 = G__16490;
count__16478_16484 = G__16491;
i__16479_16485 = G__16492;
continue;
} else {
var temp__4126__auto___16493 = cljs.core.seq.call(null,seq__16476_16482);
if(temp__4126__auto___16493){
var seq__16476_16494__$1 = temp__4126__auto___16493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16476_16494__$1)){
var c__4519__auto___16495 = cljs.core.chunk_first.call(null,seq__16476_16494__$1);
var G__16496 = cljs.core.chunk_rest.call(null,seq__16476_16494__$1);
var G__16497 = c__4519__auto___16495;
var G__16498 = cljs.core.count.call(null,c__4519__auto___16495);
var G__16499 = (0);
seq__16476_16482 = G__16496;
chunk__16477_16483 = G__16497;
count__16478_16484 = G__16498;
i__16479_16485 = G__16499;
continue;
} else {
var vec__16481_16500 = cljs.core.first.call(null,seq__16476_16494__$1);
var k_16501 = cljs.core.nth.call(null,vec__16481_16500,(0),null);
var v_16502 = cljs.core.nth.call(null,vec__16481_16500,(1),null);
(o[cljs.core.name.call(null,k_16501)] = js_props.call(null,v_16502));

var G__16503 = cljs.core.next.call(null,seq__16476_16494__$1);
var G__16504 = null;
var G__16505 = (0);
var G__16506 = (0);
seq__16476_16482 = G__16503;
chunk__16477_16483 = G__16504;
count__16478_16484 = G__16505;
i__16479_16485 = G__16506;
continue;
}
} else {
}
}
break;
}

return o;
} else {
return obj;
}
});
/**
* Within a component render function, will be bound to the raw
* ReactJS component.
*/
quiescent._STAR_component_STAR_ = null;
/**
* Return a function that will return a ReactJS component, using the
* provided function as the implementation for React's 'render' method
* on the component.
* 
* The given render function should take a single immutable value as
* its first argument, and return a single ReactJS component.
* Additional arguments to the component constructor will be passed as
* additional arguments to the render function whenever it is invoked,
* but will *not* be included in any calculations regarding whether the
* component should re-render.
*/
quiescent.component = (function component(renderer){
var react_component = React.createClass({"render": (function (){
var this$ = this;
var _STAR_component_STAR_16508 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_16508;
}}), "shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});
return ((function (react_component){
return (function() { 
var G__16509__delegate = function (value,static_args){
return react_component.call(null,{"statics": static_args, "value": value});
};
var G__16509 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
var G__16510__i = 0, G__16510__a = new Array(arguments.length -  1);
while (G__16510__i < G__16510__a.length) {G__16510__a[G__16510__i] = arguments[G__16510__i + 1]; ++G__16510__i;}
  static_args = new cljs.core.IndexedSeq(G__16510__a,0);
} 
return G__16509__delegate.call(this,value,static_args);};
G__16509.cljs$lang$maxFixedArity = 1;
G__16509.cljs$lang$applyTo = (function (arglist__16511){
var value = cljs.core.first(arglist__16511);
var static_args = cljs.core.rest(arglist__16511);
return G__16509__delegate(value,static_args);
});
G__16509.cljs$core$IFn$_invoke$arity$variadic = G__16509__delegate;
return G__16509;
})()
;
;})(react_component))
});
/**
* Wrapper component used to mix-in lifecycle access
*/
quiescent.WrapperComponent = React.createClass({"componentWillUnmount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUnmount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_16516 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_16516;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_16515 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_16515;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_16514 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_16514;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_16513 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_16513;
}} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4126__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_16512 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_16512;
}} else {
return null;
}
}), "render": (function (){
var this$ = this;
return (this$.props["wrappee"]);
})});
/**
* Create a wrapper function for a compoment implementing multiple
* lifecycle functions. Lifecycle functions are specified as any number
* of additional key-value pairs passed as arguments to this function.
* 
* Valid keys and values include:
* 
* :onUpdate - will call the provided function,
* passing the rendered DOM node as a single arg
* :onMount - will call the provided function,
* passing the rendered DOM node as a single arg
* :onWillUpdate - will call the provided function with no arguments
* :onWillMount - will call the provided function with no arguments
* :onWillUnmount - will call the provided function with no arguments
* @param {...*} var_args
*/
quiescent.wrapper = (function() { 
var wrapper__delegate = function (child,kvs){
var props = quiescent.js_props.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",876822573),child,kvs));
var temp__4126__auto___16517 = (child.props["key"]);
if(cljs.core.truth_(temp__4126__auto___16517)){
var key_16518 = temp__4126__auto___16517;
(props["key"] = key_16518);
} else {
}

return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__16519__i = 0, G__16519__a = new Array(arguments.length -  1);
while (G__16519__i < G__16519__a.length) {G__16519__a[G__16519__i] = arguments[G__16519__i + 1]; ++G__16519__i;}
  kvs = new cljs.core.IndexedSeq(G__16519__a,0);
} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__16520){
var child = cljs.core.first(arglist__16520);
var kvs = cljs.core.rest(arglist__16520);
return wrapper__delegate(child,kvs);
});
wrapper.cljs$core$IFn$_invoke$arity$variadic = wrapper__delegate;
return wrapper;
})()
;
/**
* Wrap a component, specifying a function to be called on the
* componentDidUpdate lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_update = (function on_update(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount lifecycle event.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_mount = (function on_mount(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",-876858467),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentDidMount AND the componentDidUpdate lifecycle events.
* 
* The function will be passed the rendered DOM node.
*/
quiescent.on_render = (function on_render(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",-876858467),f,new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_mount = (function on_will_mount(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",-2065876946),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUpdate lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_update = (function on_will_update(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",1307659073),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillMount AND the componentWillUpdate lifecycle events.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_render = (function on_will_render(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",-2065876946),f,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",1307659073),f);
});
/**
* Wrap a component, specifying a function to be called on the
* componentWillUnmount lifecycle event.
* 
* The function will be called with no arguments.
*/
quiescent.on_will_unmount = (function on_will_unmount(child,f){
return quiescent.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUnmount","onWillUnmount",-16104606),f);
});
/**
* Given a ReactJS component, immediately render it, rooted to the
* specified DOM node.
*/
quiescent.render = (function render__$1(component,node){
return React.renderComponent(component,node);
});

//# sourceMappingURL=quiescent.js.map