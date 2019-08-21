const express   = require('express');
const user      = express.Router();
const { signin, signup } = require('../handlers/user');

user.post('/signup', signup);
user.post('/signin', signin);

module.exports = user;
