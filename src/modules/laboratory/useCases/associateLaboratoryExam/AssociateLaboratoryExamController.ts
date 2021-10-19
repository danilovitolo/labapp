import { Request, Response } from "express";
import { container } from "tsyringe";

import { AssociateLaboratoryExamUseCase } from "./AssociateLaboratoryExamUseCase";

class AssociateLaboratoryExamController {
  async handle(request: Request, response: Response): Promise<Response> {
    /**
     * Feito dessa forma para ter 3 opções de requisições de chamada
     * 1 - Pelo /laboratories/:idLaboratorio/associate
     * 2 - Pelo /exams/:idExam/associate
     * 3 - Pelo /laboratoriesExams/
     */

    const idLaboratory = request.body.idLaboratory
      ? request.body.idLaboratory
      : request.params.id;

    // Feito dessa forma para ter 3 opções de chamada do método
    const idExam = request.body.idExam
      ? request.body.idExam
      : request.params.id;

    const associateLaboratoryExamUseCase = container.resolve(
      AssociateLaboratoryExamUseCase
    );

    await associateLaboratoryExamUseCase.execute({ idLaboratory, idExam });

    return response.status(201).send();
  }
}

export { AssociateLaboratoryExamController };
