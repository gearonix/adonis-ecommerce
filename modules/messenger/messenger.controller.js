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
exports.MessengerController = void 0;
const common_1 = require("@nestjs/common");
const index_1 = require("./index");
const auth_1 = require("../auth");
const messages_service_1 = require("./services/messages.service");
let MessengerController = class MessengerController {
    roomsService;
    messagesService;
    authService;
    constructor(roomsService, messagesService, authService) {
        this.roomsService = roomsService;
        this.messagesService = messagesService;
        this.authService = authService;
    }
    async getUserRooms(userId) {
        return this.roomsService.getUserRooms(userId);
    }
    async selectRoom(id, userId) {
        return this.messagesService.selectRoom(Number(id), userId);
    }
};
__decorate([
    (0, common_1.Put)('/rooms'),
    __param(0, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MessengerController.prototype, "getUserRooms", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], MessengerController.prototype, "selectRoom", null);
MessengerController = __decorate([
    (0, common_1.Controller)('messenger'),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => index_1.RoomsService))),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => messages_service_1.MessagesService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_1.AuthService))),
    __metadata("design:paramtypes", [index_1.RoomsService,
        messages_service_1.MessagesService,
        auth_1.AuthService])
], MessengerController);
exports.MessengerController = MessengerController;
//# sourceMappingURL=messenger.controller.js.map