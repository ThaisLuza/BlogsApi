const express = require('express');
const loginController = require('./database/controllers/loginController');
const userController = require('./database/controllers/userController.js');
const categoryController = require('./database/controllers/categoryController');
const validNewUser = require('./middlewares/validNewUser');
const verifyToken = require('./middlewares/authToken');
const validPost = require('./middlewares/validPost');

const apiRoutes = express.Router();

apiRoutes.post('/login', loginController.validateBody);

apiRoutes.post('/user', validNewUser, userController.create);

apiRoutes.get('/user/:id', verifyToken, userController.findById);

apiRoutes.get('/user', verifyToken, userController.getAll);

apiRoutes.post('/categories', verifyToken, validPost, categoryController.create);

apiRoutes.get('/categories', verifyToken, categoryController.getAll);

module.exports = apiRoutes;
