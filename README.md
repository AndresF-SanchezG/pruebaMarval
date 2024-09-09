# Prueba Técnica Marval - Ingeniero Desarrollador Junior BIM

Desarrollar una aplicación que permita realizar un CRUD (Crear, Leer, Actualizar yEliminar) de proveedores, incluyendo un flujo de validación. Los proveedores tendránlos siguientes campos: NIT, nombre, apellido, cédula, tipo de proveedor, tipodepersona, beneficiarios o socios, y datos bancarios.

Adicionalmente, la aplicación debe ser capaz de autenticarse en una API externa paraobtener un token JWT, y usar ese token para consumir otra API.

## Tabla de contenido

- [Resumen de la solución presentada](#Resumen)
- [Estructura del proyecto](#Estructura)
- [Aspectos para mejorar](#Aspectos)
- [Tecnologías utilizadas](#Tecnologías)
- [ScreenShots](#ScreenShots)
 
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

**4. ESQUEMAS (schemas):**

**proveedor.schema.js:** Define la validación de los datos relacionados con los proveedores, para asegurarse de que los datos de entrada sean correctos.

**5. SERVICIOS (Services):**

**proveedor.services.js:** Contiene la lógica de negocio relacionada con los proveedores **(CRUD)**, para acceder a los datos de la base de datos a través de Prisma.

**6. ARCHIVOS DE CONFIGURACION:**

**.env:** Archivos para las variables de entorno (credenciales de base de datos, etc.).

**.editorconfig, .eslintrc.json, .gitignore:** Configuración de estilo de código y exclusiones de Git.
package.json y package-lock.json: Definen las dependencias del proyecto y los scripts necesarios para ejecutar la aplicación.

## Aspectos de mejora

- No se considera la implementacion de base de datos de Usuarios con funciones CRUD para realizar la validacion solicitada. Se crea una tabla postgres Usuarios en la que ingresamos los datos de manera manual para tener usuarios para validar dependiendo de su perfil, si tiene permiso de modificar la tabla proveedores.

- No se realiza funciones de encripcion para el campo **password** en la tabla Usuarios.

## Tecnologías utilizadas

- Node.js
- Express.js
- Render(Base de Datos Postgres)
- Prisma(ORM)
- Insomnia (herramienta de software que se utiliza para realizar pruebas y hacer solicitudes a APIs)

## Screenshots

**Tabla Usuarios**

![image](https://github.com/user-attachments/assets/77c9c512-749c-446d-85bb-3c7cd1467867)

**Tabla Proveedores**


## Author

- LinkedIN - [Andres Sanchez](https://www.linkedin.com/in/andressanchez-dev/)

