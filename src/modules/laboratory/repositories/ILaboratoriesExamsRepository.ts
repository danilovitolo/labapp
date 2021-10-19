import { LaboratoryExamAssociate } from "../entities/LaboratoryExamAssociate";

interface ILaboratoryExamDTO {
  idLaboratory: string;
  idExam: string;
}

interface ILaboratoriesExamsRepository {
  associate(data: ILaboratoryExamDTO): Promise<void>;
  desassociate(data: LaboratoryExamAssociate): Promise<void>;
  findAssociate(
    data: ILaboratoryExamDTO
  ): Promise<LaboratoryExamAssociate | undefined>;
  findLaboratoriesByExam(idExam: string): Promise<LaboratoryExamAssociate[]>;
}

export { ILaboratoriesExamsRepository, ILaboratoryExamDTO };
