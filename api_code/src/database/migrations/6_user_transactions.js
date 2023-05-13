"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable('user_transactions', {
      user_transaction_id: {
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
      merchant_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      merchant_category: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
    })
  },

  async down(queryInterface) {
    return queryInterface.dropTable('user_transactions')
  },
}
