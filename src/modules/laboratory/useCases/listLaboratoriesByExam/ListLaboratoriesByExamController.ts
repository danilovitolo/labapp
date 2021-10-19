import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListLaboratoriesByExamUseCase } from "./ListLaboratoriesByExamUseCase";

class ListLaboratoriesByExamController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const listLaboratoriesByExamUseCase = container.resolve(
      ListLaboratoriesByExamUseCase
    );

    const laboratoriesList = await listLaboratoriesByExamUseCase.execute(name);

    return response.status(200).send(laboratoriesList);
  }
}

export { ListLaboratoriesByExamController };
