const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const topicReplySchema = new Schema({
    topic_id: {
        type: Schema.Types.ObjectId,
        ref: 'Topic'
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    user_name: {
        type: 'String',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    updated_at: {
        type: Date,
        default: Date.now()
    }
});

const TopicReply = mongoose.model("TopicReply", topicReplySchema);

module.exports = TopicReply;