// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.

! function(a, b) {
	var c = {},
		d = {},
		e = {},
		f = null;
	! function(a, b) {
		function c(a) {
			if("number" == typeof a) return a;
			var b = {};
			for(var c in a) b[c] = a[c];
			return b
		}

		function d() {
			this._delay = 0, this._endDelay = 0, this._fill = "none", this._iterationStart = 0, this._iterations = 1, this._duration = 0, this._playbackRate = 1, this._direction = "normal", this._easing = "linear"
		}

		function e(b, c, e) {
			var f = new d;
			return c && (f.fill = "both", f.duration = "auto"), "number" != typeof b || isNaN(b) ? void 0 !== b && Object.getOwnPropertyNames(b).forEach(function(c) {
				if("auto" != b[c]) {
					if(("number" == typeof f[c] || "duration" == c) && ("number" != typeof b[c] || isNaN(b[c]))) return;
					if("fill" == c && -1 == t.indexOf(b[c])) return;
					if("direction" == c && -1 == u.indexOf(b[c])) return;
					if("playbackRate" == c && 1 !== b[c] && a.isDeprecated("AnimationEffectTiming.playbackRate", "2014-11-28", "Use Animation.playbackRate instead.")) return;
					f[c] = b[c]
				}
			}) : f.duration = b, f
		}

		function f(a) {
			return "number" == typeof a && (a = isNaN(a) ? {
				duration: 0
			} : {
				duration: a
			}), a
		}

		function g(b, c) {
			b = a.numericTimingToObject(b);
			var d = e(b, c);
			return d._easingFunction = j(d.easing), d
		}

		function h(a, b, c, d) {
			return 0 > a || a > 1 || 0 > c || c > 1 ? D : function(e) {
				function f(a, b, c) {
					return 3 * a * (1 - c) * (1 - c) * c + 3 * b * (1 - c) * c * c + c * c * c
				}
				if(0 == e || 1 == e) return e;
				for(var g = 0, h = 1;;) {
					var i = (g + h) / 2,
						j = f(a, c, i);
					if(Math.abs(e - j) < .001) return f(b, d, i);
					e > j ? g = i : h = i
				}
			}
		}

		function i(a, b) {
			return function(c) {
				if(c >= 1) return 1;
				var d = 1 / a;
				return c += b * d, c - c % d
			}
		}

		function j(a) {
			z || (z = document.createElement("div").style), z.animationTimingFunction = "", z.animationTimingFunction = a, a = z.animationTimingFunction;
			var b = B.exec(a);
			if(b) return h.apply(this, b.slice(1).map(Number));
			var c = C.exec(a);
			if(c) return i(Number(c[1]), {
				start: v,
				middle: w,
				end: x
			}[c[2]]);
			var d = y[a];
			return d ? d : D
		}

		function k(a) {
			return Math.abs(l(a) / a.playbackRate)
		}

		function l(a) {
			return a.duration * a.iterations
		}

		function m(a, b, c) {
			return null == b ? E : b < c.delay ? F : b >= c.delay + a ? G : H
		}

		function n(a, b, c, d, e) {
			switch(d) {
				case F:
					return "backwards" == b || "both" == b ? 0 : null;
				case H:
					return c - e;
				case G:
					return "forwards" == b || "both" == b ? a : null;
				case E:
					return null
			}
		}

		function o(a, b, c, d) {
			return(d.playbackRate < 0 ? b - a : b) * d.playbackRate + c
		}

		function p(a, b, c, d, e) {
			return c === 1 / 0 || c === -(1 / 0) || c - d == b && e.iterations && (e.iterations + e.iterationStart) % 1 == 0 ? a : c % a
		}

		function q(a, b, c, d) {
			return 0 === c ? 0 : b == a ? d.iterationStart + d.iterations - 1 : Math.floor(c / a)
		}

		function r(a, b, c, d) {
			var e = a % 2 >= 1,
				f = "normal" == d.direction || d.direction == (e ? "alternate-reverse" : "alternate"),
				g = f ? c : b - c,
				h = g / b;
			return b * d._easingFunction(h)
		}

		function s(a, b, c) {
			var d = m(a, b, c),
				e = n(a, c.fill, b, d, c.delay);
			if(null === e) return null;
			if(0 === a) return d === F ? 0 : 1;
			var f = c.iterationStart * c.duration,
				g = o(a, e, f, c),
				h = p(c.duration, l(c), g, f, c),
				i = q(c.duration, h, g, c);
			return r(i, c.duration, h, c) / c.duration
		}
		var t = "backwards|forwards|both|none".split("|"),
			u = "reverse|alternate|alternate-reverse".split("|");
		d.prototype = {
			_setMember: function(b, c) {
				this["_" + b] = c, this._effect && (this._effect._timingInput[b] = c, this._effect._timing = a.normalizeTimingInput(a.normalizeTimingInput(this._effect._timingInput)), this._effect.activeDuration = a.calculateActiveDuration(this._effect._timing), this._effect._animation && this._effect._animation._rebuildUnderlyingAnimation())
			},
			get playbackRate() {
				return this._playbackRate
			},
			set delay(a) {
				this._setMember("delay", a)
			},
			get delay() {
				return this._delay
			},
			set endDelay(a) {
				this._setMember("endDelay", a)
			},
			get endDelay() {
				return this._endDelay
			},
			set fill(a) {
				this._setMember("fill", a)
			},
			get fill() {
				return this._fill
			},
			set iterationStart(a) {
				this._setMember("iterationStart", a)
			},
			get iterationStart() {
				return this._iterationStart
			},
			set duration(a) {
				this._setMember("duration", a)
			},
			get duration() {
				return this._duration
			},
			set direction(a) {
				this._setMember("direction", a)
			},
			get direction() {
				return this._direction
			},
			set easing(a) {
				this._setMember("easing", a)
			},
			get easing() {
				return this._easing
			},
			set iterations(a) {
				this._setMember("iterations", a)
			},
			get iterations() {
				return this._iterations
			}
		};
		var v = 1,
			w = .5,
			x = 0,
			y = {
				ease: h(.25, .1, .25, 1),
				"ease-in": h(.42, 0, 1, 1),
				"ease-out": h(0, 0, .58, 1),
				"ease-in-out": h(.42, 0, .58, 1),
				"step-start": i(1, v),
				"step-middle": i(1, w),
				"step-end": i(1, x)
			},
			z = null,
			A = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
			B = new RegExp("cubic-bezier\\(" + A + "," + A + "," + A + "," + A + "\\)"),
			C = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
			D = function(a) {
				return a
			},
			E = 0,
			F = 1,
			G = 2,
			H = 3;
		a.cloneTimingInput = c, a.makeTiming = e, a.numericTimingToObject = f, a.normalizeTimingInput = g, a.calculateActiveDuration = k, a.calculateTimeFraction = s, a.calculatePhase = m, a.toTimingFunction = j
	}(c, f),
	function(a, b) {
		function c(a, b) {
			return a in j ? j[a][b] || b : b
		}

		function d(a, b, d) {
			var e = g[a];
			if(e) {
				h.style[a] = b;
				for(var f in e) {
					var i = e[f],
						j = h.style[i];
					d[i] = c(i, j)
				}
			} else d[a] = c(a, b)
		}

		function e(a) {
			var b = [];
			for(var c in a)
				if(!(c in ["easing", "offset", "composite"])) {
					var d = a[c];
					Array.isArray(d) || (d = [d]);
					for(var e, f = d.length, g = 0; f > g; g++) e = {}, "offset" in a ? e.offset = a.offset : 1 == f ? e.offset = 1 : e.offset = g / (f - 1), "easing" in a && (e.easing = a.easing), "composite" in a && (e.composite = a.composite), e[c] = d[g], b.push(e)
				}
			return b.sort(function(a, b) {
				return a.offset - b.offset
			}), b
		}

		function f(a) {
			function b() {
				var a = c.length;
				null == c[a - 1].offset && (c[a - 1].offset = 1), a > 1 && null == c[0].offset && (c[0].offset = 0);
				for(var b = 0, d = c[0].offset, e = 1; a > e; e++) {
					var f = c[e].offset;
					if(null != f) {
						for(var g = 1; e - b > g; g++) c[b + g].offset = d + (f - d) * g / (e - b);
						b = e, d = f
					}
				}
			}
			if(null == a) return [];
			window.Symbol && Symbol.iterator && Array.prototype.from && a[Symbol.iterator] && (a = Array.from(a)), Array.isArray(a) || (a = e(a));
			for(var c = a.map(function(a) {
					var b = {};
					for(var c in a) {
						var e = a[c];
						if("offset" == c) {
							if(null != e && (e = Number(e), !isFinite(e))) throw new TypeError("keyframe offsets must be numbers.")
						} else {
							if("composite" == c) throw {
								type: DOMException.NOT_SUPPORTED_ERR,
								name: "NotSupportedError",
								message: "add compositing is not supported"
							};
							e = "" + e
						}
						d(c, e, b)
					}
					return void 0 == b.offset && (b.offset = null), b
				}), f = !0, g = -(1 / 0), h = 0; h < c.length; h++) {
				var i = c[h].offset;
				if(null != i) {
					if(g > i) throw {
						code: DOMException.INVALID_MODIFICATION_ERR,
						name: "InvalidModificationError",
						message: "Keyframes are not loosely sorted by offset. Sort or specify offsets."
					};
					g = i
				} else f = !1
			}
			return c = c.filter(function(a) {
				return a.offset >= 0 && a.offset <= 1
			}), f || b(), c
		}
		var g = {
				background: ["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"],
				border: ["borderTopColor", "borderTopStyle", "borderTopWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
				borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
				borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
				borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
				borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
				borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
				borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
				borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
				flex: ["flexGrow", "flexShrink", "flexBasis"],
				font: ["fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "lineHeight"],
				margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
				outline: ["outlineColor", "outlineStyle", "outlineWidth"],
				padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]
			},
			h = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
			i = {
				thin: "1px",
				medium: "3px",
				thick: "5px"
			},
			j = {
				borderBottomWidth: i,
				borderLeftWidth: i,
				borderRightWidth: i,
				borderTopWidth: i,
				fontSize: {
					"xx-small": "60%",
					"x-small": "75%",
					small: "89%",
					medium: "100%",
					large: "120%",
					"x-large": "150%",
					"xx-large": "200%"
				},
				fontWeight: {
					normal: "400",
					bold: "700"
				},
				outlineWidth: i,
				textShadow: {
					none: "0px 0px 0px transparent"
				},
				boxShadow: {
					none: "0px 0px 0px 0px transparent"
				}
			};
		a.convertToArrayForm = e, a.normalizeKeyframes = f
	}(c, f),
	function(a) {
		var b = {};
		a.isDeprecated = function(a, c, d, e) {
			var f = e ? "are" : "is",
				g = new Date,
				h = new Date(c);
			return h.setMonth(h.getMonth() + 3), h > g ? (a in b || console.warn("Web Animations: " + a + " " + f + " deprecated and will stop working on " + h.toDateString() + ". " + d), b[a] = !0, !1) : !0
		}, a.deprecated = function(b, c, d, e) {
			var f = e ? "are" : "is";
			if(a.isDeprecated(b, c, d, e)) throw new Error(b + " " + f + " no longer supported. " + d)
		}
	}(c),
	function() {
		if(document.documentElement.animate) {
			var a = document.documentElement.animate([], 0),
				b = !0;
			if(a && (b = !1, "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function(c) {
					void 0 === a[c] && (b = !0)
				})), !b) return
		}! function(a, b, c) {
			function d(a) {
				for(var b = {}, c = 0; c < a.length; c++)
					for(var d in a[c])
						if("offset" != d && "easing" != d && "composite" != d) {
							var e = {
								offset: a[c].offset,
								easing: a[c].easing,
								value: a[c][d]
							};
							b[d] = b[d] || [], b[d].push(e)
						}
				for(var f in b) {
					var g = b[f];
					if(0 != g[0].offset || 1 != g[g.length - 1].offset) throw {
						type: DOMException.NOT_SUPPORTED_ERR,
						name: "NotSupportedError",
						message: "Partial keyframes are not supported"
					}
				}
				return b
			}

			function e(c) {
				var d = [];
				for(var e in c)
					for(var f = c[e], g = 0; g < f.length - 1; g++) {
						var h = f[g].offset,
							i = f[g + 1].offset,
							j = f[g].value,
							k = f[g + 1].value,
							l = f[g].easing;
						h == i && (1 == i ? j = k : k = j), d.push({
							startTime: h,
							endTime: i,
							easing: a.toTimingFunction(l ? l : "linear"),
							property: e,
							interpolation: b.propertyInterpolation(e, j, k)
						})
					}
				return d.sort(function(a, b) {
					return a.startTime - b.startTime
				}), d
			}
			b.convertEffectInput = function(c) {
				var f = a.normalizeKeyframes(c),
					g = d(f),
					h = e(g);
				return function(a, c) {
					if(null != c) h.filter(function(a) {
						return 0 >= c && 0 == a.startTime || c >= 1 && 1 == a.endTime || c >= a.startTime && c <= a.endTime
					}).forEach(function(d) {
						var e = c - d.startTime,
							f = d.endTime - d.startTime,
							g = 0 == f ? 0 : d.easing(e / f);
						b.apply(a, d.property, d.interpolation(g))
					});
					else
						for(var d in g) "offset" != d && "easing" != d && "composite" != d && b.clear(a, d)
				}
			}
		}(c, d, f),
		function(a, b, c) {
			function d(a) {
				return a.replace(/-(.)/g, function(a, b) {
					return b.toUpperCase()
				})
			}

			function e(a, b, c) {
				h[c] = h[c] || [], h[c].push([a, b])
			}

			function f(a, b, c) {
				for(var f = 0; f < c.length; f++) {
					var g = c[f];
					e(a, b, d(g))
				}
			}

			function g(c, e, f) {
				var g = c;
				/-/.test(c) && !a.isDeprecated("Hyphenated property names", "2016-03-22", "Use camelCase instead.", !0) && (g = d(c)), "initial" != e && "initial" != f || ("initial" == e && (e = i[g]), "initial" == f && (f = i[g]));
				for(var j = e == f ? [] : h[g], k = 0; j && k < j.length; k++) {
					var l = j[k][0](e),
						m = j[k][0](f);
					if(void 0 !== l && void 0 !== m) {
						var n = j[k][1](l, m);
						if(n) {
							var o = b.Interpolation.apply(null, n);
							return function(a) {
								return 0 == a ? e : 1 == a ? f : o(a)
							}
						}
					}
				}
				return b.Interpolation(!1, !0, function(a) {
					return a ? f : e
				})
			}
			var h = {};
			b.addPropertiesHandler = f;
			var i = {
				backgroundColor: "transparent",
				backgroundPosition: "0% 0%",
				borderBottomColor: "currentColor",
				borderBottomLeftRadius: "0px",
				borderBottomRightRadius: "0px",
				borderBottomWidth: "3px",
				borderLeftColor: "currentColor",
				borderLeftWidth: "3px",
				borderRightColor: "currentColor",
				borderRightWidth: "3px",
				borderSpacing: "2px",
				borderTopColor: "currentColor",
				borderTopLeftRadius: "0px",
				borderTopRightRadius: "0px",
				borderTopWidth: "3px",
				bottom: "auto",
				clip: "rect(0px, 0px, 0px, 0px)",
				color: "black",
				fontSize: "100%",
				fontWeight: "400",
				height: "auto",
				left: "auto",
				letterSpacing: "normal",
				lineHeight: "120%",
				marginBottom: "0px",
				marginLeft: "0px",
				marginRight: "0px",
				marginTop: "0px",
				maxHeight: "none",
				maxWidth: "none",
				minHeight: "0px",
				minWidth: "0px",
				opacity: "1.0",
				outlineColor: "invert",
				outlineOffset: "0px",
				outlineWidth: "3px",
				paddingBottom: "0px",
				paddingLeft: "0px",
				paddingRight: "0px",
				paddingTop: "0px",
				right: "auto",
				textIndent: "0px",
				textShadow: "0px 0px 0px transparent",
				top: "auto",
				transform: "",
				verticalAlign: "0px",
				visibility: "visible",
				width: "auto",
				wordSpacing: "normal",
				zIndex: "auto"
			};
			b.propertyInterpolation = g
		}(c, d, f),
		function(a, b, c) {
			function d(b) {
				var c = a.calculateActiveDuration(b),
					d = function(d) {
						return a.calculateTimeFraction(c, d, b)
					};
				return d._totalDuration = b.delay + c + b.endDelay, d._isCurrent = function(d) {
					var e = a.calculatePhase(c, d, b);
					return e === PhaseActive || e === PhaseBefore
				}, d
			}
			b.KeyframeEffect = function(c, e, f, g) {
				var h, i = d(a.normalizeTimingInput(f)),
					j = b.convertEffectInput(e),
					k = function() {
						j(c, h)
					};
				return k._update = function(a) {
					return h = i(a), null !== h
				}, k._clear = function() {
					j(c, null)
				}, k._hasSameTarget = function(a) {
					return c === a
				}, k._isCurrent = i._isCurrent, k._totalDuration = i._totalDuration, k._id = g, k
			}, b.NullEffect = function(a) {
				var b = function() {
					a && (a(), a = null)
				};
				return b._update = function() {
					return null
				}, b._totalDuration = 0, b._isCurrent = function() {
					return !1
				}, b._hasSameTarget = function() {
					return !1
				}, b
			}
		}(c, d, f),
		function(a, b) {
			function c(a, b, c) {
				c.enumerable = !0, c.configurable = !0, Object.defineProperty(a, b, c)
			}

			function d(a) {
				this._surrogateStyle = document.createElementNS("http://www.w3.org/1999/xhtml", "div").style, this._style = a.style, this._length = 0, this._isAnimatedProperty = {};
				for(var b = 0; b < this._style.length; b++) {
					var c = this._style[b];
					this._surrogateStyle[c] = this._style[c]
				}
				this._updateIndices()
			}

			function e(a) {
				if(!a._webAnimationsPatchedStyle) {
					var b = new d(a);
					try {
						c(a, "style", {
							get: function() {
								return b
							}
						})
					} catch(e) {
						a.style._set = function(b, c) {
							a.style[b] = c
						}, a.style._clear = function(b) {
							a.style[b] = ""
						}
					}
					a._webAnimationsPatchedStyle = a.style
				}
			}
			var f = {
					cssText: 1,
					length: 1,
					parentRule: 1
				},
				g = {
					getPropertyCSSValue: 1,
					getPropertyPriority: 1,
					getPropertyValue: 1,
					item: 1,
					removeProperty: 1,
					setProperty: 1
				},
				h = {
					removeProperty: 1,
					setProperty: 1
				};
			d.prototype = {
				get cssText() {
					return this._surrogateStyle.cssText
				},
				set cssText(a) {
					for(var b = {}, c = 0; c < this._surrogateStyle.length; c++) b[this._surrogateStyle[c]] = !0;
					this._surrogateStyle.cssText = a, this._updateIndices();
					for(var c = 0; c < this._surrogateStyle.length; c++) b[this._surrogateStyle[c]] = !0;
					for(var d in b) this._isAnimatedProperty[d] || this._style.setProperty(d, this._surrogateStyle.getPropertyValue(d))
				},
				get length() {
					return this._surrogateStyle.length
				},
				get parentRule() {
					return this._style.parentRule
				},
				_updateIndices: function() {
					for(; this._length < this._surrogateStyle.length;) Object.defineProperty(this, this._length, {
						configurable: !0,
						enumerable: !1,
						get: function(a) {
							return function() {
								return this._surrogateStyle[a]
							}
						}(this._length)
					}), this._length++;
					for(; this._length > this._surrogateStyle.length;) this._length--, Object.defineProperty(this, this._length, {
						configurable: !0,
						enumerable: !1,
						value: void 0
					})
				},
				_set: function(a, b) {
					this._style[a] = b, this._isAnimatedProperty[a] = !0
				},
				_clear: function(a) {
					this._style[a] = this._surrogateStyle[a], delete this._isAnimatedProperty[a]
				}
			};
			for(var i in g) d.prototype[i] = function(a, b) {
				return function() {
					var c = this._surrogateStyle[a].apply(this._surrogateStyle, arguments);
					return b && (this._isAnimatedProperty[arguments[0]] || this._style[a].apply(this._style, arguments), this._updateIndices()), c
				}
			}(i, i in h);
			for(var j in document.documentElement.style) j in f || j in g || ! function(a) {
				c(d.prototype, a, {
					get: function() {
						return this._surrogateStyle[a]
					},
					set: function(b) {
						this._surrogateStyle[a] = b, this._updateIndices(), this._isAnimatedProperty[a] || (this._style[a] = b)
					}
				})
			}(j);
			a.apply = function(b, c, d) {
				e(b), b.style._set(a.propertyName(c), d)
			}, a.clear = function(b, c) {
				b._webAnimationsPatchedStyle && b.style._clear(a.propertyName(c))
			}
		}(d, f),
		function(a) {
			window.Element.prototype.animate = function(b, c) {
				var d = "";
				return c && c.id && (d = c.id), a.timeline._play(a.KeyframeEffect(this, b, c, d))
			}
		}(d),
		function(a, b) {
			function c(a, b, d) {
				if("number" == typeof a && "number" == typeof b) return a * (1 - d) + b * d;
				if("boolean" == typeof a && "boolean" == typeof b) return .5 > d ? a : b;
				if(a.length == b.length) {
					for(var e = [], f = 0; f < a.length; f++) e.push(c(a[f], b[f], d));
					return e
				}
				throw "Mismatched interpolation arguments " + a + ":" + b
			}
			a.Interpolation = function(a, b, d) {
				return function(e) {
					return d(c(a, b, e))
				}
			}
		}(d, f),
		function(a, b) {
			function c(a, b, c) {
				return Math.max(Math.min(a, c), b)
			}

			function d(b, d, e) {
				var f = a.dot(b, d);
				f = c(f, -1, 1);
				var g = [];
				if(1 === f) g = b;
				else
					for(var h = Math.acos(f), i = 1 * Math.sin(e * h) / Math.sqrt(1 - f * f), j = 0; 4 > j; j++) g.push(b[j] * (Math.cos(e * h) - f * i) + d[j] * i);
				return g
			}
			var e = function() {
				function a(a, b) {
					for(var c = [
							[0, 0, 0, 0],
							[0, 0, 0, 0],
							[0, 0, 0, 0],
							[0, 0, 0, 0]
						], d = 0; 4 > d; d++)
						for(var e = 0; 4 > e; e++)
							for(var f = 0; 4 > f; f++) c[d][e] += b[d][f] * a[f][e];
					return c
				}

				function b(a) {
					return 0 == a[0][2] && 0 == a[0][3] && 0 == a[1][2] && 0 == a[1][3] && 0 == a[2][0] && 0 == a[2][1] && 1 == a[2][2] && 0 == a[2][3] && 0 == a[3][2] && 1 == a[3][3]
				}

				function c(c, d, e, f, g) {
					for(var h = [
							[1, 0, 0, 0],
							[0, 1, 0, 0],
							[0, 0, 1, 0],
							[0, 0, 0, 1]
						], i = 0; 4 > i; i++) h[i][3] = g[i];
					for(var i = 0; 3 > i; i++)
						for(var j = 0; 3 > j; j++) h[3][i] += c[j] * h[j][i];
					var k = f[0],
						l = f[1],
						m = f[2],
						n = f[3],
						o = [
							[1, 0, 0, 0],
							[0, 1, 0, 0],
							[0, 0, 1, 0],
							[0, 0, 0, 1]
						];
					o[0][0] = 1 - 2 * (l * l + m * m), o[0][1] = 2 * (k * l - m * n), o[0][2] = 2 * (k * m + l * n), o[1][0] = 2 * (k * l + m * n), o[1][1] = 1 - 2 * (k * k + m * m), o[1][2] = 2 * (l * m - k * n), o[2][0] = 2 * (k * m - l * n), o[2][1] = 2 * (l * m + k * n), o[2][2] = 1 - 2 * (k * k + l * l), h = a(h, o);
					var p = [
						[1, 0, 0, 0],
						[0, 1, 0, 0],
						[0, 0, 1, 0],
						[0, 0, 0, 1]
					];
					e[2] && (p[2][1] = e[2], h = a(h, p)), e[1] && (p[2][1] = 0, p[2][0] = e[0], h = a(h, p)), e[0] && (p[2][0] = 0, p[1][0] = e[0], h = a(h, p));
					for(var i = 0; 3 > i; i++)
						for(var j = 0; 3 > j; j++) h[i][j] *= d[i];
					return b(h) ? [h[0][0], h[0][1], h[1][0], h[1][1], h[3][0], h[3][1]] : h[0].concat(h[1], h[2], h[3])
				}
				return c
			}();
			a.composeMatrix = e, a.quat = d
		}(d, f),
		function(a, b, c) {
			a.sequenceNumber = 0;
			var d = function(a, b, c) {
				this.target = a, this.currentTime = b, this.timelineTime = c, this.type = "finish", this.bubbles = !1, this.cancelable = !1, this.currentTarget = a, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
			};
			b.Animation = function(b) {
				this.id = "", b && b._id && (this.id = b._id), this._sequenceNumber = a.sequenceNumber++, this._currentTime = 0, this._startTime = null, this._paused = !1, this._playbackRate = 1, this._inTimeline = !0, this._finishedFlag = !0, this.onfinish = null, this._finishHandlers = [], this._effect = b, this._inEffect = this._effect._update(0), this._idle = !0, this._currentTimePending = !1
			}, b.Animation.prototype = {
				_ensureAlive: function() {
					this.playbackRate < 0 && 0 === this.currentTime ? this._inEffect = this._effect._update(-1) : this._inEffect = this._effect._update(this.currentTime), this._inTimeline || !this._inEffect && this._finishedFlag || (this._inTimeline = !0, b.timeline._animations.push(this))
				},
				_tickCurrentTime: function(a, b) {
					a != this._currentTime && (this._currentTime = a, this._isFinished && !b && (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0), this._ensureAlive())
				},
				get currentTime() {
					return this._idle || this._currentTimePending ? null : this._currentTime
				},
				set currentTime(a) {
					a = +a, isNaN(a) || (b.restart(), this._paused || null == this._startTime || (this._startTime = this._timeline.currentTime - a / this._playbackRate), this._currentTimePending = !1, this._currentTime != a && (this._tickCurrentTime(a, !0), b.invalidateEffects()))
				},
				get startTime() {
					return this._startTime
				},
				set startTime(a) {
					a = +a, isNaN(a) || this._paused || this._idle || (this._startTime = a, this._tickCurrentTime((this._timeline.currentTime - this._startTime) * this.playbackRate), b.invalidateEffects())
				},
				get playbackRate() {
					return this._playbackRate
				},
				set playbackRate(a) {
					if(a != this._playbackRate) {
						var b = this.currentTime;
						this._playbackRate = a, this._startTime = null, "paused" != this.playState && "idle" != this.playState && this.play(), null != b && (this.currentTime = b)
					}
				},
				get _isFinished() {
					return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0)
				},
				get _totalDuration() {
					return this._effect._totalDuration
				},
				get playState() {
					return this._idle ? "idle" : null == this._startTime && !this._paused && 0 != this.playbackRate || this._currentTimePending ? "pending" : this._paused ? "paused" : this._isFinished ? "finished" : "running"
				},
				play: function() {
					this._paused = !1, (this._isFinished || this._idle) && (this._currentTime = this._playbackRate > 0 ? 0 : this._totalDuration, this._startTime = null), this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), b.invalidateEffects()
				},
				pause: function() {
					this._isFinished || this._paused || this._idle || (this._currentTimePending = !0), this._startTime = null, this._paused = !0
				},
				finish: function() {
					this._idle || (this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0, this._startTime = this._totalDuration - this.currentTime, this._currentTimePending = !1, b.invalidateEffects())
				},
				cancel: function() {
					this._inEffect && (this._inEffect = !1, this._idle = !0, this._finishedFlag = !0, this.currentTime = 0, this._startTime = null, this._effect._update(null), b.invalidateEffects())
				},
				reverse: function() {
					this.playbackRate *= -1, this.play()
				},
				addEventListener: function(a, b) {
					"function" == typeof b && "finish" == a && this._finishHandlers.push(b)
				},
				removeEventListener: function(a, b) {
					if("finish" == a) {
						var c = this._finishHandlers.indexOf(b);
						c >= 0 && this._finishHandlers.splice(c, 1)
					}
				},
				_fireEvents: function(a) {
					if(this._isFinished) {
						if(!this._finishedFlag) {
							var b = new d(this, this._currentTime, a),
								c = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);
							setTimeout(function() {
								c.forEach(function(a) {
									a.call(b.target, b)
								})
							}, 0), this._finishedFlag = !0
						}
					} else this._finishedFlag = !1
				},
				_tick: function(a, b) {
					this._idle || this._paused || (null == this._startTime ? b && (this.startTime = a - this._currentTime / this.playbackRate) : this._isFinished || this._tickCurrentTime((a - this._startTime) * this.playbackRate)), b && (this._currentTimePending = !1, this._fireEvents(a))
				},
				get _needsTick() {
					return this.playState in {
						pending: 1,
						running: 1
					} || !this._finishedFlag
				}
			}
		}(c, d, f),
		function(a, b, c) {
			function d(a) {
				var b = j;
				j = [], a < p.currentTime && (a = p.currentTime), h(a, !0), b.forEach(function(b) {
					b[1](a)
				}), g(), l = void 0
			}

			function e(a, b) {
				return a._sequenceNumber - b._sequenceNumber
			}

			function f() {
				this._animations = [], this.currentTime = window.performance && performance.now ? performance.now() : 0
			}

			function g() {
				o.forEach(function(a) {
					a()
				}), o.length = 0
			}

			function h(a, c) {
				n = !1;
				var d = b.timeline;
				d.currentTime = a, d._animations.sort(e), m = !1;
				var f = d._animations;
				d._animations = [];
				var g = [],
					h = [];
				f = f.filter(function(b) {
					b._tick(a, c), b._inEffect ? h.push(b._effect) : g.push(b._effect), b._needsTick && (m = !0);
					var d = b._inEffect || b._needsTick;
					return b._inTimeline = d, d
				}), o.push.apply(o, g), o.push.apply(o, h), d._animations.push.apply(d._animations, f), m && requestAnimationFrame(function() {})
			}
			var i = window.requestAnimationFrame,
				j = [],
				k = 0;
			window.requestAnimationFrame = function(a) {
				var b = k++;
				return 0 == j.length && i(d), j.push([b, a]), b
			}, window.cancelAnimationFrame = function(a) {
				j.forEach(function(b) {
					b[0] == a && (b[1] = function() {})
				})
			}, f.prototype = {
				_play: function(c) {
					c._timing = a.normalizeTimingInput(c.timing);
					var d = new b.Animation(c);
					return d._idle = !1, d._timeline = this, this._animations.push(d), b.restart(), b.invalidateEffects(), d
				}
			};
			var l = void 0,
				m = !1,
				n = !1;
			b.restart = function() {
				return m || (m = !0, requestAnimationFrame(function() {}), n = !0), n
			}, b.invalidateEffects = function() {
				h(b.timeline.currentTime, !1), g()
			};
			var o = [],
				p = new f;
			b.timeline = p
		}(c, d, f),
		function(a, b) {
			function c(a, b) {
				for(var c = 0, d = 0; d < a.length; d++) c += a[d] * b[d];
				return c
			}

			function d(a, b) {
				return [a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3], a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3], a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3], a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3], a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7], a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7], a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7], a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7], a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11], a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11], a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11], a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11], a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15], a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15], a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15], a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]]
			}

			function e(a) {
				switch(a.t) {
					case "rotatex":
						var b = a.d[0].rad || 0,
							c = a.d[0].deg || 0,
							d = c * Math.PI / 180 + b;
						return [1, 0, 0, 0, 0, Math.cos(d), Math.sin(d), 0, 0, -Math.sin(d), Math.cos(d), 0, 0, 0, 0, 1];
					case "rotatey":
						var b = a.d[0].rad || 0,
							c = a.d[0].deg || 0,
							d = c * Math.PI / 180 + b;
						return [Math.cos(d), 0, -Math.sin(d), 0, 0, 1, 0, 0, Math.sin(d), 0, Math.cos(d), 0, 0, 0, 0, 1];
					case "rotate":
					case "rotatez":
						var b = a.d[0].rad || 0,
							c = a.d[0].deg || 0,
							d = c * Math.PI / 180 + b;
						return [Math.cos(d), Math.sin(d), 0, 0, -Math.sin(d), Math.cos(d), 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
					case "rotate3d":
						var e = a.d[0],
							f = a.d[1],
							g = a.d[2],
							b = a.d[3].rad || 0,
							c = a.d[3].deg || 0,
							d = c * Math.PI / 180 + b,
							h = e * e + f * f + g * g;
						if(0 === h) e = 1, f = 0, g = 0;
						else if(1 !== h) {
							var i = Math.sqrt(h);
							e /= i, f /= i, g /= i
						}
						var j = Math.sin(d / 2),
							k = j * Math.cos(d / 2),
							l = j * j;
						return [1 - 2 * (f * f + g * g) * l, 2 * (e * f * l + g * k), 2 * (e * g * l - f * k), 0, 2 * (e * f * l - g * k), 1 - 2 * (e * e + g * g) * l, 2 * (f * g * l + e * k), 0, 2 * (e * g * l + f * k), 2 * (f * g * l - e * k), 1 - 2 * (e * e + f * f) * l, 0, 0, 0, 0, 1];
					case "scale":
						return [a.d[0], 0, 0, 0, 0, a.d[1], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
					case "scalex":
						return [a.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
					case "scaley":
						return [1, 0, 0, 0, 0, a.d[0], 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
					case "scalez":
						return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, a.d[0], 0, 0, 0, 0, 1];
					case "scale3d":
						return [a.d[0], 0, 0, 0, 0, a.d[1], 0, 0, 0, 0, a.d[2], 0, 0, 0, 0, 1];
					case "skew":
						var m = a.d[0].deg || 0,
							n = a.d[0].rad || 0,
							o = a.d[1].deg || 0,
							p = a.d[1].rad || 0,
							q = m * Math.PI / 180 + n,
							r = o * Math.PI / 180 + p;
						return [1, Math.tan(r), 0, 0, Math.tan(q), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
					case "skewx":
						var b = a.d[0].rad || 0,
							c = a.d[0].deg || 0,
							d = c * Math.PI / 180 + b;
						return [1, 0, 0, 0, Math.tan(d), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
					case "skewy":
						var b = a.d[0].rad || 0,
							c = a.d[0].deg || 0,
							d = c * Math.PI / 180 + b;
						return [1, Math.tan(d), 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
					case "translate":
						var e = a.d[0].px || 0,
							f = a.d[1].px || 0;
						return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, f, 0, 1];
					case "translatex":
						var e = a.d[0].px || 0;
						return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, 0, 0, 1];
					case "translatey":
						var f = a.d[0].px || 0;
						return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, f, 0, 1];
					case "translatez":
						var g = a.d[0].px || 0;
						return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, g, 1];
					case "translate3d":
						var e = a.d[0].px || 0,
							f = a.d[1].px || 0,
							g = a.d[2].px || 0;
						return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, f, g, 1];
					case "perspective":
						var s = a.d[0].px ? -1 / a.d[0].px : 0;
						return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, s, 0, 0, 0, 1];
					case "matrix":
						return [a.d[0], a.d[1], 0, 0, a.d[2], a.d[3], 0, 0, 0, 0, 1, 0, a.d[4], a.d[5], 0, 1];
					case "matrix3d":
						return a.d
				}
			}

			function f(a) {
				return 0 === a.length ? [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] : a.map(e).reduce(d)
			}

			function g(a) {
				return [h(f(a))]
			}
			var h = function() {
				function a(a) {
					return a[0][0] * a[1][1] * a[2][2] + a[1][0] * a[2][1] * a[0][2] + a[2][0] * a[0][1] * a[1][2] - a[0][2] * a[1][1] * a[2][0] - a[1][2] * a[2][1] * a[0][0] - a[2][2] * a[0][1] * a[1][0]
				}

				function b(b) {
					for(var c = 1 / a(b), d = b[0][0], e = b[0][1], f = b[0][2], g = b[1][0], h = b[1][1], i = b[1][2], j = b[2][0], k = b[2][1], l = b[2][2], m = [
							[(h * l - i * k) * c, (f * k - e * l) * c, (e * i - f * h) * c, 0],
							[(i * j - g * l) * c, (d * l - f * j) * c, (f * g - d * i) * c, 0],
							[(g * k - h * j) * c, (j * e - d * k) * c, (d * h - e * g) * c, 0]
						], n = [], o = 0; 3 > o; o++) {
						for(var p = 0, q = 0; 3 > q; q++) p += b[3][q] * m[q][o];
						n.push(p)
					}
					return n.push(1), m.push(n), m
				}

				function d(a) {
					return [
						[a[0][0], a[1][0], a[2][0], a[3][0]],
						[a[0][1], a[1][1], a[2][1], a[3][1]],
						[a[0][2], a[1][2], a[2][2], a[3][2]],
						[a[0][3], a[1][3], a[2][3], a[3][3]]
					]
				}

				function e(a, b) {
					for(var c = [], d = 0; 4 > d; d++) {
						for(var e = 0, f = 0; 4 > f; f++) e += a[f] * b[f][d];
						c.push(e)
					}
					return c
				}

				function f(a) {
					var b = g(a);
					return [a[0] / b, a[1] / b, a[2] / b]
				}

				function g(a) {
					return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2])
				}

				function h(a, b, c, d) {
					return [c * a[0] + d * b[0], c * a[1] + d * b[1], c * a[2] + d * b[2]]
				}

				function i(a, b) {
					return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]
				}

				function j(j) {
					var k = [j.slice(0, 4), j.slice(4, 8), j.slice(8, 12), j.slice(12, 16)];
					if(1 !== k[3][3]) return null;
					for(var l = [], m = 0; 4 > m; m++) l.push(k[m].slice());
					for(var m = 0; 3 > m; m++) l[m][3] = 0;
					if(0 === a(l)) return !1;
					var n, o = [];
					if(k[0][3] || k[1][3] || k[2][3]) {
						o.push(k[0][3]), o.push(k[1][3]), o.push(k[2][3]), o.push(k[3][3]);
						var p = b(l),
							q = d(p);
						n = e(o, q)
					} else n = [0, 0, 0, 1];
					var r = k[3].slice(0, 3),
						s = [];
					s.push(k[0].slice(0, 3));
					var t = [];
					t.push(g(s[0])), s[0] = f(s[0]);
					var u = [];
					s.push(k[1].slice(0, 3)), u.push(c(s[0], s[1])), s[1] = h(s[1], s[0], 1, -u[0]), t.push(g(s[1])), s[1] = f(s[1]), u[0] /= t[1], s.push(k[2].slice(0, 3)), u.push(c(s[0], s[2])), s[2] = h(s[2], s[0], 1, -u[1]), u.push(c(s[1], s[2])), s[2] = h(s[2], s[1], 1, -u[2]), t.push(g(s[2])), s[2] = f(s[2]), u[1] /= t[2], u[2] /= t[2];
					var v = i(s[1], s[2]);
					if(c(s[0], v) < 0)
						for(var m = 0; 3 > m; m++) t[m] *= -1, s[m][0] *= -1, s[m][1] *= -1, s[m][2] *= -1;
					var w, x, y = s[0][0] + s[1][1] + s[2][2] + 1;
					return y > 1e-4 ? (w = .5 / Math.sqrt(y), x = [(s[2][1] - s[1][2]) * w, (s[0][2] - s[2][0]) * w, (s[1][0] - s[0][1]) * w, .25 / w]) : s[0][0] > s[1][1] && s[0][0] > s[2][2] ? (w = 2 * Math.sqrt(1 + s[0][0] - s[1][1] - s[2][2]), x = [.25 * w, (s[0][1] + s[1][0]) / w, (s[0][2] + s[2][0]) / w, (s[2][1] - s[1][2]) / w]) : s[1][1] > s[2][2] ? (w = 2 * Math.sqrt(1 + s[1][1] - s[0][0] - s[2][2]), x = [(s[0][1] + s[1][0]) / w, .25 * w, (s[1][2] + s[2][1]) / w, (s[0][2] - s[2][0]) / w]) : (w = 2 * Math.sqrt(1 + s[2][2] - s[0][0] - s[1][1]), x = [(s[0][2] + s[2][0]) / w, (s[1][2] + s[2][1]) / w, .25 * w, (s[1][0] - s[0][1]) / w]), [r, t, u, x, n]
				}
				return j
			}();
			a.dot = c, a.makeMatrixDecomposition = g
		}(d, f),
		function(a) {
			function b(a, b) {
				var c = a.exec(b);
				return c ? (c = a.ignoreCase ? c[0].toLowerCase() : c[0], [c, b.substr(c.length)]) : void 0
			}

			function c(a, b) {
				b = b.replace(/^\s*/, "");
				var c = a(b);
				return c ? [c[0], c[1].replace(/^\s*/, "")] : void 0
			}

			function d(a, d, e) {
				a = c.bind(null, a);
				for(var f = [];;) {
					var g = a(e);
					if(!g) return [f, e];
					if(f.push(g[0]), e = g[1], g = b(d, e), !g || "" == g[1]) return [f, e];
					e = g[1]
				}
			}

			function e(a, b) {
				for(var c = 0, d = 0; d < b.length && (!/\s|,/.test(b[d]) || 0 != c); d++)
					if("(" == b[d]) c++;
					else if(")" == b[d] && (c--, 0 == c && d++, 0 >= c)) break;
				var e = a(b.substr(0, d));
				return void 0 == e ? void 0 : [e, b.substr(d)]
			}

			function f(a, b) {
				for(var c = a, d = b; c && d;) c > d ? c %= d : d %= c;
				return c = a * b / (c + d)
			}

			function g(a) {
				return function(b) {
					var c = a(b);
					return c && (c[0] = void 0), c
				}
			}

			function h(a, b) {
				return function(c) {
					var d = a(c);
					return d ? d : [b, c]
				}
			}

			function i(b, c) {
				for(var d = [], e = 0; e < b.length; e++) {
					var f = a.consumeTrimmed(b[e], c);
					if(!f || "" == f[0]) return;
					void 0 !== f[0] && d.push(f[0]), c = f[1]
				}
				return "" == c ? d : void 0
			}

			function j(a, b, c, d, e) {
				for(var g = [], h = [], i = [], j = f(d.length, e.length), k = 0; j > k; k++) {
					var l = b(d[k % d.length], e[k % e.length]);
					if(!l) return;
					g.push(l[0]), h.push(l[1]), i.push(l[2])
				}
				return [g, h, function(b) {
					var d = b.map(function(a, b) {
						return i[b](a)
					}).join(c);
					return a ? a(d) : d
				}]
			}

			function k(a, b, c) {
				for(var d = [], e = [], f = [], g = 0, h = 0; h < c.length; h++)
					if("function" == typeof c[h]) {
						var i = c[h](a[g], b[g++]);
						d.push(i[0]), e.push(i[1]), f.push(i[2])
					} else ! function(a) {
						d.push(!1), e.push(!1), f.push(function() {
							return c[a]
						})
					}(h);
				return [d, e, function(a) {
					for(var b = "", c = 0; c < a.length; c++) b += f[c](a[c]);
					return b
				}]
			}
			a.consumeToken = b, a.consumeTrimmed = c, a.consumeRepeated = d, a.consumeParenthesised = e, a.ignore = g, a.optional = h, a.consumeList = i, a.mergeNestedRepeated = j.bind(null, null), a.mergeWrappedNestedRepeated = j, a.mergeList = k
		}(d),
		function(a) {
			function b(b) {
				function c(b) {
					var c = a.consumeToken(/^inset/i, b);
					if(c) return d.inset = !0, c;
					var c = a.consumeLengthOrPercent(b);
					if(c) return d.lengths.push(c[0]), c;
					var c = a.consumeColor(b);
					return c ? (d.color = c[0], c) : void 0
				}
				var d = {
						inset: !1,
						lengths: [],
						color: null
					},
					e = a.consumeRepeated(c, /^/, b);
				return e && e[0].length ? [d, e[1]] : void 0
			}

			function c(c) {
				var d = a.consumeRepeated(b, /^,/, c);
				return d && "" == d[1] ? d[0] : void 0
			}

			function d(b, c) {
				for(; b.lengths.length < Math.max(b.lengths.length, c.lengths.length);) b.lengths.push({
					px: 0
				});
				for(; c.lengths.length < Math.max(b.lengths.length, c.lengths.length);) c.lengths.push({
					px: 0
				});
				if(b.inset == c.inset && !!b.color == !!c.color) {
					for(var d, e = [], f = [
							[], 0
						], g = [
							[], 0
						], h = 0; h < b.lengths.length; h++) {
						var i = a.mergeDimensions(b.lengths[h], c.lengths[h], 2 == h);
						f[0].push(i[0]), g[0].push(i[1]), e.push(i[2])
					}
					if(b.color && c.color) {
						var j = a.mergeColors(b.color, c.color);
						f[1] = j[0], g[1] = j[1], d = j[2]
					}
					return [f, g, function(a) {
						for(var c = b.inset ? "inset " : " ", f = 0; f < e.length; f++) c += e[f](a[0][f]) + " ";
						return d && (c += d(a[1])), c
					}]
				}
			}

			function e(b, c, d, e) {
				function f(a) {
					return {
						inset: a,
						color: [0, 0, 0, 0],
						lengths: [{
							px: 0
						}, {
							px: 0
						}, {
							px: 0
						}, {
							px: 0
						}]
					}
				}
				for(var g = [], h = [], i = 0; i < d.length || i < e.length; i++) {
					var j = d[i] || f(e[i].inset),
						k = e[i] || f(d[i].inset);
					g.push(j), h.push(k)
				}
				return a.mergeNestedRepeated(b, c, g, h)
			}
			var f = e.bind(null, d, ", ");
			a.addPropertiesHandler(c, f, ["box-shadow", "text-shadow"])
		}(d),
		function(a, b) {
			function c(a) {
				return a.toFixed(3).replace(".000", "")
			}

			function d(a, b, c) {
				return Math.min(b, Math.max(a, c))
			}

			function e(a) {
				return /^\s*[-+]?(\d*\.)?\d+\s*$/.test(a) ? Number(a) : void 0
			}

			function f(a, b) {
				return [a, b, c]
			}

			function g(a, b) {
				return 0 != a ? i(0, 1 / 0)(a, b) : void 0
			}

			function h(a, b) {
				return [a, b, function(a) {
					return Math.round(d(1, 1 / 0, a))
				}]
			}

			function i(a, b) {
				return function(e, f) {
					return [e, f, function(e) {
						return c(d(a, b, e))
					}]
				}
			}

			function j(a, b) {
				return [a, b, Math.round]
			}
			a.clamp = d, a.addPropertiesHandler(e, i(0, 1 / 0), ["border-image-width", "line-height"]), a.addPropertiesHandler(e, i(0, 1), ["opacity", "shape-image-threshold"]), a.addPropertiesHandler(e, g, ["flex-grow", "flex-shrink"]), a.addPropertiesHandler(e, h, ["orphans", "widows"]), a.addPropertiesHandler(e, j, ["z-index"]), a.parseNumber = e, a.mergeNumbers = f, a.numberToString = c
		}(d, f),
		function(a, b) {
			function c(a, b) {
				return "visible" == a || "visible" == b ? [0, 1, function(c) {
					return 0 >= c ? a : c >= 1 ? b : "visible"
				}] : void 0
			}
			a.addPropertiesHandler(String, c, ["visibility"])
		}(d),
		function(a, b) {
			function c(a) {
				a = a.trim(), f.fillStyle = "#000", f.fillStyle = a;
				var b = f.fillStyle;
				if(f.fillStyle = "#fff", f.fillStyle = a, b == f.fillStyle) {
					f.fillRect(0, 0, 1, 1);
					var c = f.getImageData(0, 0, 1, 1).data;
					f.clearRect(0, 0, 1, 1);
					var d = c[3] / 255;
					return [c[0] * d, c[1] * d, c[2] * d, d]
				}
			}

			function d(b, c) {
				return [b, c, function(b) {
					function c(a) {
						return Math.max(0, Math.min(255, a))
					}
					if(b[3])
						for(var d = 0; 3 > d; d++) b[d] = Math.round(c(b[d] / b[3]));
					return b[3] = a.numberToString(a.clamp(0, 1, b[3])), "rgba(" + b.join(",") + ")"
				}]
			}
			var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
			e.width = e.height = 1;
			var f = e.getContext("2d");
			a.addPropertiesHandler(c, d, ["background-color", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "color", "outline-color", "text-decoration-color"]), a.consumeColor = a.consumeParenthesised.bind(null, c), a.mergeColors = d
		}(d, f),
		function(a, b) {
			function c(a, b) {
				if(b = b.trim().toLowerCase(), "0" == b && "px".search(a) >= 0) return {
					px: 0
				};
				if(/^[^(]*$|^calc/.test(b)) {
					b = b.replace(/calc\(/g, "(");
					var c = {};
					b = b.replace(a, function(a) {
						return c[a] = null, "U" + a
					});
					for(var d = "U(" + a.source + ")", e = b.replace(/[-+]?(\d*\.)?\d+/g, "N").replace(new RegExp("N" + d, "g"), "D").replace(/\s[+-]\s/g, "O").replace(/\s/g, ""), f = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], g = 0; g < f.length;) f[g].test(e) ? (e = e.replace(f[g], "$1"), g = 0) : g++;
					if("D" == e) {
						for(var h in c) {
							var i = eval(b.replace(new RegExp("U" + h, "g"), "").replace(new RegExp(d, "g"), "*0"));
							if(!isFinite(i)) return;
							c[h] = i
						}
						return c
					}
				}
			}

			function d(a, b) {
				return e(a, b, !0)
			}

			function e(b, c, d) {
				var e, f = [];
				for(e in b) f.push(e);
				for(e in c) f.indexOf(e) < 0 && f.push(e);
				return b = f.map(function(a) {
					return b[a] || 0
				}), c = f.map(function(a) {
					return c[a] || 0
				}), [b, c, function(b) {
					var c = b.map(function(c, e) {
						return 1 == b.length && d && (c = Math.max(c, 0)), a.numberToString(c) + f[e]
					}).join(" + ");
					return b.length > 1 ? "calc(" + c + ")" : c
				}]
			}
			var f = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
				g = c.bind(null, new RegExp(f, "g")),
				h = c.bind(null, new RegExp(f + "|%", "g")),
				i = c.bind(null, /deg|rad|grad|turn/g);
			a.parseLength = g, a.parseLengthOrPercent = h, a.consumeLengthOrPercent = a.consumeParenthesised.bind(null, h), a.parseAngle = i, a.mergeDimensions = e;
			var j = a.consumeParenthesised.bind(null, g),
				k = a.consumeRepeated.bind(void 0, j, /^/),
				l = a.consumeRepeated.bind(void 0, k, /^,/);
			a.consumeSizePairList = l;
			var m = function(a) {
					var b = l(a);
					return b && "" == b[1] ? b[0] : void 0
				},
				n = a.mergeNestedRepeated.bind(void 0, d, " "),
				o = a.mergeNestedRepeated.bind(void 0, n, ",");
			a.mergeNonNegativeSizePair = n, a.addPropertiesHandler(m, o, ["background-size"]), a.addPropertiesHandler(h, d, ["border-bottom-width", "border-image-width", "border-left-width", "border-right-width", "border-top-width", "flex-basis", "font-size", "height", "line-height", "max-height", "max-width", "outline-width", "width"]), a.addPropertiesHandler(h, e, ["border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "bottom", "left", "letter-spacing", "margin-bottom", "margin-left", "margin-right", "margin-top", "min-height", "min-width", "outline-offset", "padding-bottom", "padding-left", "padding-right", "padding-top", "perspective", "right", "shape-margin", "text-indent", "top", "vertical-align", "word-spacing"])
		}(d, f),
		function(a, b) {
			function c(b) {
				return a.consumeLengthOrPercent(b) || a.consumeToken(/^auto/, b)
			}

			function d(b) {
				var d = a.consumeList([a.ignore(a.consumeToken.bind(null, /^rect/)), a.ignore(a.consumeToken.bind(null, /^\(/)), a.consumeRepeated.bind(null, c, /^,/), a.ignore(a.consumeToken.bind(null, /^\)/))], b);
				return d && 4 == d[0].length ? d[0] : void 0
			}

			function e(b, c) {
				return "auto" == b || "auto" == c ? [!0, !1, function(d) {
					var e = d ? b : c;
					if("auto" == e) return "auto";
					var f = a.mergeDimensions(e, e);
					return f[2](f[0])
				}] : a.mergeDimensions(b, c)
			}

			function f(a) {
				return "rect(" + a + ")"
			}
			var g = a.mergeWrappedNestedRepeated.bind(null, f, e, ", ");
			a.parseBox = d, a.mergeBoxes = g, a.addPropertiesHandler(d, g, ["clip"])
		}(d, f),
		function(a, b) {
			function c(a) {
				return function(b) {
					var c = 0;
					return a.map(function(a) {
						return a === k ? b[c++] : a
					})
				}
			}

			function d(a) {
				return a
			}

			function e(b) {
				if(b = b.toLowerCase().trim(), "none" == b) return [];
				for(var c, d = /\s*(\w+)\(([^)]*)\)/g, e = [], f = 0; c = d.exec(b);) {
					if(c.index != f) return;
					f = c.index + c[0].length;
					var g = c[1],
						h = n[g];
					if(!h) return;
					var i = c[2].split(","),
						j = h[0];
					if(j.length < i.length) return;
					for(var k = [], o = 0; o < j.length; o++) {
						var p, q = i[o],
							r = j[o];
						if(p = q ? {
								A: function(b) {
									return "0" == b.trim() ? m : a.parseAngle(b)
								},
								N: a.parseNumber,
								T: a.parseLengthOrPercent,
								L: a.parseLength
							}[r.toUpperCase()](q) : {
								a: m,
								n: k[0],
								t: l
							}[r], void 0 === p) return;
						k.push(p)
					}
					if(e.push({
							t: g,
							d: k
						}), d.lastIndex == b.length) return e
				}
			}

			function f(a) {
				return a.toFixed(6).replace(".000000", "")
			}

			function g(b, c) {
				if(b.decompositionPair !== c) {
					b.decompositionPair = c;
					var d = a.makeMatrixDecomposition(b)
				}
				if(c.decompositionPair !== b) {
					c.decompositionPair = b;
					var e = a.makeMatrixDecomposition(c)
				}
				return null == d[0] || null == e[0] ? [
					[!1],
					[!0],
					function(a) {
						return a ? c[0].d : b[0].d
					}
				] : (d[0].push(0), e[0].push(1), [d, e, function(b) {
					var c = a.quat(d[0][3], e[0][3], b[5]),
						g = a.composeMatrix(b[0], b[1], b[2], c, b[4]),
						h = g.map(f).join(",");
					return h
				}])
			}

			function h(a) {
				return a.replace(/[xy]/, "")
			}

			function i(a) {
				return a.replace(/(x|y|z|3d)?$/, "3d")
			}

			function j(b, c) {
				var d = a.makeMatrixDecomposition && !0,
					e = !1;
				if(!b.length || !c.length) {
					b.length || (e = !0, b = c, c = []);
					for(var f = 0; f < b.length; f++) {
						var j = b[f].t,
							k = b[f].d,
							l = "scale" == j.substr(0, 5) ? 1 : 0;
						c.push({
							t: j,
							d: k.map(function(a) {
								if("number" == typeof a) return l;
								var b = {};
								for(var c in a) b[c] = l;
								return b
							})
						})
					}
				}
				var m = function(a, b) {
						return "perspective" == a && "perspective" == b || ("matrix" == a || "matrix3d" == a) && ("matrix" == b || "matrix3d" == b)
					},
					o = [],
					p = [],
					q = [];
				if(b.length != c.length) {
					if(!d) return;
					var r = g(b, c);
					o = [r[0]], p = [r[1]], q = [
						["matrix", [r[2]]]
					]
				} else
					for(var f = 0; f < b.length; f++) {
						var j, s = b[f].t,
							t = c[f].t,
							u = b[f].d,
							v = c[f].d,
							w = n[s],
							x = n[t];
						if(m(s, t)) {
							if(!d) return;
							var r = g([b[f]], [c[f]]);
							o.push(r[0]), p.push(r[1]), q.push(["matrix", [r[2]]])
						} else {
							if(s == t) j = s;
							else if(w[2] && x[2] && h(s) == h(t)) j = h(s), u = w[2](u), v = x[2](v);
							else {
								if(!w[1] || !x[1] || i(s) != i(t)) {
									if(!d) return;
									var r = g(b, c);
									o = [r[0]], p = [r[1]], q = [
										["matrix", [r[2]]]
									];
									break
								}
								j = i(s), u = w[1](u), v = x[1](v)
							}
							for(var y = [], z = [], A = [], B = 0; B < u.length; B++) {
								var C = "number" == typeof u[B] ? a.mergeNumbers : a.mergeDimensions,
									r = C(u[B], v[B]);
								y[B] = r[0], z[B] = r[1], A.push(r[2])
							}
							o.push(y), p.push(z), q.push([j, A])
						}
					}
				if(e) {
					var D = o;
					o = p, p = D
				}
				return [o, p, function(a) {
					return a.map(function(a, b) {
						var c = a.map(function(a, c) {
							return q[b][1][c](a)
						}).join(",");
						return "matrix" == q[b][0] && 16 == c.split(",").length && (q[b][0] = "matrix3d"), q[b][0] + "(" + c + ")"
					}).join(" ")
				}]
			}
			var k = null,
				l = {
					px: 0
				},
				m = {
					deg: 0
				},
				n = {
					matrix: ["NNNNNN", [k, k, 0, 0, k, k, 0, 0, 0, 0, 1, 0, k, k, 0, 1], d],
					matrix3d: ["NNNNNNNNNNNNNNNN", d],
					rotate: ["A"],
					rotatex: ["A"],
					rotatey: ["A"],
					rotatez: ["A"],
					rotate3d: ["NNNA"],
					perspective: ["L"],
					scale: ["Nn", c([k, k, 1]), d],
					scalex: ["N", c([k, 1, 1]), c([k, 1])],
					scaley: ["N", c([1, k, 1]), c([1, k])],
					scalez: ["N", c([1, 1, k])],
					scale3d: ["NNN", d],
					skew: ["Aa", null, d],
					skewx: ["A", null, c([k, m])],
					skewy: ["A", null, c([m, k])],
					translate: ["Tt", c([k, k, l]), d],
					translatex: ["T", c([k, l, l]), c([k, l])],
					translatey: ["T", c([l, k, l]), c([l, k])],
					translatez: ["L", c([l, l, k])],
					translate3d: ["TTL", d]
				};
			a.addPropertiesHandler(e, j, ["transform"])
		}(d, f),
		function(a) {
			function b(a) {
				var b = Number(a);
				return isNaN(b) || 100 > b || b > 900 || b % 100 !== 0 ? void 0 : b
			}

			function c(b) {
				return b = 100 * Math.round(b / 100), b = a.clamp(100, 900, b), 400 === b ? "normal" : 700 === b ? "bold" : String(b)
			}

			function d(a, b) {
				return [a, b, c]
			}
			a.addPropertiesHandler(b, d, ["font-weight"])
		}(d),
		function(a) {
			function b(a) {
				var b = {};
				for(var c in a) b[c] = -a[c];
				return b
			}

			function c(b) {
				return a.consumeToken(/^(left|center|right|top|bottom)\b/i, b) || a.consumeLengthOrPercent(b)
			}

			function d(b, d) {
				var e = a.consumeRepeated(c, /^/, d);
				if(e && "" == e[1]) {
					var f = e[0];
					if(f[0] = f[0] || "center", f[1] = f[1] || "center", 3 == b && (f[2] = f[2] || {
							px: 0
						}), f.length == b) {
						if(/top|bottom/.test(f[0]) || /left|right/.test(f[1])) {
							var h = f[0];
							f[0] = f[1], f[1] = h
						}
						if(/left|right|center|Object/.test(f[0]) && /top|bottom|center|Object/.test(f[1])) return f.map(function(a) {
							return "object" == typeof a ? a : g[a]
						})
					}
				}
			}

			function e(d) {
				var e = a.consumeRepeated(c, /^/, d);
				if(e) {
					for(var f = e[0], h = [{
							"%": 50
						}, {
							"%": 50
						}], i = 0, j = !1, k = 0; k < f.length; k++) {
						var l = f[k];
						"string" == typeof l ? (j = /bottom|right/.test(l), i = {
							left: 0,
							right: 0,
							center: i,
							top: 1,
							bottom: 1
						}[l], h[i] = g[l], "center" == l && i++) : (j && (l = b(l), l["%"] = (l["%"] || 0) + 100), h[i] = l, i++, j = !1)
					}
					return [h, e[1]]
				}
			}

			function f(b) {
				var c = a.consumeRepeated(e, /^,/, b);
				return c && "" == c[1] ? c[0] : void 0
			}
			var g = {
					left: {
						"%": 0
					},
					center: {
						"%": 50
					},
					right: {
						"%": 100
					},
					top: {
						"%": 0
					},
					bottom: {
						"%": 100
					}
				},
				h = a.mergeNestedRepeated.bind(null, a.mergeDimensions, " ");
			a.addPropertiesHandler(d.bind(null, 3), h, ["transform-origin"]), a.addPropertiesHandler(d.bind(null, 2), h, ["perspective-origin"]), a.consumePosition = e, a.mergeOffsetList = h;
			var i = a.mergeNestedRepeated.bind(null, h, ", ");
			a.addPropertiesHandler(f, i, ["background-position", "object-position"])
		}(d),
		function(a) {
			function b(b) {
				var c = a.consumeToken(/^circle/, b);
				if(c && c[0]) return ["circle"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0, /^\(/)), d, a.ignore(a.consumeToken.bind(void 0, /^at/)), a.consumePosition, a.ignore(a.consumeToken.bind(void 0, /^\)/))], c[1]));
				var f = a.consumeToken(/^ellipse/, b);
				if(f && f[0]) return ["ellipse"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0, /^\(/)), e, a.ignore(a.consumeToken.bind(void 0, /^at/)), a.consumePosition, a.ignore(a.consumeToken.bind(void 0, /^\)/))], f[1]));
				var g = a.consumeToken(/^polygon/, b);
				return g && g[0] ? ["polygon"].concat(a.consumeList([a.ignore(a.consumeToken.bind(void 0, /^\(/)), a.optional(a.consumeToken.bind(void 0, /^nonzero\s*,|^evenodd\s*,/), "nonzero,"), a.consumeSizePairList, a.ignore(a.consumeToken.bind(void 0, /^\)/))], g[1])) : void 0
			}

			function c(b, c) {
				return b[0] === c[0] ? "circle" == b[0] ? a.mergeList(b.slice(1), c.slice(1), ["circle(", a.mergeDimensions, " at ", a.mergeOffsetList, ")"]) : "ellipse" == b[0] ? a.mergeList(b.slice(1), c.slice(1), ["ellipse(", a.mergeNonNegativeSizePair, " at ", a.mergeOffsetList, ")"]) : "polygon" == b[0] && b[1] == c[1] ? a.mergeList(b.slice(2), c.slice(2), ["polygon(", b[1], g, ")"]) : void 0 : void 0
			}
			var d = a.consumeParenthesised.bind(null, a.parseLengthOrPercent),
				e = a.consumeRepeated.bind(void 0, d, /^/),
				f = a.mergeNestedRepeated.bind(void 0, a.mergeDimensions, " "),
				g = a.mergeNestedRepeated.bind(void 0, f, ",");
			a.addPropertiesHandler(b, c, ["shape-outside"])
		}(d),
		function(a, b) {
			function c(a, b) {
				b.concat([a]).forEach(function(b) {
					b in document.documentElement.style && (d[a] = b)
				})
			}
			var d = {};
			c("transform", ["webkitTransform", "msTransform"]), c("transformOrigin", ["webkitTransformOrigin"]), c("perspective", ["webkitPerspective"]), c("perspectiveOrigin", ["webkitPerspectiveOrigin"]), a.propertyName = function(a) {
				return d[a] || a
			}
		}(d, f)
	}(), ! function() {
		if(void 0 === document.createElement("div").animate([]).oncancel) {
			var a;
			if(window.performance && performance.now) var a = function() {
				return performance.now()
			};
			else var a = function() {
				return Date.now()
			};
			var b = function(a, b, c) {
					this.target = a, this.currentTime = b, this.timelineTime = c, this.type = "cancel", this.bubbles = !1, this.cancelable = !1, this.currentTarget = a, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now()
				},
				c = window.Element.prototype.animate;
			window.Element.prototype.animate = function(d, e) {
				var f = c.call(this, d, e);
				f._cancelHandlers = [], f.oncancel = null;
				var g = f.cancel;
				f.cancel = function() {
					g.call(this);
					var c = new b(this, null, a()),
						d = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);
					setTimeout(function() {
						d.forEach(function(a) {
							a.call(c.target, c)
						})
					}, 0)
				};
				var h = f.addEventListener;
				f.addEventListener = function(a, b) {
					"function" == typeof b && "cancel" == a ? this._cancelHandlers.push(b) : h.call(this, a, b)
				};
				var i = f.removeEventListener;
				return f.removeEventListener = function(a, b) {
					if("cancel" == a) {
						var c = this._cancelHandlers.indexOf(b);
						c >= 0 && this._cancelHandlers.splice(c, 1)
					} else i.call(this, a, b)
				}, f
			}
		}
	}(),
	function(a) {
		var b = document.documentElement,
			c = b.animate({
				opacity: ["1", "0"]
			}, {
				duration: 1,
				fill: "forwards"
			});
		c.finish();
		var d = "0" == getComputedStyle(b).getPropertyValue("opacity");
		if(c.cancel(), !d) {
			var e = window.Element.prototype.animate;
			window.Element.prototype.animate = function(b, c) {
				return window.Symbol && Symbol.iterator && Array.prototype.from && b[Symbol.iterator] && (b = Array.from(b)), Array.isArray(b) || null === b || (b = a.convertToArrayForm(b)), e.call(this, b, c)
			}
		}
	}(c), ! function(a, b, c) {
		function d(a) {
			var b = window.document.timeline;
			b.currentTime = a, b._discardAnimations(), 0 == b._animations.length ? f = !1 : requestAnimationFrame(d)
		}
		var e = window.requestAnimationFrame;
		window.requestAnimationFrame = function(a) {
			return e(function(b) {
				window.document.timeline._updateAnimationsPromises(), a(b), window.document.timeline._updateAnimationsPromises()
			})
		}, b.AnimationTimeline = function() {
			this._animations = [], this.currentTime = void 0
		}, b.AnimationTimeline.prototype = {
			getAnimations: function() {
				return this._discardAnimations(), this._animations.slice()
			},
			_updateAnimationsPromises: function() {
				b.animationsWithPromises = b.animationsWithPromises.filter(function(a) {
					return a._updatePromises()
				})
			},
			_discardAnimations: function() {
				this._updateAnimationsPromises(), this._animations = this._animations.filter(function(a) {
					return "finished" != a.playState && "idle" != a.playState
				})
			},
			_play: function(a) {
				var c = new b.Animation(a, this);
				return this._animations.push(c), b.restartWebAnimationsNextTick(), c._updatePromises(), c._animation.play(), c._updatePromises(), c
			},
			play: function(a) {
				return a && a.remove(), this._play(a)
			}
		};
		var f = !1;
		b.restartWebAnimationsNextTick = function() {
			f || (f = !0, requestAnimationFrame(d))
		};
		var g = new b.AnimationTimeline;
		b.timeline = g;
		try {
			Object.defineProperty(window.document, "timeline", {
				configurable: !0,
				get: function() {
					return g
				}
			})
		} catch(h) {}
		try {
			window.document.timeline = g
		} catch(h) {}
	}(c, e, f),
	function(a, b, c) {
		b.animationsWithPromises = [], b.Animation = function(b, c) {
			if(this.id = "", b && b._id && (this.id = b._id), this.effect = b, b && (b._animation = this), !c) throw new Error("Animation with null timeline is not supported");
			this._timeline = c, this._sequenceNumber = a.sequenceNumber++, this._holdTime = 0, this._paused = !1, this._isGroup = !1, this._animation = null, this._childAnimations = [], this._callback = null, this._oldPlayState = "idle", this._rebuildUnderlyingAnimation(), this._animation.cancel(), this._updatePromises()
		}, b.Animation.prototype = {
			_updatePromises: function() {
				var a = this._oldPlayState,
					b = this.playState;
				return this._readyPromise && b !== a && ("idle" == b ? (this._rejectReadyPromise(), this._readyPromise = void 0) : "pending" == a ? this._resolveReadyPromise() : "pending" == b && (this._readyPromise = void 0)), this._finishedPromise && b !== a && ("idle" == b ? (this._rejectFinishedPromise(), this._finishedPromise = void 0) : "finished" == b ? this._resolveFinishedPromise() : "finished" == a && (this._finishedPromise = void 0)), this._oldPlayState = this.playState, this._readyPromise || this._finishedPromise
			},
			_rebuildUnderlyingAnimation: function() {
				this._updatePromises();
				var a, c, d, e, f = !!this._animation;
				f && (a = this.playbackRate, c = this._paused, d = this.startTime, e = this.currentTime, this._animation.cancel(), this._animation._wrapper = null, this._animation = null), (!this.effect || this.effect instanceof window.KeyframeEffect) && (this._animation = b.newUnderlyingAnimationForKeyframeEffect(this.effect), b.bindAnimationForKeyframeEffect(this)), (this.effect instanceof window.SequenceEffect || this.effect instanceof window.GroupEffect) && (this._animation = b.newUnderlyingAnimationForGroup(this.effect), b.bindAnimationForGroup(this)), this.effect && this.effect._onsample && b.bindAnimationForCustomEffect(this), f && (1 != a && (this.playbackRate = a), null !== d ? this.startTime = d : null !== e ? this.currentTime = e : null !== this._holdTime && (this.currentTime = this._holdTime), c && this.pause()), this._updatePromises()
			},
			_updateChildren: function() {
				if(this.effect && "idle" != this.playState) {
					var a = this.effect._timing.delay;
					this._childAnimations.forEach(function(c) {
						this._arrangeChildren(c, a), this.effect instanceof window.SequenceEffect && (a += b.groupChildDuration(c.effect))
					}.bind(this))
				}
			},
			_setExternalAnimation: function(a) {
				if(this.effect && this._isGroup)
					for(var b = 0; b < this.effect.children.length; b++) this.effect.children[b]._animation = a, this._childAnimations[b]._setExternalAnimation(a)
			},
			_constructChildAnimations: function() {
				if(this.effect && this._isGroup) {
					var a = this.effect._timing.delay;
					this._removeChildAnimations(), this.effect.children.forEach(function(c) {
						var d = window.document.timeline._play(c);
						this._childAnimations.push(d), d.playbackRate = this.playbackRate, this._paused && d.pause(), c._animation = this.effect._animation, this._arrangeChildren(d, a), this.effect instanceof window.SequenceEffect && (a += b.groupChildDuration(c))
					}.bind(this))
				}
			},
			_arrangeChildren: function(a, b) {
				null === this.startTime ? a.currentTime = this.currentTime - b / this.playbackRate : a.startTime !== this.startTime + b / this.playbackRate && (a.startTime = this.startTime + b / this.playbackRate)
			},
			get timeline() {
				return this._timeline
			},
			get playState() {
				return this._animation ? this._animation.playState : "idle"
			},
			get finished() {
				return window.Promise ? (this._finishedPromise || (-1 == b.animationsWithPromises.indexOf(this) && b.animationsWithPromises.push(this), this._finishedPromise = new Promise(function(a, b) {
					this._resolveFinishedPromise = function() {
						a(this)
					}, this._rejectFinishedPromise = function() {
						b({
							type: DOMException.ABORT_ERR,
							name: "AbortError"
						})
					}
				}.bind(this)), "finished" == this.playState && this._resolveFinishedPromise()), this._finishedPromise) : (console.warn("Animation Promises require JavaScript Promise constructor"), null)
			},
			get ready() {
				return window.Promise ? (this._readyPromise || (-1 == b.animationsWithPromises.indexOf(this) && b.animationsWithPromises.push(this), this._readyPromise = new Promise(function(a, b) {
					this._resolveReadyPromise = function() {
						a(this)
					}, this._rejectReadyPromise = function() {
						b({
							type: DOMException.ABORT_ERR,
							name: "AbortError"
						})
					}
				}.bind(this)), "pending" !== this.playState && this._resolveReadyPromise()), this._readyPromise) : (console.warn("Animation Promises require JavaScript Promise constructor"), null)
			},
			get onfinish() {
				return this._animation.onfinish
			},
			set onfinish(a) {
				"function" == typeof a ? this._animation.onfinish = function(b) {
					b.target = this, a.call(this, b)
				}.bind(this) : this._animation.onfinish = a
			},
			get oncancel() {
				return this._animation.oncancel
			},
			set oncancel(a) {
				"function" == typeof a ? this._animation.oncancel = function(b) {
					b.target = this, a.call(this, b)
				}.bind(this) : this._animation.oncancel = a
			},
			get currentTime() {
				this._updatePromises();
				var a = this._animation.currentTime;
				return this._updatePromises(), a
			},
			set currentTime(a) {
				this._updatePromises(), this._animation.currentTime = isFinite(a) ? a : Math.sign(a) * Number.MAX_VALUE, this._register(), this._forEachChild(function(b, c) {
					b.currentTime = a - c
				}), this._updatePromises()
			},
			get startTime() {
				return this._animation.startTime
			},
			set startTime(a) {
				this._updatePromises(), this._animation.startTime = isFinite(a) ? a : Math.sign(a) * Number.MAX_VALUE, this._register(), this._forEachChild(function(b, c) {
					b.startTime = a + c
				}), this._updatePromises()
			},
			get playbackRate() {
				return this._animation.playbackRate
			},
			set playbackRate(a) {
				this._updatePromises();
				var b = this.currentTime;
				this._animation.playbackRate = a, this._forEachChild(function(b) {
					b.playbackRate = a
				}), "paused" != this.playState && "idle" != this.playState && this.play(), null !== b && (this.currentTime = b), this._updatePromises()
			},
			play: function() {
				this._updatePromises(), this._paused = !1, this._animation.play(), -1 == this._timeline._animations.indexOf(this) && this._timeline._animations.push(this), this._register(), b.awaitStartTime(this), this._forEachChild(function(a) {
					var b = a.currentTime;
					a.play(), a.currentTime = b
				}), this._updatePromises()
			},
			pause: function() {
				this._updatePromises(), this.currentTime && (this._holdTime = this.currentTime), this._animation.pause(), this._register(), this._forEachChild(function(a) {
					a.pause()
				}), this._paused = !0, this._updatePromises()
			},
			finish: function() {
				this._updatePromises(), this._animation.finish(), this._register(), this._updatePromises()
			},
			cancel: function() {
				this._updatePromises(), this._animation.cancel(), this._register(), this._removeChildAnimations(), this._updatePromises()
			},
			reverse: function() {
				this._updatePromises();
				var a = this.currentTime;
				this._animation.reverse(), this._forEachChild(function(a) {
					a.reverse()
				}), null !== a && (this.currentTime = a), this._updatePromises()
			},
			addEventListener: function(a, b) {
				var c = b;
				"function" == typeof b && (c = function(a) {
					a.target = this, b.call(this, a)
				}.bind(this), b._wrapper = c), this._animation.addEventListener(a, c)
			},
			removeEventListener: function(a, b) {
				this._animation.removeEventListener(a, b && b._wrapper || b)
			},
			_removeChildAnimations: function() {
				for(; this._childAnimations.length;) this._childAnimations.pop().cancel()
			},
			_forEachChild: function(b) {
				var c = 0;
				if(this.effect.children && this._childAnimations.length < this.effect.children.length && this._constructChildAnimations(), this._childAnimations.forEach(function(a) {
						b.call(this, a, c), this.effect instanceof window.SequenceEffect && (c += a.effect.activeDuration)
					}.bind(this)), "pending" != this.playState) {
					var d = this.effect._timing,
						e = this.currentTime;
					null !== e && (e = a.calculateTimeFraction(a.calculateActiveDuration(d), e, d)), (null == e || isNaN(e)) && this._removeChildAnimations()
				}
			}
		}, window.Animation = b.Animation
	}(c, e, f),
	function(a, b, c) {
		function d(b) {
			this._frames = a.normalizeKeyframes(b)
		}

		function e() {
			for(var a = !1; i.length;) {
				var b = i.shift();
				b._updateChildren(), a = !0
			}
			return a
		}
		var f = function(a) {
			if(a._animation = void 0, a instanceof window.SequenceEffect || a instanceof window.GroupEffect)
				for(var b = 0; b < a.children.length; b++) f(a.children[b])
		};
		b.removeMulti = function(a) {
			for(var b = [], c = 0; c < a.length; c++) {
				var d = a[c];
				d._parent ? (-1 == b.indexOf(d._parent) && b.push(d._parent), d._parent.children.splice(d._parent.children.indexOf(d), 1), d._parent = null, f(d)) : d._animation && d._animation.effect == d && (d._animation.cancel(), d._animation.effect = new KeyframeEffect(null, []), d._animation._callback && (d._animation._callback._animation = null), d._animation._rebuildUnderlyingAnimation(), f(d))
			}
			for(c = 0; c < b.length; c++) b[c]._rebuild()
		}, b.KeyframeEffect = function(b, c, e, f) {
			return this.target = b, this._parent = null, e = a.numericTimingToObject(e), this._timingInput = a.cloneTimingInput(e), this._timing = a.normalizeTimingInput(e), this.timing = a.makeTiming(e, !1, this), this.timing._effect = this, "function" == typeof c ? (a.deprecated("Custom KeyframeEffect", "2015-06-22", "Use KeyframeEffect.onsample instead."), this._normalizedKeyframes = c) : this._normalizedKeyframes = new d(c), this._keyframes = c, this.activeDuration = a.calculateActiveDuration(this._timing), this._id = f, this
		}, b.KeyframeEffect.prototype = {
			getFrames: function() {
				return "function" == typeof this._normalizedKeyframes ? this._normalizedKeyframes : this._normalizedKeyframes._frames
			},
			set onsample(a) {
				if("function" == typeof this.getFrames()) throw new Error("Setting onsample on custom effect KeyframeEffect is not supported.");
				this._onsample = a, this._animation && this._animation._rebuildUnderlyingAnimation()
			},
			get parent() {
				return this._parent
			},
			clone: function() {
				if("function" == typeof this.getFrames()) throw new Error("Cloning custom effects is not supported.");
				var b = new KeyframeEffect(this.target, [], a.cloneTimingInput(this._timingInput), this._id);
				return b._normalizedKeyframes = this._normalizedKeyframes, b._keyframes = this._keyframes, b
			},
			remove: function() {
				b.removeMulti([this])
			}
		};
		var g = Element.prototype.animate;
		Element.prototype.animate = function(a, c) {
			var d = "";
			return c && c.id && (d = c.id), b.timeline._play(new b.KeyframeEffect(this, a, c, d))
		};
		var h = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
		b.newUnderlyingAnimationForKeyframeEffect = function(a) {
			if(a) {
				var b = a.target || h,
					c = a._keyframes;
				"function" == typeof c && (c = []);
				var d = a._timingInput;
				d.id = a._id
			} else var b = h,
				c = [],
				d = 0;
			return g.apply(b, [c, d])
		}, b.bindAnimationForKeyframeEffect = function(a) {
			a.effect && "function" == typeof a.effect._normalizedKeyframes && b.bindAnimationForCustomEffect(a)
		};
		var i = [];
		b.awaitStartTime = function(a) {
			null === a.startTime && a._isGroup && (0 == i.length && requestAnimationFrame(e), i.push(a))
		};
		var j = window.getComputedStyle;
		Object.defineProperty(window, "getComputedStyle", {
			configurable: !0,
			enumerable: !0,
			value: function() {
				window.document.timeline._updateAnimationsPromises();
				var a = j.apply(this, arguments);
				return e() && (a = j.apply(this, arguments)), window.document.timeline._updateAnimationsPromises(), a
			}
		}), window.KeyframeEffect = b.KeyframeEffect, window.Element.prototype.getAnimations = function() {
			return document.timeline.getAnimations().filter(function(a) {
				return null !== a.effect && a.effect.target == this
			}.bind(this))
		}
	}(c, e, f),
	function(a, b, c) {
		function d(a) {
			a._registered || (a._registered = !0, g.push(a), h || (h = !0, requestAnimationFrame(e)))
		}

		function e(a) {
			var b = g;
			g = [], b.sort(function(a, b) {
				return a._sequenceNumber - b._sequenceNumber
			}), b = b.filter(function(a) {
				a();
				var b = a._animation ? a._animation.playState : "idle";
				return "running" != b && "pending" != b && (a._registered = !1), a._registered
			}), g.push.apply(g, b), g.length ? (h = !0, requestAnimationFrame(e)) : h = !1
		}
		var f = (document.createElementNS("http://www.w3.org/1999/xhtml", "div"), 0);
		b.bindAnimationForCustomEffect = function(b) {
			var c, e = b.effect.target,
				g = "function" == typeof b.effect.getFrames();
			c = g ? b.effect.getFrames() : b.effect._onsample;
			var h = b.effect.timing,
				i = null;
			h = a.normalizeTimingInput(h);
			var j = function() {
				var d = j._animation ? j._animation.currentTime : null;
				null !== d && (d = a.calculateTimeFraction(a.calculateActiveDuration(h), d, h), isNaN(d) && (d = null)), d !== i && (g ? c(d, e, b.effect) : c(d, b.effect, b.effect._animation)), i = d
			};
			j._animation = b, j._registered = !1, j._sequenceNumber = f++, b._callback = j, d(j)
		};
		var g = [],
			h = !1;
		b.Animation.prototype._register = function() {
			this._callback && d(this._callback)
		}
	}(c, e, f),
	function(a, b, c) {
		function d(a) {
			return a._timing.delay + a.activeDuration + a._timing.endDelay
		}

		function e(b, c, d) {
			this._id = d, this._parent = null, this.children = b || [], this._reparent(this.children), c = a.numericTimingToObject(c), this._timingInput = a.cloneTimingInput(c), this._timing = a.normalizeTimingInput(c, !0), this.timing = a.makeTiming(c, !0, this), this.timing._effect = this, "auto" === this._timing.duration && (this._timing.duration = this.activeDuration)
		}
		window.SequenceEffect = function() {
			e.apply(this, arguments)
		}, window.GroupEffect = function() {
			e.apply(this, arguments)
		}, e.prototype = {
			_isAncestor: function(a) {
				for(var b = this; null !== b;) {
					if(b == a) return !0;
					b = b._parent
				}
				return !1
			},
			_rebuild: function() {
				for(var a = this; a;) "auto" === a.timing.duration && (a._timing.duration = a.activeDuration), a = a._parent;
				this._animation && this._animation._rebuildUnderlyingAnimation()
			},
			_reparent: function(a) {
				b.removeMulti(a);
				for(var c = 0; c < a.length; c++) a[c]._parent = this
			},
			_putChild: function(a, b) {
				for(var c = b ? "Cannot append an ancestor or self" : "Cannot prepend an ancestor or self", d = 0; d < a.length; d++)
					if(this._isAncestor(a[d])) throw {
						type: DOMException.HIERARCHY_REQUEST_ERR,
						name: "HierarchyRequestError",
						message: c
					};
				for(var d = 0; d < a.length; d++) b ? this.children.push(a[d]) : this.children.unshift(a[d]);
				this._reparent(a), this._rebuild()
			},
			append: function() {
				this._putChild(arguments, !0)
			},
			prepend: function() {
				this._putChild(arguments, !1)
			},
			get parent() {
				return this._parent
			},
			get firstChild() {
				return this.children.length ? this.children[0] : null
			},
			get lastChild() {
				return this.children.length ? this.children[this.children.length - 1] : null
			},
			clone: function() {
				for(var b = a.cloneTimingInput(this._timingInput), c = [], d = 0; d < this.children.length; d++) c.push(this.children[d].clone());
				return this instanceof GroupEffect ? new GroupEffect(c, b) : new SequenceEffect(c, b)
			},
			remove: function() {
				b.removeMulti([this])
			}
		}, window.SequenceEffect.prototype = Object.create(e.prototype), Object.defineProperty(window.SequenceEffect.prototype, "activeDuration", {
			get: function() {
				var a = 0;
				return this.children.forEach(function(b) {
					a += d(b)
				}), Math.max(a, 0)
			}
		}), window.GroupEffect.prototype = Object.create(e.prototype), Object.defineProperty(window.GroupEffect.prototype, "activeDuration", {
			get: function() {
				var a = 0;
				return this.children.forEach(function(b) {
					a = Math.max(a, d(b))
				}), a
			}
		}), b.newUnderlyingAnimationForGroup = function(c) {
			var d, e = null,
				f = function(b) {
					var c = d._wrapper;
					return c && "pending" != c.playState && c.effect ? null == b ? void c._removeChildAnimations() : 0 == b && c.playbackRate < 0 && (e || (e = a.normalizeTimingInput(c.effect.timing)), b = a.calculateTimeFraction(a.calculateActiveDuration(e), -1, e), isNaN(b) || null == b) ? (c._forEachChild(function(a) {
						a.currentTime = -1
					}), void c._removeChildAnimations()) : void 0 : void 0
				},
				g = new KeyframeEffect(null, [], c._timing, c._id);
			return g.onsample = f, d = b.timeline._play(g)
		}, b.bindAnimationForGroup = function(a) {
			a._animation._wrapper = a, a._isGroup = !0, b.awaitStartTime(a), a._constructChildAnimations(), a._setExternalAnimation(a)
		}, b.groupChildDuration = d
	}(c, e, f), b["true"] = a
}({}, function() {
	return this
}());
//# sourceMappingURL=web-animations-next.min.js.map