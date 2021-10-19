import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateExamUseCase } from "./UpdateExamUseCase";

class UpdateExamController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, examType, active } = request.body;
    const { id } = request.params;
    const updateExamUseCase = container.resolve(UpdateExamUseCase);

    const updatedExam = await updateExamUseCase.execute({
      id,
      name,
      examType,
      active,
    });

    return response.status(200).json(updatedExam);
  }
}

export { UpdateExamController };
