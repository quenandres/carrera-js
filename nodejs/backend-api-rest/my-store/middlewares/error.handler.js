function logErrors(err, req, res, next) {
  console.error(err);
  // Cuando enviamos el error en el next estamos indicando que es un middleware de error
  next(err);
}

function errorHandler(err, req, res, next) {
  if(err) {
    res.status(500).json({
      message: err.message,
      stack: err.stack
    })
  } else {
    next();
  }
}

function boomErrorHandler(err, req, res, next) {
  if( err.isBoom ) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next();
  }
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler
}
