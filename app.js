const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const neo4j = require('neo4j-driver').v1;
const neo = require('./neo4j_setup');

mongoose.Promise = global.Promise;


mongoose.connect('mongodb+srv://Admin:Admin@studdit-jqot2.gcp.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});
console.log('mongoose werkt!')
const driver = neo4j.driver('bolt://hobby-ohmdodfghkjagbkemhkmcfbl.dbs.graphenedb.com:24786', neo4j.auth.basic('admin', 'b.s2yvRXIljPmM.s875PlpsZpSYvSAp'));
const session = driver.session();


// process.on('exit', function() {
//     neo.driver.close();
// });


const app = express();
routes(app);

module.exports = app;