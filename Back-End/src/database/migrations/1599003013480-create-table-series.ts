import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createTableSeries1599003013480 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "series",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'image_thumbnail_path',
                    type: 'varchar'
                },
                {
                    name: 'user_id',
                    type: 'uuid'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("series")
    }
}
