"use strict";
exports.id = 248;
exports.ids = [248];
exports.modules = {

/***/ 54299:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94349);
/* harmony import */ var shared_config_consts_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42462);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__]);
shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const EndPoint = shared_config_consts_endpoints__WEBPACK_IMPORTED_MODULE_1__/* ["default"].AUTH */ .Z.AUTH;
const authApi = {
    loginUser: (formValues)=>shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(EndPoint.login, formValues),
    getCurrentUser: ()=>shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get(EndPoint.getUser),
    registerUser: (formValues)=>shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(EndPoint.registration, formValues),
    clearAuthToken: ()=>shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"]["delete"] */ .Z["delete"](EndPoint.deleteToken),
    registerUserByGoogle: (data)=>shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(EndPoint.googleRegistration, data),
    loginUserByGoogle: (jwt)=>shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(EndPoint.googleLogin, {
            jwt
        })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authApi);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 71248:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AZ": () => (/* reexport safe */ _ui_CustomerForm__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "Fy": () => (/* reexport safe */ _ui_SalesmanForm__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "Gb": () => (/* reexport safe */ _store_slice_authReducer__WEBPACK_IMPORTED_MODULE_3__.G),
/* harmony export */   "U0": () => (/* reexport safe */ _ui_LoginForm__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "iJ": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "mQ": () => (/* reexport safe */ _store_thunks__WEBPACK_IMPORTED_MODULE_5__.mQ)
/* harmony export */ });
/* harmony import */ var _ui_LoginForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42734);
/* harmony import */ var _ui_CustomerForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62088);
/* harmony import */ var _ui_SalesmanForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39032);
/* harmony import */ var _store_slice_authReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26550);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(54299);
/* harmony import */ var _store_thunks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(79257);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_LoginForm__WEBPACK_IMPORTED_MODULE_0__, _ui_CustomerForm__WEBPACK_IMPORTED_MODULE_1__, _ui_SalesmanForm__WEBPACK_IMPORTED_MODULE_2__, _api__WEBPACK_IMPORTED_MODULE_4__, _store_thunks__WEBPACK_IMPORTED_MODULE_5__]);
([_ui_LoginForm__WEBPACK_IMPORTED_MODULE_0__, _ui_CustomerForm__WEBPACK_IMPORTED_MODULE_1__, _ui_SalesmanForm__WEBPACK_IMPORTED_MODULE_2__, _api__WEBPACK_IMPORTED_MODULE_4__, _store_thunks__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tt": () => (/* binding */ customerSchema),
/* harmony export */   "ZN": () => (/* binding */ salesmanSchema),
/* harmony export */   "dm": () => (/* binding */ loginSchema)
/* harmony export */ });
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76460);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__]);
shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const creator = new shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__/* .FieldCreator */ .sm();
const formTemplate = {
    email: creator.email(),
    password: creator.field("Password", 8, 16)
};
const loginSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape(formTemplate);
// @ts-ignore
const customerSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    ...formTemplate,
    repeatPassword: creator.password()
});
const salesmanSchema = yup__WEBPACK_IMPORTED_MODULE_1__.object().shape({
    ...formTemplate,
    firstName: creator.field("Name"),
    lastName: creator.field("Surname"),
    repeatPassword: creator.password()
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useSubmitForm)
/* harmony export */ });
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46391);
/* harmony import */ var widgets_Login_store_thunks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79257);
/* harmony import */ var shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25498);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Login_store_thunks__WEBPACK_IMPORTED_MODULE_1__, shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_2__]);
([widgets_Login_store_thunks__WEBPACK_IMPORTED_MODULE_1__, shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const isRegistration = (formValues)=>{
    return "repeatPassword" in formValues;
};
const useSubmitForm = (setError, role)=>{
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .useDispatch */ .I0)();
    return async (formValues)=>{
        let response;
        if (!isRegistration(formValues)) {
            response = await dispatch((0,widgets_Login_store_thunks__WEBPACK_IMPORTED_MODULE_1__/* .loginUser */ .pH)(formValues));
        } else {
            response = await dispatch((0,widgets_Login_store_thunks__WEBPACK_IMPORTED_MODULE_1__/* .makeRegistration */ .qe)({
                ...formValues,
                role: role
            }));
        }
        const onError = (0,shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_2__/* .onThunkError */ .i)(response);
        onError(()=>setError("password", {
                message: response.payload
            }));
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 62088:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16291);
/* harmony import */ var _lib_formSchemes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4358);
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8841);
/* harmony import */ var app_config_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(94254);
/* harmony import */ var _GoogleButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57631);
/* harmony import */ var shared_lib_hooks_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83786);
/* harmony import */ var entities_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13958);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_material__WEBPACK_IMPORTED_MODULE_1__, _lib_formSchemes__WEBPACK_IMPORTED_MODULE_2__, _lib_hooks__WEBPACK_IMPORTED_MODULE_3__, _GoogleButton__WEBPACK_IMPORTED_MODULE_5__, shared_lib_hooks_useForm__WEBPACK_IMPORTED_MODULE_6__, entities_Auth__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_8__]);
([shared_ui_material__WEBPACK_IMPORTED_MODULE_1__, _lib_formSchemes__WEBPACK_IMPORTED_MODULE_2__, _lib_hooks__WEBPACK_IMPORTED_MODULE_3__, _GoogleButton__WEBPACK_IMPORTED_MODULE_5__, shared_lib_hooks_useForm__WEBPACK_IMPORTED_MODULE_6__, entities_Auth__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const CustomerForm = ()=>{
    const { form , reg  } = (0,shared_lib_hooks_useForm__WEBPACK_IMPORTED_MODULE_6__/* .useForm */ .c)(_lib_formSchemes__WEBPACK_IMPORTED_MODULE_2__/* .customerSchema */ .Tt);
    const onSubmit = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useSubmitForm */ ._)(form.setError, app_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .UserRoles.CUSTOMER */ .vX.CUSTOMER);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(entities_Auth__WEBPACK_IMPORTED_MODULE_7__/* .AuthTemplate */ .h, {
        submit: form.handleSubmit(onSubmit),
        GoogleButton: _GoogleButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
        role: app_config_globals__WEBPACK_IMPORTED_MODULE_4__/* .UserRoles.CUSTOMER */ .vX.CUSTOMER,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_1__/* .HeadField */ .uo, {
                title: t("Email"),
                values: reg("email")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_1__/* .HeadField */ .uo, {
                title: t("Password"),
                isPassword: true,
                values: reg("password")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_1__/* .HeadField */ .uo, {
                title: t("Repeat_password"),
                isPassword: true,
                values: reg("repeatPassword")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomerForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42734:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16291);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61908);
/* harmony import */ var _lib_formSchemes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4358);
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8841);
/* harmony import */ var _GoogleButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57631);
/* harmony import */ var shared_lib_helpers_formHelpers_createFieldValues__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(79191);
/* harmony import */ var entities_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13958);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_material__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, _lib_formSchemes__WEBPACK_IMPORTED_MODULE_4__, _lib_hooks__WEBPACK_IMPORTED_MODULE_5__, _GoogleButton__WEBPACK_IMPORTED_MODULE_6__, entities_Auth__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_8__]);
([shared_ui_material__WEBPACK_IMPORTED_MODULE_1__, react_hook_form__WEBPACK_IMPORTED_MODULE_2__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__, _lib_formSchemes__WEBPACK_IMPORTED_MODULE_4__, _lib_hooks__WEBPACK_IMPORTED_MODULE_5__, _GoogleButton__WEBPACK_IMPORTED_MODULE_6__, entities_Auth__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const LoginForm = ()=>{
    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_2__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_3__.yupResolver)(_lib_formSchemes__WEBPACK_IMPORTED_MODULE_4__/* .loginSchema */ .dm)
    });
    const onSubmit = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useSubmitForm */ ._)(form.setError);
    const reg = (0,shared_lib_helpers_formHelpers_createFieldValues__WEBPACK_IMPORTED_MODULE_9__/* .createFieldValues */ .D)(form);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(entities_Auth__WEBPACK_IMPORTED_MODULE_7__/* .AuthTemplate */ .h, {
        submit: form.handleSubmit(onSubmit),
        GoogleButton: _GoogleButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_1__/* .HeadField */ .uo, {
                title: t("Email"),
                values: reg("email")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_1__/* .HeadField */ .uo, {
                title: t("Password"),
                isPassword: true,
                values: reg("password")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 39032:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var entities_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13958);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16291);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45641);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61908);
/* harmony import */ var _lib_formSchemes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4358);
/* harmony import */ var _lib_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8841);
/* harmony import */ var app_config_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(94254);
/* harmony import */ var widgets_Login_ui_GoogleButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57631);
/* harmony import */ var shared_lib_helpers_formHelpers_createFieldValues__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79191);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([entities_Auth__WEBPACK_IMPORTED_MODULE_1__, shared_ui_material__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, _lib_formSchemes__WEBPACK_IMPORTED_MODULE_5__, _lib_hooks__WEBPACK_IMPORTED_MODULE_6__, widgets_Login_ui_GoogleButton__WEBPACK_IMPORTED_MODULE_8__, react_i18next__WEBPACK_IMPORTED_MODULE_9__]);
([entities_Auth__WEBPACK_IMPORTED_MODULE_1__, shared_ui_material__WEBPACK_IMPORTED_MODULE_2__, react_hook_form__WEBPACK_IMPORTED_MODULE_3__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__, _lib_formSchemes__WEBPACK_IMPORTED_MODULE_5__, _lib_hooks__WEBPACK_IMPORTED_MODULE_6__, widgets_Login_ui_GoogleButton__WEBPACK_IMPORTED_MODULE_8__, react_i18next__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const SalesmanForm = ()=>{
    const form = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_4__.yupResolver)(_lib_formSchemes__WEBPACK_IMPORTED_MODULE_5__/* .salesmanSchema */ .ZN)
    });
    const onSubmit = (0,_lib_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useSubmitForm */ ._)(form.setError, app_config_globals__WEBPACK_IMPORTED_MODULE_7__/* .UserRoles.SALESMAN */ .vX.SALESMAN);
    const reg = (0,shared_lib_helpers_formHelpers_createFieldValues__WEBPACK_IMPORTED_MODULE_10__/* .createFieldValues */ .D)(form);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(entities_Auth__WEBPACK_IMPORTED_MODULE_1__/* .AuthTemplate */ .h, {
        submit: form.handleSubmit(onSubmit),
        GoogleButton: widgets_Login_ui_GoogleButton__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,
        role: app_config_globals__WEBPACK_IMPORTED_MODULE_7__/* .UserRoles.SALESMAN */ .vX.SALESMAN,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .HeadField */ .uo, {
                title: t("Name"),
                values: reg("firstName")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .HeadField */ .uo, {
                title: t("Surname"),
                values: reg("lastName")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .HeadField */ .uo, {
                title: t("Email"),
                values: reg("email")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .HeadField */ .uo, {
                title: t("Password"),
                isPassword: true,
                values: reg("password")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .HeadField */ .uo, {
                title: t("Repeat_password"),
                isPassword: true,
                values: reg("repeatPassword")
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SalesmanForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;