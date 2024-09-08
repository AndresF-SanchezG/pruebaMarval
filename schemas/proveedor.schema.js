const Joi = require('joi');

const id = Joi.number();
const Nit = Joi.number();
const Nombre = Joi.string().min(3).max(40);
const Apellido = Joi.string().min(3).max(40);
const Cedula = Joi.number();
const Tipo_de_Proveedor = Joi.string().min(3).max(20);
const Tipo_de_Persona = Joi.string().min(3).max(20);
const Banco = Joi.string().min(3).max(20);
const NumeroCuenta = Joi.number();
const TipoCuenta = Joi.string().min(3).max(20);
const Socios = Joi.string().min(2).max(20);
const Estado = Joi.string().min(2).max(40);

const createProveedorSchema = Joi.object({
  id: id.required(),
  Nit:Nit.required(),
  Nombre:Nombre.required(),
  Apellido:Apellido.required(),
  Cedula:Cedula.required(),
  Tipo_de_Proveedor: Tipo_de_Proveedor.required(),
  Tipo_de_Persona:Tipo_de_Persona.required(),
  Banco:Banco.required(),
  NumeroCuenta:NumeroCuenta.required(),
  TipoCuenta:TipoCuenta.required(),
  Socios:Socios.required(),
  Estado:Estado.required(),

})

const updateProveedorSchema = Joi.object({
  Nit: Nit,
  Nombre:Nombre,
  Apellido:Apellido,
  Cedula:Cedula,
  Tipo_de_Proveedor: Tipo_de_Proveedor,
  Tipo_de_Persona:Tipo_de_Persona,
  Banco:Banco,
  NumeroCuenta:NumeroCuenta,
  TipoCuenta:TipoCuenta,
  Socios:Socios,
  Estado:Estado,

})

const getProductSchema = Joi.object({
  id: id.required(),
})


module.exports = { createProveedorSchema, updateProveedorSchema, getProductSchema }
