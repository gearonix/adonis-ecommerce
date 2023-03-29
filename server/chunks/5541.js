exports.id = 5541;
exports.ids = [5541];
exports.modules = {

/***/ 62705:
/***/ ((module) => {

// Exports
module.exports = {
	"add_product_block": "style_add_product_block__6RdF6",
	"title": "style_title__7oHGd",
	"background_image": "style_background_image__pJL2D",
	"container": "style_container__FgdrM",
	"flex": "style_flex__OypBt",
	"product_images_block": "style_product_images_block__leq5L",
	"product_names": "style_product_names__LChnf",
	"numberFields": "style_numberFields__cBlhS",
	"greyLine": "style_greyLine__YQ2Qa",
	"select_container": "style_select_container__eDxMs",
	"product_image_wrapper": "style_product_image_wrapper__Y5fpu",
	"save_buttons": "style_save_buttons__MhwVT",
	"background": "style_background__fYvbK"
};


/***/ }),

/***/ 45541:
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(62705);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32534);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92998);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26365);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38537);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51719);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57987);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95575);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_material__WEBPACK_IMPORTED_MODULE_2__, shared_ui_kit__WEBPACK_IMPORTED_MODULE_5__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__, react_i18next__WEBPACK_IMPORTED_MODULE_9__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_10__]);
([shared_ui_material__WEBPACK_IMPORTED_MODULE_2__, shared_ui_kit__WEBPACK_IMPORTED_MODULE_5__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__, react_i18next__WEBPACK_IMPORTED_MODULE_9__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const AddProduct = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ submitForm , cancel , ProductImages , reg  })=>{
    const { theme  } = (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useTheme */ .Fg)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().add_product_block), "with_theme", theme),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().title),
                children: t("Add Product")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().background_image),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_5__/* .NextImage */ .oH, {
                    src: (0,shared_lib_helpers__WEBPACK_IMPORTED_MODULE_10__/* .publicAssets */ .VK)(shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_8__/* .Assets.ROCKET */ .de.ROCKET)
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().container),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().fields),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().flex), (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().product_names)),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .HeadField */ .uo, {
                                        title: t("Product Name"),
                                        values: reg("name", 20),
                                        Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_3__/* .BsPen */ .bB
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .HeadField */ .uo, {
                                        title: t("Product Design"),
                                        values: reg("design", 20),
                                        Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_3__/* .MdOutlineDesignServices */ .es
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .Rating */ .iG, {
                                title: t("Product Rating"),
                                values: reg("rating")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Typography, {
                                component: "legend",
                                style: {
                                    marginBottom: "10px"
                                },
                                children: "In Stock"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .Checkbox */ .XZ, {
                                title: t("In Stock"),
                                values: reg("inStock")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().greyLine)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().flex), (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().product_images_block)),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().numberFields),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .NumberField */ .Ki, {
                                                title: t("Price"),
                                                values: reg("price"),
                                                Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_3__/* .BiDollar */ .pu
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .NumberField */ .Ki, {
                                                title: t("Warranty (years)"),
                                                values: reg("warrantyCount"),
                                                Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_3__/* .AiOutlineShoppingCart */ .nx
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProductImages, {
                                        values: reg("images")
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .TextArea */ .Kx, {
                                title: t("Product description"),
                                values: reg("description", 55),
                                Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_3__/* .MdOutlineDescription */ .d0
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().greyLine)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().select_container),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .StandardSelect */ .Zr, {
                                        title: t("Product_type"),
                                        values: reg("type"),
                                        Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_3__/* .FiType */ .RU
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .StandardSelect */ .Zr, {
                                        title: t("Product_model"),
                                        values: reg("model"),
                                        Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_3__/* .IoLogoModelS */ .lk
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .StandardSelect */ .Zr, {
                                        title: t("Product_size"),
                                        values: reg("size"),
                                        Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_3__/* .IoIosResize */ .cG
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().product_image_wrapper),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_5__/* .NextImage */ .oH, {
                                            src: (0,shared_lib_helpers__WEBPACK_IMPORTED_MODULE_10__/* .publicAssets */ .VK)(shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_8__/* .Assets.BICYCLE */ .de.BICYCLE)
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().flex),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .HeadField */ .uo, {
                                    title: t("Product Material"),
                                    values: reg("material"),
                                    Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_3__/* .GiMaterialsScience */ .pL
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().greyLine)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .AutoComplete */ .Qc, {
                                title: t("Product features"),
                                values: reg("features"),
                                Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_3__/* .AiOutlineStar */ .y5
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_11___default().save_buttons),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "primary_button",
                                onClick: submitForm,
                                children: t("Add Product")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "outlined_button",
                                onClick: cancel,
                                children: t("Cancel")
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddProduct);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;