import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository";
import { APIError } from "../../../services/APIError";
import { Authenticator } from "../../../services/Authenticator";
import { HashManager } from "../../../services/HashManager";
import { IdGenerator } from "../../../services/IdGenerator";
import {
  ICreateUserRequestDTO,
  ICreateUserResponseDTO,
  ICreateUserValidDataDTO,
} from "./CreateUserDTO";
import { CreateUserValidator } from "./CreateUserValidator";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private validator: CreateUserValidator,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  async execute(data: ICreateUserRequestDTO): Promise<ICreateUserResponseDTO> {
   
    const message = "Sucess!";
    const validData: ICreateUserValidDataDTO = this.validator.validate(data);

    const emailExist = await this.usersRepository.findByEmail(validData.email);
    const nickNameExist = await this.usersRepository.findByNickName(
      validData.nickname
    );

    if (emailExist) {
      throw APIError.badRequest("Email already registered");
    }

    if (nickNameExist) {
      throw APIError.badRequest(
        "Nickname already registered.Choose another nickname"
      );
    }

    if (validData.password.length < 6) {
      throw APIError.badRequest("Password must be more than 6 digits");
    }
    const id = this.idGenerator.generate(); //gerei o id pra add user no banco
    const passwordHash = await this.hashManager.hash(validData.password); //gerei um hash da senha

    const user = new User({ ...validData, password: passwordHash }, id);//gerei um novo usuário completo, que vai direto pro banco
    await this.usersRepository.save(user);
    await this.usersRepository.destroy();

    const token = this.authenticator.generateToken({
      id: user.id,
      role: user.role,
    });

    return { message, token };
  }
}
