!function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {exports: {}, id: r, loaded: !1};
        return t[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
    }
    n.m = t, n.c = e, n.p = "", n(0)
}({
    0: function (t, e, n) {
        t.exports = n(415)
    }, 5: function (t, e, n) {
        t.exports = n(6)
    }, 6: function (t, e, n) {
        (function (e) {
            t.exports = e.$ = n(7)
        }).call(e, function () {
            return this
        }())
    }, 7: function (t, e, n) {
        (function (e) {
            t.exports = e.jQuery = n(8)
        }).call(e, function () {
            return this
        }())
    }, 8: function (t, e, n) {
        var r;
        /*!
* jQuery JavaScript Library v2.1.4
* http://jquery.com/
*
* Includes Sizzle.js
* http://sizzlejs.com/
*
* Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2015-04-28T16:01Z
*/
        /*!
* jQuery JavaScript Library v2.1.4
* http://jquery.com/
*
* Includes Sizzle.js
* http://sizzlejs.com/
*
* Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2015-04-28T16:01Z
*/
        !function (e, n) {
            "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
                if (!t.document) throw new Error("jQuery requires a window with a document");
                return n(t)
            } : n(e)
        }("undefined" != typeof window ? window : this, function (n, i) {
            var o = [], a = o.slice, s = o.concat, l = o.push, u = o.indexOf, c = {}, f = c.toString,
                p = c.hasOwnProperty, h = {}, d = n.document, g = function (t, e) {
                    return new g.fn.init(t, e)
                }, v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, m = /^-ms-/, y = /-([\da-z])/gi, b = function (t, e) {
                    return e.toUpperCase()
                };

            function x(t) {
                var e = "length" in t && t.length, n = g.type(t);
                return "function" !== n && !g.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
            }

            g.fn = g.prototype = {
                jquery: "2.1.4", constructor: g, selector: "", length: 0, toArray: function () {
                    return a.call(this)
                }, get: function (t) {
                    return null != t ? t < 0 ? this[t + this.length] : this[t] : a.call(this)
                }, pushStack: function (t) {
                    var e = g.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                }, each: function (t, e) {
                    return g.each(this, t, e)
                }, map: function (t) {
                    return this.pushStack(g.map(this, function (e, n) {
                        return t.call(e, n, e)
                    }))
                }, slice: function () {
                    return this.pushStack(a.apply(this, arguments))
                }, first: function () {
                    return this.eq(0)
                }, last: function () {
                    return this.eq(-1)
                }, eq: function (t) {
                    var e = this.length, n = +t + (t < 0 ? e : 0);
                    return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                }, end: function () {
                    return this.prevObject || this.constructor(null)
                }, push: l, sort: o.sort, splice: o.splice
            }, g.extend = g.fn.extend = function () {
                var t, e, n, r, i, o, a = arguments[0] || {}, s = 1, l = arguments.length, u = !1;
                for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || g.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (t = arguments[s])) for (e in t) n = a[e], a !== (r = t[e]) && (u && r && (g.isPlainObject(r) || (i = g.isArray(r))) ? (i ? (i = !1, o = n && g.isArray(n) ? n : []) : o = n && g.isPlainObject(n) ? n : {}, a[e] = g.extend(u, o, r)) : void 0 !== r && (a[e] = r));
                return a
            }, g.extend({
                expando: "jQuery" + ("2.1.4" + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) {
                    throw new Error(t)
                },
                noop: function () {
                },
                isFunction: function (t) {
                    return "function" === g.type(t)
                },
                isArray: Array.isArray,
                isWindow: function (t) {
                    return null != t && t === t.window
                },
                isNumeric: function (t) {
                    return !g.isArray(t) && t - parseFloat(t) + 1 >= 0
                },
                isPlainObject: function (t) {
                    return "object" === g.type(t) && !t.nodeType && !g.isWindow(t) && !(t.constructor && !p.call(t.constructor.prototype, "isPrototypeOf"))
                },
                isEmptyObject: function (t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                type: function (t) {
                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[f.call(t)] || "object" : typeof t
                },
                globalEval: function (t) {
                    var e, n = eval;
                    (t = g.trim(t)) && (1 === t.indexOf("use strict") ? ((e = d.createElement("script")).text = t, d.head.appendChild(e).parentNode.removeChild(e)) : n(t))
                },
                camelCase: function (t) {
                    return t.replace(m, "ms-").replace(y, b)
                },
                nodeName: function (t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function (t, e, n) {
                    var r = 0, i = t.length, o = x(t);
                    if (n) {
                        if (o) for (; r < i && !1 !== e.apply(t[r], n); r++) ; else for (r in t) if (!1 === e.apply(t[r], n)) break
                    } else if (o) for (; r < i && !1 !== e.call(t[r], r, t[r]); r++) ; else for (r in t) if (!1 === e.call(t[r], r, t[r])) break;
                    return t
                },
                trim: function (t) {
                    return null == t ? "" : (t + "").replace(v, "")
                },
                makeArray: function (t, e) {
                    var n = e || [];
                    return null != t && (x(Object(t)) ? g.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n
                },
                inArray: function (t, e, n) {
                    return null == e ? -1 : u.call(e, t, n)
                },
                merge: function (t, e) {
                    for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
                    return t.length = i, t
                },
                grep: function (t, e, n) {
                    for (var r = [], i = 0, o = t.length, a = !n; i < o; i++) !e(t[i], i) !== a && r.push(t[i]);
                    return r
                },
                map: function (t, e, n) {
                    var r, i = 0, o = t.length, a = [];
                    if (x(t)) for (; i < o; i++) null != (r = e(t[i], i, n)) && a.push(r); else for (i in t) null != (r = e(t[i], i, n)) && a.push(r);
                    return s.apply([], a)
                },
                guid: 1,
                proxy: function (t, e) {
                    var n, r, i;
                    if ("string" == typeof e && (n = t[e], e = t, t = n), g.isFunction(t)) return r = a.call(arguments, 2), (i = function () {
                        return t.apply(e || this, r.concat(a.call(arguments)))
                    }).guid = t.guid = t.guid || g.guid++, i
                },
                now: Date.now,
                support: h
            }), g.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
                c["[object " + e + "]"] = e.toLowerCase()
            });
            var w = /*!
* Sizzle CSS Selector Engine v2.2.0-pre
* http://sizzlejs.com/
*
* Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
* Released under the MIT license
* http://jquery.org/license
*
* Date: 2014-12-16
*/function (t) {
                var e, n, r, i, o, a, s, l, u, c, f, p, h, d, g, v, m, y, b, x = "sizzle" + 1 * new Date,
                    w = t.document, C = 0, T = 0, k = at(), _ = at(), S = at(), E = function (t, e) {
                        return t === e && (f = !0), 0
                    }, $ = 1 << 31, N = {}.hasOwnProperty, A = [], j = A.pop, D = A.push, O = A.push, R = A.slice,
                    P = function (t, e) {
                        for (var n = 0, r = t.length; n < r; n++) if (t[n] === e) return n;
                        return -1
                    },
                    I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    L = "[\\x20\\t\\r\\n\\f]", H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", F = H.replace("w", "w#"),
                    q = "\\[" + L + "*(" + H + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + L + "*\\]",
                    M = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                    W = new RegExp(L + "+", "g"),
                    U = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                    B = new RegExp("^" + L + "*," + L + "*"), z = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                    V = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), X = new RegExp(M),
                    Y = new RegExp("^" + F + "$"), G = {
                        ID: new RegExp("^#(" + H + ")"),
                        CLASS: new RegExp("^\\.(" + H + ")"),
                        TAG: new RegExp("^(" + H.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + q),
                        PSEUDO: new RegExp("^" + M),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + I + ")$", "i"),
                        needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
                    }, J = /^(?:input|select|textarea|button)$/i, K = /^h\d$/i, Q = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, tt = /[+~]/, et = /'|\\/g,
                    nt = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), rt = function (t, e, n) {
                        var r = "0x" + e - 65536;
                        return r != r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, it = function () {
                        p()
                    };
                try {
                    O.apply(A = R.call(w.childNodes), w.childNodes), A[w.childNodes.length].nodeType
                } catch (t) {
                    O = {
                        apply: A.length ? function (t, e) {
                            D.apply(t, R.call(e))
                        } : function (t, e) {
                            for (var n = t.length, r = 0; t[n++] = e[r++];) ;
                            t.length = n - 1
                        }
                    }
                }

                function ot(t, e, r, i) {
                    var o, s, u, c, f, d, m, y, C, T;
                    if ((e ? e.ownerDocument || e : w) !== h && p(e), e = e || h, r = r || [], c = e.nodeType, "string" != typeof t || !t || 1 !== c && 9 !== c && 11 !== c) return r;
                    if (!i && g) {
                        if (11 !== c && (o = Z.exec(t))) if (u = o[1]) {
                            if (9 === c) {
                                if (!(s = e.getElementById(u)) || !s.parentNode) return r;
                                if (s.id === u) return r.push(s), r
                            } else if (e.ownerDocument && (s = e.ownerDocument.getElementById(u)) && b(e, s) && s.id === u) return r.push(s), r
                        } else {
                            if (o[2]) return O.apply(r, e.getElementsByTagName(t)), r;
                            if ((u = o[3]) && n.getElementsByClassName) return O.apply(r, e.getElementsByClassName(u)), r
                        }
                        if (n.qsa && (!v || !v.test(t))) {
                            if (y = m = x, C = e, T = 1 !== c && t, 1 === c && "object" !== e.nodeName.toLowerCase()) {
                                for (d = a(t), (m = e.getAttribute("id")) ? y = m.replace(et, "\\$&") : e.setAttribute("id", y), y = "[id='" + y + "'] ", f = d.length; f--;) d[f] = y + vt(d[f]);
                                C = tt.test(t) && dt(e.parentNode) || e, T = d.join(",")
                            }
                            if (T) try {
                                return O.apply(r, C.querySelectorAll(T)), r
                            } catch (t) {
                            } finally {
                                m || e.removeAttribute("id")
                            }
                        }
                    }
                    return l(t.replace(U, "$1"), e, r, i)
                }

                function at() {
                    var t = [];
                    return function e(n, i) {
                        return t.push(n + " ") > r.cacheLength && delete e[t.shift()], e[n + " "] = i
                    }
                }

                function st(t) {
                    return t[x] = !0, t
                }

                function lt(t) {
                    var e = h.createElement("div");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function ut(t, e) {
                    for (var n = t.split("|"), i = t.length; i--;) r.attrHandle[n[i]] = e
                }

                function ct(t, e) {
                    var n = e && t,
                        r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || $) - (~t.sourceIndex || $);
                    if (r) return r;
                    if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                    return t ? 1 : -1
                }

                function ft(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }

                function pt(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function ht(t) {
                    return st(function (e) {
                        return e = +e, st(function (n, r) {
                            for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function dt(t) {
                    return t && void 0 !== t.getElementsByTagName && t
                }

                for (e in n = ot.support = {}, o = ot.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, p = ot.setDocument = function (t) {
                    var e, i, a = t ? t.ownerDocument || t : w;
                    return a !== h && 9 === a.nodeType && a.documentElement ? (h = a, d = a.documentElement, (i = a.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", it, !1) : i.attachEvent && i.attachEvent("onunload", it)), g = !o(a), n.attributes = lt(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), n.getElementsByTagName = lt(function (t) {
                        return t.appendChild(a.createComment("")), !t.getElementsByTagName("*").length
                    }), n.getElementsByClassName = Q.test(a.getElementsByClassName), n.getById = lt(function (t) {
                        return d.appendChild(t).id = x, !a.getElementsByName || !a.getElementsByName(x).length
                    }), n.getById ? (r.find.ID = function (t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var n = e.getElementById(t);
                            return n && n.parentNode ? [n] : []
                        }
                    }, r.filter.ID = function (t) {
                        var e = t.replace(nt, rt);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete r.find.ID, r.filter.ID = function (t) {
                        var e = t.replace(nt, rt);
                        return function (t) {
                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }), r.find.TAG = n.getElementsByTagName ? function (t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, r = [], i = 0, o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, r.find.CLASS = n.getElementsByClassName && function (t, e) {
                        if (g) return e.getElementsByClassName(t)
                    }, m = [], v = [], (n.qsa = Q.test(a.querySelectorAll)) && (lt(function (t) {
                        d.appendChild(t).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + L + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + L + "*(?:value|" + I + ")"), t.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]")
                    }), lt(function (t) {
                        var e = a.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + L + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                    })), (n.matchesSelector = Q.test(y = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && lt(function (t) {
                        n.disconnectedMatch = y.call(t, "div"), y.call(t, "[s!='']:x"), m.push("!=", M)
                    }), v = v.length && new RegExp(v.join("|")), m = m.length && new RegExp(m.join("|")), e = Q.test(d.compareDocumentPosition), b = e || Q.test(d.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                    } : function (t, e) {
                        if (e) for (; e = e.parentNode;) if (e === t) return !0;
                        return !1
                    }, E = e ? function (t, e) {
                        if (t === e) return f = !0, 0;
                        var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return r || (1 & (r = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === r ? t === a || t.ownerDocument === w && b(w, t) ? -1 : e === a || e.ownerDocument === w && b(w, e) ? 1 : c ? P(c, t) - P(c, e) : 0 : 4 & r ? -1 : 1)
                    } : function (t, e) {
                        if (t === e) return f = !0, 0;
                        var n, r = 0, i = t.parentNode, o = e.parentNode, s = [t], l = [e];
                        if (!i || !o) return t === a ? -1 : e === a ? 1 : i ? -1 : o ? 1 : c ? P(c, t) - P(c, e) : 0;
                        if (i === o) return ct(t, e);
                        for (n = t; n = n.parentNode;) s.unshift(n);
                        for (n = e; n = n.parentNode;) l.unshift(n);
                        for (; s[r] === l[r];) r++;
                        return r ? ct(s[r], l[r]) : s[r] === w ? -1 : l[r] === w ? 1 : 0
                    }, a) : h
                }, ot.matches = function (t, e) {
                    return ot(t, null, null, e)
                }, ot.matchesSelector = function (t, e) {
                    if ((t.ownerDocument || t) !== h && p(t), e = e.replace(V, "='$1']"), n.matchesSelector && g && (!m || !m.test(e)) && (!v || !v.test(e))) try {
                        var r = y.call(t, e);
                        if (r || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                    } catch (t) {
                    }
                    return ot(e, h, null, [t]).length > 0
                }, ot.contains = function (t, e) {
                    return (t.ownerDocument || t) !== h && p(t), b(t, e)
                }, ot.attr = function (t, e) {
                    (t.ownerDocument || t) !== h && p(t);
                    var i = r.attrHandle[e.toLowerCase()],
                        o = i && N.call(r.attrHandle, e.toLowerCase()) ? i(t, e, !g) : void 0;
                    return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                }, ot.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, ot.uniqueSort = function (t) {
                    var e, r = [], i = 0, o = 0;
                    if (f = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(E), f) {
                        for (; e = t[o++];) e === t[o] && (i = r.push(o));
                        for (; i--;) t.splice(r[i], 1)
                    }
                    return c = null, t
                }, i = ot.getText = function (t) {
                    var e, n = "", r = 0, o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) n += i(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else for (; e = t[r++];) n += i(e);
                    return n
                }, (r = ot.selectors = {
                    cacheLength: 50,
                    createPseudo: st,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(nt, rt), t[3] = (t[3] || t[4] || t[5] || "").replace(nt, rt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                        }, PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return G.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(nt, rt).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function (t) {
                            var e = k[t + " "];
                            return e || (e = new RegExp("(^|" + L + ")" + t + "(" + L + "|$)")) && k(t, function (t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        }, ATTR: function (t, e, n) {
                            return function (r) {
                                var i = ot.attr(r, t);
                                return null == i ? "!=" === e : !e || (i += "", "=" === e ? i === n : "!=" === e ? i !== n : "^=" === e ? n && 0 === i.indexOf(n) : "*=" === e ? n && i.indexOf(n) > -1 : "$=" === e ? n && i.slice(-n.length) === n : "~=" === e ? (" " + i.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === e && (i === n || i.slice(0, n.length + 1) === n + "-"))
                            }
                        }, CHILD: function (t, e, n, r, i) {
                            var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                            return 1 === r && 0 === i ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, l) {
                                var u, c, f, p, h, d, g = o !== a ? "nextSibling" : "previousSibling", v = e.parentNode,
                                    m = s && e.nodeName.toLowerCase(), y = !l && !s;
                                if (v) {
                                    if (o) {
                                        for (; g;) {
                                            for (f = e; f = f[g];) if (s ? f.nodeName.toLowerCase() === m : 1 === f.nodeType) return !1;
                                            d = g = "only" === t && !d && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (d = [a ? v.firstChild : v.lastChild], a && y) {
                                        for (h = (u = (c = v[x] || (v[x] = {}))[t] || [])[0] === C && u[1], p = u[0] === C && u[2], f = h && v.childNodes[h]; f = ++h && f && f[g] || (p = h = 0) || d.pop();) if (1 === f.nodeType && ++p && f === e) {
                                            c[t] = [C, h, p];
                                            break
                                        }
                                    } else if (y && (u = (e[x] || (e[x] = {}))[t]) && u[0] === C) p = u[1]; else for (; (f = ++h && f && f[g] || (p = h = 0) || d.pop()) && ((s ? f.nodeName.toLowerCase() !== m : 1 !== f.nodeType) || !++p || (y && ((f[x] || (f[x] = {}))[t] = [C, p]), f !== e));) ;
                                    return (p -= i) === r || p % r == 0 && p / r >= 0
                                }
                            }
                        }, PSEUDO: function (t, e) {
                            var n,
                                i = r.pseudos[t] || r.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                            return i[x] ? i(e) : i.length > 1 ? (n = [t, t, "", e], r.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function (t, n) {
                                for (var r, o = i(t, e), a = o.length; a--;) t[r = P(t, o[a])] = !(n[r] = o[a])
                            }) : function (t) {
                                return i(t, 0, n)
                            }) : i
                        }
                    },
                    pseudos: {
                        not: st(function (t) {
                            var e = [], n = [], r = s(t.replace(U, "$1"));
                            return r[x] ? st(function (t, e, n, i) {
                                for (var o, a = r(t, null, i, []), s = t.length; s--;) (o = a[s]) && (t[s] = !(e[s] = o))
                            }) : function (t, i, o) {
                                return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }), has: st(function (t) {
                            return function (e) {
                                return ot(t, e).length > 0
                            }
                        }), contains: st(function (t) {
                            return t = t.replace(nt, rt), function (e) {
                                return (e.textContent || e.innerText || i(e)).indexOf(t) > -1
                            }
                        }), lang: st(function (t) {
                            return Y.test(t || "") || ot.error("unsupported lang: " + t), t = t.replace(nt, rt).toLowerCase(), function (e) {
                                var n;
                                do {
                                    if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }), target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        }, root: function (t) {
                            return t === d
                        }, focus: function (t) {
                            return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: function (t) {
                            return !1 === t.disabled
                        }, disabled: function (t) {
                            return !0 === t.disabled
                        }, checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        }, empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0
                        }, parent: function (t) {
                            return !r.pseudos.empty(t)
                        }, header: function (t) {
                            return K.test(t.nodeName)
                        }, input: function (t) {
                            return J.test(t.nodeName)
                        }, button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        }, text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: ht(function () {
                            return [0]
                        }), last: ht(function (t, e) {
                            return [e - 1]
                        }), eq: ht(function (t, e, n) {
                            return [n < 0 ? n + e : n]
                        }), even: ht(function (t, e) {
                            for (var n = 0; n < e; n += 2) t.push(n);
                            return t
                        }), odd: ht(function (t, e) {
                            for (var n = 1; n < e; n += 2) t.push(n);
                            return t
                        }), lt: ht(function (t, e, n) {
                            for (var r = n < 0 ? n + e : n; --r >= 0;) t.push(r);
                            return t
                        }), gt: ht(function (t, e, n) {
                            for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                            return t
                        })
                    }
                }).pseudos.nth = r.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) r.pseudos[e] = ft(e);
                for (e in{submit: !0, reset: !0}) r.pseudos[e] = pt(e);

                function gt() {
                }

                function vt(t) {
                    for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
                    return r
                }

                function mt(t, e, n) {
                    var r = e.dir, i = n && "parentNode" === r, o = T++;
                    return e.first ? function (e, n, o) {
                        for (; e = e[r];) if (1 === e.nodeType || i) return t(e, n, o)
                    } : function (e, n, a) {
                        var s, l, u = [C, o];
                        if (a) {
                            for (; e = e[r];) if ((1 === e.nodeType || i) && t(e, n, a)) return !0
                        } else for (; e = e[r];) if (1 === e.nodeType || i) {
                            if ((s = (l = e[x] || (e[x] = {}))[r]) && s[0] === C && s[1] === o) return u[2] = s[2];
                            if (l[r] = u, u[2] = t(e, n, a)) return !0
                        }
                    }
                }

                function yt(t) {
                    return t.length > 1 ? function (e, n, r) {
                        for (var i = t.length; i--;) if (!t[i](e, n, r)) return !1;
                        return !0
                    } : t[0]
                }

                function bt(t, e, n, r, i) {
                    for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++) (o = t[s]) && (n && !n(o, r, i) || (a.push(o), u && e.push(s)));
                    return a
                }

                function xt(t, e, n, r, i, o) {
                    return r && !r[x] && (r = xt(r)), i && !i[x] && (i = xt(i, o)), st(function (o, a, s, l) {
                        var u, c, f, p = [], h = [], d = a.length, g = o || function (t, e, n) {
                                for (var r = 0, i = e.length; r < i; r++) ot(t, e[r], n);
                                return n
                            }(e || "*", s.nodeType ? [s] : s, []), v = !t || !o && e ? g : bt(g, p, t, s, l),
                            m = n ? i || (o ? t : d || r) ? [] : a : v;
                        if (n && n(v, m, s, l), r) for (u = bt(m, h), r(u, [], s, l), c = u.length; c--;) (f = u[c]) && (m[h[c]] = !(v[h[c]] = f));
                        if (o) {
                            if (i || t) {
                                if (i) {
                                    for (u = [], c = m.length; c--;) (f = m[c]) && u.push(v[c] = f);
                                    i(null, m = [], u, l)
                                }
                                for (c = m.length; c--;) (f = m[c]) && (u = i ? P(o, f) : p[c]) > -1 && (o[u] = !(a[u] = f))
                            }
                        } else m = bt(m === a ? m.splice(d, m.length) : m), i ? i(null, a, m, l) : O.apply(a, m)
                    })
                }

                function wt(t) {
                    for (var e, n, i, o = t.length, a = r.relative[t[0].type], s = a || r.relative[" "], l = a ? 1 : 0, c = mt(function (t) {
                        return t === e
                    }, s, !0), f = mt(function (t) {
                        return P(e, t) > -1
                    }, s, !0), p = [function (t, n, r) {
                        var i = !a && (r || n !== u) || ((e = n).nodeType ? c(t, n, r) : f(t, n, r));
                        return e = null, i
                    }]; l < o; l++) if (n = r.relative[t[l].type]) p = [mt(yt(p), n)]; else {
                        if ((n = r.filter[t[l].type].apply(null, t[l].matches))[x]) {
                            for (i = ++l; i < o && !r.relative[t[i].type]; i++) ;
                            return xt(l > 1 && yt(p), l > 1 && vt(t.slice(0, l - 1).concat({value: " " === t[l - 2].type ? "*" : ""})).replace(U, "$1"), n, l < i && wt(t.slice(l, i)), i < o && wt(t = t.slice(i)), i < o && vt(t))
                        }
                        p.push(n)
                    }
                    return yt(p)
                }

                return gt.prototype = r.filters = r.pseudos, r.setFilters = new gt, a = ot.tokenize = function (t, e) {
                    var n, i, o, a, s, l, u, c = _[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (s = t, l = [], u = r.preFilter; s;) {
                        for (a in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = z.exec(s)) && (n = i.shift(), o.push({
                            value: n,
                            type: i[0].replace(U, " ")
                        }), s = s.slice(n.length)), r.filter) !(i = G[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({
                            value: n,
                            type: a,
                            matches: i
                        }), s = s.slice(n.length));
                        if (!n) break
                    }
                    return e ? s.length : s ? ot.error(t) : _(t, l).slice(0)
                }, s = ot.compile = function (t, e) {
                    var n, i = [], o = [], s = S[t + " "];
                    if (!s) {
                        for (e || (e = a(t)), n = e.length; n--;) (s = wt(e[n]))[x] ? i.push(s) : o.push(s);
                        (s = S(t, function (t, e) {
                            var n = e.length > 0, i = t.length > 0, o = function (o, a, s, l, c) {
                                var f, p, d, g = 0, v = "0", m = o && [], y = [], b = u,
                                    x = o || i && r.find.TAG("*", c), w = C += null == b ? 1 : Math.random() || .1,
                                    T = x.length;
                                for (c && (u = a !== h && a); v !== T && null != (f = x[v]); v++) {
                                    if (i && f) {
                                        for (p = 0; d = t[p++];) if (d(f, a, s)) {
                                            l.push(f);
                                            break
                                        }
                                        c && (C = w)
                                    }
                                    n && ((f = !d && f) && g--, o && m.push(f))
                                }
                                if (g += v, n && v !== g) {
                                    for (p = 0; d = e[p++];) d(m, y, a, s);
                                    if (o) {
                                        if (g > 0) for (; v--;) m[v] || y[v] || (y[v] = j.call(l));
                                        y = bt(y)
                                    }
                                    O.apply(l, y), c && !o && y.length > 0 && g + e.length > 1 && ot.uniqueSort(l)
                                }
                                return c && (C = w, u = b), m
                            };
                            return n ? st(o) : o
                        }(o, i))).selector = t
                    }
                    return s
                }, l = ot.select = function (t, e, i, o) {
                    var l, u, c, f, p, h = "function" == typeof t && t, d = !o && a(t = h.selector || t);
                    if (i = i || [], 1 === d.length) {
                        if ((u = d[0] = d[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && n.getById && 9 === e.nodeType && g && r.relative[u[1].type]) {
                            if (!(e = (r.find.ID(c.matches[0].replace(nt, rt), e) || [])[0])) return i;
                            h && (e = e.parentNode), t = t.slice(u.shift().value.length)
                        }
                        for (l = G.needsContext.test(t) ? 0 : u.length; l-- && (c = u[l], !r.relative[f = c.type]);) if ((p = r.find[f]) && (o = p(c.matches[0].replace(nt, rt), tt.test(u[0].type) && dt(e.parentNode) || e))) {
                            if (u.splice(l, 1), !(t = o.length && vt(u))) return O.apply(i, o), i;
                            break
                        }
                    }
                    return (h || s(t, d))(o, e, !g, i, tt.test(t) && dt(e.parentNode) || e), i
                }, n.sortStable = x.split("").sort(E).join("") === x, n.detectDuplicates = !!f, p(), n.sortDetached = lt(function (t) {
                    return 1 & t.compareDocumentPosition(h.createElement("div"))
                }), lt(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || ut("type|href|height|width", function (t, e, n) {
                    if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), n.attributes && lt(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || ut("value", function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                }), lt(function (t) {
                    return null == t.getAttribute("disabled")
                }) || ut(I, function (t, e, n) {
                    var r;
                    if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }), ot
            }(n);
            g.find = w, g.expr = w.selectors, g.expr[":"] = g.expr.pseudos, g.unique = w.uniqueSort, g.text = w.getText, g.isXMLDoc = w.isXML, g.contains = w.contains;
            var C = g.expr.match.needsContext, T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, k = /^.[^:#\[\.,]*$/;

            function _(t, e, n) {
                if (g.isFunction(e)) return g.grep(t, function (t, r) {
                    return !!e.call(t, r, t) !== n
                });
                if (e.nodeType) return g.grep(t, function (t) {
                    return t === e !== n
                });
                if ("string" == typeof e) {
                    if (k.test(e)) return g.filter(e, t, n);
                    e = g.filter(e, t)
                }
                return g.grep(t, function (t) {
                    return u.call(e, t) >= 0 !== n
                })
            }

            g.filter = function (t, e, n) {
                var r = e[0];
                return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? g.find.matchesSelector(r, t) ? [r] : [] : g.find.matches(t, g.grep(e, function (t) {
                    return 1 === t.nodeType
                }))
            }, g.fn.extend({
                find: function (t) {
                    var e, n = this.length, r = [], i = this;
                    if ("string" != typeof t) return this.pushStack(g(t).filter(function () {
                        for (e = 0; e < n; e++) if (g.contains(i[e], this)) return !0
                    }));
                    for (e = 0; e < n; e++) g.find(t, i[e], r);
                    return (r = this.pushStack(n > 1 ? g.unique(r) : r)).selector = this.selector ? this.selector + " " + t : t, r
                }, filter: function (t) {
                    return this.pushStack(_(this, t || [], !1))
                }, not: function (t) {
                    return this.pushStack(_(this, t || [], !0))
                }, is: function (t) {
                    return !!_(this, "string" == typeof t && C.test(t) ? g(t) : t || [], !1).length
                }
            });
            var S, E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
            (g.fn.init = function (t, e) {
                var n, r;
                if (!t) return this;
                if ("string" == typeof t) {
                    if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : E.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || S).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (e = e instanceof g ? e[0] : e, g.merge(this, g.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : d, !0)), T.test(n[1]) && g.isPlainObject(e)) for (n in e) g.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this
                    }
                    return (r = d.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = d, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : g.isFunction(t) ? void 0 !== S.ready ? S.ready(t) : t(g) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), g.makeArray(t, this))
            }).prototype = g.fn, S = g(d);
            var $ = /^(?:parents|prev(?:Until|All))/, N = {children: !0, contents: !0, next: !0, prev: !0};

            function A(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType;) ;
                return t
            }

            g.extend({
                dir: function (t, e, n) {
                    for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
                        if (i && g(t).is(n)) break;
                        r.push(t)
                    }
                    return r
                }, sibling: function (t, e) {
                    for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                    return n
                }
            }), g.fn.extend({
                has: function (t) {
                    var e = g(t, this), n = e.length;
                    return this.filter(function () {
                        for (var t = 0; t < n; t++) if (g.contains(this, e[t])) return !0
                    })
                }, closest: function (t, e) {
                    for (var n, r = 0, i = this.length, o = [], a = C.test(t) || "string" != typeof t ? g(t, e || this.context) : 0; r < i; r++) for (n = this[r]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && g.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
                    return this.pushStack(o.length > 1 ? g.unique(o) : o)
                }, index: function (t) {
                    return t ? "string" == typeof t ? u.call(g(t), this[0]) : u.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                }, add: function (t, e) {
                    return this.pushStack(g.unique(g.merge(this.get(), g(t, e))))
                }, addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }
            }), g.each({
                parent: function (t) {
                    var e = t.parentNode;
                    return e && 11 !== e.nodeType ? e : null
                }, parents: function (t) {
                    return g.dir(t, "parentNode")
                }, parentsUntil: function (t, e, n) {
                    return g.dir(t, "parentNode", n)
                }, next: function (t) {
                    return A(t, "nextSibling")
                }, prev: function (t) {
                    return A(t, "previousSibling")
                }, nextAll: function (t) {
                    return g.dir(t, "nextSibling")
                }, prevAll: function (t) {
                    return g.dir(t, "previousSibling")
                }, nextUntil: function (t, e, n) {
                    return g.dir(t, "nextSibling", n)
                }, prevUntil: function (t, e, n) {
                    return g.dir(t, "previousSibling", n)
                }, siblings: function (t) {
                    return g.sibling((t.parentNode || {}).firstChild, t)
                }, children: function (t) {
                    return g.sibling(t.firstChild)
                }, contents: function (t) {
                    return t.contentDocument || g.merge([], t.childNodes)
                }
            }, function (t, e) {
                g.fn[t] = function (n, r) {
                    var i = g.map(this, e, n);
                    return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = g.filter(r, i)), this.length > 1 && (N[t] || g.unique(i), $.test(t) && i.reverse()), this.pushStack(i)
                }
            });
            var j, D = /\S+/g, O = {};

            function R() {
                d.removeEventListener("DOMContentLoaded", R, !1), n.removeEventListener("load", R, !1), g.ready()
            }

            g.Callbacks = function (t) {
                var e, n, r, i, o, a, s = [], l = !(t = "string" == typeof t ? O[t] || function (t) {
                    var e = O[t] = {};
                    return g.each(t.match(D) || [], function (t, n) {
                        e[n] = !0
                    }), e
                }(t) : g.extend({}, t)).once && [], u = function (f) {
                    for (e = t.memory && f, n = !0, a = i || 0, i = 0, o = s.length, r = !0; s && a < o; a++) if (!1 === s[a].apply(f[0], f[1]) && t.stopOnFalse) {
                        e = !1;
                        break
                    }
                    r = !1, s && (l ? l.length && u(l.shift()) : e ? s = [] : c.disable())
                }, c = {
                    add: function () {
                        if (s) {
                            var n = s.length;
                            !function e(n) {
                                g.each(n, function (n, r) {
                                    var i = g.type(r);
                                    "function" === i ? t.unique && c.has(r) || s.push(r) : r && r.length && "string" !== i && e(r)
                                })
                            }(arguments), r ? o = s.length : e && (i = n, u(e))
                        }
                        return this
                    }, remove: function () {
                        return s && g.each(arguments, function (t, e) {
                            for (var n; (n = g.inArray(e, s, n)) > -1;) s.splice(n, 1), r && (n <= o && o--, n <= a && a--)
                        }), this
                    }, has: function (t) {
                        return t ? g.inArray(t, s) > -1 : !(!s || !s.length)
                    }, empty: function () {
                        return s = [], o = 0, this
                    }, disable: function () {
                        return s = l = e = void 0, this
                    }, disabled: function () {
                        return !s
                    }, lock: function () {
                        return l = void 0, e || c.disable(), this
                    }, locked: function () {
                        return !l
                    }, fireWith: function (t, e) {
                        return !s || n && !l || (e = [t, (e = e || []).slice ? e.slice() : e], r ? l.push(e) : u(e)), this
                    }, fire: function () {
                        return c.fireWith(this, arguments), this
                    }, fired: function () {
                        return !!n
                    }
                };
                return c
            }, g.extend({
                Deferred: function (t) {
                    var e = [["resolve", "done", g.Callbacks("once memory"), "resolved"], ["reject", "fail", g.Callbacks("once memory"), "rejected"], ["notify", "progress", g.Callbacks("memory")]],
                        n = "pending", r = {
                            state: function () {
                                return n
                            }, always: function () {
                                return i.done(arguments).fail(arguments), this
                            }, then: function () {
                                var t = arguments;
                                return g.Deferred(function (n) {
                                    g.each(e, function (e, o) {
                                        var a = g.isFunction(t[e]) && t[e];
                                        i[o[1]](function () {
                                            var t = a && a.apply(this, arguments);
                                            t && g.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [t] : arguments)
                                        })
                                    }), t = null
                                }).promise()
                            }, promise: function (t) {
                                return null != t ? g.extend(t, r) : r
                            }
                        }, i = {};
                    return r.pipe = r.then, g.each(e, function (t, o) {
                        var a = o[2], s = o[3];
                        r[o[1]] = a.add, s && a.add(function () {
                            n = s
                        }, e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function () {
                            return i[o[0] + "With"](this === i ? r : this, arguments), this
                        }, i[o[0] + "With"] = a.fireWith
                    }), r.promise(i), t && t.call(i, i), i
                }, when: function (t) {
                    var e, n, r, i = 0, o = a.call(arguments), s = o.length,
                        l = 1 !== s || t && g.isFunction(t.promise) ? s : 0, u = 1 === l ? t : g.Deferred(),
                        c = function (t, n, r) {
                            return function (i) {
                                n[t] = this, r[t] = arguments.length > 1 ? a.call(arguments) : i, r === e ? u.notifyWith(n, r) : --l || u.resolveWith(n, r)
                            }
                        };
                    if (s > 1) for (e = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && g.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, e)) : --l;
                    return l || u.resolveWith(r, o), u.promise()
                }
            }), g.fn.ready = function (t) {
                return g.ready.promise().done(t), this
            }, g.extend({
                isReady: !1, readyWait: 1, holdReady: function (t) {
                    t ? g.readyWait++ : g.ready(!0)
                }, ready: function (t) {
                    (!0 === t ? --g.readyWait : g.isReady) || (g.isReady = !0, !0 !== t && --g.readyWait > 0 || (j.resolveWith(d, [g]), g.fn.triggerHandler && (g(d).triggerHandler("ready"), g(d).off("ready"))))
                }
            }), g.ready.promise = function (t) {
                return j || (j = g.Deferred(), "complete" === d.readyState ? setTimeout(g.ready) : (d.addEventListener("DOMContentLoaded", R, !1), n.addEventListener("load", R, !1))), j.promise(t)
            }, g.ready.promise();
            var P = g.access = function (t, e, n, r, i, o, a) {
                var s = 0, l = t.length, u = null == n;
                if ("object" === g.type(n)) for (s in i = !0, n) g.access(t, e, s, n[s], !0, o, a); else if (void 0 !== r && (i = !0, g.isFunction(r) || (a = !0), u && (a ? (e.call(t, r), e = null) : (u = e, e = function (t, e, n) {
                    return u.call(g(t), n)
                })), e)) for (; s < l; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
                return i ? t : u ? e.call(t) : l ? e(t[0], n) : o
            };

            function I() {
                Object.defineProperty(this.cache = {}, 0, {
                    get: function () {
                        return {}
                    }
                }), this.expando = g.expando + I.uid++
            }

            g.acceptData = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            }, I.uid = 1, I.accepts = g.acceptData, I.prototype = {
                key: function (t) {
                    if (!I.accepts(t)) return 0;
                    var e = {}, n = t[this.expando];
                    if (!n) {
                        n = I.uid++;
                        try {
                            e[this.expando] = {value: n}, Object.defineProperties(t, e)
                        } catch (r) {
                            e[this.expando] = n, g.extend(t, e)
                        }
                    }
                    return this.cache[n] || (this.cache[n] = {}), n
                }, set: function (t, e, n) {
                    var r, i = this.key(t), o = this.cache[i];
                    if ("string" == typeof e) o[e] = n; else if (g.isEmptyObject(o)) g.extend(this.cache[i], e); else for (r in e) o[r] = e[r];
                    return o
                }, get: function (t, e) {
                    var n = this.cache[this.key(t)];
                    return void 0 === e ? n : n[e]
                }, access: function (t, e, n) {
                    var r;
                    return void 0 === e || e && "string" == typeof e && void 0 === n ? void 0 !== (r = this.get(t, e)) ? r : this.get(t, g.camelCase(e)) : (this.set(t, e, n), void 0 !== n ? n : e)
                }, remove: function (t, e) {
                    var n, r, i, o = this.key(t), a = this.cache[o];
                    if (void 0 === e) this.cache[o] = {}; else {
                        g.isArray(e) ? r = e.concat(e.map(g.camelCase)) : (i = g.camelCase(e), r = e in a ? [e, i] : (r = i) in a ? [r] : r.match(D) || []), n = r.length;
                        for (; n--;) delete a[r[n]]
                    }
                }, hasData: function (t) {
                    return !g.isEmptyObject(this.cache[t[this.expando]] || {})
                }, discard: function (t) {
                    t[this.expando] && delete this.cache[t[this.expando]]
                }
            };
            var L = new I, H = new I, F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, q = /([A-Z])/g;

            function M(t, e, n) {
                var r;
                if (void 0 === n && 1 === t.nodeType) if (r = "data-" + e.replace(q, "-$1").toLowerCase(), "string" == typeof(n = t.getAttribute(r))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : F.test(n) ? g.parseJSON(n) : n)
                    } catch (t) {
                    }
                    H.set(t, e, n)
                } else n = void 0;
                return n
            }

            g.extend({
                hasData: function (t) {
                    return H.hasData(t) || L.hasData(t)
                }, data: function (t, e, n) {
                    return H.access(t, e, n)
                }, removeData: function (t, e) {
                    H.remove(t, e)
                }, _data: function (t, e, n) {
                    return L.access(t, e, n)
                }, _removeData: function (t, e) {
                    L.remove(t, e)
                }
            }), g.fn.extend({
                data: function (t, e) {
                    var n, r, i, o = this[0], a = o && o.attributes;
                    if (void 0 === t) {
                        if (this.length && (i = H.get(o), 1 === o.nodeType && !L.get(o, "hasDataAttrs"))) {
                            for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = g.camelCase(r.slice(5)), M(o, r, i[r]));
                            L.set(o, "hasDataAttrs", !0)
                        }
                        return i
                    }
                    return "object" == typeof t ? this.each(function () {
                        H.set(this, t)
                    }) : P(this, function (e) {
                        var n, r = g.camelCase(t);
                        if (o && void 0 === e) return void 0 !== (n = H.get(o, t)) ? n : void 0 !== (n = H.get(o, r)) ? n : void 0 !== (n = M(o, r, void 0)) ? n : void 0;
                        this.each(function () {
                            var n = H.get(this, r);
                            H.set(this, r, e), -1 !== t.indexOf("-") && void 0 !== n && H.set(this, t, e)
                        })
                    }, null, e, arguments.length > 1, null, !0)
                }, removeData: function (t) {
                    return this.each(function () {
                        H.remove(this, t)
                    })
                }
            }), g.extend({
                queue: function (t, e, n) {
                    var r;
                    if (t) return e = (e || "fx") + "queue", r = L.get(t, e), n && (!r || g.isArray(n) ? r = L.access(t, e, g.makeArray(n)) : r.push(n)), r || []
                }, dequeue: function (t, e) {
                    e = e || "fx";
                    var n = g.queue(t, e), r = n.length, i = n.shift(), o = g._queueHooks(t, e);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, function () {
                        g.dequeue(t, e)
                    }, o)), !r && o && o.empty.fire()
                }, _queueHooks: function (t, e) {
                    var n = e + "queueHooks";
                    return L.get(t, n) || L.access(t, n, {
                        empty: g.Callbacks("once memory").add(function () {
                            L.remove(t, [e + "queue", n])
                        })
                    })
                }
            }), g.fn.extend({
                queue: function (t, e) {
                    var n = 2;
                    return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? g.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                        var n = g.queue(this, t, e);
                        g._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && g.dequeue(this, t)
                    })
                }, dequeue: function (t) {
                    return this.each(function () {
                        g.dequeue(this, t)
                    })
                }, clearQueue: function (t) {
                    return this.queue(t || "fx", [])
                }, promise: function (t, e) {
                    var n, r = 1, i = g.Deferred(), o = this, a = this.length, s = function () {
                        --r || i.resolveWith(o, [o])
                    };
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) (n = L.get(o[a], t + "queueHooks")) && n.empty && (r++, n.empty.add(s));
                    return s(), i.promise(e)
                }
            });
            var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, U = ["Top", "Right", "Bottom", "Left"],
                B = function (t, e) {
                    return t = e || t, "none" === g.css(t, "display") || !g.contains(t.ownerDocument, t)
                }, z = /^(?:checkbox|radio)$/i;
            !function () {
                var t = d.createDocumentFragment().appendChild(d.createElement("div")), e = d.createElement("input");
                e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), h.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
            }();
            h.focusinBubbles = "onfocusin" in n;
            var V = /^key/, X = /^(?:mouse|pointer|contextmenu)|click/, Y = /^(?:focusinfocus|focusoutblur)$/,
                G = /^([^.]*)(?:\.(.+)|)$/;

            function J() {
                return !0
            }

            function K() {
                return !1
            }

            function Q() {
                try {
                    return d.activeElement
                } catch (t) {
                }
            }

            g.event = {
                global: {},
                add: function (t, e, n, r, i) {
                    var o, a, s, l, u, c, f, p, h, d, v, m = L.get(t);
                    if (m) for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = g.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (e) {
                        return void 0 !== g && g.event.triggered !== e.type ? g.event.dispatch.apply(t, arguments) : void 0
                    }), u = (e = (e || "").match(D) || [""]).length; u--;) h = v = (s = G.exec(e[u]) || [])[1], d = (s[2] || "").split(".").sort(), h && (f = g.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = g.event.special[h] || {}, c = g.extend({
                        type: h,
                        origType: v,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && g.expr.match.needsContext.test(i),
                        namespace: d.join(".")
                    }, o), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, d, a) || t.addEventListener && t.addEventListener(h, a, !1)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), g.event.global[h] = !0)
                },
                remove: function (t, e, n, r, i) {
                    var o, a, s, l, u, c, f, p, h, d, v, m = L.hasData(t) && L.get(t);
                    if (m && (l = m.events)) {
                        for (u = (e = (e || "").match(D) || [""]).length; u--;) if (h = v = (s = G.exec(e[u]) || [])[1], d = (s[2] || "").split(".").sort(), h) {
                            for (f = g.event.special[h] || {}, p = l[h = (r ? f.delegateType : f.bindType) || h] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && v !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(t, c));
                            a && !p.length && (f.teardown && !1 !== f.teardown.call(t, d, m.handle) || g.removeEvent(t, h, m.handle), delete l[h])
                        } else for (h in l) g.event.remove(t, h + e[u], n, r, !0);
                        g.isEmptyObject(l) && (delete m.handle, L.remove(t, "events"))
                    }
                },
                trigger: function (t, e, r, i) {
                    var o, a, s, l, u, c, f, h = [r || d], v = p.call(t, "type") ? t.type : t,
                        m = p.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (a = s = r = r || d, 3 !== r.nodeType && 8 !== r.nodeType && !Y.test(v + g.event.triggered) && (v.indexOf(".") >= 0 && (v = (m = v.split(".")).shift(), m.sort()), u = v.indexOf(":") < 0 && "on" + v, (t = t[g.expando] ? t : new g.Event(v, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), e = null == e ? [t] : g.makeArray(e, [t]), f = g.event.special[v] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, e))) {
                        if (!i && !f.noBubble && !g.isWindow(r)) {
                            for (l = f.delegateType || v, Y.test(l + v) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
                            s === (r.ownerDocument || d) && h.push(s.defaultView || s.parentWindow || n)
                        }
                        for (o = 0; (a = h[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : f.bindType || v, (c = (L.get(a, "events") || {})[t.type] && L.get(a, "handle")) && c.apply(a, e), (c = u && a[u]) && c.apply && g.acceptData(a) && (t.result = c.apply(a, e), !1 === t.result && t.preventDefault());
                        return t.type = v, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), e) || !g.acceptData(r) || u && g.isFunction(r[v]) && !g.isWindow(r) && ((s = r[u]) && (r[u] = null), g.event.triggered = v, r[v](), g.event.triggered = void 0, s && (r[u] = s)), t.result
                    }
                },
                dispatch: function (t) {
                    t = g.event.fix(t);
                    var e, n, r, i, o, s, l = a.call(arguments), u = (L.get(this, "events") || {})[t.type] || [],
                        c = g.event.special[t.type] || {};
                    if (l[0] = t, t.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                        for (s = g.event.handlers.call(this, t, u), e = 0; (i = s[e++]) && !t.isPropagationStopped();) for (t.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(o.namespace) || (t.handleObj = o, t.data = o.data, void 0 !== (r = ((g.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (t.result = r) && (t.preventDefault(), t.stopPropagation()));
                        return c.postDispatch && c.postDispatch.call(this, t), t.result
                    }
                },
                handlers: function (t, e) {
                    var n, r, i, o, a = [], s = e.delegateCount, l = t.target;
                    if (s && l.nodeType && (!t.button || "click" !== t.type)) for (; l !== this; l = l.parentNode || this) if (!0 !== l.disabled || "click" !== t.type) {
                        for (r = [], n = 0; n < s; n++) void 0 === r[i = (o = e[n]).selector + " "] && (r[i] = o.needsContext ? g(i, this).index(l) >= 0 : g.find(i, this, null, [l]).length), r[i] && r.push(o);
                        r.length && a.push({elem: l, handlers: r})
                    }
                    return s < e.length && a.push({elem: this, handlers: e.slice(s)}), a
                },
                props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                fixHooks: {},
                keyHooks: {
                    props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                        return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                    }
                },
                mouseHooks: {
                    props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                    filter: function (t, e) {
                        var n, r, i, o = e.button;
                        return null == t.pageX && null != e.clientX && (r = (n = t.target.ownerDocument || d).documentElement, i = n.body, t.pageX = e.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                    }
                },
                fix: function (t) {
                    if (t[g.expando]) return t;
                    var e, n, r, i = t.type, o = t, a = this.fixHooks[i];
                    for (a || (this.fixHooks[i] = a = X.test(i) ? this.mouseHooks : V.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new g.Event(o), e = r.length; e--;) t[n = r[e]] = o[n];
                    return t.target || (t.target = d), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
                },
                special: {
                    load: {noBubble: !0}, focus: {
                        trigger: function () {
                            if (this !== Q() && this.focus) return this.focus(), !1
                        }, delegateType: "focusin"
                    }, blur: {
                        trigger: function () {
                            if (this === Q() && this.blur) return this.blur(), !1
                        }, delegateType: "focusout"
                    }, click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && g.nodeName(this, "input")) return this.click(), !1
                        }, _default: function (t) {
                            return g.nodeName(t.target, "a")
                        }
                    }, beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                        }
                    }
                },
                simulate: function (t, e, n, r) {
                    var i = g.extend(new g.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
                    r ? g.event.trigger(i, null, e) : g.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
                }
            }, g.removeEvent = function (t, e, n) {
                t.removeEventListener && t.removeEventListener(e, n, !1)
            }, g.Event = function (t, e) {
                if (!(this instanceof g.Event)) return new g.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? J : K) : this.type = t, e && g.extend(this, e), this.timeStamp = t && t.timeStamp || g.now(), this[g.expando] = !0
            }, g.Event.prototype = {
                isDefaultPrevented: K,
                isPropagationStopped: K,
                isImmediatePropagationStopped: K,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = J, t && t.preventDefault && t.preventDefault()
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = J, t && t.stopPropagation && t.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = J, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, g.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function (t, e) {
                g.event.special[t] = {
                    delegateType: e, bindType: e, handle: function (t) {
                        var n, r = t.relatedTarget, i = t.handleObj;
                        return r && (r === this || g.contains(this, r)) || (t.type = i.origType, n = i.handler.apply(this, arguments), t.type = e), n
                    }
                }
            }), h.focusinBubbles || g.each({focus: "focusin", blur: "focusout"}, function (t, e) {
                var n = function (t) {
                    g.event.simulate(e, t.target, g.event.fix(t), !0)
                };
                g.event.special[e] = {
                    setup: function () {
                        var r = this.ownerDocument || this, i = L.access(r, e);
                        i || r.addEventListener(t, n, !0), L.access(r, e, (i || 0) + 1)
                    }, teardown: function () {
                        var r = this.ownerDocument || this, i = L.access(r, e) - 1;
                        i ? L.access(r, e, i) : (r.removeEventListener(t, n, !0), L.remove(r, e))
                    }
                }
            }), g.fn.extend({
                on: function (t, e, n, r, i) {
                    var o, a;
                    if ("object" == typeof t) {
                        for (a in"string" != typeof e && (n = n || e, e = void 0), t) this.on(a, e, n, t[a], i);
                        return this
                    }
                    if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), !1 === r) r = K; else if (!r) return this;
                    return 1 === i && (o = r, (r = function (t) {
                        return g().off(t), o.apply(this, arguments)
                    }).guid = o.guid || (o.guid = g.guid++)), this.each(function () {
                        g.event.add(this, t, r, n, e)
                    })
                }, one: function (t, e, n, r) {
                    return this.on(t, e, n, r, 1)
                }, off: function (t, e, n) {
                    var r, i;
                    if (t && t.preventDefault && t.handleObj) return r = t.handleObj, g(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                    if ("object" == typeof t) {
                        for (i in t) this.off(i, e, t[i]);
                        return this
                    }
                    return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = K), this.each(function () {
                        g.event.remove(this, t, n, e)
                    })
                }, trigger: function (t, e) {
                    return this.each(function () {
                        g.event.trigger(t, e, this)
                    })
                }, triggerHandler: function (t, e) {
                    var n = this[0];
                    if (n) return g.event.trigger(t, e, n, !0)
                }
            });
            var Z = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, tt = /<([\w:]+)/,
                et = /<|&#?\w+;/, nt = /<(?:script|style|link)/i, rt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                it = /^$|\/(?:java|ecma)script/i, ot = /^true\/(.*)/, at = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                st = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };

            function lt(t, e) {
                return g.nodeName(t, "table") && g.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
            }

            function ut(t) {
                return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
            }

            function ct(t) {
                var e = ot.exec(t.type);
                return e ? t.type = e[1] : t.removeAttribute("type"), t
            }

            function ft(t, e) {
                for (var n = 0, r = t.length; n < r; n++) L.set(t[n], "globalEval", !e || L.get(e[n], "globalEval"))
            }

            function pt(t, e) {
                var n, r, i, o, a, s, l, u;
                if (1 === e.nodeType) {
                    if (L.hasData(t) && (o = L.access(t), a = L.set(e, o), u = o.events)) for (i in delete a.handle, a.events = {}, u) for (n = 0, r = u[i].length; n < r; n++) g.event.add(e, i, u[i][n]);
                    H.hasData(t) && (s = H.access(t), l = g.extend({}, s), H.set(e, l))
                }
            }

            function ht(t, e) {
                var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                return void 0 === e || e && g.nodeName(t, e) ? g.merge([t], n) : n
            }

            function dt(t, e) {
                var n = e.nodeName.toLowerCase();
                "input" === n && z.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
            }

            st.optgroup = st.option, st.tbody = st.tfoot = st.colgroup = st.caption = st.thead, st.th = st.td, g.extend({
                clone: function (t, e, n) {
                    var r, i, o, a, s = t.cloneNode(!0), l = g.contains(t.ownerDocument, t);
                    if (!(h.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || g.isXMLDoc(t))) for (a = ht(s), r = 0, i = (o = ht(t)).length; r < i; r++) dt(o[r], a[r]);
                    if (e) if (n) for (o = o || ht(t), a = a || ht(s), r = 0, i = o.length; r < i; r++) pt(o[r], a[r]); else pt(t, s);
                    return (a = ht(s, "script")).length > 0 && ft(a, !l && ht(t, "script")), s
                }, buildFragment: function (t, e, n, r) {
                    for (var i, o, a, s, l, u, c = e.createDocumentFragment(), f = [], p = 0, h = t.length; p < h; p++) if ((i = t[p]) || 0 === i) if ("object" === g.type(i)) g.merge(f, i.nodeType ? [i] : i); else if (et.test(i)) {
                        for (o = o || c.appendChild(e.createElement("div")), a = (tt.exec(i) || ["", ""])[1].toLowerCase(), s = st[a] || st._default, o.innerHTML = s[1] + i.replace(Z, "<$1></$2>") + s[2], u = s[0]; u--;) o = o.lastChild;
                        g.merge(f, o.childNodes), (o = c.firstChild).textContent = ""
                    } else f.push(e.createTextNode(i));
                    for (c.textContent = "", p = 0; i = f[p++];) if ((!r || -1 === g.inArray(i, r)) && (l = g.contains(i.ownerDocument, i), o = ht(c.appendChild(i), "script"), l && ft(o), n)) for (u = 0; i = o[u++];) it.test(i.type || "") && n.push(i);
                    return c
                }, cleanData: function (t) {
                    for (var e, n, r, i, o = g.event.special, a = 0; void 0 !== (n = t[a]); a++) {
                        if (g.acceptData(n) && (i = n[L.expando]) && (e = L.cache[i])) {
                            if (e.events) for (r in e.events) o[r] ? g.event.remove(n, r) : g.removeEvent(n, r, e.handle);
                            L.cache[i] && delete L.cache[i]
                        }
                        delete H.cache[n[H.expando]]
                    }
                }
            }), g.fn.extend({
                text: function (t) {
                    return P(this, function (t) {
                        return void 0 === t ? g.text(this) : this.empty().each(function () {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                        })
                    }, null, t, arguments.length)
                }, append: function () {
                    return this.domManip(arguments, function (t) {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || lt(this, t).appendChild(t)
                    })
                }, prepend: function () {
                    return this.domManip(arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = lt(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                }, before: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this)
                    })
                }, after: function () {
                    return this.domManip(arguments, function (t) {
                        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                    })
                }, remove: function (t, e) {
                    for (var n, r = t ? g.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || g.cleanData(ht(n)), n.parentNode && (e && g.contains(n.ownerDocument, n) && ft(ht(n, "script")), n.parentNode.removeChild(n));
                    return this
                }, empty: function () {
                    for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (g.cleanData(ht(t, !1)), t.textContent = "");
                    return this
                }, clone: function (t, e) {
                    return t = null != t && t, e = null == e ? t : e, this.map(function () {
                        return g.clone(this, t, e)
                    })
                }, html: function (t) {
                    return P(this, function (t) {
                        var e = this[0] || {}, n = 0, r = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !nt.test(t) && !st[(tt.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = t.replace(Z, "<$1></$2>");
                            try {
                                for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (g.cleanData(ht(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) {
                            }
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                }, replaceWith: function () {
                    var t = arguments[0];
                    return this.domManip(arguments, function (e) {
                        t = this.parentNode, g.cleanData(ht(this)), t && t.replaceChild(e, this)
                    }), t && (t.length || t.nodeType) ? this : this.remove()
                }, detach: function (t) {
                    return this.remove(t, !0)
                }, domManip: function (t, e) {
                    t = s.apply([], t);
                    var n, r, i, o, a, l, u = 0, c = this.length, f = this, p = c - 1, d = t[0], v = g.isFunction(d);
                    if (v || c > 1 && "string" == typeof d && !h.checkClone && rt.test(d)) return this.each(function (n) {
                        var r = f.eq(n);
                        v && (t[0] = d.call(this, n, r.html())), r.domManip(t, e)
                    });
                    if (c && (r = (n = g.buildFragment(t, this[0].ownerDocument, !1, this)).firstChild, 1 === n.childNodes.length && (n = r), r)) {
                        for (o = (i = g.map(ht(n, "script"), ut)).length; u < c; u++) a = n, u !== p && (a = g.clone(a, !0, !0), o && g.merge(i, ht(a, "script"))), e.call(this[u], a, u);
                        if (o) for (l = i[i.length - 1].ownerDocument, g.map(i, ct), u = 0; u < o; u++) a = i[u], it.test(a.type || "") && !L.access(a, "globalEval") && g.contains(l, a) && (a.src ? g._evalUrl && g._evalUrl(a.src) : g.globalEval(a.textContent.replace(at, "")))
                    }
                    return this
                }
            }), g.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function (t, e) {
                g.fn[t] = function (t) {
                    for (var n, r = [], i = g(t), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), g(i[a])[e](n), l.apply(r, n.get());
                    return this.pushStack(r)
                }
            });
            var gt, vt = {};

            function mt(t, e) {
                var r, i = g(e.createElement(t)).appendTo(e.body),
                    o = n.getDefaultComputedStyle && (r = n.getDefaultComputedStyle(i[0])) ? r.display : g.css(i[0], "display");
                return i.detach(), o
            }

            function yt(t) {
                var e = d, n = vt[t];
                return n || ("none" !== (n = mt(t, e)) && n || ((e = (gt = (gt || g("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), n = mt(t, e), gt.detach()), vt[t] = n), n
            }

            var bt = /^margin/, xt = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"), wt = function (t) {
                return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null)
            };

            function Ct(t, e, n) {
                var r, i, o, a, s = t.style;
                return (n = n || wt(t)) && (a = n.getPropertyValue(e) || n[e]), n && ("" !== a || g.contains(t.ownerDocument, t) || (a = g.style(t, e)), xt.test(a) && bt.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
            }

            function Tt(t, e) {
                return {
                    get: function () {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            }

            !function () {
                var t, e, r = d.documentElement, i = d.createElement("div"), o = d.createElement("div");

                function a() {
                    o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", r.appendChild(i);
                    var a = n.getComputedStyle(o, null);
                    t = "1%" !== a.top, e = "4px" === a.width, r.removeChild(i)
                }

                o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === o.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(o), n.getComputedStyle && g.extend(h, {
                    pixelPosition: function () {
                        return a(), t
                    }, boxSizingReliable: function () {
                        return null == e && a(), e
                    }, reliableMarginRight: function () {
                        var t, e = o.appendChild(d.createElement("div"));
                        return e.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", o.style.width = "1px", r.appendChild(i), t = !parseFloat(n.getComputedStyle(e, null).marginRight), r.removeChild(i), o.removeChild(e), t
                    }
                }))
            }(), g.swap = function (t, e, n, r) {
                var i, o, a = {};
                for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                for (o in i = n.apply(t, r || []), e) t.style[o] = a[o];
                return i
            };
            var kt = /^(none|table(?!-c[ea]).+)/, _t = new RegExp("^(" + W + ")(.*)$", "i"),
                St = new RegExp("^([+-])=(" + W + ")", "i"),
                Et = {position: "absolute", visibility: "hidden", display: "block"},
                $t = {letterSpacing: "0", fontWeight: "400"}, Nt = ["Webkit", "O", "Moz", "ms"];

            function At(t, e) {
                if (e in t) return e;
                for (var n = e[0].toUpperCase() + e.slice(1), r = e, i = Nt.length; i--;) if ((e = Nt[i] + n) in t) return e;
                return r
            }

            function jt(t, e, n) {
                var r = _t.exec(e);
                return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
            }

            function Dt(t, e, n, r, i) {
                for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += g.css(t, n + U[o], !0, i)), r ? ("content" === n && (a -= g.css(t, "padding" + U[o], !0, i)), "margin" !== n && (a -= g.css(t, "border" + U[o] + "Width", !0, i))) : (a += g.css(t, "padding" + U[o], !0, i), "padding" !== n && (a += g.css(t, "border" + U[o] + "Width", !0, i)));
                return a
            }

            function Ot(t, e, n) {
                var r = !0, i = "width" === e ? t.offsetWidth : t.offsetHeight, o = wt(t),
                    a = "border-box" === g.css(t, "boxSizing", !1, o);
                if (i <= 0 || null == i) {
                    if (((i = Ct(t, e, o)) < 0 || null == i) && (i = t.style[e]), xt.test(i)) return i;
                    r = a && (h.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
                }
                return i + Dt(t, e, n || (a ? "border" : "content"), r, o) + "px"
            }

            function Rt(t, e) {
                for (var n, r, i, o = [], a = 0, s = t.length; a < s; a++) (r = t[a]).style && (o[a] = L.get(r, "olddisplay"), n = r.style.display, e ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && B(r) && (o[a] = L.access(r, "olddisplay", yt(r.nodeName)))) : (i = B(r), "none" === n && i || L.set(r, "olddisplay", i ? n : g.css(r, "display"))));
                for (a = 0; a < s; a++) (r = t[a]).style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[a] || "" : "none"));
                return t
            }

            function Pt(t, e, n, r, i) {
                return new Pt.prototype.init(t, e, n, r, i)
            }

            g.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var n = Ct(t, "opacity");
                                return "" === n ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {float: "cssFloat"},
                style: function (t, e, n, r) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var i, o, a, s = g.camelCase(e), l = t.style;
                        if (e = g.cssProps[s] || (g.cssProps[s] = At(l, s)), a = g.cssHooks[e] || g.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : l[e];
                        "string" === (o = typeof n) && (i = St.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(g.css(t, e)), o = "number"), null != n && n == n && ("number" !== o || g.cssNumber[s] || (n += "px"), h.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (l[e] = n))
                    }
                },
                css: function (t, e, n, r) {
                    var i, o, a, s = g.camelCase(e);
                    return e = g.cssProps[s] || (g.cssProps[s] = At(t.style, s)), (a = g.cssHooks[e] || g.cssHooks[s]) && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = Ct(t, e, r)), "normal" === i && e in $t && (i = $t[e]), "" === n || n ? (o = parseFloat(i), !0 === n || g.isNumeric(o) ? o || 0 : i) : i
                }
            }), g.each(["height", "width"], function (t, e) {
                g.cssHooks[e] = {
                    get: function (t, n, r) {
                        if (n) return kt.test(g.css(t, "display")) && 0 === t.offsetWidth ? g.swap(t, Et, function () {
                            return Ot(t, e, r)
                        }) : Ot(t, e, r)
                    }, set: function (t, n, r) {
                        var i = r && wt(t);
                        return jt(0, n, r ? Dt(t, e, r, "border-box" === g.css(t, "boxSizing", !1, i), i) : 0)
                    }
                }
            }), g.cssHooks.marginRight = Tt(h.reliableMarginRight, function (t, e) {
                if (e) return g.swap(t, {display: "inline-block"}, Ct, [t, "marginRight"])
            }), g.each({margin: "", padding: "", border: "Width"}, function (t, e) {
                g.cssHooks[t + e] = {
                    expand: function (n) {
                        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[t + U[r] + e] = o[r] || o[r - 2] || o[0];
                        return i
                    }
                }, bt.test(t) || (g.cssHooks[t + e].set = jt)
            }), g.fn.extend({
                css: function (t, e) {
                    return P(this, function (t, e, n) {
                        var r, i, o = {}, a = 0;
                        if (g.isArray(e)) {
                            for (r = wt(t), i = e.length; a < i; a++) o[e[a]] = g.css(t, e[a], !1, r);
                            return o
                        }
                        return void 0 !== n ? g.style(t, e, n) : g.css(t, e)
                    }, t, e, arguments.length > 1)
                }, show: function () {
                    return Rt(this, !0)
                }, hide: function () {
                    return Rt(this)
                }, toggle: function (t) {
                    return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                        B(this) ? g(this).show() : g(this).hide()
                    })
                }
            }), g.Tween = Pt, Pt.prototype = {
                constructor: Pt, init: function (t, e, n, r, i, o) {
                    this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (g.cssNumber[n] ? "" : "px")
                }, cur: function () {
                    var t = Pt.propHooks[this.prop];
                    return t && t.get ? t.get(this) : Pt.propHooks._default.get(this)
                }, run: function (t) {
                    var e, n = Pt.propHooks[this.prop];
                    return this.options.duration ? this.pos = e = g.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Pt.propHooks._default.set(this), this
                }
            }, Pt.prototype.init.prototype = Pt.prototype, Pt.propHooks = {
                _default: {
                    get: function (t) {
                        var e;
                        return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = g.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
                    }, set: function (t) {
                        g.fx.step[t.prop] ? g.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[g.cssProps[t.prop]] || g.cssHooks[t.prop]) ? g.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                    }
                }
            }, Pt.propHooks.scrollTop = Pt.propHooks.scrollLeft = {
                set: function (t) {
                    t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                }
            }, g.easing = {
                linear: function (t) {
                    return t
                }, swing: function (t) {
                    return .5 - Math.cos(t * Math.PI) / 2
                }
            }, g.fx = Pt.prototype.init, g.fx.step = {};
            var It, Lt, Ht = /^(?:toggle|show|hide)$/, Ft = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
                qt = /queueHooks$/, Mt = [function (t, e, n) {
                    var r, i, o, a, s, l, u, c = this, f = {}, p = t.style, h = t.nodeType && B(t), d = L.get(t, "fxshow");
                    n.queue || (null == (s = g._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                        s.unqueued || l()
                    }), s.unqueued++, c.always(function () {
                        c.always(function () {
                            s.unqueued--, g.queue(t, "fx").length || s.empty.fire()
                        })
                    }));
                    1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = g.css(t, "display"), "inline" === ("none" === u ? L.get(t, "olddisplay") || yt(t.nodeName) : u) && "none" === g.css(t, "float") && (p.display = "inline-block"));
                    n.overflow && (p.overflow = "hidden", c.always(function () {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    }));
                    for (r in e) if (i = e[r], Ht.exec(i)) {
                        if (delete e[r], o = o || "toggle" === i, i === (h ? "hide" : "show")) {
                            if ("show" !== i || !d || void 0 === d[r]) continue;
                            h = !0
                        }
                        f[r] = d && d[r] || g.style(t, r)
                    } else u = void 0;
                    if (g.isEmptyObject(f)) "inline" === ("none" === u ? yt(t.nodeName) : u) && (p.display = u); else for (r in d ? "hidden" in d && (h = d.hidden) : d = L.access(t, "fxshow", {}), o && (d.hidden = !h), h ? g(t).show() : c.done(function () {
                        g(t).hide()
                    }), c.done(function () {
                        var e;
                        for (e in L.remove(t, "fxshow"), f) g.style(t, e, f[e])
                    }), f) a = zt(h ? d[r] : 0, r, c), r in d || (d[r] = a.start, h && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
                }], Wt = {
                    "*": [function (t, e) {
                        var n = this.createTween(t, e), r = n.cur(), i = Ft.exec(e),
                            o = i && i[3] || (g.cssNumber[t] ? "" : "px"),
                            a = (g.cssNumber[t] || "px" !== o && +r) && Ft.exec(g.css(n.elem, t)), s = 1, l = 20;
                        if (a && a[3] !== o) {
                            o = o || a[3], i = i || [], a = +r || 1;
                            do {
                                a /= s = s || ".5", g.style(n.elem, t, a + o)
                            } while (s !== (s = n.cur() / r) && 1 !== s && --l)
                        }
                        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
                    }]
                };

            function Ut() {
                return setTimeout(function () {
                    It = void 0
                }), It = g.now()
            }

            function Bt(t, e) {
                var n, r = 0, i = {height: t};
                for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = U[r])] = i["padding" + n] = t;
                return e && (i.opacity = i.width = t), i
            }

            function zt(t, e, n) {
                for (var r, i = (Wt[e] || []).concat(Wt["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, e, t)) return r
            }

            function Vt(t, e, n) {
                var r, i, o = 0, a = Mt.length, s = g.Deferred().always(function () {
                    delete l.elem
                }), l = function () {
                    if (i) return !1;
                    for (var e = It || Ut(), n = Math.max(0, u.startTime + u.duration - e), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(r);
                    return s.notifyWith(t, [u, r, n]), r < 1 && a ? n : (s.resolveWith(t, [u]), !1)
                }, u = s.promise({
                    elem: t,
                    props: g.extend({}, e),
                    opts: g.extend(!0, {specialEasing: {}}, n),
                    originalProperties: e,
                    originalOptions: n,
                    startTime: It || Ut(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function (e, n) {
                        var r = g.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                        return u.tweens.push(r), r
                    },
                    stop: function (e) {
                        var n = 0, r = e ? u.tweens.length : 0;
                        if (i) return this;
                        for (i = !0; n < r; n++) u.tweens[n].run(1);
                        return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
                    }
                }), c = u.props;
                for (!function (t, e) {
                    var n, r, i, o, a;
                    for (n in t) if (i = e[r = g.camelCase(n)], o = t[n], g.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), (a = g.cssHooks[r]) && "expand" in a) for (n in o = a.expand(o), delete t[r], o) n in t || (t[n] = o[n], e[n] = i); else e[r] = i
                }(c, u.opts.specialEasing); o < a; o++) if (r = Mt[o].call(u, t, c, u.opts)) return r;
                return g.map(c, zt, u), g.isFunction(u.opts.start) && u.opts.start.call(t, u), g.fx.timer(g.extend(l, {
                    elem: t,
                    anim: u,
                    queue: u.opts.queue
                })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
            }

            g.Animation = g.extend(Vt, {
                tweener: function (t, e) {
                    g.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                    for (var n, r = 0, i = t.length; r < i; r++) n = t[r], Wt[n] = Wt[n] || [], Wt[n].unshift(e)
                }, prefilter: function (t, e) {
                    e ? Mt.unshift(t) : Mt.push(t)
                }
            }), g.speed = function (t, e, n) {
                var r = t && "object" == typeof t ? g.extend({}, t) : {
                    complete: n || !n && e || g.isFunction(t) && t,
                    duration: t,
                    easing: n && e || e && !g.isFunction(e) && e
                };
                return r.duration = g.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in g.fx.speeds ? g.fx.speeds[r.duration] : g.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                    g.isFunction(r.old) && r.old.call(this), r.queue && g.dequeue(this, r.queue)
                }, r
            }, g.fn.extend({
                fadeTo: function (t, e, n, r) {
                    return this.filter(B).css("opacity", 0).show().end().animate({opacity: e}, t, n, r)
                }, animate: function (t, e, n, r) {
                    var i = g.isEmptyObject(t), o = g.speed(e, n, r), a = function () {
                        var e = Vt(this, g.extend({}, t), o);
                        (i || L.get(this, "finish")) && e.stop(!0)
                    };
                    return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                }, stop: function (t, e, n) {
                    var r = function (t) {
                        var e = t.stop;
                        delete t.stop, e(n)
                    };
                    return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                        var e = !0, i = null != t && t + "queueHooks", o = g.timers, a = L.get(this);
                        if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && qt.test(i) && r(a[i]);
                        for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                        !e && n || g.dequeue(this, t)
                    })
                }, finish: function (t) {
                    return !1 !== t && (t = t || "fx"), this.each(function () {
                        var e, n = L.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = g.timers,
                            a = r ? r.length : 0;
                        for (n.finish = !0, g.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < a; e++) r[e] && r[e].finish && r[e].finish.call(this);
                        delete n.finish
                    })
                }
            }), g.each(["toggle", "show", "hide"], function (t, e) {
                var n = g.fn[e];
                g.fn[e] = function (t, r, i) {
                    return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(Bt(e, !0), t, r, i)
                }
            }), g.each({
                slideDown: Bt("show"),
                slideUp: Bt("hide"),
                slideToggle: Bt("toggle"),
                fadeIn: {opacity: "show"},
                fadeOut: {opacity: "hide"},
                fadeToggle: {opacity: "toggle"}
            }, function (t, e) {
                g.fn[t] = function (t, n, r) {
                    return this.animate(e, t, n, r)
                }
            }), g.timers = [], g.fx.tick = function () {
                var t, e = 0, n = g.timers;
                for (It = g.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);
                n.length || g.fx.stop(), It = void 0
            }, g.fx.timer = function (t) {
                g.timers.push(t), t() ? g.fx.start() : g.timers.pop()
            }, g.fx.interval = 13, g.fx.start = function () {
                Lt || (Lt = setInterval(g.fx.tick, g.fx.interval))
            }, g.fx.stop = function () {
                clearInterval(Lt), Lt = null
            }, g.fx.speeds = {slow: 600, fast: 200, _default: 400}, g.fn.delay = function (t, e) {
                return t = g.fx && g.fx.speeds[t] || t, e = e || "fx", this.queue(e, function (e, n) {
                    var r = setTimeout(e, t);
                    n.stop = function () {
                        clearTimeout(r)
                    }
                })
            }, function () {
                var t = d.createElement("input"), e = d.createElement("select"),
                    n = e.appendChild(d.createElement("option"));
                t.type = "checkbox", h.checkOn = "" !== t.value, h.optSelected = n.selected, e.disabled = !0, h.optDisabled = !n.disabled, (t = d.createElement("input")).value = "t", t.type = "radio", h.radioValue = "t" === t.value
            }();
            var Xt, Yt = g.expr.attrHandle;
            g.fn.extend({
                attr: function (t, e) {
                    return P(this, g.attr, t, e, arguments.length > 1)
                }, removeAttr: function (t) {
                    return this.each(function () {
                        g.removeAttr(this, t)
                    })
                }
            }), g.extend({
                attr: function (t, e, n) {
                    var r, i, o = t.nodeType;
                    if (t && 3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? g.prop(t, e, n) : (1 === o && g.isXMLDoc(t) || (e = e.toLowerCase(), r = g.attrHooks[e] || (g.expr.match.bool.test(e) ? Xt : void 0)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = g.find.attr(t, e)) ? void 0 : i : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void g.removeAttr(t, e))
                }, removeAttr: function (t, e) {
                    var n, r, i = 0, o = e && e.match(D);
                    if (o && 1 === t.nodeType) for (; n = o[i++];) r = g.propFix[n] || n, g.expr.match.bool.test(n) && (t[r] = !1), t.removeAttribute(n)
                }, attrHooks: {
                    type: {
                        set: function (t, e) {
                            if (!h.radioValue && "radio" === e && g.nodeName(t, "input")) {
                                var n = t.value;
                                return t.setAttribute("type", e), n && (t.value = n), e
                            }
                        }
                    }
                }
            }), Xt = {
                set: function (t, e, n) {
                    return !1 === e ? g.removeAttr(t, n) : t.setAttribute(n, n), n
                }
            }, g.each(g.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var n = Yt[e] || g.find.attr;
                Yt[e] = function (t, e, r) {
                    var i, o;
                    return r || (o = Yt[e], Yt[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, Yt[e] = o), i
                }
            });
            var Gt = /^(?:input|select|textarea|button)$/i;
            g.fn.extend({
                prop: function (t, e) {
                    return P(this, g.prop, t, e, arguments.length > 1)
                }, removeProp: function (t) {
                    return this.each(function () {
                        delete this[g.propFix[t] || t]
                    })
                }
            }), g.extend({
                propFix: {for: "htmlFor", class: "className"}, prop: function (t, e, n) {
                    var r, i, o = t.nodeType;
                    if (t && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !g.isXMLDoc(t)) && (e = g.propFix[e] || e, i = g.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
                }, propHooks: {
                    tabIndex: {
                        get: function (t) {
                            return t.hasAttribute("tabindex") || Gt.test(t.nodeName) || t.href ? t.tabIndex : -1
                        }
                    }
                }
            }), h.optSelected || (g.propHooks.selected = {
                get: function (t) {
                    var e = t.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null
                }
            }), g.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                g.propFix[this.toLowerCase()] = this
            });
            var Jt = /[\t\r\n\f]/g;
            g.fn.extend({
                addClass: function (t) {
                    var e, n, r, i, o, a, s = "string" == typeof t && t, l = 0, u = this.length;
                    if (g.isFunction(t)) return this.each(function (e) {
                        g(this).addClass(t.call(this, e, this.className))
                    });
                    if (s) for (e = (t || "").match(D) || []; l < u; l++) if (r = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(Jt, " ") : " ")) {
                        for (o = 0; i = e[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        a = g.trim(r), n.className !== a && (n.className = a)
                    }
                    return this
                }, removeClass: function (t) {
                    var e, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof t && t, l = 0,
                        u = this.length;
                    if (g.isFunction(t)) return this.each(function (e) {
                        g(this).removeClass(t.call(this, e, this.className))
                    });
                    if (s) for (e = (t || "").match(D) || []; l < u; l++) if (r = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(Jt, " ") : "")) {
                        for (o = 0; i = e[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
                        a = t ? g.trim(r) : "", n.className !== a && (n.className = a)
                    }
                    return this
                }, toggleClass: function (t, e) {
                    var n = typeof t;
                    return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : g.isFunction(t) ? this.each(function (n) {
                        g(this).toggleClass(t.call(this, n, this.className, e), e)
                    }) : this.each(function () {
                        if ("string" === n) for (var e, r = 0, i = g(this), o = t.match(D) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else "undefined" !== n && "boolean" !== n || (this.className && L.set(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : L.get(this, "__className__") || "")
                    })
                }, hasClass: function (t) {
                    for (var e = " " + t + " ", n = 0, r = this.length; n < r; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Jt, " ").indexOf(e) >= 0) return !0;
                    return !1
                }
            });
            var Kt = /\r/g;
            g.fn.extend({
                val: function (t) {
                    var e, n, r, i = this[0];
                    return arguments.length ? (r = g.isFunction(t), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (null == (i = r ? t.call(this, n, g(this).val()) : t) ? i = "" : "number" == typeof i ? i += "" : g.isArray(i) && (i = g.map(i, function (t) {
                            return null == t ? "" : t + ""
                        })), (e = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                    })) : i ? (e = g.valHooks[i.type] || g.valHooks[i.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(Kt, "") : null == n ? "" : n : void 0
                }
            }), g.extend({
                valHooks: {
                    option: {
                        get: function (t) {
                            var e = g.find.attr(t, "value");
                            return null != e ? e : g.trim(g.text(t))
                        }
                    }, select: {
                        get: function (t) {
                            for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, l = i < 0 ? s : o ? i : 0; l < s; l++) if (((n = r[l]).selected || l === i) && (h.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !g.nodeName(n.parentNode, "optgroup"))) {
                                if (e = g(n).val(), o) return e;
                                a.push(e)
                            }
                            return a
                        }, set: function (t, e) {
                            for (var n, r, i = t.options, o = g.makeArray(e), a = i.length; a--;) ((r = i[a]).selected = g.inArray(r.value, o) >= 0) && (n = !0);
                            return n || (t.selectedIndex = -1), o
                        }
                    }
                }
            }), g.each(["radio", "checkbox"], function () {
                g.valHooks[this] = {
                    set: function (t, e) {
                        if (g.isArray(e)) return t.checked = g.inArray(g(t).val(), e) >= 0
                    }
                }, h.checkOn || (g.valHooks[this].get = function (t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                })
            }), g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
                g.fn[e] = function (t, n) {
                    return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                }
            }), g.fn.extend({
                hover: function (t, e) {
                    return this.mouseenter(t).mouseleave(e || t)
                }, bind: function (t, e, n) {
                    return this.on(t, null, e, n)
                }, unbind: function (t, e) {
                    return this.off(t, null, e)
                }, delegate: function (t, e, n, r) {
                    return this.on(e, t, n, r)
                }, undelegate: function (t, e, n) {
                    return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                }
            });
            var Qt = g.now(), Zt = /\?/;
            g.parseJSON = function (t) {
                return JSON.parse(t + "")
            }, g.parseXML = function (t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = (new DOMParser).parseFromString(t, "text/xml")
                } catch (t) {
                    e = void 0
                }
                return e && !e.getElementsByTagName("parsererror").length || g.error("Invalid XML: " + t), e
            };
            var te = /#.*$/, ee = /([?&])_=[^&]*/, ne = /^(.*?):[ \t]*([^\r\n]*)$/gm, re = /^(?:GET|HEAD)$/,
                ie = /^\/\//, oe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, ae = {}, se = {},
                le = "*/".concat("*"), ue = n.location.href, ce = oe.exec(ue.toLowerCase()) || [];

            function fe(t) {
                return function (e, n) {
                    "string" != typeof e && (n = e, e = "*");
                    var r, i = 0, o = e.toLowerCase().match(D) || [];
                    if (g.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
                }
            }

            function pe(t, e, n, r) {
                var i = {}, o = t === se;

                function a(s) {
                    var l;
                    return i[s] = !0, g.each(t[s] || [], function (t, s) {
                        var u = s(e, n, r);
                        return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), a(u), !1)
                    }), l
                }

                return a(e.dataTypes[0]) || !i["*"] && a("*")
            }

            function he(t, e) {
                var n, r, i = g.ajaxSettings.flatOptions || {};
                for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
                return r && g.extend(!0, t, r), t
            }

            g.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: ue,
                    type: "GET",
                    isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ce[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": le,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {xml: /xml/, html: /html/, json: /json/},
                    responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                    converters: {"* text": String, "text html": !0, "text json": g.parseJSON, "text xml": g.parseXML},
                    flatOptions: {url: !0, context: !0}
                },
                ajaxSetup: function (t, e) {
                    return e ? he(he(t, g.ajaxSettings), e) : he(g.ajaxSettings, t)
                },
                ajaxPrefilter: fe(ae),
                ajaxTransport: fe(se),
                ajax: function (t, e) {
                    "object" == typeof t && (e = t, t = void 0), e = e || {};
                    var n, r, i, o, a, s, l, u, c = g.ajaxSetup({}, e), f = c.context || c,
                        p = c.context && (f.nodeType || f.jquery) ? g(f) : g.event, h = g.Deferred(),
                        d = g.Callbacks("once memory"), v = c.statusCode || {}, m = {}, y = {}, b = 0, x = "canceled",
                        w = {
                            readyState: 0, getResponseHeader: function (t) {
                                var e;
                                if (2 === b) {
                                    if (!o) for (o = {}; e = ne.exec(i);) o[e[1].toLowerCase()] = e[2];
                                    e = o[t.toLowerCase()]
                                }
                                return null == e ? null : e
                            }, getAllResponseHeaders: function () {
                                return 2 === b ? i : null
                            }, setRequestHeader: function (t, e) {
                                var n = t.toLowerCase();
                                return b || (t = y[n] = y[n] || t, m[t] = e), this
                            }, overrideMimeType: function (t) {
                                return b || (c.mimeType = t), this
                            }, statusCode: function (t) {
                                var e;
                                if (t) if (b < 2) for (e in t) v[e] = [v[e], t[e]]; else w.always(t[w.status]);
                                return this
                            }, abort: function (t) {
                                var e = t || x;
                                return n && n.abort(e), C(0, e), this
                            }
                        };
                    if (h.promise(w).complete = d.add, w.success = w.done, w.error = w.fail, c.url = ((t || c.url || ue) + "").replace(te, "").replace(ie, ce[1] + "//"), c.type = e.method || e.type || c.method || c.type, c.dataTypes = g.trim(c.dataType || "*").toLowerCase().match(D) || [""], null == c.crossDomain && (s = oe.exec(c.url.toLowerCase()), c.crossDomain = !(!s || s[1] === ce[1] && s[2] === ce[2] && (s[3] || ("http:" === s[1] ? "80" : "443")) === (ce[3] || ("http:" === ce[1] ? "80" : "443")))), c.data && c.processData && "string" != typeof c.data && (c.data = g.param(c.data, c.traditional)), pe(ae, c, e, w), 2 === b) return w;
                    for (u in(l = g.event && c.global) && 0 == g.active++ && g.event.trigger("ajaxStart"), c.type = c.type.toUpperCase(), c.hasContent = !re.test(c.type), r = c.url, c.hasContent || (c.data && (r = c.url += (Zt.test(r) ? "&" : "?") + c.data, delete c.data), !1 === c.cache && (c.url = ee.test(r) ? r.replace(ee, "$1_=" + Qt++) : r + (Zt.test(r) ? "&" : "?") + "_=" + Qt++)), c.ifModified && (g.lastModified[r] && w.setRequestHeader("If-Modified-Since", g.lastModified[r]), g.etag[r] && w.setRequestHeader("If-None-Match", g.etag[r])), (c.data && c.hasContent && !1 !== c.contentType || e.contentType) && w.setRequestHeader("Content-Type", c.contentType), w.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + le + "; q=0.01" : "") : c.accepts["*"]), c.headers) w.setRequestHeader(u, c.headers[u]);
                    if (c.beforeSend && (!1 === c.beforeSend.call(f, w, c) || 2 === b)) return w.abort();
                    for (u in x = "abort", {success: 1, error: 1, complete: 1}) w[u](c[u]);
                    if (n = pe(se, c, e, w)) {
                        w.readyState = 1, l && p.trigger("ajaxSend", [w, c]), c.async && c.timeout > 0 && (a = setTimeout(function () {
                            w.abort("timeout")
                        }, c.timeout));
                        try {
                            b = 1, n.send(m, C)
                        } catch (t) {
                            if (!(b < 2)) throw t;
                            C(-1, t)
                        }
                    } else C(-1, "No Transport");

                    function C(t, e, o, s) {
                        var u, m, y, x, C, T = e;
                        2 !== b && (b = 2, a && clearTimeout(a), n = void 0, i = s || "", w.readyState = t > 0 ? 4 : 0, u = t >= 200 && t < 300 || 304 === t, o && (x = function (t, e, n) {
                            for (var r, i, o, a, s = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                            if (r) for (i in s) if (s[i] && s[i].test(r)) {
                                l.unshift(i);
                                break
                            }
                            if (l[0] in n) o = l[0]; else {
                                for (i in n) {
                                    if (!l[0] || t.converters[i + " " + l[0]]) {
                                        o = i;
                                        break
                                    }
                                    a || (a = i)
                                }
                                o = o || a
                            }
                            if (o) return o !== l[0] && l.unshift(o), n[o]
                        }(c, w, o)), x = function (t, e, n, r) {
                            var i, o, a, s, l, u = {}, c = t.dataTypes.slice();
                            if (c[1]) for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
                            for (o = c.shift(); o;) if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                                if (!(a = u[l + " " + o] || u["* " + o])) for (i in u) if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                    !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                                if (!0 !== a) if (a && t.throws) e = a(e); else try {
                                    e = a(e)
                                } catch (t) {
                                    return {state: "parsererror", error: a ? t : "No conversion from " + l + " to " + o}
                                }
                            }
                            return {state: "success", data: e}
                        }(c, x, w, u), u ? (c.ifModified && ((C = w.getResponseHeader("Last-Modified")) && (g.lastModified[r] = C), (C = w.getResponseHeader("etag")) && (g.etag[r] = C)), 204 === t || "HEAD" === c.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = x.state, m = x.data, u = !(y = x.error))) : (y = T, !t && T || (T = "error", t < 0 && (t = 0))), w.status = t, w.statusText = (e || T) + "", u ? h.resolveWith(f, [m, T, w]) : h.rejectWith(f, [w, T, y]), w.statusCode(v), v = void 0, l && p.trigger(u ? "ajaxSuccess" : "ajaxError", [w, c, u ? m : y]), d.fireWith(f, [w, T]), l && (p.trigger("ajaxComplete", [w, c]), --g.active || g.event.trigger("ajaxStop")))
                    }

                    return w
                },
                getJSON: function (t, e, n) {
                    return g.get(t, e, n, "json")
                },
                getScript: function (t, e) {
                    return g.get(t, void 0, e, "script")
                }
            }), g.each(["get", "post"], function (t, e) {
                g[e] = function (t, n, r, i) {
                    return g.isFunction(n) && (i = i || r, r = n, n = void 0), g.ajax({
                        url: t,
                        type: e,
                        dataType: i,
                        data: n,
                        success: r
                    })
                }
            }), g._evalUrl = function (t) {
                return g.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
            }, g.fn.extend({
                wrapAll: function (t) {
                    var e;
                    return g.isFunction(t) ? this.each(function (e) {
                        g(this).wrapAll(t.call(this, e))
                    }) : (this[0] && (e = g(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                        return t
                    }).append(this)), this)
                }, wrapInner: function (t) {
                    return g.isFunction(t) ? this.each(function (e) {
                        g(this).wrapInner(t.call(this, e))
                    }) : this.each(function () {
                        var e = g(this), n = e.contents();
                        n.length ? n.wrapAll(t) : e.append(t)
                    })
                }, wrap: function (t) {
                    var e = g.isFunction(t);
                    return this.each(function (n) {
                        g(this).wrapAll(e ? t.call(this, n) : t)
                    })
                }, unwrap: function () {
                    return this.parent().each(function () {
                        g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
                    }).end()
                }
            }), g.expr.filters.hidden = function (t) {
                return t.offsetWidth <= 0 && t.offsetHeight <= 0
            }, g.expr.filters.visible = function (t) {
                return !g.expr.filters.hidden(t)
            };
            var de = /%20/g, ge = /\[\]$/, ve = /\r?\n/g, me = /^(?:submit|button|image|reset|file)$/i,
                ye = /^(?:input|select|textarea|keygen)/i;

            function be(t, e, n, r) {
                var i;
                if (g.isArray(e)) g.each(e, function (e, i) {
                    n || ge.test(t) ? r(t, i) : be(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
                }); else if (n || "object" !== g.type(e)) r(t, e); else for (i in e) be(t + "[" + i + "]", e[i], n, r)
            }

            g.param = function (t, e) {
                var n, r = [], i = function (t, e) {
                    e = g.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
                if (void 0 === e && (e = g.ajaxSettings && g.ajaxSettings.traditional), g.isArray(t) || t.jquery && !g.isPlainObject(t)) g.each(t, function () {
                    i(this.name, this.value)
                }); else for (n in t) be(n, t[n], e, i);
                return r.join("&").replace(de, "+")
            }, g.fn.extend({
                serialize: function () {
                    return g.param(this.serializeArray())
                }, serializeArray: function () {
                    return this.map(function () {
                        var t = g.prop(this, "elements");
                        return t ? g.makeArray(t) : this
                    }).filter(function () {
                        var t = this.type;
                        return this.name && !g(this).is(":disabled") && ye.test(this.nodeName) && !me.test(t) && (this.checked || !z.test(t))
                    }).map(function (t, e) {
                        var n = g(this).val();
                        return null == n ? null : g.isArray(n) ? g.map(n, function (t) {
                            return {name: e.name, value: t.replace(ve, "\r\n")}
                        }) : {name: e.name, value: n.replace(ve, "\r\n")}
                    }).get()
                }
            }), g.ajaxSettings.xhr = function () {
                try {
                    return new XMLHttpRequest
                } catch (t) {
                }
            };
            var xe = 0, we = {}, Ce = {0: 200, 1223: 204}, Te = g.ajaxSettings.xhr();
            n.attachEvent && n.attachEvent("onunload", function () {
                for (var t in we) we[t]()
            }), h.cors = !!Te && "withCredentials" in Te, h.ajax = Te = !!Te, g.ajaxTransport(function (t) {
                var e;
                if (h.cors || Te && !t.crossDomain) return {
                    send: function (n, r) {
                        var i, o = t.xhr(), a = ++xe;
                        if (o.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (i in t.xhrFields) o[i] = t.xhrFields[i];
                        for (i in t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) o.setRequestHeader(i, n[i]);
                        e = function (t) {
                            return function () {
                                e && (delete we[a], e = o.onload = o.onerror = null, "abort" === t ? o.abort() : "error" === t ? r(o.status, o.statusText) : r(Ce[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {text: o.responseText} : void 0, o.getAllResponseHeaders()))
                            }
                        }, o.onload = e(), o.onerror = e("error"), e = we[a] = e("abort");
                        try {
                            o.send(t.hasContent && t.data || null)
                        } catch (t) {
                            if (e) throw t
                        }
                    }, abort: function () {
                        e && e()
                    }
                }
            }), g.ajaxSetup({
                accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
                contents: {script: /(?:java|ecma)script/},
                converters: {
                    "text script": function (t) {
                        return g.globalEval(t), t
                    }
                }
            }), g.ajaxPrefilter("script", function (t) {
                void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
            }), g.ajaxTransport("script", function (t) {
                var e, n;
                if (t.crossDomain) return {
                    send: function (r, i) {
                        e = g("<script>").prop({
                            async: !0,
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                        }), d.head.appendChild(e[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            });
            var ke = [], _e = /(=)\?(?=&|$)|\?\?/;
            g.ajaxSetup({
                jsonp: "callback", jsonpCallback: function () {
                    var t = ke.pop() || g.expando + "_" + Qt++;
                    return this[t] = !0, t
                }
            }), g.ajaxPrefilter("json jsonp", function (t, e, r) {
                var i, o, a,
                    s = !1 !== t.jsonp && (_e.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && _e.test(t.data) && "data");
                if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = g.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(_e, "$1" + i) : !1 !== t.jsonp && (t.url += (Zt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                    return a || g.error(i + " was not called"), a[0]
                }, t.dataTypes[0] = "json", o = n[i], n[i] = function () {
                    a = arguments
                }, r.always(function () {
                    n[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, ke.push(i)), a && g.isFunction(o) && o(a[0]), a = o = void 0
                }), "script"
            }), g.parseHTML = function (t, e, n) {
                if (!t || "string" != typeof t) return null;
                "boolean" == typeof e && (n = e, e = !1), e = e || d;
                var r = T.exec(t), i = !n && [];
                return r ? [e.createElement(r[1])] : (r = g.buildFragment([t], e, i), i && i.length && g(i).remove(), g.merge([], r.childNodes))
            };
            var Se = g.fn.load;
            g.fn.load = function (t, e, n) {
                if ("string" != typeof t && Se) return Se.apply(this, arguments);
                var r, i, o, a = this, s = t.indexOf(" ");
                return s >= 0 && (r = g.trim(t.slice(s)), t = t.slice(0, s)), g.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && g.ajax({
                    url: t,
                    type: i,
                    dataType: "html",
                    data: e
                }).done(function (t) {
                    o = arguments, a.html(r ? g("<div>").append(g.parseHTML(t)).find(r) : t)
                }).complete(n && function (t, e) {
                    a.each(n, o || [t.responseText, e, t])
                }), this
            }, g.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                g.fn[e] = function (t) {
                    return this.on(e, t)
                }
            }), g.expr.filters.animated = function (t) {
                return g.grep(g.timers, function (e) {
                    return t === e.elem
                }).length
            };
            var Ee = n.document.documentElement;

            function $e(t) {
                return g.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
            }

            g.offset = {
                setOffset: function (t, e, n) {
                    var r, i, o, a, s, l, u = g.css(t, "position"), c = g(t), f = {};
                    "static" === u && (t.style.position = "relative"), s = c.offset(), o = g.css(t, "top"), l = g.css(t, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), g.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (f.top = e.top - s.top + a), null != e.left && (f.left = e.left - s.left + i), "using" in e ? e.using.call(t, f) : c.css(f)
                }
            }, g.fn.extend({
                offset: function (t) {
                    if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                        g.offset.setOffset(this, t, e)
                    });
                    var e, n, r = this[0], i = {top: 0, left: 0}, o = r && r.ownerDocument;
                    return o ? (e = o.documentElement, g.contains(e, r) ? (void 0 !== r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = $e(o), {
                        top: i.top + n.pageYOffset - e.clientTop,
                        left: i.left + n.pageXOffset - e.clientLeft
                    }) : i) : void 0
                }, position: function () {
                    if (this[0]) {
                        var t, e, n = this[0], r = {top: 0, left: 0};
                        return "fixed" === g.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), g.nodeName(t[0], "html") || (r = t.offset()), r.top += g.css(t[0], "borderTopWidth", !0), r.left += g.css(t[0], "borderLeftWidth", !0)), {
                            top: e.top - r.top - g.css(n, "marginTop", !0),
                            left: e.left - r.left - g.css(n, "marginLeft", !0)
                        }
                    }
                }, offsetParent: function () {
                    return this.map(function () {
                        for (var t = this.offsetParent || Ee; t && !g.nodeName(t, "html") && "static" === g.css(t, "position");) t = t.offsetParent;
                        return t || Ee
                    })
                }
            }), g.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
                var r = "pageYOffset" === e;
                g.fn[t] = function (i) {
                    return P(this, function (t, i, o) {
                        var a = $e(t);
                        if (void 0 === o) return a ? a[e] : t[i];
                        a ? a.scrollTo(r ? n.pageXOffset : o, r ? o : n.pageYOffset) : t[i] = o
                    }, t, i, arguments.length, null)
                }
            }), g.each(["top", "left"], function (t, e) {
                g.cssHooks[e] = Tt(h.pixelPosition, function (t, n) {
                    if (n) return n = Ct(t, e), xt.test(n) ? g(t).position()[e] + "px" : n
                })
            }), g.each({Height: "height", Width: "width"}, function (t, e) {
                g.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, r) {
                    g.fn[r] = function (r, i) {
                        var o = arguments.length && (n || "boolean" != typeof r),
                            a = n || (!0 === r || !0 === i ? "margin" : "border");
                        return P(this, function (e, n, r) {
                            var i;
                            return g.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? g.css(e, n, a) : g.style(e, n, r, a)
                        }, e, o ? r : void 0, o, null)
                    }
                })
            }), g.fn.size = function () {
                return this.length
            }, g.fn.andSelf = g.fn.addBack, void 0 === (r = function () {
                return g
            }.apply(e, [])) || (t.exports = r);
            var Ne = n.jQuery, Ae = n.$;
            return g.noConflict = function (t) {
                return n.$ === g && (n.$ = Ae), t && n.jQuery === g && (n.jQuery = Ne), g
            }, void 0 === i && (n.jQuery = n.$ = g), g
        })
    }, 13: function (t, e, n) {
        n(14), n(15), n(16), n(17), n(18), n(19), n(20), n(21), n(22), n(23), n(24), n(25)
    }, 14: function (t, e, n) {
        (function (t) {
            !function (t) {
                "use strict";
                t.fn.emulateTransitionEnd = function (e) {
                    var n = !1, r = this;
                    t(this).one("bsTransitionEnd", function () {
                        n = !0
                    });
                    return setTimeout(function () {
                        n || t(r).trigger(t.support.transition.end)
                    }, e), this
                }, t(function () {
                    t.support.transition = function () {
                        var t = document.createElement("bootstrap"), e = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            OTransition: "oTransitionEnd otransitionend",
                            transition: "transitionend"
                        };
                        for (var n in e) if (void 0 !== t.style[n]) return {end: e[n]};
                        return !1
                    }(), t.support.transition && (t.event.special.bsTransitionEnd = {
                        bindType: t.support.transition.end,
                        delegateType: t.support.transition.end,
                        handle: function (e) {
                            if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
                        }
                    })
                })
            }(t)
        }).call(e, n(5))
    }, 15: function (t, e, n) {
        (function (t) {
            !function (t) {
                "use strict";
                var e = '[data-dismiss="alert"]', n = function (n) {
                    t(n).on("click", e, this.close)
                };
                n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.close = function (e) {
                    var r = t(this), i = r.attr("data-target");
                    i || (i = (i = r.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, ""));
                    var o = t("#" === i ? [] : i);

                    function a() {
                        o.detach().trigger("closed.bs.alert").remove()
                    }

                    e && e.preventDefault(), o.length || (o = r.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", a).emulateTransitionEnd(n.TRANSITION_DURATION) : a())
                };
                var r = t.fn.alert;
                t.fn.alert = function (e) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.alert");
                        i || r.data("bs.alert", i = new n(this)), "string" == typeof e && i[e].call(r)
                    })
                }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
                    return t.fn.alert = r, this
                }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
            }(t)
        }).call(e, n(5))
    }, 16: function (t, e, n) {
        (function (t) {
            !function (t) {
                "use strict";
                var e = function (n, r) {
                    this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, r), this.isLoading = !1
                };

                function n(n) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.button"), o = "object" == typeof n && n;
                        i || r.data("bs.button", i = new e(this, o)), "toggle" == n ? i.toggle() : n && i.setState(n)
                    })
                }

                e.VERSION = "3.3.7", e.DEFAULTS = {loadingText: "loading..."}, e.prototype.setState = function (e) {
                    var n = "disabled", r = this.$element, i = r.is("input") ? "val" : "html", o = r.data();
                    e += "Text", null == o.resetText && r.data("resetText", r[i]()), setTimeout(t.proxy(function () {
                        r[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n).prop(n, !1))
                    }, this), 0)
                }, e.prototype.toggle = function () {
                    var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
                    if (e.length) {
                        var n = this.$element.find("input");
                        "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
                    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
                };
                var r = t.fn.button;
                t.fn.button = n, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
                    return t.fn.button = r, this
                }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                    var r = t(e.target).closest(".btn");
                    n.call(r, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
                }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                    t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
                })
            }(t)
        }).call(e, n(5))
    }, 17: function (t, e, n) {
        (function (t) {
            !function (t) {
                "use strict";
                var e = function (e, n) {
                    this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
                };

                function n(n) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.carousel"),
                            o = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n),
                            a = "string" == typeof n ? n : o.slide;
                        i || r.data("bs.carousel", i = new e(this, o)), "number" == typeof n ? i.to(n) : a ? i[a]() : o.interval && i.pause().cycle()
                    })
                }

                e.VERSION = "3.3.7", e.TRANSITION_DURATION = 600, e.DEFAULTS = {
                    interval: 5e3,
                    pause: "hover",
                    wrap: !0,
                    keyboard: !0
                }, e.prototype.keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName)) {
                        switch (t.which) {
                            case 37:
                                this.prev();
                                break;
                            case 39:
                                this.next();
                                break;
                            default:
                                return
                        }
                        t.preventDefault()
                    }
                }, e.prototype.cycle = function (e) {
                    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
                }, e.prototype.getItemIndex = function (t) {
                    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
                }, e.prototype.getItemForDirection = function (t, e) {
                    var n = this.getItemIndex(e);
                    if (("prev" == t && 0 === n || "next" == t && n == this.$items.length - 1) && !this.options.wrap) return e;
                    var r = (n + ("prev" == t ? -1 : 1)) % this.$items.length;
                    return this.$items.eq(r)
                }, e.prototype.to = function (t) {
                    var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                        e.to(t)
                    }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
                }, e.prototype.pause = function (e) {
                    return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
                }, e.prototype.next = function () {
                    if (!this.sliding) return this.slide("next")
                }, e.prototype.prev = function () {
                    if (!this.sliding) return this.slide("prev")
                }, e.prototype.slide = function (n, r) {
                    var i = this.$element.find(".item.active"), o = r || this.getItemForDirection(n, i),
                        a = this.interval, s = "next" == n ? "left" : "right", l = this;
                    if (o.hasClass("active")) return this.sliding = !1;
                    var u = o[0], c = t.Event("slide.bs.carousel", {relatedTarget: u, direction: s});
                    if (this.$element.trigger(c), !c.isDefaultPrevented()) {
                        if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                            this.$indicators.find(".active").removeClass("active");
                            var f = t(this.$indicators.children()[this.getItemIndex(o)]);
                            f && f.addClass("active")
                        }
                        var p = t.Event("slid.bs.carousel", {relatedTarget: u, direction: s});
                        return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(n), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function () {
                            o.removeClass([n, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function () {
                                l.$element.trigger(p)
                            }, 0)
                        }).emulateTransitionEnd(e.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
                    }
                };
                var r = t.fn.carousel;
                t.fn.carousel = n, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
                    return t.fn.carousel = r, this
                };
                var i = function (e) {
                    var r, i = t(this),
                        o = t(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
                    if (o.hasClass("carousel")) {
                        var a = t.extend({}, o.data(), i.data()), s = i.attr("data-slide-to");
                        s && (a.interval = !1), n.call(o, a), s && o.data("bs.carousel").to(s), e.preventDefault()
                    }
                };
                t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), t(window).on("load", function () {
                    t('[data-ride="carousel"]').each(function () {
                        var e = t(this);
                        n.call(e, e.data())
                    })
                })
            }(t)
        }).call(e, n(5))
    }, 18: function (t, e, n) {
        (function (t) {
            !function (t) {
                "use strict";
                var e = function (n, r) {
                    this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, r), this.$trigger = t('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
                };

                function n(e) {
                    var n, r = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
                    return t(r)
                }

                function r(n) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.collapse"),
                            o = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
                        !i && o.toggle && /show|hide/.test(n) && (o.toggle = !1), i || r.data("bs.collapse", i = new e(this, o)), "string" == typeof n && i[n]()
                    })
                }

                e.VERSION = "3.3.7", e.TRANSITION_DURATION = 350, e.DEFAULTS = {toggle: !0}, e.prototype.dimension = function () {
                    return this.$element.hasClass("width") ? "width" : "height"
                }, e.prototype.show = function () {
                    if (!this.transitioning && !this.$element.hasClass("in")) {
                        var n, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                        if (!(i && i.length && (n = i.data("bs.collapse")) && n.transitioning)) {
                            var o = t.Event("show.bs.collapse");
                            if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                                i && i.length && (r.call(i, "hide"), n || i.data("bs.collapse", null));
                                var a = this.dimension();
                                this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                                var s = function () {
                                    this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                                };
                                if (!t.support.transition) return s.call(this);
                                var l = t.camelCase(["scroll", a].join("-"));
                                this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[a](this.$element[0][l])
                            }
                        }
                    }
                }, e.prototype.hide = function () {
                    if (!this.transitioning && this.$element.hasClass("in")) {
                        var n = t.Event("hide.bs.collapse");
                        if (this.$element.trigger(n), !n.isDefaultPrevented()) {
                            var r = this.dimension();
                            this.$element[r](this.$element[r]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                            var i = function () {
                                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                            };
                            if (!t.support.transition) return i.call(this);
                            this.$element[r](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(e.TRANSITION_DURATION)
                        }
                    }
                }, e.prototype.toggle = function () {
                    this[this.$element.hasClass("in") ? "hide" : "show"]()
                }, e.prototype.getParent = function () {
                    return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (e, r) {
                        var i = t(r);
                        this.addAriaAndCollapsedClass(n(i), i)
                    }, this)).end()
                }, e.prototype.addAriaAndCollapsedClass = function (t, e) {
                    var n = t.hasClass("in");
                    t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
                };
                var i = t.fn.collapse;
                t.fn.collapse = r, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
                    return t.fn.collapse = i, this
                }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
                    var i = t(this);
                    i.attr("data-target") || e.preventDefault();
                    var o = n(i), a = o.data("bs.collapse") ? "toggle" : i.data();
                    r.call(o, a)
                })
            }(t)
        }).call(e, n(5))
    }, 19: function (t, e, n) {
        (function (t) {
            !function (t) {
                "use strict";
                var e = ".dropdown-backdrop", n = '[data-toggle="dropdown"]', r = function (e) {
                    t(e).on("click.bs.dropdown", this.toggle)
                };

                function i(e) {
                    var n = e.attr("data-target");
                    n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
                    var r = n && t(n);
                    return r && r.length ? r : e.parent()
                }

                function o(r) {
                    r && 3 === r.which || (t(e).remove(), t(n).each(function () {
                        var e = t(this), n = i(e), o = {relatedTarget: this};
                        n.hasClass("open") && (r && "click" == r.type && /input|textarea/i.test(r.target.tagName) && t.contains(n[0], r.target) || (n.trigger(r = t.Event("hide.bs.dropdown", o)), r.isDefaultPrevented() || (e.attr("aria-expanded", "false"), n.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
                    }))
                }

                r.VERSION = "3.3.7", r.prototype.toggle = function (e) {
                    var n = t(this);
                    if (!n.is(".disabled, :disabled")) {
                        var r = i(n), a = r.hasClass("open");
                        if (o(), !a) {
                            "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", o);
                            var s = {relatedTarget: this};
                            if (r.trigger(e = t.Event("show.bs.dropdown", s)), e.isDefaultPrevented()) return;
                            n.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
                        }
                        return !1
                    }
                }, r.prototype.keydown = function (e) {
                    if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                        var r = t(this);
                        if (e.preventDefault(), e.stopPropagation(), !r.is(".disabled, :disabled")) {
                            var o = i(r), a = o.hasClass("open");
                            if (!a && 27 != e.which || a && 27 == e.which) return 27 == e.which && o.find(n).trigger("focus"), r.trigger("click");
                            var s = o.find(".dropdown-menu li:not(.disabled):visible a");
                            if (s.length) {
                                var l = s.index(e.target);
                                38 == e.which && l > 0 && l--, 40 == e.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus")
                            }
                        }
                    }
                };
                var a = t.fn.dropdown;
                t.fn.dropdown = function (e) {
                    return this.each(function () {
                        var n = t(this), i = n.data("bs.dropdown");
                        i || n.data("bs.dropdown", i = new r(this)), "string" == typeof e && i[e].call(n)
                    })
                }, t.fn.dropdown.Constructor = r, t.fn.dropdown.noConflict = function () {
                    return t.fn.dropdown = a, this
                }, t(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                    t.stopPropagation()
                }).on("click.bs.dropdown.data-api", n, r.prototype.toggle).on("keydown.bs.dropdown.data-api", n, r.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", r.prototype.keydown)
            }(t)
        }).call(e, n(5))
    }, 20: function (t, e, n) {
        (function (t) {
            !function (t) {
                "use strict";
                var e = function (e, n) {
                    this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                        this.$element.trigger("loaded.bs.modal")
                    }, this))
                };

                function n(n, r) {
                    return this.each(function () {
                        var i = t(this), o = i.data("bs.modal"),
                            a = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
                        o || i.data("bs.modal", o = new e(this, a)), "string" == typeof n ? o[n](r) : a.show && o.show(r)
                    })
                }

                e.VERSION = "3.3.7", e.TRANSITION_DURATION = 300, e.BACKDROP_TRANSITION_DURATION = 150, e.DEFAULTS = {
                    backdrop: !0,
                    keyboard: !0,
                    show: !0
                }, e.prototype.toggle = function (t) {
                    return this.isShown ? this.hide() : this.show(t)
                }, e.prototype.show = function (n) {
                    var r = this, i = t.Event("show.bs.modal", {relatedTarget: n});
                    this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                        r.$element.one("mouseup.dismiss.bs.modal", function (e) {
                            t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                        })
                    }), this.backdrop(function () {
                        var i = t.support.transition && r.$element.hasClass("fade");
                        r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
                        var o = t.Event("shown.bs.modal", {relatedTarget: n});
                        i ? r.$dialog.one("bsTransitionEnd", function () {
                            r.$element.trigger("focus").trigger(o)
                        }).emulateTransitionEnd(e.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
                    }))
                }, e.prototype.hide = function (n) {
                    n && n.preventDefault(), n = t.Event("hide.bs.modal"), this.$element.trigger(n), this.isShown && !n.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal())
                }, e.prototype.enforceFocus = function () {
                    t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                        document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                    }, this))
                }, e.prototype.escape = function () {
                    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
                        27 == t.which && this.hide()
                    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
                }, e.prototype.resize = function () {
                    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
                }, e.prototype.hideModal = function () {
                    var t = this;
                    this.$element.hide(), this.backdrop(function () {
                        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
                    })
                }, e.prototype.removeBackdrop = function () {
                    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
                }, e.prototype.backdrop = function (n) {
                    var r = this, i = this.$element.hasClass("fade") ? "fade" : "";
                    if (this.isShown && this.options.backdrop) {
                        var o = t.support.transition && i;
                        if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                            this.ignoreBackdropClick ? this.ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                        }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !n) return;
                        o ? this.$backdrop.one("bsTransitionEnd", n).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : n()
                    } else if (!this.isShown && this.$backdrop) {
                        this.$backdrop.removeClass("in");
                        var a = function () {
                            r.removeBackdrop(), n && n()
                        };
                        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : a()
                    } else n && n()
                }, e.prototype.handleUpdate = function () {
                    this.adjustDialog()
                }, e.prototype.adjustDialog = function () {
                    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                    this.$element.css({
                        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
                    })
                }, e.prototype.resetAdjustments = function () {
                    this.$element.css({paddingLeft: "", paddingRight: ""})
                }, e.prototype.checkScrollbar = function () {
                    var t = window.innerWidth;
                    if (!t) {
                        var e = document.documentElement.getBoundingClientRect();
                        t = e.right - Math.abs(e.left)
                    }
                    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
                }, e.prototype.setScrollbar = function () {
                    var t = parseInt(this.$body.css("padding-right") || 0, 10);
                    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
                }, e.prototype.resetScrollbar = function () {
                    this.$body.css("padding-right", this.originalBodyPad)
                }, e.prototype.measureScrollbar = function () {
                    var t = document.createElement("div");
                    t.className = "modal-scrollbar-measure", this.$body.append(t);
                    var e = t.offsetWidth - t.clientWidth;
                    return this.$body[0].removeChild(t), e
                };
                var r = t.fn.modal;
                t.fn.modal = n, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
                    return t.fn.modal = r, this
                }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
                    var r = t(this), i = r.attr("href"),
                        o = t(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                        a = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(i) && i}, o.data(), r.data());
                    r.is("a") && e.preventDefault(), o.one("show.bs.modal", function (t) {
                        t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                            r.is(":visible") && r.trigger("focus")
                        })
                    }), n.call(o, a, this)
                })
            }(t)
        }).call(e, n(5))
    }, 21: function (t, e, n) {
        (function (t) {
            !function (t) {
                "use strict";
                var e = function (t, e) {
                    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
                };
                e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.DEFAULTS = {
                    animation: !0,
                    placement: "top",
                    selector: !1,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    container: !1,
                    viewport: {selector: "body", padding: 0}
                }, e.prototype.init = function (e, n, r) {
                    if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                        click: !1,
                        hover: !1,
                        focus: !1
                    }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                    for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
                        var a = i[o];
                        if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
                            var s = "hover" == a ? "mouseenter" : "focusin",
                                l = "hover" == a ? "mouseleave" : "focusout";
                            this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                        }
                    }
                    this.options.selector ? this._options = t.extend({}, this.options, {
                        trigger: "manual",
                        selector: ""
                    }) : this.fixTitle()
                }, e.prototype.getDefaults = function () {
                    return e.DEFAULTS
                }, e.prototype.getOptions = function (e) {
                    return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                        show: e.delay,
                        hide: e.delay
                    }), e
                }, e.prototype.getDelegateOptions = function () {
                    var e = {}, n = this.getDefaults();
                    return this._options && t.each(this._options, function (t, r) {
                        n[t] != r && (e[t] = r)
                    }), e
                }, e.prototype.enter = function (e) {
                    var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                    if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState) n.hoverState = "in"; else {
                        if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
                        n.timeout = setTimeout(function () {
                            "in" == n.hoverState && n.show()
                        }, n.options.delay.show)
                    }
                }, e.prototype.isInStateTrue = function () {
                    for (var t in this.inState) if (this.inState[t]) return !0;
                    return !1
                }, e.prototype.leave = function (e) {
                    var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                    if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
                        if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
                        n.timeout = setTimeout(function () {
                            "out" == n.hoverState && n.hide()
                        }, n.options.delay.hide)
                    }
                }, e.prototype.show = function () {
                    var n = t.Event("show.bs." + this.type);
                    if (this.hasContent() && this.enabled) {
                        this.$element.trigger(n);
                        var r = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                        if (n.isDefaultPrevented() || !r) return;
                        var i = this, o = this.tip(), a = this.getUID(this.type);
                        this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
                        var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                            l = /\s?auto?\s?/i, u = l.test(s);
                        u && (s = s.replace(l, "") || "top"), o.detach().css({
                            top: 0,
                            left: 0,
                            display: "block"
                        }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                        var c = this.getPosition(), f = o[0].offsetWidth, p = o[0].offsetHeight;
                        if (u) {
                            var h = s, d = this.getPosition(this.$viewport);
                            s = "bottom" == s && c.bottom + p > d.bottom ? "top" : "top" == s && c.top - p < d.top ? "bottom" : "right" == s && c.right + f > d.width ? "left" : "left" == s && c.left - f < d.left ? "right" : s, o.removeClass(h).addClass(s)
                        }
                        var g = this.getCalculatedOffset(s, c, f, p);
                        this.applyPlacement(g, s);
                        var v = function () {
                            var t = i.hoverState;
                            i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
                        };
                        t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", v).emulateTransitionEnd(e.TRANSITION_DURATION) : v()
                    }
                }, e.prototype.applyPlacement = function (e, n) {
                    var r = this.tip(), i = r[0].offsetWidth, o = r[0].offsetHeight,
                        a = parseInt(r.css("margin-top"), 10), s = parseInt(r.css("margin-left"), 10);
                    isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(r[0], t.extend({
                        using: function (t) {
                            r.css({top: Math.round(t.top), left: Math.round(t.left)})
                        }
                    }, e), 0), r.addClass("in");
                    var l = r[0].offsetWidth, u = r[0].offsetHeight;
                    "top" == n && u != o && (e.top = e.top + o - u);
                    var c = this.getViewportAdjustedDelta(n, e, l, u);
                    c.left ? e.left += c.left : e.top += c.top;
                    var f = /top|bottom/.test(n), p = f ? 2 * c.left - i + l : 2 * c.top - o + u,
                        h = f ? "offsetWidth" : "offsetHeight";
                    r.offset(e), this.replaceArrow(p, r[0][h], f)
                }, e.prototype.replaceArrow = function (t, e, n) {
                    this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
                }, e.prototype.setContent = function () {
                    var t = this.tip(), e = this.getTitle();
                    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
                }, e.prototype.hide = function (n) {
                    var r = this, i = t(this.$tip), o = t.Event("hide.bs." + this.type);

                    function a() {
                        "in" != r.hoverState && i.detach(), r.$element && r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), n && n()
                    }

                    if (this.$element.trigger(o), !o.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && i.hasClass("fade") ? i.one("bsTransitionEnd", a).emulateTransitionEnd(e.TRANSITION_DURATION) : a(), this.hoverState = null, this
                }, e.prototype.fixTitle = function () {
                    var t = this.$element;
                    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
                }, e.prototype.hasContent = function () {
                    return this.getTitle()
                }, e.prototype.getPosition = function (e) {
                    var n = (e = e || this.$element)[0], r = "BODY" == n.tagName, i = n.getBoundingClientRect();
                    null == i.width && (i = t.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
                    var o = window.SVGElement && n instanceof window.SVGElement,
                        a = r ? {top: 0, left: 0} : o ? null : e.offset(),
                        s = {scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
                        l = r ? {width: t(window).width(), height: t(window).height()} : null;
                    return t.extend({}, i, s, l, a)
                }, e.prototype.getCalculatedOffset = function (t, e, n, r) {
                    return "bottom" == t ? {
                        top: e.top + e.height,
                        left: e.left + e.width / 2 - n / 2
                    } : "top" == t ? {
                        top: e.top - r,
                        left: e.left + e.width / 2 - n / 2
                    } : "left" == t ? {
                        top: e.top + e.height / 2 - r / 2,
                        left: e.left - n
                    } : {top: e.top + e.height / 2 - r / 2, left: e.left + e.width}
                }, e.prototype.getViewportAdjustedDelta = function (t, e, n, r) {
                    var i = {top: 0, left: 0};
                    if (!this.$viewport) return i;
                    var o = this.options.viewport && this.options.viewport.padding || 0,
                        a = this.getPosition(this.$viewport);
                    if (/right|left/.test(t)) {
                        var s = e.top - o - a.scroll, l = e.top + o - a.scroll + r;
                        s < a.top ? i.top = a.top - s : l > a.top + a.height && (i.top = a.top + a.height - l)
                    } else {
                        var u = e.left - o, c = e.left + o + n;
                        u < a.left ? i.left = a.left - u : c > a.right && (i.left = a.left + a.width - c)
                    }
                    return i
                }, e.prototype.getTitle = function () {
                    var t = this.$element, e = this.options;
                    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
                }, e.prototype.getUID = function (t) {
                    do {
                        t += ~~(1e6 * Math.random())
                    } while (document.getElementById(t));
                    return t
                }, e.prototype.tip = function () {
                    if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                    return this.$tip
                }, e.prototype.arrow = function () {
                    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
                }, e.prototype.enable = function () {
                    this.enabled = !0
                }, e.prototype.disable = function () {
                    this.enabled = !1
                }, e.prototype.toggleEnabled = function () {
                    this.enabled = !this.enabled
                }, e.prototype.toggle = function (e) {
                    var n = this;
                    e && ((n = t(e.currentTarget).data("bs." + this.type)) || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
                }, e.prototype.destroy = function () {
                    var t = this;
                    clearTimeout(this.timeout), this.hide(function () {
                        t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
                    })
                };
                var n = t.fn.tooltip;
                t.fn.tooltip = function (n) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.tooltip"), o = "object" == typeof n && n;
                        !i && /destroy|hide/.test(n) || (i || r.data("bs.tooltip", i = new e(this, o)), "string" == typeof n && i[n]())
                    })
                }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
                    return t.fn.tooltip = n, this
                }
            }(t)
        }).call(e, n(5))
    }, 22: function (t, e, n) {
        (function (t) {
            !function (t) {
                "use strict";
                var e = function (t, e) {
                    this.init("popover", t, e)
                };
                if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
                e.VERSION = "3.3.7", e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
                }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
                    return e.DEFAULTS
                }, e.prototype.setContent = function () {
                    var t = this.tip(), e = this.getTitle(), n = this.getContent();
                    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
                }, e.prototype.hasContent = function () {
                    return this.getTitle() || this.getContent()
                }, e.prototype.getContent = function () {
                    var t = this.$element, e = this.options;
                    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
                }, e.prototype.arrow = function () {
                    return this.$arrow = this.$arrow || this.tip().find(".arrow")
                };
                var n = t.fn.popover;
                t.fn.popover = function (n) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.popover"), o = "object" == typeof n && n;
                        !i && /destroy|hide/.test(n) || (i || r.data("bs.popover", i = new e(this, o)), "string" == typeof n && i[n]())
                    })
                }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
                    return t.fn.popover = n, this
                }
            }(t)
        }).call(e, n(5))
    }, 23: function (t, e, n) {
        (function (t) {
            !function (t) {
                "use strict";

                function e(n, r) {
                    this.$body = t(document.body), this.$scrollElement = t(n).is(document.body) ? t(window) : t(n), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
                }

                function n(n) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.scrollspy"), o = "object" == typeof n && n;
                        i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]()
                    })
                }

                e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
                    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
                }, e.prototype.refresh = function () {
                    var e = this, n = "offset", r = 0;
                    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                        var e = t(this), i = e.data("target") || e.attr("href"), o = /^#./.test(i) && t(i);
                        return o && o.length && o.is(":visible") && [[o[n]().top + r, i]] || null
                    }).sort(function (t, e) {
                        return t[0] - e[0]
                    }).each(function () {
                        e.offsets.push(this[0]), e.targets.push(this[1])
                    })
                }, e.prototype.process = function () {
                    var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(),
                        r = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, o = this.targets,
                        a = this.activeTarget;
                    if (this.scrollHeight != n && this.refresh(), e >= r) return a != (t = o[o.length - 1]) && this.activate(t);
                    if (a && e < i[0]) return this.activeTarget = null, this.clear();
                    for (t = i.length; t--;) a != o[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(o[t])
                }, e.prototype.activate = function (e) {
                    this.activeTarget = e, this.clear();
                    var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                        r = t(n).parents("li").addClass("active");
                    r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
                }, e.prototype.clear = function () {
                    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
                };
                var r = t.fn.scrollspy;
                t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
                    return t.fn.scrollspy = r, this
                }, t(window).on("load.bs.scrollspy.data-api", function () {
                    t('[data-spy="scroll"]').each(function () {
                        var e = t(this);
                        n.call(e, e.data())
                    })
                })
            }(t)
        }).call(e, n(5))
    }, 24: function (t, e, n) {
        (function (t) {
            !function (t) {
                "use strict";
                var e = function (e) {
                    this.element = t(e)
                };

                function n(n) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.tab");
                        i || r.data("bs.tab", i = new e(this)), "string" == typeof n && i[n]()
                    })
                }

                e.VERSION = "3.3.7", e.TRANSITION_DURATION = 150, e.prototype.show = function () {
                    var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), r = e.data("target");
                    if (r || (r = (r = e.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                        var i = n.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                            a = t.Event("show.bs.tab", {relatedTarget: i[0]});
                        if (i.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                            var s = t(r);
                            this.activate(e.closest("li"), n), this.activate(s, s.parent(), function () {
                                i.trigger({
                                    type: "hidden.bs.tab",
                                    relatedTarget: e[0]
                                }), e.trigger({type: "shown.bs.tab", relatedTarget: i[0]})
                            })
                        }
                    }
                }, e.prototype.activate = function (n, r, i) {
                    var o = r.find("> .active"),
                        a = i && t.support.transition && (o.length && o.hasClass("fade") || !!r.find("> .fade").length);

                    function s() {
                        o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), n.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (n[0].offsetWidth, n.addClass("in")) : n.removeClass("fade"), n.parent(".dropdown-menu").length && n.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
                    }

                    o.length && a ? o.one("bsTransitionEnd", s).emulateTransitionEnd(e.TRANSITION_DURATION) : s(), o.removeClass("in")
                };
                var r = t.fn.tab;
                t.fn.tab = n, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
                    return t.fn.tab = r, this
                };
                var i = function (e) {
                    e.preventDefault(), n.call(t(this), "show")
                };
                t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
            }(t)
        }).call(e, n(5))
    }, 25: function (t, e, n) {
        (function (t) {
            !function (t) {
                "use strict";
                var e = function (n, r) {
                    this.options = t.extend({}, e.DEFAULTS, r), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
                };

                function n(n) {
                    return this.each(function () {
                        var r = t(this), i = r.data("bs.affix"), o = "object" == typeof n && n;
                        i || r.data("bs.affix", i = new e(this, o)), "string" == typeof n && i[n]()
                    })
                }

                e.VERSION = "3.3.7", e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
                    offset: 0,
                    target: window
                }, e.prototype.getState = function (t, e, n, r) {
                    var i = this.$target.scrollTop(), o = this.$element.offset(), a = this.$target.height();
                    if (null != n && "top" == this.affixed) return i < n && "top";
                    if ("bottom" == this.affixed) return null != n ? !(i + this.unpin <= o.top) && "bottom" : !(i + a <= t - r) && "bottom";
                    var s = null == this.affixed, l = s ? i : o.top;
                    return null != n && i <= n ? "top" : null != r && l + (s ? a : e) >= t - r && "bottom"
                }, e.prototype.getPinnedOffset = function () {
                    if (this.pinnedOffset) return this.pinnedOffset;
                    this.$element.removeClass(e.RESET).addClass("affix");
                    var t = this.$target.scrollTop(), n = this.$element.offset();
                    return this.pinnedOffset = n.top - t
                }, e.prototype.checkPositionWithEventLoop = function () {
                    setTimeout(t.proxy(this.checkPosition, this), 1)
                }, e.prototype.checkPosition = function () {
                    if (this.$element.is(":visible")) {
                        var n = this.$element.height(), r = this.options.offset, i = r.top, o = r.bottom,
                            a = Math.max(t(document).height(), t(document.body).height());
                        "object" != typeof r && (o = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));
                        var s = this.getState(a, n, i, o);
                        if (this.affixed != s) {
                            null != this.unpin && this.$element.css("top", "");
                            var l = "affix" + (s ? "-" + s : ""), u = t.Event(l + ".bs.affix");
                            if (this.$element.trigger(u), u.isDefaultPrevented()) return;
                            this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
                        }
                        "bottom" == s && this.$element.offset({top: a - n - o})
                    }
                };
                var r = t.fn.affix;
                t.fn.affix = n, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function () {
                    return t.fn.affix = r, this
                }, t(window).on("load", function () {
                    t('[data-spy="affix"]').each(function () {
                        var e = t(this), r = e.data();
                        r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), n.call(e, r)
                    })
                })
            }(t)
        }).call(e, n(5))
    }, 28: function (t, e, n) {
        t.exports = n(29)
    }, 29: function (t, e, n) {
        var r;
        (function (t, i) {
            (function () {
                var o, a = [], s = [], l = 0, u = {}, c = +new Date + "", f = 75, p = 40,
                    h = " \t\v\f \ufeff\n\r\u2028\u2029 ᠎             　", d = /\b__p \+= '';/g,
                    g = /\b(__p \+=) '' \+/g, v = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                    m = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, y = /\w*$/, b = /^\s*function[ \n\r\t]+\w/,
                    x = /<%=([\s\S]+?)%>/g, w = RegExp("^[" + h + "]*0+(?=.$)"), C = /($^)/, T = /\bthis\b/,
                    _ = /['\n\r\t\u2028\u2029\\]/g,
                    S = ["Array", "Boolean", "Date", "Error", "Function", "Math", "Number", "Object", "RegExp", "String", "_", "attachEvent", "clearTimeout", "isFinite", "isNaN", "parseInt", "setTimeout"],
                    E = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                    $ = 0, N = "[object Arguments]", A = "[object Array]", j = "[object Boolean]", D = "[object Date]",
                    O = "[object Error]", R = "[object Function]", P = "[object Number]", I = "[object Object]",
                    L = "[object RegExp]", H = "[object String]", F = {};
                F[R] = !1, F[N] = F[A] = F[j] = F[D] = F[P] = F[I] = F[L] = F[H] = !0;
                var q = {leading: !1, maxWait: 0, trailing: !1},
                    M = {configurable: !1, enumerable: !1, value: null, writable: !1}, W = {
                        args: "",
                        array: null,
                        bottom: "",
                        firstArg: "",
                        init: "",
                        keys: null,
                        loop: "",
                        shadowedProps: null,
                        support: null,
                        top: "",
                        useHas: !1
                    }, U = {boolean: !1, function: !0, object: !0, number: !1, string: !1, undefined: !1},
                    B = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\t": "t", "\u2028": "u2028", "\u2029": "u2029"},
                    z = U[typeof window] && window || this, V = U[typeof e] && e && !e.nodeType && e,
                    X = U[typeof t] && t && !t.nodeType && t, Y = (X && X.exports, U[typeof i] && i);

                function G(t, e, n) {
                    for (var r = (n || 0) - 1, i = t ? t.length : 0; ++r < i;) if (t[r] === e) return r;
                    return -1
                }

                function J(t, e) {
                    var n = typeof e;
                    if (t = t.cache, "boolean" == n || null == e) return t[e] ? 0 : -1;
                    "number" != n && "string" != n && (n = "object");
                    var r = "number" == n ? e : c + e;
                    return t = (t = t[n]) && t[r], "object" == n ? t && G(t, e) > -1 ? 0 : -1 : t ? 0 : -1
                }

                function K(t) {
                    var e = this.cache, n = typeof t;
                    if ("boolean" == n || null == t) e[t] = !0; else {
                        "number" != n && "string" != n && (n = "object");
                        var r = "number" == n ? t : c + t, i = e[n] || (e[n] = {});
                        "object" == n ? (i[r] || (i[r] = [])).push(t) : i[r] = !0
                    }
                }

                function Q(t) {
                    return t.charCodeAt(0)
                }

                function Z(t, e) {
                    for (var n = t.criteria, r = e.criteria, i = -1, o = n.length; ++i < o;) {
                        var a = n[i], s = r[i];
                        if (a !== s) {
                            if (a > s || void 0 === a) return 1;
                            if (a < s || void 0 === s) return -1
                        }
                    }
                    return t.index - e.index
                }

                function tt(t) {
                    var e = -1, n = t.length, r = t[0], i = t[n / 2 | 0], o = t[n - 1];
                    if (r && "object" == typeof r && i && "object" == typeof i && o && "object" == typeof o) return !1;
                    var a = rt();
                    a.false = a.null = a.true = a[void 0] = !1;
                    var s = rt();
                    for (s.array = t, s.cache = a, s.push = K; ++e < n;) s.push(t[e]);
                    return s
                }

                function et(t) {
                    return "\\" + B[t]
                }

                function nt() {
                    return a.pop() || []
                }

                function rt() {
                    return s.pop() || {
                        array: null,
                        cache: null,
                        criteria: null,
                        false: !1,
                        index: 0,
                        null: !1,
                        number: null,
                        object: null,
                        push: null,
                        string: null,
                        true: !1,
                        undefined: !1,
                        value: null
                    }
                }

                function it(t) {
                    return "function" != typeof t.toString && "string" == typeof(t + "")
                }

                function ot(t) {
                    t.length = 0, a.length < p && a.push(t)
                }

                function at(t) {
                    var e = t.cache;
                    e && at(e), t.array = t.cache = t.criteria = t.object = t.number = t.string = t.value = null, s.length < p && s.push(t)
                }

                function st(t, e, n) {
                    e || (e = 0), void 0 === n && (n = t ? t.length : 0);
                    for (var r = -1, i = n - e || 0, o = Array(i < 0 ? 0 : i); ++r < i;) o[r] = t[e + r];
                    return o
                }

                !Y || Y.global !== Y && Y.window !== Y || (z = Y);
                var lt = function t(e) {
                    var n = (e = e ? lt.defaults(z.Object(), e, lt.pick(z, S)) : z).Array, r = e.Boolean, i = e.Date,
                        a = e.Error, s = e.Function, p = e.Math, B = e.Number, V = e.Object, X = e.RegExp, Y = e.String,
                        K = e.TypeError, ut = [], ct = a.prototype, ft = V.prototype, pt = Y.prototype, ht = e._,
                        dt = ft.toString,
                        gt = X("^" + Y(dt).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"),
                        vt = p.ceil, mt = e.clearTimeout, yt = p.floor, bt = s.prototype.toString,
                        xt = oe(xt = V.getPrototypeOf) && xt, wt = ft.hasOwnProperty, Ct = ut.push,
                        Tt = ft.propertyIsEnumerable, kt = e.setTimeout, _t = ut.splice, St = ut.unshift,
                        Et = function () {
                            try {
                                var t = {}, e = oe(e = V.defineProperty) && e, n = e(t, t, t) && e
                            } catch (t) {
                            }
                            return n
                        }(), $t = oe($t = V.create) && $t, Nt = oe(Nt = n.isArray) && Nt, At = e.isFinite, jt = e.isNaN,
                        Dt = oe(Dt = V.keys) && Dt, Ot = p.max, Rt = p.min, Pt = e.parseInt, It = p.random, Lt = {};
                    Lt[A] = n, Lt[j] = r, Lt[D] = i, Lt[R] = s, Lt[I] = V, Lt[P] = B, Lt[L] = X, Lt[H] = Y;
                    var Ht = {};

                    function Ft(t) {
                        return t && "object" == typeof t && !ce(t) && wt.call(t, "__wrapped__") ? t : new qt(t)
                    }

                    function qt(t, e) {
                        this.__chain__ = !!e, this.__wrapped__ = t
                    }

                    Ht[A] = Ht[D] = Ht[P] = {
                        constructor: !0,
                        toLocaleString: !0,
                        toString: !0,
                        valueOf: !0
                    }, Ht[j] = Ht[H] = {
                        constructor: !0,
                        toString: !0,
                        valueOf: !0
                    }, Ht[O] = Ht[R] = Ht[L] = {constructor: !0, toString: !0}, Ht[I] = {constructor: !0}, function () {
                        for (var t = E.length; t--;) {
                            var e = E[t];
                            for (var n in Ht) wt.call(Ht, n) && !wt.call(Ht[n], e) && (Ht[n][e] = !1)
                        }
                    }(), qt.prototype = Ft.prototype;
                    var Mt = Ft.support = {};
                    !function () {
                        var r = function () {
                            this.x = 1
                        }, i = {0: 1, length: 1}, o = [];
                        for (var a in r.prototype = {valueOf: 1, y: 1}, new r) o.push(a);
                        for (a in arguments) ;
                        Mt.argsClass = dt.call(arguments) == N, Mt.argsObject = arguments.constructor == V && !(arguments instanceof n), Mt.enumErrorProps = Tt.call(ct, "message") || Tt.call(ct, "name"), Mt.enumPrototypes = Tt.call(r, "prototype"), Mt.funcDecomp = !oe(e.WinRTError) && T.test(t), Mt.funcNames = "string" == typeof s.name, Mt.nonEnumArgs = 0 != a, Mt.nonEnumShadows = !/valueOf/.test(o), Mt.ownLast = "x" != o[0], Mt.spliceObjects = (ut.splice.call(i, 0, 1), !i[0]), Mt.unindexedChars = "x"[0] + V("x")[0] != "xx";
                        try {
                            Mt.nodeClass = !(dt.call(document) == I && !({toString: 0} + ""))
                        } catch (t) {
                            Mt.nodeClass = !0
                        }
                    }(1), Ft.templateSettings = {
                        escape: /<%-([\s\S]+?)%>/g,
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: x,
                        variable: "",
                        imports: {_: Ft}
                    };
                    var Wt = function (t) {
                        var e = "var index, iterable = " + t.firstArg + ", result = " + t.init + ";\nif (!iterable) return result;\n" + t.top + ";";
                        t.array ? (e += "\nvar length = iterable.length; index = -1;\nif (" + t.array + ") {  ", Mt.unindexedChars && (e += "\n  if (isString(iterable)) {\n    iterable = iterable.split('')\n  }  "), e += "\n  while (++index < length) {\n    " + t.loop + ";\n  }\n}\nelse {  ") : Mt.nonEnumArgs && (e += "\n  var length = iterable.length; index = -1;\n  if (length && isArguments(iterable)) {\n    while (++index < length) {\n      index += '';\n      " + t.loop + ";\n    }\n  } else {  "), Mt.enumPrototypes && (e += "\n  var skipProto = typeof iterable == 'function';\n  "), Mt.enumErrorProps && (e += "\n  var skipErrorProps = iterable === errorProto || iterable instanceof Error;\n  ");
                        var n = [];
                        if (Mt.enumPrototypes && n.push('!(skipProto && index == "prototype")'), Mt.enumErrorProps && n.push('!(skipErrorProps && (index == "message" || index == "name"))'), t.useHas && t.keys) e += "\n  var ownIndex = -1,\n      ownProps = objectTypes[typeof iterable] && keys(iterable),\n      length = ownProps ? ownProps.length : 0;\n\n  while (++ownIndex < length) {\n    index = ownProps[ownIndex];\n", n.length && (e += "    if (" + n.join(" && ") + ") {\n  "), e += t.loop + ";    ", n.length && (e += "\n    }"), e += "\n  }  "; else if (e += "\n  for (index in iterable) {\n", t.useHas && n.push("hasOwnProperty.call(iterable, index)"), n.length && (e += "    if (" + n.join(" && ") + ") {\n  "), e += t.loop + ";    ", n.length && (e += "\n    }"), e += "\n  }    ", Mt.nonEnumShadows) {
                            for (e += "\n\n  if (iterable !== objectProto) {\n    var ctor = iterable.constructor,\n        isProto = iterable === (ctor && ctor.prototype),\n        className = iterable === stringProto ? stringClass : iterable === errorProto ? errorClass : toString.call(iterable),\n        nonEnum = nonEnumProps[className];\n      ", k = 0; k < 7; k++) e += "\n    index = '" + t.shadowedProps[k] + "';\n    if ((!(isProto && nonEnum[index]) && hasOwnProperty.call(iterable, index))", t.useHas || (e += " || (!nonEnum[index] && iterable[index] !== objectProto[index])"), e += ") {\n      " + t.loop + ";\n    }      ";
                            e += "\n  }    "
                        }
                        return (t.array || Mt.nonEnumArgs) && (e += "\n}"), e += t.bottom + ";\nreturn result"
                    };

                    function Ut(t) {
                        var e = t[0], n = t[2], r = t[4];

                        function i() {
                            if (n) {
                                var t = st(n);
                                Ct.apply(t, arguments)
                            }
                            if (this instanceof i) {
                                var o = zt(e.prototype), a = e.apply(o, t || arguments);
                                return Ne(a) ? a : o
                            }
                            return e.apply(r, t || arguments)
                        }

                        return ae(i, t), i
                    }

                    function Bt(t, e, n, r, i) {
                        if (n) {
                            var o = n(t);
                            if (void 0 !== o) return o
                        }
                        if (!Ne(t)) return t;
                        var a = dt.call(t);
                        if (!F[a] || !Mt.nodeClass && it(t)) return t;
                        var s = Lt[a];
                        switch (a) {
                            case j:
                            case D:
                                return new s(+t);
                            case P:
                            case H:
                                return new s(t);
                            case L:
                                return (o = s(t.source, y.exec(t))).lastIndex = t.lastIndex, o
                        }
                        var l = ce(t);
                        if (e) {
                            var u = !r;
                            r || (r = nt()), i || (i = nt());
                            for (var c = r.length; c--;) if (r[c] == t) return i[c];
                            o = l ? s(t.length) : {}
                        } else o = l ? st(t) : we({}, t);
                        return l && (wt.call(t, "index") && (o.index = t.index), wt.call(t, "input") && (o.input = t.input)), e ? (r.push(t), i.push(o), (l ? xe : ke)(t, function (t, a) {
                            o[a] = Bt(t, e, n, r, i)
                        }), u && (ot(r), ot(i)), o) : o
                    }

                    function zt(t, e) {
                        return Ne(t) ? $t(t) : {}
                    }

                    function Vt(t, e, n) {
                        if ("function" != typeof t) return sn;
                        if (void 0 === e || !("prototype" in t)) return t;
                        var r = t.__bindData__;
                        if (void 0 === r && (Mt.funcNames && (r = !t.name), !(r = r || !Mt.funcDecomp))) {
                            var i = bt.call(t);
                            Mt.funcNames || (r = !b.test(i)), r || (r = T.test(i), ae(t, r))
                        }
                        if (!1 === r || !0 !== r && 1 & r[1]) return t;
                        switch (n) {
                            case 1:
                                return function (n) {
                                    return t.call(e, n)
                                };
                            case 2:
                                return function (n, r) {
                                    return t.call(e, n, r)
                                };
                            case 3:
                                return function (n, r, i) {
                                    return t.call(e, n, r, i)
                                };
                            case 4:
                                return function (n, r, i, o) {
                                    return t.call(e, n, r, i, o)
                                }
                        }
                        return on(t, e)
                    }

                    function Xt(t) {
                        var e = t[0], n = t[1], r = t[2], i = t[3], o = t[4], a = t[5], s = 1 & n, l = 2 & n, u = 4 & n,
                            c = 8 & n, f = e;

                        function p() {
                            var t = s ? o : this;
                            if (r) {
                                var h = st(r);
                                Ct.apply(h, arguments)
                            }
                            if ((i || u) && (h || (h = st(arguments)), i && Ct.apply(h, i), u && h.length < a)) return n |= 16, Xt([e, c ? n : -4 & n, h, null, o, a]);
                            if (h || (h = arguments), l && (e = t[f]), this instanceof p) {
                                t = zt(e.prototype);
                                var d = e.apply(t, h);
                                return Ne(d) ? d : t
                            }
                            return e.apply(t, h)
                        }

                        return ae(p, t), p
                    }

                    function Yt(t, e) {
                        var n = -1, r = ie(), i = t ? t.length : 0, o = i >= f && r === G, a = [];
                        if (o) {
                            var s = tt(e);
                            s ? (r = J, e = s) : o = !1
                        }
                        for (; ++n < i;) {
                            var l = t[n];
                            r(e, l) < 0 && a.push(l)
                        }
                        return o && at(e), a
                    }

                    function Gt(t, e, n, r) {
                        for (var i = (r || 0) - 1, o = t ? t.length : 0, a = []; ++i < o;) {
                            var s = t[i];
                            if (s && "object" == typeof s && "number" == typeof s.length && (ce(s) || ue(s))) {
                                e || (s = Gt(s, e, n));
                                var l = -1, u = s.length, c = a.length;
                                for (a.length += u; ++l < u;) a[c++] = s[l]
                            } else n || a.push(s)
                        }
                        return a
                    }

                    function Jt(t, e, n, r, i, o) {
                        if (n) {
                            var a = n(t, e);
                            if (void 0 !== a) return !!a
                        }
                        if (t === e) return 0 !== t || 1 / t == 1 / e;
                        var s = typeof e;
                        if (!(t != t || t && U[typeof t] || e && U[s])) return !1;
                        if (null == t || null == e) return t === e;
                        var l = dt.call(t), u = dt.call(e);
                        if (l == N && (l = I), u == N && (u = I), l != u) return !1;
                        switch (l) {
                            case j:
                            case D:
                                return +t == +e;
                            case P:
                                return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                            case L:
                            case H:
                                return t == Y(e)
                        }
                        var c = l == A;
                        if (!c) {
                            var f = wt.call(t, "__wrapped__"), p = wt.call(e, "__wrapped__");
                            if (f || p) return Jt(f ? t.__wrapped__ : t, p ? e.__wrapped__ : e, n, r, i, o);
                            if (l != I || !Mt.nodeClass && (it(t) || it(e))) return !1;
                            var h = !Mt.argsObject && ue(t) ? V : t.constructor,
                                d = !Mt.argsObject && ue(e) ? V : e.constructor;
                            if (h != d && !($e(h) && h instanceof h && $e(d) && d instanceof d) && "constructor" in t && "constructor" in e) return !1
                        }
                        var g = !i;
                        i || (i = nt()), o || (o = nt());
                        for (var v = i.length; v--;) if (i[v] == t) return o[v] == e;
                        var m = 0;
                        if (a = !0, i.push(t), o.push(e), c) {
                            if (v = t.length, m = e.length, (a = m == v) || r) for (; m--;) {
                                var y = v, b = e[m];
                                if (r) for (; y-- && !(a = Jt(t[y], b, n, r, i, o));) ; else if (!(a = Jt(t[m], b, n, r, i, o))) break
                            }
                        } else Te(e, function (e, s, l) {
                            if (wt.call(l, s)) return m++, a = wt.call(t, s) && Jt(t[s], e, n, r, i, o)
                        }), a && !r && Te(t, function (t, e, n) {
                            if (wt.call(n, e)) return a = --m > -1
                        });
                        return i.pop(), o.pop(), g && (ot(i), ot(o)), a
                    }

                    function Kt(t, e, n, r, i) {
                        (ce(e) ? Fe : ke)(e, function (e, o) {
                            var a, s, l = e, u = t[o];
                            if (e && ((s = ce(e)) || je(e))) {
                                for (var c, f = r.length; f--;) if (a = r[f] == e) {
                                    u = i[f];
                                    break
                                }
                                a || (n && (c = void 0 !== (l = n(u, e))) && (u = l), c || (u = s ? ce(u) ? u : [] : je(u) ? u : {}), r.push(e), i.push(u), c || Kt(u, e, n, r, i))
                            } else n && void 0 === (l = n(u, e)) && (l = e), void 0 !== l && (u = l);
                            t[o] = u
                        })
                    }

                    function Qt(t, e) {
                        return t + yt(It() * (e - t + 1))
                    }

                    function Zt(t, e, n) {
                        var r = -1, i = ie(), o = t ? t.length : 0, a = [], s = !e && o >= f && i === G,
                            l = n || s ? nt() : a;
                        for (s && (i = J, l = tt(l)); ++r < o;) {
                            var u = t[r], c = n ? n(u, r, t) : u;
                            (e ? !r || l[l.length - 1] !== c : i(l, c) < 0) && ((n || s) && l.push(c), a.push(u))
                        }
                        return s ? (ot(l.array), at(l)) : n && ot(l), a
                    }

                    function te(t) {
                        return function (e, n, r) {
                            var i = {};
                            if (n = Ft.createCallback(n, r, 3), ce(e)) for (var o = -1, a = e.length; ++o < a;) {
                                var s = e[o];
                                t(i, s, n(s, o, e), e)
                            } else xe(e, function (e, r, o) {
                                t(i, e, n(e, r, o), o)
                            });
                            return i
                        }
                    }

                    function ee(t, e, n, r, i, o) {
                        var a = 1 & e, s = 4 & e, l = 16 & e, u = 32 & e;
                        if (!(2 & e || $e(t))) throw new K;
                        l && !n.length && (e &= -17, l = n = !1), u && !r.length && (e &= -33, u = r = !1);
                        var c = t && t.__bindData__;
                        return c && !0 !== c ? ((c = st(c))[2] && (c[2] = st(c[2])), c[3] && (c[3] = st(c[3])), !a || 1 & c[1] || (c[4] = i), !a && 1 & c[1] && (e |= 8), !s || 4 & c[1] || (c[5] = o), l && Ct.apply(c[2] || (c[2] = []), n), u && St.apply(c[3] || (c[3] = []), r), c[1] |= e, ee.apply(null, c)) : (1 == e || 17 === e ? Ut : Xt)([t, e, n, r, i, o])
                    }

                    function ne() {
                        W.shadowedProps = E, W.array = W.bottom = W.loop = W.top = "", W.init = "iterable", W.useHas = !0;
                        for (var t, e = 0; t = arguments[e]; e++) for (var n in t) W[n] = t[n];
                        var r = W.args;
                        return W.firstArg = /^[^,]+/.exec(r)[0], s("baseCreateCallback, errorClass, errorProto, hasOwnProperty, indicatorObject, isArguments, isArray, isString, keys, objectProto, objectTypes, nonEnumProps, stringClass, stringProto, toString", "return function(" + r + ") {\n" + Wt(W) + "\n}")(Vt, O, ct, wt, u, ue, ce, De, W.keys, ft, U, Ht, H, pt, dt)
                    }

                    function re(t) {
                        return ve[t]
                    }

                    function ie() {
                        var t = (t = Ft.indexOf) === Qe ? G : t;
                        return t
                    }

                    function oe(t) {
                        return "function" == typeof t && gt.test(t)
                    }

                    $t || (zt = function () {
                        function t() {
                        }

                        return function (n) {
                            if (Ne(n)) {
                                t.prototype = n;
                                var r = new t;
                                t.prototype = null
                            }
                            return r || e.Object()
                        }
                    }());
                    var ae = Et ? function (t, e) {
                        M.value = e, Et(t, "__bindData__", M), M.value = null
                    } : un;

                    function se(t) {
                        var e, n;
                        return !(!t || dt.call(t) != I || $e(e = t.constructor) && !(e instanceof e) || !Mt.argsClass && ue(t) || !Mt.nodeClass && it(t)) && (Mt.ownLast ? (Te(t, function (t, e, r) {
                            return n = wt.call(r, e), !1
                        }), !1 !== n) : (Te(t, function (t, e) {
                            n = e
                        }), void 0 === n || wt.call(t, n)))
                    }

                    function le(t) {
                        return me[t]
                    }

                    function ue(t) {
                        return t && "object" == typeof t && "number" == typeof t.length && dt.call(t) == N || !1
                    }

                    Mt.argsClass || (ue = function (t) {
                        return t && "object" == typeof t && "number" == typeof t.length && wt.call(t, "callee") && !Tt.call(t, "callee") || !1
                    });
                    var ce = Nt || function (t) {
                            return t && "object" == typeof t && "number" == typeof t.length && dt.call(t) == A || !1
                        }, fe = ne({
                            args: "object",
                            init: "[]",
                            top: "if (!(objectTypes[typeof object])) return result",
                            loop: "result.push(index)"
                        }), pe = Dt ? function (t) {
                            return Ne(t) ? Mt.enumPrototypes && "function" == typeof t || Mt.nonEnumArgs && t.length && ue(t) ? fe(t) : Dt(t) : []
                        } : fe, he = {
                            args: "collection, callback, thisArg",
                            top: "callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3)",
                            array: "typeof length == 'number'",
                            keys: pe,
                            loop: "if (callback(iterable[index], index, collection) === false) return result"
                        }, de = {
                            args: "object, source, guard",
                            top: "var args = arguments,\n    argsIndex = 0,\n    argsLength = typeof guard == 'number' ? 2 : args.length;\nwhile (++argsIndex < argsLength) {\n  iterable = args[argsIndex];\n  if (iterable && objectTypes[typeof iterable]) {",
                            keys: pe,
                            loop: "if (typeof result[index] == 'undefined') result[index] = iterable[index]",
                            bottom: "  }\n}"
                        }, ge = {top: "if (!objectTypes[typeof iterable]) return result;\n" + he.top, array: !1},
                        ve = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"}, me = Ee(ve),
                        ye = X("(" + pe(me).join("|") + ")", "g"), be = X("[" + pe(ve).join("") + "]", "g"),
                        xe = ne(he), we = ne(de, {
                            top: de.top.replace(";", ";\nif (argsLength > 3 && typeof args[argsLength - 2] == 'function') {\n  var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);\n} else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {\n  callback = args[--argsLength];\n}"),
                            loop: "result[index] = callback ? callback(result[index], iterable[index]) : iterable[index]"
                        });
                    var Ce = ne(de);
                    var Te = ne(he, ge, {useHas: !1});
                    var ke = ne(he, ge);

                    function _e(t, e, n) {
                        var r = pe(t), i = r.length;
                        for (e = Vt(e, n, 3); i--;) {
                            var o = r[i];
                            if (!1 === e(t[o], o, t)) break
                        }
                        return t
                    }

                    function Se(t) {
                        var e = [];
                        return Te(t, function (t, n) {
                            $e(t) && e.push(n)
                        }), e.sort()
                    }

                    function Ee(t) {
                        for (var e = -1, n = pe(t), r = n.length, i = {}; ++e < r;) {
                            var o = n[e];
                            i[t[o]] = o
                        }
                        return i
                    }

                    function $e(t) {
                        return "function" == typeof t
                    }

                    function Ne(t) {
                        return !(!t || !U[typeof t])
                    }

                    function Ae(t) {
                        return "number" == typeof t || t && "object" == typeof t && dt.call(t) == P || !1
                    }

                    $e(/x/) && ($e = function (t) {
                        return "function" == typeof t && dt.call(t) == R
                    });
                    var je = xt ? function (t) {
                        if (!t || dt.call(t) != I || !Mt.argsClass && ue(t)) return !1;
                        var e = t.valueOf, n = oe(e) && (n = xt(e)) && xt(n);
                        return n ? t == n || xt(t) == n : se(t)
                    } : se;

                    function De(t) {
                        return "string" == typeof t || t && "object" == typeof t && dt.call(t) == H || !1
                    }

                    function Oe(t) {
                        for (var e = -1, r = pe(t), i = r.length, o = n(i); ++e < i;) o[e] = t[r[e]];
                        return o
                    }

                    function Re(t, e, n) {
                        var r = -1, i = ie(), o = t ? t.length : 0, a = !1;
                        return n = (n < 0 ? Ot(0, o + n) : n) || 0, ce(t) ? a = i(t, e, n) > -1 : "number" == typeof o ? a = (De(t) ? t.indexOf(e, n) : i(t, e, n)) > -1 : xe(t, function (t) {
                            if (++r >= n) return !(a = t === e)
                        }), a
                    }

                    var Pe = te(function (t, e, n) {
                        wt.call(t, n) ? t[n]++ : t[n] = 1
                    });

                    function Ie(t, e, n) {
                        var r = !0;
                        if (e = Ft.createCallback(e, n, 3), ce(t)) for (var i = -1, o = t.length; ++i < o && (r = !!e(t[i], i, t));) ; else xe(t, function (t, n, i) {
                            return r = !!e(t, n, i)
                        });
                        return r
                    }

                    function Le(t, e, n) {
                        var r = [];
                        if (e = Ft.createCallback(e, n, 3), ce(t)) for (var i = -1, o = t.length; ++i < o;) {
                            var a = t[i];
                            e(a, i, t) && r.push(a)
                        } else xe(t, function (t, n, i) {
                            e(t, n, i) && r.push(t)
                        });
                        return r
                    }

                    function He(t, e, n) {
                        var r;
                        if (e = Ft.createCallback(e, n, 3), !ce(t)) return xe(t, function (t, n, i) {
                            if (e(t, n, i)) return r = t, !1
                        }), r;
                        for (var i = -1, o = t.length; ++i < o;) {
                            var a = t[i];
                            if (e(a, i, t)) return a
                        }
                    }

                    function Fe(t, e, n) {
                        if (e && void 0 === n && ce(t)) for (var r = -1, i = t.length; ++r < i && !1 !== e(t[r], r, t);) ; else xe(t, e, n);
                        return t
                    }

                    function qe(t, e, n) {
                        var r = t, i = t ? t.length : 0;
                        if (e = e && void 0 === n ? e : Vt(e, n, 3), ce(t)) for (; i-- && !1 !== e(t[i], i, t);) ; else {
                            if ("number" != typeof i) {
                                var o = pe(t);
                                i = o.length
                            } else Mt.unindexedChars && De(t) && (r = t.split(""));
                            xe(t, function (t, n, a) {
                                return n = o ? o[--i] : --i, e(r[n], n, a)
                            })
                        }
                        return t
                    }

                    var Me = te(function (t, e, n) {
                        (wt.call(t, n) ? t[n] : t[n] = []).push(e)
                    }), We = te(function (t, e, n) {
                        t[n] = e
                    });

                    function Ue(t, e, r) {
                        var i = -1, o = t ? t.length : 0, a = n("number" == typeof o ? o : 0);
                        if (e = Ft.createCallback(e, r, 3), ce(t)) for (; ++i < o;) a[i] = e(t[i], i, t); else xe(t, function (t, n, r) {
                            a[++i] = e(t, n, r)
                        });
                        return a
                    }

                    function Be(t, e, n) {
                        var r = -1 / 0, i = r;
                        if ("function" != typeof e && n && n[e] === t && (e = null), null == e && ce(t)) for (var o = -1, a = t.length; ++o < a;) {
                            var s = t[o];
                            s > i && (i = s)
                        } else e = null == e && De(t) ? Q : Ft.createCallback(e, n, 3), xe(t, function (t, n, o) {
                            var a = e(t, n, o);
                            a > r && (r = a, i = t)
                        });
                        return i
                    }

                    var ze = Ue;

                    function Ve(t, e, n, r) {
                        var i = arguments.length < 3;
                        if (e = Ft.createCallback(e, r, 4), ce(t)) {
                            var o = -1, a = t.length;
                            for (i && (n = t[++o]); ++o < a;) n = e(n, t[o], o, t)
                        } else xe(t, function (t, r, o) {
                            n = i ? (i = !1, t) : e(n, t, r, o)
                        });
                        return n
                    }

                    function Xe(t, e, n, r) {
                        var i = arguments.length < 3;
                        return e = Ft.createCallback(e, r, 4), qe(t, function (t, r, o) {
                            n = i ? (i = !1, t) : e(n, t, r, o)
                        }), n
                    }

                    function Ye(t) {
                        var e = -1, r = t ? t.length : 0, i = n("number" == typeof r ? r : 0);
                        return Fe(t, function (t) {
                            var n = Qt(0, ++e);
                            i[e] = i[n], i[n] = t
                        }), i
                    }

                    function Ge(t, e, n) {
                        var r;
                        if (e = Ft.createCallback(e, n, 3), ce(t)) for (var i = -1, o = t.length; ++i < o && !(r = e(t[i], i, t));) ; else xe(t, function (t, n, i) {
                            return !(r = e(t, n, i))
                        });
                        return !!r
                    }

                    var Je = Le;

                    function Ke(t, e, n) {
                        var r = 0, i = t ? t.length : 0;
                        if ("number" != typeof e && null != e) {
                            var a = -1;
                            for (e = Ft.createCallback(e, n, 3); ++a < i && e(t[a], a, t);) r++
                        } else if (null == (r = e) || n) return t ? t[0] : o;
                        return st(t, 0, Rt(Ot(0, r), i))
                    }

                    function Qe(t, e, n) {
                        if ("number" == typeof n) {
                            var r = t ? t.length : 0;
                            n = n < 0 ? Ot(0, r + n) : n || 0
                        } else if (n) {
                            var i = tn(t, e);
                            return t[i] === e ? i : -1
                        }
                        return G(t, e, n)
                    }

                    function Ze(t, e, n) {
                        if ("number" != typeof e && null != e) {
                            var r = 0, i = -1, o = t ? t.length : 0;
                            for (e = Ft.createCallback(e, n, 3); ++i < o && e(t[i], i, t);) r++
                        } else r = null == e || n ? 1 : Ot(0, e);
                        return st(t, r)
                    }

                    function tn(t, e, n, r) {
                        var i = 0, o = t ? t.length : i;
                        for (e = (n = n ? Ft.createCallback(n, r, 1) : sn)(e); i < o;) {
                            var a = i + o >>> 1;
                            n(t[a]) < e ? i = a + 1 : o = a
                        }
                        return i
                    }

                    function en(t, e, n, r) {
                        return "boolean" != typeof e && null != e && (r = n, n = "function" != typeof e && r && r[e] === t ? null : e, e = !1), null != n && (n = Ft.createCallback(n, r, 3)), Zt(t, e, n)
                    }

                    function nn() {
                        for (var t = arguments.length > 1 ? arguments : arguments[0], e = -1, r = t ? Be(ze(t, "length")) : 0, i = n(r < 0 ? 0 : r); ++e < r;) i[e] = ze(t, e);
                        return i
                    }

                    function rn(t, e) {
                        var n = -1, r = t ? t.length : 0, i = {};
                        for (e || !r || ce(t[0]) || (e = []); ++n < r;) {
                            var o = t[n];
                            e ? i[o] = e[n] : o && (i[o[0]] = o[1])
                        }
                        return i
                    }

                    function on(t, e) {
                        return arguments.length > 2 ? ee(t, 17, st(arguments, 2), null, e) : ee(t, 1, null, null, e)
                    }

                    function an(t, e, n) {
                        var r, i, a, s, l, u, c, f = 0, p = !1, h = !0;
                        if (!$e(t)) throw new K;
                        if (e = Ot(0, e) || 0, !0 === n) {
                            var d = !0;
                            h = !1
                        } else Ne(n) && (d = n.leading, p = "maxWait" in n && (Ot(e, n.maxWait) || 0), h = "trailing" in n ? n.trailing : h);
                        var g = function () {
                            var n = e - (cn() - s);
                            if (n <= 0) {
                                i && mt(i);
                                var p = c;
                                i = u = c = o, p && (f = cn(), a = t.apply(l, r), u || i || (r = l = null))
                            } else u = kt(g, n)
                        }, v = function () {
                            u && mt(u), i = u = c = o, (h || p !== e) && (f = cn(), a = t.apply(l, r), u || i || (r = l = null))
                        };
                        return function () {
                            if (r = arguments, s = cn(), l = this, c = h && (u || !d), !1 === p) var n = d && !u; else {
                                i || d || (f = s);
                                var o = p - (s - f), m = o <= 0;
                                m ? (i && (i = mt(i)), f = s, a = t.apply(l, r)) : i || (i = kt(v, o))
                            }
                            return m && u ? u = mt(u) : u || e === p || (u = kt(g, e)), n && (m = !0, a = t.apply(l, r)), !m || u || i || (r = l = null), a
                        }
                    }

                    function sn(t) {
                        return t
                    }

                    function ln(t, e, n) {
                        var r = !0, i = e && Se(e);
                        e && (n || i.length) || (null == n && (n = e), o = qt, e = t, t = Ft, i = Se(e)), !1 === n ? r = !1 : Ne(n) && "chain" in n && (r = n.chain);
                        var o = t, a = $e(o);
                        Fe(i, function (n) {
                            var i = t[n] = e[n];
                            a && (o.prototype[n] = function () {
                                var e = this.__chain__, n = this.__wrapped__, a = [n];
                                Ct.apply(a, arguments);
                                var s = i.apply(t, a);
                                if (r || e) {
                                    if (n === s && Ne(s)) return this;
                                    (s = new o(s)).__chain__ = e
                                }
                                return s
                            })
                        })
                    }

                    function un() {
                    }

                    var cn = oe(cn = i.now) && cn || function () {
                        return (new i).getTime()
                    }, fn = 8 == Pt(h + "08") ? Pt : function (t, e) {
                        return Pt(De(t) ? t.replace(w, "") : t, e || 0)
                    };

                    function pn(t) {
                        return function (e) {
                            return e[t]
                        }
                    }

                    function hn() {
                        return this.__wrapped__
                    }

                    return Ft.after = function (t, e) {
                        if (!$e(e)) throw new K;
                        return function () {
                            if (--t < 1) return e.apply(this, arguments)
                        }
                    }, Ft.assign = we, Ft.at = function (t) {
                        var e = arguments, r = -1, i = Gt(e, !0, !1, 1), o = e[2] && e[2][e[1]] === t ? 1 : i.length,
                            a = n(o);
                        for (Mt.unindexedChars && De(t) && (t = t.split("")); ++r < o;) a[r] = t[i[r]];
                        return a
                    }, Ft.bind = on, Ft.bindAll = function (t) {
                        for (var e = arguments.length > 1 ? Gt(arguments, !0, !1, 1) : Se(t), n = -1, r = e.length; ++n < r;) {
                            var i = e[n];
                            t[i] = ee(t[i], 1, null, null, t)
                        }
                        return t
                    }, Ft.bindKey = function (t, e) {
                        return arguments.length > 2 ? ee(e, 19, st(arguments, 2), null, t) : ee(e, 3, null, null, t)
                    }, Ft.chain = function (t) {
                        return (t = new qt(t)).__chain__ = !0, t
                    }, Ft.compact = function (t) {
                        for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                            var i = t[e];
                            i && r.push(i)
                        }
                        return r
                    }, Ft.compose = function () {
                        for (var t = arguments, e = t.length; e--;) if (!$e(t[e])) throw new K;
                        return function () {
                            for (var e = arguments, n = t.length; n--;) e = [t[n].apply(this, e)];
                            return e[0]
                        }
                    }, Ft.constant = function (t) {
                        return function () {
                            return t
                        }
                    }, Ft.countBy = Pe, Ft.create = function (t, e) {
                        var n = zt(t);
                        return e ? we(n, e) : n
                    }, Ft.createCallback = function (t, e, n) {
                        var r = typeof t;
                        if (null == t || "function" == r) return Vt(t, e, n);
                        if ("object" != r) return pn(t);
                        var i = pe(t), o = i[0], a = t[o];
                        return 1 != i.length || a != a || Ne(a) ? function (e) {
                            for (var n = i.length, r = !1; n-- && (r = Jt(e[i[n]], t[i[n]], null, !0));) ;
                            return r
                        } : function (t) {
                            var e = t[o];
                            return a === e && (0 !== a || 1 / a == 1 / e)
                        }
                    }, Ft.curry = function (t, e) {
                        return ee(t, 4, null, null, null, e = "number" == typeof e ? e : +e || t.length)
                    }, Ft.debounce = an, Ft.defaults = Ce, Ft.defer = function (t) {
                        if (!$e(t)) throw new K;
                        var e = st(arguments, 1);
                        return kt(function () {
                            t.apply(o, e)
                        }, 1)
                    }, Ft.delay = function (t, e) {
                        if (!$e(t)) throw new K;
                        var n = st(arguments, 2);
                        return kt(function () {
                            t.apply(o, n)
                        }, e)
                    }, Ft.difference = function (t) {
                        return Yt(t, Gt(arguments, !0, !0, 1))
                    }, Ft.filter = Le, Ft.flatten = function (t, e, n, r) {
                        return "boolean" != typeof e && null != e && (r = n, n = "function" != typeof e && r && r[e] === t ? null : e, e = !1), null != n && (t = Ue(t, n, r)), Gt(t, e)
                    }, Ft.forEach = Fe, Ft.forEachRight = qe, Ft.forIn = Te, Ft.forInRight = function (t, e, n) {
                        var r = [];
                        Te(t, function (t, e) {
                            r.push(e, t)
                        });
                        var i = r.length;
                        for (e = Vt(e, n, 3); i-- && !1 !== e(r[i--], r[i], t);) ;
                        return t
                    }, Ft.forOwn = ke, Ft.forOwnRight = _e, Ft.functions = Se, Ft.groupBy = Me, Ft.indexBy = We, Ft.initial = function (t, e, n) {
                        var r = 0, i = t ? t.length : 0;
                        if ("number" != typeof e && null != e) {
                            var o = i;
                            for (e = Ft.createCallback(e, n, 3); o-- && e(t[o], o, t);) r++
                        } else r = null == e || n ? 1 : e || r;
                        return st(t, 0, Rt(Ot(0, i - r), i))
                    }, Ft.intersection = function () {
                        for (var t = [], e = -1, n = arguments.length, r = nt(), i = ie(), o = i === G, a = nt(); ++e < n;) {
                            var s = arguments[e];
                            (ce(s) || ue(s)) && (t.push(s), r.push(o && s.length >= f && tt(e ? t[e] : a)))
                        }
                        var l = t[0], u = -1, c = l ? l.length : 0, p = [];
                        t:for (; ++u < c;) {
                            var h = r[0];
                            if (s = l[u], (h ? J(h, s) : i(a, s)) < 0) {
                                for (e = n, (h || a).push(s); --e;) if (((h = r[e]) ? J(h, s) : i(t[e], s)) < 0) continue t;
                                p.push(s)
                            }
                        }
                        for (; n--;) (h = r[n]) && at(h);
                        return ot(r), ot(a), p
                    }, Ft.invert = Ee, Ft.invoke = function (t, e) {
                        var r = st(arguments, 2), i = -1, o = "function" == typeof e, a = t ? t.length : 0,
                            s = n("number" == typeof a ? a : 0);
                        return Fe(t, function (t) {
                            s[++i] = (o ? e : t[e]).apply(t, r)
                        }), s
                    }, Ft.keys = pe, Ft.map = Ue, Ft.mapValues = function (t, e, n) {
                        var r = {};
                        return e = Ft.createCallback(e, n, 3), ke(t, function (t, n, i) {
                            r[n] = e(t, n, i)
                        }), r
                    }, Ft.max = Be, Ft.memoize = function (t, e) {
                        if (!$e(t)) throw new K;
                        var n = function () {
                            var r = n.cache, i = e ? e.apply(this, arguments) : c + arguments[0];
                            return wt.call(r, i) ? r[i] : r[i] = t.apply(this, arguments)
                        };
                        return n.cache = {}, n
                    }, Ft.merge = function (t) {
                        var e = arguments, n = 2;
                        if (!Ne(t)) return t;
                        if ("number" != typeof e[2] && (n = e.length), n > 3 && "function" == typeof e[n - 2]) var r = Vt(e[--n - 1], e[n--], 2); else n > 2 && "function" == typeof e[n - 1] && (r = e[--n]);
                        for (var i = st(arguments, 1, n), o = -1, a = nt(), s = nt(); ++o < n;) Kt(t, i[o], r, a, s);
                        return ot(a), ot(s), t
                    }, Ft.min = function (t, e, n) {
                        var r = 1 / 0, i = r;
                        if ("function" != typeof e && n && n[e] === t && (e = null), null == e && ce(t)) for (var o = -1, a = t.length; ++o < a;) {
                            var s = t[o];
                            s < i && (i = s)
                        } else e = null == e && De(t) ? Q : Ft.createCallback(e, n, 3), xe(t, function (t, n, o) {
                            var a = e(t, n, o);
                            a < r && (r = a, i = t)
                        });
                        return i
                    }, Ft.omit = function (t, e, n) {
                        var r = {};
                        if ("function" != typeof e) {
                            var i = [];
                            Te(t, function (t, e) {
                                i.push(e)
                            });
                            for (var o = -1, a = (i = Yt(i, Gt(arguments, !0, !1, 1))).length; ++o < a;) {
                                var s = i[o];
                                r[s] = t[s]
                            }
                        } else e = Ft.createCallback(e, n, 3), Te(t, function (t, n, i) {
                            e(t, n, i) || (r[n] = t)
                        });
                        return r
                    }, Ft.once = function (t) {
                        var e, n;
                        if (!$e(t)) throw new K;
                        return function () {
                            return e ? n : (e = !0, n = t.apply(this, arguments), t = null, n)
                        }
                    }, Ft.pairs = function (t) {
                        for (var e = -1, r = pe(t), i = r.length, o = n(i); ++e < i;) {
                            var a = r[e];
                            o[e] = [a, t[a]]
                        }
                        return o
                    }, Ft.partial = function (t) {
                        return ee(t, 16, st(arguments, 1))
                    }, Ft.partialRight = function (t) {
                        return ee(t, 32, null, st(arguments, 1))
                    }, Ft.pick = function (t, e, n) {
                        var r = {};
                        if ("function" != typeof e) for (var i = -1, o = Gt(arguments, !0, !1, 1), a = Ne(t) ? o.length : 0; ++i < a;) {
                            var s = o[i];
                            s in t && (r[s] = t[s])
                        } else e = Ft.createCallback(e, n, 3), Te(t, function (t, n, i) {
                            e(t, n, i) && (r[n] = t)
                        });
                        return r
                    }, Ft.pluck = ze, Ft.property = pn, Ft.pull = function (t) {
                        for (var e = arguments, n = 0, r = e.length, i = t ? t.length : 0; ++n < r;) for (var o = -1, a = e[n]; ++o < i;) t[o] === a && (_t.call(t, o--, 1), i--);
                        return t
                    }, Ft.range = function (t, e, r) {
                        t = +t || 0, r = "number" == typeof r ? r : +r || 1, null == e && (e = t, t = 0);
                        for (var i = -1, o = Ot(0, vt((e - t) / (r || 1))), a = n(o); ++i < o;) a[i] = t, t += r;
                        return a
                    }, Ft.reject = function (t, e, n) {
                        return e = Ft.createCallback(e, n, 3), Le(t, function (t, n, r) {
                            return !e(t, n, r)
                        })
                    }, Ft.remove = function (t, e, n) {
                        var r = -1, i = t ? t.length : 0, o = [];
                        for (e = Ft.createCallback(e, n, 3); ++r < i;) {
                            var a = t[r];
                            e(a, r, t) && (o.push(a), _t.call(t, r--, 1), i--)
                        }
                        return o
                    }, Ft.rest = Ze, Ft.shuffle = Ye, Ft.sortBy = function (t, e, r) {
                        var i = -1, o = ce(e), a = t ? t.length : 0, s = n("number" == typeof a ? a : 0);
                        for (o || (e = Ft.createCallback(e, r, 3)), Fe(t, function (t, n, r) {
                            var a = s[++i] = rt();
                            o ? a.criteria = Ue(e, function (e) {
                                return t[e]
                            }) : (a.criteria = nt())[0] = e(t, n, r), a.index = i, a.value = t
                        }), a = s.length, s.sort(Z); a--;) {
                            var l = s[a];
                            s[a] = l.value, o || ot(l.criteria), at(l)
                        }
                        return s
                    }, Ft.tap = function (t, e) {
                        return e(t), t
                    }, Ft.throttle = function (t, e, n) {
                        var r = !0, i = !0;
                        if (!$e(t)) throw new K;
                        return !1 === n ? r = !1 : Ne(n) && (r = "leading" in n ? n.leading : r, i = "trailing" in n ? n.trailing : i), q.leading = r, q.maxWait = e, q.trailing = i, an(t, e, q)
                    }, Ft.times = function (t, e, r) {
                        t = (t = +t) > -1 ? t : 0;
                        var i = -1, o = n(t);
                        for (e = Vt(e, r, 1); ++i < t;) o[i] = e(i);
                        return o
                    }, Ft.toArray = function (t) {
                        return t && "number" == typeof t.length ? Mt.unindexedChars && De(t) ? t.split("") : st(t) : Oe(t)
                    }, Ft.transform = function (t, e, n, r) {
                        var i = ce(t);
                        if (null == n) if (i) n = []; else {
                            var o = t && t.constructor, a = o && o.prototype;
                            n = zt(a)
                        }
                        return e && (e = Ft.createCallback(e, r, 4), (i ? xe : ke)(t, function (t, r, i) {
                            return e(n, t, r, i)
                        })), n
                    }, Ft.union = function () {
                        return Zt(Gt(arguments, !0, !0))
                    }, Ft.uniq = en, Ft.values = Oe, Ft.where = Je, Ft.without = function (t) {
                        return Yt(t, st(arguments, 1))
                    }, Ft.wrap = function (t, e) {
                        return ee(e, 16, [t])
                    }, Ft.xor = function () {
                        for (var t = -1, e = arguments.length; ++t < e;) {
                            var n = arguments[t];
                            if (ce(n) || ue(n)) var r = r ? Zt(Yt(r, n).concat(Yt(n, r))) : n
                        }
                        return r || []
                    }, Ft.zip = nn, Ft.zipObject = rn, Ft.collect = Ue, Ft.drop = Ze, Ft.each = Fe, Ft.eachRight = qe, Ft.extend = we, Ft.methods = Se, Ft.object = rn, Ft.select = Le, Ft.tail = Ze, Ft.unique = en, Ft.unzip = nn, ln(Ft), Ft.clone = function (t, e, n, r) {
                        return "boolean" != typeof e && null != e && (r = n, n = e, e = !1), Bt(t, e, "function" == typeof n && Vt(n, r, 1))
                    }, Ft.cloneDeep = function (t, e, n) {
                        return Bt(t, !0, "function" == typeof e && Vt(e, n, 1))
                    }, Ft.contains = Re, Ft.escape = function (t) {
                        return null == t ? "" : Y(t).replace(be, re)
                    }, Ft.every = Ie, Ft.find = He, Ft.findIndex = function (t, e, n) {
                        var r = -1, i = t ? t.length : 0;
                        for (e = Ft.createCallback(e, n, 3); ++r < i;) if (e(t[r], r, t)) return r;
                        return -1
                    }, Ft.findKey = function (t, e, n) {
                        var r;
                        return e = Ft.createCallback(e, n, 3), ke(t, function (t, n, i) {
                            if (e(t, n, i)) return r = n, !1
                        }), r
                    }, Ft.findLast = function (t, e, n) {
                        var r;
                        return e = Ft.createCallback(e, n, 3), qe(t, function (t, n, i) {
                            if (e(t, n, i)) return r = t, !1
                        }), r
                    }, Ft.findLastIndex = function (t, e, n) {
                        var r = t ? t.length : 0;
                        for (e = Ft.createCallback(e, n, 3); r--;) if (e(t[r], r, t)) return r;
                        return -1
                    }, Ft.findLastKey = function (t, e, n) {
                        var r;
                        return e = Ft.createCallback(e, n, 3), _e(t, function (t, n, i) {
                            if (e(t, n, i)) return r = n, !1
                        }), r
                    }, Ft.has = function (t, e) {
                        return !!t && wt.call(t, e)
                    }, Ft.identity = sn, Ft.indexOf = Qe, Ft.isArguments = ue, Ft.isArray = ce, Ft.isBoolean = function (t) {
                        return !0 === t || !1 === t || t && "object" == typeof t && dt.call(t) == j || !1
                    }, Ft.isDate = function (t) {
                        return t && "object" == typeof t && dt.call(t) == D || !1
                    }, Ft.isElement = function (t) {
                        return t && 1 === t.nodeType || !1
                    },Ft.isEmpty = function (t) {
                        var e = !0;
                        if (!t) return e;
                        var n = dt.call(t), r = t.length;
                        return n == A || n == H || (Mt.argsClass ? n == N : ue(t)) || n == I && "number" == typeof r && $e(t.splice) ? !r : (ke(t, function () {
                            return e = !1
                        }), e)
                    },Ft.isEqual = function (t, e, n, r) {
                        return Jt(t, e, "function" == typeof n && Vt(n, r, 2))
                    },Ft.isFinite = function (t) {
                        return At(t) && !jt(parseFloat(t))
                    },Ft.isFunction = $e,Ft.isNaN = function (t) {
                        return Ae(t) && t != +t
                    },Ft.isNull = function (t) {
                        return null === t
                    },Ft.isNumber = Ae,Ft.isObject = Ne,Ft.isPlainObject = je,Ft.isRegExp = function (t) {
                        return t && U[typeof t] && dt.call(t) == L || !1
                    },Ft.isString = De,Ft.isUndefined = function (t) {
                        return void 0 === t
                    },Ft.lastIndexOf = function (t, e, n) {
                        var r = t ? t.length : 0;
                        for ("number" == typeof n && (r = (n < 0 ? Ot(0, r + n) : Rt(n, r - 1)) + 1); r--;) if (t[r] === e) return r;
                        return -1
                    },Ft.mixin = ln,Ft.noConflict = function () {
                        return e._ = ht, this
                    },Ft.noop = un,Ft.now = cn,Ft.parseInt = fn,Ft.random = function (t, e, n) {
                        var r = null == t, i = null == e;
                        if (null == n && ("boolean" == typeof t && i ? (n = t, t = 1) : i || "boolean" != typeof e || (n = e, i = !0)), r && i && (e = 1), t = +t || 0, i ? (e = t, t = 0) : e = +e || 0, n || t % 1 || e % 1) {
                            var o = It();
                            return Rt(t + o * (e - t + parseFloat("1e-" + ((o + "").length - 1))), e)
                        }
                        return Qt(t, e)
                    },Ft.reduce = Ve,Ft.reduceRight = Xe,Ft.result = function (t, e) {
                        if (t) {
                            var n = t[e];
                            return $e(n) ? t[e]() : n
                        }
                    },Ft.runInContext = t,Ft.size = function (t) {
                        var e = t ? t.length : 0;
                        return "number" == typeof e ? e : pe(t).length
                    },Ft.some = Ge,Ft.sortedIndex = tn,Ft.template = function (t, e, n) {
                        var r = Ft.templateSettings;
                        t = Y(t || ""), n = Ce({}, n, r);
                        var i, a = Ce({}, n.imports, r.imports), l = pe(a), u = Oe(a), c = 0, f = n.interpolate || C,
                            p = "__p += '",
                            h = X((n.escape || C).source + "|" + f.source + "|" + (f === x ? m : C).source + "|" + (n.evaluate || C).source + "|$", "g");
                        t.replace(h, function (e, n, r, o, a, s) {
                            return r || (r = o), p += t.slice(c, s).replace(_, et), n && (p += "' +\n__e(" + n + ") +\n'"), a && (i = !0, p += "';\n" + a + ";\n__p += '"), r && (p += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), c = s + e.length, e
                        }), p += "';\n";
                        var y = n.variable, b = y;
                        b || (p = "with (" + (y = "obj") + ") {\n" + p + "\n}\n"), p = (i ? p.replace(d, "") : p).replace(g, "$1").replace(v, "$1;"), p = "function(" + y + ") {\n" + (b ? "" : y + " || (" + y + " = {});\n") + "var __t, __p = '', __e = _.escape" + (i ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                        var w = "\n/*\n//# sourceURL=" + (n.sourceURL || "/lodash/template/source[" + $++ + "]") + "\n*/";
                        try {
                            var T = s(l, "return " + p + w).apply(o, u)
                        } catch (t) {
                            throw t.source = p, t
                        }
                        return e ? T(e) : (T.source = p, T)
                    },Ft.unescape = function (t) {
                        return null == t ? "" : Y(t).replace(ye, le)
                    },Ft.uniqueId = function (t) {
                        var e = ++l;
                        return Y(null == t ? "" : t) + e
                    },Ft.all = Ie,Ft.any = Ge,Ft.detect = He,Ft.findWhere = He,Ft.foldl = Ve,Ft.foldr = Xe,Ft.include = Re,Ft.inject = Ve,ln(function () {
                        var t = {};
                        return ke(Ft, function (e, n) {
                            Ft.prototype[n] || (t[n] = e)
                        }), t
                    }(), !1),Ft.first = Ke,Ft.last = function (t, e, n) {
                        var r = 0, i = t ? t.length : 0;
                        if ("number" != typeof e && null != e) {
                            var a = i;
                            for (e = Ft.createCallback(e, n, 3); a-- && e(t[a], a, t);) r++
                        } else if (null == (r = e) || n) return t ? t[i - 1] : o;
                        return st(t, Ot(0, i - r))
                    },Ft.sample = function (t, e, n) {
                        if (t && "number" != typeof t.length ? t = Oe(t) : Mt.unindexedChars && De(t) && (t = t.split("")), null == e || n) return t ? t[Qt(0, t.length - 1)] : o;
                        var r = Ye(t);
                        return r.length = Rt(Ot(0, e), r.length), r
                    },Ft.take = Ke,Ft.head = Ke,ke(Ft, function (t, e) {
                        var n = "sample" !== e;
                        Ft.prototype[e] || (Ft.prototype[e] = function (e, r) {
                            var i = this.__chain__, o = t(this.__wrapped__, e, r);
                            return i || null != e && (!r || n && "function" == typeof e) ? new qt(o, i) : o
                        })
                    }),Ft.VERSION = "2.4.2",Ft.prototype.chain = function () {
                        return this.__chain__ = !0, this
                    },Ft.prototype.toString = function () {
                        return Y(this.__wrapped__)
                    },Ft.prototype.value = hn,Ft.prototype.valueOf = hn,xe(["join", "pop", "shift"], function (t) {
                        var e = ut[t];
                        Ft.prototype[t] = function () {
                            var t = this.__chain__, n = e.apply(this.__wrapped__, arguments);
                            return t ? new qt(n, t) : n
                        }
                    }),xe(["push", "reverse", "sort", "unshift"], function (t) {
                        var e = ut[t];
                        Ft.prototype[t] = function () {
                            return e.apply(this.__wrapped__, arguments), this
                        }
                    }),xe(["concat", "slice", "splice"], function (t) {
                        var e = ut[t];
                        Ft.prototype[t] = function () {
                            return new qt(e.apply(this.__wrapped__, arguments), this.__chain__)
                        }
                    }),Mt.spliceObjects || xe(["pop", "shift", "splice"], function (t) {
                        var e = ut[t], n = "splice" == t;
                        Ft.prototype[t] = function () {
                            var t = this.__chain__, r = this.__wrapped__, i = e.apply(r, arguments);
                            return 0 === r.length && delete r[0], t || n ? new qt(i, t) : i
                        }
                    }),Ft
                }();
                z._ = lt, (r = function () {
                    return lt
                }.call(e, n, e, t)) === o || (t.exports = r)
            }).call(this)
        }).call(e, n(30)(t), function () {
            return this
        }())
    }, 30: function (t, e) {
        t.exports = function (t) {
            return t.webpackPolyfill || (t.deprecate = function () {
            }, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
        }
    }, 100: function (t, e, n) {
        var r;
        !function () {
            var i = /^[\s,#]+/, o = /\s+$/, a = 0, s = Math, l = s.round, u = s.min, c = s.max, f = s.random,
                p = function t(e, n) {
                    if (e = e || "", n = n || {}, e instanceof t) return e;
                    if (!(this instanceof t)) return new t(e, n);
                    var r = function (t) {
                        var e = {r: 0, g: 0, b: 0}, n = 1, r = !1, a = !1;
                        "string" == typeof t && (t = function (t) {
                            t = t.replace(i, "").replace(o, "").toLowerCase();
                            var e, n = !1;
                            if (A[t]) t = A[t], n = !0; else if ("transparent" == t) return {
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 0,
                                format: "name"
                            };
                            if (e = H.rgb.exec(t)) return {r: e[1], g: e[2], b: e[3]};
                            if (e = H.rgba.exec(t)) return {r: e[1], g: e[2], b: e[3], a: e[4]};
                            if (e = H.hsl.exec(t)) return {h: e[1], s: e[2], l: e[3]};
                            if (e = H.hsla.exec(t)) return {h: e[1], s: e[2], l: e[3], a: e[4]};
                            if (e = H.hsv.exec(t)) return {h: e[1], s: e[2], v: e[3]};
                            if (e = H.hex8.exec(t)) return {
                                a: function (t) {
                                    return P(t) / 255
                                }(e[1]), r: P(e[2]), g: P(e[3]), b: P(e[4]), format: n ? "name" : "hex8"
                            };
                            if (e = H.hex6.exec(t)) return {
                                r: P(e[1]),
                                g: P(e[2]),
                                b: P(e[3]),
                                format: n ? "name" : "hex"
                            };
                            if (e = H.hex3.exec(t)) return {
                                r: P(e[1] + "" + e[1]),
                                g: P(e[2] + "" + e[2]),
                                b: P(e[3] + "" + e[3]),
                                format: n ? "name" : "hex"
                            };
                            return !1
                        }(t));
                        "object" == typeof t && (t.hasOwnProperty("r") && t.hasOwnProperty("g") && t.hasOwnProperty("b") ? (e = function (t, e, n) {
                            return {r: 255 * O(t, 255), g: 255 * O(e, 255), b: 255 * O(n, 255)}
                        }(t.r, t.g, t.b), r = !0, a = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("v") ? (t.s = L(t.s), t.v = L(t.v), e = function (t, e, n) {
                            t = 6 * O(t, 360), e = O(e, 100), n = O(n, 100);
                            var r = s.floor(t), i = t - r, o = n * (1 - e), a = n * (1 - i * e),
                                l = n * (1 - (1 - i) * e), u = r % 6;
                            return {
                                r: 255 * [n, a, o, o, l, n][u],
                                g: 255 * [l, n, n, a, o, o][u],
                                b: 255 * [o, o, l, n, n, a][u]
                            }
                        }(t.h, t.s, t.v), r = !0, a = "hsv") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("l") && (t.s = L(t.s), t.l = L(t.l), e = function (t, e, n) {
                            var r, i, o;

                            function a(t, e, n) {
                                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                            }

                            if (t = O(t, 360), e = O(e, 100), n = O(n, 100), 0 === e) r = i = o = n; else {
                                var s = n < .5 ? n * (1 + e) : n + e - n * e, l = 2 * n - s;
                                r = a(l, s, t + 1 / 3), i = a(l, s, t), o = a(l, s, t - 1 / 3)
                            }
                            return {r: 255 * r, g: 255 * i, b: 255 * o}
                        }(t.h, t.s, t.l), r = !0, a = "hsl"), t.hasOwnProperty("a") && (n = t.a));
                        return n = D(n), {
                            ok: r,
                            format: t.format || a,
                            r: u(255, c(e.r, 0)),
                            g: u(255, c(e.g, 0)),
                            b: u(255, c(e.b, 0)),
                            a: n
                        }
                    }(e);
                    this._r = r.r, this._g = r.g, this._b = r.b, this._a = r.a, this._roundA = l(100 * this._a) / 100, this._format = n.format || r.format, this._gradientType = n.gradientType, this._r < 1 && (this._r = l(this._r)), this._g < 1 && (this._g = l(this._g)), this._b < 1 && (this._b = l(this._b)), this._ok = r.ok, this._tc_id = a++
                };

            function h(t, e, n) {
                t = O(t, 255), e = O(e, 255), n = O(n, 255);
                var r, i, o = c(t, e, n), a = u(t, e, n), s = (o + a) / 2;
                if (o == a) r = i = 0; else {
                    var l = o - a;
                    switch (i = s > .5 ? l / (2 - o - a) : l / (o + a), o) {
                        case t:
                            r = (e - n) / l + (e < n ? 6 : 0);
                            break;
                        case e:
                            r = (n - t) / l + 2;
                            break;
                        case n:
                            r = (t - e) / l + 4
                    }
                    r /= 6
                }
                return {h: r, s: i, l: s}
            }

            function d(t, e, n) {
                t = O(t, 255), e = O(e, 255), n = O(n, 255);
                var r, i, o = c(t, e, n), a = u(t, e, n), s = o, l = o - a;
                if (i = 0 === o ? 0 : l / o, o == a) r = 0; else {
                    switch (o) {
                        case t:
                            r = (e - n) / l + (e < n ? 6 : 0);
                            break;
                        case e:
                            r = (n - t) / l + 2;
                            break;
                        case n:
                            r = (t - e) / l + 4
                    }
                    r /= 6
                }
                return {h: r, s: i, v: s}
            }

            function g(t, e, n, r) {
                var i = [I(l(t).toString(16)), I(l(e).toString(16)), I(l(n).toString(16))];
                return r && i[0].charAt(0) == i[0].charAt(1) && i[1].charAt(0) == i[1].charAt(1) && i[2].charAt(0) == i[2].charAt(1) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) : i.join("")
            }

            function v(t, e, n, r) {
                return [I(function (t) {
                    return Math.round(255 * parseFloat(t)).toString(16)
                }(r)), I(l(t).toString(16)), I(l(e).toString(16)), I(l(n).toString(16))].join("")
            }

            function m(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = p(t).toHsl();
                return n.s -= e / 100, n.s = R(n.s), p(n)
            }

            function y(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = p(t).toHsl();
                return n.s += e / 100, n.s = R(n.s), p(n)
            }

            function b(t) {
                return p(t).desaturate(100)
            }

            function x(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = p(t).toHsl();
                return n.l += e / 100, n.l = R(n.l), p(n)
            }

            function w(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = p(t).toRgb();
                return n.r = c(0, u(255, n.r - l(-e / 100 * 255))), n.g = c(0, u(255, n.g - l(-e / 100 * 255))), n.b = c(0, u(255, n.b - l(-e / 100 * 255))), p(n)
            }

            function C(t, e) {
                e = 0 === e ? 0 : e || 10;
                var n = p(t).toHsl();
                return n.l -= e / 100, n.l = R(n.l), p(n)
            }

            function T(t, e) {
                var n = p(t).toHsl(), r = (l(n.h) + e) % 360;
                return n.h = r < 0 ? 360 + r : r, p(n)
            }

            function k(t) {
                var e = p(t).toHsl();
                return e.h = (e.h + 180) % 360, p(e)
            }

            function _(t) {
                var e = p(t).toHsl(), n = e.h;
                return [p(t), p({h: (n + 120) % 360, s: e.s, l: e.l}), p({h: (n + 240) % 360, s: e.s, l: e.l})]
            }

            function S(t) {
                var e = p(t).toHsl(), n = e.h;
                return [p(t), p({h: (n + 90) % 360, s: e.s, l: e.l}), p({
                    h: (n + 180) % 360,
                    s: e.s,
                    l: e.l
                }), p({h: (n + 270) % 360, s: e.s, l: e.l})]
            }

            function E(t) {
                var e = p(t).toHsl(), n = e.h;
                return [p(t), p({h: (n + 72) % 360, s: e.s, l: e.l}), p({h: (n + 216) % 360, s: e.s, l: e.l})]
            }

            function $(t, e, n) {
                e = e || 6, n = n || 30;
                var r = p(t).toHsl(), i = 360 / n, o = [p(t)];
                for (r.h = (r.h - (i * e >> 1) + 720) % 360; --e;) r.h = (r.h + i) % 360, o.push(p(r));
                return o
            }

            function N(t, e) {
                e = e || 6;
                for (var n = p(t).toHsv(), r = n.h, i = n.s, o = n.v, a = [], s = 1 / e; e--;) a.push(p({
                    h: r,
                    s: i,
                    v: o
                })), o = (o + s) % 1;
                return a
            }

            p.prototype = {
                isDark: function () {
                    return this.getBrightness() < 128
                }, isLight: function () {
                    return !this.isDark()
                }, isValid: function () {
                    return this._ok
                }, getFormat: function () {
                    return this._format
                }, getAlpha: function () {
                    return this._a
                }, getBrightness: function () {
                    var t = this.toRgb();
                    return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
                }, setAlpha: function (t) {
                    return this._a = D(t), this._roundA = l(100 * this._a) / 100, this
                }, toHsv: function () {
                    var t = d(this._r, this._g, this._b);
                    return {h: 360 * t.h, s: t.s, v: t.v, a: this._a}
                }, toHsvString: function () {
                    var t = d(this._r, this._g, this._b), e = l(360 * t.h), n = l(100 * t.s), r = l(100 * t.v);
                    return 1 == this._a ? "hsv(" + e + ", " + n + "%, " + r + "%)" : "hsva(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")"
                }, toHsl: function () {
                    var t = h(this._r, this._g, this._b);
                    return {h: 360 * t.h, s: t.s, l: t.l, a: this._a}
                }, toHslString: function () {
                    var t = h(this._r, this._g, this._b), e = l(360 * t.h), n = l(100 * t.s), r = l(100 * t.l);
                    return 1 == this._a ? "hsl(" + e + ", " + n + "%, " + r + "%)" : "hsla(" + e + ", " + n + "%, " + r + "%, " + this._roundA + ")"
                }, toHex: function (t) {
                    return g(this._r, this._g, this._b, t)
                }, toHexString: function (t) {
                    return "#" + this.toHex(t)
                }, toHex8: function () {
                    return v(this._r, this._g, this._b, this._a)
                }, toHex8String: function () {
                    return "#" + this.toHex8()
                }, toRgb: function () {
                    return {r: l(this._r), g: l(this._g), b: l(this._b), a: this._a}
                }, toRgbString: function () {
                    return 1 == this._a ? "rgb(" + l(this._r) + ", " + l(this._g) + ", " + l(this._b) + ")" : "rgba(" + l(this._r) + ", " + l(this._g) + ", " + l(this._b) + ", " + this._roundA + ")"
                }, toPercentageRgb: function () {
                    return {
                        r: l(100 * O(this._r, 255)) + "%",
                        g: l(100 * O(this._g, 255)) + "%",
                        b: l(100 * O(this._b, 255)) + "%",
                        a: this._a
                    }
                }, toPercentageRgbString: function () {
                    return 1 == this._a ? "rgb(" + l(100 * O(this._r, 255)) + "%, " + l(100 * O(this._g, 255)) + "%, " + l(100 * O(this._b, 255)) + "%)" : "rgba(" + l(100 * O(this._r, 255)) + "%, " + l(100 * O(this._g, 255)) + "%, " + l(100 * O(this._b, 255)) + "%, " + this._roundA + ")"
                }, toName: function () {
                    return 0 === this._a ? "transparent" : !(this._a < 1) && (j[g(this._r, this._g, this._b, !0)] || !1)
                }, toFilter: function (t) {
                    var e = "#" + v(this._r, this._g, this._b, this._a), n = e,
                        r = this._gradientType ? "GradientType = 1, " : "";
                    t && (n = p(t).toHex8String());
                    return "progid:DXImageTransform.Microsoft.gradient(" + r + "startColorstr=" + e + ",endColorstr=" + n + ")"
                }, toString: function (t) {
                    var e = !!t;
                    t = t || this._format;
                    var n = !1, r = this._a < 1 && this._a >= 0;
                    return e || !r || "hex" !== t && "hex6" !== t && "hex3" !== t && "name" !== t ? ("rgb" === t && (n = this.toRgbString()), "prgb" === t && (n = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (n = this.toHexString()), "hex3" === t && (n = this.toHexString(!0)), "hex8" === t && (n = this.toHex8String()), "name" === t && (n = this.toName()), "hsl" === t && (n = this.toHslString()), "hsv" === t && (n = this.toHsvString()), n || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
                }, _applyModification: function (t, e) {
                    var n = t.apply(null, [this].concat([].slice.call(e)));
                    return this._r = n._r, this._g = n._g, this._b = n._b, this.setAlpha(n._a), this
                }, lighten: function () {
                    return this._applyModification(x, arguments)
                }, brighten: function () {
                    return this._applyModification(w, arguments)
                }, darken: function () {
                    return this._applyModification(C, arguments)
                }, desaturate: function () {
                    return this._applyModification(m, arguments)
                }, saturate: function () {
                    return this._applyModification(y, arguments)
                }, greyscale: function () {
                    return this._applyModification(b, arguments)
                }, spin: function () {
                    return this._applyModification(T, arguments)
                }, _applyCombination: function (t, e) {
                    return t.apply(null, [this].concat([].slice.call(e)))
                }, analogous: function () {
                    return this._applyCombination($, arguments)
                }, complement: function () {
                    return this._applyCombination(k, arguments)
                }, monochromatic: function () {
                    return this._applyCombination(N, arguments)
                }, splitcomplement: function () {
                    return this._applyCombination(E, arguments)
                }, triad: function () {
                    return this._applyCombination(_, arguments)
                }, tetrad: function () {
                    return this._applyCombination(S, arguments)
                }
            }, p.fromRatio = function (t, e) {
                if ("object" == typeof t) {
                    var n = {};
                    for (var r in t) t.hasOwnProperty(r) && (n[r] = "a" === r ? t[r] : L(t[r]));
                    t = n
                }
                return p(t, e)
            }, p.equals = function (t, e) {
                return !(!t || !e) && p(t).toRgbString() == p(e).toRgbString()
            }, p.random = function () {
                return p.fromRatio({r: f(), g: f(), b: f()})
            }, p.mix = function (t, e, n) {
                n = 0 === n ? 0 : n || 50;
                var r, i = p(t).toRgb(), o = p(e).toRgb(), a = n / 100, s = 2 * a - 1, l = o.a - i.a,
                    u = 1 - (r = ((r = s * l == -1 ? s : (s + l) / (1 + s * l)) + 1) / 2),
                    c = {r: o.r * r + i.r * u, g: o.g * r + i.g * u, b: o.b * r + i.b * u, a: o.a * a + i.a * (1 - a)};
                return p(c)
            }, p.readability = function (t, e) {
                var n = p(t), r = p(e), i = n.toRgb(), o = r.toRgb(), a = n.getBrightness(), s = r.getBrightness(),
                    l = Math.max(i.r, o.r) - Math.min(i.r, o.r) + Math.max(i.g, o.g) - Math.min(i.g, o.g) + Math.max(i.b, o.b) - Math.min(i.b, o.b);
                return {brightness: Math.abs(a - s), color: l}
            }, p.isReadable = function (t, e) {
                var n = p.readability(t, e);
                return n.brightness > 125 && n.color > 500
            }, p.mostReadable = function (t, e) {
                for (var n = null, r = 0, i = !1, o = 0; o < e.length; o++) {
                    var a = p.readability(t, e[o]), s = a.brightness > 125 && a.color > 500,
                        l = a.brightness / 125 * 3 + a.color / 500;
                    (s && !i || s && i && l > r || !s && !i && l > r) && (i = s, r = l, n = p(e[o]))
                }
                return n
            };
            var A = p.names = {
                aliceblue: "f0f8ff",
                antiquewhite: "faebd7",
                aqua: "0ff",
                aquamarine: "7fffd4",
                azure: "f0ffff",
                beige: "f5f5dc",
                bisque: "ffe4c4",
                black: "000",
                blanchedalmond: "ffebcd",
                blue: "00f",
                blueviolet: "8a2be2",
                brown: "a52a2a",
                burlywood: "deb887",
                burntsienna: "ea7e5d",
                cadetblue: "5f9ea0",
                chartreuse: "7fff00",
                chocolate: "d2691e",
                coral: "ff7f50",
                cornflowerblue: "6495ed",
                cornsilk: "fff8dc",
                crimson: "dc143c",
                cyan: "0ff",
                darkblue: "00008b",
                darkcyan: "008b8b",
                darkgoldenrod: "b8860b",
                darkgray: "a9a9a9",
                darkgreen: "006400",
                darkgrey: "a9a9a9",
                darkkhaki: "bdb76b",
                darkmagenta: "8b008b",
                darkolivegreen: "556b2f",
                darkorange: "ff8c00",
                darkorchid: "9932cc",
                darkred: "8b0000",
                darksalmon: "e9967a",
                darkseagreen: "8fbc8f",
                darkslateblue: "483d8b",
                darkslategray: "2f4f4f",
                darkslategrey: "2f4f4f",
                darkturquoise: "00ced1",
                darkviolet: "9400d3",
                deeppink: "ff1493",
                deepskyblue: "00bfff",
                dimgray: "696969",
                dimgrey: "696969",
                dodgerblue: "1e90ff",
                firebrick: "b22222",
                floralwhite: "fffaf0",
                forestgreen: "228b22",
                fuchsia: "f0f",
                gainsboro: "dcdcdc",
                ghostwhite: "f8f8ff",
                gold: "ffd700",
                goldenrod: "daa520",
                gray: "808080",
                green: "008000",
                greenyellow: "adff2f",
                grey: "808080",
                honeydew: "f0fff0",
                hotpink: "ff69b4",
                indianred: "cd5c5c",
                indigo: "4b0082",
                ivory: "fffff0",
                khaki: "f0e68c",
                lavender: "e6e6fa",
                lavenderblush: "fff0f5",
                lawngreen: "7cfc00",
                lemonchiffon: "fffacd",
                lightblue: "add8e6",
                lightcoral: "f08080",
                lightcyan: "e0ffff",
                lightgoldenrodyellow: "fafad2",
                lightgray: "d3d3d3",
                lightgreen: "90ee90",
                lightgrey: "d3d3d3",
                lightpink: "ffb6c1",
                lightsalmon: "ffa07a",
                lightseagreen: "20b2aa",
                lightskyblue: "87cefa",
                lightslategray: "789",
                lightslategrey: "789",
                lightsteelblue: "b0c4de",
                lightyellow: "ffffe0",
                lime: "0f0",
                limegreen: "32cd32",
                linen: "faf0e6",
                magenta: "f0f",
                maroon: "800000",
                mediumaquamarine: "66cdaa",
                mediumblue: "0000cd",
                mediumorchid: "ba55d3",
                mediumpurple: "9370db",
                mediumseagreen: "3cb371",
                mediumslateblue: "7b68ee",
                mediumspringgreen: "00fa9a",
                mediumturquoise: "48d1cc",
                mediumvioletred: "c71585",
                midnightblue: "191970",
                mintcream: "f5fffa",
                mistyrose: "ffe4e1",
                moccasin: "ffe4b5",
                navajowhite: "ffdead",
                navy: "000080",
                oldlace: "fdf5e6",
                olive: "808000",
                olivedrab: "6b8e23",
                orange: "ffa500",
                orangered: "ff4500",
                orchid: "da70d6",
                palegoldenrod: "eee8aa",
                palegreen: "98fb98",
                paleturquoise: "afeeee",
                palevioletred: "db7093",
                papayawhip: "ffefd5",
                peachpuff: "ffdab9",
                peru: "cd853f",
                pink: "ffc0cb",
                plum: "dda0dd",
                powderblue: "b0e0e6",
                purple: "800080",
                red: "f00",
                rosybrown: "bc8f8f",
                royalblue: "4169e1",
                saddlebrown: "8b4513",
                salmon: "fa8072",
                sandybrown: "f4a460",
                seagreen: "2e8b57",
                seashell: "fff5ee",
                sienna: "a0522d",
                silver: "c0c0c0",
                skyblue: "87ceeb",
                slateblue: "6a5acd",
                slategray: "708090",
                slategrey: "708090",
                snow: "fffafa",
                springgreen: "00ff7f",
                steelblue: "4682b4",
                tan: "d2b48c",
                teal: "008080",
                thistle: "d8bfd8",
                tomato: "ff6347",
                turquoise: "40e0d0",
                violet: "ee82ee",
                wheat: "f5deb3",
                white: "fff",
                whitesmoke: "f5f5f5",
                yellow: "ff0",
                yellowgreen: "9acd32"
            }, j = p.hexNames = function (t) {
                var e = {};
                for (var n in t) t.hasOwnProperty(n) && (e[t[n]] = n);
                return e
            }(A);

            function D(t) {
                return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t
            }

            function O(t, e) {
                (function (t) {
                    return "string" == typeof t && -1 != t.indexOf(".") && 1 === parseFloat(t)
                })(t) && (t = "100%");
                var n = function (t) {
                    return "string" == typeof t && -1 != t.indexOf("%")
                }(t);
                return t = u(e, c(0, parseFloat(t))), n && (t = parseInt(t * e, 10) / 100), s.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
            }

            function R(t) {
                return u(1, c(0, t))
            }

            function P(t) {
                return parseInt(t, 16)
            }

            function I(t) {
                return 1 == t.length ? "0" + t : "" + t
            }

            function L(t) {
                return t <= 1 && (t = 100 * t + "%"), t
            }

            var H = function () {
                var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
                    e = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
                    n = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
                return {
                    rgb: new RegExp("rgb" + e),
                    rgba: new RegExp("rgba" + n),
                    hsl: new RegExp("hsl" + e),
                    hsla: new RegExp("hsla" + n),
                    hsv: new RegExp("hsv" + e),
                    hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                    hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                    hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                }
            }();
            void 0 !== t && t.exports ? t.exports = p : void 0 === (r = function () {
                return p
            }.call(e, n, e, t)) || (t.exports = r)
        }()
    }, 415: function (t, e, n) {
        (function (t, e) {
            n(28), n(100), n(5), n(13), t.fn.serializeObject = function () {
                var e = {}, n = this.serializeArray();
                return t.each(n, function () {
                    e[this.name] ? (e[this.name].push || (e[this.name] = [e[this.name]]), e[this.name].push(this.value || "")) : e[this.name] = this.value || ""
                }), e
            }, t(function () {
                window.file = !1, t(".fileupload").click(function (e) {
                    e.preventDefault(), t(".image_uploader").click(), t(".owl-signup").removeClass("step1 step2 step3"), t(".owl-signup").addClass("step" + t(this).data("step"))
                }), t(".sample_logo").click(function (t) {
                    t.preventDefault(), uploaded(["https://files.readme.io/JkLUlRaMSUOuUatO0XDi_sample-logo.png", "sample-logo.png", "291", "80", "#5ea43f", "https://files.readme.io/JkLUlRaMSUOuUatO0XDi_sample-logo.png"])
                }), t("#owl-login").click(function () {
                    t(this).toggleClass("password", !t(this).hasClass("password"))
                }), t("#form-parent #email").keyup(function () {
                    e(t(this).val())
                });
                var e = function () {
                    var e = !1;
                    return function (n) {
                        (n = function (t) {
                            return t.match(/@gma[i]?[l]?[.]?[c]?[o]?[m]?$/) ? t.split("@")[0] + "@gmail.com" : t
                        }(n)).match(/(.*)@(.*)\.[a-zA-Z0-9]{3,10}/) && n !== e && (e = n, t.get("/email-lookup", {email: n}, function (e) {
                            e.name && !t("#form-parent #name").val().length && t("#form-parent #name").val(e.name)
                        }))
                    }
                }();

                function n(e, n) {
                    e = JSON.parse(e.responseText), t.each(e.errors, function (e, r) {
                        "hashed_password" === e && (e = "password");
                        var i = t("<div>", {class: "error", text: r}), o = t("[name=" + e.replace(/\./, "_") + "]", n);
                        o.parent().hasClass("input-group") && (o = o.parent()), o.parent().find("p.info").hide(), o.after(i)
                    })
                }

                t("#login #password").focus(function () {
                    t("#owl-login").addClass("password")
                }).blur(function () {
                    t("#owl-login").removeClass("password")
                }), t("#signup-main input, #signup-project input, #signup-project .fileupload").focus(function () {
                    t(this).data("step") && (t(".owl-signup").removeClass("step1 step2 step3"), t(".owl-signup").addClass("step" + t(this).data("step")))
                }), t("#signup-project .dropdown-toggle").focus(function () {
                    t(this).data("step") && (t(".owl-signup").removeClass("step1 step2 step3"), t(".owl-signup").addClass("step" + t(this).data("step")))
                }), t("#signup-project").hide(), t("#signup-project-dropdown li").click(function (e) {
                    var n = t(e.target).text(), r = t(e.target).attr("select-value");
                    t(this).closest(".dropdown").find("button").text(n), t(this).closest(".dropdown").find("button").addClass("selected"), t(this).closest(".dropdown").find("button").attr("select-value", r), t(this).closest(".dropdown").find("button").append('<span class="caret"></span>')
                }), t("#signup-main").submit(function (e) {
                    e.preventDefault();
                    var r = t(this);
                    t(".error", r).remove(), t("[type=submit]", r).attr("disabled", !0).html("Signing up&hellip;"), t.post(t(this).attr("action"), t(this).serialize(), function () {
                        window.location.href.match(/invite/) ? window.location = "/" : (t("#signup-project").show(), setTimeout(function () {
                            t("#form-parent").addClass("next"), setTimeout(function () {
                                t("#project-name").focus()
                            }, 600)
                        }, 300), window.readMeAbTestFlag && t(".sample_logo").click())
                    }).fail(function (e) {
                        t("[type=submit]", r).attr("disabled", !1).text("Sign Up"), n(e, r), updateHeight()
                    })
                });
                var r = {changed: !1, value: ""};

                function i() {
                    r.value.length > 3 && t.get("/subdomain-lookup", {subdomain: r.value}, function (e) {
                        e.exists ? t("#subdomain-info").text("This subdomain already exists").removeClass("subdomain-success").addClass("subdomain-error") : t("#subdomain-info").text("This subdomain is available!").removeClass("subdomain-error").addClass("subdomain-success")
                    })
                }

                t("#project-subdomain").keyup(function () {
                    r.changed = r.changed || r.value !== t(this).val(), i()
                }), t("#project-name").keyup(function () {
                    if (!r.changed) {
                        var e = t(this).val();
                        e = (e = (e = e.replace(/\s+/g, "-")).replace(/[^a-zA-Z0-9_-]/g, "")).toLowerCase(), t("#project-subdomain").val(e), r.value = e, i()
                    }
                }), t("#signup-project").submit(function (e) {
                    e.preventDefault();
                    var r = t(this);
                    t(".error", r).remove(), t("input[name=useCase]:checked").val() || t(".dropdown-container .input-group").after('<div class="error">Please make a selection!</div>'), window.file || uploaded(["https://files.readme.io/JkLUlRaMSUOuUatO0XDi_sample-logo.png", "sample-logo.png", "291", "80", "#5ea43f", "https://files.readme.io/JkLUlRaMSUOuUatO0XDi_sample-logo.png"]);
                    var i = t(this).serializeObject();
                    i.appearance = {logo: file}, t("[type=submit]", r).attr("disabled", !0).html("Creating&hellip;"), t.post(t(this).attr("action"), i, function () {
                        "undefined" != typeof ga && ga("send", "event", "create", "click", "signup"), window.gtag("event", "conversion", {send_to: "AW-939457589/aVUeCK_0hp0BELX4-78D"}), window.location = "/project/" + i.subdomain + "/v1.0/overview"
                    }).fail(function (e) {
                        t("[type=submit]", r).attr("disabled", !1).html("Create Project"), n(e, r)
                    })
                })
            }), window.getUpload = function (e) {
                t(".fileupload").text("Uploading..."), t("[type=submit]").attr("disabled", !0);
                var n = e.files, r = new FileReader;
                r.onload = function (e) {
                    t.ajax({
                        type: "POST",
                        url: window.location.protocol + "//" + window.location.host + "/api/images/image-upload-blob",
                        data: {name: n[0].name, image: e.target.result, resize: 80},
                        success: function (t) {
                            var e = new Image;
                            e.onload = function () {
                                t[2] = e.naturalWidth, t[3] = e.naturalHeight, uploaded(t)
                            }, e.src = t[0]
                        }
                    })
                }, r.readAsDataURL(n[0])
            }, window.uploaded = function (e) {
                window.file = e, t("[type=submit]").attr("disabled", !1), t(".fileupload").text("Upload Logo"), t(".fu-remove").hide(), file && t(".fileupload").css("background-image", 'url("' + file[0] + '")').removeClass("button").addClass("img")
            };
            !function (t) {
                e.ajaxPrefilter(function (e, n, r) {
                    r.crossDomain || r.setRequestHeader("X-CSRF-Token", t)
                })
            }(t('meta[name="csrf-token"]').attr("content")), t(function () {
                t("#spinner").length && function (e) {
                    var n = [], r = t("li", e);
                    r.each(function () {
                        n.push(t(this).text())
                    }), r.remove();
                    var i = t("#spinner-show"), o = 0, a = 1;
                    t(".next em", i).text(n[a]), setInterval(function () {
                        i.width(t(".current").width()), i.addClass("swap"), o = a, (a += 1) >= n.length && (a = 0), i.width(t(".next em").width()), setTimeout(function () {
                            t(".next em", i).text(n[a]), t(".current", i).text(n[o]), i.removeClass("swap")
                        }, 600)
                    }, 3800)
                }(t("#spinner"))
            })
        }).call(e, n(5), n(5))
    }
});