import express from "express"
import { creationUserController, deleteUserController, getUserController, patchUserController } from "../controllers/UserController"
import { validateOwnUser, validateToken } from "../middleware/ValidadeToken"

const userRouter = express.Router()

userRouter.post('', creationUserController)
userRouter.get('/:userId', validateToken, validateOwnUser, getUserController)
userRouter.delete('/:userId', validateToken, validateOwnUser, deleteUserController)
userRouter.patch('/:userId', validateToken, validateOwnUser, patchUserController)

export default userRouter