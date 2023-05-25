import express from "express";
import clientsController from "../controllers/ClientsController.js";
import SessionsController from "../controllers/SessionsController.js";
import authentication from '../middleware/middleware.js'

const router = express.Router()
//CRUD
router.post('/profile', await clientsController.create)
router.get('/profile', authentication, await clientsController.show)
router.put('/profile', authentication, await clientsController.update)
router.delete('/profile', authentication, await clientsController.delete)


// utils
router.get('/profiles', await clientsController.showProfiles)


//login
router.post('/login', await SessionsController.login)

export default router;