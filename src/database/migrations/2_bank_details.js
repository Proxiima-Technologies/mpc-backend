/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('bank_details', {
      bank_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      bank_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bank_logo: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      bank_email: {
        type: Sequelize.STRING,
        allowNull: true,
      }
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('bank_details')
  },
}
