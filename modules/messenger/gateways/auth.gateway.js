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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AuthGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const config_1 = require("../../../config");
const createGateway_1 = require("../config/createGateway");
const global_1 = require("../../../types/global");
const socket_io_1 = require("socket.io");
const cookie_1 = __importDefault(require("cookie"));
const services_1 = require("../../auth/services");
const onlineUsers_service_1 = require("../services/onlineUsers.service");
const common_1 = require("@nestjs/common");
let AuthGateway = AuthGateway_1 = class AuthGateway {
    tokenService;
    onlineUsers;
    logger = new common_1.Logger(AuthGateway_1.name);
    authServer;
    constructor(tokenService, onlineUsers) {
        this.tokenService = tokenService;
        this.onlineUsers = onlineUsers;
    }
    async handleConnection(client) {
        const userId = await this.getUserId(client);
        this.onlineUsers.addUser(userId);
        this.logger.log(`Amount of connected sockets: ${this.authServer.sockets.size}`);
    }
    async handleDisconnect(client) {
        const userId = await this.getUserId(client);
        this.onlineUsers.removeUser(userId);
        this.logger.log(`Amount of connected sockets: ${this.authServer.sockets.size}`);
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
], AuthGateway.prototype, "authServer", void 0);
AuthGateway = AuthGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)(config_1.appConfig.socketPort, (0, createGateway_1.createGateway)(global_1.SocketGateWays.AUTH)),
    __metadata("design:paramtypes", [services_1.TokenService,
        onlineUsers_service_1.OnlineUsersService])
], AuthGateway);
exports.AuthGateway = AuthGateway;
//# sourceMappingURL=auth.gateway.js.map