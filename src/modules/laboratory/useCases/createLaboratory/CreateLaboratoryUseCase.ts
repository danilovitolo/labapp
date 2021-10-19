import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ILaboratoriesRepository } from "../../repositories/ILaboratoriesRepository";

interface IRequest {
  name: string;
  address: string;
  zipCode?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}

@injectable()
class CreateLaboratoryUseCase {
  constructor(
    @inject("LaboratoriesRepository")
    private laboratoriesRepository: ILaboratoriesRepository
  ) {}

  async execute({
    name,
    address,
    zipCode,
    neighborhood,
    city,
    state,
  }: IRequest): Promise<void> {
    const laboratoryAlreadyExists =
      await this.laboratoriesRepository.findByName(name);

    if (laboratoryAlreadyExists) {
      throw new AppError("Laboratory already exists");
    }

    await this.laboratoriesRepository.create({
      name,
      address,
      zipCode,
      neighborhood,
      city,
      state,
    });
  }
}

export { CreateLaboratoryUseCase };
