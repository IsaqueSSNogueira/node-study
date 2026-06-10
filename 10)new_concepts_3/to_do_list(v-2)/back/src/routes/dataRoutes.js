
import express from "express"
import { getTasks } from '../controllers/dataController.js'

const router = express.Router()

router.get("/:id", getTasks)

export default router