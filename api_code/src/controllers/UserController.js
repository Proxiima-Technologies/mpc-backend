import User from '../models/Users'

class UserController {

  // Index
  async index(req, res) {
    try {
      const user = await User.findByPk(req.userId) 
      const { user_id, name, email, phone_number } = user
      return res.json({ user_id, name, email, phone_number })
    } catch (e) {
      return res.json(null)
    }
  }

  // Show
  // async show(req, res) {
  //   try {
  //     const user = await User.findByPk(req.params.id)
  //     const { id, name, email, phone_number } = user
  //     return res.json({ id, name, email, phone_number })
  //   } catch (e) {
  //     return res.json(null)
  //   }
  // }

 // Store Additional Details
  async store_additional(req, res) {

    try {
      const user = await User.findByPk(req.userId) // req.userId comes from loginRequired middleware

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        })
      }

      const newUserData = await user.update(req.body)
      const {name, email, phone_number} = newUserData
      console.log(req.body)

      return res.json({ name, email, phone_number })
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }

  }

  // Update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId) // req.userId comes from loginRequired middleware

      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        })
      }

      const newUserData = await user.update(req.body)
      const { user_id, name, email, phone_number } = newUserData
      console.log(req.body)

      return res.json({ user_id, name, email, phone_number })
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId) // req.userId comes from loginRequired middleware
      if (!user) {
        return res.status(400).json({
          errors: ['User does not exist.'],
        })
      }

      await user.destroy()

      return res.json({
        userDeleted: true,
      })
    } catch (e) {
      console.log(e)
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }
}

export default new UserController()
