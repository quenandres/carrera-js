const express   = require('express');
const app       = express();
const port      = 3000;
const routerApi = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');
app.use(express.json());

routerApi(app);

// Los middleware se ponen despues de las rutas
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port ' + port);
});
