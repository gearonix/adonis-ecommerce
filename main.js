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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
const swagger_1 = require("@nestjs/swagger");
const process = __importStar(require("process"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const { PORT, docsPrefix, globalPrefix } = config_1.appConfig;
    app.enableCors(config_1.corsConfig);
    app.setGlobalPrefix(globalPrefix);
    app.use((0, cookie_parser_1.default)());
    swagger_1.SwaggerModule.setup(docsPrefix, app, (0, config_1.createSwaggerDocs)(app));
    await app.listen(process.env.PORT || PORT, () => console.log(`Nestjs server started at port ${PORT}`));
};
bootstrap();
//# sourceMappingURL=main.js.map