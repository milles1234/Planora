"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProjects = exports.getProjects = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getProjects = async (req, res) => {
    try {
        const projects = await prisma.project.findMany();
        res.json(projects);
    }
    catch (error) {
        res.status(500).json({
            message: "Error in fetching projects"
        });
    }
};
exports.getProjects = getProjects;
const createProjects = async (req, res) => {
    const { name, description, startDate, endDate } = req.body;
    try {
        const newProject = await prisma.project.create({
            data: {
                name,
                description,
                startDate,
                endDate
            }
        });
        res.status(201).json(newProject);
    }
    catch (error) {
        res.status(500).json({
            message: `Error in creating Project: ${error.message}`
        });
    }
};
exports.createProjects = createProjects;
//# sourceMappingURL=projectControllers.js.map