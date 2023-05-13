"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);

var _Users = require('../models/Users'); var _Users2 = _interopRequireDefault(_Users);
var _BankDetails = require('../models/BankDetails'); var _BankDetails2 = _interopRequireDefault(_BankDetails);
var _CreditCards = require('../models/CreditCards'); var _CreditCards2 = _interopRequireDefault(_CreditCards);
var _CardOffers = require('../models/CardOffers'); var _CardOffers2 = _interopRequireDefault(_CardOffers);
var _UserCreditCards = require('../models/UserCreditCards'); var _UserCreditCards2 = _interopRequireDefault(_UserCreditCards);
var _UserTransactions = require('../models/UserTransactions'); var _UserTransactions2 = _interopRequireDefault(_UserTransactions);

const models = [_Users2.default, _BankDetails2.default, _CreditCards2.default, _CardOffers2.default, _UserCreditCards2.default, _UserTransactions2.default]

const connection = new (0, _sequelize2.default)(_database2.default)

models.forEach((model) => model.init(connection))
models.forEach((model) => model.associate && model.associate(connection.models))
