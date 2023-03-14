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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessengerRoomsEntity = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
let MessengerRoomsEntity = class MessengerRoomsEntity {
    creationDate;
    starterId;
    invitedId;
    roomId;
    starterUser;
    invitedUser;
};
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MessengerRoomsEntity.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], MessengerRoomsEntity.prototype, "starterId", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], MessengerRoomsEntity.prototype, "invitedId", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], MessengerRoomsEntity.prototype, "roomId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity),
    (0, typeorm_1.JoinColumn)({ name: 'starterId', foreignKeyConstraintName: 'FK_rooms_starterId_users', referencedColumnName: 'userId' }),
    __metadata("design:type", users_entity_1.UsersEntity)
], MessengerRoomsEntity.prototype, "starterUser", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity),
    (0, typeorm_1.JoinColumn)({ name: 'invitedId', foreignKeyConstraintName: 'FK_rooms_invitedId_users', referencedColumnName: 'userId' }),
    __metadata("design:type", users_entity_1.UsersEntity)
], MessengerRoomsEntity.prototype, "invitedUser", void 0);
MessengerRoomsEntity = __decorate([
    (0, typeorm_1.Entity)('messenger_rooms')
], MessengerRoomsEntity);
exports.MessengerRoomsEntity = MessengerRoomsEntity;
//# sourceMappingURL=messenger-rooms.entity.js.map