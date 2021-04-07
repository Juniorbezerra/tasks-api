import { Router } from 'express'
import UserController from './controllers/UserController'

const routes = Router()
const userControler = new UserController()

routes.post('/', userControler.index)

export default routes
