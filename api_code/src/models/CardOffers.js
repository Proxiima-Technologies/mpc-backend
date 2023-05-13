"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class CardOffers extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      offer_id: {
        type: _sequelize2.default.INTEGER,
        primaryKey: true,
      },
      offer_name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Offer Name cannot be empty.',
          },
        },
      },
      offer_description: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Offer Description cannot be empty.',
          },
        },
      },
      limit: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        valildate: {
          notEmpty: {
            msg: 'Field Limit cannot be empty.',
          },
        },
      }
    }, {
      sequelize,
    })
    return this
  }

  static associate(models) {
    this.belongsTo(models.CreditCards, { foreignKey: 'card_id' })
  }

} exports.default = CardOffers;
