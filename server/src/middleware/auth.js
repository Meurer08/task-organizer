const { models } = require("../models")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require('dotenv').config()

const secret = process.env.SECRET

const login = async ({email, senha}) => {
  const user = await models.User.findOne({where:{email}})

  const passCompare = await bcrypt.compare(senha, user.senha)

  if (!user || !passCompare) throw new Error("Senha ou usuário incorreto.")

  const token = await jwt.sign({name: user.nome}, secret, {expiresIn: '1h'})
  console.log(token)

  return { nome: user.nome, email: user.email, token }
}

const verifyToken = (req, res, next) => {
  const tokenAuth = req.headers["authorization"]
  const token = tokenAuth && tokenAuth.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: 'Não autorizado'
    })
  }

  try {
    jwt.verify(token, secret)
    next()

  } catch (error) {
    res.status(403).json({
      message: "Token inválido"
    })
  }
}

module.exports = {
  login,
  verifyToken
}