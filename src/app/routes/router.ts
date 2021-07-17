import { Router } from "express";
import { userRouter } from "./userRouter";
import { musicRouter } from "./musicRouter";

const router = Router();

router.use("/user", userRouter);
router.use("/music", musicRouter);

export { router };
