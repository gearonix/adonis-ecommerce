"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerExceptions = void 0;
var ServerExceptions;
(function (ServerExceptions) {
    ServerExceptions["USER_NOT_EXIST"] = "This user does not exist";
    ServerExceptions["INCORRECT_PASSWORD"] = "Incorrect email or password";
    ServerExceptions["USER_ALREADY_EXISTS"] = "User with this email already exists";
    ServerExceptions["NOT_AUTHORIZED"] = "User not authorized";
    ServerExceptions["NO_COOKIE"] = "No cookie";
    ServerExceptions["INCORRECT_TOKEN"] = "Incorrect token";
    ServerExceptions["NO_TOKEN"] = "Headers does not contain a token";
    ServerExceptions["INCORRECT_USER_DATA"] = "You have entered incorrect user data";
    ServerExceptions["FILE_UPLOAD_ERROR"] = "An error occurred while writing the file";
    ServerExceptions["FILE_REMOVAL_ERROR"] = "An error occurred while removing the file";
    ServerExceptions["FORBIDDEN"] = "Forbidden for you";
    ServerExceptions["INCORRECT_DATA"] = "Your data is incorrect";
    ServerExceptions["GROUP_FORBIDDEN"] = "User does not have this group";
})(ServerExceptions = exports.ServerExceptions || (exports.ServerExceptions = {}));
//# sourceMappingURL=serverExceptions.js.map