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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductDTO = void 0;
const global_1 = require("../../../types/global");
const class_validator_1 = require("class-validator");
const exceptions_1 = require("../../../types/exceptions");
const types_1 = require("../../../types/elements/types");
class ProductDTO {
    name;
    price;
    rating;
    description;
    inStock;
    images;
    features;
    material;
    type;
    design;
    warrantyCount;
    model;
    size;
}
__decorate([
    (0, class_validator_1.IsString)({ message: exceptions_1.ValidationExceptions.MUST_BE_A_STRING }),
    (0, class_validator_1.Length)(3, global_1.Lengths.TINY_TITLE, {
        message: exceptions_1.ValidationExceptions.LENGTH_IS_NOT_CORRECT
    }),
    __metadata("design:type", String)
], ProductDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: exceptions_1.ValidationExceptions.MUST_BE_A_STRING }),
    (0, class_validator_1.Length)(3, global_1.Lengths.LONGTEXT, {
        message: exceptions_1.ValidationExceptions.LENGTH_IS_NOT_CORRECT
    }),
    __metadata("design:type", String)
], ProductDTO.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: exceptions_1.ValidationExceptions.MUST_BE_A_STRING }),
    (0, class_validator_1.Length)(3, global_1.Lengths.TITLE, {
        message: exceptions_1.ValidationExceptions.LENGTH_IS_NOT_CORRECT
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductDTO.prototype, "material", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: exceptions_1.ValidationExceptions.MUST_BE_A_STRING }),
    (0, class_validator_1.Length)(3, global_1.Lengths.MODEL, {
        message: exceptions_1.ValidationExceptions.LENGTH_IS_NOT_CORRECT
    }),
    (0, class_validator_1.IsIn)(Object.values(types_1.ProductTypes)),
    __metadata("design:type", String)
], ProductDTO.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: exceptions_1.ValidationExceptions.MUST_BE_A_STRING }),
    (0, class_validator_1.Length)(3, global_1.Lengths.MODEL, {
        message: exceptions_1.ValidationExceptions.LENGTH_IS_NOT_CORRECT
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductDTO.prototype, "design", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: exceptions_1.ValidationExceptions.MUST_BE_A_STRING }),
    (0, class_validator_1.Length)(3, global_1.Lengths.MODEL, {
        message: exceptions_1.ValidationExceptions.LENGTH_IS_NOT_CORRECT
    }),
    (0, class_validator_1.IsIn)(Object.values(types_1.ProductModels)),
    __metadata("design:type", String)
], ProductDTO.prototype, "model", void 0);
__decorate([
    (0, class_validator_1.IsIn)(types_1.ProductSizes),
    __metadata("design:type", Object)
], ProductDTO.prototype, "size", void 0);
exports.ProductDTO = ProductDTO;
//# sourceMappingURL=productDTO.js.map