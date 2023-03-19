exports.id = 6764;
exports.ids = [6764];
exports.modules = {

/***/ 7538:
/***/ ((module) => {

// Exports
module.exports = {
	"add_product_block": "style_add_product_block__6PTs9",
	"title": "style_title__l4h6R",
	"container": "style_container__O5Dv3",
	"flex": "style_flex__I1FB1",
	"user_info_block": "style_user_info_block__qLBsJ",
	"save_buttons": "style_save_buttons__YMlsZ",
	"save": "style_save__lwl4S",
	"cancel": "style_cancel__feOm0",
	"background": "style_background__bpNBb",
	"user_avatar_block": "style_user_avatar_block__TNVY_",
	"user_avatar": "style_user_avatar__NIWfr",
	"dark": "style_dark__mCA1V"
};


/***/ }),

/***/ 76764:
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7538);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21519);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(94628);
/* harmony import */ var country_list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17112);
/* harmony import */ var country_list_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(country_list_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_ui_material_components_Selects_SearchSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19963);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59684);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(83720);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, shared_ui_material__WEBPACK_IMPORTED_MODULE_3__, shared_ui_material_components_Selects_SearchSelect__WEBPACK_IMPORTED_MODULE_5__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__, react_i18next__WEBPACK_IMPORTED_MODULE_9__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, shared_ui_material__WEBPACK_IMPORTED_MODULE_3__, shared_ui_material_components_Selects_SearchSelect__WEBPACK_IMPORTED_MODULE_5__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__, react_i18next__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const EditProfile = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ ChangeBackground , ChangeAvatar , close , submitForm , reg , user  })=>{
    const { theme  } = (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useTheme */ .Fg)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().add_product_block), (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default())[theme || "light"], "with_theme"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().title),
                children: t("Change_profile")
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().background),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .ProfileBackground */ .Om, {
                            src: user.background,
                            ChangeBackground: ChangeBackground
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().user_info_block),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().user_avatar_block),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().user_avatar),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .UserAvatar */ .Yt, {
                                            src: user.avatar
                                        })
                                    }),
                                    ChangeAvatar
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_3__/* .HeadField */ .uo, {
                                title: t("First_Name"),
                                values: reg("firstName")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_3__/* .HeadField */ .uo, {
                                title: t("Last_Name"),
                                values: reg("lastName")
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_3__/* .TextArea */ .Kx, {
                        title: t("Description"),
                        values: reg("description", 55)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material_components_Selects_SearchSelect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        values: country_list_js__WEBPACK_IMPORTED_MODULE_4___default().names(),
                        inputValues: reg("country"),
                        Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_8__/* .AiOutlineCar */ .$m
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material_components_Selects_SearchSelect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        values: country_list_js__WEBPACK_IMPORTED_MODULE_4___default().capitals(),
                        inputValues: reg("city"),
                        Icon: shared_ui_icons__WEBPACK_IMPORTED_MODULE_8__/* .BsBuilding */ .ql
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().save_buttons),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                onClick: submitForm,
                                w: 140,
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().save),
                                h: 30,
                                children: t("Save")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                                onClick: close,
                                w: 140,
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().cancel),
                                h: 30,
                                children: t("Cancel")
                            })
                        ]
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditProfile);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19963:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45641);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57987);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82103);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59684);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, react_i18next__WEBPACK_IMPORTED_MODULE_3__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_4__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_5__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_2__, react_i18next__WEBPACK_IMPORTED_MODULE_3__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_4__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SearchSelect = ({ values , inputValues , Icon  })=>{
    const { inputProps , error  } = inputValues;
    const fieldName = inputProps.name;
    const helpers = new shared_lib_helpers__WEBPACK_IMPORTED_MODULE_4__/* .Helpers */ .ZH();
    const { isLight  } = (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useTheme */ .Fg)();
    const { setValue , getValues  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useFormContext)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const handleChange = (e)=>{
        setValue(fieldName, e.target.innerHTML);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                sx: {
                    color: isLight ? "black" : "white",
                    marginBottom: "5px",
                    marginTop: "5px"
                },
                children: [
                    Icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
                        style: {
                            marginRight: "5px"
                        }
                    }),
                    t(helpers.capitalize(fieldName))
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Autocomplete, {
                freeSolo: true,
                id: "free-solo-2-demo",
                disableClearable: true,
                options: values,
                onChange: handleChange,
                value: getValues(fieldName),
                sx: {
                    width: "340px",
                    marginBottom: "17px"
                },
                renderInput: (params)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {
                        ...params,
                        InputProps: {
                            ...params.InputProps,
                            type: "search"
                        },
                        error: !!error,
                        helperText: error,
                        size: "small"
                    })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchSelect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;