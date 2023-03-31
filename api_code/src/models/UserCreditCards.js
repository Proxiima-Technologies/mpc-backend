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
}
