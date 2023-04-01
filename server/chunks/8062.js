exports.id = 8062;
exports.ids = [8062];
exports.modules = {

/***/ 78818:
/***/ ((module) => {

// Exports
module.exports = {
	"extra_services": "style_extra_services__z_gO8",
	"block": "style_block__KfIKs"
};


/***/ }),

/***/ 18062:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78818);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74918);
/* harmony import */ var shared_config_consts_myLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60119);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62920);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, shared_config_consts_myLinks__WEBPACK_IMPORTED_MODULE_2__, shared_lib_components__WEBPACK_IMPORTED_MODULE_3__, react_i18next__WEBPACK_IMPORTED_MODULE_4__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, shared_config_consts_myLinks__WEBPACK_IMPORTED_MODULE_2__, shared_lib_components__WEBPACK_IMPORTED_MODULE_3__, react_i18next__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ExtraServices = ()=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().extra_services),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .ContainerTitle */ .Wr, {
                children: t("Also_see")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().block),
                children: [
                    shared_config_consts_myLinks__WEBPACK_IMPORTED_MODULE_2__/* .MyProjects.map */ .Q.map(({ image , title , link  }, idx)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .ExtraService */ .eM, {
                            image: image,
                            title: title,
                            link: link
                        }, idx);
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_3__/* .Map */ .D5, {
                        count: 4 - shared_config_consts_myLinks__WEBPACK_IMPORTED_MODULE_2__/* .MyProjects.length */ .Q.length,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .DefaultExtraService */ .Xn, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExtraServices);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;