"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("../../config");
const users_1 = require("../users");
const nestjs_request_context_1 = require("nestjs-request-context");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [controllers_1.AuthController, controllers_1.GoogleController, controllers_1.TokenController],
        providers: [services_1.AuthService, services_1.GoogleService, services_1.TokenService],
        imports: [
            (0, common_1.forwardRef)(() => users_1.UsersModule),
            jwt_1.JwtModule.register({
                secret: process.env.PRIVATE_KEY || config_1.appConfig.privateKey,
                signOptions: {
                    expiresIn: '24h'
                }
            }),
            nestjs_request_context_1.RequestContextModule
        ],
        exports: [services_1.AuthService, jwt_1.JwtModule]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map