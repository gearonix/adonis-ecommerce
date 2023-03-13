"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGateway = void 0;
const config_1 = require("../../../config");
const createGateway = (gateway) => ({
    namespace: gateway,
    cors: config_1.corsConfig,
    cookie: true
});
exports.createGateway = createGateway;
//# sourceMappingURL=createGateway.js.map