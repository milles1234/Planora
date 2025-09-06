"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TaskControllers_1 = require("../controllers/TaskControllers");
const router = (0, express_1.Router)();
router.get("/", TaskControllers_1.getTasks);
router.post("/", TaskControllers_1.createTasks);
router.patch("/:taskId/status", TaskControllers_1.UpdateTasksStatus);
exports.default = router;
//# sourceMappingURL=taskRoutes.js.map