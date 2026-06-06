
import express from "express"

import { getUser, getUserTasks, createTasks, updateTask, deleteTask } from "../controllers/usersController.js"

const router = express.Router()

router.get("/:id", getUser)

router.get("/:id/tasks", getUserTasks)

router.post("/:id/tasks", createTasks)

router.patch("/:id/tasks/:idTask", updateTask)

router.delete("/:id/tasks/:idTask", deleteTask)

export default router;