(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3244],
  {
    69496: function (e) {
      "use strict";
      function t(e) {
        return "function" === typeof e ? e() : e;
      }
      function o() {
        var e = {};
        return (
          (e.promise = new Promise(function (t, o) {
            (e.resolve = t), (e.reject = o);
          })),
          e
        );
      }
      e.exports = function (e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          r =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          a = void 0,
          l = void 0,
          u = void 0,
          c = [];
        return function () {
          var i = t(n),
            s = new Date().getTime(),
            p = !a || s - a > i;
          a = s;
          for (var d = arguments.length, v = Array(d), h = 0; h < d; h++)
            v[h] = arguments[h];
          if (p && r.leading)
            return r.accumulate
              ? Promise.resolve(e.call(this, [v])).then(function (e) {
                  return e[0];
                })
              : Promise.resolve(e.call.apply(e, [this].concat(v)));
          if (
            (l ? clearTimeout(u) : (l = o()),
            c.push(v),
            (u = setTimeout(f.bind(this), i)),
            r.accumulate)
          ) {
            var y = c.length - 1;
            return l.promise.then(function (e) {
              return e[y];
            });
          }
          return l.promise;
        };
        function f() {
          var t = l;
          clearTimeout(u),
            Promise.resolve(
              r.accumulate ? e.call(this, c) : e.apply(this, c[c.length - 1])
            ).then(t.resolve, t.reject),
            (c = []),
            (l = null);
        }
      };
    },
    71210: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainLocale = function (e, t, o, n) {
          return !1;
        });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    48418: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = o(94941).Z;
      o(45753).default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var r = o(92648).Z,
        a = o(17273).Z,
        l = r(o(67294)),
        u = o(76273),
        c = o(22725),
        f = o(63462),
        i = o(21018),
        s = o(57190),
        p = o(71210),
        d = o(98684),
        v = {};
      function h(e, t, o, n) {
        if (e && u.isLocalURL(t)) {
          Promise.resolve(e.prefetch(t, o, n)).catch(function (e) {
            0;
          });
          var r =
            n && "undefined" !== typeof n.locale ? n.locale : e && e.locale;
          v[t + "%" + o + (r ? "%" + r : "")] = !0;
        }
      }
      var y = l.default.forwardRef(function (e, t) {
        var o,
          r = e.href,
          y = e.as,
          m = e.children,
          C = e.prefetch,
          b = e.passHref,
          x = e.replace,
          _ = e.shallow,
          g = e.scroll,
          L = e.locale,
          R = e.onClick,
          j = e.onMouseEnter,
          M = e.onTouchStart,
          P = e.legacyBehavior,
          T = void 0 === P ? !0 !== Boolean(!1) : P,
          E = a(e, [
            "href",
            "as",
            "children",
            "prefetch",
            "passHref",
            "replace",
            "shallow",
            "scroll",
            "locale",
            "onClick",
            "onMouseEnter",
            "onTouchStart",
            "legacyBehavior",
          ]);
        (o = m),
          !T ||
            ("string" !== typeof o && "number" !== typeof o) ||
            (o = l.default.createElement("a", null, o));
        var k = !1 !== C,
          O = l.default.useContext(f.RouterContext),
          w = l.default.useContext(i.AppRouterContext);
        w && (O = w);
        var S,
          U = l.default.useMemo(
            function () {
              var e = n(u.resolveHref(O, r, !0), 2),
                t = e[0],
                o = e[1];
              return { href: t, as: y ? u.resolveHref(O, y) : o || t };
            },
            [O, r, y]
          ),
          A = U.href,
          B = U.as,
          D = l.default.useRef(A),
          H = l.default.useRef(B);
        T && (S = l.default.Children.only(o));
        var K = T ? S && "object" === typeof S && S.ref : t,
          N = n(s.useIntersection({ rootMargin: "200px" }), 3),
          Z = N[0],
          G = N[1],
          I = N[2],
          q = l.default.useCallback(
            function (e) {
              (H.current === B && D.current === A) ||
                (I(), (H.current = B), (D.current = A)),
                Z(e),
                K &&
                  ("function" === typeof K
                    ? K(e)
                    : "object" === typeof K && (K.current = e));
            },
            [B, K, A, I, Z]
          );
        l.default.useEffect(
          function () {
            var e = G && k && u.isLocalURL(A),
              t = "undefined" !== typeof L ? L : O && O.locale,
              o = v[A + "%" + B + (t ? "%" + t : "")];
            e && !o && h(O, A, B, { locale: t });
          },
          [B, A, G, L, k, O]
        );
        var z = {
          ref: q,
          onClick: function (e) {
            T || "function" !== typeof R || R(e),
              T &&
                S.props &&
                "function" === typeof S.props.onClick &&
                S.props.onClick(e),
              e.defaultPrevented ||
                (function (e, t, o, n, r, a, c, f, i, s) {
                  if (
                    "A" !== e.currentTarget.nodeName.toUpperCase() ||
                    (!(function (e) {
                      var t = e.currentTarget.target;
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) &&
                      u.isLocalURL(o))
                  ) {
                    e.preventDefault();
                    var p = function () {
                      "beforePopState" in t
                        ? t[r ? "replace" : "push"](o, n, {
                            shallow: a,
                            locale: f,
                            scroll: c,
                          })
                        : t[r ? "replace" : "push"](o, {
                            forceOptimisticNavigation: !s,
                          });
                    };
                    i ? l.default.startTransition(p) : p();
                  }
                })(e, O, A, B, x, _, g, L, Boolean(w), k);
          },
          onMouseEnter: function (e) {
            T || "function" !== typeof j || j(e),
              T &&
                S.props &&
                "function" === typeof S.props.onMouseEnter &&
                S.props.onMouseEnter(e),
              (!k && w) || (u.isLocalURL(A) && h(O, A, B, { priority: !0 }));
          },
          onTouchStart: function (e) {
            T || "function" !== typeof M || M(e),
              T &&
                S.props &&
                "function" === typeof S.props.onTouchStart &&
                S.props.onTouchStart(e),
              (!k && w) || (u.isLocalURL(A) && h(O, A, B, { priority: !0 }));
          },
        };
        if (!T || b || ("a" === S.type && !("href" in S.props))) {
          var F = "undefined" !== typeof L ? L : O && O.locale,
            J =
              O &&
              O.isLocaleDomain &&
              p.getDomainLocale(B, F, O.locales, O.domainLocales);
          z.href = J || d.addBasePath(c.addLocale(B, F, O && O.defaultLocale));
        }
        return T
          ? l.default.cloneElement(S, z)
          : l.default.createElement("a", Object.assign({}, E, z), o);
      });
      (t.default = y),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    21018: function (e, t, o) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TemplateContext =
          t.GlobalLayoutRouterContext =
          t.LayoutRouterContext =
          t.AppRouterContext =
            void 0);
      var n = (0, o(92648).Z)(o(67294)),
        r = n.default.createContext(null);
      t.AppRouterContext = r;
      var a = n.default.createContext(null);
      t.LayoutRouterContext = a;
      var l = n.default.createContext(null);
      t.GlobalLayoutRouterContext = l;
      var u = n.default.createContext(null);
      t.TemplateContext = u;
    },
    41664: function (e, t, o) {
      e.exports = o(48418);
    },
  },
]);
