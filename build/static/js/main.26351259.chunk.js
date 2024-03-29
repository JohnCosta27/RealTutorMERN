(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    201: function (e, t, n) {},
    202: function (e, t, n) {},
    256: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(1),
        i = n.n(a),
        r = n(18),
        c = n.n(r),
        s = (n(201), n(202), n(10)),
        o = n.n(s),
        l = n(15),
        d = n(5),
        h = n(8),
        j = n(296),
        b = n(303),
        u = n(332),
        p = n(0);
      var x = function (e) {
          var t = Object(j.a)(function (e) {
            return {
              customTextField: {
                "& .MuiInputBase-input": { color: e.palette.cards },
                "& label": { color: e.palette.cards },
                "& label.Mui-focused": { color: e.palette.cards },
                "& .MuiInput-underline:after": { color: e.palette.cards },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: e.palette.cards },
                  "&:hover fieldset": { borderColor: e.palette.cards },
                  "&.Mui-focused fieldset": { borderColor: e.palette.cards },
                },
              },
              multilineColor: { color: e.palette.cards },
            };
          })();
          return Object(p.jsx)(u.a, {
            variant: "filled",
            className: t.customTextField,
            label: e.label,
            onChange: e.onChange,
            error: e.error,
            onFocus: e.onFocus,
            color: "secondary",
            InputProps: { className: t.multilineColor },
            type: e.type,
            children: "Hello there",
          });
        },
        m = n(327),
        O = n(179),
        f = n.p + "static/media/Banner.aa95ebd2.jpeg";
      var g = function () {
          var e = Object(a.useState)(""),
            t = Object(h.a)(e, 2),
            n = t[0],
            i = t[1],
            r = Object(a.useState)(""),
            c = Object(h.a)(r, 2),
            s = c[0],
            u = c[1],
            g = Object(a.useState)(!1),
            y = Object(h.a)(g, 2),
            v = y[0],
            w = y[1],
            k = Object(a.useState)(!0),
            C = Object(h.a)(k, 2),
            S = C[0],
            P = C[1],
            A = Object(j.a)(function (e) {
              return {
                leftNav: Object(d.a)(
                  {
                    flex: 1,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 400,
                  },
                  e.breakpoints.down("xs"),
                  { width: "100%" }
                ),
                leftNavPaper: Object(d.a)(
                  { backgroundColor: e.palette.leftNav, width: 400 },
                  e.breakpoints.down("xs"),
                  { width: "100%" }
                ),
                mainWrapper: Object(d.a)(
                  {
                    flex: 4,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    backgroundImage: "url(".concat(f, ")"),
                    backgroundSize: "cover",
                    backgroundPositionX: -700,
                  },
                  e.breakpoints.down("xs"),
                  { flex: 0, marginLeft: 0 }
                ),
              };
            });
          Object(a.useEffect)(function () {
            I();
          }, []);
          var I = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, n;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/accounts/auth", {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            })
                          );
                        case 2:
                          return (t = e.sent), (e.next = 5), t.json();
                        case 5:
                          1 == (n = e.sent).level
                            ? (document.location.href =
                                "studentdashboard?studentid=" + n.id)
                            : 2 == n.level
                            ? (document.location.href =
                                "tutordashboard?tutorid=" + n.id)
                            : 3 == n.level &&
                              (document.location.href =
                                "managerdashboard?managerid=" + n.id),
                            P(!1);
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            W = (function () {
              var e = Object(l.a)(
                o.a.mark(function e(t) {
                  var a, r, c;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (a = { email: n, password: s }),
                            console.log(a),
                            (e.next = 5),
                            fetch("/accounts/login", {
                              method: "POST",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(a),
                            })
                          );
                        case 5:
                          return (r = e.sent), (e.next = 8), r.json();
                        case 8:
                          null != (c = e.sent).error
                            ? (w(!0), i(""), u(""))
                            : ((document.cookie = "token=" + c.cookie),
                              1 == c.level
                                ? (document.location.href =
                                    "studentdashboard?studentid=" + c.id)
                                : 2 == c.level
                                ? (document.location.href =
                                    "tutordashboard?tutorid=" + c.id)
                                : 3 == c.level &&
                                  (document.location.href =
                                    "managerdashboard?managerid=" + c.id));
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            T = function () {
              return w(!1);
            },
            N = A();
          return S
            ? Object(p.jsx)("div", {})
            : Object(p.jsxs)("div", {
                className: "App",
                children: [
                  Object(p.jsx)(O.a, {
                    className: N.leftNavPaper,
                    square: !0,
                    children: Object(p.jsx)(m.a, {
                      className: N.leftNav,
                      children: Object(p.jsxs)("form", {
                        className: "loginWrapper",
                        children: [
                          Object(p.jsx)(x, {
                            label: "Email",
                            onChange: function (e) {
                              i(e.target.value), w(!1);
                            },
                            error: v,
                            onFocus: T,
                          }),
                          Object(p.jsx)(x, {
                            label: "Password",
                            onChange: function (e) {
                              w(!1), u(e.target.value);
                            },
                            error: v,
                            onFocus: T,
                            type: "password",
                          }),
                          Object(p.jsx)(b.a, {
                            variant: "contained",
                            color: "secondary",
                            type: "submit",
                            value: "submit",
                            onClick: W,
                            children: "Login",
                          }),
                        ],
                      }),
                    }),
                  }),
                  Object(p.jsx)("div", { className: N.mainWrapper }),
                ],
              });
        },
        y = n(77),
        v = n(25),
        w = n(3),
        k = n(47),
        C = n(302),
        S = n(259),
        P = n(307),
        A = n(308),
        I = n(70),
        W = n.n(I),
        T = n(306),
        N = n(82),
        R = n.n(N),
        D = n(83),
        L = n.n(D),
        Y = n(167),
        E = n.n(Y),
        F = n(168),
        B = n.n(F),
        M = n(304),
        G = n(305),
        U = n(165),
        _ = n.n(U),
        q = n(131),
        z = n.n(q),
        H = n(166),
        X = n.n(H),
        J = n(75),
        V = n.n(J),
        K = n(84),
        Z = n.n(K),
        Q = function (e) {
          var t;
          t = !(window.innerWidth < 960);
          var n = Object(a.useState)(t),
            i = Object(h.a)(n, 2),
            r = i[0],
            c = i[1],
            s = Object(a.useState)(window.innerWidth),
            o = Object(h.a)(s, 2),
            l = o[0],
            u = o[1];
          Object(a.useEffect)(function () {
            window.addEventListener("resize", function () {
              return u(window.innerWidth);
            }),
              window.innerWidth >= 960 && c(!0);
          }, []);
          var x = function () {
              c(!0);
            },
            m = function () {
              c(!1);
            },
            O = 300,
            f = Object(j.a)(function (e) {
              var t, n, a;
              return {
                leftNavWrapper: {
                  transition: e.transitions.create("width", {
                    easing: e.transitions.easing.easeOut,
                    duration: e.transitions.duration.enteringScreen,
                  }),
                },
                leftNavPaper: Object(d.a)(
                  {
                    backgroundColor: e.palette.leftNav,
                    height: "100%",
                    width: O,
                  },
                  e.breakpoints.down("sm"),
                  { width: "100%" }
                ),
                button: { marginLeft: 5, marginRight: 5 },
                drawer:
                  ((t = { width: O }),
                  Object(d.a)(t, e.breakpoints.down("sm"), { width: "100%" }),
                  Object(d.a)(t, "flexShrink", 0),
                  Object(d.a)(t, "zIndex", 10),
                  t),
                drawerPaper:
                  ((n = { width: O }),
                  Object(d.a)(n, e.breakpoints.down("sm"), { width: "100%" }),
                  Object(d.a)(n, "zIndex", 10),
                  n),
                icon: { color: e.palette.divBackground },
                text: { color: e.palette.lightText },
                appBar: {
                  transition: e.transitions.create(["margin", "width"], {
                    easing: e.transitions.easing.sharp,
                    duration: e.transitions.duration.leavingScreen,
                  }),
                  zIndex: e.zIndex.drawer + 1,
                },
                appBarShift:
                  ((a = { width: "calc(100% - ".concat(O, "px)") }),
                  Object(d.a)(a, e.breakpoints.down("sm"), { width: 0 }),
                  Object(d.a)(a, "marginLeft", O),
                  Object(d.a)(
                    a,
                    "transition",
                    e.transitions.create(["margin", "width"], {
                      easing: e.transitions.easing.easeOut,
                      duration: e.transitions.duration.enteringScreen,
                    })
                  ),
                  a),
                toolbar: { overflow: "auto" },
                menuButton: { marginRight: e.spacing(2) },
                hide: { display: "none" },
              };
            })(),
            g = Object(v.a)(),
            I = function (t) {
              l < 960 && c(!1), e.changeState(t);
            };
          return 1 == e.level
            ? Object(p.jsxs)("div", {
                className: f.leftNavWrapper,
                style: r ? { width: O } : { width: 0 },
                children: [
                  Object(p.jsx)(M.a, {
                    position: "fixed",
                    className: Object(w.a)(
                      f.appBar,
                      Object(d.a)({}, f.appBarShift, r)
                    ),
                    children: Object(p.jsxs)(G.a, {
                      children: [
                        Object(p.jsx)(W.a, {
                          onClick: x,
                          edge: "start",
                          className: Object(w.a)(f.menuButton, r && f.hide),
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h6",
                          noWrap: !0,
                          children: "Real Tutor",
                        }),
                        Object(p.jsx)(b.a, {
                          variant: "contained",
                          color: "secondary",
                          style: { marginLeft: "auto" },
                          onClick: function () {
                            console.log("Hello"), e.logout();
                          },
                          children: "Log out",
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)(k.a, {
                    className: f.drawer,
                    variant: "persistent",
                    open: r,
                    anchor: "left",
                    classes: { paper: f.drawerPaper },
                    children: Object(p.jsx)("div", {
                      className: f.drawerContainer,
                      children: Object(p.jsxs)(C.a, {
                        children: [
                          Object(p.jsx)(T.a, {
                            onClick: m,
                            children:
                              "ltr" === g.direction
                                ? Object(p.jsx)(R.a, {})
                                : Object(p.jsx)(L.a, {}),
                          }),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(0);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(V.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, { primary: "Dashboard" }),
                              ],
                            },
                            0
                          ),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(1);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(Z.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, { primary: "View lessons" }),
                              ],
                            },
                            1
                          ),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(2);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(z.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, {
                                  primary: "View progress",
                                }),
                              ],
                            },
                            2
                          ),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            : 2 == e.level
            ? Object(p.jsxs)("div", {
                className: f.leftNavWrapper,
                style: r ? { width: O } : { width: 0 },
                children: [
                  Object(p.jsx)(M.a, {
                    position: "fixed",
                    className: Object(w.a)(
                      f.appBar,
                      Object(d.a)({}, f.appBarShift, r)
                    ),
                    children: Object(p.jsxs)(G.a, {
                      children: [
                        Object(p.jsx)(W.a, {
                          onClick: x,
                          edge: "start",
                          className: Object(w.a)(f.menuButton, r && f.hide),
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h6",
                          noWrap: !0,
                          children: "Real Tutor",
                        }),
                        Object(p.jsx)(b.a, {
                          variant: "contained",
                          color: "secondary",
                          style: { marginLeft: "auto" },
                          onClick: function () {
                            console.log("Hello"), e.logout();
                          },
                          children: "Log out",
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)(k.a, {
                    className: f.drawer,
                    variant: "persistent",
                    open: r,
                    anchor: "left",
                    classes: { paper: f.drawerPaper },
                    children: Object(p.jsx)("div", {
                      className: f.drawerContainer,
                      children: Object(p.jsxs)(C.a, {
                        children: [
                          Object(p.jsx)(T.a, {
                            onClick: m,
                            children:
                              "ltr" === g.direction
                                ? Object(p.jsx)(R.a, {})
                                : Object(p.jsx)(L.a, {}),
                          }),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(0);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(V.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, { primary: "Dashboard" }),
                              ],
                            },
                            0
                          ),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(1);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(Z.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, { primary: "View lessons" }),
                              ],
                            },
                            1
                          ),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(2);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(z.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, {
                                  primary: "View progress",
                                }),
                              ],
                            },
                            2
                          ),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(3);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(_.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, { primary: "Plan lesson" }),
                              ],
                            },
                            3
                          ),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(4);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(X.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, { primary: "Add report" }),
                              ],
                            },
                            4
                          ),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            : 3 == e.level
            ? Object(p.jsxs)("div", {
                className: f.leftNavWrapper,
                style: r ? { width: O } : { width: 0 },
                children: [
                  Object(p.jsx)(M.a, {
                    position: "fixed",
                    className: Object(w.a)(
                      f.appBar,
                      Object(d.a)({}, f.appBarShift, r)
                    ),
                    children: Object(p.jsxs)(G.a, {
                      children: [
                        Object(p.jsx)(W.a, {
                          onClick: x,
                          edge: "start",
                          className: Object(w.a)(f.menuButton, r && f.hide),
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h6",
                          noWrap: !0,
                          children: "Real Tutor",
                        }),
                        Object(p.jsx)(b.a, {
                          variant: "contained",
                          color: "secondary",
                          style: { marginLeft: "auto" },
                          onClick: function () {
                            console.log("Hello"), e.logout();
                          },
                          children: "Log out",
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)(k.a, {
                    className: f.drawer,
                    variant: "persistent",
                    open: r,
                    anchor: "left",
                    classes: { paper: f.drawerPaper },
                    children: Object(p.jsx)("div", {
                      className: f.drawerContainer,
                      children: Object(p.jsxs)(C.a, {
                        children: [
                          Object(p.jsx)(T.a, {
                            onClick: m,
                            children:
                              "ltr" === g.direction
                                ? Object(p.jsx)(R.a, {})
                                : Object(p.jsx)(L.a, {}),
                          }),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(0);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(V.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, { primary: "Dashboard" }),
                              ],
                            },
                            0
                          ),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(1);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(Z.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, { primary: "View lessons" }),
                              ],
                            },
                            1
                          ),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            : 4 == e.level
            ? Object(p.jsxs)("div", {
                className: f.leftNavWrapper,
                style: r ? { width: O } : { width: 0 },
                children: [
                  Object(p.jsx)(M.a, {
                    position: "fixed",
                    className: Object(w.a)(
                      f.appBar,
                      Object(d.a)({}, f.appBarShift, r)
                    ),
                    children: Object(p.jsxs)(G.a, {
                      children: [
                        Object(p.jsx)(W.a, {
                          onClick: x,
                          edge: "start",
                          className: Object(w.a)(f.menuButton, r && f.hide),
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h6",
                          noWrap: !0,
                          children: "Real Tutor",
                        }),
                        Object(p.jsx)(b.a, {
                          variant: "contained",
                          color: "secondary",
                          style: { marginLeft: "auto" },
                          onClick: function () {
                            e.logout();
                          },
                          children: "Log out",
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)(k.a, {
                    className: f.drawer,
                    variant: "persistent",
                    open: r,
                    anchor: "left",
                    classes: { paper: f.drawerPaper },
                    children: Object(p.jsx)("div", {
                      className: f.drawerContainer,
                      children: Object(p.jsxs)(C.a, {
                        children: [
                          Object(p.jsx)(T.a, {
                            onClick: m,
                            children:
                              "ltr" === g.direction
                                ? Object(p.jsx)(R.a, {})
                                : Object(p.jsx)(L.a, {}),
                          }),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(0);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(V.a, {
                                    color: "primary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, {
                                  primary: "Manager dashboard",
                                }),
                              ],
                            },
                            0
                          ),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(1);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(Z.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, { primary: "View Tutors" }),
                              ],
                            },
                            0
                          ),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(2);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(E.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, {
                                  primary: "View Students",
                                }),
                              ],
                            },
                            1
                          ),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return (document.location.href =
                                  "/tutordashboard");
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(V.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, {
                                  primary: "Tutor Dashboard",
                                }),
                              ],
                            },
                            2
                          ),
                          Object(p.jsxs)(
                            S.a,
                            {
                              button: !0,
                              onClick: function () {
                                return I(3);
                              },
                              children: [
                                Object(p.jsx)(P.a, {
                                  children: Object(p.jsx)(B.a, {
                                    color: "secondary",
                                  }),
                                }),
                                Object(p.jsx)(A.a, { primary: "Stats" }),
                              ],
                            },
                            3
                          ),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            : Object(p.jsx)("div", {});
        },
        $ = n(54),
        ee = n(30),
        te = n(309),
        ne = n(310),
        ae = n(106),
        ie = n(173),
        re = n(26),
        ce = n(326),
        se = function () {
          var e = Object(a.useState)(new Date()),
            t = Object(h.a)(e, 2),
            n = t[0],
            i = t[1],
            r = Object(a.useState)([]),
            c = Object(h.a)(r, 2),
            s = c[0],
            x = c[1],
            m = Object(a.useState)(""),
            f = Object(h.a)(m, 2),
            g = f[0],
            v = f[1],
            w = Object(a.useState)(""),
            k = Object(h.a)(w, 2),
            C = k[0],
            S = k[1],
            P = Object(a.useState)([]),
            A = Object(h.a)(P, 2),
            I = A[0],
            W = A[1],
            T = Object(a.useState)(!1),
            N = Object(h.a)(T, 2),
            R = N[0],
            D = N[1];
          Object(a.useEffect)(function () {
            L();
          }, []);
          var L = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, n, a, i, r, c, s, l;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = window.location.search),
                            (n = new URLSearchParams(t)),
                            (e.next = 4),
                            fetch(
                              "/spec/getspecfromstudentid?studentid=" +
                                n.get("studentid"),
                              {
                                method: "GET",
                                headers: {
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                                },
                                credentials: "include",
                              }
                            )
                          );
                        case 4:
                          return (a = e.sent), (e.next = 7), a.json();
                        case 7:
                          if (void 0 != (i = e.sent).error);
                          else {
                            (r = []), (c = Object(ee.a)(i));
                            try {
                              for (c.s(); !(s = c.n()).done; )
                                (l = s.value),
                                  r.push({ value: l._id, label: l.content });
                            } catch (o) {
                              c.e(o);
                            } finally {
                              c.f();
                            }
                            x(r);
                          }
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            Y = (function () {
              var e = Object(l.a)(
                o.a.mark(function e(t) {
                  var a, i, r, c, s, l, d, h, j, b, u, p, x, m;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            D(!0),
                            t.preventDefault(),
                            (a = window.location.search),
                            (i = new URLSearchParams(a)),
                            (r = i.get("studentid")),
                            (e.next = 7),
                            fetch("/accounts/getid", {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            })
                          );
                        case 7:
                          return (c = e.sent), (e.next = 10), c.json();
                        case 10:
                          (s = e.sent),
                            (l = s.id),
                            (d = Math.floor(new Date(n).getTime() / 1e3)),
                            (h = []),
                            (j = Object(ee.a)(I));
                          try {
                            for (j.s(); !(b = j.n()).done; )
                              (u = b.value), h.push(u.value);
                          } catch (o) {
                            j.e(o);
                          } finally {
                            j.f();
                          }
                          return (
                            (p = {
                              title: g,
                              date: d,
                              plan: C,
                              studentid: r,
                              tutorid: l,
                              specPoints: h,
                            }),
                            console.log(p),
                            (e.next = 20),
                            fetch("/accounts/addlesson", {
                              method: "POST",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                              body: JSON.stringify(p),
                            })
                          );
                        case 20:
                          return (x = e.sent), (e.next = 23), x.json();
                        case 23:
                          (m = e.sent),
                            console.log(m),
                            void 0 != m.error ||
                              (document.location.href =
                                "studentdashboard?studentid=" + r);
                        case 26:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            E = Object(j.a)(function (e) {
              return {
                lessonsWrapper: {
                  width: "90%",
                  height: "95%",
                  marginLeft: "5%",
                  display: "flex",
                  justifyContent: "center",
                },
                multiLineInput: {
                  width: "90%",
                  leftMargin: "5%",
                  marginBottom: 10,
                },
                inputBox: {
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                },
                gridItem: { marginTop: 10, marginBottom: 10 },
                button: Object(d.a)(
                  { width: "50%" },
                  e.breakpoints.down("sm"),
                  { width: "90%" }
                ),
              };
            })();
          return Object(p.jsx)("form", {
            onSubmit: Y,
            children: Object(p.jsxs)(te.a, {
              container: !0,
              spacing: 3,
              className: E.lessonsWrapper,
              children: [
                Object(p.jsx)(te.a, {
                  item: !0,
                  lg: 8,
                  md: 12,
                  children: Object(p.jsxs)(O.a, {
                    elevation: 2,
                    className: E.inputBox,
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h2",
                        children: "Lesson Title",
                      }),
                      Object(p.jsx)(u.a, {
                        label: "Title",
                        placeholder: "This is a title",
                        variant: "outlined",
                        onBlur: function (e) {
                          v(e.target.value);
                        },
                        style: { width: "50%" },
                        color: "secondary",
                      }),
                      Object(p.jsx)(ne.a, { className: E.gridItem }),
                      Object(p.jsx)(y.a, {
                        variant: "h2",
                        children: "Lesson Planning",
                      }),
                      Object(p.jsx)(u.a, {
                        label: "Plan",
                        placeholder: "This is plan",
                        multiline: !0,
                        rows: 3,
                        variant: "outlined",
                        className: E.multiLineInput,
                        onBlur: function (e) {
                          S(e.target.value);
                        },
                        color: "secondary",
                      }),
                      Object(p.jsx)(ne.a, {}),
                      Object(p.jsx)(y.a, {
                        variant: "h2",
                        children: "Date and Time",
                      }),
                      Object(p.jsx)(re.a, {
                        utils: ie.a,
                        children: Object(p.jsx)(ce.a, {
                          onChange: i,
                          style: { width: "50%" },
                          inputVariant: "outlined",
                          value: n,
                          color: "secondary",
                        }),
                      }),
                      Object(p.jsx)(ne.a, { className: E.gridItem }),
                      Object(p.jsx)(b.a, {
                        type: "submit",
                        variant: "contained",
                        color: "primary",
                        className: E.button,
                        disabled: R,
                        children: "Submit plan",
                      }),
                    ],
                  }),
                }),
                Object(p.jsx)(te.a, {
                  item: !0,
                  lg: 4,
                  md: 12,
                  children: Object(p.jsxs)(O.a, {
                    className: E.inputBox,
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "Select planned spec points",
                      }),
                      Object(p.jsx)(ae.a, {
                        options: s,
                        theme: function (e) {
                          return Object($.a)(
                            Object($.a)({}, e),
                            {},
                            {
                              colors: Object($.a)(
                                Object($.a)({}, e.colors),
                                {},
                                {
                                  primary: "#009688",
                                  primary25: "#b2dfdb",
                                  primary50: "#80cbc4",
                                }
                              ),
                            }
                          );
                        },
                        isMulti: !0,
                        name: "Specification points",
                        onChange: W,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        oe = n(311),
        le = n(338),
        de = n(312),
        he = function (e) {
          return e.loading
            ? Object(p.jsx)("div", {
                style: { marginTop: 20 },
                children: Object(p.jsx)(de.a, { color: "secondary" }),
              })
            : Object(p.jsx)("div", {});
        },
        je = function (e) {
          var t = Object(a.useState)({}),
            n = Object(h.a)(t, 2),
            i = n[0],
            r = n[1],
            c = Object(a.useState)(!1),
            s = Object(h.a)(c, 2),
            u = s[0],
            x = s[1],
            m = Object(a.useState)(!0),
            O = Object(h.a)(m, 2),
            f = O[0],
            g = O[1],
            v = Object(a.useState)(50),
            w = Object(h.a)(v, 2),
            k = w[0],
            C = w[1],
            S = Object(a.useState)(50),
            P = Object(h.a)(S, 2),
            A = P[0],
            I = P[1],
            W = Object(a.useState)(50),
            T = Object(h.a)(W, 2),
            N = T[0],
            R = T[1];
          Object(a.useEffect)(function () {
            D();
          }, []);
          var D = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, n, a, i;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = window.location.search),
                            (n = new URLSearchParams(t)),
                            (e.next = 4),
                            fetch(
                              "/accounts/getstudentlatestlesson?studentid=" +
                                n.get("studentid"),
                              {
                                method: "GET",
                                headers: {
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                                },
                                credentials: "include",
                              }
                            )
                          );
                        case 4:
                          return (a = e.sent), (e.next = 7), a.json();
                        case 7:
                          (i = e.sent), r(i), g(!1);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            L = Object(j.a)(function (e) {
              return {
                dialog: {
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                },
                dialogWrapper: Object(d.a)({}, e.breakpoints.down("sm"), {
                  width: "95%",
                  marginLeft: "2.5%",
                }),
                paper: Object(d.a)(
                  { minWidth: "70%" },
                  e.breakpoints.down("sm"),
                  { minWidth: "95%" }
                ),
              };
            })(),
            Y = function () {
              x(!0);
            },
            E = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, n;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = {
                              answers: [
                                {
                                  question: "How good was your lesson?",
                                  answer: k,
                                },
                                {
                                  question: "Did the tutor do well?",
                                  answer: A,
                                },
                                {
                                  question:
                                    "Would you recommend it to a friend?",
                                  answer: N,
                                },
                              ],
                              lessonID: i._id,
                            }),
                            (e.next = 3),
                            fetch("/forms/studentfeedback", {
                              method: "POST",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                              body: JSON.stringify(t),
                            })
                          );
                        case 3:
                          return (n = e.sent), (e.next = 6), n.json();
                        case 6:
                          e.sent, (i.studentFeedback = !0), r(i), x(!1);
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return null != i.error
            ? Object(p.jsx)("div", {})
            : Object(p.jsxs)("div", {
                children: [
                  Object(p.jsx)(y.a, {
                    variant: "h4",
                    align: "left",
                    children: "Latest lesson:",
                  }),
                  Object(p.jsx)(y.a, {
                    variant: "body1",
                    align: "left",
                    children: i.plan,
                  }),
                  Object(p.jsx)("br", {}),
                  0 == Object.keys(i).length ||
                  i.studentFeedback ||
                  1 != e.level
                    ? Object(p.jsx)("div", {})
                    : Object(p.jsx)("div", {
                        style: { float: "left" },
                        children: Object(p.jsx)(b.a, {
                          variant: "contained",
                          color: "secondary",
                          onClick: Y,
                          children: "Add feedback",
                        }),
                      }),
                  Object(p.jsx)(oe.a, {
                    onClose: function () {
                      x(!1);
                    },
                    open: u,
                    className: L.dialogWrapper,
                    classes: { paper: L.paper },
                    children: Object(p.jsxs)("div", {
                      className: L.dialog,
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          noWrap: !0,
                          align: "center",
                          children: "Lesson feedback form",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: "How good was your lesson?",
                        }),
                        Object(p.jsx)(le.a, {
                          value: k,
                          onChange: function (e, t) {
                            return C(t);
                          },
                          defaultValue: 50,
                          step: 2,
                          min: 0,
                          max: 100,
                          valueLabelDisplay: "auto",
                          style: { width: "95%", marginLeft: "2.5%" },
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: "Did the tutor do well?",
                        }),
                        Object(p.jsx)(le.a, {
                          value: A,
                          onChange: function (e, t) {
                            return I(t);
                          },
                          defaultValue: 50,
                          step: 2,
                          min: 0,
                          max: 100,
                          valueLabelDisplay: "auto",
                          style: { width: "95%", marginLeft: "2.5%" },
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: "Would you recommend it to a friend?",
                        }),
                        Object(p.jsx)(le.a, {
                          value: N,
                          onChange: function (e, t) {
                            return R(t);
                          },
                          defaultValue: 50,
                          step: 2,
                          min: 0,
                          max: 100,
                          valueLabelDisplay: "auto",
                          style: { width: "95%", marginLeft: "2.5%" },
                        }),
                        Object(p.jsx)(b.a, {
                          align: "center",
                          color: "secondary",
                          variant: "contained",
                          style: { width: "95%", marginLeft: "2.5%" },
                          onClick: E,
                          children: "Submit",
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)(he, { loading: f }),
                ],
              });
        },
        be = n(313),
        ue = function () {
          var e = Object(a.useState)({ empty: !0 }),
            t = Object(h.a)(e, 2),
            n = t[0],
            i = t[1];
          Object(a.useEffect)(function () {
            r();
          }, []);
          var r = (function () {
            var e = Object(l.a)(
              o.a.mark(function e() {
                var t, n, a, r;
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = window.location.search),
                          (n = new URLSearchParams(t)),
                          (e.next = 4),
                          fetch(
                            "/accounts/getstudentprogress?studentid=" +
                              n.get("studentid"),
                            {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            }
                          )
                        );
                      case 4:
                        return (a = e.sent), (e.next = 7), a.json();
                      case 7:
                        (r = e.sent), i(r);
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsxs)(y.a, {
                variant: "h4",
                children: [n.progress, "% Course Completion"],
              }),
              Object(p.jsx)(be.a, {
                variant: "determinate",
                value: n.progress,
                color: "secondary",
              }),
            ],
          });
        },
        pe = function () {
          var e = Object(a.useState)({ empty: !0 }),
            t = Object(h.a)(e, 2),
            n = t[0],
            i = t[1],
            r = Object(a.useState)(!0),
            c = Object(h.a)(r, 2),
            s = c[0],
            d = c[1];
          Object(a.useEffect)(function () {
            j();
          }, []);
          var j = (function () {
            var e = Object(l.a)(
              o.a.mark(function e() {
                var t, n, a, r;
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = window.location.search),
                          (n = new URLSearchParams(t)),
                          (e.next = 4),
                          fetch(
                            "/accounts/getstudentupcoming?studentid=" +
                              n.get("studentid"),
                            {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            }
                          )
                        );
                      case 4:
                        return (a = e.sent), (e.next = 7), a.json();
                      case 7:
                        "No upcoming lesson" != (r = e.sent).error && i(r),
                          d(!1);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
          return n.empty
            ? Object(p.jsx)("div", {
                children: Object(p.jsx)(he, { loading: s }),
              })
            : Object(p.jsxs)("div", {
                children: [
                  Object(p.jsx)(y.a, {
                    variant: "h4",
                    align: "left",
                    children: n.title,
                  }),
                  Object(p.jsx)("ul", {
                    children: n.specPoints.map(function (e) {
                      return Object(p.jsx)(
                        "li",
                        {
                          children: Object(p.jsx)(y.a, {
                            variant: "body1",
                            align: "left",
                            children: e.content,
                          }),
                        },
                        e.contentID
                      );
                    }),
                  }),
                ],
              });
        },
        xe = function (e) {
          var t = window.location.search,
            n = new URLSearchParams(t),
            i = Object(a.useState)(),
            r = Object(h.a)(i, 2),
            c = r[0],
            s = r[1];
          Object(a.useEffect)(function () {
            u();
          }, []);
          var u = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, a;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch(
                              "/accounts/getremaininghours?studentid=" +
                                n.get("studentid"),
                              {
                                method: "GET",
                                headers: {
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                                },
                                credentials: "include",
                              }
                            )
                          );
                        case 2:
                          return (t = e.sent), (e.next = 5), t.json();
                        case 5:
                          (a = e.sent), s(a.hours);
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            x = Object(j.a)(function (e) {
              return {
                paper: {
                  margin: 5,
                  textAlign: "center",
                  height: 350,
                  borderRadius: 10,
                },
                cardsWrapper: {
                  width: "90%",
                  marginLeft: "5%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                },
                cardContent: {
                  flex: 5,
                  display: "flex",
                  flexDirection: "column",
                },
                cardAction: Object(d.a)(
                  {
                    width: "50%",
                    marginLeft: "25%",
                    marginBottom: 10,
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                  },
                  e.breakpoints.down("sm"),
                  { width: "90%", marginLeft: "5%" }
                ),
                button: { marginLeft: 5, marginRight: 5 },
              };
            })();
          return Object(p.jsxs)(te.a, {
            container: !0,
            children: [
              Object(p.jsx)(te.a, {
                item: !0,
                lg: 6,
                md: 12,
                sm: 12,
                xs: 12,
                children: Object(p.jsx)(O.a, {
                  className: x.paper,
                  elevation: 3,
                  children: Object(p.jsxs)(m.a, {
                    display: "flex",
                    className: x.cardsWrapper,
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h2",
                        children: "Lessons",
                      }),
                      Object(p.jsx)(m.a, {
                        className: x.cardContent,
                        children: Object(p.jsx)(je, { level: e.level }),
                      }),
                      Object(p.jsxs)(m.a, {
                        className: x.cardAction,
                        children: [
                          Object(p.jsx)(b.a, {
                            className: x.button,
                            variant: "contained",
                            color: "primary",
                            onClick: function () {
                              e.changeState(4);
                            },
                            style: 1 == e.level ? { display: "none" } : {},
                            children: "Add report",
                          }),
                          Object(p.jsx)(b.a, {
                            className: x.button,
                            variant: "contained",
                            color: "primary",
                            onClick: function () {
                              e.changeState(1);
                            },
                            children: "View lessons",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              Object(p.jsx)(te.a, {
                item: !0,
                lg: 6,
                md: 12,
                sm: 12,
                xs: 12,
                children: Object(p.jsx)(O.a, {
                  className: x.paper,
                  elevation: 3,
                  children: Object(p.jsxs)(m.a, {
                    display: "flex",
                    className: x.cardsWrapper,
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h2",
                        children: "Upcoming",
                      }),
                      Object(p.jsx)(m.a, {
                        className: x.cardContent,
                        children: Object(p.jsx)(pe, {}),
                      }),
                      Object(p.jsx)(m.a, {
                        className: x.cardAction,
                        children: Object(p.jsx)(b.a, {
                          className: x.button,
                          variant: "contained",
                          color: "primary",
                          onClick: function () {
                            e.changeState(3);
                          },
                          style: 1 == e.level ? { display: "none" } : {},
                          children: "Plan lesson",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              Object(p.jsx)(te.a, {
                item: !0,
                lg: 6,
                md: 12,
                sm: 12,
                xs: 12,
                children: Object(p.jsx)(O.a, {
                  className: x.paper,
                  elevation: 3,
                  children: Object(p.jsxs)(m.a, {
                    display: "flex",
                    className: x.cardsWrapper,
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h2",
                        children: "Progress",
                      }),
                      Object(p.jsx)(m.a, {
                        className: x.cardContent,
                        children: Object(p.jsx)(ue, {}),
                      }),
                      Object(p.jsx)(m.a, {
                        className: x.cardAction,
                        children: Object(p.jsx)(b.a, {
                          variant: "contained",
                          color: "primary",
                          onClick: function () {
                            e.changeState(2);
                          },
                          children: "View progress",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              Object(p.jsx)(te.a, {
                item: !0,
                lg: 6,
                md: 12,
                sm: 12,
                xs: 12,
                children: Object(p.jsx)(O.a, {
                  className: x.paper,
                  elevation: 3,
                  children: Object(p.jsxs)(m.a, {
                    display: "flex",
                    className: x.cardsWrapper,
                    children: [
                      Object(p.jsx)(y.a, { variant: "h2", children: "Mixed" }),
                      Object(p.jsx)(m.a, {
                        className: x.cardContent,
                        children: Object(p.jsxs)(y.a, {
                          variant: "h3",
                          children: ["Remaining Hours: ", c],
                        }),
                      }),
                      Object(p.jsx)(m.a, { className: x.cardAction }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        me = n(328),
        Oe = n(314),
        fe = n(336),
        ge = n(301),
        ye = function () {
          var e,
            t = Object(a.useState)([]),
            n = Object(h.a)(t, 2),
            i = n[0],
            r = n[1],
            c = Object(a.useState)({ empty: !0 }),
            s = Object(h.a)(c, 2),
            x = s[0],
            m = s[1],
            f = Object(a.useState)({ empty: !0 }),
            g = Object(h.a)(f, 2),
            v = (g[0], g[1], Object(a.useState)([])),
            w = Object(h.a)(v, 2),
            k = w[0],
            C = w[1],
            S = Object(a.useState)(""),
            P = Object(h.a)(S, 2),
            A = P[0],
            I = P[1],
            W = Object(a.useState)([]),
            T = Object(h.a)(W, 2),
            N = T[0],
            R = T[1],
            D = Object(a.useState)(!1),
            L = Object(h.a)(D, 2),
            Y = L[0],
            E = L[1];
          Object(a.useEffect)(function () {
            F(), B();
          }, []);
          var F = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, n, a, i, r, c, s, l;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = window.location.search),
                            (n = new URLSearchParams(t)),
                            (e.next = 4),
                            fetch(
                              "/spec/getspecfromstudentid?studentid=" +
                                n.get("studentid"),
                              {
                                method: "GET",
                                headers: {
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                                },
                                credentials: "include",
                              }
                            )
                          );
                        case 4:
                          return (a = e.sent), (e.next = 7), a.json();
                        case 7:
                          if (void 0 != (i = e.sent).error);
                          else {
                            (r = []), (c = Object(ee.a)(i));
                            try {
                              for (c.s(); !(s = c.n()).done; )
                                (l = s.value),
                                  r.push({ value: l._id, label: l.content });
                            } catch (o) {
                              c.e(o);
                            } finally {
                              c.f();
                            }
                            C(r);
                          }
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            B = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, n, a, i, c, s, l, d;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = window.location.search),
                            (n = new URLSearchParams(t)),
                            (e.next = 4),
                            fetch(
                              "/accounts/getstudentlessons?studentid=" +
                                n.get("studentid"),
                              {
                                method: "GET",
                                headers: {
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                                },
                                credentials: "include",
                              }
                            )
                          );
                        case 4:
                          return (a = e.sent), (e.next = 7), a.json();
                        case 7:
                          (i = e.sent), (c = []), (s = Object(ee.a)(i));
                          try {
                            for (s.s(); !(l = s.n()).done; )
                              void 0 == (d = l.value).report && c.push(d);
                          } catch (o) {
                            s.e(o);
                          } finally {
                            s.f();
                          }
                          r(c);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            M = (function () {
              var e = Object(l.a)(
                o.a.mark(function e(t) {
                  var n, a, i, r, c, s, l, d, h, j;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          E(!0),
                            (n = window.location.search),
                            (a = new URLSearchParams(n)),
                            (i = a.get("studentid")),
                            t.preventDefault(),
                            (r = []),
                            (c = Object(ee.a)(N));
                          try {
                            for (c.s(); !(s = c.n()).done; )
                              (l = s.value), r.push(l.value);
                          } catch (o) {
                            c.e(o);
                          } finally {
                            c.f();
                          }
                          return (
                            (d = {
                              lessonID: x,
                              report: A,
                              specPointsAchieved: r,
                            }),
                            (e.next = 11),
                            fetch("/accounts/addlessonreport", {
                              method: "POST",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                              body: JSON.stringify(d),
                            })
                          );
                        case 11:
                          return (h = e.sent), (e.next = 14), h.json();
                        case 14:
                          (j = e.sent),
                            console.log(j),
                            void 0 != j.error ||
                              (document.location.href =
                                "studentdashboard?studentid=" + i);
                        case 17:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            G = Object(j.a)(function (e) {
              return {
                lessonsWrapper: Object(d.a)(
                  {
                    width: "90%",
                    height: "95%",
                    marginLeft: "5%",
                    display: "flex",
                    justifyContent: "center",
                  },
                  e.breakpoints.down("sm"),
                  { width: "100%", marginLeft: "0%" }
                ),
                multiLineInput: {
                  width: "90%",
                  leftMargin: "5%",
                  marginBottom: 10,
                },
                inputBox: {
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                },
                gridItem: { marginTop: 10, marginBottom: 10 },
                button: Object(d.a)(
                  { width: "50%" },
                  e.breakpoints.down("sm"),
                  { width: "100%" }
                ),
                dropdown: Object(d.a)(
                  { width: "50%" },
                  e.breakpoints.down("sm"),
                  { width: "100%" }
                ),
                divider: { marginTop: 10, marginBottom: 10 },
                formWrapper: Object(d.a)({}, e.breakpoints.down("sm"), {
                  width: "100%",
                }),
              };
            })();
          return Object(p.jsx)("form", {
            onSubmit: M,
            children: Object(p.jsxs)(te.a, {
              container: !0,
              spacing: 3,
              className: G.lessonsWrapper,
              children: [
                Object(p.jsx)(te.a, {
                  item: !0,
                  lg: 8,
                  md: 12,
                  className: G.formWrapper,
                  children: Object(p.jsxs)(O.a, {
                    elevation: 2,
                    className: G.inputBox,
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h2",
                        children: "Add report",
                      }),
                      Object(p.jsx)(ne.a, { className: G.divider }),
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "Select lesson",
                      }),
                      Object(p.jsxs)(ge.a, {
                        className: G.dropdown,
                        variant: "outlined",
                        children: [
                          Object(p.jsx)(fe.a, {
                            id: "select-lesson",
                            children: "Select lesson",
                          }),
                          Object(p.jsx)(
                            me.a,
                            ((e = {
                              labelId: "Select lesson",
                              id: "lesson report",
                            }),
                            Object(d.a)(e, "labelId", "select-lesson"),
                            Object(d.a)(e, "value", x.date),
                            Object(d.a)(e, "label", "Select lesson"),
                            Object(d.a)(e, "onChange", function (e) {
                              m(e.target.value);
                            }),
                            Object(d.a)(e, "color", "secondary"),
                            Object(d.a)(
                              e,
                              "children",
                              i.map(function (e) {
                                return Object(p.jsx)(
                                  Oe.a,
                                  {
                                    value: e._id,
                                    children: new Date(
                                      1e3 * e.date
                                    ).toDateString(),
                                  },
                                  e._id
                                );
                              })
                            ),
                            e)
                          ),
                        ],
                      }),
                      Object(p.jsx)(ne.a, { className: G.divider }),
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "Lesson Report",
                      }),
                      Object(p.jsx)(u.a, {
                        label: "Add lesson report",
                        placeholder: "Add lesson report",
                        multiline: !0,
                        rows: 3,
                        variant: "outlined",
                        className: G.multiLineInput,
                        onBlur: function (e) {
                          I(e.target.value);
                        },
                        color: "secondary",
                      }),
                      Object(p.jsx)(ne.a, { className: G.gridItem }),
                      Object(p.jsx)(b.a, {
                        type: "submit",
                        variant: "contained",
                        color: "primary",
                        className: G.button,
                        disabled: Y,
                        children: "Submit Report",
                      }),
                    ],
                  }),
                }),
                Object(p.jsx)(te.a, {
                  item: !0,
                  lg: 4,
                  md: 12,
                  children: Object(p.jsxs)(O.a, {
                    className: G.inputBox,
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "Select achieved spec points",
                      }),
                      Object(p.jsx)(ae.a, {
                        options: k,
                        theme: function (e) {
                          return Object($.a)(
                            Object($.a)({}, e),
                            {},
                            {
                              colors: Object($.a)(
                                Object($.a)({}, e.colors),
                                {},
                                {
                                  primary: "#009688",
                                  primary25: "#b2dfdb",
                                  primary50: "#80cbc4",
                                }
                              ),
                            }
                          );
                        },
                        isMulti: !0,
                        name: "Specification points",
                        onChange: R,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        ve = n(316),
        we = n(320),
        ke = n(319),
        Ce = n(315),
        Se = n(317),
        Pe = n(318),
        Ae = function () {
          var e = Object(a.useState)([]),
            t = Object(h.a)(e, 2),
            n = t[0],
            i = t[1];
          Object(a.useEffect)(function () {
            r();
          }, []);
          var r = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, n, a, r, s, l, d, h, j, b, u, p;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = window.location.search),
                            (n = new URLSearchParams(t)),
                            (e.next = 4),
                            fetch(
                              "/accounts/getstudentpoints?studentid=" +
                                n.get("studentid"),
                              {
                                method: "GET",
                                headers: {
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                                },
                                credentials: "include",
                              }
                            )
                          );
                        case 4:
                          return (a = e.sent), (e.next = 7), a.json();
                        case 7:
                          if (
                            ((r = e.sent), console.log(r), void 0 != r.error)
                          );
                          else {
                            (s = []), (l = Object(ee.a)(r));
                            try {
                              for (l.s(); !(d = l.n()).done; )
                                if (1 == (h = d.value).date.length)
                                  s.push(c(h.content, h.date[0], h._id));
                                else {
                                  (j = 0), (b = Object(ee.a)(h.date));
                                  try {
                                    for (b.s(); !(u = b.n()).done; )
                                      (p = u.value) > j && (j = p);
                                  } catch (o) {
                                    b.e(o);
                                  } finally {
                                    b.f();
                                  }
                                  s.push(c(h.content, j, h._id));
                                }
                            } catch (o) {
                              l.e(o);
                            } finally {
                              l.f();
                            }
                            s.sort(function (e, t) {
                              return e.date - t.date;
                            }),
                              i(s);
                          }
                        case 10:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            c = function (e, t, n) {
              return { content: e, date: t, status: n };
            },
            s = Object(j.a)(function (e) {
              return {
                studentBoxWrapper: {
                  width: "90%",
                  marginTop: 50,
                  marginLeft: "5%",
                },
                studentBox: { display: "flex", flexDirection: "column" },
              };
            })();
          return Object(p.jsx)(Ce.a, {
            component: O.a,
            children: Object(p.jsxs)(ve.a, {
              className: s.table,
              "aria-label": "simple table",
              children: [
                Object(p.jsx)(Se.a, {
                  children: Object(p.jsxs)(Pe.a, {
                    children: [
                      Object(p.jsx)(ke.a, { children: "Spec point" }),
                      Object(p.jsx)(ke.a, { children: "Date Reviewed" }),
                      Object(p.jsx)(ke.a, { children: "Status" }),
                    ],
                  }),
                }),
                Object(p.jsx)(we.a, {
                  children: n.map(function (e) {
                    return Object(p.jsxs)(
                      Pe.a,
                      {
                        children: [
                          Object(p.jsx)(ke.a, { children: e.content }),
                          Object(p.jsx)(ke.a, {
                            children: new Date(1e3 * e.date).toDateString(
                              "en-UK"
                            ),
                          }),
                          Object(p.jsx)(ke.a, {
                            children:
                              ((t = e.date),
                              new Date() - 1e3 * t < 26298e5
                                ? "Good"
                                : "Needs revision"),
                          }),
                        ],
                      },
                      e.name
                    );
                    var t;
                  }),
                }),
              ],
            }),
          });
        },
        Ie = function (e) {
          var t = Object(a.useState)(!1),
            n = Object(h.a)(t, 2),
            i = n[0],
            r = n[1];
          Object(a.useEffect)(function () {
            l();
          }, []);
          var c = function () {
              r(!0);
            },
            s = function () {
              r(!1);
            },
            o = Object(j.a)(function (e) {
              return {
                biglesson: {
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 10,
                  paddingRight: 10,
                  paddingTop: 10,
                  paddingBottom: 10,
                },
                bigLessonWrapper: Object(d.a)({}, e.breakpoints.down("sm"), {
                  width: "95%",
                  marginLeft: "2.5%",
                }),
              };
            })(),
            l = function () {
              return void 0 == e.report
                ? Object(p.jsx)("div", {})
                : Object(p.jsxs)("div", {
                    children: [
                      Object(p.jsx)(y.a, { variant: "h4", children: "Report" }),
                      Object(p.jsx)(y.a, {
                        variant: "body1",
                        children: e.report,
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "h4",
                        children: "Spec points achieved",
                      }),
                      Object(p.jsx)("ul", {
                        children: e.specPointsAchieved.map(function (e) {
                          return Object(p.jsx)(
                            "li",
                            { children: e },
                            e.contentID
                          );
                        }),
                      }),
                    ],
                  });
            };
          if (e.mobile) {
            if (1 == e.level)
              return Object(p.jsxs)(
                Pe.a,
                {
                  hover: !0,
                  children: [
                    Object(p.jsx)(ke.a, {
                      component: "th",
                      scope: "row",
                      children: e.title,
                    }),
                    Object(p.jsx)(ke.a, {
                      children: Object(p.jsx)(b.a, {
                        color: "secondary",
                        onClick: c,
                        children: "Expand",
                      }),
                    }),
                    Object(p.jsxs)(oe.a, {
                      open: i,
                      onClose: s,
                      onClick: function () {
                        return c;
                      },
                      className: o.bigLessonWrapper,
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: e.title,
                        }),
                        Object(p.jsx)(y.a, { variant: "h4", children: "Date" }),
                        Object(p.jsx)(y.a, {
                          variant: "body1",
                          children: new Date(1e3 * e.date).toString(),
                        }),
                        Object(p.jsxs)("div", {
                          className: o.biglesson,
                          children: [
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              children: "Plan",
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "body1",
                              children: e.plan,
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              children: "Spec points",
                            }),
                            Object(p.jsx)("ul", {
                              children: e.specPointsAchieved.map(function (e) {
                                return Object(p.jsx)(
                                  "li",
                                  { children: e },
                                  e.contentID
                                );
                              }),
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              children: "Report",
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "body1",
                              children: e.report,
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              children: "Spec points achieved",
                            }),
                            Object(p.jsx)("ul", {
                              children: e.specPointsAchieved.map(function (e) {
                                return Object(p.jsx)(
                                  "li",
                                  { children: e },
                                  e.contentID
                                );
                              }),
                            }),
                            Object(p.jsx)(b.a, {
                              onClick: s,
                              color: "primary",
                              variant: "contained",
                              children: "Close",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e._id
              );
            if (2 == e.level)
              return Object(p.jsxs)(
                Pe.a,
                {
                  hover: !0,
                  children: [
                    Object(p.jsx)(ke.a, {
                      component: "th",
                      scope: "row",
                      children: e.title,
                    }),
                    Object(p.jsx)(ke.a, {
                      children: Object(p.jsx)(b.a, {
                        color: "secondary",
                        onClick: c,
                        children: "Expand",
                      }),
                    }),
                    Object(p.jsxs)(oe.a, {
                      open: i,
                      onClose: s,
                      onClick: function () {
                        return c;
                      },
                      className: o.bigLessonWrapper,
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: e.title,
                        }),
                        Object(p.jsx)(y.a, { variant: "h4", children: "Date" }),
                        Object(p.jsx)(y.a, {
                          variant: "body1",
                          children: new Date(1e3 * e.date).toString(),
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h4",
                          children: "Student",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body1",
                          children: e.student,
                        }),
                        Object(p.jsxs)("div", {
                          className: o.biglesson,
                          children: [
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              children: "Plan",
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "body1",
                              children: e.plan,
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              children: "Spec points",
                            }),
                            Object(p.jsx)("ul", {
                              children: e.specPointsAchieved.map(function (e) {
                                return Object(p.jsx)(
                                  "li",
                                  { children: e },
                                  e.contentID
                                );
                              }),
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              children: "Report",
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "body1",
                              children: e.report,
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              children: "Spec points achieved",
                            }),
                            Object(p.jsx)("ul", {
                              children: e.specPointsAchieved.map(function (e) {
                                return Object(p.jsx)(
                                  "li",
                                  { children: e },
                                  e.contentID
                                );
                              }),
                            }),
                            Object(p.jsx)(b.a, {
                              onClick: s,
                              color: "primary",
                              variant: "contained",
                              children: "Close",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e._id
              );
          } else {
            if (1 == e.level)
              return Object(p.jsxs)(
                Pe.a,
                {
                  hover: !0,
                  children: [
                    Object(p.jsx)(ke.a, {
                      component: "th",
                      scope: "row",
                      children: e.title,
                    }),
                    Object(p.jsx)(ke.a, {
                      children: Object(p.jsx)("ul", {
                        children: e.specPoints.map(function (e) {
                          return Object(p.jsx)(
                            "li",
                            { children: e },
                            e.contentID
                          );
                        }),
                      }),
                    }),
                    Object(p.jsx)(ke.a, {
                      children: Object(p.jsx)("ul", {
                        children: e.specPointsAchieved.map(function (e) {
                          return Object(p.jsx)(
                            "li",
                            { children: e },
                            e.contentID
                          );
                        }),
                      }),
                    }),
                    Object(p.jsx)(ke.a, {
                      children: new Date(1e3 * e.date).toDateString("en-UK"),
                    }),
                    Object(p.jsx)(ke.a, {
                      children: Object(p.jsx)(b.a, {
                        color: "secondary",
                        onClick: c,
                        children: "Expand",
                      }),
                    }),
                    Object(p.jsxs)(oe.a, {
                      open: i,
                      onClose: s,
                      onClick: function () {
                        return c;
                      },
                      className: o.bigLessonWrapper,
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: e.title,
                        }),
                        Object(p.jsx)(y.a, { variant: "h4", children: "Date" }),
                        Object(p.jsx)(y.a, {
                          variant: "body1",
                          children: new Date(1e3 * e.date).toString(),
                        }),
                        Object(p.jsxs)("div", {
                          className: o.biglesson,
                          children: [
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              children: "Plan",
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "body1",
                              children: e.plan,
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              children: "Spec points",
                            }),
                            Object(p.jsx)("ul", {
                              children: e.specPoints.map(function (e) {
                                return Object(p.jsx)(
                                  "li",
                                  { children: e },
                                  e.contentID
                                );
                              }),
                            }),
                            l(),
                            Object(p.jsx)(b.a, {
                              onClick: s,
                              color: "primary",
                              variant: "contained",
                              children: "Close",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e._id
              );
            if (2 == e.level)
              return Object(p.jsxs)(
                Pe.a,
                {
                  hover: !0,
                  children: [
                    Object(p.jsx)(ke.a, {
                      component: "th",
                      scope: "row",
                      children: e.student,
                    }),
                    Object(p.jsx)(ke.a, {
                      component: "th",
                      scope: "row",
                      children: e.title,
                    }),
                    Object(p.jsx)(ke.a, {
                      children: Object(p.jsx)("ul", {
                        children: e.specPoints.map(function (e) {
                          return Object(p.jsx)(
                            "li",
                            { children: e },
                            e.contentID
                          );
                        }),
                      }),
                    }),
                    Object(p.jsx)(ke.a, {
                      children: Object(p.jsx)("ul", {
                        children: e.specPointsAchieved.map(function (e) {
                          return Object(p.jsx)(
                            "li",
                            { children: e },
                            e.contentID
                          );
                        }),
                      }),
                    }),
                    Object(p.jsx)(ke.a, {
                      children: new Date(1e3 * e.date).toDateString("en-UK"),
                    }),
                    Object(p.jsx)(ke.a, {
                      children: Object(p.jsx)(b.a, {
                        color: "secondary",
                        onClick: c,
                        children: "Expand",
                      }),
                    }),
                    Object(p.jsxs)(oe.a, {
                      open: i,
                      onClose: s,
                      onClick: function () {
                        return c;
                      },
                      className: o.bigLessonWrapper,
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: e.title,
                        }),
                        Object(p.jsx)(y.a, { variant: "h4", children: "Date" }),
                        Object(p.jsx)(y.a, {
                          variant: "body1",
                          children: new Date(1e3 * e.date).toString(),
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h4",
                          children: "Student",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body1",
                          children: e.student,
                        }),
                        Object(p.jsxs)("div", {
                          className: o.biglesson,
                          children: [
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              children: "Plan",
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "body1",
                              children: e.plan,
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              children: "Spec points",
                            }),
                            Object(p.jsx)("ul", {
                              children: e.specPoints.map(function (e) {
                                return Object(p.jsx)(
                                  "li",
                                  { children: e },
                                  e.contentID
                                );
                              }),
                            }),
                            l(),
                            Object(p.jsx)(b.a, {
                              onClick: s,
                              color: "primary",
                              variant: "contained",
                              children: "Close",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e._id
              );
          }
        },
        We = function (e) {
          var t = Object(a.useState)([]),
            n = Object(h.a)(t, 2),
            i = n[0],
            r = n[1],
            c = Object(a.useState)(window.innerWidth),
            s = Object(h.a)(c, 2),
            b = s[0],
            u = s[1],
            x = Object(a.useState)(!0),
            m = Object(h.a)(x, 2),
            f = m[0],
            g = m[1];
          Object(a.useEffect)(function () {
            y(),
              window.addEventListener("resize", function () {
                return u(window.innerWidth);
              });
          }, []);
          var y = (function () {
              var t = Object(l.a)(
                o.a.mark(function t() {
                  var n, a, i, c, s, l, d, h, j, b, u, p, x, m, O, f, y;
                  return o.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (
                            ((n = window.location.search),
                            (a = new URLSearchParams(n)),
                            (i = ""),
                            1 != e.level)
                          ) {
                            t.next = 10;
                            break;
                          }
                          return (t.next = 6), a.get("studentid");
                        case 6:
                          (t.t0 = t.sent),
                            (i =
                              "/accounts/getstudentlessons?studentid=" + t.t0),
                            (t.next = 15);
                          break;
                        case 10:
                          if (!(e.level >= 2)) {
                            t.next = 15;
                            break;
                          }
                          return (t.next = 13), a.get("tutorid");
                        case 13:
                          (t.t1 = t.sent),
                            (i = "/accounts/gettutorlessons?tutorid=" + t.t1);
                        case 15:
                          return (
                            (t.next = 17),
                            fetch(i, {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            })
                          );
                        case 17:
                          return (c = t.sent), (t.next = 20), c.json();
                        case 20:
                          (s = t.sent).sort(function (e, t) {
                            return e.datetime - t.datetime;
                          }),
                            (l = []),
                            (d = Object(ee.a)(s));
                          try {
                            for (d.s(); !(h = d.n()).done; ) {
                              (j = h.value),
                                (b = []),
                                (u = Object(ee.a)(j.specPoints));
                              try {
                                for (u.s(); !(p = u.n()).done; )
                                  (x = p.value), b.push(x.content);
                              } catch (o) {
                                u.e(o);
                              } finally {
                                u.f();
                              }
                              (m = []),
                                (O = Object(ee.a)(j.specPointsAchieved));
                              try {
                                for (O.s(); !(f = O.n()).done; )
                                  (y = f.value), m.push(y.content);
                              } catch (o) {
                                O.e(o);
                              } finally {
                                O.f();
                              }
                              l.push(
                                v(
                                  j._id,
                                  j.title,
                                  j.plan,
                                  b,
                                  j.report,
                                  m,
                                  j.date,
                                  j.student,
                                  j.tutor
                                )
                              );
                            }
                          } catch (o) {
                            d.e(o);
                          } finally {
                            d.f();
                          }
                          l.sort(function (e, t) {
                            return t.date - e.date;
                          }),
                            r(l),
                            g(!1);
                        case 28:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            v = function (e, t, n, a, i, r, c, s, o) {
              return {
                _id: e,
                title: t,
                plan: n,
                specPoints: a,
                report: i,
                specPointsAchieved: r,
                date: c,
                student: s,
                tutor: o,
              };
            },
            w = Object(j.a)(function (e) {
              return {
                table: Object(d.a)(
                  { minWidth: 650 },
                  e.breakpoints.down("sm"),
                  { minWidth: 0, overflow: "scroll" }
                ),
              };
            })();
          if (b < 1e3 || (b < 1300 && 2 == e.level)) {
            if (1 == e.level)
              return Object(p.jsxs)("div", {
                children: [
                  Object(p.jsx)(Ce.a, {
                    component: O.a,
                    children: Object(p.jsxs)(ve.a, {
                      className: w.table,
                      "aria-label": "simple table",
                      children: [
                        Object(p.jsx)(Se.a, {
                          children: Object(p.jsxs)(Pe.a, {
                            children: [
                              Object(p.jsx)(ke.a, { children: "Title" }),
                              Object(p.jsx)(ke.a, { children: "Expand" }),
                            ],
                          }),
                        }),
                        Object(p.jsx)(we.a, {
                          children: i.map(function (e) {
                            return Object(p.jsx)(Ie, {
                              id: e._id,
                              _id: e._id,
                              title: e.title,
                              plan: e.plan,
                              specPoints: e.specPoints,
                              specPointsAchieved: e.specPointsAchieved,
                              report: e.report,
                              date: e.date,
                              mobile: !0,
                              level: 1,
                            });
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)(he, { loading: f }),
                ],
              });
            if (2 == e.level)
              return Object(p.jsxs)("div", {
                children: [
                  Object(p.jsx)(Ce.a, {
                    component: O.a,
                    children: Object(p.jsxs)(ve.a, {
                      className: w.table,
                      "aria-label": "simple table",
                      children: [
                        Object(p.jsx)(Se.a, {
                          children: Object(p.jsxs)(Pe.a, {
                            children: [
                              Object(p.jsx)(ke.a, { children: "Title" }),
                              Object(p.jsx)(ke.a, { children: "Expand" }),
                            ],
                          }),
                        }),
                        Object(p.jsx)(we.a, {
                          children: i.map(function (e) {
                            return Object(p.jsx)(Ie, {
                              id: e._id,
                              _id: e._id,
                              title: e.title,
                              student: e.student,
                              plan: e.plan,
                              specPoints: e.specPoints,
                              specPointsAchieved: e.specPointsAchieved,
                              report: e.report,
                              date: e.date,
                              mobile: !0,
                              level: 2,
                            });
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)(he, { loading: f }),
                ],
              });
          } else {
            if (1 == e.level)
              return Object(p.jsxs)("div", {
                children: [
                  Object(p.jsx)(Ce.a, {
                    component: O.a,
                    children: Object(p.jsxs)(ve.a, {
                      className: w.table,
                      "aria-label": "simple table",
                      children: [
                        Object(p.jsx)(Se.a, {
                          children: Object(p.jsxs)(Pe.a, {
                            children: [
                              Object(p.jsx)(ke.a, { children: "Title" }),
                              Object(p.jsx)(ke.a, {
                                children: "Specification Points",
                              }),
                              Object(p.jsx)(ke.a, {
                                children: "Achieved Specification Points",
                              }),
                              Object(p.jsx)(ke.a, {
                                style: { width: 150 },
                                children: "Date",
                              }),
                              Object(p.jsx)(ke.a, { children: "Expand" }),
                            ],
                          }),
                        }),
                        Object(p.jsx)(we.a, {
                          children: i.map(function (e) {
                            return Object(p.jsx)(Ie, {
                              id: e._id,
                              _id: e._id,
                              title: e.title,
                              plan: e.plan,
                              specPoints: e.specPoints,
                              specPointsAchieved: e.specPointsAchieved,
                              report: e.report,
                              date: e.date,
                              mobile: !1,
                              level: 1,
                            });
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)(he, { loading: f }),
                ],
              });
            if (2 == e.level)
              return (
                console.log("Hello"),
                Object(p.jsxs)("div", {
                  children: [
                    Object(p.jsx)(Ce.a, {
                      component: O.a,
                      children: Object(p.jsxs)(ve.a, {
                        className: w.table,
                        "aria-label": "simple table",
                        children: [
                          Object(p.jsx)(Se.a, {
                            children: Object(p.jsxs)(Pe.a, {
                              children: [
                                Object(p.jsx)(ke.a, { children: "Student" }),
                                Object(p.jsx)(ke.a, { children: "Title" }),
                                Object(p.jsx)(ke.a, {
                                  children: "Specification Points",
                                }),
                                Object(p.jsx)(ke.a, {
                                  children: "Achieved Specification Points",
                                }),
                                Object(p.jsx)(ke.a, {
                                  style: { width: 150 },
                                  children: "Date",
                                }),
                                Object(p.jsx)(ke.a, { children: "Expand" }),
                              ],
                            }),
                          }),
                          Object(p.jsx)(we.a, {
                            children: i.map(function (e) {
                              return Object(p.jsx)(Ie, {
                                id: e._id,
                                _id: e._id,
                                student: e.student,
                                title: e.title,
                                plan: e.plan,
                                specPoints: e.specPoints,
                                specPointsAchieved: e.specPointsAchieved,
                                report: e.report,
                                date: e.date,
                                mobile: !1,
                                level: 2,
                              });
                            }),
                          }),
                        ],
                      }),
                    }),
                    Object(p.jsx)(he, { loading: f }),
                  ],
                })
              );
          }
        },
        Te = function () {
          var e = window.location.search,
            t = new URLSearchParams(e),
            n = Object(j.a)(function (e) {
              return {
                studentNameWrapper: { flex: 1 },
                studentNameText: { textAlign: "center" },
                paper: {
                  margin: 5,
                  textAlign: "center",
                  height: 350,
                  borderRadius: 10,
                },
                cardsWrapper: {
                  width: "90%",
                  marginLeft: "5%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                },
                cardContent: {
                  flex: 5,
                  display: "flex",
                  flexDirection: "column",
                },
                cardAction: {
                  width: "50%",
                  marginLeft: "25%",
                  marginBottom: 10,
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                },
                button: { marginLeft: 5, marginRight: 5 },
                content: Object(d.a)(
                  {
                    flexGrow: 1,
                    backgroundColor: e.palette.background.default,
                    padding: e.spacing(3),
                    marginTop: 50,
                  },
                  e.breakpoints.down("sm"),
                  { padding: 5, paddingTop: 10 }
                ),
              };
            }),
            i = Object(a.useState)({ empty: !0 }),
            r = Object(h.a)(i, 2),
            c = r[0],
            s = r[1],
            b = Object(a.useState)(0),
            u = Object(h.a)(b, 2),
            x = u[0],
            m = u[1],
            O = Object(a.useState)(""),
            f = Object(h.a)(O, 2),
            g = f[0],
            v = f[1];
          Object(a.useEffect)(function () {
            k();
          }, []);
          var w = function (e) {
              m(e);
            },
            k = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var n, a, i, r, c;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/accounts/auth", {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            })
                          );
                        case 2:
                          return (n = e.sent), (e.next = 5), n.json();
                        case 5:
                          if (
                            1 != (a = e.sent).level ||
                            t.get("studentid") == a.id
                          ) {
                            e.next = 10;
                            break;
                          }
                          (document.location.href =
                            "studentdashboard?studentid=" + a.id),
                            (e.next = 18);
                          break;
                        case 10:
                          if (2 != a.level) {
                            e.next = 18;
                            break;
                          }
                          return (
                            (e.next = 13),
                            fetch(
                              "/accounts/tutorstudent?studentid=" +
                                t.get("studentid"),
                              {
                                method: "GET",
                                headers: {
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                                },
                                credentials: "include",
                              }
                            )
                          );
                        case 13:
                          return (i = e.sent), (e.next = 16), i.json();
                        case 16:
                          0 == e.sent.contains &&
                            (document.location.href =
                              "tutordashboard?tutorid=" + a.id);
                        case 18:
                          if (1 != a.level) {
                            e.next = 22;
                            break;
                          }
                          v(a.name), (e.next = 30);
                          break;
                        case 22:
                          if (!(a.level >= 2)) {
                            e.next = 30;
                            break;
                          }
                          return (
                            (e.next = 25),
                            fetch(
                              "/accounts/getname?studentid=" +
                                t.get("studentid"),
                              {
                                method: "GET",
                                headers: {
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                                },
                                credentials: "include",
                              }
                            )
                          );
                        case 25:
                          return (r = e.sent), (e.next = 28), r.json();
                        case 28:
                          (c = e.sent), v(c.name);
                        case 30:
                          s(a);
                        case 31:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            C = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/accounts/logout", {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            })
                          );
                        case 2:
                          return (t = e.sent), (e.next = 5), t.json();
                        case 5:
                          e.sent,
                            (document.location.href = "/"),
                            (document.cookie = "");
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            S = n();
          if (!(c.level < 1))
            return 1 == c.level
              ? Object(p.jsxs)("div", {
                  className: "App",
                  children: [
                    Object(p.jsx)(Q, { changeState: w, level: 1, logout: C }),
                    Object(p.jsxs)("div", {
                      className: S.content,
                      children: [
                        Object(p.jsx)("div", {
                          className: S.studentNameWrapper,
                          children: Object(p.jsx)(y.a, {
                            variant: "h1",
                            children: g,
                          }),
                        }),
                        0 === x
                          ? Object(p.jsx)(xe, {
                              level: c.level,
                              changeState: m,
                            })
                          : Object(p.jsx)("div", {}),
                        1 === x
                          ? Object(p.jsx)(We, { level: 1 })
                          : Object(p.jsx)("div", {}),
                        2 === x
                          ? Object(p.jsx)(Ae, { level: c.level })
                          : Object(p.jsx)("div", {}),
                      ],
                    }),
                  ],
                })
              : c.level >= 2
              ? Object(p.jsxs)("div", {
                  className: "App",
                  children: [
                    Object(p.jsx)(Q, { changeState: w, level: 2, logout: C }),
                    Object(p.jsxs)("div", {
                      className: S.content,
                      children: [
                        Object(p.jsx)("div", {
                          className: S.studentNameWrapper,
                          children: Object(p.jsx)(y.a, {
                            variant: "h1",
                            children: g,
                          }),
                        }),
                        0 === x
                          ? Object(p.jsx)(xe, {
                              level: c.level,
                              changeState: m,
                            })
                          : Object(p.jsx)("div", {}),
                        1 === x
                          ? Object(p.jsx)(We, { level: 1 })
                          : Object(p.jsx)("div", {}),
                        2 === x
                          ? Object(p.jsx)(Ae, { level: c.level })
                          : Object(p.jsx)("div", {}),
                        3 === x
                          ? Object(p.jsx)(se, { level: c.level })
                          : Object(p.jsx)("div", {}),
                        4 === x
                          ? Object(p.jsx)(ye, { level: c.level })
                          : Object(p.jsx)("div", {}),
                      ],
                    }),
                  ],
                })
              : Object(p.jsx)("div", {});
          document.location.href = "/login";
        },
        Ne = function (e) {
          var t = Object(j.a)(function (e) {
            return { studentCard: { cursor: "pointer" } };
          })();
          return Object(p.jsx)(
            O.a,
            {
              className: t.studentCard,
              onClick: function () {
                return (
                  (t = e.id),
                  void (document.location.href =
                    "studentdashboard?studentid=" + t)
                );
                var t;
              },
              children: Object(p.jsxs)(y.a, {
                variant: "h2",
                children: [e.firstname, " ", e.surname],
              }),
            },
            e.id
          );
        },
        Re = function (e) {
          var t = Object(a.useState)([]),
            n = Object(h.a)(t, 2),
            i = n[0],
            r = n[1];
          Object(a.useEffect)(function () {
            b();
          }, []);
          var c = window.location.search,
            s = new URLSearchParams(c),
            b = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, n;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch(
                              "/accounts/gettutorstudents?tutorid=" +
                                s.get("tutorid"),
                              {
                                method: "GET",
                                headers: {
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                                },
                                credentials: "include",
                              }
                            )
                          );
                        case 2:
                          return (t = e.sent), (e.next = 5), t.json();
                        case 5:
                          (n = e.sent), console.log(n);
                          try {
                            r(n.students);
                          } catch (a) {}
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            u = Object(j.a)(function (e) {
              return {
                studentListWrapper: Object(d.a)(
                  { display: "flex", flexDirection: "column", width: "50%" },
                  e.breakpoints.down("sm"),
                  { width: "90%" }
                ),
              };
            })();
          return Object(p.jsx)("div", {
            className: u.studentListWrapper,
            children: i.map(function (e) {
              return Object(p.jsx)(Ne, {
                firstname: e.firstname,
                surname: e.surname,
                id: e._id,
              });
            }),
          });
        },
        De = function () {
          var e = window.location.search,
            t = new URLSearchParams(e),
            n = Object(j.a)(function (e) {
              return {
                studentNameWrapper: { flex: 1 },
                studentNameText: { textAlign: "center" },
                paper: {
                  margin: 5,
                  textAlign: "center",
                  height: 350,
                  borderRadius: 10,
                },
                cardsWrapper: {
                  width: "90%",
                  marginLeft: "5%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                },
                cardContent: {
                  flex: 5,
                  display: "flex",
                  flexDirection: "column",
                },
                cardAction: {
                  width: "50%",
                  marginLeft: "25%",
                  marginBottom: 10,
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                },
                button: { marginLeft: 5, marginRight: 5 },
                content: {
                  flexGrow: 1,
                  backgroundColor: e.palette.background.default,
                  padding: e.spacing(3),
                  marginTop: 50,
                },
                componentWrapper: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              };
            }),
            i = Object(a.useState)({ empty: !0 }),
            r = Object(h.a)(i, 2),
            c = r[0],
            s = r[1],
            d = Object(a.useState)(0),
            b = Object(h.a)(d, 2),
            u = b[0],
            x = b[1],
            m = Object(a.useState)(""),
            O = Object(h.a)(m, 2),
            f = O[0],
            g = O[1];
          Object(a.useEffect)(function () {
            v();
          }, []);
          var v = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var n, a, i, r;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/accounts/auth", {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            })
                          );
                        case 2:
                          return (n = e.sent), (e.next = 5), n.json();
                        case 5:
                          if (
                            ((a = e.sent).level >= 2 && t.get("tutorid") != a.id
                              ? (document.location.href =
                                  "tutordashboard?tutorid=" + a.id)
                              : 1 == a.level &&
                                t.get("studentid") != a.id &&
                                (document.location.href =
                                  "studentdashboard?studentid=" + a.id),
                            2 != a.level)
                          ) {
                            e.next = 11;
                            break;
                          }
                          g(a.name), (e.next = 18);
                          break;
                        case 11:
                          return (
                            (e.next = 13),
                            fetch(
                              "/accounts/getname?tutorid=" + t.get("tutorid"),
                              {
                                method: "GET",
                                headers: {
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                                },
                                credentials: "include",
                              }
                            )
                          );
                        case 13:
                          return (i = e.sent), (e.next = 16), i.json();
                        case 16:
                          (r = e.sent), g(r.name);
                        case 18:
                          s(a);
                        case 19:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            w = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/accounts/logout", {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            })
                          );
                        case 2:
                          return (t = e.sent), (e.next = 5), t.json();
                        case 5:
                          e.sent,
                            (document.location.href = "/"),
                            (document.cookie = "");
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            k = n();
          if (!(c.level <= 1))
            return c.level >= 2
              ? Object(p.jsxs)("div", {
                  className: "App",
                  children: [
                    Object(p.jsx)(Q, { changeState: x, level: 3, logout: w }),
                    Object(p.jsxs)("div", {
                      className: k.content,
                      children: [
                        Object(p.jsx)("div", {
                          className: k.studentNameWrapper,
                          children: Object(p.jsx)(y.a, {
                            variant: "h1",
                            children: f,
                          }),
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsxs)("div", {
                          className: k.componentWrapper,
                          children: [
                            0 === u
                              ? Object(p.jsx)(Re, { level: c.level })
                              : Object(p.jsx)("div", {}),
                            1 === u
                              ? Object(p.jsx)(We, { level: 2 })
                              : Object(p.jsx)("div", {}),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : Object(p.jsx)("div", {});
          document.location.href = "/login";
        },
        Le = function () {
          var e = Object(j.a)(function (e) {
            return {
              paper: {
                margin: 5,
                textAlign: "center",
                height: "auto",
                borderRadius: 10,
              },
              smallBox: Object(d.a)(
                {
                  display: "flex",
                  marginLeft: 25,
                  marginRight: 25,
                  justifyContent: "space-between",
                },
                e.breakpoints.down("sm"),
                { marginLeft: 10, marginRight: 10 }
              ),
            };
          })();
          return Object(p.jsxs)(te.a, {
            container: !0,
            children: [
              Object(p.jsx)(te.a, {
                item: !0,
                lg: 4,
                md: 6,
                sm: 12,
                xs: 12,
                children: Object(p.jsxs)(O.a, {
                  className: e.paper,
                  elevation: 3,
                  children: [
                    Object(p.jsx)(y.a, {
                      variant: "h2",
                      children: "Company Overview",
                    }),
                    Object(p.jsx)("br", {}),
                    Object(p.jsxs)(m.a, {
                      className: e.smallBox,
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h4",
                          children: "Total students:",
                        }),
                        Object(p.jsx)(y.a, { variant: "h4", children: "10" }),
                      ],
                    }),
                    Object(p.jsxs)(m.a, {
                      className: e.smallBox,
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h4",
                          children: "Revenue:",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h4",
                          children: "\xa310",
                        }),
                      ],
                    }),
                    Object(p.jsxs)(m.a, {
                      className: e.smallBox,
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h4",
                          children: "Avg Feedback:",
                        }),
                        Object(p.jsx)(y.a, { variant: "h4", children: "100%" }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(p.jsx)(te.a, {
                item: !0,
                lg: 4,
                md: 6,
                sm: 12,
                xs: 12,
                children: Object(p.jsxs)(O.a, {
                  className: e.paper,
                  elevation: 3,
                  children: [
                    Object(p.jsx)(y.a, {
                      variant: "h2",
                      children: "Your teaching",
                    }),
                    Object(p.jsxs)(m.a, {
                      className: e.smallBox,
                      style: { flexDirection: "column" },
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h4",
                          align: "left",
                          children: "Latest lesson:",
                        }),
                        Object(p.jsx)(je, { level: 3 }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(p.jsx)(te.a, {
                item: !0,
                lg: 4,
                md: 6,
                sm: 12,
                xs: 12,
                children: Object(p.jsx)(O.a, {
                  className: e.paper,
                  elevation: 3,
                  children: Object(p.jsx)(y.a, {
                    variant: "h2",
                    children: "idk what to put here",
                  }),
                }),
              }),
            ],
          });
        },
        Ye = function () {
          var e = Object(a.useState)([]),
            t = Object(h.a)(e, 2),
            n = t[0],
            i = t[1],
            r = Object(a.useState)(window.innerWidth),
            c = Object(h.a)(r, 2),
            s = (c[0], c[1]),
            b = Object(a.useState)(!0),
            u = Object(h.a)(b, 2),
            x = u[0],
            m = u[1];
          Object(a.useEffect)(function () {
            f(),
              window.addEventListener("resize", function () {
                return s(window.innerWidth);
              });
          }, []);
          var f = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, n, a, r, c, s, l, d, h, j, b;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (t = window.location.search),
                            new URLSearchParams(t),
                            (e.next = 4),
                            fetch("/admin/getstudents", {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            })
                          );
                        case 4:
                          return (n = e.sent), (e.next = 7), n.json();
                        case 7:
                          (a = e.sent), (r = []), (c = Object(ee.a)(a));
                          try {
                            for (c.s(); !(s = c.n()).done; ) {
                              (l = s.value),
                                (d = []),
                                console.log(l.subjects),
                                (h = Object(ee.a)(l.subjects));
                              try {
                                for (h.s(); !(j = h.n()).done; )
                                  (b = j.value), d.push(b.specificationName);
                              } catch (o) {
                                h.e(o);
                              } finally {
                                h.f();
                              }
                              r.push(
                                g(
                                  l._id,
                                  l.name,
                                  l.tutor,
                                  l.tutorid,
                                  d,
                                  l.remainingHours,
                                  l.hours
                                )
                              );
                            }
                          } catch (o) {
                            c.e(o);
                          } finally {
                            c.f();
                          }
                          i(r), m(!1);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            g = function (e, t, n, a, i, r, c) {
              return {
                _id: e,
                name: t,
                tutor: n,
                tutorid: a,
                subjects: i,
                remainingHours: r,
                hours: c,
              };
            },
            y = Object(j.a)(function (e) {
              return {
                table: Object(d.a)(
                  { minWidth: 650 },
                  e.breakpoints.down("sm"),
                  { minWidth: 0, overflow: "scroll" }
                ),
              };
            })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(Ce.a, {
                component: O.a,
                children: Object(p.jsxs)(ve.a, {
                  className: y.table,
                  "aria-label": "simple table",
                  children: [
                    Object(p.jsx)(Se.a, {
                      children: Object(p.jsxs)(Pe.a, {
                        children: [
                          Object(p.jsx)(ke.a, { children: "Name" }),
                          Object(p.jsx)(ke.a, { children: "Tutor" }),
                          Object(p.jsx)(ke.a, { children: "Subject(s)" }),
                          Object(p.jsx)(ke.a, { children: "Hours left" }),
                          Object(p.jsx)(ke.a, { children: "Total hours" }),
                        ],
                      }),
                    }),
                    Object(p.jsx)(we.a, {
                      children: n.map(function (e) {
                        return Object(p.jsxs)(
                          Pe.a,
                          {
                            hover: !0,
                            children: [
                              Object(p.jsx)(ke.a, {
                                component: "th",
                                scope: "row",
                                children: e.name,
                              }),
                              Object(p.jsx)(ke.a, { children: e.tutor }),
                              Object(p.jsx)(ke.a, {
                                children: Object(p.jsx)("ul", {
                                  children: e.subjects.map(function (e) {
                                    return Object(p.jsx)("li", { children: e });
                                  }),
                                }),
                              }),
                              Object(p.jsx)(ke.a, {
                                children: e.remainingHours,
                              }),
                              Object(p.jsx)(ke.a, { children: e.hours }),
                            ],
                          },
                          e._id
                        );
                      }),
                    }),
                  ],
                }),
              }),
              Object(p.jsx)(he, { loading: x }),
            ],
          });
        },
        Ee = function () {
          var e = window.location.search,
            t = new URLSearchParams(e),
            n = Object(a.useState)({ empty: !0 }),
            i = Object(h.a)(n, 2),
            r = i[0],
            c = i[1],
            s = Object(a.useState)(0),
            d = Object(h.a)(s, 2),
            b = d[0],
            u = d[1],
            x = Object(a.useState)(),
            m = Object(h.a)(x, 2),
            O = m[0],
            f = m[1];
          Object(a.useEffect)(function () {
            g();
          }, []);
          var g = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var n, a, i, r;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/accounts/auth", {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            })
                          );
                        case 2:
                          return (n = e.sent), (e.next = 5), n.json();
                        case 5:
                          if (
                            (2 == (a = e.sent).level
                              ? (document.location.href =
                                  "tutordashboard?tutorid=" + a.id)
                              : 1 == a.level &&
                                (document.location.href =
                                  "studentdashboard?studentid=" + a.id),
                            3 != a.level)
                          ) {
                            e.next = 12;
                            break;
                          }
                          t.get("managerid") != a.id &&
                            (document.location.href =
                              "managerdashboard?managerid=" + a.id),
                            f(a.name),
                            (e.next = 19);
                          break;
                        case 12:
                          return (
                            (e.next = 14),
                            fetch(
                              "/accounts/getname?tutorid=" + t.get("tutorid"),
                              {
                                method: "GET",
                                headers: {
                                  Accept: "application/json",
                                  "Content-Type": "application/json",
                                },
                                credentials: "include",
                              }
                            )
                          );
                        case 14:
                          return (i = e.sent), (e.next = 17), i.json();
                        case 17:
                          (r = e.sent), f(r.name);
                        case 19:
                          c(a);
                        case 20:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            v = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch("/accounts/logout", {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            })
                          );
                        case 2:
                          return (t = e.sent), (e.next = 5), t.json();
                        case 5:
                          e.sent,
                            (document.location.href = "/"),
                            (document.cookie = "");
                        case 8:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            w = Object(j.a)(function (e) {
              return {
                content: {
                  flexGrow: 1,
                  backgroundColor: e.palette.background.default,
                  padding: e.spacing(3),
                  marginTop: 50,
                },
                componentWrapper: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                studentNameWrapper: { flex: 1 },
              };
            })();
          if (!(r.level < 3))
            return Object(p.jsxs)("div", {
              className: "App",
              children: [
                Object(p.jsx)(Q, { changeState: u, level: 4, logout: v }),
                Object(p.jsxs)("div", {
                  className: w.content,
                  children: [
                    Object(p.jsx)("div", {
                      className: w.studentNameWrapper,
                      children: Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: O,
                      }),
                    }),
                    Object(p.jsx)("br", {}),
                    Object(p.jsxs)("div", {
                      className: w.componentWrapper,
                      children: [
                        0 === b
                          ? Object(p.jsx)(Le, {})
                          : Object(p.jsx)("div", {}),
                        1 === b
                          ? Object(p.jsx)(Ye, {})
                          : Object(p.jsx)("div", {}),
                      ],
                    }),
                  ],
                }),
              ],
            });
          document.location.href = "/login";
        },
        Fe = n(169),
        Be = n(45),
        Me = n.n(Be),
        Ge = (n(228), n(170)),
        Ue = n.n(Ge),
        _e = n(73),
        qe = n.n(_e),
        ze = n(74),
        He = n.n(ze),
        Xe = n(132),
        Je = n.n(Xe),
        Ve = n(102),
        Ke = n.n(Ve),
        Ze = n(103),
        Qe = n.n(Ze),
        $e = n(104),
        et = n.n($e),
        tt = n.p + "static/media/TransparentLogo.98677516.png",
        nt = n(330),
        at = n.p + "static/media/logo.5fcce2a6.png",
        it = function (e) {
          var t = Object(a.useState)(window.innerWidth),
            n = Object(h.a)(t, 2),
            i = n[0],
            r = n[1],
            c = Object(a.useState)(!1),
            s = Object(h.a)(c, 2),
            o = s[0],
            l = s[1];
          Object(a.useEffect)(function () {
            window.addEventListener("resize", function () {
              return r(window.innerWidth);
            });
          }, []);
          var d = function () {
              l(!0);
            },
            u = Object(j.a)(function (e) {
              return {
                list: { display: "flex", float: "right" },
                listItem: { marginLeft: 10, marginRight: 10 },
                drawerPaper: { width: "100%" },
                drawerItem: {
                  width: i / 1.5,
                  marginTop: 20,
                  marginButtom: 20,
                  marginLeft: 10,
                  marginRight: 10,
                  color: "#bbbbbb",
                },
                paper: { background: e.palette.grey.main },
                appbarLogo: {
                  width: 50,
                  height: 50,
                  marginRight: 10,
                  backgroundImage: "url(".concat(at, ")"),
                  backgroundSize: "contain",
                },
              };
            })();
          return i < 850
            ? Object(p.jsx)(M.a, {
                position: "fixed",
                className: u.appBar,
                style: { position: "fixed !important" },
                children: Object(p.jsxs)(G.a, {
                  style: { display: "flex", justifyContent: "space-between" },
                  children: [
                    Object(p.jsxs)("div", {
                      style: { display: "flex" },
                      children: [
                        Object(p.jsx)("div", { className: u.appbarLogo }),
                        Object(p.jsx)("div", {
                          style: { cursor: "pointer" },
                          onClick: function () {
                            return (document.location.href = "/");
                          },
                          children: Object(p.jsx)(y.a, {
                            variant: "h3",
                            children: "Real Tutor",
                          }),
                        }),
                      ],
                    }),
                    Object(p.jsx)(T.a, {
                      onClick: d,
                      children: Object(p.jsx)(W.a, { color: "secondary" }),
                    }),
                    Object(p.jsxs)(nt.a, {
                      open: o,
                      onClose: function () {
                        l(!1);
                      },
                      onOpen: d,
                      disableRestoreFocus: !0,
                      classes: { paper: u.paper },
                      children: [
                        Object(p.jsx)(b.a, {
                          className: u.drawerItem,
                          onClick: function () {
                            return (document.location.href = "/");
                          },
                          children: "Home",
                        }),
                        Object(p.jsx)(b.a, {
                          className: u.drawerItem,
                          onClick: function () {
                            return (document.location.href = "/how-it-works");
                          },
                          children: "How it works",
                        }),
                        Object(p.jsx)(b.a, {
                          className: u.drawerItem,
                          onClick: function () {
                            return (document.location.href = "/subjects");
                          },
                          children: "Subjects",
                        }),
                        Object(p.jsx)(b.a, {
                          className: u.drawerItem,
                          onClick: function () {
                            return (document.location.href = "/team");
                          },
                          children: "Our Team",
                        }),
                        Object(p.jsx)(b.a, {
                          className: u.drawerItem,
                          onClick: function () {
                            return (document.location.href = "/contactus");
                          },
                          children: "Contact Us",
                        }),
                        Object(p.jsx)(b.a, {
                          className: u.drawerItem,
                          onClick: function () {
                            return (document.location.href = "/login");
                          },
                          children: "Login",
                        }),
                      ],
                    }),
                  ],
                }),
              })
            : Object(p.jsx)(M.a, {
                position: "fixed",
                className: u.appBar,
                children: Object(p.jsxs)(G.a, {
                  style: { display: "flex", justifyContent: "space-between" },
                  children: [
                    Object(p.jsxs)("div", {
                      style: { display: "flex" },
                      children: [
                        Object(p.jsx)("div", { className: u.appbarLogo }),
                        Object(p.jsx)("div", {
                          style: { cursor: "pointer" },
                          onClick: function () {
                            return (document.location.href = "/");
                          },
                          children: Object(p.jsx)(y.a, {
                            variant: "h3",
                            children: "Real Tutor",
                          }),
                        }),
                      ],
                    }),
                    Object(p.jsxs)(C.a, {
                      className: u.list,
                      children: [
                        Object(p.jsx)(b.a, {
                          color: "secondary",
                          className: u.listItem,
                          onClick: function () {
                            return (document.location.href = "/how-it-works");
                          },
                          children: "How it works",
                        }),
                        Object(p.jsx)(b.a, {
                          color: "secondary",
                          className: u.listItem,
                          onClick: function () {
                            return (document.location.href = "/subjects");
                          },
                          children: "Subjects",
                        }),
                        Object(p.jsx)(b.a, {
                          color: "secondary",
                          className: u.listItem,
                          onClick: function () {
                            return (document.location.href = "/team");
                          },
                          children: "Our Team",
                        }),
                        Object(p.jsx)(b.a, {
                          variant: "contained",
                          color: "secondary",
                          className: u.listItem,
                          onClick: function () {
                            return (document.location.href = "/contactus");
                          },
                          children: "Contact Us",
                        }),
                        Object(p.jsx)(b.a, {
                          variant: "outlined",
                          color: "secondary",
                          className: u.listItem,
                          onClick: function () {
                            return (document.location.href = "/login");
                          },
                          children: "Login",
                        }),
                      ],
                    }),
                  ],
                }),
              });
        },
        rt = n.p + "static/media/SmallBanner.f16a89fc.jpeg",
        ct = (n.p, n.p + "static/media/BannerWithoutLogo.93c911d9.jpg"),
        st = n.p + "static/media/TransparentWhiteText.e46ff9dc.png",
        ot = n(175),
        lt = function (e) {
          var t = Object(a.useState)(!1),
            n = Object(h.a)(t, 2),
            i = (n[0], n[1]),
            r = Object(a.useState)(800),
            c = Object(h.a)(r, 2),
            s = c[0],
            o = c[1],
            l = Object(a.useState)(window.innerWidth),
            b = Object(h.a)(l, 2),
            u = b[0],
            x = b[1],
            m = function () {
              x(window.innerWidth);
            };
          Object(a.useEffect)(function () {
            e.small && o(600),
              setTimeout(function () {
                i(!0);
              }, 1e3),
              window.addEventListener("resize", m);
          }, []);
          var O = Object(j.a)(function (t) {
            var n, a;
            return {
              banner:
                ((n = {
                  width: "100%",
                  height: s,
                  backgroundImage: "url(".concat(f, ")"),
                  backgroundSize: "cover",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  backgroundPositionX: "right",
                  backgroundPositionY: "center",
                  justifyContent: e.mainpage ? "start" : "center",
                  alignItems: "center",
                  backgroundRepeat: "no-repeat",
                }),
                Object(d.a)(n, t.breakpoints.down("md"), {
                  height: 725,
                  backgroundImage: "url(".concat(rt, ")"),
                  backgroundPositionX: "center",
                  justifyContent: e.mainpage ? "start" : "flex-end",
                }),
                Object(d.a)(n, t.breakpoints.down("xs"), {
                  height: e.mainpage ? 500 : s,
                  backgroundImage: "url(".concat(ct, ")"),
                  backgroundSize: "cover",
                  backgroundPositionY: 0,
                }),
                n),
              name: {
                width: "80%",
                marginLeft: "10%",
                marginTop: 75,
                height: 200,
              },
              centeredWrapper:
                ((a = {
                  width: "80%",
                  marginLeft: "10%",
                  position: "absolute",
                  bottom: 100,
                }),
                Object(d.a)(a, t.breakpoints.down("sm"), {
                  width: "80%",
                  marginLeft: "10%",
                  bottom: 50,
                }),
                Object(d.a)(a, t.breakpoints.down("xs"), {
                  width: "100%",
                  marginLeft: 0,
                  bottom: 100,
                }),
                a),
              titles: {},
              spacer: { width: "100%", height: 500 },
              logoMobile: { width: "100%" },
            };
          })();
          return e.mainpage
            ? Object(p.jsxs)("div", {
                className: O.banner,
                style: { height: 800 },
                children: [
                  Object(p.jsxs)("div", {
                    className: O.name,
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        style: { color: "#FAFAFA" },
                        children: Object(p.jsxs)(ot.a, {
                          interval: 4e3,
                          noWrap: !1,
                          children: [
                            Object(p.jsx)("span", {
                              children:
                                "Covid stole your education. We're here to give it back.",
                            }),
                            Object(p.jsx)("span", {
                              children: "We are the future of online learning.",
                            }),
                            Object(p.jsx)("span", {
                              children: "Results within 2 sessions.",
                            }),
                          ],
                        }),
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  u < 601
                    ? Object(p.jsxs)("div", {
                        style: {
                          width: "100%",
                          height: "50%",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        },
                        children: [
                          Object(p.jsx)("img", {
                            src: st,
                            className: O.logoMobile,
                          }),
                          Object(p.jsxs)("div", {
                            className: O.centeredWrapper,
                            children: [
                              Object(p.jsx)(y.a, {
                                variant: "h3",
                                align: "center",
                                style: { color: "#FAFAFA" },
                                children: "\xa320 an hour (GCSE)",
                              }),
                              Object(p.jsx)(y.a, {
                                variant: "h3",
                                align: "center",
                                style: { color: "#FAFAFA" },
                                children: "\xa330 an hour (A-level)",
                              }),
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                align: "center",
                                style: { color: "#FAFAFA" },
                                children: "The future is online.",
                              }),
                            ],
                          }),
                        ],
                      })
                    : Object(p.jsx)(Me.a, {
                        right: !0,
                        duration: 3e3,
                        children: Object(p.jsxs)("div", {
                          className: O.centeredWrapper,
                          children: [
                            Object(p.jsx)(y.a, {
                              variant: "h2",
                              style: { color: "#FAFAFA" },
                              children: "\xa320 an hour (GCSE)",
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h2",
                              style: { color: "#FAFAFA" },
                              children: "\xa330 an hour (A-level)",
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h3",
                              style: { color: "#FAFAFA" },
                              children: "The future is online.",
                            }),
                          ],
                        }),
                      }),
                ],
              })
            : Object(p.jsxs)("div", {
                className: O.banner,
                children: [
                  u < 601
                    ? Object(p.jsx)("div", {
                        style: {
                          width: "100%",
                          height: "75%",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                        },
                        children: Object(p.jsx)("img", {
                          src: st,
                          className: O.logoMobile,
                        }),
                      })
                    : Object(p.jsx)("div", {}),
                  Object(p.jsxs)("div", {
                    className: O.titles,
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        align: "center",
                        style: { color: "#FAFAFA" },
                        children: e.title,
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        align: "center",
                        style: { color: "#FAFAFA" },
                        children: e.subtitle,
                      }),
                    ],
                  }),
                ],
              });
        },
        dt = function (e) {
          var t = Object(j.a)(function (e) {
            var t;
            return {
              subjectCard:
                ((t = {}),
                Object(d.a)(t, e.breakpoints.down("xs"), { height: 100 }),
                Object(d.a)(t, e.breakpoints.down("md"), { height: 150 }),
                Object(d.a)(t, "height", 200),
                Object(d.a)(t, "width", "100%"),
                Object(d.a)(t, "display", "flex"),
                Object(d.a)(t, "justifyContent", "center"),
                Object(d.a)(t, "alignItems", "center"),
                Object(d.a)(t, "cursor", "pointer"),
                Object(d.a)(t, "transition", "all 200ms"),
                Object(d.a)(t, "&:hover", {
                  transform: "translateY(-3px) scale(1.1)",
                }),
                t),
            };
          })();
          return Object(p.jsx)(te.a, {
            item: !0,
            lg: 3,
            md: 4,
            sm: 6,
            xs: 12,
            onClick: e.onClick,
            children: Object(p.jsx)(O.a, {
              className: t.subjectCard,
              elevation: 4,
              children: Object(p.jsx)(y.a, {
                variant: "h4",
                align: "center",
                children: e.title,
              }),
            }),
          });
        },
        ht = function (e) {
          var t = Object(a.useState)(600),
            n = Object(h.a)(t, 2),
            i = n[0],
            r = n[1],
            c = Object(a.useState)(window.innerHeight),
            s = Object(h.a)(c, 2),
            o = (s[0], s[1]),
            l = function () {
              o(window.innerHeight);
            };
          Object(a.useEffect)(function () {
            e.small
              ? r(600)
              : e.medium
              ? r(800)
              : e.large
              ? r(1e3)
              : r("100vh"),
              window.addEventListener("resize", l);
          }, []);
          var b = Object(j.a)(function (t) {
              return {
                sectionPaper: Object(d.a)(
                  {
                    width: e.narrow ? "60%" : "80%",
                    height: "97.5%",
                    marginTop: "1.25%",
                    marginBottom: "1.25%",
                    marginLeft: e.narrow ? "20%" : "10%",
                    marginRight: e.narrow ? "20%" : "10%",
                    display: "flex",
                    paddingTop: 20,
                    paddingLeft: 20,
                    paddingBottom: 20,
                    paddingRight: 20,
                    justifyContent: "space-between",
                  },
                  t.breakpoints.down("md"),
                  {
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "90%",
                    marginLeft: "5%",
                    marginRight: "5%",
                  }
                ),
                smallSection: Object(d.a)(
                  {
                    width: "100%",
                    display: "flex",
                    height: e.auto ? "auto" : i,
                    backgroundPositionY: e.offsetY,
                    backgroundImage: e.backgroundimage,
                  },
                  t.breakpoints.down("sm"),
                  { height: "auto" }
                ),
                offwhite: { backgroundColor: t.palette.offWhite.main },
                lightteal: { backgroundColor: t.palette.lightTeal.main },
                lightblue: { backgroundColor: t.palette.lightBlue.main },
                grey: { backgroundColor: t.palette.grey.main },
                alignCenter: { alignItems: "center" },
                column: { flexDirection: "column" },
              };
            })(),
            u = Object(w.a)(b.smallSection),
            x = Object(w.a)(b.sectionPaper);
          return (
            "offwhite" == e.background
              ? (u = Object(w.a)(b.smallSection, b.offwhite))
              : "lightteal" == e.background
              ? (u = Object(w.a)(b.smallSection, b.lightteal))
              : "lightblue" == e.background
              ? (u = Object(w.a)(b.smallSection, b.lightblue))
              : "grey" == e.background &&
                (u = Object(w.a)(b.smallSection, b.grey)),
            e.centered && (x = Object(w.a)(b.sectionPaper, b.alignCenter)),
            e.column && (x = Object(w.a)(x, b.column)),
            Object(p.jsx)("div", {
              className: u,
              id: e.id,
              children: Object(p.jsx)("div", {
                className: x,
                style: {
                  marginTop: e.marginTop,
                  marginBottom: e.marginBottom,
                  paddingTop: e.paddingTop,
                  paddingBottom: e.paddingBottom,
                },
                children: e.children,
              }),
            })
          );
        },
        jt = n(321),
        bt = function () {
          return Object(p.jsxs)(ht, {
            auto: !0,
            background: "grey",
            children: [
              Object(p.jsxs)("div", {
                style: { flex: 1 },
                children: [
                  Object(p.jsx)(y.a, {
                    variant: "h6",
                    style: { color: "#bbbbbb" },
                    children: "Legal information",
                  }),
                  Object(p.jsx)("br", {}),
                  Object(p.jsx)(y.a, {
                    variant: "body2",
                    style: { color: "#bbbbbb" },
                    children: "Company Name: Real Tutor Ltd",
                  }),
                  Object(p.jsx)(y.a, {
                    variant: "body2",
                    style: { color: "#bbbbbb" },
                    children: "Company Number: 13320915",
                  }),
                  Object(p.jsx)("br", {}),
                  Object(p.jsx)(y.a, {
                    variant: "body2",
                    style: { color: "#bbbbbb" },
                    children: Object(p.jsx)(jt.a, {
                      href: "/manifesto",
                      color: "inherit",
                      children: "Manifesto",
                    }),
                  }),
                  Object(p.jsx)(y.a, {
                    variant: "body2",
                    style: { color: "#bbbbbb" },
                    children: Object(p.jsx)(jt.a, {
                      style: { cursor: "pointer" },
                      onClick: function () {
                        return window.open(
                          "https://find-and-update.company-information.service.gov.uk/company/13320915"
                        );
                      },
                      color: "inherit",
                      children: "Company information",
                    }),
                  }),
                  Object(p.jsx)(y.a, {
                    variant: "body2",
                    style: { color: "#bbbbbb" },
                    children: Object(p.jsx)(jt.a, {
                      href: "/privacypolicy",
                      color: "inherit",
                      children: "Privacy Policy",
                    }),
                  }),
                ],
              }),
              Object(p.jsx)("div", {
                style: { flex: 1, display: "flex", justifyContent: "center" },
                children: Object(p.jsx)("img", {
                  src: at,
                  style: { width: "40vw", maxWidth: 400 },
                }),
              }),
            ],
          });
        },
        ut = function () {
          var e,
            t = Object(a.useState)(!1),
            n = Object(h.a)(t, 2),
            i = (n[0], n[1]),
            r = Object(a.useState)(window.innerWidth),
            c = Object(h.a)(r, 2),
            s = c[0],
            o = c[1],
            l = function () {
              o(window.innerWidth);
            },
            b = Object(j.a)(function (e) {
              var t, n, a, i;
              return {
                banner:
                  ((t = {
                    width: "100%",
                    height: 800,
                    backgroundImage: "url(".concat(f, ")"),
                    backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    backgroundPositionX: "center",
                  }),
                  Object(d.a)(t, e.breakpoints.down("sm"), { height: 600 }),
                  Object(d.a)(t, e.breakpoints.down("xs"), { height: 800 }),
                  t),
                centeredWrapper: {
                  width: "80%",
                  marginLeft: "10%",
                  position: "absolute",
                  bottom: 150,
                },
                bannerImage: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                },
                name: { width: "80%", marginLeft: "10%", marginTop: 75 },
                bigText:
                  ((n = {}),
                  Object(d.a)(n, e.breakpoints.down("sm"), { fontSize: 50 }),
                  Object(d.a)(n, e.breakpoints.up("sm"), { fontSize: 100 }),
                  n),
                sectionWrapper: Object(d.a)(
                  {
                    backgroundColor: "#fafafa",
                    width: "100%",
                    display: "flex",
                    height: "100vh",
                  },
                  e.breakpoints.down("md"),
                  { height: "120vh" }
                ),
                sectionPaper: Object(d.a)(
                  {
                    width: "80%",
                    height: "97.5%",
                    marginTop: "1.25%",
                    marginBottom: "1.25%",
                    marginLeft: "10%",
                    marginRight: "10%",
                    display: "flex",
                    paddingTop: 20,
                    paddingLeft: 20,
                    paddingBottom: 20,
                    paddingRight: 20,
                  },
                  e.breakpoints.down("md"),
                  { flexDirection: "column" }
                ),
                card: {
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                },
                subjectCard:
                  ((a = {}),
                  Object(d.a)(a, e.breakpoints.down("xs"), { height: 100 }),
                  Object(d.a)(a, "height", 250),
                  Object(d.a)(a, "width", "100%"),
                  Object(d.a)(a, "display", "flex"),
                  Object(d.a)(a, "justifyContent", "center"),
                  Object(d.a)(a, "alignItems", "center"),
                  Object(d.a)(a, "cursor", "pointer"),
                  Object(d.a)(a, "transition", "all 200ms"),
                  Object(d.a)(a, "&:hover", {
                    transform: "translateY(-3px) scale(1.1)",
                  }),
                  a),
                cardDisplay: Object(d.a)(
                  { display: "flex", justifyContent: "space-between" },
                  e.breakpoints.down("md"),
                  { flexDirection: "column" }
                ),
                smallSection: Object(d.a)(
                  { width: "100%", display: "flex", height: 600 },
                  e.breakpoints.down("md"),
                  { height: "auto" }
                ),
                image:
                  ((i = { width: "40vw" }),
                  Object(d.a)(i, e.breakpoints.down("md"), { width: "60vw" }),
                  Object(d.a)(i, e.breakpoints.down("sm"), { width: "80vw" }),
                  Object(d.a)(i, e.breakpoints.down("xs"), { width: "90vw" }),
                  i),
                list: { display: "flex", float: "right" },
                listItem: { marginLeft: 10, marginRight: 10 },
                socialWrapper: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                },
                contactWrapper: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                },
                icons: Object(d.a)({ fontSize: 75 }, e.breakpoints.down("md"), {
                  fontSize: 50,
                }),
                wrappingText: Object(d.a)(
                  { maxWidth: 700, paddingRight: 100 },
                  e.breakpoints.down("md"),
                  { paddingRight: 0 }
                ),
              };
            })();
          Object(a.useEffect)(function () {
            u(),
              window.addEventListener("resize", l),
              setTimeout(function () {
                i(!0);
              }, 1e3);
          }, []);
          var u = function () {
              "contact-us" ==
                new URLSearchParams(window.location.search).get("section") &&
                x();
            },
            x = function () {
              Fe.scroller.scrollTo("contactus", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
              });
            };
          return Object(p.jsxs)("div", {
            style: { overflow: "hidden" },
            children: [
              Object(p.jsx)(Ue.a, {
                children:
                  "This website uses cookies to enhance the user experience.",
              }),
              Object(p.jsx)(it, { contactus: x }),
              Object(p.jsx)(lt, { mainpage: !0 }),
              Object(p.jsx)(Me.a, {
                right: !0,
                children: Object(p.jsxs)(ht, {
                  background: "offwhite",
                  auto: !0,
                  centered: !0,
                  marginBottom: 0,
                  paddingBottom: 0,
                  children: [
                    Object(p.jsxs)("div", {
                      style: { maxWidth: 800 },
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          color: "secondary",
                          children: "Tuition meets the digital age",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "We have custom built software, to keep track of student progress and help lesson planning and reporting.",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children: "State of the art software.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children: "Flawless tutoring.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children: "The future of education is here.",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)("br", {}),
                      ],
                    }),
                    Object(p.jsxs)("div", {
                      style: { maxWidth: 800 },
                      children: [
                        Object(p.jsx)("img", { src: tt, className: b.image }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)("br", {}),
                      ],
                    }),
                  ],
                }),
              }),
              Object(p.jsx)(Me.a, {
                right: !0,
                children: Object(p.jsxs)(ht, {
                  background: "offwhite",
                  auto: !0,
                  centered: !0,
                  marginTop: 0,
                  paddingTop: 0,
                  children: [
                    Object(p.jsxs)("div", {
                      style: { width: "100%" },
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          align: "left",
                          color: "secondary",
                          children: "Powered by software",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          align: "left",
                          children:
                            "So what is this software that we keep talking about? We call it Odin. It is a centralised place which keeps track of every lesson, every report and every topic the student has practiced. This data will help the student and tutor tremendously, as it provides up to date information on what the student really needs.",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          align: "left",
                          children: "Plenty of features",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "Our software is feature rich to help you learn. There are a variety of tools which tutors will use to help you, and you will be able to view everything, from what happened in a lesson 3 months ago, or give us feedback on how the lesson went. There simply isn\u2019t anything like it.",
                        }),
                        Object(p.jsx)("br", {}),
                      ],
                    }),
                    Object(p.jsx)("div", {
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        marginLeft: 50,
                      },
                      children: Object(p.jsxs)("div", {
                        children: [
                          Object(p.jsxs)("div", {
                            style: { display: "flex" },
                            children: [
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                color: "secondary",
                                style: { marginRight: 10 },
                                children: "1.",
                              }),
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                color: "primary",
                                children: "Keeps track of all lessons",
                              }),
                            ],
                          }),
                          Object(p.jsx)("br", {}),
                          Object(p.jsxs)("div", {
                            style: { display: "flex" },
                            children: [
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                color: "secondary",
                                style: { marginRight: 10 },
                                children: "2.",
                              }),
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                color: "primary",
                                children: "Easily view your progress",
                              }),
                            ],
                          }),
                          Object(p.jsx)("br", {}),
                          Object(p.jsxs)("div", {
                            style: { display: "flex" },
                            children: [
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                color: "secondary",
                                style: { marginRight: 10 },
                                children: "3.",
                              }),
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                color: "primary",
                                children: "View tutor feedback",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              s < 1600
                ? Object(p.jsx)(Me.a, {
                    right: !0,
                    children: Object(p.jsx)(ht, {
                      background: "lightteal",
                      auto: !0,
                      centered: !0,
                      children: Object(p.jsx)("div", {
                        style: {
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        },
                        children: Object(p.jsxs)("div", {
                          style: { maxWidth: 800 },
                          children: [
                            Object(p.jsx)(y.a, {
                              variant: "h1",
                              align: "right",
                              children: "The Experiment...",
                            }),
                            Object(p.jsx)("br", {}),
                            Object(p.jsx)(y.a, {
                              variant: "body2",
                              children:
                                "Other tutoring providers select teachers as they're tutors. After extensive research, we found that teachers are too far removed from the exam procedures. This gave us an idea, We took a select few University undergraduates, with top A level grades, and ran some sample tutoring sessions. We found the Tutees to be hugely more engaged and learnt the syllabus noticeably faster. We also noted that when an Undergraduate was studying a related field, the students' learning was optimized.",
                            }),
                            Object(p.jsx)("br", {}),
                            Object(p.jsx)(y.a, {
                              variant: "h3",
                              align: "left",
                              children: "The Conclusion...",
                            }),
                            Object(p.jsx)("br", {}),
                            Object(p.jsx)(y.a, {
                              variant: "body2",
                              children:
                                "After the research we based our employment process off our findings. Our cherry picked Tutors will help our students achieve the best grade they are possibile of, no matter your current course progression.",
                            }),
                            Object(p.jsx)("br", {}),
                            Object(p.jsx)("div", {
                              style: {
                                width: "auto",
                                display: "flex",
                                justifyContent: "center",
                                position: "relative",
                                paddingTop: "56.25%",
                              },
                              children: Object(p.jsx)(Je.a, {
                                url: "https://www.youtube.com/watch?v=-UAWRH0-h8A",
                                style: {
                                  position: "absolute",
                                  top: 0,
                                  left: 0,
                                },
                                width: "100%",
                                height: "100%",
                                controls: !0,
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  })
                : Object(p.jsx)(Me.a, {
                    children: Object(p.jsxs)(ht, {
                      background: "lightteal",
                      auto: !0,
                      centered: !0,
                      children: [
                        Object(p.jsx)("div", {
                          style: { width: "100%", marginRight: 20 },
                          children: Object(p.jsx)(Je.a, {
                            url: "https://www.youtube.com/watch?v=-UAWRH0-h8A",
                            controls: !0,
                          }),
                        }),
                        Object(p.jsx)("div", {
                          style: { width: "100%" },
                          children: Object(p.jsxs)("div", {
                            style: { maxWidth: 800, float: "right" },
                            children: [
                              Object(p.jsx)(y.a, {
                                variant: "h1",
                                align: "right",
                                children: "The Experiment...",
                              }),
                              Object(p.jsx)("br", {}),
                              Object(p.jsx)(y.a, {
                                variant: "body2",
                                align: "right",
                                children:
                                  "Other tutoring providers select teachers as they're tutors. After extensive research, we found that teachers are too far removed from the exam procedures. This gave us an idea, We took a select few University undergraduates, with top A level grades, and ran some sample tutoring sessions. We found the Tutees to be hugely more engaged and learnt the syllabus noticeably faster. We also noted that when an Undergraduate was studying a related field, the students' learning was optimized.",
                              }),
                              Object(p.jsx)("br", {}),
                              Object(p.jsx)(y.a, {
                                variant: "h3",
                                align: "left",
                                children: "The Conclusion...",
                              }),
                              Object(p.jsx)("br", {}),
                              Object(p.jsx)(y.a, {
                                variant: "body2",
                                children:
                                  "After the research we based our employment process off our findings. Our cherry picked Tutors will help our students achieve the best grade they are possibile of, no matter your current course progression.",
                              }),
                              Object(p.jsx)("br", {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
              Object(p.jsx)(Me.a, {
                right: !0,
                children: Object(p.jsxs)(ht, {
                  medium: !0,
                  centered: !0,
                  narrow: !0,
                  children: [
                    Object(p.jsxs)("div", {
                      className: b.wrappingText,
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          color: "secondary",
                          children: "We. Really. Care.",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "Our 5% charity pleage is simply one example of how much we care about the community and the world around us.",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "You won't just talk to your tutor. You will talk to the CEO, COO and other members of staff, about your own progress, and ways we could make your life easier. All so you can achieve the best grade.",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "Real Tutor offers you peace of mind. We will never turn away a student in need, and we promise to always deliver the best quality education. Period.",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)("br", {}),
                      ],
                    }),
                    Object(p.jsx)("div", {
                      style: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                      },
                      children: Object(p.jsxs)("div", {
                        children: [
                          Object(p.jsxs)("div", {
                            style: { display: "flex" },
                            children: [
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                color: "secondary",
                                style: { marginRight: 10 },
                                children: "1.",
                              }),
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                color: "primary",
                                children: "5% charity pledge",
                              }),
                            ],
                          }),
                          Object(p.jsx)("br", {}),
                          Object(p.jsxs)("div", {
                            style: { display: "flex" },
                            children: [
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                color: "secondary",
                                style: { marginRight: 10 },
                                children: "2.",
                              }),
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                color: "primary",
                                children: "Our personal approach",
                              }),
                            ],
                          }),
                          Object(p.jsx)("br", {}),
                          Object(p.jsxs)("div", {
                            style: { display: "flex" },
                            children: [
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                color: "secondary",
                                style: { marginRight: 10 },
                                children: "3.",
                              }),
                              Object(p.jsx)(y.a, {
                                variant: "h4",
                                color: "primary",
                                children: "Market leading tutoring",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              Object(p.jsx)(Me.a, {
                left: !0,
                children: Object(p.jsx)(ht, {
                  medium: !0,
                  column: !0,
                  background: "lightblue",
                  children: Object(p.jsxs)("div", {
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h2",
                        children: "Subjects we offer",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)(te.a, {
                        container: !0,
                        spacing: 6,
                        justify: "center",
                        alignItems: "center",
                        children: [
                          Object(p.jsx)(dt, {
                            title: "A-level Maths",
                            onClick: function () {
                              return (document.location.href = "/alevelmaths");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "A-level Further Maths",
                            onClick: function () {
                              return (document.location.href =
                                "/alevelfurthermaths");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "A-level Physics",
                            onClick: function () {
                              return (document.location.href =
                                "/alevelphysics");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "A-level Chemistry",
                            onClick: function () {
                              return (document.location.href =
                                "/alevelchemistry");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "A-level Biology",
                            onClick: function () {
                              return (document.location.href =
                                "/alevelbiology");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "GCSE Computer Science",
                            onClick: function () {
                              return (document.location.href =
                                "/gcsecomputerscience");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "A-level Computer Science",
                            onClick: function () {
                              return (document.location.href =
                                "/alevelcomputerscience");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "View all",
                            onClick: function () {
                              return (document.location.href = "/subjects");
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              Object(p.jsx)(Me.a, {
                children: Object(p.jsxs)(ht, {
                  background: "offwhite",
                  auto: !0,
                  narrow: !0,
                  children: [
                    Object(p.jsxs)("div", {
                      style: { flex: 1 },
                      id: "contactSection",
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          align: "center",
                          children: "Contact us",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "h2",
                          children: "Emails:",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsxs)("div", {
                          className: b.contactWrapper,
                          children: [
                            Object(p.jsx)(qe.a, {
                              color: "primary",
                              className: b.icons,
                              fontSize: "large",
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              align: "center",
                              children: "john@realtutor.online (CEO)",
                            }),
                          ],
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsxs)("div", {
                          className: b.contactWrapper,
                          children: [
                            Object(p.jsx)(qe.a, {
                              color: "primary",
                              className: b.icons,
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              align: "center",
                              children: "zach@realtutor.online (COO)",
                            }),
                          ],
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: "Phone numbers:",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsxs)("div", {
                          className: b.contactWrapper,
                          children: [
                            Object(p.jsx)(He.a, {
                              color: "primary",
                              className: b.icons,
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              align: "center",
                              children: "+44 7443 494507 (Zach)",
                            }),
                          ],
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsxs)("div", {
                          className: b.contactWrapper,
                          children: [
                            Object(p.jsx)(He.a, {
                              color: "primary",
                              className: b.icons,
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              align: "center",
                              children: "+44 7576 870036 (John)",
                            }),
                          ],
                        }),
                        Object(p.jsx)("br", {}),
                      ],
                    }),
                    Object(p.jsxs)("div", {
                      style: { flex: 1 },
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          align: "center",
                          children: "Socials",
                        }),
                        Object(p.jsxs)("div", {
                          className: b.sectionPaper,
                          style: { flexDirection: "column", height: "80%" },
                          children: [
                            Object(p.jsxs)("div", {
                              className: b.socialWrapper,
                              onClick: function () {
                                return window
                                  .open(
                                    "https://www.instagram.com/realtutor_online/",
                                    "_blank"
                                  )
                                  .focus();
                              },
                              children: [
                                Object(p.jsx)(Ke.a, {
                                  color: "secondary",
                                  className: b.icons,
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "h3",
                                  children: "@realtutor_online",
                                }),
                              ],
                            }),
                            Object(p.jsx)("br", {}),
                            Object(p.jsx)("br", {}),
                            Object(p.jsxs)("div", {
                              className: b.socialWrapper,
                              onClick: function () {
                                return window
                                  .open(
                                    "https://www.youtube.com/channel/UCDIjZ-wLxyCc9yB49pK-Pqw",
                                    "_blank"
                                  )
                                  .focus();
                              },
                              children: [
                                Object(p.jsx)(Qe.a, {
                                  color: "secondary",
                                  className: b.icons,
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "h3",
                                  children: "Real Tutor",
                                }),
                              ],
                            }),
                            Object(p.jsx)("br", {}),
                            Object(p.jsx)("br", {}),
                            Object(p.jsxs)(
                              "div",
                              ((e = { className: b.socialWrapper }),
                              Object(d.a)(e, "className", b.socialWrapper),
                              Object(d.a)(e, "onClick", function () {
                                return window
                                  .open(
                                    "https://www.facebook.com/real.tutor.509/",
                                    "_blank"
                                  )
                                  .focus();
                              }),
                              Object(d.a)(e, "children", [
                                Object(p.jsx)(et.a, {
                                  color: "secondary",
                                  className: b.icons,
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "h3",
                                  children: "Real Tutor",
                                }),
                              ]),
                              e)
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              Object(p.jsx)(bt, {}),
            ],
          });
        },
        pt = function () {
          var e = Object(j.a)(function (e) {
            var t;
            return {
              subjectListWrapper: {
                width: "100%",
                backgroundColor: "#FAFAFA",
                height: "auto",
              },
              subjectGridWrapper: {
                paddingTop: 20,
                paddingLeft: "5%",
                paddingRight: "5%",
                paddingBottom: 20,
              },
              subjectCard:
                ((t = {}),
                Object(d.a)(t, e.breakpoints.down("xs"), { height: 100 }),
                Object(d.a)(t, "height", 250),
                Object(d.a)(t, "width", "100%"),
                Object(d.a)(t, "display", "flex"),
                Object(d.a)(t, "justifyContent", "center"),
                Object(d.a)(t, "alignItems", "center"),
                Object(d.a)(t, "cursor", "pointer"),
                Object(d.a)(t, "transition", "all 200ms"),
                Object(d.a)(t, "&:hover", {
                  transform: "translateY(-3px) scale(1.1)",
                }),
                t),
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, { small: !0, title: "Subject list" }),
              Object(p.jsxs)("div", {
                className: e.subjectListWrapper,
                children: [
                  Object(p.jsxs)("div", {
                    className: e.subjectGridWrapper,
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h2",
                        children: "A-levels",
                      }),
                      Object(p.jsxs)(te.a, {
                        container: !0,
                        spacing: 3,
                        justify: "center",
                        alignItems: "center",
                        className: e.subjectGrid,
                        children: [
                          Object(p.jsx)(dt, {
                            title: "Maths",
                            onClick: function () {
                              return (document.location.href = "/alevelmaths");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "Further Maths",
                            onClick: function () {
                              return (document.location.href =
                                "/alevelfurthermaths");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "Computer Science",
                            onClick: function () {
                              return (document.location.href =
                                "/alevelcomputerscience");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "Physics",
                            onClick: function () {
                              return (document.location.href =
                                "/alevelphysics");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "Chemistry",
                            onClick: function () {
                              return (document.location.href =
                                "/alevelchemistry");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "Biology",
                            onClick: function () {
                              return (document.location.href =
                                "/alevelbiology");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "Economics",
                            onClick: function () {
                              return (document.location.href =
                                "/aleveleconomics");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "Art and Design",
                            onClick: function () {
                              return (document.location.href = "/alevelart");
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    className: e.subjectGridWrapper,
                    children: [
                      Object(p.jsx)(y.a, { variant: "h2", children: "GCSEs" }),
                      Object(p.jsxs)(te.a, {
                        container: !0,
                        spacing: 3,
                        justify: "center",
                        alignItems: "center",
                        className: e.subjectGrid,
                        children: [
                          Object(p.jsx)(dt, {
                            title: "Physics",
                            onClick: function () {
                              return (document.location.href = "/gcsephysics");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "Chemistry",
                            onClick: function () {
                              return (document.location.href =
                                "/gcsechemistry");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "Biology",
                            onClick: function () {
                              return (document.location.href = "/gcsebiology");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "A-level Chemistry",
                            onClick: function () {
                              return (document.location.href =
                                "/alevelchemistry");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "A-level Biology",
                            onClick: function () {
                              return (document.location.href =
                                "/alevelbiology");
                            },
                          }),
                          Object(p.jsx)(dt, {
                            title: "Computer Science",
                            onClick: function () {
                              return (document.location.href =
                                "/gcsecomputerscience");
                            },
                          }),
                          Object(p.jsx)(dt, { title: "Graphics" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        xt = function () {
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                small: !0,
                title: "How it works",
                subtitle: "Find out how we can help you",
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                narrow: !0,
                background: "offwhite",
                children: Object(p.jsxs)("div", {
                  children: [
                    Object(p.jsxs)(y.a, {
                      variant: "h1",
                      children: [
                        "What is ",
                        Object(p.jsx)("i", { children: '"Real Tutor"' }),
                      ],
                    }),
                    Object(p.jsx)("br", {}),
                    Object(p.jsx)(y.a, {
                      variant: "body2",
                      children:
                        "We are a UK based company who aim to provide the best quality online tutoring, at an affordable price. We pride ourselves in our use of digital resources and taking full advantages of the digital world ever growing around us. Whilst most other tutoring providers are still stuck in the 20th century, we are innovation, and bringing learning into our connected world.",
                    }),
                    Object(p.jsx)("br", {}),
                    Object(p.jsx)(y.a, {
                      variant: "body2",
                      children:
                        "We provide absolute transparicy in every aspect of our business, be it the terms of services for new students, the resources we use, or even how we hire new tutors. You will always have full transparacy from us.",
                    }),
                    Object(p.jsx)("br", {}),
                    Object(p.jsx)("br", {}),
                  ],
                }),
              }),
              Object(p.jsxs)(ht, {
                auto: !0,
                narrow: !0,
                background: "lightteal",
                column: !0,
                children: [
                  Object(p.jsx)(y.a, {
                    variant: "h1",
                    children: "How does it all work?",
                  }),
                  Object(p.jsx)("br", {}),
                  Object(p.jsxs)("div", {
                    style: { display: "flex" },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        color: "secondary",
                        children: "1.",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "Contact us",
                      }),
                    ],
                  }),
                  Object(p.jsx)(y.a, {
                    variant: "body2",
                    children:
                      "This could be through email, phone, social media. Get in contact with us and we will match you to one of our tutors.",
                  }),
                  Object(p.jsx)("br", {}),
                  Object(p.jsxs)("div", {
                    style: { display: "flex" },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        color: "secondary",
                        children: "2.",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "Schedule and payment",
                      }),
                    ],
                  }),
                  Object(p.jsxs)(y.a, {
                    variant: "body2",
                    children: [
                      "After being matched to a tutor, we will arrange a session date and time. After this we will ask you for payment, you can choose to pay for a single session at a time, but it is more convenient to pay for a few sessions ahead of time. All payments are done through ",
                      Object(p.jsx)("i", { children: "Stripe" }),
                      ", which is a company that handles online transactions and are trusted by billions.",
                    ],
                  }),
                  Object(p.jsx)("br", {}),
                  Object(p.jsxs)("div", {
                    style: { display: "flex" },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        color: "secondary",
                        children: "3.",
                      }),
                      Object(p.jsx)(y.a, { variant: "h3", children: "Repeat" }),
                    ],
                  }),
                  Object(p.jsx)(y.a, {
                    variant: "body2",
                    children:
                      "After you have finished your sessions, we will again ask for payment if you choose to remain with us, this is all that needs to be done to enjoy our amazing services.",
                  }),
                ],
              }),
            ],
          });
        },
        mt = n(260),
        Ot = n.p + "static/media/john.b57c7d82.jpg",
        ft = n.p + "static/media/zach.e1b5d37c.jpg",
        gt = n.p + "static/media/ronnie.cf010481.jpg",
        yt = n.p + "static/media/alex.ee536d9b.jpg",
        vt = n.p + "static/media/rio.3d7674e7.jpg",
        wt = function () {
          var e = Object(mt.a)(function (e) {
            var t;
            return {
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  float: "left",
                }),
                Object(d.a)(t, e.breakpoints.down("md"), { marginLeft: 0 }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                float: "left",
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                small: !0,
                title: "Meet the team",
                subtitle:
                  "A small, close team, working to provide the best tutoring",
              }),
              Object(p.jsxs)(ht, {
                medium: !0,
                centered: !0,
                background: "offwhite",
                children: [
                  Object(p.jsxs)("div", {
                    style: { flex: 1, width: "100%" },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "John Costa",
                      }),
                      Object(p.jsx)("div", {
                        className: e.tutorPicturesWrapper,
                        children: Object(p.jsx)("div", {
                          className: e.tutorPictures,
                          style: { backgroundImage: "url(".concat(Ot, ")") },
                        }),
                      }),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    style: { flex: 1 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "About me",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "I am taking a Computer Science degree at Royal Holloway, I am also the CEO of Real Tutor. Maths has been my favourite subject until I met computer science but it still holds a crutial place in my heart. I have an A* in A-level Maths, an A in Further Maths and an A in Computer Science, as well as years of tutoring experience.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, { variant: "h3", children: "Roles" }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children: "1. CEO of the company",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children: "2. Code all of the companies systems",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "3. Teach Maths, Further Maths and Computer Science",
                      }),
                    ],
                  }),
                ],
              }),
              Object(p.jsxs)(ht, {
                medium: !0,
                centered: !0,
                background: "lightteal",
                children: [
                  Object(p.jsxs)("div", {
                    style: { flex: 1, width: "100%" },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "Zach Seth",
                      }),
                      Object(p.jsx)("div", {
                        className: e.tutorPicturesWrapper,
                        children: Object(p.jsx)("div", {
                          className: e.tutorPictures,
                          style: { backgroundImage: "url(".concat(ft, ")") },
                        }),
                      }),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    style: { flex: 1 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "About me",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "I currently work as a Risk Analyst in the financial sector. I am the COO of Real tutor, a company I co-founded with John. We noticed a gap in the market for high quality tutoring and didn't hesitate to take the opportunity. My business mindset came from my love of Economics, in which I achieved an A at Farnborough Sixth-form college. I enjoyed reading beyond the curriculum and continue to read about finance and economics now. I would like to share my mindset with students by developing their understanding of the world of finance.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, { variant: "h3", children: "Roles" }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children: "1. COO of the company",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children: "2. Looks after all company finances",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children: "3. Teach A-level Economics",
                      }),
                    ],
                  }),
                ],
              }),
              Object(p.jsxs)(ht, {
                medium: !0,
                centered: !0,
                background: "offwhite",
                children: [
                  Object(p.jsxs)("div", {
                    style: { flex: 1, width: "100%" },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "Ronnie Nobbs",
                      }),
                      Object(p.jsx)("div", {
                        className: e.tutorPicturesWrapper,
                        children: Object(p.jsx)("div", {
                          className: e.tutorPictures,
                          style: { backgroundImage: "url(".concat(gt, ")") },
                        }),
                      }),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    style: { flex: 1 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "About me",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "I am an undergraduate student at Southampton University, a part of the Russell Group, and I am working towards a Master\u2019s Degree in Physics with Mathematics. I have an A* in Maths, an A in Physics and a B in Further Maths, coupled with experience in tutoring Physics and Maths. Physics was unlocked as a passion of mine once I started my GCSE learning in Year 10. I would research topics far beyond the scope of the GCSE course. It lit a fire underneath me, a burning passion to grow my knowledge, a conquest in life that will never end. Mathematics naturally followed on from my passion in physics, for it is the language of the universe.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, { variant: "h3", children: "Roles" }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children: "1. Teach A-level and GCSE Physics",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children: "2. Teach A-level Maths and Further Maths",
                      }),
                    ],
                  }),
                ],
              }),
              Object(p.jsxs)(ht, {
                medium: !0,
                centered: !0,
                background: "lightblue",
                children: [
                  Object(p.jsxs)("div", {
                    style: { flex: 1, width: "100%" },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "Alex Field",
                      }),
                      Object(p.jsx)("div", {
                        className: e.tutorPicturesWrapper,
                        children: Object(p.jsx)("div", {
                          className: e.tutorPictures,
                          style: { backgroundImage: "url(".concat(yt, ")") },
                        }),
                      }),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    style: { flex: 1 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "About me",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "I am an undergraduate studying medical biosciences at Imperial College London. I studied Biology, Chemistry and maths at A level achieving an A* in Maths and an A grade in biology and chemistry. I have always had a strong passion for the biological sciences and often researched topics beyond the spectrum of what was necessary for the course. I have always had a strong ability in the sciences and achieved the top grades at GCSE level and am continuing to show great ability after being accepted into Imperial College.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, { variant: "h3", children: "Roles" }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children: "1. Teaching A level and GCSE Biology",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children: "2. Teaching A level and GCSE Chemistry",
                      }),
                    ],
                  }),
                ],
              }),
              Object(p.jsxs)(ht, {
                medium: !0,
                centered: !0,
                background: "offwhite",
                children: [
                  Object(p.jsxs)("div", {
                    style: { flex: 1, width: "100%" },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "Rio Keefe",
                      }),
                      Object(p.jsx)("div", {
                        className: e.tutorPicturesWrapper,
                        children: Object(p.jsx)("div", {
                          className: e.tutorPictures,
                          style: { backgroundImage: "url(".concat(vt, ")") },
                        }),
                      }),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    style: { flex: 1 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "About Me",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "I am a student of Illustration at UCA Farnham. I also studied Art and Graphics in school and Sixth Form, achieving an A in Art and Design at A-Level and an A* in Graphic Products at GCSE. I used my gap year to develop my portfolio and grow my online presence; I started my small business on Etsy where I sell illustration prints and hand-made stickers. I have always taken art seriously, despite its reputation as an \u2018easy\u2019 subject, and use it to express myself. I strongly believe art cannot be filtered and should fully represent you and your vision for it, embrace your individuality in every aspect of your life - especially in your artwork.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, { variant: "h3", children: "Roles" }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children: "1. Head of Graphic design",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children: "2. Teaching A-Level Art and Design",
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children: "3. Teaching GCSE Graphics",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        kt = n(172),
        Ct = n(329),
        St = n(333),
        Pt = n(322),
        At = n.p + "static/media/stripe.108e6837.png",
        It = Object(kt.a)(
          "pk_live_51IgsTHJwHQjcU66CgZtNbj7hpXzxLlnlk9V2rqRp1M110TAUe4V4XCmPnpXrhFRCYuySROcq4UU1UXMTSAaeISnq002CgxVgr8"
        ),
        Wt = function () {
          var e = Object(a.useState)(),
            t = Object(h.a)(e, 2),
            n = (t[0], t[1]),
            i = Object(a.useState)(!1),
            r = Object(h.a)(i, 2),
            c = (r[0], r[1]),
            s = Object(a.useState)(""),
            d = Object(h.a)(s, 2),
            j = d[0],
            x = d[1],
            m = Object(a.useState)(!1),
            O = Object(h.a)(m, 2),
            f = O[0],
            g = O[1],
            v = Object(a.useState)(0),
            w = Object(h.a)(v, 2),
            k = w[0],
            C = w[1],
            S = Object(a.useState)("A-level"),
            P = Object(h.a)(S, 2),
            A = P[0],
            I = P[1],
            W = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t, a, i, r, s, l;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(j.length < 3)) {
                            e.next = 3;
                            break;
                          }
                          return g(!0), e.abrupt("return");
                        case 3:
                          if ("A-level" != A) {
                            e.next = 15;
                            break;
                          }
                          return c(!0), (e.next = 7), It;
                        case 7:
                          return (
                            (t = e.sent),
                            (e.next = 10),
                            t.redirectToCheckout({
                              lineItems: [
                                {
                                  price: "price_1Irrj0JwHQjcU66CGQTbReDq",
                                  quantity: Number(k),
                                },
                              ],
                              mode: "payment",
                              cancelUrl: window.location.origin,
                              clientReferenceId: j,
                              successUrl: "".concat(
                                window.location.origin,
                                "/login"
                              ),
                            })
                          );
                        case 10:
                          (a = e.sent),
                            (i = a.error) && (c(!1), n(i)),
                            (e.next = 25);
                          break;
                        case 15:
                          if ("GCSE" != A) {
                            e.next = 25;
                            break;
                          }
                          return c(!0), (e.next = 19), It;
                        case 19:
                          return (
                            (r = e.sent),
                            (e.next = 22),
                            r.redirectToCheckout({
                              lineItems: [
                                {
                                  price: "price_1IrriQJwHQjcU66CDQzLXrbh",
                                  quantity: Number(k),
                                },
                              ],
                              mode: "payment",
                              cancelUrl: window.location.origin,
                              clientReferenceId: j,
                              successUrl: "".concat(
                                window.location.origin,
                                "/login"
                              ),
                            })
                          );
                        case 22:
                          (s = e.sent), (l = s.error) && (c(!1), n(l));
                        case 25:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                small: !0,
                title: "Payment",
                subtitle: "The final step, you won't regret it!",
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                centered: !0,
                background: "offwhite",
                narrow: !0,
                children: Object(p.jsxs)("div", {
                  children: [
                    Object(p.jsx)(y.a, {
                      variant: "h1",
                      children: "You are nearly there",
                    }),
                    Object(p.jsx)("br", {}),
                    Object(p.jsx)(y.a, {
                      variant: "body2",
                      children:
                        "This is the final step in taking your education to the next level, after you complete payment, we will arrange the sessions, and make sure that you get what you deserve!",
                    }),
                    Object(p.jsx)("br", {}),
                    Object(p.jsx)(y.a, {
                      variant: "body2",
                      children:
                        "This goes without saying but do NOT make a payment if you have not spoken to us before, we need to make sure that we can completely satisfy your request before we can take payment.",
                    }),
                  ],
                }),
              }),
              Object(p.jsxs)(ht, {
                auto: !0,
                centered: !0,
                background: "lightteal",
                narrow: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { marginRight: 20 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        align: "center",
                        children: "Real Tutor Sessions",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)(St.a, {
                        "aria-label": "level",
                        name: "Students Level",
                        value: A,
                        onChange: function (e) {
                          I(e.target.value);
                        },
                        children: [
                          Object(p.jsx)(Pt.a, {
                            value: "A-level",
                            control: Object(p.jsx)(Ct.a, { color: "primary" }),
                            label: "A-level",
                          }),
                          Object(p.jsx)(Pt.a, {
                            value: "GCSE",
                            control: Object(p.jsx)(Ct.a, { color: "primary" }),
                            label: "GCSE",
                          }),
                        ],
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "Students name",
                      }),
                      Object(p.jsx)(u.a, {
                        variant: "outlined",
                        style: { width: "100%" },
                        error: f,
                        onFocus: function () {
                          return g(!1);
                        },
                        onChange: function (e) {
                          return x(e.target.value);
                        },
                        value: j,
                      }),
                      Object(p.jsx)(y.a, {
                        variant: "h3",
                        children: "Number of sessions",
                      }),
                      Object(p.jsx)(u.a, {
                        type: "number",
                        label: "Number",
                        variant: "outlined",
                        style: { width: "100%" },
                        onChange: function (e) {
                          C(e.target.value);
                        },
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(b.a, {
                        variant: "contained",
                        style: { width: "100%" },
                        onClick: W,
                        children: "Payment",
                      }),
                    ],
                  }),
                  Object(p.jsx)("img", { src: At }),
                ],
              }),
            ],
          });
        },
        Tt = function (e) {
          var t = Object(j.a)(function (e) {
            var t, n;
            return {
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  float: "left",
                }),
                Object(d.a)(t, e.breakpoints.down("md"), {
                  marginLeft: 0,
                  backgroundPositionX: "center",
                  backgroundPositionY: "center",
                }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures:
                ((n = {
                  width: "60%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPositionX: "center",
                  backgroundPositionY: "center",
                  float: "left",
                  borderRadius: 20,
                }),
                Object(d.a)(n, e.breakpoints.down("md"), {
                  overflow: "auto",
                  justifyContent: "center",
                  marginLeft: "20%",
                }),
                Object(d.a)(n, e.breakpoints.down("xs"), {
                  width: "95%",
                  height: 500,
                  marginLeft: "2.5%",
                }),
                n),
              tutorWrapper: Object(d.a)(
                {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                e.breakpoints.down("md"),
                { flexDirection: "column" }
              ),
              mainWrapper: Object(d.a)(
                {
                  display: "flex",
                  width: "100%",
                  height: "auto",
                  justifyContent: "space-between",
                },
                e.breakpoints.down("md"),
                { flexDirection: "column" }
              ),
            };
          })();
          return Object(p.jsx)(ht, {
            background: e.background,
            auto: !0,
            centered: !0,
            children: Object(p.jsxs)("div", {
              className: t.tutorWrapper,
              children: [
                Object(p.jsxs)("div", {
                  style: { flex: 1, width: "100%" },
                  children: [
                    Object(p.jsx)(y.a, { variant: "h1", children: e.name }),
                    Object(p.jsx)("div", {
                      className: t.tutorPicturesWrapper,
                      children: Object(p.jsx)("div", {
                        className: t.tutorPictures,
                        style: {
                          backgroundImage: "url(".concat(e.person, ")"),
                        },
                      }),
                    }),
                  ],
                }),
                Object(p.jsxs)("div", {
                  style: { flex: 1 },
                  children: [
                    Object(p.jsx)(y.a, { variant: "h3", children: "About me" }),
                    Object(p.jsx)(y.a, {
                      variant: "body2",
                      children: e.aboutme,
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        Nt = function () {
          Object(j.a)(function (e) {
            var t;
            return {
              cardDisplay: Object(d.a)(
                { display: "flex", justifyContent: "space-between" },
                e.breakpoints.down("sm"),
                { flexDirection: "column" }
              ),
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                }),
                Object(d.a)(t, e.breakpoints.down("md"), { marginLeft: 0 }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                marginRight: 10,
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                title: "A-level Maths",
                subtitle: "One of the most important A-levels",
              }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                centered: !0,
                auto: !0,
                narrow: !0,
                column: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { maxWidth: 800 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "How we teach it",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "The only way you get better at maths is by doing maths. Our Maths lessons are question based, which means as the student learns new content we actively show them exam questions with topics they just learnt, this way the student can get accustomed to the type of questions as well as reinforcing their knowledge.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "We also make sure to constantly revise what we have done before, this will allow for reinforced learning to come into play which means the student will not forgot content, which so very often happens in colleges. This is possible due to our custom made software which tracks progress and can tell us exactly what the student knows.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    children: [
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "1.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Question based learning",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "2.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Progress tracking",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "3.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Constant revision",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                background: "lightteal",
                children: Object(p.jsx)(y.a, {
                  variant: "h1",
                  children: "About the tutors",
                }),
              }),
              Object(p.jsx)(Tt, {
                background: "lightteal",
                person: Ot,
                name: "John Costa",
                aboutme:
                  "I am taking a Computer Science degree at Royal Holloway, I am also the CEO of Real Tutor. Maths has been my favourite subject until I met computer science but it still holds a crutial place in my heart. I have an A* in A-level Maths, an A in Further Maths and an A in Computer Science, as well as years of tutoring experience.",
              }),
              Object(p.jsx)(Tt, {
                background: "offwhite",
                person: gt,
                name: "Ronnie Nobbs",
                aboutme:
                  "I am an undergraduate student at Southampton University, a part of the Russell Group, and I am working towards a Master\u2019s Degree in Physics with Mathematics. I have an A* in Maths, an A in Physics and a B in Further Maths, coupled with experience in tutoring Physics and Maths. Physics was unlocked as a passion of mine once I started my GCSE learning in Year 10. I would research topics far beyond the scope of the GCSE course. It lit a fire underneath me, a burning passion to grow my knowledge, a conquest in life that will never end. Mathematics naturally followed on from my passion in physics, for it is the language of the universe.",
              }),
            ],
          });
        },
        Rt = function () {
          Object(j.a)(function (e) {
            var t;
            return {
              cardDisplay: Object(d.a)(
                { display: "flex", justifyContent: "space-between" },
                e.breakpoints.down("sm"),
                { flexDirection: "column" }
              ),
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                }),
                Object(d.a)(t, e.breakpoints.down("md"), {
                  marginLeft: 0,
                  justifyContent: "center",
                }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                marginRight: 10,
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                title: "A-level Further Maths",
                subtitle: "The most difficult A-level",
              }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                centered: !0,
                auto: !0,
                narrow: !0,
                column: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { maxWidth: 800, justifyContent: "center" },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "How we teach it",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "A-level Further Maths is in a whole different league to other A-levels, in fact it is so sought after that students with it achieve on average \xa35000 more in their salaries compared to their peers. It is a subject that needs incredible ability and attention and we are here to help you. We take a very similar approach to A-level Maths, however we take a more theoretical approach, as much of the content is incredibly dense, so understanding what you are doing, before attempting questions is extremely important.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "We will make sure to constantly look at the A-level as a whole and make sure that you know what you have to do for each topic, by showing you relevant exam questions and how you will break these down to solve the very complex problems that can be presented to you.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    children: [
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "1.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Theoretical Approach",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "2.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Constant exam practice",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "3.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Deep understanding",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                background: "lightteal",
                children: Object(p.jsx)(y.a, {
                  variant: "h1",
                  children: "About the tutors",
                }),
              }),
              Object(p.jsx)(Tt, {
                background: "lightteal",
                person: Ot,
                name: "John Costa",
                aboutme:
                  "I am taking a Computer Science degree at Royal Holloway, I am also the CEO of Real Tutor. Maths has been my favourite subject until I met computer science but it still holds a crutial place in my heart. I have an A* in A-level Maths, an A in Further Maths and an A in Computer Science, as well as years of tutoring experience.",
              }),
              Object(p.jsx)(Tt, {
                background: "offwhite",
                person: gt,
                name: "Ronnie Nobbs",
                aboutme:
                  "I am an undergraduate student at Southampton University, a part of the Russell Group, and I am working towards a Master\u2019s Degree in Physics with Mathematics. I have an A* in Maths, an A in Physics and a B in Further Maths, coupled with experience in tutoring Physics and Maths. Physics was unlocked as a passion of mine once I started my GCSE learning in Year 10. I would research topics far beyond the scope of the GCSE course. It lit a fire underneath me, a burning passion to grow my knowledge, a conquest in life that will never end. Mathematics naturally followed on from my passion in physics, for it is the language of the universe.",
              }),
            ],
          });
        },
        Dt = function () {
          Object(j.a)(function (e) {
            var t;
            return {
              cardDisplay: Object(d.a)(
                { display: "flex", justifyContent: "space-between" },
                e.breakpoints.down("sm"),
                { flexDirection: "column" }
              ),
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                }),
                Object(d.a)(t, e.breakpoints.down("md"), { marginLeft: 0 }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                marginRight: 10,
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                title: "A-level Physics",
                subtitle:
                  "Your next step to unlocking the universe, and all its secrets.",
              }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                centered: !0,
                auto: !0,
                narrow: !0,
                column: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { maxWidth: 800 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "How we teach it",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "Physics is often called one of the hardest A-levels, next to Further Maths and Chemistry. However, it doesn\u2019t have to be. At Real Tutor, we offer physics tutoring that sheds new light upon what can be a rather daunting subject. Concepts that often seem counterintuitive and backwards can be explained in a multitude of different ways. Most students tend to struggle with the concepts and the theory, as opposed to the mathematics. Despite this, both will still be covered in the necessary detail that fits the needs of the student.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "At the end of each session, the student will be given a worked example, and exam questions that cover the content in that lesson. These will not be answered under exam conditions however. The tutor will be there at all times during the session to answer questions. Also, depending on how the tutor feels the student is progressing, the student may be given surprise questions on previously covered topics, as a form of revision. Speaking of which, constant revision will be a prime aspect of ensuring a student\u2019s growth in physics.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    children: [
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "1.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children:
                              "Tackling difficult theory on a conceptual level",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "2.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children: "Restating problems using analogy",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "3.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children:
                              "Surprise questions to test knowledge retention",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                background: "lightteal",
                children: Object(p.jsx)(y.a, {
                  variant: "h1",
                  children: "About the tutors",
                }),
              }),
              Object(p.jsx)(Tt, {
                background: "offwhite",
                person: gt,
                name: "Ronnie Nobbs",
                aboutme:
                  "I am an undergraduate student at Southampton University, a part of the Russell Group, and I am working towards a Master\u2019s Degree in Physics with Mathematics. I have an A* in Maths, an A in Physics and a B in Further Maths, coupled with experience in tutoring Physics and Maths. Physics was unlocked as a passion of mine once I started my GCSE learning in Year 10. I would research topics far beyond the scope of the GCSE course. It lit a fire underneath me, a burning passion to grow my knowledge, a conquest in life that will never end. Mathematics naturally followed on from my passion in physics, for it is the language of the universe.",
              }),
            ],
          });
        },
        Lt = function () {
          Object(j.a)(function (e) {
            var t;
            return {
              cardDisplay: Object(d.a)(
                { display: "flex", justifyContent: "space-between" },
                e.breakpoints.down("sm"),
                { flexDirection: "column" }
              ),
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                }),
                Object(d.a)(t, e.breakpoints.down("md"), { marginLeft: 0 }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                marginRight: 10,
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                title: "A-level Chemistry",
                subtitle:
                  "The first step in understanding the behaviour of the molecules all around us.",
              }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                centered: !0,
                auto: !0,
                narrow: !0,
                column: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { maxWidth: 800 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "How we teach it",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "A level chemistry is a subject that requires a good understanding of many different mathematical principles along with the knowledge required for the base content of the subject. In order for a student to grasp a subject in chemistry to the level they require it is important that they are exposed to questions in a variety of different contexts and situations. When it comes to solving problems and working through questions confidence and lots of practice is the most effective way of ensuring you are as prepared as you can be.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "Past paper questions will be used to discover what areas of weakness a student has and then these can be focused on. Each lesson will have a plan of what we intend to cover but the lessons will not be restricted to this, and if questions come up or a student is stronger in a certain area than expected then we can cover whatever the tutor and student feel would be the most effective topics to benefit learning.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    children: [
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "1.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children: "Interactive learning",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "2.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children: "Exam questions",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "3.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children:
                              "Constant revision over trickier concepts",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                background: "lightteal",
                children: Object(p.jsx)(y.a, {
                  variant: "h1",
                  children: "About the tutors",
                }),
              }),
              Object(p.jsx)(Tt, {
                background: "lightteal",
                person: yt,
                name: "Alex Field",
                aboutme:
                  "I am an undergraduate studying medical biosciences at Imperial College London. I studied Biology, Chemistry and maths at A level achieving an A* in Maths and an A grade in biology and chemistry. I have always had a strong passion for the biological sciences and often researched topics beyond the spectrum of what was necessary for the course. I have always had a strong ability in the sciences and achieved the top grades at GCSE level and am continuing to show great ability after being accepted into Imperial College.",
              }),
            ],
          });
        },
        Yt = function () {
          Object(j.a)(function (e) {
            var t;
            return {
              cardDisplay: Object(d.a)(
                { display: "flex", justifyContent: "space-between" },
                e.breakpoints.down("sm"),
                { flexDirection: "column" }
              ),
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                }),
                Object(d.a)(t, e.breakpoints.down("md"), { marginLeft: 0 }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                marginRight: 10,
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                title: "A-level Biology",
                subtitle: "An introduction into how life works.",
              }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                centered: !0,
                auto: !0,
                narrow: !0,
                column: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { maxWidth: 800 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "How we teach it",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "A level biology is a content heavy A level that requires a deep understanding of a wide range of different topics. We have found that focusing solely on individual topics is a difficult and intensive way to learn the content. A more applicable and holistic way of learning the content is to look at the topics as a whole and understand the deeper links between the different areas of study. This method of learning allows a student to not only remember the content but also grasp a deeper knowledge into how things interact throughout the course aiding in their ability to remember the more difficult topics.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "During sessions we will complete past paper questions in order to find areas of weakness within the students' knowledge. This information will then be used to personalise a course of study that will best benefit the student to achieve the goals they are set out to achieve.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    children: [
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "1.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children: "Interactive learning",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "2.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children: "Exam questions",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "3.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children:
                              "Constant revision over trickier concepts",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                background: "lightteal",
                children: Object(p.jsx)(y.a, {
                  variant: "h1",
                  children: "About the tutors",
                }),
              }),
              Object(p.jsx)(Tt, {
                background: "lightteal",
                person: yt,
                name: "Alex Field",
                aboutme:
                  "I am an undergraduate studying medical biosciences at Imperial College London. I studied Biology, Chemistry and maths at A level achieving an A* in Maths and an A grade in biology and chemistry. I have always had a strong passion for the biological sciences and often researched topics beyond the spectrum of what was necessary for the course. I have always had a strong ability in the sciences and achieved the top grades at GCSE level and am continuing to show great ability after being accepted into Imperial College.",
              }),
            ],
          });
        },
        Et = function () {
          Object(j.a)(function (e) {
            var t;
            return {
              cardDisplay: Object(d.a)(
                { display: "flex", justifyContent: "space-between" },
                e.breakpoints.down("sm"),
                { flexDirection: "column" }
              ),
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                }),
                Object(d.a)(t, e.breakpoints.down("md"), { marginLeft: 0 }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                marginRight: 10,
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                title: "A-level Art and Design",
                subtitle: "Realising your unique creativity",
              }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                centered: !0,
                auto: !0,
                narrow: !0,
                column: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { maxWidth: 800 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "How we teach it",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "Finding your artistic passion in a subject as broad as Art can be difficult, however at Real Tutor we strive to help you find your style while also achieving the grade you deserve. We believe in individuality, being unique is something to fuel your art - so why hide it?",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "A-Level Art is about presenting you and your style, whatever that may be; we will help you explore out of your comfort zone while also making sure your artwork is true to you and a representation of what you can do. With drawing, painting and digital tips and tricks from ex-students who achieved an A or higher at A-Level, you\u2019re guaranteed to learn something new for your sketchbooks, and how to apply that to impress the exam board. You will also see examples of your personal tutor\u2019s sketchbooks, pieces and even final products during the course, to inspire and guide you along your own artistic journey.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "Not only will you impress examiners, but you will also leave Sixth Form with a strong and personal portfolio ready for your future University applications.",
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    style: { minWidth: 400 },
                    children: [
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "1.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Practical work",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "2.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Super experienced tutor",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "3.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Human approach",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                background: "lightteal",
                children: Object(p.jsx)(y.a, {
                  variant: "h1",
                  children: "About the tutors",
                }),
              }),
              Object(p.jsx)(Tt, {
                background: "lightteal",
                person: vt,
                name: "Rio Keefe",
                aboutme:
                  "I am a student of Illustration at UCA Farnham. I also studied Art and Graphics in school and Sixth Form, achieving an A in Art and Design at A-Level and an A* in Graphic Products at GCSE. I used my gap year to develop my portfolio and grow my online presence; I started my small business on Etsy where I sell illustration prints and hand-made stickers. I have always taken art seriously, despite its reputation as an \u2018easy\u2019 subject, and use it to express myself. I strongly believe art cannot be filtered and should fully represent you and your vision for it, embrace your individuality in every aspect of your life - especially in your artwork.",
              }),
            ],
          });
        },
        Ft = function () {
          Object(j.a)(function (e) {
            var t;
            return {
              cardDisplay: Object(d.a)(
                { display: "flex", justifyContent: "space-between" },
                e.breakpoints.down("sm"),
                { flexDirection: "column" }
              ),
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                }),
                Object(d.a)(t, e.breakpoints.down("md"), { marginLeft: 0 }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                marginRight: 10,
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                title: "A-level Economics",
                subtitle: "Finance fuels the world, we\u2019re here to help",
              }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                centered: !0,
                auto: !0,
                narrow: !0,
                column: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { maxWidth: 800 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "How we teach it",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "A Level Economics is one of the most diverse and intersecting subjects that is offered. You learn about Micro, Macro and psychological Economics. It is a subject that you truly need to understand in order to succeed. Simply learning facts will not allow you to achieve the best grade you can get. At Real Tutor we are going to give you the knowledge and the understanding you need. In addition to this, we can help you develop your writing skills and exam technique.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "At GCSE most subjects are not massively time pressured and require less focus on exam technique and writing. This changes for A level, where every second counts, selecting the right question matters and the structure of your essay can determine your mark-band. Our tutors have recently gone through this ordeal themselves and can equip you with everything you need to maximise your mark within the exam. Finally it is important in economics to look at the cause and effect of certain economic stimuli, and come to a conclusion on how this will affect the wider economy. We will challenge you to think critically and analytically, which you then can apply to create chains of events and link together key points.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    style: { minWidth: 400 },
                    children: [
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "1.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Exam technique and writing style",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "2.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Confident Understanding",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "3.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Analytical skills",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                background: "lightteal",
                children: Object(p.jsx)(y.a, {
                  variant: "h1",
                  children: "About the tutors",
                }),
              }),
              Object(p.jsx)(Tt, {
                background: "lightteal",
                person: ft,
                name: "Zach Seth",
                aboutme:
                  "I currently work as a Risk Analyst in the financial sector. I am the COO of Real tutor, a company I co-founded with John. We noticed a gap in the market for high quality tutoring and didn't hesitate to take the opportunity. My business mindset came from my love of Economics, in which I achieved an A at Farnborough Sixth-form college. I enjoyed reading beyond the curriculum and continue to read about finance and economics now. I would like to share my mindset with students by developing their understanding of the world of finance.",
              }),
            ],
          });
        },
        Bt = function () {
          Object(j.a)(function (e) {
            var t;
            return {
              cardDisplay: Object(d.a)(
                { display: "flex", justifyContent: "space-between" },
                e.breakpoints.down("sm"),
                { flexDirection: "column" }
              ),
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                }),
                Object(d.a)(t, e.breakpoints.down("md"), { marginLeft: 0 }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                marginRight: 10,
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                title: "A-level Computer Science",
                subtitle: "A way to understand the digital world.",
              }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                centered: !0,
                auto: !0,
                narrow: !0,
                column: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { maxWidth: 800 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "How we teach it",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "We aim to make you understand computers and the technology world, there is a lot of theory involved with this A-level and a lot of things that you need to remember, and to do this we will present information in an interactive way that actually explains the world around you, instead of just sitting you down and lecturing you. We will show you how the internet works, how you could create tiny networks, develop your own project, and even a sneak peak at the code that makes up our systems.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "You will undertake your own tiny projects as you learn as well as constantly looking at exam questions and looking ahead in the specification to know what you need to do next, so you really understand exactly what you need to learn.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    style: { minWidth: 400 },
                    children: [
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "1.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Experiment based learning",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "2.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Taught by the CEO",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "3.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Actual coding",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                background: "lightteal",
                children: Object(p.jsx)(y.a, {
                  variant: "h1",
                  children: "About the tutors",
                }),
              }),
              Object(p.jsx)(Tt, {
                background: "lightteal",
                person: Ot,
                name: "John Costa",
                aboutme:
                  "I am taking a Computer Science degree at Royal Holloway, I am also the CEO of Real Tutor. Maths has been my favourite subject until I met computer science but it still holds a crutial place in my heart. I have an A* in A-level Maths, an A in Further Maths and an A in Computer Science, as well as years of tutoring experience.",
              }),
            ],
          });
        },
        Mt = function () {
          Object(j.a)(function (e) {
            var t;
            return {
              cardDisplay: Object(d.a)(
                { display: "flex", justifyContent: "space-between" },
                e.breakpoints.down("sm"),
                { flexDirection: "column" }
              ),
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                }),
                Object(d.a)(t, e.breakpoints.down("md"), { marginLeft: 0 }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                marginRight: 10,
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                title: "GCSE Computer Science",
                subtitle: "An introduction to computers and programming.",
              }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                centered: !0,
                auto: !0,
                narrow: !0,
                column: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { maxWidth: 800 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "How we teach it",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "In many ways, GCSE Computer Science is all about the teacher. If you have a teacher you don\u2019t quite get along with or whose style of teaching doesn\u2019t do you any favours, you won\u2019t like computer science. At Real Tutor we make sure you love computer science. There are simply too many fascinating things about this subject for a student to not enjoy it, so rest assured that you will not only pass your exams with flying colours, but you will have a deeper appreciation for computers.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "We make sure we take a hands on approach, how are you going to learn about computers without coding? We will make sure to do tiny programs and show you theoretical concepts with a hands on approach, aided by our use of digital solutions to enhance tutoring.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    style: { minWidth: 400 },
                    children: [
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "1.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Coding. Coding. Coding.",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "2.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Hands on with theory.",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "3.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h4",
                            color: "primary",
                            children: "Constant revision.",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                background: "lightteal",
                children: Object(p.jsx)(y.a, {
                  variant: "h1",
                  children: "About the tutors",
                }),
              }),
              Object(p.jsx)(Tt, {
                background: "lightteal",
                person: Ot,
                name: "John Costa",
                aboutme:
                  "I am taking a Computer Science degree at Royal Holloway, I am also the CEO of Real Tutor. Maths has been my favourite subject until I met computer science but it still holds a crutial place in my heart. I have an A* in A-level Maths, an A in Further Maths and an A in Computer Science, as well as years of tutoring experience.",
              }),
            ],
          });
        },
        Gt = function () {
          Object(j.a)(function (e) {
            var t;
            return {
              cardDisplay: Object(d.a)(
                { display: "flex", justifyContent: "space-between" },
                e.breakpoints.down("sm"),
                { flexDirection: "column" }
              ),
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                }),
                Object(d.a)(t, e.breakpoints.down("md"), { marginLeft: 0 }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                marginRight: 10,
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                title: "GCSE Physics",
                subtitle: "A welcome challenge, made easier.",
              }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                centered: !0,
                auto: !0,
                narrow: !0,
                column: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { maxWidth: 800 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "How we teach it",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "Physics can be a very daunting GCSE, and can often appear overwhelming. Feel the same? Well you're in the right place. At Real Tutor, we offer top notch tuition in order to tackle difficult problems. Physics theory that may not seem to make sense at first can be explained in different ways by making analogies to what the student already knows. Both the theory and the maths will be given equal weightings of importance.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "At the end of each session, the student will be given worked examples, and aided exam questions that cover the content in that lesson. Any work not finished in lesson may be assigned as optional homework tasks, IE for revision purposes. Also, depending on how the tutor feels the student is progressing, the student may be given surprise questions on previously covered topics, as a form of revision. Comprehending topics and mathematics is only the beginning. The true key to scoring higher in your exams (physics especially) is revising what we have previously covered.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    children: [
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "1.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children: "Constant Revision",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "2.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children:
                              "Using analogies that the student can understand.",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "3.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children: "Constant student feedback",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                background: "lightteal",
                children: Object(p.jsx)(y.a, {
                  variant: "h1",
                  children: "About the tutors",
                }),
              }),
              Object(p.jsx)(Tt, {
                background: "offwhite",
                person: gt,
                name: "Ronnie Nobbs",
                aboutme:
                  "I am an undergraduate student at Southampton University, a part of the Russell Group, and I am working towards a Master\u2019s Degree in Physics with Mathematics. I have an A* in Maths, an A in Physics and a B in Further Maths, coupled with experience in tutoring Physics and Maths. Physics was unlocked as a passion of mine once I started my GCSE learning in Year 10. I would research topics far beyond the scope of the GCSE course. It lit a fire underneath me, a burning passion to grow my knowledge, a conquest in life that will never end. Mathematics naturally followed on from my passion in physics, for it is the language of the universe.",
              }),
            ],
          });
        },
        Ut = function () {
          Object(j.a)(function (e) {
            var t;
            return {
              cardDisplay: Object(d.a)(
                { display: "flex", justifyContent: "space-between" },
                e.breakpoints.down("sm"),
                { flexDirection: "column" }
              ),
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                }),
                Object(d.a)(t, e.breakpoints.down("md"), { marginLeft: 0 }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                marginRight: 10,
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                title: "GCSE Chemistry",
                subtitle:
                  "Learning about the properties of chemicals and how they interact.",
              }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                centered: !0,
                auto: !0,
                narrow: !0,
                column: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { maxWidth: 800 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "How we teach it",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "While it is possible to remember all of the theory in chemistry, we have found that being able to spot patterns in reactions and being able to predict what will happen in specific situations is a far better way to learn the content in this subject. While learning to recognise patterns the student will be able to understand to a deeper level why things happen in the way they do and over time they will learn to apply the knowledge they have to exam questions.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "Constant revision and visiting topics that we have not covered in a while during sessions will be the most effective way of ensuring that the student will get the best result possible and reach their full potential.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    children: [
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "1.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children: "Interactive learning",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "2.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children: "Exam questions",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "3.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children:
                              "Constant revision over trickier concepts",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                background: "lightteal",
                children: Object(p.jsx)(y.a, {
                  variant: "h1",
                  children: "About the tutors",
                }),
              }),
              Object(p.jsx)(Tt, {
                background: "lightteal",
                person: yt,
                name: "Alex Field",
                aboutme:
                  "I am an undergraduate studying medical biosciences at Imperial College London. I studied Biology, Chemistry and maths at A level achieving an A* in Maths and an A grade in biology and chemistry. I have always had a strong passion for the biological sciences and often researched topics beyond the spectrum of what was necessary for the course. I have always had a strong ability in the sciences and achieved the top grades at GCSE level and am continuing to show great ability after being accepted into Imperial College.",
              }),
            ],
          });
        },
        _t = function () {
          Object(j.a)(function (e) {
            var t;
            return {
              cardDisplay: Object(d.a)(
                { display: "flex", justifyContent: "space-between" },
                e.breakpoints.down("sm"),
                { flexDirection: "column" }
              ),
              tutorPicturesWrapper:
                ((t = {
                  width: "100%",
                  height: 500,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 100,
                }),
                Object(d.a)(t, e.breakpoints.down("md"), { marginLeft: 0 }),
                Object(d.a)(t, e.breakpoints.down("xs"), {
                  flexDirection: "column",
                }),
                t),
              tutorPictures: {
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionY: "center",
                backgroundPositionX: "center",
                marginRight: 10,
              },
            };
          })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, {
                title: "GCSE Biology",
                subtitle: "The first step in understanding life around us.",
              }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                centered: !0,
                auto: !0,
                narrow: !0,
                column: !0,
                children: [
                  Object(p.jsxs)("div", {
                    style: { maxWidth: 800 },
                    children: [
                      Object(p.jsx)(y.a, {
                        variant: "h1",
                        children: "How we teach it",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "GCSE biology is one of the most popular GCSE options and as one of the core sciences a good understanding of the subject is important when it comes to progressing further in science. It is well known that there is a large workload that comes with biology and because of this the more exposure to the subject that the student can have then the better they will perform.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)(y.a, {
                        variant: "body2",
                        children:
                          "Throughout the sessions we will go over the content of the course focusing on the topics that the student finds more difficult to understand. We will also use exam questions and past paper examples to consolidate the learning that the student has done and to aid with revision.",
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                  Object(p.jsxs)("div", {
                    children: [
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "1.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children: "Interactive learning",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "2.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children: "Exam questions",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                      Object(p.jsxs)("div", {
                        style: { display: "flex" },
                        children: [
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "secondary",
                            style: { marginRight: 10 },
                            children: "3.",
                          }),
                          Object(p.jsx)(y.a, {
                            variant: "h5",
                            color: "primary",
                            children:
                              "Constant revision over trickier concepts",
                          }),
                        ],
                      }),
                      Object(p.jsx)("br", {}),
                    ],
                  }),
                ],
              }),
              Object(p.jsx)(ht, {
                auto: !0,
                background: "lightteal",
                children: Object(p.jsx)(y.a, {
                  variant: "h1",
                  children: "About the tutors",
                }),
              }),
              Object(p.jsx)(Tt, {
                background: "lightteal",
                person: yt,
                name: "Alex Field",
                aboutme:
                  "I am an undergraduate studying medical biosciences at Imperial College London. I studied Biology, Chemistry and maths at A level achieving an A* in Maths and an A grade in biology and chemistry. I have always had a strong passion for the biological sciences and often researched topics beyond the spectrum of what was necessary for the course. I have always had a strong ability in the sciences and achieved the top grades at GCSE level and am continuing to show great ability after being accepted into Imperial College.",
              }),
            ],
          });
        },
        qt = function () {
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, { small: !0, title: "Privacy Policy" }),
              Object(p.jsxs)(ht, {
                background: "offwhite",
                auto: !0,
                children: [
                  Object(p.jsx)("div", {
                    id: "md_en",
                    "data-target": "out_en",
                    class: "agreement_md",
                    children: Object(p.jsxs)(m.a, {
                      lineHeight: 2,
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          children: "Privacy Policy",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children: "Last updated: June 06, 2021",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.",
                        }),
                        Object(p.jsxs)(y.a, {
                          variant: "body2",
                          children: [
                            "We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the",
                            " ",
                            Object(p.jsx)("a", {
                              href: "https://www.privacypolicies.com/privacy-policy-generator/",
                              target: "_blank",
                              children: "Privacy Policy Generator",
                            }),
                            ".",
                          ],
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          children: "Interpretation and Definitions",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "h2",
                          children: "Interpretation",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h2",
                          children: "Definitions",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children: "For the purposes of this Privacy Policy:",
                        }),
                        Object(p.jsxs)("ul", {
                          children: [
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "Account",
                                  }),
                                  " means a unique account created for You to access our Service or parts of our Service.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "Company",
                                  }),
                                  ' (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Real Tutor Ltd, Skelmorlie, Gough Road, Fleet, England, GU51 4LJ.',
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "Cookies",
                                  }),
                                  " are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "Country",
                                  }),
                                  " refers to: United Kingdom",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "Device",
                                  }),
                                  " means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "Personal Data",
                                  }),
                                  " is any information that relates to an identified or identifiable individual.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "Service",
                                  }),
                                  " refers to the Website.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "Service Provider",
                                  }),
                                  " means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "Usage Data",
                                  }),
                                  " refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "Website",
                                  }),
                                  " refers to Real Tutor, accessible from",
                                  " ",
                                  Object(p.jsx)("a", {
                                    href: "www.realtutor.online",
                                    rel: "external nofollow noopener",
                                    target: "_blank",
                                    children: "www.realtutor.online",
                                  }),
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", { children: "You" }),
                                  " means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          children: "Collecting and Using Your Personal Data",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "h2",
                          children: "Types of Data Collected",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: "Personal Data",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:",
                        }),
                        Object(p.jsxs)("ul", {
                          children: [
                            Object(p.jsx)("li", {
                              children: Object(p.jsx)(y.a, {
                                variant: "body2",
                                children: "Email address",
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsx)(y.a, {
                                variant: "body2",
                                children: "First name and last name",
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsx)(y.a, {
                                variant: "body2",
                                children: "Phone number",
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsx)(y.a, {
                                variant: "body2",
                                children: "Usage Data",
                              }),
                            }),
                          ],
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: "Usage Data",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "Usage Data is collected automatically when using the Service.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: "Tracking Technologies and Cookies",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:",
                        }),
                        Object(p.jsxs)("ul", {
                          children: [
                            Object(p.jsxs)("li", {
                              children: [
                                Object(p.jsx)("strong", {
                                  children: "Cookies or Browser Cookies.",
                                }),
                                " A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.",
                              ],
                            }),
                            Object(p.jsxs)("li", {
                              children: [
                                Object(p.jsx)("strong", {
                                  children: "Flash Cookies.",
                                }),
                                ' Certain features of our Service may use local stored objects (or Flash Cookies) to collect and store information about Your preferences or Your activity on our Service. Flash Cookies are not managed by the same browser settings as those used for Browser Cookies. For more information on how You can delete Flash Cookies, please read "Where can I change the settings for disabling, or deleting local shared objects?" available at',
                                " ",
                                Object(p.jsx)("a", {
                                  href: "https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_",
                                  rel: "external nofollow noopener",
                                  target: "_blank",
                                  children:
                                    "https://helpx.adobe.com/flash-player/kb/disable-local-shared-objects-flash.html#main_Where_can_I_change_the_settings_for_disabling__or_deleting_local_shared_objects_",
                                }),
                              ],
                            }),
                            Object(p.jsxs)("li", {
                              children: [
                                Object(p.jsx)("strong", {
                                  children: "Web Beacons.",
                                }),
                                " Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).",
                              ],
                            }),
                          ],
                        }),
                        Object(p.jsxs)(y.a, {
                          variant: "body2",
                          children: [
                            'Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser. Learn more about cookies:',
                            " ",
                            Object(p.jsx)("a", {
                              href: "https://www.privacypolicies.com/blog/cookies/",
                              target: "_blank",
                              children: "What Are Cookies?",
                            }),
                            ".",
                          ],
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "We use both Session and Persistent Cookies for the purposes set out below:",
                        }),
                        Object(p.jsxs)("ul", {
                          children: [
                            Object(p.jsxs)("li", {
                              children: [
                                Object(p.jsx)(y.a, {
                                  variant: "body2",
                                  children: Object(p.jsx)("strong", {
                                    children: "Necessary / Essential Cookies",
                                  }),
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "body2",
                                  children: "Type: Session Cookies",
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "body2",
                                  children: "Administered by: Us",
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "body2",
                                  children:
                                    "Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.",
                                }),
                              ],
                            }),
                            Object(p.jsxs)("li", {
                              children: [
                                Object(p.jsx)(y.a, {
                                  variant: "body2",
                                  children: Object(p.jsx)("strong", {
                                    children:
                                      "Cookies Policy / Notice Acceptance Cookies",
                                  }),
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "body2",
                                  children: "Type: Persistent Cookies",
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "body2",
                                  children: "Administered by: Us",
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "body2",
                                  children:
                                    "Purpose: These Cookies identify if users have accepted the use of cookies on the Website.",
                                }),
                              ],
                            }),
                            Object(p.jsxs)("li", {
                              children: [
                                Object(p.jsx)(y.a, {
                                  variant: "body2",
                                  children: Object(p.jsx)("strong", {
                                    children: "Functionality Cookies",
                                  }),
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "body2",
                                  children: "Type: Persistent Cookies",
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "body2",
                                  children: "Administered by: Us",
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "body2",
                                  children:
                                    "Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h2",
                          children: "Use of Your Personal Data",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "The Company may use Personal Data for the following purposes:",
                        }),
                        Object(p.jsxs)("ul", {
                          children: [
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children:
                                      "To provide and maintain our Service",
                                  }),
                                  ", including to monitor the usage of our Service.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "To manage Your Account:",
                                  }),
                                  " to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children:
                                      "For the performance of a contract:",
                                  }),
                                  " ",
                                  "the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "To contact You:",
                                  }),
                                  " To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "To provide You",
                                  }),
                                  " with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "To manage Your requests:",
                                  }),
                                  " To attend and manage Your requests to Us.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "For business transfers:",
                                  }),
                                  " We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.",
                                ],
                              }),
                            }),
                            Object(p.jsx)("li", {
                              children: Object(p.jsxs)(y.a, {
                                variant: "body2",
                                children: [
                                  Object(p.jsx)("strong", {
                                    children: "For other purposes",
                                  }),
                                  ": We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.",
                                ],
                              }),
                            }),
                          ],
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "We may share Your personal information in the following situations:",
                        }),
                        Object(p.jsxs)("ul", {
                          children: [
                            Object(p.jsxs)("li", {
                              children: [
                                Object(p.jsx)("strong", {
                                  children: "With Service Providers:",
                                }),
                                " We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.",
                              ],
                            }),
                            Object(p.jsxs)("li", {
                              children: [
                                Object(p.jsx)("strong", {
                                  children: "For business transfers:",
                                }),
                                " We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.",
                              ],
                            }),
                            Object(p.jsxs)("li", {
                              children: [
                                Object(p.jsx)("strong", {
                                  children: "With Affiliates:",
                                }),
                                " We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.",
                              ],
                            }),
                            Object(p.jsxs)("li", {
                              children: [
                                Object(p.jsx)("strong", {
                                  children: "With business partners:",
                                }),
                                " We may share Your information with Our business partners to offer You certain products, services or promotions.",
                              ],
                            }),
                            Object(p.jsxs)("li", {
                              children: [
                                Object(p.jsx)("strong", {
                                  children: "With other users:",
                                }),
                                " when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.",
                              ],
                            }),
                            Object(p.jsxs)("li", {
                              children: [
                                Object(p.jsx)("strong", {
                                  children: "With Your consent",
                                }),
                                ": We may disclose Your personal information for any other purpose with Your consent.",
                              ],
                            }),
                          ],
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h2",
                          children: "Retention of Your Personal Data",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h2",
                          children: "Transfer of Your Personal Data",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to \u2014 and maintained on \u2014 computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h2",
                          children: "Disclosure of Your Personal Data",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: "Business Transactions",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: "Law enforcement",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: "Other legal requirements",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:",
                        }),
                        Object(p.jsxs)("ul", {
                          children: [
                            Object(p.jsx)("li", {
                              children: "Comply with a legal obligation",
                            }),
                            Object(p.jsx)("li", {
                              children:
                                "Protect and defend the rights or property of the Company",
                            }),
                            Object(p.jsx)("li", {
                              children:
                                "Prevent or investigate possible wrongdoing in connection with the Service",
                            }),
                            Object(p.jsx)("li", {
                              children:
                                "Protect the personal safety of Users of the Service or the public",
                            }),
                            Object(p.jsx)("li", {
                              children: "Protect against legal liability",
                            }),
                          ],
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h2",
                          children: "Security of Your Personal Data",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          children: "Children's Privacy",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          children: "Links to Other Websites",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          children: "Changes to this Privacy Policy",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            'We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.',
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
                        }),
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          children: "Contact Us",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "body2",
                          children:
                            "If you have any questions about this Privacy Policy, You can contact us:",
                        }),
                        Object(p.jsx)("ul", {
                          children: Object(p.jsx)("li", {
                            children: "By email: john@realtutor.online",
                          }),
                        }),
                      ],
                    }),
                  }),
                  Object(p.jsx)("br", {}),
                ],
              }),
            ],
          });
        },
        zt = function () {
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, { small: !0, title: "Our Manifesto" }),
              Object(p.jsxs)(ht, {
                auto: !0,
                narrow: !0,
                background: "offwhite",
                column: !0,
                children: [
                  Object(p.jsx)(y.a, {
                    variant: "h2",
                    align: "center",
                    children:
                      "Our mission is to help students achieve their potential through technology.",
                  }),
                  Object(p.jsx)(y.a, { variant: "body2" }),
                ],
              }),
            ],
          });
        },
        Ht = function () {
          var e,
            t = Object(j.a)(function (e) {
              return {
                contactWrapper: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                },
                icons: Object(d.a)({ fontSize: 75 }, e.breakpoints.down("md"), {
                  fontSize: 50,
                }),
                socialWrapper: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                },
              };
            })();
          return Object(p.jsxs)("div", {
            children: [
              Object(p.jsx)(it, {}),
              Object(p.jsx)(lt, { small: !0, title: "Contact Us" }),
              Object(p.jsx)(Me.a, {
                children: Object(p.jsxs)(ht, {
                  background: "offwhite",
                  auto: !0,
                  narrow: !0,
                  children: [
                    Object(p.jsxs)("div", {
                      style: { flex: 1 },
                      id: "contactSection",
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          align: "center",
                          children: "Contact us",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "h2",
                          children: "Emails:",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsxs)("div", {
                          className: t.contactWrapper,
                          children: [
                            Object(p.jsx)(qe.a, {
                              color: "primary",
                              className: t.icons,
                              fontSize: "large",
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              align: "center",
                              children: "john@realtutor.online (CEO)",
                            }),
                          ],
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsxs)("div", {
                          className: t.contactWrapper,
                          children: [
                            Object(p.jsx)(qe.a, {
                              color: "primary",
                              className: t.icons,
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              align: "center",
                              children: "zach@realtutor.online (COO)",
                            }),
                          ],
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsx)(y.a, {
                          variant: "h3",
                          children: "Phone numbers:",
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsxs)("div", {
                          className: t.contactWrapper,
                          children: [
                            Object(p.jsx)(He.a, {
                              color: "primary",
                              className: t.icons,
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              align: "center",
                              children: "+44 7443 494507 (Zach)",
                            }),
                          ],
                        }),
                        Object(p.jsx)("br", {}),
                        Object(p.jsxs)("div", {
                          className: t.contactWrapper,
                          children: [
                            Object(p.jsx)(He.a, {
                              color: "primary",
                              className: t.icons,
                            }),
                            Object(p.jsx)(y.a, {
                              variant: "h4",
                              align: "center",
                              children: "+44 7576 870036 (John)",
                            }),
                          ],
                        }),
                        Object(p.jsx)("br", {}),
                      ],
                    }),
                    Object(p.jsxs)("div", {
                      style: { flex: 1 },
                      children: [
                        Object(p.jsx)(y.a, {
                          variant: "h1",
                          align: "center",
                          children: "Socials",
                        }),
                        Object(p.jsxs)("div", {
                          className: t.sectionPaper,
                          style: { flexDirection: "column", height: "80%" },
                          children: [
                            Object(p.jsxs)("div", {
                              className: t.socialWrapper,
                              onClick: function () {
                                return window
                                  .open(
                                    "https://www.instagram.com/realtutor_online/",
                                    "_blank"
                                  )
                                  .focus();
                              },
                              children: [
                                Object(p.jsx)(Ke.a, {
                                  color: "secondary",
                                  className: t.icons,
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "h3",
                                  children: "@realtutor_online",
                                }),
                              ],
                            }),
                            Object(p.jsx)("br", {}),
                            Object(p.jsx)("br", {}),
                            Object(p.jsxs)("div", {
                              className: t.socialWrapper,
                              onClick: function () {
                                return window
                                  .open(
                                    "https://www.youtube.com/channel/UCDIjZ-wLxyCc9yB49pK-Pqw",
                                    "_blank"
                                  )
                                  .focus();
                              },
                              children: [
                                Object(p.jsx)(Qe.a, {
                                  color: "secondary",
                                  className: t.icons,
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "h3",
                                  children: "Real Tutor",
                                }),
                              ],
                            }),
                            Object(p.jsx)("br", {}),
                            Object(p.jsx)("br", {}),
                            Object(p.jsxs)(
                              "div",
                              ((e = { className: t.socialWrapper }),
                              Object(d.a)(e, "className", t.socialWrapper),
                              Object(d.a)(e, "onClick", function () {
                                return window
                                  .open(
                                    "https://www.facebook.com/real.tutor.509/",
                                    "_blank"
                                  )
                                  .focus();
                              }),
                              Object(d.a)(e, "children", [
                                Object(p.jsx)(et.a, {
                                  color: "secondary",
                                  className: t.icons,
                                }),
                                Object(p.jsx)(y.a, {
                                  variant: "h3",
                                  children: "Real Tutor",
                                }),
                              ]),
                              e)
                            ),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Xt = n(24),
        Jt = n(110);
      var Vt = function () {
          return (
            console.log("dsa"),
            (function () {
              var e = Object(Xt.f)();
              Object(a.useEffect)(
                function () {
                  window.GA_INITIALIZED ||
                    (Jt.a.initialize("UA-169952657-1"),
                    (window.GA_INITIALIZED = !0)),
                    Jt.a.set({ page: e.pathname }),
                    Jt.a.pageview(e.pathname);
                },
                [e]
              );
            })(),
            Object(p.jsxs)(Xt.c, {
              children: [
                Object(p.jsx)(Xt.a, { exact: !0, path: "/", component: ut }),
                Object(p.jsx)(Xt.a, { path: "/login", component: g }),
                Object(p.jsx)(Xt.a, {
                  path: "/studentdashboard",
                  component: Te,
                }),
                Object(p.jsx)(Xt.a, { path: "/tutordashboard", component: De }),
                Object(p.jsx)(Xt.a, {
                  path: "/managerdashboard",
                  component: Ee,
                }),
                Object(p.jsx)(Xt.a, { path: "/payment", component: Wt }),
                Object(p.jsx)(Xt.a, { path: "/how-it-works", component: xt }),
                Object(p.jsx)(Xt.a, { path: "/team", component: wt }),
                Object(p.jsx)(Xt.a, { path: "/contactus", component: Ht }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/subjects",
                  component: pt,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/alevelmaths",
                  component: Nt,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/alevelfurthermaths",
                  component: Rt,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/alevelphysics",
                  component: Dt,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/alevelchemistry",
                  component: Lt,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/alevelbiology",
                  component: Yt,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/alevelart",
                  component: Et,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/aleveleconomics",
                  component: Ft,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/alevelcomputerscience",
                  component: Bt,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/gcsecomputerscience",
                  component: Mt,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/gcsephysics",
                  component: Gt,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/gcsechemistry",
                  component: Ut,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/gcsebiology",
                  component: _t,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/privacypolicy",
                  component: qt,
                }),
                Object(p.jsx)(Xt.a, {
                  exact: !0,
                  path: "/manifesto",
                  component: zt,
                }),
              ],
            })
          );
        },
        Kt = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 340))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  i = t.getFCP,
                  r = t.getLCP,
                  c = t.getTTFB;
                n(e), a(e), i(e), r(e), c(e);
              });
        },
        Zt = n(325),
        Qt = n(324),
        $t = n(130),
        en = n(174),
        tn = n(331),
        nn = n(108),
        an = n(323),
        rn = n(109),
        cn = Object(en.a)({
          palette: {
            primary: { main: nn.a[900] },
            secondary: { main: an.a[500] },
            offWhite: { main: "#FAFAFA" },
            lightTeal: { main: an.a[200] },
            lightBlue: { main: rn.a[200] },
            grey: { main: "#333333" },
            cards: "#FFFFFF",
            divBackground: "#009688",
            leftNav: "#313131",
            lightText: "#DDDDDD",
          },
          typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            h1: { fontSize: "4em", color: nn.a[900] },
            h3: { fontWeight: "lighter" },
            h4: { fontWeight: "lighter" },
            h5: { fontWeight: "lighter" },
            body2: { fontWeight: "lighter", fontSize: "20px" },
          },
          breakpoints: {
            values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
          },
          zIndex: { drawer: 0 },
        }),
        sn = (cn = Object(tn.a)(cn));
      c.a.render(
        Object(p.jsx)(i.a.StrictMode, {
          children: Object(p.jsxs)(Qt.a, {
            theme: sn,
            children: [
              Object(p.jsx)(Zt.a, {}),
              Object(p.jsx)($t.a, { children: Object(p.jsx)(Vt, {}) }),
            ],
          }),
        }),
        document.getElementById("root")
      ),
        Kt();
    },
  },
  [[256, 1, 2]],
]);
//# sourceMappingURL=main.26351259.chunk.js.map
