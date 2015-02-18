// Compiled by ClojureScript 0.0-2850 {}
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
var seq__31925_31933 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31926_31934 = null;
var count__31927_31935 = (0);
var i__31928_31936 = (0);
while(true){
if((i__31928_31936 < count__31927_31935)){
var k_31937 = cljs.core._nth.call(null,chunk__31926_31934,i__31928_31936);
e.setAttribute(cljs.core.name.call(null,k_31937),cljs.core.get.call(null,attrs,k_31937));

var G__31938 = seq__31925_31933;
var G__31939 = chunk__31926_31934;
var G__31940 = count__31927_31935;
var G__31941 = (i__31928_31936 + (1));
seq__31925_31933 = G__31938;
chunk__31926_31934 = G__31939;
count__31927_31935 = G__31940;
i__31928_31936 = G__31941;
continue;
} else {
var temp__4126__auto___31942 = cljs.core.seq.call(null,seq__31925_31933);
if(temp__4126__auto___31942){
var seq__31925_31943__$1 = temp__4126__auto___31942;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31925_31943__$1)){
var c__8291__auto___31944 = cljs.core.chunk_first.call(null,seq__31925_31943__$1);
var G__31945 = cljs.core.chunk_rest.call(null,seq__31925_31943__$1);
var G__31946 = c__8291__auto___31944;
var G__31947 = cljs.core.count.call(null,c__8291__auto___31944);
var G__31948 = (0);
seq__31925_31933 = G__31945;
chunk__31926_31934 = G__31946;
count__31927_31935 = G__31947;
i__31928_31936 = G__31948;
continue;
} else {
var k_31949 = cljs.core.first.call(null,seq__31925_31943__$1);
e.setAttribute(cljs.core.name.call(null,k_31949),cljs.core.get.call(null,attrs,k_31949));

var G__31950 = cljs.core.next.call(null,seq__31925_31943__$1);
var G__31951 = null;
var G__31952 = (0);
var G__31953 = (0);
seq__31925_31933 = G__31950;
chunk__31926_31934 = G__31951;
count__31927_31935 = G__31952;
i__31928_31936 = G__31953;
continue;
}
} else {
}
}
break;
}

var seq__31929_31954 = cljs.core.seq.call(null,children);
var chunk__31930_31955 = null;
var count__31931_31956 = (0);
var i__31932_31957 = (0);
while(true){
if((i__31932_31957 < count__31931_31956)){
var ch_31958 = cljs.core._nth.call(null,chunk__31930_31955,i__31932_31957);
e.appendChild(ch_31958);

var G__31959 = seq__31929_31954;
var G__31960 = chunk__31930_31955;
var G__31961 = count__31931_31956;
var G__31962 = (i__31932_31957 + (1));
seq__31929_31954 = G__31959;
chunk__31930_31955 = G__31960;
count__31931_31956 = G__31961;
i__31932_31957 = G__31962;
continue;
} else {
var temp__4126__auto___31963 = cljs.core.seq.call(null,seq__31929_31954);
if(temp__4126__auto___31963){
var seq__31929_31964__$1 = temp__4126__auto___31963;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31929_31964__$1)){
var c__8291__auto___31965 = cljs.core.chunk_first.call(null,seq__31929_31964__$1);
var G__31966 = cljs.core.chunk_rest.call(null,seq__31929_31964__$1);
var G__31967 = c__8291__auto___31965;
var G__31968 = cljs.core.count.call(null,c__8291__auto___31965);
var G__31969 = (0);
seq__31929_31954 = G__31966;
chunk__31930_31955 = G__31967;
count__31931_31956 = G__31968;
i__31932_31957 = G__31969;
continue;
} else {
var ch_31970 = cljs.core.first.call(null,seq__31929_31964__$1);
e.appendChild(ch_31970);

var G__31971 = cljs.core.next.call(null,seq__31929_31964__$1);
var G__31972 = null;
var G__31973 = (0);
var G__31974 = (0);
seq__31929_31954 = G__31971;
chunk__31930_31955 = G__31972;
count__31931_31956 = G__31973;
i__31932_31957 = G__31974;
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
var G__31975__i = 0, G__31975__a = new Array(arguments.length -  2);
while (G__31975__i < G__31975__a.length) {G__31975__a[G__31975__i] = arguments[G__31975__i + 2]; ++G__31975__i;}
  children = new cljs.core.IndexedSeq(G__31975__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__31976){
var t = cljs.core.first(arglist__31976);
arglist__31976 = cljs.core.next(arglist__31976);
var attrs = cljs.core.first(arglist__31976);
var children = cljs.core.rest(arglist__31976);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__8401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8404__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8405__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__8401__auto__,prefer_table__8402__auto__,method_cache__8403__auto__,cached_hierarchy__8404__auto__,hierarchy__8405__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__8401__auto__,prefer_table__8402__auto__,method_cache__8403__auto__,cached_hierarchy__8404__auto__,hierarchy__8405__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8405__auto__,method_table__8401__auto__,prefer_table__8402__auto__,method_cache__8403__auto__,cached_hierarchy__8404__auto__));
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
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__31977,st_map){
var map__31981 = p__31977;
var map__31981__$1 = ((cljs.core.seq_QMARK_.call(null,map__31981))?cljs.core.apply.call(null,cljs.core.hash_map,map__31981):map__31981);
var container_el = cljs.core.get.call(null,map__31981__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31981,map__31981__$1,container_el){
return (function (p__31982){
var vec__31983 = p__31982;
var k = cljs.core.nth.call(null,vec__31983,(0),null);
var v = cljs.core.nth.call(null,vec__31983,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31981,map__31981__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__31984,dom_str){
var map__31986 = p__31984;
var map__31986__$1 = ((cljs.core.seq_QMARK_.call(null,map__31986))?cljs.core.apply.call(null,cljs.core.hash_map,map__31986):map__31986);
var c = map__31986__$1;
var content_area_el = cljs.core.get.call(null,map__31986__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__31987){
var map__31989 = p__31987;
var map__31989__$1 = ((cljs.core.seq_QMARK_.call(null,map__31989))?cljs.core.apply.call(null,cljs.core.hash_map,map__31989):map__31989);
var content_area_el = cljs.core.get.call(null,map__31989__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__10282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto__){
return (function (state_32031){
var state_val_32032 = (state_32031[(1)]);
if((state_val_32032 === (2))){
var inst_32016 = (state_32031[(7)]);
var inst_32025 = (state_32031[(2)]);
var inst_32026 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_32027 = ["auto"];
var inst_32028 = cljs.core.PersistentHashMap.fromArrays(inst_32026,inst_32027);
var inst_32029 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32016,inst_32028);
var state_32031__$1 = (function (){var statearr_32033 = state_32031;
(statearr_32033[(8)] = inst_32025);

return statearr_32033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32031__$1,inst_32029);
} else {
if((state_val_32032 === (1))){
var inst_32016 = (state_32031[(7)]);
var inst_32016__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32017 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32018 = ["10px","10px","100%","68px","1.0"];
var inst_32019 = cljs.core.PersistentHashMap.fromArrays(inst_32017,inst_32018);
var inst_32020 = cljs.core.merge.call(null,inst_32019,style);
var inst_32021 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32016__$1,inst_32020);
var inst_32022 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32016__$1,msg);
var inst_32023 = cljs.core.async.timeout.call(null,(300));
var state_32031__$1 = (function (){var statearr_32034 = state_32031;
(statearr_32034[(9)] = inst_32021);

(statearr_32034[(10)] = inst_32022);

(statearr_32034[(7)] = inst_32016__$1);

return statearr_32034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32031__$1,(2),inst_32023);
} else {
return null;
}
}
});})(c__10282__auto__))
;
return ((function (switch__10226__auto__,c__10282__auto__){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_32038 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32038[(0)] = state_machine__10227__auto__);

(statearr_32038[(1)] = (1));

return statearr_32038;
});
var state_machine__10227__auto____1 = (function (state_32031){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_32031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e32039){if((e32039 instanceof Object)){
var ex__10230__auto__ = e32039;
var statearr_32040_32042 = state_32031;
(statearr_32040_32042[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32043 = state_32031;
state_32031 = G__32043;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_32031){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_32031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto__))
})();
var state__10284__auto__ = (function (){var statearr_32041 = f__10283__auto__.call(null);
(statearr_32041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);

return statearr_32041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__))
);

return c__10282__auto__;
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
var vec__32045 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__32045,(0),null);
var ln = cljs.core.nth.call(null,vec__32045,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__32048 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__32048,(0),null);
var file_line = cljs.core.nth.call(null,vec__32048,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__32048,file_name,file_line){
return (function (p1__32046_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__32046_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__32048,file_name,file_line))
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
var map__32050 = figwheel.client.heads_up.ensure_container.call(null);
var map__32050__$1 = ((cljs.core.seq_QMARK_.call(null,map__32050))?cljs.core.apply.call(null,cljs.core.hash_map,map__32050):map__32050);
var content_area_el = cljs.core.get.call(null,map__32050__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__10282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto__){
return (function (state_32097){
var state_val_32098 = (state_32097[(1)]);
if((state_val_32098 === (3))){
var inst_32080 = (state_32097[(7)]);
var inst_32094 = (state_32097[(2)]);
var inst_32095 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_32080,"");
var state_32097__$1 = (function (){var statearr_32099 = state_32097;
(statearr_32099[(8)] = inst_32094);

return statearr_32099;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32097__$1,inst_32095);
} else {
if((state_val_32098 === (2))){
var inst_32080 = (state_32097[(7)]);
var inst_32087 = (state_32097[(2)]);
var inst_32088 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_32089 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_32090 = cljs.core.PersistentHashMap.fromArrays(inst_32088,inst_32089);
var inst_32091 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32080,inst_32090);
var inst_32092 = cljs.core.async.timeout.call(null,(200));
var state_32097__$1 = (function (){var statearr_32100 = state_32097;
(statearr_32100[(9)] = inst_32091);

(statearr_32100[(10)] = inst_32087);

return statearr_32100;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32097__$1,(3),inst_32092);
} else {
if((state_val_32098 === (1))){
var inst_32080 = (state_32097[(7)]);
var inst_32080__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_32081 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_32082 = ["0.0"];
var inst_32083 = cljs.core.PersistentHashMap.fromArrays(inst_32081,inst_32082);
var inst_32084 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_32080__$1,inst_32083);
var inst_32085 = cljs.core.async.timeout.call(null,(300));
var state_32097__$1 = (function (){var statearr_32101 = state_32097;
(statearr_32101[(11)] = inst_32084);

(statearr_32101[(7)] = inst_32080__$1);

return statearr_32101;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32097__$1,(2),inst_32085);
} else {
return null;
}
}
}
});})(c__10282__auto__))
;
return ((function (switch__10226__auto__,c__10282__auto__){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_32105 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32105[(0)] = state_machine__10227__auto__);

(statearr_32105[(1)] = (1));

return statearr_32105;
});
var state_machine__10227__auto____1 = (function (state_32097){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_32097);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e32106){if((e32106 instanceof Object)){
var ex__10230__auto__ = e32106;
var statearr_32107_32109 = state_32097;
(statearr_32107_32109[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32097);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32110 = state_32097;
state_32097 = G__32110;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_32097){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_32097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto__))
})();
var state__10284__auto__ = (function (){var statearr_32108 = f__10283__auto__.call(null);
(statearr_32108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);

return statearr_32108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__))
);

return c__10282__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__10282__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10282__auto__){
return (function (){
var f__10283__auto__ = (function (){var switch__10226__auto__ = ((function (c__10282__auto__){
return (function (state_32142){
var state_val_32143 = (state_32142[(1)]);
if((state_val_32143 === (4))){
var inst_32140 = (state_32142[(2)]);
var state_32142__$1 = state_32142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32142__$1,inst_32140);
} else {
if((state_val_32143 === (3))){
var inst_32137 = (state_32142[(2)]);
var inst_32138 = figwheel.client.heads_up.clear.call(null);
var state_32142__$1 = (function (){var statearr_32144 = state_32142;
(statearr_32144[(7)] = inst_32137);

return statearr_32144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32142__$1,(4),inst_32138);
} else {
if((state_val_32143 === (2))){
var inst_32134 = (state_32142[(2)]);
var inst_32135 = cljs.core.async.timeout.call(null,(400));
var state_32142__$1 = (function (){var statearr_32145 = state_32142;
(statearr_32145[(8)] = inst_32134);

return statearr_32145;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32142__$1,(3),inst_32135);
} else {
if((state_val_32143 === (1))){
var inst_32132 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_32142__$1 = state_32142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32142__$1,(2),inst_32132);
} else {
return null;
}
}
}
}
});})(c__10282__auto__))
;
return ((function (switch__10226__auto__,c__10282__auto__){
return (function() {
var state_machine__10227__auto__ = null;
var state_machine__10227__auto____0 = (function (){
var statearr_32149 = [null,null,null,null,null,null,null,null,null];
(statearr_32149[(0)] = state_machine__10227__auto__);

(statearr_32149[(1)] = (1));

return statearr_32149;
});
var state_machine__10227__auto____1 = (function (state_32142){
while(true){
var ret_value__10228__auto__ = (function (){try{while(true){
var result__10229__auto__ = switch__10226__auto__.call(null,state_32142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10229__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10229__auto__;
}
break;
}
}catch (e32150){if((e32150 instanceof Object)){
var ex__10230__auto__ = e32150;
var statearr_32151_32153 = state_32142;
(statearr_32151_32153[(5)] = ex__10230__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32150;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10228__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32154 = state_32142;
state_32142 = G__32154;
continue;
} else {
return ret_value__10228__auto__;
}
break;
}
});
state_machine__10227__auto__ = function(state_32142){
switch(arguments.length){
case 0:
return state_machine__10227__auto____0.call(this);
case 1:
return state_machine__10227__auto____1.call(this,state_32142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10227__auto____0;
state_machine__10227__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10227__auto____1;
return state_machine__10227__auto__;
})()
;})(switch__10226__auto__,c__10282__auto__))
})();
var state__10284__auto__ = (function (){var statearr_32152 = f__10283__auto__.call(null);
(statearr_32152[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10282__auto__);

return statearr_32152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10284__auto__);
});})(c__10282__auto__))
);

return c__10282__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";
