"use strict";
exports.id = 4448;
exports.ids = [4448];
exports.modules = {

/***/ 85480:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AuthSocketContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthSocketContext);


/***/ }),

/***/ 69182:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14612);
/* harmony import */ var dev_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9254);
/* harmony import */ var _AuthSocketContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85480);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(73421);
/* harmony import */ var app_config_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(579);
/* harmony import */ var app_config_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1211);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_1__, dev_components__WEBPACK_IMPORTED_MODULE_2__, widgets_Login__WEBPACK_IMPORTED_MODULE_6__]);
([socket_io_client__WEBPACK_IMPORTED_MODULE_1__, dev_components__WEBPACK_IMPORTED_MODULE_2__, widgets_Login__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const AuthSocketProvider = ({ children  })=>{
    const isAuthorized = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(widgets_Login__WEBPACK_IMPORTED_MODULE_6__/* .AuthSelectors.isAuthorized */ .ce.isAuthorized);
    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});
    const userId = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(widgets_Login__WEBPACK_IMPORTED_MODULE_6__/* .AuthSelectors.userId */ .ce.userId);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (!isAuthorized) {
            socket.disconnect?.();
            return;
        }
        const connectionOptions = {
            auth: {
                userid: userId.toString?.()
            },
            path: app_config_globals__WEBPACK_IMPORTED_MODULE_7__/* .SocketPaths.auth */ .az.auth
        };
        const connection = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)(app_config_config__WEBPACK_IMPORTED_MODULE_8__/* ["default"].WEBSOCKET_URL */ .Z.WEBSOCKET_URL, connectionOptions);
        dev_components__WEBPACK_IMPORTED_MODULE_2__/* .DevGlobalVars.setSocket */ .P.setSocket("auth", connection);
        setSocket(connection);
    }, [
        userId,
        isAuthorized
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AuthSocketContext__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Provider */ .Z.Provider, {
        value: socket,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthSocketProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97794:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A0": () => (/* reexport safe */ _AuthSocketContext__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "S4": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_2__.S),
/* harmony export */   "eB": () => (/* reexport safe */ _AuthSocketProvider__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _AuthSocketContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85480);
/* harmony import */ var _AuthSocketProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69182);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57075);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_AuthSocketProvider__WEBPACK_IMPORTED_MODULE_1__]);
_AuthSocketProvider__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 57075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ StatusEvents)
/* harmony export */ });
/* unused harmony export StatusGroups */
var StatusEvents;
(function(StatusEvents) {
    StatusEvents["STATUS_CHANGED"] = "statusChanged";
    StatusEvents["SUBSCRIBE_TO_STATUS"] = "subscribeToStatus";
    StatusEvents["SHOW_NOTIFICATION"] = "showNotification";
})(StatusEvents || (StatusEvents = {}));
var StatusGroups;
(function(StatusGroups) {
    StatusGroups["ONLINE_STATUS"] = "ONLINE_STATUS";
})(StatusGroups || (StatusGroups = {}));


/***/ }),

/***/ 84448:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ useAuthSocket)
/* harmony export */ });
/* harmony import */ var widgets_Profile_socket_createSocketApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10905);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var app_providers_Authorization_socket__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Profile_socket_createSocketApi__WEBPACK_IMPORTED_MODULE_0__, app_providers_Authorization_socket__WEBPACK_IMPORTED_MODULE_2__]);
([widgets_Profile_socket_createSocketApi__WEBPACK_IMPORTED_MODULE_0__, app_providers_Authorization_socket__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const useAuthSocket = ()=>{
    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(app_providers_Authorization_socket__WEBPACK_IMPORTED_MODULE_2__/* .AuthSocketContext */ .A0);
    return (0,widgets_Profile_socket_createSocketApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(socket);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 10905:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var app_providers_Authorization_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([app_providers_Authorization_socket__WEBPACK_IMPORTED_MODULE_0__]);
app_providers_Authorization_socket__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const createAuthSocketApi = (socket)=>{
    return {
        subscribes: {
            onStatusChanged (callback) {
                socket.on?.(app_providers_Authorization_socket__WEBPACK_IMPORTED_MODULE_0__/* .StatusEvents.STATUS_CHANGED */ .S4.STATUS_CHANGED, (data)=>{
                    callback(data.status);
                });
            },
            onReceivedNotification (callback) {
                const event = app_providers_Authorization_socket__WEBPACK_IMPORTED_MODULE_0__/* .StatusEvents.SHOW_NOTIFICATION */ .S4.SHOW_NOTIFICATION;
                socket.off?.(event)?.on?.(event, (message)=>{
                    callback(message);
                });
            }
        },
        actions: {
            subscribeToStatus (targetId) {
                if (targetId) {
                    socket.emit?.(app_providers_Authorization_socket__WEBPACK_IMPORTED_MODULE_0__/* .StatusEvents.SUBSCRIBE_TO_STATUS */ .S4.SUBSCRIBE_TO_STATUS, {
                        targetId
                    });
                }
            }
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAuthSocketApi);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;