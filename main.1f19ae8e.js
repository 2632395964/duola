// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n*{box-sizing: border-box; margin: 0;padding: 0;}\n*::after,*::before{\n  box-sizing: border-box;\n}\nbody{\n  background: #d4ecf9;\n}\n.head{\n  border: 3px solid black;\n  width: 200px;\n  height: 200px;\n  position: relative;\n  top: 100px;\n  left: 50%;\n  margin-left: -100px;\n  border-radius: 50%;\n  background: #35a1c9;\n}\n.head .face{\n  border: 3px solid black;\n  position: absolute;\n  width: 170px;\n  height: 170px;\n  left: 50%;\n  top: 14px;\n  margin-left: -85px;\n  border-radius: 50%;\n  background: white;\n}\n.head .face .eye{\n  border: 1px solid black;\n  width: 48px;\n  height: 48px;\n  position: absolute;\n  left: 50%;\n  margin-left: -24px;\n  border-radius: 50%;\n  background: white;\n}\n.head .face .eye.left::before{\n  content: \"\";\n  width: 15px;\n  height: 23px;\n  position: absolute;\n  top: 10px;\n  left: 24px;\n  border: 1px solid black;\n  display: block;\n  border-radius: 50%;\n  background: black;\n}\n.head .face .eye.left .yuan1{\n  width: 3px;\n  height: 6px;\n  position: absolute;\n  top: 18px;\n  left: 32px;\n  border: 1px solid white;\n  border-radius: 50%;\n  background: white;\n}\n.head .face .eye.right::before{\n  content: \"\";\n  width: 15px;\n  height: 23px;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  border: 1px solid black;\n  display: block;\n  border-radius: 50%;\n  background: black;\n}\n.head .face .eye.right .yuan2{\n  width: 3px;\n  height: 6px;\n  position: absolute;\n  top: 18px;\n  left: 13px;\n  border: 1px solid white;\n  border-radius: 50%;\n  background: white;\n}\n.head .face .eye.left{\n  transform: translateX(-24px);\n}\n.head .face .eye.right{\n  transform: translateX(24px);\n}\n.head .face .nose{\n  border: 1px solid black;\n  width: 34px;\n  height: 34px;\n  position: absolute;\n  left: 50%;\n  top: 40px;\n  margin-left: -17px;\n  border-radius: 50%;\n  background: #b11735;\n}\n.head .face .nose::before{\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  top: 8px;\n  left: 8px;\n  display: block;\n  border-radius: 50%;\n  background: white;\n}\n.head .face .nose::after{\n  content: \"\";\n  border: 1.2px solid black;\n  width: 2px;\n  height: 15px;\n  position: absolute;\n  top: 33px;\n  left: 50%;\n  margin-left: -1px;\n  display: block;\n  background: black;\n}\n.head .face .mouth{\n  border: 1px solid red;\n  position: absolute;\n  width: 140px;\n  height: 70px;\n  top: 85px;\n  left: 50%;\n  margin-left: -70px;\n  border-radius: 0 0 140px 140px;\n  background: #B11635;\n  overflow: hidden;\n}\n.head .face .mouth::before{\n  content: \"\";\n  width: 56px;\n  height: 92px;\n  position: absolute;\n  top: 15px;\n  left: 35px;\n  display: block;\n  border-radius: 50%;\n  transform: rotate(-50deg);\n  background: #ca2533;\n}\n.head .face .mouth::after{\n  content: \"\";\n  width: 56px;\n  height: 92px;\n  position: absolute;\n  top: 15px;\n  left: 45px;\n  display: block;\n  border-radius: 50%;\n  transform: rotate(50deg);\n  background: #ca2533;\n\n}\n.head .face .beard{\n  position: absolute;\n  border: 1px solid black;\n  width: 62px;\n  height: 2px;\n  top: 60px;\n  left:50%;\n  background: black;\n  margin-left: -31px;\n}\n.head .face .beard.left{ \n  transform: translateX(-60px);\n}\n.head .face .beard.left::before{\n  content: \"\";\n  position: absolute;\n  border: 1px solid black;\n  display: block;\n  width: 60px;\n  height: 2.5px;\n  top: -9px;\n  left:2px;\n  background: black;\n  transform: rotate(15deg);\n  transform-origin: right;\n}\n.head .face .beard.left::after{\n  content: \"\";\n  position: absolute;\n  border: 1px solid black;\n  display: block;\n  width: 62px;\n  height: 2.5px;\n  top: 8px;\n  left:0;\n  background: black;\n  transform: rotate(-15deg);\n  transform-origin: right;\n}\n.head .face .beard.right{ \n  transform: translateX(60px);\n}\n.head .face .beard.right::before{\n  content: \"\";\n  position: absolute;\n  border: 1px solid black;\n  display: block;\n  width: 60px;\n  height: 2.5px;\n  top: 8px;\n  left:-2px;\n  background: black;\n  transform: rotate(15deg);\n  transform-origin: left;\n}\n.head .face .beard.right::after{\n  content: \"\";\n  position: absolute;\n  border: 1px solid black;\n  display: block;\n  width: 62px;\n  height: 2.5px;\n  top: -9px;\n  left:-2px;\n  background: black;\n  transform: rotate(-15deg);\n  transform-origin: left;\n}\n.neck{\n  border: 1px solid black;\n  position: relative;\n  width: 100px;\n  height: 50px;\n  left: 50%;\n  top: 310px;\n  margin-left: -50px;\n  border-radius: 50%;\n  background: #a1172e;\n}\n.neck .bell{\n  border: 2px solid black;\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  top: 40px;\n  left: 50%;\n  margin-left: -17.5px;\n  border-radius: 50%;\n  background: #f19629;\n}\n.neck .bell::before{\n  content: \"\";\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  top: 15px;\n  left: 50%;\n  margin-left: -4px;\n  display: block;\n  border-radius: 50%;\n  background: black;\n}\n.neck .bell::after{\n  content: \"\";\n  width: 15px;\n  height: 2px;\n  position: absolute;\n  top: 24px;\n  left: 50%;\n  margin-left: -7.5px;\n  display: block;\n  background: black;\n}\n.uplimb{\n  width: 300px;\n  height: 200px;\n  position: relative;\n  top: 250px;\n  left: 50%;\n  margin-left: -150px;\n  float: left;\n}\n.uplimb .arm{\nborder: 3px solid black ;\nwidth: 100px;\nheight: 55px;\nposition: absolute;\ntop: 30px;\nleft: 50%;\nmargin-left: -50px;\nborder-radius: 50%;\nbackground: #35a1c9;\n}\n.uplimb .arm.left{\n  transform: translateX(-80px) rotate(45deg);\n}\n.uplimb .arm.right{\n  transform: translateX(80px) rotate(-45deg);\n}\n.uplimb .arm.left .hand{\n  border: 3px solid black;\n  width: 65px;\n  height: 65px;\n  position: absolute;\n  top: -20px;\n  left: -35px;\n  border-radius: 50%;\n  background: white;\n}\n.uplimb .arm.right .hand{\n  border: 3px solid black;\n  width: 65px;\n  height: 65px;\n  position: absolute;\n  top: -20px;\n  left: 63px;\n  border-radius: 50%;\n  background: white;\n}\n.uplimb .body{\n  border: 3px solid black;\n  width: 142px;\n  height: 172px;\n  position: absolute;\n  left: 50%;\n  margin-left: -71px;\n  border-radius: 150px/140px;\n  background: #35a1c9;\n}\n.uplimb .body::before{\n  content: \"\";\n  width: 100px;\n  height: 60px;\n  position: absolute;\n  top: 90px;\n  left: 50%;\n  margin-left: -50px;\n  display: block;\n  border-radius: 50%;\n  background: white;\n}\n.uplimb .body::after{\n  content: \"\";\n  border: 3px solid black;\n  width: 60px;\n  height: 30px;\n  position: absolute;\n  top: 115px;\n  left: 50%;\n  margin-left: -30px;\n  display: block;\n  border-radius: 0 0 60px 60px;\n}\n.uplimb .foot{\n  border: 3px solid black;\n  position: absolute;\n  width: 55px;\n  height: 85px;\n  top: 115px;\n  left: 50%;\n  margin-left: -27.5px;\n  border-radius: 50%;\n  background: white;\n}\n.uplimb .foot.left{\n  transform: translateX(-27px);\n}\n.uplimb .foot.right{\n  transform: translateX(27px);\n}\n.fly{\n  border: 2px solid black;\n  width: 2px;\n  height: 10px;\n  position: relative;\n  top: -110px;\n  left: 50%;\n  margin-left: -1px;\n}\n.fly .a{\n  border: 3px solid black;\n  width: 20px;\n  height: 10px;\n  position: absolute;\n  top: -10px;\n  left: -10px;\n  border-radius: 20px 20px 0 0;\n  background: #bd8d22;\n}\n.fly .b{\n  border: 2px solid black;\n  width: 80px;\n  height: 2px;\n  position: absolute;\n  top: -2px;\n  left: -40px;\n  animation: wave 240ms infinite linear;\n  transform-origin: center\n}\n@keyframes wave{\n  0%{transform: rotateY(0deg);}\n  33%{transform: rotateY(180deg);}\n  66%{transform: rotateY(270deg);}\n  100%{transform: rotateY(360deg);}\n}";
var _default = string;
exports.default = _default;
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
demo.innerText = _css.default.substr(0, n);
demo2.innerHTML = _css.default.substr(0, n);
var time = 100;

var run = function run() {
  n += 1;

  if (n > _css.default.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = _css.default.substr(0, n);
  demo2.innerHTML = _css.default.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var id = play();

slow.onclick = function () {
  window.clearInterval(id);
  time = 300;
  id = play();
};

normal.onclick = function () {
  window.clearInterval(id);
  time = 100;
  id = play();
};

fast.onclick = function () {
  window.clearInterval(id);
  time = 0;
  id = play();
};
},{"./css.js":"css.js"}],"C:/Users/源/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65122" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/源/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map