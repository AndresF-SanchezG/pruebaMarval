const express = require('express');

const ProductsService = require('./../Services/proveedor.services');
const ValidatorHandler = require('./../middlewares/validator.handler');
const { createProveedorSchema, updateProveedorSchema, getProductSchema }= require('./../schemas/proveedor.schema');

const router = express.Router();
const service = new ProductsService();


router.get('/', async (req, res, next)=> {

  try {

    const proveedores = await service.find();
    res.json(proveedores)

  } catch (error) {

    next(error);

  }


})

router.get('/:id',
  ValidatorHandler(getProductSchema, 'params'),
  async (req,res, next) => {
 try {
  const { id } = req.params;
  const proveedor = await service.findOne(id);
  res.json(proveedor);
 } catch (error) {
  next(error);
 }

})

router.post('/',
  ValidatorHandler(createProveedorSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newProveedor = await service.create(body)
      res.status(201).json(newProveedor)

    } catch (error) {

      next(error);

    }

})

router.patch('/:id',
  ValidatorHandler(getProductSchema, 'params'),
  ValidatorHandler(updateProveedorSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const proveedor = await service.update(id, body);
    res.json(proveedor);
  } catch (error) {
    next(error);
  }
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);

  res.json(rta);
})

router.patch('/:id/validar', async (req, res) => {
  const { userId, proveedorId, nuevoEstado } = req.body;

  console.log(nuevoEstado);
  console.log(typeof(nuevoEstado));


  try {
    const result = await service.validate(userId, proveedorId, nuevoEstado);
    res.json({ message: result });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});





module.exports = router;
