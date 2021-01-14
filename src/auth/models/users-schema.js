'use strict';

const mongoose = require('mongoose');

const users = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true, enum: ['user', 'writer', 'editor', 'administrator']}
});

module.exports = mongoose.model('users', users);