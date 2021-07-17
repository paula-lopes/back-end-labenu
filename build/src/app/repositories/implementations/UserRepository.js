"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../../entities/User");
const BaseRepository_1 = require("./BaseRepository");
class UserRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(...arguments);
        this.connection = this.getConnection();
        this.userTable = () => this.connection(UserRepository.TABLE_NAME);
    }
    async save(user) {
        try {
            await this.userTable().insert(user);
        }
        catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    async findByEmail(email) {
        const result = await this.userTable().where({ email });
        if (result.length > 0) {
            return User_1.User.toUserModel(result[0]);
        }
        return result[0];
    }
    async find(id) {
        const result = await this.userTable().where({ id });
        if (result.length > 0) {
            return User_1.User.toUserModel(result[0]);
        }
        return result[0];
    }
    async findByNickName(nickname) {
        const result = await this.userTable().where({ nickname });
        if (result.length > 0) {
            return User_1.User.toUserModel(result[0]);
        }
        return result[0];
    }
    async destroy() {
        this.destroy();
    }
}
exports.UserRepository = UserRepository;
UserRepository.TABLE_NAME = "user_music";
