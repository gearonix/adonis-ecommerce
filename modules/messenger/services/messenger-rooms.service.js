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
exports.MessengerRoomsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../../entities");
const typeorm_2 = require("typeorm");
const auth_1 = require("../../auth");
const exceptions_1 = require("../../../types/exceptions");
let MessengerRoomsService = class MessengerRoomsService {
    rooms;
    messages;
    authService;
    constructor(rooms, messages, authService) {
        this.rooms = rooms;
        this.messages = messages;
        this.authService = authService;
    }
    async startChat(starterId, invitedId) {
        const room = await this.getRoomByMembers(starterId, invitedId);
        if (!room) {
            return this.rooms.save({ starterId, invitedId });
        }
        return room;
    }
    async getRoomByMembers(starterId, invitedId) {
        return this.rooms.findOneBy([{ starterId, invitedId },
            { starterId: invitedId, invitedId: starterId }]);
    }
    async getUserRooms(userId) {
        return this.rooms.find({
            where: [{ starterId: userId }, { invitedId: userId }],
            relations: {
                starterUser: true,
                invitedUser: true
            }
        });
    }
    async selectRoom(roomId, userId) {
        await this.checkUserHasRoom(roomId, userId);
        return this.messages.find({
            where: { roomId }
        });
    }
    async saveMessage(message) {
        return this.messages.save(message);
    }
    async checkUserHasRoom(roomId, userId) {
        if (isNaN(roomId)) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.INCORRECT_DATA, common_1.HttpStatus.BAD_REQUEST);
        }
        const rooms = await this.getUserRooms(userId);
        const ids = rooms.map(({ roomId }) => roomId);
        if (!ids.includes(roomId)) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.GROUP_FORBIDDEN, common_1.HttpStatus.FORBIDDEN);
        }
    }
};
MessengerRoomsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.MessengerRoomsEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.UserMessagesEntity)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        auth_1.AuthService])
], MessengerRoomsService);
exports.MessengerRoomsService = MessengerRoomsService;
//# sourceMappingURL=messenger-rooms.service.js.map