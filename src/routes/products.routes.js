import {Router} from 'express';
const router = Router()

import * as productsCtrl from '../controllers/products.controller'
import { authJwt} from "../midllewares";



router.post('/',[authJwt.veryfyToken, authJwt.isAdmin], productsCtrl.createProduct)
router.get('/',productsCtrl.getProducts)
router.get('/:productId',productsCtrl.getProductById)
router.put('/:productId', [authJwt.veryfyToken, authJwt.isAdmin] , productsCtrl.updateProductById)
router.delete('/:productId',[authJwt.veryfyToken, authJwt.isAdmin], productsCtrl.deleteProductById)

export default router;