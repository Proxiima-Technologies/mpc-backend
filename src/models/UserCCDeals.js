import Sequelize, { Model } from 'sequelize'

export default class UserCCDeals extends Model {
  static init(sequelize) {
    super.init({
      user_cc_deals_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      multiplier: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      points_gained: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      start_date: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
      },
      end_date: {
        type: Sequelize.DATEONLY,
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
    this.belongsTo(models.CardDeals, { foreignKey: 'card_deals_id' })
  }
}
