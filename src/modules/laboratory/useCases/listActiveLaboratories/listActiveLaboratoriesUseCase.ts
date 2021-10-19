import { inject, injectable } from "tsyringe";

import { Laboratory } from "../../entities/Laboratory";
import { ILaboratoriesRepository } from "../../repositories/ILaboratoriesRepository";

@injectable()
class ListActiveLaboratoriesUseCase {
  constructor(
    @inject("LaboratoriesRepository")
    private laboratoriesRepository: ILaboratoriesRepository
  ) {}

  async execute(): Promise<Laboratory[]> {
    const activeLaboratories = await this.laboratoriesRepository.list();

    return activeLaboratories;
  }
}

export { ListActiveLaboratoriesUseCase };
