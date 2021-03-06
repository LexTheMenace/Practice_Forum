const db = require('../models');

module.exports = {
  insert: (topic) => {
    return db.Topic
    .create(topic)
    .then(topic => {
      return topic;
    })
    .catch(err => err);
    },
    getAll: () => {
        return db.Topic
        .find()
        .then(topics => topics)
        .catch(err => err);
    },
    getCat: (id) => {
      return db.Topic
      .find({category_id: id})
      .then(res => res)
      .catch(err => console.log(err))
    }
};