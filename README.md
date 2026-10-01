# Pixel Backend

API REST de categorías y productos construida con Node.js, Express y PostgreSQL.

## Requisitos

- Node.js
- pnpm
- PostgreSQL

## Instalación

```bash
pnpm install
cp .env.example .env
```

Completa las variables de PostgreSQL en `.env`. La aplicación usa tablas `categories` y `products`.

```bash
pnpm dev
```

La API queda disponible en `http://localhost:1234`.

## Endpoints

### Categorías (`/categories`)

- `GET /categories` — lista categorías
- `GET /categories/:id` — obtiene una categoría
- `POST /categories` — crea una categoría
- `PUT /categories/:id` — actualiza una categoría

### Productos (`/products`)

- `GET /products` — lista productos con el nombre de su categoría
- `GET /products/:id` — obtiene un producto
- `POST /products` — crea un producto
- `PUT /products/:id` — reemplaza los datos de un producto
- `PATCH /products/:id` — actualiza solo los campos enviados

No publiques tu archivo `.env`; contiene credenciales locales. Usa `.env.example` como plantilla.