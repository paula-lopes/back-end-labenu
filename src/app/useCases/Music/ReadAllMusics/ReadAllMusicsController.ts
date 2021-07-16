import { Request, Response } from "express";
import { IReadAllMusicsRequestDTO } from "./ReadAllMusicsDTO";
import { ReadAllMusicsUseCase } from "./ReadAllMusicsUseCase";

export class ReadAllMusicsController {
  constructor(private ReadAllMusicsUseCase: ReadAllMusicsUseCase) {}
  async handle(req: Request, res: Response): Promise<Response | void> {
    try {
      const input: IReadAllMusicsRequestDTO = {
        token: req.headers.authorization as string,
      };

      const response = await this.ReadAllMusicsUseCase.execute(input);
      
      res.status(200).send(response);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }
}
