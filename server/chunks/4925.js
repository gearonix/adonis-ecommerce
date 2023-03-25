exports.id = 4925;
exports.ids = [4925];
exports.modules = {

/***/ 50705:
/***/ ((module) => {

// Exports
module.exports = {
	"messages_block": "style_messages_block__gDwSV",
	"messages_wrapper": "style_messages_wrapper__Bo_dp",
	"scrollToBottom": "style_scrollToBottom__n1Lxx",
	"default_container": "style_default_container__gMYZ_",
	"bottomWrapper": "style_bottomWrapper__ClUl1",
	"default_chat_image": "style_default_chat_image__W7LEu",
	"default_title": "style_default_title__pTFnf"
};


/***/ }),

/***/ 4925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultChat": () => (/* binding */ DefaultChat),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(50705);
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_style_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26365);
/* harmony import */ var shared_lib_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(78828);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6031);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51922);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38537);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(76652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(57987);
/* harmony import */ var widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17949);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, shared_lib_components__WEBPACK_IMPORTED_MODULE_3__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__, react_i18next__WEBPACK_IMPORTED_MODULE_8__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_9__]);
([shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__, shared_lib_components__WEBPACK_IMPORTED_MODULE_3__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__, react_i18next__WEBPACK_IMPORTED_MODULE_8__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const MessengerContent = ({ messages , userId , getMoreMessages , roomId  })=>{
    const scrollable = (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useBottomScroll */ .Ji)(roomId);
    const triggerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const { subscribes  } = (0,widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useMessengerSocket */ ._)();
    (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useInfiniteScroll */ .MQ)({
        callback: getMoreMessages,
        wrapperRef: scrollable.containerRef,
        triggerRef
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        subscribes.onAddMessage(()=>{
            scrollable.scrollToBottom();
            setTimeout(scrollable.scrollToBottom, 550);
        });
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(scrollable.rememberContainerScroll, [
        messages
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().messages_block),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().messages_wrapper),
                onScroll: scrollable.onScroll,
                ref: scrollable.containerRef,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_3__/* .Display */ .sS, {
                        when: messages.length,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: triggerRef
                        })
                    }),
                    messages.map((message)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_3__/* .Display */ .sS, {
                            when: message.roomId === roomId,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .Message */ .v0, {
                                message: message,
                                isMine: message.senderId === userId
                            })
                        }, message.messageId);
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: scrollable.bottomRef
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bottomWrapper),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_3__/* .Display */ .sS, {
                    when: scrollable.scrollBottomSize > 100,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_ui_kit__WEBPACK_IMPORTED_MODULE_2__/* .ScrollToBottom */ .aK, {
                        onClick: scrollable.scrollToBottom
                    })
                })
            })
        ]
    });
};
const DefaultChat = ()=>{
    const toShow = (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useTimeout */ .KS)(300);
    const { t  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__.useTranslation)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(shared_lib_components__WEBPACK_IMPORTED_MODULE_3__/* .Display */ .sS, {
        when: toShow,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(shared_lib_components__WEBPACK_IMPORTED_MODULE_3__/* .WithSpring */ .xM, {
            className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().default_container),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().default_chat_image),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiMessageDetail, {})
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    className: (_style_module_scss__WEBPACK_IMPORTED_MODULE_10___default().default_title),
                    children: [
                        t("Choose a chat or create a"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                            href: shared_config_consts_routes__WEBPACK_IMPORTED_MODULE_5__/* .routes.USERS */ ._.USERS,
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                children: [
                                    " ",
                                    t("new one")
                                ]
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

/***/ })

};
;