"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMusicValidator = void 0;
class CreateMusicValidator {
    validate(data) {
        if (!data.album ||
            !data.author ||
            !data.file ||
            !data.genre ||
            !data.title ||
            !data.token) {
            throw new Error("Invalid data");
        }
        return data;
    }
}
exports.CreateMusicValidator = CreateMusicValidator;
