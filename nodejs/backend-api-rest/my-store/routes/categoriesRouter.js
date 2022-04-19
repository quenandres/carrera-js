const express = require('express');
const router = express.Router();
const CategoriesService = require('../services/categories.service');
const service = new CategoriesService();


router.post('/', async (req, res) => {
  const body = req.body;
  const category = await service.create(body);
  return res.status(201).json(category);
});

router.get('/', async (req, res) => {
  const categories = await service.find();
  return res.status(200).json(categories);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const category = await service.findOne(id);
  return res.status(200).json(category);
});


router.get('/:cateogryId/products/:productId', async (req, res) => {
  const { cateogryId, productId } = req.params;
  res.json({
    cateogryId,
    productId,
    name: 'Producto 2',
    price: 2000
  });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const category = await service.delete(id);
  return res.json(category);
});

router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  const body   = req.body;
  const category = await service.update(id, body);
  return res.status(200).json(category);
});

module.exports = router;
