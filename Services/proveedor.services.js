const boom = require('@hapi/boom');


class ProductsService {
  constructor() {
    this.proveedores = [];
    this.generate();
  }

  generate() {
    this.proveedores.push(
      {
        id: '1',
        Nit: 1234556,
        Nombre: 'Andres',
        Apellido: 'Sanchez',
        Cedula: 14636012,
        Tipo_de_Proveedor: 'Nacional',
        Tipo_de_Persona: 'Juridica',
        Banco:'Davivienda',
        NumeroCuenta: '567543',
        TipoCuenta: 'Ahorros',
        Socios: 'No Registra',
        Estado:'Pendiente de Validación'

        },
        {
          id: '2',
          Nit: 89879678,
          Nombre: 'Paola',
          Apellido: 'Rodriguez',
          Cedula: 14636012,
          Tipo_de_Proveedor: 'Internacional',
          Tipo_de_Persona: 'Natural',
          Banco:'Helm',
          NumeroCuenta: '7457858',
          TipoCuenta: 'Corriente',
          Socios: 'No Registra',
          Estado:'Pendiente de Validación'
        }

    )
  }

  async create(data) {
    const newProveedor = {

      ...data
    }
    this.proveedores.push(newProveedor);
    return newProveedor

  }

  async find() {
    return this.proveedores;
  }

  async findOne(id) {

    const proveedor = this.proveedores.find(item => item.id === id);
    if(!proveedor) {
      throw boom.notFound('Proveedor no encontrado');
    }
    return proveedor;
  }

  async update(id, changes) {
    const index = this.proveedores.findIndex(item => item.id === id);
    if(index === -1) {
      throw boom.notFound('Proveedor no encontrado');
    }
    const proveedor = this.proveedores[index];
    this.proveedores[index] = {
      ...proveedor,
      ...changes,
    }
    return this.proveedores[index];

  }

  async delete(id) {
    const index = this.proveedores.findIndex(item => item.id === id);

    if(index === -1) {
      throw boom.notFound('Proveedor no encontrado');
    }

    this.proveedores.splice(index, 1);
    return { id };
  }

  async validate(id, estado) {
    const index = this.proveedores.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Proveedor no encontrado');
    }

    if (estado !== 'Aprobado' && estado !== 'Rechazado') {
      throw new Error('Estado no válido. Debe ser "Aprobado" o "Rechazado".');
    }

    this.proveedores[index].Estado = estado;
    return this.proveedores[index];
  }

}

module.exports = ProductsService;
