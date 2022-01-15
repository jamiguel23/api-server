'use strict';

const express = require('express');
const router = express.Router();
const { FoodCollection } = require('../model');


//Routes and Handlers
router.get('/food', async (req, res) => {

  try {
    let pokemon = await FoodCollection.read();
    res.status(200).send(pokemon);


  } catch (e) {
    console.log(e.message);
  }

});

router.get('/food/:id', async (req, res) => {

  try {
    let food = await FoodCollection.read(req.params.id);
    res.status(200).send(food);
    console.log('this is the id', req.params.id);

  } catch (e) {
    console.log(e.message);
  }

});

router.post('/food', async (req, res) => {

  try {
    let food = await FoodCollection.create(req.body);
    res.status(200).send(food);

  } catch (e) {
    console.log(e.message);
  }

});


router.put('/food/:id', async (req, res) => {

  try {
    const foodData = req.body;
    let pokemon = await FoodCollection.read(req.params.id);
    let updatedFood = await pokemon.update(foodData);
    res.status(200).send(updatedFood);
    console.log('this is the id', req.params.id);

  } catch (e) {
    console.log(e.message);
  }

});

router.delete('/food/:id', async (req, res) => {
  try {
    console.log('Help i died');
    let deletedFood = await FoodCollection.destroy(req.params.id);
    res.sendStatus(200).send(deletedFood);
  } catch (e) {
    console.log(e.message);

  }
});



module.exports = router;
