"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSwaggerDocs = void 0;
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("./config");
const createSwaggerDocs = (app) => {
    const swagger = new swagger_1.DocumentBuilder()
        .setTitle(config_1.appConfig.appName)
        .setDescription('REST API documentation')
        .setVersion(config_1.appConfig.appVersion)
        .build();
    return swagger_1.SwaggerModule.createDocument(app, swagger);
};
exports.createSwaggerDocs = createSwaggerDocs;
//# sourceMappingURL=swagger.js.map