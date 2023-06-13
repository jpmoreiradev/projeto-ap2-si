import express from "express";
import productsController from "../controllers/ProductsController.js";
import authentication from '../middleware/middleware.js'

const router = express.Router()

//CRUD Product
router.post('/:produtoId', await productsController.create)
router.get('/:produtoId', await productsController.getProduct)

// add carrinho
router.post('/carrinho/:produtoId', authentication, await productsController.addProductCart)

//Show cart
router.get('/carrinho/all', authentication, await productsController.showCart)
// remove carrinho

router.delete('/delete/carrinho/all', authentication, await productsController.deleteCartAll)
router.delete('/delete/carrinho/:produtoId', authentication, await productsController.deleteCartById)

// Meus pedidos

router.post('/pedidos/:produtoId', authentication, await productsController.addBuyItem)
router.get('/pedidos/all', authentication, await productsController.showMyProduct)






export default router;