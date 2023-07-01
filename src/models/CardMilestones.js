import Sequelize, { Model } from 'sequelize'

export default class CardMilestones extends Model {
  static init(sequelize) {
    super.init({
      card_milestones_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      milestone_name: {
        type: Sequelize.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Milestone Name cannot be empty.',
          },
        },
      },
      milestone_description: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      milestone_amount: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      total_milestone: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      reward_points: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      max_tat_days: {
        type: Sequelize.STRING,
        defaultValue: '',
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
    this.hasMany(models.UserCCMilestones, { foreignKey: 'card_milestones_id' })
  }

}
