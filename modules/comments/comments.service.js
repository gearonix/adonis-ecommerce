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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../entities");
const typeorm_2 = require("typeorm");
const auth_1 = require("../auth");
const exceptions_1 = require("../../types/exceptions");
const helpers_1 = require("../../lib/helpers");
let CommentsService = class CommentsService {
    productComments;
    products;
    authService;
    constructor(productComments, products, authService) {
        this.productComments = productComments;
        this.products = products;
        this.authService = authService;
    }
    async createProductComment({ message, productId }) {
        const userId = await this.authService.getUserId();
        const newComment = await this.productComments.save({ message, productId, userId });
        return this.getCommentById(newComment.commentId);
    }
    async getProductComments(productId, page) {
        if (isNaN(productId)) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.INCORRECT_DATA, common_1.HttpStatus.BAD_REQUEST);
        }
        const [comments, count] = await this.productComments.findAndCount({
            relations: { user: true },
            where: { productId },
            select: ['message', 'likes', 'date', 'commentId'],
            order: { date: 'DESC' },
            ...(0, helpers_1.withLimit)(page)
        });
        return { data: comments, count };
    }
    async getCommentById(commentId) {
        return this.productComments.findOne({
            relations: { user: true },
            where: { commentId },
            select: ['message', 'likes', 'date', 'commentId']
        });
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.ProductCommentsEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(entities_1.ProductsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        auth_1.AuthService])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map