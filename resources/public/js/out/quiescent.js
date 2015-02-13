// Compiled by ClojureScript 0.0-2727 {}
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
var o = (function (){var obj28025 = {};
return obj28025;
})();
var seq__28026_28032 = cljs.core.seq.call(null,obj);
var chunk__28027_28033 = null;
var count__28028_28034 = (0);
var i__28029_28035 = (0);
while(true){
if((i__28029_28035 < count__28028_28034)){
var vec__28030_28036 = cljs.core._nth.call(null,chunk__28027_28033,i__28029_28035);
var k_28037 = cljs.core.nth.call(null,vec__28030_28036,(0),null);
var v_28038 = cljs.core.nth.call(null,vec__28030_28036,(1),null);
(o[cljs.core.name.call(null,k_28037)] = js_props.call(null,v_28038));

var G__28039 = seq__28026_28032;
var G__28040 = chunk__28027_28033;
var G__28041 = count__28028_28034;
var G__28042 = (i__28029_28035 + (1));
seq__28026_28032 = G__28039;
chunk__28027_28033 = G__28040;
count__28028_28034 = G__28041;
i__28029_28035 = G__28042;
continue;
} else {
var temp__4126__auto___28043 = cljs.core.seq.call(null,seq__28026_28032);
if(temp__4126__auto___28043){
var seq__28026_28044__$1 = temp__4126__auto___28043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28026_28044__$1)){
var c__4559__auto___28045 = cljs.core.chunk_first.call(null,seq__28026_28044__$1);
var G__28046 = cljs.core.chunk_rest.call(null,seq__28026_28044__$1);
var G__28047 = c__4559__auto___28045;
var G__28048 = cljs.core.count.call(null,c__4559__auto___28045);
var G__28049 = (0);
seq__28026_28032 = G__28046;
chunk__28027_28033 = G__28047;
count__28028_28034 = G__28048;
i__28029_28035 = G__28049;
continue;
} else {
var vec__28031_28050 = cljs.core.first.call(null,seq__28026_28044__$1);
var k_28051 = cljs.core.nth.call(null,vec__28031_28050,(0),null);
var v_28052 = cljs.core.nth.call(null,vec__28031_28050,(1),null);
(o[cljs.core.name.call(null,k_28051)] = js_props.call(null,v_28052));

var G__28053 = cljs.core.next.call(null,seq__28026_28044__$1);
var G__28054 = null;
var G__28055 = (0);
var G__28056 = (0);
seq__28026_28032 = G__28053;
chunk__28027_28033 = G__28054;
count__28028_28034 = G__28055;
i__28029_28035 = G__28056;
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
var _STAR_component_STAR_28058 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_28058;
}}), "shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});
return ((function (react_component){
return (function() { 
var G__28059__delegate = function (value,static_args){
return react_component.call(null,{"statics": static_args, "value": value});
};
var G__28059 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
var G__28060__i = 0, G__28060__a = new Array(arguments.length -  1);
while (G__28060__i < G__28060__a.length) {G__28060__a[G__28060__i] = arguments[G__28060__i + 1]; ++G__28060__i;}
  static_args = new cljs.core.IndexedSeq(G__28060__a,0);
} 
return G__28059__delegate.call(this,value,static_args);};
G__28059.cljs$lang$maxFixedArity = 1;
G__28059.cljs$lang$applyTo = (function (arglist__28061){
var value = cljs.core.first(arglist__28061);
var static_args = cljs.core.rest(arglist__28061);
return G__28059__delegate(value,static_args);
});
G__28059.cljs$core$IFn$_invoke$arity$variadic = G__28059__delegate;
return G__28059;
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
var _STAR_component_STAR_28066 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_28066;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_28065 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_28065;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_28064 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_28064;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_28063 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_28063;
}} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4126__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_28062 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_28062;
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
var temp__4126__auto___28067 = (child.props["key"]);
if(cljs.core.truth_(temp__4126__auto___28067)){
var key_28068 = temp__4126__auto___28067;
(props["key"] = key_28068);
} else {
}

return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__28069__i = 0, G__28069__a = new Array(arguments.length -  1);
while (G__28069__i < G__28069__a.length) {G__28069__a[G__28069__i] = arguments[G__28069__i + 1]; ++G__28069__i;}
  kvs = new cljs.core.IndexedSeq(G__28069__a,0);
} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__28070){
var child = cljs.core.first(arglist__28070);
var kvs = cljs.core.rest(arglist__28070);
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

//# sourceMappingURL=quiescent.js.map?rel=1423280682572