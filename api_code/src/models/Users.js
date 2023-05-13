"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class Users extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      user_id: {
        type: _sequelize2.default.INTEGER,
        primaryKey: true,
      },
      phone_number: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Phone number already used for a registered account.',
        },
        validate: {
          len: {
            args: [10, 20],
            msg: 'Phone number must be between 10 and 20 digits.',
          },
        },
      },
      password_hash: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
      },
      password: {
        type: _sequelize2.default.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Password length must be between 6 and 50 characters.',
          },
        },
      },
      name: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        // validate: {
          // notEmpty: {
          //   msg: 'Field Name cannot be empty.',
          // },
        // },
      },
      email: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email already used for a registered account. ',
        },
        // validate: {
        //   isEmail: {
        //     msg: 'Invalid email address.',
        //   },
        // },
      },
      picture: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        // valildate: {
        //   notEmpty: {
        //     msg: 'Field Picture cannot be empty.',
        //   },
        // },
      }
    }, {
      sequelize,
    })

    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8)
      }
    })

    return this
  }

  static associate(models) {
    this.hasMany(models.UserCreditCards, { foreignKey: 'user_id' })
  }

  static associate(models) {
    this.hasMany(models.UserTransactions, { foreignKey: 'user_id' })
  }

  passwordIsCorrect(password) {
    return _bcryptjs2.default.compare(password, this.password_hash)
  }
} exports.default = Users;
