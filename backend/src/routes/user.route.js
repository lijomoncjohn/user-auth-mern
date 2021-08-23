const express = require('express')

const UserController = require('../controllers/user.controller');
const { authenticate } = require('../helpers/authenticate');

const router = express.Router();

router.route('/').get(authenticate, UserController.profile);

module.exports = router;