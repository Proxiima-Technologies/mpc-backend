import CreditCards from '../models/CreditCards'
import CardOffers from '../models/CardOffers'
import BankDetails from '../models/BankDetails'

class CreditCardsController {
  async index(req, res) {
    try {
      const creditCards = await CreditCards.findAll( {
        attributes: ['card_id', 'card_name', 'card_network', 'card_category', 'transaction_email', 'statements_email', 'card_logo', 'card_background', 'card_transaction_subject', 'card_statement_subject', 'card_transaction_regex', 'card_statement_regex', 'bank_id']
      } )
      return res.json(creditCards)
    } catch (e) {
      console.log(e);
      return res.status(400).json({message: 'Error Message', data: e})
     
    }

  }

}

export default new CreditCardsController()
