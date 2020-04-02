// const { DATABASE, HOST } = require("./config");

const ormconfig = {
  type: "postgres",
  host: process.env.HOST,
  port: 5432,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
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
