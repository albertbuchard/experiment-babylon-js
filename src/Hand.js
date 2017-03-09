var HANDJS = HANDJS || {}; !(function () {
  function e() { b = !0, clearTimeout(M), M = setTimeout(() => { b = !1 }, 700) } function t(e, t) { for (;e;) { if (e.contains(t)) return e; e = e.parentNode } return null } function n(e, n, o) { for (var r = t(e, n), i = e, a = []; i && i !== r;)h(i, 'pointerenter') && a.push(i), i = i.parentNode; for (;a.length > 0;)o(a.pop()) } function o(e, n, o) { for (let r = t(e, n), i = e; i && i !== r;)h(i, 'pointerleave') && o(i), i = i.parentNode } function r(e, t) { ['pointerdown', 'pointermove', 'pointerup', 'pointerover', 'pointerout'].forEach((n) => { window.addEventListener(e(n), (e) => { !b && g(e.target, n) && t(e, n, !0) }) }), void 0 === window[`on${e('pointerenter').toLowerCase()}`] && window.addEventListener(e('pointerover'), (e) => { if (!b) { const o = g(e.target, 'pointerenter'); o && o !== window && (o.contains(e.relatedTarget) || n(o, e.relatedTarget, (n) => { t(e, 'pointerenter', !1, n, e.relatedTarget) })) } }), void 0 === window[`on${e('pointerleave').toLowerCase()}`] && window.addEventListener(e('pointerout'), (e) => { if (!b) { const n = g(e.target, 'pointerleave'); n && n !== window && (n.contains(e.relatedTarget) || o(n, e.relatedTarget, (n) => { t(e, 'pointerleave', !1, n, e.relatedTarget) })) } }) } if (!window.PointerEvent) {
    Array.prototype.indexOf || (Array.prototype.indexOf = function (e) {
      let t = Object(this),
        n = t.length >>> 0; if (n === 0) return -1; let o = 0; if (arguments.length > 0 && (o = Number(arguments[1]), o !== o ? o = 0 : o !== 0 && 1 / 0 !== o && o !== -1 / 0 && (o = (o > 0 || -1) * Math.floor(Math.abs(o)))), o >= n) return -1; for (let r = o >= 0 ? o : Math.max(n - Math.abs(o), 0); n > r; r++) if (r in t && t[r] === e) return r; return -1
    }), Array.prototype.forEach || (Array.prototype.forEach = function (e, t) { if (!(this && e instanceof Function)) throw new TypeError(); for (let n = 0; n < this.length; n++)e.call(t, this[n], n, this) }), String.prototype.trim || (String.prototype.trim = function () { return this.replace(/^\s+|\s+$/, '') }); var i = ['pointerdown', 'pointerup', 'pointermove', 'pointerover', 'pointerout', 'pointercancel', 'pointerenter', 'pointerleave'],
      a = ['PointerDown', 'PointerUp', 'PointerMove', 'PointerOver', 'PointerOut', 'PointerCancel', 'PointerEnter', 'PointerLeave'],
      s = 'touch',
      d = 'pen',
      c = 'mouse',
      l = {},
      v = function (e) { for (;e && !e.handjs_forcePreventDefault;)e = e.parentNode; return !!e || window.handjs_forcePreventDefault },
      f = function (e, t, n, o, r) { let i; if (document.createEvent ? (i = document.createEvent('MouseEvents'), i.initMouseEvent(t, n, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, r || e.relatedTarget)) : (i = document.createEventObject(), i.screenX = e.screenX, i.screenY = e.screenY, i.clientX = e.clientX, i.clientY = e.clientY, i.ctrlKey = e.ctrlKey, i.altKey = e.altKey, i.shiftKey = e.shiftKey, i.metaKey = e.metaKey, i.button = e.button, i.relatedTarget = r || e.relatedTarget), void 0 === i.offsetX && (void 0 !== e.offsetX ? (Object && void 0 !== Object.defineProperty && (Object.defineProperty(i, 'offsetX', { writable: !0 }), Object.defineProperty(i, 'offsetY', { writable: !0 })), i.offsetX = e.offsetX, i.offsetY = e.offsetY) : Object && void 0 !== Object.defineProperty ? (Object.defineProperty(i, 'offsetX', { get() { return this.currentTarget && this.currentTarget.offsetLeft ? e.clientX - this.currentTarget.offsetLeft : e.clientX } }), Object.defineProperty(i, 'offsetY', { get() { return this.currentTarget && this.currentTarget.offsetTop ? e.clientY - this.currentTarget.offsetTop : e.clientY } })) : void 0 !== e.layerX && (i.offsetX = e.layerX - e.currentTarget.offsetLeft, i.offsetY = e.layerY - e.currentTarget.offsetTop)), i.isPrimary = void 0 !== e.isPrimary ? e.isPrimary : !0, e.pressure)i.pressure = e.pressure; else { let a = 0; void 0 !== e.which ? a = e.which : void 0 !== e.button && (a = e.button), i.pressure = a === 0 ? 0 : 0.5 } if (i.rotation = e.rotation ? e.rotation : 0, i.hwTimestamp = e.hwTimestamp ? e.hwTimestamp : 0, i.tiltX = e.tiltX ? e.tiltX : 0, i.tiltY = e.tiltY ? e.tiltY : 0, i.height = e.height ? e.height : 0, i.width = e.width ? e.width : 0, i.preventDefault = function () { void 0 !== e.preventDefault && e.preventDefault() }, void 0 !== i.stopPropagation) { const l = i.stopPropagation; i.stopPropagation = function () { void 0 !== e.stopPropagation && e.stopPropagation(), l.call(this) } } switch (i.pointerId = e.pointerId, i.pointerType = e.pointerType, i.pointerType) { case 2:i.pointerType = s; break; case 3:i.pointerType = d; break; case 4:i.pointerType = c }o ? o.dispatchEvent(i) : e.target ? e.target.dispatchEvent(i) : e.srcElement.fireEvent(`on${E(t)}`, i) },
      u = function (e, t, n, o, r) { e.pointerId = 1, e.pointerType = c, f(e, t, n, o, r) },
      p = function (e, t, n, o, r, i) { const a = t.identifier + 2; t.pointerId = a, t.pointerType = s, t.currentTarget = n, void 0 !== o.preventDefault && (t.preventDefault = function () { o.preventDefault() }), f(t, e, r, n, i) },
      h = function (e, t) { return e.__handjsGlobalRegisteredEvents && e.__handjsGlobalRegisteredEvents[t] },
      g = function (e, t) { for (;e && !h(e, t);)e = e.parentNode; return e || h(window, t) ? window : void 0 },
      m = function (e, t, n, o, r, i) { g(n, e) && p(e, t, n, o, r, i) },
      E = function (e) { return e.toLowerCase().replace('pointer', 'mouse') },
      w = function (e, t) {
        let n = i.indexOf(t),
          o = e + a[n]; return o
      },
      T = function (e, t, n, o) { if (void 0 === e.__handjsRegisteredEvents && (e.__handjsRegisteredEvents = []), o) { if (void 0 !== e.__handjsRegisteredEvents[t]) return e.__handjsRegisteredEvents[t]++, void 0; e.__handjsRegisteredEvents[t] = 1, e.addEventListener(t, n, !1) } else { if (e.__handjsRegisteredEvents.indexOf(t) !== -1 && (e.__handjsRegisteredEvents[t]--, e.__handjsRegisteredEvents[t] !== 0)) return; e.removeEventListener(t, n), e.__handjsRegisteredEvents[t] = 0 } },
      y = function (e, t, n) {
        if (e.__handjsGlobalRegisteredEvents || (e.__handjsGlobalRegisteredEvents = []), n) { if (void 0 !== e.__handjsGlobalRegisteredEvents[t]) return e.__handjsGlobalRegisteredEvents[t]++, void 0; e.__handjsGlobalRegisteredEvents[t] = 1 } else void 0 !== e.__handjsGlobalRegisteredEvents[t] && (e.__handjsGlobalRegisteredEvents[t]--, e.__handjsGlobalRegisteredEvents[t] < 0 && (e.__handjsGlobalRegisteredEvents[t] = 0)); let o,
          r; switch (window.MSPointerEvent ? (o = function (e) { return w('MS', e) }, r = f) : (o = E, r = u), t) { case 'pointerenter':case 'pointerleave':var i = o(t); void 0 !== e[`on${i.toLowerCase()}`] && T(e, i, (e) => { r(e, t) }, n) }
      },
      L = function (e) {
        let t = e.prototype ? e.prototype.addEventListener : e.addEventListener,
          n = function (e, n, o) { i.indexOf(e) !== -1 && y(this, e, !0), void 0 === t ? this.attachEvent(`on${E(e)}`, n) : t.call(this, e, n, o) }; e.prototype ? e.prototype.addEventListener = n : e.addEventListener = n
      },
      _ = function (e) {
        let t = e.prototype ? e.prototype.removeEventListener : e.removeEventListener,
          n = function (e, n, o) { i.indexOf(e) !== -1 && y(this, e, !1), void 0 === t ? this.detachEvent(E(e), n) : t.call(this, e, n, o) }; e.prototype ? e.prototype.removeEventListener = n : e.removeEventListener = n
      }; L(window), L(window.HTMLElement || window.Element), L(document), navigator.isCocoonJS || (L(HTMLBodyElement), L(HTMLDivElement), L(HTMLImageElement), L(HTMLUListElement), L(HTMLAnchorElement), L(HTMLLIElement), L(HTMLTableElement), window.HTMLSpanElement && L(HTMLSpanElement)), window.HTMLCanvasElement && L(HTMLCanvasElement), !navigator.isCocoonJS && window.SVGElement && L(SVGElement), _(window), _(window.HTMLElement || window.Element), _(document), navigator.isCocoonJS || (_(HTMLBodyElement), _(HTMLDivElement), _(HTMLImageElement), _(HTMLUListElement), _(HTMLAnchorElement), _(HTMLLIElement), _(HTMLTableElement), window.HTMLSpanElement && _(HTMLSpanElement)), window.HTMLCanvasElement && _(HTMLCanvasElement), !navigator.isCocoonJS && window.SVGElement && _(SVGElement); var b = !1,
        M = -1; !(function () {
          window.MSPointerEvent ? r(e => w('MS', e), f) : (r(E, u), void 0 !== window.ontouchstart && (window.addEventListener('touchstart', (t) => { for (let o = 0; o < t.changedTouches.length; ++o) { var r = t.changedTouches[o]; l[r.identifier] = r.target, m('pointerover', r, r.target, t, !0), n(r.target, null, (e) => { p('pointerenter', r, e, t, !1) }), m('pointerdown', r, r.target, t, !0) }e() }), window.addEventListener('touchend', (t) => {
           for (let n = 0; n < t.changedTouches.length; ++n) {
          var r = t.changedTouches[n],
            i = l[r.identifier]; m('pointerup', r, i, t, !0), m('pointerout', r, i, t, !0), o(i, null, (e) => { p('pointerleave', r, e, t, !1) })
        }e()
         }), window.addEventListener('touchmove', (t) => {
        for (let r = 0; r < t.changedTouches.length; ++r) {
          var i = t.changedTouches[r],
          a = document.elementFromPoint(i.clientX, i.clientY),
          s = l[i.identifier]; if (s && v(s) === !0 && t.preventDefault(), m('pointermove', i, s, t, !0), !navigator.isCocoonJS) { var a = document.elementFromPoint(i.clientX, i.clientY); if (s === a) continue; s && (m('pointerout', i, s, t, !0, a), s.contains(a) || o(s, a, (e) => { p('pointerleave', i, e, t, !1, a) })), a && (m('pointerover', i, a, t, !0, s), a.contains(s) || n(a, s, (e) => { p('pointerenter', i, e, t, !1, s) })), l[i.identifier] = a }
        }e()
      }), window.addEventListener('touchcancel', (e) => { for (let t = 0; t < e.changedTouches.length; ++t) { const n = e.changedTouches[t]; m('pointercancel', n, l[n.identifier], e, !0) } })))
        }()), void 0 === navigator.pointerEnabled && (navigator.pointerEnabled = !0, navigator.msPointerEnabled && (navigator.maxTouchPoints = navigator.msMaxTouchPoints))
  }
}()), (function () {
  window.PointerEvent || document.styleSheets && document.addEventListener && document.addEventListener('DOMContentLoaded', () => {
    if (void 0 === document.body.style.touchAction) {
      var e = new RegExp('.+?{.*?}', 'm'),
        t = new RegExp('.+?{', 'm'),
        n = function (n) { const o = e.exec(n); if (o) { const r = o[0]; n = n.replace(r, '').trim(); const i = t.exec(r)[0].replace('{', '').trim(); if (r.replace(/\s/g, '').indexOf('touch-action:none') !== -1) for (let a = document.querySelectorAll(i), s = 0; s < a.length; s++) { const d = a[s]; void 0 !== d.style.msTouchAction ? d.style.msTouchAction = 'none' : d.handjs_forcePreventDefault = !0 } return n } },
        o = function (e) { if (window.setImmediate)e && setImmediate(o, n(e)); else for (;e;)e = n(e) }; try { for (var r = 0; r < document.styleSheets.length; r++) { const i = document.styleSheets[r]; if (i.href != null) { const a = new XMLHttpRequest(); a.open('get', i.href), a.send(); const s = a.responseText.replace(/(\n|\r)/g, ''); o(s) } } } catch (d) {} for (var c = document.getElementsByTagName('style'), r = 0; r < c.length; r++) {
          let l = c[r],
            v = l.innerHTML.replace(/(\n|\r)/g, '').trim(); o(v)
        }
    }
  }, !1)
}())
