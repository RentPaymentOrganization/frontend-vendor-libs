import pn from "vue";
import yn from "quill";
var vn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ft(u) {
  return u && u.__esModule && Object.prototype.hasOwnProperty.call(u, "default") ? u.default : u;
}
function mn(u) {
  var s = u.default;
  if (typeof s == "function") {
    var y = function() {
      return s.apply(this, arguments);
    };
    y.prototype = s.prototype;
  } else
    y = {};
  return Object.defineProperty(y, "__esModule", { value: !0 }), Object.keys(u).forEach(function(i) {
    var a = Object.getOwnPropertyDescriptor(u, i);
    Object.defineProperty(y, i, a.get ? a : {
      enumerable: !0,
      get: function() {
        return u[i];
      }
    });
  }), y;
}
var dt = { exports: {} };
(function(u, s) {
  (function(y, i) {
    u.exports = i(pn);
  })(typeof self < "u" ? self : vn, function(y) {
    return function(i) {
      var a = {};
      function l(d) {
        if (a[d])
          return a[d].exports;
        var m = a[d] = { i: d, l: !1, exports: {} };
        return i[d].call(m.exports, m, m.exports, l), m.l = !0, m.exports;
      }
      return l.m = i, l.c = a, l.d = function(d, m, g) {
        l.o(d, m) || Object.defineProperty(d, m, { enumerable: !0, get: g });
      }, l.r = function(d) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(d, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(d, "__esModule", { value: !0 });
      }, l.t = function(d, m) {
        if (1 & m && (d = l(d)), 8 & m || 4 & m && typeof d == "object" && d && d.__esModule)
          return d;
        var g = /* @__PURE__ */ Object.create(null);
        if (l.r(g), Object.defineProperty(g, "default", { enumerable: !0, value: d }), 2 & m && typeof d != "string")
          for (var p in d)
            l.d(g, p, function(O) {
              return d[O];
            }.bind(null, p));
        return g;
      }, l.n = function(d) {
        var m = d && d.__esModule ? function() {
          return d.default;
        } : function() {
          return d;
        };
        return l.d(m, "a", m), m;
      }, l.o = function(d, m) {
        return Object.prototype.hasOwnProperty.call(d, m);
      }, l.p = "", l(l.s = "fb15");
    }({ "091b": function(i, a, l) {
      var d = l("24fb");
      a = d(!1), a.push([i.i, ".vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip{visibility:visible}.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}", ""]), i.exports = a;
    }, "24fb": function(i, a, l) {
      function d(g, p) {
        var O = g[1] || "", h = g[3];
        if (!h)
          return O;
        if (p && typeof btoa == "function") {
          var _ = m(h), c = h.sources.map(function(v) {
            return "/*# sourceURL=".concat(h.sourceRoot || "").concat(v, " */");
          });
          return [O].concat(c).concat([_]).join(`
`);
        }
        return [O].join(`
`);
      }
      function m(g) {
        var p = btoa(unescape(encodeURIComponent(JSON.stringify(g)))), O = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(p);
        return "/*# ".concat(O, " */");
      }
      i.exports = function(g) {
        var p = [];
        return p.toString = function() {
          return this.map(function(O) {
            var h = d(O, g);
            return O[2] ? "@media ".concat(O[2], " {").concat(h, "}") : h;
          }).join("");
        }, p.i = function(O, h, _) {
          typeof O == "string" && (O = [[null, O, ""]]);
          var c = {};
          if (_)
            for (var v = 0; v < this.length; v++) {
              var b = this[v][0];
              b != null && (c[b] = !0);
            }
          for (var R = 0; R < O.length; R++) {
            var L = [].concat(O[R]);
            _ && c[L[0]] || (h && (L[2] ? L[2] = "".concat(h, " and ").concat(L[2]) : L[2] = h), p.push(L));
          }
        }, p;
      };
    }, 2638: function(i, a, l) {
      function d() {
        return d = Object.assign || function(_) {
          for (var c, v = 1; v < arguments.length; v++)
            for (var b in c = arguments[v], c)
              Object.prototype.hasOwnProperty.call(c, b) && (_[b] = c[b]);
          return _;
        }, d.apply(this, arguments);
      }
      var m = ["attrs", "props", "domProps"], g = ["class", "style", "directives"], p = ["on", "nativeOn"], O = function(_) {
        return _.reduce(function(c, v) {
          for (var b in v)
            if (c[b])
              if (m.indexOf(b) !== -1)
                c[b] = d({}, c[b], v[b]);
              else if (g.indexOf(b) !== -1) {
                var R = c[b] instanceof Array ? c[b] : [c[b]], L = v[b] instanceof Array ? v[b] : [v[b]];
                c[b] = R.concat(L);
              } else if (p.indexOf(b) !== -1)
                for (var H in v[b])
                  if (c[b][H]) {
                    var w = c[b][H] instanceof Array ? c[b][H] : [c[b][H]], N = v[b][H] instanceof Array ? v[b][H] : [v[b][H]];
                    c[b][H] = w.concat(N);
                  } else
                    c[b][H] = v[b][H];
              else if (b == "hook")
                for (var S in v[b])
                  c[b][S] = c[b][S] ? h(c[b][S], v[b][S]) : v[b][S];
              else
                c[b] = v[b];
            else
              c[b] = v[b];
          return c;
        }, {});
      }, h = function(_, c) {
        return function() {
          _ && _.apply(this, arguments), c && c.apply(this, arguments);
        };
      };
      i.exports = O;
    }, "499e": function(i, a, l) {
      function d(x, M) {
        for (var E = [], T = {}, D = 0; D < M.length; D++) {
          var I = M[D], C = I[0], z = I[1], $ = I[2], F = I[3], G = { id: x + ":" + D, css: z, media: $, sourceMap: F };
          T[C] ? T[C].parts.push(G) : E.push(T[C] = { id: C, parts: [G] });
        }
        return E;
      }
      l.r(a), l.d(a, "default", function() {
        return L;
      });
      var m = typeof document < "u";
      if (typeof DEBUG < "u" && DEBUG && !m)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
      var g = {}, p = m && (document.head || document.getElementsByTagName("head")[0]), O = null, h = 0, _ = !1, c = function() {
      }, v = null, b = "data-vue-ssr-id", R = typeof navigator < "u" && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function L(x, M, E, T) {
        _ = E, v = T || {};
        var D = d(x, M);
        return H(D), function(I) {
          for (var C = [], z = 0; z < D.length; z++) {
            var $ = D[z], F = g[$.id];
            F.refs--, C.push(F);
          }
          for (I ? (D = d(x, I), H(D)) : D = [], z = 0; z < C.length; z++)
            if (F = C[z], F.refs === 0) {
              for (var G = 0; G < F.parts.length; G++)
                F.parts[G]();
              delete g[F.id];
            }
        };
      }
      function H(x) {
        for (var M = 0; M < x.length; M++) {
          var E = x[M], T = g[E.id];
          if (T) {
            T.refs++;
            for (var D = 0; D < T.parts.length; D++)
              T.parts[D](E.parts[D]);
            for (; D < E.parts.length; D++)
              T.parts.push(N(E.parts[D]));
            T.parts.length > E.parts.length && (T.parts.length = E.parts.length);
          } else {
            var I = [];
            for (D = 0; D < E.parts.length; D++)
              I.push(N(E.parts[D]));
            g[E.id] = { id: E.id, refs: 1, parts: I };
          }
        }
      }
      function w() {
        var x = document.createElement("style");
        return x.type = "text/css", p.appendChild(x), x;
      }
      function N(x) {
        var M, E, T = document.querySelector("style[" + b + '~="' + x.id + '"]');
        if (T) {
          if (_)
            return c;
          T.parentNode.removeChild(T);
        }
        if (R) {
          var D = h++;
          T = O || (O = w()), M = P.bind(null, T, D, !1), E = P.bind(null, T, D, !0);
        } else
          T = w(), M = V.bind(null, T), E = function() {
            T.parentNode.removeChild(T);
          };
        return M(x), function(I) {
          if (I) {
            if (I.css === x.css && I.media === x.media && I.sourceMap === x.sourceMap)
              return;
            M(x = I);
          } else
            E();
        };
      }
      var S = function() {
        var x = [];
        return function(M, E) {
          return x[M] = E, x.filter(Boolean).join(`
`);
        };
      }();
      function P(x, M, E, T) {
        var D = E ? "" : T.css;
        if (x.styleSheet)
          x.styleSheet.cssText = S(M, D);
        else {
          var I = document.createTextNode(D), C = x.childNodes;
          C[M] && x.removeChild(C[M]), C.length ? x.insertBefore(I, C[M]) : x.appendChild(I);
        }
      }
      function V(x, M) {
        var E = M.css, T = M.media, D = M.sourceMap;
        if (T && x.setAttribute("media", T), v.ssrId && x.setAttribute(b, M.id), D && (E += `
/*# sourceURL=` + D.sources[0] + " */", E += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(D)))) + " */"), x.styleSheet)
          x.styleSheet.cssText = E;
        else {
          for (; x.firstChild; )
            x.removeChild(x.firstChild);
          x.appendChild(document.createTextNode(E));
        }
      }
    }, "4abb": function(i, a, l) {
      var d = l("7a57");
      typeof d == "string" && (d = [[i.i, d, ""]]), d.locals && (i.exports = d.locals);
      var m = l("499e").default;
      m("b2af7572", d, !0, { sourceMap: !1, shadowMode: !1 });
    }, "4ed8": function(i, a, l) {
      var d = l("091b");
      typeof d == "string" && (d = [[i.i, d, ""]]), d.locals && (i.exports = d.locals);
      var m = l("499e").default;
      m("2f6bee1a", d, !0, { sourceMap: !1, shadowMode: !1 });
    }, "556c": function(i, a, l) {
      var d = l("eef2");
      typeof d == "string" && (d = [[i.i, d, ""]]), d.locals && (i.exports = d.locals);
      var m = l("499e").default;
      m("1209fd47", d, !0, { sourceMap: !1, shadowMode: !1 });
    }, "65d9": function(i, a, l) {
      /**
      * vue-class-component v7.0.1
      * (c) 2015-present Evan You
      * @license MIT
      */
      function d(S) {
        return S && typeof S == "object" && "default" in S ? S.default : S;
      }
      Object.defineProperty(a, "__esModule", { value: !0 });
      var m = d(l("8bbf")), g = typeof Reflect < "u" && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
      function p(S, P) {
        O(S, P), Object.getOwnPropertyNames(P.prototype).forEach(function(V) {
          O(S.prototype, P.prototype, V);
        }), Object.getOwnPropertyNames(P).forEach(function(V) {
          O(S, P, V);
        });
      }
      function O(S, P, V) {
        var x = V ? Reflect.getOwnMetadataKeys(P, V) : Reflect.getOwnMetadataKeys(P);
        x.forEach(function(M) {
          var E = V ? Reflect.getOwnMetadata(M, P, V) : Reflect.getOwnMetadata(M, P);
          V ? Reflect.defineMetadata(M, E, S, V) : Reflect.defineMetadata(M, E, S);
        });
      }
      var h = { __proto__: [] }, _ = h instanceof Array;
      function c(S) {
        return function(P, V, x) {
          var M = typeof P == "function" ? P : P.constructor;
          M.__decorators__ || (M.__decorators__ = []), typeof x != "number" && (x = void 0), M.__decorators__.push(function(E) {
            return S(E, V, x);
          });
        };
      }
      function v() {
        for (var S = [], P = 0; P < arguments.length; P++)
          S[P] = arguments[P];
        return m.extend({ mixins: S });
      }
      function b(S) {
        var P = typeof S;
        return S == null || P !== "object" && P !== "function";
      }
      function R(S, P) {
        var V = P.prototype._init;
        P.prototype._init = function() {
          var E = this, T = Object.getOwnPropertyNames(S);
          if (S.$options.props)
            for (var D in S.$options.props)
              S.hasOwnProperty(D) || T.push(D);
          T.forEach(function(I) {
            I.charAt(0) !== "_" && Object.defineProperty(E, I, { get: function() {
              return S[I];
            }, set: function(C) {
              S[I] = C;
            }, configurable: !0 });
          });
        };
        var x = new P();
        P.prototype._init = V;
        var M = {};
        return Object.keys(x).forEach(function(E) {
          x[E] !== void 0 && (M[E] = x[E]);
        }), M;
      }
      var L = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];
      function H(S, P) {
        P === void 0 && (P = {}), P.name = P.name || S._componentTag || S.name;
        var V = S.prototype;
        Object.getOwnPropertyNames(V).forEach(function(D) {
          if (D !== "constructor")
            if (L.indexOf(D) > -1)
              P[D] = V[D];
            else {
              var I = Object.getOwnPropertyDescriptor(V, D);
              I.value !== void 0 ? typeof I.value == "function" ? (P.methods || (P.methods = {}))[D] = I.value : (P.mixins || (P.mixins = [])).push({ data: function() {
                var C;
                return C = {}, C[D] = I.value, C;
              } }) : (I.get || I.set) && ((P.computed || (P.computed = {}))[D] = { get: I.get, set: I.set });
            }
        }), (P.mixins || (P.mixins = [])).push({ data: function() {
          return R(this, S);
        } });
        var x = S.__decorators__;
        x && (x.forEach(function(D) {
          return D(P);
        }), delete S.__decorators__);
        var M = Object.getPrototypeOf(S.prototype), E = M instanceof m ? M.constructor : m, T = E.extend(P);
        return w(T, S, E), g && p(T, S), T;
      }
      function w(S, P, V) {
        Object.getOwnPropertyNames(P).forEach(function(x) {
          if (x !== "prototype") {
            var M = Object.getOwnPropertyDescriptor(S, x);
            if (!M || M.configurable) {
              var E = Object.getOwnPropertyDescriptor(P, x);
              if (!_) {
                if (x === "cid")
                  return;
                var T = Object.getOwnPropertyDescriptor(V, x);
                if (!b(E.value) && T && T.value === E.value)
                  return;
              }
              Object.defineProperty(S, x, E);
            }
          }
        });
      }
      function N(S) {
        return typeof S == "function" ? H(S) : function(P) {
          return H(P, S);
        };
      }
      N.registerHooks = function(S) {
        L.push.apply(L, S);
      }, a.default = N, a.createDecorator = c, a.mixins = v;
    }, "7a57": function(i, a, l) {
      var d = l("24fb");
      a = d(!1), a.push([i.i, ".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}", ""]), i.exports = a;
    }, 8875: function(i, a, l) {
      var d, m, g;
      (function(p, O) {
        m = [], d = O, g = typeof d == "function" ? d.apply(a, m) : d, g === void 0 || (i.exports = g);
      })(typeof self < "u" && self, function() {
        function p() {
          var O = Object.getOwnPropertyDescriptor(document, "currentScript");
          if (!O && "currentScript" in document && document.currentScript || O && O.get !== p && document.currentScript)
            return document.currentScript;
          try {
            throw new Error();
          } catch (P) {
            var h, _, c, v = /.*at [^(]*\((.*):(.+):(.+)\)$/gi, b = /@([^@]*):(\d+):(\d+)\s*$/gi, R = v.exec(P.stack) || b.exec(P.stack), L = R && R[1] || !1, H = R && R[2] || !1, w = document.location.href.replace(document.location.hash, ""), N = document.getElementsByTagName("script");
            L === w && (h = document.documentElement.outerHTML, _ = new RegExp("(?:[^\\n]+?\\n){0," + (H - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), c = h.replace(_, "$1").trim());
            for (var S = 0; S < N.length; S++)
              if (N[S].readyState === "interactive" || N[S].src === L || L === w && N[S].innerHTML && N[S].innerHTML.trim() === c)
                return N[S];
            return null;
          }
        }
        return p;
      });
    }, "8bbf": function(i, a) {
      i.exports = y;
    }, eef2: function(i, a, l) {
      var d = l("24fb");
      a = d(!1), a.push([i.i, ".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}", ""]), i.exports = a;
    }, fb15: function(i, a, l) {
      if (l.r(a), l.d(a, "ERROR_TYPE", function() {
        return W;
      }), l.d(a, "VueSliderMark", function() {
        return Re;
      }), l.d(a, "VueSliderDot", function() {
        return F;
      }), typeof window < "u") {
        var d = window.document.currentScript, m = l("8875");
        d = m(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: m });
        var g = d && d.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
        g && (l.p = g[1]);
      }
      var p = l("2638"), O = l.n(p);
      function h(n, e, r, t) {
        var o, f = arguments.length, k = f < 3 ? e : t === null ? t = Object.getOwnPropertyDescriptor(e, r) : t;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          k = Reflect.decorate(n, e, r, t);
        else
          for (var A = n.length - 1; A >= 0; A--)
            (o = n[A]) && (k = (f < 3 ? o(k) : f > 3 ? o(e, r, k) : o(e, r)) || k);
        return f > 3 && k && Object.defineProperty(e, r, k), k;
      }
      var _ = l("8bbf"), c = l.n(_), v = l("65d9"), b = l.n(v), R = typeof Reflect < "u" && typeof Reflect.getMetadata < "u";
      function L(n, e, r) {
        R && (Array.isArray(n) || typeof n == "function" || typeof n.type < "u" || (n.type = Reflect.getMetadata("design:type", e, r)));
      }
      function H(n, e) {
        return e === void 0 && (e = {}), function(r, t) {
          L(e, r, t), Object(v.createDecorator)(function(o, f) {
            (o.props || (o.props = {}))[f] = e, o.model = { prop: f, event: n || f };
          })(r, t);
        };
      }
      function w(n) {
        return n === void 0 && (n = {}), function(e, r) {
          L(n, e, r), Object(v.createDecorator)(function(t, o) {
            (t.props || (t.props = {}))[o] = n;
          })(e, r);
        };
      }
      function N(n, e) {
        e === void 0 && (e = {});
        var r = e.deep, t = r !== void 0 && r, o = e.immediate, f = o !== void 0 && o;
        return Object(v.createDecorator)(function(k, A) {
          typeof k.watch != "object" && (k.watch = /* @__PURE__ */ Object.create(null));
          var B = k.watch;
          typeof B[n] != "object" || Array.isArray(B[n]) ? typeof B[n] > "u" && (B[n] = []) : B[n] = [B[n]], B[n].push({ handler: A, deep: t, immediate: f });
        });
      }
      l("4ed8");
      function S(n) {
        return S = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, S(n);
      }
      function P(n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function V(n, e) {
        for (var r = 0; r < e.length; r++) {
          var t = e[r];
          t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(n, t.key, t);
        }
      }
      function x(n, e, r) {
        return e && V(n.prototype, e), r && V(n, r), n;
      }
      function M(n, e) {
        if (typeof e != "function" && e !== null)
          throw new TypeError("Super expression must either be null or a function");
        n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), e && E(n, e);
      }
      function E(n, e) {
        return E = Object.setPrototypeOf || function(r, t) {
          return r.__proto__ = t, r;
        }, E(n, e);
      }
      function T(n) {
        var e = C();
        return function() {
          var r, t = z(n);
          if (e) {
            var o = z(this).constructor;
            r = Reflect.construct(t, arguments, o);
          } else
            r = t.apply(this, arguments);
          return D(this, r);
        };
      }
      function D(n, e) {
        return !e || S(e) !== "object" && typeof e != "function" ? I(n) : e;
      }
      function I(n) {
        if (n === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n;
      }
      function C() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }
      function z(n) {
        return z = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, z(n);
      }
      var $ = function(n) {
        M(r, n);
        var e = T(r);
        function r() {
          return P(this, r), e.apply(this, arguments);
        }
        return x(r, [{ key: "dragStart", value: function(t) {
          if (this.disabled)
            return !1;
          this.$emit("drag-start");
        } }, { key: "render", value: function() {
          var t = arguments[0];
          return t("div", { ref: "dot", class: this.dotClasses, attrs: { "aria-valuetext": this.tooltipValue }, on: { mousedown: this.dragStart, touchstart: this.dragStart } }, [this.$slots.dot || t("div", { class: this.handleClasses, style: this.dotStyle }), this.tooltip !== "none" ? t("div", { class: this.tooltipClasses }, [this.$slots.tooltip || t("div", { class: this.tooltipInnerClasses, style: this.tooltipStyle }, [t("span", { class: "vue-slider-dot-tooltip-text" }, [this.tooltipValue])])]) : null]);
        } }, { key: "dotClasses", get: function() {
          return ["vue-slider-dot", { "vue-slider-dot-hover": this.tooltip === "hover" || this.tooltip === "active", "vue-slider-dot-disabled": this.disabled, "vue-slider-dot-focus": this.focus }];
        } }, { key: "handleClasses", get: function() {
          return ["vue-slider-dot-handle", { "vue-slider-dot-handle-disabled": this.disabled, "vue-slider-dot-handle-focus": this.focus }];
        } }, { key: "tooltipClasses", get: function() {
          return ["vue-slider-dot-tooltip", ["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)], { "vue-slider-dot-tooltip-show": this.showTooltip }];
        } }, { key: "tooltipInnerClasses", get: function() {
          return ["vue-slider-dot-tooltip-inner", ["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)], { "vue-slider-dot-tooltip-inner-disabled": this.disabled, "vue-slider-dot-tooltip-inner-focus": this.focus }];
        } }, { key: "showTooltip", get: function() {
          switch (this.tooltip) {
            case "always":
              return !0;
            case "none":
              return !1;
            case "focus":
            case "active":
              return !!this.focus;
            default:
              return !1;
          }
        } }, { key: "tooltipValue", get: function() {
          return this.tooltipFormatter ? typeof this.tooltipFormatter == "string" ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value) : this.value;
        } }]), r;
      }(c.a);
      h([w({ default: 0 })], $.prototype, "value", void 0), h([w()], $.prototype, "tooltip", void 0), h([w()], $.prototype, "dotStyle", void 0), h([w()], $.prototype, "tooltipStyle", void 0), h([w({ type: String, validator: function(n) {
        return ["top", "right", "bottom", "left"].indexOf(n) > -1;
      }, required: !0 })], $.prototype, "tooltipPlacement", void 0), h([w({ type: [String, Function] })], $.prototype, "tooltipFormatter", void 0), h([w({ type: Boolean, default: !1 })], $.prototype, "focus", void 0), h([w({ default: !1 })], $.prototype, "disabled", void 0), $ = h([b()({ name: "VueSliderDot" })], $);
      var F = $;
      l("556c");
      function G(n) {
        return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, G(n);
      }
      function St(n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ue(n, e) {
        for (var r = 0; r < e.length; r++) {
          var t = e[r];
          t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(n, t.key, t);
        }
      }
      function wt(n, e, r) {
        return e && Ue(n.prototype, e), r && Ue(n, r), n;
      }
      function xt(n, e) {
        if (typeof e != "function" && e !== null)
          throw new TypeError("Super expression must either be null or a function");
        n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), e && Ee(n, e);
      }
      function Ee(n, e) {
        return Ee = Object.setPrototypeOf || function(r, t) {
          return r.__proto__ = t, r;
        }, Ee(n, e);
      }
      function Pt(n) {
        var e = Rt();
        return function() {
          var r, t = fe(n);
          if (e) {
            var o = fe(this).constructor;
            r = Reflect.construct(t, arguments, o);
          } else
            r = t.apply(this, arguments);
          return At(this, r);
        };
      }
      function At(n, e) {
        return !e || G(e) !== "object" && typeof e != "function" ? Et(n) : e;
      }
      function Et(n) {
        if (n === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n;
      }
      function Rt() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }
      function fe(n) {
        return fe = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, fe(n);
      }
      var J = function(n) {
        xt(r, n);
        var e = Pt(r);
        function r() {
          return St(this, r), e.apply(this, arguments);
        }
        return wt(r, [{ key: "labelClickHandle", value: function(t) {
          t.stopPropagation(), this.$emit("pressLabel", this.mark.pos);
        } }, { key: "render", value: function() {
          var t = arguments[0], o = this.mark;
          return t("div", { class: this.marksClasses }, [this.$slots.step || t("div", { class: this.stepClasses, style: [this.stepStyle, o.style, o.active ? this.stepActiveStyle : null, o.active ? o.activeStyle : null] }), this.hideLabel ? null : this.$slots.label || t("div", { class: this.labelClasses, style: [this.labelStyle, o.labelStyle, o.active ? this.labelActiveStyle : null, o.active ? o.labelActiveStyle : null], on: { click: this.labelClickHandle } }, [o.label])]);
        } }, { key: "marksClasses", get: function() {
          return ["vue-slider-mark", { "vue-slider-mark-active": this.mark.active }];
        } }, { key: "stepClasses", get: function() {
          return ["vue-slider-mark-step", { "vue-slider-mark-step-active": this.mark.active }];
        } }, { key: "labelClasses", get: function() {
          return ["vue-slider-mark-label", { "vue-slider-mark-label-active": this.mark.active }];
        } }]), r;
      }(c.a);
      h([w({ required: !0 })], J.prototype, "mark", void 0), h([w(Boolean)], J.prototype, "hideLabel", void 0), h([w()], J.prototype, "stepStyle", void 0), h([w()], J.prototype, "stepActiveStyle", void 0), h([w()], J.prototype, "labelStyle", void 0), h([w()], J.prototype, "labelActiveStyle", void 0), J = h([b()({ name: "VueSlideMark" })], J);
      var K, Re = J, ie = function(n) {
        return typeof n == "number" ? "".concat(n, "px") : n;
      }, Dt = function(n) {
        var e = document.documentElement, r = document.body, t = n.getBoundingClientRect(), o = { y: t.top + (window.pageYOffset || e.scrollTop) - (e.clientTop || r.clientTop || 0), x: t.left + (window.pageXOffset || e.scrollLeft) - (e.clientLeft || r.clientLeft || 0) };
        return o;
      }, jt = function(n, e, r) {
        var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, o = "targetTouches" in n ? n.targetTouches[0] : n, f = Dt(e), k = { x: o.pageX - f.x, y: o.pageY - f.y };
        return { x: r ? e.offsetWidth * t - k.x : k.x, y: r ? e.offsetHeight * t - k.y : k.y };
      };
      (function(n) {
        n[n.PAGE_UP = 33] = "PAGE_UP", n[n.PAGE_DOWN = 34] = "PAGE_DOWN", n[n.END = 35] = "END", n[n.HOME = 36] = "HOME", n[n.LEFT = 37] = "LEFT", n[n.UP = 38] = "UP", n[n.RIGHT = 39] = "RIGHT", n[n.DOWN = 40] = "DOWN";
      })(K || (K = {}));
      var Mt = function(n, e) {
        if (e.hook) {
          var r = e.hook(n);
          if (typeof r == "function")
            return r;
          if (!r)
            return null;
        }
        switch (n.keyCode) {
          case K.UP:
            return function(t) {
              return e.direction === "ttb" ? t - 1 : t + 1;
            };
          case K.RIGHT:
            return function(t) {
              return e.direction === "rtl" ? t - 1 : t + 1;
            };
          case K.DOWN:
            return function(t) {
              return e.direction === "ttb" ? t + 1 : t - 1;
            };
          case K.LEFT:
            return function(t) {
              return e.direction === "rtl" ? t + 1 : t - 1;
            };
          case K.END:
            return function() {
              return e.max;
            };
          case K.HOME:
            return function() {
              return e.min;
            };
          case K.PAGE_UP:
            return function(t) {
              return t + 10;
            };
          case K.PAGE_DOWN:
            return function(t) {
              return t - 10;
            };
          default:
            return null;
        }
      };
      function Tt(n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function $e(n, e) {
        for (var r = 0; r < e.length; r++) {
          var t = e[r];
          t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(n, t.key, t);
        }
      }
      function Bt(n, e, r) {
        return e && $e(n.prototype, e), r && $e(n, r), n;
      }
      var ee, W, Q = function() {
        function n(e) {
          Tt(this, n), this.num = e;
        }
        return Bt(n, [{ key: "decimal", value: function(e, r) {
          var t = this.num, o = this.getDecimalLen(t), f = this.getDecimalLen(e), k = 0;
          switch (r) {
            case "+":
              k = this.getExponent(o, f), this.num = (this.safeRoundUp(t, k) + this.safeRoundUp(e, k)) / k;
              break;
            case "-":
              k = this.getExponent(o, f), this.num = (this.safeRoundUp(t, k) - this.safeRoundUp(e, k)) / k;
              break;
            case "*":
              this.num = this.safeRoundUp(this.safeRoundUp(t, this.getExponent(o)), this.safeRoundUp(e, this.getExponent(f))) / this.getExponent(o + f);
              break;
            case "/":
              k = this.getExponent(o, f), this.num = this.safeRoundUp(t, k) / this.safeRoundUp(e, k);
              break;
            case "%":
              k = this.getExponent(o, f), this.num = this.safeRoundUp(t, k) % this.safeRoundUp(e, k) / k;
              break;
          }
          return this;
        } }, { key: "plus", value: function(e) {
          return this.decimal(e, "+");
        } }, { key: "minus", value: function(e) {
          return this.decimal(e, "-");
        } }, { key: "multiply", value: function(e) {
          return this.decimal(e, "*");
        } }, { key: "divide", value: function(e) {
          return this.decimal(e, "/");
        } }, { key: "remainder", value: function(e) {
          return this.decimal(e, "%");
        } }, { key: "toNumber", value: function() {
          return this.num;
        } }, { key: "getDecimalLen", value: function(e) {
          var r = "".concat(e).split("e");
          return ("".concat(r[0]).split(".")[1] || "").length - (r[1] ? +r[1] : 0);
        } }, { key: "getExponent", value: function(e, r) {
          return Math.pow(10, r !== void 0 ? Math.max(e, r) : e);
        } }, { key: "safeRoundUp", value: function(e, r) {
          return Math.round(e * r);
        } }]), n;
      }();
      function ze(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(n);
          e && (t = t.filter(function(o) {
            return Object.getOwnPropertyDescriptor(n, o).enumerable;
          })), r.push.apply(r, t);
        }
        return r;
      }
      function It(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e] != null ? arguments[e] : {};
          e % 2 ? ze(Object(r), !0).forEach(function(t) {
            ne(n, t, r[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : ze(Object(r)).forEach(function(t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t));
          });
        }
        return n;
      }
      function Lt(n, e) {
        return Ht(n) || Ct(n, e) || qe(n, e) || Vt();
      }
      function Vt() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ct(n, e) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(n)) {
          var r = [], t = !0, o = !1, f = void 0;
          try {
            for (var k, A = n[Symbol.iterator](); !(t = (k = A.next()).done) && (r.push(k.value), !(e && r.length === e)); t = !0)
              ;
          } catch (B) {
            o = !0, f = B;
          } finally {
            try {
              t || A.return == null || A.return();
            } finally {
              if (o)
                throw f;
            }
          }
          return r;
        }
      }
      function Ht(n) {
        if (Array.isArray(n))
          return n;
      }
      function te(n) {
        return $t(n) || Ut(n) || qe(n) || Nt();
      }
      function Nt() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function qe(n, e) {
        if (n) {
          if (typeof n == "string")
            return De(n, e);
          var r = Object.prototype.toString.call(n).slice(8, -1);
          return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? De(n, e) : void 0;
        }
      }
      function Ut(n) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(n))
          return Array.from(n);
      }
      function $t(n) {
        if (Array.isArray(n))
          return De(n);
      }
      function De(n, e) {
        (e == null || e > n.length) && (e = n.length);
        for (var r = 0, t = new Array(e); r < e; r++)
          t[r] = n[r];
        return t;
      }
      function zt(n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Fe(n, e) {
        for (var r = 0; r < e.length; r++) {
          var t = e[r];
          t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(n, t.key, t);
        }
      }
      function qt(n, e, r) {
        return e && Fe(n.prototype, e), r && Fe(n, r), n;
      }
      function ne(n, e, r) {
        return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
      }
      (function(n) {
        n[n.VALUE = 1] = "VALUE", n[n.INTERVAL = 2] = "INTERVAL", n[n.MIN = 3] = "MIN", n[n.MAX = 4] = "MAX", n[n.ORDER = 5] = "ORDER";
      })(W || (W = {}));
      var Ft = (ee = {}, ne(ee, W.VALUE, 'The type of the "value" is illegal'), ne(ee, W.INTERVAL, 'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'), ne(ee, W.MIN, 'The "value" must be greater than or equal to the "min".'), ne(ee, W.MAX, 'The "value" must be less than or equal to the "max".'), ne(ee, W.ORDER, 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'), ee), Wt = function() {
        function n(e) {
          zt(this, n), this.dotsPos = [], this.dotsValue = [], this.cacheRangeDir = {}, this.data = e.data, this.max = e.max, this.min = e.min, this.interval = e.interval, this.order = e.order, this.marks = e.marks, this.included = e.included, this.process = e.process, this.adsorb = e.adsorb, this.dotOptions = e.dotOptions, this.onError = e.onError, this.order ? (this.minRange = e.minRange || 0, this.maxRange = e.maxRange || 0, this.enableCross = e.enableCross, this.fixed = e.fixed) : ((e.minRange || e.maxRange || !e.enableCross || e.fixed) && this.emitError(W.ORDER), this.minRange = 0, this.maxRange = 0, this.enableCross = !0, this.fixed = !1), this.setValue(e.value);
        }
        return qt(n, [{ key: "setValue", value: function(e) {
          var r = this;
          this.setDotsValue(Array.isArray(e) ? this.order ? te(e).sort(function(t, o) {
            return r.getIndexByValue(t) - r.getIndexByValue(o);
          }) : te(e) : [e], !0);
        } }, { key: "setDotsValue", value: function(e, r) {
          this.dotsValue = e, r && this.syncDotsPos();
        } }, { key: "setDotsPos", value: function(e) {
          var r = this, t = this.order ? te(e).sort(function(o, f) {
            return o - f;
          }) : e;
          this.dotsPos = t, this.setDotsValue(t.map(function(o) {
            return r.getValueByPos(o);
          }), this.adsorb);
        } }, { key: "getValueByPos", value: function(e) {
          var r = this.parsePos(e);
          if (this.included) {
            var t = 100;
            this.markList.forEach(function(o) {
              var f = Math.abs(o.pos - e);
              f < t && (t = f, r = o.value);
            });
          }
          return r;
        } }, { key: "syncDotsPos", value: function() {
          var e = this;
          this.dotsPos = this.dotsValue.map(function(r) {
            return e.parseValue(r);
          });
        } }, { key: "getRecentDot", value: function(e) {
          var r = this, t = this.dotsPos.filter(function(o, f) {
            return !(r.getDotOption(f) && r.getDotOption(f).disabled);
          }).map(function(o) {
            return Math.abs(o - e);
          });
          return t.indexOf(Math.min.apply(Math, te(t)));
        } }, { key: "getIndexByValue", value: function(e) {
          return this.data ? this.data.indexOf(e) : new Q(+e).minus(this.min).divide(this.interval).toNumber();
        } }, { key: "getValueByIndex", value: function(e) {
          return e < 0 ? e = 0 : e > this.total && (e = this.total), this.data ? this.data[e] : new Q(e).multiply(this.interval).plus(this.min).toNumber();
        } }, { key: "setDotPos", value: function(e, r) {
          e = this.getValidPos(e, r).pos;
          var t = e - this.dotsPos[r];
          if (t) {
            var o = new Array(this.dotsPos.length);
            this.fixed ? o = this.getFixedChangePosArr(t, r) : this.minRange || this.maxRange ? o = this.getLimitRangeChangePosArr(e, t, r) : o[r] = t, this.setDotsPos(this.dotsPos.map(function(f, k) {
              return f + (o[k] || 0);
            }));
          }
        } }, { key: "getFixedChangePosArr", value: function(e, r) {
          var t = this;
          return this.dotsPos.forEach(function(o, f) {
            if (f !== r) {
              var k = t.getValidPos(o + e, f), A = k.pos, B = k.inRange;
              B || (e = Math.min(Math.abs(A - o), Math.abs(e)) * (e < 0 ? -1 : 1));
            }
          }), this.dotsPos.map(function(o) {
            return e;
          });
        } }, { key: "getLimitRangeChangePosArr", value: function(e, r, t) {
          var o = this, f = [{ index: t, changePos: r }], k = r;
          return [this.minRange, this.maxRange].forEach(function(A, B) {
            if (!A)
              return !1;
            var X = B === 0, Z = r > 0, re = 0;
            re = X ? Z ? 1 : -1 : Z ? -1 : 1;
            for (var pe = function(dn, hn) {
              var Qe = Math.abs(dn - hn);
              return X ? Qe < o.minRangeDir : Qe > o.maxRangeDir;
            }, se = t + re, ue = o.dotsPos[se], Ye = e; o.isPos(ue) && pe(ue, Ye); ) {
              var fn = o.getValidPos(ue + k, se), Je = fn.pos;
              f.push({ index: se, changePos: Je - ue }), se += re, Ye = Je, ue = o.dotsPos[se];
            }
          }), this.dotsPos.map(function(A, B) {
            var X = f.filter(function(Z) {
              return Z.index === B;
            });
            return X.length ? X[0].changePos : 0;
          });
        } }, { key: "isPos", value: function(e) {
          return typeof e == "number";
        } }, { key: "getValidPos", value: function(e, r) {
          var t = this.valuePosRange[r], o = !0;
          return e < t[0] ? (e = t[0], o = !1) : e > t[1] && (e = t[1], o = !1), { pos: e, inRange: o };
        } }, { key: "parseValue", value: function(e) {
          if (this.data)
            e = this.data.indexOf(e);
          else if (typeof e == "number" || typeof e == "string") {
            if (e = +e, e < this.min)
              return this.emitError(W.MIN), 0;
            if (e > this.max)
              return this.emitError(W.MAX), 0;
            if (typeof e != "number" || e !== e)
              return this.emitError(W.VALUE), 0;
            e = new Q(e).minus(this.min).divide(this.interval).toNumber();
          }
          var r = new Q(e).multiply(this.gap).toNumber();
          return r < 0 ? 0 : r > 100 ? 100 : r;
        } }, { key: "parsePos", value: function(e) {
          var r = Math.round(e / this.gap);
          return this.getValueByIndex(r);
        } }, { key: "isActiveByPos", value: function(e) {
          return this.processArray.some(function(r) {
            var t = Lt(r, 2), o = t[0], f = t[1];
            return e >= o && e <= f;
          });
        } }, { key: "getValues", value: function() {
          if (this.data)
            return this.data;
          for (var e = [], r = 0; r <= this.total; r++)
            e.push(new Q(r).multiply(this.interval).plus(this.min).toNumber());
          return e;
        } }, { key: "getRangeDir", value: function(e) {
          return e ? new Q(e).divide(new Q(this.data ? this.data.length - 1 : this.max).minus(this.data ? 0 : this.min).toNumber()).multiply(100).toNumber() : 100;
        } }, { key: "emitError", value: function(e) {
          this.onError && this.onError(e, Ft[e]);
        } }, { key: "getDotOption", value: function(e) {
          return Array.isArray(this.dotOptions) ? this.dotOptions[e] : this.dotOptions;
        } }, { key: "getDotRange", value: function(e, r, t) {
          if (!this.dotOptions)
            return t;
          var o = this.getDotOption(e);
          return o && o[r] !== void 0 ? this.parseValue(o[r]) : t;
        } }, { key: "markList", get: function() {
          var e = this;
          if (!this.marks)
            return [];
          var r = function(t, o) {
            var f = e.parseValue(t);
            return It({ pos: f, value: t, label: t, active: e.isActiveByPos(f) }, o);
          };
          return this.marks === !0 ? this.getValues().map(function(t) {
            return r(t);
          }) : Object.prototype.toString.call(this.marks) === "[object Object]" ? Object.keys(this.marks).sort(function(t, o) {
            return +t - +o;
          }).map(function(t) {
            var o = e.marks[t];
            return r(t, typeof o != "string" ? o : { label: o });
          }) : Array.isArray(this.marks) ? this.marks.map(function(t) {
            return r(t);
          }) : typeof this.marks == "function" ? this.getValues().map(function(t) {
            return { value: t, result: e.marks(t) };
          }).filter(function(t) {
            var o = t.result;
            return !!o;
          }).map(function(t) {
            var o = t.value, f = t.result;
            return r(o, f);
          }) : [];
        } }, { key: "processArray", get: function() {
          if (this.process) {
            if (typeof this.process == "function")
              return this.process(this.dotsPos);
            if (this.dotsPos.length === 1)
              return [[0, this.dotsPos[0]]];
            if (this.dotsPos.length > 1)
              return [[Math.min.apply(Math, te(this.dotsPos)), Math.max.apply(Math, te(this.dotsPos))]];
          }
          return [];
        } }, { key: "total", get: function() {
          var e = 0;
          return e = this.data ? this.data.length - 1 : new Q(this.max).minus(this.min).divide(this.interval).toNumber(), e - Math.floor(e) !== 0 ? (this.emitError(W.INTERVAL), 0) : e;
        } }, { key: "gap", get: function() {
          return 100 / this.total;
        } }, { key: "minRangeDir", get: function() {
          return this.cacheRangeDir[this.minRange] ? this.cacheRangeDir[this.minRange] : this.cacheRangeDir[this.minRange] = this.getRangeDir(this.minRange);
        } }, { key: "maxRangeDir", get: function() {
          return this.cacheRangeDir[this.maxRange] ? this.cacheRangeDir[this.maxRange] : this.cacheRangeDir[this.maxRange] = this.getRangeDir(this.maxRange);
        } }, { key: "valuePosRange", get: function() {
          var e = this, r = this.dotsPos, t = [];
          return r.forEach(function(o, f) {
            t.push([Math.max(e.minRange ? e.minRangeDir * f : 0, e.enableCross ? 0 : r[f - 1] || 0, e.getDotRange(f, "min", 0)), Math.min(e.minRange ? 100 - e.minRangeDir * (r.length - 1 - f) : 100, e.enableCross ? 100 : r[f + 1] || 100, e.getDotRange(f, "max", 100))]);
          }), t;
        } }, { key: "dotsIndex", get: function() {
          var e = this;
          return this.dotsValue.map(function(r) {
            return e.getIndexByValue(r);
          });
        } }]), n;
      }();
      function Xt(n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function We(n, e) {
        for (var r = 0; r < e.length; r++) {
          var t = e[r];
          t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(n, t.key, t);
        }
      }
      function Gt(n, e, r) {
        return e && We(n.prototype, e), r && We(n, r), n;
      }
      var Kt = function() {
        function n(e) {
          Xt(this, n), this.states = 0, this.map = e;
        }
        return Gt(n, [{ key: "add", value: function(e) {
          this.states |= e;
        } }, { key: "delete", value: function(e) {
          this.states &= ~e;
        } }, { key: "toggle", value: function(e) {
          this.has(e) ? this.delete(e) : this.add(e);
        } }, { key: "has", value: function(e) {
          return !!(this.states & e);
        } }]), n;
      }();
      l("4abb");
      function je(n, e) {
        return Qt(n) || Jt(n, e) || Ge(n, e) || Yt();
      }
      function Yt() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Jt(n, e) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(n)) {
          var r = [], t = !0, o = !1, f = void 0;
          try {
            for (var k, A = n[Symbol.iterator](); !(t = (k = A.next()).done) && (r.push(k.value), !(e && r.length === e)); t = !0)
              ;
          } catch (B) {
            o = !0, f = B;
          } finally {
            try {
              t || A.return == null || A.return();
            } finally {
              if (o)
                throw f;
            }
          }
          return r;
        }
      }
      function Qt(n) {
        if (Array.isArray(n))
          return n;
      }
      function Xe(n, e) {
        var r = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var t = Object.getOwnPropertySymbols(n);
          e && (t = t.filter(function(o) {
            return Object.getOwnPropertyDescriptor(n, o).enumerable;
          })), r.push.apply(r, t);
        }
        return r;
      }
      function ae(n) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e] != null ? arguments[e] : {};
          e % 2 ? Xe(Object(r), !0).forEach(function(t) {
            q(n, t, r[t]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : Xe(Object(r)).forEach(function(t) {
            Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(r, t));
          });
        }
        return n;
      }
      function q(n, e, r) {
        return e in n ? Object.defineProperty(n, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : n[e] = r, n;
      }
      function Me(n) {
        return tn(n) || en(n) || Ge(n) || Zt();
      }
      function Zt() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ge(n, e) {
        if (n) {
          if (typeof n == "string")
            return Te(n, e);
          var r = Object.prototype.toString.call(n).slice(8, -1);
          return r === "Object" && n.constructor && (r = n.constructor.name), r === "Map" || r === "Set" ? Array.from(n) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Te(n, e) : void 0;
        }
      }
      function en(n) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(n))
          return Array.from(n);
      }
      function tn(n) {
        if (Array.isArray(n))
          return Te(n);
      }
      function Te(n, e) {
        (e == null || e > n.length) && (e = n.length);
        for (var r = 0, t = new Array(e); r < e; r++)
          t[r] = n[r];
        return t;
      }
      function de(n) {
        return de = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
          return typeof e;
        } : function(e) {
          return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        }, de(n);
      }
      function nn(n, e) {
        if (!(n instanceof e))
          throw new TypeError("Cannot call a class as a function");
      }
      function Ke(n, e) {
        for (var r = 0; r < e.length; r++) {
          var t = e[r];
          t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(n, t.key, t);
        }
      }
      function rn(n, e, r) {
        return e && Ke(n.prototype, e), r && Ke(n, r), n;
      }
      function on(n, e) {
        if (typeof e != "function" && e !== null)
          throw new TypeError("Super expression must either be null or a function");
        n.prototype = Object.create(e && e.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), e && Be(n, e);
      }
      function Be(n, e) {
        return Be = Object.setPrototypeOf || function(r, t) {
          return r.__proto__ = t, r;
        }, Be(n, e);
      }
      function an(n) {
        var e = ln();
        return function() {
          var r, t = he(n);
          if (e) {
            var o = he(this).constructor;
            r = Reflect.construct(t, arguments, o);
          } else
            r = t.apply(this, arguments);
          return sn(this, r);
        };
      }
      function sn(n, e) {
        return !e || de(e) !== "object" && typeof e != "function" ? un(n) : e;
      }
      function un(n) {
        if (n === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return n;
      }
      function ln() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }
      function he(n) {
        return he = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }, he(n);
      }
      var U = { None: 0, Drag: 2, Focus: 4 }, Ie = 4, j = function(n) {
        on(r, n);
        var e = an(r);
        function r() {
          var t;
          return nn(this, r), t = e.apply(this, arguments), t.states = new Kt(U), t.scale = 1, t.focusDotIndex = 0, t;
        }
        return rn(r, [{ key: "isObjectData", value: function(t) {
          return !!t && Object.prototype.toString.call(t) === "[object Object]";
        } }, { key: "isObjectArrayData", value: function(t) {
          return !!t && Array.isArray(t) && t.length > 0 && de(t[0]) === "object";
        } }, { key: "onValueChanged", value: function() {
          this.control && !this.states.has(U.Drag) && this.isNotSync && (this.control.setValue(this.value), this.syncValueByPos());
        } }, { key: "created", value: function() {
          this.initControl();
        } }, { key: "mounted", value: function() {
          this.bindEvent();
        } }, { key: "beforeDestroy", value: function() {
          this.unbindEvent();
        } }, { key: "bindEvent", value: function() {
          document.addEventListener("touchmove", this.dragMove, { passive: !1 }), document.addEventListener("touchend", this.dragEnd, { passive: !1 }), document.addEventListener("mousedown", this.blurHandle), document.addEventListener("mousemove", this.dragMove, { passive: !1 }), document.addEventListener("mouseup", this.dragEnd), document.addEventListener("mouseleave", this.dragEnd), document.addEventListener("keydown", this.keydownHandle);
        } }, { key: "unbindEvent", value: function() {
          document.removeEventListener("touchmove", this.dragMove), document.removeEventListener("touchend", this.dragEnd), document.removeEventListener("mousedown", this.blurHandle), document.removeEventListener("mousemove", this.dragMove), document.removeEventListener("mouseup", this.dragEnd), document.removeEventListener("mouseleave", this.dragEnd), document.removeEventListener("keydown", this.keydownHandle);
        } }, { key: "setScale", value: function() {
          var t = new Q(Math.floor(this.isHorizontal ? this.$refs.rail.offsetWidth : this.$refs.rail.offsetHeight));
          this.zoom !== void 0 && t.multiply(this.zoom), t.divide(100), this.scale = t.toNumber();
        } }, { key: "initControl", value: function() {
          var t = this;
          this.control = new Wt({ value: this.value, data: this.sliderData, enableCross: this.enableCross, fixed: this.fixed, max: this.max, min: this.min, interval: this.interval, minRange: this.minRange, maxRange: this.maxRange, order: this.order, marks: this.sliderMarks, included: this.included, process: this.process, adsorb: this.adsorb, dotOptions: this.dotOptions, onError: this.emitError }), this.syncValueByPos(), ["data", "enableCross", "fixed", "max", "min", "interval", "minRange", "maxRange", "order", "marks", "process", "adsorb", "included", "dotOptions"].forEach(function(o) {
            t.$watch(o, function(f) {
              if (o === "data" && Array.isArray(t.control.data) && Array.isArray(f) && t.control.data.length === f.length && f.every(function(k, A) {
                return k === t.control.data[A];
              }))
                return !1;
              switch (o) {
                case "data":
                case "dataLabel":
                case "dataValue":
                  t.control.data = t.sliderData;
                  break;
                case "mark":
                  t.control.marks = t.sliderMarks;
                  break;
                default:
                  t.control[o] = f;
              }
              ["data", "max", "min", "interval"].indexOf(o) > -1 && t.control.syncDotsPos();
            });
          });
        } }, { key: "syncValueByPos", value: function() {
          var t = this.control.dotsValue;
          this.isDiff(t, Array.isArray(this.value) ? this.value : [this.value]) && this.$emit("change", t.length === 1 ? t[0] : Me(t), this.focusDotIndex);
        } }, { key: "isDiff", value: function(t, o) {
          return t.length !== o.length || t.some(function(f, k) {
            return f !== o[k];
          });
        } }, { key: "emitError", value: function(t, o) {
          this.silent || console.error("[VueSlider error]: ".concat(o)), this.$emit("error", t, o);
        } }, { key: "dragStartOnProcess", value: function(t) {
          if (this.dragOnClick) {
            this.setScale();
            var o = this.getPosByEvent(t), f = this.control.getRecentDot(o);
            if (this.dots[f].disabled)
              return;
            this.dragStart(f), this.control.setDotPos(o, this.focusDotIndex), this.lazy || this.syncValueByPos();
          }
        } }, { key: "dragStart", value: function(t) {
          this.focusDotIndex = t, this.setScale(), this.states.add(U.Drag), this.states.add(U.Focus), this.$emit("drag-start", this.focusDotIndex);
        } }, { key: "dragMove", value: function(t) {
          if (!this.states.has(U.Drag))
            return !1;
          t.preventDefault();
          var o = this.getPosByEvent(t);
          this.isCrossDot(o), this.control.setDotPos(o, this.focusDotIndex), this.lazy || this.syncValueByPos();
          var f = this.control.dotsValue;
          this.$emit("dragging", f.length === 1 ? f[0] : Me(f), this.focusDotIndex);
        } }, { key: "isCrossDot", value: function(t) {
          if (this.canSort) {
            var o = this.focusDotIndex, f = t;
            if (f > this.dragRange[1] ? (f = this.dragRange[1], this.focusDotIndex++) : f < this.dragRange[0] && (f = this.dragRange[0], this.focusDotIndex--), o !== this.focusDotIndex) {
              var k = this.$refs["dot-".concat(this.focusDotIndex)];
              k && k.$el && k.$el.focus(), this.control.setDotPos(f, o);
            }
          }
        } }, { key: "dragEnd", value: function(t) {
          var o = this;
          if (!this.states.has(U.Drag))
            return !1;
          setTimeout(function() {
            o.lazy && o.syncValueByPos(), o.included && o.isNotSync ? o.control.setValue(o.value) : o.control.syncDotsPos(), o.states.delete(U.Drag), o.useKeyboard && !("targetTouches" in t) || o.states.delete(U.Focus), o.$emit("drag-end", o.focusDotIndex);
          });
        } }, { key: "blurHandle", value: function(t) {
          if (!this.states.has(U.Focus) || !this.$refs.container || this.$refs.container.contains(t.target))
            return !1;
          this.states.delete(U.Focus);
        } }, { key: "clickHandle", value: function(t) {
          if (!this.clickable || this.disabled)
            return !1;
          if (!this.states.has(U.Drag)) {
            this.setScale();
            var o = this.getPosByEvent(t);
            this.setValueByPos(o);
          }
        } }, { key: "focus", value: function() {
          var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          this.states.add(U.Focus), this.focusDotIndex = t;
        } }, { key: "blur", value: function() {
          this.states.delete(U.Focus);
        } }, { key: "getValue", value: function() {
          var t = this.control.dotsValue;
          return t.length === 1 ? t[0] : t;
        } }, { key: "getIndex", value: function() {
          var t = this.control.dotsIndex;
          return t.length === 1 ? t[0] : t;
        } }, { key: "setValue", value: function(t) {
          this.control.setValue(Array.isArray(t) ? Me(t) : [t]), this.syncValueByPos();
        } }, { key: "setIndex", value: function(t) {
          var o = this, f = Array.isArray(t) ? t.map(function(k) {
            return o.control.getValueByIndex(k);
          }) : this.control.getValueByIndex(t);
          this.setValue(f);
        } }, { key: "setValueByPos", value: function(t) {
          var o = this, f = this.control.getRecentDot(t);
          if (this.disabled || this.dots[f].disabled)
            return !1;
          this.focusDotIndex = f, this.control.setDotPos(t, f), this.syncValueByPos(), this.useKeyboard && this.states.add(U.Focus), setTimeout(function() {
            o.included && o.isNotSync ? o.control.setValue(o.value) : o.control.syncDotsPos();
          });
        } }, { key: "keydownHandle", value: function(t) {
          var o = this;
          if (!this.useKeyboard || !this.states.has(U.Focus))
            return !1;
          var f = this.included && this.marks, k = Mt(t, { direction: this.direction, max: f ? this.control.markList.length - 1 : this.control.total, min: 0, hook: this.keydownHook });
          if (k) {
            t.preventDefault();
            var A = -1, B = 0;
            f ? (this.control.markList.some(function(X, Z) {
              return X.value === o.control.dotsValue[o.focusDotIndex] && (A = k(Z), !0);
            }), A < 0 ? A = 0 : A > this.control.markList.length - 1 && (A = this.control.markList.length - 1), B = this.control.markList[A].pos) : (A = k(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])), B = this.control.parseValue(this.control.getValueByIndex(A))), this.isCrossDot(B), this.control.setDotPos(B, this.focusDotIndex), this.syncValueByPos();
          }
        } }, { key: "getPosByEvent", value: function(t) {
          return jt(t, this.$refs.rail, this.isReverse, this.zoom)[this.isHorizontal ? "x" : "y"] / this.scale;
        } }, { key: "renderSlot", value: function(t, o, f, k) {
          var A = this.$createElement, B = this.$scopedSlots[t];
          return B ? k ? B(o) : A("template", { slot: t }, [B(o)]) : f;
        } }, { key: "render", value: function() {
          var t = this, o = arguments[0];
          return o("div", O()([{ ref: "container", class: this.containerClasses, style: this.containerStyles, on: { click: this.clickHandle, touchstart: this.dragStartOnProcess, mousedown: this.dragStartOnProcess } }, this.$attrs]), [o("div", { ref: "rail", class: "vue-slider-rail", style: this.railStyle }, [this.processArray.map(function(f, k) {
            return t.renderSlot("process", f, o("div", { class: "vue-slider-process", key: "process-".concat(k), style: f.style }), !0);
          }), this.sliderMarks ? o("div", { class: "vue-slider-marks" }, [this.control.markList.map(function(f, k) {
            var A;
            return t.renderSlot("mark", f, o("vue-slider-mark", { key: "mark-".concat(k), attrs: { mark: f, hideLabel: t.hideLabel, stepStyle: t.stepStyle, stepActiveStyle: t.stepActiveStyle, labelStyle: t.labelStyle, labelActiveStyle: t.labelActiveStyle }, style: (A = {}, q(A, t.isHorizontal ? "height" : "width", "100%"), q(A, t.isHorizontal ? "width" : "height", t.tailSize), q(A, t.mainDirection, "".concat(f.pos, "%")), A), on: { pressLabel: function(B) {
              return t.clickable && t.setValueByPos(B);
            } } }, [t.renderSlot("step", f, null), t.renderSlot("label", f, null)]), !0);
          })]) : null, this.dots.map(function(f, k) {
            var A;
            return o("vue-slider-dot", { ref: "dot-".concat(k), key: "dot-".concat(k), attrs: ae({ value: f.value, disabled: f.disabled, focus: f.focus, "dot-style": [f.style, f.disabled ? f.disabledStyle : null, f.focus ? f.focusStyle : null], tooltip: f.tooltip || t.tooltip, "tooltip-style": [t.tooltipStyle, f.tooltipStyle, f.disabled ? f.tooltipDisabledStyle : null, f.focus ? f.tooltipFocusStyle : null], "tooltip-formatter": Array.isArray(t.sliderTooltipFormatter) ? t.sliderTooltipFormatter[k] : t.sliderTooltipFormatter, "tooltip-placement": t.tooltipDirections[k], role: "slider", "aria-valuenow": f.value, "aria-valuemin": t.min, "aria-valuemax": t.max, "aria-orientation": t.isHorizontal ? "horizontal" : "vertical", tabindex: "0" }, t.dotAttrs), style: [t.dotBaseStyle, (A = {}, q(A, t.mainDirection, "".concat(f.pos, "%")), q(A, "transition", "".concat(t.mainDirection, " ").concat(t.animateTime, "s")), A)], on: { "drag-start": function() {
              return t.dragStart(k);
            } }, nativeOn: { focus: function() {
              return !f.disabled && t.focus(k);
            }, blur: function() {
              return t.blur();
            } } }, [t.renderSlot("dot", f, null), t.renderSlot("tooltip", f, null)]);
          }), this.renderSlot("default", { value: this.getValue() }, null, !0)])]);
        } }, { key: "tailSize", get: function() {
          return ie((this.isHorizontal ? this.height : this.width) || Ie);
        } }, { key: "containerClasses", get: function() {
          return ["vue-slider", ["vue-slider-".concat(this.direction)], { "vue-slider-disabled": this.disabled }];
        } }, { key: "containerStyles", get: function() {
          var t = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], o = je(t, 2), f = o[0], k = o[1], A = this.width ? ie(this.width) : this.isHorizontal ? "auto" : ie(Ie), B = this.height ? ie(this.height) : this.isHorizontal ? ie(Ie) : "auto";
          return { padding: this.contained ? "".concat(k / 2, "px ").concat(f / 2, "px") : this.isHorizontal ? "".concat(k / 2, "px 0") : "0 ".concat(f / 2, "px"), width: A, height: B };
        } }, { key: "processArray", get: function() {
          var t = this;
          return this.control.processArray.map(function(o, f) {
            var k, A = je(o, 3), B = A[0], X = A[1], Z = A[2];
            if (B > X) {
              var re = [X, B];
              B = re[0], X = re[1];
            }
            var pe = t.isHorizontal ? "width" : "height";
            return { start: B, end: X, index: f, style: ae(ae((k = {}, q(k, t.isHorizontal ? "height" : "width", "100%"), q(k, t.isHorizontal ? "top" : "left", 0), q(k, t.mainDirection, "".concat(B, "%")), q(k, pe, "".concat(X - B, "%")), q(k, "transitionProperty", "".concat(pe, ",").concat(t.mainDirection)), q(k, "transitionDuration", "".concat(t.animateTime, "s")), k), t.processStyle), Z) };
          });
        } }, { key: "dotBaseStyle", get: function() {
          var t, o = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], f = je(o, 2), k = f[0], A = f[1];
          return t = this.isHorizontal ? q({ transform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"), "-WebkitTransform": "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"), top: "50%" }, this.direction === "ltr" ? "left" : "right", "0") : q({ transform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"), "-WebkitTransform": "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"), left: "50%" }, this.direction === "btt" ? "bottom" : "top", "0"), ae({ width: "".concat(k, "px"), height: "".concat(A, "px") }, t);
        } }, { key: "mainDirection", get: function() {
          switch (this.direction) {
            case "ltr":
              return "left";
            case "rtl":
              return "right";
            case "btt":
              return "bottom";
            case "ttb":
              return "top";
          }
        } }, { key: "isHorizontal", get: function() {
          return this.direction === "ltr" || this.direction === "rtl";
        } }, { key: "isReverse", get: function() {
          return this.direction === "rtl" || this.direction === "btt";
        } }, { key: "tooltipDirections", get: function() {
          var t = this.tooltipPlacement || (this.isHorizontal ? "top" : "left");
          return Array.isArray(t) ? t : this.dots.map(function() {
            return t;
          });
        } }, { key: "dots", get: function() {
          var t = this;
          return this.control.dotsPos.map(function(o, f) {
            return ae({ pos: o, index: f, value: t.control.dotsValue[f], focus: t.states.has(U.Focus) && t.focusDotIndex === f, disabled: t.disabled, style: t.dotStyle }, (Array.isArray(t.dotOptions) ? t.dotOptions[f] : t.dotOptions) || {});
          });
        } }, { key: "animateTime", get: function() {
          return this.states.has(U.Drag) ? 0 : this.duration;
        } }, { key: "canSort", get: function() {
          return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross;
        } }, { key: "sliderData", get: function() {
          var t = this;
          return this.isObjectArrayData(this.data) ? this.data.map(function(o) {
            return o[t.dataValue];
          }) : this.isObjectData(this.data) ? Object.keys(this.data) : this.data;
        } }, { key: "sliderMarks", get: function() {
          var t = this;
          return this.marks ? this.marks : this.isObjectArrayData(this.data) ? function(o) {
            var f = { label: o };
            return t.data.some(function(k) {
              return k[t.dataValue] === o && (f.label = k[t.dataLabel], !0);
            }), f;
          } : this.isObjectData(this.data) ? this.data : void 0;
        } }, { key: "sliderTooltipFormatter", get: function() {
          var t = this;
          if (this.tooltipFormatter)
            return this.tooltipFormatter;
          if (this.isObjectArrayData(this.data))
            return function(f) {
              var k = "" + f;
              return t.data.some(function(A) {
                return A[t.dataValue] === f && (k = A[t.dataLabel], !0);
              }), k;
            };
          if (this.isObjectData(this.data)) {
            var o = this.data;
            return function(f) {
              return o[f];
            };
          }
        } }, { key: "isNotSync", get: function() {
          var t = this.control.dotsValue;
          return Array.isArray(this.value) ? this.value.length !== t.length || this.value.some(function(o, f) {
            return o !== t[f];
          }) : this.value !== t[0];
        } }, { key: "dragRange", get: function() {
          var t = this.dots[this.focusDotIndex - 1], o = this.dots[this.focusDotIndex + 1];
          return [t ? t.pos : -1 / 0, o ? o.pos : 1 / 0];
        } }]), r;
      }(c.a);
      h([H("change", { default: 0 })], j.prototype, "value", void 0), h([w({ type: Boolean, default: !1 })], j.prototype, "silent", void 0), h([w({ default: "ltr", validator: function(n) {
        return ["ltr", "rtl", "ttb", "btt"].indexOf(n) > -1;
      } })], j.prototype, "direction", void 0), h([w({ type: [Number, String] })], j.prototype, "width", void 0), h([w({ type: [Number, String] })], j.prototype, "height", void 0), h([w({ default: 14 })], j.prototype, "dotSize", void 0), h([w({ default: !1 })], j.prototype, "contained", void 0), h([w({ type: Number, default: 0 })], j.prototype, "min", void 0), h([w({ type: Number, default: 100 })], j.prototype, "max", void 0), h([w({ type: Number, default: 1 })], j.prototype, "interval", void 0), h([w({ type: Boolean, default: !1 })], j.prototype, "disabled", void 0), h([w({ type: Boolean, default: !0 })], j.prototype, "clickable", void 0), h([w({ type: Boolean, default: !1 })], j.prototype, "dragOnClick", void 0), h([w({ type: Number, default: 0.5 })], j.prototype, "duration", void 0), h([w({ type: [Object, Array] })], j.prototype, "data", void 0), h([w({ type: String, default: "value" })], j.prototype, "dataValue", void 0), h([w({ type: String, default: "label" })], j.prototype, "dataLabel", void 0), h([w({ type: Boolean, default: !1 })], j.prototype, "lazy", void 0), h([w({ type: String, validator: function(n) {
        return ["none", "always", "focus", "hover", "active"].indexOf(n) > -1;
      }, default: "active" })], j.prototype, "tooltip", void 0), h([w({ type: [String, Array], validator: function(n) {
        return (Array.isArray(n) ? n : [n]).every(function(e) {
          return ["top", "right", "bottom", "left"].indexOf(e) > -1;
        });
      } })], j.prototype, "tooltipPlacement", void 0), h([w({ type: [String, Array, Function] })], j.prototype, "tooltipFormatter", void 0), h([w({ type: Boolean, default: !0 })], j.prototype, "useKeyboard", void 0), h([w(Function)], j.prototype, "keydownHook", void 0), h([w({ type: Boolean, default: !0 })], j.prototype, "enableCross", void 0), h([w({ type: Boolean, default: !1 })], j.prototype, "fixed", void 0), h([w({ type: Boolean, default: !0 })], j.prototype, "order", void 0), h([w(Number)], j.prototype, "minRange", void 0), h([w(Number)], j.prototype, "maxRange", void 0), h([w({ type: [Boolean, Object, Array, Function], default: !1 })], j.prototype, "marks", void 0), h([w({ type: [Boolean, Function], default: !0 })], j.prototype, "process", void 0), h([w({ type: [Number] })], j.prototype, "zoom", void 0), h([w(Boolean)], j.prototype, "included", void 0), h([w(Boolean)], j.prototype, "adsorb", void 0), h([w(Boolean)], j.prototype, "hideLabel", void 0), h([w()], j.prototype, "dotOptions", void 0), h([w()], j.prototype, "dotAttrs", void 0), h([w()], j.prototype, "railStyle", void 0), h([w()], j.prototype, "processStyle", void 0), h([w()], j.prototype, "dotStyle", void 0), h([w()], j.prototype, "tooltipStyle", void 0), h([w()], j.prototype, "stepStyle", void 0), h([w()], j.prototype, "stepActiveStyle", void 0), h([w()], j.prototype, "labelStyle", void 0), h([w()], j.prototype, "labelActiveStyle", void 0), h([N("value")], j.prototype, "onValueChanged", null), j = h([b()({ name: "VueSlider", data: function() {
        return { control: null };
      }, components: { VueSliderDot: F, VueSliderMark: Re } })], j);
      var Le = j;
      Le.VueSliderMark = Re, Le.VueSliderDot = F;
      var cn = Le;
      a.default = cn;
    } }).default;
  });
})(dt);
const ar = /* @__PURE__ */ ft(dt.exports);
var ht = {}, ye = {}, ve = {}, me = {}, gn = function(s) {
  return bn(s) && !kn(s);
};
function bn(u) {
  return !!u && typeof u == "object";
}
function kn(u) {
  var s = Object.prototype.toString.call(u);
  return s === "[object RegExp]" || s === "[object Date]" || Sn(u);
}
var On = typeof Symbol == "function" && Symbol.for, _n = On ? Symbol.for("react.element") : 60103;
function Sn(u) {
  return u.$$typeof === _n;
}
function wn(u) {
  return Array.isArray(u) ? [] : {};
}
function Se(u, s) {
  return s.clone !== !1 && s.isMergeableObject(u) ? le(wn(u), u, s) : u;
}
function xn(u, s, y) {
  return u.concat(s).map(function(i) {
    return Se(i, y);
  });
}
function Pn(u, s, y) {
  var i = {};
  return y.isMergeableObject(u) && Object.keys(u).forEach(function(a) {
    i[a] = Se(u[a], y);
  }), Object.keys(s).forEach(function(a) {
    !y.isMergeableObject(s[a]) || !u[a] ? i[a] = Se(s[a], y) : i[a] = le(u[a], s[a], y);
  }), i;
}
function le(u, s, y) {
  y = y || {}, y.arrayMerge = y.arrayMerge || xn, y.isMergeableObject = y.isMergeableObject || gn;
  var i = Array.isArray(s), a = Array.isArray(u), l = i === a;
  return l ? i ? y.arrayMerge(u, s, y) : Pn(u, s, y) : Se(s, y);
}
le.all = function(s, y) {
  if (!Array.isArray(s))
    throw new Error("first argument should be an array");
  return s.reduce(function(i, a) {
    return le(i, a, y);
  }, {});
};
var An = le;
const En = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: An
}, Symbol.toStringTag, { value: "Module" })), Rn = /* @__PURE__ */ mn(En);
var ge = {}, Ze;
function oe() {
  if (Ze)
    return ge;
  Ze = 1, Object.defineProperty(ge, "__esModule", {
    value: !0
  });
  var u = function() {
    function l(d, m) {
      for (var g = 0; g < m.length; g++) {
        var p = m[g];
        p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(d, p.key, p);
      }
    }
    return function(d, m, g) {
      return m && l(d.prototype, m), g && l(d, g), d;
    };
  }(), s = Y();
  y(s);
  function y(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function i(l, d) {
    if (!(l instanceof d))
      throw new TypeError("Cannot call a class as a function");
  }
  var a = function() {
    function l(d) {
      i(this, l), this.formatter = d;
    }
    return u(l, [{
      key: "onCreate",
      value: function() {
      }
    }, {
      key: "onDestroy",
      value: function() {
      }
    }, {
      key: "onUpdate",
      value: function() {
      }
    }]), l;
  }();
  return ge.default = a, ge;
}
var et;
function Y() {
  if (et)
    return me;
  et = 1, Object.defineProperty(me, "__esModule", {
    value: !0
  });
  var u = function() {
    function h(_, c) {
      for (var v = 0; v < c.length; v++) {
        var b = c[v];
        b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(_, b.key, b);
      }
    }
    return function(_, c, v) {
      return c && h(_.prototype, c), v && h(_, v), _;
    };
  }(), s = Rn, y = m(s), i = _t(), a = m(i), l = oe();
  m(l);
  var d = ce();
  m(d);
  function m(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function g(h, _) {
    if (!(h instanceof _))
      throw new TypeError("Cannot call a class as a function");
  }
  var p = function(_, c) {
    return c;
  }, O = function() {
    function h(_) {
      var c = this, v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      g(this, h), this.onClick = function() {
        c.hide();
      }, this.quill = _, this.options = (0, y.default)(a.default, v, { arrayMerge: p }), this.currentSpec = null, this.actions = [], this.overlay = document.createElement("div"), this.overlay.classList.add(this.options.overlay.className), this.options.overlay.style && Object.assign(this.overlay.style, this.options.overlay.style), document.execCommand("enableObjectResizing", !1, "false"), this.quill.root.parentNode.style.position = this.quill.root.parentNode.style.position || "relative", this.quill.root.addEventListener("click", this.onClick), this.specs = this.options.specs.map(function(b) {
        return new b(c);
      }), this.specs.forEach(function(b) {
        return b.init();
      });
    }
    return u(h, [{
      key: "show",
      value: function(c) {
        this.currentSpec = c, this.currentSpec.setSelection(), this.setUserSelect("none"), this.quill.root.parentNode.appendChild(this.overlay), this.repositionOverlay(), this.createActions(c);
      }
    }, {
      key: "hide",
      value: function() {
        !this.currentSpec || (this.currentSpec.onHide(), this.currentSpec = null, this.quill.root.parentNode.removeChild(this.overlay), this.overlay.style.setProperty("display", "none"), this.setUserSelect(""), this.destroyActions());
      }
    }, {
      key: "update",
      value: function() {
        this.repositionOverlay(), this.actions.forEach(function(c) {
          return c.onUpdate();
        });
      }
    }, {
      key: "createActions",
      value: function(c) {
        var v = this;
        this.actions = c.getActions().map(function(b) {
          var R = new b(v);
          return R.onCreate(), R;
        });
      }
    }, {
      key: "destroyActions",
      value: function() {
        this.actions.forEach(function(c) {
          return c.onDestroy();
        }), this.actions = [];
      }
    }, {
      key: "repositionOverlay",
      value: function() {
        if (!!this.currentSpec) {
          var c = this.currentSpec.getOverlayElement();
          if (!!c) {
            var v = this.quill.root.parentNode, b = c.getBoundingClientRect(), R = v.getBoundingClientRect();
            Object.assign(this.overlay.style, {
              display: "block",
              left: b.left - R.left - 1 + v.scrollLeft + "px",
              top: b.top - R.top + v.scrollTop + "px",
              width: b.width + "px",
              height: b.height + "px"
            });
          }
        }
      }
    }, {
      key: "setUserSelect",
      value: function(c) {
        var v = this, b = ["userSelect", "mozUserSelect", "webkitUserSelect", "msUserSelect"];
        b.forEach(function(R) {
          v.quill.root.style.setProperty(R, c), document.documentElement && document.documentElement.style.setProperty(R, c);
        });
      }
    }]), h;
  }();
  return me.default = O, me;
}
var be = {}, we = {};
Object.defineProperty(we, "__esModule", {
  value: !0
});
var Dn = function() {
  function u(s, y) {
    for (var i = 0; i < y.length; i++) {
      var a = y[i];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a);
    }
  }
  return function(s, y, i) {
    return y && u(s.prototype, y), i && u(s, i), s;
  };
}();
function Ve(u, s, y) {
  return s in u ? Object.defineProperty(u, s, { value: y, enumerable: !0, configurable: !0, writable: !0 }) : u[s] = y, u;
}
function jn(u, s) {
  if (!(u instanceof s))
    throw new TypeError("Cannot call a class as a function");
}
var Ce = "left", He = "center", Ne = "right", Mn = function() {
  function u(s) {
    var y = this, i;
    jn(this, u), this.applyStyle = s.aligner.applyStyle, this.alignAttribute = s.attribute, this.alignments = (i = {}, Ve(i, Ce, {
      name: Ce,
      icon: s.icons.left,
      apply: function(l) {
        y.setAlignment(l, Ce), y.setStyle(l, "inline", "left", "0 1em 1em 0");
      }
    }), Ve(i, He, {
      name: He,
      icon: s.icons.center,
      apply: function(l) {
        y.setAlignment(l, He), y.setStyle(l, "block", null, "auto");
      }
    }), Ve(i, Ne, {
      name: Ne,
      icon: s.icons.right,
      apply: function(l) {
        y.setAlignment(l, Ne), y.setStyle(l, "inline", "right", "0 0 1em 1em");
      }
    }), i);
  }
  return Dn(u, [{
    key: "getAlignments",
    value: function() {
      var y = this;
      return Object.keys(this.alignments).map(function(i) {
        return y.alignments[i];
      });
    }
  }, {
    key: "clear",
    value: function(y) {
      y.removeAttribute(this.alignAttribute), this.setStyle(y, null, null, null);
    }
  }, {
    key: "isAligned",
    value: function(y, i) {
      return y.getAttribute(this.alignAttribute) === i.name;
    }
  }, {
    key: "setAlignment",
    value: function(y, i) {
      y.setAttribute(this.alignAttribute, i);
    }
  }, {
    key: "setStyle",
    value: function(y, i, a, l) {
      this.applyStyle && (y.style.setProperty("display", i), y.style.setProperty("float", a), y.style.setProperty("margin", l));
    }
  }]), u;
}();
we.default = Mn;
var tt = {}, nt;
function pt() {
  if (nt)
    return tt;
  nt = 1;
  var u = Y();
  s(u);
  function s(y) {
    return y && y.__esModule ? y : { default: y };
  }
  return tt;
}
var ke = {}, rt;
function yt() {
  if (rt)
    return ke;
  rt = 1, Object.defineProperty(ke, "__esModule", {
    value: !0
  });
  var u = function() {
    function l(d, m) {
      for (var g = 0; g < m.length; g++) {
        var p = m[g];
        p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(d, p.key, p);
      }
    }
    return function(d, m, g) {
      return m && l(d.prototype, m), g && l(d, g), d;
    };
  }();
  pt();
  var s = Y();
  y(s);
  function y(l) {
    return l && l.__esModule ? l : { default: l };
  }
  function i(l, d) {
    if (!(l instanceof d))
      throw new TypeError("Cannot call a class as a function");
  }
  var a = function() {
    function l() {
      i(this, l), this.toolbar = null, this.buttons = [];
    }
    return u(l, [{
      key: "create",
      value: function(m, g) {
        var p = document.createElement("div");
        return p.classList.add(m.options.align.toolbar.mainClassName), this.addToolbarStyle(m, p), this.addButtons(m, p, g), this.toolbar = p, this.toolbar;
      }
    }, {
      key: "destroy",
      value: function() {
        this.toolbar = null, this.buttons = [];
      }
    }, {
      key: "getElement",
      value: function() {
        return this.toolbar;
      }
    }, {
      key: "addToolbarStyle",
      value: function(m, g) {
        m.options.align.toolbar.mainStyle && Object.assign(g.style, m.options.align.toolbar.mainStyle);
      }
    }, {
      key: "addButtonStyle",
      value: function(m, g, p) {
        p.options.align.toolbar.buttonStyle && (Object.assign(m.style, p.options.align.toolbar.buttonStyle), g > 0 && (m.style.borderLeftWidth = "0")), p.options.align.toolbar.svgStyle && Object.assign(m.children[0].style, p.options.align.toolbar.svgStyle);
      }
    }, {
      key: "addButtons",
      value: function(m, g, p) {
        var O = this;
        p.getAlignments().forEach(function(h, _) {
          var c = document.createElement("span");
          c.classList.add(m.options.align.toolbar.buttonClassName), c.innerHTML = h.icon, c.addEventListener("click", function() {
            O.onButtonClick(c, m, h, p);
          }), O.preselectButton(c, h, m, p), O.addButtonStyle(c, _, m), O.buttons.push(c), g.appendChild(c);
        });
      }
    }, {
      key: "preselectButton",
      value: function(m, g, p, O) {
        if (!!p.currentSpec) {
          var h = p.currentSpec.getTargetElement();
          !h || O.isAligned(h, g) && this.selectButton(p, m);
        }
      }
    }, {
      key: "onButtonClick",
      value: function(m, g, p, O) {
        if (!!g.currentSpec) {
          var h = g.currentSpec.getTargetElement();
          !h || this.clickButton(m, h, g, p, O);
        }
      }
    }, {
      key: "clickButton",
      value: function(m, g, p, O, h) {
        var _ = this;
        this.buttons.forEach(function(c) {
          _.deselectButton(p, c);
        }), h.isAligned(g, O) ? p.options.align.toolbar.allowDeselect ? h.clear(g) : this.selectButton(p, m) : (this.selectButton(p, m), O.apply(g)), p.update();
      }
    }, {
      key: "selectButton",
      value: function(m, g) {
        g.classList.add("is-selected"), m.options.align.toolbar.addButtonSelectStyle && g.style.setProperty("filter", "invert(20%)");
      }
    }, {
      key: "deselectButton",
      value: function(m, g) {
        g.classList.remove("is-selected"), m.options.align.toolbar.addButtonSelectStyle && g.style.removeProperty("filter");
      }
    }]), l;
  }();
  return ke.default = a, ke;
}
var ot;
function vt() {
  if (ot)
    return be;
  ot = 1, Object.defineProperty(be, "__esModule", {
    value: !0
  });
  var u = function() {
    function c(v, b) {
      for (var R = 0; R < b.length; R++) {
        var L = b[R];
        L.enumerable = L.enumerable || !1, L.configurable = !0, "value" in L && (L.writable = !0), Object.defineProperty(v, L.key, L);
      }
    }
    return function(v, b, R) {
      return b && c(v.prototype, b), R && c(v, R), v;
    };
  }(), s = oe(), y = g(s), i = Y();
  g(i);
  var a = we, l = g(a);
  pt();
  var d = yt(), m = g(d);
  function g(c) {
    return c && c.__esModule ? c : { default: c };
  }
  function p(c, v) {
    if (!(c instanceof v))
      throw new TypeError("Cannot call a class as a function");
  }
  function O(c, v) {
    if (!c)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return v && (typeof v == "object" || typeof v == "function") ? v : c;
  }
  function h(c, v) {
    if (typeof v != "function" && v !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof v);
    c.prototype = Object.create(v && v.prototype, { constructor: { value: c, enumerable: !1, writable: !0, configurable: !0 } }), v && (Object.setPrototypeOf ? Object.setPrototypeOf(c, v) : c.__proto__ = v);
  }
  var _ = function(c) {
    h(v, c);
    function v(b) {
      p(this, v);
      var R = O(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this, b));
      return R.aligner = new l.default(b.options.align), R.toolbar = new m.default(), R;
    }
    return u(v, [{
      key: "onCreate",
      value: function() {
        var R = this.toolbar.create(this.formatter, this.aligner);
        this.formatter.overlay.appendChild(R);
      }
    }, {
      key: "onDestroy",
      value: function() {
        var R = this.toolbar.getElement();
        !R || (this.formatter.overlay.removeChild(R), this.toolbar.destroy());
      }
    }]), v;
  }(y.default);
  return be.default = _, be;
}
var xe = {};
Object.defineProperty(xe, "__esModule", {
  value: !0
});
var Tn = function() {
  function u(s, y) {
    for (var i = 0; i < y.length; i++) {
      var a = y[i];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a);
    }
  }
  return function(s, y, i) {
    return y && u(s.prototype, y), i && u(s, i), s;
  };
}(), Bn = oe(), In = mt(Bn), Ln = Y();
mt(Ln);
function mt(u) {
  return u && u.__esModule ? u : { default: u };
}
function Vn(u, s) {
  if (!(u instanceof s))
    throw new TypeError("Cannot call a class as a function");
}
function Cn(u, s) {
  if (!u)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s && (typeof s == "object" || typeof s == "function") ? s : u;
}
function Hn(u, s) {
  if (typeof s != "function" && s !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof s);
  u.prototype = Object.create(s && s.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(u, s) : u.__proto__ = s);
}
var Nn = function(u) {
  Hn(s, u);
  function s(y) {
    Vn(this, s);
    var i = Cn(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, y));
    return i.onMouseDown = function(a) {
      if (a.target instanceof HTMLElement && (i.dragHandle = a.target, i.setCursor(i.dragHandle.style.cursor), !!i.formatter.currentSpec)) {
        var l = i.formatter.currentSpec.getTargetElement();
        if (!!l) {
          var d = l.getBoundingClientRect();
          i.dragStartX = a.clientX, i.preDragWidth = d.width, i.targetRatio = d.height / d.width, document.addEventListener("mousemove", i.onDrag), document.addEventListener("mouseup", i.onMouseUp);
        }
      }
    }, i.onDrag = function(a) {
      if (!!i.formatter.currentSpec) {
        var l = i.formatter.currentSpec.getTargetElement();
        if (!!l) {
          i.toggleUserSelect(!1);
          var d = a.clientX - i.dragStartX, m = 0;
          i.dragHandle === i.topLeftHandle || i.dragHandle === i.bottomLeftHandle ? m = Math.round(i.preDragWidth - d) : m = Math.round(i.preDragWidth + d);
          var g = i.targetRatio * m;
          l.setAttribute("width", "" + m), l.setAttribute("height", "" + g), i.formatter.update();
        }
      }
    }, i.onMouseUp = function() {
      i.setCursor(""), i.toggleUserSelect(!0), document.removeEventListener("mousemove", i.onDrag), document.removeEventListener("mouseup", i.onMouseUp);
    }, i.topLeftHandle = i.createHandle("top-left", "nwse-resize"), i.topRightHandle = i.createHandle("top-right", "nesw-resize"), i.bottomRightHandle = i.createHandle("bottom-right", "nwse-resize"), i.bottomLeftHandle = i.createHandle("bottom-left", "nesw-resize"), i.dragHandle = null, i.dragStartX = 0, i.preDragWidth = 0, i.targetRatio = 0, i;
  }
  return Tn(s, [{
    key: "onCreate",
    value: function() {
      this.formatter.overlay.appendChild(this.topLeftHandle), this.formatter.overlay.appendChild(this.topRightHandle), this.formatter.overlay.appendChild(this.bottomRightHandle), this.formatter.overlay.appendChild(this.bottomLeftHandle), this.repositionHandles(this.formatter.options.resize.handleStyle);
    }
  }, {
    key: "onDestroy",
    value: function() {
      this.setCursor(""), this.formatter.overlay.removeChild(this.topLeftHandle), this.formatter.overlay.removeChild(this.topRightHandle), this.formatter.overlay.removeChild(this.bottomRightHandle), this.formatter.overlay.removeChild(this.bottomLeftHandle);
    }
  }, {
    key: "createHandle",
    value: function(i, a) {
      var l = document.createElement("div");
      return l.classList.add(this.formatter.options.resize.handleClassName), l.setAttribute("data-position", i), l.style.cursor = a, this.formatter.options.resize.handleStyle && Object.assign(l.style, this.formatter.options.resize.handleStyle), l.addEventListener("mousedown", this.onMouseDown), l;
    }
  }, {
    key: "repositionHandles",
    value: function(i) {
      var a = "0px", l = "0px";
      i && (i.width && (a = -parseFloat(i.width) / 2 + "px"), i.height && (l = -parseFloat(i.height) / 2 + "px")), Object.assign(this.topLeftHandle.style, { left: a, top: l }), Object.assign(this.topRightHandle.style, { right: a, top: l }), Object.assign(this.bottomRightHandle.style, { right: a, bottom: l }), Object.assign(this.bottomLeftHandle.style, { left: a, bottom: l });
    }
  }, {
    key: "setCursor",
    value: function(i) {
      if (document.body && (document.body.style.cursor = i), this.formatter.currentSpec) {
        var a = this.formatter.currentSpec.getOverlayElement();
        a && (a.style.cursor = i);
      }
    }
  }, {
    key: "toggleUserSelect",
    value: function(i) {
      if (i) {
        document.body.style.setProperty("-moz-user-select", "auto"), document.body.style.setProperty("-webkit-user-select", "auto"), document.body.style.setProperty("-ms-user-select", "auto"), document.body.style.setProperty("-o-user-select", "auto"), document.body.style.setProperty("user-select", "auto"), document.onselectstart = function() {
          return !0;
        }, document.onselect = function() {
          return !0;
        }, document.onselectionchange = function() {
          return !0;
        };
        return;
      }
      document.body.style.setProperty("-moz-user-select", "none"), document.body.style.setProperty("-webkit-user-select", "none"), document.body.style.setProperty("-ms-user-select", "none"), document.body.style.setProperty("-o-user-select", "none"), document.body.style.setProperty("user-select", "none"), document.onselectstart = function() {
        return !1;
      }, document.onselect = function() {
        return !1;
      }, document.onselectionchange = function() {
        return !1;
      };
    }
  }]), s;
}(In.default);
xe.default = Nn;
var Pe = {};
Object.defineProperty(Pe, "__esModule", {
  value: !0
});
var Un = function() {
  function u(s, y) {
    for (var i = 0; i < y.length; i++) {
      var a = y[i];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a);
    }
  }
  return function(s, y, i) {
    return y && u(s.prototype, y), i && u(s, i), s;
  };
}(), $n = yn, zn = gt($n), qn = oe(), Fn = gt(qn);
function gt(u) {
  return u && u.__esModule ? u : { default: u };
}
function Wn(u, s) {
  if (!(u instanceof s))
    throw new TypeError("Cannot call a class as a function");
}
function it(u, s) {
  if (!u)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s && (typeof s == "object" || typeof s == "function") ? s : u;
}
function Xn(u, s) {
  if (typeof s != "function" && s !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof s);
  u.prototype = Object.create(s && s.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(u, s) : u.__proto__ = s);
}
var Gn = function(u) {
  Xn(s, u);
  function s() {
    var y, i, a, l;
    Wn(this, s);
    for (var d = arguments.length, m = Array(d), g = 0; g < d; g++)
      m[g] = arguments[g];
    return l = (i = (a = it(this, (y = s.__proto__ || Object.getPrototypeOf(s)).call.apply(y, [this].concat(m))), a), a.onKeyUp = function(p) {
      if (!!a.formatter.currentSpec && (p.keyCode === 46 || p.keyCode === 8)) {
        var O = zn.default.find(a.formatter.currentSpec.getTargetElement());
        O && O.deleteAt(0), a.formatter.hide();
      }
    }, i), it(a, l);
  }
  return Un(s, [{
    key: "onCreate",
    value: function() {
      document.addEventListener("keyup", this.onKeyUp, !0), this.formatter.quill.root.addEventListener("input", this.onKeyUp, !0);
    }
  }, {
    key: "onDestroy",
    value: function() {
      document.removeEventListener("keyup", this.onKeyUp), this.formatter.quill.root.removeEventListener("input", this.onKeyUp);
    }
  }]), s;
}(Fn.default);
Pe.default = Gn;
var at;
function ce() {
  if (at)
    return ve;
  at = 1, Object.defineProperty(ve, "__esModule", {
    value: !0
  });
  var u = function() {
    function _(c, v) {
      for (var b = 0; b < v.length; b++) {
        var R = v[b];
        R.enumerable = R.enumerable || !1, R.configurable = !0, "value" in R && (R.writable = !0), Object.defineProperty(c, R.key, R);
      }
    }
    return function(c, v, b) {
      return v && _(c.prototype, v), b && _(c, b), c;
    };
  }(), s = Y();
  p(s);
  var y = oe();
  p(y);
  var i = vt(), a = p(i), l = xe, d = p(l), m = Pe, g = p(m);
  function p(_) {
    return _ && _.__esModule ? _ : { default: _ };
  }
  function O(_, c) {
    if (!(_ instanceof c))
      throw new TypeError("Cannot call a class as a function");
  }
  var h = function() {
    function _(c) {
      O(this, _), this.formatter = c;
    }
    return u(_, [{
      key: "init",
      value: function() {
      }
    }, {
      key: "getActions",
      value: function() {
        return [a.default, d.default, g.default];
      }
    }, {
      key: "getTargetElement",
      value: function() {
        return null;
      }
    }, {
      key: "getOverlayElement",
      value: function() {
        return this.getTargetElement();
      }
    }, {
      key: "setSelection",
      value: function() {
        this.formatter.quill.setSelection(null);
      }
    }, {
      key: "onHide",
      value: function() {
      }
    }]), _;
  }();
  return ve.default = h, ve;
}
var Oe = {}, st;
function bt() {
  if (st)
    return Oe;
  st = 1, Object.defineProperty(Oe, "__esModule", {
    value: !0
  });
  var u = function() {
    function p(O, h) {
      for (var _ = 0; _ < h.length; _++) {
        var c = h[_];
        c.enumerable = c.enumerable || !1, c.configurable = !0, "value" in c && (c.writable = !0), Object.defineProperty(O, c.key, c);
      }
    }
    return function(O, h, _) {
      return h && p(O.prototype, h), _ && p(O, _), O;
    };
  }(), s = ce(), y = a(s), i = Y();
  a(i);
  function a(p) {
    return p && p.__esModule ? p : { default: p };
  }
  function l(p, O) {
    if (!(p instanceof O))
      throw new TypeError("Cannot call a class as a function");
  }
  function d(p, O) {
    if (!p)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return O && (typeof O == "object" || typeof O == "function") ? O : p;
  }
  function m(p, O) {
    if (typeof O != "function" && O !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof O);
    p.prototype = Object.create(O && O.prototype, { constructor: { value: p, enumerable: !1, writable: !0, configurable: !0 } }), O && (Object.setPrototypeOf ? Object.setPrototypeOf(p, O) : p.__proto__ = O);
  }
  var g = function(p) {
    m(O, p);
    function O(h) {
      l(this, O);
      var _ = d(this, (O.__proto__ || Object.getPrototypeOf(O)).call(this, h));
      return _.onClick = function(c) {
        var v = c.target;
        !(v instanceof HTMLElement) || v.tagName !== "IMG" || (_.img = v, _.formatter.show(_));
      }, _.img = null, _;
    }
    return u(O, [{
      key: "init",
      value: function() {
        this.formatter.quill.root.addEventListener("click", this.onClick);
      }
    }, {
      key: "getTargetElement",
      value: function() {
        return this.img;
      }
    }, {
      key: "onHide",
      value: function() {
        this.img = null;
      }
    }]), O;
  }(y.default);
  return Oe.default = g, Oe;
}
var _e = {}, Ae = {};
Object.defineProperty(Ae, "__esModule", {
  value: !0
});
var Kn = function() {
  function u(s, y) {
    for (var i = 0; i < y.length; i++) {
      var a = y[i];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(s, a.key, a);
    }
  }
  return function(s, y, i) {
    return y && u(s.prototype, y), i && u(s, i), s;
  };
}(), Yn = ce(), Jn = kt(Yn), Qn = Y();
kt(Qn);
function kt(u) {
  return u && u.__esModule ? u : { default: u };
}
function Zn(u, s) {
  if (!(u instanceof s))
    throw new TypeError("Cannot call a class as a function");
}
function er(u, s) {
  if (!u)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s && (typeof s == "object" || typeof s == "function") ? s : u;
}
function tr(u, s) {
  if (typeof s != "function" && s !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof s);
  u.prototype = Object.create(s && s.prototype, { constructor: { value: u, enumerable: !1, writable: !0, configurable: !0 } }), s && (Object.setPrototypeOf ? Object.setPrototypeOf(u, s) : u.__proto__ = s);
}
var ut = "data-blot-formatter-unclickable-bound", nr = "blot-formatter__proxy-image", rr = function(u) {
  tr(s, u);
  function s(y, i) {
    Zn(this, s);
    var a = er(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, y));
    return a.onTextChange = function() {
      Array.from(document.querySelectorAll(a.selector + ":not([" + ut + "])")).forEach(function(l) {
        l.setAttribute(ut, "true"), l.addEventListener("mouseenter", a.onMouseEnter);
      });
    }, a.onMouseEnter = function(l) {
      var d = l.target;
      d instanceof HTMLElement && (a.nextUnclickable = d, a.repositionProxyImage(a.nextUnclickable));
    }, a.onProxyImageClick = function() {
      a.unclickable = a.nextUnclickable, a.nextUnclickable = null, a.formatter.show(a), a.hideProxyImage();
    }, a.selector = i, a.unclickable = null, a.nextUnclickable = null, a;
  }
  return Kn(s, [{
    key: "init",
    value: function() {
      document.body && document.body.appendChild(this.createProxyImage()), this.hideProxyImage(), this.proxyImage.addEventListener("click", this.onProxyImageClick), this.formatter.quill.on("text-change", this.onTextChange);
    }
  }, {
    key: "getTargetElement",
    value: function() {
      return this.unclickable;
    }
  }, {
    key: "getOverlayElement",
    value: function() {
      return this.unclickable;
    }
  }, {
    key: "onHide",
    value: function() {
      this.hideProxyImage(), this.nextUnclickable = null, this.unclickable = null;
    }
  }, {
    key: "createProxyImage",
    value: function() {
      var i = document.createElement("canvas"), a = i.getContext("2d");
      return a.globalAlpha = 0, a.fillRect(0, 0, 1, 1), this.proxyImage = document.createElement("img"), this.proxyImage.src = i.toDataURL("image/png"), this.proxyImage.alt = "", this.proxyImage.classList.add(nr), Object.assign(this.proxyImage.style, {
        position: "absolute",
        margin: "0"
      }), this.proxyImage;
    }
  }, {
    key: "hideProxyImage",
    value: function() {
      Object.assign(this.proxyImage.style, {
        display: "none"
      });
    }
  }, {
    key: "repositionProxyImage",
    value: function(i) {
      var a = i.getBoundingClientRect();
      Object.assign(this.proxyImage.style, {
        display: "block",
        left: a.left + window.pageXOffset + "px",
        top: a.top + window.pageYOffset + "px",
        width: a.width + "px",
        height: a.height + "px"
      });
    }
  }]), s;
}(Jn.default);
Ae.default = rr;
var lt;
function Ot() {
  if (lt)
    return _e;
  lt = 1, Object.defineProperty(_e, "__esModule", {
    value: !0
  });
  var u = Ae, s = i(u), y = Y();
  i(y);
  function i(g) {
    return g && g.__esModule ? g : { default: g };
  }
  function a(g, p) {
    if (!(g instanceof p))
      throw new TypeError("Cannot call a class as a function");
  }
  function l(g, p) {
    if (!g)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return p && (typeof p == "object" || typeof p == "function") ? p : g;
  }
  function d(g, p) {
    if (typeof p != "function" && p !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof p);
    g.prototype = Object.create(p && p.prototype, { constructor: { value: g, enumerable: !1, writable: !0, configurable: !0 } }), p && (Object.setPrototypeOf ? Object.setPrototypeOf(g, p) : g.__proto__ = p);
  }
  var m = function(g) {
    d(p, g);
    function p(O) {
      return a(this, p), l(this, (p.__proto__ || Object.getPrototypeOf(p)).call(this, O, "iframe.ql-video"));
    }
    return p;
  }(s.default);
  return _e.default = m, _e;
}
var ct;
function _t() {
  if (ct)
    return ye;
  ct = 1, Object.defineProperty(ye, "__esModule", {
    value: !0
  });
  var u = ce();
  l(u);
  var s = bt(), y = l(s), i = Ot(), a = l(i);
  function l(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var d = {
    specs: [y.default, a.default],
    overlay: {
      className: "blot-formatter__overlay",
      style: {
        position: "absolute",
        boxSizing: "border-box",
        border: "1px dashed #444"
      }
    },
    align: {
      attribute: "data-align",
      aligner: {
        applyStyle: !0
      },
      icons: {
        left: `
        <svg viewbox="0 0 18 18">
          <line class="ql-stroke" x1="3" x2="15" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="3" x2="13" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="3" x2="9" y1="4" y2="4"></line>
        </svg>
      `,
        center: `
        <svg viewbox="0 0 18 18">
           <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="14" x2="4" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="12" x2="6" y1="4" y2="4"></line>
        </svg>
      `,
        right: `
        <svg viewbox="0 0 18 18">
          <line class="ql-stroke" x1="15" x2="3" y1="9" y2="9"></line>
          <line class="ql-stroke" x1="15" x2="5" y1="14" y2="14"></line>
          <line class="ql-stroke" x1="15" x2="9" y1="4" y2="4"></line>
        </svg>
      `
      },
      toolbar: {
        allowDeselect: !0,
        mainClassName: "blot-formatter__toolbar",
        mainStyle: {
          position: "absolute",
          top: "-12px",
          right: "0",
          left: "0",
          height: "0",
          minWidth: "100px",
          font: "12px/1.0 Arial, Helvetica, sans-serif",
          textAlign: "center",
          color: "#333",
          boxSizing: "border-box",
          cursor: "default",
          zIndex: "1"
        },
        buttonClassName: "blot-formatter__toolbar-button",
        addButtonSelectStyle: !0,
        buttonStyle: {
          display: "inline-block",
          width: "24px",
          height: "24px",
          background: "white",
          border: "1px solid #999",
          verticalAlign: "middle"
        },
        svgStyle: {
          display: "inline-block",
          width: "24px",
          height: "24px",
          background: "white",
          border: "1px solid #999",
          verticalAlign: "middle"
        }
      }
    },
    resize: {
      handleClassName: "blot-formatter__resize-handle",
      handleStyle: {
        position: "absolute",
        height: "12px",
        width: "12px",
        backgroundColor: "white",
        border: "1px solid #777",
        boxSizing: "border-box",
        opacity: "0.80"
      }
    }
  };
  return ye.default = d, ye;
}
(function(u) {
  Object.defineProperty(u, "__esModule", {
    value: !0
  });
  var s = _t();
  Object.defineProperty(u, "DefaultOptions", {
    enumerable: !0,
    get: function() {
      return c(s).default;
    }
  });
  var y = Y();
  Object.defineProperty(u, "default", {
    enumerable: !0,
    get: function() {
      return c(y).default;
    }
  });
  var i = oe();
  Object.defineProperty(u, "Action", {
    enumerable: !0,
    get: function() {
      return c(i).default;
    }
  });
  var a = vt();
  Object.defineProperty(u, "AlignAction", {
    enumerable: !0,
    get: function() {
      return c(a).default;
    }
  });
  var l = we;
  Object.defineProperty(u, "DefaultAligner", {
    enumerable: !0,
    get: function() {
      return c(l).default;
    }
  });
  var d = yt();
  Object.defineProperty(u, "DefaultToolbar", {
    enumerable: !0,
    get: function() {
      return c(d).default;
    }
  });
  var m = Pe;
  Object.defineProperty(u, "DeleteAction", {
    enumerable: !0,
    get: function() {
      return c(m).default;
    }
  });
  var g = xe;
  Object.defineProperty(u, "ResizeAction", {
    enumerable: !0,
    get: function() {
      return c(g).default;
    }
  });
  var p = ce();
  Object.defineProperty(u, "BlotSpec", {
    enumerable: !0,
    get: function() {
      return c(p).default;
    }
  });
  var O = bt();
  Object.defineProperty(u, "ImageSpec", {
    enumerable: !0,
    get: function() {
      return c(O).default;
    }
  });
  var h = Ae;
  Object.defineProperty(u, "UnclickableBlotSpec", {
    enumerable: !0,
    get: function() {
      return c(h).default;
    }
  });
  var _ = Ot();
  Object.defineProperty(u, "IframeVideoSpec", {
    enumerable: !0,
    get: function() {
      return c(_).default;
    }
  });
  function c(v) {
    return v && v.__esModule ? v : { default: v };
  }
})(ht);
const sr = /* @__PURE__ */ ft(ht);
export {
  sr as BlotFormatter,
  ar as VueSlider
};
