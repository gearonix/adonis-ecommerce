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
exports.ChangeProfileController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../auth/auth.guard");
const platform_express_1 = require("@nestjs/platform-express");
const services_1 = require("../services");
const global_1 = require("../../../types/global");
let ChangeProfileController = class ChangeProfileController {
    profileService;
    constructor(profileService) {
        this.profileService = profileService;
    }
    changeProfile(body) {
        return this.profileService.changeProfile(body);
    }
    async changeAvatar(avatar) {
        const fileUrl = await this.profileService.changeUserImage(avatar);
        return { fileUrl };
    }
    async changeUserBackground(background) {
        const fileUrl = await this.profileService.changeUserBackground(background);
        return { fileUrl };
    }
};
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ChangeProfileController.prototype, "changeProfile", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('/avatar'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)(global_1.FileDirectories.USER_AVATAR)),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChangeProfileController.prototype, "changeAvatar", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)('/background'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)(global_1.FileDirectories.USER_BACKGROUND)),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ChangeProfileController.prototype, "changeUserBackground", null);
ChangeProfileController = __decorate([
    (0, common_1.Controller)('profile/change'),
    __metadata("design:paramtypes", [services_1.ProfileService])
], ChangeProfileController);
exports.ChangeProfileController = ChangeProfileController;
//# sourceMappingURL=change.profile.controller.js.map