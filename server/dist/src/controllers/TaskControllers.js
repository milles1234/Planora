"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTasksStatus = exports.createTasks = exports.getTasks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getTasks = async (req, res) => {
    const { projectId } = req.query;
    try {
        const tasks = await prisma.task.findMany({
            where: {
                projectId: Number(projectId),
            },
            include: {
                author: true,
                assignee: true,
                comments: true,
                attachments: true
            }
        });
        res.json(tasks);
    }
    catch (error) {
        res.status(500).json({
            message: "Error in fetching tasks"
        });
    }
};
exports.getTasks = getTasks;
const createTasks = async (req, res) => {
    const { title, description, status, priority, tags, startDate, dueDate, points, projectId, authorUserId, assignedUserId, } = req.body;
    try {
        const newTask = await prisma.task.create({
            data: {
                title,
                description,
                status,
                priority,
                tags,
                startDate,
                dueDate,
                points,
                projectId,
                authorUserId,
                assignedUserId,
            }
        });
        res.status(201).json(newTask);
    }
    catch (error) {
        res.status(500).json({
            message: `Error in creating Tasks: ${error.message}`
        });
    }
};
exports.createTasks = createTasks;
const UpdateTasksStatus = async (req, res) => {
    const { taskId } = req.params;
    const { status } = req.body;
    try {
        const updatedTasks = await prisma.task.update({
            where: {
                id: Number(taskId),
            },
            data: {
                status: status
            }
        });
        res.json(updatedTasks);
    }
    catch (error) {
        res.status(500).json({
            message: "Error in updating tasks"
        });
    }
};
exports.UpdateTasksStatus = UpdateTasksStatus;
//# sourceMappingURL=TaskControllers.js.map