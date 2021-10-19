import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Laboratory } from "../../entities/Laboratory";
import { IExamsRepository } from "../../repositories/IExamsRepository";
import { ILaboratoriesExamsRepository } from "../../repositories/ILaboratoriesExamsRepository";
import { ILaboratoriesRepository } from "../../repositories/ILaboratoriesRepository";

@injectable()
class ListLaboratoriesByExamUseCase {
  constructor(
    @inject("LaboratoriesExamsRepository")
    private laboratoriesExamsRepository: ILaboratoriesExamsRepository,

    @inject("ExamsRepository")
    private examsRepository: IExamsRepository,

    @inject("LaboratoriesRepository")
    private laboratoryRepository: ILaboratoriesRepository
  ) {}

  async execute(name: string): Promise<Laboratory[]> {
    const examFinded = await this.examsRepository.findByName(name);
    if (!examFinded || !examFinded.active) {
      throw new AppError("Exam not found", 404);
    }

    const laboratoriesAssociated =
      await this.laboratoriesExamsRepository.findLaboratoriesByExam(
        examFinded.id
      );

    if (!laboratoriesAssociated) {
      throw new AppError("Laboratories not found", 404);
    }

    const idsLaboratories = laboratoriesAssociated.map(
      (item) => item.idLaboratory
    );

    const laboratories = await this.laboratoryRepository.listLaboratoriesByIds(
      idsLaboratories
    );

    return laboratories;
  }
}

export { ListLaboratoriesByExamUseCase };
