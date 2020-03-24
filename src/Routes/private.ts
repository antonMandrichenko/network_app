import Router from 'koa-router'

const privateRouter = new Router()

privateRouter.use('/private', async (ctx, next) => {
  ctx.body = { api: 'v1/private' }
})

export default privateRouter
