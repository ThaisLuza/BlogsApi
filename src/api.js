const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares/midError');

const app = express();

app.use(express.json());

app.use(routes);

app.use(middlewares);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
