const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello to our hotel');
});

const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

app.use('/person', personRoutes);
app.use('/menuItem', menuRoutes);

app.listen(PORT, () => {
  console.log('listening on port 3000');
});
