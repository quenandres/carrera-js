# NODEJS

### Routing con Express.js 4/25

### ¿Qué es una RESTful API? 5/25
Representaciona State Transfer
 - Get: Obtener
 - Put: Modificar/Actualizar
 - Patch: Modificar/Actualizar (Actualizacion de campos de manera mas especifica)
 - Post: Crear
 - Delete: Eliminar


### GET: recibir parámetros 6/25
```
// El :id es el nombre del parametro que tendra, por lo que con desestructuración se obtiene con el mismo nombre
app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'categorie 2',
    price: 2000
  });
});
```

### GET: parámetros query 7/25

Los endpoints especificos deben ir antes de los endpoint dinamicos.
