"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.musicRouter = void 0;
const express_1 = __importDefault(require("express"));
const CreateMusic_1 = require("../useCases/Music/CreateMusic");
const FindMusicById_1 = require("../useCases/Music/FindMusicById");
const ReadAllMusics_1 = require("../useCases/Music/ReadAllMusics");
const musicRouter = express_1.default.Router();
exports.musicRouter = musicRouter;
musicRouter.post("/", (req, res) => {
    return CreateMusic_1.createMusicController.handle(req, res);
});
musicRouter.get("/", (req, res) => {
    return ReadAllMusics_1.readAllMusicsController.handle(req, res);
});
musicRouter.get("/:id", (req, res) => {
    return FindMusicById_1.findMusicByIdController.handle(req, res);
});
