import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLaboratoryExamAssociate1634599971157
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "laboratoryexamassociate",
        columns: [
          {
            name: "idexam",
            type: "varchar",
          },
          {
            name: "idlaboratory",
            type: "varchar",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("laboratoryexamassociate");
  }
}
