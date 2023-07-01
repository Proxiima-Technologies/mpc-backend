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
      offer_code: {
        type: Sequelize.STRING,
        defaultValue: '',
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
      offer_link: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      limit: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Limit cannot be empty.',
          },
        },
      },
      start_date: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
      },
      end_date: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
      },
      priority_queue: {
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
    this.hasMany(models.UserCCOffers, { foreignKey: 'offer_id' })
  }

}
