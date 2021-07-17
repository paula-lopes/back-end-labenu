"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadAllMusicsController = void 0;
class ReadAllMusicsController {
    constructor(ReadAllMusicsUseCase) {
        this.ReadAllMusicsUseCase = ReadAllMusicsUseCase;
    }
    async handle(req, res) {
        try {
            const input = {
                token: req.headers.authorization,
            };
            const response = await this.ReadAllMusicsUseCase.execute(input);
            res.status(200).send(response);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    }
}
exports.ReadAllMusicsController = ReadAllMusicsController;
