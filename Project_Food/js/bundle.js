!(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var o = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) ||
                Object.defineProperty(t, e, { enumerable: !0, get: r });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (
                (n.r(r),
                Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t,
                }),
                2 & e && "string" != typeof t)
            )
                for (var o in t)
                    n.d(
                        r,
                        o,
                        function (e) {
                            return t[e];
                        }.bind(null, o)
                    );
            return r;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 119));
})([
    function (t, e, n) {
        (function (e) {
            var n = function (t) {
                return t && t.Math == Math && t;
            };
            t.exports =
                n("object" == typeof globalThis && globalThis) ||
                n("object" == typeof window && window) ||
                n("object" == typeof self && self) ||
                n("object" == typeof e && e) ||
                Function("return this")();
        }.call(this, n(41)));
    },
    function (t, e, n) {
        var r = n(0),
            o = n(45),
            i = n(5),
            c = n(46),
            a = n(52),
            u = n(88),
            s = o("wks"),
            f = r.Symbol,
            l = u ? f : (f && f.withoutSetter) || c;
        t.exports = function (t) {
            return (
                i(s, t) ||
                    (a && i(f, t) ? (s[t] = f[t]) : (s[t] = l("Symbol." + t))),
                s[t]
            );
        };
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    function (t, e, n) {
        var r = n(4);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(String(t) + " is not an object");
            return t;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    },
    function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e);
        };
    },
    function (t, e, n) {
        var r = n(8),
            o = n(10),
            i = n(20);
        t.exports = r
            ? function (t, e, n) {
                  return o.f(t, e, i(1, n));
              }
            : function (t, e, n) {
                  return (t[e] = n), t;
              };
    },
    function (t, e, n) {
        var r = n(0),
            o = n(24).f,
            i = n(6),
            c = n(11),
            a = n(27),
            u = n(81),
            s = n(49);
        t.exports = function (t, e) {
            var n,
                f,
                l,
                p,
                v,
                h = t.target,
                d = t.global,
                y = t.stat;
            if ((n = d ? r : y ? r[h] || a(h, {}) : (r[h] || {}).prototype))
                for (f in e) {
                    if (
                        ((p = e[f]),
                        (l = t.noTargetGet ? (v = o(n, f)) && v.value : n[f]),
                        !s(d ? f : h + (y ? "." : "#") + f, t.forced) &&
                            void 0 !== l)
                    ) {
                        if (typeof p == typeof l) continue;
                        u(p, l);
                    }
                    (t.sham || (l && l.sham)) && i(p, "sham", !0),
                        c(n, f, p, t);
                }
        };
    },
    function (t, e, n) {
        var r = n(2);
        t.exports = !r(function () {
            return (
                7 !=
                Object.defineProperty({}, 1, {
                    get: function () {
                        return 7;
                    },
                })[1]
            );
        });
    },
    function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1);
        };
    },
    function (t, e, n) {
        var r = n(8),
            o = n(43),
            i = n(3),
            c = n(25),
            a = Object.defineProperty;
        e.f = r
            ? a
            : function (t, e, n) {
                  if ((i(t), (e = c(e, !0)), i(n), o))
                      try {
                          return a(t, e, n);
                      } catch (t) {}
                  if ("get" in n || "set" in n)
                      throw TypeError("Accessors not supported");
                  return "value" in n && (t[e] = n.value), t;
              };
    },
    function (t, e, n) {
        var r = n(0),
            o = n(6),
            i = n(5),
            c = n(27),
            a = n(28),
            u = n(29),
            s = u.get,
            f = u.enforce,
            l = String(String).split("String");
        (t.exports = function (t, e, n, a) {
            var u = !!a && !!a.unsafe,
                s = !!a && !!a.enumerable,
                p = !!a && !!a.noTargetGet;
            "function" == typeof n &&
                ("string" != typeof e || i(n, "name") || o(n, "name", e),
                (f(n).source = l.join("string" == typeof e ? e : ""))),
                t !== r
                    ? (u ? !p && t[e] && (s = !0) : delete t[e],
                      s ? (t[e] = n) : o(t, e, n))
                    : s
                    ? (t[e] = n)
                    : c(e, n);
        })(Function.prototype, "toString", function () {
            return ("function" == typeof this && s(this).source) || a(this);
        });
    },
    function (t, e, n) {
        var r = n(21),
            o = Math.min;
        t.exports = function (t) {
            return t > 0 ? o(r(t), 9007199254740991) : 0;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(7),
            o = n(50);
        r(
            { target: "Array", proto: !0, forced: [].forEach != o },
            { forEach: o }
        );
    },
    function (t, e, n) {
        var r = n(83),
            o = n(0),
            i = function (t) {
                return "function" == typeof t ? t : void 0;
            };
        t.exports = function (t, e) {
            return arguments.length < 2
                ? i(r[t]) || i(o[t])
                : (r[t] && r[t][e]) || (o[t] && o[t][e]);
        };
    },
    function (t, e, n) {
        var r = n(0),
            o = n(56),
            i = n(50),
            c = n(6);
        for (var a in o) {
            var u = r[a],
                s = u && u.prototype;
            if (s && s.forEach !== i)
                try {
                    c(s, "forEach", i);
                } catch (t) {
                    s.forEach = i;
                }
        }
    },
    function (t, e, n) {
        var r = n(42),
            o = n(17);
        t.exports = function (t) {
            return r(o(t));
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t;
        };
    },
    function (t, e) {
        t.exports = !1;
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e,
            };
        };
    },
    function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t)
                throw TypeError(String(t) + " is not a function");
            return t;
        };
    },
    function (t, e, n) {
        var r = n(17);
        t.exports = function (t) {
            return Object(r(t));
        };
    },
    function (t, e, n) {
        var r = n(8),
            o = n(79),
            i = n(20),
            c = n(16),
            a = n(25),
            u = n(5),
            s = n(43),
            f = Object.getOwnPropertyDescriptor;
        e.f = r
            ? f
            : function (t, e) {
                  if (((t = c(t)), (e = a(e, !0)), s))
                      try {
                          return f(t, e);
                      } catch (t) {}
                  if (u(t, e)) return i(!o.f.call(t, e), t[e]);
              };
    },
    function (t, e, n) {
        var r = n(4);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, o;
            if (
                e &&
                "function" == typeof (n = t.toString) &&
                !r((o = n.call(t)))
            )
                return o;
            if ("function" == typeof (n = t.valueOf) && !r((o = n.call(t))))
                return o;
            if (
                !e &&
                "function" == typeof (n = t.toString) &&
                !r((o = n.call(t)))
            )
                return o;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (t, e, n) {
        var r = n(0),
            o = n(4),
            i = r.document,
            c = o(i) && o(i.createElement);
        t.exports = function (t) {
            return c ? i.createElement(t) : {};
        };
    },
    function (t, e, n) {
        var r = n(0),
            o = n(6);
        t.exports = function (t, e) {
            try {
                o(r, t, e);
            } catch (n) {
                r[t] = e;
            }
            return e;
        };
    },
    function (t, e, n) {
        var r = n(44),
            o = Function.toString;
        "function" != typeof r.inspectSource &&
            (r.inspectSource = function (t) {
                return o.call(t);
            }),
            (t.exports = r.inspectSource);
    },
    function (t, e, n) {
        var r,
            o,
            i,
            c = n(80),
            a = n(0),
            u = n(4),
            s = n(6),
            f = n(5),
            l = n(30),
            p = n(31),
            v = a.WeakMap;
        if (c) {
            var h = new v(),
                d = h.get,
                y = h.has,
                g = h.set;
            (r = function (t, e) {
                return g.call(h, t, e), e;
            }),
                (o = function (t) {
                    return d.call(h, t) || {};
                }),
                (i = function (t) {
                    return y.call(h, t);
                });
        } else {
            var m = l("state");
            (p[m] = !0),
                (r = function (t, e) {
                    return s(t, m, e), e;
                }),
                (o = function (t) {
                    return f(t, m) ? t[m] : {};
                }),
                (i = function (t) {
                    return f(t, m);
                });
        }
        t.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function (t) {
                return i(t) ? o(t) : r(t, {});
            },
            getterFor: function (t) {
                return function (e) {
                    var n;
                    if (!u(e) || (n = o(e)).type !== t)
                        throw TypeError(
                            "Incompatible receiver, " + t + " required"
                        );
                    return n;
                };
            },
        };
    },
    function (t, e, n) {
        var r = n(45),
            o = n(46),
            i = r("keys");
        t.exports = function (t) {
            return i[t] || (i[t] = o(t));
        };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e) {
        t.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
        ];
    },
    function (t, e, n) {
        var r = n(22);
        t.exports = function (t, e, n) {
            if ((r(t), void 0 === e)) return t;
            switch (n) {
                case 0:
                    return function () {
                        return t.call(e);
                    };
                case 1:
                    return function (n) {
                        return t.call(e, n);
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r);
                    };
                case 3:
                    return function (n, r, o) {
                        return t.call(e, n, r, o);
                    };
            }
            return function () {
                return t.apply(e, arguments);
            };
        };
    },
    function (t, e, n) {
        var r = n(9);
        t.exports =
            Array.isArray ||
            function (t) {
                return "Array" == r(t);
            };
    },
    function (t, e, n) {
        "use strict";
        var r = n(25),
            o = n(10),
            i = n(20);
        t.exports = function (t, e, n) {
            var c = r(e);
            c in t ? o.f(t, c, i(0, n)) : (t[c] = n);
        };
    },
    function (t, e, n) {
        var r,
            o,
            i = n(0),
            c = n(55),
            a = i.process,
            u = a && a.versions,
            s = u && u.v8;
        s
            ? (o = (r = s.split("."))[0] + r[1])
            : c &&
              (!(r = c.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
              (r = c.match(/Chrome\/(\d+)/)) &&
              (o = r[1]),
            (t.exports = o && +o);
    },
    function (t, e, n) {
        var r = {};
        (r[n(1)("toStringTag")] = "z"),
            (t.exports = "[object z]" === String(r));
    },
    function (t, e, n) {
        var r = n(10).f,
            o = n(5),
            i = n(1)("toStringTag");
        t.exports = function (t, e, n) {
            t &&
                !o((t = n ? t : t.prototype), i) &&
                r(t, i, { configurable: !0, value: e });
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(7),
            o = n(40);
        r({ target: "RegExp", proto: !0, forced: /./.exec !== o }, { exec: o });
    },
    function (t, e, n) {
        "use strict";
        var r,
            o,
            i = n(103),
            c = n(104),
            a = RegExp.prototype.exec,
            u = String.prototype.replace,
            s = a,
            f =
                ((r = /a/),
                (o = /b*/g),
                a.call(r, "a"),
                a.call(o, "a"),
                0 !== r.lastIndex || 0 !== o.lastIndex),
            l = c.UNSUPPORTED_Y || c.BROKEN_CARET,
            p = void 0 !== /()??/.exec("")[1];
        (f || p || l) &&
            (s = function (t) {
                var e,
                    n,
                    r,
                    o,
                    c = this,
                    s = l && c.sticky,
                    v = i.call(c),
                    h = c.source,
                    d = 0,
                    y = t;
                return (
                    s &&
                        (-1 === (v = v.replace("y", "")).indexOf("g") &&
                            (v += "g"),
                        (y = String(t).slice(c.lastIndex)),
                        c.lastIndex > 0 &&
                            (!c.multiline ||
                                (c.multiline && "\n" !== t[c.lastIndex - 1])) &&
                            ((h = "(?: " + h + ")"), (y = " " + y), d++),
                        (n = new RegExp("^(?:" + h + ")", v))),
                    p && (n = new RegExp("^" + h + "$(?!\\s)", v)),
                    f && (e = c.lastIndex),
                    (r = a.call(s ? n : c, y)),
                    s
                        ? r
                            ? ((r.input = r.input.slice(d)),
                              (r[0] = r[0].slice(d)),
                              (r.index = c.lastIndex),
                              (c.lastIndex += r[0].length))
                            : (c.lastIndex = 0)
                        : f &&
                          r &&
                          (c.lastIndex = c.global ? r.index + r[0].length : e),
                    p &&
                        r &&
                        r.length > 1 &&
                        u.call(r[0], n, function () {
                            for (o = 1; o < arguments.length - 2; o++)
                                void 0 === arguments[o] && (r[o] = void 0);
                        }),
                    r
                );
            }),
            (t.exports = s);
    },
    function (t, e) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    function (t, e, n) {
        var r = n(2),
            o = n(9),
            i = "".split;
        t.exports = r(function () {
            return !Object("z").propertyIsEnumerable(0);
        })
            ? function (t) {
                  return "String" == o(t) ? i.call(t, "") : Object(t);
              }
            : Object;
    },
    function (t, e, n) {
        var r = n(8),
            o = n(2),
            i = n(26);
        t.exports =
            !r &&
            !o(function () {
                return (
                    7 !=
                    Object.defineProperty(i("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (t, e, n) {
        var r = n(0),
            o = n(27),
            i = r["__core-js_shared__"] || o("__core-js_shared__", {});
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(18),
            o = n(44);
        (t.exports = function (t, e) {
            return o[t] || (o[t] = void 0 !== e ? e : {});
        })("versions", []).push({
            version: "3.6.5",
            mode: r ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)",
        });
    },
    function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return (
                "Symbol(" +
                String(void 0 === t ? "" : t) +
                ")_" +
                (++n + r).toString(36)
            );
        };
    },
    function (t, e, n) {
        var r = n(5),
            o = n(16),
            i = n(85).indexOf,
            c = n(31);
        t.exports = function (t, e) {
            var n,
                a = o(t),
                u = 0,
                s = [];
            for (n in a) !r(c, n) && r(a, n) && s.push(n);
            for (; e.length > u; )
                r(a, (n = e[u++])) && (~i(s, n) || s.push(n));
            return s;
        };
    },
    function (t, e, n) {
        var r = n(21),
            o = Math.max,
            i = Math.min;
        t.exports = function (t, e) {
            var n = r(t);
            return n < 0 ? o(n + e, 0) : i(n, e);
        };
    },
    function (t, e, n) {
        var r = n(2),
            o = /#|\.prototype\./,
            i = function (t, e) {
                var n = a[c(t)];
                return (
                    n == s || (n != u && ("function" == typeof e ? r(e) : !!e))
                );
            },
            c = (i.normalize = function (t) {
                return String(t).replace(o, ".").toLowerCase();
            }),
            a = (i.data = {}),
            u = (i.NATIVE = "N"),
            s = (i.POLYFILL = "P");
        t.exports = i;
    },
    function (t, e, n) {
        "use strict";
        var r = n(87).forEach,
            o = n(89),
            i = n(53),
            c = o("forEach"),
            a = i("forEach");
        t.exports =
            c && a
                ? [].forEach
                : function (t) {
                      return r(
                          this,
                          t,
                          arguments.length > 1 ? arguments[1] : void 0
                      );
                  };
    },
    function (t, e, n) {
        var r = n(4),
            o = n(34),
            i = n(1)("species");
        t.exports = function (t, e) {
            var n;
            return (
                o(t) &&
                    ("function" != typeof (n = t.constructor) ||
                    (n !== Array && !o(n.prototype))
                        ? r(n) && null === (n = n[i]) && (n = void 0)
                        : (n = void 0)),
                new (void 0 === n ? Array : n)(0 === e ? 0 : e)
            );
        };
    },
    function (t, e, n) {
        var r = n(2);
        t.exports =
            !!Object.getOwnPropertySymbols &&
            !r(function () {
                return !String(Symbol());
            });
    },
    function (t, e, n) {
        var r = n(8),
            o = n(2),
            i = n(5),
            c = Object.defineProperty,
            a = {},
            u = function (t) {
                throw t;
            };
        t.exports = function (t, e) {
            if (i(a, t)) return a[t];
            e || (e = {});
            var n = [][t],
                s = !!i(e, "ACCESSORS") && e.ACCESSORS,
                f = i(e, 0) ? e[0] : u,
                l = i(e, 1) ? e[1] : void 0;
            return (a[t] =
                !!n &&
                !o(function () {
                    if (s && !r) return !0;
                    var t = { length: -1 };
                    s ? c(t, 1, { enumerable: !0, get: u }) : (t[1] = 1),
                        n.call(t, f, l);
                }));
        };
    },
    function (t, e, n) {
        var r = n(2),
            o = n(1),
            i = n(36),
            c = o("species");
        t.exports = function (t) {
            return (
                i >= 51 ||
                !r(function () {
                    var e = [];
                    return (
                        ((e.constructor = {})[c] = function () {
                            return { foo: 1 };
                        }),
                        1 !== e[t](Boolean).foo
                    );
                })
            );
        };
    },
    function (t, e, n) {
        var r = n(14);
        t.exports = r("navigator", "userAgent") || "";
    },
    function (t, e) {
        t.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(7),
            o = n(2),
            i = n(34),
            c = n(4),
            a = n(23),
            u = n(12),
            s = n(35),
            f = n(51),
            l = n(54),
            p = n(1),
            v = n(36),
            h = p("isConcatSpreadable"),
            d =
                v >= 51 ||
                !o(function () {
                    var t = [];
                    return (t[h] = !1), t.concat()[0] !== t;
                }),
            y = l("concat"),
            g = function (t) {
                if (!c(t)) return !1;
                var e = t[h];
                return void 0 !== e ? !!e : i(t);
            };
        r(
            { target: "Array", proto: !0, forced: !d || !y },
            {
                concat: function (t) {
                    var e,
                        n,
                        r,
                        o,
                        i,
                        c = a(this),
                        l = f(c, 0),
                        p = 0;
                    for (e = -1, r = arguments.length; e < r; e++)
                        if (g((i = -1 === e ? c : arguments[e]))) {
                            if (p + (o = u(i.length)) > 9007199254740991)
                                throw TypeError(
                                    "Maximum allowed index exceeded"
                                );
                            for (n = 0; n < o; n++, p++)
                                n in i && s(l, p, i[n]);
                        } else {
                            if (p >= 9007199254740991)
                                throw TypeError(
                                    "Maximum allowed index exceeded"
                                );
                            s(l, p++, i);
                        }
                    return (l.length = p), l;
                },
            }
        );
    },
    function (t, e, n) {
        var r = n(37),
            o = n(11),
            i = n(91);
        r || o(Object.prototype, "toString", i, { unsafe: !0 });
    },
    function (t, e, n) {
        var r = n(37),
            o = n(9),
            i = n(1)("toStringTag"),
            c =
                "Arguments" ==
                o(
                    (function () {
                        return arguments;
                    })()
                );
        t.exports = r
            ? o
            : function (t) {
                  var e, n, r;
                  return void 0 === t
                      ? "Undefined"
                      : null === t
                      ? "Null"
                      : "string" ==
                        typeof (n = (function (t, e) {
                            try {
                                return t[e];
                            } catch (t) {}
                        })((e = Object(t)), i))
                      ? n
                      : c
                      ? o(e)
                      : "Object" == (r = o(e)) && "function" == typeof e.callee
                      ? "Arguments"
                      : r;
              };
    },
    function (t, e, n) {
        "use strict";
        var r,
            o,
            i,
            c,
            a = n(7),
            u = n(18),
            s = n(0),
            f = n(14),
            l = n(61),
            p = n(11),
            v = n(92),
            h = n(38),
            d = n(93),
            y = n(4),
            g = n(22),
            m = n(94),
            x = n(9),
            w = n(28),
            b = n(62),
            _ = n(98),
            E = n(63),
            S = n(64).set,
            L = n(99),
            A = n(67),
            T = n(100),
            j = n(68),
            O = n(101),
            P = n(29),
            k = n(49),
            I = n(1),
            C = n(36),
            M = I("species"),
            R = "Promise",
            q = P.get,
            N = P.set,
            F = P.getterFor(R),
            D = l,
            G = s.TypeError,
            U = s.document,
            H = s.process,
            $ = f("fetch"),
            Y = j.f,
            B = Y,
            V = "process" == x(H),
            z = !!(U && U.createEvent && s.dispatchEvent),
            K = k(R, function () {
                if (!(w(D) !== String(D))) {
                    if (66 === C) return !0;
                    if (!V && "function" != typeof PromiseRejectionEvent)
                        return !0;
                }
                if (u && !D.prototype.finally) return !0;
                if (C >= 51 && /native code/.test(D)) return !1;
                var t = D.resolve(1),
                    e = function (t) {
                        t(
                            function () {},
                            function () {}
                        );
                    };
                return (
                    ((t.constructor = {})[M] = e),
                    !(t.then(function () {}) instanceof e)
                );
            }),
            W =
                K ||
                !_(function (t) {
                    D.all(t).catch(function () {});
                }),
            X = function (t) {
                var e;
                return !(!y(t) || "function" != typeof (e = t.then)) && e;
            },
            J = function (t, e, n) {
                if (!e.notified) {
                    e.notified = !0;
                    var r = e.reactions;
                    L(function () {
                        for (
                            var o = e.value, i = 1 == e.state, c = 0;
                            r.length > c;

                        ) {
                            var a,
                                u,
                                s,
                                f = r[c++],
                                l = i ? f.ok : f.fail,
                                p = f.resolve,
                                v = f.reject,
                                h = f.domain;
                            try {
                                l
                                    ? (i ||
                                          (2 === e.rejection && et(t, e),
                                          (e.rejection = 1)),
                                      !0 === l
                                          ? (a = o)
                                          : (h && h.enter(),
                                            (a = l(o)),
                                            h && (h.exit(), (s = !0))),
                                      a === f.promise
                                          ? v(G("Promise-chain cycle"))
                                          : (u = X(a))
                                          ? u.call(a, p, v)
                                          : p(a))
                                    : v(o);
                            } catch (t) {
                                h && !s && h.exit(), v(t);
                            }
                        }
                        (e.reactions = []),
                            (e.notified = !1),
                            n && !e.rejection && Z(t, e);
                    });
                }
            },
            Q = function (t, e, n) {
                var r, o;
                z
                    ? (((r = U.createEvent("Event")).promise = e),
                      (r.reason = n),
                      r.initEvent(t, !1, !0),
                      s.dispatchEvent(r))
                    : (r = { promise: e, reason: n }),
                    (o = s["on" + t])
                        ? o(r)
                        : "unhandledrejection" === t &&
                          T("Unhandled promise rejection", n);
            },
            Z = function (t, e) {
                S.call(s, function () {
                    var n,
                        r = e.value;
                    if (
                        tt(e) &&
                        ((n = O(function () {
                            V
                                ? H.emit("unhandledRejection", r, t)
                                : Q("unhandledrejection", t, r);
                        })),
                        (e.rejection = V || tt(e) ? 2 : 1),
                        n.error)
                    )
                        throw n.value;
                });
            },
            tt = function (t) {
                return 1 !== t.rejection && !t.parent;
            },
            et = function (t, e) {
                S.call(s, function () {
                    V
                        ? H.emit("rejectionHandled", t)
                        : Q("rejectionhandled", t, e.value);
                });
            },
            nt = function (t, e, n, r) {
                return function (o) {
                    t(e, n, o, r);
                };
            },
            rt = function (t, e, n, r) {
                e.done ||
                    ((e.done = !0),
                    r && (e = r),
                    (e.value = n),
                    (e.state = 2),
                    J(t, e, !0));
            },
            ot = function (t, e, n, r) {
                if (!e.done) {
                    (e.done = !0), r && (e = r);
                    try {
                        if (t === n)
                            throw G("Promise can't be resolved itself");
                        var o = X(n);
                        o
                            ? L(function () {
                                  var r = { done: !1 };
                                  try {
                                      o.call(
                                          n,
                                          nt(ot, t, r, e),
                                          nt(rt, t, r, e)
                                      );
                                  } catch (n) {
                                      rt(t, r, n, e);
                                  }
                              })
                            : ((e.value = n), (e.state = 1), J(t, e, !1));
                    } catch (n) {
                        rt(t, { done: !1 }, n, e);
                    }
                }
            };
        K &&
            ((D = function (t) {
                m(this, D, R), g(t), r.call(this);
                var e = q(this);
                try {
                    t(nt(ot, this, e), nt(rt, this, e));
                } catch (t) {
                    rt(this, e, t);
                }
            }),
            ((r = function (t) {
                N(this, {
                    type: R,
                    done: !1,
                    notified: !1,
                    parent: !1,
                    reactions: [],
                    rejection: !1,
                    state: 0,
                    value: void 0,
                });
            }).prototype = v(D.prototype, {
                then: function (t, e) {
                    var n = F(this),
                        r = Y(E(this, D));
                    return (
                        (r.ok = "function" != typeof t || t),
                        (r.fail = "function" == typeof e && e),
                        (r.domain = V ? H.domain : void 0),
                        (n.parent = !0),
                        n.reactions.push(r),
                        0 != n.state && J(this, n, !1),
                        r.promise
                    );
                },
                catch: function (t) {
                    return this.then(void 0, t);
                },
            })),
            (o = function () {
                var t = new r(),
                    e = q(t);
                (this.promise = t),
                    (this.resolve = nt(ot, t, e)),
                    (this.reject = nt(rt, t, e));
            }),
            (j.f = Y = function (t) {
                return t === D || t === i ? new o(t) : B(t);
            }),
            u ||
                "function" != typeof l ||
                ((c = l.prototype.then),
                p(
                    l.prototype,
                    "then",
                    function (t, e) {
                        var n = this;
                        return new D(function (t, e) {
                            c.call(n, t, e);
                        }).then(t, e);
                    },
                    { unsafe: !0 }
                ),
                "function" == typeof $ &&
                    a(
                        { global: !0, enumerable: !0, forced: !0 },
                        {
                            fetch: function (t) {
                                return A(D, $.apply(s, arguments));
                            },
                        }
                    ))),
            a({ global: !0, wrap: !0, forced: K }, { Promise: D }),
            h(D, R, !1, !0),
            d(R),
            (i = f(R)),
            a(
                { target: R, stat: !0, forced: K },
                {
                    reject: function (t) {
                        var e = Y(this);
                        return e.reject.call(void 0, t), e.promise;
                    },
                }
            ),
            a(
                { target: R, stat: !0, forced: u || K },
                {
                    resolve: function (t) {
                        return A(u && this === i ? D : this, t);
                    },
                }
            ),
            a(
                { target: R, stat: !0, forced: W },
                {
                    all: function (t) {
                        var e = this,
                            n = Y(e),
                            r = n.resolve,
                            o = n.reject,
                            i = O(function () {
                                var n = g(e.resolve),
                                    i = [],
                                    c = 0,
                                    a = 1;
                                b(t, function (t) {
                                    var u = c++,
                                        s = !1;
                                    i.push(void 0),
                                        a++,
                                        n.call(e, t).then(function (t) {
                                            s ||
                                                ((s = !0),
                                                (i[u] = t),
                                                --a || r(i));
                                        }, o);
                                }),
                                    --a || r(i);
                            });
                        return i.error && o(i.value), n.promise;
                    },
                    race: function (t) {
                        var e = this,
                            n = Y(e),
                            r = n.reject,
                            o = O(function () {
                                var o = g(e.resolve);
                                b(t, function (t) {
                                    o.call(e, t).then(n.resolve, r);
                                });
                            });
                        return o.error && r(o.value), n.promise;
                    },
                }
            );
    },
    function (t, e, n) {
        var r = n(0);
        t.exports = r.Promise;
    },
    function (t, e, n) {
        var r = n(3),
            o = n(95),
            i = n(12),
            c = n(33),
            a = n(96),
            u = n(97),
            s = function (t, e) {
                (this.stopped = t), (this.result = e);
            };
        (t.exports = function (t, e, n, f, l) {
            var p,
                v,
                h,
                d,
                y,
                g,
                m,
                x = c(e, n, f ? 2 : 1);
            if (l) p = t;
            else {
                if ("function" != typeof (v = a(t)))
                    throw TypeError("Target is not iterable");
                if (o(v)) {
                    for (h = 0, d = i(t.length); d > h; h++)
                        if (
                            (y = f ? x(r((m = t[h]))[0], m[1]) : x(t[h])) &&
                            y instanceof s
                        )
                            return y;
                    return new s(!1);
                }
                p = v.call(t);
            }
            for (g = p.next; !(m = g.call(p)).done; )
                if (
                    "object" == typeof (y = u(p, x, m.value, f)) &&
                    y &&
                    y instanceof s
                )
                    return y;
            return new s(!1);
        }).stop = function (t) {
            return new s(!0, t);
        };
    },
    function (t, e, n) {
        var r = n(3),
            o = n(22),
            i = n(1)("species");
        t.exports = function (t, e) {
            var n,
                c = r(t).constructor;
            return void 0 === c || null == (n = r(c)[i]) ? e : o(n);
        };
    },
    function (t, e, n) {
        var r,
            o,
            i,
            c = n(0),
            a = n(2),
            u = n(9),
            s = n(33),
            f = n(65),
            l = n(26),
            p = n(66),
            v = c.location,
            h = c.setImmediate,
            d = c.clearImmediate,
            y = c.process,
            g = c.MessageChannel,
            m = c.Dispatch,
            x = 0,
            w = {},
            b = function (t) {
                if (w.hasOwnProperty(t)) {
                    var e = w[t];
                    delete w[t], e();
                }
            },
            _ = function (t) {
                return function () {
                    b(t);
                };
            },
            E = function (t) {
                b(t.data);
            },
            S = function (t) {
                c.postMessage(t + "", v.protocol + "//" + v.host);
            };
        (h && d) ||
            ((h = function (t) {
                for (var e = [], n = 1; arguments.length > n; )
                    e.push(arguments[n++]);
                return (
                    (w[++x] = function () {
                        ("function" == typeof t ? t : Function(t)).apply(
                            void 0,
                            e
                        );
                    }),
                    r(x),
                    x
                );
            }),
            (d = function (t) {
                delete w[t];
            }),
            "process" == u(y)
                ? (r = function (t) {
                      y.nextTick(_(t));
                  })
                : m && m.now
                ? (r = function (t) {
                      m.now(_(t));
                  })
                : g && !p
                ? ((i = (o = new g()).port2),
                  (o.port1.onmessage = E),
                  (r = s(i.postMessage, i, 1)))
                : !c.addEventListener ||
                  "function" != typeof postMessage ||
                  c.importScripts ||
                  a(S) ||
                  "file:" === v.protocol
                ? (r =
                      "onreadystatechange" in l("script")
                          ? function (t) {
                                f.appendChild(
                                    l("script")
                                ).onreadystatechange = function () {
                                    f.removeChild(this), b(t);
                                };
                            }
                          : function (t) {
                                setTimeout(_(t), 0);
                            })
                : ((r = S), c.addEventListener("message", E, !1))),
            (t.exports = { set: h, clear: d });
    },
    function (t, e, n) {
        var r = n(14);
        t.exports = r("document", "documentElement");
    },
    function (t, e, n) {
        var r = n(55);
        t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r);
    },
    function (t, e, n) {
        var r = n(3),
            o = n(4),
            i = n(68);
        t.exports = function (t, e) {
            if ((r(t), o(e) && e.constructor === t)) return e;
            var n = i.f(t);
            return (0, n.resolve)(e), n.promise;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(22),
            o = function (t) {
                var e, n;
                (this.promise = new t(function (t, r) {
                    if (void 0 !== e || void 0 !== n)
                        throw TypeError("Bad Promise constructor");
                    (e = t), (n = r);
                })),
                    (this.resolve = r(e)),
                    (this.reject = r(n));
            };
        t.exports.f = function (t) {
            return new o(t);
        };
    },
    function (t, e, n) {
        "use strict";
        n(39);
        var r = n(11),
            o = n(2),
            i = n(1),
            c = n(40),
            a = n(6),
            u = i("species"),
            s = !o(function () {
                var t = /./;
                return (
                    (t.exec = function () {
                        var t = [];
                        return (t.groups = { a: "7" }), t;
                    }),
                    "7" !== "".replace(t, "$<a>")
                );
            }),
            f = "$0" === "a".replace(/./, "$0"),
            l = i("replace"),
            p = !!/./[l] && "" === /./[l]("a", "$0"),
            v = !o(function () {
                var t = /(?:)/,
                    e = t.exec;
                t.exec = function () {
                    return e.apply(this, arguments);
                };
                var n = "ab".split(t);
                return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
            });
        t.exports = function (t, e, n, l) {
            var h = i(t),
                d = !o(function () {
                    var e = {};
                    return (
                        (e[h] = function () {
                            return 7;
                        }),
                        7 != ""[t](e)
                    );
                }),
                y =
                    d &&
                    !o(function () {
                        var e = !1,
                            n = /a/;
                        return (
                            "split" === t &&
                                (((n = {}).constructor = {}),
                                (n.constructor[u] = function () {
                                    return n;
                                }),
                                (n.flags = ""),
                                (n[h] = /./[h])),
                            (n.exec = function () {
                                return (e = !0), null;
                            }),
                            n[h](""),
                            !e
                        );
                    });
            if (
                !d ||
                !y ||
                ("replace" === t && (!s || !f || p)) ||
                ("split" === t && !v)
            ) {
                var g = /./[h],
                    m = n(
                        h,
                        ""[t],
                        function (t, e, n, r, o) {
                            return e.exec === c
                                ? d && !o
                                    ? { done: !0, value: g.call(e, n, r) }
                                    : { done: !0, value: t.call(n, e, r) }
                                : { done: !1 };
                        },
                        {
                            REPLACE_KEEPS_$0: f,
                            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: p,
                        }
                    ),
                    x = m[0],
                    w = m[1];
                r(String.prototype, t, x),
                    r(
                        RegExp.prototype,
                        h,
                        2 == e
                            ? function (t, e) {
                                  return w.call(t, this, e);
                              }
                            : function (t) {
                                  return w.call(t, this);
                              }
                    );
            }
            l && a(RegExp.prototype[h], "sham", !0);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(106).charAt;
        t.exports = function (t, e, n) {
            return e + (n ? r(t, e).length : 1);
        };
    },
    function (t, e, n) {
        var r = n(9),
            o = n(40);
        t.exports = function (t, e) {
            var n = t.exec;
            if ("function" == typeof n) {
                var i = n.call(t, e);
                if ("object" != typeof i)
                    throw TypeError(
                        "RegExp exec method returned something other than an Object or null"
                    );
                return i;
            }
            if ("RegExp" !== r(t))
                throw TypeError("RegExp#exec called on incompatible receiver");
            return o.call(t, e);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(16),
            o = n(107),
            i = n(19),
            c = n(29),
            a = n(110),
            u = c.set,
            s = c.getterFor("Array Iterator");
        (t.exports = a(
            Array,
            "Array",
            function (t, e) {
                u(this, {
                    type: "Array Iterator",
                    target: r(t),
                    index: 0,
                    kind: e,
                });
            },
            function () {
                var t = s(this),
                    e = t.target,
                    n = t.kind,
                    r = t.index++;
                return !e || r >= e.length
                    ? ((t.target = void 0), { value: void 0, done: !0 })
                    : "keys" == n
                    ? { value: r, done: !1 }
                    : "values" == n
                    ? { value: e[r], done: !1 }
                    : { value: [r, e[r]], done: !1 };
            },
            "values"
        )),
            (i.Arguments = i.Array),
            o("keys"),
            o("values"),
            o("entries");
    },
    function (t, e, n) {
        var r,
            o = n(3),
            i = n(108),
            c = n(32),
            a = n(31),
            u = n(65),
            s = n(26),
            f = n(30),
            l = f("IE_PROTO"),
            p = function () {},
            v = function (t) {
                return "<script>" + t + "</script>";
            },
            h = function () {
                try {
                    r = document.domain && new ActiveXObject("htmlfile");
                } catch (t) {}
                var t, e;
                h = r
                    ? (function (t) {
                          t.write(v("")), t.close();
                          var e = t.parentWindow.Object;
                          return (t = null), e;
                      })(r)
                    : (((e = s("iframe")).style.display = "none"),
                      u.appendChild(e),
                      (e.src = String("javascript:")),
                      (t = e.contentWindow.document).open(),
                      t.write(v("document.F=Object")),
                      t.close(),
                      t.F);
                for (var n = c.length; n--; ) delete h.prototype[c[n]];
                return h();
            };
        (a[l] = !0),
            (t.exports =
                Object.create ||
                function (t, e) {
                    var n;
                    return (
                        null !== t
                            ? ((p.prototype = o(t)),
                              (n = new p()),
                              (p.prototype = null),
                              (n[l] = t))
                            : (n = h()),
                        void 0 === e ? n : i(n, e)
                    );
                });
    },
    function (t, e, n) {
        "use strict";
        var r,
            o,
            i,
            c = n(75),
            a = n(6),
            u = n(5),
            s = n(1),
            f = n(18),
            l = s("iterator"),
            p = !1;
        [].keys &&
            ("next" in (i = [].keys())
                ? (o = c(c(i))) !== Object.prototype && (r = o)
                : (p = !0)),
            null == r && (r = {}),
            f ||
                u(r, l) ||
                a(r, l, function () {
                    return this;
                }),
            (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: p });
    },
    function (t, e, n) {
        var r = n(5),
            o = n(23),
            i = n(30),
            c = n(112),
            a = i("IE_PROTO"),
            u = Object.prototype;
        t.exports = c
            ? Object.getPrototypeOf
            : function (t) {
                  return (
                      (t = o(t)),
                      r(t, a)
                          ? t[a]
                          : "function" == typeof t.constructor &&
                            t instanceof t.constructor
                          ? t.constructor.prototype
                          : t instanceof Object
                          ? u
                          : null
                  );
              };
    },
    function (t, e, n) {
        (function (e, n) {
            /*!
             * @overview es6-promise - a tiny implementation of Promises/A+.
             * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
             * @license   Licensed under MIT license
             *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
             * @version   v4.2.8+1e68dce6
             */ var r;
            (r = function () {
                "use strict";
                function t(t) {
                    return "function" == typeof t;
                }
                var r = Array.isArray
                        ? Array.isArray
                        : function (t) {
                              return (
                                  "[object Array]" ===
                                  Object.prototype.toString.call(t)
                              );
                          },
                    o = 0,
                    i = void 0,
                    c = void 0,
                    a = function (t, e) {
                        (h[o] = t),
                            (h[o + 1] = e),
                            2 === (o += 2) && (c ? c(d) : w());
                    },
                    u = "undefined" != typeof window ? window : void 0,
                    s = u || {},
                    f = s.MutationObserver || s.WebKitMutationObserver,
                    l =
                        "undefined" == typeof self &&
                        void 0 !== e &&
                        "[object process]" === {}.toString.call(e),
                    p =
                        "undefined" != typeof Uint8ClampedArray &&
                        "undefined" != typeof importScripts &&
                        "undefined" != typeof MessageChannel;
                function v() {
                    var t = setTimeout;
                    return function () {
                        return t(d, 1);
                    };
                }
                var h = new Array(1e3);
                function d() {
                    for (var t = 0; t < o; t += 2)
                        (0, h[t])(h[t + 1]),
                            (h[t] = void 0),
                            (h[t + 1] = void 0);
                    o = 0;
                }
                var y,
                    g,
                    m,
                    x,
                    w = void 0;
                function b(t, e) {
                    var n = this,
                        r = new this.constructor(S);
                    void 0 === r[E] && M(r);
                    var o = n._state;
                    if (o) {
                        var i = arguments[o - 1];
                        a(function () {
                            return I(o, r, i, n._result);
                        });
                    } else P(n, r, t, e);
                    return r;
                }
                function _(t) {
                    if (t && "object" == typeof t && t.constructor === this)
                        return t;
                    var e = new this(S);
                    return A(e, t), e;
                }
                l
                    ? (w = function () {
                          return e.nextTick(d);
                      })
                    : f
                    ? ((g = 0),
                      (m = new f(d)),
                      (x = document.createTextNode("")),
                      m.observe(x, { characterData: !0 }),
                      (w = function () {
                          x.data = g = ++g % 2;
                      }))
                    : p
                    ? (((y = new MessageChannel()).port1.onmessage = d),
                      (w = function () {
                          return y.port2.postMessage(0);
                      }))
                    : (w =
                          void 0 === u
                              ? (function () {
                                    try {
                                        var t = Function(
                                            "return this"
                                        )().require("vertx");
                                        return void 0 !==
                                            (i = t.runOnLoop || t.runOnContext)
                                            ? function () {
                                                  i(d);
                                              }
                                            : v();
                                    } catch (t) {
                                        return v();
                                    }
                                })()
                              : v());
                var E = Math.random().toString(36).substring(2);
                function S() {}
                function L(e, n, r) {
                    n.constructor === e.constructor &&
                    r === b &&
                    n.constructor.resolve === _
                        ? (function (t, e) {
                              1 === e._state
                                  ? j(t, e._result)
                                  : 2 === e._state
                                  ? O(t, e._result)
                                  : P(
                                        e,
                                        void 0,
                                        function (e) {
                                            return A(t, e);
                                        },
                                        function (e) {
                                            return O(t, e);
                                        }
                                    );
                          })(e, n)
                        : void 0 === r
                        ? j(e, n)
                        : t(r)
                        ? (function (t, e, n) {
                              a(function (t) {
                                  var r = !1,
                                      o = (function (t, e, n, r) {
                                          try {
                                              t.call(e, n, r);
                                          } catch (t) {
                                              return t;
                                          }
                                      })(
                                          n,
                                          e,
                                          function (n) {
                                              r ||
                                                  ((r = !0),
                                                  e !== n ? A(t, n) : j(t, n));
                                          },
                                          function (e) {
                                              r || ((r = !0), O(t, e));
                                          },
                                          t._label
                                      );
                                  !r && o && ((r = !0), O(t, o));
                              }, t);
                          })(e, n, r)
                        : j(e, n);
                }
                function A(t, e) {
                    if (t === e)
                        O(
                            t,
                            new TypeError(
                                "You cannot resolve a promise with itself"
                            )
                        );
                    else if (
                        ((o = typeof (r = e)),
                        null === r || ("object" !== o && "function" !== o))
                    )
                        j(t, e);
                    else {
                        var n = void 0;
                        try {
                            n = e.then;
                        } catch (e) {
                            return void O(t, e);
                        }
                        L(t, e, n);
                    }
                    var r, o;
                }
                function T(t) {
                    t._onerror && t._onerror(t._result), k(t);
                }
                function j(t, e) {
                    void 0 === t._state &&
                        ((t._result = e),
                        (t._state = 1),
                        0 !== t._subscribers.length && a(k, t));
                }
                function O(t, e) {
                    void 0 === t._state &&
                        ((t._state = 2), (t._result = e), a(T, t));
                }
                function P(t, e, n, r) {
                    var o = t._subscribers,
                        i = o.length;
                    (t._onerror = null),
                        (o[i] = e),
                        (o[i + 1] = n),
                        (o[i + 2] = r),
                        0 === i && t._state && a(k, t);
                }
                function k(t) {
                    var e = t._subscribers,
                        n = t._state;
                    if (0 !== e.length) {
                        for (
                            var r = void 0, o = void 0, i = t._result, c = 0;
                            c < e.length;
                            c += 3
                        )
                            (r = e[c]),
                                (o = e[c + n]),
                                r ? I(n, r, o, i) : o(i);
                        t._subscribers.length = 0;
                    }
                }
                function I(e, n, r, o) {
                    var i = t(r),
                        c = void 0,
                        a = void 0,
                        u = !0;
                    if (i) {
                        try {
                            c = r(o);
                        } catch (t) {
                            (u = !1), (a = t);
                        }
                        if (n === c)
                            return void O(
                                n,
                                new TypeError(
                                    "A promises callback cannot return that same promise."
                                )
                            );
                    } else c = o;
                    void 0 !== n._state ||
                        (i && u
                            ? A(n, c)
                            : !1 === u
                            ? O(n, a)
                            : 1 === e
                            ? j(n, c)
                            : 2 === e && O(n, c));
                }
                var C = 0;
                function M(t) {
                    (t[E] = C++),
                        (t._state = void 0),
                        (t._result = void 0),
                        (t._subscribers = []);
                }
                var R = (function () {
                        function t(t, e) {
                            (this._instanceConstructor = t),
                                (this.promise = new t(S)),
                                this.promise[E] || M(this.promise),
                                r(e)
                                    ? ((this.length = e.length),
                                      (this._remaining = e.length),
                                      (this._result = new Array(this.length)),
                                      0 === this.length
                                          ? j(this.promise, this._result)
                                          : ((this.length = this.length || 0),
                                            this._enumerate(e),
                                            0 === this._remaining &&
                                                j(this.promise, this._result)))
                                    : O(
                                          this.promise,
                                          new Error(
                                              "Array Methods must be provided an Array"
                                          )
                                      );
                        }
                        return (
                            (t.prototype._enumerate = function (t) {
                                for (
                                    var e = 0;
                                    void 0 === this._state && e < t.length;
                                    e++
                                )
                                    this._eachEntry(t[e], e);
                            }),
                            (t.prototype._eachEntry = function (t, e) {
                                var n = this._instanceConstructor,
                                    r = n.resolve;
                                if (r === _) {
                                    var o = void 0,
                                        i = void 0,
                                        c = !1;
                                    try {
                                        o = t.then;
                                    } catch (t) {
                                        (c = !0), (i = t);
                                    }
                                    if (o === b && void 0 !== t._state)
                                        this._settledAt(t._state, e, t._result);
                                    else if ("function" != typeof o)
                                        this._remaining--,
                                            (this._result[e] = t);
                                    else if (n === q) {
                                        var a = new n(S);
                                        c ? O(a, i) : L(a, t, o),
                                            this._willSettleAt(a, e);
                                    } else
                                        this._willSettleAt(
                                            new n(function (e) {
                                                return e(t);
                                            }),
                                            e
                                        );
                                } else this._willSettleAt(r(t), e);
                            }),
                            (t.prototype._settledAt = function (t, e, n) {
                                var r = this.promise;
                                void 0 === r._state &&
                                    (this._remaining--,
                                    2 === t ? O(r, n) : (this._result[e] = n)),
                                    0 === this._remaining && j(r, this._result);
                            }),
                            (t.prototype._willSettleAt = function (t, e) {
                                var n = this;
                                P(
                                    t,
                                    void 0,
                                    function (t) {
                                        return n._settledAt(1, e, t);
                                    },
                                    function (t) {
                                        return n._settledAt(2, e, t);
                                    }
                                );
                            }),
                            t
                        );
                    })(),
                    q = (function () {
                        function e(t) {
                            (this[E] = C++),
                                (this._result = this._state = void 0),
                                (this._subscribers = []),
                                S !== t &&
                                    ("function" != typeof t &&
                                        (function () {
                                            throw new TypeError(
                                                "You must pass a resolver function as the first argument to the promise constructor"
                                            );
                                        })(),
                                    this instanceof e
                                        ? (function (t, e) {
                                              try {
                                                  e(
                                                      function (e) {
                                                          A(t, e);
                                                      },
                                                      function (e) {
                                                          O(t, e);
                                                      }
                                                  );
                                              } catch (e) {
                                                  O(t, e);
                                              }
                                          })(this, t)
                                        : (function () {
                                              throw new TypeError(
                                                  "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                                              );
                                          })());
                        }
                        return (
                            (e.prototype.catch = function (t) {
                                return this.then(null, t);
                            }),
                            (e.prototype.finally = function (e) {
                                var n = this.constructor;
                                return t(e)
                                    ? this.then(
                                          function (t) {
                                              return n
                                                  .resolve(e())
                                                  .then(function () {
                                                      return t;
                                                  });
                                          },
                                          function (t) {
                                              return n
                                                  .resolve(e())
                                                  .then(function () {
                                                      throw t;
                                                  });
                                          }
                                      )
                                    : this.then(e, e);
                            }),
                            e
                        );
                    })();
                return (
                    (q.prototype.then = b),
                    (q.all = function (t) {
                        return new R(this, t).promise;
                    }),
                    (q.race = function (t) {
                        var e = this;
                        return r(t)
                            ? new e(function (n, r) {
                                  for (var o = t.length, i = 0; i < o; i++)
                                      e.resolve(t[i]).then(n, r);
                              })
                            : new e(function (t, e) {
                                  return e(
                                      new TypeError(
                                          "You must pass an array to race."
                                      )
                                  );
                              });
                    }),
                    (q.resolve = _),
                    (q.reject = function (t) {
                        var e = new this(S);
                        return O(e, t), e;
                    }),
                    (q._setScheduler = function (t) {
                        c = t;
                    }),
                    (q._setAsap = function (t) {
                        a = t;
                    }),
                    (q._asap = a),
                    (q.polyfill = function () {
                        var t = void 0;
                        if (void 0 !== n) t = n;
                        else if ("undefined" != typeof self) t = self;
                        else
                            try {
                                t = Function("return this")();
                            } catch (t) {
                                throw new Error(
                                    "polyfill failed because global object is unavailable in this environment"
                                );
                            }
                        var e = t.Promise;
                        if (e) {
                            var r = null;
                            try {
                                r = Object.prototype.toString.call(e.resolve());
                            } catch (t) {}
                            if ("[object Promise]" === r && !e.cast) return;
                        }
                        t.Promise = q;
                    }),
                    (q.Promise = q),
                    q
                );
            }),
                (t.exports = r());
        }.call(this, n(77), n(41)));
    },
    function (t, e) {
        var n,
            r,
            o = (t.exports = {});
        function i() {
            throw new Error("setTimeout has not been defined");
        }
        function c() {
            throw new Error("clearTimeout has not been defined");
        }
        function a(t) {
            if (n === setTimeout) return setTimeout(t, 0);
            if ((n === i || !n) && setTimeout)
                return (n = setTimeout), setTimeout(t, 0);
            try {
                return n(t, 0);
            } catch (e) {
                try {
                    return n.call(null, t, 0);
                } catch (e) {
                    return n.call(this, t, 0);
                }
            }
        }
        !(function () {
            try {
                n = "function" == typeof setTimeout ? setTimeout : i;
            } catch (t) {
                n = i;
            }
            try {
                r = "function" == typeof clearTimeout ? clearTimeout : c;
            } catch (t) {
                r = c;
            }
        })();
        var u,
            s = [],
            f = !1,
            l = -1;
        function p() {
            f &&
                u &&
                ((f = !1),
                u.length ? (s = u.concat(s)) : (l = -1),
                s.length && v());
        }
        function v() {
            if (!f) {
                var t = a(p);
                f = !0;
                for (var e = s.length; e; ) {
                    for (u = s, s = []; ++l < e; ) u && u[l].run();
                    (l = -1), (e = s.length);
                }
                (u = null),
                    (f = !1),
                    (function (t) {
                        if (r === clearTimeout) return clearTimeout(t);
                        if ((r === c || !r) && clearTimeout)
                            return (r = clearTimeout), clearTimeout(t);
                        try {
                            r(t);
                        } catch (e) {
                            try {
                                return r.call(null, t);
                            } catch (e) {
                                return r.call(this, t);
                            }
                        }
                    })(t);
            }
        }
        function h(t, e) {
            (this.fun = t), (this.array = e);
        }
        function d() {}
        (o.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    e[n - 1] = arguments[n];
            s.push(new h(t, e)), 1 !== s.length || f || a(v);
        }),
            (h.prototype.run = function () {
                this.fun.apply(null, this.array);
            }),
            (o.title = "browser"),
            (o.browser = !0),
            (o.env = {}),
            (o.argv = []),
            (o.version = ""),
            (o.versions = {}),
            (o.on = d),
            (o.addListener = d),
            (o.once = d),
            (o.off = d),
            (o.removeListener = d),
            (o.removeAllListeners = d),
            (o.emit = d),
            (o.prependListener = d),
            (o.prependOnceListener = d),
            (o.listeners = function (t) {
                return [];
            }),
            (o.binding = function (t) {
                throw new Error("process.binding is not supported");
            }),
            (o.cwd = function () {
                return "/";
            }),
            (o.chdir = function (t) {
                throw new Error("process.chdir is not supported");
            }),
            (o.umask = function () {
                return 0;
            });
    },
    function (t, e) {
        window.NodeList &&
            !NodeList.prototype.forEach &&
            (NodeList.prototype.forEach = function (t, e) {
                e = e || window;
                for (var n = 0; n < this.length; n++)
                    t.call(e, this[n], n, this);
            });
    },
    function (t, e, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
            o = Object.getOwnPropertyDescriptor,
            i = o && !r.call({ 1: 2 }, 1);
        e.f = i
            ? function (t) {
                  var e = o(this, t);
                  return !!e && e.enumerable;
              }
            : r;
    },
    function (t, e, n) {
        var r = n(0),
            o = n(28),
            i = r.WeakMap;
        t.exports = "function" == typeof i && /native code/.test(o(i));
    },
    function (t, e, n) {
        var r = n(5),
            o = n(82),
            i = n(24),
            c = n(10);
        t.exports = function (t, e) {
            for (var n = o(e), a = c.f, u = i.f, s = 0; s < n.length; s++) {
                var f = n[s];
                r(t, f) || a(t, f, u(e, f));
            }
        };
    },
    function (t, e, n) {
        var r = n(14),
            o = n(84),
            i = n(86),
            c = n(3);
        t.exports =
            r("Reflect", "ownKeys") ||
            function (t) {
                var e = o.f(c(t)),
                    n = i.f;
                return n ? e.concat(n(t)) : e;
            };
    },
    function (t, e, n) {
        var r = n(0);
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(47),
            o = n(32).concat("length", "prototype");
        e.f =
            Object.getOwnPropertyNames ||
            function (t) {
                return r(t, o);
            };
    },
    function (t, e, n) {
        var r = n(16),
            o = n(12),
            i = n(48),
            c = function (t) {
                return function (e, n, c) {
                    var a,
                        u = r(e),
                        s = o(u.length),
                        f = i(c, s);
                    if (t && n != n) {
                        for (; s > f; ) if ((a = u[f++]) != a) return !0;
                    } else
                        for (; s > f; f++)
                            if ((t || f in u) && u[f] === n) return t || f || 0;
                    return !t && -1;
                };
            };
        t.exports = { includes: c(!0), indexOf: c(!1) };
    },
    function (t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    function (t, e, n) {
        var r = n(33),
            o = n(42),
            i = n(23),
            c = n(12),
            a = n(51),
            u = [].push,
            s = function (t) {
                var e = 1 == t,
                    n = 2 == t,
                    s = 3 == t,
                    f = 4 == t,
                    l = 6 == t,
                    p = 5 == t || l;
                return function (v, h, d, y) {
                    for (
                        var g,
                            m,
                            x = i(v),
                            w = o(x),
                            b = r(h, d, 3),
                            _ = c(w.length),
                            E = 0,
                            S = y || a,
                            L = e ? S(v, _) : n ? S(v, 0) : void 0;
                        _ > E;
                        E++
                    )
                        if ((p || E in w) && ((m = b((g = w[E]), E, x)), t))
                            if (e) L[E] = m;
                            else if (m)
                                switch (t) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return g;
                                    case 6:
                                        return E;
                                    case 2:
                                        u.call(L, g);
                                }
                            else if (f) return !1;
                    return l ? -1 : s || f ? f : L;
                };
            };
        t.exports = {
            forEach: s(0),
            map: s(1),
            filter: s(2),
            some: s(3),
            every: s(4),
            find: s(5),
            findIndex: s(6),
        };
    },
    function (t, e, n) {
        var r = n(52);
        t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator;
    },
    function (t, e, n) {
        "use strict";
        var r = n(2);
        t.exports = function (t, e) {
            var n = [][t];
            return (
                !!n &&
                r(function () {
                    n.call(
                        null,
                        e ||
                            function () {
                                throw 1;
                            },
                        1
                    );
                })
            );
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(7),
            o = n(4),
            i = n(34),
            c = n(48),
            a = n(12),
            u = n(16),
            s = n(35),
            f = n(1),
            l = n(54),
            p = n(53),
            v = l("slice"),
            h = p("slice", { ACCESSORS: !0, 0: 0, 1: 2 }),
            d = f("species"),
            y = [].slice,
            g = Math.max;
        r(
            { target: "Array", proto: !0, forced: !v || !h },
            {
                slice: function (t, e) {
                    var n,
                        r,
                        f,
                        l = u(this),
                        p = a(l.length),
                        v = c(t, p),
                        h = c(void 0 === e ? p : e, p);
                    if (
                        i(l) &&
                        ("function" != typeof (n = l.constructor) ||
                        (n !== Array && !i(n.prototype))
                            ? o(n) && null === (n = n[d]) && (n = void 0)
                            : (n = void 0),
                        n === Array || void 0 === n)
                    )
                        return y.call(l, v, h);
                    for (
                        r = new (void 0 === n ? Array : n)(g(h - v, 0)), f = 0;
                        v < h;
                        v++, f++
                    )
                        v in l && s(r, f, l[v]);
                    return (r.length = f), r;
                },
            }
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(37),
            o = n(59);
        t.exports = r
            ? {}.toString
            : function () {
                  return "[object " + o(this) + "]";
              };
    },
    function (t, e, n) {
        var r = n(11);
        t.exports = function (t, e, n) {
            for (var o in e) r(t, o, e[o], n);
            return t;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(14),
            o = n(10),
            i = n(1),
            c = n(8),
            a = i("species");
        t.exports = function (t) {
            var e = r(t),
                n = o.f;
            c &&
                e &&
                !e[a] &&
                n(e, a, {
                    configurable: !0,
                    get: function () {
                        return this;
                    },
                });
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            if (!(t instanceof e))
                throw TypeError(
                    "Incorrect " + (n ? n + " " : "") + "invocation"
                );
            return t;
        };
    },
    function (t, e, n) {
        var r = n(1),
            o = n(19),
            i = r("iterator"),
            c = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (o.Array === t || c[i] === t);
        };
    },
    function (t, e, n) {
        var r = n(59),
            o = n(19),
            i = n(1)("iterator");
        t.exports = function (t) {
            if (null != t) return t[i] || t["@@iterator"] || o[r(t)];
        };
    },
    function (t, e, n) {
        var r = n(3);
        t.exports = function (t, e, n, o) {
            try {
                return o ? e(r(n)[0], n[1]) : e(n);
            } catch (e) {
                var i = t.return;
                throw (void 0 !== i && r(i.call(t)), e);
            }
        };
    },
    function (t, e, n) {
        var r = n(1)("iterator"),
            o = !1;
        try {
            var i = 0,
                c = {
                    next: function () {
                        return { done: !!i++ };
                    },
                    return: function () {
                        o = !0;
                    },
                };
            (c[r] = function () {
                return this;
            }),
                Array.from(c, function () {
                    throw 2;
                });
        } catch (t) {}
        t.exports = function (t, e) {
            if (!e && !o) return !1;
            var n = !1;
            try {
                var i = {};
                (i[r] = function () {
                    return {
                        next: function () {
                            return { done: (n = !0) };
                        },
                    };
                }),
                    t(i);
            } catch (t) {}
            return n;
        };
    },
    function (t, e, n) {
        var r,
            o,
            i,
            c,
            a,
            u,
            s,
            f,
            l = n(0),
            p = n(24).f,
            v = n(9),
            h = n(64).set,
            d = n(66),
            y = l.MutationObserver || l.WebKitMutationObserver,
            g = l.process,
            m = l.Promise,
            x = "process" == v(g),
            w = p(l, "queueMicrotask"),
            b = w && w.value;
        b ||
            ((r = function () {
                var t, e;
                for (x && (t = g.domain) && t.exit(); o; ) {
                    (e = o.fn), (o = o.next);
                    try {
                        e();
                    } catch (t) {
                        throw (o ? c() : (i = void 0), t);
                    }
                }
                (i = void 0), t && t.enter();
            }),
            x
                ? (c = function () {
                      g.nextTick(r);
                  })
                : y && !d
                ? ((a = !0),
                  (u = document.createTextNode("")),
                  new y(r).observe(u, { characterData: !0 }),
                  (c = function () {
                      u.data = a = !a;
                  }))
                : m && m.resolve
                ? ((s = m.resolve(void 0)),
                  (f = s.then),
                  (c = function () {
                      f.call(s, r);
                  }))
                : (c = function () {
                      h.call(l, r);
                  })),
            (t.exports =
                b ||
                function (t) {
                    var e = { fn: t, next: void 0 };
                    i && (i.next = e), o || ((o = e), c()), (i = e);
                });
    },
    function (t, e, n) {
        var r = n(0);
        t.exports = function (t, e) {
            var n = r.console;
            n &&
                n.error &&
                (1 === arguments.length ? n.error(t) : n.error(t, e));
        };
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return { error: !1, value: t() };
            } catch (t) {
                return { error: !0, value: t };
            }
        };
    },
    function (t, e, n) {
        var r = (function (t) {
            "use strict";
            var e = Object.prototype,
                n = e.hasOwnProperty,
                r = "function" == typeof Symbol ? Symbol : {},
                o = r.iterator || "@@iterator",
                i = r.asyncIterator || "@@asyncIterator",
                c = r.toStringTag || "@@toStringTag";
            function a(t, e, n) {
                return (
                    Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                    }),
                    t[e]
                );
            }
            try {
                a({}, "");
            } catch (t) {
                a = function (t, e, n) {
                    return (t[e] = n);
                };
            }
            function u(t, e, n, r) {
                var o = e && e.prototype instanceof l ? e : l,
                    i = Object.create(o.prototype),
                    c = new E(r || []);
                return (
                    (i._invoke = (function (t, e, n) {
                        var r = "suspendedStart";
                        return function (o, i) {
                            if ("executing" === r)
                                throw new Error("Generator is already running");
                            if ("completed" === r) {
                                if ("throw" === o) throw i;
                                return L();
                            }
                            for (n.method = o, n.arg = i; ; ) {
                                var c = n.delegate;
                                if (c) {
                                    var a = w(c, n);
                                    if (a) {
                                        if (a === f) continue;
                                        return a;
                                    }
                                }
                                if ("next" === n.method)
                                    n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === r)
                                        throw ((r = "completed"), n.arg);
                                    n.dispatchException(n.arg);
                                } else
                                    "return" === n.method &&
                                        n.abrupt("return", n.arg);
                                r = "executing";
                                var u = s(t, e, n);
                                if ("normal" === u.type) {
                                    if (
                                        ((r = n.done
                                            ? "completed"
                                            : "suspendedYield"),
                                        u.arg === f)
                                    )
                                        continue;
                                    return { value: u.arg, done: n.done };
                                }
                                "throw" === u.type &&
                                    ((r = "completed"),
                                    (n.method = "throw"),
                                    (n.arg = u.arg));
                            }
                        };
                    })(t, n, c)),
                    i
                );
            }
            function s(t, e, n) {
                try {
                    return { type: "normal", arg: t.call(e, n) };
                } catch (t) {
                    return { type: "throw", arg: t };
                }
            }
            t.wrap = u;
            var f = {};
            function l() {}
            function p() {}
            function v() {}
            var h = {};
            h[o] = function () {
                return this;
            };
            var d = Object.getPrototypeOf,
                y = d && d(d(S([])));
            y && y !== e && n.call(y, o) && (h = y);
            var g = (v.prototype = l.prototype = Object.create(h));
            function m(t) {
                ["next", "throw", "return"].forEach(function (e) {
                    a(t, e, function (t) {
                        return this._invoke(e, t);
                    });
                });
            }
            function x(t, e) {
                var r;
                this._invoke = function (o, i) {
                    function c() {
                        return new e(function (r, c) {
                            !(function r(o, i, c, a) {
                                var u = s(t[o], t, i);
                                if ("throw" !== u.type) {
                                    var f = u.arg,
                                        l = f.value;
                                    return l &&
                                        "object" == typeof l &&
                                        n.call(l, "__await")
                                        ? e.resolve(l.__await).then(
                                              function (t) {
                                                  r("next", t, c, a);
                                              },
                                              function (t) {
                                                  r("throw", t, c, a);
                                              }
                                          )
                                        : e.resolve(l).then(
                                              function (t) {
                                                  (f.value = t), c(f);
                                              },
                                              function (t) {
                                                  return r("throw", t, c, a);
                                              }
                                          );
                                }
                                a(u.arg);
                            })(o, i, r, c);
                        });
                    }
                    return (r = r ? r.then(c, c) : c());
                };
            }
            function w(t, e) {
                var n = t.iterator[e.method];
                if (void 0 === n) {
                    if (((e.delegate = null), "throw" === e.method)) {
                        if (
                            t.iterator.return &&
                            ((e.method = "return"),
                            (e.arg = void 0),
                            w(t, e),
                            "throw" === e.method)
                        )
                            return f;
                        (e.method = "throw"),
                            (e.arg = new TypeError(
                                "The iterator does not provide a 'throw' method"
                            ));
                    }
                    return f;
                }
                var r = s(n, t.iterator, e.arg);
                if ("throw" === r.type)
                    return (
                        (e.method = "throw"),
                        (e.arg = r.arg),
                        (e.delegate = null),
                        f
                    );
                var o = r.arg;
                return o
                    ? o.done
                        ? ((e[t.resultName] = o.value),
                          (e.next = t.nextLoc),
                          "return" !== e.method &&
                              ((e.method = "next"), (e.arg = void 0)),
                          (e.delegate = null),
                          f)
                        : o
                    : ((e.method = "throw"),
                      (e.arg = new TypeError(
                          "iterator result is not an object"
                      )),
                      (e.delegate = null),
                      f);
            }
            function b(t) {
                var e = { tryLoc: t[0] };
                1 in t && (e.catchLoc = t[1]),
                    2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                    this.tryEntries.push(e);
            }
            function _(t) {
                var e = t.completion || {};
                (e.type = "normal"), delete e.arg, (t.completion = e);
            }
            function E(t) {
                (this.tryEntries = [{ tryLoc: "root" }]),
                    t.forEach(b, this),
                    this.reset(!0);
            }
            function S(t) {
                if (t) {
                    var e = t[o];
                    if (e) return e.call(t);
                    if ("function" == typeof t.next) return t;
                    if (!isNaN(t.length)) {
                        var r = -1,
                            i = function e() {
                                for (; ++r < t.length; )
                                    if (n.call(t, r))
                                        return (
                                            (e.value = t[r]), (e.done = !1), e
                                        );
                                return (e.value = void 0), (e.done = !0), e;
                            };
                        return (i.next = i);
                    }
                }
                return { next: L };
            }
            function L() {
                return { value: void 0, done: !0 };
            }
            return (
                (p.prototype = g.constructor = v),
                (v.constructor = p),
                (p.displayName = a(v, c, "GeneratorFunction")),
                (t.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return (
                        !!e &&
                        (e === p ||
                            "GeneratorFunction" === (e.displayName || e.name))
                    );
                }),
                (t.mark = function (t) {
                    return (
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, v)
                            : ((t.__proto__ = v), a(t, c, "GeneratorFunction")),
                        (t.prototype = Object.create(g)),
                        t
                    );
                }),
                (t.awrap = function (t) {
                    return { __await: t };
                }),
                m(x.prototype),
                (x.prototype[i] = function () {
                    return this;
                }),
                (t.AsyncIterator = x),
                (t.async = function (e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var c = new x(u(e, n, r, o), i);
                    return t.isGeneratorFunction(n)
                        ? c
                        : c.next().then(function (t) {
                              return t.done ? t.value : c.next();
                          });
                }),
                m(g),
                a(g, c, "Generator"),
                (g[o] = function () {
                    return this;
                }),
                (g.toString = function () {
                    return "[object Generator]";
                }),
                (t.keys = function (t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return (
                        e.reverse(),
                        function n() {
                            for (; e.length; ) {
                                var r = e.pop();
                                if (r in t)
                                    return (n.value = r), (n.done = !1), n;
                            }
                            return (n.done = !0), n;
                        }
                    );
                }),
                (t.values = S),
                (E.prototype = {
                    constructor: E,
                    reset: function (t) {
                        if (
                            ((this.prev = 0),
                            (this.next = 0),
                            (this.sent = this._sent = void 0),
                            (this.done = !1),
                            (this.delegate = null),
                            (this.method = "next"),
                            (this.arg = void 0),
                            this.tryEntries.forEach(_),
                            !t)
                        )
                            for (var e in this)
                                "t" === e.charAt(0) &&
                                    n.call(this, e) &&
                                    !isNaN(+e.slice(1)) &&
                                    (this[e] = void 0);
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval;
                    },
                    dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;
                        function r(n, r) {
                            return (
                                (c.type = "throw"),
                                (c.arg = t),
                                (e.next = n),
                                r && ((e.method = "next"), (e.arg = void 0)),
                                !!r
                            );
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                c = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var a = n.call(i, "catchLoc"),
                                    u = n.call(i, "finallyLoc");
                                if (a && u) {
                                    if (this.prev < i.catchLoc)
                                        return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc)
                                        return r(i.finallyLoc);
                                } else if (a) {
                                    if (this.prev < i.catchLoc)
                                        return r(i.catchLoc, !0);
                                } else {
                                    if (!u)
                                        throw new Error(
                                            "try statement without catch or finally"
                                        );
                                    if (this.prev < i.finallyLoc)
                                        return r(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (
                                o.tryLoc <= this.prev &&
                                n.call(o, "finallyLoc") &&
                                this.prev < o.finallyLoc
                            ) {
                                var i = o;
                                break;
                            }
                        }
                        i &&
                            ("break" === t || "continue" === t) &&
                            i.tryLoc <= e &&
                            e <= i.finallyLoc &&
                            (i = null);
                        var c = i ? i.completion : {};
                        return (
                            (c.type = t),
                            (c.arg = e),
                            i
                                ? ((this.method = "next"),
                                  (this.next = i.finallyLoc),
                                  f)
                                : this.complete(c)
                        );
                    },
                    complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return (
                            "break" === t.type || "continue" === t.type
                                ? (this.next = t.arg)
                                : "return" === t.type
                                ? ((this.rval = this.arg = t.arg),
                                  (this.method = "return"),
                                  (this.next = "end"))
                                : "normal" === t.type && e && (this.next = e),
                            f
                        );
                    },
                    finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t)
                                return (
                                    this.complete(n.completion, n.afterLoc),
                                    _(n),
                                    f
                                );
                        }
                    },
                    catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    _(n);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (t, e, n) {
                        return (
                            (this.delegate = {
                                iterator: S(t),
                                resultName: e,
                                nextLoc: n,
                            }),
                            "next" === this.method && (this.arg = void 0),
                            f
                        );
                    },
                }),
                t
            );
        })(t.exports);
        try {
            regeneratorRuntime = r;
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(r);
        }
    },
    function (t, e, n) {
        "use strict";
        var r = n(3);
        t.exports = function () {
            var t = r(this),
                e = "";
            return (
                t.global && (e += "g"),
                t.ignoreCase && (e += "i"),
                t.multiline && (e += "m"),
                t.dotAll && (e += "s"),
                t.unicode && (e += "u"),
                t.sticky && (e += "y"),
                e
            );
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(2);
        function o(t, e) {
            return RegExp(t, e);
        }
        (e.UNSUPPORTED_Y = r(function () {
            var t = o("a", "y");
            return (t.lastIndex = 2), null != t.exec("abcd");
        })),
            (e.BROKEN_CARET = r(function () {
                var t = o("^r", "gy");
                return (t.lastIndex = 2), null != t.exec("str");
            }));
    },
    function (t, e, n) {
        "use strict";
        var r = n(69),
            o = n(3),
            i = n(12),
            c = n(17),
            a = n(70),
            u = n(71);
        r("match", 1, function (t, e, n) {
            return [
                function (e) {
                    var n = c(this),
                        r = null == e ? void 0 : e[t];
                    return void 0 !== r
                        ? r.call(e, n)
                        : new RegExp(e)[t](String(n));
                },
                function (t) {
                    var r = n(e, t, this);
                    if (r.done) return r.value;
                    var c = o(t),
                        s = String(this);
                    if (!c.global) return u(c, s);
                    var f = c.unicode;
                    c.lastIndex = 0;
                    for (var l, p = [], v = 0; null !== (l = u(c, s)); ) {
                        var h = String(l[0]);
                        (p[v] = h),
                            "" === h && (c.lastIndex = a(s, i(c.lastIndex), f)),
                            v++;
                    }
                    return 0 === v ? null : p;
                },
            ];
        });
    },
    function (t, e, n) {
        var r = n(21),
            o = n(17),
            i = function (t) {
                return function (e, n) {
                    var i,
                        c,
                        a = String(o(e)),
                        u = r(n),
                        s = a.length;
                    return u < 0 || u >= s
                        ? t
                            ? ""
                            : void 0
                        : (i = a.charCodeAt(u)) < 55296 ||
                          i > 56319 ||
                          u + 1 === s ||
                          (c = a.charCodeAt(u + 1)) < 56320 ||
                          c > 57343
                        ? t
                            ? a.charAt(u)
                            : i
                        : t
                        ? a.slice(u, u + 2)
                        : c - 56320 + ((i - 55296) << 10) + 65536;
                };
            };
        t.exports = { codeAt: i(!1), charAt: i(!0) };
    },
    function (t, e, n) {
        var r = n(1),
            o = n(73),
            i = n(10),
            c = r("unscopables"),
            a = Array.prototype;
        null == a[c] && i.f(a, c, { configurable: !0, value: o(null) }),
            (t.exports = function (t) {
                a[c][t] = !0;
            });
    },
    function (t, e, n) {
        var r = n(8),
            o = n(10),
            i = n(3),
            c = n(109);
        t.exports = r
            ? Object.defineProperties
            : function (t, e) {
                  i(t);
                  for (var n, r = c(e), a = r.length, u = 0; a > u; )
                      o.f(t, (n = r[u++]), e[n]);
                  return t;
              };
    },
    function (t, e, n) {
        var r = n(47),
            o = n(32);
        t.exports =
            Object.keys ||
            function (t) {
                return r(t, o);
            };
    },
    function (t, e, n) {
        "use strict";
        var r = n(7),
            o = n(111),
            i = n(75),
            c = n(113),
            a = n(38),
            u = n(6),
            s = n(11),
            f = n(1),
            l = n(18),
            p = n(19),
            v = n(74),
            h = v.IteratorPrototype,
            d = v.BUGGY_SAFARI_ITERATORS,
            y = f("iterator"),
            g = function () {
                return this;
            };
        t.exports = function (t, e, n, f, v, m, x) {
            o(n, e, f);
            var w,
                b,
                _,
                E = function (t) {
                    if (t === v && j) return j;
                    if (!d && t in A) return A[t];
                    switch (t) {
                        case "keys":
                        case "values":
                        case "entries":
                            return function () {
                                return new n(this, t);
                            };
                    }
                    return function () {
                        return new n(this);
                    };
                },
                S = e + " Iterator",
                L = !1,
                A = t.prototype,
                T = A[y] || A["@@iterator"] || (v && A[v]),
                j = (!d && T) || E(v),
                O = ("Array" == e && A.entries) || T;
            if (
                (O &&
                    ((w = i(O.call(new t()))),
                    h !== Object.prototype &&
                        w.next &&
                        (l ||
                            i(w) === h ||
                            (c
                                ? c(w, h)
                                : "function" != typeof w[y] && u(w, y, g)),
                        a(w, S, !0, !0),
                        l && (p[S] = g))),
                "values" == v &&
                    T &&
                    "values" !== T.name &&
                    ((L = !0),
                    (j = function () {
                        return T.call(this);
                    })),
                (l && !x) || A[y] === j || u(A, y, j),
                (p[e] = j),
                v)
            )
                if (
                    ((b = {
                        values: E("values"),
                        keys: m ? j : E("keys"),
                        entries: E("entries"),
                    }),
                    x)
                )
                    for (_ in b) (d || L || !(_ in A)) && s(A, _, b[_]);
                else r({ target: e, proto: !0, forced: d || L }, b);
            return b;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(74).IteratorPrototype,
            o = n(73),
            i = n(20),
            c = n(38),
            a = n(19),
            u = function () {
                return this;
            };
        t.exports = function (t, e, n) {
            var s = e + " Iterator";
            return (
                (t.prototype = o(r, { next: i(1, n) })),
                c(t, s, !1, !0),
                (a[s] = u),
                t
            );
        };
    },
    function (t, e, n) {
        var r = n(2);
        t.exports = !r(function () {
            function t() {}
            return (
                (t.prototype.constructor = null),
                Object.getPrototypeOf(new t()) !== t.prototype
            );
        });
    },
    function (t, e, n) {
        var r = n(3),
            o = n(114);
        t.exports =
            Object.setPrototypeOf ||
            ("__proto__" in {}
                ? (function () {
                      var t,
                          e = !1,
                          n = {};
                      try {
                          (t = Object.getOwnPropertyDescriptor(
                              Object.prototype,
                              "__proto__"
                          ).set).call(n, []),
                              (e = n instanceof Array);
                      } catch (t) {}
                      return function (n, i) {
                          return (
                              r(n),
                              o(i),
                              e ? t.call(n, i) : (n.__proto__ = i),
                              n
                          );
                      };
                  })()
                : void 0);
    },
    function (t, e, n) {
        var r = n(4);
        t.exports = function (t) {
            if (!r(t) && null !== t)
                throw TypeError("Can't set " + String(t) + " as a prototype");
            return t;
        };
    },
    function (t, e, n) {
        var r = n(7),
            o = n(62),
            i = n(35);
        r(
            { target: "Object", stat: !0 },
            {
                fromEntries: function (t) {
                    var e = {};
                    return (
                        o(
                            t,
                            function (t, n) {
                                i(e, t, n);
                            },
                            void 0,
                            !0
                        ),
                        e
                    );
                },
            }
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(7),
            o = n(18),
            i = n(61),
            c = n(2),
            a = n(14),
            u = n(63),
            s = n(67),
            f = n(11);
        r(
            {
                target: "Promise",
                proto: !0,
                real: !0,
                forced:
                    !!i &&
                    c(function () {
                        i.prototype.finally.call(
                            { then: function () {} },
                            function () {}
                        );
                    }),
            },
            {
                finally: function (t) {
                    var e = u(this, a("Promise")),
                        n = "function" == typeof t;
                    return this.then(
                        n
                            ? function (n) {
                                  return s(e, t()).then(function () {
                                      return n;
                                  });
                              }
                            : t,
                        n
                            ? function (n) {
                                  return s(e, t()).then(function () {
                                      throw n;
                                  });
                              }
                            : t
                    );
                },
            }
        ),
            o ||
                "function" != typeof i ||
                i.prototype.finally ||
                f(i.prototype, "finally", a("Promise").prototype.finally);
    },
    function (t, e, n) {
        var r = n(0),
            o = n(56),
            i = n(72),
            c = n(6),
            a = n(1),
            u = a("iterator"),
            s = a("toStringTag"),
            f = i.values;
        for (var l in o) {
            var p = r[l],
                v = p && p.prototype;
            if (v) {
                if (v[u] !== f)
                    try {
                        c(v, u, f);
                    } catch (t) {
                        v[u] = f;
                    }
                if ((v[s] || c(v, s, l), o[l]))
                    for (var h in i)
                        if (v[h] !== i[h])
                            try {
                                c(v, h, i[h]);
                            } catch (t) {
                                v[h] = i[h];
                            }
            }
        }
    },
    function (t, e, n) {
        "use strict";
        var r = n(69),
            o = n(3),
            i = n(23),
            c = n(12),
            a = n(21),
            u = n(17),
            s = n(70),
            f = n(71),
            l = Math.max,
            p = Math.min,
            v = Math.floor,
            h = /\$([$&'`]|\d\d?|<[^>]*>)/g,
            d = /\$([$&'`]|\d\d?)/g;
        r("replace", 2, function (t, e, n, r) {
            var y = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                g = r.REPLACE_KEEPS_$0,
                m = y ? "$" : "$0";
            return [
                function (n, r) {
                    var o = u(this),
                        i = null == n ? void 0 : n[t];
                    return void 0 !== i
                        ? i.call(n, o, r)
                        : e.call(String(o), n, r);
                },
                function (t, r) {
                    if (
                        (!y && g) ||
                        ("string" == typeof r && -1 === r.indexOf(m))
                    ) {
                        var i = n(e, t, this, r);
                        if (i.done) return i.value;
                    }
                    var u = o(t),
                        v = String(this),
                        h = "function" == typeof r;
                    h || (r = String(r));
                    var d = u.global;
                    if (d) {
                        var w = u.unicode;
                        u.lastIndex = 0;
                    }
                    for (var b = []; ; ) {
                        var _ = f(u, v);
                        if (null === _) break;
                        if ((b.push(_), !d)) break;
                        "" === String(_[0]) &&
                            (u.lastIndex = s(v, c(u.lastIndex), w));
                    }
                    for (var E, S = "", L = 0, A = 0; A < b.length; A++) {
                        _ = b[A];
                        for (
                            var T = String(_[0]),
                                j = l(p(a(_.index), v.length), 0),
                                O = [],
                                P = 1;
                            P < _.length;
                            P++
                        )
                            O.push(void 0 === (E = _[P]) ? E : String(E));
                        var k = _.groups;
                        if (h) {
                            var I = [T].concat(O, j, v);
                            void 0 !== k && I.push(k);
                            var C = String(r.apply(void 0, I));
                        } else C = x(T, v, j, O, k, r);
                        j >= L &&
                            ((S += v.slice(L, j) + C), (L = j + T.length));
                    }
                    return S + v.slice(L);
                },
            ];
            function x(t, n, r, o, c, a) {
                var u = r + t.length,
                    s = o.length,
                    f = d;
                return (
                    void 0 !== c && ((c = i(c)), (f = h)),
                    e.call(a, f, function (e, i) {
                        var a;
                        switch (i.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return t;
                            case "`":
                                return n.slice(0, r);
                            case "'":
                                return n.slice(u);
                            case "<":
                                a = c[i.slice(1, -1)];
                                break;
                            default:
                                var f = +i;
                                if (0 === f) return e;
                                if (f > s) {
                                    var l = v(f / 10);
                                    return 0 === l
                                        ? e
                                        : l <= s
                                        ? void 0 === o[l - 1]
                                            ? i.charAt(1)
                                            : o[l - 1] + i.charAt(1)
                                        : e;
                                }
                                a = o[f - 1];
                        }
                        return void 0 === a ? "" : a;
                    })
                );
            }
        });
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        n(78), n(13), n(90), n(15);
        var r = function (t, e, n, r) {
            var o = document.querySelectorAll(t),
                i = document.querySelectorAll(e),
                c = document.querySelector(n);
            function a() {
                i.forEach(function (t) {
                    t.classList.add("hide"), t.classList.remove("show", "fade");
                }),
                    o.forEach(function (t) {
                        t.classList.remove(r);
                    });
            }
            function u() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0;
                i[t].classList.add("show", "fade"),
                    i[t].classList.remove("hide"),
                    o[t].classList.add(r);
            }
            a(),
                u(),
                c.addEventListener("click", function (e) {
                    var n = e.target;
                    n &&
                        n.classList.contains(t.slice(1)) &&
                        o.forEach(function (t, e) {
                            n == t && (a(), u(e));
                        });
                });
        };
        function o(t) {
            var e = document.querySelector(t);
            e.classList.add("hide"),
                e.classList.remove("show"),
                (document.body.style.overflow = "");
        }
        function i(t, e) {
            var n = document.querySelector(t);
            n.classList.add("show"),
                n.classList.remove("hide"),
                (document.body.style.overflow = "hidden"),
                console.log(e),
                e && clearInterval(e);
        }
        var c = function (t, e, n) {
            var r = document.querySelectorAll(t),
                c = document.querySelector(e);
            r.forEach(function (t) {
                t.addEventListener("click", function () {
                    return i(e, n);
                });
            }),
                c.addEventListener("click", function (t) {
                    (t.target !== c &&
                        "" != t.target.getAttribute("data-close")) ||
                        o(e);
                }),
                document.addEventListener("keydown", function (t) {
                    "Escape" === t.code && c.classList.contains("show") && o(e);
                }),
                window.addEventListener("scroll", function t() {
                    window.pageYOffset +
                        document.documentElement.clientHeight >=
                        document.documentElement.scrollHeight &&
                        (i(e, n), window.removeEventListener("scroll", t));
                });
        };
        var a = function (t, e) {
            function n(t) {
                return t >= 0 && t < 10 ? "0" + t : t;
            }
            !(function (t, e) {
                var r = document.querySelector(t),
                    o = r.querySelector("#days"),
                    i = r.querySelector("#hours"),
                    c = r.querySelector("#minutes"),
                    a = r.querySelector("#seconds"),
                    u = setInterval(s, 1e3);
                function s() {
                    var t = (function (t) {
                        var e = Date.parse(t) - Date.parse(new Date()),
                            n = Math.floor(e / 864e5),
                            r = Math.floor((e / 1e3) % 60),
                            o = Math.floor((e / 1e3 / 60) % 60);
                        return {
                            total: e,
                            days: n,
                            hours: Math.floor((e / 36e5) % 24),
                            minutes: o,
                            seconds: r,
                        };
                    })(e);
                    (o.innerHTML = n(t.days)),
                        (i.innerHTML = n(t.hours)),
                        (c.innerHTML = n(t.minutes)),
                        (a.innerHTML = n(t.seconds)),
                        t.total <= 0 && clearInterval(u);
                }
                s();
            })(t, e);
        };
        n(57), n(58), n(60), n(102);
        function u(t, e, n, r, o, i, c) {
            try {
                var a = t[i](c),
                    u = a.value;
            } catch (t) {
                return void n(t);
            }
            a.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        function s(t) {
            return function () {
                var e = this,
                    n = arguments;
                return new Promise(function (r, o) {
                    var i = t.apply(e, n);
                    function c(t) {
                        u(i, r, o, c, a, "next", t);
                    }
                    function a(t) {
                        u(i, r, o, c, a, "throw", t);
                    }
                    c(void 0);
                });
            };
        }
        var f = (function () {
            var t = s(
                regeneratorRuntime.mark(function t(e, n) {
                    var r;
                    return regeneratorRuntime.wrap(function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (
                                        (t.next = 2),
                                        fetch(e, {
                                            method: "POST",
                                            headers: {
                                                "Content-Type":
                                                    "application/json",
                                            },
                                            body: n,
                                        })
                                    );
                                case 2:
                                    return (r = t.sent), (t.next = 5), r.json();
                                case 5:
                                    return t.abrupt("return", t.sent);
                                case 6:
                                case "end":
                                    return t.stop();
                            }
                    }, t);
                })
            );
            return function (e, n) {
                return t.apply(this, arguments);
            };
        })();
        function l() {
            return (l = s(
                regeneratorRuntime.mark(function t(e) {
                    var n;
                    return regeneratorRuntime.wrap(function (t) {
                        for (;;)
                            switch ((t.prev = t.next)) {
                                case 0:
                                    return (t.next = 2), fetch(e);
                                case 2:
                                    if ((n = t.sent).ok) {
                                        t.next = 5;
                                        break;
                                    }
                                    throw new Error(
                                        "Could not fetch "
                                            .concat(e, ", status: ")
                                            .concat(n.status)
                                    );
                                case 5:
                                    return (t.next = 7), n.json();
                                case 7:
                                    return t.abrupt("return", t.sent);
                                case 8:
                                case "end":
                                    return t.stop();
                            }
                    }, t);
                })
            )).apply(this, arguments);
        }
        function p(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
        }
        function v(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
            }
        }
        var h = function () {
            var t = (function () {
                function t(e, n, r, o, i, c) {
                    p(this, t),
                        (this.src = e),
                        (this.alt = n),
                        (this.title = r),
                        (this.descr = o),
                        (this.price = i);
                    for (
                        var a = arguments.length,
                            u = new Array(a > 6 ? a - 6 : 0),
                            s = 6;
                        s < a;
                        s++
                    )
                        u[s - 6] = arguments[s];
                    (this.classes = u),
                        (this.parent = document.querySelector(c)),
                        (this.transfer = 27),
                        this.changeToUAH();
                }
                var e, n, r;
                return (
                    (e = t),
                    (n = [
                        {
                            key: "changeToUAH",
                            value: function () {
                                this.price = this.price * this.transfer;
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = document.createElement("div");
                                0 === this.classes.length
                                    ? ((this.classes = "menu__item"),
                                      t.classList.add(this.classes))
                                    : this.classes.forEach(function (e) {
                                          return t.classList.add(e);
                                      }),
                                    (t.innerHTML = "\n                <img src="
                                        .concat(this.src, " alt=")
                                        .concat(
                                            this.alt,
                                            '>\n                <h3 class="menu__item-subtitle">'
                                        )
                                        .concat(
                                            this.title,
                                            '</h3>\n                <div class="menu__item-descr">'
                                        )
                                        .concat(
                                            this.descr,
                                            '</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>'
                                        )
                                        .concat(
                                            this.price,
                                            "</span> грн/день</div>\n                </div>\n            "
                                        )),
                                    this.parent.append(t);
                            },
                        },
                    ]) && v(e.prototype, n),
                    r && v(e, r),
                    t
                );
            })();
            (function (t) {
                return l.apply(this, arguments);
            })("http://localhost:3000/menu").then(function (e) {
                e.forEach(function (e) {
                    var n = e.img,
                        r = e.altimg,
                        o = e.title,
                        i = e.descr,
                        c = e.price;
                    new t(n, r, o, i, c, ".menu .container").render();
                });
            });
        };
        n(39), n(105);
        var d = function () {
            var t,
                e,
                n,
                r,
                o,
                i = document.querySelector(".calculating__result span");
            function c() {
                i.textContent =
                    t && e && n && r && o
                        ? "female" === t
                            ? Math.round(
                                  (447.6 + 9.2 * n + 3.1 * e - 4.3 * r) * o
                              )
                            : Math.round(
                                  (88.36 + 13.4 * n + 4.8 * e - 5.7 * r) * o
                              )
                        : "____";
            }
            function a(t, e) {
                document.querySelectorAll(t).forEach(function (t) {
                    t.classList.remove(e),
                        t.getAttribute("id") === localStorage.getItem("sex") &&
                            t.classList.add(e),
                        t.getAttribute("data-ratio") ===
                            localStorage.getItem("ratio") && t.classList.add(e);
                });
            }
            function u(e, n) {
                var r = document.querySelectorAll(e);
                r.forEach(function (e) {
                    e.addEventListener("click", function (e) {
                        e.target.getAttribute("data-ratio")
                            ? ((o = +e.target.getAttribute("data-ratio")),
                              localStorage.setItem(
                                  "ratio",
                                  +e.target.getAttribute("data-ratio")
                              ))
                            : ((t = e.target.getAttribute("id")),
                              localStorage.setItem(
                                  "sex",
                                  e.target.getAttribute("id")
                              )),
                            r.forEach(function (t) {
                                t.classList.remove(n);
                            }),
                            e.target.classList.add(n),
                            c();
                    });
                });
            }
            function s(t) {
                var o = document.querySelector(t);
                o.addEventListener("input", function () {
                    switch (
                        (o.value.match(/\D/g)
                            ? (o.style.border = "1px solid red")
                            : (o.style.border = "none"),
                        o.getAttribute("id"))
                    ) {
                        case "height":
                            e = +o.value;
                            break;
                        case "weight":
                            n = +o.value;
                            break;
                        case "age":
                            r = +o.value;
                    }
                    c();
                });
            }
            localStorage.getItem("sex")
                ? (t = localStorage.getItem("sex"))
                : ((t = "female"), localStorage.setItem("sex", "female")),
                localStorage.getItem("ratio")
                    ? (o = localStorage.getItem("ratio"))
                    : ((o = 1.375), localStorage.setItem("ratio", 1.375)),
                c(),
                a("#gender div", "calculating__choose-item_active"),
                a(
                    ".calculating__choose_big div",
                    "calculating__choose-item_active"
                ),
                u("#gender div", "calculating__choose-item_active"),
                u(
                    ".calculating__choose_big div",
                    "calculating__choose-item_active"
                ),
                s("#height"),
                s("#weight"),
                s("#age");
        };
        n(72), n(115), n(116), n(117);
        var y = function (t, e) {
            var n = document.querySelectorAll(t),
                r = "img/form/spinner.svg",
                c = "Спасибо! Скоро мы с вами свяжемся",
                a = "Что-то пошло не так...";
            function u(t) {
                var n = document.querySelector(".modal__dialog");
                n.classList.add("hide"), i(".modal", e);
                var r = document.createElement("div");
                r.classList.add("modal__dialog"),
                    (r.innerHTML = '\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">'.concat(
                        t,
                        "</div>\n            </div>\n        "
                    )),
                    document.querySelector(".modal").append(r),
                    setTimeout(function () {
                        r.remove(),
                            n.classList.add("show"),
                            n.classList.remove("hide"),
                            o(".modal");
                    }, 4e3);
            }
            n.forEach(function (t) {
                var e;
                (e = t).addEventListener("submit", function (t) {
                    t.preventDefault();
                    var n = document.createElement("img");
                    (n.src = r),
                        (n.style.cssText =
                            "\n                display: block;\n                margin: 0 auto;\n            "),
                        e.insertAdjacentElement("afterend", n);
                    var o = new FormData(e),
                        i = JSON.stringify(Object.fromEntries(o.entries()));
                    f("http://localhost:3000/requests", i)
                        .then(function (t) {
                            console.log(t), u(c), n.remove();
                        })
                        .catch(function () {
                            u(a);
                        })
                        .finally(function () {
                            e.reset();
                        });
                });
            });
        };
        n(118);
        var g = function (t) {
            var e = t.container,
                n = t.slide,
                r = t.nextArrow,
                o = t.prevArrow,
                i = t.totalCounter,
                c = t.currentCounter,
                a = t.wrapper,
                u = t.field,
                s = 0,
                f = 1,
                l = document.querySelectorAll(n),
                p = document.querySelector(e),
                v = document.querySelector(o),
                h = document.querySelector(r),
                d = document.querySelector(i),
                y = document.querySelector(c),
                g = document.querySelector(a),
                m = window.getComputedStyle(g).width,
                x = document.querySelector(u);
            l.length < 10
                ? ((d.textContent = "0".concat(l.length)),
                  (y.textContent = "0".concat(f)))
                : ((d.textContent = l.length), (y.textContent = f)),
                (x.style.width = 100 * l.length + "%"),
                (x.style.display = "flex"),
                (x.style.transition = "0.5s all"),
                (g.style.overflow = "hidden"),
                l.forEach(function (t) {
                    t.style.width = m;
                }),
                (p.style.position = "relative");
            var w = document.createElement("ol"),
                b = [];
            w.classList.add("carousel-indicators"),
                (w.style.cssText =
                    "\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    "),
                p.append(w);
            for (var _ = 0; _ < l.length; _++) {
                var E = document.createElement("li");
                E.setAttribute("data-slide-to", _ + 1),
                    (E.style.cssText =
                        "\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        "),
                    0 == _ && (E.style.opacity = 1),
                    w.append(E),
                    b.push(E);
            }
            function S(t) {
                return +t.replace(/\D/g, "");
            }
            h.addEventListener("click", function () {
                s == S(m) * (l.length - 1) ? (s = 0) : (s += S(m)),
                    (x.style.transform = "translateX(-".concat(s, "px)")),
                    f == l.length ? (f = 1) : f++,
                    l.length < 10
                        ? (y.textContent = "0".concat(f))
                        : (y.textContent = f),
                    b.forEach(function (t) {
                        return (t.style.opacity = ".5");
                    }),
                    (b[f - 1].style.opacity = 1);
            }),
                v.addEventListener("click", function () {
                    0 == s ? (s = S(m) * (l.length - 1)) : (s -= S(m)),
                        (x.style.transform = "translateX(-".concat(s, "px)")),
                        1 == f ? (f = l.length) : f--,
                        l.length < 10
                            ? (y.textContent = "0".concat(f))
                            : (y.textContent = f),
                        b.forEach(function (t) {
                            return (t.style.opacity = ".5");
                        }),
                        (b[f - 1].style.opacity = 1);
                }),
                b.forEach(function (t) {
                    t.addEventListener("click", function (t) {
                        var e = t.target.getAttribute("data-slide-to");
                        (f = e),
                            (s = S(m) * (e - 1)),
                            (x.style.transform = "translateX(-".concat(
                                s,
                                "px)"
                            )),
                            l.length < 10
                                ? (y.textContent = "0".concat(f))
                                : (y.textContent = f),
                            b.forEach(function (t) {
                                return (t.style.opacity = ".5");
                            }),
                            (b[f - 1].style.opacity = 1);
                    });
                });
        };
        n(76).polyfill(),
            window.addEventListener("DOMContentLoaded", function () {
                var t = setTimeout(function () {
                    return i(".modal", t);
                }, 5e4);
                r(
                    ".tabheader__item",
                    ".tabcontent",
                    ".tabheader__items",
                    "tabheader__item_active"
                ),
                    c("[data-modal]", ".modal", t),
                    a(".timer", "2020-09-20"),
                    h(),
                    d(),
                    y("form", t),
                    g({
                        container: ".offer__slider",
                        slide: ".offer__slide",
                        nextArrow: ".offer__slider-next",
                        prevArrow: ".offer__slider-prev",
                        totalCounter: "#total",
                        currentCounter: "#current",
                        wrapper: ".offer__slider-wrapper",
                        field: ".offer__slider-inner",
                    });
            });
    },
]);
//# sourceMappingURL=bundle.js.map
