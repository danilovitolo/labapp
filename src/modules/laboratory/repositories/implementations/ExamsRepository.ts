import { getRepository, Repository } from "typeorm";
import { validate } from "uuid";

import { Exam } from "../../entities/Exam";
import { IExamsRepository, ICreateExamDTO } from "../IExamsRepository";

class ExamsRepository implements IExamsRepository {
  private repository: Repository<Exam>;

  constructor() {
    this.repository = getRepository(Exam);
  }

  async create({ name, examType }: ICreateExamDTO): Promise<void> {
    const exam = this.repository.create({
      name,
      examType,
    });

    await this.repository.save(exam);
  }

  async list(): Promise<Exam[]> {
    const exams = await this.repository.find({ active: true });

    return exams;
  }

  async findByName(name: string): Promise<Exam> {
    const exam = this.repository.findOne({
      name,
    });

    return exam;
  }

  async findById(id: string): Promise<Exam | undefined> {
    if (!validate(id)) {
      return undefined;
    }
    const findedExam = this.repository.findOne({ id });
    return findedExam;
  }

  async update(exam: Exam): Promise<Exam> {
    return this.repository.save(exam);
  }
}

export { ExamsRepository };
