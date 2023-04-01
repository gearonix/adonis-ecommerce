exports.id = 8148;
exports.ids = [8148];
exports.modules = {

/***/ 54703:
/***/ ((module) => {

// Exports
module.exports = {
	"messages_header": "style_messages_header__kcOyo"
};


/***/ }),

/***/ 18148:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var entities_Messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21611);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(54703);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67986);






const MessengerHeaderTemplate = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(({ user , label  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const onClick = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        if (user?.userId) {
            router.push(`${shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_4__/* .routes.USERS */ ._.USERS}/${user.userId}`);
        }
    }, [
        user
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().messages_header),
        onClick: onClick,
        children: user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Messenger__WEBPACK_IMPORTED_MODULE_1__/* .UserInfo */ .ao, {
            user: user,
            label: label
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerHeaderTemplate);


/***/ })

};
;