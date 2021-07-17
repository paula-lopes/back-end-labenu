import { Request, Response } from "express";
import { IFindMusicByIdRequestDTO } from "./FindMusicByIdDTO";
import { FindMusicByIdUseCase } from "./FindMusicByIdUseCase";
export class FindMusicByIdController {
  constructor(private findMusicByIdUseCase: FindMusicByIdUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    try {
      const input: IFindMusicByIdRequestDTO = {
        id: req.params.id,
        token: req.headers.authorization as string,
      };
     
      const response = await this.findMusicByIdUseCase.execute(input);
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}
