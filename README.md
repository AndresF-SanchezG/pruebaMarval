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


## Screenshots (CRUD)

**Create**

![image](https://github.com/user-attachments/assets/b3d6a2c8-2c06-4ef4-9099-225f1a18c4f7)

**Read**

![image](https://github.com/user-attachments/assets/50b020ca-7775-47d9-a561-43d5a7f1a224)

**Update**

![image](https://github.com/user-attachments/assets/fa998c17-07f9-44b2-a010-a0b41456f277)

**Delete**

![image](https://github.com/user-attachments/assets/6285cc73-bdc5-4851-bfd2-71449aa73a3e)

## Screenshots (Validación)

Para realizar la validacion solicitada se crearon dos tablas(Usuarios y Proveedores)

**Tabla Usuarios**

![image](https://github.com/user-attachments/assets/77c9c512-749c-446d-85bb-3c7cd1467867)

**Tabla Proveedores**

![image](https://github.com/user-attachments/assets/19ce1185-d30d-47b7-9bae-02047da871b6)
![image](https://github.com/user-attachments/assets/28f0d281-7ae5-44b4-8105-5eef6ef61c8a)

La tabla usuarios contiene los perfiles de las personas administrativas que podrian tener permiso para cambiar el estado en la tabla proveedores. Los Usuarios con perfil BASICO no tienen permiso para realizar cambios, en cambio, los usuarios con perfil ADMINISTRADOR si tienen permiso para realizar cambios en el estado.

**Primer Caso¨** Usuario con perfil BASICO que intenta realizar cambio en la tabla proveedores.

![image](https://github.com/user-attachments/assets/8a776ef2-56b6-4781-8264-565b00f20835)

**userId:** Corresponde al id de los usuarios, en este caso el usuario con id = 2 corresponde al usuario Gustavo Sanchez que tiene Perfil BASICO y no puede realizar cambios.

**proveedorId:** Corresponde al id de los proveedores, en este caso, se intenta modificar el proveedor con id=12.

**nuevoEstado:** Corresponde al nuevo estado que deseo asignar.

**Segundo Caso¨** Usuario con perfil ADMINISTRADOR que intenta realizar cambio en la tabla proveedores.

En este caso intentaremos modificar el proveedor con id=13 que tiene un estado por default PENDIENTE.

![image](https://github.com/user-attachments/assets/47da6b51-916f-4c8f-a9dc-0ee40a7ab1b9)

Una vez ingresamos los campos requeridos, se realiza la actualizacion del estado.

![image](https://github.com/user-attachments/assets/7bd284af-c82a-4685-aff3-003aeb65396f)

## Screenshots (Consumo de Api)

El ejercicio de consumo de api con JWT requiere realizar una solicitud al siguiente enlace(https://analyticsdev.app.marval.com.co/api/jwtjde/loginjwt) para obtener un token de autentificacion, sin embargo, el servidor no realiza ninguna respuesta.

![image](https://github.com/user-attachments/assets/4774c213-03f7-447d-be74-02f146e82df4)

Sin embargo, anteriormente a forma de estudio, habia realizado un ejercicio similar utilizando la **API FAKE** de la escuela en linea **PLATZI**. Ver [Ejercicio FAKE API - Platzi](https://fakeapi.platzi.com/en/rest/auth-jwt/)

![image](https://github.com/user-attachments/assets/b0915381-614d-478d-9c34-4de9b10521a8)

Obtengo la siguiente respuesta(Token)

![image](https://github.com/user-attachments/assets/c0707252-949f-45cd-a3f6-95b16594c98a)

Con el token la documentacion pide realizar:

![image](https://github.com/user-attachments/assets/ff162258-48cb-43bf-9dda-394bce9183d0)

Ingresamos el token en los headers realizamos la solicitud y obtenemos la respuesta:

![image](https://github.com/user-attachments/assets/c3d7b3d8-43d2-4422-82c8-29b3ae888dbd)









## Aspectos de mejora

- No se considera la implementacion de base de datos de Usuarios con funciones CRUD para realizar la validacion solicitada. Se crea una tabla postgres Usuarios en la que ingresamos los datos de manera manual para tener usuarios para validar dependiendo de su perfil, si tiene permiso de modificar la tabla proveedores.

- No se realiza funciones de encripcion para el campo **password** en la tabla Usuarios.

## Tecnologías utilizadas

- Node.js
- Express.js
- Render(Render ofrece bases de datos PostgreSQL y MySQL, entre otras listas para usar)
- Prisma(Prisma es una plataforma que simplifica el trabajo con bases de datos relacionales en aplicaciones Node.js y TypeScript,           mediante un ORM que ofrece una API intuitiva para realizar operaciones como consultas, creación, actualización y eliminación de datos     en bases como PostgreSQL, MySQL, SQLite, SQL Server y MongoDB.)
- Insomnia (Herramienta de software que se utiliza para realizar pruebas y hacer solicitudes a APIs)


## Author

- LinkedIN - [Andres Sanchez](https://www.linkedin.com/in/andressanchez-dev/)

