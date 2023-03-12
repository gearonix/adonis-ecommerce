exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 24584:
/***/ ((module) => {

// Exports
module.exports = {
	"recommended_items": "style_recommended_items__8_AjP",
	"items_block": "style_items_block__Xq5cU"
};


/***/ }),

/***/ 47680:
/***/ ((module) => {

// Exports
module.exports = {
	"recommended": "style_recommended____8ZE",
	"image_block": "style_image_block__T47em",
	"title": "style_title__Uc_UH",
	"recommended_items": "style_recommended_items__2D0RY",
	"item": "style_item__oetLV"
};


/***/ }),

/***/ 67928:
/***/ ((module) => {

// Exports
module.exports = {
	"you_may_like": "style_you_may_like__depWX",
	"heading": "style_heading__6euV7"
};


/***/ }),

/***/ 93698:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GR": () => (/* reexport safe */ _ui_YouMayLike_YouMayLike__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "dn": () => (/* reexport safe */ _ui_RecommendedItems_RecommendedItems__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "lD": () => (/* reexport safe */ _ui_SortedProducts_SortedProducts__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _ui_RecommendedItems_RecommendedItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8706);
/* harmony import */ var _ui_YouMayLike_YouMayLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48765);
/* harmony import */ var _ui_SortedProducts_SortedProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76194);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_RecommendedItems_RecommendedItems__WEBPACK_IMPORTED_MODULE_0__, _ui_YouMayLike_YouMayLike__WEBPACK_IMPORTED_MODULE_1__, _ui_SortedProducts_SortedProducts__WEBPACK_IMPORTED_MODULE_2__]);
([_ui_RecommendedItems_RecommendedItems__WEBPACK_IMPORTED_MODULE_0__, _ui_YouMayLike_YouMayLike__WEBPACK_IMPORTED_MODULE_1__, _ui_SortedProducts_SortedProducts__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8706:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24584);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72665);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23296);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(16291);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, shared_lib_components__WEBPACK_IMPORTED_MODULE_2__, shared_ui_material__WEBPACK_IMPORTED_MODULE_3__, react_i18next__WEBPACK_IMPORTED_MODULE_4__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, shared_lib_components__WEBPACK_IMPORTED_MODULE_2__, shared_ui_material__WEBPACK_IMPORTED_MODULE_3__, react_i18next__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const RecommendedItems = ({ items  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().recommended_items),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .ContainerTitle */ .Wr, {
                children: t("Recommended_items")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().items_block),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_2__/* .Ternary */ .fV, {
                    where: items.length,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: items.slice(0, 10).map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .RecommendedItemTall */ .ZF, {
                                    product: product
                                }, product.productId))
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_3__/* .GridPreloader */ .Zm, {})
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecommendedItems);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76194:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47680);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72665);
/* harmony import */ var shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42740);
/* harmony import */ var widgets_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77772);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46391);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16291);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76460);
/* harmony import */ var shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(79792);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, widgets_Products__WEBPACK_IMPORTED_MODULE_3__, shared_ui_material__WEBPACK_IMPORTED_MODULE_6__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_9__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, widgets_Products__WEBPACK_IMPORTED_MODULE_3__, shared_ui_material__WEBPACK_IMPORTED_MODULE_6__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const SortedProducts = ({ type ="Electronics" , items  })=>{
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const onSearch = ()=>{
        dispatch(widgets_Products__WEBPACK_IMPORTED_MODULE_3__/* .productsActions.changeFilter */ .Mb.changeFilter({
            type
        }));
        router.push(shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_2__/* .routes.SEARCH */ ._.SEARCH);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().recommended),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().image_block),
                style: (0,shared_lib_helpers__WEBPACK_IMPORTED_MODULE_7__/* .backgroundImage */ .Nx)(shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_8__/* .ProductTypesAssets */ .XU[type]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title),
                        children: t(type)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                        w: "119px",
                        color: "outlined",
                        onClick: onSearch,
                        children: t("Source_now")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().recommended_items),
                children: items.length ? items.slice(0, 8).map((product, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .RecommendedItem */ .ZZ, {
                        product: product
                    }, `${product.productId}_${idx}`)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_6__/* .RecommendedPreloader */ .Nz, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortedProducts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 48765:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67928);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72665);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23296);
/* harmony import */ var shared_ui_material_components_Loaders_YouMayLikePreloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65900);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, shared_lib_components__WEBPACK_IMPORTED_MODULE_2__, shared_ui_material_components_Loaders_YouMayLikePreloader__WEBPACK_IMPORTED_MODULE_3__, react_i18next__WEBPACK_IMPORTED_MODULE_4__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, shared_lib_components__WEBPACK_IMPORTED_MODULE_2__, shared_ui_material_components_Loaders_YouMayLikePreloader__WEBPACK_IMPORTED_MODULE_3__, react_i18next__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const YouMayLike = ({ items  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().you_may_like),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().heading),
                children: t("You_may")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_2__/* .Ternary */ .fV, {
                where: items.length,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: items.slice(0, 5).map((product)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .YouMayLikeItem */ .fn, {
                                product: product
                            }, product.productId);
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material_components_Loaders_YouMayLikePreloader__WEBPACK_IMPORTED_MODULE_3__/* .YouMayLikePreloader */ .M, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YouMayLike);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 65900:
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
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23296);
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