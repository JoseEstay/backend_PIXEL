import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg

export const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME
})

pool.query('SELECT NOW()', (err) => {
  if (err) {
    console.error('❌ Error conectando a PostgreSQL:', err)
  } else {
    console.log('✅ Conectado a PostgreSQL exitosamente')
  }
})
