import express from 'express'
import { corsMiddleware } from './middlewares/cors.js'
import { categoryRouter } from './routes/category.routes.js'
import { productRouter } from './routes/product.routes.js'
import authRouter from './routes/auth.routes.js'

const app = express()

app.disable('x-powered-by')
app.use(corsMiddleware())
app.use(express.json())

app.use('/auth', authRouter)
app.use('/categories', categoryRouter)
app.use('/products', productRouter)

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
})
