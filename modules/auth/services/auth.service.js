"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_1 = require("../../users");
const bcrypt = __importStar(require("bcryptjs"));
const serverExceptions_1 = require("../../../types/exceptions/serverExceptions");
const nestjs_request_context_1 = require("nestjs-request-context");
const token_service_1 = require("./token.service");
const global_1 = require("../../../types/global");
let AuthService = class AuthService {
    usersService;
    jwtService;
    tokenService;
    constructor(usersService, jwtService, tokenService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.tokenService = tokenService;
    }
    async login(userDto) {
        const userId = await this.validateUser(userDto);
        return this.tokenService.generateToken(userId);
    }
    async registration(user) {
        const candidate = await this.usersService.getIdAndPasswordByEmail(user.email);
        if (candidate) {
            throw new common_1.HttpException(serverExceptions_1.ServerExceptions.USER_ALREADY_EXISTS, common_1.HttpStatus.ACCEPTED);
        }
        const hashPassword = await bcrypt.hash(user.password, 5);
        const { userId } = await this.usersService.createUser({
            ...user,
            password: hashPassword
        });
        return this.tokenService.generateToken(userId);
    }
    async validateUser(userDto) {
        const user = await this.usersService.getIdAndPasswordByEmail(userDto.email);
        if (!user) {
            throw new common_1.HttpException(serverExceptions_1.ServerExceptions.USER_NOT_EXIST, common_1.HttpStatus.NO_CONTENT);
        }
        const { password, userId } = user;
        const passwordEquals = await bcrypt.compare(userDto.password, password);
        if (passwordEquals) {
            return userId;
        }
        throw new common_1.HttpException(serverExceptions_1.ServerExceptions.INCORRECT_PASSWORD, common_1.HttpStatus.ACCEPTED);
    }
    async getUserId() {
        const req = nestjs_request_context_1.RequestContext.currentContext.req;
        const userId = req?.user?.payload?.userId;
        if (!userId) {
            try {
                const userId = await this.tokenService.getUserIdByHeaders();
                return userId;
            }
            catch (e) {
                return null;
            }
        }
        return userId;
    }
    async checkUserRole() {
        const userId = await this.getUserId();
        const userRole = await this.usersService.getUserRoleById(userId);
        if (userRole !== global_1.Roles.SALESMAN) {
            throw new common_1.HttpException(serverExceptions_1.ServerExceptions.FORBIDDEN, common_1.HttpStatus.FORBIDDEN);
        }
    }
};
AuthService = __decorate([
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_1.UsersService))),
    __metadata("design:paramtypes", [users_1.UsersService,
        jwt_1.JwtService,
        token_service_1.TokenService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map