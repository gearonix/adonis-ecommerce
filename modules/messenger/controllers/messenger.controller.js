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
const messenger_1 = require("..");
const auth_1 = require("../../auth");
let MessengerController = class MessengerController {
    roomsService;
    authService;
    constructor(roomsService, authService) {
        this.roomsService = roomsService;
        this.authService = authService;
    }
    async getUserRooms() {
        const userId = await this.authService.getUserId();
        return this.roomsService.getUserRooms(userId);
    }
};
__decorate([
    (0, common_1.Get)('/rooms'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MessengerController.prototype, "getUserRooms", null);
MessengerController = __decorate([
    (0, common_1.Controller)('messenger'),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => messenger_1.MessengerRoomsService))),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_1.AuthService))),
    __metadata("design:paramtypes", [messenger_1.MessengerRoomsService,
        auth_1.AuthService])
], MessengerController);
exports.MessengerController = MessengerController;
//# sourceMappingURL=messenger.controller.js.map