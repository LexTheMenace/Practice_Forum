const mongoose = require("mongoose");
const { User } = require("../models");
require('dotenv').config();

//Set db to variable
const uri = process.env.MONGODB_URI;
console.log(uri);
//Connect to Mongo
mongoose.connect(uri)

const userSeed = {
    banned: false,
    display_name: 'Guest',
    email: null,
    image_url: 'http://media.pixcove.com/N/8/8/Man-Gentleman-Silhouette-Gray-Free-Illustrations-F-0424.jpg',
    role_id: 0
  };

User.create(userSeed)
  .then(data => {
    console.log(data + " record inserted!");
    console.log(data.result);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });