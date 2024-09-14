import { Router } from "express";

import { getTasks } from "../controllers/task/getTasks.js";
import { addTask } from "../controllers/task/addTask.js";
import { getTask } from "../controllers/task/getTask.js";
import { editTask } from "../controllers/task/editTask.js";
import { toggleCompleted } from "../controllers/task/toggleCompleted.js";
import { deleteTask } from "../controllers/task/deleteTask.js";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTask);

router.post("/", addTask);

router.patch("/:id", editTask);
router.patch("/:id/toggleCompleted", toggleCompleted);

router.delete("/:id", deleteTask);

export default router;