const express = require('express');
const proveedorRouter = require('./proveedor.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/proveedor', proveedorRouter);


}

module.exports = routerApi;
