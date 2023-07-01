import Sequelize, { Model } from 'sequelize'

export default class UserCCOffers extends Model {
  static init(sequelize) {
    super.init({
      user_cc_offers_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      redeemed_limit: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      }
    }, {
      sequelize,
    })
    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' })
  }
  
  static associate(models) {
    this.belongsTo(models.UserCreditCards, { foreignKey: 'user_card_id' })
  }

  static associate(models) {
    this.belongsTo(models.CardOffers, { foreignKey: 'offer_id' })
  }
}
