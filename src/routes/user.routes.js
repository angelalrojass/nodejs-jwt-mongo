import {Router} from 'express'
const router = Router()

import * as userCtrl from '../controllers/users.controller'
import{authJwt, verifySignup} from '../midllewares'
router.post('/',[
    authJwt.veryfyToken,
    authJwt.isAdmin,
    verifySignup.checkRoloesExisted
], userCtrl.createuser)

export default router;
