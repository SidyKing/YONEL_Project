const express = require('express');
const routes = express.Router();

const SousAgenceService = require("../services/sous_agence.service");

routes.get('/', SousAgenceService.getAllSousAgence);
routes.get('/:id', SousAgenceService.getSousAgenceById);
routes.post('/', SousAgenceService.createSousAgence);
routes.delete('/:id', SousAgenceService.deleteSousAgence);
routes.put('/:id', SousAgenceService.updateSousAgence);

module.exports = routes;
