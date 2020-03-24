import get from 'lodash/get'

interface Env {
  NODE_ENV?: string
}

const { NODE_ENV } = process.env as Env

export const ENV = NODE_ENV

export const IS_PRODUCTION = NODE_ENV === 'production'
export const IS_DEVELOPMENT = NODE_ENV === 'development'

const getEnvData = (env: string): string => get(process.env, `${env}`, '')

export const HOST = getEnvData('HOST')
export const PORT = getEnvData('PORT')

export const DATABASE = {
  URL: getEnvData('DATABASE_URL'),
}

export const REDIS = {
  URL: getEnvData('REDIS_URL'),
}
