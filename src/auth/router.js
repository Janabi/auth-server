'user strict';

const express = require('express');
const users = require('./models/users-model');
const authBasic = require('./middleware/basic')

const router = express.Router();


router.post('/signup', (req, res, next)=>{
    users.create(req.body).then(user=>{
        users.generateToken(user).then(result=>{
            res.status(200).send(result);
        })
    })
    .catch(err => res.status(403).send("Creating an error!"))
})

router.post('/signin', authBasic, (req, res, next) =>{
    res.status(200).send(req.token);
});

router.get('/users', (req, res, next)=>{
    users.read().then(result=>{
        res.status(200).json(result);
    })
});

module.exports = router;