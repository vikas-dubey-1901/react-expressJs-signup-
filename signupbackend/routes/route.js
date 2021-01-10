const express = require('express');
const User = require('../models/signupModel');
const autController = require('.././autController');
//const catchAsync = require('../catchAsync');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/signup', autController.signup);

//router.get('/signin', (req, res) => {});

module.exports = router;
