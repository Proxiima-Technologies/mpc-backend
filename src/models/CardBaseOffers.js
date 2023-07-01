import Sequelize, { Model } from 'sequelize'

export default class CardBaseOffers extends Model {
  static init(sequelize) {
    super.init({
      base_offer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      base_offer_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Base Offer Name cannot be empty.',
          },
        },
      },
      base_offer_description: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Base Offer Description cannot be empty.',
          },
        },
      },
      limit: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Limit cannot be empty.',
          },
        },
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
    this.hasMany(models.UserCCBaseOffers, { foreignKey: 'base_offer_id' })
  }

}
