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

### Separación de responsabilidades con express.Router 8/25
Cada pieza de codigo deberia tener solo una responsabilidad
- Class
- Archive
- Methods

Un metodo que se llama sumar debe unicamente sumar

### POST: método para crear 10/25
#### Versionamiento de API'S
```
function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}
```

### PUT, PATCH y DELETE 11/25

### Códigos de estado o HTTP response status codes 12/25
Es un estandar que nos permite saber que paso con la petición
 - Respuestas informativas (100–199),
 - Respuestas satisfactorias (200–299),
 - Redirecciones (300–399),
 - Errores de los clientes (400–499),
 - Errores de los servidores (500–599).