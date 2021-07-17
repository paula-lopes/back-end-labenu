"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMusicUseCase = void 0;
const Music_1 = require("../../../entities/Music");
class CreateMusicUseCase {
    constructor(musicRepository, validator, idGenerator, authenticator) {
        this.musicRepository = musicRepository;
        this.validator = validator;
        this.idGenerator = idGenerator;
        this.authenticator = authenticator;
    }
    async execute(data) {
        const message = "Music created with success!";
        const validData = this.validator.validate(data);
        const verifiedToken = this.authenticator.getData(validData.token);
        if (!verifiedToken) {
            throw new Error("Invalid token");
        }
        const allMusics = await this.musicRepository.findAllMusics(verifiedToken.id);
        for (let i = 0; i < allMusics.length; i++) {
            if (allMusics[i].title.toLowerCase() === validData.title.toLowerCase() &&
                allMusics[i].author.toLowerCase === validData.author.toLowerCase) {
                throw new Error("Music Already Exist");
            }
        }
        const id = this.idGenerator.generate();
        const date = new Date().toISOString();
        const formatDate = date.substring(0, 10);
        const music = new Music_1.Music({ ...validData, date: formatDate, id_user: verifiedToken.id }, id);
        const musicToDatabase = {
            id: id,
            title: music.title,
            author: music.author,
            date: music.date,
            file: music.file,
            album: music.album,
            id_user: music.id_user,
        };
        await this.musicRepository.save(musicToDatabase);
        const genres = [];
        const genre = validData.genre.map((genre) => {
            genres.push(genre);
        });
        for (let i = 0; i < genres.length; i++) {
            const genreToDatabase = { id_music: music.id, genre: genres[i] };
            this.musicRepository.saveMusicGenre(genreToDatabase);
        }
        return { message };
    }
}
exports.CreateMusicUseCase = CreateMusicUseCase;
