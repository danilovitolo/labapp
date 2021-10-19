import { getRepository, Repository } from "typeorm";
import { validate } from "uuid";

import { LaboratoryExamAssociate } from "../../entities/LaboratoryExamAssociate";
import {
  ILaboratoriesExamsRepository,
  ILaboratoryExamDTO,
} from "../ILaboratoriesExamsRepository";

class LaboratoriesExamsRepository implements ILaboratoriesExamsRepository {
  private repository: Repository<LaboratoryExamAssociate>;

  constructor() {
    this.repository = getRepository(LaboratoryExamAssociate);
  }

  async associate({ idLaboratory, idExam }: ILaboratoryExamDTO): Promise<void> {
    await this.repository.save({ idExam, idLaboratory });
  }

  async desassociate(data: LaboratoryExamAssociate): Promise<void> {
    await this.repository.delete(data);
  }

  async findAssociate({
    idLaboratory,
    idExam,
  }: ILaboratoryExamDTO): Promise<LaboratoryExamAssociate | undefined> {
    if (!validate(idLaboratory) || !validate(idExam)) {
      return undefined;
    }

    const associateFinded = await this.repository.findOne({
      where: {
        idExam,
        idLaboratory,
      },
    });

    return associateFinded;
  }

  async findLaboratoriesByExam(
    idExam: string
  ): Promise<LaboratoryExamAssociate[]> {
    const list = await this.repository.find({ idExam });

    return list;
  }
}

export { LaboratoriesExamsRepository };
