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
exports.NewPostDTO = void 0;
const class_validator_1 = require("class-validator");
const exceptions_1 = require("../../../types/exceptions");
class NewPostDTO {
    message;
}
__decorate([
    (0, class_validator_1.IsString)({ message: exceptions_1.ValidationExceptions.MUST_BE_A_STRING }),
    (0, class_validator_1.Length)(3, 170, {
        message: exceptions_1.ValidationExceptions.LENGTH_IS_NOT_CORRECT
    }),
    __metadata("design:type", String)
], NewPostDTO.prototype, "message", void 0);
exports.NewPostDTO = NewPostDTO;
//# sourceMappingURL=newPost.dto.js.map