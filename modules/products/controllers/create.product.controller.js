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
exports.CreateProductController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./../dto");
const auth_guard_1 = require("../../auth/auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const services_1 = require("../services");
const global_1 = require("../../../types/global");
let CreateProductController = class CreateProductController {
    createProductService;
    constructor(createProductService) {
        this.createProductService = createProductService;
    }
    createProduct(product) {
        return this.createProductService.create(product);
    }
    setProductImages(images, productId) {
        return this.createProductService.setImages(images, productId);
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ProductDTO]),
    __metadata("design:returntype", void 0)
], CreateProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Post)('/set/images'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)(global_1.FileDirectories.PRODUCT_IMAGES)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Query)('product_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CreateProductController.prototype, "setProductImages", null);
CreateProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [services_1.CreateProductService])
], CreateProductController);
exports.CreateProductController = CreateProductController;
//# sourceMappingURL=create.product.controller.js.map