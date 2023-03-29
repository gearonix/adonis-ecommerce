exports.id = 5659;
exports.ids = [5659];
exports.modules = {

/***/ 64523:
/***/ ((module) => {

// Exports
module.exports = {
	"recommended": "style_recommended____8ZE",
	"image_block": "style_image_block__T47em",
	"title": "style_title__Uc_UH",
	"recommended_items": "style_recommended_items__2D0RY",
	"mobile_header": "style_mobile_header__4AeUg",
	"source_now": "style_source_now__jqeFH"
};


/***/ }),

/***/ 65292:
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(64523);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26365);
/* harmony import */ var shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51922);
/* harmony import */ var widgets_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68766);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98429);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(32534);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95575);
/* harmony import */ var shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(51719);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(57987);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, widgets_Products__WEBPACK_IMPORTED_MODULE_4__, shared_ui_material__WEBPACK_IMPORTED_MODULE_7__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_8__, react_i18next__WEBPACK_IMPORTED_MODULE_10__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, widgets_Products__WEBPACK_IMPORTED_MODULE_4__, shared_ui_material__WEBPACK_IMPORTED_MODULE_7__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_8__, react_i18next__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const SortedProducts = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ type ="Electronics" , items , Icon  })=>{
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_5__/* .useDispatch */ .I0)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)();
    const onSearch = ()=>{
        dispatch(widgets_Products__WEBPACK_IMPORTED_MODULE_4__/* .productsActions.changeFilter */ .Mb.changeFilter({
            type
        }));
        router.push(shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_3__/* .routes.SEARCH */ ._.SEARCH);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_13___default().recommended),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .ContainerTitle */ .Wr, {
                className: classnames__WEBPACK_IMPORTED_MODULE_11___default()((_style_module_scss__WEBPACK_IMPORTED_MODULE_13___default().mobile_header)),
                children: [
                    Icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {}),
                    " ",
                    t(type)
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_13___default().image_block),
                style: (0,shared_lib_helpers__WEBPACK_IMPORTED_MODULE_8__/* .backgroundImage */ .Nx)(shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_9__/* .ProductTypesAssets */ .XU[type]),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_13___default().title),
                        children: t(type)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                        w: "119px",
                        color: "outlined",
                        onClick: onSearch,
                        children: t("Source_now")
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_13___default().recommended_items),
                children: items.length ? items.slice(0, 8).map((product, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .RecommendedItem */ .ZZ, {
                        product: product
                    }, `${product.productId}_${idx}`)) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_7__/* .RecommendedPreloader */ .Nz, {})
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .BlueLink */ .sJ, {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_13___default().source_now),
                onClick: onSearch,
                children: [
                    t("Source_now"),
                    " ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__.AiOutlineArrowRight, {})
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortedProducts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;