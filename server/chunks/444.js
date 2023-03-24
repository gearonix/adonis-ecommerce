exports.id = 444;
exports.ids = [444];
exports.modules = {

/***/ 2800:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ useNewMessage)
/* harmony export */ });
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98429);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(73421);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7175);
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

/***/ 27895:
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
/* harmony import */ var _ui_WithNotifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52263);
/* harmony import */ var _store_notificationsReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93878);
/* harmony import */ var _hooks_useNewMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2800);
/* harmony import */ var _toasts_NewMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72445);
/* harmony import */ var _store_notify_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30191);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_WithNotifications__WEBPACK_IMPORTED_MODULE_0__, _hooks_useNewMessage__WEBPACK_IMPORTED_MODULE_2__, _toasts_NewMessage__WEBPACK_IMPORTED_MODULE_3__]);
([_ui_WithNotifications__WEBPACK_IMPORTED_MODULE_0__, _hooks_useNewMessage__WEBPACK_IMPORTED_MODULE_2__, _toasts_NewMessage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 93878:
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

/***/ 30191:
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

/***/ 72445:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ NewMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95575);
/* harmony import */ var shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51922);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6031);
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

/***/ 52263:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var app_providers_Notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27895);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41719);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38537);
/* harmony import */ var widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(84448);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98429);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7175);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73421);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([app_providers_Notifications__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_2__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_4__, widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_5__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__, widgets_Login__WEBPACK_IMPORTED_MODULE_9__]);
([app_providers_Notifications__WEBPACK_IMPORTED_MODULE_1__, react_toastify__WEBPACK_IMPORTED_MODULE_2__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_4__, widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_5__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__, widgets_Login__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const WithNotifications = ()=>{
    const { theme  } = (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .Fg)();
    const { subscribes  } = (0,widgets_Profile_lib_hooks_useAuthSocket__WEBPACK_IMPORTED_MODULE_5__/* .useAuthSocket */ .s)();
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_6__/* .useDispatch */ .I0)();
    const selectedRoom = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_6__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__/* .MessengerSelectors.selectedId */ ._5.selectedId);
    const userId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_6__/* .useSelector */ .v9)(widgets_Login__WEBPACK_IMPORTED_MODULE_9__/* .AuthSelectors.userId */ .ce.userId);
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
        selectedRoom,
        userId
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

/***/ 41719:
/***/ (() => {



/***/ })

};
;