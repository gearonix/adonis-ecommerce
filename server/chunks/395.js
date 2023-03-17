"use strict";
exports.id = 395;
exports.ids = [395];
exports.modules = {

/***/ 45395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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











const MessengerHeader = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
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
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerHeader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;