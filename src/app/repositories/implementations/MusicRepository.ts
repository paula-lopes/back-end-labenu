import { Music } from "../../entities/Music";
import { IMusicsRepository } from "../IMusicsRepository";
import { BaseRepository } from "./BaseRepository";

export class MusicRepository
  extends BaseRepository
  implements IMusicsRepository
{
  private static TABLE_NAME = "music_backend";
  private connection = this.getConnection();
  private musicTable = () => this.connection(MusicRepository.TABLE_NAME);

  save(music: Music): Promise<void> {
    this.connection.raw(``)
  }
  findMusicById(id: string): Promise<Music> {}
  findAllMusics(): Promise<Music[]> {}
  public async destroy(): Promise<void> {
    this.destroy();
  }
}
