import { MusicRepository } from "../../../repositories/implementations/MusicRepository";
import { Authenticator } from "../../../services/Authenticator";
import { FindMusicByIdValidator } from "./FindMusicByIdValidator";
import { FindMusicByIdUseCase } from "./FindMusicByIdUseCase";
import { FindMusicByIdController } from "./FindMusicByIdController";

const musicRepository = new MusicRepository();
const validator = new FindMusicByIdValidator();
const authenticator = new Authenticator();

const findMusicByIdUseCase = new FindMusicByIdUseCase(
  musicRepository,
  validator,
  authenticator
);

const findMusicByIdController = new FindMusicByIdController(
  findMusicByIdUseCase
);

export { findMusicByIdUseCase, findMusicByIdController };
