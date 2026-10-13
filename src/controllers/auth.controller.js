import { registerSchema } from '../schemas/user.schema.js'
import { hashPassword } from '../auth/password.js'
import { UserModel } from '../models/user.model.js'

export class AuthController {
  static async register (req, res) {
    const result = registerSchema.safeParse(req.body)
    if (!result.success) {
      return res.status(400).json({ error: result.error.issues })
    }

    const { email, password, fullName } = result.data

    try {
      const existingUser = await UserModel.findLocalByEmail(email)
      if (existingUser) {
        return res.status(409).json({ error: 'El correo electrónico ya está registrado' })
      }

      const passwordHash = await hashPassword(password)
      const newUser = await UserModel.createLocal({ email, passwordHash, fullName })
      return res.status(201).json(newUser)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'No se pudo registrar el usuario' })
    }
  }
}
