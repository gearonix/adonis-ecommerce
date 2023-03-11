"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModule = void 0;
const common_1 = require("@nestjs/common");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
const auth_1 = require("../auth");
const users_1 = require("../users");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../entities");
const nestjs_request_context_1 = require("nestjs-request-context");
const comments_1 = require("../comments");
const files_1 = require("../files");
let ProductsModule = class ProductsModule {
};
ProductsModule = __decorate([
    (0, common_1.Module)({
        controllers: [controllers_1.ProductsController, controllers_1.CreateProductController, controllers_1.SavedProductsController],
        providers: [services_1.CreateProductService, services_1.ProductsService, services_1.SavedService],
        imports: [
            typeorm_1.TypeOrmModule.forFeature([entities_1.ProductsEntity, entities_1.SavedEntity]),
            auth_1.AuthModule,
            users_1.UsersModule,
            nestjs_request_context_1.RequestContextModule,
            files_1.FilesModule,
            comments_1.CommentsModule
        ]
    })
], ProductsModule);
exports.ProductsModule = ProductsModule;
//# sourceMappingURL=products.module.js.map