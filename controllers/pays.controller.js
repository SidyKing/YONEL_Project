const express = require('express');
const routes = express.Router();

const PaysService = require("../services/pays.service");

routes.get('/', PaysService.getAllPays);
routes.get('/:id', PaysService.getPaysById);
routes.post('/', PaysService.createPays);
routes.delete('/:id', PaysService.deletePays);
routes.put('/:id', PaysService.updatePays);

module.exports = routes;
