import express, { Request, Response } from "express";
import { createMusicController } from "../useCases/Music/CreateMusic";
import { findMusicByIdController } from "../useCases/Music/FindMusicById";
import { readAllMusicsController } from "../useCases/Music/ReadAllMusics";


const musicRouter = express.Router();

musicRouter.post("/", (req: Request, res: Response) => {
  return createMusicController.handle(req, res);
});
musicRouter.get("/", (req, res) => {
  return readAllMusicsController.handle(req, res);
});
musicRouter.get("/:id", (req, res) => {
  return findMusicByIdController.handle(req, res);
});

export { musicRouter };
