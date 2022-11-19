const express = require('express');
const routes = express.Router();

const PaiementService = require("../services/paiement.service");

routes.get('/', PaiementService.getAllPaiement);
routes.get('/:id', PaiementService.getPaiementById);
routes.post('/', PaiementService.createPaiement);
routes.delete('/:id', PaiementService.deletePaiement);
routes.put('/:id', PaiementService.updatePaiement);

module.exports = routes;
