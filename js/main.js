(() => {
    var e = {
            978: function(e, t, o) {
                var n, i, r, a;

                function c(e) {
                    return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, c(e)
                }
                e = o.nmd(e), a = function() {
                    return function(e) {
                        function t(n) {
                            if (o[n]) return o[n].exports;
                            var i = o[n] = {
                                exports: {},
                                id: n,
                                loaded: !1
                            };
                            return e[n].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
                        }
                        var o = {};
                        return t.m = e, t.c = o, t.p = "dist/", t(0)
                    }([function(e, t, o) {
                        "use strict";

                        function n(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }
                        var i = Object.assign || function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var o = arguments[t];
                                    for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
                                }
                                return e
                            },
                            r = (n(o(1)), o(6)),
                            a = n(r),
                            c = n(o(7)),
                            s = n(o(8)),
                            u = n(o(9)),
                            d = n(o(10)),
                            l = n(o(11)),
                            f = n(o(14)),
                            m = [],
                            p = !1,
                            v = {
                                offset: 120,
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                disable: !1,
                                once: !1,
                                startEvent: "DOMContentLoaded",
                                throttleDelay: 99,
                                debounceDelay: 50,
                                disableMutationObserver: !1
                            },
                            y = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (e && (p = !0), p) return m = (0, l.default)(m, v), (0, d.default)(m, v.once), m
                            },
                            b = function() {
                                m = (0, f.default)(), y()
                            };
                        e.exports = {
                            init: function(e) {
                                v = i(v, e), m = (0, f.default)();
                                var t = document.all && !window.atob;
                                return function(e) {
                                    return !0 === e || "mobile" === e && u.default.mobile() || "phone" === e && u.default.phone() || "tablet" === e && u.default.tablet() || "function" == typeof e && !0 === e()
                                }(v.disable) || t ? void m.forEach((function(e, t) {
                                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                                })) : (document.querySelector("body").setAttribute("data-aos-easing", v.easing), document.querySelector("body").setAttribute("data-aos-duration", v.duration), document.querySelector("body").setAttribute("data-aos-delay", v.delay), "DOMContentLoaded" === v.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? y(!0) : "load" === v.startEvent ? window.addEventListener(v.startEvent, (function() {
                                    y(!0)
                                })) : document.addEventListener(v.startEvent, (function() {
                                    y(!0)
                                })), window.addEventListener("resize", (0, c.default)(y, v.debounceDelay, !0)), window.addEventListener("orientationchange", (0, c.default)(y, v.debounceDelay, !0)), window.addEventListener("scroll", (0, a.default)((function() {
                                    (0, d.default)(m, v.once)
                                }), v.throttleDelay)), v.disableMutationObserver || (0, s.default)("[data-aos]", b), m)
                            },
                            refresh: y,
                            refreshHard: b
                        }
                    }, function(e, t) {}, , , , , function(e, t) {
                        (function(t) {
                            "use strict";

                            function o(e) {
                                var t = void 0 === e ? "undefined" : i(e);
                                return !!e && ("object" == t || "function" == t)
                            }

                            function n(e) {
                                if ("number" == typeof e) return e;
                                if (function(e) {
                                        return "symbol" == (void 0 === e ? "undefined" : i(e)) || function(e) {
                                            return !!e && "object" == (void 0 === e ? "undefined" : i(e))
                                        }(e) && b.call(e) == s
                                    }(e)) return a;
                                if (o(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = o(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = e.replace(u, "");
                                var n = l.test(e);
                                return n || f.test(e) ? m(e.slice(2), n ? 2 : 8) : d.test(e) ? a : +e
                            }
                            var i = "function" == typeof Symbol && "symbol" == c(Symbol.iterator) ? function(e) {
                                    return c(e)
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : c(e)
                                },
                                r = "Expected a function",
                                a = NaN,
                                s = "[object Symbol]",
                                u = /^\s+|\s+$/g,
                                d = /^[-+]0x[0-9a-f]+$/i,
                                l = /^0b[01]+$/i,
                                f = /^0o[0-7]+$/i,
                                m = parseInt,
                                p = "object" == (void 0 === t ? "undefined" : i(t)) && t && t.Object === Object && t,
                                v = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self,
                                y = p || v || Function("return this")(),
                                b = Object.prototype.toString,
                                g = Math.max,
                                w = Math.min,
                                h = function() {
                                    return y.Date.now()
                                };
                            e.exports = function(e, t, i) {
                                var a = !0,
                                    c = !0;
                                if ("function" != typeof e) throw new TypeError(r);
                                return o(i) && (a = "leading" in i ? !!i.leading : a, c = "trailing" in i ? !!i.trailing : c),
                                    function(e, t, i) {
                                        function a(t) {
                                            var o = f,
                                                n = m;
                                            return f = m = void 0, k = t, v = e.apply(n, o)
                                        }

                                        function c(e) {
                                            return k = e, y = setTimeout(u, t), x ? a(e) : v
                                        }

                                        function s(e) {
                                            var o = e - b;
                                            return void 0 === b || o >= t || o < 0 || E && e - k >= p
                                        }

                                        function u() {
                                            var e = h();
                                            return s(e) ? d(e) : void(y = setTimeout(u, function(e) {
                                                var o = t - (e - b);
                                                return E ? w(o, p - (e - k)) : o
                                            }(e)))
                                        }

                                        function d(e) {
                                            return y = void 0, j && f ? a(e) : (f = m = void 0, v)
                                        }

                                        function l() {
                                            var e = h(),
                                                o = s(e);
                                            if (f = arguments, m = this, b = e, o) {
                                                if (void 0 === y) return c(b);
                                                if (E) return y = setTimeout(u, t), a(b)
                                            }
                                            return void 0 === y && (y = setTimeout(u, t)), v
                                        }
                                        var f, m, p, v, y, b, k = 0,
                                            x = !1,
                                            E = !1,
                                            j = !0;
                                        if ("function" != typeof e) throw new TypeError(r);
                                        return t = n(t) || 0, o(i) && (x = !!i.leading, p = (E = "maxWait" in i) ? g(n(i.maxWait) || 0, t) : p, j = "trailing" in i ? !!i.trailing : j), l.cancel = function() {
                                            void 0 !== y && clearTimeout(y), k = 0, f = b = m = y = void 0
                                        }, l.flush = function() {
                                            return void 0 === y ? v : d(h())
                                        }, l
                                    }(e, t, {
                                        leading: a,
                                        maxWait: t,
                                        trailing: c
                                    })
                            }
                        }).call(t, function() {
                            return this
                        }())
                    }, function(e, t) {
                        (function(t) {
                            "use strict";

                            function o(e) {
                                var t = void 0 === e ? "undefined" : i(e);
                                return !!e && ("object" == t || "function" == t)
                            }

                            function n(e) {
                                if ("number" == typeof e) return e;
                                if (function(e) {
                                        return "symbol" == (void 0 === e ? "undefined" : i(e)) || function(e) {
                                            return !!e && "object" == (void 0 === e ? "undefined" : i(e))
                                        }(e) && y.call(e) == a
                                    }(e)) return r;
                                if (o(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = o(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = e.replace(s, "");
                                var n = d.test(e);
                                return n || l.test(e) ? f(e.slice(2), n ? 2 : 8) : u.test(e) ? r : +e
                            }
                            var i = "function" == typeof Symbol && "symbol" == c(Symbol.iterator) ? function(e) {
                                    return c(e)
                                } : function(e) {
                                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : c(e)
                                },
                                r = NaN,
                                a = "[object Symbol]",
                                s = /^\s+|\s+$/g,
                                u = /^[-+]0x[0-9a-f]+$/i,
                                d = /^0b[01]+$/i,
                                l = /^0o[0-7]+$/i,
                                f = parseInt,
                                m = "object" == (void 0 === t ? "undefined" : i(t)) && t && t.Object === Object && t,
                                p = "object" == ("undefined" == typeof self ? "undefined" : i(self)) && self && self.Object === Object && self,
                                v = m || p || Function("return this")(),
                                y = Object.prototype.toString,
                                b = Math.max,
                                g = Math.min,
                                w = function() {
                                    return v.Date.now()
                                };
                            e.exports = function(e, t, i) {
                                function r(t) {
                                    var o = l,
                                        n = f;
                                    return l = f = void 0, h = t, p = e.apply(n, o)
                                }

                                function a(e) {
                                    return h = e, v = setTimeout(s, t), k ? r(e) : p
                                }

                                function c(e) {
                                    var o = e - y;
                                    return void 0 === y || o >= t || o < 0 || x && e - h >= m
                                }

                                function s() {
                                    var e = w();
                                    return c(e) ? u(e) : void(v = setTimeout(s, function(e) {
                                        var o = t - (e - y);
                                        return x ? g(o, m - (e - h)) : o
                                    }(e)))
                                }

                                function u(e) {
                                    return v = void 0, E && l ? r(e) : (l = f = void 0, p)
                                }

                                function d() {
                                    var e = w(),
                                        o = c(e);
                                    if (l = arguments, f = this, y = e, o) {
                                        if (void 0 === v) return a(y);
                                        if (x) return v = setTimeout(s, t), r(y)
                                    }
                                    return void 0 === v && (v = setTimeout(s, t)), p
                                }
                                var l, f, m, p, v, y, h = 0,
                                    k = !1,
                                    x = !1,
                                    E = !0;
                                if ("function" != typeof e) throw new TypeError("Expected a function");
                                return t = n(t) || 0, o(i) && (k = !!i.leading, m = (x = "maxWait" in i) ? b(n(i.maxWait) || 0, t) : m, E = "trailing" in i ? !!i.trailing : E), d.cancel = function() {
                                    void 0 !== v && clearTimeout(v), h = 0, l = y = f = v = void 0
                                }, d.flush = function() {
                                    return void 0 === v ? p : u(w())
                                }, d
                            }
                        }).call(t, function() {
                            return this
                        }())
                    }, function(e, t) {
                        "use strict";

                        function o(e) {
                            e && e.forEach((function(e) {
                                var t = Array.prototype.slice.call(e.addedNodes),
                                    o = Array.prototype.slice.call(e.removedNodes),
                                    i = t.concat(o).filter((function(e) {
                                        return e.hasAttribute && e.hasAttribute("data-aos")
                                    })).length;
                                i && n()
                            }))
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = function() {};
                        t.default = function(e, t) {
                            var i = window.document,
                                r = new(window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver)(o);
                            n = t, r.observe(i.documentElement, {
                                childList: !0,
                                subtree: !0,
                                removedNodes: !0
                            })
                        }
                    }, function(e, t) {
                        "use strict";

                        function o() {
                            return navigator.userAgent || navigator.vendor || window.opera || ""
                        }
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = function() {
                                function e(e, t) {
                                    for (var o = 0; o < t.length; o++) {
                                        var n = t[o];
                                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                                    }
                                }
                                return function(t, o, n) {
                                    return o && e(t.prototype, o), n && e(t, n), t
                                }
                            }(),
                            i = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                            r = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                            a = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                            c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                            s = function() {
                                function e() {
                                    ! function(e, t) {
                                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                                    }(this, e)
                                }
                                return n(e, [{
                                    key: "phone",
                                    value: function() {
                                        var e = o();
                                        return !(!i.test(e) && !r.test(e.substr(0, 4)))
                                    }
                                }, {
                                    key: "mobile",
                                    value: function() {
                                        var e = o();
                                        return !(!a.test(e) && !c.test(e.substr(0, 4)))
                                    }
                                }, {
                                    key: "tablet",
                                    value: function() {
                                        return this.mobile() && !this.phone()
                                    }
                                }]), e
                            }();
                        t.default = new s
                    }, function(e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.default = function(e, t) {
                            var o = window.pageYOffset,
                                n = window.innerHeight;
                            e.forEach((function(e, i) {
                                ! function(e, t, o) {
                                    var n = e.node.getAttribute("data-aos-once");
                                    t > e.position ? e.node.classList.add("aos-animate") : void 0 !== n && ("false" === n || !o && "true" !== n) && e.node.classList.remove("aos-animate")
                                }(e, n + o, t)
                            }))
                        }
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = function(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }(o(12));
                        t.default = function(e, t) {
                            return e.forEach((function(e, o) {
                                e.node.classList.add("aos-init"), e.position = (0, n.default)(e.node, t.offset)
                            })), e
                        }
                    }, function(e, t, o) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        });
                        var n = function(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }(o(13));
                        t.default = function(e, t) {
                            var o = 0,
                                i = 0,
                                r = window.innerHeight,
                                a = {
                                    offset: e.getAttribute("data-aos-offset"),
                                    anchor: e.getAttribute("data-aos-anchor"),
                                    anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                                };
                            switch (a.offset && !isNaN(a.offset) && (i = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), o = (0, n.default)(e).top, a.anchorPlacement) {
                                case "top-bottom":
                                    break;
                                case "center-bottom":
                                    o += e.offsetHeight / 2;
                                    break;
                                case "bottom-bottom":
                                    o += e.offsetHeight;
                                    break;
                                case "top-center":
                                    o += r / 2;
                                    break;
                                case "bottom-center":
                                    o += r / 2 + e.offsetHeight;
                                    break;
                                case "center-center":
                                    o += r / 2 + e.offsetHeight / 2;
                                    break;
                                case "top-top":
                                    o += r;
                                    break;
                                case "bottom-top":
                                    o += e.offsetHeight + r;
                                    break;
                                case "center-top":
                                    o += e.offsetHeight / 2 + r
                            }
                            return a.anchorPlacement || a.offset || isNaN(t) || (i = t), o + i
                        }
                    }, function(e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.default = function(e) {
                            for (var t = 0, o = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), o += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                            return {
                                top: o,
                                left: t
                            }
                        }
                    }, function(e, t) {
                        "use strict";
                        Object.defineProperty(t, "__esModule", {
                            value: !0
                        }), t.default = function(e) {
                            return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, (function(e) {
                                return {
                                    node: e
                                }
                            }))
                        }
                    }])
                }, "object" == c(t) && "object" == c(e) ? e.exports = a() : (i = [], void 0 === (r = "function" == typeof(n = a) ? n.apply(t, i) : n) || (e.exports = r))
            }
        },
        t = {};

    function o(n) {
        var i = t[n];
        if (void 0 !== i) return i.exports;
        var r = t[n] = {
            id: n,
            loaded: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, o), r.loaded = !0, r.exports
    }
    o.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return o.d(t, {
            a: t
        }), t
    }, o.d = (e, t) => {
        for (var n in t) o.o(t, n) && !o.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        "use strict";
        for (var e = o(978), t = o.n(e), n = document.images, i = n.length, r = 0, a = document.getElementById("page-preloader"), c = document.getElementById("load_perc"), s = null, u = 0; u < i; u++)(s = new Image).onload = d, s.onerror = d, s.src = n[u].src;

        function d() {
            r++, c.innerHTML = (100 / i * r << 0) + "%", r >= i && setTimeout((function() {
                a.classList.contains("done") || a.classList.add("done")
            }), 1e3)
        }
        TweenMax.to("#t", .3, {
            "stroke-dashoffset": -16,
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: !1,
            repeatDelay: 0
        }), TweenMax.to("#g", .2, {
            "stroke-dashoffset": -16,
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: !1,
            repeatDelay: 0
        }), TweenMax.to("#r", .4, {
            "stroke-dashoffset": -21,
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: !1,
            repeatDelay: 0
        }), TweenMax.to("#l", .5, {
            "stroke-dashoffset": -18,
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: !1,
            repeatDelay: 0
        }), TweenMax.to("#p", .2, {
            "stroke-dashoffset": -17,
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: !1,
            repeatDelay: 0
        }), TweenMax.to("#x", .1, {
            "stroke-dashoffset": -18,
            ease: Linear.easeNone,
            repeat: -1,
            yoyo: !1,
            repeatDelay: 0
        }), VanillaTilt.init(document.querySelectorAll(".first-layer"), {
            max: 10,
            speed: 200,
            reverse: !0
        }), VanillaTilt.init(document.querySelectorAll(".brands .card__image"), {
            max: 15,
            speed: 200,
            reverse: !0
        });
        var l = document.querySelector(".menu__icon");
        if (l) {
            var f = document.querySelector(".nav");
            l.addEventListener("click", (function(e) {
                document.body.classList.toggle("_lock"), l.classList.toggle("_active"), f.classList.toggle("_active")
            }))
        }
        var m = new Swiper(".swiper-container-1", {
            loop: !0,
            direction: "vertical",
            autoHeight: !0,
            spaceBetween: 0,
            centeredSlides: !0,
            speed: 500,
            mousewheel: {
                invert: !0
            },
            pagination: {
                el: ".swiper-pagination-1",
                type: "progressbar"
            }
        });
        t().init(),
            function() {
                window.onbeforeunload = function() {
                    document.body.scrollTop = document.documentElement.scrollTop = 0
                };
                var e, t, o, n, i, r = document.getElementById("intro"),
                    a = document.getElementById("galaxy"),
                    c = document.getElementById("man"),
                    s = document.getElementById("explode"),
                    u = document.getElementById("explode-reverse"),
                    d = r.querySelector("[data-scroll-item='1']"),
                    l = r.querySelector("[data-scroll-item='2']"),
                    f = !1,
                    p = 1;
                e = window.innerWidth < 769, t = document.createElement("source"), o = document.createElement("source"), n = document.createElement("source"), i = document.createElement("source"), t.type = o.type = n.type = i.type = "video/mp4", t.src = e ? "img/galaxy-mobile.mp4" : "img/galaxy.mp4", o.src = e ? "img/man-mobile.mp4" : "img/man.mp4", n.src = e ? "img/explode-mobile.mp4" : "img/explode.mp4", i.src = e ? "img/explode-reverse-mobile.mp4" : "img/explode-reverse.mp4", a.innerHTML = c.innerHTML = s.innerHTML = u.innerHTML = "", a.append(t), c.append(o), s.append(n), u.append(i), s.style.opacity = u.style.opacity = 0, s.style.display = u.style.display = "none";
                var v = function() {
                        f = !0, s.style.display = "", u.style.display = "", l.classList.remove("show-content"), s.style.transitionDuration = "", u.style.opacity = 1, u.play(), window.scrollTo({
                            top: d.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.offsetTop),
                            behavior: "smooth"
                        }), u.addEventListener("ended", (function() {
                            u.style.opacity = 0, f = !1
                        }))
                    },
                    y = function() {
                        f = !0, s.style.display = "", u.style.display = "", s.style.opacity = 1, s.play(), l.classList.add("show-content"), window.scrollTo({
                            top: l.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.offsetTop),
                            behavior: "smooth"
                        }), s.addEventListener("ended", (function() {
                            c.play(), s.style.transitionDuration = 0, s.style.opacity = 0, setTimeout((function() {
                                m.slideNext(), f = !1
                            }), 2300)
                        }))
                    },
                    b = function(e) {
                        var t = e.direction;
                        if (!(t < 0 && 1 === p || t > 0 && 3 === p)) switch (p = t > 0 ? p + 1 : p - 1) {
                            case 1:
                                v();
                                break;
                            case 2:
                                y();
                                break;
                            case 3:
                                s.style.display = "none", u.style.display = "none", window.scrollTo({
                                    top: l.getBoundingClientRect().top + (window.pageYOffset || document.documentElement.offsetTop) + window.innerHeight,
                                    behavior: "smooth"
                                });
                                break;
                            default:
                                return
                        }
                    },
                    g = null;
                document.getElementById("to-hero-btn").addEventListener("click", (function() {
                    p = 1, v()
                })), document.getElementById("to-about-btn").addEventListener("click", (function() {
                    p = 2, y()
                })), "ontouchstart" in window ? (r.addEventListener("touchstart", (function(e) {
                    g = e.touches[0].clientY
                })), r.addEventListener("touchmove", (function(e) {
                    e.preventDefault(), f || b({
                        direction: g - e.touches[0].clientY
                    })
                }), {
                    passive: !1
                })) : r.addEventListener("wheel", (function(e) {
                    e.preventDefault(), f || b({
                        direction: e.deltaY
                    })
                }), {
                    passive: !1
                })
            }();
        var p = function() {
            var e = document.getElementById("header");
            (document.documentElement.offsetTop || window.pageYOffset) > 0 ? e.classList.add("fixed") : e.classList.remove("fixed")
        };
        p(), window.addEventListener("scroll", p)
    })()
})();