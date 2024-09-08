# Prueba Técnica Marval - Ingeniero Desarrollador Junior BIM

Desarrollar una aplicación que permita realizar un CRUD (Crear, Leer, Actualizar yEliminar) de proveedores, incluyendo un flujo de validación. Los proveedores tendránlos siguientes campos: NIT, nombre, apellido, cédula, tipo de proveedor, tipodepersona, beneficiarios o socios, y datos bancarios.

Adicionalmente, la aplicación debe ser capaz de autenticarse en una API externa paraobtener un token JWT, y usar ese token para consumir otra API.

## Table of contents

- [Resumen de la solución presentada](#Resumen)
- [Estructura del proyecto](#Estructura)
 
- [Author](#author)


## Resumen
Este ejercicio consiste una aplicación API o servicio backend construido con JavaScript/Node.js y con el uso de Prisma para la gestión de la base de datos(Postgres). La estructura del proyecto presenta una separación clara de responsabilidades mediante el uso de middlewares, rutas, servicios y esquemas para validar los datos.

## Estructura del proyecto

**1. MIDDLEWARES:**

**error.handler.js:** Middleware para manejar errores de forma centralizada en la aplicación.

**validator.handler.js:** Middleware para validar datos de entrada, posiblemente utilizando los esquemas definidos en schemas.

**2. PRISMA:**

**schema.prisma:** Define el esquema de la base de datos para la aplicación.

**migrations/:** Contiene las migraciones de la base de datos, que permiten cambiar el esquema a lo largo del tiempo.

**3. RUTAS (routes):**

**index.js:** Archivo principal que agrupa las rutas de la aplicación.

**proveedor.router.js:** Define las rutas relacionadas con el manejo de proveedores.

**ESQUEMAS (schemas):**

**proveedor.schema.js:** Define la validación de los datos relacionados con los proveedores, posiblemente para asegurarse de que los datos de entrada sean correctos.

## Author

- Website - [Gustavo Sanchez](https://gusanchefullstack.dev/)
- Frontend Mentor - [@gusanchefullstack](https://www.frontendmentor.io/profile/gusanchefullstack)
- Twitter - [@gusanchedev](https://twitter.com/gusanchedev)
