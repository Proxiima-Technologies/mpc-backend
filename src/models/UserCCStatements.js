import Sequelize, { Model } from 'sequelize'

export default class UserCCStatements extends Model {
  static init(sequelize) {
    super.init({
      user_cc_statements_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
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
      start_date: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
      },
      end_date: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
      },
      statement_gen_date: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
      },
      bill_due_date: {
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


}
