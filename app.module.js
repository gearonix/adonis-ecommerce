"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const config_2 = require("./config");
const auth_1 = require("./modules/auth");
const users_1 = require("./modules/users");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const products_1 = require("./modules/products");
const comments_1 = require("./modules/comments");
const nestjs_request_context_1 = require("nestjs-request-context");
const posts_module_1 = require("./modules/posts/posts.module");
const messenger_1 = require("./modules/messenger");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `.${process.env.NODE_ENV}.env`,
                cache: true
            }),
            typeorm_1.TypeOrmModule.forRoot((0, config_2.buildDBConfig)()),
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.resolve)(__dirname, 'static'),
                serveRoot: `/${config_2.appConfig.globalPrefix}/static`
            }),
            auth_1.AuthModule,
            users_1.UsersModule,
            products_1.ProductsModule,
            comments_1.CommentsModule,
            posts_module_1.PostsModule,
            messenger_1.MessengerModule,
            nestjs_request_context_1.RequestContextModule
        ],
        controllers: [],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map