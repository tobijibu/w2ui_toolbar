var linkClicked=function(){},initStateChange=function(){w2ui.mytoolbar&&w2ui.mytoolbar.destroy(),w2ui.mytoolbar2&&w2ui.mytoolbar2.destroy(),w2ui.mytoolbar3&&w2ui.mytoolbar3.destroy()},newPageReady=function(){},transitionCompleted=function(){"function"==typeof createObj&&createObj(),"function"==typeof createObj2&&createObj2(),"function"==typeof createObj3&&createObj3()};toggleNaviSubMenu=function(t){document.getElementById(t).classList.toggle("hidden")};var loadDeferredStyles=function(){var t=document.getElementById("deferred-styles"),e=document.createElement("div");e.innerHTML=t.textContent,document.body.appendChild(e),t.parentElement.removeChild(t)},raf=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;raf?raf(function(){window.setTimeout(loadDeferredStyles,0)}):window.addEventListener("load",loadDeferredStyles),function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Barba",[],e):"object"==typeof exports?exports.Barba=e():t.Barba=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return t[i].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="http://localhost:8080/dist",e(0)}([function(t,e,n){"function"!=typeof Promise&&(window.Promise=n(1));var i={version:"1.0.0",BaseTransition:n(4),BaseView:n(6),BaseCache:n(8),Dispatcher:n(7),HistoryManager:n(9),Pjax:n(10),Prefetch:n(13),Utils:n(5)};t.exports=i},function(t,e,n){(function(e){!function(n){function i(){}function o(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(t,this)}function r(t,e){for(;3===t._state;)t=t._value;return 0===t._state?void t._deferreds.push(e):(t._handled=!0,void d(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null!==n){var i;try{i=n(t._value)}catch(t){return void s(e.promise,t)}a(e.promise,i)}else(1===t._state?a:s)(e.promise,t._value)}))}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof o)return t._state=3,t._value=e,void c(t);if("function"==typeof n)return void u(function(t,e){return function(){t.apply(e,arguments)}}(n,e),t)}t._state=1,t._value=e,c(t)}catch(e){s(t,e)}}function s(t,e){t._state=2,t._value=e,c(t)}function c(t){2===t._state&&0===t._deferreds.length&&d(function(){t._handled||h(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)r(t,t._deferreds[e]);t._deferreds=null}function u(t,e){var n=!1;try{t(function(t){n||(n=!0,a(e,t))},function(t){n||(n=!0,s(e,t))})}catch(t){if(n)return;n=!0,s(e,t)}}var l=setTimeout,d="function"==typeof e&&e||function(t){l(t,0)},h=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){var n=new this.constructor(i);return r(this,new function(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}(t,e,n)),n},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function i(r,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){i(r,t)},n)}e[r]=a,0==--o&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var o=e.length,r=0;r<e.length;r++)i(r,e[r])})},o.resolve=function(t){return t&&"object"==typeof t&&t.constructor===o?t:new o(function(e){e(t)})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){for(var i=0,o=t.length;i<o;i++)t[i].then(e,n)})},o._setImmediateFn=function(t){d=t},o._setUnhandledRejectionFn=function(t){h=t},void 0!==t&&t.exports?t.exports=o:n.Promise||(n.Promise=o)}(this)}).call(e,n(2).setImmediate)},function(t,e,n){(function(t,i){function o(t,e){this._id=t,this._clearFn=e}var r=n(3).nextTick,a=Function.prototype.apply,s=Array.prototype.slice,c={},u=0;e.setTimeout=function(){return new o(a.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(a.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},e.setImmediate="function"==typeof t?t:function(t){var n=u++,i=!(arguments.length<2)&&s.call(arguments,1);return c[n]=!0,r(function(){c[n]&&(i?t.apply(null,i):t.call(null),e.clearImmediate(n))}),n},e.clearImmediate="function"==typeof i?i:function(t){delete c[t]}}).call(e,n(2).setImmediate,n(2).clearImmediate)},function(t,e){function n(){d&&u&&(d=!1,u.length?l=u.concat(l):h=-1,l.length&&i())}function i(){if(!d){var t=a(n);d=!0;for(var e=l.length;e;){for(u=l,l=[];++h<e;)u&&u[h].run();h=-1,e=l.length}u=null,d=!1,s(t)}}function o(t,e){this.fun=t,this.array=e}function r(){}var a,s,c=t.exports={};!function(){try{a=setTimeout}catch(t){a=function(){throw new Error("setTimeout is not defined")}}try{s=clearTimeout}catch(t){s=function(){throw new Error("clearTimeout is not defined")}}}();var u,l=[],d=!1,h=-1;c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new o(t,e)),1!==l.length||d||a(i,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=r,c.addListener=r,c.once=r,c.off=r,c.removeListener=r,c.removeAllListeners=r,c.emit=r,c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(t,e,n){var i=n(5),o={oldContainer:void 0,newContainer:void 0,newContainerLoading:void 0,extend:function(t){return i.extend(this,t)},init:function(t,e){var n=this;return this.oldContainer=t,this._newContainerPromise=e,this.deferred=i.deferred(),this.newContainerReady=i.deferred(),this.newContainerLoading=this.newContainerReady.promise,this.start(),this._newContainerPromise.then(function(t){n.newContainer=t,n.newContainerReady.resolve()}),this.deferred.promise},done:function(){this.oldContainer.parentNode.removeChild(this.oldContainer),this.newContainer.style.visibility="visible",this.deferred.resolve()},start:function(){}};t.exports=o},function(t,e){var n={getCurrentUrl:function(){return window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search},cleanLink:function(t){return t.replace(/#.*/,"")},xhrTimeout:5e3,xhr:function(t){var e=this.deferred(),n=new XMLHttpRequest;return n.onreadystatechange=function(){if(4===n.readyState)return 200===n.status?e.resolve(n.responseText):e.reject(new Error("xhr: HTTP code is not 200"))},n.ontimeout=function(){return e.reject(new Error("xhr: Timeout exceeded"))},n.open("GET",t),n.timeout=this.xhrTimeout,n.setRequestHeader("x-barba","yes"),n.send(),e.promise},extend:function(t,e){var n=Object.create(t);for(var i in e)e.hasOwnProperty(i)&&(n[i]=e[i]);return n},deferred:function(){return new function(){this.resolve=null,this.reject=null,this.promise=new Promise(function(t,e){this.resolve=t,this.reject=e}.bind(this))}},getPort:function(t){var e=void 0!==t?t:window.location.port,n=window.location.protocol;return""!=e?parseInt(e):"http:"===n?80:"https:"===n?443:void 0}};t.exports=n},function(t,e,n){var i=n(7),o=n(5),r={namespace:null,extend:function(t){return o.extend(this,t)},init:function(){var t=this;i.on("initStateChange",function(e,n){n&&n.namespace===t.namespace&&t.onLeave()}),i.on("newPageReady",function(e,n,i){t.container=i,e.namespace===t.namespace&&t.onEnter()}),i.on("transitionCompleted",function(e,n){e.namespace===t.namespace&&t.onEnterCompleted(),n&&n.namespace===t.namespace&&t.onLeaveCompleted()})},onEnter:function(){},onEnterCompleted:function(){},onLeave:function(){},onLeaveCompleted:function(){}};t.exports=r},function(t,e){var n={events:{},on:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},off:function(t,e){t in this.events!=0&&this.events[t].splice(this.events[t].indexOf(e),1)},trigger:function(t){if(t in this.events!=0)for(var e=0;e<this.events[t].length;e++)this.events[t][e].apply(this,Array.prototype.slice.call(arguments,1))}};t.exports=n},function(t,e,n){var i=n(5),o={data:{},extend:function(t){return i.extend(this,t)},set:function(t,e){this.data[t]=e},get:function(t){return this.data[t]},reset:function(){this.data={}}};t.exports=o},function(t,e){t.exports={history:[],add:function(t,e){e||(e=void 0),this.history.push({url:t,namespace:e})},currentStatus:function(){return this.history[this.history.length-1]},prevStatus:function(){var t=this.history;return t.length<2?null:t[t.length-2]}}},function(t,e,n){var i=n(5),o=n(7),r=n(11),a=n(8),s=n(9),c={Dom:n(12),History:s,Cache:a,cacheEnabled:!0,transitionProgress:!1,ignoreClassLink:"no-barba",start:function(){this.init()},init:function(){var t=this.Dom.getContainer();this.Dom.getWrapper().setAttribute("aria-live","polite"),this.History.add(this.getCurrentUrl(),this.Dom.getNamespace(t)),o.trigger("initStateChange",this.History.currentStatus()),o.trigger("newPageReady",this.History.currentStatus(),{},t,this.Dom.currentHTML),o.trigger("transitionCompleted",this.History.currentStatus()),this.bindEvents()},bindEvents:function(){document.addEventListener("click",this.onLinkClick.bind(this)),window.addEventListener("popstate",this.onStateChange.bind(this))},getCurrentUrl:function(){return i.cleanLink(i.getCurrentUrl())},goTo:function(t){window.history.pushState(null,null,t),this.onStateChange()},forceGoTo:function(t){window.location=t},load:function(t){var e,n=i.deferred(),o=this;return(e=this.Cache.get(t))||(e=i.xhr(t),this.Cache.set(t,e)),e.then(function(t){var e=o.Dom.parseResponse(t);o.Dom.putContainer(e),o.cacheEnabled||o.Cache.reset(),n.resolve(e)},function(){o.forceGoTo(t),n.reject()}),n.promise},getHref:function(t){if(t)return t.getAttribute&&"string"==typeof t.getAttribute("xlink:href")?t.getAttribute("xlink:href"):"string"==typeof t.href?t.href:void 0},onLinkClick:function(t){for(var e=t.target;e&&!this.getHref(e);)e=e.parentNode;if(this.preventCheck(t,e)){t.stopPropagation(),t.preventDefault(),o.trigger("linkClicked",e,t);var n=this.getHref(e);this.goTo(n)}},preventCheck:function(t,e){if(!window.history.pushState)return!1;var n=this.getHref(e);return!(!e||!n||t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||e.target&&"_blank"===e.target||window.location.protocol!==e.protocol||window.location.hostname!==e.hostname||i.getPort()!==i.getPort(e.port)||n.indexOf("#")>-1||e.getAttribute&&"string"==typeof e.getAttribute("download")||i.cleanLink(n)==i.cleanLink(location.href)||e.classList.contains(this.ignoreClassLink))},getTransition:function(){return r},onStateChange:function(){var t=this.getCurrentUrl();if(this.transitionProgress&&this.forceGoTo(t),this.History.currentStatus().url===t)return!1;this.History.add(t);var e=this.load(t),n=Object.create(this.getTransition());this.transitionProgress=!0,o.trigger("initStateChange",this.History.currentStatus(),this.History.prevStatus());var i=n.init(this.Dom.getContainer(),e);e.then(this.onNewContainerLoaded.bind(this)),i.then(this.onTransitionEnd.bind(this))},onNewContainerLoaded:function(t){this.History.currentStatus().namespace=this.Dom.getNamespace(t),o.trigger("newPageReady",this.History.currentStatus(),this.History.prevStatus(),t,this.Dom.currentHTML)},onTransitionEnd:function(){this.transitionProgress=!1,o.trigger("transitionCompleted",this.History.currentStatus(),this.History.prevStatus())}};t.exports=c},function(t,e,n){var i=n(4).extend({start:function(){this.newContainerLoading.then(this.finish.bind(this))},finish:function(){document.body.scrollTop=0,this.done()}});t.exports=i},function(t,e){var n={dataNamespace:"namespace",wrapperId:"barba-wrapper",containerClass:"barba-container",currentHTML:document.documentElement.innerHTML,parseResponse:function(t){this.currentHTML=t;var e=document.createElement("div");e.innerHTML=t;var n=e.querySelector("title");return n&&(document.title=n.textContent),this.getContainer(e)},getWrapper:function(){var t=document.getElementById(this.wrapperId);if(!t)throw new Error("Barba.js: wrapper not found!");return t},getContainer:function(t){if(t||(t=document.body),!t)throw new Error("Barba.js: DOM not ready!");var e=this.parseContainer(t);if(e&&e.jquery&&(e=e[0]),!e)throw new Error("Barba.js: no container found");return e},getNamespace:function(t){return t&&t.dataset?t.dataset[this.dataNamespace]:t?t.getAttribute("data-"+this.dataNamespace):null},putContainer:function(t){t.style.visibility="hidden",this.getWrapper().appendChild(t)},parseContainer:function(t){return t.querySelector("."+this.containerClass)}};t.exports=n},function(t,e,n){var i=n(5),o=n(10),r={ignoreClassLink:"no-barba-prefetch",init:function(){return!!window.history.pushState&&(document.body.addEventListener("mouseover",this.onLinkEnter.bind(this)),void document.body.addEventListener("touchstart",this.onLinkEnter.bind(this)))},onLinkEnter:function(t){for(var e=t.target;e&&!o.getHref(e);)e=e.parentNode;if(e&&!e.classList.contains(this.ignoreClassLink)){var n=o.getHref(e);if(o.preventCheck(t,e)&&!o.Cache.get(n)){var r=i.xhr(n);o.Cache.set(n,r)}}}};t.exports=r}])}),window.addEventListener("load",function(){loadScript(),transitionCompleted(),setShareLink(),setCopyYear(),ga("send","pageview",location.pathname)});var prt=document.location.protocol,barba="http:"==prt||"https:"==prt;if(barba){Barba.Pjax.start(),Barba.Dispatcher.on("linkClicked",function(t,e){linkClicked()}),Barba.Dispatcher.on("initStateChange",function(t){initStateChange()}),Barba.Dispatcher.on("newPageReady",function(t,e,n,i){newPageReady(t,e,n,i),ga("send","pageview",location.pathname)}),Barba.Dispatcher.on("transitionCompleted",function(currentStatus,prevStatus){setShareLink(),loadScript();let js=document.querySelectorAll("script.load");Object.keys(js).forEach(function(i){null!=js[i]&&eval(js[i].innerHTML)}),transitionCompleted()});var HideShowTransition=Barba.BaseTransition.extend({start:function(){this.newContainerLoading.then(this.finish.bind(this))},finish:function(){window.scrollTo(0,0),this.done()}});Barba.Pjax.getTransition=function(){return HideShowTransition}}loadScript=function(){let t=document.querySelectorAll("span.src");document.querySelector("#src").textContent=null,Object.keys(t).forEach(function(e){var n=document.createElement("script");n.src=t[e].getAttribute("data-src"),n.defer=!0,document.querySelector("#src").appendChild(n)})},setActive=function(){for(var t=0;t<link.length;t++)link[t].classList.remove("active");var e=document.getElementById("navi_"+this.classList[0]);e&&(e.classList.contains("hidden")?e.classList.remove("hidden"):e.classList.add("hidden")),this.classList.add("active"),toggleMenu()};var link=document.querySelectorAll(".menu li a");if(barba&&link.length>0)for(var url=link[0].href,path=link[0].pathname,siteRoot=url.replace(path,""),i=0;i<link.length;i++)link[i].addEventListener("click",setActive),link[i].classList.contains("external-link")||(link[i].href=siteRoot+link[i].pathname+link[i].hash);toggleMenu=function(){let t=document.getElementById("navi");t.classList.toggle("show"),document.getElementById("menu_open").style.display=t.classList.contains("show")?"none":"block",document.getElementById("menu_close").style.display=t.classList.contains("show")?"block":"none"},setShareLink=function(){let t=document.getElementsByClassName("share_link");if(!t)return;let e={"get-pocket":"https://getpocket.com/edit?url=###URL###",slack:"javascript:window.open('https://slackbutton.herokuapp.com/post/new/?url=###URL###', 'SlackButton', 'resizable,scrollbars,status,width=600,height=350,left=' + ((screen.width / 2) - (600 / 2)) + ',top=' + ((screen.height / 2) - (350 / 2)));",twitter:"https://twitter.com/share?shareUrl=###URL###&text=###TITLE###",facebook:"https://www.facebook.com/sharer/sharer.php?u=###URL###&t=###TITLE###","google-plus":"https://plus.google.com/share?url=###URL###",hatena:"https://b.hatena.ne.jp/add?mode=confirm&url=###URL###&description=###TITLE###"},n=encodeURIComponent(location.href),i=encodeURIComponent(document.title);for(let o=0;o<t.length;o++){let r=t[o].children;for(let t=0;t<r.length;t++){let o=e[r[t].getAttribute("class").replace("i-","")];o=(o=o.replace("###URL###",n)).replace("###TITLE###",i),r[t].setAttribute("href",o)}}},setCopyYear=function(){document.getElementById("copy_year").innerHTML=(new Date).getFullYear()},isObject=function(t){return"object"==typeof t&&null!==t&&!isArray(t)};