import { ParameterizedContext } from 'koa'
import Router from 'koa-router'

import get from 'lodash/get'

// import signGmailPackage from 'utils/SocialPackages/Gmail/signGmailPackage'
// import gmailPackageUploaded from 'utils/SocialPackages/Gmail/gmailPackageUploaded'

// import { uploadProfilePhoto, uploadCommunityPhoto } from 'utils/Images'

const privateRouter = new Router()

privateRouter.use('/private', async (ctx, next) => {
  ctx.body = { api: 'v1/private' }
})

export default privateRouter
