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
exports.UsersEntity = void 0;
const typeorm_1 = require("typeorm");
const product_comments_entity_1 = require("./product_comments.entity");
const posts_entity_1 = require("./posts.entity");
const global_1 = require("../types/global");
let UsersEntity = class UsersEntity {
    role;
    firstName;
    lastName;
    email;
    password;
    avatar;
    background;
    description;
    userId;
    country;
    city;
    registration_date;
    google_sub;
    user;
};
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: global_1.Roles }),
    __metadata("design:type", String)
], UsersEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.TITLE, nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.TITLE, nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.TITLE }),
    __metadata("design:type", String)
], UsersEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.HASH, select: false }),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.IMAGE, nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.IMAGE, nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "background", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.LONGTEXT, nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsersEntity.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.TITLE, nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.TITLE, nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UsersEntity.prototype, "registration_date", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.LONGTEXT, nullable: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "google_sub", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_comments_entity_1.ProductCommentsEntity, (comment) => comment.user),
    (0, typeorm_1.OneToMany)(() => posts_entity_1.PostsEntity, (post) => post.user),
    __metadata("design:type", Array)
], UsersEntity.prototype, "user", void 0);
UsersEntity = __decorate([
    (0, typeorm_1.Entity)('users')
], UsersEntity);
exports.UsersEntity = UsersEntity;
//# sourceMappingURL=users.entity.js.map