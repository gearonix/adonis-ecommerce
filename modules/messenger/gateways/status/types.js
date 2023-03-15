"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusGroups = exports.StatusEvents = void 0;
var StatusEvents;
(function (StatusEvents) {
    StatusEvents["STATUS_CHANGED"] = "statusChanged";
    StatusEvents["SUBSCRIBE_TO_STATUS"] = "subscribeToStatus";
    StatusEvents["SHOW_NOTIFICATION"] = "showNotification";
})(StatusEvents = exports.StatusEvents || (exports.StatusEvents = {}));
var StatusGroups;
(function (StatusGroups) {
    StatusGroups["ONLINE_STATUS"] = "ONLINE_STATUS";
    StatusGroups["LISTENERS"] = "LISTENERS";
})(StatusGroups = exports.StatusGroups || (exports.StatusGroups = {}));
//# sourceMappingURL=types.js.map