// Compiled by ClojureScript 0.0-2674 {}
if(!goog.isProvided_('cljs.core.async.impl.dispatch')) {
goog.provide('cljs.core.async.impl.dispatch');
}
goog.require('cljs.core');
goog.require('goog.async.nextTick');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.dispatch.tasks = cljs.core.async.impl.buffers.ring_buffer.call(null,(32));
cljs.core.async.impl.dispatch.running_QMARK_ = false;
cljs.core.async.impl.dispatch.queued_QMARK_ = false;
cljs.core.async.impl.dispatch.TASK_BATCH_SIZE = (1024);
cljs.core.async.impl.dispatch.process_messages = (function process_messages(){
cljs.core.async.impl.dispatch.running_QMARK_ = true;

cljs.core.async.impl.dispatch.queued_QMARK_ = false;

var count_19528 = (0);
while(true){
var m_19529 = cljs.core.async.impl.dispatch.tasks.pop();
if((m_19529 == null)){
} else {
m_19529.call(null);

if((count_19528 < cljs.core.async.impl.dispatch.TASK_BATCH_SIZE)){
var G__19530 = (count_19528 + (1));
count_19528 = G__19530;
continue;
} else {
}
}
break;
}

cljs.core.async.impl.dispatch.running_QMARK_ = false;

if((cljs.core.async.impl.dispatch.tasks.length > (0))){
return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
} else {
return null;
}
});
cljs.core.async.impl.dispatch.queue_dispatcher = (function queue_dispatcher(){
if(cljs.core.truth_((function (){var and__3742__auto__ = cljs.core.async.impl.dispatch.queued_QMARK_;
if(cljs.core.truth_(and__3742__auto__)){
return cljs.core.async.impl.dispatch.running_QMARK_;
} else {
return and__3742__auto__;
}
})())){
return null;
} else {
cljs.core.async.impl.dispatch.queued_QMARK_ = true;

return goog.async.nextTick(cljs.core.async.impl.dispatch.process_messages);
}
});
cljs.core.async.impl.dispatch.run = (function run(f){
cljs.core.async.impl.dispatch.tasks.unbounded_unshift(f);

return cljs.core.async.impl.dispatch.queue_dispatcher.call(null);
});
cljs.core.async.impl.dispatch.queue_delay = (function queue_delay(f,delay){
return setTimeout(f,delay);
});

//# sourceMappingURL=dispatch.js.map