import { Router } from "express";

import { AssociateLaboratoryExamController } from "../modules/laboratory/useCases/associateLaboratoryExam/AssociateLaboratoryExamController";
import { CreateExamController } from "../modules/laboratory/useCases/createExam/CreateExamController";
import { DesactivateExamController } from "../modules/laboratory/useCases/desactivateExam/DesactivateExamController";
import { DesassociateLaboratoryExamController } from "../modules/laboratory/useCases/desassociateLaboratoryExam/DesassociateLaboratoryExamController";
import { ListActiveExamsController } from "../modules/laboratory/useCases/listActiveExams/listActiveExamsController";
import { ListLaboratoriesByExamController } from "../modules/laboratory/useCases/listLaboratoriesByExam/ListLaboratoriesByExamController";
import { UpdateExamController } from "../modules/laboratory/useCases/updateExam/UpdateExamController";

const examRoutes = Router();

const createExamController = new CreateExamController();
const listActiveExamsController = new ListActiveExamsController();
const updateExamController = new UpdateExamController();
const desactivateExamController = new DesactivateExamController();
const associateLaboratoryExamController =
  new AssociateLaboratoryExamController();
const desassociateLaboratoryExamController =
  new DesassociateLaboratoryExamController();
const listLaboratoriesByExamController = new ListLaboratoriesByExamController();

examRoutes.post("/", createExamController.handle);
examRoutes.get("/", listActiveExamsController.handle);
examRoutes.put("/:id", updateExamController.handle);
examRoutes.post("/:id/associate", associateLaboratoryExamController.handle);
examRoutes.post(
  "/:id/desassociate",
  desassociateLaboratoryExamController.handle
);
examRoutes.delete("/:id", desactivateExamController.handle);
examRoutes.get("/:id/laboratories", listLaboratoriesByExamController.handle);

export { examRoutes };
