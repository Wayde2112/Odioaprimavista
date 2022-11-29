(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2542],
  {
    4036: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return u;
        },
      });
      var n = t(85893),
        i = t(71173),
        r = t(94184),
        s = t.n(r),
        o = t(25675),
        l = t.n(o),
        c = t(33124),
        d = t.n(c);
      function u(e) {
        var a = e.author,
          t = e.categories,
          r = e.publishedDate,
          o = e.className,
          c = e.inPostPreview,
          u = void 0 !== c && c;
        if (!a) return null;
        var h = a
          ? a.firstName && a.lastName
            ? "".concat(a.firstName, " ").concat(a.lastName)
            : a.name
          : null;
        return (0, n.jsxs)("div", {
          className: s()(d().AuthorWrapper, o),
          children: [
            (0, n.jsx)("div", {
              className: d().AuthorImage,
              children: (0, n.jsx)(l(), {
                src: a.avatar.url,
                layout: "fill",
                alt: h || "",
              }),
            }),
            (0, n.jsxs)("div", {
              className: d().AuthorText,
              children: [
                u
                  ? (0, n.jsx)("div", {
                      className: d().AuthorName,
                      children: h,
                    })
                  : (0, n.jsx)("a", {
                      href: a.uri,
                      className: s()(d().AuthorName, d().AuthorLink),
                      children: h,
                    }),
                u && r
                  ? (0, n.jsx)("div", {
                      className: d().AuthorSubTitle,
                      children: (0, i.Z)(r),
                    })
                  : (function () {
                      var e, a, i;
                      if (null === t || void 0 === t ? void 0 : t.edges)
                        return (
                          (null === t ||
                          void 0 === t ||
                          null === (e = t.edges) ||
                          void 0 === e
                            ? void 0
                            : e.length) > 0 &&
                            t.edges.map(function (e) {
                              return (0,
                              n.jsx)("a", { href: e.node.uri, className: s()(d().AuthorSubTitle, d().AuthorSubTitleLink), children: e.node.name }, e.node.name);
                            }),
                          (0, n.jsx)("a", {
                            href:
                              null ===
                                (a =
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.edges[0].node) || void 0 === a
                                ? void 0
                                : a.uri,
                            className: s()(
                              d().AuthorSubTitle,
                              d().AuthorSubTitleLink
                            ),
                            children:
                              null ===
                                (i =
                                  null === t || void 0 === t
                                    ? void 0
                                    : t.edges[0].node) || void 0 === i
                                ? void 0
                                : i.name,
                          })
                        );
                    })(),
              ],
            }),
          ],
        });
      }
    },
    47824: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return l;
        },
      });
      var n = t(85893),
        i = t(25675),
        r = t.n(i),
        s = t(5154),
        o = t.n(s);
      function l(e) {
        var a = e.title,
          t = e.featuredImage;
        return (0, n.jsx)(n.Fragment, {
          children:
            (null === t || void 0 === t ? void 0 : t.node.sourceUrl) &&
            (0, n.jsx)("div", {
              className: o().coverImage,
              children: (0, n.jsx)(r(), {
                width: 1001,
                height: 427,
                alt: "Cover Image for ".concat(a),
                src: t.node.sourceUrl,
              }),
            }),
        });
      }
    },
    56643: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return y;
        },
      });
      var n = t(14924),
        i = t(85893),
        r = t(63588),
        s = t(94184),
        o = t.n(s),
        l = t(67294),
        c = t(48699),
        d = t.n(c);
      function u(e) {
        var a = e.name,
          t = e.dropdownActive,
          r = e.onClick;
        return (0, i.jsxs)("button", {
          className: o()(d().navItem, (0, n.Z)({}, d().navItemActive, t)),
          role: "button",
          "aria-haspopup": "true",
          "aria-expanded": "false",
          title: "CoSchedule ".concat(a),
          onClick: r,
          children: [a, " ", (0, i.jsx)("span", { className: d().caret })],
        });
      }
      function h(e) {
        var a = e.name,
          t = e.children,
          r = e.dropdownToShow,
          s = e.dropdownToggle,
          l = r === a;
        return (0, i.jsxs)("li", {
          children: [
            (0, i.jsx)(u, {
              name: a,
              dropdownActive: l,
              onClick: function () {
                return s(a);
              },
            }),
            l &&
              (0, i.jsx)("div", {
                className: o()(
                  d().dropdownListWrapper,
                  (0, n.Z)({}, d().dropdownActive, l)
                ),
                children: t,
              }),
          ],
        });
      }
      function m() {
        var e = (0, l.useState)(""),
          a = e[0],
          t = e[1],
          n = function (e) {
            t(function (a) {
              return a !== e ? e : "";
            });
          };
        return (0, i.jsxs)("div", {
          className: d().utilityNav,
          children: [
            (0, i.jsxs)("ul", {
              className: d().navList,
              children: [
                (0, i.jsx)("li", {
                  children: (0, i.jsx)("a", {
                    href: "/actionable-marketing-institute/ami-pro",
                    title:
                      "Visit the Actionable Marketing Institute powered by CoSchedule",
                    className: o()(d().navItem, "kmq-blog-nav-ami-link"),
                    children: "Marketing Institute",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)("a", {
                    href: "/podcast",
                    title: "Listen to the Actionable Marketing Podcast",
                    className: o()(d().navItem, "kmq-blog-nav-podcast-link"),
                    children: "Podcast",
                  }),
                }),
                (0, i.jsx)("li", {
                  children: (0, i.jsx)("a", {
                    href: "/marketing-statistics",
                    title: "Read the 2022 Marketing Strategy Trend Report",
                    className: o()(
                      d().navItem,
                      "kmq-blog-nav-marketing-statistics-link"
                    ),
                    children: "Marketing Trends",
                  }),
                }),
                (0, i.jsx)(h, {
                  name: "topic libraries",
                  dropdownToShow: a,
                  dropdownToggle: n,
                  children: (0, i.jsxs)("ul", {
                    className: d().subNav,
                    children: [
                      (0, i.jsx)("li", {
                        className: d().subNavItem,
                        children: (0, i.jsxs)("a", {
                          href: "/marketing",
                          title: "Go to the Marketing Hub",
                          className: "kmq-blog-nav-marketing-hub-link",
                          children: [
                            (0, i.jsx)("p", {
                              className: d().subNavHeading,
                              children: "Marketing",
                            }),
                            (0, i.jsx)("p", {
                              className: d().subNavDescription,
                              children: (0, r.Z)(
                                "Marketing fundamentals every marketer needs to know."
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("li", {
                        className: d().subNavItem,
                        children: (0, i.jsxs)("a", {
                          href: "/marketing-ideas",
                          title: "Go to the Marketing Ideas Hub",
                          className: "kmq-blog-nav-marketing-ideas-hub-link",
                          children: [
                            (0, i.jsx)("p", {
                              className: d().subNavHeading,
                              children: "Marketing Ideas",
                            }),
                            (0, i.jsx)("p", {
                              className: d().subNavDescription,
                              children: (0, r.Z)(
                                "A list of creative tactics to try out in your marketing strategy"
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("li", {
                        className: d().subNavItem,
                        children: (0, i.jsxs)("a", {
                          href: "/marketing-strategy",
                          title: "Go to the Marketing Strategy Hub",
                          className: "kmq-blog-nav-marketing-strategy-hub-link",
                          children: [
                            (0, i.jsx)("p", {
                              className: d().subNavHeading,
                              children: "Marketing Strategy",
                            }),
                            (0, i.jsx)("p", {
                              className: d().subNavDescription,
                              children: (0, r.Z)(
                                "How to choose, prioritize, plan, and execute projects."
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("li", {
                        className: d().subNavItem,
                        children: (0, i.jsxs)("a", {
                          href: "/content-marketing",
                          title: "Go to the Content Marketing Hub",
                          className: "kmq-blog-nav-content-marketing-hub-link",
                          children: [
                            (0, i.jsx)("p", {
                              className: d().subNavHeading,
                              children: "Content Marketing",
                            }),
                            (0, i.jsx)("p", {
                              className: d().subNavDescription,
                              children: (0, r.Z)(
                                "How to develop, document, and measure an actionable content marketing strategy."
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(h, {
                  name: "guides",
                  dropdownToShow: a,
                  dropdownToggle: n,
                  children: (0, i.jsxs)("ul", {
                    className: d().subNav,
                    children: [
                      (0, i.jsx)("li", {
                        className: d().subNavItem,
                        children: (0, i.jsxs)("a", {
                          href: "/guide",
                          title: "See the CoSchedule Guides",
                          className: "kmq-blog-nav-cos-guide-link",
                          children: [
                            (0, i.jsx)("p", {
                              className: d().subNavHeading,
                              children: "CoSchedule Guide",
                            }),
                            (0, i.jsx)("p", {
                              className: d().subNavDescription,
                              children: (0, r.Z)(
                                "How to organize all of your marketing with CoSchedule best practices."
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("li", {
                        className: d().subNavItem,
                        children: (0, i.jsxs)("a", {
                          href: "/agile-marketing-guide",
                          title: "See the Agile Marketing Guide",
                          className: "kmq-blog-nav-agile-marketing-guide-link",
                          children: [
                            (0, i.jsx)("p", {
                              className: d().subNavHeading,
                              children: "Agile Marketing Guide",
                            }),
                            (0, i.jsx)("p", {
                              className: d().subNavDescription,
                              children: (0, r.Z)(
                                "How to implement an agile marketing strategy."
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(h, {
                  name: "books",
                  dropdownToShow: a,
                  dropdownToggle: n,
                  children: (0, i.jsxs)("ul", {
                    className: d().subNavB,
                    children: [
                      (0, i.jsx)("li", {
                        className: d().subNavItem,
                        children: (0, i.jsxs)("a", {
                          href: "/10xbook",
                          title: "Learn more about the 10x Marketing Formula",
                          className: "kmq-blog-nav-10x-book-link",
                          children: [
                            (0, i.jsx)("p", {
                              className: d().subNavHeading,
                              children: "10x Marketing Formula",
                            }),
                            (0, i.jsx)("p", {
                              className: d().subNavDescription,
                              children: (0, r.Z)(
                                "Find out how to short-circut the path to jaw-dropping growth."
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("li", {
                        className: d().subNavItem,
                        children: (0, i.jsxs)("a", {
                          href: "/agile-marketing-book",
                          title:
                            "Learn more about How to Get Started with Agile Marketing",
                          className: "kmq-blog-nav-agile-marketing-book-link",
                          children: [
                            (0, i.jsx)("p", {
                              className: d().subNavHeading,
                              children: "Get Started with Agile Marketing",
                            }),
                            (0, i.jsx)("p", {
                              className: d().subNavDescription,
                              children: (0, r.Z)(
                                "Everything you need to know to go agile, right now."
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(h, {
                  name: "tools",
                  dropdownToShow: a,
                  dropdownToggle: n,
                  children: (0, i.jsxs)("ul", {
                    className: d().subNav,
                    children: [
                      (0, i.jsx)("li", {
                        className: d().subNavItem,
                        children: (0, i.jsxs)("a", {
                          href: "/headline-analyzer",
                          title: "Get started with Headline Analyzer",
                          className: "kmq-blog-nav-ha-link",
                          children: [
                            (0, i.jsx)("p", {
                              className: d().subNavHeading,
                              children: "Headline Analyzer",
                            }),
                            (0, i.jsx)("p", {
                              className: d().subNavDescription,
                              children: (0, r.Z)(
                                "Write headlines that drive traffic, shares, & search results."
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("li", {
                        className: d().subNavItem,
                        children: (0, i.jsxs)("a", {
                          href: "/social-message-optimizer",
                          title:
                            "Get started with the Social Message Optimizer",
                          className: "kmq-blog-nav-smo-link",
                          children: [
                            (0, i.jsx)("p", {
                              className: d().subNavHeading,
                              children: "Social Message Optimizer",
                            }),
                            (0, i.jsx)("p", {
                              className: d().subNavDescription,
                              children: (0, r.Z)(
                                "Create powerful social messages that convert."
                              ),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("li", {
                        className: d().subNavItem,
                        children: (0, i.jsxs)("a", {
                          href: "/email-subject-line-tester",
                          title:
                            "Get started with the Email Subject Line Tester",
                          className: "kmq-blog-nav-eslt-link",
                          children: [
                            (0, i.jsx)("p", {
                              className: d().subNavHeading,
                              children: "Email Subject Line Tester",
                            }),
                            (0, i.jsx)("p", {
                              className: d().subNavDescription,
                              children: (0, r.Z)(
                                "Write email subject lines that drive more conversions."
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, i.jsxs)("ul", {
              children: [
                (0, i.jsx)("li", {
                  children: (0, i.jsx)("a", {
                    href: "/marketing-calendar",
                    title: "Learn more about Marketing Calendar",
                    className: o()(
                      d().navItemOrange,
                      "kmq-blog-nav-marketing-calendar-link"
                    ),
                    children: "Need a marketing calendar?",
                  }),
                }),
                (0, i.jsx)("li", {
                  className: d().suiteCta,
                  children: (0, i.jsx)("a", {
                    href: "/marketing-suite",
                    title: "Learn more about Marketing Suite",
                    className: o()(
                      d().navItemOrange,
                      "kmq-blog-nav-marketing-suite-link"
                    ),
                    children: "Need a marketing calendar?",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      var v = t(65209),
        g = t.n(v),
        N = t(41664),
        p = t.n(N),
        x = t(78764);
      function _() {
        return (0, i.jsx)(p(), {
          href: "/blog",
          children: (0, i.jsxs)("a", {
            title: "Navigate back to the CoSchedule Blog",
            className: g().logo,
            children: [
              (0, i.jsx)(x.Z, {
                width: 180,
                height: 41,
                alt: "CoSchedule Logo",
              }),
              (0, i.jsx)("span", { className: g().logoText, children: "Blog" }),
            ],
          }),
        });
      }
      function j(e) {
        var a = e.children,
          t = e.attachListener,
          n = e.onClickOutside,
          r = (0, l.useRef)(null);
        return (
          (function (e) {
            var a = e.wrapperRef,
              t = e.attachListener,
              n = e.onClickOutside;
            (0, l.useEffect)(
              function () {
                var e = function (e) {
                  a.current && !a.current.contains(e.target) && n();
                };
                return (
                  t && document.addEventListener("mousedown", e),
                  function () {
                    document.removeEventListener("mousedown", e);
                  }
                );
              },
              [a, t]
            );
          })({ wrapperRef: r, attachListener: t, onClickOutside: n }),
          (0, i.jsx)("div", { ref: r, children: a })
        );
      }
      var k = t(90012),
        b = t(48016),
        f = t.n(b);
      function w() {
        return (0, i.jsx)(i.Fragment, {
          children: [
            { title: "Content Marketing", href: "content-marketing" },
            { title: "Social Media", href: "social-media" },
            { title: "Email Marketing", href: "email-marketing" },
            { title: "Project Management", href: "project-management" },
            { title: "Marketing Workflow", href: "workflow" },
            { title: "Analytics", href: "analytics" },
            { title: "Product Updates", href: "product" },
            { title: "Product Training", href: "customer-marketing" },
            { title: "Thought Leadership", href: "thought-leadership" },
          ].map(function (e, a) {
            return (0,
            i.jsx)("li", { className: f().dropdownItem, children: (0, i.jsx)(p(), { href: "/topic/".concat(e.href), children: (0, i.jsx)("a", { className: f().dropdownCategory, title: "See all ".concat(e.title, " posts"), children: e.title }) }) }, a);
          }),
        });
      }
      function A() {
        var e = (0, l.useState)(!1),
          a = e[0],
          t = e[1],
          r = function () {
            t(!1);
          };
        return (
          (0, k.Z)({ attachListener: a, onScroll: r }),
          (0, i.jsxs)("div", {
            className: f().mainNavWrapper,
            children: [
              (0, i.jsxs)("div", {
                className: f().mainNavLeft,
                children: [
                  (0, i.jsx)("div", {
                    className: f().blogLogo,
                    children: (0, i.jsx)(_, {}),
                  }),
                  (0, i.jsxs)(j, {
                    attachListener: a,
                    onClickOutside: r,
                    children: [
                      (0, i.jsx)("div", {
                        className: f().buttonWrapper,
                        children: (0, i.jsxs)("button", {
                          className: o()(
                            f().categoryToggle,
                            (0, n.Z)({}, f().categoryToggleActive, a)
                          ),
                          role: "button",
                          "aria-haspopup": "true",
                          "aria-expanded": "false",
                          title: "Blog Post Categories",
                          onClick: function () {
                            return t(function (e) {
                              return !e;
                            });
                          },
                          children: [
                            "Categories ",
                            (0, i.jsx)("span", { className: f().caret }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: o()(
                          f().dropdownListWrapper,
                          (0, n.Z)({}, f().dropdownActive, a)
                        ),
                        children: (0, i.jsx)("ul", {
                          children: (0, i.jsx)(w, {}),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", { className: f().mainNavRight }),
            ],
          })
        );
      }
      var S = t(19675),
        I = t.n(S);
      function y() {
        var e,
          a = (0, l.useState)(!1),
          t = a[0],
          r = a[1],
          s = (0, l.useState)("initial"),
          c = s[0],
          d = s[1],
          u = (0, l.useState)(!1),
          h = u[0],
          v = u[1],
          g = function () {
            r(function (e) {
              return !e;
            });
          };
        return (
          (0, l.useEffect)(
            function () {
              var e = window.scrollY,
                a = function () {
                  var a = window.scrollY;
                  v(a > 100),
                    a < 100
                      ? d("initial")
                      : a < e
                      ? d("show")
                      : (d("hide"), r(!1)),
                    (e = a);
                };
              return (
                document.addEventListener("scroll", a),
                function () {
                  return document.removeEventListener("scroll", a);
                }
              );
            },
            [c]
          ),
          (0, i.jsx)("nav", {
            className: o()(
              I().navWrapper,
              ((e = {}),
              (0, n.Z)(e, I().navShow, "show" === c),
              (0, n.Z)(e, I().navHide, "hide" === c),
              (0, n.Z)(e, I().animateSlideIn, h),
              e)
            ),
            children: (0, i.jsxs)(j, {
              attachListener: t,
              onClickOutside: g,
              children: [
                (0, i.jsxs)("div", {
                  className: I().navHeader,
                  children: [
                    (0, i.jsx)(_, {}),
                    (0, i.jsx)("button", {
                      className: I().navToggle,
                      role: "button",
                      "aria-haspopup": "true",
                      "aria-expanded": "false",
                      title: "Show Navigation",
                      onClick: g,
                      children: (0, i.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24px",
                        height: "24px",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: (0, i.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeWidth: 2,
                          d: "M4 6h16M4 12h16M4 18h16",
                        }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: o()(
                    I().navContent,
                    (0, n.Z)({}, I().navContentVisible, t)
                  ),
                  children: [(0, i.jsx)(A, {}), (0, i.jsx)(m, {})],
                }),
              ],
            }),
          })
        );
      }
    },
    85590: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return l;
        },
      });
      var n = t(85893),
        i = t(97232),
        r = t(69730),
        s = t(82121),
        o = t.n(s);
      function l(e) {
        var a = e.preview,
          t = e.children;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)("div", {
              className: o().Layout,
              children: [
                a && (0, n.jsx)(r.Z, {}),
                (0, n.jsx)("main", { children: t }),
              ],
            }),
            (0, n.jsx)(i.Z, { footerVersion: "blog" }),
          ],
        });
      }
    },
    70174: function (e, a, t) {
      "use strict";
      t.d(a, {
        Z: function () {
          return d;
        },
      });
      var n = t(85893),
        i = t(41664),
        r = t.n(i),
        s = t(4036),
        o = t(47824),
        l = t(33123),
        c = t.n(l);
      function d(e) {
        var a = e.title,
          t = e.featuredImage,
          i = e.date,
          l = e.excerpt,
          d = e.author,
          u = e.uri;
        return (0, n.jsx)(r(), {
          href: u,
          children: (0, n.jsx)("a", {
            children: (0, n.jsxs)("div", {
              className: c().cardContainer,
              children: [
                (0, n.jsx)("div", {
                  className: c().cardImage,
                  children:
                    t && (0, n.jsx)(o.Z, { title: a, featuredImage: t }),
                }),
                (0, n.jsxs)("div", {
                  className: c().cardBottom,
                  children: [
                    (0, n.jsx)("div", {
                      className: c().postTitle,
                      children: a,
                    }),
                    (0, n.jsx)("div", {
                      className: c().postDescription,
                      dangerouslySetInnerHTML: { __html: l },
                    }),
                    (0, n.jsx)(s.Z, {
                      author: d.node,
                      publishedDate: i,
                      inPostPreview: !0,
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
    },
    71173: function (e, a) {
      "use strict";
      a.Z = function (e) {
        return new Date(e).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
      };
    },
    33124: function (e) {
      e.exports = {
        AuthorWrapper: "Author_AuthorWrapper__VF8cm",
        AuthorImage: "Author_AuthorImage__CqqHc",
        AuthorText: "Author_AuthorText__AmvIw",
        AuthorName: "Author_AuthorName__9OSgm",
        AuthorLink: "Author_AuthorLink__fr_mP",
        AuthorSubTitle: "Author_AuthorSubTitle__4ImI6",
        AuthorSubTitleLink: "Author_AuthorSubTitleLink__YO4tQ",
      };
    },
    5154: function (e) {
      e.exports = { coverImage: "CoverImage_coverImage__WtXXk" };
    },
    19675: function (e) {
      e.exports = {
        navWrapper: "Header_navWrapper__5Nxrs",
        animateSlideIn: "Header_animateSlideIn__hIjtK",
        navHide: "Header_navHide__Jiu7J",
        navShow: "Header_navShow__LfWwu",
        navHeader: "Header_navHeader__oyBgF",
        navToggle: "Header_navToggle__xnxDc",
        navContent: "Header_navContent__kduFK",
        navContentVisible: "Header_navContentVisible__PDGez",
      };
    },
    82121: function () {},
    65209: function (e) {
      e.exports = {
        logo: "Logo_logo__N7Mlc",
        logoText: "Logo_logoText__GQdRf",
      };
    },
    48016: function (e) {
      e.exports = {
        mainNavWrapper: "MainNav_mainNavWrapper__Jce57",
        mainNavRight: "MainNav_mainNavRight__LHerk",
        mainNavLeft: "MainNav_mainNavLeft__BX2eQ",
        blogLogo: "MainNav_blogLogo__TXG3F",
        buttonWrapper: "MainNav_buttonWrapper__ZDS8m",
        categoryToggle: "MainNav_categoryToggle__Og0_5",
        caret: "MainNav_caret__hzpYV",
        categoryToggleActive: "MainNav_categoryToggleActive___CdJC",
        dropdownListWrapper: "MainNav_dropdownListWrapper__Zr5SP",
        dropdownActive: "MainNav_dropdownActive__SjB_f",
        dropdownItem: "MainNav_dropdownItem__27jDq",
        dropdownCategory: "MainNav_dropdownCategory__JleUA",
      };
    },
    33123: function (e) {
      e.exports = {
        cardContainer: "PostPreview_cardContainer__98ufT",
        cardImage: "PostPreview_cardImage__PK6Js",
        postTitle: "PostPreview_postTitle__rZkL7",
        postDescription: "PostPreview_postDescription__9b8Ge",
      };
    },
    48699: function (e) {
      e.exports = {
        utilityNav: "UtilityNav_utilityNav__I4LSp",
        navList: "UtilityNav_navList__D989F",
        navItem: "UtilityNav_navItem__Kwbjy",
        caret: "UtilityNav_caret__b_Gdv",
        navItemActive: "UtilityNav_navItemActive__NlkHw",
        navItemOrange: "UtilityNav_navItemOrange__ByfYg",
        dropdownListWrapper: "UtilityNav_dropdownListWrapper__ws3gb",
        dropdownActive: "UtilityNav_dropdownActive__DGi3M",
        subNavItem: "UtilityNav_subNavItem__9JanW",
        subNavHeading: "UtilityNav_subNavHeading__1526Q",
        subNavHeadingSmall: "UtilityNav_subNavHeadingSmall__QCopC",
        subNavDescription: "UtilityNav_subNavDescription__jTvir",
        suiteCta: "UtilityNav_suiteCta__HQ2kA",
      };
    },
  },
]);
