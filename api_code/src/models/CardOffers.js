import Sequelize, { Model } from 'sequelize'

export default class CardOffers extends Model {
  static init(sequelize) {
    super.init({
      offer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      offer_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Offer Name cannot be empty.',
          },
        },
      },
      offer_description: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Offer Description cannot be empty.',
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

}
