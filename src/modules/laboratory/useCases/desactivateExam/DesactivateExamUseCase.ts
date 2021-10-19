import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IExamsRepository } from "../../repositories/IExamsRepository";

@injectable()
class DesactivateExamUseCase {
  constructor(
    @inject("ExamsRepository")
    private examsRepository: IExamsRepository
  ) {}

  async execute(id: string): Promise<void> {
    const exam = await this.examsRepository.findById(id);

    if (!exam) {
      throw new AppError("Exam not found", 404);
    }

    if (!exam.active) {
      throw new AppError("Exam alreary desactivated", 400);
    }

    exam.active = false;

    await this.examsRepository.update(exam);
  }
}

export { DesactivateExamUseCase };
