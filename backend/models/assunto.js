const { Sequelize } = require("sequelize")
const sequelize = require('../utils/database');
    
const Assunto = sequelize.define('Assunto',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img:{
        type: Sequelize.STRING,
    },
    progress: {
        type: Sequelize.INTEGER
    }
},
{
timestamps: false,

  createdAt: false,

  updatedAt: false,
})

module.exports = Assunto;