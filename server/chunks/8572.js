exports.id = 8572;
exports.ids = [8572];
exports.modules = {

/***/ 91221:
/***/ ((module) => {

// Exports
module.exports = {
	"messages_main": "style_messages_main__UiS2u",
	"wrapper": "style_wrapper__DSPKV"
};


/***/ }),

/***/ 28572:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(91221);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var entities_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76066);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38537);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98429);
/* harmony import */ var widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8437);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(78828);
/* harmony import */ var _MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(62462);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7175);
/* harmony import */ var widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17949);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(73421);
/* harmony import */ var entities_Messenger_ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4925);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__, widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_5__, shared_lib_components__WEBPACK_IMPORTED_MODULE_6__, _MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_7__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_9__, widgets_Login__WEBPACK_IMPORTED_MODULE_10__, entities_Messenger_ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_11__]);
([shared_lib_hooks__WEBPACK_IMPORTED_MODULE_3__, widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_5__, shared_lib_components__WEBPACK_IMPORTED_MODULE_6__, _MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_7__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_9__, widgets_Login__WEBPACK_IMPORTED_MODULE_10__, entities_Messenger_ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const MessengerContent = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const dispatch = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useDispatch */ .I0)();
    const messages = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__/* .MessengerSelectors.messages */ ._5.messages);
    const roomId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__/* .MessengerSelectors.selectedId */ ._5.selectedId);
    const userId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(widgets_Login__WEBPACK_IMPORTED_MODULE_10__/* .AuthSelectors.userId */ .ce.userId);
    const page = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_4__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__/* .MessengerSelectors.page */ ._5.page);
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
        dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__/* .messengerActions.clearPage */ ._I.clearPage());
        dispatch((0,widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_5__/* .getMessages */ ._)({
            roomId
        }));
    }, [
        roomId
    ]);
    const updatePage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        dispatch(widgets_Messenger__WEBPACK_IMPORTED_MODULE_8__/* .messengerActions.increasePage */ ._I.increasePage());
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (roomId && page !== 0) {
            dispatch((0,widgets_Messenger_store_thunks__WEBPACK_IMPORTED_MODULE_5__/* .getMessages */ ._)({
                roomId,
                page
            }));
        }
    }, [
        page
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
                            userId: userId,
                            getMoreMessages: updatePage,
                            roomId: roomId
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_6__/* .Display */ .sS, {
                    when: !roomId,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Messenger_ui_Content_MessengerContent__WEBPACK_IMPORTED_MODULE_11__.DefaultChat, {})
                })
            ]
        })
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerContent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;