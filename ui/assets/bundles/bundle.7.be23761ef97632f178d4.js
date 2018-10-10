(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{148:function(t,e,i){},152:function(t,e,i){"use strict";i.r(e);var n=i(153),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=s.a},153:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(i(63));e.default={components:{progressbar:n.default}}},154:function(t,e,i){},155:function(t,e,i){"use strict";i.r(e);var n=i(179),s=i(152);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i(177);var r=i(3),a=Object(r.a)(s.default,n.a,n.b,!1,null,"d8979e0e",null);a.options.__file="module.vue",e.default=a.exports},157:function(t,e,i){"use strict";i.r(e);var n=i(158),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=s.a},158:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(i(166)),s=o(i(209));function o(t){return t&&t.__esModule?t:{default:t}}e.default={components:{notifications:n.default,search:s.default},computed:{game:function(){return this.$store.state.game.name}},watch:{$route:function(t,e){this.$store.commit("setActiveGame",t.fullPath.split("/")[1])}},beforeCreate:function(){this.$store.commit("setActiveGame",this.$route.fullPath.split("/")[1])},storeModule:{name:"game",state:{name:""},mutations:{setActiveGame:function(t,e){t.name=e}}}}},159:function(t,e,i){},160:function(t,e,i){"use strict";i.r(e);var n=i(161),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=s.a},161:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(i(44)),s=r(i(45)),o=r(i(165));function r(t){return t&&t.__esModule?t:{default:t}}var a=function(t){return t.toLowerCase().replace(/\b\w/g,function(t){return t.toUpperCase()})};e.default={components:{"ui-header":o.default},computed:{item:function(){return this.$store.state.items.item},itemUrl:function(){return"/warframe/items/"+this.item.name.replace(/ /g,"-").toLowerCase()},component:function(){var t=this.$store.state.items.item,e=this.$store.state.items.selected.component,i=t.components.find(function(t){return t.name===e});return i},selectedComponent:function(){return this.$store.state.items.selected.component}},asyncData:function(){var t=(0,s.default)(n.default.mark(function t(e){var i,s,o=e.store,r=e.route;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(i=a(r.params.item.replace(/(?:(\-)(?!\1))+/g," ").replace(/- /g,"-")),a(o.state.items.item.name)===i){t.next=9;break}return t.next=4,this.$cubic.get("/warframe/v1/items/"+i);case 4:return s=t.sent,t.next=7,this.$cubic.get("/warframe/v1/patchlogs?item="+s.name);case 7:s.patchlogs=t.sent,o.commit("setItem",s);case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),methods:{selectComponent:function(t){var e=t.srcElement.outerText;this.$store.commit("setItemComponent",e)}},storeModule:{name:"items",state:{item:{name:"",patchlogs:[]},selected:{component:"Set",offerType:"combined",regions:[]},patchlogs:{current:0,active:[]}},mutations:{setItem:function(t,e){e.tags=[],e.tags.push(e.category),e.tags.push(e.name.includes(" Prime")?"Prime":e.type),t.item=e},setItemComponent:function(t,e){t.selected.component=e.trim()},setItemOfferType:function(t,e){t.selected.offerType=e.toLowerCase()},setItemRegions:function(t,e){t.selected.regions=e},setItemPatchlogs:function(t,e){t.item.patchlogs=e},addItemPatchlog:function(t,e){t.patchlogs.current=t.item.patchlogs.findIndex(function(t){return t.name===e.name})},removeItemPatchlog:function(t,e){var i=t.patchlogs.active.find(function(t){return t.name===e.name});i&&(t.patchlogs.active.slice(i,1),t.patchlogs.current=t.item.patchlogs.findIndex(function(t){return t.name===e.name}))}}}}},162:function(t,e,i){"use strict";var n=i(148);i.n(n).a},164:function(t,e,i){},165:function(t,e,i){"use strict";i.r(e);i(162);var n=i(3),s=Object(n.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("img",{staticClass:"blobs",attrs:{src:"/img/ui/header-blobs-outline.svg"}}),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"container"},[this._t("default")],2),this._v(" "),this._t("sub")],2)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"background-container"},[e("div",{staticClass:"background"})])}],!1,null,"2eba4017",null);s.options.__file="header.vue";e.default=s.exports},170:function(t,e,i){"use strict";i.r(e);var n=i(171),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=s.a},171:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(i(6)),s=a(i(191)),o=a(i(147)),r=a(i(155));function a(t){return t&&t.__esModule?t:{default:t}}e.default={components:{module:r.default},props:["patchlog","overview"],data:function(){return{visible:!1,seen:!1,itemName:this.$route.params.item}},beforeMount:function(){n.default.use(s.default)},methods:{moment:o.default,setVisibility:function(t,e){t||e.boundingClientRect.top<e.rootBounds.bottom+-99999||e.boundingClientRect.bottom<e.rootBounds.top+-99999?(this.visible=!0,this.seen=!0,this.$store.commit("addItemPatchlog",this.patchlog)):(this.visible=!1,this.$store.commit("removeItemPatchlog",this.patchlog))}}}},172:function(t,e,i){},177:function(t,e,i){"use strict";var n=i(154);i.n(n).a},179:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"module"},[e("div",{staticClass:"header"},[this._t("header")],2),this._v(" "),e("div",{staticClass:"body"},[this._t("body")],2),this._v(" "),e("div",{staticClass:"footer"},[this._t("footer")],2),this._v(" "),e("progressbar",{ref:"progress"})],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},185:function(t,e,i){"use strict";i.r(e);var n=i(208),s=i(157);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i(186);var r=i(3),a=Object(r.a)(s.default,n.a,n.b,!1,null,"3a8a02ce",null);a.options.__file="items.vue",e.default=a.exports},186:function(t,e,i){"use strict";var n=i(159);i.n(n).a},188:function(t,e,i){"use strict";i.r(e);var n=i(207),s=i(160);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i(189);var r=i(3),a=Object(r.a)(s.default,n.a,n.b,!1,null,"6f9dc00c",null);a.options.__file="header.vue",e.default=a.exports},189:function(t,e,i){"use strict";var n=i(164);i.n(n).a},191:function(t,e,i){"use strict";i.r(e),function(t){i.d(e,"install",function(){return f}),i.d(e,"ObserveVisibility",function(){return c});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=(function(){function t(t){this.value=t}function e(e){var i,n;function s(i,n){try{var r=e[i](n),a=r.value;a instanceof t?Promise.resolve(a.value).then(function(t){s("next",t)},function(t){s("throw",t)}):o(r.done?"return":"normal",r.value)}catch(t){o("throw",t)}}function o(t,e){switch(t){case"return":i.resolve({value:e,done:!0});break;case"throw":i.reject(e);break;default:i.resolve({value:e,done:!1})}(i=i.next)?s(i.key,i.arg):n=null}this._invoke=function(t,e){return new Promise(function(o,r){var a={key:t,arg:e,resolve:o,reject:r,next:null};n?n=n.next=a:(i=n=a,s(t,e))})},"function"!=typeof e.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(e.prototype[Symbol.asyncIterator]=function(){return this}),e.prototype.next=function(t){return this._invoke("next",t)},e.prototype.throw=function(t){return this._invoke("throw",t)},e.prototype.return=function(t){return this._invoke("return",t)}}(),function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}),o=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),r=function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)};var a=function(){function t(e,i,n){s(this,t),this.el=e,this.observer=null,this.frozen=!1,this.createObserver(i,n)}return o(t,[{key:"createObserver",value:function(t,e){var i=this;this.observer&&this.destroyObserver(),this.frozen||(this.options=function(t){return"function"==typeof t?{callback:t}:t}(t),this.callback=this.options.callback,this.callback&&this.options.throttle&&(this.callback=function(t,e){var i=void 0,n=void 0,s=void 0,o=function(o){for(var a=arguments.length,l=Array(a>1?a-1:0),c=1;c<a;c++)l[c-1]=arguments[c];s=l,i&&o===n||(n=o,clearTimeout(i),i=setTimeout(function(){t.apply(void 0,[o].concat(r(s))),i=0},e))};return o._clear=function(){clearTimeout(i)},o}(this.callback,this.options.throttle)),this.oldResult=void 0,this.observer=new IntersectionObserver(function(t){var e=t[0];if(i.callback){var n=e.isIntersecting&&e.intersectionRatio>=i.threshold;if(n===i.oldResult)return;i.oldResult=n,i.callback(n,e),n&&i.options.once&&(i.frozen=!0,i.destroyObserver())}},this.options.intersection),e.context.$nextTick(function(){i.observer.observe(i.el)}))}},{key:"destroyObserver",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null),this.callback&&this.callback._clear&&(this.callback._clear(),this.callback=null)}},{key:"threshold",get:function(){return this.options.intersection&&this.options.intersection.threshold||0}}]),t}();function l(t,e,i){var n=e.value;if("undefined"==typeof IntersectionObserver)console.warn("[vue-observe-visibility] IntersectionObserver API is not available in your browser. Please install this polyfill: https://github.com/w3c/IntersectionObserver/tree/master/polyfill");else{var s=new a(t,n,i);t._vue_visibilityState=s}}var c={bind:l,update:function(t,e,i){var s=e.value;if(!function t(e,i){if(e===i)return!0;if("object"===(void 0===e?"undefined":n(e))){for(var s in e)if(!t(e[s],i[s]))return!1;return!0}return!1}(s,e.oldValue)){var o=t._vue_visibilityState;o?o.createObserver(s,i):l(t,{value:s},i)}},unbind:function(t){var e=t._vue_visibilityState;e&&(e.destroyObserver(),delete t._vue_visibilityState)}};function f(t){t.directive("observe-visibility",c)}var u={version:"0.4.3",install:f},h=null;"undefined"!=typeof window?h=window.Vue:void 0!==t&&(h=t.Vue),h&&h.use(u),e.default=u}.call(this,i(29))},207:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item-header"},[i("ui-header",{staticClass:"header-bg"},[i("img",{staticClass:"item-img-blur",attrs:{src:t.item.imgUrl,alt:t.item.name,draggable:"false"}}),t._v(" "),i("img",{staticClass:"item-img",attrs:{src:t.item.imgUrl,alt:t.item.name,draggable:"false"}}),t._v(" "),i("div",{staticClass:"item-img-shade"})]),t._v(" "),i("header",[i("div",{staticClass:"container"},[i("div",{staticClass:"item-profile"},[i("div",{staticClass:"item-profile-img"},[i("img",{attrs:{src:t.item.imgUrl,alt:t.item.name,draggable:"false"}}),t._v(" "),i("img",{staticClass:"item-profile-img-blur",attrs:{src:t.item.imgUrl,alt:t.item.name,draggable:"false"}}),t._v(" "),i("div",{staticClass:"item-profile-img-shade"})]),t._v(" "),i("div",{staticClass:"item-profile-data"},[i("div",{staticClass:"item-profile-data-info"},[i("h1",[t._v(t._s(t.item.name))]),t._v(" "),t.item.components.length>1?i("div",t._l(t.item.components,function(e){return e.tradable||"Set"===e.name?i("span",{key:e.name,staticClass:"interactive",class:{selected:t.selectedComponent===e.name},on:{click:t.selectComponent}},[t._v("\n                "+t._s(e.name)+"\n              ")]):t._e()})):t._l(t.item.tags,function(e,n){return i("span",{key:e+n,staticClass:"selected interactive"},[t._v("\n              "+t._s(e)+"\n            ")])})],2),t._v(" "),t.item.tradable?i("div",{staticClass:"item-profile-lower"},[i("router-link",{attrs:{to:t.itemUrl+"/trading"}},[i("button",{staticClass:"btn-outline buy"},[t._v("Buyers")])]),t._v(" "),i("router-link",{attrs:{to:t.itemUrl+"/trading"}},[i("button",{staticClass:"btn-outline sell"},[t._v("Sellers")])])],1):t._e()])])])]),t._v(" "),i("nav",{ref:"subnav",staticClass:"subnav"},[i("div",{staticClass:"container"},[i("router-link",{staticClass:"interactive",attrs:{to:t.itemUrl,exact:""}},[t._v("Overview")]),t._v(" "),t.item.tradable?i("router-link",{staticClass:"interactive",attrs:{to:t.itemUrl+"/prices"}},[t._v("Prices")]):t._e(),t._v(" "),t.item.tradable?i("router-link",{attrs:{to:t.itemUrl+"/trading"}},[t._v("Trade")]):t._e(),t._v(" "),t.item.patchlogs&&t.item.patchlogs.length?i("router-link",{staticClass:"interactive",attrs:{to:t.itemUrl+"/patchlogs"}},[t._v("Patchlogs")]):t._e()],1)])],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},208:function(t,e,i){"use strict";var n=function(){var t=this.$createElement,e=this._self._c||t;return e("nav",{staticClass:"row"},[e("div",{staticClass:"nav-l"},[e("router-link",{attrs:{to:"/warframe",exact:""}},[e("img",{staticClass:"logo ico-h-20",attrs:{src:"/img/brand/nexushub-logo-typeface.svg",alt:"Nexushub Logo"}})]),this._v(" "),e("search",{attrs:{placeholder:"Search item..."}})],1),this._v(" "),e("div",{staticClass:"nav-r"},[e("notifications")],1)])},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},210:function(t,e,i){"use strict";i.r(e);var n=i(216),s=i(170);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i(211);var r=i(3),a=Object(r.a)(s.default,n.a,n.b,!1,null,"99bcc50a",null);a.options.__file="patchlog.vue",e.default=a.exports},211:function(t,e,i){"use strict";var n=i(172);i.n(n).a},216:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("module",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:{callback:t.setVisibility,intersection:{rootMargin:"0px 0px 20% 0px"}},expression:"{\n  callback: setVisibility,\n  intersection: {\n    rootMargin: '0px 0px 20% 0px'\n  }\n}"}],staticClass:"patchlog",class:{visible:t.visible}},[i("template",{slot:"header"},[i("h3",[t._v(t._s(t.patchlog.name))]),t._v(" "),i("time",{attrs:{datetime:t.patchlog.date}},[t._v(t._s(t.overview?t.moment(new Date(t.patchlog.date)).fromNow():t.moment(new Date(t.patchlog.date)).format("MMMM Do YYYY")))])]),t._v(" "),i("template",{slot:"body"},[i("div",{staticClass:"image"},[(t.visible||t.seen)&&t.patchlog.imgUrl?i("img",{attrs:{src:t.patchlog.imgUrl,alt:t.patchlog.name,onerror:"this.style.display='none'"}}):t._e(),t._v(" "),i("div",{staticClass:"shade"})]),t._v(" "),t.patchlog.additions?i("div",[i("h4",[t._v("Additions")]),t._v(" "),t._l(t.patchlog.additions.split("\n"),function(e,n){return e?i("p",{key:e+n},[t._v("\n        "+t._s(e)+"\n      ")]):t._e()})],2):t._e(),t._v(" "),t.patchlog.changes?i("div",[i("h4",[t._v("Changes")]),t._v(" "),t._l(t.patchlog.changes.split("\n"),function(e,n){return e?i("p",{key:e+n},[t._v("\n        "+t._s(e)+"\n      ")]):t._e()})],2):t._e(),t._v(" "),t.patchlog.fixes?i("div",[i("h4",[t._v("Fixes")]),t._v(" "),t._l(t.patchlog.fixes.split("\n"),function(e,n){return e?i("p",{key:e+n},[t._v("\n        "+t._s(e)+"\n      ")]):t._e()})],2):t._e()]),t._v(" "),i("template",{slot:"footer"},[i("a",{attrs:{href:t.patchlog.url,target:"_blank"}},[t._v("\n      Full Patch Notes\n      "),i("img",{staticClass:"ico-h-20",attrs:{src:"/img/ui/arrow-right.svg",alt:"View full patch notes"}})])])],2)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},274:function(t,e,i){"use strict";i.r(e);var n=i(275),s=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e.default=s.a},275:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=m(i(44)),s=m(i(45)),o=m(i(6)),r=m(i(185)),a=m(i(169)),l=m(i(167)),c=m(i(168)),f=m(i(188)),u=m(i(191)),h=m(i(750)),d=m(i(210)),p=m(i(147));function m(t){return t&&t.__esModule?t:{default:t}}e.default={components:{navigation:r.default,appContent:a.default,sidebar:l.default,sidebarSearch:c.default,itemHeader:f.default,patchlog:d.default},computed:{item:function(){return this.$store.state.items.item},patchlogs:function(){return this.$store.state.items.patchlogs},progress:function(){return"translateY("+120*(this.$store.state.items.patchlogs.current||1e-4)/this.item.patchlogs.length+"px)"}},asyncData:function(){var t=(0,s.default)(n.default.mark(function t(){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.$store.state.items.item.name,t.t0=this.$store,t.next=4,this.$cubic.get("/warframe/v1/patchlogs?item="+e+"&limit=0");case 4:t.t1=t.sent,t.t0.commit.call(t.t0,"setItemPatchlogs",t.t1);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),beforeMount:function(){o.default.use(h.default),o.default.use(u.default)},methods:{moment:p.default}}},276:function(t,e,i){},72:function(t,e,i){"use strict";i.r(e);var n=i(864),s=i(274);for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i(751);var r=i(3),a=Object(r.a)(s.default,n.a,n.b,!1,null,"099819a2",null);a.options.__file="patchlogs.vue",e.default=a.exports},750:function(t,e,i){window,t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=1)}([function(t,e,i){var n=i(3);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals),(0,i(6).default)("da410cd4",n,!1,{})},function(t,e,i){t.exports=i(5)},function(t,e,i){"use strict";var n=i(0);i.n(n).a},function(t,e,i){(t.exports=i(4)(!1)).push([t.i,"\n.vue-affix {\n  position: relative;\n}\n.affix {\n  position: fixed;\n}\n.affix-bottom {\n  position: relative;\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var s=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(n),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[i].concat(o).concat([s]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(n[o]=!0)}for(s=0;s<t.length;s++){var r=t[s];"number"==typeof r[0]&&n[r[0]]||(i&&!r[2]?r[2]=i:i&&(r[2]="("+r[2]+") and ("+i+")"),e.push(r))}},e}},function(t,e,i){"use strict";i.r(e);var n=function(){var t=this.$createElement;return(this._self._c||t)("div",[this._t("default")],2)};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n._withStripped=!0;var o={props:{relativeElementSelector:{type:String,required:!0},offset:{type:Object,default:function(){return{top:40,bottom:40}},validator:function(t){if("object"!==s(t))return!1;var e=Object.keys(t);return e.includes("top")&&e.includes("bottom")}},enabled:{type:Boolean,default:!0},scrollAffix:{type:Boolean,default:!1},scrollContainerSelector:{type:String,default:null}},computed:{relativeElement:function(){return document.querySelector(this.relativeElementSelector)},scrollContainer:function(){return this.scrollContainerSelector?document.querySelector(this.scrollContainerSelector):window},affixTopPos:function(){return this.affixRect.top+this.topOfScreen-this.offset.top-this.topPadding},affixBottomPos:function(){return this.affixRect.bottom+this.topOfScreen+this.offset.bottom},bottomOfScreen:function(){return this.topOfScreen+this.scrollContainer.innerHeight},relativeElmTopPos:function(){return this.topOfScreen+this.relativeElement.getBoundingClientRect().top},relativeElmBottomPos:function(){return this.topOfScreen+this.relativeElement.getBoundingClientRect().bottom},screenIsPastAffix:function(){return this.bottomOfScreen>=this.affixBottomPos},screenIsBeforeAffix:function(){return this.topOfScreen<=this.affixTopPos},screenIsBeforeRelativeElm:function(){return this.topOfScreen<=this.relativeElmTopPos-this.offset.top},screenIsPastRelativeElm:function(){return this.bottomOfScreen>=this.relativeElmBottomPos+this.offset.bottom},screenIsInsideRelativeElm:function(){return!this.screenIsBeforeRelativeElm&&!this.screenIsPastRelativeElm}},data:function(){return{affixHeight:null,affixRect:null,affixInitialTop:null,relativeElmOffsetTop:null,topPadding:null,lastState:null,currentState:null,currentScrollAffix:null,topOfScreen:null,lastDistanceFromTop:null,scrollingUp:null,scrollingDown:null}},watch:{offset:function(t,e){t.top===e.top&&t.bottom===e.bottom||this.onScroll()}},methods:{updateData:function(){this.topOfScreen=this.scrollContainer.scrollTop||window.pageYOffset,this.affixRect=this.$el.getBoundingClientRect(),this.affixHeight=this.$el.offsetHeight,this.relativeElmOffsetTop=this.getOffsetTop(this.relativeElement)},onScroll:function(){if(this.enabled)if(this.updateData(),this.affixHeight+this.offset.top>=this.relativeElement.offsetHeight)this.scrollAffix&&"scrollaffix-top"!==this.currentScrollAffix?this.setScrollAffixTop():"affix-top"!==this.currentState&&this.setAffixTop();else{var t=this.affixHeight+this.offset.bottom+this.offset.top;this.scrollAffix&&t>this.scrollContainer.innerHeight?this.handleScrollAffix():this.handleAffix()}else this.removeClasses()},handleAffix:function(){this.topOfScreen<this.relativeElmOffsetTop-this.offset.top&&this.setAffixTop(),this.topOfScreen>=this.relativeElmOffsetTop-this.offset.top&&this.relativeElmBottomPos-this.offset.bottom>=this.topOfScreen+this.topPadding+this.affixHeight+this.offset.top&&this.setAffix(),this.relativeElmBottomPos-this.offset.bottom<this.topOfScreen+this.topPadding+this.affixHeight+this.offset.top&&this.setAffixBottom(),this.lastState=this.currentState},handleScrollAffix:function(){if(this.setScrollingDirection(),this.screenIsBeforeRelativeElm)this.setScrollAffixTop();else if(this.screenIsPastRelativeElm)this.setScrollAffixBottom();else if(this.screenIsInsideRelativeElm){var t="scrollaffix-top"===this.currentScrollAffix||"scrollaffix-bottom"===this.currentScrollAffix||"scrollaffix-up"===this.currentScrollAffix&&this.scrollingDown||"scrollaffix-down"===this.currentScrollAffix&&this.scrollingUp;this.screenIsBeforeAffix&&this.scrollingUp?this.setScrollAffixUp():this.screenIsPastAffix&&this.scrollingDown?this.setScrollAffixDown():t&&this.setScrollAffixScrolling()}this.lastScrollAffixState=this.currentScrollAffix,this.lastDistanceFromTop=this.topOfScreen},initScrollAffix:function(){this.bottomOfScreen<this.affixBottomPos?this.setScrollAffixTop():this.screenIsInsideRelativeElm?this.setScrollAffixDown():this.screenIsPastRelativeElm?this.setScrollAffixBottom():this.setScrollAffixScrolling()},setScrollAffixScrolling:function(){this.currentScrollAffix="scrollaffix-scrolling",this.$el.style.top="".concat(Math.floor(this.affixRect.top)+this.topOfScreen-this.affixInitialTop,"px"),this.$el.style.bottom="auto",this.removeClasses(),this.emitEvent()},setScrollAffixUp:function(){this.currentScrollAffix="scrollaffix-up",this.currentScrollAffix!==this.lastScrollAffixState&&(this.$el.style.top="".concat(this.topPadding+this.offset.top,"px"),this.$el.style.bottom="auto",this.removeClasses(),this.emitEvent(),this.$el.classList.add("affix"))},setScrollAffixDown:function(){this.currentScrollAffix="scrollaffix-down",this.currentScrollAffix!==this.lastScrollAffixState&&(this.$el.style.bottom="".concat(this.offset.bottom,"px"),this.$el.style.top="auto",this.removeClasses(),this.emitEvent(),this.$el.classList.add("affix"))},setScrollAffixTop:function(){this.currentScrollAffix="scrollaffix-top",this.$el.style.top=0,this.$el.style.bottom="auto",this.removeClasses(),this.emitEvent()},setScrollAffixBottom:function(){this.currentScrollAffix="scrollaffix-bottom",this.$el.style.top="".concat(this.relativeElmBottomPos-this.affixInitialTop-this.affixHeight,"px"),this.$el.style.bottom="auto",this.removeClasses(),this.emitEvent()},setScrollingDirection:function(){this.topOfScreen>this.lastDistanceFromTop?(this.scrollingDown=!0,this.scrollingUp=!1):(this.scrollingUp=!0,this.scrollingDown=!1)},setAffixTop:function(){this.currentState="affix-top",this.currentState!==this.lastState&&(this.emitEvent(),this.removeClasses(),this.$el.classList.remove("affix"),this.$el.classList.add("affix-top"),this.$el.style.top=null)},setAffix:function(){this.currentState="affix",this.$el.style.top="".concat(this.topPadding+this.offset.top,"px"),this.currentState!==this.lastState&&(this.emitEvent(),this.removeClasses(),this.$el.classList.add("affix"))},setAffixBottom:function(){this.currentState="affix-bottom",this.$el.style.top="".concat(this.relativeElement.offsetHeight-this.affixHeight-this.offset.bottom-this.topPadding,"px"),this.currentState!==this.lastState&&(this.emitEvent(),this.removeClasses(),this.$el.classList.add("affix-bottom"))},removeClasses:function(){this.$el.classList.remove("affix-top"),this.$el.classList.remove("affix"),this.$el.classList.remove("affix-bottom")},emitEvent:function(){this.scrollAffix&&this.lastScrollAffixState&&this.currentScrollAffix!==this.lastScrollAffixState&&this.$emit(this.currentScrollAffix.replace("-","")),this.lastState&&this.$emit(this.currentState.replace("-",""))},getOffsetTop:function(t){for(var e=0,i=t;i;)e+=i.offsetTop,i=i.offsetParent;return e}},mounted:function(){this.$el.classList.add("vue-affix"),this.affixInitialTop=this.getOffsetTop(this.$el),this.topPadding=this.affixInitialTop-this.getOffsetTop(this.relativeElement),this.updateData(),this.scrollAffix&&this.initScrollAffix(),this.onScroll(),this.scrollContainer.addEventListener("scroll",this.onScroll)},beforeDestroy:function(){this.scrollContainer.removeEventListener("scroll",this.onScroll)}};i(2);var r=function(t,e,i,n,s,o,r,a){var l,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=[],c._compiled=!0),l)if(c.functional){c._injectStyles=l;var f=c.render;c.render=function(t,e){return l.call(e),f(t,e)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:t,options:c}}(o,n);r.options.__file="src/affix.vue";var a=r.exports;i.d(e,"Affix",function(){return a});var l={install:function(t){l.install.installed||t.component("affix",a)}};"undefined"!=typeof window&&window.Vue&&l.install(window.Vue),e.default=l},function(t,e,i){"use strict";function n(t,e){for(var i=[],n={},s=0;s<e.length;s++){var o=e[s],r=o[0],a={id:t+":"+s,css:o[1],media:o[2],sourceMap:o[3]};n[r]?n[r].parts.push(a):i.push(n[r]={id:r,parts:[a]})}return i}i.r(e),i.d(e,"default",function(){return p});var s="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!s)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},r=s&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,c=!1,f=function(){},u=null,h="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,i,s){c=i,u=s||{};var r=n(t,e);return m(r),function(e){for(var i=[],s=0;s<r.length;s++){var a=r[s];(l=o[a.id]).refs--,i.push(l)}for(e?m(r=n(t,e)):r=[],s=0;s<i.length;s++){var l;if(0===(l=i[s]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete o[l.id]}}}}function m(t){for(var e=0;e<t.length;e++){var i=t[e],n=o[i.id];if(n){n.refs++;for(var s=0;s<n.parts.length;s++)n.parts[s](i.parts[s]);for(;s<i.parts.length;s++)n.parts.push(g(i.parts[s]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{var r=[];for(s=0;s<i.parts.length;s++)r.push(g(i.parts[s]));o[i.id]={id:i.id,refs:1,parts:r}}}}function v(){var t=document.createElement("style");return t.type="text/css",r.appendChild(t),t}function g(t){var e,i,n=document.querySelector("style["+h+'~="'+t.id+'"]');if(n){if(c)return f;n.parentNode.removeChild(n)}if(d){var s=l++;n=a||(a=v()),e=_.bind(null,n,s,!1),i=_.bind(null,n,s,!0)}else n=v(),e=function(t,e){var i=e.css,n=e.media,s=e.sourceMap;if(n&&t.setAttribute("media",n),u.ssrId&&t.setAttribute(h,e.id),s&&(i+="\n/*# sourceURL="+s.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}var b=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}();function _(t,e,i,n){var s=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,s);else{var o=document.createTextNode(s),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(o,r[e]):t.appendChild(o)}}}])},751:function(t,e,i){"use strict";var n=i(276);i.n(n).a},864:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("navigation"),t._v(" "),i("sidebar",[i("sidebar-search")],1),t._v(" "),i("item-header"),t._v(" "),i("app-content",[i("section",{staticClass:"patchlogs"},[i("div",{staticClass:"container",attrs:{id:"patchlogs-container"}},[t.item.patchlogs?i("div",{staticClass:"patchlogs",attrs:{id:"patchlogs"}},[i("h2",{staticClass:"sub"},[t._v("Patchlog History")]),t._v(" "),t._l(t.item.patchlogs,function(t){return i("patchlog",{key:t.name+t.date,attrs:{patchlog:t}})})],2):i("div",{staticClass:"no-data"},[t._v("\n          No patchlogs found :(\n        ")]),t._v(" "),t.item.patchlogs?i("affix",{staticClass:"timeline-wrapper",attrs:{offset:{top:150,bottom:80},"relative-element-selector":"#patchlogs-container"}},[i("span",[t._v(t._s(t.moment(new Date(t.item.patchlogs[t.patchlogs.current].date)).fromNow()))]),t._v(" "),i("div",{staticClass:"timeline"},[i("div",{staticClass:"timeline-slider",style:{transform:[t.progress]}}),t._v(" "),i("span",{style:{transform:[t.progress]}},[t._v(t._s(t.patchlogs.current)+" / "+t._s(t.item.patchlogs.length))])]),t._v(" "),i("span",[t._v(t._s(t.moment(new Date(t.item.patchlogs[t.item.patchlogs.length-1].date)).fromNow()))])]):t._e()],1)])])],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})}}]);