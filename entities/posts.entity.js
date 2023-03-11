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
exports.PostsEntity = void 0;
const typeorm_1 = require("typeorm");
const global_1 = require("../types/global");
const users_entity_1 = require("./users.entity");
let PostsEntity = class PostsEntity {
    date;
    message;
    userId;
    image;
    likes;
    postId;
    user;
};
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], PostsEntity.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: 170 }),
    __metadata("design:type", String)
], PostsEntity.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], PostsEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.IMAGE, nullable: true }),
    __metadata("design:type", String)
], PostsEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { default: true }),
    __metadata("design:type", Number)
], PostsEntity.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PostsEntity.prototype, "postId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => users_entity_1.UsersEntity),
    (0, typeorm_1.JoinColumn)({ name: 'userId', foreignKeyConstraintName: 'FK_posts_userId', referencedColumnName: 'userId' }),
    __metadata("design:type", users_entity_1.UsersEntity)
], PostsEntity.prototype, "user", void 0);
PostsEntity = __decorate([
    (0, typeorm_1.Entity)('posts')
], PostsEntity);
exports.PostsEntity = PostsEntity;
//# sourceMappingURL=posts.entity.js.map