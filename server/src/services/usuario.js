const { models } = require("../models/index")
const bcrypt = require("bcrypt")

const createUser = async ({nome, sobrenome, email, senha}) => {
  console.log({nome, sobrenome, email, senha})
  const userEmailExist = await models.User.findOne({where:{email}})

  if (userEmailExist) throw new Error('Já existe usuário com este e-mail')
    
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(senha, salt)

  const user = await models.User.create({nome, sobrenome, email, senha: hashedPassword})

  return user
}


module.exports = { createUser }