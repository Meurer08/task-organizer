const { createUserController, loginUserController } = require("../controllers/userController")
const express = require("express")

const userRoute = express.Router()

userRoute.post('/user', createUserController)
userRoute.post('/login', loginUserController)

module.exports = { userRoute }