import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateLaboratoryUseCase } from "./UpdateLaboratoryUseCase";

class UpdateLaboratoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, address, zipCode, neighborhood, city, state, active } =
      request.body;
    const { id } = request.params;
    const updateLaboratoryUseCase = container.resolve(UpdateLaboratoryUseCase);

    const updatedLaboratory = await updateLaboratoryUseCase.execute({
      id,
      name,
      address,
      zipCode,
      neighborhood,
      city,
      state,
      active,
    });

    return response.status(200).json(updatedLaboratory);
  }
}

export { UpdateLaboratoryController };
