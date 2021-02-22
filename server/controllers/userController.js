const db = require('../models');

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
        .find({ role_id: 3 })
        .then(user => user)
        .catch(err => console.log(err));
  }
};