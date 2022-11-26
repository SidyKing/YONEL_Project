const express = require('express');
const routes = express.Router();

const UserService = require("../services/user.service");

routes.post('/login', UserService.login)
routes.get('/', UserService.getAllUser);
routes.get('/:id', UserService.getUserById);
routes.post('/register', UserService.register);
routes.delete('/:id', UserService.deleteUser);
routes.put('/:id', UserService.updateUser);

module.exports = routes;
