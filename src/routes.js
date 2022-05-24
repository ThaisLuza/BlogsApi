const express = require('express');
const login = require('./controllers/login');

// const authMiddleware = require('./middlewares/authToken');

const apiRoutes = express.Router();

apiRoutes.post('/login', login);

module.exports = apiRoutes;
