// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"3dtlh":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4b8ea06834df32e0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gH3Lb":[function(require,module,exports,__globalThis) {
var _router = require("./router");
document.addEventListener('DOMContentLoaded', ()=>{
    (0, _router.initRouter)();
});

},{"./router":"4wVP1"}],"4wVP1":[function(require,module,exports,__globalThis) {
/** @format */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initRouter", ()=>initRouter);
var _layout = require("./layout");
var _about = require("./pages/about");
var _contact = require("./pages/contact");
var _home = require("./pages/home");
var _notfound = require("./pages/notfound");
var _service = require("./pages/service");
function initRouter() {
    window.addEventListener("popstate", renderRoute);
    document.addEventListener("click", (e)=>{
        const target = e.target;
        if (target.tagName === "A" && target.hasAttribute("data-link")) {
            e.preventDefault();
            const href = target.getAttribute("href");
            history.pushState(null, "", href);
            renderRoute();
        }
    });
    renderRoute();
}
function renderRoute() {
    const pathname = window.location.pathname;
    let contentFn;
    switch(pathname){
        case "/home":
            contentFn = (0, _home.renderHome);
            break;
        case "/about":
            contentFn = (0, _about.renderAbout);
            break;
        case "/contact":
            contentFn = (0, _contact.renderContact);
            break;
        case "/service":
            contentFn = (0, _service.renderService);
            break;
        default:
            contentFn = (0, _notfound.renderNotFound);
            break;
    }
    (0, _layout.createLayout)(contentFn);
}

},{"./layout":"aUJjy","./pages/about":"d8csY","./pages/contact":"a0XsK","./pages/home":"l0Soh","./pages/notfound":"20OKX","./pages/service":"jAwlp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aUJjy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createLayout", ()=>createLayout);
var _footer = require("./components/footer");
var _header = require("./components/header");
function createLayout(contentFn) {
    const app = document.getElementById('app');
    app.innerHTML = ''; // clear previous content
    const header = (0, _header.Header)();
    const content = contentFn();
    const footer = (0, _footer.Footer)();
    app.append(header, content, footer);
}

},{"./components/footer":"ddP1f","./components/header":"lAi08","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ddP1f":[function(require,module,exports,__globalThis) {
/** @format */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Footer", ()=>Footer);
function Footer() {
    const footer = document.createElement("footer");
    footer.className = "bg-white  flex justify-center items-center w-full ";
    footer.innerHTML = `
    <div class="bg-white">
    <div class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div class="p-5">
            <h3 class="font-bold text-xl text-indigo-600">Homework06</h3>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase text-indigo-600 font-bold">Resources</div>
            <a class="my-3 block" href="/#">Documentation <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/#">Tutorials <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1">New</span></a>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase text-indigo-600 font-bold">Support</div>
            <a class="my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a
                class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a>
        </div>
        <div class="p-5">
            <div class="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
            <a class="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA
                <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">contact@company.com
                <span class="text-teal-600 text-xs p-1"></span></a>
        </div>
    </div>
</div>


  `;
    return footer;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lAi08":[function(require,module,exports,__globalThis) {
/** @format */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>Header);
function Header() {
    const header = document.createElement("header");
    header.className = "bg-[#4f39f6] text-white";
    header.innerHTML = `
    <!-- Header Section -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div class="flex items-center justify-between">
                <!-- Logo Section -->
                <div class="flex-shrink-0">
                    <a href="/" class="text-2xl font-bold">Homework06 </a>
                </div>

                <!-- Navigation Menu -->
                <nav class="hidden md:flex space-x-10 text-lg">
                    <a href="/home" data-link class="hover:text-gray-300 transition-all">Home</a>
                    <a href="/service" data-link class="hover:text-gray-300 transition-all">Services</a>
                    <a href="/about" data-link class="hover:text-gray-300 transition-all">About Us</a>
                    <a href="/contact" data-link class="hover:text-gray-300 transition-all">Contact</a>
                </nav>

                <!-- Call-to-Action Button -->
                <div class="hidden md:block">
                    <a href="#contact" class="bg-white hover:bg-gray-300 text-[#4f39f6] py-2 px-6 rounded-full text-lg transition-all">
                        Get in Touch
                    </a>
                </div>

                <!-- Mobile Menu Button (for smaller screens) -->
                <div class="md:hidden flex items-center">
                    <button id="menu-button" class="text-white focus:outline-none">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation Menu -->
            <div id="mobile-menu" class="md:hidden mt-5 hidden space-y-4">
                <a href="/service" class="block text-lg hover:text-gray-300 transition-all">Services</a>
                <a href="/about" class="block text-lg hover:text-gray-300 transition-all">About Us</a>
                <a href="/contact" class="block text-lg hover:text-gray-300 transition-all">Contact</a>
            </div>
        </div>

    
  `;
    // Mobile Menu Toggle
    const menuButton = header.querySelector("#menu-button");
    const mobileMenu = header.querySelector("#mobile-menu");
    if (menuButton && mobileMenu) menuButton.addEventListener("click", ()=>{
        mobileMenu.classList.toggle("hidden");
    });
    return header;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"d8csY":[function(require,module,exports,__globalThis) {
/** @format */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderAbout", ()=>renderAbout);
function renderAbout() {
    const div = document.createElement("div");
    div.innerHTML = `
   <div class="bg-gray-100 py-8 sm:py-16 lg:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col gap-12 md:gap-16 lg:gap-24">
        <!-- Header section -->
        <div class="space-y-4 text-center">
          <h2 class="text-base-content text-2xl font-semibold md:text-3xl lg:text-4xl">About Us</h2>
          <p class="text-base-content/80 text-xl">
            Our achievement story stands as a powerful testament to teamwork and perseverance. United, we have faced
            challenges, celebrated victories, and woven a narrative of growth and success.
          </p>
          <a href="#" class="btn btn-primary btn-lg btn-gradient">
            Read More
            <span class="icon-[tabler--arrow-right] size-5 rtl:rotate-180"></span>
          </a>
        </div>

        <!-- Video player and stats -->
        <div class="relative mb-8 h-full w-full rounded-xl max-lg:space-y-6 sm:mb-16 lg:mb-24 lg:h-161">
          <img
            src="https://cdn.flyonui.com/fy-assets/blocks/marketing-ui/about/about-9.png"
            class="h-full w-full rounded-xl object-cover"
          />
          <!-- Stats card overlapping the video section -->
          <div
            class="bg-base-100 border-base-content/20 rounded-box grid gap-10 border px-10 py-8 sm:max-lg:grid-cols-2 lg:absolute lg:-bottom-25 lg:left-1/2 lg:w-3/4 lg:-translate-x-1/2 lg:grid-cols-4 xl:w-max"
          >
            <!-- Stats items - Years of Experience -->
            <div class="flex flex-col items-center justify-center gap-4">
              <!-- Document icon SVG -->
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.3013 1.6001H20.6159C22.7164 1.60007 24.4097 1.60004 25.7414 1.77213C27.1239 1.95079 28.2879 2.33299 29.2126 3.22162C30.137 4.11026 30.5346 5.22912 30.7206 6.55798C30.8996 7.8379 30.8996 9.4653 30.8996 11.4843V20.5043C30.8996 22.5233 30.8996 24.1507 30.7206 25.4307C30.5346 26.7595 30.137 27.8783 29.2126 28.767C28.2879 29.6556 27.1239 30.0378 25.7414 30.2164C24.4097 30.3886 22.7164 30.3886 20.6159 30.3886H6.01758V11.4843C6.01755 9.4653 6.01753 7.8379 6.19656 6.55798C6.38244 5.22912 6.78011 4.11026 7.70465 3.22162C8.62919 2.33299 9.79329 1.95079 11.1758 1.77213C12.5075 1.60004 14.2007 1.60007 16.3013 1.6001Z"
                  fill="var(--color-primary)"
                  fill-opacity="0.2"
                />
                <path
                  d="M4.48162 6.80371C5.02138 6.67016 5.67024 6.66745 6.16962 6.69236C6.04966 7.95368 6.04968 9.54289 6.0497 11.5003V30.3849C5.95382 30.3779 5.86482 30.3676 5.77944 30.3531C3.8803 30.026 2.38587 28.0716 2.13584 25.5878C2.09949 25.2268 2.09955 24.8159 2.09962 24.2127L2.09963 10.9668C2.09963 9.20932 2.88685 7.19828 4.48162 6.80371Z"
                  fill="var(--color-primary)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.2452 8.01881C12.2602 8.01881 12.2751 8.01883 12.29 8.01883H15.3019C15.3168 8.01883 15.3317 8.01881 15.3467 8.01881C15.6139 8.01871 15.9028 8.0186 16.1466 8.05011C16.4323 8.08702 16.7972 8.18196 17.1042 8.47715C17.4114 8.77231 17.5101 9.12306 17.5485 9.39762C17.5813 9.63199 17.5812 9.90964 17.5812 10.1664C17.5812 10.1809 17.5812 10.1952 17.5812 10.2095V11.9308C17.5812 11.9451 17.5812 11.9595 17.5812 11.9739C17.5812 12.2307 17.5813 12.5083 17.5485 12.7427C17.5101 13.0173 17.4114 13.368 17.1042 13.6632C16.7972 13.9584 16.4323 14.0533 16.1466 14.0902C15.9028 14.1217 15.6139 14.1216 15.3467 14.1215C15.3317 14.1215 15.3168 14.1215 15.3019 14.1215H12.29C12.2751 14.1215 12.2602 14.1215 12.2452 14.1215C11.978 14.1216 11.6891 14.1217 11.4453 14.0902C11.1596 14.0533 10.7947 13.9584 10.4876 13.6632C10.1805 13.368 10.0817 13.0173 10.0433 12.7427C10.0105 12.5083 10.0107 12.2307 10.0108 11.9739C10.0108 11.9595 10.0108 11.9451 10.0108 11.9308V10.2095C10.0108 10.1952 10.0108 10.1808 10.0108 10.1664C10.0107 9.90964 10.0105 9.63199 10.0433 9.39762C10.0817 9.12306 10.1805 8.77231 10.4876 8.47715C10.7947 8.18196 11.1596 8.08702 11.4453 8.05011C11.6891 8.0186 11.978 8.01871 12.2452 8.01881Z"
                  fill="var(--color-primary)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.5312 9.06403C21.5312 8.45253 22.0469 7.95679 22.6833 7.95679H25.7553C26.3914 7.95679 26.9073 8.45253 26.9073 9.06403C26.9073 9.67555 26.3914 10.1713 25.7553 10.1713H22.6833C22.0469 10.1713 21.5312 9.67555 21.5312 9.06403Z"
                  fill="var(--color-primary)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.5312 13.0418C21.5312 12.4303 22.0469 11.9346 22.6833 11.9346H25.7553C26.3914 11.9346 26.9073 12.4303 26.9073 13.0418C26.9073 13.6533 26.3914 14.1491 25.7553 14.1491H22.6833C22.0469 14.1491 21.5312 13.6533 21.5312 13.0418Z"
                  fill="var(--color-primary)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0107 18.947C10.0107 18.3355 10.5265 17.8398 11.1627 17.8398H25.7548C26.391 17.8398 26.9068 18.3355 26.9068 18.947C26.9068 19.5586 26.391 20.0542 25.7548 20.0542H11.1627C10.5265 20.0542 10.0107 19.5586 10.0107 18.947Z"
                  fill="var(--color-primary)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0107 23.376C10.0107 22.7645 10.5265 22.2688 11.1627 22.2688H25.7548C26.391 22.2688 26.9068 22.7645 26.9068 23.376C26.9068 23.9875 26.391 24.4834 25.7548 24.4834H11.1627C10.5265 24.4834 10.0107 23.9875 10.0107 23.376Z"
                  fill="var(--color-primary)"
                />
              </svg>
              <div class="space-y-2 text-center">
                <span class="text-primary text-[#4f39f6] text-3xl font-semibold">20+</span>
                <p class="text-base-content/80">Years of Experience</p>
              </div>
            </div>

            <!-- Stats items - Successful Projects -->
            <div class="flex flex-col items-center justify-center gap-4">
              <!-- Projects icon SVG -->
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_10399_304346)">
                  <path
                    d="M12.8113 1.15372e-06H20.1892C20.5026 -1.66422e-05 20.7906 -3.29867e-05 21.0324 0.0167549C21.2924 0.0347947 21.5781 0.0758928 21.8684 0.19827C22.4957 0.462627 22.9941 0.969686 23.254 1.6079C23.3413 1.8225 23.3864 2.03462 23.4114 2.23597C24.1495 2.24587 24.7229 2.28333 25.2343 2.42272C27.1272 2.93882 28.606 4.44328 29.1132 6.36936C29.3008 7.08179 29.3005 7.91253 29.3002 9.12995V22.0352C29.3002 24.0706 29.3002 25.7114 29.1296 27.0016C28.9527 28.3414 28.574 29.4694 27.6935 30.3653C26.8128 31.2611 25.7042 31.6464 24.3876 31.8266C23.1192 32 21.5068 32 19.5061 32H13.4942C11.4937 32 9.88113 32 8.61289 31.8266C7.29617 31.6464 6.18751 31.2611 5.30698 30.3653C4.42647 29.4694 4.04775 28.3414 3.87073 27.0016C3.70021 25.7114 3.70025 24.0706 3.70026 22.0352L3.70023 9.12997C3.69985 7.91253 3.69957 7.08179 3.88719 6.36938C4.39444 4.44328 5.87309 2.93882 7.76615 2.42272C8.27749 2.28331 8.85085 2.24587 9.58897 2.23595C9.61397 2.03461 9.65919 1.8225 9.74655 1.6079C10.0064 0.969686 10.5047 0.462627 11.132 0.19827C11.4224 0.0758928 11.7081 0.0347947 11.968 0.0167549C12.2098 -3.29867e-05 12.4978 -1.66424e-05 12.8113 1.15372e-06Z"
                    fill="var(--color-primary)"
                    fill-opacity="0.2"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7752 2.45764C11.8122 2.37007 11.8808 2.30026 11.9669 2.26265C11.9776 2.25986 12.0192 2.25079 12.1169 2.24401C12.2749 2.23303 12.4868 2.23242 12.8426 2.23242H20.1569C20.5128 2.23242 20.7246 2.23303 20.8827 2.24401C20.9804 2.25079 21.0219 2.25986 21.0326 2.26265C21.1187 2.30026 21.1873 2.37007 21.2243 2.45764C21.227 2.46858 21.236 2.51085 21.2427 2.61033C21.2534 2.77108 21.2541 2.98669 21.2541 3.34871C21.2541 3.71073 21.2534 3.92634 21.2427 4.08709C21.236 4.18655 21.227 4.22882 21.2243 4.23978C21.1873 4.32735 21.1187 4.39714 21.0326 4.43477C21.0219 4.43754 20.9804 4.44663 20.8827 4.45341C20.7246 4.46439 20.5128 4.46498 20.1569 4.46498H12.8426C12.4868 4.46498 12.2749 4.46439 12.1169 4.45341C12.0192 4.44663 11.9776 4.43754 11.9669 4.43477C11.8808 4.39714 11.8122 4.32735 11.7752 4.23978C11.7725 4.22884 11.7636 4.18657 11.7569 4.08709C11.7461 3.92634 11.7455 3.71073 11.7455 3.34871C11.7455 2.98669 11.7461 2.77108 11.7569 2.61033C11.7636 2.51085 11.7725 2.46858 11.7752 2.45764ZM10.2256 14.5218C10.2256 13.85 10.7604 13.3021 11.4242 13.3021H21.5753C22.2392 13.3021 22.774 13.85 22.774 14.5218C22.774 15.1937 22.2392 15.7416 21.5753 15.7416H11.4242C10.7604 15.7416 10.2256 15.1937 10.2256 14.5218ZM10.2256 20.4339C10.2256 19.7621 10.7604 19.2142 11.4242 19.2142H21.5753C22.2392 19.2142 22.774 19.7621 22.774 20.4339C22.774 21.1058 22.2392 21.6538 21.5753 21.6538H11.4242C10.7604 21.6538 10.2256 21.1058 10.2256 20.4339Z"
                    fill="var(--color-primary)"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_10399_304346">
                    <rect width="32" height="32" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <div class="space-y-2 text-center">
                <span class="text-primary text-[#4f39f6] text-3xl font-semibold">70+</span>
                <p class="text-base-content/80">Successful Projects</p>
              </div>
            </div>

            <!-- Stats items - Customer Reviews -->
            <div class="flex flex-col items-center justify-center gap-4">
              <!-- Star icon SVG -->
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.777 1.67693C16.2533 1.57449 16.7458 1.57449 17.2222 1.67693C18.2817 1.90485 18.9665 2.74077 19.5034 3.62363C20.0466 4.51691 20.6182 5.77322 21.3204 7.31653L21.354 7.39047C21.8278 8.43194 21.9406 8.62269 22.0806 8.74709C22.1351 8.79555 22.1942 8.83872 22.2567 8.87599C22.4175 8.97165 22.6326 9.02063 23.7626 9.15256L24.0393 9.18485C25.6289 9.37042 26.9233 9.5215 27.8889 9.74909C28.8418 9.97368 29.8001 10.339 30.3535 11.2077C30.6743 11.7112 30.8609 12.2895 30.8953 12.8867C30.9546 13.9171 30.3927 14.7797 29.7529 15.5254C29.1046 16.2811 28.1455 17.1694 26.9678 18.2604L26.9114 18.3126C26.0318 19.1275 25.8786 19.3041 25.8046 19.4838C25.7674 19.5735 25.7418 19.6676 25.7281 19.7638C25.7006 19.9563 25.7425 20.187 26.0849 21.3403L26.1554 21.5779C26.7015 23.4177 27.1446 24.9095 27.3318 26.0607C27.5162 27.1945 27.5286 28.4012 26.7162 29.3081C26.511 29.5374 26.2762 29.7382 26.0183 29.9052C24.9982 30.5655 23.8175 30.3583 22.7361 29.9918C21.6383 29.6195 20.2478 28.938 18.5329 28.0979L18.0074 27.8404C16.9332 27.314 16.7183 27.2383 16.5186 27.2367L16.4918 27.2369C16.2921 27.2399 16.0778 27.3175 15.0077 27.8524L14.5348 28.0889C12.8028 28.955 11.399 29.6567 10.2908 30.0417C9.20024 30.4206 8.00708 30.6382 6.97612 29.9683C6.73189 29.8095 6.5085 29.6206 6.31124 29.4055C5.4785 28.4982 5.48604 27.2772 5.669 26.1303C5.85492 24.9649 6.29999 23.4518 6.84917 21.5847L6.9213 21.3395C7.26031 20.1868 7.30159 19.9564 7.2737 19.7641C7.25984 19.6686 7.23421 19.5751 7.19741 19.486C7.1233 19.3067 6.97037 19.1302 6.0918 18.3164L6.03546 18.2641C4.85594 17.1715 3.89552 16.2819 3.24637 15.5251C2.60575 14.7783 2.04337 13.9142 2.10412 12.8823C2.13908 12.2881 2.32471 11.7128 2.64325 11.2114C3.1965 10.3407 4.15586 9.97445 5.1101 9.74941C6.07703 9.52136 7.37335 9.37005 8.96543 9.18421L9.23652 9.15256C10.3666 9.02063 10.5816 8.97165 10.7424 8.87599C10.805 8.83872 10.864 8.79555 10.9186 8.74709C11.0586 8.62269 11.1713 8.43194 11.6451 7.39047L11.6787 7.31666C12.3809 5.77328 12.9525 4.51693 13.4957 3.62363C14.0327 2.74077 14.7174 1.90485 15.777 1.67693Z"
                  fill="var(--color-primary)"
                  fill-opacity="0.2"
                />
              </svg>
              <div class="space-y-2 text-center">
                <span class="text-primary text-[#4f39f6] text-3xl font-semibold">500+</span>
                <p class="text-base-content/80">Customer Reviews</p>
              </div>
            </div>

            <!-- Stats items - Achieve Awards -->
            <div class="flex flex-col items-center justify-center gap-4">
              <!-- Award icon SVG -->
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.281 19.6648C27.281 25.5919 22.4545 30.3968 16.5004 30.3968C10.5464 30.3968 5.71973 25.5919 5.71973 19.6648C5.71973 13.7377 10.5464 8.93286 16.5004 8.93286C22.4545 8.93286 27.281 13.7377 27.281 19.6648Z"
                  fill="var(--color-primary)"
                  fill-opacity="0.2"
                />
                <path
                  d="M18.4258 7.43527C21.1365 7.85461 23.5578 9.14535 25.3915 11.0108C25.4296 10.9537 25.4687 10.895 25.509 10.8344L29.9243 4.20274C30.6866 3.05788 31.0677 2.48546 30.8298 2.04424C30.5919 1.60303 29.9019 1.60303 28.5223 1.60303H25.8261C24.0082 1.60303 23.0992 1.60303 22.3397 2.02085C21.5802 2.43868 21.0965 3.20482 20.1291 4.73709L18.4258 7.43527Z"
                  fill="var(--color-primary)"
                />
                <path
                  d="M7.62681 10.992C9.46465 9.13024 11.8892 7.84429 14.6024 7.43093L11.9124 3.17007C11.2968 2.19487 10.2209 1.60303 9.0639 1.60303H2.94211C2.27136 1.60303 1.87047 2.34632 2.24102 2.90288L7.5218 10.8344C7.55772 10.8884 7.5927 10.9409 7.62681 10.992Z"
                  fill="var(--color-primary)"
                />
                <path
                  d="M16.5004 15.0288C16.2816 15.0288 16.1489 15.323 15.8836 15.9115L15.7868 16.126C15.4037 16.9757 15.2121 17.4005 14.8529 17.6631C14.4937 17.9257 14.0291 17.9804 13.1 18.0898L12.8713 18.1169C12.248 18.1901 11.9364 18.2269 11.869 18.4306C11.8016 18.6345 12.0304 18.8482 12.4879 19.2759L12.5667 19.3495C13.3016 20.0364 13.6691 20.3799 13.7949 20.8375C13.9208 21.2951 13.7803 21.777 13.4993 22.7409L13.3798 23.1509C13.1939 23.7885 13.101 24.1073 13.2717 24.2482C13.4425 24.389 13.7399 24.2389 14.3347 23.9389L14.9876 23.6095C15.7299 23.2351 16.101 23.0479 16.5012 23.0463C16.9013 23.0447 17.2741 23.2289 18.0194 23.5973L18.6711 23.9196C19.2644 24.2129 19.561 24.3596 19.7305 24.2181C19.8999 24.0769 19.8068 23.7604 19.6207 23.1276L19.5081 22.7449C19.2239 21.7793 19.0818 21.2964 19.2074 20.8375C19.333 20.3786 19.7015 20.0343 20.4383 19.3455L20.5129 19.2759C20.9705 18.8482 21.1991 18.6345 21.1317 18.4306C21.0644 18.2269 20.7527 18.1901 20.1295 18.1169L19.9009 18.0898C18.9717 17.9804 18.5071 17.9257 18.1479 17.6631C17.7887 17.4005 17.5972 16.9757 17.214 16.126L17.1172 15.9115C16.8519 15.323 16.7193 15.0288 16.5004 15.0288Z"
                  fill="var(--color-primary)"
                />
              </svg>
              <div class="space-y-2 text-center">
                <span class="text-primary text-[#4f39f6] text-3xl font-semibold">25</span>
                <p class="text-base-content/80">Achieve Awards</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
                    
  `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"a0XsK":[function(require,module,exports,__globalThis) {
/** @format */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderContact", ()=>renderContact);
function renderContact() {
    const div = document.createElement("div");
    div.innerHTML = `
    
<section class="bg-gray-100">
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div class="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 class="text-3xl font-extrabold text-gray-900">Visit Our Location</h2>
            <p class="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div class="mt-16 lg:mt-20">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="rounded-lg overflow-hidden">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.631478132764!2d104.8992118748306!3d11.578254588623558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x6b66703c5fc0c7cc!2sScience%20and%20Technology%20Advanced%20Development%20Co.%2C%20Ltd.!5e0!3m2!1sen!2skh!4v1749200914071!5m2!1sen!2skh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                    <div class="max-w-full mx-auto rounded-lg overflow-hidden">
                        <div class="px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Our Address</h3>
                            <p class="mt-1 text-gray-600">St 562, Phnom Penh 12151</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Hours</h3>
                            <p class="mt-1 text-gray-600">Monday - Friday: 8 am - 12 am and 1 pm - 9 pm</p>
                            <p class="mt-1 text-gray-600">Saturday - Sunday: 8 am - 12 am and 1 pm - 9 pm</p>
                        </div>
                        <div class="border-t border-gray-200 px-6 py-4">
                            <h3 class="text-lg font-medium text-gray-900">Contact</h3>
                            <p class="mt-1 text-gray-600">Email: info@example.com</p>
                            <p class="mt-1 text-gray-600">Phone: +855 95 990 910</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"l0Soh":[function(require,module,exports,__globalThis) {
/** @format */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHome", ()=>renderHome);
function renderHome() {
    const div = document.createElement("div");
    div.innerHTML = `
    <!-- Hero Section -->
    <div class="relative bg-gray-100 overflow-hidden">
        <div class="max-w-7xl mx-auto">
            <div class="relative z-10 pb-8 bg-gray-100 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <div class="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
                    <div class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div class="sm:text-center lg:text-left">
                            <h2 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span class="block">New Collection</span>
                                <span class="block text-[#4f39f6]">Spring 2025</span>
                            </h2>
                            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Discover our latest arrivals for women and girls. Fresh styles for every occasion.
                            </p>
                            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div class="rounded-md shadow">
                                    <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#4f39f6] hover:bg-[#394cf6] md:py-4 md:text-lg md:px-10">
                                        Shop Now
                                    </a>
                                </div>
                                <div class="mt-3 sm:mt-0 sm:ml-3">
                                    <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#4f39f6] bg-gray-200 hover:bg-gray-300 md:py-4 md:text-lg md:px-10">
                                        View Lookbook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Fashion model">
        </div>
    </div>

    <!-- Categories Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div class="grid grid-cols-2 gap-4 md:grid-cols-4">
            <a href="#" class="group relative block bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Women's clothing" class="w-full h-64 object-cover transition-opacity group-hover:opacity-75">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-4">
                    <h3 class="text-xl font-semibold text-white">Women's Clothing</h3>
                    <p class="mt-1 text-sm text-gray-300">Shop Now</p>
                </div>
            </a>
            <a href="#" class="group relative block bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80" alt="Girls' clothing" class="w-full h-64 object-cover transition-opacity group-hover:opacity-75">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-4">
                    <h3 class="text-xl font-semibold text-white">Girls' Clothing</h3>
                    <p class="mt-1 text-sm text-gray-300">Shop Now</p>
                </div>
            </a>
            <a href="#" class="group relative block bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" alt="Women's shoes" class="w-full h-64 object-cover transition-opacity group-hover:opacity-75">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-4">
                    <h3 class="text-xl font-semibold text-white">Women's Shoes</h3>
                    <p class="mt-1 text-sm text-gray-300">Shop Now</p>
                </div>
            </a>
            <a href="#" class="group relative block bg-gray-100 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Girls' shoes" class="w-full h-64 object-cover transition-opacity group-hover:opacity-75">
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div class="absolute bottom-0 left-0 p-4">
                    <h3 class="text-xl font-semibold text-white">Girls' Shoes</h3>
                    <p class="mt-1 text-sm text-gray-300">Shop Now</p>
                </div>
            </a>
        </div>
    </div>

   

   

    

    

    <div class="bg-gray-200 px-2 py-10">

  <div id="features" class="mx-auto max-w-6xl">
    <p class="text-center text-base font-semibold leading-7 text-primary-500">Features</p>
    <h2 class="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      Writing has never been so easy
    </h2>
    <ul class="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">

        <img src="https://www.svgrepo.com/show/530438/ddos-protection.svg" alt="" class="mx-auto h-10 w-10">
        <h3 class="my-3 font-display font-medium">Powered by ChatGPT</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
          the cutting-edge language model that makes interactions a breeze. With its user-friendly interface,
          effortlessly tap into the world of AI-generated text.
        </p>

      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">

        <img src="https://www.svgrepo.com/show/530442/port-detection.svg"
                alt="" class="mx-auto h-10 w-10">
        <h3 class="my-3 font-display font-medium">Easy to use</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
          Simply input your subject, click the generate button, and the result will appear in seconds just like
          magick.
        </p>

      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <img src="https://www.svgrepo.com/show/530444/availability.svg" alt="" class="mx-auto h-10 w-10">
        <h3 class="my-3 font-display font-medium">Custom settings</h3>
        <p class="mt-1.5 text-sm leading-6 text-secondary-500">
          We offer advanced customization. You can freely combine options like roles, languages, publish, tones,
          lengths,
          and formats.
        </p>

      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <a href="/pricing" class="group">
          <img src="https://www.svgrepo.com/show/530440/machine-vision.svg" alt="" class="mx-auto h-10 w-10">
          <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Free trial</h3>
          <p class="mt-1.5 text-sm leading-6 text-secondary-500">We offer a free trial service without login. We
            provide
            many payment options including pay-as-you-go and subscription.</p>
        </a>
      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <a href="/templates" class="group">
          <img src="https://www.svgrepo.com/show/530450/page-analysis.svg" alt="" class="mx-auto h-10 w-10">
          <h3 class="my-3 font-display font-medium group-hover:text-primary-500">
            90+ templates
          </h3>
          <p class="mt-1.5 text-sm leading-6 text-secondary-500">We offer many templates covering areas such as
            writing,
            education, lifestyle and creativity to inspire your potential. </p>
        </a>
      </li>
      <li class="rounded-xl bg-white px-6 py-8 shadow-sm">
        <a href="/download" class="group">
          <img src="https://www.svgrepo.com/show/530453/mail-reception.svg" alt="" class="mx-auto h-10 w-10">
          <h3 class="my-3 font-display font-medium group-hover:text-primary-500">Use Anywhere</h3>
          <p class="mt-1.5 text-sm leading-6 text-secondary-500">Our product is compatible with multiple platforms
            including Web, Chrome, Windows and Mac, you can use MagickPen anywhere.</p>
        </a>
      </li>
    </ul>
  </div>

  <div>
  `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"20OKX":[function(require,module,exports,__globalThis) {
/** @format */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderNotFound", ()=>renderNotFound);
function renderNotFound() {
    const div = document.createElement("div");
    div.innerHTML = `
    <section class="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
        <div class="text-center animate-fadeIn">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/022/310/933/small_2x/404-error-page-not-found-3d-illustration-png.png" alt="404 Illustration" class="mx-auto w-80 animate-[float_3s_infinite] shadow-xl rounded-lg">
            <h1 class="text-5xl font-extrabold text-blue-700 mt-6">You're not lost. I'm just lazy ;(</h1>
            <p class="text-xl text-gray-700 mt-2">We can't seem to find the page you're looking for.</p>
            <a href="/" class="mt-6 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg transform transition hover:scale-105 hover:bg-blue-700">Return Home</a>
        </div>
    </section>
  `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jAwlp":[function(require,module,exports,__globalThis) {
/** @format */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderService", ()=>renderService);
function renderService() {
    const div = document.createElement("div");
    async function fetchProducts() {
        try {
            const response = await fetch(" https://api.escuelajs.co/api/v1/products");
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log("Fetched service data:", data);
            return data;
        } catch (error) {
            console.error("Fetch error:", error);
            return [];
        }
    }
    // Set initial loading state
    div.innerHTML = `
  
<div role="status" class="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div class="flex items-center mt-4">
       <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <span class="sr-only">Loading...</span>
</div>

  `;
    function renderCards(products) {
        console.log("Rendering products:", products);
        // Clear previous content and create a grid container
        div.innerHTML = "";
        const grid = document.createElement("div");
        grid.className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-[90%] m-auto py-5";
        products.forEach((product)=>{
            console.log(product.description);
            const card = document.createElement("div");
            card.innerHTML = `
<div class="w-full max-w-sm   border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 dark:bg-gray-500 dark:border-gray-700 overflow-hidden">
    <a href="#" class="block overflow-hidden">
        <img class="w-full h-56 object-cover transform hover:scale-105 transition-transform duration-300" src="${product.images[0]}" alt="${product.title}" />
    </a>
    <div class="px-6 py-4">
        <h5 class="text-lg font-bold text-gray-900 dark:text-white truncate mb-2">${product.title}</h5>
        <p class="text-sm text-gray-600 dark:text-gray-300 h-12 overflow-hidden line-clamp-1">${product.description.slice(0, 80)}</p>
        <div class="flex items-center mt-4 mb-3">
            <div class="flex space-x-1">
                ${`\u{2605}`.repeat(4).split("").map(()=>`
                    <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.563-.955L10 0l2.949 5.955 6.563.955-4.756 4.635 1.122 6.545z"/></svg>
                `).join("")}
                <svg class="w-4 h-4 text-gray-300 dark:text-gray-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.563-.955L10 0l2.949 5.955 6.563.955-4.756 4.635 1.122 6.545z"/></svg>
            </div>
            <span class="ml-2 text-sm bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full dark:bg-blue-200 dark:text-blue-900">4.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-gray-900 dark:text-white">$${product.price}</span>
            <button class="relative inline-flex items-center justify-center p-2 px-4 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 focus:outline-none">
                <span class="relative z-10">+ Add to cart</span>
                <span class="absolute inset-0 bg-black opacity-10 group-hover:opacity-20 transition-opacity"></span>
            </button>
        </div>
    </div>
</div>
`;
            grid.appendChild(card);
        });
        div.appendChild(grid);
    }
    // Main execution
    (async ()=>{
        try {
            const products = await fetchProducts();
            renderCards(products);
        } catch (error) {
            console.error("Error:", error);
        }
    })();
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["3dtlh","gH3Lb"], "gH3Lb", "parcelRequire1868", {})

//# sourceMappingURL=typescript-manual.34df32e0.js.map
