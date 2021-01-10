'user strict';

const express = require('express');
const route = require('./auth/router');
require('dotenv').config();

const app = express();

app.use(express.json())

app.use(route);

module.exports = {
    server: app,
    start: ()=>{
        let PORT = process.env.PORT;
        app.listen(PORT, ()=>{
            console.log(`Listening on ${PORT}`);
        })
    }
}