(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4977],
  {
    71212: function (r, e, o) {
      "use strict";
      o.d(e, {
        Z: function () {
          return x;
        },
      });
      var n = o(47568),
        a = o(14924),
        t = o(70655),
        c = o(85893),
        i = o(94184),
        g = o.n(i),
        _ = o(25675),
        u = o.n(_),
        d = {
          src: "/_next/static/media/error-icon.44f3dbf7.png",
          height: 50,
          width: 50,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAP1BMVEX/8fH/5eX/d3f/h4f/Dg7/cHD/ZWX/+vpMaXH/Skr/tLT/vb3/enr/mZn/i4v/jIz/6ur/zMz/2Nj/4OD/q6vgCj0aAAAAEXRSTlP+/IChHXBR/QAK7vVz/qqv/Q9zPT4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAA9SURBVHicBcEHEoAgEACxRa5SdCj/f6sJkTqGZhDPhv0E0imULnz4nO4vFe4tVKS5uzchdJ2zNIg0M8v4AUIMAezy0OcrAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        l = {
          src: "/_next/static/media/success-icon.cb01aa4e.png",
          height: 50,
          width: 50,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEX9/vyL0XFMaXGp3pah2ozl9d+o3ZXt+OnC57Xb8dPF6LnL68B3N+rTAAAACXRSTlP+YQCqqP2r+/1cpA9/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nEXLMRLAIBDDQNnmgEv+/1+GilorbCWy8WjoYdRQXSLAtwiT2j/kpr1oPWxr3v0AHdYA2cfery8AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 8,
        },
        s = {
          src: "/_next/static/media/warning-icon.44b211a2.png",
          height: 50,
          width: 50,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXH58Ljs0CPy4G78+OHx3V/+/PTu1T336p7x3WD15ovw2lPitgDy3mj79dD58b7////+CBWNAAAADnRSTlMA8R6q/mz7NNssuUsOhMXPUscAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA4SURBVHicJcZJEsAgDMRAAQbsLGP+/9oUQZcWwAxOfh278t4+Lvme12TWoZY1xiqVlpKUjZh/8QEqDwF+hNI9ewAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        b = o(26116),
        L = o.n(b);
      var B = function (r) {
          var e = r.field;
          switch (r.status) {
            case "valid":
              return (0, c.jsx)("div", {
                className: L().inputIcon,
                children: (0, c.jsx)(u(), {
                  src: l,
                  "data-testid": "success icon",
                  alt: "".concat(e, " success icon"),
                  width: 20,
                  height: 20,
                }),
              });
            case "pending":
              return (0, c.jsx)("div", {
                "data-testid": "loading icon",
                className: g()(L().inputIcon, L().updatingIcon),
              });
            case "error":
              return (0, c.jsx)("div", {
                className: L().inputIcon,
                children: (0, c.jsx)(u(), {
                  "data-testid": "failed icon",
                  src: d,
                  alt: "".concat(e, " error icon"),
                  width: 20,
                  height: 20,
                }),
              });
            case "warning":
              return (0, c.jsx)("div", {
                className: L().inputIcon,
                children: (0, c.jsx)(u(), {
                  "data-testid": "warning icon",
                  src: s,
                  alt: "".concat(e, " warning icon"),
                  width: 20,
                  height: 20,
                }),
              });
            default:
              return null;
          }
        },
        y = o(69496),
        A = o.n(y),
        h = o(82580),
        k = o(67294);
      var x = function (r) {
        var e = r.field,
          o = r.label,
          i = r.type,
          _ = r.placeholder,
          u = r.styles,
          d = r.errorMessage,
          l = void 0 === d ? "Field Error" : d,
          s = r.warningErrorMessage,
          b = void 0 === s ? null : s,
          L = r.classNames,
          y = r.children,
          x = r.handleValidate,
          m = (0, h.u6)(),
          p = m.values,
          f = m.touched,
          v = m.errors,
          w = (0, k.useState)(!1),
          I = w[0],
          S = w[1],
          E = (0, k.useState)("empty"),
          N = E[0],
          Z = E[1],
          j = (0, k.useState)(!0),
          C = j[0],
          M = j[1],
          W = (0, k.useState)(!0),
          U = W[0],
          R = W[1],
          z = (0, k.useState)(!1),
          V = z[0],
          q = z[1],
          O = (0, k.useState)(null),
          T = O[0],
          D = O[1],
          X = p[e],
          H = f[e],
          P = v[e];
        function J(r) {
          return Q.apply(this, arguments);
        }
        function Q() {
          return (Q = (0, n.Z)(function (r) {
            var e, o;
            return (0, t.__generator)(this, function (n) {
              switch (n.label) {
                case 0:
                  return x ? [4, x(r)] : [3, 2];
                case 1:
                  return (o = n.sent()), [3, 3];
                case 2:
                  (o = "valid"), (n.label = 3);
                case 3:
                  return "warning" === (e = o)
                    ? (D(b), [2, null])
                    : "invalid" !== e && r
                    ? [2, null]
                    : [2, l];
              }
            });
          })).apply(this, arguments);
        }
        var F = (0, k.useMemo)(function () {
          return A()(J, 750);
        }, []);
        function G() {
          return (G = (0, n.Z)(function (r) {
            var e, o;
            return (0, t.__generator)(this, function (n) {
              switch (n.label) {
                case 0:
                  if (!r && C) return M(!1), [2, null];
                  if (X === r && !C) return [2, P || null];
                  M(!1), S(!0), D(null), (n.label = 1);
                case 1:
                  return n.trys.push([1, 3, , 4]), [4, F(r)];
                case 2:
                  return (e = n.sent()), U && S(!1), [2, e];
                case 3:
                  return (
                    (o = n.sent()),
                    S(!1),
                    console.error(o),
                    [2, "Server Error, Please Try Again"]
                  );
                case 4:
                  return [2];
              }
            });
          })).apply(this, arguments);
        }
        return (
          (0, k.useEffect)(
            function () {
              q(!(!P || I || (!H && !X)));
            },
            [P, I, H, X]
          ),
          (0, k.useEffect)(
            function () {
              I
                ? Z("pending")
                : T
                ? Z("warning")
                : V
                ? Z("error")
                : X.length
                ? Z("valid")
                : Z("empty");
            },
            [X, V, I, T]
          ),
          (0, k.useEffect)(function () {
            return (
              R(!0),
              function () {
                return R(!1);
              }
            );
          }, []),
          (0, c.jsxs)("div", {
            className: u.formGroup,
            children: [
              (0, c.jsx)("label", {
                className: u.label,
                htmlFor: e,
                children: o,
              }),
              (0, c.jsxs)("div", {
                className: u.inputWrapper,
                children: [
                  (0, c.jsx)(h.gN, {
                    type: i,
                    className: g()(u.input, L),
                    id: e,
                    name: e,
                    "data-testid": "".concat(e, "Field"),
                    placeholder: _,
                    validate: function (r) {
                      return G.apply(this, arguments);
                    },
                  }),
                  (0, c.jsx)(B, { field: e, status: N }),
                ],
              }),
              (0, c.jsx)("div", {
                className: g()(
                  u.alertMessage,
                  u.errorMessage,
                  (0, a.Z)({}, u.alertMessageVisible, V)
                ),
                "data-testid": "".concat(e, "Error"),
                children: P,
              }),
              b &&
                (0, c.jsx)("div", {
                  className: g()(
                    u.alertMessage,
                    u.warningMessage,
                    (0, a.Z)({}, u.alertMessageVisible, T)
                  ),
                  "data-testid": "".concat(e, "Warning"),
                  children: T,
                }),
              y,
            ],
          })
        );
      };
    },
    80867: function (r, e, o) {
      "use strict";
      var n = o(93334),
        a = o(48910);
      e.Z = function () {
        if ((0, n.Z)())
          try {
            return {
              name:
                window.localStorage.getItem("userName") ||
                (0, a.s)("userName") ||
                "",
              email:
                window.localStorage.getItem("userEmail") ||
                (0, a.s)("userEmail") ||
                "",
              company:
                window.localStorage.getItem("userCompany") ||
                (0, a.s)("userCompany") ||
                "",
              website:
                window.localStorage.getItem("userWebsite") ||
                (0, a.s)("userWebsite") ||
                "",
            };
          } catch (r) {
            0;
          }
        return { name: "", email: "", company: "", website: "" };
      };
    },
    30567: function (r, e, o) {
      "use strict";
      var n = o(95861);
      e.Z = function () {
        return {
          utmCampaign: (0, n.Z)("utm_campaign"),
          utmMedium: (0, n.Z)("utm_medium"),
          utmContent: (0, n.Z)("utm_content"),
          utmSource: (0, n.Z)("utm_source"),
        };
      };
    },
    45974: function (r, e, o) {
      "use strict";
      var n = o(79232),
        a = o(7310);
      e.Z = function (r) {
        (0, n.Z)(r), (0, a.Z)(r);
      };
    },
    7310: function (r, e, o) {
      "use strict";
      var n = o(93334),
        a = o(48910);
      e.Z = function (r) {
        if (!(0, n.Z)()) return null;
        var e = r.name,
          o = r.email,
          t = r.website,
          c = r.company;
        e && (0, a.z)({ key: "userName", value: r.name }),
          o && (0, a.z)({ key: "userEmail", value: r.email }),
          c && (0, a.z)({ key: "userCompany", value: r.company }),
          t && (0, a.z)({ key: "userWebsite", value: r.website });
        try {
          e && window.localStorage.setItem("userName", r.name),
            o && window.localStorage.setItem("userEmail", r.email),
            c && window.localStorage.setItem("userCompany", r.company),
            t && window.localStorage.setItem("userWebsite", r.website);
        } catch (i) {
          0;
        }
      };
    },
    50344: function (r, e, o) {
      "use strict";
      var n = o(47568),
        a = o(70655),
        t = o(2363);
      function c() {
        return (c = (0, n.Z)(function (r) {
          var e, o;
          return (0, a.__generator)(this, function (n) {
            switch (n.label) {
              case 0:
                return n.trys.push([0, 2, , 3]), [4, (0, t.Hg)(r)];
              case 1:
                return (e = n.sent()).isValid && e.isWorkEmail
                  ? [2, "valid"]
                  : e.isValid && !e.isWorkEmail
                  ? [2, "warning"]
                  : [2, "invalid"];
              case 2:
                return (o = n.sent()), console.error(o), [2, "invalid"];
              case 3:
                return [2];
            }
          });
        })).apply(this, arguments);
      }
      e.Z = function (r) {
        return c.apply(this, arguments);
      };
    },
    87526: function (r, e) {
      "use strict";
      e.Z = function (r) {
        return r.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
          ? "invalid"
          : "valid";
      };
    },
    72846: function (r, e, o) {
      "use strict";
      var n = o(85893),
        a = o(42293),
        t = o.n(a),
        c = o(94184),
        i = o.n(c);
      e.Z = function (r) {
        var e = r.loadingColor,
          o =
            "headline-studio" === e
              ? "blue"
              : "coschedule" === e
              ? "orange"
              : "gray";
        return (0, n.jsx)("div", {
          className: t().loaderWrapper,
          children: (0, n.jsxs)("div", {
            className: i()(t().bouncingLoader, t()["".concat(o)]),
            children: [
              (0, n.jsx)("div", { className: t().loadingIcon }),
              (0, n.jsx)("div", { className: t().loadingIcon }),
              (0, n.jsx)("div", { className: t().loadingIcon }),
            ],
          }),
        });
      };
    },
    59387: function (r, e, o) {
      "use strict";
      function n(r) {
        for (
          var e = r + "=", o = document.cookie.split(";"), n = 0;
          n < o.length;
          n++
        ) {
          for (var a = o[n]; " " == a.charAt(0); ) a = a.substring(1);
          if (0 == a.indexOf(e)) return a.substring(e.length, a.length);
        }
        return "";
      }
      o.d(e, {
        e: function () {
          return n;
        },
      });
    },
    95861: function (r, e, o) {
      "use strict";
      var n = o(93334);
      e.Z = function (r) {
        if (!(0, n.Z)()) return null;
        var e,
          o,
          a = window.location.search.substring(1).split("&");
        for (o = 0; o < a.length; o++)
          if ((e = a[o].split("="))[0] === r)
            return void 0 === e[1] || decodeURIComponent(e[1]);
      };
    },
    2363: function (r, e, o) {
      "use strict";
      o.d(e, {
        Hg: function () {
          return i;
        },
        UN: function () {
          return t;
        },
      });
      var n = o(47568),
        a = o(70655);
      function t(r) {
        return c.apply(this, arguments);
      }
      function c() {
        return (c = (0, n.Z)(function (r) {
          var e;
          return (0, a.__generator)(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (e = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ url: r }),
                  }),
                  [
                    4,
                    fetch(
                      "".concat(
                        "https://lead-scoring.coschedule.com",
                        "/website"
                      ),
                      e
                    ),
                  ]
                );
              case 1:
                return [2, o.sent().json()];
            }
          });
        })).apply(this, arguments);
      }
      function i(r) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = (0, n.Z)(function (r) {
          var e;
          return (0, a.__generator)(this, function (o) {
            switch (o.label) {
              case 0:
                return (
                  (e = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: r }),
                  }),
                  [
                    4,
                    fetch(
                      "".concat(
                        "https://lead-scoring.coschedule.com",
                        "/email"
                      ),
                      e
                    ),
                  ]
                );
              case 1:
                return [2, o.sent().json()];
            }
          });
        })).apply(this, arguments);
      }
    },
    79232: function (r, e) {
      "use strict";
      e.Z = function (r) {
        return (
          Object.keys(r).forEach(function (e) {
            return (r[e] = r[e].trim());
          }),
          r
        );
      };
    },
    26116: function (r) {
      r.exports = {
        inputIcon: "StatusIcon_inputIcon__6A6xs",
        fadeIn: "StatusIcon_fadeIn__n4tRc",
        updatingIcon: "StatusIcon_updatingIcon__VXpf3",
        "spin-icon": "StatusIcon_spin-icon__zNvik",
      };
    },
    42293: function (r) {
      r.exports = {
        "white-color": "BouncingLoader_white-color__rQ_g1",
        "white-text": "BouncingLoader_white-text__3y3v6",
        "white-background": "BouncingLoader_white-background__Gvxze",
        "white-border": "BouncingLoader_white-border__R6xi2",
        "gray0-color": "BouncingLoader_gray0-color__bKaPF",
        "gray0-text": "BouncingLoader_gray0-text__tcYl5",
        "gray0-background": "BouncingLoader_gray0-background__43DW6",
        "gray0-border": "BouncingLoader_gray0-border__8_0wP",
        "gray1-color": "BouncingLoader_gray1-color__vV_B_",
        "gray1-text": "BouncingLoader_gray1-text__livp1",
        "gray1-background": "BouncingLoader_gray1-background__rgRrR",
        "gray1-border": "BouncingLoader_gray1-border__334JQ",
        "gray2-color": "BouncingLoader_gray2-color__ImT3D",
        "gray2-text": "BouncingLoader_gray2-text__WdEtv",
        "gray2-background": "BouncingLoader_gray2-background__hakcx",
        "gray2-border": "BouncingLoader_gray2-border__ivJ3e",
        "gray3-color": "BouncingLoader_gray3-color__Y7Lfb",
        "gray3-text": "BouncingLoader_gray3-text__xxUFw",
        "gray3-background": "BouncingLoader_gray3-background__Ly_H2",
        "gray3-border": "BouncingLoader_gray3-border__2DonY",
        "gray4-color": "BouncingLoader_gray4-color__Owr8o",
        "gray4-text": "BouncingLoader_gray4-text__afGlT",
        "gray4-background": "BouncingLoader_gray4-background__xJ_Ou",
        "gray4-border": "BouncingLoader_gray4-border__lkL_W",
        "black-color": "BouncingLoader_black-color__14M0U",
        "black-text": "BouncingLoader_black-text__s3u3A",
        "black-background": "BouncingLoader_black-background__r_zi6",
        "black-border": "BouncingLoader_black-border__tCi4P",
        "orange0-color": "BouncingLoader_orange0-color__MVDil",
        "orange0-text": "BouncingLoader_orange0-text__dY0W1",
        "orange0-background": "BouncingLoader_orange0-background__nlNtv",
        "orange0-border": "BouncingLoader_orange0-border___Htdn",
        "orange1-color": "BouncingLoader_orange1-color__kpItW",
        "orange1-text": "BouncingLoader_orange1-text__SgHe2",
        "orange1-background": "BouncingLoader_orange1-background__biu1q",
        "orange1-border": "BouncingLoader_orange1-border__kU9QU",
        "orange2-color": "BouncingLoader_orange2-color__5y542",
        "orange2-text": "BouncingLoader_orange2-text__oCWor",
        "orange2-background": "BouncingLoader_orange2-background__0T562",
        "orange2-border": "BouncingLoader_orange2-border__cTT_I",
        "bright-orange-color": "BouncingLoader_bright-orange-color__uApeO",
        "bright-orange-text": "BouncingLoader_bright-orange-text__B0W33",
        "bright-orange-background":
          "BouncingLoader_bright-orange-background__cHTRs",
        "bright-orange-border": "BouncingLoader_bright-orange-border__qjtKc",
        "dk-bright-orange-color":
          "BouncingLoader_dk-bright-orange-color__FWBxf",
        "dk-bright-orange-text": "BouncingLoader_dk-bright-orange-text__iplgj",
        "dk-bright-orange-background":
          "BouncingLoader_dk-bright-orange-background__xvy1I",
        "dk-bright-orange-border":
          "BouncingLoader_dk-bright-orange-border__LgZHR",
        "coolgray0-color": "BouncingLoader_coolgray0-color__By9x_",
        "coolgray0-text": "BouncingLoader_coolgray0-text__agfxh",
        "coolgray0-background": "BouncingLoader_coolgray0-background__eu7ao",
        "coolgray0-border": "BouncingLoader_coolgray0-border__vqqRi",
        "coolgray1-color": "BouncingLoader_coolgray1-color__xANsr",
        "coolgray1-text": "BouncingLoader_coolgray1-text__y1VbU",
        "coolgray1-background": "BouncingLoader_coolgray1-background__pfC_b",
        "coolgray1-border": "BouncingLoader_coolgray1-border___FptV",
        "coolgray2-color": "BouncingLoader_coolgray2-color__SLAIl",
        "coolgray2-text": "BouncingLoader_coolgray2-text__ar2mu",
        "coolgray2-background": "BouncingLoader_coolgray2-background__4QJK2",
        "coolgray2-border": "BouncingLoader_coolgray2-border__b_C1z",
        "teal0-color": "BouncingLoader_teal0-color__8REhB",
        "teal0-text": "BouncingLoader_teal0-text__px5Am",
        "teal0-background": "BouncingLoader_teal0-background__jGF0N",
        "teal0-border": "BouncingLoader_teal0-border__X7Tpp",
        "teal1-color": "BouncingLoader_teal1-color__XYdb_",
        "teal1-text": "BouncingLoader_teal1-text__xED2G",
        "teal1-background": "BouncingLoader_teal1-background__N7Rtj",
        "teal1-border": "BouncingLoader_teal1-border__0oiGq",
        "teal2-color": "BouncingLoader_teal2-color__tLqXp",
        "teal2-text": "BouncingLoader_teal2-text__ufQxv",
        "teal2-background": "BouncingLoader_teal2-background__F5_wL",
        "teal2-border": "BouncingLoader_teal2-border__yKHyo",
        "bright-teal-color": "BouncingLoader_bright-teal-color__jNG3O",
        "bright-teal-text": "BouncingLoader_bright-teal-text__EVA5s",
        "bright-teal-background":
          "BouncingLoader_bright-teal-background__GErKh",
        "bright-teal-border": "BouncingLoader_bright-teal-border__I8_Pq",
        "navy0-color": "BouncingLoader_navy0-color__GMWDc",
        "navy0-text": "BouncingLoader_navy0-text__AZAW7",
        "navy0-background": "BouncingLoader_navy0-background__q4rSC",
        "navy0-border": "BouncingLoader_navy0-border__QzvkM",
        "navy1-color": "BouncingLoader_navy1-color__bMcHD",
        "navy1-text": "BouncingLoader_navy1-text__p_qr1",
        "navy1-background": "BouncingLoader_navy1-background__ZmO_N",
        "navy1-border": "BouncingLoader_navy1-border__bhJ2d",
        "navy2-color": "BouncingLoader_navy2-color__2v5Hs",
        "navy2-text": "BouncingLoader_navy2-text__ggc5I",
        "navy2-background": "BouncingLoader_navy2-background___Vkvp",
        "navy2-border": "BouncingLoader_navy2-border__LrZDt",
        "green0-color": "BouncingLoader_green0-color__KCe7C",
        "green0-text": "BouncingLoader_green0-text__AoO9W",
        "green0-background": "BouncingLoader_green0-background__fEw_Q",
        "green0-border": "BouncingLoader_green0-border__ZjgZZ",
        "green1-color": "BouncingLoader_green1-color__BXHl_",
        "green1-text": "BouncingLoader_green1-text__75uIm",
        "green1-background": "BouncingLoader_green1-background__L6pAm",
        "green1-border": "BouncingLoader_green1-border__EwOdx",
        "green2-color": "BouncingLoader_green2-color__00swb",
        "green2-text": "BouncingLoader_green2-text__1Xjiu",
        "green2-background": "BouncingLoader_green2-background__rCgCP",
        "green2-border": "BouncingLoader_green2-border__u6qRD",
        "requeue-green-color": "BouncingLoader_requeue-green-color__uVXSW",
        "requeue-green-text": "BouncingLoader_requeue-green-text__k4OhE",
        "requeue-green-background":
          "BouncingLoader_requeue-green-background__EnFSE",
        "requeue-green-border": "BouncingLoader_requeue-green-border__x10_k",
        "yellow0-color": "BouncingLoader_yellow0-color__Kj2bj",
        "yellow0-text": "BouncingLoader_yellow0-text__eszuq",
        "yellow0-background": "BouncingLoader_yellow0-background__MiUzU",
        "yellow0-border": "BouncingLoader_yellow0-border__mrcmI",
        "yellow1-color": "BouncingLoader_yellow1-color__RIg2y",
        "yellow1-text": "BouncingLoader_yellow1-text__VNxOJ",
        "yellow1-background": "BouncingLoader_yellow1-background__j_oNi",
        "yellow1-border": "BouncingLoader_yellow1-border__S9rl4",
        "yellow2-color": "BouncingLoader_yellow2-color__SbYAg",
        "yellow2-text": "BouncingLoader_yellow2-text__pe2Je",
        "yellow2-background": "BouncingLoader_yellow2-background__t_0j_",
        "yellow2-border": "BouncingLoader_yellow2-border__yclVA",
        "twitter-color": "BouncingLoader_twitter-color__3pOT8",
        "twitter-text": "BouncingLoader_twitter-text__M3ag7",
        "twitter-background": "BouncingLoader_twitter-background__8NrmM",
        "twitter-border": "BouncingLoader_twitter-border__1BAes",
        "facebook-color": "BouncingLoader_facebook-color__dCJ2R",
        "facebook-text": "BouncingLoader_facebook-text__H0i4j",
        "facebook-background": "BouncingLoader_facebook-background__QMGiB",
        "facebook-border": "BouncingLoader_facebook-border__PQC6V",
        "pinterest-color": "BouncingLoader_pinterest-color__tdvXS",
        "pinterest-text": "BouncingLoader_pinterest-text__HWTwn",
        "pinterest-background": "BouncingLoader_pinterest-background__fs9zB",
        "pinterest-border": "BouncingLoader_pinterest-border__6eAs0",
        "instagram-color": "BouncingLoader_instagram-color__I1siM",
        "instagram-text": "BouncingLoader_instagram-text__1sZvQ",
        "instagram-background": "BouncingLoader_instagram-background__dwBUC",
        "instagram-border": "BouncingLoader_instagram-border__ukXAt",
        "linkedin-color": "BouncingLoader_linkedin-color__HqfJA",
        "linkedin-text": "BouncingLoader_linkedin-text__8mjbS",
        "linkedin-background": "BouncingLoader_linkedin-background__AMFg3",
        "linkedin-border": "BouncingLoader_linkedin-border__sjszJ",
        "bright-blue-color": "BouncingLoader_bright-blue-color__BDBkZ",
        "bright-blue-text": "BouncingLoader_bright-blue-text__UJaYs",
        "bright-blue-background":
          "BouncingLoader_bright-blue-background__l9MFz",
        "bright-blue-border": "BouncingLoader_bright-blue-border__FCOrM",
        "md-blue-color": "BouncingLoader_md-blue-color__raZ7m",
        "md-blue-text": "BouncingLoader_md-blue-text__cWIwT",
        "md-blue-background": "BouncingLoader_md-blue-background__ZWA_I",
        "md-blue-border": "BouncingLoader_md-blue-border__tkMYs",
        "dark-blue-color": "BouncingLoader_dark-blue-color__FR6t6",
        "dark-blue-text": "BouncingLoader_dark-blue-text__InvcL",
        "dark-blue-background": "BouncingLoader_dark-blue-background__LOaCU",
        "dark-blue-border": "BouncingLoader_dark-blue-border__ufIxt",
        "cos-headline-studio": "BouncingLoader_cos-headline-studio__4FXsw",
        "btn-green": "BouncingLoader_btn-green__ulzRN",
        "btn-blue": "BouncingLoader_btn-blue__2ILpa",
        loaderWrapper: "BouncingLoader_loaderWrapper__SuyDE",
        bouncingLoader: "BouncingLoader_bouncingLoader__2sReq",
        loadingIcon: "BouncingLoader_loadingIcon__S5UwS",
        gray: "BouncingLoader_gray__OWSLX",
        orange: "BouncingLoader_orange__bGtUP",
        blue: "BouncingLoader_blue__8xiEx",
      };
    },
  },
]);
