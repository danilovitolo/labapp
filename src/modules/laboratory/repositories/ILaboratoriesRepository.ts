import { Laboratory } from "../entities/Laboratory";

interface ICreateLaboratoryDTO {
  name: string;
  address: string;
  zipCode?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}

interface ILaboratoriesRepository {
  list(): Promise<Laboratory[]>;
  create(data: ICreateLaboratoryDTO): Promise<void>;
  findByName(name: string): Promise<Laboratory>;
  update(laboratory: Laboratory): Promise<Laboratory>;
  findById(id: string): Promise<Laboratory | undefined>;
  listLaboratoriesByIds(ids: string[]): Promise<Laboratory[]>;
}

export { ILaboratoriesRepository, ICreateLaboratoryDTO };
