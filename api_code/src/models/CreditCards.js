import Sequelize, { Model } from 'sequelize'

export default class CreditCards extends Model {
  static init(sequelize) {
    super.init({
      card_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      card_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Card Name cannot be empty.',
          },
        },
      },
      card_network: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Card Network cannot be empty.',
          },
        },
      },
      card_category: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Card Category cannot be empty.',
          },
        },
      },
      card_email: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          isEmail: {
            msg: 'Invalid email address.',
          },
        },
      },
      picture: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Picture cannot be empty.',
          },
        },
      }
    }, {
      sequelize,
    })
    return this
  }

  static associate(models) {
    this.belongsTo(models.BankDetails, { foreignKey: 'bank_id' })
  }

  static associate(models) {
    this.hasMany(models.UserCreditCards, { foreignKey: 'card_id' })
  }

  static associate(models) {
    this.hasMany(models.CardOffers, { foreignKey: 'card_id' })
  }

}
