import express from "express";
import clientsController from "../controllers/ClientsController.js";

const router = express.Router()

router.get('/profile/:clienteId', await clientsController.show)
router.post('/profile', await clientsController.create)
// router.put('/profile', await clientsController.update)

export default router;