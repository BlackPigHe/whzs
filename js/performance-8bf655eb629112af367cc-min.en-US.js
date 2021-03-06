(function (n) {
    var r = {};

    function o(e) {
        if (r[e]) return r[e].exports;
        var t = r[e] = {i: e, l: false, exports: {}};
        n[e].call(t.exports, t, t.exports, o);
        t.l = true;
        return t.exports
    }

    o.m = n;
    o.c = r;
    o.d = function (e, t, n) {
        o.o(e, t) || Object.defineProperty(e, t, {enumerable: true, get: n})
    };
    o.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"});
        Object.defineProperty(e, "__esModule", {value: true})
    };
    o.t = function (t, e) {
        1 & e && (t = o(t));
        if (8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        o.r(n);
        Object.defineProperty(n, "default", {enumerable: true, value: t});
        if (2 & e && "string" != typeof t) for (var r in t) o.d(n, r, function (e) {
            return t[e]
        }.bind(null, r));
        return n
    };
    o.n = function (t) {
        var e = t && t.__esModule ? function e() {
            return t["default"]
        } : function e() {
            return t
        };
        o.d(e, "a", e);
        return e
    };
    o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    o.p = "https://assets.squarespace.com/universal/scripts-compressed/";
    return o(o.s = "./src/main/webapp/universal/src/apps/Performance/bootstrap.js")
})({
    "./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js": function (e, t) {
        function n(e, t, n) {
            t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
            }) : e[t] = n;
            return e
        }

        e.exports = n
    }, "./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js": function (e, t) {
        function n(e) {
            return e && e.__esModule ? e : {default: e}
        }

        e.exports = n
    }, "./common/temp/node_modules/@sqs/praetor/build/module/index.js": function (e, t, n) {
        "use strict";
        n.r(t);
        n.d(t, "StaticPraetorClient", function () {
            return c
        });
        n.d(t, "Configuration", function () {
            return o
        });
        n.d(t, "ExperimentType", function () {
            return a
        });
        var r = "true";
        var i = "default";
        var a;
        (function (e) {
            e["FEATURE_TOGGLE"] = "FEATURE_TOGGLE";
            e["AB_TEST"] = "AB_TEST"
        })(a = a || {});
        var o = function () {
            function e(e) {
                var t = this;
                this.experiments = {};
                this.isConfigurationLoaded = Boolean(e.isConfigurationLoaded);
                Array.isArray(e.experimentContextList) && e.experimentContextList.forEach(function (e) {
                    null !== e && "object" === typeof e && e.hasOwnProperty("name") && (t.experiments[e.name] = e)
                })
            }

            e.prototype.isValid = function () {
                return this.isConfigurationLoaded
            };
            e.prototype.getContext = function (e) {
                return this.experiments[e]
            };
            return e
        }();
        var u = function () {
            function e(e) {
                this.configuration = new o(e)
            }

            e.prototype.getFeatureToggle = function (e, t) {
                var n = this.getContextValidity(e, a.FEATURE_TOGGLE), r = n.context, o = n.error;
                if (o || null === r) return {enabled: t, error: o};
                if (r.containsError) return {
                    enabled: this.isFeatureToggleEnabled(r),
                    error: "The specified feature has an invalid server-side definition"
                };
                return {enabled: this.isFeatureToggleEnabled(r)}
            };
            e.prototype.getABTestVariant = function (e, t) {
                var n = this.getContextValidity(e, a.AB_TEST), r = n.context, o = n.error;
                if (o || null === r) return {error: o, segment: i, variant: t};
                if (r.containsError) return {
                    error: "The specified feature has an invalid server-side definition",
                    segment: r.segmentName,
                    variant: r.variant
                };
                return {segment: r.segmentName, variant: r.variant}
            };
            e.prototype.getAllExperiments = function () {
                return this.configuration
            };
            e.prototype.getContextValidity = function (e, t) {
                if (!this.configuration.isValid()) return {
                    context: null,
                    error: "The underlying Praetor configuration is not loaded"
                };
                var n = this.configuration.getContext(e);
                if (void 0 === n) return {context: null, error: "The specified feature does not exist"};
                if (n.experimentType !== t) return {context: null, error: "The specified feature is not a " + t};
                return {context: n}
            };
            e.prototype.isFeatureToggleEnabled = function (e) {
                return e.variant === r
            };
            return e
        }();
        var c = u
    }, "./common/temp/node_modules/@sqs/rum-collector/lib/index.js": function (e, t, n) {
        "use strict";
        n.r(t);
        n.d(t, "default", function () {
            return Gt
        });
        n.d(t, "getPerformanceData", function () {
            return Te
        });
        n.d(t, "getPerformanceMetrics", function () {
            return jt
        });
        n.d(t, "mark", function () {
            return Wt
        });
        n.d(t, "measure", function () {
            return Qt
        });
        n.d(t, "getDomainLookup", function () {
            return qe
        });
        n.d(t, "getTCPConnection", function () {
            return Ue
        });
        n.d(t, "getCumulativeLayoutShift", function () {
            return yt
        });
        n.d(t, "getDecodedBodySize", function () {
            return gt
        });
        n.d(t, "getDomContentLoadedEventEnd", function () {
            return bt
        });
        n.d(t, "getDomContentLoadedEventStart", function () {
            return Et
        });
        n.d(t, "getEncodedBodySize", function () {
            return _t
        });
        n.d(t, "getFirstContentfulPaint", function () {
            return St
        });
        n.d(t, "getFirstInputDelay", function () {
            return Tt
        });
        n.d(t, "getLargestContentfulPaint", function () {
            return Pt
        });
        n.d(t, "getLoadEventEnd", function () {
            return Ot
        });
        n.d(t, "getLoadEventStart", function () {
            return Ct
        });
        n.d(t, "getResponseStart", function () {
            return Lt
        });
        n.d(t, "getTLSNegotiation", function () {
            return xt
        });
        n.d(t, "getTimeToInteractive", function () {
            return It
        });
        n.d(t, "trackLoadPerformance", function () {
            return nn
        });
        n.d(t, "trackEventsV2Factory", function () {
            return tn
        });
        var o = {};
        n.r(o);
        n.d(o, "getDomainLookup", function () {
            return qe
        });
        n.d(o, "getTCPConnection", function () {
            return Ue
        });
        n.d(o, "getCumulativeLayoutShift", function () {
            return yt
        });
        n.d(o, "getDecodedBodySize", function () {
            return gt
        });
        n.d(o, "getDomContentLoadedEventEnd", function () {
            return bt
        });
        n.d(o, "getDomContentLoadedEventStart", function () {
            return Et
        });
        n.d(o, "getEncodedBodySize", function () {
            return _t
        });
        n.d(o, "getFirstContentfulPaint", function () {
            return St
        });
        n.d(o, "getFirstInputDelay", function () {
            return Tt
        });
        n.d(o, "getLargestContentfulPaint", function () {
            return Pt
        });
        n.d(o, "getLoadEventEnd", function () {
            return Ot
        });
        n.d(o, "getLoadEventStart", function () {
            return Ct
        });
        n.d(o, "getResponseStart", function () {
            return Lt
        });
        n.d(o, "getTLSNegotiation", function () {
            return xt
        });
        n.d(o, "getTimeToInteractive", function () {
            return It
        });
        var r = function (e, t) {
            r = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (e, t) {
                e.__proto__ = t
            } || function (e, t) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            };
            return r(e, t)
        };

        function i(e, t) {
            if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            r(e, t);

            function n() {
                this.constructor = e
            }

            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
        }

        var a = function () {
            a = Object.assign || function e(t) {
                for (var n, r = 1, o = arguments.length; r < o; r++) {
                    n = arguments[r];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
                }
                return t
            };
            return a.apply(this, arguments)
        };

        function u(e, t) {
            var n = {};
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
            return n
        }

        function c(e, t, n, r) {
            var o = arguments.length, i = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r, a;
            if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r); else for (var u = e.length - 1; u >= 0; u--) (a = e[u]) && (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
            return o > 3 && i && Object.defineProperty(t, n, i), i
        }

        function s(n, r) {
            return function (e, t) {
                r(e, t, n)
            }
        }

        function f(e, t) {
            if ("object" === typeof Reflect && "function" === typeof Reflect.metadata) return Reflect.metadata(e, t)
        }

        function d(e, a, n, u) {
            function c(t) {
                return t instanceof n ? t : new n(function (e) {
                    e(t)
                })
            }

            return new (n = n || Promise)(function (t, n) {
                function r(e) {
                    try {
                        i(u.next(e))
                    } catch (e) {
                        n(e)
                    }
                }

                function o(e) {
                    try {
                        i(u["throw"](e))
                    } catch (e) {
                        n(e)
                    }
                }

                function i(e) {
                    e.done ? t(e.value) : c(e.value).then(r, o)
                }

                i((u = u.apply(e, a || [])).next())
            })
        }

        function l(e, n) {
            var r = {
                label: 0, sent: function () {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                }, trys: [], ops: []
            }, o, i, a, t;
            return t = {
                next: u(0),
                throw: u(1),
                return: u(2)
            }, "function" === typeof Symbol && (t[Symbol.iterator] = function () {
                return this
            }), t;

            function u(t) {
                return function (e) {
                    return c([t, e])
                }
            }

            function c(t) {
                if (o) throw new TypeError("Generator is already executing.");
                while (r) try {
                    if (o = 1, i && (a = 2 & t[0] ? i["return"] : t[0] ? i["throw"] || ((a = i["return"]) && a.call(i), 0) : i.next) && !(a = a.call(i, t[1])).done) return a;
                    (i = 0, a) && (t = [2 & t[0], a.value]);
                    switch (t[0]) {
                        case 0:
                        case 1:
                            a = t;
                            break;
                        case 4:
                            r.label++;
                            return {value: t[1], done: false};
                        case 5:
                            r.label++;
                            i = t[1];
                            t = [0];
                            continue;
                        case 7:
                            t = r.ops.pop();
                            r.trys.pop();
                            continue;
                        default:
                            if (!(a = r.trys, a = a.length > 0 && a[a.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                r = 0;
                                continue
                            }
                            if (3 === t[0] && (!a || t[1] > a[0] && t[1] < a[3])) {
                                r.label = t[1];
                                break
                            }
                            if (6 === t[0] && r.label < a[1]) {
                                r.label = a[1];
                                a = t;
                                break
                            }
                            if (a && r.label < a[2]) {
                                r.label = a[2];
                                r.ops.push(t);
                                break
                            }
                            a[2] && r.ops.pop();
                            r.trys.pop();
                            continue
                    }
                    t = n.call(e, r)
                } catch (e) {
                    t = [6, e];
                    i = 0
                } finally {
                    o = a = 0
                }
                if (5 & t[0]) throw t[1];
                return {value: t[0] ? t[1] : void 0, done: true}
            }
        }

        var p = Object.create ? function (e, t, n, r) {
            void 0 === r && (r = n);
            Object.defineProperty(e, r, {
                enumerable: true, get: function () {
                    return t[n]
                }
            })
        } : function (e, t, n, r) {
            void 0 === r && (r = n);
            e[r] = t[n]
        };

        function v(e, t) {
            for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || p(t, e, n)
        }

        function m(e) {
            var t = "function" === typeof Symbol && Symbol.iterator, n = t && e[t], r = 0;
            if (n) return n.call(e);
            if (e && "number" === typeof e.length) return {
                next: function () {
                    e && r >= e.length && (e = void 0);
                    return {value: e && e[r++], done: !e}
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        }

        function w(e, t) {
            var n = "function" === typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r = n.call(e), o, i = [], a;
            try {
                while ((void 0 === t || t-- > 0) && !(o = r.next()).done) i.push(o.value)
            } catch (e) {
                a = {error: e}
            } finally {
                try {
                    o && !o.done && (n = r["return"]) && n.call(r)
                } finally {
                    if (a) throw a.error
                }
            }
            return i
        }

        function h() {
            for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
            return e
        }

        function y() {
            for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
            for (var r = Array(e), o = 0, t = 0; t < n; t++) for (var i = arguments[t], a = 0, u = i.length; a < u; a++, o++) r[o] = i[a];
            return r
        }

        function g(e, t) {
            for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
            return e
        }

        function b(e) {
            return this instanceof b ? (this.v = e, this) : new b(e)
        }

        function E(e, t, n) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var o = n.apply(e, t || []), i, a = [];
            return i = {}, r("next"), r("throw"), r("return"), i[Symbol.asyncIterator] = function () {
                return this
            }, i;

            function r(r) {
                o[r] && (i[r] = function (n) {
                    return new Promise(function (e, t) {
                        a.push([r, n, e, t]) > 1 || u(r, n)
                    })
                })
            }

            function u(e, t) {
                try {
                    c(o[e](t))
                } catch (e) {
                    d(a[0][3], e)
                }
            }

            function c(e) {
                e.value instanceof b ? Promise.resolve(e.value.v).then(s, f) : d(a[0][2], e)
            }

            function s(e) {
                u("next", e)
            }

            function f(e) {
                u("throw", e)
            }

            function d(e, t) {
                (e(t), a.shift(), a.length) && u(a[0][0], a[0][1])
            }
        }

        function _(r) {
            var e, o;
            return e = {}, t("next"), t("throw", function (e) {
                throw e
            }), t("return"), e[Symbol.iterator] = function () {
                return this
            }, e;

            function t(t, n) {
                e[t] = r[t] ? function (e) {
                    return (o = !o) ? {value: b(r[t](e)), done: "return" === t} : n ? n(e) : e
                } : n
            }
        }

        function S(o) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var e = o[Symbol.asyncIterator], t;
            return e ? e.call(o) : (o = "function" === typeof m ? m(o) : o[Symbol.iterator](), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function () {
                return this
            }, t);

            function n(r) {
                t[r] = o[r] && function (n) {
                    return new Promise(function (e, t) {
                        n = o[r](n), i(e, t, n.done, n.value)
                    })
                }
            }

            function i(t, e, n, r) {
                Promise.resolve(r).then(function (e) {
                    t({value: e, done: n})
                }, e)
            }
        }

        function T(e, t) {
            Object.defineProperty ? Object.defineProperty(e, "raw", {value: t}) : e.raw = t;
            return e
        }

        var P = Object.create ? function (e, t) {
            Object.defineProperty(e, "default", {enumerable: true, value: t})
        } : function (e, t) {
            e["default"] = t
        };

        function O(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && p(t, e, n);
            P(t, e);
            return t
        }

        function C(e) {
            return e && e.__esModule ? e : {default: e}
        }

        function L(e, t, n, r) {
            if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
            if ("function" === typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
            return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
        }

        function x(e, t, n, r, o) {
            if ("m" === r) throw new TypeError("Private method is not writable");
            if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
            if ("function" === typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
        }

        var R = n("./common/temp/node_modules/@sqs/praetor/build/module/index.js");
        var I = "/api/1/performance";
        var j = "/records";
        var A = "/settings";
        var M = "4.0.7";
        var N = function (e) {
            return {
                app: "a",
                data: {__encoding_config__: e, __encoding_key__: "d"},
                event: "e",
                pageLoadId: "pl",
                ts: "t"
            }
        };
        var D = {downlink: "do", effectiveType: "ef", rtt: "rtt", saveData: "sd"};
        var k = {
            devicePixelRatio: "dpr",
            screenHeight: "sh",
            screenWidth: "sw",
            viewportHeight: "vh",
            viewportWidth: "vw"
        };
        var F = {deviceMemory: "dm", hardwareConcurrency: "hc"};
        var B = {
            cumulativeLayoutShift: "cl",
            decodedBodySize: "db",
            domainLookup: "dml",
            domContentLoadedEventEnd: "de",
            domContentLoadedEventStart: "ds",
            encodedBodySize: "eb",
            firstContentfulPaint: "fcp",
            firstInputDelay: "fid",
            largestContentfulPaint: "lcp",
            loadEventEnd: "le",
            loadEventStart: "l",
            tcpConnection: "tcp",
            tlsConnection: "tls",
            timeToInteractive: "tti"
        };
        var q = {
            analyticsId: "aid",
            connection: {__encoding_config__: D, __encoding_key__: "con"},
            deliveryType: "dt",
            display: {__encoding_config__: k, __encoding_key__: "disp"},
            hardware: {__encoding_config__: F, __encoding_key__: "hdw"},
            hash: "h",
            hostname: "hn",
            marketingId: "mid",
            memberId: "mem",
            pathname: "p",
            version: "v"
        };
        var U = {
            accountId: "accountId",
            ampEnabled: "ampEnabled",
            authenticUrl: "authenticUrl",
            cloneable: "cloneable",
            collectionType: "collectionType",
            createdOn: "createdOn",
            developerMode: "developerMode",
            impersonatedSession: "impersonatedSession",
            inFrame: "inFrame",
            isHstsEnabled: "isHstsEnabled",
            isInternal: "isInternal",
            language: "language",
            memberId: "memberId",
            pageType: "pageType",
            platform: "platform",
            templateId: "templateId",
            timeZone: "timeZone",
            websiteId: "websiteId",
            websiteType: "websiteType"
        };
        var H = a(a({
            context: {__encoding_config__: U, __encoding_key__: "ctx"},
            supportLevel: "sl",
            visibilityStateOnDCL: "vs"
        }, q), B);
        var V = {
            duration: "d",
            endMarkDetail: "e",
            measureDetail: "m",
            name: "n",
            startMarkDetail: "s",
            startTime: "st"
        };
        var z = Object.keys(H);
        var G = Object.keys(V);
        var X = "mark";
        var W = "measure";
        var Q = "DOMContentLoaded";
        var Y = "load";
        var K = "beforeunload";
        var Z = "pagehide";
        var J = "rum-";
        var $ = "SS_MID";
        var ee = "SS_ANALYTICS_ID";
        var te = 3e4;
        var ne = 3e4;
        var re = /(iPhone|iPod|iPad) OS ((1[0-2])|[2-9])_\d+.*AppleWebKit(?!.*Safari)/i;

        function oe(d, l) {
            var p = {};
            Object.keys(l).forEach(function (e) {
                var t = l[e];
                var n;
                var r;
                var o = d[e] || d;
                var i = typeof o;
                var a = "string" === i;
                var u = "object" === i || "undefined" === o;
                if (!a && !u) return;
                if (a) {
                    n = o;
                    r = ie(t)
                } else {
                    var c = o.__encoding_skip__;
                    var s = o.__encoding_config__;
                    var f = o.__encoding_fn__;
                    if (!c && !s && !d) throw new Error("Invalid encoding map");
                    n = c ? e : o.__encoding_key__;
                    r = s ? oe(s, t) : f ? f(t) : t
                }
                n && (p["" + n] = r)
            });
            return p
        }

        function ie(e) {
            if ("boolean" === typeof e) return e ? 1 : 0;
            if (ae(e)) return e.toString(36);
            return e
        }

        function ae(e) {
            return ("number" === typeof e || e instanceof Number) && isFinite(e)
        }

        function ue() {
            return !!(window.performance && window.performance.now && window.addEventListener)
        }

        function ce() {
            return !!(window.PerformanceMeasure && window.PerformanceMark && window.performance && window.performance.mark && window.performance.measure)
        }

        function se() {
            if (!window.hasOwnProperty("PerformanceObserver")) return false;
            try {
                var e = new window.PerformanceObserver(function () {
                    return null
                });
                e.observe({type: "mark"});
                e.disconnect()
            } catch (e) {
                return false
            }
            return true
        }

        function fe() {
            return !!(window.performance && window.performance.getEntriesByType && window.PerformanceNavigationTiming)
        }

        function de() {
            return !!(window.performance && window.performance.timing && window.PerformanceTiming)
        }

        function le() {
            return "function" === typeof window.navigator.sendBeacon && !re.test(window.navigator.userAgent)
        }

        function pe() {
            return !!window.PerformancePaintTiming
        }

        function ve() {
            return !!window.LargestContentfulPaint
        }

        function me() {
            return !!window.PerformanceLongTaskTiming
        }

        var we;
        var he = [];
        var ye = function (e) {
            he.push(e)
        };

        function ge(e, t) {
            if (le() && navigator.sendBeacon(e, t)) return;
            var n = new XMLHttpRequest;
            n.open("POST", e, true);
            n.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
            n.send(t)
        }

        function be() {
            if (he.length) {
                var e = JSON.stringify(he);
                ge(I + j, e);
                he = []
            }
        }

        function Ee() {
            window.addEventListener(Y, function () {
                we = window.setTimeout(be, ne)
            });
            window.addEventListener(Z, be);
            window.addEventListener(K, function () {
                window.clearTimeout(we);
                be()
            })
        }

        function _e(e, t) {
            var n = oe(e, t);
            if (!n) throw new Error("Data is empty");
            ye(n)
        }

        var Se = [];

        function Te() {
            return Se
        }

        function Pe(e) {
            Se.push(e)
        }

        function Oe(e, t, n, r) {
            var o = Object.freeze({app: e, data: r, event: t, pageLoadId: n, ts: Date.now()});
            Pe(o);
            return o
        }

        var Ce = function (o) {
            return function (e, t) {
                void 0 === t && (t = false);
                var n = o.getABTestVariant(e + "-rollout", t.toString()).variant;
                var r = "true" === n;
                return r
            }
        };
        var Le = function (o, i) {
            return function (e, t, n) {
                var r = Oe(o, t, i, e);
                _e(n, r)
            }
        };
        var xe = function () {
            return new Promise(function (e, t) {
                var n = new XMLHttpRequest;
                n.onreadystatechange = function () {
                    if (n.readyState === XMLHttpRequest.DONE) if (200 === n.status) try {
                        e(JSON.parse(n.response))
                    } catch (e) {
                        t(e)
                    } else 0 !== n.status && t(new Error("XHR request DONE with unexpected status: " + n.status))
                };
                n.ontimeout = function () {
                    t(new Error("Metric settings request timeout"))
                };
                n.open("GET", I + A, true);
                n.timeout = te;
                n.send()
            })
        };
        var Re = function (n) {
            return function (e, t) {
                n && n(e, t)
            }
        };
        var Ie = function (e) {
            var t = {
                appName: e.appName || "",
                context: e.context || {},
                enabled: "boolean" !== typeof e.enabled || e.enabled
            };
            t.captureException = Re(e.captureException);
            return t
        };

        function je(e) {
            var t = {};
            for (var n in e) "function" !== typeof e[n] && (t[n] = e[n]);
            return t
        }

        var Ae = function (e) {
            var n = e.type, t = e.buffered, r = void 0 === t || t, o = e.isReadyFn, i = void 0 === o ? function () {
                return true
            } : o;
            return new Promise(function (t) {
                var e = new PerformanceObserver(function (e) {
                    i(e) && t(e)
                });
                e.observe({type: n, buffered: r})
            })
        };

        function Me() {
            var e = {};
            if (window.performance) {
                if (fe()) {
                    e = je(window.performance.getEntriesByType("navigation")[0]);
                    e.supportLevel = 2
                } else if (de()) {
                    e = je(window.performance.timing);
                    e.supportLevel = 1
                }
                if (performance.navigation) {
                    e.navigationType = window.performance.navigation.type;
                    e.redirectCount = window.performance.navigation.redirectCount
                }
            }
            return e
        }

        var Ne = null;
        var De = function () {
            return d(void 0, void 0, void 0, function () {
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            if (!!Ne) return [3, 4];
                            if (!(fe() && se())) return [3, 2];
                            return [4, Fe()];
                        case 1:
                            Ne = e.sent();
                            return [3, 4];
                        case 2:
                            if (!de()) return [3, 4];
                            return [4, Be()];
                        case 3:
                            Ne = e.sent();
                            e.label = 4;
                        case 4:
                            return [2, Ne]
                    }
                })
            })
        };
        var ke = function (n) {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, De()];
                        case 1:
                            t = e.sent();
                            if (!t || "number" !== typeof t[n]) return [2, null];
                            return [2, Math.round(t[n])]
                    }
                })
            })
        };

        function Fe() {
            return d(this, void 0, void 0, function () {
                var t, n, r;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            e.trys.push([0, 2, , 3]);
                            return [4, Ae({
                                type: "navigation", isReadyFn: function (e) {
                                    var t = e.getEntries()[0];
                                    return !!(t.duration && t.duration > 0)
                                }
                            })];
                        case 1:
                            t = e.sent();
                            n = t.getEntries()[0];
                            return [2, je(n)];
                        case 2:
                            r = e.sent();
                            return [2, null];
                        case 3:
                            return [2]
                    }
                })
            })
        }

        function Be() {
            var t = function () {
                var e = je(window.performance.timing);
                var t = e.navigationStart;
                delete e.navigationStart;
                for (var n in e) e[n] > 0 && (e[n] = e[n] - t);
                return e
            };
            return new Promise(function (e) {
                "complete" !== document.readyState ? window.addEventListener("load", function () {
                    setTimeout(function () {
                        e(t())
                    })
                }) : e(t())
            })
        }

        var qe = function () {
            return d(void 0, void 0, void 0, function () {
                var t, n, r, o;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Promise.all([ke("domainLookupEnd"), ke("domainLookupStart")])];
                        case 1:
                            t = e.sent(), n = t[0], r = t[1];
                            if (!(n && r)) return [2, null];
                            o = n - r;
                            return [2, {domainLookup: o}]
                    }
                })
            })
        };
        var Ue = function () {
            return d(void 0, void 0, void 0, function () {
                var t, n, r, o;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Promise.all([ke("connectEnd"), ke("connectStart")])];
                        case 1:
                            t = e.sent(), n = t[0], r = t[1];
                            if (!(n && r)) return [2, null];
                            o = n - r;
                            return [2, {tcpConnection: o}]
                    }
                })
            })
        };
        var He, Ve, ze, Ge, Xe = function (e, t) {
            return {
                name: e,
                value: void 0 === t ? -1 : t,
                delta: 0,
                entries: [],
                id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
            }
        }, We = function (e, t) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var n = new PerformanceObserver(function (e) {
                        return e.getEntries().map(t)
                    });
                    return n.observe({type: e, buffered: !0}), n
                }
            } catch (e) {
            }
        }, Qe = function (n, r) {
            var e = function e(t) {
                "pagehide" !== t.type && "hidden" !== document.visibilityState || (n(t), r && (removeEventListener("visibilitychange", e, !0), removeEventListener("pagehide", e, !0)))
            };
            addEventListener("visibilitychange", e, !0), addEventListener("pagehide", e, !0)
        }, Ye = function (t) {
            addEventListener("pageshow", function (e) {
                e.persisted && t(e)
            }, !0)
        }, Ke = "function" == typeof WeakSet ? new WeakSet : new Set, Ze = function (e, t, n) {
            var r;
            return function () {
                t.value >= 0 && (n || Ke.has(t) || "hidden" === document.visibilityState) && (t.delta = t.value - (r || 0), (t.delta || void 0 === r) && (r = t.value, e(t)))
            }
        }, Je = function (e, t) {
            var n, r = Xe("CLS", 0), o = function (e) {
                e.hadRecentInput || (r.value += e.value, r.entries.push(e), n())
            }, i = We("layout-shift", o);
            i && (n = Ze(e, r, t), Qe(function () {
                i.takeRecords().map(o), n()
            }), Ye(function () {
                r = Xe("CLS", 0), n = Ze(e, r, t)
            }))
        }, $e = -1, et = function () {
            return "hidden" === document.visibilityState ? 0 : 1 / 0
        }, tt = function () {
            Qe(function (e) {
                var t = e.timeStamp;
                $e = t
            }, !0)
        }, nt = function () {
            return $e < 0 && ($e = et(), tt(), Ye(function () {
                setTimeout(function () {
                    $e = et(), tt()
                }, 0)
            })), {
                get timeStamp() {
                    return $e
                }
            }
        }, rt = function (t, n) {
            var r, o = nt(), i = Xe("FCP"), a = We("paint", function (e) {
                "first-contentful-paint" === e.name && (a && a.disconnect(), e.startTime < o.timeStamp && (i.value = e.startTime, i.entries.push(e), Ke.add(i), r()))
            });
            a && (r = Ze(t, i, n), Ye(function (e) {
                i = Xe("FCP"), r = Ze(t, i, n), requestAnimationFrame(function () {
                    requestAnimationFrame(function () {
                        i.value = performance.now() - e.timeStamp, Ke.add(i), r()
                    })
                })
            }))
        }, ot = {passive: !0, capture: !0}, it = new Date, at = function (e, t) {
            He || (He = t, Ve = e, ze = new Date, st(removeEventListener), ut())
        }, ut = function () {
            if (Ve >= 0 && Ve < ze - it) {
                var t = {
                    entryType: "first-input",
                    name: He.type,
                    target: He.target,
                    cancelable: He.cancelable,
                    startTime: He.timeStamp,
                    processingStart: He.timeStamp + Ve
                };
                Ge.forEach(function (e) {
                    e(t)
                }), Ge = []
            }
        }, ct = function (e) {
            if (e.cancelable) {
                var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                "pointerdown" == e.type ? function (e, t) {
                    var n = function () {
                        at(e, t), o()
                    }, r = function () {
                        o()
                    }, o = function () {
                        removeEventListener("pointerup", n, ot), removeEventListener("pointercancel", r, ot)
                    };
                    addEventListener("pointerup", n, ot), addEventListener("pointercancel", r, ot)
                }(t, e) : at(t, e)
            }
        }, st = function (t) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function (e) {
                return t(e, ct, ot)
            })
        }, ft = function (t, n) {
            var r, o = nt(), i = Xe("FID"), a = function (e) {
                e.startTime < o.timeStamp && (i.value = e.processingStart - e.startTime, i.entries.push(e), Ke.add(i), r())
            }, e = We("first-input", a);
            r = Ze(t, i, n), e && Qe(function () {
                e.takeRecords().map(a), e.disconnect()
            }, !0), e && Ye(function () {
                var e;
                i = Xe("FID"), r = Ze(t, i, n), Ge = [], Ve = -1, He = null, st(addEventListener), e = a, Ge.push(e), ut()
            })
        }, dt = function (t, n) {
            var r, o = nt(), i = Xe("LCP"), e = function (e) {
                var t = e.startTime;
                t < o.timeStamp && (i.value = t, i.entries.push(e)), r()
            }, a = We("largest-contentful-paint", e);
            if (a) {
                r = Ze(t, i, n);
                var u = function () {
                    Ke.has(i) || (a.takeRecords().map(e), a.disconnect(), Ke.add(i), r())
                };
                ["keydown", "click"].forEach(function (e) {
                    addEventListener(e, u, {once: !0, capture: !0})
                }), Qe(u, !0), Ye(function (e) {
                    i = Xe("LCP"), r = Ze(t, i, n), requestAnimationFrame(function () {
                        requestAnimationFrame(function () {
                            i.value = performance.now() - e.timeStamp, Ke.add(i), r()
                        })
                    })
                })
            }
        }, lt = function (t) {
            var e, n = Xe("TTFB");
            e = function () {
                try {
                    var e = performance.getEntriesByType("navigation")[0] || function () {
                        var e = performance.timing, t = {entryType: "navigation", startTime: 0};
                        for (var n in e) "navigationStart" !== n && "toJSON" !== n && (t[n] = Math.max(e[n] - e.navigationStart, 0));
                        return t
                    }();
                    n.value = n.delta = e.responseStart, n.entries = [e], t(n)
                } catch (e) {
                }
            }, "complete" === document.readyState ? setTimeout(e, 0) : addEventListener("pageshow", e)
        };
        var pt = function (e) {
            return new Promise(function (t, n) {
                try {
                    e(function (e) {
                        t(e)
                    })
                } catch (e) {
                    n(e)
                }
            })
        };
        var vt = function (t, n) {
            void 0 === n && (n = null);
            return new Promise(function (e) {
                setTimeout(function () {
                    return e(n)
                }, t)
            })
        };
        var mt = 6e4;
        var wt = function (t) {
            return function () {
                return d(void 0, void 0, void 0, function () {
                    return l(this, function (e) {
                        return [2, Promise.race([pt(t), vt(mt)])]
                    })
                })
            }
        };
        var ht = {getCLS: wt(Je), getFCP: wt(rt), getLCP: wt(dt), getTTFB: wt(lt), getFID: wt(ft)};
        var yt = function () {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, ht.getCLS()];
                        case 1:
                            t = e.sent();
                            return [2, t ? {cumulativeLayoutShift: t.value} : null]
                    }
                })
            })
        };
        var gt = function () {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, ke("decodedBodySize")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {decodedBodySize: t} : null]
                    }
                })
            })
        };
        var bt = function () {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, ke("domContentLoadedEventEnd")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {domContentLoadedEventEnd: t} : null]
                    }
                })
            })
        };
        var Et = function () {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, ke("domContentLoadedEventStart")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {domContentLoadedEventStart: t} : null]
                    }
                })
            })
        };
        var _t = function () {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, ke("encodedBodySize")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {encodedBodySize: t} : null]
                    }
                })
            })
        };
        var St = function () {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, ht.getFCP()];
                        case 1:
                            t = e.sent();
                            return [2, t ? {firstContentfulPaint: Math.round(t.value)} : null]
                    }
                })
            })
        };
        var Tt = function () {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, ht.getFID()];
                        case 1:
                            t = e.sent();
                            return [2, t ? {firstInputDelay: Math.round(t.value)} : null]
                    }
                })
            })
        };
        var Pt = function () {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, ht.getLCP()];
                        case 1:
                            t = e.sent();
                            return [2, t ? {largestContentfulPaint: Math.round(t.value)} : null]
                    }
                })
            })
        };
        var Ot = function () {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, ke("loadEventEnd")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {loadEventEnd: t} : null]
                    }
                })
            })
        };
        var Ct = function () {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, ke("loadEventStart")];
                        case 1:
                            t = e.sent();
                            return [2, t ? {loadEventStart: t} : null]
                    }
                })
            })
        };
        var Lt = function () {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, ht.getTTFB()];
                        case 1:
                            t = e.sent();
                            return [2, t ? {responseStart: Math.round(t.value)} : null]
                    }
                })
            })
        };
        var xt = function () {
            return d(void 0, void 0, void 0, function () {
                var t, n, r, o;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, Promise.all([ke("connectEnd"), ke("secureConnectionStart")])];
                        case 1:
                            t = e.sent(), n = t[0], r = t[1];
                            if (!(n && r)) return [2, null];
                            o = n - r;
                            return [2, {tlsNegotiation: o}]
                    }
                })
            })
        };
        var Rt = n("./common/temp/node_modules/tti-polyfill/tti-polyfill.js");
        var It = function () {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    if (!(me() && se())) return [2, null];
                    t = false;
                    window.__tti = {e: []};
                    Ae({
                        type: "longtask", buffered: false, isReadyFn: function (e) {
                            window.__tti.e = window.__tti.e.concat(e.getEntries());
                            return t
                        }
                    });
                    return [2, Object(Rt["getFirstConsistentlyInteractive"])().then(function (e) {
                        t = true;
                        return {timeToInteractive: Math.round(e)}
                    })]
                })
            })
        };

        function jt() {
            return d(this, void 0, void 0, function () {
                var t, n, r;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            t = Object.values(o).map(function (e) {
                                return e()
                            });
                            e.label = 1;
                        case 1:
                            e.trys.push([1, 3, , 4]);
                            return [4, Promise.all(t)];
                        case 2:
                            n = e.sent().reduce(function (e, t) {
                                e = a(a({}, e), t);
                                return e
                            }, {});
                            return [2, n];
                        case 3:
                            r = e.sent();
                            return [2, {}];
                        case 4:
                            return [2]
                    }
                })
            })
        }

        function At(e) {
            var t = new RegExp("(^| )" + e + "=([^;]+)");
            var n = document.cookie.match(t);
            if (n) return n[2];
            return ""
        }

        var Mt;
        (function (e) {
            e["Beacon"] = "beacon";
            e["XHR"] = "xhr"
        })(Mt = Mt || {});

        function Nt() {
            var e = Dt();
            var t = kt();
            var n = Bt();
            return {
                analyticsId: At(ee),
                connection: e,
                deliveryType: le() ? Mt.Beacon : Mt.XHR,
                display: t,
                hardware: n,
                hash: window.location.hash || "",
                hostname: window.location.hostname || "",
                marketingId: At($),
                memberId: Ft(),
                pathname: window.location.pathname || "/",
                version: M
            }
        }

        function Dt() {
            var e = {};
            var t = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (t) {
                var n = (1e3 * t.downlink).toString();
                e = {downlink: parseInt(n, 10), effectiveType: t.effectiveType, rtt: t.rtt, saveData: t.saveData}
            }
            return e
        }

        function kt() {
            var e = window.devicePixelRatio;
            var t = window.screen, n = t.width, r = t.height;
            var o = document.documentElement, i = o.clientHeight, a = o.clientWidth;
            var u = {devicePixelRatio: e, screenHeight: r, screenWidth: n, viewportHeight: i, viewportWidth: a};
            return u
        }

        function Ft() {
            try {
                return window.Static.SQUARESPACE_CONTEXT.authenticatedAccount.id
            } catch (e) {
                return ""
            }
        }

        function Bt() {
            return {deviceMemory: navigator.deviceMemory, hardwareConcurrency: navigator.hardwareConcurrency}
        }

        var qt = function (o) {
            return d(void 0, void 0, void 0, function () {
                var n, t, r;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            n = a({context: o}, Nt());
                            window.addEventListener(Q, function () {
                                return n.visibilityStateOnDCL = document.visibilityState || ""
                            });
                            return [4, jt()];
                        case 1:
                            t = e.sent();
                            n = a(a({}, n), t);
                            r = z.reduce(function (e, t) {
                                n.hasOwnProperty(t) && (e[t] = n[t]);
                                return e
                            }, {});
                            return [2, r]
                    }
                })
            })
        };
        var Ut = function (n, r) {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, qt(r)];
                        case 1:
                            t = e.sent();
                            n(t, "page_speed", N(H));
                            return [2]
                    }
                })
            })
        };

        function Ht(e) {
            return "string" === typeof e && e.substring(0, 4) === J
        }

        var Vt = new Set;
        var zt = function (n) {
            if (!ce()) return;
            var t = function (e) {
                var t = e.map(je);
                t.forEach(function (e) {
                    if (!Ht(e.name)) return;
                    var t = e.name + "|" + e.duration;
                    if (!Vt.has(t)) {
                        n(e, "user", N(V));
                        Vt.add(t)
                    }
                })
            };
            t(window.performance.getEntriesByType(W));
            if (se()) {
                var e = new window.PerformanceObserver(function (e) {
                    return t(e.getEntries())
                });
                e.observe({type: W})
            } else window.addEventListener(K, function () {
                t(window.performance.getEntriesByType(W))
            })
        };

        function Gt(c) {
            return d(this, void 0, void 0, function () {
                var t, n, r, o, i, a, u;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            t = Ie(c);
                            if (!t.enabled) return [2];
                            n = "";
                            e.label = 1;
                        case 1:
                            e.trys.push([1, 3, , 4]);
                            return [4, xe()];
                        case 2:
                            r = e.sent();
                            n = r.pageLoadId;
                            if (!n) throw new Error("Unable to resolve pageLoadId");
                            o = new R["StaticPraetorClient"](r);
                            i = Ce(o);
                            if (["rum", t.appName + "-app"].some(function (e) {
                                return !i(e)
                            })) return [2];
                            a = Le(t.appName, n);
                            i("track-page-speed") && Ut(a, t.context);
                            i("track-user-timing") && zt(a);
                            Ee();
                            return [3, 4];
                        case 3:
                            u = e.sent();
                            t.captureException(u, {pageLoadId: n, parsedOptions: t});
                            return [3, 4];
                        case 4:
                            return [2]
                    }
                })
            })
        }

        var Xt = function (e) {
            var t;
            "function" === typeof (null === (t = null === window || void 0 === window ? void 0 : window.SQUARESPACE_SENTRY) || void 0 === t ? void 0 : t.captureException) ? window.SQUARESPACE_SENTRY.captureException(e) : console.warn("RUM timing error: " + e)
        };

        function Wt(e, t) {
            try {
                if (!Kt()) return;
                var n = J + e;
                window.performance.mark(n, t)
            } catch (e) {
                Xt(e)
            }
        }

        function Qt(e, t) {
            void 0 === t && (t = {requireStart: false});
            try {
                if (!(Kt() && Yt())) return;
                var n = J + e;
                var r = {detail: t.detail, duration: t.duration};
                void 0 === t.start ? r.start = n : "string" === typeof t.start ? r.start = J + t.start : r.start = t.start;
                r.end = "string" === typeof t.end ? J + t.end : t.end;
                if (t.requireStart && ("number" === typeof r.start || 0 === window.performance.getEntriesByName(r.start, X).length)) return;
                Jt(n, r);
                var o = Zt(n);
                return o
            } catch (e) {
                Xt(e)
            }
        }

        function Yt() {
            return "performance" in window && "getEntries" in window.performance && "getEntriesByType" in window.performance && "getEntriesByName" in window.performance
        }

        function Kt() {
            return X in window.performance && W in window.performance
        }

        function Zt(e) {
            var t = window.performance.getEntriesByName(e, W);
            return t[t.length - 1]
        }

        function Jt(t, n) {
            try {
                window.performance.measure(t, n)
            } catch (e) {
                var r = "string" === typeof n.start ? n.start : t;
                var o = "string" === typeof n.end ? n.end : void 0;
                try {
                    window.performance.measure(t, r, o)
                } catch (e) {
                    if (!(e instanceof DOMException)) throw e;
                    try {
                        window.performance.measure(t, "navigationStart")
                    } catch (e) {
                        if (!(e instanceof DOMException)) throw e;
                        window.performance.measure(t)
                    }
                }
            }
        }

        var $t = {
            action: "load",
            actor: "user",
            event_owner_team: "web_performance",
            event_source: "web",
            object_type: "website"
        };
        var en = function () {
            var e = /^qa\d+.sqsp.net/g;
            var t = /^stage.sqsp.net/g;
            var n = /(dev.squarespace.net|localhost|127.0.0.1|0.0.0.0)/g;
            var r = window.location.hostname.substr(window.location.hostname.indexOf(".") + 1);
            if (t.test(r) || e.test(r)) return "staging";
            if (n.test(r)) return "dev";
            return "prod"
        };
        var tn = function (e, t) {
            void 0 === t && (t = en());
            return new e({customSchemaName: "Performance", sourceEnvironment: t}, $t)
        };
        var nn = function (n) {
            return d(void 0, void 0, void 0, function () {
                var t;
                return l(this, function (e) {
                    switch (e.label) {
                        case 0:
                            return [4, jt()];
                        case 1:
                            t = e.sent();
                            n({
                                cumulative_layout_shift: t.cumulativeLayoutShift,
                                decoded_body_size_bytes: t.decodedBodySize,
                                dom_content_loaded_event_end_ms: t.domContentLoadedEventEnd,
                                dom_content_loaded_event_start_ms: t.domContentLoadedEventStart,
                                domain_lookup_ms: t.domainLookup,
                                encoded_body_size_bytes: t.encodedBodySize,
                                first_contentful_paint_ms: t.firstContentfulPaint,
                                first_input_delay_ms: t.firstInputDelay,
                                largest_contentful_paint_ms: t.largestContentfulPaint,
                                load_event_end_ms: t.loadEventEnd,
                                load_event_start_ms: t.loadEventStart,
                                response_start_ms: t.responseStart,
                                tcp_connection_ms: t.tcpConnection,
                                time_to_interactive_ms: t.timeToInteractive,
                                tls_negotiation_ms: t.tlsNegotiation
                            });
                            return [2]
                    }
                })
            })
        }
    }, "./common/temp/node_modules/tti-polyfill/tti-polyfill.js": function (P, O, e) {
        (function (_) {
            var S, T;
            (function () {
                var t = "undefined" != typeof window && window === this ? this : "undefined" != typeof _ && null != _ ? _ : this,
                    n = "function" == typeof Object.defineProperties ? Object.defineProperty : function (e, t, n) {
                        e != Array.prototype && e != Object.prototype && (e[t] = n.value)
                    };

                function r() {
                    r = function () {
                    };
                    t.Symbol || (t.Symbol = e)
                }

                var o = 0;

                function e(e) {
                    return "jscomp_symbol_" + (e || "") + o++
                }

                function i() {
                    r();
                    var e = t.Symbol.iterator;
                    e = e || (t.Symbol.iterator = t.Symbol("iterator"));
                    "function" != typeof Array.prototype[e] && n(Array.prototype, e, {
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return a(this)
                        }
                    });
                    i = function () {
                    }
                }

                function a(e) {
                    var t = 0;
                    return u(function () {
                        return t < e.length ? {done: !1, value: e[t++]} : {done: !0}
                    })
                }

                function u(e) {
                    i();
                    e = {next: e};
                    e[t.Symbol.iterator] = function () {
                        return this
                    };
                    return e
                }

                function c(e) {
                    i();
                    var t = e[Symbol.iterator];
                    return t ? t.call(e) : a(e)
                }

                function s(e) {
                    if (!(e instanceof Array)) {
                        e = c(e);
                        for (var t, n = []; !(t = e.next()).done;) n.push(t.value);
                        e = n
                    }
                    return e
                }

                var f = 0;

                function d(o, i) {
                    var a = XMLHttpRequest.prototype.send, u = f++;
                    XMLHttpRequest.prototype.send = function (e) {
                        for (var t = [], n = 0; n < arguments.length; ++n) t[n - 0] = arguments[n];
                        var r = this;
                        o(u);
                        this.addEventListener("readystatechange", function () {
                            4 === r.readyState && i(u)
                        });
                        return a.apply(this, t)
                    }
                }

                function l(i, a) {
                    var u = fetch;
                    fetch = function (e) {
                        for (var o = [], t = 0; t < arguments.length; ++t) o[t - 0] = arguments[t];
                        return new Promise(function (t, n) {
                            var r = f++;
                            i(r);
                            u.apply(null, [].concat(s(o))).then(function (e) {
                                a(r);
                                t(e)
                            }, function (e) {
                                a(e);
                                n(e)
                            })
                        })
                    }
                }

                var p = "img script iframe link audio video source".split(" ");

                function v(e, t) {
                    e = c(e);
                    for (var n = e.next(); !n.done; n = e.next()) if (n = n.value, t.includes(n.nodeName.toLowerCase()) || v(n.children, t)) return !0;
                    return !1
                }

                function m(n) {
                    var e = new MutationObserver(function (e) {
                        e = c(e);
                        for (var t = e.next(); !t.done; t = e.next()) t = t.value, "childList" == t.type && v(t.addedNodes, p) ? n(t) : "attributes" == t.type && p.includes(t.target.tagName.toLowerCase()) && n(t)
                    });
                    e.observe(document, {attributes: !0, childList: !0, subtree: !0, attributeFilter: ["href", "src"]});
                    return e
                }

                function w(e, t) {
                    if (2 < e.length) return performance.now();
                    var n = [];
                    t = c(t);
                    for (var r = t.next(); !r.done; r = t.next()) r = r.value, n.push({
                        timestamp: r.start,
                        type: "requestStart"
                    }), n.push({timestamp: r.end, type: "requestEnd"});
                    t = c(e);
                    for (r = t.next(); !r.done; r = t.next()) n.push({timestamp: r.value, type: "requestStart"});
                    n.sort(function (e, t) {
                        return e.timestamp - t.timestamp
                    });
                    e = e.length;
                    for (t = n.length - 1; 0 <= t; t--) switch (r = n[t], r.type) {
                        case"requestStart":
                            e--;
                            break;
                        case"requestEnd":
                            e++;
                            if (2 < e) return r.timestamp;
                            break;
                        default:
                            throw Error("Internal Error: This should never happen")
                    }
                    return 0
                }

                function h(e) {
                    e = e || {};
                    this.w = !!e.useMutationObserver;
                    this.u = e.minValue || null;
                    e = window.__tti && window.__tti.e;
                    var t = window.__tti && window.__tti.o;
                    this.a = e ? e.map(function (e) {
                        return {start: e.startTime, end: e.startTime + e.duration}
                    }) : [];
                    t && t.disconnect();
                    this.b = [];
                    this.f = new Map;
                    this.j = null;
                    this.v = -1 / 0;
                    this.i = !1;
                    this.h = this.c = this.s = null;
                    d(this.m.bind(this), this.l.bind(this));
                    l(this.m.bind(this), this.l.bind(this));
                    b(this);
                    this.w && (this.h = m(this.B.bind(this)))
                }

                h.prototype.getFirstConsistentlyInteractive = function () {
                    var t = this;
                    return new Promise(function (e) {
                        t.s = e;
                        "complete" == document.readyState ? y(t) : window.addEventListener("load", function () {
                            y(t)
                        })
                    })
                };

                function y(e) {
                    e.i = !0;
                    var t = 0 < e.a.length ? e.a[e.a.length - 1].end : 0, n = w(e.g, e.b);
                    g(e, Math.max(n + 5e3, t))
                }

                function g(i, e) {
                    !i.i || i.v > e || (clearTimeout(i.j), i.j = setTimeout(function () {
                        var e = performance.timing.navigationStart, t = w(i.g, i.b),
                            e = (window.a && window.a.A ? 1e3 * window.a.A().C - e : 0) || performance.timing.domContentLoadedEventEnd - e;
                        if (i.u) var n = i.u; else n = performance.timing.domContentLoadedEventEnd ? (n = performance.timing, n.domContentLoadedEventEnd - n.navigationStart) : null;
                        var r = performance.now();
                        null === n && g(i, Math.max(t + 5e3, r + 1e3));
                        var o = i.a;
                        t = 5e3 > r - t ? null : (t = o.length ? o[o.length - 1].end : e, 5e3 > r - t ? null : Math.max(t, n));
                        t && (i.s(t), clearTimeout(i.j), i.i = !1, i.c && i.c.disconnect(), i.h && i.h.disconnect());
                        g(i, performance.now() + 1e3)
                    }, e - performance.now()), i.v = e)
                }

                function b(r) {
                    r.c = new PerformanceObserver(function (e) {
                        e = c(e.getEntries());
                        for (var t = e.next(); !t.done; t = e.next()) if (t = t.value, "resource" === t.entryType && (r.b.push({
                            start: t.fetchStart,
                            end: t.responseEnd
                        }), g(r, w(r.g, r.b) + 5e3)), "longtask" === t.entryType) {
                            var n = t.startTime + t.duration;
                            r.a.push({start: t.startTime, end: n});
                            g(r, n + 5e3)
                        }
                    });
                    r.c.observe({entryTypes: ["longtask", "resource"]})
                }

                h.prototype.m = function (e) {
                    this.f.set(e, performance.now())
                };
                h.prototype.l = function (e) {
                    this.f.delete(e)
                };
                h.prototype.B = function () {
                    g(this, performance.now() + 5e3)
                };
                t.Object.defineProperties(h.prototype, {
                    g: {
                        configurable: !0, enumerable: !0, get: function () {
                            return [].concat(s(this.f.values()))
                        }
                    }
                });
                var E = {
                    getFirstConsistentlyInteractive: function (e) {
                        e = e || {};
                        return "PerformanceLongTaskTiming" in window ? new h(e).getFirstConsistentlyInteractive() : Promise.resolve(null)
                    }
                };
                true, P.exports ? P.exports = E : (true, !(S = [], T = function () {
                    return E
                }.apply(O, S), void 0 !== T && (P.exports = T)))
            })()
        }).call(this, e("./node_modules/webpack/buildin/global.js"))
    }, "./node_modules/webpack/buildin/global.js": function (e, t) {
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" === typeof window && (n = window)
        }
        e.exports = n
    }, "./src/main/webapp/frontend/packages/enums/PageTypes.js": function (e, t) {
        var n = {
            MAIN_CONTENT: 1,
            CONTENT_COLLECTION: 1,
            PAGE: 2,
            SPLASH_PAGE: 3,
            CONTENT_ITEM: 50,
            NOT_FOUND: 100,
            ERROR: 101,
            SEARCH: 102,
            LOCK_SCREEN: 103,
            POPUP_OVERLAY: 104,
            PROTECTED_CONTENT: 105,
            MEMBER_AREA_ACCESS_DENIED: 106,
            SHOW_CART: 200,
            CHECKOUT: 201,
            ORDER_CONFIRMED: 202,
            DONATE: 203,
            CONTRIBUTION_CONFIRMED: 204,
            COMMERCE_CART_V2: 205,
            SUBSCRIPTION_CONFIRMED: 206,
            ORDER_RECEIVED: 207,
            MEMBERSHIP_CONFIRMED: 208,
            NEWSLETTER_UNSUBSCRIBE: 300,
            COMMERCE_EMAIL_PREVIEW: 301
        };
        e.exports = n
    }, "./src/main/webapp/frontend/packages/enums/StatusConstants.js": function (e, t) {
        var n = {
            EXPIRED: 1,
            PASTDUE: 2,
            TRIAL: 3,
            BETA: 4,
            REMOVED: 5,
            INTERNAL: 6,
            COMPED: 7,
            PAID: 8,
            V5_LINKED: 11,
            ACTIVE_PARKING_PAGE: 12,
            RESOLD: 13,
            RESOLD_GRACE_PERIOD: 14,
            ENTERPRISE: 15
        };
        e.exports = n
    }, "./src/main/webapp/universal/src/apps/Performance/bootstrap.js": function (e, t, n) {
        "use strict";
        var r = n("./common/temp/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
        var o = r(n("./common/temp/node_modules/@babel/runtime/helpers/defineProperty.js"));
        var i = r(n("./common/temp/node_modules/@sqs/rum-collector/lib/index.js"));
        var c = r(n("./src/main/webapp/frontend/packages/enums/StatusConstants.js"));
        var a = r(n("./src/main/webapp/frontend/packages/enums/PageTypes.js"));
        var s = n("./src/main/webapp/universal/src/shared/utils/error-reporter/global-sentry.ts");

        function u(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }));
                n.push.apply(n, r)
            }
            return n
        }

        function f(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = null != arguments[e] ? arguments[e] : {};
                e % 2 ? u(Object(n), true).forEach(function (e) {
                    (0, o.default)(t, e, n[e])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function (e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                })
            }
            return t
        }

        var d = window.Static && window.Static.SQUARESPACE_CONTEXT;
        var l = window.top !== window;
        var p = Object.freeze((0, o.default)({}, a.default.COMMERCE_CART_V2, "commerce-cart"));

        function v() {
            var e = window.location && window.location.pathname || "";
            return !l && /^\/config(\/.*)?$/.test(e)
        }

        function m() {
            return {
                inFrame: l,
                templateId: d.templateId || "",
                impersonatedSession: !!d.impersonatedSession,
                pageType: "number" === typeof d.pageType ? d.pageType : -1
            }
        }

        function w() {
            var e = d.website, t = void 0 === e ? {} : e;
            return {
                authenticUrl: t.authenticUrl || "",
                cloneable: !!t.cloneable,
                developerMode: !!t.developerMode,
                isHstsEnabled: !!t.isHstsEnabled,
                language: t.language || "",
                timeZone: t.timeZone || "",
                websiteId: t.id || "",
                websiteType: t.websiteType || -1
            }
        }

        function h() {
            var e = d.websiteSettings, t = void 0 === e ? {} : e;
            return {ampEnabled: !!t.ampEnabled}
        }

        function y() {
            var e = d.collection, t = void 0 === e ? {} : e;
            return {collectionType: t.type || -1}
        }

        function g() {
            return window.Squarespace && "SECTION_CONTEXT" in window.Squarespace
        }

        function b() {
            if (d.hasOwnProperty("templateVersion")) return d.templateVersion.replace(".", "_");
            if (g()) return "8";
            return null
        }

        function E(e) {
            var t = v();
            var n = p[d.pageType];
            var r = {
                appName: n || "v".concat(e, "-").concat(t ? "config" : "user-sites"),
                context: f({}, m(), {}, w(), {}, h(), {}, y()),
                captureException: function e(t, n) {
                    (0, s.withScope)(function (e) {
                        e.setTag("project", "rum-collector");
                        void 0 !== n && e.setExtra("extras", n);
                        (0, s.captureException)(t)
                    })
                }
            };
            if (t) {
                var o = d.website.siteStatus.value === c.default.INTERNAL;
                var i = d.authenticatedAccount, a = i.createdOn, u = i.id;
                r.context.isInternal = o;
                r.context.createdOn = a;
                r.context.memberId = u
            }
            return r
        }

        function _() {
            if (true, d) {
                var e = b();
                if (null === e) return;
                var t = E(e);
                (0, i.default)(t)
            }
        }

        _()
    }, "./src/main/webapp/universal/src/shared/utils/error-reporter/global-sentry.ts": function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: true});
        t.isSentryConnected = t.withScope = t.configureScope = t.captureEvent = t.captureException = t.captureMessage = void 0;
        var r, o, i, a, u;
        t.withScope = u;
        t.configureScope = a;
        t.captureEvent = i;
        t.captureException = o;
        t.captureMessage = r;
        var c = function e(t) {
            var n;
            for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) o[i - 1] = arguments[i];
            (n = console).log.apply(n, ["[Sentry] ".concat(t)].concat(o));
            return "some-error-identifier"
        };
        var s = false;
        t.isSentryConnected = s;
        if (window.SQUARESPACE_SENTRY) {
            t.isSentryConnected = s = true;
            t.captureMessage = r = window.SQUARESPACE_SENTRY.captureMessage;
            t.captureException = o = window.SQUARESPACE_SENTRY.captureException;
            t.captureEvent = i = window.SQUARESPACE_SENTRY.captureEvent;
            t.configureScope = a = window.SQUARESPACE_SENTRY.configureScope;
            t.withScope = u = window.SQUARESPACE_SENTRY.withScope
        } else {
            t.captureMessage = r = c;
            t.captureException = o = c;
            t.captureEvent = i = c;
            t.configureScope = a = function e() {
            };
            t.withScope = u = function e() {
            }
        }
    }
});