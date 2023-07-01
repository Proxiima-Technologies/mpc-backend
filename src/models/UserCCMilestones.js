import Sequelize, { Model } from 'sequelize'

export default class UserCCMilestones extends Model {
  static init(sequelize) {
    super.init({
      user_cc_milestones_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      completed_milestone: {
        type: Sequelize.INTEGER,
        defaultValue: '',
      },
      start_date: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
      },
      end_date: {
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

  static associate(models) {
    this.belongsTo(models.CardMilestones, { foreignKey: 'card_milestones_id' })
  }
}
