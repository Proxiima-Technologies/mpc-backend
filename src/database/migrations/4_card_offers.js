/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('card_offers', {
      offer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      offer_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      offer_code: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      offer_description: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      offer_link: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      limit: {
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
      priority_queue: {
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
    return queryInterface.dropTable('card_offers')
  },
}
