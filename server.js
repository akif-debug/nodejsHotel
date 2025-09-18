const express = require('express');
const app = express();
const passport = require('./auth');
require('dotenv').config();
require('./db'); // just importing connects to DB

const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');

app.use(express.json()); // replaces bodyParser.json()

const PORT = process.env.PORT || 3000;

// ✅ Call initialize()
app.use(passport.initialize());

const localAuthMiddleWare = passport.authenticate('local', { session: false });

app.get('/', (req, res) => {
  res.send('Welcome to our hotel');
});

app.use('/person', localAuthMiddleWare, personRoutes);
app.use('/menuItem', menuRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
