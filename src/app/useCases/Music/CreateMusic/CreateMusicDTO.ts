export interface ICreateMusicRequestDTO {
  title: string;
  author: string;
  file: string;
  genre: string[];
  album: string;
  token: string;
}

export interface ICreateMusicValidDataDTO {
  title: string;
  author: string;
  file: string;
  genre: string[];
  album: string;
  token: string;
}

export interface IMusic {
  id: string;
  title: string;
  author: string;
  date: string;
  file: string;
  album: string;
  id_user:string
}
export interface IGenre {
  id_music: string;
  genre: string;
}

export interface ICreateMusicResponseDTO {
  message: string;
}
