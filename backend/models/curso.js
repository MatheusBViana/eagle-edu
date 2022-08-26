const { Sequelize } = require("sequelize")
const sequelize = require('../utils/database');

const Curso = sequelize.define('Curso',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }
    
},
{
    timestamps: false,
    
      createdAt: false,
    
      updatedAt: false,
});

module.exports = Curso;
