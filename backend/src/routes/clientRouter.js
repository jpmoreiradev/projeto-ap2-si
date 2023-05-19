import express from "express";
import clientsController from "../controllers/ClientsController.js";
import SessionsController from "../controllers/SessionsController.js";
import authentication from '../middleware/middleware.js'

const router = express.Router()

router.get('/profiles', authentication, await clientsController.show)
router.post('/profile', await clientsController.create)

//login
router.post('/login', await SessionsController.login)

export default router;