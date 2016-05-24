(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/Users/felipe/GitHub/react-inline-transition-group/demo/main.js":[function(require,module,exports){
var React = require('react');
var ReactDOM = require('react-dom');
var Transition = require('../src');

var Demo = React.createClass({
  displayName: 'Demo',

  getInitialState: function () {
    return {
      callbackMsg: '',
      count: 1
    };
  },

  _handleAdd: function () {
    this.setState(function (previousState) {
      return { count: Math.min(previousState.count + 1, 7) };
    });
  },

  _handleRemove: function () {
    this.setState(function (previousState) {
      return { count: Math.max(previousState.count - 1, 0) };
    });
  },

  _handleStartAppear: function (id) {
    this.setState({ callbackMsg: id + ' start to appear' });
  },

  _handleStartEnter: function (id) {
    this.setState({ callbackMsg: id + ' start to enter' });
  },

  _handleStartLeave: function (id) {
    this.setState({ callbackMsg: id + ' start to leave' });
  },

  _handleAppeared: function (id) {
    this.setState({ callbackMsg: id + ' appeared' });
  },

  _handleEntered: function (id) {
    this.setState({ callbackMsg: id + ' entered' });
  },

  _handleLeft: function (id) {
    this.setState({ callbackMsg: id + ' left' });
  },

  render: function () {
    var styles = {
      container: {
        height: '100%',
        width: '100%'
      },

      base: {
        background: '#FFF',
        borderRadius: '2px',
        boxSizing: 'border-box',
        height: '50px',
        marginBottom: '10px',
        padding: '10px'
      },

      appear: {
        background: '#81C784',
        transition: 'all 1000ms'
      },

      leave: {
        background: '#FFF',
        transition: 'all 500ms'
      },

      button: {
        cursor: 'pointer',
        border: 'none',
        borderRadius: '2px',
        backgroundColor: '#039BE5',
        padding: '10px 15px',
        color: '#FFF',
        fontFamily: '"Roboto", sans-serif',
        textDecoration: 'none',
        textTransform: 'uppercase',
        margin: '0px 15px 15px 0',
        outline: 'none'
      },

      callback: {
        height: '20px',
        backgroundColor: '#FFF',
        border: '1px solid #81C784',
        borderRadius: '2px',
        marginBottom: '15px',
        padding: '5px 5px 5px 5px'
      }
    };

    var elems = [];

    for (var i = 0; i < this.state.count; i++) {
      elems.push(React.createElement(
        'div',
        { key: i, id: i },
        'id: ' + i
      ));
    }

    return React.createElement(
      'div',
      { style: styles.container },
      React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { style: styles.button, onClick: this._handleAdd },
          'Add'
        ),
        React.createElement(
          'button',
          { style: styles.button, onClick: this._handleRemove },
          'Remove'
        )
      ),
      React.createElement(
        'div',
        { style: styles.callback },
        'Callback: ' + this.state.callbackMsg
      ),
      React.createElement(
        Transition,
        {
          childrenBaseStyle: styles.base,
          childrenAppearStyle: styles.appear,
          childrenEnterStyle: styles.appear,
          childrenLeaveStyle: styles.leave,
          onChildAppeared: this._handleAppeared,
          onChildEntered: this._handleEntered,
          onChildLeft: this._handleLeft,
          onChildStartAppear: this._handleStartAppear,
          onChildStartEnter: this._handleStartEnter,
          onChildStartLeave: this._handleStartLeave
        },
        elems
      )
    );
  }
});

ReactDOM.render(React.createElement(Demo, null), document.getElementById('demo'));

},{"../src":"/Users/felipe/GitHub/react-inline-transition-group/src/index.js","react":"react","react-dom":"react-dom"}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/ExecutionEnvironment.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;
},{}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/camelize.js":[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function (_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;
},{}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/camelizeStyleName.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

'use strict';

var camelize = require('./camelize');

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;
},{"./camelize":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/camelize.js"}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/emptyFunction.js":[function(require,module,exports){
"use strict";

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;
},{}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/hyphenate.js":[function(require,module,exports){
'use strict';

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;
},{}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/hyphenateStyleName.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */

'use strict';

var hyphenate = require('./hyphenate');

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;
},{"./hyphenate":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/hyphenate.js"}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/memoizeStringOnly.js":[function(require,module,exports){
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 */

'use strict';

/**
 * Memoizes the return value of a function that accepts one string argument.
 *
 * @param {function} callback
 * @return {function}
 */

function memoizeStringOnly(callback) {
  var cache = {};
  return function (string) {
    if (!cache.hasOwnProperty(string)) {
      cache[string] = callback.call(this, string);
    }
    return cache[string];
  };
}

module.exports = memoizeStringOnly;
},{}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/warning.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

var emptyFunction = require('./emptyFunction');

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  warning = function (condition, format) {
    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;
}).call(this,require('_process'))

},{"./emptyFunction":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/emptyFunction.js","_process":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/process/browser.js"}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/process/browser.js":[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = setTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    clearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        setTimeout(drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/react/lib/CSSProperty.js":[function(require,module,exports){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */

'use strict';

/**
 * CSS properties which accept numbers but are not in units of "px".
 */

var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridColumn: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,

  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function (prop) {
  prefixes.forEach(function (prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundAttachment: true,
    backgroundColor: true,
    backgroundImage: true,
    backgroundPositionX: true,
    backgroundPositionY: true,
    backgroundRepeat: true
  },
  backgroundPosition: {
    backgroundPositionX: true,
    backgroundPositionY: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  },
  outline: {
    outlineWidth: true,
    outlineStyle: true,
    outlineColor: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

module.exports = CSSProperty;
},{}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/react/lib/CSSPropertyOperations.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSPropertyOperations
 */

'use strict';

var CSSProperty = require('./CSSProperty');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
var ReactPerf = require('./ReactPerf');

var camelizeStyleName = require('fbjs/lib/camelizeStyleName');
var dangerousStyleValue = require('./dangerousStyleValue');
var hyphenateStyleName = require('fbjs/lib/hyphenateStyleName');
var memoizeStringOnly = require('fbjs/lib/memoizeStringOnly');
var warning = require('fbjs/lib/warning');

var processStyleName = memoizeStringOnly(function (styleName) {
  return hyphenateStyleName(styleName);
});

var hasShorthandPropertyBug = false;
var styleFloatAccessor = 'cssFloat';
if (ExecutionEnvironment.canUseDOM) {
  var tempStyle = document.createElement('div').style;
  try {
    // IE8 throws "Invalid argument." if resetting shorthand style properties.
    tempStyle.font = '';
  } catch (e) {
    hasShorthandPropertyBug = true;
  }
  // IE8 only supports accessing cssFloat (standard) as styleFloat
  if (document.documentElement.style.cssFloat === undefined) {
    styleFloatAccessor = 'styleFloat';
  }
}

if (process.env.NODE_ENV !== 'production') {
  // 'msTransform' is correct, but the other prefixes should be capitalized
  var badVendoredStyleNamePattern = /^(?:webkit|moz|o)[A-Z]/;

  // style values shouldn't contain a semicolon
  var badStyleValueWithSemicolonPattern = /;\s*$/;

  var warnedStyleNames = {};
  var warnedStyleValues = {};
  var warnedForNaNValue = false;

  var warnHyphenatedStyleName = function (name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported style property %s. Did you mean %s?%s', name, camelizeStyleName(name), checkRenderMessage(owner)) : void 0;
  };

  var warnBadVendoredStyleName = function (name, owner) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    process.env.NODE_ENV !== 'production' ? warning(false, 'Unsupported vendor-prefixed style property %s. Did you mean %s?%s', name, name.charAt(0).toUpperCase() + name.slice(1), checkRenderMessage(owner)) : void 0;
  };

  var warnStyleValueWithSemicolon = function (name, value, owner) {
    if (warnedStyleValues.hasOwnProperty(value) && warnedStyleValues[value]) {
      return;
    }

    warnedStyleValues[value] = true;
    process.env.NODE_ENV !== 'production' ? warning(false, 'Style property values shouldn\'t contain a semicolon.%s ' + 'Try "%s: %s" instead.', checkRenderMessage(owner), name, value.replace(badStyleValueWithSemicolonPattern, '')) : void 0;
  };

  var warnStyleValueIsNaN = function (name, value, owner) {
    if (warnedForNaNValue) {
      return;
    }

    warnedForNaNValue = true;
    process.env.NODE_ENV !== 'production' ? warning(false, '`NaN` is an invalid value for the `%s` css style property.%s', name, checkRenderMessage(owner)) : void 0;
  };

  var checkRenderMessage = function (owner) {
    if (owner) {
      var name = owner.getName();
      if (name) {
        return ' Check the render method of `' + name + '`.';
      }
    }
    return '';
  };

  /**
   * @param {string} name
   * @param {*} value
   * @param {ReactDOMComponent} component
   */
  var warnValidStyle = function (name, value, component) {
    var owner;
    if (component) {
      owner = component._currentElement._owner;
    }
    if (name.indexOf('-') > -1) {
      warnHyphenatedStyleName(name, owner);
    } else if (badVendoredStyleNamePattern.test(name)) {
      warnBadVendoredStyleName(name, owner);
    } else if (badStyleValueWithSemicolonPattern.test(value)) {
      warnStyleValueWithSemicolon(name, value, owner);
    }

    if (typeof value === 'number' && isNaN(value)) {
      warnStyleValueIsNaN(name, value, owner);
    }
  };
}

/**
 * Operations for dealing with CSS properties.
 */
var CSSPropertyOperations = {

  /**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */
  createMarkupForStyles: function (styles, component) {
    var serialized = '';
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      var styleValue = styles[styleName];
      if (process.env.NODE_ENV !== 'production') {
        warnValidStyle(styleName, styleValue, component);
      }
      if (styleValue != null) {
        serialized += processStyleName(styleName) + ':';
        serialized += dangerousStyleValue(styleName, styleValue, component) + ';';
      }
    }
    return serialized || null;
  },

  /**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   * @param {ReactDOMComponent} component
   */
  setValueForStyles: function (node, styles, component) {
    var style = node.style;
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      if (process.env.NODE_ENV !== 'production') {
        warnValidStyle(styleName, styles[styleName], component);
      }
      var styleValue = dangerousStyleValue(styleName, styles[styleName], component);
      if (styleName === 'float' || styleName === 'cssFloat') {
        styleName = styleFloatAccessor;
      }
      if (styleValue) {
        style[styleName] = styleValue;
      } else {
        var expansion = hasShorthandPropertyBug && CSSProperty.shorthandPropertyExpansions[styleName];
        if (expansion) {
          // Shorthand property that IE8 won't like unsetting, so unset each
          // component to placate it
          for (var individualStyleName in expansion) {
            style[individualStyleName] = '';
          }
        } else {
          style[styleName] = '';
        }
      }
    }
  }

};

ReactPerf.measureMethods(CSSPropertyOperations, 'CSSPropertyOperations', {
  setValueForStyles: 'setValueForStyles'
});

module.exports = CSSPropertyOperations;
}).call(this,require('_process'))

},{"./CSSProperty":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/react/lib/CSSProperty.js","./ReactPerf":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/react/lib/ReactPerf.js","./dangerousStyleValue":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/react/lib/dangerousStyleValue.js","_process":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/process/browser.js","fbjs/lib/ExecutionEnvironment":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/ExecutionEnvironment.js","fbjs/lib/camelizeStyleName":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/camelizeStyleName.js","fbjs/lib/hyphenateStyleName":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/hyphenateStyleName.js","fbjs/lib/memoizeStringOnly":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/memoizeStringOnly.js","fbjs/lib/warning":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/warning.js"}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/react/lib/ReactPerf.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPerf
 */

'use strict';

/**
 * ReactPerf is a general AOP system designed to measure performance. This
 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
 */

var ReactPerf = {
  /**
   * Boolean to enable/disable measurement. Set to false by default to prevent
   * accidental logging and perf loss.
   */
  enableMeasure: false,

  /**
   * Holds onto the measure function in use. By default, don't measure
   * anything, but we'll override this if we inject a measure function.
   */
  storedMeasure: _noMeasure,

  /**
   * @param {object} object
   * @param {string} objectName
   * @param {object<string>} methodNames
   */
  measureMethods: function (object, objectName, methodNames) {
    if (process.env.NODE_ENV !== 'production') {
      for (var key in methodNames) {
        if (!methodNames.hasOwnProperty(key)) {
          continue;
        }
        object[key] = ReactPerf.measure(objectName, methodNames[key], object[key]);
      }
    }
  },

  /**
   * Use this to wrap methods you want to measure. Zero overhead in production.
   *
   * @param {string} objName
   * @param {string} fnName
   * @param {function} func
   * @return {function}
   */
  measure: function (objName, fnName, func) {
    if (process.env.NODE_ENV !== 'production') {
      var measuredFunc = null;
      var wrapper = function () {
        if (ReactPerf.enableMeasure) {
          if (!measuredFunc) {
            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
          }
          return measuredFunc.apply(this, arguments);
        }
        return func.apply(this, arguments);
      };
      wrapper.displayName = objName + '_' + fnName;
      return wrapper;
    }
    return func;
  },

  injection: {
    /**
     * @param {function} measure
     */
    injectMeasure: function (measure) {
      ReactPerf.storedMeasure = measure;
    }
  }
};

/**
 * Simply passes through the measured function, without measuring it.
 *
 * @param {string} objName
 * @param {string} fnName
 * @param {function} func
 * @return {function}
 */
function _noMeasure(objName, fnName, func) {
  return func;
}

module.exports = ReactPerf;
}).call(this,require('_process'))

},{"_process":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/process/browser.js"}],"/Users/felipe/GitHub/react-inline-transition-group/node_modules/react/lib/dangerousStyleValue.js":[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */

'use strict';

var CSSProperty = require('./CSSProperty');
var warning = require('fbjs/lib/warning');

var isUnitlessNumber = CSSProperty.isUnitlessNumber;
var styleWarnings = {};

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value, component) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 || isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    if (process.env.NODE_ENV !== 'production') {
      if (component) {
        var owner = component._currentElement._owner;
        var ownerName = owner ? owner.getName() : null;
        if (ownerName && !styleWarnings[ownerName]) {
          styleWarnings[ownerName] = {};
        }
        var warned = false;
        if (ownerName) {
          var warnings = styleWarnings[ownerName];
          warned = warnings[name];
          if (!warned) {
            warnings[name] = true;
          }
        }
        if (!warned) {
          process.env.NODE_ENV !== 'production' ? warning(false, 'a `%s` tag (owner: `%s`) was passed a numeric string value ' + 'for CSS property `%s` (value: `%s`) which will be treated ' + 'as a unitless number in a future version of React.', component._currentElement.type, ownerName || 'unknown', name, value) : void 0;
        }
      }
    }
    value = value.trim();
  }
  return value + 'px';
}

module.exports = dangerousStyleValue;
}).call(this,require('_process'))

},{"./CSSProperty":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/react/lib/CSSProperty.js","_process":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/process/browser.js","fbjs/lib/warning":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/fbjs/lib/warning.js"}],"/Users/felipe/GitHub/react-inline-transition-group/src/index.js":[function(require,module,exports){
module.exports = require('./transition');

},{"./transition":"/Users/felipe/GitHub/react-inline-transition-group/src/transition.js"}],"/Users/felipe/GitHub/react-inline-transition-group/src/transition-container.js":[function(require,module,exports){
var React = require('react');
var ReactDOM = require('react-dom');
var CSSPropertyOperations = require('react/lib/CSSPropertyOperations');
var merge = require('./utils/merge');

var TransitionContainer = React.createClass({
  displayName: 'TransitionContainer',

  propTypes: {
    children: React.PropTypes.node,
    childrenAppearStyle: React.PropTypes.object,
    childrenBaseStyle: React.PropTypes.object,
    childrenEnterStyle: React.PropTypes.object,
    childrenLeaveStyle: React.PropTypes.object,
    id: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    onChildAppeared: React.PropTypes.func,
    onChildEntered: React.PropTypes.func,
    onChildLeft: React.PropTypes.func,
    onChildStartAppear: React.PropTypes.func,
    onChildStartEnter: React.PropTypes.func,
    onChildStartLeave: React.PropTypes.func
  },

  componentWillMount: function () {
    this._dispatchTimeout = null;
    this._callbackTimeout = null;
    this._tick = 17;
  },

  componentWillUnmount: function () {
    clearTimeout(this._dispatchTimeout);
    clearTimeout(this._callbackTimeout);
  },

  componentWillAppear: function (callback) {
    this._transition(callback, 'appear');

    if (this.props.onChildStartAppear) {
      this.props.onChildStartAppear(this.props.id);
    }
  },

  componentDidAppear: function () {
    if (this.props.onChildAppeared) {
      this.props.onChildAppeared(this.props.id);
    }

    this._appeared = true;
  },

  componentWillEnter: function (callback) {
    this._transition(callback, 'enter');

    if (this.props.onChildStartEnter) {
      this.props.onChildStartEnter(this.props.id);
    }
  },

  componentDidEnter: function () {
    if (this.props.onChildEntered) {
      this.props.onChildEntered(this.props.id);
    }
  },

  componentWillLeave: function (callback) {
    this._transition(callback, 'leave');

    if (this.props.onChildStartLeave) {
      this.props.onChildStartLeave(this.props.id);
    }
  },

  componentDidLeave: function () {
    if (this.props.onChildLeft) this.props.onChildLeft(this.props.id);
  },

  _getTransitionProperties: function (computedStyle) {
    var properties = {};

    properties.transitionDuration = computedStyle.transitionDuration || computedStyle.WebkitTransitionDuration || computedStyle.MozTransitionDuration || computedStyle.msTransitionDuration;

    properties.transitionDelay = computedStyle.transitionDelay || computedStyle.WebkitTransitionDelay || computedStyle.MozTransitionDelay || computedStyle.msTransitionDelay;

    properties.transitionProperty = computedStyle.transitionProperty || computedStyle.WebkitTransitionProperty || computedStyle.msTransitionProperty || computedStyle.MozTransitionProperty;

    return properties;
  },

  // Specs: https://www.w3.org/TR/css3-transitions/
  // A lot of assumptions could be made here, like that probably the duration
  // and delay lists are already truncated by the size of the property list
  // or that values will be returned by window.getComputedStyle in seconds,
  // but I prefer to make this function less vulnerable to changes.
  _getTransitionMaximumTime: function (property, duration, delay) {
    var durationArray = duration.split(',');
    var delayArray = delay.split(',');
    var propertyArray = property.split(',');
    var longestTime = 0;
    var re = /([0-9]*\.?[0-9]+)(m?s)/;
    var durationFactor;
    var delayFactor;
    var durationGroups;
    var delayGroups;

    for (var i = 0; i < propertyArray.length; i++) {
      durationGroups = durationArray[i].match(re);
      if (durationGroups[2] === 's') durationFactor = 1000;else durationFactor = 1;

      delayGroups = delayArray[i].match(re);
      if (delayGroups[2] === 's') delayFactor = 1000;else delayFactor = 1;

      longestTime = Math.max(parseFloat(durationGroups[1] * durationFactor + delayGroups[1] * delayFactor), longestTime);
    }

    return longestTime;
  },

  _computeNewStyle: function (phase) {
    var currentStyle;
    if (phase === 'appear') currentStyle = this.props.childrenAppearStyle;else if (phase === 'enter') currentStyle = this.props.childrenEnterStyle;else currentStyle = this.props.childrenLeaveStyle;

    return merge(this.props.childrenBaseStyle, currentStyle);
  },

  _registerCallbackTimeout: function (callback, maxTransitionTime) {
    this._callbackTimeout = setTimeout(function () {
      callback();
    }, maxTransitionTime);
  },

  _transition: function (callback, phase) {
    if (phase === 'appear' && !this.props.childrenAppearStyle || phase === 'enter' && !this.props.childrenEnterStyle || phase === 'leave' && !this.props.childrenLeaveStyle) {
      callback();
    } else {
      this._dispatchTimeout = setTimeout(this._executeTransition.bind(this, callback, phase), this._tick);
    }
  },

  _executeTransition: function (callback, phase) {
    var node = ReactDOM.findDOMNode(this);

    if (!node) return;

    CSSPropertyOperations.setValueForStyles(node, this._computeNewStyle(phase));
    var properties = this._getTransitionProperties(getComputedStyle(node));

    var maxTransitionTime = this._getTransitionMaximumTime(properties.transitionProperty, properties.transitionDuration, properties.transitionDelay);

    this._registerCallbackTimeout(callback, maxTransitionTime);
  },

  render: function () {
    var props = { style: this.props.childrenBaseStyle };

    return React.cloneElement(this.props.children, props);
  }

});

module.exports = TransitionContainer;

},{"./utils/merge":"/Users/felipe/GitHub/react-inline-transition-group/src/utils/merge.js","react":"react","react-dom":"react-dom","react/lib/CSSPropertyOperations":"/Users/felipe/GitHub/react-inline-transition-group/node_modules/react/lib/CSSPropertyOperations.js"}],"/Users/felipe/GitHub/react-inline-transition-group/src/transition.js":[function(require,module,exports){
var React = require('react');
var ReactTransitionGroup = require('react-addons-transition-group');
var TransitionContainer = require('./transition-container');

var Transition = React.createClass({
  displayName: 'Transition',

  propTypes: {
    children: React.PropTypes.node,
    childrenAppearStyle: React.PropTypes.object,
    childrenBaseStyle: React.PropTypes.object,
    childrenEnterStyle: React.PropTypes.object,
    childrenLeaveStyle: React.PropTypes.object,
    component: React.PropTypes.string,
    onChildAppeared: React.PropTypes.func,
    onChildEntered: React.PropTypes.func,
    onChildLeft: React.PropTypes.func,
    onChildStartAppear: React.PropTypes.func,
    onChildStartEnter: React.PropTypes.func,
    onChildStartLeave: React.PropTypes.func,
    style: React.PropTypes.object
  },

  getDefaultProps: function () {
    return {
      component: 'div'
    };
  },

  render: function () {
    return React.createElement(
      ReactTransitionGroup,
      {
        component: this.props.component,
        style: this.props.style
      },
      React.Children.map(this.props.children, function (child, i) {
        return React.createElement(
          TransitionContainer,
          {
            key: i,
            id: ((child || {}).props || {}).id,
            childrenBaseStyle: this.props.childrenBaseStyle,
            childrenAppearStyle: this.props.childrenAppearStyle,
            childrenEnterStyle: this.props.childrenEnterStyle,
            childrenLeaveStyle: this.props.childrenLeaveStyle,
            onChildAppeared: this.props.onChildAppeared,
            onChildEntered: this.props.onChildEntered,
            onChildLeft: this.props.onChildLeft,
            onChildStartAppear: this.props.onChildStartAppear,
            onChildStartEnter: this.props.onChildStartEnter,
            onChildStartLeave: this.props.onChildStartLeave
          },
          child
        );
      }, this)
    );
  }

});

module.exports = Transition;

},{"./transition-container":"/Users/felipe/GitHub/react-inline-transition-group/src/transition-container.js","react":"react","react-addons-transition-group":"react-addons-transition-group"}],"/Users/felipe/GitHub/react-inline-transition-group/src/utils/merge.js":[function(require,module,exports){
var merge = function () {
  var res = {};

  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i]) {
      Object.assign(res, arguments[i]);
    }
  }

  return res;
};

module.exports = merge;

},{}]},{},["/Users/felipe/GitHub/react-inline-transition-group/demo/main.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZW1vL21haW4uanMiLCJub2RlX21vZHVsZXMvZmJqcy9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJub2RlX21vZHVsZXMvZmJqcy9saWIvY2FtZWxpemUuanMiLCJub2RlX21vZHVsZXMvZmJqcy9saWIvY2FtZWxpemVTdHlsZU5hbWUuanMiLCJub2RlX21vZHVsZXMvZmJqcy9saWIvZW1wdHlGdW5jdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9mYmpzL2xpYi9oeXBoZW5hdGUuanMiLCJub2RlX21vZHVsZXMvZmJqcy9saWIvaHlwaGVuYXRlU3R5bGVOYW1lLmpzIiwibm9kZV9tb2R1bGVzL2ZianMvbGliL21lbW9pemVTdHJpbmdPbmx5LmpzIiwibm9kZV9tb2R1bGVzL2ZianMvbGliL3dhcm5pbmcuanMiLCJub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9DU1NQcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9yZWFjdC9saWIvQ1NTUHJvcGVydHlPcGVyYXRpb25zLmpzIiwibm9kZV9tb2R1bGVzL3JlYWN0L2xpYi9SZWFjdFBlcmYuanMiLCJub2RlX21vZHVsZXMvcmVhY3QvbGliL2Rhbmdlcm91c1N0eWxlVmFsdWUuanMiLCJzcmMvaW5kZXguanMiLCJzcmMvdHJhbnNpdGlvbi1jb250YWluZXIuanMiLCJzcmMvdHJhbnNpdGlvbi5qcyIsInNyYy91dGlscy9tZXJnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksUUFBUSxRQUFRLE9BQVIsQ0FBWjtBQUNBLElBQUksV0FBVyxRQUFRLFdBQVIsQ0FBZjtBQUNBLElBQUksYUFBYSxRQUFRLFFBQVIsQ0FBakI7O0FBRUEsSUFBSSxPQUFPLE1BQU0sV0FBTixDQUFrQjtBQUMzQixlQUFhLE1BRGM7O0FBRzNCLG1CQUFpQixZQUFZO0FBQzNC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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQzVNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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UCxHQUFpQixVQUFqQjs7O0FDN0RBLElBQUksUUFBUSxZQUFZO0FBQ3RCLE1BQUksTUFBTSxFQUFWOztBQUVBLE9BQUssSUFBSSxJQUFJLENBQWIsRUFBZ0IsSUFBSSxVQUFVLE1BQTlCLEVBQXNDLEdBQXRDLEVBQTJDO0FBQ3pDLFFBQUksVUFBVSxDQUFWLENBQUosRUFBa0I7QUFDaEIsYUFBTyxNQUFQLENBQWMsR0FBZCxFQUFtQixVQUFVLENBQVYsQ0FBbkI7QUFDRDtBQUNGOztBQUVELFNBQU8sR0FBUDtBQUNELENBVkQ7O0FBWUEsT0FBTyxPQUFQLEdBQWlCLEtBQWpCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgUmVhY3RET00gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcbnZhciBUcmFuc2l0aW9uID0gcmVxdWlyZSgnLi4vc3JjJyk7XG5cbnZhciBEZW1vID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0RlbW8nLFxuXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjYWxsYmFja01zZzogJycsXG4gICAgICBjb3VudDogMSxcbiAgICB9O1xuICB9LFxuXG4gIF9oYW5kbGVBZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2aW91c1N0YXRlKSB7XG4gICAgICByZXR1cm4ge2NvdW50OiBNYXRoLm1pbihwcmV2aW91c1N0YXRlLmNvdW50ICsgMSwgNyl9O1xuICAgIH0pO1xuICB9LFxuXG4gIF9oYW5kbGVSZW1vdmU6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2aW91c1N0YXRlKSB7XG4gICAgICByZXR1cm4ge2NvdW50OiBNYXRoLm1heChwcmV2aW91c1N0YXRlLmNvdW50IC0gMSwgMCl9O1xuICAgIH0pO1xuICB9LFxuXG4gIF9oYW5kbGVTdGFydEFwcGVhcjogZnVuY3Rpb24gKGlkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2FsbGJhY2tNc2c6IGlkICsgJyBzdGFydCB0byBhcHBlYXInfSk7XG4gIH0sXG5cbiAgX2hhbmRsZVN0YXJ0RW50ZXI6IGZ1bmN0aW9uIChpZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NhbGxiYWNrTXNnOiBpZCArICcgc3RhcnQgdG8gZW50ZXInfSk7XG4gIH0sXG5cbiAgX2hhbmRsZVN0YXJ0TGVhdmU6IGZ1bmN0aW9uIChpZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NhbGxiYWNrTXNnOiBpZCArICcgc3RhcnQgdG8gbGVhdmUnfSk7XG4gIH0sXG5cbiAgX2hhbmRsZUFwcGVhcmVkOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjYWxsYmFja01zZzogaWQgKyAnIGFwcGVhcmVkJ30pO1xuICB9LFxuXG4gIF9oYW5kbGVFbnRlcmVkOiBmdW5jdGlvbiAoaWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjYWxsYmFja01zZzogaWQgKyAnIGVudGVyZWQnfSk7XG4gIH0sXG5cbiAgX2hhbmRsZUxlZnQ6IGZ1bmN0aW9uIChpZCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NhbGxiYWNrTXNnOiBpZCArICcgbGVmdCd9KTtcbiAgfSxcblxuICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3R5bGVzID0ge1xuICAgICAgY29udGFpbmVyOiB7XG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgfSxcblxuICAgICAgYmFzZToge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnI0ZGRicsXG4gICAgICAgIGJvcmRlclJhZGl1czogJzJweCcsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcbiAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXG4gICAgICAgIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgIH0sXG5cbiAgICAgIGFwcGVhcjoge1xuICAgICAgICBiYWNrZ3JvdW5kOiAnIzgxQzc4NCcsXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMTAwMG1zJyxcbiAgICAgIH0sXG5cbiAgICAgIGxlYXZlOiB7XG4gICAgICAgIGJhY2tncm91bmQ6ICcjRkZGJyxcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCA1MDBtcycsXG4gICAgICB9LFxuXG4gICAgICBidXR0b246IHtcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDM5QkU1JyxcbiAgICAgICAgcGFkZGluZzogJzEwcHggMTVweCcsXG4gICAgICAgIGNvbG9yOiAnI0ZGRicsXG4gICAgICAgIGZvbnRGYW1pbHk6ICdcIlJvYm90b1wiLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXG4gICAgICAgIG1hcmdpbjogJzBweCAxNXB4IDE1cHggMCcsXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIH0sXG5cbiAgICAgIGNhbGxiYWNrOiB7XG4gICAgICAgIGhlaWdodDogJzIwcHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRkZGJyxcbiAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM4MUM3ODQnLFxuICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnLFxuICAgICAgICBtYXJnaW5Cb3R0b206ICcxNXB4JyxcbiAgICAgICAgcGFkZGluZzogJzVweCA1cHggNXB4IDVweCcsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB2YXIgZWxlbXMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5jb3VudDsgaSsrKSB7XG4gICAgICBlbGVtcy5wdXNoKFxuICAgICAgICA8ZGl2IGtleT17aX0gaWQ9e2l9PnsnaWQ6ICcgKyBpfTwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGJ1dHRvbiBzdHlsZT17c3R5bGVzLmJ1dHRvbn0gb25DbGljaz17dGhpcy5faGFuZGxlQWRkfT5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gc3R5bGU9e3N0eWxlcy5idXR0b259IG9uQ2xpY2s9e3RoaXMuX2hhbmRsZVJlbW92ZX0+XG4gICAgICAgICAgICBSZW1vdmVcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy5jYWxsYmFja30+XG4gICAgICAgICAgeydDYWxsYmFjazogJyArIHRoaXMuc3RhdGUuY2FsbGJhY2tNc2d9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VHJhbnNpdGlvblxuICAgICAgICAgIGNoaWxkcmVuQmFzZVN0eWxlPXtzdHlsZXMuYmFzZX1cbiAgICAgICAgICBjaGlsZHJlbkFwcGVhclN0eWxlPXtzdHlsZXMuYXBwZWFyfVxuICAgICAgICAgIGNoaWxkcmVuRW50ZXJTdHlsZT17c3R5bGVzLmFwcGVhcn1cbiAgICAgICAgICBjaGlsZHJlbkxlYXZlU3R5bGU9e3N0eWxlcy5sZWF2ZX1cbiAgICAgICAgICBvbkNoaWxkQXBwZWFyZWQ9e3RoaXMuX2hhbmRsZUFwcGVhcmVkfVxuICAgICAgICAgIG9uQ2hpbGRFbnRlcmVkPXt0aGlzLl9oYW5kbGVFbnRlcmVkfVxuICAgICAgICAgIG9uQ2hpbGRMZWZ0PXt0aGlzLl9oYW5kbGVMZWZ0fVxuICAgICAgICAgIG9uQ2hpbGRTdGFydEFwcGVhcj17dGhpcy5faGFuZGxlU3RhcnRBcHBlYXJ9XG4gICAgICAgICAgb25DaGlsZFN0YXJ0RW50ZXI9e3RoaXMuX2hhbmRsZVN0YXJ0RW50ZXJ9XG4gICAgICAgICAgb25DaGlsZFN0YXJ0TGVhdmU9e3RoaXMuX2hhbmRsZVN0YXJ0TGVhdmV9XG4gICAgICAgID5cbiAgICAgICAgICB7ZWxlbXN9XG4gICAgICAgIDwvVHJhbnNpdGlvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG59KTtcblxuUmVhY3RET00ucmVuZGVyKFxuICA8RGVtbyAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbW8nKVxuKTsiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5cbi8qKlxuICogU2ltcGxlLCBsaWdodHdlaWdodCBtb2R1bGUgYXNzaXN0aW5nIHdpdGggdGhlIGRldGVjdGlvbiBhbmQgY29udGV4dCBvZlxuICogV29ya2VyLiBIZWxwcyBhdm9pZCBjaXJjdWxhciBkZXBlbmRlbmNpZXMgYW5kIGFsbG93cyBjb2RlIHRvIHJlYXNvbiBhYm91dFxuICogd2hldGhlciBvciBub3QgdGhleSBhcmUgaW4gYSBXb3JrZXIsIGV2ZW4gaWYgdGhleSBuZXZlciBpbmNsdWRlIHRoZSBtYWluXG4gKiBgUmVhY3RXb3JrZXJgIGRlcGVuZGVuY3kuXG4gKi9cbnZhciBFeGVjdXRpb25FbnZpcm9ubWVudCA9IHtcblxuICBjYW5Vc2VET006IGNhblVzZURPTSxcblxuICBjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuICBjYW5Vc2VFdmVudExpc3RlbmVyczogY2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cbiAgY2FuVXNlVmlld3BvcnQ6IGNhblVzZURPTSAmJiAhIXdpbmRvdy5zY3JlZW4sXG5cbiAgaXNJbldvcmtlcjogIWNhblVzZURPTSAvLyBGb3Igbm93LCB0aGlzIGlzIHRydWUgLSBtaWdodCBjaGFuZ2UgaW4gdGhlIGZ1dHVyZS5cblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxudmFyIF9oeXBoZW5QYXR0ZXJuID0gLy0oLikvZztcblxuLyoqXG4gKiBDYW1lbGNhc2VzIGEgaHlwaGVuYXRlZCBzdHJpbmcsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBjYW1lbGl6ZSgnYmFja2dyb3VuZC1jb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kQ29sb3JcIlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2FtZWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShfaHlwaGVuUGF0dGVybiwgZnVuY3Rpb24gKF8sIGNoYXJhY3Rlcikge1xuICAgIHJldHVybiBjaGFyYWN0ZXIudG9VcHBlckNhc2UoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FtZWxpemU7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2FtZWxpemUgPSByZXF1aXJlKCcuL2NhbWVsaXplJyk7XG5cbnZhciBtc1BhdHRlcm4gPSAvXi1tcy0vO1xuXG4vKipcbiAqIENhbWVsY2FzZXMgYSBoeXBoZW5hdGVkIENTUyBwcm9wZXJ0eSBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgID4gY2FtZWxpemVTdHlsZU5hbWUoJ2JhY2tncm91bmQtY29sb3InKVxuICogICA8IFwiYmFja2dyb3VuZENvbG9yXCJcbiAqICAgPiBjYW1lbGl6ZVN0eWxlTmFtZSgnLW1vei10cmFuc2l0aW9uJylcbiAqICAgPCBcIk1velRyYW5zaXRpb25cIlxuICogICA+IGNhbWVsaXplU3R5bGVOYW1lKCctbXMtdHJhbnNpdGlvbicpXG4gKiAgIDwgXCJtc1RyYW5zaXRpb25cIlxuICpcbiAqIEFzIEFuZGkgU21pdGggc3VnZ2VzdHNcbiAqIChodHRwOi8vd3d3LmFuZGlzbWl0aC5jb20vYmxvZy8yMDEyLzAyL21vZGVybml6ci1wcmVmaXhlZC8pLCBhbiBgLW1zYCBwcmVmaXhcbiAqIGlzIGNvbnZlcnRlZCB0byBsb3dlcmNhc2UgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGNhbWVsaXplU3R5bGVOYW1lKHN0cmluZykge1xuICByZXR1cm4gY2FtZWxpemUoc3RyaW5nLnJlcGxhY2UobXNQYXR0ZXJuLCAnbXMtJykpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhbWVsaXplU3R5bGVOYW1lOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICovXG5cbmZ1bmN0aW9uIG1ha2VFbXB0eUZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBhcmc7XG4gIH07XG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBhY2NlcHRzIGFuZCBkaXNjYXJkcyBpbnB1dHM7IGl0IGhhcyBubyBzaWRlIGVmZmVjdHMuIFRoaXMgaXNcbiAqIHByaW1hcmlseSB1c2VmdWwgaWRpb21hdGljYWxseSBmb3Igb3ZlcnJpZGFibGUgZnVuY3Rpb24gZW5kcG9pbnRzIHdoaWNoXG4gKiBhbHdheXMgbmVlZCB0byBiZSBjYWxsYWJsZSwgc2luY2UgSlMgbGFja3MgYSBudWxsLWNhbGwgaWRpb20gYWxhIENvY29hLlxuICovXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cblxuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJucyA9IG1ha2VFbXB0eUZ1bmN0aW9uO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0ZhbHNlID0gbWFrZUVtcHR5RnVuY3Rpb24oZmFsc2UpO1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc1RydWUgPSBtYWtlRW1wdHlGdW5jdGlvbih0cnVlKTtcbmVtcHR5RnVuY3Rpb24udGhhdFJldHVybnNOdWxsID0gbWFrZUVtcHR5RnVuY3Rpb24obnVsbCk7XG5lbXB0eUZ1bmN0aW9uLnRoYXRSZXR1cm5zVGhpcyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXM7XG59O1xuZW1wdHlGdW5jdGlvbi50aGF0UmV0dXJuc0FyZ3VtZW50ID0gZnVuY3Rpb24gKGFyZykge1xuICByZXR1cm4gYXJnO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlbXB0eUZ1bmN0aW9uOyIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxudmFyIF91cHBlcmNhc2VQYXR0ZXJuID0gLyhbQS1aXSkvZztcblxuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBzdHJpbmcsIGZvciBleGFtcGxlOlxuICpcbiAqICAgPiBoeXBoZW5hdGUoJ2JhY2tncm91bmRDb2xvcicpXG4gKiAgIDwgXCJiYWNrZ3JvdW5kLWNvbG9yXCJcbiAqXG4gKiBGb3IgQ1NTIHN0eWxlIG5hbWVzLCB1c2UgYGh5cGhlbmF0ZVN0eWxlTmFtZWAgaW5zdGVhZCB3aGljaCB3b3JrcyBwcm9wZXJseVxuICogd2l0aCBhbGwgdmVuZG9yIHByZWZpeGVzLCBpbmNsdWRpbmcgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGh5cGhlbmF0ZShzdHJpbmcpIHtcbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKF91cHBlcmNhc2VQYXR0ZXJuLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBoZW5hdGU7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgaHlwaGVuYXRlID0gcmVxdWlyZSgnLi9oeXBoZW5hdGUnKTtcblxudmFyIG1zUGF0dGVybiA9IC9ebXMtLztcblxuLyoqXG4gKiBIeXBoZW5hdGVzIGEgY2FtZWxjYXNlZCBDU1MgcHJvcGVydHkgbmFtZSwgZm9yIGV4YW1wbGU6XG4gKlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnYmFja2dyb3VuZENvbG9yJylcbiAqICAgPCBcImJhY2tncm91bmQtY29sb3JcIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnTW96VHJhbnNpdGlvbicpXG4gKiAgIDwgXCItbW96LXRyYW5zaXRpb25cIlxuICogICA+IGh5cGhlbmF0ZVN0eWxlTmFtZSgnbXNUcmFuc2l0aW9uJylcbiAqICAgPCBcIi1tcy10cmFuc2l0aW9uXCJcbiAqXG4gKiBBcyBNb2Rlcm5penIgc3VnZ2VzdHMgKGh0dHA6Ly9tb2Rlcm5penIuY29tL2RvY3MvI3ByZWZpeGVkKSwgYW4gYG1zYCBwcmVmaXhcbiAqIGlzIGNvbnZlcnRlZCB0byBgLW1zLWAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBoeXBoZW5hdGVTdHlsZU5hbWUoc3RyaW5nKSB7XG4gIHJldHVybiBoeXBoZW5hdGUoc3RyaW5nKS5yZXBsYWNlKG1zUGF0dGVybiwgJy1tcy0nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoeXBoZW5hdGVTdHlsZU5hbWU7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEB0eXBlY2hlY2tzIHN0YXRpYy1vbmx5XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1lbW9pemVzIHRoZSByZXR1cm4gdmFsdWUgb2YgYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgb25lIHN0cmluZyBhcmd1bWVudC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybiB7ZnVuY3Rpb259XG4gKi9cblxuZnVuY3Rpb24gbWVtb2l6ZVN0cmluZ09ubHkoY2FsbGJhY2spIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgaWYgKCFjYWNoZS5oYXNPd25Qcm9wZXJ0eShzdHJpbmcpKSB7XG4gICAgICBjYWNoZVtzdHJpbmddID0gY2FsbGJhY2suY2FsbCh0aGlzLCBzdHJpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVbc3RyaW5nXTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplU3RyaW5nT25seTsiLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW1wdHlGdW5jdGlvbiA9IHJlcXVpcmUoJy4vZW1wdHlGdW5jdGlvbicpO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGVtcHR5RnVuY3Rpb247XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbiAoY29uZGl0aW9uLCBmb3JtYXQpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICsgJ21lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0ZhaWxlZCBDb21wb3NpdGUgcHJvcFR5cGU6ICcpID09PSAwKSB7XG4gICAgICByZXR1cm47IC8vIElnbm9yZSBDb21wb3NpdGVDb21wb25lbnQgcHJvcHR5cGUgY2hlY2suXG4gICAgfVxuXG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoICh4KSB7fVxuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB3YXJuaW5nOyIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxuXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBzZXRUaW1lb3V0KGRyYWluUXVldWUsIDApO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIENTU1Byb3BlcnR5XG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENTUyBwcm9wZXJ0aWVzIHdoaWNoIGFjY2VwdCBudW1iZXJzIGJ1dCBhcmUgbm90IGluIHVuaXRzIG9mIFwicHhcIi5cbiAqL1xuXG52YXIgaXNVbml0bGVzc051bWJlciA9IHtcbiAgYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IHRydWUsXG4gIGJvcmRlckltYWdlT3V0c2V0OiB0cnVlLFxuICBib3JkZXJJbWFnZVNsaWNlOiB0cnVlLFxuICBib3JkZXJJbWFnZVdpZHRoOiB0cnVlLFxuICBib3hGbGV4OiB0cnVlLFxuICBib3hGbGV4R3JvdXA6IHRydWUsXG4gIGJveE9yZGluYWxHcm91cDogdHJ1ZSxcbiAgY29sdW1uQ291bnQ6IHRydWUsXG4gIGZsZXg6IHRydWUsXG4gIGZsZXhHcm93OiB0cnVlLFxuICBmbGV4UG9zaXRpdmU6IHRydWUsXG4gIGZsZXhTaHJpbms6IHRydWUsXG4gIGZsZXhOZWdhdGl2ZTogdHJ1ZSxcbiAgZmxleE9yZGVyOiB0cnVlLFxuICBncmlkUm93OiB0cnVlLFxuICBncmlkQ29sdW1uOiB0cnVlLFxuICBmb250V2VpZ2h0OiB0cnVlLFxuICBsaW5lQ2xhbXA6IHRydWUsXG4gIGxpbmVIZWlnaHQ6IHRydWUsXG4gIG9wYWNpdHk6IHRydWUsXG4gIG9yZGVyOiB0cnVlLFxuICBvcnBoYW5zOiB0cnVlLFxuICB0YWJTaXplOiB0cnVlLFxuICB3aWRvd3M6IHRydWUsXG4gIHpJbmRleDogdHJ1ZSxcbiAgem9vbTogdHJ1ZSxcblxuICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gIGZpbGxPcGFjaXR5OiB0cnVlLFxuICBmbG9vZE9wYWNpdHk6IHRydWUsXG4gIHN0b3BPcGFjaXR5OiB0cnVlLFxuICBzdHJva2VEYXNoYXJyYXk6IHRydWUsXG4gIHN0cm9rZURhc2hvZmZzZXQ6IHRydWUsXG4gIHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG4gIHN0cm9rZU9wYWNpdHk6IHRydWUsXG4gIHN0cm9rZVdpZHRoOiB0cnVlXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcmVmaXggdmVuZG9yLXNwZWNpZmljIHByZWZpeCwgZWc6IFdlYmtpdFxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBzdHlsZSBuYW1lLCBlZzogdHJhbnNpdGlvbkR1cmF0aW9uXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHN0eWxlIG5hbWUgcHJlZml4ZWQgd2l0aCBgcHJlZml4YCwgcHJvcGVybHkgY2FtZWxDYXNlZCwgZWc6XG4gKiBXZWJraXRUcmFuc2l0aW9uRHVyYXRpb25cbiAqL1xuZnVuY3Rpb24gcHJlZml4S2V5KHByZWZpeCwga2V5KSB7XG4gIHJldHVybiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xufVxuXG4vKipcbiAqIFN1cHBvcnQgc3R5bGUgbmFtZXMgdGhhdCBtYXkgY29tZSBwYXNzZWQgaW4gcHJlZml4ZWQgYnkgYWRkaW5nIHBlcm11dGF0aW9uc1xuICogb2YgdmVuZG9yIHByZWZpeGVzLlxuICovXG52YXIgcHJlZml4ZXMgPSBbJ1dlYmtpdCcsICdtcycsICdNb3onLCAnTyddO1xuXG4vLyBVc2luZyBPYmplY3Qua2V5cyBoZXJlLCBvciBlbHNlIHRoZSB2YW5pbGxhIGZvci1pbiBsb29wIG1ha2VzIElFOCBnbyBpbnRvIGFuXG4vLyBpbmZpbml0ZSBsb29wLCBiZWNhdXNlIGl0IGl0ZXJhdGVzIG92ZXIgdGhlIG5ld2x5IGFkZGVkIHByb3BzIHRvby5cbk9iamVjdC5rZXlzKGlzVW5pdGxlc3NOdW1iZXIpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgcHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgaXNVbml0bGVzc051bWJlcltwcmVmaXhLZXkocHJlZml4LCBwcm9wKV0gPSBpc1VuaXRsZXNzTnVtYmVyW3Byb3BdO1xuICB9KTtcbn0pO1xuXG4vKipcbiAqIE1vc3Qgc3R5bGUgcHJvcGVydGllcyBjYW4gYmUgdW5zZXQgYnkgZG9pbmcgLnN0eWxlW3Byb3BdID0gJycgYnV0IElFOFxuICogZG9lc24ndCBsaWtlIGRvaW5nIHRoYXQgd2l0aCBzaG9ydGhhbmQgcHJvcGVydGllcyBzbyBmb3IgdGhlIHByb3BlcnRpZXMgdGhhdFxuICogSUU4IGJyZWFrcyBvbiwgd2hpY2ggYXJlIGxpc3RlZCBoZXJlLCB3ZSBpbnN0ZWFkIHVuc2V0IGVhY2ggb2YgdGhlXG4gKiBpbmRpdmlkdWFsIHByb3BlcnRpZXMuIFNlZSBodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMjM4NS5cbiAqIFRoZSA0LXZhbHVlICdjbG9jaycgcHJvcGVydGllcyBsaWtlIG1hcmdpbiwgcGFkZGluZywgYm9yZGVyLXdpZHRoIHNlZW0gdG9cbiAqIGJlaGF2ZSB3aXRob3V0IGFueSBwcm9ibGVtcy4gQ3VyaW91c2x5LCBsaXN0LXN0eWxlIHdvcmtzIHRvbyB3aXRob3V0IGFueVxuICogc3BlY2lhbCBwcm9kZGluZy5cbiAqL1xudmFyIHNob3J0aGFuZFByb3BlcnR5RXhwYW5zaW9ucyA9IHtcbiAgYmFja2dyb3VuZDoge1xuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiB0cnVlLFxuICAgIGJhY2tncm91bmRDb2xvcjogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IHRydWUsXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWDogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiB0cnVlLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IHRydWVcbiAgfSxcbiAgYmFja2dyb3VuZFBvc2l0aW9uOiB7XG4gICAgYmFja2dyb3VuZFBvc2l0aW9uWDogdHJ1ZSxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb25ZOiB0cnVlXG4gIH0sXG4gIGJvcmRlcjoge1xuICAgIGJvcmRlcldpZHRoOiB0cnVlLFxuICAgIGJvcmRlclN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckNvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlckJvdHRvbToge1xuICAgIGJvcmRlckJvdHRvbVdpZHRoOiB0cnVlLFxuICAgIGJvcmRlckJvdHRvbVN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlckxlZnQ6IHtcbiAgICBib3JkZXJMZWZ0V2lkdGg6IHRydWUsXG4gICAgYm9yZGVyTGVmdFN0eWxlOiB0cnVlLFxuICAgIGJvcmRlckxlZnRDb2xvcjogdHJ1ZVxuICB9LFxuICBib3JkZXJSaWdodDoge1xuICAgIGJvcmRlclJpZ2h0V2lkdGg6IHRydWUsXG4gICAgYm9yZGVyUmlnaHRTdHlsZTogdHJ1ZSxcbiAgICBib3JkZXJSaWdodENvbG9yOiB0cnVlXG4gIH0sXG4gIGJvcmRlclRvcDoge1xuICAgIGJvcmRlclRvcFdpZHRoOiB0cnVlLFxuICAgIGJvcmRlclRvcFN0eWxlOiB0cnVlLFxuICAgIGJvcmRlclRvcENvbG9yOiB0cnVlXG4gIH0sXG4gIGZvbnQ6IHtcbiAgICBmb250U3R5bGU6IHRydWUsXG4gICAgZm9udFZhcmlhbnQ6IHRydWUsXG4gICAgZm9udFdlaWdodDogdHJ1ZSxcbiAgICBmb250U2l6ZTogdHJ1ZSxcbiAgICBsaW5lSGVpZ2h0OiB0cnVlLFxuICAgIGZvbnRGYW1pbHk6IHRydWVcbiAgfSxcbiAgb3V0bGluZToge1xuICAgIG91dGxpbmVXaWR0aDogdHJ1ZSxcbiAgICBvdXRsaW5lU3R5bGU6IHRydWUsXG4gICAgb3V0bGluZUNvbG9yOiB0cnVlXG4gIH1cbn07XG5cbnZhciBDU1NQcm9wZXJ0eSA9IHtcbiAgaXNVbml0bGVzc051bWJlcjogaXNVbml0bGVzc051bWJlcixcbiAgc2hvcnRoYW5kUHJvcGVydHlFeHBhbnNpb25zOiBzaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnNcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ1NTUHJvcGVydHk7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIENTU1Byb3BlcnR5T3BlcmF0aW9uc1xuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIENTU1Byb3BlcnR5ID0gcmVxdWlyZSgnLi9DU1NQcm9wZXJ0eScpO1xudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnZmJqcy9saWIvRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcbnZhciBSZWFjdFBlcmYgPSByZXF1aXJlKCcuL1JlYWN0UGVyZicpO1xuXG52YXIgY2FtZWxpemVTdHlsZU5hbWUgPSByZXF1aXJlKCdmYmpzL2xpYi9jYW1lbGl6ZVN0eWxlTmFtZScpO1xudmFyIGRhbmdlcm91c1N0eWxlVmFsdWUgPSByZXF1aXJlKCcuL2Rhbmdlcm91c1N0eWxlVmFsdWUnKTtcbnZhciBoeXBoZW5hdGVTdHlsZU5hbWUgPSByZXF1aXJlKCdmYmpzL2xpYi9oeXBoZW5hdGVTdHlsZU5hbWUnKTtcbnZhciBtZW1vaXplU3RyaW5nT25seSA9IHJlcXVpcmUoJ2ZianMvbGliL21lbW9pemVTdHJpbmdPbmx5Jyk7XG52YXIgd2FybmluZyA9IHJlcXVpcmUoJ2ZianMvbGliL3dhcm5pbmcnKTtcblxudmFyIHByb2Nlc3NTdHlsZU5hbWUgPSBtZW1vaXplU3RyaW5nT25seShmdW5jdGlvbiAoc3R5bGVOYW1lKSB7XG4gIHJldHVybiBoeXBoZW5hdGVTdHlsZU5hbWUoc3R5bGVOYW1lKTtcbn0pO1xuXG52YXIgaGFzU2hvcnRoYW5kUHJvcGVydHlCdWcgPSBmYWxzZTtcbnZhciBzdHlsZUZsb2F0QWNjZXNzb3IgPSAnY3NzRmxvYXQnO1xuaWYgKEV4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSkge1xuICB2YXIgdGVtcFN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGU7XG4gIHRyeSB7XG4gICAgLy8gSUU4IHRocm93cyBcIkludmFsaWQgYXJndW1lbnQuXCIgaWYgcmVzZXR0aW5nIHNob3J0aGFuZCBzdHlsZSBwcm9wZXJ0aWVzLlxuICAgIHRlbXBTdHlsZS5mb250ID0gJyc7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYXNTaG9ydGhhbmRQcm9wZXJ0eUJ1ZyA9IHRydWU7XG4gIH1cbiAgLy8gSUU4IG9ubHkgc3VwcG9ydHMgYWNjZXNzaW5nIGNzc0Zsb2F0IChzdGFuZGFyZCkgYXMgc3R5bGVGbG9hdFxuICBpZiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLmNzc0Zsb2F0ID09PSB1bmRlZmluZWQpIHtcbiAgICBzdHlsZUZsb2F0QWNjZXNzb3IgPSAnc3R5bGVGbG9hdCc7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgLy8gJ21zVHJhbnNmb3JtJyBpcyBjb3JyZWN0LCBidXQgdGhlIG90aGVyIHByZWZpeGVzIHNob3VsZCBiZSBjYXBpdGFsaXplZFxuICB2YXIgYmFkVmVuZG9yZWRTdHlsZU5hbWVQYXR0ZXJuID0gL14oPzp3ZWJraXR8bW96fG8pW0EtWl0vO1xuXG4gIC8vIHN0eWxlIHZhbHVlcyBzaG91bGRuJ3QgY29udGFpbiBhIHNlbWljb2xvblxuICB2YXIgYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuID0gLztcXHMqJC87XG5cbiAgdmFyIHdhcm5lZFN0eWxlTmFtZXMgPSB7fTtcbiAgdmFyIHdhcm5lZFN0eWxlVmFsdWVzID0ge307XG4gIHZhciB3YXJuZWRGb3JOYU5WYWx1ZSA9IGZhbHNlO1xuXG4gIHZhciB3YXJuSHlwaGVuYXRlZFN0eWxlTmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBvd25lcikge1xuICAgIGlmICh3YXJuZWRTdHlsZU5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRTdHlsZU5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ1Vuc3VwcG9ydGVkIHN0eWxlIHByb3BlcnR5ICVzLiBEaWQgeW91IG1lYW4gJXM/JXMnLCBuYW1lLCBjYW1lbGl6ZVN0eWxlTmFtZShuYW1lKSwgY2hlY2tSZW5kZXJNZXNzYWdlKG93bmVyKSkgOiB2b2lkIDA7XG4gIH07XG5cbiAgdmFyIHdhcm5CYWRWZW5kb3JlZFN0eWxlTmFtZSA9IGZ1bmN0aW9uIChuYW1lLCBvd25lcikge1xuICAgIGlmICh3YXJuZWRTdHlsZU5hbWVzLmhhc093blByb3BlcnR5KG5hbWUpICYmIHdhcm5lZFN0eWxlTmFtZXNbbmFtZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRTdHlsZU5hbWVzW25hbWVdID0gdHJ1ZTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ1Vuc3VwcG9ydGVkIHZlbmRvci1wcmVmaXhlZCBzdHlsZSBwcm9wZXJ0eSAlcy4gRGlkIHlvdSBtZWFuICVzPyVzJywgbmFtZSwgbmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSksIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lcikpIDogdm9pZCAwO1xuICB9O1xuXG4gIHZhciB3YXJuU3R5bGVWYWx1ZVdpdGhTZW1pY29sb24gPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUsIG93bmVyKSB7XG4gICAgaWYgKHdhcm5lZFN0eWxlVmFsdWVzLmhhc093blByb3BlcnR5KHZhbHVlKSAmJiB3YXJuZWRTdHlsZVZhbHVlc1t2YWx1ZV0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB3YXJuZWRTdHlsZVZhbHVlc1t2YWx1ZV0gPSB0cnVlO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnU3R5bGUgcHJvcGVydHkgdmFsdWVzIHNob3VsZG5cXCd0IGNvbnRhaW4gYSBzZW1pY29sb24uJXMgJyArICdUcnkgXCIlczogJXNcIiBpbnN0ZWFkLicsIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lciksIG5hbWUsIHZhbHVlLnJlcGxhY2UoYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuLCAnJykpIDogdm9pZCAwO1xuICB9O1xuXG4gIHZhciB3YXJuU3R5bGVWYWx1ZUlzTmFOID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBvd25lcikge1xuICAgIGlmICh3YXJuZWRGb3JOYU5WYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHdhcm5lZEZvck5hTlZhbHVlID0gdHJ1ZTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gd2FybmluZyhmYWxzZSwgJ2BOYU5gIGlzIGFuIGludmFsaWQgdmFsdWUgZm9yIHRoZSBgJXNgIGNzcyBzdHlsZSBwcm9wZXJ0eS4lcycsIG5hbWUsIGNoZWNrUmVuZGVyTWVzc2FnZShvd25lcikpIDogdm9pZCAwO1xuICB9O1xuXG4gIHZhciBjaGVja1JlbmRlck1lc3NhZ2UgPSBmdW5jdGlvbiAob3duZXIpIHtcbiAgICBpZiAob3duZXIpIHtcbiAgICAgIHZhciBuYW1lID0gb3duZXIuZ2V0TmFtZSgpO1xuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICcgQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgKiBAcGFyYW0geyp9IHZhbHVlXG4gICAqIEBwYXJhbSB7UmVhY3RET01Db21wb25lbnR9IGNvbXBvbmVudFxuICAgKi9cbiAgdmFyIHdhcm5WYWxpZFN0eWxlID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlLCBjb21wb25lbnQpIHtcbiAgICB2YXIgb3duZXI7XG4gICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgb3duZXIgPSBjb21wb25lbnQuX2N1cnJlbnRFbGVtZW50Ll9vd25lcjtcbiAgICB9XG4gICAgaWYgKG5hbWUuaW5kZXhPZignLScpID4gLTEpIHtcbiAgICAgIHdhcm5IeXBoZW5hdGVkU3R5bGVOYW1lKG5hbWUsIG93bmVyKTtcbiAgICB9IGVsc2UgaWYgKGJhZFZlbmRvcmVkU3R5bGVOYW1lUGF0dGVybi50ZXN0KG5hbWUpKSB7XG4gICAgICB3YXJuQmFkVmVuZG9yZWRTdHlsZU5hbWUobmFtZSwgb3duZXIpO1xuICAgIH0gZWxzZSBpZiAoYmFkU3R5bGVWYWx1ZVdpdGhTZW1pY29sb25QYXR0ZXJuLnRlc3QodmFsdWUpKSB7XG4gICAgICB3YXJuU3R5bGVWYWx1ZVdpdGhTZW1pY29sb24obmFtZSwgdmFsdWUsIG93bmVyKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiBpc05hTih2YWx1ZSkpIHtcbiAgICAgIHdhcm5TdHlsZVZhbHVlSXNOYU4obmFtZSwgdmFsdWUsIG93bmVyKTtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogT3BlcmF0aW9ucyBmb3IgZGVhbGluZyB3aXRoIENTUyBwcm9wZXJ0aWVzLlxuICovXG52YXIgQ1NTUHJvcGVydHlPcGVyYXRpb25zID0ge1xuXG4gIC8qKlxuICAgKiBTZXJpYWxpemVzIGEgbWFwcGluZyBvZiBzdHlsZSBwcm9wZXJ0aWVzIGZvciB1c2UgYXMgaW5saW5lIHN0eWxlczpcbiAgICpcbiAgICogICA+IGNyZWF0ZU1hcmt1cEZvclN0eWxlcyh7d2lkdGg6ICcyMDBweCcsIGhlaWdodDogMH0pXG4gICAqICAgXCJ3aWR0aDoyMDBweDtoZWlnaHQ6MDtcIlxuICAgKlxuICAgKiBVbmRlZmluZWQgdmFsdWVzIGFyZSBpZ25vcmVkIHNvIHRoYXQgZGVjbGFyYXRpdmUgcHJvZ3JhbW1pbmcgaXMgZWFzaWVyLlxuICAgKiBUaGUgcmVzdWx0IHNob3VsZCBiZSBIVE1MLWVzY2FwZWQgYmVmb3JlIGluc2VydGlvbiBpbnRvIHRoZSBET00uXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdHlsZXNcbiAgICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gICAqIEByZXR1cm4gez9zdHJpbmd9XG4gICAqL1xuICBjcmVhdGVNYXJrdXBGb3JTdHlsZXM6IGZ1bmN0aW9uIChzdHlsZXMsIGNvbXBvbmVudCkge1xuICAgIHZhciBzZXJpYWxpemVkID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIHN0eWxlcykge1xuICAgICAgaWYgKCFzdHlsZXMuaGFzT3duUHJvcGVydHkoc3R5bGVOYW1lKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHZhciBzdHlsZVZhbHVlID0gc3R5bGVzW3N0eWxlTmFtZV07XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuVmFsaWRTdHlsZShzdHlsZU5hbWUsIHN0eWxlVmFsdWUsIGNvbXBvbmVudCk7XG4gICAgICB9XG4gICAgICBpZiAoc3R5bGVWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgIHNlcmlhbGl6ZWQgKz0gcHJvY2Vzc1N0eWxlTmFtZShzdHlsZU5hbWUpICsgJzonO1xuICAgICAgICBzZXJpYWxpemVkICs9IGRhbmdlcm91c1N0eWxlVmFsdWUoc3R5bGVOYW1lLCBzdHlsZVZhbHVlLCBjb21wb25lbnQpICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2VyaWFsaXplZCB8fCBudWxsO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2YWx1ZSBmb3IgbXVsdGlwbGUgc3R5bGVzIG9uIGEgbm9kZS4gIElmIGEgdmFsdWUgaXMgc3BlY2lmaWVkIGFzXG4gICAqICcnIChlbXB0eSBzdHJpbmcpLCB0aGUgY29ycmVzcG9uZGluZyBzdHlsZSBwcm9wZXJ0eSB3aWxsIGJlIHVuc2V0LlxuICAgKlxuICAgKiBAcGFyYW0ge0RPTUVsZW1lbnR9IG5vZGVcbiAgICogQHBhcmFtIHtvYmplY3R9IHN0eWxlc1xuICAgKiBAcGFyYW0ge1JlYWN0RE9NQ29tcG9uZW50fSBjb21wb25lbnRcbiAgICovXG4gIHNldFZhbHVlRm9yU3R5bGVzOiBmdW5jdGlvbiAobm9kZSwgc3R5bGVzLCBjb21wb25lbnQpIHtcbiAgICB2YXIgc3R5bGUgPSBub2RlLnN0eWxlO1xuICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBzdHlsZXMpIHtcbiAgICAgIGlmICghc3R5bGVzLmhhc093blByb3BlcnR5KHN0eWxlTmFtZSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICB3YXJuVmFsaWRTdHlsZShzdHlsZU5hbWUsIHN0eWxlc1tzdHlsZU5hbWVdLCBjb21wb25lbnQpO1xuICAgICAgfVxuICAgICAgdmFyIHN0eWxlVmFsdWUgPSBkYW5nZXJvdXNTdHlsZVZhbHVlKHN0eWxlTmFtZSwgc3R5bGVzW3N0eWxlTmFtZV0sIGNvbXBvbmVudCk7XG4gICAgICBpZiAoc3R5bGVOYW1lID09PSAnZmxvYXQnIHx8IHN0eWxlTmFtZSA9PT0gJ2Nzc0Zsb2F0Jykge1xuICAgICAgICBzdHlsZU5hbWUgPSBzdHlsZUZsb2F0QWNjZXNzb3I7XG4gICAgICB9XG4gICAgICBpZiAoc3R5bGVWYWx1ZSkge1xuICAgICAgICBzdHlsZVtzdHlsZU5hbWVdID0gc3R5bGVWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBleHBhbnNpb24gPSBoYXNTaG9ydGhhbmRQcm9wZXJ0eUJ1ZyAmJiBDU1NQcm9wZXJ0eS5zaG9ydGhhbmRQcm9wZXJ0eUV4cGFuc2lvbnNbc3R5bGVOYW1lXTtcbiAgICAgICAgaWYgKGV4cGFuc2lvbikge1xuICAgICAgICAgIC8vIFNob3J0aGFuZCBwcm9wZXJ0eSB0aGF0IElFOCB3b24ndCBsaWtlIHVuc2V0dGluZywgc28gdW5zZXQgZWFjaFxuICAgICAgICAgIC8vIGNvbXBvbmVudCB0byBwbGFjYXRlIGl0XG4gICAgICAgICAgZm9yICh2YXIgaW5kaXZpZHVhbFN0eWxlTmFtZSBpbiBleHBhbnNpb24pIHtcbiAgICAgICAgICAgIHN0eWxlW2luZGl2aWR1YWxTdHlsZU5hbWVdID0gJyc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHN0eWxlW3N0eWxlTmFtZV0gPSAnJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG59O1xuXG5SZWFjdFBlcmYubWVhc3VyZU1ldGhvZHMoQ1NTUHJvcGVydHlPcGVyYXRpb25zLCAnQ1NTUHJvcGVydHlPcGVyYXRpb25zJywge1xuICBzZXRWYWx1ZUZvclN0eWxlczogJ3NldFZhbHVlRm9yU3R5bGVzJ1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ1NTUHJvcGVydHlPcGVyYXRpb25zOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICpcbiAqIEBwcm92aWRlc01vZHVsZSBSZWFjdFBlcmZcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmVhY3RQZXJmIGlzIGEgZ2VuZXJhbCBBT1Agc3lzdGVtIGRlc2lnbmVkIHRvIG1lYXN1cmUgcGVyZm9ybWFuY2UuIFRoaXNcbiAqIG1vZHVsZSBvbmx5IGhhcyB0aGUgaG9va3M6IHNlZSBSZWFjdERlZmF1bHRQZXJmIGZvciB0aGUgYW5hbHlzaXMgdG9vbC5cbiAqL1xuXG52YXIgUmVhY3RQZXJmID0ge1xuICAvKipcbiAgICogQm9vbGVhbiB0byBlbmFibGUvZGlzYWJsZSBtZWFzdXJlbWVudC4gU2V0IHRvIGZhbHNlIGJ5IGRlZmF1bHQgdG8gcHJldmVudFxuICAgKiBhY2NpZGVudGFsIGxvZ2dpbmcgYW5kIHBlcmYgbG9zcy5cbiAgICovXG4gIGVuYWJsZU1lYXN1cmU6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBIb2xkcyBvbnRvIHRoZSBtZWFzdXJlIGZ1bmN0aW9uIGluIHVzZS4gQnkgZGVmYXVsdCwgZG9uJ3QgbWVhc3VyZVxuICAgKiBhbnl0aGluZywgYnV0IHdlJ2xsIG92ZXJyaWRlIHRoaXMgaWYgd2UgaW5qZWN0IGEgbWVhc3VyZSBmdW5jdGlvbi5cbiAgICovXG4gIHN0b3JlZE1lYXN1cmU6IF9ub01lYXN1cmUsXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvYmplY3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IG9iamVjdE5hbWVcbiAgICogQHBhcmFtIHtvYmplY3Q8c3RyaW5nPn0gbWV0aG9kTmFtZXNcbiAgICovXG4gIG1lYXN1cmVNZXRob2RzOiBmdW5jdGlvbiAob2JqZWN0LCBvYmplY3ROYW1lLCBtZXRob2ROYW1lcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gbWV0aG9kTmFtZXMpIHtcbiAgICAgICAgaWYgKCFtZXRob2ROYW1lcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgb2JqZWN0W2tleV0gPSBSZWFjdFBlcmYubWVhc3VyZShvYmplY3ROYW1lLCBtZXRob2ROYW1lc1trZXldLCBvYmplY3Rba2V5XSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBVc2UgdGhpcyB0byB3cmFwIG1ldGhvZHMgeW91IHdhbnQgdG8gbWVhc3VyZS4gWmVybyBvdmVyaGVhZCBpbiBwcm9kdWN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gb2JqTmFtZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gZm5OYW1lXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmNcbiAgICogQHJldHVybiB7ZnVuY3Rpb259XG4gICAqL1xuICBtZWFzdXJlOiBmdW5jdGlvbiAob2JqTmFtZSwgZm5OYW1lLCBmdW5jKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtZWFzdXJlZEZ1bmMgPSBudWxsO1xuICAgICAgdmFyIHdyYXBwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChSZWFjdFBlcmYuZW5hYmxlTWVhc3VyZSkge1xuICAgICAgICAgIGlmICghbWVhc3VyZWRGdW5jKSB7XG4gICAgICAgICAgICBtZWFzdXJlZEZ1bmMgPSBSZWFjdFBlcmYuc3RvcmVkTWVhc3VyZShvYmpOYW1lLCBmbk5hbWUsIGZ1bmMpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbWVhc3VyZWRGdW5jLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICB3cmFwcGVyLmRpc3BsYXlOYW1lID0gb2JqTmFtZSArICdfJyArIGZuTmFtZTtcbiAgICAgIHJldHVybiB3cmFwcGVyO1xuICAgIH1cbiAgICByZXR1cm4gZnVuYztcbiAgfSxcblxuICBpbmplY3Rpb246IHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBtZWFzdXJlXG4gICAgICovXG4gICAgaW5qZWN0TWVhc3VyZTogZnVuY3Rpb24gKG1lYXN1cmUpIHtcbiAgICAgIFJlYWN0UGVyZi5zdG9yZWRNZWFzdXJlID0gbWVhc3VyZTtcbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2ltcGx5IHBhc3NlcyB0aHJvdWdoIHRoZSBtZWFzdXJlZCBmdW5jdGlvbiwgd2l0aG91dCBtZWFzdXJpbmcgaXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG9iak5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBmbk5hbWVcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmNcbiAqIEByZXR1cm4ge2Z1bmN0aW9ufVxuICovXG5mdW5jdGlvbiBfbm9NZWFzdXJlKG9iak5hbWUsIGZuTmFtZSwgZnVuYykge1xuICByZXR1cm4gZnVuYztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFBlcmY7IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKlxuICogQHByb3ZpZGVzTW9kdWxlIGRhbmdlcm91c1N0eWxlVmFsdWVcbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBDU1NQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vQ1NTUHJvcGVydHknKTtcbnZhciB3YXJuaW5nID0gcmVxdWlyZSgnZmJqcy9saWIvd2FybmluZycpO1xuXG52YXIgaXNVbml0bGVzc051bWJlciA9IENTU1Byb3BlcnR5LmlzVW5pdGxlc3NOdW1iZXI7XG52YXIgc3R5bGVXYXJuaW5ncyA9IHt9O1xuXG4vKipcbiAqIENvbnZlcnQgYSB2YWx1ZSBpbnRvIHRoZSBwcm9wZXIgY3NzIHdyaXRhYmxlIHZhbHVlLiBUaGUgc3R5bGUgbmFtZSBgbmFtZWBcbiAqIHNob3VsZCBiZSBsb2dpY2FsIChubyBoeXBoZW5zKSwgYXMgc3BlY2lmaWVkXG4gKiBpbiBgQ1NTUHJvcGVydHkuaXNVbml0bGVzc051bWJlcmAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgQ1NTIHByb3BlcnR5IG5hbWUgc3VjaCBhcyBgdG9wTWFyZ2luYC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQ1NTIHByb3BlcnR5IHZhbHVlIHN1Y2ggYXMgYDEwcHhgLlxuICogQHBhcmFtIHtSZWFjdERPTUNvbXBvbmVudH0gY29tcG9uZW50XG4gKiBAcmV0dXJuIHtzdHJpbmd9IE5vcm1hbGl6ZWQgc3R5bGUgdmFsdWUgd2l0aCBkaW1lbnNpb25zIGFwcGxpZWQuXG4gKi9cbmZ1bmN0aW9uIGRhbmdlcm91c1N0eWxlVmFsdWUobmFtZSwgdmFsdWUsIGNvbXBvbmVudCkge1xuICAvLyBOb3RlIHRoYXQgd2UndmUgcmVtb3ZlZCBlc2NhcGVUZXh0Rm9yQnJvd3NlcigpIGNhbGxzIGhlcmUgc2luY2UgdGhlXG4gIC8vIHdob2xlIHN0cmluZyB3aWxsIGJlIGVzY2FwZWQgd2hlbiB0aGUgYXR0cmlidXRlIGlzIGluamVjdGVkIGludG9cbiAgLy8gdGhlIG1hcmt1cC4gSWYgeW91IHByb3ZpZGUgdW5zYWZlIHVzZXIgZGF0YSBoZXJlIHRoZXkgY2FuIGluamVjdFxuICAvLyBhcmJpdHJhcnkgQ1NTIHdoaWNoIG1heSBiZSBwcm9ibGVtYXRpYyAoSSBjb3VsZG4ndCByZXBybyB0aGlzKTpcbiAgLy8gaHR0cHM6Ly93d3cub3dhc3Aub3JnL2luZGV4LnBocC9YU1NfRmlsdGVyX0V2YXNpb25fQ2hlYXRfU2hlZXRcbiAgLy8gaHR0cDovL3d3dy50aGVzcGFubmVyLmNvLnVrLzIwMDcvMTEvMjYvdWx0aW1hdGUteHNzLWNzcy1pbmplY3Rpb24vXG4gIC8vIFRoaXMgaXMgbm90IGFuIFhTUyBob2xlIGJ1dCBpbnN0ZWFkIGEgcG90ZW50aWFsIENTUyBpbmplY3Rpb24gaXNzdWVcbiAgLy8gd2hpY2ggaGFzIGxlYWQgdG8gYSBncmVhdGVyIGRpc2N1c3Npb24gYWJvdXQgaG93IHdlJ3JlIGdvaW5nIHRvXG4gIC8vIHRydXN0IFVSTHMgbW92aW5nIGZvcndhcmQuIFNlZSAjMjExNTkwMVxuXG4gIHZhciBpc0VtcHR5ID0gdmFsdWUgPT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyB8fCB2YWx1ZSA9PT0gJyc7XG4gIGlmIChpc0VtcHR5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgdmFyIGlzTm9uTnVtZXJpYyA9IGlzTmFOKHZhbHVlKTtcbiAgaWYgKGlzTm9uTnVtZXJpYyB8fCB2YWx1ZSA9PT0gMCB8fCBpc1VuaXRsZXNzTnVtYmVyLmhhc093blByb3BlcnR5KG5hbWUpICYmIGlzVW5pdGxlc3NOdW1iZXJbbmFtZV0pIHtcbiAgICByZXR1cm4gJycgKyB2YWx1ZTsgLy8gY2FzdCB0byBzdHJpbmdcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgdmFyIG93bmVyID0gY29tcG9uZW50Ll9jdXJyZW50RWxlbWVudC5fb3duZXI7XG4gICAgICAgIHZhciBvd25lck5hbWUgPSBvd25lciA/IG93bmVyLmdldE5hbWUoKSA6IG51bGw7XG4gICAgICAgIGlmIChvd25lck5hbWUgJiYgIXN0eWxlV2FybmluZ3Nbb3duZXJOYW1lXSkge1xuICAgICAgICAgIHN0eWxlV2FybmluZ3Nbb3duZXJOYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHZhciB3YXJuZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKG93bmVyTmFtZSkge1xuICAgICAgICAgIHZhciB3YXJuaW5ncyA9IHN0eWxlV2FybmluZ3Nbb3duZXJOYW1lXTtcbiAgICAgICAgICB3YXJuZWQgPSB3YXJuaW5nc1tuYW1lXTtcbiAgICAgICAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgICAgICAgd2FybmluZ3NbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoIXdhcm5lZCkge1xuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyB3YXJuaW5nKGZhbHNlLCAnYSBgJXNgIHRhZyAob3duZXI6IGAlc2ApIHdhcyBwYXNzZWQgYSBudW1lcmljIHN0cmluZyB2YWx1ZSAnICsgJ2ZvciBDU1MgcHJvcGVydHkgYCVzYCAodmFsdWU6IGAlc2ApIHdoaWNoIHdpbGwgYmUgdHJlYXRlZCAnICsgJ2FzIGEgdW5pdGxlc3MgbnVtYmVyIGluIGEgZnV0dXJlIHZlcnNpb24gb2YgUmVhY3QuJywgY29tcG9uZW50Ll9jdXJyZW50RWxlbWVudC50eXBlLCBvd25lck5hbWUgfHwgJ3Vua25vd24nLCBuYW1lLCB2YWx1ZSkgOiB2b2lkIDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlICsgJ3B4Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkYW5nZXJvdXNTdHlsZVZhbHVlOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi90cmFuc2l0aW9uJyk7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIENTU1Byb3BlcnR5T3BlcmF0aW9ucyA9IHJlcXVpcmUoJ3JlYWN0L2xpYi9DU1NQcm9wZXJ0eU9wZXJhdGlvbnMnKTtcbnZhciBtZXJnZSA9IHJlcXVpcmUoJy4vdXRpbHMvbWVyZ2UnKTtcblxudmFyIFRyYW5zaXRpb25Db250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVHJhbnNpdGlvbkNvbnRhaW5lcicsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAgIGNoaWxkcmVuQXBwZWFyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgY2hpbGRyZW5CYXNlU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgY2hpbGRyZW5FbnRlclN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGNoaWxkcmVuTGVhdmVTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBpZDogUmVhY3QuUHJvcFR5cGVzLm9uZU9mVHlwZShcbiAgICAgIFtSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLCBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyXVxuICAgICksXG4gICAgb25DaGlsZEFwcGVhcmVkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoaWxkRW50ZXJlZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGlsZExlZnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hpbGRTdGFydEFwcGVhcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGlsZFN0YXJ0RW50ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hpbGRTdGFydExlYXZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgfSxcblxuICBjb21wb25lbnRXaWxsTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9kaXNwYXRjaFRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuX2NhbGxiYWNrVGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5fdGljayA9IDE3O1xuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2Rpc3BhdGNoVGltZW91dCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX2NhbGxiYWNrVGltZW91dCk7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbEFwcGVhcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fdHJhbnNpdGlvbihjYWxsYmFjaywgJ2FwcGVhcicpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGlsZFN0YXJ0QXBwZWFyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hpbGRTdGFydEFwcGVhcih0aGlzLnByb3BzLmlkKTtcbiAgICB9XG4gIH0sXG5cbiAgY29tcG9uZW50RGlkQXBwZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGlsZEFwcGVhcmVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hpbGRBcHBlYXJlZCh0aGlzLnByb3BzLmlkKTtcbiAgICB9XG5cbiAgICB0aGlzLl9hcHBlYXJlZCA9IHRydWU7XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbEVudGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICB0aGlzLl90cmFuc2l0aW9uKGNhbGxiYWNrLCAnZW50ZXInKTtcblxuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hpbGRTdGFydEVudGVyKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hpbGRTdGFydEVudGVyKHRoaXMucHJvcHMuaWQpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnREaWRFbnRlcjogZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hpbGRFbnRlcmVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hpbGRFbnRlcmVkKHRoaXMucHJvcHMuaWQpO1xuICAgIH1cbiAgfSxcblxuICBjb21wb25lbnRXaWxsTGVhdmU6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgIHRoaXMuX3RyYW5zaXRpb24oY2FsbGJhY2ssICdsZWF2ZScpO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25DaGlsZFN0YXJ0TGVhdmUpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGlsZFN0YXJ0TGVhdmUodGhpcy5wcm9wcy5pZCk7XG4gICAgfVxuICB9LFxuXG4gIGNvbXBvbmVudERpZExlYXZlOiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGlsZExlZnQpIHRoaXMucHJvcHMub25DaGlsZExlZnQodGhpcy5wcm9wcy5pZCk7XG4gIH0sXG5cbiAgX2dldFRyYW5zaXRpb25Qcm9wZXJ0aWVzOiBmdW5jdGlvbiAoY29tcHV0ZWRTdHlsZSkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0ge307XG5cbiAgICBwcm9wZXJ0aWVzLnRyYW5zaXRpb25EdXJhdGlvbiA9IGNvbXB1dGVkU3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uIHx8XG4gICAgICBjb21wdXRlZFN0eWxlLldlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiB8fFxuICAgICAgY29tcHV0ZWRTdHlsZS5Nb3pUcmFuc2l0aW9uRHVyYXRpb24gfHxcbiAgICAgIGNvbXB1dGVkU3R5bGUubXNUcmFuc2l0aW9uRHVyYXRpb247XG5cbiAgICBwcm9wZXJ0aWVzLnRyYW5zaXRpb25EZWxheSA9IGNvbXB1dGVkU3R5bGUudHJhbnNpdGlvbkRlbGF5IHx8XG4gICAgICBjb21wdXRlZFN0eWxlLldlYmtpdFRyYW5zaXRpb25EZWxheSB8fFxuICAgICAgY29tcHV0ZWRTdHlsZS5Nb3pUcmFuc2l0aW9uRGVsYXkgfHxcbiAgICAgIGNvbXB1dGVkU3R5bGUubXNUcmFuc2l0aW9uRGVsYXk7XG5cbiAgICBwcm9wZXJ0aWVzLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGNvbXB1dGVkU3R5bGUudHJhbnNpdGlvblByb3BlcnR5IHx8XG4gICAgICBjb21wdXRlZFN0eWxlLldlYmtpdFRyYW5zaXRpb25Qcm9wZXJ0eSB8fFxuICAgICAgY29tcHV0ZWRTdHlsZS5tc1RyYW5zaXRpb25Qcm9wZXJ0eSB8fFxuICAgICAgY29tcHV0ZWRTdHlsZS5Nb3pUcmFuc2l0aW9uUHJvcGVydHk7XG5cbiAgICByZXR1cm4gcHJvcGVydGllcztcbiAgfSxcblxuICAvLyBTcGVjczogaHR0cHM6Ly93d3cudzMub3JnL1RSL2NzczMtdHJhbnNpdGlvbnMvXG4gIC8vIEEgbG90IG9mIGFzc3VtcHRpb25zIGNvdWxkIGJlIG1hZGUgaGVyZSwgbGlrZSB0aGF0IHByb2JhYmx5IHRoZSBkdXJhdGlvblxuICAvLyBhbmQgZGVsYXkgbGlzdHMgYXJlIGFscmVhZHkgdHJ1bmNhdGVkIGJ5IHRoZSBzaXplIG9mIHRoZSBwcm9wZXJ0eSBsaXN0XG4gIC8vIG9yIHRoYXQgdmFsdWVzIHdpbGwgYmUgcmV0dXJuZWQgYnkgd2luZG93LmdldENvbXB1dGVkU3R5bGUgaW4gc2Vjb25kcyxcbiAgLy8gYnV0IEkgcHJlZmVyIHRvIG1ha2UgdGhpcyBmdW5jdGlvbiBsZXNzIHZ1bG5lcmFibGUgdG8gY2hhbmdlcy5cbiAgX2dldFRyYW5zaXRpb25NYXhpbXVtVGltZTogZnVuY3Rpb24gKHByb3BlcnR5LCBkdXJhdGlvbiwgZGVsYXkpIHtcbiAgICB2YXIgZHVyYXRpb25BcnJheSA9IGR1cmF0aW9uLnNwbGl0KCcsJyk7XG4gICAgdmFyIGRlbGF5QXJyYXkgPSBkZWxheS5zcGxpdCgnLCcpO1xuICAgIHZhciBwcm9wZXJ0eUFycmF5ID0gcHJvcGVydHkuc3BsaXQoJywnKTtcbiAgICB2YXIgbG9uZ2VzdFRpbWUgPSAwO1xuICAgIHZhciByZSA9IC8oWzAtOV0qXFwuP1swLTldKykobT9zKS87XG4gICAgdmFyIGR1cmF0aW9uRmFjdG9yO1xuICAgIHZhciBkZWxheUZhY3RvcjtcbiAgICB2YXIgZHVyYXRpb25Hcm91cHM7XG4gICAgdmFyIGRlbGF5R3JvdXBzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0eUFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkdXJhdGlvbkdyb3VwcyA9IGR1cmF0aW9uQXJyYXlbaV0ubWF0Y2gocmUpO1xuICAgICAgaWYgKGR1cmF0aW9uR3JvdXBzWzJdID09PSAncycpIGR1cmF0aW9uRmFjdG9yID0gMTAwMDtcbiAgICAgIGVsc2UgZHVyYXRpb25GYWN0b3IgPSAxO1xuXG4gICAgICBkZWxheUdyb3VwcyA9IGRlbGF5QXJyYXlbaV0ubWF0Y2gocmUpO1xuICAgICAgaWYgKGRlbGF5R3JvdXBzWzJdID09PSAncycpIGRlbGF5RmFjdG9yID0gMTAwMDtcbiAgICAgIGVsc2UgZGVsYXlGYWN0b3IgPSAxO1xuXG4gICAgICBsb25nZXN0VGltZSA9IE1hdGgubWF4KFxuICAgICAgICBwYXJzZUZsb2F0KFxuICAgICAgICAgIChkdXJhdGlvbkdyb3Vwc1sxXSAqIGR1cmF0aW9uRmFjdG9yKSArIChkZWxheUdyb3Vwc1sxXSAqIGRlbGF5RmFjdG9yKVxuICAgICAgICApLFxuICAgICAgICBsb25nZXN0VGltZVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9uZ2VzdFRpbWU7XG4gIH0sXG5cbiAgX2NvbXB1dGVOZXdTdHlsZTogZnVuY3Rpb24gKHBoYXNlKSB7XG4gICAgdmFyIGN1cnJlbnRTdHlsZTtcbiAgICBpZiAocGhhc2UgPT09ICdhcHBlYXInKSBjdXJyZW50U3R5bGUgPSB0aGlzLnByb3BzLmNoaWxkcmVuQXBwZWFyU3R5bGU7XG4gICAgZWxzZSBpZiAocGhhc2UgPT09ICdlbnRlcicpIGN1cnJlbnRTdHlsZSA9IHRoaXMucHJvcHMuY2hpbGRyZW5FbnRlclN0eWxlO1xuICAgIGVsc2UgY3VycmVudFN0eWxlID0gdGhpcy5wcm9wcy5jaGlsZHJlbkxlYXZlU3R5bGU7XG5cbiAgICByZXR1cm4gbWVyZ2UodGhpcy5wcm9wcy5jaGlsZHJlbkJhc2VTdHlsZSwgY3VycmVudFN0eWxlKTtcbiAgfSxcblxuICBfcmVnaXN0ZXJDYWxsYmFja1RpbWVvdXQ6IGZ1bmN0aW9uIChjYWxsYmFjaywgbWF4VHJhbnNpdGlvblRpbWUpIHtcbiAgICB0aGlzLl9jYWxsYmFja1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfSwgbWF4VHJhbnNpdGlvblRpbWUpO1xuICB9LFxuXG4gIF90cmFuc2l0aW9uOiBmdW5jdGlvbiAoY2FsbGJhY2ssIHBoYXNlKSB7XG4gICAgaWYgKChwaGFzZSA9PT0gJ2FwcGVhcicgJiYgIXRoaXMucHJvcHMuY2hpbGRyZW5BcHBlYXJTdHlsZSkgfHxcbiAgICAgICAgKHBoYXNlID09PSAnZW50ZXInICYmICF0aGlzLnByb3BzLmNoaWxkcmVuRW50ZXJTdHlsZSkgfHxcbiAgICAgICAgKHBoYXNlID09PSAnbGVhdmUnICYmICF0aGlzLnByb3BzLmNoaWxkcmVuTGVhdmVTdHlsZSkpIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5fZGlzcGF0Y2hUaW1lb3V0ID0gc2V0VGltZW91dChcbiAgICAgICAgdGhpcy5fZXhlY3V0ZVRyYW5zaXRpb24uYmluZCh0aGlzLCBjYWxsYmFjaywgcGhhc2UpLFxuICAgICAgICB0aGlzLl90aWNrXG4gICAgICApO1xuICAgIH1cbiAgfSxcblxuICBfZXhlY3V0ZVRyYW5zaXRpb246IGZ1bmN0aW9uIChjYWxsYmFjaywgcGhhc2UpIHtcbiAgICB2YXIgbm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKHRoaXMpO1xuXG4gICAgaWYgKCFub2RlKSByZXR1cm47XG5cbiAgICBDU1NQcm9wZXJ0eU9wZXJhdGlvbnMuc2V0VmFsdWVGb3JTdHlsZXMobm9kZSwgdGhpcy5fY29tcHV0ZU5ld1N0eWxlKHBoYXNlKSk7XG4gICAgdmFyIHByb3BlcnRpZXMgPSB0aGlzLl9nZXRUcmFuc2l0aW9uUHJvcGVydGllcyhnZXRDb21wdXRlZFN0eWxlKG5vZGUpKTtcblxuICAgIHZhciBtYXhUcmFuc2l0aW9uVGltZSA9IHRoaXMuX2dldFRyYW5zaXRpb25NYXhpbXVtVGltZShcbiAgICAgIHByb3BlcnRpZXMudHJhbnNpdGlvblByb3BlcnR5LFxuICAgICAgcHJvcGVydGllcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBwcm9wZXJ0aWVzLnRyYW5zaXRpb25EZWxheVxuICAgICk7XG5cbiAgICB0aGlzLl9yZWdpc3RlckNhbGxiYWNrVGltZW91dChjYWxsYmFjaywgbWF4VHJhbnNpdGlvblRpbWUpO1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9wcyA9IHtzdHlsZTogdGhpcy5wcm9wcy5jaGlsZHJlbkJhc2VTdHlsZX07XG5cbiAgICByZXR1cm4gKFxuICAgICAgUmVhY3QuY2xvbmVFbGVtZW50KHRoaXMucHJvcHMuY2hpbGRyZW4sIHByb3BzKVxuICAgICk7XG4gIH0sXG5cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zaXRpb25Db250YWluZXI7IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBSZWFjdFRyYW5zaXRpb25Hcm91cCA9IHJlcXVpcmUoJ3JlYWN0LWFkZG9ucy10cmFuc2l0aW9uLWdyb3VwJyk7XG52YXIgVHJhbnNpdGlvbkNvbnRhaW5lciA9IHJlcXVpcmUoJy4vdHJhbnNpdGlvbi1jb250YWluZXInKTtcblxudmFyIFRyYW5zaXRpb24gPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVHJhbnNpdGlvbicsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY2hpbGRyZW46IFJlYWN0LlByb3BUeXBlcy5ub2RlLFxuICAgIGNoaWxkcmVuQXBwZWFyU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgY2hpbGRyZW5CYXNlU3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgY2hpbGRyZW5FbnRlclN0eWxlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGNoaWxkcmVuTGVhdmVTdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgICBjb21wb25lbnQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgb25DaGlsZEFwcGVhcmVkOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNoaWxkRW50ZXJlZDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGlsZExlZnQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hpbGRTdGFydEFwcGVhcjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGlsZFN0YXJ0RW50ZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2hpbGRTdGFydExlYXZlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgICBzdHlsZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcG9uZW50OiAnZGl2JyxcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3RUcmFuc2l0aW9uR3JvdXBcbiAgICAgICAgY29tcG9uZW50PXt0aGlzLnByb3BzLmNvbXBvbmVudH1cbiAgICAgICAgc3R5bGU9e3RoaXMucHJvcHMuc3R5bGV9XG4gICAgICA+XG4gICAgICAgIHtSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxUcmFuc2l0aW9uQ29udGFpbmVyXG4gICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgaWQ9eygoY2hpbGQgfHwge30pLnByb3BzIHx8IHt9KS5pZH1cbiAgICAgICAgICAgICAgY2hpbGRyZW5CYXNlU3R5bGU9e3RoaXMucHJvcHMuY2hpbGRyZW5CYXNlU3R5bGV9XG4gICAgICAgICAgICAgIGNoaWxkcmVuQXBwZWFyU3R5bGU9e3RoaXMucHJvcHMuY2hpbGRyZW5BcHBlYXJTdHlsZX1cbiAgICAgICAgICAgICAgY2hpbGRyZW5FbnRlclN0eWxlPXt0aGlzLnByb3BzLmNoaWxkcmVuRW50ZXJTdHlsZX1cbiAgICAgICAgICAgICAgY2hpbGRyZW5MZWF2ZVN0eWxlPXt0aGlzLnByb3BzLmNoaWxkcmVuTGVhdmVTdHlsZX1cbiAgICAgICAgICAgICAgb25DaGlsZEFwcGVhcmVkPXt0aGlzLnByb3BzLm9uQ2hpbGRBcHBlYXJlZH1cbiAgICAgICAgICAgICAgb25DaGlsZEVudGVyZWQ9e3RoaXMucHJvcHMub25DaGlsZEVudGVyZWR9XG4gICAgICAgICAgICAgIG9uQ2hpbGRMZWZ0PXt0aGlzLnByb3BzLm9uQ2hpbGRMZWZ0fVxuICAgICAgICAgICAgICBvbkNoaWxkU3RhcnRBcHBlYXI9e3RoaXMucHJvcHMub25DaGlsZFN0YXJ0QXBwZWFyfVxuICAgICAgICAgICAgICBvbkNoaWxkU3RhcnRFbnRlcj17dGhpcy5wcm9wcy5vbkNoaWxkU3RhcnRFbnRlcn1cbiAgICAgICAgICAgICAgb25DaGlsZFN0YXJ0TGVhdmU9e3RoaXMucHJvcHMub25DaGlsZFN0YXJ0TGVhdmV9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgICAgIDwvVHJhbnNpdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgICApO1xuICAgICAgICB9LCB0aGlzKX1cbiAgICAgIDwvUmVhY3RUcmFuc2l0aW9uR3JvdXA+XG4gICAgKTtcbiAgfSxcblxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVHJhbnNpdGlvbjsiLCJ2YXIgbWVyZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciByZXMgPSB7fTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChhcmd1bWVudHNbaV0pIHtcbiAgICAgIE9iamVjdC5hc3NpZ24ocmVzLCBhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXM7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlOyJdfQ==
