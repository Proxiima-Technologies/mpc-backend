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
      transaction_email: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          isEmail: {
            msg: 'Invalid email address.',
          },
        },
      },
      statements_email: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          isEmail: {
            msg: 'Invalid email address.',
          },
        },
      },
      card_logo: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Card Logo cannot be empty.',
          },
        },
      },
      card_background: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Card Background cannot be empty.',
          },
        },
      },
      card_transaction_subject: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      card_statement_subject: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      card_transaction_regex: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      card_statement_regex: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      reward_rate: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      miles_rate: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      gc_rate: {
        type: Sequelize.STRING,
        defaultValue: '',
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
    this.hasMany(models.CardOffers, { foreignKey: 'card_id' })
  }

  static associate(models) {
    this.hasMany(models.CardBaseOffers, { foreignKey: 'card_id' })
  }

  static associate(models) {
    this.hasMany(models.CardBenefits, { foreignKey: 'card_id' })
  }

  static associate(models) {
    this.hasMany(models.CardMilestones, { foreignKey: 'card_id' })
  }

  static associate(models) {
    this.hasMany(models.CardDeals, { foreignKey: 'card_id' })
  }

  static associate(models) {
    this.hasMany(models.UserCreditCards, { foreignKey: 'card_id' })
  }

}
