"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessengerGroups = exports.MessengerEvents = void 0;
var MessengerEvents;
(function (MessengerEvents) {
    MessengerEvents["START_CHAT"] = "startChat";
    MessengerEvents["ADD_ROOM"] = "addRoom";
    MessengerEvents["SUBSCRIBE_TO_ROOM"] = "subscribeToRoom";
    MessengerEvents["SEND_MESSAGE"] = "sendMessage";
    MessengerEvents["ADD_MESSAGE"] = "addMessage";
    MessengerEvents["UNSUBSCRIBE_FROM_ROOM"] = "unsubscribeFromRoom";
})(MessengerEvents = exports.MessengerEvents || (exports.MessengerEvents = {}));
var MessengerGroups;
(function (MessengerGroups) {
    MessengerGroups["MESSENGER_ROOM"] = "MESSENGER_ROOM";
})(MessengerGroups = exports.MessengerGroups || (exports.MessengerGroups = {}));
//# sourceMappingURL=types.js.map