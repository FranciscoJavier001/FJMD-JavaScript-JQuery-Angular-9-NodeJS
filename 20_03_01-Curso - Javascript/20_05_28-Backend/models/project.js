'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectsSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

module.exports = mongoose.model('Project', ProjectsSchema);
// projects --> guarda los documents en la coleccion