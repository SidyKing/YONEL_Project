const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();

app.use(logger('dev'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
 })

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }))

var db = require("./models");

//calling controllers
const AgenceController = require('./controllers/agence.controller');
app.use('/agence', AgenceController);

const BalanceController = require('./controllers/balance.controller');
app.use('/balance', BalanceController);

const ClientController = require('./controllers/client.controller');
app.use('/client', ClientController);

const DeviseController = require('./controllers/devise.controller');
app.use('/devise', DeviseController);

const PaiementController = require('./controllers/paiement.controller');
app.use('/paiement', PaiementController);

const PaysController = require('./controllers/pays.controller');
app.use('/pays', PaysController);

const SousAgenceController = require('./controllers/sous_agence.controller');
app.use('/sousAgence', SousAgenceController);

const TransactionController = require('./controllers/transaction.controller');
app.use('/transaction', TransactionController);

const UserController = require('./controllers/user.controller');
app.use('/user', UserController);

const VilleController = require('./controllers/ville.controller');
app.use('/ville', VilleController);


db.sequelize.sync(/* { force: true } */)
    .then(() => {
        console.log("Base de données bien synchronisée.");
    })
    .catch((err) => {
        console.log("Echec lors de la synchronisation: " + err.message);
    });

app.use(cors(), function (req, res, next) {
     res.header("Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept",
     "http://localhost:4200") 
    });
// mise à jour pour correspondre au domaine que vous fera la demande à partir de res.header ("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next ();});


app.get('/', (req, res) => {
    console.log('welcome to the backend');
    res.json({ "YONEL APP": "By Sidy & Laye" });
});


app.listen(process.env.PORT || 5000, function () { console.log(`Node server listening on port ${process.env.PORT || 5000}`); });
