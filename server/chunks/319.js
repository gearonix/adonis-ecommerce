"use strict";
exports.id = 319;
exports.ids = [319];
exports.modules = {

/***/ 91730:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ authActions),
  "G": () => (/* binding */ authSlice)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(75184);
;// CONCATENATED MODULE: ./src/shared/types/slices/auth.ts
const authInitialState = {
    isAuthorized: null,
    userId: null,
    avatar: null,
    firstName: null,
    email: null
};

;// CONCATENATED MODULE: ./src/widgets/Login/store/slice/authReducer.ts


const authReducer = (0,toolkit_.createSlice)({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        authorizeUser (state, { payload  }) {
            state.userId = payload.userId;
            state.avatar = payload.avatar;
            state.firstName = payload.firstName;
            state.email = payload.email;
            state.isAuthorized = true;
        },
        authorizationFailed (state) {
            state.isAuthorized = false;
        },
        logout () {
            return authInitialState;
        }
    }
});
const authActions = authReducer.actions;
const authSlice = authReducer.reducer;


/***/ }),

/***/ 46103:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ authorizeUser)
/* harmony export */ });
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46391);
/* harmony import */ var widgets_Login_store_slice_authReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91730);
/* harmony import */ var shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25498);
/* harmony import */ var features_Saved_store_thunks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(68553);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_2__, features_Saved_store_thunks__WEBPACK_IMPORTED_MODULE_3__]);
([shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_2__, features_Saved_store_thunks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const authorizeUser = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .createThunk */ .L3)("users/AUTHORIZE_USER", async (_, { dispatch , extra , rejectWithValue  })=>{
    const response = await extra.api.auth.getCurrentUser();
    const user = response.data;
    if (!user || (0,shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_2__/* .isError */ .V)(response)) {
        dispatch(widgets_Login_store_slice_authReducer__WEBPACK_IMPORTED_MODULE_1__/* .authActions.authorizationFailed */ .Y.authorizationFailed());
        return rejectWithValue("Please sign in");
    }
    dispatch(widgets_Login_store_slice_authReducer__WEBPACK_IMPORTED_MODULE_1__/* .authActions.authorizeUser */ .Y.authorizeUser(user));
    dispatch((0,features_Saved_store_thunks__WEBPACK_IMPORTED_MODULE_3__/* .getSavedProducts */ .gi)());
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ loginByGoogle),
/* harmony export */   "p": () => (/* binding */ loginUser)
/* harmony export */ });
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46391);
/* harmony import */ var shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25498);
/* harmony import */ var app_config_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94254);
/* harmony import */ var widgets_Login_store_thunks_autorizeUser_authorizeUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__, widgets_Login_store_thunks_autorizeUser_authorizeUser__WEBPACK_IMPORTED_MODULE_3__]);
([shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__, widgets_Login_store_thunks_autorizeUser_authorizeUser__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const loginUser = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .createThunk */ .L3)("users/LOGIN_USER", async (formValues, { dispatch , rejectWithValue , extra  })=>{
    const response = await extra.api.auth.loginUser(formValues);
    if ((0,shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__/* .isError */ .V)(response)) return rejectWithValue(app_config_globals__WEBPACK_IMPORTED_MODULE_2__/* .Exceptions.INCORRECT_PASSWORD */ .XM.INCORRECT_PASSWORD);
    await dispatch((0,widgets_Login_store_thunks_autorizeUser_authorizeUser__WEBPACK_IMPORTED_MODULE_3__/* .authorizeUser */ .m)());
});
const loginByGoogle = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .createThunk */ .L3)("users/LOGIN_BY_GOOGLE", async (jwt, { dispatch , rejectWithValue , extra  })=>{
    const response = await extra.api.auth.loginUserByGoogle(jwt);
    if ((0,shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__/* .isError */ .V)(response)) return rejectWithValue(app_config_globals__WEBPACK_IMPORTED_MODULE_2__/* .Exceptions.LOGIN_FAILED */ .XM.LOGIN_FAILED);
    await dispatch((0,widgets_Login_store_thunks_autorizeUser_authorizeUser__WEBPACK_IMPORTED_MODULE_3__/* .authorizeUser */ .m)());
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 30931:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ registerByGoogle),
/* harmony export */   "q": () => (/* binding */ makeRegistration)
/* harmony export */ });
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46391);
/* harmony import */ var shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25498);
/* harmony import */ var app_config_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94254);
/* harmony import */ var widgets_Login_store_thunks_autorizeUser_authorizeUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__, widgets_Login_store_thunks_autorizeUser_authorizeUser__WEBPACK_IMPORTED_MODULE_3__]);
([shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__, widgets_Login_store_thunks_autorizeUser_authorizeUser__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const makeRegistration = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .createThunk */ .L3)("users/MAKE_REGISTRATION", async (data, { dispatch , rejectWithValue , extra  })=>{
    const response = await extra.api.auth.registerUser(data);
    if ((0,shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__/* .isError */ .V)(response)) return rejectWithValue(app_config_globals__WEBPACK_IMPORTED_MODULE_2__/* .Exceptions.USER_ALREADY_EXISTS */ .XM.USER_ALREADY_EXISTS);
    await dispatch((0,widgets_Login_store_thunks_autorizeUser_authorizeUser__WEBPACK_IMPORTED_MODULE_3__/* .authorizeUser */ .m)());
});
const registerByGoogle = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .createThunk */ .L3)("users/MAKE_REGISTRATION_BY_GOOGLE", async (data, { dispatch , rejectWithValue , extra  })=>{
    const response = await extra.api.auth.registerUserByGoogle(data);
    if ((0,shared_lib_helpers_others_httpHelpers__WEBPACK_IMPORTED_MODULE_1__/* .isError */ .V)(response)) return rejectWithValue(app_config_globals__WEBPACK_IMPORTED_MODULE_2__/* .Exceptions.REGISTRATION_FAILED */ .XM.REGISTRATION_FAILED);
    await dispatch((0,widgets_Login_store_thunks_autorizeUser_authorizeUser__WEBPACK_IMPORTED_MODULE_3__/* .authorizeUser */ .m)());
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;