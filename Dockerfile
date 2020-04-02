FROM node:dubnium-alpine

WORKDIR /app

COPY src ./src/
COPY webpack.config.js ./webpack.config.js
COPY tsconfig.json ./tsconfig.json
COPY package.json ./package.json
COPY .env ./.env
COPY ormconfig.ts ./ormconfig.ts

EXPOSE 4500
RUN yarn 
RUN yarn webpack:run

CMD ["yarn", "create:api"]
