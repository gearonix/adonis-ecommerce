exports.id = 8904;
exports.ids = [8904];
exports.modules = {

/***/ 84052:
/***/ ((module) => {

// Exports
module.exports = {
	"input": "style_input___vpzN"
};


/***/ }),

/***/ 8904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* reexport safe */ _ui_SearchMessages_SearchMessages__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "Z": () => (/* reexport safe */ _ui_SearchUsers_SearchUsers__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _ui_SearchMessages_SearchMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32582);
/* harmony import */ var _ui_SearchUsers_SearchUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59468);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_SearchUsers_SearchUsers__WEBPACK_IMPORTED_MODULE_1__]);
_ui_SearchUsers_SearchUsers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 32582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92998);



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

/***/ 59468:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32534);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38537);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98429);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7175);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(84052);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);
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
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().input),
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