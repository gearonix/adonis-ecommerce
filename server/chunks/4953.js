exports.id = 4953;
exports.ids = [4953];
exports.modules = {

/***/ 68019:
/***/ ((module) => {

// Exports
module.exports = {
	"product_params": "style_product_params__oPW58",
	"header": "style_header__c30Qj",
	"wrapper": "style_wrapper__1L6dr",
	"description": "style_description__WvqKl",
	"table": "style_table__VAy7x"
};


/***/ }),

/***/ 33657:
/***/ ((module) => {

// Exports
module.exports = {
	"advantage": "style_advantage__eZvMx"
};


/***/ }),

/***/ 44953:
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68019);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32534);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26365);
/* harmony import */ var shared_ui_kit_Components_Advantage_ui_Advantage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(29681);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98429);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78828);
/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8625);
/* harmony import */ var react_icons_ci__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_ci__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57987);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92998);
/* harmony import */ var widgets_CurrentProduct__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(99143);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_material__WEBPACK_IMPORTED_MODULE_2__, shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__, shared_lib_components__WEBPACK_IMPORTED_MODULE_6__, react_i18next__WEBPACK_IMPORTED_MODULE_8__, widgets_CurrentProduct__WEBPACK_IMPORTED_MODULE_10__]);
([shared_ui_material__WEBPACK_IMPORTED_MODULE_2__, shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__, shared_lib_components__WEBPACK_IMPORTED_MODULE_6__, react_i18next__WEBPACK_IMPORTED_MODULE_8__, widgets_CurrentProduct__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ProductDescriptions = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const product = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(widgets_CurrentProduct__WEBPACK_IMPORTED_MODULE_10__/* .ProductSelectors.product */ .pQ.product);
    const isExists = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(widgets_CurrentProduct__WEBPACK_IMPORTED_MODULE_10__/* .ProductSelectors.isExists */ .pQ.isExists);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().product_params),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__/* .BlueLinkHeader */ .jN, {
                label: t("Product_description"),
                Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_9__/* .MdOutlineDescription */ .d0
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().wrapper),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_6__/* .Display */ .sS, {
                        when: isExists,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().description),
                                children: product.description
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .Table */ .iA, {
                                product: product,
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().table)
                            }),
                            product?.features?.slice(0, 6)?.map((feature, idx)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit_Components_Advantage_ui_Advantage__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                    title: feature
                                }, idx);
                            })
                        ]
                    }),
                    !isExists && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().description),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ci__WEBPACK_IMPORTED_MODULE_7__.CiWarning, {}),
                            " Product has no description"
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductDescriptions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29681:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33657);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92998);



const Advantage = ({ title  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_2___default().advantage),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_1__/* .AiOutlineCheck */ .bz, {}),
            " ",
            title
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Advantage);


/***/ })

};
;