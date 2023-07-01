import Sequelize, { Model } from 'sequelize'

export default class UserCreditCards extends Model {
  static init(sequelize) {
    super.init({
      user_card_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      card_number: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      expiration_date: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
      },
      credit_limit: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      available_limit: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      total_payment_due: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      minimum_payment_due: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      total_points: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      total_miles: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      statement_gen_date: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
      },
      bill_due_date: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
      },
      cc_email: {
        type: Sequelize.STRING,
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
    this.belongsTo(models.CreditCards, { foreignKey: 'card_id' })
  }

  static associate(models) {
    this.hasMany(models.UserTransactions, { foreignKey: 'user_card_id' })
  }

  static associate(models) {
    this.hasMany(models.UserCCEmails, { foreignKey: 'user_card_id' })
  }

  static associate(models) {
    this.hasMany(models.UserCCOffers, { foreignKey: 'user_card_id' })
  }

  static associate(models) {
    this.hasMany(models.UserCCBaseOffers, { foreignKey: 'user_card_id' })
  }

  static associate(models) {
    this.hasMany(models.UserCCBenefits, { foreignKey: 'user_card_id' })
  }

  static associate(models) {
    this.hasMany(models.UserCCMilestones, { foreignKey: 'user_card_id' })
  }

  static associate(models) {
    this.hasMany(models.UserCCDeals, { foreignKey: 'user_card_id' })
  }
  
  static associate(models) {
    this.hasMany(models.UserCCStatements, { foreignKey: 'user_card_id' })
  }
  
}
