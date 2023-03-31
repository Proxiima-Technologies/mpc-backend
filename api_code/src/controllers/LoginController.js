import jwt from 'jsonwebtoken'
import User from '../models/Users'

class LoginController {
  async store(req, res) {
    const { phone_number = '', password = '' } = req.body

    if (!phone_number || !password) {
      return res.status(401).json({
        errors: ['Invalid credentials.'],
      })
    }

    const user = await User.findOne({ where: { phone_number } })

    if (!user) {
      return res.status(401).json({
        errors: ['User does not exist.'],
      })
    }

    if (!(await user.passwordIsCorrect(password))) {
      return res.status(401).json({
        errors: ['Incorrect password.'],
      })
    }

    const { user_id } = user
    const token = jwt.sign({ user_id, phone_number }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    })

    return res.json({ token, user: {  user_id, name: user.name, email: user.email, phone_number } })
  }
}

export default new LoginController()
