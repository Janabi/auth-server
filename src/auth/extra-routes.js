'use strict';

const express = require('express');
const bearer = require('./middleware/bearer');

const router = express.Router();

router.get('/secret', bearer, (req, res, next)=>{
    res.status(200).json(req.user);
})

module.exports = router;