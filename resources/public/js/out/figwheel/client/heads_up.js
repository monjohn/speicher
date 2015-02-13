// Compiled by ClojureScript 0.0-2727 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__23206_23214 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__23207_23215 = null;
var count__23208_23216 = (0);
var i__23209_23217 = (0);
while(true){
if((i__23209_23217 < count__23208_23216)){
var k_23218 = cljs.core._nth.call(null,chunk__23207_23215,i__23209_23217);
e.setAttribute(cljs.core.name.call(null,k_23218),cljs.core.get.call(null,attrs,k_23218));

var G__23219 = seq__23206_23214;
var G__23220 = chunk__23207_23215;
var G__23221 = count__23208_23216;
var G__23222 = (i__23209_23217 + (1));
seq__23206_23214 = G__23219;
chunk__23207_23215 = G__23220;
count__23208_23216 = G__23221;
i__23209_23217 = G__23222;
continue;
} else {
var temp__4126__auto___23223 = cljs.core.seq.call(null,seq__23206_23214);
if(temp__4126__auto___23223){
var seq__23206_23224__$1 = temp__4126__auto___23223;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23206_23224__$1)){
var c__4559__auto___23225 = cljs.core.chunk_first.call(null,seq__23206_23224__$1);
var G__23226 = cljs.core.chunk_rest.call(null,seq__23206_23224__$1);
var G__23227 = c__4559__auto___23225;
var G__23228 = cljs.core.count.call(null,c__4559__auto___23225);
var G__23229 = (0);
seq__23206_23214 = G__23226;
chunk__23207_23215 = G__23227;
count__23208_23216 = G__23228;
i__23209_23217 = G__23229;
continue;
} else {
var k_23230 = cljs.core.first.call(null,seq__23206_23224__$1);
e.setAttribute(cljs.core.name.call(null,k_23230),cljs.core.get.call(null,attrs,k_23230));

var G__23231 = cljs.core.next.call(null,seq__23206_23224__$1);
var G__23232 = null;
var G__23233 = (0);
var G__23234 = (0);
seq__23206_23214 = G__23231;
chunk__23207_23215 = G__23232;
count__23208_23216 = G__23233;
i__23209_23217 = G__23234;
continue;
}
} else {
}
}
break;
}

var seq__23210_23235 = cljs.core.seq.call(null,children);
var chunk__23211_23236 = null;
var count__23212_23237 = (0);
var i__23213_23238 = (0);
while(true){
if((i__23213_23238 < count__23212_23237)){
var ch_23239 = cljs.core._nth.call(null,chunk__23211_23236,i__23213_23238);
e.appendChild(ch_23239);

var G__23240 = seq__23210_23235;
var G__23241 = chunk__23211_23236;
var G__23242 = count__23212_23237;
var G__23243 = (i__23213_23238 + (1));
seq__23210_23235 = G__23240;
chunk__23211_23236 = G__23241;
count__23212_23237 = G__23242;
i__23213_23238 = G__23243;
continue;
} else {
var temp__4126__auto___23244 = cljs.core.seq.call(null,seq__23210_23235);
if(temp__4126__auto___23244){
var seq__23210_23245__$1 = temp__4126__auto___23244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23210_23245__$1)){
var c__4559__auto___23246 = cljs.core.chunk_first.call(null,seq__23210_23245__$1);
var G__23247 = cljs.core.chunk_rest.call(null,seq__23210_23245__$1);
var G__23248 = c__4559__auto___23246;
var G__23249 = cljs.core.count.call(null,c__4559__auto___23246);
var G__23250 = (0);
seq__23210_23235 = G__23247;
chunk__23211_23236 = G__23248;
count__23212_23237 = G__23249;
i__23213_23238 = G__23250;
continue;
} else {
var ch_23251 = cljs.core.first.call(null,seq__23210_23245__$1);
e.appendChild(ch_23251);

var G__23252 = cljs.core.next.call(null,seq__23210_23245__$1);
var G__23253 = null;
var G__23254 = (0);
var G__23255 = (0);
seq__23210_23235 = G__23252;
chunk__23211_23236 = G__23253;
count__23212_23237 = G__23254;
i__23213_23238 = G__23255;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__23256__i = 0, G__23256__a = new Array(arguments.length -  2);
while (G__23256__i < G__23256__a.length) {G__23256__a[G__23256__i] = arguments[G__23256__i + 2]; ++G__23256__i;}
  children = new cljs.core.IndexedSeq(G__23256__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__23257){
var t = cljs.core.first(arglist__23257);
arglist__23257 = cljs.core.next(arglist__23257);
var attrs = cljs.core.first(arglist__23257);
var children = cljs.core.rest(arglist__23257);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__4669__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4670__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4671__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4673__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__,hierarchy__4673__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4673__auto__,method_table__4669__auto__,prefer_table__4670__auto__,method_cache__4671__auto__,cached_hierarchy__4672__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__23258,st_map){
var map__23262 = p__23258;
var map__23262__$1 = ((cljs.core.seq_QMARK_.call(null,map__23262))?cljs.core.apply.call(null,cljs.core.hash_map,map__23262):map__23262);
var container_el = cljs.core.get.call(null,map__23262__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__23262,map__23262__$1,container_el){
return (function (p__23263){
var vec__23264 = p__23263;
var k = cljs.core.nth.call(null,vec__23264,(0),null);
var v = cljs.core.nth.call(null,vec__23264,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__23262,map__23262__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__23265,dom_str){
var map__23267 = p__23265;
var map__23267__$1 = ((cljs.core.seq_QMARK_.call(null,map__23267))?cljs.core.apply.call(null,cljs.core.hash_map,map__23267):map__23267);
var c = map__23267__$1;
var content_area_el = cljs.core.get.call(null,map__23267__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__23268){
var map__23270 = p__23268;
var map__23270__$1 = ((cljs.core.seq_QMARK_.call(null,map__23270))?cljs.core.apply.call(null,cljs.core.hash_map,map__23270):map__23270);
var content_area_el = cljs.core.get.call(null,map__23270__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__6550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto__){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto__){
return (function (state_23312){
var state_val_23313 = (state_23312[(1)]);
if((state_val_23313 === (2))){
var inst_23297 = (state_23312[(7)]);
var inst_23306 = (state_23312[(2)]);
var inst_23307 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_23308 = ["auto"];
var inst_23309 = cljs.core.PersistentHashMap.fromArrays(inst_23307,inst_23308);
var inst_23310 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23297,inst_23309);
var state_23312__$1 = (function (){var statearr_23314 = state_23312;
(statearr_23314[(8)] = inst_23306);

return statearr_23314;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23312__$1,inst_23310);
} else {
if((state_val_23313 === (1))){
var inst_23297 = (state_23312[(7)]);
var inst_23297__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23298 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23299 = ["10px","10px","100%","68px","1.0"];
var inst_23300 = cljs.core.PersistentHashMap.fromArrays(inst_23298,inst_23299);
var inst_23301 = cljs.core.merge.call(null,inst_23300,style);
var inst_23302 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23297__$1,inst_23301);
var inst_23303 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23297__$1,msg);
var inst_23304 = cljs.core.async.timeout.call(null,(300));
var state_23312__$1 = (function (){var statearr_23315 = state_23312;
(statearr_23315[(9)] = inst_23302);

(statearr_23315[(7)] = inst_23297__$1);

(statearr_23315[(10)] = inst_23303);

return statearr_23315;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23312__$1,(2),inst_23304);
} else {
return null;
}
}
});})(c__6550__auto__))
;
return ((function (switch__6494__auto__,c__6550__auto__){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_23319 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23319[(0)] = state_machine__6495__auto__);

(statearr_23319[(1)] = (1));

return statearr_23319;
});
var state_machine__6495__auto____1 = (function (state_23312){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_23312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e23320){if((e23320 instanceof Object)){
var ex__6498__auto__ = e23320;
var statearr_23321_23323 = state_23312;
(statearr_23321_23323[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23320;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23324 = state_23312;
state_23312 = G__23324;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_23312){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_23312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto__))
})();
var state__6552__auto__ = (function (){var statearr_23322 = f__6551__auto__.call(null);
(statearr_23322[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto__);

return statearr_23322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto__))
);

return c__6550__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__23326 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__23326,(0),null);
var ln = cljs.core.nth.call(null,vec__23326,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__23329 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__23329,(0),null);
var file_line = cljs.core.nth.call(null,vec__23329,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__23329,file_name,file_line){
return (function (p1__23327_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__23327_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__23329,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__23331 = figwheel.client.heads_up.ensure_container.call(null);
var map__23331__$1 = ((cljs.core.seq_QMARK_.call(null,map__23331))?cljs.core.apply.call(null,cljs.core.hash_map,map__23331):map__23331);
var content_area_el = cljs.core.get.call(null,map__23331__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__6550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto__){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto__){
return (function (state_23378){
var state_val_23379 = (state_23378[(1)]);
if((state_val_23379 === (3))){
var inst_23361 = (state_23378[(7)]);
var inst_23375 = (state_23378[(2)]);
var inst_23376 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_23361,"");
var state_23378__$1 = (function (){var statearr_23380 = state_23378;
(statearr_23380[(8)] = inst_23375);

return statearr_23380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23378__$1,inst_23376);
} else {
if((state_val_23379 === (2))){
var inst_23361 = (state_23378[(7)]);
var inst_23368 = (state_23378[(2)]);
var inst_23369 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_23370 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_23371 = cljs.core.PersistentHashMap.fromArrays(inst_23369,inst_23370);
var inst_23372 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23361,inst_23371);
var inst_23373 = cljs.core.async.timeout.call(null,(200));
var state_23378__$1 = (function (){var statearr_23381 = state_23378;
(statearr_23381[(9)] = inst_23368);

(statearr_23381[(10)] = inst_23372);

return statearr_23381;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23378__$1,(3),inst_23373);
} else {
if((state_val_23379 === (1))){
var inst_23361 = (state_23378[(7)]);
var inst_23361__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_23362 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_23363 = ["0.0"];
var inst_23364 = cljs.core.PersistentHashMap.fromArrays(inst_23362,inst_23363);
var inst_23365 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_23361__$1,inst_23364);
var inst_23366 = cljs.core.async.timeout.call(null,(300));
var state_23378__$1 = (function (){var statearr_23382 = state_23378;
(statearr_23382[(11)] = inst_23365);

(statearr_23382[(7)] = inst_23361__$1);

return statearr_23382;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23378__$1,(2),inst_23366);
} else {
return null;
}
}
}
});})(c__6550__auto__))
;
return ((function (switch__6494__auto__,c__6550__auto__){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_23386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23386[(0)] = state_machine__6495__auto__);

(statearr_23386[(1)] = (1));

return statearr_23386;
});
var state_machine__6495__auto____1 = (function (state_23378){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_23378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e23387){if((e23387 instanceof Object)){
var ex__6498__auto__ = e23387;
var statearr_23388_23390 = state_23378;
(statearr_23388_23390[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23391 = state_23378;
state_23378 = G__23391;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_23378){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_23378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto__))
})();
var state__6552__auto__ = (function (){var statearr_23389 = f__6551__auto__.call(null);
(statearr_23389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto__);

return statearr_23389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto__))
);

return c__6550__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__6550__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6550__auto__){
return (function (){
var f__6551__auto__ = (function (){var switch__6494__auto__ = ((function (c__6550__auto__){
return (function (state_23423){
var state_val_23424 = (state_23423[(1)]);
if((state_val_23424 === (4))){
var inst_23421 = (state_23423[(2)]);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23423__$1,inst_23421);
} else {
if((state_val_23424 === (3))){
var inst_23418 = (state_23423[(2)]);
var inst_23419 = figwheel.client.heads_up.clear.call(null);
var state_23423__$1 = (function (){var statearr_23425 = state_23423;
(statearr_23425[(7)] = inst_23418);

return statearr_23425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23423__$1,(4),inst_23419);
} else {
if((state_val_23424 === (2))){
var inst_23415 = (state_23423[(2)]);
var inst_23416 = cljs.core.async.timeout.call(null,(400));
var state_23423__$1 = (function (){var statearr_23426 = state_23423;
(statearr_23426[(8)] = inst_23415);

return statearr_23426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23423__$1,(3),inst_23416);
} else {
if((state_val_23424 === (1))){
var inst_23413 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_23423__$1 = state_23423;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23423__$1,(2),inst_23413);
} else {
return null;
}
}
}
}
});})(c__6550__auto__))
;
return ((function (switch__6494__auto__,c__6550__auto__){
return (function() {
var state_machine__6495__auto__ = null;
var state_machine__6495__auto____0 = (function (){
var statearr_23430 = [null,null,null,null,null,null,null,null,null];
(statearr_23430[(0)] = state_machine__6495__auto__);

(statearr_23430[(1)] = (1));

return statearr_23430;
});
var state_machine__6495__auto____1 = (function (state_23423){
while(true){
var ret_value__6496__auto__ = (function (){try{while(true){
var result__6497__auto__ = switch__6494__auto__.call(null,state_23423);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6497__auto__;
}
break;
}
}catch (e23431){if((e23431 instanceof Object)){
var ex__6498__auto__ = e23431;
var statearr_23432_23434 = state_23423;
(statearr_23432_23434[(5)] = ex__6498__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23423);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23431;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6496__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23435 = state_23423;
state_23423 = G__23435;
continue;
} else {
return ret_value__6496__auto__;
}
break;
}
});
state_machine__6495__auto__ = function(state_23423){
switch(arguments.length){
case 0:
return state_machine__6495__auto____0.call(this);
case 1:
return state_machine__6495__auto____1.call(this,state_23423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6495__auto____0;
state_machine__6495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6495__auto____1;
return state_machine__6495__auto__;
})()
;})(switch__6494__auto__,c__6550__auto__))
})();
var state__6552__auto__ = (function (){var statearr_23433 = f__6551__auto__.call(null);
(statearr_23433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6550__auto__);

return statearr_23433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6552__auto__);
});})(c__6550__auto__))
);

return c__6550__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1423280678452