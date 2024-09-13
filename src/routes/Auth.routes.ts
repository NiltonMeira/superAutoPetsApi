import express from "express"
import { authController } from "../controllers/AuthController"

const authRouter = express.Router()

authRouter.post('/auth', authController)

export default authRouter