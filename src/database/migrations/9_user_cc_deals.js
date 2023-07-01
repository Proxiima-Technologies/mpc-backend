/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('user_cc_deals', {
      user_cc_deals_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'user_id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      user_card_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'user_credit_cards',
          key: 'user_card_id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      card_deals_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'card_deals',
          key: 'card_deals_id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      multiplier: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      points_gained: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      start_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      end_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('user_cc_deals')
  },
}
