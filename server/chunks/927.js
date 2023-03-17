exports.id = 927;
exports.ids = [927];
exports.modules = {

/***/ 77423:
/***/ ((module) => {

// Exports
module.exports = {
	"messenger_aside": "style_messenger_aside__TrRte",
	"nothing_found": "style_nothing_found__OadCk"
};


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

/***/ 76927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NothingFound": () => (/* binding */ NothingFound),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(77423);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var features_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31137);
/* harmony import */ var entities_Messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35505);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17418);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19342);
/* harmony import */ var widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87971);
/* harmony import */ var widgets_Messenger_lib_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(41878);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70698);
/* harmony import */ var app_providers_Notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74724);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(59684);
/* harmony import */ var widgets_Messenger_lib_helpers_getRoomByTargetId__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(86);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7562);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(99847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57987);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([features_Messenger__WEBPACK_IMPORTED_MODULE_2__, entities_Messenger__WEBPACK_IMPORTED_MODULE_3__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_6__, widgets_Login__WEBPACK_IMPORTED_MODULE_7__, app_providers_Notifications__WEBPACK_IMPORTED_MODULE_8__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_10__, shared_lib_components__WEBPACK_IMPORTED_MODULE_11__, react_i18next__WEBPACK_IMPORTED_MODULE_13__]);
([features_Messenger__WEBPACK_IMPORTED_MODULE_2__, entities_Messenger__WEBPACK_IMPORTED_MODULE_3__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_6__, widgets_Login__WEBPACK_IMPORTED_MODULE_7__, app_providers_Notifications__WEBPACK_IMPORTED_MODULE_8__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_10__, shared_lib_components__WEBPACK_IMPORTED_MODULE_11__, react_i18next__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const MessengerAside = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const selectedId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__/* .MessengerSelectors.selectedId */ ._5.selectedId);
    const userId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(widgets_Login__WEBPACK_IMPORTED_MODULE_7__/* .AuthSelectors.userId */ .ce.userId);
    const rooms = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__/* .selectFilteredRooms */ .JZ);
    const notifications = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(app_providers_Notifications__WEBPACK_IMPORTED_MODULE_8__/* .NotifySelectors.selectByRooms */ .H_.selectByRooms(rooms));
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const targetId = router.query.targetId;
    const { actions  } = (0,widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useMessengerSocket */ ._)();
    const getOpponentUser = (0,widgets_Messenger_lib_helpers__WEBPACK_IMPORTED_MODULE_14__/* .selectOpponentUser */ .o)(userId);
    const switchRoom = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((id)=>{
        actions.unsubscribeFromRoom(selectedId);
        dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_5__/* .messengerActions.changeSelectedRoomId */ ._I.changeSelectedRoomId(id));
        dispatch(app_providers_Notifications__WEBPACK_IMPORTED_MODULE_8__/* .notifyActions.clearNotifications */ .cx.clearNotifications(id));
    }, []);
    (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useFilteredEffect */ .El)(()=>{
        const roomId = (0,widgets_Messenger_lib_helpers_getRoomByTargetId__WEBPACK_IMPORTED_MODULE_15__/* .getRoomByTargetId */ .z)(targetId, rooms);
        if (roomId) {
            switchRoom(Number(roomId));
        }
    }, [
        targetId,
        rooms.length
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_16___default().messenger_aside),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(features_Messenger__WEBPACK_IMPORTED_MODULE_2__/* .SearchUsers */ .Z, {}),
            rooms.map((room, idx)=>{
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Messenger__WEBPACK_IMPORTED_MODULE_3__/* .MessengerUser */ .S1, {
                    room: room,
                    switchRoom: switchRoom,
                    selected: room.roomId === selectedId,
                    user: getOpponentUser(room),
                    notification: notifications[idx]
                }, idx);
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_11__/* .Display */ .sS, {
                when: !rooms.length,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NothingFound, {})
            })
        ]
    });
});
const NothingFound = ()=>{
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__.useTranslation)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_16___default().nothing_found),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                children: t("Nothing found.")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_12__.AiOutlineSmile, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerAside);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;