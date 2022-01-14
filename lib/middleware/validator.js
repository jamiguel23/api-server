'use strict';


function validator( req, res, next) {

  let food = req.query.food;
  if (!food) {
    console.log('no food');
    next('no food');
  } else {
    next();
  }
}

module.exports = validator;
