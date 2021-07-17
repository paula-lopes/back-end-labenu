"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserValidator = void 0;
class AuthenticateUserValidator {
    validate(data) {
        if (!data.email || !data.password) {
            throw new Error("Invalid Data");
        }
        return data;
    }
}
exports.AuthenticateUserValidator = AuthenticateUserValidator;
