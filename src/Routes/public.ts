import { ParameterizedContext } from 'koa'
import Router from 'koa-router'

const publicRouter = new Router()

publicRouter
  .get('/', (ctx: ParameterizedContext): void => {
    ctx.body = { api: 'v1' }
  })

export default publicRouter
