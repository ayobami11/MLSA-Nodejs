import express from "express";

import { configDotenv } from "dotenv";

import { connectToDatabase } from "./config/database.js";

import authRouter from "./routes/auth.js";
import bookRouter from "./routes/book.js";
import verifyRequestMethod from "./middleware/verifyRequestMethod.js";
import verifyAccessToken from "./middleware/verifyAccessToken.js";

import errorHandler from "./middleware/errorHandler/index.js";

import logger from "./utils/logger.js";

configDotenv();

const app = express();
const port = process.env.PORT_2 || 3000;

app.use(express.json());

app.use(verifyRequestMethod);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/books", bookRouter);

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.use(errorHandler);

app.listen(port, async () => {
    await connectToDatabase(),
        logger.info(`[server]: Server is running on port ${port}...`)
});