const express = require('express');
const app = express();
const port = 4500;

app.listen(port);

var routes = require('./routes/routes');
app.use('/', routes);

console.log(`Server available on ${port}.`);
