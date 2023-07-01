import User from '../models/Users'

class RegisterController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body)
      const { phone_number } = newUser
      return res.json({ phone_number })
    } catch (e) {
      return res.status(400).json({
        errors: e,
      })
    }
  }

}

export default new RegisterController()
