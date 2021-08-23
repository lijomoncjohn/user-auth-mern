const express = require('express')

const UserController = require('../controllers/user.controller')

const router = express.Router()

router.route('/').get(UserController.users)

module.exports = router;