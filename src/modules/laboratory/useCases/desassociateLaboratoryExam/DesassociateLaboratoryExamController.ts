import { Request, Response } from "express";
import { container } from "tsyringe";

import { DesassociateLaboratoryExamUseCase } from "./DesassociateLaboratoryExamUseCase";

class DesassociateLaboratoryExamController {
  async handle(request: Request, response: Response): Promise<Response> {
    /**
     * Feito dessa forma para ter 3 opções de requisições de chamada
     * 1 - Pelo /laboratories/:idLaboratorio/desassociate
     * 2 - Pelo /exams/:idExam/desassociate
     * 3 - Pelo /laboratoriesExams/desassociate
     */

    const idLaboratory = request.body.idLaboratory
      ? request.body.idLaboratory
      : request.params.id;

    // Feito dessa forma para ter 3 opções de chamada do método
    const idExam = request.body.idExam
      ? request.body.idExam
      : request.params.id;

    const desassociateLaboratoryExamUseCase = container.resolve(
      DesassociateLaboratoryExamUseCase
    );

    await desassociateLaboratoryExamUseCase.execute({ idLaboratory, idExam });

    return response.status(204).send();
  }
}

export { DesassociateLaboratoryExamController };
