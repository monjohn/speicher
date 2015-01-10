// Compiled by ClojureScript 0.0-2674 {}
if(!goog.isProvided_('quiescent')) {
goog.provide('quiescent');
}
goog.require('cljs.core');
/**
* Utility function. Takes an object which is (possibly) a
* ClojureScript map. If the value is a ClojureScript map, convert it
* to a JavaScript properties object. Otherwise, return the argument
* unchanged.
*/
quiescent.js_props = (function js_props(obj){
if(cljs.core.map_QMARK_.call(null,obj)){
var o = (function (){var obj23259 = {};
return obj23259;
})();
var seq__23260_23266 = cljs.core.seq.call(null,obj);
var chunk__23261_23267 = null;
var count__23262_23268 = (0);
var i__23263_23269 = (0);
while(true){
if((i__23263_23269 < count__23262_23268)){
var vec__23264_23270 = cljs.core._nth.call(null,chunk__23261_23267,i__23263_23269);
var k_23271 = cljs.core.nth.call(null,vec__23264_23270,(0),null);
var v_23272 = cljs.core.nth.call(null,vec__23264_23270,(1),null);
(o[cljs.core.name.call(null,k_23271)] = js_props.call(null,v_23272));

var G__23273 = seq__23260_23266;
var G__23274 = chunk__23261_23267;
var G__23275 = count__23262_23268;
var G__23276 = (i__23263_23269 + (1));
seq__23260_23266 = G__23273;
chunk__23261_23267 = G__23274;
count__23262_23268 = G__23275;
i__23263_23269 = G__23276;
continue;
} else {
var temp__4126__auto___23277 = cljs.core.seq.call(null,seq__23260_23266);
if(temp__4126__auto___23277){
var seq__23260_23278__$1 = temp__4126__auto___23277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23260_23278__$1)){
var c__4541__auto___23279 = cljs.core.chunk_first.call(null,seq__23260_23278__$1);
var G__23280 = cljs.core.chunk_rest.call(null,seq__23260_23278__$1);
var G__23281 = c__4541__auto___23279;
var G__23282 = cljs.core.count.call(null,c__4541__auto___23279);
var G__23283 = (0);
seq__23260_23266 = G__23280;
chunk__23261_23267 = G__23281;
count__23262_23268 = G__23282;
i__23263_23269 = G__23283;
continue;
} else {
var vec__23265_23284 = cljs.core.first.call(null,seq__23260_23278__$1);
var k_23285 = cljs.core.nth.call(null,vec__23265_23284,(0),null);
var v_23286 = cljs.core.nth.call(null,vec__23265_23284,(1),null);
(o[cljs.core.name.call(null,k_23285)] = js_props.call(null,v_23286));

var G__23287 = cljs.core.next.call(null,seq__23260_23278__$1);
var G__23288 = null;
var G__23289 = (0);
var G__23290 = (0);
seq__23260_23266 = G__23287;
chunk__23261_23267 = G__23288;
count__23262_23268 = G__23289;
i__23263_23269 = G__23290;
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
var _STAR_component_STAR_23292 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return cljs.core.apply.call(null,renderer,(this$.props["value"]),(this$.props["statics"]));
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_23292;
}}), "shouldComponentUpdate": (function (next_props,_){
var this$ = this;
return cljs.core.not_EQ_.call(null,(this$.props["value"]),(next_props["value"]));
})});
return ((function (react_component){
return (function() { 
var G__23293__delegate = function (value,static_args){
return react_component.call(null,{"statics": static_args, "value": value});
};
var G__23293 = function (value,var_args){
var static_args = null;
if (arguments.length > 1) {
var G__23294__i = 0, G__23294__a = new Array(arguments.length -  1);
while (G__23294__i < G__23294__a.length) {G__23294__a[G__23294__i] = arguments[G__23294__i + 1]; ++G__23294__i;}
  static_args = new cljs.core.IndexedSeq(G__23294__a,0);
} 
return G__23293__delegate.call(this,value,static_args);};
G__23293.cljs$lang$maxFixedArity = 1;
G__23293.cljs$lang$applyTo = (function (arglist__23295){
var value = cljs.core.first(arglist__23295);
var static_args = cljs.core.rest(arglist__23295);
return G__23293__delegate(value,static_args);
});
G__23293.cljs$core$IFn$_invoke$arity$variadic = G__23293__delegate;
return G__23293;
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
var _STAR_component_STAR_23300 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_23300;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_23299 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_23299;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_23298 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null);
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_23298;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4126__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_23297 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_23297;
}} else {
return null;
}
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4126__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
var _STAR_component_STAR_23296 = quiescent._STAR_component_STAR_;
try{quiescent._STAR_component_STAR_ = this$;

return f.call(null,this$.getDOMNode());
}finally {quiescent._STAR_component_STAR_ = _STAR_component_STAR_23296;
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
var temp__4126__auto___23301 = (child.props["key"]);
if(cljs.core.truth_(temp__4126__auto___23301)){
var key_23302 = temp__4126__auto___23301;
(props["key"] = key_23302);
} else {
}

return quiescent.WrapperComponent.call(null,props);
};
var wrapper = function (child,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__23303__i = 0, G__23303__a = new Array(arguments.length -  1);
while (G__23303__i < G__23303__a.length) {G__23303__a[G__23303__i] = arguments[G__23303__i + 1]; ++G__23303__i;}
  kvs = new cljs.core.IndexedSeq(G__23303__a,0);
} 
return wrapper__delegate.call(this,child,kvs);};
wrapper.cljs$lang$maxFixedArity = 1;
wrapper.cljs$lang$applyTo = (function (arglist__23304){
var child = cljs.core.first(arglist__23304);
var kvs = cljs.core.rest(arglist__23304);
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