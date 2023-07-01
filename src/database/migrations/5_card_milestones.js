/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('card_milestones', {
      card_milestones_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      milestone_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      milestone_description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      milestone_amount: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      total_milestone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      reward_points: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      max_tat_days: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      card_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'credit_cards',
          key: 'card_id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('card_milestones')
  },
}
