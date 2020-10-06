const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new mongoose.Schema({
    category_id: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    title: {
        String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
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

const Topic = mongoose.model("Topic", TopicSchema);

module.exports = Topic;