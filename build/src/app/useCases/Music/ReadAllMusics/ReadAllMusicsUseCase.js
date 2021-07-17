"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadAllMusicsUseCase = void 0;
class ReadAllMusicsUseCase {
    constructor(musicRepository, validator, authenticator) {
        this.musicRepository = musicRepository;
        this.validator = validator;
        this.authenticator = authenticator;
    }
    async execute(data) {
        const message = "Success!";
        const validData = this.validator.validate(data);
        const verifiedToken = this.authenticator.getData(validData.token);
        if (!verifiedToken) {
            throw new Error("Invalid Data");
        }
        const musicsFromDataBase = await this.musicRepository.findAllMusics(verifiedToken.id);
        if (!musicsFromDataBase) {
            throw new Error("Musics not found");
        }
        const genres = [];
        let musics = [];
        for (let i = 0; i < musicsFromDataBase.length; i++) {
            const genresFromDatabase = await this.musicRepository.getMusicGenres(musicsFromDataBase[i].id);
            for (let j = 0; j < genresFromDatabase.length; j++) {
                genres.push(genresFromDatabase[0].genre);
            }
            const music = {
                title: musicsFromDataBase[i].title,
                genres: genres,
                author: musicsFromDataBase[i].author,
                date: musicsFromDataBase[i].date,
                file: musicsFromDataBase[i].file,
                album: musicsFromDataBase[i].album,
                id: musicsFromDataBase[i].id,
            };
            musics.push(music);
        }
        return musics;
    }
}
exports.ReadAllMusicsUseCase = ReadAllMusicsUseCase;
