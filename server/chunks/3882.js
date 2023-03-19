exports.id = 3882;
exports.ids = [3882];
exports.modules = {

/***/ 99033:
/***/ ((module) => {

// Exports
module.exports = {
	"categories": "style_categories__ZHLCe",
	"image_block": "style_image_block__QTN4b",
	"subtitle": "style_subtitle__ZATeX",
	"title": "style_title__fBGeb",
	"login_block": "style_login_block__sLw53",
	"user_block": "style_user_block__PJW3s",
	"user_block_container": "style_user_block_container__2oxfA",
	"hi_user": "style_hi_user__r2_85",
	"image_wrapper": "style_image_wrapper__0ZUYK",
	"user_title": "style_user_title__spDJP",
	"card": "style_card__E66MW",
	"greenCard": "style_greenCard__bnMAm"
};


/***/ }),

/***/ 93882:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99033);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21519);
/* harmony import */ var shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20926);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13048);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83720);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7562);
/* harmony import */ var widgets_Banners_lib_productTitles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63343);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(82103);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, shared_lib_components__WEBPACK_IMPORTED_MODULE_7__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_9__, react_i18next__WEBPACK_IMPORTED_MODULE_10__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, shared_lib_components__WEBPACK_IMPORTED_MODULE_7__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_9__, react_i18next__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Categories = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { userName , category , setCategory , avatar , isAuthorized , onSearch  } = props;
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
    const { title , subtitle  } = widgets_Banners_lib_productTitles__WEBPACK_IMPORTED_MODULE_8__/* .ProductTypesTitles */ .l[category];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().categories),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .CategoriesList */ .wg, {
                value: category,
                setValue: setCategory
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_7__/* .WithSpring */ .xM, {
                type: "opacityHeight",
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().image_block),
                param: 390,
                style: (0,shared_lib_helpers__WEBPACK_IMPORTED_MODULE_9__/* .backgroundImage */ .Nx)(shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_3__/* .ProductTypesAssets */ .XU[category]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().subtitle),
                        children: t(subtitle)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),
                        children: t(title)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                        w: "112px",
                        color: "outlined",
                        onClick: onSearch,
                        children: t("Learn_more")
                    })
                ]
            }, category),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().login_block),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().user_block),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().user_block_container),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().hi_user),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().image_wrapper),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .NextImage */ .oH, {
                                                src: avatar,
                                                def: shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_3__/* .DefaultAssets.AVATAR */ .h9.AVATAR
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_7__/* .Ternary */ .fV, {
                                            where: isAuthorized,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().user_title),
                                                    children: [
                                                        t("Hey"),
                                                        " ",
                                                        userName,
                                                        ".",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        t("Welcome_back")
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().user_title),
                                                    children: [
                                                        t("Hey"),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        t("Lets_get")
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_7__/* .Display */ .sS, {
                                when: !isAuthorized,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__/* .routes.SIGNUP */ ._.SIGNUP,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                            w: "90%",
                                            h: "30px",
                                            children: t("Join_now")
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        href: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__/* .routes.LOGIN */ ._.LOGIN,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                            w: "90%",
                                            h: "30px",
                                            color: "outlined",
                                            children: t("Log_in")
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__/* .routes.SEARCH */ ._.SEARCH,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().greenCard),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                children: [
                                    t("Best_goods"),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                    t("Get_your"),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_6__/* .AiOutlineShoppingCart */ .nx, {})
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__/* .routes.SEARCH */ ._.SEARCH,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().card),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: t("The_best")
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_7__/* .Display */ .sS, {
                        when: isAuthorized,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__/* .routes.SEARCH */ ._.SEARCH,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().greenCard),
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                                    children: [
                                        t("Look_how_many"),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_6__/* .AiOutlineFileSearch */ .Eh, {})
                                    ]
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 63343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ ProductTypesTitles)
/* harmony export */ });
const ProductTypesTitles = {
    "Electronics": {
        subtitle: "Latest trending",
        title: "Electronic items"
    },
    "Children products": {
        subtitle: "Interesting and incredible",
        title: "Children products"
    },
    "Clothes": {
        subtitle: "Reliable and durable",
        title: "Clothes"
    },
    "Food": {
        subtitle: "Healthy and inexpensive",
        title: "Food"
    },
    "Sports and recreation": {
        subtitle: "Become the ultimate gym enjoyer",
        title: "With our sport products!"
    },
    "Shoes": {
        subtitle: "Convenient and compact",
        title: "Shoes"
    }
};


/***/ })

};
;