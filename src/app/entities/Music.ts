import { IGenre } from "../useCases/Music/CreateMusic/CreateMusicDTO";

export class Music {
  id: string;
  title: string;
  author: string;
  date: string;
  file: string;
  genre: string[];
  album: string;
  id_user:string;

  constructor(props: Omit<Music, "id">, id: string) {
    Object.assign(this, props);

    this.id = id;
  }

  static toMusicModel(music: any): Music {
    const { id, ...props } = music;
    return new Music(props, id);
  }
}
