import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class UserType {
  @Field(type => ID)
  id: string;

  @Field(type => String, { nullable: true })
  public username?: string

  @Field(type => String, { nullable: true })
  public password_hash: string

  @Field(type => String, { nullable: true })
  public email: string

  @Field(type => String, { nullable: true })
  public mobile?: string
}