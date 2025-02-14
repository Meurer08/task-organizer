const { createUserController, loginUserController, updateUserController } = require("../controllers/userController")
const express = require("express")
const { verifyToken } = require("../middleware/auth")

const userRoute = express.Router()

userRoute.post('/user', createUserController)
userRoute.post('/login', loginUserController)
userRoute.post('/updateUser', verifyToken, updateUserController)

module.exports = { userRoute }