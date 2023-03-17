"use strict";
exports.id = 32;
exports.ids = [32];
exports.modules = {

/***/ 10679:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

/***/ })

};
;