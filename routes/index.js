const express = require('express');
const proveedorRouter = require('./proveedor.router');
const loginRouter = require('./login.router')

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/proveedor', proveedorRouter);
  router.use('/auth', loginRouter);


}

module.exports = routerApi;
