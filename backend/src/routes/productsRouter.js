import express from "express";
import productsController from "../controllers/ProductsController.js";
import authentication from '../middleware/middleware.js'

const router = express.Router()

router.post('/:produtoId', await productsController.create)

// add carrinho
router.post('/carrinho/:produtoId', authentication, await productsController.addProductCart)



export default router;