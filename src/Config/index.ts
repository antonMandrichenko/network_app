import get from "lodash/get";
require("dotenv").config();

interface Env {
  NODE_ENV?: string;
}

const { NODE_ENV } = process.env as Env;

export const ENV = NODE_ENV;

export const IS_PRODUCTION = NODE_ENV === "production";
export const IS_DEVELOPMENT = NODE_ENV === "development";

const getEnvData = (env: string): string => get(process.env, env, "");

export const HOST = getEnvData("HOST");
export const PORT = getEnvData("PORT");

export const DATABASE = {
  URL: getEnvData("DATABASE_URL"),
  NAME: getEnvData("DATABASE_NAME"),
  USER: getEnvData("DATABASE_USER"),
  PASSWORD: getEnvData("DATABASE_PASSWORD")
};

export const REDIS = {
  URL: getEnvData("REDIS_URL")
};

export const SECRETS = {
  SESSION: getEnvData("SECRETS_SESSION")
};
