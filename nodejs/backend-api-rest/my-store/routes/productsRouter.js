const express = require('express');
const router = express.Router();

const ProductsService = require('../services/product.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { createProductSchema,updateProductSchema,getProductSchema } = require('../schemas/product.schema.js');
const service = new ProductsService();

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/', async (req, res) => {
  const products = await service.find();
  res.json(products);
});


router.get('/:id',
validatorHandler(getProductSchema, 'params'),
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
validatorHandler(createProductSchema, 'body'),
//validatorHandler(updateProductSchema, 'params'),
async (req, res) => {
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});


validatorHandler(updateProductSchema, 'params'),
router.patch('/:id',
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


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const product = await service.delete(id);
  res.json(product);
});



module.exports = router;
