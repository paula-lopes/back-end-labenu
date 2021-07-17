import {
  ICreateUserRequestDTO,
  ICreateUserValidDataDTO,
} from "./CreateUserDTO";

export class CreateUserValidator {
  validate(data: ICreateUserRequestDTO): ICreateUserValidDataDTO {
    console.log("validate data",data)
    if (
      !data.email ||
      !data.name ||
      !data.password ||
      !data.role ||
      !data.nickname
    ) {
      throw new Error("Invalid Data");
    }
    return data;
  }
}
