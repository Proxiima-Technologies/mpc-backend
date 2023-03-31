import Sequelize, { Model } from 'sequelize'

export default class UserTransactions extends Model {
  static init(sequelize) {
    super.init({
      user_transaction_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      merchant_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Merchant Name cannot be empty.',
          },
        },
      },
      merchant_category: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Merchant Category cannot be empty.',
          },
        },
      },
      amount: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        valildate: {
          isInt: {
            msg: 'Amount must be an integer (number).',
          },
        },
      },
      location: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Location cannot be empty.',
          },
        },
      },
      date: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
        valildate: {
     
        },
      },
      time: {
        type: Sequelize.TIME,
        defaultValue: '',
        valildate: {
          
        },
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
    this.belongsTo(models.UserCreditCards, { foreignKey: 'user_card_id' })
  }
}
