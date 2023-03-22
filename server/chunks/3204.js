"use strict";
exports.id = 3204;
exports.ids = [3204];
exports.modules = {

/***/ 3204:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17418);
/* harmony import */ var widgets_Products_store_thunks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Products_store_thunks__WEBPACK_IMPORTED_MODULE_3__]);
widgets_Products_store_thunks__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const RecommendedItems = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ Component , Icon , ...filter })=>{
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_2__/* .useDispatch */ .I0)();
    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,widgets_Products_store_thunks__WEBPACK_IMPORTED_MODULE_3__/* .getRecommendedProducts */ .VB)(filter)).then(({ payload  })=>{
            if (!payload) return;
            setItems(payload);
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        items: items,
        Icon: Icon,
        ...filter
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecommendedItems);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;