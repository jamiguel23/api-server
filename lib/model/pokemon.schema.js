'use strict';


const Pokemon = (sequelize, DataTypes) => sequelize.define('Pokemon', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
  },
  eatsFood: {
    type: DataTypes.STRING,
  },
});

module.exports=Pokemon;
