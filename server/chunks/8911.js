exports.id = 8911;
exports.ids = [8911];
exports.modules = {

/***/ 82634:
/***/ ((module) => {

// Exports
module.exports = {
	"items_block": "style_items_block__MAYyZ",
	"transformed": "style_transformed__RvWkz"
};


/***/ }),

/***/ 38911:
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(82634);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21519);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17418);
/* harmony import */ var widgets_Products_store_thunks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52949);
/* harmony import */ var features_ProductPage_ui_BuyProduct_CartButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72887);
/* harmony import */ var features_Saved_ui_SavedProvider_SavedProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90366);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(83720);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(94628);
/* harmony import */ var widgets_Products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11985);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, widgets_Products_store_thunks__WEBPACK_IMPORTED_MODULE_4__, features_ProductPage_ui_BuyProduct_CartButton__WEBPACK_IMPORTED_MODULE_5__, features_Saved_ui_SavedProvider_SavedProvider__WEBPACK_IMPORTED_MODULE_6__, shared_ui_material__WEBPACK_IMPORTED_MODULE_8__, widgets_Products__WEBPACK_IMPORTED_MODULE_9__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, widgets_Products_store_thunks__WEBPACK_IMPORTED_MODULE_4__, features_ProductPage_ui_BuyProduct_CartButton__WEBPACK_IMPORTED_MODULE_5__, features_Saved_ui_SavedProvider_SavedProvider__WEBPACK_IMPORTED_MODULE_6__, shared_ui_material__WEBPACK_IMPORTED_MODULE_8__, widgets_Products__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const SearchList = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const products = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useSelector */ .v9)(widgets_Products__WEBPACK_IMPORTED_MODULE_9__/* .ProductsSelectors.products */ .v9.products);
    const productsLength = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useSelector */ .v9)(widgets_Products__WEBPACK_IMPORTED_MODULE_9__/* .ProductsSelectors.length */ .v9.length);
    const filter = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useSelector */ .v9)(widgets_Products__WEBPACK_IMPORTED_MODULE_9__/* .ProductsSelectors.filter */ .v9.filter);
    const isLoading = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useSelector */ .v9)(widgets_Products__WEBPACK_IMPORTED_MODULE_9__/* .ProductsSelectors.isLoading */ .v9.isLoading);
    const isTransformed = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useSelector */ .v9)(widgets_Products__WEBPACK_IMPORTED_MODULE_9__/* .ProductsSelectors.isViewTransformed */ .v9.isViewTransformed);
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useDispatch */ .I0)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,widgets_Products_store_thunks__WEBPACK_IMPORTED_MODULE_4__/* .getProducts */ .Xp)(filter));
    }, [
        filter
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_10___default()((_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().items_block)),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .WithLoading */ .uQ, {
            when: !productsLength,
            title: "Products",
            Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_7__/* .AiOutlineShoppingCart */ .nx,
            loading: isLoading,
            Preloader: shared_ui_material__WEBPACK_IMPORTED_MODULE_8__/* .ProductsPreloader */ .al,
            count: 6,
            NotFound: ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .NotFound */ .TX, {
                    title: "Products",
                    Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_7__/* .AiOutlineShoppingCart */ .nx,
                    w: 100
                }),
            className: classnames__WEBPACK_IMPORTED_MODULE_10___default()({
                [(_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().transformed)]: isTransformed
            }),
            children: products.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .SearchedProduct */ .Vh, {
                    AddToSaved: features_Saved_ui_SavedProvider_SavedProvider__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                    product: product,
                    CartButton: features_ProductPage_ui_BuyProduct_CartButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
                    isTransformed: isTransformed
                }, product.productId))
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchList);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;