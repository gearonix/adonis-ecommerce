exports.id = 3377;
exports.ids = [3377];
exports.modules = {

/***/ 50449:
/***/ ((module) => {

// Exports
module.exports = {
	"controls": "style_controls__dZeqZ",
	"controls_title": "style_controls_title__RM9mw",
	"bold": "style_bold__NSK9v",
	"controls_buttons": "style_controls_buttons__h6Yuz"
};


/***/ }),

/***/ 93377:
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(50449);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31353);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_helpers__WEBPACK_IMPORTED_MODULE_2__, react_i18next__WEBPACK_IMPORTED_MODULE_3__]);
([shared_lib_helpers__WEBPACK_IMPORTED_MODULE_2__, react_i18next__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const SearchHeader = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)((props)=>{
    const { Filters , amount , filter: { page , inStock , view , rating , ...filter }  } = props;
    const helpers = new shared_lib_helpers__WEBPACK_IMPORTED_MODULE_2__/* .Helpers */ .ZH();
    const categories = Object.values(helpers.partial(filter)).join(", ");
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().controls),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().controls_title),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    children: [
                        amount,
                        " ",
                        t("items"),
                        " ",
                        t("in"),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bold),
                            children: helpers.byDefault(categories, t("All_categories"))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Filters, {})
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;