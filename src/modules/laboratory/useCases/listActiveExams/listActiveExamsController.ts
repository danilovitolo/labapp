import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListActiveExamsUseCase } from "./listActiveExamsUseCase";

class ListActiveExamsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createLaboratoryUseCase = container.resolve(ListActiveExamsUseCase);

    const listActiveExams = await createLaboratoryUseCase.execute();

    return response.status(200).json(listActiveExams);
  }
}

export { ListActiveExamsController };
