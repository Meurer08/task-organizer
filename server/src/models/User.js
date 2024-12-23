const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

  const User = sequelize.define(
    'User',
    {
      id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome:{
        type: DataTypes.STRING,
        allowNull: false
      },
      sobrenome:{
        type: DataTypes.STRING,
        allowNull: false
      },
      email:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      senha:{
        type: DataTypes.STRING,
        allowNull:false
      }
    }
  )
  return User
}