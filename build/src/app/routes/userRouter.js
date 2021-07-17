"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const AuthenticateUser_1 = require("../useCases/User/AuthenticateUser");
const CreateUser_1 = require("../useCases/User/CreateUser");
const userRouter = express_1.default.Router();
exports.userRouter = userRouter;
userRouter.post("/signup", (req, res) => {
    return CreateUser_1.createUserController.handle(req, res);
});
userRouter.post("/login", (req, res) => {
    return AuthenticateUser_1.authenticateUserController.handle(req, res);
});
