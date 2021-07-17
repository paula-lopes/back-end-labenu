import { IFindMusicByIdValidDataDTO } from "./FindMusicByIdDTO";
import { IFindMusicByIdRequestDTO } from "./FindMusicByIdDTO";
export class FindMusicByIdValidator {
  validate(data: IFindMusicByIdRequestDTO): IFindMusicByIdValidDataDTO {
    if (!data.token || !data.id) {
      throw new Error("Invalid data");
    }

    return data;
  }
}
