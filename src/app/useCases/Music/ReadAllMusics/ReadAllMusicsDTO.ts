export interface IReadAllMusicsRequestDTO {
  token: string;
}

export interface authenticateData {
  id: string;
  role: string;
}

export interface IReadMusicsValidDataDTO {
  token: string;
}

export interface IReadMusicsResponseDTO {
  title: string;
  author: string;
  date: string;
  file: string;
  genres: any[];
  album: string;
  id: string;
}
