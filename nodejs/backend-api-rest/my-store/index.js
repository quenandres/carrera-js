const express   = require('express');
const app       = express();
const port      = process.env.PORT || 3000;
const routerApi = require('./routes');
const cors      = require('cors');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

app.use(express.json());

const whitelist = ['http://localhost:5500', 'http://localhost:3000', 'http://127.0.0.1:5500','http://127.0.0.1:5500/nodejs/backend-api-rest/index.html'];
const optionsCors = {
  origin: (origin, callback) => {
    if( whitelist.includes(origin) || !origin ) { // !origin para especifica el origen asi mismo
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

routerApi(app);
app.use(cors(optionsCors));


// Los middleware se ponen despues de las rutas
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('My port ' + port);
});
