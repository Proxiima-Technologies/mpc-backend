import Sequelize, { Model } from 'sequelize'
import bcryptjs from 'bcryptjs'

export default class Users extends Model {
  static init(sequelize) {
    super.init({
      user_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      phone_number: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Password length must be between 6 and 50 characters.',
          },
        },
      },
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        // validate: {
          // notEmpty: {
          //   msg: 'Field Name cannot be empty.',
          // },
        // },
      },
      email: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
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
        user.password_hash = await bcryptjs.hash(user.password, 8)
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
    return bcryptjs.compare(password, this.password_hash)
  }
}
