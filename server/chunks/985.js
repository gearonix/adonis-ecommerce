"use strict";
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 77804:
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

/***/ 62614:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2487);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var widgets_Login_store_thunks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(79257);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46391);
/* harmony import */ var shared_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9535);
/* harmony import */ var shared_lib_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62757);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Login_store_thunks__WEBPACK_IMPORTED_MODULE_2__, shared_selectors__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_6__]);
([widgets_Login_store_thunks__WEBPACK_IMPORTED_MODULE_2__, shared_selectors__WEBPACK_IMPORTED_MODULE_4__, react_i18next__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







// !!!
// This file is for development mode only.
const DevNavigation = ()=>{
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useDispatch */ .I0)();
    const { toggleTheme  } = (0,shared_lib_hooks_useTheme__WEBPACK_IMPORTED_MODULE_5__/* .useTheme */ .F)();
    const userId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useSelector */ .v9)(shared_selectors__WEBPACK_IMPORTED_MODULE_4__/* .AuthSelectors.userId */ .ce.userId);
    const { i18n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)();
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

/***/ 27364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ DevStore)
/* harmony export */ });
// !!!
// This file is for development mode only.
const DevStore = {
    get () {
        if (window) {
            if (false) {}
        }
        return null;
    },
    set (state) {
        if (window) {
            if (false) {}
        }
        return null;
    }
};


/***/ }),

/***/ 11985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Pd": () => (/* reexport safe */ _DevGlobalVars__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   "tH": () => (/* reexport safe */ _devStore__WEBPACK_IMPORTED_MODULE_1__.t),
/* harmony export */   "w9": () => (/* reexport safe */ _DevNavigation__WEBPACK_IMPORTED_MODULE_2__.Z)
/* harmony export */ });
/* harmony import */ var _DevGlobalVars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77804);
/* harmony import */ var _devStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27364);
/* harmony import */ var _DevNavigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62614);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_DevNavigation__WEBPACK_IMPORTED_MODULE_2__]);
_DevNavigation__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;