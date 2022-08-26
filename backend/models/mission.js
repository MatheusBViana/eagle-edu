const { Sequelize } = require("sequelize")
const sequelize = require('../utils/database');

const Mission = sequelize.define('Mission',{
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answered: {
        type: Sequelize.BOOLEAN
    }
},
{
    timestamps: false,
    
      createdAt: false,
    
      updatedAt: false,
    }
    );

module.exports = Mission;