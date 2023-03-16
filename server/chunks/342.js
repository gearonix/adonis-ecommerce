exports.id = 342;
exports.ids = [342];
exports.modules = {

/***/ 29266:
/***/ ((module) => {

// Exports
module.exports = {
	"messages_block": "style_messages_block__gDwSV",
	"messages_wrapper": "style_messages_wrapper__Bo_dp",
	"scrollToBottom": "style_scrollToBottom__n1Lxx",
	"default_chat_image": "style_default_chat_image__W7LEu",
	"default_title": "style_default_title__pTFnf"
};


/***/ }),

/***/ 40005:
/***/ ((module) => {

// Exports
module.exports = {
	"messages_header": "style_messages_header__kcOyo"
};


/***/ }),

/***/ 17209:
/***/ ((module) => {

// Exports
module.exports = {
	"message_bar": "style_message_bar__09neC",
	"buttons": "style_buttons__4E9Xr",
	"image_wrapper": "style_image_wrapper__PWe2o",
	"send": "style_send__hN2nS"
};


/***/ }),

/***/ 97036:
/***/ ((module) => {

// Exports
module.exports = {
	"user": "style_user__3Wh7I",
	"wrapper": "style_wrapper__VVXaW",
	"image": "style_image___kVeh",
	"info": "style_info__RDPxo",
	"time": "style_time__2uSq0",
	"new_message": "style_new_message__5mz_0",
	"selected": "style_selected__0s_sQ"
};


/***/ }),

/***/ 78480:
/***/ ((module) => {

// Exports
module.exports = {
	"user_info_wrapper": "style_user_info_wrapper__53tOt",
	"image": "style_image__NDhR4",
	"info": "style_info__ugE7g",
	"online": "style_online__qfj59"
};


/***/ }),

/***/ 77423:
/***/ ((module) => {

// Exports
module.exports = {
	"messenger_aside": "style_messenger_aside__TrRte",
	"nothing_found": "style_nothing_found__OadCk"
};


/***/ }),

/***/ 40762:
/***/ ((module) => {

// Exports
module.exports = {
	"messages_main": "style_messages_main__UiS2u",
	"wrapper": "style_wrapper__DSPKV"
};


/***/ }),

/***/ 93002:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useNewMessage)
/* harmony export */ });
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17418);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70698);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Login__WEBPACK_IMPORTED_MODULE_1__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__]);
([widgets_Login__WEBPACK_IMPORTED_MODULE_1__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useNewMessage = ()=>{
    const selectedRoom = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__/* .MessengerSelectors.selectedId */ ._5.selectedId);
    const userId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .useSelector */ .v9)(widgets_Login__WEBPACK_IMPORTED_MODULE_1__/* .AuthSelectors.userId */ .ce.userId);
    return (message)=>{
        return message.senderId !== userId && message.roomId !== selectedRoom;
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74724:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H_": () => (/* reexport safe */ _store_notify_selectors__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "Io": () => (/* reexport safe */ _hooks_useNewMessage__WEBPACK_IMPORTED_MODULE_2__.I),
/* harmony export */   "Ld": () => (/* reexport safe */ _store_notificationsReducer__WEBPACK_IMPORTED_MODULE_1__.L),
/* harmony export */   "cx": () => (/* reexport safe */ _store_notificationsReducer__WEBPACK_IMPORTED_MODULE_1__.c),
/* harmony export */   "x0": () => (/* reexport safe */ _ui_WithNotifications__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "x7": () => (/* reexport safe */ _toasts_NewMessage__WEBPACK_IMPORTED_MODULE_3__.x)
/* harmony export */ });
/* harmony import */ var _ui_WithNotifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33210);
/* harmony import */ var _store_notificationsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95236);
/* harmony import */ var _hooks_useNewMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93002);
/* harmony import */ var _toasts_NewMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(64436);
/* harmony import */ var _store_notify_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6930);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_WithNotifications__WEBPACK_IMPORTED_MODULE_0__, _hooks_useNewMessage__WEBPACK_IMPORTED_MODULE_2__, _toasts_NewMessage__WEBPACK_IMPORTED_MODULE_3__]);
([_ui_WithNotifications__WEBPACK_IMPORTED_MODULE_0__, _hooks_useNewMessage__WEBPACK_IMPORTED_MODULE_2__, _toasts_NewMessage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ notifySlice),
/* harmony export */   "c": () => (/* binding */ notifyActions)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = [];
const notificationsReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "notifications",
    initialState,
    reducers: {
        addNotification (state, { payload  }) {
            const ids = state.map(({ messageId  })=>messageId);
            if (!ids.includes(payload.messageId)) {
                state.push(payload);
            }
        },
        clearNotifications (state, { payload  }) {
            return state.filter((message)=>message.roomId !== payload);
        }
    }
});
const notifyActions = notificationsReducer.actions;
const notifySlice = notificationsReducer.reducer;


/***/ }),

/***/ 6930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const NotifySelectors = {
    selectByRooms: (rooms)=>({ notifications  })=>{
            return rooms.map((room)=>{
                return notifications.filter((message)=>message.roomId === room.roomId);
            });
        },
    notifications: ({ notifications  })=>notifications
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotifySelectors);


/***/ }),

/***/ 64436:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ NewMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82103);
/* harmony import */ var shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13048);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20926);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__]);
shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const NewMessage = ({ message  })=>{
    const helpers = new shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__/* .Helpers */ .ZH();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: {
            pathname: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_2__/* .routes.MESSENGER */ ._.MESSENGER,
            query: {
                targetId: message.senderId
            }
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                "\uD83E\uDD84 ",
                helpers.toNormalName(message.user),
                ": ",
                helpers.cropped(message.messageText, 13)
            ]
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33210:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_providers_Notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74724);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35632);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59684);
/* harmony import */ var widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72921);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17418);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([app_providers_Notifications__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_2__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_4__, widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_5__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__]);
([app_providers_Notifications__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_2__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_4__, widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_5__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const WithNotifications = ()=>{
    const { theme  } = (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .Fg)();
    const { subscribes  } = (0,widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_5__/* .useAuthSocket */ .s)();
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_6__/* .useDispatch */ .I0)();
    const selectedRoom = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_6__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__/* .MessengerSelectors.selectedId */ ._5.selectedId);
    const isMessageValid = (0,app_providers_Notifications__WEBPACK_IMPORTED_MODULE_1__/* .useNewMessage */ .Io)();
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        subscribes.onReceivedNotification((message)=>{
            if (isMessageValid(message)) {
                (0,react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(app_providers_Notifications__WEBPACK_IMPORTED_MODULE_1__/* .NewMessage */ .x7, {
                    message: message
                }));
                dispatch(app_providers_Notifications__WEBPACK_IMPORTED_MODULE_1__/* .notifyActions.addNotification */ .cx.addNotification(message));
            }
        });
    }, [
        selectedRoom
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
        position: "bottom-right",
        theme: theme,
        limit: 1,
        autoClose: 1500
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WithNotifications);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AK": () => (/* reexport safe */ _ui_Header_MessengerHeaderTemplate__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "S1": () => (/* reexport safe */ _ui_User_MessengerUser__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "ao": () => (/* reexport safe */ _ui_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "cF": () => (/* reexport safe */ _ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "cb": () => (/* reexport safe */ _ui_MessageBar_MessageBar__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46709);
/* harmony import */ var _ui_User_MessengerUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20237);
/* harmony import */ var _ui_Header_MessengerHeaderTemplate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(34775);
/* harmony import */ var _ui_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6747);
/* harmony import */ var _ui_MessageBar_MessageBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19271);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_0__, _ui_User_MessengerUser__WEBPACK_IMPORTED_MODULE_1__, _ui_Header_MessengerHeaderTemplate__WEBPACK_IMPORTED_MODULE_2__, _ui_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_3__, _ui_MessageBar_MessageBar__WEBPACK_IMPORTED_MODULE_4__]);
([_ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_0__, _ui_User_MessengerUser__WEBPACK_IMPORTED_MODULE_1__, _ui_Header_MessengerHeaderTemplate__WEBPACK_IMPORTED_MODULE_2__, _ui_UserInfo_UserInfo__WEBPACK_IMPORTED_MODULE_3__, _ui_MessageBar_MessageBar__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33183:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getMembers)
/* harmony export */ });
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__]);
shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getMembers = (room)=>{
    const helpers = new shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__/* .Helpers */ .ZH();
    return helpers.cropped([
        helpers.toNormalName(room.invitedUser),
        helpers.toNormalName(room.starterUser)
    ].join(", "), 13);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 46709:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ DefaultChat),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29266);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21519);
/* harmony import */ var shared_lib_hooks_useBottomScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59033);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7562);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20926);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13048);
/* harmony import */ var shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(567);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59684);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, shared_lib_components__WEBPACK_IMPORTED_MODULE_3__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_7__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, shared_lib_components__WEBPACK_IMPORTED_MODULE_3__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const MessengerContent = ({ messages , userId  })=>{
    const scrollable = (0,shared_lib_hooks_useBottomScroll__WEBPACK_IMPORTED_MODULE_2__/* .useBottomScroll */ .J)(messages);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().messages_block),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().messages_wrapper),
                onScroll: scrollable.onScroll,
                ref: scrollable.containerRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .TimeLabel */ .rf, {}),
                    messages.map((message)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .Message */ .v0, {
                            message: message,
                            isMine: message.senderId === userId
                        }, message.messageId);
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: scrollable.bottomRef
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().bottomWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_3__/* .Display */ .sS, {
                    when: scrollable.scrollBottomSize > 100,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .ScrollToBottom */ .aK, {
                        onClick: scrollable.scrollToBottom
                    })
                })
            })
        ]
    });
};
const DefaultChat = ()=>{
    const toShow = (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useTimeout */ .KS)(300);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_3__/* .Display */ .sS, {
        when: toShow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_3__/* .WithSpring */ .xM, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().default_chat_image),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .NextImage */ .oH, {
                        src: shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_6__/* .Assets.CHAT */ .de.CHAT
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_8___default().default_title),
                    children: [
                        "Choose a chat or create a ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__/* .routes.USERS */ ._.USERS,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "new one"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34775:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var entities_Messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35505);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40005);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13048);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([entities_Messenger__WEBPACK_IMPORTED_MODULE_1__]);
entities_Messenger__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const MessengerHeaderTemplate = ({ user , label  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const onClick = ()=>{
        if (user?.userId) {
            router.push(`${shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_3__/* .routes.USERS */ ._.USERS}/${user.userId}`);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_4___default().messages_header),
        onClick: onClick,
        children: user && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Messenger__WEBPACK_IMPORTED_MODULE_1__/* .UserInfo */ .ao, {
            user: user,
            label: label
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerHeaderTemplate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17209);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83720);
/* harmony import */ var features_SearchPage_lib_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(33999);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57987);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7562);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_i18next__WEBPACK_IMPORTED_MODULE_2__, shared_lib_components__WEBPACK_IMPORTED_MODULE_4__]);
([react_i18next__WEBPACK_IMPORTED_MODULE_2__, shared_lib_components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const MessageBar = ({ placeholder , submit , onChange , form  })=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
    const onFileChange = (e)=>{
        if (e.target.files?.length) {
            form.setValue("file", e.target.files[0]);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_4__/* .WithSpring */ .xM, {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().message_bar),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                placeholder: t("Message") || placeholder,
                maxLength: 150,
                onKeyDown: (0,features_SearchPage_lib_helpers__WEBPACK_IMPORTED_MODULE_6__/* .onEnter */ .g)(submit),
                autoComplete: "off",
                ...form.register("message", {
                    onChange
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttons),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().image_wrapper),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_1__/* .AiFillFileAdd */ .QZ, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                onChange: onFileChange
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_5___default().send),
                        onClick: submit,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiSend, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessageBar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(97036);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21519);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82103);
/* harmony import */ var shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var entities_Messenger_lib_getMembers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33183);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7562);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_2__, entities_Messenger_lib_getMembers__WEBPACK_IMPORTED_MODULE_5__, shared_lib_components__WEBPACK_IMPORTED_MODULE_6__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_2__, entities_Messenger_lib_getMembers__WEBPACK_IMPORTED_MODULE_5__, shared_lib_components__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const MessengerUser = ({ room , switchRoom , selected , user , notification  })=>{
    const helpers = new shared_lib_helpers__WEBPACK_IMPORTED_MODULE_2__/* .Helpers */ .ZH();
    const notify = notification?.at(-1);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: ()=>switchRoom(room.roomId),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().user), {
                [(_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().selected)]: selected
            }),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().image),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .NextImage */ .oH, {
                            src: user.avatar,
                            def: shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_3__/* .DefaultAssets.AVATAR */ .h9.AVATAR
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().info),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                children: helpers.toNormalName(user)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_6__/* .Ternary */ .fV, {
                                where: notify?.messageText,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "New message: ",
                                            notify?.messageText
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "Members: ",
                                            (0,entities_Messenger_lib_getMembers__WEBPACK_IMPORTED_MODULE_5__/* .getMembers */ .Z)(room)
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().time),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_6__/* .Display */ .sS, {
                                when: notify?.creationDate,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: helpers.reformatMysqlDate(notify?.creationDate, "HH:mm")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_6__/* .Display */ .sS, {
                                when: notification.length,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().new_message),
                                    children: notification?.length
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerUser);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6747:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(78480);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21519);
/* harmony import */ var shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(567);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82103);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7562);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var shared_config_consts_others__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(10301);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__, shared_lib_components__WEBPACK_IMPORTED_MODULE_4__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__, shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__, shared_lib_components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const UserInfo = ({ user , label  })=>{
    const helpers = new shared_lib_helpers__WEBPACK_IMPORTED_MODULE_3__/* .Helpers */ .ZH();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_4__/* .WithSpring */ .xM, {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().user_info_wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().image),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_1__/* .NextImage */ .oH, {
                    src: user.avatar,
                    def: shared_config_consts_assets__WEBPACK_IMPORTED_MODULE_2__/* .DefaultAssets.AVATAR */ .h9.AVATAR
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().info),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: helpers.toNormalName(user)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
                            [(_style_module_scss__WEBPACK_IMPORTED_MODULE_7___default().online)]: label === shared_config_consts_others__WEBPACK_IMPORTED_MODULE_6__/* .UserStatus.ONLINE */ .J.ONLINE
                        }),
                        children: label
                    })
                ]
            })
        ]
    }, user.userId);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 31137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* reexport safe */ _ui_SearchMessages_SearchMessages__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "Z": () => (/* reexport safe */ _ui_SearchUsers_SearchUsers__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _ui_SearchMessages_SearchMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61898);
/* harmony import */ var _ui_SearchUsers_SearchUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22053);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_SearchUsers_SearchUsers__WEBPACK_IMPORTED_MODULE_1__]);
_ui_SearchUsers_SearchUsers__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 61898:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83720);


const SearchMessages = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_icons__WEBPACK_IMPORTED_MODULE_1__/* .AiOutlineSearch */ .RB, {
            color: "#8B96A5",
            size: "24px"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchMessages);


/***/ }),

/***/ 22053:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_ui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(94628);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59684);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17418);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_material__WEBPACK_IMPORTED_MODULE_2__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__]);
([shared_ui_material__WEBPACK_IMPORTED_MODULE_2__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const SearchUsers = ()=>{
    const { reg , watch , getValues  } = (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useForm */ .cI)(null);
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
    const onChange = ()=>{
        const filter = getValues().search;
        dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__/* .messengerActions.changeRoomsFilter */ ._I.changeRoomsFilter(filter));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const sub = watch(onChange);
        return ()=>sub.unsubscribe();
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            width: "90%",
            margin: "0 auto"
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_material__WEBPACK_IMPORTED_MODULE_2__/* .SearchInput */ .Mj, {
            values: reg("search")
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchUsers);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 55999:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ messengerApi)
/* harmony export */ });
/* harmony import */ var shared_config_consts_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39580);
/* harmony import */ var shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21865);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_1__]);
shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const endpoint = shared_config_consts_endpoints__WEBPACK_IMPORTED_MODULE_0__/* ["default"].MESSENGER */ .Z.MESSENGER;
const messengerApi = {
    getRooms (userId) {
        return shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].put */ .Z.put(endpoint.getRooms, {
            userId
        });
    },
    selectRoom (roomId, userId) {
        return shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_1__/* ["default"].put */ .Z.put(`${endpoint.selectRoom}/${roomId}`, {
            userId
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 19342:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AD": () => (/* reexport safe */ _store_slice_messengerReducer__WEBPACK_IMPORTED_MODULE_7__.A),
/* harmony export */   "FZ": () => (/* reexport safe */ _ui_Aside_MessengerAside__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   "JZ": () => (/* reexport safe */ _store_selectors_others_selectFilteredRooms__WEBPACK_IMPORTED_MODULE_9__.J),
/* harmony export */   "Jb": () => (/* reexport safe */ _socket_provider_SocketContext__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "Mn": () => (/* reexport safe */ _ui_Header_MessengerHeader__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "_5": () => (/* reexport safe */ _store_selectors_messenger_selectors__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "_I": () => (/* reexport safe */ _store_slice_messengerReducer__WEBPACK_IMPORTED_MODULE_7__._),
/* harmony export */   "bC": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_6__.b),
/* harmony export */   "cF": () => (/* reexport safe */ _ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "oA": () => (/* reexport safe */ _store_selectors_others_selectOpponentUser__WEBPACK_IMPORTED_MODULE_10__.o),
/* harmony export */   "wP": () => (/* reexport safe */ _socket_provider_SocketProvider__WEBPACK_IMPORTED_MODULE_3__.Z)
/* harmony export */ });
/* harmony import */ var _ui_Aside_MessengerAside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76927);
/* harmony import */ var _ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88113);
/* harmony import */ var _ui_Header_MessengerHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45395);
/* harmony import */ var _socket_provider_SocketProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61910);
/* harmony import */ var _socket_provider_SocketContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90823);
/* harmony import */ var _ui_MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40638);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(55999);
/* harmony import */ var _store_slice_messengerReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(86621);
/* harmony import */ var _store_selectors_messenger_selectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33302);
/* harmony import */ var _store_selectors_others_selectFilteredRooms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57148);
/* harmony import */ var _store_selectors_others_selectOpponentUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79989);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_Aside_MessengerAside__WEBPACK_IMPORTED_MODULE_0__, _ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_1__, _ui_Header_MessengerHeader__WEBPACK_IMPORTED_MODULE_2__, _socket_provider_SocketProvider__WEBPACK_IMPORTED_MODULE_3__, _ui_MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_5__, _api__WEBPACK_IMPORTED_MODULE_6__, _store_selectors_others_selectFilteredRooms__WEBPACK_IMPORTED_MODULE_9__]);
([_ui_Aside_MessengerAside__WEBPACK_IMPORTED_MODULE_0__, _ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_1__, _ui_Header_MessengerHeader__WEBPACK_IMPORTED_MODULE_2__, _socket_provider_SocketProvider__WEBPACK_IMPORTED_MODULE_3__, _ui_MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_5__, _api__WEBPACK_IMPORTED_MODULE_6__, _store_selectors_others_selectFilteredRooms__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getRoomByTargetId)
/* harmony export */ });
const getRoomByTargetId = (targetId, rooms)=>{
    const room = rooms.find((room)=>room.invitedId === Number(targetId) || room.starterId === Number(targetId));
    return room?.roomId;
};


/***/ }),

/***/ 41878:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ selectOpponentUser)
/* harmony export */ });
const selectOpponentUser = (userId)=>(room)=>{
        return room.starterId === userId ? room.invitedUser : room.starterUser;
    };


/***/ }),

/***/ 87971:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _useMessengerSocket__WEBPACK_IMPORTED_MODULE_0__._)
/* harmony export */ });
/* harmony import */ var _useMessengerSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10298);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useMessengerSocket__WEBPACK_IMPORTED_MODULE_0__]);
_useMessengerSocket__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10298:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useMessengerSocket)
/* harmony export */ });
/* harmony import */ var widgets_Messenger_socket_createSocketApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72853);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19342);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__]);
widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useMessengerSocket = ()=>{
    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__/* .SocketContext */ .Jb);
    return (0,widgets_Messenger_socket_createSocketApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(socket);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 13368:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useTyping)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17418);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19342);
/* harmony import */ var widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(87971);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_3__]);
([widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const useTyping = ()=>{
    const roomId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_1__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__/* .MessengerSelectors.selectedId */ ._5.selectedId);
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_1__/* .useDispatch */ .I0)();
    const timeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    const [isTyping, setIsTyping] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { actions , subscribes  } = (0,widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useMessengerSocket */ ._)();
    const onEndTyping = ()=>{
        actions.typingStopped(roomId);
        setIsTyping(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        subscribes.onUserTyping(()=>{
            dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__/* .messengerActions.setIsTyping */ ._I.setIsTyping(true));
        });
        subscribes.onNoLongerTyping(()=>{
            dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__/* .messengerActions.setIsTyping */ ._I.setIsTyping(false));
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setIsTyping(false);
    }, [
        roomId
    ]);
    return ()=>{
        if (!isTyping) {
            actions.startTyping(roomId);
            setIsTyping(true);
            timeout.current = setTimeout(onEndTyping, 1000);
            return;
        }
        clearTimeout(timeout.current);
        timeout.current = setTimeout(onEndTyping, 1000);
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 72853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createSocketApi)
});

;// CONCATENATED MODULE: ./src/widgets/Messenger/socket/types.ts
var MessengerEvents;
(function(MessengerEvents) {
    MessengerEvents["START_CHAT"] = "startChat";
    MessengerEvents["ADD_ROOM"] = "addRoom";
    MessengerEvents["SUBSCRIBE_TO_ROOM"] = "subscribeToRoom";
    MessengerEvents["SEND_MESSAGE"] = "sendMessage";
    MessengerEvents["ADD_MESSAGE"] = "addMessage";
    MessengerEvents["UNSUBSCRIBE_FROM_ROOM"] = "unsubscribeFromRoom";
    MessengerEvents["TYPING"] = "userTyping";
    MessengerEvents["NO_LONGER_TYPING"] = "userTypingStopped";
    MessengerEvents["MESSAGE_READ"] = "messageAlreadyRead";
})(MessengerEvents || (MessengerEvents = {}));

;// CONCATENATED MODULE: ./src/widgets/Messenger/lib/helpers/reformatAttachedImage.ts
const reformatAttachedImage = (file)=>{
    return file ? {
        originalname: file.name,
        buffer: file
    } : null;
};

;// CONCATENATED MODULE: ./src/widgets/Messenger/socket/createSocketApi.ts


const createMessengerSocketApi = (socket)=>{
    return {
        subscribes: {
            onAddGroup (callback) {
                socket.on(MessengerEvents.ADD_ROOM, callback);
            },
            onAddMessage (callback) {
                socket.off(MessengerEvents.ADD_MESSAGE);
                socket.on(MessengerEvents.ADD_MESSAGE, callback);
            },
            onUserTyping (callback) {
                socket.on(MessengerEvents.TYPING, ()=>{
                    callback();
                });
            },
            onNoLongerTyping (callback) {
                socket.on(MessengerEvents.NO_LONGER_TYPING, ()=>{
                    callback();
                });
            },
            onMessagesRead (callback) {
                socket.on(MessengerEvents.MESSAGE_READ, ()=>{
                    callback();
                });
            }
        },
        actions: {
            startChat (targetId) {
                socket.emit(MessengerEvents.START_CHAT, {
                    targetId: Number(targetId)
                });
            },
            subscribeToRoom (roomId) {
                socket.emit(MessengerEvents.SUBSCRIBE_TO_ROOM, {
                    roomId
                });
            },
            unsubscribeFromRoom (roomId) {
                socket.emit(MessengerEvents.UNSUBSCRIBE_FROM_ROOM, {
                    roomId
                });
            },
            sendMessage (roomId, { message , file  }) {
                if (!roomId) {
                    return;
                }
                socket.emit(MessengerEvents.SEND_MESSAGE, {
                    roomId,
                    messageText: message,
                    file: reformatAttachedImage(file)
                });
            },
            startTyping (roomId) {
                socket.emit(MessengerEvents.TYPING, {
                    roomId
                });
            },
            typingStopped (roomId) {
                socket.emit(MessengerEvents.NO_LONGER_TYPING, {
                    roomId
                });
            },
            makeMessagesRead (message) {
                socket.emit(MessengerEvents.MESSAGE_READ, message);
            }
        }
    };
};
/* harmony default export */ const createSocketApi = (createMessengerSocketApi);


/***/ }),

/***/ 90823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SocketContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketContext);


/***/ }),

/***/ 61910:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14612);
/* harmony import */ var app_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18910);
/* harmony import */ var dev_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37854);
/* harmony import */ var widgets_Messenger_socket_provider_SocketContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(90823);
/* harmony import */ var app_config_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(58045);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17418);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(70698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_1__, dev_components__WEBPACK_IMPORTED_MODULE_3__, widgets_Login__WEBPACK_IMPORTED_MODULE_9__]);
([socket_io_client__WEBPACK_IMPORTED_MODULE_1__, dev_components__WEBPACK_IMPORTED_MODULE_3__, widgets_Login__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const SocketProvider = ({ children  })=>{
    const userId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_6__/* .useSelector */ .v9)(widgets_Login__WEBPACK_IMPORTED_MODULE_9__/* .AuthSelectors.userId */ .ce.userId);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const connection = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)(`${app_config_config__WEBPACK_IMPORTED_MODULE_2__/* ["default"].WEBSOCKET_URL */ .Z.WEBSOCKET_URL}/${app_config_globals__WEBPACK_IMPORTED_MODULE_5__/* .SocketGateWays.messenger */ .oV.messenger}`, {
        withCredentials: true,
        extraHeaders: {
            userId: userId.toString()
        }
    });
    dev_components__WEBPACK_IMPORTED_MODULE_3__/* .DevGlobalVars.setSocket */ .P.setSocket("messenger", connection);
    const disconnect = ()=>{
        connection.disconnect();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        router.events.on("routeChangeStart", disconnect);
        return ()=>{
            router.events.off("routeChangeStart", disconnect);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_Messenger_socket_provider_SocketContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Provider */ .Z.Provider, {
        value: connection,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33302:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const MessengerSelectors = {
    rooms: ({ messenger  })=>messenger.rooms.data,
    messages: ({ messenger  })=>messenger.messages,
    selectedId: ({ messenger  })=>messenger?.selectedId,
    filter: ({ messenger  })=>messenger.rooms.filter,
    userStatus: ({ messenger  })=>{
        return !messenger.isTyping ? messenger.status : "typing...";
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerSelectors);


/***/ }),

/***/ 57148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ selectFilteredRooms)
/* harmony export */ });
/* harmony import */ var widgets_Messenger_lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41878);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82103);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__]);
shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const selectFilteredRooms = ({ messenger , auth  })=>{
    const getOpponentUser = (0,widgets_Messenger_lib_helpers__WEBPACK_IMPORTED_MODULE_1__/* .selectOpponentUser */ .o)(auth.userId);
    const helpers = new shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__/* .Helpers */ .ZH();
    const filter = messenger.rooms.filter?.toLowerCase();
    const rooms = messenger.rooms.data;
    return filter ? rooms.filter((room)=>helpers.toNormalName(getOpponentUser(room)).toLowerCase().includes(filter)) : rooms;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 79989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ selectOpponentUser)
/* harmony export */ });
const selectOpponentUser = ({ auth , messenger  })=>{
    const selectedId = messenger.selectedId;
    const userId = auth.userId;
    const room = messenger.rooms.data.find((room)=>room.roomId === selectedId);
    if (!room) {
        return null;
    }
    return room.starterId === userId ? room.invitedUser : room.starterUser;
};


/***/ }),

/***/ 86621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ messengerActions),
  "A": () => (/* binding */ messengerSlice)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(75184);
// EXTERNAL MODULE: ./src/shared/config/consts/others.ts
var others = __webpack_require__(10301);
;// CONCATENATED MODULE: ./src/widgets/Messenger/store/slice/initialState.ts

const messengerInitialState = {
    rooms: {
        data: [],
        filter: null
    },
    messages: [],
    selectedId: null,
    isTyping: false,
    status: others/* UserStatus.OFFLINE */.J.OFFLINE
};

;// CONCATENATED MODULE: ./src/widgets/Messenger/store/slice/messengerReducer.ts


const messengerReducer = (0,toolkit_.createSlice)({
    name: "messenger",
    initialState: messengerInitialState,
    reducers: {
        setRooms (state, { payload  }) {
            state.rooms.data = payload;
        },
        addRoom (state, { payload  }) {
            const ids = state.rooms.data.map((room)=>room.roomId);
            if (!ids.includes(payload.roomId)) {
                state.rooms.data.unshift(payload);
            }
        },
        setMessages (state, { payload  }) {
            state.messages = payload;
        },
        changeSelectedRoomId (state, { payload  }) {
            state.selectedId = payload;
            state.isTyping = false;
        },
        addMessage (state, { payload  }) {
            const ids = state.messages.map(({ messageId  })=>messageId);
            if (!ids.includes(payload.messageId)) {
                state.messages.push(payload);
            }
        },
        clearRoom (state) {
            state.messages = [];
        },
        changeRoomsFilter (state, { payload  }) {
            state.rooms.filter = payload;
        },
        setIsTyping (state, { payload  }) {
            state.isTyping = payload;
        },
        changeUserStatus (state, { payload  }) {
            state.status = payload;
            state.isTyping = false;
        },
        makeMessagesRead (state) {
            state.messages = state.messages.map((message)=>{
                return {
                    ...message,
                    isRead: true
                };
            });
        },
        clearMessenger () {
            return messengerInitialState;
        }
    }
});
const messengerActions = messengerReducer.actions;
const messengerSlice = messengerReducer.reducer;


/***/ }),

/***/ 10679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ getRooms)
/* harmony export */ });
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17418);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82103);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19342);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__, widgets_Login__WEBPACK_IMPORTED_MODULE_3__]);
([shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__, widgets_Login__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const getRooms = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .createThunk */ .L3)("messenger/GET_ROOMS", async (_, { dispatch , extra , getState  })=>{
    const userId = widgets_Login__WEBPACK_IMPORTED_MODULE_3__/* .AuthSelectors.userId */ .ce.userId(getState());
    const rooms = await extra.api.messenger.getRooms(userId);
    if ((0,shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__/* .isError */ .VZ)(rooms)) {
        return;
    }
    dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__/* .messengerActions.setRooms */ ._I.setRooms(rooms.data));
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10342:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* reexport safe */ _getRooms__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   "c": () => (/* reexport safe */ _selectRoom__WEBPACK_IMPORTED_MODULE_1__.c)
/* harmony export */ });
/* harmony import */ var _getRooms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10679);
/* harmony import */ var _selectRoom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25417);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_getRooms__WEBPACK_IMPORTED_MODULE_0__, _selectRoom__WEBPACK_IMPORTED_MODULE_1__]);
([_getRooms__WEBPACK_IMPORTED_MODULE_0__, _selectRoom__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25417:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ selectRoom)
/* harmony export */ });
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17418);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82103);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19342);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70698);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__, widgets_Login__WEBPACK_IMPORTED_MODULE_3__]);
([shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__, widgets_Login__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const selectRoom = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_0__/* .createThunk */ .L3)("messenger/SELECT_ROOM", async (roomId, { dispatch , extra , getState  })=>{
    const userId = widgets_Login__WEBPACK_IMPORTED_MODULE_3__/* .AuthSelectors.userId */ .ce.userId(getState());
    const messages = await extra.api.messenger.selectRoom(roomId, userId);
    if ((0,shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__/* .isError */ .VZ)(messages)) {
        return;
    }
    dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__/* .messengerActions.setMessages */ ._I.setMessages(messages.data));
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 76927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export NothingFound */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(77423);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var features_Messenger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31137);
/* harmony import */ var entities_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35505);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17418);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19342);
/* harmony import */ var widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87971);
/* harmony import */ var widgets_Messenger_lib_helpers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41878);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(70698);
/* harmony import */ var app_providers_Notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74724);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(59684);
/* harmony import */ var widgets_Messenger_lib_helpers_getRoomByTargetId__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(86);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7562);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([features_Messenger__WEBPACK_IMPORTED_MODULE_1__, entities_Messenger__WEBPACK_IMPORTED_MODULE_2__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_4__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_5__, widgets_Login__WEBPACK_IMPORTED_MODULE_6__, app_providers_Notifications__WEBPACK_IMPORTED_MODULE_7__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_9__, shared_lib_components__WEBPACK_IMPORTED_MODULE_10__]);
([features_Messenger__WEBPACK_IMPORTED_MODULE_1__, entities_Messenger__WEBPACK_IMPORTED_MODULE_2__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_4__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_5__, widgets_Login__WEBPACK_IMPORTED_MODULE_6__, app_providers_Notifications__WEBPACK_IMPORTED_MODULE_7__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_9__, shared_lib_components__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const MessengerAside = ()=>{
    const selectedId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_4__/* .MessengerSelectors.selectedId */ ._5.selectedId);
    const userId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useSelector */ .v9)(widgets_Login__WEBPACK_IMPORTED_MODULE_6__/* .AuthSelectors.userId */ .ce.userId);
    const rooms = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_4__/* .selectFilteredRooms */ .JZ);
    const notifications = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useSelector */ .v9)(app_providers_Notifications__WEBPACK_IMPORTED_MODULE_7__/* .NotifySelectors.selectByRooms */ .H_.selectByRooms(rooms));
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_3__/* .useDispatch */ .I0)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const targetId = router.query.targetId;
    const { actions  } = (0,widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useMessengerSocket */ ._)();
    const getOpponentUser = (0,widgets_Messenger_lib_helpers__WEBPACK_IMPORTED_MODULE_12__/* .selectOpponentUser */ .o)(userId);
    const switchRoom = (id)=>{
        actions.unsubscribeFromRoom(selectedId);
        dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_4__/* .messengerActions.changeSelectedRoomId */ ._I.changeSelectedRoomId(id));
        dispatch(app_providers_Notifications__WEBPACK_IMPORTED_MODULE_7__/* .notifyActions.clearNotifications */ .cx.clearNotifications(id));
    };
    (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useFilteredEffect */ .El)(()=>{
        const roomId = (0,widgets_Messenger_lib_helpers_getRoomByTargetId__WEBPACK_IMPORTED_MODULE_13__/* .getRoomByTargetId */ .z)(targetId, rooms);
        if (roomId) {
            switchRoom(Number(roomId));
        }
    }, [
        targetId,
        rooms.length
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_14___default().messenger_aside),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(features_Messenger__WEBPACK_IMPORTED_MODULE_1__/* .SearchUsers */ .Z, {}),
            rooms.map((room, idx)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Messenger__WEBPACK_IMPORTED_MODULE_2__/* .MessengerUser */ .S1, {
                    room: room,
                    switchRoom: switchRoom,
                    selected: room.roomId === selectedId,
                    user: getOpponentUser(room),
                    notification: notifications[idx]
                }, idx);
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_10__/* .Display */ .sS, {
                when: !rooms.length,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NothingFound, {})
            })
        ]
    });
};
const NothingFound = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_14___default().nothing_found),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: "Nothing found."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_11__.AiOutlineSmile, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerAside);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 88113:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(40762);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var entities_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35505);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59684);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17418);
/* harmony import */ var widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10342);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7562);
/* harmony import */ var _MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(40638);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(19342);
/* harmony import */ var widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87971);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70698);
/* harmony import */ var entities_Messenger_ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46709);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([entities_Messenger__WEBPACK_IMPORTED_MODULE_2__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__, widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_5__, shared_lib_components__WEBPACK_IMPORTED_MODULE_6__, _MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_7__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_9__, widgets_Login__WEBPACK_IMPORTED_MODULE_10__, entities_Messenger_ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_11__]);
([entities_Messenger__WEBPACK_IMPORTED_MODULE_2__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__, widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_5__, shared_lib_components__WEBPACK_IMPORTED_MODULE_6__, _MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_7__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_9__, widgets_Login__WEBPACK_IMPORTED_MODULE_10__, entities_Messenger_ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const MessengerContent = ()=>{
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
    const messages = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__/* .MessengerSelectors.messages */ ._5.messages);
    const roomId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__/* .MessengerSelectors.selectedId */ ._5.selectedId);
    const userId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(widgets_Login__WEBPACK_IMPORTED_MODULE_10__/* .AuthSelectors.userId */ .ce.userId);
    const { actions , subscribes  } = (0,widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useMessengerSocket */ ._)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        subscribes.onAddMessage((message)=>{
            dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__/* .messengerActions.addMessage */ ._I.addMessage(message));
            actions.makeMessagesRead(message);
        });
        subscribes.onMessagesRead(()=>{
            dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__/* .messengerActions.makeMessagesRead */ ._I.makeMessagesRead());
        });
    }, []);
    (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useFilteredEffect */ .El)(()=>{
        dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__/* .messengerActions.clearRoom */ ._I.clearRoom());
        actions.subscribeToRoom(roomId);
        dispatch((0,widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_5__/* .selectRoom */ .c)(roomId));
    }, [
        roomId
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_12___default().messages_main),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_12___default().wrapper),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_6__/* .Display */ .sS, {
                    when: roomId,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Messenger__WEBPACK_IMPORTED_MODULE_2__/* .MessengerContent */ .cF, {
                            messages: messages,
                            userId: userId
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_6__/* .Display */ .sS, {
                    when: !roomId,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Messenger_ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_11__/* .DefaultChat */ .K, {})
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 45395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var entities_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35505);
/* harmony import */ var features_Messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31137);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59684);
/* harmony import */ var widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87971);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17418);
/* harmony import */ var widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10342);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19342);
/* harmony import */ var widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(72921);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([entities_Messenger__WEBPACK_IMPORTED_MODULE_2__, features_Messenger__WEBPACK_IMPORTED_MODULE_3__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_5__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_6__, widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_8__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_9__, widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_10__]);
([entities_Messenger__WEBPACK_IMPORTED_MODULE_2__, features_Messenger__WEBPACK_IMPORTED_MODULE_3__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_5__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_6__, widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_8__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_9__, widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const MessengerHeader = ()=>{
    const opponent = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_7__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_9__/* .selectOpponentUser */ .oA);
    const roomId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_7__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_9__/* .MessengerSelectors.selectedId */ ._5.selectedId);
    const userStatus = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_7__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_9__/* .MessengerSelectors.userStatus */ ._5.userStatus);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const targetId = router.query.targetId;
    const { actions , subscribes  } = (0,widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useMessengerSocket */ ._)();
    const authSocket = (0,widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_10__/* .useAuthSocket */ .s)();
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_7__/* .useDispatch */ .I0)();
    (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useFilteredEffect */ .El)(()=>{
        subscribes.onAddGroup((room)=>{
            dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_9__/* .messengerActions.addRoom */ ._I.addRoom(room));
        });
        actions.startChat(targetId);
    }, [
        targetId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        authSocket.actions.subscribeToStatus(opponent?.userId);
    }, [
        roomId,
        opponent
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_8__/* .getRooms */ .A)());
        authSocket.subscribes.onStatusChanged((status)=>{
            dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_9__/* .messengerActions.changeUserStatus */ ._I.changeUserStatus(status));
        });
        return ()=>{
            dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_9__/* .messengerActions.clearMessenger */ ._I.clearMessenger());
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Messenger__WEBPACK_IMPORTED_MODULE_2__/* .MessengerHeaderTemp */ .AK, {
        Search: features_Messenger__WEBPACK_IMPORTED_MODULE_3__/* .SearchMessages */ .Q,
        user: opponent,
        label: userStatus
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40638:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59684);
/* harmony import */ var entities_Messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35505);
/* harmony import */ var widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(87971);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17418);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(19342);
/* harmony import */ var widgets_Messenger_lib_hooks_useTyping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13368);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_hooks__WEBPACK_IMPORTED_MODULE_2__, entities_Messenger__WEBPACK_IMPORTED_MODULE_3__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_4__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_6__, widgets_Messenger_lib_hooks_useTyping__WEBPACK_IMPORTED_MODULE_7__]);
([shared_lib_hooks__WEBPACK_IMPORTED_MODULE_2__, entities_Messenger__WEBPACK_IMPORTED_MODULE_3__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_4__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_6__, widgets_Messenger_lib_hooks_useTyping__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const MessengerInput = ()=>{
    const { submit , form  } = (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useForm */ .cI)(null);
    const { actions  } = (0,widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMessengerSocket */ ._)();
    const roomId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_6__/* .MessengerSelectors.selectedId */ ._5.selectedId);
    const onChange = (0,widgets_Messenger_lib_hooks_useTyping__WEBPACK_IMPORTED_MODULE_7__/* .useTyping */ .P)();
    const resetValue = ()=>{
        form.setValue("message", "");
        form.setValue("file", null);
    };
    const onSubmit = (values)=>{
        if (values.message) {
            actions.sendMessage(roomId, values);
        }
        resetValue();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(resetValue, [
        roomId
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Messenger__WEBPACK_IMPORTED_MODULE_3__/* .MessageBar */ .cb, {
        submit: submit(onSubmit),
        form: form,
        onChange: onChange
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 35632:
/***/ (() => {



/***/ })

};
;