import * as z from 'zod'

const emailSchema = z.string().trim().email().max(100)
const passwordSchema = z.string()
  .min(10, { message: 'La contraseña debe tener al menos 10 caracteres' })
  .refine((password) => Buffer.byteLength(password, 'utf8') <= 72, {
    message: 'La contraseña no puede superar los 72 bytes'
  })

export const registerSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
  fullName: z.string().trim().max(100).optional()
})

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema
})
