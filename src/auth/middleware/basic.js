'use strict';

const base64 = require('base-64');
const users = require('../models/users-model');

module.exports = (req, res, next)=>{
    console.log(req.headers);
    if(!req.headers.authorization) {
        next('Invalid Login!');
        return;
    }
    let authHeader = req.headers.authorization.split(" ");
    console.log(authHeader);
    if(authHeader[0] != 'Basic') {
        next('Invalid Login!');
        return;
    }
    let basic = authHeader.pop();
    let [user, password] = base64.decode(basic).split(":");
    console.log(user,password);
    users.authenticateBasic(user, password).then(verified=>{
        users.generateToken(user).then(generatedToken=>{
            req.token = generatedToken;
            req.username = user;
            next();
        })
        .catch(err=> next('error in Token!'))
    })
    .catch(err=> next('Invalid Login!'))
}