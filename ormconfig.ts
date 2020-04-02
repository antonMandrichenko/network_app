import { DATABASE, HOST } from "./src/Config";

const ormconfig = {
  type: "postgres",
  host: HOST,
  port: 5432,
  username: DATABASE.USER,
  password: DATABASE.PASSWORD,
  database: DATABASE.NAME,
  synchronize: true,
  logging: false,
  migrationsTableName: "migrations",
  entities: ["src/Entity/**/*.ts"],
  migrations: ["src/Migrations/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/Entity",
    migrationsDir: "src/Migrations",
    subscribersDir: "src/subscriber"
  }
};

module.exports = ormconfig;
