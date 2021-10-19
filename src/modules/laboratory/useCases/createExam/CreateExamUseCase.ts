import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IExamsRepository } from "../../repositories/IExamsRepository";

interface IRequest {
  name: string;
  examType: string;
}

@injectable()
class CreateExamUseCase {
  constructor(
    @inject("ExamsRepository")
    private examsRepository: IExamsRepository
  ) {}

  async execute({ name, examType }: IRequest): Promise<void> {
    const examAlreadyExists = await this.examsRepository.findByName(name);

    if (examAlreadyExists) {
      throw new AppError("Exam already exists");
    }

    await this.examsRepository.create({ name, examType });
  }
}

export { CreateExamUseCase };
