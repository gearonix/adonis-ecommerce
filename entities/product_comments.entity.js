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
exports.ProductCommentsEntity = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
let ProductCommentsEntity = class ProductCommentsEntity {
    date;
    message;
    userId;
    likes;
    productId;
    commentId;
    user;
};
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProductCommentsEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 170 }),
    __metadata("design:type", String)
], ProductCommentsEntity.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], ProductCommentsEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { nullable: true, default: true }),
    __metadata("design:type", Number)
], ProductCommentsEntity.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], ProductCommentsEntity.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductCommentsEntity.prototype, "commentId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity),
    (0, typeorm_1.JoinColumn)({ name: 'userId', foreignKeyConstraintName: 'FK_comments_userId', referencedColumnName: 'userId' }),
    __metadata("design:type", users_entity_1.UsersEntity)
], ProductCommentsEntity.prototype, "user", void 0);
ProductCommentsEntity = __decorate([
    (0, typeorm_1.Entity)('product_comments')
], ProductCommentsEntity);
exports.ProductCommentsEntity = ProductCommentsEntity;
//# sourceMappingURL=product_comments.entity.js.map