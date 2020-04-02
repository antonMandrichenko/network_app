import { printSchema } from "graphql";
import Koa, { BaseContext } from "koa";
import { createConnection } from "typeorm";
import koaBody from "koa-body";
import cors from "@koa/cors";
import { publicRouter, privateRouter } from "Routes";
import setupGraphQLServer from "utils/graphQLServer";
import { SECRETS } from "Config";

const setupApp = async () => {
  const startTime = new Date().toUTCString();

  await createConnection();

  const {
    server: graphQLServer,
    schema: graphQLSchema
  } = await setupGraphQLServer();

  const app = new Koa();

  app.keys = [SECRETS.SESSION];

  app.use(
    cors({
      credentials: true,
      origin(ctx: BaseContext): string {
          return "http://localhost:3000";
        }
    })
  );

  app.use(koaBody({ multipart: true }));

  app.use(async (ctx, next) => {
    ctx.set("x-app-start-time", startTime);
    await next();
  });

  publicRouter.get("/graphql/schema", (ctx: BaseContext): void => {
    ctx.body = printSchema(graphQLSchema);
  });

  graphQLServer.applyMiddleware({
    app,
    path: "/graphql"
  });

  app.use(publicRouter.routes());
  app.use(privateRouter.routes());

  app.on("error", (err): void => {
    console.log("error", err);
  });

  return { app, graphQLServer };
};

export default setupApp;
