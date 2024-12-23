const { Sequelize } = require('sequelize')
require('dotenv').config()

const db = new Sequelize('task_organizer', process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT
})

try {
  db.authenticate()
  console.log('Connection has been established successfully.')
} catch (error) {
  console.error('Enable to connect to the database.')
}

module.exports = db
