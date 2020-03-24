import { buildSchema } from "type-graphql";
import { UserResolver } from "GraphSchema/resolvers";

const createSchema = () => {
  return buildSchema({
    resolvers: [UserResolver],
    validate: false
  });
};

export default createSchema;
