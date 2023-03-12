"use strict";
exports.id = 989;
exports.ids = [989];
exports.modules = {

/***/ 93989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ao": () => (/* reexport safe */ _store_slice_cartReducer__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   "HB": () => (/* reexport safe */ _ui_CartItems_CartItems__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "NV": () => (/* reexport safe */ _providers_Cart_CartProvider__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _ui_CartItems_CartItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42564);
/* harmony import */ var _providers_Cart_CartProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70687);
/* harmony import */ var _store_slice_cartReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62273);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_CartItems_CartItems__WEBPACK_IMPORTED_MODULE_0__, _providers_Cart_CartProvider__WEBPACK_IMPORTED_MODULE_1__, _store_slice_cartReducer__WEBPACK_IMPORTED_MODULE_2__]);
([_ui_CartItems_CartItems__WEBPACK_IMPORTED_MODULE_0__, _providers_Cart_CartProvider__WEBPACK_IMPORTED_MODULE_1__, _store_slice_cartReducer__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 70687:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46391);
/* harmony import */ var shared_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9535);
/* harmony import */ var widgets_Cart_store_thunks_getCartProducts_getCartProducts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60488);
/* harmony import */ var widgets_Cart_providers_Cart_CartContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87425);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76460);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_selectors__WEBPACK_IMPORTED_MODULE_3__, widgets_Cart_store_thunks_getCartProducts_getCartProducts__WEBPACK_IMPORTED_MODULE_4__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_6__]);
([shared_selectors__WEBPACK_IMPORTED_MODULE_3__, widgets_Cart_store_thunks_getCartProducts_getCartProducts__WEBPACK_IMPORTED_MODULE_4__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CartProvider = ({ children  })=>{
    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const cart = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_2__/* .useSelector */ .v9)(shared_selectors__WEBPACK_IMPORTED_MODULE_3__/* .CartSelectors.productsByIds */ .y8.productsByIds);
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_2__/* .useDispatch */ .I0)();
    const helpers = new shared_lib_helpers__WEBPACK_IMPORTED_MODULE_6__/* .Helpers */ .ZH();
    const sum = helpers.sum(items.map((product)=>product.price));
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (helpers.emptyArray(cart)) return setItems([]);
        dispatch((0,widgets_Cart_store_thunks_getCartProducts_getCartProducts__WEBPACK_IMPORTED_MODULE_4__/* .getCartProducts */ .Q)(cart)).then(({ payload  })=>{
            if (payload) {
                setItems(payload);
            }
        });
    }, [
        cart
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_Cart_providers_Cart_CartContext__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Provider */ .Z.Provider, {
        value: {
            items,
            sum
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 60488:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ getCartProducts)
/* harmony export */ });
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46391);
/* harmony import */ var shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25498);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__]);
shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getCartProducts = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .createThunk */ .L3)("cart/GET_CART_PRODUCTS", async (ids, { extra  })=>{
    const response = await extra.api.products.getCartProducts(ids);
    if ((0,shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__/* .isError */ .V)(response)) return null;
    return response.data;
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42564:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var widgets_Cart_providers_Cart_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(87425);
/* harmony import */ var entities_Cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(52959);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([entities_Cart__WEBPACK_IMPORTED_MODULE_3__]);
entities_Cart__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const CartItems = ({ Remove , RemoveAll , AddToSaved  })=>{
    const { items  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(widgets_Cart_providers_Cart_CartContext__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Cart__WEBPACK_IMPORTED_MODULE_3__/* .CartItems */ .HB, {
        items: items,
        Remove: Remove,
        RemoveAll: RemoveAll,
        AddToSaved: AddToSaved,
        loading: false
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItems);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;