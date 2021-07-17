"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMusicController = void 0;
class CreateMusicController {
    constructor(CreateMusicUseCase) {
        this.CreateMusicUseCase = CreateMusicUseCase;
    }
    async handle(req, res) {
        try {
            const input = {
                title: req.body.title,
                author: req.body.author,
                file: req.body.file,
                genre: req.body.genre,
                album: req.body.album,
                token: req.headers.authorization
            };
            const response = await this.CreateMusicUseCase.execute(input);
            res.status(200).send(response);
        }
        catch (err) {
            res.status(400).send(err.message);
        }
    }
}
exports.CreateMusicController = CreateMusicController;
