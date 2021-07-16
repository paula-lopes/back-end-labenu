export interface IFindMusicByIdRequestDTO {
  token: string;
  id: string;
}
export interface IFindMusicByIdValidDataDTO {
  token: string;
  id: string;
}

export interface IFindMusicByIdResponseDTO {
  id: string;
  title: string;
  author: string;
  date: string;
  file: string;
  album: string;
  id_user: string;
}
