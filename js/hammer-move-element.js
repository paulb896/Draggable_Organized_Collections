! function (e) {
  function t(a) {
    if (n[a]) return n[a].exports;
    var o = n[a] = {
      exports: {},
      id: a,
      loaded: !1
    };
    return e[a].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
  }
  var n = {};
  return t.element = e, t.c = n, t(0)
}([function (e, t, n) {
    document.querySelector("#circle") && n(1), n(2)
  }, function () {
    function e() {
      element.className = ""
    }
    function t() {
      d = {
        translate: {
          x: p,
          y: h
        },
        scale: 1,
        rotate: 0
      }, element.className = "animate", animate()
    }
    function translate() {
      var elementTransform = ["translate3d(" + d.translate.x + "px, " + d.translate.y + "px, 0)", "scale(" + d.scale + ", " + d.scale + ")", "rotate(" + d.rotate + "deg)"];
      element.style.webkitTransform = element.style.transform = elementTransform.join(" ");

      isAnimating = false;
    }
    function animate() {
      isAnimating || (isAnimating = true, f(translate))
    }
    function o(e) {
      d.translate = {
        x: p + e.deltaX,
        y: h + e.deltaY
      }, animate()
    }
    function r(e) {
      d.translate = {
        x: p + 1.2 * e.deltaX,
        y: h + 1.2 * e.deltaY
      }, d.scale = 1.2, animate(), setTimeout(function () {
        t()
      }, 400)
    }
    function c(e) {
      d.scale = e.scale, animate()
    }
    function s(e) {
      d.rotate = e.rotation, animate()
    }
    function i() {
      d.scale = .9, animate(), setTimeout(function () {
        d.scale = 1, animate()
      }, 200)
    }
    function spin() {
      d.rotate = d.rotate ? 0 : 360, animate()
    }
    function u() {
      element.style.background = "#fd0", setTimeout(function () {
        element.style.background = "white", animate()
      }, 500)
    }
    var d, f = function () {
        return window[Hammer.prefixed(window, "requestAnimationFrame")] || function (e) {
          window.setTimeout(e, 1e3 / 60)
        }
      }(),
      element = document.querySelector("#circle"),
      p = Math.round((element.parentNode.offsetWidth - element.offsetWidth) / 2),
      h = Math.round((element.parentNode.offsetHeight - element.offsetHeight) / 2),
      isAnimating = false,
      hammerjs = new Hammer(element);
    hammerjs.get("pinch").set({
      enable: !0
    }), hammerjs.get("rotate").set({
      enable: !0
    }), hammerjs.on("pan", o), hammerjs.on("swipe", r), hammerjs.on("rotate", s), hammerjs.on("pinch", c), hammerjs.on("tap", i), hammerjs.on("doubletap", spin), hammerjs.on("hold", u), hammerjs.on("panstart rotatestart pinchstart", e), hammerjs.on("panend rotateend pinchend pancancel rotatecancel pinchcancel", t), t()

  }]);