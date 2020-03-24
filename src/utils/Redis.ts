import Redis from 'ioredis'

import { REDIS } from 'Config'

const redisClient = new Redis(REDIS.URL)

export default redisClient