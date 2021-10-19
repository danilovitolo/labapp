import { Exam } from "../entities/Exam";

interface ICreateExamDTO {
  name: string;
  examType: string;
}

interface IExamsRepository {
  list(): Promise<Exam[]>;
  create(data: ICreateExamDTO): Promise<void>;
  findByName(name: string): Promise<Exam>;
  update(exam: Exam): Promise<Exam>;
  findById(id: string): Promise<Exam | undefined>;
}

export { IExamsRepository, ICreateExamDTO };
