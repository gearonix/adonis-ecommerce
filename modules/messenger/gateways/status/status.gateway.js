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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var StatusGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const config_1 = require("../../../../config");
const createGateway_1 = require("../../lib/createGateway");
const global_1 = require("../../../../types/global");
const socket_io_1 = require("socket.io");
const cookie_1 = __importDefault(require("cookie"));
const services_1 = require("../../../auth/services");
const user_status_service_1 = require("../../services/user-status.service");
const common_1 = require("@nestjs/common");
const gatewayGroup_1 = require("../../lib/gatewayGroup");
const types_1 = require("./types");
const messenger_1 = require("../..");
let StatusGateway = StatusGateway_1 = class StatusGateway {
    tokenService;
    onlineUsers;
    roomsService;
    logger = new common_1.Logger(StatusGateway_1.name);
    authServer;
    constructor(tokenService, onlineUsers, roomsService) {
        this.tokenService = tokenService;
        this.onlineUsers = onlineUsers;
        this.roomsService = roomsService;
    }
    async handleConnection(client) {
        const userId = await this.getUserId(client);
        this.onlineUsers.addUser(userId);
        client.to((0, gatewayGroup_1.gatewayGroup)(types_1.StatusGroups.ONLINE_STATUS, userId))
            .emit(types_1.StatusEvents.STATUS_CHANGED, { status: global_1.UserStatus.ONLINE });
        const rooms = await this.roomsService.getUserRooms(userId);
        for (const room of rooms) {
            client.join((0, gatewayGroup_1.gatewayGroup)(types_1.StatusGroups.LISTENERS, room.roomId));
        }
        this.logger.log(`Amount of connected sockets: ${this.authServer.sockets.size}`);
    }
    async handleDisconnect(client) {
        const userId = await this.getUserId(client);
        this.onlineUsers.removeUser(userId);
        client.to((0, gatewayGroup_1.gatewayGroup)(types_1.StatusGroups.ONLINE_STATUS, userId))
            .emit(types_1.StatusEvents.STATUS_CHANGED, { status: global_1.UserStatus.OFFLINE });
        this.logger.log(`Amount of connected sockets: ${this.authServer.sockets.size}`);
    }
    async subscribeUser(targetId, client) {
        client.join((0, gatewayGroup_1.gatewayGroup)(types_1.StatusGroups.ONLINE_STATUS, targetId));
        const status = this.onlineUsers.getOnlineStatus(targetId);
        client.emit(types_1.StatusEvents.STATUS_CHANGED, { status });
    }
    async getUserId(client) {
        const cookies = client.handshake.headers.cookie;
        if (!cookies)
            return;
        const token = cookie_1.default.parse(cookies).AUTH_TOKEN;
        if (token) {
            return this.tokenService.verifyToken(token);
        }
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Namespace)
], StatusGateway.prototype, "authServer", void 0);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], StatusGateway.prototype, "handleConnection", null);
__decorate([
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], StatusGateway.prototype, "handleDisconnect", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(types_1.StatusEvents.SUBSCRIBE_TO_STATUS),
    __param(0, (0, websockets_1.MessageBody)('targetId')),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], StatusGateway.prototype, "subscribeUser", null);
StatusGateway = StatusGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)(config_1.appConfig.socketPort, (0, createGateway_1.createGateway)(global_1.SocketGateWays.AUTH)),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => services_1.TokenService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => messenger_1.MessengerRoomsService))),
    __metadata("design:paramtypes", [services_1.TokenService,
        user_status_service_1.UserStatusService,
        messenger_1.MessengerRoomsService])
], StatusGateway);
exports.StatusGateway = StatusGateway;
//# sourceMappingURL=status.gateway.js.map