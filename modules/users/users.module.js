"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../entities");
const auth_1 = require("../auth");
const nestjs_request_context_1 = require("nestjs-request-context");
const files_1 = require("../files");
const messenger_1 = require("../messenger");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [controllers_1.UsersController, controllers_1.ChangeProfileController],
        providers: [services_1.UsersService, services_1.ProfileService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([entities_1.UsersEntity]),
            (0, common_1.forwardRef)(() => auth_1.AuthModule),
            nestjs_request_context_1.RequestContextModule,
            files_1.FilesModule,
            (0, common_1.forwardRef)(() => messenger_1.MessengerModule)
        ],
        exports: [services_1.UsersService]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map