import Sequelize, { Model } from 'sequelize'

export default class CardBenefits extends Model {
  static init(sequelize) {
    super.init({
      benefits_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      benefits_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Benefits Name cannot be empty.',
          },
        },
      },
      benefits_description: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Benefits Description cannot be empty.',
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

  static associate(models) {
    this.hasMany(models.UserCCBenefits, { foreignKey: 'benefits_id' })
  }

}
