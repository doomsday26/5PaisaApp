const express = require('express');
const path = require('path');
const app = express();
const request = require("request").defaults({jar: true});
var data = {};
data.head = {   "appName": "5P55155874",
                "appVer": "1.0",
                "key": "V1qjwhknjzkcffeqgjkDp7aqvXUHQbAF",
                "osName": "WEB",
                //update request code as required
                "userId": "CirMuUW85Fi",
                "password": "3wREYKyYoOX"
            }

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname+'/home.html'));
});

app.get('/login', (req,res) => {
    const login = require('./login');
    login(request,res,data);
});

app.get('/orderBook', (req,res) => {
    const orderBook = require('./orderBook');
    orderBook(request,res,data);
});

app.listen(3000);