import Sequelize, { Model } from 'sequelize'

export default class CardDeals extends Model {
  static init(sequelize) {
    super.init({
      card_deals_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      deal_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Deal Name cannot be empty.',
          },
        },
      },
      deal_description: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      reward_points: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      max_tat_days: {
        type: Sequelize.STRING,
        defaultValue: '',
      }
    }, {
      sequelize,
    })
    return this
  }

  static associate(models) {
    this.belongsTo(models.CreditCards, { foreignKey: 'card_id' })
  }

  static associate(models) {
    this.hasMany(models.UserCCDeals, { foreignKey: 'card_deals_id' })
  }

}
