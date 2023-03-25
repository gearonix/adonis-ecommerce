"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("../../../entities");
const typeorm_2 = require("typeorm");
const global_1 = require("../../../types/global");
const files_service_1 = require("../../files/files.service");
const messenger_1 = require("..");
const helpers_1 = require("../../../lib/helpers");
let MessagesService = class MessagesService {
    messages;
    fileService;
    roomService;
    constructor(messages, fileService, roomService) {
        this.messages = messages;
        this.fileService = fileService;
        this.roomService = roomService;
    }
    async selectRoom(roomId, userId, page) {
        await this.roomService.checkUserHasRoom(roomId, userId);
        const messages = await this.messages.find({
            where: { roomId },
            relations: {
                user: true
            },
            order: {
                creationDate: 'DESC'
            },
            ...(0, helpers_1.withLimit)(page, 15)
        });
        return messages.reverse();
    }
    async makeMessagesRead(roomId, userId) {
        const senderId = await this.roomService.getOpponentId(roomId, userId);
        return this.messages.update({ senderId }, { isRead: true });
    }
    async makeMessageRead(messageId) {
        return this.messages.update({ messageId }, { isRead: true });
    }
    async saveMessage({ file, ...message }) {
        let fileUrl = null;
        if (file) {
            fileUrl = await this.fileService
                .uploadFile(file, global_1.FileDirectories.MESSENGER_ATTACHMENTS);
        }
        const { messageId } = await this.messages.save({ ...message, image: fileUrl });
        return this.messages.findOne({
            where: { messageId },
            relations: { user: true }
        });
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.UserMessagesEntity)),
    __param(2, (0, common_1.Inject)((0, common_1.forwardRef)(() => messenger_1.RoomsService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        files_service_1.FilesService,
        messenger_1.RoomsService])
], MessagesService);
exports.MessagesService = MessagesService;
//# sourceMappingURL=messages.service.js.map