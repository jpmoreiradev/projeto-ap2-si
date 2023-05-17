import express from "express";
import productsController from "../controllers/ProductsController.js";

const router = express.Router()

router.get('/', productsController.create)


export default router;