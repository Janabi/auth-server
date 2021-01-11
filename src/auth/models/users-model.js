'use strict';

const Users = require('./users-schema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let SECRET = 'Nup';

class Model {

    async create(record) {
        let newRecord = new Object();
        newRecord.username = record.username;
        newRecord.password = await bcrypt.hash(record.password, 5);
        console.log("new record ----", newRecord)
        let insertedRecord = new Users(newRecord);
        let insertData = await insertedRecord.save();
        return insertData;
    }

    async read(username) {
        let name = username ? username : {};
        return await Users.find(name);
    }

    async authenticateBasic(username, pass) {
        let user = await Users.findOne({username});
        if (user) {
            return await bcrypt.compare(pass, user.password);
        }
        return Promise.reject();
    }

    async generateToken(user) {
        let token = await jwt.sign({username: user}, SECRET);
        return token;
    }
}

module.exports = new Model();