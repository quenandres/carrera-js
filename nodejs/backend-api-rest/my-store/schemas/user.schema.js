const Joi = require('joi');

const id = Joi.number();
const email = Joi.string().email();
const password = Joi.string().min(8);
//const role = Joi.string();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  password: password
});

const getUserSchema = Joi.object({
  id: id.required()
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
