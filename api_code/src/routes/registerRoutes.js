"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _RegisterController = require('../controllers/RegisterController'); var _RegisterController2 = _interopRequireDefault(_RegisterController);

const router = new (0, _express.Router)()

router.post('/', _RegisterController2.default.store)

exports. default = router
