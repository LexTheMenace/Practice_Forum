const db = require('../models');

module.exports = {
  insert: (category) => {
    return db.Category
    .create(category)
    .then(category => {
      return category;
    })
    .catch(err => err);
    },
    getAll: () => {
        return db.Category
        .find()
        .then(categories => categories)
        .catch(err => err);
    }
};