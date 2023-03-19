"use strict";
exports.id = 1137;
exports.ids = [1137];
exports.modules = {

/***/ 31137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* reexport safe */ _ui_SearchMessages_SearchMessages__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "Z": () => (/* reexport safe */ _ui_SearchUsers_SearchUsers__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _ui_SearchMessages_SearchMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61898);
/* harmony import */ var _ui_SearchUsers_SearchUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22053);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_SearchUsers_SearchUsers__WEBPACK_IMPORTED_MODULE_1__]);
_ui_SearchUsers_SearchUsers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83720);



const SearchMessages = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .AiOutlineSearch */ .RB, {
            color: "#8B96A5",
            size: "24px"
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchMessages);


/***/ }),

/***/ 22053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94628);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59684);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17418);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_material__WEBPACK_IMPORTED_MODULE_2__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__]);
([shared_ui_material__WEBPACK_IMPORTED_MODULE_2__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SearchUsers = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { reg , watch , getValues  } = (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .cI)(null);
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
    const onChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const filter = getValues().search;
        dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__/* .messengerActions.changeRoomsFilter */ ._I.changeRoomsFilter(filter));
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const sub = watch(onChange);
        return ()=>sub.unsubscribe();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            width: "90%",
            margin: "0 auto"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .SearchInput */ .Mj, {
            values: reg("search")
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchUsers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;