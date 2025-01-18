const express = require("express")
const { userRoute } = require("./userRoutes")

const router = express.Router()

router.use('/api', userRoute) 

module.exports = router 
