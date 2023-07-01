import BankDetails from '../models/BankDetails'

class BankDetailsController {
  async index(req, res) {
    const bankDetails = await BankDetails.findAll({
      attributes: ['bank_id', 'bank_name', 'bank_logo', 'bank_email']
    })
    res.json(bankDetails)
  }

}

export default new BankDetailsController()
