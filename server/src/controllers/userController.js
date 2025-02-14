const { login } = require("../middleware/auth")
const { createUser } = require("../services/usuario")

const createUserController = async (req, res) => {
  try {
    const {nome, sobrenome, email, senha} = req.body
    //validar email e senha
    const user = await createUser({nome, sobrenome, email, senha})

    return res.status(201).json({user})
  } catch (error) {
    if (error.message === 'Já existe usuário com este e-mail') {
      return res.status(409).json({error: error.message})  
    }
    return res.status(400).json({error})
  }
}

const updateUserController = async (req, res) => {
  try {
    //TODO
      console.log(req.user)
    //Para Teste
    res.status(200).json("Teste")

  } catch (error) {
    return res.status(400).json({error})
  }
}

const updatePasswordController = async (req, res) => {
  try {
    //TODO
  } catch (error) {
    return res.status(400).json({error})
  }
}

const loginUserController = async (req, res) => {
  try {
    const {email, senha} = req.body

    const userLogin = await login({email, senha})

    return res.status(201).json({user:userLogin})
  } catch (error) {
    if (error.message === "Senha ou usuário incorreto.") {
      return res.status(401).json({error: error.message})  
    }
    return res.status(400).json({error: error.message})
  }
}

module.exports = { 
  createUserController, 
  loginUserController,
  updateUserController 
}