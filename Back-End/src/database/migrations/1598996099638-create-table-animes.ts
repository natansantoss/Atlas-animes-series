import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableAnimes1598996099638 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "animes",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'mal_id',
                    type: 'varchar'
                },
                {
                    name: 'title',
                    type: 'varchar'
                },
                {
                    name: 'synopsis',
                    type: 'varchar'
                },
                {
                    name: 'image',
                    type: 'varchar'
                },

                {
                    name: 'user_id',
                    type: 'uuid',
                }

            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("animes")
    }
}
