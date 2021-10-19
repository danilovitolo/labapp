import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListActiveLaboratoriesUseCase } from "./listActiveLaboratoriesUseCase";

class ListActiveLaboratoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createLaboratoryUseCase = container.resolve(
      ListActiveLaboratoriesUseCase
    );

    const listActiveLaboratories = await createLaboratoryUseCase.execute();

    return response.status(200).json(listActiveLaboratories);
  }
}

export { ListActiveLaboratoriesController };
