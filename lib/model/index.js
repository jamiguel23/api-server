'use strict';

require('dotenv').config;
const { Sequelize, DataTypes } = require('sequelize');
const POSTGRES_URI = process.env.POSTGRES_URI || 'sqlite:memory';
const Collection = require('./Collection.js');




// connection string: postgresql://localhost:5432/food
let db = new Sequelize(POSTGRES_URI);
const foodSchema = require('./food.schema.js');
const pokemonSchema = require('./pokemon.schema.js');

const FoodModel = foodSchema(db, DataTypes);
const PokemonModel = pokemonSchema(db, DataTypes);

// create association between data tables
PokemonModel.hasMany(FoodModel, {foreignKey: 'pokemonId', sourceKey: 'id'});
FoodModel.belongsTo(PokemonModel, {foreignKey: 'pokemonId', targetKey: 'id'});


module.exports = {
  db,
  FoodModel,
  PokemonCollection: new Collection(PokemonModel),
  // PokemonModel,
};
