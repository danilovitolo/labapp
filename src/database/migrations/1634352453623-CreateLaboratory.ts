import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLaboratory1634352453623 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "laboratories",
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
            name: "address",
            type: "varchar",
          },
          {
            name: "zipcode",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "neighborhood",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "city",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "state",
            type: "varchar",
            isNullable: true,
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
    await queryRunner.dropTable("laboratories");
  }
}
