"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _CreditCards = require('../models/CreditCards'); var _CreditCards2 = _interopRequireDefault(_CreditCards);
var _CardOffers = require('../models/CardOffers'); var _CardOffers2 = _interopRequireDefault(_CardOffers);

class CreditCardsController {
  async index(req, res) {
    const creditCards = await _CreditCards2.default.findAll({
      attributes: ['card_id', 'card_name', 'card_network', 'card_category', 'card_email', 'picture', 'bank_id'],
      order: [['card_id', 'DESC'], [_CardOffers2.default, 'offer_id', 'DESC']],
      include: {
        model: _CardOffers2.default,
        attributes: ['offer_id', 'offer_name', 'offer_description', 'limit'],
      },
    })
    res.json(creditCards)
  }

}

exports. default = new CreditCardsController()
