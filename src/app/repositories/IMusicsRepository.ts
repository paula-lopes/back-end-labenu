import { IMusic } from "../useCases/Music/CreateMusic/CreateMusicDTO";
import { Music } from "../entities/Music";
import { IGenre } from "../useCases/Music/CreateMusic/CreateMusicDTO";
export interface IMusicsRepository {
  save(music: IMusic): Promise<void>;
  findMusicById(id: string): Promise<Music>;
  findAllMusics(id_user: string): Promise<Music[]>;
  saveMusicGenre(musicGenre: IGenre): Promise<void>;
}
