const mongoose = require("mongoose");
const { Role } = require("../models");
require('dotenv').config();

//Set db to variable
const uri = process.env.MONGODB_URI;

//Connect to Mongo
mongoose.connect(uri)

const roleSeed = [
    {
      _id: 1,
      name: 'user'
    },
    {
      _id: 2,
      name: 'moderator'
    },  
    {
      _id: 3,
      name: 'admin'
    }
];

Role.remove({})
  .then(() => Role.collection.insertMany(roleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    console.log(data.result);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });