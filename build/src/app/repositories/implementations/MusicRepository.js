"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicRepository = void 0;
const Music_1 = require("../../entities/Music");
const BaseRepository_1 = require("./BaseRepository");
class MusicRepository extends BaseRepository_1.BaseRepository {
    constructor() {
        super(...arguments);
        this.connection = this.getConnection();
        this.musicTable = () => this.connection(MusicRepository.TABLE_NAME);
        this.genreTable = () => this.connection(MusicRepository.SECONDARY_TABLE);
    }
    async save(music) {
        try {
            await this.musicTable().insert(music);
        }
        catch (err) {
            throw new Error(err.message || err.sqlMessage);
        }
    }
    async findMusicById(id) {
        const result = await this.musicTable().where({ id });
        if (result.length < 0) {
            throw new Error("Music not found");
        }
        const music = Music_1.Music.toMusicModel(result);
        return music;
    }
    async findAllMusics(id_user) {
        let musicsFormated = [];
        const result = await this.musicTable().where({ id_user });
        if (result.length < 0) {
            throw new Error("Musics not found");
        }
        for (let i = 0; i < result.length; i++) {
            musicsFormated.push(Music_1.Music.toMusicModel(result[i]));
        }
        return musicsFormated;
    }
    async saveMusicGenre(musicGenre) {
        await this.genreTable().insert(musicGenre);
    }
    async getMusicGenres(id_music) {
        const genres = await this.genreTable().where({ id_music });
        return genres;
    }
    async destroy() {
        this.destroy();
    }
}
exports.MusicRepository = MusicRepository;
MusicRepository.TABLE_NAME = "musics_backend";
MusicRepository.SECONDARY_TABLE = "genres";
