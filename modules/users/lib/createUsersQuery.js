"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsersQuery = void 0;
const typeorm_1 = require("typeorm");
const global_1 = require("../../../types/global");
const createUsersQuery = (query) => {
    const createQuery = (field) => ({
        [field]: (0, typeorm_1.Like)(`%${query.search || ''}%`),
        role: query.role === 'null' ? undefined : global_1.Roles.SALESMAN
    });
    if (query.role || query.search) {
        return [createQuery('firstName'), createQuery('lastName'), createQuery('email')];
    }
};
exports.createUsersQuery = createUsersQuery;
//# sourceMappingURL=createUsersQuery.js.map