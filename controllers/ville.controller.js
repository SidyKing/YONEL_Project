const express = require('express');
const routes = express.Router();

const VilleService = require("../services/ville.service");

routes.get('/', VilleService.getAllVille);
routes.get('/:id', VilleService.getVilleById);
routes.post('/', VilleService.createVille);
routes.delete('/:id', VilleService.deleteVille);
routes.put('/:id', VilleService.updateVille);

module.exports = routes;
