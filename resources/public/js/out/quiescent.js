// Compiled by ClojureScript 0.0-2850 {}
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
var o = (function (){var obj31252 = {};
return obj31252;
})();
var seq__31253_31259 = cljs.core.seq.call(null,obj);
var chunk__31254_31260 = null;
var count__31255_31261 = (0);
var i__31256_31262 = (0);
while(true){
if((i__31256_31262 < count__31255_31261)){
var vec__31257_31263 = cljs.core._nth.call(null,chunk__31254_31260,i__31256_31262);
var k_31264 = cljs.core.nth.call(null,vec__31257_31263,(0),null);
var v_31265 = cljs.core.nth.call(null,vec__31257_31263,(1),null);
(o[cljs.core.name.call(null,k_31264)] = js_props.call(null,v_31265));

var G__31266 = seq__31253_31259;
var G__31267 = chunk__31254_31260;
var G__31268 = count__31255_31261;
var G__31269 = (i__31256_31262 + (1));
seq__31253_31259 = G__31266;
chunk__31254_31260 = G__31267;
count__31255_31261 = G__31268;
i__31256_31262 = G__31269;
continue;
} else {
var temp__4126__auto___31270 = cljs.core.seq.call(null,seq__31253_31259);
if(temp__4126__auto___31270){
var seq__31253_31271__$1 = temp__4126__auto___31270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31253_31271__$1)){
var c__8291__auto___31272 = cljs.core.chunk_first.call(null,seq__31253_31271__$1);
var G__31273 = cljs.core.chunk_rest.call(null,seq__31253_31271__$1);
var G__31274 = c__8291__auto___31272;
var G__31275 = cljs.core.count.call(null,c__8291__auto___31272);
var G__31276 = (0);
seq__31253_31259 = G__31273;
chunk__31254_31260 = G__31274;
count__31255_31261 = G__31275;
i__31256_31262 = G__31276;
continue;
} else {
var vec__31258_31277 = cljs.core.first.call(null,seq__31253_31271__$1);
var k_31278 = cljs.core.nth.call(null,vec__31258_31277,(0),null);
var v_31279 = cljs.core.nth.call(null,vec__31258_31277,(1),null);
(o[cljs.core.name.call(null,k_31278)] = js_props.call(null,v_31279));

var G__31280 = cljs.core.next.call(null,seq__31253_31271__$1);
var G__31281 = null;
var G__31282 = (0);
var G__31283 = (0);
seq__31253_31259 = G__31280;
chunk__31254_31260 = G__31281;
count__31255_31261 = G__31282;
i__31256_31262 = G__31283;
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
var _STAR_component_STAR_31285 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_31285;
}}), "shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});
return ((function (react_component){
return (function() { 
var G__31286__delegate = function (value,static_args){
return react_component.call(null,{"statics": static_args, "value": value});
};
var G__31286 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
var G__31287__i = 0, G__31287__a = new Array(arguments.length -  1);
while (G__31287__i < G__31287__a.length) {G__31287__a[G__31287__i] = arguments[G__31287__i + 1]; ++G__31287__i;}
  static_args = new cljs.core.IndexedSeq(G__31287__a,0);
} 
return G__31286__delegate.call(this,value,static_args);};
G__31286.cljs$lang$maxFixedArity = 1;
G__31286.cljs$lang$applyTo = (function (arglist__31288){
var value = cljs.core.first(arglist__31288);
var static_args = cljs.core.rest(arglist__31288);
return G__31286__delegate(value,static_args);
});
G__31286.cljs$core$IFn$_invoke$arity$variadic = G__31286__delegate;
return G__31286;
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
var _STAR_component_STAR_31293 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_31293;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_31292 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_31292;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_31291 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_31291;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_31290 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_31290;
}} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4126__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_31289 = quiescent._STAR_component_STAR_;
quiescent._STAR_component_STAR_ = this$;

try{return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_31289;
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
var temp__4126__auto___31294 = (child.props["key"]);
if(cljs.core.truth_(temp__4126__auto___31294)){
var key_31295 = temp__4126__auto___31294;
(props["key"] = key_31295);
} else {
}

return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__31296__i = 0, G__31296__a = new Array(arguments.length -  1);
while (G__31296__i < G__31296__a.length) {G__31296__a[G__31296__i] = arguments[G__31296__i + 1]; ++G__31296__i;}
  kvs = new cljs.core.IndexedSeq(G__31296__a,0);
} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__31297){
var child = cljs.core.first(arglist__31297);
var kvs = cljs.core.rest(arglist__31297);
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
quiescent.render = (function render(component,node){
return React.renderComponent(component,node);
});
