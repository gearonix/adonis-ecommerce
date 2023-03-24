exports.id = 1504;
exports.ids = [1504];
exports.modules = {

/***/ 45997:
/***/ ((module) => {

// Exports
module.exports = {
	"message_bar": "style_message_bar__09neC",
	"buttons": "style_buttons__4E9Xr",
	"attached_image": "style_attached_image__MeS_i",
	"image_wrapper": "style_image_wrapper__PWe2o",
	"send": "style_send__hN2nS"
};


/***/ }),

/***/ 51504:
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
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45997);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(92998);
/* harmony import */ var features_SearchPage_lib_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(65226);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57987);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78828);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(26365);
/* harmony import */ var shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(51719);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_3__, shared_lib_components__WEBPACK_IMPORTED_MODULE_5__, shared_ui_kit__WEBPACK_IMPORTED_MODULE_6__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_3__, shared_lib_components__WEBPACK_IMPORTED_MODULE_5__, shared_ui_kit__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const MessageBar = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(({ placeholder , submit , onChange , form  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const onFileChange = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        if (e.target.files?.length) {
            const file = e.target.files[0];
            changeFile(file);
        }
    }, []);
    const submitForm = ()=>{
        setUrl(null);
        submit();
    };
    const changeFile = (file)=>{
        setUrl(file ? URL?.createObjectURL(file) : null);
        form.setValue("file", file);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_5__/* .WithSpring */ .xM, {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().message_bar),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_5__/* .Display */ .sS, {
                when: url,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().attached_image),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_6__/* .NextImage */ .oH, {
                            src: url,
                            def: shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_7__/* .DefaultAssets.MESSAGE */ .h9.MESSAGE
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .RxCross1 */ .yS, {
                            onClick: ()=>changeFile(null)
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: t("Message") || placeholder,
                maxLength: 150,
                onKeyDown: (0,features_SearchPage_lib_helpers__WEBPACK_IMPORTED_MODULE_9__/* .onEnter */ .g)(submit),
                autoComplete: "off",
                ...form.register("message", {
                    onChange
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().buttons),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().image_wrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .AiFillFileAdd */ .QZ, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                onChange: onFileChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().send),
                        onClick: submitForm,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiSend, {})
                    })
                ]
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;