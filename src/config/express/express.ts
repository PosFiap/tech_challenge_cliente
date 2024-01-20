import { Router } from 'express'
import { ClienteController } from '../../adapter/controller/ClienteController'
import { ClienteHTTP } from '../../adapter/http/cliente'

const router: Router = Router()


const clienteHTTP = new ClienteHTTP(
  ClienteController.create()
)

router.use('/health', (_req, res) => res.sendStatus(200))
router.use('/cliente', clienteHTTP.getRouter())

export { router }
