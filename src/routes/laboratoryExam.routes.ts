import { Router } from "express";

import { AssociateLaboratoryExamController } from "../modules/laboratory/useCases/associateLaboratoryExam/AssociateLaboratoryExamController";
import { DesassociateLaboratoryExamController } from "../modules/laboratory/useCases/desassociateLaboratoryExam/DesassociateLaboratoryExamController";

const laboratoryExamRoutes = Router();

const associateLaboratoryExamController =
  new AssociateLaboratoryExamController();
const desassociateLaboratoryExamController =
  new DesassociateLaboratoryExamController();

laboratoryExamRoutes.post(
  "/associate",
  associateLaboratoryExamController.handle
);
laboratoryExamRoutes.post(
  "/desassociate",
  desassociateLaboratoryExamController.handle
);

export { laboratoryExamRoutes };
