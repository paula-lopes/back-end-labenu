"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIError = void 0;
class APIError {
    constructor(theCode, theMessage) {
        this.code = theCode;
        this.message = theMessage;
    }
    static wrongParams(message) {
        return new APIError(406, message);
    }
    static unauthorized(message = 'Unauthorized') {
        return new APIError(401, message);
    }
    static badRequest(message) {
        return new APIError(400, message);
    }
    static notFound(message) {
        return new APIError(404, message);
    }
    static internal() {
        return new APIError(500, 'Internal error');
    }
}
exports.APIError = APIError;
