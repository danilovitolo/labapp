import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { Laboratory } from "../../entities/Laboratory";
import { ILaboratoriesRepository } from "../../repositories/ILaboratoriesRepository";

interface IRequest {
  id: string;
  name?: string;
  address?: string;
  zipCode?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  active?: boolean;
}

@injectable()
class UpdateLaboratoryUseCase {
  constructor(
    @inject("LaboratoriesRepository")
    private laboratoriesRepository: ILaboratoriesRepository
  ) {}

  async execute({
    id,
    name,
    address,
    zipCode,
    neighborhood,
    city,
    state,
    active,
  }: IRequest): Promise<Laboratory | undefined> {
    const laboratory = await this.laboratoriesRepository.findById(id);

    if (!laboratory) {
      throw new AppError("Laboratory not found", 404);
    }

    Object.assign(laboratory, {
      name,
      address,
      zipCode,
      neighborhood,
      city,
      state,
      active,
    });

    const laboratoryUpdated = await this.laboratoriesRepository.update(
      laboratory
    );

    return laboratoryUpdated;
  }
}

export { UpdateLaboratoryUseCase };
