import { ICreateMusicRequestDTO } from "./CreateMusicDTO";
import { ICreateMusicValidDataDTO } from "./CreateMusicDTO";

export class CreateMusicValidator {
  validate(data: ICreateMusicRequestDTO): ICreateMusicValidDataDTO {
   
    if (
      !data.album ||
      !data.author ||
      !data.file ||
      !data.genre ||
      !data.title||
      !data.token
    ) {
      throw new Error("Invalid data");
    }

    return data;
  }
}
