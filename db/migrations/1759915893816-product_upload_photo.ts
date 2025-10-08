import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductUploadPhoto1759915893816 implements MigrationInterface {
    name = 'ProductUploadPhoto1759915893816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`photoUrl\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`photoUrl\` varchar(255) NULL`);
    }

}
