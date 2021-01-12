'use strict';

let users = require('../models/users-model');

module.exports = (req, res, next) =>{
    if(!req.headers.authorization) {
        next('not loggedin!');
    }
    let authHeader = req.headers.authorization.split(' ');
    if (authHeader[0] != "Bearer") {
        next('invalid bearer header!');
        return;
    }
    users.authenticateToken(authHeader[1]).then(verified=>{
        console.log("Valid user: ", verified);
        req.user = verified;
        next();
    })
    .catch(err => {next('invalid token!')})
}