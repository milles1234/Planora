import { Router } from "express";
import { createProjects, getProjects } from "../controllers/projectControllers";
import { search } from "../controllers/searchControllers";

const router = Router();

router.get("/", search);


export default router;