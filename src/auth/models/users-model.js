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
        let token = await jwt.sign({exp: Math.floor(Date.now() / 1000) + (60 * 15), username: user}, SECRET);
        return token;
    }

    async authenticateToken(token) {
        try {
            let tokenObj = await jwt.verify(token, SECRET);
            console.log("token obejct >>>>>>",tokenObj)
            let checkObj = await Users.find({username: tokenObj.username});
            console.log("Checking the token", checkObj);
            if(checkObj) {
                return Promise.resolve(tokenObj);
            } else {
                return Promise.reject();
            }
        } catch(err) {
            return Promise.reject();
        }
    }
}

module.exports = new Model();