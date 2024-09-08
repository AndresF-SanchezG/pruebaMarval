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

**MIDDLEWARES:**

**error.handler.js:** Middleware para manejar errores de forma centralizada en la aplicación.

**validator.handler.js:** Middleware para validar datos de entrada, posiblemente utilizando los esquemas definidos en schemas

## Author

- Website - [Gustavo Sanchez](https://gusanchefullstack.dev/)
- Frontend Mentor - [@gusanchefullstack](https://www.frontendmentor.io/profile/gusanchefullstack)
- Twitter - [@gusanchedev](https://twitter.com/gusanchedev)
