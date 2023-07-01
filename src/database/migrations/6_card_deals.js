/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('card_deals', {
      card_deals_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      deal_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deal_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      reward_points: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('card_deals')
  },
}
