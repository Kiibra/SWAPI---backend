import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as swapiCtrl from '../controllers/swapi.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, swapiCtrl.getAllStarships)
router.get('/:starshipId', checkAuth, swapiCtrl.getStarship)

export { router }