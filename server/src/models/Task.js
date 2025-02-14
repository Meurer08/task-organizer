const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {

  const Task = sequelize.define(
    'Task',
    {
      id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      data:{
        type: DataTypes.DATE,
        allowNull: false
      },
      titulo:{
        type: DataTypes.STRING,
        allowNull: false
      },
      resumo_tarefa:{
        type: DataTypes.STRING,
        allowNull:false
      },
      status:{
        type: DataTypes.STRING,
        allowNull:false
      }
    }
  )

  return Task
}