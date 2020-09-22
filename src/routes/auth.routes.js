import {Router} from 'express'

const router = Router()

import * as authCtrl from '../controllers/auth.controller'
import {verifySignup} from '../midllewares'

router.post('/signup', [verifySignup.checkDuplicateUserorEmail, verifySignup.checkRoloesExisted], authCtrl.signUp)

router.post('/signin', authCtrl.signin)

export default router;