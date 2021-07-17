import { IMusicsRepository } from "../../../repositories/IMusicsRepository";
import {
  IFindMusicByIdRequestDTO,
  IFindMusicByIdValidDataDTO,
} from "./FindMusicByIdDTO";
import { IFindMusicByIdResponseDTO } from "./FindMusicByIdDTO";

import { Authenticator } from "../../../services/Authenticator";
import { FindMusicByIdValidator } from "./FindMusicByIdValidator";

export class FindMusicByIdUseCase {
  constructor(
    private musicRepository: IMusicsRepository,
    private validator: FindMusicByIdValidator, 
    private authenticator: Authenticator
  ) {}

  async execute(
    data: IFindMusicByIdRequestDTO
  ): Promise<IFindMusicByIdResponseDTO> {
    const validData: IFindMusicByIdValidDataDTO = this.validator.validate(data);
    const verifiedToken = this.authenticator.getData(validData.token);

    if (!verifiedToken) {
      throw new Error("Invalid token");
    }

    const musicFromDatabase: IFindMusicByIdResponseDTO =
      await this.musicRepository.findMusicById(validData.id);
   
    if (!musicFromDatabase) {
      throw new Error("Music not found");
    }
    return musicFromDatabase;
  }
}
