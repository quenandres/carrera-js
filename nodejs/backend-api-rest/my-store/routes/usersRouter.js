const express = require('express');
const router = express.Router();

const userService = require('./../services/user.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createUserSchema, updateUserSchema, getUserSchema } = require('../schemas/user.schema.js');

const service = new userService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
});


router.get('/:id',
validatorHandler(getUserSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
});


router.post('',
validatorHandler(createUserSchema, 'body'),
validatorHandler(updateUserSchema, 'params'),
async (req, res) => {
  const body = req.body;
  const newUser = await service.create(body);
  res.status(201).json(newUser);
});


router.patch('/:id',
validatorHandler(updateUserSchema, 'params'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body   = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
