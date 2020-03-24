import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class UserType {
  @Field(type => ID)
  id: string;

  @Field(type => String, { nullable: true })
  public username?: string

  @Field(type => String, { nullable: true })
  public lastName?: string

  @Field(type => String, { nullable: true })
  public firstName?: string

  @Field(type => String)
  public email: string

  @Field(type => String, { nullable: true })
  public gender?: string
}