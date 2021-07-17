"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserController = void 0;
class AuthenticateUserController {
    constructor(AuthenticateUserUseCase) {
        this.AuthenticateUserUseCase = AuthenticateUserUseCase;
    }
    async handle(req, res) {
        try {
            const input = {
                email: req.body.email,
                password: req.body.password,
            };
            const response = await this.AuthenticateUserUseCase.execute(input);
            res.status(200).send(response);
        }
        catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
}
exports.AuthenticateUserController = AuthenticateUserController;
