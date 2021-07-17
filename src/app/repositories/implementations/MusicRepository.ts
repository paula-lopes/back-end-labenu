import { Music } from "../../entities/Music";
import { IMusicsRepository } from "../IMusicsRepository";
import { BaseRepository } from "./BaseRepository";
import { IGenre } from "../../useCases/Music/CreateMusic/CreateMusicDTO";

export class MusicRepository
  extends BaseRepository
  implements IMusicsRepository
{
  private static TABLE_NAME = "musics_backend";
  private static SECONDARY_TABLE = "genres";
  private connection = this.getConnection();
  private musicTable = () => this.connection(MusicRepository.TABLE_NAME);
  private genreTable = () => this.connection(MusicRepository.SECONDARY_TABLE);

  public async save(music: Music): Promise<void> {
    try {
      await this.musicTable().insert(music);
    } catch (err) {
      throw new Error(err.message || err.sqlMessage);
    }
  }
  public async findMusicById(id: string): Promise<Music> {
    const result = await this.musicTable().where({id});

    if (result.length < 0) {
      throw new Error("Music not found");
    }

    const music: Music = Music.toMusicModel(result);
    return music;
  }

  public async findAllMusics(id_user: string): Promise<Music[]> {
    let musicsFormated = [];
    const result = await this.musicTable().where({ id_user });

    if (result.length < 0) {
      throw new Error("Musics not found");
    }
    for (let i = 0; i < result.length; i++) {
      musicsFormated.push(Music.toMusicModel(result[i]));
    }

    return musicsFormated;
  }

  public async saveMusicGenre(musicGenre: IGenre): Promise<void> {
    await this.genreTable().insert(musicGenre);
  }

  public async getMusicGenres(id_music: string): Promise<IGenre[]> {
    const genres = await this.genreTable().where({ id_music });
    return genres;
  }

  public async destroy(): Promise<void> {
    this.destroy();
  }
}
