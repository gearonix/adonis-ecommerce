"use strict";
exports.id = 7854;
exports.ids = [7854];
exports.modules = {

/***/ 80187:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ DevGlobalVars)
/* harmony export */ });
// !!!
// This file is for development mode only.
const DevGlobalVars = {
    setStore (store) {
        if (true) return;
        if (false) {}
    },
    setSocket (key, socket) {
        if (true) return;
        if (false) {}
    }
};


/***/ }),

/***/ 14946:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20926);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var widgets_Login_store_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71397);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17418);
/* harmony import */ var shared_lib_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(89828);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57987);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Login_store_thunks__WEBPACK_IMPORTED_MODULE_2__, react_i18next__WEBPACK_IMPORTED_MODULE_5__, widgets_Login__WEBPACK_IMPORTED_MODULE_6__]);
([widgets_Login_store_thunks__WEBPACK_IMPORTED_MODULE_2__, react_i18next__WEBPACK_IMPORTED_MODULE_5__, widgets_Login__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// !!!
// This file is for development mode only.
const DevNavigation = ()=>{
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useDispatch */ .I0)();
    const { toggleTheme  } = (0,shared_lib_hooks_useTheme__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .F)();
    const userId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useSelector */ .v9)(widgets_Login__WEBPACK_IMPORTED_MODULE_6__/* .AuthSelectors.userId */ .ce.userId);
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    const logout = async ()=>{
        dispatch((0,widgets_Login_store_thunks__WEBPACK_IMPORTED_MODULE_2__/* .logoutUser */ .TX)());
    };
    const changeLanguage = ()=>{
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    };
    return  false ? /*#__PURE__*/ 0 : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DevNavigation);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 37854:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* reexport safe */ _DevGlobalVars__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "w": () => (/* reexport safe */ _DevNavigation__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _DevGlobalVars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80187);
/* harmony import */ var _DevNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14946);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DevNavigation__WEBPACK_IMPORTED_MODULE_1__]);
_DevNavigation__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;