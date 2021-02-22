var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

const passport = require('passport');
const mongoose = require('mongoose');

require('dotenv').config();

const { checkAuthHeaderSetUser, notFound, errorHandler } = require('./middleware')
const auth = require('./auth');
const api = require('./routes/api')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passport.initialize());
app.use(cors());

app.use('/api/v1', api)
//Set db to variable
const uri = process.env.MONGODB_URI
//Connect to Mongo
mongoose.connect(uri)
 .then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))

app.use(checkAuthHeaderSetUser)

// Routes
app.use('/', express.static("client/build/"));

// Auth
app.use('/auth', auth);

// Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
