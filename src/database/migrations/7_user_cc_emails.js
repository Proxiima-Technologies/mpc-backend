/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('user_cc_emails', {
      user_cc_emails_id: {
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
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      auth_code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      access_code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      refresh_code: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('user_cc_emails')
  },
}
