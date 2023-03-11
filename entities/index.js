"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsEntity = exports.ProductCommentsEntity = exports.SavedEntity = exports.ProductsEntity = exports.UsersEntity = void 0;
const users_entity_1 = require("./users.entity");
Object.defineProperty(exports, "UsersEntity", { enumerable: true, get: function () { return users_entity_1.UsersEntity; } });
const products_entity_1 = require("./products/products.entity");
Object.defineProperty(exports, "ProductsEntity", { enumerable: true, get: function () { return products_entity_1.ProductsEntity; } });
const saved_entity_1 = require("./saved.entity");
Object.defineProperty(exports, "SavedEntity", { enumerable: true, get: function () { return saved_entity_1.SavedEntity; } });
const product_comments_entity_1 = require("./product_comments.entity");
Object.defineProperty(exports, "ProductCommentsEntity", { enumerable: true, get: function () { return product_comments_entity_1.ProductCommentsEntity; } });
const posts_entity_1 = require("./posts.entity");
Object.defineProperty(exports, "PostsEntity", { enumerable: true, get: function () { return posts_entity_1.PostsEntity; } });
exports.default = [
    users_entity_1.UsersEntity,
    products_entity_1.ProductsEntity,
    saved_entity_1.SavedEntity,
    product_comments_entity_1.ProductCommentsEntity,
    posts_entity_1.PostsEntity
];
//# sourceMappingURL=index.js.map