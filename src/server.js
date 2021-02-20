'user strict';

const express = require('express');
const route = require('./auth/router');
const extraRoute = require('./auth/extra-routes');
require('dotenv').config();

const app = express();

app.use(express.json())

app.use(route);
app.use(extraRoute);

module.exports = {
    server: app,
    start: ()=>{
        let PORT = process.env.PORT || 4000;
        app.listen(PORT, ()=>{
            console.log(`Listening on ${PORT}`);
        })
    }
}