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
exports.GoogleService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_1 = require("../../users");
const auth_1 = require("..");
const token_service_1 = require("./token.service");
const helpers_1 = require("../../../lib/helpers");
const global_1 = require("../../../types/global");
let GoogleService = class GoogleService {
    usersService;
    jwtService;
    authService;
    tokenService;
    constructor(usersService, jwtService, authService, tokenService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.authService = authService;
        this.tokenService = tokenService;
    }
    async signupWithGoogle({ jwt, role }) {
        const googleData = await this.jwtService.decode(jwt);
        const user = this.convertGoogleData(googleData, role);
        return this.authService.registration(user);
    }
    convertGoogleData(googleData, role) {
        const { given_name, sub, family_name, email, picture } = googleData;
        return {
            email,
            firstName: given_name,
            lastName: family_name,
            google_sub: sub,
            password: `google_generated__${(0, helpers_1.generateId)()}`,
            role,
            avatar: picture
        };
    }
    async loginWithGoogle(jwt) {
        const googleData = await this.jwtService.decode(jwt);
        const user = await this.usersService.getIdByGoogleSub(googleData.sub);
        if (!user) {
            return this.signupWithGoogle({ jwt, role: global_1.Roles.CUSTOMER });
        }
        return this.tokenService.generateToken(user.userId);
    }
};
GoogleService = __decorate([
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_1.UsersService))),
    __metadata("design:paramtypes", [users_1.UsersService,
        jwt_1.JwtService,
        auth_1.AuthService,
        token_service_1.TokenService])
], GoogleService);
exports.GoogleService = GoogleService;
//# sourceMappingURL=google.service.js.map