exports.id = 7461;
exports.ids = [7461];
exports.modules = {

/***/ 85250:
/***/ ((module) => {

// Exports
module.exports = {
	"profile_wall": "style_profile_wall__bqtpO",
	"wall": "style_wall___Eusl"
};


/***/ }),

/***/ 17461:
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(85250);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var widgets_Profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37986);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94628);
/* harmony import */ var widgets_Products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11985);
/* harmony import */ var widgets_Profile_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89665);
/* harmony import */ var widgets_Profile_contexts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29831);
/* harmony import */ var features_Saved__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78842);
/* harmony import */ var widgets_Saved__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(75797);
/* harmony import */ var widgets_Posts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87094);
/* harmony import */ var shared_lib_hooks_useBooleanState__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30662);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Profile__WEBPACK_IMPORTED_MODULE_2__, shared_ui_material__WEBPACK_IMPORTED_MODULE_3__, widgets_Products__WEBPACK_IMPORTED_MODULE_4__, features_Saved__WEBPACK_IMPORTED_MODULE_7__, widgets_Saved__WEBPACK_IMPORTED_MODULE_8__, widgets_Posts__WEBPACK_IMPORTED_MODULE_9__]);
([widgets_Profile__WEBPACK_IMPORTED_MODULE_2__, shared_ui_material__WEBPACK_IMPORTED_MODULE_3__, widgets_Products__WEBPACK_IMPORTED_MODULE_4__, features_Saved__WEBPACK_IMPORTED_MODULE_7__, widgets_Saved__WEBPACK_IMPORTED_MODULE_8__, widgets_Posts__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ProfileWall = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const addProduct = (0,shared_lib_hooks_useBooleanState__WEBPACK_IMPORTED_MODULE_10__/* .useBooleanState */ .z)();
    const addPost = (0,shared_lib_hooks_useBooleanState__WEBPACK_IMPORTED_MODULE_10__/* .useBooleanState */ .z)();
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(widgets_Profile_types__WEBPACK_IMPORTED_MODULE_5__/* .WallPages.posts */ .O.posts);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_Profile_contexts__WEBPACK_IMPORTED_MODULE_6__/* .ProfileWallContext.Provider */ .g.Provider, {
        value: {
            page,
            setPage
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().profile_wall),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_3__/* .ContentModal */ .K5, {
                    isOpened: addProduct.isOpen,
                    close: addProduct.close,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_Products__WEBPACK_IMPORTED_MODULE_4__/* .AddProduct */ .Rl, {
                        cancel: addProduct.close,
                        setPage: setPage
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_3__/* .ContentModal */ .K5, {
                    isOpened: addPost.isOpen,
                    close: addPost.close,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_Posts__WEBPACK_IMPORTED_MODULE_9__/* .AddPost */ .Tc, {
                        close: addPost.close,
                        setPage: setPage
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_Profile__WEBPACK_IMPORTED_MODULE_2__/* .ContentButtons */ .sy, {
                    openAddProduct: addProduct.open,
                    openAddPost: addPost.open
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProfileWallSwitcher, {})
            ]
        })
    });
});
const ProfileWallSwitcher = ()=>{
    const { page  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(widgets_Profile_contexts__WEBPACK_IMPORTED_MODULE_6__/* .ProfileWallContext */ .g);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().wall),
        children: [
            page === widgets_Profile_types__WEBPACK_IMPORTED_MODULE_5__/* .WallPages.products */ .O.products && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_Products__WEBPACK_IMPORTED_MODULE_4__/* .MyProducts */ .LI, {}),
            page === widgets_Profile_types__WEBPACK_IMPORTED_MODULE_5__/* .WallPages.saved */ .O.saved && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(features_Saved__WEBPACK_IMPORTED_MODULE_7__/* .SavedItems */ .kP, {
                Component: widgets_Saved__WEBPACK_IMPORTED_MODULE_8__/* .ProfileSaved */ .k,
                AddToSaved: features_Saved__WEBPACK_IMPORTED_MODULE_7__/* .SavedProvider */ .hU
            }),
            page === widgets_Profile_types__WEBPACK_IMPORTED_MODULE_5__/* .WallPages.posts */ .O.posts && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_Posts__WEBPACK_IMPORTED_MODULE_9__/* .MyPosts */ .nH, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileWall);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 75797:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* reexport safe */ _ui_ProfileSaved_ProfileSaved__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _ui_SavedItems_SavedItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74438);
/* harmony import */ var _ui_ProfileSaved_ProfileSaved__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2902);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_SavedItems_SavedItems__WEBPACK_IMPORTED_MODULE_0__, _ui_ProfileSaved_ProfileSaved__WEBPACK_IMPORTED_MODULE_1__]);
([_ui_SavedItems_SavedItems__WEBPACK_IMPORTED_MODULE_0__, _ui_ProfileSaved_ProfileSaved__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2902:
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
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21519);
/* harmony import */ var features_ProductPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65502);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83720);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(94628);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, features_ProductPage__WEBPACK_IMPORTED_MODULE_3__, shared_ui_material__WEBPACK_IMPORTED_MODULE_5__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, features_ProductPage__WEBPACK_IMPORTED_MODULE_3__, shared_ui_material__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const ProfileSaved = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ items , AddToSaved , loading  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .WithLoading */ .uQ, {
            when: !items.length,
            title: "Saved",
            Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_4__/* .FiHeart */ .$,
            loading: loading,
            Preloader: shared_ui_material__WEBPACK_IMPORTED_MODULE_5__/* .ProductsPreloader */ .al,
            count: 3,
            children: items.map((product)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .SearchedProduct */ .Vh, {
                    AddToSaved: AddToSaved,
                    CartButton: features_ProductPage__WEBPACK_IMPORTED_MODULE_3__/* .CartButton */ .WE,
                    product: product
                }, product.productId))
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileSaved);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;