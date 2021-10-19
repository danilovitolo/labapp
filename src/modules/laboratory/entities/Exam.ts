import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("exams")
class Exam {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column({ name: "examtype" })
  examType: string;

  @Column()
  active: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Exam };
