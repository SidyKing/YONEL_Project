const express = require('express');
const routes = express.Router();

const ClientService = require("../services/client.service");

routes.get('/', ClientService.getAllClient);
routes.get('/:id', ClientService.getClientById);
routes.post('/', ClientService.createClient);
routes.delete('/:id', ClientService.deleteClient);
routes.put('/:id', ClientService.updateClient);

module.exports = routes;
