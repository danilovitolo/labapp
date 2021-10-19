import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IExamsRepository } from "../../repositories/IExamsRepository";
import { ILaboratoriesExamsRepository } from "../../repositories/ILaboratoriesExamsRepository";
import { ILaboratoriesRepository } from "../../repositories/ILaboratoriesRepository";

interface IRequest {
  idLaboratory: string;
  idExam: string;
}

@injectable()
class AssociateLaboratoryExamUseCase {
  constructor(
    @inject("LaboratoriesExamsRepository")
    private laboratoriesExamsRepository: ILaboratoriesExamsRepository,

    @inject("ExamsRepository")
    private examsRepository: IExamsRepository,

    @inject("LaboratoriesRepository")
    private laboratoryRepository: ILaboratoriesRepository
  ) {}

  async execute({ idExam, idLaboratory }: IRequest): Promise<void> {
    const relationAlreadyExists =
      await this.laboratoriesExamsRepository.findAssociate({
        idLaboratory,
        idExam,
      });

    if (relationAlreadyExists) {
      throw new AppError("Relation already exists");
    }

    const examFinded = await this.examsRepository.findById(idExam);
    if (!examFinded || !examFinded.active) {
      throw new AppError("Exam not found", 404);
    }

    const laboratoryFinded = await this.laboratoryRepository.findById(
      idLaboratory
    );
    if (!laboratoryFinded || !laboratoryFinded.active) {
      throw new AppError("Laboratory not found", 404);
    }

    await this.laboratoriesExamsRepository.associate({ idLaboratory, idExam });
  }
}

export { AssociateLaboratoryExamUseCase };
