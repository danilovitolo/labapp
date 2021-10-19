import { Router } from "express";

import { AssociateLaboratoryExamController } from "../modules/laboratory/useCases/associateLaboratoryExam/AssociateLaboratoryExamController";
import { CreateLaboratoryController } from "../modules/laboratory/useCases/createLaboratory/CreateLaboratoryController";
import { DesactivateLaboratoryController } from "../modules/laboratory/useCases/desactivateLaboratory/DesactivateLaboratoryController";
import { DesassociateLaboratoryExamController } from "../modules/laboratory/useCases/desassociateLaboratoryExam/DesassociateLaboratoryExamController";
import { ListActiveLaboratoriesController } from "../modules/laboratory/useCases/listActiveLaboratories/listActiveLaboratoriesController";
import { UpdateLaboratoryController } from "../modules/laboratory/useCases/updateLaboratory/UpdateLaboratoryController";

const laboratoriesRoutes = Router();

const createLaboratoryController = new CreateLaboratoryController();
const listActiveLaboratories = new ListActiveLaboratoriesController();
const updateLaboratoryController = new UpdateLaboratoryController();
const desactivateLaboratoryController = new DesactivateLaboratoryController();
const associateLaboratoryExamController =
  new AssociateLaboratoryExamController();
const desassociateLaboratoryExamController =
  new DesassociateLaboratoryExamController();

laboratoriesRoutes.post("/", createLaboratoryController.handle);
laboratoriesRoutes.get("/", listActiveLaboratories.handle);
laboratoriesRoutes.put("/:id", updateLaboratoryController.handle);
laboratoriesRoutes.delete("/:id", desactivateLaboratoryController.handle);
laboratoriesRoutes.post(
  "/:id/associate",
  associateLaboratoryExamController.handle
);
laboratoriesRoutes.post(
  "/:id/desassociate",
  desassociateLaboratoryExamController.handle
);

export { laboratoriesRoutes };
