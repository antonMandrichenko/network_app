import { ArgsType, Field, ID } from 'type-graphql'

@ArgsType()
export class AddUserArgs {
  @Field(type => String)
  public username?: string

  @Field(type => String)
  public password_hash: string

  @Field(type => String)
  public email: string

  @Field(type => String)
  public mobile?: string
}
