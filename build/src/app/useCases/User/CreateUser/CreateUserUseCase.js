"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../../entities/User");
const APIError_1 = require("../../../services/APIError");
class CreateUserUseCase {
    constructor(usersRepository, validator, idGenerator, hashManager, authenticator) {
        this.usersRepository = usersRepository;
        this.validator = validator;
        this.idGenerator = idGenerator;
        this.hashManager = hashManager;
        this.authenticator = authenticator;
    }
    async execute(data) {
        const message = "Sucess!";
        const validData = this.validator.validate(data);
        const emailExist = await this.usersRepository.findByEmail(validData.email);
        const nickNameExist = await this.usersRepository.findByNickName(validData.nickname);
        if (emailExist) {
            throw APIError_1.APIError.badRequest("Email already registered");
        }
        if (nickNameExist) {
            throw APIError_1.APIError.badRequest("Nickname already registered.Choose another nickname");
        }
        if (validData.password.length < 6) {
            throw APIError_1.APIError.badRequest("Password must be more than 6 digits");
        }
        const id = this.idGenerator.generate(); //gerei o id pra add user no banco
        const passwordHash = await this.hashManager.hash(validData.password); //gerei um hash da senha
        const user = new User_1.User({ ...validData, password: passwordHash }, id); //gerei um novo usuário completo, que vai direto pro banco
        await this.usersRepository.save(user);
        await this.usersRepository.destroy();
        const token = this.authenticator.generateToken({
            id: user.id,
            role: user.role,
        });
        return { message, token };
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
