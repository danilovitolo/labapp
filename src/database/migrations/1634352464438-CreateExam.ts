import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateExam1634352464438 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "exams",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "examtype",
            type: "varchar",
          },
          {
            name: "active",
            type: "boolean",
            default: "true",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("exams");
  }
}
