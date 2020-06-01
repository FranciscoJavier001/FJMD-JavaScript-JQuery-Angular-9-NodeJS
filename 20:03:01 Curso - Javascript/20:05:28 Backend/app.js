'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargar archivos Rutas
var project_routers = require('./routes/project');

// middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// rutas
app.use('/api', project_routers)

//exportar
module.exports = app;