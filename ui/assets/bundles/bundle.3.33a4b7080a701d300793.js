(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(251);

var _extends3 = _interopRequireDefault(_extends2);

var _log = __webpack_require__(280);

var _log2 = _interopRequireDefault(_log);

var _toConsumableArray2 = __webpack_require__(245);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getIterator2 = __webpack_require__(165);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  parsePrice: function parsePrice(price) {
    var gold = Math.floor(price / 10000);
    var silver = Math.floor(price / 100 - gold * 100);
    var copper = price - gold * 10000 - silver * 100;

    var string = '';
    if (gold) string += gold + 'g ';
    if (silver) string += silver + 's ';
    string += copper + 'c';
    return string;
  },
  pushUrl: function pushUrl(self, url) {
    self.$router.push(this.formatUrl(self, url));
  },
  formatUrl: function formatUrl(self, url) {
    var params = url.split('?');
    var routeArgs = params[0].split('/');

    var region = self.$store.state.servers.selectedRegion;
    var server = self.$store.state.servers.selectedServer;
    var faction = self.$store.state.servers.selectedFaction;
    if (region !== 'All Regions') {
      routeArgs.splice(3, 0, region.toLowerCase());
      if (server !== 'All Servers') {
        routeArgs.splice(4, 0, this.serverSlug(server));
        if (faction !== 'All Factions') routeArgs.splice(5, 0, faction.toLowerCase());
      }
    }

    params[0] = routeArgs.join('/');
    return params.join('?');
  },
  serverSlug: function serverSlug(server) {
    return server.toLowerCase().replace(/\s/g, '-').replace(/'/g, '');
  },
  formatRegionalData: function formatRegionalData(itemData, regionalData) {
    var msH = 1000 * 60 * 60;

    var _loop = function _loop(iD) {
      var bracketHour = new Date(Math.floor(new Date(iD.scannedAt).getTime() / msH) * msH);
      var bracketIndex = regionalData.data.findIndex(function (x) {
        return new Date(x.scannedAt).getTime() === bracketHour.getTime();
      });
      if (bracketIndex >= 0) regionalData.data[bracketIndex].value2 = iD.marketValue;
    };

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = (0, _getIterator3.default)(itemData.data), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var iD = _step.value;

        _loop(iD);
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

    var validValue = regionalData.data.find(function (e) {
      return e.value2;
    });
    if (validValue) validValue = validValue.value2;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = (0, _getIterator3.default)(regionalData.data), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var rD = _step2.value;

        if (!validValue) rD.value2 = null;else if (!rD.value2) rD.value2 = validValue;else if (rD.value2) validValue = rD.value2;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return regionalData;
  },
  generateGraphScala: function generateGraphScala(data, ticks) {
    var prop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (prop) data = data.map(function (x) {
      return x[prop];
    });

    var lowerBound = Math.min.apply(Math, (0, _toConsumableArray3.default)(data));
    var upperBound = Math.max.apply(Math, (0, _toConsumableArray3.default)(data));
    var tickRange = (upperBound - lowerBound) / (ticks - 1);
    if (tickRange < 1) tickRange = 1;

    var x = Math.ceil((0, _log2.default)(tickRange) - 1);
    var pow10x = Math.pow(10, x);
    tickRange = Math.ceil(tickRange / pow10x) * pow10x;

    lowerBound = tickRange ? tickRange * Math.floor(lowerBound / tickRange) : 0;
    upperBound = tickRange ? tickRange * Math.floor(1 + upperBound / tickRange) : upperBound * 2;
    if (!tickRange) tickRange = upperBound / 2;

    return { tickRange: tickRange, lowerBound: lowerBound, upperBound: upperBound };
  },
  mergeValuesAndInterpolateLowerUpper: function mergeValuesAndInterpolateLowerUpper(data, timerange) {
    var stepSize = Math.floor(timerange / 6);
    var bracketLower = 0;
    var bracketUpper = stepSize;
    var mergedData = [];
    if (stepSize > 1) {
      while (bracketLower < data.length) {
        var dataBracket = data.slice(bracketLower, bracketUpper > data.length ? data.length : bracketUpper);
        var mergedBracket = dataBracket.reduce(function (acc, cV) {
          acc.value1 += cV.value1;
          acc.value2 += cV.value2;
          return acc;
        });
        mergedBracket.value1 = Math.round(mergedBracket.value1 / dataBracket.length);
        mergedBracket.value2 = Math.round(mergedBracket.value2 / dataBracket.length);
        mergedBracket.x = dataBracket[Math.floor(dataBracket.length / 2)].x;

        mergedData.push(mergedBracket);
        bracketLower += stepSize;
        bracketUpper += stepSize;
      }
      data = mergedData;
    }

    data.unshift((0, _extends3.default)({}, data[0], { x: new Date().getTime() - 1000 * 60 * 60 * 24 * timerange }));
    data.push((0, _extends3.default)({}, data[data.length - 1], { x: new Date().getTime() }));

    return data;
  }
};

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wow_classic_vue_vue_type_template_id_60a3f416_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(962);
/* harmony import */ var _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(309);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _wow_classic_vue_vue_type_style_index_0_id_60a3f416_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(838);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wow_classic_vue_vue_type_template_id_60a3f416_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _wow_classic_vue_vue_type_template_id_60a3f416_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "60a3f416",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(310);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _notifications = __webpack_require__(189);

var _notifications2 = _interopRequireDefault(_notifications);

var _wowClassic = __webpack_require__(311);

var _wowClassic2 = _interopRequireDefault(_wowClassic);

var _selectServer = __webpack_require__(835);

var _selectServer2 = _interopRequireDefault(_selectServer);

var _servers = __webpack_require__(837);

var _servers2 = _interopRequireDefault(_servers);

var _utility = __webpack_require__(216);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shortcut = void 0,
    listener = void 0;
try {
  shortcut = __webpack_require__(203);
} catch (err) {}

exports.default = {
  components: {
    notifications: _notifications2.default,
    search: _wowClassic2.default,
    selectServer: _selectServer2.default
  },

  props: ['landingPage'],

  asyncData: function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref) {
      var store = _ref.store,
          route = _ref.route;
      var serverlist, slug, server, region;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.$cubic.get('/wow-classic/v1/servers');

            case 2:
              serverlist = _context.sent;

              store.commit('setServerlist', serverlist);

              slug = route.params.slug;

              if (slug) {
                server = slug.split('-');

                server.pop();
                region = '';

                if (serverlist.EU.map(function (x) {
                  return _utility2.default.serverSlug(x);
                }).includes(server.join('-'))) region = 'eu';else if (serverlist.US.map(function (x) {
                  return _utility2.default.serverSlug(x);
                }).includes(server.join('-'))) region = 'us';
                store.commit('setServer', { server: slug, region: region });
              }

            case 6:
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
    server: function server() {
      return this.$store.state.servers.server;
    }
  },

  mounted: function mounted() {
    var _this = this;

    listener = shortcut.bind('shift + f', function (e) {
      e.preventDefault();
      _this.$el.querySelector('input').focus();
    });
  },
  beforeDestroy: function beforeDestroy() {
    shortcut.unbind('shift + f', listener);
  },


  storeModule: _servers2.default
};

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wow_classic_vue_vue_type_template_id_b5257782___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(961);
/* harmony import */ var _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(312);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wow_classic_vue_vue_type_template_id_b5257782___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _wow_classic_vue_vue_type_template_id_b5257782___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(313);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIterator2 = __webpack_require__(165);

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _regenerator = __webpack_require__(56);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(57);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _search = __webpack_require__(199);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['placeholder', 'focus'],

  data: function data() {
    return {
      input: '',
      autocomplete: {
        name: '',
        type: ''
      },
      suggestions: []
    };
  },


  computed: {
    server: function server() {
      return this.$store.state.servers.server;
    }
  },

  mounted: function mounted() {
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (this.focus && !isMobile) {
      this.$refs.input.focus();
    }
  },


  methods: {
    fetch: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(event) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.input = event.target.value;
                this.$store.commit('setSearchInput', event.target.value);

                if (!this.autocomplete.name.startsWith(event.target.value)) {
                  this.autocomplete = {
                    name: '',
                    category: 'Any'
                  };
                }
                _context.next = 5;
                return this.fetchSuggestions();

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetch(_x) {
        return _ref.apply(this, arguments);
      }

      return fetch;
    }(),
    fetchSuggestions: function () {
      var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var result, query, regex, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, r;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                result = [];

                if (!(this.input.length > 1)) {
                  _context2.next = 6;
                  break;
                }

                query = encodeURIComponent(this.input);
                _context2.next = 5;
                return this.$cubic.get('/wow-classic/v1/search/suggestions?query=' + query + '&limit=4');

              case 5:
                result = _context2.sent;

              case 6:
                regex = new RegExp('^' + this.input, 'i');

                if (!(result.length && result[0].name.replace(regex, this.input).startsWith(this.input))) {
                  _context2.next = 31;
                  break;
                }

                this.autocomplete = {
                  name: result[0].name.replace(regex, this.input),
                  category: result[0].type
                };
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context2.prev = 12;
                for (_iterator = (0, _getIterator3.default)(result); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  r = _step.value;
                  r.imgUrl = r.imgUrl.replace('/large/', '/medium/');
                }_context2.next = 20;
                break;

              case 16:
                _context2.prev = 16;
                _context2.t0 = _context2['catch'](12);
                _didIteratorError = true;
                _iteratorError = _context2.t0;

              case 20:
                _context2.prev = 20;
                _context2.prev = 21;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 23:
                _context2.prev = 23;

                if (!_didIteratorError) {
                  _context2.next = 26;
                  break;
                }

                throw _iteratorError;

              case 26:
                return _context2.finish(23);

              case 27:
                return _context2.finish(20);

              case 28:
                this.suggestions = result;
                _context2.next = 33;
                break;

              case 31:
                this.autocomplete = {
                  name: '',
                  category: 'Any'
                };
                this.suggestions = [];

              case 33:
                if (this.input.length < 1) {
                  this.autocomplete = {
                    name: '',
                    category: ''
                  };
                }

              case 34:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[12, 16, 20, 28], [21,, 23, 27]]);
      }));

      function fetchSuggestions() {
        return _ref2.apply(this, arguments);
      }

      return fetchSuggestions;
    }(),
    complete: function complete() {
      var suggestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (this.autocomplete.name) {
        this.input = this.autocomplete.name;
      }
    },
    search: function search() {
      var suggestion = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (suggestion.name) {
        this.input = '';
        this.autocomplete = {
          name: '',
          category: ''
        };
        this.query(suggestion.itemId);
        this.suggestions = [];
      } else if (this.suggestions.length) {
        this.input = '';
        this.autocomplete = {
          name: '',
          category: ''
        };
        this.query(this.suggestions[0].itemId);
        this.suggestions = [];
      } else {
        this.$router.push('/wow-classic/search/' + this.server + '?input=' + this.input);
      }
    },
    query: function query(itemId) {
      this.$router.push('/wow-classic/items/' + this.server + '/' + itemId);
    }
  },

  storeModule: _search2.default
};

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(315);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utility = __webpack_require__(216);

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  data: function data() {
    return {
      active: false
    };
  },


  computed: {
    server: function server() {
      return this.$store.state.servers.server;
    },
    serverlist: function serverlist() {
      return { EU: this.$store.state.servers.EU, US: this.$store.state.servers.US };
    },
    selectedRegion: function selectedRegion() {
      return this.$store.state.servers.selected.region;
    },
    selectedServer: function selectedServer() {
      return this.$store.state.servers.selected.server;
    },
    serverPretty: function serverPretty() {
      if (this.server === '') return 'Select Server';

      var serverSplit = this.server.split('-');
      var faction = serverSplit.pop();
      var serverlist = this.serverlist.EU.concat(this.serverlist.US);
      var serverIndex = serverlist.map(function (x) {
        return _utility2.default.serverSlug(x);
      }).indexOf(serverSplit.join('-'));
      return { name: serverlist[serverIndex], faction: faction };
    },
    activeRegion: function activeRegion() {
      if (this.serverlist.EU.includes(this.serverPretty.name)) return 'EU';else return 'US';
    }
  },

  methods: {
    toggle: function toggle() {
      this.active = !this.active;
      if (!this.active) {
        this.$store.commit('selectRegion', '');
      }
    },
    selectRegion: function selectRegion(region) {
      if (region === this.selectedRegion) this.$store.commit('selectRegion', '');else this.$store.commit('selectRegion', region);
    },
    selectServer: function selectServer(server) {
      if (server === this.selectedServer) this.$store.commit('selectServer', '');else this.$store.commit('selectServer', server);
    },
    setServer: function setServer(server, faction) {
      server = _utility2.default.serverSlug(server);
      if (this.server === server) return;
      server = server + '-' + faction;
      var region = this.activeRegion.toLowerCase();

      var route = this.$route.fullPath.replace(this.server, server);
      this.$router.push(route);
      this.$store.commit('setServer', { server: server, region: region });
    }
  }
};

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 835:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _select_server_vue_vue_type_template_id_7d5a9546_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(996);
/* harmony import */ var _select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _select_server_vue_vue_type_style_index_0_id_7d5a9546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(836);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _select_server_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _select_server_vue_vue_type_template_id_7d5a9546_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _select_server_vue_vue_type_template_id_7d5a9546_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "7d5a9546",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_style_index_0_id_7d5a9546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(316);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_style_index_0_id_7d5a9546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_style_index_0_id_7d5a9546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_select_server_vue_vue_type_style_index_0_id_7d5a9546_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 837:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = __webpack_require__(63);

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = __webpack_require__(165);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'servers',
  state: {
    server: '',
    region: '',
    selected: {
      region: '',
      server: ''
    },
    EU: [],
    US: []
  },
  mutations: {
    setServerlist: function setServerlist(state, list) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(list)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var region = _step.value;

          state[region] = list[region];
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
    },
    setServer: function setServer(state, _ref) {
      var server = _ref.server,
          region = _ref.region;

      state.server = server;
      state.region = region;
    },
    selectRegion: function selectRegion(state, region) {
      state.selected.region = region;
      state.selected.server = '';
    },
    selectServer: function selectServer(state, server) {
      state.selected.server = server;
    }
  }
};

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_style_index_0_id_60a3f416_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(317);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_style_index_0_id_60a3f416_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_style_index_0_id_60a3f416_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wow_classic_vue_vue_type_style_index_0_id_60a3f416_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 961:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/search/wow-classic.vue?vue&type=template&id=b5257782&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('div',{staticClass:"field"},[_c('label',[_vm._v("Search")]),_vm._v(" "),_c('input',{ref:"input",attrs:{"placeholder":_vm.placeholder || 'Try: Black Lotus, Devilsaur Leather...',"type":"text"},domProps:{"value":_vm.input.name || _vm.input},on:{"input":_vm.fetch,"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }$event.preventDefault();if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.complete($event)},function($event){if(!$event.shiftKey){ return null; }$event.stopPropagation();}],"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.search($event)}}}),_vm._v(" "),_c('span',{staticClass:"autocomplete"},[_vm._v(_vm._s(_vm.autocomplete.name))]),_vm._v(" "),(_vm.autocomplete.category)?_c('span',{staticClass:"autocomplete-type"},[_vm._v("\n      "+_vm._s(_vm.autocomplete.category === 'Any' ? 'Search anywhere' : ("Found in " + (_vm.autocomplete.category)))+"\n    ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"tools"},_vm._l((_vm.suggestions),function(suggestion){return _c('div',{key:suggestion.uniqueName,staticClass:"suggestion",on:{"click":function($event){return _vm.search(suggestion)}}},[_c('div',{staticClass:"ico-36"},[_c('img',{attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}}),_vm._v(" "),_c('img',{staticClass:"backdrop",attrs:{"src":suggestion.imgUrl,"alt":suggestion.name}})]),_vm._v(" "),_c('div',{staticClass:"suggestion-main"},[_c('span',{staticClass:"suggestion-name"},[_vm._v(_vm._s(suggestion.name))]),_vm._v(" "),_c('span',{staticClass:"suggestion-type"},[_vm._v(_vm._s(suggestion.type))])]),_vm._v(" "),(suggestion.keyData)?_c('span',{staticClass:"suggestion-data"},[_vm._v(_vm._s(suggestion.keyData))]):_vm._e()])}),0),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/search/wow-classic.vue?vue&type=template&id=b5257782&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/ui/nav/wow-classic.vue?vue&type=template&id=60a3f416&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"row"},[_c('div',{staticClass:"col nav-l"},[_c('router-link',{attrs:{"to":("/wow-classic/" + _vm.server),"exact":""}},[_c('img',{staticClass:"logo ico-h-20",attrs:{"src":"/img/brand/nexushub-logo-typeface-wow-classic.svg","alt":"Nexushub Logo"}})])],1),_vm._v(" "),(!_vm.landingPage)?_c('div',{staticClass:"middle-content"},[_c('search',{attrs:{"placeholder":"Search items..."}},[_c('span',{staticClass:"shortcut"},[_vm._v("SHIFT + F")])]),_vm._v(" "),_c('select-server')],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"col nav-r"},[_c('notifications')],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/ui/nav/wow-classic.vue?vue&type=template&id=60a3f416&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 996:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./ui/components/wow-classic/select-server.vue?vue&type=template&id=7d5a9546&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select"},[_c('div',{staticClass:"interactive",on:{"click":_vm.toggle}},[_c('span',[_vm._v(_vm._s(_vm.serverPretty.name))]),_vm._v(" "),_c('img',{staticClass:"faction-logo",attrs:{"src":("/img/wow-classic/ui/" + (_vm.serverPretty.faction) + ".svg"),"alt":((_vm.serverPretty.faction) + " Logo")}}),_vm._v(" "),_c('img',{staticClass:"ico-h-20",attrs:{"src":"/img/ui/dropdown.svg","alt":"Dropdown"}})]),_vm._v(" "),_c('div',{staticClass:"dropdown",class:{ active: _vm.active }},[_c('div',{staticClass:"body"},[_c('span',{class:{ active: _vm.server === '' },on:{"click":function($event){return _vm.toggle()}}},[_vm._v("Select Server")]),_vm._v(" "),_c('span',{class:{ active: _vm.activeRegion === 'EU' },on:{"click":function($event){return _vm.selectRegion('EU')}}},[_vm._v("Europe")]),_vm._v(" "),_vm._l((_vm.serverlist.EU),function(s){return [_c('span',{key:s,staticClass:"server",class:{ active: _vm.serverPretty.name === s, selected: _vm.selectedRegion === 'EU' },on:{"click":function($event){return _vm.selectServer(s)}}},[_vm._v(_vm._s(s))]),_vm._v(" "),_c('div',{key:s + 'faction',staticClass:"faction",class:{ selected: _vm.selectedServer === s }},[_c('div',{staticClass:"image-wrapper",on:{"click":function($event){_vm.setServer(s, 'alliance'); _vm.toggle();}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/alliance.svg","alt":"Alliance Logo"}})]),_vm._v(" "),_c('div',{staticClass:"image-wrapper",on:{"click":function($event){_vm.setServer(s, 'horde'); _vm.toggle();}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/horde.svg","alt":"Horde Logo"}})])])]}),_vm._v(" "),_c('span',{class:{ active: _vm.activeRegion === 'US' },on:{"click":function($event){return _vm.selectRegion('US')}}},[_vm._v("United States")]),_vm._v(" "),_vm._l((_vm.serverlist.US),function(s){return [_c('span',{key:s,staticClass:"server",class:{ active: _vm.serverPretty.name === s, selected: _vm.selectedRegion === 'US' },on:{"click":function($event){return _vm.selectServer(s)}}},[_vm._v(_vm._s(s))]),_vm._v(" "),_c('div',{key:s + 'faction',staticClass:"faction",class:{ selected: _vm.selectedServer === s }},[_c('div',{staticClass:"image-wrapper",on:{"click":function($event){_vm.setServer(s, 'alliance'); _vm.toggle();}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/alliance.svg","alt":"Alliance Logo"}})]),_vm._v(" "),_c('div',{staticClass:"image-wrapper",on:{"click":function($event){_vm.setServer(s, 'horde'); _vm.toggle();}}},[_c('img',{attrs:{"src":"/img/wow-classic/ui/horde.svg","alt":"Horde Logo"}})])])]})],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./ui/components/wow-classic/select-server.vue?vue&type=template&id=7d5a9546&scoped=true&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ })

}]);