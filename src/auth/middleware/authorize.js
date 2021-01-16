'use strict';

const Users = require('../models/users-model');

let roles = {
    'user': ['read'],
    'wirter' : ['read', 'create'],
    'editor': ['read', 'create', 'update'],
    'administrator': ['read', 'create', 'update', 'delete']
}

module.exports = (capability) =>{
    return async (req, res, next) =>{
        try {
            if(roles[req.user.role].includes(capability)) {
                next();
            } else {
                throw new Error("Access Denied!!");
            }
        } catch(err) {
            next('Access Denied!!')
        }
    }
}