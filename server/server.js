const app = require('./src/app')
const {sequelize} = require('./src/models')

require('dotenv').config()
const PORT = process.env.PORT

sequelize.authenticate().then(() => {
  console.log("Banco conectado com sucesso")
  return sequelize.sync({alter:true})
})
  .then( () => {
    console.log("Modelos sincronizados")
    app.listen( PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`)
    })
  })
  .catch( (error) => {
    console.error("Erro ao conectar ou sincronizar com o banco de dados: ", error)
  })
