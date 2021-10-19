import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ILaboratoriesExamsRepository } from "../../repositories/ILaboratoriesExamsRepository";

interface IRequest {
  idLaboratory: string;
  idExam: string;
}

@injectable()
class DesassociateLaboratoryExamUseCase {
  constructor(
    @inject("LaboratoriesExamsRepository")
    private laboratoriesExamsRepository: ILaboratoriesExamsRepository
  ) {}

  async execute({ idExam, idLaboratory }: IRequest): Promise<void> {
    const associateFinded =
      await this.laboratoriesExamsRepository.findAssociate({
        idLaboratory,
        idExam,
      });

    if (!associateFinded) {
      throw new AppError("Relation not found", 404);
    }

    await this.laboratoriesExamsRepository.desassociate(associateFinded);
  }
}

export { DesassociateLaboratoryExamUseCase };
