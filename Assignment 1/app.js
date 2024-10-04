import express from "express";

import { configDotenv } from "dotenv";

import { connectToDatabase } from "./config/database.js";

import { verifyRequestMethod } from "./middleware/verifyRequestMethod.js";

import taskRouter from "./routes/task.js";

const app = express();

configDotenv();

const port = process.env.PORT_1 || 3000;

app.use(express.json());

app.use(verifyRequestMethod);

app.use("/api/v1/tasks", taskRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, async () => {

    await connectToDatabase();

    console.log(`Connection succesful. Server is listening on port ${port}...`);
});