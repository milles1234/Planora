import { Router } from "express";
import { createTasks, getTasks, UpdateTasksStatus } from "../controllers/TaskControllers";

const router = Router();

router.get("/", getTasks);
router.post("/", createTasks)
router.patch("/:taskId/status",UpdateTasksStatus)


export default router;