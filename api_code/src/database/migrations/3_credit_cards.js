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
        allowNull: false,
      },
      card_category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      card_email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      picture: {
        type: Sequelize.STRING,
        allowNull: false,
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
