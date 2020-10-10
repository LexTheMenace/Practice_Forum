const db = require('../models');
const Joi = require('joi');

const schema = Joi.object().keys({
  display_name: Joi.string().required(),
  email: Joi.string().email(),
  google_id: Joi.string().required(),
  image_url: Joi.string().uri({
    scheme: [
      /https/
    ]
  }),
  role_id: Joi.number().integer()
});


module.exports = {
  findByEmail: (email) => {
    return db.User
      .findOne({ email })
      .then(user => {
        return user;
      })
      .catch(err => {
        console.log(err)
      })
  },
  update: (_id, user) => {
    return db.User
      .findOneAndUpdate({ _id }, user)
      .then(user => {
        return user
      })
      .catch(err => err);
  },
  joiInsert: (req, res) => {
    db.User
      .create(req.body.newUser)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  insert: (user) => {
    return db.User
      .create(user)
      .then(user => {
        console.log(user);
        return user;
      })
      .catch(err => console.log(err));
  },
  findAdmins: () => {
    return db.User
        .find({ role_id: '5f7c93fd189c9a186c9ed6d9' })
        .then(user => {
          return user
        })
        .catch(err => console.log(err));
  }
};