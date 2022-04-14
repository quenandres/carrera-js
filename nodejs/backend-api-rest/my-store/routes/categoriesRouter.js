const express = require('express');
const router = express.Router();
const CategoriesService = require('../services/categories.service');
const service = new CategoriesService();


router.get('/', (req, res) => {
  const categories = service.find();
  res.status(200).json(categories);
});

router.post('/', (req, res) => {
  const body = req.body;
  const category = service.create(body);
  return res.status(201).json(category);
});

router.get('/', (req, res) => {
  const categories = service.find();
  return res.status(200).json(categories);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.findOne(id);
  return res.status(200).json(category);
});


router.get('/:cateogryId/products/:productId', (req, res) => {
  const { cateogryId, productId } = req.params;
  res.json({
    cateogryId,
    productId,
    name: 'Producto 2',
    price: 2000
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const category = service.delete(id);
  return res.json(category);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body   = req.body;
  const category = service.update(id, body);
  return res.status(200).json(category);
});

module.exports = router;
