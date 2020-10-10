const db = require('../models');
const Joi = require('joi');
const { insertIntoTableAndValidate } = require('./index');
const schema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  image_url: Joi.string()
});


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