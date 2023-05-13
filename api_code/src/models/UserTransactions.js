"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class UserTransactions extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      user_transaction_id: {
        type: _sequelize2.default.INTEGER,
        primaryKey: true,
      },
      merchant_name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Merchant Name cannot be empty.',
          },
        },
      },
      merchant_category: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Merchant Category cannot be empty.',
          },
        },
      },
      amount: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
        valildate: {
          isInt: {
            msg: 'Amount must be an integer (number).',
          },
        },
      },
      location: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Location cannot be empty.',
          },
        },
      },
      date: {
        type: _sequelize2.default.DATEONLY,
        defaultValue: '',
        valildate: {
     
        },
      },
      time: {
        type: _sequelize2.default.TIME,
        defaultValue: '',
        valildate: {
          
        },
      },
    }, {
      sequelize,
    })
    return this
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' })
  }
  
  static associate(models) {
    this.belongsTo(models.UserCreditCards, { foreignKey: 'user_card_id' })
  }
} exports.default = UserTransactions;
