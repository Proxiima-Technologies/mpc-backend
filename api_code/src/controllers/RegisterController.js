import User from '../models/Users'

class RegisterController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body)
      const { user_id, name, email, phone_number } = newUser
      return res.json({ user_id, name, email, phone_number })
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

}

export default new RegisterController()
