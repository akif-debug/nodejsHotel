const mongoose = require('mongoose');
require('dotenv').config();

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoURL = process.env.MONGO_DB_URL_LOCAL;
// const mongoURL = process.env.MONGO_DB_URL;

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
  console.log('Connected to mongoDB server');
});

db.on('error', () => {
  console.log('mongoDB connection error');
});

db.on('disconnected', () => {
  console.log('mongoDB disconnected');
});

module.exports = db;
