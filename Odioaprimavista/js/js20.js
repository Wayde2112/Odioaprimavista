(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1181],
  {
    4674: function (e, a, r) {
      "use strict";
      r.d(a, {
        s: function () {
          return J;
        },
      });
      var t = r(47568),
        i = r(70655),
        s = r(85893),
        n = r(32867),
        d = r(5586),
        o = r(31351),
        l = r(25675),
        c = r.n(l),
        u = {
          src: "/_next/static/media/blog-homepage-cta-calendar.959bc035.png",
          height: 275,
          width: 400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAS1BMVEX7/v32497ppZHx2cv86uX9///67+vt8vX7/Pz6zsGh4/Xn9Pru6+vk29zutaTC5vf7qon+8ez9+PbK7PvH6fra8fz43NOv5P7b4eVuUYbLAAAAEXRSTlNFPwgf+UlH/v7+eeLl+kbjYhYhkkoAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAA3SURBVHicBcEHAoAgDACxA0qHCwHX/19qwkKtVVNmXtb9iYP1tuFdCptL7G8rhIxu8ztJCqD5BzIXAch2Wd2jAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 6,
        },
        h = {
          src: "/_next/static/media/blog-homepage-cta-download.e423f0de.png",
          height: 275,
          width: 400,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAYFBMVEVMaXHqoYJwT2OzlZEcz/MZbtz/mmoKZtbujWzvfVv/bVWhfZQw3fUir/D/k1ddmcmUkZP/hFl6kqq/hIdpqrgcbd9icrYbZ8V4eKr1nHR6g60ol+aXqq+KuLUPfe2Tj6cFJuTqAAAAGXRSTlMA/hXsE/z8UPs7Iv6eulPuIegP/XfB5jHZFbbpngAAAAlwSFlzAAALEgAACxIB0t1+/AAAADpJREFUeJwVwQkWQDAMQMGPthL7Tor2/rf0zLCo6uQcbLOZvB3sayjap4dDgvh7bLhijj5VA2f9K/kAQygCcbJivnMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 6,
        },
        g = r(67294),
        p = r(59386),
        v = r.n(p);
      function m() {
        var e = (0, g.useState)(!1),
          a = e[0],
          r = e[1],
          t = (0, o.Z)().targetTier3Plus,
          i = (0, g.useState)("mcFree"),
          l = i[0],
          p = i[1],
          m =
            "https://media.coschedule.com/uploads/CoSchedule_Marketing_Template_and_Resource_Collection.zip";
        return (
          (0, g.useEffect)(
            function () {
              p(t ? "cosDemo" : "mcFree");
            },
            [t]
          ),
          (0, s.jsx)("section", {
            className: v().sidebarCtaWrapper,
            children:
              "downloadCta" === l
                ? (0, s.jsxs)("div", {
                    className: v().sidebarCtaDownload,
                    children: [
                      (0, s.jsx)("div", {
                        className: v().sidebarImage,
                        children: (0, s.jsx)(c(), {
                          alt: "Blog Download Image",
                          src: h,
                          width: 160,
                          height: 110,
                        }),
                      }),
                      (0, s.jsx)("h3", {
                        className: v().sidebarCtaTitle,
                        children:
                          "Improve your marketing with 20+ downloadable templates and resources.",
                      }),
                      a
                        ? (0, s.jsx)("div", {
                            className: v().sidebarCtaDownloadSuccessMessage,
                            children: (0, s.jsxs)("p", {
                              children: [
                                "Success! Your download should start automatically. If you have any issues,",
                                " ",
                                (0, s.jsx)("a", {
                                  href: m,
                                  title: "Click here to download",
                                  target: "_blank",
                                  rel: "noreferrer",
                                  className: v().sidebarCtaDownloadSuccessLink,
                                  children: "click\xa0here",
                                }),
                                " ",
                                "to download manually.",
                              ],
                            }),
                          })
                        : (0, s.jsx)(n.Z, {
                            handleSubmit: function () {
                              r(!0), window.open(m, "_blank", "noreferrer");
                            },
                          }),
                    ],
                  })
                : (0, s.jsxs)("div", {
                    className: v().sidebarCtaProduct,
                    children: [
                      (0, s.jsx)("div", {
                        className: v().sidebarImage,
                        children: (0, s.jsx)(c(), {
                          alt: "Blog Calendar Image",
                          src: u,
                          width: 180,
                          height: 124,
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: v().sidebarInner,
                        children: [
                          (0, s.jsx)("h3", {
                            className: v().sidebarCtaTitle,
                            children:
                              "Did you know organized marketers are 397% more likely to report success?",
                          }),
                          "mcFree" === l &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)("p", {
                                  className: v().sidebarCtaSubTitle,
                                  children:
                                    "Start your free Marketing Calendar to get organized with CoSchedule today",
                                }),
                                (0, s.jsx)(d.ZP, {
                                  href: "/signup",
                                  title:
                                    "Get started with Marketing Calendar Free",
                                  buttonColorClass: "suiteOrange",
                                  buttonText: "Start My Free Calendar",
                                  nextJsLink: !1,
                                }),
                              ],
                            }),
                          "cosDemo" === l &&
                            (0, s.jsxs)(s.Fragment, {
                              children: [
                                (0, s.jsx)("p", {
                                  className: v().sidebarCtaSubTitle,
                                  children:
                                    "Schedule a demo to get organized with CoSchedule today",
                                }),
                                (0, s.jsx)(d.ZP, {
                                  href: "/product-demo",
                                  title:
                                    "Get started with a demo of CoSchedule now",
                                  buttonColorClass: "suiteOrange",
                                  buttonText: "Get A Demo",
                                  nextJsLink: !1,
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
          })
        );
      }
      var A = r(41664),
        _ = r.n(A),
        b = r(73457),
        x = r.n(b);
      function C(e) {
        var a,
          r = e.name,
          t = e.posts;
        return (
          null === t || void 0 === t || null === (a = t.edges) || void 0 === a
            ? void 0
            : a.length
        )
          ? (0, s.jsxs)("section", {
              className: x().sidebarSection,
              children: [
                (0, s.jsx)("h3", { className: x().sidebarTitle, children: r }),
                (0, s.jsx)("ul", {
                  children: t.edges.map(function (e, a) {
                    return (0,
                    s.jsx)("li", { className: x().sidebarItem, children: (0, s.jsx)(_(), { href: e.node.uri, children: (0, s.jsx)("a", { title: e.node.title, className: x().sidebarLink, children: e.node.title }) }) }, a);
                  }),
                }),
              ],
            })
          : null;
      }
      function f(e) {
        var a = e.featuredPosts,
          r = e.latestPodcasts;
        return (0, s.jsxs)("aside", {
          className: x().sidebarWrapper,
          children: [
            (0, s.jsx)(m, {}),
            (0, s.jsx)(C, { name: "Featured Posts", posts: a }),
            (0, s.jsx)(C, { name: "Latest Podcasts", posts: r }),
          ],
        });
      }
      var j = r(63588),
        S = r(94184),
        w = r.n(S),
        P = r(25935),
        I = r(67857),
        N = r.n(I);
      function k(e) {
        var a = e.children,
          r = e.author,
          t = e.category,
          i = e.featuredPosts,
          n = e.latestPodcasts;
        return (0, s.jsxs)("div", {
          className: N().archiveContainerWrapper,
          children: [
            (0, s.jsx)("div", {
              className: N().headingWrapper,
              children: (0, s.jsx)("div", {
                className: N().headingInner,
                children: t
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("div", {
                          className: N().title,
                          children: "Category Archive",
                        }),
                        (0, s.jsx)("h1", {
                          className: N().mainHeading,
                          children: t.name,
                        }),
                        (0, s.jsx)("div", {
                          className: N().description,
                          children: (0, j.Z)(t.description),
                        }),
                      ],
                    })
                  : r
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("div", {
                          className: N().title,
                          children: "Author Archive",
                        }),
                        (0, s.jsxs)("h1", {
                          className: N().mainHeading,
                          children: [r.firstName, " ", r.lastName],
                        }),
                        r.description &&
                          (0, s.jsx)("div", {
                            className: N().description,
                            children: (0, P.ZP)(r.description),
                          }),
                      ],
                    })
                  : void w()(N().mainHeading, N().small),
              }),
            }),
            (0, s.jsx)("div", { children: a }),
            (0, s.jsx)("div", {
              className: N().sidebar,
              children: (0, s.jsx)(f, { featuredPosts: i, latestPodcasts: n }),
            }),
          ],
        });
      }
      var T = r(41481),
        y = r(56643),
        H = r(4036),
        Z = r(47824),
        W = r(76696),
        D = r.n(W);
      function L(e) {
        var a = e.title,
          r = e.featuredImage,
          t = e.date,
          i = e.excerpt,
          n = e.author,
          d = e.uri;
        return (0, s.jsx)("section", {
          children: (0, s.jsx)(_(), {
            href: d,
            children: (0, s.jsx)("a", {
              children: (0, s.jsxs)("div", {
                className: D().heroCardWrapper,
                children: [
                  (0, s.jsx)("div", {
                    className: D().heroImage,
                    children:
                      r && (0, s.jsx)(Z.Z, { title: a, featuredImage: r }),
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28",
                    children: [
                      (0, s.jsx)("div", {
                        children: (0, s.jsx)("h3", {
                          className: D().heroHeading,
                          dangerouslySetInnerHTML: { __html: a },
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        children: [
                          (0, s.jsx)("div", {
                            className: D().heroDescription,
                            dangerouslySetInnerHTML: { __html: i },
                          }),
                          (0, s.jsx)(H.Z, {
                            author: n.node,
                            publishedDate: t,
                            inPostPreview: !0,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        });
      }
      var M = r(85590),
        F = r(70174),
        z = r(70910),
        E = r.n(z);
      function V(e) {
        var a = e.posts;
        return (0, s.jsx)("section", {
          className: E().postsWrapper,
          children: (0, s.jsx)("div", {
            className: E().postsGrid,
            children: a.map(function (e) {
              var a = e.node;
              return (0,
              s.jsx)("div", { className: E().postCard, children: (0, s.jsx)(F.Z, { title: a.title, featuredImage: a.featuredImage, date: a.date, author: a.author, uri: a.uri, excerpt: a.excerpt }) }, a.uri);
            }),
          }),
        });
      }
      var U = r(7152),
        B = r(66540),
        X = r(58533);
      function J(e) {
        var a,
          r,
          n,
          d,
          o,
          l = e.category,
          c = e.allPosts,
          u = e.preview,
          h = e.author,
          p = l ? "Visited Blog ".concat(l) : "Visited Blog Home";
        (0, U.Z)(p);
        var v = (0, g.useState)(
            null === (a = c.blogPosts) || void 0 === a
              ? void 0
              : a.edges.slice(1)
          ),
          m = v[0],
          A = v[1],
          _ = (0, g.useState)(
            null === (r = c.blogPosts) || void 0 === r
              ? void 0
              : r.pageInfo.endCursor
          ),
          b = _[0],
          x = _[1],
          C = (0, g.useState)(
            null === (n = c.blogPosts) || void 0 === n
              ? void 0
              : n.pageInfo.hasNextPage
          ),
          f = C[0],
          j = C[1],
          S =
            null ===
              (o =
                null === (d = c.blogPosts) || void 0 === d
                  ? void 0
                  : d.edges[0]) || void 0 === o
              ? void 0
              : o.node,
          w = (function () {
            var e = (0, t.Z)(function () {
              var e;
              return (0, i.__generator)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return [
                      4,
                      (0, B.C9)(
                        u,
                        b,
                        null === l || void 0 === l ? void 0 : l.databaseId,
                        null === h || void 0 === h ? void 0 : h.databaseId
                      ),
                    ];
                  case 1:
                    return (
                      (e = a.sent()),
                      A(function (a) {
                        return Array.prototype.concat(
                          a,
                          null === e || void 0 === e ? void 0 : e.edges.slice(1)
                        );
                      }),
                      x(
                        null === e || void 0 === e
                          ? void 0
                          : e.pageInfo.endCursor
                      ),
                      j(
                        null === e || void 0 === e
                          ? void 0
                          : e.pageInfo.hasNextPage
                      ),
                      [2]
                    );
                }
              });
            });
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return (0, s.jsx)(M.Z, {
          preview: u,
          children: (0, s.jsxs)(T.Z, {
            children: [
              (0, s.jsx)(y.Z, {}),
              (0, s.jsx)("div", {
                style: { display: "flex" },
                children: (0, s.jsxs)(k, {
                  category: l,
                  author: h,
                  featuredPosts: c.featuredPosts,
                  latestPodcasts: c.latestPodcasts,
                  children: [
                    S &&
                      (0, s.jsx)(L, {
                        title: S.title,
                        featuredImage: S.featuredImage,
                        date: S.date,
                        author: S.author,
                        uri: S.uri,
                        excerpt: S.excerpt,
                      }),
                    (null === m || void 0 === m ? void 0 : m.length) > 0 &&
                      (0, s.jsx)(X.Z, {
                        dataLength: m.length,
                        next: w,
                        hasMore: f,
                        loader: (0, s.jsx)("h4", { children: "Loading..." }),
                        children: (0, s.jsx)(V, { posts: m }),
                      }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
    },
    41481: function (e, a, r) {
      "use strict";
      r.d(a, {
        Z: function () {
          return n;
        },
      });
      var t = r(85893),
        i = r(9029),
        s = r.n(i);
      function n(e) {
        var a = e.children;
        return (0, t.jsx)("div", {
          className: s().containerWrapper,
          children: a,
        });
      }
    },
    69730: function (e, a, r) {
      "use strict";
      r.d(a, {
        Z: function () {
          return d;
        },
      });
      var t = r(85893),
        i = r(41481),
        s = r(73107),
        n = r.n(s);
      function d() {
        return (0, t.jsx)("div", {
          className: n().alertWrapper,
          children: (0, t.jsx)(i.Z, {
            children: (0, t.jsxs)("div", {
              className: n().previewWrapper,
              children: [
                "This is a page preview.",
                " ",
                (0, t.jsx)("a", {
                  href: "/api/exit-preview",
                  className: n().link,
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
    31351: function (e, a, r) {
      "use strict";
      var t = r(38569),
        i = r(67294);
      a.Z = function () {
        var e = (0, t.bN)().globalState.funnelPosition,
          a = (0, i.useState)({
            funnelPositionSuccess: null,
            targetTier: 1,
            targetTier3Plus: !1,
            anyWarm: !1,
            anySuspect: !1,
            isCoSCustomer: !1,
            isMcFreeCustomer: !1,
            isInHSTrial: !1,
            isHSCustomer: !1,
            marketingTarget: null,
            trackingId: null,
            cosStage: "suspect",
          }),
          r = a[0],
          s = a[1];
        return (
          (0, i.useEffect)(
            function () {
              var a = e.targetTier,
                r = e.coschedule,
                t = e.academy,
                i = e.headlineStudio,
                n = e.marketingTarget,
                d = e.trackingId,
                o = Boolean(a && a > 2),
                l =
                  "warm" ===
                  (null === r || void 0 === r ? void 0 : r.temperature),
                c =
                  "warm" ===
                  (null === t || void 0 === t ? void 0 : t.temperature),
                u =
                  "warm" ===
                  (null === i || void 0 === i ? void 0 : i.temperature),
                h = l || c || u,
                g =
                  "suspect" === (null === r || void 0 === r ? void 0 : r.stage),
                p =
                  "suspect" === (null === t || void 0 === t ? void 0 : t.stage),
                v =
                  "suspect" === (null === i || void 0 === i ? void 0 : i.stage),
                m = g || p || v,
                A =
                  "customer" ===
                  (null === r || void 0 === r ? void 0 : r.stage),
                _ = "lead" === (null === r || void 0 === r ? void 0 : r.stage),
                b = "lead" === (null === i || void 0 === i ? void 0 : i.stage),
                x =
                  "customer" ===
                  (null === i || void 0 === i ? void 0 : i.stage);
              s({
                funnelPositionSuccess: e.success,
                targetTier: a,
                targetTier3Plus: o,
                anyWarm: h,
                anySuspect: m,
                isCoSCustomer: A,
                isMcFreeCustomer: _,
                isInHSTrial: b,
                marketingTarget: n,
                isHSCustomer: x,
                trackingId: d,
                cosStage: null === r || void 0 === r ? void 0 : r.stage,
              });
            },
            [e]
          ),
          r
        );
      };
    },
    7152: function (e, a, r) {
      "use strict";
      var t = r(29815),
        i = r(20985),
        s = r(71641);
      a.Z = function (e) {
        for (
          var a = arguments.length, r = new Array(a > 1 ? a - 1 : 0), n = 1;
          n < a;
          n++
        )
          r[n - 1] = arguments[n];
        (0, s.t)({
          callback: function () {
            return i.R.apply(void 0, ["record", e].concat((0, t.Z)(r)));
          },
        });
      };
    },
    67857: function (e) {
      e.exports = {
        archiveContainerWrapper:
          "ArchiveContainer_archiveContainerWrapper__nIY2e",
        headingWrapper: "ArchiveContainer_headingWrapper__m3PpZ",
        headingInner: "ArchiveContainer_headingInner__td0qY",
        title: "ArchiveContainer_title__bhJOh heading uppercase",
        mainHeading: "ArchiveContainer_mainHeading__6pv4g heading",
        small: "ArchiveContainer_small__cnUrV",
        description: "ArchiveContainer_description__eZ8TA body",
        sidebar: "ArchiveContainer_sidebar___r4gY",
      };
    },
    9029: function (e) {
      e.exports = { containerWrapper: "Container_containerWrapper__XKT6P" };
    },
    76696: function (e) {
      e.exports = {
        heroCardWrapper: "HeroPost_heroCardWrapper__3k7le",
        heroImage: "HeroPost_heroImage__4dzmd",
        heroHeading: "HeroPost_heroHeading__AixH6",
        heroDescription: "HeroPost_heroDescription__XB5_G",
      };
    },
    70910: function (e) {
      e.exports = {
        postsGrid: "MoreStories_postsGrid__xFLQD",
        postCard: "MoreStories_postCard___A0TH",
      };
    },
    73457: function (e) {
      e.exports = {
        sidebarSection: "Sidebar_sidebarSection__t4bUP",
        sidebarTitle: "Sidebar_sidebarTitle__ISxig",
        sidebarItem: "Sidebar_sidebarItem__PwTfS",
        sidebarLink: "Sidebar_sidebarLink__01bfb",
      };
    },
    59386: function (e) {
      e.exports = {
        sidebarCtaWrapper: "SidebarCta_sidebarCtaWrapper__7Eo7J",
        sidebarInner: "SidebarCta_sidebarInner__VDqAN",
        sidebarCtaTitle: "SidebarCta_sidebarCtaTitle__N1CeX",
        sidebarCtaSubTitle: "SidebarCta_sidebarCtaSubTitle__3ELYU",
        sidebarImage: "SidebarCta_sidebarImage__Oa1lC",
        sidebarCtaDownloadSuccessMessage:
          "SidebarCta_sidebarCtaDownloadSuccessMessage__AS_JE",
        sidebarCtaDownloadSuccessLink:
          "SidebarCta_sidebarCtaDownloadSuccessLink__BXT6_",
        sidebarCtaProduct: "SidebarCta_sidebarCtaProduct__5yOog",
      };
    },
    73107: function (e) {
      e.exports = {
        alertWrapper: "PreviewAlert_alertWrapper__gvIwH",
        previewWrapper: "PreviewAlert_previewWrapper__Ir_aC",
        link: "PreviewAlert_link__rKIwR",
      };
    },
  },
]);
