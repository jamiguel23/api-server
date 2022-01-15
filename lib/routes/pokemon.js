'use strict';

const express = require('express');
const router = express.Router();
const { PokemonCollection } = require('../model');


//Routes and Handlers
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


module.exports = router;
