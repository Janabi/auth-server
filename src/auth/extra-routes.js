'use strict';

const express = require('express');
const bearer = require('./middleware/bearer');
const aclMiddleware = require('./middleware/authorize')

const router = express.Router();

router.get('/secret', bearer, (req, res, next)=>{
    res.status(200).json(req.user);
})

router.get('/read', bearer, aclMiddleware, (req, res, next)=>{
    res.status(200).json('The user able to read newest post!');
})

router.post('/add', bearer, aclMiddleware, (req, res, next)=>{
    res.status(200).json('The user can add a certain post');
})

router.put('/change', bearer, aclMiddleware, (req, res, next)=>{
    res.status(200).json('The user can update a selected post');
})

router.delete('/remove', bearer, aclMiddleware, (req, res, next)=>{
    res.status(200).json('The user can delete a post');
})


module.exports = router;