import { CreateMusicValidator } from "./CreateMusicValidator"; // ok
import { ICreateMusicRequestDTO, IGenre } from "./CreateMusicDTO";
import { IMusicsRepository } from "../../../repositories/IMusicsRepository";
import {
  ICreateMusicValidDataDTO,
  ICreateMusicResponseDTO,
} from "./CreateMusicDTO";
import { Music } from "../../../entities/Music";
import { IdGenerator } from "../../../services/IdGenerator";
import { IMusic } from "./CreateMusicDTO";
import { Authenticator } from "../../../services/Authenticator";
export class CreateMusicUseCase {
  constructor(
    private musicRepository: IMusicsRepository,
    private validator: CreateMusicValidator,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  async execute(
    data: ICreateMusicRequestDTO
  ): Promise<ICreateMusicResponseDTO> {
    const message = "Music created with success!";
    const validData: ICreateMusicValidDataDTO = this.validator.validate(data);
    const verifiedToken = this.authenticator.getData(validData.token);

    if (!verifiedToken) {
      throw new Error("Invalid token");
    }

    const allMusics = await this.musicRepository.findAllMusics(
      verifiedToken.id
    );

    for (let i = 0; i < allMusics.length; i++) {
      if (
        allMusics[i].title.toLowerCase() === validData.title.toLowerCase() &&
        allMusics[i].author.toLowerCase === validData.author.toLowerCase
      ) {
        throw new Error("Music Already Exist");
      }
    }

    const id = this.idGenerator.generate();
    const date = new Date().toISOString();
    const formatDate = date.substring(0, 10);
    const music = new Music(
      { ...validData, date: formatDate, id_user: verifiedToken.id },
      id
    );

    const musicToDatabase: IMusic = {
      id: id,
      title: music.title,
      author: music.author,
      date: music.date,
      file: music.file,
      album: music.album,
      id_user: music.id_user,
    };
    await this.musicRepository.save(musicToDatabase);

    const genres: string[] = [];
    const genre = validData.genre.map((genre) => {
      genres.push(genre);
    });

    for (let i = 0; i < genres.length; i++) {
      const genreToDatabase: IGenre = { id_music: music.id, genre: genres[i] };
      this.musicRepository.saveMusicGenre(genreToDatabase);
    }
    return { message };
  }
}
