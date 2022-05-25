const express = require('express');
const loginController = require('./database/controllers/loginController');
const createUserController = require('./database/controllers/userController.js');
const validNewUser = require('./middlewares/validNewUser');
const authMiddleware = require('./middlewares/authToken');

const apiRoutes = express.Router();

apiRoutes.post('/login', loginController.validateBody);

apiRoutes.post('/user', validNewUser, createUserController.create);

apiRoutes.get('/user', authMiddleware, createUserController.getAll);
module.exports = apiRoutes;
