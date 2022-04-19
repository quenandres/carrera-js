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

### Introducción a servicios: crea tu primer servicio 13/25
The clean architecture
- Controladores
  - routes
  - middlewares
- Services
- Libs
  - Models


### Crear, editar y eliminar 14/25
! importante para actualizacion con patch
```
update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    if( index === -1 ) {
        throw new Error('product not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
}
```

### Async await y captura de errores 15/25
En las rutas se pueden definir funciones asincronas, que esperen por promesas que resulven las funciones en los servicios.

Se pueden capturar errores con try/catch
Router:
```
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const body   = req.body;
    const product = await service.update(id, body);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});
```


Service:
```
async update(id, changes) {
  const index = this.products.findIndex(item => item.id === id);
  if( index === -1 ) {
      throw new Error('product not found');
  }
  const product = this.products[index];
  this.products[index] = {
    ...product,
    ...changes
  };
  return this.products[index];
}
```


¿Qué son los Middlewares? 16/25
Un middleware es un bloque de código que se ejecuta entre la petición que hace el usuario (request) hasta que la petición llega al servidor. Pueden correr de forma secuencial. Donde un Middleware empieza a ejecutar algo y si todo sale bien ejecuta el siguiente.
 - Middleware a nivel de aplicación
 - Middleware a nivel de direccionamiento (routers)
 - Middleware para manejo de errores
 - Middlewares incorporados
 - Middleware de terceros

 Casos de uso
 - Funcionar como pipes, es decir, conectar unos con otros al igual que una tubería donde la salida de uno, es la entrada de información del otro.
 - Validar datos.
 - Capturar errores.
 - Validar permisos.
 - Controlar accesos.

Ej:
```
function (req, res, next) {
  console.log('LOGGED');
  next();
};
```


### Middleware para HttpErrors 17/25
Se pueden unir a sistemas de tracking.
Los middleware se deben definir despues de definidas las rutas.
Un detalle importante es el uso de middlewares con codigos de status http.

### Manejo de errores con Boom 18/25
Libreria boom
```
@hapi/boom
```

Uso de la libreria boom con retorno de errores con codigo http, asignados por la libreria según la función del error que se asigna.