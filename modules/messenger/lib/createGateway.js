"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGateway = void 0;
const createGateway = (path) => ({
    cors: true,
    transports: ['websocket', 'polling'],
    path
});
exports.createGateway = createGateway;
//# sourceMappingURL=createGateway.js.map