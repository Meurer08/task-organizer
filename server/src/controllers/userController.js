const { login } = require("../middleware/auth")
const { createUser } = require("../services/usuario")

const createUserController = async (req, res) => {
  try {
    const {nome, sobrenome, email, senha} = req.body
    const user = await createUser({nome, sobrenome, email, senha})

    return res.status(201).json({user})
  } catch (error) {
    if (error.message === 'Já existe usuário com este e-mail') {
      return res.status(409).json({error: error.message})  
    }
    return res.status(500).json({error: 'Erro Interno do Servidor'})
  }
}

const loginUserController = async (req, res) => {
  try {
    const {email, senha} = req.body

    const userLogin = await login({email, senha})

    return res.status(201).json({user:userLogin})
  } catch (error) {
    if (error.message === "Senha ou usuário incorreto.") {
      return res.status(400).json({error: error.message})  
    }
    return res.status(500).json({error: 'Erro Interno do Servidor'})
  }
}

module.exports = { createUserController, loginUserController }