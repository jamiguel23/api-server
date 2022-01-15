'use strict';

const supertest = require('supertest');
const { app } = require('../lib/server.js');
const { db } = require('../lib/model');
const { response } = require('express');
const request = supertest(app);

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

const foodData = {
  food: 'Hot Dog',
  protein: 'Beef',
  pokemonId: 1,
};

const foodData2 = {
  food: 'BLT',
  protein: 'Pork',
  pokemonId: 2,
};

describe('testing the food route', () => {

  it('should read form food data', async () => {

    const response = await request.get('/food');

    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });



});

xdescribe('testing creating food', () => {

  it('should respond with 200 with creating using POST', async () => {



    const response = await request.post('/food').send(foodData);
    console.log('response: --------', response);
    expect(response.status).toBe(200);
    expect(typeof response.body).toEqual({});



  });
});


describe('testing getting one food', () => {

  it('should read form food data', async () => {

    const response = await request.get('/food/1');

    expect(response.status).toEqual(200);
    // expect(response.body.id).toBeDefined();
  });

});

xdescribe('testing PUT', () => {

  it('should respond with a 200 with updating a record using PUT', async () => {
    const response = await request.put('/food/1').send(foodData);
    expect(response.status).toBe(200);
    expect(response.body.food).toEqual('Hot Dog');
  });

});

describe('testing DELETE', () => {

  it('should respond with a 200 if able to destroy using DELETE', async () => {
    const response = await request.delete('/food/1');
    expect(response.status).toBe(200);

    const getRes = await request.get('/food/1');
    expect(getRes.body).toEqual({});
  });

});
