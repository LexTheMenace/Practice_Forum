const mongoose = require("mongoose");
const db = require("../models");

//Set db to variable
const uri = process.env.MONGODB_URI || require('../config/keys').mongoURI; 

//Connect to Mongo
mongoose.connect(uri)

const roleSeed = [
    {
      name: 'user'
    },
    {
      name: 'moderator'
    },  
    {
      name: 'admin'
    },

];

db.Role.remove({})
  .then(() => db.Role.collection.insertMany(roleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    console.log(data.result);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

