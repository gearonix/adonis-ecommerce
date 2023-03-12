exports.id = 958;
exports.ids = [958];
exports.modules = {

/***/ 73084:
/***/ ((module) => {

// Exports
module.exports = {
	"login_form": "style_login_form__uEfrS",
	"wrapper": "style_wrapper__ImfRr",
	"title": "style_title__CChmZ",
	"grey_line": "style_grey_line__sq0y9",
	"account_link": "style_account_link__C_85V",
	"login_button": "style_login_button__R7wvs"
};


/***/ }),

/***/ 48856:
/***/ ((module) => {

// Exports
module.exports = {
	"signup_main": "style_signup_main__iqtCj",
	"wrapper": "style_wrapper___AHPO",
	"home": "style_home__NRvEM",
	"title": "style_title__rSQnb",
	"choice_container": "style_choice_container__qbt5q",
	"choice_block": "style_choice_block__0swAD"
};


/***/ }),

/***/ 13958:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* reexport safe */ _ui_Choice_SignupChoice__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "h": () => (/* reexport safe */ _ui_AuthTemplate_AuthTemplate__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _ui_AuthTemplate_AuthTemplate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52193);
/* harmony import */ var _ui_Choice_SignupChoice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81821);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_AuthTemplate_AuthTemplate__WEBPACK_IMPORTED_MODULE_0__, _ui_Choice_SignupChoice__WEBPACK_IMPORTED_MODULE_1__]);
([_ui_AuthTemplate_AuthTemplate__WEBPACK_IMPORTED_MODULE_0__, _ui_Choice_SignupChoice__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47413:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ getUIText)
/* harmony export */ });
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22021);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([i18next__WEBPACK_IMPORTED_MODULE_0__]);
i18next__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getUIText = (mode)=>{
    return mode == "login" ? {
        title: (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)("Log_in"),
        linkText: (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)("Dont_have"),
        linkHref: "/signup",
        blueLinkText: (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)("Register_now")
    } : {
        title: (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)("Register_now"),
        linkText: (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)("Already_have"),
        linkHref: "/login",
        blueLinkText: (0,i18next__WEBPACK_IMPORTED_MODULE_0__.t)("Log_in")
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52193:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73084);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2487);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47413);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var widgets_Login_ui_GoogleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(57631);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_helpers__WEBPACK_IMPORTED_MODULE_2__, widgets_Login_ui_GoogleButton__WEBPACK_IMPORTED_MODULE_4__]);
([_lib_helpers__WEBPACK_IMPORTED_MODULE_2__, widgets_Login_ui_GoogleButton__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const RegTemplate = ({ children , submit , role  })=>{
    const mode = !!role ? "signup" : "login";
    const { title , linkHref , linkText , blueLinkText  } = (0,_lib_helpers__WEBPACK_IMPORTED_MODULE_2__/* .getUIText */ .u)(mode);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().login_form),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                    children: title
                }),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("primary_button", (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().login_button)),
                    onClick: submit,
                    children: title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().grey_line)
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_Login_ui_GoogleButton__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    role: role
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h4", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().account_link),
                    children: [
                        linkText,
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            className: "hover_link",
                            href: linkHref,
                            children: [
                                "  ",
                                blueLinkText,
                                " "
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegTemplate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 81821:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48856);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2487);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(78372);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72665);
/* harmony import */ var shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42740);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__, react_i18next__WEBPACK_IMPORTED_MODULE_5__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__, react_i18next__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const SignupChoice = ()=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().signup_main),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().home),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_4__/* .routes.MAIN */ ._.MAIN,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .AiOutlineHome */ .iq, {})
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().title),
                    children: t("Who_are")
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().choice_container),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_4__/* .routes.SIGNUP_CUSTOMER */ ._.SIGNUP_CUSTOMER,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().choice_block),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .AiOutlineApi */ .TA, {})
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_4__/* .routes.SIGNUP_SALESMAN */ ._.SIGNUP_SALESMAN,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_6___default().choice_block),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .GiTopHat */ .Ik, {})
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_4__/* .routes.SIGNUP_CUSTOMER */ ._.SIGNUP_CUSTOMER,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                                w: "150px",
                                color: "greyBordered",
                                children: t("Customer")
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_4__/* .routes.SIGNUP_SALESMAN */ ._.SIGNUP_SALESMAN,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                                w: "150px",
                                children: t("Salesman")
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        t("Already_have"),
                        " ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/login",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: t("Log_in")
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupChoice);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57631:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16999);
/* harmony import */ var _react_oauth_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_oauth_google__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_thunks_makeRegistration_makeRegistration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30931);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46391);
/* harmony import */ var _store_thunks_loginUser_loginUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43029);
/* harmony import */ var shared_config_consts_themes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(81060);
/* harmony import */ var shared_lib_hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(62757);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_thunks_makeRegistration_makeRegistration__WEBPACK_IMPORTED_MODULE_2__, _store_thunks_loginUser_loginUser__WEBPACK_IMPORTED_MODULE_4__]);
([_store_thunks_makeRegistration_makeRegistration__WEBPACK_IMPORTED_MODULE_2__, _store_thunks_loginUser_loginUser__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const GoogleButton = ({ role  })=>{
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useDispatch */ .I0)();
    const { theme  } = (0,shared_lib_hooks_useTheme__WEBPACK_IMPORTED_MODULE_6__/* .useTheme */ .F)();
    const onSuccess = async ({ credential  })=>{
        if (role) {
            dispatch((0,_store_thunks_makeRegistration_makeRegistration__WEBPACK_IMPORTED_MODULE_2__/* .registerByGoogle */ .O)({
                jwt: credential,
                role
            }));
        } else {
            dispatch((0,_store_thunks_loginUser_loginUser__WEBPACK_IMPORTED_MODULE_4__/* .loginByGoogle */ .P)(credential));
        }
    };
    const onError = ()=>console.error("Login by google failed.");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_react_oauth_google__WEBPACK_IMPORTED_MODULE_1__.GoogleLogin, {
        onSuccess: onSuccess,
        onError: onError,
        size: "large",
        width: "310",
        theme: theme === shared_config_consts_themes__WEBPACK_IMPORTED_MODULE_5__/* .Theme.LIGHT */ .Q.LIGHT ? undefined : "filled_black"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GoogleButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;