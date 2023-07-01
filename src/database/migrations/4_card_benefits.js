/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('card_benefits', {
      benefits_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      benefits_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      benefits_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      limit: {
        type: Sequelize.STRING,
        allowNull: false,
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
    return queryInterface.dropTable('card_benefits')
  },
}
