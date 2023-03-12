"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PAGE_LIMIT = exports.SocketGateWays = exports.FileDirectories = exports.Roles = exports.Lengths = void 0;
var Lengths;
(function (Lengths) {
    Lengths[Lengths["TITLE"] = 40] = "TITLE";
    Lengths[Lengths["IMAGE"] = 200] = "IMAGE";
    Lengths[Lengths["LONGTEXT"] = 60] = "LONGTEXT";
    Lengths[Lengths["MODEL"] = 50] = "MODEL";
    Lengths[Lengths["ID"] = 8] = "ID";
    Lengths[Lengths["TINYTEXT"] = 10] = "TINYTEXT";
    Lengths[Lengths["HASH"] = 100] = "HASH";
    Lengths[Lengths["TOKEN"] = 300] = "TOKEN";
    Lengths[Lengths["TINY_TITLE"] = 20] = "TINY_TITLE";
})(Lengths = exports.Lengths || (exports.Lengths = {}));
var Roles;
(function (Roles) {
    Roles["SALESMAN"] = "SALESMAN";
    Roles["CUSTOMER"] = "CUSTOMER";
})(Roles = exports.Roles || (exports.Roles = {}));
var FileDirectories;
(function (FileDirectories) {
    FileDirectories["USER_AVATAR"] = "user_avatars";
    FileDirectories["USER_BACKGROUND"] = "user_backgrounds";
    FileDirectories["PRODUCT_IMAGES"] = "product_images";
    FileDirectories["POST_IMAGES"] = "post_images";
})(FileDirectories = exports.FileDirectories || (exports.FileDirectories = {}));
var SocketGateWays;
(function (SocketGateWays) {
    SocketGateWays["MESSENGER"] = "messenger";
    SocketGateWays["AUTH"] = "auth";
})(SocketGateWays = exports.SocketGateWays || (exports.SocketGateWays = {}));
exports.PAGE_LIMIT = 6;
//# sourceMappingURL=global.js.map