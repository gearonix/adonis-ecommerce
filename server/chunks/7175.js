"use strict";
exports.id = 7175;
exports.ids = [7175];
exports.modules = {

/***/ 76066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S1": () => (/* binding */ MessengerUser),
/* harmony export */   "ao": () => (/* binding */ UserInfo),
/* harmony export */   "cF": () => (/* binding */ MessengerContent),
/* harmony export */   "cb": () => (/* binding */ MessageBar),
/* harmony export */   "zZ": () => (/* binding */ MessengerHeaderTemplate)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21229);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);

const MessengerContent = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/* import() */ 4925).then(__webpack_require__.bind(__webpack_require__, 4925)), {
    loadableGenerated: {
        modules: [
            "../entities/Messenger/index.ts -> " + "./ui/Content/MessengerContent"
        ]
    }
});
const MessengerHeaderTemplate = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/* import() */ 3551).then(__webpack_require__.bind(__webpack_require__, 93551)), {
    loadableGenerated: {
        modules: [
            "../entities/Messenger/index.ts -> " + "./ui/Header/MessengerHeaderTemplate"
        ]
    }
});
const MessengerUser = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/* import() */ 9865).then(__webpack_require__.bind(__webpack_require__, 99865)), {
    loadableGenerated: {
        modules: [
            "../entities/Messenger/index.ts -> " + "./ui/User/MessengerUser"
        ]
    }
});
const UserInfo = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/* import() */ 611).then(__webpack_require__.bind(__webpack_require__, 80611)), {
    loadableGenerated: {
        modules: [
            "../entities/Messenger/index.ts -> " + "./ui/UserInfo/UserInfo"
        ]
    }
});
const MessageBar = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>__webpack_require__.e(/* import() */ 1504).then(__webpack_require__.bind(__webpack_require__, 51504)), {
    loadableGenerated: {
        modules: [
            "../entities/Messenger/index.ts -> " + "./ui/MessageBar/MessageBar"
        ]
    }
});


/***/ }),

/***/ 41241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ messengerApi)
/* harmony export */ });
/* harmony import */ var shared_config_consts_endpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86676);
/* harmony import */ var shared_config_consts_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26481);
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

/***/ 7175:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AD": () => (/* reexport safe */ _store_slice_messengerReducer__WEBPACK_IMPORTED_MODULE_5__.A),
/* harmony export */   "FZ": () => (/* binding */ MessengerAside),
/* harmony export */   "JZ": () => (/* reexport safe */ _store_selectors_others_selectFilteredRooms__WEBPACK_IMPORTED_MODULE_7__.J),
/* harmony export */   "Jb": () => (/* reexport safe */ _socket_provider_SocketContext__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "Mn": () => (/* binding */ MessengerHeader),
/* harmony export */   "_5": () => (/* reexport safe */ _store_selectors_messenger_selectors__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "_I": () => (/* reexport safe */ _store_slice_messengerReducer__WEBPACK_IMPORTED_MODULE_5__._),
/* harmony export */   "bC": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_4__.b),
/* harmony export */   "cF": () => (/* binding */ MessengerContent),
/* harmony export */   "oA": () => (/* reexport safe */ _store_selectors_others_selectOpponentUser__WEBPACK_IMPORTED_MODULE_8__.o),
/* harmony export */   "wP": () => (/* reexport safe */ _socket_provider_SocketProvider__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21229);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _socket_provider_SocketProvider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2684);
/* harmony import */ var _socket_provider_SocketContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44324);
/* harmony import */ var _ui_MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62462);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41241);
/* harmony import */ var _store_slice_messengerReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57202);
/* harmony import */ var _store_selectors_messenger_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(34709);
/* harmony import */ var _store_selectors_others_selectFilteredRooms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92917);
/* harmony import */ var _store_selectors_others_selectOpponentUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(78120);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_socket_provider_SocketProvider__WEBPACK_IMPORTED_MODULE_1__, _ui_MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_3__, _api__WEBPACK_IMPORTED_MODULE_4__, _store_selectors_others_selectFilteredRooms__WEBPACK_IMPORTED_MODULE_7__]);
([_socket_provider_SocketProvider__WEBPACK_IMPORTED_MODULE_1__, _ui_MessengerInput_MessengerInput__WEBPACK_IMPORTED_MODULE_3__, _api__WEBPACK_IMPORTED_MODULE_4__, _store_selectors_others_selectFilteredRooms__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

const MessengerHeader = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(4448), __webpack_require__.e(8904), __webpack_require__.e(8437), __webpack_require__.e(639)]).then(__webpack_require__.bind(__webpack_require__, 60639)), {
    loadableGenerated: {
        modules: [
            "../widgets/Messenger/index.ts -> " + "./ui/Header/MessengerHeader"
        ]
    }
});
const MessengerAside = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(4448), __webpack_require__.e(444), __webpack_require__.e(8904), __webpack_require__.e(4478)]).then(__webpack_require__.bind(__webpack_require__, 84478)), {
    loadableGenerated: {
        modules: [
            "../widgets/Messenger/index.ts -> " + "./ui/Aside/MessengerAside"
        ]
    }
});
const MessengerContent = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(()=>Promise.all(/* import() */[__webpack_require__.e(4925), __webpack_require__.e(8437), __webpack_require__.e(8572)]).then(__webpack_require__.bind(__webpack_require__, 28572)), {
    loadableGenerated: {
        modules: [
            "../widgets/Messenger/index.ts -> " + "./ui/Content/MessengerContent"
        ]
    }
});










__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 14621:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ selectOpponentUser)
/* harmony export */ });
const selectOpponentUser = (userId)=>(room)=>{
        return room.starterId === userId ? room.invitedUser : room.starterUser;
    };


/***/ }),

/***/ 17949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* reexport safe */ _useMessengerSocket__WEBPACK_IMPORTED_MODULE_0__._)
/* harmony export */ });
/* harmony import */ var _useMessengerSocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74069);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useMessengerSocket__WEBPACK_IMPORTED_MODULE_0__]);
_useMessengerSocket__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 74069:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ useMessengerSocket)
/* harmony export */ });
/* harmony import */ var widgets_Messenger_socket_createSocketApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90318);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7175);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__]);
widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const useMessengerSocket = ()=>{
    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__/* .SocketContext */ .Jb);
    return (0,widgets_Messenger_socket_createSocketApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(socket);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8954:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useTyping)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98429);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7175);
/* harmony import */ var widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17949);
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

/***/ 90318:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


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

/***/ 44324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SocketContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketContext);


/***/ }),

/***/ 2684:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14612);
/* harmony import */ var app_config_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1211);
/* harmony import */ var dev_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9254);
/* harmony import */ var widgets_Messenger_socket_provider_SocketContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44324);
/* harmony import */ var app_config_globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(579);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98429);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(71853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var widgets_Login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(73421);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(38537);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([socket_io_client__WEBPACK_IMPORTED_MODULE_1__, dev_components__WEBPACK_IMPORTED_MODULE_3__, widgets_Login__WEBPACK_IMPORTED_MODULE_9__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_10__]);
([socket_io_client__WEBPACK_IMPORTED_MODULE_1__, dev_components__WEBPACK_IMPORTED_MODULE_3__, widgets_Login__WEBPACK_IMPORTED_MODULE_9__, shared_lib_hooks__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const SocketProvider = ({ children  })=>{
    const userId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_6__/* .useSelector */ .v9)(widgets_Login__WEBPACK_IMPORTED_MODULE_9__/* .AuthSelectors.userId */ .ce.userId);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [socket, setSocket] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)();
    (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useFilteredEffect */ .El)(()=>{
        socket?.disconnect?.();
        const connection = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_1__.io)(`${app_config_config__WEBPACK_IMPORTED_MODULE_2__/* ["default"].WEBSOCKET_URL */ .Z.WEBSOCKET_URL}/${app_config_globals__WEBPACK_IMPORTED_MODULE_5__/* .SocketGateWays.messenger */ .oV.messenger}`, {
            withCredentials: true,
            auth: {
                userid: userId.toString?.()
            }
        });
        dev_components__WEBPACK_IMPORTED_MODULE_3__/* .DevGlobalVars.setSocket */ .P.setSocket("messenger", connection);
        console.log({
            userid: userId.toString?.()
        });
        setSocket(connection);
    }, [
        userId
    ]);
    const disconnect = ()=>{
        socket?.disconnect?.();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        router.events.on("routeChangeStart", disconnect);
        return ()=>{
            router.events.off("routeChangeStart", disconnect);
        };
    }, [
        socket
    ]);
    return socket ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(widgets_Messenger_socket_provider_SocketContext__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Provider */ .Z.Provider, {
        value: socket,
        children: children
    }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocketProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 34709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 92917:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ selectFilteredRooms)
/* harmony export */ });
/* harmony import */ var widgets_Messenger_lib_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14621);
/* harmony import */ var shared_lib_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95575);
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

/***/ 78120:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 57202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ messengerActions),
  "A": () => (/* binding */ messengerSlice)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(75184);
// EXTERNAL MODULE: ./src/shared/config/consts/others.ts
var others = __webpack_require__(89062);
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

/***/ 62462:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shared_lib_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38537);
/* harmony import */ var entities_Messenger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(76066);
/* harmony import */ var widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17949);
/* harmony import */ var shared_types_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98429);
/* harmony import */ var widgets_Messenger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7175);
/* harmony import */ var widgets_Messenger_lib_hooks_useTyping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8954);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([shared_lib_hooks__WEBPACK_IMPORTED_MODULE_2__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_4__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_6__, widgets_Messenger_lib_hooks_useTyping__WEBPACK_IMPORTED_MODULE_7__]);
([shared_lib_hooks__WEBPACK_IMPORTED_MODULE_2__, widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_4__, widgets_Messenger__WEBPACK_IMPORTED_MODULE_6__, widgets_Messenger_lib_hooks_useTyping__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const MessengerInput = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.memo)(()=>{
    const { submit , form  } = (0,shared_lib_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useForm */ .cI)(null);
    const { actions  } = (0,widgets_Messenger_lib_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useMessengerSocket */ ._)();
    const roomId = (0,shared_types_redux__WEBPACK_IMPORTED_MODULE_5__/* .useSelector */ .v9)(widgets_Messenger__WEBPACK_IMPORTED_MODULE_6__/* .MessengerSelectors.selectedId */ ._5.selectedId);
    const onChange = (0,widgets_Messenger_lib_hooks_useTyping__WEBPACK_IMPORTED_MODULE_7__/* .useTyping */ .P)();
    const resetValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        form.setValue("message", "");
        form.setValue("file", null);
    }, []);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((values)=>{
        if (values.message) {
            actions.sendMessage(roomId, values);
        }
        resetValue();
    }, [
        roomId
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(resetValue, [
        roomId
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(entities_Messenger__WEBPACK_IMPORTED_MODULE_3__/* .MessageBar */ .cb, {
        submit: submit(onSubmit),
        form: form,
        onChange: onChange
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessengerInput);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;