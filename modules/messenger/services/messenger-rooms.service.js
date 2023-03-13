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
let MessengerRoomsService = class MessengerRoomsService {
    rooms;
    constructor(rooms) {
        this.rooms = rooms;
    }
    async startChat(members) {
        const room = await this.getRoomByMembers(members);
        if (!room) {
            return this.rooms.save({ members });
        }
        return room;
    }
    async getRoomByMembers(members) {
        const [room] = await this.rooms.query(`SELECT * FROM messenger_rooms WHERE 
    json_contains(members, json_array(${members.join(', ')}))`);
        if (room) {
            return { ...room, members: JSON.parse(room.members) };
        }
    }
    async getUserRooms(userId) {
        return this.rooms.query(`SELECT * FROM messenger_rooms WHERE 
    json_contains(members, json_array(${userId}))`);
    }
};
MessengerRoomsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.MessengerRoomsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MessengerRoomsService);
exports.MessengerRoomsService = MessengerRoomsService;
//# sourceMappingURL=messenger-rooms.service.js.map