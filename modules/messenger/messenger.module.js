"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessengerModule = void 0;
const common_1 = require("@nestjs/common");
const chat_gateway_1 = require("./gateways/chat.gateway");
const auth_1 = require("../auth");
const auth_gateway_1 = require("./gateways/auth.gateway");
const onlineUsers_service_1 = require("./services/onlineUsers.service");
let MessengerModule = class MessengerModule {
};
MessengerModule = __decorate([
    (0, common_1.Module)({
        providers: [chat_gateway_1.ChatGateway, auth_gateway_1.AuthGateway, onlineUsers_service_1.OnlineUsersService],
        imports: [
            auth_1.AuthModule
        ]
    })
], MessengerModule);
exports.MessengerModule = MessengerModule;
//# sourceMappingURL=messenger.module.js.map