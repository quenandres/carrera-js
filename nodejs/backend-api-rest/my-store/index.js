const express = require('express');
const app     = express();
const port    = 3000;
const faker   = require('faker');

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

app.get('/products/filter', (req, res) => {
  res.send('Yo soy un filter');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });

  }
  res.json(products);
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


app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if( limit && offset ) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send('No hay parametros');
  }
}); //Parametro opcional


app.listen(port, () => {
  console.log('My port ' + port);
});
