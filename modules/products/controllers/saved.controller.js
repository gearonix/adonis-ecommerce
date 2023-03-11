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
exports.SavedProductsController = void 0;
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../../auth/auth.guard");
const services_1 = require("../services");
const saved_service_1 = require("../services/saved.service");
const searchByIdsDTO_1 = require("../dto/searchByIdsDTO");
let SavedProductsController = class SavedProductsController {
    productsService;
    createProductService;
    savedService;
    constructor(productsService, createProductService, savedService) {
        this.productsService = productsService;
        this.createProductService = createProductService;
        this.savedService = savedService;
    }
    getSavedProducts() {
        return this.savedService.getSavedProducts();
    }
    addToSaved(body) {
        return this.savedService.addToSaved(body.productId);
    }
    removeFromSaved(body) {
        return this.savedService.removeFromSaved(body.productId);
    }
};
__decorate([
    (0, common_1.Get)('/items'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SavedProductsController.prototype, "getSavedProducts", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [searchByIdsDTO_1.SearchByProductIdDTO]),
    __metadata("design:returntype", void 0)
], SavedProductsController.prototype, "addToSaved", null);
__decorate([
    (0, common_1.Delete)(),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [searchByIdsDTO_1.SearchByProductIdDTO]),
    __metadata("design:returntype", void 0)
], SavedProductsController.prototype, "removeFromSaved", null);
SavedProductsController = __decorate([
    (0, common_1.Controller)('products/saved'),
    __metadata("design:paramtypes", [services_1.ProductsService,
        services_1.CreateProductService,
        saved_service_1.SavedService])
], SavedProductsController);
exports.SavedProductsController = SavedProductsController;
//# sourceMappingURL=saved.controller.js.map