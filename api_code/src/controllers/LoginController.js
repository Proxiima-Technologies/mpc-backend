"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class LoginController {
  async store(req, res) {
    const { phone_number = '', password = '' } = req.body

    if (!phone_number || !password) {
      return res.status(401).json({
        errors: ['Invalid credentials.'],
      })
    }

    const user = await _Users2.default.findOne({ where: { phone_number } })

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
    const token = _jsonwebtoken2.default.sign({ user_id, phone_number }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    })

    return res.json({ token, user: {  user_id, name: user.name, email: user.email, phone_number } })
  }
}

exports. default = new LoginController()
