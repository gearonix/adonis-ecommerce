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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("../../../entities/products/products.entity");
const typeorm_2 = require("typeorm");
const auth_1 = require("../../auth");
const users_1 = require("../../users");
const global_1 = require("../../../types/global");
const exceptions_1 = require("../../../types/exceptions");
const helpers_1 = require("../../../lib/helpers");
const saved_service_1 = require("./saved.service");
const comments_service_1 = require("../../comments/comments.service");
let ProductsService = class ProductsService {
    products;
    authService;
    usersService;
    savedService;
    commentsService;
    constructor(products, authService, usersService, savedService, commentsService) {
        this.products = products;
        this.authService = authService;
        this.usersService = usersService;
        this.savedService = savedService;
        this.commentsService = commentsService;
    }
    async getProducts(query) {
        const { size, model, type, rating, search, inStock } = query;
        const [data, count] = await this.products.findAndCount({
            where: {
                size,
                model,
                type,
                rating,
                name: (0, helpers_1.ifExist)(search, (0, typeorm_2.Like)(`%${search}%`)),
                inStock: (0, helpers_1.ifExist)(inStock === 'true', true)
            },
            ...(0, helpers_1.withLimit)(query.page)
        });
        return { data, count };
    }
    async randomProducts(query) {
        return this.products.createQueryBuilder().orderBy('RAND()')
            .limit(global_1.PAGE_LIMIT).where(query).getMany();
    }
    async getProduct(productId) {
        if (isNaN(productId)) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.INCORRECT_DATA, common_1.HttpStatus.BAD_REQUEST);
        }
        const productInfo = await this.products.findOneBy({ productId });
        const salesman = await this.usersService.getUserById(productInfo.salesmanId);
        const comments = await this.commentsService.getProductComments(productId);
        return {
            productInfo,
            salesman,
            comments
        };
    }
    async userProducts(salesmanId, page) {
        const [data, count] = await this.products.findAndCount({
            where: { salesmanId },
            ...(0, helpers_1.withLimit)(page)
        });
        return { data, count };
    }
    async getProductsIdsByUserId(salesmanId) {
        if (isNaN(salesmanId)) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.INCORRECT_DATA, common_1.HttpStatus.BAD_REQUEST);
        }
        const saved = await this.savedService.getSavedProducts(salesmanId);
        return this.products.findBy({ productId: (0, typeorm_2.In)(saved?.map((i) => i.productId)) });
    }
    async getProductsByIds(body) {
        return this.products.findBy({ productId: (0, typeorm_2.In)(body.ids) });
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(products_entity_1.ProductsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_1.AuthService,
        users_1.UsersService,
        saved_service_1.SavedService,
        comments_service_1.CommentsService])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map