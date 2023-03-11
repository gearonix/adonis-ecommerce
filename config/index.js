"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSwaggerDocs = exports.buildDBConfig = exports.corsConfig = exports.appConfig = void 0;
var config_1 = require("./build/config");
Object.defineProperty(exports, "appConfig", { enumerable: true, get: function () { return config_1.appConfig; } });
var cors_1 = require("./build/cors");
Object.defineProperty(exports, "corsConfig", { enumerable: true, get: function () { return cors_1.corsConfig; } });
var database_1 = require("./build/database");
Object.defineProperty(exports, "buildDBConfig", { enumerable: true, get: function () { return database_1.buildDBConfig; } });
var swagger_1 = require("./build/swagger");
Object.defineProperty(exports, "createSwaggerDocs", { enumerable: true, get: function () { return swagger_1.createSwaggerDocs; } });
//# sourceMappingURL=index.js.map