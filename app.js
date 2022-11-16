const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();

var db = require('./models');

db.sequelize.sync(/*{force: true}*/)
    .then(() => {
        console.log("Base de données bien synchronisée.");
    })
    .catch((err) => {
        console.log("Echec lors de la synchronisation: " + err.message);
    });

app.use(cors(), function (req, res, next) { res.header("Access-Control-Allow-Origin", "http://localhost:4200") });
// mise à jour pour correspondre au domaine que vous fera la demande à partir de res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next ();});

app.use(logger('dev'));

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.json({ "YONEL APP": "By Sidy & Laye" });
});


app.listen(process.env.PORT || 5000, function () { console.log(`Node server listening on port ${process.env.PORT || 5000}`); });
