export class Music {
  id: string;
  title: string;
  author: string;
  date: Date;
  file: string;
  genre: string[];
  album: string;

  constructor(props: Omit<Music, "id">, id: string) {
    Object.assign(this, props);

    this.id = id;
  }

  static toMusicModel(music: any): Music {
    const { id, ...props } = music;
    return new Music(props, id);
  }
}
