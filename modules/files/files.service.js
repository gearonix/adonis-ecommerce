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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("../../types/exceptions");
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const uuid = __importStar(require("uuid"));
const nestjs_request_context_1 = require("nestjs-request-context");
const config_1 = require("../../config");
const helpers_1 = require("../../lib/helpers");
let FilesService = class FilesService {
    async uploadFile(file, mode) {
        try {
            const fileName = await this.generateFileName(file.originalname);
            const staticPath = this.getStaticPath(mode);
            await this.createFolderIfNotExists(staticPath);
            fs.writeFileSync(path.join(staticPath, fileName), file.buffer);
            return this.fileToUrl(fileName, mode);
        }
        catch (e) {
            throw new common_1.HttpException(exceptions_1.ServerExceptions.FILE_UPLOAD_ERROR, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async deleteFile(fileUrl, mode) {
        try {
            const staticPath = this.getStaticPath(mode);
            await this.createFolderIfNotExists(staticPath);
            const fileName = await this.urlToFile(fileUrl, mode);
            fs.unlinkSync(path.join(this.getStaticPath(mode), fileName));
        }
        catch (e) {
        }
    }
    async fileToUrl(fileName, mode) {
        const req = (0, helpers_1.getRequest)(nestjs_request_context_1.RequestContext);
        return `${req.protocol}://${req.get('Host')}/${config_1.appConfig.globalPrefix}/static/${mode}/${fileName}`;
    }
    async urlToFile(fileUrl, mode) {
        return (0, helpers_1.lastItemOf)(fileUrl.split(`/static/${mode}/`));
    }
    async generateFileName(fileName) {
        return `${uuid.v4()}.${(0, helpers_1.lastItemOf)(fileName.split('.'))}`;
    }
    getStaticPath(mode) {
        return path.resolve(__dirname, '..', '..', 'static', mode);
    }
    createFolderIfNotExists(staticPath) {
        if (!fs.existsSync(staticPath)) {
            fs.mkdirSync(staticPath, { recursive: true });
        }
    }
};
FilesService = __decorate([
    (0, common_1.Injectable)()
], FilesService);
exports.FilesService = FilesService;
//# sourceMappingURL=files.service.js.map