'use strict';

function serverError(err,req, res, next){
  res.status(500).send('internal server error');
  console.error(req.method, 'internal server error', req.path );
  console.log(err.message);
}


module.exports = serverError;
