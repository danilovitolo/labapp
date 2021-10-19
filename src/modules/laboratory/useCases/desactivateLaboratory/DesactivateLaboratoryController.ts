import { Request, Response } from "express";
import { container } from "tsyringe";

import { DesactivateLaboratoryUseCase } from "./DesactivateLaboratoryUseCase";

class DesactivateLaboratoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const desactivateLaboratoryUseCase = container.resolve(
      DesactivateLaboratoryUseCase
    );

    await desactivateLaboratoryUseCase.execute(id);

    return response.status(204).send();
  }
}

export { DesactivateLaboratoryController };
