"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsConfig = void 0;
exports.corsConfig = {
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    methods: ['POST', 'PUT', 'DELETE', 'GET'],
    credentials: true
};
//# sourceMappingURL=cors.js.map