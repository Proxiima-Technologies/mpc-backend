"use strict";const bcryptjs = require('bcryptjs')

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert(
    'users',
    [
      {
        name: 'Nikhil Chouhan',
        email: 'nik@gmail.com',
        phone_number: '9653408141',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Parthak Parag',
        email: 'pp@gmail.com',
        phone_number: '9999999999',
        password_hash: await bcryptjs.hash('123456', 8),
        created_at: new Date(),
        updated_at: new Date(),
      }
    ],
    {},
  ),

  down: () => {},
}
