import { Request, Response } from "express";
import { ICreateMusicRequestDTO } from "./CreateMusicDTO";
import { CreateMusicUseCase } from "./CreateMusicUseCase";
export class CreateMusicController {
  constructor(private CreateMusicUseCase: CreateMusicUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    try {
      const input: ICreateMusicRequestDTO = {
        title: req.body.title,
        author: req.body.author,
        file: req.body.file,
        genre: req.body.genre,
        album: req.body.album, ///a data eu vou gerar separadamente
        token: req.headers.authorization as string
      };

      const response = await this.CreateMusicUseCase.execute(input);
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}
