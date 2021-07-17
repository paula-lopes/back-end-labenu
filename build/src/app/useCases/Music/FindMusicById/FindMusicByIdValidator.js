"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMusicByIdValidator = void 0;
class FindMusicByIdValidator {
    validate(data) {
        if (!data.token || !data.id) {
            throw new Error("Invalid data");
        }
        return data;
    }
}
exports.FindMusicByIdValidator = FindMusicByIdValidator;
