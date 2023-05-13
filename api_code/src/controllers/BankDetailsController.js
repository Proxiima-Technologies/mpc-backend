"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _BankDetails = require('../models/BankDetails'); var _BankDetails2 = _interopRequireDefault(_BankDetails);

class BankDetailsController {
  async index(req, res) {
    const bankDetails = await _BankDetails2.default.findAll({
      attributes: ['bank_id', 'bank_name', 'picture']
    })
    res.json(bankDetails)
  }

}

exports. default = new BankDetailsController()
