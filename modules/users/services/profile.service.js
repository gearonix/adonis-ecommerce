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
exports.ProfileService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../../entities");
const typeorm_2 = require("typeorm");
const global_1 = require("../../../types/global");
const auth_1 = require("../../auth");
const exceptions_1 = require("../../../types/exceptions");
const users_1 = require("..");
const files_service_1 = require("../../files/files.service");
let ProfileService = class ProfileService {
    users;
    authService;
    fileService;
    usersService;
    constructor(users, authService, fileService, usersService) {
        this.users = users;
        this.authService = authService;
        this.fileService = fileService;
        this.usersService = usersService;
    }
    async changeProfile(data) {
        const userId = await this.authService.getUserId();
        const response = await this.users.update({ userId }, data);
        if (!response.affected) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.INCORRECT_USER_DATA, common_1.HttpStatus.ACCEPTED);
        }
        return this.usersService.getUserById(userId);
    }
    async replaceOldFileToNew(image, userId, mode, getPath) {
        const fileUrl = await this.fileService.uploadFile(image, mode);
        const oldImage = await getPath(userId);
        if (oldImage) {
            await this.fileService.deleteFile(oldImage, mode);
        }
        return fileUrl;
    }
    async changeUserImage(image) {
        const userId = await this.authService.getUserId();
        const fileUrl = await this.replaceOldFileToNew(image, userId, global_1.FileDirectories.USER_AVATAR, this.usersService.getUserAvatar.bind(this.usersService));
        await this.users.update({ userId }, { avatar: fileUrl });
        return fileUrl;
    }
    async changeUserBackground(image) {
        const userId = await this.authService.getUserId();
        const fileUrl = await this.replaceOldFileToNew(image, userId, global_1.FileDirectories.USER_BACKGROUND, this.usersService.getUserBackground.bind(this.usersService));
        await this.users.update({ userId }, { background: fileUrl });
        return fileUrl;
    }
};
ProfileService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.UsersEntity)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_1.AuthService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_1.AuthService,
        files_service_1.FilesService,
        users_1.UsersService])
], ProfileService);
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map