const { UserSchema, User } = require('./user.model');

function setupModels(sequelize) {
  User.init( UserSchema, User.config(sequelize) ); // Se le dice que el modelo debe seguir este esquema
}

module.exports = setupModels;
