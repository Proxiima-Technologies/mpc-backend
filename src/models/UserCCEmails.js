import Sequelize, { Model } from 'sequelize'

export default class UserCCEmails extends Model {
  static init(sequelize) {
    super.init({
      user_cc_emails: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      auth_code: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      access_code: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      refresh_code: {
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
    this.belongsTo(models.UserCreditCards, { foreignKey: 'user_card_id' })
  }
}
