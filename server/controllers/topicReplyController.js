const db = require('../models');

module.exports = {
  insert: (topicReply) => {
    return db.TopicReply
    .create(topicReply)
    .then(reply => {
      return reply;
    })
    .catch(err => err);
    },
    getReplies: (id) => {
      return db.TopicReply
      .find({ topic_id: id})
      .then(replies => replies)
      .catch(err => console.log(err))
    }
};