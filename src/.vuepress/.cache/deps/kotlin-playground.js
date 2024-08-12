import {
  __commonJS
} from "./chunk-MTI3AIJG.js";

// ../../node_modules/.pnpm/kotlin-playground@1.30.0/node_modules/kotlin-playground/dist/playground.min.js
var require_playground_min = __commonJS({
  "../../node_modules/.pnpm/kotlin-playground@1.30.0/node_modules/kotlin-playground/dist/playground.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.KotlinPlayground = t() : e.KotlinPlayground = t();
    }(self, function() {
      return function() {
        var e = { 1714: function(e2, t2, n2) {
          "use strict";
          n2.r(t2), n2.d(t2, { default: function() {
            return h;
          } });
          var r2 = n2(3755), o = n2.n(r2), i = n2(8167), a = n2(1314), s = n2(600), l = n2(1677), c = n2(2968), u = n2(5002), f = n2(8428), d = n2.n(f), p = n2(5561);
          var h = function(e3) {
            (0, l.Z)(f2, e3);
            var t3, n3, r3 = (t3 = f2, n3 = function() {
              if ("undefined" == typeof Reflect || !o()) return false;
              if (o().sham) return false;
              if ("function" == typeof Proxy) return true;
              try {
                return Boolean.prototype.valueOf.call(o()(Boolean, [], function() {
                })), true;
              } catch (e4) {
                return false;
              }
            }(), function() {
              var e4, r4 = (0, u.Z)(t3);
              if (n3) {
                var i2 = (0, u.Z)(this).constructor;
                e4 = o()(r4, arguments, i2);
              } else e4 = r4.apply(this, arguments);
              return (0, c.Z)(this, e4);
            });
            function f2() {
              var e4;
              return (0, i.Z)(this, f2), (e4 = r3.call(this)).state = { onExceptionClick: null }, e4;
            }
            return (0, a.Z)(f2, [{ key: "update", value: function(e4) {
              d()(this.state, e4), (0, s.Z)((0, u.Z)(f2.prototype), "update", this).call(this, e4);
            } }, { key: "onStackTraceClick", value: function(e4, t4) {
              this.state.onExceptionClick(e4, t4);
            } }]), f2;
          }(n2.n(p)());
        }, 4504: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            var t3 = {}, n3 = /[^\s\u00a0]/, r2 = e3.Pos, o = e3.cmpPos;
            function i(e4) {
              var t4 = e4.search(n3);
              return -1 == t4 ? 0 : t4;
            }
            function a(e4, t4) {
              var n4 = e4.getMode();
              return false !== n4.useInnerComments && n4.innerMode ? e4.getModeAt(t4) : n4;
            }
            e3.commands.toggleComment = function(e4) {
              e4.toggleComment();
            }, e3.defineExtension("toggleComment", function(e4) {
              e4 || (e4 = t3);
              for (var n4 = this, o2 = 1 / 0, i2 = this.listSelections(), a2 = null, s = i2.length - 1; s >= 0; s--) {
                var l = i2[s].from(), c = i2[s].to();
                l.line >= o2 || (c.line >= o2 && (c = r2(o2, 0)), o2 = l.line, null == a2 ? n4.uncomment(l, c, e4) ? a2 = "un" : (n4.lineComment(l, c, e4), a2 = "line") : "un" == a2 ? n4.uncomment(l, c, e4) : n4.lineComment(l, c, e4));
              }
            }), e3.defineExtension("lineComment", function(e4, o2, s) {
              s || (s = t3);
              var l, c, u = this, f = a(u, e4), d = u.getLine(e4.line);
              if (null != d && (l = e4, c = d, !/\bstring\b/.test(u.getTokenTypeAt(r2(l.line, 0))) || /^[\'\"\`]/.test(c))) {
                var p = s.lineComment || f.lineComment;
                if (p) {
                  var h = Math.min(0 != o2.ch || o2.line == e4.line ? o2.line + 1 : o2.line, u.lastLine() + 1), m = null == s.padding ? " " : s.padding, g = s.commentBlankLines || e4.line == o2.line;
                  u.operation(function() {
                    if (s.indent) {
                      for (var t4 = null, o3 = e4.line; o3 < h; ++o3) {
                        var a2 = -1 === (l2 = u.getLine(o3)).search(n3) ? l2 : l2.slice(0, i(l2));
                        (null == t4 || t4.length > a2.length) && (t4 = a2);
                      }
                      for (o3 = e4.line; o3 < h; ++o3) {
                        var l2 = u.getLine(o3), c2 = t4.length;
                        (g || n3.test(l2)) && (l2.slice(0, c2) != t4 && (c2 = i(l2)), u.replaceRange(t4 + p + m, r2(o3, 0), r2(o3, c2)));
                      }
                    } else for (o3 = e4.line; o3 < h; ++o3) (g || n3.test(u.getLine(o3))) && u.replaceRange(p + m, r2(o3, 0));
                  });
                } else (s.blockCommentStart || f.blockCommentStart) && (s.fullLines = true, u.blockComment(e4, o2, s));
              }
            }), e3.defineExtension("blockComment", function(e4, i2, s) {
              s || (s = t3);
              var l = this, c = a(l, e4), u = s.blockCommentStart || c.blockCommentStart, f = s.blockCommentEnd || c.blockCommentEnd;
              if (u && f) {
                if (!/\bcomment\b/.test(l.getTokenTypeAt(r2(e4.line, 0)))) {
                  var d = Math.min(i2.line, l.lastLine());
                  d != e4.line && 0 == i2.ch && n3.test(l.getLine(d)) && --d;
                  var p = null == s.padding ? " " : s.padding;
                  e4.line > d || l.operation(function() {
                    if (0 != s.fullLines) {
                      var t4 = n3.test(l.getLine(d));
                      l.replaceRange(p + f, r2(d)), l.replaceRange(u + p, r2(e4.line, 0));
                      var a2 = s.blockCommentLead || c.blockCommentLead;
                      if (null != a2) for (var h = e4.line + 1; h <= d; ++h) (h != d || t4) && l.replaceRange(a2 + p, r2(h, 0));
                    } else {
                      var m = 0 == o(l.getCursor("to"), i2), g = !l.somethingSelected();
                      l.replaceRange(f, i2), m && l.setSelection(g ? i2 : l.getCursor("from"), i2), l.replaceRange(u, e4);
                    }
                  });
                }
              } else (s.lineComment || c.lineComment) && 0 != s.fullLines && l.lineComment(e4, i2, s);
            }), e3.defineExtension("uncomment", function(e4, o2, i2) {
              i2 || (i2 = t3);
              var s, l = this, c = a(l, e4), u = Math.min(0 != o2.ch || o2.line == e4.line ? o2.line : o2.line - 1, l.lastLine()), f = Math.min(e4.line, u), d = i2.lineComment || c.lineComment, p = [], h = null == i2.padding ? " " : i2.padding;
              e: if (d) {
                for (var m = f; m <= u; ++m) {
                  var g = l.getLine(m), v = g.indexOf(d);
                  if (v > -1 && !/comment/.test(l.getTokenTypeAt(r2(m, v + 1))) && (v = -1), -1 == v && n3.test(g)) break e;
                  if (v > -1 && n3.test(g.slice(0, v))) break e;
                  p.push(g);
                }
                if (l.operation(function() {
                  for (var e5 = f; e5 <= u; ++e5) {
                    var t4 = p[e5 - f], n4 = t4.indexOf(d), o3 = n4 + d.length;
                    n4 < 0 || (t4.slice(o3, o3 + h.length) == h && (o3 += h.length), s = true, l.replaceRange("", r2(e5, n4), r2(e5, o3)));
                  }
                }), s) return true;
              }
              var A = i2.blockCommentStart || c.blockCommentStart, y = i2.blockCommentEnd || c.blockCommentEnd;
              if (!A || !y) return false;
              var b = i2.blockCommentLead || c.blockCommentLead, C = l.getLine(f), x = C.indexOf(A);
              if (-1 == x) return false;
              var w = u == f ? C : l.getLine(u), k = w.indexOf(y, u == f ? x + A.length : 0), E = r2(f, x + 1), _ = r2(u, k + 1);
              if (-1 == k || !/comment/.test(l.getTokenTypeAt(E)) || !/comment/.test(l.getTokenTypeAt(_)) || l.getRange(E, _, "\n").indexOf(y) > -1) return false;
              var S = C.lastIndexOf(A, e4.ch), M = -1 == S ? -1 : C.slice(0, e4.ch).indexOf(y, S + A.length);
              if (-1 != S && -1 != M && M + y.length != e4.ch) return false;
              M = w.indexOf(y, o2.ch);
              var B = w.slice(o2.ch).lastIndexOf(A, M - o2.ch);
              return S = -1 == M || -1 == B ? -1 : o2.ch + B, (-1 == M || -1 == S || S == o2.ch) && (l.operation(function() {
                l.replaceRange("", r2(u, k - (h && w.slice(k - h.length, k) == h ? h.length : 0)), r2(u, k + y.length));
                var e5 = x + A.length;
                if (h && C.slice(e5, e5 + h.length) == h && (e5 += h.length), l.replaceRange("", r2(f, x), r2(f, e5)), b) for (var t4 = f + 1; t4 <= u; ++t4) {
                  var o3 = l.getLine(t4), i3 = o3.indexOf(b);
                  if (-1 != i3 && !n3.test(o3.slice(0, i3))) {
                    var a2 = i3 + b.length;
                    h && o3.slice(a2, a2 + h.length) == h && (a2 += h.length), l.replaceRange("", r2(t4, i3), r2(t4, a2));
                  }
                }
              }), true);
            });
          }(n2(4631));
        }, 6154: function(e2, t2, n2) {
          !function(e3) {
            var t3 = /\S/g, n3 = String.prototype.repeat || function(e4) {
              return Array(e4 + 1).join(this);
            };
            function r2(t4) {
              if (t4.getOption("disableInput")) return e3.Pass;
              for (var r3, a = t4.listSelections(), s = [], l = 0; l < a.length; l++) {
                var c = a[l].head;
                if (!/\bcomment\b/.test(t4.getTokenTypeAt(c))) return e3.Pass;
                var u = t4.getModeAt(c);
                if (r3) {
                  if (r3 != u) return e3.Pass;
                } else r3 = u;
                var f, d, p = null, h = r3.blockCommentStart, m = r3.lineComment;
                if (h && r3.blockCommentContinue) {
                  var g = (f = t4.getLine(c.line)).lastIndexOf(r3.blockCommentEnd, c.ch - r3.blockCommentEnd.length);
                  if (-1 != g && g == c.ch - r3.blockCommentEnd.length || m && (d = f.lastIndexOf(m, c.ch - 1)) > -1 && /\bcomment\b/.test(t4.getTokenTypeAt({ line: c.line, ch: d + 1 }))) ;
                  else if (c.ch >= h.length && (d = f.lastIndexOf(h, c.ch - h.length)) > -1 && d > g) if (o(0, f) >= d) p = f.slice(0, d);
                  else {
                    var v, A = t4.options.tabSize;
                    d = e3.countColumn(f, d, A), p = t4.options.indentWithTabs ? n3.call("	", v = Math.floor(d / A)) + n3.call(" ", d - A * v) : n3.call(" ", d);
                  }
                  else (d = f.indexOf(r3.blockCommentContinue)) > -1 && d <= c.ch && d <= o(0, f) && (p = f.slice(0, d));
                  null != p && (p += r3.blockCommentContinue);
                }
                if (null == p && m && i(t4)) if (null == f && (f = t4.getLine(c.line)), d = f.indexOf(m), c.ch || d) {
                  if (d > -1 && o(0, f) >= d) {
                    if (!(p = o(c.ch, f) > -1)) {
                      var y = t4.getLine(c.line + 1) || "", b = y.indexOf(m);
                      p = b > -1 && o(0, y) >= b || null;
                    }
                    p && (p = f.slice(0, d) + m + f.slice(d + m.length).match(/^\s*/)[0]);
                  }
                } else p = "";
                if (null == p) return e3.Pass;
                s[l] = "\n" + p;
              }
              t4.operation(function() {
                for (var e4 = a.length - 1; e4 >= 0; e4--) t4.replaceRange(s[e4], a[e4].from(), a[e4].to(), "+insert");
              });
            }
            function o(e4, n4) {
              t3.lastIndex = e4;
              var r3 = t3.exec(n4);
              return r3 ? r3.index : -1;
            }
            function i(e4) {
              var t4 = e4.getOption("continueComments");
              return !t4 || "object" != typeof t4 || false !== t4.continueLineComment;
            }
            e3.defineOption("continueComments", null, function(t4, n4, o2) {
              if (o2 && o2 != e3.Init && t4.removeKeyMap("continueComment"), n4) {
                var i2 = "Enter";
                "string" == typeof n4 ? i2 = n4 : "object" == typeof n4 && n4.key && (i2 = n4.key);
                var a = { name: "continueComment" };
                a[i2] = r2, t4.addKeyMap(a);
              }
            });
          }(n2(4631));
        }, 2801: function(e2, t2, n2) {
          !function(e3) {
            var t3 = { pairs: `()[]{}''""`, closeBefore: `)]}'":;>`, triples: "", explode: "[]{}" }, n3 = e3.Pos;
            function r2(e4, n4) {
              return "pairs" == n4 && "string" == typeof e4 ? e4 : "object" == typeof e4 && null != e4[n4] ? e4[n4] : t3[n4];
            }
            e3.defineOption("autoCloseBrackets", false, function(t4, n4, a2) {
              a2 && a2 != e3.Init && (t4.removeKeyMap(o), t4.state.closeBrackets = null), n4 && (i(r2(n4, "pairs")), t4.state.closeBrackets = n4, t4.addKeyMap(o));
            });
            var o = { Backspace: function(t4) {
              var o2 = s(t4);
              if (!o2 || t4.getOption("disableInput")) return e3.Pass;
              for (var i2 = r2(o2, "pairs"), a2 = t4.listSelections(), l2 = 0; l2 < a2.length; l2++) {
                if (!a2[l2].empty()) return e3.Pass;
                var c2 = u(t4, a2[l2].head);
                if (!c2 || i2.indexOf(c2) % 2 != 0) return e3.Pass;
              }
              for (l2 = a2.length - 1; l2 >= 0; l2--) {
                var f2 = a2[l2].head;
                t4.replaceRange("", n3(f2.line, f2.ch - 1), n3(f2.line, f2.ch + 1), "+delete");
              }
            }, Enter: function(t4) {
              var n4 = s(t4), o2 = n4 && r2(n4, "explode");
              if (!o2 || t4.getOption("disableInput")) return e3.Pass;
              for (var i2 = t4.listSelections(), a2 = 0; a2 < i2.length; a2++) {
                if (!i2[a2].empty()) return e3.Pass;
                var c2 = u(t4, i2[a2].head);
                if (!c2 || o2.indexOf(c2) % 2 != 0) return e3.Pass;
              }
              t4.operation(function() {
                var e4 = t4.lineSeparator() || "\n";
                t4.replaceSelection(e4 + e4, null), l(t4, -1), i2 = t4.listSelections();
                for (var n5 = 0; n5 < i2.length; n5++) {
                  var r3 = i2[n5].head.line;
                  t4.indentLine(r3, null, true), t4.indentLine(r3 + 1, null, true);
                }
              });
            } };
            function i(e4) {
              for (var t4 = 0; t4 < e4.length; t4++) {
                var n4 = e4.charAt(t4), r3 = "'" + n4 + "'";
                o[r3] || (o[r3] = a(n4));
              }
            }
            function a(t4) {
              return function(o2) {
                return function(t5, o3) {
                  var i2 = s(t5);
                  if (!i2 || t5.getOption("disableInput")) return e3.Pass;
                  var a2 = r2(i2, "pairs"), u2 = a2.indexOf(o3);
                  if (-1 == u2) return e3.Pass;
                  for (var d, p = r2(i2, "closeBefore"), h = r2(i2, "triples"), m = a2.charAt(u2 + 1) == o3, g = t5.listSelections(), v = u2 % 2 == 0, A = 0; A < g.length; A++) {
                    var y, b = g[A], C = b.head, x = t5.getRange(C, n3(C.line, C.ch + 1));
                    if (v && !b.empty()) y = "surround";
                    else if (!m && v || x != o3) if (m && C.ch > 1 && h.indexOf(o3) >= 0 && t5.getRange(n3(C.line, C.ch - 2), C) == o3 + o3) {
                      if (C.ch > 2 && /\bstring/.test(t5.getTokenTypeAt(n3(C.line, C.ch - 2)))) return e3.Pass;
                      y = "addFour";
                    } else if (m) {
                      var w = 0 == C.ch ? " " : t5.getRange(n3(C.line, C.ch - 1), C);
                      if (e3.isWordChar(x) || w == o3 || e3.isWordChar(w)) return e3.Pass;
                      y = "both";
                    } else {
                      if (!v || !(0 === x.length || /\s/.test(x) || p.indexOf(x) > -1)) return e3.Pass;
                      y = "both";
                    }
                    else y = m && f(t5, C) ? "both" : h.indexOf(o3) >= 0 && t5.getRange(C, n3(C.line, C.ch + 3)) == o3 + o3 + o3 ? "skipThree" : "skip";
                    if (d) {
                      if (d != y) return e3.Pass;
                    } else d = y;
                  }
                  var k = u2 % 2 ? a2.charAt(u2 - 1) : o3, E = u2 % 2 ? o3 : a2.charAt(u2 + 1);
                  t5.operation(function() {
                    if ("skip" == d) l(t5, 1);
                    else if ("skipThree" == d) l(t5, 3);
                    else if ("surround" == d) {
                      for (var e4 = t5.getSelections(), n4 = 0; n4 < e4.length; n4++) e4[n4] = k + e4[n4] + E;
                      for (t5.replaceSelections(e4, "around"), e4 = t5.listSelections().slice(), n4 = 0; n4 < e4.length; n4++) e4[n4] = c(e4[n4]);
                      t5.setSelections(e4);
                    } else "both" == d ? (t5.replaceSelection(k + E, null), t5.triggerElectric(k + E), l(t5, -1)) : "addFour" == d && (t5.replaceSelection(k + k + k + k, "before"), l(t5, 1));
                  });
                }(o2, t4);
              };
            }
            function s(e4) {
              var t4 = e4.state.closeBrackets;
              return !t4 || t4.override ? t4 : e4.getModeAt(e4.getCursor()).closeBrackets || t4;
            }
            function l(e4, t4) {
              for (var n4 = [], r3 = e4.listSelections(), o2 = 0, i2 = 0; i2 < r3.length; i2++) {
                var a2 = r3[i2];
                a2.head == e4.getCursor() && (o2 = i2);
                var s2 = a2.head.ch || t4 > 0 ? { line: a2.head.line, ch: a2.head.ch + t4 } : { line: a2.head.line - 1 };
                n4.push({ anchor: s2, head: s2 });
              }
              e4.setSelections(n4, o2);
            }
            function c(t4) {
              var r3 = e3.cmpPos(t4.anchor, t4.head) > 0;
              return { anchor: new n3(t4.anchor.line, t4.anchor.ch + (r3 ? -1 : 1)), head: new n3(t4.head.line, t4.head.ch + (r3 ? 1 : -1)) };
            }
            function u(e4, t4) {
              var r3 = e4.getRange(n3(t4.line, t4.ch - 1), n3(t4.line, t4.ch + 1));
              return 2 == r3.length ? r3 : null;
            }
            function f(e4, t4) {
              var r3 = e4.getTokenAt(n3(t4.line, t4.ch + 1));
              return /\bstring/.test(r3.type) && r3.start == t4.ch && (0 == t4.ch || !/\bstring/.test(e4.getTokenTypeAt(t4)));
            }
            i(t3.pairs + "`");
          }(n2(4631));
        }, 4328: function(e2, t2, n2) {
          !function(e3) {
            var t3 = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 8), n3 = e3.Pos, r2 = { "(": ")>", ")": "(<", "[": "]>", "]": "[<", "{": "}>", "}": "{<", "<": ">>", ">": "<<" };
            function o(e4) {
              return e4 && e4.bracketRegex || /[(){}[\]]/;
            }
            function i(e4, t4, i2) {
              var s2 = e4.getLineHandle(t4.line), l2 = t4.ch - 1, c2 = i2 && i2.afterCursor;
              null == c2 && (c2 = /(^| )cm-fat-cursor($| )/.test(e4.getWrapperElement().className));
              var u = o(i2), f = !c2 && l2 >= 0 && u.test(s2.text.charAt(l2)) && r2[s2.text.charAt(l2)] || u.test(s2.text.charAt(l2 + 1)) && r2[s2.text.charAt(++l2)];
              if (!f) return null;
              var d = ">" == f.charAt(1) ? 1 : -1;
              if (i2 && i2.strict && d > 0 != (l2 == t4.ch)) return null;
              var p = e4.getTokenTypeAt(n3(t4.line, l2 + 1)), h = a(e4, n3(t4.line, l2 + (d > 0 ? 1 : 0)), d, p, i2);
              return null == h ? null : { from: n3(t4.line, l2), to: h && h.pos, match: h && h.ch == f.charAt(0), forward: d > 0 };
            }
            function a(e4, t4, i2, a2, s2) {
              for (var l2 = s2 && s2.maxScanLineLength || 1e4, c2 = s2 && s2.maxScanLines || 1e3, u = [], f = o(s2), d = i2 > 0 ? Math.min(t4.line + c2, e4.lastLine() + 1) : Math.max(e4.firstLine() - 1, t4.line - c2), p = t4.line; p != d; p += i2) {
                var h = e4.getLine(p);
                if (h) {
                  var m = i2 > 0 ? 0 : h.length - 1, g = i2 > 0 ? h.length : -1;
                  if (!(h.length > l2)) for (p == t4.line && (m = t4.ch - (i2 < 0 ? 1 : 0)); m != g; m += i2) {
                    var v = h.charAt(m);
                    if (f.test(v) && (void 0 === a2 || (e4.getTokenTypeAt(n3(p, m + 1)) || "") == (a2 || ""))) {
                      var A = r2[v];
                      if (A && ">" == A.charAt(1) == i2 > 0) u.push(v);
                      else {
                        if (!u.length) return { pos: n3(p, m), ch: v };
                        u.pop();
                      }
                    }
                  }
                }
              }
              return p - i2 != (i2 > 0 ? e4.lastLine() : e4.firstLine()) && null;
            }
            function s(e4, r3, o2) {
              for (var a2 = e4.state.matchBrackets.maxHighlightLineLength || 1e3, s2 = o2 && o2.highlightNonMatching, l2 = [], c2 = e4.listSelections(), u = 0; u < c2.length; u++) {
                var f = c2[u].empty() && i(e4, c2[u].head, o2);
                if (f && (f.match || false !== s2) && e4.getLine(f.from.line).length <= a2) {
                  var d = f.match ? "CodeMirror-matchingbracket" : "CodeMirror-nonmatchingbracket";
                  l2.push(e4.markText(f.from, n3(f.from.line, f.from.ch + 1), { className: d })), f.to && e4.getLine(f.to.line).length <= a2 && l2.push(e4.markText(f.to, n3(f.to.line, f.to.ch + 1), { className: d }));
                }
              }
              if (l2.length) {
                t3 && e4.state.focused && e4.focus();
                var p = function() {
                  e4.operation(function() {
                    for (var e5 = 0; e5 < l2.length; e5++) l2[e5].clear();
                  });
                };
                if (!r3) return p;
                setTimeout(p, 800);
              }
            }
            function l(e4) {
              e4.operation(function() {
                e4.state.matchBrackets.currentlyHighlighted && (e4.state.matchBrackets.currentlyHighlighted(), e4.state.matchBrackets.currentlyHighlighted = null), e4.state.matchBrackets.currentlyHighlighted = s(e4, false, e4.state.matchBrackets);
              });
            }
            function c(e4) {
              e4.state.matchBrackets && e4.state.matchBrackets.currentlyHighlighted && (e4.state.matchBrackets.currentlyHighlighted(), e4.state.matchBrackets.currentlyHighlighted = null);
            }
            e3.defineOption("matchBrackets", false, function(t4, n4, r3) {
              r3 && r3 != e3.Init && (t4.off("cursorActivity", l), t4.off("focus", l), t4.off("blur", c), c(t4)), n4 && (t4.state.matchBrackets = "object" == typeof n4 ? n4 : {}, t4.on("cursorActivity", l), t4.on("focus", l), t4.on("blur", c));
            }), e3.defineExtension("matchBrackets", function() {
              s(this, true);
            }), e3.defineExtension("findMatchingBracket", function(e4, t4, n4) {
              return (n4 || "boolean" == typeof t4) && (n4 ? (n4.strict = t4, t4 = n4) : t4 = t4 ? { strict: true } : null), i(this, e4, t4);
            }), e3.defineExtension("scanForBracket", function(e4, t4, n4, r3) {
              return a(this, e4, t4, n4, r3);
            });
          }(n2(4631));
        }, 8991: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            var t3 = /[\w$]+/;
            e3.registerHelper("hint", "anyword", function(n3, r2) {
              for (var o = r2 && r2.word || t3, i = r2 && r2.range || 500, a = n3.getCursor(), s = n3.getLine(a.line), l = a.ch, c = l; c && o.test(s.charAt(c - 1)); ) --c;
              for (var u = c != l && s.slice(c, l), f = r2 && r2.list || [], d = {}, p = new RegExp(o.source, "g"), h = -1; h <= 1; h += 2) for (var m = a.line, g = Math.min(Math.max(m + h * i, n3.firstLine()), n3.lastLine()) + h; m != g; m += h) for (var v, A = n3.getLine(m); v = p.exec(A); ) m == a.line && v[0] === u || u && 0 != v[0].lastIndexOf(u, 0) || Object.prototype.hasOwnProperty.call(d, v[0]) || (d[v[0]] = true, f.push(v[0]));
              return { list: f, from: e3.Pos(a.line, c), to: e3.Pos(a.line, l) };
            });
          }(n2(4631));
        }, 1707: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            var t3 = "CodeMirror-hint-active";
            function n3(e4, t4) {
              if (this.cm = e4, this.options = t4, this.widget = null, this.debounce = 0, this.tick = 0, this.startPos = this.cm.getCursor("start"), this.startLen = this.cm.getLine(this.startPos.line).length - this.cm.getSelection().length, this.options.updateOnCursorActivity) {
                var n4 = this;
                e4.on("cursorActivity", this.activityFunc = function() {
                  n4.cursorActivity();
                });
              }
            }
            e3.showHint = function(e4, t4, n4) {
              if (!t4) return e4.showHint(n4);
              n4 && n4.async && (t4.async = true);
              var r3 = { hint: t4 };
              if (n4) for (var o2 in n4) r3[o2] = n4[o2];
              return e4.showHint(r3);
            }, e3.defineExtension("showHint", function(t4) {
              t4 = function(e4, t5, n4) {
                var r4 = e4.options.hintOptions, o3 = {};
                for (var i3 in c) o3[i3] = c[i3];
                if (r4) for (var i3 in r4) void 0 !== r4[i3] && (o3[i3] = r4[i3]);
                if (n4) for (var i3 in n4) void 0 !== n4[i3] && (o3[i3] = n4[i3]);
                return o3.hint.resolve && (o3.hint = o3.hint.resolve(e4, t5)), o3;
              }(this, this.getCursor("start"), t4);
              var r3 = this.listSelections();
              if (!(r3.length > 1)) {
                if (this.somethingSelected()) {
                  if (!t4.hint.supportsSelection) return;
                  for (var o2 = 0; o2 < r3.length; o2++) if (r3[o2].head.line != r3[o2].anchor.line) return;
                }
                this.state.completionActive && this.state.completionActive.close();
                var i2 = this.state.completionActive = new n3(this, t4);
                i2.options.hint && (e3.signal(this, "startCompletion", this), i2.update(true));
              }
            }), e3.defineExtension("closeHint", function() {
              this.state.completionActive && this.state.completionActive.close();
            });
            var r2 = window.requestAnimationFrame || function(e4) {
              return setTimeout(e4, 1e3 / 60);
            }, o = window.cancelAnimationFrame || clearTimeout;
            function i(e4) {
              return "string" == typeof e4 ? e4 : e4.text;
            }
            function a(e4, t4) {
              for (; t4 && t4 != e4; ) {
                if ("LI" === t4.nodeName.toUpperCase() && t4.parentNode == e4) return t4;
                t4 = t4.parentNode;
              }
            }
            function s(n4, r3) {
              this.id = "cm-complete-" + Math.floor(Math.random(1e6)), this.completion = n4, this.data = r3, this.picked = false;
              var o2 = this, s2 = n4.cm, l2 = s2.getInputField().ownerDocument, c2 = l2.defaultView || l2.parentWindow, u = this.hints = l2.createElement("ul");
              u.setAttribute("role", "listbox"), u.setAttribute("aria-expanded", "true"), u.id = this.id;
              var f = n4.cm.options.theme;
              u.className = "CodeMirror-hints " + f, this.selectedHint = r3.selectedHint || 0;
              for (var d = r3.list, p = 0; p < d.length; ++p) {
                var h = u.appendChild(l2.createElement("li")), m = d[p], g = "CodeMirror-hint" + (p != this.selectedHint ? "" : " " + t3);
                null != m.className && (g = m.className + " " + g), h.className = g, p == this.selectedHint && h.setAttribute("aria-selected", "true"), h.id = this.id + "-" + p, h.setAttribute("role", "option"), m.render ? m.render(h, r3, m) : h.appendChild(l2.createTextNode(m.displayText || i(m))), h.hintId = p;
              }
              var v = n4.options.container || l2.body, A = s2.cursorCoords(n4.options.alignWithWord ? r3.from : null), y = A.left, b = A.bottom, C = true, x = 0, w = 0;
              if (v !== l2.body) {
                var k = -1 !== ["absolute", "relative", "fixed"].indexOf(c2.getComputedStyle(v).position) ? v : v.offsetParent, E = k.getBoundingClientRect(), _ = l2.body.getBoundingClientRect();
                x = E.left - _.left - k.scrollLeft, w = E.top - _.top - k.scrollTop;
              }
              u.style.left = y - x + "px", u.style.top = b - w + "px";
              var S = c2.innerWidth || Math.max(l2.body.offsetWidth, l2.documentElement.offsetWidth), M = c2.innerHeight || Math.max(l2.body.offsetHeight, l2.documentElement.offsetHeight);
              v.appendChild(u), s2.getInputField().setAttribute("aria-autocomplete", "list"), s2.getInputField().setAttribute("aria-owns", this.id), s2.getInputField().setAttribute("aria-activedescendant", this.id + "-" + this.selectedHint);
              var B, O = n4.options.moveOnOverlap ? u.getBoundingClientRect() : new DOMRect(), T = !!n4.options.paddingForScrollbar && u.scrollHeight > u.clientHeight + 1;
              if (setTimeout(function() {
                B = s2.getScrollInfo();
              }), O.bottom - M > 0) {
                var L = O.bottom - O.top, F = O.top - (A.bottom - A.top) - 2;
                M - O.top < F ? (L > F && (u.style.height = (L = F) + "px"), u.style.top = (b = A.top - L) + w + "px", C = false) : u.style.height = M - O.top - 2 + "px";
              }
              var P, N = O.right - S;
              if (T && (N += s2.display.nativeBarWidth), N > 0 && (O.right - O.left > S && (u.style.width = S - 5 + "px", N -= O.right - O.left - S), u.style.left = (y = Math.max(A.left - N - x, 0)) + "px"), T) for (var j = u.firstChild; j; j = j.nextSibling) j.style.paddingRight = s2.display.nativeBarWidth + "px";
              s2.addKeyMap(this.keyMap = function(e4, t4) {
                var n5 = { Up: function() {
                  t4.moveFocus(-1);
                }, Down: function() {
                  t4.moveFocus(1);
                }, PageUp: function() {
                  t4.moveFocus(1 - t4.menuSize(), true);
                }, PageDown: function() {
                  t4.moveFocus(t4.menuSize() - 1, true);
                }, Home: function() {
                  t4.setFocus(0);
                }, End: function() {
                  t4.setFocus(t4.length - 1);
                }, Enter: t4.pick, Tab: t4.pick, Esc: t4.close };
                /Mac/.test(navigator.platform) && (n5["Ctrl-P"] = function() {
                  t4.moveFocus(-1);
                }, n5["Ctrl-N"] = function() {
                  t4.moveFocus(1);
                });
                var r4 = e4.options.customKeys, o3 = r4 ? {} : n5;
                function i2(e5, r5) {
                  var i3;
                  i3 = "string" != typeof r5 ? function(e6) {
                    return r5(e6, t4);
                  } : n5.hasOwnProperty(r5) ? n5[r5] : r5, o3[e5] = i3;
                }
                if (r4) for (var a2 in r4) r4.hasOwnProperty(a2) && i2(a2, r4[a2]);
                var s3 = e4.options.extraKeys;
                if (s3) for (var a2 in s3) s3.hasOwnProperty(a2) && i2(a2, s3[a2]);
                return o3;
              }(n4, { moveFocus: function(e4, t4) {
                o2.changeActive(o2.selectedHint + e4, t4);
              }, setFocus: function(e4) {
                o2.changeActive(e4);
              }, menuSize: function() {
                return o2.screenAmount();
              }, length: d.length, close: function() {
                n4.close();
              }, pick: function() {
                o2.pick();
              }, data: r3 })), n4.options.closeOnUnfocus && (s2.on("blur", this.onBlur = function() {
                P = setTimeout(function() {
                  n4.close();
                }, 100);
              }), s2.on("focus", this.onFocus = function() {
                clearTimeout(P);
              })), s2.on("scroll", this.onScroll = function() {
                var e4 = s2.getScrollInfo(), t4 = s2.getWrapperElement().getBoundingClientRect();
                B || (B = s2.getScrollInfo());
                var r4 = b + B.top - e4.top, o3 = r4 - (c2.pageYOffset || (l2.documentElement || l2.body).scrollTop);
                if (C || (o3 += u.offsetHeight), o3 <= t4.top || o3 >= t4.bottom) return n4.close();
                u.style.top = r4 + "px", u.style.left = y + B.left - e4.left + "px";
              }), e3.on(u, "dblclick", function(e4) {
                var t4 = a(u, e4.target || e4.srcElement);
                t4 && null != t4.hintId && (o2.changeActive(t4.hintId), o2.pick());
              }), e3.on(u, "click", function(e4) {
                var t4 = a(u, e4.target || e4.srcElement);
                t4 && null != t4.hintId && (o2.changeActive(t4.hintId), n4.options.completeOnSingleClick && o2.pick());
              }), e3.on(u, "mousedown", function() {
                setTimeout(function() {
                  s2.focus();
                }, 20);
              });
              var I = this.getSelectedHintRange();
              return 0 === I.from && 0 === I.to || this.scrollToActive(), e3.signal(r3, "select", d[this.selectedHint], u.childNodes[this.selectedHint]), true;
            }
            function l(e4, t4, n4, r3) {
              if (e4.async) e4(t4, r3, n4);
              else {
                var o2 = e4(t4, n4);
                o2 && o2.then ? o2.then(r3) : r3(o2);
              }
            }
            n3.prototype = { close: function() {
              this.active() && (this.cm.state.completionActive = null, this.tick = null, this.options.updateOnCursorActivity && this.cm.off("cursorActivity", this.activityFunc), this.widget && this.data && e3.signal(this.data, "close"), this.widget && this.widget.close(), e3.signal(this.cm, "endCompletion", this.cm));
            }, active: function() {
              return this.cm.state.completionActive == this;
            }, pick: function(t4, n4) {
              var r3 = t4.list[n4], o2 = this;
              this.cm.operation(function() {
                r3.hint ? r3.hint(o2.cm, t4, r3) : o2.cm.replaceRange(i(r3), r3.from || t4.from, r3.to || t4.to, "complete"), e3.signal(t4, "pick", r3), o2.cm.scrollIntoView();
              }), this.options.closeOnPick && this.close();
            }, cursorActivity: function() {
              this.debounce && (o(this.debounce), this.debounce = 0);
              var e4 = this.startPos;
              this.data && (e4 = this.data.from);
              var t4 = this.cm.getCursor(), n4 = this.cm.getLine(t4.line);
              if (t4.line != this.startPos.line || n4.length - t4.ch != this.startLen - this.startPos.ch || t4.ch < e4.ch || this.cm.somethingSelected() || !t4.ch || this.options.closeCharacters.test(n4.charAt(t4.ch - 1))) this.close();
              else {
                var i2 = this;
                this.debounce = r2(function() {
                  i2.update();
                }), this.widget && this.widget.disable();
              }
            }, update: function(e4) {
              if (null != this.tick) {
                var t4 = this, n4 = ++this.tick;
                l(this.options.hint, this.cm, this.options, function(r3) {
                  t4.tick == n4 && t4.finishUpdate(r3, e4);
                });
              }
            }, finishUpdate: function(t4, n4) {
              this.data && e3.signal(this.data, "update");
              var r3 = this.widget && this.widget.picked || n4 && this.options.completeSingle;
              this.widget && this.widget.close(), this.data = t4, t4 && t4.list.length && (r3 && 1 == t4.list.length ? this.pick(t4, 0) : (this.widget = new s(this, t4), e3.signal(t4, "shown")));
            } }, s.prototype = { close: function() {
              if (this.completion.widget == this) {
                this.completion.widget = null, this.hints.parentNode && this.hints.parentNode.removeChild(this.hints), this.completion.cm.removeKeyMap(this.keyMap);
                var e4 = this.completion.cm.getInputField();
                e4.removeAttribute("aria-activedescendant"), e4.removeAttribute("aria-owns");
                var t4 = this.completion.cm;
                this.completion.options.closeOnUnfocus && (t4.off("blur", this.onBlur), t4.off("focus", this.onFocus)), t4.off("scroll", this.onScroll);
              }
            }, disable: function() {
              this.completion.cm.removeKeyMap(this.keyMap);
              var e4 = this;
              this.keyMap = { Enter: function() {
                e4.picked = true;
              } }, this.completion.cm.addKeyMap(this.keyMap);
            }, pick: function() {
              this.completion.pick(this.data, this.selectedHint);
            }, changeActive: function(n4, r3) {
              if (n4 >= this.data.list.length ? n4 = r3 ? this.data.list.length - 1 : 0 : n4 < 0 && (n4 = r3 ? 0 : this.data.list.length - 1), this.selectedHint != n4) {
                var o2 = this.hints.childNodes[this.selectedHint];
                o2 && (o2.className = o2.className.replace(" " + t3, ""), o2.removeAttribute("aria-selected")), (o2 = this.hints.childNodes[this.selectedHint = n4]).className += " " + t3, o2.setAttribute("aria-selected", "true"), this.completion.cm.getInputField().setAttribute("aria-activedescendant", o2.id), this.scrollToActive(), e3.signal(this.data, "select", this.data.list[this.selectedHint], o2);
              }
            }, scrollToActive: function() {
              var e4 = this.getSelectedHintRange(), t4 = this.hints.childNodes[e4.from], n4 = this.hints.childNodes[e4.to], r3 = this.hints.firstChild;
              t4.offsetTop < this.hints.scrollTop ? this.hints.scrollTop = t4.offsetTop - r3.offsetTop : n4.offsetTop + n4.offsetHeight > this.hints.scrollTop + this.hints.clientHeight && (this.hints.scrollTop = n4.offsetTop + n4.offsetHeight - this.hints.clientHeight + r3.offsetTop);
            }, screenAmount: function() {
              return Math.floor(this.hints.clientHeight / this.hints.firstChild.offsetHeight) || 1;
            }, getSelectedHintRange: function() {
              var e4 = this.completion.options.scrollMargin || 0;
              return { from: Math.max(0, this.selectedHint - e4), to: Math.min(this.data.list.length - 1, this.selectedHint + e4) };
            } }, e3.registerHelper("hint", "auto", { resolve: function(t4, n4) {
              var r3, o2 = t4.getHelpers(n4, "hint");
              if (o2.length) {
                var i2 = function(e4, t5, n5) {
                  var r4 = function(e5, t6) {
                    if (!e5.somethingSelected()) return t6;
                    for (var n6 = [], r5 = 0; r5 < t6.length; r5++) t6[r5].supportsSelection && n6.push(t6[r5]);
                    return n6;
                  }(e4, o2);
                  !function o3(i3) {
                    if (i3 == r4.length) return t5(null);
                    l(r4[i3], e4, n5, function(e5) {
                      e5 && e5.list.length > 0 ? t5(e5) : o3(i3 + 1);
                    });
                  }(0);
                };
                return i2.async = true, i2.supportsSelection = true, i2;
              }
              return (r3 = t4.getHelper(t4.getCursor(), "hintWords")) ? function(t5) {
                return e3.hint.fromList(t5, { words: r3 });
              } : e3.hint.anyword ? function(t5, n5) {
                return e3.hint.anyword(t5, n5);
              } : function() {
              };
            } }), e3.registerHelper("hint", "fromList", function(t4, n4) {
              var r3, o2 = t4.getCursor(), i2 = t4.getTokenAt(o2), a2 = e3.Pos(o2.line, i2.start), s2 = o2;
              i2.start < o2.ch && /\w/.test(i2.string.charAt(o2.ch - i2.start - 1)) ? r3 = i2.string.substr(0, o2.ch - i2.start) : (r3 = "", a2 = o2);
              for (var l2 = [], c2 = 0; c2 < n4.words.length; c2++) {
                var u = n4.words[c2];
                u.slice(0, r3.length) == r3 && l2.push(u);
              }
              if (l2.length) return { list: l2, from: a2, to: s2 };
            }), e3.commands.autocomplete = e3.showHint;
            var c = { hint: e3.hint.auto, completeSingle: true, alignWithWord: true, closeCharacters: /[\s()\[\]{};:>,]/, closeOnPick: true, closeOnUnfocus: true, updateOnCursorActivity: true, completeOnSingleClick: true, container: null, customKeys: null, extraKeys: null, paddingForScrollbar: true, moveOnOverlap: true };
            e3.defineOption("hintOptions", null);
          }(n2(4631));
        }, 7635: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            var t3 = /^(p|li|div|h\\d|pre|blockquote|td)$/;
            function n3(e4, r2) {
              if (3 == e4.nodeType) return r2.push(e4.nodeValue);
              for (var o = e4.firstChild; o; o = o.nextSibling) n3(o, r2), t3.test(e4.nodeType) && r2.push("\n");
            }
            e3.colorize = function(t4, r2) {
              t4 || (t4 = document.body.getElementsByTagName("pre"));
              for (var o = 0; o < t4.length; ++o) {
                var i = t4[o], a = i.getAttribute("data-lang") || r2;
                if (a) {
                  var s = [];
                  n3(i, s), i.textContent = "", e3.runMode(s.join(""), a, i), i.className += " cm-s-default";
                }
              }
            };
          }(n2(4631), n2(7165));
        }, 7165: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            e3.runMode = function(t3, n3, r2, o) {
              var i = e3.getMode(e3.defaults, n3), a = o && o.tabSize || e3.defaults.tabSize;
              if (r2.appendChild) {
                var s = /MSIE \d/.test(navigator.userAgent) && (null == document.documentMode || document.documentMode < 9), l = r2, c = 0;
                l.textContent = "", r2 = function(e4, t4) {
                  if ("\n" == e4) return l.appendChild(document.createTextNode(s ? "\r" : e4)), void (c = 0);
                  for (var n4 = "", r3 = 0; ; ) {
                    var o2 = e4.indexOf("	", r3);
                    if (-1 == o2) {
                      n4 += e4.slice(r3), c += e4.length - r3;
                      break;
                    }
                    c += o2 - r3, n4 += e4.slice(r3, o2);
                    var i2 = a - c % a;
                    c += i2;
                    for (var u2 = 0; u2 < i2; ++u2) n4 += " ";
                    r3 = o2 + 1;
                  }
                  if (t4) {
                    var f2 = l.appendChild(document.createElement("span"));
                    f2.className = "cm-" + t4.replace(/ +/g, " cm-"), f2.appendChild(document.createTextNode(n4));
                  } else l.appendChild(document.createTextNode(n4));
                };
              }
              for (var u = e3.splitLines(t3), f = o && o.state || e3.startState(i), d = 0, p = u.length; d < p; ++d) {
                d && r2("\n");
                var h = new e3.StringStream(u[d], null, { lookAhead: function(e4) {
                  return u[d + e4];
                }, baseToken: function() {
                } });
                for (!h.string && i.blankLine && i.blankLine(f); !h.eol(); ) {
                  var m = i.token(h, f);
                  r2(h.current(), m, d, h.start, f, i), h.start = h.pos;
                }
              }
            };
          }(n2(4631));
        }, 9109: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            function t3(t4, n4, r2) {
              this.orientation = n4, this.scroll = r2, this.screen = this.total = this.size = 1, this.pos = 0, this.node = document.createElement("div"), this.node.className = t4 + "-" + n4, this.inner = this.node.appendChild(document.createElement("div"));
              var o = this;
              function i(t5) {
                var n5 = e3.wheelEventPixels(t5)["horizontal" == o.orientation ? "x" : "y"], r3 = o.pos;
                o.moveTo(o.pos + n5), o.pos != r3 && e3.e_preventDefault(t5);
              }
              e3.on(this.inner, "mousedown", function(t5) {
                if (1 == t5.which) {
                  e3.e_preventDefault(t5);
                  var n5 = "horizontal" == o.orientation ? "pageX" : "pageY", r3 = t5[n5], i2 = o.pos;
                  e3.on(document, "mousemove", s), e3.on(document, "mouseup", a);
                }
                function a() {
                  e3.off(document, "mousemove", s), e3.off(document, "mouseup", a);
                }
                function s(e4) {
                  if (1 != e4.which) return a();
                  o.moveTo(i2 + (e4[n5] - r3) * (o.total / o.size));
                }
              }), e3.on(this.node, "click", function(t5) {
                e3.e_preventDefault(t5);
                var n5, r3 = o.inner.getBoundingClientRect();
                n5 = "horizontal" == o.orientation ? t5.clientX < r3.left ? -1 : t5.clientX > r3.right ? 1 : 0 : t5.clientY < r3.top ? -1 : t5.clientY > r3.bottom ? 1 : 0, o.moveTo(o.pos + n5 * o.screen);
              }), e3.on(this.node, "mousewheel", i), e3.on(this.node, "DOMMouseScroll", i);
            }
            t3.prototype.setPos = function(e4, t4) {
              return e4 < 0 && (e4 = 0), e4 > this.total - this.screen && (e4 = this.total - this.screen), !(!t4 && e4 == this.pos || (this.pos = e4, this.inner.style["horizontal" == this.orientation ? "left" : "top"] = e4 * (this.size / this.total) + "px", 0));
            }, t3.prototype.moveTo = function(e4) {
              this.setPos(e4) && this.scroll(e4, this.orientation);
            };
            function n3(e4, n4, r2) {
              this.addClass = e4, this.horiz = new t3(e4, "horizontal", r2), n4(this.horiz.node), this.vert = new t3(e4, "vertical", r2), n4(this.vert.node), this.width = null;
            }
            t3.prototype.update = function(e4, t4, n4) {
              var r2 = this.screen != t4 || this.total != e4 || this.size != n4;
              r2 && (this.screen = t4, this.total = e4, this.size = n4);
              var o = this.screen * (this.size / this.total);
              o < 10 && (this.size -= 10 - o, o = 10), this.inner.style["horizontal" == this.orientation ? "width" : "height"] = o + "px", this.setPos(this.pos, r2);
            }, n3.prototype.update = function(e4) {
              if (null == this.width) {
                var t4 = window.getComputedStyle ? window.getComputedStyle(this.horiz.node) : this.horiz.node.currentStyle;
                t4 && (this.width = parseInt(t4.height));
              }
              var n4 = this.width || 0, r2 = e4.scrollWidth > e4.clientWidth + 1, o = e4.scrollHeight > e4.clientHeight + 1;
              return this.vert.node.style.display = o ? "block" : "none", this.horiz.node.style.display = r2 ? "block" : "none", o && (this.vert.update(e4.scrollHeight, e4.clientHeight, e4.viewHeight - (r2 ? n4 : 0)), this.vert.node.style.bottom = r2 ? n4 + "px" : "0"), r2 && (this.horiz.update(e4.scrollWidth, e4.clientWidth, e4.viewWidth - (o ? n4 : 0) - e4.barLeft), this.horiz.node.style.right = o ? n4 + "px" : "0", this.horiz.node.style.left = e4.barLeft + "px"), { right: o ? n4 : 0, bottom: r2 ? n4 : 0 };
            }, n3.prototype.setScrollTop = function(e4) {
              this.vert.setPos(e4);
            }, n3.prototype.setScrollLeft = function(e4) {
              this.horiz.setPos(e4);
            }, n3.prototype.clear = function() {
              var e4 = this.horiz.node.parentNode;
              e4.removeChild(this.horiz.node), e4.removeChild(this.vert.node);
            }, e3.scrollbarModel.simple = function(e4, t4) {
              return new n3("CodeMirror-simplescroll", e4, t4);
            }, e3.scrollbarModel.overlay = function(e4, t4) {
              return new n3("CodeMirror-overlayscroll", e4, t4);
            };
          }(n2(4631));
        }, 4631: function(e2) {
          e2.exports = function() {
            "use strict";
            var e3 = navigator.userAgent, t2 = navigator.platform, n2 = /gecko\/\d/i.test(e3), r2 = /MSIE \d/.test(e3), o = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(e3), i = /Edge\/(\d+)/.exec(e3), a = r2 || o || i, s = a && (r2 ? document.documentMode || 6 : +(i || o)[1]), l = !i && /WebKit\//.test(e3), c = l && /Qt\/\d+\.\d+/.test(e3), u = !i && /Chrome\/(\d+)/.exec(e3), f = u && +u[1], d = /Opera\//.test(e3), p = /Apple Computer/.test(navigator.vendor), h = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(e3), m = /PhantomJS/.test(e3), g = p && (/Mobile\/\w+/.test(e3) || navigator.maxTouchPoints > 2), v = /Android/.test(e3), A = g || v || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(e3), y = g || /Mac/.test(t2), b = /\bCrOS\b/.test(e3), C = /win/i.test(t2), x = d && e3.match(/Version\/(\d*\.\d*)/);
            x && (x = Number(x[1])), x && x >= 15 && (d = false, l = true);
            var w = y && (c || d && (null == x || x < 12.11)), k = n2 || a && s >= 9;
            function E(e4) {
              return new RegExp("(^|\\s)" + e4 + "(?:$|\\s)\\s*");
            }
            var _, S = function(e4, t3) {
              var n3 = e4.className, r3 = E(t3).exec(n3);
              if (r3) {
                var o2 = n3.slice(r3.index + r3[0].length);
                e4.className = n3.slice(0, r3.index) + (o2 ? r3[1] + o2 : "");
              }
            };
            function M(e4) {
              for (var t3 = e4.childNodes.length; t3 > 0; --t3) e4.removeChild(e4.firstChild);
              return e4;
            }
            function B(e4, t3) {
              return M(e4).appendChild(t3);
            }
            function O(e4, t3, n3, r3) {
              var o2 = document.createElement(e4);
              if (n3 && (o2.className = n3), r3 && (o2.style.cssText = r3), "string" == typeof t3) o2.appendChild(document.createTextNode(t3));
              else if (t3) for (var i2 = 0; i2 < t3.length; ++i2) o2.appendChild(t3[i2]);
              return o2;
            }
            function T(e4, t3, n3, r3) {
              var o2 = O(e4, t3, n3, r3);
              return o2.setAttribute("role", "presentation"), o2;
            }
            function L(e4, t3) {
              if (3 == t3.nodeType && (t3 = t3.parentNode), e4.contains) return e4.contains(t3);
              do {
                if (11 == t3.nodeType && (t3 = t3.host), t3 == e4) return true;
              } while (t3 = t3.parentNode);
            }
            function F(e4) {
              var t3;
              try {
                t3 = e4.activeElement;
              } catch (n3) {
                t3 = e4.body || null;
              }
              for (; t3 && t3.shadowRoot && t3.shadowRoot.activeElement; ) t3 = t3.shadowRoot.activeElement;
              return t3;
            }
            function P(e4, t3) {
              var n3 = e4.className;
              E(t3).test(n3) || (e4.className += (n3 ? " " : "") + t3);
            }
            function N(e4, t3) {
              for (var n3 = e4.split(" "), r3 = 0; r3 < n3.length; r3++) n3[r3] && !E(n3[r3]).test(t3) && (t3 += " " + n3[r3]);
              return t3;
            }
            _ = document.createRange ? function(e4, t3, n3, r3) {
              var o2 = document.createRange();
              return o2.setEnd(r3 || e4, n3), o2.setStart(e4, t3), o2;
            } : function(e4, t3, n3) {
              var r3 = document.body.createTextRange();
              try {
                r3.moveToElementText(e4.parentNode);
              } catch (e5) {
                return r3;
              }
              return r3.collapse(true), r3.moveEnd("character", n3), r3.moveStart("character", t3), r3;
            };
            var j = function(e4) {
              e4.select();
            };
            function I(e4) {
              return e4.display.wrapper.ownerDocument;
            }
            function D(e4) {
              return I(e4).defaultView;
            }
            function z(e4) {
              var t3 = Array.prototype.slice.call(arguments, 1);
              return function() {
                return e4.apply(null, t3);
              };
            }
            function R(e4, t3, n3) {
              for (var r3 in t3 || (t3 = {}), e4) !e4.hasOwnProperty(r3) || false === n3 && t3.hasOwnProperty(r3) || (t3[r3] = e4[r3]);
              return t3;
            }
            function W(e4, t3, n3, r3, o2) {
              null == t3 && -1 == (t3 = e4.search(/[^\s\u00a0]/)) && (t3 = e4.length);
              for (var i2 = r3 || 0, a2 = o2 || 0; ; ) {
                var s2 = e4.indexOf("	", i2);
                if (s2 < 0 || s2 >= t3) return a2 + (t3 - i2);
                a2 += s2 - i2, a2 += n3 - a2 % n3, i2 = s2 + 1;
              }
            }
            g ? j = function(e4) {
              e4.selectionStart = 0, e4.selectionEnd = e4.value.length;
            } : a && (j = function(e4) {
              try {
                e4.select();
              } catch (e5) {
              }
            });
            var H = function() {
              this.id = null, this.f = null, this.time = 0, this.handler = z(this.onTimeout, this);
            };
            function U(e4, t3) {
              for (var n3 = 0; n3 < e4.length; ++n3) if (e4[n3] == t3) return n3;
              return -1;
            }
            H.prototype.onTimeout = function(e4) {
              e4.id = 0, e4.time <= +/* @__PURE__ */ new Date() ? e4.f() : setTimeout(e4.handler, e4.time - +/* @__PURE__ */ new Date());
            }, H.prototype.set = function(e4, t3) {
              this.f = t3;
              var n3 = +/* @__PURE__ */ new Date() + e4;
              (!this.id || n3 < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e4), this.time = n3);
            };
            var V = 50, G = { toString: function() {
              return "CodeMirror.Pass";
            } }, $ = { scroll: false }, q = { origin: "*mouse" }, K = { origin: "+move" };
            function Z(e4, t3, n3) {
              for (var r3 = 0, o2 = 0; ; ) {
                var i2 = e4.indexOf("	", r3);
                -1 == i2 && (i2 = e4.length);
                var a2 = i2 - r3;
                if (i2 == e4.length || o2 + a2 >= t3) return r3 + Math.min(a2, t3 - o2);
                if (o2 += i2 - r3, r3 = i2 + 1, (o2 += n3 - o2 % n3) >= t3) return r3;
              }
            }
            var Y = [""];
            function J(e4) {
              for (; Y.length <= e4; ) Y.push(X(Y) + " ");
              return Y[e4];
            }
            function X(e4) {
              return e4[e4.length - 1];
            }
            function Q(e4, t3) {
              for (var n3 = [], r3 = 0; r3 < e4.length; r3++) n3[r3] = t3(e4[r3], r3);
              return n3;
            }
            function ee() {
            }
            function te(e4, t3) {
              var n3;
              return Object.create ? n3 = Object.create(e4) : (ee.prototype = e4, n3 = new ee()), t3 && R(t3, n3), n3;
            }
            var ne = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
            function re(e4) {
              return /\w/.test(e4) || e4 > "" && (e4.toUpperCase() != e4.toLowerCase() || ne.test(e4));
            }
            function oe(e4, t3) {
              return t3 ? !!(t3.source.indexOf("\\w") > -1 && re(e4)) || t3.test(e4) : re(e4);
            }
            function ie(e4) {
              for (var t3 in e4) if (e4.hasOwnProperty(t3) && e4[t3]) return false;
              return true;
            }
            var ae = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
            function se(e4) {
              return e4.charCodeAt(0) >= 768 && ae.test(e4);
            }
            function le(e4, t3, n3) {
              for (; (n3 < 0 ? t3 > 0 : t3 < e4.length) && se(e4.charAt(t3)); ) t3 += n3;
              return t3;
            }
            function ce(e4, t3, n3) {
              for (var r3 = t3 > n3 ? -1 : 1; ; ) {
                if (t3 == n3) return t3;
                var o2 = (t3 + n3) / 2, i2 = r3 < 0 ? Math.ceil(o2) : Math.floor(o2);
                if (i2 == t3) return e4(i2) ? t3 : n3;
                e4(i2) ? n3 = i2 : t3 = i2 + r3;
              }
            }
            var ue = null;
            function fe(e4, t3, n3) {
              var r3;
              ue = null;
              for (var o2 = 0; o2 < e4.length; ++o2) {
                var i2 = e4[o2];
                if (i2.from < t3 && i2.to > t3) return o2;
                i2.to == t3 && (i2.from != i2.to && "before" == n3 ? r3 = o2 : ue = o2), i2.from == t3 && (i2.from != i2.to && "before" != n3 ? r3 = o2 : ue = o2);
              }
              return null != r3 ? r3 : ue;
            }
            var de = /* @__PURE__ */ function() {
              var e4 = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, t3 = /[stwN]/, n3 = /[LRr]/, r3 = /[Lb1n]/, o2 = /[1n]/;
              function i2(e5, t4, n4) {
                this.level = e5, this.from = t4, this.to = n4;
              }
              return function(a2, s2) {
                var l2, c2 = "ltr" == s2 ? "L" : "R";
                if (0 == a2.length || "ltr" == s2 && !e4.test(a2)) return false;
                for (var u2 = a2.length, f2 = [], d2 = 0; d2 < u2; ++d2) f2.push((l2 = a2.charCodeAt(d2)) <= 247 ? "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN".charAt(l2) : 1424 <= l2 && l2 <= 1524 ? "R" : 1536 <= l2 && l2 <= 1785 ? "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111".charAt(l2 - 1536) : 1774 <= l2 && l2 <= 2220 ? "r" : 8192 <= l2 && l2 <= 8203 ? "w" : 8204 == l2 ? "b" : "L");
                for (var p2 = 0, h2 = c2; p2 < u2; ++p2) {
                  var m2 = f2[p2];
                  "m" == m2 ? f2[p2] = h2 : h2 = m2;
                }
                for (var g2 = 0, v2 = c2; g2 < u2; ++g2) {
                  var A2 = f2[g2];
                  "1" == A2 && "r" == v2 ? f2[g2] = "n" : n3.test(A2) && (v2 = A2, "r" == A2 && (f2[g2] = "R"));
                }
                for (var y2 = 1, b2 = f2[0]; y2 < u2 - 1; ++y2) {
                  var C2 = f2[y2];
                  "+" == C2 && "1" == b2 && "1" == f2[y2 + 1] ? f2[y2] = "1" : "," != C2 || b2 != f2[y2 + 1] || "1" != b2 && "n" != b2 || (f2[y2] = b2), b2 = C2;
                }
                for (var x2 = 0; x2 < u2; ++x2) {
                  var w2 = f2[x2];
                  if ("," == w2) f2[x2] = "N";
                  else if ("%" == w2) {
                    var k2 = void 0;
                    for (k2 = x2 + 1; k2 < u2 && "%" == f2[k2]; ++k2) ;
                    for (var E2 = x2 && "!" == f2[x2 - 1] || k2 < u2 && "1" == f2[k2] ? "1" : "N", _2 = x2; _2 < k2; ++_2) f2[_2] = E2;
                    x2 = k2 - 1;
                  }
                }
                for (var S2 = 0, M2 = c2; S2 < u2; ++S2) {
                  var B2 = f2[S2];
                  "L" == M2 && "1" == B2 ? f2[S2] = "L" : n3.test(B2) && (M2 = B2);
                }
                for (var O2 = 0; O2 < u2; ++O2) if (t3.test(f2[O2])) {
                  var T2 = void 0;
                  for (T2 = O2 + 1; T2 < u2 && t3.test(f2[T2]); ++T2) ;
                  for (var L2 = "L" == (O2 ? f2[O2 - 1] : c2), F2 = L2 == ("L" == (T2 < u2 ? f2[T2] : c2)) ? L2 ? "L" : "R" : c2, P2 = O2; P2 < T2; ++P2) f2[P2] = F2;
                  O2 = T2 - 1;
                }
                for (var N2, j2 = [], I2 = 0; I2 < u2; ) if (r3.test(f2[I2])) {
                  var D2 = I2;
                  for (++I2; I2 < u2 && r3.test(f2[I2]); ++I2) ;
                  j2.push(new i2(0, D2, I2));
                } else {
                  var z2 = I2, R2 = j2.length, W2 = "rtl" == s2 ? 1 : 0;
                  for (++I2; I2 < u2 && "L" != f2[I2]; ++I2) ;
                  for (var H2 = z2; H2 < I2; ) if (o2.test(f2[H2])) {
                    z2 < H2 && (j2.splice(R2, 0, new i2(1, z2, H2)), R2 += W2);
                    var U2 = H2;
                    for (++H2; H2 < I2 && o2.test(f2[H2]); ++H2) ;
                    j2.splice(R2, 0, new i2(2, U2, H2)), R2 += W2, z2 = H2;
                  } else ++H2;
                  z2 < I2 && j2.splice(R2, 0, new i2(1, z2, I2));
                }
                return "ltr" == s2 && (1 == j2[0].level && (N2 = a2.match(/^\s+/)) && (j2[0].from = N2[0].length, j2.unshift(new i2(0, 0, N2[0].length))), 1 == X(j2).level && (N2 = a2.match(/\s+$/)) && (X(j2).to -= N2[0].length, j2.push(new i2(0, u2 - N2[0].length, u2)))), "rtl" == s2 ? j2.reverse() : j2;
              };
            }();
            function pe(e4, t3) {
              var n3 = e4.order;
              return null == n3 && (n3 = e4.order = de(e4.text, t3)), n3;
            }
            var he = [], me = function(e4, t3, n3) {
              if (e4.addEventListener) e4.addEventListener(t3, n3, false);
              else if (e4.attachEvent) e4.attachEvent("on" + t3, n3);
              else {
                var r3 = e4._handlers || (e4._handlers = {});
                r3[t3] = (r3[t3] || he).concat(n3);
              }
            };
            function ge(e4, t3) {
              return e4._handlers && e4._handlers[t3] || he;
            }
            function ve(e4, t3, n3) {
              if (e4.removeEventListener) e4.removeEventListener(t3, n3, false);
              else if (e4.detachEvent) e4.detachEvent("on" + t3, n3);
              else {
                var r3 = e4._handlers, o2 = r3 && r3[t3];
                if (o2) {
                  var i2 = U(o2, n3);
                  i2 > -1 && (r3[t3] = o2.slice(0, i2).concat(o2.slice(i2 + 1)));
                }
              }
            }
            function Ae(e4, t3) {
              var n3 = ge(e4, t3);
              if (n3.length) for (var r3 = Array.prototype.slice.call(arguments, 2), o2 = 0; o2 < n3.length; ++o2) n3[o2].apply(null, r3);
            }
            function ye(e4, t3, n3) {
              return "string" == typeof t3 && (t3 = { type: t3, preventDefault: function() {
                this.defaultPrevented = true;
              } }), Ae(e4, n3 || t3.type, e4, t3), Ee(t3) || t3.codemirrorIgnore;
            }
            function be(e4) {
              var t3 = e4._handlers && e4._handlers.cursorActivity;
              if (t3) for (var n3 = e4.curOp.cursorActivityHandlers || (e4.curOp.cursorActivityHandlers = []), r3 = 0; r3 < t3.length; ++r3) -1 == U(n3, t3[r3]) && n3.push(t3[r3]);
            }
            function Ce(e4, t3) {
              return ge(e4, t3).length > 0;
            }
            function xe(e4) {
              e4.prototype.on = function(e5, t3) {
                me(this, e5, t3);
              }, e4.prototype.off = function(e5, t3) {
                ve(this, e5, t3);
              };
            }
            function we(e4) {
              e4.preventDefault ? e4.preventDefault() : e4.returnValue = false;
            }
            function ke(e4) {
              e4.stopPropagation ? e4.stopPropagation() : e4.cancelBubble = true;
            }
            function Ee(e4) {
              return null != e4.defaultPrevented ? e4.defaultPrevented : 0 == e4.returnValue;
            }
            function _e(e4) {
              we(e4), ke(e4);
            }
            function Se(e4) {
              return e4.target || e4.srcElement;
            }
            function Me(e4) {
              var t3 = e4.which;
              return null == t3 && (1 & e4.button ? t3 = 1 : 2 & e4.button ? t3 = 3 : 4 & e4.button && (t3 = 2)), y && e4.ctrlKey && 1 == t3 && (t3 = 3), t3;
            }
            var Be, Oe, Te = function() {
              if (a && s < 9) return false;
              var e4 = O("div");
              return "draggable" in e4 || "dragDrop" in e4;
            }();
            function Le(e4) {
              if (null == Be) {
                var t3 = O("span", "​");
                B(e4, O("span", [t3, document.createTextNode("x")])), 0 != e4.firstChild.offsetHeight && (Be = t3.offsetWidth <= 1 && t3.offsetHeight > 2 && !(a && s < 8));
              }
              var n3 = Be ? O("span", "​") : O("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
              return n3.setAttribute("cm-text", ""), n3;
            }
            function Fe(e4) {
              if (null != Oe) return Oe;
              var t3 = B(e4, document.createTextNode("AخA")), n3 = _(t3, 0, 1).getBoundingClientRect(), r3 = _(t3, 1, 2).getBoundingClientRect();
              return M(e4), !(!n3 || n3.left == n3.right) && (Oe = r3.right - n3.right < 3);
            }
            var Pe, Ne = 3 != "\n\nb".split(/\n/).length ? function(e4) {
              for (var t3 = 0, n3 = [], r3 = e4.length; t3 <= r3; ) {
                var o2 = e4.indexOf("\n", t3);
                -1 == o2 && (o2 = e4.length);
                var i2 = e4.slice(t3, "\r" == e4.charAt(o2 - 1) ? o2 - 1 : o2), a2 = i2.indexOf("\r");
                -1 != a2 ? (n3.push(i2.slice(0, a2)), t3 += a2 + 1) : (n3.push(i2), t3 = o2 + 1);
              }
              return n3;
            } : function(e4) {
              return e4.split(/\r\n?|\n/);
            }, je = window.getSelection ? function(e4) {
              try {
                return e4.selectionStart != e4.selectionEnd;
              } catch (e5) {
                return false;
              }
            } : function(e4) {
              var t3;
              try {
                t3 = e4.ownerDocument.selection.createRange();
              } catch (e5) {
              }
              return !(!t3 || t3.parentElement() != e4) && 0 != t3.compareEndPoints("StartToEnd", t3);
            }, Ie = "oncopy" in (Pe = O("div")) || (Pe.setAttribute("oncopy", "return;"), "function" == typeof Pe.oncopy), De = null;
            var ze = {}, Re = {};
            function We(e4, t3) {
              arguments.length > 2 && (t3.dependencies = Array.prototype.slice.call(arguments, 2)), ze[e4] = t3;
            }
            function He(e4) {
              if ("string" == typeof e4 && Re.hasOwnProperty(e4)) e4 = Re[e4];
              else if (e4 && "string" == typeof e4.name && Re.hasOwnProperty(e4.name)) {
                var t3 = Re[e4.name];
                "string" == typeof t3 && (t3 = { name: t3 }), (e4 = te(t3, e4)).name = t3.name;
              } else {
                if ("string" == typeof e4 && /^[\w\-]+\/[\w\-]+\+xml$/.test(e4)) return He("application/xml");
                if ("string" == typeof e4 && /^[\w\-]+\/[\w\-]+\+json$/.test(e4)) return He("application/json");
              }
              return "string" == typeof e4 ? { name: e4 } : e4 || { name: "null" };
            }
            function Ue(e4, t3) {
              t3 = He(t3);
              var n3 = ze[t3.name];
              if (!n3) return Ue(e4, "text/plain");
              var r3 = n3(e4, t3);
              if (Ve.hasOwnProperty(t3.name)) {
                var o2 = Ve[t3.name];
                for (var i2 in o2) o2.hasOwnProperty(i2) && (r3.hasOwnProperty(i2) && (r3["_" + i2] = r3[i2]), r3[i2] = o2[i2]);
              }
              if (r3.name = t3.name, t3.helperType && (r3.helperType = t3.helperType), t3.modeProps) for (var a2 in t3.modeProps) r3[a2] = t3.modeProps[a2];
              return r3;
            }
            var Ve = {};
            function Ge(e4, t3) {
              R(t3, Ve.hasOwnProperty(e4) ? Ve[e4] : Ve[e4] = {});
            }
            function $e(e4, t3) {
              if (true === t3) return t3;
              if (e4.copyState) return e4.copyState(t3);
              var n3 = {};
              for (var r3 in t3) {
                var o2 = t3[r3];
                o2 instanceof Array && (o2 = o2.concat([])), n3[r3] = o2;
              }
              return n3;
            }
            function qe(e4, t3) {
              for (var n3; e4.innerMode && (n3 = e4.innerMode(t3)) && n3.mode != e4; ) t3 = n3.state, e4 = n3.mode;
              return n3 || { mode: e4, state: t3 };
            }
            function Ke(e4, t3, n3) {
              return !e4.startState || e4.startState(t3, n3);
            }
            var Ze = function(e4, t3, n3) {
              this.pos = this.start = 0, this.string = e4, this.tabSize = t3 || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n3;
            };
            function Ye(e4, t3) {
              if ((t3 -= e4.first) < 0 || t3 >= e4.size) throw new Error("There is no line " + (t3 + e4.first) + " in the document.");
              for (var n3 = e4; !n3.lines; ) for (var r3 = 0; ; ++r3) {
                var o2 = n3.children[r3], i2 = o2.chunkSize();
                if (t3 < i2) {
                  n3 = o2;
                  break;
                }
                t3 -= i2;
              }
              return n3.lines[t3];
            }
            function Je(e4, t3, n3) {
              var r3 = [], o2 = t3.line;
              return e4.iter(t3.line, n3.line + 1, function(e5) {
                var i2 = e5.text;
                o2 == n3.line && (i2 = i2.slice(0, n3.ch)), o2 == t3.line && (i2 = i2.slice(t3.ch)), r3.push(i2), ++o2;
              }), r3;
            }
            function Xe(e4, t3, n3) {
              var r3 = [];
              return e4.iter(t3, n3, function(e5) {
                r3.push(e5.text);
              }), r3;
            }
            function Qe(e4, t3) {
              var n3 = t3 - e4.height;
              if (n3) for (var r3 = e4; r3; r3 = r3.parent) r3.height += n3;
            }
            function et(e4) {
              if (null == e4.parent) return null;
              for (var t3 = e4.parent, n3 = U(t3.lines, e4), r3 = t3.parent; r3; t3 = r3, r3 = r3.parent) for (var o2 = 0; r3.children[o2] != t3; ++o2) n3 += r3.children[o2].chunkSize();
              return n3 + t3.first;
            }
            function tt(e4, t3) {
              var n3 = e4.first;
              e: do {
                for (var r3 = 0; r3 < e4.children.length; ++r3) {
                  var o2 = e4.children[r3], i2 = o2.height;
                  if (t3 < i2) {
                    e4 = o2;
                    continue e;
                  }
                  t3 -= i2, n3 += o2.chunkSize();
                }
                return n3;
              } while (!e4.lines);
              for (var a2 = 0; a2 < e4.lines.length; ++a2) {
                var s2 = e4.lines[a2].height;
                if (t3 < s2) break;
                t3 -= s2;
              }
              return n3 + a2;
            }
            function nt(e4, t3) {
              return t3 >= e4.first && t3 < e4.first + e4.size;
            }
            function rt(e4, t3) {
              return String(e4.lineNumberFormatter(t3 + e4.firstLineNumber));
            }
            function ot(e4, t3, n3) {
              if (void 0 === n3 && (n3 = null), !(this instanceof ot)) return new ot(e4, t3, n3);
              this.line = e4, this.ch = t3, this.sticky = n3;
            }
            function it(e4, t3) {
              return e4.line - t3.line || e4.ch - t3.ch;
            }
            function at(e4, t3) {
              return e4.sticky == t3.sticky && 0 == it(e4, t3);
            }
            function st(e4) {
              return ot(e4.line, e4.ch);
            }
            function lt(e4, t3) {
              return it(e4, t3) < 0 ? t3 : e4;
            }
            function ct(e4, t3) {
              return it(e4, t3) < 0 ? e4 : t3;
            }
            function ut(e4, t3) {
              return Math.max(e4.first, Math.min(t3, e4.first + e4.size - 1));
            }
            function ft(e4, t3) {
              if (t3.line < e4.first) return ot(e4.first, 0);
              var n3 = e4.first + e4.size - 1;
              return t3.line > n3 ? ot(n3, Ye(e4, n3).text.length) : function(e5, t4) {
                var n4 = e5.ch;
                return null == n4 || n4 > t4 ? ot(e5.line, t4) : n4 < 0 ? ot(e5.line, 0) : e5;
              }(t3, Ye(e4, t3.line).text.length);
            }
            function dt(e4, t3) {
              for (var n3 = [], r3 = 0; r3 < t3.length; r3++) n3[r3] = ft(e4, t3[r3]);
              return n3;
            }
            Ze.prototype.eol = function() {
              return this.pos >= this.string.length;
            }, Ze.prototype.sol = function() {
              return this.pos == this.lineStart;
            }, Ze.prototype.peek = function() {
              return this.string.charAt(this.pos) || void 0;
            }, Ze.prototype.next = function() {
              if (this.pos < this.string.length) return this.string.charAt(this.pos++);
            }, Ze.prototype.eat = function(e4) {
              var t3 = this.string.charAt(this.pos);
              if ("string" == typeof e4 ? t3 == e4 : t3 && (e4.test ? e4.test(t3) : e4(t3))) return ++this.pos, t3;
            }, Ze.prototype.eatWhile = function(e4) {
              for (var t3 = this.pos; this.eat(e4); ) ;
              return this.pos > t3;
            }, Ze.prototype.eatSpace = function() {
              for (var e4 = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); ) ++this.pos;
              return this.pos > e4;
            }, Ze.prototype.skipToEnd = function() {
              this.pos = this.string.length;
            }, Ze.prototype.skipTo = function(e4) {
              var t3 = this.string.indexOf(e4, this.pos);
              if (t3 > -1) return this.pos = t3, true;
            }, Ze.prototype.backUp = function(e4) {
              this.pos -= e4;
            }, Ze.prototype.column = function() {
              return this.lastColumnPos < this.start && (this.lastColumnValue = W(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? W(this.string, this.lineStart, this.tabSize) : 0);
            }, Ze.prototype.indentation = function() {
              return W(this.string, null, this.tabSize) - (this.lineStart ? W(this.string, this.lineStart, this.tabSize) : 0);
            }, Ze.prototype.match = function(e4, t3, n3) {
              if ("string" != typeof e4) {
                var r3 = this.string.slice(this.pos).match(e4);
                return r3 && r3.index > 0 ? null : (r3 && false !== t3 && (this.pos += r3[0].length), r3);
              }
              var o2 = function(e5) {
                return n3 ? e5.toLowerCase() : e5;
              };
              if (o2(this.string.substr(this.pos, e4.length)) == o2(e4)) return false !== t3 && (this.pos += e4.length), true;
            }, Ze.prototype.current = function() {
              return this.string.slice(this.start, this.pos);
            }, Ze.prototype.hideFirstChars = function(e4, t3) {
              this.lineStart += e4;
              try {
                return t3();
              } finally {
                this.lineStart -= e4;
              }
            }, Ze.prototype.lookAhead = function(e4) {
              var t3 = this.lineOracle;
              return t3 && t3.lookAhead(e4);
            }, Ze.prototype.baseToken = function() {
              var e4 = this.lineOracle;
              return e4 && e4.baseToken(this.pos);
            };
            var pt = function(e4, t3) {
              this.state = e4, this.lookAhead = t3;
            }, ht = function(e4, t3, n3, r3) {
              this.state = t3, this.doc = e4, this.line = n3, this.maxLookAhead = r3 || 0, this.baseTokens = null, this.baseTokenPos = 1;
            };
            function mt(e4, t3, n3, r3) {
              var o2 = [e4.state.modeGen], i2 = {};
              kt(e4, t3.text, e4.doc.mode, n3, function(e5, t4) {
                return o2.push(e5, t4);
              }, i2, r3);
              for (var a2 = n3.state, s2 = function(r4) {
                n3.baseTokens = o2;
                var s3 = e4.state.overlays[r4], l3 = 1, c2 = 0;
                n3.state = true, kt(e4, t3.text, s3.mode, n3, function(e5, t4) {
                  for (var n4 = l3; c2 < e5; ) {
                    var r5 = o2[l3];
                    r5 > e5 && o2.splice(l3, 1, e5, o2[l3 + 1], r5), l3 += 2, c2 = Math.min(e5, r5);
                  }
                  if (t4) if (s3.opaque) o2.splice(n4, l3 - n4, e5, "overlay " + t4), l3 = n4 + 2;
                  else for (; n4 < l3; n4 += 2) {
                    var i3 = o2[n4 + 1];
                    o2[n4 + 1] = (i3 ? i3 + " " : "") + "overlay " + t4;
                  }
                }, i2), n3.state = a2, n3.baseTokens = null, n3.baseTokenPos = 1;
              }, l2 = 0; l2 < e4.state.overlays.length; ++l2) s2(l2);
              return { styles: o2, classes: i2.bgClass || i2.textClass ? i2 : null };
            }
            function gt(e4, t3, n3) {
              if (!t3.styles || t3.styles[0] != e4.state.modeGen) {
                var r3 = vt(e4, et(t3)), o2 = t3.text.length > e4.options.maxHighlightLength && $e(e4.doc.mode, r3.state), i2 = mt(e4, t3, r3);
                o2 && (r3.state = o2), t3.stateAfter = r3.save(!o2), t3.styles = i2.styles, i2.classes ? t3.styleClasses = i2.classes : t3.styleClasses && (t3.styleClasses = null), n3 === e4.doc.highlightFrontier && (e4.doc.modeFrontier = Math.max(e4.doc.modeFrontier, ++e4.doc.highlightFrontier));
              }
              return t3.styles;
            }
            function vt(e4, t3, n3) {
              var r3 = e4.doc, o2 = e4.display;
              if (!r3.mode.startState) return new ht(r3, true, t3);
              var i2 = function(e5, t4, n4) {
                for (var r4, o3, i3 = e5.doc, a3 = n4 ? -1 : t4 - (e5.doc.mode.innerMode ? 1e3 : 100), s3 = t4; s3 > a3; --s3) {
                  if (s3 <= i3.first) return i3.first;
                  var l2 = Ye(i3, s3 - 1), c2 = l2.stateAfter;
                  if (c2 && (!n4 || s3 + (c2 instanceof pt ? c2.lookAhead : 0) <= i3.modeFrontier)) return s3;
                  var u2 = W(l2.text, null, e5.options.tabSize);
                  (null == o3 || r4 > u2) && (o3 = s3 - 1, r4 = u2);
                }
                return o3;
              }(e4, t3, n3), a2 = i2 > r3.first && Ye(r3, i2 - 1).stateAfter, s2 = a2 ? ht.fromSaved(r3, a2, i2) : new ht(r3, Ke(r3.mode), i2);
              return r3.iter(i2, t3, function(n4) {
                At(e4, n4.text, s2);
                var r4 = s2.line;
                n4.stateAfter = r4 == t3 - 1 || r4 % 5 == 0 || r4 >= o2.viewFrom && r4 < o2.viewTo ? s2.save() : null, s2.nextLine();
              }), n3 && (r3.modeFrontier = s2.line), s2;
            }
            function At(e4, t3, n3, r3) {
              var o2 = e4.doc.mode, i2 = new Ze(t3, e4.options.tabSize, n3);
              for (i2.start = i2.pos = r3 || 0, "" == t3 && yt(o2, n3.state); !i2.eol(); ) bt(o2, i2, n3.state), i2.start = i2.pos;
            }
            function yt(e4, t3) {
              if (e4.blankLine) return e4.blankLine(t3);
              if (e4.innerMode) {
                var n3 = qe(e4, t3);
                return n3.mode.blankLine ? n3.mode.blankLine(n3.state) : void 0;
              }
            }
            function bt(e4, t3, n3, r3) {
              for (var o2 = 0; o2 < 10; o2++) {
                r3 && (r3[0] = qe(e4, n3).mode);
                var i2 = e4.token(t3, n3);
                if (t3.pos > t3.start) return i2;
              }
              throw new Error("Mode " + e4.name + " failed to advance stream.");
            }
            ht.prototype.lookAhead = function(e4) {
              var t3 = this.doc.getLine(this.line + e4);
              return null != t3 && e4 > this.maxLookAhead && (this.maxLookAhead = e4), t3;
            }, ht.prototype.baseToken = function(e4) {
              if (!this.baseTokens) return null;
              for (; this.baseTokens[this.baseTokenPos] <= e4; ) this.baseTokenPos += 2;
              var t3 = this.baseTokens[this.baseTokenPos + 1];
              return { type: t3 && t3.replace(/( |^)overlay .*/, ""), size: this.baseTokens[this.baseTokenPos] - e4 };
            }, ht.prototype.nextLine = function() {
              this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
            }, ht.fromSaved = function(e4, t3, n3) {
              return t3 instanceof pt ? new ht(e4, $e(e4.mode, t3.state), n3, t3.lookAhead) : new ht(e4, $e(e4.mode, t3), n3);
            }, ht.prototype.save = function(e4) {
              var t3 = false !== e4 ? $e(this.doc.mode, this.state) : this.state;
              return this.maxLookAhead > 0 ? new pt(t3, this.maxLookAhead) : t3;
            };
            var Ct = function(e4, t3, n3) {
              this.start = e4.start, this.end = e4.pos, this.string = e4.current(), this.type = t3 || null, this.state = n3;
            };
            function xt(e4, t3, n3, r3) {
              var o2, i2, a2 = e4.doc, s2 = a2.mode, l2 = Ye(a2, (t3 = ft(a2, t3)).line), c2 = vt(e4, t3.line, n3), u2 = new Ze(l2.text, e4.options.tabSize, c2);
              for (r3 && (i2 = []); (r3 || u2.pos < t3.ch) && !u2.eol(); ) u2.start = u2.pos, o2 = bt(s2, u2, c2.state), r3 && i2.push(new Ct(u2, o2, $e(a2.mode, c2.state)));
              return r3 ? i2 : new Ct(u2, o2, c2.state);
            }
            function wt(e4, t3) {
              if (e4) for (; ; ) {
                var n3 = e4.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!n3) break;
                e4 = e4.slice(0, n3.index) + e4.slice(n3.index + n3[0].length);
                var r3 = n3[1] ? "bgClass" : "textClass";
                null == t3[r3] ? t3[r3] = n3[2] : new RegExp("(?:^|\\s)" + n3[2] + "(?:$|\\s)").test(t3[r3]) || (t3[r3] += " " + n3[2]);
              }
              return e4;
            }
            function kt(e4, t3, n3, r3, o2, i2, a2) {
              var s2 = n3.flattenSpans;
              null == s2 && (s2 = e4.options.flattenSpans);
              var l2, c2 = 0, u2 = null, f2 = new Ze(t3, e4.options.tabSize, r3), d2 = e4.options.addModeClass && [null];
              for ("" == t3 && wt(yt(n3, r3.state), i2); !f2.eol(); ) {
                if (f2.pos > e4.options.maxHighlightLength ? (s2 = false, a2 && At(e4, t3, r3, f2.pos), f2.pos = t3.length, l2 = null) : l2 = wt(bt(n3, f2, r3.state, d2), i2), d2) {
                  var p2 = d2[0].name;
                  p2 && (l2 = "m-" + (l2 ? p2 + " " + l2 : p2));
                }
                if (!s2 || u2 != l2) {
                  for (; c2 < f2.start; ) o2(c2 = Math.min(f2.start, c2 + 5e3), u2);
                  u2 = l2;
                }
                f2.start = f2.pos;
              }
              for (; c2 < f2.pos; ) {
                var h2 = Math.min(f2.pos, c2 + 5e3);
                o2(h2, u2), c2 = h2;
              }
            }
            var Et = false, _t = false;
            function St(e4, t3, n3) {
              this.marker = e4, this.from = t3, this.to = n3;
            }
            function Mt(e4, t3) {
              if (e4) for (var n3 = 0; n3 < e4.length; ++n3) {
                var r3 = e4[n3];
                if (r3.marker == t3) return r3;
              }
            }
            function Bt(e4, t3) {
              for (var n3, r3 = 0; r3 < e4.length; ++r3) e4[r3] != t3 && (n3 || (n3 = [])).push(e4[r3]);
              return n3;
            }
            function Ot(e4, t3) {
              if (t3.full) return null;
              var n3 = nt(e4, t3.from.line) && Ye(e4, t3.from.line).markedSpans, r3 = nt(e4, t3.to.line) && Ye(e4, t3.to.line).markedSpans;
              if (!n3 && !r3) return null;
              var o2 = t3.from.ch, i2 = t3.to.ch, a2 = 0 == it(t3.from, t3.to), s2 = function(e5, t4, n4) {
                var r4;
                if (e5) for (var o3 = 0; o3 < e5.length; ++o3) {
                  var i3 = e5[o3], a3 = i3.marker;
                  if (null == i3.from || (a3.inclusiveLeft ? i3.from <= t4 : i3.from < t4) || i3.from == t4 && "bookmark" == a3.type && (!n4 || !i3.marker.insertLeft)) {
                    var s3 = null == i3.to || (a3.inclusiveRight ? i3.to >= t4 : i3.to > t4);
                    (r4 || (r4 = [])).push(new St(a3, i3.from, s3 ? null : i3.to));
                  }
                }
                return r4;
              }(n3, o2, a2), l2 = function(e5, t4, n4) {
                var r4;
                if (e5) for (var o3 = 0; o3 < e5.length; ++o3) {
                  var i3 = e5[o3], a3 = i3.marker;
                  if (null == i3.to || (a3.inclusiveRight ? i3.to >= t4 : i3.to > t4) || i3.from == t4 && "bookmark" == a3.type && (!n4 || i3.marker.insertLeft)) {
                    var s3 = null == i3.from || (a3.inclusiveLeft ? i3.from <= t4 : i3.from < t4);
                    (r4 || (r4 = [])).push(new St(a3, s3 ? null : i3.from - t4, null == i3.to ? null : i3.to - t4));
                  }
                }
                return r4;
              }(r3, i2, a2), c2 = 1 == t3.text.length, u2 = X(t3.text).length + (c2 ? o2 : 0);
              if (s2) for (var f2 = 0; f2 < s2.length; ++f2) {
                var d2 = s2[f2];
                if (null == d2.to) {
                  var p2 = Mt(l2, d2.marker);
                  p2 ? c2 && (d2.to = null == p2.to ? null : p2.to + u2) : d2.to = o2;
                }
              }
              if (l2) for (var h2 = 0; h2 < l2.length; ++h2) {
                var m2 = l2[h2];
                null != m2.to && (m2.to += u2), null == m2.from ? Mt(s2, m2.marker) || (m2.from = u2, c2 && (s2 || (s2 = [])).push(m2)) : (m2.from += u2, c2 && (s2 || (s2 = [])).push(m2));
              }
              s2 && (s2 = Tt(s2)), l2 && l2 != s2 && (l2 = Tt(l2));
              var g2 = [s2];
              if (!c2) {
                var v2, A2 = t3.text.length - 2;
                if (A2 > 0 && s2) for (var y2 = 0; y2 < s2.length; ++y2) null == s2[y2].to && (v2 || (v2 = [])).push(new St(s2[y2].marker, null, null));
                for (var b2 = 0; b2 < A2; ++b2) g2.push(v2);
                g2.push(l2);
              }
              return g2;
            }
            function Tt(e4) {
              for (var t3 = 0; t3 < e4.length; ++t3) {
                var n3 = e4[t3];
                null != n3.from && n3.from == n3.to && false !== n3.marker.clearWhenEmpty && e4.splice(t3--, 1);
              }
              return e4.length ? e4 : null;
            }
            function Lt(e4) {
              var t3 = e4.markedSpans;
              if (t3) {
                for (var n3 = 0; n3 < t3.length; ++n3) t3[n3].marker.detachLine(e4);
                e4.markedSpans = null;
              }
            }
            function Ft(e4, t3) {
              if (t3) {
                for (var n3 = 0; n3 < t3.length; ++n3) t3[n3].marker.attachLine(e4);
                e4.markedSpans = t3;
              }
            }
            function Pt(e4) {
              return e4.inclusiveLeft ? -1 : 0;
            }
            function Nt(e4) {
              return e4.inclusiveRight ? 1 : 0;
            }
            function jt(e4, t3) {
              var n3 = e4.lines.length - t3.lines.length;
              if (0 != n3) return n3;
              var r3 = e4.find(), o2 = t3.find(), i2 = it(r3.from, o2.from) || Pt(e4) - Pt(t3);
              return i2 ? -i2 : it(r3.to, o2.to) || Nt(e4) - Nt(t3) || t3.id - e4.id;
            }
            function It(e4, t3) {
              var n3, r3 = _t && e4.markedSpans;
              if (r3) for (var o2 = void 0, i2 = 0; i2 < r3.length; ++i2) (o2 = r3[i2]).marker.collapsed && null == (t3 ? o2.from : o2.to) && (!n3 || jt(n3, o2.marker) < 0) && (n3 = o2.marker);
              return n3;
            }
            function Dt(e4) {
              return It(e4, true);
            }
            function zt(e4) {
              return It(e4, false);
            }
            function Rt(e4, t3) {
              var n3, r3 = _t && e4.markedSpans;
              if (r3) for (var o2 = 0; o2 < r3.length; ++o2) {
                var i2 = r3[o2];
                i2.marker.collapsed && (null == i2.from || i2.from < t3) && (null == i2.to || i2.to > t3) && (!n3 || jt(n3, i2.marker) < 0) && (n3 = i2.marker);
              }
              return n3;
            }
            function Wt(e4, t3, n3, r3, o2) {
              var i2 = Ye(e4, t3), a2 = _t && i2.markedSpans;
              if (a2) for (var s2 = 0; s2 < a2.length; ++s2) {
                var l2 = a2[s2];
                if (l2.marker.collapsed) {
                  var c2 = l2.marker.find(0), u2 = it(c2.from, n3) || Pt(l2.marker) - Pt(o2), f2 = it(c2.to, r3) || Nt(l2.marker) - Nt(o2);
                  if (!(u2 >= 0 && f2 <= 0 || u2 <= 0 && f2 >= 0) && (u2 <= 0 && (l2.marker.inclusiveRight && o2.inclusiveLeft ? it(c2.to, n3) >= 0 : it(c2.to, n3) > 0) || u2 >= 0 && (l2.marker.inclusiveRight && o2.inclusiveLeft ? it(c2.from, r3) <= 0 : it(c2.from, r3) < 0))) return true;
                }
              }
            }
            function Ht(e4) {
              for (var t3; t3 = Dt(e4); ) e4 = t3.find(-1, true).line;
              return e4;
            }
            function Ut(e4, t3) {
              var n3 = Ye(e4, t3), r3 = Ht(n3);
              return n3 == r3 ? t3 : et(r3);
            }
            function Vt(e4, t3) {
              if (t3 > e4.lastLine()) return t3;
              var n3, r3 = Ye(e4, t3);
              if (!Gt(e4, r3)) return t3;
              for (; n3 = zt(r3); ) r3 = n3.find(1, true).line;
              return et(r3) + 1;
            }
            function Gt(e4, t3) {
              var n3 = _t && t3.markedSpans;
              if (n3) {
                for (var r3 = void 0, o2 = 0; o2 < n3.length; ++o2) if ((r3 = n3[o2]).marker.collapsed) {
                  if (null == r3.from) return true;
                  if (!r3.marker.widgetNode && 0 == r3.from && r3.marker.inclusiveLeft && $t(e4, t3, r3)) return true;
                }
              }
            }
            function $t(e4, t3, n3) {
              if (null == n3.to) {
                var r3 = n3.marker.find(1, true);
                return $t(e4, r3.line, Mt(r3.line.markedSpans, n3.marker));
              }
              if (n3.marker.inclusiveRight && n3.to == t3.text.length) return true;
              for (var o2 = void 0, i2 = 0; i2 < t3.markedSpans.length; ++i2) if ((o2 = t3.markedSpans[i2]).marker.collapsed && !o2.marker.widgetNode && o2.from == n3.to && (null == o2.to || o2.to != n3.from) && (o2.marker.inclusiveLeft || n3.marker.inclusiveRight) && $t(e4, t3, o2)) return true;
            }
            function qt(e4) {
              for (var t3 = 0, n3 = (e4 = Ht(e4)).parent, r3 = 0; r3 < n3.lines.length; ++r3) {
                var o2 = n3.lines[r3];
                if (o2 == e4) break;
                t3 += o2.height;
              }
              for (var i2 = n3.parent; i2; i2 = (n3 = i2).parent) for (var a2 = 0; a2 < i2.children.length; ++a2) {
                var s2 = i2.children[a2];
                if (s2 == n3) break;
                t3 += s2.height;
              }
              return t3;
            }
            function Kt(e4) {
              if (0 == e4.height) return 0;
              for (var t3, n3 = e4.text.length, r3 = e4; t3 = Dt(r3); ) {
                var o2 = t3.find(0, true);
                r3 = o2.from.line, n3 += o2.from.ch - o2.to.ch;
              }
              for (r3 = e4; t3 = zt(r3); ) {
                var i2 = t3.find(0, true);
                n3 -= r3.text.length - i2.from.ch, n3 += (r3 = i2.to.line).text.length - i2.to.ch;
              }
              return n3;
            }
            function Zt(e4) {
              var t3 = e4.display, n3 = e4.doc;
              t3.maxLine = Ye(n3, n3.first), t3.maxLineLength = Kt(t3.maxLine), t3.maxLineChanged = true, n3.iter(function(e5) {
                var n4 = Kt(e5);
                n4 > t3.maxLineLength && (t3.maxLineLength = n4, t3.maxLine = e5);
              });
            }
            var Yt = function(e4, t3, n3) {
              this.text = e4, Ft(this, t3), this.height = n3 ? n3(this) : 1;
            };
            function Jt(e4) {
              e4.parent = null, Lt(e4);
            }
            Yt.prototype.lineNo = function() {
              return et(this);
            }, xe(Yt);
            var Xt = {}, Qt = {};
            function en(e4, t3) {
              if (!e4 || /^\s*$/.test(e4)) return null;
              var n3 = t3.addModeClass ? Qt : Xt;
              return n3[e4] || (n3[e4] = e4.replace(/\S+/g, "cm-$&"));
            }
            function tn(e4, t3) {
              var n3 = T("span", null, null, l ? "padding-right: .1px" : null), r3 = { pre: T("pre", [n3], "CodeMirror-line"), content: n3, col: 0, pos: 0, cm: e4, trailingSpace: false, splitSpaces: e4.getOption("lineWrapping") };
              t3.measure = {};
              for (var o2 = 0; o2 <= (t3.rest ? t3.rest.length : 0); o2++) {
                var i2 = o2 ? t3.rest[o2 - 1] : t3.line, a2 = void 0;
                r3.pos = 0, r3.addToken = rn, Fe(e4.display.measure) && (a2 = pe(i2, e4.doc.direction)) && (r3.addToken = on(r3.addToken, a2)), r3.map = [], sn(i2, r3, gt(e4, i2, t3 != e4.display.externalMeasured && et(i2))), i2.styleClasses && (i2.styleClasses.bgClass && (r3.bgClass = N(i2.styleClasses.bgClass, r3.bgClass || "")), i2.styleClasses.textClass && (r3.textClass = N(i2.styleClasses.textClass, r3.textClass || ""))), 0 == r3.map.length && r3.map.push(0, 0, r3.content.appendChild(Le(e4.display.measure))), 0 == o2 ? (t3.measure.map = r3.map, t3.measure.cache = {}) : ((t3.measure.maps || (t3.measure.maps = [])).push(r3.map), (t3.measure.caches || (t3.measure.caches = [])).push({}));
              }
              if (l) {
                var s2 = r3.content.lastChild;
                (/\bcm-tab\b/.test(s2.className) || s2.querySelector && s2.querySelector(".cm-tab")) && (r3.content.className = "cm-tab-wrap-hack");
              }
              return Ae(e4, "renderLine", e4, t3.line, r3.pre), r3.pre.className && (r3.textClass = N(r3.pre.className, r3.textClass || "")), r3;
            }
            function nn(e4) {
              var t3 = O("span", "•", "cm-invalidchar");
              return t3.title = "\\u" + e4.charCodeAt(0).toString(16), t3.setAttribute("aria-label", t3.title), t3;
            }
            function rn(e4, t3, n3, r3, o2, i2, l2) {
              if (t3) {
                var c2, u2 = e4.splitSpaces ? function(e5, t4) {
                  if (e5.length > 1 && !/  /.test(e5)) return e5;
                  for (var n4 = t4, r4 = "", o3 = 0; o3 < e5.length; o3++) {
                    var i3 = e5.charAt(o3);
                    " " != i3 || !n4 || o3 != e5.length - 1 && 32 != e5.charCodeAt(o3 + 1) || (i3 = " "), r4 += i3, n4 = " " == i3;
                  }
                  return r4;
                }(t3, e4.trailingSpace) : t3, f2 = e4.cm.state.specialChars, d2 = false;
                if (f2.test(t3)) {
                  c2 = document.createDocumentFragment();
                  for (var p2 = 0; ; ) {
                    f2.lastIndex = p2;
                    var h2 = f2.exec(t3), m2 = h2 ? h2.index - p2 : t3.length - p2;
                    if (m2) {
                      var g2 = document.createTextNode(u2.slice(p2, p2 + m2));
                      a && s < 9 ? c2.appendChild(O("span", [g2])) : c2.appendChild(g2), e4.map.push(e4.pos, e4.pos + m2, g2), e4.col += m2, e4.pos += m2;
                    }
                    if (!h2) break;
                    p2 += m2 + 1;
                    var v2 = void 0;
                    if ("	" == h2[0]) {
                      var A2 = e4.cm.options.tabSize, y2 = A2 - e4.col % A2;
                      (v2 = c2.appendChild(O("span", J(y2), "cm-tab"))).setAttribute("role", "presentation"), v2.setAttribute("cm-text", "	"), e4.col += y2;
                    } else "\r" == h2[0] || "\n" == h2[0] ? ((v2 = c2.appendChild(O("span", "\r" == h2[0] ? "␍" : "␤", "cm-invalidchar"))).setAttribute("cm-text", h2[0]), e4.col += 1) : ((v2 = e4.cm.options.specialCharPlaceholder(h2[0])).setAttribute("cm-text", h2[0]), a && s < 9 ? c2.appendChild(O("span", [v2])) : c2.appendChild(v2), e4.col += 1);
                    e4.map.push(e4.pos, e4.pos + 1, v2), e4.pos++;
                  }
                } else e4.col += t3.length, c2 = document.createTextNode(u2), e4.map.push(e4.pos, e4.pos + t3.length, c2), a && s < 9 && (d2 = true), e4.pos += t3.length;
                if (e4.trailingSpace = 32 == u2.charCodeAt(t3.length - 1), n3 || r3 || o2 || d2 || i2 || l2) {
                  var b2 = n3 || "";
                  r3 && (b2 += r3), o2 && (b2 += o2);
                  var C2 = O("span", [c2], b2, i2);
                  if (l2) for (var x2 in l2) l2.hasOwnProperty(x2) && "style" != x2 && "class" != x2 && C2.setAttribute(x2, l2[x2]);
                  return e4.content.appendChild(C2);
                }
                e4.content.appendChild(c2);
              }
            }
            function on(e4, t3) {
              return function(n3, r3, o2, i2, a2, s2, l2) {
                o2 = o2 ? o2 + " cm-force-border" : "cm-force-border";
                for (var c2 = n3.pos, u2 = c2 + r3.length; ; ) {
                  for (var f2 = void 0, d2 = 0; d2 < t3.length && !((f2 = t3[d2]).to > c2 && f2.from <= c2); d2++) ;
                  if (f2.to >= u2) return e4(n3, r3, o2, i2, a2, s2, l2);
                  e4(n3, r3.slice(0, f2.to - c2), o2, i2, null, s2, l2), i2 = null, r3 = r3.slice(f2.to - c2), c2 = f2.to;
                }
              };
            }
            function an(e4, t3, n3, r3) {
              var o2 = !r3 && n3.widgetNode;
              o2 && e4.map.push(e4.pos, e4.pos + t3, o2), !r3 && e4.cm.display.input.needsContentAttribute && (o2 || (o2 = e4.content.appendChild(document.createElement("span"))), o2.setAttribute("cm-marker", n3.id)), o2 && (e4.cm.display.input.setUneditable(o2), e4.content.appendChild(o2)), e4.pos += t3, e4.trailingSpace = false;
            }
            function sn(e4, t3, n3) {
              var r3 = e4.markedSpans, o2 = e4.text, i2 = 0;
              if (r3) for (var a2, s2, l2, c2, u2, f2, d2, p2 = o2.length, h2 = 0, m2 = 1, g2 = "", v2 = 0; ; ) {
                if (v2 == h2) {
                  l2 = c2 = u2 = s2 = "", d2 = null, f2 = null, v2 = 1 / 0;
                  for (var A2 = [], y2 = void 0, b2 = 0; b2 < r3.length; ++b2) {
                    var C2 = r3[b2], x2 = C2.marker;
                    if ("bookmark" == x2.type && C2.from == h2 && x2.widgetNode) A2.push(x2);
                    else if (C2.from <= h2 && (null == C2.to || C2.to > h2 || x2.collapsed && C2.to == h2 && C2.from == h2)) {
                      if (null != C2.to && C2.to != h2 && v2 > C2.to && (v2 = C2.to, c2 = ""), x2.className && (l2 += " " + x2.className), x2.css && (s2 = (s2 ? s2 + ";" : "") + x2.css), x2.startStyle && C2.from == h2 && (u2 += " " + x2.startStyle), x2.endStyle && C2.to == v2 && (y2 || (y2 = [])).push(x2.endStyle, C2.to), x2.title && ((d2 || (d2 = {})).title = x2.title), x2.attributes) for (var w2 in x2.attributes) (d2 || (d2 = {}))[w2] = x2.attributes[w2];
                      x2.collapsed && (!f2 || jt(f2.marker, x2) < 0) && (f2 = C2);
                    } else C2.from > h2 && v2 > C2.from && (v2 = C2.from);
                  }
                  if (y2) for (var k2 = 0; k2 < y2.length; k2 += 2) y2[k2 + 1] == v2 && (c2 += " " + y2[k2]);
                  if (!f2 || f2.from == h2) for (var E2 = 0; E2 < A2.length; ++E2) an(t3, 0, A2[E2]);
                  if (f2 && (f2.from || 0) == h2) {
                    if (an(t3, (null == f2.to ? p2 + 1 : f2.to) - h2, f2.marker, null == f2.from), null == f2.to) return;
                    f2.to == h2 && (f2 = false);
                  }
                }
                if (h2 >= p2) break;
                for (var _2 = Math.min(p2, v2); ; ) {
                  if (g2) {
                    var S2 = h2 + g2.length;
                    if (!f2) {
                      var M2 = S2 > _2 ? g2.slice(0, _2 - h2) : g2;
                      t3.addToken(t3, M2, a2 ? a2 + l2 : l2, u2, h2 + M2.length == v2 ? c2 : "", s2, d2);
                    }
                    if (S2 >= _2) {
                      g2 = g2.slice(_2 - h2), h2 = _2;
                      break;
                    }
                    h2 = S2, u2 = "";
                  }
                  g2 = o2.slice(i2, i2 = n3[m2++]), a2 = en(n3[m2++], t3.cm.options);
                }
              }
              else for (var B2 = 1; B2 < n3.length; B2 += 2) t3.addToken(t3, o2.slice(i2, i2 = n3[B2]), en(n3[B2 + 1], t3.cm.options));
            }
            function ln(e4, t3, n3) {
              this.line = t3, this.rest = function(e5) {
                for (var t4, n4; t4 = zt(e5); ) e5 = t4.find(1, true).line, (n4 || (n4 = [])).push(e5);
                return n4;
              }(t3), this.size = this.rest ? et(X(this.rest)) - n3 + 1 : 1, this.node = this.text = null, this.hidden = Gt(e4, t3);
            }
            function cn(e4, t3, n3) {
              for (var r3, o2 = [], i2 = t3; i2 < n3; i2 = r3) {
                var a2 = new ln(e4.doc, Ye(e4.doc, i2), i2);
                r3 = i2 + a2.size, o2.push(a2);
              }
              return o2;
            }
            var un = null;
            var fn = null;
            function dn(e4, t3) {
              var n3 = ge(e4, t3);
              if (n3.length) {
                var r3, o2 = Array.prototype.slice.call(arguments, 2);
                un ? r3 = un.delayedCallbacks : fn ? r3 = fn : (r3 = fn = [], setTimeout(pn, 0));
                for (var i2 = function(e5) {
                  r3.push(function() {
                    return n3[e5].apply(null, o2);
                  });
                }, a2 = 0; a2 < n3.length; ++a2) i2(a2);
              }
            }
            function pn() {
              var e4 = fn;
              fn = null;
              for (var t3 = 0; t3 < e4.length; ++t3) e4[t3]();
            }
            function hn(e4, t3, n3, r3) {
              for (var o2 = 0; o2 < t3.changes.length; o2++) {
                var i2 = t3.changes[o2];
                "text" == i2 ? vn(e4, t3) : "gutter" == i2 ? yn(e4, t3, n3, r3) : "class" == i2 ? An(e4, t3) : "widget" == i2 && bn(e4, t3, r3);
              }
              t3.changes = null;
            }
            function mn(e4) {
              return e4.node == e4.text && (e4.node = O("div", null, null, "position: relative"), e4.text.parentNode && e4.text.parentNode.replaceChild(e4.node, e4.text), e4.node.appendChild(e4.text), a && s < 8 && (e4.node.style.zIndex = 2)), e4.node;
            }
            function gn(e4, t3) {
              var n3 = e4.display.externalMeasured;
              return n3 && n3.line == t3.line ? (e4.display.externalMeasured = null, t3.measure = n3.measure, n3.built) : tn(e4, t3);
            }
            function vn(e4, t3) {
              var n3 = t3.text.className, r3 = gn(e4, t3);
              t3.text == t3.node && (t3.node = r3.pre), t3.text.parentNode.replaceChild(r3.pre, t3.text), t3.text = r3.pre, r3.bgClass != t3.bgClass || r3.textClass != t3.textClass ? (t3.bgClass = r3.bgClass, t3.textClass = r3.textClass, An(e4, t3)) : n3 && (t3.text.className = n3);
            }
            function An(e4, t3) {
              (function(e5, t4) {
                var n4 = t4.bgClass ? t4.bgClass + " " + (t4.line.bgClass || "") : t4.line.bgClass;
                if (n4 && (n4 += " CodeMirror-linebackground"), t4.background) n4 ? t4.background.className = n4 : (t4.background.parentNode.removeChild(t4.background), t4.background = null);
                else if (n4) {
                  var r3 = mn(t4);
                  t4.background = r3.insertBefore(O("div", null, n4), r3.firstChild), e5.display.input.setUneditable(t4.background);
                }
              })(e4, t3), t3.line.wrapClass ? mn(t3).className = t3.line.wrapClass : t3.node != t3.text && (t3.node.className = "");
              var n3 = t3.textClass ? t3.textClass + " " + (t3.line.textClass || "") : t3.line.textClass;
              t3.text.className = n3 || "";
            }
            function yn(e4, t3, n3, r3) {
              if (t3.gutter && (t3.node.removeChild(t3.gutter), t3.gutter = null), t3.gutterBackground && (t3.node.removeChild(t3.gutterBackground), t3.gutterBackground = null), t3.line.gutterClass) {
                var o2 = mn(t3);
                t3.gutterBackground = O("div", null, "CodeMirror-gutter-background " + t3.line.gutterClass, "left: " + (e4.options.fixedGutter ? r3.fixedPos : -r3.gutterTotalWidth) + "px; width: " + r3.gutterTotalWidth + "px"), e4.display.input.setUneditable(t3.gutterBackground), o2.insertBefore(t3.gutterBackground, t3.text);
              }
              var i2 = t3.line.gutterMarkers;
              if (e4.options.lineNumbers || i2) {
                var a2 = mn(t3), s2 = t3.gutter = O("div", null, "CodeMirror-gutter-wrapper", "left: " + (e4.options.fixedGutter ? r3.fixedPos : -r3.gutterTotalWidth) + "px");
                if (s2.setAttribute("aria-hidden", "true"), e4.display.input.setUneditable(s2), a2.insertBefore(s2, t3.text), t3.line.gutterClass && (s2.className += " " + t3.line.gutterClass), !e4.options.lineNumbers || i2 && i2["CodeMirror-linenumbers"] || (t3.lineNumber = s2.appendChild(O("div", rt(e4.options, n3), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + r3.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e4.display.lineNumInnerWidth + "px"))), i2) for (var l2 = 0; l2 < e4.display.gutterSpecs.length; ++l2) {
                  var c2 = e4.display.gutterSpecs[l2].className, u2 = i2.hasOwnProperty(c2) && i2[c2];
                  u2 && s2.appendChild(O("div", [u2], "CodeMirror-gutter-elt", "left: " + r3.gutterLeft[c2] + "px; width: " + r3.gutterWidth[c2] + "px"));
                }
              }
            }
            function bn(e4, t3, n3) {
              t3.alignable && (t3.alignable = null);
              for (var r3 = E("CodeMirror-linewidget"), o2 = t3.node.firstChild, i2 = void 0; o2; o2 = i2) i2 = o2.nextSibling, r3.test(o2.className) && t3.node.removeChild(o2);
              xn(e4, t3, n3);
            }
            function Cn(e4, t3, n3, r3) {
              var o2 = gn(e4, t3);
              return t3.text = t3.node = o2.pre, o2.bgClass && (t3.bgClass = o2.bgClass), o2.textClass && (t3.textClass = o2.textClass), An(e4, t3), yn(e4, t3, n3, r3), xn(e4, t3, r3), t3.node;
            }
            function xn(e4, t3, n3) {
              if (wn(e4, t3.line, t3, n3, true), t3.rest) for (var r3 = 0; r3 < t3.rest.length; r3++) wn(e4, t3.rest[r3], t3, n3, false);
            }
            function wn(e4, t3, n3, r3, o2) {
              if (t3.widgets) for (var i2 = mn(n3), a2 = 0, s2 = t3.widgets; a2 < s2.length; ++a2) {
                var l2 = s2[a2], c2 = O("div", [l2.node], "CodeMirror-linewidget" + (l2.className ? " " + l2.className : ""));
                l2.handleMouseEvents || c2.setAttribute("cm-ignore-events", "true"), kn(l2, c2, n3, r3), e4.display.input.setUneditable(c2), o2 && l2.above ? i2.insertBefore(c2, n3.gutter || n3.text) : i2.appendChild(c2), dn(l2, "redraw");
              }
            }
            function kn(e4, t3, n3, r3) {
              if (e4.noHScroll) {
                (n3.alignable || (n3.alignable = [])).push(t3);
                var o2 = r3.wrapperWidth;
                t3.style.left = r3.fixedPos + "px", e4.coverGutter || (o2 -= r3.gutterTotalWidth, t3.style.paddingLeft = r3.gutterTotalWidth + "px"), t3.style.width = o2 + "px";
              }
              e4.coverGutter && (t3.style.zIndex = 5, t3.style.position = "relative", e4.noHScroll || (t3.style.marginLeft = -r3.gutterTotalWidth + "px"));
            }
            function En(e4) {
              if (null != e4.height) return e4.height;
              var t3 = e4.doc.cm;
              if (!t3) return 0;
              if (!L(document.body, e4.node)) {
                var n3 = "position: relative;";
                e4.coverGutter && (n3 += "margin-left: -" + t3.display.gutters.offsetWidth + "px;"), e4.noHScroll && (n3 += "width: " + t3.display.wrapper.clientWidth + "px;"), B(t3.display.measure, O("div", [e4.node], null, n3));
              }
              return e4.height = e4.node.parentNode.offsetHeight;
            }
            function _n(e4, t3) {
              for (var n3 = Se(t3); n3 != e4.wrapper; n3 = n3.parentNode) if (!n3 || 1 == n3.nodeType && "true" == n3.getAttribute("cm-ignore-events") || n3.parentNode == e4.sizer && n3 != e4.mover) return true;
            }
            function Sn(e4) {
              return e4.lineSpace.offsetTop;
            }
            function Mn(e4) {
              return e4.mover.offsetHeight - e4.lineSpace.offsetHeight;
            }
            function Bn(e4) {
              if (e4.cachedPaddingH) return e4.cachedPaddingH;
              var t3 = B(e4.measure, O("pre", "x", "CodeMirror-line-like")), n3 = window.getComputedStyle ? window.getComputedStyle(t3) : t3.currentStyle, r3 = { left: parseInt(n3.paddingLeft), right: parseInt(n3.paddingRight) };
              return isNaN(r3.left) || isNaN(r3.right) || (e4.cachedPaddingH = r3), r3;
            }
            function On(e4) {
              return V - e4.display.nativeBarWidth;
            }
            function Tn(e4) {
              return e4.display.scroller.clientWidth - On(e4) - e4.display.barWidth;
            }
            function Ln(e4) {
              return e4.display.scroller.clientHeight - On(e4) - e4.display.barHeight;
            }
            function Fn(e4, t3, n3) {
              if (e4.line == t3) return { map: e4.measure.map, cache: e4.measure.cache };
              if (e4.rest) {
                for (var r3 = 0; r3 < e4.rest.length; r3++) if (e4.rest[r3] == t3) return { map: e4.measure.maps[r3], cache: e4.measure.caches[r3] };
                for (var o2 = 0; o2 < e4.rest.length; o2++) if (et(e4.rest[o2]) > n3) return { map: e4.measure.maps[o2], cache: e4.measure.caches[o2], before: true };
              }
            }
            function Pn(e4, t3, n3, r3) {
              return In(e4, jn(e4, t3), n3, r3);
            }
            function Nn(e4, t3) {
              if (t3 >= e4.display.viewFrom && t3 < e4.display.viewTo) return e4.display.view[hr(e4, t3)];
              var n3 = e4.display.externalMeasured;
              return n3 && t3 >= n3.lineN && t3 < n3.lineN + n3.size ? n3 : void 0;
            }
            function jn(e4, t3) {
              var n3 = et(t3), r3 = Nn(e4, n3);
              r3 && !r3.text ? r3 = null : r3 && r3.changes && (hn(e4, r3, n3, cr(e4)), e4.curOp.forceUpdate = true), r3 || (r3 = function(e5, t4) {
                var n4 = et(t4 = Ht(t4)), r4 = e5.display.externalMeasured = new ln(e5.doc, t4, n4);
                r4.lineN = n4;
                var o3 = r4.built = tn(e5, r4);
                return r4.text = o3.pre, B(e5.display.lineMeasure, o3.pre), r4;
              }(e4, t3));
              var o2 = Fn(r3, t3, n3);
              return { line: t3, view: r3, rect: null, map: o2.map, cache: o2.cache, before: o2.before, hasHeights: false };
            }
            function In(e4, t3, n3, r3, o2) {
              t3.before && (n3 = -1);
              var i2, l2 = n3 + (r3 || "");
              return t3.cache.hasOwnProperty(l2) ? i2 = t3.cache[l2] : (t3.rect || (t3.rect = t3.view.text.getBoundingClientRect()), t3.hasHeights || (function(e5, t4, n4) {
                var r4 = e5.options.lineWrapping, o3 = r4 && Tn(e5);
                if (!t4.measure.heights || r4 && t4.measure.width != o3) {
                  var i3 = t4.measure.heights = [];
                  if (r4) {
                    t4.measure.width = o3;
                    for (var a2 = t4.text.firstChild.getClientRects(), s2 = 0; s2 < a2.length - 1; s2++) {
                      var l3 = a2[s2], c2 = a2[s2 + 1];
                      Math.abs(l3.bottom - c2.bottom) > 2 && i3.push((l3.bottom + c2.top) / 2 - n4.top);
                    }
                  }
                  i3.push(n4.bottom - n4.top);
                }
              }(e4, t3.view, t3.rect), t3.hasHeights = true), (i2 = function(e5, t4, n4, r4) {
                var o3, i3 = Rn(t4.map, n4, r4), l3 = i3.node, c2 = i3.start, u2 = i3.end, f2 = i3.collapse;
                if (3 == l3.nodeType) {
                  for (var d2 = 0; d2 < 4; d2++) {
                    for (; c2 && se(t4.line.text.charAt(i3.coverStart + c2)); ) --c2;
                    for (; i3.coverStart + u2 < i3.coverEnd && se(t4.line.text.charAt(i3.coverStart + u2)); ) ++u2;
                    if ((o3 = a && s < 9 && 0 == c2 && u2 == i3.coverEnd - i3.coverStart ? l3.parentNode.getBoundingClientRect() : Wn(_(l3, c2, u2).getClientRects(), r4)).left || o3.right || 0 == c2) break;
                    u2 = c2, c2 -= 1, f2 = "right";
                  }
                  a && s < 11 && (o3 = function(e6, t5) {
                    if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !function(e7) {
                      if (null != De) return De;
                      var t6 = B(e7, O("span", "x")), n6 = t6.getBoundingClientRect(), r6 = _(t6, 0, 1).getBoundingClientRect();
                      return De = Math.abs(n6.left - r6.left) > 1;
                    }(e6)) return t5;
                    var n5 = screen.logicalXDPI / screen.deviceXDPI, r5 = screen.logicalYDPI / screen.deviceYDPI;
                    return { left: t5.left * n5, right: t5.right * n5, top: t5.top * r5, bottom: t5.bottom * r5 };
                  }(e5.display.measure, o3));
                } else {
                  var p2;
                  c2 > 0 && (f2 = r4 = "right"), o3 = e5.options.lineWrapping && (p2 = l3.getClientRects()).length > 1 ? p2["right" == r4 ? p2.length - 1 : 0] : l3.getBoundingClientRect();
                }
                if (a && s < 9 && !c2 && (!o3 || !o3.left && !o3.right)) {
                  var h2 = l3.parentNode.getClientRects()[0];
                  o3 = h2 ? { left: h2.left, right: h2.left + lr(e5.display), top: h2.top, bottom: h2.bottom } : zn;
                }
                for (var m2 = o3.top - t4.rect.top, g2 = o3.bottom - t4.rect.top, v2 = (m2 + g2) / 2, A2 = t4.view.measure.heights, y2 = 0; y2 < A2.length - 1 && !(v2 < A2[y2]); y2++) ;
                var b2 = y2 ? A2[y2 - 1] : 0, C2 = A2[y2], x2 = { left: ("right" == f2 ? o3.right : o3.left) - t4.rect.left, right: ("left" == f2 ? o3.left : o3.right) - t4.rect.left, top: b2, bottom: C2 };
                return o3.left || o3.right || (x2.bogus = true), e5.options.singleCursorHeightPerLine || (x2.rtop = m2, x2.rbottom = g2), x2;
              }(e4, t3, n3, r3)).bogus || (t3.cache[l2] = i2)), { left: i2.left, right: i2.right, top: o2 ? i2.rtop : i2.top, bottom: o2 ? i2.rbottom : i2.bottom };
            }
            var Dn, zn = { left: 0, right: 0, top: 0, bottom: 0 };
            function Rn(e4, t3, n3) {
              for (var r3, o2, i2, a2, s2, l2, c2 = 0; c2 < e4.length; c2 += 3) if (s2 = e4[c2], l2 = e4[c2 + 1], t3 < s2 ? (o2 = 0, i2 = 1, a2 = "left") : t3 < l2 ? i2 = 1 + (o2 = t3 - s2) : (c2 == e4.length - 3 || t3 == l2 && e4[c2 + 3] > t3) && (o2 = (i2 = l2 - s2) - 1, t3 >= l2 && (a2 = "right")), null != o2) {
                if (r3 = e4[c2 + 2], s2 == l2 && n3 == (r3.insertLeft ? "left" : "right") && (a2 = n3), "left" == n3 && 0 == o2) for (; c2 && e4[c2 - 2] == e4[c2 - 3] && e4[c2 - 1].insertLeft; ) r3 = e4[2 + (c2 -= 3)], a2 = "left";
                if ("right" == n3 && o2 == l2 - s2) for (; c2 < e4.length - 3 && e4[c2 + 3] == e4[c2 + 4] && !e4[c2 + 5].insertLeft; ) r3 = e4[(c2 += 3) + 2], a2 = "right";
                break;
              }
              return { node: r3, start: o2, end: i2, collapse: a2, coverStart: s2, coverEnd: l2 };
            }
            function Wn(e4, t3) {
              var n3 = zn;
              if ("left" == t3) for (var r3 = 0; r3 < e4.length && (n3 = e4[r3]).left == n3.right; r3++) ;
              else for (var o2 = e4.length - 1; o2 >= 0 && (n3 = e4[o2]).left == n3.right; o2--) ;
              return n3;
            }
            function Hn(e4) {
              if (e4.measure && (e4.measure.cache = {}, e4.measure.heights = null, e4.rest)) for (var t3 = 0; t3 < e4.rest.length; t3++) e4.measure.caches[t3] = {};
            }
            function Un(e4) {
              e4.display.externalMeasure = null, M(e4.display.lineMeasure);
              for (var t3 = 0; t3 < e4.display.view.length; t3++) Hn(e4.display.view[t3]);
            }
            function Vn(e4) {
              Un(e4), e4.display.cachedCharWidth = e4.display.cachedTextHeight = e4.display.cachedPaddingH = null, e4.options.lineWrapping || (e4.display.maxLineChanged = true), e4.display.lineNumChars = null;
            }
            function Gn(e4) {
              return u && v ? -(e4.body.getBoundingClientRect().left - parseInt(getComputedStyle(e4.body).marginLeft)) : e4.defaultView.pageXOffset || (e4.documentElement || e4.body).scrollLeft;
            }
            function $n(e4) {
              return u && v ? -(e4.body.getBoundingClientRect().top - parseInt(getComputedStyle(e4.body).marginTop)) : e4.defaultView.pageYOffset || (e4.documentElement || e4.body).scrollTop;
            }
            function qn(e4) {
              var t3 = Ht(e4).widgets, n3 = 0;
              if (t3) for (var r3 = 0; r3 < t3.length; ++r3) t3[r3].above && (n3 += En(t3[r3]));
              return n3;
            }
            function Kn(e4, t3, n3, r3, o2) {
              if (!o2) {
                var i2 = qn(t3);
                n3.top += i2, n3.bottom += i2;
              }
              if ("line" == r3) return n3;
              r3 || (r3 = "local");
              var a2 = qt(t3);
              if ("local" == r3 ? a2 += Sn(e4.display) : a2 -= e4.display.viewOffset, "page" == r3 || "window" == r3) {
                var s2 = e4.display.lineSpace.getBoundingClientRect();
                a2 += s2.top + ("window" == r3 ? 0 : $n(I(e4)));
                var l2 = s2.left + ("window" == r3 ? 0 : Gn(I(e4)));
                n3.left += l2, n3.right += l2;
              }
              return n3.top += a2, n3.bottom += a2, n3;
            }
            function Zn(e4, t3, n3) {
              if ("div" == n3) return t3;
              var r3 = t3.left, o2 = t3.top;
              if ("page" == n3) r3 -= Gn(I(e4)), o2 -= $n(I(e4));
              else if ("local" == n3 || !n3) {
                var i2 = e4.display.sizer.getBoundingClientRect();
                r3 += i2.left, o2 += i2.top;
              }
              var a2 = e4.display.lineSpace.getBoundingClientRect();
              return { left: r3 - a2.left, top: o2 - a2.top };
            }
            function Yn(e4, t3, n3, r3, o2) {
              return r3 || (r3 = Ye(e4.doc, t3.line)), Kn(e4, r3, Pn(e4, r3, t3.ch, o2), n3);
            }
            function Jn(e4, t3, n3, r3, o2, i2) {
              function a2(t4, a3) {
                var s3 = In(e4, o2, t4, a3 ? "right" : "left", i2);
                return a3 ? s3.left = s3.right : s3.right = s3.left, Kn(e4, r3, s3, n3);
              }
              r3 = r3 || Ye(e4.doc, t3.line), o2 || (o2 = jn(e4, r3));
              var s2 = pe(r3, e4.doc.direction), l2 = t3.ch, c2 = t3.sticky;
              if (l2 >= r3.text.length ? (l2 = r3.text.length, c2 = "before") : l2 <= 0 && (l2 = 0, c2 = "after"), !s2) return a2("before" == c2 ? l2 - 1 : l2, "before" == c2);
              function u2(e5, t4, n4) {
                return a2(n4 ? e5 - 1 : e5, 1 == s2[t4].level != n4);
              }
              var f2 = fe(s2, l2, c2), d2 = ue, p2 = u2(l2, f2, "before" == c2);
              return null != d2 && (p2.other = u2(l2, d2, "before" != c2)), p2;
            }
            function Xn(e4, t3) {
              var n3 = 0;
              t3 = ft(e4.doc, t3), e4.options.lineWrapping || (n3 = lr(e4.display) * t3.ch);
              var r3 = Ye(e4.doc, t3.line), o2 = qt(r3) + Sn(e4.display);
              return { left: n3, right: n3, top: o2, bottom: o2 + r3.height };
            }
            function Qn(e4, t3, n3, r3, o2) {
              var i2 = ot(e4, t3, n3);
              return i2.xRel = o2, r3 && (i2.outside = r3), i2;
            }
            function er(e4, t3, n3) {
              var r3 = e4.doc;
              if ((n3 += e4.display.viewOffset) < 0) return Qn(r3.first, 0, null, -1, -1);
              var o2 = tt(r3, n3), i2 = r3.first + r3.size - 1;
              if (o2 > i2) return Qn(r3.first + r3.size - 1, Ye(r3, i2).text.length, null, 1, 1);
              t3 < 0 && (t3 = 0);
              for (var a2 = Ye(r3, o2); ; ) {
                var s2 = or(e4, a2, o2, t3, n3), l2 = Rt(a2, s2.ch + (s2.xRel > 0 || s2.outside > 0 ? 1 : 0));
                if (!l2) return s2;
                var c2 = l2.find(1);
                if (c2.line == o2) return c2;
                a2 = Ye(r3, o2 = c2.line);
              }
            }
            function tr(e4, t3, n3, r3) {
              r3 -= qn(t3);
              var o2 = t3.text.length, i2 = ce(function(t4) {
                return In(e4, n3, t4 - 1).bottom <= r3;
              }, o2, 0);
              return { begin: i2, end: o2 = ce(function(t4) {
                return In(e4, n3, t4).top > r3;
              }, i2, o2) };
            }
            function nr(e4, t3, n3, r3) {
              return n3 || (n3 = jn(e4, t3)), tr(e4, t3, n3, Kn(e4, t3, In(e4, n3, r3), "line").top);
            }
            function rr(e4, t3, n3, r3) {
              return !(e4.bottom <= n3) && (e4.top > n3 || (r3 ? e4.left : e4.right) > t3);
            }
            function or(e4, t3, n3, r3, o2) {
              o2 -= qt(t3);
              var i2 = jn(e4, t3), a2 = qn(t3), s2 = 0, l2 = t3.text.length, c2 = true, u2 = pe(t3, e4.doc.direction);
              if (u2) {
                var f2 = (e4.options.lineWrapping ? ar : ir)(e4, t3, n3, i2, u2, r3, o2);
                s2 = (c2 = 1 != f2.level) ? f2.from : f2.to - 1, l2 = c2 ? f2.to : f2.from - 1;
              }
              var d2, p2, h2 = null, m2 = null, g2 = ce(function(t4) {
                var n4 = In(e4, i2, t4);
                return n4.top += a2, n4.bottom += a2, !!rr(n4, r3, o2, false) && (n4.top <= o2 && n4.left <= r3 && (h2 = t4, m2 = n4), true);
              }, s2, l2), v2 = false;
              if (m2) {
                var A2 = r3 - m2.left < m2.right - r3, y2 = A2 == c2;
                g2 = h2 + (y2 ? 0 : 1), p2 = y2 ? "after" : "before", d2 = A2 ? m2.left : m2.right;
              } else {
                c2 || g2 != l2 && g2 != s2 || g2++, p2 = 0 == g2 ? "after" : g2 == t3.text.length ? "before" : In(e4, i2, g2 - (c2 ? 1 : 0)).bottom + a2 <= o2 == c2 ? "after" : "before";
                var b2 = Jn(e4, ot(n3, g2, p2), "line", t3, i2);
                d2 = b2.left, v2 = o2 < b2.top ? -1 : o2 >= b2.bottom ? 1 : 0;
              }
              return Qn(n3, g2 = le(t3.text, g2, 1), p2, v2, r3 - d2);
            }
            function ir(e4, t3, n3, r3, o2, i2, a2) {
              var s2 = ce(function(s3) {
                var l3 = o2[s3], c3 = 1 != l3.level;
                return rr(Jn(e4, ot(n3, c3 ? l3.to : l3.from, c3 ? "before" : "after"), "line", t3, r3), i2, a2, true);
              }, 0, o2.length - 1), l2 = o2[s2];
              if (s2 > 0) {
                var c2 = 1 != l2.level, u2 = Jn(e4, ot(n3, c2 ? l2.from : l2.to, c2 ? "after" : "before"), "line", t3, r3);
                rr(u2, i2, a2, true) && u2.top > a2 && (l2 = o2[s2 - 1]);
              }
              return l2;
            }
            function ar(e4, t3, n3, r3, o2, i2, a2) {
              var s2 = tr(e4, t3, r3, a2), l2 = s2.begin, c2 = s2.end;
              /\s/.test(t3.text.charAt(c2 - 1)) && c2--;
              for (var u2 = null, f2 = null, d2 = 0; d2 < o2.length; d2++) {
                var p2 = o2[d2];
                if (!(p2.from >= c2 || p2.to <= l2)) {
                  var h2 = In(e4, r3, 1 != p2.level ? Math.min(c2, p2.to) - 1 : Math.max(l2, p2.from)).right, m2 = h2 < i2 ? i2 - h2 + 1e9 : h2 - i2;
                  (!u2 || f2 > m2) && (u2 = p2, f2 = m2);
                }
              }
              return u2 || (u2 = o2[o2.length - 1]), u2.from < l2 && (u2 = { from: l2, to: u2.to, level: u2.level }), u2.to > c2 && (u2 = { from: u2.from, to: c2, level: u2.level }), u2;
            }
            function sr(e4) {
              if (null != e4.cachedTextHeight) return e4.cachedTextHeight;
              if (null == Dn) {
                Dn = O("pre", null, "CodeMirror-line-like");
                for (var t3 = 0; t3 < 49; ++t3) Dn.appendChild(document.createTextNode("x")), Dn.appendChild(O("br"));
                Dn.appendChild(document.createTextNode("x"));
              }
              B(e4.measure, Dn);
              var n3 = Dn.offsetHeight / 50;
              return n3 > 3 && (e4.cachedTextHeight = n3), M(e4.measure), n3 || 1;
            }
            function lr(e4) {
              if (null != e4.cachedCharWidth) return e4.cachedCharWidth;
              var t3 = O("span", "xxxxxxxxxx"), n3 = O("pre", [t3], "CodeMirror-line-like");
              B(e4.measure, n3);
              var r3 = t3.getBoundingClientRect(), o2 = (r3.right - r3.left) / 10;
              return o2 > 2 && (e4.cachedCharWidth = o2), o2 || 10;
            }
            function cr(e4) {
              for (var t3 = e4.display, n3 = {}, r3 = {}, o2 = t3.gutters.clientLeft, i2 = t3.gutters.firstChild, a2 = 0; i2; i2 = i2.nextSibling, ++a2) {
                var s2 = e4.display.gutterSpecs[a2].className;
                n3[s2] = i2.offsetLeft + i2.clientLeft + o2, r3[s2] = i2.clientWidth;
              }
              return { fixedPos: ur(t3), gutterTotalWidth: t3.gutters.offsetWidth, gutterLeft: n3, gutterWidth: r3, wrapperWidth: t3.wrapper.clientWidth };
            }
            function ur(e4) {
              return e4.scroller.getBoundingClientRect().left - e4.sizer.getBoundingClientRect().left;
            }
            function fr(e4) {
              var t3 = sr(e4.display), n3 = e4.options.lineWrapping, r3 = n3 && Math.max(5, e4.display.scroller.clientWidth / lr(e4.display) - 3);
              return function(o2) {
                if (Gt(e4.doc, o2)) return 0;
                var i2 = 0;
                if (o2.widgets) for (var a2 = 0; a2 < o2.widgets.length; a2++) o2.widgets[a2].height && (i2 += o2.widgets[a2].height);
                return n3 ? i2 + (Math.ceil(o2.text.length / r3) || 1) * t3 : i2 + t3;
              };
            }
            function dr(e4) {
              var t3 = e4.doc, n3 = fr(e4);
              t3.iter(function(e5) {
                var t4 = n3(e5);
                t4 != e5.height && Qe(e5, t4);
              });
            }
            function pr(e4, t3, n3, r3) {
              var o2 = e4.display;
              if (!n3 && "true" == Se(t3).getAttribute("cm-not-content")) return null;
              var i2, a2, s2 = o2.lineSpace.getBoundingClientRect();
              try {
                i2 = t3.clientX - s2.left, a2 = t3.clientY - s2.top;
              } catch (e5) {
                return null;
              }
              var l2, c2 = er(e4, i2, a2);
              if (r3 && c2.xRel > 0 && (l2 = Ye(e4.doc, c2.line).text).length == c2.ch) {
                var u2 = W(l2, l2.length, e4.options.tabSize) - l2.length;
                c2 = ot(c2.line, Math.max(0, Math.round((i2 - Bn(e4.display).left) / lr(e4.display)) - u2));
              }
              return c2;
            }
            function hr(e4, t3) {
              if (t3 >= e4.display.viewTo) return null;
              if ((t3 -= e4.display.viewFrom) < 0) return null;
              for (var n3 = e4.display.view, r3 = 0; r3 < n3.length; r3++) if ((t3 -= n3[r3].size) < 0) return r3;
            }
            function mr(e4, t3, n3, r3) {
              null == t3 && (t3 = e4.doc.first), null == n3 && (n3 = e4.doc.first + e4.doc.size), r3 || (r3 = 0);
              var o2 = e4.display;
              if (r3 && n3 < o2.viewTo && (null == o2.updateLineNumbers || o2.updateLineNumbers > t3) && (o2.updateLineNumbers = t3), e4.curOp.viewChanged = true, t3 >= o2.viewTo) _t && Ut(e4.doc, t3) < o2.viewTo && vr(e4);
              else if (n3 <= o2.viewFrom) _t && Vt(e4.doc, n3 + r3) > o2.viewFrom ? vr(e4) : (o2.viewFrom += r3, o2.viewTo += r3);
              else if (t3 <= o2.viewFrom && n3 >= o2.viewTo) vr(e4);
              else if (t3 <= o2.viewFrom) {
                var i2 = Ar(e4, n3, n3 + r3, 1);
                i2 ? (o2.view = o2.view.slice(i2.index), o2.viewFrom = i2.lineN, o2.viewTo += r3) : vr(e4);
              } else if (n3 >= o2.viewTo) {
                var a2 = Ar(e4, t3, t3, -1);
                a2 ? (o2.view = o2.view.slice(0, a2.index), o2.viewTo = a2.lineN) : vr(e4);
              } else {
                var s2 = Ar(e4, t3, t3, -1), l2 = Ar(e4, n3, n3 + r3, 1);
                s2 && l2 ? (o2.view = o2.view.slice(0, s2.index).concat(cn(e4, s2.lineN, l2.lineN)).concat(o2.view.slice(l2.index)), o2.viewTo += r3) : vr(e4);
              }
              var c2 = o2.externalMeasured;
              c2 && (n3 < c2.lineN ? c2.lineN += r3 : t3 < c2.lineN + c2.size && (o2.externalMeasured = null));
            }
            function gr(e4, t3, n3) {
              e4.curOp.viewChanged = true;
              var r3 = e4.display, o2 = e4.display.externalMeasured;
              if (o2 && t3 >= o2.lineN && t3 < o2.lineN + o2.size && (r3.externalMeasured = null), !(t3 < r3.viewFrom || t3 >= r3.viewTo)) {
                var i2 = r3.view[hr(e4, t3)];
                if (null != i2.node) {
                  var a2 = i2.changes || (i2.changes = []);
                  -1 == U(a2, n3) && a2.push(n3);
                }
              }
            }
            function vr(e4) {
              e4.display.viewFrom = e4.display.viewTo = e4.doc.first, e4.display.view = [], e4.display.viewOffset = 0;
            }
            function Ar(e4, t3, n3, r3) {
              var o2, i2 = hr(e4, t3), a2 = e4.display.view;
              if (!_t || n3 == e4.doc.first + e4.doc.size) return { index: i2, lineN: n3 };
              for (var s2 = e4.display.viewFrom, l2 = 0; l2 < i2; l2++) s2 += a2[l2].size;
              if (s2 != t3) {
                if (r3 > 0) {
                  if (i2 == a2.length - 1) return null;
                  o2 = s2 + a2[i2].size - t3, i2++;
                } else o2 = s2 - t3;
                t3 += o2, n3 += o2;
              }
              for (; Ut(e4.doc, n3) != n3; ) {
                if (i2 == (r3 < 0 ? 0 : a2.length - 1)) return null;
                n3 += r3 * a2[i2 - (r3 < 0 ? 1 : 0)].size, i2 += r3;
              }
              return { index: i2, lineN: n3 };
            }
            function yr(e4) {
              for (var t3 = e4.display.view, n3 = 0, r3 = 0; r3 < t3.length; r3++) {
                var o2 = t3[r3];
                o2.hidden || o2.node && !o2.changes || ++n3;
              }
              return n3;
            }
            function br(e4) {
              e4.display.input.showSelection(e4.display.input.prepareSelection());
            }
            function Cr(e4, t3) {
              void 0 === t3 && (t3 = true);
              var n3 = e4.doc, r3 = {}, o2 = r3.cursors = document.createDocumentFragment(), i2 = r3.selection = document.createDocumentFragment(), a2 = e4.options.$customCursor;
              a2 && (t3 = true);
              for (var s2 = 0; s2 < n3.sel.ranges.length; s2++) if (t3 || s2 != n3.sel.primIndex) {
                var l2 = n3.sel.ranges[s2];
                if (!(l2.from().line >= e4.display.viewTo || l2.to().line < e4.display.viewFrom)) {
                  var c2 = l2.empty();
                  if (a2) {
                    var u2 = a2(e4, l2);
                    u2 && xr(e4, u2, o2);
                  } else (c2 || e4.options.showCursorWhenSelecting) && xr(e4, l2.head, o2);
                  c2 || kr(e4, l2, i2);
                }
              }
              return r3;
            }
            function xr(e4, t3, n3) {
              var r3 = Jn(e4, t3, "div", null, null, !e4.options.singleCursorHeightPerLine), o2 = n3.appendChild(O("div", " ", "CodeMirror-cursor"));
              if (o2.style.left = r3.left + "px", o2.style.top = r3.top + "px", o2.style.height = Math.max(0, r3.bottom - r3.top) * e4.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e4.getWrapperElement().className)) {
                var i2 = Yn(e4, t3, "div", null, null), a2 = i2.right - i2.left;
                o2.style.width = (a2 > 0 ? a2 : e4.defaultCharWidth()) + "px";
              }
              if (r3.other) {
                var s2 = n3.appendChild(O("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
                s2.style.display = "", s2.style.left = r3.other.left + "px", s2.style.top = r3.other.top + "px", s2.style.height = 0.85 * (r3.other.bottom - r3.other.top) + "px";
              }
            }
            function wr(e4, t3) {
              return e4.top - t3.top || e4.left - t3.left;
            }
            function kr(e4, t3, n3) {
              var r3 = e4.display, o2 = e4.doc, i2 = document.createDocumentFragment(), a2 = Bn(e4.display), s2 = a2.left, l2 = Math.max(r3.sizerWidth, Tn(e4) - r3.sizer.offsetLeft) - a2.right, c2 = "ltr" == o2.direction;
              function u2(e5, t4, n4, r4) {
                t4 < 0 && (t4 = 0), t4 = Math.round(t4), r4 = Math.round(r4), i2.appendChild(O("div", null, "CodeMirror-selected", "position: absolute; left: " + e5 + "px;\n                             top: " + t4 + "px; width: " + (null == n4 ? l2 - e5 : n4) + "px;\n                             height: " + (r4 - t4) + "px"));
              }
              function f2(t4, n4, r4) {
                var i3, a3, f3 = Ye(o2, t4), d3 = f3.text.length;
                function p3(n5, r5) {
                  return Yn(e4, ot(t4, n5), "div", f3, r5);
                }
                function h3(t5, n5, r5) {
                  var o3 = nr(e4, f3, null, t5), i4 = "ltr" == n5 == ("after" == r5) ? "left" : "right";
                  return p3("after" == r5 ? o3.begin : o3.end - (/\s/.test(f3.text.charAt(o3.end - 1)) ? 2 : 1), i4)[i4];
                }
                var m3 = pe(f3, o2.direction);
                return function(e5, t5, n5, r5) {
                  if (!e5) return r5(t5, n5, "ltr", 0);
                  for (var o3 = false, i4 = 0; i4 < e5.length; ++i4) {
                    var a4 = e5[i4];
                    (a4.from < n5 && a4.to > t5 || t5 == n5 && a4.to == t5) && (r5(Math.max(a4.from, t5), Math.min(a4.to, n5), 1 == a4.level ? "rtl" : "ltr", i4), o3 = true);
                  }
                  o3 || r5(t5, n5, "ltr");
                }(m3, n4 || 0, null == r4 ? d3 : r4, function(e5, t5, o3, f4) {
                  var g3 = "ltr" == o3, v3 = p3(e5, g3 ? "left" : "right"), A3 = p3(t5 - 1, g3 ? "right" : "left"), y2 = null == n4 && 0 == e5, b2 = null == r4 && t5 == d3, C2 = 0 == f4, x2 = !m3 || f4 == m3.length - 1;
                  if (A3.top - v3.top <= 3) {
                    var w2 = (c2 ? b2 : y2) && x2, k2 = (c2 ? y2 : b2) && C2 ? s2 : (g3 ? v3 : A3).left, E2 = w2 ? l2 : (g3 ? A3 : v3).right;
                    u2(k2, v3.top, E2 - k2, v3.bottom);
                  } else {
                    var _2, S2, M2, B2;
                    g3 ? (_2 = c2 && y2 && C2 ? s2 : v3.left, S2 = c2 ? l2 : h3(e5, o3, "before"), M2 = c2 ? s2 : h3(t5, o3, "after"), B2 = c2 && b2 && x2 ? l2 : A3.right) : (_2 = c2 ? h3(e5, o3, "before") : s2, S2 = !c2 && y2 && C2 ? l2 : v3.right, M2 = !c2 && b2 && x2 ? s2 : A3.left, B2 = c2 ? h3(t5, o3, "after") : l2), u2(_2, v3.top, S2 - _2, v3.bottom), v3.bottom < A3.top && u2(s2, v3.bottom, null, A3.top), u2(M2, A3.top, B2 - M2, A3.bottom);
                  }
                  (!i3 || wr(v3, i3) < 0) && (i3 = v3), wr(A3, i3) < 0 && (i3 = A3), (!a3 || wr(v3, a3) < 0) && (a3 = v3), wr(A3, a3) < 0 && (a3 = A3);
                }), { start: i3, end: a3 };
              }
              var d2 = t3.from(), p2 = t3.to();
              if (d2.line == p2.line) f2(d2.line, d2.ch, p2.ch);
              else {
                var h2 = Ye(o2, d2.line), m2 = Ye(o2, p2.line), g2 = Ht(h2) == Ht(m2), v2 = f2(d2.line, d2.ch, g2 ? h2.text.length + 1 : null).end, A2 = f2(p2.line, g2 ? 0 : null, p2.ch).start;
                g2 && (v2.top < A2.top - 2 ? (u2(v2.right, v2.top, null, v2.bottom), u2(s2, A2.top, A2.left, A2.bottom)) : u2(v2.right, v2.top, A2.left - v2.right, v2.bottom)), v2.bottom < A2.top && u2(s2, v2.bottom, null, A2.top);
              }
              n3.appendChild(i2);
            }
            function Er(e4) {
              if (e4.state.focused) {
                var t3 = e4.display;
                clearInterval(t3.blinker);
                var n3 = true;
                t3.cursorDiv.style.visibility = "", e4.options.cursorBlinkRate > 0 ? t3.blinker = setInterval(function() {
                  e4.hasFocus() || Br(e4), t3.cursorDiv.style.visibility = (n3 = !n3) ? "" : "hidden";
                }, e4.options.cursorBlinkRate) : e4.options.cursorBlinkRate < 0 && (t3.cursorDiv.style.visibility = "hidden");
              }
            }
            function _r(e4) {
              e4.hasFocus() || (e4.display.input.focus(), e4.state.focused || Mr(e4));
            }
            function Sr(e4) {
              e4.state.delayingBlurEvent = true, setTimeout(function() {
                e4.state.delayingBlurEvent && (e4.state.delayingBlurEvent = false, e4.state.focused && Br(e4));
              }, 100);
            }
            function Mr(e4, t3) {
              e4.state.delayingBlurEvent && !e4.state.draggingText && (e4.state.delayingBlurEvent = false), "nocursor" != e4.options.readOnly && (e4.state.focused || (Ae(e4, "focus", e4, t3), e4.state.focused = true, P(e4.display.wrapper, "CodeMirror-focused"), e4.curOp || e4.display.selForContextMenu == e4.doc.sel || (e4.display.input.reset(), l && setTimeout(function() {
                return e4.display.input.reset(true);
              }, 20)), e4.display.input.receivedFocus()), Er(e4));
            }
            function Br(e4, t3) {
              e4.state.delayingBlurEvent || (e4.state.focused && (Ae(e4, "blur", e4, t3), e4.state.focused = false, S(e4.display.wrapper, "CodeMirror-focused")), clearInterval(e4.display.blinker), setTimeout(function() {
                e4.state.focused || (e4.display.shift = false);
              }, 150));
            }
            function Or(e4) {
              for (var t3 = e4.display, n3 = t3.lineDiv.offsetTop, r3 = Math.max(0, t3.scroller.getBoundingClientRect().top), o2 = t3.lineDiv.getBoundingClientRect().top, i2 = 0, l2 = 0; l2 < t3.view.length; l2++) {
                var c2 = t3.view[l2], u2 = e4.options.lineWrapping, f2 = void 0, d2 = 0;
                if (!c2.hidden) {
                  if (o2 += c2.line.height, a && s < 8) {
                    var p2 = c2.node.offsetTop + c2.node.offsetHeight;
                    f2 = p2 - n3, n3 = p2;
                  } else {
                    var h2 = c2.node.getBoundingClientRect();
                    f2 = h2.bottom - h2.top, !u2 && c2.text.firstChild && (d2 = c2.text.firstChild.getBoundingClientRect().right - h2.left - 1);
                  }
                  var m2 = c2.line.height - f2;
                  if ((m2 > 5e-3 || m2 < -5e-3) && (o2 < r3 && (i2 -= m2), Qe(c2.line, f2), Tr(c2.line), c2.rest)) for (var g2 = 0; g2 < c2.rest.length; g2++) Tr(c2.rest[g2]);
                  if (d2 > e4.display.sizerWidth) {
                    var v2 = Math.ceil(d2 / lr(e4.display));
                    v2 > e4.display.maxLineLength && (e4.display.maxLineLength = v2, e4.display.maxLine = c2.line, e4.display.maxLineChanged = true);
                  }
                }
              }
              Math.abs(i2) > 2 && (t3.scroller.scrollTop += i2);
            }
            function Tr(e4) {
              if (e4.widgets) for (var t3 = 0; t3 < e4.widgets.length; ++t3) {
                var n3 = e4.widgets[t3], r3 = n3.node.parentNode;
                r3 && (n3.height = r3.offsetHeight);
              }
            }
            function Lr(e4, t3, n3) {
              var r3 = n3 && null != n3.top ? Math.max(0, n3.top) : e4.scroller.scrollTop;
              r3 = Math.floor(r3 - Sn(e4));
              var o2 = n3 && null != n3.bottom ? n3.bottom : r3 + e4.wrapper.clientHeight, i2 = tt(t3, r3), a2 = tt(t3, o2);
              if (n3 && n3.ensure) {
                var s2 = n3.ensure.from.line, l2 = n3.ensure.to.line;
                s2 < i2 ? (i2 = s2, a2 = tt(t3, qt(Ye(t3, s2)) + e4.wrapper.clientHeight)) : Math.min(l2, t3.lastLine()) >= a2 && (i2 = tt(t3, qt(Ye(t3, l2)) - e4.wrapper.clientHeight), a2 = l2);
              }
              return { from: i2, to: Math.max(a2, i2 + 1) };
            }
            function Fr(e4, t3) {
              var n3 = e4.display, r3 = sr(e4.display);
              t3.top < 0 && (t3.top = 0);
              var o2 = e4.curOp && null != e4.curOp.scrollTop ? e4.curOp.scrollTop : n3.scroller.scrollTop, i2 = Ln(e4), a2 = {};
              t3.bottom - t3.top > i2 && (t3.bottom = t3.top + i2);
              var s2 = e4.doc.height + Mn(n3), l2 = t3.top < r3, c2 = t3.bottom > s2 - r3;
              if (t3.top < o2) a2.scrollTop = l2 ? 0 : t3.top;
              else if (t3.bottom > o2 + i2) {
                var u2 = Math.min(t3.top, (c2 ? s2 : t3.bottom) - i2);
                u2 != o2 && (a2.scrollTop = u2);
              }
              var f2 = e4.options.fixedGutter ? 0 : n3.gutters.offsetWidth, d2 = e4.curOp && null != e4.curOp.scrollLeft ? e4.curOp.scrollLeft : n3.scroller.scrollLeft - f2, p2 = Tn(e4) - n3.gutters.offsetWidth, h2 = t3.right - t3.left > p2;
              return h2 && (t3.right = t3.left + p2), t3.left < 10 ? a2.scrollLeft = 0 : t3.left < d2 ? a2.scrollLeft = Math.max(0, t3.left + f2 - (h2 ? 0 : 10)) : t3.right > p2 + d2 - 3 && (a2.scrollLeft = t3.right + (h2 ? 0 : 10) - p2), a2;
            }
            function Pr(e4, t3) {
              null != t3 && (Ir(e4), e4.curOp.scrollTop = (null == e4.curOp.scrollTop ? e4.doc.scrollTop : e4.curOp.scrollTop) + t3);
            }
            function Nr(e4) {
              Ir(e4);
              var t3 = e4.getCursor();
              e4.curOp.scrollToPos = { from: t3, to: t3, margin: e4.options.cursorScrollMargin };
            }
            function jr(e4, t3, n3) {
              null == t3 && null == n3 || Ir(e4), null != t3 && (e4.curOp.scrollLeft = t3), null != n3 && (e4.curOp.scrollTop = n3);
            }
            function Ir(e4) {
              var t3 = e4.curOp.scrollToPos;
              t3 && (e4.curOp.scrollToPos = null, Dr(e4, Xn(e4, t3.from), Xn(e4, t3.to), t3.margin));
            }
            function Dr(e4, t3, n3, r3) {
              var o2 = Fr(e4, { left: Math.min(t3.left, n3.left), top: Math.min(t3.top, n3.top) - r3, right: Math.max(t3.right, n3.right), bottom: Math.max(t3.bottom, n3.bottom) + r3 });
              jr(e4, o2.scrollLeft, o2.scrollTop);
            }
            function zr(e4, t3) {
              Math.abs(e4.doc.scrollTop - t3) < 2 || (n2 || ho(e4, { top: t3 }), Rr(e4, t3, true), n2 && ho(e4), so(e4, 100));
            }
            function Rr(e4, t3, n3) {
              t3 = Math.max(0, Math.min(e4.display.scroller.scrollHeight - e4.display.scroller.clientHeight, t3)), (e4.display.scroller.scrollTop != t3 || n3) && (e4.doc.scrollTop = t3, e4.display.scrollbars.setScrollTop(t3), e4.display.scroller.scrollTop != t3 && (e4.display.scroller.scrollTop = t3));
            }
            function Wr(e4, t3, n3, r3) {
              t3 = Math.max(0, Math.min(t3, e4.display.scroller.scrollWidth - e4.display.scroller.clientWidth)), (n3 ? t3 == e4.doc.scrollLeft : Math.abs(e4.doc.scrollLeft - t3) < 2) && !r3 || (e4.doc.scrollLeft = t3, vo(e4), e4.display.scroller.scrollLeft != t3 && (e4.display.scroller.scrollLeft = t3), e4.display.scrollbars.setScrollLeft(t3));
            }
            function Hr(e4) {
              var t3 = e4.display, n3 = t3.gutters.offsetWidth, r3 = Math.round(e4.doc.height + Mn(e4.display));
              return { clientHeight: t3.scroller.clientHeight, viewHeight: t3.wrapper.clientHeight, scrollWidth: t3.scroller.scrollWidth, clientWidth: t3.scroller.clientWidth, viewWidth: t3.wrapper.clientWidth, barLeft: e4.options.fixedGutter ? n3 : 0, docHeight: r3, scrollHeight: r3 + On(e4) + t3.barHeight, nativeBarWidth: t3.nativeBarWidth, gutterWidth: n3 };
            }
            var Ur = function(e4, t3, n3) {
              this.cm = n3;
              var r3 = this.vert = O("div", [O("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), o2 = this.horiz = O("div", [O("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
              r3.tabIndex = o2.tabIndex = -1, e4(r3), e4(o2), me(r3, "scroll", function() {
                r3.clientHeight && t3(r3.scrollTop, "vertical");
              }), me(o2, "scroll", function() {
                o2.clientWidth && t3(o2.scrollLeft, "horizontal");
              }), this.checkedZeroWidth = false, a && s < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
            };
            Ur.prototype.update = function(e4) {
              var t3 = e4.scrollWidth > e4.clientWidth + 1, n3 = e4.scrollHeight > e4.clientHeight + 1, r3 = e4.nativeBarWidth;
              if (n3) {
                this.vert.style.display = "block", this.vert.style.bottom = t3 ? r3 + "px" : "0";
                var o2 = e4.viewHeight - (t3 ? r3 : 0);
                this.vert.firstChild.style.height = Math.max(0, e4.scrollHeight - e4.clientHeight + o2) + "px";
              } else this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
              if (t3) {
                this.horiz.style.display = "block", this.horiz.style.right = n3 ? r3 + "px" : "0", this.horiz.style.left = e4.barLeft + "px";
                var i2 = e4.viewWidth - e4.barLeft - (n3 ? r3 : 0);
                this.horiz.firstChild.style.width = Math.max(0, e4.scrollWidth - e4.clientWidth + i2) + "px";
              } else this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
              return !this.checkedZeroWidth && e4.clientHeight > 0 && (0 == r3 && this.zeroWidthHack(), this.checkedZeroWidth = true), { right: n3 ? r3 : 0, bottom: t3 ? r3 : 0 };
            }, Ur.prototype.setScrollLeft = function(e4) {
              this.horiz.scrollLeft != e4 && (this.horiz.scrollLeft = e4), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
            }, Ur.prototype.setScrollTop = function(e4) {
              this.vert.scrollTop != e4 && (this.vert.scrollTop = e4), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
            }, Ur.prototype.zeroWidthHack = function() {
              var e4 = y && !h ? "12px" : "18px";
              this.horiz.style.height = this.vert.style.width = e4, this.horiz.style.visibility = this.vert.style.visibility = "hidden", this.disableHoriz = new H(), this.disableVert = new H();
            }, Ur.prototype.enableZeroWidthBar = function(e4, t3, n3) {
              e4.style.visibility = "", t3.set(1e3, function r3() {
                var o2 = e4.getBoundingClientRect();
                ("vert" == n3 ? document.elementFromPoint(o2.right - 1, (o2.top + o2.bottom) / 2) : document.elementFromPoint((o2.right + o2.left) / 2, o2.bottom - 1)) != e4 ? e4.style.visibility = "hidden" : t3.set(1e3, r3);
              });
            }, Ur.prototype.clear = function() {
              var e4 = this.horiz.parentNode;
              e4.removeChild(this.horiz), e4.removeChild(this.vert);
            };
            var Vr = function() {
            };
            function Gr(e4, t3) {
              t3 || (t3 = Hr(e4));
              var n3 = e4.display.barWidth, r3 = e4.display.barHeight;
              $r(e4, t3);
              for (var o2 = 0; o2 < 4 && n3 != e4.display.barWidth || r3 != e4.display.barHeight; o2++) n3 != e4.display.barWidth && e4.options.lineWrapping && Or(e4), $r(e4, Hr(e4)), n3 = e4.display.barWidth, r3 = e4.display.barHeight;
            }
            function $r(e4, t3) {
              var n3 = e4.display, r3 = n3.scrollbars.update(t3);
              n3.sizer.style.paddingRight = (n3.barWidth = r3.right) + "px", n3.sizer.style.paddingBottom = (n3.barHeight = r3.bottom) + "px", n3.heightForcer.style.borderBottom = r3.bottom + "px solid transparent", r3.right && r3.bottom ? (n3.scrollbarFiller.style.display = "block", n3.scrollbarFiller.style.height = r3.bottom + "px", n3.scrollbarFiller.style.width = r3.right + "px") : n3.scrollbarFiller.style.display = "", r3.bottom && e4.options.coverGutterNextToScrollbar && e4.options.fixedGutter ? (n3.gutterFiller.style.display = "block", n3.gutterFiller.style.height = r3.bottom + "px", n3.gutterFiller.style.width = t3.gutterWidth + "px") : n3.gutterFiller.style.display = "";
            }
            Vr.prototype.update = function() {
              return { bottom: 0, right: 0 };
            }, Vr.prototype.setScrollLeft = function() {
            }, Vr.prototype.setScrollTop = function() {
            }, Vr.prototype.clear = function() {
            };
            var qr = { native: Ur, null: Vr };
            function Kr(e4) {
              e4.display.scrollbars && (e4.display.scrollbars.clear(), e4.display.scrollbars.addClass && S(e4.display.wrapper, e4.display.scrollbars.addClass)), e4.display.scrollbars = new qr[e4.options.scrollbarStyle](function(t3) {
                e4.display.wrapper.insertBefore(t3, e4.display.scrollbarFiller), me(t3, "mousedown", function() {
                  e4.state.focused && setTimeout(function() {
                    return e4.display.input.focus();
                  }, 0);
                }), t3.setAttribute("cm-not-content", "true");
              }, function(t3, n3) {
                "horizontal" == n3 ? Wr(e4, t3) : zr(e4, t3);
              }, e4), e4.display.scrollbars.addClass && P(e4.display.wrapper, e4.display.scrollbars.addClass);
            }
            var Zr = 0;
            function Yr(e4) {
              var t3;
              e4.curOp = { cm: e4, viewChanged: false, startHeight: e4.doc.height, forceUpdate: false, updateInput: 0, typing: false, changeObjs: null, cursorActivityHandlers: null, cursorActivityCalled: 0, selectionChanged: false, updateMaxLine: false, scrollLeft: null, scrollTop: null, scrollToPos: null, focus: false, id: ++Zr, markArrays: null }, t3 = e4.curOp, un ? un.ops.push(t3) : t3.ownsGroup = un = { ops: [t3], delayedCallbacks: [] };
            }
            function Jr(e4) {
              var t3 = e4.curOp;
              t3 && function(e5, t4) {
                var n3 = e5.ownsGroup;
                if (n3) try {
                  !function(e6) {
                    var t5 = e6.delayedCallbacks, n4 = 0;
                    do {
                      for (; n4 < t5.length; n4++) t5[n4].call(null);
                      for (var r3 = 0; r3 < e6.ops.length; r3++) {
                        var o2 = e6.ops[r3];
                        if (o2.cursorActivityHandlers) for (; o2.cursorActivityCalled < o2.cursorActivityHandlers.length; ) o2.cursorActivityHandlers[o2.cursorActivityCalled++].call(null, o2.cm);
                      }
                    } while (n4 < t5.length);
                  }(n3);
                } finally {
                  un = null, t4(n3);
                }
              }(t3, function(e5) {
                for (var t4 = 0; t4 < e5.ops.length; t4++) e5.ops[t4].cm.curOp = null;
                !function(e6) {
                  for (var t5 = e6.ops, n3 = 0; n3 < t5.length; n3++) Xr(t5[n3]);
                  for (var r3 = 0; r3 < t5.length; r3++) Qr(t5[r3]);
                  for (var o2 = 0; o2 < t5.length; o2++) eo(t5[o2]);
                  for (var i2 = 0; i2 < t5.length; i2++) to(t5[i2]);
                  for (var a2 = 0; a2 < t5.length; a2++) no(t5[a2]);
                }(e5);
              });
            }
            function Xr(e4) {
              var t3 = e4.cm, n3 = t3.display;
              (function(e5) {
                var t4 = e5.display;
                !t4.scrollbarsClipped && t4.scroller.offsetWidth && (t4.nativeBarWidth = t4.scroller.offsetWidth - t4.scroller.clientWidth, t4.heightForcer.style.height = On(e5) + "px", t4.sizer.style.marginBottom = -t4.nativeBarWidth + "px", t4.sizer.style.borderRightWidth = On(e5) + "px", t4.scrollbarsClipped = true);
              })(t3), e4.updateMaxLine && Zt(t3), e4.mustUpdate = e4.viewChanged || e4.forceUpdate || null != e4.scrollTop || e4.scrollToPos && (e4.scrollToPos.from.line < n3.viewFrom || e4.scrollToPos.to.line >= n3.viewTo) || n3.maxLineChanged && t3.options.lineWrapping, e4.update = e4.mustUpdate && new co(t3, e4.mustUpdate && { top: e4.scrollTop, ensure: e4.scrollToPos }, e4.forceUpdate);
            }
            function Qr(e4) {
              e4.updatedDisplay = e4.mustUpdate && fo(e4.cm, e4.update);
            }
            function eo(e4) {
              var t3 = e4.cm, n3 = t3.display;
              e4.updatedDisplay && Or(t3), e4.barMeasure = Hr(t3), n3.maxLineChanged && !t3.options.lineWrapping && (e4.adjustWidthTo = Pn(t3, n3.maxLine, n3.maxLine.text.length).left + 3, t3.display.sizerWidth = e4.adjustWidthTo, e4.barMeasure.scrollWidth = Math.max(n3.scroller.clientWidth, n3.sizer.offsetLeft + e4.adjustWidthTo + On(t3) + t3.display.barWidth), e4.maxScrollLeft = Math.max(0, n3.sizer.offsetLeft + e4.adjustWidthTo - Tn(t3))), (e4.updatedDisplay || e4.selectionChanged) && (e4.preparedSelection = n3.input.prepareSelection());
            }
            function to(e4) {
              var t3 = e4.cm;
              null != e4.adjustWidthTo && (t3.display.sizer.style.minWidth = e4.adjustWidthTo + "px", e4.maxScrollLeft < t3.doc.scrollLeft && Wr(t3, Math.min(t3.display.scroller.scrollLeft, e4.maxScrollLeft), true), t3.display.maxLineChanged = false);
              var n3 = e4.focus && e4.focus == F(I(t3));
              e4.preparedSelection && t3.display.input.showSelection(e4.preparedSelection, n3), (e4.updatedDisplay || e4.startHeight != t3.doc.height) && Gr(t3, e4.barMeasure), e4.updatedDisplay && go(t3, e4.barMeasure), e4.selectionChanged && Er(t3), t3.state.focused && e4.updateInput && t3.display.input.reset(e4.typing), n3 && _r(e4.cm);
            }
            function no(e4) {
              var t3 = e4.cm, n3 = t3.display, r3 = t3.doc;
              e4.updatedDisplay && po(t3, e4.update), null == n3.wheelStartX || null == e4.scrollTop && null == e4.scrollLeft && !e4.scrollToPos || (n3.wheelStartX = n3.wheelStartY = null), null != e4.scrollTop && Rr(t3, e4.scrollTop, e4.forceScroll), null != e4.scrollLeft && Wr(t3, e4.scrollLeft, true, true), e4.scrollToPos && function(e5, t4) {
                if (!ye(e5, "scrollCursorIntoView")) {
                  var n4 = e5.display, r4 = n4.sizer.getBoundingClientRect(), o3 = null, i3 = n4.wrapper.ownerDocument;
                  if (t4.top + r4.top < 0 ? o3 = true : t4.bottom + r4.top > (i3.defaultView.innerHeight || i3.documentElement.clientHeight) && (o3 = false), null != o3 && !m) {
                    var a3 = O("div", "​", null, "position: absolute;\n                         top: " + (t4.top - n4.viewOffset - Sn(e5.display)) + "px;\n                         height: " + (t4.bottom - t4.top + On(e5) + n4.barHeight) + "px;\n                         left: " + t4.left + "px; width: " + Math.max(2, t4.right - t4.left) + "px;");
                    e5.display.lineSpace.appendChild(a3), a3.scrollIntoView(o3), e5.display.lineSpace.removeChild(a3);
                  }
                }
              }(t3, function(e5, t4, n4, r4) {
                var o3;
                null == r4 && (r4 = 0), e5.options.lineWrapping || t4 != n4 || (n4 = "before" == t4.sticky ? ot(t4.line, t4.ch + 1, "before") : t4, t4 = t4.ch ? ot(t4.line, "before" == t4.sticky ? t4.ch - 1 : t4.ch, "after") : t4);
                for (var i3 = 0; i3 < 5; i3++) {
                  var a3 = false, s3 = Jn(e5, t4), l2 = n4 && n4 != t4 ? Jn(e5, n4) : s3, c2 = Fr(e5, o3 = { left: Math.min(s3.left, l2.left), top: Math.min(s3.top, l2.top) - r4, right: Math.max(s3.left, l2.left), bottom: Math.max(s3.bottom, l2.bottom) + r4 }), u2 = e5.doc.scrollTop, f2 = e5.doc.scrollLeft;
                  if (null != c2.scrollTop && (zr(e5, c2.scrollTop), Math.abs(e5.doc.scrollTop - u2) > 1 && (a3 = true)), null != c2.scrollLeft && (Wr(e5, c2.scrollLeft), Math.abs(e5.doc.scrollLeft - f2) > 1 && (a3 = true)), !a3) break;
                }
                return o3;
              }(t3, ft(r3, e4.scrollToPos.from), ft(r3, e4.scrollToPos.to), e4.scrollToPos.margin));
              var o2 = e4.maybeHiddenMarkers, i2 = e4.maybeUnhiddenMarkers;
              if (o2) for (var a2 = 0; a2 < o2.length; ++a2) o2[a2].lines.length || Ae(o2[a2], "hide");
              if (i2) for (var s2 = 0; s2 < i2.length; ++s2) i2[s2].lines.length && Ae(i2[s2], "unhide");
              n3.wrapper.offsetHeight && (r3.scrollTop = t3.display.scroller.scrollTop), e4.changeObjs && Ae(t3, "changes", t3, e4.changeObjs), e4.update && e4.update.finish();
            }
            function ro(e4, t3) {
              if (e4.curOp) return t3();
              Yr(e4);
              try {
                return t3();
              } finally {
                Jr(e4);
              }
            }
            function oo(e4, t3) {
              return function() {
                if (e4.curOp) return t3.apply(e4, arguments);
                Yr(e4);
                try {
                  return t3.apply(e4, arguments);
                } finally {
                  Jr(e4);
                }
              };
            }
            function io(e4) {
              return function() {
                if (this.curOp) return e4.apply(this, arguments);
                Yr(this);
                try {
                  return e4.apply(this, arguments);
                } finally {
                  Jr(this);
                }
              };
            }
            function ao(e4) {
              return function() {
                var t3 = this.cm;
                if (!t3 || t3.curOp) return e4.apply(this, arguments);
                Yr(t3);
                try {
                  return e4.apply(this, arguments);
                } finally {
                  Jr(t3);
                }
              };
            }
            function so(e4, t3) {
              e4.doc.highlightFrontier < e4.display.viewTo && e4.state.highlight.set(t3, z(lo, e4));
            }
            function lo(e4) {
              var t3 = e4.doc;
              if (!(t3.highlightFrontier >= e4.display.viewTo)) {
                var n3 = +/* @__PURE__ */ new Date() + e4.options.workTime, r3 = vt(e4, t3.highlightFrontier), o2 = [];
                t3.iter(r3.line, Math.min(t3.first + t3.size, e4.display.viewTo + 500), function(i2) {
                  if (r3.line >= e4.display.viewFrom) {
                    var a2 = i2.styles, s2 = i2.text.length > e4.options.maxHighlightLength ? $e(t3.mode, r3.state) : null, l2 = mt(e4, i2, r3, true);
                    s2 && (r3.state = s2), i2.styles = l2.styles;
                    var c2 = i2.styleClasses, u2 = l2.classes;
                    u2 ? i2.styleClasses = u2 : c2 && (i2.styleClasses = null);
                    for (var f2 = !a2 || a2.length != i2.styles.length || c2 != u2 && (!c2 || !u2 || c2.bgClass != u2.bgClass || c2.textClass != u2.textClass), d2 = 0; !f2 && d2 < a2.length; ++d2) f2 = a2[d2] != i2.styles[d2];
                    f2 && o2.push(r3.line), i2.stateAfter = r3.save(), r3.nextLine();
                  } else i2.text.length <= e4.options.maxHighlightLength && At(e4, i2.text, r3), i2.stateAfter = r3.line % 5 == 0 ? r3.save() : null, r3.nextLine();
                  if (+/* @__PURE__ */ new Date() > n3) return so(e4, e4.options.workDelay), true;
                }), t3.highlightFrontier = r3.line, t3.modeFrontier = Math.max(t3.modeFrontier, r3.line), o2.length && ro(e4, function() {
                  for (var t4 = 0; t4 < o2.length; t4++) gr(e4, o2[t4], "text");
                });
              }
            }
            var co = function(e4, t3, n3) {
              var r3 = e4.display;
              this.viewport = t3, this.visible = Lr(r3, e4.doc, t3), this.editorIsHidden = !r3.wrapper.offsetWidth, this.wrapperHeight = r3.wrapper.clientHeight, this.wrapperWidth = r3.wrapper.clientWidth, this.oldDisplayWidth = Tn(e4), this.force = n3, this.dims = cr(e4), this.events = [];
            };
            function uo(e4) {
              if (e4.hasFocus()) return null;
              var t3 = F(I(e4));
              if (!t3 || !L(e4.display.lineDiv, t3)) return null;
              var n3 = { activeElt: t3 };
              if (window.getSelection) {
                var r3 = D(e4).getSelection();
                r3.anchorNode && r3.extend && L(e4.display.lineDiv, r3.anchorNode) && (n3.anchorNode = r3.anchorNode, n3.anchorOffset = r3.anchorOffset, n3.focusNode = r3.focusNode, n3.focusOffset = r3.focusOffset);
              }
              return n3;
            }
            function fo(e4, t3) {
              var n3 = e4.display, r3 = e4.doc;
              if (t3.editorIsHidden) return vr(e4), false;
              if (!t3.force && t3.visible.from >= n3.viewFrom && t3.visible.to <= n3.viewTo && (null == n3.updateLineNumbers || n3.updateLineNumbers >= n3.viewTo) && n3.renderedView == n3.view && 0 == yr(e4)) return false;
              Ao(e4) && (vr(e4), t3.dims = cr(e4));
              var o2 = r3.first + r3.size, i2 = Math.max(t3.visible.from - e4.options.viewportMargin, r3.first), a2 = Math.min(o2, t3.visible.to + e4.options.viewportMargin);
              n3.viewFrom < i2 && i2 - n3.viewFrom < 20 && (i2 = Math.max(r3.first, n3.viewFrom)), n3.viewTo > a2 && n3.viewTo - a2 < 20 && (a2 = Math.min(o2, n3.viewTo)), _t && (i2 = Ut(e4.doc, i2), a2 = Vt(e4.doc, a2));
              var s2 = i2 != n3.viewFrom || a2 != n3.viewTo || n3.lastWrapHeight != t3.wrapperHeight || n3.lastWrapWidth != t3.wrapperWidth;
              (function(e5, t4, n4) {
                var r4 = e5.display;
                0 == r4.view.length || t4 >= r4.viewTo || n4 <= r4.viewFrom ? (r4.view = cn(e5, t4, n4), r4.viewFrom = t4) : (r4.viewFrom > t4 ? r4.view = cn(e5, t4, r4.viewFrom).concat(r4.view) : r4.viewFrom < t4 && (r4.view = r4.view.slice(hr(e5, t4))), r4.viewFrom = t4, r4.viewTo < n4 ? r4.view = r4.view.concat(cn(e5, r4.viewTo, n4)) : r4.viewTo > n4 && (r4.view = r4.view.slice(0, hr(e5, n4)))), r4.viewTo = n4;
              })(e4, i2, a2), n3.viewOffset = qt(Ye(e4.doc, n3.viewFrom)), e4.display.mover.style.top = n3.viewOffset + "px";
              var c2 = yr(e4);
              if (!s2 && 0 == c2 && !t3.force && n3.renderedView == n3.view && (null == n3.updateLineNumbers || n3.updateLineNumbers >= n3.viewTo)) return false;
              var u2 = uo(e4);
              return c2 > 4 && (n3.lineDiv.style.display = "none"), function(e5, t4, n4) {
                var r4 = e5.display, o3 = e5.options.lineNumbers, i3 = r4.lineDiv, a3 = i3.firstChild;
                function s3(t5) {
                  var n5 = t5.nextSibling;
                  return l && y && e5.display.currentWheelTarget == t5 ? t5.style.display = "none" : t5.parentNode.removeChild(t5), n5;
                }
                for (var c3 = r4.view, u3 = r4.viewFrom, f2 = 0; f2 < c3.length; f2++) {
                  var d2 = c3[f2];
                  if (d2.hidden) ;
                  else if (d2.node && d2.node.parentNode == i3) {
                    for (; a3 != d2.node; ) a3 = s3(a3);
                    var p2 = o3 && null != t4 && t4 <= u3 && d2.lineNumber;
                    d2.changes && (U(d2.changes, "gutter") > -1 && (p2 = false), hn(e5, d2, u3, n4)), p2 && (M(d2.lineNumber), d2.lineNumber.appendChild(document.createTextNode(rt(e5.options, u3)))), a3 = d2.node.nextSibling;
                  } else {
                    var h2 = Cn(e5, d2, u3, n4);
                    i3.insertBefore(h2, a3);
                  }
                  u3 += d2.size;
                }
                for (; a3; ) a3 = s3(a3);
              }(e4, n3.updateLineNumbers, t3.dims), c2 > 4 && (n3.lineDiv.style.display = ""), n3.renderedView = n3.view, function(e5) {
                if (e5 && e5.activeElt && e5.activeElt != F(e5.activeElt.ownerDocument) && (e5.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e5.activeElt.nodeName) && e5.anchorNode && L(document.body, e5.anchorNode) && L(document.body, e5.focusNode))) {
                  var t4 = e5.activeElt.ownerDocument, n4 = t4.defaultView.getSelection(), r4 = t4.createRange();
                  r4.setEnd(e5.anchorNode, e5.anchorOffset), r4.collapse(false), n4.removeAllRanges(), n4.addRange(r4), n4.extend(e5.focusNode, e5.focusOffset);
                }
              }(u2), M(n3.cursorDiv), M(n3.selectionDiv), n3.gutters.style.height = n3.sizer.style.minHeight = 0, s2 && (n3.lastWrapHeight = t3.wrapperHeight, n3.lastWrapWidth = t3.wrapperWidth, so(e4, 400)), n3.updateLineNumbers = null, true;
            }
            function po(e4, t3) {
              for (var n3 = t3.viewport, r3 = true; ; r3 = false) {
                if (r3 && e4.options.lineWrapping && t3.oldDisplayWidth != Tn(e4)) r3 && (t3.visible = Lr(e4.display, e4.doc, n3));
                else if (n3 && null != n3.top && (n3 = { top: Math.min(e4.doc.height + Mn(e4.display) - Ln(e4), n3.top) }), t3.visible = Lr(e4.display, e4.doc, n3), t3.visible.from >= e4.display.viewFrom && t3.visible.to <= e4.display.viewTo) break;
                if (!fo(e4, t3)) break;
                Or(e4);
                var o2 = Hr(e4);
                br(e4), Gr(e4, o2), go(e4, o2), t3.force = false;
              }
              t3.signal(e4, "update", e4), e4.display.viewFrom == e4.display.reportedViewFrom && e4.display.viewTo == e4.display.reportedViewTo || (t3.signal(e4, "viewportChange", e4, e4.display.viewFrom, e4.display.viewTo), e4.display.reportedViewFrom = e4.display.viewFrom, e4.display.reportedViewTo = e4.display.viewTo);
            }
            function ho(e4, t3) {
              var n3 = new co(e4, t3);
              if (fo(e4, n3)) {
                Or(e4), po(e4, n3);
                var r3 = Hr(e4);
                br(e4), Gr(e4, r3), go(e4, r3), n3.finish();
              }
            }
            function mo(e4) {
              var t3 = e4.gutters.offsetWidth;
              e4.sizer.style.marginLeft = t3 + "px", dn(e4, "gutterChanged", e4);
            }
            function go(e4, t3) {
              e4.display.sizer.style.minHeight = t3.docHeight + "px", e4.display.heightForcer.style.top = t3.docHeight + "px", e4.display.gutters.style.height = t3.docHeight + e4.display.barHeight + On(e4) + "px";
            }
            function vo(e4) {
              var t3 = e4.display, n3 = t3.view;
              if (t3.alignWidgets || t3.gutters.firstChild && e4.options.fixedGutter) {
                for (var r3 = ur(t3) - t3.scroller.scrollLeft + e4.doc.scrollLeft, o2 = t3.gutters.offsetWidth, i2 = r3 + "px", a2 = 0; a2 < n3.length; a2++) if (!n3[a2].hidden) {
                  e4.options.fixedGutter && (n3[a2].gutter && (n3[a2].gutter.style.left = i2), n3[a2].gutterBackground && (n3[a2].gutterBackground.style.left = i2));
                  var s2 = n3[a2].alignable;
                  if (s2) for (var l2 = 0; l2 < s2.length; l2++) s2[l2].style.left = i2;
                }
                e4.options.fixedGutter && (t3.gutters.style.left = r3 + o2 + "px");
              }
            }
            function Ao(e4) {
              if (!e4.options.lineNumbers) return false;
              var t3 = e4.doc, n3 = rt(e4.options, t3.first + t3.size - 1), r3 = e4.display;
              if (n3.length != r3.lineNumChars) {
                var o2 = r3.measure.appendChild(O("div", [O("div", n3)], "CodeMirror-linenumber CodeMirror-gutter-elt")), i2 = o2.firstChild.offsetWidth, a2 = o2.offsetWidth - i2;
                return r3.lineGutter.style.width = "", r3.lineNumInnerWidth = Math.max(i2, r3.lineGutter.offsetWidth - a2) + 1, r3.lineNumWidth = r3.lineNumInnerWidth + a2, r3.lineNumChars = r3.lineNumInnerWidth ? n3.length : -1, r3.lineGutter.style.width = r3.lineNumWidth + "px", mo(e4.display), true;
              }
              return false;
            }
            function yo(e4, t3) {
              for (var n3 = [], r3 = false, o2 = 0; o2 < e4.length; o2++) {
                var i2 = e4[o2], a2 = null;
                if ("string" != typeof i2 && (a2 = i2.style, i2 = i2.className), "CodeMirror-linenumbers" == i2) {
                  if (!t3) continue;
                  r3 = true;
                }
                n3.push({ className: i2, style: a2 });
              }
              return t3 && !r3 && n3.push({ className: "CodeMirror-linenumbers", style: null }), n3;
            }
            function bo(e4) {
              var t3 = e4.gutters, n3 = e4.gutterSpecs;
              M(t3), e4.lineGutter = null;
              for (var r3 = 0; r3 < n3.length; ++r3) {
                var o2 = n3[r3], i2 = o2.className, a2 = o2.style, s2 = t3.appendChild(O("div", null, "CodeMirror-gutter " + i2));
                a2 && (s2.style.cssText = a2), "CodeMirror-linenumbers" == i2 && (e4.lineGutter = s2, s2.style.width = (e4.lineNumWidth || 1) + "px");
              }
              t3.style.display = n3.length ? "" : "none", mo(e4);
            }
            function Co(e4) {
              bo(e4.display), mr(e4), vo(e4);
            }
            function xo(e4, t3, r3, o2) {
              var i2 = this;
              this.input = r3, i2.scrollbarFiller = O("div", null, "CodeMirror-scrollbar-filler"), i2.scrollbarFiller.setAttribute("cm-not-content", "true"), i2.gutterFiller = O("div", null, "CodeMirror-gutter-filler"), i2.gutterFiller.setAttribute("cm-not-content", "true"), i2.lineDiv = T("div", null, "CodeMirror-code"), i2.selectionDiv = O("div", null, null, "position: relative; z-index: 1"), i2.cursorDiv = O("div", null, "CodeMirror-cursors"), i2.measure = O("div", null, "CodeMirror-measure"), i2.lineMeasure = O("div", null, "CodeMirror-measure"), i2.lineSpace = T("div", [i2.measure, i2.lineMeasure, i2.selectionDiv, i2.cursorDiv, i2.lineDiv], null, "position: relative; outline: none");
              var c2 = T("div", [i2.lineSpace], "CodeMirror-lines");
              i2.mover = O("div", [c2], null, "position: relative"), i2.sizer = O("div", [i2.mover], "CodeMirror-sizer"), i2.sizerWidth = null, i2.heightForcer = O("div", null, null, "position: absolute; height: " + V + "px; width: 1px;"), i2.gutters = O("div", null, "CodeMirror-gutters"), i2.lineGutter = null, i2.scroller = O("div", [i2.sizer, i2.heightForcer, i2.gutters], "CodeMirror-scroll"), i2.scroller.setAttribute("tabIndex", "-1"), i2.wrapper = O("div", [i2.scrollbarFiller, i2.gutterFiller, i2.scroller], "CodeMirror"), u && f >= 105 && (i2.wrapper.style.clipPath = "inset(0px)"), i2.wrapper.setAttribute("translate", "no"), a && s < 8 && (i2.gutters.style.zIndex = -1, i2.scroller.style.paddingRight = 0), l || n2 && A || (i2.scroller.draggable = true), e4 && (e4.appendChild ? e4.appendChild(i2.wrapper) : e4(i2.wrapper)), i2.viewFrom = i2.viewTo = t3.first, i2.reportedViewFrom = i2.reportedViewTo = t3.first, i2.view = [], i2.renderedView = null, i2.externalMeasured = null, i2.viewOffset = 0, i2.lastWrapHeight = i2.lastWrapWidth = 0, i2.updateLineNumbers = null, i2.nativeBarWidth = i2.barHeight = i2.barWidth = 0, i2.scrollbarsClipped = false, i2.lineNumWidth = i2.lineNumInnerWidth = i2.lineNumChars = null, i2.alignWidgets = false, i2.cachedCharWidth = i2.cachedTextHeight = i2.cachedPaddingH = null, i2.maxLine = null, i2.maxLineLength = 0, i2.maxLineChanged = false, i2.wheelDX = i2.wheelDY = i2.wheelStartX = i2.wheelStartY = null, i2.shift = false, i2.selForContextMenu = null, i2.activeTouch = null, i2.gutterSpecs = yo(o2.gutters, o2.lineNumbers), bo(i2), r3.init(i2);
            }
            co.prototype.signal = function(e4, t3) {
              Ce(e4, t3) && this.events.push(arguments);
            }, co.prototype.finish = function() {
              for (var e4 = 0; e4 < this.events.length; e4++) Ae.apply(null, this.events[e4]);
            };
            var wo = 0, ko = null;
            function Eo(e4) {
              var t3 = e4.wheelDeltaX, n3 = e4.wheelDeltaY;
              return null == t3 && e4.detail && e4.axis == e4.HORIZONTAL_AXIS && (t3 = e4.detail), null == n3 && e4.detail && e4.axis == e4.VERTICAL_AXIS ? n3 = e4.detail : null == n3 && (n3 = e4.wheelDelta), { x: t3, y: n3 };
            }
            function _o(e4) {
              var t3 = Eo(e4);
              return t3.x *= ko, t3.y *= ko, t3;
            }
            function So(e4, t3) {
              u && 102 == f && (null == e4.display.chromeScrollHack ? e4.display.sizer.style.pointerEvents = "none" : clearTimeout(e4.display.chromeScrollHack), e4.display.chromeScrollHack = setTimeout(function() {
                e4.display.chromeScrollHack = null, e4.display.sizer.style.pointerEvents = "";
              }, 100));
              var r3 = Eo(t3), o2 = r3.x, i2 = r3.y, a2 = ko;
              0 === t3.deltaMode && (o2 = t3.deltaX, i2 = t3.deltaY, a2 = 1);
              var s2 = e4.display, c2 = s2.scroller, p2 = c2.scrollWidth > c2.clientWidth, h2 = c2.scrollHeight > c2.clientHeight;
              if (o2 && p2 || i2 && h2) {
                if (i2 && y && l) {
                  e: for (var m2 = t3.target, g2 = s2.view; m2 != c2; m2 = m2.parentNode) for (var v2 = 0; v2 < g2.length; v2++) if (g2[v2].node == m2) {
                    e4.display.currentWheelTarget = m2;
                    break e;
                  }
                }
                if (o2 && !n2 && !d && null != a2) return i2 && h2 && zr(e4, Math.max(0, c2.scrollTop + i2 * a2)), Wr(e4, Math.max(0, c2.scrollLeft + o2 * a2)), (!i2 || i2 && h2) && we(t3), void (s2.wheelStartX = null);
                if (i2 && null != a2) {
                  var A2 = i2 * a2, b2 = e4.doc.scrollTop, C2 = b2 + s2.wrapper.clientHeight;
                  A2 < 0 ? b2 = Math.max(0, b2 + A2 - 50) : C2 = Math.min(e4.doc.height, C2 + A2 + 50), ho(e4, { top: b2, bottom: C2 });
                }
                wo < 20 && 0 !== t3.deltaMode && (null == s2.wheelStartX ? (s2.wheelStartX = c2.scrollLeft, s2.wheelStartY = c2.scrollTop, s2.wheelDX = o2, s2.wheelDY = i2, setTimeout(function() {
                  if (null != s2.wheelStartX) {
                    var e5 = c2.scrollLeft - s2.wheelStartX, t4 = c2.scrollTop - s2.wheelStartY, n3 = t4 && s2.wheelDY && t4 / s2.wheelDY || e5 && s2.wheelDX && e5 / s2.wheelDX;
                    s2.wheelStartX = s2.wheelStartY = null, n3 && (ko = (ko * wo + n3) / (wo + 1), ++wo);
                  }
                }, 200)) : (s2.wheelDX += o2, s2.wheelDY += i2));
              }
            }
            a ? ko = -0.53 : n2 ? ko = 15 : u ? ko = -0.7 : p && (ko = -1 / 3);
            var Mo = function(e4, t3) {
              this.ranges = e4, this.primIndex = t3;
            };
            Mo.prototype.primary = function() {
              return this.ranges[this.primIndex];
            }, Mo.prototype.equals = function(e4) {
              if (e4 == this) return true;
              if (e4.primIndex != this.primIndex || e4.ranges.length != this.ranges.length) return false;
              for (var t3 = 0; t3 < this.ranges.length; t3++) {
                var n3 = this.ranges[t3], r3 = e4.ranges[t3];
                if (!at(n3.anchor, r3.anchor) || !at(n3.head, r3.head)) return false;
              }
              return true;
            }, Mo.prototype.deepCopy = function() {
              for (var e4 = [], t3 = 0; t3 < this.ranges.length; t3++) e4[t3] = new Bo(st(this.ranges[t3].anchor), st(this.ranges[t3].head));
              return new Mo(e4, this.primIndex);
            }, Mo.prototype.somethingSelected = function() {
              for (var e4 = 0; e4 < this.ranges.length; e4++) if (!this.ranges[e4].empty()) return true;
              return false;
            }, Mo.prototype.contains = function(e4, t3) {
              t3 || (t3 = e4);
              for (var n3 = 0; n3 < this.ranges.length; n3++) {
                var r3 = this.ranges[n3];
                if (it(t3, r3.from()) >= 0 && it(e4, r3.to()) <= 0) return n3;
              }
              return -1;
            };
            var Bo = function(e4, t3) {
              this.anchor = e4, this.head = t3;
            };
            function Oo(e4, t3, n3) {
              var r3 = e4 && e4.options.selectionsMayTouch, o2 = t3[n3];
              t3.sort(function(e5, t4) {
                return it(e5.from(), t4.from());
              }), n3 = U(t3, o2);
              for (var i2 = 1; i2 < t3.length; i2++) {
                var a2 = t3[i2], s2 = t3[i2 - 1], l2 = it(s2.to(), a2.from());
                if (r3 && !a2.empty() ? l2 > 0 : l2 >= 0) {
                  var c2 = ct(s2.from(), a2.from()), u2 = lt(s2.to(), a2.to()), f2 = s2.empty() ? a2.from() == a2.head : s2.from() == s2.head;
                  i2 <= n3 && --n3, t3.splice(--i2, 2, new Bo(f2 ? u2 : c2, f2 ? c2 : u2));
                }
              }
              return new Mo(t3, n3);
            }
            function To(e4, t3) {
              return new Mo([new Bo(e4, t3 || e4)], 0);
            }
            function Lo(e4) {
              return e4.text ? ot(e4.from.line + e4.text.length - 1, X(e4.text).length + (1 == e4.text.length ? e4.from.ch : 0)) : e4.to;
            }
            function Fo(e4, t3) {
              if (it(e4, t3.from) < 0) return e4;
              if (it(e4, t3.to) <= 0) return Lo(t3);
              var n3 = e4.line + t3.text.length - (t3.to.line - t3.from.line) - 1, r3 = e4.ch;
              return e4.line == t3.to.line && (r3 += Lo(t3).ch - t3.to.ch), ot(n3, r3);
            }
            function Po(e4, t3) {
              for (var n3 = [], r3 = 0; r3 < e4.sel.ranges.length; r3++) {
                var o2 = e4.sel.ranges[r3];
                n3.push(new Bo(Fo(o2.anchor, t3), Fo(o2.head, t3)));
              }
              return Oo(e4.cm, n3, e4.sel.primIndex);
            }
            function No(e4, t3, n3) {
              return e4.line == t3.line ? ot(n3.line, e4.ch - t3.ch + n3.ch) : ot(n3.line + (e4.line - t3.line), e4.ch);
            }
            function jo(e4) {
              e4.doc.mode = Ue(e4.options, e4.doc.modeOption), Io(e4);
            }
            function Io(e4) {
              e4.doc.iter(function(e5) {
                e5.stateAfter && (e5.stateAfter = null), e5.styles && (e5.styles = null);
              }), e4.doc.modeFrontier = e4.doc.highlightFrontier = e4.doc.first, so(e4, 100), e4.state.modeGen++, e4.curOp && mr(e4);
            }
            function Do(e4, t3) {
              return 0 == t3.from.ch && 0 == t3.to.ch && "" == X(t3.text) && (!e4.cm || e4.cm.options.wholeLineUpdateBefore);
            }
            function zo(e4, t3, n3, r3) {
              function o2(e5) {
                return n3 ? n3[e5] : null;
              }
              function i2(e5, n4, o3) {
                (function(e6, t4, n5, r4) {
                  e6.text = t4, e6.stateAfter && (e6.stateAfter = null), e6.styles && (e6.styles = null), null != e6.order && (e6.order = null), Lt(e6), Ft(e6, n5);
                  var o4 = r4 ? r4(e6) : 1;
                  o4 != e6.height && Qe(e6, o4);
                })(e5, n4, o3, r3), dn(e5, "change", e5, t3);
              }
              function a2(e5, t4) {
                for (var n4 = [], i3 = e5; i3 < t4; ++i3) n4.push(new Yt(c2[i3], o2(i3), r3));
                return n4;
              }
              var s2 = t3.from, l2 = t3.to, c2 = t3.text, u2 = Ye(e4, s2.line), f2 = Ye(e4, l2.line), d2 = X(c2), p2 = o2(c2.length - 1), h2 = l2.line - s2.line;
              if (t3.full) e4.insert(0, a2(0, c2.length)), e4.remove(c2.length, e4.size - c2.length);
              else if (Do(e4, t3)) {
                var m2 = a2(0, c2.length - 1);
                i2(f2, f2.text, p2), h2 && e4.remove(s2.line, h2), m2.length && e4.insert(s2.line, m2);
              } else if (u2 == f2) if (1 == c2.length) i2(u2, u2.text.slice(0, s2.ch) + d2 + u2.text.slice(l2.ch), p2);
              else {
                var g2 = a2(1, c2.length - 1);
                g2.push(new Yt(d2 + u2.text.slice(l2.ch), p2, r3)), i2(u2, u2.text.slice(0, s2.ch) + c2[0], o2(0)), e4.insert(s2.line + 1, g2);
              }
              else if (1 == c2.length) i2(u2, u2.text.slice(0, s2.ch) + c2[0] + f2.text.slice(l2.ch), o2(0)), e4.remove(s2.line + 1, h2);
              else {
                i2(u2, u2.text.slice(0, s2.ch) + c2[0], o2(0)), i2(f2, d2 + f2.text.slice(l2.ch), p2);
                var v2 = a2(1, c2.length - 1);
                h2 > 1 && e4.remove(s2.line + 1, h2 - 1), e4.insert(s2.line + 1, v2);
              }
              dn(e4, "change", e4, t3);
            }
            function Ro(e4, t3, n3) {
              !function e5(r3, o2, i2) {
                if (r3.linked) for (var a2 = 0; a2 < r3.linked.length; ++a2) {
                  var s2 = r3.linked[a2];
                  if (s2.doc != o2) {
                    var l2 = i2 && s2.sharedHist;
                    n3 && !l2 || (t3(s2.doc, l2), e5(s2.doc, r3, l2));
                  }
                }
              }(e4, null, true);
            }
            function Wo(e4, t3) {
              if (t3.cm) throw new Error("This document is already in use.");
              e4.doc = t3, t3.cm = e4, dr(e4), jo(e4), Ho(e4), e4.options.direction = t3.direction, e4.options.lineWrapping || Zt(e4), e4.options.mode = t3.modeOption, mr(e4);
            }
            function Ho(e4) {
              ("rtl" == e4.doc.direction ? P : S)(e4.display.lineDiv, "CodeMirror-rtl");
            }
            function Uo(e4) {
              this.done = [], this.undone = [], this.undoDepth = e4 ? e4.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e4 ? e4.maxGeneration : 1;
            }
            function Vo(e4, t3) {
              var n3 = { from: st(t3.from), to: Lo(t3), text: Je(e4, t3.from, t3.to) };
              return Zo(e4, n3, t3.from.line, t3.to.line + 1), Ro(e4, function(e5) {
                return Zo(e5, n3, t3.from.line, t3.to.line + 1);
              }, true), n3;
            }
            function Go(e4) {
              for (; e4.length && X(e4).ranges; ) e4.pop();
            }
            function $o(e4, t3, n3, r3) {
              var o2 = e4.history;
              o2.undone.length = 0;
              var i2, a2, s2 = +/* @__PURE__ */ new Date();
              if ((o2.lastOp == r3 || o2.lastOrigin == t3.origin && t3.origin && ("+" == t3.origin.charAt(0) && o2.lastModTime > s2 - (e4.cm ? e4.cm.options.historyEventDelay : 500) || "*" == t3.origin.charAt(0))) && (i2 = function(e5, t4) {
                return t4 ? (Go(e5.done), X(e5.done)) : e5.done.length && !X(e5.done).ranges ? X(e5.done) : e5.done.length > 1 && !e5.done[e5.done.length - 2].ranges ? (e5.done.pop(), X(e5.done)) : void 0;
              }(o2, o2.lastOp == r3))) a2 = X(i2.changes), 0 == it(t3.from, t3.to) && 0 == it(t3.from, a2.to) ? a2.to = Lo(t3) : i2.changes.push(Vo(e4, t3));
              else {
                var l2 = X(o2.done);
                for (l2 && l2.ranges || Ko(e4.sel, o2.done), i2 = { changes: [Vo(e4, t3)], generation: o2.generation }, o2.done.push(i2); o2.done.length > o2.undoDepth; ) o2.done.shift(), o2.done[0].ranges || o2.done.shift();
              }
              o2.done.push(n3), o2.generation = ++o2.maxGeneration, o2.lastModTime = o2.lastSelTime = s2, o2.lastOp = o2.lastSelOp = r3, o2.lastOrigin = o2.lastSelOrigin = t3.origin, a2 || Ae(e4, "historyAdded");
            }
            function qo(e4, t3, n3, r3) {
              var o2 = e4.history, i2 = r3 && r3.origin;
              n3 == o2.lastSelOp || i2 && o2.lastSelOrigin == i2 && (o2.lastModTime == o2.lastSelTime && o2.lastOrigin == i2 || function(e5, t4, n4, r4) {
                var o3 = t4.charAt(0);
                return "*" == o3 || "+" == o3 && n4.ranges.length == r4.ranges.length && n4.somethingSelected() == r4.somethingSelected() && /* @__PURE__ */ new Date() - e5.history.lastSelTime <= (e5.cm ? e5.cm.options.historyEventDelay : 500);
              }(e4, i2, X(o2.done), t3)) ? o2.done[o2.done.length - 1] = t3 : Ko(t3, o2.done), o2.lastSelTime = +/* @__PURE__ */ new Date(), o2.lastSelOrigin = i2, o2.lastSelOp = n3, r3 && false !== r3.clearRedo && Go(o2.undone);
            }
            function Ko(e4, t3) {
              var n3 = X(t3);
              n3 && n3.ranges && n3.equals(e4) || t3.push(e4);
            }
            function Zo(e4, t3, n3, r3) {
              var o2 = t3["spans_" + e4.id], i2 = 0;
              e4.iter(Math.max(e4.first, n3), Math.min(e4.first + e4.size, r3), function(n4) {
                n4.markedSpans && ((o2 || (o2 = t3["spans_" + e4.id] = {}))[i2] = n4.markedSpans), ++i2;
              });
            }
            function Yo(e4) {
              if (!e4) return null;
              for (var t3, n3 = 0; n3 < e4.length; ++n3) e4[n3].marker.explicitlyCleared ? t3 || (t3 = e4.slice(0, n3)) : t3 && t3.push(e4[n3]);
              return t3 ? t3.length ? t3 : null : e4;
            }
            function Jo(e4, t3) {
              var n3 = function(e5, t4) {
                var n4 = t4["spans_" + e5.id];
                if (!n4) return null;
                for (var r4 = [], o3 = 0; o3 < t4.text.length; ++o3) r4.push(Yo(n4[o3]));
                return r4;
              }(e4, t3), r3 = Ot(e4, t3);
              if (!n3) return r3;
              if (!r3) return n3;
              for (var o2 = 0; o2 < n3.length; ++o2) {
                var i2 = n3[o2], a2 = r3[o2];
                if (i2 && a2) e: for (var s2 = 0; s2 < a2.length; ++s2) {
                  for (var l2 = a2[s2], c2 = 0; c2 < i2.length; ++c2) if (i2[c2].marker == l2.marker) continue e;
                  i2.push(l2);
                }
                else a2 && (n3[o2] = a2);
              }
              return n3;
            }
            function Xo(e4, t3, n3) {
              for (var r3 = [], o2 = 0; o2 < e4.length; ++o2) {
                var i2 = e4[o2];
                if (i2.ranges) r3.push(n3 ? Mo.prototype.deepCopy.call(i2) : i2);
                else {
                  var a2 = i2.changes, s2 = [];
                  r3.push({ changes: s2 });
                  for (var l2 = 0; l2 < a2.length; ++l2) {
                    var c2 = a2[l2], u2 = void 0;
                    if (s2.push({ from: c2.from, to: c2.to, text: c2.text }), t3) for (var f2 in c2) (u2 = f2.match(/^spans_(\d+)$/)) && U(t3, Number(u2[1])) > -1 && (X(s2)[f2] = c2[f2], delete c2[f2]);
                  }
                }
              }
              return r3;
            }
            function Qo(e4, t3, n3, r3) {
              if (r3) {
                var o2 = e4.anchor;
                if (n3) {
                  var i2 = it(t3, o2) < 0;
                  i2 != it(n3, o2) < 0 ? (o2 = t3, t3 = n3) : i2 != it(t3, n3) < 0 && (t3 = n3);
                }
                return new Bo(o2, t3);
              }
              return new Bo(n3 || t3, t3);
            }
            function ei(e4, t3, n3, r3, o2) {
              null == o2 && (o2 = e4.cm && (e4.cm.display.shift || e4.extend)), ii(e4, new Mo([Qo(e4.sel.primary(), t3, n3, o2)], 0), r3);
            }
            function ti(e4, t3, n3) {
              for (var r3 = [], o2 = e4.cm && (e4.cm.display.shift || e4.extend), i2 = 0; i2 < e4.sel.ranges.length; i2++) r3[i2] = Qo(e4.sel.ranges[i2], t3[i2], null, o2);
              ii(e4, Oo(e4.cm, r3, e4.sel.primIndex), n3);
            }
            function ni(e4, t3, n3, r3) {
              var o2 = e4.sel.ranges.slice(0);
              o2[t3] = n3, ii(e4, Oo(e4.cm, o2, e4.sel.primIndex), r3);
            }
            function ri(e4, t3, n3, r3) {
              ii(e4, To(t3, n3), r3);
            }
            function oi(e4, t3, n3) {
              var r3 = e4.history.done, o2 = X(r3);
              o2 && o2.ranges ? (r3[r3.length - 1] = t3, ai(e4, t3, n3)) : ii(e4, t3, n3);
            }
            function ii(e4, t3, n3) {
              ai(e4, t3, n3), qo(e4, e4.sel, e4.cm ? e4.cm.curOp.id : NaN, n3);
            }
            function ai(e4, t3, n3) {
              (Ce(e4, "beforeSelectionChange") || e4.cm && Ce(e4.cm, "beforeSelectionChange")) && (t3 = function(e5, t4, n4) {
                var r4 = { ranges: t4.ranges, update: function(t5) {
                  this.ranges = [];
                  for (var n5 = 0; n5 < t5.length; n5++) this.ranges[n5] = new Bo(ft(e5, t5[n5].anchor), ft(e5, t5[n5].head));
                }, origin: n4 && n4.origin };
                return Ae(e5, "beforeSelectionChange", e5, r4), e5.cm && Ae(e5.cm, "beforeSelectionChange", e5.cm, r4), r4.ranges != t4.ranges ? Oo(e5.cm, r4.ranges, r4.ranges.length - 1) : t4;
              }(e4, t3, n3));
              var r3 = n3 && n3.bias || (it(t3.primary().head, e4.sel.primary().head) < 0 ? -1 : 1);
              si(e4, ci(e4, t3, r3, true)), n3 && false === n3.scroll || !e4.cm || "nocursor" == e4.cm.getOption("readOnly") || Nr(e4.cm);
            }
            function si(e4, t3) {
              t3.equals(e4.sel) || (e4.sel = t3, e4.cm && (e4.cm.curOp.updateInput = 1, e4.cm.curOp.selectionChanged = true, be(e4.cm)), dn(e4, "cursorActivity", e4));
            }
            function li(e4) {
              si(e4, ci(e4, e4.sel, null, false));
            }
            function ci(e4, t3, n3, r3) {
              for (var o2, i2 = 0; i2 < t3.ranges.length; i2++) {
                var a2 = t3.ranges[i2], s2 = t3.ranges.length == e4.sel.ranges.length && e4.sel.ranges[i2], l2 = fi(e4, a2.anchor, s2 && s2.anchor, n3, r3), c2 = a2.head == a2.anchor ? l2 : fi(e4, a2.head, s2 && s2.head, n3, r3);
                (o2 || l2 != a2.anchor || c2 != a2.head) && (o2 || (o2 = t3.ranges.slice(0, i2)), o2[i2] = new Bo(l2, c2));
              }
              return o2 ? Oo(e4.cm, o2, t3.primIndex) : t3;
            }
            function ui(e4, t3, n3, r3, o2) {
              var i2 = Ye(e4, t3.line);
              if (i2.markedSpans) for (var a2 = 0; a2 < i2.markedSpans.length; ++a2) {
                var s2 = i2.markedSpans[a2], l2 = s2.marker, c2 = "selectLeft" in l2 ? !l2.selectLeft : l2.inclusiveLeft, u2 = "selectRight" in l2 ? !l2.selectRight : l2.inclusiveRight;
                if ((null == s2.from || (c2 ? s2.from <= t3.ch : s2.from < t3.ch)) && (null == s2.to || (u2 ? s2.to >= t3.ch : s2.to > t3.ch))) {
                  if (o2 && (Ae(l2, "beforeCursorEnter"), l2.explicitlyCleared)) {
                    if (i2.markedSpans) {
                      --a2;
                      continue;
                    }
                    break;
                  }
                  if (!l2.atomic) continue;
                  if (n3) {
                    var f2 = l2.find(r3 < 0 ? 1 : -1), d2 = void 0;
                    if ((r3 < 0 ? u2 : c2) && (f2 = di(e4, f2, -r3, f2 && f2.line == t3.line ? i2 : null)), f2 && f2.line == t3.line && (d2 = it(f2, n3)) && (r3 < 0 ? d2 < 0 : d2 > 0)) return ui(e4, f2, t3, r3, o2);
                  }
                  var p2 = l2.find(r3 < 0 ? -1 : 1);
                  return (r3 < 0 ? c2 : u2) && (p2 = di(e4, p2, r3, p2.line == t3.line ? i2 : null)), p2 ? ui(e4, p2, t3, r3, o2) : null;
                }
              }
              return t3;
            }
            function fi(e4, t3, n3, r3, o2) {
              var i2 = r3 || 1;
              return ui(e4, t3, n3, i2, o2) || !o2 && ui(e4, t3, n3, i2, true) || ui(e4, t3, n3, -i2, o2) || !o2 && ui(e4, t3, n3, -i2, true) || (e4.cantEdit = true, ot(e4.first, 0));
            }
            function di(e4, t3, n3, r3) {
              return n3 < 0 && 0 == t3.ch ? t3.line > e4.first ? ft(e4, ot(t3.line - 1)) : null : n3 > 0 && t3.ch == (r3 || Ye(e4, t3.line)).text.length ? t3.line < e4.first + e4.size - 1 ? ot(t3.line + 1, 0) : null : new ot(t3.line, t3.ch + n3);
            }
            function pi(e4) {
              e4.setSelection(ot(e4.firstLine(), 0), ot(e4.lastLine()), $);
            }
            function hi(e4, t3, n3) {
              var r3 = { canceled: false, from: t3.from, to: t3.to, text: t3.text, origin: t3.origin, cancel: function() {
                return r3.canceled = true;
              } };
              return n3 && (r3.update = function(t4, n4, o2, i2) {
                t4 && (r3.from = ft(e4, t4)), n4 && (r3.to = ft(e4, n4)), o2 && (r3.text = o2), void 0 !== i2 && (r3.origin = i2);
              }), Ae(e4, "beforeChange", e4, r3), e4.cm && Ae(e4.cm, "beforeChange", e4.cm, r3), r3.canceled ? (e4.cm && (e4.cm.curOp.updateInput = 2), null) : { from: r3.from, to: r3.to, text: r3.text, origin: r3.origin };
            }
            function mi(e4, t3, n3) {
              if (e4.cm) {
                if (!e4.cm.curOp) return oo(e4.cm, mi)(e4, t3, n3);
                if (e4.cm.state.suppressEdits) return;
              }
              if (!(Ce(e4, "beforeChange") || e4.cm && Ce(e4.cm, "beforeChange")) || (t3 = hi(e4, t3, true))) {
                var r3 = Et && !n3 && function(e5, t4, n4) {
                  var r4 = null;
                  if (e5.iter(t4.line, n4.line + 1, function(e6) {
                    if (e6.markedSpans) for (var t5 = 0; t5 < e6.markedSpans.length; ++t5) {
                      var n5 = e6.markedSpans[t5].marker;
                      !n5.readOnly || r4 && -1 != U(r4, n5) || (r4 || (r4 = [])).push(n5);
                    }
                  }), !r4) return null;
                  for (var o3 = [{ from: t4, to: n4 }], i2 = 0; i2 < r4.length; ++i2) for (var a2 = r4[i2], s2 = a2.find(0), l2 = 0; l2 < o3.length; ++l2) {
                    var c2 = o3[l2];
                    if (!(it(c2.to, s2.from) < 0 || it(c2.from, s2.to) > 0)) {
                      var u2 = [l2, 1], f2 = it(c2.from, s2.from), d2 = it(c2.to, s2.to);
                      (f2 < 0 || !a2.inclusiveLeft && !f2) && u2.push({ from: c2.from, to: s2.from }), (d2 > 0 || !a2.inclusiveRight && !d2) && u2.push({ from: s2.to, to: c2.to }), o3.splice.apply(o3, u2), l2 += u2.length - 3;
                    }
                  }
                  return o3;
                }(e4, t3.from, t3.to);
                if (r3) for (var o2 = r3.length - 1; o2 >= 0; --o2) gi(e4, { from: r3[o2].from, to: r3[o2].to, text: o2 ? [""] : t3.text, origin: t3.origin });
                else gi(e4, t3);
              }
            }
            function gi(e4, t3) {
              if (1 != t3.text.length || "" != t3.text[0] || 0 != it(t3.from, t3.to)) {
                var n3 = Po(e4, t3);
                $o(e4, t3, n3, e4.cm ? e4.cm.curOp.id : NaN), yi(e4, t3, n3, Ot(e4, t3));
                var r3 = [];
                Ro(e4, function(e5, n4) {
                  n4 || -1 != U(r3, e5.history) || (wi(e5.history, t3), r3.push(e5.history)), yi(e5, t3, null, Ot(e5, t3));
                });
              }
            }
            function vi(e4, t3, n3) {
              var r3 = e4.cm && e4.cm.state.suppressEdits;
              if (!r3 || n3) {
                for (var o2, i2 = e4.history, a2 = e4.sel, s2 = "undo" == t3 ? i2.done : i2.undone, l2 = "undo" == t3 ? i2.undone : i2.done, c2 = 0; c2 < s2.length && (o2 = s2[c2], n3 ? !o2.ranges || o2.equals(e4.sel) : o2.ranges); c2++) ;
                if (c2 != s2.length) {
                  for (i2.lastOrigin = i2.lastSelOrigin = null; ; ) {
                    if (!(o2 = s2.pop()).ranges) {
                      if (r3) return void s2.push(o2);
                      break;
                    }
                    if (Ko(o2, l2), n3 && !o2.equals(e4.sel)) return void ii(e4, o2, { clearRedo: false });
                    a2 = o2;
                  }
                  var u2 = [];
                  Ko(a2, l2), l2.push({ changes: u2, generation: i2.generation }), i2.generation = o2.generation || ++i2.maxGeneration;
                  for (var f2 = Ce(e4, "beforeChange") || e4.cm && Ce(e4.cm, "beforeChange"), d2 = function(n4) {
                    var r4 = o2.changes[n4];
                    if (r4.origin = t3, f2 && !hi(e4, r4, false)) return s2.length = 0, {};
                    u2.push(Vo(e4, r4));
                    var i3 = n4 ? Po(e4, r4) : X(s2);
                    yi(e4, r4, i3, Jo(e4, r4)), !n4 && e4.cm && e4.cm.scrollIntoView({ from: r4.from, to: Lo(r4) });
                    var a3 = [];
                    Ro(e4, function(e5, t4) {
                      t4 || -1 != U(a3, e5.history) || (wi(e5.history, r4), a3.push(e5.history)), yi(e5, r4, null, Jo(e5, r4));
                    });
                  }, p2 = o2.changes.length - 1; p2 >= 0; --p2) {
                    var h2 = d2(p2);
                    if (h2) return h2.v;
                  }
                }
              }
            }
            function Ai(e4, t3) {
              if (0 != t3 && (e4.first += t3, e4.sel = new Mo(Q(e4.sel.ranges, function(e5) {
                return new Bo(ot(e5.anchor.line + t3, e5.anchor.ch), ot(e5.head.line + t3, e5.head.ch));
              }), e4.sel.primIndex), e4.cm)) {
                mr(e4.cm, e4.first, e4.first - t3, t3);
                for (var n3 = e4.cm.display, r3 = n3.viewFrom; r3 < n3.viewTo; r3++) gr(e4.cm, r3, "gutter");
              }
            }
            function yi(e4, t3, n3, r3) {
              if (e4.cm && !e4.cm.curOp) return oo(e4.cm, yi)(e4, t3, n3, r3);
              if (t3.to.line < e4.first) Ai(e4, t3.text.length - 1 - (t3.to.line - t3.from.line));
              else if (!(t3.from.line > e4.lastLine())) {
                if (t3.from.line < e4.first) {
                  var o2 = t3.text.length - 1 - (e4.first - t3.from.line);
                  Ai(e4, o2), t3 = { from: ot(e4.first, 0), to: ot(t3.to.line + o2, t3.to.ch), text: [X(t3.text)], origin: t3.origin };
                }
                var i2 = e4.lastLine();
                t3.to.line > i2 && (t3 = { from: t3.from, to: ot(i2, Ye(e4, i2).text.length), text: [t3.text[0]], origin: t3.origin }), t3.removed = Je(e4, t3.from, t3.to), n3 || (n3 = Po(e4, t3)), e4.cm ? function(e5, t4, n4) {
                  var r4 = e5.doc, o3 = e5.display, i3 = t4.from, a2 = t4.to, s2 = false, l2 = i3.line;
                  e5.options.lineWrapping || (l2 = et(Ht(Ye(r4, i3.line))), r4.iter(l2, a2.line + 1, function(e6) {
                    if (e6 == o3.maxLine) return s2 = true, true;
                  })), r4.sel.contains(t4.from, t4.to) > -1 && be(e5), zo(r4, t4, n4, fr(e5)), e5.options.lineWrapping || (r4.iter(l2, i3.line + t4.text.length, function(e6) {
                    var t5 = Kt(e6);
                    t5 > o3.maxLineLength && (o3.maxLine = e6, o3.maxLineLength = t5, o3.maxLineChanged = true, s2 = false);
                  }), s2 && (e5.curOp.updateMaxLine = true)), function(e6, t5) {
                    if (e6.modeFrontier = Math.min(e6.modeFrontier, t5), !(e6.highlightFrontier < t5 - 10)) {
                      for (var n5 = e6.first, r5 = t5 - 1; r5 > n5; r5--) {
                        var o4 = Ye(e6, r5).stateAfter;
                        if (o4 && (!(o4 instanceof pt) || r5 + o4.lookAhead < t5)) {
                          n5 = r5 + 1;
                          break;
                        }
                      }
                      e6.highlightFrontier = Math.min(e6.highlightFrontier, n5);
                    }
                  }(r4, i3.line), so(e5, 400);
                  var c2 = t4.text.length - (a2.line - i3.line) - 1;
                  t4.full ? mr(e5) : i3.line != a2.line || 1 != t4.text.length || Do(e5.doc, t4) ? mr(e5, i3.line, a2.line + 1, c2) : gr(e5, i3.line, "text");
                  var u2 = Ce(e5, "changes"), f2 = Ce(e5, "change");
                  if (f2 || u2) {
                    var d2 = { from: i3, to: a2, text: t4.text, removed: t4.removed, origin: t4.origin };
                    f2 && dn(e5, "change", e5, d2), u2 && (e5.curOp.changeObjs || (e5.curOp.changeObjs = [])).push(d2);
                  }
                  e5.display.selForContextMenu = null;
                }(e4.cm, t3, r3) : zo(e4, t3, r3), ai(e4, n3, $), e4.cantEdit && fi(e4, ot(e4.firstLine(), 0)) && (e4.cantEdit = false);
              }
            }
            function bi(e4, t3, n3, r3, o2) {
              var i2;
              r3 || (r3 = n3), it(r3, n3) < 0 && (n3 = (i2 = [r3, n3])[0], r3 = i2[1]), "string" == typeof t3 && (t3 = e4.splitLines(t3)), mi(e4, { from: n3, to: r3, text: t3, origin: o2 });
            }
            function Ci(e4, t3, n3, r3) {
              n3 < e4.line ? e4.line += r3 : t3 < e4.line && (e4.line = t3, e4.ch = 0);
            }
            function xi(e4, t3, n3, r3) {
              for (var o2 = 0; o2 < e4.length; ++o2) {
                var i2 = e4[o2], a2 = true;
                if (i2.ranges) {
                  i2.copied || ((i2 = e4[o2] = i2.deepCopy()).copied = true);
                  for (var s2 = 0; s2 < i2.ranges.length; s2++) Ci(i2.ranges[s2].anchor, t3, n3, r3), Ci(i2.ranges[s2].head, t3, n3, r3);
                } else {
                  for (var l2 = 0; l2 < i2.changes.length; ++l2) {
                    var c2 = i2.changes[l2];
                    if (n3 < c2.from.line) c2.from = ot(c2.from.line + r3, c2.from.ch), c2.to = ot(c2.to.line + r3, c2.to.ch);
                    else if (t3 <= c2.to.line) {
                      a2 = false;
                      break;
                    }
                  }
                  a2 || (e4.splice(0, o2 + 1), o2 = 0);
                }
              }
            }
            function wi(e4, t3) {
              var n3 = t3.from.line, r3 = t3.to.line, o2 = t3.text.length - (r3 - n3) - 1;
              xi(e4.done, n3, r3, o2), xi(e4.undone, n3, r3, o2);
            }
            function ki(e4, t3, n3, r3) {
              var o2 = t3, i2 = t3;
              return "number" == typeof t3 ? i2 = Ye(e4, ut(e4, t3)) : o2 = et(t3), null == o2 ? null : (r3(i2, o2) && e4.cm && gr(e4.cm, o2, n3), i2);
            }
            function Ei(e4) {
              this.lines = e4, this.parent = null;
              for (var t3 = 0, n3 = 0; n3 < e4.length; ++n3) e4[n3].parent = this, t3 += e4[n3].height;
              this.height = t3;
            }
            function _i(e4) {
              this.children = e4;
              for (var t3 = 0, n3 = 0, r3 = 0; r3 < e4.length; ++r3) {
                var o2 = e4[r3];
                t3 += o2.chunkSize(), n3 += o2.height, o2.parent = this;
              }
              this.size = t3, this.height = n3, this.parent = null;
            }
            Bo.prototype.from = function() {
              return ct(this.anchor, this.head);
            }, Bo.prototype.to = function() {
              return lt(this.anchor, this.head);
            }, Bo.prototype.empty = function() {
              return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
            }, Ei.prototype = { chunkSize: function() {
              return this.lines.length;
            }, removeInner: function(e4, t3) {
              for (var n3 = e4, r3 = e4 + t3; n3 < r3; ++n3) {
                var o2 = this.lines[n3];
                this.height -= o2.height, Jt(o2), dn(o2, "delete");
              }
              this.lines.splice(e4, t3);
            }, collapse: function(e4) {
              e4.push.apply(e4, this.lines);
            }, insertInner: function(e4, t3, n3) {
              this.height += n3, this.lines = this.lines.slice(0, e4).concat(t3).concat(this.lines.slice(e4));
              for (var r3 = 0; r3 < t3.length; ++r3) t3[r3].parent = this;
            }, iterN: function(e4, t3, n3) {
              for (var r3 = e4 + t3; e4 < r3; ++e4) if (n3(this.lines[e4])) return true;
            } }, _i.prototype = { chunkSize: function() {
              return this.size;
            }, removeInner: function(e4, t3) {
              this.size -= t3;
              for (var n3 = 0; n3 < this.children.length; ++n3) {
                var r3 = this.children[n3], o2 = r3.chunkSize();
                if (e4 < o2) {
                  var i2 = Math.min(t3, o2 - e4), a2 = r3.height;
                  if (r3.removeInner(e4, i2), this.height -= a2 - r3.height, o2 == i2 && (this.children.splice(n3--, 1), r3.parent = null), 0 == (t3 -= i2)) break;
                  e4 = 0;
                } else e4 -= o2;
              }
              if (this.size - t3 < 25 && (this.children.length > 1 || !(this.children[0] instanceof Ei))) {
                var s2 = [];
                this.collapse(s2), this.children = [new Ei(s2)], this.children[0].parent = this;
              }
            }, collapse: function(e4) {
              for (var t3 = 0; t3 < this.children.length; ++t3) this.children[t3].collapse(e4);
            }, insertInner: function(e4, t3, n3) {
              this.size += t3.length, this.height += n3;
              for (var r3 = 0; r3 < this.children.length; ++r3) {
                var o2 = this.children[r3], i2 = o2.chunkSize();
                if (e4 <= i2) {
                  if (o2.insertInner(e4, t3, n3), o2.lines && o2.lines.length > 50) {
                    for (var a2 = o2.lines.length % 25 + 25, s2 = a2; s2 < o2.lines.length; ) {
                      var l2 = new Ei(o2.lines.slice(s2, s2 += 25));
                      o2.height -= l2.height, this.children.splice(++r3, 0, l2), l2.parent = this;
                    }
                    o2.lines = o2.lines.slice(0, a2), this.maybeSpill();
                  }
                  break;
                }
                e4 -= i2;
              }
            }, maybeSpill: function() {
              if (!(this.children.length <= 10)) {
                var e4 = this;
                do {
                  var t3 = new _i(e4.children.splice(e4.children.length - 5, 5));
                  if (e4.parent) {
                    e4.size -= t3.size, e4.height -= t3.height;
                    var n3 = U(e4.parent.children, e4);
                    e4.parent.children.splice(n3 + 1, 0, t3);
                  } else {
                    var r3 = new _i(e4.children);
                    r3.parent = e4, e4.children = [r3, t3], e4 = r3;
                  }
                  t3.parent = e4.parent;
                } while (e4.children.length > 10);
                e4.parent.maybeSpill();
              }
            }, iterN: function(e4, t3, n3) {
              for (var r3 = 0; r3 < this.children.length; ++r3) {
                var o2 = this.children[r3], i2 = o2.chunkSize();
                if (e4 < i2) {
                  var a2 = Math.min(t3, i2 - e4);
                  if (o2.iterN(e4, a2, n3)) return true;
                  if (0 == (t3 -= a2)) break;
                  e4 = 0;
                } else e4 -= i2;
              }
            } };
            var Si = function(e4, t3, n3) {
              if (n3) for (var r3 in n3) n3.hasOwnProperty(r3) && (this[r3] = n3[r3]);
              this.doc = e4, this.node = t3;
            };
            function Mi(e4, t3, n3) {
              qt(t3) < (e4.curOp && e4.curOp.scrollTop || e4.doc.scrollTop) && Pr(e4, n3);
            }
            Si.prototype.clear = function() {
              var e4 = this.doc.cm, t3 = this.line.widgets, n3 = this.line, r3 = et(n3);
              if (null != r3 && t3) {
                for (var o2 = 0; o2 < t3.length; ++o2) t3[o2] == this && t3.splice(o2--, 1);
                t3.length || (n3.widgets = null);
                var i2 = En(this);
                Qe(n3, Math.max(0, n3.height - i2)), e4 && (ro(e4, function() {
                  Mi(e4, n3, -i2), gr(e4, r3, "widget");
                }), dn(e4, "lineWidgetCleared", e4, this, r3));
              }
            }, Si.prototype.changed = function() {
              var e4 = this, t3 = this.height, n3 = this.doc.cm, r3 = this.line;
              this.height = null;
              var o2 = En(this) - t3;
              o2 && (Gt(this.doc, r3) || Qe(r3, r3.height + o2), n3 && ro(n3, function() {
                n3.curOp.forceUpdate = true, Mi(n3, r3, o2), dn(n3, "lineWidgetChanged", n3, e4, et(r3));
              }));
            }, xe(Si);
            var Bi = 0, Oi = function(e4, t3) {
              this.lines = [], this.type = t3, this.doc = e4, this.id = ++Bi;
            };
            function Ti(e4, t3, n3, r3, o2) {
              if (r3 && r3.shared) return function(e5, t4, n4, r4, o3) {
                (r4 = R(r4)).shared = false;
                var i3 = [Ti(e5, t4, n4, r4, o3)], a3 = i3[0], s3 = r4.widgetNode;
                return Ro(e5, function(e6) {
                  s3 && (r4.widgetNode = s3.cloneNode(true)), i3.push(Ti(e6, ft(e6, t4), ft(e6, n4), r4, o3));
                  for (var l3 = 0; l3 < e6.linked.length; ++l3) if (e6.linked[l3].isParent) return;
                  a3 = X(i3);
                }), new Li(i3, a3);
              }(e4, t3, n3, r3, o2);
              if (e4.cm && !e4.cm.curOp) return oo(e4.cm, Ti)(e4, t3, n3, r3, o2);
              var i2 = new Oi(e4, o2), a2 = it(t3, n3);
              if (r3 && R(r3, i2, false), a2 > 0 || 0 == a2 && false !== i2.clearWhenEmpty) return i2;
              if (i2.replacedWith && (i2.collapsed = true, i2.widgetNode = T("span", [i2.replacedWith], "CodeMirror-widget"), r3.handleMouseEvents || i2.widgetNode.setAttribute("cm-ignore-events", "true"), r3.insertLeft && (i2.widgetNode.insertLeft = true)), i2.collapsed) {
                if (Wt(e4, t3.line, t3, n3, i2) || t3.line != n3.line && Wt(e4, n3.line, t3, n3, i2)) throw new Error("Inserting collapsed marker partially overlapping an existing one");
                _t = true;
              }
              i2.addToHistory && $o(e4, { from: t3, to: n3, origin: "markText" }, e4.sel, NaN);
              var s2, l2 = t3.line, c2 = e4.cm;
              if (e4.iter(l2, n3.line + 1, function(r4) {
                c2 && i2.collapsed && !c2.options.lineWrapping && Ht(r4) == c2.display.maxLine && (s2 = true), i2.collapsed && l2 != t3.line && Qe(r4, 0), function(e5, t4, n4) {
                  var r5 = n4 && window.WeakSet && (n4.markedSpans || (n4.markedSpans = /* @__PURE__ */ new WeakSet()));
                  r5 && e5.markedSpans && r5.has(e5.markedSpans) ? e5.markedSpans.push(t4) : (e5.markedSpans = e5.markedSpans ? e5.markedSpans.concat([t4]) : [t4], r5 && r5.add(e5.markedSpans)), t4.marker.attachLine(e5);
                }(r4, new St(i2, l2 == t3.line ? t3.ch : null, l2 == n3.line ? n3.ch : null), e4.cm && e4.cm.curOp), ++l2;
              }), i2.collapsed && e4.iter(t3.line, n3.line + 1, function(t4) {
                Gt(e4, t4) && Qe(t4, 0);
              }), i2.clearOnEnter && me(i2, "beforeCursorEnter", function() {
                return i2.clear();
              }), i2.readOnly && (Et = true, (e4.history.done.length || e4.history.undone.length) && e4.clearHistory()), i2.collapsed && (i2.id = ++Bi, i2.atomic = true), c2) {
                if (s2 && (c2.curOp.updateMaxLine = true), i2.collapsed) mr(c2, t3.line, n3.line + 1);
                else if (i2.className || i2.startStyle || i2.endStyle || i2.css || i2.attributes || i2.title) for (var u2 = t3.line; u2 <= n3.line; u2++) gr(c2, u2, "text");
                i2.atomic && li(c2.doc), dn(c2, "markerAdded", c2, i2);
              }
              return i2;
            }
            Oi.prototype.clear = function() {
              if (!this.explicitlyCleared) {
                var e4 = this.doc.cm, t3 = e4 && !e4.curOp;
                if (t3 && Yr(e4), Ce(this, "clear")) {
                  var n3 = this.find();
                  n3 && dn(this, "clear", n3.from, n3.to);
                }
                for (var r3 = null, o2 = null, i2 = 0; i2 < this.lines.length; ++i2) {
                  var a2 = this.lines[i2], s2 = Mt(a2.markedSpans, this);
                  e4 && !this.collapsed ? gr(e4, et(a2), "text") : e4 && (null != s2.to && (o2 = et(a2)), null != s2.from && (r3 = et(a2))), a2.markedSpans = Bt(a2.markedSpans, s2), null == s2.from && this.collapsed && !Gt(this.doc, a2) && e4 && Qe(a2, sr(e4.display));
                }
                if (e4 && this.collapsed && !e4.options.lineWrapping) for (var l2 = 0; l2 < this.lines.length; ++l2) {
                  var c2 = Ht(this.lines[l2]), u2 = Kt(c2);
                  u2 > e4.display.maxLineLength && (e4.display.maxLine = c2, e4.display.maxLineLength = u2, e4.display.maxLineChanged = true);
                }
                null != r3 && e4 && this.collapsed && mr(e4, r3, o2 + 1), this.lines.length = 0, this.explicitlyCleared = true, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = false, e4 && li(e4.doc)), e4 && dn(e4, "markerCleared", e4, this, r3, o2), t3 && Jr(e4), this.parent && this.parent.clear();
              }
            }, Oi.prototype.find = function(e4, t3) {
              var n3, r3;
              null == e4 && "bookmark" == this.type && (e4 = 1);
              for (var o2 = 0; o2 < this.lines.length; ++o2) {
                var i2 = this.lines[o2], a2 = Mt(i2.markedSpans, this);
                if (null != a2.from && (n3 = ot(t3 ? i2 : et(i2), a2.from), -1 == e4)) return n3;
                if (null != a2.to && (r3 = ot(t3 ? i2 : et(i2), a2.to), 1 == e4)) return r3;
              }
              return n3 && { from: n3, to: r3 };
            }, Oi.prototype.changed = function() {
              var e4 = this, t3 = this.find(-1, true), n3 = this, r3 = this.doc.cm;
              t3 && r3 && ro(r3, function() {
                var o2 = t3.line, i2 = et(t3.line), a2 = Nn(r3, i2);
                if (a2 && (Hn(a2), r3.curOp.selectionChanged = r3.curOp.forceUpdate = true), r3.curOp.updateMaxLine = true, !Gt(n3.doc, o2) && null != n3.height) {
                  var s2 = n3.height;
                  n3.height = null;
                  var l2 = En(n3) - s2;
                  l2 && Qe(o2, o2.height + l2);
                }
                dn(r3, "markerChanged", r3, e4);
              });
            }, Oi.prototype.attachLine = function(e4) {
              if (!this.lines.length && this.doc.cm) {
                var t3 = this.doc.cm.curOp;
                t3.maybeHiddenMarkers && -1 != U(t3.maybeHiddenMarkers, this) || (t3.maybeUnhiddenMarkers || (t3.maybeUnhiddenMarkers = [])).push(this);
              }
              this.lines.push(e4);
            }, Oi.prototype.detachLine = function(e4) {
              if (this.lines.splice(U(this.lines, e4), 1), !this.lines.length && this.doc.cm) {
                var t3 = this.doc.cm.curOp;
                (t3.maybeHiddenMarkers || (t3.maybeHiddenMarkers = [])).push(this);
              }
            }, xe(Oi);
            var Li = function(e4, t3) {
              this.markers = e4, this.primary = t3;
              for (var n3 = 0; n3 < e4.length; ++n3) e4[n3].parent = this;
            };
            function Fi(e4) {
              return e4.findMarks(ot(e4.first, 0), e4.clipPos(ot(e4.lastLine())), function(e5) {
                return e5.parent;
              });
            }
            function Pi(e4) {
              for (var t3 = function(t4) {
                var n4 = e4[t4], r3 = [n4.primary.doc];
                Ro(n4.primary.doc, function(e5) {
                  return r3.push(e5);
                });
                for (var o2 = 0; o2 < n4.markers.length; o2++) {
                  var i2 = n4.markers[o2];
                  -1 == U(r3, i2.doc) && (i2.parent = null, n4.markers.splice(o2--, 1));
                }
              }, n3 = 0; n3 < e4.length; n3++) t3(n3);
            }
            Li.prototype.clear = function() {
              if (!this.explicitlyCleared) {
                this.explicitlyCleared = true;
                for (var e4 = 0; e4 < this.markers.length; ++e4) this.markers[e4].clear();
                dn(this, "clear");
              }
            }, Li.prototype.find = function(e4, t3) {
              return this.primary.find(e4, t3);
            }, xe(Li);
            var Ni = 0, ji = function(e4, t3, n3, r3, o2) {
              if (!(this instanceof ji)) return new ji(e4, t3, n3, r3, o2);
              null == n3 && (n3 = 0), _i.call(this, [new Ei([new Yt("", null)])]), this.first = n3, this.scrollTop = this.scrollLeft = 0, this.cantEdit = false, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n3;
              var i2 = ot(n3, 0);
              this.sel = To(i2), this.history = new Uo(null), this.id = ++Ni, this.modeOption = t3, this.lineSep = r3, this.direction = "rtl" == o2 ? "rtl" : "ltr", this.extend = false, "string" == typeof e4 && (e4 = this.splitLines(e4)), zo(this, { from: i2, to: i2, text: e4 }), ii(this, To(i2), $);
            };
            ji.prototype = te(_i.prototype, { constructor: ji, iter: function(e4, t3, n3) {
              n3 ? this.iterN(e4 - this.first, t3 - e4, n3) : this.iterN(this.first, this.first + this.size, e4);
            }, insert: function(e4, t3) {
              for (var n3 = 0, r3 = 0; r3 < t3.length; ++r3) n3 += t3[r3].height;
              this.insertInner(e4 - this.first, t3, n3);
            }, remove: function(e4, t3) {
              this.removeInner(e4 - this.first, t3);
            }, getValue: function(e4) {
              var t3 = Xe(this, this.first, this.first + this.size);
              return false === e4 ? t3 : t3.join(e4 || this.lineSeparator());
            }, setValue: ao(function(e4) {
              var t3 = ot(this.first, 0), n3 = this.first + this.size - 1;
              mi(this, { from: t3, to: ot(n3, Ye(this, n3).text.length), text: this.splitLines(e4), origin: "setValue", full: true }, true), this.cm && jr(this.cm, 0, 0), ii(this, To(t3), $);
            }), replaceRange: function(e4, t3, n3, r3) {
              bi(this, e4, t3 = ft(this, t3), n3 = n3 ? ft(this, n3) : t3, r3);
            }, getRange: function(e4, t3, n3) {
              var r3 = Je(this, ft(this, e4), ft(this, t3));
              return false === n3 ? r3 : "" === n3 ? r3.join("") : r3.join(n3 || this.lineSeparator());
            }, getLine: function(e4) {
              var t3 = this.getLineHandle(e4);
              return t3 && t3.text;
            }, getLineHandle: function(e4) {
              if (nt(this, e4)) return Ye(this, e4);
            }, getLineNumber: function(e4) {
              return et(e4);
            }, getLineHandleVisualStart: function(e4) {
              return "number" == typeof e4 && (e4 = Ye(this, e4)), Ht(e4);
            }, lineCount: function() {
              return this.size;
            }, firstLine: function() {
              return this.first;
            }, lastLine: function() {
              return this.first + this.size - 1;
            }, clipPos: function(e4) {
              return ft(this, e4);
            }, getCursor: function(e4) {
              var t3 = this.sel.primary();
              return null == e4 || "head" == e4 ? t3.head : "anchor" == e4 ? t3.anchor : "end" == e4 || "to" == e4 || false === e4 ? t3.to() : t3.from();
            }, listSelections: function() {
              return this.sel.ranges;
            }, somethingSelected: function() {
              return this.sel.somethingSelected();
            }, setCursor: ao(function(e4, t3, n3) {
              ri(this, ft(this, "number" == typeof e4 ? ot(e4, t3 || 0) : e4), null, n3);
            }), setSelection: ao(function(e4, t3, n3) {
              ri(this, ft(this, e4), ft(this, t3 || e4), n3);
            }), extendSelection: ao(function(e4, t3, n3) {
              ei(this, ft(this, e4), t3 && ft(this, t3), n3);
            }), extendSelections: ao(function(e4, t3) {
              ti(this, dt(this, e4), t3);
            }), extendSelectionsBy: ao(function(e4, t3) {
              ti(this, dt(this, Q(this.sel.ranges, e4)), t3);
            }), setSelections: ao(function(e4, t3, n3) {
              if (e4.length) {
                for (var r3 = [], o2 = 0; o2 < e4.length; o2++) r3[o2] = new Bo(ft(this, e4[o2].anchor), ft(this, e4[o2].head || e4[o2].anchor));
                null == t3 && (t3 = Math.min(e4.length - 1, this.sel.primIndex)), ii(this, Oo(this.cm, r3, t3), n3);
              }
            }), addSelection: ao(function(e4, t3, n3) {
              var r3 = this.sel.ranges.slice(0);
              r3.push(new Bo(ft(this, e4), ft(this, t3 || e4))), ii(this, Oo(this.cm, r3, r3.length - 1), n3);
            }), getSelection: function(e4) {
              for (var t3, n3 = this.sel.ranges, r3 = 0; r3 < n3.length; r3++) {
                var o2 = Je(this, n3[r3].from(), n3[r3].to());
                t3 = t3 ? t3.concat(o2) : o2;
              }
              return false === e4 ? t3 : t3.join(e4 || this.lineSeparator());
            }, getSelections: function(e4) {
              for (var t3 = [], n3 = this.sel.ranges, r3 = 0; r3 < n3.length; r3++) {
                var o2 = Je(this, n3[r3].from(), n3[r3].to());
                false !== e4 && (o2 = o2.join(e4 || this.lineSeparator())), t3[r3] = o2;
              }
              return t3;
            }, replaceSelection: function(e4, t3, n3) {
              for (var r3 = [], o2 = 0; o2 < this.sel.ranges.length; o2++) r3[o2] = e4;
              this.replaceSelections(r3, t3, n3 || "+input");
            }, replaceSelections: ao(function(e4, t3, n3) {
              for (var r3 = [], o2 = this.sel, i2 = 0; i2 < o2.ranges.length; i2++) {
                var a2 = o2.ranges[i2];
                r3[i2] = { from: a2.from(), to: a2.to(), text: this.splitLines(e4[i2]), origin: n3 };
              }
              for (var s2 = t3 && "end" != t3 && function(e5, t4, n4) {
                for (var r4 = [], o3 = ot(e5.first, 0), i3 = o3, a3 = 0; a3 < t4.length; a3++) {
                  var s3 = t4[a3], l3 = No(s3.from, o3, i3), c2 = No(Lo(s3), o3, i3);
                  if (o3 = s3.to, i3 = c2, "around" == n4) {
                    var u2 = e5.sel.ranges[a3], f2 = it(u2.head, u2.anchor) < 0;
                    r4[a3] = new Bo(f2 ? c2 : l3, f2 ? l3 : c2);
                  } else r4[a3] = new Bo(l3, l3);
                }
                return new Mo(r4, e5.sel.primIndex);
              }(this, r3, t3), l2 = r3.length - 1; l2 >= 0; l2--) mi(this, r3[l2]);
              s2 ? oi(this, s2) : this.cm && Nr(this.cm);
            }), undo: ao(function() {
              vi(this, "undo");
            }), redo: ao(function() {
              vi(this, "redo");
            }), undoSelection: ao(function() {
              vi(this, "undo", true);
            }), redoSelection: ao(function() {
              vi(this, "redo", true);
            }), setExtending: function(e4) {
              this.extend = e4;
            }, getExtending: function() {
              return this.extend;
            }, historySize: function() {
              for (var e4 = this.history, t3 = 0, n3 = 0, r3 = 0; r3 < e4.done.length; r3++) e4.done[r3].ranges || ++t3;
              for (var o2 = 0; o2 < e4.undone.length; o2++) e4.undone[o2].ranges || ++n3;
              return { undo: t3, redo: n3 };
            }, clearHistory: function() {
              var e4 = this;
              this.history = new Uo(this.history), Ro(this, function(t3) {
                return t3.history = e4.history;
              }, true);
            }, markClean: function() {
              this.cleanGeneration = this.changeGeneration(true);
            }, changeGeneration: function(e4) {
              return e4 && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
            }, isClean: function(e4) {
              return this.history.generation == (e4 || this.cleanGeneration);
            }, getHistory: function() {
              return { done: Xo(this.history.done), undone: Xo(this.history.undone) };
            }, setHistory: function(e4) {
              var t3 = this.history = new Uo(this.history);
              t3.done = Xo(e4.done.slice(0), null, true), t3.undone = Xo(e4.undone.slice(0), null, true);
            }, setGutterMarker: ao(function(e4, t3, n3) {
              return ki(this, e4, "gutter", function(e5) {
                var r3 = e5.gutterMarkers || (e5.gutterMarkers = {});
                return r3[t3] = n3, !n3 && ie(r3) && (e5.gutterMarkers = null), true;
              });
            }), clearGutter: ao(function(e4) {
              var t3 = this;
              this.iter(function(n3) {
                n3.gutterMarkers && n3.gutterMarkers[e4] && ki(t3, n3, "gutter", function() {
                  return n3.gutterMarkers[e4] = null, ie(n3.gutterMarkers) && (n3.gutterMarkers = null), true;
                });
              });
            }), lineInfo: function(e4) {
              var t3;
              if ("number" == typeof e4) {
                if (!nt(this, e4)) return null;
                if (t3 = e4, !(e4 = Ye(this, e4))) return null;
              } else if (null == (t3 = et(e4))) return null;
              return { line: t3, handle: e4, text: e4.text, gutterMarkers: e4.gutterMarkers, textClass: e4.textClass, bgClass: e4.bgClass, wrapClass: e4.wrapClass, widgets: e4.widgets };
            }, addLineClass: ao(function(e4, t3, n3) {
              return ki(this, e4, "gutter" == t3 ? "gutter" : "class", function(e5) {
                var r3 = "text" == t3 ? "textClass" : "background" == t3 ? "bgClass" : "gutter" == t3 ? "gutterClass" : "wrapClass";
                if (e5[r3]) {
                  if (E(n3).test(e5[r3])) return false;
                  e5[r3] += " " + n3;
                } else e5[r3] = n3;
                return true;
              });
            }), removeLineClass: ao(function(e4, t3, n3) {
              return ki(this, e4, "gutter" == t3 ? "gutter" : "class", function(e5) {
                var r3 = "text" == t3 ? "textClass" : "background" == t3 ? "bgClass" : "gutter" == t3 ? "gutterClass" : "wrapClass", o2 = e5[r3];
                if (!o2) return false;
                if (null == n3) e5[r3] = null;
                else {
                  var i2 = o2.match(E(n3));
                  if (!i2) return false;
                  var a2 = i2.index + i2[0].length;
                  e5[r3] = o2.slice(0, i2.index) + (i2.index && a2 != o2.length ? " " : "") + o2.slice(a2) || null;
                }
                return true;
              });
            }), addLineWidget: ao(function(e4, t3, n3) {
              return function(e5, t4, n4, r3) {
                var o2 = new Si(e5, n4, r3), i2 = e5.cm;
                return i2 && o2.noHScroll && (i2.display.alignWidgets = true), ki(e5, t4, "widget", function(t5) {
                  var n5 = t5.widgets || (t5.widgets = []);
                  if (null == o2.insertAt ? n5.push(o2) : n5.splice(Math.min(n5.length, Math.max(0, o2.insertAt)), 0, o2), o2.line = t5, i2 && !Gt(e5, t5)) {
                    var r4 = qt(t5) < e5.scrollTop;
                    Qe(t5, t5.height + En(o2)), r4 && Pr(i2, o2.height), i2.curOp.forceUpdate = true;
                  }
                  return true;
                }), i2 && dn(i2, "lineWidgetAdded", i2, o2, "number" == typeof t4 ? t4 : et(t4)), o2;
              }(this, e4, t3, n3);
            }), removeLineWidget: function(e4) {
              e4.clear();
            }, markText: function(e4, t3, n3) {
              return Ti(this, ft(this, e4), ft(this, t3), n3, n3 && n3.type || "range");
            }, setBookmark: function(e4, t3) {
              var n3 = { replacedWith: t3 && (null == t3.nodeType ? t3.widget : t3), insertLeft: t3 && t3.insertLeft, clearWhenEmpty: false, shared: t3 && t3.shared, handleMouseEvents: t3 && t3.handleMouseEvents };
              return Ti(this, e4 = ft(this, e4), e4, n3, "bookmark");
            }, findMarksAt: function(e4) {
              var t3 = [], n3 = Ye(this, (e4 = ft(this, e4)).line).markedSpans;
              if (n3) for (var r3 = 0; r3 < n3.length; ++r3) {
                var o2 = n3[r3];
                (null == o2.from || o2.from <= e4.ch) && (null == o2.to || o2.to >= e4.ch) && t3.push(o2.marker.parent || o2.marker);
              }
              return t3;
            }, findMarks: function(e4, t3, n3) {
              e4 = ft(this, e4), t3 = ft(this, t3);
              var r3 = [], o2 = e4.line;
              return this.iter(e4.line, t3.line + 1, function(i2) {
                var a2 = i2.markedSpans;
                if (a2) for (var s2 = 0; s2 < a2.length; s2++) {
                  var l2 = a2[s2];
                  null != l2.to && o2 == e4.line && e4.ch >= l2.to || null == l2.from && o2 != e4.line || null != l2.from && o2 == t3.line && l2.from >= t3.ch || n3 && !n3(l2.marker) || r3.push(l2.marker.parent || l2.marker);
                }
                ++o2;
              }), r3;
            }, getAllMarks: function() {
              var e4 = [];
              return this.iter(function(t3) {
                var n3 = t3.markedSpans;
                if (n3) for (var r3 = 0; r3 < n3.length; ++r3) null != n3[r3].from && e4.push(n3[r3].marker);
              }), e4;
            }, posFromIndex: function(e4) {
              var t3, n3 = this.first, r3 = this.lineSeparator().length;
              return this.iter(function(o2) {
                var i2 = o2.text.length + r3;
                if (i2 > e4) return t3 = e4, true;
                e4 -= i2, ++n3;
              }), ft(this, ot(n3, t3));
            }, indexFromPos: function(e4) {
              var t3 = (e4 = ft(this, e4)).ch;
              if (e4.line < this.first || e4.ch < 0) return 0;
              var n3 = this.lineSeparator().length;
              return this.iter(this.first, e4.line, function(e5) {
                t3 += e5.text.length + n3;
              }), t3;
            }, copy: function(e4) {
              var t3 = new ji(Xe(this, this.first, this.first + this.size), this.modeOption, this.first, this.lineSep, this.direction);
              return t3.scrollTop = this.scrollTop, t3.scrollLeft = this.scrollLeft, t3.sel = this.sel, t3.extend = false, e4 && (t3.history.undoDepth = this.history.undoDepth, t3.setHistory(this.getHistory())), t3;
            }, linkedDoc: function(e4) {
              e4 || (e4 = {});
              var t3 = this.first, n3 = this.first + this.size;
              null != e4.from && e4.from > t3 && (t3 = e4.from), null != e4.to && e4.to < n3 && (n3 = e4.to);
              var r3 = new ji(Xe(this, t3, n3), e4.mode || this.modeOption, t3, this.lineSep, this.direction);
              return e4.sharedHist && (r3.history = this.history), (this.linked || (this.linked = [])).push({ doc: r3, sharedHist: e4.sharedHist }), r3.linked = [{ doc: this, isParent: true, sharedHist: e4.sharedHist }], function(e5, t4) {
                for (var n4 = 0; n4 < t4.length; n4++) {
                  var r4 = t4[n4], o2 = r4.find(), i2 = e5.clipPos(o2.from), a2 = e5.clipPos(o2.to);
                  if (it(i2, a2)) {
                    var s2 = Ti(e5, i2, a2, r4.primary, r4.primary.type);
                    r4.markers.push(s2), s2.parent = r4;
                  }
                }
              }(r3, Fi(this)), r3;
            }, unlinkDoc: function(e4) {
              if (e4 instanceof La && (e4 = e4.doc), this.linked) {
                for (var t3 = 0; t3 < this.linked.length; ++t3) if (this.linked[t3].doc == e4) {
                  this.linked.splice(t3, 1), e4.unlinkDoc(this), Pi(Fi(this));
                  break;
                }
              }
              if (e4.history == this.history) {
                var n3 = [e4.id];
                Ro(e4, function(e5) {
                  return n3.push(e5.id);
                }, true), e4.history = new Uo(null), e4.history.done = Xo(this.history.done, n3), e4.history.undone = Xo(this.history.undone, n3);
              }
            }, iterLinkedDocs: function(e4) {
              Ro(this, e4);
            }, getMode: function() {
              return this.mode;
            }, getEditor: function() {
              return this.cm;
            }, splitLines: function(e4) {
              return this.lineSep ? e4.split(this.lineSep) : Ne(e4);
            }, lineSeparator: function() {
              return this.lineSep || "\n";
            }, setDirection: ao(function(e4) {
              var t3;
              "rtl" != e4 && (e4 = "ltr"), e4 != this.direction && (this.direction = e4, this.iter(function(e5) {
                return e5.order = null;
              }), this.cm && ro(t3 = this.cm, function() {
                Ho(t3), mr(t3);
              }));
            }) }), ji.prototype.eachLine = ji.prototype.iter;
            var Ii = 0;
            function Di(e4) {
              var t3 = this;
              if (zi(t3), !ye(t3, e4) && !_n(t3.display, e4)) {
                we(e4), a && (Ii = +/* @__PURE__ */ new Date());
                var n3 = pr(t3, e4, true), r3 = e4.dataTransfer.files;
                if (n3 && !t3.isReadOnly()) if (r3 && r3.length && window.FileReader && window.File) for (var o2 = r3.length, i2 = Array(o2), s2 = 0, l2 = function() {
                  ++s2 == o2 && oo(t3, function() {
                    var e5 = { from: n3 = ft(t3.doc, n3), to: n3, text: t3.doc.splitLines(i2.filter(function(e6) {
                      return null != e6;
                    }).join(t3.doc.lineSeparator())), origin: "paste" };
                    mi(t3.doc, e5), oi(t3.doc, To(ft(t3.doc, n3), ft(t3.doc, Lo(e5))));
                  })();
                }, c2 = function(e5, n4) {
                  if (t3.options.allowDropFileTypes && -1 == U(t3.options.allowDropFileTypes, e5.type)) l2();
                  else {
                    var r4 = new FileReader();
                    r4.onerror = function() {
                      return l2();
                    }, r4.onload = function() {
                      var e6 = r4.result;
                      /[\x00-\x08\x0e-\x1f]{2}/.test(e6) || (i2[n4] = e6), l2();
                    }, r4.readAsText(e5);
                  }
                }, u2 = 0; u2 < r3.length; u2++) c2(r3[u2], u2);
                else {
                  if (t3.state.draggingText && t3.doc.sel.contains(n3) > -1) return t3.state.draggingText(e4), void setTimeout(function() {
                    return t3.display.input.focus();
                  }, 20);
                  try {
                    var f2 = e4.dataTransfer.getData("Text");
                    if (f2) {
                      var d2;
                      if (t3.state.draggingText && !t3.state.draggingText.copy && (d2 = t3.listSelections()), ai(t3.doc, To(n3, n3)), d2) for (var p2 = 0; p2 < d2.length; ++p2) bi(t3.doc, "", d2[p2].anchor, d2[p2].head, "drag");
                      t3.replaceSelection(f2, "around", "paste"), t3.display.input.focus();
                    }
                  } catch (e5) {
                  }
                }
              }
            }
            function zi(e4) {
              e4.display.dragCursor && (e4.display.lineSpace.removeChild(e4.display.dragCursor), e4.display.dragCursor = null);
            }
            function Ri(e4) {
              if (document.getElementsByClassName) {
                for (var t3 = document.getElementsByClassName("CodeMirror"), n3 = [], r3 = 0; r3 < t3.length; r3++) {
                  var o2 = t3[r3].CodeMirror;
                  o2 && n3.push(o2);
                }
                n3.length && n3[0].operation(function() {
                  for (var t4 = 0; t4 < n3.length; t4++) e4(n3[t4]);
                });
              }
            }
            var Wi = false;
            function Hi() {
              var e4;
              Wi || (me(window, "resize", function() {
                null == e4 && (e4 = setTimeout(function() {
                  e4 = null, Ri(Ui);
                }, 100));
              }), me(window, "blur", function() {
                return Ri(Br);
              }), Wi = true);
            }
            function Ui(e4) {
              var t3 = e4.display;
              t3.cachedCharWidth = t3.cachedTextHeight = t3.cachedPaddingH = null, t3.scrollbarsClipped = false, e4.setSize();
            }
            for (var Vi = { 3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert", 46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod", 106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 145: "ScrollLock", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'", 224: "Mod", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete", 63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert" }, Gi = 0; Gi < 10; Gi++) Vi[Gi + 48] = Vi[Gi + 96] = String(Gi);
            for (var $i = 65; $i <= 90; $i++) Vi[$i] = String.fromCharCode($i);
            for (var qi = 1; qi <= 12; qi++) Vi[qi + 111] = Vi[qi + 63235] = "F" + qi;
            var Ki = {};
            function Zi(e4) {
              var t3, n3, r3, o2, i2 = e4.split(/-(?!$)/);
              e4 = i2[i2.length - 1];
              for (var a2 = 0; a2 < i2.length - 1; a2++) {
                var s2 = i2[a2];
                if (/^(cmd|meta|m)$/i.test(s2)) o2 = true;
                else if (/^a(lt)?$/i.test(s2)) t3 = true;
                else if (/^(c|ctrl|control)$/i.test(s2)) n3 = true;
                else {
                  if (!/^s(hift)?$/i.test(s2)) throw new Error("Unrecognized modifier name: " + s2);
                  r3 = true;
                }
              }
              return t3 && (e4 = "Alt-" + e4), n3 && (e4 = "Ctrl-" + e4), o2 && (e4 = "Cmd-" + e4), r3 && (e4 = "Shift-" + e4), e4;
            }
            function Yi(e4) {
              var t3 = {};
              for (var n3 in e4) if (e4.hasOwnProperty(n3)) {
                var r3 = e4[n3];
                if (/^(name|fallthrough|(de|at)tach)$/.test(n3)) continue;
                if ("..." == r3) {
                  delete e4[n3];
                  continue;
                }
                for (var o2 = Q(n3.split(" "), Zi), i2 = 0; i2 < o2.length; i2++) {
                  var a2 = void 0, s2 = void 0;
                  i2 == o2.length - 1 ? (s2 = o2.join(" "), a2 = r3) : (s2 = o2.slice(0, i2 + 1).join(" "), a2 = "...");
                  var l2 = t3[s2];
                  if (l2) {
                    if (l2 != a2) throw new Error("Inconsistent bindings for " + s2);
                  } else t3[s2] = a2;
                }
                delete e4[n3];
              }
              for (var c2 in t3) e4[c2] = t3[c2];
              return e4;
            }
            function Ji(e4, t3, n3, r3) {
              var o2 = (t3 = ta(t3)).call ? t3.call(e4, r3) : t3[e4];
              if (false === o2) return "nothing";
              if ("..." === o2) return "multi";
              if (null != o2 && n3(o2)) return "handled";
              if (t3.fallthrough) {
                if ("[object Array]" != Object.prototype.toString.call(t3.fallthrough)) return Ji(e4, t3.fallthrough, n3, r3);
                for (var i2 = 0; i2 < t3.fallthrough.length; i2++) {
                  var a2 = Ji(e4, t3.fallthrough[i2], n3, r3);
                  if (a2) return a2;
                }
              }
            }
            function Xi(e4) {
              var t3 = "string" == typeof e4 ? e4 : Vi[e4.keyCode];
              return "Ctrl" == t3 || "Alt" == t3 || "Shift" == t3 || "Mod" == t3;
            }
            function Qi(e4, t3, n3) {
              var r3 = e4;
              return t3.altKey && "Alt" != r3 && (e4 = "Alt-" + e4), (w ? t3.metaKey : t3.ctrlKey) && "Ctrl" != r3 && (e4 = "Ctrl-" + e4), (w ? t3.ctrlKey : t3.metaKey) && "Mod" != r3 && (e4 = "Cmd-" + e4), !n3 && t3.shiftKey && "Shift" != r3 && (e4 = "Shift-" + e4), e4;
            }
            function ea(e4, t3) {
              if (d && 34 == e4.keyCode && e4.char) return false;
              var n3 = Vi[e4.keyCode];
              return null != n3 && !e4.altGraphKey && (3 == e4.keyCode && e4.code && (n3 = e4.code), Qi(n3, e4, t3));
            }
            function ta(e4) {
              return "string" == typeof e4 ? Ki[e4] : e4;
            }
            function na(e4, t3) {
              for (var n3 = e4.doc.sel.ranges, r3 = [], o2 = 0; o2 < n3.length; o2++) {
                for (var i2 = t3(n3[o2]); r3.length && it(i2.from, X(r3).to) <= 0; ) {
                  var a2 = r3.pop();
                  if (it(a2.from, i2.from) < 0) {
                    i2.from = a2.from;
                    break;
                  }
                }
                r3.push(i2);
              }
              ro(e4, function() {
                for (var t4 = r3.length - 1; t4 >= 0; t4--) bi(e4.doc, "", r3[t4].from, r3[t4].to, "+delete");
                Nr(e4);
              });
            }
            function ra(e4, t3, n3) {
              var r3 = le(e4.text, t3 + n3, n3);
              return r3 < 0 || r3 > e4.text.length ? null : r3;
            }
            function oa(e4, t3, n3) {
              var r3 = ra(e4, t3.ch, n3);
              return null == r3 ? null : new ot(t3.line, r3, n3 < 0 ? "after" : "before");
            }
            function ia(e4, t3, n3, r3, o2) {
              if (e4) {
                "rtl" == t3.doc.direction && (o2 = -o2);
                var i2 = pe(n3, t3.doc.direction);
                if (i2) {
                  var a2, s2 = o2 < 0 ? X(i2) : i2[0], l2 = o2 < 0 == (1 == s2.level) ? "after" : "before";
                  if (s2.level > 0 || "rtl" == t3.doc.direction) {
                    var c2 = jn(t3, n3);
                    a2 = o2 < 0 ? n3.text.length - 1 : 0;
                    var u2 = In(t3, c2, a2).top;
                    a2 = ce(function(e5) {
                      return In(t3, c2, e5).top == u2;
                    }, o2 < 0 == (1 == s2.level) ? s2.from : s2.to - 1, a2), "before" == l2 && (a2 = ra(n3, a2, 1));
                  } else a2 = o2 < 0 ? s2.to : s2.from;
                  return new ot(r3, a2, l2);
                }
              }
              return new ot(r3, o2 < 0 ? n3.text.length : 0, o2 < 0 ? "before" : "after");
            }
            Ki.basic = { Left: "goCharLeft", Right: "goCharRight", Up: "goLineUp", Down: "goLineDown", End: "goLineEnd", Home: "goLineStartSmart", PageUp: "goPageUp", PageDown: "goPageDown", Delete: "delCharAfter", Backspace: "delCharBefore", "Shift-Backspace": "delCharBefore", Tab: "defaultTab", "Shift-Tab": "indentAuto", Enter: "newlineAndIndent", Insert: "toggleOverwrite", Esc: "singleSelection" }, Ki.pcDefault = { "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo", "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown", "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd", "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find", "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll", "Ctrl-[": "indentLess", "Ctrl-]": "indentMore", "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection", fallthrough: "basic" }, Ki.emacsy = { "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd", "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars", "Ctrl-O": "openLine" }, Ki.macDefault = { "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo", "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft", "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore", "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find", "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll", "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight", "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd", fallthrough: ["basic", "emacsy"] }, Ki.default = y ? Ki.macDefault : Ki.pcDefault;
            var aa = { selectAll: pi, singleSelection: function(e4) {
              return e4.setSelection(e4.getCursor("anchor"), e4.getCursor("head"), $);
            }, killLine: function(e4) {
              return na(e4, function(t3) {
                if (t3.empty()) {
                  var n3 = Ye(e4.doc, t3.head.line).text.length;
                  return t3.head.ch == n3 && t3.head.line < e4.lastLine() ? { from: t3.head, to: ot(t3.head.line + 1, 0) } : { from: t3.head, to: ot(t3.head.line, n3) };
                }
                return { from: t3.from(), to: t3.to() };
              });
            }, deleteLine: function(e4) {
              return na(e4, function(t3) {
                return { from: ot(t3.from().line, 0), to: ft(e4.doc, ot(t3.to().line + 1, 0)) };
              });
            }, delLineLeft: function(e4) {
              return na(e4, function(e5) {
                return { from: ot(e5.from().line, 0), to: e5.from() };
              });
            }, delWrappedLineLeft: function(e4) {
              return na(e4, function(t3) {
                var n3 = e4.charCoords(t3.head, "div").top + 5;
                return { from: e4.coordsChar({ left: 0, top: n3 }, "div"), to: t3.from() };
              });
            }, delWrappedLineRight: function(e4) {
              return na(e4, function(t3) {
                var n3 = e4.charCoords(t3.head, "div").top + 5, r3 = e4.coordsChar({ left: e4.display.lineDiv.offsetWidth + 100, top: n3 }, "div");
                return { from: t3.from(), to: r3 };
              });
            }, undo: function(e4) {
              return e4.undo();
            }, redo: function(e4) {
              return e4.redo();
            }, undoSelection: function(e4) {
              return e4.undoSelection();
            }, redoSelection: function(e4) {
              return e4.redoSelection();
            }, goDocStart: function(e4) {
              return e4.extendSelection(ot(e4.firstLine(), 0));
            }, goDocEnd: function(e4) {
              return e4.extendSelection(ot(e4.lastLine()));
            }, goLineStart: function(e4) {
              return e4.extendSelectionsBy(function(t3) {
                return sa(e4, t3.head.line);
              }, { origin: "+move", bias: 1 });
            }, goLineStartSmart: function(e4) {
              return e4.extendSelectionsBy(function(t3) {
                return la(e4, t3.head);
              }, { origin: "+move", bias: 1 });
            }, goLineEnd: function(e4) {
              return e4.extendSelectionsBy(function(t3) {
                return function(e5, t4) {
                  var n3 = Ye(e5.doc, t4), r3 = function(e6) {
                    for (var t5; t5 = zt(e6); ) e6 = t5.find(1, true).line;
                    return e6;
                  }(n3);
                  return r3 != n3 && (t4 = et(r3)), ia(true, e5, n3, t4, -1);
                }(e4, t3.head.line);
              }, { origin: "+move", bias: -1 });
            }, goLineRight: function(e4) {
              return e4.extendSelectionsBy(function(t3) {
                var n3 = e4.cursorCoords(t3.head, "div").top + 5;
                return e4.coordsChar({ left: e4.display.lineDiv.offsetWidth + 100, top: n3 }, "div");
              }, K);
            }, goLineLeft: function(e4) {
              return e4.extendSelectionsBy(function(t3) {
                var n3 = e4.cursorCoords(t3.head, "div").top + 5;
                return e4.coordsChar({ left: 0, top: n3 }, "div");
              }, K);
            }, goLineLeftSmart: function(e4) {
              return e4.extendSelectionsBy(function(t3) {
                var n3 = e4.cursorCoords(t3.head, "div").top + 5, r3 = e4.coordsChar({ left: 0, top: n3 }, "div");
                return r3.ch < e4.getLine(r3.line).search(/\S/) ? la(e4, t3.head) : r3;
              }, K);
            }, goLineUp: function(e4) {
              return e4.moveV(-1, "line");
            }, goLineDown: function(e4) {
              return e4.moveV(1, "line");
            }, goPageUp: function(e4) {
              return e4.moveV(-1, "page");
            }, goPageDown: function(e4) {
              return e4.moveV(1, "page");
            }, goCharLeft: function(e4) {
              return e4.moveH(-1, "char");
            }, goCharRight: function(e4) {
              return e4.moveH(1, "char");
            }, goColumnLeft: function(e4) {
              return e4.moveH(-1, "column");
            }, goColumnRight: function(e4) {
              return e4.moveH(1, "column");
            }, goWordLeft: function(e4) {
              return e4.moveH(-1, "word");
            }, goGroupRight: function(e4) {
              return e4.moveH(1, "group");
            }, goGroupLeft: function(e4) {
              return e4.moveH(-1, "group");
            }, goWordRight: function(e4) {
              return e4.moveH(1, "word");
            }, delCharBefore: function(e4) {
              return e4.deleteH(-1, "codepoint");
            }, delCharAfter: function(e4) {
              return e4.deleteH(1, "char");
            }, delWordBefore: function(e4) {
              return e4.deleteH(-1, "word");
            }, delWordAfter: function(e4) {
              return e4.deleteH(1, "word");
            }, delGroupBefore: function(e4) {
              return e4.deleteH(-1, "group");
            }, delGroupAfter: function(e4) {
              return e4.deleteH(1, "group");
            }, indentAuto: function(e4) {
              return e4.indentSelection("smart");
            }, indentMore: function(e4) {
              return e4.indentSelection("add");
            }, indentLess: function(e4) {
              return e4.indentSelection("subtract");
            }, insertTab: function(e4) {
              return e4.replaceSelection("	");
            }, insertSoftTab: function(e4) {
              for (var t3 = [], n3 = e4.listSelections(), r3 = e4.options.tabSize, o2 = 0; o2 < n3.length; o2++) {
                var i2 = n3[o2].from(), a2 = W(e4.getLine(i2.line), i2.ch, r3);
                t3.push(J(r3 - a2 % r3));
              }
              e4.replaceSelections(t3);
            }, defaultTab: function(e4) {
              e4.somethingSelected() ? e4.indentSelection("add") : e4.execCommand("insertTab");
            }, transposeChars: function(e4) {
              return ro(e4, function() {
                for (var t3 = e4.listSelections(), n3 = [], r3 = 0; r3 < t3.length; r3++) if (t3[r3].empty()) {
                  var o2 = t3[r3].head, i2 = Ye(e4.doc, o2.line).text;
                  if (i2) {
                    if (o2.ch == i2.length && (o2 = new ot(o2.line, o2.ch - 1)), o2.ch > 0) o2 = new ot(o2.line, o2.ch + 1), e4.replaceRange(i2.charAt(o2.ch - 1) + i2.charAt(o2.ch - 2), ot(o2.line, o2.ch - 2), o2, "+transpose");
                    else if (o2.line > e4.doc.first) {
                      var a2 = Ye(e4.doc, o2.line - 1).text;
                      a2 && (o2 = new ot(o2.line, 1), e4.replaceRange(i2.charAt(0) + e4.doc.lineSeparator() + a2.charAt(a2.length - 1), ot(o2.line - 1, a2.length - 1), o2, "+transpose"));
                    }
                  }
                  n3.push(new Bo(o2, o2));
                }
                e4.setSelections(n3);
              });
            }, newlineAndIndent: function(e4) {
              return ro(e4, function() {
                for (var t3 = e4.listSelections(), n3 = t3.length - 1; n3 >= 0; n3--) e4.replaceRange(e4.doc.lineSeparator(), t3[n3].anchor, t3[n3].head, "+input");
                t3 = e4.listSelections();
                for (var r3 = 0; r3 < t3.length; r3++) e4.indentLine(t3[r3].from().line, null, true);
                Nr(e4);
              });
            }, openLine: function(e4) {
              return e4.replaceSelection("\n", "start");
            }, toggleOverwrite: function(e4) {
              return e4.toggleOverwrite();
            } };
            function sa(e4, t3) {
              var n3 = Ye(e4.doc, t3), r3 = Ht(n3);
              return r3 != n3 && (t3 = et(r3)), ia(true, e4, r3, t3, 1);
            }
            function la(e4, t3) {
              var n3 = sa(e4, t3.line), r3 = Ye(e4.doc, n3.line), o2 = pe(r3, e4.doc.direction);
              if (!o2 || 0 == o2[0].level) {
                var i2 = Math.max(n3.ch, r3.text.search(/\S/)), a2 = t3.line == n3.line && t3.ch <= i2 && t3.ch;
                return ot(n3.line, a2 ? 0 : i2, n3.sticky);
              }
              return n3;
            }
            function ca(e4, t3, n3) {
              if ("string" == typeof t3 && !(t3 = aa[t3])) return false;
              e4.display.input.ensurePolled();
              var r3 = e4.display.shift, o2 = false;
              try {
                e4.isReadOnly() && (e4.state.suppressEdits = true), n3 && (e4.display.shift = false), o2 = t3(e4) != G;
              } finally {
                e4.display.shift = r3, e4.state.suppressEdits = false;
              }
              return o2;
            }
            var ua = new H();
            function fa(e4, t3, n3, r3) {
              var o2 = e4.state.keySeq;
              if (o2) {
                if (Xi(t3)) return "handled";
                if (/\'$/.test(t3) ? e4.state.keySeq = null : ua.set(50, function() {
                  e4.state.keySeq == o2 && (e4.state.keySeq = null, e4.display.input.reset());
                }), da(e4, o2 + " " + t3, n3, r3)) return true;
              }
              return da(e4, t3, n3, r3);
            }
            function da(e4, t3, n3, r3) {
              var o2 = function(e5, t4, n4) {
                for (var r4 = 0; r4 < e5.state.keyMaps.length; r4++) {
                  var o3 = Ji(t4, e5.state.keyMaps[r4], n4, e5);
                  if (o3) return o3;
                }
                return e5.options.extraKeys && Ji(t4, e5.options.extraKeys, n4, e5) || Ji(t4, e5.options.keyMap, n4, e5);
              }(e4, t3, r3);
              return "multi" == o2 && (e4.state.keySeq = t3), "handled" == o2 && dn(e4, "keyHandled", e4, t3, n3), "handled" != o2 && "multi" != o2 || (we(n3), Er(e4)), !!o2;
            }
            function pa(e4, t3) {
              var n3 = ea(t3, true);
              return !!n3 && (t3.shiftKey && !e4.state.keySeq ? fa(e4, "Shift-" + n3, t3, function(t4) {
                return ca(e4, t4, true);
              }) || fa(e4, n3, t3, function(t4) {
                if ("string" == typeof t4 ? /^go[A-Z]/.test(t4) : t4.motion) return ca(e4, t4);
              }) : fa(e4, n3, t3, function(t4) {
                return ca(e4, t4);
              }));
            }
            var ha = null;
            function ma(e4) {
              var t3 = this;
              if (!(e4.target && e4.target != t3.display.input.getField() || (t3.curOp.focus = F(I(t3)), ye(t3, e4)))) {
                a && s < 11 && 27 == e4.keyCode && (e4.returnValue = false);
                var r3 = e4.keyCode;
                t3.display.shift = 16 == r3 || e4.shiftKey;
                var o2 = pa(t3, e4);
                d && (ha = o2 ? r3 : null, o2 || 88 != r3 || Ie || !(y ? e4.metaKey : e4.ctrlKey) || t3.replaceSelection("", null, "cut")), n2 && !y && !o2 && 46 == r3 && e4.shiftKey && !e4.ctrlKey && document.execCommand && document.execCommand("cut"), 18 != r3 || /\bCodeMirror-crosshair\b/.test(t3.display.lineDiv.className) || function(e5) {
                  var t4 = e5.display.lineDiv;
                  function n3(e6) {
                    18 != e6.keyCode && e6.altKey || (S(t4, "CodeMirror-crosshair"), ve(document, "keyup", n3), ve(document, "mouseover", n3));
                  }
                  P(t4, "CodeMirror-crosshair"), me(document, "keyup", n3), me(document, "mouseover", n3);
                }(t3);
              }
            }
            function ga(e4) {
              16 == e4.keyCode && (this.doc.sel.shift = false), ye(this, e4);
            }
            function va(e4) {
              var t3 = this;
              if (!(e4.target && e4.target != t3.display.input.getField() || _n(t3.display, e4) || ye(t3, e4) || e4.ctrlKey && !e4.altKey || y && e4.metaKey)) {
                var n3 = e4.keyCode, r3 = e4.charCode;
                if (d && n3 == ha) return ha = null, void we(e4);
                if (!d || e4.which && !(e4.which < 10) || !pa(t3, e4)) {
                  var o2 = String.fromCharCode(null == r3 ? n3 : r3);
                  "\b" != o2 && (function(e5, t4, n4) {
                    return fa(e5, "'" + n4 + "'", t4, function(t5) {
                      return ca(e5, t5, true);
                    });
                  }(t3, e4, o2) || t3.display.input.onKeyPress(e4));
                }
              }
            }
            var Aa, ya, ba = function(e4, t3, n3) {
              this.time = e4, this.pos = t3, this.button = n3;
            };
            function Ca(e4) {
              var t3 = this, n3 = t3.display;
              if (!(ye(t3, e4) || n3.activeTouch && n3.input.supportsTouch())) {
                if (n3.input.ensurePolled(), n3.shift = e4.shiftKey, _n(n3, e4)) l || (n3.scroller.draggable = false, setTimeout(function() {
                  return n3.scroller.draggable = true;
                }, 100));
                else if (!ka(t3, e4)) {
                  var r3 = pr(t3, e4), o2 = Me(e4), i2 = r3 ? function(e5, t4) {
                    var n4 = +/* @__PURE__ */ new Date();
                    return ya && ya.compare(n4, e5, t4) ? (Aa = ya = null, "triple") : Aa && Aa.compare(n4, e5, t4) ? (ya = new ba(n4, e5, t4), Aa = null, "double") : (Aa = new ba(n4, e5, t4), ya = null, "single");
                  }(r3, o2) : "single";
                  D(t3).focus(), 1 == o2 && t3.state.selectingText && t3.state.selectingText(e4), r3 && function(e5, t4, n4, r4, o3) {
                    var i3 = "Click";
                    return "double" == r4 ? i3 = "Double" + i3 : "triple" == r4 && (i3 = "Triple" + i3), fa(e5, Qi(i3 = (1 == t4 ? "Left" : 2 == t4 ? "Middle" : "Right") + i3, o3), o3, function(t5) {
                      if ("string" == typeof t5 && (t5 = aa[t5]), !t5) return false;
                      var r5 = false;
                      try {
                        e5.isReadOnly() && (e5.state.suppressEdits = true), r5 = t5(e5, n4) != G;
                      } finally {
                        e5.state.suppressEdits = false;
                      }
                      return r5;
                    });
                  }(t3, o2, r3, i2, e4) || (1 == o2 ? r3 ? function(e5, t4, n4, r4) {
                    a ? setTimeout(z(_r, e5), 0) : e5.curOp.focus = F(I(e5));
                    var o3, i3 = function(e6, t5, n5) {
                      var r5 = e6.getOption("configureMouse"), o4 = r5 ? r5(e6, t5, n5) : {};
                      if (null == o4.unit) {
                        var i4 = b ? n5.shiftKey && n5.metaKey : n5.altKey;
                        o4.unit = i4 ? "rectangle" : "single" == t5 ? "char" : "double" == t5 ? "word" : "line";
                      }
                      return (null == o4.extend || e6.doc.extend) && (o4.extend = e6.doc.extend || n5.shiftKey), null == o4.addNew && (o4.addNew = y ? n5.metaKey : n5.ctrlKey), null == o4.moveOnDrag && (o4.moveOnDrag = !(y ? n5.altKey : n5.ctrlKey)), o4;
                    }(e5, n4, r4), c2 = e5.doc.sel;
                    e5.options.dragDrop && Te && !e5.isReadOnly() && "single" == n4 && (o3 = c2.contains(t4)) > -1 && (it((o3 = c2.ranges[o3]).from(), t4) < 0 || t4.xRel > 0) && (it(o3.to(), t4) > 0 || t4.xRel < 0) ? function(e6, t5, n5, r5) {
                      var o4 = e6.display, i4 = false, c3 = oo(e6, function(t6) {
                        l && (o4.scroller.draggable = false), e6.state.draggingText = false, e6.state.delayingBlurEvent && (e6.hasFocus() ? e6.state.delayingBlurEvent = false : Sr(e6)), ve(o4.wrapper.ownerDocument, "mouseup", c3), ve(o4.wrapper.ownerDocument, "mousemove", u2), ve(o4.scroller, "dragstart", f2), ve(o4.scroller, "drop", c3), i4 || (we(t6), r5.addNew || ei(e6.doc, n5, null, null, r5.extend), l && !p || a && 9 == s ? setTimeout(function() {
                          o4.wrapper.ownerDocument.body.focus({ preventScroll: true }), o4.input.focus();
                        }, 20) : o4.input.focus());
                      }), u2 = function(e7) {
                        i4 = i4 || Math.abs(t5.clientX - e7.clientX) + Math.abs(t5.clientY - e7.clientY) >= 10;
                      }, f2 = function() {
                        return i4 = true;
                      };
                      l && (o4.scroller.draggable = true), e6.state.draggingText = c3, c3.copy = !r5.moveOnDrag, me(o4.wrapper.ownerDocument, "mouseup", c3), me(o4.wrapper.ownerDocument, "mousemove", u2), me(o4.scroller, "dragstart", f2), me(o4.scroller, "drop", c3), e6.state.delayingBlurEvent = true, setTimeout(function() {
                        return o4.input.focus();
                      }, 20), o4.scroller.dragDrop && o4.scroller.dragDrop();
                    }(e5, r4, t4, i3) : function(e6, t5, n5, r5) {
                      a && Sr(e6);
                      var o4 = e6.display, i4 = e6.doc;
                      we(t5);
                      var s2, l2, c3 = i4.sel, u2 = c3.ranges;
                      if (r5.addNew && !r5.extend ? (l2 = i4.sel.contains(n5), s2 = l2 > -1 ? u2[l2] : new Bo(n5, n5)) : (s2 = i4.sel.primary(), l2 = i4.sel.primIndex), "rectangle" == r5.unit) r5.addNew || (s2 = new Bo(n5, n5)), n5 = pr(e6, t5, true, true), l2 = -1;
                      else {
                        var f2 = xa(e6, n5, r5.unit);
                        s2 = r5.extend ? Qo(s2, f2.anchor, f2.head, r5.extend) : f2;
                      }
                      r5.addNew ? -1 == l2 ? (l2 = u2.length, ii(i4, Oo(e6, u2.concat([s2]), l2), { scroll: false, origin: "*mouse" })) : u2.length > 1 && u2[l2].empty() && "char" == r5.unit && !r5.extend ? (ii(i4, Oo(e6, u2.slice(0, l2).concat(u2.slice(l2 + 1)), 0), { scroll: false, origin: "*mouse" }), c3 = i4.sel) : ni(i4, l2, s2, q) : (l2 = 0, ii(i4, new Mo([s2], 0), q), c3 = i4.sel);
                      var d2 = n5;
                      function p2(t6) {
                        if (0 != it(d2, t6)) if (d2 = t6, "rectangle" == r5.unit) {
                          for (var o5 = [], a2 = e6.options.tabSize, u3 = W(Ye(i4, n5.line).text, n5.ch, a2), f3 = W(Ye(i4, t6.line).text, t6.ch, a2), p3 = Math.min(u3, f3), h3 = Math.max(u3, f3), m3 = Math.min(n5.line, t6.line), g3 = Math.min(e6.lastLine(), Math.max(n5.line, t6.line)); m3 <= g3; m3++) {
                            var v3 = Ye(i4, m3).text, A3 = Z(v3, p3, a2);
                            p3 == h3 ? o5.push(new Bo(ot(m3, A3), ot(m3, A3))) : v3.length > A3 && o5.push(new Bo(ot(m3, A3), ot(m3, Z(v3, h3, a2))));
                          }
                          o5.length || o5.push(new Bo(n5, n5)), ii(i4, Oo(e6, c3.ranges.slice(0, l2).concat(o5), l2), { origin: "*mouse", scroll: false }), e6.scrollIntoView(t6);
                        } else {
                          var y3, b2 = s2, C2 = xa(e6, t6, r5.unit), x2 = b2.anchor;
                          it(C2.anchor, x2) > 0 ? (y3 = C2.head, x2 = ct(b2.from(), C2.anchor)) : (y3 = C2.anchor, x2 = lt(b2.to(), C2.head));
                          var w2 = c3.ranges.slice(0);
                          w2[l2] = function(e7, t7) {
                            var n6 = t7.anchor, r6 = t7.head, o6 = Ye(e7.doc, n6.line);
                            if (0 == it(n6, r6) && n6.sticky == r6.sticky) return t7;
                            var i5 = pe(o6);
                            if (!i5) return t7;
                            var a3 = fe(i5, n6.ch, n6.sticky), s3 = i5[a3];
                            if (s3.from != n6.ch && s3.to != n6.ch) return t7;
                            var l3, c4 = a3 + (s3.from == n6.ch == (1 != s3.level) ? 0 : 1);
                            if (0 == c4 || c4 == i5.length) return t7;
                            if (r6.line != n6.line) l3 = (r6.line - n6.line) * ("ltr" == e7.doc.direction ? 1 : -1) > 0;
                            else {
                              var u4 = fe(i5, r6.ch, r6.sticky), f4 = u4 - a3 || (r6.ch - n6.ch) * (1 == s3.level ? -1 : 1);
                              l3 = u4 == c4 - 1 || u4 == c4 ? f4 < 0 : f4 > 0;
                            }
                            var d3 = i5[c4 + (l3 ? -1 : 0)], p4 = l3 == (1 == d3.level), h4 = p4 ? d3.from : d3.to, m4 = p4 ? "after" : "before";
                            return n6.ch == h4 && n6.sticky == m4 ? t7 : new Bo(new ot(n6.line, h4, m4), r6);
                          }(e6, new Bo(ft(i4, x2), y3)), ii(i4, Oo(e6, w2, l2), q);
                        }
                      }
                      var h2 = o4.wrapper.getBoundingClientRect(), m2 = 0;
                      function g2(t6) {
                        var n6 = ++m2, a2 = pr(e6, t6, true, "rectangle" == r5.unit);
                        if (a2) if (0 != it(a2, d2)) {
                          e6.curOp.focus = F(I(e6)), p2(a2);
                          var s3 = Lr(o4, i4);
                          (a2.line >= s3.to || a2.line < s3.from) && setTimeout(oo(e6, function() {
                            m2 == n6 && g2(t6);
                          }), 150);
                        } else {
                          var l3 = t6.clientY < h2.top ? -20 : t6.clientY > h2.bottom ? 20 : 0;
                          l3 && setTimeout(oo(e6, function() {
                            m2 == n6 && (o4.scroller.scrollTop += l3, g2(t6));
                          }), 50);
                        }
                      }
                      function v2(t6) {
                        e6.state.selectingText = false, m2 = 1 / 0, t6 && (we(t6), o4.input.focus()), ve(o4.wrapper.ownerDocument, "mousemove", A2), ve(o4.wrapper.ownerDocument, "mouseup", y2), i4.history.lastSelOrigin = null;
                      }
                      var A2 = oo(e6, function(e7) {
                        0 !== e7.buttons && Me(e7) ? g2(e7) : v2(e7);
                      }), y2 = oo(e6, v2);
                      e6.state.selectingText = y2, me(o4.wrapper.ownerDocument, "mousemove", A2), me(o4.wrapper.ownerDocument, "mouseup", y2);
                    }(e5, r4, t4, i3);
                  }(t3, r3, i2, e4) : Se(e4) == n3.scroller && we(e4) : 2 == o2 ? (r3 && ei(t3.doc, r3), setTimeout(function() {
                    return n3.input.focus();
                  }, 20)) : 3 == o2 && (k ? t3.display.input.onContextMenu(e4) : Sr(t3)));
                }
              }
            }
            function xa(e4, t3, n3) {
              if ("char" == n3) return new Bo(t3, t3);
              if ("word" == n3) return e4.findWordAt(t3);
              if ("line" == n3) return new Bo(ot(t3.line, 0), ft(e4.doc, ot(t3.line + 1, 0)));
              var r3 = n3(e4, t3);
              return new Bo(r3.from, r3.to);
            }
            function wa(e4, t3, n3, r3) {
              var o2, i2;
              if (t3.touches) o2 = t3.touches[0].clientX, i2 = t3.touches[0].clientY;
              else try {
                o2 = t3.clientX, i2 = t3.clientY;
              } catch (e5) {
                return false;
              }
              if (o2 >= Math.floor(e4.display.gutters.getBoundingClientRect().right)) return false;
              r3 && we(t3);
              var a2 = e4.display, s2 = a2.lineDiv.getBoundingClientRect();
              if (i2 > s2.bottom || !Ce(e4, n3)) return Ee(t3);
              i2 -= s2.top - a2.viewOffset;
              for (var l2 = 0; l2 < e4.display.gutterSpecs.length; ++l2) {
                var c2 = a2.gutters.childNodes[l2];
                if (c2 && c2.getBoundingClientRect().right >= o2) return Ae(e4, n3, e4, tt(e4.doc, i2), e4.display.gutterSpecs[l2].className, t3), Ee(t3);
              }
            }
            function ka(e4, t3) {
              return wa(e4, t3, "gutterClick", true);
            }
            function Ea(e4, t3) {
              _n(e4.display, t3) || function(e5, t4) {
                return !!Ce(e5, "gutterContextMenu") && wa(e5, t4, "gutterContextMenu", false);
              }(e4, t3) || ye(e4, t3, "contextmenu") || k || e4.display.input.onContextMenu(t3);
            }
            function _a(e4) {
              e4.display.wrapper.className = e4.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e4.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), Vn(e4);
            }
            ba.prototype.compare = function(e4, t3, n3) {
              return this.time + 400 > e4 && 0 == it(t3, this.pos) && n3 == this.button;
            };
            var Sa = { toString: function() {
              return "CodeMirror.Init";
            } }, Ma = {}, Ba = {};
            function Oa(e4, t3, n3) {
              if (!t3 != !(n3 && n3 != Sa)) {
                var r3 = e4.display.dragFunctions, o2 = t3 ? me : ve;
                o2(e4.display.scroller, "dragstart", r3.start), o2(e4.display.scroller, "dragenter", r3.enter), o2(e4.display.scroller, "dragover", r3.over), o2(e4.display.scroller, "dragleave", r3.leave), o2(e4.display.scroller, "drop", r3.drop);
              }
            }
            function Ta(e4) {
              e4.options.lineWrapping ? (P(e4.display.wrapper, "CodeMirror-wrap"), e4.display.sizer.style.minWidth = "", e4.display.sizerWidth = null) : (S(e4.display.wrapper, "CodeMirror-wrap"), Zt(e4)), dr(e4), mr(e4), Vn(e4), setTimeout(function() {
                return Gr(e4);
              }, 100);
            }
            function La(e4, t3) {
              var n3 = this;
              if (!(this instanceof La)) return new La(e4, t3);
              this.options = t3 = t3 ? R(t3) : {}, R(Ma, t3, false);
              var r3 = t3.value;
              "string" == typeof r3 ? r3 = new ji(r3, t3.mode, null, t3.lineSeparator, t3.direction) : t3.mode && (r3.modeOption = t3.mode), this.doc = r3;
              var o2 = new La.inputStyles[t3.inputStyle](this), i2 = this.display = new xo(e4, r3, o2, t3);
              for (var c2 in i2.wrapper.CodeMirror = this, _a(this), t3.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), Kr(this), this.state = { keyMaps: [], overlays: [], modeGen: 0, overwrite: false, delayingBlurEvent: false, focused: false, suppressEdits: false, pasteIncoming: -1, cutIncoming: -1, selectingText: false, draggingText: false, highlight: new H(), keySeq: null, specialChars: null }, t3.autofocus && !A && i2.input.focus(), a && s < 11 && setTimeout(function() {
                return n3.display.input.reset(true);
              }, 20), function(e5) {
                var t4 = e5.display;
                me(t4.scroller, "mousedown", oo(e5, Ca)), me(t4.scroller, "dblclick", a && s < 11 ? oo(e5, function(t5) {
                  if (!ye(e5, t5)) {
                    var n5 = pr(e5, t5);
                    if (n5 && !ka(e5, t5) && !_n(e5.display, t5)) {
                      we(t5);
                      var r5 = e5.findWordAt(n5);
                      ei(e5.doc, r5.anchor, r5.head);
                    }
                  }
                }) : function(t5) {
                  return ye(e5, t5) || we(t5);
                }), me(t4.scroller, "contextmenu", function(t5) {
                  return Ea(e5, t5);
                }), me(t4.input.getField(), "contextmenu", function(n5) {
                  t4.scroller.contains(n5.target) || Ea(e5, n5);
                });
                var n4, r4 = { end: 0 };
                function o3() {
                  t4.activeTouch && (n4 = setTimeout(function() {
                    return t4.activeTouch = null;
                  }, 1e3), (r4 = t4.activeTouch).end = +/* @__PURE__ */ new Date());
                }
                function i3(e6) {
                  if (1 != e6.touches.length) return false;
                  var t5 = e6.touches[0];
                  return t5.radiusX <= 1 && t5.radiusY <= 1;
                }
                function l2(e6, t5) {
                  if (null == t5.left) return true;
                  var n5 = t5.left - e6.left, r5 = t5.top - e6.top;
                  return n5 * n5 + r5 * r5 > 400;
                }
                me(t4.scroller, "touchstart", function(o4) {
                  if (!ye(e5, o4) && !i3(o4) && !ka(e5, o4)) {
                    t4.input.ensurePolled(), clearTimeout(n4);
                    var a2 = +/* @__PURE__ */ new Date();
                    t4.activeTouch = { start: a2, moved: false, prev: a2 - r4.end <= 300 ? r4 : null }, 1 == o4.touches.length && (t4.activeTouch.left = o4.touches[0].pageX, t4.activeTouch.top = o4.touches[0].pageY);
                  }
                }), me(t4.scroller, "touchmove", function() {
                  t4.activeTouch && (t4.activeTouch.moved = true);
                }), me(t4.scroller, "touchend", function(n5) {
                  var r5 = t4.activeTouch;
                  if (r5 && !_n(t4, n5) && null != r5.left && !r5.moved && /* @__PURE__ */ new Date() - r5.start < 300) {
                    var i4, a2 = e5.coordsChar(t4.activeTouch, "page");
                    i4 = !r5.prev || l2(r5, r5.prev) ? new Bo(a2, a2) : !r5.prev.prev || l2(r5, r5.prev.prev) ? e5.findWordAt(a2) : new Bo(ot(a2.line, 0), ft(e5.doc, ot(a2.line + 1, 0))), e5.setSelection(i4.anchor, i4.head), e5.focus(), we(n5);
                  }
                  o3();
                }), me(t4.scroller, "touchcancel", o3), me(t4.scroller, "scroll", function() {
                  t4.scroller.clientHeight && (zr(e5, t4.scroller.scrollTop), Wr(e5, t4.scroller.scrollLeft, true), Ae(e5, "scroll", e5));
                }), me(t4.scroller, "mousewheel", function(t5) {
                  return So(e5, t5);
                }), me(t4.scroller, "DOMMouseScroll", function(t5) {
                  return So(e5, t5);
                }), me(t4.wrapper, "scroll", function() {
                  return t4.wrapper.scrollTop = t4.wrapper.scrollLeft = 0;
                }), t4.dragFunctions = { enter: function(t5) {
                  ye(e5, t5) || _e(t5);
                }, over: function(t5) {
                  ye(e5, t5) || (function(e6, t6) {
                    var n5 = pr(e6, t6);
                    if (n5) {
                      var r5 = document.createDocumentFragment();
                      xr(e6, n5, r5), e6.display.dragCursor || (e6.display.dragCursor = O("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e6.display.lineSpace.insertBefore(e6.display.dragCursor, e6.display.cursorDiv)), B(e6.display.dragCursor, r5);
                    }
                  }(e5, t5), _e(t5));
                }, start: function(t5) {
                  return function(e6, t6) {
                    if (a && (!e6.state.draggingText || +/* @__PURE__ */ new Date() - Ii < 100)) _e(t6);
                    else if (!ye(e6, t6) && !_n(e6.display, t6) && (t6.dataTransfer.setData("Text", e6.getSelection()), t6.dataTransfer.effectAllowed = "copyMove", t6.dataTransfer.setDragImage && !p)) {
                      var n5 = O("img", null, null, "position: fixed; left: 0; top: 0;");
                      n5.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", d && (n5.width = n5.height = 1, e6.display.wrapper.appendChild(n5), n5._top = n5.offsetTop), t6.dataTransfer.setDragImage(n5, 0, 0), d && n5.parentNode.removeChild(n5);
                    }
                  }(e5, t5);
                }, drop: oo(e5, Di), leave: function(t5) {
                  ye(e5, t5) || zi(e5);
                } };
                var c3 = t4.input.getField();
                me(c3, "keyup", function(t5) {
                  return ga.call(e5, t5);
                }), me(c3, "keydown", oo(e5, ma)), me(c3, "keypress", oo(e5, va)), me(c3, "focus", function(t5) {
                  return Mr(e5, t5);
                }), me(c3, "blur", function(t5) {
                  return Br(e5, t5);
                });
              }(this), Hi(), Yr(this), this.curOp.forceUpdate = true, Wo(this, r3), t3.autofocus && !A || this.hasFocus() ? setTimeout(function() {
                n3.hasFocus() && !n3.state.focused && Mr(n3);
              }, 20) : Br(this), Ba) Ba.hasOwnProperty(c2) && Ba[c2](this, t3[c2], Sa);
              Ao(this), t3.finishInit && t3.finishInit(this);
              for (var u2 = 0; u2 < Fa.length; ++u2) Fa[u2](this);
              Jr(this), l && t3.lineWrapping && "optimizelegibility" == getComputedStyle(i2.lineDiv).textRendering && (i2.lineDiv.style.textRendering = "auto");
            }
            La.defaults = Ma, La.optionHandlers = Ba;
            var Fa = [];
            function Pa(e4, t3, n3, r3) {
              var o2, i2 = e4.doc;
              null == n3 && (n3 = "add"), "smart" == n3 && (i2.mode.indent ? o2 = vt(e4, t3).state : n3 = "prev");
              var a2 = e4.options.tabSize, s2 = Ye(i2, t3), l2 = W(s2.text, null, a2);
              s2.stateAfter && (s2.stateAfter = null);
              var c2, u2 = s2.text.match(/^\s*/)[0];
              if (r3 || /\S/.test(s2.text)) {
                if ("smart" == n3 && ((c2 = i2.mode.indent(o2, s2.text.slice(u2.length), s2.text)) == G || c2 > 150)) {
                  if (!r3) return;
                  n3 = "prev";
                }
              } else c2 = 0, n3 = "not";
              "prev" == n3 ? c2 = t3 > i2.first ? W(Ye(i2, t3 - 1).text, null, a2) : 0 : "add" == n3 ? c2 = l2 + e4.options.indentUnit : "subtract" == n3 ? c2 = l2 - e4.options.indentUnit : "number" == typeof n3 && (c2 = l2 + n3), c2 = Math.max(0, c2);
              var f2 = "", d2 = 0;
              if (e4.options.indentWithTabs) for (var p2 = Math.floor(c2 / a2); p2; --p2) d2 += a2, f2 += "	";
              if (d2 < c2 && (f2 += J(c2 - d2)), f2 != u2) return bi(i2, f2, ot(t3, 0), ot(t3, u2.length), "+input"), s2.stateAfter = null, true;
              for (var h2 = 0; h2 < i2.sel.ranges.length; h2++) {
                var m2 = i2.sel.ranges[h2];
                if (m2.head.line == t3 && m2.head.ch < u2.length) {
                  var g2 = ot(t3, u2.length);
                  ni(i2, h2, new Bo(g2, g2));
                  break;
                }
              }
            }
            La.defineInitHook = function(e4) {
              return Fa.push(e4);
            };
            var Na = null;
            function ja(e4) {
              Na = e4;
            }
            function Ia(e4, t3, n3, r3, o2) {
              var i2 = e4.doc;
              e4.display.shift = false, r3 || (r3 = i2.sel);
              var a2 = +/* @__PURE__ */ new Date() - 200, s2 = "paste" == o2 || e4.state.pasteIncoming > a2, l2 = Ne(t3), c2 = null;
              if (s2 && r3.ranges.length > 1) if (Na && Na.text.join("\n") == t3) {
                if (r3.ranges.length % Na.text.length == 0) {
                  c2 = [];
                  for (var u2 = 0; u2 < Na.text.length; u2++) c2.push(i2.splitLines(Na.text[u2]));
                }
              } else l2.length == r3.ranges.length && e4.options.pasteLinesPerSelection && (c2 = Q(l2, function(e5) {
                return [e5];
              }));
              for (var f2 = e4.curOp.updateInput, d2 = r3.ranges.length - 1; d2 >= 0; d2--) {
                var p2 = r3.ranges[d2], h2 = p2.from(), m2 = p2.to();
                p2.empty() && (n3 && n3 > 0 ? h2 = ot(h2.line, h2.ch - n3) : e4.state.overwrite && !s2 ? m2 = ot(m2.line, Math.min(Ye(i2, m2.line).text.length, m2.ch + X(l2).length)) : s2 && Na && Na.lineWise && Na.text.join("\n") == l2.join("\n") && (h2 = m2 = ot(h2.line, 0)));
                var g2 = { from: h2, to: m2, text: c2 ? c2[d2 % c2.length] : l2, origin: o2 || (s2 ? "paste" : e4.state.cutIncoming > a2 ? "cut" : "+input") };
                mi(e4.doc, g2), dn(e4, "inputRead", e4, g2);
              }
              t3 && !s2 && za(e4, t3), Nr(e4), e4.curOp.updateInput < 2 && (e4.curOp.updateInput = f2), e4.curOp.typing = true, e4.state.pasteIncoming = e4.state.cutIncoming = -1;
            }
            function Da(e4, t3) {
              var n3 = e4.clipboardData && e4.clipboardData.getData("Text");
              if (n3) return e4.preventDefault(), t3.isReadOnly() || t3.options.disableInput || !t3.hasFocus() || ro(t3, function() {
                return Ia(t3, n3, 0, null, "paste");
              }), true;
            }
            function za(e4, t3) {
              if (e4.options.electricChars && e4.options.smartIndent) for (var n3 = e4.doc.sel, r3 = n3.ranges.length - 1; r3 >= 0; r3--) {
                var o2 = n3.ranges[r3];
                if (!(o2.head.ch > 100 || r3 && n3.ranges[r3 - 1].head.line == o2.head.line)) {
                  var i2 = e4.getModeAt(o2.head), a2 = false;
                  if (i2.electricChars) {
                    for (var s2 = 0; s2 < i2.electricChars.length; s2++) if (t3.indexOf(i2.electricChars.charAt(s2)) > -1) {
                      a2 = Pa(e4, o2.head.line, "smart");
                      break;
                    }
                  } else i2.electricInput && i2.electricInput.test(Ye(e4.doc, o2.head.line).text.slice(0, o2.head.ch)) && (a2 = Pa(e4, o2.head.line, "smart"));
                  a2 && dn(e4, "electricInput", e4, o2.head.line);
                }
              }
            }
            function Ra(e4) {
              for (var t3 = [], n3 = [], r3 = 0; r3 < e4.doc.sel.ranges.length; r3++) {
                var o2 = e4.doc.sel.ranges[r3].head.line, i2 = { anchor: ot(o2, 0), head: ot(o2 + 1, 0) };
                n3.push(i2), t3.push(e4.getRange(i2.anchor, i2.head));
              }
              return { text: t3, ranges: n3 };
            }
            function Wa(e4, t3, n3, r3) {
              e4.setAttribute("autocorrect", n3 ? "on" : "off"), e4.setAttribute("autocapitalize", r3 ? "on" : "off"), e4.setAttribute("spellcheck", !!t3);
            }
            function Ha() {
              var e4 = O("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"), t3 = O("div", [e4], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
              return l ? e4.style.width = "1000px" : e4.setAttribute("wrap", "off"), g && (e4.style.border = "1px solid black"), t3;
            }
            function Ua(e4, t3, n3, r3, o2) {
              var i2 = t3, a2 = n3, s2 = Ye(e4, t3.line), l2 = o2 && "rtl" == e4.direction ? -n3 : n3;
              function c2(i3) {
                var a3, c3;
                if ("codepoint" == r3) {
                  var u3 = s2.text.charCodeAt(t3.ch + (n3 > 0 ? 0 : -1));
                  if (isNaN(u3)) a3 = null;
                  else {
                    var f3 = n3 > 0 ? u3 >= 55296 && u3 < 56320 : u3 >= 56320 && u3 < 57343;
                    a3 = new ot(t3.line, Math.max(0, Math.min(s2.text.length, t3.ch + n3 * (f3 ? 2 : 1))), -n3);
                  }
                } else a3 = o2 ? function(e5, t4, n4, r4) {
                  var o3 = pe(t4, e5.doc.direction);
                  if (!o3) return oa(t4, n4, r4);
                  n4.ch >= t4.text.length ? (n4.ch = t4.text.length, n4.sticky = "before") : n4.ch <= 0 && (n4.ch = 0, n4.sticky = "after");
                  var i4 = fe(o3, n4.ch, n4.sticky), a4 = o3[i4];
                  if ("ltr" == e5.doc.direction && a4.level % 2 == 0 && (r4 > 0 ? a4.to > n4.ch : a4.from < n4.ch)) return oa(t4, n4, r4);
                  var s3, l3 = function(e6, n5) {
                    return ra(t4, e6 instanceof ot ? e6.ch : e6, n5);
                  }, c4 = function(n5) {
                    return e5.options.lineWrapping ? (s3 = s3 || jn(e5, t4), nr(e5, t4, s3, n5)) : { begin: 0, end: t4.text.length };
                  }, u4 = c4("before" == n4.sticky ? l3(n4, -1) : n4.ch);
                  if ("rtl" == e5.doc.direction || 1 == a4.level) {
                    var f4 = 1 == a4.level == r4 < 0, d3 = l3(n4, f4 ? 1 : -1);
                    if (null != d3 && (f4 ? d3 <= a4.to && d3 <= u4.end : d3 >= a4.from && d3 >= u4.begin)) {
                      var p3 = f4 ? "before" : "after";
                      return new ot(n4.line, d3, p3);
                    }
                  }
                  var h3 = function(e6, t5, r5) {
                    for (var i5 = function(e7, t6) {
                      return t6 ? new ot(n4.line, l3(e7, 1), "before") : new ot(n4.line, e7, "after");
                    }; e6 >= 0 && e6 < o3.length; e6 += t5) {
                      var a5 = o3[e6], s4 = t5 > 0 == (1 != a5.level), c5 = s4 ? r5.begin : l3(r5.end, -1);
                      if (a5.from <= c5 && c5 < a5.to) return i5(c5, s4);
                      if (c5 = s4 ? a5.from : l3(a5.to, -1), r5.begin <= c5 && c5 < r5.end) return i5(c5, s4);
                    }
                  }, m3 = h3(i4 + r4, r4, u4);
                  if (m3) return m3;
                  var g3 = r4 > 0 ? u4.end : l3(u4.begin, -1);
                  return null == g3 || r4 > 0 && g3 == t4.text.length || !(m3 = h3(r4 > 0 ? 0 : o3.length - 1, r4, c4(g3))) ? null : m3;
                }(e4.cm, s2, t3, n3) : oa(s2, t3, n3);
                if (null == a3) {
                  if (i3 || ((c3 = t3.line + l2) < e4.first || c3 >= e4.first + e4.size || (t3 = new ot(c3, t3.ch, t3.sticky), !(s2 = Ye(e4, c3))))) return false;
                  t3 = ia(o2, e4.cm, s2, t3.line, l2);
                } else t3 = a3;
                return true;
              }
              if ("char" == r3 || "codepoint" == r3) c2();
              else if ("column" == r3) c2(true);
              else if ("word" == r3 || "group" == r3) for (var u2 = null, f2 = "group" == r3, d2 = e4.cm && e4.cm.getHelper(t3, "wordChars"), p2 = true; !(n3 < 0) || c2(!p2); p2 = false) {
                var h2 = s2.text.charAt(t3.ch) || "\n", m2 = oe(h2, d2) ? "w" : f2 && "\n" == h2 ? "n" : !f2 || /\s/.test(h2) ? null : "p";
                if (!f2 || p2 || m2 || (m2 = "s"), u2 && u2 != m2) {
                  n3 < 0 && (n3 = 1, c2(), t3.sticky = "after");
                  break;
                }
                if (m2 && (u2 = m2), n3 > 0 && !c2(!p2)) break;
              }
              var g2 = fi(e4, t3, i2, a2, true);
              return at(i2, g2) && (g2.hitSide = true), g2;
            }
            function Va(e4, t3, n3, r3) {
              var o2, i2, a2 = e4.doc, s2 = t3.left;
              if ("page" == r3) {
                var l2 = Math.min(e4.display.wrapper.clientHeight, D(e4).innerHeight || a2(e4).documentElement.clientHeight), c2 = Math.max(l2 - 0.5 * sr(e4.display), 3);
                o2 = (n3 > 0 ? t3.bottom : t3.top) + n3 * c2;
              } else "line" == r3 && (o2 = n3 > 0 ? t3.bottom + 3 : t3.top - 3);
              for (; (i2 = er(e4, s2, o2)).outside; ) {
                if (n3 < 0 ? o2 <= 0 : o2 >= a2.height) {
                  i2.hitSide = true;
                  break;
                }
                o2 += 5 * n3;
              }
              return i2;
            }
            var Ga = function(e4) {
              this.cm = e4, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new H(), this.composing = null, this.gracePeriod = false, this.readDOMTimeout = null;
            };
            function $a(e4, t3) {
              var n3 = Nn(e4, t3.line);
              if (!n3 || n3.hidden) return null;
              var r3 = Ye(e4.doc, t3.line), o2 = Fn(n3, r3, t3.line), i2 = pe(r3, e4.doc.direction), a2 = "left";
              i2 && (a2 = fe(i2, t3.ch) % 2 ? "right" : "left");
              var s2 = Rn(o2.map, t3.ch, a2);
              return s2.offset = "right" == s2.collapse ? s2.end : s2.start, s2;
            }
            function qa(e4, t3) {
              return t3 && (e4.bad = true), e4;
            }
            function Ka(e4, t3, n3) {
              var r3;
              if (t3 == e4.display.lineDiv) {
                if (!(r3 = e4.display.lineDiv.childNodes[n3])) return qa(e4.clipPos(ot(e4.display.viewTo - 1)), true);
                t3 = null, n3 = 0;
              } else for (r3 = t3; ; r3 = r3.parentNode) {
                if (!r3 || r3 == e4.display.lineDiv) return null;
                if (r3.parentNode && r3.parentNode == e4.display.lineDiv) break;
              }
              for (var o2 = 0; o2 < e4.display.view.length; o2++) {
                var i2 = e4.display.view[o2];
                if (i2.node == r3) return Za(i2, t3, n3);
              }
            }
            function Za(e4, t3, n3) {
              var r3 = e4.text.firstChild, o2 = false;
              if (!t3 || !L(r3, t3)) return qa(ot(et(e4.line), 0), true);
              if (t3 == r3 && (o2 = true, t3 = r3.childNodes[n3], n3 = 0, !t3)) {
                var i2 = e4.rest ? X(e4.rest) : e4.line;
                return qa(ot(et(i2), i2.text.length), o2);
              }
              var a2 = 3 == t3.nodeType ? t3 : null, s2 = t3;
              for (a2 || 1 != t3.childNodes.length || 3 != t3.firstChild.nodeType || (a2 = t3.firstChild, n3 && (n3 = a2.nodeValue.length)); s2.parentNode != r3; ) s2 = s2.parentNode;
              var l2 = e4.measure, c2 = l2.maps;
              function u2(t4, n4, r4) {
                for (var o3 = -1; o3 < (c2 ? c2.length : 0); o3++) for (var i3 = o3 < 0 ? l2.map : c2[o3], a3 = 0; a3 < i3.length; a3 += 3) {
                  var s3 = i3[a3 + 2];
                  if (s3 == t4 || s3 == n4) {
                    var u3 = et(o3 < 0 ? e4.line : e4.rest[o3]), f3 = i3[a3] + r4;
                    return (r4 < 0 || s3 != t4) && (f3 = i3[a3 + (r4 ? 1 : 0)]), ot(u3, f3);
                  }
                }
              }
              var f2 = u2(a2, s2, n3);
              if (f2) return qa(f2, o2);
              for (var d2 = s2.nextSibling, p2 = a2 ? a2.nodeValue.length - n3 : 0; d2; d2 = d2.nextSibling) {
                if (f2 = u2(d2, d2.firstChild, 0)) return qa(ot(f2.line, f2.ch - p2), o2);
                p2 += d2.textContent.length;
              }
              for (var h2 = s2.previousSibling, m2 = n3; h2; h2 = h2.previousSibling) {
                if (f2 = u2(h2, h2.firstChild, -1)) return qa(ot(f2.line, f2.ch + m2), o2);
                m2 += h2.textContent.length;
              }
            }
            Ga.prototype.init = function(e4) {
              var t3 = this, n3 = this, r3 = n3.cm, o2 = n3.div = e4.lineDiv;
              function i2(e5) {
                for (var t4 = e5.target; t4; t4 = t4.parentNode) {
                  if (t4 == o2) return true;
                  if (/\bCodeMirror-(?:line)?widget\b/.test(t4.className)) break;
                }
                return false;
              }
              function a2(e5) {
                if (i2(e5) && !ye(r3, e5)) {
                  if (r3.somethingSelected()) ja({ lineWise: false, text: r3.getSelections() }), "cut" == e5.type && r3.replaceSelection("", null, "cut");
                  else {
                    if (!r3.options.lineWiseCopyCut) return;
                    var t4 = Ra(r3);
                    ja({ lineWise: true, text: t4.text }), "cut" == e5.type && r3.operation(function() {
                      r3.setSelections(t4.ranges, 0, $), r3.replaceSelection("", null, "cut");
                    });
                  }
                  if (e5.clipboardData) {
                    e5.clipboardData.clearData();
                    var a3 = Na.text.join("\n");
                    if (e5.clipboardData.setData("Text", a3), e5.clipboardData.getData("Text") == a3) return void e5.preventDefault();
                  }
                  var s2 = Ha(), l2 = s2.firstChild;
                  Wa(l2), r3.display.lineSpace.insertBefore(s2, r3.display.lineSpace.firstChild), l2.value = Na.text.join("\n");
                  var c2 = F(o2.ownerDocument);
                  j(l2), setTimeout(function() {
                    r3.display.lineSpace.removeChild(s2), c2.focus(), c2 == o2 && n3.showPrimarySelection();
                  }, 50);
                }
              }
              o2.contentEditable = true, Wa(o2, r3.options.spellcheck, r3.options.autocorrect, r3.options.autocapitalize), me(o2, "paste", function(e5) {
                !i2(e5) || ye(r3, e5) || Da(e5, r3) || s <= 11 && setTimeout(oo(r3, function() {
                  return t3.updateFromDOM();
                }), 20);
              }), me(o2, "compositionstart", function(e5) {
                t3.composing = { data: e5.data, done: false };
              }), me(o2, "compositionupdate", function(e5) {
                t3.composing || (t3.composing = { data: e5.data, done: false });
              }), me(o2, "compositionend", function(e5) {
                t3.composing && (e5.data != t3.composing.data && t3.readFromDOMSoon(), t3.composing.done = true);
              }), me(o2, "touchstart", function() {
                return n3.forceCompositionEnd();
              }), me(o2, "input", function() {
                t3.composing || t3.readFromDOMSoon();
              }), me(o2, "copy", a2), me(o2, "cut", a2);
            }, Ga.prototype.screenReaderLabelChanged = function(e4) {
              e4 ? this.div.setAttribute("aria-label", e4) : this.div.removeAttribute("aria-label");
            }, Ga.prototype.prepareSelection = function() {
              var e4 = Cr(this.cm, false);
              return e4.focus = F(this.div.ownerDocument) == this.div, e4;
            }, Ga.prototype.showSelection = function(e4, t3) {
              e4 && this.cm.display.view.length && ((e4.focus || t3) && this.showPrimarySelection(), this.showMultipleSelections(e4));
            }, Ga.prototype.getSelection = function() {
              return this.cm.display.wrapper.ownerDocument.getSelection();
            }, Ga.prototype.showPrimarySelection = function() {
              var e4 = this.getSelection(), t3 = this.cm, r3 = t3.doc.sel.primary(), o2 = r3.from(), i2 = r3.to();
              if (t3.display.viewTo == t3.display.viewFrom || o2.line >= t3.display.viewTo || i2.line < t3.display.viewFrom) e4.removeAllRanges();
              else {
                var a2 = Ka(t3, e4.anchorNode, e4.anchorOffset), s2 = Ka(t3, e4.focusNode, e4.focusOffset);
                if (!a2 || a2.bad || !s2 || s2.bad || 0 != it(ct(a2, s2), o2) || 0 != it(lt(a2, s2), i2)) {
                  var l2 = t3.display.view, c2 = o2.line >= t3.display.viewFrom && $a(t3, o2) || { node: l2[0].measure.map[2], offset: 0 }, u2 = i2.line < t3.display.viewTo && $a(t3, i2);
                  if (!u2) {
                    var f2 = l2[l2.length - 1].measure, d2 = f2.maps ? f2.maps[f2.maps.length - 1] : f2.map;
                    u2 = { node: d2[d2.length - 1], offset: d2[d2.length - 2] - d2[d2.length - 3] };
                  }
                  if (c2 && u2) {
                    var p2, h2 = e4.rangeCount && e4.getRangeAt(0);
                    try {
                      p2 = _(c2.node, c2.offset, u2.offset, u2.node);
                    } catch (e5) {
                    }
                    p2 && (!n2 && t3.state.focused ? (e4.collapse(c2.node, c2.offset), p2.collapsed || (e4.removeAllRanges(), e4.addRange(p2))) : (e4.removeAllRanges(), e4.addRange(p2)), h2 && null == e4.anchorNode ? e4.addRange(h2) : n2 && this.startGracePeriod()), this.rememberSelection();
                  } else e4.removeAllRanges();
                }
              }
            }, Ga.prototype.startGracePeriod = function() {
              var e4 = this;
              clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
                e4.gracePeriod = false, e4.selectionChanged() && e4.cm.operation(function() {
                  return e4.cm.curOp.selectionChanged = true;
                });
              }, 20);
            }, Ga.prototype.showMultipleSelections = function(e4) {
              B(this.cm.display.cursorDiv, e4.cursors), B(this.cm.display.selectionDiv, e4.selection);
            }, Ga.prototype.rememberSelection = function() {
              var e4 = this.getSelection();
              this.lastAnchorNode = e4.anchorNode, this.lastAnchorOffset = e4.anchorOffset, this.lastFocusNode = e4.focusNode, this.lastFocusOffset = e4.focusOffset;
            }, Ga.prototype.selectionInEditor = function() {
              var e4 = this.getSelection();
              if (!e4.rangeCount) return false;
              var t3 = e4.getRangeAt(0).commonAncestorContainer;
              return L(this.div, t3);
            }, Ga.prototype.focus = function() {
              "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() && F(this.div.ownerDocument) == this.div || this.showSelection(this.prepareSelection(), true), this.div.focus());
            }, Ga.prototype.blur = function() {
              this.div.blur();
            }, Ga.prototype.getField = function() {
              return this.div;
            }, Ga.prototype.supportsTouch = function() {
              return true;
            }, Ga.prototype.receivedFocus = function() {
              var e4 = this, t3 = this;
              this.selectionInEditor() ? setTimeout(function() {
                return e4.pollSelection();
              }, 20) : ro(this.cm, function() {
                return t3.cm.curOp.selectionChanged = true;
              }), this.polling.set(this.cm.options.pollInterval, function e5() {
                t3.cm.state.focused && (t3.pollSelection(), t3.polling.set(t3.cm.options.pollInterval, e5));
              });
            }, Ga.prototype.selectionChanged = function() {
              var e4 = this.getSelection();
              return e4.anchorNode != this.lastAnchorNode || e4.anchorOffset != this.lastAnchorOffset || e4.focusNode != this.lastFocusNode || e4.focusOffset != this.lastFocusOffset;
            }, Ga.prototype.pollSelection = function() {
              if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
                var e4 = this.getSelection(), t3 = this.cm;
                if (v && u && this.cm.display.gutterSpecs.length && function(e5) {
                  for (var t4 = e5; t4; t4 = t4.parentNode) if (/CodeMirror-gutter-wrapper/.test(t4.className)) return true;
                  return false;
                }(e4.anchorNode)) return this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), void this.focus();
                if (!this.composing) {
                  this.rememberSelection();
                  var n3 = Ka(t3, e4.anchorNode, e4.anchorOffset), r3 = Ka(t3, e4.focusNode, e4.focusOffset);
                  n3 && r3 && ro(t3, function() {
                    ii(t3.doc, To(n3, r3), $), (n3.bad || r3.bad) && (t3.curOp.selectionChanged = true);
                  });
                }
              }
            }, Ga.prototype.pollContent = function() {
              null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
              var e4, t3, n3, r3 = this.cm, o2 = r3.display, i2 = r3.doc.sel.primary(), a2 = i2.from(), s2 = i2.to();
              if (0 == a2.ch && a2.line > r3.firstLine() && (a2 = ot(a2.line - 1, Ye(r3.doc, a2.line - 1).length)), s2.ch == Ye(r3.doc, s2.line).text.length && s2.line < r3.lastLine() && (s2 = ot(s2.line + 1, 0)), a2.line < o2.viewFrom || s2.line > o2.viewTo - 1) return false;
              a2.line == o2.viewFrom || 0 == (e4 = hr(r3, a2.line)) ? (t3 = et(o2.view[0].line), n3 = o2.view[0].node) : (t3 = et(o2.view[e4].line), n3 = o2.view[e4 - 1].node.nextSibling);
              var l2, c2, u2 = hr(r3, s2.line);
              if (u2 == o2.view.length - 1 ? (l2 = o2.viewTo - 1, c2 = o2.lineDiv.lastChild) : (l2 = et(o2.view[u2 + 1].line) - 1, c2 = o2.view[u2 + 1].node.previousSibling), !n3) return false;
              for (var f2 = r3.doc.splitLines(function(e5, t4, n4, r4, o3) {
                var i3 = "", a3 = false, s3 = e5.doc.lineSeparator(), l3 = false;
                function c3() {
                  a3 && (i3 += s3, l3 && (i3 += s3), a3 = l3 = false);
                }
                function u3(e6) {
                  e6 && (c3(), i3 += e6);
                }
                function f3(t5) {
                  if (1 == t5.nodeType) {
                    var n5 = t5.getAttribute("cm-text");
                    if (n5) return void u3(n5);
                    var i4, d3 = t5.getAttribute("cm-marker");
                    if (d3) {
                      var p3 = e5.findMarks(ot(r4, 0), ot(o3 + 1, 0), (g3 = +d3, function(e6) {
                        return e6.id == g3;
                      }));
                      return void (p3.length && (i4 = p3[0].find(0)) && u3(Je(e5.doc, i4.from, i4.to).join(s3)));
                    }
                    if ("false" == t5.getAttribute("contenteditable")) return;
                    var h3 = /^(pre|div|p|li|table|br)$/i.test(t5.nodeName);
                    if (!/^br$/i.test(t5.nodeName) && 0 == t5.textContent.length) return;
                    h3 && c3();
                    for (var m3 = 0; m3 < t5.childNodes.length; m3++) f3(t5.childNodes[m3]);
                    /^(pre|p)$/i.test(t5.nodeName) && (l3 = true), h3 && (a3 = true);
                  } else 3 == t5.nodeType && u3(t5.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
                  var g3;
                }
                for (; f3(t4), t4 != n4; ) t4 = t4.nextSibling, l3 = false;
                return i3;
              }(r3, n3, c2, t3, l2)), d2 = Je(r3.doc, ot(t3, 0), ot(l2, Ye(r3.doc, l2).text.length)); f2.length > 1 && d2.length > 1; ) if (X(f2) == X(d2)) f2.pop(), d2.pop(), l2--;
              else {
                if (f2[0] != d2[0]) break;
                f2.shift(), d2.shift(), t3++;
              }
              for (var p2 = 0, h2 = 0, m2 = f2[0], g2 = d2[0], v2 = Math.min(m2.length, g2.length); p2 < v2 && m2.charCodeAt(p2) == g2.charCodeAt(p2); ) ++p2;
              for (var A2 = X(f2), y2 = X(d2), b2 = Math.min(A2.length - (1 == f2.length ? p2 : 0), y2.length - (1 == d2.length ? p2 : 0)); h2 < b2 && A2.charCodeAt(A2.length - h2 - 1) == y2.charCodeAt(y2.length - h2 - 1); ) ++h2;
              if (1 == f2.length && 1 == d2.length && t3 == a2.line) for (; p2 && p2 > a2.ch && A2.charCodeAt(A2.length - h2 - 1) == y2.charCodeAt(y2.length - h2 - 1); ) p2--, h2++;
              f2[f2.length - 1] = A2.slice(0, A2.length - h2).replace(/^\u200b+/, ""), f2[0] = f2[0].slice(p2).replace(/\u200b+$/, "");
              var C2 = ot(t3, p2), x2 = ot(l2, d2.length ? X(d2).length - h2 : 0);
              return f2.length > 1 || f2[0] || it(C2, x2) ? (bi(r3.doc, f2, C2, x2, "+input"), true) : void 0;
            }, Ga.prototype.ensurePolled = function() {
              this.forceCompositionEnd();
            }, Ga.prototype.reset = function() {
              this.forceCompositionEnd();
            }, Ga.prototype.forceCompositionEnd = function() {
              this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
            }, Ga.prototype.readFromDOMSoon = function() {
              var e4 = this;
              null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() {
                if (e4.readDOMTimeout = null, e4.composing) {
                  if (!e4.composing.done) return;
                  e4.composing = null;
                }
                e4.updateFromDOM();
              }, 80));
            }, Ga.prototype.updateFromDOM = function() {
              var e4 = this;
              !this.cm.isReadOnly() && this.pollContent() || ro(this.cm, function() {
                return mr(e4.cm);
              });
            }, Ga.prototype.setUneditable = function(e4) {
              e4.contentEditable = "false";
            }, Ga.prototype.onKeyPress = function(e4) {
              0 == e4.charCode || this.composing || (e4.preventDefault(), this.cm.isReadOnly() || oo(this.cm, Ia)(this.cm, String.fromCharCode(null == e4.charCode ? e4.keyCode : e4.charCode), 0));
            }, Ga.prototype.readOnlyChanged = function(e4) {
              this.div.contentEditable = String("nocursor" != e4);
            }, Ga.prototype.onContextMenu = function() {
            }, Ga.prototype.resetPosition = function() {
            }, Ga.prototype.needsContentAttribute = true;
            var Ya = function(e4) {
              this.cm = e4, this.prevInput = "", this.pollingFast = false, this.polling = new H(), this.hasSelection = false, this.composing = null, this.resetting = false;
            };
            Ya.prototype.init = function(e4) {
              var t3 = this, n3 = this, r3 = this.cm;
              this.createField(e4);
              var o2 = this.textarea;
              function i2(e5) {
                if (!ye(r3, e5)) {
                  if (r3.somethingSelected()) ja({ lineWise: false, text: r3.getSelections() });
                  else {
                    if (!r3.options.lineWiseCopyCut) return;
                    var t4 = Ra(r3);
                    ja({ lineWise: true, text: t4.text }), "cut" == e5.type ? r3.setSelections(t4.ranges, null, $) : (n3.prevInput = "", o2.value = t4.text.join("\n"), j(o2));
                  }
                  "cut" == e5.type && (r3.state.cutIncoming = +/* @__PURE__ */ new Date());
                }
              }
              e4.wrapper.insertBefore(this.wrapper, e4.wrapper.firstChild), g && (o2.style.width = "0px"), me(o2, "input", function() {
                a && s >= 9 && t3.hasSelection && (t3.hasSelection = null), n3.poll();
              }), me(o2, "paste", function(e5) {
                ye(r3, e5) || Da(e5, r3) || (r3.state.pasteIncoming = +/* @__PURE__ */ new Date(), n3.fastPoll());
              }), me(o2, "cut", i2), me(o2, "copy", i2), me(e4.scroller, "paste", function(t4) {
                if (!_n(e4, t4) && !ye(r3, t4)) {
                  if (!o2.dispatchEvent) return r3.state.pasteIncoming = +/* @__PURE__ */ new Date(), void n3.focus();
                  var i3 = new Event("paste");
                  i3.clipboardData = t4.clipboardData, o2.dispatchEvent(i3);
                }
              }), me(e4.lineSpace, "selectstart", function(t4) {
                _n(e4, t4) || we(t4);
              }), me(o2, "compositionstart", function() {
                var e5 = r3.getCursor("from");
                n3.composing && n3.composing.range.clear(), n3.composing = { start: e5, range: r3.markText(e5, r3.getCursor("to"), { className: "CodeMirror-composing" }) };
              }), me(o2, "compositionend", function() {
                n3.composing && (n3.poll(), n3.composing.range.clear(), n3.composing = null);
              });
            }, Ya.prototype.createField = function(e4) {
              this.wrapper = Ha(), this.textarea = this.wrapper.firstChild;
              var t3 = this.cm.options;
              Wa(this.textarea, t3.spellcheck, t3.autocorrect, t3.autocapitalize);
            }, Ya.prototype.screenReaderLabelChanged = function(e4) {
              e4 ? this.textarea.setAttribute("aria-label", e4) : this.textarea.removeAttribute("aria-label");
            }, Ya.prototype.prepareSelection = function() {
              var e4 = this.cm, t3 = e4.display, n3 = e4.doc, r3 = Cr(e4);
              if (e4.options.moveInputWithCursor) {
                var o2 = Jn(e4, n3.sel.primary().head, "div"), i2 = t3.wrapper.getBoundingClientRect(), a2 = t3.lineDiv.getBoundingClientRect();
                r3.teTop = Math.max(0, Math.min(t3.wrapper.clientHeight - 10, o2.top + a2.top - i2.top)), r3.teLeft = Math.max(0, Math.min(t3.wrapper.clientWidth - 10, o2.left + a2.left - i2.left));
              }
              return r3;
            }, Ya.prototype.showSelection = function(e4) {
              var t3 = this.cm.display;
              B(t3.cursorDiv, e4.cursors), B(t3.selectionDiv, e4.selection), null != e4.teTop && (this.wrapper.style.top = e4.teTop + "px", this.wrapper.style.left = e4.teLeft + "px");
            }, Ya.prototype.reset = function(e4) {
              if (!(this.contextMenuPending || this.composing && e4)) {
                var t3 = this.cm;
                if (this.resetting = true, t3.somethingSelected()) {
                  this.prevInput = "";
                  var n3 = t3.getSelection();
                  this.textarea.value = n3, t3.state.focused && j(this.textarea), a && s >= 9 && (this.hasSelection = n3);
                } else e4 || (this.prevInput = this.textarea.value = "", a && s >= 9 && (this.hasSelection = null));
                this.resetting = false;
              }
            }, Ya.prototype.getField = function() {
              return this.textarea;
            }, Ya.prototype.supportsTouch = function() {
              return false;
            }, Ya.prototype.focus = function() {
              if ("nocursor" != this.cm.options.readOnly && (!A || F(this.textarea.ownerDocument) != this.textarea)) try {
                this.textarea.focus();
              } catch (e4) {
              }
            }, Ya.prototype.blur = function() {
              this.textarea.blur();
            }, Ya.prototype.resetPosition = function() {
              this.wrapper.style.top = this.wrapper.style.left = 0;
            }, Ya.prototype.receivedFocus = function() {
              this.slowPoll();
            }, Ya.prototype.slowPoll = function() {
              var e4 = this;
              this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
                e4.poll(), e4.cm.state.focused && e4.slowPoll();
              });
            }, Ya.prototype.fastPoll = function() {
              var e4 = false, t3 = this;
              t3.pollingFast = true, t3.polling.set(20, function n3() {
                t3.poll() || e4 ? (t3.pollingFast = false, t3.slowPoll()) : (e4 = true, t3.polling.set(60, n3));
              });
            }, Ya.prototype.poll = function() {
              var e4 = this, t3 = this.cm, n3 = this.textarea, r3 = this.prevInput;
              if (this.contextMenuPending || this.resetting || !t3.state.focused || je(n3) && !r3 && !this.composing || t3.isReadOnly() || t3.options.disableInput || t3.state.keySeq) return false;
              var o2 = n3.value;
              if (o2 == r3 && !t3.somethingSelected()) return false;
              if (a && s >= 9 && this.hasSelection === o2 || y && /[\uf700-\uf7ff]/.test(o2)) return t3.display.input.reset(), false;
              if (t3.doc.sel == t3.display.selForContextMenu) {
                var i2 = o2.charCodeAt(0);
                if (8203 != i2 || r3 || (r3 = "​"), 8666 == i2) return this.reset(), this.cm.execCommand("undo");
              }
              for (var l2 = 0, c2 = Math.min(r3.length, o2.length); l2 < c2 && r3.charCodeAt(l2) == o2.charCodeAt(l2); ) ++l2;
              return ro(t3, function() {
                Ia(t3, o2.slice(l2), r3.length - l2, null, e4.composing ? "*compose" : null), o2.length > 1e3 || o2.indexOf("\n") > -1 ? n3.value = e4.prevInput = "" : e4.prevInput = o2, e4.composing && (e4.composing.range.clear(), e4.composing.range = t3.markText(e4.composing.start, t3.getCursor("to"), { className: "CodeMirror-composing" }));
              }), true;
            }, Ya.prototype.ensurePolled = function() {
              this.pollingFast && this.poll() && (this.pollingFast = false);
            }, Ya.prototype.onKeyPress = function() {
              a && s >= 9 && (this.hasSelection = null), this.fastPoll();
            }, Ya.prototype.onContextMenu = function(e4) {
              var t3 = this, n3 = t3.cm, r3 = n3.display, o2 = t3.textarea;
              t3.contextMenuPending && t3.contextMenuPending();
              var i2 = pr(n3, e4), c2 = r3.scroller.scrollTop;
              if (i2 && !d) {
                n3.options.resetSelectionOnContextMenu && -1 == n3.doc.sel.contains(i2) && oo(n3, ii)(n3.doc, To(i2), $);
                var u2, f2 = o2.style.cssText, p2 = t3.wrapper.style.cssText, h2 = t3.wrapper.offsetParent.getBoundingClientRect();
                if (t3.wrapper.style.cssText = "position: static", o2.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e4.clientY - h2.top - 5) + "px; left: " + (e4.clientX - h2.left - 5) + "px;\n      z-index: 1000; background: " + (a ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);", l && (u2 = o2.ownerDocument.defaultView.scrollY), r3.input.focus(), l && o2.ownerDocument.defaultView.scrollTo(null, u2), r3.input.reset(), n3.somethingSelected() || (o2.value = t3.prevInput = " "), t3.contextMenuPending = v2, r3.selForContextMenu = n3.doc.sel, clearTimeout(r3.detectingSelectAll), a && s >= 9 && g2(), k) {
                  _e(e4);
                  var m2 = function() {
                    ve(window, "mouseup", m2), setTimeout(v2, 20);
                  };
                  me(window, "mouseup", m2);
                } else setTimeout(v2, 50);
              }
              function g2() {
                if (null != o2.selectionStart) {
                  var e5 = n3.somethingSelected(), i3 = "​" + (e5 ? o2.value : "");
                  o2.value = "⇚", o2.value = i3, t3.prevInput = e5 ? "" : "​", o2.selectionStart = 1, o2.selectionEnd = i3.length, r3.selForContextMenu = n3.doc.sel;
                }
              }
              function v2() {
                if (t3.contextMenuPending == v2 && (t3.contextMenuPending = false, t3.wrapper.style.cssText = p2, o2.style.cssText = f2, a && s < 9 && r3.scrollbars.setScrollTop(r3.scroller.scrollTop = c2), null != o2.selectionStart)) {
                  (!a || a && s < 9) && g2();
                  var e5 = 0, i3 = function() {
                    r3.selForContextMenu == n3.doc.sel && 0 == o2.selectionStart && o2.selectionEnd > 0 && "​" == t3.prevInput ? oo(n3, pi)(n3) : e5++ < 10 ? r3.detectingSelectAll = setTimeout(i3, 500) : (r3.selForContextMenu = null, r3.input.reset());
                  };
                  r3.detectingSelectAll = setTimeout(i3, 200);
                }
              }
            }, Ya.prototype.readOnlyChanged = function(e4) {
              e4 || this.reset(), this.textarea.disabled = "nocursor" == e4, this.textarea.readOnly = !!e4;
            }, Ya.prototype.setUneditable = function() {
            }, Ya.prototype.needsContentAttribute = false, function(e4) {
              var t3 = e4.optionHandlers;
              function n3(n4, r3, o2, i2) {
                e4.defaults[n4] = r3, o2 && (t3[n4] = i2 ? function(e5, t4, n5) {
                  n5 != Sa && o2(e5, t4, n5);
                } : o2);
              }
              e4.defineOption = n3, e4.Init = Sa, n3("value", "", function(e5, t4) {
                return e5.setValue(t4);
              }, true), n3("mode", null, function(e5, t4) {
                e5.doc.modeOption = t4, jo(e5);
              }, true), n3("indentUnit", 2, jo, true), n3("indentWithTabs", false), n3("smartIndent", true), n3("tabSize", 4, function(e5) {
                Io(e5), Vn(e5), mr(e5);
              }, true), n3("lineSeparator", null, function(e5, t4) {
                if (e5.doc.lineSep = t4, t4) {
                  var n4 = [], r3 = e5.doc.first;
                  e5.doc.iter(function(e6) {
                    for (var o3 = 0; ; ) {
                      var i2 = e6.text.indexOf(t4, o3);
                      if (-1 == i2) break;
                      o3 = i2 + t4.length, n4.push(ot(r3, i2));
                    }
                    r3++;
                  });
                  for (var o2 = n4.length - 1; o2 >= 0; o2--) bi(e5.doc, t4, n4[o2], ot(n4[o2].line, n4[o2].ch + t4.length));
                }
              }), n3("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(e5, t4, n4) {
                e5.state.specialChars = new RegExp(t4.source + (t4.test("	") ? "" : "|	"), "g"), n4 != Sa && e5.refresh();
              }), n3("specialCharPlaceholder", nn, function(e5) {
                return e5.refresh();
              }, true), n3("electricChars", true), n3("inputStyle", A ? "contenteditable" : "textarea", function() {
                throw new Error("inputStyle can not (yet) be changed in a running editor");
              }, true), n3("spellcheck", false, function(e5, t4) {
                return e5.getInputField().spellcheck = t4;
              }, true), n3("autocorrect", false, function(e5, t4) {
                return e5.getInputField().autocorrect = t4;
              }, true), n3("autocapitalize", false, function(e5, t4) {
                return e5.getInputField().autocapitalize = t4;
              }, true), n3("rtlMoveVisually", !C), n3("wholeLineUpdateBefore", true), n3("theme", "default", function(e5) {
                _a(e5), Co(e5);
              }, true), n3("keyMap", "default", function(e5, t4, n4) {
                var r3 = ta(t4), o2 = n4 != Sa && ta(n4);
                o2 && o2.detach && o2.detach(e5, r3), r3.attach && r3.attach(e5, o2 || null);
              }), n3("extraKeys", null), n3("configureMouse", null), n3("lineWrapping", false, Ta, true), n3("gutters", [], function(e5, t4) {
                e5.display.gutterSpecs = yo(t4, e5.options.lineNumbers), Co(e5);
              }, true), n3("fixedGutter", true, function(e5, t4) {
                e5.display.gutters.style.left = t4 ? ur(e5.display) + "px" : "0", e5.refresh();
              }, true), n3("coverGutterNextToScrollbar", false, function(e5) {
                return Gr(e5);
              }, true), n3("scrollbarStyle", "native", function(e5) {
                Kr(e5), Gr(e5), e5.display.scrollbars.setScrollTop(e5.doc.scrollTop), e5.display.scrollbars.setScrollLeft(e5.doc.scrollLeft);
              }, true), n3("lineNumbers", false, function(e5, t4) {
                e5.display.gutterSpecs = yo(e5.options.gutters, t4), Co(e5);
              }, true), n3("firstLineNumber", 1, Co, true), n3("lineNumberFormatter", function(e5) {
                return e5;
              }, Co, true), n3("showCursorWhenSelecting", false, br, true), n3("resetSelectionOnContextMenu", true), n3("lineWiseCopyCut", true), n3("pasteLinesPerSelection", true), n3("selectionsMayTouch", false), n3("readOnly", false, function(e5, t4) {
                "nocursor" == t4 && (Br(e5), e5.display.input.blur()), e5.display.input.readOnlyChanged(t4);
              }), n3("screenReaderLabel", null, function(e5, t4) {
                t4 = "" === t4 ? null : t4, e5.display.input.screenReaderLabelChanged(t4);
              }), n3("disableInput", false, function(e5, t4) {
                t4 || e5.display.input.reset();
              }, true), n3("dragDrop", true, Oa), n3("allowDropFileTypes", null), n3("cursorBlinkRate", 530), n3("cursorScrollMargin", 0), n3("cursorHeight", 1, br, true), n3("singleCursorHeightPerLine", true, br, true), n3("workTime", 100), n3("workDelay", 100), n3("flattenSpans", true, Io, true), n3("addModeClass", false, Io, true), n3("pollInterval", 100), n3("undoDepth", 200, function(e5, t4) {
                return e5.doc.history.undoDepth = t4;
              }), n3("historyEventDelay", 1250), n3("viewportMargin", 10, function(e5) {
                return e5.refresh();
              }, true), n3("maxHighlightLength", 1e4, Io, true), n3("moveInputWithCursor", true, function(e5, t4) {
                t4 || e5.display.input.resetPosition();
              }), n3("tabindex", null, function(e5, t4) {
                return e5.display.input.getField().tabIndex = t4 || "";
              }), n3("autofocus", null), n3("direction", "ltr", function(e5, t4) {
                return e5.doc.setDirection(t4);
              }, true), n3("phrases", null);
            }(La), function(e4) {
              var t3 = e4.optionHandlers, n3 = e4.helpers = {};
              e4.prototype = { constructor: e4, focus: function() {
                D(this).focus(), this.display.input.focus();
              }, setOption: function(e5, n4) {
                var r3 = this.options, o2 = r3[e5];
                r3[e5] == n4 && "mode" != e5 || (r3[e5] = n4, t3.hasOwnProperty(e5) && oo(this, t3[e5])(this, n4, o2), Ae(this, "optionChange", this, e5));
              }, getOption: function(e5) {
                return this.options[e5];
              }, getDoc: function() {
                return this.doc;
              }, addKeyMap: function(e5, t4) {
                this.state.keyMaps[t4 ? "push" : "unshift"](ta(e5));
              }, removeKeyMap: function(e5) {
                for (var t4 = this.state.keyMaps, n4 = 0; n4 < t4.length; ++n4) if (t4[n4] == e5 || t4[n4].name == e5) return t4.splice(n4, 1), true;
              }, addOverlay: io(function(t4, n4) {
                var r3 = t4.token ? t4 : e4.getMode(this.options, t4);
                if (r3.startState) throw new Error("Overlays may not be stateful.");
                (function(e5, t5, n5) {
                  for (var r4 = 0, o2 = n5(t5); r4 < e5.length && n5(e5[r4]) <= o2; ) r4++;
                  e5.splice(r4, 0, t5);
                })(this.state.overlays, { mode: r3, modeSpec: t4, opaque: n4 && n4.opaque, priority: n4 && n4.priority || 0 }, function(e5) {
                  return e5.priority;
                }), this.state.modeGen++, mr(this);
              }), removeOverlay: io(function(e5) {
                for (var t4 = this.state.overlays, n4 = 0; n4 < t4.length; ++n4) {
                  var r3 = t4[n4].modeSpec;
                  if (r3 == e5 || "string" == typeof e5 && r3.name == e5) return t4.splice(n4, 1), this.state.modeGen++, void mr(this);
                }
              }), indentLine: io(function(e5, t4, n4) {
                "string" != typeof t4 && "number" != typeof t4 && (t4 = null == t4 ? this.options.smartIndent ? "smart" : "prev" : t4 ? "add" : "subtract"), nt(this.doc, e5) && Pa(this, e5, t4, n4);
              }), indentSelection: io(function(e5) {
                for (var t4 = this.doc.sel.ranges, n4 = -1, r3 = 0; r3 < t4.length; r3++) {
                  var o2 = t4[r3];
                  if (o2.empty()) o2.head.line > n4 && (Pa(this, o2.head.line, e5, true), n4 = o2.head.line, r3 == this.doc.sel.primIndex && Nr(this));
                  else {
                    var i2 = o2.from(), a2 = o2.to(), s2 = Math.max(n4, i2.line);
                    n4 = Math.min(this.lastLine(), a2.line - (a2.ch ? 0 : 1)) + 1;
                    for (var l2 = s2; l2 < n4; ++l2) Pa(this, l2, e5);
                    var c2 = this.doc.sel.ranges;
                    0 == i2.ch && t4.length == c2.length && c2[r3].from().ch > 0 && ni(this.doc, r3, new Bo(i2, c2[r3].to()), $);
                  }
                }
              }), getTokenAt: function(e5, t4) {
                return xt(this, e5, t4);
              }, getLineTokens: function(e5, t4) {
                return xt(this, ot(e5), t4, true);
              }, getTokenTypeAt: function(e5) {
                e5 = ft(this.doc, e5);
                var t4, n4 = gt(this, Ye(this.doc, e5.line)), r3 = 0, o2 = (n4.length - 1) / 2, i2 = e5.ch;
                if (0 == i2) t4 = n4[2];
                else for (; ; ) {
                  var a2 = r3 + o2 >> 1;
                  if ((a2 ? n4[2 * a2 - 1] : 0) >= i2) o2 = a2;
                  else {
                    if (!(n4[2 * a2 + 1] < i2)) {
                      t4 = n4[2 * a2 + 2];
                      break;
                    }
                    r3 = a2 + 1;
                  }
                }
                var s2 = t4 ? t4.indexOf("overlay ") : -1;
                return s2 < 0 ? t4 : 0 == s2 ? null : t4.slice(0, s2 - 1);
              }, getModeAt: function(t4) {
                var n4 = this.doc.mode;
                return n4.innerMode ? e4.innerMode(n4, this.getTokenAt(t4).state).mode : n4;
              }, getHelper: function(e5, t4) {
                return this.getHelpers(e5, t4)[0];
              }, getHelpers: function(e5, t4) {
                var r3 = [];
                if (!n3.hasOwnProperty(t4)) return r3;
                var o2 = n3[t4], i2 = this.getModeAt(e5);
                if ("string" == typeof i2[t4]) o2[i2[t4]] && r3.push(o2[i2[t4]]);
                else if (i2[t4]) for (var a2 = 0; a2 < i2[t4].length; a2++) {
                  var s2 = o2[i2[t4][a2]];
                  s2 && r3.push(s2);
                }
                else i2.helperType && o2[i2.helperType] ? r3.push(o2[i2.helperType]) : o2[i2.name] && r3.push(o2[i2.name]);
                for (var l2 = 0; l2 < o2._global.length; l2++) {
                  var c2 = o2._global[l2];
                  c2.pred(i2, this) && -1 == U(r3, c2.val) && r3.push(c2.val);
                }
                return r3;
              }, getStateAfter: function(e5, t4) {
                var n4 = this.doc;
                return vt(this, (e5 = ut(n4, null == e5 ? n4.first + n4.size - 1 : e5)) + 1, t4).state;
              }, cursorCoords: function(e5, t4) {
                var n4 = this.doc.sel.primary();
                return Jn(this, null == e5 ? n4.head : "object" == typeof e5 ? ft(this.doc, e5) : e5 ? n4.from() : n4.to(), t4 || "page");
              }, charCoords: function(e5, t4) {
                return Yn(this, ft(this.doc, e5), t4 || "page");
              }, coordsChar: function(e5, t4) {
                return er(this, (e5 = Zn(this, e5, t4 || "page")).left, e5.top);
              }, lineAtHeight: function(e5, t4) {
                return e5 = Zn(this, { top: e5, left: 0 }, t4 || "page").top, tt(this.doc, e5 + this.display.viewOffset);
              }, heightAtLine: function(e5, t4, n4) {
                var r3, o2 = false;
                if ("number" == typeof e5) {
                  var i2 = this.doc.first + this.doc.size - 1;
                  e5 < this.doc.first ? e5 = this.doc.first : e5 > i2 && (e5 = i2, o2 = true), r3 = Ye(this.doc, e5);
                } else r3 = e5;
                return Kn(this, r3, { top: 0, left: 0 }, t4 || "page", n4 || o2).top + (o2 ? this.doc.height - qt(r3) : 0);
              }, defaultTextHeight: function() {
                return sr(this.display);
              }, defaultCharWidth: function() {
                return lr(this.display);
              }, getViewport: function() {
                return { from: this.display.viewFrom, to: this.display.viewTo };
              }, addWidget: function(e5, t4, n4, r3, o2) {
                var i2, a2, s2, l2 = this.display, c2 = (e5 = Jn(this, ft(this.doc, e5))).bottom, u2 = e5.left;
                if (t4.style.position = "absolute", t4.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(t4), l2.sizer.appendChild(t4), "over" == r3) c2 = e5.top;
                else if ("above" == r3 || "near" == r3) {
                  var f2 = Math.max(l2.wrapper.clientHeight, this.doc.height), d2 = Math.max(l2.sizer.clientWidth, l2.lineSpace.clientWidth);
                  ("above" == r3 || e5.bottom + t4.offsetHeight > f2) && e5.top > t4.offsetHeight ? c2 = e5.top - t4.offsetHeight : e5.bottom + t4.offsetHeight <= f2 && (c2 = e5.bottom), u2 + t4.offsetWidth > d2 && (u2 = d2 - t4.offsetWidth);
                }
                t4.style.top = c2 + "px", t4.style.left = t4.style.right = "", "right" == o2 ? (u2 = l2.sizer.clientWidth - t4.offsetWidth, t4.style.right = "0px") : ("left" == o2 ? u2 = 0 : "middle" == o2 && (u2 = (l2.sizer.clientWidth - t4.offsetWidth) / 2), t4.style.left = u2 + "px"), n4 && (i2 = this, a2 = { left: u2, top: c2, right: u2 + t4.offsetWidth, bottom: c2 + t4.offsetHeight }, null != (s2 = Fr(i2, a2)).scrollTop && zr(i2, s2.scrollTop), null != s2.scrollLeft && Wr(i2, s2.scrollLeft));
              }, triggerOnKeyDown: io(ma), triggerOnKeyPress: io(va), triggerOnKeyUp: ga, triggerOnMouseDown: io(Ca), execCommand: function(e5) {
                if (aa.hasOwnProperty(e5)) return aa[e5].call(null, this);
              }, triggerElectric: io(function(e5) {
                za(this, e5);
              }), findPosH: function(e5, t4, n4, r3) {
                var o2 = 1;
                t4 < 0 && (o2 = -1, t4 = -t4);
                for (var i2 = ft(this.doc, e5), a2 = 0; a2 < t4 && !(i2 = Ua(this.doc, i2, o2, n4, r3)).hitSide; ++a2) ;
                return i2;
              }, moveH: io(function(e5, t4) {
                var n4 = this;
                this.extendSelectionsBy(function(r3) {
                  return n4.display.shift || n4.doc.extend || r3.empty() ? Ua(n4.doc, r3.head, e5, t4, n4.options.rtlMoveVisually) : e5 < 0 ? r3.from() : r3.to();
                }, K);
              }), deleteH: io(function(e5, t4) {
                var n4 = this.doc.sel, r3 = this.doc;
                n4.somethingSelected() ? r3.replaceSelection("", null, "+delete") : na(this, function(n5) {
                  var o2 = Ua(r3, n5.head, e5, t4, false);
                  return e5 < 0 ? { from: o2, to: n5.head } : { from: n5.head, to: o2 };
                });
              }), findPosV: function(e5, t4, n4, r3) {
                var o2 = 1, i2 = r3;
                t4 < 0 && (o2 = -1, t4 = -t4);
                for (var a2 = ft(this.doc, e5), s2 = 0; s2 < t4; ++s2) {
                  var l2 = Jn(this, a2, "div");
                  if (null == i2 ? i2 = l2.left : l2.left = i2, (a2 = Va(this, l2, o2, n4)).hitSide) break;
                }
                return a2;
              }, moveV: io(function(e5, t4) {
                var n4 = this, r3 = this.doc, o2 = [], i2 = !this.display.shift && !r3.extend && r3.sel.somethingSelected();
                if (r3.extendSelectionsBy(function(a3) {
                  if (i2) return e5 < 0 ? a3.from() : a3.to();
                  var s2 = Jn(n4, a3.head, "div");
                  null != a3.goalColumn && (s2.left = a3.goalColumn), o2.push(s2.left);
                  var l2 = Va(n4, s2, e5, t4);
                  return "page" == t4 && a3 == r3.sel.primary() && Pr(n4, Yn(n4, l2, "div").top - s2.top), l2;
                }, K), o2.length) for (var a2 = 0; a2 < r3.sel.ranges.length; a2++) r3.sel.ranges[a2].goalColumn = o2[a2];
              }), findWordAt: function(e5) {
                var t4 = Ye(this.doc, e5.line).text, n4 = e5.ch, r3 = e5.ch;
                if (t4) {
                  var o2 = this.getHelper(e5, "wordChars");
                  "before" != e5.sticky && r3 != t4.length || !n4 ? ++r3 : --n4;
                  for (var i2 = t4.charAt(n4), a2 = oe(i2, o2) ? function(e6) {
                    return oe(e6, o2);
                  } : /\s/.test(i2) ? function(e6) {
                    return /\s/.test(e6);
                  } : function(e6) {
                    return !/\s/.test(e6) && !oe(e6);
                  }; n4 > 0 && a2(t4.charAt(n4 - 1)); ) --n4;
                  for (; r3 < t4.length && a2(t4.charAt(r3)); ) ++r3;
                }
                return new Bo(ot(e5.line, n4), ot(e5.line, r3));
              }, toggleOverwrite: function(e5) {
                null != e5 && e5 == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? P(this.display.cursorDiv, "CodeMirror-overwrite") : S(this.display.cursorDiv, "CodeMirror-overwrite"), Ae(this, "overwriteToggle", this, this.state.overwrite));
              }, hasFocus: function() {
                return this.display.input.getField() == F(I(this));
              }, isReadOnly: function() {
                return !(!this.options.readOnly && !this.doc.cantEdit);
              }, scrollTo: io(function(e5, t4) {
                jr(this, e5, t4);
              }), getScrollInfo: function() {
                var e5 = this.display.scroller;
                return { left: e5.scrollLeft, top: e5.scrollTop, height: e5.scrollHeight - On(this) - this.display.barHeight, width: e5.scrollWidth - On(this) - this.display.barWidth, clientHeight: Ln(this), clientWidth: Tn(this) };
              }, scrollIntoView: io(function(e5, t4) {
                null == e5 ? (e5 = { from: this.doc.sel.primary().head, to: null }, null == t4 && (t4 = this.options.cursorScrollMargin)) : "number" == typeof e5 ? e5 = { from: ot(e5, 0), to: null } : null == e5.from && (e5 = { from: e5, to: null }), e5.to || (e5.to = e5.from), e5.margin = t4 || 0, null != e5.from.line ? function(e6, t5) {
                  Ir(e6), e6.curOp.scrollToPos = t5;
                }(this, e5) : Dr(this, e5.from, e5.to, e5.margin);
              }), setSize: io(function(e5, t4) {
                var n4 = this, r3 = function(e6) {
                  return "number" == typeof e6 || /^\d+$/.test(String(e6)) ? e6 + "px" : e6;
                };
                null != e5 && (this.display.wrapper.style.width = r3(e5)), null != t4 && (this.display.wrapper.style.height = r3(t4)), this.options.lineWrapping && Un(this);
                var o2 = this.display.viewFrom;
                this.doc.iter(o2, this.display.viewTo, function(e6) {
                  if (e6.widgets) {
                    for (var t5 = 0; t5 < e6.widgets.length; t5++) if (e6.widgets[t5].noHScroll) {
                      gr(n4, o2, "widget");
                      break;
                    }
                  }
                  ++o2;
                }), this.curOp.forceUpdate = true, Ae(this, "refresh", this);
              }), operation: function(e5) {
                return ro(this, e5);
              }, startOperation: function() {
                return Yr(this);
              }, endOperation: function() {
                return Jr(this);
              }, refresh: io(function() {
                var e5 = this.display.cachedTextHeight;
                mr(this), this.curOp.forceUpdate = true, Vn(this), jr(this, this.doc.scrollLeft, this.doc.scrollTop), mo(this.display), (null == e5 || Math.abs(e5 - sr(this.display)) > 0.5 || this.options.lineWrapping) && dr(this), Ae(this, "refresh", this);
              }), swapDoc: io(function(e5) {
                var t4 = this.doc;
                return t4.cm = null, this.state.selectingText && this.state.selectingText(), Wo(this, e5), Vn(this), this.display.input.reset(), jr(this, e5.scrollLeft, e5.scrollTop), this.curOp.forceScroll = true, dn(this, "swapDoc", this, t4), t4;
              }), phrase: function(e5) {
                var t4 = this.options.phrases;
                return t4 && Object.prototype.hasOwnProperty.call(t4, e5) ? t4[e5] : e5;
              }, getInputField: function() {
                return this.display.input.getField();
              }, getWrapperElement: function() {
                return this.display.wrapper;
              }, getScrollerElement: function() {
                return this.display.scroller;
              }, getGutterElement: function() {
                return this.display.gutters;
              } }, xe(e4), e4.registerHelper = function(t4, r3, o2) {
                n3.hasOwnProperty(t4) || (n3[t4] = e4[t4] = { _global: [] }), n3[t4][r3] = o2;
              }, e4.registerGlobalHelper = function(t4, r3, o2, i2) {
                e4.registerHelper(t4, r3, i2), n3[t4]._global.push({ pred: o2, val: i2 });
              };
            }(La);
            var Ja = "iter insert remove copy getEditor constructor".split(" ");
            for (var Xa in ji.prototype) ji.prototype.hasOwnProperty(Xa) && U(Ja, Xa) < 0 && (La.prototype[Xa] = /* @__PURE__ */ function(e4) {
              return function() {
                return e4.apply(this.doc, arguments);
              };
            }(ji.prototype[Xa]));
            return xe(ji), La.inputStyles = { textarea: Ya, contenteditable: Ga }, La.defineMode = function(e4) {
              La.defaults.mode || "null" == e4 || (La.defaults.mode = e4), We.apply(this, arguments);
            }, La.defineMIME = function(e4, t3) {
              Re[e4] = t3;
            }, La.defineMode("null", function() {
              return { token: function(e4) {
                return e4.skipToEnd();
              } };
            }), La.defineMIME("text/plain", "null"), La.defineExtension = function(e4, t3) {
              La.prototype[e4] = t3;
            }, La.defineDocExtension = function(e4, t3) {
              ji.prototype[e4] = t3;
            }, La.fromTextArea = function(e4, t3) {
              if ((t3 = t3 ? R(t3) : {}).value = e4.value, !t3.tabindex && e4.tabIndex && (t3.tabindex = e4.tabIndex), !t3.placeholder && e4.placeholder && (t3.placeholder = e4.placeholder), null == t3.autofocus) {
                var n3 = F(e4.ownerDocument);
                t3.autofocus = n3 == e4 || null != e4.getAttribute("autofocus") && n3 == document.body;
              }
              function r3() {
                e4.value = s2.getValue();
              }
              var o2;
              if (e4.form && (me(e4.form, "submit", r3), !t3.leaveSubmitMethodAlone)) {
                var i2 = e4.form;
                o2 = i2.submit;
                try {
                  var a2 = i2.submit = function() {
                    r3(), i2.submit = o2, i2.submit(), i2.submit = a2;
                  };
                } catch (e5) {
                }
              }
              t3.finishInit = function(n4) {
                n4.save = r3, n4.getTextArea = function() {
                  return e4;
                }, n4.toTextArea = function() {
                  n4.toTextArea = isNaN, r3(), e4.parentNode.removeChild(n4.getWrapperElement()), e4.style.display = "", e4.form && (ve(e4.form, "submit", r3), t3.leaveSubmitMethodAlone || "function" != typeof e4.form.submit || (e4.form.submit = o2));
                };
              }, e4.style.display = "none";
              var s2 = La(function(t4) {
                return e4.parentNode.insertBefore(t4, e4.nextSibling);
              }, t3);
              return s2;
            }, function(e4) {
              e4.off = ve, e4.on = me, e4.wheelEventPixels = _o, e4.Doc = ji, e4.splitLines = Ne, e4.countColumn = W, e4.findColumn = Z, e4.isWordChar = re, e4.Pass = G, e4.signal = Ae, e4.Line = Yt, e4.changeEnd = Lo, e4.scrollbarModel = qr, e4.Pos = ot, e4.cmpPos = it, e4.modes = ze, e4.mimeModes = Re, e4.resolveMode = He, e4.getMode = Ue, e4.modeExtensions = Ve, e4.extendMode = Ge, e4.copyState = $e, e4.startState = Ke, e4.innerMode = qe, e4.commands = aa, e4.keyMap = Ki, e4.keyName = ea, e4.isModifierKey = Xi, e4.lookupKey = Ji, e4.normalizeKeyMap = Yi, e4.StringStream = Ze, e4.SharedTextMarker = Li, e4.TextMarker = Oi, e4.LineWidget = Si, e4.e_preventDefault = we, e4.e_stopPropagation = ke, e4.e_stop = _e, e4.addClass = P, e4.contains = L, e4.rmClass = S, e4.keyNames = Vi;
            }(La), La.version = "5.65.14", La;
          }();
        }, 9762: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            function t3(e4, t4, n4, r3, o2, i2) {
              this.indented = e4, this.column = t4, this.type = n4, this.info = r3, this.align = o2, this.prev = i2;
            }
            function n3(e4, n4, r3, o2) {
              var i2 = e4.indented;
              return e4.context && "statement" == e4.context.type && "statement" != r3 && (i2 = e4.context.indented), e4.context = new t3(i2, n4, r3, o2, null, e4.context);
            }
            function r2(e4) {
              var t4 = e4.context.type;
              return ")" != t4 && "]" != t4 && "}" != t4 || (e4.indented = e4.context.indented), e4.context = e4.context.prev;
            }
            function o(e4, t4, n4) {
              return "variable" == t4.prevToken || "type" == t4.prevToken || !!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(e4.string.slice(0, n4)) || !(!t4.typeAtEndOfLine || e4.column() != e4.indentation()) || void 0;
            }
            function i(e4) {
              for (; ; ) {
                if (!e4 || "top" == e4.type) return true;
                if ("}" == e4.type && "namespace" != e4.prev.info) return false;
                e4 = e4.prev;
              }
            }
            function a(e4) {
              for (var t4 = {}, n4 = e4.split(" "), r3 = 0; r3 < n4.length; ++r3) t4[n4[r3]] = true;
              return t4;
            }
            function s(e4, t4) {
              return "function" == typeof e4 ? e4(t4) : e4.propertyIsEnumerable(t4);
            }
            e3.defineMode("clike", function(a2, l2) {
              var c2, u2, f2 = a2.indentUnit, d2 = l2.statementIndentUnit || f2, p2 = l2.dontAlignCalls, h2 = l2.keywords || {}, m2 = l2.types || {}, g2 = l2.builtin || {}, v2 = l2.blockKeywords || {}, A2 = l2.defKeywords || {}, y2 = l2.atoms || {}, b2 = l2.hooks || {}, C2 = l2.multiLineStrings, x2 = false !== l2.indentStatements, w2 = false !== l2.indentSwitch, k2 = l2.namespaceSeparator, E2 = l2.isPunctuationChar || /[\[\]{}\(\),;\:\.]/, _2 = l2.numberStart || /[\d\.]/, S2 = l2.number || /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i, M2 = l2.isOperatorChar || /[+\-*&%=<>!?|\/]/, B2 = l2.isIdentifierChar || /[\w\$_\xa1-\uffff]/, O2 = l2.isReservedIdentifier || false;
              function T(e4, t4) {
                var n4, r3 = e4.next();
                if (b2[r3]) {
                  var o2 = b2[r3](e4, t4);
                  if (false !== o2) return o2;
                }
                if ('"' == r3 || "'" == r3) return t4.tokenize = (n4 = r3, function(e5, t5) {
                  for (var r4, o3 = false, i3 = false; null != (r4 = e5.next()); ) {
                    if (r4 == n4 && !o3) {
                      i3 = true;
                      break;
                    }
                    o3 = !o3 && "\\" == r4;
                  }
                  return (i3 || !o3 && !C2) && (t5.tokenize = null), "string";
                }), t4.tokenize(e4, t4);
                if (_2.test(r3)) {
                  if (e4.backUp(1), e4.match(S2)) return "number";
                  e4.next();
                }
                if (E2.test(r3)) return c2 = r3, null;
                if ("/" == r3) {
                  if (e4.eat("*")) return t4.tokenize = L, L(e4, t4);
                  if (e4.eat("/")) return e4.skipToEnd(), "comment";
                }
                if (M2.test(r3)) {
                  for (; !e4.match(/^\/[\/*]/, false) && e4.eat(M2); ) ;
                  return "operator";
                }
                if (e4.eatWhile(B2), k2) for (; e4.match(k2); ) e4.eatWhile(B2);
                var i2 = e4.current();
                return s(h2, i2) ? (s(v2, i2) && (c2 = "newstatement"), s(A2, i2) && (u2 = true), "keyword") : s(m2, i2) ? "type" : s(g2, i2) || O2 && O2(i2) ? (s(v2, i2) && (c2 = "newstatement"), "builtin") : s(y2, i2) ? "atom" : "variable";
              }
              function L(e4, t4) {
                for (var n4, r3 = false; n4 = e4.next(); ) {
                  if ("/" == n4 && r3) {
                    t4.tokenize = null;
                    break;
                  }
                  r3 = "*" == n4;
                }
                return "comment";
              }
              function F(e4, t4) {
                l2.typeFirstDefinitions && e4.eol() && i(t4.context) && (t4.typeAtEndOfLine = o(e4, t4, e4.pos));
              }
              return { startState: function(e4) {
                return { tokenize: null, context: new t3((e4 || 0) - f2, 0, "top", null, false), indented: 0, startOfLine: true, prevToken: null };
              }, token: function(e4, t4) {
                var a3 = t4.context;
                if (e4.sol() && (null == a3.align && (a3.align = false), t4.indented = e4.indentation(), t4.startOfLine = true), e4.eatSpace()) return F(e4, t4), null;
                c2 = u2 = null;
                var s2 = (t4.tokenize || T)(e4, t4);
                if ("comment" == s2 || "meta" == s2) return s2;
                if (null == a3.align && (a3.align = true), ";" == c2 || ":" == c2 || "," == c2 && e4.match(/^\s*(?:\/\/.*)?$/, false)) for (; "statement" == t4.context.type; ) r2(t4);
                else if ("{" == c2) n3(t4, e4.column(), "}");
                else if ("[" == c2) n3(t4, e4.column(), "]");
                else if ("(" == c2) n3(t4, e4.column(), ")");
                else if ("}" == c2) {
                  for (; "statement" == a3.type; ) a3 = r2(t4);
                  for ("}" == a3.type && (a3 = r2(t4)); "statement" == a3.type; ) a3 = r2(t4);
                } else c2 == a3.type ? r2(t4) : x2 && (("}" == a3.type || "top" == a3.type) && ";" != c2 || "statement" == a3.type && "newstatement" == c2) && n3(t4, e4.column(), "statement", e4.current());
                if ("variable" == s2 && ("def" == t4.prevToken || l2.typeFirstDefinitions && o(e4, t4, e4.start) && i(t4.context) && e4.match(/^\s*\(/, false)) && (s2 = "def"), b2.token) {
                  var f3 = b2.token(e4, t4, s2);
                  void 0 !== f3 && (s2 = f3);
                }
                return "def" == s2 && false === l2.styleDefs && (s2 = "variable"), t4.startOfLine = false, t4.prevToken = u2 ? "def" : s2 || c2, F(e4, t4), s2;
              }, indent: function(t4, n4) {
                if (t4.tokenize != T && null != t4.tokenize || t4.typeAtEndOfLine && i(t4.context)) return e3.Pass;
                var r3 = t4.context, o2 = n4 && n4.charAt(0), a3 = o2 == r3.type;
                if ("statement" == r3.type && "}" == o2 && (r3 = r3.prev), l2.dontIndentStatements) for (; "statement" == r3.type && l2.dontIndentStatements.test(r3.info); ) r3 = r3.prev;
                if (b2.indent) {
                  var s2 = b2.indent(t4, r3, n4, f2);
                  if ("number" == typeof s2) return s2;
                }
                var c3 = r3.prev && "switch" == r3.prev.info;
                if (l2.allmanIndentation && /[{(]/.test(o2)) {
                  for (; "top" != r3.type && "}" != r3.type; ) r3 = r3.prev;
                  return r3.indented;
                }
                return "statement" == r3.type ? r3.indented + ("{" == o2 ? 0 : d2) : !r3.align || p2 && ")" == r3.type ? ")" != r3.type || a3 ? r3.indented + (a3 ? 0 : f2) + (a3 || !c3 || /^(?:case|default)\b/.test(n4) ? 0 : f2) : r3.indented + d2 : r3.column + (a3 ? 0 : 1);
              }, electricInput: w2 ? /^\s*(?:case .*?:|default:|\{\}?|\})$/ : /^\s*[{}]$/, blockCommentStart: "/*", blockCommentEnd: "*/", blockCommentContinue: " * ", lineComment: "//", fold: "brace" };
            });
            var l = "auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran", c = "alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq", u = "bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available", f = "FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT", d = a("int long char short double float unsigned signed void bool"), p = a("SEL instancetype id Class Protocol BOOL");
            function h(e4) {
              return s(d, e4) || /.+_t$/.test(e4);
            }
            function m(e4) {
              return h(e4) || s(p, e4);
            }
            var g = "case do else for if switch while struct enum union", v = "struct enum union";
            function A(e4, t4) {
              if (!t4.startOfLine) return false;
              for (var n4, r3 = null; n4 = e4.peek(); ) {
                if ("\\" == n4 && e4.match(/^.$/)) {
                  r3 = A;
                  break;
                }
                if ("/" == n4 && e4.match(/^\/[\/\*]/, false)) break;
                e4.next();
              }
              return t4.tokenize = r3, "meta";
            }
            function y(e4, t4) {
              return "type" == t4.prevToken && "type";
            }
            function b(e4) {
              return !(!e4 || e4.length < 2 || "_" != e4[0] || "_" != e4[1] && e4[1] === e4[1].toLowerCase());
            }
            function C(e4) {
              return e4.eatWhile(/[\w\.']/), "number";
            }
            function x(e4, t4) {
              if (e4.backUp(1), e4.match(/^(?:R|u8R|uR|UR|LR)/)) {
                var n4 = e4.match(/^"([^\s\\()]{0,16})\(/);
                return !!n4 && (t4.cpp11RawStringDelim = n4[1], t4.tokenize = E, E(e4, t4));
              }
              return e4.match(/^(?:u8|u|U|L)/) ? !!e4.match(/^["']/, false) && "string" : (e4.next(), false);
            }
            function w(e4) {
              var t4 = /(\w+)::~?(\w+)$/.exec(e4);
              return t4 && t4[1] == t4[2];
            }
            function k(e4, t4) {
              for (var n4; null != (n4 = e4.next()); ) if ('"' == n4 && !e4.eat('"')) {
                t4.tokenize = null;
                break;
              }
              return "string";
            }
            function E(e4, t4) {
              var n4 = t4.cpp11RawStringDelim.replace(/[^\w\s]/g, "\\$&");
              return e4.match(new RegExp(".*?\\)" + n4 + '"')) ? t4.tokenize = null : e4.skipToEnd(), "string";
            }
            function _(t4, n4) {
              "string" == typeof t4 && (t4 = [t4]);
              var r3 = [];
              function o2(e4) {
                if (e4) for (var t5 in e4) e4.hasOwnProperty(t5) && r3.push(t5);
              }
              o2(n4.keywords), o2(n4.types), o2(n4.builtin), o2(n4.atoms), r3.length && (n4.helperType = t4[0], e3.registerHelper("hintWords", t4[0], r3));
              for (var i2 = 0; i2 < t4.length; ++i2) e3.defineMIME(t4[i2], n4);
            }
            function S(e4, t4) {
              for (var n4 = false; !e4.eol(); ) {
                if (!n4 && e4.match('"""')) {
                  t4.tokenize = null;
                  break;
                }
                n4 = "\\" == e4.next() && !n4;
              }
              return "string";
            }
            function M(e4) {
              return function(t4, n4) {
                for (var r3; r3 = t4.next(); ) {
                  if ("*" == r3 && t4.eat("/")) {
                    if (1 == e4) {
                      n4.tokenize = null;
                      break;
                    }
                    return n4.tokenize = M(e4 - 1), n4.tokenize(t4, n4);
                  }
                  if ("/" == r3 && t4.eat("*")) return n4.tokenize = M(e4 + 1), n4.tokenize(t4, n4);
                }
                return "comment";
              };
            }
            _(["text/x-csrc", "text/x-c", "text/x-chdr"], { name: "clike", keywords: a(l), types: h, blockKeywords: a(g), defKeywords: a(v), typeFirstDefinitions: true, atoms: a("NULL true false"), isReservedIdentifier: b, hooks: { "#": A, "*": y }, modeProps: { fold: ["brace", "include"] } }), _(["text/x-c++src", "text/x-c++hdr"], { name: "clike", keywords: a(l + " " + c), types: h, blockKeywords: a(g + " class try catch"), defKeywords: a(v + " class namespace"), typeFirstDefinitions: true, atoms: a("true false NULL nullptr"), dontIndentStatements: /^template$/, isIdentifierChar: /[\w\$_~\xa1-\uffff]/, isReservedIdentifier: b, hooks: { "#": A, "*": y, u: x, U: x, L: x, R: x, 0: C, 1: C, 2: C, 3: C, 4: C, 5: C, 6: C, 7: C, 8: C, 9: C, token: function(e4, t4, n4) {
              if ("variable" == n4 && "(" == e4.peek() && (";" == t4.prevToken || null == t4.prevToken || "}" == t4.prevToken) && w(e4.current())) return "def";
            } }, namespaceSeparator: "::", modeProps: { fold: ["brace", "include"] } }), _("text/x-java", { name: "clike", keywords: a("abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface"), types: a("var byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void"), blockKeywords: a("catch class do else finally for if switch try while"), defKeywords: a("class interface enum @interface"), typeFirstDefinitions: true, atoms: a("true false null"), number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i, hooks: { "@": function(e4) {
              return !e4.match("interface", false) && (e4.eatWhile(/[\w\$_]/), "meta");
            }, '"': function(e4, t4) {
              return !!e4.match(/""$/) && (t4.tokenize = S, t4.tokenize(e4, t4));
            } }, modeProps: { fold: ["brace", "import"] } }), _("text/x-csharp", { name: "clike", keywords: a("abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in init interface internal is lock namespace new operator out override params private protected public readonly record ref required return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield"), types: a("Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong"), blockKeywords: a("catch class do else finally for foreach if struct switch try while"), defKeywords: a("class interface namespace record struct var"), typeFirstDefinitions: true, atoms: a("true false null"), hooks: { "@": function(e4, t4) {
              return e4.eat('"') ? (t4.tokenize = k, k(e4, t4)) : (e4.eatWhile(/[\w\$_]/), "meta");
            } } }), _("text/x-scala", { name: "clike", keywords: a("abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble"), types: a("AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void"), multiLineStrings: true, blockKeywords: a("catch class enum do else finally for forSome if match switch try while"), defKeywords: a("class enum def object package trait type val var"), atoms: a("true false null"), indentStatements: false, indentSwitch: false, isOperatorChar: /[+\-*&%=<>!?|\/#:@]/, hooks: { "@": function(e4) {
              return e4.eatWhile(/[\w\$_]/), "meta";
            }, '"': function(e4, t4) {
              return !!e4.match('""') && (t4.tokenize = S, t4.tokenize(e4, t4));
            }, "'": function(e4) {
              return e4.match(/^(\\[^'\s]+|[^\\'])'/) ? "string-2" : (e4.eatWhile(/[\w\$_\xa1-\uffff]/), "atom");
            }, "=": function(e4, n4) {
              var r3 = n4.context;
              return !("}" != r3.type || !r3.align || !e4.eat(">")) && (n4.context = new t3(r3.indented, r3.column, r3.type, r3.info, null, r3.prev), "operator");
            }, "/": function(e4, t4) {
              return !!e4.eat("*") && (t4.tokenize = M(1), t4.tokenize(e4, t4));
            } }, modeProps: { closeBrackets: { pairs: '()[]{}""', triples: '"' } } }), _("text/x-kotlin", { name: "clike", keywords: a("package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value"), types: a("Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit"), intendSwitch: false, indentStatements: false, multiLineStrings: true, number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i, blockKeywords: a("catch class do else finally for if where try while enum"), defKeywords: a("class val var object interface fun"), atoms: a("true false null this"), hooks: { "@": function(e4) {
              return e4.eatWhile(/[\w\$_]/), "meta";
            }, "*": function(e4, t4) {
              return "." == t4.prevToken ? "variable" : "operator";
            }, '"': function(e4, t4) {
              return t4.tokenize = (n4 = e4.match('""'), function(e5, t5) {
                for (var r3, o2 = false, i2 = false; !e5.eol(); ) {
                  if (!n4 && !o2 && e5.match('"')) {
                    i2 = true;
                    break;
                  }
                  if (n4 && e5.match('"""')) {
                    i2 = true;
                    break;
                  }
                  r3 = e5.next(), !o2 && "$" == r3 && e5.match("{") && e5.skipTo("}"), o2 = !o2 && "\\" == r3 && !n4;
                }
                return !i2 && n4 || (t5.tokenize = null), "string";
              }), t4.tokenize(e4, t4);
              var n4;
            }, "/": function(e4, t4) {
              return !!e4.eat("*") && (t4.tokenize = M(1), t4.tokenize(e4, t4));
            }, indent: function(e4, t4, n4, r3) {
              var o2 = n4 && n4.charAt(0);
              return "}" != e4.prevToken && ")" != e4.prevToken || "" != n4 ? "operator" == e4.prevToken && "}" != n4 && "}" != e4.context.type || "variable" == e4.prevToken && "." == o2 || ("}" == e4.prevToken || ")" == e4.prevToken) && "." == o2 ? 2 * r3 + t4.indented : t4.align && "}" == t4.type ? t4.indented + (e4.context.type == (n4 || "").charAt(0) ? 0 : r3) : void 0 : e4.indented;
            } }, modeProps: { closeBrackets: { triples: '"' } } }), _(["x-shader/x-vertex", "x-shader/x-fragment"], { name: "clike", keywords: a("sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout"), types: a("float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4"), blockKeywords: a("for while do if else struct"), builtin: a("radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4"), atoms: a("true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers"), indentSwitch: false, hooks: { "#": A }, modeProps: { fold: ["brace", "include"] } }), _("text/x-nesc", { name: "clike", keywords: a(l + " as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends"), types: h, blockKeywords: a(g), atoms: a("null true false"), hooks: { "#": A }, modeProps: { fold: ["brace", "include"] } }), _("text/x-objectivec", { name: "clike", keywords: a(l + " " + u), types: m, builtin: a(f), blockKeywords: a(g + " @synthesize @try @catch @finally @autoreleasepool @synchronized"), defKeywords: a(v + " @interface @implementation @protocol @class"), dontIndentStatements: /^@.*$/, typeFirstDefinitions: true, atoms: a("YES NO NULL Nil nil true false nullptr"), isReservedIdentifier: b, hooks: { "#": A, "*": y }, modeProps: { fold: ["brace", "include"] } }), _("text/x-objectivec++", { name: "clike", keywords: a(l + " " + u + " " + c), types: m, builtin: a(f), blockKeywords: a(g + " @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch"), defKeywords: a(v + " @interface @implementation @protocol @class class namespace"), dontIndentStatements: /^@.*$|^template$/, typeFirstDefinitions: true, atoms: a("YES NO NULL Nil nil true false nullptr"), isReservedIdentifier: b, hooks: { "#": A, "*": y, u: x, U: x, L: x, R: x, 0: C, 1: C, 2: C, 3: C, 4: C, 5: C, 6: C, 7: C, 8: C, 9: C, token: function(e4, t4, n4) {
              if ("variable" == n4 && "(" == e4.peek() && (";" == t4.prevToken || null == t4.prevToken || "}" == t4.prevToken) && w(e4.current())) return "def";
            } }, namespaceSeparator: "::", modeProps: { fold: ["brace", "include"] } }), _("text/x-squirrel", { name: "clike", keywords: a("base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static"), types: h, blockKeywords: a("case catch class else for foreach if switch try while"), defKeywords: a("function local class"), typeFirstDefinitions: true, atoms: a("true false null"), hooks: { "#": A }, modeProps: { fold: ["brace", "include"] } });
            var B = null;
            function O(e4) {
              return function(t4, n4) {
                for (var r3, o2 = false, i2 = false; !t4.eol(); ) {
                  if (!o2 && t4.match('"') && ("single" == e4 || t4.match('""'))) {
                    i2 = true;
                    break;
                  }
                  if (!o2 && t4.match("``")) {
                    B = O(e4), i2 = true;
                    break;
                  }
                  r3 = t4.next(), o2 = "single" == e4 && !o2 && "\\" == r3;
                }
                return i2 && (n4.tokenize = null), "string";
              };
            }
            _("text/x-ceylon", { name: "clike", keywords: a("abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while"), types: function(e4) {
              var t4 = e4.charAt(0);
              return t4 === t4.toUpperCase() && t4 !== t4.toLowerCase();
            }, blockKeywords: a("case catch class dynamic else finally for function if interface module new object switch try while"), defKeywords: a("class dynamic function interface module object package value"), builtin: a("abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable"), isPunctuationChar: /[\[\]{}\(\),;\:\.`]/, isOperatorChar: /[+\-*&%=<>!?|^~:\/]/, numberStart: /[\d#$]/, number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i, multiLineStrings: true, typeFirstDefinitions: true, atoms: a("true false null larger smaller equal empty finished"), indentSwitch: false, styleDefs: false, hooks: { "@": function(e4) {
              return e4.eatWhile(/[\w\$_]/), "meta";
            }, '"': function(e4, t4) {
              return t4.tokenize = O(e4.match('""') ? "triple" : "single"), t4.tokenize(e4, t4);
            }, "`": function(e4, t4) {
              return !(!B || !e4.match("`")) && (t4.tokenize = B, B = null, t4.tokenize(e4, t4));
            }, "'": function(e4) {
              return e4.eatWhile(/[\w\$_\xa1-\uffff]/), "atom";
            }, token: function(e4, t4, n4) {
              if (("variable" == n4 || "type" == n4) && "." == t4.prevToken) return "variable-2";
            } }, modeProps: { fold: ["brace", "import"], closeBrackets: { triples: '"' } } });
          }(n2(4631));
        }, 3123: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            e3.defineMode("groovy", function(t3) {
              function n3(e4) {
                for (var t4 = {}, n4 = e4.split(" "), r3 = 0; r3 < n4.length; ++r3) t4[n4[r3]] = true;
                return t4;
              }
              var r2, o = n3("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while"), i = n3("catch class def do else enum finally for if interface switch trait try while"), a = n3("return break continue"), s = n3("null true false this");
              function l(e4, t4) {
                var n4 = e4.next();
                if ('"' == n4 || "'" == n4) return c(n4, e4, t4);
                if (/[\[\]{}\(\),;\:\.]/.test(n4)) return r2 = n4, null;
                if (/\d/.test(n4)) return e4.eatWhile(/[\w\.]/), e4.eat(/eE/) && (e4.eat(/\+\-/), e4.eatWhile(/\d/)), "number";
                if ("/" == n4) {
                  if (e4.eat("*")) return t4.tokenize.push(d), d(e4, t4);
                  if (e4.eat("/")) return e4.skipToEnd(), "comment";
                  if (p(t4.lastToken, false)) return c(n4, e4, t4);
                }
                if ("-" == n4 && e4.eat(">")) return r2 = "->", null;
                if (/[+\-*&%=<>!?|\/~]/.test(n4)) return e4.eatWhile(/[+\-*&%=<>|~]/), "operator";
                if (e4.eatWhile(/[\w\$_]/), "@" == n4) return e4.eatWhile(/[\w\$_\.]/), "meta";
                if ("." == t4.lastToken) return "property";
                if (e4.eat(":")) return r2 = "proplabel", "property";
                var l2 = e4.current();
                return s.propertyIsEnumerable(l2) ? "atom" : o.propertyIsEnumerable(l2) ? (i.propertyIsEnumerable(l2) ? r2 = "newstatement" : a.propertyIsEnumerable(l2) && (r2 = "standalone"), "keyword") : "variable";
              }
              function c(e4, t4, n4) {
                var r3 = false;
                if ("/" != e4 && t4.eat(e4)) {
                  if (!t4.eat(e4)) return "string";
                  r3 = true;
                }
                function o2(t5, n5) {
                  for (var o3, i2 = false, a2 = !r3; null != (o3 = t5.next()); ) {
                    if (o3 == e4 && !i2) {
                      if (!r3) break;
                      if (t5.match(e4 + e4)) {
                        a2 = true;
                        break;
                      }
                    }
                    if ('"' == e4 && "$" == o3 && !i2) {
                      if (t5.eat("{")) return n5.tokenize.push(u()), "string";
                      if (t5.match(/^\w/, false)) return n5.tokenize.push(f), "string";
                    }
                    i2 = !i2 && "\\" == o3;
                  }
                  return a2 && n5.tokenize.pop(), "string";
                }
                return n4.tokenize.push(o2), o2(t4, n4);
              }
              function u() {
                var e4 = 1;
                function t4(t5, n4) {
                  if ("}" == t5.peek()) {
                    if (0 == --e4) return n4.tokenize.pop(), n4.tokenize[n4.tokenize.length - 1](t5, n4);
                  } else "{" == t5.peek() && e4++;
                  return l(t5, n4);
                }
                return t4.isBase = true, t4;
              }
              function f(e4, t4) {
                var n4 = e4.match(/^(\.|[\w\$_]+)/);
                return n4 ? "." == n4[0] ? null : "variable" : (t4.tokenize.pop(), t4.tokenize[t4.tokenize.length - 1](e4, t4));
              }
              function d(e4, t4) {
                for (var n4, r3 = false; n4 = e4.next(); ) {
                  if ("/" == n4 && r3) {
                    t4.tokenize.pop();
                    break;
                  }
                  r3 = "*" == n4;
                }
                return "comment";
              }
              function p(e4, t4) {
                return !e4 || "operator" == e4 || "->" == e4 || /[\.\[\{\(,;:]/.test(e4) || "newstatement" == e4 || "keyword" == e4 || "proplabel" == e4 || "standalone" == e4 && !t4;
              }
              function h(e4, t4, n4, r3, o2) {
                this.indented = e4, this.column = t4, this.type = n4, this.align = r3, this.prev = o2;
              }
              function m(e4, t4, n4) {
                return e4.context = new h(e4.indented, t4, n4, null, e4.context);
              }
              function g(e4) {
                var t4 = e4.context.type;
                return ")" != t4 && "]" != t4 && "}" != t4 || (e4.indented = e4.context.indented), e4.context = e4.context.prev;
              }
              return l.isBase = true, { startState: function(e4) {
                return { tokenize: [l], context: new h((e4 || 0) - t3.indentUnit, 0, "top", false), indented: 0, startOfLine: true, lastToken: null };
              }, token: function(e4, t4) {
                var n4 = t4.context;
                if (e4.sol() && (null == n4.align && (n4.align = false), t4.indented = e4.indentation(), t4.startOfLine = true, "statement" != n4.type || p(t4.lastToken, true) || (g(t4), n4 = t4.context)), e4.eatSpace()) return null;
                r2 = null;
                var o2 = t4.tokenize[t4.tokenize.length - 1](e4, t4);
                if ("comment" == o2) return o2;
                if (null == n4.align && (n4.align = true), ";" != r2 && ":" != r2 || "statement" != n4.type) if ("->" == r2 && "statement" == n4.type && "}" == n4.prev.type) g(t4), t4.context.align = false;
                else if ("{" == r2) m(t4, e4.column(), "}");
                else if ("[" == r2) m(t4, e4.column(), "]");
                else if ("(" == r2) m(t4, e4.column(), ")");
                else if ("}" == r2) {
                  for (; "statement" == n4.type; ) n4 = g(t4);
                  for ("}" == n4.type && (n4 = g(t4)); "statement" == n4.type; ) n4 = g(t4);
                } else r2 == n4.type ? g(t4) : ("}" == n4.type || "top" == n4.type || "statement" == n4.type && "newstatement" == r2) && m(t4, e4.column(), "statement");
                else g(t4);
                return t4.startOfLine = false, t4.lastToken = r2 || o2, o2;
              }, indent: function(n4, r3) {
                if (!n4.tokenize[n4.tokenize.length - 1].isBase) return e3.Pass;
                var o2 = r3 && r3.charAt(0), i2 = n4.context;
                "statement" != i2.type || p(n4.lastToken, true) || (i2 = i2.prev);
                var a2 = o2 == i2.type;
                return "statement" == i2.type ? i2.indented + ("{" == o2 ? 0 : t3.indentUnit) : i2.align ? i2.column + (a2 ? 0 : 1) : i2.indented + (a2 ? 0 : t3.indentUnit);
              }, electricChars: "{}", closeBrackets: { triples: `'"` }, fold: "brace", blockCommentStart: "/*", blockCommentEnd: "*/", lineComment: "//" };
            }), e3.defineMIME("text/x-groovy", "groovy");
          }(n2(4631));
        }, 6876: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            e3.defineMode("javascript", function(t3, n3) {
              var r2, o, i = t3.indentUnit, a = n3.statementIndent, s = n3.jsonld, l = n3.json || s, c = false !== n3.trackScope, u = n3.typescript, f = n3.wordCharacters || /[\w$\xa1-\uffff]/, d = function() {
                function e4(e5) {
                  return { type: e5, style: "keyword" };
                }
                var t4 = e4("keyword a"), n4 = e4("keyword b"), r3 = e4("keyword c"), o2 = e4("keyword d"), i2 = e4("operator"), a2 = { type: "atom", style: "atom" };
                return { if: e4("if"), while: t4, with: t4, else: n4, do: n4, try: n4, finally: n4, return: o2, break: o2, continue: o2, new: e4("new"), delete: r3, void: r3, throw: r3, debugger: e4("debugger"), var: e4("var"), const: e4("var"), let: e4("var"), function: e4("function"), catch: e4("catch"), for: e4("for"), switch: e4("switch"), case: e4("case"), default: e4("default"), in: i2, typeof: i2, instanceof: i2, true: a2, false: a2, null: a2, undefined: a2, NaN: a2, Infinity: a2, this: e4("this"), class: e4("class"), super: e4("atom"), yield: r3, export: e4("export"), import: e4("import"), extends: r3, await: r3 };
              }(), p = /[+\-*&%=<>!?|~^@]/, h = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
              function m(e4, t4, n4) {
                return r2 = e4, o = n4, t4;
              }
              function g(e4, t4) {
                var n4, r3 = e4.next();
                if ('"' == r3 || "'" == r3) return t4.tokenize = (n4 = r3, function(e5, t5) {
                  var r4, o3 = false;
                  if (s && "@" == e5.peek() && e5.match(h)) return t5.tokenize = g, m("jsonld-keyword", "meta");
                  for (; null != (r4 = e5.next()) && (r4 != n4 || o3); ) o3 = !o3 && "\\" == r4;
                  return o3 || (t5.tokenize = g), m("string", "string");
                }), t4.tokenize(e4, t4);
                if ("." == r3 && e4.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) return m("number", "number");
                if ("." == r3 && e4.match("..")) return m("spread", "meta");
                if (/[\[\]{}\(\),;\:\.]/.test(r3)) return m(r3);
                if ("=" == r3 && e4.eat(">")) return m("=>", "operator");
                if ("0" == r3 && e4.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) return m("number", "number");
                if (/\d/.test(r3)) return e4.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/), m("number", "number");
                if ("/" == r3) return e4.eat("*") ? (t4.tokenize = v, v(e4, t4)) : e4.eat("/") ? (e4.skipToEnd(), m("comment", "comment")) : et(e4, t4, 1) ? (function(e5) {
                  for (var t5, n5 = false, r4 = false; null != (t5 = e5.next()); ) {
                    if (!n5) {
                      if ("/" == t5 && !r4) return;
                      "[" == t5 ? r4 = true : r4 && "]" == t5 && (r4 = false);
                    }
                    n5 = !n5 && "\\" == t5;
                  }
                }(e4), e4.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/), m("regexp", "string-2")) : (e4.eat("="), m("operator", "operator", e4.current()));
                if ("`" == r3) return t4.tokenize = A, A(e4, t4);
                if ("#" == r3 && "!" == e4.peek()) return e4.skipToEnd(), m("meta", "meta");
                if ("#" == r3 && e4.eatWhile(f)) return m("variable", "property");
                if ("<" == r3 && e4.match("!--") || "-" == r3 && e4.match("->") && !/\S/.test(e4.string.slice(0, e4.start))) return e4.skipToEnd(), m("comment", "comment");
                if (p.test(r3)) return ">" == r3 && t4.lexical && ">" == t4.lexical.type || (e4.eat("=") ? "!" != r3 && "=" != r3 || e4.eat("=") : /[<>*+\-|&?]/.test(r3) && (e4.eat(r3), ">" == r3 && e4.eat(r3))), "?" == r3 && e4.eat(".") ? m(".") : m("operator", "operator", e4.current());
                if (f.test(r3)) {
                  e4.eatWhile(f);
                  var o2 = e4.current();
                  if ("." != t4.lastType) {
                    if (d.propertyIsEnumerable(o2)) {
                      var i2 = d[o2];
                      return m(i2.type, i2.style, o2);
                    }
                    if ("async" == o2 && e4.match(/^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/, false)) return m("async", "keyword", o2);
                  }
                  return m("variable", "variable", o2);
                }
              }
              function v(e4, t4) {
                for (var n4, r3 = false; n4 = e4.next(); ) {
                  if ("/" == n4 && r3) {
                    t4.tokenize = g;
                    break;
                  }
                  r3 = "*" == n4;
                }
                return m("comment", "comment");
              }
              function A(e4, t4) {
                for (var n4, r3 = false; null != (n4 = e4.next()); ) {
                  if (!r3 && ("`" == n4 || "$" == n4 && e4.eat("{"))) {
                    t4.tokenize = g;
                    break;
                  }
                  r3 = !r3 && "\\" == n4;
                }
                return m("quasi", "string-2", e4.current());
              }
              var y = "([{}])";
              function b(e4, t4) {
                t4.fatArrowAt && (t4.fatArrowAt = null);
                var n4 = e4.string.indexOf("=>", e4.start);
                if (!(n4 < 0)) {
                  if (u) {
                    var r3 = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e4.string.slice(e4.start, n4));
                    r3 && (n4 = r3.index);
                  }
                  for (var o2 = 0, i2 = false, a2 = n4 - 1; a2 >= 0; --a2) {
                    var s2 = e4.string.charAt(a2), l2 = y.indexOf(s2);
                    if (l2 >= 0 && l2 < 3) {
                      if (!o2) {
                        ++a2;
                        break;
                      }
                      if (0 == --o2) {
                        "(" == s2 && (i2 = true);
                        break;
                      }
                    } else if (l2 >= 3 && l2 < 6) ++o2;
                    else if (f.test(s2)) i2 = true;
                    else if (/["'\/`]/.test(s2)) for (; ; --a2) {
                      if (0 == a2) return;
                      if (e4.string.charAt(a2 - 1) == s2 && "\\" != e4.string.charAt(a2 - 2)) {
                        a2--;
                        break;
                      }
                    }
                    else if (i2 && !o2) {
                      ++a2;
                      break;
                    }
                  }
                  i2 && !o2 && (t4.fatArrowAt = a2);
                }
              }
              var C = { atom: true, number: true, variable: true, string: true, regexp: true, this: true, import: true, "jsonld-keyword": true };
              function x(e4, t4, n4, r3, o2, i2) {
                this.indented = e4, this.column = t4, this.type = n4, this.prev = o2, this.info = i2, null != r3 && (this.align = r3);
              }
              function w(e4, t4) {
                if (!c) return false;
                for (var n4 = e4.localVars; n4; n4 = n4.next) if (n4.name == t4) return true;
                for (var r3 = e4.context; r3; r3 = r3.prev) for (n4 = r3.vars; n4; n4 = n4.next) if (n4.name == t4) return true;
              }
              function k(e4, t4, n4, r3, o2) {
                var i2 = e4.cc;
                for (E.state = e4, E.stream = o2, E.marked = null, E.cc = i2, E.style = t4, e4.lexical.hasOwnProperty("align") || (e4.lexical.align = true); ; ) if ((i2.length ? i2.pop() : l ? U : W)(n4, r3)) {
                  for (; i2.length && i2[i2.length - 1].lex; ) i2.pop()();
                  return E.marked ? E.marked : "variable" == n4 && w(e4, r3) ? "variable-2" : t4;
                }
              }
              var E = { state: null, column: null, marked: null, cc: null };
              function _() {
                for (var e4 = arguments.length - 1; e4 >= 0; e4--) E.cc.push(arguments[e4]);
              }
              function S() {
                return _.apply(null, arguments), true;
              }
              function M(e4, t4) {
                for (var n4 = t4; n4; n4 = n4.next) if (n4.name == e4) return true;
                return false;
              }
              function B(e4) {
                var t4 = E.state;
                if (E.marked = "def", c) {
                  if (t4.context) {
                    if ("var" == t4.lexical.info && t4.context && t4.context.block) {
                      var r3 = O(e4, t4.context);
                      if (null != r3) return void (t4.context = r3);
                    } else if (!M(e4, t4.localVars)) return void (t4.localVars = new F(e4, t4.localVars));
                  }
                  n3.globalVars && !M(e4, t4.globalVars) && (t4.globalVars = new F(e4, t4.globalVars));
                }
              }
              function O(e4, t4) {
                if (t4) {
                  if (t4.block) {
                    var n4 = O(e4, t4.prev);
                    return n4 ? n4 == t4.prev ? t4 : new L(n4, t4.vars, true) : null;
                  }
                  return M(e4, t4.vars) ? t4 : new L(t4.prev, new F(e4, t4.vars), false);
                }
                return null;
              }
              function T(e4) {
                return "public" == e4 || "private" == e4 || "protected" == e4 || "abstract" == e4 || "readonly" == e4;
              }
              function L(e4, t4, n4) {
                this.prev = e4, this.vars = t4, this.block = n4;
              }
              function F(e4, t4) {
                this.name = e4, this.next = t4;
              }
              var P = new F("this", new F("arguments", null));
              function N() {
                E.state.context = new L(E.state.context, E.state.localVars, false), E.state.localVars = P;
              }
              function j() {
                E.state.context = new L(E.state.context, E.state.localVars, true), E.state.localVars = null;
              }
              function I() {
                E.state.localVars = E.state.context.vars, E.state.context = E.state.context.prev;
              }
              function D(e4, t4) {
                var n4 = function() {
                  var n5 = E.state, r3 = n5.indented;
                  if ("stat" == n5.lexical.type) r3 = n5.lexical.indented;
                  else for (var o2 = n5.lexical; o2 && ")" == o2.type && o2.align; o2 = o2.prev) r3 = o2.indented;
                  n5.lexical = new x(r3, E.stream.column(), e4, null, n5.lexical, t4);
                };
                return n4.lex = true, n4;
              }
              function z() {
                var e4 = E.state;
                e4.lexical.prev && (")" == e4.lexical.type && (e4.indented = e4.lexical.indented), e4.lexical = e4.lexical.prev);
              }
              function R(e4) {
                return function t4(n4) {
                  return n4 == e4 ? S() : ";" == e4 || "}" == n4 || ")" == n4 || "]" == n4 ? _() : S(t4);
                };
              }
              function W(e4, t4) {
                return "var" == e4 ? S(D("vardef", t4), Ee, R(";"), z) : "keyword a" == e4 ? S(D("form"), G, W, z) : "keyword b" == e4 ? S(D("form"), W, z) : "keyword d" == e4 ? E.stream.match(/^\s*$/, false) ? S() : S(D("stat"), q, R(";"), z) : "debugger" == e4 ? S(R(";")) : "{" == e4 ? S(D("}"), j, ce, z, I) : ";" == e4 ? S() : "if" == e4 ? ("else" == E.state.lexical.info && E.state.cc[E.state.cc.length - 1] == z && E.state.cc.pop()(), S(D("form"), G, W, z, Te)) : "function" == e4 ? S(Ne) : "for" == e4 ? S(D("form"), j, Le, W, I, z) : "class" == e4 || u && "interface" == t4 ? (E.marked = "keyword", S(D("form", "class" == e4 ? e4 : t4), Re, z)) : "variable" == e4 ? u && "declare" == t4 ? (E.marked = "keyword", S(W)) : u && ("module" == t4 || "enum" == t4 || "type" == t4) && E.stream.match(/^\s*\w/, false) ? (E.marked = "keyword", "enum" == t4 ? S(Xe) : "type" == t4 ? S(Ie, R("operator"), he, R(";")) : S(D("form"), _e, R("{"), D("}"), ce, z, z)) : u && "namespace" == t4 ? (E.marked = "keyword", S(D("form"), U, W, z)) : u && "abstract" == t4 ? (E.marked = "keyword", S(W)) : S(D("stat"), ne) : "switch" == e4 ? S(D("form"), G, R("{"), D("}", "switch"), j, ce, z, z, I) : "case" == e4 ? S(U, R(":")) : "default" == e4 ? S(R(":")) : "catch" == e4 ? S(D("form"), N, H, W, z, I) : "export" == e4 ? S(D("stat"), Ve, z) : "import" == e4 ? S(D("stat"), $e, z) : "async" == e4 ? S(W) : "@" == t4 ? S(U, W) : _(D("stat"), U, R(";"), z);
              }
              function H(e4) {
                if ("(" == e4) return S(De, R(")"));
              }
              function U(e4, t4) {
                return $(e4, t4, false);
              }
              function V(e4, t4) {
                return $(e4, t4, true);
              }
              function G(e4) {
                return "(" != e4 ? _() : S(D(")"), q, R(")"), z);
              }
              function $(e4, t4, n4) {
                if (E.state.fatArrowAt == E.stream.start) {
                  var r3 = n4 ? Q : X;
                  if ("(" == e4) return S(N, D(")"), se(De, ")"), z, R("=>"), r3, I);
                  if ("variable" == e4) return _(N, _e, R("=>"), r3, I);
                }
                var o2 = n4 ? Z : K;
                return C.hasOwnProperty(e4) ? S(o2) : "function" == e4 ? S(Ne, o2) : "class" == e4 || u && "interface" == t4 ? (E.marked = "keyword", S(D("form"), ze, z)) : "keyword c" == e4 || "async" == e4 ? S(n4 ? V : U) : "(" == e4 ? S(D(")"), q, R(")"), z, o2) : "operator" == e4 || "spread" == e4 ? S(n4 ? V : U) : "[" == e4 ? S(D("]"), Je, z, o2) : "{" == e4 ? le(oe, "}", null, o2) : "quasi" == e4 ? _(Y, o2) : "new" == e4 ? S(/* @__PURE__ */ function(e5) {
                  return function(t5) {
                    return "." == t5 ? S(e5 ? te : ee) : "variable" == t5 && u ? S(xe, e5 ? Z : K) : _(e5 ? V : U);
                  };
                }(n4)) : S();
              }
              function q(e4) {
                return e4.match(/[;\}\)\],]/) ? _() : _(U);
              }
              function K(e4, t4) {
                return "," == e4 ? S(q) : Z(e4, t4, false);
              }
              function Z(e4, t4, n4) {
                var r3 = 0 == n4 ? K : Z, o2 = 0 == n4 ? U : V;
                return "=>" == e4 ? S(N, n4 ? Q : X, I) : "operator" == e4 ? /\+\+|--/.test(t4) || u && "!" == t4 ? S(r3) : u && "<" == t4 && E.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false) ? S(D(">"), se(he, ">"), z, r3) : "?" == t4 ? S(U, R(":"), o2) : S(o2) : "quasi" == e4 ? _(Y, r3) : ";" != e4 ? "(" == e4 ? le(V, ")", "call", r3) : "." == e4 ? S(re, r3) : "[" == e4 ? S(D("]"), q, R("]"), z, r3) : u && "as" == t4 ? (E.marked = "keyword", S(he, r3)) : "regexp" == e4 ? (E.state.lastType = E.marked = "operator", E.stream.backUp(E.stream.pos - E.stream.start - 1), S(o2)) : void 0 : void 0;
              }
              function Y(e4, t4) {
                return "quasi" != e4 ? _() : "${" != t4.slice(t4.length - 2) ? S(Y) : S(q, J);
              }
              function J(e4) {
                if ("}" == e4) return E.marked = "string-2", E.state.tokenize = A, S(Y);
              }
              function X(e4) {
                return b(E.stream, E.state), _("{" == e4 ? W : U);
              }
              function Q(e4) {
                return b(E.stream, E.state), _("{" == e4 ? W : V);
              }
              function ee(e4, t4) {
                if ("target" == t4) return E.marked = "keyword", S(K);
              }
              function te(e4, t4) {
                if ("target" == t4) return E.marked = "keyword", S(Z);
              }
              function ne(e4) {
                return ":" == e4 ? S(z, W) : _(K, R(";"), z);
              }
              function re(e4) {
                if ("variable" == e4) return E.marked = "property", S();
              }
              function oe(e4, t4) {
                return "async" == e4 ? (E.marked = "property", S(oe)) : "variable" == e4 || "keyword" == E.style ? (E.marked = "property", "get" == t4 || "set" == t4 ? S(ie) : (u && E.state.fatArrowAt == E.stream.start && (n4 = E.stream.match(/^\s*:\s*/, false)) && (E.state.fatArrowAt = E.stream.pos + n4[0].length), S(ae))) : "number" == e4 || "string" == e4 ? (E.marked = s ? "property" : E.style + " property", S(ae)) : "jsonld-keyword" == e4 ? S(ae) : u && T(t4) ? (E.marked = "keyword", S(oe)) : "[" == e4 ? S(U, ue, R("]"), ae) : "spread" == e4 ? S(V, ae) : "*" == t4 ? (E.marked = "keyword", S(oe)) : ":" == e4 ? _(ae) : void 0;
                var n4;
              }
              function ie(e4) {
                return "variable" != e4 ? _(ae) : (E.marked = "property", S(Ne));
              }
              function ae(e4) {
                return ":" == e4 ? S(V) : "(" == e4 ? _(Ne) : void 0;
              }
              function se(e4, t4, n4) {
                function r3(o2, i2) {
                  if (n4 ? n4.indexOf(o2) > -1 : "," == o2) {
                    var a2 = E.state.lexical;
                    return "call" == a2.info && (a2.pos = (a2.pos || 0) + 1), S(function(n5, r4) {
                      return n5 == t4 || r4 == t4 ? _() : _(e4);
                    }, r3);
                  }
                  return o2 == t4 || i2 == t4 ? S() : n4 && n4.indexOf(";") > -1 ? _(e4) : S(R(t4));
                }
                return function(n5, o2) {
                  return n5 == t4 || o2 == t4 ? S() : _(e4, r3);
                };
              }
              function le(e4, t4, n4) {
                for (var r3 = 3; r3 < arguments.length; r3++) E.cc.push(arguments[r3]);
                return S(D(t4, n4), se(e4, t4), z);
              }
              function ce(e4) {
                return "}" == e4 ? S() : _(W, ce);
              }
              function ue(e4, t4) {
                if (u) {
                  if (":" == e4) return S(he);
                  if ("?" == t4) return S(ue);
                }
              }
              function fe(e4, t4) {
                if (u && (":" == e4 || "in" == t4)) return S(he);
              }
              function de(e4) {
                if (u && ":" == e4) return E.stream.match(/^\s*\w+\s+is\b/, false) ? S(U, pe, he) : S(he);
              }
              function pe(e4, t4) {
                if ("is" == t4) return E.marked = "keyword", S();
              }
              function he(e4, t4) {
                return "keyof" == t4 || "typeof" == t4 || "infer" == t4 || "readonly" == t4 ? (E.marked = "keyword", S("typeof" == t4 ? V : he)) : "variable" == e4 || "void" == t4 ? (E.marked = "type", S(Ce)) : "|" == t4 || "&" == t4 ? S(he) : "string" == e4 || "number" == e4 || "atom" == e4 ? S(Ce) : "[" == e4 ? S(D("]"), se(he, "]", ","), z, Ce) : "{" == e4 ? S(D("}"), ge, z, Ce) : "(" == e4 ? S(se(be, ")"), me, Ce) : "<" == e4 ? S(se(he, ">"), he) : "quasi" == e4 ? _(Ae, Ce) : void 0;
              }
              function me(e4) {
                if ("=>" == e4) return S(he);
              }
              function ge(e4) {
                return e4.match(/[\}\)\]]/) ? S() : "," == e4 || ";" == e4 ? S(ge) : _(ve, ge);
              }
              function ve(e4, t4) {
                return "variable" == e4 || "keyword" == E.style ? (E.marked = "property", S(ve)) : "?" == t4 || "number" == e4 || "string" == e4 ? S(ve) : ":" == e4 ? S(he) : "[" == e4 ? S(R("variable"), fe, R("]"), ve) : "(" == e4 ? _(je, ve) : e4.match(/[;\}\)\],]/) ? void 0 : S();
              }
              function Ae(e4, t4) {
                return "quasi" != e4 ? _() : "${" != t4.slice(t4.length - 2) ? S(Ae) : S(he, ye);
              }
              function ye(e4) {
                if ("}" == e4) return E.marked = "string-2", E.state.tokenize = A, S(Ae);
              }
              function be(e4, t4) {
                return "variable" == e4 && E.stream.match(/^\s*[?:]/, false) || "?" == t4 ? S(be) : ":" == e4 ? S(he) : "spread" == e4 ? S(be) : _(he);
              }
              function Ce(e4, t4) {
                return "<" == t4 ? S(D(">"), se(he, ">"), z, Ce) : "|" == t4 || "." == e4 || "&" == t4 ? S(he) : "[" == e4 ? S(he, R("]"), Ce) : "extends" == t4 || "implements" == t4 ? (E.marked = "keyword", S(he)) : "?" == t4 ? S(he, R(":"), he) : void 0;
              }
              function xe(e4, t4) {
                if ("<" == t4) return S(D(">"), se(he, ">"), z, Ce);
              }
              function we() {
                return _(he, ke);
              }
              function ke(e4, t4) {
                if ("=" == t4) return S(he);
              }
              function Ee(e4, t4) {
                return "enum" == t4 ? (E.marked = "keyword", S(Xe)) : _(_e, ue, Be, Oe);
              }
              function _e(e4, t4) {
                return u && T(t4) ? (E.marked = "keyword", S(_e)) : "variable" == e4 ? (B(t4), S()) : "spread" == e4 ? S(_e) : "[" == e4 ? le(Me, "]") : "{" == e4 ? le(Se, "}") : void 0;
              }
              function Se(e4, t4) {
                return "variable" != e4 || E.stream.match(/^\s*:/, false) ? ("variable" == e4 && (E.marked = "property"), "spread" == e4 ? S(_e) : "}" == e4 ? _() : "[" == e4 ? S(U, R("]"), R(":"), Se) : S(R(":"), _e, Be)) : (B(t4), S(Be));
              }
              function Me() {
                return _(_e, Be);
              }
              function Be(e4, t4) {
                if ("=" == t4) return S(V);
              }
              function Oe(e4) {
                if ("," == e4) return S(Ee);
              }
              function Te(e4, t4) {
                if ("keyword b" == e4 && "else" == t4) return S(D("form", "else"), W, z);
              }
              function Le(e4, t4) {
                return "await" == t4 ? S(Le) : "(" == e4 ? S(D(")"), Fe, z) : void 0;
              }
              function Fe(e4) {
                return "var" == e4 ? S(Ee, Pe) : "variable" == e4 ? S(Pe) : _(Pe);
              }
              function Pe(e4, t4) {
                return ")" == e4 ? S() : ";" == e4 ? S(Pe) : "in" == t4 || "of" == t4 ? (E.marked = "keyword", S(U, Pe)) : _(U, Pe);
              }
              function Ne(e4, t4) {
                return "*" == t4 ? (E.marked = "keyword", S(Ne)) : "variable" == e4 ? (B(t4), S(Ne)) : "(" == e4 ? S(N, D(")"), se(De, ")"), z, de, W, I) : u && "<" == t4 ? S(D(">"), se(we, ">"), z, Ne) : void 0;
              }
              function je(e4, t4) {
                return "*" == t4 ? (E.marked = "keyword", S(je)) : "variable" == e4 ? (B(t4), S(je)) : "(" == e4 ? S(N, D(")"), se(De, ")"), z, de, I) : u && "<" == t4 ? S(D(">"), se(we, ">"), z, je) : void 0;
              }
              function Ie(e4, t4) {
                return "keyword" == e4 || "variable" == e4 ? (E.marked = "type", S(Ie)) : "<" == t4 ? S(D(">"), se(we, ">"), z) : void 0;
              }
              function De(e4, t4) {
                return "@" == t4 && S(U, De), "spread" == e4 ? S(De) : u && T(t4) ? (E.marked = "keyword", S(De)) : u && "this" == e4 ? S(ue, Be) : _(_e, ue, Be);
              }
              function ze(e4, t4) {
                return "variable" == e4 ? Re(e4, t4) : We(e4, t4);
              }
              function Re(e4, t4) {
                if ("variable" == e4) return B(t4), S(We);
              }
              function We(e4, t4) {
                return "<" == t4 ? S(D(">"), se(we, ">"), z, We) : "extends" == t4 || "implements" == t4 || u && "," == e4 ? ("implements" == t4 && (E.marked = "keyword"), S(u ? he : U, We)) : "{" == e4 ? S(D("}"), He, z) : void 0;
              }
              function He(e4, t4) {
                return "async" == e4 || "variable" == e4 && ("static" == t4 || "get" == t4 || "set" == t4 || u && T(t4)) && E.stream.match(/^\s+#?[\w$\xa1-\uffff]/, false) ? (E.marked = "keyword", S(He)) : "variable" == e4 || "keyword" == E.style ? (E.marked = "property", S(Ue, He)) : "number" == e4 || "string" == e4 ? S(Ue, He) : "[" == e4 ? S(U, ue, R("]"), Ue, He) : "*" == t4 ? (E.marked = "keyword", S(He)) : u && "(" == e4 ? _(je, He) : ";" == e4 || "," == e4 ? S(He) : "}" == e4 ? S() : "@" == t4 ? S(U, He) : void 0;
              }
              function Ue(e4, t4) {
                if ("!" == t4) return S(Ue);
                if ("?" == t4) return S(Ue);
                if (":" == e4) return S(he, Be);
                if ("=" == t4) return S(V);
                var n4 = E.state.lexical.prev;
                return _(n4 && "interface" == n4.info ? je : Ne);
              }
              function Ve(e4, t4) {
                return "*" == t4 ? (E.marked = "keyword", S(Ye, R(";"))) : "default" == t4 ? (E.marked = "keyword", S(U, R(";"))) : "{" == e4 ? S(se(Ge, "}"), Ye, R(";")) : _(W);
              }
              function Ge(e4, t4) {
                return "as" == t4 ? (E.marked = "keyword", S(R("variable"))) : "variable" == e4 ? _(V, Ge) : void 0;
              }
              function $e(e4) {
                return "string" == e4 ? S() : "(" == e4 ? _(U) : "." == e4 ? _(K) : _(qe, Ke, Ye);
              }
              function qe(e4, t4) {
                return "{" == e4 ? le(qe, "}") : ("variable" == e4 && B(t4), "*" == t4 && (E.marked = "keyword"), S(Ze));
              }
              function Ke(e4) {
                if ("," == e4) return S(qe, Ke);
              }
              function Ze(e4, t4) {
                if ("as" == t4) return E.marked = "keyword", S(qe);
              }
              function Ye(e4, t4) {
                if ("from" == t4) return E.marked = "keyword", S(U);
              }
              function Je(e4) {
                return "]" == e4 ? S() : _(se(V, "]"));
              }
              function Xe() {
                return _(D("form"), _e, R("{"), D("}"), se(Qe, "}"), z, z);
              }
              function Qe() {
                return _(_e, Be);
              }
              function et(e4, t4, n4) {
                return t4.tokenize == g && /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t4.lastType) || "quasi" == t4.lastType && /\{\s*$/.test(e4.string.slice(0, e4.pos - (n4 || 0)));
              }
              return N.lex = j.lex = true, I.lex = true, z.lex = true, { startState: function(e4) {
                var t4 = { tokenize: g, lastType: "sof", cc: [], lexical: new x((e4 || 0) - i, 0, "block", false), localVars: n3.localVars, context: n3.localVars && new L(null, null, false), indented: e4 || 0 };
                return n3.globalVars && "object" == typeof n3.globalVars && (t4.globalVars = n3.globalVars), t4;
              }, token: function(e4, t4) {
                if (e4.sol() && (t4.lexical.hasOwnProperty("align") || (t4.lexical.align = false), t4.indented = e4.indentation(), b(e4, t4)), t4.tokenize != v && e4.eatSpace()) return null;
                var n4 = t4.tokenize(e4, t4);
                return "comment" == r2 ? n4 : (t4.lastType = "operator" != r2 || "++" != o && "--" != o ? r2 : "incdec", k(t4, n4, r2, o, e4));
              }, indent: function(t4, r3) {
                if (t4.tokenize == v || t4.tokenize == A) return e3.Pass;
                if (t4.tokenize != g) return 0;
                var o2, s2 = r3 && r3.charAt(0), l2 = t4.lexical;
                if (!/^\s*else\b/.test(r3)) for (var c2 = t4.cc.length - 1; c2 >= 0; --c2) {
                  var u2 = t4.cc[c2];
                  if (u2 == z) l2 = l2.prev;
                  else if (u2 != Te && u2 != I) break;
                }
                for (; ("stat" == l2.type || "form" == l2.type) && ("}" == s2 || (o2 = t4.cc[t4.cc.length - 1]) && (o2 == K || o2 == Z) && !/^[,\.=+\-*:?[\(]/.test(r3)); ) l2 = l2.prev;
                a && ")" == l2.type && "stat" == l2.prev.type && (l2 = l2.prev);
                var f2 = l2.type, d2 = s2 == f2;
                return "vardef" == f2 ? l2.indented + ("operator" == t4.lastType || "," == t4.lastType ? l2.info.length + 1 : 0) : "form" == f2 && "{" == s2 ? l2.indented : "form" == f2 ? l2.indented + i : "stat" == f2 ? l2.indented + (function(e4, t5) {
                  return "operator" == e4.lastType || "," == e4.lastType || p.test(t5.charAt(0)) || /[,.]/.test(t5.charAt(0));
                }(t4, r3) ? a || i : 0) : "switch" != l2.info || d2 || 0 == n3.doubleIndentSwitch ? l2.align ? l2.column + (d2 ? 0 : 1) : l2.indented + (d2 ? 0 : i) : l2.indented + (/^(?:case|default)\b/.test(r3) ? i : 2 * i);
              }, electricInput: /^\s*(?:case .*?:|default:|\{|\})$/, blockCommentStart: l ? null : "/*", blockCommentEnd: l ? null : "*/", blockCommentContinue: l ? null : " * ", lineComment: l ? null : "//", fold: "brace", closeBrackets: "()[]{}''\"\"``", helperType: l ? "json" : "javascript", jsonldMode: s, jsonMode: l, expressionAllowed: et, skipExpression: function(t4) {
                k(t4, "atom", "atom", "true", new e3.StringStream("", 2, null));
              } };
            }), e3.registerHelper("wordChars", "javascript", /[\w$]/), e3.defineMIME("text/javascript", "javascript"), e3.defineMIME("text/ecmascript", "javascript"), e3.defineMIME("application/javascript", "javascript"), e3.defineMIME("application/x-javascript", "javascript"), e3.defineMIME("application/ecmascript", "javascript"), e3.defineMIME("application/json", { name: "javascript", json: true }), e3.defineMIME("application/x-json", { name: "javascript", json: true }), e3.defineMIME("application/manifest+json", { name: "javascript", json: true }), e3.defineMIME("application/ld+json", { name: "javascript", jsonld: true }), e3.defineMIME("text/typescript", { name: "javascript", typescript: true }), e3.defineMIME("application/typescript", { name: "javascript", typescript: true });
          }(n2(4631));
        }, 1149: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            e3.defineMode("shell", function() {
              var t3 = {};
              function n3(e4, n4) {
                for (var r3 = 0; r3 < n4.length; r3++) t3[n4[r3]] = e4;
              }
              var r2 = ["true", "false"], o = ["if", "then", "do", "else", "elif", "while", "until", "for", "in", "esac", "fi", "fin", "fil", "done", "exit", "set", "unset", "export", "function"], i = ["ab", "awk", "bash", "beep", "cat", "cc", "cd", "chown", "chmod", "chroot", "clear", "cp", "curl", "cut", "diff", "echo", "find", "gawk", "gcc", "get", "git", "grep", "hg", "kill", "killall", "ln", "ls", "make", "mkdir", "openssl", "mv", "nc", "nl", "node", "npm", "ping", "ps", "restart", "rm", "rmdir", "sed", "service", "sh", "shopt", "shred", "source", "sort", "sleep", "ssh", "start", "stop", "su", "sudo", "svn", "tee", "telnet", "top", "touch", "vi", "vim", "wall", "wc", "wget", "who", "write", "yes", "zsh"];
              function a(e4, n4) {
                if (e4.eatSpace()) return null;
                var r3, o2 = e4.sol(), i2 = e4.next();
                if ("\\" === i2) return e4.next(), null;
                if ("'" === i2 || '"' === i2 || "`" === i2) return n4.tokens.unshift(s(i2, "`" === i2 ? "quote" : "string")), u(e4, n4);
                if ("#" === i2) return o2 && e4.eat("!") ? (e4.skipToEnd(), "meta") : (e4.skipToEnd(), "comment");
                if ("$" === i2) return n4.tokens.unshift(c), u(e4, n4);
                if ("+" === i2 || "=" === i2) return "operator";
                if ("-" === i2) return e4.eat("-"), e4.eatWhile(/\w/), "attribute";
                if ("<" == i2) {
                  if (e4.match("<<")) return "operator";
                  var a2 = e4.match(/^<-?\s*['"]?([^'"]*)['"]?/);
                  if (a2) return n4.tokens.unshift((r3 = a2[1], function(e5, t4) {
                    return e5.sol() && e5.string == r3 && t4.tokens.shift(), e5.skipToEnd(), "string-2";
                  })), "string-2";
                }
                if (/\d/.test(i2) && (e4.eatWhile(/\d/), e4.eol() || !/\w/.test(e4.peek()))) return "number";
                e4.eatWhile(/[\w-]/);
                var l2 = e4.current();
                return "=" === e4.peek() && /\w+/.test(l2) ? "def" : t3.hasOwnProperty(l2) ? t3[l2] : null;
              }
              function s(e4, t4) {
                var n4 = "(" == e4 ? ")" : "{" == e4 ? "}" : e4;
                return function(r3, o2) {
                  for (var i2, a2 = false; null != (i2 = r3.next()); ) {
                    if (i2 === n4 && !a2) {
                      o2.tokens.shift();
                      break;
                    }
                    if ("$" === i2 && !a2 && "'" !== e4 && r3.peek() != n4) {
                      a2 = true, r3.backUp(1), o2.tokens.unshift(c);
                      break;
                    }
                    if (!a2 && e4 !== n4 && i2 === e4) return o2.tokens.unshift(s(e4, t4)), u(r3, o2);
                    if (!a2 && /['"]/.test(i2) && !/['"]/.test(e4)) {
                      o2.tokens.unshift(l(i2, "string")), r3.backUp(1);
                      break;
                    }
                    a2 = !a2 && "\\" === i2;
                  }
                  return t4;
                };
              }
              function l(e4, t4) {
                return function(n4, r3) {
                  return r3.tokens[0] = s(e4, t4), n4.next(), u(n4, r3);
                };
              }
              e3.registerHelper("hintWords", "shell", r2.concat(o, i)), n3("atom", r2), n3("keyword", o), n3("builtin", i);
              var c = function(e4, t4) {
                t4.tokens.length > 1 && e4.eat("$");
                var n4 = e4.next();
                return /['"({]/.test(n4) ? (t4.tokens[0] = s(n4, "(" == n4 ? "quote" : "{" == n4 ? "def" : "string"), u(e4, t4)) : (/\d/.test(n4) || e4.eatWhile(/\w/), t4.tokens.shift(), "def");
              };
              function u(e4, t4) {
                return (t4.tokens[0] || a)(e4, t4);
              }
              return { startState: function() {
                return { tokens: [] };
              }, token: function(e4, t4) {
                return u(e4, t4);
              }, closeBrackets: "()[]{}''\"\"``", lineComment: "#", fold: "brace" };
            }), e3.defineMIME("text/x-sh", "shell"), e3.defineMIME("application/x-sh", "shell");
          }(n2(4631));
        }, 6690: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            e3.defineMode("smalltalk", function(e4) {
              var t3 = /[+\-\/\\*~<>=@%|&?!.,:;^]/, n3 = /true|false|nil|self|super|thisContext/, r2 = function(e5, t4) {
                this.next = e5, this.parent = t4;
              }, o = function(e5, t4, n4) {
                this.name = e5, this.context = t4, this.eos = n4;
              }, i = function() {
                this.context = new r2(a, null), this.expectVariable = true, this.indentation = 0, this.userIndentationDelta = 0;
              };
              i.prototype.userIndent = function(t4) {
                this.userIndentationDelta = t4 > 0 ? t4 / e4.indentUnit - this.indentation : 0;
              };
              var a = function(e5, i2, a2) {
                var f = new o(null, i2, false), d = e5.next();
                return '"' === d ? f = s(e5, new r2(s, i2)) : "'" === d ? f = l(e5, new r2(l, i2)) : "#" === d ? "'" === e5.peek() ? (e5.next(), f = c(e5, new r2(c, i2))) : e5.eatWhile(/[^\s.{}\[\]()]/) ? f.name = "string-2" : f.name = "meta" : "$" === d ? ("<" === e5.next() && (e5.eatWhile(/[^\s>]/), e5.next()), f.name = "string-2") : "|" === d && a2.expectVariable ? f.context = new r2(u, i2) : /[\[\]{}()]/.test(d) ? (f.name = "bracket", f.eos = /[\[{(]/.test(d), "[" === d ? a2.indentation++ : "]" === d && (a2.indentation = Math.max(0, a2.indentation - 1))) : t3.test(d) ? (e5.eatWhile(t3), f.name = "operator", f.eos = ";" !== d) : /\d/.test(d) ? (e5.eatWhile(/[\w\d]/), f.name = "number") : /[\w_]/.test(d) ? (e5.eatWhile(/[\w\d_]/), f.name = a2.expectVariable ? n3.test(e5.current()) ? "keyword" : "variable" : null) : f.eos = a2.expectVariable, f;
              }, s = function(e5, t4) {
                return e5.eatWhile(/[^"]/), new o("comment", e5.eat('"') ? t4.parent : t4, true);
              }, l = function(e5, t4) {
                return e5.eatWhile(/[^']/), new o("string", e5.eat("'") ? t4.parent : t4, false);
              }, c = function(e5, t4) {
                return e5.eatWhile(/[^']/), new o("string-2", e5.eat("'") ? t4.parent : t4, false);
              }, u = function(e5, t4) {
                var n4 = new o(null, t4, false);
                return "|" === e5.next() ? (n4.context = t4.parent, n4.eos = true) : (e5.eatWhile(/[^|]/), n4.name = "variable"), n4;
              };
              return { startState: function() {
                return new i();
              }, token: function(e5, t4) {
                if (t4.userIndent(e5.indentation()), e5.eatSpace()) return null;
                var n4 = t4.context.next(e5, t4.context, t4);
                return t4.context = n4.context, t4.expectVariable = n4.eos, n4.name;
              }, blankLine: function(e5) {
                e5.userIndent(0);
              }, indent: function(t4, n4) {
                var r3 = t4.context.next === a && n4 && "]" === n4.charAt(0) ? -1 : t4.userIndentationDelta;
                return (t4.indentation + r3) * e4.indentUnit;
              }, electricChars: "]" };
            }), e3.defineMIME("text/x-stsrc", { name: "smalltalk" });
          }(n2(4631));
        }, 7355: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            function t3(e4) {
              for (var t4 = {}, n4 = 0; n4 < e4.length; n4++) t4[e4[n4]] = true;
              return t4;
            }
            var n3 = t3(["_", "var", "let", "actor", "class", "enum", "extension", "import", "protocol", "struct", "func", "typealias", "associatedtype", "open", "public", "internal", "fileprivate", "private", "deinit", "init", "new", "override", "self", "subscript", "super", "convenience", "dynamic", "final", "indirect", "lazy", "required", "static", "unowned", "unowned(safe)", "unowned(unsafe)", "weak", "as", "is", "break", "case", "continue", "default", "else", "fallthrough", "for", "guard", "if", "in", "repeat", "switch", "where", "while", "defer", "return", "inout", "mutating", "nonmutating", "isolated", "nonisolated", "catch", "do", "rethrows", "throw", "throws", "async", "await", "try", "didSet", "get", "set", "willSet", "assignment", "associativity", "infix", "left", "none", "operator", "postfix", "precedence", "precedencegroup", "prefix", "right", "Any", "AnyObject", "Type", "dynamicType", "Self", "Protocol", "__COLUMN__", "__FILE__", "__FUNCTION__", "__LINE__"]), r2 = t3(["var", "let", "actor", "class", "enum", "extension", "import", "protocol", "struct", "func", "typealias", "associatedtype", "for"]), o = t3(["true", "false", "nil", "self", "super", "_"]), i = t3(["Array", "Bool", "Character", "Dictionary", "Double", "Float", "Int", "Int8", "Int16", "Int32", "Int64", "Never", "Optional", "Set", "String", "UInt8", "UInt16", "UInt32", "UInt64", "Void"]), a = "+-/*%=|&<>~^?!", s = ":;,.(){}[]", l = /^\-?0b[01][01_]*/, c = /^\-?0o[0-7][0-7_]*/, u = /^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/, f = /^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/, d = /^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/, p = /^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/, h = /^\#[A-Za-z]+/, m = /^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;
            function g(e4, t4, g2) {
              if (e4.sol() && (t4.indented = e4.indentation()), e4.eatSpace()) return null;
              var v2, b2 = e4.peek();
              if ("/" == b2) {
                if (e4.match("//")) return e4.skipToEnd(), "comment";
                if (e4.match("/*")) return t4.tokenize.push(y), y(e4, t4);
              }
              if (e4.match(h)) return "builtin";
              if (e4.match(m)) return "attribute";
              if (e4.match(l)) return "number";
              if (e4.match(c)) return "number";
              if (e4.match(u)) return "number";
              if (e4.match(f)) return "number";
              if (e4.match(p)) return "property";
              if (a.indexOf(b2) > -1) return e4.next(), "operator";
              if (s.indexOf(b2) > -1) return e4.next(), e4.match(".."), "punctuation";
              if (v2 = e4.match(/("""|"|')/)) {
                var C2 = A.bind(null, v2[0]);
                return t4.tokenize.push(C2), C2(e4, t4);
              }
              if (e4.match(d)) {
                var x2 = e4.current();
                return i.hasOwnProperty(x2) ? "variable-2" : o.hasOwnProperty(x2) ? "atom" : n3.hasOwnProperty(x2) ? (r2.hasOwnProperty(x2) && (t4.prev = "define"), "keyword") : "define" == g2 ? "def" : "variable";
              }
              return e4.next(), null;
            }
            function v() {
              var e4 = 0;
              return function(t4, n4, r3) {
                var o2 = g(t4, n4, r3);
                if ("punctuation" == o2) {
                  if ("(" == t4.current()) ++e4;
                  else if (")" == t4.current()) {
                    if (0 == e4) return t4.backUp(1), n4.tokenize.pop(), n4.tokenize[n4.tokenize.length - 1](t4, n4);
                    --e4;
                  }
                }
                return o2;
              };
            }
            function A(e4, t4, n4) {
              for (var r3, o2 = 1 == e4.length, i2 = false; r3 = t4.peek(); ) if (i2) {
                if (t4.next(), "(" == r3) return n4.tokenize.push(v()), "string";
                i2 = false;
              } else {
                if (t4.match(e4)) return n4.tokenize.pop(), "string";
                t4.next(), i2 = "\\" == r3;
              }
              return o2 && n4.tokenize.pop(), "string";
            }
            function y(e4, t4) {
              for (var n4; n4 = e4.next(); ) if ("/" === n4 && e4.eat("*")) t4.tokenize.push(y);
              else if ("*" === n4 && e4.eat("/")) {
                t4.tokenize.pop();
                break;
              }
              return "comment";
            }
            function b(e4, t4, n4) {
              this.prev = e4, this.align = t4, this.indented = n4;
            }
            function C(e4, t4) {
              var n4 = t4.match(/^\s*($|\/[\/\*])/, false) ? null : t4.column() + 1;
              e4.context = new b(e4.context, n4, e4.indented);
            }
            function x(e4) {
              e4.context && (e4.indented = e4.context.indented, e4.context = e4.context.prev);
            }
            e3.defineMode("swift", function(e4) {
              return { startState: function() {
                return { prev: null, context: null, indented: 0, tokenize: [] };
              }, token: function(e5, t4) {
                var n4 = t4.prev;
                t4.prev = null;
                var r3 = (t4.tokenize[t4.tokenize.length - 1] || g)(e5, t4, n4);
                if (r3 && "comment" != r3 ? t4.prev || (t4.prev = r3) : t4.prev = n4, "punctuation" == r3) {
                  var o2 = /[\(\[\{]|([\]\)\}])/.exec(e5.current());
                  o2 && (o2[1] ? x : C)(t4, e5);
                }
                return r3;
              }, indent: function(t4, n4) {
                var r3 = t4.context;
                if (!r3) return 0;
                var o2 = /^[\]\}\)]/.test(n4);
                return null != r3.align ? r3.align - (o2 ? 1 : 0) : r3.indented + (o2 ? 0 : e4.indentUnit);
              }, electricInput: /^\s*[\)\}\]]$/, lineComment: "//", blockCommentStart: "/*", blockCommentEnd: "*/", fold: "brace", closeBrackets: "()[]{}''\"\"``" };
            }), e3.defineMIME("text/x-swift", "swift");
          }(n2(4631));
        }, 9589: function(e2, t2, n2) {
          !function(e3) {
            "use strict";
            var t3 = { autoSelfClosers: { area: true, base: true, br: true, col: true, command: true, embed: true, frame: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true, menuitem: true }, implicitlyClosed: { dd: true, li: true, optgroup: true, option: true, p: true, rp: true, rt: true, tbody: true, td: true, tfoot: true, th: true, tr: true }, contextGrabbers: { dd: { dd: true, dt: true }, dt: { dd: true, dt: true }, li: { li: true }, option: { option: true, optgroup: true }, optgroup: { optgroup: true }, p: { address: true, article: true, aside: true, blockquote: true, dir: true, div: true, dl: true, fieldset: true, footer: true, form: true, h1: true, h2: true, h3: true, h4: true, h5: true, h6: true, header: true, hgroup: true, hr: true, menu: true, nav: true, ol: true, p: true, pre: true, section: true, table: true, ul: true }, rp: { rp: true, rt: true }, rt: { rp: true, rt: true }, tbody: { tbody: true, tfoot: true }, td: { td: true, th: true }, tfoot: { tbody: true }, th: { td: true, th: true }, thead: { tbody: true, tfoot: true }, tr: { tr: true } }, doNotIndent: { pre: true }, allowUnquoted: true, allowMissing: true, caseFold: true }, n3 = { autoSelfClosers: {}, implicitlyClosed: {}, contextGrabbers: {}, doNotIndent: {}, allowUnquoted: false, allowMissing: false, allowMissingTagName: false, caseFold: false };
            e3.defineMode("xml", function(r2, o) {
              var i, a, s = r2.indentUnit, l = {}, c = o.htmlMode ? t3 : n3;
              for (var u in c) l[u] = c[u];
              for (var u in o) l[u] = o[u];
              function f(e4, t4) {
                function n4(n5) {
                  return t4.tokenize = n5, n5(e4, t4);
                }
                var r3 = e4.next();
                return "<" == r3 ? e4.eat("!") ? e4.eat("[") ? e4.match("CDATA[") ? n4(p("atom", "]]>")) : null : e4.match("--") ? n4(p("comment", "-->")) : e4.match("DOCTYPE", true, true) ? (e4.eatWhile(/[\w\._\-]/), n4(h(1))) : null : e4.eat("?") ? (e4.eatWhile(/[\w\._\-]/), t4.tokenize = p("meta", "?>"), "meta") : (i = e4.eat("/") ? "closeTag" : "openTag", t4.tokenize = d, "tag bracket") : "&" == r3 ? (e4.eat("#") ? e4.eat("x") ? e4.eatWhile(/[a-fA-F\d]/) && e4.eat(";") : e4.eatWhile(/[\d]/) && e4.eat(";") : e4.eatWhile(/[\w\.\-:]/) && e4.eat(";")) ? "atom" : "error" : (e4.eatWhile(/[^&<]/), null);
              }
              function d(e4, t4) {
                var n4, r3, o2 = e4.next();
                if (">" == o2 || "/" == o2 && e4.eat(">")) return t4.tokenize = f, i = ">" == o2 ? "endTag" : "selfcloseTag", "tag bracket";
                if ("=" == o2) return i = "equals", null;
                if ("<" == o2) {
                  t4.tokenize = f, t4.state = y, t4.tagName = t4.tagStart = null;
                  var a2 = t4.tokenize(e4, t4);
                  return a2 ? a2 + " tag error" : "tag error";
                }
                return /[\'\"]/.test(o2) ? (t4.tokenize = (n4 = o2, r3 = function(e5, t5) {
                  for (; !e5.eol(); ) if (e5.next() == n4) {
                    t5.tokenize = d;
                    break;
                  }
                  return "string";
                }, r3.isInAttribute = true, r3), t4.stringStartCol = e4.column(), t4.tokenize(e4, t4)) : (e4.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
              }
              function p(e4, t4) {
                return function(n4, r3) {
                  for (; !n4.eol(); ) {
                    if (n4.match(t4)) {
                      r3.tokenize = f;
                      break;
                    }
                    n4.next();
                  }
                  return e4;
                };
              }
              function h(e4) {
                return function(t4, n4) {
                  for (var r3; null != (r3 = t4.next()); ) {
                    if ("<" == r3) return n4.tokenize = h(e4 + 1), n4.tokenize(t4, n4);
                    if (">" == r3) {
                      if (1 == e4) {
                        n4.tokenize = f;
                        break;
                      }
                      return n4.tokenize = h(e4 - 1), n4.tokenize(t4, n4);
                    }
                  }
                  return "meta";
                };
              }
              function m(e4) {
                return e4 && e4.toLowerCase();
              }
              function g(e4, t4, n4) {
                this.prev = e4.context, this.tagName = t4 || "", this.indent = e4.indented, this.startOfLine = n4, (l.doNotIndent.hasOwnProperty(t4) || e4.context && e4.context.noIndent) && (this.noIndent = true);
              }
              function v(e4) {
                e4.context && (e4.context = e4.context.prev);
              }
              function A(e4, t4) {
                for (var n4; ; ) {
                  if (!e4.context) return;
                  if (n4 = e4.context.tagName, !l.contextGrabbers.hasOwnProperty(m(n4)) || !l.contextGrabbers[m(n4)].hasOwnProperty(m(t4))) return;
                  v(e4);
                }
              }
              function y(e4, t4, n4) {
                return "openTag" == e4 ? (n4.tagStart = t4.column(), b) : "closeTag" == e4 ? C : y;
              }
              function b(e4, t4, n4) {
                return "word" == e4 ? (n4.tagName = t4.current(), a = "tag", k) : l.allowMissingTagName && "endTag" == e4 ? (a = "tag bracket", k(e4, 0, n4)) : (a = "error", b);
              }
              function C(e4, t4, n4) {
                if ("word" == e4) {
                  var r3 = t4.current();
                  return n4.context && n4.context.tagName != r3 && l.implicitlyClosed.hasOwnProperty(m(n4.context.tagName)) && v(n4), n4.context && n4.context.tagName == r3 || false === l.matchClosing ? (a = "tag", x) : (a = "tag error", w);
                }
                return l.allowMissingTagName && "endTag" == e4 ? (a = "tag bracket", x(e4, 0, n4)) : (a = "error", w);
              }
              function x(e4, t4, n4) {
                return "endTag" != e4 ? (a = "error", x) : (v(n4), y);
              }
              function w(e4, t4, n4) {
                return a = "error", x(e4, 0, n4);
              }
              function k(e4, t4, n4) {
                if ("word" == e4) return a = "attribute", E;
                if ("endTag" == e4 || "selfcloseTag" == e4) {
                  var r3 = n4.tagName, o2 = n4.tagStart;
                  return n4.tagName = n4.tagStart = null, "selfcloseTag" == e4 || l.autoSelfClosers.hasOwnProperty(m(r3)) ? A(n4, r3) : (A(n4, r3), n4.context = new g(n4, r3, o2 == n4.indented)), y;
                }
                return a = "error", k;
              }
              function E(e4, t4, n4) {
                return "equals" == e4 ? _ : (l.allowMissing || (a = "error"), k(e4, 0, n4));
              }
              function _(e4, t4, n4) {
                return "string" == e4 ? S : "word" == e4 && l.allowUnquoted ? (a = "string", k) : (a = "error", k(e4, 0, n4));
              }
              function S(e4, t4, n4) {
                return "string" == e4 ? S : k(e4, 0, n4);
              }
              return f.isInText = true, { startState: function(e4) {
                var t4 = { tokenize: f, state: y, indented: e4 || 0, tagName: null, tagStart: null, context: null };
                return null != e4 && (t4.baseIndent = e4), t4;
              }, token: function(e4, t4) {
                if (!t4.tagName && e4.sol() && (t4.indented = e4.indentation()), e4.eatSpace()) return null;
                i = null;
                var n4 = t4.tokenize(e4, t4);
                return (n4 || i) && "comment" != n4 && (a = null, t4.state = t4.state(i || n4, e4, t4), a && (n4 = "error" == a ? n4 + " error" : a)), n4;
              }, indent: function(t4, n4, r3) {
                var o2 = t4.context;
                if (t4.tokenize.isInAttribute) return t4.tagStart == t4.indented ? t4.stringStartCol + 1 : t4.indented + s;
                if (o2 && o2.noIndent) return e3.Pass;
                if (t4.tokenize != d && t4.tokenize != f) return r3 ? r3.match(/^(\s*)/)[0].length : 0;
                if (t4.tagName) return false !== l.multilineTagIndentPastTag ? t4.tagStart + t4.tagName.length + 2 : t4.tagStart + s * (l.multilineTagIndentFactor || 1);
                if (l.alignCDATA && /<!\[CDATA\[/.test(n4)) return 0;
                var i2 = n4 && /^<(\/)?([\w_:\.-]*)/.exec(n4);
                if (i2 && i2[1]) for (; o2; ) {
                  if (o2.tagName == i2[2]) {
                    o2 = o2.prev;
                    break;
                  }
                  if (!l.implicitlyClosed.hasOwnProperty(m(o2.tagName))) break;
                  o2 = o2.prev;
                }
                else if (i2) for (; o2; ) {
                  var a2 = l.contextGrabbers[m(o2.tagName)];
                  if (!a2 || !a2.hasOwnProperty(m(i2[2]))) break;
                  o2 = o2.prev;
                }
                for (; o2 && o2.prev && !o2.startOfLine; ) o2 = o2.prev;
                return o2 ? o2.indent + s : t4.baseIndent || 0;
              }, electricInput: /<\/[\s\w:]+>$/, blockCommentStart: "<!--", blockCommentEnd: "-->", configuration: l.htmlMode ? "html" : "xml", helperType: l.htmlMode ? "html" : "xml", skipAttribute: function(e4) {
                e4.state == _ && (e4.state = k);
              }, xmlCurrentTag: function(e4) {
                return e4.tagName ? { name: e4.tagName, close: "closeTag" == e4.type } : null;
              }, xmlCurrentContext: function(e4) {
                for (var t4 = [], n4 = e4.context; n4; n4 = n4.prev) t4.push(n4.tagName);
                return t4.reverse();
              } };
            }), e3.defineMIME("text/xml", "xml"), e3.defineMIME("application/xml", "xml"), e3.mimeModes.hasOwnProperty("text/html") || e3.defineMIME("text/html", { name: "xml", htmlMode: true });
          }(n2(4631));
        }, 7185: function(e2, t2, n2) {
          n2(1867), n2(2586), e2.exports = n2(4579).Array.from;
        }, 3285: function(e2, t2, n2) {
          n2(8691), e2.exports = n2(4579).Array.isArray;
        }, 2742: function(e2, t2, n2) {
          var r2 = n2(4579), o = r2.JSON || (r2.JSON = { stringify: JSON.stringify });
          e2.exports = function(e3) {
            return o.stringify.apply(o, arguments);
          };
        }, 6981: function(e2, t2, n2) {
          n2(2699), e2.exports = n2(4579).Object.assign;
        }, 5627: function(e2, t2, n2) {
          n2(6760);
          var r2 = n2(4579).Object;
          e2.exports = function(e3, t3) {
            return r2.create(e3, t3);
          };
        }, 3391: function(e2, t2, n2) {
          n2(1477);
          var r2 = n2(4579).Object;
          e2.exports = function(e3, t3, n3) {
            return r2.defineProperty(e3, t3, n3);
          };
        }, 7036: function(e2, t2, n2) {
          n2(5178);
          var r2 = n2(4579).Object;
          e2.exports = function(e3, t3) {
            return r2.getOwnPropertyDescriptor(e3, t3);
          };
        }, 1343: function(e2, t2, n2) {
          n2(3264), e2.exports = n2(4579).Object.getOwnPropertyDescriptors;
        }, 4511: function(e2, t2, n2) {
          n2(6840), e2.exports = n2(4579).Object.getOwnPropertySymbols;
        }, 381: function(e2, t2, n2) {
          n2(7220), e2.exports = n2(4579).Object.getPrototypeOf;
        }, 8613: function(e2, t2, n2) {
          n2(961), e2.exports = n2(4579).Object.keys;
        }, 433: function(e2, t2, n2) {
          n2(9349), e2.exports = n2(4579).Object.setPrototypeOf;
        }, 8056: function(e2, t2, n2) {
          n2(1013), e2.exports = n2(4579).Object.values;
        }, 7794: function(e2, t2, n2) {
          n2(7609), e2.exports = n2(4579).parseInt;
        }, 112: function(e2, t2, n2) {
          n2(4058), n2(1867), n2(3871), n2(2878), n2(5971), n2(2526), e2.exports = n2(4579).Promise;
        }, 8318: function(e2, t2, n2) {
          n2(9650), e2.exports = n2(4579).Reflect.construct;
        }, 9137: function(e2, t2, n2) {
          n2(6917), e2.exports = n2(4579).Reflect.get;
        }, 25: function(e2, t2, n2) {
          n2(6840), n2(4058), n2(8174), n2(6461), e2.exports = n2(4579).Symbol;
        }, 2392: function(e2, t2, n2) {
          n2(1867), n2(3871), e2.exports = n2(5103).f("iterator");
        }, 2038: function(e2, t2, n2) {
          e2.exports = n2(5103).f("toPrimitive");
        }, 5663: function(e2) {
          e2.exports = function(e3) {
            if ("function" != typeof e3) throw TypeError(e3 + " is not a function!");
            return e3;
          };
        }, 9003: function(e2) {
          e2.exports = function() {
          };
        }, 9142: function(e2) {
          e2.exports = function(e3, t2, n2, r2) {
            if (!(e3 instanceof t2) || void 0 !== r2 && r2 in e3) throw TypeError(n2 + ": incorrect invocation!");
            return e3;
          };
        }, 2159: function(e2, t2, n2) {
          var r2 = n2(6727);
          e2.exports = function(e3) {
            if (!r2(e3)) throw TypeError(e3 + " is not an object!");
            return e3;
          };
        }, 7428: function(e2, t2, n2) {
          var r2 = n2(7932), o = n2(8728), i = n2(6531);
          e2.exports = function(e3) {
            return function(t3, n3, a) {
              var s, l = r2(t3), c = o(l.length), u = i(a, c);
              if (e3 && n3 != n3) {
                for (; c > u; ) if ((s = l[u++]) != s) return true;
              } else for (; c > u; u++) if ((e3 || u in l) && l[u] === n3) return e3 || u || 0;
              return !e3 && -1;
            };
          };
        }, 4094: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(5663), o = n2(6727), i = n2(6778), a = [].slice, s = {};
          e2.exports = Function.bind || function(e3) {
            var t3 = r2(this), n3 = a.call(arguments, 1), l = function() {
              var r3 = n3.concat(a.call(arguments));
              return this instanceof l ? function(e4, t4, n4) {
                if (!(t4 in s)) {
                  for (var r4 = [], o2 = 0; o2 < t4; o2++) r4[o2] = "a[" + o2 + "]";
                  s[t4] = Function("F,a", "return new F(" + r4.join(",") + ")");
                }
                return s[t4](e4, n4);
              }(t3, r3.length, r3) : i(t3, r3, e3);
            };
            return o(t3.prototype) && (l.prototype = t3.prototype), l;
          };
        }, 4677: function(e2, t2, n2) {
          var r2 = n2(2894), o = n2(2939)("toStringTag"), i = "Arguments" == r2(/* @__PURE__ */ function() {
            return arguments;
          }());
          e2.exports = function(e3) {
            var t3, n3, a;
            return void 0 === e3 ? "Undefined" : null === e3 ? "Null" : "string" == typeof (n3 = function(e4, t4) {
              try {
                return e4[t4];
              } catch (e5) {
              }
            }(t3 = Object(e3), o)) ? n3 : i ? r2(t3) : "Object" == (a = r2(t3)) && "function" == typeof t3.callee ? "Arguments" : a;
          };
        }, 2894: function(e2) {
          var t2 = {}.toString;
          e2.exports = function(e3) {
            return t2.call(e3).slice(8, -1);
          };
        }, 4579: function(e2) {
          var t2 = e2.exports = { version: "2.6.12" };
          "number" == typeof __e && (__e = t2);
        }, 2445: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(4743), o = n2(3101);
          e2.exports = function(e3, t3, n3) {
            t3 in e3 ? r2.f(e3, t3, o(0, n3)) : e3[t3] = n3;
          };
        }, 9216: function(e2, t2, n2) {
          var r2 = n2(5663);
          e2.exports = function(e3, t3, n3) {
            if (r2(e3), void 0 === t3) return e3;
            switch (n3) {
              case 1:
                return function(n4) {
                  return e3.call(t3, n4);
                };
              case 2:
                return function(n4, r3) {
                  return e3.call(t3, n4, r3);
                };
              case 3:
                return function(n4, r3, o) {
                  return e3.call(t3, n4, r3, o);
                };
            }
            return function() {
              return e3.apply(t3, arguments);
            };
          };
        }, 8333: function(e2) {
          e2.exports = function(e3) {
            if (null == e3) throw TypeError("Can't call method on  " + e3);
            return e3;
          };
        }, 9666: function(e2, t2, n2) {
          e2.exports = !n2(7929)(function() {
            return 7 != Object.defineProperty({}, "a", { get: function() {
              return 7;
            } }).a;
          });
        }, 7467: function(e2, t2, n2) {
          var r2 = n2(6727), o = n2(3938).document, i = r2(o) && r2(o.createElement);
          e2.exports = function(e3) {
            return i ? o.createElement(e3) : {};
          };
        }, 3338: function(e2) {
          e2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        }, 337: function(e2, t2, n2) {
          var r2 = n2(6162), o = n2(8195), i = n2(6274);
          e2.exports = function(e3) {
            var t3 = r2(e3), n3 = o.f;
            if (n3) for (var a, s = n3(e3), l = i.f, c = 0; s.length > c; ) l.call(e3, a = s[c++]) && t3.push(a);
            return t3;
          };
        }, 3856: function(e2, t2, n2) {
          var r2 = n2(3938), o = n2(4579), i = n2(9216), a = n2(1818), s = n2(7069), l = "prototype", c = function(e3, t3, n3) {
            var u, f, d, p = e3 & c.F, h = e3 & c.G, m = e3 & c.S, g = e3 & c.P, v = e3 & c.B, A = e3 & c.W, y = h ? o : o[t3] || (o[t3] = {}), b = y[l], C = h ? r2 : m ? r2[t3] : (r2[t3] || {})[l];
            for (u in h && (n3 = t3), n3) (f = !p && C && void 0 !== C[u]) && s(y, u) || (d = f ? C[u] : n3[u], y[u] = h && "function" != typeof C[u] ? n3[u] : v && f ? i(d, r2) : A && C[u] == d ? function(e4) {
              var t4 = function(t5, n4, r3) {
                if (this instanceof e4) {
                  switch (arguments.length) {
                    case 0:
                      return new e4();
                    case 1:
                      return new e4(t5);
                    case 2:
                      return new e4(t5, n4);
                  }
                  return new e4(t5, n4, r3);
                }
                return e4.apply(this, arguments);
              };
              return t4[l] = e4[l], t4;
            }(d) : g && "function" == typeof d ? i(Function.call, d) : d, g && ((y.virtual || (y.virtual = {}))[u] = d, e3 & c.R && b && !b[u] && a(b, u, d)));
          };
          c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e2.exports = c;
        }, 7929: function(e2) {
          e2.exports = function(e3) {
            try {
              return !!e3();
            } catch (e4) {
              return true;
            }
          };
        }, 5576: function(e2, t2, n2) {
          var r2 = n2(9216), o = n2(5602), i = n2(5991), a = n2(2159), s = n2(8728), l = n2(3728), c = {}, u = {}, f = e2.exports = function(e3, t3, n3, f2, d) {
            var p, h, m, g, v = d ? function() {
              return e3;
            } : l(e3), A = r2(n3, f2, t3 ? 2 : 1), y = 0;
            if ("function" != typeof v) throw TypeError(e3 + " is not iterable!");
            if (i(v)) {
              for (p = s(e3.length); p > y; y++) if ((g = t3 ? A(a(h = e3[y])[0], h[1]) : A(e3[y])) === c || g === u) return g;
            } else for (m = v.call(e3); !(h = m.next()).done; ) if ((g = o(m, A, h.value, t3)) === c || g === u) return g;
          };
          f.BREAK = c, f.RETURN = u;
        }, 3938: function(e2) {
          var t2 = e2.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
          "number" == typeof __g && (__g = t2);
        }, 7069: function(e2) {
          var t2 = {}.hasOwnProperty;
          e2.exports = function(e3, n2) {
            return t2.call(e3, n2);
          };
        }, 1818: function(e2, t2, n2) {
          var r2 = n2(4743), o = n2(3101);
          e2.exports = n2(9666) ? function(e3, t3, n3) {
            return r2.f(e3, t3, o(1, n3));
          } : function(e3, t3, n3) {
            return e3[t3] = n3, e3;
          };
        }, 4881: function(e2, t2, n2) {
          var r2 = n2(3938).document;
          e2.exports = r2 && r2.documentElement;
        }, 3758: function(e2, t2, n2) {
          e2.exports = !n2(9666) && !n2(7929)(function() {
            return 7 != Object.defineProperty(n2(7467)("div"), "a", { get: function() {
              return 7;
            } }).a;
          });
        }, 6778: function(e2) {
          e2.exports = function(e3, t2, n2) {
            var r2 = void 0 === n2;
            switch (t2.length) {
              case 0:
                return r2 ? e3() : e3.call(n2);
              case 1:
                return r2 ? e3(t2[0]) : e3.call(n2, t2[0]);
              case 2:
                return r2 ? e3(t2[0], t2[1]) : e3.call(n2, t2[0], t2[1]);
              case 3:
                return r2 ? e3(t2[0], t2[1], t2[2]) : e3.call(n2, t2[0], t2[1], t2[2]);
              case 4:
                return r2 ? e3(t2[0], t2[1], t2[2], t2[3]) : e3.call(n2, t2[0], t2[1], t2[2], t2[3]);
            }
            return e3.apply(n2, t2);
          };
        }, 799: function(e2, t2, n2) {
          var r2 = n2(2894);
          e2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e3) {
            return "String" == r2(e3) ? e3.split("") : Object(e3);
          };
        }, 5991: function(e2, t2, n2) {
          var r2 = n2(5449), o = n2(2939)("iterator"), i = Array.prototype;
          e2.exports = function(e3) {
            return void 0 !== e3 && (r2.Array === e3 || i[o] === e3);
          };
        }, 1421: function(e2, t2, n2) {
          var r2 = n2(2894);
          e2.exports = Array.isArray || function(e3) {
            return "Array" == r2(e3);
          };
        }, 6727: function(e2) {
          e2.exports = function(e3) {
            return "object" == typeof e3 ? null !== e3 : "function" == typeof e3;
          };
        }, 5602: function(e2, t2, n2) {
          var r2 = n2(2159);
          e2.exports = function(e3, t3, n3, o) {
            try {
              return o ? t3(r2(n3)[0], n3[1]) : t3(n3);
            } catch (t4) {
              var i = e3.return;
              throw void 0 !== i && r2(i.call(e3)), t4;
            }
          };
        }, 3945: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(526), o = n2(3101), i = n2(5378), a = {};
          n2(1818)(a, n2(2939)("iterator"), function() {
            return this;
          }), e2.exports = function(e3, t3, n3) {
            e3.prototype = r2(a, { next: o(1, n3) }), i(e3, t3 + " Iterator");
          };
        }, 5700: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(6227), o = n2(3856), i = n2(7470), a = n2(1818), s = n2(5449), l = n2(3945), c = n2(5378), u = n2(5089), f = n2(2939)("iterator"), d = !([].keys && "next" in [].keys()), p = "keys", h = "values", m = function() {
            return this;
          };
          e2.exports = function(e3, t3, n3, g, v, A, y) {
            l(n3, t3, g);
            var b, C, x, w = function(e4) {
              if (!d && e4 in S) return S[e4];
              switch (e4) {
                case p:
                case h:
                  return function() {
                    return new n3(this, e4);
                  };
              }
              return function() {
                return new n3(this, e4);
              };
            }, k = t3 + " Iterator", E = v == h, _ = false, S = e3.prototype, M = S[f] || S["@@iterator"] || v && S[v], B = M || w(v), O = v ? E ? w("entries") : B : void 0, T = "Array" == t3 && S.entries || M;
            if (T && (x = u(T.call(new e3()))) !== Object.prototype && x.next && (c(x, k, true), r2 || "function" == typeof x[f] || a(x, f, m)), E && M && M.name !== h && (_ = true, B = function() {
              return M.call(this);
            }), r2 && !y || !d && !_ && S[f] || a(S, f, B), s[t3] = B, s[k] = m, v) if (b = { values: E ? B : w(h), keys: A ? B : w(p), entries: O }, y) for (C in b) C in S || i(S, C, b[C]);
            else o(o.P + o.F * (d || _), t3, b);
            return b;
          };
        }, 6630: function(e2, t2, n2) {
          var r2 = n2(2939)("iterator"), o = false;
          try {
            var i = [7][r2]();
            i.return = function() {
              o = true;
            }, Array.from(i, function() {
              throw 2;
            });
          } catch (e3) {
          }
          e2.exports = function(e3, t3) {
            if (!t3 && !o) return false;
            var n3 = false;
            try {
              var i2 = [7], a = i2[r2]();
              a.next = function() {
                return { done: n3 = true };
              }, i2[r2] = function() {
                return a;
              }, e3(i2);
            } catch (e4) {
            }
            return n3;
          };
        }, 5084: function(e2) {
          e2.exports = function(e3, t2) {
            return { value: t2, done: !!e3 };
          };
        }, 5449: function(e2) {
          e2.exports = {};
        }, 6227: function(e2) {
          e2.exports = true;
        }, 7177: function(e2, t2, n2) {
          var r2 = n2(5730)("meta"), o = n2(6727), i = n2(7069), a = n2(4743).f, s = 0, l = Object.isExtensible || function() {
            return true;
          }, c = !n2(7929)(function() {
            return l(Object.preventExtensions({}));
          }), u = function(e3) {
            a(e3, r2, { value: { i: "O" + ++s, w: {} } });
          }, f = e2.exports = { KEY: r2, NEED: false, fastKey: function(e3, t3) {
            if (!o(e3)) return "symbol" == typeof e3 ? e3 : ("string" == typeof e3 ? "S" : "P") + e3;
            if (!i(e3, r2)) {
              if (!l(e3)) return "F";
              if (!t3) return "E";
              u(e3);
            }
            return e3[r2].i;
          }, getWeak: function(e3, t3) {
            if (!i(e3, r2)) {
              if (!l(e3)) return true;
              if (!t3) return false;
              u(e3);
            }
            return e3[r2].w;
          }, onFreeze: function(e3) {
            return c && f.NEED && l(e3) && !i(e3, r2) && u(e3), e3;
          } };
        }, 1601: function(e2, t2, n2) {
          var r2 = n2(3938), o = n2(2569).set, i = r2.MutationObserver || r2.WebKitMutationObserver, a = r2.process, s = r2.Promise, l = "process" == n2(2894)(a);
          e2.exports = function() {
            var e3, t3, n3, c = function() {
              var r3, o2;
              for (l && (r3 = a.domain) && r3.exit(); e3; ) {
                o2 = e3.fn, e3 = e3.next;
                try {
                  o2();
                } catch (r4) {
                  throw e3 ? n3() : t3 = void 0, r4;
                }
              }
              t3 = void 0, r3 && r3.enter();
            };
            if (l) n3 = function() {
              a.nextTick(c);
            };
            else if (!i || r2.navigator && r2.navigator.standalone) if (s && s.resolve) {
              var u = s.resolve(void 0);
              n3 = function() {
                u.then(c);
              };
            } else n3 = function() {
              o.call(r2, c);
            };
            else {
              var f = true, d = document.createTextNode("");
              new i(c).observe(d, { characterData: true }), n3 = function() {
                d.data = f = !f;
              };
            }
            return function(r3) {
              var o2 = { fn: r3, next: void 0 };
              t3 && (t3.next = o2), e3 || (e3 = o2, n3()), t3 = o2;
            };
          };
        }, 9304: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(5663);
          function o(e3) {
            var t3, n3;
            this.promise = new e3(function(e4, r3) {
              if (void 0 !== t3 || void 0 !== n3) throw TypeError("Bad Promise constructor");
              t3 = e4, n3 = r3;
            }), this.resolve = r2(t3), this.reject = r2(n3);
          }
          e2.exports.f = function(e3) {
            return new o(e3);
          };
        }, 8335: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(9666), o = n2(6162), i = n2(8195), a = n2(6274), s = n2(6530), l = n2(799), c = Object.assign;
          e2.exports = !c || n2(7929)(function() {
            var e3 = {}, t3 = {}, n3 = Symbol(), r3 = "abcdefghijklmnopqrst";
            return e3[n3] = 7, r3.split("").forEach(function(e4) {
              t3[e4] = e4;
            }), 7 != c({}, e3)[n3] || Object.keys(c({}, t3)).join("") != r3;
          }) ? function(e3, t3) {
            for (var n3 = s(e3), c2 = arguments.length, u = 1, f = i.f, d = a.f; c2 > u; ) for (var p, h = l(arguments[u++]), m = f ? o(h).concat(f(h)) : o(h), g = m.length, v = 0; g > v; ) p = m[v++], r2 && !d.call(h, p) || (n3[p] = h[p]);
            return n3;
          } : c;
        }, 526: function(e2, t2, n2) {
          var r2 = n2(2159), o = n2(7856), i = n2(3338), a = n2(8989)("IE_PROTO"), s = function() {
          }, l = "prototype", c = function() {
            var e3, t3 = n2(7467)("iframe"), r3 = i.length;
            for (t3.style.display = "none", n2(4881).appendChild(t3), t3.src = "javascript:", (e3 = t3.contentWindow.document).open(), e3.write("<script>document.F=Object<\/script>"), e3.close(), c = e3.F; r3--; ) delete c[l][i[r3]];
            return c();
          };
          e2.exports = Object.create || function(e3, t3) {
            var n3;
            return null !== e3 ? (s[l] = r2(e3), n3 = new s(), s[l] = null, n3[a] = e3) : n3 = c(), void 0 === t3 ? n3 : o(n3, t3);
          };
        }, 4743: function(e2, t2, n2) {
          var r2 = n2(2159), o = n2(3758), i = n2(3206), a = Object.defineProperty;
          t2.f = n2(9666) ? Object.defineProperty : function(e3, t3, n3) {
            if (r2(e3), t3 = i(t3, true), r2(n3), o) try {
              return a(e3, t3, n3);
            } catch (e4) {
            }
            if ("get" in n3 || "set" in n3) throw TypeError("Accessors not supported!");
            return "value" in n3 && (e3[t3] = n3.value), e3;
          };
        }, 7856: function(e2, t2, n2) {
          var r2 = n2(4743), o = n2(2159), i = n2(6162);
          e2.exports = n2(9666) ? Object.defineProperties : function(e3, t3) {
            o(e3);
            for (var n3, a = i(t3), s = a.length, l = 0; s > l; ) r2.f(e3, n3 = a[l++], t3[n3]);
            return e3;
          };
        }, 6183: function(e2, t2, n2) {
          var r2 = n2(6274), o = n2(3101), i = n2(7932), a = n2(3206), s = n2(7069), l = n2(3758), c = Object.getOwnPropertyDescriptor;
          t2.f = n2(9666) ? c : function(e3, t3) {
            if (e3 = i(e3), t3 = a(t3, true), l) try {
              return c(e3, t3);
            } catch (e4) {
            }
            if (s(e3, t3)) return o(!r2.f.call(e3, t3), e3[t3]);
          };
        }, 4368: function(e2, t2, n2) {
          var r2 = n2(7932), o = n2(3230).f, i = {}.toString, a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
          e2.exports.f = function(e3) {
            return a && "[object Window]" == i.call(e3) ? function(e4) {
              try {
                return o(e4);
              } catch (e5) {
                return a.slice();
              }
            }(e3) : o(r2(e3));
          };
        }, 3230: function(e2, t2, n2) {
          var r2 = n2(2963), o = n2(3338).concat("length", "prototype");
          t2.f = Object.getOwnPropertyNames || function(e3) {
            return r2(e3, o);
          };
        }, 8195: function(e2, t2) {
          t2.f = Object.getOwnPropertySymbols;
        }, 5089: function(e2, t2, n2) {
          var r2 = n2(7069), o = n2(6530), i = n2(8989)("IE_PROTO"), a = Object.prototype;
          e2.exports = Object.getPrototypeOf || function(e3) {
            return e3 = o(e3), r2(e3, i) ? e3[i] : "function" == typeof e3.constructor && e3 instanceof e3.constructor ? e3.constructor.prototype : e3 instanceof Object ? a : null;
          };
        }, 2963: function(e2, t2, n2) {
          var r2 = n2(7069), o = n2(7932), i = n2(7428)(false), a = n2(8989)("IE_PROTO");
          e2.exports = function(e3, t3) {
            var n3, s = o(e3), l = 0, c = [];
            for (n3 in s) n3 != a && r2(s, n3) && c.push(n3);
            for (; t3.length > l; ) r2(s, n3 = t3[l++]) && (~i(c, n3) || c.push(n3));
            return c;
          };
        }, 6162: function(e2, t2, n2) {
          var r2 = n2(2963), o = n2(3338);
          e2.exports = Object.keys || function(e3) {
            return r2(e3, o);
          };
        }, 6274: function(e2, t2) {
          t2.f = {}.propertyIsEnumerable;
        }, 2584: function(e2, t2, n2) {
          var r2 = n2(3856), o = n2(4579), i = n2(7929);
          e2.exports = function(e3, t3) {
            var n3 = (o.Object || {})[e3] || Object[e3], a = {};
            a[e3] = t3(n3), r2(r2.S + r2.F * i(function() {
              n3(1);
            }), "Object", a);
          };
        }, 2050: function(e2, t2, n2) {
          var r2 = n2(9666), o = n2(6162), i = n2(7932), a = n2(6274).f;
          e2.exports = function(e3) {
            return function(t3) {
              for (var n3, s = i(t3), l = o(s), c = l.length, u = 0, f = []; c > u; ) n3 = l[u++], r2 && !a.call(s, n3) || f.push(e3 ? [n3, s[n3]] : s[n3]);
              return f;
            };
          };
        }, 2661: function(e2, t2, n2) {
          var r2 = n2(3230), o = n2(8195), i = n2(2159), a = n2(3938).Reflect;
          e2.exports = a && a.ownKeys || function(e3) {
            var t3 = r2.f(i(e3)), n3 = o.f;
            return n3 ? t3.concat(n3(e3)) : t3;
          };
        }, 9115: function(e2, t2, n2) {
          var r2 = n2(3938).parseInt, o = n2(2422).trim, i = n2(9617), a = /^[-+]?0[xX]/;
          e2.exports = 8 !== r2(i + "08") || 22 !== r2(i + "0x16") ? function(e3, t3) {
            var n3 = o(String(e3), 3);
            return r2(n3, t3 >>> 0 || (a.test(n3) ? 16 : 10));
          } : r2;
        }, 931: function(e2) {
          e2.exports = function(e3) {
            try {
              return { e: false, v: e3() };
            } catch (e4) {
              return { e: true, v: e4 };
            }
          };
        }, 7790: function(e2, t2, n2) {
          var r2 = n2(2159), o = n2(6727), i = n2(9304);
          e2.exports = function(e3, t3) {
            if (r2(e3), o(t3) && t3.constructor === e3) return t3;
            var n3 = i.f(e3);
            return (0, n3.resolve)(t3), n3.promise;
          };
        }, 3101: function(e2) {
          e2.exports = function(e3, t2) {
            return { enumerable: !(1 & e3), configurable: !(2 & e3), writable: !(4 & e3), value: t2 };
          };
        }, 8144: function(e2, t2, n2) {
          var r2 = n2(1818);
          e2.exports = function(e3, t3, n3) {
            for (var o in t3) n3 && e3[o] ? e3[o] = t3[o] : r2(e3, o, t3[o]);
            return e3;
          };
        }, 7470: function(e2, t2, n2) {
          e2.exports = n2(1818);
        }, 2906: function(e2, t2, n2) {
          var r2 = n2(6727), o = n2(2159), i = function(e3, t3) {
            if (o(e3), !r2(t3) && null !== t3) throw TypeError(t3 + ": can't set as prototype!");
          };
          e2.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e3, t3, r3) {
            try {
              (r3 = n2(9216)(Function.call, n2(6183).f(Object.prototype, "__proto__").set, 2))(e3, []), t3 = !(e3 instanceof Array);
            } catch (e4) {
              t3 = true;
            }
            return function(e4, n3) {
              return i(e4, n3), t3 ? e4.__proto__ = n3 : r3(e4, n3), e4;
            };
          }({}, false) : void 0), check: i };
        }, 9967: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3938), o = n2(4579), i = n2(4743), a = n2(9666), s = n2(2939)("species");
          e2.exports = function(e3) {
            var t3 = "function" == typeof o[e3] ? o[e3] : r2[e3];
            a && t3 && !t3[s] && i.f(t3, s, { configurable: true, get: function() {
              return this;
            } });
          };
        }, 5378: function(e2, t2, n2) {
          var r2 = n2(4743).f, o = n2(7069), i = n2(2939)("toStringTag");
          e2.exports = function(e3, t3, n3) {
            e3 && !o(e3 = n3 ? e3 : e3.prototype, i) && r2(e3, i, { configurable: true, value: t3 });
          };
        }, 8989: function(e2, t2, n2) {
          var r2 = n2(250)("keys"), o = n2(5730);
          e2.exports = function(e3) {
            return r2[e3] || (r2[e3] = o(e3));
          };
        }, 250: function(e2, t2, n2) {
          var r2 = n2(4579), o = n2(3938), i = "__core-js_shared__", a = o[i] || (o[i] = {});
          (e2.exports = function(e3, t3) {
            return a[e3] || (a[e3] = void 0 !== t3 ? t3 : {});
          })("versions", []).push({ version: r2.version, mode: n2(6227) ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
        }, 2707: function(e2, t2, n2) {
          var r2 = n2(2159), o = n2(5663), i = n2(2939)("species");
          e2.exports = function(e3, t3) {
            var n3, a = r2(e3).constructor;
            return void 0 === a || null == (n3 = r2(a)[i]) ? t3 : o(n3);
          };
        }, 510: function(e2, t2, n2) {
          var r2 = n2(1052), o = n2(8333);
          e2.exports = function(e3) {
            return function(t3, n3) {
              var i, a, s = String(o(t3)), l = r2(n3), c = s.length;
              return l < 0 || l >= c ? e3 ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e3 ? s.charAt(l) : i : e3 ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536;
            };
          };
        }, 2422: function(e2, t2, n2) {
          var r2 = n2(3856), o = n2(8333), i = n2(7929), a = n2(9617), s = "[" + a + "]", l = RegExp("^" + s + s + "*"), c = RegExp(s + s + "*$"), u = function(e3, t3, n3) {
            var o2 = {}, s2 = i(function() {
              return !!a[e3]() || "​" != "​"[e3]();
            }), l2 = o2[e3] = s2 ? t3(f) : a[e3];
            n3 && (o2[n3] = l2), r2(r2.P + r2.F * s2, "String", o2);
          }, f = u.trim = function(e3, t3) {
            return e3 = String(o(e3)), 1 & t3 && (e3 = e3.replace(l, "")), 2 & t3 && (e3 = e3.replace(c, "")), e3;
          };
          e2.exports = u;
        }, 9617: function(e2) {
          e2.exports = "	\n\v\f\r   ᠎             　\u2028\u2029\uFEFF";
        }, 2569: function(e2, t2, n2) {
          var r2, o, i, a = n2(9216), s = n2(6778), l = n2(4881), c = n2(7467), u = n2(3938), f = u.process, d = u.setImmediate, p = u.clearImmediate, h = u.MessageChannel, m = u.Dispatch, g = 0, v = {}, A = "onreadystatechange", y = function() {
            var e3 = +this;
            if (v.hasOwnProperty(e3)) {
              var t3 = v[e3];
              delete v[e3], t3();
            }
          }, b = function(e3) {
            y.call(e3.data);
          };
          d && p || (d = function(e3) {
            for (var t3 = [], n3 = 1; arguments.length > n3; ) t3.push(arguments[n3++]);
            return v[++g] = function() {
              s("function" == typeof e3 ? e3 : Function(e3), t3);
            }, r2(g), g;
          }, p = function(e3) {
            delete v[e3];
          }, "process" == n2(2894)(f) ? r2 = function(e3) {
            f.nextTick(a(y, e3, 1));
          } : m && m.now ? r2 = function(e3) {
            m.now(a(y, e3, 1));
          } : h ? (i = (o = new h()).port2, o.port1.onmessage = b, r2 = a(i.postMessage, i, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (r2 = function(e3) {
            u.postMessage(e3 + "", "*");
          }, u.addEventListener("message", b, false)) : r2 = A in c("script") ? function(e3) {
            l.appendChild(c("script"))[A] = function() {
              l.removeChild(this), y.call(e3);
            };
          } : function(e3) {
            setTimeout(a(y, e3, 1), 0);
          }), e2.exports = { set: d, clear: p };
        }, 6531: function(e2, t2, n2) {
          var r2 = n2(1052), o = Math.max, i = Math.min;
          e2.exports = function(e3, t3) {
            return (e3 = r2(e3)) < 0 ? o(e3 + t3, 0) : i(e3, t3);
          };
        }, 1052: function(e2) {
          var t2 = Math.ceil, n2 = Math.floor;
          e2.exports = function(e3) {
            return isNaN(e3 = +e3) ? 0 : (e3 > 0 ? n2 : t2)(e3);
          };
        }, 7932: function(e2, t2, n2) {
          var r2 = n2(799), o = n2(8333);
          e2.exports = function(e3) {
            return r2(o(e3));
          };
        }, 8728: function(e2, t2, n2) {
          var r2 = n2(1052), o = Math.min;
          e2.exports = function(e3) {
            return e3 > 0 ? o(r2(e3), 9007199254740991) : 0;
          };
        }, 6530: function(e2, t2, n2) {
          var r2 = n2(8333);
          e2.exports = function(e3) {
            return Object(r2(e3));
          };
        }, 3206: function(e2, t2, n2) {
          var r2 = n2(6727);
          e2.exports = function(e3, t3) {
            if (!r2(e3)) return e3;
            var n3, o;
            if (t3 && "function" == typeof (n3 = e3.toString) && !r2(o = n3.call(e3))) return o;
            if ("function" == typeof (n3 = e3.valueOf) && !r2(o = n3.call(e3))) return o;
            if (!t3 && "function" == typeof (n3 = e3.toString) && !r2(o = n3.call(e3))) return o;
            throw TypeError("Can't convert object to primitive value");
          };
        }, 5730: function(e2) {
          var t2 = 0, n2 = Math.random();
          e2.exports = function(e3) {
            return "Symbol(".concat(void 0 === e3 ? "" : e3, ")_", (++t2 + n2).toString(36));
          };
        }, 6640: function(e2, t2, n2) {
          var r2 = n2(3938).navigator;
          e2.exports = r2 && r2.userAgent || "";
        }, 6347: function(e2, t2, n2) {
          var r2 = n2(3938), o = n2(4579), i = n2(6227), a = n2(5103), s = n2(4743).f;
          e2.exports = function(e3) {
            var t3 = o.Symbol || (o.Symbol = i ? {} : r2.Symbol || {});
            "_" == e3.charAt(0) || e3 in t3 || s(t3, e3, { value: a.f(e3) });
          };
        }, 5103: function(e2, t2, n2) {
          t2.f = n2(2939);
        }, 2939: function(e2, t2, n2) {
          var r2 = n2(250)("wks"), o = n2(5730), i = n2(3938).Symbol, a = "function" == typeof i;
          (e2.exports = function(e3) {
            return r2[e3] || (r2[e3] = a && i[e3] || (a ? i : o)("Symbol." + e3));
          }).store = r2;
        }, 3728: function(e2, t2, n2) {
          var r2 = n2(4677), o = n2(2939)("iterator"), i = n2(5449);
          e2.exports = n2(4579).getIteratorMethod = function(e3) {
            if (null != e3) return e3[o] || e3["@@iterator"] || i[r2(e3)];
          };
        }, 2586: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(9216), o = n2(3856), i = n2(6530), a = n2(5602), s = n2(5991), l = n2(8728), c = n2(2445), u = n2(3728);
          o(o.S + o.F * !n2(6630)(function(e3) {
            Array.from(e3);
          }), "Array", { from: function(e3) {
            var t3, n3, o2, f, d = i(e3), p = "function" == typeof this ? this : Array, h = arguments.length, m = h > 1 ? arguments[1] : void 0, g = void 0 !== m, v = 0, A = u(d);
            if (g && (m = r2(m, h > 2 ? arguments[2] : void 0, 2)), null == A || p == Array && s(A)) for (n3 = new p(t3 = l(d.length)); t3 > v; v++) c(n3, v, g ? m(d[v], v) : d[v]);
            else for (f = A.call(d), n3 = new p(); !(o2 = f.next()).done; v++) c(n3, v, g ? a(f, m, [o2.value, v], true) : o2.value);
            return n3.length = v, n3;
          } });
        }, 8691: function(e2, t2, n2) {
          var r2 = n2(3856);
          r2(r2.S, "Array", { isArray: n2(1421) });
        }, 3882: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(9003), o = n2(5084), i = n2(5449), a = n2(7932);
          e2.exports = n2(5700)(Array, "Array", function(e3, t3) {
            this._t = a(e3), this._i = 0, this._k = t3;
          }, function() {
            var e3 = this._t, t3 = this._k, n3 = this._i++;
            return !e3 || n3 >= e3.length ? (this._t = void 0, o(1)) : o(0, "keys" == t3 ? n3 : "values" == t3 ? e3[n3] : [n3, e3[n3]]);
          }, "values"), i.Arguments = i.Array, r2("keys"), r2("values"), r2("entries");
        }, 2699: function(e2, t2, n2) {
          var r2 = n2(3856);
          r2(r2.S + r2.F, "Object", { assign: n2(8335) });
        }, 6760: function(e2, t2, n2) {
          var r2 = n2(3856);
          r2(r2.S, "Object", { create: n2(526) });
        }, 1477: function(e2, t2, n2) {
          var r2 = n2(3856);
          r2(r2.S + r2.F * !n2(9666), "Object", { defineProperty: n2(4743).f });
        }, 5178: function(e2, t2, n2) {
          var r2 = n2(7932), o = n2(6183).f;
          n2(2584)("getOwnPropertyDescriptor", function() {
            return function(e3, t3) {
              return o(r2(e3), t3);
            };
          });
        }, 7220: function(e2, t2, n2) {
          var r2 = n2(6530), o = n2(5089);
          n2(2584)("getPrototypeOf", function() {
            return function(e3) {
              return o(r2(e3));
            };
          });
        }, 961: function(e2, t2, n2) {
          var r2 = n2(6530), o = n2(6162);
          n2(2584)("keys", function() {
            return function(e3) {
              return o(r2(e3));
            };
          });
        }, 9349: function(e2, t2, n2) {
          var r2 = n2(3856);
          r2(r2.S, "Object", { setPrototypeOf: n2(2906).set });
        }, 4058: function() {
        }, 7609: function(e2, t2, n2) {
          var r2 = n2(3856), o = n2(9115);
          r2(r2.G + r2.F * (parseInt != o), { parseInt: o });
        }, 2878: function(e2, t2, n2) {
          "use strict";
          var r2, o, i, a, s = n2(6227), l = n2(3938), c = n2(9216), u = n2(4677), f = n2(3856), d = n2(6727), p = n2(5663), h = n2(9142), m = n2(5576), g = n2(2707), v = n2(2569).set, A = n2(1601)(), y = n2(9304), b = n2(931), C = n2(6640), x = n2(7790), w = "Promise", k = l.TypeError, E = l.process, _ = E && E.versions, S = _ && _.v8 || "", M = l[w], B = "process" == u(E), O = function() {
          }, T = o = y.f, L = !!function() {
            try {
              var e3 = M.resolve(1), t3 = (e3.constructor = {})[n2(2939)("species")] = function(e4) {
                e4(O, O);
              };
              return (B || "function" == typeof PromiseRejectionEvent) && e3.then(O) instanceof t3 && 0 !== S.indexOf("6.6") && -1 === C.indexOf("Chrome/66");
            } catch (e4) {
            }
          }(), F = function(e3) {
            var t3;
            return !(!d(e3) || "function" != typeof (t3 = e3.then)) && t3;
          }, P = function(e3, t3) {
            if (!e3._n) {
              e3._n = true;
              var n3 = e3._c;
              A(function() {
                for (var r3 = e3._v, o2 = 1 == e3._s, i2 = 0, a2 = function(t4) {
                  var n4, i3, a3, s2 = o2 ? t4.ok : t4.fail, l2 = t4.resolve, c2 = t4.reject, u2 = t4.domain;
                  try {
                    s2 ? (o2 || (2 == e3._h && I(e3), e3._h = 1), true === s2 ? n4 = r3 : (u2 && u2.enter(), n4 = s2(r3), u2 && (u2.exit(), a3 = true)), n4 === t4.promise ? c2(k("Promise-chain cycle")) : (i3 = F(n4)) ? i3.call(n4, l2, c2) : l2(n4)) : c2(r3);
                  } catch (e4) {
                    u2 && !a3 && u2.exit(), c2(e4);
                  }
                }; n3.length > i2; ) a2(n3[i2++]);
                e3._c = [], e3._n = false, t3 && !e3._h && N(e3);
              });
            }
          }, N = function(e3) {
            v.call(l, function() {
              var t3, n3, r3, o2 = e3._v, i2 = j(e3);
              if (i2 && (t3 = b(function() {
                B ? E.emit("unhandledRejection", o2, e3) : (n3 = l.onunhandledrejection) ? n3({ promise: e3, reason: o2 }) : (r3 = l.console) && r3.error && r3.error("Unhandled promise rejection", o2);
              }), e3._h = B || j(e3) ? 2 : 1), e3._a = void 0, i2 && t3.e) throw t3.v;
            });
          }, j = function(e3) {
            return 1 !== e3._h && 0 === (e3._a || e3._c).length;
          }, I = function(e3) {
            v.call(l, function() {
              var t3;
              B ? E.emit("rejectionHandled", e3) : (t3 = l.onrejectionhandled) && t3({ promise: e3, reason: e3._v });
            });
          }, D = function(e3) {
            var t3 = this;
            t3._d || (t3._d = true, (t3 = t3._w || t3)._v = e3, t3._s = 2, t3._a || (t3._a = t3._c.slice()), P(t3, true));
          }, z = function(e3) {
            var t3, n3 = this;
            if (!n3._d) {
              n3._d = true, n3 = n3._w || n3;
              try {
                if (n3 === e3) throw k("Promise can't be resolved itself");
                (t3 = F(e3)) ? A(function() {
                  var r3 = { _w: n3, _d: false };
                  try {
                    t3.call(e3, c(z, r3, 1), c(D, r3, 1));
                  } catch (e4) {
                    D.call(r3, e4);
                  }
                }) : (n3._v = e3, n3._s = 1, P(n3, false));
              } catch (e4) {
                D.call({ _w: n3, _d: false }, e4);
              }
            }
          };
          L || (M = function(e3) {
            h(this, M, w, "_h"), p(e3), r2.call(this);
            try {
              e3(c(z, this, 1), c(D, this, 1));
            } catch (e4) {
              D.call(this, e4);
            }
          }, (r2 = function(e3) {
            this._c = [], this._a = void 0, this._s = 0, this._d = false, this._v = void 0, this._h = 0, this._n = false;
          }).prototype = n2(8144)(M.prototype, { then: function(e3, t3) {
            var n3 = T(g(this, M));
            return n3.ok = "function" != typeof e3 || e3, n3.fail = "function" == typeof t3 && t3, n3.domain = B ? E.domain : void 0, this._c.push(n3), this._a && this._a.push(n3), this._s && P(this, false), n3.promise;
          }, catch: function(e3) {
            return this.then(void 0, e3);
          } }), i = function() {
            var e3 = new r2();
            this.promise = e3, this.resolve = c(z, e3, 1), this.reject = c(D, e3, 1);
          }, y.f = T = function(e3) {
            return e3 === M || e3 === a ? new i(e3) : o(e3);
          }), f(f.G + f.W + f.F * !L, { Promise: M }), n2(5378)(M, w), n2(9967)(w), a = n2(4579)[w], f(f.S + f.F * !L, w, { reject: function(e3) {
            var t3 = T(this);
            return (0, t3.reject)(e3), t3.promise;
          } }), f(f.S + f.F * (s || !L), w, { resolve: function(e3) {
            return x(s && this === a ? M : this, e3);
          } }), f(f.S + f.F * !(L && n2(6630)(function(e3) {
            M.all(e3).catch(O);
          })), w, { all: function(e3) {
            var t3 = this, n3 = T(t3), r3 = n3.resolve, o2 = n3.reject, i2 = b(function() {
              var n4 = [], i3 = 0, a2 = 1;
              m(e3, false, function(e4) {
                var s2 = i3++, l2 = false;
                n4.push(void 0), a2++, t3.resolve(e4).then(function(e5) {
                  l2 || (l2 = true, n4[s2] = e5, --a2 || r3(n4));
                }, o2);
              }), --a2 || r3(n4);
            });
            return i2.e && o2(i2.v), n3.promise;
          }, race: function(e3) {
            var t3 = this, n3 = T(t3), r3 = n3.reject, o2 = b(function() {
              m(e3, false, function(e4) {
                t3.resolve(e4).then(n3.resolve, r3);
              });
            });
            return o2.e && r3(o2.v), n3.promise;
          } });
        }, 9650: function(e2, t2, n2) {
          var r2 = n2(3856), o = n2(526), i = n2(5663), a = n2(2159), s = n2(6727), l = n2(7929), c = n2(4094), u = (n2(3938).Reflect || {}).construct, f = l(function() {
            function e3() {
            }
            return !(u(function() {
            }, [], e3) instanceof e3);
          }), d = !l(function() {
            u(function() {
            });
          });
          r2(r2.S + r2.F * (f || d), "Reflect", { construct: function(e3, t3) {
            i(e3), a(t3);
            var n3 = arguments.length < 3 ? e3 : i(arguments[2]);
            if (d && !f) return u(e3, t3, n3);
            if (e3 == n3) {
              switch (t3.length) {
                case 0:
                  return new e3();
                case 1:
                  return new e3(t3[0]);
                case 2:
                  return new e3(t3[0], t3[1]);
                case 3:
                  return new e3(t3[0], t3[1], t3[2]);
                case 4:
                  return new e3(t3[0], t3[1], t3[2], t3[3]);
              }
              var r3 = [null];
              return r3.push.apply(r3, t3), new (c.apply(e3, r3))();
            }
            var l2 = n3.prototype, p = o(s(l2) ? l2 : Object.prototype), h = Function.apply.call(e3, p, t3);
            return s(h) ? h : p;
          } });
        }, 6917: function(e2, t2, n2) {
          var r2 = n2(6183), o = n2(5089), i = n2(7069), a = n2(3856), s = n2(6727), l = n2(2159);
          a(a.S, "Reflect", { get: function e3(t3, n3) {
            var a2, c, u = arguments.length < 3 ? t3 : arguments[2];
            return l(t3) === u ? t3[n3] : (a2 = r2.f(t3, n3)) ? i(a2, "value") ? a2.value : void 0 !== a2.get ? a2.get.call(u) : void 0 : s(c = o(t3)) ? e3(c, n3, u) : void 0;
          } });
        }, 1867: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(510)(true);
          n2(5700)(String, "String", function(e3) {
            this._t = String(e3), this._i = 0;
          }, function() {
            var e3, t3 = this._t, n3 = this._i;
            return n3 >= t3.length ? { value: void 0, done: true } : (e3 = r2(t3, n3), this._i += e3.length, { value: e3, done: false });
          });
        }, 6840: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3938), o = n2(7069), i = n2(9666), a = n2(3856), s = n2(7470), l = n2(7177).KEY, c = n2(7929), u = n2(250), f = n2(5378), d = n2(5730), p = n2(2939), h = n2(5103), m = n2(6347), g = n2(337), v = n2(1421), A = n2(2159), y = n2(6727), b = n2(6530), C = n2(7932), x = n2(3206), w = n2(3101), k = n2(526), E = n2(4368), _ = n2(6183), S = n2(8195), M = n2(4743), B = n2(6162), O = _.f, T = M.f, L = E.f, F = r2.Symbol, P = r2.JSON, N = P && P.stringify, j = "prototype", I = p("_hidden"), D = p("toPrimitive"), z = {}.propertyIsEnumerable, R = u("symbol-registry"), W = u("symbols"), H = u("op-symbols"), U = Object[j], V = "function" == typeof F && !!S.f, G = r2.QObject, $ = !G || !G[j] || !G[j].findChild, q = i && c(function() {
            return 7 != k(T({}, "a", { get: function() {
              return T(this, "a", { value: 7 }).a;
            } })).a;
          }) ? function(e3, t3, n3) {
            var r3 = O(U, t3);
            r3 && delete U[t3], T(e3, t3, n3), r3 && e3 !== U && T(U, t3, r3);
          } : T, K = function(e3) {
            var t3 = W[e3] = k(F[j]);
            return t3._k = e3, t3;
          }, Z = V && "symbol" == typeof F.iterator ? function(e3) {
            return "symbol" == typeof e3;
          } : function(e3) {
            return e3 instanceof F;
          }, Y = function(e3, t3, n3) {
            return e3 === U && Y(H, t3, n3), A(e3), t3 = x(t3, true), A(n3), o(W, t3) ? (n3.enumerable ? (o(e3, I) && e3[I][t3] && (e3[I][t3] = false), n3 = k(n3, { enumerable: w(0, false) })) : (o(e3, I) || T(e3, I, w(1, {})), e3[I][t3] = true), q(e3, t3, n3)) : T(e3, t3, n3);
          }, J = function(e3, t3) {
            A(e3);
            for (var n3, r3 = g(t3 = C(t3)), o2 = 0, i2 = r3.length; i2 > o2; ) Y(e3, n3 = r3[o2++], t3[n3]);
            return e3;
          }, X = function(e3) {
            var t3 = z.call(this, e3 = x(e3, true));
            return !(this === U && o(W, e3) && !o(H, e3)) && (!(t3 || !o(this, e3) || !o(W, e3) || o(this, I) && this[I][e3]) || t3);
          }, Q = function(e3, t3) {
            if (e3 = C(e3), t3 = x(t3, true), e3 !== U || !o(W, t3) || o(H, t3)) {
              var n3 = O(e3, t3);
              return !n3 || !o(W, t3) || o(e3, I) && e3[I][t3] || (n3.enumerable = true), n3;
            }
          }, ee = function(e3) {
            for (var t3, n3 = L(C(e3)), r3 = [], i2 = 0; n3.length > i2; ) o(W, t3 = n3[i2++]) || t3 == I || t3 == l || r3.push(t3);
            return r3;
          }, te = function(e3) {
            for (var t3, n3 = e3 === U, r3 = L(n3 ? H : C(e3)), i2 = [], a2 = 0; r3.length > a2; ) !o(W, t3 = r3[a2++]) || n3 && !o(U, t3) || i2.push(W[t3]);
            return i2;
          };
          V || (F = function() {
            if (this instanceof F) throw TypeError("Symbol is not a constructor!");
            var e3 = d(arguments.length > 0 ? arguments[0] : void 0), t3 = function(n3) {
              this === U && t3.call(H, n3), o(this, I) && o(this[I], e3) && (this[I][e3] = false), q(this, e3, w(1, n3));
            };
            return i && $ && q(U, e3, { configurable: true, set: t3 }), K(e3);
          }, s(F[j], "toString", function() {
            return this._k;
          }), _.f = Q, M.f = Y, n2(3230).f = E.f = ee, n2(6274).f = X, S.f = te, i && !n2(6227) && s(U, "propertyIsEnumerable", X, true), h.f = function(e3) {
            return K(p(e3));
          }), a(a.G + a.W + a.F * !V, { Symbol: F });
          for (var ne = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), re = 0; ne.length > re; ) p(ne[re++]);
          for (var oe = B(p.store), ie = 0; oe.length > ie; ) m(oe[ie++]);
          a(a.S + a.F * !V, "Symbol", { for: function(e3) {
            return o(R, e3 += "") ? R[e3] : R[e3] = F(e3);
          }, keyFor: function(e3) {
            if (!Z(e3)) throw TypeError(e3 + " is not a symbol!");
            for (var t3 in R) if (R[t3] === e3) return t3;
          }, useSetter: function() {
            $ = true;
          }, useSimple: function() {
            $ = false;
          } }), a(a.S + a.F * !V, "Object", { create: function(e3, t3) {
            return void 0 === t3 ? k(e3) : J(k(e3), t3);
          }, defineProperty: Y, defineProperties: J, getOwnPropertyDescriptor: Q, getOwnPropertyNames: ee, getOwnPropertySymbols: te });
          var ae = c(function() {
            S.f(1);
          });
          a(a.S + a.F * ae, "Object", { getOwnPropertySymbols: function(e3) {
            return S.f(b(e3));
          } }), P && a(a.S + a.F * (!V || c(function() {
            var e3 = F();
            return "[null]" != N([e3]) || "{}" != N({ a: e3 }) || "{}" != N(Object(e3));
          })), "JSON", { stringify: function(e3) {
            for (var t3, n3, r3 = [e3], o2 = 1; arguments.length > o2; ) r3.push(arguments[o2++]);
            if (n3 = t3 = r3[1], (y(t3) || void 0 !== e3) && !Z(e3)) return v(t3) || (t3 = function(e4, t4) {
              if ("function" == typeof n3 && (t4 = n3.call(this, e4, t4)), !Z(t4)) return t4;
            }), r3[1] = t3, N.apply(P, r3);
          } }), F[j][D] || n2(1818)(F[j], D, F[j].valueOf), f(F, "Symbol"), f(Math, "Math", true), f(r2.JSON, "JSON", true);
        }, 3264: function(e2, t2, n2) {
          var r2 = n2(3856), o = n2(2661), i = n2(7932), a = n2(6183), s = n2(2445);
          r2(r2.S, "Object", { getOwnPropertyDescriptors: function(e3) {
            for (var t3, n3, r3 = i(e3), l = a.f, c = o(r3), u = {}, f = 0; c.length > f; ) void 0 !== (n3 = l(r3, t3 = c[f++])) && s(u, t3, n3);
            return u;
          } });
        }, 1013: function(e2, t2, n2) {
          var r2 = n2(3856), o = n2(2050)(false);
          r2(r2.S, "Object", { values: function(e3) {
            return o(e3);
          } });
        }, 5971: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3856), o = n2(4579), i = n2(3938), a = n2(2707), s = n2(7790);
          r2(r2.P + r2.R, "Promise", { finally: function(e3) {
            var t3 = a(this, o.Promise || i.Promise), n3 = "function" == typeof e3;
            return this.then(n3 ? function(n4) {
              return s(t3, e3()).then(function() {
                return n4;
              });
            } : e3, n3 ? function(n4) {
              return s(t3, e3()).then(function() {
                throw n4;
              });
            } : e3);
          } });
        }, 2526: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3856), o = n2(9304), i = n2(931);
          r2(r2.S, "Promise", { try: function(e3) {
            var t3 = o.f(this), n3 = i(e3);
            return (n3.e ? t3.reject : t3.resolve)(n3.v), t3.promise;
          } });
        }, 8174: function(e2, t2, n2) {
          n2(6347)("asyncIterator");
        }, 6461: function(e2, t2, n2) {
          n2(6347)("observable");
        }, 3871: function(e2, t2, n2) {
          n2(3882);
          for (var r2 = n2(3938), o = n2(1818), i = n2(5449), a = n2(2939)("toStringTag"), s = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < s.length; l++) {
            var c = s[l], u = r2[c], f = u && u.prototype;
            f && !f[a] && o(f, a, c), i[c] = i.Array;
          }
        }, 4963: function(e2) {
          e2.exports = function(e3) {
            if ("function" != typeof e3) throw TypeError(e3 + " is not a function!");
            return e3;
          };
        }, 7722: function(e2, t2, n2) {
          var r2 = n2(6314)("unscopables"), o = Array.prototype;
          null == o[r2] && n2(7728)(o, r2, {}), e2.exports = function(e3) {
            o[r2][e3] = true;
          };
        }, 6793: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(4496)(true);
          e2.exports = function(e3, t3, n3) {
            return t3 + (n3 ? r2(e3, t3).length : 1);
          };
        }, 7007: function(e2, t2, n2) {
          var r2 = n2(5286);
          e2.exports = function(e3) {
            if (!r2(e3)) throw TypeError(e3 + " is not an object!");
            return e3;
          };
        }, 9315: function(e2, t2, n2) {
          var r2 = n2(2110), o = n2(875), i = n2(2337);
          e2.exports = function(e3) {
            return function(t3, n3, a) {
              var s, l = r2(t3), c = o(l.length), u = i(a, c);
              if (e3 && n3 != n3) {
                for (; c > u; ) if ((s = l[u++]) != s) return true;
              } else for (; c > u; u++) if ((e3 || u in l) && l[u] === n3) return e3 || u || 0;
              return !e3 && -1;
            };
          };
        }, 50: function(e2, t2, n2) {
          var r2 = n2(741), o = n2(9797), i = n2(508), a = n2(875), s = n2(6886);
          e2.exports = function(e3, t3) {
            var n3 = 1 == e3, l = 2 == e3, c = 3 == e3, u = 4 == e3, f = 6 == e3, d = 5 == e3 || f, p = t3 || s;
            return function(t4, s2, h) {
              for (var m, g, v = i(t4), A = o(v), y = r2(s2, h, 3), b = a(A.length), C = 0, x = n3 ? p(t4, b) : l ? p(t4, 0) : void 0; b > C; C++) if ((d || C in A) && (g = y(m = A[C], C, v), e3)) {
                if (n3) x[C] = g;
                else if (g) switch (e3) {
                  case 3:
                    return true;
                  case 5:
                    return m;
                  case 6:
                    return C;
                  case 2:
                    x.push(m);
                }
                else if (u) return false;
              }
              return f ? -1 : c || u ? u : x;
            };
          };
        }, 2736: function(e2, t2, n2) {
          var r2 = n2(5286), o = n2(4302), i = n2(6314)("species");
          e2.exports = function(e3) {
            var t3;
            return o(e3) && ("function" != typeof (t3 = e3.constructor) || t3 !== Array && !o(t3.prototype) || (t3 = void 0), r2(t3) && null === (t3 = t3[i]) && (t3 = void 0)), void 0 === t3 ? Array : t3;
          };
        }, 6886: function(e2, t2, n2) {
          var r2 = n2(2736);
          e2.exports = function(e3, t3) {
            return new (r2(e3))(t3);
          };
        }, 1488: function(e2, t2, n2) {
          var r2 = n2(2032), o = n2(6314)("toStringTag"), i = "Arguments" == r2(/* @__PURE__ */ function() {
            return arguments;
          }());
          e2.exports = function(e3) {
            var t3, n3, a;
            return void 0 === e3 ? "Undefined" : null === e3 ? "Null" : "string" == typeof (n3 = function(e4, t4) {
              try {
                return e4[t4];
              } catch (e5) {
              }
            }(t3 = Object(e3), o)) ? n3 : i ? r2(t3) : "Object" == (a = r2(t3)) && "function" == typeof t3.callee ? "Arguments" : a;
          };
        }, 2032: function(e2) {
          var t2 = {}.toString;
          e2.exports = function(e3) {
            return t2.call(e3).slice(8, -1);
          };
        }, 5645: function(e2) {
          var t2 = e2.exports = { version: "2.6.12" };
          "number" == typeof __e && (__e = t2);
        }, 741: function(e2, t2, n2) {
          var r2 = n2(4963);
          e2.exports = function(e3, t3, n3) {
            if (r2(e3), void 0 === t3) return e3;
            switch (n3) {
              case 1:
                return function(n4) {
                  return e3.call(t3, n4);
                };
              case 2:
                return function(n4, r3) {
                  return e3.call(t3, n4, r3);
                };
              case 3:
                return function(n4, r3, o) {
                  return e3.call(t3, n4, r3, o);
                };
            }
            return function() {
              return e3.apply(t3, arguments);
            };
          };
        }, 1355: function(e2) {
          e2.exports = function(e3) {
            if (null == e3) throw TypeError("Can't call method on  " + e3);
            return e3;
          };
        }, 7057: function(e2, t2, n2) {
          e2.exports = !n2(4253)(function() {
            return 7 != Object.defineProperty({}, "a", { get: function() {
              return 7;
            } }).a;
          });
        }, 2457: function(e2, t2, n2) {
          var r2 = n2(5286), o = n2(3816).document, i = r2(o) && r2(o.createElement);
          e2.exports = function(e3) {
            return i ? o.createElement(e3) : {};
          };
        }, 4430: function(e2) {
          e2.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
        }, 2985: function(e2, t2, n2) {
          var r2 = n2(3816), o = n2(5645), i = n2(7728), a = n2(7234), s = n2(741), l = "prototype", c = function(e3, t3, n3) {
            var u, f, d, p, h = e3 & c.F, m = e3 & c.G, g = e3 & c.S, v = e3 & c.P, A = e3 & c.B, y = m ? r2 : g ? r2[t3] || (r2[t3] = {}) : (r2[t3] || {})[l], b = m ? o : o[t3] || (o[t3] = {}), C = b[l] || (b[l] = {});
            for (u in m && (n3 = t3), n3) d = ((f = !h && y && void 0 !== y[u]) ? y : n3)[u], p = A && f ? s(d, r2) : v && "function" == typeof d ? s(Function.call, d) : d, y && a(y, u, d, e3 & c.U), b[u] != d && i(b, u, p), v && C[u] != d && (C[u] = d);
          };
          r2.core = o, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e2.exports = c;
        }, 8852: function(e2, t2, n2) {
          var r2 = n2(6314)("match");
          e2.exports = function(e3) {
            var t3 = /./;
            try {
              "/./"[e3](t3);
            } catch (n3) {
              try {
                return t3[r2] = false, !"/./"[e3](t3);
              } catch (e4) {
              }
            }
            return true;
          };
        }, 4253: function(e2) {
          e2.exports = function(e3) {
            try {
              return !!e3();
            } catch (e4) {
              return true;
            }
          };
        }, 8082: function(e2, t2, n2) {
          "use strict";
          n2(8269);
          var r2 = n2(7234), o = n2(7728), i = n2(4253), a = n2(1355), s = n2(6314), l = n2(1165), c = s("species"), u = !i(function() {
            var e3 = /./;
            return e3.exec = function() {
              var e4 = [];
              return e4.groups = { a: "7" }, e4;
            }, "7" !== "".replace(e3, "$<a>");
          }), f = function() {
            var e3 = /(?:)/, t3 = e3.exec;
            e3.exec = function() {
              return t3.apply(this, arguments);
            };
            var n3 = "ab".split(e3);
            return 2 === n3.length && "a" === n3[0] && "b" === n3[1];
          }();
          e2.exports = function(e3, t3, n3) {
            var d = s(e3), p = !i(function() {
              var t4 = {};
              return t4[d] = function() {
                return 7;
              }, 7 != ""[e3](t4);
            }), h = p ? !i(function() {
              var t4 = false, n4 = /a/;
              return n4.exec = function() {
                return t4 = true, null;
              }, "split" === e3 && (n4.constructor = {}, n4.constructor[c] = function() {
                return n4;
              }), n4[d](""), !t4;
            }) : void 0;
            if (!p || !h || "replace" === e3 && !u || "split" === e3 && !f) {
              var m = /./[d], g = n3(a, d, ""[e3], function(e4, t4, n4, r3, o2) {
                return t4.exec === l ? p && !o2 ? { done: true, value: m.call(t4, n4, r3) } : { done: true, value: e4.call(n4, t4, r3) } : { done: false };
              }), v = g[0], A = g[1];
              r2(String.prototype, e3, v), o(RegExp.prototype, d, 2 == t3 ? function(e4, t4) {
                return A.call(e4, this, t4);
              } : function(e4) {
                return A.call(e4, this);
              });
            }
          };
        }, 3218: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(7007);
          e2.exports = function() {
            var e3 = r2(this), t3 = "";
            return e3.global && (t3 += "g"), e3.ignoreCase && (t3 += "i"), e3.multiline && (t3 += "m"), e3.unicode && (t3 += "u"), e3.sticky && (t3 += "y"), t3;
          };
        }, 18: function(e2, t2, n2) {
          e2.exports = n2(3825)("native-function-to-string", Function.toString);
        }, 3816: function(e2) {
          var t2 = e2.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
          "number" == typeof __g && (__g = t2);
        }, 9181: function(e2) {
          var t2 = {}.hasOwnProperty;
          e2.exports = function(e3, n2) {
            return t2.call(e3, n2);
          };
        }, 7728: function(e2, t2, n2) {
          var r2 = n2(9275), o = n2(681);
          e2.exports = n2(7057) ? function(e3, t3, n3) {
            return r2.f(e3, t3, o(1, n3));
          } : function(e3, t3, n3) {
            return e3[t3] = n3, e3;
          };
        }, 639: function(e2, t2, n2) {
          var r2 = n2(3816).document;
          e2.exports = r2 && r2.documentElement;
        }, 1734: function(e2, t2, n2) {
          e2.exports = !n2(7057) && !n2(4253)(function() {
            return 7 != Object.defineProperty(n2(2457)("div"), "a", { get: function() {
              return 7;
            } }).a;
          });
        }, 266: function(e2, t2, n2) {
          var r2 = n2(5286), o = n2(7375).set;
          e2.exports = function(e3, t3, n3) {
            var i, a = t3.constructor;
            return a !== n3 && "function" == typeof a && (i = a.prototype) !== n3.prototype && r2(i) && o && o(e3, i), e3;
          };
        }, 9797: function(e2, t2, n2) {
          var r2 = n2(2032);
          e2.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e3) {
            return "String" == r2(e3) ? e3.split("") : Object(e3);
          };
        }, 4302: function(e2, t2, n2) {
          var r2 = n2(2032);
          e2.exports = Array.isArray || function(e3) {
            return "Array" == r2(e3);
          };
        }, 5286: function(e2) {
          e2.exports = function(e3) {
            return "object" == typeof e3 ? null !== e3 : "function" == typeof e3;
          };
        }, 5364: function(e2, t2, n2) {
          var r2 = n2(5286), o = n2(2032), i = n2(6314)("match");
          e2.exports = function(e3) {
            var t3;
            return r2(e3) && (void 0 !== (t3 = e3[i]) ? !!t3 : "RegExp" == o(e3));
          };
        }, 4461: function(e2) {
          e2.exports = false;
        }, 9275: function(e2, t2, n2) {
          var r2 = n2(7007), o = n2(1734), i = n2(1689), a = Object.defineProperty;
          t2.f = n2(7057) ? Object.defineProperty : function(e3, t3, n3) {
            if (r2(e3), t3 = i(t3, true), r2(n3), o) try {
              return a(e3, t3, n3);
            } catch (e4) {
            }
            if ("get" in n3 || "set" in n3) throw TypeError("Accessors not supported!");
            return "value" in n3 && (e3[t3] = n3.value), e3;
          };
        }, 8693: function(e2, t2, n2) {
          var r2 = n2(4682), o = n2(681), i = n2(2110), a = n2(1689), s = n2(9181), l = n2(1734), c = Object.getOwnPropertyDescriptor;
          t2.f = n2(7057) ? c : function(e3, t3) {
            if (e3 = i(e3), t3 = a(t3, true), l) try {
              return c(e3, t3);
            } catch (e4) {
            }
            if (s(e3, t3)) return o(!r2.f.call(e3, t3), e3[t3]);
          };
        }, 616: function(e2, t2, n2) {
          var r2 = n2(189), o = n2(4430).concat("length", "prototype");
          t2.f = Object.getOwnPropertyNames || function(e3) {
            return r2(e3, o);
          };
        }, 189: function(e2, t2, n2) {
          var r2 = n2(9181), o = n2(2110), i = n2(9315)(false), a = n2(9335)("IE_PROTO");
          e2.exports = function(e3, t3) {
            var n3, s = o(e3), l = 0, c = [];
            for (n3 in s) n3 != a && r2(s, n3) && c.push(n3);
            for (; t3.length > l; ) r2(s, n3 = t3[l++]) && (~i(c, n3) || c.push(n3));
            return c;
          };
        }, 4682: function(e2, t2) {
          t2.f = {}.propertyIsEnumerable;
        }, 681: function(e2) {
          e2.exports = function(e3, t2) {
            return { enumerable: !(1 & e3), configurable: !(2 & e3), writable: !(4 & e3), value: t2 };
          };
        }, 7234: function(e2, t2, n2) {
          var r2 = n2(3816), o = n2(7728), i = n2(9181), a = n2(3953)("src"), s = n2(18), l = "toString", c = ("" + s).split(l);
          n2(5645).inspectSource = function(e3) {
            return s.call(e3);
          }, (e2.exports = function(e3, t3, n3, s2) {
            var l2 = "function" == typeof n3;
            l2 && (i(n3, "name") || o(n3, "name", t3)), e3[t3] !== n3 && (l2 && (i(n3, a) || o(n3, a, e3[t3] ? "" + e3[t3] : c.join(String(t3)))), e3 === r2 ? e3[t3] = n3 : s2 ? e3[t3] ? e3[t3] = n3 : o(e3, t3, n3) : (delete e3[t3], o(e3, t3, n3)));
          })(Function.prototype, l, function() {
            return "function" == typeof this && this[a] || s.call(this);
          });
        }, 7787: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(1488), o = RegExp.prototype.exec;
          e2.exports = function(e3, t3) {
            var n3 = e3.exec;
            if ("function" == typeof n3) {
              var i = n3.call(e3, t3);
              if ("object" != typeof i) throw new TypeError("RegExp exec method returned something other than an Object or null");
              return i;
            }
            if ("RegExp" !== r2(e3)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return o.call(e3, t3);
          };
        }, 1165: function(e2, t2, n2) {
          "use strict";
          var r2, o, i = n2(3218), a = RegExp.prototype.exec, s = String.prototype.replace, l = a, c = "lastIndex", u = (r2 = /a/, o = /b*/g, a.call(r2, "a"), a.call(o, "a"), 0 !== r2[c] || 0 !== o[c]), f = void 0 !== /()??/.exec("")[1];
          (u || f) && (l = function(e3) {
            var t3, n3, r3, o2, l2 = this;
            return f && (n3 = new RegExp("^" + l2.source + "$(?!\\s)", i.call(l2))), u && (t3 = l2[c]), r3 = a.call(l2, e3), u && r3 && (l2[c] = l2.global ? r3.index + r3[0].length : t3), f && r3 && r3.length > 1 && s.call(r3[0], n3, function() {
              for (o2 = 1; o2 < arguments.length - 2; o2++) void 0 === arguments[o2] && (r3[o2] = void 0);
            }), r3;
          }), e2.exports = l;
        }, 7375: function(e2, t2, n2) {
          var r2 = n2(5286), o = n2(7007), i = function(e3, t3) {
            if (o(e3), !r2(t3) && null !== t3) throw TypeError(t3 + ": can't set as prototype!");
          };
          e2.exports = { set: Object.setPrototypeOf || ("__proto__" in {} ? function(e3, t3, r3) {
            try {
              (r3 = n2(741)(Function.call, n2(8693).f(Object.prototype, "__proto__").set, 2))(e3, []), t3 = !(e3 instanceof Array);
            } catch (e4) {
              t3 = true;
            }
            return function(e4, n3) {
              return i(e4, n3), t3 ? e4.__proto__ = n3 : r3(e4, n3), e4;
            };
          }({}, false) : void 0), check: i };
        }, 2974: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3816), o = n2(9275), i = n2(7057), a = n2(6314)("species");
          e2.exports = function(e3) {
            var t3 = r2[e3];
            i && t3 && !t3[a] && o.f(t3, a, { configurable: true, get: function() {
              return this;
            } });
          };
        }, 9335: function(e2, t2, n2) {
          var r2 = n2(3825)("keys"), o = n2(3953);
          e2.exports = function(e3) {
            return r2[e3] || (r2[e3] = o(e3));
          };
        }, 3825: function(e2, t2, n2) {
          var r2 = n2(5645), o = n2(3816), i = "__core-js_shared__", a = o[i] || (o[i] = {});
          (e2.exports = function(e3, t3) {
            return a[e3] || (a[e3] = void 0 !== t3 ? t3 : {});
          })("versions", []).push({ version: r2.version, mode: n2(4461) ? "pure" : "global", copyright: "© 2020 Denis Pushkarev (zloirock.ru)" });
        }, 8364: function(e2, t2, n2) {
          var r2 = n2(7007), o = n2(4963), i = n2(6314)("species");
          e2.exports = function(e3, t3) {
            var n3, a = r2(e3).constructor;
            return void 0 === a || null == (n3 = r2(a)[i]) ? t3 : o(n3);
          };
        }, 7717: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(4253);
          e2.exports = function(e3, t3) {
            return !!e3 && r2(function() {
              t3 ? e3.call(null, function() {
              }, 1) : e3.call(null);
            });
          };
        }, 4496: function(e2, t2, n2) {
          var r2 = n2(1467), o = n2(1355);
          e2.exports = function(e3) {
            return function(t3, n3) {
              var i, a, s = String(o(t3)), l = r2(n3), c = s.length;
              return l < 0 || l >= c ? e3 ? "" : void 0 : (i = s.charCodeAt(l)) < 55296 || i > 56319 || l + 1 === c || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e3 ? s.charAt(l) : i : e3 ? s.slice(l, l + 2) : a - 56320 + (i - 55296 << 10) + 65536;
            };
          };
        }, 2094: function(e2, t2, n2) {
          var r2 = n2(5364), o = n2(1355);
          e2.exports = function(e3, t3, n3) {
            if (r2(t3)) throw TypeError("String#" + n3 + " doesn't accept regex!");
            return String(o(e3));
          };
        }, 9395: function(e2, t2, n2) {
          var r2 = n2(2985), o = n2(4253), i = n2(1355), a = /"/g, s = function(e3, t3, n3, r3) {
            var o2 = String(i(e3)), s2 = "<" + t3;
            return "" !== n3 && (s2 += " " + n3 + '="' + String(r3).replace(a, "&quot;") + '"'), s2 + ">" + o2 + "</" + t3 + ">";
          };
          e2.exports = function(e3, t3) {
            var n3 = {};
            n3[e3] = t3(s), r2(r2.P + r2.F * o(function() {
              var t4 = ""[e3]('"');
              return t4 !== t4.toLowerCase() || t4.split('"').length > 3;
            }), "String", n3);
          };
        }, 2337: function(e2, t2, n2) {
          var r2 = n2(1467), o = Math.max, i = Math.min;
          e2.exports = function(e3, t3) {
            return (e3 = r2(e3)) < 0 ? o(e3 + t3, 0) : i(e3, t3);
          };
        }, 1467: function(e2) {
          var t2 = Math.ceil, n2 = Math.floor;
          e2.exports = function(e3) {
            return isNaN(e3 = +e3) ? 0 : (e3 > 0 ? n2 : t2)(e3);
          };
        }, 2110: function(e2, t2, n2) {
          var r2 = n2(9797), o = n2(1355);
          e2.exports = function(e3) {
            return r2(o(e3));
          };
        }, 875: function(e2, t2, n2) {
          var r2 = n2(1467), o = Math.min;
          e2.exports = function(e3) {
            return e3 > 0 ? o(r2(e3), 9007199254740991) : 0;
          };
        }, 508: function(e2, t2, n2) {
          var r2 = n2(1355);
          e2.exports = function(e3) {
            return Object(r2(e3));
          };
        }, 1689: function(e2, t2, n2) {
          var r2 = n2(5286);
          e2.exports = function(e3, t3) {
            if (!r2(e3)) return e3;
            var n3, o;
            if (t3 && "function" == typeof (n3 = e3.toString) && !r2(o = n3.call(e3))) return o;
            if ("function" == typeof (n3 = e3.valueOf) && !r2(o = n3.call(e3))) return o;
            if (!t3 && "function" == typeof (n3 = e3.toString) && !r2(o = n3.call(e3))) return o;
            throw TypeError("Can't convert object to primitive value");
          };
        }, 3953: function(e2) {
          var t2 = 0, n2 = Math.random();
          e2.exports = function(e3) {
            return "Symbol(".concat(void 0 === e3 ? "" : e3, ")_", (++t2 + n2).toString(36));
          };
        }, 6314: function(e2, t2, n2) {
          var r2 = n2(3825)("wks"), o = n2(3953), i = n2(3816).Symbol, a = "function" == typeof i;
          (e2.exports = function(e3) {
            return r2[e3] || (r2[e3] = a && i[e3] || (a ? i : o)("Symbol." + e3));
          }).store = r2;
        }, 8837: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(2985), o = n2(50)(2);
          r2(r2.P + r2.F * !n2(7717)([].filter, true), "Array", { filter: function(e3) {
            return o(this, e3, arguments[1]);
          } });
        }, 2310: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(2985), o = n2(50)(5), i = "find", a = true;
          i in [] && Array(1)[i](function() {
            a = false;
          }), r2(r2.P + r2.F * a, "Array", { find: function(e3) {
            return o(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } }), n2(7722)(i);
        }, 9371: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(2985), o = n2(50)(1);
          r2(r2.P + r2.F * !n2(7717)([].map, true), "Array", { map: function(e3) {
            return o(this, e3, arguments[1]);
          } });
        }, 110: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(2985), o = n2(639), i = n2(2032), a = n2(2337), s = n2(875), l = [].slice;
          r2(r2.P + r2.F * n2(4253)(function() {
            o && l.call(o);
          }), "Array", { slice: function(e3, t3) {
            var n3 = s(this.length), r3 = i(this);
            if (t3 = void 0 === t3 ? n3 : t3, "Array" == r3) return l.call(this, e3, t3);
            for (var o2 = a(e3, n3), c = a(t3, n3), u = s(c - o2), f = new Array(u), d = 0; d < u; d++) f[d] = "String" == r3 ? this.charAt(o2 + d) : this[o2 + d];
            return f;
          } });
        }, 6059: function(e2, t2, n2) {
          var r2 = n2(9275).f, o = Function.prototype, i = /^\s*function ([^ (]*)/, a = "name";
          a in o || n2(7057) && r2(o, a, { configurable: true, get: function() {
            try {
              return ("" + this).match(i)[1];
            } catch (e3) {
              return "";
            }
          } });
        }, 6253: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(1488), o = {};
          o[n2(6314)("toStringTag")] = "z", o + "" != "[object z]" && n2(7234)(Object.prototype, "toString", function() {
            return "[object " + r2(this) + "]";
          }, true);
        }, 3946: function(e2, t2, n2) {
          var r2 = n2(3816), o = n2(266), i = n2(9275).f, a = n2(616).f, s = n2(5364), l = n2(3218), c = r2.RegExp, u = c, f = c.prototype, d = /a/g, p = /a/g, h = new c(d) !== d;
          if (n2(7057) && (!h || n2(4253)(function() {
            return p[n2(6314)("match")] = false, c(d) != d || c(p) == p || "/a/i" != c(d, "i");
          }))) {
            c = function(e3, t3) {
              var n3 = this instanceof c, r3 = s(e3), i2 = void 0 === t3;
              return !n3 && r3 && e3.constructor === c && i2 ? e3 : o(h ? new u(r3 && !i2 ? e3.source : e3, t3) : u((r3 = e3 instanceof c) ? e3.source : e3, r3 && i2 ? l.call(e3) : t3), n3 ? this : f, c);
            };
            for (var m = function(e3) {
              e3 in c || i(c, e3, { configurable: true, get: function() {
                return u[e3];
              }, set: function(t3) {
                u[e3] = t3;
              } });
            }, g = a(u), v = 0; g.length > v; ) m(g[v++]);
            f.constructor = c, c.prototype = f, n2(7234)(r2, "RegExp", c);
          }
          n2(2974)("RegExp");
        }, 8269: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(1165);
          n2(2985)({ target: "RegExp", proto: true, forced: r2 !== /./.exec }, { exec: r2 });
        }, 6774: function(e2, t2, n2) {
          n2(7057) && "g" != /./g.flags && n2(9275).f(RegExp.prototype, "flags", { configurable: true, get: n2(3218) });
        }, 1466: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(7007), o = n2(875), i = n2(6793), a = n2(7787);
          n2(8082)("match", 1, function(e3, t3, n3, s) {
            return [function(n4) {
              var r3 = e3(this), o2 = null == n4 ? void 0 : n4[t3];
              return void 0 !== o2 ? o2.call(n4, r3) : new RegExp(n4)[t3](String(r3));
            }, function(e4) {
              var t4 = s(n3, e4, this);
              if (t4.done) return t4.value;
              var l = r2(e4), c = String(this);
              if (!l.global) return a(l, c);
              var u = l.unicode;
              l.lastIndex = 0;
              for (var f, d = [], p = 0; null !== (f = a(l, c)); ) {
                var h = String(f[0]);
                d[p] = h, "" === h && (l.lastIndex = i(c, o(l.lastIndex), u)), p++;
              }
              return 0 === p ? null : d;
            }];
          });
        }, 9357: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(7007), o = n2(508), i = n2(875), a = n2(1467), s = n2(6793), l = n2(7787), c = Math.max, u = Math.min, f = Math.floor, d = /\$([$&`']|\d\d?|<[^>]*>)/g, p = /\$([$&`']|\d\d?)/g;
          n2(8082)("replace", 2, function(e3, t3, n3, h) {
            return [function(r3, o2) {
              var i2 = e3(this), a2 = null == r3 ? void 0 : r3[t3];
              return void 0 !== a2 ? a2.call(r3, i2, o2) : n3.call(String(i2), r3, o2);
            }, function(e4, t4) {
              var o2 = h(n3, e4, this, t4);
              if (o2.done) return o2.value;
              var f2 = r2(e4), d2 = String(this), p2 = "function" == typeof t4;
              p2 || (t4 = String(t4));
              var g = f2.global;
              if (g) {
                var v = f2.unicode;
                f2.lastIndex = 0;
              }
              for (var A = []; ; ) {
                var y = l(f2, d2);
                if (null === y) break;
                if (A.push(y), !g) break;
                "" === String(y[0]) && (f2.lastIndex = s(d2, i(f2.lastIndex), v));
              }
              for (var b, C = "", x = 0, w = 0; w < A.length; w++) {
                y = A[w];
                for (var k = String(y[0]), E = c(u(a(y.index), d2.length), 0), _ = [], S = 1; S < y.length; S++) _.push(void 0 === (b = y[S]) ? b : String(b));
                var M = y.groups;
                if (p2) {
                  var B = [k].concat(_, E, d2);
                  void 0 !== M && B.push(M);
                  var O = String(t4.apply(void 0, B));
                } else O = m(k, d2, E, _, M, t4);
                E >= x && (C += d2.slice(x, E) + O, x = E + k.length);
              }
              return C + d2.slice(x);
            }];
            function m(e4, t4, r3, i2, a2, s2) {
              var l2 = r3 + e4.length, c2 = i2.length, u2 = p;
              return void 0 !== a2 && (a2 = o(a2), u2 = d), n3.call(s2, u2, function(n4, o2) {
                var s3;
                switch (o2.charAt(0)) {
                  case "$":
                    return "$";
                  case "&":
                    return e4;
                  case "`":
                    return t4.slice(0, r3);
                  case "'":
                    return t4.slice(l2);
                  case "<":
                    s3 = a2[o2.slice(1, -1)];
                    break;
                  default:
                    var u3 = +o2;
                    if (0 === u3) return n4;
                    if (u3 > c2) {
                      var d2 = f(u3 / 10);
                      return 0 === d2 ? n4 : d2 <= c2 ? void 0 === i2[d2 - 1] ? o2.charAt(1) : i2[d2 - 1] + o2.charAt(1) : n4;
                    }
                    s3 = i2[u3 - 1];
                }
                return void 0 === s3 ? "" : s3;
              });
            }
          });
        }, 1876: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(5364), o = n2(7007), i = n2(8364), a = n2(6793), s = n2(875), l = n2(7787), c = n2(1165), u = n2(4253), f = Math.min, d = [].push, p = "split", h = "length", m = "lastIndex", g = 4294967295, v = !u(function() {
            RegExp(g, "y");
          });
          n2(8082)("split", 2, function(e3, t3, n3, u2) {
            var A;
            return A = "c" == "abbc"[p](/(b)*/)[1] || 4 != "test"[p](/(?:)/, -1)[h] || 2 != "ab"[p](/(?:ab)*/)[h] || 4 != "."[p](/(.?)(.?)/)[h] || "."[p](/()()/)[h] > 1 || ""[p](/.?/)[h] ? function(e4, t4) {
              var o2 = String(this);
              if (void 0 === e4 && 0 === t4) return [];
              if (!r2(e4)) return n3.call(o2, e4, t4);
              for (var i2, a2, s2, l2 = [], u3 = (e4.ignoreCase ? "i" : "") + (e4.multiline ? "m" : "") + (e4.unicode ? "u" : "") + (e4.sticky ? "y" : ""), f2 = 0, p2 = void 0 === t4 ? g : t4 >>> 0, v2 = new RegExp(e4.source, u3 + "g"); (i2 = c.call(v2, o2)) && !((a2 = v2[m]) > f2 && (l2.push(o2.slice(f2, i2.index)), i2[h] > 1 && i2.index < o2[h] && d.apply(l2, i2.slice(1)), s2 = i2[0][h], f2 = a2, l2[h] >= p2)); ) v2[m] === i2.index && v2[m]++;
              return f2 === o2[h] ? !s2 && v2.test("") || l2.push("") : l2.push(o2.slice(f2)), l2[h] > p2 ? l2.slice(0, p2) : l2;
            } : "0"[p](void 0, 0)[h] ? function(e4, t4) {
              return void 0 === e4 && 0 === t4 ? [] : n3.call(this, e4, t4);
            } : n3, [function(n4, r3) {
              var o2 = e3(this), i2 = null == n4 ? void 0 : n4[t3];
              return void 0 !== i2 ? i2.call(n4, o2, r3) : A.call(String(o2), n4, r3);
            }, function(e4, t4) {
              var r3 = u2(A, e4, this, t4, A !== n3);
              if (r3.done) return r3.value;
              var c2 = o(e4), d2 = String(this), p2 = i(c2, RegExp), h2 = c2.unicode, m2 = (c2.ignoreCase ? "i" : "") + (c2.multiline ? "m" : "") + (c2.unicode ? "u" : "") + (v ? "y" : "g"), y = new p2(v ? c2 : "^(?:" + c2.source + ")", m2), b = void 0 === t4 ? g : t4 >>> 0;
              if (0 === b) return [];
              if (0 === d2.length) return null === l(y, d2) ? [d2] : [];
              for (var C = 0, x = 0, w = []; x < d2.length; ) {
                y.lastIndex = v ? x : 0;
                var k, E = l(y, v ? d2 : d2.slice(x));
                if (null === E || (k = f(s(y.lastIndex + (v ? 0 : x)), d2.length)) === C) x = a(d2, x, h2);
                else {
                  if (w.push(d2.slice(C, x)), w.length === b) return w;
                  for (var _ = 1; _ <= E.length - 1; _++) if (w.push(E[_]), w.length === b) return w;
                  x = C = k;
                }
              }
              return w.push(d2.slice(C)), w;
            }];
          });
        }, 6108: function(e2, t2, n2) {
          "use strict";
          n2(6774);
          var r2 = n2(7007), o = n2(3218), i = n2(7057), a = "toString", s = /./[a], l = function(e3) {
            n2(7234)(RegExp.prototype, a, e3, true);
          };
          n2(4253)(function() {
            return "/a/b" != s.call({ source: "a", flags: "b" });
          }) ? l(function() {
            var e3 = r2(this);
            return "/".concat(e3.source, "/", "flags" in e3 ? e3.flags : !i && e3 instanceof RegExp ? o.call(e3) : void 0);
          }) : s.name != a && l(function() {
            return s.call(this);
          });
        }, 856: function(e2, t2, n2) {
          "use strict";
          n2(9395)("anchor", function(e3) {
            return function(t3) {
              return e3(this, "a", "name", t3);
            };
          });
        }, 6620: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(2985), o = n2(875), i = n2(2094), a = "endsWith", s = ""[a];
          r2(r2.P + r2.F * n2(8852)(a), "String", { endsWith: function(e3) {
            var t3 = i(this, e3, a), n3 = arguments.length > 1 ? arguments[1] : void 0, r3 = o(t3.length), l = void 0 === n3 ? r3 : Math.min(o(n3), r3), c = String(e3);
            return s ? s.call(t3, c, l) : t3.slice(l - c.length, l) === c;
          } });
        }, 2850: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(2985), o = n2(2094), i = "includes";
          r2(r2.P + r2.F * n2(8852)(i), "String", { includes: function(e3) {
            return !!~o(this, e3, i).indexOf(e3, arguments.length > 1 ? arguments[1] : void 0);
          } });
        }, 2773: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(2985), o = n2(9315)(true);
          r2(r2.P, "Array", { includes: function(e3) {
            return o(this, e3, arguments.length > 1 ? arguments[1] : void 0);
          } }), n2(7722)("includes");
        }, 3252: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(7537), o = n2.n(r2), i = n2(3645), a = n2.n(i)()(o());
          a.push([e2.id, ".CodeMirror-simplescroll-horizontal div, .CodeMirror-simplescroll-vertical div {\n  position: absolute;\n  background: #ccc;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid #bbb;\n  border-radius: 2px;\n}\n\n.CodeMirror-simplescroll-horizontal, .CodeMirror-simplescroll-vertical {\n  position: absolute;\n  z-index: 6;\n  background: #eee;\n}\n\n.CodeMirror-simplescroll-horizontal {\n  bottom: 0; left: 0;\n  height: 8px;\n}\n.CodeMirror-simplescroll-horizontal div {\n  bottom: 0;\n  height: 100%;\n}\n\n.CodeMirror-simplescroll-vertical {\n  right: 0; top: 0;\n  width: 8px;\n}\n.CodeMirror-simplescroll-vertical div {\n  right: 0;\n  width: 100%;\n}\n\n\n.CodeMirror-overlayscroll .CodeMirror-scrollbar-filler, .CodeMirror-overlayscroll .CodeMirror-gutter-filler {\n  display: none;\n}\n\n.CodeMirror-overlayscroll-horizontal div, .CodeMirror-overlayscroll-vertical div {\n  position: absolute;\n  background: #bcd;\n  border-radius: 3px;\n}\n\n.CodeMirror-overlayscroll-horizontal, .CodeMirror-overlayscroll-vertical {\n  position: absolute;\n  z-index: 6;\n}\n\n.CodeMirror-overlayscroll-horizontal {\n  bottom: 0; left: 0;\n  height: 6px;\n}\n.CodeMirror-overlayscroll-horizontal div {\n  bottom: 0;\n  height: 100%;\n}\n\n.CodeMirror-overlayscroll-vertical {\n  right: 0; top: 0;\n  width: 6px;\n}\n.CodeMirror-overlayscroll-vertical div {\n  right: 0;\n  width: 100%;\n}\n", "", { version: 3, sources: ["webpack://./node_modules/codemirror/addon/scroll/simplescrollbars.css"], names: [], mappings: "AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,2BAA2B;EAC3B,sBAAsB;EACtB,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,SAAS,EAAE,OAAO;EAClB,WAAW;AACb;AACA;EACE,SAAS;EACT,YAAY;AACd;;AAEA;EACE,QAAQ,EAAE,MAAM;EAChB,UAAU;AACZ;AACA;EACE,QAAQ;EACR,WAAW;AACb;;;AAGA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,SAAS,EAAE,OAAO;EAClB,WAAW;AACb;AACA;EACE,SAAS;EACT,YAAY;AACd;;AAEA;EACE,QAAQ,EAAE,MAAM;EAChB,UAAU;AACZ;AACA;EACE,QAAQ;EACR,WAAW;AACb", sourcesContent: [".CodeMirror-simplescroll-horizontal div, .CodeMirror-simplescroll-vertical div {\n  position: absolute;\n  background: #ccc;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px solid #bbb;\n  border-radius: 2px;\n}\n\n.CodeMirror-simplescroll-horizontal, .CodeMirror-simplescroll-vertical {\n  position: absolute;\n  z-index: 6;\n  background: #eee;\n}\n\n.CodeMirror-simplescroll-horizontal {\n  bottom: 0; left: 0;\n  height: 8px;\n}\n.CodeMirror-simplescroll-horizontal div {\n  bottom: 0;\n  height: 100%;\n}\n\n.CodeMirror-simplescroll-vertical {\n  right: 0; top: 0;\n  width: 8px;\n}\n.CodeMirror-simplescroll-vertical div {\n  right: 0;\n  width: 100%;\n}\n\n\n.CodeMirror-overlayscroll .CodeMirror-scrollbar-filler, .CodeMirror-overlayscroll .CodeMirror-gutter-filler {\n  display: none;\n}\n\n.CodeMirror-overlayscroll-horizontal div, .CodeMirror-overlayscroll-vertical div {\n  position: absolute;\n  background: #bcd;\n  border-radius: 3px;\n}\n\n.CodeMirror-overlayscroll-horizontal, .CodeMirror-overlayscroll-vertical {\n  position: absolute;\n  z-index: 6;\n}\n\n.CodeMirror-overlayscroll-horizontal {\n  bottom: 0; left: 0;\n  height: 6px;\n}\n.CodeMirror-overlayscroll-horizontal div {\n  bottom: 0;\n  height: 100%;\n}\n\n.CodeMirror-overlayscroll-vertical {\n  right: 0; top: 0;\n  width: 6px;\n}\n.CodeMirror-overlayscroll-vertical div {\n  right: 0;\n  width: 100%;\n}\n"], sourceRoot: "" }]), t2.Z = a;
        }, 1240: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(7537), o = n2.n(r2), i = n2(3645), a = n2.n(i)()(o());
          a.push([e2.id, "/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor .CodeMirror-line::selection,\n.cm-fat-cursor .CodeMirror-line > span::selection, \n.cm-fat-cursor .CodeMirror-line > span > span::selection { background: transparent; }\n.cm-fat-cursor .CodeMirror-line::-moz-selection,\n.cm-fat-cursor .CodeMirror-line > span::-moz-selection,\n.cm-fat-cursor .CodeMirror-line > span > span::-moz-selection { background: transparent; }\n.cm-fat-cursor { caret-color: transparent; }\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n  z-index: 0;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n  outline: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n", "", { version: 3, sources: ["webpack://./node_modules/codemirror/lib/codemirror.css"], names: [], mappings: "AAAA,WAAW;;AAEX;EACE,gEAAgE;EAChE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,cAAc;AAChB;;AAEA,YAAY;;AAEZ;EACE,cAAc,EAAE,oCAAoC;AACtD;AACA;;EAEE,cAAc,EAAE,kCAAkC;AACpD;;AAEA;EACE,uBAAuB,EAAE,iDAAiD;AAC5E;;AAEA,WAAW;;AAEX;EACE,4BAA4B;EAC5B,yBAAyB;EACzB,mBAAmB;AACrB;AACA,yBAAyB;AACzB;EACE,oBAAoB;EACpB,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,mBAAmB;AACrB;;AAEA,2BAA2B,YAAY,EAAE;AACzC,kCAAkC,WAAW,EAAE;;AAE/C,WAAW;;AAEX;EACE,4BAA4B;EAC5B,kBAAkB;EAClB,QAAQ;AACV;AACA,6CAA6C;AAC7C;EACE,6BAA6B;AAC/B;AACA;EACE,WAAW;EACX,oBAAoB;EACpB,gBAAgB;AAClB;AACA;EACE,UAAU;AACZ;AACA;;2DAE2D,uBAAuB,EAAE;AACpF;;gEAEgE,uBAAuB,EAAE;AACzF,iBAAiB,wBAAwB,EAAE;AAC3C;EACE,IAAI;EACJ,MAAM,6BAA6B,EAAE;EACrC,MAAM;AACR;AACA;EACE,IAAI;EACJ,MAAM,6BAA6B,EAAE;EACrC,MAAM;AACR;AACA;EACE,IAAI;EACJ,MAAM,6BAA6B,EAAE;EACrC,MAAM;AACR;;AAEA,8DAA8D;AAC9D,0CAA0C;;AAE1C,UAAU,qBAAqB,EAAE,wBAAwB,EAAE;;AAE3D;EACE,kBAAkB;EAClB,OAAO,EAAE,QAAQ,EAAE,UAAU,EAAE,SAAS;EACxC,gBAAgB;AAClB;AACA;EACE,2BAA2B;EAC3B,MAAM,EAAE,SAAS;EACjB,kBAAkB;AACpB;;AAEA,kBAAkB;;AAElB,0BAA0B,WAAW,CAAC;AACtC,yBAAyB,WAAW,CAAC;AACrC,cAAc,WAAW,CAAC;AAC1B,cAAc,WAAW,CAAC;AAC1B,wBAAwB,iBAAiB,CAAC;AAC1C,QAAQ,kBAAkB,CAAC;AAC3B,UAAU,0BAA0B,CAAC;AACrC,mBAAmB,6BAA6B,CAAC;;AAEjD,2BAA2B,WAAW,CAAC;AACvC,wBAAwB,WAAW,CAAC;AACpC,0BAA0B,WAAW,CAAC;AACtC,uBAAuB,WAAW,CAAC;AACnC;;;4BAG4B;AAC5B,8BAA8B,WAAW,CAAC;AAC1C,sDAAsD,WAAW,CAAC;AAClE,2BAA2B,WAAW,CAAC;AACvC,0BAA0B,WAAW,CAAC;AACtC,4BAA4B,WAAW,CAAC;AACxC,wBAAwB,WAAW,CAAC;AACpC,6BAA6B,WAAW,CAAC;AACzC,2BAA2B,WAAW,CAAC;AACvC,2BAA2B,WAAW,CAAC;AACvC,uBAAuB,WAAW,CAAC;AACnC,6BAA6B,WAAW,CAAC;AACzC,sBAAsB,WAAW,CAAC;AAClC,wBAAwB,WAAW,CAAC;;AAEpC,yBAAyB,WAAW,CAAC;AACrC,iBAAiB,WAAW,CAAC;;AAE7B,wBAAwB,wBAAwB,EAAE;;AAElD,qCAAqC;;AAErC,gDAAgD,WAAW,CAAC;AAC5D,mDAAmD,WAAW,CAAC;AAC/D,0BAA0B,iCAAiC,EAAE;AAC7D,mCAAmC,mBAAmB,CAAC;;AAEvD,SAAS;;AAET;mDACmD;;AAEnD;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,2BAA2B,EAAE,4CAA4C;EACzE,wEAAwE;EACxE,wCAAwC;EACxC,oBAAoB,EAAE,mBAAmB;EACzC,oBAAoB;EACpB,YAAY;EACZ,aAAa,EAAE,mDAAmD;EAClE,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;;0BAE0B;AAC1B;EACE,kBAAkB;EAClB,UAAU;EACV,aAAa;EACb,aAAa;AACf;AACA;EACE,QAAQ,EAAE,MAAM;EAChB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,SAAS,EAAE,OAAO;EAClB,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,QAAQ,EAAE,SAAS;AACrB;AACA;EACE,OAAO,EAAE,SAAS;AACpB;;AAEA;EACE,kBAAkB,EAAE,OAAO,EAAE,MAAM;EACnC,gBAAgB;EAChB,UAAU;AACZ;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,kBAAkB;EAClB,UAAU;EACV,2BAA2B;EAC3B,uBAAuB;AACzB;AACA;EACE,kBAAkB;EAClB,MAAM,EAAE,SAAS;EACjB,UAAU;AACZ;AACA;EACE,kBAAkB;EAClB,eAAe;EACf,UAAU;AACZ;AACA,yCAAyC,8BAA8B;AACvE,8CAA8C,8BAA8B;;AAE5E;EACE,YAAY;EACZ,eAAe,EAAE,0CAA0C;AAC7D;AACA;;EAEE,+DAA+D;EAC/D,qBAAqB,EAAE,wBAAwB,EAAE,gBAAgB;EACjE,eAAe;EACf,uBAAuB;EACvB,oBAAoB;EACpB,kBAAkB;EAClB,SAAS;EACT,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,cAAc;EACd,UAAU;EACV,kBAAkB;EAClB,iBAAiB;EACjB,wCAAwC;EACxC,0CAA0C;EAC1C,kCAAkC;AACpC;AACA;;EAEE,qBAAqB;EACrB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,OAAO,EAAE,QAAQ,EAAE,MAAM,EAAE,SAAS;EACpC,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,cAAc,EAAE,yDAAyD;AAC3E;;AAEA,oBAAoB;;AAEpB,sBAAsB,cAAc,EAAE;;AAEtC;EACE,aAAa;AACf;;AAEA,iEAAiE;AACjE;;;;;EAKE,4BAA4B;EAC5B,uBAAuB;AACzB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,SAAS;EACT,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;AACA,0BAA0B,gBAAgB,EAAE;;AAE5C;EACE,kBAAkB;EAClB,kBAAkB;EAClB,UAAU;AACZ;AACA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA,uBAAuB,mBAAmB,EAAE;AAC5C,2CAA2C,mBAAmB,EAAE;AAChE,wBAAwB,iBAAiB,EAAE;AAC3C,6GAA6G,mBAAmB,EAAE;AAClI,4HAA4H,mBAAmB,EAAE;;AAEjJ;EACE,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA,4CAA4C;AAC5C,mBAAmB,mBAAmB,EAAE;;AAExC;EACE,kCAAkC;EAClC;IACE,kBAAkB;EACpB;AACF;;AAEA,oBAAoB;AACpB,0BAA0B,WAAW,EAAE;;AAEvC,iEAAiE;AACjE,+BAA+B,gBAAgB,EAAE", sourcesContent: ["/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  font-family: monospace;\n  height: 300px;\n  color: black;\n  direction: ltr;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  padding: 0 3px 0 5px;\n  min-width: 20px;\n  text-align: right;\n  color: #999;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror-cursor {\n  border-left: 1px solid black;\n  border-right: none;\n  width: 0;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.cm-fat-cursor .CodeMirror-cursor {\n  width: auto;\n  border: 0 !important;\n  background: #7e7;\n}\n.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n.cm-fat-cursor .CodeMirror-line::selection,\n.cm-fat-cursor .CodeMirror-line > span::selection, \n.cm-fat-cursor .CodeMirror-line > span > span::selection { background: transparent; }\n.cm-fat-cursor .CodeMirror-line::-moz-selection,\n.cm-fat-cursor .CodeMirror-line > span::-moz-selection,\n.cm-fat-cursor .CodeMirror-line > span > span::-moz-selection { background: transparent; }\n.cm-fat-cursor { caret-color: transparent; }\n@-moz-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@-webkit-keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n@keyframes blink {\n  0% {}\n  50% { background-color: transparent; }\n  100% {}\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\n.CodeMirror-overwrite .CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-rulers {\n  position: absolute;\n  left: 0; right: 0; top: -50px; bottom: 0;\n  overflow: hidden;\n}\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  top: 0; bottom: 0;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3, .cm-s-default .cm-type {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0b0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #a22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  position: relative;\n  overflow: hidden;\n  background: white;\n}\n\n.CodeMirror-scroll {\n  overflow: scroll !important; /* Things will break if this is overridden */\n  /* 50px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -50px; margin-right: -50px;\n  padding-bottom: 50px;\n  height: 100%;\n  outline: none; /* Prevent dragging from highlighting the element */\n  position: relative;\n  z-index: 0;\n}\n.CodeMirror-sizer {\n  position: relative;\n  border-right: 50px solid transparent;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  position: absolute;\n  z-index: 6;\n  display: none;\n  outline: none;\n}\n.CodeMirror-vscrollbar {\n  right: 0; top: 0;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  position: absolute; left: 0; top: 0;\n  min-height: 100%;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  white-space: normal;\n  height: 100%;\n  display: inline-block;\n  vertical-align: top;\n  margin-bottom: -50px;\n}\n.CodeMirror-gutter-wrapper {\n  position: absolute;\n  z-index: 4;\n  background: none !important;\n  border: none !important;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  position: absolute;\n  cursor: default;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper ::selection { background-color: transparent }\n.CodeMirror-gutter-wrapper ::-moz-selection { background-color: transparent }\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre.CodeMirror-line,\n.CodeMirror pre.CodeMirror-line-like {\n  /* Reset some styles that the rest of the page might have set */\n  -moz-border-radius: 0; -webkit-border-radius: 0; border-radius: 0;\n  border-width: 0;\n  background: transparent;\n  font-family: inherit;\n  font-size: inherit;\n  margin: 0;\n  white-space: pre;\n  word-wrap: normal;\n  line-height: inherit;\n  color: inherit;\n  z-index: 2;\n  position: relative;\n  overflow: visible;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-font-variant-ligatures: contextual;\n  font-variant-ligatures: contextual;\n}\n.CodeMirror-wrap pre.CodeMirror-line,\n.CodeMirror-wrap pre.CodeMirror-line-like {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  position: relative;\n  z-index: 2;\n  padding: 0.1px; /* Force widget margins to stay inside of the container */\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-rtl pre { direction: rtl; }\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  position: absolute;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  visibility: hidden;\n}\n\n.CodeMirror-cursor {\n  position: absolute;\n  pointer-events: none;\n}\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  visibility: hidden;\n  position: relative;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background-color: #ffa;\n  background-color: rgba(255, 255, 0, .4);\n}\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n"], sourceRoot: "" }]), t2.Z = a;
        }, 5237: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(7537), o = n2.n(r2), i = n2(3645), a = n2.n(i)()(o());
          a.push([e2.id, "/**\n    Name: IntelliJ IDEA darcula theme\n    From IntelliJ IDEA by JetBrains\n */\n\n.cm-s-darcula  { font-family: Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, serif;}\n.cm-s-darcula.CodeMirror { background: #2B2B2B; color: #A9B7C6; }\n\n.cm-s-darcula span.cm-meta { color: #BBB529; }\n.cm-s-darcula span.cm-number { color: #6897BB; }\n.cm-s-darcula span.cm-keyword { color: #CC7832; line-height: 1em; font-weight: bold; }\n.cm-s-darcula span.cm-def { color: #A9B7C6; font-style: italic; }\n.cm-s-darcula span.cm-variable { color: #A9B7C6; }\n.cm-s-darcula span.cm-variable-2 { color: #A9B7C6; }\n.cm-s-darcula span.cm-variable-3 { color: #9876AA; }\n.cm-s-darcula span.cm-type { color: #AABBCC; font-weight: bold; }\n.cm-s-darcula span.cm-property { color: #FFC66D; }\n.cm-s-darcula span.cm-operator { color: #A9B7C6; }\n.cm-s-darcula span.cm-string { color: #6A8759; }\n.cm-s-darcula span.cm-string-2 { color: #6A8759; }\n.cm-s-darcula span.cm-comment { color: #61A151; font-style: italic; }\n.cm-s-darcula span.cm-link { color: #CC7832; }\n.cm-s-darcula span.cm-atom { color: #CC7832; }\n.cm-s-darcula span.cm-error { color: #BC3F3C; }\n.cm-s-darcula span.cm-tag { color: #629755; font-weight: bold; font-style: italic; text-decoration: underline; }\n.cm-s-darcula span.cm-attribute { color: #6897bb; }\n.cm-s-darcula span.cm-qualifier { color: #6A8759; }\n.cm-s-darcula span.cm-bracket { color: #A9B7C6; }\n.cm-s-darcula span.cm-builtin { color: #FF9E59; }\n.cm-s-darcula span.cm-special { color: #FF9E59; }\n.cm-s-darcula span.cm-matchhighlight { color: #FFFFFF; background-color: rgba(50, 89, 48, .7); font-weight: normal;}\n.cm-s-darcula span.cm-searching { color: #FFFFFF; background-color: rgba(61, 115, 59, .7); font-weight: normal;}\n\n.cm-s-darcula .CodeMirror-cursor { border-left: 1px solid #A9B7C6; }\n.cm-s-darcula .CodeMirror-activeline-background { background: #323232; }\n.cm-s-darcula .CodeMirror-gutters { background: #313335; border-right: 1px solid #313335; }\n.cm-s-darcula .CodeMirror-guttermarker { color: #FFEE80; }\n.cm-s-darcula .CodeMirror-guttermarker-subtle { color: #D0D0D0; }\n.cm-s-darcula .CodeMirrir-linenumber { color: #606366; }\n.cm-s-darcula .CodeMirror-matchingbracket { background-color: #3B514D; color: #FFEF28 !important; font-weight: bold; }\n\n.cm-s-darcula div.CodeMirror-selected { background: #214283; }\n\n.CodeMirror-hints.darcula {\n  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;\n  color: #9C9E9E;\n  background-color: #3B3E3F !important;\n}\n\n.CodeMirror-hints.darcula .CodeMirror-hint-active {\n  background-color: #494D4E !important;\n  color: #9C9E9E !important;\n}\n", "", { version: 3, sources: ["webpack://./node_modules/codemirror/theme/darcula.css"], names: [], mappings: "AAAA;;;EAGE;;AAEF,iBAAiB,0JAA0J,CAAC;AAC5K,2BAA2B,mBAAmB,EAAE,cAAc,EAAE;;AAEhE,6BAA6B,cAAc,EAAE;AAC7C,+BAA+B,cAAc,EAAE;AAC/C,gCAAgC,cAAc,EAAE,gBAAgB,EAAE,iBAAiB,EAAE;AACrF,4BAA4B,cAAc,EAAE,kBAAkB,EAAE;AAChE,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,cAAc,EAAE;AACnD,mCAAmC,cAAc,EAAE;AACnD,6BAA6B,cAAc,EAAE,iBAAiB,EAAE;AAChE,iCAAiC,cAAc,EAAE;AACjD,iCAAiC,cAAc,EAAE;AACjD,+BAA+B,cAAc,EAAE;AAC/C,iCAAiC,cAAc,EAAE;AACjD,gCAAgC,cAAc,EAAE,kBAAkB,EAAE;AACpE,6BAA6B,cAAc,EAAE;AAC7C,6BAA6B,cAAc,EAAE;AAC7C,8BAA8B,cAAc,EAAE;AAC9C,4BAA4B,cAAc,EAAE,iBAAiB,EAAE,kBAAkB,EAAE,0BAA0B,EAAE;AAC/G,kCAAkC,cAAc,EAAE;AAClD,kCAAkC,cAAc,EAAE;AAClD,gCAAgC,cAAc,EAAE;AAChD,gCAAgC,cAAc,EAAE;AAChD,gCAAgC,cAAc,EAAE;AAChD,uCAAuC,cAAc,EAAE,sCAAsC,EAAE,mBAAmB,CAAC;AACnH,kCAAkC,cAAc,EAAE,uCAAuC,EAAE,mBAAmB,CAAC;;AAE/G,mCAAmC,8BAA8B,EAAE;AACnE,kDAAkD,mBAAmB,EAAE;AACvE,oCAAoC,mBAAmB,EAAE,+BAA+B,EAAE;AAC1F,yCAAyC,cAAc,EAAE;AACzD,gDAAgD,cAAc,EAAE;AAChE,uCAAuC,cAAc,EAAE;AACvD,4CAA4C,yBAAyB,EAAE,yBAAyB,EAAE,iBAAiB,EAAE;;AAErH,wCAAwC,mBAAmB,EAAE;;AAE7D;EACE,8DAA8D;EAC9D,cAAc;EACd,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B", sourcesContent: ["/**\n    Name: IntelliJ IDEA darcula theme\n    From IntelliJ IDEA by JetBrains\n */\n\n.cm-s-darcula  { font-family: Consolas, Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace, serif;}\n.cm-s-darcula.CodeMirror { background: #2B2B2B; color: #A9B7C6; }\n\n.cm-s-darcula span.cm-meta { color: #BBB529; }\n.cm-s-darcula span.cm-number { color: #6897BB; }\n.cm-s-darcula span.cm-keyword { color: #CC7832; line-height: 1em; font-weight: bold; }\n.cm-s-darcula span.cm-def { color: #A9B7C6; font-style: italic; }\n.cm-s-darcula span.cm-variable { color: #A9B7C6; }\n.cm-s-darcula span.cm-variable-2 { color: #A9B7C6; }\n.cm-s-darcula span.cm-variable-3 { color: #9876AA; }\n.cm-s-darcula span.cm-type { color: #AABBCC; font-weight: bold; }\n.cm-s-darcula span.cm-property { color: #FFC66D; }\n.cm-s-darcula span.cm-operator { color: #A9B7C6; }\n.cm-s-darcula span.cm-string { color: #6A8759; }\n.cm-s-darcula span.cm-string-2 { color: #6A8759; }\n.cm-s-darcula span.cm-comment { color: #61A151; font-style: italic; }\n.cm-s-darcula span.cm-link { color: #CC7832; }\n.cm-s-darcula span.cm-atom { color: #CC7832; }\n.cm-s-darcula span.cm-error { color: #BC3F3C; }\n.cm-s-darcula span.cm-tag { color: #629755; font-weight: bold; font-style: italic; text-decoration: underline; }\n.cm-s-darcula span.cm-attribute { color: #6897bb; }\n.cm-s-darcula span.cm-qualifier { color: #6A8759; }\n.cm-s-darcula span.cm-bracket { color: #A9B7C6; }\n.cm-s-darcula span.cm-builtin { color: #FF9E59; }\n.cm-s-darcula span.cm-special { color: #FF9E59; }\n.cm-s-darcula span.cm-matchhighlight { color: #FFFFFF; background-color: rgba(50, 89, 48, .7); font-weight: normal;}\n.cm-s-darcula span.cm-searching { color: #FFFFFF; background-color: rgba(61, 115, 59, .7); font-weight: normal;}\n\n.cm-s-darcula .CodeMirror-cursor { border-left: 1px solid #A9B7C6; }\n.cm-s-darcula .CodeMirror-activeline-background { background: #323232; }\n.cm-s-darcula .CodeMirror-gutters { background: #313335; border-right: 1px solid #313335; }\n.cm-s-darcula .CodeMirror-guttermarker { color: #FFEE80; }\n.cm-s-darcula .CodeMirror-guttermarker-subtle { color: #D0D0D0; }\n.cm-s-darcula .CodeMirrir-linenumber { color: #606366; }\n.cm-s-darcula .CodeMirror-matchingbracket { background-color: #3B514D; color: #FFEF28 !important; font-weight: bold; }\n\n.cm-s-darcula div.CodeMirror-selected { background: #214283; }\n\n.CodeMirror-hints.darcula {\n  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;\n  color: #9C9E9E;\n  background-color: #3B3E3F !important;\n}\n\n.CodeMirror-hints.darcula .CodeMirror-hint-active {\n  background-color: #494D4E !important;\n  color: #9C9E9E !important;\n}\n"], sourceRoot: "" }]), t2.Z = a;
        }, 4966: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(7537), o = n2.n(r2), i = n2(3645), a = n2.n(i)()(o());
          a.push([e2.id, "/**\n    Name:       IDEA default theme\n    From IntelliJ IDEA by JetBrains\n */\n\n.cm-s-idea span.cm-meta { color: #808000; }\n.cm-s-idea span.cm-number { color: #0000FF; }\n.cm-s-idea span.cm-keyword { line-height: 1em; font-weight: bold; color: #000080; }\n.cm-s-idea span.cm-atom { font-weight: bold; color: #000080; }\n.cm-s-idea span.cm-def { color: #000000; }\n.cm-s-idea span.cm-variable { color: black; }\n.cm-s-idea span.cm-variable-2 { color: black; }\n.cm-s-idea span.cm-variable-3, .cm-s-idea span.cm-type { color: black; }\n.cm-s-idea span.cm-property { color: black; }\n.cm-s-idea span.cm-operator { color: black; }\n.cm-s-idea span.cm-comment { color: #808080; }\n.cm-s-idea span.cm-string { color: #008000; }\n.cm-s-idea span.cm-string-2 { color: #008000; }\n.cm-s-idea span.cm-qualifier { color: #555; }\n.cm-s-idea span.cm-error { color: #FF0000; }\n.cm-s-idea span.cm-attribute { color: #0000FF; }\n.cm-s-idea span.cm-tag { color: #000080; }\n.cm-s-idea span.cm-link { color: #0000FF; }\n.cm-s-idea .CodeMirror-activeline-background { background: #FFFAE3; }\n\n.cm-s-idea span.cm-builtin { color: #30a; }\n.cm-s-idea span.cm-bracket { color: #cc7; }\n.cm-s-idea  { font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;}\n\n\n.cm-s-idea .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n\n.CodeMirror-hints.idea {\n  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;\n  color: #616569;\n  background-color: #ebf3fd !important;\n}\n\n.CodeMirror-hints.idea .CodeMirror-hint-active {\n  background-color: #a2b8c9 !important;\n  color: #5c6065 !important;\n}", "", { version: 3, sources: ["webpack://./node_modules/codemirror/theme/idea.css"], names: [], mappings: "AAAA;;;EAGE;;AAEF,0BAA0B,cAAc,EAAE;AAC1C,4BAA4B,cAAc,EAAE;AAC5C,6BAA6B,gBAAgB,EAAE,iBAAiB,EAAE,cAAc,EAAE;AAClF,0BAA0B,iBAAiB,EAAE,cAAc,EAAE;AAC7D,yBAAyB,cAAc,EAAE;AACzC,8BAA8B,YAAY,EAAE;AAC5C,gCAAgC,YAAY,EAAE;AAC9C,yDAAyD,YAAY,EAAE;AACvE,8BAA8B,YAAY,EAAE;AAC5C,8BAA8B,YAAY,EAAE;AAC5C,6BAA6B,cAAc,EAAE;AAC7C,4BAA4B,cAAc,EAAE;AAC5C,8BAA8B,cAAc,EAAE;AAC9C,+BAA+B,WAAW,EAAE;AAC5C,2BAA2B,cAAc,EAAE;AAC3C,+BAA+B,cAAc,EAAE;AAC/C,yBAAyB,cAAc,EAAE;AACzC,0BAA0B,cAAc,EAAE;AAC1C,+CAA+C,mBAAmB,EAAE;;AAEpE,6BAA6B,WAAW,EAAE;AAC1C,6BAA6B,WAAW,EAAE;AAC1C,cAAc,gJAAgJ,CAAC;;;AAG/J,yCAAyC,sBAAsB,EAAE,sBAAsB,EAAE;;AAEzF;EACE,8DAA8D;EAC9D,cAAc;EACd,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,yBAAyB;AAC3B", sourcesContent: ["/**\n    Name:       IDEA default theme\n    From IntelliJ IDEA by JetBrains\n */\n\n.cm-s-idea span.cm-meta { color: #808000; }\n.cm-s-idea span.cm-number { color: #0000FF; }\n.cm-s-idea span.cm-keyword { line-height: 1em; font-weight: bold; color: #000080; }\n.cm-s-idea span.cm-atom { font-weight: bold; color: #000080; }\n.cm-s-idea span.cm-def { color: #000000; }\n.cm-s-idea span.cm-variable { color: black; }\n.cm-s-idea span.cm-variable-2 { color: black; }\n.cm-s-idea span.cm-variable-3, .cm-s-idea span.cm-type { color: black; }\n.cm-s-idea span.cm-property { color: black; }\n.cm-s-idea span.cm-operator { color: black; }\n.cm-s-idea span.cm-comment { color: #808080; }\n.cm-s-idea span.cm-string { color: #008000; }\n.cm-s-idea span.cm-string-2 { color: #008000; }\n.cm-s-idea span.cm-qualifier { color: #555; }\n.cm-s-idea span.cm-error { color: #FF0000; }\n.cm-s-idea span.cm-attribute { color: #0000FF; }\n.cm-s-idea span.cm-tag { color: #000080; }\n.cm-s-idea span.cm-link { color: #0000FF; }\n.cm-s-idea .CodeMirror-activeline-background { background: #FFFAE3; }\n\n.cm-s-idea span.cm-builtin { color: #30a; }\n.cm-s-idea span.cm-bracket { color: #cc7; }\n.cm-s-idea  { font-family: Consolas, Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;}\n\n\n.cm-s-idea .CodeMirror-matchingbracket { outline:1px solid grey; color:black !important; }\n\n.CodeMirror-hints.idea {\n  font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;\n  color: #616569;\n  background-color: #ebf3fd !important;\n}\n\n.CodeMirror-hints.idea .CodeMirror-hint-active {\n  background-color: #a2b8c9 !important;\n  color: #5c6065 !important;\n}"], sourceRoot: "" }]), t2.Z = a;
        }, 7997: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(7537), o = n2.n(r2), i = n2(3645), a = n2.n(i)()(o());
          a.push([e2.id, ".k2js-iframe{display:none}iframe{border:none;background:#fff;width:100%;z-index:10}", "", { version: 3, sources: ["webpack://./src/js-executor/index.scss"], names: [], mappings: "AAAA,aACE,YAAA,CAEF,OACE,WAAA,CACA,eAAA,CACA,UAAA,CACA,UAAA", sourcesContent: [".k2js-iframe {\n  display: none;\n}\niframe {\n  border: none;\n  background: white;\n  width: 100%;\n  z-index: 10\n}\n"], sourceRoot: "" }]), t2.Z = a;
        }, 8099: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(7537), o = n2.n(r2), i = n2(3645), a = n2.n(i), s = n2(1240), l = n2(4966), c = n2(5237), u = n2(3252), f = n2(1667), d = n2.n(f), p = new URL(n2(6232), n2.b), h = new URL(n2(7395), n2.b), m = new URL(n2(4929), n2.b), g = new URL(n2(3413), n2.b), v = new URL(n2(8529), n2.b), A = new URL(n2(2314), n2.b), y = new URL(n2(9356), n2.b), b = new URL(n2(7351), n2.b), C = new URL(n2(9054), n2.b), x = new URL(n2(4500), n2.b), w = new URL(n2(57), n2.b), k = new URL(n2(7190), n2.b), E = new URL(n2(1672), n2.b), _ = new URL(n2(3053), n2.b), S = a()(o());
          S.i(s.Z), S.i(l.Z), S.i(c.Z), S.i(u.Z);
          var M = d()(p), B = d()(h), O = d()(m), T = d()(g), L = d()(v), F = d()(A), P = d()(y), N = d()(b), j = d()(C), I = d()(x), D = d()(w), z = d()(k), R = d()(E), W = d()(_);
          S.push([e2.id, ".executable-fragment-wrapper{margin-bottom:35px;position:relative}.executable-fragment-wrapper_gutter .CodeMirror{overflow:hidden}.executable-fragment-wrapper__shorter,.executable-fragment-wrapper__shorter:hover,.executable-fragment-wrapper__shorter:active{box-shadow:0 0 0 rgba(0,0,0,0);outline:0 none rgba(0,0,0,0);text-shadow:0 0 0 rgba(0,0,0,0);border:1px solid #eaeaec;background:#fff url(" + M + ") center center no-repeat;border-radius:10px;position:absolute;height:19px;width:31px;left:50%;transform:translate(-50%, -50%);z-index:10;cursor:pointer;text-indent:-99999px}.theme-darcula-wrapper .executable-fragment-wrapper__shorter,.theme-darcula-wrapper .executable-fragment-wrapper__shorter:hover,.theme-darcula-wrapper .executable-fragment-wrapper__shorter:active{background-color:#2b2b2b;border-color:#fff}.executable-fragment{border:1px solid #eaeaec;border-bottom-width:0}.executable-fragment.darcula{border:1px solid gray;border-bottom-width:0;background-color:#313336}.hidden-dependency{display:none}.CodeMirror{height:auto;font-size:12px}.CodeMirror pre{line-height:16.8px;margin-bottom:0 !important}.CodeMirror .CodeMirror-overlayscroll-horizontal div,.CodeMirror .CodeMirror-overlayscroll-vertical div{display:none}.CodeMirror:hover .CodeMirror-overlayscroll-horizontal div,.CodeMirror:hover .CodeMirror-overlayscroll-vertical div{display:block;background:#afb1b3}.CodeMirror-lines{padding:0;margin:12px 0}.CodeMirror-gutter{height:auto}.CodeMirror{line-height:1.4;font-family:menlo,consolas,monospace;font-size:12px}.CodeMirror-linenumber{min-width:0;text-align:center}.CodeMirror-linebackground.unmodifiable-line{background-color:#eaeaec}.CodeMirror-linebackground.unmodifiable-line-dark{background-color:#3c3f43}.markPlaceholder{border-top:1px solid #167dff;border-bottom:1px solid #167dff}.markPlaceholder-start{border-left:1px solid #167dff}.markPlaceholder-end{border-right:1px solid #167dff}.run-button{position:absolute;z-index:10;right:5px;top:5px;height:20px;width:16px;cursor:pointer;background-size:cover;background:url(" + B + ') no-repeat}.run-button._disabled{cursor:default;opacity:.5}.loader{position:relative;width:15px;height:15px;margin:0 auto;border-radius:50%;text-indent:-9999em;color:#161616;font-size:8px;opacity:.7;animation:loader 1s infinite ease-in-out;animation-delay:.16s}.loader.darcula{opacity:1;color:dimgray}.loader::before{left:-3.5em;animation-delay:0s;position:absolute;width:15px;border-radius:50%;height:15px;content:"";animation:loader 1s infinite ease-in-out}.loader::after{left:3.5em;animation-delay:.32s;position:absolute;border-radius:50%;width:15px;height:15px;content:"";animation:loader 1s infinite ease-in-out}@keyframes loader{100%{box-shadow:0 2.5em 0 -1.3em}80%{box-shadow:0 2.5em 0 -1.3em}0%{box-shadow:0 2.5em 0 -1.3em}40%{box-shadow:0 2.5em 0 0}}.cm__ERROR{color:#ec5424 !important}.cm__IMPORT{text-decoration:underline;padding-bottom:2px}.errors-and-warnings-gutter{width:16px}.ERRORgutter{height:13px;width:13px;margin-top:2px;margin-left:2px;background:url("https://try.kotlinlang.org/static/images/icons_all_sprite.svg") no-repeat -150px -500px}.WARNINGgutter{height:13px;width:13px;margin-top:2px;margin-left:2px;background:url("https://try.kotlinlang.org/static/images/icons_all_sprite.svg") no-repeat -150px -600px}.cm__red_wavy_line{background:url("https://try.kotlinlang.org/static/images/wavyline-red.gif") repeat-x 100% 100%;padding-bottom:2px}.cm__green_wavy_line{background:url("https://try.kotlinlang.org/static/images/wavyline-green.gif") repeat-x 100% 100%;padding-bottom:2px}.js-code-output-executor{border-top:1px solid #eaeaec;position:relative}.js-code-output-executor.darcula{border-top:1px solid gray}.output-wrapper{flex-direction:column;display:flex;border-bottom:1px solid #eaeaec;min-height:60px;font-size:14px;background-color:#fff}.output-wrapper.darcula{background-color:#313336;color:#afb1b3}.code-output{flex-grow:1;font-family:"Liberation Mono",Consolas,Menlo,Courier,monospace;overflow:auto;padding-left:10px;padding-top:15px}.standard-output.darcula{color:#afb1b3}.error-output{white-space:pre-wrap;color:#ec5424;min-height:1.4em;margin:0;vertical-align:top}.error-output.darcula{color:#ec5424}.standard-output{white-space:pre;color:#000;min-height:1.4em;margin:0;vertical-align:top}.test-passed{white-space:pre;color:#4dbb5f;min-height:1.4em;vertical-align:top}.console-close{position:absolute;right:0;width:16px;height:16px;background:#afb1b3 url(' + O + ") no-repeat}.console-close.darcula{background:url(" + O + ")}.console-close:hover{background-color:dimgray}.console-close.darcula:hover{background-color:#ec5424}.test-fail,.test-error{color:#ec5424;min-height:1.4em;vertical-align:top}.console-block{display:flex}.console-icon{margin-top:2px;padding-right:20px;width:15px;height:15px}.console-icon.attention{background:url(" + T + ") no-repeat}.console-icon.passed{background:url(" + L + ") no-repeat}.console-icon.fail{background:url(" + F + ") no-repeat}.console-icon.error{background:url(" + F + ") no-repeat}.test-time{float:right;font-size:10px;color:#afb1b3;margin-right:20px;margin-top:-14px}.stacktrace-element{margin-left:20px}.stacktrace-element .stacktrace-link{color:#167dff;cursor:pointer}.stacktrace-element .stacktrace-link:hover{text-decoration:underline}.CodeMirror-foldgutter{position:absolute;width:100%}.CodeMirror-foldgutter-folded{width:100%;background:#fff}.fold-button{position:absolute;height:19px;width:31px;top:0;left:50%;transform:translate(-50%, -50%);z-index:10;cursor:pointer;background:rgba(0,0,0,0) url(" + P + ") no-repeat}.fold-button._hover{background-image:url(" + N + ")}.fold-button.darcula{background:url(" + j + ") no-repeat}.fold-button.darcula._hover{background-image:url(" + I + ")}._unfolded .fold-button{background-image:url(" + D + ")}._unfolded .fold-button._hover{background-image:url(" + z + ")}._unfolded .fold-button.darcula{background:url(" + R + ") no-repeat}._unfolded .fold-button.darcula._hover{background-image:url(" + W + ')}.code-area{position:relative}.compiler-info{display:flex;justify-content:flex-end;padding-top:5px;position:absolute;right:0;left:0}.compiler-info,.compiler-info a{font-size:10px;color:#afb1b3}.compiler-info span{margin-left:15px}.compiler-info_crosslink{justify-content:space-between}.compiler-info__open-editor{flex:1 1 0}.compiler-info__target,.compiler-info__version{white-space:nowrap}.CodeMirror-hints{padding-left:0 !important;border:1px solid #afb1b3;border-radius:4px;list-style:none;position:absolute;background-color:#f7f7f7;overflow-y:hidden;z-index:10;max-height:20em;box-shadow:2px 3px 5px rgba(0,0,0,.2)}.CodeMirror-hint{cursor:pointer;display:flex;align-items:center;padding-right:5px;padding-left:5px}li.CodeMirror-hint-active{background-color:#d8d8d8;color:#000}li.CodeMirror-hint-active .name{overflow:auto;white-space:normal}.CodeMirror-hint .name{margin-right:20px;max-width:60ch;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}li.CodeMirror-hint-active .tail{overflow:auto;white-space:normal}.CodeMirror-hint .tail{margin-left:auto;margin-right:5px;max-width:30ch;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.CodeMirror-hint .icon{height:16px;width:16px;margin-right:5px}.icon{background:url("https://try.kotlinlang.org/static/images/icons_all_sprite.svg")}.icon.class{background:url("https://try.kotlinlang.org/static/images/completion_class.svg")}.icon.package{background:url("https://try.kotlinlang.org/static/images/completion_package.svg")}.icon.method{background:url("https://try.kotlinlang.org/static/images/completion_method.svg")}.icon.genericValue{background:url("https://try.kotlinlang.org/static/images/completion_generic.svg")}.icon.property{background:url("https://try.kotlinlang.org/static/images/completion_property.svg")}div[label]:hover:after{content:attr(label);padding:.25rem .5rem;white-space:pre;margin-top:-1rem;display:inline-flex;background:#feffde;border-radius:3px;margin-left:1rem;color:#000;border:1px solid #3c3f43}', "", { version: 3, sources: ["webpack://./src/styles.scss"], names: [], mappings: "AAyBA,6BACE,kBAAA,CACA,iBAAA,CAGE,gDACE,eAAA,CAMJ,+HACE,8BAAA,CACA,4BAAA,CACA,+BAAA,CACA,wBAAA,CACA,+EAAA,CACA,kBAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CACA,QAAA,CACA,+BAAA,CACA,UAAA,CACA,cAAA,CACA,oBAAA,CAEA,oMACE,wBA5CqB,CA6CrB,iBAAA,CAKN,qBACE,wBAAA,CACA,qBAAA,CAGF,6BACE,qBAAA,CACA,qBAAA,CACA,wBAzDsB,CA4DxB,mBACE,YAAA,CAGF,YACE,WAAA,CACA,cAAA,CAEA,gBACE,kBAAA,CACA,0BAAA,CAGF,wGACE,YAAA,CAIA,oHACE,aAAA,CACA,kBAzEY,CA8ElB,kBACE,SAAA,CACA,aAAA,CAGF,mBACE,WAAA,CAGF,YACE,eAAA,CACA,oCAAA,CACA,cAAA,CAGF,uBACE,WAAA,CACA,iBAAA,CAGF,6CACE,wBA/FgB,CAkGlB,kDACE,wBArGc,CAwGhB,iBACE,4BAAA,CACA,+BAAA,CAGF,uBACE,6BAAA,CAGF,qBACE,8BAAA,CAGF,YACE,iBAAA,CACA,UAAA,CACA,SAAA,CACA,OAAA,CACA,WAAA,CACA,UAAA,CACA,cAAA,CACA,qBAAA,CACA,4DAAA,CAEA,sBACE,cAAA,CACA,UAAA,CAIJ,QACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,aAAA,CACA,iBAAA,CACA,mBAAA,CACA,aAAA,CACA,aAAA,CACA,UAAA,CACA,wCAAA,CACA,oBAAA,CAGF,gBACE,SAAA,CACA,aAAA,CAGF,gBACE,WAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CACA,wCAAA,CAGF,eACE,UAAA,CACA,oBAAA,CACA,iBAAA,CACA,iBAAA,CACA,UAAA,CACA,WAAA,CACA,UAAA,CACA,wCAAA,CAGF,kBACE,KACE,2BAAA,CAEF,IACE,2BAAA,CAEF,GACE,2BAAA,CAEF,IACE,sBAAA,CAAA,CAIJ,WACE,wBAAA,CAGF,YACE,yBAAA,CACA,kBAAA,CAGF,4BACE,UAAA,CAGF,aACE,WAAA,CACA,UAAA,CACA,cAAA,CACA,eAAA,CACA,uGAAA,CAGF,eACE,WAAA,CACA,UAAA,CACA,cAAA,CACA,eAAA,CACA,uGAAA,CAGF,mBACE,8FAAA,CACA,kBAAA,CAGF,qBACE,gGAAA,CACA,kBAAA,CAGF,yBACE,4BAAA,CACA,iBAAA,CAGF,iCACE,yBAAA,CAGF,gBACE,qBAAA,CACA,YAAA,CACA,+BAAA,CACA,eAAA,CACA,cAAA,CACA,qBAAA,CAGF,wBACE,wBAjQsB,CAkQtB,aA3PgB,CA8PlB,aACE,WAAA,CACA,8DA7QiB,CA8QjB,aAAA,CACA,iBAAA,CACA,gBAAA,CAGF,yBACE,aAvQgB,CA0QlB,cACE,oBAAA,CACA,aA9QgB,CA+QhB,gBAAA,CACA,QAAA,CACA,kBAAA,CAGF,sBACE,aArRgB,CAwRlB,iBACE,eAAA,CACA,UAAA,CACA,gBAAA,CACA,QAAA,CACA,kBAAA,CAGF,aACE,eAAA,CACA,aAjSiB,CAkSjB,gBAAA,CACA,kBAAA,CAGF,eACE,iBAAA,CACA,OAAA,CACA,UAAA,CACA,WAAA,CACA,oEAAA,CAGF,uBACE,kDAAA,CAGF,qBACE,wBAjTc,CAoThB,6BACE,wBAxTgB,CA2TlB,uBACE,aA5TgB,CA6ThB,gBAAA,CACA,kBAAA,CAGF,eACE,YAAA,CAGF,cACE,cAAA,CACA,kBAAA,CACA,UAAA,CACA,WAAA,CAGF,wBACE,4DAAA,CAGF,qBACE,4DAAA,CAGF,mBACE,4DAAA,CAGF,oBACE,4DAAA,CAGF,WACE,WAAA,CACA,cAAA,CACA,aA7VgB,CA8VhB,iBAAA,CACA,gBAAA,CAGF,oBACE,gBAAA,CAEA,qCACE,aAjWa,CAkWb,cAAA,CACA,2CACE,yBAAA,CAKN,uBACE,iBAAA,CACA,UAAA,CAGF,8BACE,UAAA,CACA,eAAA,CAGF,aACE,iBAAA,CACA,WAAA,CACA,UAAA,CACA,KAAA,CACA,QAAA,CACA,+BAAA,CACA,UAAA,CACA,cAAA,CACA,0EAAA,CACA,oBACE,wDAAA,CAIJ,qBACE,4DAAA,CACA,4BACE,wDAAA,CAKF,wBACE,yDAAA,CACA,+BACE,yDAAA,CAGJ,gCACE,6DAAA,CACA,uCACE,yDAAA,CAKN,WACE,iBAAA,CAGF,eAME,YAAA,CACA,wBAAA,CAEA,eAAA,CAEA,iBAAA,CACA,OAAA,CACA,MAAA,CAZA,gCACE,cAAA,CACA,aApac,CAgbhB,oBACE,gBAAA,CAGF,yBACE,6BAAA,CAGF,4BACE,UAAA,CAGF,+CACE,kBAAA,CAIJ,kBACE,yBAAA,CACA,wBAAA,CACA,iBAAA,CACA,eAAA,CACA,iBAAA,CACA,wBAAA,CACA,iBAAA,CACA,UAAA,CACA,eAAA,CACA,qCAAA,CAGF,iBACE,cAAA,CACA,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,gBAAA,CAGF,0BACE,wBAAA,CACA,UAAA,CAGF,gCACE,aAAA,CACA,kBAAA,CAGF,uBACE,iBAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAGF,gCACE,aAAA,CACA,kBAAA,CAGF,uBACE,gBAAA,CACA,gBAAA,CACA,cAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAGF,uBACE,WAAA,CACA,UAAA,CACA,gBAAA,CAGF,MACE,+EAAA,CAGF,YACE,+EAAA,CAGF,cACE,iFAAA,CAGF,aACE,gFAAA,CAGF,mBACE,iFAAA,CAGF,eACE,kFAAA,CAGF,uBACE,mBAAA,CACA,oBAAA,CACA,eAAA,CACA,gBAAA,CACA,mBAAA,CACA,kBAvhBc,CAwhBd,iBAAA,CACA,gBAAA,CACA,UAAA,CACA,wBAAA", sourcesContent: [`@import "~codemirror/lib/codemirror.css";
@import "~codemirror/theme/idea.css";
@import "~codemirror/theme/darcula.css";
@import "~codemirror/addon/scroll/simplescrollbars.css";

$font-family-mono: 'Liberation Mono', Consolas, Menlo, Courier, monospace;

/**
 Darcula theme variables
 */
$darcula-background-color: #2B2B2B;
$darcula-console-color: #313336;

/**
 WebTeam UI colors
 */
$wt-color-tomato: #ec5424;
$wt-color-seaweed: #4dbb5f;
$wt-color-silver: #afb1b3;
$wt-color-dove: #696969;
$wt-color-code: #3c3f43;
$warning-color: rgb(254, 255, 222);
$wt-color-athens: #eaeaec;
$wt-color-azure: #167dff;

.executable-fragment-wrapper {
  margin-bottom: 35px;
  position: relative;

  &_gutter {
    .CodeMirror {
      overflow: hidden;
    }
  }
}

.executable-fragment-wrapper__shorter {
  &, &:hover, &:active {
    box-shadow: 0 0 0 transparent;
    outline: 0 none transparent;
    text-shadow: 0 0 0 transparent;
    border: 1px solid #eaeaec;
    background: #fff url("img/shorter.svg") center center no-repeat;
    border-radius: 10px;
    position: absolute;
    height: 19px;
    width: 31px;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    cursor: pointer;
    text-indent: -99999px;

    .theme-darcula-wrapper & {
      background-color: $darcula-background-color;
      border-color: #fff;
    }
  }
}

.executable-fragment {
  border: 1px solid $wt-color-athens;
  border-bottom-width: 0;
}

.executable-fragment.darcula {
  border: 1px solid gray;
  border-bottom-width: 0;
  background-color: $darcula-console-color;
}

.hidden-dependency {
  display: none;
}

.CodeMirror {
  height: auto;
  font-size: 12px;

  pre {
    line-height: 16.8px;
    margin-bottom: 0 !important;
  }

  .CodeMirror-overlayscroll-horizontal div, .CodeMirror-overlayscroll-vertical div {
    display: none;
  }

  &:hover {
    .CodeMirror-overlayscroll-horizontal div, .CodeMirror-overlayscroll-vertical div {
      display: block;
      background: $wt-color-silver;
    }
  }
}

.CodeMirror-lines {
  padding: 0;
  margin: 12px 0;
}

.CodeMirror-gutter {
  height: auto;
}

.CodeMirror {
  line-height: 1.4;
  font-family: menlo, consolas, monospace;
  font-size: 12px;
}

.CodeMirror-linenumber {
  min-width: 0;
  text-align: center;
}

.CodeMirror-linebackground.unmodifiable-line {
  background-color: $wt-color-athens;
}

.CodeMirror-linebackground.unmodifiable-line-dark {
  background-color: $wt-color-code;
}

.markPlaceholder {
  border-top: 1px solid $wt-color-azure;
  border-bottom: 1px solid $wt-color-azure;
}

.markPlaceholder-start {
  border-left: 1px solid $wt-color-azure;
}

.markPlaceholder-end {
  border-right: 1px solid $wt-color-azure;
}

.run-button {
  position: absolute;
  z-index: 10;
  right: 5px;
  top: 5px;
  height: 20px;
  width: 16px;
  cursor: pointer;
  background-size: cover;
  background: url("img/run.svg") no-repeat;

  &._disabled {
    cursor: default;
    opacity: 0.5;
  }
}

.loader {
  position: relative;
  width: 15px;
  height: 15px;
  margin: 0 auto;
  border-radius: 50%;
  text-indent: -9999em;
  color: #161616;
  font-size: 8px;
  opacity: .7;
  animation: loader 1s infinite ease-in-out;
  animation-delay: 0.16s;
}

.loader.darcula {
  opacity: 1;
  color: #696969;
}

.loader::before {
  left: -3.5em;
  animation-delay: 0s;
  position: absolute;
  width: 15px;
  border-radius: 50%;
  height: 15px;
  content: '';
  animation: loader 1s infinite ease-in-out;
}

.loader::after {
  left: 3.5em;
  animation-delay: 0.32s;
  position: absolute;
  border-radius: 50%;
  width: 15px;
  height: 15px;
  content: '';
  animation: loader 1s infinite ease-in-out;
}

@keyframes loader {
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  80% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  0% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}

.cm__ERROR {
  color: $wt-color-tomato !important;
}

.cm__IMPORT {
  text-decoration: underline;
  padding-bottom: 2px;
}

.errors-and-warnings-gutter {
  width: 16px;
}

.ERRORgutter {
  height: 13px;
  width: 13px;
  margin-top: 2px;
  margin-left: 2px;
  background: url("https://try.kotlinlang.org/static/images/icons_all_sprite.svg") no-repeat -150px -500px;
}

.WARNINGgutter {
  height: 13px;
  width: 13px;
  margin-top: 2px;
  margin-left: 2px;
  background: url("https://try.kotlinlang.org/static/images/icons_all_sprite.svg") no-repeat -150px -600px;
}

.cm__red_wavy_line {
  background: url("https://try.kotlinlang.org/static/images/wavyline-red.gif") repeat-x 100% 100%;
  padding-bottom: 2px;
}

.cm__green_wavy_line {
  background: url("https://try.kotlinlang.org/static/images/wavyline-green.gif") repeat-x 100% 100%;
  padding-bottom: 2px;
}

.js-code-output-executor {
  border-top: 1px solid $wt-color-athens;
  position: relative;
}

.js-code-output-executor.darcula {
  border-top: 1px solid grey;
}

.output-wrapper {
  flex-direction: column;
  display: flex;
  border-bottom: 1px solid $wt-color-athens;
  min-height: 60px;
  font-size: 14px;
  background-color: white;
}

.output-wrapper.darcula {
  background-color: $darcula-console-color;
  color: $wt-color-silver;
}

.code-output {
  flex-grow: 1;
  font-family: $font-family-mono;
  overflow: auto;
  padding-left: 10px;
  padding-top: 15px;
}

.standard-output.darcula {
  color: $wt-color-silver;
}

.error-output {
  white-space: pre-wrap;
  color: $wt-color-tomato;
  min-height: 1.4em;
  margin: 0;
  vertical-align: top;
}

.error-output.darcula {
  color: $wt-color-tomato;
}

.standard-output {
  white-space: pre;
  color: #000;
  min-height: 1.4em;
  margin: 0;
  vertical-align: top;
}

.test-passed {
  white-space: pre;
  color: $wt-color-seaweed;
  min-height: 1.4em;
  vertical-align: top;
}

.console-close {
  position: absolute;
  right: 0;
  width: 16px;
  height: 16px;
  background: $wt-color-silver url('img/close-console-icon.svg') no-repeat;
}

.console-close.darcula {
  background: url('img/close-console-icon.svg');
}

.console-close:hover {
  background-color: $wt-color-dove;
}

.console-close.darcula:hover {
  background-color: $wt-color-tomato;
}

.test-fail, .test-error {
  color: $wt-color-tomato;
  min-height: 1.4em;
  vertical-align: top;
}

.console-block {
  display: flex;
}

.console-icon {
  margin-top: 2px;
  padding-right: 20px;
  width: 15px;
  height: 15px;
}

.console-icon.attention {
  background: url('img/attention.svg') no-repeat;
}

.console-icon.passed {
  background: url('img/ok.svg') no-repeat;
}

.console-icon.fail {
  background: url('img/fail.svg') no-repeat;
}

.console-icon.error {
  background: url('img/fail.svg') no-repeat;
}

.test-time {
  float: right;
  font-size: 10px;
  color: $wt-color-silver;
  margin-right: 20px;
  margin-top: -14px;
}

.stacktrace-element {
  margin-left: 20px;

  .stacktrace-link {
    color: $wt-color-azure;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}

.CodeMirror-foldgutter {
  position: absolute;
  width: 100%;
}

.CodeMirror-foldgutter-folded {
  width: 100%;
  background: white;
}

.fold-button {
  position: absolute;
  height: 19px;
  width: 31px;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  cursor: pointer;
  background: transparent url('img/button_open.svg?fill=%23d4d4d4&selector=.data-fill') no-repeat;
  &._hover {
    background-image: url('img/button_open.svg?fill=%23f68322&selector=.data-fill');
  }
}

.fold-button.darcula {
  background: url('img/button_open_darcula.svg') no-repeat;
  &._hover {
    background-image: url('img/button_open_darcula.svg?fill=%23f68322&selector=.data-fill');
  }
}

._unfolded {
  .fold-button {
    background-image: url('img/button_close.svg?fill=%23d4d4d4&selector=.data-fill');
    &._hover {
      background-image: url('img/button_close.svg?fill=%23f68322&selector=.data-fill');
    }
  }
  .fold-button.darcula {
    background: url('img/button_close_darcula.svg') no-repeat;
    &._hover {
      background-image: url('img/button_close_darcula.svg?fill=%23f68322&selector=.data-fill');
    }
  }
}

.code-area {
  position: relative;
}

.compiler-info {
  &, & a {
    font-size: 10px;
    color: $wt-color-silver;
  }

  display: flex;
  justify-content: flex-end;

  padding-top: 5px;

  position: absolute;
  right: 0;
  left: 0;

  span {
    margin-left: 15px;
  }

  &_crosslink {
    justify-content: space-between;
  }

  &__open-editor {
    flex: 1 1 0;
  }

  &__target, &__version {
    white-space: nowrap;
  }
}

.CodeMirror-hints {
  padding-left: 0 !important;
  border: 1px solid $wt-color-silver;
  border-radius: 4px;
  list-style: none;
  position: absolute;
  background-color: #f7f7f7;
  overflow-y: hidden;
  z-index: 10;
  max-height: 20em;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, .2);
}

.CodeMirror-hint {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-right: 5px;
  padding-left: 5px;
}

li.CodeMirror-hint-active {
  background-color: #d8d8d8;
  color: #000000;
}

li.CodeMirror-hint-active .name {
  overflow: auto;
  white-space: normal;
}

.CodeMirror-hint .name {
  margin-right: 20px;
  max-width: 60ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

li.CodeMirror-hint-active .tail {
  overflow: auto;
  white-space: normal;
}

.CodeMirror-hint .tail {
  margin-left: auto;
  margin-right: 5px;
  max-width: 30ch;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.CodeMirror-hint .icon {
  height: 16px;
  width: 16px;
  margin-right: 5px;
}

.icon {
  background: url("https://try.kotlinlang.org/static/images/icons_all_sprite.svg");
}

.icon.class {
  background: url("https://try.kotlinlang.org/static/images/completion_class.svg");
}

.icon.package {
  background: url("https://try.kotlinlang.org/static/images/completion_package.svg");
}

.icon.method {
  background: url("https://try.kotlinlang.org/static/images/completion_method.svg");
}

.icon.genericValue {
  background: url("https://try.kotlinlang.org/static/images/completion_generic.svg")
}

.icon.property {
  background: url("https://try.kotlinlang.org/static/images/completion_property.svg");
}

div[label]:hover:after {
  content: attr(label);
  padding: 0.25rem 0.5rem;
  white-space: pre;
  margin-top: -1rem;
  display: inline-flex;
  background: $warning-color;
  border-radius: 3px;
  margin-left: 1rem;
  color: black;
  border: 1px solid $wt-color-code;
}
`], sourceRoot: "" }]), t2.Z = S;
        }, 3645: function(e2) {
          "use strict";
          e2.exports = function(e3) {
            var t2 = [];
            return t2.toString = function() {
              return this.map(function(t3) {
                var n2 = "", r2 = void 0 !== t3[5];
                return t3[4] && (n2 += "@supports (".concat(t3[4], ") {")), t3[2] && (n2 += "@media ".concat(t3[2], " {")), r2 && (n2 += "@layer".concat(t3[5].length > 0 ? " ".concat(t3[5]) : "", " {")), n2 += e3(t3), r2 && (n2 += "}"), t3[2] && (n2 += "}"), t3[4] && (n2 += "}"), n2;
              }).join("");
            }, t2.i = function(e4, n2, r2, o, i) {
              "string" == typeof e4 && (e4 = [[null, e4, void 0]]);
              var a = {};
              if (r2) for (var s = 0; s < this.length; s++) {
                var l = this[s][0];
                null != l && (a[l] = true);
              }
              for (var c = 0; c < e4.length; c++) {
                var u = [].concat(e4[c]);
                r2 && a[u[0]] || (void 0 !== i && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = i), n2 && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n2) : u[2] = n2), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), t2.push(u));
              }
            }, t2;
          };
        }, 1667: function(e2) {
          "use strict";
          e2.exports = function(e3, t2) {
            return t2 || (t2 = {}), e3 ? (e3 = String(e3.__esModule ? e3.default : e3), /^['"].*['"]$/.test(e3) && (e3 = e3.slice(1, -1)), t2.hash && (e3 += t2.hash), /["'() \t\n]|(%20)/.test(e3) || t2.needQuotes ? '"'.concat(e3.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e3) : e3;
          };
        }, 7537: function(e2) {
          "use strict";
          e2.exports = function(e3) {
            var t2 = e3[1], n2 = e3[3];
            if (!n2) return t2;
            if ("function" == typeof btoa) {
              var r2 = btoa(unescape(encodeURIComponent(JSON.stringify(n2)))), o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r2), i = "/*# ".concat(o, " */");
              return [t2].concat([i]).join("\n");
            }
            return [t2].join("\n");
          };
        }, 6577: function(e2, t2, n2) {
          "use strict";
          var r2, o = n2(3082), i = n2(7769), a = n2(5610), s = n2(8005), l = n2(5516), c = n2(1465), u = Function.prototype.bind, f = Object.defineProperty, d = Object.prototype.hasOwnProperty;
          r2 = function(e3, t3, n3) {
            var r3, o2 = i(t3) && a(t3.value);
            return delete (r3 = s(t3)).writable, delete r3.value, r3.get = function() {
              return !n3.overwriteDefinition && d.call(this, e3) ? o2 : (t3.value = u.call(o2, n3.resolveContext ? n3.resolveContext(this) : this), f(this, e3, t3), this[e3]);
            }, r3;
          }, e2.exports = function(e3) {
            var t3 = l(arguments[1]);
            return o(t3.resolveContext) && a(t3.resolveContext), c(e3, function(e4, n3) {
              return r2(n3, e4, t3);
            });
          };
        }, 1804: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3082), o = n2(431), i = n2(7191), a = n2(5516), s = n2(9981), l = e2.exports = function(e3, t3) {
            var n3, o2, l2, c, u;
            return arguments.length < 2 || "string" != typeof e3 ? (c = t3, t3 = e3, e3 = null) : c = arguments[2], r2(e3) ? (n3 = s.call(e3, "c"), o2 = s.call(e3, "e"), l2 = s.call(e3, "w")) : (n3 = l2 = true, o2 = false), u = { value: t3, configurable: n3, enumerable: o2, writable: l2 }, c ? i(a(c), u) : u;
          };
          l.gs = function(e3, t3, n3) {
            var l2, c, u, f;
            return "string" != typeof e3 ? (u = n3, n3 = t3, t3 = e3, e3 = null) : u = arguments[3], r2(t3) ? o(t3) ? r2(n3) ? o(n3) || (u = n3, n3 = void 0) : n3 = void 0 : (u = t3, t3 = n3 = void 0) : t3 = void 0, r2(e3) ? (l2 = s.call(e3, "c"), c = s.call(e3, "e")) : (l2 = true, c = false), f = { get: t3, set: n3, configurable: l2, enumerable: c }, u ? i(a(u), f) : f;
          };
        }, 5968: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(2400);
          e2.exports = function(e3) {
            if ("function" != typeof e3) return false;
            if (!hasOwnProperty.call(e3, "length")) return false;
            try {
              if ("number" != typeof e3.length) return false;
              if ("function" != typeof e3.call) return false;
              if ("function" != typeof e3.apply) return false;
            } catch (e4) {
              return false;
            }
            return !r2(e3);
          };
        }, 6046: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3082), o = n2(7816), i = n2(6271), a = n2(3994), s = function(e3, t3) {
            return e3.replace("%v", a(t3));
          };
          e2.exports = function(e3, t3, n3) {
            if (!o(n3)) throw new TypeError(s(t3, e3));
            if (!r2(e3)) {
              if ("default" in n3) return n3.default;
              if (n3.isOptional) return null;
            }
            var a2 = i(n3.errorMessage);
            throw r2(a2) || (a2 = t3), new TypeError(s(a2, e3));
          };
        }, 981: function(e2) {
          "use strict";
          e2.exports = function(e3) {
            try {
              return e3.toString();
            } catch (t2) {
              try {
                return String(e3);
              } catch (e4) {
                return null;
              }
            }
          };
        }, 3994: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(981), o = /[\n\r\u2028\u2029]/g;
          e2.exports = function(e3) {
            var t3 = r2(e3);
            return null === t3 ? "<Non-coercible to string value>" : (t3.length > 100 && (t3 = t3.slice(0, 99) + "…"), t3 = t3.replace(o, function(e4) {
              switch (e4) {
                case "\n":
                  return "\\n";
                case "\r":
                  return "\\r";
                case "\u2028":
                  return "\\u2028";
                case "\u2029":
                  return "\\u2029";
                default:
                  throw new Error("Unexpected character");
              }
            }));
          };
        }, 7816: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3082), o = { object: true, function: true, undefined: true };
          e2.exports = function(e3) {
            return !!r2(e3) && hasOwnProperty.call(o, typeof e3);
          };
        }, 5610: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(6046), o = n2(431);
          e2.exports = function(e3) {
            return o(e3) ? e3 : r2(e3, "%v is not a plain function", arguments[1]);
          };
        }, 431: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(5968), o = /^\s*class[\s{/}]/, i = Function.prototype.toString;
          e2.exports = function(e3) {
            return !!r2(e3) && !o.test(i.call(e3));
          };
        }, 2400: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(7816);
          e2.exports = function(e3) {
            if (!r2(e3)) return false;
            try {
              return !!e3.constructor && e3.constructor.prototype === e3;
            } catch (e4) {
              return false;
            }
          };
        }, 6271: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3082), o = n2(7816), i = Object.prototype.toString;
          e2.exports = function(e3) {
            if (!r2(e3)) return null;
            if (o(e3)) {
              var t3 = e3.toString;
              if ("function" != typeof t3) return null;
              if (t3 === i) return null;
            }
            try {
              return "" + e3;
            } catch (e4) {
              return null;
            }
          };
        }, 7769: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(6046), o = n2(3082);
          e2.exports = function(e3) {
            return o(e3) ? e3 : r2(e3, "Cannot use %v", arguments[1]);
          };
        }, 3082: function(e2) {
          "use strict";
          e2.exports = function(e3) {
            return null != e3;
          };
        }, 296: function(e2) {
          function t2(e3, t3, n2) {
            var r2, o, i, a, s;
            function l() {
              var c2 = Date.now() - a;
              c2 < t3 && c2 >= 0 ? r2 = setTimeout(l, t3 - c2) : (r2 = null, n2 || (s = e3.apply(i, o), i = o = null));
            }
            null == t3 && (t3 = 100);
            var c = function() {
              i = this, o = arguments, a = Date.now();
              var c2 = n2 && !r2;
              return r2 || (r2 = setTimeout(l, t3)), c2 && (s = e3.apply(i, o), i = o = null), s;
            };
            return c.clear = function() {
              r2 && (clearTimeout(r2), r2 = null);
            }, c.flush = function() {
              r2 && (s = e3.apply(i, o), i = o = null, clearTimeout(r2), r2 = null);
            }, c;
          }
          t2.debounce = t2, e2.exports = t2;
        }, 9996: function(e2) {
          "use strict";
          var t2 = function(e3) {
            return /* @__PURE__ */ function(e4) {
              return !!e4 && "object" == typeof e4;
            }(e3) && !function(e4) {
              var t3 = Object.prototype.toString.call(e4);
              return "[object RegExp]" === t3 || "[object Date]" === t3 || function(e5) {
                return e5.$$typeof === n2;
              }(e4);
            }(e3);
          }, n2 = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
          function r2(e3, n3) {
            var r3;
            return n3 && true === n3.clone && t2(e3) ? i((r3 = e3, Array.isArray(r3) ? [] : {}), e3, n3) : e3;
          }
          function o(e3, n3, o2) {
            var a2 = e3.slice();
            return n3.forEach(function(n4, s) {
              void 0 === a2[s] ? a2[s] = r2(n4, o2) : t2(n4) ? a2[s] = i(e3[s], n4, o2) : -1 === e3.indexOf(n4) && a2.push(r2(n4, o2));
            }), a2;
          }
          function i(e3, n3, a2) {
            var s = Array.isArray(n3);
            return s === Array.isArray(e3) ? s ? ((a2 || { arrayMerge: o }).arrayMerge || o)(e3, n3, a2) : function(e4, n4, o2) {
              var a3 = {};
              return t2(e4) && Object.keys(e4).forEach(function(t3) {
                a3[t3] = r2(e4[t3], o2);
              }), Object.keys(n4).forEach(function(s2) {
                t2(n4[s2]) && e4[s2] ? a3[s2] = i(e4[s2], n4[s2], o2) : a3[s2] = r2(n4[s2], o2);
              }), a3;
            }(e3, n3, a2) : r2(n3, a2);
          }
          i.all = function(e3, t3) {
            if (!Array.isArray(e3) || e3.length < 2) throw new Error("first argument should be an array with at least two elements");
            return e3.reduce(function(e4, n3) {
              return i(e4, n3, t3);
            });
          };
          var a = i;
          e2.exports = a;
        }, 3638: function(e2) {
          "use strict";
          function t2(e3) {
            this.listenerMap = [{}, {}], e3 && this.root(e3), this.handle = t2.prototype.handle.bind(this);
          }
          e2.exports = t2, t2.prototype.root = function(e3) {
            var t3, n3 = this.listenerMap;
            if (this.rootElement) {
              for (t3 in n3[1]) n3[1].hasOwnProperty(t3) && this.rootElement.removeEventListener(t3, this.handle, true);
              for (t3 in n3[0]) n3[0].hasOwnProperty(t3) && this.rootElement.removeEventListener(t3, this.handle, false);
            }
            if (!e3 || !e3.addEventListener) return this.rootElement && delete this.rootElement, this;
            for (t3 in this.rootElement = e3, n3[1]) n3[1].hasOwnProperty(t3) && this.rootElement.addEventListener(t3, this.handle, true);
            for (t3 in n3[0]) n3[0].hasOwnProperty(t3) && this.rootElement.addEventListener(t3, this.handle, false);
            return this;
          }, t2.prototype.captureForType = function(e3) {
            return -1 !== ["blur", "error", "focus", "load", "resize", "scroll"].indexOf(e3);
          }, t2.prototype.on = function(e3, t3, a, s) {
            var l, c, u, f;
            if (!e3) throw new TypeError("Invalid event type: " + e3);
            if ("function" == typeof t3 && (s = a, a = t3, t3 = null), void 0 === s && (s = this.captureForType(e3)), "function" != typeof a) throw new TypeError("Handler must be a type of Function");
            return l = this.rootElement, (c = this.listenerMap[s ? 1 : 0])[e3] || (l && l.addEventListener(e3, this.handle, s), c[e3] = []), t3 ? /^[a-z]+$/i.test(t3) ? (f = t3, u = r2) : /^#[a-z0-9\-_]+$/i.test(t3) ? (f = t3.slice(1), u = i) : (f = t3, u = n2) : (f = null, u = o.bind(this)), c[e3].push({ selector: t3, handler: a, matcher: u, matcherParam: f }), this;
          }, t2.prototype.off = function(e3, t3, n3, r3) {
            var o2, i2, a, s, l;
            if ("function" == typeof t3 && (r3 = n3, n3 = t3, t3 = null), void 0 === r3) return this.off(e3, t3, n3, true), this.off(e3, t3, n3, false), this;
            if (a = this.listenerMap[r3 ? 1 : 0], !e3) {
              for (l in a) a.hasOwnProperty(l) && this.off(l, t3, n3);
              return this;
            }
            if (!(s = a[e3]) || !s.length) return this;
            for (o2 = s.length - 1; o2 >= 0; o2--) i2 = s[o2], t3 && t3 !== i2.selector || n3 && n3 !== i2.handler || s.splice(o2, 1);
            return s.length || (delete a[e3], this.rootElement && this.rootElement.removeEventListener(e3, this.handle, r3)), this;
          }, t2.prototype.handle = function(e3) {
            var t3, n3, r3, o2, i2, a, s = e3.type, l = [], c = "ftLabsDelegateIgnore";
            if (true !== e3[c]) {
              switch (3 === (a = e3.target).nodeType && (a = a.parentNode), r3 = this.rootElement, e3.eventPhase || (e3.target !== e3.currentTarget ? 3 : 2)) {
                case 1:
                  l = this.listenerMap[1][s];
                  break;
                case 2:
                  this.listenerMap[0] && this.listenerMap[0][s] && (l = l.concat(this.listenerMap[0][s])), this.listenerMap[1] && this.listenerMap[1][s] && (l = l.concat(this.listenerMap[1][s]));
                  break;
                case 3:
                  l = this.listenerMap[0][s];
              }
              for (n3 = l.length; a && n3; ) {
                for (t3 = 0; t3 < n3 && (o2 = l[t3]); t3++) if (o2.matcher.call(a, o2.matcherParam, a) && (i2 = this.fire(e3, a, o2)), false === i2) return e3[c] = true, void e3.preventDefault();
                if (a === r3) break;
                n3 = l.length, a = a.parentElement;
              }
            }
          }, t2.prototype.fire = function(e3, t3, n3) {
            return n3.handler.call(t3, e3, t3);
          };
          var n2 = function(e3) {
            if (e3) {
              var t3 = e3.prototype;
              return t3.matches || t3.matchesSelector || t3.webkitMatchesSelector || t3.mozMatchesSelector || t3.msMatchesSelector || t3.oMatchesSelector;
            }
          }(Element);
          function r2(e3, t3) {
            return e3.toLowerCase() === t3.tagName.toLowerCase();
          }
          function o(e3, t3) {
            return this.rootElement === window ? t3 === document : this.rootElement === t3;
          }
          function i(e3, t3) {
            return e3 === t3.id;
          }
          t2.prototype.destroy = function() {
            this.off(), this.root();
          };
        }, 6282: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3638);
          e2.exports = function(e3) {
            return new r2(e3);
          }, e2.exports.Delegate = r2;
        }, 1126: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(2745);
          e2.exports = function() {
            return r2(this).length = 0, this;
          };
        }, 2041: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(9980), o = n2(3902), i = n2(2745), a = Array.prototype.indexOf, s = Object.prototype.hasOwnProperty, l = Math.abs, c = Math.floor;
          e2.exports = function(e3) {
            var t3, n3, u, f;
            if (!r2(e3)) return a.apply(this, arguments);
            for (n3 = o(i(this).length), u = arguments[1], t3 = u = isNaN(u) ? 0 : u >= 0 ? c(u) : o(this.length) - c(l(u)); t3 < n3; ++t3) if (s.call(this, t3) && (f = this[t3], r2(f))) return t3;
            return -1;
          };
        }, 4616: function(e2, t2, n2) {
          "use strict";
          e2.exports = n2(7379)() ? Array.from : n2(2669);
        }, 7379: function(e2) {
          "use strict";
          e2.exports = function() {
            var e3, t2, n2 = Array.from;
            return "function" == typeof n2 && (t2 = n2(e3 = ["raz", "dwa"]), Boolean(t2 && t2 !== e3 && "dwa" === t2[1]));
          };
        }, 2669: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(8641).iterator, o = n2(6766), i = n2(1216), a = n2(3902), s = n2(1290), l = n2(2745), c = n2(6914), u = n2(4349), f = Array.isArray, d = Function.prototype.call, p = { configurable: true, enumerable: true, writable: true, value: null }, h = Object.defineProperty;
          e2.exports = function(e3) {
            var t3, n3, m, g, v, A, y, b, C, x, w = arguments[1], k = arguments[2];
            if (e3 = Object(l(e3)), c(w) && s(w), this && this !== Array && i(this)) t3 = this;
            else {
              if (!w) {
                if (o(e3)) return 1 !== (v = e3.length) ? Array.apply(null, e3) : ((g = new Array(1))[0] = e3[0], g);
                if (f(e3)) {
                  for (g = new Array(v = e3.length), n3 = 0; n3 < v; ++n3) g[n3] = e3[n3];
                  return g;
                }
              }
              g = [];
            }
            if (!f(e3)) {
              if (void 0 !== (C = e3[r2])) {
                for (y = s(C).call(e3), t3 && (g = new t3()), b = y.next(), n3 = 0; !b.done; ) x = w ? d.call(w, k, b.value, n3) : b.value, t3 ? (p.value = x, h(g, n3, p)) : g[n3] = x, b = y.next(), ++n3;
                v = n3;
              } else if (u(e3)) {
                for (v = e3.length, t3 && (g = new t3()), n3 = 0, m = 0; n3 < v; ++n3) x = e3[n3], n3 + 1 < v && (A = x.charCodeAt(0)) >= 55296 && A <= 56319 && (x += e3[++n3]), x = w ? d.call(w, k, x, m) : x, t3 ? (p.value = x, h(g, m, p)) : g[m] = x, ++m;
                v = m;
              }
            }
            if (void 0 === v) for (v = a(e3.length), t3 && (g = new t3(v)), n3 = 0; n3 < v; ++n3) x = w ? d.call(w, k, e3[n3], n3) : e3[n3], t3 ? (p.value = x, h(g, n3, p)) : g[n3] = x;
            return t3 && (p.value = null, g.length = v), g;
          };
        }, 6766: function(e2) {
          "use strict";
          var t2 = Object.prototype.toString, n2 = t2.call(/* @__PURE__ */ function() {
            return arguments;
          }());
          e2.exports = function(e3) {
            return t2.call(e3) === n2;
          };
        }, 1216: function(e2) {
          "use strict";
          var t2 = Object.prototype.toString, n2 = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
          e2.exports = function(e3) {
            return "function" == typeof e3 && n2(t2.call(e3));
          };
        }, 430: function(e2) {
          "use strict";
          e2.exports = function() {
          };
        }, 5875: function(e2, t2, n2) {
          "use strict";
          e2.exports = n2(5448)() ? Math.sign : n2(4592);
        }, 5448: function(e2) {
          "use strict";
          e2.exports = function() {
            var e3 = Math.sign;
            return "function" == typeof e3 && 1 === e3(10) && -1 === e3(-20);
          };
        }, 4592: function(e2) {
          "use strict";
          e2.exports = function(e3) {
            return e3 = Number(e3), isNaN(e3) || 0 === e3 ? e3 : e3 > 0 ? 1 : -1;
          };
        }, 9980: function(e2, t2, n2) {
          "use strict";
          e2.exports = n2(9496)() ? Number.isNaN : n2(4517);
        }, 9496: function(e2) {
          "use strict";
          e2.exports = function() {
            var e3 = Number.isNaN;
            return "function" == typeof e3 && !e3({}) && e3(NaN) && !e3(34);
          };
        }, 4517: function(e2) {
          "use strict";
          e2.exports = function(e3) {
            return e3 != e3;
          };
        }, 3478: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(5875), o = Math.abs, i = Math.floor;
          e2.exports = function(e3) {
            return isNaN(e3) ? 0 : 0 !== (e3 = Number(e3)) && isFinite(e3) ? r2(e3) * i(o(e3)) : e3;
          };
        }, 3902: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3478), o = Math.max;
          e2.exports = function(e3) {
            return o(0, r2(e3));
          };
        }, 4214: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(1290), o = n2(2745), i = Function.prototype.bind, a = Function.prototype.call, s = Object.keys, l = Object.prototype.propertyIsEnumerable;
          e2.exports = function(e3, t3) {
            return function(n3, c) {
              var u, f = arguments[2], d = arguments[3];
              return n3 = Object(o(n3)), r2(c), u = s(n3), d && u.sort("function" == typeof d ? i.call(d, n3) : void 0), "function" != typeof e3 && (e3 = u[e3]), a.call(e3, u, function(e4, r3) {
                return l.call(n3, e4) ? a.call(c, f, n3[e4], e4, n3, r3) : t3;
              });
            };
          };
        }, 7191: function(e2, t2, n2) {
          "use strict";
          e2.exports = n2(6560)() ? Object.assign : n2(7346);
        }, 6560: function(e2) {
          "use strict";
          e2.exports = function() {
            var e3, t2 = Object.assign;
            return "function" == typeof t2 && (t2(e3 = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), e3.foo + e3.bar + e3.trzy === "razdwatrzy");
          };
        }, 7346: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3711), o = n2(2745), i = Math.max;
          e2.exports = function(e3, t3) {
            var n3, a, s, l = i(arguments.length, 2);
            for (e3 = Object(o(e3)), s = function(r3) {
              try {
                e3[r3] = t3[r3];
              } catch (e4) {
                n3 || (n3 = e4);
              }
            }, a = 1; a < l; ++a) r2(t3 = arguments[a]).forEach(s);
            if (void 0 !== n3) throw n3;
            return e3;
          };
        }, 8005: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(4616), o = n2(7191), i = n2(2745);
          e2.exports = function(e3) {
            var t3 = Object(i(e3)), n3 = arguments[1], a = Object(arguments[2]);
            if (t3 !== e3 && !n3) return t3;
            var s = {};
            return n3 ? r2(n3, function(t4) {
              (a.ensure || t4 in e3) && (s[t4] = e3[t4]);
            }) : o(s, e3), s;
          };
        }, 634: function(e2, t2, n2) {
          "use strict";
          var r2, o, i, a, s = Object.create;
          n2(4589)() || (r2 = n2(9221)), e2.exports = r2 ? 1 !== r2.level ? s : (o = {}, i = {}, a = { configurable: false, enumerable: false, writable: true, value: void 0 }, Object.getOwnPropertyNames(Object.prototype).forEach(function(e3) {
            i[e3] = "__proto__" !== e3 ? a : { configurable: true, enumerable: false, writable: true, value: void 0 };
          }), Object.defineProperties(o, i), Object.defineProperty(r2, "nullPolyfill", { configurable: false, enumerable: false, writable: false, value: o }), function(e3, t3) {
            return s(null === e3 ? o : e3, t3);
          }) : s;
        }, 7031: function(e2, t2, n2) {
          "use strict";
          e2.exports = n2(4214)("forEach");
        }, 6191: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(6914), o = { function: true, object: true };
          e2.exports = function(e3) {
            return r2(e3) && o[typeof e3] || false;
          };
        }, 6914: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(430)();
          e2.exports = function(e3) {
            return e3 !== r2 && null !== e3;
          };
        }, 3711: function(e2, t2, n2) {
          "use strict";
          e2.exports = n2(7446)() ? Object.keys : n2(6137);
        }, 7446: function(e2) {
          "use strict";
          e2.exports = function() {
            try {
              return Object.keys("primitive"), true;
            } catch (e3) {
              return false;
            }
          };
        }, 6137: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(6914), o = Object.keys;
          e2.exports = function(e3) {
            return o(r2(e3) ? Object(e3) : e3);
          };
        }, 1465: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(1290), o = n2(7031), i = Function.prototype.call;
          e2.exports = function(e3, t3) {
            var n3 = {}, a = arguments[2];
            return r2(t3), o(e3, function(e4, r3, o2, s) {
              n3[r3] = i.call(t3, a, e4, r3, o2, s);
            }), n3;
          };
        }, 5516: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(6914), o = Array.prototype.forEach, i = Object.create;
          e2.exports = function(e3) {
            var t3 = i(null);
            return o.call(arguments, function(e4) {
              r2(e4) && function(e5, t4) {
                var n3;
                for (n3 in e5) t4[n3] = e5[n3];
              }(Object(e4), t3);
            }), t3;
          };
        }, 1386: function(e2, t2, n2) {
          "use strict";
          e2.exports = n2(4589)() ? Object.setPrototypeOf : n2(9221);
        }, 4589: function(e2) {
          "use strict";
          var t2 = Object.create, n2 = Object.getPrototypeOf, r2 = {};
          e2.exports = function() {
            var e3 = Object.setPrototypeOf;
            return "function" == typeof e3 && n2(e3((arguments[0] || t2)(null), r2)) === r2;
          };
        }, 9221: function(e2, t2, n2) {
          "use strict";
          var r2, o, i, a, s = n2(6191), l = n2(2745), c = Object.prototype.isPrototypeOf, u = Object.defineProperty, f = { configurable: true, enumerable: false, writable: true, value: void 0 };
          r2 = function(e3, t3) {
            if (l(e3), null === t3 || s(t3)) return e3;
            throw new TypeError("Prototype must be null or an object");
          }, e2.exports = (o = function() {
            var e3, t3 = /* @__PURE__ */ Object.create(null), n3 = {}, r3 = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
            if (r3) {
              try {
                (e3 = r3.set).call(t3, n3);
              } catch (e4) {
              }
              if (Object.getPrototypeOf(t3) === n3) return { set: e3, level: 2 };
            }
            return t3.__proto__ = n3, Object.getPrototypeOf(t3) === n3 ? { level: 2 } : ((t3 = {}).__proto__ = n3, Object.getPrototypeOf(t3) === n3 && { level: 1 });
          }(), o ? (2 === o.level ? o.set ? (a = o.set, i = function(e3, t3) {
            return a.call(r2(e3, t3), t3), e3;
          }) : i = function(e3, t3) {
            return r2(e3, t3).__proto__ = t3, e3;
          } : i = function e3(t3, n3) {
            var o2;
            return r2(t3, n3), (o2 = c.call(e3.nullPolyfill, t3)) && delete e3.nullPolyfill.__proto__, null === n3 && (n3 = e3.nullPolyfill), t3.__proto__ = n3, o2 && u(e3.nullPolyfill, "__proto__", f), t3;
          }, Object.defineProperty(i, "level", { configurable: false, enumerable: false, writable: false, value: o.level })) : null), n2(634);
        }, 1290: function(e2) {
          "use strict";
          e2.exports = function(e3) {
            if ("function" != typeof e3) throw new TypeError(e3 + " is not a function");
            return e3;
          };
        }, 2745: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(6914);
          e2.exports = function(e3) {
            if (!r2(e3)) throw new TypeError("Cannot use null or undefined");
            return e3;
          };
        }, 9981: function(e2, t2, n2) {
          "use strict";
          e2.exports = n2(3591)() ? String.prototype.contains : n2(6042);
        }, 3591: function(e2) {
          "use strict";
          var t2 = "razdwatrzy";
          e2.exports = function() {
            return "function" == typeof t2.contains && true === t2.contains("dwa") && false === t2.contains("foo");
          };
        }, 6042: function(e2) {
          "use strict";
          var t2 = String.prototype.indexOf;
          e2.exports = function(e3) {
            return t2.call(this, e3, arguments[1]) > -1;
          };
        }, 4349: function(e2) {
          "use strict";
          var t2 = Object.prototype.toString, n2 = t2.call("");
          e2.exports = function(e3) {
            return "string" == typeof e3 || e3 && "object" == typeof e3 && (e3 instanceof String || t2.call(e3) === n2) || false;
          };
        }, 2270: function(e2, t2, n2) {
          "use strict";
          var r2, o = n2(1386), i = n2(9981), a = n2(1804), s = n2(8641), l = n2(2764), c = Object.defineProperty;
          r2 = e2.exports = function(e3, t3) {
            if (!(this instanceof r2)) throw new TypeError("Constructor requires 'new'");
            l.call(this, e3), t3 = t3 ? i.call(t3, "key+value") ? "key+value" : i.call(t3, "key") ? "key" : "value" : "value", c(this, "__kind__", a("", t3));
          }, o && o(r2, l), delete r2.prototype.constructor, r2.prototype = Object.create(l.prototype, { _resolve: a(function(e3) {
            return "value" === this.__kind__ ? this.__list__[e3] : "key+value" === this.__kind__ ? [e3, this.__list__[e3]] : e3;
          }) }), c(r2.prototype, s.toStringTag, a("c", "Array Iterator"));
        }, 9334: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(6766), o = n2(1290), i = n2(4349), a = n2(3226), s = Array.isArray, l = Function.prototype.call, c = Array.prototype.some;
          e2.exports = function(e3, t3) {
            var n3, u, f, d, p, h, m, g, v = arguments[2];
            if (s(e3) || r2(e3) ? n3 = "array" : i(e3) ? n3 = "string" : e3 = a(e3), o(t3), f = function() {
              d = true;
            }, "array" !== n3) if ("string" !== n3) for (u = e3.next(); !u.done; ) {
              if (l.call(t3, v, u.value, f), d) return;
              u = e3.next();
            }
            else for (h = e3.length, p = 0; p < h && (m = e3[p], p + 1 < h && (g = m.charCodeAt(0)) >= 55296 && g <= 56319 && (m += e3[++p]), l.call(t3, v, m, f), !d); ++p) ;
            else c.call(e3, function(e4) {
              return l.call(t3, v, e4, f), d;
            });
          };
        }, 3226: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(6766), o = n2(4349), i = n2(2270), a = n2(5430), s = n2(2233), l = n2(8641).iterator;
          e2.exports = function(e3) {
            return "function" == typeof s(e3)[l] ? e3[l]() : r2(e3) ? new i(e3) : o(e3) ? new a(e3) : new i(e3);
          };
        }, 2764: function(e2, t2, n2) {
          "use strict";
          var r2, o = n2(1126), i = n2(7191), a = n2(1290), s = n2(2745), l = n2(1804), c = n2(6577), u = n2(8641), f = Object.defineProperty, d = Object.defineProperties;
          e2.exports = r2 = function(e3, t3) {
            if (!(this instanceof r2)) throw new TypeError("Constructor requires 'new'");
            d(this, { __list__: l("w", s(e3)), __context__: l("w", t3), __nextIndex__: l("w", 0) }), t3 && (a(t3.on), t3.on("_add", this._onAdd), t3.on("_delete", this._onDelete), t3.on("_clear", this._onClear));
          }, delete r2.prototype.constructor, d(r2.prototype, i({ _next: l(function() {
            var e3;
            if (this.__list__) return this.__redo__ && void 0 !== (e3 = this.__redo__.shift()) ? e3 : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind();
          }), next: l(function() {
            return this._createResult(this._next());
          }), _createResult: l(function(e3) {
            return void 0 === e3 ? { done: true, value: void 0 } : { done: false, value: this._resolve(e3) };
          }), _resolve: l(function(e3) {
            return this.__list__[e3];
          }), _unBind: l(function() {
            this.__list__ = null, delete this.__redo__, this.__context__ && (this.__context__.off("_add", this._onAdd), this.__context__.off("_delete", this._onDelete), this.__context__.off("_clear", this._onClear), this.__context__ = null);
          }), toString: l(function() {
            return "[object " + (this[u.toStringTag] || "Object") + "]";
          }) }, c({ _onAdd: l(function(e3) {
            e3 >= this.__nextIndex__ || (++this.__nextIndex__, this.__redo__ ? (this.__redo__.forEach(function(t3, n3) {
              t3 >= e3 && (this.__redo__[n3] = ++t3);
            }, this), this.__redo__.push(e3)) : f(this, "__redo__", l("c", [e3])));
          }), _onDelete: l(function(e3) {
            var t3;
            e3 >= this.__nextIndex__ || (--this.__nextIndex__, this.__redo__ && (-1 !== (t3 = this.__redo__.indexOf(e3)) && this.__redo__.splice(t3, 1), this.__redo__.forEach(function(t4, n3) {
              t4 > e3 && (this.__redo__[n3] = --t4);
            }, this)));
          }), _onClear: l(function() {
            this.__redo__ && o.call(this.__redo__), this.__nextIndex__ = 0;
          }) }))), f(r2.prototype, u.iterator, l(function() {
            return this;
          }));
        }, 3182: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(6766), o = n2(6914), i = n2(4349), a = n2(8641).iterator, s = Array.isArray;
          e2.exports = function(e3) {
            return !(!o(e3) || !s(e3) && !i(e3) && !r2(e3) && "function" != typeof e3[a]);
          };
        }, 5430: function(e2, t2, n2) {
          "use strict";
          var r2, o = n2(1386), i = n2(1804), a = n2(8641), s = n2(2764), l = Object.defineProperty;
          r2 = e2.exports = function(e3) {
            if (!(this instanceof r2)) throw new TypeError("Constructor requires 'new'");
            e3 = String(e3), s.call(this, e3), l(this, "__length__", i("", e3.length));
          }, o && o(r2, s), delete r2.prototype.constructor, r2.prototype = Object.create(s.prototype, { _next: i(function() {
            if (this.__list__) return this.__nextIndex__ < this.__length__ ? this.__nextIndex__++ : void this._unBind();
          }), _resolve: i(function(e3) {
            var t3, n3 = this.__list__[e3];
            return this.__nextIndex__ === this.__length__ ? n3 : (t3 = n3.charCodeAt(0)) >= 55296 && t3 <= 56319 ? n3 + this.__list__[this.__nextIndex__++] : n3;
          }) }), l(r2.prototype, a.toStringTag, i("c", "String Iterator"));
        }, 2233: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(3182);
          e2.exports = function(e3) {
            if (!r2(e3)) throw new TypeError(e3 + " is not iterable");
            return e3;
          };
        }, 2702: function(e2, t2, n2) {
          e2.exports = function() {
            "use strict";
            function e3(e4) {
              return "function" == typeof e4;
            }
            var t3 = Array.isArray ? Array.isArray : function(e4) {
              return "[object Array]" === Object.prototype.toString.call(e4);
            }, r2 = 0, o = void 0, i = void 0, a = function(e4, t4) {
              p[r2] = e4, p[r2 + 1] = t4, 2 === (r2 += 2) && (i ? i(h) : y());
            };
            var s = "undefined" != typeof window ? window : void 0, l = s || {}, c = l.MutationObserver || l.WebKitMutationObserver, u = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), f = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
            function d() {
              var e4 = setTimeout;
              return function() {
                return e4(h, 1);
              };
            }
            var p = new Array(1e3);
            function h() {
              for (var e4 = 0; e4 < r2; e4 += 2) (0, p[e4])(p[e4 + 1]), p[e4] = void 0, p[e4 + 1] = void 0;
              r2 = 0;
            }
            var m, g, v, A, y = void 0;
            function b(e4, t4) {
              var n3 = this, r3 = new this.constructor(w);
              void 0 === r3[x] && j(r3);
              var o2 = n3._state;
              if (o2) {
                var i2 = arguments[o2 - 1];
                a(function() {
                  return P(o2, r3, i2, n3._result);
                });
              } else L(n3, r3, e4, t4);
              return r3;
            }
            function C(e4) {
              if (e4 && "object" == typeof e4 && e4.constructor === this) return e4;
              var t4 = new this(w);
              return M(t4, e4), t4;
            }
            y = u ? function() {
              return process.nextTick(h);
            } : c ? (g = 0, v = new c(h), A = document.createTextNode(""), v.observe(A, { characterData: true }), function() {
              A.data = g = ++g % 2;
            }) : f ? ((m = new MessageChannel()).port1.onmessage = h, function() {
              return m.port2.postMessage(0);
            }) : void 0 === s ? function() {
              try {
                var e4 = Function("return this")().require("vertx");
                return void 0 !== (o = e4.runOnLoop || e4.runOnContext) ? function() {
                  o(h);
                } : d();
              } catch (e5) {
                return d();
              }
            }() : d();
            var x = Math.random().toString(36).substring(2);
            function w() {
            }
            var k = void 0, E = 1, _ = 2;
            function S(t4, n3, r3) {
              n3.constructor === t4.constructor && r3 === b && n3.constructor.resolve === C ? function(e4, t5) {
                t5._state === E ? O(e4, t5._result) : t5._state === _ ? T(e4, t5._result) : L(t5, void 0, function(t6) {
                  return M(e4, t6);
                }, function(t6) {
                  return T(e4, t6);
                });
              }(t4, n3) : void 0 === r3 ? O(t4, n3) : e3(r3) ? function(e4, t5, n4) {
                a(function(e5) {
                  var r4 = false, o2 = function(e6, t6, n5, r5) {
                    try {
                      e6.call(t6, n5, r5);
                    } catch (e7) {
                      return e7;
                    }
                  }(n4, t5, function(n5) {
                    r4 || (r4 = true, t5 !== n5 ? M(e5, n5) : O(e5, n5));
                  }, function(t6) {
                    r4 || (r4 = true, T(e5, t6));
                  }, e5._label);
                  !r4 && o2 && (r4 = true, T(e5, o2));
                }, e4);
              }(t4, n3, r3) : O(t4, n3);
            }
            function M(e4, t4) {
              if (e4 === t4) T(e4, new TypeError("You cannot resolve a promise with itself"));
              else if (o2 = typeof (r3 = t4), null === r3 || "object" !== o2 && "function" !== o2) O(e4, t4);
              else {
                var n3 = void 0;
                try {
                  n3 = t4.then;
                } catch (t5) {
                  return void T(e4, t5);
                }
                S(e4, t4, n3);
              }
              var r3, o2;
            }
            function B(e4) {
              e4._onerror && e4._onerror(e4._result), F(e4);
            }
            function O(e4, t4) {
              e4._state === k && (e4._result = t4, e4._state = E, 0 !== e4._subscribers.length && a(F, e4));
            }
            function T(e4, t4) {
              e4._state === k && (e4._state = _, e4._result = t4, a(B, e4));
            }
            function L(e4, t4, n3, r3) {
              var o2 = e4._subscribers, i2 = o2.length;
              e4._onerror = null, o2[i2] = t4, o2[i2 + E] = n3, o2[i2 + _] = r3, 0 === i2 && e4._state && a(F, e4);
            }
            function F(e4) {
              var t4 = e4._subscribers, n3 = e4._state;
              if (0 !== t4.length) {
                for (var r3 = void 0, o2 = void 0, i2 = e4._result, a2 = 0; a2 < t4.length; a2 += 3) r3 = t4[a2], o2 = t4[a2 + n3], r3 ? P(n3, r3, o2, i2) : o2(i2);
                e4._subscribers.length = 0;
              }
            }
            function P(t4, n3, r3, o2) {
              var i2 = e3(r3), a2 = void 0, s2 = void 0, l2 = true;
              if (i2) {
                try {
                  a2 = r3(o2);
                } catch (e4) {
                  l2 = false, s2 = e4;
                }
                if (n3 === a2) return void T(n3, new TypeError("A promises callback cannot return that same promise."));
              } else a2 = o2;
              n3._state !== k || (i2 && l2 ? M(n3, a2) : false === l2 ? T(n3, s2) : t4 === E ? O(n3, a2) : t4 === _ && T(n3, a2));
            }
            var N = 0;
            function j(e4) {
              e4[x] = N++, e4._state = void 0, e4._result = void 0, e4._subscribers = [];
            }
            var I = function() {
              function e4(e5, n3) {
                this._instanceConstructor = e5, this.promise = new e5(w), this.promise[x] || j(this.promise), t3(n3) ? (this.length = n3.length, this._remaining = n3.length, this._result = new Array(this.length), 0 === this.length ? O(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(n3), 0 === this._remaining && O(this.promise, this._result))) : T(this.promise, new Error("Array Methods must be provided an Array"));
              }
              return e4.prototype._enumerate = function(e5) {
                for (var t4 = 0; this._state === k && t4 < e5.length; t4++) this._eachEntry(e5[t4], t4);
              }, e4.prototype._eachEntry = function(e5, t4) {
                var n3 = this._instanceConstructor, r3 = n3.resolve;
                if (r3 === C) {
                  var o2 = void 0, i2 = void 0, a2 = false;
                  try {
                    o2 = e5.then;
                  } catch (e6) {
                    a2 = true, i2 = e6;
                  }
                  if (o2 === b && e5._state !== k) this._settledAt(e5._state, t4, e5._result);
                  else if ("function" != typeof o2) this._remaining--, this._result[t4] = e5;
                  else if (n3 === D) {
                    var s2 = new n3(w);
                    a2 ? T(s2, i2) : S(s2, e5, o2), this._willSettleAt(s2, t4);
                  } else this._willSettleAt(new n3(function(t5) {
                    return t5(e5);
                  }), t4);
                } else this._willSettleAt(r3(e5), t4);
              }, e4.prototype._settledAt = function(e5, t4, n3) {
                var r3 = this.promise;
                r3._state === k && (this._remaining--, e5 === _ ? T(r3, n3) : this._result[t4] = n3), 0 === this._remaining && O(r3, this._result);
              }, e4.prototype._willSettleAt = function(e5, t4) {
                var n3 = this;
                L(e5, void 0, function(e6) {
                  return n3._settledAt(E, t4, e6);
                }, function(e6) {
                  return n3._settledAt(_, t4, e6);
                });
              }, e4;
            }();
            var D = function() {
              function t4(e4) {
                this[x] = N++, this._result = this._state = void 0, this._subscribers = [], w !== e4 && ("function" != typeof e4 && function() {
                  throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                }(), this instanceof t4 ? function(e5, t5) {
                  try {
                    t5(function(t6) {
                      M(e5, t6);
                    }, function(t6) {
                      T(e5, t6);
                    });
                  } catch (t6) {
                    T(e5, t6);
                  }
                }(this, e4) : function() {
                  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }());
              }
              return t4.prototype.catch = function(e4) {
                return this.then(null, e4);
              }, t4.prototype.finally = function(t5) {
                var n3 = this, r3 = n3.constructor;
                return e3(t5) ? n3.then(function(e4) {
                  return r3.resolve(t5()).then(function() {
                    return e4;
                  });
                }, function(e4) {
                  return r3.resolve(t5()).then(function() {
                    throw e4;
                  });
                }) : n3.then(t5, t5);
              }, t4;
            }();
            return D.prototype.then = b, D.all = function(e4) {
              return new I(this, e4).promise;
            }, D.race = function(e4) {
              var n3 = this;
              return t3(e4) ? new n3(function(t4, r3) {
                for (var o2 = e4.length, i2 = 0; i2 < o2; i2++) n3.resolve(e4[i2]).then(t4, r3);
              }) : new n3(function(e5, t4) {
                return t4(new TypeError("You must pass an array to race."));
              });
            }, D.resolve = C, D.reject = function(e4) {
              var t4 = new this(w);
              return T(t4, e4), t4;
            }, D._setScheduler = function(e4) {
              i = e4;
            }, D._setAsap = function(e4) {
              a = e4;
            }, D._asap = a, D.polyfill = function() {
              var e4 = void 0;
              if (void 0 !== n2.g) e4 = n2.g;
              else if ("undefined" != typeof self) e4 = self;
              else try {
                e4 = Function("return this")();
              } catch (e5) {
                throw new Error("polyfill failed because global object is unavailable in this environment");
              }
              var t4 = e4.Promise;
              if (t4) {
                var r3 = null;
                try {
                  r3 = Object.prototype.toString.call(t4.resolve());
                } catch (e5) {
                }
                if ("[object Promise]" === r3 && !t4.cast) return;
              }
              e4.Promise = D;
            }, D.Promise = D, D;
          }();
        }, 3659: function(e2) {
          "use strict";
          e2.exports = "undefined" != typeof Set && "[object Set]" === Object.prototype.toString.call(Set.prototype);
        }, 1857: function(e2, t2, n2) {
          "use strict";
          var r2, o = n2(1386), i = n2(9981), a = n2(1804), s = n2(2764), l = n2(8641).toStringTag, c = Object.defineProperty;
          r2 = e2.exports = function(e3, t3) {
            return this instanceof r2 ? (s.call(this, e3.__setData__, e3), t3 = t3 && i.call(t3, "key+value") ? "key+value" : "value", c(this, "__kind__", a("", t3))) : new r2(e3, t3);
          }, o && o(r2, s), r2.prototype = Object.create(s.prototype, { constructor: a(r2), _resolve: a(function(e3) {
            return "value" === this.__kind__ ? this.__list__[e3] : [this.__list__[e3], this.__list__[e3]];
          }), toString: a(function() {
            return "[object Set Iterator]";
          }) }), c(r2.prototype, l, a("c", "Set Iterator"));
        }, 2037: function(e2, t2, n2) {
          "use strict";
          var r2, o, i, a = n2(5618), s = n2(1126), l = n2(2041), c = n2(1386), u = n2(1290), f = n2(1804), d = n2(8370), p = n2(8641), h = n2(2233), m = n2(9334), g = n2(1857), v = n2(3659), A = Function.prototype.call, y = Object.defineProperty, b = Object.getPrototypeOf;
          v && (i = Set), e2.exports = r2 = function() {
            var e3, t3 = arguments[0];
            if (!(this instanceof r2)) throw new TypeError("Constructor requires 'new'");
            return e3 = v && c ? c(new i(), b(this)) : this, a(t3) && h(t3), y(e3, "__setData__", f("c", [])), t3 ? (m(t3, function(e4) {
              -1 === l.call(this, e4) && this.push(e4);
            }, e3.__setData__), e3) : e3;
          }, v && (c && c(r2, i), r2.prototype = Object.create(i.prototype, { constructor: f(r2) })), d(Object.defineProperties(r2.prototype, { add: f(function(e3) {
            return this.has(e3) || this.emit("_add", this.__setData__.push(e3) - 1, e3), this;
          }), clear: f(function() {
            this.__setData__.length && (s.call(this.__setData__), this.emit("_clear"));
          }), delete: f(function(e3) {
            var t3 = l.call(this.__setData__, e3);
            return -1 !== t3 && (this.__setData__.splice(t3, 1), this.emit("_delete", t3, e3), true);
          }), entries: f(function() {
            return new g(this, "key+value");
          }), forEach: f(function(e3) {
            var t3, n3, r3, o2 = arguments[1];
            for (u(e3), n3 = (t3 = this.values())._next(); void 0 !== n3; ) r3 = t3._resolve(n3), A.call(e3, o2, r3, r3, this), n3 = t3._next();
          }), has: f(function(e3) {
            return -1 !== l.call(this.__setData__, e3);
          }), keys: f(o = function() {
            return this.values();
          }), size: f.gs(function() {
            return this.__setData__.length;
          }), values: f(function() {
            return new g(this);
          }), toString: f(function() {
            return "[object Set]";
          }) })), y(r2.prototype, p.iterator, f(o)), y(r2.prototype, p.toStringTag, f("c", "Set"));
        }, 8641: function(e2, t2, n2) {
          "use strict";
          e2.exports = n2(8821)() ? n2(7933).Symbol : n2(5127);
        }, 8821: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(7933), o = { object: true, symbol: true };
          e2.exports = function() {
            var e3, t3 = r2.Symbol;
            if ("function" != typeof t3) return false;
            e3 = t3("test symbol");
            try {
              String(e3);
            } catch (e4) {
              return false;
            }
            return !!o[typeof t3.iterator] && !!o[typeof t3.toPrimitive] && !!o[typeof t3.toStringTag];
          };
        }, 5386: function(e2) {
          "use strict";
          e2.exports = function(e3) {
            return !!e3 && ("symbol" == typeof e3 || !!e3.constructor && "Symbol" === e3.constructor.name && "Symbol" === e3[e3.constructor.toStringTag]);
          };
        }, 7451: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(1804), o = Object.create, i = Object.defineProperty, a = Object.prototype, s = o(null);
          e2.exports = function(e3) {
            for (var t3, n3, o2 = 0; s[e3 + (o2 || "")]; ) ++o2;
            return s[e3 += o2 || ""] = true, i(a, t3 = "@@" + e3, r2.gs(null, function(e4) {
              n3 || (n3 = true, i(this, t3, r2(e4)), n3 = false);
            })), t3;
          };
        }, 7628: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(1804), o = n2(7933).Symbol;
          e2.exports = function(e3) {
            return Object.defineProperties(e3, { hasInstance: r2("", o && o.hasInstance || e3("hasInstance")), isConcatSpreadable: r2("", o && o.isConcatSpreadable || e3("isConcatSpreadable")), iterator: r2("", o && o.iterator || e3("iterator")), match: r2("", o && o.match || e3("match")), replace: r2("", o && o.replace || e3("replace")), search: r2("", o && o.search || e3("search")), species: r2("", o && o.species || e3("species")), split: r2("", o && o.split || e3("split")), toPrimitive: r2("", o && o.toPrimitive || e3("toPrimitive")), toStringTag: r2("", o && o.toStringTag || e3("toStringTag")), unscopables: r2("", o && o.unscopables || e3("unscopables")) });
          };
        }, 277: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(1804), o = n2(8541), i = /* @__PURE__ */ Object.create(null);
          e2.exports = function(e3) {
            return Object.defineProperties(e3, { for: r2(function(t3) {
              return i[t3] ? i[t3] : i[t3] = e3(String(t3));
            }), keyFor: r2(function(e4) {
              var t3;
              for (t3 in o(e4), i) if (i[t3] === e4) return t3;
            }) });
          };
        }, 5127: function(e2, t2, n2) {
          "use strict";
          var r2, o, i, a = n2(1804), s = n2(8541), l = n2(7933).Symbol, c = n2(7451), u = n2(7628), f = n2(277), d = Object.create, p = Object.defineProperties, h = Object.defineProperty;
          if ("function" == typeof l) try {
            String(l()), i = true;
          } catch (e3) {
          }
          else l = null;
          o = function(e3) {
            if (this instanceof o) throw new TypeError("Symbol is not a constructor");
            return r2(e3);
          }, e2.exports = r2 = function e3(t3) {
            var n3;
            if (this instanceof e3) throw new TypeError("Symbol is not a constructor");
            return i ? l(t3) : (n3 = d(o.prototype), t3 = void 0 === t3 ? "" : String(t3), p(n3, { __description__: a("", t3), __name__: a("", c(t3)) }));
          }, u(r2), f(r2), p(o.prototype, { constructor: a(r2), toString: a("", function() {
            return this.__name__;
          }) }), p(r2.prototype, { toString: a(function() {
            return "Symbol (" + s(this).__description__ + ")";
          }), valueOf: a(function() {
            return s(this);
          }) }), h(r2.prototype, r2.toPrimitive, a("", function() {
            var e3 = s(this);
            return "symbol" == typeof e3 ? e3 : e3.toString();
          })), h(r2.prototype, r2.toStringTag, a("c", "Symbol")), h(o.prototype, r2.toStringTag, a("c", r2.prototype[r2.toStringTag])), h(o.prototype, r2.toPrimitive, a("c", r2.prototype[r2.toPrimitive]));
        }, 8541: function(e2, t2, n2) {
          "use strict";
          var r2 = n2(5386);
          e2.exports = function(e3) {
            if (!r2(e3)) throw new TypeError(e3 + " is not a symbol");
            return e3;
          };
        }, 5573: function(e2) {
          "use strict";
          var t2 = /["'&<>]/;
          e2.exports = function(e3) {
            var n2, r2 = "" + e3, o = t2.exec(r2);
            if (!o) return r2;
            var i = "", a = 0, s = 0;
            for (a = o.index; a < r2.length; a++) {
              switch (r2.charCodeAt(a)) {
                case 34:
                  n2 = "&quot;";
                  break;
                case 38:
                  n2 = "&amp;";
                  break;
                case 39:
                  n2 = "&#39;";
                  break;
                case 60:
                  n2 = "&lt;";
                  break;
                case 62:
                  n2 = "&gt;";
                  break;
                default:
                  continue;
              }
              s !== a && (i += r2.substring(s, a)), s = a + 1, i += n2;
            }
            return s !== a ? i + r2.substring(s, a) : i;
          };
        }, 8370: function(e2, t2, n2) {
          "use strict";
          var r2, o, i, a, s, l, c, u = n2(1804), f = n2(1290), d = Function.prototype.apply, p = Function.prototype.call, h = Object.create, m = Object.defineProperty, g = Object.defineProperties, v = Object.prototype.hasOwnProperty, A = { configurable: true, enumerable: false, writable: true };
          o = function(e3, t3) {
            var n3, o2;
            return f(t3), o2 = this, r2.call(this, e3, n3 = function() {
              i.call(o2, e3, n3), d.call(t3, this, arguments);
            }), n3.__eeOnceListener__ = t3, this;
          }, a = function(e3) {
            var t3, n3, r3, o2, i2;
            if (v.call(this, "__ee__") && (o2 = this.__ee__[e3])) if ("object" == typeof o2) {
              for (n3 = arguments.length, i2 = new Array(n3 - 1), t3 = 1; t3 < n3; ++t3) i2[t3 - 1] = arguments[t3];
              for (o2 = o2.slice(), t3 = 0; r3 = o2[t3]; ++t3) d.call(r3, this, i2);
            } else switch (arguments.length) {
              case 1:
                p.call(o2, this);
                break;
              case 2:
                p.call(o2, this, arguments[1]);
                break;
              case 3:
                p.call(o2, this, arguments[1], arguments[2]);
                break;
              default:
                for (n3 = arguments.length, i2 = new Array(n3 - 1), t3 = 1; t3 < n3; ++t3) i2[t3 - 1] = arguments[t3];
                d.call(o2, this, i2);
            }
          }, s = { on: r2 = function(e3, t3) {
            var n3;
            return f(t3), v.call(this, "__ee__") ? n3 = this.__ee__ : (n3 = A.value = h(null), m(this, "__ee__", A), A.value = null), n3[e3] ? "object" == typeof n3[e3] ? n3[e3].push(t3) : n3[e3] = [n3[e3], t3] : n3[e3] = t3, this;
          }, once: o, off: i = function(e3, t3) {
            var n3, r3, o2, i2;
            if (f(t3), !v.call(this, "__ee__")) return this;
            if (!(n3 = this.__ee__)[e3]) return this;
            if ("object" == typeof (r3 = n3[e3])) for (i2 = 0; o2 = r3[i2]; ++i2) o2 !== t3 && o2.__eeOnceListener__ !== t3 || (2 === r3.length ? n3[e3] = r3[i2 ? 0 : 1] : r3.splice(i2, 1));
            else r3 !== t3 && r3.__eeOnceListener__ !== t3 || delete n3[e3];
            return this;
          }, emit: a }, l = { on: u(r2), once: u(o), off: u(i), emit: u(a) }, c = g({}, l), e2.exports = t2 = function(e3) {
            return null == e3 ? h(c) : g(Object(e3), l);
          }, t2.methods = s;
        }, 7145: function(e2) {
          var t2 = function() {
            if ("object" == typeof self && self) return self;
            if ("object" == typeof window && window) return window;
            throw new Error("Unable to resolve global `this`");
          };
          e2.exports = function() {
            if (this) return this;
            try {
              Object.defineProperty(Object.prototype, "__global__", { get: function() {
                return this;
              }, configurable: true });
            } catch (e3) {
              return t2();
            }
            try {
              return __global__ || t2();
            } finally {
              delete Object.prototype.__global__;
            }
          }();
        }, 7933: function(e2, t2, n2) {
          "use strict";
          e2.exports = n2(6344)() ? globalThis : n2(7145);
        }, 6344: function(e2) {
          "use strict";
          e2.exports = function() {
            return "object" == typeof globalThis && !!globalThis && globalThis.Array === Array;
          };
        }, 4063: function(e2) {
          "use strict";
          e2.exports = function e3(t2, n2) {
            if (t2 === n2) return true;
            if (t2 && n2 && "object" == typeof t2 && "object" == typeof n2) {
              if (t2.constructor !== n2.constructor) return false;
              var r2, o, i;
              if (Array.isArray(t2)) {
                if ((r2 = t2.length) != n2.length) return false;
                for (o = r2; 0 != o--; ) if (!e3(t2[o], n2[o])) return false;
                return true;
              }
              if (t2.constructor === RegExp) return t2.source === n2.source && t2.flags === n2.flags;
              if (t2.valueOf !== Object.prototype.valueOf) return t2.valueOf() === n2.valueOf();
              if (t2.toString !== Object.prototype.toString) return t2.toString() === n2.toString();
              if ((r2 = (i = Object.keys(t2)).length) !== Object.keys(n2).length) return false;
              for (o = r2; 0 != o--; ) if (!Object.prototype.hasOwnProperty.call(n2, i[o])) return false;
              for (o = r2; 0 != o--; ) {
                var a = i[o];
                if (!e3(t2[a], n2[a])) return false;
              }
              return true;
            }
            return t2 != t2 && n2 != n2;
          };
        }, 4578: function(e2) {
          e2.exports = function(e3, t2) {
            return (t2 = "number" == typeof t2 ? t2 : 1 / 0) ? function e4(n2, r2) {
              return n2.reduce(function(n3, o) {
                return Array.isArray(o) && r2 < t2 ? n3.concat(e4(o, r2 + 1)) : n3.concat(o);
              }, []);
            }(e3, 1) : Array.isArray(e3) ? e3.map(function(e4) {
              return e4;
            }) : e3;
          };
        }, 5590: function(e2) {
          var t2 = Array.isArray;
          e2.exports = function(e3) {
            return !(!e3 || "object" != typeof e3 || t2(e3) || Object.keys(e3).length);
          };
        }, 6961: function(e2, t2, n2) {
          var r2, o = function() {
            var e3 = String.fromCharCode, t3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$", r3 = {};
            function o2(e4, t4) {
              if (!r3[e4]) {
                r3[e4] = {};
                for (var n4 = 0; n4 < e4.length; n4++) r3[e4][e4.charAt(n4)] = n4;
              }
              return r3[e4][t4];
            }
            var i = { compressToBase64: function(e4) {
              if (null == e4) return "";
              var n4 = i._compress(e4, 6, function(e5) {
                return t3.charAt(e5);
              });
              switch (n4.length % 4) {
                default:
                case 0:
                  return n4;
                case 1:
                  return n4 + "===";
                case 2:
                  return n4 + "==";
                case 3:
                  return n4 + "=";
              }
            }, decompressFromBase64: function(e4) {
              return null == e4 ? "" : "" == e4 ? null : i._decompress(e4.length, 32, function(n4) {
                return o2(t3, e4.charAt(n4));
              });
            }, compressToUTF16: function(t4) {
              return null == t4 ? "" : i._compress(t4, 15, function(t5) {
                return e3(t5 + 32);
              }) + " ";
            }, decompressFromUTF16: function(e4) {
              return null == e4 ? "" : "" == e4 ? null : i._decompress(e4.length, 16384, function(t4) {
                return e4.charCodeAt(t4) - 32;
              });
            }, compressToUint8Array: function(e4) {
              for (var t4 = i.compress(e4), n4 = new Uint8Array(2 * t4.length), r4 = 0, o3 = t4.length; r4 < o3; r4++) {
                var a = t4.charCodeAt(r4);
                n4[2 * r4] = a >>> 8, n4[2 * r4 + 1] = a % 256;
              }
              return n4;
            }, decompressFromUint8Array: function(t4) {
              if (null == t4) return i.decompress(t4);
              for (var n4 = new Array(t4.length / 2), r4 = 0, o3 = n4.length; r4 < o3; r4++) n4[r4] = 256 * t4[2 * r4] + t4[2 * r4 + 1];
              var a = [];
              return n4.forEach(function(t5) {
                a.push(e3(t5));
              }), i.decompress(a.join(""));
            }, compressToEncodedURIComponent: function(e4) {
              return null == e4 ? "" : i._compress(e4, 6, function(e5) {
                return n3.charAt(e5);
              });
            }, decompressFromEncodedURIComponent: function(e4) {
              return null == e4 ? "" : "" == e4 ? null : (e4 = e4.replace(/ /g, "+"), i._decompress(e4.length, 32, function(t4) {
                return o2(n3, e4.charAt(t4));
              }));
            }, compress: function(t4) {
              return i._compress(t4, 16, function(t5) {
                return e3(t5);
              });
            }, _compress: function(e4, t4, n4) {
              if (null == e4) return "";
              var r4, o3, i2, a = {}, s = {}, l = "", c = "", u = "", f = 2, d = 3, p = 2, h = [], m = 0, g = 0;
              for (i2 = 0; i2 < e4.length; i2 += 1) if (l = e4.charAt(i2), Object.prototype.hasOwnProperty.call(a, l) || (a[l] = d++, s[l] = true), c = u + l, Object.prototype.hasOwnProperty.call(a, c)) u = c;
              else {
                if (Object.prototype.hasOwnProperty.call(s, u)) {
                  if (u.charCodeAt(0) < 256) {
                    for (r4 = 0; r4 < p; r4++) m <<= 1, g == t4 - 1 ? (g = 0, h.push(n4(m)), m = 0) : g++;
                    for (o3 = u.charCodeAt(0), r4 = 0; r4 < 8; r4++) m = m << 1 | 1 & o3, g == t4 - 1 ? (g = 0, h.push(n4(m)), m = 0) : g++, o3 >>= 1;
                  } else {
                    for (o3 = 1, r4 = 0; r4 < p; r4++) m = m << 1 | o3, g == t4 - 1 ? (g = 0, h.push(n4(m)), m = 0) : g++, o3 = 0;
                    for (o3 = u.charCodeAt(0), r4 = 0; r4 < 16; r4++) m = m << 1 | 1 & o3, g == t4 - 1 ? (g = 0, h.push(n4(m)), m = 0) : g++, o3 >>= 1;
                  }
                  0 == --f && (f = Math.pow(2, p), p++), delete s[u];
                } else for (o3 = a[u], r4 = 0; r4 < p; r4++) m = m << 1 | 1 & o3, g == t4 - 1 ? (g = 0, h.push(n4(m)), m = 0) : g++, o3 >>= 1;
                0 == --f && (f = Math.pow(2, p), p++), a[c] = d++, u = String(l);
              }
              if ("" !== u) {
                if (Object.prototype.hasOwnProperty.call(s, u)) {
                  if (u.charCodeAt(0) < 256) {
                    for (r4 = 0; r4 < p; r4++) m <<= 1, g == t4 - 1 ? (g = 0, h.push(n4(m)), m = 0) : g++;
                    for (o3 = u.charCodeAt(0), r4 = 0; r4 < 8; r4++) m = m << 1 | 1 & o3, g == t4 - 1 ? (g = 0, h.push(n4(m)), m = 0) : g++, o3 >>= 1;
                  } else {
                    for (o3 = 1, r4 = 0; r4 < p; r4++) m = m << 1 | o3, g == t4 - 1 ? (g = 0, h.push(n4(m)), m = 0) : g++, o3 = 0;
                    for (o3 = u.charCodeAt(0), r4 = 0; r4 < 16; r4++) m = m << 1 | 1 & o3, g == t4 - 1 ? (g = 0, h.push(n4(m)), m = 0) : g++, o3 >>= 1;
                  }
                  0 == --f && (f = Math.pow(2, p), p++), delete s[u];
                } else for (o3 = a[u], r4 = 0; r4 < p; r4++) m = m << 1 | 1 & o3, g == t4 - 1 ? (g = 0, h.push(n4(m)), m = 0) : g++, o3 >>= 1;
                0 == --f && (f = Math.pow(2, p), p++);
              }
              for (o3 = 2, r4 = 0; r4 < p; r4++) m = m << 1 | 1 & o3, g == t4 - 1 ? (g = 0, h.push(n4(m)), m = 0) : g++, o3 >>= 1;
              for (; ; ) {
                if (m <<= 1, g == t4 - 1) {
                  h.push(n4(m));
                  break;
                }
                g++;
              }
              return h.join("");
            }, decompress: function(e4) {
              return null == e4 ? "" : "" == e4 ? null : i._decompress(e4.length, 32768, function(t4) {
                return e4.charCodeAt(t4);
              });
            }, _decompress: function(t4, n4, r4) {
              var o3, i2, a, s, l, c, u, f = [], d = 4, p = 4, h = 3, m = "", g = [], v = { val: r4(0), position: n4, index: 1 };
              for (o3 = 0; o3 < 3; o3 += 1) f[o3] = o3;
              for (a = 0, l = Math.pow(2, 2), c = 1; c != l; ) s = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = n4, v.val = r4(v.index++)), a |= (s > 0 ? 1 : 0) * c, c <<= 1;
              switch (a) {
                case 0:
                  for (a = 0, l = Math.pow(2, 8), c = 1; c != l; ) s = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = n4, v.val = r4(v.index++)), a |= (s > 0 ? 1 : 0) * c, c <<= 1;
                  u = e3(a);
                  break;
                case 1:
                  for (a = 0, l = Math.pow(2, 16), c = 1; c != l; ) s = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = n4, v.val = r4(v.index++)), a |= (s > 0 ? 1 : 0) * c, c <<= 1;
                  u = e3(a);
                  break;
                case 2:
                  return "";
              }
              for (f[3] = u, i2 = u, g.push(u); ; ) {
                if (v.index > t4) return "";
                for (a = 0, l = Math.pow(2, h), c = 1; c != l; ) s = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = n4, v.val = r4(v.index++)), a |= (s > 0 ? 1 : 0) * c, c <<= 1;
                switch (u = a) {
                  case 0:
                    for (a = 0, l = Math.pow(2, 8), c = 1; c != l; ) s = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = n4, v.val = r4(v.index++)), a |= (s > 0 ? 1 : 0) * c, c <<= 1;
                    f[p++] = e3(a), u = p - 1, d--;
                    break;
                  case 1:
                    for (a = 0, l = Math.pow(2, 16), c = 1; c != l; ) s = v.val & v.position, v.position >>= 1, 0 == v.position && (v.position = n4, v.val = r4(v.index++)), a |= (s > 0 ? 1 : 0) * c, c <<= 1;
                    f[p++] = e3(a), u = p - 1, d--;
                    break;
                  case 2:
                    return g.join("");
                }
                if (0 == d && (d = Math.pow(2, h), h++), f[u]) m = f[u];
                else {
                  if (u !== p) return null;
                  m = i2 + i2.charAt(0);
                }
                g.push(m), f[p++] = i2 + m.charAt(0), i2 = m, 0 == --d && (d = Math.pow(2, h), h++);
              }
            } };
            return i;
          }();
          void 0 === (r2 = (function() {
            return o;
          }).call(t2, n2, t2, e2)) || (e2.exports = r2);
        }, 8136: function(e2, t2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true });
          var n2 = /* @__PURE__ */ function() {
            function e3(e4, t3) {
              for (var n3 = 0; n3 < t3.length; n3++) {
                var r3 = t3[n3];
                r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
              }
            }
            return function(t3, n3, r3) {
              return n3 && e3(t3.prototype, n3), r3 && e3(t3, r3), t3;
            };
          }(), r2 = function() {
            function e3(t3) {
              !function(e4, t4) {
                if (!(e4 instanceof t4)) throw new TypeError("Cannot call a class as a function");
              }(this, e3), this.type = t3, this.handler = null, this.callback = this.callback.bind(this);
            }
            return n2(e3, [{ key: "callback", value: function(e4) {
              this.handler(e4);
            } }, { key: "bind", value: function(e4) {
              e4.addEventListener(this.type, this.callback);
            } }, { key: "unbind", value: function(e4) {
              e4.removeEventListener(this.type, this.callback);
            } }, { key: "update", value: function(e4) {
              this.handler = e4;
            } }]), e3;
          }();
          t2.default = r2;
        }, 9634: function(e2, t2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true });
          var n2 = /* @__PURE__ */ function() {
            function e3(e4, t3) {
              for (var n3 = 0; n3 < t3.length; n3++) {
                var r2 = t3[n3];
                r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e4, r2.key, r2);
              }
            }
            return function(t3, n3, r2) {
              return n3 && e3(t3.prototype, n3), r2 && e3(t3, r2), t3;
            };
          }();
          t2.FadeIn = function() {
            function e3() {
              !function(e4, t3) {
                if (!(e4 instanceof t3)) throw new TypeError("Cannot call a class as a function");
              }(this, e3), this.node = null;
            }
            return n2(e3, [{ key: "bind", value: function(e4) {
              this.node = e4;
            } }, { key: "unbind", value: function(e4) {
              this.node = null;
            } }, { key: "update", value: function() {
              var e4 = this, t3 = arguments.length <= 0 || void 0 === arguments[0] ? 300 : arguments[0];
              this.node.style.opacity = 0, this.node.style.transition = "opacity " + t3 + "ms", window.requestAnimationFrame(function() {
                return e4.node.style.opacity = 1;
              });
            } }]), e3;
          }();
        }, 5692: function(e2, t2) {
          "use strict";
          Object.defineProperty(t2, "__esModule", { value: true });
          var n2 = /* @__PURE__ */ function() {
            function e3(e4, t3) {
              for (var n3 = 0; n3 < t3.length; n3++) {
                var r3 = t3[n3];
                r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
              }
            }
            return function(t3, n3, r3) {
              return n3 && e3(t3.prototype, n3), r3 && e3(t3, r3), t3;
            };
          }();
          function r2(e3, t3) {
            if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
          }
          t2.Show = function() {
            function e3() {
              r2(this, e3), this.node = null;
            }
            return n2(e3, [{ key: "bind", value: function(e4) {
              this.node = e4;
            } }, { key: "unbind", value: function(e4) {
              this.node = null;
            } }, { key: "update", value: function(e4) {
              this.node.style.display = e4 ? "" : "none";
            } }]), e3;
          }(), t2.Hide = function() {
            function e3() {
              r2(this, e3), this.node = null;
            }
            return n2(e3, [{ key: "bind", value: function(e4) {
              this.node = e4;
            } }, { key: "unbind", value: function(e4) {
              this.node = null;
            } }, { key: "update", value: function(e4) {
              this.node.style.display = e4 ? "none" : "";
            } }]), e3;
          }();
        }, 4844: function(e2, t2, n2) {
          "use strict";
          var r2, o = n2(5692), i = n2(9634), a = (r2 = n2(8136)) && r2.__esModule ? r2 : { default: r2 };
          function s(e3, t3) {
            if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
          }
          function l(e3, t3) {
            if (!e3) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e3 : t3;
          }
          function c(e3, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
            e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
          }
          t2.Z = { show: o.Show, hide: o.Hide, fadeIn: i.FadeIn, onclick: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "click"));
            }
            return c(t3, e3), t3;
          }(a.default), oncontextmenu: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "contextmenu"));
            }
            return c(t3, e3), t3;
          }(a.default), ondblclick: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "dblclick"));
            }
            return c(t3, e3), t3;
          }(a.default), onmousedown: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "mousedown"));
            }
            return c(t3, e3), t3;
          }(a.default), onmouseenter: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "mouseenter"));
            }
            return c(t3, e3), t3;
          }(a.default), onmouseleave: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "mouseleave"));
            }
            return c(t3, e3), t3;
          }(a.default), onmousemove: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "mousemove"));
            }
            return c(t3, e3), t3;
          }(a.default), onmouseover: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "mouseover"));
            }
            return c(t3, e3), t3;
          }(a.default), onmouseout: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "mouseout"));
            }
            return c(t3, e3), t3;
          }(a.default), onmouseup: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "mouseup"));
            }
            return c(t3, e3), t3;
          }(a.default), onkeydown: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "keydown"));
            }
            return c(t3, e3), t3;
          }(a.default), onkeypress: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "keypress"));
            }
            return c(t3, e3), t3;
          }(a.default), onkeyup: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "keyup"));
            }
            return c(t3, e3), t3;
          }(a.default), onload: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "load"));
            }
            return c(t3, e3), t3;
          }(a.default), onresize: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "resize"));
            }
            return c(t3, e3), t3;
          }(a.default), onscroll: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "scroll"));
            }
            return c(t3, e3), t3;
          }(a.default), onblur: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "blur"));
            }
            return c(t3, e3), t3;
          }(a.default), onchange: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "change"));
            }
            return c(t3, e3), t3;
          }(a.default), onfocus: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "focus"));
            }
            return c(t3, e3), t3;
          }(a.default), onfocusin: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "focusin"));
            }
            return c(t3, e3), t3;
          }(a.default), onfocusout: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "focusout"));
            }
            return c(t3, e3), t3;
          }(a.default), oninput: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "input"));
            }
            return c(t3, e3), t3;
          }(a.default), onreset: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "reset"));
            }
            return c(t3, e3), t3;
          }(a.default), onselect: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "select"));
            }
            return c(t3, e3), t3;
          }(a.default), onsubmit: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "submit"));
            }
            return c(t3, e3), t3;
          }(a.default), ondrag: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "drag"));
            }
            return c(t3, e3), t3;
          }(a.default), ondragend: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "dragend"));
            }
            return c(t3, e3), t3;
          }(a.default), ondragenter: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "dragenter"));
            }
            return c(t3, e3), t3;
          }(a.default), ondragleave: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "dragleave"));
            }
            return c(t3, e3), t3;
          }(a.default), ondragover: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "dragover"));
            }
            return c(t3, e3), t3;
          }(a.default), ondragstart: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "dragstart"));
            }
            return c(t3, e3), t3;
          }(a.default), ondrop: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "drop"));
            }
            return c(t3, e3), t3;
          }(a.default), animationend: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "animationend"));
            }
            return c(t3, e3), t3;
          }(a.default), animationiteration: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "animationiteration"));
            }
            return c(t3, e3), t3;
          }(a.default), animationstart: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "animationstart"));
            }
            return c(t3, e3), t3;
          }(a.default), transitionend: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "webkitTransitionEnd"));
            }
            return c(t3, e3), t3;
          }(a.default), onmessage: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "message"));
            }
            return c(t3, e3), t3;
          }(a.default), onopen: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "open"));
            }
            return c(t3, e3), t3;
          }(a.default), onwheel: function(e3) {
            function t3() {
              return s(this, t3), l(this, Object.getPrototypeOf(t3).call(this, "wheel"));
            }
            return c(t3, e3), t3;
          }(a.default) };
        }, 5190: function(e2, t2, n2) {
          "use strict";
          var r2, o = (r2 = n2(7097)) && r2.__esModule ? r2 : { default: r2 }, i = n2(6282);
          o.default.prototype.on = function(e3, t3, n3) {
            var r3 = this, o2 = arguments.length <= 3 || void 0 === arguments[3] ? void 0 : arguments[3];
            this.delegates || (this.delegates = [], this.nodes.forEach(function(e4, t4) {
              if (8 === e4.nodeType) throw "Can not use event delegating with non-element nodes on first level.";
              r3.delegates[t4] = new i.Delegate(e4);
            })), this.delegates.forEach(function(r4) {
              return r4.on(e3, t3, n3, o2);
            });
          }, o.default.prototype.off = function() {
            var e3 = arguments.length <= 0 || void 0 === arguments[0] ? void 0 : arguments[0], t3 = arguments.length <= 1 || void 0 === arguments[1] ? void 0 : arguments[1], n3 = arguments.length <= 2 || void 0 === arguments[2] ? void 0 : arguments[2], r3 = arguments.length <= 3 || void 0 === arguments[3] ? void 0 : arguments[3];
            this.delegates.forEach(function(o2) {
              return o2.off(e3, t3, n3, r3);
            });
          };
        }, 5561: function(e2, t2, n2) {
          var r2 = n2(7097);
          function o() {
            r2.call(this);
            var e3 = this, t3 = document.createElement("span"), n3 = document.createTextNode(""), o2 = document.createComment("if"), l2 = {}, c2 = document.createElement("br"), u = document.createComment("for"), f = new r2.Map(), d = document.createComment("for"), p = new r2.Map();
            t3.appendChild(document.createTextNode('Exception in thread "main" ')), t3.appendChild(n3), t3.appendChild(o2), t3.setAttribute("class", "error-output"), this.__update__ = { fullName: function(e4) {
              n3.textContent = e4;
            }, message: function(t4) {
              r2.cond(e3, o2, l2, i, t4);
            }, stackTrace: function(t4) {
              r2.loop(e3, u, f, a, t4, { value: "stacktraceElement" });
            }, causes: function(t4) {
              r2.loop(e3, d, p, s, t4, { value: "cause" });
            } }, this.onUpdate = function(e4) {
              l2.ref && l2.ref.update(e4), f.forEach(function(t4) {
                t4.update(t4.__state__), t4.update(e4), t4.update(t4.__state__);
              }), p.forEach(function(t4) {
                t4.update(t4.__state__), t4.update(e4), t4.update(t4.__state__);
              });
            }, this.nodes = [t3, c2, u, d];
          }
          function i() {
            r2.call(this);
            var e3 = document.createTextNode("");
            this.__update__ = { message: function(t3) {
              e3.textContent = t3;
            } }, this.nodes = [document.createTextNode(": "), e3];
          }
          function a() {
            r2.call(this), this.__state__ = {};
            var e3, t3 = this, n3 = document.createElement("span"), o2 = document.createTextNode(""), i2 = document.createTextNode(""), a2 = document.createElement("span"), s2 = document.createTextNode(""), l2 = document.createTextNode(""), c2 = document.createElement("br");
            a2.appendChild(s2), a2.appendChild(document.createTextNode(":")), a2.appendChild(l2), a2.setAttribute("class", "stacktrace-link"), n3.appendChild(document.createTextNode(" at ")), n3.appendChild(o2), n3.appendChild(document.createTextNode(".")), n3.appendChild(i2), n3.appendChild(document.createTextNode(" (")), n3.appendChild(a2), n3.appendChild(document.createTextNode(") ")), n3.setAttribute("class", "stacktrace-element error-output"), this.__update__ = { stacktraceElement: function(n4) {
              o2.textContent = n4.className, i2.textContent = n4.methodName, s2.textContent = n4.fileName, l2.textContent = n4.lineNumber, e3.update(t3.parent.onStackTraceClick.bind(t3.parent, n4.fileName, n4.lineNumber));
            } }, this.onRender = function() {
              void 0 === e3 && (e3 = new t3.directives.onclick()), e3.bind(a2);
            }, this.onRemove = function(t4) {
              e3.unbind(a2);
            }, this.nodes = [n3, c2];
          }
          function s() {
            r2.call(this), this.__state__ = {};
            var e3 = this, t3 = document.createElement("span"), n3 = document.createTextNode(""), o2 = document.createComment("if"), i2 = {}, a2 = document.createElement("br"), s2 = document.createComment("for"), u = new r2.Map();
            t3.appendChild(document.createTextNode("Caused by: ")), t3.appendChild(n3), t3.appendChild(o2), t3.setAttribute("class", "error-output"), this.__update__ = { cause: function(t4) {
              n3.textContent = t4.fullName, r2.cond(e3, o2, i2, l, t4.message), r2.loop(e3, s2, u, c, t4.stackTrace, { value: "stacktraceElement" });
            } }, this.onUpdate = function(e4) {
              i2.ref && i2.ref.update(e4), u.forEach(function(t4) {
                t4.update(t4.__state__), t4.update(e4), t4.update(t4.__state__);
              });
            }, this.nodes = [t3, a2, s2];
          }
          function l() {
            r2.call(this);
            var e3 = document.createTextNode("");
            this.__update__ = { cause: function(t3) {
              e3.textContent = t3.message;
            } }, this.nodes = [document.createTextNode(": "), e3];
          }
          function c() {
            r2.call(this), this.__state__ = {};
            var e3 = document.createElement("span"), t3 = document.createTextNode(""), n3 = document.createTextNode(""), o2 = document.createTextNode(""), i2 = document.createTextNode(""), a2 = document.createElement("br");
            e3.appendChild(document.createTextNode("at ")), e3.appendChild(t3), e3.appendChild(document.createTextNode(" .")), e3.appendChild(n3), e3.appendChild(document.createTextNode("(")), e3.appendChild(o2), e3.appendChild(document.createTextNode(":")), e3.appendChild(i2), e3.appendChild(document.createTextNode(")")), e3.setAttribute("class", "stacktrace-element error-output"), this.__update__ = { stacktraceElement: function(e4) {
              t3.textContent = e4.className, n3.textContent = e4.methodName, o2.textContent = e4.fileName, i2.textContent = e4.lineNumber;
            } }, this.nodes = [e3, a2];
          }
          o.prototype = Object.create(r2.prototype), o.prototype.constructor = o, o.pool = [], o.prototype.update = function(e3) {
            void 0 !== e3.fullName && this.__update__.fullName(e3.fullName), void 0 !== e3.message && this.__update__.message(e3.message), void 0 !== e3.stackTrace && this.__update__.stackTrace(e3.stackTrace), void 0 !== e3.causes && this.__update__.causes(e3.causes), this.onUpdate(e3);
          }, i.prototype = Object.create(r2.prototype), i.prototype.constructor = i, i.pool = [], i.prototype.update = function(e3) {
            void 0 !== e3.message && this.__update__.message(e3.message);
          }, a.prototype = Object.create(r2.prototype), a.prototype.constructor = a, a.pool = [], a.prototype.update = function(e3) {
            void 0 !== e3.stacktraceElement && void 0 !== e3.__index__ && this.__update__.stacktraceElement(e3.stacktraceElement);
          }, s.prototype = Object.create(r2.prototype), s.prototype.constructor = s, s.pool = [], s.prototype.update = function(e3) {
            void 0 !== e3.cause && void 0 !== e3.__index__ && this.__update__.cause(e3.cause), this.onUpdate(e3);
          }, l.prototype = Object.create(r2.prototype), l.prototype.constructor = l, l.pool = [], l.prototype.update = function(e3) {
            void 0 !== e3.cause && this.__update__.cause(e3.cause);
          }, c.prototype = Object.create(r2.prototype), c.prototype.constructor = c, c.pool = [], c.prototype.update = function(e3) {
            void 0 !== e3.stacktraceElement && void 0 !== e3.__index__ && this.__update__.stacktraceElement(e3.stacktraceElement);
          }, e2.exports = o;
        }, 6618: function(e2, t2, n2) {
          var r2, o = n2(7097), i = (r2 = n2(1714)) && r2.__esModule ? r2.default : r2, a = function(e3, t3, n3) {
            var r3, o2 = t3.length, i2 = document.createElement("div");
            for (i2.innerHTML = n3; o2-- > 0; ) t3[o2].parentNode.removeChild(t3.pop());
            for (o2 = r3 = i2.childNodes.length - 1; r3 >= 0; r3--) t3.push(i2.childNodes[r3]);
            if (++o2, 8 == e3.nodeType) {
              if (!e3.parentNode) throw "Can not insert child view into parent node. You need append your view first and then update.";
              for (; o2-- > 0; ) e3.parentNode.insertBefore(t3[o2], e3);
            } else for (; o2-- > 0; ) e3.appendChild(t3[o2]);
          };
          function s() {
            o.call(this), this.__cache__ = {};
            var e3 = this, t3 = document.createElement("div"), n3 = document.createElement("div"), r3 = document.createComment("if"), i2 = {}, a2 = document.createElement("div"), s2 = document.createComment("if"), p2 = {}, h2 = document.createElement("textarea"), g2 = document.createElement("div"), A = document.createComment("if"), y = {}, b = document.createComment("if"), C = {}, x = {}, w = document.createComment("if"), k = {}, E = document.createComment("if"), _ = {};
            a2.appendChild(s2), a2.appendChild(h2), a2.setAttribute("class", "code-area "), g2.appendChild(A), g2.appendChild(b), g2.setAttribute("class", "js-code-output-executor "), n3.appendChild(r3), n3.appendChild(a2), n3.appendChild(g2), n3.setAttribute("class", "executable-fragment "), t3.appendChild(n3), t3.appendChild(w), t3.appendChild(E), t3.setAttribute("class", "executable-fragment-wrapper"), this.__update__ = { highlightOnly: function(t4) {
              o.cond(e3, r3, i2, l, !t4), o.cond(e3, w, k, m, !t4);
            }, isShouldBeFolded: function(t4) {
              o.cond(e3, s2, p2, c, t4);
            }, folded: function(e4) {
              a2.setAttribute("class", "code-area " + (e4 ? "_folded" : "_unfolded"));
            }, openConsole: function(t4) {
              o.cond(e3, A, y, u, t4);
            }, waitingForOutput: function(t4) {
              var n4;
              n4 = o.cond(e3, b, C, f, t4), o.cond(e3, b, x, d, !n4);
            }, theme: function(e4) {
              g2.setAttribute("class", "js-code-output-executor " + e4), n3.setAttribute("class", "executable-fragment " + e4);
            }, shorterHeight: function(t4) {
              o.cond(e3, E, _, v, t4);
            }, shorterHeight_theme: function(e4, n4) {
              t3.setAttribute("class", "executable-fragment-wrapper" + (n4 ? " theme-" + n4 + "-wrapper" : "") + (e4 ? " executable-fragment-wrapper_gutter" : ""));
            } }, this.onUpdate = function(e4) {
              i2.ref && i2.ref.update(e4), p2.ref && p2.ref.update(e4), y.ref && y.ref.update(e4), C.ref && C.ref.update(e4), x.ref && x.ref.update(e4), k.ref && k.ref.update(e4), _.ref && _.ref.update(e4);
            }, this.nodes = [t3];
          }
          function l() {
            o.call(this);
            var e3, t3 = this, n3 = document.createElement("div");
            n3.setAttribute("class", "run-button "), n3.setAttribute("data-track-run-id", ""), this.__update__ = { waitingForOutput: function(e4) {
              n3.setAttribute("class", "run-button " + (e4 ? "_disabled" : ""));
            }, dataTrackRunId: function(e4) {
              n3.setAttribute("data-track-run-id", e4 || "");
            } }, this.onRender = function() {
              void 0 === e3 && (e3 = new t3.directives.onclick()), e3.bind(n3), e3.update(t3.parent.execute.bind(t3.parent));
            }, this.onRemove = function(t4) {
              e3.unbind(n3);
            }, this.nodes = [n3];
          }
          function c() {
            o.call(this), this.__cache__ = {};
            var e3, t3, n3, r3 = this, i2 = document.createElement("div");
            i2.setAttribute("class", "fold-button  "), this.__update__ = { foldButtonHover_theme: function(e4, t4) {
              i2.setAttribute("class", "fold-button " + (e4 ? "_hover" : "") + " " + t4);
            } }, this.onRender = function() {
              void 0 === e3 && (e3 = new r3.directives.onclick()), e3.bind(i2), e3.update(r3.parent.onFoldButtonClick.bind(r3.parent)), void 0 === t3 && (t3 = new r3.directives.onmouseenter()), t3.bind(i2), t3.update(r3.parent.onFoldButtonMouseEnter.bind(r3.parent)), void 0 === n3 && (n3 = new r3.directives.onmouseleave()), n3.bind(i2), n3.update(r3.parent.onFoldButtonMouseLeave.bind(r3.parent));
            }, this.onRemove = function(r4) {
              e3.unbind(i2), t3.unbind(i2), n3.unbind(i2);
            }, this.nodes = [i2];
          }
          function u() {
            o.call(this);
            var e3, t3 = this, n3 = document.createElement("div");
            n3.setAttribute("class", "console-close "), this.__update__ = { theme: function(e4) {
              n3.setAttribute("class", "console-close " + e4);
            } }, this.onRender = function() {
              void 0 === e3 && (e3 = new t3.directives.onclick()), e3.bind(n3), e3.update(t3.parent.onConsoleCloseButtonEnter.bind(t3.parent));
            }, this.onRemove = function(t4) {
              e3.unbind(n3);
            }, this.nodes = [n3];
          }
          function f() {
            o.call(this);
            var e3 = document.createElement("div"), t3 = document.createElement("div");
            t3.setAttribute("class", "loader "), e3.appendChild(t3), e3.setAttribute("class", "output-wrapper "), this.__update__ = { theme: function(n3) {
              t3.setAttribute("class", "loader " + n3), e3.setAttribute("class", "output-wrapper " + n3);
            } }, this.nodes = [e3];
          }
          function d() {
            o.call(this), this.__cache__ = {};
            var e3 = this, t3 = document.createComment("if"), n3 = {};
            this.__update__ = { exception_output: function(r3, i2) {
              o.cond(e3, t3, n3, p, i2 && "" != i2 || r3);
            } }, this.onUpdate = function(e4) {
              n3.ref && n3.ref.update(e4);
            }, this.nodes = [t3];
          }
          function p() {
            o.call(this);
            var e3 = this, t3 = document.createElement("div"), n3 = document.createElement("div"), r3 = document.createComment("unsafe"), i2 = [], s2 = document.createComment("if"), l2 = {};
            n3.appendChild(r3), n3.appendChild(s2), n3.setAttribute("class", "code-output"), t3.appendChild(n3), t3.setAttribute("class", "output-wrapper "), this.__update__ = { output: function(e4) {
              a(r3, i2, e4);
            }, exception: function(t4) {
              o.cond(e3, s2, l2, h, t4);
            }, theme: function(e4) {
              t3.setAttribute("class", "output-wrapper " + e4);
            } }, this.onUpdate = function(e4) {
              l2.ref && l2.ref.update(e4);
            }, this.nodes = [t3];
          }
          function h() {
            o.call(this);
            var e3 = this, t3 = document.createComment("Exception"), n3 = {};
            this.__update__ = { exception: function(r3) {
              o.insert(e3, t3, n3, i, r3);
            } }, this.onRender = function() {
              o.insert(e3, t3, n3, i, { originalException: true, onExceptionClick: e3.parent.parent.parent.onExceptionClick.bind(e3.parent.parent.parent) });
            }, this.nodes = [t3];
          }
          function m() {
            o.call(this);
            var e3 = this, t3 = document.createElement("div"), n3 = document.createComment("if"), r3 = {}, i2 = document.createElement("span"), a2 = document.createTextNode(""), s2 = document.createElement("span"), l2 = document.createTextNode("");
            i2.appendChild(document.createTextNode("Target: ")), i2.appendChild(a2), i2.setAttribute("class", "compiler-info__target"), s2.appendChild(document.createTextNode("Running on v.")), s2.appendChild(l2), s2.setAttribute("class", "compiler-info__version"), t3.appendChild(n3), t3.appendChild(i2), t3.appendChild(s2), t3.setAttribute("class", "compiler-info"), t3.setAttribute("data-nosnippet", ""), this.__update__ = { crosslink: function(i3) {
              o.cond(e3, n3, r3, g, i3), t3.setAttribute("class", "compiler-info" + (i3 ? " compiler-info_crosslink" : ""));
            }, targetPlatform: function(e4) {
              a2.textContent = e4.printableName;
            }, compilerVersion: function(e4) {
              l2.textContent = e4;
            } }, this.onUpdate = function(e4) {
              r3.ref && r3.ref.update(e4);
            }, this.nodes = [t3];
          }
          function g() {
            o.call(this);
            var e3 = document.createElement("div"), t3 = document.createElement("a");
            t3.appendChild(document.createTextNode("Open in Playground →")), t3.setAttribute("class", "compiler-info__open-editor-link"), t3.setAttribute("target", "_blank"), t3.setAttribute("rel", "noopener noreferrer"), e3.appendChild(t3), e3.setAttribute("class", "compiler-info__open-editor"), this.__update__ = { crosslink: function(e4) {
              t3.setAttribute("href", e4);
            } }, this.nodes = [e3];
          }
          function v() {
            o.call(this);
            var e3, t3 = this, n3 = document.createElement("button");
            n3.appendChild(document.createTextNode("more")), n3.setAttribute("class", "executable-fragment-wrapper__shorter"), this.onRender = function() {
              void 0 === e3 && (e3 = new t3.directives.onclick()), e3.bind(n3), e3.update(t3.parent.onShorterClick.bind(t3.parent));
            }, this.onRemove = function(t4) {
              e3.unbind(n3);
            }, this.nodes = [n3];
          }
          s.prototype = Object.create(o.prototype), s.prototype.constructor = s, s.pool = [], s.prototype.update = function(e3) {
            void 0 !== e3.highlightOnly && this.__update__.highlightOnly(e3.highlightOnly), void 0 !== e3.isShouldBeFolded && this.__update__.isShouldBeFolded(e3.isShouldBeFolded), void 0 !== e3.folded && this.__update__.folded(e3.folded), void 0 !== e3.openConsole && this.__update__.openConsole(e3.openConsole), void 0 !== e3.waitingForOutput && this.__update__.waitingForOutput(e3.waitingForOutput), void 0 !== e3.theme && (this.__cache__.theme = e3.theme, this.__update__.theme(e3.theme)), void 0 !== e3.shorterHeight && (this.__cache__.shorterHeight = e3.shorterHeight, this.__update__.shorterHeight(e3.shorterHeight)), void 0 !== this.__cache__.shorterHeight && void 0 !== this.__cache__.theme && this.__update__.shorterHeight_theme(this.__cache__.shorterHeight, this.__cache__.theme), this.onUpdate(e3);
          }, l.prototype = Object.create(o.prototype), l.prototype.constructor = l, l.pool = [], l.prototype.update = function(e3) {
            void 0 !== e3.waitingForOutput && this.__update__.waitingForOutput(e3.waitingForOutput), void 0 !== e3.dataTrackRunId && this.__update__.dataTrackRunId(e3.dataTrackRunId);
          }, c.prototype = Object.create(o.prototype), c.prototype.constructor = c, c.pool = [], c.prototype.update = function(e3) {
            void 0 !== e3.foldButtonHover && (this.__cache__.foldButtonHover = e3.foldButtonHover), void 0 !== e3.theme && (this.__cache__.theme = e3.theme), void 0 !== this.__cache__.foldButtonHover && void 0 !== this.__cache__.theme && this.__update__.foldButtonHover_theme(this.__cache__.foldButtonHover, this.__cache__.theme);
          }, u.prototype = Object.create(o.prototype), u.prototype.constructor = u, u.pool = [], u.prototype.update = function(e3) {
            void 0 !== e3.theme && this.__update__.theme(e3.theme);
          }, f.prototype = Object.create(o.prototype), f.prototype.constructor = f, f.pool = [], f.prototype.update = function(e3) {
            void 0 !== e3.theme && this.__update__.theme(e3.theme);
          }, d.prototype = Object.create(o.prototype), d.prototype.constructor = d, d.pool = [], d.prototype.update = function(e3) {
            void 0 !== e3.exception && (this.__cache__.exception = e3.exception), void 0 !== e3.output && (this.__cache__.output = e3.output), void 0 !== this.__cache__.exception && void 0 !== this.__cache__.output && this.__update__.exception_output(this.__cache__.exception, this.__cache__.output), this.onUpdate(e3);
          }, p.prototype = Object.create(o.prototype), p.prototype.constructor = p, p.pool = [], p.prototype.update = function(e3) {
            void 0 !== e3.output && this.__update__.output(e3.output), void 0 !== e3.exception && this.__update__.exception(e3.exception), void 0 !== e3.theme && this.__update__.theme(e3.theme), this.onUpdate(e3);
          }, h.prototype = Object.create(o.prototype), h.prototype.constructor = h, h.pool = [], h.prototype.update = function(e3) {
            void 0 !== e3.exception && this.__update__.exception(e3.exception);
          }, m.prototype = Object.create(o.prototype), m.prototype.constructor = m, m.pool = [], m.prototype.update = function(e3) {
            void 0 !== e3.crosslink && this.__update__.crosslink(e3.crosslink), void 0 !== e3.targetPlatform && this.__update__.targetPlatform(e3.targetPlatform), void 0 !== e3.compilerVersion && this.__update__.compilerVersion(e3.compilerVersion), this.onUpdate(e3);
          }, g.prototype = Object.create(o.prototype), g.prototype.constructor = g, g.pool = [], g.prototype.update = function(e3) {
            void 0 !== e3.crosslink && this.__update__.crosslink(e3.crosslink);
          }, v.prototype = Object.create(o.prototype), v.prototype.constructor = v, v.pool = [], v.prototype.update = function(e3) {
          }, e2.exports = s;
        }, 7097: function(e2) {
          !function(t2) {
            function n2() {
              this.parent = null, this.nested = [], this.nodes = [], this.filters = null, this.directives = null, this.context = null, this.unbind = null, this.onRender = null, this.onUpdate = null, this.onRemove = null, this.noCache = false;
            }
            function r2() {
              this.items = /* @__PURE__ */ Object.create(null), this.length = 0, this.next = 0;
            }
            function o(e3, t3, n3, r3) {
              if (r3) {
                var o2 = { __index__: n3 };
                return o2[r3.value] = e3[n3], r3.key && (o2[r3.key] = n3), o2;
              }
              return e3[n3];
            }
            function i(e3, t3, n3, r3) {
              if (r3) {
                var o2 = { __index__: n3 };
                return o2[r3.value] = e3[t3[n3]], r3.key && (o2[r3.key] = t3[n3]), o2;
              }
              return e3[t3[n3]];
            }
            n2.render = function(e3, t3, n3) {
              var r3;
              return r3 = n3 && n3.noCache ? new e3() : e3.pool.pop() || new e3(), 8 == t3.nodeType ? r3.insertBefore(t3) : r3.appendTo(t3), n3 && (n3.parent && (r3.parent = n3.parent), n3.context && (r3.context = n3.context), n3.filters && (r3.filters = n3.filters), n3.directives && (r3.directives = n3.directives), n3.noCache && (r3.noCache = n3.noCache)), r3.onRender && r3.onRender(), r3;
            }, n2.prerender = function(e3, t3) {
              for (; t3--; ) e3.pool.push(new e3());
            }, n2.loop = function(e3, t3, r3, a, s, l) {
              var c, u, f, d, p, h, m = r3.length;
              for (c in Array.isArray(s) ? (p = o, h = s.length) : (p = i, h = (d = Object.keys(s)).length), f = m - h, r3.items) {
                if (!(f-- > 0)) break;
                r3.items[c].remove();
              }
              for (c in u = 0, r3.items) r3.items[c].__state__ = p(s, d, u, l), u++;
              for (u = m, f = h; u < f; u++) {
                var g = n2.render(a, t3, { parent: e3, context: e3.context, filters: e3.filters, directives: e3.directives, noCache: e3.noCache });
                e3.nested.push(g), c = r3.push(g), g.unbind = /* @__PURE__ */ function(e4) {
                  return function() {
                    r3.remove(e4);
                  };
                }(c), g.__state__ = p(s, d, u, l);
              }
            }, n2.cond = function(e3, t3, r3, o2, i2) {
              if (r3.ref) i2 || r3.ref.remove();
              else if (i2) {
                var a = n2.render(o2, t3, { parent: e3, context: e3.context, filters: e3.filters, directives: e3.directives, noCache: e3.noCache });
                e3.nested.push(a), r3.ref = a, a.unbind = function() {
                  r3.ref = null;
                };
              }
              return i2;
            }, n2.insert = function(e3, t3, r3, o2, i2) {
              if (r3.ref) r3.ref.update(i2);
              else {
                var a = n2.render(o2, t3, { parent: e3, context: e3.context, filters: e3.filters, directives: e3.directives, noCache: e3.noCache });
                e3.nested.push(a), r3.ref = a, a.unbind = function() {
                  r3.ref = null;
                }, a.update(i2);
              }
            }, n2.prototype.remove = function() {
              for (var e3 = this.nodes.length; e3--; ) this.nodes[e3].parentNode.removeChild(this.nodes[e3]);
              for (this.unbind && this.unbind(), e3 = this.nested.length; e3--; ) this.nested[e3].remove();
              this.parent && (e3 = this.parent.nested.indexOf(this), this.parent.nested.splice(e3, 1), this.parent = null), this.onRemove && this.onRemove(), this.noCache || this.constructor.pool.push(this);
            }, n2.prototype.appendTo = function(e3) {
              for (var t3 = 0, n3 = this.nodes.length; t3 < n3; t3++) e3.appendChild(this.nodes[t3]);
            }, n2.prototype.insertBefore = function(e3) {
              if (!e3.parentNode) throw new Error("Can not insert child view into parent node. You need append your view first and then update.");
              for (var t3 = 0, n3 = this.nodes.length; t3 < n3; t3++) e3.parentNode.insertBefore(this.nodes[t3], e3);
            }, n2.prototype.createDocument = function() {
              if (1 == this.nodes.length) return this.nodes[0];
              for (var e3 = t2.createDocumentFragment(), n3 = 0, r3 = this.nodes.length; n3 < r3; n3++) e3.appendChild(this.nodes[n3]);
              return e3;
            }, n2.prototype.querySelector = function(e3) {
              for (var t3 = 0; t3 < this.nodes.length; t3++) {
                if (this.nodes[t3].matches && this.nodes[t3].matches(e3)) return this.nodes[t3];
                if (8 === this.nodes[t3].nodeType) throw new Error("Can not use querySelector with non-element nodes on first level.");
                if (this.nodes[t3].querySelector) {
                  var n3 = this.nodes[t3].querySelector(e3);
                  if (n3) return n3;
                }
              }
              return null;
            }, r2.prototype.push = function(e3) {
              return this.items[this.next] = e3, this.length += 1, this.next += 1, this.next - 1;
            }, r2.prototype.remove = function(e3) {
              if (!(e3 in this.items)) throw new Error('You are trying to delete not existing element "' + e3 + '" form map.');
              delete this.items[e3], this.length -= 1;
            }, r2.prototype.forEach = function(e3) {
              for (var t3 in this.items) e3(this.items[t3]);
            }, n2.Map = r2, e2.exports = n2;
          }(window.document);
        }, 3379: function(e2) {
          "use strict";
          var t2 = [];
          function n2(e3) {
            for (var n3 = -1, r3 = 0; r3 < t2.length; r3++) if (t2[r3].identifier === e3) {
              n3 = r3;
              break;
            }
            return n3;
          }
          function r2(e3, r3) {
            for (var i = {}, a = [], s = 0; s < e3.length; s++) {
              var l = e3[s], c = r3.base ? l[0] + r3.base : l[0], u = i[c] || 0, f = "".concat(c, " ").concat(u);
              i[c] = u + 1;
              var d = n2(f), p = { css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5] };
              if (-1 !== d) t2[d].references++, t2[d].updater(p);
              else {
                var h = o(p, r3);
                r3.byIndex = s, t2.splice(s, 0, { identifier: f, updater: h, references: 1 });
              }
              a.push(f);
            }
            return a;
          }
          function o(e3, t3) {
            var n3 = t3.domAPI(t3);
            return n3.update(e3), function(t4) {
              if (t4) {
                if (t4.css === e3.css && t4.media === e3.media && t4.sourceMap === e3.sourceMap && t4.supports === e3.supports && t4.layer === e3.layer) return;
                n3.update(e3 = t4);
              } else n3.remove();
            };
          }
          e2.exports = function(e3, o2) {
            var i = r2(e3 = e3 || [], o2 = o2 || {});
            return function(e4) {
              e4 = e4 || [];
              for (var a = 0; a < i.length; a++) {
                var s = n2(i[a]);
                t2[s].references--;
              }
              for (var l = r2(e4, o2), c = 0; c < i.length; c++) {
                var u = n2(i[c]);
                0 === t2[u].references && (t2[u].updater(), t2.splice(u, 1));
              }
              i = l;
            };
          };
        }, 569: function(e2) {
          "use strict";
          var t2 = {};
          e2.exports = function(e3, n2) {
            var r2 = function(e4) {
              if (void 0 === t2[e4]) {
                var n3 = document.querySelector(e4);
                if (window.HTMLIFrameElement && n3 instanceof window.HTMLIFrameElement) try {
                  n3 = n3.contentDocument.head;
                } catch (e5) {
                  n3 = null;
                }
                t2[e4] = n3;
              }
              return t2[e4];
            }(e3);
            if (!r2) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            r2.appendChild(n2);
          };
        }, 609: function(e2) {
          "use strict";
          e2.exports = function(e3) {
            var t2 = document.createElement("style");
            return e3.setAttributes(t2, e3.attributes), e3.insert(t2, e3.options), t2;
          };
        }, 3565: function(e2, t2, n2) {
          "use strict";
          e2.exports = function(e3) {
            var t3 = n2.nc;
            t3 && e3.setAttribute("nonce", t3);
          };
        }, 7795: function(e2) {
          "use strict";
          e2.exports = function(e3) {
            if ("undefined" == typeof document) return { update: function() {
            }, remove: function() {
            } };
            var t2 = e3.insertStyleElement(e3);
            return { update: function(n2) {
              !function(e4, t3, n3) {
                var r2 = "";
                n3.supports && (r2 += "@supports (".concat(n3.supports, ") {")), n3.media && (r2 += "@media ".concat(n3.media, " {"));
                var o = void 0 !== n3.layer;
                o && (r2 += "@layer".concat(n3.layer.length > 0 ? " ".concat(n3.layer) : "", " {")), r2 += n3.css, o && (r2 += "}"), n3.media && (r2 += "}"), n3.supports && (r2 += "}");
                var i = n3.sourceMap;
                i && "undefined" != typeof btoa && (r2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t3.styleTagTransform(r2, e4, t3.options);
              }(t2, e3, n2);
            }, remove: function() {
              !function(e4) {
                if (null === e4.parentNode) return false;
                e4.parentNode.removeChild(e4);
              }(t2);
            } };
          };
        }, 6655: function(e2) {
          "use strict";
          e2.exports = function(e3, t2) {
            if (t2.styleSheet) t2.styleSheet.cssText = e3;
            else {
              for (; t2.firstChild; ) t2.removeChild(t2.firstChild);
              t2.appendChild(document.createTextNode(e3));
            }
          };
        }, 3413: function(e2) {
          e2.exports = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e %3ctitle%3eicons_all_sprite%3c/title%3e %3cg id='Layer_4' data-name='Layer 4'%3e %3cg%3e %3ccircle cx='8' cy='8' r='6' fill='%23e05219' opacity='0.9' style='isolation: isolate'/%3e %3cpath d='M8.99609,4.98828V6.48193a.4905.4905,0,0,1-.00976.09619L8.28174,9H7.71045L7.00586,6.57812A.44233.44233,0,0,1,7,6.521V5c0-.26465,0-.99023.47559-.99023h1.041C9,4.00977,8.99609,4.72363,8.99609,4.98828Zm-.10547,5.9329L8.42627,10.31a.47056.47056,0,0,0-.37354-.18943H7.94092a.47078.47078,0,0,0-.374.18943l-.46435.61117A.52557.52557,0,0,0,7,11.22882v.28184A.49088.49088,0,0,0,7.47607,12h1.041a.49312.49312,0,0,0,.479-.50638l.00049-.25447A.52333.52333,0,0,0,8.89062,10.92118Z' fill='%23fff'/%3e %3c/g%3e %3c/g%3e %3c/svg%3e";
        }, 57: function(e2) {
          e2.exports = "data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 31 19' enable-background='new 0 0 31 19' xml:space='preserve'%3e %3cg%3e %3cpath fill='%23FFFFFF' d='M21.5,19h-12C4.253,19,0,14.747,0,9.5v0C0,4.253,4.253,0,9.5,0h12C26.747,0,31,4.253,31,9.5v0 C31,14.747,26.747,19,21.5,19z' /%3e %3cpath class='data-fill' fill='%23d4d4d4' d='M21.5,1C26.187,1,30,4.813,30,9.5c0,4.687-3.813,8.5-8.5,8.5h-12C4.813,18,1,14.187,1,9.5 C1,4.813,4.813,1,9.5,1H21.5 M21.5,0h-12C4.253,0,0,4.253,0,9.5v0C0,14.747,4.253,19,9.5,19h12c5.247,0,9.5-4.253,9.5-9.5v0 C31,4.253,26.747,0,21.5,0L21.5,0z' /%3e %3c/g%3e %3cg%3e %3cg%3e %3crect x='10' y='9' transform='matrix(0.7071 0.7071 -0.7071 0.7071 11.2574 -8.1777)' fill='%23FFFFFF' width='11' height='1' /%3e %3cpolygon class='data-fill' fill='%23d4d4d4' points='11.964,5.257 11.257,5.964 19.036,13.743 19.743,13.036 11.964,5.257 ' /%3e %3c/g%3e %3cg%3e %3crect x='10' y='9' transform='matrix(-0.7071 0.7071 -0.7071 -0.7071 33.1777 5.2574)' fill='%23FFFFFF' width='11' height='1' /%3e %3cpolygon class='data-fill' fill='%23d4d4d4' points='19.036,5.257 11.257,13.036 11.964,13.743 19.743,5.964 19.036,5.257 ' /%3e %3c/g%3e %3c/g%3e %3c/svg%3e";
        }, 7190: function(e2) {
          e2.exports = "data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 31 19' enable-background='new 0 0 31 19' xml:space='preserve'%3e %3cg%3e %3cpath fill='%23FFFFFF' d='M21.5,19h-12C4.253,19,0,14.747,0,9.5v0C0,4.253,4.253,0,9.5,0h12C26.747,0,31,4.253,31,9.5v0 C31,14.747,26.747,19,21.5,19z' /%3e %3cpath class='data-fill' fill='%23f68322' d='M21.5,1C26.187,1,30,4.813,30,9.5c0,4.687-3.813,8.5-8.5,8.5h-12C4.813,18,1,14.187,1,9.5 C1,4.813,4.813,1,9.5,1H21.5 M21.5,0h-12C4.253,0,0,4.253,0,9.5v0C0,14.747,4.253,19,9.5,19h12c5.247,0,9.5-4.253,9.5-9.5v0 C31,4.253,26.747,0,21.5,0L21.5,0z' /%3e %3c/g%3e %3cg%3e %3cg%3e %3crect x='10' y='9' transform='matrix(0.7071 0.7071 -0.7071 0.7071 11.2574 -8.1777)' fill='%23FFFFFF' width='11' height='1' /%3e %3cpolygon class='data-fill' fill='%23f68322' points='11.964,5.257 11.257,5.964 19.036,13.743 19.743,13.036 11.964,5.257 ' /%3e %3c/g%3e %3cg%3e %3crect x='10' y='9' transform='matrix(-0.7071 0.7071 -0.7071 -0.7071 33.1777 5.2574)' fill='%23FFFFFF' width='11' height='1' /%3e %3cpolygon class='data-fill' fill='%23f68322' points='19.036,5.257 11.257,13.036 11.964,13.743 19.743,5.964 19.036,5.257 ' /%3e %3c/g%3e %3c/g%3e %3c/svg%3e";
        }, 1672: function(e2) {
          e2.exports = "data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 31 19' enable-background='new 0 0 31 19' xml:space='preserve'%3e %3cg%3e %3cpath fill='%232B2B2B' d='M21.5,19h-12C4.253,19,0,14.747,0,9.5v0C0,4.253,4.253,0,9.5,0h12C26.747,0,31,4.253,31,9.5v0 C31,14.747,26.747,19,21.5,19z'/%3e %3cpath class='data-fill' fill='%23EAEAEC' d='M21.5,1C26.187,1,30,4.813,30,9.5c0,4.687-3.813,8.5-8.5,8.5h-12C4.813,18,1,14.187,1,9.5 C1,4.813,4.813,1,9.5,1H21.5 M21.5,0h-12C4.253,0,0,4.253,0,9.5v0C0,14.747,4.253,19,9.5,19h12c5.247,0,9.5-4.253,9.5-9.5v0 C31,4.253,26.747,0,21.5,0L21.5,0z'/%3e %3c/g%3e %3cg%3e %3cg%3e %3crect x='10' y='9' transform='matrix(0.7071 0.7071 -0.7071 0.7071 11.2574 -8.1777)' fill='%23FFFFFF' width='11' height='1'/%3e %3cpolygon class='data-fill' fill='%23EAEAEC' points='11.964,5.257 11.257,5.964 19.036,13.743 19.743,13.036 11.964,5.257 '/%3e %3c/g%3e %3cg%3e %3crect x='10' y='9' transform='matrix(-0.7071 0.7071 -0.7071 -0.7071 33.1777 5.2574)' fill='%23FFFFFF' width='11' height='1'/%3e %3cpolygon class='data-fill' fill='%23EAEAEC' points='19.036,5.257 11.257,13.036 11.964,13.743 19.743,5.964 19.036,5.257 '/%3e %3c/g%3e %3c/g%3e %3c/svg%3e";
        }, 3053: function(e2) {
          e2.exports = "data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 31 19' enable-background='new 0 0 31 19' xml:space='preserve'%3e %3cg%3e %3cpath fill='%232B2B2B' d='M21.5,19h-12C4.253,19,0,14.747,0,9.5v0C0,4.253,4.253,0,9.5,0h12C26.747,0,31,4.253,31,9.5v0 C31,14.747,26.747,19,21.5,19z' /%3e %3cpath class='data-fill' fill='%23f68322' d='M21.5,1C26.187,1,30,4.813,30,9.5c0,4.687-3.813,8.5-8.5,8.5h-12C4.813,18,1,14.187,1,9.5 C1,4.813,4.813,1,9.5,1H21.5 M21.5,0h-12C4.253,0,0,4.253,0,9.5v0C0,14.747,4.253,19,9.5,19h12c5.247,0,9.5-4.253,9.5-9.5v0 C31,4.253,26.747,0,21.5,0L21.5,0z' /%3e %3c/g%3e %3cg%3e %3cg%3e %3crect x='10' y='9' transform='matrix(0.7071 0.7071 -0.7071 0.7071 11.2574 -8.1777)' fill='%23FFFFFF' width='11' height='1' /%3e %3cpolygon class='data-fill' fill='%23f68322' points='11.964,5.257 11.257,5.964 19.036,13.743 19.743,13.036 11.964,5.257 ' /%3e %3c/g%3e %3cg%3e %3crect x='10' y='9' transform='matrix(-0.7071 0.7071 -0.7071 -0.7071 33.1777 5.2574)' fill='%23FFFFFF' width='11' height='1' /%3e %3cpolygon class='data-fill' fill='%23f68322' points='19.036,5.257 11.257,13.036 11.964,13.743 19.743,5.964 19.036,5.257 ' /%3e %3c/g%3e %3c/g%3e %3c/svg%3e";
        }, 9356: function(e2) {
          e2.exports = "data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 31 19' enable-background='new 0 0 31 19' xml:space='preserve'%3e %3cg%3e %3cpath fill='%23FFFFFF' d='M21.5,19h-12C4.253,19,0,14.747,0,9.5v0C0,4.253,4.253,0,9.5,0h12C26.747,0,31,4.253,31,9.5v0 C31,14.747,26.747,19,21.5,19z' /%3e %3cpath class='data-fill' fill='%23d4d4d4' d='M21.5,1C26.187,1,30,4.813,30,9.5c0,4.687-3.813,8.5-8.5,8.5h-12C4.813,18,1,14.187,1,9.5 C1,4.813,4.813,1,9.5,1H21.5 M21.5,0h-12C4.253,0,0,4.253,0,9.5v0C0,14.747,4.253,19,9.5,19h12c5.247,0,9.5-4.253,9.5-9.5v0 C31,4.253,26.747,0,21.5,0L21.5,0z' /%3e %3c/g%3e %3cg%3e %3cg%3e %3crect x='10' y='9' fill='%23FFFFFF' width='11' height='1' /%3e %3cpolygon class='data-fill' fill='%23d4d4d4' points='21,9 10,9 10,10 21,10 21,9 ' /%3e %3c/g%3e %3cg%3e %3crect x='10' y='9' transform='matrix(-1.836970e-16 1 -1 -1.836970e-16 25 -6)' fill='%23FFFFFF' width='11' height='1' /%3e %3cpolygon class='data-fill' fill='%23d4d4d4' points='16,4 15,4 15,15 16,15 16,4 ' /%3e %3c/g%3e %3c/g%3e %3c/svg%3e";
        }, 7351: function(e2) {
          e2.exports = "data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 31 19' enable-background='new 0 0 31 19' xml:space='preserve'%3e %3cg%3e %3cpath fill='%23FFFFFF' d='M21.5,19h-12C4.253,19,0,14.747,0,9.5v0C0,4.253,4.253,0,9.5,0h12C26.747,0,31,4.253,31,9.5v0 C31,14.747,26.747,19,21.5,19z' /%3e %3cpath class='data-fill' fill='%23f68322' d='M21.5,1C26.187,1,30,4.813,30,9.5c0,4.687-3.813,8.5-8.5,8.5h-12C4.813,18,1,14.187,1,9.5 C1,4.813,4.813,1,9.5,1H21.5 M21.5,0h-12C4.253,0,0,4.253,0,9.5v0C0,14.747,4.253,19,9.5,19h12c5.247,0,9.5-4.253,9.5-9.5v0 C31,4.253,26.747,0,21.5,0L21.5,0z' /%3e %3c/g%3e %3cg%3e %3cg%3e %3crect x='10' y='9' fill='%23FFFFFF' width='11' height='1' /%3e %3cpolygon class='data-fill' fill='%23f68322' points='21,9 10,9 10,10 21,10 21,9 ' /%3e %3c/g%3e %3cg%3e %3crect x='10' y='9' transform='matrix(-1.836970e-16 1 -1 -1.836970e-16 25 -6)' fill='%23FFFFFF' width='11' height='1' /%3e %3cpolygon class='data-fill' fill='%23f68322' points='16,4 15,4 15,15 16,15 16,4 ' /%3e %3c/g%3e %3c/g%3e %3c/svg%3e";
        }, 9054: function(e2) {
          e2.exports = "data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 31 19' enable-background='new 0 0 31 19' xml:space='preserve'%3e %3cg%3e %3cpath fill='%232B2B2B' d='M21.5,19h-12C4.253,19,0,14.747,0,9.5v0C0,4.253,4.253,0,9.5,0h12C26.747,0,31,4.253,31,9.5v0 C31,14.747,26.747,19,21.5,19z'/%3e %3cpath class='data-fill' fill='%23ffffff' d='M21.5,1C26.187,1,30,4.813,30,9.5c0,4.687-3.813,8.5-8.5,8.5h-12C4.813,18,1,14.187,1,9.5 C1,4.813,4.813,1,9.5,1H21.5 M21.5,0h-12C4.253,0,0,4.253,0,9.5v0C0,14.747,4.253,19,9.5,19h12c5.247,0,9.5-4.253,9.5-9.5v0 C31,4.253,26.747,0,21.5,0L21.5,0z'/%3e %3c/g%3e %3cg%3e %3cg%3e %3crect x='10' y='9' fill='%23EAEAEC' width='11' height='1'/%3e %3cpolygon class='data-fill' fill='%23EAEAEC' points='21,9 10,9 10,10 21,10 21,9 '/%3e %3c/g%3e %3cg%3e %3crect x='10' y='9' transform='matrix(-1.836970e-16 1 -1 -1.836970e-16 25 -6)' fill='%23EAEAEC' width='11' height='1'/%3e %3cpolygon class='data-fill' fill='%23EAEAEC' points='16,4 15,4 15,15 16,15 16,4 '/%3e %3c/g%3e %3c/g%3e %3c/svg%3e";
        }, 4500: function(e2) {
          e2.exports = "data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 31 19' enable-background='new 0 0 31 19' xml:space='preserve'%3e %3cg%3e %3cpath fill='%232B2B2B' d='M21.5,19h-12C4.253,19,0,14.747,0,9.5v0C0,4.253,4.253,0,9.5,0h12C26.747,0,31,4.253,31,9.5v0 C31,14.747,26.747,19,21.5,19z' /%3e %3cpath class='data-fill' fill='%23f68322' d='M21.5,1C26.187,1,30,4.813,30,9.5c0,4.687-3.813,8.5-8.5,8.5h-12C4.813,18,1,14.187,1,9.5 C1,4.813,4.813,1,9.5,1H21.5 M21.5,0h-12C4.253,0,0,4.253,0,9.5v0C0,14.747,4.253,19,9.5,19h12c5.247,0,9.5-4.253,9.5-9.5v0 C31,4.253,26.747,0,21.5,0L21.5,0z' /%3e %3c/g%3e %3cg%3e %3cg%3e %3crect x='10' y='9' fill='%23EAEAEC' width='11' height='1' /%3e %3cpolygon class='data-fill' fill='%23f68322' points='21,9 10,9 10,10 21,10 21,9 ' /%3e %3c/g%3e %3cg%3e %3crect x='10' y='9' transform='matrix(-1.836970e-16 1 -1 -1.836970e-16 25 -6)' fill='%23EAEAEC' width='11' height='1' /%3e %3cpolygon class='data-fill' fill='%23f68322' points='16,4 15,4 15,15 16,15 16,4 ' /%3e %3c/g%3e %3c/g%3e %3c/svg%3e";
        }, 4929: function(e2) {
          e2.exports = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e %3ctitle%3eicons_all_sprite%3c/title%3e %3cg id='Layer_4' data-name='Layer 4'%3e %3cpolygon points='13.5 12.125 9.375 8 13.5 3.875 12.125 2.5 8 6.625 3.875 2.5 2.5 3.875 6.625 8 2.5 12.125 3.875 13.5 8 9.375 12.125 13.5 13.5 12.125' fill='%23ffffff' opacity='0.9'/%3e %3c/g%3e %3c/svg%3e";
        }, 2314: function(e2) {
          e2.exports = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e %3ctitle%3eicons_all_sprite%3c/title%3e %3cg id='Layer_4' data-name='Layer 4'%3e %3cg style='isolation: isolate'%3e %3ccircle cx='7.5' cy='7.5' r='6.5' fill='%23e05219'/%3e %3c/g%3e %3cpolygon points='10.328 9.621 8.207 7.5 10.328 5.379 9.621 4.672 7.5 6.793 5.379 4.672 4.672 5.379 6.793 7.5 4.672 9.621 5.379 10.328 7.5 8.207 9.621 10.328 10.328 9.621' fill='%23fff'/%3e %3c/g%3e %3c/svg%3e";
        }, 8529: function(e2) {
          e2.exports = "data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e %3ctitle%3eicons_all_sprite%3c/title%3e %3cg id='Layer_4' data-name='Layer 4'%3e %3ccircle cx='8' cy='8' r='7' fill='%234ca01f' opacity='0.9' style='isolation: isolate'/%3e %3cpolygon points='12.808 6.205 11.5 5.025 7.486 9.625 4.346 6.077 3.125 7.182 7.5 12 12.808 6.205' fill='%23fff'/%3e %3c/g%3e %3c/svg%3e";
        }, 7395: function(e2) {
          e2.exports = "data:image/svg+xml,%3csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 16.996 20.999' enable-background='new 0 0 16.996 20.999' xml:space='preserve'%3e %3cpolygon fill='%2338B058' points='16.996,10.499 0,20.999 0,0 '/%3e %3c/svg%3e";
        }, 6232: function(e2) {
          e2.exports = "data:image/svg+xml,%3csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M5 6L0 0H10L5 6Z' fill='%23afb1b3'/%3e %3c/svg%3e";
        }, 5618: function(e2) {
          "use strict";
          e2.exports = function(e3) {
            return null != e3;
          };
        }, 7921: function(e2, t2, n2) {
          e2.exports = n2(7185);
        }, 8450: function(e2, t2, n2) {
          e2.exports = n2(2742);
        }, 8428: function(e2, t2, n2) {
          e2.exports = n2(6981);
        }, 5366: function(e2, t2, n2) {
          e2.exports = n2(7036);
        }, 6919: function(e2, t2, n2) {
          e2.exports = n2(1343);
        }, 2680: function(e2, t2, n2) {
          e2.exports = n2(4511);
        }, 6243: function(e2, t2, n2) {
          e2.exports = n2(8613);
        }, 8433: function(e2, t2, n2) {
          e2.exports = n2(8056);
        }, 9529: function(e2, t2, n2) {
          e2.exports = n2(7794);
        }, 3473: function(e2, t2, n2) {
          e2.exports = n2(112);
        }, 3755: function(e2, t2, n2) {
          e2.exports = n2(8318);
        }, 5579: function(e2, t2, n2) {
          e2.exports = n2(25);
        }, 2013: function(e2, t2, n2) {
          e2.exports = n2(2392);
        }, 8167: function(e2, t2, n2) {
          "use strict";
          function r2(e3, t3) {
            if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
          }
          n2.d(t2, { Z: function() {
            return r2;
          } });
        }, 1314: function(e2, t2, n2) {
          "use strict";
          n2.d(t2, { Z: function() {
            return a;
          } });
          var r2 = n2(3391), o = n2(4660);
          function i(e3, t3) {
            for (var n3 = 0; n3 < t3.length; n3++) {
              var i2 = t3[n3];
              i2.enumerable = i2.enumerable || false, i2.configurable = true, "value" in i2 && (i2.writable = true), r2(e3, (0, o.Z)(i2.key), i2);
            }
          }
          function a(e3, t3, n3) {
            return t3 && i(e3.prototype, t3), n3 && i(e3, n3), r2(e3, "prototype", { writable: false }), e3;
          }
        }, 600: function(e2, t2, n2) {
          "use strict";
          n2.d(t2, { Z: function() {
            return a;
          } });
          var r2 = n2(9137), o = n2(7036), i = n2(5002);
          function a() {
            return a = "undefined" != typeof Reflect && r2 ? r2.bind() : function(e3, t3, n3) {
              var r3 = function(e4, t4) {
                for (; !Object.prototype.hasOwnProperty.call(e4, t4) && null !== (e4 = (0, i.Z)(e4)); ) ;
                return e4;
              }(e3, t3);
              if (r3) {
                var a2 = o(r3, t3);
                return a2.get ? a2.get.call(arguments.length < 3 ? e3 : n3) : a2.value;
              }
            }, a.apply(this, arguments);
          }
        }, 5002: function(e2, t2, n2) {
          "use strict";
          n2.d(t2, { Z: function() {
            return i;
          } });
          var r2 = n2(433), o = n2(381);
          function i(e3) {
            return i = r2 ? o.bind() : function(e4) {
              return e4.__proto__ || o(e4);
            }, i(e3);
          }
        }, 1677: function(e2, t2, n2) {
          "use strict";
          n2.d(t2, { Z: function() {
            return s;
          } });
          var r2 = n2(5627), o = n2(3391), i = n2(433);
          function a(e3, t3) {
            return a = i ? i.bind() : function(e4, t4) {
              return e4.__proto__ = t4, e4;
            }, a(e3, t3);
          }
          function s(e3, t3) {
            if ("function" != typeof t3 && null !== t3) throw new TypeError("Super expression must either be null or a function");
            e3.prototype = r2(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), o(e3, "prototype", { writable: false }), t3 && a(e3, t3);
          }
        }, 2968: function(e2, t2, n2) {
          "use strict";
          n2.d(t2, { Z: function() {
            return o;
          } });
          var r2 = n2(3682);
          function o(e3, t3) {
            if (t3 && ("object" === (0, r2.Z)(t3) || "function" == typeof t3)) return t3;
            if (void 0 !== t3) throw new TypeError("Derived constructors may only return object or undefined");
            return function(e4) {
              if (void 0 === e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e4;
            }(e3);
          }
        }, 4660: function(e2, t2, n2) {
          "use strict";
          n2.d(t2, { Z: function() {
            return i;
          } });
          var r2 = n2(3682), o = n2(2038);
          function i(e3) {
            var t3 = function(e4, t4) {
              if ("object" !== (0, r2.Z)(e4) || null === e4) return e4;
              var n3 = e4[o];
              if (void 0 !== n3) {
                var i2 = n3.call(e4, "string");
                if ("object" !== (0, r2.Z)(i2)) return i2;
                throw new TypeError("@@toPrimitive must return a primitive value.");
              }
              return String(e4);
            }(e3);
            return "symbol" === (0, r2.Z)(t3) ? t3 : String(t3);
          }
        }, 3682: function(e2, t2, n2) {
          "use strict";
          n2.d(t2, { Z: function() {
            return i;
          } });
          var r2 = n2(25), o = n2(2392);
          function i(e3) {
            return i = "function" == typeof r2 && "symbol" == typeof o ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && "function" == typeof r2 && e4.constructor === r2 && e4 !== r2.prototype ? "symbol" : typeof e4;
            }, i(e3);
          }
        } }, t = {};
        function n(r2) {
          var o = t[r2];
          if (void 0 !== o) return o.exports;
          var i = t[r2] = { id: r2, exports: {} };
          return e[r2].call(i.exports, i, i.exports, n), i.exports;
        }
        n.m = e, n.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return n.d(t2, { a: t2 }), t2;
        }, n.d = function(e2, t2) {
          for (var r2 in t2) n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
        }, n.g = function() {
          if ("object" == typeof globalThis) return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e2) {
            if ("object" == typeof window) return window;
          }
        }(), n.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, n.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, n.b = document.baseURI || self.location.href, n.nc = void 0;
        var r = {};
        return function() {
          "use strict";
          n.d(r, { default: function() {
            return pn;
          } });
          var e2 = n(4511), t2 = n(8613);
          function o(n2, r2) {
            if (null == n2) return {};
            var o2, i2, a2 = function(e3, n3) {
              if (null == e3) return {};
              var r3, o3, i3 = {}, a3 = t2(e3);
              for (o3 = 0; o3 < a3.length; o3++) r3 = a3[o3], n3.indexOf(r3) >= 0 || (i3[r3] = e3[r3]);
              return i3;
            }(n2, r2);
            if (e2) {
              var s2 = e2(n2);
              for (i2 = 0; i2 < s2.length; i2++) o2 = s2[i2], r2.indexOf(o2) >= 0 || Object.prototype.propertyIsEnumerable.call(n2, o2) && (a2[o2] = n2[o2]);
            }
            return a2;
          }
          n(8837);
          var i = n(6243), a = n.n(i), s = n(2680), l = n.n(s), c = n(5366), u = n.n(c), f = n(6919), d = n.n(f), p = n(3391), h = n(4660);
          function m(e3, t3, n2) {
            return (t3 = (0, h.Z)(t3)) in e3 ? p(e3, t3, { value: n2, enumerable: true, configurable: true, writable: true }) : e3[t3] = n2, e3;
          }
          n(110), n(9371), n(1876), n(6059), n(9357), n(3946), n(1466);
          var g = n(9996), v = n.n(g), A = "darcula", y = "idea", b = "nocursor";
          function C(e3) {
            return Array.prototype.slice.call(e3, 0);
          }
          function x(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!e3 || !e3.attributes) return {};
            var n2 = C(e3.attributes).reduce(function(e4, t4) {
              var n3 = t4.name, r2 = t4.value;
              return -1 === n3.indexOf("data-") || (e4[n3.replace("data-", "").split("-").map(function(e5, t5) {
                return t5 ? "string" != typeof (n4 = e5) ? "" : n4.charAt(0).toUpperCase() + n4.slice(1) : e5;
                var n4;
              }).join("")] = r2), e4;
            }, {});
            return t3 ? v().all([N, n2 || {}]) : n2;
          }
          function w(e3) {
            var t3 = { "&lt;": "<", "&gt;": ">" }, n2 = e3;
            return a()(t3).forEach(function(e4) {
              n2 = n2.replace(new RegExp(t3[e4], "g"), e4);
            }), n2;
          }
          function k(e3) {
            return (e3.match(/\n/g) || []).length;
          }
          function E(e3) {
            return e3.replace(/^\s+|\s+$/g, "");
          }
          function _(e3) {
            return /^\s*$/.test(e3);
          }
          var S = function(e3, t3) {
            this.id = e3, this.printableName = t3;
          }, M = { JS: new S("js", "JavaScript"), JS_IR: new S("js-ir", "JavaScript IR"), WASM: new S("wasm", "Wasm"), JAVA: new S("java", "JVM"), JUNIT: new S("junit", "JUnit"), CANVAS: new S("canvas", "JavaScript(canvas)") };
          function B(e3) {
            var t3 = e3 && e3.toUpperCase().replace(/-/g, "_");
            return function(e4, t4) {
              return e4 in t4;
            }(t3, M) ? M[t3] : null;
          }
          function O(e3) {
            return e3 === M.JS || e3 === M.JS_IR || e3 === M.CANVAS || e3 === M.WASM;
          }
          function T(e3, t3) {
            var n2 = a()(e3);
            if (l()) {
              var r2 = l()(e3);
              t3 && (r2 = r2.filter(function(t4) {
                return u()(e3, t4).enumerable;
              })), n2.push.apply(n2, r2);
            }
            return n2;
          }
          var L, F = function(e3) {
            for (var t3 = 1; t3 < arguments.length; t3++) {
              var n2 = null != arguments[t3] ? arguments[t3] : {};
              t3 % 2 ? T(Object(n2), true).forEach(function(t4) {
                m(e3, t4, n2[t4]);
              }) : d() ? Object.defineProperties(e3, d()(n2)) : T(Object(n2)).forEach(function(t4) {
                Object.defineProperty(e3, t4, u()(n2, t4));
              });
            }
            return e3;
          }({}, x((L = document.getElementsByTagName("script"))[L.length - 1] || null)), P = { server: F.server || "https://api.kotlinlang.org/", COMPILE: function(e3, t3) {
            var n2;
            switch (e3) {
              case M.JAVA:
                n2 = "".concat(this.server, "/api/").concat(t3, "/compiler/run");
                break;
              case M.CANVAS:
              case M.JS:
                n2 = "".concat(this.server, "/api/").concat(t3, "/compiler/translate");
                break;
              case M.JS_IR:
                n2 = "".concat(this.server, "/api/").concat(t3, "/compiler/translate?ir=true");
                break;
              case M.WASM:
                n2 = "".concat(this.server, "/api/").concat(t3, "/compiler/translate?ir=true&compiler=wasm");
                break;
              case M.JUNIT:
                n2 = "".concat(this.server, "/api/").concat(t3, "/compiler/test");
                break;
              default:
                console.warn("Unknown ".concat(e3.id, " , used by default JVM")), n2 = "".concat(this.server, "/api/").concat(t3, "/compiler/run");
            }
            return n2;
          }, HIGHLIGHT: function(e3) {
            return "".concat(this.server, "/api/").concat(e3, "/compiler/highlight");
          }, COMPLETE: function(e3) {
            return "".concat(this.server, "/api/").concat(e3, "/compiler/complete");
          }, get VERSIONS() {
            return "".concat(this.server, "/versions");
          }, get JQUERY() {
            return "https://cdn.jsdelivr.net/npm/jquery@1/dist/jquery.min.js";
          }, get KOTLIN_JS() {
            return "https://cdn.jsdelivr.net/npm/kotlin@";
          } }, N = { selector: "code", compilerVersion: void 0 }, j = n(3682), I = n(3285);
          function D(e3, t3) {
            (null == t3 || t3 > e3.length) && (t3 = e3.length);
            for (var n2 = 0, r2 = new Array(t3); n2 < t3; n2++) r2[n2] = e3[n2];
            return r2;
          }
          var z = n(25), R = n(2392), W = n(7185);
          var H = n(8167), U = n(1314), V = (n(2850), n(2773), n(9529)), G = n.n(V), $ = n(8428), q = n.n($), K = n(3473), Z = n.n(K), Y = n(4631), J = n.n(Y), X = (n(1707), n(8991), n(9109), n(6690), n(7635), n(9762), n(3123), n(9589), n(4328), n(2801), n(4504), n(6154), n(6876), n(1149), n(7355), n(2037)), Q = n.n(X), ee = n(8433), te = n.n(ee), ne = n(8450), re = n.n(ne), oe = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== n.g && n.g || {}, ie = { searchParams: "URLSearchParams" in oe, iterable: "Symbol" in oe && "iterator" in Symbol, blob: "FileReader" in oe && "Blob" in oe && function() {
            try {
              return new Blob(), true;
            } catch (e3) {
              return false;
            }
          }(), formData: "FormData" in oe, arrayBuffer: "ArrayBuffer" in oe };
          if (ie.arrayBuffer) var ae = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], se = ArrayBuffer.isView || function(e3) {
            return e3 && ae.indexOf(Object.prototype.toString.call(e3)) > -1;
          };
          function le(e3) {
            if ("string" != typeof e3 && (e3 = String(e3)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e3) || "" === e3) throw new TypeError('Invalid character in header field name: "' + e3 + '"');
            return e3.toLowerCase();
          }
          function ce(e3) {
            return "string" != typeof e3 && (e3 = String(e3)), e3;
          }
          function ue(e3) {
            var t3 = { next: function() {
              var t4 = e3.shift();
              return { done: void 0 === t4, value: t4 };
            } };
            return ie.iterable && (t3[Symbol.iterator] = function() {
              return t3;
            }), t3;
          }
          function fe(e3) {
            this.map = {}, e3 instanceof fe ? e3.forEach(function(e4, t3) {
              this.append(t3, e4);
            }, this) : Array.isArray(e3) ? e3.forEach(function(e4) {
              if (2 != e4.length) throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + e4.length);
              this.append(e4[0], e4[1]);
            }, this) : e3 && Object.getOwnPropertyNames(e3).forEach(function(t3) {
              this.append(t3, e3[t3]);
            }, this);
          }
          function de(e3) {
            if (!e3._noBody) return e3.bodyUsed ? Promise.reject(new TypeError("Already read")) : void (e3.bodyUsed = true);
          }
          function pe(e3) {
            return new Promise(function(t3, n2) {
              e3.onload = function() {
                t3(e3.result);
              }, e3.onerror = function() {
                n2(e3.error);
              };
            });
          }
          function he(e3) {
            var t3 = new FileReader(), n2 = pe(t3);
            return t3.readAsArrayBuffer(e3), n2;
          }
          function me(e3) {
            if (e3.slice) return e3.slice(0);
            var t3 = new Uint8Array(e3.byteLength);
            return t3.set(new Uint8Array(e3)), t3.buffer;
          }
          function ge() {
            return this.bodyUsed = false, this._initBody = function(e3) {
              var t3;
              this.bodyUsed = this.bodyUsed, this._bodyInit = e3, e3 ? "string" == typeof e3 ? this._bodyText = e3 : ie.blob && Blob.prototype.isPrototypeOf(e3) ? this._bodyBlob = e3 : ie.formData && FormData.prototype.isPrototypeOf(e3) ? this._bodyFormData = e3 : ie.searchParams && URLSearchParams.prototype.isPrototypeOf(e3) ? this._bodyText = e3.toString() : ie.arrayBuffer && ie.blob && (t3 = e3) && DataView.prototype.isPrototypeOf(t3) ? (this._bodyArrayBuffer = me(e3.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : ie.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e3) || se(e3)) ? this._bodyArrayBuffer = me(e3) : this._bodyText = e3 = Object.prototype.toString.call(e3) : (this._noBody = true, this._bodyText = ""), this.headers.get("content-type") || ("string" == typeof e3 ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : ie.searchParams && URLSearchParams.prototype.isPrototypeOf(e3) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
            }, ie.blob && (this.blob = function() {
              var e3 = de(this);
              if (e3) return e3;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData) throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }), this.arrayBuffer = function() {
              if (this._bodyArrayBuffer) return de(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
              if (ie.blob) return this.blob().then(he);
              throw new Error("could not read as ArrayBuffer");
            }, this.text = function() {
              var e3 = de(this);
              if (e3) return e3;
              if (this._bodyBlob) return function(e4) {
                var t3 = new FileReader(), n2 = pe(t3), r2 = /charset=([A-Za-z0-9_-]+)/.exec(e4.type), o2 = r2 ? r2[1] : "utf-8";
                return t3.readAsText(e4, o2), n2;
              }(this._bodyBlob);
              if (this._bodyArrayBuffer) return Promise.resolve(function(e4) {
                for (var t3 = new Uint8Array(e4), n2 = new Array(t3.length), r2 = 0; r2 < t3.length; r2++) n2[r2] = String.fromCharCode(t3[r2]);
                return n2.join("");
              }(this._bodyArrayBuffer));
              if (this._bodyFormData) throw new Error("could not read FormData body as text");
              return Promise.resolve(this._bodyText);
            }, ie.formData && (this.formData = function() {
              return this.text().then(ye);
            }), this.json = function() {
              return this.text().then(JSON.parse);
            }, this;
          }
          fe.prototype.append = function(e3, t3) {
            e3 = le(e3), t3 = ce(t3);
            var n2 = this.map[e3];
            this.map[e3] = n2 ? n2 + ", " + t3 : t3;
          }, fe.prototype.delete = function(e3) {
            delete this.map[le(e3)];
          }, fe.prototype.get = function(e3) {
            return e3 = le(e3), this.has(e3) ? this.map[e3] : null;
          }, fe.prototype.has = function(e3) {
            return this.map.hasOwnProperty(le(e3));
          }, fe.prototype.set = function(e3, t3) {
            this.map[le(e3)] = ce(t3);
          }, fe.prototype.forEach = function(e3, t3) {
            for (var n2 in this.map) this.map.hasOwnProperty(n2) && e3.call(t3, this.map[n2], n2, this);
          }, fe.prototype.keys = function() {
            var e3 = [];
            return this.forEach(function(t3, n2) {
              e3.push(n2);
            }), ue(e3);
          }, fe.prototype.values = function() {
            var e3 = [];
            return this.forEach(function(t3) {
              e3.push(t3);
            }), ue(e3);
          }, fe.prototype.entries = function() {
            var e3 = [];
            return this.forEach(function(t3, n2) {
              e3.push([n2, t3]);
            }), ue(e3);
          }, ie.iterable && (fe.prototype[Symbol.iterator] = fe.prototype.entries);
          var ve = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
          function Ae(e3, t3) {
            if (!(this instanceof Ae)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            var n2, r2, o2 = (t3 = t3 || {}).body;
            if (e3 instanceof Ae) {
              if (e3.bodyUsed) throw new TypeError("Already read");
              this.url = e3.url, this.credentials = e3.credentials, t3.headers || (this.headers = new fe(e3.headers)), this.method = e3.method, this.mode = e3.mode, this.signal = e3.signal, o2 || null == e3._bodyInit || (o2 = e3._bodyInit, e3.bodyUsed = true);
            } else this.url = String(e3);
            if (this.credentials = t3.credentials || this.credentials || "same-origin", !t3.headers && this.headers || (this.headers = new fe(t3.headers)), this.method = (r2 = (n2 = t3.method || this.method || "GET").toUpperCase(), ve.indexOf(r2) > -1 ? r2 : n2), this.mode = t3.mode || this.mode || null, this.signal = t3.signal || this.signal || function() {
              if ("AbortController" in oe) return new AbortController().signal;
            }(), this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o2) throw new TypeError("Body not allowed for GET or HEAD requests");
            if (this._initBody(o2), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t3.cache && "no-cache" !== t3.cache)) {
              var i2 = /([?&])_=[^&]*/;
              i2.test(this.url) ? this.url = this.url.replace(i2, "$1_=" + (/* @__PURE__ */ new Date()).getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
            }
          }
          function ye(e3) {
            var t3 = new FormData();
            return e3.trim().split("&").forEach(function(e4) {
              if (e4) {
                var n2 = e4.split("="), r2 = n2.shift().replace(/\+/g, " "), o2 = n2.join("=").replace(/\+/g, " ");
                t3.append(decodeURIComponent(r2), decodeURIComponent(o2));
              }
            }), t3;
          }
          function be(e3, t3) {
            if (!(this instanceof be)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
            if (t3 || (t3 = {}), this.type = "default", this.status = void 0 === t3.status ? 200 : t3.status, this.status < 200 || this.status > 599) throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
            this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t3.statusText ? "" : "" + t3.statusText, this.headers = new fe(t3.headers), this.url = t3.url || "", this._initBody(e3);
          }
          Ae.prototype.clone = function() {
            return new Ae(this, { body: this._bodyInit });
          }, ge.call(Ae.prototype), ge.call(be.prototype), be.prototype.clone = function() {
            return new be(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new fe(this.headers), url: this.url });
          }, be.error = function() {
            var e3 = new be(null, { status: 200, statusText: "" });
            return e3.status = 0, e3.type = "error", e3;
          };
          var Ce = [301, 302, 303, 307, 308];
          be.redirect = function(e3, t3) {
            if (-1 === Ce.indexOf(t3)) throw new RangeError("Invalid status code");
            return new be(null, { status: t3, headers: { location: e3 } });
          };
          var xe = oe.DOMException;
          try {
            new xe();
          } catch (e3) {
            (xe = function(e4, t3) {
              this.message = e4, this.name = t3;
              var n2 = Error(e4);
              this.stack = n2.stack;
            }).prototype = Object.create(Error.prototype), xe.prototype.constructor = xe;
          }
          function we(e3, t3) {
            return new Promise(function(n2, r2) {
              var o2 = new Ae(e3, t3);
              if (o2.signal && o2.signal.aborted) return r2(new xe("Aborted", "AbortError"));
              var i2 = new XMLHttpRequest();
              function a2() {
                i2.abort();
              }
              if (i2.onload = function() {
                var e4, t4, r3 = { status: i2.status, statusText: i2.statusText, headers: (e4 = i2.getAllResponseHeaders() || "", t4 = new fe(), e4.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(e5) {
                  return 0 === e5.indexOf("\n") ? e5.substr(1, e5.length) : e5;
                }).forEach(function(e5) {
                  var n3 = e5.split(":"), r4 = n3.shift().trim();
                  if (r4) {
                    var o4 = n3.join(":").trim();
                    try {
                      t4.append(r4, o4);
                    } catch (e6) {
                      console.warn("Response " + e6.message);
                    }
                  }
                }), t4) };
                r3.url = "responseURL" in i2 ? i2.responseURL : r3.headers.get("X-Request-URL");
                var o3 = "response" in i2 ? i2.response : i2.responseText;
                setTimeout(function() {
                  n2(new be(o3, r3));
                }, 0);
              }, i2.onerror = function() {
                setTimeout(function() {
                  r2(new TypeError("Network request failed"));
                }, 0);
              }, i2.ontimeout = function() {
                setTimeout(function() {
                  r2(new TypeError("Network request failed"));
                }, 0);
              }, i2.onabort = function() {
                setTimeout(function() {
                  r2(new xe("Aborted", "AbortError"));
                }, 0);
              }, i2.open(o2.method, function(e4) {
                try {
                  return "" === e4 && oe.location.href ? oe.location.href : e4;
                } catch (t4) {
                  return e4;
                }
              }(o2.url), true), "include" === o2.credentials ? i2.withCredentials = true : "omit" === o2.credentials && (i2.withCredentials = false), "responseType" in i2 && (ie.blob ? i2.responseType = "blob" : ie.arrayBuffer && (i2.responseType = "arraybuffer")), t3 && "object" == typeof t3.headers && !(t3.headers instanceof fe || oe.Headers && t3.headers instanceof oe.Headers)) {
                var s2 = [];
                Object.getOwnPropertyNames(t3.headers).forEach(function(e4) {
                  s2.push(le(e4)), i2.setRequestHeader(e4, ce(t3.headers[e4]));
                }), o2.headers.forEach(function(e4, t4) {
                  -1 === s2.indexOf(t4) && i2.setRequestHeader(t4, e4);
                });
              } else o2.headers.forEach(function(e4, t4) {
                i2.setRequestHeader(t4, e4);
              });
              o2.signal && (o2.signal.addEventListener("abort", a2), i2.onreadystatechange = function() {
                4 === i2.readyState && o2.signal.removeEventListener("abort", a2);
              }), i2.send(void 0 === o2._bodyInit ? null : o2._bodyInit);
            });
          }
          we.polyfill = true, oe.fetch || (oe.fetch = we, oe.Headers = fe, oe.Request = Ae, oe.Response = be);
          var ke = n(4578), Ee = n.n(ke), _e = (n(6253), n(6108), n(5590)), Se = n.n(_e), Me = n(5573), Be = n.n(Me), Oe = "Access control exception due to security reasons in web playground", Te = "Unhandled JavaScript exception", Le = "&lt;", Fe = "&gt;", Pe = "FAIL", Ne = "Fail", je = "ERROR", Ie = "Error", De = "OK", ze = "Passed", Re = "".concat(Le, "errStream").concat(Fe, "BUG").concat(Le, "/errStream").concat(Fe), We = "".concat(Le, "errStream").concat(Fe, "Hey! It seems you just found a bug! 🐞\n") + "Please click <a href=http://kotl.in/issue target=_blank>here<a> to submit it to the issue tracker and one day we fix it, hopefully 😉\n" + "✅ Don't forget to attach code to the issue".concat(Le, "/errStream").concat(Fe, "\n");
          function He(e3, t3) {
            return w(e3).split(Re).join(We).split("".concat(Le, "outStream").concat(Fe)).join('<span class="standard-output '.concat(t3, '">')).split("".concat(Le, "/outStream").concat(Fe)).join("</span>").split("".concat(Le, "errStream").concat(Fe)).join('<span class="error-output '.concat(t3, '">')).split("".concat(Le, "/errStream").concat(Fe)).join("</span>");
          }
          function Ue(e3, t3, n2) {
            return '\n  <div class="console-block">\n    <span class="console-icon '.concat(e3.toLocaleLowerCase(), '"></span>\n    <div class="test-').concat(e3.toLocaleLowerCase(), '">').concat(e3, ": ").concat(t3).concat(n2 ? ": " + (r2 = { "&lt;": "&amp;lt;", "&gt;": "&amp;gt;" }, o2 = n2, a()(r2).forEach(function(e4) {
              o2 = o2.replace(new RegExp(r2[e4], "g"), e4);
            }), o2) : "", "</div>\n  </div>\n  ");
            var r2, o2;
          }
          function Ve(e3, t3) {
            return e3.reduce(function(e4, n2) {
              return e4 + '<div class="console-block">\n                        <span class="console-icon attention"></span>\n                        <div class="test-fail '.concat(t3, '">').concat(Be()(n2.message), "</div>\n                      </div>");
            }, "");
          }
          function Ge(e3) {
            return void 0 !== e3.cause && null != e3.cause ? [e3.cause].concat(Ge(e3.cause)) : [];
          }
          function $e(e3) {
            if (console && console.error(e3), null != e3.stack) {
              var t3 = e3.stack.toString().substr(0, e3.stack.toString().indexOf("at eval (<anonymous>)"));
              return "".concat(Te, ": ").concat(e3.message, " \n ").concat(t3);
            }
            return Te;
          }
          function qe(e3) {
            return null != e3.stackTrace && (null != e3.message ? e3.message = "".concat(Oe, ": \n ") + e3.message : e3.message = Oe, e3.stackTrace = e3.stackTrace.slice(e3.stackTrace.length - 1)), e3;
          }
          var Ke = ["line", "ch"];
          function Ze(e3, t3) {
            var n2 = a()(e3);
            if (l()) {
              var r2 = l()(e3);
              t3 && (r2 = r2.filter(function(t4) {
                return u()(e3, t4).enumerable;
              })), n2.push.apply(n2, r2);
            }
            return n2;
          }
          var Ye = { compilerVersions: null }, Je = "File.kt", Xe = function() {
            function e3() {
              (0, H.Z)(this, e3);
            }
            return (0, U.Z)(e3, null, [{ key: "getCompilerVersions", value: function() {
              return Ye.compilerVersions || (Ye.compilerVersions = we(P.VERSIONS).then(function(e4) {
                return e4.json();
              }).catch(function() {
                return Ye.compilerVersions = null;
              })), Ye.compilerVersions;
            } }, { key: "translateKotlinToJs", value: function(e4, t3, n2, r2, o2) {
              var i2 = "1.5.0", a2 = "1.9.0";
              return n2 === M.JS_IR && t3 < i2 ? Z().resolve({ output: "", errors: [{ severity: "ERROR", message: "JS IR compiler backend accessible only since ".concat(i2, " version") }], jsCode: "" }) : n2 === M.WASM && t3 < a2 ? Z().resolve({ output: "", errors: [{ severity: "ERROR", message: "Wasm compiler backend accessible only since ".concat(a2, " version") }], jsCode: "" }) : Qe(P.COMPILE(n2, t3), e4, 0, n2, r2, o2).then(function(e5) {
                return { output: "", errors: Ee()(te()(e5.errors)), jsCode: e5.jsCode, wasm: e5.wasm };
              });
            } }, { key: "executeKotlinCode", value: function(e4, t3, n2, r2, o2, i2, a2, s2) {
              return Qe(P.COMPILE(n2, t3), e4, 0, n2, r2, i2).then(function(e5) {
                var t4 = "", r3 = Ee()(te()(e5.errors)), i3 = r3.filter(function(e6) {
                  return "ERROR" === e6.severity;
                });
                if (i3.length > 0) t4 = Ve(i3, o2);
                else switch (n2) {
                  case M.JAVA:
                    e5.text && (t4 = He(e5.text, o2));
                    break;
                  case M.JUNIT:
                    t4 = e5.testResults ? function(e6, t5, n3) {
                      var r4 = "", o3 = 0, i4 = true;
                      if (Se()(e6)) return "No tests methods are found";
                      for (var a3 in e6) r4 += C(e6[a3]).reduce(function(e7, t6) {
                        switch (o3 += t6.executionTime / 1e3, t6.status !== je && t6.status !== Pe || (i4 = false), t6.status) {
                          case Pe:
                            return e7 + Ue(Ne, t6.methodName, t6.comparisonFailure.message);
                          case je:
                            return e7 + Ue(Ie, t6.methodName, t6.exception.message);
                          case De:
                            return e7 + Ue(ze, t6.methodName, "");
                        }
                      }, "");
                      return i4 && t5 && t5(), !i4 && n3 && n3(), '<div class="test-time">Total test time: '.concat(o3, "s</div>") + r4;
                    }(e5.testResults, a2, s2) : He(e5.text || "", o2);
                }
                var l2 = null;
                return null != e5.exception && ((l2 = function(e6) {
                  for (var t5 = e6; null != t5; ) {
                    if ("java.security.AccessControlException" === t5.fullName) return qe(t5);
                    t5 = t5.cause;
                  }
                  return e6;
                }(e5.exception)).causes = Ge(l2), l2.cause = void 0), { errors: r3, output: t4, exception: l2 };
              });
            } }, { key: "getAutoCompletion", value: function(e4, t3, n2, r2, i2, a2) {
              var s2 = t3.line, l2 = t3.ch, c2 = o(t3, Ke);
              Qe(P.COMPLETE(n2) + "?line=".concat(s2, "&ch=").concat(l2), e4, 0, r2, "", i2, c2).then(function(e5) {
                a2(e5);
              });
            } }, { key: "getHighlight", value: function(e4, t3, n2, r2) {
              return Qe(P.HIGHLIGHT(t3), e4, 0, n2, "", r2).then(function(e5) {
                return e5[Je] || [];
              });
            } }]), e3;
          }();
          function Qe(e3, t3, n2, r2, o2, i2, a2) {
            var s2 = function(e4) {
              for (var t4 = 1; t4 < arguments.length; t4++) {
                var n3 = null != arguments[t4] ? arguments[t4] : {};
                t4 % 2 ? Ze(Object(n3), true).forEach(function(t5) {
                  m(e4, t5, n3[t5]);
                }) : d() ? Object.defineProperties(e4, d()(n3)) : Ze(Object(n3)).forEach(function(t5) {
                  Object.defineProperty(e4, t5, u()(n3, t5));
                });
              }
              return e4;
            }({ args: o2, files: [et(t3, Je)].concat(i2.map(function(e4, t4) {
              return et(e4, "hiddenDependency".concat(t4, ".kt"));
            })), confType: r2.id }, a2 || {});
            return we(e3, { method: "POST", body: re()(s2), headers: { "Content-Type": "application/json; charset=utf-8" } }).then(function(e4) {
              return e4.json();
            });
          }
          function et(e3, t3) {
            return { name: t3, text: e3, publicId: "" };
          }
          var tt = n(3755), nt = n.n(tt), rt = n(600), ot = n(1677), it = n(2968), at = n(5002), st = (n(6620), n(856), n(2310), n(4063)), lt = n.n(st), ct = n(7097), ut = n.n(ct), ft = n(4844), dt = (n(5190), n(6618)), pt = n.n(dt), ht = n(7921), mt = n.n(ht), gt = n(5579), vt = n.n(gt), At = n(2013), yt = n.n(At), bt = n(3379), Ct = n.n(bt), xt = n(7795), wt = n.n(xt), kt = n(569), Et = n.n(kt), _t = n(3565), St = n.n(_t), Mt = n(609), Bt = n.n(Mt), Ot = n(6655), Tt = n.n(Ot), Lt = n(7997), Ft = {};
          function Pt(e3, t3) {
            (null == t3 || t3 > e3.length) && (t3 = e3.length);
            for (var n2 = 0, r2 = new Array(t3); n2 < t3; n2++) r2[n2] = e3[n2];
            return r2;
          }
          Ft.styleTagTransform = Tt(), Ft.setAttributes = St(), Ft.insert = Et().bind(null, "head"), Ft.domAPI = wt(), Ft.insertStyleElement = Bt(), Ct()(Lt.Z, Ft), Lt.Z && Lt.Z.locals && Lt.Z.locals;
          var Nt = function() {
            function e3(t3) {
              (0, H.Z)(this, e3), this.kotlinVersion = t3;
            }
            return (0, U.Z)(e3, [{ key: "executeJsCode", value: function(e4, t3, n2, r2, o2, i2, a2) {
              return new Promise((function(s2, l2) {
                return r2 === M.CANVAS && (this.iframe.style.display = "block", o2 && (this.iframe.style.height = "".concat(o2, "px"))), r2 === M.WASM ? Promise.resolve(this.executeWasm(e4, t3, i2, a2)).then(s2, l2) : Promise.resolve(this.execute(e4, n2, i2, a2, r2)).then(s2, l2);
              }).bind(this));
            } }, { key: "execute", value: function(e4, t3, n2, r2, o2) {
              return new Promise((function(i2, a2) {
                var s2, l2, c2, u2;
                if (s2 = (this.iframe.contentDocument || this.iframe.document).getElementsByTagName("script").length, l2 = o2 === M.JS_IR ? 1 : 2, s2 === t3.size + l2) try {
                  return c2 = this.iframe.contentWindow.eval(e4), i2(c2 ? '<span class="standard-output '.concat(n2, '">').concat(w(c2), "</span>") : "");
                } catch (e5) {
                  return r2 && r2(), u2 = $e(e5), i2('<span class="error-output">'.concat(u2, "</span>"));
                }
                return Promise.resolve(this.timeout(400)).then((function(s3) {
                  try {
                    return Promise.resolve(this.execute(e4, t3, n2, r2, o2)).then(i2, a2);
                  } catch (e5) {
                    return a2(e5);
                  }
                }).bind(this), a2);
              }).bind(this));
            } }, { key: "executeWasm", value: function(e4, t3, n2, r2) {
              return new Promise(function(o2, i2) {
                var a2, s2, l2, c2, u2 = function(e5) {
                  try {
                    return r2 && r2(), c2 = $e(e5), o2('<span class="error-output">'.concat(c2, "</span>"));
                  } catch (e6) {
                    return i2(e6);
                  }
                };
                try {
                  return a2 = '\n          class BufferedOutput {\n            constructor() {\n              this.buffer = ""\n            }\n          }\n          export const bufferedOutput = new BufferedOutput()\n          ' + e4.replace("instantiateStreaming(fetch(wasmFilePath)", "instantiate(Uint8Array.from(atob('" + t3 + "'), c => c.charCodeAt(0))").replace("const importObject = {", `js_code['kotlin.io.printImpl'] = (message) => bufferedOutput.buffer += message
js_code['kotlin.io.printlnImpl'] = (message) => {bufferedOutput.buffer += message;bufferedOutput.buffer += "\\n"}
const importObject = {`), Promise.resolve(import("data:text/javascript;base64," + btoa(a2))).then(function(e5) {
                    try {
                      return s2 = e5, Promise.resolve(s2.instantiate()).then(function(e6) {
                        try {
                          return l2 = s2.bufferedOutput.buffer, s2.bufferedOutput.buffer = "", o2(l2 ? '<span class="standard-output '.concat(n2, '">').concat(w(l2), "</span>") : "");
                        } catch (e7) {
                          return u2(e7);
                        }
                      }, u2);
                    } catch (e6) {
                      return u2(e6);
                    }
                  }, u2);
                } catch (e5) {
                  u2(e5);
                }
              });
            } }, { key: "timeout", value: function(e4) {
              return new (Z())(function(t3) {
                return setTimeout(t3, e4);
              });
            } }, { key: "reloadIframeScripts", value: function(e4, t3, n2) {
              void 0 !== this.iframe && t3.removeChild(this.iframe), this.iframe = document.createElement("iframe"), this.iframe.className = "k2js-iframe", t3.appendChild(this.iframe);
              var r2, o2, i2 = this.iframe.contentDocument || this.iframe.document;
              if (i2.open(), n2 === M.JS || n2 === M.CANVAS) {
                var a2 = P.KOTLIN_JS + "".concat((o2 = (r2 = this.kotlinVersion).match(/-M\d+$/)) && r2.substring(0, o2.index).match(/^\d+\.\d+$/) ? r2.substring(0, o2.index) + ".0" + o2[0] : r2, "/kotlin.js");
                i2.write("<script src='" + a2 + "'><\/script>");
              }
              if (n2 !== M.WASM) {
                var s2, l2 = function(e5, t4) {
                  var n3 = void 0 !== vt() && e5[yt()] || e5["@@iterator"];
                  if (!n3) {
                    if (Array.isArray(e5) || (n3 = function(e6, t5) {
                      if (e6) {
                        if ("string" == typeof e6) return Pt(e6, t5);
                        var n4 = Object.prototype.toString.call(e6).slice(8, -1);
                        return "Object" === n4 && e6.constructor && (n4 = e6.constructor.name), "Map" === n4 || "Set" === n4 ? mt()(e6) : "Arguments" === n4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n4) ? Pt(e6, t5) : void 0;
                      }
                    }(e5)) || t4 && e5 && "number" == typeof e5.length) {
                      n3 && (e5 = n3);
                      var r3 = 0, o3 = function() {
                      };
                      return { s: o3, n: function() {
                        return r3 >= e5.length ? { done: true } : { done: false, value: e5[r3++] };
                      }, e: function(e6) {
                        throw e6;
                      }, f: o3 };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                  }
                  var i3, a3 = true, s3 = false;
                  return { s: function() {
                    n3 = n3.call(e5);
                  }, n: function() {
                    var e6 = n3.next();
                    return a3 = e6.done, e6;
                  }, e: function(e6) {
                    s3 = true, i3 = e6;
                  }, f: function() {
                    try {
                      a3 || null == n3.return || n3.return();
                    } finally {
                      if (s3) throw i3;
                    }
                  } };
                }(e4);
                try {
                  for (l2.s(); !(s2 = l2.n()).done; ) {
                    var c2 = s2.value;
                    i2.write("<script src='" + c2 + "'><\/script>");
                  }
                } catch (e5) {
                  l2.e(e5);
                } finally {
                  l2.f();
                }
                n2 === M.JS_IR ? i2.write("<script>".concat("var kotlin = kotlin || {}; kotlin.isRewrite = true;", "<\/script>")) : i2.write("<script>".concat("if(kotlin.BufferedOutput!==undefined){kotlin.out = new kotlin.BufferedOutput()}else{kotlin.kotlin.io.output = new kotlin.kotlin.io.BufferedOutput()}", "<\/script>"));
              }
              i2.write('<body style="margin: 0; overflow: hidden;"></body>'), i2.close();
            } }]), e3;
          }(), jt = "//sampleStart", It = "//sampleEnd", Dt = "[mark]", zt = "[/mark]";
          function Rt(e3) {
            return e3.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
          }
          var Wt = n(296), Ht = n.n(Wt), Ut = "import", Vt = function() {
            function e3(t3) {
              (0, H.Z)(this, e3), this.completion = t3;
            }
            return (0, U.Z)(e3, [{ key: "render", value: function(e4, t3, n2) {
              var r2 = document.createElement("div"), o2 = document.createElement("div"), i2 = document.createElement("div");
              r2.setAttribute("class", "icon " + this.completion.icon), o2.setAttribute("class", "name"), i2.setAttribute("class", "tail"), o2.textContent = this.completion.displayText, i2.textContent = this.completion.tail, e4.appendChild(r2), e4.appendChild(o2), e4.appendChild(i2);
            } }, { key: "hint", value: function(e4, t3, n2) {
              !this.completion[Ut] || this.completion.hasOtherImports ? this.completeText(e4, this.completion.text) : this.addImport(e4);
            } }, { key: "completeText", value: function(e4, t3) {
              var n2 = e4.getCursor(), r2 = e4.getTokenAt(n2), o2 = { line: n2.line, ch: r2.start }, i2 = { line: n2.line, ch: r2.end }, a2 = r2.string.trim();
              if ([".", "", "(", ":"].includes(a2)) e4.replaceRange(t3, i2);
              else {
                var s2 = n2.ch - r2.start, l2 = a2.substring(0, s2).lastIndexOf("$"), c2 = a2.substring(0, l2 + 1) + t3 + a2.substring(s2, r2.string.length);
                e4.replaceRange(c2, o2, i2), e4.setCursor(n2.line, r2.start + l2 + this.completion.text.length + 1), c2.endsWith("(") && (e4.replaceRange(")", { line: n2.line, ch: r2.start + this.completion.text.length }), e4.execCommand("goCharLeft"));
              }
            } }, { key: "addImport", value: function(e4) {
              var t3 = this.findPackageLineAndFirstImportLine(e4), n2 = t3.packageLine, r2 = t3.importLine, o2 = "import " + this.completion[Ut] + "\n";
              if (-1 === r2) {
                -1 !== n2 && (o2 = "\n" + o2);
                var i2 = n2 + 1;
                _(e4.getLine(i2)) || (o2 += "\n"), e4.replaceRange(o2, { line: i2, ch: 0 });
                var a2 = this.completion.text.split("."), s2 = a2[a2.length - 1];
                this.completeText(e4, s2);
              } else e4.replaceRange(o2, { line: r2, ch: 0 });
            } }, { key: "findPackageLineAndFirstImportLine", value: function(e4) {
              for (var t3 = -1, n2 = -1, r2 = e4.getValue().split("\n"), o2 = 0; o2 < r2.length; ++o2) {
                var i2 = r2[o2];
                if (/^\s*package /.test(i2)) t3 = o2;
                else {
                  if (/^\s*import /.test(i2)) {
                    n2 = o2;
                    break;
                  }
                  if (!_(i2)) break;
                }
              }
              return { packageLine: t3, importLine: n2 };
            } }]), e3;
          }(), Gt = Vt;
          var $t = "import", qt = 500, Kt = "markPlaceholder", Zt = "gutter", Yt = "errors-and-warnings-gutter", Jt = "background", Xt = "label", Qt = function(e3) {
            (0, ot.Z)(o2, e3);
            var t3, n2, r2 = (t3 = o2, n2 = function() {
              if ("undefined" == typeof Reflect || !nt()) return false;
              if (nt().sham) return false;
              if ("function" == typeof Proxy) return true;
              try {
                return Boolean.prototype.valueOf.call(nt()(Boolean, [], function() {
                })), true;
              } catch (e4) {
                return false;
              }
            }(), function() {
              var e4, r3 = (0, at.Z)(t3);
              if (n2) {
                var o3 = (0, at.Z)(this).constructor;
                e4 = nt()(r3, arguments, o3);
              } else e4 = r3.apply(this, arguments);
              return (0, it.Z)(this, e4);
            });
            function o2() {
              return (0, H.Z)(this, o2), r2.apply(this, arguments);
            }
            return (0, U.Z)(o2, [{ key: "isShouldBeFolded", get: function() {
              return "" !== this.prefix.trim() || "" !== this.suffix.trim();
            } }, { key: "update", value: function(e4) {
              var t4, n3 = this, r3 = false, i2 = e4.targetPlatform;
              if (e4.compilerVersion && O(i2) && (this.jsExecutor = new Nt(e4.compilerVersion)), e4.shorterHeight || (this.codemirror.display.wrapper.style.maxHeight = ""), e4.code) {
                var a2 = e4.code;
                if (e4.from && e4.to && e4.to >= e4.from && e4.from > 0 && e4.to > 0) {
                  var s2 = a2.split("\n");
                  s2.splice(e4.from - 1, 0, jt), s2.splice(e4.to + 1, 0, It), a2 = s2.join("\n");
                }
                var l2 = a2.indexOf(jt), c2 = a2.indexOf(It);
                r3 = !e4.noneMarkers && l2 > -1 && c2 > -1, this.prefix = "", this.suffix = "", t4 = a2, this.canAddImport = true, r3 && (this.prefix = a2.substring(0, l2), this.canAddImport = this.prefixEmptyOrContainsOnlyImports(), this.suffix = a2.substring(c2 + 11), t4 = a2.substring(l2 + 13 + 1, c2 - 1)), this.suffix.endsWith("\n") && (this.suffix = this.suffix.substr(0, this.suffix.length - 1));
              } else if (this.state.folded) t4 = this.codemirror.getValue();
              else {
                var u2 = this.codemirror.getValue();
                t4 = u2.substring(this.prefix.length, u2.length - this.suffix.length);
              }
              if (this.state = v().all([this.state, e4, { isShouldBeFolded: this.isShouldBeFolded && e4.isFoldedButton }]), (0, rt.Z)((0, at.Z)(o2.prototype), "update", this).call(this, this.state), this.initialized) {
                if (this.showDiagnostics(e4.errors), void 0 === e4.folded) return;
              } else this.initializeCodeMirror(e4), this.initialized = true;
              if (this.state.folded) this.codemirror.setOption("lineNumbers", e4.lines && !r3), this.codemirror.setValue(t4), this.markPlaceHolders();
              else {
                this.codemirror.setOption("lineNumbers", true), this.codemirror.setValue(this.prefix + t4 + this.suffix), this.codemirror.markText({ line: 0, ch: 0 }, { line: k(this.prefix), ch: 0 }, { readOnly: true, inclusiveLeft: true, inclusiveRight: false }), this.codemirror.markText({ line: this.codemirror.lineCount() - k(this.suffix) - 1, ch: null }, { line: this.codemirror.lineCount() - 1, ch: null }, { readOnly: true, inclusiveLeft: false, inclusiveRight: true });
                var f2 = this.state.theme === A ? "unmodifiable-line-dark" : "unmodifiable-line";
                this.codemirror.operation(function() {
                  for (var e5 = 0; e5 < k(n3.prefix); e5++) n3.codemirror.addLineClass(e5, Jt, f2);
                  for (var t5 = n3.codemirror.lineCount() - k(n3.suffix); t5 < n3.codemirror.lineCount(); t5++) n3.codemirror.addLineClass(t5, Jt, f2);
                });
              }
              if (this.state.autoIndent || this.prefix && this.suffix) for (var d2 = 0; d2 < this.codemirror.lineCount(); d2++) this.codemirror.indentLine(d2);
              var p2 = this.state.shorterHeight;
              p2 && (this.codemirror.display.wrapper.getBoundingClientRect().height + 10 > p2 ? this.codemirror.display.wrapper.style.maxHeight = "".concat(p2, "px") : (0, rt.Z)((0, at.Z)(o2.prototype), "update", this).call(this, { shorterHeight: 0 }));
            } }, { key: "markPlaceHolders", value: function() {
              var e4 = this, t4 = this.getTaskRanges();
              this.codemirror.setValue(this.codemirror.getValue().replace(new RegExp(Rt(Dt), "g"), "").replace(new RegExp(Rt(zt), "g"), "")), t4.forEach(function(t5) {
                e4.codemirror.markText({ line: t5.line, ch: t5.ch }, { line: t5.line, ch: t5.ch + t5.length }, { className: Kt, startStyle: "markPlaceholder-start", endStyle: "markPlaceholder-end", handleMouseEvents: true });
              });
            } }, { key: "getTaskRanges", value: function() {
              for (var e4 = [], t4 = this.codemirror.getValue().split("\n"), n3 = 0; n3 < t4.length; n3++) for (var r3 = t4[n3]; r3.includes(Dt); ) {
                var o3 = r3.indexOf(Dt), i2 = (r3 = r3.replace(Dt, "")).indexOf(zt);
                r3 = r3.replace(zt, ""), e4.push({ line: n3, ch: o3, length: i2 - o3 });
              }
              return e4;
            } }, { key: "onFoldButtonMouseEnter", value: function() {
              this.state.foldButtonHover || this.update({ foldButtonHover: true });
            } }, { key: "onFoldButtonMouseLeave", value: function() {
              this.state.foldButtonHover && this.update({ foldButtonHover: false });
            } }, { key: "onConsoleCloseButtonEnter", value: function() {
              var e4 = this.state, t4 = e4.jsLibs, n3 = e4.onCloseConsole, r3 = e4.targetPlatform;
              O(r3) && this.jsExecutor.reloadIframeScripts(t4, this.getNodeForMountIframe(), r3), this.update({ output: "", openConsole: false, exception: null }), n3 && n3();
            } }, { key: "onExceptionClick", value: function(e4, t4) {
              this.codemirror.setCursor(t4 - 1, 0), this.codemirror.focus();
            } }, { key: "onFoldButtonClick", value: function() {
              this.update({ shorterHeight: 0 });
            } }, { key: "onShorterClick", value: function() {
              this.update({ shorterHeight: 0 });
            } }, { key: "execute", value: function() {
              var e4, t4 = this, n3 = this.state, r3 = n3.onOpenConsole, o3 = n3.targetPlatform, i2 = n3.waitingForOutput, a2 = n3.compilerVersion, s2 = n3.onRun, l2 = n3.onError, c2 = n3.args, u2 = n3.theme, f2 = n3.hiddenDependencies, d2 = n3.onTestPassed, p2 = n3.onTestFailed, h2 = n3.onCloseConsole, m2 = n3.jsLibs, g2 = n3.outputHeight, v2 = n3.getJsCode;
              i2 || (this.update({ shorterHeight: 0, waitingForOutput: true, openConsole: false }), r3 && r3(), s2 && s2(), (e4 = o3) === M.JAVA || e4 === M.JUNIT ? Xe.executeKotlinCode(this.getCode(), a2, o3, c2, u2, f2, d2, p2).then(function(e5) {
                e5.waitingForOutput = false, e5.output || e5.exception ? e5.openConsole = true : h2 && h2(), (e5.errors.length > 0 || e5.exception) && l2 && l2(), t4.update(e5);
              }, function(e5) {
                l2 && l2(), t4.update({ waitingForOutput: false, output: Ve([{ severity: "ERROR", message: e5.message }]), openConsole: true, exception: null });
              }) : (this.jsExecutor.reloadIframeScripts(m2, this.getNodeForMountIframe(), o3), Xe.translateKotlinToJs(this.getCode(), a2, o3, c2, f2).then(function(e5) {
                e5.waitingForOutput = false;
                var n4 = e5.jsCode, i3 = e5.wasm;
                delete e5.jsCode, v2 && v2(n4);
                var a3 = e5.errors.filter(function(e6) {
                  return "ERROR" === e6.severity;
                });
                a3.length > 0 ? (l2 && l2(), e5.output = Ve(a3), e5.openConsole = true, e5.exception = null, t4.update(e5)) : t4.jsExecutor.executeJsCode(n4, i3, m2, o3, g2, u2, l2).then(function(n5) {
                  n5 ? (e5.openConsole = true, e5.output = n5) : (e5.output = "", h2 && h2()), o3 === M.CANVAS && (r3 && r3(), e5.openConsole = true), e5.exception = null, t4.update(e5);
                });
              }, function(e5) {
                l2 && l2(), t4.update({ waitingForOutput: false, output: Ve([{ severity: "ERROR", message: e5.message }]), openConsole: true, exception: null });
              })));
            } }, { key: "getNodeForMountIframe", value: function() {
              return this.nodes[0].querySelector(".js-code-output-executor");
            } }, { key: "getCode", value: function() {
              return this.state.folded ? this.prefix + this.codemirror.getValue() + this.suffix : this.codemirror.getValue();
            } }, { key: "prefixEmptyOrContainsOnlyImports", value: function() {
              return this.prefix.split("\n").every(function(e4) {
                return /^\s*(package |import |$)/.test(e4);
              });
            } }, { key: "recalculatePosition", value: function(e4) {
              var t4 = { line: e4.line, ch: e4.ch };
              if (!this.state.folded) return t4;
              var n3 = (this.prefix.match(/\n/g) || []).length;
              return t4.line = e4.line - n3, t4.line < 0 ? (t4.line = 0, t4.ch = 0) : t4.line >= this.codemirror.lineCount() && (t4.line = this.codemirror.lineCount() - 1, t4.ch = null), t4;
            } }, { key: "showDiagnostics", value: function(e4) {
              var t4 = this;
              this.removeStyles(), void 0 !== e4 && e4.forEach(function(e5) {
                var n3 = e5.interval;
                if (null != n3) {
                  n3.start = t4.recalculatePosition(n3.start), n3.end = t4.recalculatePosition(n3.end);
                  var r3, o3, i2, s2 = (r3 = e5.message, o3 = { "<": "&amp;lt;", ">": "&amp;gt;", "&": "&amp;", " ": "%20" }, i2 = r3, a()(o3).forEach(function(e6) {
                    i2 = i2.replace(new RegExp(o3[e6], "g"), e6);
                  }), i2), l2 = e5.severity, c2 = !!e5.imports && 0 !== e5.imports.length;
                  if (t4.arrayClasses.push(t4.codemirror.markText(n3.start, n3.end, { className: "cm__" + e5.className, title: s2 })), c2 && (t4.importsSuggestions.push({ interval: n3, imports: e5.imports }), t4.arrayClasses.push(t4.codemirror.markText(n3.start, n3.end, { className: "cm__IMPORT" }))), null != t4.codemirror.lineInfo(n3.start.line) && null == t4.codemirror.lineInfo(n3.start.line).gutterMarkers) {
                    var u2 = document.createElement("div");
                    u2.className = l2 + Zt, u2.setAttribute(Xt, s2), t4.codemirror.setGutterMarker(n3.start.line, Yt, u2);
                  } else {
                    var f2 = t4.codemirror.lineInfo(n3.start.line).gutterMarkers[Yt];
                    f2.setAttribute(Xt, f2.getAttribute(Xt) + "\n".concat(s2)), -1 === f2.className.indexOf("ERRORgutter") && (f2.className = l2 + Zt);
                  }
                }
              });
            } }, { key: "removeStyles", value: function() {
              this.arrayClasses.forEach(function(e4) {
                return e4.clear();
              }), this.codemirror.clearGutter(Yt), this.importsSuggestions = [];
            } }, { key: "initializeCodeMirror", value: function() {
              var e4 = this, t4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n3 = this.nodes[0].getElementsByTagName("textarea")[0], r3 = t4.highlightOnly, o3 = { readOnly: r3, lineNumbers: false, mode: t4.mode, theme: t4.theme, matchBrackets: t4.matchBrackets, scrollbarStyle: t4.scrollbarStyle || "overlay", continueComments: true, autoCloseBrackets: true, indentUnit: t4.indent, viewportMargin: 1 / 0, foldGutter: true, gutters: [Yt, "CodeMirror-foldgutter"] };
              if (r3 && (o3.cursorBlinkRate = -1), this.codemirror = J().fromTextArea(n3, o3), !r3) {
                var i2 = function() {
                  var t5 = e4.state, n4 = t5.compilerVersion, r4 = t5.targetPlatform, o4 = t5.hiddenDependencies;
                  e4.removeStyles(), Xe.getHighlight(e4.getCode(), n4, r4, o4).then(function(t6) {
                    return e4.showDiagnostics(t6);
                  });
                }, a2 = function(t5) {
                  if (0 !== e4.importsSuggestions.length) {
                    var n4 = t5.getCursor(), r4 = t5.getTokenAt(n4), o4 = { start: { line: n4.line, ch: r4.start }, end: { line: n4.line, ch: r4.end } }, i3 = e4.importsSuggestions.filter(function(e5) {
                      return lt()(e5.interval, o4);
                    }).map(function(e5) {
                      return e5.imports;
                    }).flat(), a3 = e4.canAddImport;
                    if (0 !== i3.length) {
                      var s3 = { hint: function() {
                        return { from: t5.getDoc().getCursor(), to: t5.getDoc().getCursor(), list: i3.map(function(e5) {
                          return a3 || (e5[$t] = null), new Gt(e5);
                        }) };
                      } };
                      t5.showHint(s3);
                    }
                  }
                }, s2 = function(t5, n4) {
                  var r4 = t5.getCursor(), o4 = t5.getTokenAt(r4), i3 = e4.state.folded ? e4.prefix + t5.getValue() + e4.suffix : t5.getValue(), a3 = e4.state.folded ? { line: r4.line + e4.prefix.split("\n").length - 1, ch: r4.ch } : r4;
                  Xe.getAutoCompletion(i3, a3, e4.state.compilerVersion, e4.state.targetPlatform, e4.state.hiddenDependencies, function(e5) {
                    var i4 = t5.findWordAt({ line: r4.line, ch: r4.ch }).anchor.ch, a4 = t5.findWordAt({ line: r4.line, ch: r4.ch }).head.ch, l2 = t5.getRange({ line: r4.line, ch: i4 }, { line: r4.line, ch: a4 });
                    0 === e5.length && /^[a-zA-Z]+$/.test(l2) ? J().showHint(t5, J().hint.auto, { completeSingle: false }) : n4({ list: e5.map(function(e6) {
                      return s3 || (e6[$t] = null), new Gt(e6);
                    }), from: { line: r4.line, ch: o4.start }, to: { line: r4.line, ch: o4.end } });
                  });
                  var s3 = e4.canAddImport;
                };
                J().registerHelper("hint", "kotlin", s2), J().hint.kotlin.async = true, J().commands.autocomplete = function(e5) {
                  e5.showHint(e5);
                }, this.codemirror.setOption("hintOptions", { hint: s2 }), -1 !== window.navigator.appVersion.indexOf("Mac") ? this.codemirror.setOption("extraKeys", { "Cmd-Alt-L": "indentAuto", "Shift-Tab": "indentLess", "Ctrl-/": "toggleComment", "Cmd-[": false, "Cmd-]": false, "Ctrl-Space": "autocomplete", "Cmd-Alt-H": i2, "Cmd-Alt-Enter": Ht()(a2, qt) }) : this.codemirror.setOption("extraKeys", { "Ctrl-Alt-L": "indentAuto", "Shift-Tab": "indentLess", "Ctrl-/": "toggleComment", "Ctrl-[": false, "Ctrl-]": false, "Ctrl-Space": "autocomplete", "Ctrl-Alt-H": i2, "Ctrl-Alt-Enter": Ht()(a2, qt) }), this.codemirror.on("change", Ht()(function(t5) {
                  var n4 = e4.state, r4 = n4.onChange, o4 = n4.onFlyHighLight, i3 = n4.compilerVersion, a3 = n4.targetPlatform, s3 = n4.hiddenDependencies;
                  r4 && r4(t5.getValue()), e4.removeStyles(), o4 && Xe.getHighlight(e4.getCode(), i3, a3, s3).then(function(t6) {
                    return e4.showDiagnostics(t6);
                  });
                }, qt)), this.codemirror.on("keypress", Ht()(function(t5, n4) {
                  82 === n4.keyCode || n4.ctrlKey || e4.state.autoComplete && !t5.state.completionActive && J().showHint(t5, J().hint.kotlin, { completeSingle: false });
                }, qt)), this.codemirror.on("mousedown", function(e5, t5) {
                  var n4 = e5.coordsChar({ left: t5.pageX, top: t5.pageY });
                  if (0 !== n4.line || 0 !== n4.ch) {
                    var r4 = e5.findMarksAt(n4).find(function(e6) {
                      return e6.className === Kt;
                    });
                    if (null != r4) {
                      var o4 = r4.find();
                      e5.setSelection(o4.from, o4.to), e5.focus(), t5.preventDefault();
                    }
                  }
                });
              }
            } }, { key: "destroy", value: function() {
              this.canAddImport = false, this.importsSuggestions = [], this.arrayClasses = null, this.initialized = false, this.jsExecutor = false, this.state = null, this.codemirror.toTextArea(), this.off(), this.remove();
            } }], [{ key: "render", value: function(e4) {
              var t4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n3 = ut().render(o2, e4, { directives: ft.Z });
              n3.arrayClasses = [], n3.initialized = false, n3.state = { theme: "", code: "", foldButtonHover: false, folded: true, output: null }, n3.codemirror = new (J())(), n3.on("click", ".fold-button", function() {
                n3.update({ folded: !n3.state.folded });
              }), n3.on("keyup", function(e5) {
                -1 !== window.navigator.appVersion.indexOf("Mac") ? 82 === e5.keyCode && e5.ctrlKey && n3.execute() : 120 === e5.keyCode && e5.ctrlKey && n3.execute();
              });
              var r3 = t4.eventFunctions;
              return r3 && r3.getInstance && r3.getInstance(n3), n3;
            } }]), o2;
          }(pt()), en = n(6961), tn = n(8099), nn = {};
          nn.styleTagTransform = Tt(), nn.setAttributes = St(), nn.insert = Et().bind(null, "head"), nn.domAPI = wt(), nn.insertStyleElement = Bt(), Ct()(tn.Z, nn), tn.Z && tn.Z.locals && tn.Z.locals;
          var rn = "data-kotlin-playground-initialized", on = "indent", an = "data-highlight-only", sn = "from", ln = "args", cn = "text/x-kotlin", un = function() {
            function e3(t3) {
              var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = arguments.length > 2 ? arguments[2] : void 0;
              (0, H.Z)(this, e3);
              var o2 = "string" == typeof t3 ? document.querySelector(t3) : t3, i2 = !!n2.highlightOnly || (o2.getAttribute(an) === b ? o2.getAttribute(an) : o2.hasAttribute(an)), a2 = o2.hasAttribute("none-markers"), s2 = o2.hasAttribute(on) ? G()(o2.getAttribute(on)) : 4, l2 = o2.hasAttribute(sn) ? G()(o2.getAttribute(sn)) : null, c2 = o2.hasAttribute("to") ? G()(o2.getAttribute("to")) : null, u2 = this.getTheme(o2), f2 = o2.hasAttribute(ln) ? o2.getAttribute(ln) : "", d2 = this.getHiddenDependencies(o2), p2 = o2.getAttribute("data-output-height") || null, h2 = B(o2.getAttribute("data-target-platform")) || M.JAVA, m2 = o2.getAttribute("style"), g2 = this.getJsLibraries(o2, h2), A2 = "false" !== o2.getAttribute("folded-button"), y2 = "true" === o2.getAttribute("lines"), C2 = "true" === o2.getAttribute("highlight-on-fly"), x2 = "true" === o2.getAttribute("data-autocomplete"), w2 = "true" === o2.getAttribute("match-brackets"), k2 = "true" === o2.getAttribute("auto-indent"), _2 = o2.getAttribute("data-track-run-id"), S2 = o2.getAttribute("data-shorter-height"), O2 = o2.getAttribute("data-scrollbar-style"), T2 = this.getMode(o2), L2 = E(o2.textContent), F2 = v()(N, n2);
              T2 !== cn && i2 !== b && (i2 = true);
              var P2 = null, j2 = o2.getAttribute("data-crosslink");
              "enabled" !== j2 && ("disabled" === j2 || i2 || g2 && g2.size || d2 && d2.length > 0) || (P2 = function(e4, t4) {
                var n3 = { code: e4.replace(new RegExp(Rt(Dt), "g"), "").replace(new RegExp(Rt(zt), "g"), "").replace(new RegExp(Rt(jt), "g"), "").replace(new RegExp(Rt(It), "g"), "") };
                if (t4 && t4.targetPlatform) {
                  if (!t4.targetPlatform || !B(t4.targetPlatform)) throw new Error("Invalid target platform");
                  n3.targetPlatform = t4.targetPlatform;
                }
                return t4 && t4.compilerVersion && (n3.compilerVersion = t4.compilerVersion), "https://play.kotlinlang.org/editor/v1/".concat(encodeURIComponent((0, en.compressToBase64)(JSON.stringify(n3))));
              }(L2, { code: L2, targetPlatform: h2.id, compilerVersion: F2.compilerVersion }));
              var I2 = G()(S2, 10) || 0;
              o2.style.display = "none", o2.setAttribute(rn, "true");
              var D2, z2, R2 = document.createElement("div");
              D2 = R2, (z2 = o2).parentNode.insertBefore(D2, z2.nextSibling);
              var W2 = Qt.render(R2, { eventFunctions: r2 });
              W2.update(q()({ code: L2, lines: y2, theme: u2, indent: s2, args: f2, mode: T2, crosslink: P2, matchBrackets: w2, from: l2, to: c2, autoComplete: x2, hiddenDependencies: d2, compilerVersion: F2.compilerVersion, noneMarkers: a2, onFlyHighLight: C2, autoIndent: k2, highlightOnly: i2, targetPlatform: h2, jsLibs: g2, isFoldedButton: A2, dataTrackRunId: _2, shorterHeight: I2, outputHeight: p2, scrollbarStyle: O2 }, r2)), this.config = F2, this.node = R2, this.targetNode = o2, this.targetNodeStyle = m2, this.view = W2, o2.KotlinPlayground = this, r2 && r2.callback && r2.callback(o2, R2);
            }
            return (0, U.Z)(e3, [{ key: "getHiddenDependencies", value: function(e4) {
              return C(e4.getElementsByClassName("hidden-dependency")).reduce(function(e5, t3) {
                return t3.parentNode.removeChild(t3), [].concat(function(e6) {
                  if (I(e6)) return D(e6);
                }(n2 = e5) || function(e6) {
                  if (void 0 !== z && null != e6[R] || null != e6["@@iterator"]) return W(e6);
                }(n2) || function(e6, t4) {
                  if (e6) {
                    if ("string" == typeof e6) return D(e6, t4);
                    var n3 = Object.prototype.toString.call(e6).slice(8, -1);
                    return "Object" === n3 && e6.constructor && (n3 = e6.constructor.name), "Map" === n3 || "Set" === n3 ? W(e6) : "Arguments" === n3 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n3) ? D(e6, t4) : void 0;
                  }
                }(n2) || function() {
                  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }(), [E(t3.textContent)]);
                var n2;
              }, []);
            } }, { key: "getJsLibraries", value: function(e4, t3) {
              if (O(t3)) {
                if (t3 === M.WASM) return new (Q())();
                var n2 = e4.getAttribute("data-js-libs"), r2 = new (Q())(P.JQUERY.split());
                if (n2) {
                  var o2 = new RegExp("https?://.+$");
                  n2.replace(" ", "").split(",").filter(function(e5) {
                    return o2.test(e5);
                  }).forEach(function(e5) {
                    return r2.add(e5);
                  });
                }
                return r2;
              }
            } }, { key: "getTheme", value: function(e4) {
              var t3 = e4.getAttribute("theme");
              return t3 && t3 !== A && t3 !== y && console.warn("Custom theme '".concat(t3, "' requires custom css by developer, you might use default values for reduce size – ").concat(A, " or ").concat(y, ".")), t3 || "default";
            } }, { key: "getMode", value: function(e4) {
              switch (e4.getAttribute("mode")) {
                case "java":
                  return "text/x-java";
                case "c":
                  return "text/x-c";
                case "js":
                  return "text/javascript";
                case "groovy":
                  return "text/x-groovy";
                case "xml":
                  return "text/html";
                case "shell":
                  return "text/x-sh";
                case "obj-c":
                  return "text/x-objectivec";
                case "swift":
                  return "text/x-swift";
                default:
                  return cn;
              }
            } }, { key: "destroy", value: function() {
              this.config = null, this.node = null, this.view.destroy();
              var e4 = this.targetNode;
              null !== this.targetNodeStyle ? e4.style = this.targetNodeStyle : e4.style = "", e4.removeAttribute(rn), delete e4.KotlinPlayground;
            } }, { key: "isInited", value: function() {
              var e4 = this.targetNode, t3 = e4 && e4.getAttribute(rn);
              return t3 && "true" === t3;
            } }], [{ key: "create", value: function(t3, n2) {
              var r2;
              if ("string" == typeof t3) r2 = C(document.querySelectorAll(t3));
              else if (t3 instanceof Node) r2 = [t3];
              else if (t3 instanceof NodeList == 0) throw new Error("'target' type should be string|Node|NodeList, ".concat((0, j.Z)(t3), " given"));
              return 0 === r2.length ? Z().resolve([]) : Xe.getCompilerVersions().then(function(t4) {
                var o2 = [];
                return r2.forEach(function(r3) {
                  var i2 = x(r3, true), a2 = i2.minCompilerVersion, s2 = null, l2 = null;
                  if ("" !== r3.textContent.trim() && "true" !== r3.getAttribute(rn)) if (t4) {
                    t4.sort(function(e4, t5) {
                      var n3 = e4.version, r4 = t5.version;
                      return n3 < r4 ? -1 : n3 > r4 ? 1 : 0;
                    });
                    var c2 = t4.map(function(e4) {
                      return e4.version;
                    });
                    c2.includes(i2.version) ? l2 = i2.version : c2.includes(n2.version) ? l2 = n2.version : (t4.forEach(function(e4) {
                      e4.latestStable && (s2 = e4.version);
                    }), l2 = s2), a2 && (l2 = a2 > s2 ? t4[t4.length - 1].version : s2), o2.push(new e3(r3, { compilerVersion: l2 }, n2));
                  } else console.error("Cann't get kotlin version from server"), o2.push(new e3(r3, { highlightOnly: true }));
                }), o2;
              });
            } }]), e3;
          }(), fn = ".d-editor-preview";
          function dn() {
            var e3 = window.KotlinPlayground, t3 = document.querySelector(".d-editor-input.ember-text-area"), n2 = document.querySelector(fn);
            t3 && n2 && t3.addEventListener("keydown", Ht()(function() {
              C(n2.querySelectorAll(".lang-run-kotlin")).forEach(function(t4) {
                var n3 = t4.KotlinPlayground;
                n3 && n3.destroy(), e3(t4);
              });
            }, 300));
          }
          function pn(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return P.server = t3.server || P.server, un.create(e3, t3);
          }
          (0, n(2702).polyfill)(), pn.default = pn, pn.discourse = function(e3, t3) {
            return dn(), pn(e3, t3);
          };
          var hn = F.selector, mn = F.discourseSelector, gn = o(F, ["selector", "discourseSelector"]);
          (hn || mn) && document.addEventListener("DOMContentLoaded", function() {
            mn ? (pn.discourse(mn, gn), function(e3, t3) {
              var n2 = setInterval(function() {
                var t4 = document.querySelector(e3);
                t4 && (clearInterval(n2), dn());
              }, 100);
            }(fn)) : pn(hn, gn);
          });
        }(), r.default;
      }();
    });
  }
});
export default require_playground_min();
/*! Bundled license information:

kotlin-playground/dist/playground.min.js:
  (*! For license information please see playground.min.js.LICENSE.txt *)
*/
//# sourceMappingURL=kotlin-playground.js.map
