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
exports.ProductsEntity = void 0;
const typeorm_1 = require("typeorm");
const users_entity_1 = require("./users.entity");
const types_1 = require("../types/elements/types");
const global_1 = require("../types/global");
let ProductsEntity = class ProductsEntity {
    name;
    price;
    rating;
    description;
    inStock;
    images;
    savedCount;
    salesmanId;
    features;
    material;
    type;
    design;
    warrantyCount;
    model;
    size;
    productId;
};
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.TINY_TITLE, nullable: true }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint'),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint'),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.LONGTEXT, nullable: true }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean'),
    __metadata("design:type", Boolean)
], ProductsEntity.prototype, "inStock", void 0);
__decorate([
    (0, typeorm_1.Column)('json', { nullable: true }),
    __metadata("design:type", Array)
], ProductsEntity.prototype, "images", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { default: true }),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "savedCount", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.UsersEntity, (user) => user.userId),
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "salesmanId", void 0);
__decorate([
    (0, typeorm_1.Column)('json'),
    __metadata("design:type", Array)
], ProductsEntity.prototype, "features", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.TITLE, nullable: true }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "material", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.MODEL, nullable: true }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.MODEL, nullable: true }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "design", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint'),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "warrantyCount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.MODEL, nullable: true }),
    __metadata("design:type", String)
], ProductsEntity.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { length: global_1.Lengths.MODEL, nullable: true }),
    __metadata("design:type", Object)
], ProductsEntity.prototype, "size", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProductsEntity.prototype, "productId", void 0);
ProductsEntity = __decorate([
    (0, typeorm_1.Entity)('products')
], ProductsEntity);
exports.ProductsEntity = ProductsEntity;
//# sourceMappingURL=products.entity.js.map