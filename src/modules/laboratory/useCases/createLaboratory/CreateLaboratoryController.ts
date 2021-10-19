import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateLaboratoryUseCase } from "./CreateLaboratoryUseCase";

class CreateLaboratoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, address, zipCode, neighborhood, city, state } = request.body;
    const createLaboratoryUseCase = container.resolve(CreateLaboratoryUseCase);

    await createLaboratoryUseCase.execute({
      name,
      address,
      zipCode,
      neighborhood,
      city,
      state,
    });

    return response.status(201).send();
  }
}

export { CreateLaboratoryController };
