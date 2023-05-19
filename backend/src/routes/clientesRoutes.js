import express from "express";
import clientesController from "../controllers/ClientesController.js";

const router = express.Router()

router.get('/', await clientesController.create)


export default router;