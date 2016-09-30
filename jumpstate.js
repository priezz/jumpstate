(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.jumpstate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
"use strict";function _toConsumableArray(t){if(Array.isArray(t)){for(var e=0,a=Array(t.length);e<t.length;e++)a[e]=t[e];return a}return Array.from(t)}function attachDispatcher(t,e){var a=[e];"object"===("undefined"==typeof e?"undefined":_typeof(e))&&(e.length?a=e:(a=[],Object.keys(e).forEach(function(t){a.push(e[t])}))),a.forEach(function(e){e._isJumpstate&&(e._dispatch=t.dispatch)})}function shortID(){return("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};exports.default=function(){var t=arguments.length>1,e=t?arguments.length<=0?void 0:arguments[0]:{},a=t?arguments.length<=1?void 0:arguments[1]:arguments.length<=0?void 0:arguments[0];"string"==typeof e&&(e={name:n});var n=Object.assign(jumpstateDefaults,{name:shortID()},e);if("string"==typeof n.name&&!n.name.length)throw new Error("Jumpstate requires a name if defined in config");var r=a.initial||null;delete a.initial;var o={},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e||!o[e.type])return r;var a=e._jumpstate.multiPayload?e.payload:[e.payload],i=o[e.type].apply(o,[t].concat(_toConsumableArray(a)));return r=n.autoAssign?Object.assign({},t,i):i};return Object.keys(a).forEach(function(t){var e=n.name+"_"+t;o[e]=a[t],i[t]=function(){for(var a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];var u=o.length>1,c={_jumpstate:{stateName:n.name,actionName:t,multiPayload:u},type:e,payload:u?o:o[0]};return n.actionsCreator?c:n.detached?i(r,c):i._dispatch(c)},"testing"===process.env.NODE_ENV&&(i["_"+t]=a[t])}),Object.assign(i,{_config:n,_isJumpstate:!0}),i._config=n,i},exports.attachDispatcher=attachDispatcher;var jumpstateDefaults=exports.jumpstateDefaults={autoAssign:!0,detached:!1,actionCreator:!1};
}).call(this,require('_process'))
},{"_process":2}],2:[function(require,module,exports){
function defaultSetTimout(){throw new Error("setTimeout has not been defined")}function defaultClearTimeout(){throw new Error("clearTimeout has not been defined")}function runTimeout(e){if(cachedSetTimeout===setTimeout)return setTimeout(e,0);if((cachedSetTimeout===defaultSetTimout||!cachedSetTimeout)&&setTimeout)return cachedSetTimeout=setTimeout,setTimeout(e,0);try{return cachedSetTimeout(e,0)}catch(t){try{return cachedSetTimeout.call(null,e,0)}catch(t){return cachedSetTimeout.call(this,e,0)}}}function runClearTimeout(e){if(cachedClearTimeout===clearTimeout)return clearTimeout(e);if((cachedClearTimeout===defaultClearTimeout||!cachedClearTimeout)&&clearTimeout)return cachedClearTimeout=clearTimeout,clearTimeout(e);try{return cachedClearTimeout(e)}catch(t){try{return cachedClearTimeout.call(null,e)}catch(t){return cachedClearTimeout.call(this,e)}}}function cleanUpNextTick(){draining&&currentQueue&&(draining=!1,currentQueue.length?queue=currentQueue.concat(queue):queueIndex=-1,queue.length&&drainQueue())}function drainQueue(){if(!draining){var e=runTimeout(cleanUpNextTick);draining=!0;for(var t=queue.length;t;){for(currentQueue=queue,queue=[];++queueIndex<t;)currentQueue&&currentQueue[queueIndex].run();queueIndex=-1,t=queue.length}currentQueue=null,draining=!1,runClearTimeout(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}var process=module.exports={},cachedSetTimeout,cachedClearTimeout;!function(){try{cachedSetTimeout="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){cachedSetTimeout=defaultSetTimout}try{cachedClearTimeout="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){cachedClearTimeout=defaultClearTimeout}}();var queue=[],draining=!1,currentQueue,queueIndex=-1;process.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var u=1;u<arguments.length;u++)t[u-1]=arguments[u];queue.push(new Item(e,t)),1!==queue.length||draining||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},process.title="browser",process.browser=!0,process.env={},process.argv=[],process.version="",process.versions={},process.on=noop,process.addListener=noop,process.once=noop,process.off=noop,process.removeListener=noop,process.removeAllListeners=noop,process.emit=noop,process.binding=function(e){throw new Error("process.binding is not supported")},process.cwd=function(){return"/"},process.chdir=function(e){throw new Error("process.chdir is not supported")},process.umask=function(){return 0};
},{}]},{},[1])(1)
});