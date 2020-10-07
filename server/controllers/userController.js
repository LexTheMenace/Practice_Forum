const db = require('../models')

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
  findByEmail: (req, res) => {
    console.log(req.params);
    db.User
      .find({ email: req.body.email})
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  joiInsert: (req, res) => {
    db.User
      .create(req.body.newUser)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
    },
  insert: (req, res) => {
    db.User
      .create(req.body.newUser)
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
    }
  };