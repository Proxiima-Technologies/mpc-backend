import Sequelize, { Model } from 'sequelize'

export default class BankDetails extends Model {
  static init(sequelize) {
    super.init({
      bank_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      bank_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Bank Name cannot be empty.',
          },
        },
      },
      bank_logo: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Bank Logo cannot be empty.',
          },
        },
      },
      bank_email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Invalid email address.',
          },
        },
      }
    }, {
      sequelize,
    })
    return this
  }

  static associate(models) {
    this.hasMany(models.CreditCards, { foreignKey: 'bank_id' })
  }
}
