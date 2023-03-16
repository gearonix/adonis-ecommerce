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
exports.SavedService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_1 = require("../../auth");
const saved_entity_1 = require("../../../entities/saved.entity");
let SavedService = class SavedService {
    saved;
    authService;
    constructor(saved, authService) {
        this.saved = saved;
        this.authService = authService;
    }
    async addToSaved(productId) {
        const userId = await this.authService.getUserId();
        return this.saved.save({ userId, productId });
    }
    async removeFromSaved(productId) {
        const userId = await this.authService.getUserId();
        return this.saved.delete({ productId, userId });
    }
    async getSavedProducts(id) {
        const userId = await this.authService.getUserId();
        return this.saved.find({ where: { userId: id || userId },
            order: { savedId: 'DESC' } });
    }
};
SavedService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(saved_entity_1.SavedEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_1.AuthService])
], SavedService);
exports.SavedService = SavedService;
//# sourceMappingURL=saved.service.js.map