"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMusicByIdController = void 0;
class FindMusicByIdController {
    constructor(findMusicByIdUseCase) {
        this.findMusicByIdUseCase = findMusicByIdUseCase;
    }
    async handle(req, res) {
        try {
            const input = {
                id: req.params.id,
                token: req.headers.authorization,
            };
            const response = await this.findMusicByIdUseCase.execute(input);
            res.status(200).send(response);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    }
}
exports.FindMusicByIdController = FindMusicByIdController;
