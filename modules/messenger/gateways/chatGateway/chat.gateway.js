"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const config_1 = require("../../../../config");
const socket_io_1 = require("socket.io");
const createGateway_1 = require("../../lib/createGateway");
const global_1 = require("../../../../types/global");
const status_gateway_1 = require("../statusGateway/status.gateway");
const messenger_1 = require("../..");
const types_1 = require("./types");
const common_1 = require("@nestjs/common");
const gatewayGroup_1 = require("../../lib/gatewayGroup");
const entities_1 = require("../../../../entities");
const gateways_1 = require("..");
const types_2 = require("../statusGateway/types");
const messages_service_1 = require("../../services/messages.service");
let ChatGateway = class ChatGateway {
    statusGateway;
    roomsService;
    messagesService;
    server;
    constructor(statusGateway, roomsService, messagesService) {
        this.statusGateway = statusGateway;
        this.roomsService = roomsService;
        this.messagesService = messagesService;
    }
    async startChat(invitedId, client) {
        const starterId = await this.getUserIdByHeaders(client);
        const room = await this.roomsService.startChat(starterId, invitedId);
        client.emit(types_1.MessengerEvents.ADD_ROOM, room);
    }
    async makeRoomSubscription(roomId, client) {
        const userId = await this.getUserIdByHeaders(client);
        await this.messagesService.makeMessagesRead(roomId, userId);
        client.join((0, gatewayGroup_1.gatewayGroup)(types_1.MessengerGroups.MESSENGER_ROOM, roomId));
        client.to((0, gatewayGroup_1.gatewayGroup)(types_1.MessengerGroups.MESSENGER_ROOM, roomId))
            .emit(types_1.MessengerEvents.MESSAGE_READ);
    }
    async unsubscribeFromRoom(roomId, client) {
        client.leave((0, gatewayGroup_1.gatewayGroup)(types_1.MessengerGroups.MESSENGER_ROOM, roomId));
        client.to((0, gatewayGroup_1.gatewayGroup)(types_1.MessengerGroups.MESSENGER_ROOM, roomId))
            .emit(types_1.MessengerEvents.NO_LONGER_TYPING);
    }
    async sendMessage(message, client) {
        const senderId = await this.getUserIdByHeaders(client);
        const newMessage = await this.messagesService.saveMessage({ ...message, senderId });
        client.emit(types_1.MessengerEvents.ADD_MESSAGE, newMessage);
        client.to((0, gatewayGroup_1.gatewayGroup)(types_1.MessengerGroups.MESSENGER_ROOM, message.roomId))
            .emit(types_1.MessengerEvents.ADD_MESSAGE, newMessage);
        this.statusGateway.authServer.to((0, gatewayGroup_1.gatewayGroup)(gateways_1.StatusGroups.LISTENERS, message.roomId))
            .emit(types_2.StatusEvents.SHOW_NOTIFICATION, newMessage);
    }
    async makeMessageRead(message, client) {
        await this.messagesService.makeMessageRead(message.messageId);
        client.to((0, gatewayGroup_1.gatewayGroup)(types_1.MessengerGroups.MESSENGER_ROOM, message.roomId))
            .emit(types_1.MessengerEvents.MESSAGE_READ);
    }
    async userTyping(roomId, client) {
        const userId = await this.getUserIdByHeaders(client);
        client.to((0, gatewayGroup_1.gatewayGroup)(types_1.MessengerGroups.MESSENGER_ROOM, roomId))
            .emit(types_1.MessengerEvents.TYPING, { userId });
    }
    async noLongerTyping(roomId, client) {
        const userId = await this.getUserIdByHeaders(client);
        client.to((0, gatewayGroup_1.gatewayGroup)(types_1.MessengerGroups.MESSENGER_ROOM, roomId))
            .emit(types_1.MessengerEvents.NO_LONGER_TYPING, { userId });
    }
    async getUserIdByHeaders(client) {
        const userId = Number(client.handshake.headers.userid);
        return isNaN(userId) ? null : userId;
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], ChatGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)(types_1.MessengerEvents.START_CHAT),
    __param(0, (0, websockets_1.MessageBody)('targetId')),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "startChat", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(types_1.MessengerEvents.SUBSCRIBE_TO_ROOM),
    __param(0, (0, websockets_1.MessageBody)('roomId')),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "makeRoomSubscription", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(types_1.MessengerEvents.UNSUBSCRIBE_FROM_ROOM),
    __param(0, (0, websockets_1.MessageBody)('roomId')),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "unsubscribeFromRoom", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(types_1.MessengerEvents.SEND_MESSAGE),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "sendMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(types_1.MessengerEvents.MESSAGE_READ),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserMessagesEntity,
        socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "makeMessageRead", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(types_1.MessengerEvents.TYPING),
    __param(0, (0, websockets_1.MessageBody)('roomId')),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "userTyping", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(types_1.MessengerEvents.NO_LONGER_TYPING),
    __param(0, (0, websockets_1.MessageBody)('roomId')),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], ChatGateway.prototype, "noLongerTyping", null);
ChatGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(config_1.appConfig.socketPort, (0, createGateway_1.createGateway)(global_1.SocketGateWays.MESSENGER)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => messenger_1.RoomsService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => messages_service_1.MessagesService))),
    __metadata("design:paramtypes", [status_gateway_1.StatusGateway,
        messenger_1.RoomsService,
        messages_service_1.MessagesService])
], ChatGateway);
exports.ChatGateway = ChatGateway;
//# sourceMappingURL=chat.gateway.js.map