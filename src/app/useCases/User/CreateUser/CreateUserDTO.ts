import { USER_ROLES } from "../../../entities/User";

export interface ICreateUserRequestDTO {
  name: any;
  email: any;
  nickname: any;
  password: any;
  role: any;
}

export interface ICreateUserValidDataDTO {
  name: string;
  email: string;
  nickname: string;
  password: string;
  role: USER_ROLES;
}

export interface ICreateUserResponseDTO {
  message: string;
  token: string;
}
