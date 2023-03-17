exports.id = 940;
exports.ids = [940];
exports.modules = {

/***/ 17372:
/***/ ((module) => {

// Exports
module.exports = {
	"aside": "style_aside__lmrnL"
};


/***/ }),

/***/ 7940:
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17372);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var features_SearchPage_ui_AsideControls_Controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73494);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21519);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94628);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([features_SearchPage_ui_AsideControls_Controls__WEBPACK_IMPORTED_MODULE_2__, shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__, shared_ui_material__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_5__]);
([features_SearchPage_ui_AsideControls_Controls__WEBPACK_IMPORTED_MODULE_2__, shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__, shared_ui_material__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const SearchAsideTemplate = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ reg  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().aside),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(features_SearchPage_ui_AsideControls_Controls__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: t("Product_type"),
                values: reg("type"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__/* .RadioGroup */ .Ee, {
                    values: reg("type"),
                    Component: shared_ui_material__WEBPACK_IMPORTED_MODULE_4__/* .Radio */ .Y8
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(features_SearchPage_ui_AsideControls_Controls__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: t("Product_model"),
                values: reg("model"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__/* .RadioGroup */ .Ee, {
                    values: reg("model"),
                    Component: shared_ui_material__WEBPACK_IMPORTED_MODULE_4__/* .Radio */ .Y8
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(features_SearchPage_ui_AsideControls_Controls__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: t("Product_size"),
                values: reg("size"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__/* .RadioGroup */ .Ee, {
                    values: reg("size"),
                    Component: shared_ui_material__WEBPACK_IMPORTED_MODULE_4__/* .Radio */ .Y8
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(features_SearchPage_ui_AsideControls_Controls__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                title: t("Product_Rating"),
                values: reg("rating"),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__/* .RadioGroup */ .Ee, {
                    values: reg("rating"),
                    Component: shared_ui_material__WEBPACK_IMPORTED_MODULE_4__/* .ReadonlyRating */ .pV
                })
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchAsideTemplate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;