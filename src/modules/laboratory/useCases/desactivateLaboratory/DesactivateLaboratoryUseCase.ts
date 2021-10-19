import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ILaboratoriesRepository } from "../../repositories/ILaboratoriesRepository";

@injectable()
class DesactivateLaboratoryUseCase {
  constructor(
    @inject("LaboratoriesRepository")
    private laboratoriesRepository: ILaboratoriesRepository
  ) {}

  async execute(id: string): Promise<void> {
    const laboratory = await this.laboratoriesRepository.findById(id);

    if (!laboratory) {
      throw new AppError("Laboratory not found", 404);
    }

    if (!laboratory.active) {
      throw new AppError("Laboratory alreary desactivated", 400);
    }

    laboratory.active = false;

    await this.laboratoriesRepository.update(laboratory);
  }
}

export { DesactivateLaboratoryUseCase };
