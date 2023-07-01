import { Router } from 'express'
import creditcardsController from '../controllers/CreditCardsController'

import loginRequired from '../middlewares/loginRequired'

const router = new Router()

router.get('/', loginRequired, creditcardsController.index)

export default router