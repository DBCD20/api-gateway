const express   = require('express');
const member    = express.Router();
const { getLists, add, edit, remove } = require('../handlers/member')

member.route('/')
    .get(getLists)
    .post(add);
// EDIT MEMBER ROUTE
member.put('/:id', edit);
//DELETE MEMBER ROUTE
member.delete('/:id', remove);

module.exports = member;