/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('user_cc_benefits', {
      user_cc_benefits_id: {
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
      benefits_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'card_benefits',
          key: 'benefits_id',
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
    return queryInterface.dropTable('user_cc_benefits')
  },
}
