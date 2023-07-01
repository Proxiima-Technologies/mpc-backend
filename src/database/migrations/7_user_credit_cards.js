/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('user_credit_cards', {
      user_card_id: {
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
      card_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'credit_cards',
          key: 'card_id',
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      },
      card_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      expiration_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
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
      total_points: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      total_miles: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      statement_gen_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      bill_due_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      cc_email: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('user_credit_cards')
  },
}
