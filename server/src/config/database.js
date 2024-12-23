const { Sequelize } = require('sequelize')

const db = new Sequelize('task_organizer', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3307
})

try {
  db.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Enable to connect to the database.')
}

module.exports = db
