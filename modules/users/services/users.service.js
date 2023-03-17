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
exports.UsersService = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../../entities");
const typeorm_2 = require("typeorm");
const common_1 = require("@nestjs/common");
const auth_1 = require("../../auth");
const exceptions_1 = require("../../../types/exceptions");
const messenger_1 = require("../../messenger");
const helpers_1 = require("../../../lib/helpers");
const createUsersQuery_1 = require("../lib/createUsersQuery");
let UsersService = class UsersService {
    users;
    authService;
    userStatusService;
    constructor(users, authService, userStatusService) {
        this.users = users;
        this.authService = authService;
        this.userStatusService = userStatusService;
    }
    async getUsers(query) {
        const users = await this.users.find({
            where: (0, createUsersQuery_1.createUsersQuery)(query),
            order: { registration_date: 'DESC' },
            ...(0, helpers_1.withLimit)(query.page)
        });
        const count = await this.users.count();
        return {
            data: users,
            count
        };
    }
    async getIdAndPasswordByEmail(email) {
        return this.users.findOne({
            select: ['password', 'userId'],
            where: { email }
        });
    }
    async createUser(user) {
        return this.users.save(user);
    }
    async getUserById(userId) {
        if (isNaN(userId)) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.INCORRECT_DATA, common_1.HttpStatus.BAD_REQUEST);
        }
        const sessionId = await this.authService.getUserId();
        const user = await this.users.findOneBy({ userId });
        if (!user?.userId) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.USER_NOT_EXIST, common_1.HttpStatus.NOT_FOUND);
        }
        const status = await this.userStatusService.getOnlineStatus(user.userId);
        const isMe = sessionId === user.userId;
        return {
            ...user,
            isMe,
            status
        };
    }
    async getIdByGoogleSub(googleSub) {
        return this.users.findOneBy({ google_sub: googleSub });
    }
    async getUserAvatar(userId) {
        const response = await this.users.findOne({
            select: ['avatar'],
            where: { userId }
        });
        return response?.avatar;
    }
    async getUserBackground(userId) {
        const response = await this.users.findOne({
            select: ['background'],
            where: { userId }
        });
        return response?.background;
    }
    async getUserRoleById(userId) {
        const response = await this.users.findOne({
            select: ['role'],
            where: { userId }
        });
        return response?.role;
    }
};
UsersService = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.UsersEntity)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => auth_1.AuthService))),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => messenger_1.UserStatusService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_1.AuthService,
        messenger_1.UserStatusService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map