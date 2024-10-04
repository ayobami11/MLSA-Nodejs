import express from "express";

import login from "../controllers/auth/login.js";
import signup from "../controllers/auth/signup.js";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/signup", signup);

export default authRouter;