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

Completa las variables de PostgreSQL en `.env`. La aplicación usa tablas `categories`, `products` y `users`.

```bash
pnpm dev
```

La API usa el puerto `3002` por defecto.

## Endpoints

### Autenticación (`/auth`)

- `POST /auth/register` — registra una cuenta local. La contraseña se almacena con hash bcrypt.

### Categorías (`/categories`)

- `GET /categories`
- `GET /categories/:id`
- `POST /categories`
- `PUT /categories/:id`
- `PATCH /categories/:id`
- `DELETE /categories/:id`

### Productos (`/products`)

- `GET /products`
- `GET /products/:id`
- `POST /products`
- `PUT /products/:id`
- `PATCH /products/:id`
- `DELETE /products/:id`

No publiques tu archivo `.env`; contiene credenciales locales. Usa `.env.example` como plantilla.
