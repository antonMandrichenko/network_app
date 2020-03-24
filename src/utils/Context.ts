import { ParameterizedContext } from 'koa'

import get from 'lodash/get'
import map from 'lodash/map'

interface CheckFunction {
  (ctx: AppContext): Promise<boolean>
}

export interface SubscriptionContext {
  user: any
}

class AppContext {
  public requestContext: ParameterizedContext | SubscriptionContext

  public user: any

  public dataLoaders: any

  public constructor(
    requestContext: ParameterizedContext | SubscriptionContext,
  ) {
    this.requestContext = requestContext
    this.user = get(this.requestContext, 'user') || null
  }

  public async isAuthorized(checkIt: CheckFunction[] | CheckFunction) {
    const performCheck = async (checkFn: CheckFunction) => {
      if (typeof checkFn === 'function') {
        const checkPassed = await checkFn(this)

        if (!checkPassed) {
          throw new Error ("firbidden")
        }
      }
    }
    const checkFns = checkIt instanceof Array ? checkIt : [checkIt]
    await Promise.all(map(checkFns, performCheck))
  }
}

export default AppContext
