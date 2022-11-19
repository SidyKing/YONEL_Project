const express = require('express');
const routes = express.Router();

const AgenceService = require("../services/agence.service");

routes.get('/', AgenceService.getAllAgence);
routes.get('/:id', AgenceService.getAgenceById);
routes.post('/', AgenceService.createAgence);
routes.delete('/:id', AgenceService.deleteAgence);
routes.put('/:id', AgenceService.updateAgence);

module.exports = routes;
