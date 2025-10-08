import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductUploadPhoto1759918000417 implements MigrationInterface {
    name = 'ProductUploadPhoto1759918000417'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`photoUrl\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`photoUrl\` varchar(500) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`photoUrl\``);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`photoUrl\` varchar(255) NULL`);
    }

}
