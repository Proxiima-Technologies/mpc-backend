import Sequelize from 'sequelize'
import databaseConfig from '../config/database'

import Users from '../models/Users'
import BankDetails from '../models/BankDetails'
import CreditCards from '../models/CreditCards'
import CardOffers from '../models/CardOffers'
import UserCreditCards from '../models/UserCreditCards'
import UserTransactions from '../models/UserTransactions'

const models = [Users, BankDetails, CreditCards, CardOffers, UserCreditCards, UserTransactions]

const connection = new Sequelize(databaseConfig)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))
