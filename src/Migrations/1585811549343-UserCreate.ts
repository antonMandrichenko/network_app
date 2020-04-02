import {MigrationInterface, QueryRunner} from "typeorm";

export class UserCreate1585811549343 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE IF EXISTS "user"`);
        await queryRunner.query(`CREATE TABLE "user"
          ("id" SERIAL NOT NULL PRIMARY KEY,
           "username" character varying NOT NULL,
           "email" character varying(100) NOT NULL UNIQUE,
           "password_hash" character varying NOT NULL,
           "mobile" character varying(20) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
