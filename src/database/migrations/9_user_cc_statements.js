/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('user_cc_statements', {
      user_cc_statements_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
      credit_limit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      available_limit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      total_payment_due: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      minimum_payment_due: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      start_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      end_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      statement_gen_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      bill_due_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('user_cc_statements')
  },
}
