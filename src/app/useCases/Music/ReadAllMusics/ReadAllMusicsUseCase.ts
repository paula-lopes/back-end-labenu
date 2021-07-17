import { MusicRepository } from "../../../repositories/implementations/MusicRepository";
import { ReadAllMusicsValidator } from "./ReadAllMusicsValidator";

import {
  IReadAllMusicsRequestDTO,
  IReadMusicsValidDataDTO,
  IReadMusicsResponseDTO,
} from "./ReadAllMusicsDTO";
import { Authenticator } from "../../../services/Authenticator";

export class ReadAllMusicsUseCase {
  constructor(
    private musicRepository: MusicRepository,
    private validator: ReadAllMusicsValidator,
    private authenticator: Authenticator
  ) {}

  async execute(
    data: IReadAllMusicsRequestDTO
  ): Promise<IReadMusicsResponseDTO[]> {
    const message = "Success!";
    const validData: IReadMusicsValidDataDTO = this.validator.validate(data);
    const verifiedToken = this.authenticator.getData(validData.token);

    if (!verifiedToken) {
      throw new Error("Invalid Data");
    }
    const musicsFromDataBase = await this.musicRepository.findAllMusics(
      verifiedToken.id
    );

    if (!musicsFromDataBase) {
      throw new Error("Musics not found");
    }
    const genres: any = [];
    let musics: IReadMusicsResponseDTO[] = [];

    for (let i = 0; i < musicsFromDataBase.length; i++) {
      const genresFromDatabase = await this.musicRepository.getMusicGenres(
        musicsFromDataBase[i].id
      );
      for (let j = 0; j < genresFromDatabase.length; j++) {
        genres.push(genresFromDatabase[0].genre);
      }

      const music = {
        title: musicsFromDataBase[i].title,
        genres: genres,
        author: musicsFromDataBase[i].author,
        date: musicsFromDataBase[i].date,
        file: musicsFromDataBase[i].file,
        album: musicsFromDataBase[i].album,
        id: musicsFromDataBase[i].id,
      };
      musics.push(music);
    }

    return musics;
  }
}
