import {  MigrationInterface, QueryRunner, Table  } from "typeorm";

export class createTableUsers1598916372276 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },

                {
                    name: 'name',
                    type: 'varchar',
                },

                {
                    name: 'email',
                    type: 'varchar',
                    isUnique: true
                },

                {
                    name: 'password',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }
}
