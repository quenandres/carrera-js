const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { id } = req.params;
  res.json([
    {
      id,
      name: 'categorie 1',
    },
    {
      id,
      name: 'categorie 2',
    }
  ]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'categorie 2',
    price: 2000
  });
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

module.exports = router;
