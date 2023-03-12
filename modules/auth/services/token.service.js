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
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_1 = require("../../users");
const nestjs_request_context_1 = require("nestjs-request-context");
const helpers_1 = require("../../../lib/helpers");
const exceptions_1 = require("../../../types/exceptions");
let TokenService = class TokenService {
    usersService;
    jwtService;
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async generateToken(userId) {
        const token = this.jwtService.sign({ payload: { userId } }, { expiresIn: '1h' });
        return { token };
    }
    async getUser() {
        try {
            const userId = await this.getUserIdByCookie();
            return await this.usersService.getUserById(userId);
        }
        catch (e) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.INCORRECT_TOKEN, common_1.HttpStatus.NO_CONTENT);
        }
    }
    async getUserIdByCookie() {
        const req = (0, helpers_1.getRequest)(nestjs_request_context_1.RequestContext);
        const token = req.cookies.AUTH_TOKEN;
        if (!token) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.INCORRECT_TOKEN, common_1.HttpStatus.NO_CONTENT);
        }
        try {
            return this.verifyToken(token);
        }
        catch (e) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.INCORRECT_TOKEN, common_1.HttpStatus.NO_CONTENT);
        }
    }
    async setAuthCookie(tokenData) {
        const res = (0, helpers_1.getResponse)(nestjs_request_context_1.RequestContext);
        res.cookie('AUTH_TOKEN', tokenData.token);
        return tokenData;
    }
    async verifyToken(token) {
        const tokenData = await this.jwtService.verify(token);
        const userId = tokenData.payload.userId;
        if (!userId) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.NO_TOKEN, common_1.HttpStatus.NO_CONTENT);
        }
        return userId;
    }
};
TokenService = __decorate([
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_1.UsersService))),
    __metadata("design:paramtypes", [users_1.UsersService,
        jwt_1.JwtService])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map