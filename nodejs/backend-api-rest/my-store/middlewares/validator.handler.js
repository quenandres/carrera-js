
const boom = require('@hapi/boom');

//Formato de middleware normal
function validatorHandler(schema, property) {
  // Uso de closures para crear middlewares de forma dinamica
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data);
    if( error ) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
