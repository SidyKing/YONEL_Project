const express = require('express');
const routes = express.Router();

const TransactionService = require("../services/transaction.service");

routes.get('/', TransactionService.getAllTransaction);
routes.get('/:id', TransactionService.getTransactionById);
routes.post('/userID',TransactionService.getTransactionByUserID);
routes.post('/', TransactionService.createTransaction);
routes.delete('/:id', TransactionService.deleteTransaction);
routes.put('/:id', TransactionService.updateTransaction);

module.exports = routes;
