import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Exam } from "../../entities/Exam";
import { IExamsRepository } from "../../repositories/IExamsRepository";

interface IRequest {
  id: string;
  name?: string;
  examType?: string;
  active?: boolean;
}

@injectable()
class UpdateExamUseCase {
  constructor(
    @inject("ExamsRepository")
    private examsRepository: IExamsRepository
  ) {}

  async execute({
    id,
    name,
    examType,
    active,
  }: IRequest): Promise<Exam | undefined> {
    const exam = await this.examsRepository.findById(id);

    if (!exam) {
      throw new AppError("Exam not found", 404);
    }

    Object.assign(exam, {
      name,
      examType,
      active,
    });

    const examUpdated = await this.examsRepository.update(exam);

    return examUpdated;
  }
}

export { UpdateExamUseCase };
