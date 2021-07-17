"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadAllMusicsValidator = void 0;
class ReadAllMusicsValidator {
    validate(data) {
        if (!data.token) {
            throw new Error("Invalid token");
        }
        return data;
    }
}
exports.ReadAllMusicsValidator = ReadAllMusicsValidator;
