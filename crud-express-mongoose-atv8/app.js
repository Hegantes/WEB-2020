var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

require('./db/MongoConn');

var users = require('./routes/users');
var DisciplinaRoute = require('./routes/DisciplinaRoutes');

var app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT,    DELETE");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/users', users);

app.use('/disciplinas', DisciplinaRoute);

module.exports = app;
