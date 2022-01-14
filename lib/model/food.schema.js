'use strict';



const Food = (sequelize, DataTypes) => sequelize.define('Food', {
  food: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  protein: {
    type: DataTypes.STRING,
  },
  pokemonId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Food;
