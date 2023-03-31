import CreditCards from '../models/CreditCards'
import CardOffers from '../models/CardOffers'

class CreditCardsController {
  async index(req, res) {
    const creditCards = await CreditCards.findAll({
      attributes: ['card_id', 'card_name', 'card_network', 'card_category', 'card_email', 'picture', 'bank_id'],
      order: [['card_id', 'DESC'], [CardOffers, 'offer_id', 'DESC']],
      include: {
        model: CardOffers,
        attributes: ['offer_id', 'offer_name', 'offer_description', 'limit'],
      },
    })
    res.json(creditCards)
  }

}

export default new CreditCardsController()
