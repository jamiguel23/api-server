'use strict';

const express = require('express');
// const {PokemonModel} = require('../model');
const router = express.Router();
const { PokemonCollection } = require('../model');


//Routes
router.get('/pokemon', async (req, res) => {

  try {
    let pokemon = await PokemonCollection.read();
    res.status(200).send(pokemon);


  } catch (e) {
    console.log(e.message);
  }

});

router.get('/pokemon/:id', async (req, res) => {

  try {
    let pokemon = await PokemonCollection.read(req.params.id);
    res.status(200).send(pokemon);
    console.log('this is the id', req.params.id);

  } catch (e) {
    console.log(e.message);
  }

});

router.post('/pokemon', async (req, res) => {

  try {
    let pokemon = await PokemonCollection.create(req.body);
    res.status(200).send(pokemon);

  } catch (e) {
    console.log(e.message);
  }

});


router.put('/pokemon/:id', async (req, res) => {

  try {
    const pokemonData = req.body;
    let pokemon = await PokemonCollection.read(req.params.id);
    let updatedPokemon = await pokemon.update(pokemonData);
    res.status(200).send(updatedPokemon);
    console.log('this is the id', req.params.id);

  } catch (e) {
    console.log(e.message);
  }

});

router.delete('/pokemon/:id', async (req, res) => {
  try {
    console.log('Help i died');
    let deletedPokemon = await PokemonCollection.destroy(req.params.id);
    res.sendStatus(200).send(deletedPokemon);
  } catch (e) {
    console.log(e.message);

  }
});


//Handlers

// async function getPokemon(req, res){
//   let { id } = req.params;
//   let pokemon;
//   if (id) {
//     pokemon = await PokemonModel.findOne({where: {id}});
//     res.status(200).json(pokemon);
//   } else {
//     pokemon = await PokemonModel.findAll();
//     res.status(200).json(pokemon);
//   }
// }


// async function createPokemon(req, res) {

//   let pokemonData= req.body;
//   let pokemon = await PokemonModel.create(pokemonData);
//   res.status(200).json(pokemon);

// }

// async function updatePokemon(req, res) {
//   let { id } = req.params;
//   const pokemonData = req.body;
//   let pokemon = await PokemonModel.findOne({where: {id}});
//   let updatedPokemon = await pokemon.update(pokemonData);
//   res.status(200).json(updatedPokemon);
// }

// async function deletePokemon(req, res) {
//   let { id } = req.params;
//   let deletedPokemon = await PokemonModel.destroy({where: {id}});
//   res.status(200).json(deletedPokemon);
// }

module.exports = router;
