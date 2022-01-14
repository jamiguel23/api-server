'use strict';

function notFound(req, res, next){
  res.status(404).send('Nothing found');
  console.error(req.method, 'Err no route found on path', req.path );
}


module.exports = notFound;
