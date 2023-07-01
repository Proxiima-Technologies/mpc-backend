/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('user_cc_base_offers', {
      user_cc_base_offers_id: {
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
      base_offer_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'card_base_offers',
          key: 'base_offer_id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      redeemed_limit: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('user_cc_base_offers')
  },
}
