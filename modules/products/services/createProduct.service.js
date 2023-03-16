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
exports.CreateProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("../../../entities/products.entity");
const typeorm_2 = require("typeorm");
const auth_1 = require("../../auth");
const users_1 = require("../../users");
const global_1 = require("../../../types/global");
const exceptions_1 = require("../../../types/exceptions");
const helpers_1 = require("../../../lib/helpers");
const files_service_1 = require("../../files/files.service");
let CreateProductService = class CreateProductService {
    products;
    authService;
    usersService;
    fileService;
    constructor(products, authService, usersService, fileService) {
        this.products = products;
        this.authService = authService;
        this.usersService = usersService;
        this.fileService = fileService;
    }
    async create(product) {
        await this.authService.checkUserRole();
        const salesmanId = await this.authService.getUserId();
        return this.products.save({ ...product, salesmanId });
    }
    async setImages(images, productId) {
        await this.authService.checkUserRole();
        if (!(0, helpers_1.isNumber)(productId)) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.INCORRECT_DATA, common_1.HttpStatus.BAD_REQUEST);
        }
        const fileUrls = [];
        for (const image of images) {
            const url = await this.fileService.uploadFile(image, global_1.FileDirectories.PRODUCT_IMAGES);
            fileUrls.push(url);
        }
        const salesmanId = await this.authService.getUserId();
        await this.products.update({ productId: +productId, salesmanId }, { images: fileUrls });
        return this.products.findOneBy({ productId: +productId });
    }
};
CreateProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.ProductsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_1.AuthService,
        users_1.UsersService,
        files_service_1.FilesService])
], CreateProductService);
exports.CreateProductService = CreateProductService;
//# sourceMappingURL=createProduct.service.js.map