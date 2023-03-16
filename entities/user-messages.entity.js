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
exports.UserMessagesEntity = void 0;
const typeorm_1 = require("typeorm");
const global_1 = require("../types/global");
const users_entity_1 = require("./users.entity");
let UserMessagesEntity = class UserMessagesEntity {
    creationDate;
    roomId;
    senderId;
    messageId;
    messageText;
    image;
    isRead;
    user;
};
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UserMessagesEntity.prototype, "creationDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], UserMessagesEntity.prototype, "roomId", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], UserMessagesEntity.prototype, "senderId", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserMessagesEntity.prototype, "messageId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 200 }),
    __metadata("design:type", String)
], UserMessagesEntity.prototype, "messageText", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.IMAGE, nullable: true }),
    __metadata("design:type", String)
], UserMessagesEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { default: false, nullable: true }),
    __metadata("design:type", Boolean)
], UserMessagesEntity.prototype, "isRead", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity),
    (0, typeorm_1.JoinColumn)({ name: 'senderId', foreignKeyConstraintName: 'FK_messages_senderId_users', referencedColumnName: 'userId' }),
    __metadata("design:type", users_entity_1.UsersEntity)
], UserMessagesEntity.prototype, "user", void 0);
UserMessagesEntity = __decorate([
    (0, typeorm_1.Entity)('messages')
], UserMessagesEntity);
exports.UserMessagesEntity = UserMessagesEntity;
//# sourceMappingURL=user-messages.entity.js.map