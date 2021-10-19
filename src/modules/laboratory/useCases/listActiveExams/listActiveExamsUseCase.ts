import { inject, injectable } from "tsyringe";

import { Exam } from "../../entities/Exam";
import { IExamsRepository } from "../../repositories/IExamsRepository";

@injectable()
class ListActiveExamsUseCase {
  constructor(
    @inject("ExamsRepository")
    private examsRepository: IExamsRepository
  ) {}

  async execute(): Promise<Exam[]> {
    const activeExams = await this.examsRepository.list();

    return activeExams;
  }
}

export { ListActiveExamsUseCase };
