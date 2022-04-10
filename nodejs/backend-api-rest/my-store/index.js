const express = require('express');
const app     = express();
const port    = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Producto 1',
      price: 1000
    },
    {
      name: 'Producto 2',
      price: 2000
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 2',
    price: 2000
  });
});

app.get('/categories/', (req, res) => {
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

app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'categorie 2',
    price: 2000
  });
});


app.get('/categories/:cateogryId/products/:productId', (req, res) => {
  const { cateogryId, productId } = req.params;
  res.json({
    cateogryId,
    productId,
    name: 'Producto 2',
    price: 2000
  });
});


app.listen(port, () => {
  console.log('My port ' + port);
});
