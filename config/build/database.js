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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildDBConfig = void 0;
const process = __importStar(require("process"));
const entities_1 = __importDefault(require("../../entities"));
const buildDBConfig = () => {
    const { HOST_NAME, DB_PORT, USER_NAME, PASSWORD, DATABASE_NAME } = process.env;
    console.log(HOST_NAME);
    console.log(DB_PORT);
    console.log(USER_NAME);
    console.log(PASSWORD);
    console.log(DATABASE_NAME);
    console.log(process.env.NODE_ENV);
    console.log(`.${process.env.NODE_ENV}.env`);
    return {
        type: 'mysql',
        host: HOST_NAME,
        port: +DB_PORT,
        username: USER_NAME,
        password: PASSWORD,
        database: DATABASE_NAME,
        synchronize: true,
        entities: entities_1.default,
        connectTimeout: 1000000,
        acquireTimeout: 1000000,
    };
};
exports.buildDBConfig = buildDBConfig;
//# sourceMappingURL=database.js.map