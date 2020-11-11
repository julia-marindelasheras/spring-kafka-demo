(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("nui", [], factory);
	else if(typeof exports === 'object')
		exports["nui"] = factory();
	else
		root["nui"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/js";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(26)('wks');
var uid = __webpack_require__(13);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports);
        global.index = mod.exports;
    }
})(this, function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    var NUIComponent = function () {
        function NUIComponent(element, options) {
            _classCallCheck(this, NUIComponent);

            if (!element) {
                return;
            }

            this.element = element;
            this.init(options);
        }

        _createClass(NUIComponent, [{
            key: 'once',
            value: function once(cb) {
                var optEl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.element;
                var optClassName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'enhanced';

                if (optEl.classList.contains(optClassName)) {
                    return;
                }
                optEl.classList.add(optClassName);
                cb();
            }
        }, {
            key: 'init',
            value: function init() /* options */{
                // each child should supply own init function
                return this;
            }
        }]);

        return NUIComponent;
    }();

    exports.default = NUIComponent;
    module.exports = exports['default'];
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(12);
module.exports = __webpack_require__(9) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(36);
var toPrimitive = __webpack_require__(37);
var dP = Object.defineProperty;

exports.f = __webpack_require__(9) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(22)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
__webpack_require__(59);
module.exports = __webpack_require__(3).Array.from;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(3);
var hide = __webpack_require__(4);
var redefine = __webpack_require__(24);
var ctx = __webpack_require__(14);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(38);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(19);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(26)('keys');
var uid = __webpack_require__(13);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(4);
var has = __webpack_require__(5);
var SRC = __webpack_require__(13)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(3).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(25);
var defined = __webpack_require__(17);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(5);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.constants = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var cssClasses = exports.cssClasses = {
        PARENT: 'nui-table__row--parent',
        SUB: 'nui-table__row--sub',
        COLLAPSED: 'is-collapsed',
        SORT: 'nui-table__sort-link',
        ICON_ASC: 'nui-icon-sort-asc',
        ICON_DESC: 'nui-icon-sort-desc'
    };

    var strings = exports.strings = {
        DATA_TABLE_SORT: 'aria-sort',
        CHECKABLE_TABLE: 'data-nui-table-checkable',
        SORTABLE_TABLE: 'data-nui-table-sortable',
        COLLAPSABLE_TABLE: 'data-nui-table-collapsable',
        DRAGGABLE_TABLE: 'data-nui-table-draggable'
    };
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.constants = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var validPositions = exports.validPositions = ['bottom', 'top', 'left', 'right'];

    var cssClasses = exports.cssClasses = {
        TOOLTIP: 'nui-tooltip',
        LABEL: 'nui-tooltip__label'
    };
});

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(33), __webpack_require__(44), __webpack_require__(66), __webpack_require__(68), __webpack_require__(80), __webpack_require__(69), __webpack_require__(71), __webpack_require__(73), __webpack_require__(77), __webpack_require__(78)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports, require('./component-handler'), require('./accordion'), require('./action-links'), require('./app-switcher'), require('./date-picker'), require('./list'), require('./step-progress-indicator'), require('./table'), require('./tabs'), require('./tooltip'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports, global.componentHandler, global.accordion, global.actionLinks, global.appSwitcher, global.datePicker, global.list, global.stepProgressIndicator, global.table, global.tabs, global.tooltip);
        global.index = mod.exports;
    }
})(this, function (module, exports, _componentHandler, _accordion, _actionLinks, _appSwitcher, _datePicker, _list, _stepProgressIndicator, _table, _tabs, _tooltip) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _componentHandler2 = _interopRequireDefault(_componentHandler);

    var _accordion2 = _interopRequireDefault(_accordion);

    var _actionLinks2 = _interopRequireDefault(_actionLinks);

    var _appSwitcher2 = _interopRequireDefault(_appSwitcher);

    var _datePicker2 = _interopRequireDefault(_datePicker);

    var _list2 = _interopRequireDefault(_list);

    var _stepProgressIndicator2 = _interopRequireDefault(_stepProgressIndicator);

    var _table2 = _interopRequireDefault(_table);

    var _tabs2 = _interopRequireDefault(_tabs);

    var _tooltip2 = _interopRequireDefault(_tooltip);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    /**
     * Default NUI JS component file
     */
    _componentHandler2.default.register({
        constructor: _accordion2.default,
        classAsString: 'NUIAccordion',
        cssClass: 'nui-js-accordion'
    });

    _componentHandler2.default.register({
        constructor: _actionLinks2.default,
        classAsString: 'NUIActionLinks',
        cssClass: 'nui-js-action-links'
    });

    _componentHandler2.default.register({
        constructor: _appSwitcher2.default,
        classAsString: 'NUIAppSwitcher',
        cssClass: 'nui-js-app-switcher'
    });

    _componentHandler2.default.register({
        constructor: _datePicker2.default,
        classAsString: 'NUIDatePicker',
        cssClass: 'nui-js-date-picker'
    });

    _componentHandler2.default.register({
        constructor: _list2.default,
        classAsString: 'NUIList',
        cssClass: 'nui-js-list'
    });

    _componentHandler2.default.register({
        constructor: _table2.default,
        classAsString: 'NUITable',
        cssClass: 'nui-js-table'
    });

    _componentHandler2.default.register({
        constructor: _tabs2.default,
        classAsString: 'NUITabs',
        cssClass: 'nui-js-tabs'
    });

    _componentHandler2.default.register({
        constructor: _tooltip2.default,
        classAsString: 'NUITooltip',
        cssClass: 'nui-js-tooltip'
    });

    exports.default = {
        componentHandler: _componentHandler2.default,
        Accordion: _accordion2.default,
        ActionLinks: _actionLinks2.default,
        AppSwitcher: _appSwitcher2.default,
        DatePicker: _datePicker2.default,
        List: _list2.default,
        StepProgressIndicator: _stepProgressIndicator2.default,
        Table: _table2.default,
        Tooltip: _tooltip2.default
    };
    module.exports = exports['default'];
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(34)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports, require('core-js/fn/array/find'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports, global.find);
        global.index = mod.exports;
    }
})(this, function (module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });


    var componentHandler = function () {
        var registeredComponents = [];
        var createdComponents = [];

        /**
         * Find a class by its name
         * @param  {string} name Name of class
         * @return {object}      Matching class
         */
        function findRegisteredClass(name) {
            return registeredComponents.find(function (component) {
                return component.className === name;
            });
        }

        /**
         * Register a new component
         * @param  {object} config New component config
         */
        function registerInternal(config) {
            var newConfig = {
                ClassConstructor: config.constructor,
                className: config.classAsString,
                cssClass: config.cssClass
            };

            registeredComponents.forEach(function (item) {
                if (item.cssClass === newConfig.cssClass) {
                    throw new Error('The provided cssClass has already been registered: ' + item.cssClass);
                }
            });

            var found = registeredComponents.find(function (item) {
                return item.cssClass === newConfig.cssClass;
            });

            if (!found) {
                registeredComponents.push(newConfig);
            }
        }

        /**
         * Upgrade a single element
         * @param  {Element} element DOM element to bind component
         * @param  {Object} jsClass Class to bind to element
         */
        function upgradeElementInternal(element, jsClass) {
            var classesToUpgrade = [];
            // if no JS class, scan registered classes to find
            if (!jsClass) {
                var classList = element.classList;
                registeredComponents.forEach(function (component) {
                    if (classList.contains(component.cssClass)) {
                        classesToUpgrade.push(component);
                    }
                });
            } else {
                classesToUpgrade.push(findRegisteredClass(jsClass));
            }

            classesToUpgrade.forEach(function (registeredClass) {
                element.setAttribute('data-upgraded', registeredClass.className);
                var instance = new registeredClass.ClassConstructor(element);
                createdComponents.push(instance);
            });
        }

        /**
         * Upgrades the DOM with registered components
         * @param  {Object} jsClass  Optional JS class
         * @param  {String} cssClass CSS class name
         */
        function upgradeDomInternal(jsClass, cssClass) {
            if (typeof jsClass === 'undefined' && typeof cssClass === 'undefined') {
                registeredComponents.forEach(function (component) {
                    upgradeDomInternal(component.className, component.cssClass);
                });
            } else {
                if (typeof cssClass === 'undefined') {
                    var registeredClass = findRegisteredClass(jsClass);
                    cssClass = registeredClass.cssClass; // eslint-disable-line no-param-reassign
                }

                var elements = Array.from(document.querySelectorAll('.' + cssClass));

                elements.forEach(function (element) {
                    upgradeElementInternal(element, jsClass);
                });
            }
        }

        /**
         * Attempt to upgrade all registered components at once,
         * run on window load.
         */
        function upgradeAllRegisteredInternal() {
            registeredComponents.forEach(function (component) {
                upgradeDomInternal(component.className);
            });
        }

        // Return object w/ public functions
        return {
            upgradeDom: upgradeDomInternal,
            upgradeElement: upgradeElementInternal,
            upgradeAllRegistered: upgradeAllRegisteredInternal,
            register: registerInternal
        };
    }(); /**
          * Object to handle registering and binding components, heavily
          * influenced from Material Design Lite handler.
          *
          * https://github.com/google/material-design-lite/blob/mdl-1.x/src/mdlComponentHandler.js
          *
          * @author Drew Bolles.
          */
    exports.default = componentHandler;
    module.exports = exports['default'];
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35);
module.exports = __webpack_require__(3).Array.find;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(11);
var $find = __webpack_require__(39)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(43)(KEY);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(9) && !__webpack_require__(22)(function () {
  return Object.defineProperty(__webpack_require__(23)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(14);
var IObject = __webpack_require__(25);
var toObject = __webpack_require__(16);
var toLength = __webpack_require__(18);
var asc = __webpack_require__(40);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(41);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(8);
var isArray = __webpack_require__(42);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(15);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(4)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(45), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports, require('../component'), require('./constants'), require('core-js/fn/array/from'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports, global.component, global.constants, global.from);
        global.index = mod.exports;
    }
})(this, function (module, exports, _component, _constants) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _component2 = _interopRequireDefault(_component);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function showItem(link) {
        var content = link.parentElement.nextElementSibling;

        [link, content].forEach(function (el) {
            el.setAttribute('aria-expanded', true);
        });
    }

    function toggleVisibility(link) {
        var content = link.parentElement.nextElementSibling;
        var expanded = link.getAttribute('aria-expanded') === 'true';

        [link, content].forEach(function (el) {
            el.setAttribute('aria-expanded', !expanded);
        });
    }

    function handleLinkClick(event) {
        event.preventDefault();
        var link = event.target;

        if (!link.classList.contains(_constants.cssClasses.LINK)) {
            return;
        }

        toggleVisibility(link);
    }

    var NUIAccordion = function (_NUIComponent) {
        _inherits(NUIAccordion, _NUIComponent);

        function NUIAccordion() {
            _classCallCheck(this, NUIAccordion);

            return _possibleConstructorReturn(this, (NUIAccordion.__proto__ || Object.getPrototypeOf(NUIAccordion)).apply(this, arguments));
        }

        _createClass(NUIAccordion, [{
            key: 'getTitles',
            value: function getTitles() {
                return Array.from(this.element.querySelectorAll('.' + _constants.cssClasses.TITLE));
            }
        }, {
            key: 'getContents',
            value: function getContents() {
                return Array.from(this.element.querySelectorAll('.' + _constants.cssClasses.CONTENT));
            }
        }, {
            key: 'initItem',
            value: function initItem(title) {
                var link = title.querySelector('.' + _constants.cssClasses.LINK);

                if (this.titles.indexOf(title) === 0) {
                    showItem(link);
                }

                if (!link) {
                    return;
                }

                link.addEventListener('click', handleLinkClick);
            }
        }, {
            key: 'init',
            value: function init() {
                var _this2 = this;

                this.titles = this.getTitles();
                this.contents = this.getContents();

                if (!this.titles.length > 0 || !this.contents.length > 0) {
                    return;
                }

                this.titles.forEach(function (title) {
                    _this2.once(function () {
                        return _this2.initItem(title);
                    }, title, 'nui-accordion__title--enhanced');
                });
            }
        }]);

        return NUIAccordion;
    }(_component2.default);

    exports.default = NUIAccordion;
    module.exports = exports['default'];
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.constants = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var cssClasses = exports.cssClasses = {
        TITLE: 'nui-accordion__title',
        LINK: 'nui-accordion__link',
        CONTENT: 'nui-accordion__content',
        TITLE_ACTIVE: 'nui-accordion__title--is-active',
        CONTENT_ACTIVE: 'nui-accordion__content--is-active'
    };
});

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(47)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(48)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var defined = __webpack_require__(17);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(49);
var $export = __webpack_require__(11);
var redefine = __webpack_require__(24);
var hide = __webpack_require__(4);
var has = __webpack_require__(5);
var Iterators = __webpack_require__(20);
var $iterCreate = __webpack_require__(50);
var setToStringTag = __webpack_require__(29);
var getPrototypeOf = __webpack_require__(58);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(51);
var descriptor = __webpack_require__(12);
var setToStringTag = __webpack_require__(29);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(52);
var enumBugKeys = __webpack_require__(28);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(23)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(57).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(53);

module.exports = __webpack_require__(9) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(54);
var enumBugKeys = __webpack_require__(28);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(27);
var arrayIndexOf = __webpack_require__(55)(false);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(27);
var toLength = __webpack_require__(18);
var toAbsoluteIndex = __webpack_require__(56);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(19);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(5);
var toObject = __webpack_require__(16);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(14);
var $export = __webpack_require__(11);
var toObject = __webpack_require__(16);
var call = __webpack_require__(60);
var isArrayIter = __webpack_require__(61);
var toLength = __webpack_require__(18);
var createProperty = __webpack_require__(62);
var getIterFn = __webpack_require__(63);

$export($export.S + $export.F * !__webpack_require__(65)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(20);
var ITERATOR = __webpack_require__(0)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(6);
var createDesc = __webpack_require__(12);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(64);
var ITERATOR = __webpack_require__(0)('iterator');
var Iterators = __webpack_require__(20);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15);
var TAG = __webpack_require__(0)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(67), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports, require('../component'), require('./constants'), require('core-js/fn/array/from'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports, global.component, global.constants, global.from);
        global.index = mod.exports;
    }
})(this, function (module, exports, _component, _constants) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _component2 = _interopRequireDefault(_component);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    function handleLinkToggle(link, nextActiveLink) {
        if (link === nextActiveLink) {
            link.classList.toggle(_constants.cssClasses.LINK_ACTIVE);
        } else {
            link.classList.remove(_constants.cssClasses.LINK_ACTIVE);
        }
    }

    var NUIActionLinks = function (_NUIComponent) {
        _inherits(NUIActionLinks, _NUIComponent);

        function NUIActionLinks() {
            _classCallCheck(this, NUIActionLinks);

            return _possibleConstructorReturn(this, (NUIActionLinks.__proto__ || Object.getPrototypeOf(NUIActionLinks)).apply(this, arguments));
        }

        _createClass(NUIActionLinks, [{
            key: 'toggleActiveLink',
            value: function toggleActiveLink(event) {
                var nextActiveLink = event.currentTarget;

                this.links.forEach(function (link) {
                    handleLinkToggle(link, nextActiveLink);
                });
            }
        }, {
            key: 'initActionMenu',
            value: function initActionMenu(link, actionMenu) {
                var close = actionMenu.querySelector('.' + _constants.cssClasses.CHILD_MENU_CLOSE);
                if (!close) {
                    return;
                }
                close.addEventListener('click', this.toggleActiveLink.bind(this));
            }
        }, {
            key: 'initLink',
            value: function initLink(link) {
                var actionMenu = link.parentNode.querySelector('.' + _constants.cssClasses.CHILD_MENU);

                link.addEventListener('click', this.toggleActiveLink.bind(this));

                if (actionMenu && actionMenu === link.nextElementSibling) {
                    this.initActionMenu(link, actionMenu);
                }
            }
        }, {
            key: 'init',
            value: function init() {
                var _this2 = this;

                this.links = Array.from(this.element.querySelectorAll('.' + _constants.cssClasses.LINK));

                this.links.forEach(function (link) {
                    _this2.once(function () {
                        return _this2.initLink(link);
                    }, link);
                });
            }
        }]);

        return NUIActionLinks;
    }(_component2.default);

    exports.default = NUIActionLinks;
    module.exports = exports['default'];
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.constants = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var cssClasses = exports.cssClasses = {
        LINK: 'nui-action-links__link',
        LINK_ACTIVE: 'nui-action-links__link--is-active',
        CHILD_MENU: 'nui-action-links__child-menu',
        CHILD_MENU_CLOSE: 'nui-action-links__child-menu-close'
    };
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports, require('../component'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports, global.component);
        global.index = mod.exports;
    }
})(this, function (module, exports, _component) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _component2 = _interopRequireDefault(_component);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var cssClasses = {
        APP_SWITCHER: 'nui-app-switcher'
    };

    var NUIAppSwitcher = function (_NUIComponent) {
        _inherits(NUIAppSwitcher, _NUIComponent);

        function NUIAppSwitcher() {
            _classCallCheck(this, NUIAppSwitcher);

            return _possibleConstructorReturn(this, (NUIAppSwitcher.__proto__ || Object.getPrototypeOf(NUIAppSwitcher)).apply(this, arguments));
        }

        _createClass(NUIAppSwitcher, [{
            key: 'handleClick',
            value: function handleClick(event) {
                event.preventDefault();
                var hidden = this.switcher.getAttribute('aria-hidden') === 'true';
                this.switcher.setAttribute('aria-hidden', !hidden);
            }
        }, {
            key: 'init',
            value: function init() {
                this.switcher = document.querySelector('.' + cssClasses.APP_SWITCHER);

                if (!this.switcher) {
                    return;
                }

                this.element.addEventListener('click', this.handleClick.bind(this));
            }
        }]);

        return NUIAppSwitcher;
    }(_component2.default);

    exports.default = NUIAppSwitcher;
    module.exports = exports['default'];
});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(70)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports, require('../component'), require('./constants'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports, global.component, global.constants);
        global.index = mod.exports;
    }
})(this, function (module, exports, _component, _constants) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _component2 = _interopRequireDefault(_component);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var NUIList = function (_NUIComponent) {
        _inherits(NUIList, _NUIComponent);

        function NUIList() {
            _classCallCheck(this, NUIList);

            return _possibleConstructorReturn(this, (NUIList.__proto__ || Object.getPrototypeOf(NUIList)).apply(this, arguments));
        }

        _createClass(NUIList, [{
            key: 'handleToggleSort',
            value: function handleToggleSort(event) {
                var _this2 = this;

                event.preventDefault();
                var nextSort = event.target.getAttribute('data-nui-list-sort-direction');
                this.sortStatus = nextSort;
                this.element.dataset.nuiListSort = nextSort;
                this.handleToggleSortList();

                // If they're not sorting by primary / secondary text,
                // we assume they're implementing their own sort.
                if (this.sortBy !== 'primary' && this.sortBy !== 'secondary') {
                    return;
                }

                this.rows.forEach(function (row) {
                    _this2.sorted.push(row);
                    row.remove();
                });

                this.sorted.sort(function (a, b) {
                    var aValue = a.querySelector('.nui-list__item-' + _this2.sortBy).textContent;
                    var bValue = b.querySelector('.nui-list__item-' + _this2.sortBy).textContent;

                    if (aValue > bValue) {
                        return 1;
                    } else if (aValue < bValue) {
                        return -1;
                    }
                    return 0;
                });

                if (nextSort === 'desc') {
                    this.sorted.reverse();
                }

                this.sorted.forEach(function (sortedRow) {
                    _this2.element.appendChild(sortedRow);
                });
                this.sorted = [];
            }
        }, {
            key: 'handleToggleSortList',
            value: function handleToggleSortList() {
                var hidden = this.sortList.getAttribute('aria-expanded') === 'true';
                [this.sortTrigger, this.sortList].forEach(function (el) {
                    el.setAttribute('aria-expanded', !hidden);
                });
            }
        }, {
            key: 'initSortable',
            value: function initSortable() {
                var _this3 = this;

                this.sortTrigger = this.element.querySelector('.' + _constants.cssClasses.SORT_TRIGGER);
                this.sortList = this.element.querySelector('.' + _constants.cssClasses.SORT_LIST);
                this.sortLinks = Array.from(this.element.querySelectorAll('.' + _constants.cssClasses.SORT_LINK));

                this.defaultSort = 'asc';
                this.sorted = [];
                this.sortBy = this.element.getAttribute('data-nui-list-sort-by') || 'primary';
                this.sortStatus = this.element.dataset.nuiListSort || this.defaultSort;

                if (!this.sortTrigger && this.sortLinks.length < 1) {
                    return;
                }

                this.sortTrigger.addEventListener('click', function () {
                    _this3.handleToggleSortList();
                });

                this.sortLinks.forEach(function (el) {
                    el.addEventListener('click', _this3.handleToggleSort.bind(_this3));
                });
            }
        }, {
            key: 'init',
            value: function init() {
                var classList = this.element.classList;

                this.parentNode = this.element.parentNode;
                this.rows = Array.from(this.element.querySelectorAll('.' + _constants.cssClasses.ITEM));

                if (classList.contains(_constants.cssClasses.SORTABLE)) {
                    this.once(this.initSortable.bind(this));
                }
            }
        }]);

        return NUIList;
    }(_component2.default);

    exports.default = NUIList;
    module.exports = exports['default'];
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.constants = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var cssClasses = exports.cssClasses = {
        SORT_LINK: 'nui-list__sort-link',
        SORT_LIST: 'nui-list__sort-list',
        SORT_TRIGGER: 'nui-list__sort-trigger',
        SORTABLE: 'nui-list--sortable',
        ITEM: 'nui-list__item'
    };

    var sortOptions = exports.sortOptions = [{
        key: 'asc',
        name: 'Ascending'
    }, {
        key: 'desc',
        name: 'Descending'
    }];
});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(72), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports, require('../component'), require('./constants'), require('core-js/fn/array/from'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports, global.component, global.constants, global.from);
        global.index = mod.exports;
    }
})(this, function (module, exports, _component, _constants) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _component2 = _interopRequireDefault(_component);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var NUIStepProgressIndicator = function (_NUIComponent) {
        _inherits(NUIStepProgressIndicator, _NUIComponent);

        function NUIStepProgressIndicator(element, options) {
            _classCallCheck(this, NUIStepProgressIndicator);

            if (!options) {
                throw new Error('A Step Progress Indicator must have options passed in');
            }
            return _possibleConstructorReturn(this, (NUIStepProgressIndicator.__proto__ || Object.getPrototypeOf(NUIStepProgressIndicator)).call(this, element, options));
        }

        _createClass(NUIStepProgressIndicator, [{
            key: 'buildNav',
            value: function buildNav() {
                var _this2 = this;

                var steps = this.getSteps();
                var navContainer = this.element.querySelector(this.options.navContainer);
                // In the case of dynamic content / rebuild, clear out navContainer
                navContainer.innerHTML = '';
                // For each registered step, rebuild the container
                this.options.steps.forEach(function (step, index) {
                    var stepLink = document.createElement('button');
                    stepLink.classList.add(_constants.cssClasses.NAV_ITEM);
                    stepLink.textContent = step.name;
                    stepLink.setAttribute('data-step', index + 1);
                    stepLink.setAttribute(_constants.strings.STEP_STATUS, step.status);
                    stepLink.addEventListener('click', function () {
                        _this2.jumpToStep(steps[index]);
                    });
                    navContainer.appendChild(stepLink);
                });
            }
        }, {
            key: 'getSteps',
            value: function getSteps() {
                return Array.from(this.element.querySelectorAll('.' + _constants.cssClasses.STEP));
            }
        }, {
            key: 'getNavLinks',
            value: function getNavLinks() {
                return Array.from(this.element.querySelectorAll('.' + _constants.cssClasses.NAV_LINK));
            }
        }, {
            key: 'getActiveStep',
            value: function getActiveStep() {
                // this is a public method to get the active step as a non-zero based index
                return this.activeStep + 1;
            }
        }, {
            key: 'adjustNextButton',
            value: function adjustNextButton() {
                var steps = this.getSteps();
                var nextButton = this.element.querySelector('.' + _constants.cssClasses.NEXT_BUTTON);
                var doneButtonText = this.options.doneButtonText || 'Submit';
                nextButton.textContent = this.activeStep === steps.length - 1 ? doneButtonText : 'Next';
            }
        }, {
            key: 'setNavLinkStatus',
            value: function setNavLinkStatus(status) {
                var navLinks = this.getNavLinks();
                navLinks[this.activeStep].setAttribute(_constants.strings.STEP_STATUS, status);
            }
        }, {
            key: 'hideSteps',
            value: function hideSteps() {
                var _this3 = this;

                var steps = this.getSteps();
                steps.forEach(function (step) {
                    _this3.hideStep(step);
                });
            }
        }, {
            key: 'hideStep',
            value: function hideStep(step) {
                if (Number.isInteger(step)) {
                    var steps = this.getSteps();
                    // We assume devs will use standard counts, not 0 based
                    steps[step - 1].setAttribute('aria-hidden', true);
                } else if (step.nodeName) {
                    step.setAttribute('aria-hidden', true);
                } else {
                    throw new Error('hideStep must be passed an integer or DOM element');
                }
            }
        }, {
            key: 'showStep',
            value: function showStep(step) {
                if (Number.isInteger(step)) {
                    var steps = this.getSteps();
                    // We assume devs will use standard counts, not 0 based
                    steps[step - 1].setAttribute('aria-hidden', false);
                } else if (step.nodeName) {
                    step.setAttribute('aria-hidden', false);
                } else {
                    throw new Error('showStep must be passed an integer or DOM element');
                }

                // Active isn't a permanent status, so we don't save it to our options
                this.setNavLinkStatus('active');
                // Adjust the next button text
                this.adjustNextButton();
                // Set data attr at top element to track step
                this.element.setAttribute('data-active-step', step.getAttribute('data-step'));
            }
        }, {
            key: 'toggleSteps',
            value: function toggleSteps(step) {
                this.hideSteps();
                this.showStep(step);
            }
        }, {
            key: 'completeStep',
            value: function completeStep() {
                var step = this.options.steps[this.activeStep];
                this.setNavLinkStatus('complete');
                // Mark the step complete in our options
                step.status = 'complete';
                if (step.onComplete) {
                    step.onComplete(this);
                }
            }
        }, {
            key: 'jumpToStep',
            value: function jumpToStep(step) {
                var steps = this.getSteps();
                var stepIndex = steps.indexOf(step);
                var currStep = this.options.steps[this.activeStep];
                // We grab the diff to see if we're moving forward or back and how far
                var stepDiff = stepIndex - this.activeStep;

                // Always let them jump back to steps
                if (stepDiff > 0) {
                    var stepCount = this.activeStep;
                    var allValidBetween = true;
                    var unvalidSteps = [];

                    // Iterate over steps between active and desired step, testing validation
                    do {
                        var _step = this.options.steps[stepCount];
                        if (_step.validate && !_step.validated) {
                            allValidBetween = false;
                            unvalidSteps.push(stepCount + 1);
                        }
                        stepCount++;
                    } while (stepCount < stepIndex);

                    if (!allValidBetween) {
                        var alertMessage = unvalidSteps.length > 1 ? 'Steps ' + unvalidSteps.join(', ') + ' are not valid' : 'Step ' + unvalidSteps[0] + ' is not valid';
                        alert(alertMessage);
                        return;
                    }
                }

                this.setNavLinkStatus(currStep.status);
                this.activeStep = stepIndex;
                this.toggleSteps(step);
            }
        }, {
            key: 'next',
            value: function next() {
                var steps = this.getSteps();
                var currStep = this.options.steps[this.activeStep];
                // We're on the last step, so we can't go next, but we should
                // submit / and if all steps are valid fire the global onComplete
                // callback if it exists.
                if (this.activeStep === steps.length - 1) {
                    // This is temp, but on last next, attempt to complete step.
                    // This might move to another button
                    if (currStep.validate && currStep.validated) {
                        this.completeStep();
                    } else if (currStep.validate && !currStep.validated) {
                        alert('Step ' + (this.activeStep + 1) + ' is not valid');
                    } else {
                        // we can assume no validation here
                        this.completeStep();
                    }

                    // if all steps are validated, do final stuff
                    if (this.options.steps.every(function (step) {
                        return step.validated;
                    })) {
                        if (this.options.onComplete) {
                            this.options.onComplete(this);
                        }
                    }
                    return;
                }

                if (currStep.validate && !currStep.validated) {
                    alert('Step ' + (this.activeStep + 1) + ' is not valid');
                    // Attempt the onNext callback here, even if not valid.
                    // TODO: determine if this is appropriate
                    if (this.options.onNext) {
                        this.options.onNext(this);
                    }
                    return;
                }

                this.completeStep();
                this.activeStep++;
                this.toggleSteps(steps[this.activeStep]);
                if (this.options.onNext) {
                    this.options.onNext(this);
                }
            }
        }, {
            key: 'prev',
            value: function prev() {
                if (this.activeStep === 0) {
                    return;
                }
                var steps = this.getSteps();
                var stepStatus = this.options.steps[this.activeStep].status;

                this.setNavLinkStatus(stepStatus);
                this.activeStep--;
                this.toggleSteps(steps[this.activeStep]);
                if (this.options.onPrev) {
                    this.options.onPrev(this);
                }
            }
        }, {
            key: 'hasClass',
            value: function hasClass(el, className) {
                return el.classList.contains(className);
            }
        }, {
            key: 'validateStep',
            value: function validateStep(stepIndex) {
                // We're not using 0 based index for dev sanity
                var step = this.options.steps[stepIndex - 1];
                // Only validate once
                if (step.validated) {
                    return;
                }
                step.validated = true;
                if (step.onValidated) {
                    step.onValidated(this);
                }
            }
        }, {
            key: 'invalidateStep',
            value: function invalidateStep(stepIndex) {
                var step = this.options.steps[stepIndex - 1];
                // only invalidate once
                if (!step.validated) {
                    return;
                }
                step.validated = false;
                if (step.onInvalidated) {
                    step.onInvalidated(this);
                }
            }
        }, {
            key: 'isValidStep',
            value: function isValidStep(stepIndex) {
                return this.options.steps[stepIndex - 1].validated;
            }
        }, {
            key: 'update',
            value: function update(options) {
                this.options = options;
                this.init();
            }
        }, {
            key: 'initStep',
            value: function initStep(step, index) {
                step.setAttribute('data-step', index + 1);

                var stepCount = this.options.steps.length;
                var stepsHelper = document.createElement('p');
                stepsHelper.classList.add(_constants.cssClasses.STEPS_HELPER);
                stepsHelper.textContent = 'Step ' + index + ' of ' + stepCount;
                step.insertBefore(stepsHelper, step.firstChild);
            }
        }, {
            key: 'init',
            value: function init(options) {
                var _this4 = this;

                var steps = this.getSteps();
                this.options = options;

                this.activeStep = this.options && this.options.startAtStep ? this.options.startAtStep - 1 : 0;

                steps.forEach(function (step, index) {
                    _this4.once(function () {
                        return _this4.initStep(step, index + 1);
                    }, step, 'nui-progress-indicator__content--is-enhanced');
                });

                // Add validated flags and status to steps
                if (this.options && this.options.steps) {
                    this.options.steps.forEach(function (step) {
                        if (!step.status) {
                            step.status = 'incomplete';
                        }
                        if (step.validate && !step.validated) {
                            step.validated = false;
                        }
                    });
                } else {
                    // if no steps were passed in as options bail
                    throw new Error('Please pass in a steps array in the options');
                }

                this.buildNav();

                // Show the active step
                this.showStep(steps[this.activeStep]);

                // Delegate events
                this.element.addEventListener('click', function (event) {
                    var target = event.target;
                    if (_this4.hasClass(target, _constants.cssClasses.NEXT_BUTTON)) {
                        _this4.next();
                    } else if (_this4.hasClass(target, _constants.cssClasses.PREV_BUTTON)) {
                        _this4.prev();
                    }
                });

                // Fire next on enter press, except if target is a button,
                // assume they want to keep their own func.
                this.element.addEventListener('keypress', function (event) {
                    var target = event.target;
                    if (event.key === 'Enter' && target.nodeName !== 'BUTTON') {
                        _this4.next();
                    }
                });
            }
        }]);

        return NUIStepProgressIndicator;
    }(_component2.default);

    exports.default = NUIStepProgressIndicator;
    module.exports = exports['default'];
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.constants = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var cssClasses = exports.cssClasses = {
        NAV: 'nui-step-progress-indicator__nav',
        NAV_ITEM: 'nui-step-progress-indicator__nav-item',
        CONTENT: 'nui-step-progress-indicator__content',
        ACTION: 'nui-step-progress-indicator__action',
        STEP: 'nui-step-progress-indicator__content',
        STEPS_HELPER: 'nui-step-progress-indicator__steps',
        NAV_LINK: 'nui-step-progress-indicator__nav button',
        NEXT_BUTTON: 'nui-step-progress-indicator__next',
        PREV_BUTTON: 'nui-step-progress-indicator__prev',
        CANCEL_BUTTON: 'nui-step-progress-indicator__cancel'
    };

    var strings = exports.strings = {
        STEP_STATUS: 'data-nui-step-progress-indicator-status'
    };
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(30), __webpack_require__(74), __webpack_require__(75), __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports, require('../component'), require('./constants'), require('./utils'), require('../utils'), require('core-js/fn/array/from'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports, global.component, global.constants, global.utils, global.utils, global.from);
        global.index = mod.exports;
    }
})(this, function (module, exports, _component, _constants, _utils, _utils2) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _component2 = _interopRequireDefault(_component);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var NUITable = function (_Component) {
        _inherits(NUITable, _Component);

        function NUITable() {
            _classCallCheck(this, NUITable);

            return _possibleConstructorReturn(this, (NUITable.__proto__ || Object.getPrototypeOf(NUITable)).apply(this, arguments));
        }

        _createClass(NUITable, [{
            key: 'getRows',
            value: function getRows() {
                return Array.from(this.element.querySelectorAll('tbody tr'));
            }
        }, {
            key: 'getHeader',
            value: function getHeader() {
                return this.element.querySelector('thead');
            }
        }, {
            key: 'getBody',
            value: function getBody() {
                return this.element.querySelector('tbody');
            }
        }, {
            key: 'getFooter',
            value: function getFooter() {
                return this.element.querySelector('tfoot');
            }
        }, {
            key: 'getCheckboes',
            value: function getCheckboes() {
                return Array.from(this.element.querySelectorAll('tbody [type="checkbox"]'));
            }
        }, {
            key: 'getSortHeaders',
            value: function getSortHeaders() {
                return Array.from(this.element.querySelectorAll('[aria-sort]'));
            }
        }, {
            key: 'getParentRows',
            value: function getParentRows() {
                return Array.from(this.element.querySelectorAll('.' + _constants.cssClasses.PARENT));
            }
        }, {
            key: 'setDragEl',
            value: function setDragEl(el) {
                this.dragEl = el || null;
            }
        }, {
            key: 'hasAttribute',
            value: function hasAttribute(attr) {
                if (!attr) {
                    return;
                }
                return this.element.hasAttribute(attr);
            }
        }, {
            key: 'initCheckable',
            value: function initCheckable() {
                // Grab the first checkbox in the header, should be placed in the first td
                this.checkAll = this.element.querySelector('thead [type="checkbox"]');

                if (!this.checkAll) {
                    return;
                }

                var parentColumn = this.checkAll.parentNode.parentNode;

                // Two nodes up is the column we want
                this.once(this.initCheckAll.bind(this), parentColumn, 'checkable-enhanced');
            }
        }, {
            key: 'initCollapsable',
            value: function initCollapsable() {
                var _this2 = this;

                var parents = this.getParentRows();

                parents.forEach(function (element) {
                    _this2.once(function () {
                        return (0, _utils.initParent)(element);
                    }, element, 'collapsable-enhanced');
                });
            }
        }, {
            key: 'initDraggable',
            value: function initDraggable() {
                var _this3 = this;

                var rows = this.getRows();

                this.setDragEl();

                rows.forEach(function (row) {
                    _this3.once(function () {
                        return _this3.initDraggableRow(row);
                    }, row, 'draggable-enhanced');
                });
            }
        }, {
            key: 'initSortable',
            value: function initSortable(_ref) {
                var _this4 = this;

                var customSortHandler = _ref.customSortHandler;

                this.sortHeaders = this.getSortHeaders();
                this.sorted = [];
                this.sortHandler = customSortHandler || this.defaultSortHandler;

                this.sortHeaders.forEach(function (header) {
                    _this4.once(function () {
                        return _this4.initSortHeader(header);
                    }, header);
                });
            }
        }, {
            key: 'initCheckAll',
            value: function initCheckAll() {
                this.checkAll.addEventListener('change', this.handleCheckAll.bind(this));
            }
        }, {
            key: 'handleCheckAll',
            value: function handleCheckAll() {
                var _this5 = this;

                var checkboxes = this.getCheckboes();
                checkboxes.forEach(function (checkbox) {
                    checkbox.checked = _this5.checkAll.checked; // eslint-disable-line no-param-reassign
                });
            }
        }, {
            key: 'handleDragStart',
            value: function handleDragStart(event) {
                event.dataTransfer.effectAllowed = 'move'; // eslint-disable-line no-param-reassign
                event.dataTransfer.setData('text/html', event.currentTarget.innerHTML);
                this.setDragEl(event.currentTarget);
                this.dragEl.classList.add(_constants.cssClasses.ACTIVE);
            }
        }, {
            key: 'handleDrop',
            value: function handleDrop(event) {
                event.preventDefault();

                this.dragEl.classList.remove(_constants.cssClasses.ACTIVE);
                event.currentTarget.classList.remove(_constants.cssClasses.OVER);

                if (this.dragEl === event.currentTarget) {
                    return;
                }

                this.dragEl.innerHTML = event.currentTarget.innerHTML;
                event.currentTarget.innerHTML = event.dataTransfer.getData('text/html'); // eslint-disable-line no-param-reassign
            }
        }, {
            key: 'initDraggableRow',
            value: function initDraggableRow(row) {
                var firstTd = row.querySelector('td:first-child');
                var icon = (0, _utils2.createIcon)('nui-table__reorder-icon');

                icon.textContent = 'drag_vert';

                if (firstTd) {
                    firstTd.appendChild(icon);
                }

                row.addEventListener('dragstart', this.handleDragStart.bind(this));

                row.addEventListener('dragover', function (event) {
                    event.preventDefault();
                });

                row.addEventListener('dragenter', function (event) {
                    event.preventDefault();
                    event.currentTarget.classList.add(_constants.cssClasses.OVER);
                });

                row.addEventListener('dragleave', function (event) {
                    event.preventDefault();
                    event.currentTarget.classList.remove(_constants.cssClasses.OVER);
                });

                row.addEventListener('dragend', function (event) {
                    event.preventDefault();
                });

                row.addEventListener('drop', this.handleDrop.bind(this));
            }
        }, {
            key: 'clearSorts',
            value: function clearSorts(el) {
                this.sortHeaders.forEach(function (th) {
                    if (th !== el) {
                        th.setAttribute(_constants.strings.DATA_TABLE_SORT, 'none');
                    }
                });
            }
        }, {
            key: 'defaultSortHandler',
            value: function defaultSortHandler(th, nextSort) {
                var _this6 = this;

                var body = this.getBody();
                var rows = this.getRows();

                th.setAttribute(_constants.strings.DATA_TABLE_SORT, nextSort);

                rows.forEach(function (row) {
                    _this6.sorted.push(row);
                    row.parentElement.removeChild(row);
                });

                this.sorted.sort(function (a, b) {
                    var aValue = a.querySelector('td:nth-child(' + (th.cellIndex + 1) + ')').textContent;
                    var bValue = b.querySelector('td:nth-child(' + (th.cellIndex + 1) + ')').textContent;

                    if (aValue > bValue) {
                        return 1;
                    } else if (aValue < bValue) {
                        return -1;
                    }
                    return 0;
                });

                if (nextSort === 'descending') {
                    this.sorted.reverse();
                }

                this.sorted.forEach(function (sortedRow) {
                    body.appendChild(sortedRow);
                });
                this.sorted = [];
            }
        }, {
            key: 'handleSortClick',
            value: function handleSortClick(event) {
                var th = event.currentTarget.parentNode;
                var currSort = th.getAttribute(_constants.strings.DATA_TABLE_SORT);
                var nextSort = currSort === 'ascending' ? 'descending' : 'ascending';

                event.preventDefault();

                this.clearSorts(th);
                this.sortHandler(th, nextSort);
            }
        }, {
            key: 'initSortHeader',
            value: function initSortHeader(header) {
                var iconAscending = (0, _utils2.createIcon)();
                var headerLink = header.querySelector('.' + _constants.cssClasses.SORT);
                var defaultSort = header.getAttribute(_constants.strings.DATA_TABLE_SORT);

                iconAscending.textContent = 'sort_asc';

                headerLink.appendChild(iconAscending);

                if (defaultSort !== 'none') {
                    this.sortHandler(header, defaultSort);
                }

                headerLink.addEventListener('click', this.handleSortClick.bind(this));
            }
        }, {
            key: 'update',
            value: function update(options) {
                this.init(options);
            }
        }, {
            key: 'init',
            value: function init(options) {
                var config = options || {
                    checkable: this.hasAttribute(_constants.strings.CHECKABLE_TABLE),
                    collapsable: this.hasAttribute(_constants.strings.COLLAPSABLE_TABLE),
                    draggable: this.hasAttribute(_constants.strings.DRAGGABLE_TABLE),
                    sortable: this.hasAttribute(_constants.strings.SORTABLE_TABLE)
                };

                if (config.checkable) {
                    this.initCheckable();
                }

                if (config.collapsable) {
                    this.initCollapsable();
                }

                if (config.draggable) {
                    this.initDraggable();
                }

                if (config.sortable) {
                    this.initSortable(config);
                }
            }
        }]);

        return NUITable;
    }(_component2.default);

    exports.default = NUITable;
    module.exports = exports['default'];
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(30)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./constants'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constants);
        global.utils = mod.exports;
    }
})(this, function (exports, _constants) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.initParent = initParent;


    function getChildren(tr) {
        var subs = [];
        var nextEl = tr.nextElementSibling;

        do {
            subs.push(nextEl);
            nextEl = nextEl.nextElementSibling;
        } while (nextEl && nextEl.classList.contains(_constants.cssClasses.SUB));

        return subs;
    }

    function handleParentClick(parent, children) {
        parent.classList.toggle(_constants.cssClasses.COLLAPSED);

        children.forEach(function (sub) {
            sub.classList.toggle(_constants.cssClasses.COLLAPSED);
        });
    }

    function createIcon() {
        var icon = document.createElement('span');

        icon.classList.add('nui-icon');
        icon.textContent = 'expand_more';
        return icon;
    }

    function initParent(element) {
        var firstTd = element.querySelector('td:first-child');
        var children = getChildren(element);
        var icon = createIcon();

        firstTd.appendChild(icon);

        element.addEventListener('click', function () {
            handleParentClick(element, children);
        });
    }
});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(76)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./constants'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constants);
        global.index = mod.exports;
    }
})(this, function (exports, _constants) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.createIcon = createIcon;
    function createIcon(iconName) {
        var optClassName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        var icon = document.createElement('span');
        [_constants.cssClasses.ICON, iconName].forEach(function (className) {
            icon.classList.add(className);
        });

        if (optClassName) {
            icon.classList.add(optClassName);
        }
        return icon;
    }
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.constants = mod.exports;
    }
})(this, function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var cssClasses = exports.cssClasses = {
        ICON: 'nui-icon'
    };
});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports, require('../component'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports, global.component);
        global.index = mod.exports;
    }
})(this, function (module, exports, _component) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _component2 = _interopRequireDefault(_component);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var cssClasses = {
        LINK: 'nui-tabs__link',
        LINK_ACTIVE: 'nui-tabs__link--is-active',
        CONTENT: 'nui-tabs__content',
        CONTENT_ACTIVE: 'nui-tabs__content--is-active'
    };

    var NUITabs = function (_NUIComponent) {
        _inherits(NUITabs, _NUIComponent);

        function NUITabs() {
            _classCallCheck(this, NUITabs);

            return _possibleConstructorReturn(this, (NUITabs.__proto__ || Object.getPrototypeOf(NUITabs)).apply(this, arguments));
        }

        _createClass(NUITabs, [{
            key: 'checkDefaultActive',
            value: function checkDefaultActive() {
                var defaultActive = this.defaultActive ? this.defaultActive : this.links[0];

                this.toggleActive(defaultActive);
            }
        }, {
            key: 'toggleActiveContent',
            value: function toggleActiveContent(nextActiveLink) {
                var nextActiveContent = this.element.querySelector(nextActiveLink.getAttribute('href'));
                for (var x = 0; x < this.items.length; x++) {
                    var item = this.items[x];
                    item.classList.toggle(cssClasses.CONTENT_ACTIVE, item === nextActiveContent);
                }
            }
        }, {
            key: 'toggleActive',
            value: function toggleActive(nextActiveLink) {
                for (var x = 0; x < this.links.length; x++) {
                    var link = this.links[x];
                    link.classList.toggle(cssClasses.LINK_ACTIVE, link === nextActiveLink);
                }
                this.toggleActiveContent(nextActiveLink);
            }
        }, {
            key: 'initLink',
            value: function initLink(link) {
                var _this2 = this;

                if (link.classList.contains(cssClasses.LINK_ACTIVE)) {
                    this.toggleActiveContent(link);
                    this.defaultActive = link;
                }

                link.addEventListener('click', function (event) {
                    event.preventDefault();
                    _this2.toggleActive(link);
                });
            }
        }, {
            key: 'init',
            value: function init() {
                this.links = this.element.querySelectorAll('.' + cssClasses.LINK);
                this.items = this.element.querySelectorAll('.' + cssClasses.CONTENT);
                this.defaultActive = null;

                for (var x = 0; x < this.links.length; x++) {
                    this.initLink(this.links[x]);
                }

                this.checkDefaultActive();
            }
        }]);

        return NUITabs;
    }(_component2.default);

    exports.default = NUITabs;
    module.exports = exports['default'];
});

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1), __webpack_require__(31), __webpack_require__(79)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports, require('../component'), require('./constants'), require('./utils'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports, global.component, global.constants, global.utils);
        global.index = mod.exports;
    }
})(this, function (module, exports, _component, _constants, _utils) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _component2 = _interopRequireDefault(_component);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var NUITooltip = function (_NUIComponent) {
        _inherits(NUITooltip, _NUIComponent);

        function NUITooltip() {
            _classCallCheck(this, NUITooltip);

            return _possibleConstructorReturn(this, (NUITooltip.__proto__ || Object.getPrototypeOf(NUITooltip)).apply(this, arguments));
        }

        _createClass(NUITooltip, [{
            key: 'getValidPosition',
            value: function getValidPosition() {
                var position = this.element.dataset.nuiTooltipPosition || this.defaultPosition;
                return _constants.validPositions.indexOf(position) === -1 ? this.defaultPosition : position;
            }
        }, {
            key: 'showTooltip',
            value: function showTooltip() {
                this.tooltip.setAttribute('aria-hidden', false);
            }
        }, {
            key: 'hideTooltip',
            value: function hideTooltip() {
                this.tooltip.setAttribute('aria-hidden', true);
            }
        }, {
            key: 'initTooltip',
            value: function initTooltip() {
                this.position = this.getValidPosition();
                this.tooltip = (0, _utils.createTooltip)(this.position, this.label);

                this.element.addEventListener('mouseover', this.showTooltip.bind(this));
                this.element.addEventListener('mouseleave', this.hideTooltip.bind(this));

                this.element.addEventListener('focus', this.showTooltip.bind(this));
                this.element.addEventListener('blur', this.hideTooltip.bind(this));

                this.element.appendChild(this.tooltip);
            }
        }, {
            key: 'init',
            value: function init() {
                this.defaultPosition = 'bottom';
                this.label = this.element.getAttribute('aria-label');

                if (!this.label) {
                    return;
                }

                this.once(this.initTooltip.bind(this), this.element, 'tooltip-enhanced');
            }
        }]);

        return NUITooltip;
    }(_component2.default);

    exports.default = NUITooltip;
    module.exports = exports['default'];
});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(31)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(exports, require('./constants'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.constants);
        global.utils = mod.exports;
    }
})(this, function (exports, _constants) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.createTooltip = createTooltip;
    function createTooltip(position, label) {
        var tooltip = document.createElement('span');
        var tooltipLabel = document.createElement('span');

        [_constants.cssClasses.TOOLTIP, _constants.cssClasses.TOOLTIP + '--' + position].forEach(function (className) {
            tooltip.classList.add(className);
        });

        tooltipLabel.classList.add(_constants.cssClasses.LABEL);
        tooltipLabel.innerHTML = label;

        tooltip.appendChild(tooltipLabel);

        tooltip.setAttribute('role', 'tooltip');
        tooltip.setAttribute('aria-hidden', true);

        return tooltip;
    }
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [module, exports, __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports !== "undefined") {
        factory(module, exports, require('../component'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod, mod.exports, global.component);
        global.index = mod.exports;
    }
})(this, function (module, exports, _component) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _component2 = _interopRequireDefault(_component);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var cssClasses = {
        INPUT: 'nui-date-picker__input'
    };

    var NUIDatePicker = function (_NUIComponent) {
        _inherits(NUIDatePicker, _NUIComponent);

        function NUIDatePicker() {
            _classCallCheck(this, NUIDatePicker);

            return _possibleConstructorReturn(this, (NUIDatePicker.__proto__ || Object.getPrototypeOf(NUIDatePicker)).apply(this, arguments));
        }

        _createClass(NUIDatePicker, [{
            key: 'init',
            value: function init() {
                var _this2 = this;

                if (typeof flatpickr === 'underfined') {
                    return;
                }

                this.input = this.element.querySelector('.' + cssClasses.INPUT);

                if (!this.input) {
                    return;
                }

                // allow for date, date + time, and time only
                var inputType = this.input.type;

                // Default options are for 'date' type
                var pickerOptions = {
                    dateFormat: 'm/d/Y',
                    allowInput: true
                };

                if (inputType === 'datetime-local') {
                    pickerOptions = _extends({}, pickerOptions, {
                        dateFormat: 'm/d/Y h:i K',
                        enableTime: true
                    });
                } else if (inputType === 'time') {
                    pickerOptions = _extends({}, pickerOptions, {
                        enableTime: true,
                        noCalendar: true,
                        dateFormat: 'h:i K',
                        time_24hr: false
                    });
                }

                this.once(function () {
                    return flatpickr(_this2.input, pickerOptions);
                }, this.input, 'nui-date-picker--enhanced');
            }
        }]);

        return NUIDatePicker;
    }(_component2.default);

    exports.default = NUIDatePicker;
    module.exports = exports['default'];
});

/***/ })
/******/ ]);
});