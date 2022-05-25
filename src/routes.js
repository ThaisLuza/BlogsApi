const express = require('express');
const loginController = require('./database/controllers/loginController');
const userController = require('./database/controllers/userController.js');
const validNewUser = require('./middlewares/validNewUser');
const authMiddleware = require('./middlewares/authToken');

const apiRoutes = express.Router();

apiRoutes.post('/login', loginController.validateBody);

apiRoutes.post('/user', validNewUser, userController.create);

apiRoutes.get('/user/:id', authMiddleware, userController.findById);

apiRoutes.get('/user', authMiddleware, userController.getAll);

module.exports = apiRoutes;
