exports.id = 6839;
exports.ids = [6839];
exports.modules = {

/***/ 83210:
/***/ ((module) => {

// Exports
module.exports = {
	"search_form": "style_search_form__FD0FN",
	"title": "style_title__sB0GE",
	"description": "style_description__CoAuY"
};


/***/ }),

/***/ 36839:
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
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57987);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(83210);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31353);
/* harmony import */ var shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59479);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_2__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const FindProductSkeleton = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ Form  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().search_form),
        style: (0,shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__/* .backgroundImage */ .Nx)((0,shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__/* .publicAssets */ .VK)(shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_4__/* .Assets.SEARCH_FORM */ .de.SEARCH_FORM)),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                children: t("You_can_start")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description),
                children: t("Our_store")
            }),
            Form
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FindProductSkeleton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;