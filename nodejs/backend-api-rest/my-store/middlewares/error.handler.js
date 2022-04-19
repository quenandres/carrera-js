function logErrors(err, req, res, next) {
  console.error(err);
  // Cuando enviamos el error en el next estamos indicando que es un middleware de error
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

module.exports = {
  logErrors,
  errorHandler
}
