(window.webpackJsonp = window.webpackJsonp || []).push([
    [58], {
        397: function (t, e, s) {
            var a = s(38),
                i = s(109),
                n = s(48),
                o = s(29),
                c = s(402);
            t.exports = function (t, e) {
                var s = 1 == t,
                    r = 2 == t,
                    l = 3 == t,
                    d = 4 == t,
                    _ = 6 == t,
                    u = 5 == t || _,
                    p = e || c;
                return function (e, c, v) {
                    for (
                        var h,
                        m,
                        f = n(e),
                        g = i(f),
                        C = a(c, v, 3),
                        b = o(g.length),
                        w = 0,
                        y = s
                            ? p(e, b)
                            : r
                                ? p(e, 0)
                                : void 0; b > w; w++
                    ) 
                        if ((u || w in g) && (m = C(h = g[w], w, f), t)) 
                            if (s) 
                                y[w] = m;
                            else if (m) 
                                switch (t) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return h;
                                    case 6:
                                        return w;
                                    case 2:
                                        y.push(h)
                                }
                            else if (d) 
                        return !1;
                    return _
                        ? -1
                        : l || d
                            ? d
                            : y
                }
            }
        },
        399: function (t, e, s) {
            var a = s(412);
            "string" == typeof a && (a = [
                [t.i, a, ""]
            ]),
            a.locals && (t.exports = a.locals);
            (0, s(37).default)("227c3504", a, !0, {
                sourceMap: !1
            })
        },
        400: function (t, e, s) {
            "use strict";
            s(398);
            var a = {
                    props: {
                        space: Object,
                        border: Boolean,
                        keyword: Number,
                        isMap: Boolean
                    },
                    data: function () {
                        return {
                            arrowIsActive: !1,
                            swiperOption: {
                                slidesPerView: "auto",
                                centeredSlides: !0,
                                navigation: {
                                    nextEl: ".button_img_next",
                                    prevEl: ".button_img_prev"
                                }
                            },
                            activeCardIndex: -1
                        }
                    },
                    methods: {
                        showPrev: function () {
                            this.activeCardIndex <= 0
                                ? this.activeCardIndex = this.space.images.length - 1
                                : this.activeCardIndex -= 1
                        },
                        showNext: function () {
                            this.activeCardIndex >= this.space.images.length - 1
                                ? this.activeCardIndex = -1
                                : this.activeCardIndex += 1
                        },
                        goToDetail: function (t) {
                            var e = "/space/"
                                    .concat(t)
                                    .concat(
                                        this.keyword
                                            ? "?keyword_id=" + this.keyword
                                            : ""
                                    ),
                                s = /sc_ios/i.test(navigator.userAgent.toLowerCase()),
                                a = /sc_android/i.test(navigator.userAgent.toLowerCase());
                            s || a
                                ? this
                                    .$router
                                    .push(e)
                                : window
                                    .open(e, "_blank")
                                    .focus()
                        }
                    },
                    mounted: function () {}
                },
                i = s(5),
                n = Object(i.a)(a, function () {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("article", {
                        staticClass: "box box_space"
                    }, [s("div", {
                            staticClass: "inner"
                        }, [s("a", {
                                on: {
                                    click: function (e) {
                                        return t.goToDetail(t.space.space_id)
                                    }
                                }
                            }, [
                                s("div", {
                                    staticClass: "img_box",
                                    on: {
                                        mouseover: function (e) {
                                            t.arrowIsActive = !0
                                        },
                                        mouseleave: function (e) {
                                            t.arrowIsActive = !1
                                        }
                                    }
                                }, [
                                    -1 === t.activeCardIndex
                                        ? s("span", {
                                            staticClass: "img",
                                            style: {
                                                backgroundImage: "url(" + t.space.image_url + ")"
                                            }
                                        })
                                        : s("span", {
                                            staticClass: "img",
                                            style: {
                                                backgroundImage: "url(" + t
                                                    .space
                                                    .thumbs[t.activeCardIndex] + ")"
                                            }
                                        }),
                                    t._v(" "),
                                    s("div", {
                                        staticClass: "button_area",
                                        class: {
                                            show: t.arrowIsActive
                                        }
                                    }, [
                                        s("button", {
                                            staticClass: "button_img button_img_prev",
                                            attrs: {
                                                type: "button"
                                            },
                                            on: {
                                                click: function (e) {
                                                    return e.stopPropagation(),
                                                    t.showPrev(e)
                                                }
                                            }
                                        }, [s("i", {
                                                staticClass: "sp_icon ico_img_prev"
                                            }, [t._v("이전 이미지 보기")])]),
                                        t._v(" "),
                                        s("button", {
                                            staticClass: "button_img button_img_next",
                                            attrs: {
                                                type: "button"
                                            },
                                            on: {
                                                click: function (e) {
                                                    return e.stopPropagation(),
                                                    t.showNext(e)
                                                }
                                            }
                                        }, [s("i", {
                                                staticClass: "sp_icon ico_img_next"
                                            }, [t._v("다음 이미지 보기")])])
                                    ])
                                ]),
                                t._v(" "),
                                s("span", {
                                    staticClass: "btns_reserv"
                                }, [
                                    "FIXPY" === t.space.rsvMthCd
                                        ? s("span", {
                                            staticClass: "btn_reserv_now"
                                        }, [t._v("\n          승인\n          "), s("br"), t._v("결제\n        ")])
                                        : t._e(),
                                    t._v(" "),
                                    "NOWPY" === t.space.rsvMthCd
                                        ? s("span", {
                                            staticClass: "btn_reserv_confirm"
                                        }, [t._v("\n          바로\n          "), s("br"), t._v("결제\n        ")])
                                        : t._e(),
                                    t._v(" "),
                                    t.space.COUPON_SEQ && t.space.DISCOUNT_PRICE
                                        ? s("span", {
                                            staticClass: "btn_coupon"
                                        }, [t._v("\n          쿠폰\n          "), s("br"), t._v("할인\n        ")])
                                        : t._e()
                                ]),
                                t._v(" "),
                                s("div", {
                                    staticClass: "info_area",
                                    class: {
                                        type_border: t.border
                                    }
                                }, [
                                    s("h3", {
                                        staticClass: "tit_space",
                                        domProps: {
                                            innerHTML: t._s(t.space.space_name)
                                        }
                                    }),
                                    t._v(" "),
                                    t.isMap
                                        ? t._e()
                                        : s("div", {
                                            staticClass: "tags"
                                        }, [
                                            s("span", {
                                                staticClass: "tag_area_name"
                                            }, [t._v(t._s(t.space.location))]),
                                            t._v(" "),
                                            t._l(t.space.tags, function (e) {
                                                return s("span", [t._v("#" + t._s(e.tag))])
                                            })
                                        ], 2),
                                    t._v(" "),
                                    s("div", {
                                        staticClass: "info_price_hour"
                                    }, [
                                        s("strong", {
                                            staticClass: "price"
                                        }, [t._v(t._s(t._f("toCurrency")(t.space.price)))]),
                                        t._v(" "),
                                        "TIME" === t.space.RSV_TP_CD
                                            ? s("span", {
                                                staticClass: "txt_unit"
                                            }, [t._v("원/시간")])
                                            : "DAY" === t.space.RSV_TP_CD
                                                ? s("span", {
                                                    staticClass: "txt_unit"
                                                }, [t._v("원/일")])
                                                : "MONTH" === t.space.RSV_TP_CD
                                                    ? s("span", {
                                                        staticClass: "txt_unit"
                                                    }, [t._v("원/월")])
                                                    : "PKG" === t.space.RSV_TP_CD
                                                        ? s("span", {
                                                            staticClass: "txt_unit"
                                                        }, [t._v("원/패키지")])
                                                        : t._e()
                                    ]),
                                    t._v(" "),
                                    t.isMap
                                        ? t._e()
                                        : s("div", {
                                            staticClass: "info_number_love"
                                        }, [
                                            t.space.maxUser
                                                ? s("span", {
                                                    staticClass: "txt_number_maxUser"
                                                }, [
                                                    s("i", {
                                                        staticClass: "sp_icon ico_user"
                                                    }, [t._v("최대이용가능수")]),
                                                    t._v(" "),
                                                    s("em", [t._v("최대 " + t._s(t.space.maxUser) + "인")])
                                                ])
                                                : t._e(),
                                            t._v(" "),
                                            s("span", {
                                                staticClass: "txt_number_review"
                                            }, [
                                                s("i", {
                                                    staticClass: "sp_icon ico_review"
                                                }, [t._v("리뷰수")]),
                                                t._v(" "),
                                                s("em", [t._v(t._s(t.space.review_count))])
                                            ]),
                                            t._v(" "),
                                            s("span", {
                                                staticClass: "txt_number_love"
                                            }, [
                                                s("i", {
                                                    staticClass: "sp_icon ico_love"
                                                }, [t._v("좋아요")]),
                                                t._v(" "),
                                                s("em", [t._v(t._s(t.space.zzim_cnt))])
                                            ])
                                        ])
                                ])
                            ])])])
                }, [], !1, null, null, null);
            e.a = n.exports
        },
        401: function (t, e, s) {
            "use strict";
            var a = s(12),
                i = s(397)(5),
                n = !0;
            "find" in[] && Array(1).find(function () {
                n = !1
            }),
            a(a.P + a.F * n, "Array", {
                find: function (t) {
                    return i(
                        this,
                        t,
                        arguments.length > 1
                            ? arguments[1]
                            : void 0
                    )
                }
            }),
            s(108)("find")
        },
        402: function (t, e, s) {
            var a = s(403);
            t.exports = function (t, e) {
                return new(a(t))(e)
            }
        },
        403: function (t, e, s) {
            var a = s(16),
                i = s(186),
                n = s(6)("species");
            t.exports = function (t) {
                var e;
                return i(t) && (
                    "function" != typeof(e = t.constructor) || e !== Array && !i(e.prototype) || (e = void 0),
                    a(e) && null === (e = e[n]) && (e = void 0)
                ),
                void 0 === e
                    ? Array
                    : e
            }
        },
        406: function (t, e, s) {
            "use strict";
            var a = s(12),
                i = s(397)(6),
                n = "findIndex",
                o = !0;
            n in[] && Array(1)[n](function () {
                o = !1
            }),
            a(a.P + a.F * o, "Array", {
                findIndex: function (t) {
                    return i(
                        this,
                        t,
                        arguments.length > 1
                            ? arguments[1]
                            : void 0
                    )
                }
            }),
            s(108)(n)
        },
        407: function (t, e, s) {
            var a = s(420);
            "string" == typeof a && (a = [
                [t.i, a, ""]
            ]),
            a.locals && (t.exports = a.locals);
            (0, s(37).default)("339f0baa", a, !0, {
                sourceMap: !1
            })
        },
        409: function (t, e, s) {
            "use strict";
            var a = {
                    props: [
                        "modalStatus", "msg"
                    ],
                    methods: {
                        closeModal: function () {
                            this.$emit("update:modalStatus", !1),
                            document.removeEventListener("click", this.clickEventListener),
                            document.removeEventListener("touchend", this.clickEventListener)
                        },
                        clickEventListener: function (t) {
                            t
                                .target
                                .closest(".naver-splugin") || t
                                .target
                                .closest("div.share-modal") || this.closeModal()
                        }
                    },
                    mounted: function () {}
                },
                i = (s(411), s(5)),
                n = Object(i.a)(a, function () {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return this.modalStatus
                        ? e("div", {
                            staticClass: "loading_modal"
                        }, [
                            e("div", {
                                staticClass: "dimmed",
                                staticStyle: {
                                    display: "block",
                                    "z-index": "998"
                                }
                            }),
                            this._v(" "),
                            this._m(0),
                            this._v(" "),
                            e("pre", {
                                staticClass: "message",
                                domProps: {
                                    innerHTML: this._s(this.msg)
                                }
                            })
                        ])
                        : this._e()
                }, [
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("div", {
                            staticClass: "wrap_loading"
                        }, [e("div", {
                                attrs: {
                                    id: "loading"
                                }
                            })])
                    }
                ], !1, null, "3faf6230", null);
            e.a = n.exports
        },
        411: function (t, e, s) {
            "use strict";
            var a = s(399);
            s
                .n(a)
                .a
        },
        412: function (t, e, s) {
            (t.exports = s(36)(!1)).push([
                t.i, ".loading_modal .wrap_loading[data-v-3faf6230]{position:fixed;z-index:999;top:5" +
                        "0%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:50%;-web" +
                        "kit-transform:translateX(-50%);transform:translateX(-50%);width:80px;height:80" +
                        "px;text-align:center;border-radius:5px}#loading[data-v-3faf6230]{display:inlin" +
                        "e-block;width:80px;height:80px;border-radius:50%;border:6px solid hsla(0,0%,10" +
                        "0%,.75);border-top-color:#ffd014;animation:spin-data-v-3faf6230 1s ease-in-out" +
                        " infinite;-webkit-animation:spin-data-v-3faf6230 1s ease-in-out infinite}@keyf" +
                        "rames spin-data-v-3faf6230{to{-webkit-transform:rotate(1turn)}}@-webkit-keyfra" +
                        "mes spin-data-v-3faf6230{to{-webkit-transform:rotate(1turn)}}.loading_modal .m" +
                        "essage[data-v-3faf6230]{position:fixed;z-index:999;margin-top:100px;width:320p" +
                        "x;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:5" +
                        "0%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#fff;le" +
                        "tter-spacing:.125rem;line-height:1.5;font-size:16px;text-align:center;text-sha" +
                        "dow:1px 1px 1px rgba(0,0,0,.55)}",
                ""
            ])
        },
        414: function (t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAbCAYAAABiFp9rAAAAAXNSR0IA" +
                    "rs4c6QAAAiRJREFUSA2tlr8vQ1EcxVFESCQSg4HBYLGwmEzdbLbajMauBovB0NVfYOgisdtMnUyWLg" +
                    "wGBgmJRCIRIepz+u73ufe2vX0P3+T4/jrn3Mrre68jIy46nc6o1f+Vfc8xmTI4Ip2QK/94iLzkKe/u" +
                    "IQc0FqcU493FH/7IA8jL4kD/0ZLnuUN9xnbSm5UqnfYMkbwssjNYHtvRLp+Tp4xVNEsDpPXjONCzaf" +
                    "hb6gswE5ASjbhOQ8qj0VfC+jCnZEWLNNuX7A3FAeL6cehRekuY+z6b+hLM9TKziXaOQ8pjfxA/mEOv" +
                    "55KsuCLNByQazYB2ftRjXrJHuQe+PIc29YKJVAPNLMTds32pjHAXfJoT+RosOqi2EGe3lHlMxmAHfJ" +
                    "gj+c7BRtr590xsUbzHaBu8m7OXNdsu7lSAiWF8zX5/TQadxyFr4BHEodnaIF2pOUYb4Nk74ZVasNBu" +
                    "o5RpTMZgE7yYI7lrSo4PF2cz1hfqEVaB/8mf6NdNrBpoZiFu1faFMoIt8GYO5AewGos1cztSN6TZin" +
                    "l9e4jxV/me2UpfMkPtgDgWw7/yMGvAvzlv6ZcHHWJzcYC4FvKo2T7ILOLHzQ2zxYCUaMQF0lj0PpbY" +
                    "xDdjm1n+AE34BytpgLQWPzc1E70SNLDQY7/nlRA4JhppgTws5F3XxWzahJx8ySX8gxU+8cuwqYMqQL" +
                    "98WmDoaztwTDTycp7yzn4vUkyA6YTuVyt5ylvib3D9xzovgJ3bAAAAAElFTkSuQmCC"
        },
        415: function (t, e, s) {
            "use strict";
            var a = {
                    props: [
                        "imageList", "space", "idx"
                    ],
                    data: function () {
                        return {
                            isLoaded: !1,
                            innerWidth: 0,
                            innerHeight: 0,
                            swiperOptionTop: {
                                spaceBetween: 10,
                                initialSlide: this.idx,
                                navigation: {
                                    nextEl: ".btn_slide_next",
                                    prevEl: ".btn_slide_prev",
                                    disabledClass: "disabled"
                                }
                            }
                        }
                    },
                    methods: {
                        closeModal: function () {
                            this.$emit("update:modalStatus", !1)
                        },
                        onScroll: function () {
                            this.innerWidth = window.innerWidth,
                            this.innerHeight = window.innerHeight
                        }
                    },
                    mounted: function () {
                        this.onScroll(),
                        window.addEventListener("resize", this.onScroll),
                        this.isLoaded = !0
                    },
                    destroyed: function () {
                        window.removeEventListener("resize", this.onScroll)
                    }
                },
                i = (s(419), s(5)),
                n = Object(i.a)(a, function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "photoviewer"
                    }, [
                        t.isLoaded
                            ? a("div", {
                                directives: [
                                    {
                                        name: "swiper",
                                        rawName: "v-swiper:swiperTop",
                                        value: t.swiperOptionTop,
                                        expression: "swiperOptionTop",
                                        arg: "swiperTop"
                                    }
                                ],
                                ref: "swiperTop",
                                staticClass: "gallery-top"
                            }, [
                                a("div", {
                                    staticClass: "swiper-wrapper"
                                }, t._l(t.imageList, function (e, s) {
                                    return a("div", {
                                        key: "__photoviewr_img_" + s,
                                        staticClass: "swiper-slide photoviewer-slide"
                                    }, [a("div", {
                                            staticClass: "photoviewer-slide-wrapper"
                                        }, [a("div", {
                                                staticClass: "responsive-wrap"
                                            }, [a("img", {
                                                    staticClass: "photoviewer-slide__img",
                                                    style: {
                                                        "max-width": .8 *t.innerWidth + "px",
                                                        "max-height": .8 *t.innerHeight + "px"
                                                    },
                                                    attrs: {
                                                        src: e.image_url,
                                                        alt: t.space
                                                    }
                                                })])])])
                                }), 0),
                                t._v(" "),
                                t._m(0)
                            ])
                            : t._e(),
                        t._v(" "),
                        a("a", {
                            staticClass: "btn_pop_close",
                            attrs: {
                                title: "레이어팝업 닫힘"
                            },
                            on: {
                                click: t.closeModal
                            }
                        }, [a("img", {
                                attrs: {
                                    src: s(414),
                                    alt: "닫기"
                                }
                            })])
                    ])
                }, [
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("div", {
                            staticClass: "nav_slide"
                        }, [
                            e("a", {
                                staticClass: "main__banner--prev btn_slide_prev"
                            }, [e("i", {
                                    staticClass: "sp_icon ico_slide_prev"
                                }, [this._v("이전으로 이동")])]),
                            this._v(" "),
                            e("a", {
                                staticClass: "main__banner--next btn_slide_next"
                            }, [e("i", {
                                    staticClass: "sp_icon ico_slide_next"
                                }, [this._v("다음으로 이동")])])
                        ])
                    }
                ], !1, null, "761f300b", null);
            e.a = n.exports
        },
        416: function (t, e, s) {
            t.exports = s.p + "img/fd816bf.png"
        },
        417: function (t, e) {
            t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAACXBIWXMA" +
                    "AAsSAAALEgHS3X78AAABwklEQVRo3u3YP0gCURwH8O/JIYmpFZhUJBGEZUQUhgWFlhK0JzSpRFzQVF" +
                    "tjEDQ3tOiQ3difwQiabsgILIgw+wcR1VBREGFIRX/gmgpa8sLM7vn7bcf97t773Ptz7z1OlmV4A2E3" +
                    "gCCAGrARKQBRSRTmAIDz+ENBABGwGaIkCkHO4w+lAJjAbrRoGAcCQIkGBRCEJKSKgv/PlbMYdDAbdZ" +
                    "/Xj8+vOL1NqxtpMejgaKhCu6MWHc7M65LoShIzS5vqQfpcdgwPdv7so5Qb1dGSei2PqbE+NNor2J14" +
                    "xod6cgrMO9Lnsisae6pF6rU8BvodbP8n22yVMBmL2EY6W/9u65q32dVWZ1GUF5rdwPrOGW7ST+pDWq" +
                    "tLFQEXY4dsr11X48fsL9AfXt5oF0JIQhKSTga+hLvJCk9XfVbvmBzp/fZ+ZCGu6KQgZ0hzWXHWO4xM" +
                    "z88vb7PfXfcv72hMqh4Z3zqn2ZUJZPLgglqSCeTRybXiXM7jD8n5qKQkChlzvIHwbxTVTd2VkIQkJC" +
                    "EJSUhCEpKQhCQkIQlJyEJH3jNuTGkATDMMjEmikOAlUZjwBsIJAKN/WXpy76pZQdpuFkWsfTTgO9vt" +
                    "YOa3EfmgAAAAAElFTkSuQmCC"
        },
        418: function (t, e, s) {
            t.exports = s.p + "img/a06aa76.png"
        },
        419: function (t, e, s) {
            "use strict";
            var a = s(407);
            s
                .n(a)
                .a
        },
        420: function (t, e, s) {
            (t.exports = s(36)(!1)).push(
                [t.i, ".gallery-top[data-v-761f300b]{height:100%!important;width:100%}", ""]
            )
        },
        421: function (t, e, s) {
            "use strict";
            s(28);
            var a = {
                    props: [
                        "modalStatus", "dataset"
                    ],
                    data: function () {
                        return {
                            url: "",
                            isCopied: !1
                        }
                    },
                    methods: {
                        copyToClipboard: function () {
                            var t = this;
                            this.isCopied = !1,
                            document.removeEventListener("click", this.clickEventListener),
                            document.removeEventListener("touchend", this.clickEventListener),
                            this
                                .$copyText(this.url)
                                .then(function (e) {
                                    t.isCopied = !0,
                                    setTimeout(function () {
                                        document.addEventListener("click", t.clickEventListener),
                                        document.addEventListener("touchend", t.clickEventListener)
                                    }, 200)
                                })
                                .catch(function (t) {})
                            },
                        closeModal: function () {
                            this.$emit("update:modalStatus", !1),
                            document.removeEventListener("click", this.clickEventListener),
                            document.removeEventListener("touchend", this.clickEventListener)
                        },
                        clickEventListener: function (t) {
                            t
                                .target
                                .closest(".naver-splugin") || t
                                .target
                                .closest("div.share-modal") || this.closeModal()
                        },
                        shareKakao: function () {
                            Kakao
                                .Link
                                .sendDefault({
                                    objectType: "feed",
                                    content: {
                                        title: this.dataset.name,
                                        description: "출처: 스페이스클라우드",
                                        imageUrl: this.dataset.image,
                                        link: {
                                            mobileWebUrl: this.dataset.url
                                                ? this.dataset.url
                                                : "".concat(window.location.href),
                                            webUrl: this.dataset.url
                                                ? this.dataset.url
                                                : "".concat(window.location.href)
                                        }
                                    }
                                })
                        },
                        shareFacebook: function () {
                            var t = "http://www.facebook.com/sharer.php?u=" +
                                    encodeURIComponent(this.url) + "&t=" + encodeURIComponent(this.dataset.name);
                            this.windowOpen(t, 600, 450)
                        },
                        shareTwitter: function () {
                            var t = "http://twitter.com/intent/tweet?text=" +
                                    encodeURIComponent("".concat(this.dataset.name, " (출처: 스페이스클라우드)")) + "&url=" +
                                    encodeURIComponent(this.url);
                            this.windowOpen(t, 620, 420)
                        },
                        windowOpen: function () {
                            for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++) 
                                e[s] = arguments[s];
                            var a = e[0],
                                i = "left=10,top=10,width=" + e[1] + ",height=" + e[2] + ",menubar=yes,location" +
                                        "=yes,resizable=no,scrollbars=no,status=no";
                            window.open(a, "sharePopUp", i)
                        }
                    },
                    mounted: function () {
                        this.dataset.url
                            ? this.url = this.dataset.url
                            : this.url = "".concat(window.location.href),
                        document.addEventListener("click", this.clickEventListener),
                        document.addEventListener("touchend", this.clickEventListener)
                    }
                },
                i = s(5),
                n = Object(i.a)(a, function () {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "share-modal-wrapper"
                    }, [a("div", {
                            staticClass: "share-modal"
                        }, [
                            t.isCopied
                                ? t._e()
                                : a("h2", {
                                    staticClass: "share-modal-title"
                                }, [t._v("공유하기")]),
                            t._v(" "),
                            t.isCopied
                                ? t._e()
                                : a("ul", [
                                    a("li", {
                                        staticClass: "share-item"
                                    }, [a("a", {
                                            on: {
                                                click: t.shareKakao
                                            }
                                        }, [
                                            a("img", {
                                                staticClass: "logo",
                                                attrs: {
                                                    src: s(416),
                                                    alt: "카카오"
                                                }
                                            }),
                                            t._v(" "),
                                            a("p", {
                                                staticClass: "title"
                                            }, [t._v("카카오톡")])
                                        ])]),
                                    t._v(" "),
                                    a("li", {
                                        staticClass: "share-item"
                                    }, [a("a", {
                                            on: {
                                                click: t.shareFacebook
                                            }
                                        }, [
                                            a("img", {
                                                staticClass: "logo",
                                                attrs: {
                                                    src: s(417),
                                                    alt: "페이스북"
                                                }
                                            }),
                                            t._v(" "),
                                            a("p", {
                                                staticClass: "title"
                                            }, [t._v("페이스북")])
                                        ])]),
                                    t._v(" "),
                                    a("li", {
                                        staticClass: "share-item"
                                    }, [a("a", {
                                            on: {
                                                click: t.shareTwitter
                                            }
                                        }, [
                                            a("img", {
                                                staticClass: "logo",
                                                attrs: {
                                                    src: s(418),
                                                    alt: "트위터"
                                                }
                                            }),
                                            t._v(" "),
                                            a("p", {
                                                staticClass: "title"
                                            }, [t._v("트위터")])
                                        ])])
                                ]),
                            t._v(" "),
                            t.isCopied
                                ? t._e()
                                : a("div", {
                                    staticClass: "share-url",
                                    on: {
                                        click: function (e) {
                                            return e.preventDefault(),
                                            t.copyToClipboard(e)
                                        }
                                    }
                                }, [
                                    a("input", {
                                        directives: [
                                            {
                                                name: "model",
                                                rawName: "v-model",
                                                value: t.url,
                                                expression: "url"
                                            }
                                        ],
                                        staticClass: "share-url-input",
                                        attrs: {
                                            type: "text",
                                            disabled: ""
                                        },
                                        domProps: {
                                            value: t.url
                                        },
                                        on: {
                                            input: function (e) {
                                                e.target.composing || (t.url = e.target.value)
                                            }
                                        }
                                    }),
                                    t._v(" "),
                                    a("button", {
                                        staticClass: "share-url-btn"
                                    }, [t._v("URL 복사")])
                                ]),
                            t._v(" "),
                            t.isCopied
                                ? a("div", {
                                    staticClass: "share-close",
                                    on: {
                                        click: t.closeModal
                                    }
                                }, [a("i", {staticClass: "sp_icon ico_btn_close"})])
                                : t._e(),
                            t._v(" "),
                            t.isCopied
                                ? a(
                                    "p",
                                    {
                                        staticClass: "share-success"
                                    },
                                    [t._v("\n      주소가 복사되었습니다.\n      "), a("br"), t._v("원하는 곳에 붙여넣기(Ctrl+V)해주세요.\n    ")]
                                )
                                : t._e()
                        ])])
                }, [], !1, null, null, null);
            e.a = n.exports
        },
        441: function (t, e, s) {
            t.exports = s.p + "img/cace91f.png"
        },
        442: function (t, e, s) {
            var a = s(493);
            "string" == typeof a && (a = [
                [t.i, a, ""]
            ]),
            a.locals && (t.exports = a.locals);
            (0, s(37).default)("78883b51", a, !0, {
                sourceMap: !1
            })
        },
        443: function (t, e, s) {
            var a = s(495);
            "string" == typeof a && (a = [
                [t.i, a, ""]
            ]),
            a.locals && (t.exports = a.locals);
            (0, s(37).default)("528f82c7", a, !0, {
                sourceMap: !1
            })
        },
        444: function (t, e, s) {
            var a = s(497);
            "string" == typeof a && (a = [
                [t.i, a, ""]
            ]),
            a.locals && (t.exports = a.locals);
            (0, s(37).default)("1ad96730", a, !0, {
                sourceMap: !1
            })
        },
        445: function (t, e, s) {
            var a = s(499);
            "string" == typeof a && (a = [
                [t.i, a, ""]
            ]),
            a.locals && (t.exports = a.locals);
            (0, s(37).default)("46b08b7a", a, !0, {
                sourceMap: !1
            })
        },
        450: function (t, e, s) {
            "use strict";
            s(18);
            var a = s(3),
                i = {
                    props: [
                        "modalStatus", "type", "spaceId", "question", "currentPage"
                    ],
                    data: function () {
                        return {content: "", maxInputLength: 200}
                    },
                    computed: {
                        contentLength: function () {
                            return this.content.length
                        }
                    },
                    methods: {
                        closeModal: function () {
                            this.$emit("update:modalStatus", !1)
                        },
                        askQuestion: function () {
                            var t = Object(a.a)(regeneratorRuntime.mark(function t() {
                                var e;
                                return regeneratorRuntime.wrap(function (t) {
                                    for (;;) 
                                        switch (t.prev = t.next) {
                                            case 0:
                                                if (t.prev = 0, !this.content) {
                                                    t.next = 14;
                                                    break
                                                }
                                                return e = JSON.parse(localStorage.getItem("user")),
                                                t.next = 5,
                                                this.$axios({
                                                    method: "post",
                                                    headers: {
                                                        Authorization: e.token
                                                    },
                                                    url: "/questions",
                                                    data: {
                                                        spc_seq: this.spaceId,
                                                        question_contents: this.content
                                                    }
                                                });
                                            case 5:
                                                return t.sent,
                                                t.next = 8,
                                                this.$emit("getData", 1);
                                            case 8:
                                                return t.next = 10,
                                                this.$emit("activeNoti", "질문이 등록되었습니다.");
                                            case 10:
                                                return t.next = 12,
                                                this.closeModal();
                                            case 12:
                                                t.next = 16;
                                                break;
                                            case 14:
                                                return t.next = 16,
                                                this.$emit("activeNoti", "질문을 입력해주세요.");
                                            case 16:
                                                t.next = 26;
                                                break;
                                            case 18:
                                                if (t.prev = 18, t.t0 = t.catch(0), 401 !== t.t0.response.status) {
                                                    t.next = 26;
                                                    break
                                                }
                                                return t.next = 24,
                                                this
                                                    .$store
                                                    .dispatch("refreshToken");
                                            case 24:
                                                return t.next = 26,
                                                this.askQuestion();
                                            case 26:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t, this, [
                                    [0, 18]
                                ])
                            }));
                            return function () {
                                return t.apply(this, arguments)
                            }
                        }(),
                        modifyQuestion: function () {
                            var t = Object(a.a)(regeneratorRuntime.mark(function t() {
                                var e;
                                return regeneratorRuntime.wrap(function (t) {
                                    for (;;) 
                                        switch (t.prev = t.next) {
                                            case 0:
                                                if (t.prev = 0, "edit" !== this.type || !this.question) {
                                                    t.next = 19;
                                                    break
                                                }
                                                if (!this.content) {
                                                    t.next = 17;
                                                    break
                                                }
                                                return e = JSON.parse(localStorage.getItem("user")),
                                                t.next = 6,
                                                this.$axios({
                                                    method: "put",
                                                    headers: {
                                                        Authorization: e.token
                                                    },
                                                    url: "/questions/".concat(this.question.id),
                                                    data: {
                                                        question_contents: this.content
                                                    }
                                                });
                                            case 6:
                                                return t.sent,
                                                t.next = 9,
                                                this.$emit("getData", this.currentPage);
                                            case 9:
                                                return t.next = 11,
                                                this.$emit("activeNoti", "질문이 수정되었습니다.");
                                            case 11:
                                                return t.next = 13,
                                                this.$emit("question", "");
                                            case 13:
                                                return t.next = 15,
                                                this.closeModal();
                                            case 15:
                                                t.next = 19;
                                                break;
                                            case 17:
                                                return t.next = 19,
                                                this.$emit("activeNoti", "질문을 입력해주세요.");
                                            case 19:
                                                t.next = 29;
                                                break;
                                            case 21:
                                                if (t.prev = 21, t.t0 = t.catch(0), 401 !== t.t0.response.status) {
                                                    t.next = 29;
                                                    break
                                                }
                                                return t.next = 27,
                                                this
                                                    .$store
                                                    .dispatch("refreshToken");
                                            case 27:
                                                return t.next = 29,
                                                this.modifyQuestion();
                                            case 29:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t, this, [
                                    [0, 21]
                                ])
                            }));
                            return function () {
                                return t.apply(this, arguments)
                            }
                        }(),
                        deleteQuestion: function () {
                            var t = Object(a.a)(regeneratorRuntime.mark(function t() {
                                var e;
                                return regeneratorRuntime.wrap(function (t) {
                                    for (;;) 
                                        switch (t.prev = t.next) {
                                            case 0:
                                                if (t.prev = 0, "delete" !== this.type || !this.question) {
                                                    t.next = 14;
                                                    break
                                                }
                                                return e = JSON.parse(localStorage.getItem("user")),
                                                t.next = 5,
                                                this.$axios({
                                                    method: "delete",
                                                    headers: {
                                                        Authorization: e.token
                                                    },
                                                    url: "/questions/".concat(this.question.id)
                                                });
                                            case 5:
                                                return t.sent,
                                                t.next = 8,
                                                this.$emit("getData", this.currentPage);
                                            case 8:
                                                return t.next = 10,
                                                this.$emit("activeNoti", "질문이 삭제되었습니다.");
                                            case 10:
                                                return t.next = 12,
                                                this.$emit("question", "");
                                            case 12:
                                                return t.next = 14,
                                                this.closeModal();
                                            case 14:
                                                t.next = 24;
                                                break;
                                            case 16:
                                                if (t.prev = 16, t.t0 = t.catch(0), 401 !== t.t0.response.status) {
                                                    t.next = 24;
                                                    break
                                                }
                                                return t.next = 22,
                                                this
                                                    .$store
                                                    .dispatch("refreshToken");
                                            case 22:
                                                return t.next = 24,
                                                this.deleteQuestion();
                                            case 24:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t, this, [
                                    [0, 16]
                                ])
                            }));
                            return function () {
                                return t.apply(this, arguments)
                            }
                        }()
                    },
                    mounted: function () {
                        this.question && (this.content = this.question.content)
                    }
                },
                n = s(5),
                o = Object(n.a)(i, function () {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "layer_popup workspace reservation",
                        on: {
                            click: t.closeModal
                        }
                    }, [
                        "new" === t.type || "edit" === t.type
                            ? s("div", {
                                staticClass: "popup_wrap",
                                on: {
                                    click: function (t) {
                                        t.stopPropagation()
                                    }
                                }
                            }, [
                                s("div", {
                                    staticClass: "pop_header"
                                }, [t._v("\n        " + t._s(
                                        "new" === t.type
                                            ? "질문 작성하기"
                                            : "질문 수정하기"
                                    ) + "\n      ")]),
                                t._v(" "),
                                s("div", {
                                    staticClass: "pop_container reviews"
                                }, [
                                    s("article", {
                                        staticClass: "reserve_price"
                                    }, [s("div", {
                                            staticClass: "box_form"
                                        }, [
                                            t._m(0),
                                            t._v(" "),
                                            s("span", {
                                                staticClass: "option"
                                            }, [s("span", {
                                                    staticClass: "txt_count"
                                                }, [
                                                    s("em", [t._v(t._s(t.contentLength))]),
                                                    t._v("자/"),
                                                    s("em", [t._v("200")]),
                                                    t._v("자\n              ")
                                                ])]),
                                            t._v(" "),
                                            s("div", {
                                                staticClass: "input"
                                            }, [s("textarea", {
                                                    directives: [
                                                        {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: t.content,
                                                            expression: "content"
                                                        }
                                                    ],
                                                    attrs: {
                                                        maxlength: t.maxInputLength,
                                                        id: "reason_cancel",
                                                        placeholder: "질문을 남겨 주세요."
                                                    },
                                                    domProps: {
                                                        value: t.content
                                                    },
                                                    on: {
                                                        input: function (e) {
                                                            e.target.composing || (t.content = e.target.value)
                                                        }
                                                    }
                                                })])
                                        ])]),
                                    t._v(" "),
                                    t._m(1),
                                    t._v(" "),
                                    s("div", {
                                        staticClass: "btns"
                                    }, [
                                        s("a", {
                                            staticClass: "btn btn_full btn_negative",
                                            on: {
                                                click: t.closeModal
                                            }
                                        }, [t._v("취소")]),
                                        t._v(" "),
                                        "new" === t.type
                                            ? s("a", {
                                                staticClass: "btn btn_full btn_default",
                                                on: {
                                                    click: t.askQuestion
                                                }
                                            }, [t._v("등록")])
                                            : t._e(),
                                        t._v(" "),
                                        "edit" === t.type
                                            ? s("a", {
                                                staticClass: "btn btn_full btn_default",
                                                on: {
                                                    click: t.modifyQuestion
                                                }
                                            }, [t._v("수정")])
                                            : t._e()
                                    ])
                                ]),
                                t._v(" "),
                                s("a", {
                                    staticClass: "btn_pop_close",
                                    attrs: {
                                        title: "레이어팝업 닫힘"
                                    },
                                    on: {
                                        click: t.closeModal
                                    }
                                }, [s("i", {
                                        staticClass: "sp_icon ico_pop_close"
                                    }, [t._v("레이어팝업닫기")])])
                            ])
                            : t._e(),
                        t._v(" "),
                        "delete" === t.type
                            ? s("div", {
                                staticClass: "popup_wrap",
                                on: {
                                    click: function (t) {
                                        t.stopPropagation()
                                    }
                                }
                            }, [
                                s("div", {
                                    staticClass: "pop_header"
                                }, [t._v("\n\t\t\t\t질문 삭제\n\t\t\t")]),
                                t._v(" "),
                                s("div", {
                                    staticClass: "pop_container reviews"
                                }, [
                                    t._m(2),
                                    t._v(" "),
                                    s("div", {
                                        staticClass: "btns"
                                    }, [
                                        s("a", {
                                            staticClass: "btn btn_full btn_negative",
                                            on: {
                                                click: t.closeModal
                                            }
                                        }, [t._v("취소")]),
                                        t._v(" "),
                                        s("a", {
                                            staticClass: "btn btn_full btn_default",
                                            on: {
                                                click: t.deleteQuestion
                                            }
                                        }, [t._v("삭제")])
                                    ])
                                ]),
                                t._v(" "),
                                s("a", {
                                    staticClass: "btn_pop_close",
                                    attrs: {
                                        title: "레이어팝업 닫힘"
                                    },
                                    on: {
                                        click: t.closeModal
                                    }
                                }, [s("i", {
                                        staticClass: "sp_icon ico_pop_close"
                                    }, [t._v("레이어팝업닫기")])])
                            ])
                            : t._e()
                    ])
                }, [function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("div", {
                            staticClass: "tit"
                        }, [
                            e("label", {
                                    attrs: {
                                            for: "reason_cancel"}
                                    },
                                    [this._v("\n                질문\n              ")]
                                )]
                        )},
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("p", {
                            staticClass: "p_guide warn usual"
                        }, [
                            e("i", {staticClass: "sp_icon ico_alert"}),
                            this._v("\n          질문은 공개 상태로만 등록하실 수 있습니다.\n        ")
                        ])
                    },
                    function () {
                        var t = this.$createElement,
                            e = this._self._c || t;
                        return e("p", {
                            staticClass: "pop_txt pop_guide_txt"
                        }, [
                            this._v("질문을 삭제하시겠습니까?\n          "),
                            e("br", {
                                staticStyle: {
                                    display: "block"
                                }
                            }),
                            this._v("삭제시 데이터 복구가 어렵습니다.\n        ")
                        ])
                    }
                ],
                !1,
                null,
                null,
                null);
            e.a = o.exports
        },
        454 : function (t, e, s) {
            "use strict";
            s(18);
            var a = s(3),
                i = {
                    props: [
                        "dataset", "spaceId", "hostId"
                    ],
                    components: {
                        photoViewer: s(415).a
                    },
                    data: function () {
                        return {
                            showPhotoViewer: !1,
                            activeImageList: [],
                            photoViewerIdx: 0,
                            page: {
                                pages: this.dataset.page.pages,
                                current: this.dataset.page.page,
                                total: this.dataset.page.total
                            },
                            reviews: this.dataset.reviews,
                            showOnlyImage: !1
                        }
                    },
                    methods: {
                        getReviews: function () {
                            var t = Object(a.a)(regeneratorRuntime.mark(function t(e) {
                                var s,
                                    a;
                                return regeneratorRuntime.wrap(function (t) {
                                    for (;;) 
                                        switch (t.prev = t.next) {
                                            case 0:
                                                if (
                                                    t.prev = 0,
                                                    s = {
                                                        page: e,
                                                        only_image_review: this.showOnlyImage
                                                    },
                                                    this.spaceId
                                                        ? s.space_id = this.spaceId
                                                        : this.hostId && (s.host_user_id = this.hostId),
                                                    this.page.pages && !(e > 0 && e <= this.page.pages)
                                                ) {
                                                    t.next = 12;
                                                    break
                                                }
                                                return t.next = 6,
                                                this
                                                    .$axios
                                                    .get("/reviews", {params: s});
                                            case 6:
                                                a = t.sent,
                                                this.reviews = a.data.reviews,
                                                this.page.pages = a.data.page.pages,
                                                this.page.current = a.data.page.page,
                                                t.next = 13;
                                                break;
                                            case 12:
                                                return t.abrupt("return");
                                            case 13:
                                                t.next = 18;
                                                break;
                                            case 15:
                                                t.prev = 15,
                                                t.t0 = t.catch(0);
                                            case 18:
                                            case "end":
                                                return t.stop()
                                        }
                                    }, t, this, [
                                    [0, 15]
                                ])
                            }));
                            return function (e) {
                                return t.apply(this, arguments)
                            }
                        }(),
                        changeImageOption: function (t) {
                            this.showOnlyImage = t,
                            this.page.current = 1,
                            this.getReviews(this.page.current)
                        },
                        activePhotoViewer: function (t, e) {
                            this.activeImageList = t,
                            this.photoViewerIdx = e,
                            this.showPhotoViewer = !0
                        }
                    }
                },
                n = s(5),
                o = Object(n.a)(i, function () {
var t = this,
e = t.$createElement,
a = t._self._c || e;
                        return a("div", [
a(
        "div", {
                                    staticClass: "text_box msimple",
                                    attrs: {
                                        id: "s_review"
                                    }
                                }, [
                                    a("h4", {
                                        staticClass: "h_intro"
                                    }, [
                                        t._v("\n      이용 후기\n      "),
                                        a("strong", {
                                            staticClass: "txt_primary"
                                        }, [
                                            a("em", [t._v(t._s(t.dataset.page.total))]),
                                            t._v("개\n      ")
                                        ]),
                                        t._v(" "),
                                        t.reviews.length
                                            ? a("span", {staticClass: "dot"})
                                            : t._e(),
                                        t._v(" "),
                                        t.reviews.length
                                            ? a("span", [
                                                t._v("\n        평균 평점\n        "),
                                                a("strong", {
                                                    staticClass: "txt_primary"
                                                }, [a("em", [t._v(t._s(Number(t.dataset.avg_rate).toFixed(1)))])])
                                            ])
                                            : t._e()
                                    ]),
                                    t._v(" "),
                                    t.showOnlyImage || t.reviews.length
                                        ? t._e()
                                        : a("div", {
                                            staticClass: "review_box no_data"
                                        }, [t._m(0)]),
                                    t._v(" "),
                                    a("div", {
                                        staticClass: "switch_item"
                                    }, [
                                        a("input", {
                                                directives: [
                                                    {
                                                        name: "model",
                                                        rawName: "v-model",
                                                        value: t.showOnlyImage,
                                                        expression: "showOnlyImage"
                                                    }
                                                ],
                                                staticClass: "shitch",
                                                attrs: {
                                                    type: "checkbox",
                                                    id: "photo_list_view"
                                                },
                                                domProps: {
                                                    checked: Array.isArray(t.showOnlyImage)
                                                        ? t._i(t.showOnlyImage, null) > -1
                                                        : t.showOnlyImage
                                                },
                                                on: {
                                                    change: [
                                                        function (e) {
                                                            var s = t.showOnlyImage,
                                                                a = e.target,
                                                                i = !!a.checked;
                                                            if (Array.isArray(s)) {
                                                                var n = t._i(s, null);
                                                                a.checked
                                                                    ? n < 0 && (t.showOnlyImage = s.concat([null]))
                                                                    : n > -1 && (t.showOnlyImage = s.slice(0, n).concat(s.slice(n + 1)))
                                                            } else 
                                                                t.showOnlyImage = i
                                                        },
                                                        function (e) {
                                                            return t.changeImageOption(t.showOnlyImage)
                                                        }
                                                    ]
                                                }
                                            }),
                                        t._v(" "),
                                        a("label", {
                                                attrs: {
                                                        for: "photo_list_view"}
                                                },
                                                [t._v("사진 후기만 보기")]
                                            )]
                                    )]
                                ), t._v(" "), t.reviews.length
                                    ? a("div", {
                                        staticClass: "tab_area"
                                    }, [a("ul", {
                                            staticClass: "tab"
                                        }, [
                                    a("li", {
                                                class
                                                :
                                                {
                                                    active: !t.showOnlyImage
                                            }
                                        }, [a("a", {
                                                on: {
                                                    click: function (e) {
                                                        return t.changeImageOption(!1)
                                                    }
                                                }
                                            }, [t._v("전체후기보기")])]),
                                        t._v(" "),
                                        a("li", {
                                            class
                                            :
                                            {
                                                active: t.showOnlyImage
                                        }
                                    }, [a("a", {
                                            on: {
                                                click: function (e) {
                                                    return t.changeImageOption(!0)
                                                }
                                            }
                                        }, [t._v("사진후기만보기")])])
                                ])])
                            : t._e(),
                        t._v(" "),
                        t.reviews.length
                            ? a("div", {
                                staticClass: "review_box"
                            }, [
            a("ul", {
                                    staticClass: "review_list"
                                }, t._l(t.reviews, function (e) {
                                    return "N" === e.deleted
                                        ? a("li", {
                                            staticClass: "rlist",
                                            class: {
                                                del_review: "Y" === e.deleted_by_user
                                        }
                                    }, [
                                    a("div", {
                                            staticClass: "rbox_mine"
                                        }, [
                                        "N" !== e.deleted_by_user || e.writer.image_url
                                                ? t._e()
                                                : a("span", {
                                                    staticClass: "pf_img",
                                                    style: {
                                                        backgroundImage: "url(" + s(112) + ")"
                                                    }
                                                }),
                                            t._v(" "),
                                            "N" === e.deleted_by_user && e.writer.image_url
                                                ? a("span", {
                                                    staticClass: "pf_img",
                                                    style: {
                                                        backgroundImage: "url(" + e.writer.image_url + ")"
                                                    }
                                                })
                                                : t._e(),
                                            t._v(" "),
                                            a("strong", {
                                                staticClass: "guest_name"
                                            }, [t._v(t._s(e.writer.name))]),
                                            t._v(" "),
                                            "N" === e.deleted_by_user
                                                ? a("p", {
                                                    staticClass: "p_review"
                                                }, [t._v(t._s(e.content))])
                                                : t._e(),
                                            t._v(" "),
                                            "Y" === e.deleted_by_user
                                                ? a("p", {
                                                    staticClass: "p_review"
                                                }, [t._v("게스트에 의해 삭제된 후기 입니다.")])
                                                : t._e(),
                                            t._v(" "),
                                            e.images.length
                                                ? a("div", {
                                                    staticClass: "space_list swiper_list photo_review"
                                                }, [a("div", {
                                                        staticClass: "flex_wrap column3 fluid"
                                                    }, t._l(e.images, function (s, i) {
                                                        return a("article", {
                                                            key: "__review_img_" + i,
                                                            staticClass: "box box_space"
                                                        }, [a("div", {
                                                                staticClass: "inner"
                                                            }, [a("a", {
                                                                    on: {
                                                                        click: function (s) {
                                                                            return t.activePhotoViewer(e.images, i)
                                                                        }
                                                                    }
                                                                }, [a("div", {
                                                                        staticClass: "img_box"
                                                                    }, [
                                                                        a("span", {
                                                                            staticClass: "img",
                                                                            style: {
                                                                                backgroundImage: "url(" + s.image_url + ")"
                                                                            }
                                                                        }),
                                                                        t._v(" "),
                                                                        a("span", {staticClass: "border"})
                                                                    ])])])])
                                                    }), 0)])
                                                : t._e(),
                                            t._v(" "),
                                            a("div", {
                                                staticClass: "rbox_info_base"
                                            }, [a("span", {
                                                    staticClass: "time_info"
                                                }, [t._v(
                                                        "\n              " + t._s(e.created_at.slice(0, 10).replace(/-/gi, ".")) +
                                                    " " + t._s(e.created_at.slice(11, 19)) + "\n            "
                                                    )])]),
                                            t._v(" "),
                                            a("span", {
                                                staticClass: "rate_area"
                                            }, [
                                            a("span", {
                                                    staticClass: "blind"
                                                }, [t._v("평점")]),
                                                t._v(" "),
                                                t._l(5, function (s) {
                                                    return a("span", {
                                                        staticClass: "rate",
                                                        class: {
                                                            active: s <= e.rate
                                                    }
                                                }, [a("em", {
                                                        staticClass: "sp_icon ico_star_off"
                                                    }, [t._v(t._s(s) + "점")])])
                                            })
                                        ], 2)
                                    ]),
                                    t._v(" "),
                                    t._l(e.comments.slice(e.comments.length - 1), function (s) {
                                        return e.comments.length && !s.deleted
                                            ? a("div", {
                                                staticClass: "rbox_reply"
                                            }, [
                                                a("p", {
                                                    staticClass: "p_tit_reply"
                                                }, [
                                                    a("em", [t._v(t._s(
                                                            s.is_writed_by_admin && "Y" === s.is_writed_by_admin
                                                                ? "스페이스클라우드 운영팀"
                                                                : "호스트님"
                                                        ))]),
                                                    t._v("의 답글\n          ")
                                                ]),
                                                t._v(" "),
                                                a("p", {
                                                    staticClass: "p_review"
                                                }, [t._v(t._s(t._f("entities")(s.content)))]),
                                                t._v(" "),
                                                a("div", {
                                                    staticClass: "rbox_info_base"
                                                }, [
                                                    s.created_at
                                                        ? a("p", {
                                                            staticClass: "time_info"
                                                        }, [t._v(t._s(t.$moment(s.created_at).format("YYYY.MM.DD HH:mm:ss")))])
                                                        : t._e()
                                                ])
                                            ])
                                            : t._e()
                                    })
                                ], 2)
                                : t._e()
                        }), 0),
                        t._v(" "),
                        a("div", {
                            staticClass: "paging"
                        }, [
                a("a", {
                                staticClass: "btn_prev_list_end",
                                class: {
                                    active: t.page.current - 5 > 0
                                },
                                on: {
                                    click: function (e) {
                                        return t.getReviews(t.page.current - 5)
                                    }
                                }
                            }, [a("i", {
                                    staticClass: "sp_icon ico_prev_list"
                                }, [t._v("이전목록 5개로 이동")])]),
                            t._v(" "),
                            a("a", {
                                staticClass: "btn_prev_list",
                                class: {
                                    active: t.page.current - 1 > 0
                                },
                                on: {
                                    click: function (e) {
                                        return t.getReviews(t.page.current - 1)
                                    }
                                }
                            }, [a("i", {
                                    staticClass: "sp_icon ico_prev_list"
                                }, [t._v("이전페이지로 이동")])]),
                            t._v(" "),
                            t._l(5, function (e) {
                                return e + 5 * parseInt((t.page.current - 1) / 5) <= t.page.pages
                                    ? a("a", {
                                        staticClass: "num",
                                        class: {
                                            active: e + 5 * parseInt((t.page.current - 1) / 5) === t.page.current
                                    },
                                    on: {
                                        click: function (s) {
                                            t.getReviews(e + 5 * parseInt((t.page.current - 1) / 5))
                                        }
                                    }
                                }, [t._v(t._s(e + 5 * parseInt((t.page.current - 1) / 5)))])
                                : t._e()
                        }),
                        t._v(" "),
                        a("a", {
                            staticClass: "btn_next_list",
                            class: {
                                active: t.page.current + 1 <= t.page.pages
                        },
                        on: {
                            click: function (e) {
                                return t.getReviews(t.page.current + 1)
                            }
                        }
                    }, [a("i", {
                            staticClass: "sp_icon ico_next_list"
                        }, [t._v("다음 페이지로 이동")])]),
                    t._v(" "),
                    a("a", {
                        staticClass: "btn_next_list_end",
                        class: {
                            active: t.page.current + 5 <= t.page.pages
                    },
                    on: {
                        click: function (e) {
                            return t.getReviews(t.page.current + 5)
                        }
                    }
                }, [a("i", {
                        staticClass: "sp_icon ico_next_list"
                    }, [t._v("다음목록 5개로 이동")])])
            ], 2)
        ])
        : t._e(),
    t._v(" "),
    t.showOnlyImage && !t.reviews.length
        ? a("div", {
            staticClass: "review_box no_data"
        }, [t._m(1)])
        : t._e(),
    t._v(" "),
    t.showPhotoViewer
        ? a("photo-viewer", {
            attrs: {
                modalStatus: t.showPhotoViewer,
                idx: t.photoViewerIdx,
                imageList: t.activeImageList,
                space: t
                    .activeImageList[0]
                    .space_name
            },
            on: {
                "update:modalStatus": function (e) {
                    t.showPhotoViewer = e
                },
                "update:modal-status": function (e) {
                    t.showPhotoViewer = e
                }
            }
        })
        : t._e()
    ],
1
)},
[
function () {
var t = this.$createElement,
    e = this._self._c || t;
return e("div", {
    staticClass: "center_wrap"
}, [e("div", {
        staticClass: "center txt_result"
    }, [e("p", {
            staticClass: "p_result"
        }, [this._v("등록된 후기가 아직 없습니다.")])])])
},
function () {
var t = this.$createElement,
    e = this._self._c || t;
return e("div", {
    staticClass: "center_wrap"
}, [e("div", {
        staticClass: "center txt_result"
    }, [e("p", {
            staticClass: "p_result"
        }, [this._v("등록된 사진 후기가 아직 없습니다.")])])])
}
],
!1,
null,
null,
null
);
e.a = o.exports
},
455 : function (t, e, s) {
"use strict";
var a = {
props: [
"dataset", "callModalStatus"
],
data: function () {
return {
isPc: !1,
loadMap: !1,
map: "",
mapMoveStatus: !1
}
},
methods: {
loadDaumMaps: function () {
var t = document.getElementById("map"),
    e = {
        center: new daum
            .maps
            .LatLng(this.dataset.location.latitude, this.dataset.location.longitude),
        level: 4
    };
this.map = new daum
    .maps
    .Map(t, e);
var a = s(441),
    i = new daum
        .maps
        .Size(36, 47),
    n = new daum
        .maps
        .MarkerImage(a, i, {alt: "선택 지점"}),
    o = new daum
        .maps
        .LatLng(this.dataset.location.latitude, this.dataset.location.longitude);
new daum
    .maps
    .Marker({position: o, image: n})
    .setMap(this.map),
this
    .map
    .setZoomable(this.mapMoveStatus),
this
    .map
    .setDraggable(this.mapMoveStatus)
},
setZoomable: function () {
this.mapMoveStatus = !this.mapMoveStatus,
this
    .map
    .setZoomable(this.mapMoveStatus),
this
    .map
    .setDraggable(this.mapMoveStatus)
},
zoomIn: function () {
this.mapMoveStatus || this.setZoomable(),
this
    .map
    .setLevel(this.map.getLevel() - 1)
},
zoomOut: function () {
this.mapMoveStatus || this.setZoomable(),
this
    .map
    .setLevel(this.map.getLevel() + 1)
},
callToHost: function () {
document.querySelector(".pc")
    ? (this.$emit("update:callModalStatus", !0), fbq("trackCustom", "Call"))
    : window.location.href = "tel://".concat(this.dataset.hp_no)
}
},
mounted: function () {
var t = this;
window.innerWidth > 767 && (this.isPc = !0),
this.loadMap = !0,
setTimeout(function () {
daum
    .maps
    .load(function () {
        t.loadDaumMaps()
    })
}, 1e3)
}
},
i = s(5),
n = Object(i.a)(a, function () {
var t = this,
e = t.$createElement,
s = t._self._c || e;
return s("div", {
staticClass: "detail_box map_box",
class: {
type_simple: t.dataset.type
}
}, [
s("h4", {
staticClass: "h_intro blind"
}, [t._v("공간 위치 정보")]),
t._v(" "),
s("div", {
staticClass: "host_profile"
}, [s("div", {
    staticClass: "inner"
}, [
    s("div", {
        staticClass: "sp_location"
    }, [
        s("p", {
            staticClass: "sp_name"
        }, [t._v(t._s(t.dataset.name))]),
        t._v(" "),
        s("p", {
            staticClass: "sp_address"
        }, [t._v(t._s(t.dataset.address))]),
        t._v(" "),
        t.dataset.website
            ? s("p", {
                staticClass: "sp_homepage"
            }, [s("a", {
                    attrs: {
                        href: t.dataset.website,
                        target: "_blank"
                    }
                }, [t._v(t._s(t.dataset.website))])])
            : t._e(),
        t._v(" "),
        t.dataset.type
            ? s("p", {
                staticClass: "sp_call"
            }, [t._v(t._s(t.dataset.hp_no))])
            : t._e()
    ]),
    t._v(" "),
    s("div", {
        staticClass: "row"
    }, [
        s("div", {
            staticClass: "col col6"
        }, [s("a", {
                staticClass: "btn btn_rounded btn_call",
                on: {
                    click: t.callToHost
                }
            }, [t._m(0)])]),
        t._v(" "),
        s("div", {
            staticClass: "col col6"
        }, [s(
                "a",
                {
                    staticClass: "btn btn_rounded btn_way",
                    attrs: {
                        href: "http://map.daum.net/link/to/" + t.dataset.name + "," + t.dataset.location.latitude +
                            "," + t.dataset.location.longitude,
                        target: "_blank"
                    }
                },
                [t._m(1)]
            )])
    ])
])]),
t._v(" "),
s("div", {
staticClass: "map"
}, [
t.loadMap && t.isPc
    ? s("div", {
        staticStyle: {
            width: "100%",
            height: "640px"
        },
        attrs: {
            id: "map"
        }
    })
    : t._e(),
t._v(" "),
t.loadMap && !t.isPc
    ? s("div", {
        staticStyle: {
            width: "375px",
            height: "375px"
        },
        attrs: {
            id: "map"
        }
    })
    : t._e(),
t._v(" "),
s("div", {
    staticClass: "btn_util"
}, [
    s("a", {
        staticClass: "btn_lock",
        attrs: {
            title: "지도잠금설정"
        },
        on: {
            click: t.setZoomable
        }
    }, [
        t.mapMoveStatus
            ? s("i", {
                staticClass: "sp_icon ico_lock_off"
            }, [t._v("지도잠금해제")])
            : s("i", {
                staticClass: "sp_icon ico_lock_on"
            }, [t._v("지도잠금설정")])
    ]),
    t._v(" "),
    s("span", {
        staticClass: "btn_zoom"
    }, [
        s("a", {
            staticClass: "zoomin",
            attrs: {
                title: "지도확대"
            },
            on: {
                click: t.zoomIn
            }
        }, [s("i", {
                staticClass: "sp_icon ico_zoomin"
            }, [t._v("지도확대")])]),
        t._v(" "),
        s("a", {
            staticClass: "zoomout",
            attrs: {
                title: "지도축소"
            },
            on: {
                click: t.zoomOut
            }
        }, [s("i", {
                staticClass: "sp_icon ico_zoomout"
            }, [t._v("지도축소")])])
    ])
])
])
])
}, [
function () {
var t = this.$createElement,
e = this._self._c || t;
return e("span", {
staticClass: "btn_inner"
}, [
e("i", {staticClass: "ico_call sp_icon"}),
this._v("전화걸기\n\t\t\t\t\t\t")
])
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e("span", {
staticClass: "btn_inner way"
}, [
e("i", {staticClass: "ico_way sp_icon"}),
this._v("길찾기\n\t\t\t\t\t\t")
])
}
], !1, null, null, null);
e.a = n.exports
},
456 : function (t, e, s) {
"use strict";
var a = {
props: [
"modalStatus", "info"
],
data: function () {
return {}
},
methods: {
closeModal: function () {
this.$emit("update:modalStatus", !1)
}
}
},
i = s(5),
n = Object(i.a)(a, function () {
var t = this,
e = t.$createElement,
s = t._self._c || e;
return s("div", {
staticClass: "layer_popup call _popup2"
}, [s("div", {
staticClass: "popup_wrap"
}, [s("div", {
    staticClass: "pop_container"
}, [
    t._m(0),
    t._v(" "),
    s("div", {
        staticClass: "call_info"
    }, [
        t._v("\n\t\t\t\t\t" + t._s(t.info.product)),
        s("br"),
        t._v(" "),
        s("a", {
            attrs: {
                href: "tel:" + t.info.phone
            }
        }, [t._v(t._s(t.info.phone))])
    ]),
    t._v(" "),
    s("div", {
        staticClass: "btns full"
    }, [s("a", {
            staticClass: "btn btn_full btn_default",
            on: {
                click: t.closeModal
            }
        }, [t._v("확인")])])
])])])
}, [
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"p",
{
    staticClass: "pop_guide_txt"
},
[this._v('\n\t\t\t\t\t"스페이스클라우드를 통해 연락드렸어요~"'), e("br"), this._v("\n\t\t\t\t\t라고 말씀하시면 더 친절하게 안내 받으실 수 있습니다. :)\n\t\t\t\t")]
)
}
], !1, null, null, null);
e.a = n.exports
},
492 : function (t, e, s) {
"use strict";
var a = s(442);
s
.n(a)
.a
},
493 : function (t, e, s) {
(t.exports = s(36)(!1)).push([
t.i, ".loading_modal .wrap_loading[data-v-1f131916]{position:fixed;z-index:998;top:2" +
"5%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:50%;-web" +
"kit-transform:translateX(-50%);transform:translateX(-50%);width:150px;height:1" +
"50px;text-align:center;border-radius:5px}#loading[data-v-1f131916]{display:inl" +
"ine-block;width:80px;height:80px;border-radius:50%;border:6px solid hsla(0,0%," +
"100%,.75);border-top-color:#ffd014;animation:spin-data-v-1f131916 1s ease-in-o" +
"ut infinite;-webkit-animation:spin-data-v-1f131916 1s ease-in-out infinite}@ke" +
"yframes spin-data-v-1f131916{to{-webkit-transform:rotate(1turn)}}@-webkit-keyf" +
"rames spin-data-v-1f131916{to{-webkit-transform:rotate(1turn)}}.loading_modal " +
".popup_wrap[data-v-1f131916]{z-index:999}",
""
])
},
494 : function (t, e, s) {
"use strict";
var a = s(443);
s
.n(a)
.a
},
495 : function (t, e, s) {
(t.exports = s(36)(!1)).push([
t.i, ".btn-coupon[data-v-1188fc25]{display:block;margin-top:15px;padding:13px 0;heig" +
"ht:60px;background:#fff;border:1px solid #704de4;font-size:16px;font-weight:70" +
"0;color:#704de4;text-align:center}.btn-coupon.isAcquired[data-v-1188fc25]{padd" +
"ing:21px 0;font-weight:400}.btn-coupon span[data-v-1188fc25]{font-size:.9rem;f" +
"ont-weight:400;color:#666;line-height:1.5}@media (max-width:767px){.btn-coupon" +
"[data-v-1188fc25]{margin:20px 15px;height:auto;font-size:13px}.btn-coupon span" +
"[data-v-1188fc25]{font-size:.8rem}}",
""
])
},
496 : function (t, e, s) {
"use strict";
var a = s(444);
s
.n(a)
.a
},
497 : function (t, e, s) {
(t.exports = s(36)(!1)).push([t.i, ".info_item>.data{padding-left:20px}", ""])
},
498 : function (t, e, s) {
"use strict";
var a = s(445);
s
.n(a)
.a
},
499 : function (t, e, s) {
(t.exports = s(36)(!1)).push(
[t.i, ".pc .section_cont[data-v-e02ec714]{margin-top:70px}", ""]
)
},
508 : function (t, e, s) {
"use strict";
s.r(e);
s(73),
s(114),
s(69),
s(18);
var a = s(3),
i = (s(32), s(19), s(401), s(10)),
n = (s(28), s(23)),
o = s(422),
c = s.n(o),
r = s(72),
l = s.n(r),
d = (s(406), s(398), s(415)),
_ = {
props: {
modalStatus: {
    type: Boolean,
    default: !1
},
isLoading: {
    type: Boolean,
    default: !1
},
isNotice: {
    type: Boolean,
    default: !0
},
isDimmed: {
    type: Boolean,
    default: !1
},
title: String,
msg: String
},
methods: {
closeModal: function () {
    this.$emit("update:modalStatus", !1),
    document.removeEventListener("click", this.clickEventListener),
    document.removeEventListener("touchend", this.clickEventListener)
},
clickEventListener: function (t) {
    t
        .target
        .closest(".naver-splugin") || t
        .target
        .closest("div.share-modal") || this.closeModal()
}
},
mounted: function () {}
},
u = (s(492), s(5)),
p = Object(u.a)(_, function () {
var t = this,
e = t.$createElement,
s = t._self._c || e;
return t.modalStatus
? s("div", {
    staticClass: "loading_modal layer_popup workspace"
}, [
    t.isDimmed
        ? s("div", {
            staticClass: "dimmed",
            staticStyle: {
                display: "block",
                "z-index": "998"
            }
        })
        : t._e(),
    t._v(" "),
    t.isLoading
        ? s("div", {
            staticClass: "wrap_loading"
        }, [s("div", {
                attrs: {
                    id: "loading"
                }
            })])
        : t._e(),
    t._v(" "),
    t.isNotice
        ? s("div", {
            staticClass: "popup_wrap",
            on: {
                click: function (t) {
                    t.stopPropagation()
                }
            }
        }, [
            s("div", {
                staticClass: "pop_header"
            }, [t._v(t._s(t.title) + " ")]),
            t._v(" "),
            s("div", {
                staticClass: "pop_container",
                staticStyle: {
                    background: "#ffc800"
                }
            }, [
                s("pre", {
                    staticStyle: {
                        "text-align": "left"
                    },
                    domProps: {
                        innerHTML: t._s(t.msg)
                    }
                }),
                t._v(" "),
                s("a", {
                    staticClass: "btn_pop_close",
                    attrs: {
                        title: "레이어팝업 닫힘"
                    },
                    on: {
                        click: function (e) {
                            t.isNotice = !1
                        }
                    }
                }, [s("i", {
                        staticClass: "sp_icon ico_pop_close"
                    }, [t._v("레이어팝업닫기")])])
            ])
        ])
        : t._e()
])
: t._e()
}, [], !1, null, "1f131916", null).exports,
v = s(409),
h = (s(68), {
props: ["dataset"],
computed: Object(i.a)({}, Object(n.b)({
userInfo: function (t) {
    return t.user
}
}), {
isAcquired: function () {
    this.coupon;
    var t = this.coupon.downloadable || !1;
    return (this.userInfo || !1) && !t
}
}),
data: function () {
return {
    isLoad: !1,
    space_id: null,
    coupon: {},
    doubleSubmitFlag: !1
}
},
methods: {
fetch: function () {
    var t = Object(a.a)(regeneratorRuntime.mark(function t() {
        var e,
            s,
            a = this;
        return regeneratorRuntime.wrap(function (t) {
            for (;;) 
                switch (t.prev = t.next) {
                    case 0:
                        return t.prev = 0,
                        t.next = 3,
                        this.$axios({
                            method: "get",
                            url: "/spaces/".concat(this.space_id, "/coupons"),
                            headers: {
                                Authorization: this.userInfo.token
                            }
                        });
                    case 3:
                        return e = t.sent,
                        s = e.data,
                        t.abrupt("return", s.coupons.find(function (t) {
                            var e = t
                                .coupon_code
                                .replace(/_[0-9]+/g, "");
                            return !t.is_admin_coupon && e == a.space_id
                        }));
                    case 8:
                        return t.prev = 8,
                        t.t0 = t.catch(0),
                        t.abrupt("return", null);
                    case 11:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
            [0, 8]
        ])
    }));
    return function () {
        return t.apply(this, arguments)
    }
}(),
getCoupon: function () {
    var t = Object(a.a)(regeneratorRuntime.mark(function t() {
        var e;
        return regeneratorRuntime.wrap(function (t) {
            for (;;) 
                switch (t.prev = t.next) {
                    case 0:
                        if (!this.doubleSubmitFlag && !this.isAcquired) {
                            t.next = 2;
                            break
                        }
                        return t.abrupt("return");
                    case 2:
                        if (this.userInfo) {
                            t.next = 4;
                            break
                        }
                        return t.abrupt("return", this.$router.push("/auth/login"));
                    case 4:
                        return t.prev = 4,
                        this.doubleSubmitFlag = !0,
                        t.next = 8,
                        this.$axios({
                            method: "post",
                            url: "/my_coupons",
                            headers: {
                                Authorization: this.userInfo.token
                            },
                            data: {
                                coupon_code: this.coupon.coupon_code
                            }
                        });
                    case 8:
                        return e = t.sent,
                        e.data,
                        t.next = 12,
                        this.fetch();
                    case 12:
                        this.coupon = t.sent,
                        this.$parent.activeNoti
                            ? this
                                .$parent
                                .activeNoti("쿠폰이 발급되었습니다.")
                            : alert("쿠폰이 발급되었습니다."),
                        this.doubleSubmitFlag = !1,
                        t.next = 20;
                        break;
                    case 17:
                        throw t.prev = 17,
                        t.t0 = t.catch(4),
                        t.t0;
                    case 20:
                    case "end":
                        return t.stop()
                }
            }, t, this, [
            [4, 17]
        ])
    }));
    return function () {
        return t.apply(this, arguments)
    }
}()
},
mounted: function () {
var t = Object(a.a)(regeneratorRuntime.mark(function t() {
    return regeneratorRuntime.wrap(function (t) {
        for (;;) 
            switch (t.prev = t.next) {
                case 0:
                    if (this.space_id = this.dataset.info.id, !this.userInfo) {
                        t.next = 7;
                        break
                    }
                    return t.next = 4,
                    this.fetch();
                case 4:
                    this.coupon = t.sent,
                    t.next = 8;
                    break;
                case 7:
                    this.coupon = this
                        .dataset
                        .coupons
                        .find(function (t) {
                            return !t.is_admin_coupon
                        });
                case 8:
                    this.isLoad = !0;
                case 9:
                case "end":
                    return t.stop()
            }
        }, t, this)
}));
return function () {
    return t.apply(this, arguments)
}
}()
}),
m = (s(494), Object(u.a)(h, function () {
var t = this,
e = t.$createElement,
s = t._self._c || e;
return t.isLoad && t.coupon
? s("a", {
    staticClass: "btn-coupon",
    class: {
        isAcquired: t.isAcquired
},
attrs: {
    href: "#"
},
on: {
    click: function (e) {
        return e.stopPropagation(),
        e.preventDefault(),
        t.getCoupon(e)
    }
}
}, [
t.isAcquired
    ? [t._v("쿠폰을 이미 받았네요!")]
    : [
        t._v(
            "\n    " + t._s(t._f("toCurrency")(t.coupon.discount_price)) + "원 쿠폰 받기 "
        ),
        s("br"),
        t._v(" "),
        s("span", [t._v("(발급 후 14일 동안 사용" + t._s(
                t.coupon.min_hour
                    ? " | 최소 " + t.coupon.min_hour + "시간"
                    : null
            ) + ")")])
    ]
], 2)
: t._e()
}, [], !1, null, "1188fc25", null).exports),
f = {
props: [
"dataset", "modalStatus", "notiStatus", "notiMsg", "isPreview"
],
components: {
photoViewer: d.a,
NoticeModal: p,
Loading: v.a,
CouponButton: m
},
data: function () {
return {
loading: {
    isShow: !1,
    msg: ""
},
noticeModal: {
    isShow: !1,
    isNotice: !1,
    title: "",
    msg: "",
    isDimmed: !1,
    isLoading: !1
},
showPhotoViewer: !1,
numberOfPeople: 0,
selectedCalandar: "",
selectedTime: {
    start: "",
    end: "",
    selected: []
},
selectedPkg: [],
currentDate: this
    .$moment(new Date)
    .format("YYYYMMDD"),
isDateLoading: !0,
selectedProduct: "",
selectedType: "",
swiperOption: {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: !0,
    initialSlide: 9
},
activeImageList: "",
avgRspTime: ""
}
},
computed: Object(i.a)({}, Object(n.b)({
isMobile: function (t) {
return t.isMobile
}
}), {
cnvenCodes: function () {
return this
    .$store
    .state
    .commonCodes
    .filter(function (t) {
        return "CONV" === t.cate
    })[0]
},
reserveSpacePrice: function () {
return this.selectedTime.selected.length
    ? "Y" === this.selectedType.charging_per_person
        ? this
            .selectedTime
            .selected
            .map(function (t) {
                return t.price
            })
            .reduce(function (t, e) {
                return t + e
            }, 0) * this.numberOfPeople
        : this
            .selectedTime
            .selected
            .map(function (t) {
                return t.price
            })
            .reduce(function (t, e) {
                return t + e
            }, 0)
    : this.selectedPkg.length
        ? this
            .selectedPkg
            .map(function (t) {
                return t.price
            })
            .reduce(function (t, e) {
                return t + e
            }, 0)
        : void 0
},
extraPersonCharge: function () {
return this.selectedType && this.numberOfPeople - this.selectedType.person_ceiling > 0
    ? (this.numberOfPeople - this.selectedType.person_ceiling) * this.selectedType.extra_person_price
    : 0
},
authenticated: function () {
return this.$store.state.authenticated
}
}),
methods: {
calcAvgRspTime: function () {
if (this.dataset.host && this.dataset.host.avg_rsps_ss) {
    var t = parseInt(this.dataset.host.avg_rsps_ss, 10),
        e = Math.floor(t / 3600),
        s = Math.floor((t - 3600 * e) / 60);
    this.avgRspTime = e
        ? ""
            .concat(e, "시간 ")
            .concat(s, "분")
        : "".concat(s, "분")
}
},
setCnvenCodes: function () {
var t = this;
this
    .dataset
    .products
    .forEach(function (e) {
        e
            .cnvens
            .forEach(function (e) {
                var s = t
                    .cnvenCodes
                    .values
                    .find(function (t) {
                        return e.CNVEN_FCTS_CD === t.key
                    });
                s && (e.icon = s.ETC_ITM1, e.title1 = s.ETC_ITM2, e.title2 = s.ETC_ITM3)
            })
    })
},
callToHost: function () {
fbq("trackCustom", "Call"),
document.querySelector(".pc")
    ? this.$emit("update:modalStatus", !0)
    : window.location.href = "tel://".concat(this.dataset.corp.phone)
},
getBeforeMonth: function (t, e) {
var s = this
        .$moment(e.calandar.date)
        .startOf(),
    a = this
        .$moment(this.currentDate)
        .startOf();
s.diff(a) <= 0 || (e.calandar = {
    date: this
        .$moment(e.calandar.date)
        .subtract(1, "months")
        .format("YYYYMMDD"),
    days: []
}, this.getCalandarData(t, e))
},
getNextMonth: function (t, e) {
e.calandar = {
    date: this
        .$moment(e.calandar.date)
        .add(1, "months")
        .format("YYYYMMDD"),
    days: []
},
this.getCalandarData(t, e)
},
selectProduct: function (t, e) {
this.selectedCalandar = "",
this.selectedTime = {
    start: "",
    end: "",
    selected: []
},
this.selectedPkg = [],
this.selectedType = e,
this.getCalandarData(t, e)
},
getCalandarData: function () {
var t = Object(a.a)(regeneratorRuntime.mark(function t(e, s) {
    var a,
        i;
    return regeneratorRuntime.wrap(function (t) {
        for (;;) 
            switch (t.prev = t.next) {
                case 0:
                    return t.prev = 0,
                    a = this,
                    this.numberOfPeople = e.info.min_guest_policy,
                    s.calandar || (a.isDateLoading = !0, s.calandar = {
                        date: a.currentDate
                    }),
                    "TIME" === this.selectedType.RSV_TP_CD && this.openTimeProuctLoadingPopup(),
                    t.next = 7,
                    a.$axios({
                        method: "get",
                        url: "/products/".concat(e.info.id, "/prices"),
                        params: {
                            reservation_type_id: s.id,
                            year: a
                                .$moment(s.calandar.date)
                                .format("YYYY"),
                            month: a
                                .$moment(s.calandar.date)
                                .format("MM")
                        }
                    });
                case 7:
                    i = t.sent,
                    s.calandar = {
                        date: ""
                            .concat(i.data.year)
                            .concat(i.data.month, "01"),
                        month: i.data.month,
                        days: i.data.days
                    },
                    this.$forceUpdate(),
                    a.isDateLoading = !1,
                    a.loading.isShow = !1,
                    t.next = 19;
                    break;
                case 14:
                    t.prev = 14,
                    t.t0 = t.catch(0),
                    this.loading.isShow = !1,
                    this.open504Popup();
                case 19:
                case "end":
                    return t.stop()
            }
        }, t, this, [
        [0, 14]
    ])
}));
return function (e, s) {
    return t.apply(this, arguments)
}
}(),
selectDate: function (t, e) {
e.available && (
    this.$moment(this.currentDate).add(90, "days") < this.$moment("".concat(e.year).concat(
            Number(e.month) < 10
                ? 0 + e.month
                : e.month
    ).concat(
            Number(e.day) < 10
                ? 0 + e.day
                : e.day
    ))
        ? (this.activeNoti("오늘부터 90일까지 예약이 가능합니다."), this.selectedCalandar = "")
        : this.selectedCalandar && this.selectedCalandar.type.id === t.id && this.selectedCalandar.day.day === e.day
            ? this.selectedCalandar = ""
            : (this.selectedTime = {
                start: "",
                end: "",
                selected: []
            }, this.selectedPkg = [], this.selectedCalandar = {
                type: t,
                day: e
            }, "PKG" === t.RSV_TP_CD && e.packages.length && this.selectPkg(e.packages[0]))
)
},
selectTime: function (t) {
var e = this,
    s = function (t, s) {
        for (var a = t; a < s; a++) 
            if (!e.selectedCalandar.day.times[a].available) 
                return !1;
    return !0
    };
if (t.available) {
    this.selectedTime.start || "number" == typeof this.selectedTime.start
        ? this.selectedTime.end - 1 !== this.selectedTime.start
            ? (this.selectedTime = {
                start: "",
                end: "",
                selected: []
            }, this.selectedTime.start = t.hour, this.selectedTime.end = t.hour + 1)
            : this.selectedTime.end - 1 === this.selectedTime.start && t.hour < this.selectedTime.start
                ? s(t.hour, this.selectedTime.start)
                    ? this.selectedTime.start = t.hour
                    : (this.activeNoti("중복되는 예약이 있습니다. 예약시간을 다시 확인해주세요."), this.selectedTime = {
                        start: "",
                        end: "",
                        selected: []
                    })
                : t.hour > this.selectedTime.start
                    ? s(this.selectedTime.start, t.hour)
                        ? t.hour + 1 - this.selectedTime.start < this.selectedProduct.info.min_time_policy
                            ? (
                                this.activeNoti("최소 ".concat(this.selectedProduct.info.min_time_policy, "시간 예약가능한 공간입니다.")),
                                this.selectedTime = {
                                    start: "",
                                    end: "",
                                    selected: []
                                }
                            )
                            : this.selectedTime.end = t.hour + 1
                        : (this.activeNoti("중복되는 예약이 있습니다. 예약시간을 다시 확인해주세요."), this.selectedTime = {
                            start: "",
                            end: "",
                            selected: []
                        })
                    : t.hour === this.selectedTime.start && (this.selectedTime = {
                        start: "",
                        end: "",
                        selected: []
                    })
        : (this.selectedTime.start = t.hour, this.selectedTime.end = t.hour + 1);
    var a = this
            .selectedCalandar
            .day
            .times
            .findIndex(function (t) {
                return t.hour === e.selectedTime.start
            }),
        i = this
            .selectedCalandar
            .day
            .times
            .findIndex(function (t) {
                return t.hour === e.selectedTime.end
            });
    this.selectedTime.selected = 24 === Number(this.selectedTime.end)
        ? this
            .selectedCalandar
            .day
            .times
            .slice(a)
        : this
            .selectedCalandar
            .day
            .times
            .slice(a, i)
}
},
sortSelectedPkg: function () {
this
    .selectedPkg
    .sort(function (t, e) {
        return e.start_date - t.start_data || e.shour - t.shour
    })
},
selectPkg: function (t) {
var e = this
    .selectedPkg
    .findIndex(function (e) {
        return e.id === t.id
    });
t.available && (
    e > -1
        ? this.selectedPkg.splice(e, 1)
        : (this.selectedPkg.splice(e, 1), this.selectedPkg.push(t))
)
},
substractPeople: function (t) {
this.numberOfPeople > t.info.min_guest_policy
    ? this.numberOfPeople -= 1
    : this.activeNoti("최소인원은 ".concat(t.info.min_guest_policy, "명입니다."))
},
addPeople: function (t) {
this.numberOfPeople < t.info.max_guest_capacity
    ? this.numberOfPeople += 1
    : this.activeNoti("최대인원은 ".concat(t.info.max_guest_capacity, "명입니다."))
},
reserveSpace: function () {
if (this.isPreview) 
    this.activeNoti("요청하신 URL에 대한 접근 권한이 없습니다.");
else if (this.selectedProduct) 
    if (this.selectedProduct.hasOwnProperty("selectedType")) 
        if (this.selectedProduct && this.selectedProduct.selectedType) {
            if ("TIME" === this.selectedProduct.selectedType) {
                if (!this.selectedCalandar) 
                    return void this.activeNoti("날짜를 선택해주세요.");
                if (!this.selectedTime.selected.length) 
                    return void this.activeNoti("시간을 선택해주세요.");
                if (
                    localStorage.setItem(
                        "reserveInfo",
                        JSON.stringify({selectedProduct: this.selectedProduct, selectedCalandar: this.selectedCalandar, selectedTime: this.selectedTime, selectedPeople: this.numberOfPeople, selectedType: this.selectedType})
                    ),
                    this.selectedTime.selected.length < this.selectedProduct.info.min_time_policy
                ) 
                    return void this.activeNoti(
                        "최소 ".concat(this.selectedProduct.info.min_time_policy, "시간 예약가능한 공간입니다.")
                    )
            } else if ("PKG" === this.selectedProduct.selectedType) {
                if (!this.selectedPkg.length) 
                    return this.selectedCalandar
                        ? void this.activeNoti("패키지를 선택해주세요.")
                        : void this.activeNoti("날짜를 선택해주세요.");
                localStorage.setItem(
                    "reserveInfo",
                    JSON.stringify({selectedProduct: this.selectedProduct, selectedCalandar: this.selectedCalandar, selectedPkg: this.selectedPkg, selectedPeople: this.numberOfPeople, selectedType: this.selectedType})
                )
            }
            localStorage.setItem("spaceInfo", JSON.stringify(this.dataset));
            var t = JSON.parse(localStorage.getItem("user"));
            if (!t) 
                return localStorage.setItem(
                    "fromUrl",
                    "/reserve/space/".concat(this.dataset.info.id)
                ),
                void this
                    .$router
                    .push("/auth/login");
            if (t && "email" === t.register_type && !t.phone) 
                return localStorage.setItem(
                    "fromUrl",
                    "/reserve/space/".concat(this.dataset.info.id)
                ),
                void this
                    .$router
                    .push("/auth/verify/phone");
            this
                .$router
                .push("/reserve/space/".concat(this.dataset.info.id))
        }
    else 
    this.activeNoti("예약 선택을 해주세요.");
else 
    this.activeNoti("예약 선택을 해주세요.");
else 
    this.activeNoti("세부공간을 선택해주세요.")
},
checkNumberOfPeople: function (t) {
this.numberOfPeople <= t.info.min_guest_policy
    ? this.numberOfPeople = t.info.min_guest_policy
    : this.numberOfPeople >= t.info.max_guest_capacity && (
        this.numberOfPeople = t.info.max_guest_capacity
    )
},
activeNoti: function (t) {
var e = this;
this.$emit("update:notiMsg", t),
this.$emit("update:notiStatus", !0),
setTimeout(function () {
    e.$emit("update:notiStatus", !1)
}, 1500)
},
activePhotoViewer: function (t) {
this.activeImageList = t,
this.showPhotoViewer = !0
},
resetData: function () {
this
    .dataset
    .products
    .forEach(function (t) {
        t.selectedType = ""
    }),
this.showPhotoViewer = !1,
this.numberOfPeople = 0,
this.selectedCalandar = "",
this.selectedTime = {
    start: "",
    end: "",
    selected: []
},
this.selectedPkg = [],
this.currentDate = this
    .$moment(new Date)
    .format("YYYYMMDD"),
this.isDateLoading = !0,
this.selectedProduct = "",
this.selectedType = "",
this.swiperOption = {
    slidesPerView: "auto",
    spaceBetween: 0,
    freeMode: !0,
    initialSlide: 9
},
this.activeImageList = "",
this.avgRspTime = ""
},
initSwiper: function () {},
sortProduct: function (t) {
return t
    .reservation_types
    .slice()
    .sort(function (t, e) {
        return "PKG" === t.RSV_TP_CD
            ? 1
            : -1
    })
},
openTimeProuctLoadingPopup: function () {
this.loading.isShow = !0,
this.loading.msg = "예약가능한 일정을 불러오는 중입니다.\n잠시만 기다려주세요."
},
openTimeProudctPopup: function () {
this.noticeModal.isShow = !0,
this.noticeModal.isNotice = !0,
this.noticeModal.title = "예약안내 드립니다.",
this.noticeModal.msg = "예약가능한 일정을 불러오는 중입니다.\n잠시만 기다려주세요.",
this.noticeModal.isLoading = !0,
this.noticeModal.isDimmed = !0
},
open504Popup: function () {
this.noticeModal.isShow = !0,
this.noticeModal.isNotice = !0,
this.noticeModal.title = "Info",
this.noticeModal.msg = "서비스가 일시적으로 로딩이 걸리고 있습니다.\n전화 버튼을 통해 공간 호스트님에게 직접 예약해 주세요.\n\n(공간 운영시간을 참고해 주세요" +
        ".)\n\n<strong>Team SpaceCloud</strong>",
this.noticeModal.isLoading = !1,
this.noticeModal.isDimmed = !1
}
},
mounted: function () {
this.resetData(),
this.setCnvenCodes(),
1 === this.dataset.products.length && (
this.selectedProduct = this.dataset.products[0]
),
this.calcAvgRspTime()
},
watch: {
selectedProduct: function (t, e) {
e && e.selectedType && (e.selectedType = null),
this.selectedCalandar = "",
this.selectedTime = {
    start: "",
    end: "",
    selected: []
},
this.selectedPkg = [],
this.selectedType = ""
}
}
},
g = Object(u.a)(
f, function () {
var t = this,
e = t.$createElement,
s = t._self._c || e;
return s("div", {
staticClass: "ly_right_wrap meet"
}, [
s("div", {
    staticClass: "ly_right_fixed"
}, [
t._m(0),
t._v(" "),
s(
"div", {
            staticClass: "scroll_box"
        }, [
s(
    "div", {
                    staticClass: "scroll_inner"
                }, [
    "FIXPY" === t.dataset.info.RSV_MTH_CD
                        ? s("div", {
                            staticClass: "respond_infos"
                        }, [
                            t._m(1), t._v(" "), t.dataset.host && t.dataset.host.avg_rsps_ss
                                ? s("p", {
                                    staticClass: "respond_data"
                                }, [
                                    s("strong", [t._v("평균 대기 시간")]),
                                    t._v(" "),
                                    s("strong", {
                                        staticClass: "txt_primary"
                                    }, [t._v(t._s(t.avgRspTime))])
                                ])
                                : t._e()
                        ])
                        : t._e(),
                    t._v(" "),
                    "RVFIX" === t.dataset.info.RSV_MTH_CD
                        ? s("div", {
                            staticClass: "respond_infos"
                        }, [
                            t._m(2), t._v(" "), t.dataset.host && t.dataset.host.avg_rsps_ss
                                ? s("p", {
                                    staticClass: "respond_data"
                                }, [
                                    s("strong", [t._v("평균 대기 시간")]),
                                    t._v(" "),
                                    s("strong", {
                                        staticClass: "txt_primary"
                                    }, [t._v(t._s(t.avgRspTime))])
                                ])
                                : t._e()
                        ])
                        : t._e(),
                    t._v(" "),
                    "NOWPY" === t.dataset.info.RSV_MTH_CD
                        ? s("div", {
                            staticClass: "respond_infos"
                        }, [t._m(3)])
                        : t._e(),
                    t._v(" "),
                    s("ul", {
                        staticClass: "reserv_list"
                    }, t._l(t.dataset.products, function (e) {
                        return s("li", {
                            staticClass: "lst",
                            class: {
                                active: t.selectedProduct && e.info.id === t.selectedProduct.info.id
                            }
                        }, [
            s("div", {
                                    staticClass: "flex_box"
                                }, [
                                    s("div", {
                                            staticClass: "flex"
                                        }, [
                                            s("input", {
                                                    directives: [
                                                        {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: t.selectedProduct,
                                                            expression: "selectedProduct"
                                                        }
                                                    ],
                                                    staticClass: "radio",
                                                    attrs: {
                                                        type: "radio",
                                                        name: "space_reserv",
                                                        id: "sp" + e.info.id
                                                    },
                                                    domProps: {
                                                        value: e,
                                                        checked: t._q(t.selectedProduct, e)
                                                    },
                                                    on: {
                                                        change: function (s) {
                                                            t.selectedProduct = e
                                                        }
                                                    }
                                                }),
                                            t._v(" "),
                                            s("label", {
                                                    attrs: {
                                                            for: "sp" + e.info.id}
                                                    },
                                                    [t._v(t._s(e.info.name))]
                                                )]
                                        ), t._v(" "), s("div", {
                                            staticClass: "flex align_right"
                                        }, [
                                            s("strong", [t._v("\\" + t._s(t._f("toCurrency")(e.info.price)))]),
                                            t._v(" "),
                                            s("span", {
                                                staticClass: "txt_unit"
                                            }, [
                                                t._v("\n                  /\n                  "), "TIME" === e.info.RSV_TP_CD
                                                    ? [t._v("시간")]
                                                    : t._e(),
                                                t._v(" "),
                                                "PKG" === e.info.RSV_TP_CD
                                                    ? [t._v("패키지")]
                                                    : t._e(),
                                                t._v(" "),
                                                "Y" === e.info.charging_per_person
                                                    ? [t._v("(인)")]
                                                    : t._e()
                                            ], 2)
                                        ])]
                                ), t._v(" "), s("div", {
                                    staticClass: "space_info_wrap",
                                    class: {
                                        active: t.selectedProduct
                                    }
                                }, [
                    s("div", {
                                        staticClass: "meetspace-info"
                                    }, [
                                        e.info.image_url
                                            ? s("div", {
                                                staticClass: "meetspace-info-photo",
                                                style: {
                                                    backgroundImage: "url(" + e.info.image_url + ")"
                                                },
                                                on: {
                                                    click: function (s) {
                                                        return t.activePhotoViewer([
                                                            {
                                                                image_url: e.info.image_url
                                                            }
                                                        ].concat(e.images))
                                                    }
                                                }
                                            }, [
                                                e.images.length > 1
                                                    ? s("em", {
                                                        staticClass: "rooms meetspace-info-photo__count"
                                                    }, [t._v("+" + t._s(e.images.length - 1))])
                                                    : t._e()
                                            ])
                                            : t._e(),
                                        t._v(" "),
                                        e.info.desc
                                            ? s("p", {
                                                staticClass: "meetspace-info-desc",
                                                domProps: {
                                                    innerHTML: t._s(e.info.desc.split("\n").join("<br/>"))
                                                }
                                            })
                                            : t._e()
                                    ]),
                                    t._v(" "),
                                    s("ul", {
                                        staticClass: "list_detail"
                                    }, [
                                        s("li", [
                                            s("span", {
                                                staticClass: "tit"
                                            }, [t._v("공간유형")]),
                                            t._v(" "),
                                            s("span", {
                                                staticClass: "data"
                                            }, t._l(e.categories, function (e) {
                                                return s("span", [t._v(t._s(e.name + " "))])
                                            }), 0)
                                        ]),
                                        t._v(" "),
                                        s("li", [
                                            s("span", {
                                                staticClass: "tit"
                                            }, [t._v("예약시간")]),
                                            t._v(" "),
                                            s("span", {
                                                staticClass: "data"
                                            }, [t._v("최소 " + t._s(e.info.min_time_policy) + "시간 부터")])
                                        ]),
                                        t._v(" "),
                                        s("li", [
                                            s("span", {
                                                staticClass: "tit"
                                            }, [t._v("수용인원")]),
                                            t._v(" "),
                                            s("span", {
                                                staticClass: "data"
                                            }, [t._v(
                                                    "최소 " + t._s(e.info.min_guest_policy) + "명 ~ 최대 " + t._s(e.info.max_guest_capacity) +
                                                "명"
                                                )])
                                        ]),
                                        t._v(" "),
                                        t.selectedType.extra_person_price
                                            ? s("li", [
                                                s("span", {
                                                    staticClass: "tit"
                                                }, [t._v("예약기준")]),
                                                t._v(" "),
                                                s("span", {
                                                    staticClass: "data"
                                                }, [
                                                    [t._v(t._s(t.selectedType.person_ceiling) + "명 초과시 " + t._s(t._f("toCurrency")(
                                                            t.selectedType.extra_person_price
                                                        )) + "원/인")]
                                                ], 2)
                                            ])
                                            : t._e()
                                    ]),
                                    t._v(" "),
                                    s("div", {
                                        staticClass: "facility_wrap"
                                    }, [
                                        e.cnvens
                                            ? s("ul", {
                                                staticClass: "facility_list"
                                            }, t._l(e.cnvens, function (e) {
                                                return s("li", [
                                                    s("i", {
                                                        staticClass: "sp_icon",
                                                        class: e.icon
                                                    }),
                                                    t._v(" "),
                                                    s("span", {
                                                        staticClass: "txt_name"
                                                    }, [
                                                        t._v(
                                                            "\n                      " + t._s(e.title1) + "\n                      "
                                                        ),
                                                        e.title2
                                                            ? s("em", {
                                                                staticClass: "br"
                                                            }, [t._v(t._s(e.title2))])
                                                            : t._e()
                                                    ])
                                                ])
                                            }), 0)
                                            : t._e()
                                    ]),
                                    t._v(" "),
                                    s("h2", {
                                        staticClass: "meetspace-heading"
                                    }, [t._v("예약선택")]),
                                    t._v(" "),
                                    s("div", {
                                        staticClass: "meetspace-radio"
                                    }, [t._l(t.sortProduct(e), function (a) {
                                            return s("div", {
                                                staticClass: "meetspace-radio-item"
                                            }, [
                                    s("input", {
                                                    directives: [
                                                        {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: e.selectedType,
                                                            expression: "product.selectedType"
                                                        }
                                                    ],
                                                    staticClass: "radio",
                                                    attrs: {
                                                        type: "radio",
                                                        id: a.id
                                                    },
                                                    domProps: {
                                                        value: a.RSV_TP_CD,
                                                        checked: t._q(e.selectedType, a.RSV_TP_CD)
                                                    },
                                                    on: {
                                                        change: [
                                                            function (s) {
                                                                return t.$set(e, "selectedType", a.RSV_TP_CD)
                                                            },
                                                            function (s) {
                                                                return t.selectProduct(e, a)
                                                            }
                                                        ]
                                                    }
                                                }),
                                                t._v(" "),
                                                "TIME" === a.RSV_TP_CD
                                                    ? s(
                                                    "label",
                                                    {
                                                        attrs: {
                                                                    for: a.id}
                                                        },
                                                        [t._v("시간 단위 예약하기(최소 " + t._s(e.info.min_time_policy) + "시간 부터)")]
                                                    )
                                                    : t._e(),
                                                    t._v(" "),
                                                    "PKG" === a.RSV_TP_CD
                                                        ? s("label", {
                                                        attrs: {
                                                                    for: a.id}
                                                        },
                                                        [t._v("패키지로 예약하기")]
                                                    )
                                                    : t._e()]
                                                )
                                }),
                                t._v(" "),
                                e.selectedType && t.selectedType && !t.isDateLoading
                                    ? s("div", {
                                        staticClass: "meetspace-option"
                                    }, [
                                    s("article", {
                                            staticClass: "box_form meetspace-calandar"
                                        }, [
                                        s("div", {
                                                staticClass: "heading"
                                            }, [
                                                s("h3", [t._v("날짜 선택")]),
                                                t._v(" "),
                                                t.selectedCalandar
                                                    ? s("span", {
                                                        staticClass: "option"
                                                    }, [s("em", [t._v(t._s(t.$moment("" + t.selectedCalandar.day.year + (
                                                                Number(t.selectedCalandar.day.month) < 10
                                                                    ? "0" + t.selectedCalandar.day.month
                                                                    : t.selectedCalandar.day.month
                                                            ) + (
                                                                Number(t.selectedCalandar.day.day) < 10
                                                                    ? "0" + t.selectedCalandar.day.day
                                                                    : t.selectedCalandar.day.day
                                                            )).format("YYYY.MM.DD (ddd)")))])])
                                                    : t._e()
                                            ]),
                                            t._v(" "),
                                            s("div", {
                                                staticClass: "reserve_calendar_wrap timely"
                                            }, [
                                            s("div", {
                                                    staticClass: "calendar_tit"
                                                }, [
                                                    s("a", {
                                                        staticClass: "btn_month_prev",
                                                        on: {
                                                            click: function (s) {
                                                                return t.getBeforeMonth(e, t.selectedType)
                                                            }
                                                        }
                                                    }, [s("span", {
                                                            staticClass: "sp_icon ico_month_prev"
                                                        }, [t._v("이전달")])]),
                                                    t._v(" "),
                                                    s("strong", [
                                                        s("em", [t._v(t._s(t.$moment(t.selectedType.calandar.date).format("YYYY")))]),
                                                        t._v(".\n                          "),
                                                        s("em", [t._v(t._s(t.$moment(t.selectedType.calandar.date).format("MM")))])
                                                    ]),
                                                    t._v(" "),
                                                    s("a", {
                                                        staticClass: "btn_month_next",
                                                        on: {
                                                            click: function (s) {
                                                                return t.getNextMonth(e, t.selectedType)
                                                            }
                                                        }
                                                    }, [s("span", {
                                                            staticClass: "sp_icon ico_month_next"
                                                        }, [t._v("다음달")])])
                                                ]),
                                                t._v(" "),
                                                s("div", {
                                                    staticClass: "calendar"
                                                }, [s("table", [
                                                    s("caption", {
                                                            staticClass: "blind"
                                                        }, [t._v("달력 테이블")]),
                                                        t._v(" "),
                                                        t._m(4, !0),
                                                        t._v(" "),
                                                        t._m(5, !0),
                                                        t._v(" "),
                                                        s("tbody", t._l(t.selectedType.calandar.days.length / 7, function (e) {
                                                            return s("tr", t._l(7, function (a) {
                                                                return s("td", {
                                                                    class
                                                                    :
                                                                    {
                                                                        disable: !t
                                                                            .selectedType
                                                                            .calandar
                                                                            .days[a - 1 + 7 * (e - 1)]
                                                                            .available,
                                                                        datepick: t.selectedCalandar && t
                                                                            .selectedType
                                                                            .calandar
                                                                            .days[a - 1 + 7 * (e - 1)]
                                                                            .month === t
                                                                            .selectedCalandar
                                                                            .day
                                                                            .month && t
                                                                            .selectedType
                                                                            .calandar
                                                                            .days[a - 1 + 7 * (e - 1)]
                                                                            .day === t.selectedCalandar.day.day,
                                                                        today: Number(t.selectedType.calandar.days[a - 1 + 7 * (e - 1)].month) === Number(
                                                                            t.$moment(t.currentDate).format("MM")
                                                                        ) && Number(t.selectedType.calandar.days[a - 1 + 7 * (e - 1)].day) === Number(
                                                                            t.$moment(t.currentDate).format("DD")
                                                                        )
                                                                    }
                                                                }, [s("a", {
                                                                        class
                                                                        :
                                                                        {
                                                                            calendar_holiday: "Y" === t
                                                                                .selectedType
                                                                                .calandar
                                                                                .days[a - 1 + 7 * (e - 1)]
                                                                                .hday
                                                                        },
                                                                    on: {
                                                                        click: function (s) {
                                                                            t.selectDate(t.selectedType, t.selectedType.calandar.days[a - 1 + 7 * (e - 1)])
                                                                        }
                                                                    }
                                                                }, [s("span", {
                                                                        staticClass: "date"
                                                                    }, [t._v(t._s(t.selectedType.calandar.days[a - 1 + 7 * (e - 1)].day))])])])
                                                        }), 0)
                                                    }), 0)
                                                ])])
                                        ]),
                                        t._v(" "),
                                        t._m(6, !0)
                                    ]),
                                    t._v(" "),
                                    s("article", {
                                        staticClass: "box_form"
                                    }, [
                                        "TIME" === t.selectedType.RSV_TP_CD && t.selectedCalandar && t
                                            .selectedCalandar
                                            .day
                                            .hasOwnProperty("times")
                                                ? s("div", {
                                                    staticClass: "heading"
                                                }, [
                                                    s("h3", [t._v("시간 선택")]),
                                                    t._v(" "),
                                                    "number" != typeof t.selectedTime.start || t.selectedTime.end
                                                        ? t._e()
                                                        : s("span", {
                                                            staticClass: "option"
                                                        }, [
                                                            s(
                                                                "em",
                                                                [t._v(t._s(t.selectedTime.start) + "시~" + t._s(t.selectedTime.start + 1) + "시")]
                                                            ),
                                                            t._v(",\n                        "),
                                                            s("em", [t._v("1시간")])
                                                        ]),
                                                    t._v(" "),
                                                    "number" == typeof t.selectedTime.start && t.selectedTime.end
                                                        ? s("span", {
                                                            staticClass: "option"
                                                        }, [
                                                            s(
                                                                "em",
                                                                [t._v(t._s(t.selectedTime.start) + "시~" + t._s(t.selectedTime.end) + "시")]
                                                            ),
                                                            t._v(",\n                        "),
                                                            s("em", [t._v(t._s(t.selectedTime.end - t.selectedTime.start) + "시간")])
                                                        ])
                                                        : t._e()
                                                ])
                                                : t._e(),
                                        t._v(" "),
                                        "TIME" === t.selectedType.RSV_TP_CD && t.selectedCalandar && t
                                            .selectedCalandar
                                            .day
                                            .hasOwnProperty("times")
                                                ? s("div", {
                                                    staticClass: "reserve_time_wrap"
                                                }, [s("div", {
                                                        directives: [
                                                            {
                                                                name: "swiper",
                                                                rawName: "v-swiper:mySwiper",
                                                                value: t.swiperOption,
                                                                expression: "swiperOption",
                                                                arg: "mySwiper"
                                                            }
                                                        ],
                                                        staticStyle: {
                                                            padding: "10"
                                                        }
                                                    }, [s("ul", {
                                                            staticClass: "swiper-wrapper time_list"
                                                        }, t._l(t.selectedCalandar.day.times, function (e) {
                                                            return s("li", {
                                                                staticClass: "swiper-slide",
                                                                class: {
                                                                    disable: !e.available,
                                                                    able: e.available,
                                                                    selected: t
                                                                        .selectedTime
                                                                        .selected
                                                                        .findIndex(function (t) {
                                                                            return t.hour === e.hour
                                                                        }) > -1
                                                                }
                                                            }, [
                                                                0 === e.hour
                                                                    ? s("span", {
                                                                        staticClass: "time time_half"
                                                                    }, [t._v("오전")])
                                                                    : t._e(),
                                                                t._v(" "),
                                                                12 === e.hour
                                                                    ? s("span", {
                                                                        staticClass: "time time_half"
                                                                    }, [t._v("오후")])
                                                                    : t._e(),
                                                                t._v(" "),
                                                                s("a", {
                                                                    staticClass: "time_box",
                                                                    on: {
                                                                        click: function (s) {
                                                                            return t.selectTime(e)
                                                                        }
                                                                    }
                                                                }, [
                                                                    s("span", {
                                                                        staticClass: "time"
                                                                    }, [t._v(t._s(e.hour))]),
                                                                    t._v(" "),
                                                                    s("span", {
                                                                        staticClass: "price"
                                                                    }, [t._v(t._s(t._f("toCurrency")(e.price)))])
                                                                ])
                                                            ])
                                                        }), 0)])])
                                                : t._e(),
                                        t._v(" "),
                                        "PKG" === t.selectedType.RSV_TP_CD && t.selectedCalandar && t
                                            .selectedCalandar
                                            .day
                                            .hasOwnProperty("packages")
                                                ? s("div", {
                                                    staticClass: "reserve_time_wrap meetspace-package"
                                                }, t._l(t.selectedCalandar.day.packages, function (e) {
                                                    return s("a", {
                                                        class
                                                        :
                                                        {
                                                            disable: !e.available,
                                                            today: e.available,
                                                            datepick: t
                                                                .selectedPkg
                                                                .findIndex(function (t) {
                                                                    return t.id === e.id
                                                                }) > -1
                                                        },
                                                        on: {
                                                            click: function (s) {
                                                                return t.selectPkg(e)
                                                            }
                                                        }
                                                    }, [
                                                        (e.name + "").includes("패키지1")
                                                            ? s("span", {
                                                                staticClass: "package-time"
                                                            }, [t._v(t._s(e.name))])
                                                            : s("span", {
                                                                staticClass: "package-time"
                                                            }, [t._v(t._s(e.name) + " " + t._s(e.shour) + "~" + t._s(e.ehour) + "시")]),
                                                        t._v(" "),
                                                        s("span", {
                                                            staticClass: "package-price"
                                                        }, [t._v(t._s(t._f("toCurrency")(e.price)))])
                                                    ])
                                                }), 0)
                                                : t._e(),
                                        t._v(" "),
                                        t.selectedCalandar
                                            ? s("div", {
                                                staticClass: "color_desc"
                                            }, [
                                                s("span", {
                                                    staticClass: "color_disable"
                                                }, [t._v("예약불가")]),
                                                t._v(" "),
                                                s("span", {
                                                    staticClass: "color_today"
                                                }, [t._v("가능")]),
                                                t._v(" "),
                                                s("span", {
                                                    staticClass: "color_select"
                                                }, [t._v("선택")])
                                            ])
                                            : t._e()
                                    ]),
                                    t._v(" "),
                                    t._m(7, !0),
                                    t._v(" "),
                                    t.selectedCalandar && (t.selectedTime.selected.length || t.selectedPkg.length)
                                        ? s("article", {
                                            staticClass: "meetspace-date"
                                        }, [s("div", {
                                                staticClass: "heading"
                                            }, [
                                                s("h3", [t._v("예약일시")]),
                                                t._v(" "),
                                                s(
                                                    "p",
                                                    [
                                                        t._v(
                                                            "\n                        " + t._s(t.$moment(
                                                                "" + t.selectedCalandar.day.year + (
                                                                    Number(t.selectedCalandar.day.month) < 10
                                                                        ? "0" + t.selectedCalandar.day.month
                                                                        : t.selectedCalandar.day.month
                                                                ) + (
                                                                    Number(t.selectedCalandar.day.day) < 10
                                                                        ? "0" + t.selectedCalandar.day.day
                                                                        : t.selectedCalandar.day.day
                                                                )
                                                            ).format("YYYY.MM.DD (ddd)")) + "\n                        "
                                                        ),
                                                        "TIME" === t.selectedProduct.selectedType
                                                            ? [t._v(
                                                                    t._s(t.selectedTime.start) + ":00~" + t._s(t.selectedTime.end) + ":00(" + t._s(t.selectedTime.end - t.selectedTime.start) +
                                                                "시간)"
                                                                )]
                                                            : t._e(),
                                                        t._v(" "),
                                                        "PKG" === t.selectedProduct.selectedType
                                                            ? [
                                                                t._v(
                                                                    "\n                          " + t._s(t.selectedPkg[0].shour) + ":00 ~ " + t._s(t.selectedPkg[0].ehour) +
                                                                    ":00(\n                          "
                                                                ),
                                                                t
                                                                    .selectedPkg[0]
                                                                    .ehour < t
                                                                    .selectedPkg[0]
                                                                    .shour
                                                                        ? [t._v(t._s(24 - t.selectedPkg[0].shour + t.selectedPkg[0].ehour))]
                                                                        : [t._v(t._s(t.selectedPkg[0].ehour - t.selectedPkg[0].shour))],
                                                                t._v("시간)\n                        ")
                                                            ]
                                                            : t._e()
                                                    ],
                                                    2
                                                )
                                            ])])
                                        : t._e(),
                                    t._v(" "),
                                    s("article", {
                                        staticClass: "box_form meetspace-count"
                                    }, [
                                        s("div", {
                                            staticClass: "heading"
                                        }, [
                                            s("h3", [t._v("총 예약인원")]),
                                            t._v(" "),
                                            s(
                                                "span",
                                                [
                                                    t._v(
                                                        "\n                        (최대 " + t._s(t.selectedProduct.info.max_guest_capacity) +
                                                        "명\n                        "
                                                    ),
                                                    t.selectedType.extra_person_price
                                                        ? [t._v(
                                                                ", " + t._s(t.selectedType.person_ceiling) + "명 초과시 " + t._s(t._f("toCurrency")(
                                                                    t.selectedType.extra_person_price
                                                                )) + "원/인"
                                                            )]
                                                        : t._e(),
                                                    t._v(")\n                      ")
                                                ],
                                                2
                                            )
                                        ]),
                                        t._v(" "),
                                        s("div", {
                                            staticClass: "box_setting"
                                        }, [
                                            s("span", {
                                                staticClass: "input"
                                            }, [s("input", {
                                                    directives: [
                                                        {
                                                            name: "model",
                                                            rawName: "v-model",
                                                            value: t.numberOfPeople,
                                                            expression: "numberOfPeople"
                                                        }
                                                    ],
                                                    staticClass: "number_set",
                                                    attrs: {
                                                        type: "tel"
                                                    },
                                                    domProps: {
                                                        value: t.numberOfPeople
                                                    },
                                                    on: {
                                                        change: function (s) {
                                                            return t.checkNumberOfPeople(e)
                                                        },
                                                        input: function (e) {
                                                            e.target.composing || (t.numberOfPeople = e.target.value)
                                                        }
                                                    }
                                                })]),
                                            t._v(" "),
                                            s("a", {
                                                staticClass: "btn_minus",
                                                on: {
                                                    click: function (s) {
                                                        return t.substractPeople(e)
                                                    }
                                                }
                                            }, [s("i", {
                                                    staticClass: "sp_icon ico_minus"
                                                }, [t._v("1빼기")])]),
                                            t._v(" "),
                                            s("a", {
                                                staticClass: "btn_plus",
                                                on: {
                                                    click: function (s) {
                                                        return t.addPeople(e)
                                                    }
                                                }
                                            }, [s("i", {
                                                    staticClass: "sp_icon ico_plus"
                                                }, [t._v("1더하기")])])
                                        ])
                                    ]),
                                    t._v(" "),
                                    t.selectedCalandar && (t.selectedTime.selected.length || t.selectedPkg.length)
                                        ? s("article", {
                                            staticClass: "box_form meetspace-receipt"
                                        }, [
                                            s("h3", [
                                                t._v("\n                      공간사용료\n                      "),
                                                s("span", [t._v("\\" + t._s(t._f("toCurrency")(t.reserveSpacePrice)))])
                                            ]),
                                            t._v(" "),
                                            t.extraPersonCharge
                                                ? s("h3", [
                                                    t._v(
                                                        "\n                      추가인원(" + t._s(t.numberOfPeople - t.selectedType.person_ceiling) +
                                                        "명)\n                      "
                                                    ),
                                                    s("span", [t._v("\\" + t._s(t._f("toCurrency")(t.extraPersonCharge)))])
                                                ])
                                                : t._e(),
                                            t._v(" "),
                                            t.reserveSpacePrice + t.extraPersonCharge
                                                ? s("h3", {
                                                    staticClass: "price"
                                                }, [t._v(
                                                        "\\" + t._s(t._f("toCurrency")(t.reserveSpacePrice + t.extraPersonCharge))
                                                    )])
                                                : t._e()
                                        ])
                                        : t._e()
                                ])
                                : t._e()], 2)])
                ])}
        ), 0)])]
), t._v(" "), s("div", {
    staticClass: "btn_order_area"
}, [
    s("a", {
        staticClass: "btn btn_default btn_call",
        on: {
            click: t.callToHost
        }
    }, [t._m(8)]),
    t._v(" "),
    "NOWPY" === t.dataset.info.RSV_MTH_CD
        ? s("a", {
            staticClass: "btn btn_default btn_reserve",
            on: {
                click: t.reserveSpace
            }
        }, [t._v("바로 예약하기")])
        : t._e(),
    t._v(" "),
    "NOWPY" !== t.dataset.info.RSV_MTH_CD
        ? s("a", {
            staticClass: "btn btn_default btn_reserve",
            on: {
                click: t.reserveSpace
            }
        }, [t._v("예약신청하기")])
        : t._e()
]), t._v(" "), s("div", {
    staticClass: "respond_area respond_area-mobile"
}, [
    "FIXPY" === t.dataset.info.RSV_MTH_CD
        ? s("div", {
            staticClass: "respond_infos"
        }, [
            s("p", {
                staticClass: "p_respond"
            }, [t._v("예약을 하시려면 호스트의 승인이 필요합니다. 승인 후에 온라인 결제가 가능합니다!")]),
            t._v(" "),
            t.dataset.host && t.dataset.host.avg_rsps_ss
                ? s("p", {
                    staticClass: "respond_data"
                }, [
                    s("strong", [t._v("평균 대기 시간")]),
                    t._v(" "),
                    s("strong", {
                        staticClass: "txt_primary"
                    }, [t._v(t._s(t.avgRspTime))])
                ])
                    : t._e()
        ])
        : t._e(),
    t._v(" "),
    "RVFIX" === t.dataset.info.RSV_MTH_CD
        ? s("div", {
            staticClass: "respond_infos"
        }, [t._m(9)])
        : t._e(),
    t._v(" "),
    "NOWPY" === t.dataset.info.RSV_MTH_CD
        ? s("div", {
            staticClass: "respond_infos"
        }, [s("p", {
                    staticClass: "p_respond"
            }, [t._v("호스트의 승인을 기다릴 필요 없이 지금 바로 예약하세요!")])])
        : t._e()
]), t._v(" "), t.dataset.side_banner.length > 0
    ? s("div", {
        staticClass: "banner_area"
    }, t._l(t.dataset.side_banner, function (e, a) {
        return s("div", {
            key: "side_banner_" + a
        }, [
            s("a", {
                staticClass: "type_short",
                attrs: {
                    href: e.link,
                    target: "_blank"
                }
            }, [s("img", {
                    attrs: {
                        src: e.image_url,
                        alt: "배너"
                    }
                })]),
            t._v(" "),
            s("div", {
                staticStyle: {
                    width: "1px",
                    height: "5px"
                }
            }),
            t._v(" "),
            s("a", {
                staticClass: "type_long",
                attrs: {
                    href: e.link,
                    target: "_blank"
                }
            }, [s("img", {
                    attrs: {
                        src: e.image_url,
                        alt: "배너"
                    }
                })])
        ])
    }), 0)
    : t._e()
]
), t._v(" "), t.isMobile
? t._e()
: s("CouponButton", {
attrs: {
    dataset: t.dataset
}
}),
t._v(" "),
t.showPhotoViewer
? s("photo-viewer", {
attrs: {
    modalStatus: t.showPhotoViewer,
    imageList: t.activeImageList,
    space: t.dataset.info.name
},
on: {
    "update:modalStatus": function (e) {
        t.showPhotoViewer = e
    },
    "update:modal-status": function (e) {
        t.showPhotoViewer = e
    }
}
})
: t._e(),
t._v(" "),
s("notice-modal", {
attrs: {
modalStatus: t.noticeModal.isShow,
title: t.noticeModal.title,
msg: t.noticeModal.msg,
isDimmed: t.noticeModal.isDimmed,
isLoading: t.noticeModal.isLoading
},
on: {
"update:modalStatus": function (e) {
    return t.$set(t.noticeModal, "isShow", e)
},
"update:modal-status": function (e) {
    return t.$set(t.noticeModal, "isShow", e)
}
}
}),
t._v(" "),
s("Loading", {
attrs: {
modalStatus: t.loading.isShow,
msg: t.loading.msg
},
on: {
"update:modalStatus": function (e) {
    return t.$set(t.loading, "isShow", e)
},
"update:modal-status": function (e) {
    return t.$set(t.loading, "isShow", e)
}
}
})
],
1
)},
[
function () {
var t = this.$createElement,
e = this._self._c || t;
return e("div", {
staticClass: "heading"
}, [e("h3", [this._v("세부공간 선택")])])
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"p",
{
staticClass: "p_respond"
},
[this._v("\n            예약을 하시려면 호스트의 승인이 필요합니다.\n            "), e("br"), this._v("승인 후에 온라인 결제가 가능합니다!\n          ")]
)
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"p",
{
staticClass: "p_respond"
},
[this._v("\n            예약을 하시려면 호스트의 승인이 필요합니다.\n            "), e("br"), this._v("승인 후에 호스트가 결제방법을 안내드립니다!\n          ")]
)
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"p",
{
staticClass: "p_respond"
},
[this._v("\n            호스트의 승인을 기다릴 필요 없이\n            "), e("br"), this._v("지금 바로 예약하세요!\n          ")]
)
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e("colgroup", [e("col", {
staticStyle: {
width: "auto"
},
attrs: {
span: "7"
}
})])
},
function () {
var t = this,
e = t.$createElement,
s = t._self._c || e;
return s("thead", [s("tr", [
s("th", [t._v("SUN")]),
t._v(" "),
s("th", [t._v("MON")]),
t._v(" "),
s("th", [t._v("TUE")]),
t._v(" "),
s("th", [t._v("WED")]),
t._v(" "),
s("th", [t._v("THU")]),
t._v(" "),
s("th", [t._v("FRI")]),
t._v(" "),
s("th", [t._v("SAT")])
])])
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e("div", {
staticClass: "color_desc"
}, [
e("span", {
staticClass: "color_disable"
}, [this._v("예약불가")]),
this._v(" "),
e("span", {
staticClass: "color_today"
}, [this._v("오늘")]),
this._v(" "),
e("span", {
staticClass: "color_select"
}, [this._v("선택")])
])
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e("p", {
staticClass: "p_guide warn",
staticStyle: {
display: "block"
}
}, [
e("i", {staticClass: "sp_icon ico_alert"}),
this._v(
"예약 도중 이탈하시는 경우(결제 오류 및 취소 등), 중복 예약 방지 목적으로 10분 동안 해당 날짜에 예약하실 수 없습니다.\n      " +
"            "
)
])
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e("span", {
staticClass: "txt_call"
}, [
e("i", {staticClass: "sp_icon ico_call_light"}),
this._v("전화\n        ")
])
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"p",
{
staticClass: "p_respond"
},
[this._v("\n          예약을 하시려면 호스트의 승인이 필요합니다.\n          "), e("br"), this._v("승인 후에 호스트가 결제방법을 안내드립니다!\n        ")]
)
}
],
!1,
null,
null,
null
).exports, C = {
props: [
"dataset", "modalStatus", "isPreview"
],
components: {
CouponButton: m
},
data: function () {
return {
showFirstPolicy: !0,
activeTabIndex: 0,
isOpened: !1,
avgRspTime: ""
}
},
computed: Object(i.a)({}, Object(n.b)({
isMobile: function (t) {
return t.isMobile
}
}), {
authenticated: function () {
return this.$store.state.authenticated
},
userInfo: function () {
return this.$store.state.user
}
}),
methods: {
calcAvgRspTime: function () {
if (this.dataset.host && this.dataset.host.avg_rsps_ss) {
var t = parseInt(this.dataset.host.avg_rsps_ss, 10),
e = Math.floor(t / 3600),
s = Math.floor((t - 3600 * e) / 60);
this.avgRspTime = e
? ""
.concat(e, "시간 ")
.concat(s, "분")
: "".concat(s, "분")
}
},
callToHost: function () {
document.querySelector(".pc")
? (this.$emit("update:modalStatus", !0), fbq("trackCustom", "Call"))
: window.location.href = "tel://".concat(this.dataset.corp.phone)
},
reserveSpace: function () {
if (!this.isPreview) 
return localStorage.setItem("spaceInfo", JSON.stringify(this.dataset)),
this.authenticated
? void(
!this.authenticated || "email" !== this.userInfo.register_type || this.userInfo.phone
    ? this.$router.push("/reserve/workspace/".concat(this.dataset.info.id))
    : this.$router.push("/auth/verify/phone")
)
: (
localStorage.setItem("fromUrl", "/reserve/workspace/".concat(this.dataset.info.id)),
void this.$router.push("/auth/login")
);
this.activeNoti("요청하신 URL에 대한 접근 권한이 없습니다.")
}
},
mounted: function () {
this.calcAvgRspTime()
}
}, b = Object(u.a)(C, function () {
var t = this,
e = t.$createElement,
s = t._self._c || e;
return s("div", {
staticClass: "ly_right_wrap"
}, [
s("div", {
staticClass: "ly_right_fixed"
}, [
s("div", {
staticClass: "info_reservation"
}, [
"FIXPY" === t.dataset.info.RSV_MTH_CD || "RVFIX" === t.dataset.info.RSV_MTH_CD
? s("p", {
staticClass: "info_text"
}, [
t._v("\n        예약을 하시려면 호스트의 승인이 필요합니다.\n        "),
s("br"),
t._v("승인 후에 온라인 결제가 가능합니다!\n        "),
t._m(0),
t._v(" "),
t.dataset.host && t.dataset.host.avg_rsps_ss
    ? s("strong", [
        t._v("\n          평균 응답시간\n          "),
        s("em", [t._v(t._s(t.avgRspTime))])
    ])
    : t._e()
])
: t._e(),
t._v(" "),
"NOWPY" === t.dataset.info.RSV_MTH_CD
? s("p", {
staticClass: "info_text"
}, [
t._v("\n        호스트의 승인을 기다릴 필요 없이\n        "),
s("br"),
t._v("지금 바로 예약하세요!\n        "),
t._m(1),
t._v(" "),
t.dataset.host && t.dataset.host.avg_rsps_ss
    ? s("strong", [
        t._v("\n          평균 응답시간\n          "),
        s("em", [t._v(t._s(t.avgRspTime))])
    ])
    : t._e()
])
: t._e(),
t._v(" "),
s("ul", {
staticClass: "info_price_list"
}, [
t._l(t.dataset.products, function (e) {
return s("li", [
    s("span", {
        staticClass: "txt_sign"
    }, [t._v("\\")]),
    t._v(" "),
    s("strong", {
        staticClass: "txt_price"
    }, [
        t._v(
            "\n            " + t._s(t._f("toCurrency")(e.info.price)) + "\n            "
        ),
        "DAY" === e.info.RSV_TP_CD
            ? s("span", {
                staticClass: "txt_unit"
            }, [t._v("/1일")])
            : t._e(),
        t._v(" "),
        "MONTH" === e.info.RSV_TP_CD
            ? s("span", {
                staticClass: "txt_unit"
            }, [t._v("/1개월")])
            : t._e()
    ])
])
}),
t._v(" "),
s("li", {
staticClass: "txt_vat"
}, [t._v("(VAT포함가)")])
], 2),
t._v(" "),
s("div", {
staticClass: "policy_wrap",
class: {
opened: t.isOpened
}
}, [
s("ul", {
staticClass: "category_tab_list",
attrs: {
role: "tablist"
}
}, t._l(t.dataset.products, function (e, a) {
return s("li", {
staticClass: "category_tab",
attrs: {
    role: "tab",
    "aria-selected": t.activeTabIndex === a
}
}, [
"DAY" === e.info.RSV_TP_CD
    ? s("a", {
        staticClass: "category_tab_link",
        on: {
            click: function (e) {
                t.activeTabIndex = a
            }
        }
    }, [t._v("일단위 가격 정책")])
    : t._e(),
t._v(" "),
"MONTH" === e.info.RSV_TP_CD
    ? s("a", {
        staticClass: "category_tab_link",
        on: {
            click: function (e) {
                t.activeTabIndex = a
            }
        }
    }, [t._v("1개월 가격 정책")])
    : t._e()
])
}), 0),
t._v(" "),
s("div", {
staticClass: "text_box scroll"
}, t._l(t.dataset.products, function (e, a) {
return s("p", {
staticClass: "policy_detail",
class: {
    on: t.activeTabIndex === a
}
}, [t._v(t._s(e.info.price_policy))])
}), 0)
]),
t._v(" "),
t.isOpened
? t._e()
: s("a", {
staticClass: "btn_more",
on: {
click: function (e) {
t.isOpened = !t.isOpened
}
}
}, [
t._v("\n        가격 정책 자세히 보기\n        "),
s("i", {staticClass: "sp_icon ico_more_down"})
]),
t._v(" "),
t.isOpened
? s("a", {
staticClass: "btn_more",
on: {
click: function (e) {
t.isOpened = !t.isOpened
}
}
}, [
t._v("\n        접기\n        "),
s("i", {staticClass: "sp_icon ico_more_up"})
])
: t._e()
]),
t._v(" "),
s("div", {
staticClass: "btn_order_area"
}, [
s("a", {
staticClass: "btn btn_default btn_call",
on: {
click: t.callToHost
}
}, [t._m(2)]),
t._v(" "),
s("a", {
staticClass: "btn btn_default btn_reserve",
on: {
click: t.reserveSpace
}
}, [t._v("예약신청하기")])
]),
t._v(" "),
"FIXPY" === t.dataset.info.RSV_MTH_CD
? s("div", {
staticClass: "respond_area"
}, [s("div", {
staticClass: "respond_infos"
}, [
s("p", {
staticClass: "p_respond"
}, [t._v("예약을 하시려면 호스트의 승인이 필요합니다. 승인 후에 온라인 결제가 가능합니다!")]),
t._v(" "),
t.dataset.host && t.dataset.host.avg_rsps_ss
? s("p", {
staticClass: "respond_data"
}, [
s("strong", [t._v("평균 대기 시간")]),
t._v(" "),
s("strong", {
    staticClass: "txt_primary"
}, [t._v(t._s(t.avgRspTime))])
])
: t._e()
])])
: t._e(),
t._v(" "),
"RVFIX" === t.dataset.info.RSV_MTH_CD
? s("div", {
staticClass: "respond_infos"
}, [t._m(3)])
: t._e(),
t._v(" "),
"NOWPY" === t.dataset.info.RSV_MTH_CD
? s("div", {
staticClass: "respond_area"
}, [t._m(4)])
: t._e(),
t._v(" "),
t.dataset.side_banner.length > 0
? s("div", {
staticClass: "banner_area"
}, t._l(t.dataset.side_banner, function (e, a) {
return s("div", {
key: "side_banner_" + a
}, [
s("a", {
staticClass: "type_short",
attrs: {
href: e.link,
target: "_blank"
}
}, [s("img", {
attrs: {
    src: e.image_url,
    alt: "배너"
}
})]),
t._v(" "),
s("div", {
staticStyle: {
width: "1px",
height: "5px"
}
}),
t._v(" "),
s("a", {
staticClass: "type_long",
attrs: {
href: e.link,
target: "_blank"
}
}, [s("img", {
attrs: {
    src: e.image_url,
    alt: "배너"
}
})])
])
}), 0)
: t._e()
]),
t._v(" "),
t.isMobile
? t._e()
: s("CouponButton", {
attrs: {
dataset: t.dataset
}
})
], 1)
}, [
function () {
var t = this.$createElement,
e = this._self._c || t;
return e("span", {
staticClass: "info_npay"
}, [
e("span", {
staticClass: "sp_icon ico_npay_detail"
}, [this._v("네이버페이")]),
this._v("만 가능\n        ")
])
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e("span", {
staticClass: "info_npay"
}, [
e("span", {
staticClass: "sp_icon ico_npay_detail"
}, [this._v("네이버페이")]),
this._v("만 가능\n        ")
])
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e("span", {
staticClass: "txt_call"
}, [
e("i", {staticClass: "sp_icon ico_call_light"}),
this._v("전화\n        ")
])
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"p",
{
staticClass: "p_respond"
},
[this._v("\n        예약을 하시려면 호스트의 승인이 필요합니다.\n        "), e("br"), this._v("승인 후에 호스트가 결제방법을 안내드립니다!\n      ")]
)
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e("div", {
staticClass: "respond_infos"
}, [e("p", {
staticClass: "p_respond"
}, [this._v("호스트의 승인을 기다릴 필요 없이 지금 바로 예약하세요!")])])
}
], !1, null, null, null).exports, w = {
props: ["dataset"],
data: function () {
return {
seatType: "",
isOpened: !1
}
},
computed: {
seatTypeCodes: function () {
return this
.$store
.state
.commonCodes
.filter(function (t) {
return "SEATP" === t.cate
})[0]
},
cnvenCodes: function () {
return this
.$store
.state
.commonCodes
.filter(function (t) {
return "CONV" === t.cate
})[0]
},
activeCnvenList: function () {
return this
.dataset
.products[0]
.cnvens
.filter(function (t) {
return !t.disabled
})
},
dateCodes: function () {
return this
.$store
.state
.commonCodes
.filter(function (t) {
return "DATE" === t.cate
})[0]
}
},
methods: {
setSeatType: function () {
var t = this;
this
.seatTypeCodes
.values
.forEach(function (e) {
e.key === t.dataset.SEAT_TP_CD && (t.seatType = e.name)
})
},
setCnvenCodes: function () {
var t = this;
this
.dataset
.products[0]
.cnvens
.forEach(function (e) {
var s = t
.cnvenCodes
.values
.find(function (t) {
return e.CNVEN_FCTS_CD === t.key
});
s && (e.title = s.name, e.icon = s.ETC_ITM1, e.showHelp = !1, e.display = !1)
}),
this.closeCnvenList()
},
openCnvenList: function () {
this
.activeCnvenList
.forEach(function (t, e) {
t.display = !0
}),
this.isOpened = !0
},
closeCnvenList: function () {
this
.activeCnvenList
.forEach(function (t, e) {
t.display = e < 4
}),
this.isOpened = !1
}
},
created: function () {
this.setSeatType(),
this.setCnvenCodes()
}
}, y = (s(496), Object(u.a)(w, function () {
var t = this,
e = t.$createElement,
s = t._self._c || e;
return s("div", {
staticClass: "workspace"
}, [
s("div", {
staticClass: "text_box",
attrs: {
id: "s_intro"
}
}, [
s("h4", {
staticClass: "h_intro"
}, [t._v("공간 소개")]),
t._v(" "),
s("p", {
staticClass: "p_intro",
domProps: {
innerHTML: t._s(t.dataset.info.desc)
}
})
]),
t._v(" "),
s("div", {
staticClass: "text_box info_addition",
attrs: {
id: "s_info"
}
}, [
s("h4", {
staticClass: "h_intro"
}, [t._v("추가 정보")]),
t._v(" "),
s("ul", {
staticClass: "info_list"
}, [
t.seatType
? s("li", {
staticClass: "info_item"
}, [
s("span", {
staticClass: "tit"
}, [t._v("좌석유형")]),
t._v(" "),
s("span", {
staticClass: "data"
}, [t._v(t._s(t.seatType))])
])
: t._e(),
t._v(" "),
t.dataset.space_size
? s("li", {
staticClass: "info_item"
}, [
s("span", {
staticClass: "tit"
}, [t._v("사이즈")]),
t._v(" "),
s("span", {
staticClass: "data"
}, [t._v(t._s(t.dataset.space_size) + "㎥")])
])
: t._e(),
t._v(" "),
s("li", {
staticClass: "info_item"
}, [
s("span", {
staticClass: "tit"
}, [t._v("재고")]),
t._v(" "),
t.dataset.seat_cnt
? s("span", {
staticClass: "data"
}, [t._v(t._s(t.dataset.seat_cnt) + "개")])
: t._e()
]),
t._v(" "),
s("li", {
staticClass: "info_item"
}, [
s("span", {
staticClass: "tit"
}, [t._v("수용인원")]),
t._v(" "),
s("span", {
staticClass: "data"
}, [t._v(
t._s(t.dataset.products[0].info.min_guest_policy) + "명 ~ " + t._s(t.dataset.products[0].info.max_guest_capacity) +
"명"
)])
])
])
]),
t._v(" "),
s("div", {
staticClass: "text_box info_time",
attrs: {
id: "s_caution"
}
}, [
s("h4", {
staticClass: "h_intro"
}, [t._v("운영시간")]),
t._v(" "),
s("ul", {
staticClass: "info_list"
}, t._l(t.dataset.operation_times, function (e) {
return s("li", {
staticClass: "info_item"
}, [
s("span", {
staticClass: "tit"
}, [t._v(t._s(t.dateCodes.values.filter(function (t) {
return t.key === e.DAYW_CD
})[0].ETC_ITM1))]),
t._v(" "),
"Y" !== e.break
? s("span", {
staticClass: "data"
}, [t._v(t._s(e.start_time) + " ~ " + t._s(e.end_time))])
: t._e(),
t._v(" "),
"Y" === e.break
? s("span", {
staticClass: "data"
}, [t._v("휴무일")])
: t._e()
])
}), 0),
t._v(" "),
s("div", {
staticClass: "info_notice"
}, [
s("strong", {
staticClass: "title"
}, [t._v("* 추가 안내")]),
t._v(" "),
s("ol", {
staticClass: "info_list"
}, t._l(t.dataset.cautions, function (e, a) {
return s("li", [
s("strong", {
staticClass: "tit"
}, [t._v(t._s(a + 1))]),
t._v(" "),
s("span", {
staticClass: "data"
}, [t._v(t._s(e.content))])
])
}), 0)
])
]),
t._v(" "),
t
.dataset
.products[0]
.cnvens
.length
? s("div", {
staticClass: "text_box info_facility",
attrs: {
id: "s_refund"
}
}, [
s("h4", {
staticClass: "h_intro"
}, [t._v("편의시설")]),
t._v(" "),
s("ul", {
staticClass: "info_list",
class: {
opened: t.isOpened
}
}, t._l(t.dataset.products[0].cnvens, function (e) {
return s("li", {
staticClass: "info_item",
class: {
disabled: e.disabled || !e.display,
charged: "Y" === e.pay
}
}, [
s("i", {
staticClass: "sp_icon",
class: e.icon
}),
t._v(" "),
s("div", {
staticClass: "flex_box"
}, [
e.disabled || "Y" !== e.pay
? t._e()
: s("div", {
    staticClass: "flex badge_charged"
}, [s("span", {
        staticClass: "badge"
    }, [t._v("유료")])]),
t._v(" "),
s("div", {
staticClass: "flex"
}, [s("span", {
    staticClass: "text"
}, [t._v(t._s(e.title))])]),
t._v(" "),
s("div", {
staticClass: "flex"
}, [
!e.disabled && e.desc && e.showHelp
    ? s("span", {
        staticClass: "help"
    }, [
        s("a", {
            staticClass: "sp_icon ico_help",
            on: {
                mouseover: function (t) {
                    e.showHelp = !0
                },
                mouseleave: function (t) {
                    e.showHelp = !1
                }
            }
        }, [t._v("도움말")]),
        t._v(" "),
        s("span", {
            staticClass: "help_message"
        }, [t._v(t._s(e.desc))])
    ])
    : t._e()
])
])
])
}), 0),
t._v(" "),
t.isOpened
? t._e()
: s("a", {
staticClass: "btn_more _btn_facility",
on: {
click: function (e) {
return t.openCnvenList()
}
}
}, [
t._v("\n      더보기\n      "),
s("i", {staticClass: "sp_icon ico_more_down"}),
t._v(" "),
t.activeCnvenList.length - 4 > 0
? s("em", {
staticClass: "number"
}, [t._v("+" + t._s(t.activeCnvenList.length - 4))])
: t._e()
]),
t._v(" "),
t.isOpened
? s("a", {
staticClass: "btn_more _btn_facility",
on: {
click: function (e) {
return t.closeCnvenList()
}
}
}, [
t._v("\n      접기\n      "),
s("i", {staticClass: "sp_icon ico_more_up"})
])
: t._e()
])
: t._e()
]) }, [], !1, null, null, null).exports), x = {
props: [
"questions",
"page",
"type",
"question",
"spaceId",
"modalStatus"
],
data: function () {
return {userId: ""}
},
computed: {},
methods: {
getData: function (t) {
this.$emit("getData", t)
},
getQuestions: function (t) {
this.$emit("getData", t)
},
askQuestion: function () {
this
.$store
.commit("FETCH_USER_INFO"),
this.$store.state.authenticated
? (this.$emit("update:type", "new"), this.$emit("update:modalStatus", !0))
: (
localStorage.setItem("fromUrl", this.$route.path),
this.$router.push("/auth/login")
)
},
modifyQuestion: function (t) {
this.$emit("update:type", "edit"),
this.$emit("update:question", t),
this.$emit("update:modalStatus", !0)
},
deleteQuestion: function (t) {
this.$emit("update:type", "delete"),
this.$emit("update:question", t),
this.$emit("update:modalStatus", !0)
}
},
mounted: function () {
var t = JSON.parse(localStorage.getItem("user"));
t && (this.userId = t.id)
} }, k = Object(u.a)(x, function () {
var t = this,
e = t.$createElement,
a = t._self._c || e;
return a("div", [
a("div", {
staticClass: "text_box msimple",
attrs: {
id: "s_qna"
}
}, [
a("h4", {
staticClass: "h_intro"
}, [
t._v("\n      Q&A\n      "),
a("strong", {
staticClass: "txt_primary"
}, [
a("em", [t._v(t._s(t.page.total))]),
t._v("개\n      ")
])
]),
t._v(" "),
a("a", {
staticClass: "btn_qna_write",
on: {
click: t.askQuestion
}
}, [
a("span", {staticClass: "sp_icon icon_write"}),
t._v(" "),
a("span", [t._v("질문 작성하기")])
])
]),
t._v(" "),
a("div", {
staticClass: "review_box",
class: {
no_data: !t.questions.length
}
}, [
t.questions.length
? a("ul", {
staticClass: "review_list"
}, t._l(t.questions, function (e) {
return "N" === e.deleted_by_admin
? a("li", {
staticClass: "rlist",
class: {
del_review: "Y" === e.deleted || e
.comments
.filter(function (t) {
return "Y" === t.deleted
})
.length
}
}, [
a("div", {
staticClass: "rbox_mine"
}, [
"N" !== e.deleted || e.writer.image_url
? t._e()
: a("span", {
staticClass: "pf_img",
style: {
backgroundImage: "url(" + s(112) + ")"
}
}),
t._v(" "),
"N" === e.deleted && e.writer.image_url
? a("span", {
staticClass: "pf_img",
style: {
backgroundImage: "url(" + e.writer.image_url + ")"
}
})
: t._e(),
t._v(" "),
e.writer
? a("strong", {
staticClass: "guest_name"
}, [t._v(t._s(e.writer.name))])
: t._e(),
t._v(" "),
"N" === e.deleted
? a("p", {
staticClass: "p_review"
}, [t._v(t._s(e.content))])
: t._e(),
t._v(" "),
"Y" === e.deleted
? a("p", {
staticClass: "p_review"
}, [t._v("게스트에 의해 삭제된 문의입니다.")])
: t._e(),
t._v(" "),
a("div", {
staticClass: "rbox_info_base"
}, [
e.created_at
? a("span", {
staticClass: "time_info"
}, [t._v(
    "\n              " + t._s(t.$moment(e.created_at).format("YYYY.MM.DD HH:mm:ss")) +
    "\n              "
)])
: t._e(),
t._v(" "),
"Y" !== e.deleted && t.userId && e.writer && e.writer.id === t.userId
? a("span", {
staticClass: "edt_area"
}, [
a("a", {
    staticClass: "edt",
    on: {
        click: function (s) {
            return t.modifyQuestion(e)
        }
    }
}, [t._v("수정")]),
t._v(" "),
a("a", {
    staticClass: "del",
    on: {
        click: function (s) {
            return t.deleteQuestion(e)
        }
    }
}, [t._v("삭제")])
])
: t._e()
])
]),
t._v(" "),
t._l(e.comments.slice(0, 1), function (s) {
return e.comments.length
? a("div", {
staticClass: "rbox_reply"
}, [
t._m(0, !0),
t._v(" "),
"N" === s.deleted
? a("p", {
    staticClass: "p_review"
}, [t._v(t._s(t._f("entities")(s.content)))])
: t._e(),
t._v(" "),
"Y" === s.deleted
? a("p", {
    staticClass: "p_review"
}, [t._v("\n            삭제된 답글입니다.\n            ")])
: t._e(),
t._v(" "),
a("div", {
staticClass: "rbox_info_base"
}, [
s.created_at
    ? a("p", {
        staticClass: "time_info"
    }, [t._v(
            "\n              " + t._s(t.$moment(s.created_at).format("YYYY.MM.DD HH:mm:ss")) +
        "\n              "
        )])
    : t._e()
])
])
: t._e()
})
], 2)
: t._e()
}), 0)
: t._e(),
t._v(" "),
t.questions.length
? a("div", {
staticClass: "paging"
}, [ a("a", {
staticClass: "btn_prev_list_end",
class: {
active: t.page.current - 5 > 0
},
on: {
click: function (e) {
return t.getQuestions(t.page.current - 5)
}
}
}, [a("i", {
staticClass: "sp_icon ico_prev_list"
}, [t._v("이전목록 5개로 이동")])]),
t._v(" "),
a("a", {
staticClass: "btn_prev_list",
class: {
active: t.page.current - 1 > 0
},
on: {
click: function (e) {
return t.getQuestions(t.page.current - 1)
}
}
}, [a("i", {
staticClass: "sp_icon ico_prev_list"
}, [t._v("이전페이지로 이동")])]),
t._v(" "),
t._l(5, function (e) {
return e + 5 * parseInt((t.page.current - 1) / 5) <= t.page.pages
? a("a", {
staticClass: "num",
class: {
active: e + 5 * parseInt((t.page.current - 1) / 5) === t.page.current
},
on: {
click: function (s) {
t.getQuestions(e + 5 * parseInt((t.page.current - 1) / 5))
}
}
}, [t._v(t._s(e + 5 * parseInt((t.page.current - 1) / 5)))])
: t._e()
}),
t._v(" "),
a("a", {
staticClass: "btn_next_list",
class: {
active: t.page.current + 1 <= t.page.pages
},
on: {
click: function (e) {
return t.getQuestions(t.page.current + 1)
}
}
}, [a("i", {
staticClass: "sp_icon ico_next_list"
}, [t._v("다음 페이지로 이동")])]),
t._v(" "),
a("a", {
staticClass: "btn_next_list_end",
class: {
active: t.page.current + 5 <= t.page.pages
},
on: {
click: function (e) {
return t.getQuestions(t.page.current + 5)
}
} }, [a("i", {
staticClass: "sp_icon ico_next_list"
}, [t._v("다음목록 5개로 이동")])])
], 2)
: t._e(),
t._v(" "),
t.questions.length
? t._e()
: a( "div", { staticClass: "center_wrap"
}, [t._m(1)])
])
])
}, [
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"p",
{
staticClass: "p_tit_reply"
},
[
e(
"em", [this._v("호스트")]),
this._v(
"의 답글\n          ")
]
)
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"div",
{
staticClass: "center txt_result"
},
[e(
"p", {
staticClass: "p_result"
}, [this._v("등록된 질문이 아직 없습니다.")])]
)
}
], !1, null, null, null).exports, T = s(
454), S = s(
400), M = s(
455), P = s(
456), I = s(
450), E = s(
421), O = s(
107), $ = {
head: function () {
var t = this.detail;
return {
meta: [
{ property: "og:title", content: t
? "".concat(t.info.name, " - 스페이스클라우드")
: "스페이스클라우드"
}, { property: "og:type", content: "article"
}, { property: "og:description", content: t
? ""
.concat(t.tags.map(function (t) {
return "#".concat(t.tag)
}).join(" "), " - ")
.concat(t.info.sub_title)
: "스페이스클라우드"
}, { property: "og:image", content: t.info.image_url
}, { property: "og:image:width", content: "600"
}, { property: "og:image:height", content: "315"
}, { property: "og:url", content: "https://spacecloud.kr/".concat(
this.$route.path)
}, { property: "og:article:author", content: "스페이스클라우드(SpaceCloud)"
}
],
script: []
}
},
components: {
productMeet: g,
productWork: b,
workingSpace: y,
qnaComponent: k,
reviewsComponent: T.a,
card: S.a,
spaceMap: M.a,
callModal: P.a,
questionModal: I.a,
shareModal: E.a,
notification: O.a,
photoViewer: d.a,
CouponButton: m
},
data: function () {
return {
deviceWidth: "",
isReadyImgSlider: !1,
isLoading: !0,
notiMsg: "",
showNoti: !1,
showShareModal: !1,
showCallModal: !1,
showQuestionModal: !1,
showPhotoViewer: !1,
photoViewerIdx: 0,
detail: "",
spaceType: "",
swiperOption: {
effect: "fade",
slidesPerView: "auto",
centeredSlides: !0,
autoplay: { delay: 5e3
},
navigation: { nextEl: ".main__banner--next", prevEl: ".main__banner--prev", disabledClass: "disabled"
}
},
showBreakInfo: !1,
wishlisted: !1,
qna: "",
qnaType: "new",
currentQuestion: "",
isPreview: "",
isSelected: {
active: !1,
s_intro: !1,
s_info: !1,
s_caution: !1,
s_refund: !1,
s_review: !1,
s_qna: !1
}
}
},
computed: Object(
i.a)(
{},
Object(n.b)(
{
isMobile: function (t) {
return t.isMobile
}
}),
{
breakeCodes: function () {
return this
.$store
.state
.commonCodes
.filter( function (t) { return "HOLTP" === t.cate
})[0]
},
dateCodes: function () {
return this
.$store
.state
.commonCodes
.filter( function (t) { return "DATE" === t.cate
})[0]
},
refundCodes: function () {
return this
.$store
.state
.commonCodes
.filter( function (t) { return "RTPLY" === t.cate
})[0]
},
navbarPosition: function () {
return document
.querySelector(
".nav_wrapper")
.getBoundingClientRect()
.top + window.pageYOffset
}
}
),
methods: {
activeShareModal: function () {
this.showShareModal = !0
},
activeNoti: function (
t) {
var e = this;
this.notiMsg = t,
this.showNoti = !0,
setTimeout(
function () {
e.showNoti = !1
}, 1500)
},
closeModal: function () {
this.showCallModal = !1,
this.showQuestionModal = !1
},
setBreakInfoCodes: function () {
var t = this;
this
.detail
.break_days
.forEach( function (e) { e.breakeCodes = t
.breakeCodes
.values
.find(function (t) {
return t.key === e.BRK_DAY_TP_CD
}), e.breakeDay = t
.dateCodes
.values
.find(function (t) {
return t.key === e.DAYW_CD
})
}),
this.showBreakInfo = !0
},
onScroll: function () {
var t = window.scrollY,
e = document.querySelector( ".header"),
s = document.querySelector( ".nav_wrapper"),
a = this.navbarPosition - e.offsetHeight,
i = window.scrollY + window.innerHeight;
this.autoSelect(),
i < a && this.selected(),
t > a
? s .classList .contains(
"fixed") || s .classList .add("fixed")
: s .classList .contains("fixed") && s .classList .remove(
"fixed")
},
autoSelect: function () {
var t = window.scrollY,
e = document.querySelectorAll( ".text_box");
for (
var s in e) {
var a = e[s].id;
a && ( e[s].offsetTop + e[s].childNodes[0].offsetHeight <= t && this.selected(a))
}
},
goToTop: function () {
document.body.scrollTop = 0,
document
.documentElement
.scrollTo( {top: 0, behavior: "smooth"})
},
callToHost: function () {
document.querySelector(
".pc")
? ( this.showCallModal = !0, fbq("trackCustom", "Call"))
: window.location.href = "tel://".concat( this.detail.corp.phone)
},
getZzimInfo: function () {
var t = Object(
a.a)(
regeneratorRuntime.mark(function t() {
var e, s;
return regeneratorRuntime.wrap( function (t) { for (
;
;) 
switch (t.prev = t.next) {
case 0:
if (t.prev = 0, !(e = JSON.parse(localStorage.getItem("user")))) {
t.next = 7;
break
}
return t.next = 5,
this.$axios({
method: "get",
headers: {
Authorization: e.token
},
url: "/spaces/".concat(this.$route.params.spaceId, "/user_wishlisted")
});
case 5:
s = t.sent,
this.wishlisted = s.data.wishlisted;
case 7:
t.next = 11;
break;
case 9:
t.prev = 9,
t.t0 = t.catch(0);
case 11:
case "end":
return t.stop()
} }, t, this, [ [0, 9]
])
}));
return function () {
return t.apply( this, arguments)
}
}(),
addZzimSpace: function () {
var t = Object(
a.a)(
regeneratorRuntime.mark(function t() {
var e;
return regeneratorRuntime.wrap( function (t) { for (
;
;) 
switch (t.prev = t.next) {
case 0:
if (
t.prev = 0,
this.wishlisted = !this.wishlisted,
!(e = JSON.parse(localStorage.getItem("user")))
) {
t.next = 10;
break
}
return t.next = 6,
this.$axios({
method: "put",
headers: {
Authorization: e.token
},
url: "/spaces/".concat(this.$route.params.spaceId, "/zzim"),
params: {
zzim: this.wishlisted
}
});
case 6:
t.sent,
fbq("trackCustom", "Zzim"),
t.next = 11;
break;
case 10:
this
.$router
.push("/auth/login");
case 11:
t.next = 16;
break;
case 13:
t.prev = 13,
t.t0 = t.catch(0);
case 16:
case "end":
return t.stop()
} }, t, this, [ [0, 13]
])
}));
return function () {
return t.apply( this, arguments)
}
}(),
reserveSpace: function () {
"MEET" === this.spaceType
? this .$refs .productMeet .reserveSpace()
: this .$refs .productWork .reserveSpace()
},
getQuestions: function () {
var t = Object(
a.a)(
regeneratorRuntime.mark(function t(e) {
var s;
return regeneratorRuntime.wrap( function (t) { for (
;
;) 
switch (t.prev = t.next) {
case 0:
if (t.prev = 0, !(e > 0 && (!this.qna.page.pages || e <= this.qna.page.pages))) {
t.next = 11;
break
}
return t.next = 4,
this
.$axios
.get("/questions", {
params: {
page: e,
space_id: this.detail.info.id
}
});
case 4:
s = t.sent,
this.qna.questions = s.data.questions,
this.qna.page.pages = s.data.page.pages,
this.qna.page.current = s.data.page.page,
this.$forceUpdate(),
t.next = 12;
break;
case 11:
return t.abrupt("return");
case 12:
t.next = 17;
break;
case 14:
t.prev = 14,
t.t0 = t.catch(0);
case 17:
case "end":
return t.stop()
} }, t, this, [ [0, 14]
])
}));
return function (e) {
return t.apply( this, arguments)
}
}(),
selected: function (
t) {
for (
var e in this.isSelected) 
e === t ? (
this.isSelected[t] = !0, this.isSelected.active = !0) : this.isSelected[e] = !1
},
removeScrollEvent: function () {
document.addEventListener(
"scroll", this.onScroll)
}
},
asyncData: function () {
var t = Object(
a.a)(
regeneratorRuntime.mark(function t(e) {
var s,
a,
i,
n;
return regeneratorRuntime.wrap(
function (t) {
for ( ; ;) switch (
t.prev = t.next) {
case 0:
return t.prev = 0,
t.next = 3,
e
.store
.dispatch("getCommonCodes");
case 3:
if (t.sent, s = e.query.preview, a = e.query.keyword_id, e.params.spaceId) {
t.next = 9;
break
}
return history && history.back(),
t.abrupt("return");
case 9:
if (s) {
t.next = 21;
break
}
if (!a) {
t.next = 16;
break
}
return t.next = 13,
e
.$axios
.get("/spaces/".concat(e.params.spaceId, "?keyword_id=").concat(a));
case 13:
i = t.sent,
t.next = 19;
break;
case 16:
return t.next = 18,
e
.$axios
.get("/spaces/".concat(e.params.spaceId));
case 18:
i = t.sent;
case 19:
t.next = 24;
break;
case 21:
return t.next = 23,
e
.$axios
.get("/spaces/".concat(e.params.spaceId, "?preview=").concat(s));
case 23:
i = t.sent;
case 24:
return i.data.info.desc = i
.data
.info
.desc
.split("\n")
.join("<br/>"),
t.next = 27,
e
.$axios
.get("/side_banners?space_id=".concat(e.params.spaceId));
case 27:
return (n = t.sent).data.side_banners = c()(n.data.side_banners),
i.data.side_banner = [],
n
.data
.side_banners
.map(function (t) {
"Y" === t.USE_YN && l
.a
.isWithinRange(new Date, new Date(t.STRT_YMDT), new Date(t.END_YMDT)) && 0 === i.data.side_banner.length && i
.data
.side_banner
.push({
image_url: t
.LNG_IMG_URL
.includes("http")
? t.LNG_IMG_URL
: "https://kr.object.ncloudstorage.com/scloud-service/pstatic-scloud".concat(
t.LNG_IMG_URL
),
link: t.BNR_URL
})
}),
i.data.images = [
{
image_url: i.data.info.image_url
}
].concat(i.data.images),
t.abrupt("return", {
isPreview: !!s,
detail: i.data,
spaceType: i.data.info.SPC_TP_CD,
qna: {
page: {
pages: i.data.questions.page.pages,
current: i.data.questions.page.page,
total: i.data.questions.page.total
},
questions: i.data.questions.questions
},
isLoading: !1
});
case 35:
t.prev = 35,
t.t0 = t.catch(0),
500 !== t.t0.response.status && 404 !== t.t0.response.status || e.error(
{errorStatus: 404}
);
case 39:
case "end":
return t.stop() }
}, t, null, [
[0, 35]
])
}));
return function (e) {
return t.apply(
this, arguments)
}
}(),
created: function () {
var t = Object(
a.a)(
regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(
function (t) {
for ( ; ;) switch (
t.prev = t.next) {
case 0:
return this
.$store
.commit("SET_PAGEINFO", {
isMainPage: !1
}),
"MEET" === this.spaceType && this.setBreakInfoCodes(),
t.next = 5,
this
.$store
.dispatch("getUserInfo");
case 5:
case "end":
return t.stop() }
}, t, this)
}));
return function () {
return t.apply(
this, arguments)
}
}(),
mounted: function () {
var t = Object(
a.a)(
regeneratorRuntime.mark(function t() {
return regeneratorRuntime.wrap(
function (t) {
for ( ; ;) switch (
t.prev = t.next) {
case 0:
return t.next = 2,
this
.$store
.dispatch("getUserInfo");
case 2:
try {
document.addEventListener("scroll", this.onScroll),
this.getZzimInfo(),
this.isReadyImgSlider = !0,
this.deviceWidth = window.innerWidth
} catch (t) {}
case 3:
case "end":
return t.stop() }
}, t, this)
}));
return function () {
return t.apply(
this, arguments)
}
}(),
activated: function () {
document.addEventListener(
"scroll", this.onScroll)
},
destroyed: function () {
document.removeEventListener(
"scroll", this.onScroll)
},
deactivated: function () {
document.removeEventListener(
"scroll", this.onScroll)
}
}, N = (
s(498),
Object(u.a)(
$,
function () {
var t = this,
e = this,
s = e.$createElement,
a = e._self._c || s;
return e.isLoading
? e._e()
: a(
"div",
{
staticClass: "wrap main detail",
class: {
meetspace: "MEET" === e.spaceType,
workspace: "WORK" === e.spaceType
}
},
[
a(
"div",
{
attrs: { id: "content_wraper", role: "main"
}
},
[
e.isMobile ? a(
"div", {
staticClass: "section_cover" }, [
e.detail.info.image_url
? a("div", {
staticClass: "spot_wrap"
}, [a("span", {
staticClass: "spot_img",
style: {
backgroundImage: "url(" + e.detail.info.image_url + ")"
},
attrs: {
"data-stellar-background-ratio": "0.5"
},
on: {
click: function (t) {
    e.showPhotoViewer = !0
}
}
})])
: e._e() ]) : e._e(),
e._v(" "),
a(
"div",
{ staticClass: "section_cont"
},
[a(
"div",
{
staticClass: "inner_width" },
[
a("a", {
staticClass: "btn_share_detail naver-splugin",
class: {
meet: e.spaceType && "MEET" === e.spaceType,
work: e.spaceType && "WORK" === e.spaceType
},
on: {
click: e.activeShareModal
}
}, [a("span", {staticClass: "naver-splugin-c"})]),
e._v(" "),
e.showShareModal
? a("share-modal", {
attrs: {
    modalStatus: e.showShareModal,
    dataset: {
        name: e.detail.info.name,
        image: e.detail.info.image_url,
        id: e.detail.info.id
    }
},
on: {
    "update:modalStatus": function (t) {
        e.showShareModal = t
    },
    "update:modal-status": function (t) {
        e.showShareModal = t
    }
}
})
: e._e(),
e._v(" "),
a("a", {
staticClass: "btn_love_detail",
class: {
meet: e.spaceType && "MEET" === e.spaceType,
work: e.spaceType && "WORK" === e.spaceType
},
on: {
click: e.addZzimSpace
}
}, [a("i", {
staticClass: "sp_icon ico_love_detail",
class: {
    active: e.wishlisted
}
}, [e._v("좋아요")])]), e._v(" "), a("div", {
staticClass: "h_area",
staticStyle: {
overflow: "hidden"
} }, [
a("div", {
staticClass: "h_space"
}, [a("h2", {
staticClass: "space_name",
domProps: {
    innerHTML: e._s(e.detail.info.name)
}
})]),
e._v(" "),
a("p", {
staticClass: "sub_desc"
}, [e._v(e._s(e.detail.info.sub_title))]),
e._v(" "),
a("div", {
staticClass: "tags"
}, e._l(e.detail.tags, function (t) {
return a("span", {
key: "__space_tag_" + t.tag,
staticClass: "tag"
}, [e._v("#" + e._s(t.tag))])
}), 0) ]), e._v(" "), e.isMobile
? a("CouponButton", {
attrs: {
    dataset: e.detail
}
})
: e._e(), e._v(" "), a("div", {
staticClass: "detail_forms" }, [a("div", {
staticClass: "box_form right_fixed detail_space",
staticStyle: {
transition: "transform 0.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s"
}
}, [
e.spaceType && "MEET" === e.spaceType
? a("product-meet", {
    ref: "productMeet",
    attrs: {
        isPreview: e.isPreview,
        dataset: e.detail,
        notiStatus: e.showNoti,
        notiMsg: e.notiMsg,
        modalStatus: e.showCallModal
    },
    on: {
        "update:notiStatus": function (t) {
            e.showNoti = t
        },
        "update:noti-status": function (t) {
            e.showNoti = t
        },
        "update:notiMsg": function (t) {
            e.notiMsg = t
        },
        "update:noti-msg": function (t) {
            e.notiMsg = t
        },
        "update:modalStatus": function (t) {
            e.showCallModal = t
        },
        "update:modal-status": function (t) {
            e.showCallModal = t
        }
    }
})
: e._e(),
e._v(" "),
e.spaceType && "WORK" === e.spaceType
? a("product-work", {
    ref: "productWork",
    attrs: {
        isPreview: e.isPreview,
        dataset: e.detail,
        modalStatus: e.showCallModal
    },
    on: {
        "update:modalStatus": function (t) {
            e.showCallModal = t
        },
        "update:modal-status": function (t) {
            e.showCallModal = t
        }
    }
})
: e._e()
], 1),
e._v(" "),
a(
"div",
{
staticClass: "photo_box_wrap type9"
},
[
e.detail.images.length
    ? a("div", {
        staticClass: "detail_box v slide_wrap"
    }, [
        e.isReadyImgSlider
            ? a("div", {
                directives: [
                    {
                        name: "swiper",
                        rawName: "v-swiper:mySwiper",
                        value: e.swiperOption,
                        expression: "swiperOption",
                        arg: "mySwiper"
                    }
                ]
            }, [a("ul", {
                    staticClass: "swiper-wrapper slides"
                }, e._l(e.detail.images, function (t, s) {
                    return a("li", {
                        key: "__dImg_" + s,
                        staticClass: "swiper-slide slide"
                    }, [a("div", {
                            staticClass: "photo img",
                            style: {
                                backgroundImage: "url(" + t.image_url + ")"
                            },
                            on: {
                                click: function (t) {
                                    e.showPhotoViewer = !0,
                                    e.photoViewerIdx = s
                                }
                            }
                        })])
                }), 0)])
            : e._e(),
        e._v(" "),
        e._m(0)
    ])
    : e._e(),
e._v(" "),
a("div", {
    staticClass: "text_box"
}, [a("h3", {
        staticClass: "h_copy"
    }, [e._v(e._s(e.detail.info.sub_title))])]),
e._v(" "),
a("div", {
    staticClass: "nav_wrapper"
}, [
"MEET" === e.spaceType
        ? a("ul", {
            staticClass: "nav_area"
        }, [
a("li", {
                class
                :
                {
                    selected: e.isSelected.s_intro
            }
        }, [a("a", {
                on: {
                    click: function () {
                        return t.$scrollTo("#s_intro") && e.removeScrollEvent() && e.selected(
                            "s_intro"
                        )
                    }
                }
            }, [e._v("공간소개")])]),
        e._v(" "),
        a("li", {
            class
            :
            {
                selected: e.isSelected.s_info
        }
    }, [a("a", {
            on: {
                click: function () {
                    return t.$scrollTo("#s_info") && e.removeScrollEvent() && e.selected("s_info")
                }
            }
        }, [e._v("시설안내")])]),
    e._v(" "),
    a("li", {
        class
        :
        {
            selected: e.isSelected.s_caution
    }
}, [a("a", {
        on: {
            click: function () {
                return t.$scrollTo("#s_caution") && e.removeScrollEvent() && e.selected(
                    "s_caution"
                )
            }
        }
    }, [e._v("유의사항")])]),
e._v(" "),
"NOWPY" === e.detail.info.RSV_MTH_CD || "FIXPY" === e.detail.info.RSV_MTH_CD
    ? a("li", {
        class
        :
        {
            selected: e.isSelected.s_refund
    }
}, [a("a", {
        on: {
            click: function () {
                return t.$scrollTo("#s_refund") && e.removeScrollEvent() && e.selected(
                    "s_refund"
                )
            }
        }
    }, [e._v("환불정책")])])
: e._e(),
e._v(" "),
a("li", {
class
:
{
    selected: e.isSelected.s_qna
} }, [a("a", {
on: {
    click: function () {
        return t.$scrollTo("#s_qna") && e.removeScrollEvent() && e.selected("s_qna")
    }
}
}, [e._v("Q&A")])]), e._v(" "), a("li", {
staticClass: "end",
class: {
selected: e.isSelected.s_review }
}, [a("a", {
on: {
click: function () {
    return t.$scrollTo("#s_review") && e.removeScrollEvent() && e.selected(
        "s_review"
    )
}
} }, [e._v("이용후기")])])
])
: e._e(),
e._v(" "),
"MEET" !== e.spaceType
? a(
"ul",
{
staticClass: "nav_area"
},
[
a(
"li",
{ class : {
selected: e.isSelected.s_intro
}
},
[a("a", { on: {
click: function () {
        return t.$scrollTo("#s_intro") && e.removeScrollEvent() && e.selected(
            "s_intro"
        )
} }
}, [e._v("공간소개")])]
),
e._v(" "),
a(
"li",
{
class
:
{ selected: e.isSelected.s_info
}
},
[a(
"a", {
on: { click: function () {
return t.$scrollTo("#s_info") && e.removeScrollEvent() && e.selected("s_info") }
}
}, [e._v("추가정보")])]
),
e._v(
" "),
a(
"li",
{
class: [
e.isSelected.s_caution ? "selected" : "",
"MEET" !== e.spaceType && e.detail.products.length && !e .detail .products[0] .cnvens .length
        ? " end"
        : ""
]
},
[a("a", {
on: { click: function () {
return t.$scrollTo("#s_caution") && e.removeScrollEvent() && e.selected(
        "s_caution"
) }
}
}, [e._v("운영시간")])]
),
e._v(" "),
e.detail.products.length && e
.detail
.products[0]
.cnvens
.length
? a(
"li",
{ class : {
selected: e.isSelected.s_refund
}
},
[a("a", { on: {
click: function () {
        return t.$scrollTo("#s_refund") && e.removeScrollEvent() && e.selected(
            "s_refund"
        )
} }
}, [e._v("편의시설")])]
)
: e._e(),
e._v(" "),
a(
"li",
{
class
:
{
selected: e.isSelected.s_qna
}
},
[a(
"a", {
on: {
click: function () {
return t.$scrollTo( "#s_qna") && e.removeScrollEvent() && e.selected( "s_qna")
}
}
}, [e._v("Q&A")])]
),
e._v(
" "),
a(
"li",
{
staticClass: "end",
class: {
selected: e.isSelected.s_review
}
},
[a(
"a", {
on: {
click: function () {
return t.$scrollTo(
"#s_review") && e.removeScrollEvent() && e.selected(
"s_review")
}
}
}, [e._v("이용후기")])]
)
]
)
: e._e()
]),
e._v(
" "),
"MEET" === e.spaceType
? a(
"div",
{
staticClass: "meetspace"
},
[
a(
"div",
{
staticClass: "text_box",
attrs: {
id: "s_intro"
}
},
[
a(
"h4", {
staticClass: "h_intro"
}, [e._v("공간 소개")]),
e._v(
" "),
a(
"p", {
staticClass: "p_intro",
domProps: {
innerHTML: e._s(
e.detail.info.desc)
}
}),
e._v(
" "),
"MEET" === e.spaceType
? a(
"ul",
{
staticClass: "info_list officehours"
},
[
a(
"li",
[
a(
"span", {
staticClass: "tit"
}, [e._v("영업시간")]),
e._v(
" "),
a(
"span",
{
staticClass: "data"
},
[e._v(
e._s(e.detail.break_times[0].end_time) + "~" + e._s(e.detail.break_times[0].start_time) +
"시")]
)
]
),
e._v(
" "),
a(
"li",
[
a(
"span", {
staticClass: "tit"
}, [e._v("휴무일")]),
e._v(
" "),
e.showBreakInfo && !e.detail.break_days.length
? a(
"span", {
staticClass: "data"
}, [e._v("없음")])
: e._e(),
e._v(
" "),
e._l(
e.detail.break_days, function (t, s) {
return e.showBreakInfo
? a( "span", { staticClass: "data"
}, [ t.breakeDay
                ? a("span", [e._v(e._s(t.breakeCodes.name) + " " + e._s(t.breakeDay.name))])
                : a("span", [e._v(e._s(t.breakeCodes.name))]), e._v(" "), s !== e.detail.break_days.length - 1
? a("span", [e._v(",")])
: e._e()
])
: e._e()
})
],
2
)
]
)
: e._e()
]
),
e._v(" "),
a(
"div",
{
staticClass: "text_box",
attrs: {
id: "s_info"
}
},
[
a(
"h4", {
staticClass: "h_intro"
}, [e._v("시설 안내")]),
e._v(
" "),
a(
"ol", {
staticClass: "info_list"
}, e._l(e.detail.fcst_guides, function (t, s) {
return a(
"li",
[
a(
"strong", {
staticClass: "tit"
}, [e._v(
e._s(
s + 1))]),
e._v(
" "),
a(
"span", {
staticClass: "data",
domProps: {
innerHTML: e._s(
t.content)
}
})
]
)
}), 0)
]
),
e._v(
" "),
a(
"div",
{
staticClass: "text_box",
attrs: {
id: "s_caution"
}
},
[
a(
"h4", {
staticClass: "h_intro"
}, [e._v("예약시 주의사항")]),
e._v(
" "),
a(
"ol", {
staticClass: "info_list"
}, e._l(e.detail.cautions, function (t, s) {
return a(
"li",
[
a(
"strong", {
staticClass: "tit"
}, [e._v(
e._s(
s + 1))]),
e._v(
" "),
a(
"span", {
staticClass: "data",
domProps: {
innerHTML: e._s(
t.content)
}
})
]
)
}), 0)
]
),
e._v(
" "),
"NOWPY" === e.detail.info.RSV_MTH_CD || "FIXPY" === e.detail.info.RSV_MTH_CD
? a(
"div",
{
staticClass: "text_box refund",
attrs: {
id: "s_refund"
}
},
[
a(
"h4", {
staticClass: "h_intro"
}, [e._v("환불규정 안내")]),
e._v(
" "),
e._m(
1),
e._v(
" "),
a(
"ol", {
staticClass: "info_list"
}, e._l(e.detail.refund_policies, function (t) {
return a(
"li",
[
e.refundCodes
? a(
"strong",
{
staticClass: "tit",
staticStyle: { color: "#656565", "font-family": "'NanumBarunGothic', sans-serif"
}
},
[e._v( e._s(e.refundCodes.values.filter(function (e) { return e.key === t.unit
})[0].name))]
)
: e._e(),
e._v(
" "),
Number(
t.rate)
? a(
"span",
{
staticClass: "data",
staticStyle: { color: "#000"
}
},
[e._v( "총 금액의 " + e._s(Number(t.rate)) + "% 환불")]
)
: e._e(),
e._v(
" "),
Number(
t.rate)
? e._e()
: a(
"span", {
staticClass: "data",
staticStyle: { color: "#000"
}
}, [e._v("환불 불가")])
]
)
}), 0)
]
)
: e._e()
]
)
: e._e(),
e._v(
" "),
"WORK" === e.spaceType
? a(
"working-space",
{
attrs: {
dataset: e.detail,
selected: e.selected,
isSelected: e.isSelected
}
}
)
: e._e(),
e._v(
" "),
a(
"space-map",
{
attrs: {
callModalStatus: e.showCallModal,
dataset: {
name: e.detail.info.name,
location: e.detail.location,
website: e.detail.corp.home_page_url,
address: e.detail.location.addr + " " + e.detail.location.addr_detail,
hp_no: e.detail.corp.phone
}
},
on: {
"update:callModalStatus": function (
t) {
e.showCallModal = t
},
"update:call-modal-status": function (
t) {
e.showCallModal = t
}
}
}
),
e._v(
" "),
a(
"qna-component",
{
attrs: {
questions: e.qna.questions,
page: e.qna.page,
type: e.qnaType,
question: e.currentQuestion,
modalStatus: e.showQuestionModal
},
on: {
"update:type": function (
t) {
e.qnaType = t
},
"update:question": function (
t) {
e.currentQuestion = t
},
"update:modalStatus": function (
t) {
e.showQuestionModal = t
},
"update:modal-status": function (
t) {
e.showQuestionModal = t
},
getData: e.getQuestions
}
}
),
e._v(
" "),
a(
"reviews-component",
{
attrs: {
dataset: e.detail.reviews,
spaceId: e.detail.info.id
}
}
)],
1),e._v(
" "),e.detail.host
? a(
"div",
{
staticClass: "host_profile"
},
[a(
"div",
{
staticClass: "inner"
},
[
a(
"div",
{
staticClass: "host_area"
},
[
a(
"div",
{
staticClass: "pf_left",
style: {
backgroundImage: "url(" + e.detail.host.image_url + ")"
}
}
),
e._v(
" "),
a(
"div",
{
staticClass: "pf_right"
},
[
a(
"strong", {
staticClass: "pf_host"
}, [e._v("HOST")]),
e._v(
" "),
a(
"span", {
staticClass: "pf_name"
}, [e._v("호스트")]),
e._v(
" "),
a(
"p", {
staticClass: "pf_txt"
}, [e._v(
e._s(e.detail.host.intr))])
]
)
]
),
e._v(
" "),
a(
"nuxt-link",
{
staticClass: "btn btn_rounded btn_link",
attrs: {
to: "/host/" + e.detail.host.id
}
},
[a(
"span", {
staticClass: "btn_inner"
}, [e._v("호스트 페이지로 이동")])]
)
],
1
)]
)
: e._e()
]),
e._v(" "),
e.detail.host? a("div",{
staticClass: "others_wrap"},[e._m(2),
e._v(" "),
a(
"div",
{
staticClass: "space_list swiper_list",
class: {
no_data: !e.detail.host.spaces.length
}},
[
e.detail.host.spaces.length
? a(
"div",
{
staticClass: "flex_wrap column3 fluid"
},
[
e.isMobile
? [a(
"div",
{
directives: [
{
name: "swiper",
rawName: "v-swiper:host_spaces",
value: {
slidesPerView: "auto",
centeredSlides: !0
},
expression: "{ slidesPerView: 'auto', centeredSlides: true }",
arg: "host_spaces"
}
],
staticClass: "swiper"
},
[a(
"div",
{
staticClass: "swiper-wrapper"
},
e._l(e.detail.host.spaces, function (t) {
return a(
"div",
{
key: t.space_id,
staticClass: "swiper-slide",
staticStyle: {
width: "95%"
}
},
[a(
"card", {
attrs: { space: t
}
})],
1
)
}),
0
)]
)]
: e._l(
e.detail.host.spaces, function (t) {
return a(
"card", {
key: t.space_id,
attrs: {
space: t
}
})
})
],
2
)
: a(
"div", {
staticClass: "center_wrap"
}, [e._m(3)])])
]
)
: e._e(),
e._v(
" "),
e.detail.similar_spaces.length
? a(
"div",
{staticClass: "others_wrap"
},
[
e._m(4),e._v(" "),a("div",{
staticClass: "space_list swiper_list",
class: {
no_data: !e.detail.similar_spaces.length}
},[e.detail.similar_spaces.length
? a(
"div",
{
staticClass: "flex_wrap column3 fluid"
},
[
e.isMobile
? [a(
"div",
{
directives: [
{
name: "swiper",
rawName: "v-swiper:similar_spaces",
value: {
slidesPerView: "auto",
centeredSlides: !0
},
expression: "{ slidesPerView: 'auto', centeredSlides: true }",
arg: "similar_spaces"
}
],
staticClass: "swiper"
},
[a(
"div",
{
staticClass: "swiper-wrapper"
},
e._l(e.detail.similar_spaces, function (t) {
return a(
"div",
{
key: t.space_id,
staticClass: "swiper-slide",
staticStyle: {
width: "95%"
}
},
[a(
"card", {
attrs: {
space: t
}
})],
1
)
}),
0
)]
)]
: e._l(
e.detail.similar_spaces, function (t) {
return a(
"card", {
key: t.space_id,
attrs: {
space: t
}
})
})
],
2
)
: a(
"div", {
staticClass: "center_wrap"
}, [e._m(5)])
]
)
]
)
: e._e()
],
1
)]
)
]
),
e._v(
" "),
a(
"div",
{
staticClass: "btn_order_area"
},
[
a(
"a",
{
staticClass: "btn btn_default btn_call",
on: {
click: e.callToHost
}
},
[e._m(6)]
),
e._v(
" "),
a(
"a",
{
staticClass: "btn btn_default btn_reserve",
on: {
click: e.reserveSpace
}
},
[e._v("예약신청하기")]
)
]
),
e._v(
" "),
a(
"a",
{
staticClass: "btn_fixed_top bottom fixed",
on: {
click: e.goToTop
}
},
[a(
"span", {
staticClass: "sp_icon ico_top"
}, [e._v("페이지 상단으로 이동")])]
),
e._v(
" "),
e.showQuestionModal
? a(
"question-modal",
{
attrs: {
modalStatus: e.showQuestionModal,
currentPage: e.qna.page.current,
type: e.qnaType,
question: e.currentQuestion,
spaceId: e.detail.info.id
},
on: {
"update:modalStatus": function (
t) {
e.showQuestionModal = t
},
"update:modal-status": function (
t) {
e.showQuestionModal = t
},
activeNoti: e.activeNoti,
getData: e.getQuestions
}
}
)
: e._e(),
e._v(
" "),
e.showCallModal
? a(
"call-modal",
{
attrs: {
modalStatus: e.showCallModal,
info: {
product: e.detail.info.name,
phone: e.detail.corp.phone
}
},
on: {
"update:modalStatus": function (
t) {
e.showCallModal = t
},
"update:modal-status": function (
t) {
e.showCallModal = t
}
}
}
)
: e._e(),
e._v(
" "),
e.showPhotoViewer
? a(
"photo-viewer",
{
attrs: {
modalStatus: e.showPhotoViewer,
idx: e.photoViewerIdx,
imageList: e.detail.images,
space: e.detail.info.name
},
on: {
"update:modalStatus": function (
t) {
e.showPhotoViewer = t
},
"update:modal-status": function (
t) {
e.showPhotoViewer = t
}
}
}
)
: e._e(),
e._v(
" "),
a(
"notification",
{
attrs: {
notiStatus: e.showNoti,
message: e.notiMsg
},
on: {
"update:notiStatus": function (
t) {
e.showNoti = t
},
"update:noti-status": function (
t) {
e.showNoti = t
}
}
}
),
e._v(
" "),
a(
"div",
{
staticClass: "dimmed",
style: [
e.showCallModal && {
display: "block"
},
e.showQuestionModal && {
display: "block"
}
],
on: {
click: e.closeModal
}
}
)
],
1
)
},
[
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"div",
{
staticClass: "nav_slide"
},
[
e(
"a",
{
staticClass: "main__banner--prev btn_slide_prev"
},
[e(
"i", {
staticClass: "sp_icon ico_slide_prev"
}, [this._v("이전으로 이동")])]
),
this._v(
" "),
e(
"a",
{
staticClass: "main__banner--next btn_slide_next"
},
[e(
"i", {
staticClass: "sp_icon ico_slide_next"
}, [this._v("다음으로 이동")])]
)
]
)
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"p",
{
staticClass: "txt_notice refund",
staticStyle: {
"padding-bottom": "20px"
}
},
[
e(
"em",
{
staticClass: "warn",
staticStyle: {
color: "#ff3a48"
}
},
[this._v("이용당일(첫 날) 이후에 환불 관련 사항은 호스트에게 직접 문의하셔야 합니다.")]
),
this._v(
" "),
e(
"br"),
this._v(
"결제 후 2시간 이내에는 100% 환불이 가능합니다.(단, 이용시간 전까지만 가능)\n                  ")
]
)
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"div",
{
staticClass: "text_box"
},
[e(
"h4",
{
staticClass: "h_intro"
},
[
e(
"em", [this._v("호스트")]),
this._v(
"의 다른 공간\n              ")
]
)]
)
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"div",
{
staticClass: "center txt_result"
},
[e(
"p",
{
staticClass: "p_result"
},
[
e(
"em", [this._v("호스트")]),
this._v(
"의 다른 공간이 아직 없습니다.\n                  ")
]
)]
)
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"div",
{
staticClass: "text_box"
},
[e(
"h4", {
staticClass: "h_intro"
}, [this._v("비슷한 공간")])]
)
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"div",
{
staticClass: "center txt_result"
},
[e(
"p", {
staticClass: "p_result"
}, [this._v("비슷한 공간이 아직 없습니다.")])]
)
},
function () {
var t = this.$createElement,
e = this._self._c || t;
return e(
"span",
{
staticClass: "txt_call"
},
[
e(
"i", {staticClass: "sp_icon ico_call_light"}),
this._v(
"전화\n        ")
]
)
}
],
!1,
null,
"e02ec714",
null
)
);
e.default = N.exports
}
}
]
);