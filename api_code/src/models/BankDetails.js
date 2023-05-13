"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class BankDetails extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      bank_id: {
        type: _sequelize2.default.INTEGER,
        primaryKey: true,
      },
      bank_name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Bank Name cannot be empty.',
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
    this.hasMany(models.CreditCards, { foreignKey: 'bank_id' })
  }
} exports.default = BankDetails;
