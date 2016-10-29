var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var massive = require('massive');
var connectionString = "postgres://hillaryvanpatten@localhost/sandbox";


var massiveInstance = massive.connectSync({connectionString : connectionString})
var app = module.exports = express();

var controller = require('./controller.js');
app.set('db', massiveInstance);
var db = app.get('db');
app.use(bodyParser.json());
app.use(cors());

app.listen('3000', function(){
  console.log("Successfully listening on : 3000")
})

controller.getPlanes();
// db.new_plane(function(err, planes){
    // console.log(err, "plane added")
// });

// db.get_planes(function(err, planes){
//     console.log(err, planes)
// })
