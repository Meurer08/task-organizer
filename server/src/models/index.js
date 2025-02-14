const sequelize = require("../config/database");
const fs = require("fs")
const path = require("path")
const models = {}

fs.readdirSync(__dirname)
  .filter((file) => file !== 'index.js' && file.endsWith('.js'))
  .forEach((file) => {
    const defineModel = require(path.join(__dirname, file)); 
    const model = defineModel(sequelize); 
    models[model.name] = model; 
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

const User = require("./User.js") (sequelize)
const Task = require('./Task')(sequelize)

User.hasMany(Task)
Task.belongsTo(User)

module.exports = {sequelize, models}
