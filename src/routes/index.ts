import { Router } from "express";

import { examRoutes } from "./exam.routes";
import { laboratoriesRoutes } from "./laboratory.routes";
import { laboratoryExamRoutes } from "./laboratoryExam.routes";

const router = Router();

router.use("/laboratories", laboratoriesRoutes);
router.use("/exams", examRoutes);
router.use("/laboratoriesexams", laboratoryExamRoutes);

export { router };
