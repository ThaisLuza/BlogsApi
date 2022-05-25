const express = require('express');
const loginController = require('./database/controllers/loginController');

// const authMiddleware = require('./middlewares/authToken');

const apiRoutes = express.Router();

apiRoutes.post('/login', loginController.validateBody);

module.exports = apiRoutes;
