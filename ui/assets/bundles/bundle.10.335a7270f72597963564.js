(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/sparkline_two.vue?vue&type=template&id=74b9b083&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sparkline"},[_c('div',{staticClass:"graph"},[_c('svg',{attrs:{"width":_vm.width,"height":_vm.height}},[_c('g',[_c('path',{staticClass:"line",attrs:{"d":_vm.paths.line1}}),_vm._v(" "),_c('path',{staticClass:"line secondary",attrs:{"d":_vm.paths.line2}})])])]),_vm._v(" "),_c('div',{staticClass:"tooltip-container"},[_c('svg',{attrs:{"width":_vm.width + 160,"height":_vm.height}},_vm._l((_vm.data),function(d,i){return _c('g',{key:("" + i + (d.x)),staticClass:"point"},[_c('rect',{staticClass:"hover",attrs:{"x":_vm.scaled.x(d.x)}}),_vm._v(" "),_c('circle',{staticClass:"circle",attrs:{"cx":_vm.scaled.x(d.x),"cy":_vm.scaled.v1(d.value1),"r":"3"}}),_vm._v(" "),_c('circle',{staticClass:"circle secondary",attrs:{"cx":_vm.scaled.x(d.x),"cy":_vm.scaled.v2(d.value2),"r":"3"}}),_vm._v(" "),_c('g',{staticClass:"tooltip"},[_c('rect',{attrs:{"x":_vm.scaled.x(d.x) + 12,"height":'87px',"width":_vm.tooltipWidth}}),_vm._v(" "),_c('text',{staticClass:"title",attrs:{"x":_vm.scaled.x(d.x) + 20,"y":"22px"}},[_vm._v("\n            "+_vm._s(_vm.parseHoursAgo(d.x))+"\n          ")]),_vm._v(" "),_c('circle',{staticClass:"circle",attrs:{"cx":_vm.scaled.x(d.x) + 23,"cy":"45px","r":"3"}}),_vm._v(" "),_c('text',{staticClass:"num",attrs:{"x":_vm.scaled.x(d.x) + 30,"y":"50px"}},[_vm._v("\n            "+_vm._s(_vm.parsePrice(d.value1))+"\n          ")]),_vm._v(" "),_c('circle',{staticClass:"circle secondary",attrs:{"cx":_vm.scaled.x(d.x) + 23,"cy":"70px","r":"3"}}),_vm._v(" "),(_vm.secondaryLabel)?_c('text',{staticClass:"sub",attrs:{"x":_vm.scaled.x(d.x) + 30,"y":"75px"}},[_vm._v("\n            "+_vm._s(_vm.secondaryLabel)+": "+_vm._s(d ? (_vm.parseSecondary ? _vm.parsePrice(d.value2) : ("" + (d.value2))) : '0')+"\n          ")]):_c('text',{staticClass:"sub",attrs:{"x":_vm.scaled.x(d.x) + 30,"y":"75px"}},[_vm._v("\n            "+_vm._s(d ? (_vm.parseSecondary ? _vm.parsePrice(d.value2) : ("" + (d.value2))) : '0')+"\n          ")])])])}),0)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/sparkline_two.vue?vue&type=template&id=74b9b083&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/heatmap.vue?vue&type=template&id=618686d2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row"},[_vm._l((_vm.data),function(day,i){return _c('div',{key:_vm.axisDays[i],staticClass:"day"},[_vm._l((day),function(hour,j){return _c('div',{key:hour + '' + j,staticClass:"hour-wrapper"},[_c('div',{staticClass:"hour",class:[_vm.theme.hour, { inactive: !hour }],style:({ opacity: _vm.scale(hour), transform: ("scale(" + (_vm.scale(hour)) + ")") })}),_vm._v(" "),_c('div',{staticClass:"tooltip",class:[_vm.theme.tooltip, { inactive: !hour }]},[_c('time',{attrs:{"datetime":((j * 2 + 1) + ":00")}},[_vm._v("\n          "+_vm._s(_vm.axisDays[i])+",\n          "+_vm._s(j % 12 + 1)+_vm._s(j > 11 ? 'pm' : 'am')+"\n        ")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',{staticClass:"num"},[_vm._v(_vm._s(_vm.parseNum ? _vm.parsePrice(hour) : hour))]),_vm._v(" "),_c('br'),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.tooltipLabel ? _vm.tooltipLabel : ''))])])])}),_vm._v(" "),_c('span',{staticClass:"label",class:_vm.theme.label},[_vm._v(_vm._s(_vm.axisDays[i]))])],2)}),_vm._v(" "),_c('div',{staticClass:"axis-hours"},_vm._l((24),function(hour,i){return _c('div',{key:hour + '' + i,staticClass:"time"},[(i % 3 === 1)?_c('span',{staticClass:"label",class:_vm.theme.label},[_vm._v("\n        "+_vm._s(i % 12 + 1)+_vm._s(i + 1 > 11 ? 'pm' : 'am')+"\n      ")]):_c('span')])}),0)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/heatmap.vue?vue&type=template&id=618686d2&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(168);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  props: ['name', 'maxHeight', 'maxWidth'],

  data: function data() {
    return {
      display: 'none'
    };
  },
  mounted: function mounted() {
    var nitroAds = window.nitroAds;
    if (!nitroAds) return;

    this.display = 'block';
    nitroAds.createAd('ad-' + this.name, {
      floor: 0.05,
      refreshLimit: 10,
      refreshTime: 60,
      report: {
        enabled: true,
        wording: 'Report Abuse',
        position: 'fixed-bottom-right'
      }
    });
  }
};

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

var _progress = __webpack_require__(80);

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    progressbar: _progress2.default
  },

  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    }
  }
};

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"warframe_module_kCFyr","header":"warframe_header_2nKQS","footer":"warframe_footer_1kr-S"};

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"module":"wow-classic_module_2l8-b","header":"wow-classic_header_g9KLN","footer":"wow-classic_footer_19f0t"};

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_vue_vue_type_template_id_820c27de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(170);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(196);
/* harmony import */ var _module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(197);
/* harmony import */ var _module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(198);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _module_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _module_vue_vue_type_template_id_820c27de_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _module_vue_vue_type_template_id_820c27de_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "820c27de",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(186);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['x', 'y', 'diff', 'reverse'],

  data: function data() {
    return {
      positive: 'M3.65,0l-3.15,3.265l2.363,0l-0.001,5.735l1.575,0l0,-5.735l2.363,0l-3.15,-3.265Z',
      negative: 'M3.65,9l3.15,-3.265l-2.363,0l0,-5.735l-1.575,0l0.001,5.735l-2.363,0l3.15,3.265Z'
    };
  },


  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    }
  }
};

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"warframe_indicator_1spmD"};

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"indicator":"wow-classic_indicator_GhxVb"};

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nitroAds_vue_vue_type_template_id_b107c58a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(167);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(191);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _nitroAds_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _nitroAds_vue_vue_type_template_id_b107c58a___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _nitroAds_vue_vue_type_template_id_b107c58a___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_nitroAds_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ads/nitroAds.vue?vue&type=template&id=b107c58a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ad-unit layout-center",style:({
  display: _vm.display,
  'max-height': _vm.maxHeight,
  'max-width': _vm.maxWidth
}),attrs:{"id":("ad-" + _vm.name)}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ads/nitroAds.vue?vue&type=template&id=b107c58a&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(172);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(174);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_vue_vue_type_style_index_2_id_820c27de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module.vue?vue&type=template&id=820c27de&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module",class:_vm.theme.module},[_c('div',{staticClass:"header",class:_vm.theme.header},[_vm._t("header")],2),_vm._v(" "),_c('div',{staticClass:"body"},[_vm._t("body")],2),_vm._v(" "),_c('div',{staticClass:"footer",class:_vm.theme.footer},[_vm._t("footer")],2),_vm._v(" "),_c('progressbar',{ref:"progress"})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module.vue?vue&type=template&id=820c27de&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indicator_vue_vue_type_template_id_7c937518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(348);
/* harmony import */ var _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(185);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(345);
/* harmony import */ var _indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(346);
/* harmony import */ var _indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(347);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _indicator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indicator_vue_vue_type_template_id_7c937518_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _indicator_vue_vue_type_template_id_7c937518_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "7c937518",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(207);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['days', 'fn'],

  data: function data() {
    return {
      active: false
    };
  },


  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    }
  },

  methods: {
    toggle: function toggle() {
      this.active = !this.active;
    }
  }
};

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dropdown":"warframe_dropdown_h8zz3","body":"warframe_body_2goxA"};

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dropdown":"wow-classic_dropdown_i5aP_","body":"wow-classic_body_1naDm"};

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(188);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(189);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_indicator_vue_vue_type_style_index_2_id_7c937518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"indicator",class:[{ negative: _vm.diff < 0, positive: _vm.diff > 0, reverse: _vm.reverse }, _vm.theme.indicator],attrs:{"height":"10px","width":"7px","overflow":"visible"}},[_c('path',{attrs:{"transform":("translate(" + (_vm.x || 0) + ", " + (_vm.y || 0) + ")"),"d":_vm.diff < 0 ? _vm.negative : _vm.positive}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/charts/indicator.vue?vue&type=template&id=7c937518&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_time_vue_vue_type_template_id_ee2ae558_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(206);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(370);
/* harmony import */ var _module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(371);
/* harmony import */ var _module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(372);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _module_time_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _module_time_vue_vue_type_template_id_ee2ae558_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _module_time_vue_vue_type_template_id_ee2ae558_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "ee2ae558",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(404);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(405);

var _createClass3 = _interopRequireDefault(_createClass2);

var _tween = __webpack_require__(406);

var _tween2 = _interopRequireDefault(_tween);

var _normalize = __webpack_require__(378);

var _normalize2 = _interopRequireDefault(_normalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tween = function () {
  function Tween() {
    (0, _classCallCheck3.default)(this, Tween);
  }

  (0, _createClass3.default)(Tween, [{
    key: 'tweenData',
    value: function tweenData(newData, oldData, onUpdate) {
      var tween = new _tween2.default.Tween(oldData).easing(_tween2.default.Easing.Quadratic.Out).to(newData, 500).onUpdate(onUpdate).onComplete(function () {
        tween.done = true;
      }).start();

      function animate(time) {
        tween.update(time);

        if (!tween.done) {
          requestAnimationFrame(animate);
        }
      }
      animate(window.performance.now());
    }
  }, {
    key: 'adjustData',
    value: function adjustData(vm, newData, oldData, doNormalize) {
      var nData = doNormalize ? (0, _normalize2.default)(newData, true) : newData;
      var oData = doNormalize ? (0, _normalize2.default)(oldData, true) : oldData;

      this.tweenData(nData, oData, function () {
        vm.animatedData = (0, _normalize2.default)(this, null, !doNormalize);
        vm.update();
      });
    }
  }]);
  return Tween;
}();

var tween = new Tween();
exports.default = tween;

/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 211,
	"./af.js": 211,
	"./ar": 212,
	"./ar-dz": 213,
	"./ar-dz.js": 213,
	"./ar-kw": 214,
	"./ar-kw.js": 214,
	"./ar-ly": 215,
	"./ar-ly.js": 215,
	"./ar-ma": 216,
	"./ar-ma.js": 216,
	"./ar-sa": 217,
	"./ar-sa.js": 217,
	"./ar-tn": 218,
	"./ar-tn.js": 218,
	"./ar.js": 212,
	"./az": 219,
	"./az.js": 219,
	"./be": 220,
	"./be.js": 220,
	"./bg": 221,
	"./bg.js": 221,
	"./bm": 222,
	"./bm.js": 222,
	"./bn": 223,
	"./bn.js": 223,
	"./bo": 224,
	"./bo.js": 224,
	"./br": 225,
	"./br.js": 225,
	"./bs": 226,
	"./bs.js": 226,
	"./ca": 227,
	"./ca.js": 227,
	"./cs": 228,
	"./cs.js": 228,
	"./cv": 229,
	"./cv.js": 229,
	"./cy": 230,
	"./cy.js": 230,
	"./da": 231,
	"./da.js": 231,
	"./de": 232,
	"./de-at": 233,
	"./de-at.js": 233,
	"./de-ch": 234,
	"./de-ch.js": 234,
	"./de.js": 232,
	"./dv": 235,
	"./dv.js": 235,
	"./el": 236,
	"./el.js": 236,
	"./en-SG": 237,
	"./en-SG.js": 237,
	"./en-au": 238,
	"./en-au.js": 238,
	"./en-ca": 239,
	"./en-ca.js": 239,
	"./en-gb": 240,
	"./en-gb.js": 240,
	"./en-ie": 241,
	"./en-ie.js": 241,
	"./en-il": 242,
	"./en-il.js": 242,
	"./en-nz": 243,
	"./en-nz.js": 243,
	"./eo": 244,
	"./eo.js": 244,
	"./es": 245,
	"./es-do": 246,
	"./es-do.js": 246,
	"./es-us": 247,
	"./es-us.js": 247,
	"./es.js": 245,
	"./et": 248,
	"./et.js": 248,
	"./eu": 249,
	"./eu.js": 249,
	"./fa": 250,
	"./fa.js": 250,
	"./fi": 251,
	"./fi.js": 251,
	"./fo": 252,
	"./fo.js": 252,
	"./fr": 253,
	"./fr-ca": 254,
	"./fr-ca.js": 254,
	"./fr-ch": 255,
	"./fr-ch.js": 255,
	"./fr.js": 253,
	"./fy": 256,
	"./fy.js": 256,
	"./ga": 257,
	"./ga.js": 257,
	"./gd": 258,
	"./gd.js": 258,
	"./gl": 259,
	"./gl.js": 259,
	"./gom-latn": 260,
	"./gom-latn.js": 260,
	"./gu": 261,
	"./gu.js": 261,
	"./he": 262,
	"./he.js": 262,
	"./hi": 263,
	"./hi.js": 263,
	"./hr": 264,
	"./hr.js": 264,
	"./hu": 265,
	"./hu.js": 265,
	"./hy-am": 266,
	"./hy-am.js": 266,
	"./id": 267,
	"./id.js": 267,
	"./is": 268,
	"./is.js": 268,
	"./it": 269,
	"./it-ch": 270,
	"./it-ch.js": 270,
	"./it.js": 269,
	"./ja": 271,
	"./ja.js": 271,
	"./jv": 272,
	"./jv.js": 272,
	"./ka": 273,
	"./ka.js": 273,
	"./kk": 274,
	"./kk.js": 274,
	"./km": 275,
	"./km.js": 275,
	"./kn": 276,
	"./kn.js": 276,
	"./ko": 277,
	"./ko.js": 277,
	"./ku": 278,
	"./ku.js": 278,
	"./ky": 279,
	"./ky.js": 279,
	"./lb": 280,
	"./lb.js": 280,
	"./lo": 281,
	"./lo.js": 281,
	"./lt": 282,
	"./lt.js": 282,
	"./lv": 283,
	"./lv.js": 283,
	"./me": 284,
	"./me.js": 284,
	"./mi": 285,
	"./mi.js": 285,
	"./mk": 286,
	"./mk.js": 286,
	"./ml": 287,
	"./ml.js": 287,
	"./mn": 288,
	"./mn.js": 288,
	"./mr": 289,
	"./mr.js": 289,
	"./ms": 290,
	"./ms-my": 291,
	"./ms-my.js": 291,
	"./ms.js": 290,
	"./mt": 292,
	"./mt.js": 292,
	"./my": 293,
	"./my.js": 293,
	"./nb": 294,
	"./nb.js": 294,
	"./ne": 295,
	"./ne.js": 295,
	"./nl": 296,
	"./nl-be": 297,
	"./nl-be.js": 297,
	"./nl.js": 296,
	"./nn": 298,
	"./nn.js": 298,
	"./pa-in": 299,
	"./pa-in.js": 299,
	"./pl": 300,
	"./pl.js": 300,
	"./pt": 301,
	"./pt-br": 302,
	"./pt-br.js": 302,
	"./pt.js": 301,
	"./ro": 303,
	"./ro.js": 303,
	"./ru": 304,
	"./ru.js": 304,
	"./sd": 305,
	"./sd.js": 305,
	"./se": 306,
	"./se.js": 306,
	"./si": 307,
	"./si.js": 307,
	"./sk": 308,
	"./sk.js": 308,
	"./sl": 309,
	"./sl.js": 309,
	"./sq": 310,
	"./sq.js": 310,
	"./sr": 311,
	"./sr-cyrl": 312,
	"./sr-cyrl.js": 312,
	"./sr.js": 311,
	"./ss": 313,
	"./ss.js": 313,
	"./sv": 314,
	"./sv.js": 314,
	"./sw": 315,
	"./sw.js": 315,
	"./ta": 316,
	"./ta.js": 316,
	"./te": 317,
	"./te.js": 317,
	"./tet": 318,
	"./tet.js": 318,
	"./tg": 319,
	"./tg.js": 319,
	"./th": 320,
	"./th.js": 320,
	"./tl-ph": 321,
	"./tl-ph.js": 321,
	"./tlh": 322,
	"./tlh.js": 322,
	"./tr": 323,
	"./tr.js": 323,
	"./tzl": 324,
	"./tzl.js": 324,
	"./tzm": 325,
	"./tzm-latn": 326,
	"./tzm-latn.js": 326,
	"./tzm.js": 325,
	"./ug-cn": 327,
	"./ug-cn.js": 327,
	"./uk": 328,
	"./uk.js": 328,
	"./ur": 329,
	"./ur.js": 329,
	"./uz": 330,
	"./uz-latn": 331,
	"./uz-latn.js": 331,
	"./uz.js": 330,
	"./vi": 332,
	"./vi.js": 332,
	"./x-pseudo": 333,
	"./x-pseudo.js": 333,
	"./yo": 334,
	"./yo.js": 334,
	"./zh-cn": 335,
	"./zh-cn.js": 335,
	"./zh-hk": 336,
	"./zh-hk.js": 336,
	"./zh-tw": 337,
	"./zh-tw.js": 337
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 365;

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(208);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(209);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_module_time_vue_vue_type_style_index_2_id_ee2ae558_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function normalize(arr, raw, skip) {
  var result = [];
  var min = Number.POSITIVE_INFINITY;
  var max = Number.NEGATIVE_INFINITY;

  arr.forEach(function (y, x) {
    if (raw) {
      var val = y;

      if (y === null && !skip) {
        var n = findNearestNeighbours(arr, x);
        val = (n[0] + n[1]) / 2;
      }
      result.push(val);
    } else {
        var _val = {
          x: x,
          y: y,
          yRaw: y,
          isMin: false,
          isMax: false
        };
        min = y < min ? y : min;
        max = y > max ? y : max;

        if (_val.y === null && !skip) {
          var _n = findNearestNeighbours(arr, x);
          _val.y = (_n[0] + _n[1]) / 2;
        }
        result.push(_val);
      }
  });

  if (!raw) {
    var i = result.findIndex(function (d) {
      return d.yRaw === min;
    });
    var j = result.findIndex(function (d) {
      return d.yRaw === max;
    });
    if (result[i]) {
      result[i].isMin = true;
      result[i].alignLeft = i / result.length > 0.66;
    }
    if (result[j]) {
      result[j].isMax = true;
      result[j].alignLeft = j / result.length > 0.66;
    }

    result.forEach(function (d) {
      delete d.yRaw;
    });
  }

  return result;
}

function findNearestNeighbours(arr, index) {
  var result = [null, null];
  var i = index;
  var j = index;

  for (null; i >= 0; i--) {
    if (arr[i]) {
      result[0] = arr[i];
      break;
    }
  }

  for (null; j < arr.length; j++) {
    if (arr[j]) {
      result[1] = arr[j];
      break;
    }
  }

  if (!result[0]) {
    result[0] = result[1];
  }
  if (!result[1]) {
    result[1] = result[0];
  }
  return result;
}

exports.default = normalize;

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _items = __webpack_require__(589);

var _items2 = _interopRequireDefault(_items);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          route = _ref.route;
      var item, slug, itemData;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              item = route.params.item;
              slug = route.params.slug;

              if (!(store.state.items.item.itemId !== parseInt(item) || store.state.items.item.server !== slug)) {
                _context.next = 7;
                break;
              }

              _context.next = 5;
              return this.$cubic.get('/wow-classic/v1/items/' + slug + '/' + item);

            case 5:
              itemData = _context.sent;

              store.commit('setItem', itemData);

            case 7:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function asyncData(_x) {
      return _ref2.apply(this, arguments);
    }

    return asyncData;
  }(),

  computed: {
    item: function item() {
      return this.$store.state.items.item;
    },
    itemUrl: function itemUrl() {
      var route = this.$route.fullPath.split(this.item.itemId)[0];
      return '' + route + this.item.itemId;
    }
  },

  storeModule: _items2.default
};

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/module-time.vue?vue&type=template&id=ee2ae558&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"module-time"},[_c('div',{staticClass:"interactive",on:{"click":_vm.toggle}},[_c('span',[_vm._v("Last "+_vm._s(_vm.days)+" days")]),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:[{ active: _vm.active }, _vm.theme.dropdown]},[_c('div',{staticClass:"body",class:_vm.theme.body},[_c('span',{class:{ active: _vm.days === 7 },on:{"click":function($event){_vm.fn(7); _vm.toggle()}}},[_vm._v("Last 7 days")]),_vm._v(" "),_c('span',{class:{ active: _vm.days === 30 },on:{"click":function($event){_vm.fn(30); _vm.toggle()}}},[_vm._v("Last 30 days")]),_vm._v(" "),_c('span',{class:{ active: _vm.days === 90 },on:{"click":function($event){_vm.fn(90); _vm.toggle()}}},[_vm._v("Last 90 days")])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/module-time.vue?vue&type=template&id=ee2ae558&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(576);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(166);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(577), __esModule: true };

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
__webpack_require__(77);
module.exports = __webpack_require__(578);


/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(60);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(10);
module.exports = __webpack_require__(2).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ 588:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_3d12435c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(634);
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(386);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _header_vue_vue_type_style_index_0_id_3d12435c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(590);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_3d12435c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _header_vue_vue_type_template_id_3d12435c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "3d12435c",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'items',
  state: {
    item: { name: '' },
    timerange: 7
  },

  mutations: {
    setItem: function setItem(state, item) {
      state.item = item;
      if (!state.timerange) state.timerange = item.current.intervals.length;
    }
  },

  actions: {
    refetchItem: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref, timerange) {
        var state = _ref.state,
            commit = _ref.commit;
        var itemId, item;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                itemId = state.item.itemId;
                _context.next = 3;
                return this.$cubic.get('/wow-classic/v1/items/' + itemId + '?timerange=' + timerange);

              case 3:
                item = _context.sent;

                commit('setItem', item);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refetchItem(_x, _x2) {
        return _ref2.apply(this, arguments);
      }

      return refetchItem;
    }()
  }
};

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3d12435c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3d12435c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3d12435c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_3d12435c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(593);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(36);

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = __webpack_require__(407);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nitroAds = __webpack_require__(190);

var _nitroAds2 = _interopRequireDefault(_nitroAds);

var _appContent = __webpack_require__(177);

var _appContent2 = _interopRequireDefault(_appContent);

var _description = __webpack_require__(931);

var _description2 = _interopRequireDefault(_description);

var _graphValueComparison = __webpack_require__(933);

var _graphValueComparison2 = _interopRequireDefault(_graphValueComparison);

var _graphValueQuantity = __webpack_require__(936);

var _graphValueQuantity2 = _interopRequireDefault(_graphValueQuantity);

var _heatmapQuantity = __webpack_require__(938);

var _heatmapQuantity2 = _interopRequireDefault(_heatmapQuantity);

var _heatmapValue = __webpack_require__(943);

var _heatmapValue2 = _interopRequireDefault(_heatmapValue);

var _header = __webpack_require__(588);

var _header2 = _interopRequireDefault(_header);

var _meta = __webpack_require__(176);

var _meta2 = _interopRequireDefault(_meta);

var _wowClassic = __webpack_require__(391);

var _wowClassic2 = _interopRequireDefault(_wowClassic);

var _stats = __webpack_require__(944);

var _stats2 = _interopRequireDefault(_stats);

var _graphs = __webpack_require__(946);

var _graphs2 = _interopRequireDefault(_graphs);

var _utility = __webpack_require__(205);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    ad: _nitroAds2.default,
    appContent: _appContent2.default,
    navigation: _wowClassic2.default,
    itemHeader: _header2.default,
    description: _description2.default,
    stats: _stats2.default,
    graphValueComparison: _graphValueComparison2.default,
    graphValueQuantity: _graphValueQuantity2.default,
    heatmapValue: _heatmapValue2.default,
    heatmapQuantity: _heatmapQuantity2.default
  },

  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          route = _ref.route;

      var item, slug, region, parallel, _ref3, _ref4, itemData, regionalData, regionalDataEdited;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              item = route.params.item;
              slug = route.params.slug;

              if (!(store.state.graphs.itemId !== parseInt(item) || store.state.graphs.slug !== slug)) {
                _context.next = 19;
                break;
              }

              region = store.state.servers.region;
              parallel = [];

              parallel.push(this.$cubic.get('/wow-classic/v1/items/' + slug + '/' + item + '/prices'));
              parallel.push(this.$cubic.get('/wow-classic/v1/items/' + region + '/' + item + '/prices?region=true'));
              _context.next = 9;
              return _promise2.default.all(parallel);

            case 9:
              _ref3 = _context.sent;
              _ref4 = (0, _slicedToArray3.default)(_ref3, 2);
              itemData = _ref4[0];
              regionalData = _ref4[1];
              regionalDataEdited = _utility2.default.formatRegionalData(itemData, regionalData);


              store.commit('setGraphItem', { itemId: itemData.itemId, slug: slug });

              store.commit('setGraphData', { graph: 'graph-value-quantity', item: itemData });
              store.commit('setGraphData', { graph: 'graph-value-comparison', item: regionalDataEdited });
              store.commit('setGraphData', { graph: 'heatmap-quantity', item: itemData });
              store.commit('setGraphData', { graph: 'heatmap-value', item: itemData });

            case 19:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function asyncData(_x) {
      return _ref2.apply(this, arguments);
    }

    return asyncData;
  }(),


  computed: {
    item: function item() {
      return this.$store.state.items.item;
    },
    displayGraphs: function displayGraphs() {
      return this.$store.state.graphs.storage['graph-value-quantity'].data.length;
    }
  },

  head: function head() {
    var server = this.$store.state.servers.server;
    var serverlist = this.$store.state.servers.EU.concat(this.$store.state.servers.US);

    var serverSplit = server.split('-');
    var faction = serverSplit.pop();
    var serverIndex = serverlist.map(function (x) {
      return _utility2.default.serverSlug(x);
    }).indexOf(serverSplit.join('-'));
    var serverPretty = serverlist[serverIndex] + ' (' + (faction.charAt(0).toUpperCase() + faction.slice(1)) + ')';

    return {
      title: this.item.name + ' on ' + serverPretty + ' \xB7 NexusHub',
      meta: (0, _meta2.default)({
        title: this.item.name + ' on NexusHub',
        description: this.item.name + ' prices on the World of Warcaft Classic Auction House for ' + serverPretty,
        image: '' + this.item.imgUrl
      })
    };
  },


  storeModule: _graphs2.default
};

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(595);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 595:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module2 = __webpack_require__(175);

var _module3 = _interopRequireDefault(_module2);

var _utility = __webpack_require__(205);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default
  },

  computed: {
    item: function item() {
      return this.$store.state.items.item;
    },
    wowheadUrl: function wowheadUrl() {
      return 'https://classic.wowhead.com/item=' + this.item.itemId;
    },
    tooltip: function tooltip() {
      var tooltip = this.item.tooltip.slice(1).filter(function (t) {
        return !t.label.includes('Dropped by:') && !t.label.includes('Drop Chance:');
      });

      for (var i = 0; i < tooltip.length; i++) {
        tooltip[i].label = tooltip[i].label.replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

        if (tooltip[i].format === 'alignRight' && i > 0) tooltip[i - 1].preformat = 'alignRight';

        if (tooltip[i].label === 'Sell Price:') {
          tooltip[i].label += ' ' + this.parsePrice(this.item.sellPrice);
          if (i < tooltip.length - 1) tooltip[i + 1].space = true;
        }

        if (tooltip[i].format === 'indent') {
          if (i > 0 && tooltip[i - 1].format !== 'indent') tooltip[i - 1].space = true;
          if (i < tooltip.length - 1 && tooltip[i + 1].format !== 'indent') tooltip[i + 1].space = true;
        }
      }

      return tooltip;
    }
  },

  created: function created() {
    this.parsePrice = _utility2.default.parsePrice;
  }
};

/***/ }),

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(598);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _module2 = __webpack_require__(175);

var _module3 = _interopRequireDefault(_module2);

var _moduleTime = __webpack_require__(357);

var _moduleTime2 = _interopRequireDefault(_moduleTime);

var _moment = __webpack_require__(165);

var _moment2 = _interopRequireDefault(_moment);

var _sparkline_two = __webpack_require__(644);

var _sparkline_two2 = _interopRequireDefault(_sparkline_two);

var _utility = __webpack_require__(205);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    sparkline: _sparkline_two2.default,
    module: _module3.default,
    moduleTime: _moduleTime2.default
  },

  computed: {
    timerange: function timerange() {
      return this.$store.state.graphs.storage['graph-value-comparison'].timerange;
    },
    region: function region() {
      return this.$store.state.servers.region;
    },
    data: function data() {
      var data = this.$store.state.graphs.storage['graph-value-comparison'].data.map(function (d) {
        return {
          x: d.scannedAt,
          value1: d.value2,
          value2: d.marketValue
        };
      });

      return _utility2.default.mergeValuesAndInterpolateLowerUpper(data, this.timerange);
    },
    axisY1: function axisY1() {
      var totalData = this.data.concat(this.data.map(function (x) {
        return { value1: x.value2 };
      }));

      var _utility$generateGrap = _utility2.default.generateGraphScala(totalData, 4, 'value1'),
          tickRange = _utility$generateGrap.tickRange,
          lowerBound = _utility$generateGrap.lowerBound,
          upperBound = _utility$generateGrap.upperBound;

      var scala = [];
      for (var tick = upperBound; tick >= lowerBound; tick -= tickRange) {
        scala.push((tick / 10000).toFixed(2));
      }
      return scala;
    },
    axisX: function axisX() {
      var now = (0, _moment2.default)();
      var stepSize = Math.floor(this.timerange / 6);
      var scala = [];
      for (var i = this.timerange; i > 0; i -= stepSize) {
        scala.push(now.clone().subtract(i, 'days').format('DD. MMM'));
      }return scala.concat(['Today']);
    }
  },

  methods: {
    setTimerange: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(timerange) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(timerange === this.timerange)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                this.$refs.graphValueComparison.$refs.progress.start();
                _context.next = 5;
                return this.$store.dispatch('refetchGraphData', { graph: 'graph-value-comparison', timerange: timerange, regional: this.region });

              case 5:
                this.$refs.graphValueComparison.$refs.progress.finish();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setTimerange(_x) {
        return _ref.apply(this, arguments);
      }

      return setTimerange;
    }()
  }
};

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(600);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d = __webpack_require__(399);

var d3 = _interopRequireWildcard(_d);

var _tween = __webpack_require__(360);

var _tween2 = _interopRequireDefault(_tween);

var _utility = __webpack_require__(205);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  props: ['data', 'secondaryLabel', 'parseSecondary'],

  data: function data() {
    return {
      width: 0,
      height: 0,
      tooltipWidth: 0,
      paths: {
        line1: '',
        line2: ''
      },
      scaled: {
        x: function x(_x) {
          return _x;
        },
        v1: function v1(x) {
          return x;
        },
        v2: function v2(x) {
          return x;
        }
      }
    };
  },


  watch: {
    data: function data(newData, oldData) {
      _tween2.default.adjustData(this, newData, oldData);
      if (newData.length !== oldData.length) {
        this.onResize();
      }
    }
  },

  created: function created() {
    this.parsePrice = _utility2.default.parsePrice;
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },


  methods: {
    initialize: function initialize() {
      this.scaled.x = d3.scaleLinear().range([0, this.width]);

      this.scaled.v1 = d3.scaleLinear().range([this.height - 9, 9]);
      this.scaled.v2 = d3.scaleLinear().range([this.height - 9, 9]);
    },
    onResize: function onResize() {
      this.width = this.$el.offsetWidth;
      this.height = this.$el.offsetHeight;
      this.initialize();
      _tween2.default.adjustData(this, this.data, this.data);
    },
    update: function update() {
      var _this = this;

      this.scaled.x.domain(d3.extent(this.data, function (d) {
        return d.x;
      }));
      if (!this.parseSecondary) {
        this.scaleDomain('v1', 'value1');
        this.scaleDomain('v2', 'value2');
      } else {
        var totalData = this.data.concat(this.data.map(function (x) {
          return { value1: x.value2 };
        }));

        var _utility$generateGrap = _utility2.default.generateGraphScala(totalData, 4, 'value1'),
            lowerBound = _utility$generateGrap.lowerBound,
            upperBound = _utility$generateGrap.upperBound;

        this.scaled.v1.domain([lowerBound, upperBound]);
        this.scaled.v2.domain([lowerBound, upperBound]);
      }

      var lineValue1 = d3.line().x(function (d) {
        return _this.scaled.x(d.x);
      }).y(function (d) {
        return _this.scaled.v1(d.value1);
      }).curve(d3.curveMonotoneX);
      var lineValue2 = d3.line().x(function (d) {
        return _this.scaled.x(d.x);
      }).y(function (d) {
        return _this.scaled.v2(d.value2);
      }).curve(d3.curveMonotoneX);
      this.paths.line1 = lineValue1(this.data);
      this.paths.line2 = lineValue2(this.data);

      this.updateTooltipSize();
    },
    scaleDomain: function scaleDomain(axis, dataValue) {
      var _utility$generateGrap2 = _utility2.default.generateGraphScala(this.data, 4, dataValue),
          lowerBound = _utility$generateGrap2.lowerBound,
          upperBound = _utility$generateGrap2.upperBound;

      this.scaled[axis].domain([lowerBound, upperBound]);
    },
    updateTooltipSize: function updateTooltipSize() {
      var getMaxWidth = function getMaxWidth(selection) {
        return d3.max(selection.nodes(), function (n) {
          return n.getComputedTextLength();
        });
      };
      var titles = d3.select(this.$el).selectAll('.title');
      var primaryLables = d3.select(this.$el).selectAll('.num');
      var secondaryLables = d3.select(this.$el).selectAll('.sub');

      var widths = [getMaxWidth(titles), getMaxWidth(primaryLables), getMaxWidth(secondaryLables)];
      this.tooltipWidth = Math.round(d3.max(widths)) + 12 + 12;
    },
    parseHoursAgo: function parseHoursAgo(timestamp) {
      var rawHours = Math.round((new Date().getTime() - timestamp) / 1000 / 60 / 60);

      var days = Math.floor(rawHours / 24);
      var hours = rawHours - days * 24;

      var str = '';
      if (days > 0) str += days + ' day';
      if (days > 1) str += 's';
      if (days > 0 && hours > 0) str += ', ';
      if (hours > 0) str += hours + ' hour';
      if (hours > 1) str += 's';

      if (days > 0 || hours > 0) str += ' ago';else str = 'Today';

      return str;
    }
  }
};

/***/ }),

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(604);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _module2 = __webpack_require__(175);

var _module3 = _interopRequireDefault(_module2);

var _moduleTime = __webpack_require__(357);

var _moduleTime2 = _interopRequireDefault(_moduleTime);

var _moment = __webpack_require__(165);

var _moment2 = _interopRequireDefault(_moment);

var _sparkline_two = __webpack_require__(644);

var _sparkline_two2 = _interopRequireDefault(_sparkline_two);

var _utility = __webpack_require__(205);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    sparkline: _sparkline_two2.default,
    module: _module3.default,
    moduleTime: _moduleTime2.default
  },

  computed: {
    timerange: function timerange() {
      return this.$store.state.graphs.storage['graph-value-quantity'].timerange;
    },
    data: function data() {
      var data = this.$store.state.graphs.storage['graph-value-quantity'].data.map(function (d) {
        return {
          x: d.scannedAt,
          value1: d.marketValue,
          value2: d.quantity
        };
      });

      return _utility2.default.mergeValuesAndInterpolateLowerUpper(data, this.timerange);
    },
    axisY1: function axisY1() {
      var _utility$generateGrap = _utility2.default.generateGraphScala(this.data, 4, 'value1'),
          tickRange = _utility$generateGrap.tickRange,
          lowerBound = _utility$generateGrap.lowerBound,
          upperBound = _utility$generateGrap.upperBound;

      var scala = [];
      for (var tick = upperBound; tick >= lowerBound; tick -= tickRange) {
        scala.push((tick / 10000).toFixed(2));
      }
      return scala;
    },
    axisY2: function axisY2() {
      var _utility$generateGrap2 = _utility2.default.generateGraphScala(this.data, 4, 'value2'),
          tickRange = _utility$generateGrap2.tickRange,
          lowerBound = _utility$generateGrap2.lowerBound,
          upperBound = _utility$generateGrap2.upperBound;

      var scala = [];
      for (var tick = upperBound; tick >= lowerBound; tick -= tickRange) {
        scala.push(tick);
      }return scala;
    },
    axisX: function axisX() {
      var now = (0, _moment2.default)();
      var stepSize = Math.floor(this.timerange / 6);
      var scala = [];
      for (var i = this.timerange; i > 0; i -= stepSize) {
        scala.push(now.clone().subtract(i, 'days').format('DD. MMM'));
      }return scala.concat(['Today']);
    }
  },

  methods: {
    setTimerange: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(timerange) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(timerange === this.timerange)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                this.$refs.graphValueQuantity.$refs.progress.start();
                _context.next = 5;
                return this.$store.dispatch('refetchGraphData', { graph: 'graph-value-quantity', timerange: timerange });

              case 5:
                this.$refs.graphValueQuantity.$refs.progress.finish();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setTimerange(_x) {
        return _ref.apply(this, arguments);
      }

      return setTimerange;
    }()
  }
};

/***/ }),

/***/ 605:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(607);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 607:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getIterator2 = __webpack_require__(166);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _heatmap = __webpack_require__(645);

var _heatmap2 = _interopRequireDefault(_heatmap);

var _module2 = __webpack_require__(175);

var _module3 = _interopRequireDefault(_module2);

var _moduleTime = __webpack_require__(357);

var _moduleTime2 = _interopRequireDefault(_moduleTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default,
    moduleTime: _moduleTime2.default,
    heatmap: _heatmap2.default
  },

  computed: {
    timerange: function timerange() {
      return this.$store.state.graphs.storage['heatmap-quantity'].timerange;
    },
    data: function data() {
      var item = this.$store.state.graphs.storage['heatmap-quantity'].data;
      var data = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(item), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var d = _step.value;

          var timestamp = new Date(d.scannedAt);

          var day = ((timestamp.getDay() - 1) % 7 + 7) % 7;
          if (!data[day]) data[day] = [];

          var hour = timestamp.getHours();
          if (!data[day][hour]) data[day][hour] = [];
          data[day][hour].push(d.quantity);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      for (var i = 0; i < 7; i++) {
        if (!data[i]) {
          data[i] = new Array(24).fill(null);
          continue;
        }
        for (var j = 0; j < 24; j++) {
          if (!data[i][j]) {
            data[i][j] = null;
            continue;
          }
          var hNum = data[i][j].length;
          var hSum = data[i][j].reduce(function (acc, cV) {
            return acc + cV;
          });
          data[i][j] = Math.round(hSum / hNum);
        }
      }

      return data;
    }
  },

  methods: {
    setTimerange: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(timerange) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(timerange === this.timerange)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                this.$refs.heatmapQuantity.$refs.progress.start();
                _context.next = 5;
                return this.$store.dispatch('refetchGraphData', { graph: 'heatmap-quantity', timerange: timerange });

              case 5:
                this.$refs.heatmapQuantity.$refs.progress.finish();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setTimerange(_x) {
        return _ref.apply(this, arguments);
      }

      return setTimerange;
    }()
  }
};

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(609);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 609:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(438);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _theme = __webpack_require__(35);

var _theme2 = _interopRequireDefault(_theme);

var _utility = __webpack_require__(205);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['data', 'parseNum', 'tooltipLabel'],

  computed: {
    theme: function theme() {
      return (0, _theme2.default)(this);
    },
    axisDays: function axisDays() {
      return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    },
    min: function min() {
      var minRow = this.data.map(function (row) {
        return Math.min.apply(Math, (0, _toConsumableArray3.default)(row.filter(function (v) {
          return v;
        })));
      });
      return Math.min.apply(Math, (0, _toConsumableArray3.default)(minRow));
    },
    max: function max() {
      var maxRow = this.data.map(function (row) {
        return Math.max.apply(Math, (0, _toConsumableArray3.default)(row.filter(function (v) {
          return v;
        })));
      });
      return Math.max.apply(Math, (0, _toConsumableArray3.default)(maxRow));
    }
  },

  created: function created() {
    this.parsePrice = _utility2.default.parsePrice;
  },


  methods: {
    scale: function scale(num) {
      var scale = (num - this.min) / (this.max - this.min);
      return scale * (1 - 0.45) + 0.45;
    }
  }
};

/***/ }),

/***/ 610:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"hour":"warframe_hour_1Pvdk","tooltip":"warframe_tooltip_3y16W","label":"warframe_label_3_svF"};

/***/ }),

/***/ 611:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"hour":"wow-classic_hour_GDn2k","tooltip":"wow-classic_tooltip_13OLY","label":"wow-classic_label_1Go4q"};

/***/ }),

/***/ 612:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(615);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getIterator2 = __webpack_require__(166);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _heatmap = __webpack_require__(645);

var _heatmap2 = _interopRequireDefault(_heatmap);

var _module2 = __webpack_require__(175);

var _module3 = _interopRequireDefault(_module2);

var _moduleTime = __webpack_require__(357);

var _moduleTime2 = _interopRequireDefault(_moduleTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default,
    moduleTime: _moduleTime2.default,
    heatmap: _heatmap2.default
  },

  computed: {
    timerange: function timerange() {
      return this.$store.state.graphs.storage['heatmap-value'].timerange;
    },
    data: function data() {
      var item = this.$store.state.graphs.storage['heatmap-value'].data;
      var data = [];

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)(item), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var d = _step.value;

          var timestamp = new Date(d.scannedAt);

          var day = ((timestamp.getDay() - 1) % 7 + 7) % 7;
          if (!data[day]) data[day] = [];

          var hour = timestamp.getHours();
          if (!data[day][hour]) data[day][hour] = [];
          data[day][hour].push(d.marketValue);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      for (var i = 0; i < 7; i++) {
        if (!data[i]) {
          data[i] = new Array(24).fill(null);
          continue;
        }
        for (var j = 0; j < 24; j++) {
          if (!data[i][j]) {
            data[i][j] = null;
            continue;
          }
          var hNum = data[i][j].length;
          var hSum = data[i][j].reduce(function (acc, cV) {
            return acc + cV;
          });
          data[i][j] = Math.round(hSum / hNum);
        }
      }

      return data;
    }
  },

  methods: {
    setTimerange: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(timerange) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(timerange === this.timerange)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt('return');

              case 2:
                this.$refs.heatmapValue.$refs.progress.start();
                _context.next = 5;
                return this.$store.dispatch('refetchGraphData', { graph: 'heatmap-value', timerange: timerange });

              case 5:
                this.$refs.heatmapValue.$refs.progress.finish();

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setTimerange(_x) {
        return _ref.apply(this, arguments);
      }

      return setTimerange;
    }()
  }
};

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(617);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indicator = __webpack_require__(200);

var _indicator2 = _interopRequireDefault(_indicator);

var _module2 = __webpack_require__(175);

var _module3 = _interopRequireDefault(_module2);

var _utility = __webpack_require__(205);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    module: _module3.default,
    indicator: _indicator2.default
  },

  computed: {
    item: function item() {
      return this.$store.state.items.item;
    },
    stats: function stats() {
      return this.item.stats;
    },
    diff: function diff() {
      var _this = this;

      var percentage = function percentage(property) {
        if (!_this.stats.previous || !_this.stats.previous[property]) return 0;
        var value = _this.stats.current[property] - _this.stats.previous[property];
        return Math.round(value / _this.stats.previous[property] * 100 * 1e2) / 1e2;
      };
      return {
        marketValue: percentage('marketValue'),
        minBuyout: percentage('minBuyout'),
        quantity: percentage('quantity'),
        historicalValue: percentage('historicalValue')
      };
    }
  },

  created: function created() {
    this.parsePrice = _utility2.default.parsePrice;
  }
};

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/header.vue?vue&type=template&id=3d12435c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('div',{staticClass:"item-img-shade"}),_vm._v(" "),_c('div',{staticClass:"item-img-shade-2"}),_vm._v(" "),_c('div',{staticClass:"background"}),_vm._v(" "),_c('div',{staticClass:"container"},[_c('div',{staticClass:"item-profile"},[_c('div',{staticClass:"icon"},[_c('img',{attrs:{"src":_vm.item.icon}})]),_vm._v(" "),_c('div',{staticClass:"item-profile-data-info"},[_c('h1',[_vm._v(_vm._s(_vm.item.name))]),_vm._v(" "),_c('br'),_vm._v(" "),_vm._l((_vm.item.tags),function(tag,i){return _c('span',{key:tag + i},[_vm._v("\n          "+_vm._s(tag)+"\n        ")])})],2)])]),_vm._v(" "),_c('nav',{ref:"subnav",staticClass:"subnav"},[_c('div',{staticClass:"container"},[_c('router-link',{staticClass:"interactive",attrs:{"to":("" + _vm.itemUrl),"exact":""}},[_vm._v("\n        Overview\n      ")]),_vm._v(" "),_c('router-link',{staticClass:"interactive",attrs:{"to":(_vm.itemUrl + "/crafting")}},[_vm._v("\n        Crafting\n      ")])],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/header.vue?vue&type=template&id=3d12435c&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sparkline_two_vue_vue_type_template_id_74b9b083_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1015);
/* harmony import */ var _sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(599);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sparkline_two_vue_vue_type_style_index_0_id_74b9b083_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(934);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _sparkline_two_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _sparkline_two_vue_vue_type_template_id_74b9b083_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _sparkline_two_vue_vue_type_template_id_74b9b083_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "74b9b083",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 645:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heatmap_vue_vue_type_template_id_618686d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1016);
/* harmony import */ var _heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(939);
/* harmony import */ var _heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(940);
/* harmony import */ var _heatmap_vue_vue_type_style_index_2_id_618686d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(941);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);










function injectStyles (context) {
  
  this["warframe"] = (_heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_2__["default"])
this["wow-classic"] = (_heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"].locals || _heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_3__["default"])

}

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(
  _heatmap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _heatmap_vue_vue_type_template_id_618686d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _heatmap_vue_vue_type_template_id_618686d2_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  injectStyles,
  "618686d2",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 931:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _description_vue_vue_type_template_id_d2a68c24_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(992);
/* harmony import */ var _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(594);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(932);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _description_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _description_vue_vue_type_template_id_d2a68c24_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _description_vue_vue_type_template_id_d2a68c24_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "d2a68c24",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 932:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(596);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_description_vue_vue_type_style_index_0_id_d2a68c24_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 933:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph_value_comparison_vue_vue_type_template_id_2dc03a42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(956);
/* harmony import */ var _graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(597);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _graph_value_comparison_vue_vue_type_style_index_0_id_2dc03a42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(935);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _graph_value_comparison_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _graph_value_comparison_vue_vue_type_template_id_2dc03a42_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _graph_value_comparison_vue_vue_type_template_id_2dc03a42_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "2dc03a42",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_style_index_0_id_74b9b083_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_style_index_0_id_74b9b083_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_style_index_0_id_74b9b083_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_sparkline_two_vue_vue_type_style_index_0_id_74b9b083_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 935:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_style_index_0_id_2dc03a42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(602);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_style_index_0_id_2dc03a42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_style_index_0_id_2dc03a42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_comparison_vue_vue_type_style_index_0_id_2dc03a42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _graph_value_quantity_vue_vue_type_template_id_54c05b6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(991);
/* harmony import */ var _graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(603);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _graph_value_quantity_vue_vue_type_style_index_0_id_54c05b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(937);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _graph_value_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _graph_value_quantity_vue_vue_type_template_id_54c05b6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _graph_value_quantity_vue_vue_type_template_id_54c05b6e_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "54c05b6e",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_style_index_0_id_54c05b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(605);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_style_index_0_id_54c05b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_style_index_0_id_54c05b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_graph_value_quantity_vue_vue_type_style_index_0_id_54c05b6e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 938:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heatmap_quantity_vue_vue_type_template_id_6a5a2430_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(990);
/* harmony import */ var _heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(606);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _heatmap_quantity_vue_vue_type_style_index_0_id_6a5a2430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(942);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _heatmap_quantity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _heatmap_quantity_vue_vue_type_template_id_6a5a2430_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _heatmap_quantity_vue_vue_type_template_id_6a5a2430_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "6a5a2430",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 939:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(610);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_0_lang_scss_module_warframe___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 940:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(611);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0__);
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_1_lang_scss_module_wow_classic___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 941:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_2_id_618686d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(612);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_2_id_618686d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_2_id_618686d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_vue_vue_type_style_index_2_id_618686d2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_style_index_0_id_6a5a2430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(613);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_style_index_0_id_6a5a2430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_style_index_0_id_6a5a2430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_heatmap_quantity_vue_vue_type_style_index_0_id_6a5a2430_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 943:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _heatmap_value_vue_vue_type_template_id_5c7a093c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(988);
/* harmony import */ var _heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(614);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _heatmap_value_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _heatmap_value_vue_vue_type_template_id_5c7a093c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _heatmap_value_vue_vue_type_template_id_5c7a093c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "5c7a093c",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stats_vue_vue_type_template_id_61489d73_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(987);
/* harmony import */ var _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(616);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _stats_vue_vue_type_style_index_0_id_61489d73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(945);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _stats_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _stats_vue_vue_type_template_id_61489d73_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _stats_vue_vue_type_template_id_61489d73_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "61489d73",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 945:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_style_index_0_id_61489d73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(618);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_style_index_0_id_61489d73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_style_index_0_id_61489d73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_stats_vue_vue_type_style_index_0_id_61489d73_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 946:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = __webpack_require__(36);

var _promise2 = _interopRequireDefault(_promise);

var _slicedToArray2 = __webpack_require__(407);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _utility = __webpack_require__(205);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'graphs',
  state: {
    itemId: '',
    slug: '',
    storage: {
      'graph-value-quantity': {},
      'graph-value-comparison': {},
      'heatmap-value': {},
      'heapmap-quantity': {}
    }
  },

  mutations: {
    setGraphItem: function setGraphItem(state, item) {
      state.itemId = item.itemId;
      state.slug = item.slug;
    },
    setGraphData: function setGraphData(state, _ref) {
      var graph = _ref.graph,
          item = _ref.item;

      item.data = item.data.map(function (x) {
        x.scannedAt = new Date(x.scannedAt).getTime();
        return x;
      });

      state.storage[graph] = { timerange: item.timerange, data: item.data };
    }
  },

  actions: {
    refetchGraphData: function () {
      var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2, _ref3) {
        var state = _ref2.state,
            commit = _ref2.commit;
        var graph = _ref3.graph,
            timerange = _ref3.timerange,
            regional = _ref3.regional;

        var itemId, slug, parallel, _ref5, _ref6, itemData, regionalData;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                itemId = state.itemId;
                slug = state.slug;
                parallel = [];

                parallel.push(this.$cubic.get('/wow-classic/v1/items/' + slug + '/' + itemId + '/prices?timerange=' + timerange));
                if (regional) parallel.push(this.$cubic.get('/wow-classic/v1/items/' + regional + '/' + itemId + '/prices?region=true&timerange=' + timerange));
                _context.next = 7;
                return _promise2.default.all(parallel);

              case 7:
                _ref5 = _context.sent;
                _ref6 = (0, _slicedToArray3.default)(_ref5, 2);
                itemData = _ref6[0];
                regionalData = _ref6[1];


                if (regional) itemData = _utility2.default.formatRegionalData(itemData, regionalData);
                commit('setGraphData', { graph: graph, item: itemData });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refetchGraphData(_x, _x2) {
        return _ref4.apply(this, arguments);
      }

      return refetchGraphData;
    }()
  }
};

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_2853fdfb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(619);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_2853fdfb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_2853fdfb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_overview_vue_vue_type_style_index_0_id_2853fdfb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/graph-value-comparison.vue?vue&type=template&id=2dc03a42&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{ref:"graphValueComparison"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/trade.svg","alt":"Trade"}}),_vm._v(" "),_c('h3',[_vm._v("Market Value Server vs. Regional")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',{staticClass:"graph-wrapper"},[_c('div',{staticClass:"axis y1"},[_c('div',{staticClass:"labels"},_vm._l((_vm.axisY1),function(label,i){return _c('span',{key:'axisY1' + i},[_vm._v(_vm._s(label)+"g")])}),0)]),_vm._v(" "),_c('div',{staticClass:"graph"},[_c('sparkline',{attrs:{"data":_vm.data,"secondary-label":'Regional',"parse-secondary":true}}),_vm._v(" "),_c('div',{staticClass:"axis x"},[_c('div',{staticClass:"labels"},_vm._l((_vm.axisX),function(label,i){return _c('span',{key:'axisX' + i},[_vm._v(_vm._s(label))])}),0)])],1)])]),_vm._v(" "),_c('template',{slot:"footer"},[_c('module-time',{attrs:{"days":_vm.timerange,"fn":_vm.setTimerange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/graph-value-comparison.vue?vue&type=template&id=2dc03a42&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 966:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/sites/wow-classic/items/overview.vue?vue&type=template&id=2853fdfb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('navigation'),_vm._v(" "),_c('item-header'),_vm._v(" "),_c('app-content',[_c('section',[_c('div',{staticClass:"container"},[_c('h2',{staticClass:"sub"},[_vm._v("\n          Item Overview\n        ")]),_vm._v(" "),_c('div',{staticClass:"row-margin"},[_c('div',{staticClass:"col-b column"},[_c('description')],1),_vm._v(" "),(_vm.item.stats.current)?_c('stats',{staticClass:"col-b stats"}):_vm._e()],1),_vm._v(" "),_c('ad',{attrs:{"name":"wow-classic-item-overview-main"}})],1)]),_vm._v(" "),(_vm.displayGraphs)?_c('section',[_c('div',{staticClass:"container"},[_c('h2',{staticClass:"sub"},[_vm._v("\n          Statistics\n        ")]),_vm._v(" "),_c('div',{staticClass:"row-margin"},[_c('graph-value-quantity',{staticClass:"col-b graph"}),_vm._v(" "),_c('graph-value-comparison',{staticClass:"col-b graph"})],1),_vm._v(" "),_c('div',{staticClass:"row-margin"},[_c('heatmap-value',{staticClass:"col-b graph"}),_vm._v(" "),_c('heatmap-quantity',{staticClass:"col-b graph"})],1),_vm._v(" "),_c('ad',{attrs:{"name":"wow-classic-item-overview-statistics"}})],1)]):_vm._e()])],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/sites/wow-classic/items/overview.vue?vue&type=template&id=2853fdfb&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_vue_vue_type_template_id_2853fdfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(966);
/* harmony import */ var _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(592);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _overview_vue_vue_type_style_index_0_id_2853fdfb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(947);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _overview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _overview_vue_vue_type_template_id_2853fdfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _overview_vue_vue_type_template_id_2853fdfb_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "2853fdfb",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 987:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/stats.vue?vue&type=template&id=61489d73&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/stats.svg","alt":"Statistics"}}),_vm._v(" "),_c('h3',[_vm._v("Item Stats")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Market Value")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.stats.current.marketValue))+"\n        ")]),_vm._v(" "),(_vm.diff.marketValue !== 0)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.marketValue < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.marketValue}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.marketValue))+"%\n        ")],1):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Historical Value")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.stats.current.historicalValue))+"\n        ")]),_vm._v(" "),(_vm.diff.historicalValue !== 0)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.historicalValue < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.historicalValue}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.historicalValue))+"%\n        ")],1):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Minimum Buyout")])]),_vm._v(" "),(_vm.stats.current.minBuyout > 0)?_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.parsePrice(_vm.stats.current.minBuyout))+"\n        ")]),_vm._v(" "),(_vm.diff.minBuyout !== 0)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.minBuyout < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.minBuyout}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.minBuyout))+"%\n        ")],1):_vm._e()]):_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price neutral"},[_vm._v("Unavailable")])])]),_vm._v(" "),_c('div',{staticClass:"item-data row"},[_c('div',{staticClass:"col"},[_c('span',[_vm._v("Quantity")])]),_vm._v(" "),_c('div',{staticClass:"col-2"},[_c('span',{staticClass:"data-price"},[_vm._v("\n          "+_vm._s(_vm.stats.current.quantity)+"\n        ")]),_vm._v(" "),(_vm.diff.quantity !== 0)?_c('span',{staticClass:"data-price-diff",class:{ negative: _vm.diff.quantity < 0 }},[_c('indicator',{attrs:{"diff":_vm.diff.quantity}}),_vm._v(" "+_vm._s(Math.abs(_vm.diff.quantity))+"%\n        ")],1):_vm._e()])])]),_vm._v(" "),_c('template',{slot:"footer"},[_c('a',{attrs:{"href":"https://www.tradeskillmaster.com/","target":"_blank"}},[_vm._v("\n      Powered by TSM\n      "),_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/arrow-right.svg","alt":"Powered by TSM"}})])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/stats.vue?vue&type=template&id=61489d73&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/heatmap-value.vue?vue&type=template&id=5c7a093c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{ref:"heatmapValue"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/trade.svg","alt":"Trade"}}),_vm._v(" "),_c('h3',[_vm._v("Heatmap Market Value")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('heatmap',{attrs:{"data":_vm.data,"parse-num":true,"tooltip-label":'Market Value'}})],1),_vm._v(" "),_c('template',{slot:"footer"},[_c('module-time',{attrs:{"days":_vm.timerange,"fn":_vm.setTimerange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/heatmap-value.vue?vue&type=template&id=5c7a093c&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/heatmap-quantity.vue?vue&type=template&id=6a5a2430&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{ref:"heatmapQuantity"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/trade.svg","alt":"Trade"}}),_vm._v(" "),_c('h3',[_vm._v("Heatmap Market Quantity")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('heatmap',{attrs:{"data":_vm.data,"tooltip-label":'Quantity'}})],1),_vm._v(" "),_c('template',{slot:"footer"},[_c('module-time',{attrs:{"days":_vm.timerange,"fn":_vm.setTimerange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/heatmap-quantity.vue?vue&type=template&id=6a5a2430&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/graph-value-quantity.vue?vue&type=template&id=54c05b6e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',{ref:"graphValueQuantity"},[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/wow-classic/ui/trade.svg","alt":"Trade"}}),_vm._v(" "),_c('h3',[_vm._v("Market Value / Quantity")])]),_vm._v(" "),_c('template',{slot:"body"},[_c('div',{staticClass:"graph-wrapper"},[_c('div',{staticClass:"axis y1"},[_c('div',{staticClass:"labels"},_vm._l((_vm.axisY1),function(label,i){return _c('span',{key:'axisY1' + i},[_vm._v(_vm._s(label)+"g")])}),0)]),_vm._v(" "),_c('div',{staticClass:"graph"},[_c('sparkline',{attrs:{"data":_vm.data,"secondary-label":'Quantity'}}),_vm._v(" "),_c('div',{staticClass:"axis x"},[_c('div',{staticClass:"labels"},_vm._l((_vm.axisX),function(label,i){return _c('span',{key:'axisX' + i},[_vm._v(_vm._s(label))])}),0)])],1),_vm._v(" "),_c('div',{staticClass:"axis y2"},[_c('div',{staticClass:"labels"},_vm._l((_vm.axisY2),function(label,i){return _c('span',{key:'axisY2' + i},[_vm._v(_vm._s(label))])}),0)])])]),_vm._v(" "),_c('template',{slot:"footer"},[_c('module-time',{attrs:{"days":_vm.timerange,"fn":_vm.setTimerange}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/graph-value-quantity.vue?vue&type=template&id=54c05b6e&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 992:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/description.vue?vue&type=template&id=d2a68c24&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('module',[_c('template',{slot:"header"},[_c('img',{staticClass:"ico-h-16",attrs:{"src":"/img/wow-classic/ui/description.svg","alt":"Tooltip"}}),_vm._v(" "),_c('h3',[_vm._v("Tooltip")])]),_vm._v(" "),_c('template',{slot:"body"},[_vm._l((_vm.tooltip),function(entry,i){return [(entry.format !== 'alignRight' && entry.preformat !== 'alignRight')?_c('p',{key:("" + i + (entry.label)),class:[entry.format ? 'format-' + entry.format.toLowerCase() : '', !entry.space ? 'tooltip-label' : '']},[_vm._v("\n        "+_vm._s(entry.label)+"\n      ")]):_c('span',{key:("" + i + (entry.label)),class:[entry.format ? 'format-' + entry.format.toLowerCase() : '', !entry.space ? 'tooltip-label' : '']},[_vm._v("\n        "+_vm._s(entry.label)+"\n      ")])]})],2),_vm._v(" "),_c('template',{slot:"footer"},[(_vm.wowheadUrl)?_c('a',{attrs:{"href":_vm.wowheadUrl,"target":"_blank"}},[_vm._v("\n      View on Wowhead\n      "),_c('img',{staticClass:"ico-20",attrs:{"src":"/img/ui/arrow-right.svg","alt":"View on Wowhead"}})]):_vm._e()])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/description.vue?vue&type=template&id=d2a68c24&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);