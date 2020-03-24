import jwt from 'jsonwebtoken'

export class JWTSession {
  public sub!: string
  public role!: string
}

const decodeToken = (token: string): JWTSession | null => {
  if (!token) return null
  return jwt.decode(token) as JWTSession
}

export const getAuthorizationUser = async (
  authorization: string,
): Promise<boolean | null> => {
  if (!authorization) {
    return null
  }

  const token = authorization.replace('Bearer ', '')

  const session: JWTSession | null = await decodeToken(token)

  if (!session) {
    return null
  }

  return true;
}
