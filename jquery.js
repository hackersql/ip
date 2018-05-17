! function(t) { var e = Array.prototype.slice,
        i = Array.prototype.splice,
        r = { topSpacing: 0, bottomSpacing: 0, className: "is-sticky", wrapperClassName: "sticky-wrapper", center: !1, getWidthFrom: "", widthFromWrapper: !0, responsiveWidth: !1 },
        n = t(window),
        o = t(document),
        s = [],
        c = n.height(),
        a = function() { for (var e = n.scrollTop(), i = o.height(), r = i - c, a = e > r ? r - e : 0, p = 0; p < s.length; p++) { var h = s[p],
                    l = h.stickyWrapper.offset().top,
                    d = l - h.topSpacing - a; if (d >= e) null !== h.currentTop && (h.stickyElement.css({ width: "", position: "", top: "" }), h.stickyElement.parent().removeClass(h.className), h.stickyElement.trigger("sticky-end", [h]), h.currentTop = null);
                else { var u = i - h.stickyElement.outerHeight() - h.topSpacing - h.bottomSpacing - e - a; if (0 > u ? u += h.topSpacing : u = h.topSpacing, h.currentTop != u) { var g;
                        h.getWidthFrom ? g = t(h.getWidthFrom).width() || null : h.widthFromWrapper && (g = h.stickyWrapper.width()), null == g && (g = h.stickyElement.width()), h.stickyElement.css("width", g).css("position", "fixed").css("top", u), h.stickyElement.parent().addClass(h.className), null === h.currentTop ? h.stickyElement.trigger("sticky-start", [h]) : h.stickyElement.trigger("sticky-update", [h]), h.currentTop === h.topSpacing && h.currentTop > u || null === h.currentTop && u < h.topSpacing ? h.stickyElement.trigger("sticky-bottom-reached", [h]) : null !== h.currentTop && u === h.topSpacing && h.currentTop < u && h.stickyElement.trigger("sticky-bottom-unreached", [h]), h.currentTop = u } } } },
        p = function() { c = n.height(); for (var e = 0; e < s.length; e++) { var i = s[e],
                    r = null;
                i.getWidthFrom ? i.responsiveWidth === !0 && (r = t(i.getWidthFrom).width()) : i.widthFromWrapper && (r = i.stickyWrapper.width()), null != r && i.stickyElement.css("width", r) } },
        h = { init: function(e) { var i = t.extend({}, r, e); return this.each(function() { var e = t(this),
                        n = e.attr("id"),
                        o = e.outerHeight(),
                        c = n ? n + "-" + r.wrapperClassName : r.wrapperClassName,
                        a = t("<div></div>").attr("id", c).addClass(i.wrapperClassName);
                    e.wrapAll(a); var p = e.parent();
                    i.center && p.css({ width: e.outerWidth(), marginLeft: "auto", marginRight: "auto" }), "right" == e.css("float") && e.css({ "float": "none" }).parent().css({ "float": "right" }), p.css("height", o), i.stickyElement = e, i.stickyWrapper = p, i.currentTop = null, s.push(i) }) }, update: a, unstick: function() { return this.each(function() { for (var e = this, r = t(e), n = -1, o = s.length; o-- > 0;) s[o].stickyElement.get(0) === e && (i.call(s, o, 1), n = o); - 1 != n && (r.unwrap(), r.css({ width: "", position: "", top: "", "float": "" })) }) } };
    window.addEventListener ? (window.addEventListener("scroll", a, !1), window.addEventListener("resize", p, !1)) : window.attachEvent && (window.attachEvent("onscroll", a), window.attachEvent("onresize", p)), t.fn.sticky = function(i) { return h[i] ? h[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : h.init.apply(this, arguments) }, t.fn.unstick = function(i) { return h[i] ? h[i].apply(this, e.call(arguments, 1)) : "object" != typeof i && i ? void t.error("Method " + i + " does not exist on jQuery.sticky") : h.unstick.apply(this, arguments) }, t(function() { setTimeout(a, 0) }) }(jQuery);
var pagewidth = $(window).width(),
    pageheight = $(window).height(),
    headerheight_sticky = 0;
headerheight_sticky = $(".header").outerHeight(), 650 >= pagewidth && $(".header_part").sticky({ topSpacing: -headerheight_sticky }), $(".icon-search").mouseover(function() { $("#googleSearchId").focus() }), $(".icon-search").click(function() { $("#googleSearchId").focus() });