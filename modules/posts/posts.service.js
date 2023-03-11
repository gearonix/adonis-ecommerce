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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../entities");
const typeorm_2 = require("typeorm");
const auth_1 = require("../auth");
const global_1 = require("../../types/global");
const helpers_1 = require("../../lib/helpers");
const files_service_1 = require("../files/files.service");
let PostsService = class PostsService {
    posts;
    authService;
    fileService;
    constructor(posts, authService, fileService) {
        this.posts = posts;
        this.authService = authService;
        this.fileService = fileService;
    }
    async getPostsByUserId(userId, page) {
        const [posts, count] = await this.posts.findAndCount({
            relations: { user: true },
            where: { userId },
            order: { date: 'DESC' },
            ...(0, helpers_1.withLimit)(page)
        });
        return { data: posts, count };
    }
    async createPost(message) {
        const userId = await this.authService.getUserId();
        const post = await this.posts.save({ userId, message });
        return this.getPostById(post.postId);
    }
    async setPostImage(image, postId) {
        const fileUrl = await this.fileService.uploadFile(image, global_1.FileDirectories.POST_IMAGES);
        await this.posts.update({ postId }, { image: fileUrl });
        return { fileUrl };
    }
    async getPostById(postId) {
        return this.posts.findOne({
            relations: { user: true },
            where: { postId }
        });
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.PostsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_1.AuthService,
        files_service_1.FilesService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map