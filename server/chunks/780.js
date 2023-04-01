"use strict";
exports.id = 780;
exports.ids = [780];
exports.modules = {

/***/ 70780:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var entities_Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78849);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var features_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53674);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64425);
/* harmony import */ var widgets_Profile_store_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89244);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11042);
/* harmony import */ var widgets_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46899);
/* harmony import */ var shared_lib_hooks_useBooleanState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8770);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57987);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62920);
/* harmony import */ var widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23302);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(47050);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([entities_Profile__WEBPACK_IMPORTED_MODULE_1__, features_Profile__WEBPACK_IMPORTED_MODULE_3__, widgets_Profile_store_selectors__WEBPACK_IMPORTED_MODULE_5__, shared_ui_material__WEBPACK_IMPORTED_MODULE_6__, widgets_Profile__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_9__, shared_lib_components__WEBPACK_IMPORTED_MODULE_10__, widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_11__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_12__]);
([entities_Profile__WEBPACK_IMPORTED_MODULE_1__, features_Profile__WEBPACK_IMPORTED_MODULE_3__, widgets_Profile_store_selectors__WEBPACK_IMPORTED_MODULE_5__, shared_ui_material__WEBPACK_IMPORTED_MODULE_6__, widgets_Profile__WEBPACK_IMPORTED_MODULE_7__, react_i18next__WEBPACK_IMPORTED_MODULE_9__, shared_lib_components__WEBPACK_IMPORTED_MODULE_10__, widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_11__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const ProfileHeader = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(()=>{
    const user = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(widgets_Profile_store_selectors__WEBPACK_IMPORTED_MODULE_5__/* .selectReformattedUser */ .l);
    const isMe = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(widgets_Profile__WEBPACK_IMPORTED_MODULE_7__/* .UserSelectors.isMe */ .G0.isMe);
    const editProfile = (0,shared_lib_hooks_useBooleanState__WEBPACK_IMPORTED_MODULE_8__/* .useBooleanState */ .z)();
    const profileInfo = (0,shared_lib_hooks_useBooleanState__WEBPACK_IMPORTED_MODULE_8__/* .useBooleanState */ .z)();
    const settings = (0,shared_lib_hooks_useBooleanState__WEBPACK_IMPORTED_MODULE_8__/* .useBooleanState */ .z)();
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)();
    const { subscribes , actions  } = (0,widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_11__/* .useAuthSocket */ .s)();
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
    (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useFilteredEffect */ .El)(()=>{
        subscribes.onStatusChanged((status)=>{
            dispatch(widgets_Profile__WEBPACK_IMPORTED_MODULE_7__/* .userActions.setStatus */ .hI.setStatus(status));
        });
        actions.subscribeToStatus(user.userId);
    }, [
        user.userId
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_10__/* .Display */ .sS, {
        when: user,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_6__/* .ContentModal */ .K5, {
                isOpened: editProfile.isOpen,
                close: editProfile.close,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_Profile__WEBPACK_IMPORTED_MODULE_7__/* .EditProfile */ .JI, {
                    close: editProfile.close
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_6__/* .SimpleModal */ .Yy, {
                isOpened: profileInfo.isOpen,
                close: profileInfo.close,
                title: `${t("Detailed_information")} (${user.userName})`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Profile__WEBPACK_IMPORTED_MODULE_1__/* .UserInfo */ .ao, {
                    user: user
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_6__/* .SimpleModal */ .Yy, {
                isOpened: settings.isOpen,
                close: settings.close,
                title: `${t("Settings")} (${user.userName})`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Profile__WEBPACK_IMPORTED_MODULE_1__/* .Settings */ .Zr, {
                    Logout: features_Profile__WEBPACK_IMPORTED_MODULE_3__/* .Logout */ .RD
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Profile__WEBPACK_IMPORTED_MODULE_1__/* .ProfileHeader */ .gF, {
                ChangeBackground: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(features_Profile__WEBPACK_IMPORTED_MODULE_3__/* .ChangeBackground */ .lD, {}),
                openProfile: editProfile.open,
                openInfo: profileInfo.open,
                openSettings: settings.open,
                user: user,
                isMe: isMe
            })
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;