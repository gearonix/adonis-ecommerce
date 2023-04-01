exports.id = 9179;
exports.ids = [9179];
exports.modules = {

/***/ 42223:
/***/ ((module) => {

// Exports
module.exports = {
	"user_info_wrapper": "style_user_info_wrapper__53tOt",
	"image": "style_image__NDhR4",
	"info": "style_info__ugE7g",
	"online": "style_online__qfj59"
};


/***/ }),

/***/ 29179:
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(42223);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74918);
/* harmony import */ var shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59479);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31353);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62920);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var shared_config_consts_others__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94266);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_4__, shared_lib_components__WEBPACK_IMPORTED_MODULE_5__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_4__, shared_lib_components__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const UserInfo = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ user , label  })=>{
    const helpers = new shared_lib_helpers__WEBPACK_IMPORTED_MODULE_4__/* .Helpers */ .ZH();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_5__/* .WithSpring */ .xM, {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().user_info_wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().image),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .NextImage */ .oH, {
                    src: user.avatar,
                    def: shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_3__/* .DefaultAssets.AVATAR */ .h9.AVATAR
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().info),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: helpers.toNormalName(user)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()({
                            [(_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().online)]: label === shared_config_consts_others__WEBPACK_IMPORTED_MODULE_7__/* .UserStatus.ONLINE */ .J.ONLINE
                        }),
                        children: label
                    })
                ]
            })
        ]
    }, user.userId);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;