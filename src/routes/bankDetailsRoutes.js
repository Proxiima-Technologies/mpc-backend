import { Router } from 'express'
import bankDetailsController from '../controllers/BankDetailsController'

import loginRequired from '../middlewares/loginRequired'

const router = new Router()

router.get('/', loginRequired, bankDetailsController.index)

export default router
