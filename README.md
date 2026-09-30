# Pixel Backend

API REST para gestionar categorías, construida con Node.js, Express y PostgreSQL.

## Requisitos

- Node.js
- pnpm
- PostgreSQL

## Instalación

```bash
pnpm install
cp .env.example .env
```

Completa las variables de PostgreSQL en `.env`. La aplicación usa una tabla `categories` con las columnas `id`, `name`, `slug` y `description`.

```bash
pnpm dev
```

La API queda disponible en `http://localhost:1234`.

## Rutas

- `GET /` — mensaje de bienvenida
- `GET /categories` — lista las categorías
- `GET /categories/:id` — obtiene una categoría
- `POST /categories` — crea una categoría
- `PUT /categories/:id` — actualiza una categoría

Ejemplo de cuerpo para crear o actualizar:

```json
{
  "name": "Accesorios",
  "slug": "accesorios",
  "description": "Categoría de accesorios"
}
```

No publiques tu archivo `.env`; contiene credenciales locales.