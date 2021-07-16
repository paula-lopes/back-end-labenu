import { MusicRepository } from "../../../repositories/implementations/MusicRepository";
import { Authenticator } from "../../../services/Authenticator";
import { ReadAllMusicsController } from "./ReadAllMusicsController";
import { ReadAllMusicsUseCase } from "./ReadAllMusicsUseCase";
import { ReadAllMusicsValidator } from "./ReadAllMusicsValidator";

const musicRepository = new MusicRepository();
const validator = new ReadAllMusicsValidator();
const authenticator = new Authenticator();

const readAllMusicsUseCase = new ReadAllMusicsUseCase(
  musicRepository,
  validator,
  authenticator
);

const readAllMusicsController = new ReadAllMusicsController(
  readAllMusicsUseCase
);

export { readAllMusicsUseCase, readAllMusicsController };
