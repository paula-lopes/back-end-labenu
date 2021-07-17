"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindMusicByIdUseCase = void 0;
class FindMusicByIdUseCase {
    constructor(musicRepository, validator, authenticator) {
        this.musicRepository = musicRepository;
        this.validator = validator;
        this.authenticator = authenticator;
    }
    async execute(data) {
        const validData = this.validator.validate(data);
        const verifiedToken = this.authenticator.getData(validData.token);
        if (!verifiedToken) {
            throw new Error("Invalid token");
        }
        const musicFromDatabase = await this.musicRepository.findMusicById(validData.id);
        if (!musicFromDatabase) {
            throw new Error("Music not found");
        }
        return musicFromDatabase;
    }
}
exports.FindMusicByIdUseCase = FindMusicByIdUseCase;
