"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class UserCreditCards extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      user_card_id: {
        type: _sequelize2.default.INTEGER,
        primaryKey: true,
      },
      card_number: {
        type: _sequelize2.default.INTEGER,
        defaultValue: '',
      },
      expiration_date: {
        type: _sequelize2.default.DATEONLY,
        defaultValue: '',
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
    this.belongsTo(models.CreditCards, { foreignKey: 'card_id' })
  }

  static associate(models) {
    this.hasMany(models.UserTransactions, { foreignKey: 'user_card_id' })
  }
} exports.default = UserCreditCards;
