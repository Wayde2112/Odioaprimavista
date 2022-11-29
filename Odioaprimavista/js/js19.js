"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6540],
  {
    66540: function (n, e, r) {
      r.d(e, {
        C9: function () {
          return i;
        },
        kY: function () {
          return p;
        },
        lL: function () {
          return d;
        },
      });
      var t = r(47568),
        s = r(70655),
        a = r(34155),
        o = "https://coschedule.com/index.php?graphql";
      function u(n) {
        return c.apply(this, arguments);
      }
      function c() {
        return (
          (c = (0, t.Z)(function (n) {
            var e,
              r,
              t,
              u,
              c = arguments;
            return (0, s.__generator)(this, function (s) {
              switch (s.label) {
                case 0:
                  (e = (c.length > 1 && void 0 !== c[1] ? c[1] : {}).variables),
                    (s.label = 1);
                case 1:
                  return (
                    s.trys.push([1, 4, , 5]),
                    (r = { "Content-Type": "application/json" }),
                    a.env.WORDPRESS_AUTH_REFRESH_TOKEN &&
                      (r.Authorization = "Bearer ".concat(
                        a.env.WORDPRESS_AUTH_REFRESH_TOKEN
                      )),
                    [
                      4,
                      fetch(o, {
                        method: "POST",
                        headers: r,
                        body: JSON.stringify({ query: n, variables: e }),
                      }),
                    ]
                  );
                case 2:
                  return [4, s.sent().json()];
                case 3:
                  if ((t = s.sent()).errors)
                    throw (
                      (console.error(t.errors),
                      new Error("Failed to fetch API"))
                    );
                  return [2, t.data];
                case 4:
                  return (u = s.sent()), console.error(u), [3, 5];
                case 5:
                  return [2];
              }
            });
          })),
          c.apply(this, arguments)
        );
      }
      function i(n, e, r, t) {
        return l.apply(this, arguments);
      }
      function l() {
        return (l = (0, t.Z)(function (n, e, r, t) {
          var a, o, c;
          return (0, s.__generator)(this, function (s) {
            switch (s.label) {
              case 0:
                return (
                  (a = r ? "categoryId: ".concat(r, ",") : ""),
                  (o = t ? "author: ".concat(t, ",") : ""),
                  [
                    4,
                    u(
                      "\n    query AllPosts {\n      posts(first: 21, where: { orderby: { field: DATE, order: DESC }, status: PUBLISH, "
                        .concat(a, "} ")
                        .concat(o, ', after: "')
                        .concat(
                          e,
                          '") {\n        edges {\n          node {\n            title\n            excerpt\n            date\n            featuredImage {\n              node {\n                sourceUrl\n              }\n            }\n            author {\n              node {\n                firstName\n                lastName\n                name\n                avatar {\n                  url\n                }\n              }\n            }\n            uri\n            slug\n          }\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }'
                        ),
                      { variables: { onlyEnabled: !n, preview: n } }
                    ),
                  ]
                );
              case 1:
                return [
                  2,
                  null === (c = s.sent()) || void 0 === c ? void 0 : c.posts,
                ];
            }
          });
        })).apply(this, arguments);
      }
      function d(n) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = (0, t.Z)(function (n) {
          var e, r;
          return (0, s.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (e = n.cursor),
                  [
                    4,
                    u(
                      '\n      query AnnouncementArchive {\n        announcements(first: 10, after: "'.concat(
                        void 0 === e ? "" : e,
                        '", where: {status: PUBLISH}) {\n          edges {\n            cursor\n            node {\n              date\n              uri\n              title\n              excerpt\n              productAnnouncement {\n                announcementType\n                availableIn\n                description\n                videoId\n              }\n            }\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n        }\n      }\n    '
                      )
                    ),
                  ]
                );
              case 1:
                return [
                  2,
                  null === (r = t.sent()) || void 0 === r
                    ? void 0
                    : r.announcements,
                ];
            }
          });
        })).apply(this, arguments);
      }
      function p(n) {
        return f.apply(this, arguments);
      }
      function f() {
        return (f = (0, t.Z)(function (n) {
          var e, r;
          return (0, s.__generator)(this, function (t) {
            switch (t.label) {
              case 0:
                return (
                  (e = n.cursor),
                  [
                    4,
                    u(
                      '\n      query MorePressReleases {\n        pressReleases(first: 10, after: "'.concat(
                        e,
                        '", where: {orderby: {field: DATE, order: DESC}, status: PUBLISH}) {\n          edges {\n            node {\n              date\n              uri\n              title\n            }\n          }\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n        }\n      }\n    '
                      )
                    ),
                  ]
                );
              case 1:
                return [
                  2,
                  null === (r = t.sent()) || void 0 === r
                    ? void 0
                    : r.pressReleases,
                ];
            }
          });
        })).apply(this, arguments);
      }
    },
  },
]);
