const express = require('express')

const AuthController = require('../controllers/auth.controller');
const { authenticate } = require('../helpers/authenticate');

const router = express.Router()

router.route('/login').post(AuthController.login);

router.route('/register').post(AuthController.register);

router.route('/logout').delete(authenticate, AuthController.logout);

module.exports = router;