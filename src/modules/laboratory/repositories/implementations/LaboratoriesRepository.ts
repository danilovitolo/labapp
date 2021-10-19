import { getRepository, In, Repository } from "typeorm";
import { validate } from "uuid";

import { Laboratory } from "../../entities/Laboratory";
import {
  ILaboratoriesRepository,
  ICreateLaboratoryDTO,
} from "../ILaboratoriesRepository";

class LaboratoriesRepository implements ILaboratoriesRepository {
  private repository: Repository<Laboratory>;

  constructor() {
    this.repository = getRepository(Laboratory);
  }

  async create({
    name,
    address,
    neighborhood,
    city,
    zipCode,
    state,
  }: ICreateLaboratoryDTO): Promise<void> {
    const laboratory = this.repository.create({
      address,
      name,
      neighborhood,
      city,
      zipCode,
      state,
    });

    await this.repository.save(laboratory);
  }

  async list(): Promise<Laboratory[]> {
    const laboratories = await this.repository.find({ active: true });

    return laboratories;
  }

  async listLaboratoriesByIds(ids: string[]): Promise<Laboratory[]> {
    const laboratories = await this.repository.find({
      active: true,
      id: In(ids),
    });

    return laboratories;
  }

  async findByName(name: string): Promise<Laboratory> {
    const laboratory = this.repository.findOne({
      name,
    });

    return laboratory;
  }

  async findById(id: string): Promise<Laboratory | undefined> {
    if (!validate(id)) {
      return undefined;
    }
    const findLaboratory = this.repository.findOne({ id });
    return findLaboratory;
  }

  async update(laboratory: Laboratory): Promise<Laboratory> {
    return this.repository.save(laboratory);
  }
}

export { LaboratoriesRepository };
