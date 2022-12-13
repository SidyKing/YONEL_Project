const express = require('express');
const routes = express.Router();

const BalanceService = require("../services/balance.service");

routes.get('/', BalanceService.getAllBalance);
routes.get('/:id', BalanceService.getBalanceById);
routes.post('/verifAgenceCode', BalanceService.verifAgence);
routes.post('/', BalanceService.createBalance);
routes.delete('/:id', BalanceService.deleteBalance);
routes.put('/:id', BalanceService.updateBalance);

module.exports = routes;
