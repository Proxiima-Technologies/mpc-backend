"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);

class RegisterController {
  async store(req, res) {
    try {
      const newUser = await _Users2.default.create(req.body)
      const { user_id, name, email, phone_number } = newUser
      return res.json({ user_id, name, email, phone_number })
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      })
    }
  }

}

exports. default = new RegisterController()
