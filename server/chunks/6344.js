exports.id = 6344;
exports.ids = [6344];
exports.modules = {

/***/ 47460:
/***/ ((module) => {

// Exports
module.exports = {
	"profile_header": "style_profile_header___I_u3",
	"profile_background": "style_profile_background__QC9yq",
	"image_wrapper": "style_image_wrapper__hF2TM",
	"info_block": "style_info_block__bVvnn",
	"avatar": "style_avatar__88wSz",
	"user_status": "style_user_status__3uz2X",
	"write_to_user": "style_write_to_user__AbmCu",
	"user_info": "style_user_info__SFrri",
	"user_name": "style_user_name__daPS6",
	"salesman": "style_salesman__PJFwa",
	"description": "style_description__qu9Hb",
	"change_profile": "style_change_profile__gEXoJ",
	"details": "style_details__PqOZb"
};


/***/ }),

/***/ 6344:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47460);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74918);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36857);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57987);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62920);
/* harmony import */ var shared_ui_kit_Components_UserStatus_UserStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78852);
/* harmony import */ var app_config_globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(90504);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, react_i18next__WEBPACK_IMPORTED_MODULE_3__, shared_lib_components__WEBPACK_IMPORTED_MODULE_4__, shared_ui_kit_Components_UserStatus_UserStatus__WEBPACK_IMPORTED_MODULE_5__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, react_i18next__WEBPACK_IMPORTED_MODULE_3__, shared_lib_components__WEBPACK_IMPORTED_MODULE_4__, shared_ui_kit_Components_UserStatus_UserStatus__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const ProfileHeaderTemplate = (props)=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
    const { ChangeBackground , openProfile , openInfo , user , isMe , openSettings  } = props;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().profile_header),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().profile_background),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .ProfileBackground */ .Om, {
                    src: user.background,
                    ChangeBackground: ChangeBackground,
                    openSettings: openSettings,
                    isMe: isMe
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().info_block),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().avatar),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .UserAvatar */ .Yt, {
                                src: user.userImage
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit_Components_UserStatus_UserStatus__WEBPACK_IMPORTED_MODULE_5__/* .UserStatus */ .J, {
                                status: user.status,
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().user_status)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().user_info),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_7___default()((_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().user_name), {
                                    [(_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().salesman)]: user.role === app_config_globals__WEBPACK_IMPORTED_MODULE_6__/* .UserRoles.SALESMAN */ .vX.SALESMAN
                                }),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_4__/* .Ternary */ .fV, {
                                        where: user.role === app_config_globals__WEBPACK_IMPORTED_MODULE_6__/* .UserRoles.CUSTOMER */ .vX.CUSTOMER,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .AiOutlineApi */ .TA, {}),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .GiTopHat */ .Ik, {})
                                        ]
                                    }),
                                    user.userName
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().description),
                                children: user.description
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                onClick: openInfo,
                                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().details),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .AiOutlineInfoCircle */ .oc, {}),
                                    t("Details")
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_4__/* .Display */ .sS, {
                        when: !isMe,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .WriteToUser */ .nD, {
                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().change_profile),
                            targetId: user.userId
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_4__/* .Display */ .sS, {
                        when: isMe,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().change_profile),
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "outlined_button",
                                onClick: openProfile,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_2__/* .BsPen */ .bB, {}),
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: t("Change_profile")
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileHeaderTemplate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;