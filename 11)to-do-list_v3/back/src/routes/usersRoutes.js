
import express from "express"
import { getUserData, newTask, updateTaskData, deleteTask } from "../controllers/usersControllers.js"

const router = express.Router()

// methods
router.get("/:id", getUserData)

// new task
router.post("/:id/tasks", newTask)

// update data task
router.patch("/:id/tasks/:taskId", updateTaskData)

// delete task
router.delete("/:id/tasks/:taskId", deleteTask)



export default router;