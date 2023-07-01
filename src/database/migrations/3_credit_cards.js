/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('credit_cards', {
      card_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      card_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      card_network: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      card_category: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      transaction_email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      statements_email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      reward_rate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      miles_rate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gc_rate: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      card_logo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      card_transaction_subject: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      card_statement_subject: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      card_transaction_regex: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      card_statement_regex: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      card_background: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'bank_details',
          key: 'bank_id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('credit_cards')
  },
}
