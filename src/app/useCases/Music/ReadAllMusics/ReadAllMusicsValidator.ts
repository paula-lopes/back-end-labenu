import { IReadAllMusicsRequestDTO } from "./ReadAllMusicsDTO";
import { IReadMusicsValidDataDTO } from "./ReadAllMusicsDTO";

export class ReadAllMusicsValidator {
  validate(data: IReadAllMusicsRequestDTO): IReadMusicsValidDataDTO {
    if (!data.token) {
      throw new Error("Invalid token");
    }
    return data;
  }
}
