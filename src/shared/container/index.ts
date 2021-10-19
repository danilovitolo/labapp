import { container } from "tsyringe";

import { IExamsRepository } from "../../modules/laboratory/repositories/IExamsRepository";
import { ILaboratoriesExamsRepository } from "../../modules/laboratory/repositories/ILaboratoriesExamsRepository";
import { ILaboratoriesRepository } from "../../modules/laboratory/repositories/ILaboratoriesRepository";
import { ExamsRepository } from "../../modules/laboratory/repositories/implementations/ExamsRepository";
import { LaboratoriesExamsRepository } from "../../modules/laboratory/repositories/implementations/LaboratoriesExamsRepository";
import { LaboratoriesRepository } from "../../modules/laboratory/repositories/implementations/LaboratoriesRepository";

container.registerSingleton<ILaboratoriesRepository>(
  "LaboratoriesRepository",
  LaboratoriesRepository
);

container.registerSingleton<IExamsRepository>(
  "ExamsRepository",
  ExamsRepository
);

container.registerSingleton<ILaboratoriesExamsRepository>(
  "LaboratoriesExamsRepository",
  LaboratoriesExamsRepository
);
