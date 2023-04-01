exports.id = 4274;
exports.ids = [4274];
exports.modules = {

/***/ 93250:
/***/ ((module) => {

// Exports
module.exports = {
	"you_may_like": "style_you_may_like__depWX",
	"heading": "style_heading__6euV7"
};


/***/ }),

/***/ 74274:
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93250);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74918);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62920);
/* harmony import */ var shared_ui_material_components_Loaders_YouMayLikePreloader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64284);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, shared_lib_components__WEBPACK_IMPORTED_MODULE_3__, shared_ui_material_components_Loaders_YouMayLikePreloader__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_5__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, shared_lib_components__WEBPACK_IMPORTED_MODULE_3__, shared_ui_material_components_Loaders_YouMayLikePreloader__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const YouMayLike = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ items  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().you_may_like),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().heading),
                children: t("You_may")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_3__/* .Ternary */ .fV, {
                where: items.length,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: items.slice(0, 5).map((product)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .YouMayLikeItem */ .fn, {
                                product: product
                            }, product.productId);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material_components_Loaders_YouMayLikePreloader__WEBPACK_IMPORTED_MODULE_4__/* .YouMayLikePreloader */ .M, {})
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YouMayLike);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64284:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ YouMayLikePreloader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62920);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_components__WEBPACK_IMPORTED_MODULE_2__]);
shared_lib_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const YouMayLikePreloader = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_2__/* .Map */ .D5, {
        count: 4,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {
            sx: {
                height: "75px",
                width: "70%",
                m: 2,
                borderRadius: "6px",
                display: "flex",
                padding: "14px",
                position: "relative"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                    animation: "wave",
                    style: {
                        marginBottom: "30px",
                        marginLeft: "-6px",
                        width: 57,
                        height: 100,
                        marginTop: "-33px"
                    }
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                            animation: "wave",
                            style: {
                                marginTop: "-10px",
                                marginLeft: "10px",
                                width: 100,
                                height: 14
                            }
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Skeleton, {
                            animation: "wave",
                            style: {
                                marginTop: "4px",
                                marginLeft: "10px",
                                width: 100,
                                height: 14
                            }
                        })
                    ]
                })
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;