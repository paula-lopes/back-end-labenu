"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Music = void 0;
class Music {
    constructor(props, id) {
        Object.assign(this, props);
        this.id = id;
    }
    static toMusicModel(music) {
        const { id, ...props } = music;
        return new Music(props, id);
    }
}
exports.Music = Music;
