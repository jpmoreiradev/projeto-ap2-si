import express from "express";
import productsController from "../controllers/ProductsController.js";

const router = express.Router()

router.post('/:produtoId', await productsController.create)
// router.get('/:id', await productsController.show)



export default router;