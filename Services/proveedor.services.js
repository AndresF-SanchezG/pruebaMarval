const boom = require('@hapi/boom');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


class ProductsService {
  constructor() {
    this.proveedores = [];
    this.usuarios = [];
  }

  async create(data) {
    const newProveedor = {

      ...data
    }

    const createdProveedor = await prisma.proveedores.create({
      data : {
        ...newProveedor
      }
    });
    return createdProveedor;

  }

  async find() {
    try {

      const proveedores = await prisma.proveedores.findMany();
      return proveedores;

    } catch (error) {

      throw error;

    }

  }

  async findOne(id) {
    try {

      const parsedId = parseInt(id, 10);

      const proveedor = await prisma.proveedores.findUnique({
        where: {
          id: parsedId,
        },
      });

      return proveedor;

    } catch (error) {

      throw error;
    }
  }

  async update(id, changes) {
    const parsedId = parseInt(id, 10);

    const proveedor = await prisma.proveedores.update({
      where: {
        id:parsedId,
      },
      data: {
        ...changes,
      }
    });
    return proveedor;
  }

  async delete(id) {

    try {
      const parsedId = parseInt(id, 10);
      const proveedor = await prisma.proveedores.delete({
        where: {
          id: parsedId,
        },
      });

      return { id: proveedor.id };

    } catch (error) {

      throw error;

    }

  }

  async validate(userId, proveedorId, nuevoEstado) {
    try {

      const estadoNormalizado = nuevoEstado.toUpperCase();

      const parsedUserId = parseInt(userId, 10);
      const parsedProveedorId = parseInt(proveedorId, 10);

      const estadosValidos = ["APROBADO", "RECHAZADO", "PENDIENTE"];

      if (!estadosValidos.includes(estadoNormalizado)) {
        throw new Error("Estado inválido. Asegúrate de proporcionar un valor válido.");

      }

      const usuario = await prisma.usuarios.findUnique({
        where: {
          id: parsedUserId,
        },
      });

      if (usuario.perfilUsuario === "ADMINISTRADOR") {

        const updateEstadoProveedor = await prisma.proveedores.update({
          where: {
            id: parsedProveedorId,
          },
          data: {
            Estado: estadoNormalizado,
          },
        });

        return updateEstadoProveedor;

      } else {

        return "No tienes permiso para realizar modificaciones";
      }
    } catch (error) {

      throw error;
    }
  }

}

module.exports = ProductsService;
