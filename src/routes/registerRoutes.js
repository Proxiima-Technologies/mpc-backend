import { Router } from 'express'
import registerController from '../controllers/RegisterController'

const router = new Router()

router.post('/', registerController.store)

export default router
