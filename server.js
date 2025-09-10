const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello to our hotel');
});

const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

app.use('/person', personRoutes);
app.use('/menuItem', menuRoutes);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
