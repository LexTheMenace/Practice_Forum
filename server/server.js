var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const { notFound, errorHandler } = require('./middleware')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Set db to variable
const uri = process.env.MONGODB_URI || require('./config/keys').mongoURI; 

//Connect to Mongo
mongoose.connect(uri)
 .then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'Hey'
    })
})
// Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
