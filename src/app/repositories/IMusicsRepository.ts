import { Music } from "../entities/Music";
export interface IMusicsRepository {
  save(music: Music): Promise<void>;
  findMusicById(id: string): Promise<Music>;
  findAllMusics(): Promise<Music[]>;
}
