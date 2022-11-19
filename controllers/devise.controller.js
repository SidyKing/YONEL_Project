const express = require('express');
const routes = express.Router();

const DeviseService = require("../services/devise.service");

routes.get('/', DeviseService.getAllDevise);
routes.get('/:id', DeviseService.getDeviseById);
routes.post('/', DeviseService.createDevise);
routes.delete('/:id', DeviseService.deleteDevise);
routes.put('/:id', DeviseService.updateDevise);

module.exports = routes;
