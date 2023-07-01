import Sequelize from 'sequelize'
import databaseConfig from '../config/database'

import Users from '../models/Users'
import BankDetails from '../models/BankDetails'
import CreditCards from '../models/CreditCards'
import CardOffers from '../models/CardOffers'
import CardBenefits from '../models/CardBenefits'
import CardBaseOffers from '../models/CardBaseOffers'
import CardMilestones from '../models/CardMilestones'
import CardDeals from '../models/CardDeals'
import UserCreditCards from '../models/UserCreditCards'
import UserTransactions from '../models/UserTransactions'
import UserCCEmails from '../models/UserCCEmails'
import UserCCOffers from '../models/UserCCOffers'
import UserCCBenefits from '../models/UserCCBenefits'
import UserCCBaseOffers from '../models/UserCCBaseOffers'
import UserCCMilestones from '../models/UserCCMilestones'
import UserCCDeals from '../models/UserCCDeals'
import UserCCStatements from '../models/UserCCStatements'

const models = [Users, BankDetails, CreditCards, CardOffers, CardBenefits, CardBaseOffers, CardMilestones, CardDeals, UserCreditCards, UserTransactions, UserCCEmails, UserCCOffers, UserCCBenefits, UserCCBaseOffers, UserCCMilestones, UserCCDeals, UserCCStatements]

const connection = new Sequelize(databaseConfig)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))
