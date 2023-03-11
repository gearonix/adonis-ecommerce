"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserDTO = exports.UserLoginDTO = exports.GoogleDTO = exports.GoogleRegisterDTO = exports.UsersModule = exports.UsersService = void 0;
var users_service_1 = require("./services/users.service");
Object.defineProperty(exports, "UsersService", { enumerable: true, get: function () { return users_service_1.UsersService; } });
var users_module_1 = require("./users.module");
Object.defineProperty(exports, "UsersModule", { enumerable: true, get: function () { return users_module_1.UsersModule; } });
var googleDTO_1 = require("./dto/googleDTO");
Object.defineProperty(exports, "GoogleRegisterDTO", { enumerable: true, get: function () { return googleDTO_1.GoogleRegisterDTO; } });
Object.defineProperty(exports, "GoogleDTO", { enumerable: true, get: function () { return googleDTO_1.GoogleDTO; } });
var authDTO_1 = require("./dto/authDTO");
Object.defineProperty(exports, "UserLoginDTO", { enumerable: true, get: function () { return authDTO_1.UserLoginDTO; } });
var authDTO_2 = require("./dto/authDTO");
Object.defineProperty(exports, "RegisterUserDTO", { enumerable: true, get: function () { return authDTO_2.RegisterUserDTO; } });
//# sourceMappingURL=index.js.map