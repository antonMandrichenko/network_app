import { ApolloServer } from 'apollo-server-koa'
import get from 'lodash/get'

import createSchema from 'GraphSchema'

import AppContext, { SubscriptionContext } from 'utils/Context'
import { getAuthorizationUser } from 'utils/JWT'

export default async function setupGraphQLServer() {
  const schema = await createSchema()
  const server = new ApolloServer({
    schema,
    context: ({ ctx, connection }) => {
      return new AppContext(connection ? connection.context : ctx)
    },
    subscriptions: {
      onConnect: async (connectionParams): Promise<SubscriptionContext> => {
        const authorization = get(connectionParams, 'Authorization')
        const user = await getAuthorizationUser(authorization)
        return { user }
      },
    },
    introspection: true,
    tracing: true,
  })

  return { schema, server }
}
