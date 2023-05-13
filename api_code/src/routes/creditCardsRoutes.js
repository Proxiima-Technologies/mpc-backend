"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CreditCardsController = require('../controllers/CreditCardsController'); var _CreditCardsController2 = _interopRequireDefault(_CreditCardsController);

var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)()

router.get('/', _CreditCardsController2.default.index)

exports. default = router