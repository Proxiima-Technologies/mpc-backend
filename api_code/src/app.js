"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config()

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _homeRoutes = require('./routes/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _loginRoutes = require('./routes/loginRoutes'); var _loginRoutes2 = _interopRequireDefault(_loginRoutes);
var _registerRoutes = require('./routes/registerRoutes'); var _registerRoutes2 = _interopRequireDefault(_registerRoutes);
var _userRoutes = require('./routes/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _bankDetailsRoutes = require('./routes/bankDetailsRoutes'); var _bankDetailsRoutes2 = _interopRequireDefault(_bankDetailsRoutes);
var _creditCardsRoutes = require('./routes/creditCardsRoutes'); var _creditCardsRoutes2 = _interopRequireDefault(_creditCardsRoutes);

const whiteList = [
  'http://localhost:3005', // REST API on localhost
  '*',
]

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error(`Origin not allowed by Cors: ${origin}`))
    }
  },
}

class App {
  constructor() {
    this.app = _express2.default.call(void 0, )
    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, corsOptions))
    this.app.use(_express2.default.urlencoded({ extended: true }))
    this.app.use(_express2.default.json())
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')))
  }

  routes() {
    this.app.use('/', _homeRoutes2.default)
    this.app.use('/login', _loginRoutes2.default)
    this.app.use('/register', _registerRoutes2.default)
    this.app.use('/users', _userRoutes2.default)
    this.app.use('/bank-details', _bankDetailsRoutes2.default)
    this.app.use('/credit-cards', _creditCardsRoutes2.default)
  }
}

exports. default = new App().app
