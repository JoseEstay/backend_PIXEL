# Pixel_backend

API REST en desarrollo para administrar categorías y productos. Está construida con Node.js, Express y PostgreSQL, con validación de datos mediante Zod.

## Estado del proyecto

Las operaciones CRUD de productos y categorías están implementadas. La autenticación está en desarrollo: el registro incorpora validación y hash de contraseña con bcrypt, pero el inicio de sesión, cierre de sesión y la protección de rutas todavía no están listos para uso real. No uses esta autenticación en producción.

## Tecnologías

- Node.js y Express 5
- PostgreSQL y `pg`
- Zod para validar solicitudes
- bcrypt para el hash de contraseñas en el registro

## Requisitos

- Node.js
- pnpm
- PostgreSQL

## Configuración local

1. Instala las dependencias:

   ```bash
   pnpm install
   ```

2. Crea un archivo local `.env` en la raíz del proyecto con la configuración de tu PostgreSQL:

   ```env
   PORT=3002
   DB_USER=tu_usuario_local
   DB_PASSWORD=tu_contraseña_local
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=tu_base_de_datos
   ```

   Usa tus propios valores. El archivo `.env` está excluido de Git; no publiques contraseñas ni credenciales.

3. Prepara en PostgreSQL las tablas que usan los modelos del proyecto. Este repositorio no incluye migraciones de base de datos.

4. Inicia el servidor en modo desarrollo:

   ```bash
   pnpm dev
   ```

   El servidor usa el puerto `3002` por defecto. Puedes cambiarlo con `PORT`.

## Endpoints

Las solicitudes que crean o actualizan recursos reciben JSON.

### Categorías

| Método | Ruta | Acción |
| --- | --- | --- |
| GET | `/categories` | Listar categorías |
| GET | `/categories/:id` | Obtener una categoría |
| POST | `/categories` | Crear una categoría |
| PUT | `/categories/:id` | Reemplazar los datos de una categoría |
| PATCH | `/categories/:id` | Actualizar parcialmente una categoría |
| DELETE | `/categories/:id` | Eliminar una categoría |

### Productos

| Método | Ruta | Acción |
| --- | --- | --- |
| GET | `/products` | Listar productos |
| GET | `/products/:id` | Obtener un producto |
| POST | `/products` | Crear un producto |
| PUT | `/products/:id` | Reemplazar los datos de un producto |
| PATCH | `/products/:id` | Actualizar parcialmente un producto |
| DELETE | `/products/:id` | Eliminar un producto |

### Autenticación (en desarrollo)

Las rutas actuales están bajo `/auth`: `POST /signup`, `POST /login`, `GET /logout` y `POST /protected`. Su implementación está incompleta y puede cambiar.

## Seguridad

- No subas archivos `.env`, contraseñas, tokens ni credenciales.
- Configura las credenciales localmente mediante variables de entorno.
- La autenticación todavía no debe considerarse lista para proteger una aplicación en producción.
