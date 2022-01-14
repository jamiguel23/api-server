'use strict';

const express = require('express');
const router = express.Router();

router.get('/', getMain);

function getMain(req, res) {

  res.status(200).send('Main page hit!');
}

module.exports = router;
