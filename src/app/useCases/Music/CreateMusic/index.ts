import { CreateMusicController } from "../../Music/CreateMusic/CreateMusicController";
import { MusicRepository } from "../../../repositories/implementations/MusicRepository";
import { CreateMusicValidator } from "../../Music/CreateMusic/CreateMusicValidator";
import { CreateMusicUseCase } from "../../Music/CreateMusic/CreateMusicUseCase";
import { IdGenerator } from "../../../services/IdGenerator";
import { Authenticator } from "../../../services/Authenticator";

const idGenerator = new IdGenerator();
const musicRepository = new MusicRepository();
const validator = new CreateMusicValidator();
const authenticator = new Authenticator();

const createMusicUseCase = new CreateMusicUseCase(
  musicRepository,
  validator,
  idGenerator,
  authenticator
);
const createMusicController = new CreateMusicController(createMusicUseCase);

export  { createMusicController, createMusicUseCase };
