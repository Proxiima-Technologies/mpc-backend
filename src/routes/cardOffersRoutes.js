import { Router } from 'express'
import cardOffersController from '../controllers/CardOffersController'

import loginRequired from '../middlewares/loginRequired'

const router = new Router()

router.get('/', loginRequired, cardOffersController.index)

export default router