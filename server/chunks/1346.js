exports.id = 1346;
exports.ids = [1346];
exports.modules = {

/***/ 15671:
/***/ ((module) => {

// Exports
module.exports = {
	"purchase_block": "style_purchase_block__0Aavk",
	"purchase_card": "style_purchase_card__N8kc3",
	"purchase_supplier": "style_purchase_supplier__aRLJS",
	"image_wrapper": "style_image_wrapper__NklMa",
	"supplier_params": "style_supplier_params__DbI3F"
};


/***/ }),

/***/ 1346:
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(15671);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92998);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26365);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6031);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51922);
/* harmony import */ var shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(51719);
/* harmony import */ var features_Saved__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17900);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__, features_Saved__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_8__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__, features_Saved__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const PurchaseProduct = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ AddToSaved , CartButton , product  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    const { salesman , productInfo  } = product;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().purchase_block),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().purchase_card),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: `${shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__/* .routes.USERS */ ._.USERS}/${salesman.userId}`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().purchase_supplier),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().image_wrapper),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__/* .NextImage */ .oH, {
                                        alt: "",
                                        src: salesman.avatar || shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_6__/* .DefaultAssets.AVATAR */ .h9.AVATAR,
                                        priority: false,
                                        def: shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_6__/* .DefaultAssets.AVATAR */ .h9.AVATAR
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                    children: [
                                        t("Supplier"),
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        salesman.firstName,
                                        " ",
                                        salesman.lastName
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().supplier_params),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .MdMessage */ .a9, {}),
                            salesman.email
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().supplier_params),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .TfiWorld */ .Zl, {}),
                            salesman.country ? salesman.country : "No Country"
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_9___default().supplier_params),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .HiOutlineFlag */ .QN, {}),
                            salesman.city ? salesman.city : t("No_City")
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartButton, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: `${shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__/* .routes.USERS */ ._.USERS}/${salesman.userId}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                            w: "100%",
                            color: "blueBordered",
                            children: t("Sellers_profile")
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AddToSaved, {
                productId: productInfo.productId,
                Component: features_Saved__WEBPACK_IMPORTED_MODULE_7__/* .ProductSaved */ .gH
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PurchaseProduct);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;