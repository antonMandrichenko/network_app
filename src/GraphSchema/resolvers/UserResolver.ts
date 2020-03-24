import { Resolver, Query, Arg } from "type-graphql";
import { UserType } from "GraphSchema/types";

@Resolver()
export class UserResolver {
  private user: UserType = {
    id: "232323223",
    username: "string",
    lastName: "string2",
    firstName: "gertruda",
    email: "afafafa@test.com",
    gender: "male"
  };

  @Query(returns => UserType)
  getUser() {
    return this.user;
  }
}
