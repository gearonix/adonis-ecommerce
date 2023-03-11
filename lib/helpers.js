"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = exports.withLimit = exports.ifExist = exports.isNumber = exports.getResponse = exports.getRequest = exports.lastItemOf = exports.generateId = void 0;
const uuid = __importStar(require("uuid"));
const global_1 = require("../types/global");
const generateId = () => uuid.v4().slice(0, 8);
exports.generateId = generateId;
const lastItemOf = (array) => {
    return array[array.length - 1];
};
exports.lastItemOf = lastItemOf;
const getRequest = (requestContext) => {
    return requestContext.currentContext.req;
};
exports.getRequest = getRequest;
const getResponse = (requestContext) => {
    return requestContext.currentContext.res;
};
exports.getResponse = getResponse;
const isNumber = (str) => !isNaN(parseInt(str));
exports.isNumber = isNumber;
const ifExist = (name, value) => {
    return name ? value : undefined;
};
exports.ifExist = ifExist;
const withLimit = (page, take = global_1.PAGE_LIMIT) => {
    return {
        take,
        skip: page ? Number(page) * take : 0
    };
};
exports.withLimit = withLimit;
const sleep = async () => new Promise((resolve) => setTimeout(resolve, 3000));
exports.sleep = sleep;
//# sourceMappingURL=helpers.js.map