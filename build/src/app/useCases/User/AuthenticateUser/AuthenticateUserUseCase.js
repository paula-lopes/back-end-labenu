"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
const APIError_1 = require("../../../services/APIError");
class AuthenticateUserUseCase {
    constructor(usersRepository, validator, hashManager, authenticator) {
        this.usersRepository = usersRepository;
        this.validator = validator;
        this.hashManager = hashManager;
        this.authenticator = authenticator;
    }
    async execute(data) {
        const message = 'Success!';
        const validData = this.validator.validate(data);
        const userFromDB = await this.usersRepository.findByEmail(validData.email);
        if (!userFromDB) {
            throw APIError_1.APIError.notFound('Invalid email');
        }
        const validPassword = await this.hashManager.compare(validData.password, userFromDB.password);
        if (!validPassword) {
            throw APIError_1.APIError.wrongParams('Invalid password');
        }
        const token = this.authenticator.generateToken({
            id: userFromDB.id,
            role: userFromDB.role,
        });
        return { message, token };
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
