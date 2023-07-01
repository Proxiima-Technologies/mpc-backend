import CardOffers from '../models/CardOffers'

class CardOffersController {
  async index(req, res) {

    try {

      const { card_id = ''} = req.body

      if (!card_id) {
        return res.status(401).json({
          errors: ['Invalid card id.'],
        })
      }

      const cardOffers = await CardOffers.findAll( {
        where: { card_id },
        attributes: ['offer_id', 'offer_name', 'offer_code', 'offer_description', 'offer_link', 'limit', 'priority_queue', 'start_date', 'end_date', 'card_id']
      } )

      if (!cardOffers) {
        return res.status(401).json({
          errors: ['Card Offer does not exist.'],
        })
      }

      return res.json(cardOffers)


    } catch (e) {


      console.log(e);
      return res.status(400).json({message: 'Error Message', data: e})
     
    }

  }

}

export default new CardOffersController()
