(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6549],
  {
    67889: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return v;
        },
      });
      var a = t(26042),
        o = t(69396),
        r = t(85893),
        i = t(66897),
        l = t(5586),
        d = t(57943),
        c = t(29144),
        s = t(63028),
        u = t(46002),
        p = t(76741),
        h = t(79153),
        m = t(48910),
        g = t(67294),
        C = 18e5;
      var v = function (e) {
        var n = e.ctaDataFromPost,
          t = e.janetTag,
          v = void 0 === t ? null : t;
        (0, u.Z)(), (0, h.Z)(v), (0, p.Z)("blog");
        var f = (0, i.by)(),
          _ = f.adState,
          x = f.adDispatch,
          w = _.showExitIntentModal,
          b = _.showFullscreenTakeover,
          j = _.showBottomBanner,
          y = _.adVersion,
          k = (0, g.useMemo)(function () {
            return (0, c.Z)("blog");
          }, []),
          U = (0, g.useMemo)(function () {
            return (0, s.Z)("blog");
          }, []),
          T = (0, g.useMemo)(function () {
            return (0, d.Z)("blog");
          }, []);
        (0, g.useEffect)(
          function () {
            y &&
              "hide" !== j &&
              y &&
              x({ name: "TOGGLE_BOTTOM_BANNER", value: "show" });
          },
          [j, y, x]
        );
        var S = (0, g.useState)(),
          O = S[0],
          L = S[1];
        (0, g.useEffect)(
          function () {
            "academy" === y && n && L(n);
          },
          [n, y]
        );
        var F = (0, g.useMemo)(
            function () {
              if (y && T) {
                if (!O) return T[y];
                if ("academy" === y) {
                  var e,
                    n,
                    t = O.courseBannerColor,
                    a = O.courseBottomBannerButtonText,
                    o = O.courseBottomBannerGraphic,
                    r = O.courseBottomBannerHeading,
                    i = O.courseBottomBannerUrl,
                    l = O.courseButtonColor;
                  return a && o && r && i
                    ? {
                        img: {
                          src: o.mediaItemUrl,
                          alt: "The Actionable Marketing Institute Powered by CoSchedule",
                        },
                        headline: r,
                        bannerColor:
                          t ||
                          (null === (e = T.academy) || void 0 === e
                            ? void 0
                            : e.bannerColor) ||
                          void 0,
                        cta: {
                          link: i,
                          title: a,
                          text: a,
                          buttonColor:
                            l ||
                            (null === (n = T.academy) || void 0 === n
                              ? void 0
                              : n.cta.buttonColor) ||
                            void 0,
                        },
                      }
                    : T.academy;
                }
                return T[y];
              }
            },
            [O, y]
          ),
          N = (0, g.useMemo)(
            function () {
              var e, n;
              if (y && k) {
                if (!O || "academy" !== y) return k[y];
                var t = O.coursePopupGraphic,
                  a = O.courseExitIntentButtonText,
                  o = O.courseExitIntentHeading,
                  r = O.courseExitIntentSubheading,
                  i = O.courseExitIntentUrl,
                  l = O.courseButtonColor;
                return t && a && o && r && i
                  ? {
                      img: {
                        src: t.mediaItemUrl,
                        alt: "The Actionable Marketing Institute Powered by CoSchedule",
                      },
                      headline: o,
                      bodyCopy: r,
                      cta: {
                        link: i,
                        title: a,
                        text: a,
                        buttonColor:
                          l ||
                          (null === (e = k.academy) ||
                          void 0 === e ||
                          null === (n = e.cta) ||
                          void 0 === n
                            ? void 0
                            : n.buttonColor) ||
                          void 0,
                      },
                    }
                  : k.academy;
              }
            },
            [O, y]
          ),
          Z = (0, g.useMemo)(
            function () {
              var e, n;
              if (y && U) {
                if (!O || "academy" !== y) return U[y];
                var t = O.coursePopupGraphic,
                  a = O.courseFullscreenTakeoverButtonText,
                  o = O.courseFullscreenTakeoverHeading,
                  r = O.courseFullscreenTakeoverSubheading,
                  i = O.courseFullscreenTakeoverUrl,
                  l = O.courseButtonColor;
                return t && a && o && r && i
                  ? {
                      img: {
                        src: t.mediaItemUrl,
                        alt: "The Actionable Marketing Institute Powered by CoSchedule",
                      },
                      headline: o,
                      bodyCopy: r,
                      cta: {
                        link: i,
                        title: a,
                        text: a,
                        buttonColor:
                          l ||
                          (null === (e = U.academy) ||
                          void 0 === e ||
                          null === (n = e.cta) ||
                          void 0 === n
                            ? void 0
                            : n.buttonColor) ||
                          void 0,
                      },
                    }
                  : U.academy;
              }
            },
            [O, y]
          );
        return y
          ? (0, r.jsxs)("div", {
              children: [
                "show" === j &&
                  F &&
                  (0, r.jsx)(
                    l.oq,
                    (0, o.Z)((0, a.Z)({ adVersion: y }, F), {
                      ctaType: "Blog",
                      handleClose: function () {
                        return (
                          x({ name: "TOGGLE_BOTTOM_BANNER", value: "hide" }),
                          void (0, m.z)({
                            key: "closeBottomBanner",
                            value: !0,
                            ttl: C,
                          })
                        );
                      },
                    })
                  ),
                "show" === w &&
                  N &&
                  (0, r.jsx)(
                    l.OW,
                    (0, o.Z)(
                      (0, a.Z)(
                        {
                          adVersion: y,
                          fullscreenModalVersion: "Exit Intent",
                          ctaType: "Blog",
                        },
                        N
                      ),
                      {
                        handleClose: function () {
                          return (
                            x({
                              name: "TOGGLE_EXIT_INTENT_MODAL",
                              value: "hide",
                            }),
                            void (0, m.z)({
                              key: "closeProductModalExit",
                              value: !0,
                              ttl: C,
                            })
                          );
                        },
                      }
                    )
                  ),
                "show" === b &&
                  Z &&
                  (0, r.jsx)(
                    l.OW,
                    (0, o.Z)(
                      (0, a.Z)(
                        {
                          adVersion: y,
                          fullscreenModalVersion: "Fullscreen Takeover",
                          ctaType: "Blog",
                        },
                        Z
                      ),
                      {
                        handleClose: function () {
                          return (
                            x({
                              name: "TOGGLE_FULLSCREEN_TAKEOVER_MODAL",
                              value: "hide",
                            }),
                            void (0, m.z)({
                              key: "closeProductModalFullScreen",
                              value: !0,
                              ttl: C,
                            })
                          );
                        },
                      }
                    )
                  ),
              ],
            })
          : null;
      };
    },
    41481: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return i;
        },
      });
      var a = t(85893),
        o = t(9029),
        r = t.n(o);
      function i(e) {
        var n = e.children;
        return (0, a.jsx)("div", {
          className: r().containerWrapper,
          children: n,
        });
      }
    },
    50591: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(14924),
        o = t(85893),
        r = t(38569),
        i = t(32867),
        l = t(5586),
        d = t(31351),
        c = t(94184),
        s = t.n(c),
        u = t(25675),
        p = t.n(u),
        h = t(67294),
        m = t(61613),
        g = t.n(m);
      function C(e) {
        var n = e.downloadBtnText,
          t = e.ctaColor,
          a = e.handleClick;
        return (0, o.jsx)("button", {
          className: g().ContentUpgradeDownloadButton,
          style: { backgroundColor: t },
          onClick: function () {
            return a ? a() : null;
          },
          children: n,
        });
      }
      function v(e) {
        var n,
          t = e.completedLeadForm,
          r = e.isCookieCta,
          l = e.asModal,
          c = void 0 !== l && l,
          u = e.blogCtaData,
          h = e.handleDownloadButton,
          m = e.handleFormSubmit,
          v = (0, d.Z)().anySuspect,
          f = u.downloadGraphic,
          _ = u.downloadHeadline,
          x = u.downloadSubheadline,
          w = u.downloadGraphicColor,
          b = u.downloadFile,
          j = u.downloadBtnText,
          y = u.ctaColor;
        return (0, o.jsx)(o.Fragment, {
          children: (0, o.jsxs)("div", {
            className: s()(
              g().ContentUpgradeCta,
              ((n = {}),
              (0, a.Z)(n, g().FullInlineCta, false),
              (0, a.Z)(n, g().cookieCta, r),
              n)
            ),
            children: [
              (0, o.jsx)("div", {
                className: g().ContentUpgradeImageWrapper,
                style: { backgroundColor: w },
                children:
                  (null === f || void 0 === f ? void 0 : f.mediaItemUrl) &&
                  (0, o.jsx)(p(), {
                    src: null === f || void 0 === f ? void 0 : f.mediaItemUrl,
                    alt: "Download Graphic",
                    layout: "fill",
                    objectFit: "contain",
                  }),
              }),
              (0, o.jsxs)("div", {
                className: g().ContentUpgradeForm,
                children: [
                  (0, o.jsxs)("div", {
                    children: [
                      (0, o.jsx)("p", {
                        className: g().ContentUpgradeHeading,
                        children: _,
                      }),
                      x &&
                        (0, o.jsx)("p", {
                          className: g().ContentUpgradeSubHeading,
                          children: x,
                        }),
                    ],
                  }),
                  t
                    ? (0, o.jsxs)("p", {
                        children: [
                          "Success! Your download should start shortly. Or you can download it manually",
                          " ",
                          (0, o.jsx)("a", {
                            title: "Download File",
                            target: "_blank",
                            rel: "noreferrer",
                            href: b,
                            className: g().downloadSuccessLink,
                            children: "here",
                          }),
                          ".",
                        ],
                      })
                    : (0, o.jsx)(o.Fragment, {
                        children: v
                          ? (0, o.jsx)(o.Fragment, {
                              children: c
                                ? (0, o.jsx)(i.Z, {
                                    resourceUrl: b,
                                    submitButtonText: j,
                                    handleSubmit: m,
                                  })
                                : (0, o.jsx)(C, {
                                    downloadBtnText: j,
                                    ctaColor: y,
                                    handleClick: h,
                                  }),
                            })
                          : (0, o.jsx)("a", {
                              title: "Download File",
                              target: "_blank",
                              rel: "noreferrer",
                              href: b,
                              children: (0, o.jsx)(C, {
                                downloadBtnText: j,
                                ctaColor: y,
                              }),
                            }),
                      }),
                ],
              }),
            ],
          }),
        });
      }
      var f = function (e) {
        var n = e.ctaDataFromPost,
          t = e.modalOnly,
          a = void 0 !== t && t,
          i = e.cookie,
          d = (0, r.bN)(),
          c = d.globalState,
          s = d.globalDispatch,
          u = c.showLeadFormModal,
          p = (0, h.useState)(!1),
          m = p[0],
          C = p[1],
          f = (0, h.useState)(!1),
          _ = f[0],
          x = f[1],
          w = (0, h.useState)(null),
          b = w[0],
          j = w[1];
        (0, h.useEffect)(
          function () {
            i ? (j(i), x(!0)) : n && j(n);
          },
          [n, i]
        );
        var y = function () {
          s({ name: "TOGGLE_LEAD_FORM_MODAL", value: "hide" }),
            C(!0),
            window.open(
              null === b || void 0 === b ? void 0 : b.downloadFile,
              "_blank",
              "noreferrer"
            );
        };
        return b
          ? (0, o.jsxs)(o.Fragment, {
              children: [
                !a &&
                  (0, o.jsx)(v, {
                    completedLeadForm: m,
                    isCookieCta: _,
                    blogCtaData: b,
                    handleFormSubmit: y,
                    handleDownloadButton: function () {
                      s({ name: "TOGGLE_LEAD_FORM_MODAL", value: "show" });
                    },
                  }),
                "show" === u &&
                  (0, o.jsx)(l.u_, {
                    children: (0, o.jsxs)("div", {
                      className: g().ContentUpgradeModal,
                      children: [
                        (0, o.jsx)("button", {
                          title: "Close Modal",
                          className: g().ContentUpgradeModalClose,
                          onClick: function () {
                            s({
                              name: "TOGGLE_LEAD_FORM_MODAL",
                              value: "hide",
                            });
                          },
                          children: (0, o.jsx)(l.Tw, {}),
                        }),
                        (0, o.jsx)("div", {
                          className: g().ContentUpgradeModalInner,
                          children: (0, o.jsx)(v, {
                            completedLeadForm: m,
                            isCookieCta: _,
                            asModal: !0,
                            blogCtaData: b,
                            handleFormSubmit: y,
                          }),
                        }),
                      ],
                    }),
                  }),
              ],
            })
          : null;
      };
    },
    88965: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var a = t(85893);
      function o(e) {
        var n = e.id,
          t = e.pro,
          o = e.rel,
          r = e.startSlide,
          i = new URL(
            "https://www.slideshare.net/slideshow/embed_code/".concat(n)
          );
        return (
          t &&
            (i = new URL(
              "https://www.slideshare.net/slidesharepro/".concat(n)
            )),
          o && i.searchParams.append("rel", o),
          r && i.searchParams.append("startSlide", r),
          (0, a.jsx)("iframe", {
            src: i.toString(),
            sandbox:
              "allow-popups allow-scripts allow-same-origin allow-presentation",
            allow: "fullscreen",
            style: { width: "100%", height: "400px" },
            loading: "lazy",
          })
        );
      }
    },
    20575: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = t(14924),
        o = t(26042),
        r = t(69396),
        i = t(85893),
        l = t(67294),
        d = t(99534);
      function c(e) {
        var n = e.src,
          t = e.width,
          a = e.quality,
          o = new URL(n).pathname;
        return ""
          .concat("https://media.coschedule.com")
          .concat(o, "?w=")
          .concat(t, "&q=")
          .concat(a || 75);
      }
      var s = t(25675),
        u = t.n(s);
      function p(e) {
        var n = e.priority,
          t = e.src,
          a = e.alt,
          s = e.loading,
          p = (0, d.Z)(e, ["priority", "src", "alt", "loading"]),
          h = (0, l.useState)(!1),
          m = h[0],
          g = h[1];
        return (0, i.jsx)(i.Fragment, {
          children: m
            ? (0, i.jsx)(
                u(),
                {
                  src: "/img/broken_img_placeholder.png",
                  alt: a,
                  layout: "intrinsic",
                  width: 800,
                  height: 342,
                  loading: s,
                },
                "borked"
              )
            : (0, l.createElement)(
                u(),
                (0, r.Z)((0, o.Z)({}, p), {
                  priority: n,
                  loader: c,
                  key: String(t),
                  src: t,
                  alt: a,
                  loading: s,
                  unoptimized: String(t).endsWith(".gif"),
                  onError: function (e) {
                    return g(!0);
                  },
                })
              ),
        });
      }
      var h = t(94184),
        m = t.n(h),
        g = t(25935),
        C = t(76050),
        v = t.n(C);
      var f = function (e) {
        var n,
          t = e.imageNode,
          d = e.imageCount,
          c = e.className,
          s = (0, g.e_)(t.attribs),
          u = s.className,
          h = u && u.match(/drop-shadow/gi);
        return "undefined" === s.src ||
          (null === (n = s.src) || void 0 === n ? void 0 : n.match("linkedin"))
          ? (0, i.jsx)(i.Fragment, {})
          : s.width && s.height
          ? ((s.layout = "intrinsic"),
            (0, i.jsx)("span", {
              className: m()(
                c,
                s.className,
                (0, a.Z)({}, v().imageDropshadow, h)
              ),
              children: (0, l.createElement)(
                p,
                (0, r.Z)((0, o.Z)({}, s), {
                  key: s.src,
                  priority: 1 === d,
                  src: s.src,
                  alt: s.alt,
                  loading: 1 === d ? "eager" : "lazy",
                })
              ),
            }))
          : ((s.layout = "fill"),
            (0, i.jsx)("span", {
              className: m()(c, (0, a.Z)({}, v().imageDropshadow, h)),
              children: (0, i.jsx)(
                "img",
                (0, o.Z)({ src: s.src, alt: s.alt, loading: "lazy" }, s)
              ),
            }));
      };
    },
    69730: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var a = t(85893),
        o = t(41481),
        r = t(73107),
        i = t.n(r);
      function l() {
        return (0, a.jsx)("div", {
          className: i().alertWrapper,
          children: (0, a.jsx)(o.Z, {
            children: (0, a.jsxs)("div", {
              className: i().previewWrapper,
              children: [
                "This is a page preview.",
                " ",
                (0, a.jsx)("a", {
                  href: "/api/exit-preview",
                  className: i().link,
                  children: "Click here",
                }),
                " ",
                "to exit preview mode.",
              ],
            }),
          }),
        });
      }
    },
    47142: function (e, n) {
      "use strict";
      n.Z = function e(n) {
        return n.children.reduce(function (n, t) {
          if ("text" === t.type) n = t.data;
          else if ("tag" === t.type) {
            e(t);
          }
          return n;
        }, "");
      };
    },
    29850: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(26042),
        o = t(69396),
        r = t(85893),
        i = t(41664),
        l = t.n(i),
        d = t(71616),
        c = t.n(d);
      function s(e) {
        var n = e.items,
          t = e.startingValue,
          a = void 0 === t ? 1 : t,
          o = e.unordered,
          i = void 0 !== o && o,
          d = function () {
            return n.map(function (e, n) {
              var t = /[0-9]\. (.*)/gi.exec(e.name),
                a = (null === t || void 0 === t ? void 0 : t.length)
                  ? t[1]
                  : e.name;
              return (0,
              r.jsx)("li", { className: c().tocHeadingListItem, children: (0, r.jsx)(l(), { href: "#".concat(e.link) || 0, children: (0, r.jsx)("a", { children: a }) }) }, e.link + n);
            });
          };
        return (0, r.jsx)(r.Fragment, {
          children: i
            ? (0, r.jsx)("ul", { className: c().tocHeadingList, children: d() })
            : (0, r.jsx)("ol", {
                start: a,
                className: c().tocHeadingList,
                children: d(),
              }),
        });
      }
      var u = function (e) {
        var n = e.tableOfContentsArray;
        if (!(null === n || void 0 === n ? void 0 : n.length)) return null;
        var t = (function (e) {
          var n = e.tocSections,
            t = e.tableOfContentsArray;
          return n.map(function (e, o) {
            return t.reduce(function (t, a, r) {
              var i,
                l = null === (i = n[o + 1]) || void 0 === i ? void 0 : i.index;
              return (
                r > e.index &&
                  r < (l || 1 / 0) &&
                  "heading" === a.id &&
                  t.children.push(a),
                t
              );
            }, (0, a.Z)({}, e));
          });
        })({
          tocSections: n.reduce(function (e, n, t) {
            return (
              "dividing-section" === n.id &&
                e.push((0, o.Z)((0, a.Z)({}, n), { index: t, children: [] })),
              e
            );
          }, []),
          tableOfContentsArray: n,
        });
        return (0, r.jsxs)("nav", {
          className: c().toc,
          role: "navigation",
          "aria-label": "Table of Contents",
          children: [
            (0, r.jsx)("div", {
              className: c().tocHeading,
              children: "Table of Contents",
            }),
            (0, r.jsx)("div", {
              className: c().tocListWrapper,
              children: t.length
                ? (0, r.jsx)("ul", {
                    className: c().tocSectionList,
                    children: t.map(function (e, n) {
                      return (0,
                      r.jsxs)("li", { className: c().tocSectionListItem, children: [(0, r.jsx)(l(), { href: "#".concat(e.link) || 0, children: (0, r.jsx)("a", { className: c().tocSectionHeading, children: e.name }) }), s({ items: e.children, startingValue: e.index - n + 1, unordered: e.unordered })] }, e.link);
                    }),
                  })
                : (0, r.jsx)(r.Fragment, { children: s({ items: n }) }),
            }),
          ],
        });
      };
    },
    9029: function (e) {
      e.exports = { containerWrapper: "Container_containerWrapper__XKT6P" };
    },
    61613: function (e) {
      e.exports = {
        ContentUpgradeCta: "ContentUpgradeCta_ContentUpgradeCta__qZYOc",
        ContentUpgradeImageWrapper:
          "ContentUpgradeCta_ContentUpgradeImageWrapper__YNuYz",
        ContentUpgradeForm: "ContentUpgradeCta_ContentUpgradeForm__knH4e",
        ContentUpgradeDownloadButton:
          "ContentUpgradeCta_ContentUpgradeDownloadButton__mI4oc",
        FullInlineCta: "ContentUpgradeCta_FullInlineCta__VGg0j",
        ContentUpgradeHeading: "ContentUpgradeCta_ContentUpgradeHeading__jevZG",
        ContentUpgradeSubHeading:
          "ContentUpgradeCta_ContentUpgradeSubHeading__rDxmi",
        ContentUpgradeModal: "ContentUpgradeCta_ContentUpgradeModal__HG0_5",
        ContentUpgradeModalInner:
          "ContentUpgradeCta_ContentUpgradeModalInner__nwoHO",
        cookieCta: "ContentUpgradeCta_cookieCta__obgXx",
        ContentUpgradeModalClose:
          "ContentUpgradeCta_ContentUpgradeModalClose__TYhTH",
        downloadSuccessLink: "ContentUpgradeCta_downloadSuccessLink__3K5uR",
      };
    },
    76050: function (e) {
      e.exports = { imageDropshadow: "ImageReplacer_imageDropshadow__L3FZf" };
    },
    73107: function (e) {
      e.exports = {
        alertWrapper: "PreviewAlert_alertWrapper__gvIwH",
        previewWrapper: "PreviewAlert_previewWrapper__Ir_aC",
        link: "PreviewAlert_link__rKIwR",
      };
    },
    71616: function (e) {
      e.exports = {
        toc: "TableOfContents_toc__p_Ssc",
        tocHeading: "TableOfContents_tocHeading__HWh23 heading",
        tocListWrapper: "TableOfContents_tocListWrapper__LbI7h",
        tocSectionList: "TableOfContents_tocSectionList__SIl30",
        tocHeadingList: "TableOfContents_tocHeadingList__kpv9D",
        tocSectionHeading: "TableOfContents_tocSectionHeading__PH36Y heading",
      };
    },
    99534: function (e, n, t) {
      "use strict";
      function a(e, n) {
        if (null == e) return {};
        var t,
          a,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              a,
              o = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (t = r[a]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (t = r[a]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      t.d(n, {
        Z: function () {
          return a;
        },
      });
    },
  },
]);
