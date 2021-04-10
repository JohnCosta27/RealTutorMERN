(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    194: function (e, t, n) {},
    195: function (e, t, n) {},
    234: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(2),
        c = n(0),
        r = n.n(c),
        s = n(15),
        i = n.n(s),
        o = (n(194), n(195), n(11)),
        l = n.n(o),
        d = n(17),
        j = n(12),
        u = n(267),
        p = n(274),
        b = n(298);
      var h = function (e) {
          var t = Object(u.a)(function (e) {
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
          return Object(a.jsx)(b.a, {
            variant: "filled",
            className: t.customTextField,
            label: e.label,
            onChange: e.onChange,
            error: e.error,
            onFocus: e.onFocus,
            InputProps: { className: t.multilineColor },
            type: e.type,
            children: "Hello there",
          });
        },
        O = n(295),
        x = n(161);
      var f = function () {
          var e = Object(c.useState)(""),
            t = Object(j.a)(e, 2),
            n = t[0],
            r = t[1],
            s = Object(c.useState)(""),
            i = Object(j.a)(s, 2),
            o = i[0],
            b = i[1],
            f = Object(c.useState)(!1),
            m = Object(j.a)(f, 2),
            v = m[0],
            g = m[1],
            w = Object(u.a)(function (e) {
              return {
                leftNav: {
                  flex: 1,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  minWidth: 400,
                },
                leftNavPaper: { backgroundColor: e.palette.secondary.main },
              };
            }),
            y = (function () {
              var e = Object(d.a)(
                l.a.mark(function e(t) {
                  var a, c, s;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (a = { email: n, password: o }),
                            (e.next = 4),
                            fetch("/accounts/login", {
                              method: "POST",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify(a),
                            })
                          );
                        case 4:
                          return (c = e.sent), (e.next = 7), c.json();
                        case 7:
                          null != (s = e.sent).error
                            ? (g(!0), r(""), b(""))
                            : ((document.cookie = "token=" + s.cookie),
                              1 == s.level
                                ? (document.location.href =
                                    "studentdashboard?studentid=" + s.id)
                                : s.level >= 2 &&
                                  (document.location.href = "/"));
                        case 9:
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
            N = function () {
              return g(!1);
            },
            S = w();
          return Object(a.jsxs)("div", {
            className: "App",
            children: [
              Object(a.jsx)(x.a, {
                className: S.leftNavPaper,
                square: !0,
                children: Object(a.jsx)(O.a, {
                  className: S.leftNav,
                  children: Object(a.jsxs)("form", {
                    className: "loginWrapper",
                    children: [
                      Object(a.jsx)(h, {
                        label: "Email",
                        onChange: function (e) {
                          r(e.target.value), g(!1);
                        },
                        error: v,
                        onFocus: N,
                      }),
                      Object(a.jsx)(h, {
                        label: "Password",
                        onChange: function (e) {
                          g(!1), b(e.target.value);
                        },
                        error: v,
                        onFocus: N,
                        type: "password",
                      }),
                      Object(a.jsx)(p.a, {
                        variant: "contained",
                        color: "primary",
                        type: "submit",
                        value: "submit",
                        onClick: y,
                        children: "Login",
                      }),
                    ],
                  }),
                }),
              }),
              Object(a.jsx)("div", { className: "mainWrapper" }),
            ],
          });
        },
        m = n(90),
        v = n(302),
        g = n(273),
        w = n(238),
        y = n(278),
        N = n(279),
        S = n(275),
        C = n(276),
        T = n(135),
        P = n.n(T),
        k = n(102),
        A = n.n(k),
        L = n(136),
        D = n.n(L),
        B = n(100),
        R = n.n(B),
        E = n(101),
        W = n.n(E),
        I = function (e) {
          var t = Object(u.a)(function (e) {
            return {
              leftNavPaper: {
                backgroundColor: e.palette.leftNav,
                height: "100%",
                width: 300,
              },
              button: { marginLeft: 5, marginRight: 5 },
              drawer: { width: 300, zIndex: 0 },
              drawerPaper: { width: 300 },
              icon: { color: e.palette.divBackground },
              text: { color: e.palette.lightText },
              appBar: { zIndex: e.zIndex.drawer + 1 },
              toolbar: { overflow: "auto" },
            };
          })();
          return 1 == e.level
            ? Object(a.jsxs)("div", {
                children: [
                  Object(a.jsx)(S.a, {
                    position: "fixed",
                    className: t.appBar,
                    children: Object(a.jsx)(C.a, {
                      children: Object(a.jsx)(m.a, {
                        variant: "h6",
                        noWrap: !0,
                        children: "Real Tutor",
                      }),
                    }),
                  }),
                  Object(a.jsxs)(v.a, {
                    className: t.drawer,
                    variant: "permanent",
                    classes: { paper: t.drawerPaper },
                    children: [
                      Object(a.jsx)(C.a, {}),
                      Object(a.jsx)("div", {
                        className: t.drawerContainer,
                        children: Object(a.jsxs)(g.a, {
                          children: [
                            Object(a.jsxs)(
                              w.a,
                              {
                                button: !0,
                                onClick: function () {
                                  return e.changeState(0);
                                },
                                children: [
                                  Object(a.jsx)(y.a, {
                                    children: Object(a.jsx)(R.a, {}),
                                  }),
                                  Object(a.jsx)(N.a, { primary: "Dashboard" }),
                                ],
                              },
                              0
                            ),
                            Object(a.jsxs)(
                              w.a,
                              {
                                button: !0,
                                onClick: function () {
                                  return e.changeState(1);
                                },
                                children: [
                                  Object(a.jsx)(y.a, {
                                    children: Object(a.jsx)(W.a, {}),
                                  }),
                                  Object(a.jsx)(N.a, {
                                    primary: "View lessons",
                                  }),
                                ],
                              },
                              1
                            ),
                            Object(a.jsxs)(
                              w.a,
                              {
                                button: !0,
                                onClick: function () {
                                  return e.changeState(2);
                                },
                                children: [
                                  Object(a.jsx)(y.a, {
                                    children: Object(a.jsx)(A.a, {}),
                                  }),
                                  Object(a.jsx)(N.a, {
                                    primary: "View progress",
                                  }),
                                ],
                              },
                              2
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : e.level >= 2
            ? Object(a.jsxs)("div", {
                children: [
                  Object(a.jsx)(S.a, {
                    position: "fixed",
                    className: t.appBar,
                    children: Object(a.jsx)(C.a, {
                      children: Object(a.jsx)(m.a, {
                        variant: "h6",
                        noWrap: !0,
                        children: "Real Tutor",
                      }),
                    }),
                  }),
                  Object(a.jsxs)(v.a, {
                    className: t.drawer,
                    variant: "permanent",
                    classes: { paper: t.drawerPaper },
                    children: [
                      Object(a.jsx)(C.a, {}),
                      Object(a.jsx)("div", {
                        className: t.drawerContainer,
                        children: Object(a.jsxs)(g.a, {
                          children: [
                            Object(a.jsxs)(
                              w.a,
                              {
                                button: !0,
                                onClick: function () {
                                  return e.changeState(0);
                                },
                                children: [
                                  Object(a.jsx)(y.a, {
                                    children: Object(a.jsx)(R.a, {}),
                                  }),
                                  Object(a.jsx)(N.a, { primary: "Dashboard" }),
                                ],
                              },
                              0
                            ),
                            Object(a.jsxs)(
                              w.a,
                              {
                                button: !0,
                                onClick: function () {
                                  return e.changeState(1);
                                },
                                children: [
                                  Object(a.jsx)(y.a, {
                                    children: Object(a.jsx)(W.a, {}),
                                  }),
                                  Object(a.jsx)(N.a, {
                                    primary: "View lessons",
                                  }),
                                ],
                              },
                              1
                            ),
                            Object(a.jsxs)(
                              w.a,
                              {
                                button: !0,
                                onClick: function () {
                                  return e.changeState(2);
                                },
                                children: [
                                  Object(a.jsx)(y.a, {
                                    children: Object(a.jsx)(A.a, {}),
                                  }),
                                  Object(a.jsx)(N.a, {
                                    primary: "View progress",
                                  }),
                                ],
                              },
                              2
                            ),
                            Object(a.jsxs)(
                              w.a,
                              {
                                button: !0,
                                onClick: function () {
                                  return e.changeState(3);
                                },
                                children: [
                                  Object(a.jsx)(y.a, {
                                    children: Object(a.jsx)(P.a, {}),
                                  }),
                                  Object(a.jsx)(N.a, {
                                    primary: "Plan lesson",
                                  }),
                                ],
                              },
                              3
                            ),
                            Object(a.jsxs)(
                              w.a,
                              {
                                button: !0,
                                onClick: function () {
                                  return e.changeState(4);
                                },
                                children: [
                                  Object(a.jsx)(y.a, {
                                    children: Object(a.jsx)(D.a, {}),
                                  }),
                                  Object(a.jsx)(N.a, { primary: "Add report" }),
                                ],
                              },
                              4
                            ),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : Object(a.jsx)("div", {});
        },
        F = n(45),
        U = n(34),
        G = n(280),
        M = n(281),
        J = n(85),
        _ = n(137),
        V = n(23),
        z = n(294),
        H = function () {
          var e = Object(c.useState)(new Date()),
            t = Object(j.a)(e, 2),
            n = t[0],
            r = t[1],
            s = Object(c.useState)([]),
            i = Object(j.a)(s, 2),
            o = i[0],
            h = i[1],
            O = Object(c.useState)(""),
            f = Object(j.a)(O, 2),
            v = f[0],
            g = f[1],
            w = Object(c.useState)(""),
            y = Object(j.a)(w, 2),
            N = y[0],
            S = y[1],
            C = Object(c.useState)([]),
            T = Object(j.a)(C, 2),
            P = T[0],
            k = T[1];
          Object(c.useEffect)(function () {
            A();
          }, []);
          var A = (function () {
              var e = Object(d.a)(
                l.a.mark(function e() {
                  var t, n, a, c, r, s, i, o;
                  return l.a.wrap(function (e) {
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
                          (c = e.sent), (r = []), (s = Object(U.a)(c));
                          try {
                            for (s.s(); !(i = s.n()).done; )
                              (o = i.value),
                                r.push({ value: o._id, label: o.content });
                          } catch (l) {
                            s.e(l);
                          } finally {
                            s.f();
                          }
                          h(r);
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
            L = (function () {
              var e = Object(d.a)(
                l.a.mark(function e(t) {
                  var a, c, r, s, i, o, d, j, u, p, b, h, O, x;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            (a = window.location.search),
                            (c = new URLSearchParams(a)),
                            (r = c.get("studentid")),
                            (e.next = 6),
                            fetch("/accounts/getid", {
                              method: "GET",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                            })
                          );
                        case 6:
                          return (s = e.sent), (e.next = 9), s.json();
                        case 9:
                          (i = e.sent),
                            (o = i.id),
                            (d = Math.floor(new Date(n).getTime() / 1e3)),
                            (j = []),
                            (u = Object(U.a)(P));
                          try {
                            for (u.s(); !(p = u.n()).done; )
                              (b = p.value), j.push(b.value);
                          } catch (l) {
                            u.e(l);
                          } finally {
                            u.f();
                          }
                          return (
                            (h = {
                              title: v,
                              date: d,
                              plan: N,
                              studentid: r,
                              tutorid: o,
                              specPoints: j,
                            }),
                            console.log(h),
                            (e.next = 19),
                            fetch("/accounts/addlesson", {
                              method: "POST",
                              headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json",
                              },
                              credentials: "include",
                              body: JSON.stringify(h),
                            })
                          );
                        case 19:
                          return (O = e.sent), (e.next = 22), O.json();
                        case 22:
                          (x = e.sent),
                            console.log(x),
                            void 0 != x.error ||
                              (document.location.href =
                                "studentdashboard?studentid=" + r);
                        case 25:
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
            D = Object(u.a)(function (e) {
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
                button: { width: "50%" },
              };
            })();
          return Object(a.jsx)("form", {
            onSubmit: L,
            children: Object(a.jsxs)(G.a, {
              container: !0,
              spacing: 3,
              className: D.lessonsWrapper,
              children: [
                Object(a.jsx)(G.a, {
                  item: !0,
                  lg: 8,
                  md: 12,
                  children: Object(a.jsxs)(x.a, {
                    elevation: 2,
                    className: D.inputBox,
                    children: [
                      Object(a.jsx)(m.a, {
                        variant: "h2",
                        children: "Lesson Title",
                      }),
                      Object(a.jsx)(b.a, {
                        label: "Title",
                        placeholder: "This is a title",
                        variant: "outlined",
                        onBlur: function (e) {
                          g(e.target.value);
                        },
                        style: { width: "50%" },
                      }),
                      Object(a.jsx)(M.a, { className: D.gridItem }),
                      Object(a.jsx)(m.a, {
                        variant: "h2",
                        children: "Lesson Planning",
                      }),
                      Object(a.jsx)(b.a, {
                        label: "Plan",
                        placeholder: "This is plan",
                        multiline: !0,
                        rows: 3,
                        variant: "outlined",
                        className: D.multiLineInput,
                        onBlur: function (e) {
                          S(e.target.value);
                        },
                      }),
                      Object(a.jsx)(M.a, {}),
                      Object(a.jsx)(m.a, {
                        variant: "h2",
                        children: "Date and Time",
                      }),
                      Object(a.jsx)(V.a, {
                        utils: _.a,
                        children: Object(a.jsx)(z.a, {
                          onChange: r,
                          style: { width: "50%" },
                          inputVariant: "outlined",
                          value: n,
                        }),
                      }),
                      Object(a.jsx)(M.a, { className: D.gridItem }),
                      Object(a.jsx)(p.a, {
                        type: "submit",
                        variant: "contained",
                        color: "primary",
                        className: D.button,
                        children: "Submit plan",
                      }),
                    ],
                  }),
                }),
                Object(a.jsx)(G.a, {
                  item: !0,
                  lg: 4,
                  md: 12,
                  children: Object(a.jsxs)(x.a, {
                    className: D.inputBox,
                    children: [
                      Object(a.jsx)(m.a, {
                        variant: "h3",
                        children: "Select planned spec points",
                      }),
                      Object(a.jsx)(J.a, {
                        options: o,
                        theme: function (e) {
                          return Object(F.a)(
                            Object(F.a)({}, e),
                            {},
                            {
                              colors: Object(F.a)(
                                Object(F.a)({}, e.colors),
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
                        onChange: k,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        K = n(283),
        q = function () {
          var e = Object(c.useState)({}),
            t = Object(j.a)(e, 2),
            n = t[0],
            r = t[1];
          Object(c.useEffect)(function () {
            s();
          }, []);
          var s = (function () {
            var e = Object(d.a)(
              l.a.mark(function e() {
                var t, n, a, c;
                return l.a.wrap(function (e) {
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
                        (c = e.sent), r(c);
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
          return null != n.error
            ? Object(a.jsx)("div", {})
            : Object(a.jsxs)("div", {
                children: [
                  Object(a.jsx)(m.a, {
                    variant: "h4",
                    align: "left",
                    children: "Latest lesson:",
                  }),
                  Object(a.jsx)(m.a, {
                    variant: "body1",
                    align: "left",
                    children: n.plan,
                  }),
                ],
              });
        },
        Q = n(282),
        X = function () {
          var e = Object(c.useState)({ empty: !0 }),
            t = Object(j.a)(e, 2),
            n = t[0],
            r = t[1];
          Object(c.useEffect)(function () {
            s();
          }, []);
          var s = (function () {
            var e = Object(d.a)(
              l.a.mark(function e() {
                var t, n, a, c;
                return l.a.wrap(function (e) {
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
                        (c = e.sent), r(c);
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
          return Object(a.jsxs)("div", {
            children: [
              Object(a.jsxs)(m.a, {
                variant: "h4",
                children: [n.progress, "% Course Completion"],
              }),
              Object(a.jsx)(Q.a, { variant: "determinate", value: n.progress }),
            ],
          });
        },
        Y = function () {
          var e = Object(c.useState)({ empty: !0 }),
            t = Object(j.a)(e, 2),
            n = t[0],
            r = t[1];
          Object(c.useEffect)(function () {
            s();
          }, []);
          var s = (function () {
            var e = Object(d.a)(
              l.a.mark(function e() {
                var t, n, a, c;
                return l.a.wrap(function (e) {
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
                        (c = e.sent), r(c);
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
          return null != n.error || n.empty
            ? Object(a.jsx)("div", {
                children: Object(a.jsx)(m.a, {
                  variant: "h4",
                  children: "No upcoming lessons",
                }),
              })
            : Object(a.jsxs)("div", {
                children: [
                  Object(a.jsx)(m.a, {
                    variant: "h4",
                    align: "left",
                    children: n.plan,
                  }),
                  Object(a.jsx)("ul", {
                    children: n.specPoints.map(function (e) {
                      return Object(a.jsx)(
                        "li",
                        {
                          children: Object(a.jsx)(m.a, {
                            variant: "body1",
                            align: "left",
                            children: e.content,
                          }),
                        },
                        e
                      );
                    }),
                  }),
                ],
              });
        },
        Z = function () {
          var e = window.location.search,
            t = new URLSearchParams(e),
            n = Object(u.a)(function (e) {
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
                cardAction: {
                  width: "50%",
                  marginLeft: "25%",
                  marginBottom: 10,
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                },
                button: { marginLeft: 5, marginRight: 5 },
              };
            })();
          return Object(a.jsxs)(G.a, {
            container: !0,
            children: [
              Object(a.jsx)(G.a, {
                item: !0,
                lg: 6,
                md: 12,
                children: Object(a.jsx)(K.a, {
                  className: n.paper,
                  children: Object(a.jsxs)(O.a, {
                    display: "flex",
                    className: n.cardsWrapper,
                    children: [
                      Object(a.jsx)(m.a, {
                        variant: "h2",
                        children: "Lessons",
                      }),
                      Object(a.jsx)(O.a, {
                        className: n.cardContent,
                        children: Object(a.jsx)(q, {}),
                      }),
                      Object(a.jsxs)(O.a, {
                        className: n.cardAction,
                        children: [
                          Object(a.jsx)(p.a, {
                            className: n.button,
                            variant: "contained",
                            color: "primary",
                            onClick: function () {
                              document.location.href =
                                "addreport?studentid=" + t.get("studentid");
                            },
                            children: "Add report",
                          }),
                          Object(a.jsx)(p.a, {
                            className: n.button,
                            variant: "contained",
                            color: "primary",
                            onClick: function () {
                              document.location.href =
                                "lessons?studentid=" + t.get("studentid");
                            },
                            children: "View lessons",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              Object(a.jsx)(G.a, {
                item: !0,
                lg: 6,
                md: 12,
                children: Object(a.jsx)(K.a, {
                  className: n.paper,
                  children: Object(a.jsxs)(O.a, {
                    display: "flex",
                    className: n.cardsWrapper,
                    children: [
                      Object(a.jsx)(m.a, {
                        variant: "h2",
                        children: "Upcoming",
                      }),
                      Object(a.jsx)(O.a, {
                        className: n.cardContent,
                        children: Object(a.jsx)(Y, {}),
                      }),
                      Object(a.jsx)(O.a, {
                        className: n.cardAction,
                        children: Object(a.jsx)(p.a, {
                          className: n.button,
                          variant: "contained",
                          color: "primary",
                          onClick: function () {
                            document.location.href =
                              "planlesson?studentid=" + t.get("studentid");
                          },
                          children: "Plan lesson",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              Object(a.jsx)(G.a, {
                item: !0,
                lg: 6,
                md: 12,
                children: Object(a.jsx)(K.a, {
                  className: n.paper,
                  children: Object(a.jsxs)(O.a, {
                    display: "flex",
                    className: n.cardsWrapper,
                    children: [
                      Object(a.jsx)(m.a, {
                        variant: "h2",
                        children: "Progress",
                      }),
                      Object(a.jsx)(O.a, {
                        className: n.cardContent,
                        children: Object(a.jsx)(X, {}),
                      }),
                      Object(a.jsx)(O.a, {
                        className: n.cardAction,
                        children: Object(a.jsx)(p.a, {
                          variant: "contained",
                          color: "primary",
                          onClick: function () {
                            document.location.href =
                              "progress?studentid=" + t.get("studentid");
                          },
                          children: "View progress",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              Object(a.jsx)(G.a, {
                item: !0,
                lg: 6,
                md: 12,
                children: Object(a.jsx)(K.a, {
                  className: n.paper,
                  children: Object(a.jsxs)(O.a, {
                    display: "flex",
                    className: n.cardsWrapper,
                    children: [
                      Object(a.jsx)(m.a, {
                        variant: "h2",
                        children: "Details",
                      }),
                      Object(a.jsx)(O.a, { className: n.cardContent }),
                      Object(a.jsx)(O.a, {
                        className: n.cardAction,
                        children: Object(a.jsx)(p.a, {
                          variant: "contained",
                          color: "primary",
                          children: "Edit details",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        $ = n(55),
        ee = n(296),
        te = n(284),
        ne = n(300),
        ae = n(272),
        ce = function () {
          var e,
            t = Object(c.useState)([]),
            n = Object(j.a)(t, 2),
            r = n[0],
            s = n[1],
            i = Object(c.useState)({ empty: !0 }),
            o = Object(j.a)(i, 2),
            h = o[0],
            O = o[1],
            f = Object(c.useState)({ empty: !0 }),
            v = Object(j.a)(f, 2),
            g = (v[0], v[1], Object(c.useState)([])),
            w = Object(j.a)(g, 2),
            y = w[0],
            N = w[1],
            S = Object(c.useState)(""),
            C = Object(j.a)(S, 2),
            T = C[0],
            P = C[1],
            k = Object(c.useState)([]),
            A = Object(j.a)(k, 2),
            L = A[0],
            D = A[1];
          Object(c.useEffect)(function () {
            B(), R();
          }, []);
          var B = (function () {
              var e = Object(d.a)(
                l.a.mark(function e() {
                  var t, n, a, c, r, s, i, o;
                  return l.a.wrap(function (e) {
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
                          (c = e.sent), (r = []), (s = Object(U.a)(c));
                          try {
                            for (s.s(); !(i = s.n()).done; )
                              (o = i.value),
                                r.push({ value: o._id, label: o.content });
                          } catch (l) {
                            s.e(l);
                          } finally {
                            s.f();
                          }
                          N(r);
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
            R = (function () {
              var e = Object(d.a)(
                l.a.mark(function e() {
                  var t, n, a, c, r, i, o, d;
                  return l.a.wrap(function (e) {
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
                          (c = e.sent), (r = []), (i = Object(U.a)(c));
                          try {
                            for (i.s(); !(o = i.n()).done; )
                              void 0 == (d = o.value).report && r.push(d);
                          } catch (l) {
                            i.e(l);
                          } finally {
                            i.f();
                          }
                          s(r);
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
            E = (function () {
              var e = Object(d.a)(
                l.a.mark(function e(t) {
                  var n, a, c, r, s, i, o, d, j;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (n = window.location.search),
                            (a = new URLSearchParams(n)),
                            (c = a.get("studentid")),
                            t.preventDefault(),
                            (r = []),
                            (s = Object(U.a)(L));
                          try {
                            for (s.s(); !(i = s.n()).done; )
                              (o = i.value), r.push(o.value);
                          } catch (l) {
                            s.e(l);
                          } finally {
                            s.f();
                          }
                          return (
                            (d = {
                              lessonID: h,
                              report: T,
                              specPointsAchieved: r,
                            }),
                            (e.next = 10),
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
                        case 10:
                          return (j = e.sent), (e.next = 13), j.json();
                        case 13:
                          void 0 != e.sent.error ||
                            (document.location.href =
                              "studentdashboard?studentid=" + c);
                        case 15:
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
            W = Object(u.a)(function (e) {
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
                button: { width: "50%" },
                dropdown: { width: "50%" },
                divider: { marginTop: 10, marginBottom: 10 },
              };
            })();
          return Object(a.jsx)("form", {
            onSubmit: E,
            children: Object(a.jsxs)(G.a, {
              container: !0,
              spacing: 3,
              className: W.lessonsWrapper,
              children: [
                Object(a.jsx)(G.a, {
                  item: !0,
                  lg: 8,
                  md: 12,
                  children: Object(a.jsxs)(x.a, {
                    elevation: 2,
                    className: W.inputBox,
                    children: [
                      Object(a.jsx)(m.a, {
                        variant: "h2",
                        children: "Add report",
                      }),
                      Object(a.jsx)(M.a, { className: W.divider }),
                      Object(a.jsx)(m.a, {
                        variant: "h3",
                        children: "Select lesson",
                      }),
                      Object(a.jsxs)(ae.a, {
                        className: W.dropdown,
                        variant: "outlined",
                        children: [
                          Object(a.jsx)(ne.a, {
                            id: "select-lesson",
                            children: "Select lesson",
                          }),
                          Object(a.jsx)(
                            ee.a,
                            ((e = {
                              labelId: "Select lesson",
                              id: "lesson report",
                            }),
                            Object($.a)(e, "labelId", "select-lesson"),
                            Object($.a)(e, "value", h.date),
                            Object($.a)(e, "label", "Select lesson"),
                            Object($.a)(e, "onChange", function (e) {
                              O(e.target.value);
                            }),
                            Object($.a)(
                              e,
                              "children",
                              r.map(function (e) {
                                return Object(a.jsx)(
                                  te.a,
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
                      Object(a.jsx)(M.a, { className: W.divider }),
                      Object(a.jsx)(m.a, {
                        variant: "h3",
                        children: "Lesson Report",
                      }),
                      Object(a.jsx)(b.a, {
                        label: "Add lesson report",
                        placeholder: "Add lesson report",
                        multiline: !0,
                        rows: 3,
                        variant: "outlined",
                        className: W.multiLineInput,
                        onBlur: function (e) {
                          P(e.target.value);
                        },
                      }),
                      Object(a.jsx)(M.a, { className: W.gridItem }),
                      Object(a.jsx)(p.a, {
                        type: "submit",
                        variant: "contained",
                        color: "primary",
                        className: W.button,
                        children: "Submit Report",
                      }),
                    ],
                  }),
                }),
                Object(a.jsx)(G.a, {
                  item: !0,
                  lg: 4,
                  md: 12,
                  children: Object(a.jsxs)(x.a, {
                    className: W.inputBox,
                    children: [
                      Object(a.jsx)(m.a, {
                        variant: "h3",
                        children: "Select achieved spec points",
                      }),
                      Object(a.jsx)(J.a, {
                        options: y,
                        theme: function (e) {
                          return Object(F.a)(
                            Object(F.a)({}, e),
                            {},
                            {
                              colors: Object(F.a)(
                                Object(F.a)({}, e.colors),
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
                        onChange: D,
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        re = n(286),
        se = n(290),
        ie = n(289),
        oe = n(285),
        le = n(287),
        de = n(288),
        je = function () {
          var e = Object(c.useState)([]),
            t = Object(j.a)(e, 2),
            n = t[0],
            r = t[1];
          Object(c.useEffect)(function () {
            s();
          }, []);
          var s = (function () {
              var e = Object(d.a)(
                l.a.mark(function e() {
                  var t, n, a, c, s, o, d, j;
                  return l.a.wrap(function (e) {
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
                          if (void 0 != (c = e.sent).error);
                          else {
                            (s = []), (o = Object(U.a)(c));
                            try {
                              for (o.s(); !(d = o.n()).done; )
                                (j = d.value),
                                  s.push(
                                    i(
                                      j.content,
                                      new Date(1e3 * j.date).toDateString(
                                        "en-UK"
                                      ),
                                      j._id
                                    )
                                  );
                            } catch (l) {
                              o.e(l);
                            } finally {
                              o.f();
                            }
                            r(s);
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
            i = function (e, t, n) {
              return { content: e, date: t, status: n };
            },
            o = Object(u.a)(function (e) {
              return {
                studentBoxWrapper: {
                  width: "90%",
                  marginTop: 50,
                  marginLeft: "5%",
                },
                studentBox: { display: "flex", flexDirection: "column" },
              };
            })();
          return Object(a.jsx)(oe.a, {
            component: x.a,
            children: Object(a.jsxs)(re.a, {
              className: o.table,
              "aria-label": "simple table",
              children: [
                Object(a.jsx)(le.a, {
                  children: Object(a.jsxs)(de.a, {
                    children: [
                      Object(a.jsx)(ie.a, { children: "Spec point" }),
                      Object(a.jsx)(ie.a, { children: "Date Reviewed" }),
                      Object(a.jsx)(ie.a, { children: "Status" }),
                    ],
                  }),
                }),
                Object(a.jsx)(se.a, {
                  children: n.map(function (e) {
                    return Object(a.jsxs)(
                      de.a,
                      {
                        children: [
                          Object(a.jsx)(ie.a, { children: e.content }),
                          Object(a.jsx)(ie.a, { children: e.date }),
                          Object(a.jsx)(ie.a, { children: e.status }),
                        ],
                      },
                      e.name
                    );
                  }),
                }),
              ],
            }),
          });
        },
        ue = function () {
          var e = Object(c.useState)([]),
            t = Object(j.a)(e, 2),
            n = t[0],
            r = t[1];
          Object(c.useEffect)(function () {
            s();
          }, []);
          var s = (function () {
              var e = Object(d.a)(
                l.a.mark(function e() {
                  var t, n, a, c, s, o, d, j, u, p, b, h, O, x, f, m;
                  return l.a.wrap(function (e) {
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
                          (c = e.sent), (s = []), (o = Object(U.a)(c));
                          try {
                            for (o.s(); !(d = o.n()).done; ) {
                              (j = d.value),
                                (u = []),
                                (p = Object(U.a)(j.specPoints));
                              try {
                                for (p.s(); !(b = p.n()).done; )
                                  (h = b.value), u.push(h.content);
                              } catch (l) {
                                p.e(l);
                              } finally {
                                p.f();
                              }
                              (O = []), (x = Object(U.a)(j.specPointsAchieved));
                              try {
                                for (x.s(); !(f = x.n()).done; )
                                  (m = f.value), O.push(m.content);
                              } catch (l) {
                                x.e(l);
                              } finally {
                                x.f();
                              }
                              s.push(
                                i(
                                  j._id,
                                  j.title,
                                  j.plan,
                                  u,
                                  j.report,
                                  O,
                                  j.date
                                )
                              );
                            }
                          } catch (l) {
                            o.e(l);
                          } finally {
                            o.f();
                          }
                          r(s);
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
            i = function (e, t, n, a, c, r, s) {
              return {
                _id: e,
                title: t,
                plan: n,
                specPoints: a,
                report: c,
                specPointsAchieved: r,
                date: s,
              };
            },
            o = Object(u.a)(function (e) {
              return { table: { minWidth: 650 } };
            })();
          return Object(a.jsx)(oe.a, {
            component: x.a,
            children: Object(a.jsxs)(re.a, {
              className: o.table,
              "aria-label": "simple table",
              children: [
                Object(a.jsx)(le.a, {
                  children: Object(a.jsxs)(de.a, {
                    children: [
                      Object(a.jsx)(ie.a, { children: "Title" }),
                      Object(a.jsx)(ie.a, { children: "Plan" }),
                      Object(a.jsx)(ie.a, { children: "Specification Points" }),
                      Object(a.jsx)(ie.a, { children: "Report" }),
                      Object(a.jsx)(ie.a, {
                        children: "Achieved Specification Points",
                      }),
                      Object(a.jsx)(ie.a, {
                        style: { width: 150 },
                        children: "Date",
                      }),
                    ],
                  }),
                }),
                Object(a.jsx)(se.a, {
                  children: n.map(function (e) {
                    return Object(a.jsxs)(
                      de.a,
                      {
                        children: [
                          Object(a.jsx)(ie.a, {
                            component: "th",
                            scope: "row",
                            children: e.title,
                          }),
                          Object(a.jsx)(ie.a, { children: e.plan }),
                          Object(a.jsx)(ie.a, {
                            children: Object(a.jsx)("ul", {
                              children: e.specPoints.map(function (e) {
                                return Object(a.jsx)("li", { children: e });
                              }),
                            }),
                          }),
                          Object(a.jsx)(ie.a, { children: e.report }),
                          Object(a.jsx)(ie.a, {
                            children: Object(a.jsx)("ul", {
                              children: e.specPointsAchieved.map(function (e) {
                                return Object(a.jsx)("li", { children: e });
                              }),
                            }),
                          }),
                          Object(a.jsx)(ie.a, {
                            children: new Date(1e3 * e.date).toDateString(
                              "en-UK"
                            ),
                          }),
                        ],
                      },
                      e._id
                    );
                  }),
                }),
              ],
            }),
          });
        },
        pe = function () {
          var e = window.location.search,
            t = new URLSearchParams(e),
            n = Object(u.a)(function (e) {
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
              };
            }),
            r = Object(c.useState)({ empty: !0 }),
            s = Object(j.a)(r, 2),
            i = s[0],
            o = s[1],
            p = Object(c.useState)(0),
            b = Object(j.a)(p, 2),
            h = b[0],
            O = b[1];
          Object(c.useEffect)(function () {
            x();
          }, []);
          var x = (function () {
              var e = Object(d.a)(
                l.a.mark(function e() {
                  var n, a;
                  return l.a.wrap(function (e) {
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
                          (a = e.sent),
                            console.log(a),
                            1 == a.level &&
                              t.get("studentid") != a.id &&
                              (document.location.href =
                                "studentdashboard?studentid=" + a.id),
                            o(a);
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
            f = n();
          return i.level < 1
            ? Object(a.jsx)("div", {
                className: "app",
                children: Object(a.jsx)(m.a, {
                  variant: "h1",
                  children: "Back to the login",
                }),
              })
            : 1 == i.level
            ? Object(a.jsxs)("div", {
                className: "App",
                children: [
                  Object(a.jsx)(I, { changeState: O, level: i.level }),
                  Object(a.jsxs)("div", {
                    className: f.content,
                    children: [
                      Object(a.jsx)("div", {
                        className: f.studentNameWrapper,
                        children: Object(a.jsx)(m.a, {
                          variant: "h1",
                          children: "John Costa",
                        }),
                      }),
                      0 === h
                        ? Object(a.jsx)(Z, { level: i.level })
                        : Object(a.jsx)("div", {}),
                      1 === h
                        ? Object(a.jsx)(ue, { level: i.level })
                        : Object(a.jsx)("div", {}),
                      2 === h
                        ? Object(a.jsx)(je, { level: i.level })
                        : Object(a.jsx)("div", {}),
                      3 === h
                        ? Object(a.jsx)(H, { level: i.level })
                        : Object(a.jsx)("div", {}),
                      4 === h
                        ? Object(a.jsx)(ce, { level: i.level })
                        : Object(a.jsx)("div", {}),
                    ],
                  }),
                ],
              })
            : i.level >= 2
            ? Object(a.jsxs)("div", {
                className: "App",
                children: [
                  Object(a.jsx)(I, { changeState: O, level: i.level }),
                  Object(a.jsxs)("div", {
                    className: f.content,
                    children: [
                      Object(a.jsx)("div", {
                        className: f.studentNameWrapper,
                        children: Object(a.jsx)(m.a, {
                          variant: "h1",
                          children: "John Costa",
                        }),
                      }),
                      0 === h ? Object(a.jsx)(Z, {}) : Object(a.jsx)("div", {}),
                      1 === h
                        ? Object(a.jsx)(ue, {})
                        : Object(a.jsx)("div", {}),
                      2 === h
                        ? Object(a.jsx)(je, {})
                        : Object(a.jsx)("div", {}),
                      3 === h ? Object(a.jsx)(H, {}) : Object(a.jsx)("div", {}),
                      4 === h
                        ? Object(a.jsx)(ce, {})
                        : Object(a.jsx)("div", {}),
                    ],
                  }),
                ],
              })
            : Object(a.jsx)("div", {});
        },
        be = function (e) {
          var t = Object(c.useState)([]),
            n = Object(j.a)(t, 2),
            r = (n[0], n[1]);
          Object(c.useEffect)(function () {
            o();
          }, []);
          var s = window.location.search,
            i = new URLSearchParams(s),
            o = (function () {
              var e = Object(d.a)(
                l.a.mark(function e() {
                  var t, n;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            fetch(
                              "/accounts/gettutorstudents?tutorid=" +
                                i.get("tutorid"),
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
                          (n = e.sent), console.log(n), r(n);
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
            })();
          return Object(a.jsx)("div", {});
        },
        he = function () {
          var e = window.location.search,
            t =
              (new URLSearchParams(e),
              Object(u.a)(function (e) {
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
                };
              })),
            n = Object(c.useState)({ empty: !0 }),
            r = Object(j.a)(n, 2),
            s = r[0],
            i = r[1],
            o = Object(c.useState)(0),
            p = Object(j.a)(o, 2),
            b = p[0],
            h = p[1];
          Object(c.useEffect)(function () {
            O();
          }, []);
          var O = (function () {
              var e = Object(d.a)(
                l.a.mark(function e() {
                  var t, n;
                  return l.a.wrap(function (e) {
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
                          (n = e.sent), console.log(n), i(n);
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
            x = t();
          return s.level <= 1
            ? Object(a.jsx)("div", {
                className: "app",
                children: Object(a.jsx)(m.a, {
                  variant: "h1",
                  children: "Back to the login",
                }),
              })
            : s.level >= 2
            ? Object(a.jsxs)("div", {
                className: "App",
                children: [
                  Object(a.jsx)(I, { changeState: h, level: s.level }),
                  Object(a.jsxs)("div", {
                    className: x.content,
                    children: [
                      Object(a.jsx)("div", {
                        className: x.studentNameWrapper,
                        children: Object(a.jsx)(m.a, {
                          variant: "h1",
                          children: "John Costa",
                        }),
                      }),
                      0 === b
                        ? Object(a.jsx)(be, { level: s.level })
                        : Object(a.jsx)("div", {}),
                      1 === b
                        ? Object(a.jsx)(ue, { level: s.level })
                        : Object(a.jsx)("div", {}),
                      2 === b
                        ? Object(a.jsx)(je, { level: s.level })
                        : Object(a.jsx)("div", {}),
                      3 === b
                        ? Object(a.jsx)(H, { level: s.level })
                        : Object(a.jsx)("div", {}),
                      4 === b
                        ? Object(a.jsx)(ce, { level: s.level })
                        : Object(a.jsx)("div", {}),
                    ],
                  }),
                ],
              })
            : Object(a.jsx)("div", {});
        },
        Oe = n(293),
        xe = n(292),
        fe = n(157),
        me = n(291),
        ve = n(87),
        ge = Object(fe.a)({
          palette: {
            primary: me.a,
            secondary: ve.a,
            cards: "#FFFFFF",
            divBackground: "#009688",
            leftNav: "#313131",
            lightText: "#DDDDDD",
          },
          typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            h1: { fontSize: "5em", color: ve.a[900] },
            h3: { fontWeight: "lighter" },
          },
        }),
        we = n(156),
        ye = n(21);
      var Ne = function () {
          return Object(a.jsxs)(xe.a, {
            theme: ge,
            children: [
              Object(a.jsx)(Oe.a, {}),
              Object(a.jsx)(we.a, {
                children: Object(a.jsxs)(ye.c, {
                  children: [
                    Object(a.jsx)(ye.a, {
                      exact: !0,
                      path: "/",
                      component: he,
                    }),
                    Object(a.jsx)(ye.a, { path: "/login", component: f }),
                    Object(a.jsx)(ye.a, {
                      path: "/studentdashboard",
                      component: pe,
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        Se = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 305))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  c = t.getFCP,
                  r = t.getLCP,
                  s = t.getTTFB;
                n(e), a(e), c(e), r(e), s(e);
              });
        };
      i.a.render(
        Object(a.jsx)(r.a.StrictMode, { children: Object(a.jsx)(Ne, {}) }),
        document.getElementById("root")
      ),
        Se();
    },
  },
  [[234, 1, 2]],
]);
//# sourceMappingURL=main.9b0a28f4.chunk.js.map
