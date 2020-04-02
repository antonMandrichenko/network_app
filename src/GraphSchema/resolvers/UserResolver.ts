import { Resolver, Query, Arg, Mutation, Args } from "type-graphql";
import { UserType } from "GraphSchema/types";
import { getRepository, Repository } from "typeorm";
import { User } from "Entity/User";
import { AddUserArgs } from "GraphSchema/arguments/UserArgs";

@Resolver()
export class UserResolver {
  private user: UserType = {
    id: "343434",
    username: "string",
    mobile: "457582452",
    password_hash: "bfbccbfbfbfbfbfb",
    email: "afafafa@test.com"
  };

  @Query(returns => UserType)
  getUser() {
    return this.user;
  }

  @Mutation(returns => UserType)
  async addUser(@Args() args: AddUserArgs) {
    const userRepository = getRepository(User);
    const user = {
      username: args.username,
      password_hash: args.password_hash,
      email: args.email,
      mobile: args.mobile
    };
    return await userRepository.save(user);
  }
}
