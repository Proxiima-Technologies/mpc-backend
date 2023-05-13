"use strict";/** @type {import('sequelize-cli').Migration} */
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
        allowNull: false,
      },
      expiration_date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('user_credit_cards')
  },
}
