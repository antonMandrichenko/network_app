import httpShutdown from 'http-shutdown'
import http from 'http'
import { HOST, PORT } from 'Config'
import redis from 'utils/Redis'
import setupApp from 'app'

const port = parseInt(PORT, 10)
const host = HOST

const startServer = async () => {
  const { app, graphQLServer } = await setupApp()
  const server = httpShutdown(http.createServer(app.callback()))
  
  server.listen(port, host, () => {
    graphQLServer.installSubscriptionHandlers(server)
    console.log(`App server is listening on http://${host}:${port}/`)
  })

  const shutdown = () => {
    server.shutdown(async () => {
      // await db.close()
      await redis.disconnect()
      process.exit(0)
    })
  }
}

startServer()
