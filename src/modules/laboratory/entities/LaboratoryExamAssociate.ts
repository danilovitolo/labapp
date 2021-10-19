import { Entity, PrimaryColumn } from "typeorm";

@Entity("laboratoryexamassociate")
class LaboratoryExamAssociate {
  @PrimaryColumn({ name: "idlaboratory" })
  idLaboratory: string;

  @PrimaryColumn({ name: "idexam" })
  idExam: string;
}

export { LaboratoryExamAssociate };
