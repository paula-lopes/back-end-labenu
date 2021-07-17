"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMusicByIdController = exports.findMusicByIdUseCase = void 0;
const MusicRepository_1 = require("../../../repositories/implementations/MusicRepository");
const Authenticator_1 = require("../../../services/Authenticator");
const FindMusicByIdValidator_1 = require("./FindMusicByIdValidator");
const FindMusicByIdUseCase_1 = require("./FindMusicByIdUseCase");
const FindMusicByIdController_1 = require("./FindMusicByIdController");
const musicRepository = new MusicRepository_1.MusicRepository();
const validator = new FindMusicByIdValidator_1.FindMusicByIdValidator();
const authenticator = new Authenticator_1.Authenticator();
const findMusicByIdUseCase = new FindMusicByIdUseCase_1.FindMusicByIdUseCase(musicRepository, validator, authenticator);
exports.findMusicByIdUseCase = findMusicByIdUseCase;
const findMusicByIdController = new FindMusicByIdController_1.FindMusicByIdController(findMusicByIdUseCase);
exports.findMusicByIdController = findMusicByIdController;
