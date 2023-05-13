"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class CreditCards extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      card_id: {
        type: _sequelize2.default.INTEGER,
        primaryKey: true,
      },
      card_name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Card Name cannot be empty.',
          },
        },
      },
      card_network: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Card Network cannot be empty.',
          },
        },
      },
      card_category: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Card Category cannot be empty.',
          },
        },
      },
      card_email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        valildate: {
          isEmail: {
            msg: 'Invalid email address.',
          },
        },
      },
      picture: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Picture cannot be empty.',
          },
        },
      }
    }, {
      sequelize,
    })
    return this
  }

  static associate(models) {
    this.belongsTo(models.BankDetails, { foreignKey: 'bank_id' })
  }

  static associate(models) {
    this.hasMany(models.UserCreditCards, { foreignKey: 'card_id' })
  }

  static associate(models) {
    this.hasMany(models.CardOffers, { foreignKey: 'card_id' })
  }

} exports.default = CreditCards;
