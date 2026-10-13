import validateCategory, { validateCategoryPatch } from '../schemas/category.schema.js'
import { CategoryModel } from '../models/category.model.js'

export class categoryController {
  static async create (req, res) {
    const result = validateCategory(req.body)
    if (!result.success) return res.status(400).json({ error: result.error.issues })
    try {
      const newCategory = await CategoryModel.create({ input: result.data })
      return res.status(201).json(newCategory)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error.message })
    }
  }

  static async getAll (_req, res) {
    try {
      return res.status(200).json(await CategoryModel.getAll())
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error.message })
    }
  }

  static async getById (req, res) {
    try {
      const category = await CategoryModel.getById(req.params.id)
      if (!category) return res.status(404).json({ error: 'Categoria no encontrada' })
      return res.status(200).json(category)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error.message })
    }
  }

  static async delete (req, res) {
    try {
      const category = await CategoryModel.getById(req.params.id)
      if (!category) return res.status(404).json({ error: 'Categoria no encontrada' })
      await CategoryModel.delete(req.params.id)
      return res.status(200).json({ message: 'Categoria eliminada correctamente' })
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error.message })
    }
  }

  static async update (req, res) {
    const result = validateCategory(req.body)
    if (!result.success) return res.status(400).json({ error: result.error.issues })
    try {
      const updated = await CategoryModel.update(req.params.id, { input: result.data })
      if (!updated) return res.status(404).json({ error: 'Categoria no encontrada' })
      return res.status(200).json(updated)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error.message })
    }
  }

  static async patch (req, res) {
    const result = validateCategoryPatch(req.body)
    if (!result.success) return res.status(400).json({ error: result.error.issues })
    try {
      const updated = await CategoryModel.updatePartial(req.params.id, { input: result.data })
      if (!updated) return res.status(404).json({ error: 'Categoria no encontrada' })
      return res.status(200).json(updated)
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: error.message })
    }
  }
}
