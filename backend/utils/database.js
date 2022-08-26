
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
 'eagle',
 'root',
 'Bttf858990!',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
